# AI CLI 工具社区动态日报 2026-07-21

> 生成时间: 2026-07-21 01:44 UTC | 覆盖工具: 9 个

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



# AI CLI 工具社区动态横向对比分析报告
**日期：** 2026-07-21  
**数据来源：** GitHub 各官方仓库 Issue/PR/Release 动态

---

## 1. 生态全景

当前 AI CLI 工具已从“单点代码补全”全面演进为**本地 Agent 运行时+多模型编排+沙箱安全**的综合开发平台。开源与商业闭源项目同步加速，Rust/Go 原生实现成为性能与安全的主流技术底座。社区反馈的核心矛盾集中在**计费透明度、长会话上下文管理、Agent 权限隔离与跨平台稳定性**，反映出开发者对生产级可靠性的要求已显著高于早期探索阶段。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 精选 Issues | 公开 PR 动态 | 备注 |
|:---|:---|:---:|:---|:---|
| **OpenAI Codex** | `rust-v0.145.0-alpha.25` | 10 | 内部工程密集合并底层改进（未列公开PR清单） | 社区热度最高，#28879 获 358👍 |
| **Gemini CLI** | `v0.52.0-nightly.20260721` | 10（部分截断） | 工作区信任隔离、MCP 发现超时修复等 | Nightly 自动化构建节奏稳定 |
| **GitHub Copilot CLI** | v1.0.73 / v1.0.72 | 10 | 24h 内无新增公开 PR | 双版本连续发布，修复优先级高 |
| **Kimi Code CLI** | 无 | 6 | 多项关键修复 PR（未量化） | 聚焦状态机与编辑工具链缺陷 |
| **DeepSeek TUI** | v0.9.1 收敛期 | 数据截断 | 数据截断 | 处于版本稳定化阶段 |
| **Pi** | 无 | 数据截断 | 数据截断 | 多云适配与 Provider 扩展活跃 |
| **Claude Code** | 数据缺失 | — | — | 摘要生成失败 |
| **OpenCode** | 数据缺失 | — | — | 摘要生成失败 |
| **Qwen Code** | 数据缺失 | — | — | 摘要生成失败 |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|:---|:---|:---|
| **Agent 权限隔离与沙箱安全** | OpenAI Codex、Copilot CLI、Gemini CLI | 子代理越权修改父工作区、Shell 命令阻断回归、工作区信任隔离机制缺失 |
| **长会话上下文控制** | OpenAI Codex、Copilot CLI、Kimi Code CLI | 后台轮询浪费 Token、自动压缩无法绕过 5MB 响应体限制、压缩后任务状态回滚 |
| **计费/限流透明度** | OpenAI Codex、Kimi Code CLI | Rate-limit 单次消耗飙升 10–20×、云端持续 429 限流超 48 天 |
| **跨平台与 TUI 稳定性** | OpenAI Codex、Copilot CLI、Gemini CLI、Kimi Code CLI | Linux 桌面版缺失、Windows UI 冻结、TUI 忽略 PTY 输入、快捷键冲突 |
| **多模型/Provider 兼容性** | OpenAI Codex、Pi、Copilot CLI | 模型参数不支持优雅降级、Anthropic 子代理调度异常、自托管兼容 Provider 超时回归 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|:---|:---|:---|:---|
| **OpenAI Codex** | 企业级 Agent 运行时、桌面沙箱、自动化调度 | Plus/Pro 付费用户、重度 CLI 开发者 | Rust CLI + Windows/macOS 原生沙箱，强依赖 GPT 系列模型 |
| **Gemini CLI** | A2A Server 安全、MCP 协议集成、多代理协作 | 云原生/Agent 编排场景开发者 | Go/Rust 混合架构，强调 A2A 标准与工具发现可靠性 |
| **GitHub Copilot CLI** | VS Code/GitHub 生态深度集成、团队指令配置 | GitHub 企业用户、CI/CD 自动化流水线 | TypeScript/Node 为主，强化 `gh` 认证与 Plan Mode 工作流 |
| **Kimi Code CLI** | Goal Mode 自主任务执行、StrReplaceFile 精确编辑 | 中文生态开发者、长周期自动化任务 | 专注状态机与编辑原子性，近期暴露等待态 Token 燃烧问题 |
| **DeepSeek TUI** | 轻量终端体验、开源可定制 | 资源受限环境、偏好本地模型的开发者 | 进入 v0.9.1 收敛期，优先修复而非功能扩张 |
| **Pi** | 多云适配、自托管兼容 Provider、成本追踪 | 私有化部署、预算敏感型团队 | Provider 抽象层设计，强调可观测性与第三方扩展 API |

---

## 5. 社区热度与成熟度

- **高热度工具：** OpenAI Codex（#11023 Linux 桌面支持获 801👍、#28879 计费问题 358👍）、GitHub Copilot CLI（Issue 讨论密度高，回归类问题集中）
- **快速迭代阶段：** Gemini CLI（Nightly 日构建 + P1 级 Agent 可靠性修复）、OpenAI Codex（Alpha Rust CLI 预研 + 沙箱架构演进）
- **稳定收敛阶段：** DeepSeek TUI（v0.9.1 密集修 Bug）、Kimi Code CLI（无新版本，聚焦状态机与编辑缺陷）
- **数据缺失工具：** Claude Code、OpenCode、Qwen Code 本期摘要未产出，暂无法评估活跃度

---

## 6. 值得关注的趋势信号

1. **Agent 权限隔离成为安全红线**  
   Copilot CLI 的 code-review 代理越权写入、Gemini CLI 的工作区信任隔离 PR，表明社区已不再接受“默认信任”模式。后续工具若缺乏显式沙箱与最小权限设计，将面临用户流失。

2. **上下文压缩从“可用”走向“可控”**  
   多个工具暴露压缩阈值不可配置、压缩策略盲区（如 CAPI 5MB 响应体限制）。开发者应关注 CLI 是否提供压缩触发条件、Token 预算上限与手动干预入口。

3. **计费透明度直接关联用户信任**  
   OpenAI Codex 的 Rate-limit 异常与 Kimi Code 的 429 限流长期未解，反映 Token 消耗与配额机制缺乏可观测性。生产环境选型时，建议优先验证工具的日志导出与成本预估能力。

4. **TUI/PTY 兼容性决定自动化上限**  
   Copilot CLI 的 PTY 输入忽略、Gemini CLI 的 Shell 交互阻塞，均影响 CI/CD 与脚本编排集成。若工具仅服务于交互式开发，将难以进入企业自动化链路。

5. **Rust/Go 原生 CLI 成为性能分水岭**  
   OpenAI Codex 与 Gemini CLI 均向 Rust/Go 迁移，以换取更低延迟与更好沙箱控制。TypeScript 方案在重型 Agent 场景下面临主线程阻塞风险（如 macOS FSEvents 递归 watcher 问题）。

---

**总结：** 2026 年 Q3 的 AI CLI 竞争焦点已从“能否调用模型”转向“能否在生产环境中安全、可控、可观测地运行 Agent”。开发者在选型时应重点考察权限隔离机制、上下文管理粒度、计费透明度及自动化集成能力。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
> 数据源：`anthropics/skills` 官方仓库 | 截止：2026-07-21

---

## 1. 热门 Skills 排行（高关注度 PR）

| 排名 | PR | 功能定位 | 社区讨论热点 | 状态 |
|:---:|:---|:---|:---|:---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) `fix(skill-creator): run_eval.py always reports 0% recall` | 修复 Skill 描述优化循环的核心评估脚本，解决 recall 恒为 0% 的阻塞性 Bug | Issue #556、#1169 集中复现；Windows 子进程/编码问题叠加，直接影响 `skill-creator` 工作流可用性 | OPEN |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) `Add document-typography skill` | 为 AI 生成文档提供排版质量控制（孤行/寡行/编号对齐） | 解决长报告、合同、论文生成的通用痛点，触发条件明确且无外部依赖 | OPEN |
| 3 | [#723](https://github.com/anthropics/skills/pull/723) `feat: add testing-patterns skill` | 覆盖测试哲学、单元测试、React 组件测试、集成测试的完整栈 | 软件工程刚需，社区对 AAA 模式、Testing Library 及边界用例指导需求强烈 | OPEN |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) `feat(skills): add self-audit` | 交付前机械文件验证 + 四维推理质量门禁 | 与 Issue #1385 高度呼应，反映用户对“AI 输出自审”和跨技术栈通用质检的强诉求 | OPEN |
| 5 | [#83](https://github.com/anthropics/skills/pull/83) `Add skill-quality-analyzer and skill-security-analyzer` | 为 Marketplace 引入 Skill 质量与安全双维度元分析工具 | 直接回应 Issue #492 信任边界问题，推动 Skill 上架前标准化审查 | OPEN |
| 6 | [#210](https://github.com/anthropics/skills/pull/210) `Improve frontend-design skill clarity and actionability` | 重构前端设计 Skill，提升指令可执行性与单轮对话适配度 | 早期高频 PR，用户反馈原版本偏理论化，需聚焦具体组件/布局决策 | OPEN |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) / [#538](https://github.com/anthrop

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：** 2026-07-21  
**数据来源：** [github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 今日速览
Codex 社区今日焦点集中在**桌面端性能稳定性、权限/沙箱架构演进与计费透明度**三大方向。内部工程团队密集合并了网络代理解析、Windows 沙箱执行、远程历史压缩等底层改进，同时 Rust CLI 发布 `0.145.0-alpha.25` 预研版本。社区层面，#28879 关于 rate-limit 成本异常飙升的反馈以 358+ 👍 持续占据首位，反映出 Plus/Pro 用户对配额机制与 Token 消耗的强烈不信任。

---

## 2. 版本发布
- **Rust CLI/SDK `v0.145.0-alpha.25`**  
  作为 0.145.0 系列的早期 Alpha 构建，主要面向核心开发者进行接口与运行时行为验证。当前仅发布标签，完整 Changelog 待后续 Release Notes 更新。  
  🔗 [Release 0.145.0-alpha.25](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.25)

---

## 3. 社区热点 Issues（精选 10）

| # | 主题 | 社区反应 | 链接 |
|---|------|----------|------|
| 1 | **Rate-limit 单次 Token 消耗飙升 10–20×**：Plus 用户反映 gpt-5.5 下 5h 预算在 2–3 个 Prompt 内耗尽，疑似计费/限流逻辑变更未同步文档。 | 208 评论 / 358 👍 | [Issue #28879](https://github.com/openai/codex/issues/28879) |
| 2 | **Linux 桌面版支持请求**：用户希望将已成熟的 macOS/Windows 应用扩展至 Linux，兼顾低功耗开发与服务器环境。 | 181 评论 / 801 👍 | [Issue #11023](https://github.com/openai/codex/issues/11023) |
| 3 | **Windows 11 应用频繁冻结/卡顿**：AMD Ryzen 5 + 32GB RAM 环境下 Microsoft Store 版本出现明显 UI 阻塞。 | 60 评论 / 68 👍 | [Issue #20214](https://github.com/openai/codex/issues/20214) |
| 4 | **后台进程轮询浪费 Token**：`cargo build/test` 等后台任务每次状态检查均触发全量历史 API 往返，严重消耗配额。 | 31 评论 / 29 👍 | [Issue #13733](https://github.com/openai/codex/issues/13733) |
| 5 | **UI 卡在 Thinking / Stop 失效**：Pro 用户在 macOS 上提交 Prompt 后界面无法中断，重启后 Turn 可能不可见。 | 16 评论 / 5 👍 | [Issue #24287](https://github.com/openai/codex/issues/24287) |
| 6 | **自动化 RRULE 时区计算错误**：Desktop Automations 的周计划调度将 `BYHOUR` 误按 UTC 解析，导致执行时间偏移。 | 15 评论 / 3 👍 | [Issue #26633](https://github.com/openai/codex/issues/26633) |
| 7 | **模型参数兼容性报错**：`gpt-5.3-codex-spark` 不支持 `reasoning.summary` 参数，配置层缺乏优雅降级。 | 14 评论 / 8 👍 | [Issue #31969](https://github.com/openai/codex/issues/31969) |
| 8 | **移动端直连无头远程 Linux**：希望 Codex Mobile 可作为控制层直接 SSH 至常驻服务器，无需桌面端在线。 | 12 评论 / 42 👍 | [Issue #23200](https://github.com/openai/codex/issues/23200) |
| 9 | **内置 `yeet` Skill 过度干预**：自动修改分支名与 PR 标题，且对 `jj` 等非 Git 工作流产生副作用，用户要求改为显式启用。 | 11 评论 / 26 👍 | [Issue #16127](https://github.com/openai/codex/issues/16127) |
| 10 | **macOS 侧边栏悬停/点击导致 UI 冻结 3–10s**：递归 FSEvents watcher 销毁引发主线程阻塞，属近期版本性能回退。 | 6 评论 / 0 👍 | [Issue #34376](https://github.com/openai/codex

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# 📅 Gemini CLI 社区动态日报 | 2026-07-21

## 1. 今日速览
Gemini CLI 今日推送 `v0.52.0-nightly.20260721` 版本，社区讨论重心高度聚焦于 **Agent 可靠性** 与 **A2A Server 安全加固**。多个 P1 级 Issue 暴露了子代理轮次恢复异常、泛化代理卡死及 Shell 交互阻塞等核心体验问题；PR 方面，工作区信任隔离与 MCP 发现超时修复成为本周期最重要的工程改进。

---

## 2. 版本发布
- **v0.52.0-nightly.20260721.gacae7124b** 已发布。
- 本次夜间版本为自动化构建产物，配套修复包括 A2A Server RCE 漏洞防护、MCP `tools/list` 快速失败机制、模型回退会话 ID 轮换及终端滚动体验优化。
- 🔗 [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

---

## 3. 社区热点 Issues（Top 10）
| 优先级 | Issue 摘要 | 社区反馈 | 🔗 链接 |
|:---:|:---|:---|:---|
| P1 | **子代理达到 MAX_TURNS 后仍被报告为 GOAL 成功**，掩盖了实际中断状态 |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报 | 2026-07-21

## 1. 今日速览
Copilot CLI 于昨日连续推送 v1.0.72 与 v1.0.73，重点修复了 `agentStop` 钩子死循环、Anthropic 子代理在额外目录配置下的调度异常，以及自定义指令相对链接解析问题。过去 24 小时社区活跃更新 Issue 共 21 条，讨论重心集中在**长会话上下文控制、Agent 权限隔离回归、跨终端剪贴板/输入兼容性**三大方向。

---

## 2. 版本发布
| 版本 | 发布日期 | 核心更新 |
|:---|:---|:---|
| **v1.0.73** | 2026-07-20 | 修复 Anthropic 子代理在配置 `--add-dir` 等额外目录时中断的问题；解决自定义 Agent 指令文件中相对链接的路径解析异常。<br>🔗 [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.73) |
| **v1.0.72** | 2026-07-20 | 修复 `agentStop` 拦截钩子在持续触发时无限循环的问题：CLI 将在连续 8 次拦截后强制结束本轮，并为钩子注入 `stop_hook_active` 标志位以支持自限逻辑；新增内嵌 Git 与 `gh` 认证的可选支持（原文截断）。<br>🔗 [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.72) |

---

## 3. 社区热点 Issues（精选 10 条）
1. **#1481 [CLOSED] SHIFT+ENTER 应触发换行而非执行** (👍17 / 💬27)  
   **关注理由**：长期存在的快捷键体验痛点，与主流聊天应用交互范式冲突。社区反馈强烈，现已关闭，预计随后续版本统一修正。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/1481)

2. **#3622 [OPEN] Windows 剪贴板复制静默失败** (👍4 / 💬4)  
   **关注理由**：从 v1.0.48 起出现回归，复制操作无报错但粘贴仍为旧内容，直接影响 Agent 输出复用工作流。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/3622)

3. **#2181 [OPEN] COPILOT_CUSTOM_INSTRUCTIONS_DIR 加载回归** (👍1 / 💬2)  
   **关注理由**：v1.0.9 不再加载指定目录下的 `.github/instructions/team.instructions.md`，而 v1.0.8 正常。团队级指令配置依赖者受波及。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/2181)

4. **#1688 [OPEN] 建议为 config.json 增加可配置的自动压缩阈值** (👍5 / 💬2)  
   **关注理由**：使用高容量慢速模型（如 Claude Opus 4.6）时，上下文膨胀在 CLI 内置压缩触发前已显著拉高延迟，社区呼吁将阈值纳入用户可控范围。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/1688)

5. **#4188 [OPEN] Plan Mode 权限回归：Shell 命令被阻断** (👍1 / 💬1)  
   **关注理由**：最新版本的计划模式禁止 `gh` 等 Shell 命令，破坏了通过工具调用补充计划上下文的原有工作流，被明确标记为回归。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/4188)

6. **#4195 [OPEN] Code-review 任务代理可越权修改父工作区** (👍0 / 💬0)  
   **关注理由**：声明为只读的 `agent_type: code-review` 原生 Task Agent 仍能写入共享工作区，存在多评审并行时的数据污染风险。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/4195)

7. **#4185 [OPEN] `--add-dir` 导致 Claude 子代理调度 400 错误** (👍0 / 💬0)  
   **关注理由**：与 v1.0.73 修复直接相关，错误提示 `maximum of 4 blocks with cache_control ... Found 5`，说明目录缓存块数量硬编码上限仍需优化。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/4185)

8. **#4183 [OPEN] 自动压缩无法避免 CAPI 5MB 响应体限制** (👍2 / 💬0)  
   **关注理由**：长工具调用会话即使未超 Token 上限，也可能因序列化响应超过 5MB 永久阻塞下一次模型调用，暴露压缩策略盲区。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/4183)

9. **#4180 [OPEN] TUI 忽略 PTY 输入，破坏自动化编排** (👍0 / 💬0)  
   **关注理由**：在 `pty.fork()`、`tmux send-keys`、`expect` 等程序化驱动环境中，TUI 完全忽略键盘输入，仅 Ctrl+C 有效，严重影响 CI/CD 与 Agent 编排集成。  
   🔗 [Issue](https://github.com/github/copilot-cli/issues/4180)

10. **#3747 [OPEN] `WAITFOR DELAY` 触发不可恢复超时（Poison Pill）** (👍1 / 💬1)  
    **关注理由**：任意模型下只要 Prompt 或读取文件包含该字符串即进入故障状态，暴露 CLI 对特定 SQL/脚本语法的误判与缺乏熔断机制。  
    🔗 [Issue](https://github.com/github/copilot-cli/issues/3747)

---

## 4. 重要 PR 进展
过去 24 小时内无公开 PR 更新记录

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报 | 2026-07-21

## 1. 今日速览
今日 `MoonshotAI/kimi-cli` 仓库无新版本发布，但核心工具链与状态管理模块迎来多项关键修复 PR。社区焦点集中在：`StrReplaceFile` 链式编辑计数缺陷、Goal Mode 外部等待时 Token 无限消耗、上下文压缩/Fork-Undo 状态不一致，以及 Windows 端升级迁移与 TUI 交互问题。此外，云端服务器持续 429 限流的高优先级 Issue 已跟踪超 48 天，反映远程部署场景的稳定性仍是当前最大痛点。

## 2. 版本发布
（本期无新版本发布）

## 3. 社区热点 Issues
> 注：本期数据共收录 6 条 Issue，以下按业务影响与技术紧迫度全量呈现。

**#2209 [OPEN] 云端服务器部署 Kimi Code CLI 持续 429 engine_overloaded 超 48 小时**
🔗 https://github.com/MoonshotAI/kimi-cli/issues/2209
📌 **重要性：** 直接影响远程/CI 场景的核心可用性。用户已升级至 v1.41.0 并使用 Kimi-k2.6/k2.5 等多模型，问题依旧。
💬 **社区反应：** 4 条评论、3 个 👍，已持续跟踪近两个月。用户已导出诊断文件，反映官方平台在高负载下的限流分级、自动降级与故障恢复机制仍需完善。

**#2526 [OPEN] StrReplaceFile reports too few total replacements for chained edits**
🔗 https://github.com/MoonshotAI/kimi-cli/issues/2526
📌 **重要性：** 文件编辑工具的基础逻辑缺陷。链式编辑时替换计数基于原始文件而非运行中内容，可能导致 Agent 输出统计失真与后续步骤误判。
💬 **社区反应：** 当日新建，复现描述精准，已直接触发对应 PR 修复。

**#2525 [OPEN] Goal mode: no-op continuation turns fire indefinitely while waiting on external conditions**
🔗 https://github.com/MoonshotAI/kimi-cli/issues/2525
📌 **重要性：** 暴露自主 Agent 模式在等待长耗时任务（远程训练、GPU 释放）时的状态机缺陷，持续燃烧 Token 并挤占上下文窗口。
💬 **社区反应：** 当日反馈，痛点明确，属于生产级自动化场景的阻塞性问题。

**#2523 [OPEN] Context compaction bug — Kimi Code reopens an already completed and deleted task**
🔗 https://github.com/MoonshotAI/kimi-cli/issues/2523
📌 **重要性：** 上下文压缩后任务状态回滚，可能导致 Agent 重复执行已关闭任务，影响工作流可靠性与审计追溯。
💬 **社区反应：** 当日反馈，附带 PDF 诊断，环境为 Windows NT

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 | 2026-07-21

## 1. 今日速览
过去 24 小时无新版本发布，但 Issue/PR 更新量显著。社区核心关注点集中在自托管 OpenAI 兼容 Provider 的超时回归、会话压缩链路的容错与重试机制，以及多源成本追踪的精度校准。同时，Amazon Bedrock、通义千问 Token Plan 等新 Provider 接入与扩展 API 的持续开放，表明平台正加速向多云适配、可观测性和第三方扩展生态演进。

## 2. 版本发布
本期无新版本发布。

## 3. 社区热点 Issues
| # | 标题 | 状态/热度 | 重要性分析 |
|---|------|-----------|

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (Codewhale) 社区动态日报 | 2026-07-21

## 1. 今日速览
过去 24 小时 DeepSeek TUI（项目内部代号 Codewhale）进入 v0.9.1 密集收敛期，共关闭 2

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*