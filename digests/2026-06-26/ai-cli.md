# AI CLI 工具社区动态日报 2026-06-26

> 生成时间: 2026-06-25 18:45 UTC | 覆盖工具: 9 个

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
**日期：** 2026-06-26
**分析师：** Agnes-2.0-Flash

## 1. 生态全景
2026年中旬，AI CLI 工具生态已从单一的代码补全工具演变为具备复杂代理（Agent）能力的开发操作系统。各大厂商正通过深化 MCP（Model Context Protocol）集成、强化多代理协作（Multi-Agent Orchestration）以及优化本地运行时稳定性来构建竞争壁垒。尽管功能日益丰富，但跨平台兼容性（尤其是 Windows/Linux 特定环境）、计费透明度及安全护栏的灵活性仍是制约企业级采纳的主要痛点。

## 2. 各工具活跃度对比

| 工具名称 | 今日 Release | 热门 Issues 数 | 重要 PR 数 | 核心动态简述 |
| :--- | :---: | :---: | :---: | :--- |
| **Claude Code** | ✅ v2.1.191 | 10 | 2 | 引入 `/rewind` 上下文恢复；社区聚焦 Linux 安全护栏误报及 macOS 标签页清理。 |
| **OpenAI Codex** | ✅ rust-v0.142.2 | 10 | 10 | **极高活跃**。修复配额激增严重 Bug；大量 PR 重构 MCP 运行时与权限管理。 |
| **Gemini CLI** | ✅ v0.49.0-nightly | 10 | 10 | 修复路径遍历安全漏洞；社区高度关注子代理稳定性与 Wayland 兼容性。 |
| **GitHub Copilot** | ✅ v1.0.65 | 10 | 1 | 优化会话目录持久化；社区焦点为移动端功能缺失及配额扣减异常。 |
| **Kimi Code CLI** | ❌ None | 1 | 1 | **低活跃**。仅修复 MCP 配置传播 Bug；用户报告 Linux UI 渲染抖动。 |
| **OpenCode** | ✅ v1.17.11 | 10 | 10 | 引入会话快照回滚；Windows/WSL 平台出现严重稳定性回归（崩溃/黑屏）。 |
| **Pi** | ❌ None | 10 | 10 | **高活跃**。聚焦 TUI 稳定性修复、多模型兼容性及 RPC 接口扩展。 |
| **Qwen Code** | ✅ v0.19.2-nightly | 10 | 10 | 修复 PowerShell 内存泄漏；推进语音听写桌面集成及上下文压缩流式处理。 |
| **DeepSeek TUI** | ❌ None | 10 | 10 | **高活跃**。优化 Plan/Agent 模式路由；推动原生 Rust 客户端以减少延迟。 |

## 3. 共同关注的功能方向

*   **MCP 生态的深度集成与标准化**
    *   **涉及工具：** OpenAI Codex, Gemini CLI, Kimi Code, OpenCode, DeepSeek TUI.
    *   **诉求：** 几乎所有头部工具都在解决 MCP 服务器的生命周期管理、权限隔离及配置继承问题。用户希望 MCP 工具能在子代理、恢复会话及不同配置层级间无缝共享。
*   **代理（Agent）的可控性与安全性**
    *   **涉及工具：** Claude Code, Gemini CLI, OpenCode, DeepSeek TUI.
    *   **诉求：** 社区强烈要求更细粒度的权限控制（如 Claude 的 Safety Harness 误报、OpenCode 的跨会话撤销影响）。同时，用户关注代理行为的透明度，如“假成功”状态、思维链泄露及审批模态框的合理性。
*   **跨平台一致性与稳定性**
    *   **涉及工具：** OpenAI Codex, OpenCode, Qwen Code, DeepSeek TUI.
    *   **诉求：** Windows（特别是 WSL/AppImage/Store 包）和 Linux（Wayland/X11）是 Bug 高发区。用户普遍反映在不同 OS 上体验割裂，急需解决资源泄漏、UI 渲染错位及进程挂起等底层稳定性问题。
*   **计费透明与配额管理**
    *   **涉及工具：** OpenAI Codex, GitHub Copilot.
    *   **诉求：** 针对高成本模型（如 GPT-5.5），用户遭遇配额异常消耗，要求提供透明的 Token 计数机制、清晰的配额重置逻辑及更灵活的模型列表查询。

## 4. 差异化定位分析

*   **企业级与合规导向：**
    *   **GitHub Copilot CLI** 和 **OpenAI Codex** 侧重于与企业现有工作流（GitHub, Azure/OpenAI Enterprise）的无缝对接，强调代理间的协作、OAuth 管理及企业网络兼容性（Proxy/PAC）。
*   **极客与定制化导向：**
    *   **Pi** 和 **DeepSeek TUI** 更受开发者个人喜爱，提供高度的可配置性、多模型支持（甚至包括国产模型）及本地化部署选项（如单二进制分发、原生 Rust 运行时）。
    *   **OpenCode** 通过会话快照和深度 IDE 集成（ACP），吸引那些需要类似传统 IDE 强大重构和调试能力的用户。
*   **安全与隐私导向：**
    *   **Gemini CLI** 和 **Claude Code** 在安全层面投入巨大，分别修复了路径遍历漏洞和安全护栏误报，反映了 Anthropic 和 Google 对 AI 操作本地文件系统风险的重视。
*   **新兴与垂直领域：**
    *   **Kimi Code CLI** 目前功能相对基础，主要集中在 MCP 支持的完善，尚未展现出与其他巨头在复杂代理工作流上的显著差异化优势。

## 5. 社区热度与成熟度

*   **高成熟度与高活跃度：** **OpenAI Codex** 和 **OpenCode**。两者均拥有大量的 PR 合并和问题修复，表明其核心架构已进入快速迭代和精细化打磨阶段。但这也伴随着较高的回归错误率（如 OpenCode 的 Windows 崩溃）。
*   **稳健增长：** **Claude Code** 和 **Gemini CLI**。功能迭代稳定，社区反馈集中在具体功能优化（如 Rewind, Safety）而非底层架构动荡，显示出较高的产品成熟度。
*   **快速追赶/高波动：** **DeepSeek TUI** 和 **Pi**。虽然 Issue 和 PR 数量多，但部分源于对 TUI 稳定性和多模型兼容性的频繁调整，显示出产品在快速适应市场需求，但稳定性尚待巩固。
*   **待观察：** **Kimi Code CLI**。社区互动较少，功能更新频率低，市场影响力目前弱于其他主要竞品。

## 6. 值得关注的趋势信号

*   **从“单次对话”到“持久化工作流”：**
    *   多个工具（Claude `/rewind`, OpenCode 快照, Qwen Todo 同步, Pi 会话管理）都在强化会话状态的持久化和可回溯性。未来的 CLI 工具将更像是一个具有记忆和版本控制能力的开发伴侣，而非简单的问答机器人。
*   **MCP 成为事实标准：**
    *   MCP 不再仅仅是插件协议，而是成为了代理间共享上下文、工具和权限的核心基础设施。谁能更好地解决 MCP 在复杂代理架构下的冲突、安全和性能问题，谁就能占据生态高地。
*   **原生运行时与性能优化：**
    *   社区对 Node.js/TSCript 运行时的冷启动和内存占用不满（DeepSeek Rust 请求, Pi 单二进制需求）。未来可能出现更多基于 Rust 或其他原生语言的 CLI 工具，以追求极致的响应速度和资源效率。
*   **安全护栏的“人性化”调整：**
    *   Claude 和 Gemini 的案例表明，过于激进的安全拦截会严重阻碍开发者工作。未来的趋势将是基于上下文的动态安全策略，而非一刀切的黑名单，以平衡安全性与生产力。
*   **企业级管控需求的显性化：**
    *   对 HTTP 代理支持、集中配置管理、审计日志的需求激增（OpenAI, GitHub, Qwen）。这意味着 AI CLI 工具正在从个人开发者玩具转变为企业核心研发基础设施，合规性和可管理性将成为选型的关键指标。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：** 2026-06-26
**分析师：** Agnes-2.0-Flash

## 1. 热门 Skills 排行 (Top 5)
基于 PR 活跃度、技术深度及社区痛点解决能力筛选。

1.  **Skill Creator 核心修复系列 (Bug Fixes)**
    *   **功能：** 修复 `run_eval.py` 在 Windows 环境下的崩溃、YAML 解析错误及触发检测失效问题（PR #1298, #1099, #1050, #1323）。
    *   **热点：** 这是当前社区最关注的技术债。由于 Skill Creator 是构建其他 Skills 的基础工具，其评估脚本的逻辑缺陷导致所有 Skill 描述优化循环失效（Recall 始终为 0%），引发大量开发者反馈。
    *   **状态：** Open
    *   **链接：** [PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1323](https://github.com/anthropics/skills/pull/1323)

2.  **Document Typography (排版质量控制)**
    *   **功能：** 专门用于纠正 AI 生成文档中的排版瑕疵，如孤儿词、寡妇段、编号对齐等（PR #514）。
    *   **热点：** 解决了“内容正确但呈现粗糙”的长期痛点，直接提升专业文档生成的可用性。
    *   **状态：** Open
    *   **链接：** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **Frontend Design Clarity (前端设计技能优化)**
    *   **功能：** 重构前端设计 Skill，使其指令更具可操作性和内部一致性，确保 Claude 能在单次对话中遵循（PR #210）。
    *   **热点：** 强调“Actionability”，反映了用户对 Skill 从“知识科普”向“执行指南”转变的需求。
    *   **状态：** Open
    *   **链接：** [PR #210](https://github.com/anthropics/skills/pull/210)

4.  **SAP-RPT-1-OSS Predictor (企业级预测分析)**
    *   **功能：** 集成 SAP 开源表格基础模型，用于 SAP 业务数据的预测性分析（PR #181）。
    *   **热点：** 代表了 Enterprise AI 技能的前沿探索，将大语言模型与专用垂直领域模型结合。
    *   **状态：** Open
    *   **链接：** [PR #181](https://github.com/anthropics/skills/pull/181)

5.  **Testing Patterns (测试模式综合技能)**
    *   **功能：** 涵盖测试哲学、单元测试、React 组件测试等全栈测试模式（PR #723）。
    *   **热点：** 填补了测试领域的系统化 Skill 空白，强调最佳实践而非单一代码片段。
    *   **状态：** Open
    *   **链接：** [PR #723](https://github.com/anthropics/skills/pull/723)

## 2. 社区需求趋势
从 Issues 中提炼出的四大核心诉求：

*   **基础设施与安全性 (Infrastructure & Security)：**
    *   **信任边界滥用：** Issue #492 指出社区 Skill 冒充官方 Anthropic 技能的风险，急需建立严格的命名空间审核机制。
    *   **跨平台兼容性：** 多个 Issue (#1061, #556) 聚焦于 Windows 环境的兼容性问题，表明非 Unix/Linux 用户群体庞大且痛点明显。
*   **企业协作与共享 (Enterprise Collaboration)：**
    *   **组织内共享：** Issue #228 强烈呼吁支持 Org-wide Skill 共享库，解决目前手动分发 `.skill` 文件的低效流程。
    *   **权限与安全：** Issue #1175 关注在 Agent Skills 中处理敏感数据（如 SharePoint）时的上下文窗口安全和访问控制逻辑。
*   **持久化记忆与状态管理 (Persistent Memory)：**
    *   **长上下文优化：** Issue #154 和 #1329 提出“Memory Skills”，旨在通过符号化或结构化方式压缩 Agent 的长期记忆，减少 Token 消耗并提高上下文利用率。
*   **元工具链完善 (Meta-Tooling)：**
    *   **Skill 质量分析：** Issue #83 和 #202 建议引入 `skill-quality-analyzer` 和 `skill-security-analyzer`，并批评现有 Creator 工具文档化过度而操作性不足。

## 3. 高潜力待合并 Skills
以下 PR 评论活跃、逻辑清晰，且解决了关键痛点，近期被合并的可能性较高：

1.  **PDF Case-Sensitivity Fix**
    *   **理由：** 简单的文件引用大小写修正，直接修复 Linux/macOS 上的加载失败问题，无副作用。
    *   **链接：** [PR #538](https://github.com/anthropics/skills/pull/538)
2.  **DOCX Tracked Change Collision Fix**
    *   **理由：** 修复文档损坏的关键 Bug，涉及 OOXML 底层 ID 冲突，修复方案明确。
    *   **链接：** [PR #541](https://github.com/anthropics/skills/pull/541)
3.  **YAML Validation Pre-check**
    *   **理由：** 增加对特殊字符的预校验，防止静默解析失败，提升 Skill 创建的健壮性。
    *   **链接：** [PR #539](https://github.com/anthropics/skills/pull/539)
4.  **AppDeploy Skill**
    *   **理由：** 提供完整的 Web 应用部署生命周期管理，具有明确的商业价值和应用场景。
    *   **链接：** [PR #360](https://github.com/anthropics/skills/pull/360)

## 4. Skills 生态洞察
> **当前社区最集中的诉求是：从“展示能力”转向“可靠执行”。**
> 开发者不再满足于仅提供提示词模板，而是迫切需要通过修复底层评估工具（Skill Creator）的 Bug、增强 Windows 兼容性、以及建立严格的质量与安全标准，来确保 Skills 在真实生产环境中能够稳定、准确地触发和执行。

---

# Claude Code 社区动态日报
**日期：** 2026-06-26
**来源：** GitHub (anthropics/claude-code)

## 1. 今日速览
v2.1.191 版本正式发布，重点引入了 `/rewind` 命令以恢复 `/clear` 前的对话上下文，并修复了后台代理异常复活及流式响应滚动问题。社区讨论焦点集中在 macOS 端的 Chrome Tab Group 自动清理功能，以及 Linux 环境下大量关于安全分类器（Safety Harness）误报基础设施管理操作的反馈。

## 2. 版本发布
**v2.1.191**
*   **新功能：** 新增 `/rewind` 支持，允许用户在执行 `/clear` 后回溯并恢复之前的对话状态。
*   **修复：** 解决了在流式响应期间阅读早期输出时，滚动位置跳到底部的问题。
*   **修复：** 修复了被停止的后台代理（Background Agents）意外“复活”的现象。
*   [查看 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

## 3. 社区热点 Issues
以下 Issue 因高关注度或代表性问题被选中：

1.  **[FEATURE] 自动清理 Chrome Tab Groups (#15436)**
    *   **重要性：** 解决 Claude in Chrome 会话结束后标签页组残留导致的浏览器混乱问题。
    *   **社区反应：** 极高热度，45个赞，20条评论，用户强烈呼吁原生支持自动清理。
    *   [链接](https://github.com/anthropics/claude-code/issues/15436)

2.  **[BUG] Windows 下 /desktop 在 MSIX/Store 包安装时失败 (#59692)**
    *   **重要性：** 影响 Windows 用户通过 Microsoft Store 安装 Claude Desktop 后的桌面集成体验。
    *   **社区反应：** 7条评论，被视为旧问题 #36079 的重提。
    *   [链接](https://github.com/anthropics/claude-code/issues/59692)

3.  **[BUG] Age verification 触发内容过滤错误 (#71357)**
    *   **重要性：** 揭示年龄验证功能可能错误地触发 Anthropic API 的内容安全策略，导致中断。
    *   **社区反应：** 新报 Bug，需确认是否为用户配置问题还是系统逻辑缺陷。
    *   [链接](https://github.com/anthropics/claude-code/issues/71357)

4.  **[BUG] Desktop Session PR Picker 显示过时数据 (#71326)**
    *   **重要性：** 桌面应用的 PR 选择器缓存了已合并或关闭的 PR 状态，且无法刷新，影响代码审查工作流。
    *   **社区反应：** 发现新的数据丢失现象，此前类似关闭问题再次复现。
    *   [链接](https://github.com/anthropics/claude-code/issues/71326)

5.  **[FEATURE] 公开 Deep Link 打开 Marketplace 对话框 (#62481)**
    *   **重要性：** 为第三方插件开发者提供一键添加市场的 URL scheme，提升插件分发效率。
    *   **社区反应：** 1个赞，明确的功能缺失。
    *   [链接](https://github.com/anthropics/claude-code/issues/62481)

6.  **[BUG] 安全分类器对 Linux 基础设施操作的大量误报 (#71373, #71374, #71378 等)**
    *   **重要性：** 多位用户报告同一系列问题，指出安全护栏（Harness）错误阻止了 WiFi 配置、SSH 密钥引导、Caddy 证书信任等合法的管理任务。
    *   **社区反应：** 集中爆发，显示当前安全策略在复杂运维场景下的僵化。
    *   [链接示例](https://github.com/anthropics/claude-code/issues/71373)

7.  **[BUG] MCP Tool-Result Widgets 渲染为空 (#65653)**
    *   **重要性：** 桌面版应用中 MCP 工具返回的富文本组件显示为空白框，影响 Atlassian 等连接器体验。
    *   **社区反应：** 1条评论，UI 渲染层的关键 Bug。
    *   [链接](https://github.com/anthropics/claude-code/issues/65653)

8.  **[BUG] Tmux Teammates 隔离失效 (#71362)**
    *   **重要性：** v2.1.191 中 `isolation: "worktree"` 参数在 tmux 模式下无效，导致代理共享工作树，引发潜在冲突。
    *   **社区反应：** 1条评论，直接关联最新版本的功能回归。
    *   [链接](https://github.com/anthropics/claude-code/issues/71362)

9.  **[ENHANCEMENT] 可配置的 Prompt 光标形状 (#71371)**
    *   **重要性：** 用户希望自定义 TUI 中的光标样式（如条形或下划线），以适配不同终端模拟器（Warp/iTerm）的习惯。
    *   **社区反应：** 1条评论，个性化体验需求。
    *   [链接](https://github.com/anthropics/claude-code/issues/71371)

10. **[BUG] 无法连接 API (ConnectionRefused) (#71188)**
    *   **重要性：** 严重连接问题，重试耗尽后应用完全不可用，影响基础可用性。
    *   **社区反应：** 1条评论，网络环境相关但需排查客户端逻辑。
    *   [链接](https://github.com/anthropics/claude-code/issues/71188)

## 4. 重要 PR 进展
1.  **Bump stale and autoclose timeouts from 14 to 90 days (#63686)**
    *   **内容：** 将 Issue 标记为 Stale 和自动关闭的时间阈值从 14 天延长至 90 天。
    *   **意义：** 显著减少因长期未活跃而被自动关闭的 Issue 数量，尊重长期维护的讨论串。
    *   [链接](https://github.com/anthropics/claude-code/pull/63686)

2.  **fix: handle server rate limiting during normal usage (#70634)**
    *   **内容：** 修复正常使用时服务器速率限制的处理逻辑。
    *   **意义：** 解决 #70631 提到的限流问题，提升在高负载或频繁调用场景下的稳定性。
    *   [链接](https://github.com/anthropics/claude-code/pull/70634)

*(注：过去24小时内仅提交/更新了上述 2 条 PR)*

## 5. 功能需求趋势
*   **工作流自动化与清理：** 用户对会话结束后的资源清理（如 Chrome Tab Groups）有强烈需求，希望减少手动维护成本。
*   **深度集成与可配置性：** 包括 Deep Link 支持、MCP 结果渲染修复、TUI 光标自定义等，反映用户追求更无缝、个性化的 IDE 和桌面体验。
*   **安全策略的灵活性：** 大量 Linux 用户反馈安全分类器过于激进，阻碍了正常的系统管理和运维操作，急需更细粒度的权限控制或白名单机制。

## 6. 开发者关注点
*   **安全护栏（Safety Harness）的误报率：** 这是今日最大的痛点。开发者在进行基础设施管理（WiFi、SSH、DNS、容器状态、API Token 处理）时，频繁遇到安全拦截。用户认为这些是明确的授权操作，当前的启发式分类器缺乏上下文感知能力，导致工作效率受阻。
*   **新版本回归问题：** v2.1.191 发布后立即出现了 `isolation: "worktree"` 在 tmux 模式下失效的问题，表明测试覆盖在特定组合场景下存在盲区。
*   **Windows 安装兼容性：** MSIX/Store 包下的桌面集成失败持续困扰部分 Windows 用户，需要官方提供更稳定的安装方案。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：** 2026-06-26

## 1. 今日速览
今日社区焦点集中在**配额消耗异常激增**的严重 Bug 上，大量用户报告 `gpt-5.5` 模型下 5 小时预算在几分钟内耗尽，引发高热度讨论。同时，OpenAI 发布了 `rust-v0.142.2` 补丁版本，主要优化了 MCP 工具搜索逻辑及 macOS/Windows 的系统代理支持。开发者正在通过一系列 PR 重构 MCP 运行时管理和权限配置，以解决并发冲突和资源泄漏问题。

## 2. 版本发布
### rust-v0.142.2
- **MCP 工具搜索优化**：默认启用工具搜索功能，提升工具发现效率，同时保持向后兼容。
- **系统代理支持增强**：
  - macOS：启用 `respect_system_proxy` 时可尊重系统代理、PAC 和 WPAD 设置。
  - Windows：新增对系统代理（含 PAC、WPAD、静态代理及绕过规则）的 opt-in 支持。
- **链接**：[rust-v0.142.2 Release](https://github.com/openai/codex/releases/tag/rust-v0.142.2)

> *注：`rust-v0.143.0-alpha` 系列版本仅发布无具体功能说明的 Alpha 构建，建议关注后续正式版本。*

## 3. 社区热点 Issues
以下 Issue 因高评论数或涉及核心稳定性问题备受关注：

1.  **[Bug] 配额消耗激增 (10-20x)**
    *   **ID**: [#28879](https://github.com/openai/codex/issues/28879)
    *   **重要性**：用户报告自 6 月 16 日起，Plus 计划使用 `gpt-5.5` 时，5 小时预算在 2-3 个提示中即耗尽，单 Token 成本占比异常升高。这是今日最严重的功能性故障。
    *   **社区反应**：147 条评论，287 个赞，情绪强烈。

2.  **[Bug] SQLite 日志导致 SSD 磨损**
    *   **ID**: [#28224](https://github.com/openai/codex/issues/28224)
    *   **重要性**：反馈 Codex 本地日志写入量巨大（估算年达 640TB），严重影响磁盘寿命。
    *   **社区反应**：84 条评论，380 个赞。作者表示相关 PR 已合并，问题大幅缓解，但仍具警示意义。

3.  **[Bug] 服务器侧配额计算错误**
    *   **ID**: [#30002](https://github.com/openai/codex/issues/30002)
    *   **重要性**：Pro 账户在重置后约 41 分钟内再次触发限额，实际仅消耗 1.35M Token，此前正常需 156M Token。证实了配额计算存在严重偏差。
    *   **社区反应**：17 条评论，3 个赞。

4.  **[Bug] 瞬时配额耗尽**
    *   **ID**: [#29955](https://github.com/openai/codex/issues/29955)
    *   **重要性**：用户报告发送一条消息后 100 信用点瞬间归零，5 小时限制重置为 0%。
    *   **社区反应**：21 条评论，2 个赞。

5.  **[Enhancement] 企业级 HTTP 代理支持**
    *   **ID**: [#6060](https://github.com/openai/codex/issues/6060)
    *   **重要性**：长期存在的功能请求，希望支持通过 `config.toml` 配置 `http_proxy`，以满足企业和学术环境的出站流量管控需求。
    *   **社区反应**：13 条评论，62 个赞。

6.  **[Bug] macOS 资源泄漏导致系统卡顿**
    *   **ID**: [#27662](https://github.com/openai/codex/issues/27662)
    *   **重要性**：Codex Desktop 在 macOS 上运行一段时间后耗尽 `syspolicyd`，导致全局“文件打开过多”错误，影响 Finder 和其他应用。
    *   **社区反应**：9 条评论，4 个赞。

7.  **[Bug] 模型容量不足错误**
    *   **ID**: [#29760](https://github.com/openai/codex/issues/29760)
    *   **重要性**：GPT Pro 用户在 macOS 上使用 `gpt-5.4 high` 时频繁遇到“Selected model is at capacity”错误。
    *   **社区反应**：25 条评论，1 个赞。

8.  **[Bug] iOS 无法显示 SSH 远程项目**
    *   **ID**: [#23527](https://github.com/openai/codex/issues/23527)
    *   **重要性**：移动端 Codex 无法同步 Mac 主机上已连接的 SSH 远程项目，破坏了跨设备工作流。
    *   **社区反应**：9 条评论，12 个赞。

9.  **[Bug] Windows 应用卡死**
    *   **ID**: [#29544](https://github.com/openai/codex/issues/29544)
    *   **重要性**：Windows 版 Codex App 无法创建新对话或自动化任务，发送按钮持续旋转。
    *   **社区反应**：4 条评论。

10. **[Bug] 会话状态不同步**
    *   **ID**: [#28495](https://github.com/openai/codex/issues/28495)
    *   **重要性**：在使用 `app-server` JSON-RPC 模式时，若发生上下文压缩，客户端会永久卡在“Compacting…”状态，尽管服务端已完成处理。
    *   **社区反应**：8 条评论。

## 4. 重要 PR 进展
以下 PR 展示了 Codex 在底层架构、MCP 管理和权限控制方面的重大改进：

1.  **[Refactor] Pin MCP runtime to each model step (#30101)**
    *   **内容**：将 MCP 运行时绑定到每个模型步骤，防止在模型推理过程中 MCP 管理器被替换导致的工具执行不一致问题。
    *   **状态**：Code-reviewed

2.  **[Refactor] Project selected MCP runtimes from extension-owned metadata (#30093)**
    *   **内容**：分离插件元数据和活跃 MCP 进程的生命周期，确保稳定的执行器根目录与动态的连接状态解耦。
    *   **状态**：Code-reviewed

3.  **[Feat] Allow partial MCP server definitions across config layers (#29905)**
    *   **内容**：允许在不同配置层中定义部分的 MCP 服务器配置，并在递归组合有效配置后才进行严格验证，提升了配置的灵活性。
    *   **状态**：Open

4.  **[Fix] Retry temporarily offline exec-server recovery (#30098)**
    *   **内容**：在执行服务器断开重连时，增加对 `409 environment_offline` 错误的重试机制，提高恢复成功率。
    *   **状态**：Open

5.  **[Fix] Retry failed Codex Apps MCP startup (#29920)**
    *   **内容**：解决 Host 拥有的 Codex Apps MCP 管理器在共享 Future 时可能缓存临时终止状态的问题，增加启动重试逻辑。
    *   **状态**：Open

6.  **[Feat] Add Codex-owned OAuth recovery (#30091)**
    *   **内容**：作为 8 部分堆栈的最后一步，防止并发的 MCP OAuth 刷新器重播旋转的刷新令牌或覆盖较新的凭证。
    *   **状态**：Open

7.  **[Feat] Consolidate the authority-neutral skill runtime (#30088 / #30100)**
    *   **内容**：合并重叠的技能运行时（core-skills 与 skills extension），确保模型在每一步能看到一致的技能视图，避免每次采样都重新扫描环境。
    *   **状态**：Code-reviewed

8.  **[Fix] Refresh one server in place (#30083)**
    *   **内容**：新增 `RefreshMcpServer` 操作，允许托管代理在不重新连接其他服务器的情况下单独轮换某个 MCP 凭据。
    *   **状态**：Open

9.  **[Feat] Expose permission profile to shell tools (#29941)**
    *   **内容**：注入 `CODEX_PERMISSION_PROFILE` 环境变量，使 Shell 工具能够以相同的命名权限配置文件启动嵌套命令。
    *   **状态**：Open

10. **[Fix] Rename sandbox permission profile flag (#30095)**
    *   **内容**：将 `--permissions-profile` 重命名为单数形式 `--permission-profile`，以更准确地反映其接受单个配置文件的语义，同时保持向后兼容。
    *   **状态**：Closed (Merged)

## 5. 功能需求趋势
*   **配额与计费透明度**：超过 40% 的高热度 Issue 都与配额消耗异常、计费错误或限额重置逻辑有关。用户对 `gpt-5.5` 等高成本模型的 Token 消耗机制极度敏感。
*   **MCP 生态稳定性**：社区高度关注 MCP 工具的发现、运行时的隔离以及 OAuth 凭证的安全刷新。开发者正在努力解决并发冲突和资源泄漏问题。
*   **企业网络兼容性**：对 HTTP 代理（PAC/WPAD）的支持是企业和学术用户的长期痛点，近期发布的版本对此有所回应，但仍有改进空间。
*   **跨平台一致性**：Windows 和 macOS 上出现的多起应用卡死、资源泄漏和 UI 同步问题，表明跨平台体验的一致性仍是薄弱环节。

## 6. 开发者关注点
*   **严重 Bug 修复**：当前最迫切的需求是修复导致配额快速耗尽的服务器端或客户端计费逻辑错误（Issues #28879, #30002, #29955）。
*   **资源管理**：开发者密切关注 macOS 上的文件描述符泄漏（#27662）和僵尸进程问题（#25744），这些直接影响系统稳定性。
*   **配置灵活性**：对于 MCP 配置的分层支持、权限文件的传递以及代理设置的精细化控制，用户提供了大量反馈，期望更细粒度的掌控能力。
*   **调试体验**：JSON-RPC 模式下的状态同步问题（#28495）和日志体积过大（#28224）影响了高级用户和集成开发者的调试效率。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：** 2026-06-26
**数据来源：** github.com/google-gemini/gemini-cli

## 1. 今日速览
Gemini CLI 发布了 `v0.49.0-nightly.20260625` 版本，重点修复了技能安装过程中的路径遍历漏洞及待处理工具的信任覆盖问题。社区当前高度关注代理（Agent）子系统的稳定性，特别是子代理恢复机制、浏览器代理在 Wayland 下的兼容性以及自动记忆（Auto Memory）系统的资源泄漏和无限重试 bug。

## 2. 版本发布
**v0.49.0-nightly.20260625.gd845bc5d4**
*   **安全修复：** 修复了 `skill install` 命令中的路径遍历漏洞，防止恶意技能利用相对路径访问系统敏感文件。
*   **Bug 修复：** 解决了 `pending tools` 和 `trust overrides` 相关的逻辑错误，提升了工具执行时的权限控制准确性。
*   **CI 优化：** 改进了持续集成流程配置。
*   [查看详情](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0-nightly.20260625.gd845bc5d4)

## 3. 社区热点 Issues
以下 Issue 因高评论量或关键性被选中，反映了开发者对核心代理逻辑和安全性的担忧：

1.  **[Bug] Subagent 达到最大轮次后错误报告为成功** (#22323)
    *   **重要性：** 子代理因超时终止却被标记为“目标达成”，导致主代理无法正确中断或重试，严重影响工作流可靠性。
    *   **社区反应：** 8 条评论，2 个赞，被视为严重逻辑缺陷。
2.  **[Bug] 通用代理（Generalist Agent）挂起** (#21409)
    *   **重要性：** 调用通用代理时界面永久卡死，即使等待一小时也无响应，直接阻碍日常使用。
    *   **社区反应：** 8 条评论，8 个赞，用户反馈强烈。
3.  **[Bug] 浏览器代理在 Wayland 下失败** (#21983)
    *   **重要性：** 针对 Linux 用户的环境兼容性问题，导致基于 GUI 的任务无法完成。
    *   **社区反应：** 4 条评论，1 个赞，涉及底层渲染引擎兼容性。
4.  **[Feature] 健壮的分组件评估体系** (#24353)
    *   **重要性：** 旨在建立更精确的行为测试标准，提升代码库质量控制的自动化水平。
    *   **社区反应：** 7 条评论，维护者主导的内部追踪 Epic。
5.  **[Bug] 终端 Shell 命令完成后仍显示“等待输入”** (#25166)
    *   **重要性：** 简单的 CLI 命令执行后 UI 状态不同步，导致用户误以为程序仍在运行或需要交互。
    *   **社区反应：** 4 条评论，3 个赞，影响用户体验的基础功能问题。
6.  **[Bug] Auto Memory 无限重试低信号会话** (#26522)
    *   **重要性：** 内存提取服务陷入死循环，浪费计算资源并可能导致日志爆炸。
    *   **社区反应：** 5 条评论，由同一作者提出的系列 Memory 修复之一。
7.  **[Bug] Gemini 未充分使用自定义 Skills 和子代理** (#21968)
    *   **重要性：** 用户反映模型倾向于忽略已配置的专家技能，需手动强制指令才能生效，削弱了模块化设计的价值。
    *   **社区反应：** 6 条评论，0 个赞，属功能性痛点。
8.  **[Bug] 模型频繁在随机目录创建临时脚本** (#23571)
    *   **重要性：** 清理工作区变得困难，增加了提交代码前的维护成本。
    *   **社区反应：** 3 条评论，涉及模型行为规范的改进。
9.  **[Bug] 认证失败：Google 账户未授权** (#28092)
    *   **重要性：** 新用户或特定账号遇到的登录阻塞问题，直接影响产品可用性。
    *   **社区反应：** 5 条评论，需进一步排查账户状态或 OAuth 配置。
10. **[Question] 用户质疑 AGY 实用性** (#28138)
    *   **重要性：** 最新创建的 Issue，用户抱怨 AGY 难用，反映出部分功能设计可能存在认知负荷过高的问题。
    *   **社区反应：** 2 条评论，2 个赞，引发关于易用性的讨论。

## 4. 重要 PR 进展
以下是近期合并或活跃中的关键技术改进：

1.  **PR #28148: Docker 构建修复**
    *   修复多阶段构建中打包产物复制路径错误的问题，确保 Docker 镜像包含正确的 CLI 核心包。
2.  **PR #28147: CI/CD 发布流程加固**
    *   解决预览发布失败导致的 NPM 悬空包问题，优化测试与发布的顺序，防止坏版本上线。
3.  **PR #28145: Vertex AI 路由优化**
    *   支持通过 `GOOGLE_CLOUD_LOCATION` 环境变量将请求路由至 Vertex AI 的区域端点（US/EU），降低延迟并符合数据合规要求。
4.  **PR #28144: 编辑器检测性能优化**
    *   采用惰性加载策略检测可用编辑器，避免启动时同步执行大量进程检查，显著加快 Windows 等平台上的启动速度。
5.  **PR #27971: 修复“思维链”泄露**
    *   从历史记录中剥离模型的内部推理过程（Thoughts），防止其污染后续对话上下文，避免模型陷入自我对话循环。
6.  **PR #28143: MCP 资源冲突解决**
    *   修复多个 MCP 服务器暴露相同 URI 资源时的混淆问题，确保读取正确的服务器内容。
7.  **PR #28142: Vertex AI API Key 区域支持**
    *   修复使用 API Key 认证时忽略 `GOOGLE_CLOUD_LOCATION` 的 Bug，强制请求发送至指定区域而非全局端点。
8.  **PR #27915: 信任对话框 Hook 形状修正**
    *   修复工作区信任对话框中显示的 Hook 逻辑与实际执行相反的问题，提升安全性透明度。
9.  **PR #28094: 设置深合并修复**
    *   修复 A2A Server 中用户设置与工作区设置的浅层合并问题，确保嵌套配置项正确继承。
10. **PR #28140: 依赖安全补丁**
    *   升级 `shell-quote` 和 `simple-git` 至最新版本，修复已知的安全漏洞，增强 Shell 命令执行的安全性。

## 5. 功能需求趋势
*   **代理鲁棒性与可观测性：** 社区极度关注子代理（Subagent）的生命周期管理，包括超时恢复、轨迹可见性（Issue #22598）以及在复杂环境（如 Wayland）下的稳定性。
*   **安全与隐私强化：** 路径遍历修复、敏感信息脱敏（Redaction）、以及防止思维链泄露（Thought Leakage）是当前开发重点，表明用户对 AI 操作本地文件系统的安全性要求日益提高。
*   **配置与环境适配：** 对 Vertex AI 区域路由、Docker 容器化部署、以及 Linux/macOS 特定环境（如符号链接、编码解码）的支持正在快速迭代。
*   **性能优化：** 启动速度和资源占用是常见痛点，惰性检测和异步处理成为主要优化手段。

## 6. 开发者关注点
*   **“假成功”与挂起：** 开发者对代理“假装成功”或永久挂起的容忍度极低，这直接破坏了自动化工作流的信心。
*   **配置继承失效：** 嵌套配置（如 Settings JSON）的浅层合并导致用户期望的设置未生效，引发困惑。
*   **跨平台一致性：** Windows 启动慢、Linux Wayland 浏览器崩溃、macOS 符号链接测试失败等问题，显示出多平台兼容性仍是维护难点。
*   **记忆系统滥用：** Auto Memory 的无限重试和资源消耗问题，让用户担心后台进程会拖慢系统性能。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：** 2026-06-26

## 1. 今日速览
GitHub Copilot CLI 于昨日（6月24日）发布了 **v1.0.65** 版本，重点优化了会话恢复时的目录持久化及自定义 Agent 发现机制，并修复了斜杠参数引发的权限误报问题。社区活跃度极高，过去24小时内更新了41个 Issue，焦点集中在模型配额计算异常、会话认证状态残留以及移动端远程会话功能的缺失上。

## 2. 版本发布
### v1.0.65 (2026-06-24)
- **会话上下文优化**：`/cd` 命令现在会持久化工作目录，确保恢复会话时自动回到正确位置，并能在新目录下发现自定义 Agent。
- **权限提示修复**：修复了带有斜杠前缀字符串参数（如 `--body "/azp run"`）的命令错误触发文件系统权限提示的问题。
- **UI 稳定性**：全屏时间线显示保持锚定稳定（Full description truncated in source）。

## 3. 社区热点 Issues
以下 Issue 因高关注度、严重性或对用户体验影响较大而被选中：

1.  **[BUG] 模型配额扣减异常** (#3881)
    - **摘要**：用户报告使用 6x 乘数的模型时，配额扣减比例（5%）远超预期（应为2%），疑似计费逻辑错误。
    - **重要性**：直接涉及用户权益和计费准确性，需紧急核实。
    - **链接**: [Issue #3881](https://github.com/github/copilot-cli/issues/3881)

2.  **[BUG] 恢复会话后无法加载模型列表** (#3596, #3680)
    - **摘要**：多个用户反馈在通过 `copilot --resume` 恢复会话后，执行 `/model` 命令时报错 `Error: Not authenticated`，而新建会话正常。
    - **重要性**：阻碍了多会话场景下的正常工作流，属于阻断性 Bug。
    - **链接**: [Issue #3596](https://github.com/github/copilot-cli/issues/3596) | [Issue #3680](https://github.com/github/copilot-cli/issues/3680)

3.  **[FEATURE] 提供列出所有支持模型的方法** (#700)
    - **摘要**：请求添加 `copilot --list-models` 命令，以便查看包括乘数信息在内的所有可用模型。
    - **重要性**：提升模型选择的透明度和易用性，获得 4 个赞同。
    - **链接**: [Issue #700](https://github.com/github/copilot-cli/issues/700)

4.  **[BUG] 移动端远程会话功能缺失** (#3922, #3923, #3924)
    - **摘要**：开发者指出 GitHub Mobile 应用在连接远程 CLI 会话时，不支持发送斜杠命令、Shell 命令及上传文件/图片。
    - **重要性**：限制了移动端的实用性和与桌面端的功能一致性。
    - **链接**: [Issue #3922](https://github.com/github/copilot-cli/issues/3922) | [Issue #3923](https://github.com/github/copilot-cli/issues/3923) | [Issue #3924](https://github.com/github/copilot-cli/issues/3924)

5.  **[BUG] Windows 终端滚动条导致文本对齐错乱** (#3501)
    - **摘要**：自引入垂直滚动条以来，Windows 平台上的文本渲染出现错位，影响阅读体验。
    - **重要性**：影响大量 Windows 用户的视觉体验，点赞数高达 9。
    - **链接**: [Issue #3501](https://github.com/github/copilot-cli/issues/3501)

6.  **[BUG] preToolUse Hook 无法静默重写命令** (#2643)
    - **摘要**：即使插件设置 `permissionDecision: allow`，Copilot CLI 仍会对重写的命令弹出确认对话框，缺乏真正的“静默”执行能力。
    - **重要性**：影响自动化插件的工作流效率，点赞数 2。
    - **链接**: [Issue #2643](https://github.com/github/copilot-cli/issues/2643)

7.  **[BUG] Linux AppImage 环境变量泄漏导致 HTTPS 失败** (#3925)
    - **摘要**：Linux AppImage 将 `LD_LIBRARY_PATH` 泄露给子进程，导致内置 Git 初始化会话时因符号查找错误而无法建立 HTTPS 连接。
    - **重要性**：导致 Linux 用户无法启动新会话，属严重功能性故障。
    - **链接**: [Issue #3925](https://github.com/github/copilot-cli/issues/3925)

8.  **[FEATURE] 企业级配置集中管理** (#3909)
    - **摘要**：请求允许组织管理员向本地 CLI 推送配置（特别是环境变量），目前仅支持 Cloud 环境。
    - **重要性**：满足企业用户对安全合规和统一配置管理的需求。
    - **链接**: [Issue #3909](https://github.com/github/copilot-cli/issues/3909)

9.  **[FEATURE] 配置快捷键以快速切换模型** (#2419, #1729)
    - **摘要**：用户希望绑定 F1-F3 等键到斜杠命令，以实现更快的模型切换，避免手动输入命令 ID。
    - **重要性**：提升高级用户的工作效率，两个相关 Issue 均获 5 个赞同。
    - **链接**: [Issue #2419](https://github.com/github/copilot-cli/issues/2419) | [Issue #1729](https://github.com/github/copilot-cli/issues/1729)

10. **[BUG] 语音模式因网络策略不可用** (#3636)
    - **摘要**：在企业 VPN 环境下，无法获取语音模型目录，导致 `/voice` 命令完全失效。
    - **重要性**：限制了企业内网用户的使用场景。
    - **链接**: [Issue #3636](https://github.com/github/copilot-cli/issues/3636)

## 4. 重要 PR 进展
由于过去24小时内仅更新 1 条 PR，且内容较为常规：

1.  **#3928: Add .gitignore and settings configuration**
    - **摘要**：添加 `.gitignore` 文件和基础设置配置。
    - **状态**：Open
    - **链接**: [PR #3928](https://github.com/github/copilot-cli/pull/3928)

## 5. 功能需求趋势
1.  **模型管理与计费透明化**：用户强烈渴望更透明的模型列表查询（#700）和准确的配额扣减机制（#3881）。
2.  **跨平台一致性**：移动端（Mobile）与桌面端的功能差距是主要痛点，特别是远程会话控制能力（#3922-3924）。
3.  **企业级管控**：随着 CLI 深入企业场景，对本地配置集中管理（#3909）和环境变量注入的需求日益增长。
4.  **插件与自动化深度**：开发者希望 `preToolUse` 等钩子能支持完全静默执行（#2643），以提升工作流的无缝体验。

## 6. 开发者关注点
-   **会话状态保持**：恢复会话（Resume Session）时的认证状态丢失和目录跳转问题是近期最高频的 Bug 反馈。
-   **终端渲染体验**：Windows 和 macOS 上的文本对齐、Markdown 渲染异常（如破折号误判为删除线 #3920）以及主题跟随问题（#3935）持续影响用户满意度。
-   **网络与环境兼容性**：Linux AppImage 的环境变量泄漏和企业网络策略导致的语音/模型加载失败，表明 CLI 在不同网络环境和系统发行版上的鲁棒性仍需加强。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：** 2026-06-26
**数据来源：** GitHub MoonshotAI/kimi-cli

## 1. 今日速览
过去24小时内，Kimi Code CLI 仓库无新版本发布。社区主要关注点集中在两个方向：一是用户报告了 v0.19.2 版本在 Linux 环境下严重的 UI 渲染抖动问题；二是关于 MCP (Model Context Protocol) 配置在子代理和恢复会话中传播的修复 PR 已合并。整体社区活跃度适中，暂无大规模新功能讨论。

## 2. 版本发布
*   **无新版本发布。**

## 3. 社区热点 Issues
*(注：当前数据仅显示 1 条活跃 Issue)*

1.  **[Bug] Kimi Code CLI 界面持续抖动与全量重渲染**
    *   **ID:** #2474
    *   **状态:** Open
    *   **重要性:** 该问题严重影响用户体验，涉及 TUI/CLI 界面的稳定性。用户在 Linux 环境下使用 `K2.7 Code thinking` 模型时，观察到界面频繁“抖动”并重新从头渲染整个对话历史，而非增量更新。这可能暗示存在严重的性能瓶颈或前端状态管理错误。
    *   **社区反应:** 目前评论数为 0，点赞数为 0，但鉴于其描述的具体性（版本 0.19.2, Linux 环境），疑似为特定环境下的复现性问题，需官方排查。
    *   **链接:** [MoonshotAI/kimi-cli Issue #2474](https://github.com/MoonshotAI/kimi-cli/issues/2474)

## 4. 重要 PR 进展
*(注：当前数据仅显示 1 条已关闭 PR)*

1.  **[Fix] MCP 配置向子代理及恢复会话传播**
    *   **ID:** #1942
    *   **状态:** Closed (Merged)
    *   **作者:** msenol
    *   **功能/修复内容:** 解决了两个关键问题：
        1.  **子代理缺失配置：** 此前 `SubagentBuilder` 硬编码 `mcp_configs=[]`，导致探索、编码、规划等子代理无法使用 MCP 工具。
        2.  **恢复会话失效：** 修复了在会话恢复后 MCP 工具不可用的问题。
    *   **影响:** 此修复显著增强了 MCP 生态系统的集成能力，确保复杂工作流中子任务也能访问外部上下文和数据源。
    *   **链接:** [MoonshotAI/kimi-cli PR #1942](https://github.com/MoonshotAI/kimi-cli/pull/1942)

## 5. 功能需求趋势
基于仅有的数据点分析：
*   **MCP 集成深度优化：** 随着 #1942 的合并，社区对 MCP 的支持正从“可用”转向“健壮”。未来可能关注更多 MCP 工具的自动发现、配置持久化以及跨平台兼容性。
*   **终端渲染性能：** 用户报告的 UI 抖动问题表明，随着对话长度增加和模型思考过程（如 K2.7）的复杂化，现有的终端渲染引擎面临性能挑战。社区期待更高效的增量渲染机制。

## 6. 开发者关注点
*   **UI/UX 稳定性：** 开发者高度关注 CLI/TUI 界面的流畅度。当前的“抖动”和“全量重渲染”是主要痛点，尤其是在处理长对话或复杂模型输出时。
*   **环境特异性 Bug：** 问题报告明确指向 Linux 环境 (`Linux 5.10.134...`)，表明开发者正在积极测试不同操作系统下的兼容性，并期望官方提供跨平台的稳定体验。
*   **子代理能力边界：** 通过 MCP 配置的修复可以看出，开发者希望 Kimi Code CLI 能更好地协调多个子代理（explorer, coder, planner），并确保它们共享相同的上下文和工具集，以实现更复杂的自动化编程任务。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-06-26
**来源：** GitHub (anomalyco/opencode)

## 1. 今日速览
OpenCode v1.17.11 正式发布，核心亮点是引入了**会话快照与回滚控制**功能，允许用户将会话及文件更改恢复至早期状态，显著提升了调试和实验的安全性。与此同时，Windows 平台上的 Bun 运行时稳定性问题持续引发社区高度关注，多个高热度 Issue 集中在 Windows/WSL 下的崩溃和界面黑屏现象，开发者正紧急排查回归错误。

## 2. 版本发布

### v1.17.11 (Core & Desktop)
*   **核心改进**：新增会话快照（Session Snapshots）和回滚控制功能。用户可以将会话回滚到之前的消息节点，包括相关的文件变更，这对于复杂的代码重构和调试场景极具价值。
*   **Bugfix**：强制打印 MCP OAuth URL，确保在手动打开浏览器进行 OAuth 登录流程时，即使自动跳转失败也能正常签名。
*   **Desktop**：部分更新内容被截断，但结合社区反馈，此版本主要旨在修复 v1.17.10 引入的 Windows 端兼容性问题。

*(注：v1.17.10 于昨日发布，引入了 MCP 资源模板、Mini CLI 模式等功能，但因 Windows 兼容性导致大量用户退回至 v1.17.9。)*

## 3. 社区热点 Issues

1.  **[CRITICAL] Windows 下 v1.17.10 崩溃 (Segfault)**
    *   **链接**: [#33742](https://github.com/anomalyco/opencode/issues/33742)
    *   **重要性**: 这是目前最受关注的 Issue，44 条评论，39 个赞。v1.17.10 在 Windows 上因 Bun 段错误频繁崩溃，导致大量用户被迫降级至 v1.17.9。这表明近期更新引入了严重的平台回归错误。
2.  **[CRITICAL] WSL 下 v1.17.10 黑屏且无法输入**
    *   **链接**: [#33887](https://github.com/anomalyco/opencode/issues/33887)
    *   **重要性**: 与 Windows 原生环境类似，WSL 用户在升级到 v1.17.10 后遇到 TUI 黑屏问题，降级即恢复。这进一步证实了 v1.17.10 在 Linux/Unix 环境下的稳定性隐患。
3.  **[BUG] Desktop v1.17.11 升级后配置无效/会话丢失**
    *   **链接**: [#33938](https://github.com/anomalyco/opencode/issues/33938)
    *   **重要性**: 用户报告升级至最新的 v1.17.11 后出现 `ConfigInvalidError`，且侧边栏项目列表为空，尽管数据库中存在会话。这是一个严重的数据可见性 Bug。
4.  **[BUG] 撤销操作影响所有活跃会话**
    *   **链接**: [#33940](https://github.com/anomalyco/opencode/issues/33940)
    *   **重要性**: 在单会话中执行 `/undo` 竟然回退了其他会话的文件变更。这违反了会话隔离的基本预期，可能导致跨项目的意外数据丢失。
5.  **[FEATURE] 原生 Jupyter Notebook 支持**
    *   **链接**: [#11409](https://github.com/anomalyco/opencode/issues/11409)
    *   **重要性**: 20 个赞，长期未解决的功能请求。用户希望 OpenCode 能直接编辑和运行 `.ipynb` 文件，以增强其在数据科学和交互式编程领域的竞争力。
6.  **[BUG] 免费额度误报**
    *   **链接**: [#14273](https://github.com/anomalyco/opencode/issues/14273)
    *   **重要性**: 用户拥有 Zen 余额但仍触发“免费额度用完”错误。这涉及支付逻辑和状态同步的 Bug，直接影响用户体验和信任度。
7.  **[FEATURE] 多账户登录与负载均衡**
    *   **链接**: [#8145](https://github.com/anomalyco/opencode/issues/8145)
    *   **重要性**: 19 个赞。企业级用户强烈呼吁支持多 Codex OAuth 账户及轮询负载均衡，以优化 API 调用限制和成本。
8.  **[BUG] TUI 修改文件列表不显示**
    *   **链接**: [#17797](https://github.com/anomalyco/opencode/issues/17797)
    *   **重要性**: TUI 右侧不再显示已修改的文件及其增删行数，降低了代码审查和变更管理的效率。
9.  **[BUG] CPU 占用率随机飙升至 100%**
    *   **链接**: [#33399](https://github.com/anomalyco/opencode/issues/33399)
    *   **重要性**: 进程无响应，风扇狂转，疑似死循环或资源泄漏。这对长时间运行的自动化工作流是致命打击。
10. **[FEATURE] 桌面版正式 Release 时间**
    *   **链接**: [#33611](https://github.com/anomalyco/opencode/issues/33611)
    *   **重要性**: 中文社区用户询问桌面版何时发布稳定版及汉化进度，反映了非英语用户对官方桌面客户端的期待和本地化需求。

## 4. 重要 PR 进展

1.  **[FIX] ACP 权限提示中显示真实工具上下文**
    *   **链接**: [#33950](https://github.com/anomalyco/opencode/pull/33950)
    *   **内容**: 修复了 ACP (Agent Control Protocol) 权限弹窗标题仅显示通用占位符的问题，现在会显示具体的工具类型和操作对象，提升安全性透明度。
2.  **[REFACTOR] 支持分层节点架构**
    *   **链接**: [#33937](https://github.com/anomalyco/opencode/pull/33937)
    *   **内容**: 重构核心架构，引入命名层节点和生命周期层级，支持依赖顺序构建和冲突验证。这是底层基础设施的重大升级，旨在提高系统的可扩展性和稳定性。
3.  **[FIX] 恢复会话运行时操作 (SDK)**
    *   **链接**: [#33777](https://github.com/anomalyco/opencode/pull/33777)
    *   **内容**: 在 HTTP API 和客户端中重新加入 `sessions.events`, `sessions.interrupt`, `sessions.message`，并支持通过持久化事件流进行回放，增强了 SDK 对会话状态的管理能力。
4.  **[FIX] 恢复 ESC 中断委托子代理会话**
    *   **链接**: [#32767](https://github.com/anomalyco/opencode/pull/32767)
    *   **内容**: 修复了一个回归错误，恢复了使用 ESC 键中断委托给子代理（Subagent）会话的功能，提升了多代理协作时的控制权。
5.  **[FIX] 使用 Tab 作用域的服务器**
    *   **链接**: [#33946](https://github.com/anomalyco/opencode/pull/33946)
    *   **内容**: 使每个 Tab 能够独立绑定服务器连接，实现会话级的终端认证、文件选择和项目隔离，避免全局服务器状态冲突。
6.  **[FEAT] 新增 `/goal` 停止条件命令**
    *   **链接**: [#33944](https://github.com/anomalyco/opencode/pull/33944)
    *   **内容**: 引入基于条件的停止门控。用户可设置目标条件，由独立评判模型在每次迭代后评估是否满足条件，从而决定 Agent 是否停止。这为更可控的长任务执行提供了新范式。
7.  **[FIX] 恢复会话头部控件**
    *   **链接**: [#32525](https://github.com/anomalyco/opencode/pull/32525)
    *   **内容**: 修复了会话头部布局的门控逻辑，确保旧版 UI 控件在特定配置下正确渲染，解决了界面显示不一致的问题。
8.  **[FIX] 避免紧凑数字格式显示异常**
    *   **链接**: [#33948](https://github.com/anomalyco/opencode/pull/33948)
    *   **内容**: 修复了 TUI 上下文面板中数字格式化错误（如显示 "1000.0K" 而非 "1K"），提升了 UI 的整洁度。
9.  **[FIX] 恢复时间线滚动位置**
    *   **链接**: [#33943](https://github.com/anomalyco/opencode/pull/33943)
    *   **内容**: 实现了会话时间线滚动位置的持久化，切换 Tab 或重载后能精确恢复之前的查看位置，改善了长会话的浏览体验。
10. **[DOCS] Computer Use RFC**
    *   **链接**: [#33082](https://github.com/anomalyco/opencode/pull/33082)
    *   **内容**: 发布了关于“计算机使用”（Computer Use，即 GUI 自动化控制）的设计审查 RFC。虽然不含代码，但标志着该重大功能特性正在进入正式设计阶段。

## 5. 功能需求趋势

*   **会话管理与可逆性**: 社区对“撤销”、“回滚”和“快照”功能的需求极高（如 #33940, #33938, v1.17.11 更新）。开发者希望拥有更强的会话状态控制能力，以防止 AI 错误操作造成不可逆损失。
*   **多代理与复杂工作流**: `/goal` 命令（#33944）和多账户负载均衡（#8145）的讨论表明，用户正在探索更复杂的 Agent 编排策略，需要更细粒度的控制和资源分配机制。
*   **IDE 深度集成**: ACP 相关 PR（#33950, #28921）和权限提示的优化，显示了 OpenCode 向 IDE 插件形态演进的趋势，重点在于提升代码编辑器内的交互安全性和上下文感知。
*   **数据科学与交互开发**: Jupyter 支持（#11409）和数学公式渲染（#15053）的持续反馈，说明用户在尝试将 OpenCode 用于更广泛的开发场景，包括数据分析和技术文档编写。

## 6. 开发者关注点

*   **Windows/WSL 稳定性危机**: 当前最大的痛点是 Windows 生态下的严重回归。从 v1.17.10 开始的段错误、黑屏、启动崩溃等问题，导致大量用户无法正常使用最新稳定版。社区迫切期待官方发布针对 Windows 平台的紧急热修复或详细的排查指南。
*   **跨会话副作用**: 用户发现撤销操作会影响其他会话，这违背了“会话隔离”的基本假设。开发者强调必须严格界定会话边界，确保文件操作和状态回滚仅在当前会话上下文中生效。
*   **UI/UX 细节打磨**: 除了核心稳定性，用户对界面细节（如数字格式化、滚动记忆、浅色模式代码可见性 #17935）的关注度也在上升，反映出产品正从“可用”向“好用”过渡，任何微小的 UX 倒退都会引发投诉。
*   **Zen 计费逻辑透明度**: 付费用户遇到的免费额度误报问题，暴露了后端状态同步的缺陷。用户期望计费逻辑更加透明和可靠，特别是在混合使用免费模型和付费余额的场景下。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期：** 2026-06-26
**数据来源：** github.com/badlogic/pi-mono

## 1. 今日速览
今日 Pi 社区活跃度极高，核心焦点集中在 **TUI（终端用户界面）稳定性修复** 与 **多模型提供商兼容性** 上。尽管无新版本发布，但大量 Issue 涉及会话管理、上下文压缩及特定 Provider（如 OpenAI, Anthropic, Minimax）的报错修复。同时，开发者对“单二进制分发”和“RPC 接口扩展”的需求显著增加，反映出对部署便捷性和自动化集成的迫切期待。

## 2. 版本发布
**无新版本发布。**
过去 24 小时内未产生新的 Release。

## 3. 社区热点 Issues
以下 Issue 因讨论热度高、影响面广或涉及核心功能而备受关注：

1.  **#4945 [OPEN] openai-codex Connection Reliability Issues**
    *   **重要性：** 直接影响使用 OpenAI Codex/GPT-5.5 的用户体验，导致 TUI 卡死且需手动恢复。
    *   **社区反应：** 70 条评论，30 个赞，显示该问题困扰众多高级用户。
    *   [链接](https://github.com/earendil-works/pi/issues/4945)

2.  **#5103 [CLOSED] pi-windows-x64.zip build from GitHub can't detect git-bash from PATH properly**
    *   **重要性：** Windows 平台关键兼容性问题，阻碍了部分用户正常使用内置 Bash 工具。
    *   **社区反应：** 23 条评论，已关闭，表明修复方案正在推进或已有临时变通方法。
    *   [链接](https://github.com/earendil-works/pi/issues/5103)

3.  **#6050 [CLOSED] TUI full redraw clears terminal scrollback during active rendering**
    *   **重要性：** 严重的 UX 缺陷，导致用户在 Pi 工作时丢失滚动历史，影响长对话监控。
    *   **社区反应：** 10 条评论，已关闭，属于近期高频报告的 UI 渲染 bug。
    *   [链接](https://github.com/earendil-works/pi/issues/6050)

4.  **#5595 [CLOSED] openai-completions maxTokens not passing through**
    *   **重要性：** 配置参数透传失败，导致使用 Together.ai 等第三方 Provider 时模型提前截断输出。
    *   **社区反应：** 8 条评论，涉及多模型适配的底层逻辑问题。
    *   [链接](https://github.com/earendil-works/pi/issues/5595)

5.  **#5989 [CLOSED] pi update broke extension pi-lovely-codex**
    *   **重要性：** 版本更新导致现有扩展失效，暴露了插件系统的向后兼容性问题。
    *   **社区反应：** 7 条评论，已关闭，提醒开发者注意扩展 API 的稳定性。
    *   [链接](https://github.com/earendil-works/pi/issues/5989)

6.  **#6002 [CLOSED] `SessionManager.open()` silently truncates non-session files**
    *   **重要性：** 严重的数据安全 Bug，可能静默破坏非 Pi 会话文件（如日志文件）。
    *   **社区反应：** 4 条评论，已关闭，此类破坏性操作需紧急修复。
    *   [链接](https://github.com/earendil-works/pi/issues/6002)

7.  **#6060 [CLOSED] TypeError: content is not iterable when TUI footer renders token stats...**
    *   **重要性：** 特定场景下（仅工具调用无文本回复）导致 Pi 崩溃，影响 TUI 可用性。
    *   **社区反应：** 4 条评论，已关闭，属于边缘情况引发的空指针异常。
    *   [链接](https://github.com/earendil-works/pi/issues/6060)

8.  **#5671 [CLOSED] ~/.pi and cwd/.pi overlap**
    *   **重要性：** 架构设计层面的讨论，关于全局设置与项目本地设置的目录重叠问题。
    *   **社区反应：** 6 条评论，5 个赞，反映了用户对配置管理清晰度的需求。
    *   [链接](https://github.com/earendil-works/pi/issues/5671)

9.  **#5363 [OPEN] Add amazon-bedrock-mantle provider for OpenAI-compatible models**
    *   **重要性：** 新增 AWS Bedrock Mantle 支持，拓宽了企业级云厂商的覆盖范围。
    *   **社区反应：** 14 条评论，4 个赞，显示用户对多云支持的持续兴趣。
    *   [链接](https://github.com/earendil-works/pi/issues/5363)

10. **#6061 [CLOSED] MiniMax-M2.7-highspeed context budget is smaller than expected**
    *   **重要性：** 针对特定国产模型（MiniMax）的上下文窗口限制问题，影响长对话能力。
    *   **社区反应：** 4 条评论，已关闭，涉及 Token 估算逻辑的修正。
    *   [链接](https://github.com/earendil-works/pi/issues/6061)

## 4. 重要 PR 进展

1.  **#6078 [OPEN] feat(coding-agent): add get_entries and get_tree RPC commands**
    *   **内容：** 为 Coding Agent 添加只读 RPC 命令，暴露会话条目和树结构，增强外部程序对 Pi 会话的控制能力。
    *   [链接](https://github.com/earendil-works/pi/pull/6078)

2.  **#6064 [OPEN] feat(experimental): pi orchestrator**
    *   **内容：** 引入实验性的 `pi orchestrator` 包，通过本地守护进程管理多个 Pi 实例的生命周期（启动、列表、IPC 通信），适合复杂的多代理场景。
    *   [链接](https://github.com/earendil-works/pi/pull/6064)

3.  **#5832 [OPEN] fix(ai): surface provider HTTP error body instead of opaque SDK message**
    *   **内容：** 修复代理/网关环境下，HTTP 错误响应体被丢弃的问题，提供更清晰的错误信息而非通用的 SDK 错误。
    *   [链接](https://github.com/earendil-works/pi/pull/5832)

4.  **#6074 [OPEN] fix(coding-agent): avoid pre-prompt compaction continue**
    *   **内容：** 修复 Coding Agent 在预提示阶段过早进行上下文压缩导致的逻辑中断问题。
    *   [链接](https://github.com/earendil-works/pi/pull/6074)

5.  **#5270 [CLOSED] Ephemeral session model and thinking level selection**
    *   **内容：** 将模型和思维级别的选择默认设置为会话级（而非全局），防止会话内配置更改覆盖全局默认值，提升配置隔离性。
    *   [链接](https://github.com/earendil-works/pi/pull/5270)

6.  **#6067 [CLOSED] fix(prompt): add an overeager scope-discipline rule to the system prompt**
    *   **内容：** 在系统提示词中添加“范围纪律”规则，强制代理仅执行请求范围内的任务，避免过度修改无关代码。
    *   [链接](https://github.com/earendil-works/pi/pull/6067)

7.  **#6054 [CLOSED] feat(agent,coding-agent): add runParallelAgentTasks + parallel batching system prompt guideline**
    *   **内容：** 新增并行代理任务执行工具，并指导模型在系统提示中批量处理独立工具调用，提升效率。
    *   [链接](https://github.com/earendil-works/pi/pull/6054)

8.  **#6063 [CLOSED] Extension stats**
    *   **内容：** 修复扩展统计相关的 OSC 垃圾字符打印问题，优化基准测试输出。
    *   [链接](https://github.com/earendil-works/pi/pull/6063)

9.  **#6055 [CLOSED] feat(subagent): simplify agent configs, add default agent, use minimax model**
    *   **内容：** 简化子代理示例配置，统一使用 MiniMax 模型，并添加默认通用代理配置。
    *   [链接](https://github.com/earendil-works/pi/pull/6055)

10. **#6056 [CLOSED] feat(subagent): simplify agent configs, add default agent, use minimax model**
    *   **内容：** 同上，另一份关于子代理配置简化的 PR（可能是同一功能的迭代或分支合并）。
    *   [链接](https://github.com/earendil-works/pi/pull/6056)

## 5. 功能需求趋势
*   **部署与分发优化：** 用户强烈希望 Pi 能提供**单二进制可执行文件**（Issue #6065），以解决不同项目间 Node.js 版本冲突的问题，类似 Deno/esbuild 的分发模式。
*   **扩展性与自动化接口：** 对 **RPC 接口** 的需求增加，特别是暴露会话数据（#6078, #5810）和提供**编排器（Orchestrator）**（#6064），表明用户正在构建更复杂的基于 Pi 的多代理工作流。
*   **多模型与 Provider 兼容性：** 社区持续关注新 Provider 的支持（如 Amazon Bedrock Mantle #5363）以及现有 Provider（OpenAI, Anthropic, Together.ai）的参数透传和错误处理细节。
*   **TUI 稳定性与用户体验：** 大量 Issue 集中在 TUI 的渲染崩溃、滚动条跳跃、输入历史丢失等问题，显示出用户对终端交互稳定性的极高敏感度。

## 6. 开发者关注点
*   **会话状态管理：** 开发者关注会话文件的静默损坏风险（#6002）、会话 ID 的确定性生成（#6070）以及中断后的恢复机制（HITL #5901）。
*   **Token 与上下文精度：** 对推理 Token 计数的可见性（#6057）、特定模型的上下文窗口限制（#6061）以及压缩逻辑的准确性（#5595, #6074）存在较多反馈。
*   **插件生态兼容性：** 近期更新导致扩展失效（#5989）引发了对插件 API 稳定性的担忧，开发者希望在功能迭代中保持向后兼容。
*   **跨平台一致性：** Windows 下的路径检测和 Bash 集成（#5103）、tmux 环境下的视图跳转（#6073）等平台特异性问题频发，需要加强多环境下的测试覆盖。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：** 2026-06-26
**数据来源：** github.com/QwenLM/qwen-code

## 1. 今日速览
Qwen Code v0.19.2 夜间构建版已发布，重点修复了 `web_fetch` 的 JSON 回退问题。社区对 Windows 平台下的 PowerShell 资源泄漏（OOM）Bug 反应强烈，同时针对上下文压缩导致的网关超时问题提出了流式处理方案。开发者高度关注会话管理的持久化同步、语音输入功能的桌面端集成以及 `self-paced /loop` 的行为优化。

## 2. 版本发布
*   **v0.19.2-nightly.20260625.b2f11b735**
    *   **核心修复：** 允许 `web_fetch` 在特定情况下使用 JSON 作为回退机制，增强了网络请求的鲁棒性。
    *   **链接：** [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260625.b2f11b735)

## 3. 社区热点 Issues
以下 Issue 因涉及严重 Bug、高优先级功能请求或广泛共鸣而被选中：

1.  **[Bug] Windows PowerShell 资源泄漏导致 OOM** (#5873)
    *   **重要性：** 高优先级 P1。用户反馈在 Windows 上使用工具时会打开新的 PowerShell 进程且不关闭，最终导致内存溢出。这是当前最严重的稳定性问题之一。
    *   **链接：** [Issue #5873](https://github.com/QwenLM/qwen-code/issues/5873)

2.  **[Bug] 上下文压缩请求导致网关超时** (#5861)
    *   **重要性：** P1。当上下文窗口接近容量时，非流式的压缩查询容易触发网关超时，影响长对话体验。
    *   **链接：** [Issue #5861](https://github.com/QwenLM/qwen-code/issues/5861)

3.  **[Feature] 任务清单持久化与跨设备同步** (#5836)
    *   **重要性：** P2。用户希望 Todo/Memo 等数据能保存在项目目录下（Git 可控），以实现多设备间的项目状态同步，解决当前仅支持本地单设备的问题。
    *   **链接：** [Issue #5836](https://github.com/QwenLM/qwen-code/issues/5836)

4.  **[Bug] 自动生成的技能缺乏持久化确认** (#5263)
    *   **重要性：** 用户体验优化。建议在执行一次性操作（如重构）后，询问用户是否保留自动生成的技能，避免垃圾数据积累。
    *   **链接：** [Issue #5263](https://github.com/QwenLM/qwen-code/issues/5263)

5.  **[Feature] 允许调整 Agent 发起的命令超时时间** (#5838)
    *   **重要性：** P2。用户需要更灵活地控制后台进程或 Shell 命令的超时设置，以适应不同复杂度的任务。
    *   **链接：** [Issue #5838](https://github.com/QwenLM/qwen-code/issues/5838)

6.  **[Feature] 添加 Git 共享的“团队”层级自动记忆** (#5867)
    *   **重要性：** 协作场景。提议在自动记忆中增加团队级共享层，便于团队成员间共享项目事实。
    *   **链接：** [Issue #5867](https://github.com/QwenLM/qwen-code/issues/5867)

7.  **[Bug] 流式响应截断问题** (#5837)
    *   **重要性：** P2。Windows 平台上 Agent 的最后一条响应常被截断，影响信息完整性。
    *   **链接：** [Issue #5837](https://github.com/QwenLM/qwen-code/issues/5837)

8.  **[Feature] `/loop` 模式利用 Monitor/Background Task 通知** (#5841)
    *   **重要性：** P2。优化自循环模式，使其能响应外部事件而非仅依赖定时器，提升自动化效率。
    *   **链接：** [Issue #5841](https://github.com/QwenLM/qwen-code/issues/5841)

9.  **[Bug] WebFetch 应拒绝包含用户信息的 URL** (#5782)
    *   **重要性：** 安全增强。防止敏感凭据通过 URL 暴露在前端界面或日志中。
    *   **链接：** [Issue #5782](https://github.com/QwenLM/qwen-code/issues/5782)

10. **[Feature] 语音听写支持自定义关键词文件** (#5816)
    *   **重要性：** P2。允许用户扩展 ASR 偏置词表，提高特定领域术语的识别准确率。
    *   **链接：** [Issue #5816](https://github.com/QwenLM/qwen-code/issues/5816)

## 4. 重要 PR 进展

1.  **PR #5865: 上下文压缩请求启用流式传输**
    *   **内容：** 修复 Gateway Timeout 问题，为文本侧边查询添加可选的流式路径，保持 HTTP 连接活跃。
    *   **链接：** [PR #5865](https://github.com/QwenLM/qwen-code/pull/5865)

2.  **PR #5856: 桌面应用支持语音听写**
    *   **内容：** 将 `/voice` 功能引入桌面客户端，提供录音按钮、波形显示和实时转录支持。
    *   **链接：** [PR #5856](https://github.com/QwenLM/qwen-code/pull/5856)

3.  **PR #5844: 优化 Self-paced /loop 行为**
    *   **内容：** 使自循环模式能够利用 Monitor 和后台任务的实时通知来唤醒，而非仅依赖定时器，减少不必要的轮询。
    *   **链接：** [PR #5844](https://github.com/QwenLM/qwen-code/pull/5844)

4.  **PR #5869: Web Shell 代码块实时语法高亮**
    *   **内容：** 实现流式代码块的实时语法高亮，并修复围栏语言别名问题，提升阅读体验。
    *   **链接：** [PR #5869](https://github.com/QwenLM/qwen-code/pull/5869)

5.  **PR #5860: 放宽 Autofix 工作流的候选 Issue 过滤**
    *   **内容：** 调整自动修复流程的筛选逻辑，确保 Agent 能发现并修复未处理的 Bug。
    *   **链接：** [PR #5860](https://github.com/QwenLM/qwen-code/pull/5860)

6.  **PR #5828: 新增 Extension Creator Skill**
    *   **内容：** 内置扩展创建技能，引导 Agent 完成 Qwen Code 扩展的脚手架搭建、定制和本地测试。
    *   **链接：** [PR #5828](https://github.com/QwenLM/qwen-code/pull/5828)

7.  **PR #5857: 新增查询单个 Session 状态的 API**
    *   **内容：** 为 Daemon 添加 HTTP 端点，允许通过 ID 获取特定会话的实时状态摘要。
    *   **链接：** [PR #5857](https://github.com/QwenLM/qwen-code/pull/5857)

8.  **PR #5777: 复兴 Chrome 扩展（Daemon-Direct 架构）**
    *   **内容：** 基于新的 Daemon 直接架构重写 Chrome 扩展，移除原生消息传递堆栈，简化为轻量级 HTTP+SSE 客户端。
    *   **链接：** [PR #5777](https://github.com/QwenLM/qwen-code/pull/5777)

9.  **PR #5809: 重构 CLI Serve 路由**
    *   **内容：** 拆分 `qwen serve` 的路由处理逻辑，将认证、遥测、会话管理等职责模块化，提高代码可维护性。
    *   **链接：** [PR #5809](https://github.com/QwenLM/qwen-code/pull/5809)

10. **PR #4943: 添加 --safe-mode 标志**
    *   **内容：** 提供禁用所有自定义配置（Hooks, Extensions, Skills 等）的安全模式，便于故障排查。
    *   **链接：** [PR #4943](https://github.com/QwenLM/qwen-code/pull/4943)

## 5. 功能需求趋势
*   **会话与数据持久化：** 社区强烈希望将 Todo、Memo、Skills 等数据纳入 Git 版本控制，以支持跨设备同步和团队协作（Issues: #5836, #5867）。
*   **自动化与后台任务优化：** 对 `/loop` 模式的事件驱动优化、后台进程超时控制以及自动修复工作流的改进需求显著增加。
*   **多模态与交互体验：** 语音听写功能正从 CLI/Web 向桌面端和浏览器扩展延伸，同时对代码流式渲染的高亮性能提出了更高要求。
*   **开发者工具链完善：** 包括扩展创建技能、安全模式调试标志、IDE 集成稳定性等底层开发体验的提升。

## 6. 开发者关注点
*   **Windows 平台稳定性：** PowerShell 进程泄漏导致的 OOM 是当前最紧迫的痛点，需优先修复。
*   **长上下文处理能力：** 在长对话场景中，上下文压缩的超时问题和流式响应的截断问题严重影响可用性。
*   **配置隔离与安全：** 用户关注不同工作区配置的隔离（避免读取 stale configs），以及 WebFetch 等工具的安全边界。
*   **调试与可观测性：** 开发者需要一个干净的环境进行故障排除（Safe Mode），以及更细粒度的会话状态监控接口。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报
**日期：** 2026-06-26
**数据源：** github.com/Hmbown/DeepSeek-TUI

## 1. 今日速览
今日社区活跃度极高，核心焦点集中在 **v0.8.65 架构的最终稳定性验证**与 **v0.8.66 的安全/UX 改进**。主要进展包括：解决了 Plan/Agent 模式混淆导致的意图漂移问题；修复了 Python 命令分类和 JS 执行代理的环境变量继承 Bug；并正式通过 ACP 标准暴露了 Provider/Model 选择接口，增强了与外部编辑器（如 Zed, Paseo）的集成能力。此外，关于原生 Rust 客户端以降低延迟的请求引发广泛讨论。

## 2. 版本发布
**无新版本发布。**
当前开发重点仍围绕 v0.8.65 的收尾工作（如路由原子性、内存泄漏修复）以及 v0.8.66 的功能迭代（如审批模态框优化）。

## 3. 社区热点 Issues
以下 10 个 Issue 反映了当前社区对稳定性、多模型支持和用户体验的高度关注：

1.  **[Bug] CodeWhale 过度介入，偏离用户意图 (#3275)**
    *   **重要性：** 揭示了 Agent 自我循环推理导致的行为偏差，直接影响代码修改的准确性。
    *   **链接:** [Issue #3275](https://github.com/Hmbown/CodeWhale/issues/3275)
2.  **[Feature] 原生 Rust 运行时/桌面客户端请求 (#3541)**
    *   **重要性：** 针对 Node.js 运行时冷启动慢、内存占用高及单线程阻塞问题的根本性解决方案，符合高性能 TUI 的发展趋势。
    *   **链接:** [Issue #3541](https://github.com/Hmbown/CodeWhale/issues/3541)
3.  **[Bug] Plan 和 Agent 模式再次混淆 (#3568)**
    *   **重要性：** 用户反馈 AI 在 Plan 模式下错误地执行 Agent 式的文件修改，表明路由上下文传递仍有缺陷。
    *   **链接:** [Issue #3568](https://github.com/Hmbown/CodeWhale/issues/3568)
4.  **[Enhancement] v0.8.65 Fleet 模型类与自动负载 (#3205)**
    *   **重要性：** 定义了多模型环境下的自动化选择策略，是未来复杂工作流的基础。
    *   **链接:** [Issue #3205](https://github.com/Hmbown/CodeWhale/issues/3205)
5.  **[Bug] MCP 重复服务器实例生命周期问题 (#3461)**
    *   **重要性：** 修复了单个 MCP 配置导致双进程启动、资源浪费及僵尸进程问题，提升系统健壮性。
    *   **链接:** [Issue #3461](https://github.com/Hmbown/CodeWhale/issues/3461)
6.  **[Enhancement] 侧边栏会话面板与自动恢复 (#2934)**
    *   **重要性：** 解决长会话管理中缺乏持久化视图和快速切换的历史遗留痛点。
    *   **链接:** [Issue #2934](https://github.com/Hmbown/CodeWhale/issues/2934)
7.  **[Enhancement] 批准模态框取消与语义审查 (#3466)**
    *   **重要性：** 用户抱怨 v0.8.64 后破坏性操作频繁触发审批，影响工作流效率，需平衡安全与体验。
    *   **链接:** [Issue #3466](https://github.com/Hmbown/CodeWhale/issues/3466)
8.  **[Enhancement] v0.8.65 提供商/模型路由分离 (#2608)**
    *   **重要性：** 架构级重构，确保模型字符串不再直接决定路由，而是通过明确的 Provider 事实解析。
    *   **链接:** [Issue #2608](https://github.com/Hmbown/CodeWhale/issues/2608)
9.  **[Enhancement] ACP 注册表可见性 (#3192)**
    *   **重要性：** 旨在让 CodeWhale 更容易被 Zed 等支持 ACP 标准的编辑器发现和安装。
    *   **链接:** [Issue #3192](https://github.com/Hmbown/CodeWhale/issues/3192)
10. **[Enhancement] v0.8.65 跨提供商模型搜索 (#3075)**
    *   **重要性：** 优化 `/model` 命令在多提供商环境下的搜索体验，避免歧义。
    *   **链接:** [Issue #3075](https://github.com/Hmbown/CodeWhale/issues/3075)

## 4. 重要 PR 进展
以下 10 个 PR 对近期版本稳定性及功能完整性有直接影响：

1.  **[Fix] 修复 Python 命令参数分类死代码 (#3588)**
    *   **内容：** 修正了 `classify_command` 逻辑，使 `python -m` 能正确匹配，此前因标志剥离导致无法识别。
    *   **链接:** [PR #3588](https://github.com/Hmbown/CodeWhale/pull/3588)
2.  **[Fix] 将会话模式传递给自动路由器 (#3581)**
    *   **内容：** 解决 Plan/Agent 模式混淆的核心补丁，确保自动路由器获取正确的会话上下文。
    *   **链接:** [PR #3581](https://github.com/Hmbown/CodeWhale/pull/3581)
3.  **[Feat] 通过 ACP stdio 适配器暴露 Provider/Model 选择 (#3576)**
    *   **内容：** 允许外部 ACP 客户端（如 Paseo）动态切换提供商和模型，增强生态集成。
    *   **链接:** [PR #3576](https://github.com/Hmbown/CodeWhale/pull/3576)
4.  **[Feat] 添加 OpenModel 提供商支持 (#3585)**
    *   **内容：** 新增对 OpenModel 的一流支持，默认路由至 `deepseek-v4-flash`，扩展了可用模型列表。
    *   **链接:** [PR #3585](https://github.com/Hmbown/CodeWhale/pull/3585)
5.  **[Fix] 保留分离式破坏性工具的 YOLO 模式 (#3580)**
    *   **内容：** 优化审批流程，允许后台/分离式破坏性工具在 Auto 模式下保持快捷批准，减少摩擦。
    *   **链接:** [PR #3580](https://github.com/Hmbown/CodeWhale/pull/3580)
6.  **[Fix] JS 执行 Fetch 尊重代理环境变量 (#3577)**
    *   **内容：** 修复了在设置 `HTTP_PROXY` 时 Node.js `fetch` 超时的问题，确保网络工具在代理环境下的连通性。
    *   **链接:** [PR #3577](https://github.com/Hmbown/CodeWhale/pull/3577)
7.  **[Refactor] 提取硬编码本地化为 JSON 并通过 rust-i18n 加载 (#3583)**
    *   **内容：** 重构国际化方案，为后续多语言支持和维护性打下基础。
    *   **链接:** [PR #3583](https://github.com/Hmbown/CodeWhale/pull/3583)
8.  **[Feat] 连接 Moraine MCP 作为回忆工具源 (#3575)**
    *   **内容：** 集成 Moraine MCP 服务器，赋予 Agent 会话搜索和文件注意力管理能力。
    *   **链接:** [PR #3575](https://github.com/Hmbown/CodeWhale/pull/3575)
9.  **[Fix] Windows SDK 环境变量根保留 (#3578)**
    *   **内容：** 修复 Windows 上子 Shell 启动时丢失 SDK/工具链路径的问题，提升 Windows 原生开发体验。
    *   **链接:** [PR #3578](https://github.com/Hmbown/CodeWhale/pull/3578)
10. **[Feat] 显示配置的 Ask 规则 (#3569)**
    *   **内容：** 提供只读的 `/config ask-rules` 视图，帮助用户理解当前的权限控制逻辑。
    *   **链接:** [PR #3569](https://github.com/Hmbown/CodeWhale/pull/3569)

## 5. 功能需求趋势
1.  **高性能原生运行时：** 社区强烈呼吁从 Node.js/TSCript 转向 Rust 原生客户端，以解决冷启动延迟和内存占用问题（Issue #3541, PR #3583 暗示底层重构）。
2.  **多模型/多提供商抽象：** v0.8.65 的重点在于解耦 Provider 和 Model，实现更灵活的路由和自动负载选择（Issues #2608, #3205, #3075）。
3.  **编辑器深度集成 (ACP)：** 通过 ACP 标准暴露控制接口，使 CodeWhale 能更好地融入 Zed、Paseo 等现代编辑器（PR #3576, Issue #3192）。
4.  **工作流自动化与记忆：** 引入 MCP 工具增强 Agent 的记忆检索（Moraine）和会话管理能力（PR #3575, Issue #2934）。

## 6. 开发者关注点
*   **意图保真度：** 开发者高度关注 AI 是否严格遵循“Plan”或“Agent”模式，避免模式混淆导致的意外代码修改（Issue #3568, PR #3581）。
*   **审批疲劳：** 用户对过于频繁的破坏性操作确认感到困扰，期望更智能的上下文感知自动批准机制（Issue #3466, PR #3580）。
*   **环境一致性：** 特别是在 Windows 和代理网络环境下，工具执行（Python, JS Fetch）的行为稳定性是常见的报错来源（PR #3577, #3578）。
*   **资源效率：** 对僵尸进程、内存泄漏（Mouse-report leak）和冗余计算资源的清理是维护者近期的重点（Issue #3461, Issue #3063）。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*