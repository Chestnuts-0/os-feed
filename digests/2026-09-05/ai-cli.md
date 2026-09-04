# AI CLI 工具社区动态日报 2026-09-05

> 生成时间: 2026-09-04 18:24 UTC | 覆盖工具: 9 个

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



---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止日期：** 2026-09-05

---

## 1. 热门 Skills 排行
基于 Issues 讨论热度与 PR 提交活跃度，以下是社区关注度最高的 Skills：

| 排名 | Skill 名称 | 功能简介 | 状态 | 热点讨论 |
|------|------------|----------|------|----------|
| **1** | **skill-creator** | 生成、验证与优化 Claude Skills 的核心工具 | 🔴 Open | **Bug 爆发期**。Issue #556 指出 `run_eval.py` 触发率始终为 0%，导致描述优化循环失效。PR #1298, #1099, #1050 连续修复 Windows 兼容性、子进程读取、YAML 解析等底层问题，是当前最紧急的技术债。 |
| **2** | **document-typography** | 文档排版质量控制（解决孤行、寡行、页眉错位等 AI 生成文档痛点） | 🔴 Open | Issue #492 提出的“信任边界滥用”问题虽主要针对命名空间，但侧面反映了社区对**规范化文档生成**的强烈需求。PR #514 直接针对此痛点，旨在消除 AI 生成文档的常见排版缺陷。 |
| **3** | **scnet-hpc** | 通过 Profile SSH 与 Slurm 工作流操作 SCNet 高性能计算集群 | 🔴 Open | 针对高性能计算场景的垂直领域 Skill。PR #1615 涵盖了连接配置、作业生成、资源管理等全栈功能，填补了 HPC 场景的技能空白。 |
| **4** | **Hivemind** | 零成本多智能体编排 Skill，将机械性任务委托给开源模型 Worker | 🔴 Open | **架构创新**。PR #1628 提出一种资源优化策略：昂贵模型负责规划与审查，免费模型负责执行，旨在解决大模型上下文窗口稀缺问题。属于“规划型 Agent”架构的新尝试。 |
| **5** | **self-audit** | 交付前的机械文件校验 + 四维推理质量门禁 (v1.3.0) | 🔴 Open | PR #1367 提供了一套通用的质量门禁方案，优先检查文件存在性，再进行推理校验。Issue #1385 提出的“三阶段质量门禁”提案与其理念高度契合，代表了社区对**AI 输出可靠性**的终极追求。 |
| **6** | **testing-patterns** | 全栈测试技能，涵盖单元测试、组件测试及测试哲学 | 🔴 Open | PR #723 强调“测试 Trophy 模型”与“AAA 模式”，试图解决开发者“写测试难、写对测试更难”的痛点，属于**开发效率提升**类工具。 |

---

## 2. 社区需求趋势
从 50 条 Issues 中提炼出社区最期待的新 Skill 方向：

1.  **企业级集成与治理**
    *   **Org-wide sharing** (Issue #228)：企业内部技能共享机制缺失，急需类似私有 Skill 库的解决方案。
    *   **Security & Trust** (Issue #492)：社区技能滥用 `anthropic/` 命名空间，导致信任边界模糊，急需官方 Namespace 策略与审计工具。

2.  **Agent 系统与安全治理**
    *   **Agent Governance** (Issue #412)：针对 AI Agent 系统的安全模式、策略执行与审计追踪。
    *   **Reasoning Quality Gate** (Issue #1385)：贯穿全生命周期的质量门禁管道（校准 → 逆向审查 → 验证）。

3.  **高性能计算 (HPC) 场景**
    *   **Cluster Orchestration** (Issue #1329, PR #1615)：针对 Slurm、SSH 等复杂 HPC 工作流的自动化技能。

4.  **文档与格式标准化**
    *   **Document Typo Control** (Issue #189, PR #514)：解决 AI 生成文档的排版一致性、格式兼容性问题。

5.  **MCP (Model Context Protocol) 工具链**
    *   **Exposing Skills as MCPs** (Issue #16)：将 Skills 封装为标准 MCP，便于嵌入其他开发环境。
    *   **MCP Builder Evaluation** (Issue #1390)：解决 MCP 服务器集成中的工具调用评估失效问题。

---

## 3. 高潜力待合并 Skills
这些 PR 评论活跃（或状态为 Open 且时间较新），显示出社区强烈的采纳意愿：

1.  **#1298 [skill-creator]** - 修复 `run_eval.py` 回报率 0% 及 Windows 兼容性问题。
    *   *潜力*：修复 skill-creator 的核心循环，将直接激活整个社区对 Skill 自动化优化的讨论。
2.  **#1615 [scnet-hpc]** - 新增 SCNet HPC 集群操作技能。
    *   *潜力*：填补垂直领域空白，属于高技术门槛的实用工具。
3.  **#1628 [Hivemind]** - 零成本多智能体编排。
    *   *潜力*：架构创新，可能引发关于 Agent 模型分工的新一轮讨论。
4.  **#1367 [self-audit]** - 机械验证 + 四维推理质量门禁。
    *   *潜力*：对应 Issue #1385 的提案，可能成为未来“质量保证”类 Skills 的标准模板。
5.  **#568 [servicenow]** - ServiceNow 平台全栈技能。
    *   *潜力*：覆盖 ITSM/ITOM 等企业级流程，长期来看需求稳定。

---

## 4. Skills 生态洞察
**当前社区最集中的诉求：**
> **从“功能实现”转向“质量保障与治理”。**

随着 Skills 数量的爆炸式增长（Issue #189 提及插件安装导致重复），社区不再仅仅关注“能否实现某个功能”，而是开始关注：
1.  **技能质量评估**（Quality Analyzer, Self-Audit）；
2.  **信任与安全边界**（Namespace 命名、权限控制）；
3.  **标准化与可复用性**（MCP 协议、Org-wide Sharing）。

**总结：** Skills 生态正从“工具箱”阶段迈向“企业级协作平台”阶段，核心矛盾已从“如何写 Skill”转变为“如何保证 Skill 的质量与安全”。

---

# Claude Code 社区动态日报
**日期**: 2026-09-05  
**分析范围**: anthropics/claude-code (过去24小时)

---

## 1. 今日速览

**v2.1.260 版本发布**，带来了全新的 `/diff` 全屏差异面板，可直接在对话中查看未提交更改，并改进了 `/cost` 命令中的缓存丢失提示。与此同时，社区关注度最高的仍是**账号权限与桌面应用稳定性问题**，Windows 平台下的进程锁死、窗口置顶、以及 macOS 上的功能异常持续引发大量反馈。

---

## 2. 版本发布

### v2.1.260 (2026-09-04)
**新增功能**:
- **Diff 面板**: 在全屏模式下新增差异面板，通过 `/diff` 命令切换，实时展示 Claude 编辑时的未提交更改
- **成本分析增强**: 在 `/cost` 命令中添加了提示词缓存未命中（prompt-cache miss）的可能原因（如工具定义变更、系统提示更新或空闲超时 TTL）

---

## 3. 社区热点 Issues

### 🔴 权限与账号问题 (高关注度)
**#5088 - Claude Account Disabled After Payment for Claude Code Max 5x Plan**
- **评论数**: 184 | **点赞**: 61
- **重要性**: 影响付费用户核心权益，涉及支付后账号被禁的严重问题
- **摘要**: 用户在 8 月 2 日续费 Max 5x 计划后，立即无法访问 Claude Code 和 Claude.ai，并持续收到错误提示

### 🔴 Windows 桌面应用稳定性 (高关注度)
**#42776 - Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock**
- **评论数**: 157 | **点赞**: 73
- **重要性**: 阻断 Windows 用户日常使用，属于进程残留导致的典型锁死问题
- **摘要**: Windows 桌面应用无法重启，因存在孤儿进程文件锁，仅通过注销或重启系统可恢复

**#85891 - Claude Desktop (Windows 11): main window stays always-on-top of other applications**
- **评论数**: 86 | **点赞**: 177
- **重要性**: 严重影响多任务处理体验，UI 行为异常
- **摘要**: Claude Desktop 窗口始终置顶，即使其他窗口已聚焦，且无设置可关闭此行为

**#53247 - Claude Desktop fails to launch on Windows — orphaned Silo / Job Object after app crash**
- **评论数**: 58 | **点赞**: 26
- **摘要**: 应用崩溃后留下孤立 Job Object，导致启动失败 (HRESULT 0x80070020)

### 🟢 功能增强与架构
**#91870 - Function Hooks - make plugins 10x more powerful**
- **评论数**: 91 | **点赞**: 56
- **重要性**: 提供深层插件能力，引入类似 Express/Koa 的注册顺序控制模型
- **摘要**: 通过参数化 `$` 对象的副作用跟踪，实现安全的深度插件修改

**#91188 - Feature request: make the auto-memory MEMORY.md compaction reminder threshold configurable**
- **评论数**: 17 | **点赞**: 0
- **重要性**: 提升自动记忆功能的可配置性
- **摘要**: 当前 `MEMORY.md` 加载阈值硬编码，用户希望可配置或至少可单独抑制

### 🟡 平台特定 Bug
**#30873 - Claude in Chrome extension: Side panel closes when switching tabs in Edge on macOS**
- **评论数**: 34 | **点赞**: 38
- **重要性**: 跨浏览器扩展兼容性问题

**#54750 - Bug: Claude Code current session limit reaches 100% despite low visible local session usage**
- **评论数**: 20 | **点赞**: 12
- **摘要**: 会话限制显示异常，实际使用量低却显示 100% 已用

---

## 4. 重要 PR 进展

**#61691 - Add diagnostic script for GitHub connector showing 'Connected' but no tools**
- **状态**: Open
- **摘要**: 为 Windows 用户添加 PowerShell 诊断/修复脚本，解决 GitHub MCP 连接器显示"已连接"但无工具可用的问题

**#87079 - fix(security-guidance): make ** glob patterns match zero-depth paths**
- **状态**: Open
- **摘要**: 修复安全模式下的 glob 匹配错误，`**/*.ts` 现在正确匹配顶层文件（之前被 `/` 阻断）

**#91894 - Update /frontend-design SKILL.md**
- **状态**: Closed
- **摘要**: 更新前端设计技能文档

**#79150 - docs: align code-review README with the current validation-based command**
- **状态**: Open
- **摘要**: 同步代码审查文档，移除已废弃的 git blame 历史代理和 0-100 分数阈值说明

---

## 5. 功能需求趋势

根据 Issue 分析，社区关注点主要集中在以下方向：

1. **IDE 集成体验优化**
   - VS Code 会话管理（固定、分组、绝对日期显示）
   - 会话生命周期状态（进行中、已完成）
   
2. **桌面应用稳定性与 UI**
   - Windows 进程锁死与孤儿对象清理
   - 窗口置顶行为修复
   - macOS 多浏览器兼容性

3. **插件与扩展能力**
   - Function Hooks 深度插件系统
   - MCP 工具连接稳定性

4. **权限与安全**
   - 账号授权循环问题修复
   - 安全过滤器误报优化
   - 付费计划续费异常

---

## 6. 开发者关注点

1. **Windows 平台是痛点集中区**
   - 进程残留导致应用无法启动/重启
   - AppX 容器与 Job Object 管理问题
   - 窗口置顶与 UI 交互异常

2. **模型行为与安全机制**
   - 账号被禁的支付后问题（影响付费用户）
   - 安全过滤器误报
   - 模型对"不可能"任务的过度拒绝

3. **跨平台与扩展兼容性**
   - macOS 上 Chrome/Edge 扩展行为差异
   - MCP 工具连接状态与工具可用性不一致
   - Cowork 云会话的 GitHub 仓库访问问题

4. **成本与资源管理**
   - 会话限制显示不准确
   - 提示词缓存未命中原因提示不够明确

---

**数据截止**: 2026-09-04  
**数据来源**: GitHub Issues & Releases

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-09-05**

---

## 1. 今日速览

过去24小时Codex仓库活跃度高，共发布4个版本（含2个alpha预览）并处理了50条Issue。Windows平台稳定性问题持续成为社区焦点，涉及WSL集成、DWM渲染、远程桌面等多个维度；同时GPT-6-Astra模型配置通过API正式支持，并已扩展至Amazon Bedrock。

---

## 2. 版本发布

### rust-v0.153.2（Bug修复）
修正了GPT-6-Astra Fast tier的描述文本（"2x speed, increased usage"），不影响实际运行逻辑。
- 链接：https://github.com/openai/codex/compare/rust-v0.153.1...rust-v0.153.2

### rust-v0.153.1（新功能）
新增通过API配置GPT-6-Astra的能力，无需修改默认模型或出现在模型选择器中。
- 链接：https://github.com/openai/codex/compare/rust-v0.153.0...rust-v0.153.1

### rust-v0.154.0-alpha.3 / alpha.2（预览版）
0.154.0系列持续迭代，预计将引入更多功能改进。
- 链接：https://github.com/openai/codex/releases

---

## 3. 社区热点 Issues（精选10条）

| 排名 | Issue | 摘要 | 热度 |
|------|-------|------|------|
| 1 | #41290 | Windows/WSL下项目创建与删除在切换环境后失败 | 32评论, 24👍 |
| 2 | #39954 | Windows + Android远程控制成功连接后陷入重连循环 | 25评论 |
| 3 | #32297 | 内置图像生成自7月更新后持续报网络错误 | 24评论, 9👍 |
| 4 | #39989 | Windows桌面已删除对话仍显示在最近列表中 | 19评论 |
| 5 | #40858 | 原生子代理忽略显式model_provider覆盖配置 | 13评论, 7👍 |
| 6 | #40531 | Windows 11下桌面应用损坏DWM合成器状态，导致系统级卡顿 | 10评论 |
| 7 | #24185 | macOS上桌面应用持续高CPU/GPU负载并导致发热 | 10评论 |
| 8 | #41501 | Windows宠物覆盖层首次拖拽后丢失点击区域 | 9评论 |
| 9 | #19242 | Credits显示正常后突然消失归零，无使用记录 | 8评论 |
| 10 | #42258 | macOS Control+Space快捷键与输入源切换冲突，触发宠物功能 | 3评论, 9👍 |

**重点解读**：
- **#41290** 是Windows/WSL用户最关注的稳定性问题，社区反馈强烈（24赞），影响多用户工作流。
- **#40531** 和 **#24185** 分别反映Windows和macOS平台的性能/资源消耗问题，需关注后续系统层优化。
- **#42258** 虽评论数不多但点赞率高（9赞），反映出macOS用户对小功能冲突的敏感度。

---

## 4. 重要 PR 进展（精选10条）

| PR | 摘要 | 状态 |
|----|------|------|
| #42809 | [0.153热修复] 更新GPT-6-Astra异步提问引导说明，明确工具限制 | ✅ 已合入 |
| #42805 | [0.153热修复] 将GPT-6-Astra纳入Amazon Bedrock模型目录 | ✅ 已合入 |
| #42819 | Guardian批准路由与异步评分解耦，确保评分服务故障时审批仍可用 | ✅ 已合入 |
| #42807 | 新增请求级Guardian审批决策钩子，支持同步/异步/用户介入三种模式 | ✅ 已合入 |
| #42801 | Windows沙箱命令运行程序保持后台隐藏，消除控制台窗口干扰 | ✅ 已合入 |
| #42798 | 用户报告对话框新增数据使用披露说明，提升透明度 | ✅ 已合入 |
| #42821 | `codex doctor`诊断工具新增托管文件系统策略报告 | 🔄 进行中 |
| #31471 | 提取Apps缓存逻辑至ConnectorRuntimeManager，优化多账户隔离 | 🔄 进行中 |
| #42770 | 修复保留线程上下文中接受顺序错乱问题 | ✅ 已合入 |
| #42758 | Guardian审批流程新增响应票据（ticket）传递机制 | ✅ 已合入 |

---

## 5. 功能需求趋势

从Issue和PR中可观察到以下社区关注方向：

1. **多平台稳定性优先**：Windows（WSL集成、DWM渲染、沙箱隔离）和macOS（性能、快捷键冲突）的平台适配问题是当前最大痛点。
2. **子代理/多代理协作**：多个Issue涉及subagent配置、模型覆盖、加密输出解密等问题，反映出多代理工作流的需求正在增长。
3. **安全审批系统完善**：Guardian审批机制持续迭代，聚焦于异步评分解耦、请求级决策、票据传递等细节。
4. **远程桌面与移动端控制**：Windows + Android远程控制的重连循环问题表明跨设备协作场景需求明确。
5. **可观测性与诊断工具**：`codex doctor`扩展和报告系统优化显示社区对调试和诊断能力的需求。

---

## 6. 开发者关注点

**高频痛点**：
- **Windows WSL环境适配**：项目创建/删除、会话恢复、sandbox设置等多项问题集中爆发，WSL集成仍是Windows用户的核心障碍。
- **加密工具输出解密失败**：多个Issue（#33267、#36662）报告"Encrypted function output content could not be decrypted"错误，影响子代理通信。
- **多账户/会话状态管理**：历史会话丢失、最近列表残留、Thread ID幂等性等需求表明会话状态管理亟待完善。
- **系统资源占用**：macOS和Windows均存在持续高CPU/GPU负载问题，影响用户体验和硬件发热。
- **GPT-6-Astra模型支持**：新功能快速迭代（API配置、Bedrock目录、异步提问引导），开发者需要适配新模型的配置和限制。

---

*数据来源：github.com/openai/codex | 统计周期：2026-09-04 ~ 2026-09-05*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-09-05)

---

### 1. 今日速览

过去 24 小时内，GitHub Copilot CLI 发布了 **v1.0.83** 及 **v1.0.83-5** 版本，重点更新包括 Windows 11 任务栏悬停卡片集成、自定义 Agent 模型回退策略以及 macOS/Linux 沙箱安全增强。社区关注焦点高度集中在 **Token 上下文瘦身**、**长会话内存溢出 (OOM) 崩溃**、**BYOK 模式下的 Prompt Caching 失效问题**，以及对 Custom Agent 粒度化控制（如推理强度控制与模型池定制）的强烈需求。

---

### 2. 版本发布

#### [v1.0.83 & v1.0.83-5] - 2026-09-04
- **Windows 11 任务栏状态集成**：运行中的 Copilot 会话支持在 Win11 任务栏图标悬停时显示 Live 状态卡片。
- **自定义 Agent 模型回退机制**：`.agent.md` 中的 `model` 字段支持配置模型优先级列表（顺序尝试直至可用），并提供 `model-policy: required` 控制选项。
- **MCP 协议与 OAuth 改进**：新增 CIMD (Client ID Metadata Document) 支持，用于 MCP OAuth 登录。
- **沙箱网络隔离增强**：在 macOS/Linux 上，沙箱化命令禁止访问本机服务；macOS 下进一步阻止命令访问 `127.0.0.1`，提升本地测试安全性。

---

### 3. 社区热点 Issues

1. **[#2904] 自定义 Agent YAML 支持单独配置推理强度 (Reasoning Effort)**
   - **为什么重要**：目前推理强度只能全局设置（如 `--effort=LEVEL`），无法针对特定 Agent 定制，限制了高难度任务 Agent 的表现。
   - **社区反应**：获得 23👍 和 8 条讨论，是当前最受关注的 Agent 配置需求之一。[查看 Issue #2904](https://github.com/github/copilot-cli/issues/2904)

2. **[#2627] 系统提示词 (System Prompt) 瘦身与 Token 开销配置**
   - **为什么重要**：CLI 启动即占用 ~20.5k tokens 的固化系统提示词，在 200k 上下文窗口中占用了近 10% 空间，严重挤占有效上下文。
   - **社区反应**：高票关注 (19👍)，用户呼吁精简默认 Prompt 并提供自定义裁剪选项。[查看 Issue #2627](https://github.com/github/copilot-cli/issues/2627)

3. **[#4218] 支持自定义 Auto 模式下的可选模型池 (Model Pool)**
   - **为什么重要**：Auto 模式会从用户订阅可用的所有模型中自动挑选，导致成本和响应行为难以预测。
   - **社区反应**：获得 13👍，开发者希望限制 Auto 模式仅在指定的成本/性能阈值模型列表中挑选。[查看 Issue #4218](https://github.com/github/copilot-cli/issues/4218)

4. **[#232] 增加全局 CLI 参数 `--system-prompt`**
   - **为什么重要**：除项目级指令文件外，缺乏在命令行启动时直接注入全局系统指令的机制。
   - **社区反应**：长期积累 10👍，对于自动化脚本和 CI/CD 场景极为重要。[查看 Issue #232](https://github.com/github/copilot-cli/issues/232)

5. **[#1688] 在 `config.json` 中增加可配置的上下文自动压缩阈值**
   - **为什么重要**：使用 Claude Opus 4.6 等大模型时，上下文达到 45-60% 即出现延迟暴涨，而系统默认压缩触发点过于滞后。
   - **社区反应**：5👍，高级开发者对控制 Agent 上下文生命周期的需求强烈。[查看 Issue #1688](https://github.com/github/copilot-cli/issues/1688)

6. **[#4699] / [#4725] 长会话 `--resume` 频繁导致 V8 堆内存溢出崩溃 (OOM)**
   - **为什么重要**：长会话恢复执行时易在 4GB 堆内存限制处发生 `JavaScript heap out of memory` 崩溃，且转储文件会污染用户当前工作目录 (`cwd`)。
   - **社区反应**：多名开发者反馈在密集使用中频繁复现，严重影响稳定性。[查看 Issue #4699](https://github.com/github/copilot-cli/issues/4699) | [查看 Issue #4725](https://github.com/github/copilot-cli/issues/4725)

7. **[#4720] Bug: 1.0.82 BYOK 模式隐式失效 Prompt Caching (导致成本暴增 5 倍)**
   - **为什么重要**：BYOK (自带 Key) 模式发送请求未携带 prompt-cache 声明，导致 `cached_tokens=0`，大幅增加了 API 消耗成本。
   - **社区反应**：新版本出现的严重成本回归 issue，备受自备 Key 开发者关注。[查看 Issue #4720](https://github.com/github/copilot-cli/issues/4720)

8. **[#4537] ACP 模式严重安全回归：工具调用未经授权自动批准**
   - **为什么重要**：在 `--acp` 模式下，Agent 不再发送 `session/request_permission`，导致 Shell 指令与文件修改无需确认即静默执行。
   - **社区反应**：涉及命令行执行安全的严重缺陷，社区正在警惕追踪。[查看 Issue #4537](https://github.com/github/copilot-cli/issues/4537)

9. **[#4728] 自动更新机制覆盖 `copilot.exe` 破坏桌面端绑定版本**
   - **为什么重要**：终端运行 `copilot` 自动更新后，会覆写 Copilot Desktop App 绑定的 CLI 二进制，导致桌面端会话连接全部报废。
   - **社区反应**：直接影响桌面端与 CLI 混合使用用户的稳定性。[查看 Issue #4728](https://github.com/github/copilot-cli/issues/4728)

10. **[#4715] 企业级需求：允许禁用/隐藏内置的 Agent 插件市场**
    - **为什么重要**：内置市场始终展示且无法移除，阻碍了企业内部搭建统一私有 Agent 插件市场的合规推行。
    - **社区反应**：企业架构师提出的典型合规与管控诉求。[查看 Issue #4715](https://github.com/github/copilot-cli/issues/4715)

---

### 4. 重要 PR 进展

*过去 24 小时内社区 Pull Request 活动较少：*
- **[#3771] Initial project setup**
  - **内容**：项目基础配置初始化 PR。[查看 PR #3771](https://github.com/github/copilot-cli/pull/3771)

---

### 5. 功能需求趋势

从最新的 Issues 可以总结出以下三大功能进化趋势：

1. **更精细的 Agent 控制权限 (Granular Agent Control)**
   - 开发者不再满足于统一的 Agent 表现，要求对 Agent 的 **Reasoning Effort（推理努力程度）**、**系统提示词（System Prompt）** 及 **模型备选链（Model Fallback List）** 进行独立且明确的配置文件级定义。
2. **上下文与 Token 成本极致优化 (Context & Token Economy)**
   - 高额系统提示词占用、 Prompt Caching 失效、以及缺少灵活的自动压缩阈值（如对齐 Prompt Cache 5 分钟 TTL 的 Idle 压缩 [#4724]），表明开发者对 Token 使用效率和响应延迟越发敏感。
3. **企业级可管控性与私有化支持 (Enterprise Governance)**
   - 包含屏蔽公共 Marketplace、集成私有 Agent 市场、针对多 Git 仓库（不同默认分支）的 Workspace 会话隔离等企业落地场景需求上升。

---

### 

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

###** Code 代码日报

---

**** 2速览**

在过去24小时内，，`kiDmD Code CLI社区主要聚焦问题修复且无新版本发布。值得一提的是，一个与使用过程紧密相关的问题得到了解决；这让开发者能更流畅地使用终端。同时D

D - 版本发布

- 无新版本发布。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-09-05
**数据来源：** [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. 今日速览
OpenCode 在过去24小时发布了 v1.18.28 版本，主要修复了账户设备认证和桌面图标可见性的问题。社区活跃度极高，目前有超过 50 个 Issue 正在讨论中，主要集中在 **内存管理**、**新布局 UI 交互** 以及 **SSE 流媒体连接稳定性** 上，其中关于 Agent 任务自动执行（权限自动接受）的反馈尤为强烈。

---

## 2. 版本发布
**v1.18.28 (2026-09-04)**

*   **Core (核心改进):**
    *   在发送请求时将 Session ID 作为 GitHub Copilot 的交互头传递，以提升跨会话的请求追踪能力。
*   **Desktop (桌面端修复):**
    *   修复了使用桌面客户端 ID 进行 OpenCode 账户设备认证的问题。
    *   增大了“在应用中打开”图标的尺寸，提升视觉可见性。

---

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] Memory Megathread (Memory Megathread)**
    *   **链接:** [anomalyco/opencode Issue #20695](https://github.com/anomalyco/opencode/issues/20695)
    *   **热度:** 139 评论, 108 👍
    *   **摘要:** 社区正在集中收集内存泄漏相关的堆快照数据。这是一个长期存在的痛点，开发者正在协作排查高频会话下的内存占用问题。

2.  **[OPEN] Auto-discover models from OpenAI-compatible provider endpoints**
    *   **链接:** [anomalyco/opencode Issue #6231](https://github.com/anomalyco/opencode/issues/6231)
    *   **热度:** 52 评论, 228 👍
    *   **摘要:** 用户反馈在配置本地模型提供商（如 LM Studio, Ollama）时，手动配置模型列表既繁琐又容易出错。社区强烈建议实现自动发现模型的功能。

3.  **[OPEN] High CPU usage in newer versions of OpenCode**
    *   **链接:** [anomalyco/opencode Issue #30086](https://github.com/anomalyco/opencode/issues/30086)
    *   **热度:** 50 评论, 26 👍
    *   **摘要:** 自近期更新后，CPU 占用率飙升，导致多会话并发时系统卡顿。这影响了用户同时运行多个 OpenCode 实例的能力。

4.  **[OPEN] [Web UI] "Auto-accept permissions" button is disabled when "New layout and design" is enabled.**
    *   **链接:** [anomalyco/opencode Issue #31137](https://github.com/anomalyco/opencode/issues/31137)
    *   **热度:** 8 评论, 8 👍
    *   **摘要:** 在新布局模式下，任务执行所需的“自动接受权限”按钮被禁用，导致 Agent 无法自动执行任务，必须人工干预。

5.  **[OPEN] [2.0] Agent loops stalls randomly silently**
    *   **链接:** [anomalyco/opencode Issue #46310](https://github.com/anomalyco/opencode/issues/46310)
    *   **热度:** 7 评论
    *   **摘要:** 在使用 GLM-5.3-Flash 等模型时，Agent 循环有时会陷入永久的“工作”状态，停留在工具调用步骤，导致会话卡死。

6.  **[OPEN] [Bug] MiniMax-M3 (reasoning model) silently finishes stop**
    *   **链接:** [anomalyco/opencode Issue #43029](https://github.com/anomalyco/opencode/issues/43029)
    *   **热度:** 2 评论
    *   **摘要:** 推理模型 MiniMax-M3 在 OpenCode 中经常静默停止，不产生任何文本或工具输出，影响复杂任务的推理能力。

7.  **[OPEN] Requests ending with a model turn are not supported (Gemini API)**
    *   **链接:** [anomalyco/opencode Issue #47034](https://github.com/anomalyco/opencode/issues/47034)
    *   **热度:** 4 评论, 1 👍
    *   **摘要:** 使用 Google Gemini API 时，偶尔会遇到 `INVALID_ARGUMENT` 错误，提示“请求结束时不能是模型回合”。

8.  **[OPEN] Limit Exceeded error (Zen Free Tier)**
    *   **链接:** [anomalyco/opencode Issue #47318](https://github.com/anomalyco/opencode/issues/47318)
    *   **热度:** 4 评论
    *   **摘要:** 免费套餐额度显示异常，用户刚使用不到 30% 就提示超出限制，且重试时间极长，影响免费用户使用体验。

9.  **[OPEN] Shell tool never returns when a command leaves a background process holding its stdio**
    *   **链接:** [anomalyco/opencode Issue #47350](https://github.com/anomalyco/opencode/issues/47350)
    *   **热度:** 3 评论
    *   **摘要:** Shell 工具无法正确检测后台进程的退出状态，导致依赖后台进程的命令永远挂起。

10. **[OPEN] Desktop v1.18.3 — "Auto-accept permissions" settings toggle permanently disabled**
    *   **链接:** [anomalyco/opencode Issue #37617](https://github.com/anomalyco/opencode/issues/37617)
    *   **热度:** 3 评论
    *   **摘要:** 旧版本中的权限设置开关在 TUI 中永久被禁用（鼠标样式为 not-allowed），尽管底层功能正常，但 UI 交互存在严重 Bug。

---

## 4. 重要 PR 进展 (Top 10)

1.  **[contributor] feat(tui): render diffs in plugin panel slots**
    *   **链接:** [anomalyco/opencode PR #47152](https://github.com/anomalyco/opencode/pull/47152)
    *   **内容:** 将 TUI 插件面板的渲染逻辑从单体拆分为 6 个部分，旨在提升代码可维护性和可测试性。

2.  **[contributor] feat(tui): add plugin-owned session panels**
    *   **链接:** [anomalyco/opencode PR #47150](https://github.com/anomalyco/opencode/pull/47150)
    *   **内容:** 增强插件能力，允许插件拥有自己的会话面板，为未来的高级插件生态奠定基础。

3.  **[contributor] feat(ai): support freeform tool representations**
    *   **链接:** [anomalyco/opencode PR #46609](https://github.com/anomalyco/opencode/pull/46609)
    *   **内容:** 增加了对自由形式工具表示的支持，优化了流式传输和历史记录的规范化处理。

4.  **[needs:compliance] feat(opencode): discover vLLM models**
    *   **链接:** [anomalyco/opencode PR #47346](https://github.com/anomalyco/opencode/pull/47346)
    *   **内容:** 将 vLLM 模型发现功能移植到 `dev` 分支，用户现在可以通过配置轻松连接本地 vLLM 服务。

5.  **[contributor] fix(core): expose inline media source paths**
    *   **链接:** [anomalyco/opencode PR #46839](https://github.com/anomalyco/opencode/pull/46839)
    *   **内容:** 修复了桌面端拖入的媒体文件路径显示问题，确保绝对路径能被 Agent 正确识别。

6.  **[contributor] fix: echo working directory in shell tool output**
    *   **链接:** [anomalyco/opencode PR #47311](https://github.com/anomalyco/opencode/pull/47311)
    *   **内容:** 修复 Shell 工具在每次调用时重置工作目录的机制，确保命令能正确执行。

7.  **[contributor] fix(session): stop retrying free and Go usage quotas**
    *   **链接:** [anomalyco/opencode PR #47339](https://github.com/anomalyco/opencode/pull/47339)
    *   **内容:** 修复了免费套餐额度超限后的无限重试逻辑，提升错误处理体验。

8.  **[contributor] fix(tui): undo pending prompts and active sessions**
    *   **链接:** [anomalyco/opencode PR #47343](https://github.com/anomalyco/opencode/pull/47343)
    *   **内容:** 修复了在 TUI 中进行 `/undo` 操作时的逻辑错误，防止中断正在运行的任务。

9.  **[contributor] fix(core): prioritize compaction over pending steers**
    *   **链接:** [anomalyco/opencode PR #47340](https://github.com/anomalyco/opencode/pull/47340)
    *   **内容:** 修复了响应处理队列中的优先级问题，确保压缩指令能优先于其他指令被处理。

10. **[contributor] fix(console): openai usage normalization and tier threshold config**
    *   **链接:** [anomalyco/opencode PR #47342](https://github.com/anomalyco/opencode/pull/47342)
    *   **内容:** 优化了 OpenAI 使用量的归一化计算，修复了不同层级阈值配置的准确性问题。

---

## 5. 功能需求趋势
从 Issue 数据分析，当前社区最关注的功能方向包括：
*   **本地模型集成与自动发现:** 极高热度 (#6231)，用户希望 OpenCode 能像 OpenAI 官方客户端一样自动读取本地 LLM 提供商的模型列表。
*   **Agent 自动化与权限管理:** 新布局下的“自动接受权限”功能失效 (#31137, #40237)，用户期望 Agent 能在不打扰的情况下自主完成开发任务。
*   **推理模型支持:** 社区正在测试各类推理模型（如 MiniMax-M3, GLM-5.3），希望能更好地处理长链路逻辑任务。

---

## 6. 开发者关注点
*   **性能与稳定性:** CPU 占用过高 (#30086) 和内存泄漏 (#20695) 是影响多会话并发体验的核心痛点。
*   **连接可靠性:** 移动端浏览器切换后台后 SSE 流断连 (#39030) 和 Web UI 的“Failed to fetch”错误 (#27755) 严重阻碍了远程协作。
*   **交互体验:** 新 UI 布局在窄屏设备上的控件重叠问题 (#43295) 以及权限按钮的不可用状态，是当前 UI 改进的重点。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-09-05

## 1. 今日速览

v0.85.0 正式发布，新增 Claude thinking effort 持久化支持；社区围绕 Amazon Bedrock Mantle provider 接入、macOS 高 CPU 占用及会话导出丢失等痛点展开热烈讨论；系统提示词重构（PR #8998）和流式 fork 功能进入开发阶段。

---

## 2. 版本发布

### v0.85.0
- **Claude thinking effort 持久化** — Anthropic transports 支持按轮次保留思考力度（thinking effort），并在签名思考不匹配时安全恢复。详见 [Model Configuration 文档](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论/👍 | 重要性 |
|---|------|------|---------|--------|
| #5363 | 新增 `amazon-bedrock-mantle` provider（OpenAI 兼容 API） | OPEN | 17 / 15 | 🔴 高 — 填补 AWS Bedrock Mantle 模型接入空白 |
| #7730 | macOS 长会话高 CPU 占用（50-110%） | OPEN | 15 / 10 | 🔴 高 — 影响大量 macOS 用户，与上下文长度相关 |
| #8720 | 工具结果为空白字符时永久卡死会话（HTTP 400） | OPEN | 4 / 0 | 🟡 中 — 偶发性 Bug，影响 Windows bash 工具调用 |
| #8684 | `PI_OFFLINE` 静默禁用所有 provider 模型发现 | OPEN | 4 / 0 | 🟡 中 — 文档行为与实际不符，排查困难 |
| #9052 | 全屏模式滚轮速度比常规模式慢 3 倍 | OPEN | 4 / 1 | 🟢 低 — TUI 体验优化 |
| #8896 | `/export HTML` 静默丢弃 `display:false` 的上下文 | OPEN | 4 / 0 | 🟡 中 — 导出功能完整性受损 |
| #8857 | Agent 循环缺少工具调用执行超时 | CLOSED | 3 / 0 | 🟡 中 — 已被标记为 no-action，需用户自行配置 |
| #9073 | JsonlSessionRepo 目录编码碰撞时拒绝会话 ID | CLOSED | 3 / 0 | 🟡 中 — 多租户环境下会话命名冲突问题 |
| #9112 | 恢复长会话时 thinking block 导致 400 错误 | CLOSED | 2 / 0 | 🟡 中 — Anthropic API 限制导致的会话恢复问题 |
| #9105 | `processFileArguments()` 强制 UTF-8 解码破坏二进制文件 | CLOSED | 2 / 0 | 🟡 中 — `@file` 语法和 Read 工具均受影响 |

- [#5363](https://github.com/earendil-works/pi/issues/5363)
- [#7730](https://github.com/earendil-works/pi/issues/7730)
- [#8720](https://github.com/earendil-works/pi/issues/8720)
- [#8684](https://github.com/earendil-works/pi/issues/8684)
- [#9052](https://github.com/earendil-works/pi/issues/9052)
- [#8896](https://github.com/earendil-works/pi/issues/8896)
- [#8857](https://github.com/earendil-works/pi/issues/8857)
- [#9073](https://github.com/earendil-works/pi/issues/9073)
- [#9112](https://github.com/earendil-works/pi/issues/9112)
- [#9105](https://github.com/earendil-works/pi/issues/9105)

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| #8998 | 系统提示词重构 | CLOSED | 支持会话中途动态更新 system prompt 和工具集，不再全量重写，为扩展提供增量更新能力 |
| #9116 | 支持对话中途 system message | OPEN | 系统提示词重构第一层，扩展可在运行时注入/更新 system message |
| #9117 | 将 prompt/工具变更以 system delta 投递 | OPEN | 第二层集成，coding agent 以增量方式推送变更而非覆盖整个 prompt |
| #9152 | 流式 fork（Forks Streaming） | OPEN (DRAFT) | 探索流式会话分支功能，仍在 WIP 阶段 |
| #9135 | 新增 OrcaRouter provider | CLOSED | 作为一等公民接入 OrcaRouter 网关，支持自适应路由和零配置故障转移 |
| #9131 | Durable Object SQLite 会话后端 | CLOSED | 为 Cloudflare Workers 环境提供 SQLite 持久化会话存储 |
| #9149 | 修复 selector 快捷键绑定 | CLOSED | `/model` 和 `/thinking` 选择器改用 `app.models.save` / `app.thinking.save`，替代硬编码 `Ctrl+S` |
| #9138 | macOS 改用 Cmd+V 粘贴剪贴板图片 | CLOSED | 遵循 macOS 平台惯例，保留 `Ctrl+V` 作为兼容回退 |
| #9121 | 可折叠工作流分组（Alt+O 切换） | CLOSED | 将多次工具调用聚合为可折叠的工作过程摘要行，提升信息密度 |
| #8422 | xAI Grok Build 0.1 移除 reasoning effort | CLOSED | 修复 Grok Build 0.1 因不支持 `reasoning.effort` 参数导致 400 错误 |

- [#8998](https://github.com/earendil-works/pi/pull/8998)
- [#9116](https://github.com/earendil-works/pi/pull/9116)
- [#9117](https://github.com/earendil-works/pi/pull/9117)
- [#9152](https://github.com/earendil-works/pi/pull/9152)
- [#9135](https://github.com/earendil-works/pi/pull/9135)
- [#9131](https://github.com/earendil-works/pi/pull/9131)
- [#9149](https://github.com/earendil-works/pi/pull/9149)
- [#9138](https://github.com/earendil-works/pi/pull/9138)
- [#9121](https://github.com/earendil-works/pi/pull/9121)
- [#8422](https://github.com/earendil-works/pi/pull/8422)

---

## 5. 功能需求趋势

| 趋势方向 | 相关 Issue/PR | 说明 |
|----------|--------------|------|
| **多 Provider / 网关集成** | #5363, #9135, #8422 | 社区持续扩展 Bedrock、OrcaRouter、xAI 等第三方模型接入 |
| **会话恢复与持久化** | #9073, #9112, #9131 | 目录编码碰撞、thinking block 修改限制、Durable Object 后端等长期会话管理问题 |
| **TUI 交互体验优化** | #9052, #9149, #9138, #9121 | 滚轮速度、快捷键绑定、剪贴板、折叠分组等细节打磨 |
| **系统提示词动态更新** | #8998, #9116, #9117 | 里程碑式重构，支持会话中途增量更新，为扩展生态奠基 |
| **输出与导出完整性** | #8896, #8720 | `/export` 丢失上下文、空白工具结果导致会话卡死等稳定性问题 |
| **依赖精简** | #9128, #9158, #9140, #9132 | 多个 Issue 报告 `pi-server` 缺失依赖导致 `ERR_MODULE_NOT_FOUND`，反映发布流程需改进 |

---

## 6. 开发者关注点

1. **构建 / 发布流程缺陷**：v0.85.0 发布后集中爆发多个 `@earendil-works/pi-server` 未声明依赖的 Issue（#9158, #9140, #9132, #9156），说明包发布环节缺少完整性校验。

2. **模型兼容性**：xAI Grok Build 0.1 不支持 `reasoningEffort` 参数（#8381）、Anthropic 会话恢复中 thinking block 不可修改（#9112）、Google Vertex 多轮会话 `ECONNRESET`（#3218），反映出多模型适配仍需持续投入。

3. **macOS 性能问题**：#7730 高 CPU 占用问题与上下文长度强相关，是 macOS 用户高频反馈的痛点。

4. **工具执行可靠性**：空白输出导致会话永久卡死（#8720）、工具调用无超时兜底（#8857）表明工具链的容错能力仍需加强。

5. **扩展能力期待**：开发者希望扩展可中途修改 system prompt（#8998 系列）、控制 turn 终止（#7824）、以及精简依赖（#9128），扩展生态潜力受到关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报 (2026-09-05)

## 1. 今日速览
过去 24 小时内，DeepSeek TUI 社区在 **Agent 动态技能演化**、**纯 Rust 编译构建优化** 以及 **推理模型重试配置** 等维度展开了积极讨论。PR 侧主要聚焦于原子 Commit 的依赖排序、后台 Shell 任务状态追溯以及 OpenCode 供应商 Prompt 缓存机制的接入。

---

## 2. 社区热点 Issues

*   **[#5860] [enhancement] 对话中持续自我学习与技能自动演化**
    *   **重要性**：目前 Agent 依赖静态的 `SKILL.md`，无法根据重复解决的问题自动总结经验。提议引入模式识别与自动 Skill 提取机制，使 Agent 具备持续自我提升的能力。
    *   **社区反应**：引发关于如何平衡“自动提取”与“模式准确度”的讨论。
    *   **链接**：[Issue #5860](https://github.com/Hmbown/Codewhale/issues/5860)
*   **[#5872] [enhancement] 提供 `rusty_alloc` 可选 Feature 以替代 `mimalloc`**
    *   **重要性**：目前依赖 `mimalloc` 导致交叉编译需要 C 编译器。引入纯 Rust 实现的 `rusty_alloc` 选项可大幅简化构建流水线和跨平台编译难度。
    *   **社区反应**：对无 C 编译器依赖的构建模式反响积极。
    *   **链接**：[Issue #5872](https://github.com/Hmbown/Codewhale/issues/5872)
*   **[#5871] [bug] To-do 列表历史记录堆积卡片，视觉污染且无法清理**
    *   **重要性**：每次调用 `todo_write` 工具都会在对话 Transcript 中生成永久快照，即使清空列表旧快照依然叠加，破坏了 TUI 交互体验。
    *   **社区反应**：开发者普遍认为该界面卡片堆积问题亟需改进。
    *   **链接**：[Issue #5871](https://github.com/Hmbown/Codewhale/issues/5871)

*(注：过滤掉了 1 条与项目无关的垃圾广告 Issue #5866)*

---

## 3. 重要 PR 进展

*   **[#5870] Fix: 工具链原子 Commit 拆分——按依赖关系对无关联更改进行排序**
    *   **内容**：解决了无关联代码更改在原子提交时的排序问题，引入依赖项检测并拒绝循环依赖，提升 Git 操作工具的可靠性。
    *   **链接**：[PR #5870](https://github.com/Hmbown/Codewhale/pull/5870)
*   **[#5869] fix(shell): 在任务快照中保留后台 Job 的源标识符**
    *   **内容**：为后台 Shell 任务快照及完成事件添加稳定 Identifier，防止同 Session 下多个任务的错误输出与 Tool Card 发生错配。
    *   **链接**：[PR #5869](https://github.com/Hmbown/Codewhale/pull/5869)
*   **[#5868] feat: 为 OpenCode Go/Zen 供应商发送 `x-opencode-session` 请求头**
    *   **内容**：带上稳定的 Session 头信息，以便上游供应商提供 Prompt Caching 优化并准确归因对话流量。
    *   **链接**：[PR #5868](https://github.com/Hmbown/Codewhale/pull/5868)
*   **[#5867] feat(config): 新增 `[reasoning_only]` 配置项支持重试次数自定义**
    *   **内容**：解决推理模型仅返回思考过程而无最终答案时的硬编码重试逻辑，允许用户自定义重试次数与 Prompt 引导词。
    *   **链接**：[PR #5867](https://github.com/Hmbown/Codewhale/pull/5867)

---

## 4. 功能需求趋势

1.  **Agent 自生能力 (Autonomous Agent Evolution)**：从静态规则读取（`SKILL.md`）向基于对话历史的动态经验提取与 Skill 自动构建演化。
2.  **推理模型 (Reasoning Model) 的细粒度控制**：随着 DeepSeek R1 等思考型模型的普及，社区对“仅思考不回答”等边界情况的容错与配置化（如自定义 Reprompt）需求明显增加。
3.  **极致的编译与构建体验**：减少对 C 语言交叉编译工具链的依赖，倾向于全 Rust 替代方案，降低二次开发和多平台部署门槛。

---

## 5. 开发者关注点与痛点

*   **TUI 上下文信息过载 (UI Cluttering)**：频繁调用的工具（如 `todo_write`）会在长对话中留下大量冗余状态卡片，不仅占用视觉空间，也干扰对核心上下文的阅读。
*   **多任务并发下的状态混淆**：在终端并发运行多个后台任务时，输出结果容易跨 Job 串扰，需更严谨的 Session/Job ID 映射机制。
*   **Prompt 缓存与请求成本控制**：开发者十分关注上游 API 的 Prompt Caching 支持（如 Header 传递），希望借此降低长对话上下文的延迟与费用。

</details>

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*