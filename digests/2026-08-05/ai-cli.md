# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 06:19 UTC | 覆盖工具: 9 个

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
**日期：2026-08-05 | 分析师：Agnes (Sapiens AI)**

---

## 1. 生态全景

2026 年 8 月，AI CLI 工具生态呈现**快速分化与专业化**趋势：开源工具（OpenCode、Qwen Code、DeepSeek TUI）在架构重构和 Runtime API 扩展上积极布局，厂商工具（Codex、Copilot CLI）聚焦企业级管控与稳定性，而 Gemini CLI 则在安全加固与多模型支持上发力。社区痛点高度集中在**长会话稳定性**（MCP 泄漏、上下文压缩失效）、**跨平台兼容**（Windows/WSL/Linux Wayland）和**多 Provider 路由**三大方向，反映开发者已从"尝鲜期"进入"生产级使用期"。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | Release | 版本状态 |
|------|-------------|---------|---------|----------|
| **OpenAI Codex** | 10 | 10 (全 Closed) | 4 个 Alpha 预发布 | 高频迭代，SDK 重构期 |
| **Gemini CLI** | 10 | 10 | 无（夜间构建失败） | 稳定期，安全修复密集 |
| **Copilot CLI** | 1+ | 数据不完整 | v1.0.79-1/2 | 正式版迭代，UI 优化 |
| **Kimi Code CLI** | 8 | 3 | 无 | 功能扩张期 |
| **OpenCode** | 10 | 10 | v1.18.13 | 架构迁移期（V2 API） |
| **Pi** | 10 | 10 | 无 | 跨平台适配期 |
| **Qwen Code** | 10 | 10 | v0.21.6-preview.0 | 多模态 + Daemon 优化 |
| **DeepSeek TUI** | 10 | 10 | v0.9.4 train 中 | 性能重构期（v0.9.5 Epic） |

> **说明**：Claude Code 今日数据缺失。DeepSeek TUI 的"Epic Issue"为性能重构路线图，非单一 Issue。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|----------|----------|
| **长会话稳定性** | Codex、Kimi Code、Qwen Code、DeepSeek TUI | MCP 进程泄漏（#30408）、上下文压缩失效循环（#8452/#33493）、500K tokens 后 agent 漂移（#2586） |
| **跨平台兼容** | Codex、Gemini CLI、Pi、Kimi Code | Windows 沙箱权限（#35864/#28080）、Wayland 支持（#21983）、WSL 路径处理（#7064）、IME 输入（#2584） |
| **多 Provider/模型路由** | Codex、Gemini CLI、OpenCode、Pi | 子 Agent 独立模型（#14039）、自定义 Provider 桌面端不可用（#29156）、SGLang/OpenAI 兼容端点（#28681） |
| **用量与成本控制** | OpenCode、Gemini CLI、DeepSeek TUI | Go Plan 用量 API（#16017，126 赞）、免费额度耗尽无预警（#40588）、Pricing API 503（#5241） |
| **安全加固** | Gemini CLI、Qwen Code、Pi | SSRF 域名绕过（#28557）、Bash 变量展开绕过（#28691）、Provider 密码泄露（#8136） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **OpenAI Codex** | 工具注册表重构、权限管理、MCP 生态 | 企业开发者、自动化工作流用户 | Rust SDK 高频迭代，聚焦底层稳定性 |
| **Gemini CLI** | 安全修复、多模型支持（SGLang/OpenAI 兼容）、Eval 基础设施 | 安全敏感用户、CI/CD 集成者 | 双重路线：安全加固 + 生态扩展 |
| **Copilot CLI** | UI 布局优化、DevTool 权限重构、MCP 兼容性 | GitHub 生态用户、IDE 集成者 | 渐进式迭代，重视企业管控 |
| **Kimi Code CLI** | 跨设备远程控制、ACP 协议扩展、长上下文 agent | 移动端/远程工作场景用户 | 协议层扩展，强调工作流连续性 |
| **OpenCode** | V2 API 迁移、用量透明化、多模型支持 | 开源社区、自由开发者 | 架构级重构，Go Plan 生态绑定 |
| **Pi** | 提供商扩展（LLM Gateway/Cortecs）、压缩可配置化、RPC 嵌入 | 多模型路由用户、嵌入客户端开发者 | 插件化 + 嵌入式架构 |
| **Qwen Code** | Daemon 资源隔离、多模态 Omni、ACP IDE 集成 | JetBrains/IDE 深度用户、企业团队 | 多模态先行，Daemon 架构优化 |
| **DeepSeek TUI** | 构建性能重构（v0.9.5）、Runtime API 完善、MCP Registry | Rust 爱好者、高性能需求用户 | 单体编译税重构，向平台化演进 |

---

## 5. 社区热度与成熟度

| 成熟度 | 工具 | 判断依据 |
|--------|------|----------|
| **高活跃度 + 快速迭代** | Codex、DeepSeek TUI | Codex：4 个 Alpha 版本/天；DeepSeek：6 个 Epic Issue 集中解决构建性能 |
| **高活跃度 + 架构重构** | OpenCode、Qwen Code | OpenCode：V2 API 迁移第 3 层；Qwen Code：Daemon 资源追踪 + 多模态扩展 |
| **稳定期 + 安全/体验优化** | Gemini CLI、Pi | Gemini：安全 PR 密集；Pi：提供商扩展 + TUI 稳定性精修 |
| **功能扩张期** | Kimi Code CLI | 跨设备远程 + ACP 协议，功能需求驱动明显 |
| **企业级稳定迭代** | Copilot CLI | UI 优化 + 权限重构，节奏稳健 |

> **热度指标**：OpenCode #16017（126 赞）、Codex #8648（81 评论/58 赞）、Kimi Code #1282（24 赞）为今日最高关注 Issue。

---

## 6. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **从"工具"到"平台"** | DeepSeek TUI Runtime API（Goal/Memory/MCP Server 端点）、Pi RPC 套接字 | 选择工具时关注是否支持外部系统集成，避免锁定在单一 TUI |
| **长会话成为生产级瓶颈** | Codex MCP 泄漏（9GB+ RSS）、Qwen Code prompt cache 失效、Kimi Code 500K tokens 漂移 | 生产环境需评估工具的上下文管理策略，优先选择支持远程压缩/工具调用的方案 |
| **多 Provider 路由成为标配** | Gemini CLI SGLang 支持、Pi LLM Gateway、Codex 子 Agent 独立模型 | 企业部署需关注工具是否支持自定义 Provider，避免厂商锁定 |
| **安全审查频率上升** | Gemini CLI 三项安全 PR、Qwen Code 密码泄露修复 | 使用 CLI 执行代码时，优先选择安全修复活跃的工具，关注 SSRF/命令注入防护 |
| **跨平台兼容性仍是短板** | Codex Windows 沙箱、Gemini Wayland、Pi WSL 路径、Kimi IME | Windows/Linux 用户需关注工具的平台适配进度，必要时准备规避方案 |
| **构建性能引发社区焦虑** | DeepSeek TUI v0.9.5 Epic（682K 行单体编译） | 开源工具贡献者需关注构建优化，用户可关注预编译二进制分发 |

---

**报告生成时间**：2026-08-05  
**数据来源**：GitHub 各工具仓库社区动态  
**分析师**：Agnes (Sapiens AI)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-08-05**

---

## 1. 热门 Skills 排行

| 排名 | Skill | 功能概述 | 社区关注点 | 状态 |
|------|-------|---------|-----------|------|
| 🥇 | [skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | 对 Claude Skills 进行五维质量评估（结构/文档/触发/鲁棒性/安全） | 社区亟需 Skill 质量评估标准，Meta-Skill 概念受关注 | Open |
| 🥈 | [self-audit](https://github.com/anthropics/skills/pull/1367) | 交付前机械验证 + 四维推理质量门控（v1.3.0） | 推理质量保障、防幻觉、跨项目通用性 | Open |
| 🥉 | [testing-patterns](https://github.com/anthropics/skills/pull/723) | 覆盖完整测试栈：单元测试、React 组件测试、测试哲学 | 测试覆盖率、AAA 模式、边用例覆盖 | Open |
| 4 | [document-typography](https://github.com/anthropics/skills/pull/514) | 文档排版质量控制：孤儿换行、孤行段落、编号对齐 | 解决 AI 生成文档常见排版缺陷 | Open |
| 5 | [color-expert](https://github.com/anthropics/skills/pull/1302) | 色彩专业知识：命名体系（ISCC-NBS/Munsell/XKCD/RAL）、色彩空间选型表 | 设计/前端场景色彩知识标准化 | Open |
| 6 | [ODT skill](https://github.com/anthropics/skills/pull/486) | OpenDocument 格式创建、填充、解析及转 HTML | 开源/ISO 标准文档格式支持缺口 | Open |
| 7 | [plan-file-hygiene](https://github.com/anthropics/skills/pull/1479) | 规划产物生命周期管理，防止 artifacts 堆积 | 长期 Agent 会话上下文膨胀问题 | Open |
| 8 | [frontend-design](https://github.com/anthropics/skills/pull/210) | 前端设计 Skill 清晰度与可操作性改进 | 指令可执行性、单轮对话约束 | Open |

---

## 2. 社区需求趋势

从 Issues 中提炼出的核心需求方向：

**① 安全与信任治理**（最迫切）
- [#492](https://github.com/anthropics/skills/issues/492)（43 条评论，2👍）：社区技能冒充官方 Anthropic 命名空间，存在权限滥用风险
- [#1175](https://github.com/anthropics/skills/issues/1175)：SharePoint 文档处理中的访问控制安全顾虑
- [#412](https://github.com/anthropics/skills/issues/412)：提议 `agent-governance` Skill，涵盖策略执行、威胁检测、信任评分、审计追踪

**② 组织协作与分发**
- [#228](https://github.com/anthropics/skills/issues/228)（16 条评论，8👍）：组织级 Skill 共享（当前需手动下载/上传，效率低下）
- [#189](https://github.com/anthropics/skills/issues/189)（6 条评论，9👍）：`document-skills` 与 `example-skills` 插件内容重复导致上下文浪费

**③ 长期 Agent 上下文管理**
- [#1329](https://github.com/anthropics/skills/issues/1329)（9 条评论）：提议 `compact-memory` Skill，用符号化表示替代文本式持久记忆
- [#1479](https://github.com/anthropics/skills/pull/1479)：规划产物生命周期管理，防止 artifacts 堆积

**④ 平台兼容性**
- [#1061](https://github.com/anthropics/skills/issues/1061)（3 条评论，2👍）：Windows 下 skill-creator 脚本 PATHEXT/编码/管道 select 兼容性问题
- 多个 PR 同步修复 Windows 问题：[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)

**⑤ 推理质量与验证**
- [#1385](https://github.com/anthropics/skills/issues/1385)（4 条评论）：推理质量门控流水线提案（预校准→对抗审查→交付验证）
- [#1487](https://github.com/anthropics/skills/issues/1487)（4 条评论）：`claude-api` Skill 单次注入约 156k tokens，耗尽上下文窗口

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、修复关键或解决明确痛点，合并概率较高：

| PR | 主题 | 潜力分析 |
|----|------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `run_eval.py` recall=0% 根因修复 | 阻塞 Skill 描述优化循环的核心 Bug，10+ 独立复现，社区呼声高 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | trigger detection 遗漏真实 Skill 名 | 与 #1298 同源问题，修复后优化循环才能正常工作 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | trigger-eval 命令文件隔离 | 解决并行评估时污染用户项目 `.claude/commands/` 的问题 |
| [#556](https://github.com/anthropics/skills/issues/556) → 关联 #1298/#1323 | `claude -p` 从不触发 Skill | 已有多位贡献者跟进，修复后社区技能开发效率将显著提升 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 首个 Meta-Skill，填补质量评估空白，被广泛引用讨论 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：建立可信任、可复用、跨平台的 Skill 开发生态——核心痛点围绕官方命名空间被仿冒的安全风险、Skill 质量缺乏评估标准、Windows 兼容性缺失、以及长期 Agent 会话的上下文管理失控。**

这一诉求在 Issue #492（43 条评论）和 #228（8👍）中体现得最为集中，同时 #556/#1298 系列修复反映出社区对"如何让 Skill 开发者工具真正可用"的强烈需求。

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-08-05** | 数据源：[github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 今日速览

过去24小时内，Codex 发布了4个 Rust SDK 预发布版本（v0.147.0-alpha.7 系列），持续推进工具注册表重构与权限管理优化。社区焦点集中在 **MCP 进程泄漏**、**模型路由限制** 和 **Windows 沙箱兼容性** 三大核心痛点，多条高热度 Issue 引发广泛讨论。

---

## 2. 版本发布

过去24小时发布 **4 个 Rust 预发布版本**，均为 `v0.147.0-alpha` 系列迭代：

| 版本 | 说明 |
|------|------|
| [rust-v0.147.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.7) | 最新预发布版本 |
| rust-v0.147.0-alpha.6.4 | 预发布版本 |
| rust-v0.147.0-alpha.6.3 | 预发布版本 |
| rust-v0.147.0-alpha.6.1 | 预发布版本 |

> 无正式版发布，版本迭代集中于 SDK 内部重构。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 Bug 类

**#8648 — Codex 在对话中回复较早消息而非最新一条**  
- 作者：BobbyWang0120 | 评论：**81** | 👍：**58**  
- 影响：多轮对话中模型上下文追踪行为异常，严重影响对话连贯性，是高优先级 Bug。  
  [查看](https://github.com/openai/codex/issues/8648)

**#30408 — MCP Server 进程泄漏，单线程进程无法回收（9+ GB RSS）**  
- 作者：kkkayye | 评论：23 | 👍：6  
- 影响：新线程创建时启动完整 MCP 进程组，但归档/关闭后永不清理，导致内存泄漏。  
  [查看](https://github.com/openai/codex/issues/30408)

**#30440 — Codex 使用内置 pnpm 而非主机工具链，导致构建失败**  
- 作者：kkaatii | 评论：20 | 👍：**26**  
- 影响：用户自定义构建脚本依赖宿主机 pnpm 版本，内置版本不兼容引发持续失败。  
  [查看](https://github.com/openai/codex/issues/30440)

**#28080 — Windows 桌面工具处理器在会话中间歇性丢失（No handler registered）**  
- 作者：Hogna67 | 评论：19 | 👍：2  
- 影响：活跃会话中工具注册表不稳定，影响 Windows 平台用户的核心功能体验。  
  [查看](https://github.com/openai/codex/issues/28080)

**#35864 — Windows 非提权沙箱拒绝可执行 split writable 根，破坏 apply_patch 更新与删除**  
- 作者：PerikiyoXD | 评论：10 | 👍：0  
- 影响：提供附带修复方案，涉及 Windows 沙箱文件权限兼容性核心问题。  
  [查看](https://github.com/openai/codex/issues/35864)

**#33493 — Local compaction v2 保留无界 input_image 载荷，导致重复自动压缩**  
- 作者：snrui | 评论：7 | 👍：2  
- 影响：图片密集型会话触发无限自动压缩循环，影响长会话稳定性。  
  [查看](https://github.com/openai/codex/issues/33493)

### 🔵 功能需求类

**#14039 — 允许为每个子 Agent 单独指定模型/Provider/Profile（CLOSED）**  
- 作者：oxysoft | 评论：15 | 👍：**17**  
- 价值：长期需求，已关闭说明方案已落地，子 Agent 可独立路由模型。  
  [查看](https://github.com/openai/codex/issues/14039)

**#16672 — 全局搜索跨线程标题和对话内容（CLOSED）**  
- 作者：SeleiXi | 评论：11 | 👍：11  
- 价值：提升历史记录检索效率，已确认关闭。  
  [查看](https://github.com/openai/codex/issues/16672)

**#25233 — `/side` 聊天过期过快且过期行为不透明**  
- 作者：miraclebakelaser | 评论：9 | 👍：**18**  
- 影响：临时会话意外丢失导致工作中断，用户期望更可控的过期策略。  
  [查看](https://github.com/openai/codex/issues/25233)

**#14969 — 为 Plan 模式的执行阶段单独选择模型**  
- 作者：curious1n | 评论：5 | 👍：10  
- 价值：支持 Plan 阶段用高能力模型、执行阶段用低成本模型的差异化策略。  
  [查看](https://github.com/openai/codex/issues/14969)

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| #37035 | 对齐注册表测试与规范工具名 | CLOSED | 工具名称规范化，统一 `functions` 命名空间 |
| #37031 | 权限配置更新应用到未来对话环境 | CLOSED | 修复会话设置变更未及时同步权限配置的问题 |
| #37027 | 强制执行 Agent Plugin 运行时边界 | CLOSED | 隔离 Plugin 能力，防止 app/hook 能力泄露 |
| #37022 | 将默认工具规范化至 `functions` 命名空间 | CLOSED | 统一工具注册表格式，支持命名空间提供商 |
| #37020 | 强制执行严格工具名冲突检测 | CLOSED | 启用 `error_on_tool_collisions` 时拦截重复工具 |
| #36998 | 支持工具搜索中的延迟加载自定义工具 | CLOSED | 将自由格式工具纳入搜索索引并延迟加载 |
| #36993 | 支持分页线程的 `includeTurns` 读取 | CLOSED | 为客户端提供完整历史视图，兼容分页存储 |
| #36990 | 移除遗留协作模式变体 | CLOSED | 删除 `PairProgramming`/`Execute` 变体，简化 ModeKind |
| #36987 | 添加可选的并发 exec-server 请求分发 | CLOSED | 新增 `--concurrent-requests` 标志，防止长请求阻塞健康检查 |
| #36981 | 为 Amazon Bedrock 启用远程压缩 | CLOSED | 支持 Bedrock v1/v2 协议的远程 compaction 能力 |

> 以上 PR 主要由 `copyberry[bot]` 合并，反映工具注册表重构、权限管理和性能优化是本周重点。

---

## 5. 功能需求趋势

从 Issues 和社区反馈中提炼出以下核心方向：

1. **自定义模型与 Provider 支持** — 用户对自定义 Provider 在桌面端不可用（#29156）、子 Agent 独立模型路由（#14039）、Plan/执行模型分离（#14969）的需求持续升温。
2. **性能与资源管理** — MCP 进程泄漏（#30408、#35485）、图片压缩循环（#33493）、远程模式异常（#36971）反映出资源占用是高频痛点。
3. **跨平台兼容性** — Windows 沙箱（#35864）、工具处理器丢失（#28080）、自定义 Provider 历史隐藏（#31625）等问题集中在 Windows 平台。
4. **对话体验优化** — 回复目标错误（#8648）、`/side` 过期（#25233）、全局搜索（#16672）影响核心交互流畅度。
5. **企业级管控** — 模型白名单（#28469）、权限配置同步（PR #37031）反映团队部署需求。

---

## 6. 开发者关注点

| 关注点 | 高频 Issue/PR | 社区反应 |
|--------|--------------|----------|
| MCP 进程泄漏 | #30408, #35485, #32574 | 多处报告，内存消耗达 GB 级 |
| 模型路由限制 | #29156, #14039, #14969 | 大量投票，自定义 Provider 使用受阻 |
| Windows 沙箱兼容 | #28080, #35864, #31625 | 平台专属问题，修复优先级受关注 |
| 会话上下文管理 | #8648, #29811, #33493 | 长会话稳定性核心问题 |
| 快速模式/会话配置 | #19982, #25233 | 期望细粒度控制对话生命周期 |
| IDE 集成稳定性 | #36418, #10989 | Xcode/VSCode 扩展认证与 steer 丢失 |

> **核心结论**：开发者最迫切的需求是**解决资源泄漏**和**完善自定义模型支持**，Windows 平台兼容性仍是短板。工具注册表重构（近期 PR）有望缓解部分工具命名和权限管理问题。

---

*报告生成时间：2026-08-05*  
*数据来源：GitHub openai/codex 仓库*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报 — 2026-08-05

## 今日速览

今日 Gemini CLI 无新版本发布，但社区活跃度依然较高。安全方面迎来两项重要修复：SSRF 漏洞（域名未校验绕过）和 Bash/PowerShell 变量展开绕过攻击均已提交 PR。同时，非交互式模式的 nightly 发布因 npm dist-tag 删除失败而中断，团队正在紧急修复。

---

## 版本发布

无新版本发布。

> 注：`v0.55.0-nightly.20260805.gac42fb0a2` 夜间构建因 workflow 失败未成功部署（[Issue #28692](https://github.com/google-gemini/gemini-cli/issues/28692)）。

---

## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后错误报告 GOAL 成功
**#22323** | P1 · agent · 12 评论 · 2 👍  
子代理在达到最大轮次限制前未做任何分析，却报告 `status: "success"` 和 `Termination Reason: GOAL`，导致中断被隐藏。这是子代理可靠性层面的核心 Bug，影响开发者对 Agent 行为的可预测性。

### 2. Generalist Agent 挂起问题
**#21409** | P1 · agent · 8 评论 · 8 👍  
Generalist agent 在 defer 时永久挂起，简单操作（如创建文件夹）也会触发。社区关注度极高（8 👍），规避方法为禁用子代理，但这是功能降级而非修复。

### 3. Shell 命令执行卡在"Awaiting input"
**#25166** | P1 · core · 4 评论 · 3 👍  
简单 CLI 命令执行完成后，终端仍显示"等待用户输入"状态，造成用户体验严重割裂。该问题重复出现，影响日常使用。

### 4. Browser Agent 在 Wayland 下失败
**#21983** | P1 · agent/browser · 4 评论 · 1 👍  
浏览器子代理在 Wayland 环境下无法正常工作，返回 GOAL 终止但无实际输出。对使用 Wayland 的 Linux 用户影响重大。

### 5. 400 错误：工具数量超过 128 个
**#24246** | P2 · agent · 3 评论  
当可用工具超过 400 个时触发 400 错误，期望 Agent 能智能限制工具范围。这是规模化使用场景下的关键瓶颈。

### 6. Subagent 在 v0.33.0 后无需权限自动运行
**#22093** | P2 · agent · 3 评论  
升级至 v0.33.0 后，即使用户配置禁用子代理，Generalist 等子代理仍被自动调用。这涉及安全与权限控制的回归问题。

### 7. Auto Memory 无限重试低信号会话
**#26522** | P2 · agent · 5 评论  
Auto Memory 仅在实际读取转录内容后才标记为已处理，若 Agent 判断会话"低信号"则跳过，导致该会话反复出现。

### 8. Auto Memory 日志与隐私问题
**#26525** | P2 · security · 4 评论  
背景提取 Agent 读取本地转录内容后发送至模型，即使有 redaction prompt，内容已在模型上下文中。同时服务可能记录现有 skill 日志，存在隐私风险。

### 9. Model 频繁在随机位置创建临时脚本
**#23571** | P2 · agent · 3 评论  
通过排除法限制 shell 执行后，模型倾向于在不同目录生成编辑脚本，导致工作区清理负担加重。

### 10. GSoC 项目 Issue
**#28696** | 新建 · help wanted  
今日新建的 GSoC 项目 Issue，由 `gundermanc` 发起，旨在招募暑期贡献者参与 Gemini CLI 开发。

---

## 重要 PR 进展

### 1. 修复 SSRF 漏洞：异步 DNS 解析
**#28557** | P1 · security  
`isBlockedHost` 此前仅校验字面 IP，域名未检查，导致解析到 `169.254.169.254` 等内网地址可绕过防护。PR 引入异步 DNS 解析补全校验。

### 2. 修复 Bash/PowerShell 变量展开绕过
**#28691** | P1 · security · 已关闭  
修复 `detectBashSubstitution()` 和 `detectPowerShellSubstitution()` 中的检查缺陷，防止 `$VAR` 和 `${VAR}` 模式绕过安全门（关联 GHSA-wpqr-6v78-jr5g）。

### 3. 修复 sendStream 中未保护 JSON.parse
**#28695** | P2 · non-interactive  
`GeminiCliSession.sendStream()` 对 string 类型 tool args 调用未保护的 `JSON.parse()`，模型输出异常时直接抛出。改为安全解析。

### 4. 修复 npm dist-tag 删除失败
**#28694** | P1 · non-interactive  
夜间发布流程在 Wombat Dressing Room 等禁止删除 tag 的 registry 上失败。PR 增加容错处理，避免发布中断。

### 5. 支持 SGLang 和本地 OpenAI 兼容端点
**#28681** | P1 · core/cli  
新增对 SGLang 和本地 OpenAI 兼容推理后端的支持，扩展非 Gemini 模型的接入能力。

### 6. Eval 静态分析验证工具
**#28344** | eval  
新增 `eval:validate` 命令，对 eval 源文件执行 9 条静态规则检查，支持 CI 门禁。

### 7. Eval 本地报告聚合
**#28369** | eval  
新增 `npm run eval:report`，聚合 Vitest `report.json` 中的模型通过率，支持重复测试的去重处理。

### 8. 修复 formatTruncatedToolOutput 负索引 Bug
**#28639** | P1 · core  
`maxChars <= 0` 时 `String.prototype.slice` 负索引行为导致输出膨胀约 2 倍，已加防御逻辑并补充回归测试。

### 9. 修复 Ghost Text 无限循环（窄终端）
**#28641** | P2 · core  
当终端宽度小于单个宽字符（CJK/emoji）时，`getGhostTextLines` 陷入无限循环。PR 强制推进 `splitIndex` 确保终止。

### 10. MCP 扩展 consent 显示完整配置
**#28664** | mcp  
子代理更新同意提示此前仅展示 command/args/httpUrl，未显示 `env`、`cwd`、`headers` 等执行相关字段，现已补齐。

---

## 功能需求趋势

| 方向 | 说明 |
|------|------|
| **Agent 可靠性与子代理控制** | 多起 P1/P2 Bug 集中于子代理行为不可控（挂起、权限绕过、轮次限制报告错误），社区强烈期望提升子代理的稳定性和可观测性 |
| **安全加固** | 今日三项安全相关 PR（SSRF、变量展开绕过、Auto Memory 日志），安全审查频率明显上升 |
| **Eval 基础设施** | 新增静态校验、报告聚合、Caretaker eval 框架，eval 体系正从手动走向自动化 CI 化 |
| **非交互模式稳定性** | 夜间发布失败、sendStream 异常处理修复，反映非交互/CI 场景的使用量增长 |
| **多模型/本地后端支持** | SGLang 和 OpenAI 兼容端点的接入 PR，显示社区对非 Gemini 模型的需求 |
| **终端 UX 优化** | Ghost text 循环、terminal resize 性能、外部编辑器后屏幕刷新等问题持续被提出 |

---

## 开发者关注点

1. **子代理行为不可预测**：Generalist 挂起、子代理无需授权自动运行、MAX_TURNS 误报成功——三个独立 Issue 指向同一核心痛点：Agent 决策过程缺乏透明度和可控性。

2. **安全边界漏洞**：SSRF 域名绕过、Bash 变量展开绕过，均属于"看似安全实则可绕过"的类型，开发者对 CLI 作为代码执行工具的安全基线要求极高。

3. **Wayland/Linux 环境兼容**：Browser Agent 在 Wayland 下失败、终端 resize 性能问题，反映非 macOS/Windows 平台的支持仍是薄弱环节。

4. **工具数量上限**：400 工具触发 400 错误的瓶颈，对使用大量 MCP 服务器或自定义 Skill 的高级用户影响显著。

5. **临时文件污染**：Model 在多个目录随机创建脚本，增加了工作区维护成本，属于 Agent 行为规范化的典型问题。

6. **GSoC 参与机会**：新发布的 GSoC Issue 为社区贡献者提供了明确的参与入口，值得关注。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报 (2026-08-05)

## 1. 今日速览
过去 24 小时 Copilot CLI 发布 v1.0.79-1/2，主要聚焦于提示词 UI 布局优化与开发工具配置权限的重构。社区反馈近期集中爆发于 MCP 协议兼容性、BYOK 模型流式响应解析以及部分内置工具的回归缺陷，同时会话分叉、自定义主题等长期工作流诉求持续获得高票数支持。

## 2. 版本发布
- **v1.0.79-2** [Release 链接](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2)
  **UI/布局优化**：将当前提示词固定至标签栏所在行，减少时间线高度占用；默认在终端行数 `<30` 时关闭 `pinnedPrompts`，避免界面拥挤。
- **v1.0.79-1** [Release 链接](https://github.com/github/copilot-cli/releases/tag/v1.0.79-1)
  **Breaking 配置变更**：`allowDevToolCaches` 重命名为 `allowDevToolAccess`，权限范围扩展至 dev-tool 配置与注册表；旧键名已停止读取，原显式 `false` 的关闭配置将静默回退为默认开启状态。

## 3. 社区热点 Issues（精选 10 条）
1. **#4370** [OPEN] MCP 初始化在 v1.0.79-1 因 `server/discover` 返回 `-32602` 失败  
   [链接](

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报
**日期：2026-08-05** | 数据来源：github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

过去 24 小时内无新版本发布，社区活跃度集中在功能需求与 bug 反馈。最受关注的功能是**跨设备远程控制会话**（Issue #1282，👍 24）和**长上下文 agent 可靠性问题**（Issue #2586），同时 Windows 下的 IME 字符重复问题（Issue #2584）和会话异常退出（Issue #2587）引发开发者反馈。

---

## 2. 版本发布

过去 24 小时内无新 release 发布。

---

## 3. 社区热点 Issues

| 优先级 | Issue | 标题 | 关注点 |
|--------|-------|------|--------|
| ⭐⭐⭐ | [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Remote Control - 跨设备继续本地会话 | 24 赞，12 评论。用户希望从手机/平板/浏览器续接本地 CLI 会话，实现工作流无缝连续性，社区呼声最高。 |
| ⭐⭐⭐ | [#2586](https://github.com/MoonshotAI/kimi-cli/issues/2586) | Agent 可靠性在上下文接近 500K tokens 时显著下降 | 新增 bug。多步代码变更 agent 在上下文填充超过 ~500K tokens 后出现重复动作循环、指令漂移等问题，影响长会话稳定性。 |
| ⭐⭐ | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Memory System - 跨会话持久化上下文 | 17 评论。请求实现自动记忆（AI 管理）与手动记忆（用户定义指令），解决每次会话上下文重置的痛点。 |
| ⭐⭐ | [#2587](https://github.com/MoonshotAI/kimi-cli/issues/2587) | 正常推进会话时 CLI 异常退出 | 新增 bug，v0.29.2 / K3 high / Windows 11。会话正常推进中进程意外退出，影响用户体验。 |
| ⭐⭐ | [#2584](https://github.com/MoonshotAI/kimi-cli/issues/2584) | Windows 下 Thai 等 IME 字符重复输入 | v0.31.1 / Windows 11。Thai 及其他基于 IME 的语言在 prompt 中输入时出现字符重复，多语言用户受影响。 |
| ⭐ | [#2583](https://github.com/MoonshotAI/kimi-cli/issues/2583) | ACP 模式支持广告可用模型及会话中切换模型 | 新功能请求。ACP 客户端（如 Happy Coder、Zed）无法发现可用模型列表，也无法在会话中途切换模型。 |

---

## 4. 重要 PR 进展

| 优先级 | PR | 标题 | 说明 |
|--------|-----|------|------|
| ⭐⭐⭐ | [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) | fix(shell): 适配长命令超时 | 针对 `git submodule cleanup`、`git clone/fetch`、包安装、构建等慢操作自动延长 shell 超时，同时保留 60s 默认值和调用方显式指定的超时。 |
| ⭐⭐ | [#2585](https://github.com/MoonshotAI/kimi-cli/pull/2585) | feat(cli): 为子进程设置 `AI_AGENT` 环境变量 | 从 pip/uv 和独立二进制入口启动的子进程均暴露 `AI_AGENT=kimi`，支持包装器/编排器传递显式值，覆盖缺失、空值和显式标记三种场景。 |
| ⭐⭐ | [#2364](https://github.com/MoonshotAI/kimi-cli/pull/2364) | feat(acp): 支持权限模式切换 | 在协议层为 Kimi 会话添加 ACP 权限模式切换能力，广告 `default` 等模式，解决 [#1414](https://github.com/MoonshotAI/kimi-cli/issues/1414)，依赖 PR #2363。 |

---

## 5. 功能需求趋势

从 Issue 和 PR 中可提炼出以下社区关注方向：

- **跨设备/跨平台工作流连续性**：远程控制（#1282）和 ACP 协议增强（#2583、#2364）表明用户希望 Kimi Code CLI 不仅局限于本地终端，还能与移动端、IDE 和远程编排器无缝集成。
- **长会话稳定性**：#2586 反映 agent 在长上下文场景下的可靠性瓶颈是当前最突出的技术挑战，500K tokens 阈值附近的性能衰减直接影响生产级自动化任务。
- **上下文记忆能力**：#1283 提出的 Memory System 是延续性工作流的基础设施，社区期望 AI 能自动积累项目模式和用户偏好，减少重复配置。
- **多语言/本地化体验**：#2584 暴露了 Windows 下 IME 兼容性问题，随着用户群体全球化，多语言输入支持成为必要项。

---

## 6. 开发者关注点

| 痛点/需求 | 来源 | 说明 |
|-----------|------|------|
| 长会话上下文膨胀导致 agent 失控 | #2586 | 重复动作循环、指令漂移，缺乏错误升级机制，500K tokens 后可靠性急剧下降 |
| 会话中途无法切换模型 | #2583 | ACP 客户端无法发现模型列表，也无法动态切换，限制了灵活调用 |
| 权限控制粒度不足 | #2364、#1414 | 用户希望按场景切换权限模式（如只读/读写），当前支持有限 |
| 慢命令超时配置不合理 | #2200 | git 操作、构建等常规慢命令被默认超时截断，需自适应机制 |
| Windows 多语言输入异常 | #2584 | Thai 等 IME 语言字符重复，影响非拉丁语系开发者体验 |
| 会话意外退出 | #2587 | 正常推进中进程崩溃，稳定性有待提升 |
| 跨设备远程接入 | #1282 | 最高投票需求，用户希望随时随地续接本地会话 |
| 会话间上下文持久化 | #1283 | 每次新建会话需重复提供项目背景，希望 AI 自动记忆 |

---

*报告生成时间：2026-08-05 | 分析师：Agnes (Sapiens AI)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报

**日期：2026-08-05** | 数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. 今日速览

OpenCode v1.18.13 今日发布，修复了 TUI 中 GitHub PR 上下文展示及 Desktop 端 RTL 布局问题。社区对 Go Plan 使用量 API 的请求持续升温（Issue #16017 获 126 赞），同时 V2 API 迁移工作进入第三阶段，多组合并推进中。

---

## 2. 版本发布

### v1.18.13

**TUI 修复：**
- GitHub PR 评论现在在上下文中包含 PR 编号和 URL

**Desktop 修复：**
- 修复多个右到左（RTL）布局问题，涉及标签页、抽屉、调整大小及标题栏交互
- 修复共享的 RTL UI 行为，如方向性图标

---

## 3. 社区热点 Issues

### 🔥 #16017 [FEATURE] 添加 Go Plan 用量/余额 API 端点
- **作者：** StephanMeijer | **评论：** 30 | **👍 126**
- 社区高赞功能请求，希望暴露 Go Plan 订阅的滚动/周/月使用量数据，目前仅在 Web 控制台可见，TUI/CLI 无程序化访问途径。
- 🔗 https://github.com/anomalyco/opencode/issues/16017

### 🔥 #38723 [BUG] `opencode run` 初始化时间歇性挂起
- **作者：** VinylStage | **评论：** 5 | **👍 1**
- 报告约 56% 失败率：进程存活但无输出、无错误、不创建 session，仅能通过外部超时终止。
- 🔗 https://github.com/anomalyco/opencode/issues/38723

### 🔥 #40243 [BUG] ChatGPT OAuth 拒绝欧盟工作区的 GPT-5.6 模型
- **作者：** lhammingNedap | **评论：** 4 | **👍 4**
- EU 数据驻留工作区在使用 OAuth 认证时，OpenCode TUI 无法调用 GPT-5.6，而官方 Codex CLI 正常。
- 🔗 https://github.com/anomalyco/opencode/issues/40243

### 🔥 #40588 [FEATURE] 免费额度耗尽时应提前警告
- **作者：** AlanMSmith | **评论：** 2
- 免费版 `deepseek-v4-flash-free` 在额度用尽时突然中断且无任何提示，建议暴露剩余用量或倒计时。
- 🔗 https://github.com/anomalyco/opencode/issues/40588

### 🔥 #40584 [FEATURE] TUI 添加 /usage 或 /status 命令
- **作者：** bertrell | **评论：** 2
- 与 #16017 相关，用户希望直接在 TUI 中查看 Go Plan 的 5h/周/月限额，无需打开浏览器。
- 🔗 https://github.com/anomalyco/opencode/issues/40584

### 🔥 #40580 [BUG] TUI 崩溃：TextNodeRenderable 类型错误
- **作者：** davidcoachdev | **评论：** 2
- TUI 崩溃报错：`TextNodeRenderable only accepts strings, TextNodeRenderable instances, or StyledText instances`。
- 🔗 https://github.com/anomalyco/opencode/issues/40580

### 🔥 #40577 [FEATURE] 从 /models 列表中移除已退役的 DeepSeek 模型
- **作者：** jkemp814 | **评论：** 2
- `deepseek-chat` / `deepseek-reasoner` 等已退役模型仍显示在模型列表中，建议清理。
- 🔗 https://github.com/anomalyco/opencode/issues/40577

### 🔥 #39207 [BUG] GitHub OAuth 登录失败："Failed query: update user"
- **作者：** asmartin-ai | **评论：** 5 | **👍 1**
- OAuth 回调时服务端 SQL 报错，email 参数为空导致 update 失败。
- 🔗 https://github.com/anomalyco/opencode/issues/39207

### 🔥 #28590 [BUG] GNU screen 下 writeOsc52 使用 tmux DCS 格式
- **作者：** lingfish | **评论：** 10 | **👍 2**
- `writeOsc52` 将 GNU screen 和 tmux 同等处理，导致 screen 下剪贴板功能异常。
- 🔗 https://github.com/anomalyco/opencode/issues/28590

### 🔥 #40533 [NEEDS:COMPLIANCE] 废弃
- **作者：** kumo-pub | **评论：** 49 | **状态：已关闭**
- 高讨论量合规相关 Issue，已关闭，具体内容为废弃相关。
- 🔗 https://github.com/anomalyco/opencode/issues/40533

---

## 4. 重要 PR 进展

### #40578 [FEATURE] 添加 /handoff 命令
- **作者：** MagnumGoYB | **状态：** OPEN
- 新增会话交接命令，关闭 #26757，支持上下文压缩的 fork 继承。
- 🔗 https://github.com/anomalyco/opencode/pull/40578

### #40582 [FEATURE] Desktop 内联对话可视化
- **作者：** Andihu | **状态：** OPEN
- 为 Desktop 端新增内联 HTML 可视化能力，模型可通过 `visualize()` 写入版本化片段。
- 🔗 https://github.com/anomalyco/opencode/pull/40582

### #40566 [FEATURE] 保留压缩尾部媒体内容
- **作者：** rekram1-node | **状态：** OPEN
- 将默认保留的压缩上下文从 8K 提升至 15K tokens，并保留选中图片/音频/视频/PDF 媒体。
- 🔗 https://github.com/anomalyco/opencode/pull/40566

### #40576 [BUGFIX] 恢复中断的响应
- **作者：** rekram1-node | **状态：** OPEN
- 当 Provider 响应意外中断时，保留已有输出并追加合成用户消息请求模型续写，避免内容丢失。
- 🔗 https://github.com/anomalyco/opencode/pull/40576

### #40581 / #40545 [BUGFIX] JSON 输出中添加模型归属
- **作者：** rawsun007 / macurandb | **状态：** CLOSED / OPEN
- 修复 `opencode run --format json` 中 `step_start`/`step_finish` 事件缺少模型信息的问题，使无头消费方可正确归因 token 和费用。
- 🔗 https://github.com/anomalyco/opencode/pull/40581 | https://github.com/anomalyco/opencode/pull/40545

### #40382 / #40381 / #40378 / #40376 / #40375 [REFACTOR] V2 API 迁移系列
- **作者：** Brendonovich | **状态：** 部分已合并
- 核心重构系列，逐步将 App 流量、会话传输、Catalog/文件/项目操作、PTY 生命周期等迁移至 V2 API，移除 V1 兼容层。当前为第 3/6 层。
- 🔗 #40382 https://github.com/anomalyco/opencode/pull/40382 | #40378 https://github.com/anomalyco/opencode/pull/40378 | #40376 https://github.com/anomalyco/opencode/pull/40376

### #40590 [FEATURE] 安装脚本支持 GITHUB_TOKEN 认证
- **作者：** rwenz2004 | **状态：** OPEN
- 为安装脚本添加 GitHub Token 认证支持，解决匿名请求的速率限制问题。
- 🔗 https://github.com/anomalyco/opencode/pull/40590

### #40585 [DOCS] 添加 LongCat 免费模型
- **作者：** MrMushrooooom | **状态：** CLOSED
- 在 Zen 端点和定价表中添加 LongCat-2.0 Free 模型文档，更新 18 个本地化页面。
- 🔗 https://github.com/anomalyco/opencode/pull/40585

### #37620 [BUGFIX] Linux 使用自定义标题栏
- **作者：** cyrasafia | **状态：** CLOSED
- 修复 Linux Electron 窗口因配置缺失回退到原生 GTK 装饰的问题。
- 🔗 https://github.com/anomalyco/opencode/pull/37620

### #40538 [BUGFIX] xAI OAuth 改用设备认证
- **作者：** rekram1-node | **状态：** CLOSED
- 将 xAI OAuth 从 loopback 方式迁移至 RFC 8628 设备认证，支持本地和远程环境统一使用 SuperGrok 订阅。
- 🔗 https://github.com/anomalyco/opencode/pull/40538

---

## 5. 功能需求趋势

| 方向 | 说明 |
|------|------|
| **用量透明化** | 免费/付费额度提醒、剩余用量查询是高频需求（#16017、#40584、#40588），用户希望在 TUI/CLI 中直接查看，无需切换至 Web 控制台。 |
| **V2 API 迁移** | 核心架构正从 V1 向 V2 过渡，Brendonovich 主导的系列 PR 已推进至第 3 层，预计将改善 API 一致性和可维护性。 |
| **新模型支持** | DeepSeek 退役模型清理（#40577）、LongCat 免费模型加入（#40585）、Nemotron 模型兼容性修复（#30951）。 |
| **TUI/桌面体验** | /handoff 命令（#40578）、内联可视化（#40582）、压缩上下文媒体保留（#40566）等增强功能持续推进。 |
| **认证与合规** | OAuth 稳定性（#39207、#40243）、xAI 设备认证迁移（#40538）、欧盟数据驻留兼容性。 |
| **终端兼容** | GNU screen vs tmux 剪贴板差异（#28590）、WSL 输出问题（#20234）等环境问题持续关注。 |

---

## 6. 开发者关注点

1. **用量感知缺失**：免费用户投诉额度耗尽时无任何预警，付费用户无法在 TUI/CLI 中查看用量，强烈期望统一的用量查询接口。
2. **稳定性问题**：`opencode run` 间歇性挂起、TUI 崩溃（TextNodeRenderable 类型错误）、Electron 渲染进程无响应等 bug 影响日常使用体验。
3. **认证流程障碍**：GitHub OAuth 回调失败、ChatGPT OAuth 在欧盟工作区异常、xAI 认证方式迁移，认证链路是开发者反馈的痛点之一。
4. **历史数据迁移**：从 Windows 迁移至 WSL 后 session 历史不可见、数据库 migration 误删日志等问题提示迁移工具需要更健壮的验证。
5. **模型列表维护**：退役模型未及时清理、免费模型与后端实际支持不一致，需要更自动化的模型目录同步机制。

---

*报告生成时间：2026-08-05 | 数据范围：过去 24 小时*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-08-05

## 1. 今日速览

过去 24 小时内，Pi 社区围绕 **Copilot Enterprise 压缩失败** 和 **Windows 用户体验** 两大主题展开高频讨论，多个相关 Issue 已关闭或进入修复阶段。同时，**Mermaid 图表渲染**、**LLM Gateway 提供商集成**、**RPC 套接字支持**等功能性 PR 活跃推进，TUI 稳定性与跨平台兼容性问题持续得到社区响应。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论 | 👍 | 重要性 |
|---|------|------|------|-----|--------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | Compaction using Copilot Enterprise not possible | ✅ CLOSED | 19 | 18 | Copilot Enterprise 用户高频痛点，421 错误阻断压缩流程 |
| [#7547](https://github.com/earendil-works/pi/issues/7547) | How do you use Pi on Windows? | 🟢 OPEN | 13 | 0 | 收集 Windows 用户使用方式与痛点，影响官方优先级判断 |
| [#7064](https://github.com/earendil-works/pi/issues/7064) | WSL 绝对路径处理异常 | 🟢 OPEN | 12 | 1 | Windows/WSL2 用户 read/write/edit 工具失效的核心 bug |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | 终端无故滚动到开头 | ✅ CLOSED | 11 | 1 | 影响用户体验的随机渲染问题 |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | Compaction fails on GitHub Copilot GHE.com — "unknown stamp" | 🟢 OPEN | 6 | 0 | 与企业版 OAuth 认证相关的压缩失败问题 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | Configurable thinking level/model for compaction | ✅ CLOSED | 6 | 0 | 推理模型用户的压缩配置需求，已有 PR 跟进 |
| [#7508](https://github.com/earendil-works/pi/issues/7508) | OAuth refresh 无超时导致会话冻结 ~5 分钟 | ✅ CLOSED | 5 | 0 | 网络不稳定场景下的关键稳定性问题 |
| [#7574](https://github.com/earendil-works/pi/issues/7574) | 全屏模式 Home/End 键位被吞噬 | ✅ CLOSED | 4 | 0 | 全屏用户体验缺陷，已修复 |
| [#7528](https://github.com/earendil-works/pi/issues/7528) | TUI 自定义对话框行宽超界导致进程崩溃 | ✅ CLOSED | 4 | 0 | 严重崩溃类 bug，边界条件修复 |
| [#7594](https://github.com/earendil-works/pi/issues/7594) | release 二进制缺失 node:sqlite 导致插件损坏 | ✅ CLOSED | 4 | 0 | 影响 pi-total-recall 等插件的基础依赖问题 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| [#7624](https://github.com/earendil-works/pi/pull/7624) | feat: render Mermaid diagrams | 🟢 OPEN | 通过 grok-mermaid 库在 Markdown 中渲染 Mermaid 图表，关闭 #7623 |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | feat: add LLM Gateway providers | 🟢 OPEN | 将 LLM Gateway（OpenRouter 风格路由）作为内置 `openai-completions` 提供商 |
| [#7632](https://github.com/earendil-works/pi/pull/7632) | fix: retry transient management HTTP requests | 🟢 OPEN | 对所有幂等管理请求（pi.dev、GitHub releases 等）添加重试逻辑，修复 #6675 |
| [#7619](https://github.com/earendil-works/pi/pull/7619) | feat: resume failed turn via /tree | 🟢 OPEN | 在对话树中选择失败条目可自动重试该 turn，关闭 #7609 |
| [#7602](https://github.com/earendil-works/pi/pull/7602) | feat: configurable summarization models | 🟢 OPEN | 允许为压缩和分支摘要配置独立模型与 thinking level，关闭 #7553 |
| [#7612](https://github.com/earendil-works/pi/pull/7612) | fix: iTerm2 image size param | 🟢 OPEN | 为 iTerm2 OSC 1337 序列添加 `size` 参数，兼容 `@xterm/addon-image@0.9.0` |
| [#7597](https://github.com/earendil-works/pi/pull/7597) | fix: extension selector scrollable in fullscreen | 🟢 OPEN | 全屏模式下扩展选择器支持滚动，解决大 diff 无法查看问题 |
| [#7621](https://github.com/earendil-works/pi/pull/7621) | feat: RPC argument completions | ✅ CLOSED | 新增 `get_argument_completions` RPC 命令，支持嵌入客户端获取补全数据 |
| [#7599](https://github.com/earendil-works/pi/pull/7599) | feat: RPC over sockets | ✅ CLOSED | 添加 `--listen` 参数支持通过 Unix socket 或 TCP 进行 RPC 通信 |
| [#7571](https://github.com/earendil-works/pi/pull/7571) | feat: add Cortecs provider | ✅ CLOSED | 将欧洲 AI 提供商 Cortecs 作为内置提供商，基于 models.dev |

---

## 5. 功能需求趋势

- **提供商扩展**：社区持续推动新提供商接入（LLM Gateway、Cortecs、Qwen Token Plan），反映出对多路由/区域提供商的强烈需求。
- **压缩（Compaction）可配置化**：多处 Issue/PR 围绕压缩的模型选择、thinking level、重试策略提出改进，是推理模型用户的高频需求。
- **跨平台兼容性**：Windows/WSL2 路径处理、iTerm2 图像渲染、全屏模式键位等问题集中暴露，跨平台体验是社区重点关注领域。
- **TUI 稳定性**：崩溃修复（行宽越界、渲染跳变）、滚动行为优化等持续迭代，显示 TUI 层已进入稳定性精修阶段。
- **RPC 与嵌入式客户端**：套接字 RPC、参数补全等 PR 推进，表明对 pi 作为嵌入组件的生态建设在加速。

---

## 6. 开发者关注点

| 痛点方向 | 代表 Issue/PR |
|----------|---------------|
| Copilot Enterprise 压缩失败（421/unknown stamp） | #6768、#7413、#7579 |
| Windows/WSL 路径与工具异常 | #7064、#6817、#7547 |
| OAuth 刷新卡死会话 | #7508 |
| TUI 渲染崩溃与键位冲突 | #7528、#7574、#7616 |
| 插件依赖缺失（node:sqlite） | #7594 |
| 工具行为异常（read 解析 JSON、bash 挂起） | #7633、#7636 |
| 模型列表缺失（Grok 4.5、Copilot models） | #7560、#7634 |
| 环境变量指引过度鼓励 bash 调用 | #7128 |

---

**数据截止时间**：2026-08-05 | **数据来源**：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 | 2026-08-05

## 1. 今日速览

今日 Qwen Code 发布 v0.21.6-preview.0 与 v0.21.5-nightly，浏览器扩展新增 Alpha 就绪诊断能力，Headless Goal 工作流正式文档化。社区活跃关注 daemon 资源隔离、ACP 多工作区稳定性及 Provider 密码泄露等核心问题，共 37 条 issue 与 50 条 PR 在过去 24 小时内更新。

---

## 2. 版本发布

**v0.21.6-preview.0 / v0.21.5-nightly.20260805**（2026-08-05）

- **feat(browser-ext)**: 新增 Alpha 就绪诊断工具（PR #6739），帮助开发者评估浏览器扩展的运行状态
- **docs**: 补充 Headless Goal 工作流的官方文档，覆盖自动化场景

链接:
- [v0.21.6-preview.0 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0)
- [v0.21.5-nightly Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 优先级 | 热度 | 链接 |
|---|------|--------|------|------|
| #8102 | 可信 Agent Runtime：确定化工具执行边界 | P2 | 17 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8102) |
| #8519 | tmux 闪屏严重（已关闭） | P2 | 11 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8519) |
| #8051 | 多工作区 Daemon 资源使用追踪 | P2 | 9 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8051) |
| #8136 | Provider 警告脱敏泄露含 `@` 密码 | P2 | 8 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8136) |
| #8356 | APIUserAbortError 后会话记录不写入 | P2 | 5 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8356) |
| #8533 | Content[]/Part[] 无法安全编码推理回放契约 | P2 | 4 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8533) |
| #8550 | MCP SSE 列表命令无限挂起 | P2 | 4 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8550) |
| #8452 | 体积触发微压缩反复使 Prompt 缓存失效 | P2 | 3 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8452) |
| #8463 | 微压缩在多轮会话中持续覆盖缓存前缀 | P2 | 2 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8463) |
| #8527 | 超时错误被包装后丢失错误码，无法自动重试 | P2 | 3 评论 | [链接](https://github.com/QwenLM/qwen-code/issues/8527) |

**热点分析：**
- **#8102** 提出可信 Agent 运行时方向，将 LLM 隔离于信任边界之外，引发核心架构讨论，是今日最高关注度 issue。
- **#8136** 与 **#8524**（PR）形成闭环：密码泄露 bug 已由社区贡献者提交修复 PR，预计即将合并。
- **#8452 / #8463** 是同一问题（microcompaction 破坏 prompt cache）的两层报告，开发者对长会话性能退化敏感。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 作者 | 链接 |
|---|------|------|------|------|
| #8561 | Web Shell 新增 Session Workflow Cockpit | OPEN | yiliang114 | [链接](https://github.com/QwenLM/qwen-code/pull/8561) |
| #8512 | Omni 实验 S2：多模态输入扩展（图像/音频/URL） | OPEN | LaZzyMan | [链接](https://github.com/QwenLM/qwen-code/pull/8512) |
| #8529 | 从 API 元数据解析模型输入模态 | OPEN | DragonnZhang | [链接](https://github.com/QwenLM/qwen-code/pull/8529) |
| #8455 | CLI 退出时在主屏幕回显 resume 命令 | OPEN | chiga0 | [链接](https://github.com/QwenLM/qwen-code/pull/8455) |
| #8457 | Web Shell 侧边栏暴露 Channel Sessions | OPEN | BZ-D | [链接](https://github.com/QwenLM/qwen-code/pull/8457) |
| #8443 | Streaming 期间允许点击展开/折叠思考过程 | OPEN | chiga0 | [链接](https://github.com/QwenLM/qwen-code/pull/8443) |
| #8524 | 复用 Base URL 脱敏器修复 Provider 警告泄露 | OPEN | LHMQ878 | [链接](https://github.com/QwenLM/qwen-code/pull/8524) |
| #8465 | 长期 Goal 的证据检查点持久化 | OPEN | qqqys | [链接](https://github.com/QwenLM/qwen-code/pull/8465) |
| #8440 | Channel 新增 Group Pairing 支持 | OPEN | qqqys | [链接](https://github.com/QwenLM/qwen-code/pull/8440) |
| #8350 | 支持可信私有 ASR 网关 Base URL | OPEN | rockybot2026 | [链接](https://github.com/QwenLM/qwen-code/pull/8350) |

**亮点：**
- **#8512** 将 Omni 实验从视频扩展到图像/音频/URL，是 Qwen 多模态能力的重要铺垫。
- **#8443** 修复了 CLI 中"思考过程"在 streaming 期间无法交互的问题，UX 提升明显。
- **#8524** 直接修复 Issue #8136 的密码泄露漏洞，是今日安全相关的关键 PR。

---

## 5. 功能需求趋势

基于今日 Issues 分析，社区最关注的方向：

| 优先级 | 方向 | 代表 Issues/PRs |
|--------|------|-----------------|
| 🔴 高 | **Daemon 稳定性与资源隔离** | #8051、#8182（50% 内存分配 bug）、#8356 |
| 🔴 高 | **ACP/IDE 集成体验** | #8544（JetBrains 任务列表缺失）、#8546（session_info_update）、#8542（流式消息队列） |
| 🟡 中 | **Prompt Cache 性能优化** | #8452、#8463（microcompaction 反复破坏缓存） |
| 🟡 中 | **多模态与 Omni 能力** | #8512（S2 多模态扩展）、#8558（API 元数据驱动模型限制） |
| 🟡 中 | **渠道集成扩展** | #8457（Channel Sessions）、#8440（Group Pairing）、#8515（DingTalk 接口暴露） |
| 🟢 低 | **文档与国际化** | #8551（韩语支持）、#8556（README 刷新） |

---

## 6. 开发者关注点

**核心痛点：**

1. **Daemon 内存管理缺陷** — #8182 指出每个 ACP 子进程分配宿主 50% 内存而非均分，导致多工作区场景下资源耗尽风险；#8051 呼吁建立完整的资源边界追踪。

2. **Prompt Cache 失效循环** — #8452 与 #8463 共同反映：长会话超过 50 万字符后，microcompaction 反复重写已缓存前缀，使 Provider 缓存完全失效，开发者对此类隐性性能退化反馈强烈。

3. **ACP/IDE 与 CLI 体验不一致** — JetBrains 中任务列表不渲染（#8544）、无法在 turn 执行中排队消息（#8542）等问题频繁出现，社区期望 IDE 体验对齐 CLI。

4. **安全与脱敏** — #8136 暴露 Provider URL 中 `@` 字符导致密码泄露，虽有 PR #8524 修复，但反映出 warning 处理路径的安全隐患。

5. **MCP 服务器兼容性** — #8550 报告 SSE 模式下 `qwen mcp list` 可能无限挂起，影响工具链集成。

---

*报告生成时间：2026-08-05 | 数据来源：github.com/QwenLM/qwen-code*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报 — 2026-08-05

## 1. 今日速览

今日社区活跃度高，**性能优化**成为绝对焦点——作者 Hmbown 集中发起了 6 个围绕 v0.9.5 构建性能的 Epic Issue，直指 682K 行单 crate 单体编译、708 包依赖图、git SHA 重建等核心痛点。同时 v0.9.4 release train（#5135）持续推进，多个 Runtime API 端点和 MCP 相关 PR 进入 Review。Bug 方面，File edit 静默接受错误参数（#5209）和 Pricing API 503（#5241）影响用户体验较直接。

---

## 2. 版本发布

**无新 Release。**

v0.9.4 release train（#5135）仍在进行中，目前领先 main 分支 77 个 commits，预计包含此前 #5044 的全部变更及 18 个 train 专属提交。

---

## 3. 社区热点 Issues

| # | 类型 | 摘要 | 关注理由 |
|---|------|------|----------|
| #5209 | Bug | File `action=edit` 静默接受错误参数名并返回虚假成功 | 导致用户反复重试 3-5 倍，直接影响编辑工作流可靠性 |
| #5241 | Bug | Pricing endpoint 返回 503，所有会话显示 `unverified_live_pricing` | 升级至 v0.9.3 后成本显示全面失效，多 Provider 受影响 |
| #5244 | Bug | 未知 model id 静默降级至 128K legacy 默认值 | 1M-context 模型被无声压缩，用户无感知 |
| #5239 | Bug | 模型支持 1M context 但工具仅在 128K 触发压缩 | 与 #5244 同源，用户询问配置方式 |
| #5250 | Enhancement | 仅支持保存一个 API key，多 Provider 场景体验差 | 同时使用 DeepSeek/GLM 等用户的高频痛点 |
| #5005 | Enhancement | 支持沙箱文件系统路径白名单，访问外部日志和构建产物 | Xcode 开发者刚需，DerivedData 等路径被 sandbox 阻挡 |
| #4991 | Discussion | TUI crate 单体导致的编译时间抱怨 | 维护者亲自发起讨论，反映社区普遍焦虑 |
| #5249 | Epic | v0.9.5 build-time lane：终结单体编译税 | 作者发起的系统性性能重构路线图 |
| #5248 | Enhancement | 精简 708 包依赖图：去重、裁剪 feature、删除冗余栈 | #5249 的子任务，直接关系构建速度 |
| #5245 | Enhancement | 解耦 HEAD SHA stamp 与编译，避免每次 commit 全量重建 | 开发者日常高频痛点，682K 行代码重建代价巨大 |

> 完整链接均形如 `https://github.com/Hmbown/CodeWhale/issues/{ID}`

---

## 4. 重要 PR 进展

| # | 状态 | 摘要 |
|---|------|------|
| #5135 | Open | **v0.9.4 release train** — 包含 77 commits，supersedes #5044，是当前主要发布分支 |
| #5242 | Open | **Sub-agent 中断恢复** — `agents/followup` 现支持从 checkpoint 恢复被中断的 child agent，长任务（文档审查、多步搜索）不再需要重新分发 |
| #5240 | Open | **Bash `wait` 工具展示真实耗时** — 将 `duration_ms` 暴露至 tool content 而非仅 metadata，避免模型误判等待状态导致 busy-polling |
| #5234 | Open | **修复鼠标捕获期间交替缓冲区滚动失效** — 修复 `recover_terminal_modes()` 同时启用 mouse capture 和 xterm alternate-scroll 导致的轮询冲突 |
| #5225 | Open | **ACP 协议暴露 file/search/git/patch/shell 工具** — `session/prompt` 端点从纯文本流升级为可执行工具调用，赋能 Zed 等编辑器集成 |
| #5238 | Open | **MCP Registry 发现与优先工具选择** — 模型调用前优先查询公共 MCP Registry，寻找 zero-env stdio server，减少手动配置 |
| #5133 | Open | **Runtime API：暴露 persistent goal-loop 状态** — 新增 `/v1/threads/{id}/goal` 端点，支持读取活跃目标及生命周期控制 |
| #5131 | Open | **Runtime API：Memory 端点** — 新增 `/v1/memory` 路由，支持有界检查和生命周期管理 |
| #5130 | Open | **Runtime API：MCP Server 生命周期管理** — 支持通过 HTTP 增删改 MCP server 配置，无需直接编辑 TOML/JSON |
| #5192 | Closed | **Pin ratatui 至 0.30.0** — 修复 ratatui-core 0.1.1+ 中 `Terminal::clear()` 触发 CPR 查询与事件循环竞态的崩溃问题 |

---

## 5. 功能需求趋势

1. **构建性能与 DX**：v0.9.5 系列 Epic（#5245-#5249）集中火力解决 Rust workspace 单体编译痛点，包括依赖精简、git SHA 解耦、LTO 分层、测试二进制合并。这是当前社区反馈最密集的领域。
2. **多 Provider / 多 Key 管理**：#5250 反映跨 Provider（DeepSeek + GLM 等）用户的增长趋势，现有单 key 设计已不构成瓶颈。
3. **沙箱灵活性**：#5005（路径白名单）与 #5209（edit 参数校验）显示用户在真实项目集成中对沙箱和工具正确性的要求提高。
4. **Runtime API 完善**：#5130-#5133 密集发布 Memory、Goal、MCP Server 等端点，说明项目正从 TUI 客户端向可被外部系统（IDE、Fleet）编程控制的平台演进。
5. **MCP 生态集成**：#5238 的 Registry-first 策略表明项目希望降低 MCP 工具发现门槛，推动标准化生态。

---

## 6. 开发者关注点

- **编译重建成本**：682K 行单 crate 每次 commit 全量重建是最大日常摩擦点，#5245 的 SHA 解耦提案直接命中。
- **工具正确性信任**：#5209 的假成功和 #5244 的静默降级暴露了工具层"静默失败"模式对 agent 工作流的破坏，社区期待更明确的错误上报。
- **多 Provider 实测覆盖**：Pricing API 503（#5241）和 OAuth token 未自动应用（#5243）说明多 Provider 场景的集成测试覆盖不足。
- **长任务可靠性**：sub-agent 中断恢复（#5242）和 wait 耗时可见性（#5240）反映用户对 agent 长运行稳定性的关注。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*