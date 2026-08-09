# AI CLI 工具社区动态日报 2026-07-22

> 生成时间: 2026-07-22 01:43 UTC | 覆盖工具: 9 个

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



# AI CLI 工具社区动态横向对比分析报告（2026-07-22）

## 1. 生态全景
当前 AI CLI 工具已从“对话原型”全面进入**生产化冲刺期**。竞争焦点集中在 MCP 协议企业级适配、Agent/Fleet 细粒度编排、长上下文硬限治理以及本地/云端混合推理落地。终端稳定性、订阅计费透明度和权限边界成为跨工具的共性痛点。头部产品（Claude Code、Copilot CLI、DeepSeek TUI）保持高频迭代，Pi 凭借本地 llama.cpp 管理与确定性构建开辟差异化赛道，整体生态呈现“云端标准化 + 端侧可控性 + 工作流精细化”三轨并行态势。

## 2. 各工具活跃度对比
| 工具 | 今日 Release | Issue 动态 | PR 动态 | 核心进展 |
|:---|:---|:---|:---|:---|
| **Claude Code** | v2.1.217 | ≥3 条 Top 热点（Fable 5 计费拦截、setup-token 权益读取、1M 冷缓存死锁） | 未明确（文档对齐与集中修复） | Emoji 快捷补全、会话持久化告警、沙盒策略回退修复 |
| **OpenAI Codex** | ⚠️ 数据缺失 | - | - | 摘要生成失败，暂无有效数据 |
| **Gemini CLI** | ⚠️ 数据缺失 | - | - | 摘要生成失败，暂无有效数据 |
| **GitHub Copilot CLI** | v1.0.74-0（预发布） | ≥10 条 Top（#1305 26👍、#4012 16👍、#2193/#1518 各14👍） | ≈1（非核心） | Plan Mode 独立选模、MCP OAuth/CIMD/Resources 深度集成、Fleet 子代理默认模型需求 |
| **Kimi Code CLI** | 无 | 5 条重点（K2.5 Tool Calling 失效、MCP Schema 拦截、UI 抖动、Shell 输出膨胀） | 1（#2530 Shell 管道阻塞修复） | 终端交互稳定性优化、多模型协议解析容错、后台进程回收改进 |
| **OpenCode** | 无 | 多项活跃（含内存 Megathread、Web/Desktop 布局回退争议、Go 订阅余额同步异常） | 多项推进/合并（CodeMode 架构、Copilot 集成、流容错、Provider 兼容） | 架构重构与流式容错并行，Provider 协议适配持续深化 |
| **Pi** | v0.81.0 / v0.81.1 | ≥5 条（本地 LLM 扩展需求关闭、升级后 stream 崩溃关闭、Shrinkwrap 依赖隔离开放） | 未明确 | 本地 llama.cpp 模型管理落地、确定性构建归档、升级兼容性修复 |
| **Qwen Code** | ⚠️ 数据缺失 | - | - | 摘要生成失败，暂无有效数据 |
|

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：** 2026-07-22  
**来源：** `anthropics/skills` 官方仓库

## 1. 热门 Skills 排行
以下 PR 按社区反馈热度、Issue 交叉引用及更新活跃度综合排序：

| 排名 | Skill / PR | 功能定位 | 社区讨论热点 | 状态 |
|:---:|:---|:---|:---|:---:|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) `fix(skill-creator): run_eval.py recall=0%` | 修复 Skill 创建器评估脚本的致命缺陷 | 该 Bug 导致描述优化循环无法正确评估触发率，被多个 Issue 交叉引用为阻塞项 | Open |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) `self-audit` | 交付前自检：机械文件验证 + 四维推理质量门控 | 响应社区对 AI 输出“先验证后交付”的强需求，适用任何技术栈 | Open |
| 3 | [#83](https://github.com/anthropics/skills/pull/83) `skill-quality-analyzer` & `skill-security-analyzer` | 元技能：评估第三方 Skill 的结构质量与安全性 | 为 Marketplace 引入标准化审计工具，解决信任边界问题 | Open |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) `testing-patterns` | 全栈测试工作流：测试哲学、单元测试、React 组件测试 | 填补官方测试领域 Skill 空白，覆盖 AAA 模式与 Testing Library | Open |
| 5 | [#514](https://github.com/anthropics/skills/pull/514) `document-typography` | 文档排版质量控制：修复孤行、孤儿词、编号错位 | 解决 Claude 生成文档的通用痛点，用户极少主动要求但影响广泛 | Open |
| 6 | [#1302](https://github.com/anthropics/skills/pull/1302) `color-expert` | 色彩专业知识：命名系统、色域空间、应用场景表 | 垂直设计领域增强，最近更新极活跃（2026-07-21） | Open |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) `odt` | OpenDocument 格式创建、模板填充与解析 | 扩展对 LibreOffice/ISO 标准办公格式的原生支持 | Open |
| 8 | [#210](https://github.com/anthropics/skills/pull/210) `frontend-design` 改进 | 提升前端设计 Skill 的清晰度与可执行性 | 优化指令颗粒度，确保 Claude 可在单轮对话中准确遵循 | Open |

## 2. 社区需求趋势
从 Issues 反馈中提炼出四大核心方向：

* **🔒 安全与信任治理**：[#492](https://github.com/anthropics/skills/issues/492) 指出社区 Skill 冒充官方 `anthropic/` 命名空间的风险；[#412](https://github.com/anthropics/skills/issues/412) 和 [#1175](https://github.com/anthropics/skills/issues/1175) 分别呼吁引入 Agent 治理模式与 SharePoint 文档处理的安全上下文隔离。**信任边界与权限控制成为最高优先级议题。**
* **🤝 协作与分发标准化**：[#228](https://github.com/anthropics/skills/issues/228) 强烈要求支持组织级 Skill 共享库；[#16](https://github.com/anthropics/skills/issues/16) 提议将 Skills 暴露为 MCP 接口；[#189](https://github.com/anthropics/skills/issues/189) 反映插件安装导致的重复 Skill 问题。**生态正从个人工具向团队/企业级资产演进。**
* **🛠️ 工具链健壮性与跨平台**：[#556](https://github.com/anthropics/skills/issues/556)、[#1061](https://github.com/anthropics/skills/issues/1061)、[#1169](https://github.com/anthropics/skills/issues/1169) 集中反馈 `run_eval.py` 在 Windows 下的触发检测失败、编码错误与子进程兼容性问题。**开发者工具链的 Unix-first 假设正在阻碍 Windows 用户参与 Skill 构建。**
* **✅ 质量门控与自审核**：[#1385](https://github.com/anthropics/skills/issues/1385) 提出“预校准→对抗评审→交付验证”三段式管线；[#202](https://github.com/anthropics/skills/issues/202) 建议重构 `skill-creator` 使其更符合操作规范而非教学文档。**社区期待 Skill 具备内置的“交付前质检”能力。**

## 3. 高潜力待合并 Skills
以下 PR 具备明确的用户痛点支撑或跨 Issue 验证，近期落地概率较高：

1. **[PR #1298](https://github.com

---



# Claude Code 社区动态日报
**日期**：2026-07-22  
**数据源**：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. 今日速览
Claude Code v2.1.217 正式发布，重点增强提示词输入的 Emoji 快捷补全与会话保存异常告警。社区今日高度关注 Fable 5 上线首日的 Max 计划计费/权限拦截问题，以及 v2.1.216 沙盒策略回退导致的 Bash 工具调用失效和后台会话 fd 泄漏风险。插件生态（Hookify）与云端 Gateway 部署迎来一批集中修复与文档对齐。

---

## 2. 版本发布
**v2.1.217**
- **Emoji 快捷补全**：提示词输入框支持短代码自动补全（如输入 `:heart:` 生成 ❤️，输入 `:hea` 触发联想），可通过 `emojiCompletionEnabled` 配置项关闭。
- **会话持久化告警**：当转录写入失败（如磁盘空间不足）或会话因继承配置导致保存被关闭时，界面将主动弹出警告提示。

---

## 3. 社区热点 Issues
> 按影响力、评论数与复现严重度筛选 Top 10

1. **[BUG] Fable 5 在 Max 计划首日触发“usage credits required”并静默降级至 Opus 4.8**  
   26 条评论 | 9 👍  
   Fable 5 于 7/20 正式纳入 Max 标准权益，但客户端错误拦截并降级模型，直接影响付费用户体验。  
   🔗 https://github.com/anthropics/claude-code/issues/79337

2. **[BUG] `setup-token` 认证的 Max 账户调用 Fable 5 被错误要求消耗积分**  
   5 条评论 | 30 👍（社区最高票）  
   `inference-only` scope 无法读取订阅权益，导致长驻 Token 用户群体普遍受困。  
   🔗 https://github.com/anthropics/claude-code/issues/79360

3. **[BUG] 1M 上下文会话冷缓存后 ECONNRESET，且 `/compact` 同样失败**  
   2 条评论  
   约 520k tokens 的长会话一旦提示缓存失效即不可恢复，压缩机制本身也依赖完整上下文，形成死锁。  


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# 📅 GitHub Copilot CLI 社区动态日报
**日期**：2026-07-22  
**数据源**：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览
Copilot CLI 发布预发布版本 `v1.0.74-0`，核心亮点为 Plan Mode 独立模型选择与搜索容错优化。社区讨论高度聚焦于 **MCP 协议深度集成**（OAuth/CIMD、Resources/Prompts 支持）与 **Agent/Fleet 编排能力**，同时计划模式权限回归、长会话上下文压缩边界及终端嵌套兼容性成为近期高频痛点。

---

## 2. 版本发布
### 🚀 v1.0.74-0
- **新增**：`/model plan`（或 `/model --plan`）支持在 Plan Mode 中独立指定模型。可传入模型 ID、`off` 清空，或无参唤起选择器；退出 Plan Mode 后自动回退至会话主模型。
- **优化**：恢复历史搜索匹配时，兼容会话标题中的空白符差异，提升检索命中率。

> 🔗 [查看完整 Release](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues（Top 10）
| 优先级 | Issue | 核心议题 | 社区反应 | 链接 |
|:---:|:---|:---|:---|:---|
| 🔥 | #1305 | Remote OAuth MCP Server 需支持 CIMD 标准 | 26👍 / 4💬 | [Issue](https://github.com/github/copilot-cli/issues/1305) |
| ⚠️ | #4188 | Plan Mode 回归：新版本阻塞 Shell 命令执行 | 2👍 / 3💬 | [Issue](https://github.com/github/copilot-cli/issues/4188) |
| 🔥 | #2193 | 为 `/fleet` 子代理配置全局/项目级默认模型 | 14👍 / 3💬 | [Issue](https://github.com/github/copilot-cli/issues/2193) |
| ⚠️ | #4183 | 自动压缩无法规避 CAPI 5MB 请求体硬限制 | 5👍 / 2💬 | [Issue](https://github.com/github/copilot-cli/issues/4183) |
| 🐛 | #4163 | v1.0.71 Linux 下子进程未回收，僵尸进程持续累积 | 0👍 / 2💬 | [Issue](https://github.com/github/copilot-cli/issues/4163) |
| 🔥 | #1518 | 补充 MCP `resources` 与 `prompts` 原语支持 | 14👍 / 2💬 | [Issue](https://github.com/github/copilot-cli/issues/1518) |
| ⚠️ | #4012 | BYOK 场景下 `--reasoning-effort max` 误报不支持 | 16👍 / 2💬 | [Issue](https://github.com/github/copilot-cli/issues/4012) |
| 🐛 | #2595 | 后台 Agent 完成后被过早清理，`read_agent` 返回 Not Found | 0👍 / 2💬 | [Issue](https://github.com/github/copilot-cli/issues/2595) |
| ⚠️ | #3976 | 内置 `tgrep` 索引器在大型 Monorepo 无内存上限，触发 OOM | 0👍 / 1💬 | [Issue](https://github.com/github/copilot-cli/issues/3976) |
| 🐛 | #4206 | 内置 GitHub MCP 握手卡住时，环境 Footer 永久显示 `Loading:` | 1👍 / 1💬 | [Issue](https://github.com/github/copilot-cli/issues/4206) |

---

## 4. 重要 PR 进展
过去 24 小时内 **无实质性核心 PR 更新**。数据中仅出现一条 PR（[#3163](https://github.com/github/copilot-cli/pull/3163)），内容为非项目相关的显示器描述，未涉及 Copilot CLI 功能迭代或代码变更。当前开发重心主要体现在 Issue 讨论与预发布版本的特性验证中。

---

## 5. 功能需求趋势
- **MCP 协议全景补齐**：社区已从单一 `tools` 调用，转向要求完整支持 `resources/list-read`、`prompts`、`notifications/resources-updated` 及 `tools/list_changed`，企业级 OAuth/CIMD/Registry 策略适配成为刚需。
- **Agent/Fleet 编排精细化**：子代理默认模型继承、显式 Prompt 内链式调用、自定义 Agent 权限别名（如 `skill`）、按子代理拆分 AI Credit 用量统计。
- **模型配置灵活性**：Plan Mode 独立选模、BYOK 推理强度透传、预设模型快速切换、Refresh Token 静默续期替代强制交互登录。
- **长会话与资源治理**：上下文自动压缩需兼顾 CAPI 5MB 硬限、Monorepo 索引需设置内存上限、后台进程需完善 Wait/Reap 机制。

---

## 6. 开发者关注点
- **稳定性与资源泄漏**：僵尸进程累积、tgrep OOM、长工具调用会话触发 CAPI 5MB 失败，直接影响生产环境可用性。
- **终端嵌套兼容性**：tmux/screen 下输入框暗色渲染、剪贴板跨层失效、窗口失焦丢失按键事件，阻碍重度终端用户工作流。
- **企业合规与认证体验**：组织 Registry 拦截携带 Runtime Header 的 MCP 配置、Access Token 过期后未走 `refresh_token` 静默续期，增加运维摩擦。
- **工作流回归风险**：`v1.0.74-0` 前后 Plan Mode 权限收紧导致原有依赖 Shell/GitHub CLI 辅助规划的流程受阻，需在安全隔离与工作流连续性间取得平衡。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报 | 2026-07-22

## 1. 今日速览
过去24小时无新版本发布，社区讨论重心集中在终端交互稳定性、Shell 模式行为异常及多模型 Tool Calling 可靠性上。多个反馈涉及界面重渲染抖动、数字键盘事件缺失、K2.5/K3 模型工具调用失败及 MCP Schema 校验拦截。与此同时，一项针对 Shell 管道阻塞的修复 PR 已提交评审，有望缓解后台进程导致的命令挂起问题。

## 2. 版本发布
近24小时无新 Release。

## 3. 社区热点 Issues
> 注：以下为本统计窗口内更新的全部重点 Issue。

- **#2527 [bug] k2.5 模型 tool calling 完全失效 + goal mode 无限循环（必现）**
  严重度最高。K2.5 在 Goal Mode 下无法正确触发 Bash 等工具，且尝试多种格式均返回 `Tool not found`，随后陷入死循环。直接影响核心自动化工作流，建议官方优先排查协议解析与循环终止逻辑。
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/2527

- **#2531 MCP tool names & schemas rejected by Moonshot API (HTTP 400)**
  反映 MCP 集成中的 JSON Schema 校验过严问题。API 拒绝含 `anyOf` 但缺少顶层 `type` 定义的工具参数，需在客户端侧做兼容清洗。对依赖 MCP 生态的开发者影响较大。
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/2531

- **#2474 [bug] kimi code cli界面一直在各种抖动，莫名其妙重新从头渲染整个对话**
  长会话场景下的 UI 渲染稳定性问题。虽创建于6月，但昨日仍有跟进并获 2 👍，说明该体验缺陷持续存在，影响代码审查与上下文切换效率。
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/2474

- **#2529 [bug] 键盘右边的数字点击后，输入框没有反应**
  Windows 平台输入事件监听盲区，右侧数字键未正确绑定至输入框。属于高频交互细节，修复成本低但用户感知强。
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/2529

- **#2528 [bug] the output is too long when using the shell mode**
  Shell 模式下输入 `!` 触发历史搜索后接其他字符，导致输出异常膨胀。涉及命令行解析、历史匹配与输出截断机制，需优化边界处理。
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/2528

## 4. 重要 PR 进展
> 注：本统计窗口内仅 1 条 PR 更新。

- **#2530 fix(shell): stop blocking until timeout when a detached child holds the pipes**
  作者 ayaangazali。修复前台 Shell 路径中 `_run_shell_command` 在检查退出码前强制等待 stdout/stderr EOF 的逻辑缺陷。当命令包含脱离父进程的子任务（如 `some_daemon & echo done`）时，管道持有者会导致命令永久阻塞直至超时。该 PR 直接关联并有望解决 #2468，将显著提升 Shell 模式执行后台任务与混合命令的可靠性。
  🔗 https://github.com/MoonshotAI/kimi-cli/pull/2530

## 5. 功能需求趋势
从本期 Issue 与 PR 可提炼出三大演进方向：
- **终端交互与渲染引擎优化**：社区对按键事件覆盖、长对话 UI 稳定性、Shell 输出边界控制提出明确要求，反映出用户正从“基础可用”向“流畅生产工具”迁移。
- **模型协议与工具调用容错**：K2.5/K3 的 Tool Calling 格式兼容、Goal Mode 防循环机制、MCP Schema 严格校验等问题集中爆发，表明模型端与客户端的协议对齐仍需加强。
- **进程管理与跨平台一致性**：Shell 管道阻塞、不同键盘布局与系统事件差异，要求底层进程调度模块具备更强的平台抽象与资源释放能力。

## 6. 开发者关注点
当前开发者反馈的核心痛点集中在**执行可靠性**与**交互细节**两方面：
- **高频痛点**：界面频繁重渲染造成视觉干扰；部分键盘事件未被捕获；Shell 模式在处理后台进程或特殊历史命令时易挂起/输出失控；特定模型的工具调用解析失败且缺乏清晰的错误定位。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报
**日期**：2026-07-22  
**数据来源**：[anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. 今日速览
过去 24 小时 OpenCode 无新版本发布，社区讨论重心集中在 **Web/Desktop 新布局回退争议**、**Go 订阅余额同步异常** 以及 **多项核心稳定性修复** 上。Issues 中内存问题 Megathread 维持高位互动，PR 侧则有多个针对 CodeMode 架构、Copilot 集成、LLM 流容错及 Provider 协议兼容的关键改进正在推进或合并。

## 2. 版本

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 | 2026-07-22

## 1. 今日速览
Pi 连续发布 v0.81.0 与 v0.81.1，正式落地本地 llama.cpp 模型管理与可验证的确定性构建归档。过去 24 小时社区讨论高度集中在 v0.81.0 升级兼容性（流式崩溃、编辑校验失败、SDK 重试冻结）以及本地 LLM 官方扩展的落地方案上，多项关键缺陷已关闭或进入修复阶段。

## 2. 版本发布
- **v0.81.1**：新增可验证的 Release Source Archives，GitHub 发布资产现在包含确定性、带校验和的源码归档，并提供从发布源码重建独立二进制文件的文档指引。
- **v0.81.0**：核心更新为 **Local llama.cpp model management**，支持连接 llama.cpp router、搜索/下载 Hugging Face 模型，并通过实时进度条显式加载/卸载模型。
  - 📦 v0.81.1: https://github.com/earendil-works/pi/releases/tag/v0.81.1
  - 📦 v0.81.0: https://github.com/earendil-works/pi/releases/tag/v0.81.0

## 3. 社区热点 Issues
| # | 标题与链接 | 重要性 & 社区反应 |
|---|---|---|
| 1 | **[CLOSED] Official local LLM provider extension**<br>https://github.com/earendil-works/pi/issues/3357 | 官方本地 LLM 扩展的核心需求，支持 llama.cpp/Ollama/LM Studio 动态拉取模型列表。👍 43 / 30 评论，社区呼声极高，已推动 v0.81.0 落地。 |
| 2 | **[CLOSED] New Claude models work poorly with current Pi's edit tool**<br>https://github.com/earendil-works/pi/issues/6278 | 新 Claude 模型在编辑工具中约 20% 失败，因 LLM 自行注入 `new_text_x`、`type` 等非法字段触发校验拦截。👍 9 / 23 评论，直接暴露模型输出稳定性与工具 Schema 约束的冲突。 |
| 3 | **[OPEN] Move off Shrinkwrap**<br>https://github.com/earendil-works/pi/issues/5653 | 依赖锁定导致 `pi-ai` 与 `pi-coding-agent` 磁盘双份副本，API Provider Registry 的模块级 `Map` 相互隔离。19 评论，影响多 Provider 并发调用与扩展开发体验。 |
| 4 | **[CLOSED] Pi crashes after update to v0.81.0**<br>https://github.com/earendil-works/pi/issues/6915 | 恢复历史会话时抛出 `TypeError: streamFunction is not a function` 导致进程崩溃。同类报告 #6918 也快速跟进，已关闭说明团队已定位根因。 |
| 5 | **[OPEN] API for enhancing agent message markdown**<br>https://github.com/earendil-works/pi/issues/6747 | 希望开放消息 Markdown 变异接口，支持扩展层渲染公式/数学块而不污染发送给 L

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报
**日期**：2026-07-22  
**数据源**：`github.com/Hmbown/DeepSeek-TUI` / `Hmbown/CodeWhale`

## 1. 今日速览
过去 24 小时社区保持 v0.9.1 发布冲刺期的高频活跃，共更新 43 条 Issue 与 16 条 PR。核心进展围绕“单一真相源（Truthful Contract）”架构展开：子代理运行时契约、权限/路由/工作队列的确定性重构已基本合入，同时 TUI 基础体验（长输出滚动、回车延迟、worktree cwd 回退）的遗留缺陷获得针对性修复。项目仍处于最终 Dogfood 门禁阶段，未开放公开 Release。

## 2. 版本发布
过去 24 小时无新 Release 发布。v0.9.1 正在执行最终集成与发布门禁（Issue [#4650](https://github.com/Hmbown/CodeWhale/issues/4650) / PR [#4675](https://github.com/Hmbown/CodeWhale/pull/4675)），暂不对外推送。

## 3. 社区热点 Issues
1. **[CLOSED] #4

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*