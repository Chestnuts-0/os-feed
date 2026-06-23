# OpenClaw 生态日报 2026-06-24

> Issues: 185 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-23 19:59 UTC

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

# OpenClaw 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
OpenClaw 项目在 2026-06-24 保持极高活跃度，过去 24 小时内产生 185 个 Issue 和 500 个 PR 更新。核心焦点集中在 **会话状态一致性**、**媒体生成任务死锁修复** 以及 **SQLite 迁移底层重构**。尽管无新版本发布，但多个 P1 级关键 Bug（如视频生成卡死、子代理锁释放失败）已有明确的修复 PR 进入审查或合并阶段。项目正从“功能扩张”转向“核心稳定性加固”，特别是针对高并发和多代理场景下的资源竞争问题进行了集中优化。

## 2. 版本发布
- **当前状态：** 无新版本发布。
- **备注：** 近期版本（2026.6.x）暴露出较多迁移和状态管理问题，开发重心暂时未在发布新特性上，而是致力于修复现有版本的严重回归。

## 3. 项目进展
今日主要技术进展体现在对核心基础设施的修补和重构：
- **会话锁与重入修复 (PR #96000, PR #95993)：** 解决了嵌入代理转录写入器中的重入锁问题，以及视频生成任务中的自我死锁。这将显著改善长时运行任务和多媒体生成流程的稳定性。
- **SQLite 迁移推进 (PR #96182, Issue #88838)：** 继续推进 Path 3 的会话/转录 SQLite 迁移工作，通过抽象访问层减少了对文件存储布局的直接依赖，为最终的数据持久化层切换做准备。
- **插件与路由注册修复 (PR #95257)：** 修复了网关启动期间插件 HTTP 路由注册丢失的问题，确保动态加载的插件能正确暴露端点。
- **Discord 附件时效性修复 (PR #95983)：** 调整了 Discord 频道附件下载时机，从排队后改为接收时立即下载，避免了因 CDN 链接过期导致的媒体丢失。

## 4. 社区热点
以下 Issue 和 PR 获得了最高关注度，反映了用户对底层稳定性和跨平台兼容性的强烈诉求：

- **核心会话迁移与状态追踪 (Issue #88838)**
  - **热度：** 40 条评论，🦞 Diamond Lobster (最高评级)
  - **焦点：** 跟踪核心会话/转录 SQLite 迁移的_accessor_ 接缝实现。这是目前架构层面最重大的变更之一，社区高度关注其向后兼容性和性能影响。
  - **链接：** [Issue #88838](https://github.com/openclaw/openclaw/issues/88838)

- **Cron 触发器污染全局状态 (Issue #90991)**
  - **热度：** 14 条评论
  - **焦点：** 定时任务导致全局运行时状态污染，引发系统级过载。这是一个严重的并发 Bug，影响了自动化任务的可靠性。
  - **链接：** [Issue #90991](https://github.com/openclaw/openclaw/issues/90991)

- **嵌入式 Runner 思考签名无效 (Issue #92201)**
  - **热度：** 13 条评论
  - **焦点：** Anthropic 流式思考块在重放时签名间歇性无效，且恢复包装器因错误文本泛化而未触发。这直接影响了使用 Slack 等插件时的体验。
  - **链接：** [Issue #92201](https://github.com/openclaw/openclaw/issues/92201)

- **Compaction 超时配置缺陷 (Issue #92043)**
  - **热度：** 10 条评论
  - **焦点：** 180秒的压缩超时是单块墙钟时间，无法复用部分进度，导致合法长耗时操作被误杀。用户呼吁更灵活的超时策略。
  - **链接：** [Issue #92043](https://github.com/openclaw/openclaw/issues/92043)

- **MathJax/LaTeX 支持请求 (Issue #42840)**
  - **热度：** 8 条评论，7 个 👍
  - **焦点：** 用户强烈要求在 Control UI 中添加数学公式渲染支持。虽然长期未解决，但高点赞数表明这是高频需求。
  - **链接：** [Issue #42840](https://github.com/openclaw/openclaw/issues/42840)
  - **进展：** 相关修复 PR [#95995](https://github.com/openclaw/openclaw/pull/95995) 今日提交，引入了自托管 MathJax 包。

## 5. Bug 与稳定性
今日报告了大量 P1/P2 级稳定性问题，主要集中在会话管理和媒体处理：

| 严重程度 | 问题描述 | 关联 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **P1 Critical** | **视频生成任务死锁**：`video_generate` 背景任务在媒体就绪后仍保持 "running" 状态，阻塞后续流程。 | [Issue #95701](https://github.com/openclaw/openclaw/issues/95701)<br>Fix: [PR #95993](https://github.com/openclaw/openclaw/pull/95993) | **Fix PR Submitted** |
| **P1 Critical** | **子代理锁泄漏**：Subagent abort-settle 失败后未释放 `.jsonl.lock`，永久破坏会话。 | [Issue #95833](https://github.com/openclaw/openclaw/issues/95833) | Open |
| **P1 High** | **Gateway 多会话负载超时**：多代理/多会话场景下 Gateway 变慢或超时。 | [Issue #92057](https://github.com/openclaw/openclaw/issues/92057) | Open |
| **P1 High** | **Ollama 远程流未消费**：模型调用开始但未在聊天会话中推进。 | [Issue #94251](https://github.com/openclaw/openclaw/issues/94251) | Open |
| **P1 High** | **非 Anthropic 模型工具调用格式错误**：输出纯文本而非结构化 `tool_use` 块。 | [Issue #90288](https://github.com/openclaw/openclaw/issues/90288) | Open |
| **P2 Medium** | **iMessage 源回复延迟**：需要追踪和修复 iMessage 响应延迟问题。 | [Issue #96148](https://github.com/openclaw/openclaw/issues/96148) | Open |
| **P2 Medium** | **macOS TCC 权限狂轰滥炸**：`CLLocationManager` 每秒重建导致权限请求过多。 | [Issue #94147](https://github.com/openclaw/openclaw/issues/94147) | Open |
| **P2 Medium** | **DeepSeek 缓存命中率低**：6.x 升级后边界感知缓存破坏前缀匹配。 | [Issue #94518](https://github.com/openclaw/openclaw/issues/94518) | Open |

## 6. 功能请求与路线图信号
- **MCP 服务器作为压缩提供者 (Issue #96156)：** 允许 `agents.defaults.compaction.provider` 引用 MCP 服务器，扩展了压缩引擎的灵活性。
- **Topic-Session Families (Issue #90916)：** 为一位助手提供多个命名上下文车道的需求，旨在隔离近期转录但共享持久记忆。
- **Telegram Quote/Reply 第一类契约 (Issue #88032)：** 将 Telegram 的引用/回复处理从运行时补丁提升为正式配置项。
- **WebChat 会话命名 (Issue #93422)：** 请求 `/label` 和 `/new <name>` 命令以改善多会话管理体验。
- **全局 SSRF 策略配置 (Issue #93068)：** 希望统一配置网关级别的 SSRF 策略，而非在每个子系统单独配置。

**分析：** 这些请求表明用户正在从“基本可用”转向“精细化控制”和“企业级集成”。特别是 MCP 集成和会话家族概念，可能预示未来版本将加强插件生态和上下文管理能力。

## 7. 用户反馈摘要
- **痛点：** 用户对 **自动更新导致的模块缓存不一致** (Issue #85844) 和 **模型提供商 ID 重命名后的 OAuth 孤儿账户** (Issue #95136) 感到困扰，认为缺乏平滑的迁移路径。
- **满意度：** 尽管 Bug 众多，但社区对快速响应的修复 PR（如视频生成死锁、Discord 附件问题）表示认可。
- **使用场景：** 大量反馈涉及 **多代理协作** (Subagent locks, Cron isolation) 和 **媒体生成** (Image/Video generation delivery failures)，显示高级工作流是核心使用场景。
- **平台差异：** macOS 用户特别抱怨本地网络权限和 LaunchAgent 环境包装器的覆盖问题；Windows 用户则报告了 ACPX 运行时 spawn 失败的问题 (Issue #93465)。

## 8. 待处理积压
- **Issue #92043 (Compaction Timeout)：** 长期存在的超时逻辑缺陷，影响长历史会话的稳定性，需产品决策。
- **Issue #88657 (DeepSeek V4 Flash Incomplete Turn)：** 特定模型提供商的兼容性 Bug，影响部分用户群体。
- **Issue #49931 (Configurable Shell Override)：** Windows 用户长期请求的 exec 工具 shell 可配置性，目前仍硬编码 PowerShell。
- **Issue #79047 (Cross-Backend Context Preservation)：** 跨后端模型切换时保留对话上下文的功能请求，涉及复杂的会话状态管理。

**建议：** 维护者应优先处理与 **会话锁定** 和 **媒体任务状态机** 相关的 Bug，这些是当前稳定性的最大隐患。同时，需加快 SQLite 迁移的收尾工作，以解决长期存在的状态一致性问题。

---

## 横向生态对比

基于 2026-06-24 的开源项目社区动态，以下是个人 AI 助手与自主智能体开源生态的横向对比分析报告。

### 1. 生态全景
2026 年中旬，个人 AI 助手生态已从“功能堆砌”全面转向**“核心稳定性加固”**与**“企业级安全合规”**阶段。OpenClaw、Hermes Agent 和 ZeroClaw 等头部项目正集中解决高并发下的会话状态一致性、资源死锁及供应链安全问题，标志着项目进入生产可用性的深水区。与此同时，NanoBot 和 CoPaw 等新兴力量通过移动端优化（PWA/Tauri）和细粒度模型路由，争夺轻量化与多模态交互的用户体验高地。整体生态呈现出“底层架构重构”与“上层交互创新”并行的双轨发展态势。

### 2. 各项目活跃度对比

| 项目名称 | 来源 | Issues (24h) | PR (24h) | Release | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | openclaw/openclaw | 185 | 500 | 无 (修复回归) | ⭐⭐⭐⭐⭐ (极高活跃度，核心攻坚期) |
| **CoPaw** | agentscope-ai/CoPaw | 38 | 50 | v1.1.12.post2 | ⭐⭐⭐⭐ (移动端重构期，Bug 较多) |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 40 | 50 | 无 (v0.8.2 预备) | ⭐⭐⭐⭐ (安全与稳定性并重) |
| **Hermes Agent** | nousresearch/hermes-agent | 50 | 50 | 无 (v0.17.x 维护) | ⭐⭐⭐⭐ (密集修复，平台适配关键期) |
| **NanoBot** | HKUDS/nanobot | 11 | 39 | v0.2.2 | ⭐⭐⭐⭐ (快速迭代，PWA/记忆重构) |
| **IronClaw** | nearai/ironclaw | 17 | 36 | 无 | ⭐⭐⭐ (Reborn 子系统阻塞期) |
| **PicoClaw** | sipeed/picoclaw | 2 | 21 | 无 | ⭐⭐⭐ (安全加固与依赖升级) |
| **NanoClaw** | qwibitai/nanoclaw | 1 | 13 | 无 | ⭐⭐⭐ (架构扩展性与 Slack 集成) |
| **LobsterAI** | netease-youdao/LobsterAI | 0 | 10 | 无 | ⭐⭐ (启动故障阻塞，维护滞后) |
| **NullClaw** | nullclaw/nullclaw | 1 | 2 | 无 | ⭐⭐ (低频维护，兼容性问题) |
| **Moltis** | moltis-org/moltis | 0 | 1 | 无 | ⭐⭐⭐ (平稳期，多媒体补齐) |
| **TinyClaw** | TinyAGI/tinyagi | 0 | 0 | 无 | ⭐ (无活动) |
| **ZeptoClaw** | qhkm/zeptoclaw | 0 | 0 | 无 | ⭐ (无活动) |

### 3. OpenClaw 在生态中的定位
*   **优势**：**社区规模与技术深度绝对领先**。24 小时内 185 个 Issue 和 500 个 PR 的吞吐量远超其他项目，表明其拥有最庞大的用户基数和最活跃的贡献者群体。其聚焦于“会话状态一致性”和“SQLite 迁移”，确立了其作为**高并发、多代理复杂工作流基准框架**的地位。
*   **技术路线差异**：与其他项目相比，OpenClaw 更倾向于**底层基础设施重构**（如 Path 3 迁移、锁机制修复），而非单纯的功能叠加。它试图解决 Agent 框架中最棘手的“状态管理”和“资源竞争”问题，这是许多轻量级框架（如 NanoBot）尚未深入触及的领域。
*   **社区规模**：通过 Issue 评论数（如 #88838 有 40+ 评论）和 Diamond Lobster 评级机制，显示出其社区具有高度的技术参与感和治理成熟度。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **会话状态与一致性** | OpenClaw, NanoBot, CoPaw, ZeroClaw | OpenClaw 修复锁死锁；NanoBot 重构记忆系统；CoPaw 解决配置持久化丢失；ZeroClaw 讨论插件隔离。核心痛点在于多代理、长时间运行下的状态保真。 |
| **移动端/跨平台体验** | NanoBot, CoPaw, LobsterAI | NanoBot 推出 PWA；CoPaw 大规模重构移动端 UI；LobsterAI 抱怨 Electron 原生控件体验差。用户强烈要求 Agent 助手具备原生 App 般的移动体验。 |
| **细粒度模型路由与控制** | NanoBot, Hermes Agent, OpenClaw | NanoBot 允许 Cron/Subagent 独立指定模型；Hermes 请求每轮 Provider 覆盖；OpenClaw 优化 MCP 压缩提供者。目的是在成本与性能间取得平衡。 |
| **安全性与供应链加固** | ZeroClaw, PicoClaw, OpenClaw | ZeroClaw 推进 SLSA 签名和 SSRF 防护；PicoClaw 修复命令执行漏洞；OpenClaw 修复 Gateway 路由注册。安全从“可选”变为“必选”。 |
| **媒体与多模态集成** | Moltis, OpenClaw, NanoClaw | Moltis 新增 `send_image`；OpenClaw 修复视频生成死锁；NanoClaw 推进 IMAP 邮件集成。AI 助手正从纯文本向富媒体交互演进。 |

### 5. 差异化定位分析

*   **OpenClaw**: **企业级/重度用户基石**。适合需要极高稳定性、复杂多代理协作和深度自定义的工作流。技术栈偏向 Rust/Go 混合或重型后端，强调核心引擎的健壮性。
*   **NanoBot**: **开发者/极客的首选轻量级框架**。以快速迭代、PWA 支持和灵活的记忆系统为卖点，适合个人开发者快速搭建定制化助手，对模型兼容性（如 Kimi, Anthropic）支持极佳。
*   **Hermes Agent**: **研究与教育导向**。Nous Research 背景赋予其学术严谨性，注重 Desktop/TUI 体验和插件生态，适合对 Agent 原理有研究需求的用户和企业内部部署。
*   **CoPaw**: **AgentScope 生态的移动化延伸**。依托 AgentScope 2.0，重点解决移动端适配和记忆管理，适合已有 AgentScope 技术栈并希望拓展至移动端的团队。
*   **ZeroClaw**: **安全敏感型部署**。主打供应链安全和插件隔离，适合对数据安全有严格要求的企业或政府机构。
*   **LobsterAI**: **国内生态适配者**。侧重 Telegram/WhatsApp 等 IM 集成及 Electron 桌面体验，但当前面临严重的版本升级兼容性危机。

### 6. 社区热度与成熟度

*   **快速迭代/成长期 (High Velocity)**:
    *   **OpenClaw, NanoBot, CoPaw**: 这些项目 PR 数量巨大，功能更新频繁，但伴随大量回归 Bug（如 CoPaw 的渲染崩溃、NanoBot 的 Telegram 格式问题）。它们正在通过高频发版来验证功能，技术债务积累较快。
*   **质量巩固/稳定期 (Stability Focus)**:
    *   **Hermes Agent, ZeroClaw, IronClaw**: 活跃度依然很高，但重心明显转向 Bug 修复、安全加固和架构重构（如 ZeroClaw 的 RFC 讨论，IronClaw 的 Reborn 稳定性）。这些项目更接近生产就绪状态。
*   **维护/停滞期 (Maintenance/Stagnant)**:
    *   **LobsterAI, NullClaw, TinyClaw, ZeptoClaw**: 活动极少，存在未解决的严重 Bug（如 LobsterAI 的启动死循环）或长期未响应的 Issue。对于新用户而言，采用风险较高。

### 7. 值得关注的趋势信号

1.  **“状态管理”成为最大技术瓶颈**: 几乎所有活跃项目都在处理会话锁、记忆持久化和配置漂移问题。这表明当前的 Agent 框架在**确定性**方面仍不成熟，谁能率先提供完美的状态一致性解决方案，谁就能赢得企业级市场。
2.  **移动端不再是“锦上添花”:** NanoBot 和 CoPaw 的大举投入表明，用户不再满足于通过网页访问 AI 助手，**PWA 和原生移动端体验**已成为核心竞争力的关键组成部分。
3.  **安全合规前置化**: ZeroClaw 的 SLSA 签名和 PicoClaw 的命令执行修复显示，开源 AI 项目正在主动向**企业级安全标准**靠拢。未来的选型必须考虑供应链安全和权限隔离。
4.  **模型路由的经济性驱动**: 用户不再仅仅关心“哪个模型更强”，而是关心“如何在不同任务阶段使用不同成本的模型”（如 NanoBot 的子代理模型覆盖）。**成本优化**将成为 Agent 架构设计的核心考量因素。

**建议**: 对于技术决策者，若追求极致稳定和复杂工作流，**OpenClaw** 仍是首选，但需投入资源应对其复杂性；若侧重快速原型开发和移动端体验，**NanoBot** 更具吸引力；若处于企业合规敏感环境，需密切关注 **ZeroClaw** 的安全进展。应避免选择处于停滞期的项目，除非有强大的内部维护能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub API (HKUDS/nanobot)

## 1. 今日速览
NanoBot 在 v0.2.2 版本发布后保持了极高的社区活跃度。过去24小时内，项目处理了 11 个 Issues 和 39 个 Pull Requests，显示出强大的维护能力和密集的迭代节奏。开发重点集中在 **WebUI 移动端体验优化（PWA支持）**、**多模型提供商兼容性修复（特别是 Anthropic/Kimi 协议细节）** 以及 **记忆系统（Memory）的底层重构**。虽然新发布了 v0.2.2，但社区迅速反馈并修复了若干回归问题（如 Telegram 显示 bug、Thinking 标签渲染错误），表明核心功能正在快速走向稳定。

## 2. 版本发布
### v0.2.2 (Released)
- **核心亮点**：强调“耐用性”（Durability）。
- **主要改进**：
  - **会话持久化增强**：WebUI 对话转录文件被分段存储，避免单一大文件导致的脆弱性；分支聊天（forked chats）的回复保留更可靠。
  - **贡献者增长**：合并了 140 个 PR，新增 21 位贡献者，社区协作显著扩大。
- **迁移注意**：由于会话存储结构的改变，建议用户检查本地 `conversations` 目录的备份情况，尽管设计上旨在向后兼容，但分段逻辑可能影响旧版手动脚本的处理方式。

## 3. 项目进展
今日合并/关闭的 PR 显著推动了以下领域的进展：
- **移动端原生体验**：通过 PR #4458/#4479 实现了 PWA 支持（Manifest, Service Worker）及移动端侧边栏手势，使 NanoBot 在移动设备上具备接近原生应用的性能和离线能力。
- **提供商兼容性深化**：
  - 修复了 Anthropic 协议下并行 `tool_use` ID 重复导致的 400 错误（PR #4474, #4444），这对使用 Kimi Coding 等兼容端点的用户至关重要。
  - 新增 OpenCode Zen 和 OpenCode Go 提供商支持（PR #4476），扩展了低成本和高可靠性编码模型的选择。
- **记忆系统重构**：
  - 引入生命周期感知的 Wiki 记忆写入器（PR #4477），实现自动的事实去重、过期处理和概念注入。
  - 优化了记忆归档逻辑，确保在压缩历史时不丢失关键的交付上下文（PR #4373, #4424）。

## 4. 社区热点
以下 Issue/PR 获得了较高的关注度或代表了关键的技术争论点：

1. **[OPEN] #2298 Breaking endless tool calling loops**
   - **链接**: [Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)
   - **分析**: 用户报告小模型容易陷入无限工具调用循环。这是一个普遍存在的 Agent 稳定性痛点。虽然尚未有直接修复 PR，但社区期待在 v0.2.x 后续版本中加入“最大重试次数”或“工具调用去重检测”机制。

2. **[OPEN] #4465 Bug: WebUI renders <thinking/> tags as visible text**
   - **链接**: [Issue #4465](https://github.com/HKUDS/nanobot/issues/4465)
   - **分析**: 推理标签泄露到前端界面，影响用户体验。这与 #2305（隐藏推理步骤显示）相关。用户希望既能利用思维链提升准确性，又能保持界面整洁。预计下一步会有针对 WebUI 渲染层的过滤补丁。

3. **[OPEN] #4463 feat: Support Kimi Coding Plan**
   - **链接**: [Issue #4463](https://github.com/HKUDS/nanobot/issues/4463)
   - **分析**: 随着 v0.2.2 对 Anthropic 协议的修复，Kimi Coding 的支持变得更加可行。社区对此表现出浓厚兴趣，尤其是对于需要高性价比编码助手的开发者。

4. **[CLOSED] #4410 [bug] Heartbeat cron sending unexpected messages**
   - **链接**: [Issue #4410](https://github.com/HKUDS/nanobot/issues/4410)
   - **分析**: 升级后心跳定时任务行为异常，即使没有特殊指令也发送消息。这属于严重的回归 Bug，已在内部标记为已关闭，暗示修复已在 v0.2.2 或紧随其后的补丁中。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 关联 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **Telegram 消息格式崩坏**：换行符丢失，且消息在流式传输期间频繁闪烁/编辑。 | [Issue #4470](https://github.com/HKUDS/nanobot/issues/4470) / [PR #4472](https://github.com/HKUDS/nanobot/pull/4472) | **Fix Pending** (PR #4472 提出跳过富文本发送以解决闪烁) |
| **中** | **iOS Safari 输入框缩放**：Composer 字体小于 16px 导致移动端浏览器自动缩放，破坏 UI。 | [PR #4471](https://github.com/HKUDS/nanobot/pull/4471) | **Fixed** |
| **中** | **Thinking 标签渲染泄露**：LLM 的思考过程以原始标签形式显示在聊天窗口中。 | [Issue #4465](https://github.com/HKUDS/nanobot/issues/4465) | **Open** |
| **低** | **Dream 游标不前进**：禁用 Dream 功能后，历史读取游标停滞，导致提示词膨胀。 | [PR #4481](https://github.com/HKUDS/nanobot/pull/4481) | **Fixed** |
| **低** | **配置保存丢失 Cron**：保存配置时，自定义的 Dream Cron 设置因序列化排除而静默丢失。 | [PR #4478](https://github.com/HKUDS/nanobot/pull/4478) | **Fixed** |

## 6. 功能请求与路线图信号
- **自定义 Thinking 风格支持**：[PR #4482](https://github.com/HKUDS/nanobot/pull/4482) 允许自定义提供商配置非标准的 thinking 参数（如火山引擎/豆包）。这反映了用户对多样化模型深度集成的需求。
- **子代理模型覆盖**：[PR #4415](https://github.com/HKUDS/nanobot/pull/4415) 和 [PR #4416](https://github.com/HKUDS/nanobot/pull/4416) 引入了 Cron 任务和子代理（Subagent）的独立模型预设。这表明路线图正朝着**更细粒度的成本控制**和**专用模型路由**方向发展，允许用户在后台任务中使用廉价模型，在前台交互中使用强大模型。
- **记忆归档优化**：[PR #4402](https://github.com/HKUDS/nanobot/pull/4402) 和 [PR #4424](https://github.com/HKUDS/nanobot/pull/4424) 展示了“主动记忆合并”和“基于来源上下文的归档”功能。未来版本将极大提升长对话的记忆效率和准确性，减少幻觉。

## 7. 用户反馈摘要
- **痛点**：
  - **Telegram 集成体验差**：用户抱怨消息格式混乱和视觉闪烁（#4470），急需修复以维持即时通讯渠道的可用性。
  - **小模型稳定性不足**：用户指出小参数模型在处理复杂工具调用时容易死循环（#2298），这是当前 Agent 框架的通用难题，但在 NanoBot 用户中感知强烈。
  - **UI 细节缺失**：Thinking 标签直接显示在界面上让普通用户感到困惑（#4465），同时 iOS 端的自动缩放破坏了移动端布局。
- **满意点**：
  - **PWA 支持**：用户欢迎移动端安装和离线缓存功能，认为这提升了便携性。
  - **配置灵活性**：能够指定不同场景（Cron/Subagent）使用不同模型，被视为高级用户非常看重的特性。

## 8. 待处理积压
- **[OPEN] #2298 Breaking endless tool calling loops**
  - **建议**：维护者应考虑在 `agent/loop.py` 中增加硬性的工具调用去重计数器或最大步数限制，作为防止无限循环的兜底策略。
- **[OPEN] #4465 WebUI renders <thinking/> tags as visible text**
  - **建议**：需在前端渲染层添加正则替换或 CSS 隐藏逻辑，或者在后端输出时剥离这些标签（如果用户不需要看到思考过程）。
- **[OPEN] #4479 feat(webui): PWA support and mobile swipe gesture**
  - **备注**：虽然功能已合并（PR #4480），但此 Issue 仍开放，可能用于跟踪后续的手势微调或浏览器兼容性反馈。

---
*Generated by Agnes-2.0-Flash based on NanoBot GitHub Data.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub NousResearch/hermes-agent

## 1. 今日速览
Hermes Agent 项目在 2026-06-24 保持极高的社区活跃度，过去 24 小时内新增 50 条 Issue 和 50 条 PR，显示出开发团队与贡献者之间紧密的迭代节奏。虽然今日无新版本发布，但大量高优先级的 Bug 修复 PR（特别是涉及 Gateway 安全性、Telegram/Slack 消息传递稳定性及 Desktop 体验优化）已进入评审或合并阶段。项目整体处于“稳定化”阶段，重点解决 v0.17 升级后出现的回归问题和多平台适配痛点，基础设施健壮性显著提升。

## 2. 版本发布
**无新版本发布。**
当前主要维护分支为 `main`，基于 v0.17.x 系列进行补丁修复和功能增强。

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在提升系统稳定性、安全性和用户体验：

*   **安全加固与网关修复：**
    *   **#51518 (Closed/Merged)**: 强制对 Session ID 长度进行限制，防止潜在的拒绝服务攻击。
    *   **#51519 (Closed/Merged)**: 修正幂等性指纹作用域，确保不同会话上下文下的幂等键不会冲突，提升 API 可靠性。
    *   **#45734 (Closed/Merged)**: 修复 WeCom 平台的路径遍历漏洞，采用“fail-closed”策略增强安全性。
*   **Desktop 与 TUI 体验优化：**
    *   **#51422 (Closed/Merged)**: 修复技能卸载后配置残留问题，确保 `config.yaml` 与 Hub 锁定文件同步。
    *   **#51493 (Closed/Merged)**: 修正桌面端默认模型推荐逻辑，避免新用户意外触发高额账单（Opus-tier）。
    *   **#51501 (Closed/Merged)**: 优化 Desktop 聊天恢复机制，实现懒加载并加强 Windows 后端清理，减少进程泄漏。
*   **Agent 核心逻辑修复：**
    *   **#51510 (Closed/Merged)**: 修复 Anthropic 工具转换中名称为空导致的错误，确保工具调用格式符合规范。
    *   **#51516 (Closed/Merged)**: 修复委托任务中配置重载滞后问题，确保实时配置生效。

**整体推进：** 项目从单纯的“功能堆砌”转向“质量保障”，今日合并的 PR 显著降低了因配置不一致、安全漏洞和进程泄漏导致的运行风险。

## 4. 社区热点
以下是评论区最活跃、关注度最高的 Issue：

*   **[Bug] OpenAI-Codex 凭证池在轮换时丢失新凭证 (#19566)**
    *   **热度:** 8 条评论, 1 👍
    *   **分析:** 用户报告在多进程并发下 `auth.json` 重写导致凭证丢失。这反映了 Hermes 在高并发生产环境下的状态一致性挑战，是开发者高度关注的稳定性问题。
*   **[Bug] Telegram 流式消息超过 4096 字符导致无限嵌套回复循环 (#48648)**
    *   **热度:** 6 条评论, 1 👍
    *   **分析:** 这是一个严重的用户体验 Bug，导致 Telegram 机器人失控。社区正在寻求根因分析和快速补丁，凸显了长文本流式处理的边缘情况测试不足。
*   **[Feature] 统一插件路由选择器以支持每轮 Provider/Model 覆盖 (#41190)**
    *   **热度:** 6 条评论, 1 👍
    *   **分析:** 高级用户强烈要求更细粒度的路由控制，以便在单次对话中动态切换模型（如主流程用便宜模型，关键步骤用强模型）。这代表了 Hermes 向更灵活、可定制的 Agent 框架演进的需求。
*   **[Bug] npm ci 在 npm 11 下因锁文件版本不匹配失败 (#44121)**
    *   **热度:** 6 条评论
    *   **分析:** 随着 Node.js 生态快速迭代，Hermes 的安装脚本需要跟进新版 npm 的行为变化，否则将阻碍新用户的本地部署。

## 5. Bug 与稳定性
今日报告了大量 P1/P2 级 Bug，主要集中在 Gateway 通信和 Agent 辅助功能：

| 严重等级 | Issue/PR 编号 | 问题描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **P1** | #30594 | `hermes update` 在 PEP 668 系统 Python 环境下失败 | 待修复 |
| **P1** | #51325 | WSL 无 systemd 时 Gateway 重启导致僵尸进程占用端口 | 待修复 |
| **P2** | #19566 | OpenAI-Codex 凭证轮换丢失 | 待修复 |
| **P2** | #48648 | Telegram 4096 字符溢出导致无限循环 | 待修复 |
| **P2** | #25822 | Gemini 503 错误未触发备用 Provider | 待修复 |
| **P2** | #51463 | Signal 网关重复发送消息 (回归问题) | 待修复 |
| **P2** | #51476 | Z.AI Vision 自动映射到不可用模型 | 待修复 |
| **P2** | #51518 | Session ID 长度未限制 (Security) | **已合并 (#51518)** |
| **P2** | #51519 | 幂等性指纹作用域错误 (Security) | **已合并 (#51519)** |

**稳定性评估：** 尽管合并了安全相关 PR，但 Telegram、Signal 和 Gemini 的集成仍暴露出多处回归和边界情况 Bug，建议在下一个补丁版本前加强这些平台的端到端测试。

## 6. 功能请求与路线图信号
*   **WhatsApp 模板消息支持 (#45935):** 企业用户急需在非 24 小时窗口内通过模板消息重新激活对话，这是 WhatsApp 商业应用的关键需求。
*   **Slack AI App 思考步骤与任务卡片 (#51363):** 用户希望利用 Slack 原生 UI 特性展示 Agent 推理过程，提升透明度和用户体验。
*   **渐进式后台预压缩缓存 (#35467):** 解决当前上下文压缩阻塞主线程的问题，通过后台异步处理提升 Agent 响应速度。
*   **Delegate Task 模型指定参数 (#35437):** 允许子 Agent 独立指定模型/Provider，实现成本优化和能力分层。
*   **大消息离线存储 (#50073):** 当单条消息超出窗口限制时，将其写入文件并保留引用，避免 HTTP 413 错误。此功能已通过 PR #50073 提出，有望纳入后续版本。

## 7. 用户反馈摘要
*   **痛点：**
    *   **配置漂移：** 用户频繁遇到配置更改（如模型切换、技能安装/卸载）未能实时生效或残留旧配置的问题（#51516, #51422）。
    *   **平台适配粗糙：** Telegram 和 Signal 的消息处理逻辑存在明显缺陷（无限循环、重复发送、输入指示器卡住），影响移动端体验。
    *   **安装兼容性：** 新版 npm/Node 和 PEP 668 标准导致部分 Linux 发行版和 Windows 环境下的安装/更新失败。
*   **满意点：**
    *   **Desktop 功能增强：** 用户对“First-class Projects” (#49037) 和更好的代码审查面板表示期待，认为这提升了 Hermes 作为开发工具的竞争力。
    *   **安全性意识：** 社区对路径遍历和 Session ID 注入等安全修复持积极态度，认可团队对安全边界的重视。

## 8. 待处理积压
*   **#30594:** `hermes update` 在受保护的 Python 环境中失败，影响大量服务器端用户，需优先解决以维持更新通道畅通。
*   **#51325:** WSL 环境下的 Gateway 进程管理问题，对于使用 Windows 子系统的开发者群体影响较大。
*   **#43334:** Windows 安装程序不支持自定义安装路径且无法处理含空格的用户名，限制了企业部署灵活性。
*   **#47837:** Native Windows 上 Bash 路径解析错误，导致终端工具链工作异常。

**建议：** 维护者应优先处理与安装、更新和核心平台（Telegram/Slack/Signal）通信相关的 P1/P2 Bug，以确保 v0.17.x 系列的稳定性口碑。同时，关注社区对细粒度路由控制的呼声，将其纳入未来版本的功能规划。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 在过去24小时内保持了极高的开发活跃度，共产生 **21 条 PR** 和 **2 条 Issue** 更新。其中 **10 条 PR 已被合并**，主要集中在安全性修复、依赖升级及特定渠道（WhatsApp, Telegram, OpenAI兼容层）的稳定性增强。开发者 `danmobot` 和 `chengzhichao-xydt` 贡献显著，项目整体处于快速迭代与维护并重的健康状态。无新版本发布，但内部代码库正经历一系列关键的安全加固和功能补全。

## 2. 版本发布
**无新版本发布。**
当前主要版本仍为 v0.2.9 左右，大量依赖更新（Vite, ESLint, Shadcn）和核心逻辑修复尚未打包为正式 Release。

## 3. 项目进展
今日合并/关闭的 PR 对项目的稳定性和安全性有重要推进：

*   **安全性加固：**
    *   **[PR #3161]** 修复了执行命令时的安全策略漏洞，确保 `deny` 模式在自定义 `allow` 规则下依然生效，防止恶意 payload 绕过限制。
    *   **[PR #3160]** 增强了认证流程的安全性，通过浏览器来源检查（Provenance checks）拒绝跨站启动器密码设置请求，防止 CSRF 攻击。
    *   **[PR #3154]** 修复了 Volcengine Doubao Seed 模型工具调用泄漏为 XML 标签导致的解析错误，提升了多模型兼容性。
*   **渠道稳定性与维护：**
    *   **[PR #3162]** 完善了 WhatsApp 渠道的重连机制和异步消息处理，解决了 WebSocket 断开连接的问题，提升了长连接稳定性。
    *   **[PR #3059, #3054, #3053, #3091]** 由 `chengzhichao-xydt` 提交的一系列修复，消除了 Go 代码中的未检查类型断言和资源 Close 错误忽略，显著降低了运行时 Panic 风险，提升了代码健壮性。
*   **前端依赖升级：**
    *   **[PR #3104, #3103, #3100, #3101, #3105]** 自动化工具更新了 Vite, TypeScript-ESLint, ESLint, Shadcn 等核心依赖至最新版本，确保前端生态的技术栈保持现代且安全。

## 4. 社区热点
*   **[Issue #3159] [BUG] 经常重复任务**
    *   **链接:** https://github.com/sipeed/picoclaw/issues/3159
    *   **分析:** 用户报告在使用 DeepSeek 模型时，AI 会在回答当前问题前重复执行之前的任务（如先查美国新闻再查法国新闻，却在法国新闻回答中重做美国新闻）。这反映了用户在复杂多轮对话或并行任务流中对“上下文隔离”和“任务状态重置”的强烈需求。
*   **[PR #3118] Add remote Pico WebSocket mode**
    *   **链接:** https://github.com/sipeed/picoclaw/pull/3118
    *   **分析:** 新增 `picoclaw agent` 的远程 WebSocket 模式，允许通过 `--remote` 参数连接远程实例。这表明社区正在探索更灵活的分布式部署和远程代理控制场景，是该 PR 的高关注度原因。
*   **[Issue #3015] QQ channel connection failure**
    *   **链接:** https://github.com/sipeed/picoclaw/issues/3015
    *   **分析:** 尽管该 Issue 已关闭，但其涉及的 Windows 环境下 QQ 频道 Token 获取超时问题，揭示了非 Linux 环境下的兼容性挑战，仍有潜在用户关注。

## 5. Bug 与稳定性
*   **高严重性 (已修复):**
    *   **WhatsApp 断连:** [PR #3162] 修复了因缺乏心跳处理和重连机制导致的自动断开问题。
    *   **Doubao 模型解析错误:** [PR #3154] 修复了特定模型返回格式异常导致的工具调用识别失败。
    *   **执行权限绕过:** [PR #3161] 修复了安全策略配置错误导致的潜在命令注入风险。
*   **中低严重性 (已修复/缓解):**
    *   **Go Panic 风险:** [PR #3054, #3053, #3091] 修复了多处未检查的类型断言，避免了潜在的运行时崩溃。
    *   **Session 历史加载:** [PR #3047] 恢复了会话详情的完整 JSONL 历史读取，解决了列表页与详情页数据不一致的问题。
*   **待观察:**
    *   **任务重复执行:** [Issue #3159] 目前尚无明确合并的 PR 针对此问题，可能涉及模型侧或 Agent 编排逻辑，需持续关注。

## 6. 功能请求与路线图信号
*   **Android ADB 支持:** [PR #3157] 新增实验性的 Android ADB 工具，支持设备列表、截图、UI 层级分析和模拟操作。这标志着 PicoClaw 正在从纯软件/Web 交互向物理设备控制扩展，未来版本可能会将 Android 控制列为正式功能。
*   **AWS Bedrock 缓存优化:** [PR #3163] 引入了 AWS Bedrock Converse API 的提示词缓存功能，旨在降低延迟和成本。这反映了项目对云原生高性能集成能力的重视。
*   **Telegram 交互优化:** [PR #2975] 允许在群聊中将“回复机器人消息”视为“@提及”，提升了 Telegram 用户的自然交互体验。

## 7. 用户反馈摘要
*   **痛点:** 用户在使用 DeepSeek 等模型时，对多步任务的上下文管理感到困惑，希望 AI 能更清晰地分割独立任务，避免“记忆重叠”。
*   **满意点:** 开发者对安全漏洞（如执行权限、CSRF）的响应速度极快，且在 Windows 兼容性、WhatsApp 稳定性等方面进行了细致的修补，提升了整体可靠性。
*   **新需求:** 远程代理控制和移动设备（Android）自动化成为新的兴趣点，用户希望 PicoClaw 不仅能作为聊天助手，还能作为 IoT 或移动设备的控制中枢。

## 8. 待处理积压
*   **Issue #3159:** 任务重复执行问题，建议维护者关注 Agent 的状态管理机制或引导用户优化 Prompt 结构。
*   **PR #3118 (Remote WebSocket):** 虽然功能强大，但作为新功能可能需要进行更广泛的测试，特别是网络延迟和安全性方面的考量。
*   **PR #3157 (Android ADB):** 处于实验阶段，需确认其在不同 Android 版本和设备上的兼容性，以及是否需要在文档中明确标记为“Experimental”。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 在 2026-06-23 保持高频开发节奏，过去24小时内共产生 13 个 PR 和 1 个新 Issue。核心亮点在于 **Chat SDK 全面升级至 v4.29.0** 以及 **Slack Socket Mode** 的正式支持，显著降低了本地部署和网络配置门槛。尽管无新版本 Release 发布，但多个底层依赖和通道适配器的同步更新表明项目正处于密集的技术栈迭代期。社区活跃度较高，贡献者集中在基础设施加固、扩展点抽象及特定渠道集成上。

## 2. 版本发布
*   **无新版本发布。**
*   **注意：** 虽然未触发 Tag 发布，但内部依赖 `chat` SDK 及所有 `@chat-adapter/*` 包已统一升级至 **v4.29.0** (参见 PR #2834, #2835, #2836)。

## 3. 项目进展
今日主要进展集中在架构扩展性、依赖同步及用户体验优化：

*   **架构扩展性增强：**
    *   **PR #2842 & #2841** (foxsky): 引入了通用的、惰性的扩展点接缝（extension-point seams）。通过 `registerX()` / `applyX()` 模式，允许下游 Fork 在不修改核心逻辑的情况下注入自定义行为，且对上游保持字节级兼容。这是项目模块化能力的重要提升。
*   **Slack 集成重大突破：**
    *   **PR #2837** (gabi-simons): 实现了 Slack **Socket Mode**。用户只需设置 `SLACK_APP_TOKEN`，Bot 即可通过出站 WebSocket 连接，无需公网 IP 或入站 Webhook 端口。这对本地开发和 NAT 后的主机是巨大的便利性改进。
*   **依赖版本同步：**
    *   **PR #2834, #2835, #2836**: 将 `main`、`channels` 和 `providers` 分支的 Chat SDK 统一锁定为 v4.29.0，解决了因版本不匹配导致的类型检查失败问题。
*   **审批流程优化：**
    *   **PR #2832** (moshe-nanoco): 在模块审批卡片中增加了“拒绝并附带理由”的功能，使 Agent 能根据反馈调整后续行为，提升了人机协作的透明度。
*   **技能更新修复：**
    *   **PR #2826** (Koshkoshinsk): 修复了 `/update-nanoclaw` 命令中可能遗漏 Channel/Provider 分支更新的问题，强制在重新应用时重建容器以确保技能同步。

## 4. 社区热点
*   **Slack 端口冲突报告 (Issue #2840)**
    *   **链接:** [nanocoai/nanoclaw Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840)
    *   **分析:** 用户 `sirpy` 指出官方文档建议通过隧道连接 3000 端口，但该端口已在外部 IP 上被占用，导致隧道失效。这反映了当前文档与实际网络环境之间的脱节，特别是对于非标准网络拓扑的用户。虽然 Socket Mode (#2837) 理论上规避了此问题，但旧版 Webhook 模式的文档仍需澄清。

## 5. Bug 与稳定性
*   **潜在配置冲突 (Issue #2840):** 如上所述，端口绑定冲突是一个明确的配置 Bug，影响 Slack Webhook 模式的使用体验。
*   **技能更新遗漏风险 (PR #2826):** 之前的更新机制存在逻辑缺陷，可能导致用户在 Host 更新后错过 Channel/Provider 的重要修复。该问题已通过 PR #2826 进行修复（已合并/关闭）。
*   **容器性能隐患 (PR #2771):** 长期存在的 Chromium 渲染缓冲区不足问题。PR #2771 提出增加 `--shm-size=1g` 和 `--init` 参数以稳定 agent 容器运行，目前仍为 OPEN 状态，属于稳定性关键项。

## 6. 功能请求与路线图信号
*   **IMAP/SMTP 邮件集成 (PR #1235):**
    *   **链接:** [nanocoai/nanoclaw PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
    *   **分析:** 由 `aronjanosch` 提交的长期开放 PR，旨在将 IMAP 作为可选通道和工具集引入。包含 6 个 MCP 工具（如 `list_emails`, `compose_email` 等）。尽管创建时间较早（2026-03-18），但在 2026-06-22 仍有活动迹象，表明社区对邮件自动化有持续需求，有望纳入下一版本的核心通道支持。
*   **Manifest 模型路由提供程序 (PR #2838):**
    *   **链接:** [nanocoai/nanoclaw PR #2838](https://github.com/nanocoai/nanoclaw/pull/2838)
    *   **分析:** 新增一个 Feature Skill，用于管理模型路由，进一步丰富了项目的 LLM 抽象层能力。

## 7. 用户反馈摘要
*   **网络配置痛点:** 用户普遍反映本地部署时端口冲突和防火墙/NAT 配置复杂。**Slack Socket Mode** 的引入直接回应了这一痛点，消除了对外部端口的依赖。
*   **协作透明度需求:** 用户对 Agent 决策过程的“黑盒”感到不满。**PR #2832** 提供的“拒绝理由”功能直接满足了用户希望了解 Agent 为何被否决的需求，有助于调试和优化 Agent 行为。
*   **依赖管理焦虑:** 多分支（main/channels/providers）依赖版本不同步曾引发构建错误。**PR #2834-2836** 的集中化版本锁定策略获得了维护者的重视，旨在减少此类 CI/CD 摩擦。

## 8. 待处理积压
*   **PR #2771 (perf(container): --shm-size=1g + --init for agent containers)**
    *   **链接:** [nanocoai/nanoclaw PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)
    *   **状态:** OPEN
    *   **建议:** 该 PR 针对 Chromium 在无头模式下常见的共享内存不足崩溃问题提供了明确的修复方案。鉴于其涉及核心 Agent 容器的稳定性，建议优先审查并合并。
*   **PR #1235 (feat: add IMAP/SMTP email integration)**
    *   **链接:** [nanocoai/nanoclaw PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
    *   **状态:** OPEN
    *   **建议:** 虽然功能强大，但需确认其与现有 Socket Mode 等新兴集成模式的兼容性。若架构评估通过，可排入后续版本。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**：2026-06-24
**数据来源**：GitHub (github.com/nullclaw/nullclaw)

### 1. 今日速览
过去24小时内，NullClaw 项目保持低频但稳定的维护节奏。社区活跃度一般，仅产生1条 Issue 更新（已关闭）和2条 Pull Request 更新（均处于开放待合并状态）。未发生新版本发布，项目核心代码库通过两个技术型 PR 在后台进行功能增强与稳定性修复。整体来看，项目处于“修修补补”的稳健期，无重大功能突破，但底层架构的健壮性正在逐步提升。

### 2. 版本发布
*   **无新版本发布**。
*   当前最新已知版本为 `v2026.5.29`（源自 Issue #967 提及）。

### 3. 项目进展
今日有 **2 个重要的 Pull Request** 处于开放状态，等待合并，预计将显著增强项目的调度能力和即时通讯集成稳定性：

*   **#783 [feat/cron] 定时任务子代理引擎与安全加固**
    *   **作者**: yanggf8
    *   **进展**: 该 PR 引入了基于数据库的定时任务调度器（`cron_runs` 历史表、`cron_run_queue` 工作队列），支持原子性的 tick/enqueue/complete 操作。
    *   **价值**: 实现了技能、子代理和 Shell 作业类型的支持，增加了时区偏移配置、交付路由及操作员警报功能。同时提供了 `--json` 输出的 CLI 支持，极大提升了自动化运维的可观测性和安全性。
    *   **链接**: [PR #783](https://github.com/nullclaw/nullclaw/pull/783)

*   **#968 [fix/matrix] 持久化 next_batch 游标与环境隔离测试**
    *   **作者**: addadi
    *   **进展**: 修复了 Matrix 频道在重启后重置 `/sync` 游标 (`next_batch`) 的问题，导致重复同步初始消息的缺陷。
    *   **价值**: 确保 `next_batch` 在重启后持久化，避免 homeserver 返回重复的初始同步数据。此外，增加了测试环境隔离，提高了集成测试的可靠性。
    *   **链接**: [PR #968](https://github.com/nullclaw/nullclaw/pull/968)

### 4. 社区热点
*   **Issue #967: [bug] error: NoResponseContent**
    *   **热度**: 低（0 👍, 2 评论）
    *   **分析**: 用户 `svier0` 报告在使用 `Agnes-2.0-Flash` 模型时，超过 50% 的对话出现 `NoResponseContent` 错误。尽管 Issue 状态为 Closed，但描述中提到的“同样的模型同样的 apikey”在另一平台（picocla）正常，暗示可能是 NullClaw 客户端对特定模型响应的解析逻辑存在兼容性 bug，或者是客户端与 Agnes-2.0-Flash 之间的交互协议问题。
    *   **链接**: [Issue #967](https://github.com/nullclaw/nullclaw/issues/967)

### 5. Bug 与稳定性
*   **[中等严重] 响应解析失败 (NoResponseContent)**
    *   **问题**: 在 Windows 11 环境下，使用 v2026.5.29 版本调用 Agnes-2.0-Flash 模型时，高频出现 `error: NoResponseContent`。
    *   **现状**: Issue #967 已关闭，但未明确说明是修复还是被标记为无效。鉴于用户反馈频率高（>50%），若未根本解决，可能影响大量用户的日常使用体验。
    *   **链接**: [Issue #967](https://github.com/nullclaw/nullclaw/issues/967)
    *   **注意**: PR #968 针对的是 Matrix 集成的稳定性，与此 Bug 无直接关联。

### 6. 功能请求与路线图信号
*   **高级定时任务与自动化 (Cron Subagent)**
    *   **信号**: PR #783 展示了强大的定时任务引擎，包括历史记录、JSON 输出和安全加固。这表明项目正从简单的聊天助手向具备自主执行复杂调度任务的“智能体平台”演进。
    *   **预测**: 下一版本极有可能合并此 PR，作为核心功能亮点，允许用户设置周期性 AI 代理任务。

### 7. 用户反馈摘要
*   **痛点**: 用户对特定模型（Agnes-2.0-Flash）的兼容性感到不满，认为高频率的错误响应影响了可用性。
*   **期望**: 用户希望 NullClaw 能更稳定地对接主流 AI 模型，或者提供更详细的错误排查指南。
*   **正面反馈**: 暂无今日明显的正面反馈，但 PR #783 的功能特性可能吸引高级用户群体。

### 8. 待处理积压
*   **PR #783 & #968**: 这两个 PR 均创建于数周前（4月和6月），目前仍为 OPEN 状态。建议维护者尽快审查并合并，特别是 #968 涉及数据一致性的关键修复，以及 #783 带来的重大功能扩展。
*   **Issue #967**: 虽然状态为 CLOSED，但考虑到用户描述的复现率极高，建议确认是否需要在文档中注明已知限制，或重新打开以跟踪最终解决方案。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-06-24
**数据来源**: GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 在 2026-06-23 保持了极高的开发活跃度，过去 24 小时内处理了 17 个 Issues 和 36 个 Pull Requests。核心焦点集中在 **Reborn** 子系统的稳定性修复、WebUI v2 的功能完善以及自动化工作流的增强。虽然无新版本发布，但多个关键功能（如自动化暂停/恢复、Slack 配置优化、上下文管理优化）已通过 PR 合并或处于待合并状态，显示出项目正在快速迭代以解决生产环境中的阻塞性问题。整体项目健康度高，但存在若干影响用户体验的回归问题和 Flaky 测试需重点关注。

## 2. 版本发布
**无新版本发布**。

## 3. 项目进展
今日主要进展围绕 Reborn 架构的深化和 WebUI v2 的体验提升：

*   **自动化生命周期管理**: PR #5133 和 #5131 分别实现了 Reborn 自动化的**删除**和**暂停/恢复**支持。这完善了自动化工作流的闭环管理，允许用户更精细地控制后台任务，特别是针对触发器仓库和产品工作流前端的集成。
*   **性能与延迟优化**: PR #5149 引入了“渐进式工具披露”机制，旨在解决因每次调用都发送全部 ~91 个工具 Schema 导致的 NEAR AI 超时问题。这是一个关键的底层优化，预计将显著降低推理延迟并减少 Token 消耗。
*   **基础设施与配置简化**: PR #5152 将 Slack 设置迁移至 WebUI，移除了对 TOML 配置的依赖；PR #5161 清理了托管配置中的遗留字段，降低了部署复杂度。
*   **内存架构重构**: PR #5163 开始实施 `MemoryService` 外观模式，将内存层解耦为通用层和原生提供程序层，为未来支持多种记忆后端（如 Honcho, mem0）奠定基础。

## 4. 社区热点
以下 Issue 和 PR 因其技术深度或对当前开发瓶颈的影响而成为讨论焦点：

*   **[Issue #5139] Reborn 回归：Web/Research 任务在初始化时挂起**
    *   **链接**: <https://github.com/nearai/ironclaw/issues/5139>
    *   **分析**: 这是一个严重的回归问题，导致 `PinchBench` 每日测试中 21/147 个任务失败。问题表现为 Turn 超时且零 LLM/工具调用，表明调度器或执行器内部状态机存在死锁或逻辑断裂。这是目前阻碍主线合并的关键阻碍。
*   **[Issue #5148] 调度器心跳可能与持有转换状态的运行自死锁**
    *   **链接**: <https://github.com/nearai/ironclaw/issues/5148>
    *   **分析**: 揭示了异步存储锁竞争导致的潜在死锁场景，特别是在 GitHub 扩展安装流程中。这与 Issue #5139 可能相关，是系统稳定性的核心隐患。
*   **[Issue #5147] Flaky 测试阻塞合并队列**
    *   **链接**: <https://github.com/nearai/ironclaw/issues/5147>
    *   **分析**: `trigger_poller` 相关的 E2E 测试约 33% 的概率失败，直接导致 PR #5061 被移出合并队列。虽然定义为非回归问题，但其对 CI/CD 效率的影响巨大，需优先修复。
*   **[PR #5149] 上下文管理：渐进式工具披露**
    *   **链接**: <https://github.com/nearai/ironclaw/pull/5149>
    *   **分析**: 直接回应生产环境中的超时问题，通过 flag-gated 默认关闭的功能优化 Prompt 大小，是提升模型交互稳定性的关键补丁。

## 5. Bug 与稳定性
*   **高严重性**:
    *   **#5139**: Reborn 任务初始化挂起，零调用超时。*(状态: Open, 疑似由 #5148 的死锁引起)*
    *   **#5148**: 调度器心跳死锁风险。*(状态: Open)*
*   **中严重性**:
    *   **#5129**: `Always approve` 功能在 `outbound_delivery_target_set` 上失效。*(状态: Open, 需要复现)*
    *   **#4640**: Google Calendar `list_events` 返回无序/最旧事件，缺少 `timeMin` 和排序参数。*(状态: Open, 影响用户体验)*
    *   **#5151**: Claude 模型在暴露暂停/恢复工具后，无法正确创建 Reborn 自动化，反而调用无关工具。*(状态: Open, 模型能力与工具暴露的适配问题)*
*   **低严重性/UI 问题**:
    *   **#5157**: Railway 托管环境下 Settings 页面有时缺失 Inference 部分。
    *   **#5146**: Extensions 页面缺少禁用扩展的按钮。
    *   **#5144**: Provider 卡片中 NEAR AI 默认 Base URL 显示为 None。
    *   **#4108**: 夜间 E2E 测试持续失败（长期未解决）。

## 6. 功能请求与路线图信号
*   **技能学习审批门控 (Skill-Learning Approval Gate)**: PR #5156 引入了新技能学习的“待定审核”状态，确保未经人类批准的技能不会被静默启用。这反映了团队对 **AI 安全性**和**可控性**的高度重视，预计将成为下一版本的标准安全特性。
*   **统一 Gate 拒绝语义**: Issue #5120 指出 Auth、Approval 和 Activity 投影中存在命名不一致的问题。相关的重构 PR #5145 正在处理此问题，旨在统一用户界面和后端逻辑中的“拒绝/取消”状态，提升开发一致性和用户体验。
*   **操作符诊断与日志**: PR #4801 和 #4860 持续完善 Reborn Operator 的诊断接口和服务生命周期管理，表明项目正致力于提升**可观测性**和**运维友好性**。

## 7. 用户反馈摘要
*   **痛点**: 用户（通过内部测试如 PinchBench）强烈反馈任务挂起和超时问题，特别是涉及长上下文或复杂工具调用时。Google Calendar 等常用扩展的行为不符合直觉（返回旧事件而非即将到来的会议）。
*   **满意度**: WebUI v2 的逐步功能补全（如自动化删除、暂停）受到欢迎，特别是对于希望精细控制 Agent 行为的开发者而言。Slack 配置从 TOML 迁移到 WebUI 被视为简化部署的重大改进。
*   **不满**: 文档中提到的“Always approve”功能失效，以及某些设置项在特定托管环境（Railway）下不可见，影响了配置的便捷性。

## 8. 待处理积压
*   **#4108**: Nightly E2E 失败。此 Issue 已开放数月，频繁阻塞 CI，建议维护者优先排查根本原因或暂时降级其阻断级别。
*   **#5129**: `Always approve` 失效问题。由于涉及核心权限逻辑，需尽快复现并修复，以免影响自动化工作流的信任度。
*   **#5151**: Claude 模型工具调用错误。随着新工具（暂停/恢复）的暴露，模型行为出现偏差，需调整 System Prompt 或工具描述以引导模型正确使用。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 项目在今日呈现出“高并发修复、低版本发布”的特征。过去24小时内，共有10个Pull Request完成合并或关闭，主要集中于 `openclaw` 网关同步、定时任务（scheduled-task）状态管理及 `cowork` 模式的交互优化。尽管没有新版本发布，但代码库的稳定性通过一系列底层修复得到了显著提升。社区活跃度适中，主要关注点在于解决升级后的启动故障及提升多模态协作功能的用户体验。

## 2. 版本发布
*   **无新版本发布。**
*   近期合并的 PR 多为内部逻辑修正和状态同步优化，尚未累积至触发新版本发布的阈值。

## 3. 项目进展
今日重点推进了以下核心模块的稳定性与一致性：

*   **OpenClaw 网关与定时任务同步优化**
    *   **PR #2190** 解决了 Cron 运行会话的同步问题，通过标准化缓存键，确保重复运行时复用本地 Cowork 会话，提升了执行效率。
    *   **PR #2189** 实现了旧版 Cron 存储格式的自动迁移检测，降低了用户升级过程中的数据丢失风险。
    *   **PR #2191** 澄清了定时任务的启动状态（startup/loading/ready/error），并优化了 OpenClaw 网关握手后的数据刷新机制，减少了 UI 显示延迟。
    *   *影响*：显著增强了自动化任务调度的可靠性和状态可见性。

*   **Cowork 模式交互流程完善**
    *   **PR #2192** 引入了持久化的计划确认流程。现在 Plan Mode 会在用户禁用或确认执行前保持活跃，并增加了“确认执行”和“调整计划”的操作入口，改善了复杂任务编排的用户体验。

*   **基础架构与安全加固**
    *   **PR #1401** 修复了 SSE 流式请求中的 ID 生成安全问题，将 `Math.random()` 替换为 `crypto.randomUUID()`，防止攻击者预测并订阅其他用户的数据流。

## 4. 社区热点
*   **Issue #1400: 4.1版本严重启动故障**
    *   **状态：** OPEN [stale]
    *   **热度：** 作者提供了详细的复现步骤和联系方式，情绪较为焦急。
    *   **分析：** 用户反馈从 3.30 升级至 4.1 后出现网关无限重启循环，且自定义 LLM (qwen3.5-plus) 因依赖 `web-extractor` 而启动失败。这可能与默认配置冲突或升级脚本未正确处理自定义 LLM 依赖有关。这是目前社区最迫切需解决的阻塞性问题。
    *   [链接](https://github.com/netease-youdao/LobsterAI/issues/1400)

*   **PR #1401: 请求安全性修复**
    *   **状态：** OPEN [stale]
    *   **分析：** 虽然被标记为 stale，但该 PR 涉及核心安全漏洞（SSE ID 预测）。由于长期未合并，可能存在审查流程滞后或沟通不畅的问题，建议优先处理以消除安全隐患。
    *   [链接](https://github.com/netease-youdao/LobsterAI/pull/1401)

## 5. Bug 与稳定性
*   **[严重] 网关启动死循环 (Issue #1400)**
    *   **描述：** 升级至 4.1 后，网关反复重启，无法进入正常服务状态。
    *   **关联 Bug：** 自定义 LLM 调用失败，提示 `web-extractor` 在未启用 web-search 时无法启动。
    *   **当前状态：** 尚无官方合并的修复 PR。

*   **[中等] 多文件附件选择器失效 (PR #1402)**
    *   **描述：** 在一次对话框中选择多个文件时，仅保留最后一个文件。
    *   **修复：** PR #1402 已通过读取 store 中的当前草稿附件列表来修复此闭包问题。
    *   **状态：** PR 已关闭/合并（假设已合并，因列表显示为CLOSED且日期为今日）。

*   **[轻微] 国际化缺失 (PR #1403)**
    *   **描述：** 中文界面下 Agent 设置页脚显示英文 "delete"。
    *   **修复：** PR #1403 添加了缺失的 i18n 翻译键。
    *   **状态：** PR 已关闭/合并。

*   **[轻微] 定时任务通知渠道为空 (PR #1406)**
    *   **描述：** 当 IM 设置存在但未启用任何平台时，新建任务的通知下拉列表为空。
    *   **修复：** PR #1406 增加了回退逻辑，若过滤后列表为空，则返回完整的平台选项列表。
    *   **状态：** PR 已关闭/合并。

## 6. 功能请求与路线图信号
*   **UI/UX 现代化改进 (PR #1404)**
    *   **需求：** 用户提出定时任务创建界面的原生 `<input type="time">` 和 `<select>` 控件在 Electron 中样式不统一且交互不便。
    *   **信号：** 该 PR 提议使用自定义组件以匹配应用主题（圆角、背景色等）。这反映了用户对跨平台桌面应用视觉一致性的强烈需求，预计将在后续版本中采纳此类 UI 重构工作。
    *   [链接](https://github.com/netease-youdao/LobsterAI/pull/1404)

*   **协作功能深化 (PR #2192)**
    *   **信号：** 新增的“持久化计划确认流程”表明项目正在向更复杂的 Agent 协作场景演进，强调人类在循环（Human-in-the-loop）中的控制权。

## 7. 用户反馈摘要
*   **痛点：**
    1.  **升级兼容性差：** Issue #1400 反映出 major 版本升级过程中，配置迁移和依赖检查存在严重缺陷，导致服务不可用。
    2.  **原生控件体验不佳：** 用户抱怨 Electron 应用中部分表单控件（如时间选择器）不符合桌面端设计规范，操作反直觉。
    3.  **边界情况处理不足：** 如多文件上传只保留最后一个、IM 未启用时通知列表为空等，显示出测试用例对边缘场景覆盖不全。
*   **满意点：**
    1.  **状态可视化改善：** 用户认可定时任务启动状态的细化区分（PR #2191），有助于排查调度问题。
    2.  **安全意识提升：** 社区对 SSE 流式传输的安全性提出了专业意见，并被开发者接受（PR #1401）。

## 8. 待处理积压
*   **Issue #1400 (严重):** 4.1 版本启动故障。需维护者立即介入，可能需发布紧急热修复补丁（Hotfix）。
*   **PR #1401 (安全):** 请求安全性修复。虽为 stale，但涉及安全风险，应尽快合并或给出明确拒绝理由。
*   **PR #1402, #1403, #1404, #1406 (功能/UI):** 这些 PR 均创建于 4 月 3 日，至今日才更新状态。若 #1402/#1403/#1406 已合并则无妨；若 #1404 仍未合并，需评估 UI 重构的优先级。长期未响应的 PR 可能暗示贡献者维护流程存在瓶颈。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub (moltis-org/moltis)

### 1. 今日速览
Moltis 项目在 2026-06-24 期间呈现**低活跃度但高完成度**的状态。过去 24 小时内无新 Issue 提交，也无新版本发布，表明当前处于功能稳定或维护周期。主要动态为 1 个 Pull Request (#215) 被合并/关闭，该 PR 引入了关键的 `send_image` 工具，增强了 Skills 向 Telegram 等渠道发送本地图片的能力。项目整体健康度良好，无紧急阻塞性问题。

### 2. 版本发布
*   **无新版本发布。**

### 3. 项目进展
今日核心进展集中在 **PR #215** 的合并/关闭上：
*   **PR #215:** [feat(tools): add send_image tool for channel image delivery](https://github.com/moltis-org/moltis/pull/215)
    *   **贡献者：** maximilize
    *   **更新内容：** 新增了 `send_image` 工具，允许 Skills 通过数据 URI (`data:`) 将本地图片文件（支持 PNG, JPEG, GIF, WebP）发送至 Telegram 等渠道。
    *   **技术细节：** 复用了现有的截图管道（screenshot pipeline），Chat Runner 会自动识别 `screenshot` 键并处理发送逻辑，同时支持可选的 `caption` 参数。
    *   **影响评估：** 此更新显著提升了 Moltis 在富媒体交互方面的能力，特别是对于需要生成可视化结果（如图表、截图反馈）的场景至关重要。这是项目多媒体输出能力的一次重要补齐。

### 4. 社区热点
*   **无活跃讨论。**
*   今日无新增 Issue 或具有显著评论量的 PR 讨论。社区焦点完全集中在上述已合并的功能实现上，未见新的争议或广泛需求爆发。

### 5. Bug 与稳定性
*   **无报告。**
*   过去 24 小时内无新 Issue 标记为 Bug，也未发现由合并 PR #215 引发的回归问题报告（鉴于该 PR 刚被处理且复用现有管道，风险相对可控）。

### 6. 功能请求与路线图信号
*   **信号：** `send_image` 工具的引入暗示了路线图对 **多模态输出** 的重视。
*   **推测：** 未来可能会看到更多围绕“视觉反馈”、“图像生成集成”或“富媒体消息格式支持”的功能请求。目前尚无新的 Feature Request Issue 出现，但已合并的 PR 本身即是对用户潜在需求的回应。

### 7. 用户反馈摘要
*   **无新反馈。**
*   由于无新 Issue 和评论，无法提取最新的用户痛点。现有的 `send_image` 功能解决了“Skills 无法直接发送非截图类本地图片”的长期痛点，预计将提升开发者对 Moltis 渠道插件扩展性的满意度。

### 8. 待处理积压
*   **无显著积压。**
*   今日无长期未响应的 Issue 或 PR 需要特别关注。PR #215 虽创建于 2026-02-23，但在 2026-06-23 得到处理并于 06-24 完成日报统计，显示维护者对历史 PR 的处理效率正常，未形成严重的合并积压。

---
**分析师备注：** 项目当前处于平稳期，建议关注后续是否有关于 `send_image` 性能优化或更多媒体格式支持的讨论。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub `agentscope-ai/CoPaw` (及关联 `QwenPaw` 仓库活动)

## 1. 今日速览
CoPaw 项目在 2026-06-24 保持高活跃度，过去24小时内产生 38 个 Issue 和 50 个 PR。社区焦点集中在 **v1.1.12.post2 版本的发布**以及针对 **移动端适配的大规模重构**上。虽然新功能（如移动端优化、记忆管理重构）推进迅速，但近期版本暴露出若干严重的前端渲染崩溃、定时任务调度失效及自定义模型兼容性问题。整体来看，项目正处于从 AgentScope 2.0 迁移后的稳定化调整期，技术债务清理与用户体验优化并行。

## 2. 版本发布
### v1.1.12.post2
*   **发布日期：** 2026-06-24
*   **主要变更：**
    *   **修复会话导航逻辑：** 解决删除当前会话后未正确跳转至新聊天界面的问题 ([#5376](https://github.com/agentscope-ai/QwenPaw/pull/5376))。
    *   **增强文件预览：** 支持相对路径的文件预览功能，提升控制台内文件交互体验 ([#5377](https://github.com/agentscope-ai/QwenPaw/pull/5377))。
*   **迁移注意：** 本次为小版本补丁更新，预计无破坏性变更，但建议检查自定义技能中涉及文件路径引用的部分。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在前端移动端适配和基础架构清理，显示出团队对多端体验的重视：
*   **移动端全面适配：** 多个 PR ([#5452](https://github.com/agentscope-ai/QwenPaw/pull/5452), [#5444](https://github.com/agentscope-ai/QwenPaw/pull/5444), [#5451](https://github.com/agentscope-ai/QwenPaw/pull/5451), [#5449](https://github.com/agentscope-ai/QwenPaw/pull/5449), [#5445](https://github.com/agentscope-ai/QwenPaw/pull/5445), [#5446](https://github.com/agentscope-ai/QwenPaw/pull/5446), [#5368](https://github.com/agentscope-ai/QwenPaw/pull/5368), [#5366](https://github.com/agentscope-ai/QwenPaw/pull/5366), [#5397](https://github.com/agentscope-ai/QwenPaw/pull/5397), [#5394](https://github.com/agentscope-ai/QwenPaw/pull/5394), [#5350](https://github.com/agentscope-ai/QwenPaw/pull/5350)) 密集合并，覆盖了 Sidebar、Header、Skill Pool、Security、Debug、Plugin Manager、Agent Config 及 Chat Header 等核心页面的移动端响应式布局。
*   **内存与上下文管理重构：** [#5450](https://github.com/agentscope-ai/QwenPaw/pull/5450) 对记忆管理进行了重构，[#5435](https://github.com/agentscope-ai/QwenPaw/pull/5435) 移除了 `get_memory_prompt` 中的冗余语言参数，旨在优化资源占用。
*   **TUI 功能恢复：** [#5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) 恢复了 AgentScope 2.0 迁移后丢失的 ACP 支持的 TUI 命令和审批流程。
*   **浏览器隔离优化：** [#5413](https://github.com/agentscope-ai/QwenPaw/pull/5413) 引入了会话级的页面隔离机制，解决了多子代理共享浏览器实例时的干扰问题。

## 4. 社区热点
以下是评论数较多或关注度高的 Issue/PR：
*   **[Bug] 升级后内置技能重置：** [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) (12条评论)。用户抱怨每次升级后禁用的内置技能（如 docx/xlsx）会被重新启用，需手动再次禁用。这反映了配置持久化机制的缺陷。
*   **[Bug] 定时任务无法触发：** [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) (12条评论) 和 [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) (5条评论)。多个用户报告由 Agent 生成的 Cron 任务到达时间后不执行，或应用存活时任务停止派发。这是严重影响自动化场景的核心 Bug。
*   **[Bug] 自定义模型 Function Calling 失效：** [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) (6条评论)。使用 OMLX 等自定义 OpenAI 兼容提供商时，工具调用功能失效，仅返回文本。
*   **[Feature] 移动端适配需求：** [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) (3条评论) 及相关 PR。用户对 WebUI 在移动端的糟糕体验提出强烈改进请求，今日的大量 PR 正是对此的直接回应。

## 5. Bug 与稳定性
今日报告的 Bug 呈现多样化，部分涉及核心功能崩溃：
1.  **前端渲染崩溃：** [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)。包含大量工具调用历史的会话在控制台前端加载时白屏/崩溃，原因是后端 `type: "data"` 内容与前端渲染组件不匹配。
2.  **定时任务调度故障：** [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064), [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398), [#5235](https://github.com/agentscope-ai/QwenPaw/issues/5235)。Cron 任务不执行或停止派发，疑似与 AgentScope 2.0 迁移后的调度器实现有关。
3.  **Shell 命令解析失败：** [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373)。`execute_shell_command` 无法正确处理管道、重定向等 Shell 特殊字符。
4.  **Agent 思考卡死：** [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328)。使用 DeepSeek 等模型时，Agent 在 thinking 阶段容易卡死，需手动干预。
5.  **启动报错：** [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379)。Python 安装后启动出现 Internal Server Error，日志指向 `get_remote_addr` 问题。
6.  **内存占用过高：** [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441), [#5439](https://github.com/agentscope-ai/QwenPaw/issues/5439)。用户反馈刚启动即占用 1.4GB 内存，虽有新 PR 尝试优化，但用户感知尚未改善。

*注：[#5440](https://github.com/agentscope-ai/QwenPaw/pull/5440) 正在修复合并后的部分 Bug，可能涵盖上述部分稳定性问题。*

## 6. 功能请求与路线图信号
*   **记忆管理增强：** [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) 和 [#5316](https://github.com/agentscope-ai/QwenPaw/issues/5316) 强烈呼吁优化记忆系统的生命周期管理和召回排序。结合 [#5450](https://github.com/agentscope-ai/QwenPaw/pull/5450) 的重构，记忆模块将是近期的重点开发方向。
*   **LaTeX/KaTeX 支持：** [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)。桌面端缺乏数学公式渲染支持，被用户视为痛点。
*   **Per-user-message 时间戳：** [#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455)。建议将当前时间作为每条消息的前缀而非仅放在系统上下文中，以提高 Agent 的时间感知准确性。
*   **Kimi Coding Plan 支持：** [#5427](https://github.com/agentscope-ai/QwenPaw/issues/5427)。现有 Provider 实现仅支持 OpenAI 格式，需扩展以兼容 Anthropic 格式的 Kimi API。

## 7. 用户反馈摘要
*   **配置持久化缺失：** 用户多次提到升级后配置丢失（技能启用状态、自定义模型 endpoint 残留等 [#5378](https://github.com/agentscope-ai/QwenPaw/issues/5378)），导致重复配置工作量大。
*   **移动端体验迫切需求：** 尽管今日有大量移动端适配 PR 合并，但用户仍指出移动端存在溢出、按钮被截断等问题，且原生移动端 App (Tauri) 的体验也需提升。
*   **资源效率质疑：** 多次提及内存占用过高（1.4GB+），尤其在轻量级使用场景下，用户期待更高效的资源管理。
*   **Agent 可靠性担忧：** 定时任务失败、思考过程卡死、子代理审批通知未推送 [#5295](https://github.com/agentscope-ai/QwenPaw/issues/5295) 等问题，影响了用户对 Agent 自动化能力的信任。

## 8. 待处理积压
*   **移动端适配收尾：** 虽然多个 PR 已合并，但 [#5421](https://github.com/agentscope-ai/QwenPaw/issues/5421) 指出切换 Agent 时仍有严重卡顿，需进一步优化性能。
*   **自定义模型兼容性：** [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) 和 [#5378](https://github.com/agentscope-ai/QwenPaw/issues/5378) 涉及自定义模型配置和 Function Calling 的广泛兼容性问题，需系统性排查。
*   **长期未解决的记忆痛点：** [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) 自 2026-05-01 开放至今，涉及记忆归档和冲突检测，是架构层面的重要改进点，需排入下一版本路线图。
*   **内部服务器错误：** [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) 的 `get_remote_addr` 问题可能导致部分部署环境无法启动，需优先修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-24
**数据来源：** GitHub ZeroClaw-labs/zeroclaw

## 1. 今日速览
过去24小时内，ZeroClaw 项目保持高活跃度，共处理 40 个 Issues 和 50 个 Pull Requests。安全与稳定性是今日核心焦点，多项关于插件环境隔离、SSRF防护及供应链签名的 RFC 进入深入讨论阶段。虽然无新版本正式 Release，但 v0.8.2 版本准备就绪（PR #8234），且多个关键 Bug 修复已合并至主分支。整体来看，项目正从功能迭代向“硬化安全”与“执行稳定性”阶段过渡，社区贡献者对底层架构改进参与度极高。

## 2. 版本发布
**无正式新版本发布。**
*   **预备状态：** PR #8234 已将工作区版本从 v0.8.1 升级至 v0.8.2，并更新了 Changelog 及相关打包配置（Docker, AUR, Scoop 等），预计即将发布。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在 **渠道稳定性修复**、**运行时错误处理** 及 **CI/CD 质量门禁** 三个维度：

*   **渠道体验优化：**
    *   **Telegram:** PR #8024 解决了媒体组（Albums）被拆分为多条独立消息的问题，现在将作为单条消息发送，提升用户体验。
    *   **QQ:** PR #8027 实现了被动群回复的线程化（通过 `refer_msg`），使对话上下文更清晰。
    *   **WeCom:** PR #8025 修复了企业微信主动消息和附件发送的代码编译与 Lint 问题，使其具备生产可用性。
*   **运行时与代理稳定性：**
    *   **IPC 恢复:** PR #8122 修复了守护进程在内存/套接字缓冲区压力下的 `ENOBUFS` 错误，将其视为可恢复错误而非崩溃，提升了长运行稳定性。
    *   **资源泄漏:** PR #8023 修复了 MCP 工具在每个心跳周期中泄漏 stdio 子进程的问题，防止长时间运行后的资源耗尽。
    *   **视觉路由修复:** PR #7345 修正了路径列表工具（如 `content_search`）中的图像标记误判问题，防止视觉提供商路由错误。
*   **CI/CD 与开发流程：**
    *   **预检门禁:** PR #8016 和 PR #8020 完善了本地预提交检查（pre-flight gate）和严格的 Clippy 规则对齐，确保代码质量在合并前得到控制。
    *   **Act 缓存优化:** PR #8223 改进了本地 Act 测试脚本，使用官方 GoGitActionCache 解决动作 SHA 解析问题。

## 4. 社区热点
以下 Issues 因涉及架构变革或高优先级安全问题而引发大量讨论：

*   **[RFC] Native Dynamic-Library Plugin System (#7420)**
    *   **热度:** 6 评论
    *   **分析:** 旨在解决当前 WASM 插件系统的局限性，提议引入原生动态库插件。这是架构层面的重大潜在变更，引发了关于安全性、性能和维护成本的深入辩论。
*   **[RFC] Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance (#8177)**
    *   **热度:** 3 评论
    *   **分析:** 响应日益严峻的软件供应链安全威胁，提议实施硬件签名和 SLSA 合规性。这标志着 ZeroClaw 对企业级安全标准的正式采纳，符合 Phase 3 路线图。
*   **[Bug] disabling an agent does not stop its bound Discord channel (#8013)**
    *   **热度:** 3 评论
    *   **分析:** 严重级别 S0（数据丢失/安全风险）。用户报告禁用 Agent 后 Discord 频道仍在响应，导致不可控的 AI 交互。此 Bug 直接影响生产环境的安全性，需紧急关注。
*   **[RFC] In-app upgrade with optional supervised restart from the web dashboard (#8170)**
    *   **热度:** 2 评论
    *   **分析:** 用户期望在 Web 仪表盘中直接更新 Gateway 并重启，无需手动操作命令行。这反映了用户对易用性和自助运维的强烈需求。

## 5. Bug 与稳定性
按严重程度排列的关键问题：

| 严重程度 | Issue ID | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **S0** | #8013 | 禁用 Agent 后 Discord 通道仍在线响应 | **OPEN** (需紧急修复) |
| **S1** | #8193 | TUI 会话中缺失 MCP 工具/Tool Search | **CLOSED** (关联讨论 #8045) |
| **S1** | #7756 | OpenAI/Anthropic 回合中 Native/MCP 工具不可用 | **OPEN** (PR #8053 已修复部分路径) |
| **S2** | #8186 | TUI 未检测 Daemon 版本不匹配 | **CLOSED** |
| **Medium** | #2091 | Telegram 轮询错误泄露 Bot Token URL 片段 | **CLOSED** |
| **High** | #6037 | Cron 任务在运行期间重复启动 | **CLOSED** |

*   **注意：** PR #8218 正在尝试解决工具结果截断导致的下溢恐慌（Underflow Panic），这是一个潜在的运行时崩溃点。

## 6. 功能请求与路线图信号
*   **供应链安全强化:** 多个 RFC (#8177, #8059) 指向 v0.9.0 将重点加强 CI/CD 安全策略，包括依赖审计、SBOM 生成和硬件签名支持。
*   **本地认证支持:** Issue #8076 提出在不依赖外部 IdP 的情况下，支持基于用户名/密码的本地浏览器登录，填补了现有 AuthProvider 的空白。
*   **每代理自定义环境变量:** Issue #8226 请求为每个 Agent 配置独立的隔离环境变量，以增强多租户场景下的安全性和灵活性。
*   **流式消息支持:** Issue #8228 和 #7531 持续推动 QQ、钉钉等渠道的流式卡片消息支持，以减少用户等待焦虑，这是提升即时通讯体验的关键需求。
*   **自动风险配置:** Issue #8125 建议在 Quickstart 中自动应用 `yolo` 风险配置文件，降低新用户的使用门槛。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍反映在复杂的多代理或多通道设置中，工具可用性和上下文管理存在不一致（如 #8054, #7756）。系统提示词与实际可用工具之间的脱节导致推理模型效率低下。
*   **满意度：** 对近期渠道修复（Telegram Album, QQ Threading）表示欢迎，认为这些细节显著改善了聊天界面的自然度。
*   **新需求：** 用户希望获得更透明的成本追踪（PR #8233 正在实现实时网关定价填充），以及更便捷的本地部署和更新体验（Issue #8170）。

## 8. 待处理积压
*   **#8013 [Bug] 禁用 Agent 不停止 Discord 通道:** 这是一个严重的安全/功能缺陷，目前状态为 OPEN，建议维护者优先处理。
*   **#7756 [Bug] 原生/MCP 工具在特定 Provider 回合中不可用:** 虽然 PR #8053 修复了直接运行时路径，但其他入口点（Gateway, WebSocket）仍存在类似问题（见 #8054），需要系统性解决。
*   **#8043 [RFC] 废弃 aardvark-sys crate:** 涉及底层硬件抽象层的重构，需要架构师审核。
*   **#8054 [Bug] System prompt tool-availability mismatch:** 这是一个系统性设计问题，需要统一所有入口点的工具可用性逻辑。

---
*报告生成时间：2026-06-24*
*分析师：Agnes-2.0-Flash*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*