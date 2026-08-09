# AI CLI 工具社区动态日报 2026-07-20

> 生成时间: 2026-07-20 01:59 UTC | 覆盖工具: 9 个

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



# AI CLI 工具社区动态横向对比分析报告（2026-07-20）

## 1. 生态全景
当前 AI CLI 工具已从“单轮代码补全”全面转向“自主 Agent 编排 + 长会话治理”阶段。跨平台客户端稳定性（macOS 资源失控、Windows 阻塞、ARM64 适配）成为制约用户体验的共性瓶颈，工程侧正集中攻坚底层渲染、内存回收与进程调度。与此同时，会话可逆性、流式 Hook 扩展、可观测性接入与安全沙箱落地标志着 CLI 工具开始具备生产级基础设施特征。开源项目（OpenCode、Qwen Code、DeepSeek TUI）在架构解耦与协议适配上提速明显，正在缩小与商业闭源工具的体验差距。

## 2. 各工具活跃度对比

| 工具 | Release 情况 | 追踪 Issues | 重要 PR / 更新 | 核心动态摘要 |
|:---|:---|:---:|:---:|:---|
| **Claude Code** | v2.1.215 发布 | ≥7 | 未披露 | 显式调用 `/verify`/`/code-review`；聚焦 Agent 编排、Git 工作树隔离与工具解析异常 |
| **OpenAI Codex** | 无 | ≥6 | 多 PR 合入（未计数） | 桌面端 macOS/Windows 性能攻坚；TUI 渲染、内存回收与多智能体会话状态优化 |
| **Gemini CLI** | v0.52.0-nightly | ≥3 | Dependabot 批量升级 | 夜间构建驱动；Generalist Agent 挂起、子代理轮次误报、Auto Memory 无限重试等 P1 Bug |
| **Copilot CLI** | 无 | ≥10（更新量 21） | 1（仅元数据） | Plan Mode 回归、语音静默失败、PTY/TUI 自动化兼容性问题集中爆发 |
| **Kimi Code CLI** | 无 | 4 | 8（7 项合入） | 会话状态一致性修复；`MessageDisplay` 流式钩子落地；跨设备远程控制需求持续高赞 |
| **OpenCode** | 无 | ≥10 | ≥8 | V2 架构加速；SQLite 膨胀、多模型自动发现呼声最高；NIM/Kimi 适配与共享工具包解耦推进 |
| **Pi** | — | 摘要失败 | — | 数据缺失，暂不纳入量化分析 |
| **Qwen Code** | v0.20.0 + v0.20.1-preview | ≥4 | 多项修复验证中 | Autofix 流程接管；Daemon 日志轮转；Subagent 状态隔离与 MCP/Web Search 集成 |
| **DeepSeek TUI** | 无 | 1（含已关闭） | 多项核心 PR 合入 | v0.9.x 稳定性加固；多 Agent 安全沙箱、MCP 热重载、Windows 适配与本地化推进 |

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|:---|:---|:---|
| **Agent 编排与子任务可靠性** | Claude Code、Gemini CLI、Copilot CLI、Qwen Code、DeepSeek TUI | 子代理生命周期管理、最大轮次误报成功、

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止**：2026-07-20｜**来源**：`anthropics/skills` 官方仓库

---

## 1. 热门 Skills 排行（PR 关注度 TOP 7）

| 排名 | PR | 功能定位 | 社区讨论热点 | 状态 |
|:---:|:---|:---|:---|:---|
| 1 | [#1367 Self-Audit](https://github.com/anthropics/skills/pull/1367) | 交付前自动审计：先机械校验文件完整性，再按损坏优先级进行四维推理审查。 | 与 Issue #1385 高度呼应，代表社区对“可信赖 Agent 交付”的核心诉求。 | `[OPEN]` |
| 2 | [#83 Skill Quality & Security Analyzer](https://github.com/anthropics/skills/pull/83) | 为 Skill 本身提供元质检：结构文档、安全性、触发逻辑等五维度评分。 | 解决 Skill 市场缺乏统一验收标准的痛点，具备生态基础设施属性。 | `[OPEN]` |
| 3 | [#723 Testing Patterns](https://github.com/anthropics/skills/pull/723) |

---



# Claude Code 社区动态日报 | 2026-07-20

## 1. 今日速览
Claude Code v2.1.215 正式发布，核心变更是将 `/verify` 与 `/code-review` 从自动触发改为显式调用。今日社区讨论焦点集中在并行会话的 Git 工作树隔离缺陷、工具调用解析异常（裸 `<invoke>` 文本泄露）以及子代理嵌套调度可靠性，反映出 Agent 编排与沙箱边界仍是当前最高优先级的工程挑战。

## 2. 版本发布
**v2.1.215**
- **变更内容**：Claude 不再默认自行运行 `/verify` 和 `/code-review` 技能，用户需主动输入对应指令触发。
- **社区反应**：该调整降低了自动审查对长上下文的干扰，但已有用户反馈希望保留按需自动运行的灵活性（[#79282](https://github.com/anthropics/claude-code/issues/79282)）。

## 3. 社区热点 Issues
| # | 主题 | 社区反馈 | 重要性说明 |
|---|------|----------|------------|
| [#64108](https://github.com/anthropics/claude-code/issues/64108) | 工具调用间歇性以纯文本形式输出（含异常 `court` token + 裸 `<invoke>`） | 30👍 / 16评论 | 直接破坏 CLI 执行链路，长会话中 Edit/Read 工具失效，影响 Opus 模型稳定性。 |
| [#28986](https://github.com/anthropics/claude-code/issues/28986) | VS Code 扩展面板显示当前模型与思维模式指示器 | 58👍 / 9评论 | 长期高频需求，提升 IDE 内多模型/Thinking 模式切换的可视性。 |
| [#64624](https://github.com/anthropics/claude-code/issues/64624) | 生成过程中实时介入/转向（无需中断队列） | 12👍 / 8评论 | 改善交互控制体验，当前仅支持 Escape 丢弃，缺乏细粒度转向能力。 |
| [#75043](https://github.com/anthropics/claude-code/issues/75043) | 嵌套子代理完成通知丢失、TaskStop 所有权报错 | 3👍 / 13评论 | 暴露 Agent 编排架构中父/子生命周期管理与异步回调的深层缺陷。 |
| [#75607](https://github.com/anthropics/claude-code/issues/75607) | 服务端实验静默移除 Opus 思考摘要，且 CLI 绕过 `autoUpdates: false` 自动更新 | 8👍 / 6评论 | 涉及配置透明度与用户控制权，引发对“静默覆盖”行为的信任担忧。 |
| [#74805](https://github.com/anthropics/claude-code/issues/74805) | Intel Mac + AMD dGPU 高负载并行 CLI 触发内核恐慌 | 0👍 / 3评论 | 平台级稳定性问题，WindowServer watchdog timeout 可能导致系统级崩溃。 |
| [#77268](https://github.com/anthropics/claude-code/issues/77268) | 工作树回收销毁活跃兄弟会话的工作树（含锁定与未提交内容） | 0👍 / 2评论 | 存在严重数据丢失风险，直接影响并行开发场景。 |
| [#79234](https://github.com/anthropics/claude-code/issues/79234) | `chip/sp

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报 | 2026-07-20

## 1. 今日速览
过去 24 小时 OpenAI Codex 无新版本发布，但社区讨论热度显著集中在**桌面端性能与稳定性**上。macOS `syspolicyd`/`trustd` 资源失控与 Windows 多起卡顿、崩溃、安全软件冲突反馈获得高赞，反映出跨平台客户端适配仍是当前最大痛点。与此同时，团队密集合入了一批聚焦 **TUI 渲染优化、内存回收与多智能体会话状态管理** 的 PR，显示工程侧正全力攻坚底层体验瓶颈。

## 2. 版本发布
过去 24 小时无新 Release。

## 3. 社区热点 Issues
以下 10 条 Issue 按社区关注度、技术影响面及趋势代表性筛选：

| # | 主题 | 重要性 & 社区反应 | 链接 |
|---|------|-------------------|------|
| #25719 | macOS 触发 `syspolicyd`/`trustd` CPU 与内存失控 | 255👍 / 65评论。高频资源滥用问题，直接影响 macOS 用户体验，社区期待官方排查 Electron/原生模块调用策略。 | [Issue](https://github.com/openai/codex/issues/25719) |
| #20214 | Windows 11 频繁卡顿/冻结 | 68👍 / 54评论。在硬件资源充足情况下仍出现 UI 阻塞，指向 Windows 端主线程调度或渲染管线问题。 | [Issue](https://github.com/openai/codex/issues/20214) |
| #33375 | Windows `serialport.node` delay-load 失败导致严重 UI 延迟 | 30👍 / 46评论。**已关闭**。虽已修复，但暴露了 Windows 原生 Node 模块加载链路的脆弱性。 | [Issue](https://github.com/openai/codex/issues/33375) |
| #33780 | Windows 启动后 HID 设备枚举阻塞导致“无响应” | 8👍 / 39评论。新发且复现路径清晰，单个 HID 设备不响应即可卡死主进程，属于阻塞级缺陷。 | [Issue](https://github.com/openai/codex/issues/33780) |
| #3000 | IDE 扩展支持语音转录 | 193👍 / 33评论。长期高赞功能需求，开发者希望直接在 Codex 面板内 Push-to-Talk 输入 Prompt。 | [Issue](https://github.com/openai/codex/issues/3000) |
| #28058 | MultiAgentV2 加密消息破坏审计轨迹 | 99👍 / 21评论。回归缺陷，加密多智能体通信后 CLI 无法查看可读任务日志，影响企业调试与合规审查。 | [Issue](https://github.com/openai/codex/issues/28058) |
| #

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报
**日期**：2026-07-20  
**数据源**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日速览
Gemini CLI 发布 `v0.52.0-nightly.20260720` 夜间构建版本，Dependabot 集中推进了数十项依赖与安全升级。社区过去 24 小时的核心议题高度集中在 **Agent 调度可靠性** 与 **记忆系统稳定性**：Generalist Agent 挂起、子代理最大轮次误报成功、Shell 命令假死等 P1 Bug 获得大量关注，同时 Auto Memory 的无限重试、脱敏与权限边界问题引发安全与维护者讨论。

---

## 2. 版本发布
- **v0.52.0-nightly.20260720.gacae7124b**
  今日夜间版本已推送，主要配合依赖升级与内部构建流水线更新。完整变更日志：[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b)

---

## 3. 社区热点 Issues
| # | 标题与链接 | 重要性分析 | 社区反应 |
|---|---|---|---|
| 1 | [Generalist agent hangs (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 核心功能阻断：委托通用代理后永久挂起，简单操作也无法完成。 | 8 👍、7 评论，社区复现意愿强，标注 `need-retesting`。 |
| 2 | [Subagent recovery after MAX_TURNS reported as GOAL success (#22323)](https://github.com/google

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**日期**：2026-07-20  
**数据来源**：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览
今日 Copilot CLI 无新版本发布，但 Issue 更新量达 21 条，社区活跃度显著。核心焦点集中在 **Plan Mode 回归与稳定性**、**语音/多模态模型静默失败**、**自动化编排兼容性（PTY/TUI）** 以及 **长会话上下文管理死锁** 等问题。开发者对可观测性增强、企业端路由隔离及 TUI 交互细节的诉求持续上升。

---

## 2. 版本发布
过去 24 小时内 **无新 Release**。当前主要版本仍为 `1.0.72-0` 及相关桌面端构建。

---

## 3. 社区热点 Issues（Top 10）

| 优先级 | Issue | 重要性说明 | 社区反应 |
|:---:|:---|:---|:---|
| 🔴 | [#4024](https://github.com/github/copilot-cli/issues/4024) Voice mode 所有内置 ASR 模型静默失败 | 语音转录核心链路中断，MultiModalProcessor 路由 nemotron_speech (RNNT) 存在 Bug，三个 `/voice` 模型均返回空文本。 | 13 条评论，作者已提供 PulseAudio 捕获验证，处于定位阶段。 |
| 🔴 | [#1857](https://github.com/github/copilot-cli/issues/1857) 允许取消或移除已排队的消息 | 长期阻塞的 UX 缺陷：消息入队后无法撤销，影响 `/compact` 或 Agent 忙碌时的操作容错。 | **24 👍**，历史高热度需求，社区呼声最强。 |
| 🔴 | [#4188](https://github.com/github/copilot-cli/issues/4188) Plan Mode 回归：阻塞 Shell 命令 | 最新版 Plan Mode 意外拦截 `gh` 等 shell 命令，破坏原有计划生成工作流。 | 今日新增，明确标注为 Regression，需紧急修复。 |
| 🟠 | [#4185](https://github.com/github/copilot-cli/issues/4185) `--add-dir` 导致 Claude 子代理 400 报错 | 传入目录参数后，Anthropic 模型子任务调度因 `cache_control` 块数超限（5 vs 4）直接失败。 | 清晰复现路径，影响多目录项目子代理分发。 |
| 🟠 | [#4180](https://github.com/github/copilot-cli/issues/4180) TUI 在 PTY 中忽略所有键盘输入 | 破坏 `tmux send-keys`、`expect`、`pty.fork()` 等自动化/编排场景，CLI 仅响应 Ctrl+C。 | 关键基础设施兼容性问题，影响 CI 与 Agent Orchestrator。 |
| 🟠 | [#4183](https://github.com/github/copilot-cli/issues/4183) 自动压缩无法防止 CAPI 5MB 请求体失败 | Token 未超限，但序列化响应体触及 5MB 硬限制，导致会话永久无法继续调用模型。 | 暴露上下文管理策略缺陷，长会话/重工具调用场景高风险。 |
| 🟡 | [#4172](https://github.com/github/copilot-cli/issues/4172) GPT-5.6 系列退出 Plan Mode 不稳定 | 新模型保存计划后不提示用户下一步操作，交互流程断裂。 | 涉及最新模型兼容性，需验证路由与状态机逻辑。 |
| 🟡 | [#3725](https://github.com/github/copilot-cli/issues/3725) 为 Skill 级调用添加 OpenTelemetry Spans | 当前 Tool Calls 仅作为根 `invoke_agent` span 的平铺子节点，缺乏 Skill 归属与链路追踪。 | 企业可观测性刚需，对齐 APM 最佳实践。 |
| 🟡 | [#4175](https://github.com/github/copilot-cli/issues/4175) 云项目会话无需 Repository Checkout 即可启动 | 会话报告成功创建，但缺少工作区、终端与可执行环境，后续无法实施/验证。 | 影响云端开发工作流可靠性，需增加前置校验。 |
| 🟡 | [#4177](https://github.com/github/copilot-cli/issues/4177) Desktop 应用将 public `github.com` Issue 链接路由至企业 Host | 混合网络环境下打开公开链接会发往 Enterprise API，导致加载失败。 | 安全/路由隔离 Bug，影响双租户部署体验。 |

---

## 4. 重要 PR 进展

> 注：过去 24 小时数据窗口内仅更新 **1 条 PR**，均为仓库元数据治理类提交，无产品代码变更。

- [#1](https://github.com/github/copilot-cli/pull/1) `Create ownership.yaml`（CLOSED）  
  创建仓库维护者/所有权声明文件，属于开源治理合规项，不涉及 Copilot CLI 功能或修复。

目前暂无活跃的功能 PR 进入 Review/Merge 阶段。

---

## 5. 功能需求趋势

1. **Plan Mode 与 Agent 工作流可靠性**：社区高度关注 Plan Mode 的 Shell 拦截回归、GPT-5.6 退出状态机异常、子任务权限门控残留（`#4188`, `#4172`, `#4173`），期望状态流转更健壮。
2. **可观测性与自动化集成**：OpenTelemetry Skill Spans、ACP Token/上下文暴露、PTY/TUI 自动化兼容（`#3725`, `#4174`, `#4180`）反映出企业编排、

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报
**日期：** 2026-07-20  
**数据源：** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览
今日 Kimi Code CLI 社区焦点集中在**会话状态一致性修复**与**流式交互扩展**两条主线。核心维护者主导的多个 PR 批量解决了 `/undo`、`/fork` 上下文截断错位、系统提示词冻结及重启重复上传等高频体验问题；同时 `MessageDisplay` 流式钩子正式进入开发，标志着 CLI 正逐步补齐实时消费与外部集成能力。权限规则文档矛盾与跨设备远程控制需求持续引发社区讨论。

---

## 2. 版本发布
（过去 24 小时内无新 Release）

---

## 3. 社区热点 Issues

| # | 标题摘要 | 关注度/反应 | 重要性说明 |
|---|---|---|---|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Feature Request: Remote Control - 跨设备继续本地会话 | 👍 13 · 💬 5 | 长期高赞需求，反映开发者对“桌面终端 ↔ 移动/浏览器”无缝切换的强诉求，直接影响工作流连续性。 |
| [#2508](https://github.com/MoonshotAI/kimi-cli/issues/2508) | Permission rules: deny overrides allow，与文档冲突 | 👍 0 · 💬 1 | 安全/权限模型的实际行为与官方文档描述不一致，可能误导企业或高阶用户的策略配置。 |
| [#2517](https://github.com/MoonshotAI/kimi-cli/issues/2517) | `/undo` and `/fork` truncate context.jsonl at wrong turn | 👍 0 · 💬 0 | 直接破坏会话可逆性与历史回溯准确性，已在 compacted/steered 场景复现，属于核心路径缺陷。 |
| [#2511](https://github.com/MoonshotAI/kimi-cli/issues/2511) | feat(hooks): mid-turn streaming hook for live reply consumers | 👍 0 · 💬 0 | Hooks 系统当前仅支持回合结束事件，缺失流式中间回调，限制了实时 TTS、增量日志、进度 UI 等第三方集成。 |

> 注：本期数据窗口内共 4 条活跃 Issue，均已纳入分析。

---

## 4. 重要 PR 进展

### 🔧 核心修复与功能
- [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) **fix(session): align fork/undo context truncation to wire turns**  
  修复 `/undo` 与 `/fork` 在上下文压缩或转向会话中的截断错位问题，同步解决 #1974 及 #2049 的历史不匹配根因，并新增回归测试。
- [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518) **fix(web): persist uploads .sent marker**  
  修复 `kimi web` 重启后重复发送已上传图片/文件导致会话污染的问题（关闭 #2413）。
- [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) **fix(app): refresh stale frozen system prompt on session resume**  
  恢复会话时不再无条件沿用 `context.jsonl` 中冻结的系统提示词，使 `~/.kimi/skills/` 变更与 `AGENTS.md` 编辑能正确生效（关闭 #2420）。
- [#2513](https://github.com/MoonshotAI/kimi-cli/pull/2513) **fix(kosong): recursively decode double-encoded tool-call arguments**  
  兼容 Moonshot API 返回的嵌套 JSON 字符串参数，修复单次 `json.loads` 后仍为字符串导致 Pydantic 校验失败的问题。
- [#2514](https://github.com/MoonshotAI/kimi-cli/pull/2514) **fix(skill): ignore stray markdown in plugins container**  
  修正 Skill 发现逻辑，避免将插件容器内的游离 `.md` 文件误识别为独立 Skill，符合官方插件目录规范。

### ⚡ 性能与扩展
- [#2515](https://github.com/MoonshotAI/kimi-cli/pull/2515) **perf(kosong): buffer stream merges and avoid deep-copying every delta**  
  优化 LLM 流式合并路径：缓冲小 chunk 合并，移除每轮回调的 `deepcopy`，消除长回复场景下的二次复杂度与内存开销。
- [#2512](https://github.com/MoonshotAI/kimi-cli/pull/2512) **feat(hooks): add MessageDisplay hook for mid-turn streaming**  
  新增 `MessageDisplay` 事件，在助手回复流式生成期间反复触发，支持实时播报、增量日志与进度 UI，关闭 #2511。

### 🗑️ 已关闭
- [#2516](https://github.com/MoonshotAI/kimi-cli/pull/2516) **Create kimi-cli**  
  已关闭。内容过于简略且未提前与维护者对齐，不符合 PR 提交流程规范。

---

## 5. 功能需求趋势

1. **会话状态管理与可逆性**：`/undo`、`/fork`、会话恢复、文件上传标记等 Issue/PR 高度密集，说明用户已将 CLI 用于较长周期的真实项目，对历史一致性、操作可回滚、状态热加载的要求显著提升。
2. **实时流式集成能力**：`MessageDisplay` 钩子的提出与落地，反映社区希望将 Kimi Code CLI 嵌入实时 TTS、辅助驾驶/编码仪表盘、增量审计等外部消费链路。
3. **跨端/远程工作流**：#1282 的持续高赞表明“本地重型会话 + 移动端轻量接管”已成为明确的产品方向预期。
4. **安全与权限模型透明度**：文档与行为不一致的问题会直接削弱企业用户对 CLI 自动化部署的信任，后续需强化权限规则的文档校验与测试覆盖。
5. **API 兼容性打磨**：双编码工具参数、本地 Mock Provider 边界条件等修复显示，随着接入平台增多，CLI 需保持对多后端格式差异的鲁棒适配。

---

## 6. 开发者关注点

- **痛点一：会话恢复与历史回滚存在边界缺陷**。重启丢标记、提示词冻结、上下文截断错位等问题集中暴露了 `context.jsonl` 状态机在复杂会话流下的脆弱性，是当前体验优化的第一优先级。
- **痛点二：文档即契约意识待加强**。权限规则 `deny` 优先于 `allow` 的实际行为与文档描述相悖，开发者在编写自动化策略时容易踩坑，建议维护团队建立文档-代码双向校验机制。
- **痛点三：Hook 生态正从“回合级”向“流式级”演进**。现有 Hook 仅能在回合结束时消费结果，无法满足实时反馈场景；`MessageDisplay` 的引入将显著降低第三方工具集成门槛。
- **痛点四：长响应性能与内存开销敏感**。流式合并路径的深拷贝与字符串拼接问题在高 Token 输出下影响明显，性能优化类 PR 获得关注说明开发者对 CLI 响应延迟有较高要求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 | 2026-07-20

## 1. 今日速览
今日无新版本发布，但社区在 V2 架构稳定性与多模型兼容性上的推进明显加速。PR 端聚焦于事件流作用域重构、SQLite 自动恢复、NVIDIA NIM/Kimi 模型深度适配；Issue 端则持续暴露本地数据库无限膨胀、Plan/Build 工作流连贯性及 OpenAI 兼容端点自动发现等高频痛点。

## 2. 版本发布
过去 24 小时无新 Release。

## 3. 社区热点 Issues
| 优先级 | Issue | 摘要与社区反应 |
|:---:|:---|:---|
| 🔥 | [#6231](https://github.com/anomalyco/opencode/issues/6231) **Auto-discover models from OpenAI-compatible provider endpoints** | LM Studio/Ollama 等本地提供商需手动维护模型列表，极度繁琐。👍182 / 💬25，社区呼声最高，属长期核心需求。 |
| 🔥 | [#7801](https://github.com/anomalyco/opencode/issues/7801) **Plan Mode + Question tool 可自动切换至 Build 模式** | 计划确认后应无缝进入执行阶段，避免重复确认。👍26，反映用户对工作流自动化的高期待。 |
| 📌 | [#33356](https://github.com/anomalyco/opencode/issues/33356) **[2.0] event 表无界增长，opencode.db 突破 13GB** | 长驻实例缺少事件压缩/保留策略，磁盘迅速打满。生产环境稳定性隐患，需纳入 2.0 架构治理。 |
| 📌 | [#36285](https://github.com/anomalyco/opencode/issues/36285) **2.0: managed-service restart causes reconnect herd** | 托管服务重启导致所有 TUI 同时重连、冷启动 location graphs，引发资源尖峰与渲染卡顿。 |
| 📌 | [#19130](https://github.com/anomalyco/opencode/issues/19130) **Windows ARM64 native: OpenTUI 初始化失败** | 非交互式命令正常，但 TUI 因 `bun:ffi dlopen TinyCC` 报错无法启动。ARM64 Windows 适配缺口。 |
| 📌 | [#9955](https://github.com/anomalyco/opencode/issues/9955) **TUI padding 过多，垂直空间利用低效** | 首尾行可合并，聊天区域高度不合理。👍17，桌面端 UX 优化诉求明确。 |
| ⚠️ | [#35265](https://github.com/anomalyco/opencode/issues/35265) **ResourceExhausted: Worker local total request limit reached** | 本地请求限制触发，用户反馈已有 Rate Limiter 方案但未彻底解决并发瓶颈。 |
| ⚠️ | [#20699](https://github.com/anomalyco/opencode/issues/20699) **Agent sends duplicate message** | 简单问候也会生成两条助手响应，一条隐藏一条可见为空，核心对话逻辑存在缺陷。 |
| ⚠️ | [#37745](https://github.com/anomalyco/opencode/issues/37745) **OpenAI cache writes always reported as 0** | 自 5.6 起 OpenAI 对 Cache Write 收费，但 OpenCode 未正确上报写入次数，影响成本核算。 |
| ⚠️ | [#37789](https://github.com/anomalyco/opencode/issues/37789) **Plan mode 切换 Build 后重新询问确认** | 与 #7801 同源痛点，确认循环直接浪费 Token 并打断开发节奏。 |

## 4. 重要 PR 进展
| 类型 | PR | 更新内容 |
|:---:|:---|:---|
| 🐛 | [#37833](https://github.com/anomalyco/opencode/pull/37833) | 修复 NVIDIA NIM 上 DeepSeek V4 Flash/Pro 请求挂起问题，提升兼容提供商稳定性。 |
| ✨ | [#37696](https://github.com/anomalyco/opencode/pull/37696) | 为 Kimi/Moonshot Anthropic 兼容端点接入 `thinking.type="adaptive"` 自适应思考协议。 |
| 🏗️ | [#37828](https://github.com/anomalyco/opencode/pull/37828) | 抽取 `@opencode-ai/util` 共享工具包，将 CLI/Core/Server/TUI 等基础设施解耦，减少循环依赖。 |
| 🐛 | [#37822](https://github.com/anomalyco/opencode/pull/37822) | 启动时自动检测并恢复损坏的 SQLite 数据库，避免 `database disk image is malformed` 崩溃。 |
| 🐛 | [#35654](https://github.com/anomalyco/opencode/pull/35654) | Git diff 命令加入 `--ignore-cr-at-eol`，修复 Windows 下 Review/Changes 面板显示全文件修改的问题。 |
| 🐛 | [#37831](https://github.com/anomalyco/opencode/pull/37831) | 修复 GitHub Actions OIDC `sub` claim 含不可变 `@id` 后缀时的安装令牌解析失败。 |
| 🐛 | [#37832](https://github.com/anomalyco/opencode/pull/37832) | 修复 Desktop 切换会话时旧版会话面板残留陈旧内容的问题。 |
| ♻️ | [#36286](https://github.com/anomalyco/opencode/pull/36286) | 移除 TUI

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 | 2026-07-20

## 1. 今日速览
Qwen Code 于 v0.20.x 窗口进入高频迭代期，v0.20.0 稳定版与 v0.20.1-preview.7215 预览版相继更新，核心聚焦 Autofix 流程接管与 Daemon 资源治理。社区围绕多智能体（Subagent）状态隔离、内置 Web Search 落地及 SSE/Daemon 连接泄漏修复展开密集讨论，多项 P0/P1 级稳定性问题已进入合并或验证阶段。

---

## 2. 版本发布
| 版本 | 核心更新摘要 |
|:---|:---|
| **v0.20.1-preview.7215** | 修复 Autofix 强制调度场景下的 Green No-Op 问题；实现基于 Label 的接管与释放机制，提升自动化修复流程的可控性。 |
| **v0.20.0** | 稳定版发布。新增 CLI Bounded Daemon 日志轮转（[#6969](https://github.com/QwenLM/qwen-code/pull/6969)），完善后台服务可维护性。完整变更列表见官方 Changelog。 |

🔗 Releases: [v0.20.1-preview.7215](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-preview.7215) · [v0.20.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0)

---

## 3. 社区热点 Issues
1. **[P1 Bug] Subagent 静默覆盖主会话模型，引发上下文溢出** [#7156](https://github.com/QwenLM/qwen-code/issues/7156)  
   背景 Agent 完成通知触发后，主会话模型被意外切换，导致致命 400 错误。评论 11 条，反映多智能体状态隔离是当前最紧迫的核心缺陷。
2. **[性能] 优化 Daemon 冷启动与 qwen serve 快路径延迟** [#4748](https://github.com/QwenLM/qwen-code/issues/4748)  
   早期 Daemon 冷启动约 2.5s，显著慢于 CLI 初始化。近期 Listener/Health 路径已大幅优化，该 Issue 正追踪剩余瓶颈。
3. **[集成] MCP Server 始终无法成功获取工具/资源列表** [#7147](https://github.com/QwenLM/qwen-code/issues/7147)  
   Fastmail 等第三方 MCP 服务在其他 Agent 中可用，但在 Qwen Code 中认证通过后工具列表请求超时，阻碍生态接入。
4. **[Feature] 添加专用 `web_search` 工具** [#4801](https://github.com/QwenLM/qwen-code/issues/4801)  
   社区长期呼声：希望原生支持真实网页搜索，而非

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报 | 2026-07-20

## 1. 今日速览
过去 24 小时 DeepSeek TUI 无新 Release，但 v0.9.x 分支的工程化更新极为密集。社区焦点集中在**多 Agent 安全沙箱落地、Windows 平台兼容性修复、MCP 工具池热重载及性能优化**四大方向。多项核心 PR 已合并进入主分支，Blue Stage 交互规范与本地化体验同步推进。

## 2. 版本发布
本期无新版本发布。当前开发重心为 v0.9.x 稳定性加固、安全门控策略调优及 Web 检索管线集成。

## 3. 社区热点 Issues
> 本期共追踪 6 条活跃 Issue，均为高优先级工程/体验问题。

1. **#4042 [CLOSED] 环境级工具沙箱：子 Agent 工具限制运行时强制执行**
   - **摘要**：实现跨 Session、Sub-agent、Fleet Worker 及 MCP Server 的 `--disallowed-tools` 运行时校验，补齐多 Agent 执行上下文的安全缺口。
   - **社区反应**：16 条评论，

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*