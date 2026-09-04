# OpenClaw 生态日报 2026-09-04

> Issues: 126 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-04 12:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw (openclaw/openclaw) 项目日报
**生成日期：** 2026-09-04
**数据范围：** 2026-09-03 00:00:00 至 2026-09-04 23:59:59

---

## 1. 今日速览

过去 24 小时项目保持高活跃度，**Issues 新增 99 条，关闭 27 条**，社区讨论热度显著；**PR 更新 500 条**，待合并 326 条，代码提交量巨大，显示出维护者正在积极进行大规模代码清理与重构。今日核心亮点为 **v2026.9.1** 版本的发布，带来了跨平台的 Mermaid 图表渲染能力增强以及从安装到聊天的全链路体验优化。尽管新版本带来了重大功能提升，但社区也反馈了大量关于进程泄漏、会话状态丢失、Gateway 崩溃循环以及特定模型（如 DeepSeek V4）的成本计算错误的 Bug，项目在快速迭代的同时，稳定性仍需持续关注。

---

## 2. 版本发布

**v2026.9.1 (2026-09-04)**

本次发布是功能增强与用户体验优化的集中体现，重点提升了可视化交互和移动端体验。

*   **Mermaid 图表支持：** 在 Control UI 以及原生 macOS、iOS、Android 应用中，Mermaid 代码块现在可以渲染为图表。针对移动端，增加了图表放大预览功能，并在渲染失败时提供重试机制。
*   **全链路体验优化：** 宣称实现了从安装到聊天的无缝体验（"From install to chat"），旨在降低用户上手门槛。
*   **稳定性修复：** 包含一系列针对 Gateway 进程管理、资源清理和会话状态的修复（详见 Bug 稳定性部分）。

**迁移注意事项：**
*   更新后，用户在移动端查看对话历史时，如果包含 Mermaid 代码块，将看到渲染后的图表而非原始文本。
*   某些插件在重新加载时可能触发 Gateway 的状态重置，需注意现有会话可能受到的影响。

---

## 3. 项目进展

今日社区贡献活跃，合并/关闭了多个高优先级 PR，主要集中在 Web UI 稳定性、插件系统重构和跨平台兼容性上。

*   **Web UI 稳定性修复 (PR #138155):** 合并了修复 Control UI 在历史记录水合时 Canvas 预览重复和错位的修复，解决了用户界面显示异常的问题。
*   **插件系统重构 (PR #138216):** 移除了未使用的私有插件适配器，减少了代码冗余，提升了插件加载机制的清晰度。
*   **跨平台改进 (PR #138137):** 简化了 macOS 节点配对流程，优化了权限描述，改善了 Apple 平台的用户体验。
*   **Agent 核心修复 (PR #137381):** 修复了 `sessions_yield` 在处理长会话时导致历史记录不可用的问题，增强了会话持久化的健壮性。
*   **依赖与测试升级 (PR #138264):** 开始迁移到 Vitest 5，以获取更好的测试性能和工具支持。

---

## 4. 社区热点

今日最受关注的热点集中在 **Gateway 崩溃循环**、**插件升级导致的状态泄漏** 以及 **特定功能的 Bug 修复** 上。

1.  **Gateway 崩溃循环 (Issue #135171, #111372):**
    *   **热度：** 评论数 10+
    *   **摘要：** 2026.8.1/2026.8.2 版本中，Gateway 因 Perplexity 插件权限问题或配置加载问题进入无限重启循环。
    *   **状态：** 已关闭。
    *   **链接：** [Issue #135171](https://github.com/openclaw/openclaw/issues/135171)

2.  **进程泄漏与僵尸进程 (Issue #97616):**
    *   **热度：** 评论数 10+
    *   **摘要：** OpenClaw 泄漏了未回收的 hook/tool 子进程，导致僵尸进程累积和运行时性能下降，影响生产环境稳定性。
    *   **状态：** 开放 (P1 级别)。
    *   **链接：** [Issue #97616](https://github.com/openclaw/openclaw/issues/97616)

3.  **插件安装遗留问题 (Issue #138227):**
    *   **热度：** 评论数 4 (今日新增)
    *   **摘要：** `plugins install` 升级插件时未清理旧版本，导致新旧版本冲突，Gateway 崩溃。
    *   **状态：** 已关闭。
    *   **链接：** [Issue #138227](https://github.com/openclaw/openclaw/issues/138227)

4.  **DeepSeek V4 成本计算错误 (Issue #128665):**
    *   **热度：** 评论数 4
    *   **摘要：** 2026.7.1-2 版本对 DeepSeek V4 Pro 的定价计算严重失真（高估 4 倍，低估 2-4 倍），直接影响用户成本预估。
    *   **状态：** 开放。
    *   **链接：** [Issue #128665](https://github.com/openclaw/openclaw/issues/128665)

---

## 5. Bug 与稳定性

今日报告的 Bug 问题集中在 Gateway 崩溃、会话消息丢失和特定渠道（WhatsApp/Matrix/Telegram）的渲染异常上。

*   **[P0 - Crash Loop] Gateway 立即重启循环 (Issue #135171):**
    *   Perplexity 插件权限协商失败导致 Gateway 无法启动。
    *   **Fix PR:** [PR #138263](https://github.com/openclaw/openclaw/pull/138263) (MCP OAuth 修复)
*   **[P1 - Session State] Gateway 控制请求长时间挂起 (Issue #138042):**
    *   Gateway 在 2-5 分钟内停止响应健康检查和聊天请求，CPU/内存正常。
    *   **Fix PR:** [PR #138205](https://github.com/openclaw/openclaw/pull/138205) (视频认证模式修复)
*   **[P1 - Message Loss] 重复的 NO_REPLY 导致消息被静默丢弃 (Issue #128314):**
    *   在 `before_agent_finalize` 插件中检测到 NO_REPLY 并尝试重试时，重试本身又产生 NO_REPLY，导致整个回合丢失。
*   **[P1 - Message Loss] 文档附件在 steer 时丢失 (Issue #138225):**
    *   在主动运行中 steer 时，非图片附件的文本提取被跳过，导致模型收不到文件内容。
*   **[P2 - Regression] macOS Gateway "Loading configuration" 循环 (Issue #111372):**
    *   升级到 2026.7.1-2 后，Gateway 每隔几秒重启一次，显示 "loading configuration"。
*   **[P2 - Bug] Windows Defender 报警 (Issue #138224):**
    *   OpenClaw Node 的 PowerShell 健康检查被 Windows Defender 误报为恶意软件特征。

---

## 6. 功能请求与路线图信号

社区的功能请求主要集中在资源管理、安全性和成本控制上。

*   **资源感知准入 (PR #128388 / Issue):**
    *   **诉求：** 自托管模型提供商（如 Ollama）在资源不足（如显存耗尽）时应被拒绝接入，防止 Gateway 陷入死循环。
*   **输出保护机制 (Issue #138245):**
    *   **诉求：** 在流式输出中增加重复检测和长度限制，防止模型生成无限循环的文本污染会话历史。
*   **GitHub 认证配置文件 (Issue #97026):**
    *   **诉求：** 支持为不同的使用场景（私有追踪 vs 公开贡献）配置不同的 GitHub OAuth Token 和权限范围。
*   **Telegram 反馈持久化 (Issue #94963):**
    *   **诉求：** 需要持久化保存 Telegram 的消息反应事件，作为后续 Agent 处理的信号。

---

## 7. 用户反馈摘要

通过分析 Issues，用户反馈主要集中在以下场景和痛点：

1.  **生产环境稳定性担忧：** 多位用户报告了 Gateway 崩溃和进程泄漏问题，这对依赖 OpenClaw 进行 24/7 运行的生产用户构成了严重威胁。
2.  **移动端体验碎片化：** 2026.9.1 的 Mermaid 渲染改进获得了期待，但同时也暴露了移动端图表渲染失败的 bug，用户希望在手机上能流畅查看复杂图表。
3.  **成本透明度不足：** DeepSeek V4 的成本计算错误是用户最不满的点之一，直接影响了预算控制和模型选型决策。
4.  **插件管理复杂性：** 插件热重载虽然方便，但在升级时若处理不当（如旧版本残留），会导致系统崩溃，用户希望插件管理更安全。
5.  **特定平台兼容性：** Windows 用户反馈 CMD 脚本处理和 Defender 误报问题，macOS 用户则反馈了权限弹窗体验不佳。

---

## 8. 待处理积压

以下 Issue 反映了长期存在且尚未完全解决的稳定性或架构问题，建议维护者优先关注：

*   **Issue #97616 (进程泄漏):** 这是一个长期存在的 P1 级 Bug，涉及核心的进程管理机制，可能导致长期运行的服务器内存耗尽。
*   **Issue #83959 (Codex 重试耗尽):** Codex app-server 重试机制可能导致在备用服务器就绪前资源耗尽，属于高可用性风险。
*   **Issue #128665 (成本计算错误):** 影响定价准确性，属于产品可信度问题。
*   **Issue #119222 (工具执行副作用):** Agent 运行中止时，正在进行的工具执行未被正确取消，可能导致重复副作用。

---

## 横向生态对比

# 2026-09-04 AI 智能体与个人 AI 助手开源生态横向对比分析报告

## 1. 生态全景
2026年9月，个人 AI 助手与自主智能体开源生态呈现出 **“高速迭代与稳定性攻坚并重”** 的态势。各大项目在从“功能探索”向“产品化打磨”转型的过程中，普遍面临 **Gateway 进程管理、上下文窗口优化、跨平台兼容性** 等核心挑战。尽管出现了一些架构级的风险提案（如沙箱持久化），但整体趋势是向 **高可用、可观测性、多渠道集成** 深度演进，用户对运行时的稳定性要求已远超早期版本。

## 2. 各项目活跃度对比

| 项目名称 | Issues 变化 (新增/关闭) | PR 变化 (新增/合并/关闭) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 99 / 27 | 500 / 326 (待合并) | v2026.9.1 (发布) | **极活跃**<br>(代码量大，功能密集，但稳定性风险较高) |
| **NanoBot** | 5 / 2 | 30 / 10 | 无 | **高活跃**<br>(WebUI 优化与 Context 机制重构并进) |
| **LobsterAI** | 1 / 0 | 38 / 33 (合并) | v2026.9.3 (发布) | **活跃**<br>(体验优化密集，商业化链路完善) |
| **IronClaw** | 2 / 6 | 20 / 8 | 无 | **活跃**<br>(UI 交互与 Prompt Cache 修复) |
| **PicoClaw** | 6 / 1 | 9 / 2 | 无 | **中等活跃**<br>(多渠道集成与依赖更新) |
| **NanoClaw** | 4 / 0 | 17 / 4 | 无 | **中等活跃**<br>(渠道适配与底层安全修复) |
| **ZeroClaw** | 1 / 0 | 51 / 4 | 无 | **极活跃**<br>(代码提交高峰，多核心功能开发) |
| **Moltis** | 0 / 0 | 1 / 0 | 无 | **低活跃**<br>(单一 PR，专注流式传输集成) |

## 3. OpenClaw 在生态中的定位
**定位：全能型旗舰框架 / 下一代 Gateway 架构探索者**

*   **技术路线差异**：OpenClaw 不同于 NanoBot 的轻量级 WebUI 侧重和 IronClaw 的纯命令行/终端导向，它选择了 **“Gateway 进程隔离 + 插件化生态”** 的复杂架构。这种架构赋予了其极强的扩展性，但也带来了进程管理（僵尸进程）和状态同步的极高技术门槛。
*   **优势**：其 **Mermaid 图表渲染**、**全链路体验优化** 以及 **多平台原生应用** 的支持，使其在功能丰富度和用户体验上处于生态领先地位。
*   **社区规模**：从 Issues 和 PR 的数量级来看，OpenClaw 拥有最大的社区规模和最活跃的贡献者群体，处于生态的核心枢纽位置。

## 4. 共同关注的技术方向

*   **上下文管理与性能优化**：
    *   **OpenClaw**: 修复 DeepSeek V4 成本计算错误，解决长会话历史丢失。
    *   **NanoBot**: 修复 0.3.0 版本 Context 机制回归，引入 Token 速度监控。
    *   **IronClaw**: 修复 OpenAI Prompt Cache 功能，优化流式文本更新。
*   **进程与资源管理**：
    *   **OpenClaw**: P1 级 Bug，进程泄漏与僵尸进程累积。
    *   **ZeroClaw**: 修复 macOS Seatbelt 权限限制，提升运行时安全。
    *   **NanoClaw**: 修复 Docker Driver SELinux 挂载与权限问题。
*   **多渠道集成与体验**：
    *   **LobsterAI**: 内置浏览器与协作模块优化。
    *   **ZeroClaw**: Matrix 语音消息支持。
    *   **NanoClaw**: Zapier 与 Cursor SDK 集成。
*   **安全与兼容性**：
    *   **PicoClaw**: Slack 图片上传修复。
    *   **LobsterAI**: Windows Unicode 路径兼容性。

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能个人 AI 助手** | 追求极致功能与移动端体验的极客/开发者 | **Gateway 进程模型**，复杂的插件系统，原生 App 支持 |
| **NanoBot** | **WebUI 优先的 Agent 框架** | 需要可视化监控与调试的研究者/团队 | **Runtime Context 机制**，专注于 WebUI 可观测性 |
| **IronClaw** | **CLI/终端优先的开发者工具** | DevOps 工程师、命令行爱好者 | **Prompt Cache 优化**，异步子代理恢复，子进程管理 |
| **LobsterAI** | **协作型桌面客户端** | 需要多人协作与浏览器集成的生产力用户 | **Electron 原生能力**，内置浏览器，订阅商业化 |
| **NanoClaw** | **企业级容器化智能体** | 需要主权部署与外部工具集成的企业用户 | **Docker 驱动**，Operator 模式，文件系统工具 |
| **ZeroClaw** | **跨平台通信枢纽** | 需要统一多渠道（Matrix/Telegram 等）的运维者 | **SOP 标准**，A2A 协议，强大的适配器生态 |

## 6. 社区热度与成熟度

*   **快速迭代期 (High Activity)**：
    *   **OpenClaw**: 典型的“快速迭代”模式，每日数百 PR，但也伴随着高比例的 Bug（Gateway 崩溃、状态丢失）。社区处于剧烈变动中。
    *   **ZeroClaw**: 代码提交量巨大，覆盖安全、适配器、CI 等全方位开发，处于高强度建设期。
*   **质量巩固期 (Stabilizing)**：
    *   **NanoBot**: 专注于修复 Context 机制和优化 UI，显示出从大版本升级后的“回滚与修正”阶段。
    *   **LobsterAI**: 侧重于 UI 细节打磨、订阅流程和原生体验补全，产品化特征明显。
*   **特定领域深耕期 (Niche Focus)**：
    *   **PicoClaw** 与 **Moltis**: 专注于特定渠道（LINE/IRC）或特定生态集成，活跃度相对平稳。

## 7. 值得关注的趋势信号

1.  **“原生体验”成为标配**：从 OpenClaw 的 Mermaid 渲染、LobsterAI 的内置浏览器到 ZeroClaw 的原生终端 UI，项目不再满足于简单的 API 封装，而是开始深入集成浏览器内核、原生控件和复杂渲染引擎。
2.  **“主权部署”与“容器化”需求上升**：NanoClaw 将语音转写迁移至容器内，LobsterAI 修复 Windows 路径问题，这表明用户对数据安全、跨平台兼容性和非标准环境的适配能力要求越来越高。
3.  **成本控制与可观测性**：DeepSeek 成本计算错误、Prompt Cache 优化、Token 速度监控等反馈，反映出在模型成本高昂的背景下，用户和开发者对“精细化成本控制”和“系统透明度”的需求已从边缘需求变为核心痛点。
4.  **架构复杂度与稳定性的博弈**：OpenClaw 的 Gateway 架构虽然强大，但进程泄漏问题暴露了复杂架构在长期运行下的脆弱性。这为行业提供了反面教材：**高扩展性必须建立在健壮的进程管理和资源清理机制之上**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报**
**日期：** 2026-09-04
**项目：** NanoBot (HKUDS/nanobot)

---

### 1. 今日速览
NanoBot 项目在过去 24 小时内保持了高活跃度的开发节奏，共更新 5 个 Issue 和 30 个 PR。尽管无新版本发布，但开发团队在 **WebUI 体验优化**（如上下文可视化、模型速度展示）和 **Provider 兼容性修复**（OpenCode Session Header）方面取得了显著进展。此外，针对 0.3.0 版本 Runtime Context 机制回归的修复工作也已同步推进，显示出团队对版本稳定性和用户体验的高度重视。

---

### 2. 版本发布
**无新版本发布。**
当前项目处于活跃开发迭代期，建议关注即将到来的 0.3.x 版本更新，其中包含多项核心修复。

---

### 3. 项目进展
今日共有 10 个 PR 获得合并或关闭，主要集中在 **Runtime Context 机制修复** 和 **WebUI 界面重构**。

*   **Runtime Context 机制回滚与重构**：
    *   **PR #5654** (Closed): 修复了 0.3.0 版本移除默认 Current Time runtime-context 的问题。通过内置 Provider 恢复了时区配置对模型回合的影响，解决了用户无法使用 `agents.defaults.timezone` 的痛点。
    *   **PR #5659** (Open): 在 `RuntimeContextBlock` 中新增了 `ephemeral` 选项，允许 Provider 附加瞬时信息而不持久化，提升了上下文管理的灵活性。
*   **WebUI 界面与交互优化**：
    *   **PR #5657** (Closed): 提取了 WebUI 的出站编码逻辑，解耦了 `recovery_state` 和 `turn_end` 的发送逻辑，改善了消息传输的稳定性和可维护性。
    *   **PR #5660** (Open): 针对 Issue #5631，在 WebUI 的上下文使用弹窗中增加了 **模型生成速度** (Tokens/sec) 的显示，与现有的时间统计互补，帮助用户直观监控性能。
    *   **PR #5649** (Closed): 将 Token Usage 统计从单条消息中移出，重构为 Composer 弹窗内的聚合展示，并增加了逻辑回合的可视化进度条。
*   **Provider 生态与工具增强**：
    *   **PR #5662** (Open): 修复了 OpenCode Provider 缺少 `x-opencode-session` header 的问题，这对 2026-09-06 起生效的 Prompt Cache 优化至关重要。
    *   **PR #5626** (Open): 新增 `copy_file` 和 `move_file` 两个文件系统工具，补全了文件操作能力，使 Agent 能够更高效地处理文件管理任务。

---

### 4. 社区热点
今日讨论最热烈的话题集中在 **WebUI 可视化改进** 和 **OpenCode API 兼容性**。

*   **[Feature] WebUI 展示上下文与模型速度 (#5660)**
    *   **热度：** 高
    *   **分析：** 用户 Ying-Zi66 在 Issue #5631 中提出需求，希望像 DeepSeek Harness 一样直观看到模型速度和上下文信息。PR #5660 的合并将直接解决这一痛点，显著提升 WebUI 的可观测性，预计将成为用户满意度提升的关键点。
    *   **链接：** [HKUDS/nanobot PR #5660](https://github.com/HKUDS/nanobot/pull/5660)
*   **[Bug] OpenCode Session Header 缺失 (#5662)**
    *   **热度：** 高
    *   **分析：** OpenCode 官方宣布从 2026-09-06 起，缺少特定 Header 将导致 Prompt Cache 优化失效甚至报错。开发者 GUTYL 紧急提交了修复 PR，显示出社区对核心 Provider 兼容性的高度敏感，这属于 P1 级别的紧急修复。

---

### 5. Bug 与稳定性
今日共处理 2 个已关闭 Bug 和 1 个新报告 Bug，整体稳定性提升明显。

*   **[Closed] Runtime Context 缺失 (#5654)**
    *   **严重程度：** 高
    *   **描述：** 0.3.0 版本重构后，默认注入的 `Current Time` 运行时上下文块消失，导致时区配置失效。
    *   **状态：** **已修复**。通过内置 Provider 恢复机制解决。
    *   **链接：** [HKUDS/nanobot PR #5654](https://github.com/HKUDS/nanobot/pull/5654)
*   **[Closed] WebUI Channel Locale Registry 丢失 (#5655)**
    *   **严重程度：** 中
    *   **描述：** 启动时并发加载两个 Locale 会导致注册表丢失其中一个（如 `en`）。
    *   **状态：** **已修复**。PR #5655 修复了并发竞态问题。
    *   **链接：** [HKUDS/nanobot PR #5655](https://github.com/HKUDS/nanobot/pull/5655)
*   **[Open] WebUI Session Title 生成失败 (#5647)**
    *   **严重程度：** 中
    *   **描述：** 当前端 Envelope 缺少 `webui` 标志时，Session Title 无法生成。
    *   **状态：** **待合并**。相关 PR #5658 和 #5648 正在处理该问题。
    *   **链接：** [HKUDS/nanobot Issue #5647](https://github.com/HKUDS/nanobot/issues/5647)

---

### 6. 功能请求与路线图信号
用户反馈显示项目路线图正从“基础功能”向“精细化体验”过渡。

*   **上下文管理精细化**：用户不仅关注 Token 用量，更关注“模型速度”和“上下文压缩策略”。PR #5656 提出的 `context_compaction` 生命周期事件，配合 WebUI 的可视化，表明项目正在向更复杂的 **Context Management (上下文管理)** 生态发展。
*   **文件操作原生化**：PR #5626 添加 `copy_file` 和 `move_file`，说明 Agent 需要更接近原生操作系统的文件交互能力，这是向 **IDE/AI Copilot** 类应用演进的重要一步。
*   **MCP Schema 优化**：PR #5388 讨论对 MCP Schema 进行字节预算限制，表明项目在支持大量外部工具（MCP）时，开始关注性能开销和模型输入的稳定性。

---

### 7. 用户反馈摘要
*   **痛点 1：性能监控缺失** - 用户希望在 WebUI 中实时看到模型生成速度，而不仅仅是时间统计。这反映了用户对推理成本和效率的精细化管控需求。
*   **痛点 2：配置失效** - 0.3.0 版本升级后，时区配置失效是用户最直接的困惑，表明版本迁移过程中的 Breaking Change 需要更友好的通知或自动化检查。
*   **痛点 3：文件操作繁琐** - 缺少文件移动/复制工具导致 Agent 必须通过复杂的 Prompt 链式调用才能完成，用户期待更底层的工具支持。

---

### 8. 待处理积压
以下 Issue/PR 虽然已存在一段时间，但今日仍有活跃讨论或尚未解决，建议关注：

*   **PR #5520 (Documentation & Tracing)**: 添加 Codex 的 Langfuse 追踪功能。该 PR 存在冲突且创建于 8 月 24 日，可能涉及复杂的代码重构或 SDK 兼容性问题。
    *   **链接：** [HKUDS/nanobot PR #5520](https://github.com/HKUDS/nanobot/pull/5520)
*   **PR #5388 (MCP Budget)**: Agent visible MCP schemas 的字节预算功能。涉及核心 Agent Loop 的修改，属于 P2 优先级但影响架构设计。
    *   **链接：** [HKUDS/nanobot PR #5388](https://github.com/HKUDS/nanobot/pull/5388)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-09-04)

## 1. 今日速览
PicoClaw 项目在过去 24 小时内保持了活跃的开发节奏，整体健康度良好。共更新 **6 条 Issues**（活跃 5 条，关闭 1 条）和 **9 条 Pull Requests**（待合并 7 条，合并/关闭 2 条）。本周的重头戏是针对 Web UI 性能问题的修复进入代码审查阶段，同时 QQ 频道插件因依赖库版本兼容性问题引发了一轮集中讨论。项目近期主要聚焦于多渠道集成（Slack、LINE、IRC）的稳定性优化及依赖库的安全升级。

## 2. 版本发布
> **无新版本发布**

## 3. 项目进展
今日有两个重要的 PR 发生了状态变更（关闭/合并），标志着部分关键问题的解决：
*   **PR #2810 (CLOSED)**：这是一个大规模的 upstream 合并 PR，包含了近 1100 个上游提交。它不仅同步了主分支的代码结构，还成功将自定义配置（如 Agent Loop 分离、工具包重组）进行了前向移植。虽然该 PR 被关闭（可能已通过其他方式合并或清理），但展示了项目在维护上游代码同步方面的持续努力。
*   **PR #3329 (CLOSED)**：修复了 LINE 渠道配置问题，警告了未使用的 `webhook_host`/`webhook_port` 环境变量，防止了配置混淆。

## 4. 社区热点
今日讨论热度集中在 Web UI 性能优化和 QQ 频道兼容性上，反映出用户对高频交互场景的关注：
*   **Web UI 输入延迟 (Issue #3281)**：用户反馈在 Web 界面中，随着聊天历史变长，输入框会变得非常卡顿。该 Issue 已引起维护者注意（标记为 stale），并有 PR #3347 正在尝试通过优化渲染逻辑来解决这个问题。
*   **QQ 频道认证错误 (Issue #3365)**：这是一个由用户 `crazysarah` 提出的新问题，指出在 Orange Pi 3B 等设备上使用 QQ 频道时出现 401 错误。经排查，根本原因在于 `botgo` 依赖库版本与 `resty` 版本不兼容。该 Issue 与之前的 #3349 互为补充，正在寻找解决方案。

## 5. Bug 与稳定性
今日报告的问题主要集中在多渠道集成的细节实现上：
*   **Slack 图片上传失败 (Issue #3338 / PR #3340)**：**严重性：高**。Slack 渠道在发送媒体内容时失败，原因是 SDK `slack-go` 要求在 `files.getUploadURLExternal` 请求中必须提供文件大小，而当前代码未设置 `FileSize` 参数。该 Bug 已有对应的 PR 提出修复。
*   **Google Antigravity 429 错误 (Issue #3339)**：**严重性：中**。用户在使用 Google 的 Antigravity 服务进行生成时，尽管 OAuth 和模型发现正常，但总是返回 429 资源耗尽错误。目前问题未解决，可能涉及 API 配额或 SDK 翻译问题。
*   **RKLLM 模型回复异常 (Issue #3346)**：**严重性：中**。在 ARM 开发板上运行 RKLLM 模型时出现异常回复。目前尚无有效 fix PR。

## 6. 功能请求与路线图信号
*   **依赖库安全更新 (PR #3364, #3362, #3363, #3361, #3360)**：依赖机器人（Dependabot）提交了 5 个依赖更新 PR，涉及 AWS SDK、Go Term、IRC、Protobuf 和飞书 SDK。这表明项目正在积极跟进上游依赖的安全补丁，为下一版本做准备。
*   **Web UI 性能优化 (PR #3347)**：开发者 `iMilnb` 提交了针对 Web UI 卡顿的修复。虽然作者自称不是 TS 开发者，但经分析已验证修复有效。若此 PR 合并，将显著提升 Web 端多轮对话的用户体验。

## 7. 用户反馈摘要
*   **性能痛点**：用户在浏览器（Brave）中长时间使用 Web UI 时，输入框的响应速度与历史记录长度呈负相关，严重影响了实际使用体验。
*   **集成兼容性**：QQ 频道集成在非标准 x86 Linux 环境（如 ARM 架构的 Orange Pi）上存在配置兼容性问题，用户急需跨平台部署指南或环境变量配置的修正。

## 8. 待处理积压
*   **PR #3340 (Open)**：Slack 媒体上传修复尚未合并，直接影响用户在 Slack 渠道发送图片的功能。
*   **Issue #3281 (Open)**：Web UI 输入卡顿问题悬而未决，影响核心交互体验。
*   **Issue #3339 (Open)**：Google Antigravity 429 错误未解决，影响特定付费用户的 API 调用。

---
**数据来源**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-09-04

## 1. 今日速览

NanoClaw 今日保持中等活跃度：4 条新 Issue 均为 OPEN 状态（无关闭），17 条 PR 中有 4 条已合并/关闭，13 条仍处于待合并状态。无新版本发布。核心进展集中在渠道适配器修复、安全补丁及功能扩展（Zapier MCP skill、Cursor SDK payload）两条主线。整体项目健康度良好，修复与特性 PR 比例均衡，社区参与度稳定。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#2232** — 修复 chat-sdk-bridge：对不支持 `fetchData` 的适配器回退到 URL 拉取，提升了多场景下的稳定性。
  [链接](https://github.com/nanocoai/nanoclaw/pull/2232)

- **#2231** — 修复 chat-sdk-bridge：新增 `sendAsRaw` 标志绕过适配器 Markdown 往返转换，修复了内容渲染问题。
  [链接](https://github.com/nanocoai/nanoclaw/pull/2231)

- **#3461** — 依赖升级：将所有 `@chat-adapter/*` 及 `chat` 包从 4.29.0 升级至 4.38.1（跨越 9 个次要版本），紧跟 trunk 依赖进度。
  [链接](https://github.com/nanocoai/nanoclaw/pull/3461)

- **#3126** — 核心修复：确保 agent-runner 永不投递 silence 或 `<internal>` 思考块，修复了消息内容泄漏风险。
  [链接](https://github.com/nanocoai/nanoclaw/pull/3126)

**整体推进评估**：今日合并的 PR 以 bug 修复和依赖升级为主，解决了消息传递链路中的关键稳定性问题，为后续功能开发夯实了基础。13 条待合并 PR 中覆盖功能扩展（Zapier、Cursor）、容器安全、测试清理等多领域，待合并积压处于合理区间。

## 4. 社区热点

今日最活跃 Issue/PR（按评论与影响力排序）：

- **#3714** — Operator env overrides（自动压缩窗口、转录轮换）从未传递到 session 容器，需手动 patch 才能生效。
  [链接](https://github.com/nanocoai/nanoclaw/issues/3714)

- **#3440** — Docker driver 修复 SELinux 拦截挂载、组可写权限及残留 NUL 字节问题。
  [链接](https://github.com/nanocoai/nanoclaw/pull/3440)

- **#3706** — `ncl groups config add-mount --container <path>` 在使用绝对路径时产生双重嵌套路径，工具行为与文档描述不符。
  [链接](https://github.com/nanocoai/nanoclaw/issues/3706)

- **#2003** — Voice transcription V2：将语音转写能力迁移至容器内部实现，满足用户主权部署需求。
  [链接](https://github.com/nanocoai/nanoclaw/pull/2003)

**诉求分析**：社区最关心的是环境变量注入机制的完整性（#3714）以及 CLI 工具对非标准路径输入的容错（#3706），反映出用户对可预测行为和高可控性的强烈需求。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|---------|---------|------|---------|
| 🔴 高 | #3714 | Operator env overrides 不生效，配置完全失效 | 无 open PR，需跟进 |
| 🔴 高 | #3706 | `add-mount --container` 绝对路径产生双重嵌套 | 无 open PR，需跟进 |
| 🟡 中 | #3709 | SQLite 测试使用固定 `/tmp` 路径，并发 vitest 相互删除数据库 | 无 open PR，需跟进 |
| 🟡 中 | #3705 | `ncl tasks update --recurrence` 不重新计算 `process_after` | 无 open PR，需跟进 |
| 🟢 低 | #3440 | SELinux 挂载拦截、组可写权限、NUL 字节 | PR 已开，待合并 |
| 🟢 低 | #3708 | SQLite `busy_timeout` 与 `journal_mode` 设置顺序错误 | PR 已开，待合并 |

**稳定性评估**：今日 4 条新 Issue 均涉及配置/路径处理的核心逻辑，暂无崩溃或数据丢失报告。PR #3440 和 #3708 针对已知容器/数据库问题进行修复，合并后可提升系统稳定性。

## 6. 功能请求与路线图信号

- **Zapier MCP Tool Skill** (#3715) — 新增 Zapier 集成能力，允许通过托管 MCP 服务器为 agent group 提供工具，无需在 NanoClaw 配置中暴露私有令牌。反映用户对第三方自动化平台集成的强烈需求。
  [链接](https://github.com/nanocoai/nanoclaw/pull/3715)

- **Cursor Agent SDK Provider** (#3356, #3355) — 新增 Cursor 兼容 provider，支持 execution policy、MCP 解析器和记忆 session hook，扩展了 agent 运行时选择。
  [链接](https://github.com/nanocoai/nanoclaw/pull/3356) | [链接](https://github.com/nanocoai/nanoclaw/pull/3355)

- **Voice Transcription V2** (#2003) — 将语音转写能力迁移至容器侧实现，强调主权部署模型，满足对数据本地化的用户需求。
  [链接](https://github.com/nanocoai/nanoclaw/pull/2003)

- **Delivery Mode 配置** (#3713) — 新增 per-agent-group delivery mode 记录，支持在无法处理 `<message to>` envelope 的模型上切换到 outbound tools 模式。
  [链接](https://github.com/nanocoai/nanoclaw/pull/3713)

- **Router 内容延迟加载** (#3711, #3712) — 推迟昂贵入站内容处理直到 agent 实际接收，修复 WhatsApp 文档标题读取和媒体下载问题。
  [链接](https://github.com/nanocoai/nanoclaw/pull/3711) | [链接](https://github.com/nanocoai/nanoclaw/pull/3712)

**路线图判断**：今日 PR 密集覆盖集成扩展（Zapier、Cursor）、渠道优化（WhatsApp、Router）和底层稳定性（SQLite、SELinux），预示下一版本将聚焦于生态兼容性和容器内功能主权两个方向。

## 7. 用户反馈摘要

- **环境变量注入缺失** (#3714)：用户依赖 operator 级 env override 控制容器内行为，当前实现完全失效，导致必须手动 patch，增加了运维复杂度。
- **CLI 路径处理歧义** (#3706)：用户按照 `--help` 描述传入绝对路径，却产生非预期的双重嵌套路径，表明工具文档与实际行为存在断层。
- **测试基础设施干扰** (#3709)：并发测试进程因共享固定 `/tmp` 路径导致数据库互相删除，影响多 worktree 开发体验和 CI 稳定性。
- **任务调度状态不同步** (#3705)：修改任务 recurrence 后下次执行时间未更新，用户反馈与实际调度行为不一致。
- **语音转写主权需求** (#2003)：用户明确偏好容器内实现而非 host 侧处理，强调数据主权和最小 host 依赖原则。

## 8. 待处理积压

| Issue/PR | 状态 | 提醒 |
|---------|------|------|
| #3714 — Operator env overrides 不生效 | 0 评论，0 日 | 核心功能缺陷，建议优先响应 |
| #3706 — `add-mount` 绝对路径双重嵌套 | 1 评论，1 日 | 用户按照文档操作失败，需明确行为或修复 |
| #3709 — SQLite 测试并发路径冲突 | 0 评论，1 日 | 影响开发体验，建议快速修复 |
| #3705 — `--recurrence` 不重算 `process_after` | 0 评论，1 日 | 调度功能逻辑缺陷，需跟进 |
| #3440 — Docker driver 安全修复 | 待合并，13 日 | 涉及 SELinux 和权限问题，建议加速审核 |

**维护者关注建议**：4 条新 Issue 均涉及配置、路径和调度等核心功能，当前均无修复 PR 跟进。建议优先处理 #3714 和 #3706，两者直接影响用户正常使用体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期**: 2026-09-04  
**分析范围**: GitHub 仓库 [nearai/ironclaw](https://github.com/nearai/ironclaw) 过去 24 小时数据

---

## 1. 今日速览

过去 24 小时项目活跃度保持高位，共处理 28 个代码变更请求（Issues 8 + PRs 20），其中 8 项已完成关闭/合并，显示出快速迭代与问题修复的节奏。今日核心进展集中在 **Web UI 交互体验优化**（解决命令卡片折叠、菜单对齐、导航可见性等问题）以及 **LLM 上下文管理与缓存机制** 的性能与兼容性修复。尽管有 1 个高风险架构增强提案（Issue #7903）提出，但整体项目稳定性良好，未发布新版本。

---

## 2. 版本发布

**无新版本发布**。

---

## 3. 项目进展

今日关闭/合并了 8 个 Pull Request，主要集中在 **UI 交互体验修复** 与 **后端性能/稳定性改进**。

*   **Web UI 交互体验优化 (4个已合并)**
    *   **PR #8071**: 修复命令结果卡片在消息流中意外折叠的问题，确保内容高度保持，避免仅剩边框。
    *   **PR #8070**: 统一斜杠命令菜单的元数据对齐，使用响应式网格替代变宽行，提升菜单可读性。
    *   **PR #8069**: 为命令结果卡片添加“关闭/忽略”操作，允许用户移除临时面板，防止对话空间被占用。
    *   **PR #8068**: 修复键盘导航时命令菜单失去焦点或被滚出视口的问题，支持鼠标悬停自动滚动。
    *   *(注：上述 PR 均由 core contributor italic-jinxin 提交，风险等级为低，解决了多个用户体验痛点)*

*   **LLM 与后端性能/稳定性改进 (4个已合并)**
    *   **PR #8062**: 修复 OpenAI 请求路径中未发送对话缓存键的问题，确保 Prompt Cache 功能在 OpenAI Responses API 上正常工作。
    *   **PR #8067**: 实现子代理后台交付的“启动/周期性扫描”恢复机制，解决线程不再运行时数据可能丢失的边缘情况。
    *   **PR #8060**: 调整 CI 架构扫描的超时设置，为全树扫描提供足够的执行时间，防止测试因超时被误判失败。
    *   **PR #8043**: 优化流式文本更新逻辑，移除重复的文本重整流，显著降低大响应的 CPU 和内存开销。

---

## 4. 社区热点

*   **Issue #7903**: [enhancement] Decision spike: persistent per-user sandboxed executor behind the trusted host kernel
    *   **链接**: [nearai/ironclaw Issue #7903](https://github.com/nearai/ironclaw/issues/7903)
    *   **热度分析**: 标记为 `risk: high`, `scope: agent`, `scope: sandbox`，是今日唯一的 **高风险增强提案**。讨论点在于如何在保持强权限边界的前提下，为 Docker 沙箱引入持久化执行器，以减少 CLI 命令的管道开销。
    *   **诉求**: 用户希望在不牺牲安全性的前提下提升命令执行效率。

*   **Issue #8057**: [enhancement] Prompt budget should account for non-transcript prompt material
    *   **链接**: [nearai/ironclaw Issue #8057](https://github.com/nearai/ironclaw/issues/8057)
    *   **热度分析**: 核心关注 Prompt 上下文预算的计算逻辑。
    *   **诉求**: 指出当前的预算仅计算对话记录，忽略了身份信息、技能片段等非转录内容，可能导致实际请求超出模型上下文窗口限制。

---

## 5. Bug 与稳定性

今日未报告严重系统崩溃或高优先级 Bug。所有关闭的 PR 均为低风险修复。

*   **Web UI 布局异常**: Issue #8066 描述了命令结果卡片随消息列表 Flex 布局收缩至不可见的问题，已被 PR #8071 修复。
*   **API 取消逻辑缺陷**: PR #8059 提到 `/api/v1/responses/{id}/cancel` 接口在处理 `cancelled by OpenAI-compatible Responses API` 原因时存在逻辑错误，可能导致取消请求失败。该 PR 已修复此问题。
*   **Host API 范围解析崩溃**: PR #8056 修复了当 JSON 范围解析遇到畸形数据时可能导致的 panic 问题，增加了边界检查。

---

## 6. 功能请求与路线图信号

*   **子代理恢复机制**: PR #8067 引入了“重启/周期性扫描”机制来解决子代理线程丢失的边缘情况。这表明项目正在加强对异步子任务生命周期的管理，防止数据写入后因进程终止而永久丢失。
*   **上下文窗口自适应**: PR #8053 和 Issue #8057 都在推动 Prompt 上下文预算从“硬编码”转向“从模型广告的上下文窗口动态推导”（如取 90%），这符合当前 LLM 生态对长上下文支持日益增长的需求。
*   **UI 交互标准化**: 连续的 UI 修复（菜单对齐、卡片高度、导航可见性）表明项目正在打磨 Web UI 的易用性，提升用户体验的一致性。

---

## 7. 用户反馈摘要

从今日活跃的 Issues 中提炼出的用户痛点：
1.  **UI 繁琐**: 用户反馈斜杠命令菜单对齐不一致，导致阅读困难；命令结果卡片无法关闭，导致对话列表越来越长。
2.  **上下文溢出**: 用户报告在长对话中，系统提示词、工具定义等额外内容被忽略，导致请求超出模型限制。
3.  **交互卡顿**: 用户注意到命令菜单在键盘导航时容易丢失焦点，需要手动滚动才能看到当前选中的命令。

---

## 8. 待处理积压

*   **Issue #7903 (High Risk)**: 关于持久化沙箱执行器的设计决策仍在讨论中。这是一个架构层面的重大变更，涉及安全边界重构，建议维护者尽快评估其可行性与风险，以便推进或关闭。
*   **Issue #8052**: "Daily ironclaw failure taxonomy" 报告了 2026-09-03 的基准测试失败分类，虽然昨日已关闭，但此类失败分类的持续产出有助于长期监控模型质量与系统稳定性。

---
**数据来源**: [nearai/ironclaw GitHub Repository](https://github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 — 2026-09-04

---

## 1. 今日速览

LobsterAI 今日保持较高活跃度，24 小时内新增 **38 条 PR**（33 条已合并/关闭），并发布了 **v2026.9.3** 版本，项目迭代节奏稳定。协作（cowork）与浏览器（browser）模块是今日主要更新方向，涉及登录引导、内置浏览器交互优化、订阅恢复流程完善等。同时，一条关于 SQLite 存储层数据完整性缺陷的 Issue（#1071）进入 stale 状态，值得维护者关注。整体项目健康度良好，开发推进集中在体验优化与工程修复层面。

---

## 2. 版本发布

### 📦 LobsterAI 2026.9.3

**发布日期：** 2026-09-03

**更新内容：**

- **`feat(cowork)`** — 未认证用户提交聊天消息前，弹出登录引导弹窗（[#2573](https://github.com/netease-youdao/LobsterAI/pull/2573)）
- **`feat(browser)`** — 新增交互式内置浏览器（in-app browser）（[#2574](https://github.com/netease-youdao/LobsterAI/pull/2574)）
- **`feat(onboarding)`** — 继续优化新手引导流程

**破坏性变更：** 无已知破坏性变更。

**迁移注意事项：** 无特殊迁移要求，用户侧为透明更新。

---

## 3. 项目进展

今日共关闭/合并 **33 条 PR**，主要推进方向如下：

| 方向 | 重点 PR | 进展说明 |
|------|---------|----------|
| **发布流程** | [#2618](https://github.com/netease-youdao/LobsterAI/pull/2618) | Release/2026.9.4 发布分支已关闭，新版本正在推进 |
| **浏览器功能** | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | 优化内置浏览器登录反馈、标签页导航与凭证管理，当前仍为 OPEN 状态 |
| **CI/CD** | [#2616](https://github.com/netease-youdao/LobsterAI/pull/2616) | 限制 skill audit 时长（上限 90s），修复 npm audit 隐式审计导致的超时问题 |
| **跨平台兼容性** | [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | 修复 Windows Unicode 安装路径下浏览器 MCP 启动器异常 |
| **配置修复** | [#2614](https://github.com/netease-youdao/LobsterAI/pull/2614) | 修正测试模式服务端 API 地址，恢复为标准内网环境 |
| **订阅与商业化** | [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613) | 完善订阅恢复引导、状态同步与全链路埋点，区分自动恢复与重新部署两种模式 |
| **协作体验** | [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612) | 修复登录刷新期间模型选择状态丢失问题 |
| **Electron 原生能力** | [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | 为文本输入控件添加原生编辑右键菜单（剪切/复制/粘贴/全选） |
| **UI/UX** | [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | 修复技能升级进度遮罩层的渲染覆盖问题 |
| **国际化** | [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | 优化语音配额耗尽的中文提示文案 |
| **IM 模块** | [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599) | 改进 Bot 卡片布局，限制多实例为双列响应式布局 |
| **分析埋点** | [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) | 补充聊天登录引导 CTA 点击事件的埋点上报 |
| **文本选择** | [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) | 修复右键菜单上下文菜单中已选文本丢失的问题 |
| **插件安装** | [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | 修复安装失败弹窗因错误信息过长导致按钮不可点击的问题 |

**整体判断：** 今日 PR 密集围绕浏览器功能成熟化、订阅商业化链路完善、以及桌面端原生体验补齐展开，项目正从功能建设阶段向产品打磨阶段过渡。

---

## 4. 社区热点

### 🔥 Issue #1071 — SQLite 存储层数据完整性缺陷（关注度高）

- **状态：** OPEN / stale
- **作者：** MaoQianTu
- **创建时间：** 2026-03-30 | **最后更新：** 2026-09-04
- **链接：** [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071)
- **核心问题：**
  1. `ON DELETE CASCADE` 完全失效 — `cowork_messages` 表外键级联删除未生效，导致孤儿消息无限累积
  2. `save()` 非原子写入 — 崩溃可导致数据库损坏
  3. `storeInitPromise` 超时后永久故障 — 初始化失败后无恢复机制

**分析：** 该 Issue 自 3 月底提交至今已接近 5 个月，且进入 stale 状态，说明维护者尚未响应。三个缺陷均可能影响生产环境的数据可靠性，属于高严重度问题。用户进行代码审计后提出，具备较强的技术可信度，建议维护者优先评估。

---

### 🔥 PR #2617 — 浏览器登录与标签页交互优化

- **状态：** OPEN
- **作者：** btc69m979y-dotcom
- **链接：** [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617)
- **核心改动：** 登录反馈可-dismiss、凭证设置页保存后保持打开、下拉菜单替换为可滚动标签栏

**分析：** 作为 v2026.9.3 中"交互式内置浏览器"功能的后续优化，该 PR 直接影响用户使用内置浏览器进行 OAuth 登录的核心流程，预计合并后将显著改善体验。

---

## 5. Bug 与稳定性

| 严重度 | 问题描述 | 关联 PR | 状态 |
|--------|----------|---------|------|
| 🔴 高 | SQLite CASCADE 失效致孤儿消息累积；非原子写致崩溃损坏；初始化超时永久故障 | — | 无 fix PR，Issue #1071 待处理 |
| 🟡 中 | Windows Unicode 安装路径下浏览器 MCP 启动器失败 | [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | ✅ 已修复合并 |
| 🟡 中 | 插件安装失败弹窗因错误信息过长导致按钮不可点击 | [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | ✅ 已修复合并 |
| 🟢 低 | 登录刷新期间选中的模型元数据暂时为空导致显示异常 | [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612) | ✅ 已修复合并 |
| 🟢 低 | 技能升级进度遮罩未覆盖完整应用 Shell | [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | ✅ 已修复合并 |
| 🟢 低 | 右键菜单选中文本在上下文菜单打开前丢失 | [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) | ✅ 已修复合并 |

**稳定性评估：** 今日已修复 6 个 Bug，覆盖 Windows 兼容性、UI 交互、状态管理等维度。但 **SQLite 存储层缺陷（#1071）** 仍未有任何修复动作，是该版本发布前最值得关注的稳定性风险点。

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 判断 |
|------|----------|------|
| **内置浏览器深化** | #2617 仍在 OPEN、#2574 已合入 v2026.9.3 | 浏览器功能仍在快速迭代中，预计下一版本将继续完善登录流、标签管理和导航体验 |
| **订阅商业化完善** | #2613 完善订阅恢复引导与全链路埋点 | 商业化链路是近期重点，恢复流程的埋点和状态同步将持续优化 |
| **协作体验增强** | #2573 登录引导、#2612 模型状态保持、#2596 分析埋点 | cowork 模块的用户引导和数据追踪在持续加固 |
| **桌面原生能力补齐** | #2503 右键菜单、#2521 文本选择 | Electron 原生能力（右键菜单、文本操作）正在逐步补齐，接近完整桌面体验 |
| **CI/CD 稳定性** | #2616 限制 audit 时长 | 工程基建持续优化，确保发布流程可靠 |

**路线图判断：** 项目正围绕"浏览器能力成熟"和"商业化链路完善"两条主线推进，同时逐步补齐桌面端原生体验短板。

---

## 7. 用户反馈摘要

- **痛点：** SQLite 存储层数据完整性问题（#1071）由用户主动审计发现，说明部分用户对其数据的长期可靠性有较高要求，且已关注到底层实现质量。
- **满意度信号：** 内置浏览器功能（#2574）上线后，用户迅速提出登录反馈和标签页交互的优化建议（#2617），说明核心功能已可用，进入体验打磨阶段。
- **使用场景：** 订阅恢复流程的埋点和状态同步需求（#2613）反映出用户在付费转化后的实际使用场景中存在"恢复路径不清晰"的痛点。
- **兼容性诉求：** Windows Unicode 路径问题（#2615）说明项目用户群体包含非 ASCII 路径环境的用户，跨平台兼容性持续有需求。

---

## 8. 待处理积压

| 类型 | 编号 | 描述 | 时长 | 建议 |
|------|------|------|------|------|
| 🚨 **高优 Issue** | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | SQLite 存储层三个数据完整性/可靠性缺陷 | 自 2026-03-30 起约 5 个月，已 stale | **建议维护者优先评估**，该问题影响数据持久化可靠性，应在下一版本发布前给出回应或修复计划 |
| 📌 **开放 PR** | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | 浏览器登录与标签页交互优化 | 今日创建，待合并 | 作为内置浏览器体验的关键优化，建议尽快合并 |

---

**报告生成时间：** 2026-09-04
**数据来源：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) GitHub API

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**: 2026-09-04
**数据周期**: 过去 24 小时 (2026-09-03 23:59 - 2026-09-04 23:59)

---

### 1. 今日速览
今日 Moltis 项目处于**低活跃度**状态。在过去 24 小时内，项目无新版本发布，社区未见新 Issue 提交或活跃讨论，保持了代码库的稳定与安静。唯一的动态来自开发者 GTanger 提交的 PR #1258，旨在为 `agy` CLI 添加第一流的流式传输支持，这可能标志着项目在集成 Google Gemini 生态方面迈出了关键的一步。

### 2. 版本发布
**无新版本发布**

### 3. 项目进展
*   **PR #1258: feat(external-agents): add direct AGY streaming**
    *   **状态**: 待合并
    *   **内容**: 该 PR 引入了对官方 `agy` CLI 的直接流式传输支持。
    *   **技术亮点**:
        *   重用 `agy` 现有的 Google OAuth 会话，避免了用户手动配置 Gemini CLI 或 API Key 的繁琐步骤。
        *   实现了 `agy` 版本化 `stream-json` 输出与 Moltis 内部文本、推理、工具调用等格式的翻译映射。
    *   **影响**: 这将极大地提升 Moltis 与 Google AI 生态集成的流畅度和安全性。

### 4. 社区热点
*   **PR #1258: feat(external-agents): add direct AGY streaming**
    *   **热度**: 当前无评论 (0 👍)
    *   **分析**: 作为今日唯一的动态，该 PR 处于早期阶段。目前尚未引发社区讨论，但功能本身涉及外部 Agent 的核心传输层改造，具有较高的技术价值。

### 5. Bug 与稳定性
*   **无 Bug 报告或崩溃记录**

### 6. 功能请求与路线图信号
*   **外部 Agent 流式传输优化**
    *   **信号来源**: PR #1258
    *   **分析**: 用户（通过开发者行为体现）对现有的外部 Agent 通信方式提出了升级需求。目前的诉求聚焦于**原生流式支持**而非传统的轮询或 API Key 认证，这表明项目路线图正朝着更无缝、更安全的外部工具集成方向演进。

### 7. 用户反馈摘要
*   **无有效用户反馈** (当前无活跃 Issue 或 PR 评论)

### 8. 待处理积压
*   **无积压 Issue 或 PR**

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 (2026-09-04)

## 1. 今日速览
ZeroClaw 项目今日保持高活跃度，共处理 **51** 条 Pull Requests（47 待合并，4 关闭）和 **1** 条 Issue，暂无新版本发布。项目整体健康度良好，呈现“代码提交高峰”状态。今日工作重心集中在 **macOS 安全策略**、**Anthropic/Bedrock 适配器**的优化、**Matrix 语音消息**支持以及 **CI/CD 流水线**的效能提升上。同时，维护者积极处理了文档域名迁移及多个长期未决的 Bug 修复。

## 2. 版本发布
**无**。当前开发分支（master）处于活跃开发状态，暂无正式 Release。

## 3. 项目进展
今日共有 **4** 条 PR 被关闭/合并，主要涉及文档迁移与内部机制优化：
*   **[Merged] chore(docs): move docs and site links to zeroclaw.com (#10616)**: 将自定义域名从 `zeroclawlabs.ai` 迁移至 `zeroclaw.com`，并更新了部署工作流。
*   **[Closed] fix(runtime): harden bounded recovery and completion (#10614)**: 修复了运行时恢复机制的稳定性问题，该 PR 在被合并前已被关闭，说明问题已解决。
*   **[Closed] feat(zerocode): report turn state to the terminal over OSC title and progress (#9876)**: 优化了终端 UI 的状态报告机制，增强了用户交互体验。
*   **[Closed] feat(sop): add a collision-checked atomic SOP rename flow (#10233)**: 完成了 SOP（标准操作程序）重命名功能的原子性检查，解决了潜在的数据竞争问题。

## 4. 社区热点
今日关注度较高的 PR 涉及多项核心功能的增强：
*   **[Open] feat(providers): adapt Anthropic and Bedrock to adaptive-thinking Claude models (#10611)**: **核心适配更新**。针对 Claude Fable 5.1 及 Bedrock 平台，修复了模型在“自适应思考”模式下拒绝固定思考预算和采样参数的问题，确保了新版本模型的支持。
*   **[Open] fix(runtime): honor allowed roots in Seatbelt (#10556)**: **安全修复**。修复了 macOS 系统权限限制问题，确保运行时正确处理读写权限根目录，解决了符号链接解析和权限授予的逻辑缺陷。
*   **[Open] feat(channels/matrix): deliver voice replies as MSC3245 voice notes (#10489)**: **新功能**。为 Matrix 频道添加了语音回复支持，将其集成到 TTS 管理器中，补全了 Telegram 和 WhatsApp 的语音功能缺失。

## 5. Bug 与稳定性
今日报告了 1 个新 Bug，涉及模型配置兼容性：
*   **[Open] [Bug]: thinking display = "updates" returns 400 on Claude Fable 5.1 (#10617)**: **严重程度：高**。
    *   **描述**: 在 Claude Fable 5.1 模型中，当 `thinking.display` 配置为 `updates` 时，API 请求返回 400 错误。
    *   **根因**: `ThinkingDisplay` 枚举目前仅支持 `omitted` 和 `summarized`，拒绝 `updates` 值。
    *   **状态**: 待修复。

## 6. 功能请求与路线图信号
从 PR 的功能标签来看，项目下一阶段的重点在于：
*   **安全与权限管理**: `Seatbelt` 权限适配、`delegate` 工具的边界限制修复。
*   **多渠道体验**: Matrix 语音消息支持、Telegram 模型选择器。
*   **性能与架构**: CI 流水线优化（路由 fork PR 到 Blacksmith）、会话消息序列化。
*   **开发者工具**: 终端状态报告（OSC 标题/进度）、Todo 追踪器的本地化持久化。

## 7. 用户反馈摘要
从 Issue 内容分析，用户关注点集中在：
*   **模型兼容性**: 用户反馈 Claude Fable 5.1 等新模型的出现破坏了原有的固定配置逻辑，急需适配层更新。
*   **权限与安全性**: macOS 环境下的 Root 权限处理和 Delegate 文件系统工具的边界控制是高频反馈点。
*   **交互体验**: 期望在终端和特定聊天频道（如 Matrix）中获得更完善的进度反馈和多媒体支持。

## 8. 待处理积压
以下 PR 因涉及复杂逻辑或需要作者维护者介入，处于长期待处理状态：
*   **[Open] feat(a2a): outbound client config, shared wire-model, tools (#9324)**: A2A (Agent-to-Agent) 协议的客户端配置与线缆模型实现，跨度大，长期未合并。
*   **[Open] feat(cli): add the egress grant ceremony to plugin install and list (#9584)**: 插件安装的权限授予仪式，涉及权限验证逻辑，需要维护者复核。
*   **[Open] feat(channels/telegram): add secure model picker (#9997)**: Telegram 安全模型选择器，被标记为 `do-not-merge`，可能存在集成或安全问题。
*   **[Open] fix(delegate): bounded delegate filesystem tools now respect the target's own workspace (#10391)**: Delegate 文件系统工具的边界修复，涉及安全策略变更，长期未决。

---
**数据来源**: GitHub (zeroclaw-labs/zeroclaw) | 报告时间: 2026-09-04

</details>