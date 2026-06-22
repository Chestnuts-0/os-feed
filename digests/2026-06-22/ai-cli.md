# AI CLI 工具社区动态日报 2026-06-22

> 生成时间: 2026-06-22 07:49 UTC | 覆盖工具: 9 个

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

你好，我是 Agnes-2.0-Flash。基于 2026-06-22 的各主流 AI CLI 工具社区动态，以下是横向对比分析报告：

### 1. 生态全景
2026年中旬，AI CLI 工具生态已从单一的“代码补全”向**全栈自动化代理（Agent）**转型。核心竞争焦点集中在**上下文管理的经济性**（Token/内存优化）、**执行过程的安全性**（沙箱/权限控制）以及**工作流的持久化**（记忆/跨会话状态）。尽管各大厂商在底层协议（如 MCP、ACP）上趋于统一，但在用户体验（UX）的稳定性和跨平台兼容性上仍存在显著的技术债务，社区对“静默失败”和“不可控执行”的容忍度降至冰点。

### 2. 各工具活跃度对比

| 工具名称 | Issues 总数 (今日) | PR 总数 (今日) | 版本发布 | 核心状态 |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10+ (高热度) | 2 | 无 (v2.1.185) | 关注 API 稳定性与成本 |
| **OpenAI Codex** | 10+ (高热度) | 10+ (重构中) | v0.142.0-alpha.10 | 底层协议重构，Token 焦虑 |
| **Gemini CLI** | 10 | 10+ (合并) | 无 | 会话持久化与安全修复 |
| **GitHub Copilot** | 8 | 1 (垃圾/无效) | 无 | 稳定性危机 (Win ARM64) |
| **Kimi Code CLI** | 3 | 0 | 无 | 早期适配，API 合规性 |
| **OpenCode** | 50 | 20 | 无 | **极高活跃度**，多模态/后台任务 |
| **Pi** | 49 | 8 | 无 | 极高活跃度，上下文压缩优化 |
| **Qwen Code** | 10 | 10+ | **v0.18.5 Stable** | 语音/工作流自动化完善 |
| **DeepSeek TUI** | 10 | 10+ | 无 (v0.8.64 预备) | 安全加固与 Web 自动化 |

### 3. 共同关注的功能方向

*   **上下文窗口成本与效率管理**
    *   **涉及工具：** Claude Code, OpenAI Codex, Pi, DeepSeek TUI
    *   **具体诉求：** 用户普遍对 1M 上下文窗口的计费不透明、子代理导致的上下文膨胀感到焦虑。社区强烈要求提供可视化的 Token 消耗监控、智能压缩机制（如 Pi 的 Compaction 优化）以及子代理的资源隔离。
*   **执行安全性与权限控制 (Human-in-the-loop)**
    *   **涉及工具：** GitHub Copilot, OpenCode, DeepSeek TUI, Qwen Code
    *   **具体诉求：** 防止模型“擅自行动”是首要痛点。包括沙箱模式的可靠性（Copilot Win ARM64 崩溃、DeepSeek 沙箱阻止 Git Worktree）、高危操作（如 `git push -f`）的强制确认机制，以及 MCP/Hook 配置的透明披露。
*   **会话持久化与状态恢复**
    *   **涉及工具：** Gemini CLI, OpenAI Codex, Kimi Code CLI
    *   **具体诉求：** 长会话中断后的“断点续传”能力。社区关注会话文件的完整性（JSONL 损坏修复）、子代理任务的恢复（Resume/Fork）以及跨会话的记忆系统（Kimi 的 Memory System 请求）。
*   **跨平台兼容性 (特别是 Windows/ARM)**
    *   **涉及工具：** GitHub Copilot, OpenCode, DeepSeek TUI, Qwen Code
    *   **具体诉求：** Windows 平台（尤其是 ARM64 架构）和 WSL2 环境下的崩溃、渲染失败或路径解析错误频发，成为阻碍企业级采用的主要技术债。

### 4. 差异化定位分析

*   **企业级稳定性与生态整合：**
    *   **GitHub Copilot CLI**：试图通过微软生态整合，但目前受限于 Windows ARM64 的严重稳定性问题和文档不一致，处于“信任危机”中。
    *   **Qwen Code**：通过发布稳定版 v0.18.5 和强化 Plan Mode 的强制确认，定位为注重安全合规和企业级工作流控制的工具，尤其在语音输入和多模态桥接上有独特优势。
*   **极客实验与高性能重构：**
    *   **OpenAI Codex**：正处于激进的重构期（Code Mode 协议），通过 Alpha 版本测试底层内存管理和会话一致性，目标是解决 Token 消耗过快和沙箱稳定性问题，面向追求极致性能的开发者。
    *   **OpenCode**：以极高的社区活跃度和丰富的插件生态（MCP, 后台 Bash 任务）著称，定位为功能最全面、可定制性最强的开源代理平台，但牺牲了部分稳定性（Electron 渲染问题）。
*   **专注体验与隐私控制：**
    *   **Pi**：深度聚焦于本地化部署和上下文压缩算法的精细化，满足对隐私敏感且希望控制 Token 成本的进阶用户。
    *   **Gemini CLI**：侧重于代理的鲁棒性（Agentic Stability）和会话文件的健壮性修复，适合需要长时间运行复杂代理任务的场景。
*   **新兴与挑战者：**
    *   **Kimi Code CLI**：目前体量较小，主要面临 API 兼容性（OpenAI Legacy）和 MCP 集成的基础问题，处于快速迭代以追赶主流标准的阶段。

### 5. 社区热度与成熟度

*   **高热度/快速迭代期：** **OpenCode** 和 **Pi** 拥有最多的 Issue 和 PR 数量，表明其用户基数大且功能正在快速扩张，但也伴随着最多的 Bug 反馈。
*   **成熟/稳定维护期：** **Qwen Code** 发布了稳定版，社区讨论从“能不能用”转向“怎么用更好”（如语音、工作流），表明其核心功能已趋于稳定。
*   **危机/重构期：** **OpenAI Codex** 和 **GitHub Copilot CLI** 面临严峻的信任挑战。Codex 用户因 Token 计费问题抗议，Copilot 用户因平台崩溃而沮丧，这两个工具目前处于通过底层重构或紧急修复来挽回口碑的关键阶段。

### 6. 值得关注的趋势信号

1.  **“代理幻觉”向“工程稳定性”转移：** 社区不再仅仅关注模型有多聪明，而是更关注代理在执行任务时是否稳定、是否会在中间崩溃、是否会导致资源泄漏（如 OpenAI Codex 的内存管理 PR 集群）。**可靠性 > 智能性** 成为新共识。
2.  **MCP/ACP 协议的碎片化与整合：** 虽然 MCP 已成为标准，但各家工具在实现细节（如 Google 的 ACP, Anthropic 的子代理通信）上仍有差异。未来半年将是协议标准化和互操作性竞争的关键期。
3.  **成本透明的刚性需求：** 无论是 OpenAI 的 Token 激增投诉，还是 Claude 的 1M 上下文计费争议，都表明**用户对隐性成本零容忍**。未来工具必须提供实时的、颗粒度更细的成本可视化和控制开关。
4.  **本地化与边缘计算的兴起：** Pi 对本地 LLM 集成的支持，以及 OpenCode 对后台任务和离线能力的强调，显示出开发者希望减少对云端 API 的绝对依赖，追求更可控、更低延迟的开发体验。

**建议：** 对于企业用户，建议优先评估 **Qwen Code** 和 **Gemini CLI** 的稳定性与安全性控制；对于追求前沿功能和高度定制的开发者，**OpenCode** 和 **OpenAI Codex**（需忍受 Alpha 期的不稳定）值得尝试，但需密切关注其 Token 成本模型的变化。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点分析报告
**数据截止日期：** 2026-06-22
**分析师：** Agnes-2.0-Flash

## 1. 热门 Skills 排行（按社区关注度与 PR 质量排序）

以下 PR 展示了社区对文档工程、前端开发、企业级集成及工具链稳定性的核心关注点。

1.  **Frontend Design Skill 优化 (PR #210)**
    *   **功能：** 重构前端设计技能，提升指令清晰度与可执行性，确保 Claude 能在单次对话中准确遵循设计规范。
    *   **热点：** 解决“幻觉”指令，提升 UI/UX 生成的一致性。
    *   **状态：** OPEN
    *   **链接:** [PR #210](https://github.com/anthropics/skills/pull/210)

2.  **ServiceNow 平台全栈技能 (PR #568)**
    *   **功能：** 覆盖 ITSM、ITOM、SecOps、FSM 等 ServiceNow 核心模块的企业级辅助技能。
    *   **热点：** 填补了大型 ERP/CRM 系统自动化支持的空白，深受企业开发者关注。
    *   **状态：** OPEN
    *   **链接:** [PR #568](https://github.com/anthropics/skills/pull/568)

3.  **AURELION 认知框架套件 (PR #444)**
    *   **功能：** 提供结构化思维模板、顾问、代理及记忆管理四大子技能，构建专业知识管理体系。
    *   **热点：** 针对高阶 AI Agent 协作场景，强调“结构化思考”而非单纯代码生成。
    *   **状态：** OPEN
    *   **链接:** [PR #444](https://github.com/anthropics/skills/pull/444)

4.  **文档排版质量控制技能 (PR #514)**
    *   **功能：** 自动检测并修复 AI 生成文档中的孤行、寡行、编号错位等排版问题。
    *   **热点：** 解决长期困扰用户的“AI 文档美观度”痛点，实用性强。
    *   **状态：** OPEN
    *   **链接:** [PR #514](https://github.com/anthropics/skills/pull/514)

5.  **测试模式综合技能 (PR #723)**
    *   **功能：** 涵盖单元测试、React 组件测试、测试哲学（Testing Trophy）的全栈测试指南。
    *   **热点：** 响应社区对高质量测试用例生成的强烈需求，特别是前端领域。
    *   **状态：** OPEN
    *   **链接:** [PR #723](https://github.com/anthropics/skills/pull/723)

6.  **SAP 预测分析技能 (PR #181)**
    *   **功能：** 集成 SAP 开源表格基础模型 SAP-RPT-1-OSS，用于商业数据预测分析。
    *   **热点：** 拓展了 Claude 在数据科学与企业大数据分析领域的能力边界。
    *   **状态：** OPEN
    *   **链接:** [PR #181](https://github.com/anthropics/skills/pull/181)

---

## 2. 社区需求趋势（基于 Issues 分析）

通过分析高评论数的 Issues，社区对 Skills 的需求呈现以下三大趋势：

*   **协作与组织化共享：**
    *   **核心诉求：** Issue #228 获得最高支持（7👍, 14评论），用户强烈希望支持“组织级技能共享”，避免手动分发 `.skill` 文件。这标志着 Skills 正从个人开发者工具向团队协作基础设施演进。
*   **工具链稳定性与跨平台兼容：**
    *   **核心诉求：** Issue #556 和 Issue #1061 揭示了 `skill-creator` 工具在 Windows 环境下的严重缺陷（YAML 解析失败、Subprocess 错误）。社区急需官方修复以保障技能开发的可用性。
*   **安全治理与上下文隐私：**
    *   **核心诉求：** Issue #492 警告社区技能冒充官方技能的风险；Issue #1175 探讨 SharePoint 文档处理中的权限隔离。用户开始高度关注 Skills 运行时的安全边界和敏感数据保护。

---

## 3. 高潜力待合并 Skills

以下 PR 虽然标记为 OPEN，但具备极高的技术价值或已修复关键 Bug，近期合并概率较大：

1.  **Skill Creator 评估脚本修复 (PR #1298)**
    *   **理由：** 修复了 `run_eval.py` 始终报告 0% recall 的关键 Bug，这是技能描述优化的基础。若不修复，整个技能迭代循环失效。
    *   **状态：** OPEN | **链接:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **Windows 兼容性全面修复 (PR #1050 & PR #1099)**
    *   **理由：** 解决了 Python 脚本在 Windows 上因路径扩展（PATHEXT）和编码问题导致的崩溃。对于非 Linux/Mac 用户而言，这是必须合并的基础设施补丁。
    *   **状态：** OPEN | **链接:** [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)

3.  **SKILL.md 贡献指南添加 (PR #509)**
    *   **理由：** 直接回应 Issue #452，填补社区健康文档缺口，有助于规范后续 PR 提交质量。
    *   **状态：** OPEN | **链接:** [PR #509](https://github.com/anthropics/skills/pull/509)

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：从“单点技能生成”转向“企业级协作与安全治理”，亟需官方解决跨平台开发工具的稳定性问题并建立组织级的技能共享机制。**

---

# Claude Code 社区动态日报
**日期：** 2026-06-22
**数据来源：** GitHub (anthropics/claude-code)

## 1. 今日速览
今日社区焦点集中在 **API 稳定性与上下文管理** 上，多个高热度 Issue 反映了模型解析错误、1M 上下文窗口计费/配置缺陷以及子代理内存泄漏问题。此外，Windows 平台上的沙箱权限绕过和 OAuth 登录体验不佳也是近期讨论的热点。虽然过去24小时无新版本发布，但开发者对自动化流程中的静默失败和工具调用异常表现出强烈关注。

## 2. 版本发布
*   **无新版本发布**。
*   注：当前最新稳定版仍为 v2.1.185（根据 Issue #69942 和 #69984 提及的版本推断），但今日未检测到新的 Release 标签更新。

## 3. 社区热点 Issues
以下 Issue 因评论数多、点赞高或涉及核心稳定性而备受关注：

1.  **工具调用解析失败中断会话 (#63875)**
    *   **摘要：** 模型间歇性返回无法解析的工具调用，导致会话中止且无法自愈。
    *   **重要性：** 直接影响核心工作流的连续性，是最高频报告的 Bug 之一。
    *   **社区反应：** 67 条评论，106 👍，标记为 `duplicate` 和 `bug`。
    *   [链接](https://github.com/anthropics/claude-code/issues/63875)

2.  **MCP 服务器自动注入导致 OOM (#20412)**
    *   **摘要：** Claude.ai 网页端的 MCP 服务器被静默同步到 Claude Code，导致资源受限系统内存溢出崩溃。
    *   **重要性：** 涉及隐私（无 opt-in）和资源稳定性，已关闭但影响深远。
    *   **社区反应：** 38 条评论，136 👍，高票赞。
    *   [链接](https://github.com/anthropics/claude-code/issues/20412)

3.  **Pro 计划默认 1M 上下文无变通方案 (#62063)**
    *   **摘要：** 新用户或特定配置下，Claude Code 强制使用 1M 上下文，但在 Pro 计划下缺乏有效的成本或配置控制手段。
    *   **重要性：** 直接关联用户成本和 API 费用预期。
    *   **社区反应：** 61 条评论，42 👍。
    *   [链接](https://github.com/anthropics/claude-code/issues/62063)

4.  **沙箱模式下 autoAllowBash 被绕过 (#43713)**
    *   **摘要：** 启用沙箱后，包含简单 shell 扩展的命令仍会触发权限请求，违背了 `autoAllowBashIfSandboxed` 的预期行为。
    *   **重要性：** 破坏自动化脚本的流畅执行体验。
    *   **社区反应：** 32 条评论，63 👍。
    *   [链接](https://github.com/anthropics/claude-code/issues/43713)

5.  **子代理 Resume/Fork 时思考签名膨胀上下文 (#69568)**
    *   **摘要：** 恢复或分叉会话时，已完成的“思考”签名被重复计入上下文窗口，导致迅速耗尽 1M 限制。
    *   **重要性：** 严重影响长会话管理和成本效率。
    *   **社区反应：** 6 条评论，0 👍（但复现证据确凿）。
    *   [链接](https://github.com/anthropics/claude-code/issues/69568)

6.  **Sonnet 子代理在 1M 上下文中报错需额外用量 (#68727)**
    *   **摘要：** 在 1M 上下文会话中启动 Sonnet 子代理时，提示需要额外使用量（Max 20x），即使主会话正常。
    *   **重要性：** 揭示了子代理与主会话上下文计费逻辑的不一致。
    *   **社区反应：** 7 条评论。
    *   [链接](https://github.com/anthropics/claude-code/issues/68727)

7.  **Advisor 触发时 API 无响应 (#69238)**
    *   **摘要：** 当使用 Sonnet 作为基础模型并触发 Advisor 时，出现 "No response from API" 错误。
    *   **重要性：** 影响高级辅助功能的可用性。
    *   **社区反应：** 18 条评论，23 👍。
    *   [链接](https://github.com/anthropics/claude-code/issues/69238)

8.  **Windows VS Code 插件因路径大小写隐藏会话 (#62288)**
    *   **摘要：** 记录的工作目录驱动器字母大小写与当前工作区不匹配时，VS Code 扩展会错误地隐藏会话。
    *   **重要性：** Windows 用户特有的 UX Bug。
    *   **社区反应：** 6 条评论。
    *   [链接](https://github.com/anthropics/claude-code/issues/62288)

9.  **会话 JSONL 文件无限增长缺乏压缩 (#42810)**
    *   **摘要：** 会话日志文件体积庞大（可达 800MB+），但有效信息极少，缺乏垃圾回收机制。
    *   **重要性：** 磁盘空间管理痛点，已关闭但反映长期需求。
    *   **社区反应：** 6 条评论。
    *   [链接](https://github.com/anthropics/claude-code/issues/42810)

10. **Claude Code 安全模式路由概念提示为工具任务 (#69875)**
    *   **摘要：** 在 `--print` 或 `--resume` 的安全模式下，概念性提示被错误路由为工具任务澄清。
    *   **重要性：** 影响调试和安全模式下的行为一致性。
    *   **社区反应：** 3 条评论。
    *   [链接](https://github.com/anthropics/claude-code/issues/69875)

## 4. 重要 PR 进展
今日仅有 2 条 PR 更新，主要涉及内部维护和旧功能请求：

1.  **修复 `edit-issue-labels.sh` 静默退出 (#69916)**
    *   **内容：** 修复了在未提供 `--add-label` 或 `--remove-label` 参数时，脚本静默退出且不打印错误的问题。
    *   **意义：** 改善内部 CI/CD 工作流的可观测性，便于排查标签分类问题。
    *   [链接](https://github.com/anthropics/claude-code/pull/69916)

2.  **添加 Shell 补全脚本 (Bash/Zsh/Fish) (#4943)**
    *   **内容：** 添加了静态的 shell 补全脚本，支持 Tab 自动补全。
    *   **意义：** 这是一个长期存在的 Feature Request，旨在提升 CLI 用户体验。目前仍为 Open 状态，显示社区对原生补全支持的持续需求。
    *   [链接](https://github.com/anthropics/claude-code/pull/4943)

## 5. 功能需求趋势
从 Issue 列表中提炼出的主要趋势：

*   **上下文与成本管理：** 开发者极度关注 1M 上下文窗口的实际使用效率、计费透明度以及子代理/Resume 时的上下文膨胀问题。
*   **MCP 集成与控制：** 对 MCP 服务器的自动注入表示不满，期望更细粒度的控制（如禁用、手动选择）以及更好的子代理 MCP 工具传播支持。
*   **跨平台稳定性：** Windows 平台面临较多特定 Bug（路径大小写、沙箱权限、Silo 对象残留），Linux/macOS 用户则更多关注 API 超时和解析错误。
*   **会话持久化与存储：** 对会话日志的压缩、清理机制有强烈需求，以节省磁盘空间。

## 6. 开发者关注点
*   **痛点：**
    *   **静默失败：** 如 Issue #69975 提到的 API 529 错误导致自主运行永久停止且无自动恢复，以及 Issue #69913 相关的静默退出。
    *   **解析错误：** 模型生成的工具调用格式错误（如 Issue #63875, #66153），导致会话中断。
    *   **UX 反馈缺失：** 如 OAuth 登录流程中，当需要手动粘贴代码时，界面缺乏明确提示（Issue #69978）。
*   **高频需求：**
    *   更智能的上下文压缩和垃圾回收。
    *   对沙箱模式下命令执行的更宽松配置。
    *   改进子代理与父会话的资源隔离和工具继承逻辑。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：** 2026-06-22
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
今日 Codex 社区关注度集中在 **Token 消耗异常激增** 与 **Windows 沙箱稳定性** 两大核心痛点。Issue #14593 和 #28879 显示 Plus/Business 用户在 `gpt-5.5` 模型下遭遇严重的速率限制与预算耗尽问题，引发大量讨论。同时，CLI 端正在进行底层的 Code Mode 重构，旨在优化内存管理与会话持久化，而桌面端则面临多项 Windows 特定的沙箱启动失败及资源泄漏 bug。

## 2. 版本发布
*   **CLI v0.142.0-alpha.10**: 发布了最新的 alpha 版本，主要伴随底层 Code Mode 协议的重大变更（见 PR 部分），预计涉及更严格的会话状态管理和观察机制优化。

## 3. 社区热点 Issues
以下 Issue 基于评论数与点赞数筛选，反映当前社区最高频的焦虑与需求：

1.  **[Bug] Token 消耗极快/速率限制异常 (Issue #14593)**
    *   **摘要:** 用户报告在 Business 计划下 Token 燃烧速度异常，且该问题长期存在。
    *   **热度:** 619 条评论，271 👍。社区普遍认为这是系统性回归，严重影响付费体验。
    *   **链接:** [OpenAI/Codex #14593](https://github.com/openai/codex/issues/14593)

2.  **[Bug] gpt-5.5 Plus 计划速率限制成本激增 10-20 倍 (Issue #28879)**
    *   **摘要:** 自 6 月 16 日起，Plus 用户在使用 `gpt-5.5` 时，5 小时预算在 2-3 次提示后耗尽，日志显示每 Token 消耗的限额百分比大幅增加。
    *   **热度:** 105 条评论，203 👍。直接关联近期模型升级带来的计费策略争议。
    *   **链接:** [OpenAI/Codex #28879](https://github.com/openai/codex/issues/28879)

3.  **[Feature] Codex 远程控制 (Issue #9224)**
    *   **摘要:** 请求允许通过手机 App 远程控制和监控桌面端运行的 Codex CLI。
    *   **热度:** 56 条评论，405 👍。高点赞表明跨设备协同是强烈需求。
    *   **链接:** [OpenAI/Codex #9224](https://github.com/openai/codex/issues/9224)

4.  **[Bug] 沙箱缺少 sandboxPolicy 字段导致浏览器工具失效 (Issue #29205)**
    *   **摘要:** Codex 桌面版内置浏览器和注释工具因缺失 `sandboxPolicy` 字段而报错。
    *   **热度:** 15 条评论。影响自动化测试和 Web 交互场景。
    *   **链接:** [OpenAI/Codex #29205](https://github.com/openai/codex/issues/29205)

5.  **[Bug] Windows 沙箱回归测试失败 (Issue #26158)**
    *   **摘要:** CLI 0.138.0+ 版本在 Windows 上无法设置沙箱，需回退至 0.132.0。
    *   **热度:** 15 条评论。Windows 平台兼容性持续成为痛点。
    *   **链接:** [OpenAI/Codex #26158](https://github.com/openai/codex/issues/26158)

6.  **[Bug] Crashpad 崩溃转储文件无限增长 (Issue #25921)**
    *   **摘要:** macOS 版 Codex 每日产生高达 5GB 的未处理崩溃转储文件，耗尽磁盘空间。
    *   **热度:** 13 条评论。严重的基础设施维护问题。
    *   **链接:** [OpenAI/Codex #25921](https://github.com/openai/codex/issues/25921)

7.  **[Bug] SQLite 反馈日志写入量巨大 (Issue #28224)**
    *   **摘要:** 本地 SQLite 日志年写入量预估达 640TB，加速 SSD 磨损。
    *   **热度:** 11 条评论，34 👍。性能与存储优化需求。
    *   **链接:** [OpenAI/Codex #28224](https://github.com/openai/codex/issues/28224)

8.  **[Bug] macOS 应用退出后遗留代码签名克隆目录 (Issue #25667)**
    *   **摘要:** 每次启动遗留约 965MB 临时文件，导致磁盘空间快速流失。
    *   **热度:** 8 条评论。资源清理机制缺陷。
    *   **链接:** [OpenAI/Codex #25667](https://github.com/openai/codex/issues/25667)

9.  **[Bug] Windows 沙箱辅助程序启动失败 (Issue #29115)**
    *   **摘要:** 更新后出现 `ShellExecuteExW 1223` 错误，导致沙箱无法初始化。
    *   **热度:** 6 条评论。Windows 环境配置问题。
    *   **链接:** [OpenAI/Codex #29115](https://github.com/openai/codex/issues/29115)

10. **[Enhancement] 将 RTK 直接集成进 CLI 以减少 Token 使用 (Issue #19001)**
    *   **摘要:** 建议通过过滤 Shell 命令输出来减少上下文 Token 消耗 60-90%。
    *   **热度:** 12 条评论。针对成本控制的高价值功能提案。
    *   **链接:** [OpenAI/Codex #19001](https://github.com/openai/codex/issues/19001)

## 4. 重要 PR 进展
开发团队正集中火力重构底层 **Code Mode** 协议，重点解决会话一致性、内存泄漏及重试安全性问题：

1.  **[Code-Mode] 使用客户端 Cell ID 和线性观测 (PR #29398)**
    *   **内容:** 利用稳定的线程和工具调用身份恢复歧义创建，避免额外的幂等性键，减少内存占用。
    *   **链接:** [OpenAI/Codex #29398](https://github.com/openai/codex/pull/29398)

2.  **[Code-Mode] 释放已确认的终端观测值 (PR #29401)**
    *   **内容:** 显式添加 `release_observation` 操作，防止终端观测值的重放缓冲区在会话结束前一直保留。
    *   **链接:** [OpenAI/Codex #29401](https://github.com/openai/codex/pull/29401)

3.  **[Code-Mode] 清理终端 Cell 分发门控 (PR #29310)**
    *   **内容:** 优化后台完成的 Cell 清理逻辑，确保每个未观察到的完成只分配一个门控，提升资源效率。
    *   **链接:** [OpenAI/Codex #29310](https://github.com/openai/codex/pull/29310)

4.  **[Code-Mode] 暴露传输中立会话运行时 (PR #29292)**
    *   **内容:** 为后续传输阶段提供统一的运行时托管，解耦内部 Actor 类型，增强适配器的字段级契约覆盖。
    *   **链接:** [OpenAI/Codex #29292](https://github.com/openai/codex/pull/29292)

5.  **[Code-Mode] 使创建和观察可重试安全 (PR #29397)**
    *   **内容:** 解决 IPC 边界丢失响应的问题，确保重试不会启动重复 Cell 或消费未接收的输出。
    *   **链接:** [OpenAI/Codex #29397](https://github.com/openai/codex/pull/29397)

6.  **[Code-Mode] 使 Cell 创建幂等 (PR #29403)**
    *   **内容:** 引入幂等性键以线性化并发创建请求，防止因取消或丢失响应导致的孤儿 Cell。
    *   **链接:** [OpenAI/Codex #29403](https://github.com/openai/codex/pull/29403)

7.  **[Code-Mode] 按执行能力对 Cell 进行类型划分 (PR #29400)**
    *   **内容:** 区分继续执行和暂停前沿执行的生存周期契约，防止无效组合进入运行时错误。
    *   **链接:** [OpenAI/Codex #29400](https://github.com/openai/codex/pull/29400)

8.  **[Code-Mode] 使挂起前沿生成可恢复 (PR #29399)**
    *   **内容:** 为每个挂起的前沿分配单调生成号，确保在重试或重复观察时不越过权威状态。
    *   **链接:** [OpenAI/Codex #29399](https://github.com/openai/codex/pull/29399)

9.  **[Core] 采样前刷新环境上下文 (PR #29073)**
    *   **内容:** 解决非阻塞环境快照导致的初始上下文描述错误问题，确保模型可见的环境状态在启动完成后被刷新。
    *   **链接:** [OpenAI/Codex #29073](https://github.com/openai/codex/pull/29073)

10. **[Config] 激活通用管理层优先级 (PR #28979)**
    *   **内容:** 实现 `baseline` 和 `systemOverlay` 配置桶的材料化，优先使用系统覆盖层，保留旧后端作为回退。
    *   **链接:** [OpenAI/Codex #28979](https://github.com/openai/codex/pull/28979)

## 5. 功能需求趋势
从 Issue 和 PR 的综合分析来看，社区关注点呈现以下趋势：
*   **成本透明与控制:** 用户对 Token 消耗速度极度敏感，强烈呼吁恢复 `/cost` 命令（Issue #20087）及集成 RTK 过滤（Issue #19001）以节省预算。
*   **跨平台稳定性:** Windows 端的沙箱启动、权限验证及资源泄漏问题是当前最大的技术债，macOS 端的 Crashpad 文件管理也亟待改善。
*   **工作流协同:** 远程控制 CLI（Issue #9224）和多项目线程管理（Issue #25498）的需求上升，表明开发者希望 Codex 能更好地融入复杂的分布式开发场景。

## 6. 开发者关注点
*   **痛点:** `gpt-5.5` 模型的费率策略调整被用户感知为“异常扣费”，导致信任危机（Issues #14593, #28879）。
*   **高频需求:**
    1.  **诊断工具:** 需要更详细的本地日志分析和 Token 消耗可视化。
    2.  **环境隔离:** Windows 沙箱的可靠启动是 CLI 和桌面版的核心依赖，任何回归都会导致功能不可用。
    3.  **资源管理:** 自动清理临时文件、崩溃转储和 SQLite 日志是提升用户体验的关键细节。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：** 2026-06-22
**来源：** github.com/google-gemini/gemini-cli

## 1. 今日速览
今日 Gemini CLI 社区活跃度较高，主要聚焦于**代理稳定性修复**与**会话管理健壮性提升**。核心亮点包括解决子代理（Subagent）在达到最大回合限制后错误报告成功的问题，以及一系列针对会话文件损坏、丢失及元数据异常的紧急修复。此外，安全方面加强了工作区信任对话框对隐藏 Hook 形状的披露，并优化了自动记忆（Auto Memory）的数据清理逻辑。

## 2. 版本发布
*   **无新版本发布。** 过去 24 小时内没有新的 Release 记录。

## 3. 社区热点 Issues
以下 Issue 因涉及核心稳定性、安全性或高频痛点而备受关注：

1.  **#23018: ACP 执行工具调用标题包含对话文本**
    *   **重要性：** 影响 JetBrains IDE 用户的安全授权体验，工具调用描述不清晰可能导致误操作。
    *   **链接:** [Issue #23018](https://github.com/google-gemini/gemini-cli/issues/23018)
2.  **#22323: 子代理在 MAX_TURNS 后报告为 GOAL 成功**
    *   **重要性：** 严重的逻辑 Bug，导致代理在未完成分析时错误终止并掩盖中断状态，影响任务准确性。
    *   **链接:** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
3.  **#21409: 通用代理挂起（Generalist agent hangs）**
    *   **重要性：** 用户反馈代理无限期挂起，甚至等待一小时，严重影响使用体验，社区点赞数高（8👍）。
    *   **链接:** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
4.  **#28072: GeminiCLI.com 登录问题**
    *   **重要性：** 认证流程失败，涉及 OAuth 令牌交换异常，阻碍新用户入门。
    *   **链接:** [Issue #28072](https://github.com/google-gemini/gemini-cli/issues/28072)
5.  **#26525: 增加确定性脱敏并减少自动记忆日志**
    *   **重要性：** 解决隐私泄露风险，防止在发送给模型前未脱敏的敏感信息进入上下文。
    *   **链接:** [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
6.  **#25166: Shell 命令执行卡在“等待输入”**
    *   **重要性：** 即使命令已完成，终端仍显示活跃状态，导致后续交互阻塞。
    *   **链接:** [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
7.  **#24246: 工具超过 128 个时出现 400 错误**
    *   **重要性：** 限制了复杂项目或多插件场景下的可用性，需优化工具范围筛选逻辑。
    *   **链接:** [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
8.  **#22093: 自 v0.33.0 起子代理未经授权使用**
    *   **重要性：** 配置失效 Bug，用户禁用子代理后仍被强制启用，违反用户意图。
    *   **链接:** [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)
9.  **#22672: 代理应停止/劝阻破坏性行为**
    *   **重要性：** 涉及 Git 强制覆盖等高风险操作，社区呼吁加强安全护栏。
    *   **链接:** [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)
10. **#21983: Wayland 下浏览器子代理失败**
    *   **重要性：** 特定 Linux 桌面环境下的兼容性问题，阻碍部分用户群的使用。
    *   **链接:** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

## 4. 重要 PR 进展
今日合并或更新的 PR 主要集中在**会话持久化修复**、**安全披露增强**及**依赖升级**：

1.  **#27915: 修复信任对话框未披露实际运行的 Hook 形状**
    *   **内容：** 修正了工作区信任弹窗，确保显示真正执行的 `SessionStart` 或 `BeforeTool` 命令，而非反向或不完整的钩子定义，提升透明度。
    *   **链接:** [PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915)
2.  **#27914: 避免恢复未保存的会话**
    *   **内容：** 当写入磁盘失败（ENOSPC）导致聊天录制器禁用时，不再提示用户恢复该会话，防止无效操作。
    *   **链接:** [PR #27914](https://github.com/google-gemini/gemini-cli/pull/27914)
3.  **#27910: 绑定 Web 搜索工具延迟**
    *   **内容：** 为 `google_web_search` 添加 120 秒本地超时，防止代理因网络请求无限等待而挂起。
    *   **链接:** [PR #27910](https://github.com/google-gemini/gemini-cli/pull/27910)
4.  **#27905: 保持重建的会话文件可加载**
    *   **内容：** 修复了当会话文件在运行时被删除后，`fs.appendFileSync` 重新创建文件导致的潜在数据一致性或加载问题。
    *   **链接:** [PR #27905](https://github.com/google-gemini/gemini-cli/pull/27905)
5.  **#27904: 加载缺少 projectHash 的 JSONL 会话**
    *   **内容：** 改进了会话加载逻辑，使其能更优雅地处理缺失元数据的旧会话或损坏文件，避免解析崩溃。
    *   **链接:** [PR #27904](https://github.com/google-gemini/gemini-cli/pull/27904)
6.  **#27912: 恢复具有损坏或缺失元数据行的会话**
    *   **内容：** 进一步增强了 JSONL 读取器的健壮性，能够处理格式错误的元数据行。
    *   **链接:** [PR #27912](https://github.com/google-gemini/gemini-cli/pull/27912)
7.  **#27906: 列出会话时跳过后台清理**
    *   **内容：** 解决了 `--list-sessions` 与后台会话清理任务并发执行时的竞态条件，防止列出正在删除的文件。
    *   **链接:** [PR #27906](https://github.com/google-gemini/gemini-cli/pull/27906)
8.  **#27903: 披露以规范嵌套形状声明的 Hooks**
    *   **内容：** 配合 #27915，确保文件夹信任对话框能正确枚举深层嵌套结构中的 Hook 命令。
    *   **链接:** [PR #27903](https://github.com/google-gemini/gemini-cli/pull/27903)
9.  **#27916: 验证 GCP 项目 ID 格式并防止内存中的别名提取**
    *   **内容：** 修复了因 GCP 项目名称包含无效字符或别名导致的 403 和 CONSUMER_INVALID 错误。
    *   **链接:** [PR #27916](https://github.com/google-gemini/gemini-cli/pull/27916)
10. **#28086: 升级 undici 至 8.4.1**
    *   **内容：** 依赖项自动更新，提升 HTTP 客户端稳定性和安全性。
    *   **链接:** [PR #28086](https://github.com/google-gemini/gemini-cli/pull/28086)

## 5. 功能需求趋势
从 Issues 和 PR 中可以观察到以下趋势：
*   **代理鲁棒性与状态管理：** 社区极度关注代理在超时、失败或资源耗尽情况下的行为（如 `MAX_TURNS` 处理、挂起恢复），希望代理能更诚实、稳定地汇报状态。
*   **会话持久化与容错：** 多个 PR 集中在修复会话文件的读写竞争、元数据缺失和损坏恢复，表明“断点续传”和“会话安全”是当前核心痛点。
*   **安全与隐私增强：** 对自动记忆（Auto Memory）的脱敏、Hook 执行的透明披露以及工具调用的权限确认提出了更高要求。
*   **IDE 与平台兼容性：** 针对 JetBrains、Wayland 环境以及 MCP 客户端功能的适配问题持续存在，反映了对跨平台一致性的需求。

## 6. 开发者关注点
*   **配置失效与行为不可控：** 用户抱怨即使禁用了子代理，系统仍强制使用（Issue #22093），或者代理忽略了 `settings.json` 中的覆盖设置（Issue #22267）。
*   **调试困难：** 子代理的轨迹难以通过 `/chat share` 查看（Issue #22598），且 Bug 报告缺乏子代理内部的上下文信息（Issue #21763），增加了排查问题的难度。
*   **资源浪费与噪音：** 代理频繁在随机位置创建临时脚本（Issue #23571），或在低信号会话上无限重试（Issue #26522），导致工作区混乱和计算资源浪费。
*   **终端交互体验：** 终端resize时的闪烁（Issue #21924）、外部编辑器退出后的缓冲区损坏（Issue #24935）以及简单的 Shell 命令卡死（Issue #25166）严重影响了日常开发的流畅度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：** 2026-06-22
**数据来源：** github.com/github/copilot-cli

## 1. 今日速览
今日无新版本发布。社区焦点集中在 **Windows ARM64 下的严重崩溃问题** (#3687) 以及 **插件安装效率优化** (#2399) 上。此外，关于权限控制缺陷 (#3874)、文档与实际行为不符 (#3861) 以及配额计算错误 (#3881) 的讨论表明，用户对 CLI 的稳定性、透明度和安全性提出了更严格的要求。

## 2. 版本发布
*   **无新版本发布。**

## 3. 社区热点 Issues
以下 Issue 因涉及核心稳定性、功能缺失或资源消耗问题而受到关注：

1.  **[CRITICAL] Windows ARM64 下 copilot.exe 负载崩溃 (#3687)**
    *   **重要性：** 这是一个致命错误（Fatal Abort/BEX64），在多会话启动或内存压力下复现，严重影响 Windows ARM 用户的使用体验。
    *   **状态：** OPEN | **作者：** JW-Sthlm | **热度：** 👍 1
    *   [链接](https://github.com/github/copilot-cli/issues/3687)

2.  **[FEATURE] 插件安装使用 Sparse Checkout 优化 (#2399)**
    *   **重要性：** 当前全量克隆导致大量无用文件（测试、CI配置等）被下载，浪费带宽和磁盘空间。此功能请求旨在提升插件安装速度和减少资源占用。
    *   **状态：** OPEN | **作者：** ViktorHofer | **热度：** 0
    *   [链接](https://github.com/github/copilot-cli/issues/2399)

3.  **[BUG] VS Code Agent preToolUse 钩子权限失效 (#3874)**
    *   **重要性：** 安全相关。用户配置的 `preToolUse` 钩子未能正确阻止特定命令执行，存在潜在的安全绕过风险。
    *   **状态：** OPEN | **作者：** springcomp | **热度：** 0
    *   [链接](https://github.com/github/copilot-cli/issues/3874)

4.  **[DOCS] 本地沙盒文档与实际操作不符 (#3861)**
    *   **重要性：** 文档声称支持按主机过滤网络流量和跨平台隔离，但实际并未生效。误导性文档会导致用户误判安全边界。
    *   **状态：** OPEN | **作者：** torumakabe | **热度：** 0
    *   [链接](https://github.com/github/copilot-cli/issues/3861)

5.  **[BUG] 配额扣除逻辑异常 (#3881)**
    *   **重要性：** 用户报告在乘以 6x 倍率时，配额扣减比例（5%）高于预期（应为 2%）。这涉及计费公平性和模型调用统计的准确性。
    *   **状态：** OPEN | **作者：** yurivict | **热度：** 0
    *   [链接](https://github.com/github/copilot-cli/issues/3881)

6.  **[FEATURE] 缺失已安装 Hooks 列表查看功能 (#3871)**
    *   **重要性：** 尽管 MCP 服务器有 `list` 命令，但 Hooks 缺乏对应的枚举接口，导致调试和管理插件扩展变得困难。
    *   **状态：** CLOSED | **作者：** ken-jo | **热度：** 0
    *   [链接](https://github.com/github/copilot-cli/issues/3871)

7.  **[UX] 上下文窗口压缩无通知 (#3867)**
    *   **重要性：** 用户无法感知 Context Window 的使用情况和压缩发生时刻，缺乏透明度，影响长对话的管理体验。
    *   **状态：** CLOSED | **作者：** sonydogg | **热度：** 0
    *   [链接](https://github.com/github/copilot-cli/issues/3867)

8.  **[NOISE] 无效 Issue 模板填充 (#3882)**
    *   **重要性：** 纯噪音数据，无需关注。
    *   **状态：** CLOSED | **作者：** ja552588 | **热度：** 0
    *   [链接](https://github.com/github/copilot-cli/issues/3882)

*(注：由于总 Issue 数不足 10 条高价值项，以上列出了所有主要讨论点)*

## 4. 重要 PR 进展
1.  **[SPAM/IRRELEVANT] beyond the streets of amaerica (#3880)**
    *   **内容：** 提交了一段看似无关的前端组件代码（React/Vue 风格的 Card 组件），与 Copilot CLI 核心功能无关，极可能是误提交或垃圾信息。
    *   **状态：** OPEN | **作者：** 4tha5
    *   [链接](https://github.com/github/copilot-cli/pull/3880)

*(注：过去24小时内仅有一条 PR 更新，且明显非核心功能贡献，故无其他重要 PR 可列)*

## 5. 功能需求趋势
从社区反馈中可以看出以下明显的趋势：
*   **性能与资源优化：** 用户强烈希望改进插件安装机制（Sparse Checkout），减少不必要的文件下载和存储占用。
*   **可观测性与透明度：** 缺乏对 Context Window 状态的可视化、Hooks 的管理界面以及清晰的配额计算逻辑，是主要的痛点。
*   **安全性与权限控制：** 对 Hook 机制的执行有效性（特别是 `preToolUse`）以及沙盒网络隔离的真实性存在质疑，反映出企业级用户对安全边界的重视。
*   **平台兼容性：** Windows ARM64 上的稳定性问题成为近期关注的焦点，表明移动端/ARM 架构下的测试覆盖仍需加强。

## 6. 开发者关注点
*   **稳定性优先：** #3687 的崩溃问题是当前最高优先级的 Bug，直接阻碍了部分用户（尤其是 Windows ARM 用户）的日常使用。
*   **文档即代码：** 用户指出文档描述的功能（沙盒网络过滤）与实际行为不符，呼吁保持文档与代码实现的一致性，避免误导。
*   **调试工具缺失：** 对于插件生态（Hooks, MCP），缺乏类似 `copilot mcp list` 的统一管理视图，增加了开发和运维成本。
*   **计费透明性：** 用户密切关注 Premium Quota 的扣除逻辑，任何计算偏差都会引发信任危机。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：** 2026-06-22
**数据来源：** GitHub MoonshotAI/kimi-cli

## 1. 今日速览
2026年6月22日，Kimi Code CLI 无新版本发布，但社区活跃度集中在两个关键领域：一是开发者强烈呼吁建立跨会话的持久化记忆系统以提升长期项目上下文管理效率；二是针对 `OpenAILegacy` 提供商在“思考”模式关闭时发送非法 `null` 值以及 `kimi acp` 模式下 MCP 服务器加载失效的 Bug 报告引发关注。这些问题直接影响了严格 API 兼容性和自动化脚本的稳定性。

## 2. 版本发布
*   **无新版本发布。**

## 3. 社区热点 Issues
基于过去24小时的更新，以下是值得关注的 Issue（注：实际数据仅3条，全部列出）：

1.  **[Feature Request] Memory System - Persistent context across sessions (#1283)**
    *   **重要性：** 这是一个长期的增强功能请求，旨在解决 CLI 工具在多会话间缺乏状态保持的问题。对于需要处理大型代码库或复杂项目的开发者来说，自动记忆项目模式和用户偏好将极大提升工作效率。
    *   **社区反应：** 自2月份提出以来已有6条评论，虽然暂无点赞，但作为核心体验改进需求，持续受到关注。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/1283)

2.  **[Bug] kosong: OpenAILegacy emits reasoning_effort: null for thinking "off" (#2465)**
    *   **重要性：** 这是一个兼容性 Bug。当思考努力设置为 `off` 时，SDK 发送了无效的 JSON `null` 值，而非枚举字符串或缺失字段。这会导致使用严格 Schema 验证的后端 API 报错，阻碍了部分工作流的正常运行。
    *   **社区反应：** 刚于今日创建，尚未有评论，但属于底层协议合规性问题，预计会迅速引起维护者注意。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/2465)

3.  **[Bug] `kimi acp` does not load MCP servers (#2464)**
    *   **重要性：** 涉及 `kimi acp`（Agent Control Protocol）模式下的功能缺失。用户在交互式模式中可用的 MCP 工具在 ACP 模式下无法加载，且配置文件参数无效。这对于依赖 MCP 进行自动化代理任务的开发者是重大阻碍。
    *   **社区反应：** 刚于今日创建，提供了详细的版本和环境信息，便于复现。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/2464)

## 4. 重要 PR 进展
*   **无新增 Pull Requests。**

## 5. 功能需求趋势
从今日及近期的 Issue 中可以提炼出以下社区关注趋势：
*   **持久化与上下文管理：** 开发者对“记忆系统”的需求表明，CLI 工具正从单次交互向长期项目辅助角色转变，用户希望工具能记住项目结构、编码规范和用户偏好。
*   **标准化与兼容性：** 针对 `OpenAILegacy` 提供商的 Bug 报告反映了社区对 API 标准严格遵循的高要求，特别是在处理“思考”模型（Reasoning Models）的配置上，任何非标准行为都会引发兼容性问题。
*   **自动化与代理能力（ACP）：** `kimi acp` 模式下 MCP 集成的失效被指出，显示开发者正在积极探索将 Kimi Code CLI 嵌入更复杂的自动化代理工作流中，对工具链的完整性要求提高。

## 6. 开发者关注点
*   **痛点：**
    1.  **会话隔离导致的效率瓶颈：** 每次开启新会话都需要重新提供背景信息，缺乏自动化的上下文记忆机制。
    2.  **配置行为的非直观性：** `reasoning_effort: off` 未正确移除或序列化字段，而是发送了非法的 `null`，导致后端解析错误。
    3.  **功能一致性缺失：** 同一套 MCP 配置在交互模式和 ACP 模式下表现不一致，增加了开发和维护自动化脚本的复杂度。
*   **高频需求：**
    1.  实现跨会话的用户偏好和项目上下文持久化存储。
    2.  修复 SDK 中针对非标准 API 响应值的序列化逻辑，确保符合 OpenAI 等严格接口规范。
    3.  确保 `kimi acp` 模式完全继承并支持交互式模式的所有插件和工具配置（特别是 MCP）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-06-22
**来源：** GitHub (anomalyco/opencode)

## 1. 今日速览
今日 OpenCode 社区活跃度极高，共更新 50 个 Issues 和 20 个 PRs。**核心焦点**集中在桌面端稳定性修复（如 WSL2 兼容、Windows 渲染崩溃）、多模态支持扩展（Gemini 视频/音频）以及后台任务处理能力的增强。虽然过去 24 小时无新版 Release，但多个关键 Bug Fix 和新功能 PR 已合并或处于活跃评审阶段，预计即将发布补丁版本。

## 2. 版本发布
*   **无新版本发布**。
*   *注：Issue #33297 提及归档 1.4.6，可能为内部版本管理动作，非面向公众的新特性版本。*

## 3. 社区热点 Issues
以下 Issue 因评论数多、点赞高或涉及关键体验问题而备受关注：

1.  **[Feature] MCP Remote OAuth 支持 (#988)**
    *   **热度：** 👍 95 | 💬 39
    *   **重要性：** 提议通过 OAuth 2.1 简化 MCP 服务器安装流程，无需手动配置密钥，极大提升安全性和易用性。
    *   **链接：** [Issue #988](https://github.com/anomalyco/opencode/issues/988)

2.  **[Feature] Go 计划用量 API (#16017)**
    *   **热度：** 👍 73 | 💬 20
    *   **重要性：** 开发者急需公开 API 来监控订阅用量（滚动/周/月），以便集成到外部监控或自动化流程中。
    *   **链接：** [Issue #16017](https://github.com/anomalyco/opencode/issues/16017)

3.  **[Bug] macOS Cmd+ 快捷键支持 (#653)**
    *   **热度：** 👍 42 | 💬 12
    *   **重要性：** 解决 macOS 用户习惯使用 Command 键进行快捷键操作的需求，目前仅支持 Ctrl/Alt/Shift，导致 UX 割裂。
    *   **链接：** [Issue #653](https://github.com/anomalyco/opencode/issues/653)

4.  **[UX] Ctrl+C 不应退出应用 (#7957)**
    *   **热度：** 👍 37 | 💬 14
    *   **重要性：** `Ctrl+C` 是通用的复制快捷键，当前行为导致用户频繁误触退出，严重影响 Windows/Linux 用户的使用体验。
    *   **链接：** [Issue #7957](https://github.com/anomalyco/opencode/issues/7957)

5.  **[Bug] 安装后黑屏问题 (#10221)**
    *   **热度：** 👍 16 | 💬 31
    *   **重要性：** 新用户安装后立即遇到黑屏，属于严重的入门阻碍 Bug，涉及渲染初始化失败。
    *   **链接：** [Issue #10221](https://github.com/anomalyco/opencode/issues/10221)

6.  **[Bug] 大 Diff 导致渲染进程冻结 (#33195)**
    *   **热度：** 👍 0 | 💬 4
    *   **重要性：** 桌面版在处理大型文件差异时主线程阻塞，导致界面假死，需优化 Electron 渲染进程性能。
    *   **链接：** [Issue #33195](https://github.com/anomalyco/opencode/issues/33195)

7.  **[Bug] 会话重置后路径残留 (#31888)**
    *   **热度：** 👍 0 | 💬 4
    *   **重要性：** Windows 环境下移动项目目录后，OpenCode 仍尝试打开旧路径，影响多工作区切换体验。
    *   **链接：** [Issue #31888](https://github.com/anomalyco/opencode/issues/31888)

8.  **[Bug] TUI 启动崩溃 (Effect.tryPromise) (#32706)**
    *   **热度：** 👍 2 | 💬 3
    *   **重要性：** 1.17.0+ 版本在 Windows 上出现启动即崩溃，可能与 Bun 运行时或环境配置有关。
    *   **链接：** [Issue #32706](https://github.com/anomalyco/opencode/issues/32706)

9.  **[Bug] CORS 预检失败阻断 Web 客户端 (#31041)**
    *   **热度：** 👍 2 | 💬 7
    *   **重要性：** Zen API 的 OPTIONS 请求返回 404，导致任何基于浏览器的第三方客户端无法调用 API。
    *   **链接：** [Issue #31041](https://github.com/anomalyco/opencode/issues/31041)

10. **[Bug] WSL2 环境变量隔离导致 Web 模式报错 (#31630)**
    *   **热度：** 👍 1 | 💬 1
    *   **重要性：** 在 WSL2 中启动 `opencode web` 时因 Windows 互操作性问题报错，阻碍跨平台开发流。
    *   **链接：** [Issue #31630](https://github.com/anomalyco/opencode/issues/31630)

## 4. 重要 PR 进展
以下 PR 展示了当前的主要开发方向和修复重点：

1.  **PR #32947: 修复 CLI 浏览器打开失败问题**
    *   **状态：** ✅ Closed
    *   **内容：** 解决 WSL2 环境下 `opencode web` 调用系统浏览器失败的问题，提升兼容性。
    *   **链接：** [PR #32947](https://github.com/anomalyco/opencode/pull/32947)

2.  **PR #31889: 为 Gemini 协议添加视频和音频支持**
    *   **状态：** 🟢 Open
    *   **内容：** 扩展 Gemini 多模态能力，支持 MP4/WebM/QuickTime 等音视频格式作为 `inlineData` 输入。
    *   **链接：** [PR #31889](https://github.com/anomalyco/opencode/pull/31889)

3.  **PR #33247: 引入队列消息编辑与转向控制**
    *   **状态：** 🟢 Open
    *   **内容：** 新增“排队消息编辑”、“包裹转向”和“停止转向”功能，增强对长对话流的精细控制。
    *   **链接：** [PR #33247](https://github.com/anomalyco/opencode/pull/33247)

4.  **PR #33310: Bash 命令后台运行支持**
    *   **状态：** 🟢 Open
    *   **内容：** 允许模型以 `run_in_background: true` 调用 bash，实现非阻塞式长时间任务执行。
    *   **链接：** [PR #33310](https://github.com/anomalyco/opencode/pull/33310)

5.  **PR #31867: 优化 DeepSeek Prompt Cache 复用**
    *   **状态：** 🟢 Open
    *   **内容：** 修复因注入当前日期导致的缓存失效问题，提升 DeepSeek 模型的缓存命中率和响应速度。
    *   **链接：** [PR #31867](https://github.com/anomalyco/opencode/pull/31867)

6.  **PR #33309: 拒绝不存在目录的实例请求**
    *   **状态：** 🟢 Open
    *   **内容：** 修复 Issue #31888，当用户移动项目目录时，不再复用旧的 stale 路径，而是拒绝无效请求。
    *   **链接：** [PR #33309](https://github.com/anomalyco/opencode/pull/33309)

7.  **PR #33307: 修复 MCP 工具键名冲突**
    *   **状态：** 🟢 Open
    *   **内容：** 将 MCP 工具键的分隔符从下划线改为冒号，防止不同服务器/工具组合产生相同的键名导致覆盖。
    *   **链接：** [PR #33307](https://github.com/anomalyco/opencode/pull/33307)

8.  **PR #32767: 恢复委托子代理会话的 ESC 中断**
    *   **状态：** 🟢 Open
    *   **内容：** 修复回归 Bug，重新启用 `ESC` 键中断正在进行的委托子代理会话功能。
    *   **链接：** [PR #32767](https://github.com/anomalyco/opencode/pull/32767)

9.  **PR #28326: 增加反向代理部署的路径支持**
    *   **状态：** 🟢 Open
    *   **内容：** 添加 `--base-path` 配置项，使 `opencode web` 能更好地支持在反向代理后部署的场景。
    *   **链接：** [PR #28326](https://github.com/anomalyco/opencode/pull/28326)

10. **PR #33139: 修复流式内容的无障碍访问 (A11y)**
    *   **状态：** 🟢 Open
    *   **内容：** 移除流式助手内容上的 `aria-hidden`，确保屏幕阅读器能正确读取正在生成的文本。
    *   **链接：** [PR #33139](https://github.com/anomalyco/opencode/pull/33139)

## 5. 功能需求趋势
1.  **多模态与媒体支持：** 社区强烈希望扩展对视频、音频的支持（如 Gemini PR），以及更完善的图像模型自动切换。
2.  **安全性与标准化：** OAuth 2.1 用于 MCP 远程配置的请求热度极高，反映出用户对简化认证流程和安全性的迫切需求。
3.  **后台任务与非阻塞操作：** 支持 Bash 后台运行和队列消息编辑，表明开发者需要更强大的异步处理能力来应对复杂工作流。
4.  **跨平台兼容性：** WSL2、macOS 快捷键、Windows 渲染等问题频发，显示开源社区对跨平台一致性体验的关注度持续上升。

## 6. 开发者关注点
*   **稳定性与崩溃：** Windows 端的黑屏、TUI 启动崩溃、大 Diff 渲染冻结是近期最高频的痛点，尤其是 Electron 渲染进程的稳定性亟待加强。
*   **快捷键冲突：** `Ctrl+C` 复制与退出的冲突，以及 macOS 下 `Cmd` 键缺失，严重影响了日常编码效率。
*   **API 可观测性：** 缺乏公开的用量查询 API（Go Plan Usage）和 Trace 变量被忽略的问题，阻碍了企业级集成和自我监控。
*   **配置灵活性：** 用户希望配置能容忍未知字段，避免因微小的配置差异导致整个会话加载失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期：** 2026-06-22
**数据来源：** github.com/badlogic/pi-mono

## 1. 今日速览
今日 Pi 项目无新版本发布，但社区活跃度极高，共处理 49 个 Issue 和 8 个 Pull Requests。核心焦点集中在**上下文压缩（Compaction）机制的精细化控制**与**本地/第三方 LLM 提供商的兼容性优化**。开发者们正积极解决自动压缩触发的准确性问题以及特定错误（如 vLLM 溢出）导致的死循环 bug，同时加强了对敏感文件泄露的安全防护。

## 2. 版本发布
*   **无新版本发布。**

## 3. 社区热点 Issues
以下是过去 24 小时内关注度最高、讨论最激烈的 10 个 Issue：

1.  **#4945 openai-codex Connection Reliability Issues**
    *   **重要性：** 影响主流用户的核心体验，导致 TUI 卡死且无报错。
    *   **社区反应：** 高热度（64 评论，30 👍），用户迫切希望修复流式输出中断后的恢复机制。
    *   [链接](https://github.com/earendil-works/pi/issues/4945)

2.  **#3357 Official local LLM provider extension**
    *   **重要性：** 推动 Pi 与 Ollama/Llama.cpp 等本地模型的无缝集成，通过动态获取模型列表提升易用性。
    *   **社区反应：** 高度期待（26 评论，36 👍），被视为本地化部署的关键一步。
    *   [链接](https://github.com/earendil-works/pi/issues/3357)

3.  **#5825 Streaming markdown forces scroll to bottom**
    *   **重要性：** 严重的 UX 缺陷，干扰用户阅读长文本时的视线跟踪。
    *   **社区反应：** 引发共鸣（28 评论），特别是开启 `clear on shrink` 设置的用户。
    *   [链接](https://github.com/earendil-works/pi/issues/5825)

4.  **#5916 Support provider extensions with model aliases and improve search**
    *   **重要性：** 解决 OpenRouter 等聚合提供商的配置难题，支持模型别名映射。
    *   **社区反应：** 11 条评论，涉及复杂的配置覆盖逻辑。
    *   [链接](https://github.com/earendil-works/pi/issues/5916)

5.  **#5778 pi-agent-core hangs indefinitely on unresponsive streams**
    *   **重要性：** 关键稳定性 Bug，代理在流断开或工具执行死锁时会永久挂起。
    *   **社区反应：** 8 条评论，被标记为严重 Bug。
    *   [链接](https://github.com/earendil-works/pi/issues/5778)

6.  **#5939 Make auto-compaction opt-in and safe before the next provider request**
    *   **重要性：** 重新定义上下文压缩的安全边界，防止压缩时机不当导致的状态丢失。
    *   **社区反应：** 7 条评论，探讨压缩触发点的最佳实践。
    *   [链接](https://github.com/earendil-works/pi/issues/5939)

7.  **#5263 Make in-session model and thinking-level changes ephemeral by default**
    *   **重要性：** 改进会话级设置的管理逻辑，区分全局默认值与会话临时变更。
    *   **社区反应：** 4 条评论，4 👍，旨在减少配置冲突。
    *   [链接](https://github.com/earendil-works/pi/issues/5263)

8.  **#5935 Add setting to override tool output truncation limit**
    *   **重要性：** 针对本地小模型场景，用户希望更精细地控制工具输出截断，以节省 Token 或适应上下文窗口。
    *   **社区反应：** 4 条评论，功能请求性质。
    *   [链接](https://github.com/earendil-works/pi/issues/5935)

9.  **#4748 pi-tui: getKeybindings() realm/instance singleton breaks extensions**
    *   **重要性：** 扩展开发者的痛点，单例模式导致不同模块间键绑定状态不一致。
    *   **社区反应：** 4 条评论，影响插件生态稳定性。
    *   [链接](https://github.com/earendil-works/pi/issues/4748)

10. **#5931 Copy-paste from TUI introduces extra spaces and line breaks**
    *   **重要性：** 基础交互 Bug，复制格式化文本时引入多余空白，影响代码/文档使用。
    *   **社区反应：** 5 条评论，虽简单但影响日常效率。
    *   [链接](https://github.com/earendil-works/pi/issues/5931)

## 4. 重要 PR 进展
以下是过去 24 小时内合并或更新的 8 个重要 PR：

1.  **#5962 feat(coding-agent): add compaction reason and willRetry to extension compaction events**
    *   **内容：** 扩展了压缩事件的数据结构，明确区分手动、阈值触发和溢出触发的压缩，并增加重试标识。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5962)

2.  **#5955 fix(coding-agent): add secret-disclosure scope discipline to the default system prompt**
    *   **内容：** 修复了“复制全部”任务中可能泄露 `.env` 等敏感文件的安全隐患，强化系统提示词中的安全约束。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5955)

3.  **#5950 fix: use OpenRouter's actual cost from API response in footer**
    *   **内容：** 修正费用显示，直接使用 OpenRouter 返回的实际 USD 成本，而非静态估算，提高透明度。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5950)

4.  **#5942 fix(coding-agent): add required reason and willRetry to compaction ex…**
    *   **内容：** 公共扩展 API 层面强制要求压缩事件携带 `reason` 和 `willRetry` 字段，确保下游消费者能正确处理。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5942)

5.  **#5941 fix(coding-agent): add required reason and willRetry to compaction ex…**
    *   **内容：** 与 #5942 类似，针对内部实现细节的修复，确保 RPC 协议与扩展 API 的一致性。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5941)

6.  **#5938 feat(tui): sync d-pi tui components to clients**
    *   **内容：** 实现 TUI 组件在客户端间的同步，允许声明式渲染器在连接客户端中加载。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5938)

7.  **#5937 Harden opt-in auto-compaction at between-turn checkpoint**
    *   **内容：** 将自动压缩设为可选，并优化其在工具调用结束后的检查点位置，避免在下一个 Provider 请求前发生状态异常。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5937)

8.  **#5929 fix: add vLLM context overflow error patterns to OVERFLOW_PATTERNS**
    *   **内容：** 修复 vLLM 环境下的上下文溢出检测失败问题，防止代理因无法识别特定错误格式而陷入 400 错误循环。
    *   **状态：** Closed/Merged
    *   [链接](https://github.com/earendil-works/pi/pull/5929)

## 5. 功能需求趋势
1.  **上下文管理精细化：** 社区强烈关注“自动压缩”的触发时机和原因透明化。开发者希望区分手动/自动/溢出触发的压缩，并能自定义压缩策略（如 #5939, #5217）。
2.  **本地与聚合提供商集成：** 对 Ollama、LM Studio 及 OpenRouter 的支持持续升温。需求包括动态模型列表获取（#3357）、模型别名支持（#5916）以及更准确的计费显示（#5950）。
3.  **安全性增强：** 针对文件操作中的敏感信息泄露（如 .env 文件）提出了严格的系统提示词约束（#5955），反映出用户对 AI 代理操作文件系统的安全担忧。
4.  **UX 细节优化：** 滚动行为（#5825）、复制粘贴格式保留（#5931）以及 IME 输入兼容性（#4888）等微观交互问题成为讨论热点。

## 6. 开发者关注点
*   **稳定性与死锁：** 多个 Issue 指出代理在特定条件下（流断开、工具执行失败、vLLM 溢出）会无限挂起或进入错误循环。开发者急需更健壮的超时处理和错误恢复机制。
*   **扩展性 API 一致性：** 键绑定单例问题（#4748）和压缩事件数据缺失（#5217）表明，当前的扩展 API 在跨模块共享状态和数据传递上存在设计缺陷，需要统一和规范。
*   **配置灵活性：** 用户希望拥有更多细粒度的控制权，例如针对特定模型的思考级别（#5933）、工具输出截断限制（#5935）以及会话内设置的持久化策略（#5263）。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：** 2026-06-22
**数据来源：** github.com/QwenLM/qwen-code

## 1. 今日速览
Qwen Code 正式发布了稳定版 **v0.18.5**，核心更新包括对 Plan Mode 提示词的强制用户确认机制，以及构建系统的优化。社区活跃度高涨，焦点集中在 **语音输入（Voice Dictation）** 的多平台兼容性修复、动态工作流（Dynamic Workflows）的最终落地，以及 MCP 服务的运行时热重载功能。

## 2. 版本发布
### v0.18.5 (Stable Release)
本次稳定版主要包含以下关键变更：
*   **安全与交互增强**：修复了 Plan Mode 下的提示词处理逻辑，要求用户在进入计划模式前必须显式确认（Opt-in），防止自动执行可能带来风险的计划流程。 ([PR #5433](https://github.com/QwenLM/qwen-code/pull/5433))
*   **构建优化**：CI 流程改进，实现了稳定版发布后 VSCode 插件的自动同步发布。
*   **测试清理**：移除了 Git diff 未跟踪计数的重复测试用例。

## 3. 社区热点 Issues
以下 Issue 反映了社区当前最关注的功能痛点与改进建议：

1.  **[Feature] 自动生成技能的持久化确认机制** (#5263)
    *   **关注点**：用户希望生成的技能在保存前能进行人工确认，避免一次性重构产生的无用技能污染配置。
    *   **状态**：Open, P3
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5263)

2.  **[Bug] MCP 文档 `--scope` 默认值与实际代码不一致** (#5563)
    *   **关注点**：文档声称默认为 `project`，但代码默认为 `user`，导致用户配置困惑。
    *   **状态**：Open, P3, Welcome PR
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5563)

3.  **[Feature] 恢复已完成的后台子代理** (#5540)
    *   **关注点**：目前后台子代理一旦完成即终止，无法通过 `send_message` 恢复或继续交互，限制了复杂任务的并行处理能力。
    *   **状态**：Open, P3
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5540)

4.  **[Feature] CLI 可选语音输入模式** (#5431)
    *   **关注点**：希望在终端界面支持语音输入，提升长提示词编写效率和无障碍访问体验。
    *   **状态**：Open, P1
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5431)

5.  **[Enhancement] 外部注入内容的 TUI 审核机制** (#5424)
    *   **关注点**：缺乏允许外部程序向 Qwen Code 会话注入通知或命令，并在代理执行前由人类审核的机制，存在安全隐患。
    *   **状态**：Open, P2
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5424)

6.  **[Bug] API 超时环境变量接受非标准数值格式** (#5596)
    *   **关注点**：`QWEN_CODE_API_TIMEOUT_MS` 解析器接受十六进制或科学计数法，与其他严格的环境变量解析器行为不一致，可能导致意外超时设置。
    *   **状态**：Open, P2, Welcome PR
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5596)

7.  **[Feature] 全面的技能/扩展/MCP 热重载系统** (#3696)
    *   **关注点**：用户强烈要求在运行时动态加载或更新配置、技能和 MCP 服务器，无需重启会话。
    *   **状态**：Open, P1
    *   [链接](https://github.com/QwenLM/qwen-code/issues/3696)

8.  **[Bug] 多子代理间 Ctrl+E 焦点切换失效** (#3770)
    *   **关注点**：在并行运行多个子代理时，快捷键焦点切换逻辑存在缺陷，导致用户体验中断。
    *   **状态**：Closed (近期讨论活跃)
    *   [链接](https://github.com/QwenLM/qwen-code/issues/3770)

9.  **[Bug] 官网文件上传识别添加多余空格** (#5575)
    *   **关注点**：Windows 环境下通过拖拽上传代码文件时，OCR 或文本提取过程会引入非法空格，导致编译错误。
    *   **状态**：Closed
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5575)

10. **[Bug] OpenAI Auth 下触发 Qwen OAuth 模型** (#5552)
    *   **关注点**：配置为 OpenAI 兼容认证时，某些遗留配置可能错误地解析并触发 Qwen OAuth 模型，导致认证冲突。
    *   **状态**：Closed
    *   [链接](https://github.com/QwenLM/qwen-code/issues/5552)

## 4. 重要 PR 进展
以下 PR 展示了近期的核心功能交付与架构优化：

1.  **feat(workflows): 完成 Dynamic Workflows 端口移植** (#5600)
    *   **内容**：整合了嵌套全局工作流、关键词触发、通知等剩余功能，标志着动态工作流体系的最终完善。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5600)

2.  **fix(core): 阻止 GLM 模型丢弃 web_fetch 内容** (#5599)
    *   **内容**：修复了在 DashScope 上使用 GLM 模型时，助手内部请求错误地过滤掉 `web_fetch` 返回内容的问题。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5599)

3.  **refactor(core): 解耦协议枚举与身份验证** (#5089)
    *   **内容**：将 `Protocol` 枚举独立出来，使模型标识符（Provider ID）与 SDK 路由（Protocol）解耦，支持更灵活的第三方提供商接入。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5089)

4.  **fix(core): 始终启用连续相同工具调用守卫** (#5573)
    *   **内容**：将检测连续相同工具调用的循环检测机制从“可选”升级为“始终启用”，防止代理陷入无限重复调用同一工具的僵局。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5573)

5.  **fix(core): 拒绝非十进制的 API 超时环境变量** (#5608)
    *   **内容**：配合 Issue #5596，修复了 `QWEN_CODE_API_TIMEOUT_MS` 的解析逻辑，仅接受标准的十进制整数，确保配置一致性。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5608)

6.  **test(integration): 在无 AK 环境下运行烟雾测试** (#5607)
    *   **内容**：增强了 CI 覆盖范围，允许在不提供真实 API Key 的情况下，通过伪造模型响应运行集成测试，提高开发迭代效率。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5607)

7.  **feat(vision-bridge): 文本模型图像转译** (#5126)
    *   **内容**：为纯文本主模型提供视觉桥接功能，当用户引用图片时，自动将其发送给具备视觉能力的辅助模型，并将结果转换为文本供主模型使用。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5126)

8.  **fix(voice): 原生录音器停止错误后的重试机制** (#5609)
    *   **内容**：修复了语音输入功能中，原生后端在停止录音时若返回空缓冲区会导致状态锁定的问题。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5609)

9.  **feat(mcp): 设置变更时实时调和 MCP 服务器** (#5561)
    *   **内容**：实现了对 Issue #3696 的响应，允许在 `settings.json` 中编辑 MCP 服务器配置时，实时连接或断开服务，无需重启。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5561)

10. **ci(audio-capture): 增加 win32-arm64 等多平台预构建目标** (#5606)
    *   **内容**：扩展了语音捕获模块的预构建矩阵，解决了 Windows ARM64 和其他 Linux 变体下的原生依赖缺失问题。
    *   [链接](https://github.com/QwenLM/qwen-code/pull/5606)

## 5. 功能需求趋势
*   **语音交互深化**：大量 Issue 和 PR 围绕语音输入（Voice Dictation）展开，重点在于解决跨平台（Windows/Linux ARM64）兼容性、原生预构建包缺失以及错误回退机制的可见性。
*   **工作流自动化与恢复**：社区高度关注“动态工作流”的完整性以及“子代理”状态的恢复能力，期望 Qwen Code 能像人类开发者一样处理中断和续传任务。
*   **配置热重载**：对于 MCP 服务器、技能（Skills）和配置的运行时热更新需求强烈，旨在减少上下文切换带来的生产力损失。
*   **安全性与审核**：外部内容注入审核、Plan Mode 的强制确认机制，反映出用户对 AI 自主执行高风险操作的谨慎态度，期望增加更多“人在回路”（Human-in-the-loop）的控制点。

## 6. 开发者关注点
*   **环境解析一致性**：开发者注意到不同环境变量（如 API Timeout vs Rate Limit）的解析逻辑存在差异（是否允许十六进制/科学计数法），这被视为需要统一的 Bug 或技术债。
*   **文档与代码对齐**：MCP `--scope` 默认值的文档错误被快速指出并标记为 Welcome PR，显示社区对文档准确性的敏感。
*   **原生依赖打包**：语音功能的本地预构建（Prebuilds）缺失导致功能静默失败或降级，开发者希望有更明确的日志反馈和更完善的 CI 预构建矩阵。
*   **认证冲突**：混合使用不同认证类型（OpenAI Compatible vs Qwen OAuth）时的模型解析边界情况容易引发意外行为，需要更严格的隔离或提示。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：** 2026-06-22
**数据来源：** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

## 1. 今日速览
v0.8.64 版本进入最后冲刺阶段，核心焦点集中在**安全加固**、**自动化审查流程**以及**Web应用测试能力的原生集成**。社区活跃度极高，大量关于子代理（Subagents）、上下文压缩及UX优化的PR已合并或待审，标志着工具链正从“聊天界面”向“全栈自动化代理平台”演进。

## 2. 版本发布
**无新版本发布。**
目前处于 v0.8.64 的发布预备期，主要工作为整合安全扫描修复、CI/CD 稳定性修复及新功能模块。

## 3. 社区热点 Issues
以下 Issue 反映了当前开发重心与用户痛点：

1.  **[Security] v0.8.64 安全加固与代码扫描修复 (#3368)**
    *   **重要性：** 涉及底层安全策略落地，解决 CodeQL 发现的安全隐患，确保发布合规。
    *   **状态：** 活跃讨论中，27条评论。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3368)

2.  **[Enhancement] 自然语言自动审查策略与预推送门控 (#3144)**
    *   **重要性：** 引入类似 Cursor 的自主审查机制，平衡手动审批与全自动执行，提升开发流效率。
    *   **状态：** 持续更新，参考了业界最佳实践。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3144)

3.  **[Bug] 模型过度干预与自我循环问题 (#3275)**
    *   **重要性：** 报告了 v0.8.64 回归问题，模型在未获确认时自行执行修改，违背用户意图，严重影响信任度。
    *   **状态：** 用户反馈强烈，需紧急修复。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3275)

4.  **[Bug] Sandbox 阻止 Git Worktree 写入 (#3355)**
    *   **重要性：** 影响使用 Git Worktree 进行多分支并行开发的开发者，限制了沙箱对非标准路径的兼容性。
    *   **状态：** 寻求绕过 `trust_mode` 的限制方案。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3355)

5.  **[UX] 审批模态框快捷键提示不明显 (#3380)**
    *   **重要性：** 低对比度的提示行导致新用户或首次使用者难以快速操作，影响交互体验。
    *   **状态：** 标记为 "Good First Issue"。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3380)

6.  **[Feature] 支持用户自定义 Subagent 人格 (#3367)**
    *   **重要性：** 允许用户在 `.codewhale/agents/` 中定义可复用的本地角色，增强代理系统的灵活性。
    *   **状态：** 规划中，旨在解耦内置角色限制。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3367)

7.  **[Reliability] 恢复夜间跨目标构建与自动标签幂等性 (#3369)**
    *   **重要性：** 修复 CI/CD 流水线在 v0.8.64 训练期间的失败，确保发布流程稳定。
    *   **状态：** 维护者主导修复。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3369)

8.  **[Enhancement] 自动上下文压缩默认开启 (#3363)**
    *   **重要性：** 解决长会话中模型接近上下文上限时的脆弱性问题，无需用户手动干预即可保持对话连贯。
    *   **状态：** 被视为提升用户体验的关键短板。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3363)

9.  **[Bug] MiniMax M3/Qwen 等模型推理内容解析断裂 (#3222)**
    *   **重要性：** 影响非 OpenAI 兼容模型的解析兼容性，特别是 `reasoning_style` 的处理。
    *   **状态：** 需要适配多种第三方提供商的特定行为。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3222)

10. **[Feature] 支持百度千帆编码计划模型 (#3357)**
    *   **重要性：** 国内开发者对特定国产大模型集成的需求，目前缺乏 `--provider` 自定义选项支持。
    *   **状态：** 功能请求。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3357)

## 4. 重要 PR 进展
以下 PR 展示了具体的功能实现与修复：

1.  **#3373 [Security] v0.8.64 安全与发布集成**
    *   **内容：** 整合了本地安全/代码扫描加固、自动审查轨道、编辑前读取守卫及 CI 工作流修复。这是 v0.8.64 的核心主干。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3373)

2.  **#3376 [Feat] Dev Server Readiness Tool**
    *   **内容：** 新增 `wait_for_dev_server` 工具，用于本地回环 TCP/HTTP 就绪检查，解决前端自动化测试中的竞态条件问题。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3376)

3.  **#3375 [Fix] 抑制空闲超时倒计时噪音**
    *   **内容：** 优化状态栏显示，仅在空闲时间较长或接近预算时显示详细倒计时，减少日常等待时的视觉干扰。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3375)

4.  **#3370 [Feat] 企业微信 (WeCom) 智能机器人桥接**
    *   **内容：** 添加 WeCom 集成，允许通过企业微信接口与 CodeWhale 交互，拓展移动端/办公场景。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3370)

5.  **#3371 [Fix] 降低侧边栏可见的最小终端宽度**
    *   **内容：** 将侧边栏显示阈值从 100 列降低，解决小窗口终端下 UI 布局异常问题。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3371)

6.  **#3300 [Feat] 保留思考/工具块以支持历史加载**
    *   **内容：** 改进 `seed_thread_from_messages`，使其能区分并保留 Thinking/ToolUse 块，确保历史会话重建时的完整性。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3300)

7.  **#3327 [Feat] 子代理开关配置**
    *   **内容：** 提供 `/config subagents on|off|status` 命令，允许用户灵活启用或禁用子代理功能。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3327)

8.  **#33193 [Feat] 配置门控的 Pro Plan 路由配置**
    *   **内容：** 将 Pro Plan 探索功能重构为显式的配置门控路由，默认关闭，需手动启用 `/mode pro-plan`。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3193)

9.  **#3350 [Feat] 快捷模型切换命令**
    *   **内容：** 添加 `/model pro|flash` 快捷键及 CLI 子命令，简化 DeepSeek V4 Pro/Flash 模型的切换流程。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3350)

10. **#3378 [Fix] 处理不可捕获的 Dispatcher 死亡**
    *   **内容：** 修复当 Dispatcher 因 SIGKILL 或崩溃退出时，遗留的委托服务器进程未被清理的问题。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3378)

## 5. 功能需求趋势
1.  **Web 自动化与测试能力增强：** 多个 Issue 和 PR 指向同一方向——为 Agent 提供原生的浏览器自动化（Playwright）、Dev Server 就绪检测及 UI 验证工具，弥补纯文本交互在 Web 开发中的不足。
2.  **安全性与可靠性优先：** v0.8.64 显著增加了安全加固、编辑前读取守卫（Read-before-edit）及自动审查机制，反映出社区对 Agent 自主执行代码的安全性高度关注。
3.  **上下文管理与长会话优化：** 自动上下文压缩（Auto-compaction）和会话历史完整性修复成为高频需求，旨在解决长对话中的性能瓶颈和状态丢失问题。
4.  **定制化与扩展性：** 用户自定义 Subagent 人格、第三方模型（如千帆、MiniMax）支持及企业微信集成，显示用户希望 TUI 不仅仅是一个聊天窗口，而是可扩展的工作流中心。

## 6. 开发者关注点
*   **Agent 行为的可控性：** 开发者对模型“过度热心”或“擅自行动”（如 Issue #3275）表示担忧，强调需要明确的确认机制和更严格的权限边界。
*   **环境兼容性：** Git Worktree 沙箱限制（Issue #3355）和终端宽度适配（PR #3371）表明，TUI 需要在复杂的现代开发环境（多仓库、小屏幕、远程连接）中保持稳健。
*   **状态栏 UX 噪音：** 频繁的超时提示被视为干扰项（Issue #3189/PR #3375），用户倾向于简洁、仅在必要时显示的诊断信息。
*   **CI/CD 集成：** 内部构建流程的稳定性（Issue #3369）直接影响发布节奏，维护者需确保自动化测试和发布脚本的幂等性。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*