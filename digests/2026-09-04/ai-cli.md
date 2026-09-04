# AI CLI 工具社区动态日报 2026-09-04

> 生成时间: 2026-09-04 15:09 UTC | 覆盖工具: 9 个

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

# Claude Code Skills 社区热点报告 (数据截止 2026-09-04)

## 1. 热门 Skills 排行 (基于 Issue 讨论热度)

### 🔥 **skill-creator** (核心工具链)
- **功能**: AI 驱动的 Skill 自动优化与描述生成工具
- **状态**: Open (持续活跃修复)
- **热点**: 社区集中反馈其 **Windows 兼容性** 和 **评估系统缺陷**。Issue #556 和 PR #1298 揭示评估系统因文件读取和触发检测问题导致 recall=0%，影响所有 Skill 优化效果。
- **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298) | [Issue #556](https://github.com/anthropics/skills/issues/556)

### 🎨 **document-typography** (文档质量)
- **功能**: AI 生成文档的排版质量控制（孤儿行、寡妇段、编号对齐）
- **状态**: Open
- **热点**: 这是一个高频痛点，所有 Claude 生成的文档都受排版问题困扰。社区呼声高，旨在提升交付物的专业度。
- **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

### 🏗️ **ServiceNow** (企业级平台)
- **功能**: ServiceNow 平台全栈技能，覆盖 ITSM、ITAM、FSM、SecOps 等八大模块
- **状态**: Open
- **热点**: 针对大型企业 IT 运维场景，填补了 Skills 生态中企业级 PaaS 平台的空白，讨论热度随企业采用率上升。
- **链接**: [PR #568](https://github.com/anthropics/skills/pull/568)

### 🛡️ **skill-security-analyzer** (安全审计)
- **功能**: 新增的元技能，用于评估 Skills 的安全合规性
- **状态**: Open (已加入 Marketplace)
- **热点**: 作为首个安全类元技能，响应了 Issue #492 提出的 "信任边界滥用" 安全担忧，社区开始关注社区 Skill 的安全性。
- **链接**: [PR #83](https://github.com/anthropics/skills/pull/83)

### 🧪 **testing-patterns** (测试工程)
- **功能**: 全栈测试策略，包含 AAA 模式、React 测试库及测试哲学
- **状态**: Open
- **热点**: 解决 "测试什么 vs 不测试什么" 的理论分歧，提供可落地的测试实践指南。
- **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)

---

## 2. 社区需求趋势 (从 Issues 提炼)

| 需求类别 | 典型 Issue | 核心诉求 |
| :--- | :--- | :--- |
| **企业级集成** | #228, #1175 | 需要跨组织、跨平台的 Skill 分享机制（如 SSO、目录共享） |
| **安全合规** | #492, #1385 | Skill 生态的安全审计、信任验证及权限边界控制 |
| **上下文管理** | #1487 | 解决高负载 Skill（如 claude-api）过早耗尽上下文窗口的问题 |
| **平台支持** | #29, #16 | 支持更多底层平台（AWS Bedrock）及将 Skills 暴露为 MCP 协议 |
| **工具链稳定性** | #556, #1099 | 修复 Windows 平台兼容性及评估系统的可靠性 |

---

## 3. 高潜力待合并 Skills (高评论/高关注)

1. **Hivemind: Zero-Cost Multi-Agent Orchestration** (PR #1628)
   - **亮点**: 通过 opencode worker 实现零成本并行工作流，解决昂贵模型上下文瓶颈。
   - **状态**: Open (2026-08-21 更新)
   - **链接**: [PR #1628](https://github.com/anthropics/skills/pull/1628)

2. **scnet-hpc** (PR #1615)
   - **亮点**: 专注 HPC 集群操作，涵盖 SSH、Slurm 工作流及算力调度。
   - **状态**: Open (2026-08-24 更新)
   - **链接**: [PR #1615](https://github.com/anthropics/skills/pull/1615)

3. **self-audit** (PR #1367)
   - **亮点**: 机械文件验证 + 四维度推理质量门禁，适用于任何技术栈。
   - **状态**: Open (2026-07-02 更新)
   - **链接**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：构建企业级信任与协作基础设施。**
>
> 随着社区 Skills 数量激增，社区从早期的"功能创新"（如 Hivemind、ServiceNow）转向"生态治理"（如 #492 安全信任边界、#228 组织级分享），并开始关注底层工具链的稳定性（如 skill-creator 评估系统），以确保 Skills 生态从"玩具属性"向"生产级基础设施"演进。

---

# Claude Code 社区动态日报

**日期**: 2026-09-04  
**分析范围**: anthropics/claude-code  
**分析师**: AI 开发工具技术分析师

---

## 1. 今日速览

Claude Code 发布了 **v2.1.260** 版本，核心更新包括新增全屏模式下的差异面板（`/diff` 命令）和提示缓存未命中原因的详细说明。与此同时，Windows 平台的进程锁死和窗口置顶问题引发大量讨论，社区在跨会话协调、插件钩子系统等高级功能上表现出强烈兴趣。

---

## 2. 版本发布

### **v2.1.260** (2026-09-04)

**核心更新**:
- **新增差异面板**: 在全屏模式下，用户可以通过 `/diff` 命令查看 Claude 编辑时的未提交变更，提供更直观的代码对比体验
- **缓存优化**: `/cost` 命令现在会显示提示缓存未命中的原因（如工具定义变更、系统提示更新或超过 TTL 导致的空闲），帮助用户优化成本
- **性能改进**: 针对缓存机制的透明度优化，减少不必要的 API 调用

---

## 3. 社区热点 Issues

### 🔥 高热度 Bug (Windows 平台)

**#42776: Claude Code Desktop 在 Windows 上无法重启，因孤立进程文件锁死**
- **评论数**: 154 | **点赞**: 73
- **问题**: 用户报告在 Windows 上，Claude Desktop 启动失败，原因是遗留的进程文件锁未被释放，导致应用无法正常重启
- **影响**: 影响大量 Windows 用户的工作流连续性，是当前最严重的阻塞性 Bug

**#85891: Windows 11 窗口始终置顶，无设置可关闭**
- **评论数**: 84 | **点赞**: 174
- **问题**: Claude Desktop 窗口表现得像"置顶窗口"，即使其他应用获得焦点也不会被遮挡
- **社区反应**: 点赞数远超评论数，说明这是一个普遍存在的 UX 痛点

### 🚀 功能增强

**#91870: 函数钩子系统 - 让插件功能强大 10 倍**
- **评论数**: 84 | **点赞**: 51
- **创新点**: 提出通过参数化 `$` 对象和类似 Express/Koa 的注册顺序模型，实现安全的副作用跟踪和插件深度定制
- **意义**: 这是插件系统的一次重大架构升级，可能改变插件生态的发展方向

**#76727: 跨会话协调 - 多独立会话的共享工作树管理**
- **评论数**: 20 | **点赞**: 0
- **问题**: 重度用户运行多个独立会话时缺乏协调机制，目前只能通过 `PreToolUse deny` hook 手动实现
- **需求**: 社区需要原生的跨会话协调功能来提升多任务处理能力

### 🐛 其他重要 Bug

- **#90703 (Linux ARM64)**: Electron 42.10.0 的 `fcntl` 常量错误导致所有私有目录写入失败，会话无法持久化
- **#85663 (Windows)**: 所有安装方法均因 `defines.json` 语法错误而失败，涉及路径解析问题
- **#78733 (Windows)**: 进入工作树后，文件链接点击间歇性失效，UI 基于原始根目录而非实时工作树解析

---

## 4. 重要 PR 进展

### 🔧 安全与诊断

**#61691: GitHub 连接器诊断脚本**
- **内容**: 为 Windows 用户添加 PowerShell 诊断/修复脚本，解决 GitHub MCP 连接器显示"已连接"但无工具可用的问题
- **关联**: 关闭 #61682 及相关 issue 链

**#87079: 安全模式 glob 模式修复**
- **内容**: 修复 `**` glob 模式不匹配零深度路径的问题，防止安全规则静默排除顶级文件
- **风险**: 安全规则失效可能导致文件被意外暴露

### 📚 文档与工具

**#91894: 更新前端设计 SKILL.md**
- **状态**: 已关闭
- **内容**: 同步文档更新

**#79150: 代码审查 README 对齐**
- **内容**: 更新代码审查文档，移除已废弃的验证流程描述，使其与当前命令保持一致

**#89404: 验证脚本健壮性修复**
- **内容**: 修复 `validate-agent.sh` 在遇到警告时过早终止的问题，避免误报有效 Agent
- **根因**: `set -euo pipefail` 的误用导致警告被当作错误处理

---

## 5. 功能需求趋势

### 📊 需求分类统计

| 类别 | 代表 Issue | 关键词 |
|------|-----------|--------|
| **插件系统** | #91870 | Hooks, Plugins, Side-effect tracking |
| **多会话管理** | #76727 | Cross-session, Coordination, Independent sessions |
| **IDE 集成** | #70673, #64062 | VS Code, SCM, Plan panel |
| **跨平台稳定性** | #42776, #85891, #90703 | Windows, Linux ARM64, Installation |
| **性能优化** | #52253 | CPU storm, tree-kill, Bash subprocess |

### 🎯 核心趋势

1. **插件生态深化**: 社区对钩子系统（Hooks）的强烈需求表明用户希望在不修改核心代码的情况下深度定制 Claude Code 行为
2. **工作树管理**: 多会话、多分支环境下的协作需求正在增长，特别是重度开发者群体
3. **跨平台一致性**: Windows 和 Linux ARM64 的稳定性问题集中爆发，反映平台适配仍是重点

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **Windows 进程管理**: 孤立进程锁导致应用无法重启，影响工作流连续性
2. **会话持久化**: Linux ARM64 平台会话无法保存，导致数据丢失
3. **窗口行为**: 置顶窗口破坏桌面应用体验，无用户控制选项

### 🟡 优化机会

1. **插件能力扩展**: 当前插件系统限制较多，开发者希望获得更强大的钩子机制
2. **会话协调**: 多任务场景下缺乏原生协调工具，依赖变通方案
3. **文档同步**: 代码审查等功能的文档未及时更新，造成用户困惑

### 🟢 成功案例

- **v2.1.260 的差异面板**: 体现了对开发者工作流优化的关注，通过 `/diff` 命令提供更清晰的代码变更追踪
- **安全规则修复**: PR #87079 显示团队对安全性的重视，即使修复难度较大也优先处理

---

**数据来源**: [anthropics/claude-code](https://github.com/anthropics/claude-code)  
**生成时间**: 2026-09-04

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-09-04**

---

## 1. 今日速览

OpenAI Codex 在过去24小时内发布了三个版本（含 alpha 预览版），主要更新包括 GPT-6-Astra 模型的 API 支持及描述修正。社区最热门的议题围绕**永久移除 5 小时使用限制**展开（#34035，156 👍），同时 Windows 平台兼容性问题（沙箱、宠物悬浮窗、MCP 工具暴露）持续引发关注。内部安全审查（Guardian）和账户会话管理相关 PR 正在密集合并。

---

## 2. 版本发布

### rust-v0.153.2
- **类型**：Bug Fixes
- **内容**：修正 GPT-6-Astra Fast tier 的描述文本（"2x speed, increased usage"），不影响实际请求行为。
- **链接**：[#42632](https://github.com/openai/codex/issues/42632)

### rust-v0.153.1
- **类型**：New Features
- **内容**：新增通过 API 配置 GPT-6-Astra 模型的支持，无需更改默认模型或显示在模型选择器中。
- **链接**：[#42605](https://github.com/openai/codex/issues/42605)

### rust-v0.154.0-alpha.3 / alpha.2
- **类型**：Alpha 预览版本
- **内容**：持续迭代，暂无详细变更记录。

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 关注原因 |
|---|------|------|----------|
| [#34035](https://github.com/openai/codex/issues/34035) | 永久移除 5 小时使用限制 | 👍 156 / 24 评论 | 社区呼声最高，Plus/Pro/Business 用户期望取消临时解除的限制政策 |
| [#41513](https://github.com/openai/codex/issues/41513) | Windows 宠物点击穿透无法拖拽 | 👍 10 / 22 评论 | 桌面端 Pets 功能在 Windows 上的交互缺陷 |
| [#18918](https://github.com/openai/codex/issues/18918) | Windows 沙箱拒绝 .git 目录 ACL | 👍 6 / 13 评论 | 直接影响 git 操作，Windows 用户高频痛点 |
| [#42243](https://github.com/openai/codex/issues/42243) | 宠物折叠后自动重现 | 👍 14 / 9 评论 | 用户体验问题，macOS 平台 |
| [#13206](https://github.com/openai/codex/issues/13206) | 为 `/plan` 模式添加 `plan_model` 配置 | 👍 14 / 4 评论 | 功能请求，与已有的 `/review` 模式配置对齐 |
| [#32640](https://github.com/openai/codex/issues/32640) | `wait` 工具上限 50s 导致大量 token 消耗 | 👍 1 / 5 评论 | 多智能体场景下的性能与成本问题 |
| [#42182](https://github.com/openai/codex/issues/42182) | 配额感知的前瞻性任务规划 | 👍 0 / 4 评论 | 主动避免任务中途因配额中断 |
| [#36596](https://github.com/openai/codex/issues/36596) | 自主工作被反复终止 | 👍 1 / 8 评论 | 模型行为异常，违反用户明确指令 |
| [#42244](https://github.com/openai/codex/issues/42244) | 显示 agent 启动的 dev server 和后台进程 | 👍 1 / 2 评论 | 功能请求，增强桌面端可观测性 |
| [#40252](https://github.com/openai/codex/issues/40252) | 为 TUI 添加全屏模式 | 👍 2 / 2 评论 | 功能请求，对标 Claude Code 的同名功能 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| [#42781](https://github.com/openai/codex/pull/42781) | 为 exec-server 添加 SigV4 直连传输 | ✅ Closed | 支持远程 exec server 通过 AWS SigV4 认证连接注册表 |
| [#25383](https://github.com/openai/codex/pull/25383) | App-server 账户会话生命周期 | 🔄 Open | 实现桌面端多账户切换的完整会话管理（登录/添加/切换/登出） |
| [#31471](https://github.com/openai/codex/pull/31471) | 提取 Apps 缓存逻辑到 ConnectorRuntimeManager | 🔄 Open | 按账户/用户/工作区隔离运行时上下文，提升缓存管理效率 |
| [#42773](https://github.com/openai/codex/pull/42773) | 避免冷启动配置加载时持有 metadata permit | ✅ Closed | 防止阻塞 unrelated thread 元数据更新和 MCP 请求 |
| [#42770](https://github.com/openai/codex/pull/42770) | 在 retained thread context 中保留接受顺序 | ✅ Closed | 修复持久化后 prompt 顺序错乱导致指令应用错误的问题 |
| [#42762](https://github.com/openai/codex/pull/42762) | 在 guardian thread context 中保留用户指令 | ✅ Closed | 确保压缩/恢复/回滚后仍能获取完整原始指令历史 |
| [#42758](https://github.com/openai/codex/pull/42758) | 向 Guardian reviews 传播 response tickets | ✅ Closed | 为符合条件的后端响应请求并解析 server 签发的 Guardian tickets |
| [#42744](https://github.com/openai/codex/pull/42744) | 遵循模型提供的 Guardian review policies | ✅ Closed | 支持 per-model 的安全审查模式（disabled/synchronous/adaptive） |
| [#42718](https://github.com/openai/codex/pull/42718) | 通过 feature flag 控制统一 exec TTY 支持 | ✅ Closed | 默认开启 `unified_exec_tty`，支持按需在 schema 中启用/禁用 TTY |
| [#42676](https://github.com/openai/codex/pull/42676) | 为 voice host 添加 WebRTC 协商 | ✅ Closed | 支持创建 WebRTC offer/answer，兼容 UDP/TCP candidates |

---

## 5. 功能需求趋势

从社区 Issue 和 PR 中可提炼出以下核心方向：

1. **配额与限制管理**：多个 Issue（#34035、#42182）聚焦于使用限制和配额感知规划，用户期望更灵活、可预测的使用体验。
2. **多账户与会话管理**：PR #25383、#31471 表明官方正在加强桌面端多账户支持，对应社区对账户隔离的需求。
3. **安全审查（Guardian）系统增强**：近日本周多个 PR（#42762、#42758、#42744）密集推进 Guardian 安全审查的能力，包括指令保留、ticket 传播、模型级策略支持。
4. **Windows 平台稳定性**：高频 Issue 集中在 Windows 沙箱、MCP 工具暴露、UI 渲染等问题，是平台兼容性的重点方向。
5. **Plan/Review 模式完善**：#13206 和 #30937 反映用户对 `/plan` 模式配置化和语义定义的需求，对标已有的 `/review` 模式。

---

## 6. 开发者关注点

| 痛点/需求 | 涉及 Issue/PR |
|-----------|--------------|
| **5 小时使用限制**：临时政策希望永久化，影响 Pro/Plus/Business 用户长期任务 | #34035 |
| **Windows 沙箱行为异常**：.git 目录 ACL 拒绝、sandbox-setup.exe 崩溃、MCP 工具未暴露 | #18918、#38162、#42264 |
| **宠物（Pets）功能体验问题**：点击穿透、折叠后重现、用户要求可关闭 | #41513、#42243、#42723 |
| **上下文压缩（Compaction）导致历史丢失**：对话记录异常、任务上下文错乱 | #42311、#42782、#42131 |
| **Token 消耗优化**：`wait` 工具 50s 上限在多智能体场景下造成重复采样和大量 token 浪费 | #32640 |
| **桌面端性能问题**：Renderer 卡死（Go 文件语法回溯、持久化标签页反复卡住） | #40559、#42625 |
| **IntelliSense/IDE 集成**：IDE 扩展的 context 刷新和工具调用稳定性 | #25392 |

---

*数据来源：github.com/openai/codex | 统计时间范围：2026-09-03 00:00 ~ 2026-09-04 23:59 UTC*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-09-04)

> **分析师点评**：今日 Copilot CLI 连续发布了 `v1.0.83-4` 与 `v1.0.83-5` 两个微版本，重点增强了 Windows 11 任务栏体验、MCP OAuth 认证与沙盒网络隔离。社区侧，开发者高度关注上下文 Token 开销优化、BYOK 模式下 Prompt Cache 失效导致的成本暴增、以及长会话内存溢出 (OOM) 等稳定性问题。

---

## 1. 今日速览

过去 24 小时内，GitHub Copilot CLI 发布了两个 Patch 更新，持续完善 MCP 协议支持与安全隔离。社区讨论热度集中在 **Agent 颗粒度控制**（如 Reasoning Effort 和系统提示词剪裁）、**长会话性能与内存管理**（OOM 与恢复卡顿）以及 **BYOK 成本隐患**（缓存未正常生效）。

---

## 2. 版本发布

### [v1.0.83-5](https://github.com/github/copilot-cli/releases/tag/v1.0.83-5)
- **新功能**：Windows 11 任务栏支持显示正在运行的 Copilot 会话，并提供实时悬停状态卡片。
- **优化**：强化 macOS 和 Linux 上的沙盒网络隔离，阻止沙盒命令访问本机运行的服务；macOS 上同时阻止沙盒命令自身在 `127.0.0.1` 启动的 Server 服务。

### [v1.0.83-4](https://github.com/github/copilot-cli/releases/tag/v1.0.83-4)
- **新功能**：为 MCP OAuth 登录添加 Client ID Metadata Document (CIMD) 支持。
- **优化**：默认启动不再弹窗询问“恢复被中断会话”；优化恢复大型会话时的输入框响应速度。
- **修复**：修复沙盒文件工具对开发者工具配置的读取一致性问题。

---

## 3. 社区热点 Issues

1. **[#2904] 自定义 Agent YAML Frontmatter 应支持设置 Reasoning Effort**
   - **领域**：`agents`, `models` | **状态**：OPEN | 👍 23 | 💬 8
   - **说明**：自定义 Agent (`.agent.md`) 目前仅支持固定模型，但无法针对推理模型配置 `reasoning_effort`。开发者希望能在 Agent 层面单独配置，而不是依赖全局 `--effort` 参数。
   - **链接**：[#2904](https://github.com/github/copilot-cli/issues/2904)

2. **[#2627] 功能请求：可配置系统提示词以精简固定 Token 占用**
   - **领域**：`context-memory`, `configuration` | **状态**：OPEN | 👍 19 | 💬 4
   - **说明**：CLI 默认的系统提示词在会话开始前即占用约 20,500 Token（加上工具定义共占用约 30,000 Token），严重挤占上下文空间。开发者诉求提供精剪版或自定义系统提示词能力。
   - **链接**：[#2627](https://github.com/github/copilot-cli/issues/2627)

3. **[#4720] Bug：1.0.82 BYOK 模式静默禁用 Prompt Cache 导致成本暴增 5 倍**
   - **领域**：`triage` | **状态**：OPEN | 👍 0 | 💬 0
   - **说明**：在 BYOK（自带 Key）模式下，1.0.82 版本发送的请求未带 prompt-cache 声明，导致服务商返回 `cached_tokens=0`，每一轮交互都在全量重新计费，造成严重的成本隐患。
   - **链接**：[#4720](https://github.com/github/copilot-cli/issues/4720)

4. **[#4537] ACP 模式重新自动批准工具调用（权限回归缺陷）**
   - **领域**：`permissions` | **状态**：OPEN | 👍 2 | 💬 1
   - **说明**：自 `1.0.81-1` 起，`--acp` 模式下不再触发 `session/request_permission`，Shell 命令与文件修改直接无人值守执行，存在重大安全隐患。
   - **链接**：[#4537](https://github.com/github/copilot-cli/issues/4537)

5. **[#4699] 长会话 `--resume` 时频繁触发 V8 堆内存溢出 (OOM) 崩溃**
   - **领域**：`sessions`, `context-memory` | **状态**：OPEN | 👍 2 | 💬 1
   - **说明**：在恢复长会话时，CLI 容易触及 4GB V8 堆内存上限并直接崩溃（14小时内崩溃3次），同时诊断日志直接写入到了用户当前工作目录，污染了项目空间。
   - **链接**：[#4699](https://github.com/github/copilot-cli/issues/4699)

6. **[#4218] 允许用户自定义 Auto 模式可选的模型池**
   - **领域**：`models` | **状态**：OPEN | 👍 13 | 💬 1
   - **说明**：Auto 模式目前会在套餐允许的所有模型中挑选，用户无法指定限制范围。这导致自动选择的行为与成本不可控，开发者希望能够自定义可供选择的模型列表。
   - **链接**：[#4218](https://github.com/github/copilot-cli/issues/4218)

7. **[#4708] Subagent 无法使用主 Agent 已安装的 Skill**
   - **领域**：`agents`, `plugins` | **状态**：OPEN | 👍 0 | 💬 0
   - **说明**：在 v1.0.82 中，主 Agent 可以识别并使用 `.copilot/installed-plugins` 中的 Skill，但由主 Agent 衍生出的 Subagent 却无法继承和访问这些 Skill。
   - **链接**：[#4708](https://github.com/github/copilot-cli/issues/4708)

8. **[#4721] Canvas 工具调用参数被 CLI 损坏（JSON-RPC 序列化 Bug）**
   - **领域**：`triage` | **状态**：OPEN | 👍 0 | 💬 0
   - **说明**：CLI 在分发工具调用给 Canvas 扩展时，JSON-RPC 参数被拼接了多余的 `}{}` 后缀，导致 `open_canvas` 传递的 JSON 格式非法。
   - **链接**：[#4721](https://github.com/github/copilot-cli/issues/4721)

9. **[#4710] 会话空闲时后台 `copilot-file-search` 线程飙高 CPU 并无限写日志**
   - **领域**：`sessions`, `tools` | **状态**：OPEN | 👍 0 | 💬 0
   - **说明**：在 `copilot --yolo` 会话处于 `idle` 状态时，后台文件检索线程仍然吃满单核 CPU，并在 `~/.copilot/logs` 中无限写入日志挤爆磁盘。
   - **链接**：[#4710](https://github.com/github/copilot-cli/issues/4710)

10. **[#4715] 企业级需求：支持屏蔽内置 Agent 插件市场**
    - **领域**：`enterprise`, `plugins` | **状态**：OPEN | 👍 0 | 💬 0
    - **说明**：企业用户拥有内部统一的 Agent 插件市场，希望策略上可以隐藏/屏蔽官方内置的 `copilot-plugins` 与 `awesome-copilot` 市场。
    - **链接**：[#4715](https://github.com/github/copilot-cli/issues/4715)

---

## 4. 重要 PR 进展

*注：过去 24 小时内 GitHub 仓库公开 PR 变动较少，仅包含 1 项更新。*

- **[#3771] Initial project setup**
  - **状态**：OPEN | **作者**：limenpchuolto112-creator
  - **

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

###**今日速览D

今天的 Kimi Code CLI 社区动态较为平静，无版本发布与 Pull Requests 更新。主要有几个关键问题得到了解决与讨论D关注较多的 Issues 有待后续跟进。

## 最新 Pull Requests（共 0 条
- 无 Pull Requests 更新

## 社区热点 Issues（共 1 个）

### Issue #11D: MCP 服务接口超时导致 KImi CLI 访问不可用
- **作者**:: CidiDLD
- **创建D: D26-1D-4D
- **更新D: D2-6-1D-4D
- **问题摘要D: 此问题涉及 kImi服务连接存在问题D即使在个别 MCP 服务超时时D整个 kImim-cli 叴也会因此不可用D除非直接重启。
- **GitHub 链接D: [ httpsMoonshotAI/kimi-cli Issue #D111

### Issue #DD3D: 使用 Ctrl+V 进行内容粘贴不成功
- **作者D: PANG-GIT-AI
- **创建D: DDD6D-itnessD4
-**更新D: DDD6D-itivityD-4
-**铲摘要：用户反馈在KImi-cli 火线特定终端中（如ictionary 如尝试 Ctrl+v 粘贴功能失败。
- **GitHub 链接D: https://github.com/MoonotshotAI/kImim-cli Issue #D63D

### Issue #DDDD: 增加本地 skills 操作管理功能
- **作者D: MunnishA
- **创建D: DD6-3-3D
- **更新D: DD6-3-4D
- **摘要摘要D: 针对 kImim-cli 当前无法管理本地 created skills 的问题，社区成员提出了增加相关管理工具的需求，如 skills list D skills rm 等
- **GitHub 链接D: https://github.com/MoonhotshotAI/kimim-cli Issue #DDD

## 重要 PR 迮进展（共 0 个）

目前还没有新的重要 Pull Request 更新

## 功能需求趋势D

从所有 Issues 得反映出以下功能强需求：
- 服务连接稳定性（Kimiim-cli 在某些特定情况下无法正常访问
- � 绒支持终端功能改进（特别是对于 Windows Terminal 等ponents 
- 本地 skills 操作管理工具

## 开发者关注关注D

开发者反馈中主要关注的痛点和高频需求包括：
-KImi-cli 服务接口稳定性问题
- � 使用终端（如 Windows Terminal ）中存在的的问题以及解决方案
- 增加本地技能操作管理功能

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期**: 2026-09-04  
**分析周期**: 过去 24 小时

---

## 1. 今日速览
OpenCode 社区今日活跃度较高，主要围绕 **v1.18.27 版本的稳定性问题** 进行讨论，特别是新布局 UI 下“自动接受权限”功能的缺失以及 Agent 循环卡死问题。同时，社区提交了 50 个新 Issues 和 50 个 Pull Requests，包括对 **Bun 运行时升级**（至 1.4.1）和 **Web 搜索功能** 的开发请求，显示出对性能优化和功能扩展的持续关注。

---

## 2. 版本发布
**无新版本发布**。目前社区主要关注点在于 v1.18.26 和 v1.18.27 版本中出现的一系列 Bug。

---

## 3. 社区热点 Issues

### 🐛 高频 Bug & 稳定性问题
1. **#47047** [SSE Error / Loop Stuck]
   * **摘要**: Big Pickle 模型在 AI 思考时进入死循环，导致生成中断。
   * **重要性**: 涉及核心 AI 交互逻辑，影响多款模型（包括 GLM-5.3-Flash）的使用体验。
   * **链接**: [Issue #47047](https://github.com/anomalyco/opencode/issues/47047)

2. **#31137 / #40237** [新布局 UI 权限功能缺失]
   * **摘要**: 启用“新布局”后，“自动接受权限”按钮无法启用，导致长时间自动化任务必须人工干预。
   * **重要性**: 关键交互 Bug，直接阻碍了“无值守”Agent 任务的正常运行。
   * **链接**: [Issue #31137](https://github.com/anomalyco/opencode/issues/31137)

3. **#47258** [SSE 流中断]
   * **摘要**: 移动端浏览器在切回应用后，事件流断开，必须手动刷新页面。
   * **重要性**: 影响移动端和远程控制场景的稳定性。
   * **链接**: [Issue #47258](https://github.com/anomalyco/opencode/issues/47258)

4. **#46310** [Agent 循环随机挂起]
   * **摘要**: 长期会话在工具调用时随机卡住，处于无限工作状态。
   * **重要性**: 影响长时间运行的任务可靠性。
   * **链接**: [Issue #46310](https://github.com/anomalyco/opencode/issues/46310)

### 🌍 新模型与 API 支持
5. **#47120** [模型发现失败]
   * **摘要**: OpenCode 未在发现列表中显示 `muse-spark-1.3-contributor-free`，导致调用时报错。
   * **重要性**: 影响特定模型的可用性和兼容性。
   * **链接**: [Issue #47120](https://github.com/anomalyco/opencode/issues/47120)

6. **#47034** [Gemini API 兼容性错误]
   * **摘要**: 使用 Gemini 3.8 Flash 时出现 400 错误 "Requests ending with a model turn are not supported"。
   * **重要性**: 影响 Google 生态模型的支持。
   * **链接**: [Issue #47034](https://github.com/anomalyco/opencode/issues/47034)

7. **#47312** [新模型请求]
   * **摘要**: 请求添加对 Augure AI 模型的支持。
   * **重要性**: 社区对新提供商的接入需求。
   * **链接**: [Issue #47312](https://github.com/anomalyco/opencode/issues/47312)

### ⚙️ 系统与配置
8. **#47080** [Headless 模式路径解析错误]
   * **摘要**: `opencode run` 在子进程中未正确继承工作目录，导致 headless 启动失败。
   * **重要性**: 影响自动化脚本和 CI/CD 集成。
   * **链接**: [Issue #47080](https://github.com/anomalyco/opencode/issues/47080)

9. **#47273** [Ollama 工具循环错误]
   * **摘要**: 使用 Ollama 兼容工具时出现 `no user query found` 错误。
   * **重要性**: 影响 Ollama 本地部署用户的体验。
   * **链接**: [Issue #47273](https://github.com/anomalyco/opencode/issues/47273)

10. **#47142** [仪表盘使用量计算错误]
    * **摘要**: 仪表盘总使用量百分比计算逻辑错误，未考虑不同模型的配额限制。
    * **重要性**: 影响用户对资源消耗的准确认知。
    * **链接**: [Issue #47142](https://github.com/anomalyco/opencode/issues/47142)

---

## 4. 重要 PR 进展

1. **#47313** [功能] 控制台配额重置支持
   * **内容**: 添加了 `Quota.reset` 功能，允许管理员重置工作区的所有使用计数器。
   * **链接**: [PR #47313](https://github.com/anomalyco/opencode/pull/47313)

2. **#47310** [优化] 改进 Desktop 工作树 UI
   * **内容**: 优化新会话位置控制、会话详情和设置菜单，提升用户体验。
   * **链接**: [PR #47310](https://github.com/anomalyco/opencode/pull/47310)

3. **#47307** [功能] MCP 服务器管理
   * **内容**: 在设置对话框中新增 MCP 服务器管理标签页，支持添加、编辑和删除，并集成 OAuth 凭证。
   * **链接**: [PR #47307](https://github.com/anomalyco/opencode/pull/47307)

4. **#47305** [功能] Desktop 插件管理器
   * **内容**: 在桌面端设置中添加插件管理标签页，支持浏览、安装和管理插件。
   * **链接**: [PR #47305](https://github.com/anomalyco/opencode/pull/47305)

5. **#47300** [功能] 插件会话停止钩子
   * **内容**: 添加 `experimental.session.stopping` 钩子，允许插件在回合结束前运行。
   * **链接**: [PR #47300](https://github.com/anomalyco/opencode/pull/47300)

6. **#47297** [修复] 升级 Bun 运行时至 1.4.1
   * **内容**: 修复 macOS x64 二进制文件因 AVX2 指令集缺失导致的崩溃问题。
   * **链接**: [PR #47297](https://github.com/anomalyco/opencode/pull/47297)

7. **#47311** [修复] Bash 工具输出工作目录
   * **内容**: 修复 Bash 工具在多轮调用中无法正确显示当前工作目录的问题。
   * **链接**: [PR #47311](https://github.com/anomalyco/opencode/pull/47311)

8. **#47286** [优化] 对齐 Desktop Agent 和模型切换
   * **内容**: 将模型切换行为统一到 V2 渲染器中，支持会话内的持久化选择。
   * **链接**: [PR #47286](https://github.com/anomalyco/opencode/pull/47286)

9. **#47293** [功能] 控制台 Web 搜索
   * **内容**: 在控制台中添加可选的 Web 搜索功能，支持代理和凭证管理。
   * **链接**: [PR #47293](https://github.com/anomalyco/opencode/pull/47293)

10. **#47281** [修复] 修复 ResizeHandle 拖拽失效
    * **内容**: 修复桌面应用中聊天/审查分割线无法拖拽的问题。
    * **链接**: [PR #47281](https://github.com/anomalyco/opencode/pull/47281)

---

## 5. 功能需求趋势
*   **UI/UX 改进**: 社区强烈要求修复“新布局”下的交互缺陷（如权限设置、拖拽调整）。
*   **模型扩展**: 对新模型的支持请求增加（如 Augure AI），同时关注现有模型（Gemini, Ollama, MiniMax）的 API 兼容性。
*   **Agent 可靠性**: 针对长时运行 Agent 的循环卡死和状态持久化问题反馈增多。
*   **本地化**: 出现了添加 Hinglish README 的请求，显示社区对多语言文档的关注。

---

## 6. 开发者关注点
*   **Headless/CLI 稳定性**: `opencode run` 在子进程环境下的路径解析和工作目录继承是主要痛点。
*   **移动端兼容性**: 浏览器端 SSE 连接在应用切后台后的重连机制存在严重缺陷。
*   **依赖更新**: Bun 运行时从 1.3.14 升级到 1.4.1 是当前修复 Intel Mac 兼容性的关键。
*   **插件生态**: 社区希望获得更完善的插件管理界面和钩子接口（如会话停止钩子）。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-09-04

## 1. 今日速览

v0.85.0 正式发布，支持 Claude thinking effort 持久化并安全处理签名思考不匹配。社区围绕 Amazon Bedrock Mantle 提供商接入、会话 ID 编码冲突修复及多轮思考块 API 兼容等问题展开密集讨论，共涉及 50 条活跃 Issue。

## 2. 版本发布

### v0.85.0
**新特性：**
- **Persistent Claude thinking effort** — 支持 Anthropic 传输层保留每次对话的 thinking effort 配置，并安全恢复 signed-thinking 不匹配场景。
  - [Model Configuration 文档](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)

## 3. 社区热点 Issues

| # | 标题 | 关注点 | 状态 | 评论 | 👍 |
|---|------|--------|------|------|-----|
| #5363 | Add amazon-bedrock-mantle provider for OpenAI-compatible models | Bedrock Mantle 使用 OpenAI-compatible API，与现有 Converse API 不兼容，社区呼声高 | OPEN/inprogress | 17 | 15 |
| #8720 | tool result with whitespace-only output permanently bricks the session | Bash 返回空白字符时 OpenAI 兼容提供商返回 HTTP 400，导致会话永久卡死 | OPEN | 4 | 0 |
| #8684 | `PI_OFFLINE` silently disables all provider model discovery | 文档与行为不符，离线模式意外禁用全部模型目录发现 | OPEN | 4 | 0 |
| #9052 | Fullscreen mode's wheel scrolling is 3x slower | 全屏模式滚动性能问题，影响用户体验 | OPEN | 4 | 1 |
| #8896 | `/export HTML` silently drops context that was sent to the model | HTML 导出丢失 `display:false` 自定义消息，与文档行为矛盾 | OPEN | 4 | 0 |
| #8857 | Agent loop has no tool call execution timeout | 工具执行无超时兜底，`bash` 卡住时会话无限等待 | CLOSED/no-action | 3 | 0 |
| #9128 | Dependency free pi-ai | 浏览器端打包体积过大，请求精简 provider SDK | CLOSED/untriaged | 3 | 0 |
| #9073 | JsonlSessionRepo rejects cwd-scoped IDs when directory encodings collide | `tenant-a/project` 与 `tenant/a-project` 编码冲突导致会话 ID 覆盖 | OPEN | 3 | 0 |
| #9132 | 0.85.0: `dist/cli.js` statically imports undeclared `@earendil-works/pi-server` | npm 包缺失声明依赖，安装即用失败 | CLOSED | 2 | 4 |
| #9134 | Anthropic adapter silently drops root anyOf from custom tool schemas | 自定义工具 schema 的 `anyOf` 约束被静默丢弃，影响工具定义 | CLOSED/bug | 2 | 0 |

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| #9149 | fix(coding-agent): selector save keybindings | OPEN | 修复 `/model` 和 `/thinking` 选择器硬编码 `Ctrl+S`，改用 `app.models.save` 和新增 `app.thinking.save` |
| #9077 | docs(coding-agent): document running pi in Docker Sandboxes | CLOSED | 补充 Docker Sandboxes 运行模式文档 |
| #9138 | feat(coding-agent): use Cmd+V for clipboard image paste on macOS | CLOSED | macOS 剪贴板图片粘贴改用 `Cmd+V`，对齐平台惯例 |
| #9137 | feat(coding-agent): add Nix flake | OPEN | 新增 Nix flake 支持（WIP） |
| #9135 | feat(ai): add OrcaRouter as a first-class provider | CLOSED | 接入 OrcaRouter AI 网关，支持自适应路由和自动故障转移 |
| #8112 | fix(coding-agent): realpath extension entries before jiti import | OPEN | 修复 pnpm 隔离布局下扩展入口解析失败问题（closes #8092） |
| #9131 | feat: Durable Object SQLite session backend | CLOSED | 新增 Cloudflare Durable Object SQLite 会话后端 |
| #9117 | feat(coding-agent): deliver prompt and tool changes as system message deltas | OPEN | 将 prompt/工具变更以 system message delta 形式传递，避免全量重写 |
| #9116 | feat(ai): add mid-conversation system messages | OPEN | 支持对话中途注入 system message，为 #9117 提供基础 |
| #8998 | System prompt refactor | CLOSED | 系统提示词重构，支持扩展动态更新 system/tool 而不重置上下文 |
| #8422 | fix(ai): omit reasoning effort for xAI Grok Build | CLOSED | 修复 xAI Grok Build 0.1 不支持 `reasoning.effort` 参数导致 400 错误 |
| #9126 | fix(coding-agent): settle tool results before disposal | OPEN | 确保中断的工具结果在 session 销毁前持久化 |
| #9121 | feat(tui): add collapsible work process grouping | CLOSED | 新增 `Alt+O` 折叠工作流分组，自动汇总多次工具调用结果 |
| #9120 | fix(tui): rank skill autocomplete by bare name | OPEN | 修复 skill 自动补全按完整 `skill:<name>` 字符串匹配导致排序偏差 |
| #9110 | fix(coding-agent): include display:false custom messages in HTML export | CLOSED | 修复 #8896，HTML 导出现包含 `display:false` 的自定义消息 |

## 5. 功能需求趋势

- **提供商扩展**：Amazon Bedrock Mantle（#5363）、OrcaRouter（#9135）接入，反映社区对多网关/多云提供商的强烈需求。
- **会话持久化与可靠性**：Durable Object SQLite 后端（#9131）、会话 ID 编码冲突修复（#9111/#9073）、工具结果持久化（#9126）表明开发者关注高可用会话管理。
- **系统提示词动态更新**：mid-conversation system messages（#9116/#9117/#8998）是核心架构演进，支持扩展在对话中动态注入工具/提示变更，无需重置上下文。
- **TUI 交互优化**：折叠工作流（#9121）、macOS 剪贴板快捷键（#9138）、全屏滚动性能（#9052）、skill 补全排序（#9120）显示对终端体验的持续打磨。
- **包体积与依赖管理**：dependency-free pi-ai（#9128）、Nix flake 支持（#9137）反映浏览器端和声明式部署场景需求。
- **跨平台构建**：riscv64 构建失败（#9145）暴露了 `tsgo` 等非主流架构支持缺口。

## 6. 开发者关注点

- **Provider 兼容性**：Grok Build 0.1 的 `reasoningEffort` 不支持（#8381/#8422）、Anthropic 工具 schema 静默丢弃 `anyOf`（#9134）、DeepSeek/OpenRouter thinkingSignature 冗余导致上下文膨胀（#9097）、Google Vertex 连接重置崩溃（#3218）——多提供商适配仍是高频痛点。
- **工具执行兜底**：工具无超时（#8857/#9151）、空白 tool result 导致 400 卡死（#8720）、Grep 部分目录不可读时丢弃结果（#9141）——鲁棒性修复需求集中。
- **会话恢复稳定性**：长会话恢复时 thinking block 不可修改（#9112）、`PI_OFFLINE` 意外禁用模型发现（#8684）——会话生命周期管理需更清晰的行为界定。
- **包发布质量**：0.85.0 缺失 `pi-server` 依赖声明（#9132/#9140）——npm 包构建流程需加强验证。
- **二进制文件处理**：`processFileArguments()` 强制 UTF-8 解码导致二进制附件损坏（#9105）——文件附件处理逻辑存在隐患。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*