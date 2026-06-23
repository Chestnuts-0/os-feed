# OpenClaw 生态日报 2026-06-23

> Issues: 195 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-23 09:59 UTC

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
**日期：** 2026-06-23
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
2026年6月23日，OpenClaw 项目保持极高的开发与维护活跃度。过去24小时内产生了 **195条 Issue** 和 **500条 PR** 更新，显示出社区对核心稳定性与功能扩展的双重高度关注。尽管没有正式的新版本发布，但大量针对会话状态丢失、Cron任务异常以及多平台适配（如Teams CVI、Windows ACP）的关键修复正在通过PR流程快速迭代。整体项目健康度良好，但“消息丢失”和“会话状态”类Bug仍是当前最大的稳定性挑战。

## 2. 版本发布
**无新版本发布。**
当前处于高频补丁修复阶段，重点在于解决 2026.6.x 系列版本中暴露的回归问题和边缘情况。

## 3. 项目进展
今日合并/关闭及活跃推进的重点 PR 主要集中在底层稳定性优化和新渠道支持：

*   **Microsoft Teams 全功能接入：** PR #94978 正在推进将 Microsoft Teams 作为一等公民支持，包括语音(CVI)、视频和聊天，这是企业级集成的重大里程碑。
*   **内存核心索引优化：** PR #96052 修复了 `memory-core` 中全文搜索(FSS)忽略文件路径的问题，提升了基于文件名/日期的检索精度。
*   **流式传输段落保留：** PR #94247 解决了块流式传输中断段落分隔符的问题，改善了长文本输出的用户体验。
*   **性能优化：** PR #96013 和 #96014 分别对 Anthropic 活跃流块和工具结果进行了索引优化，旨在降低延迟并提升上下文处理效率。
*   **端口检测修复：** PR #94949 修复了 Windows/Linux 下端口占用检测不准确的问题，增强了部署稳定性。

## 4. 社区热点
以下是评论数最多、关注度最高的议题：

*   **[高热度] SQLite 迁移与核心会话追踪 (Issue #88838)**
    *   **摘要：** 关于核心会话/转录 SQLite 迁移的_accessor_ 接缝实现进展缓慢但持续进行中，涉及复杂的身份尾部和适配器工作。
    *   **链接：** https://github.com/openclaw/openclaw/issues/88838
*   **[高热度] Codex 应用服务器完成停滞回归 (Issue #88312)**
    *   **摘要：** 2026.5.27 版本引入的严重回归，导致多工具代理轮次完成时出现“Codex stopped before confirming”错误，影响大量 Plus 订阅用户。
    *   **链接：** https://github.com/openclaw/openclaw/issues/88312
*   **[高热度] Cron 调度器污染全局状态 (Issue #90991)**
    *   **摘要：** 定时任务触发器导致全局运行时状态污染，引发瞬态的系统级过载失败，需紧急排查隔离机制。
    *   **链接：** https://github.com/openclaw/openclaw/issues/90991
*   **[高热度] Antigravity CLI 集成请求 (Issue #84527)**
    *   **摘要：** 随着 Google Gemini CLI 的退役，用户强烈要求集成新的 Antigravity CLI (agy) 作为后端，该 Issue 获得 9 个赞，显示极高的社区共识。
    *   **链接：** https://github.com/openclaw/openclaw/issues/84527

## 5. Bug 与稳定性
今日报告了大量 P1/P2 级别的 Bug，主要集中在会话一致性和平台兼容性：

*   **消息丢失与会话状态错误 (高频)：**
    *   **Issue #92201:** Anthropic 嵌入式运行器中思考签名回放无效，恢复包装器未触发。
    *   **Issue #92043:** 压缩超时设置为单一墙钟时间，导致长时间压缩失败并重复报错。
    *   **Issue #92460:** 隔离 Cron 完成公告器丢失 delivery.channel，导致投递失败。
    *   **Issue #95724:** 多个代理共享工作区时生成重复向量存储，资源浪费且索引混乱。
    *   **Issue #95833:** 子代理中止结算失败，`.jsonl.lock` 未释放，永久破坏会话。
*   **平台特定 Bug：**
    *   **Issue #94032:** macOS 上 `exec` 私有 LAN 访问失败，而 GUI 正常（权限/环境隔离问题）。
    *   **Issue #93465:** Windows 嵌入式 ACPX 运行时 `spawn EINVAL`，导致 ACP 路径不可用。
    *   **Issue #92302:** Windows 下 `memory.qmd.command` 路径混淆，QMD 后端不可用。
*   **Provider/集成 Bug：**
    *   **Issue #95760:** NVIDIA Build provider 流式传输在工具调用中途静默切断。
    *   **Issue #90288:** 非 Anthropic 模型输出工具调用为纯文本而非结构化块。
    *   **Issue #95998:** `ensureGlobalUndiciEnvProxyDispatcher()` 破坏了腾讯云 COS 的分块上传。

## 6. 功能请求与路线图信号
*   **Per-Channel/Group Model Override (Issue #53638):** 用户希望在不同频道/群组中配置不同的默认模型，无需手动运行时覆盖。此功能在配置灵活性上是明确的需求。
*   **Discord Status Reactions (Issue #78431):** 文档声称支持但在 Discord 上缺失，属于功能补全。
*   **Isolated Cron Disable (Issue #84724):** 允许隔离 Cron 作业禁用自身而不删除，用于暂停可复用任务。
*   **Trusted Inbound Decoration (Issue #95279):** 请求提供可信的入站装饰契约，以便消费者剥离/去重，防止伪造文本启发式错误。这反映了用户对安全边界和数据完整性的深层关切。

## 7. 用户反馈摘要
*   **痛点：** 用户对“消息丢失”和“会话状态不同步”极为敏感。多个 Issue 提到 WebChat 渲染顺序错误、Feishu/Discord 回复消失或重复渲染，这表明前端/网关同步机制存在根本性缺陷。
*   **满意度：** 社区对 `memory-core` 的性能优化和新渠道（如 Teams）的支持持积极态度。
*   **混淆点：** 自动更新后网关进程使用过时哈希包导入 (Issue #85844)，以及 Config Patch 重启提示误导 (Issue #46797)，表明安装和更新流程的用户体验仍有改进空间。

## 8. 待处理积压
*   **Issue #88838 (SQLite Migration):** 虽然标记为“大部分完成”，但涉及复杂的适配器和身份尾部，评论数高达34条，需维护者密切关注最终合并状态。
*   **Issue #88312 (Codex Stall Regression):** 这是一个影响广泛的生产回归问题，目前仍在寻找根本原因，建议优先分配资源进行修复。
*   **Issue #94032 (macOS Private LAN Access):** 涉及 macOS TCC 权限和 LaunchAgent 环境的复杂交互，缺乏明确的复现路径，可能需要更深入的调试支持。

---
*本报告由 Agnes-2.0-Flash 生成，基于 OpenClaw GitHub 仓库公开数据。*

---

## 横向生态对比

# 2026-06-23 个人 AI 助手与智能体开源生态横向对比分析报告

## 1. 生态全景
2026年6月，个人 AI 助手与自主智能体开源生态呈现出**“核心重构加速、安全合规置顶、多模态深度融合”**的特征。OpenClaw、NanoClaw 和 ZeroClaw 等头部项目正从单纯的功能堆砌转向底层架构的硬化（如供应链安全、Wasm 运行时、会话持久化），标志着行业进入成熟期。与此同时，IronClaw 和 CoPaw 通过引入技能自进化机制和细粒度权限控制，推动了智能体从“被动响应”向“主动自治”的演进。整体生态中，稳定性与安全性已成为比新功能开发更紧迫的技术命题。

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issues | 今日 PR | 版本发布 | 健康度评估 | 核心动态简述 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 195 | 500 | 无 | **极高/高压** | 高频修复会话状态丢失、Teams 全功能接入、Cron 调度优化。 |
| **NanoBot** | 7 | 32 | **v0.2.2** | **高/稳定** | 发布稳定版，增强 WebUI 持久性，修复 Anthropic 工具 ID 冲突。 |
| **Hermes Agent** | 50 | 50 | 无 | **高/敏捷** | 聚焦 CLI/TUI 稳定性、飞书/微信网关优化、CVE 紧急修复。 |
| **PicoClaw** | 2 | 18 | 无 | **中高/迭代** | 修复会话数据污染、ADB 工具集成、WhatsApp 连接稳定性。 |
| **NanoClaw** | 0 | 9 | 无 | **中/维护** | 依赖版本锁定、容器运行时优化、僵尸进程清理。 |
| **NullClaw** | 0 | 1 | 无 | **低/维稳** | 仅修复 Matrix 集成状态持久化，处于静默维护期。 |
| **IronClaw** | 10 | 32 | 无 | **高/重构** | Reborn 引擎性能优化、技能自进化、权限粒度精细化。 |
| **LobsterAI** | 1 | 9 | 无 | **中/滞后** | 存在严重启动 Bug (#1400)，维护响应滞后，依赖升级中。 |
| **TinyClaw** | 0 | 0 | 无 | **低/停滞** | 过去24小时无活动。 |
| **Moltis** | 0 | 1 | 无 | **低/平稳** | 图像发送功能 PR 状态待确认，无新代码合并。 |
| **CoPaw** | 29 | 50 | 无 | **高/过渡** | v1.x 稳定性修复与 v2.0 架构合并并行，前端移动端优化。 |
| **ZeptoClaw** | 0 | 0 | 无 | **低/停滞** | 过去24小时无活动。 |
| **ZeroClaw** | 50 | 50 | 无 | **极高/转型** | 转向 Wasm 优先、SLSA 供应链安全、TUI/Telemetry 增强。 |

## 3. OpenClaw 在生态中的定位
*   **市场地位**：**生态基石与最大争议中心**。OpenClaw 拥有绝对领先的社区活跃度（PR 500+），表明其是目前最流行且用户基数最大的开源智能体框架。
*   **优势**：极强的渠道扩展能力（Teams, Discord, Feishu）和庞大的插件生态。其高频的 PR 流动意味着它最能反映社区前沿需求。
*   **劣势/风险**：**技术债务沉重**。高 Issue 数和频繁的“回归问题”（Regression）表明其架构难以承载当前的复杂度。“消息丢失”和“会话状态”问题是其作为生产级工具的最大短板。
*   **对比**：相比 NanoBot 的“小而美”和 ZeroClaw 的“硬核安全”，OpenClaw 更像是一个不断打补丁的庞大帝国，亟需架构级的重构（如 SQLite 迁移）来止血。

## 4. 共同关注的技术方向
1.  **会话一致性与持久化 (Session Durability)**
    *   **涉及项目**：OpenClaw, NanoBot, ZeroClaw, CoPaw
    *   **诉求**：解决消息丢失、状态不同步、重启后数据恢复问题。OpenClaw 和 NanoBot 均投入大量精力修复 `memory-core` 和 WebUI 持久化；ZeroClaw 关注 Telemetry 完整性。
2.  **供应链安全与合规 (Supply Chain Security)**
    *   **涉及项目**：ZeroClaw, Hermes Agent, NanoClaw, IronClaw
    *   **诉求**：CVE 修复、依赖锁定、SLSA 溯源、Wasm 隔离。ZeroClaw 明确提出 Wasm-first 和 Trivy 扫描；Hermes 紧急修复容器镜像高危 CVE；NanoClaw 锁定 Chat SDK 版本。
3.  **细粒度权限与控制 (Granular Control)**
    *   **涉及项目**：IronClaw, OpenClaw, ZeroClaw
    *   **诉求**：从全局开关转向“每工具/每频道”权限。IronClaw 实现 Per-Tool Permission；OpenClaw 支持 Per-Channel Model Override；ZeroClaw 强调 Trusted Inbound Decoration 防伪造。
4.  **多模态与移动端自动化 (Multimodal & Mobile Automation)**
    *   **涉及项目**：PicoClaw, Moltis, NanoBot
    *   **诉求**：ADB 控制、图片发送、PWA 支持。PicoClaw 引入 Android ADB；Moltis 完善图片发送；NanoBot 提供 PWA 体验。

## 5. 差异化定位分析
*   **OpenClaw**: **全能型企业/个人助手**。侧重多渠道集成（Teams, Discord, WebChat）和高并发下的稳定性修复。适合需要复杂工作流和多平台接入的用户，但需容忍一定的配置复杂性。
*   **NanoBot**: **轻量级/桌面友好型**。侧重 WebUI 的易用性、PWA 支持和快速部署。适合个人用户和小团队，追求“开箱即用”和低维护成本。
*   **ZeroClaw**: **极客/安全导向型**。侧重底层架构重构（Wasm, SLSA）、可观测性和硬核安全。适合对数据隐私、供应链安全有极高要求的开发者和技术专家。
*   **IronClaw**: **自进化/研究型**。侧重 Agent 的自我学习（Skill Extraction）和 Reborn 引擎的性能优化。适合探索 Agent 自主性和长期记忆的研究场景。
*   **Hermes Agent**: **CLI/TUI 驱动型**。侧重命令行体验和即时通讯（飞书/微信）的深度集成。适合喜欢终端操作和中国本土 IM 生态的用户。
*   **CoPaw**: **框架/平台型**。侧重 Agent 编排、沙箱隔离（Bubblewrap）和多租户支持。适合作为底层平台构建上层应用。
*   **PicoClaw**: **嵌入式/IoT 导向型**。侧重资源受限环境下的稳定性、ADB 移动控制和 Token 追踪。适合边缘计算和移动端自动化场景。

## 6. 社区热度与成熟度
*   **快速迭代期 (High Velocity)**: **OpenClaw, ZeroClaw, CoPaw**。这些项目正处于功能大爆炸或架构重构期，PR 和 Issue 数量巨大，技术方向变化快，适合早期采用者和技术爱好者。
*   **质量巩固期 (Stabilization)**: **NanoBot, IronClaw, Hermes Agent**。NanoBot 刚发布稳定版，IronClaw 和 Hermes 侧重于修复 Bug 和优化性能。适合寻求生产环境稳定性的用户。
*   **维护/停滞期 (Maintenance/Stagnant)**: **NullClaw, TinyClaw, ZeptoClaw, LobsterAI**。LobsterAI 虽有活动但维护响应滞后且存在严重 Bug；NullClaw 等几乎无新动态。需谨慎评估其长期支持能力。

## 7. 值得关注的趋势信号
1.  **“安全左移”成为标配**：从 ZeroClaw 的 SLSA/Trivy 到 Hermes 的 CVE 修复，再到 NanoClaw 的依赖锁定，**供应链安全**已不再是可选项，而是开源 AI 项目的生存底线。开发者应优先选择具备完善安全审计机制的框架。
2.  **从“聊天”到“操作”**：PicoClaw 的 ADB 支持和 Moltis 的图片发送表明，智能体的边界正在从文本交互扩展到**物理世界和移动设备的控制**。未来的竞争点在于 Agent 对异构设备（手机、IoT）的操控能力。
3.  **架构去中心化与隔离**：ZeroClaw 的 Wasm-first 和 CoPaw 的 Bubblewrap 沙箱，反映了社区对**执行环境隔离**的极度重视。传统的 Node.js/Python 进程内执行模式正被更安全、更轻量的沙箱/插件运行时取代。
4.  **会话状态的“硬伤”亟待解决**：OpenClaw 和 NanoBot 的大量 Issue 集中在消息丢失和状态不同步。这说明当前的异步流式处理和分布式会话管理技术尚未成熟，**可靠的会话一致性协议**将是下一阶段的研发重点。
5.  **本地化与边缘计算的崛起**：Hermes 对飞书/微信的深度集成，以及 PicoClaw 的资源优化，显示出**中国本土生态**和**边缘侧部署**需求的强劲增长。通用框架若不适配本地 IM 和边缘资源约束，将面临市场局限。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub API (HKUDS/nanobot)

## 1. 今日速览
NanoBot 项目在 2026-06-23 保持高活跃度，社区贡献显著。今日发布了稳定版本 `v0.2.2`，重点增强了 WebUI 对话的持久性和分段处理能力。过去24小时内，共有 7 个 Issues 更新和 32 个 PR 更新，其中 10 个 PR 已合并/关闭。开发者对底层稳定性（如 DeepSeek 消息硬化、Anthropic 工具ID去重）进行了多项关键修复，同时社区对新渠道（Mattermost）、新提供商（Kimi Coding）及 PWA 支持表现出浓厚兴趣。整体项目健康度良好，技术债务正在被系统性清理。

## 2. 版本发布
### v0.2.2
- **发布日期：** 2026-06-23
- **核心亮点：**
    - **Durability（耐久性）增强：** WebUI 对话不再依赖单一脆弱文件，改为分段存储传输，提高了数据安全性。
    - **Forked Chats 改进：** 分叉聊天中的回复保留更加可靠。
    - **统计：** 合并了 140 个 PR，新增 21 位贡献者。
- **迁移注意：** 虽然主要涉及内部存储逻辑优化，建议用户备份重要对话记录以防万一，尽管新版本旨在减少数据丢失风险。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在**稳定性修复**和**基础设施完善**：
- **#4412 [CLOSED] 抑制常规 Cron 通知：** 解决了心跳任务即使无实质操作也发送消息的问题，提升了用户体验的静谧性。
- **#4456 [CLOSED] 网关关闭容错：** 修复了网关在停止过程中因异步任务取消导致的崩溃问题，增强了服务生命周期管理的鲁棒性。
- **#4461 [CLOSED] 文档更新：** 更新了 `v0.2.2` 发布新闻，保持了文档的时效性。
- **#4443 & #4444 [OPEN] Anthropic 流式响应修复：** 虽然尚未合并，但相关修复 PR 已在讨论中，旨在解决 `tool_use` ID 重复导致的会话永久损坏问题，这是重大的稳定性提升。

## 4. 社区热点
以下 Issues/PRs 引发了较多关注或代表了重要的功能方向：

- **Issue #4413 [OPEN] Telegram Bot API 10.1 Rich Messages 支持**
    - **链接：** [HKUDS/nanobot Issue #4413](https://github.com/HKUDS/nanobot/issues/4413)
    - **分析：** 用户请求支持 Telegram 新版富文本格式，以提升消息的可读性和交互性。这反映了用户对即时通讯渠道体验的高标准要求。

- **PR #3869 [OPEN] DeepSeek 消息硬化**
    - **链接：** [HKUDS/nanobot PR #3869](https://github.com/HKUDS/nanobot/pull/3869)
    - **分析：** 针对 DeepSeek API 返回 `null` 或空字符串导致 400 错误的问题进行修复。由于 DeepSeek 是常用且敏感的提供商，此修复对维持服务可用性至关重要，评论虽显示为 undefined，但其技术影响重大。

- **PR #4459 [OPEN] Mattermost 通道支持**
    - **链接：** [HKUDS/nanobot PR #4459](https://github.com/HKUDS/nanobot/pull/4459)
    - **分析：** 新增 Mattermost 集成，扩展了企业级协作平台的覆盖范围，满足了特定工作流用户的需求。

- **PR #4458 [OPEN] WebUI PWA 支持**
    - **链接：** [HKUDS/nanobot PR #4458](https://github.com/HKUDS/nanobot/pull/4458)
    - **分析：** 允许用户在移动端安装原生体验的应用，提升了移动端的可用性和粘性。

## 5. Bug 与稳定性
今日报告的 Bug 及潜在风险点：

- **High Severity: WebUI 渲染 `<thinking/>` 标签**
    - **Issue #4465:** WebUI 将模型的思考标签作为可见文本渲染，泄露了内部指令。
    - **Status:** 已有对应修复 PR [#4466](https://github.com/HKUDS/nanobot/pull/4466) 正在处理中，该 PR 旨在规范化思考块的处理并清理流式响应中的原始标签。
    - **Impact:** 影响用户体验和提示词注入安全性，需尽快合并。

- **Medium Severity: Anthropic `tool_use` ID 重复导致会话损坏**
    - **Issue #4442 (Referenced in PR #4443/#4444):** 流式响应中重复的 `tool_use` ID 导致后续请求被 Anthropic API 拒绝（HTTP 400）。
    - **Status:** PR [#4443](https://github.com/HKUDS/nanobot/pull/4443) 和 [#4444](https://github.com/HKUDS/nanobot/pull/4444) 提供了修复方案，包括去重和前置检查。
    - **Impact:** 可能导致用户会话永久不可用，需优先处理。

- **Low Severity: Heartbeat 常规通知泛滥**
    - **Status:** 已通过 PR [#4412](https://github.com/HKUDS/nanobot/pull/4412) 修复并合并。

## 6. 功能请求与路线图信号
- **Kimi Coding Plan 支持:**
    - **Issue #4463 & PR #4464:** 用户请求支持 Kimi 付费编程计划。PR [#4464](https://github.com/HKUDS/nanobot/pull/4464) 已实现专用 Provider 注册，表明项目正在积极拓展商业 AI 提供商的支持，特别是针对编程场景优化的 API。

- **Dream 技能去重:**
    - **Issue #4467 & PR #4469:** 用户抱怨 "Dream" 功能每次运行都创建重复的工作区技能。PR [#4469](https://github.com/HKUDS/nanobot/pull/4469) 修复了此问题，使其能更新现有技能而非创建副本。这显示了项目对自动化工作流效率的关注。

- **只读会话优化:**
    - **PR #4271:** 提出跳过只读会话的 LLM 处理，以节省资源并防止意外修改。这是一个重要的性能优化信号，适合用于 FAQ 或系统配置页。

- **搜索历史工具:**
    - **PR #4439:** 新增只读的 `search_history` 工具，增强 Agent 的记忆检索能力，符合 Agent 记忆增强的趋势。

## 7. 用户反馈摘要
- **痛点：**
    - **WebUI 可见性：** 用户希望隐藏模型的思考过程（Issue #2305 已关闭，但 Issue #4465 显示前端仍存在渲染问题），以及避免看到原始 XML 标签。
    - **通知噪音：** 心跳任务在不必要时发送消息被视为干扰（Issue #4410）。
    - **重复资源：** Dream 功能创建重复技能让用户感到沮丧（Issue #4467）。
- **满意点：**
    - **稳定性提升：** 社区对 `v0.2.2` 带来的对话持久性改进表示认可。
    - **扩展性：** 对新渠道（Mattermost）和新提供商（Kimi）的支持受到欢迎，体现了项目的开放生态。
    - **移动端体验：** PWA 支持满足了移动办公/使用的需求。

## 8. 待处理积压
- **PR #3869 [OPEN]:** DeepSeek 消息硬化。虽然技术细节复杂，但对于保证 DeepSeek 用户群的稳定性至关重要，建议优先审查合并。
- **PR #4443 & #4444 [OPEN]:** Anthropic 流式响应修复。这两个 PR 解决了可能导致会话永久损坏的关键 Bug，应视为高优先级任务。
- **PR #4459 [OPEN]:** Mattermost 通道支持。作为新功能扩展，需确保测试覆盖全面后再合并。
- **PR #4469 [OPEN]:** Dream 技能去重修复。涉及核心工作流逻辑，需验证其对现有用户工作区的影响。

---
*本报告由 Agnes-2.0-Flash 生成，基于公开 GitHub 数据分析。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期**：2026-06-23
**数据来源**：NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
今日 Hermes Agent 项目保持极高的社区活跃度，过去24小时内新增 Issue 50 条，PR 50 条，其中 9 个 PR 已合并。开发重心明显集中在 **CLI/TUI 稳定性修复**、**多平台网关体验优化**（微信、飞书）以及 **安全依赖升级** 上。虽然无新版本发布，但多个关键 Bug（如 Gateway 崩溃、Z.AI 限流误报）已获得快速响应或合并，显示出核心维护者对高优先级问题的敏捷处理能力。

## 2. 版本发布
- **无新版本发布**。
- 注意：Issue #51292 指出容器镜像 `v2026.6.19` 存在高危 CVE，PR #51305 已提交修复补丁，预计下一个 Patch 版本将包含此安全更新。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在底层稳定性和功能增强：
- **[安全] 依赖升级 (PR #51305)**: 升级 `starlette`, `python-multipart`, `cryptography`, `tornado` 以修复容器镜像中的高危 CVE，直接回应 Issue #51292。
- **[修复] Gateway 启动崩溃 (PR #51304)**: 修复了当工作目录包含与内部模块同名（如 `utils`, `proxy`）的 Python 包时，Gateway 子进程退出码为 1 的严重 Bug。这对本地开发者和自定义部署环境至关重要。
- **[功能] 飞书网关增强 (PR #51302, PR #51299)**: 
    - 实现了飞书互动卡片的工具进度链实时显示和评论累积功能。
    - 优化了飞书消息合并逻辑，防止快速连续消息导致的事件丢失。
- **[功能] 微信网页版扫码登录 (PR #50044)**: 实现了基于 Web QR 的微信个人号接入流程，无需终端交互，极大提升了用户体验，对齐了 Telegram 的便捷性。
- **[修复] 桌面版构建兼容 (PR #50864)**: 允许从非 Git 检出的源码（如 ZIP 下载）进行桌面版构建，解决了开发者本地打包时的常见障碍。

## 4. 社区热点
以下 Issue 因评论数多或近期活跃度高，反映了当前用户的核心关切：

- **Intel Mac 桌面应用支持 (Issue #42199 & #40471)**: 
    - **热度**: 高 (9 comments, 1+2 👍)
    - **诉求**: 大量 Intel 架构 Mac 用户无法运行仅支持 ARM64 的桌面版 DMG。Rosetta 2 不支持反向翻译。
    - **分析**: 这是桌面端普及的主要障碍之一，需官方提供 Universal Binary 或明确说明兼容性限制。
- **Z.AI (智谱) API 限流与认证问题 (Issue #47685, #50663, #51276)**:
    - **热度**: 中高 (多个独立 Issue 指向同一提供商)
    - **诉求**: 用户报告在使用 Z.AI GLM-5.x 模型时遭遇 HTTP 429 错误，即使其他客户端正常。部分用户怀疑是系统 Prompt 中包含 "Hermes Agent" 触发了特定限流。
    - **分析**: 这表明 Hermes 的请求头或频率控制可能与 Z.AI 的阈值不匹配，或存在特定的关键词过滤机制，需要后端适配或文档警示。
- **Google Vertex AI 原生支持 (Issue #13484)**:
    - **热度**: 高 (9 comments, 12 👍)
    - **诉求**: 企业用户强烈希望获得原生的 Google Cloud Vertex AI 支持，特别是完善的 OAuth 认证流程。
    - **分析**: 作为高票 Feature Request，反映了 Hermes 在企业级 AI 基础设施集成上的潜在机会。
- **桌面版字体缩放与 UI 细节 (Issue #40166, #51239, #51217)**:
    - **诉求**: 缺乏字体缩放控制、本地文件路径无法点击、缺少德语本地化。
    - **分析**: 随着桌面端用户基数扩大，基础无障碍功能和国际化成为提升留存率的关键。

## 5. Bug 与稳定性
今日报告了大量涉及 CLI、Gateway 和特定 Provider 的 Bug：

| 严重等级 | 组件 | 问题描述 | 关联 PR/状态 |
| :--- | :--- | :--- | :--- |
| **P1/Critical** | Gateway/CLI | **Gateway 子进程崩溃**: 目录中存在冲突包名时立即退出。 | **已合并 (PR #51304)** |
| **P1/Critical** | Docker/Security | **容器镜像高危 CVE**: `v2026.6.19` 镜像阻塞 CI/CD 部署。 | **已合并 (PR #51305)** |
| **P2** | Agent/Provider | **Z.AI 429 误报**: 正常请求被限流，疑似 Prompt 关键词触发。 | 未合并，需排查 |
| **P2** | Agent/Tool | **Shell 输出过大**: 大体积 Shell 输出未做截断，导致 Provider 负载过高。 | 未合并，需优化 |
| **P2** | CLI/Config | **PEP 668 冲突**: 在系统 Python 环境下 `hermes update` 失败。 | 未合并 |
| **P2** | Desktop/Windows | **桌面版更新失败**: Windows 用户报告更新流程无法完成。 | 未合并，需复现 |
| **P2** | TUI/Dashboard | **冷启动慢**: 每次启动都重新安装 TUI 依赖，耗时 30-120s。 | 未合并，需优化锁文件 |
| **P3** | Cron/Telegram | **定时任务不执行**: Ticker 存活但 Cron Job 从未触发。 | 未合并，需调试 |
| **P3** | Desktop/UI | **删除 Profile 后图标残留**: UI 状态同步 Bug。 | 未合并 |
| **P3** | Plugin/iMessage | **认证错误**: 密钥轮换后发送文本失败。 | 未合并 |

## 6. 功能请求与路线图信号
- **委托代理配置化 (Issue #9459)**: 用户希望支持通过 `config.yaml` 定义 Agent Profile 进行任务委派，类似 `oh-my-opencode-slim`。这暗示了用户对多 Agent 编排灵活性的需求。
- **Web Dashboard 多 Profile 切换 (Issue #10674)**: 当前 Dashboard 绑定单一 Profile，用户期望支持类似 CLI 的多 Profile 管理界面。
- **运行时外部操作审批 (Issue #51221)**: 用户请求更细粒度的权限控制，允许用户配置哪些外部动作需要人工确认，增强安全性。
- **Microsoft Rewards 自动化技能 (PR #51298)**: 社区贡献了一个用于自动化 Bing 积分获取的新 Skill，展示了插件系统的扩展潜力。
- **ByteRover V4 内存支持 (PR #49538)**: 将记忆提供者升级为 ByteRover V4，反映了项目对先进记忆机制的跟进。

## 7. 用户反馈摘要
- **痛点**: 
    - **Windows/Linux 桌面体验落后**: 相比 macOS，Windows 桌面版更新失败、Intel 架构缺失等问题频发。
    - **中国 Provider 适配不佳**: Z.AI (智谱) 和 WeChat (微信) 的集成存在门槛（微信需 CLI 扫码，Z.AI 限流敏感）。
    - **启动性能**: TUI 和 Dashboard 的冷启动时间过长，影响日常使用效率。
- **满意点**: 
    - **飞书网关的深度定制**: 用户高度认可飞书互动卡片的实时进度显示和消息合并功能，认为这极大地改善了长对话的可读性。
    - **项目架构灵活性**: 多 Profile 支持和插件系统受到高级用户欢迎。

## 8. 待处理积压
- **Issue #30594** (P2): `hermes update` 在 PEP 668 系统 Python 下失败。这是一个环境兼容性问题，影响大量 Linux 用户。
- **Issue #45657** (P2): TUI/Dashboard 每次启动重建依赖。这是一个严重的性能瓶颈，建议优先优化 lockfile 解析逻辑。
- **Issue #10452** (P3): 支持 Telegram 多 Bot 路由。对于企业级或团队部署场景是刚需。
- **Issue #4707** (P1): macOS 下 Profile 作用域的 Cron 任务回退到默认 HOME 的问题，可能导致配置混乱。

---
*报告生成时间: 2026-06-23*
*分析师: Agnes-2.0-Flash*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 在 2026-06-23 保持极高的开发活跃度，过去 24 小时内共产生 20 次关键交互（2 个 Issues + 18 个 PRs）。其中 6 个 PR 已被合并或关闭，主要涉及依赖更新、安全性修复及 WebSocket 连接稳定性改进。项目当前处于快速迭代期，开发者重点解决了会话历史数据污染、Android ADB 工具集成以及前端构建工具的升级。整体项目健康度高，但存在大量标记为 `[stale]` 的 PR，提示部分长期贡献需要维护者介入审核。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭的 PR 主要集中在基础架构稳固和依赖现代化：
*   **WhatsApp 连接稳定性修复 (#3162)**：`Jh123x` 提交的 PR 解决了 WebSocket 自动断开问题，引入了重连机制、pong 处理程序和读超时检测，显著提升了 WhatsApp 通道的可靠性。
*   **依赖自动化更新**：`dependabot` 批量更新了前端生态依赖，包括 Vite (8.0.13 -> 8.0.16)、ESLint (10.2.1 -> 10.4.1)、Shadcn (4.7.0 -> 4.11.0) 以及 TypeScript-Eslint 等。这些更新确保了构建系统的最新状态和安全补丁。
*   **技能搜索体验优化 (#3152)**：`phoeagon` 增强了 `picoclaw skills search` 命令的输出，直接显示安装指令，降低了用户上手门槛。
*   **类型断言安全性加固 (#3053, #3091, #3131)**：`chengzhichao-xydt` 修复了多个 Go 代码中的未检查类型断言（Type Assertion），防止因类型不匹配导致的 Panic 崩溃，提升了后端服务的鲁棒性。

## 4. 社区热点
*   **远程 Agent 模式支持 (#3118)**：`jp39` 提议为 `picoclaw agent` 添加 WebSocket 远程模式。此功能允许用户通过远程连接控制本地 Agent，对于分布式部署和多设备协同具有潜在重要价值。目前状态为 OPEN/Stale，需确认合并优先级。
*   **Android ADB 工具扩展 (#3157)**：`danmobot` 添加了实验性的 Android ADB 工具，支持截图、UI 层级分析和模拟点击。这标志着 PicoClaw 正在从纯软件交互向移动设备自动化控制延伸，是 Agent 能力的重要补充。
*   **Token 用量追踪 (#3156)**：`loafoe` 实现了在 Pico 通道中暴露每轮对话的 LLM Token 使用情况，有助于用户监控成本和控制资源消耗。

## 5. Bug 与稳定性
*   **[严重] 会话历史数据污染 (#3115)**：`jp39` 指出并修复了一个关键 Bug，即通用工具（如 `read_file`）返回的纯文本中包含 `data:image/...` 字符串时，会被错误解析为媒体附件，导致会话历史记录损坏。该 PR 已 OPEN 并标记为修复。
*   **[中等] 重复任务执行逻辑缺陷 (#3159)**：用户 `oKatTjC` 报告在连续询问不同地区新闻时，AI 会在第二次回答中重复执行第一次的任务（美国新闻）。这可能源于上下文窗口管理或工具调用逻辑的竞态条件，需深入排查 Agent 的状态机设计。
*   **[安全] 执行命令沙箱绕过风险 (#3161)**：`danmobot` 修复了一个安全漏洞，当自定义允许规则匹配时，原有的拒绝模式（Deny Patterns）被意外跳过，可能导致恶意 Payload 执行。此修复至关重要。
*   **[安全] 跨站请求伪造风险 (#3160)**：`danmobot` 增加了针对 `/api/auth/setup` 的跨站请求检查，防止恶意网站诱导用户重置首次运行密码。

## 6. 功能请求与路线图信号
*   **加密通讯网关支持 (#3093)**：用户 `Damian-o2` 强烈要求集成 SimpleX、Tox 或 Wire 等隐私优先的通讯协议网关。虽然目前仅有一个高票 Issue，但这反映了部分用户群体对端到端加密和去中心化通讯的刚性需求，可能是未来路线图中的一个长期方向。
*   **移动端自动化 (#3157)**：Android ADB 工具的引入表明团队正在探索“Agent 即手机操作者”的场景，后续可能支持 iOS 或其他移动自动化框架。

## 7. 用户反馈摘要
*   **痛点**：用户反馈当前的 AI 在处理多步、多主题连续对话时，存在“记忆残留”导致的任务重复执行现象（Issue #3159）。
*   **需求**：用户对工具输出的准确性要求极高，任何非预期的格式解析（如将图片 Base64 误认为附件）都会破坏用户体验（PR #3115）。
*   **满意度**：用户对依赖自动更新和基础稳定性修复（如 WhatsApp 重连）持正面态度，认为这些后台改进提升了长期使用的稳定性。

## 8. 待处理积压
以下 PR 被标记为 `[stale]` 且长时间未获得维护者明确反馈，建议优先处理以释放贡献者热情：
*   **#3118**: [stale] Add remote Pico WebSocket mode to picoclaw agent (`jp39`) - *关键功能扩展*
*   **#3104, #3100, #3103, #3101, #3105**: 一系列 Dependabot 依赖更新 PR (`dependabot[bot]`) - *常规维护，通常可自动合并*
*   **#3053, #3091, #3131, #3128**: `chengzhichao-xydt` 提交的一系列代码健壮性修复 PR - *高质量补丁，建议尽快合并*

---
**分析师备注**：今日项目展现出“修补缺陷”与“拓展边界”并行的特征。一方面通过大量 PR 修复了类型安全和会话数据处理的底层问题，另一方面通过 ADB 工具和远程模式尝试突破现有交互限制。建议维护者重点关注 #3159 的逻辑复现，以及清理 Stale PR 积压。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
今日 NanoClaw 项目保持稳健的开发节奏，核心活动集中在依赖版本同步与基础设施优化上。**无新版本发布**，但存在 **9 条 Pull Requests (PR)** 更新，其中 8 条处于开放状态，1 条已关闭。主要贡献者为 `gabi-simons` 和 `ankushchadha`，重点解决了 `chat` SDK 的版本锁定一致性以及容器运行时的稳定性问题。Issues 板块今日零新增，表明当前无紧急阻塞性报告，社区注意力主要集中在代码合并与功能完善上。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日 PR 活动显著提升了项目的依赖一致性与运行环境稳定性：

*   **依赖版本锁定与同步 (核心进展)：**
    *   **PR #2834**, **#2835**, **#2836** (均由 `gabi-simons` 提交)：将核心 `chat` SDK 精确锁定至 **v4.29.0**。这是一项关键的基础设施变更，旨在解决 `ChatInstance` 类型检查失败的问题。通过同时更新 `providers` 分支和所有 `@chat-adapter/*` channel adapters，确保了整个生态链的版本一致性，避免了因版本漂移导致的运行时错误。
    *   *影响*：提高了系统的可维护性，消除了潜在的类型不匹配风险。

*   **容器运行时优化：**
    *   **PR #2771** (由 `ankushchadha` 提交)：针对 Agent 容器添加了 `--shm-size=1g` 和 `--init` 参数。由于 Agent 镜像默认包含 headless Chromium，默认 64MB 的共享内存 (`/dev/shm`) 不足会导致渲染缓冲区溢出。此修复直接提升了基于浏览器的 Agent 任务的稳定性和性能。
    *   *影响*：解决了长期存在的容器资源限制导致的潜在崩溃问题。

*   **其他功能改进：**
    *   **PR #2832**：引入了“带理由拒绝” (Reject with reason) 的功能，允许审批者在拒绝模块时提供一行原因，帮助请求 Agent 进行自适应调整，增强了多 Agent 协作的反馈闭环。
    *   **PR #2830**：修复了清理残留的 launchd/systemd 服务注册表的问题，防止因手动删除 Checkout 而留下的僵尸进程尝试启动不存在的二进制文件。

## 4. 社区热点
今日 PR 评论区活跃度一般，但以下 PR 具有较长的生命周期或较高的关注度：

*   **IMAP/SMTP 邮件集成 (PR #1235)**
    *   *状态*：Open (最后更新: 2026-06-22)
    *   *链接*: [nanocoai/nanoclaw PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
    *   *分析*：该 PR 试图将 IMAP/SMTP 作为可选 Channel 和 Toolset 引入，暴露 6 个 MCP 工具。尽管创建时间较早 (2026-03-18)，但近期仍有更新，显示社区对邮件自动化集成的持续兴趣。这是目前最大的功能扩展候选之一。

*   **只读 CLI 仪表盘技能 (PR #2795)**
    *   *状态*：Open (最后更新: 2026-06-22)
    *   *链接*: [nanocoai/nanoclaw PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)
    *   *分析*：由 `leetwito` 提交的 Utility Skill，旨在提供基于 CLI 数据的只读仪表盘。反映了用户对轻量级、非侵入式监控工具的需求。

*   **依赖版本锁定 PRs (#2834-2836)**
    *   *状态*：Open
    *   *链接*: [#2834](https://github.com/nanocoai/nanoclaw/pull/2834), [#2835](https://github.com/nanocoai/nanoclaw/pull/2835), [#2836](https://github.com/nanocoai/nanoclaw/pull/2836)
    *   *分析*：虽然评论数为 undefined/0，但这些 PR 紧密相关，构成了一个完整的版本升级补丁包。它们代表了项目当前的技术债务清理重点。

## 5. Bug 与稳定性
*   **僵尸服务注册表问题 (PR #2830)**
    *   *严重性*：中高 (影响系统整洁度与潜在资源泄漏)
    *   *描述*：删除 NanoClaw checkout 但未运行卸载脚本时，会遗留指向不存在二进制文件的 `launchd` plist 或 `systemd` unit。
    *   *状态*：已有 Fix PR (#2830) 提交，等待合并。
    *   *链接*: [nanocoai/nanoclaw PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)

*   **Chromium 渲染缓冲区溢出风险 (PR #2771)**
    *   *严重性*：高 (导致 Agent 崩溃或功能失效)
    *   *描述*：Docker 默认的 `/dev/shm` 大小不足以支持 headless Chromium。
    *   *状态*：已有 Fix PR (#2771) 提交，等待合并。
    *   *链接*: [nanocoai/nanoclaw PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)

*   **Hook Surface Guard (PR #2833)**
    *   *严重性*：低 (内部规范遵循)
    *   *描述*：标记为 `[follows-guidelines]` 的关闭 PR，可能涉及内部钩子机制的保护逻辑。
    *   *链接*: [nanocoai/nanoclaw PR #2833](https://github.com/nanocoai/nanoclaw/pull/2833)

## 6. 功能请求与路线图信号
*   **邮件原生支持**：PR #1235 强烈暗示邮件集成是路线图上的重要功能。如果合并，NanoClaw 将从纯聊天/消息平台扩展到通用通信网关。
*   **细粒度审批反馈**：PR #2832 引入的“带理由拒绝”功能，表明项目正在向更成熟的 Multi-Agent 协作框架演进，强调 Agent 间的语义沟通而非简单的二元通过/拒绝。
*   **可观测性增强**：PR #2795 提出的 CLI 仪表盘技能，显示了用户对内置监控和数据可视化的需求，可能推动未来内置 Dashboard 功能的开发。

## 7. 用户反馈摘要
*   **痛点**：
    *   用户在使用 Docker 部署 Agent 时，常遇到因共享内存不足导致的浏览器崩溃问题（已通过 PR #2771 识别并修复）。
    *   手动管理项目生命周期（安装/卸载）时，容易留下系统垃圾文件，影响长期使用的稳定性（已通过 PR #2830 识别并修复）。
*   **期望**：
    *   希望 Agent 能够直接处理电子邮件事务，实现 inbox 轮询和邮件撰写（PR #1235）。
    *   在多 Agent 审批流程中，需要更明确的拒绝原因以辅助调试和策略调整（PR #2832）。

## 8. 待处理积压
*   **长期未合并的功能 PR**：
    *   **PR #1235** (IMAP/SMTP 集成)：自 2026-03-18 创建以来已开放超过 3 个月，虽近期有更新，但仍处于 Open 状态。建议维护者评估其优先级，因其涉及较大的功能边界扩展。
    *   **PR #2795** (CLI Dashboard Skill)：自 2026-06-17 创建，属于较新的 Utility Skill 请求，需确认是否符合当前的 Skill 开发规范。
*   **依赖更新**：
    *   PR #2834, #2835, #2836 虽然是维护性更新，但由于涉及核心 SDK 版本锁定且相互依赖，建议尽快合并以确保主分支的一致性，避免后续开发中出现版本冲突。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub (nullclaw/nullclaw)

## 1. 今日速览
今日 NullClaw 项目整体活跃度较低，未发生新的 Issue 报告或版本发布。核心开发工作集中在修复 Matrix 集成模块中的一个关键持久化缺陷上。目前仓库中仅有 1 个待合并的 Pull Request (#968)，主要涉及服务重启后的状态恢复问题。项目处于相对稳定的维护状态，重点在于确保现有功能的健壮性而非大规模功能迭代。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日有一项重要的代码改进正在等待合并：
*   **PR #968**: `fix(matrix): persist next_batch across restart + test env isolation`
    *   **作者**: addadi
    *   **状态**: Open (待合并)
    *   **进展分析**: 该 PR 解决了 Matrix 通道在重启后丢失同步游标 (`next_batch`) 的问题。此前，由于 `next_batch` 仅存储在内存中，每次重启都会导致 Home Server 返回初始同步数据，造成消息重复或状态不一致。此修复通过持久化存储游标并隔离测试环境，显著提升了服务的稳定性和数据一致性。若合并成功，将是近期最重要的稳定性提升。

## 4. 社区热点
**今日无活跃的社区讨论。**
*   过去 24 小时内没有新的 Issue 或 PR 获得评论或点赞。
*   当前的 PR #968 尚未引起广泛的社区互动（评论数为 undefined/0，点赞数为 0），表明该修复可能由核心维护者内部发起或尚未进入公开审查阶段。

## 5. Bug 与稳定性
*   **潜在 Bug 修复**: PR #968 针对的是一个功能性缺陷（Bug），即服务重启导致的状态丢失。
    *   **严重性**: 中等（影响用户体验和数据完整性，但不导致崩溃）。
    *   **当前状态**: 已有对应 Fix PR (#968) 提交，等待合并。
    *   **其他报告**: 今日无新报告的崩溃或回归问题。

## 6. 功能请求与路线图信号
**今日无明显的新功能请求信号。**
*   由于缺乏新的 Issue 和活跃的讨论，无法从今日数据中提取用户对新功能的需求。
*   现有的 PR #968 更多是底层架构的稳健性优化，而非面向用户的新功能特性。这暗示项目目前的路线图重心可能在于夯实基础架构的可靠性。

## 7. 用户反馈摘要
**今日无直接的用户反馈数据。**
*   因无新 Issue 或 PR 评论，无法提炼新的用户痛点或使用场景。
*   基于 PR #968 的描述，可以推断出用户（或开发者）对“服务重启后需重新全量同步”这一行为感到不满，期望实现无缝的状态恢复。

## 8. 待处理积压
*   **PR #968**: `fix(matrix): persist next_batch across restart + test env isolation`
    *   **链接**: [nullclaw/nullclaw PR #968](https://github.com/nullclaw/nullclaw/pull/968)
    *   **状态**: Open
    *   **建议**: 该 PR 已创建超过 24 小时但尚未被合并。鉴于其修复的是影响服务稳定性的关键逻辑，建议维护者优先审查并合并此 PR，以消除重启导致的数据不一致风险。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目在 2026-06-23 保持高活跃度，过去24小时内产生 10 个新 Issue 和 32 个 PR 更新，显示核心开发团队正在进行密集的架构重构与稳定性修复。主要技术动向集中在 **Reborn 引擎的性能优化**（解决 LLM 调用超时与上下文膨胀问题）以及 **模块化拆分**（提取 HTTP Kit）。虽然无新版本发布，但通过合并多个关键修复 PR（如技能提取、自动审批 UI 对接），项目正逐步消除之前的技术债务并提升生产环境的鲁棒性。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日重点推进了以下核心功能的落地与重构：

*   **Reborn 技能提取与自我进化机制上线**
    *   **PR #5061** (Closed) 成功合并。引入了类似 Hermes 的技能提取功能，允许模型在成功执行任务后自动生成 `SKILL.md` 并安装，显著增强了 Agent 的长期记忆与复用能力。
    *   *影响*：这是 Reborn 向“自进化”代理迈进的关键一步，提升了复杂任务的处理效率。

*   **自动化管理功能完善**
    *   **PR #5133** (Open) 添加了 WebUI v2 对 Reborn 自动化的删除支持，完善了自动化生命周期的闭环管理。
    *   **PR #5068** (Open) 对接了 WebUI 的全局自动审批设置与单工具权限配置，使非技术用户也能直观管理权限策略。

*   **架构解耦与基础设施升级**
    *   **PR #5137** (Open) 开始将庞大的 `ironclaw_reborn_composition` crate 拆分为独立的 HTTP Kit 模块，旨在降低耦合度，加速后续迭代。
    *   **PR #5138** (Open) 更新了 45 个依赖项，包括 `agent-client-protocol` 和 `rustls`，确保了底层协议的安全性与兼容性。

*   **操作者诊断与日志系统增强**
    *   **PR #4801**, **#4859**, **#4860**, **#4804** 均涉及 Reborn Operator 的诊断、生命周期管理及日志跟随功能，提升了运维可观测性。

## 4. 社区热点
以下 Issue 和 PR 获得了较高的关注度或代表了当前的技术焦点：

*   **[PR #5149] Context management — progressive tool disclosure**
    *   *热度分析*：此 PR 直接针对生产环境的高延迟和超时问题（NEAR AI 120s 超时）。通过渐进式披露工具 schema，大幅减少每次调用的 Token 数量（从 ~25.8k tokens 降低），是今日最具实用价值的性能优化。
    *   *链接*: [nearai/ironclaw PR #5149](https://github.com/nearai/ironclaw/pull/5149)

*   **[Issue #5139] reborn regression: web/research tasks hang at init**
    *   *热度分析*：报告了 `main` 分支更新后出现的严重回归，导致研究任务在初始化阶段挂起且零 LLM 调用。该问题影响了 PinchBench 每日测试的通过率（21/147 失败），引发了社区对回归测试覆盖率的关注。
    *   *链接*: [nearai/ironclaw Issue #5139](https://github.com/nearai/ironclaw/issues/5139)

*   **[Issue #5148] Turn scheduler heartbeat can self-deadlock**
    *   *热度分析*：揭示了异步存储锁导致的潜在死锁风险，特别是在 GitHub 扩展安装流程中。这是一个高风险的并发问题，可能影响生产环境的稳定性。
    *   *链接*: [nearai/ironclaw Issue #5148](https://github.com/nearai/ironclaw/issues/5148)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 Reborn 引擎的并发控制、状态管理及 UI 交互层面：

*   **严重 (High)**
    *   **Issue #5139**: `reborn` 在任务初始化时挂起，导致测试大规模失败。目前尚无明确 Fix PR，需优先排查 commit `2b2ccc55` 至 `704fcd43` 间的变更。
    *   **Issue #5148**: 调度器心跳可能导致死锁，阻碍任务流转。
    *   **Issue #4108**: 夜间 E2E 测试持续失败，表明集成测试套件存在不稳定性或环境配置问题。

*   **中等 (Medium)**
    *   **Issue #5151**: Claude 模型在触发暂停/恢复工具暴露后，未能正确创建自动化，而是调用了错误工具。
    *   **Issue #5147**: `trigger_poller` 测试存在 Flaky 现象（~1/3 概率失败），干扰了合并队列。
    *   **PR #5142** (Closed): 修复了 Turn 状态写入的竞态条件（Convoy），通过引入 CAS 和退避重试机制解决了状态写冲突问题。

*   **低等 (Low)**
    *   **Issue #5146**: WebUI 扩展页面缺少“停用”按钮，用户体验不完整。
    *   **Issue #5144**: Provider 卡片在未配置 Base URL 时显示 `None`，造成视觉误导。
    *   **PR #5132**, **#5130**: 修复了 WebUI v2 中无效路由重定向和侧边栏高亮残留的问题。

## 6. 功能请求与路线图信号
*   **权限粒度精细化**
    *   **Issue #4958**, **#4959** (Closed) 及 **PR #5068** 表明，团队正在大力推行细粒度的权限控制。从全局策略转向“每工具权限模型”（always_allow/ask_each_time/disabled），并支持无需重启的热更新。这符合用户对安全合规日益增长的需求。
    *   *链接*: [Issue #4958](https://github.com/nearai/ironclaw/issues/4958), [PR #5068](https://github.com/nearai/ironclaw/pull/5068)

*   **LLM 提供商多样性**
    *   **PR #2863**: 提议添加 Manifest 作为内置 LLM 提供商，支持 OpenAI 兼容协议。这暗示项目正在拓展对非主流或特定定制模型的支持，以增强灵活性。
    *   *链接*: [PR #2863](https://github.com/nearai/ironclaw/pull/2863)

*   **自动化生命周期管理**
    *   **Issue #5140** (隐含于 #5133): 用户明确要求能够删除自动化，而不仅仅是启用/禁用。PR #5133 满足了这一需求，表明路线图正向更完整的 CRUD 管理演进。

## 7. 用户反馈摘要
*   **痛点：LLM 调用超时与成本**
    *   用户（通过 PR #5149 的描述）反映当前每次调用发送全部 ~91 个工具 Schema 导致 Token 激增，进而引发 NEAR AI 的 120s 超时。用户迫切希望看到上下文管理的优化。
*   **痛点：权限配置的不便**
    *   早期 Issue #4958/#4959 指出缺乏全局自动审批开关和每工具权限设置，迫使管理员必须重启服务才能更改策略。现在的 PR #5068 和 Closed Issue 表明这一问题已得到重视并着手解决。
*   **痛点：UI 一致性缺失**
    *   Issue #5120 指出 Gate 拒绝语义在不同模块（Auth, Approval, Activity）中名称不统一（Declined vs Deny vs Canceled），造成认知混乱。用户期望统一的 UX 规范。
*   **满意点：技能提取功能**
    *   PR #5061 引入的“技能提取”功能被标记为“Hermes-style”，暗示社区对 Agent 具备自我学习和技能复用能力持高度积极态度。

## 8. 待处理积压
*   **Issue #5139**: `reborn regression` 导致大量测试失败，需立即定位回归原因并修复，否则会影响后续 PR 的合并。
*   **Issue #4108**: 夜间 E2E 测试长期失败，需排查 CI/CD 环境配置或代码层面的系统性缺陷。
*   **Issue #5147**: Flaky test 阻塞合并队列，建议暂时禁用或重构该测试用例以恢复 CI 流畅度。
*   **Issue #5148**: 心跳死锁问题具有潜在的生产环境危害，建议在修复 #5139 的同时进行并发逻辑审查。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 项目在 2026-06-23 保持中等活跃度，过去24小时内共产生 10 次提交活动（1 Issue + 9 PRs）。虽然当日无新版本发布，但社区贡献者密集提交了多项关键修复，涵盖安全性、国际化（i18n）、UI 交互优化及依赖更新。值得注意的是，存在一个高严重程度的启动故障 Issue (#1400) 尚未得到官方回应，且多个 PR 处于 "stale"（陈旧/待合并）状态，显示出维护者响应速度可能存在滞后，需警惕技术债务累积。

## 2. 版本发布
*   **无新版本发布。**
*   **注意：** PR #1277 正在更新 Electron 框架至 v42.4.0 及 electron-builder，这是底层基础设施的重大升级，可能影响后续版本的构建兼容性，建议关注合并后的测试情况。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在底层稳定性、测试对齐及插件机制优化，为后续功能迭代扫清障碍：
*   **OpenClaw 插件机制优化 (PR #2186 [CLOSED])：** 重构了 NIM 插件的运行时入口编译逻辑，提取了共享的 TypeScript 插件包准备脚本。这统一了 Bee 和 NIM 通道的准备路径，解决了临时上游兼容性问题，提升了插件开发的标准化程度。
*   **测试用例对齐 (PR #2187 [CLOSED])：** 更新了渲染器模型默认值及历史消息元数据的测试预期，确保 Vitest 测试套件（146 passed）与当前代码行为一致，保障了回归测试的有效性。
*   **Electron 依赖升级 (PR #1277 [OPEN])：** Dependabot 提议将 Electron 从 40.2.1 升级至 42.4.0。此举有助于获取最新的安全补丁和新特性，但也引入了潜在的 API 变更风险，需密切监控合并后的构建稳定性。

## 4. 社区热点
*   **Issue #1400 [OPEN] - 4.1版本严重启动故障**
    *   **热度指标：** 创建于 2026-04-03，更新于 2026-06-23，评论 6 条。
    *   **分析：** 这是今日最值得关注的 Issue。用户报告从 3.30 升级至 4.1 后出现“无限重启循环”及 LLM 配置冲突。由于涉及核心启动流程瘫痪，属于 P0 级阻塞性 Bug。尽管问题描述详细并提供了联系方式，但截至报告日仍未见官方回复，反映出维护团队对存量严重 Bug 的响应存在延迟。
*   **PR #1401 [OPEN] - 请求安全性修复**
    *   **分析：** 针对 SSE 流式请求 ID 可预测导致的潜在数据泄露风险，提出使用 `crypto.randomUUID()` 替代 `Math.random()`。这是一个关键的安全加固措施，若不及时合并，可能使应用面临跨用户数据窥探的风险。

## 5. Bug 与稳定性
*   **[严重] Issue #1400：网关反复启动失败/无限循环**
    *   **描述：** 升级至 4.1 版本后应用无法启动，伴随自定义 LLM 配置错误。
    *   **状态：** 未分配，无关联 Fix PR。
    *   **建议：** 需立即指派开发人员复现并修复，此为阻断性问题。
*   **[中等] PR #1401：SSE 请求 ID 可预测漏洞**
    *   **描述：** 使用非加密随机数生成器导致隐私泄露风险。
    *   **状态：** 已提交修复方案 (PR #1401)，待合并。
*   **[轻微] PR #1402：多文件附件选择仅保留最后一个文件**
    *   **描述：** 闭包变量捕获问题导致同步循环中附件列表被覆盖。
    *   **状态：** 已提交修复方案 (PR #1402)，待合并。

## 6. 功能请求与路线图信号
*   **定时任务 UI 体验优化 (PR #1404)：** 用户反馈原生 `<input type="time">` 和 `<select>` 在 Electron 环境中样式不统一且交互不便。PR 提出了自定义时间控件和下拉面板以匹配应用主题。这表明项目正致力于提升桌面端应用的本地化用户体验一致性。
*   **国际化完善 (PR #1403)：** 补充了 `delete` 键的中英文翻译，修复了中文界面下显示英文单词的问题。显示项目仍在持续打磨多语言支持的细节。
*   **通知渠道容错 (PR #1406)：** 当 IM 平台未勾选时，定时任务通知下拉列表为空的问题得到修复，改为显示完整列表。这体现了对边缘用例（Edge Cases）的用户体验关怀。

## 7. 用户反馈摘要
*   **痛点：** 升级路径不稳定。用户 #1400 明确指出从 3.30 到 4.1 的升级过程导致了灾难性的启动失败，且旧有的 LLM 配置 bug 未被彻底解决。用户对“默认调用自动配置”与“自定义配置”之间的冲突感到困惑和沮丧。
*   **满意度：** 社区开发者对代码质量的改进表示支持，如安全性修复 (#1401) 和 i18n 补全 (#1403)。
*   **场景：** 用户主要在混合使用多种 LLM（如 qwen3.5-plus）和集成 IM 通知渠道的场景下工作，对系统的稳定性和配置的灵活性有较高要求。

## 8. 待处理积压
*   **高优先级 Issue：** #1400 (启动崩溃) - 已停滞超过 2 个月，急需维护者介入。
*   **待合并 PRs (Stale)：**
    *   #1401 (安全修复) - 涉及隐私安全，建议优先合并。
    *   #1402 (附件多选 Bug) - 影响核心功能使用。
    *   #1403 (i18n 缺失) - 影响品牌形象。
    *   #1404 (UI 优化) - 提升用户体验。
    *   #1406 (通知渠道逻辑) - 修复逻辑缺陷。
    *   #1277 (依赖升级) - 基础设施更新。
*   **建议：** 维护者应尽快清理上述 "stale" 状态的 PRs，特别是安全问题和安全相关的依赖升级，以避免安全窗口期过长。同时需正面回应 Issue #1400 的用户，哪怕只是确认收到并正在排查，以缓解社区焦虑。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**：2026-06-23
**数据来源**：GitHub API (moltis-org/moltis)

### 1. 今日速览
截至 2026-06-23，Moltis 项目在过去 24 小时内保持低活跃度，未产生新的 Issue 或 Release。主要动态集中于 Pull Request #215 的状态更新（标记为已关闭/Closed），该 PR 涉及图像发送功能的实现。尽管今日无新代码合并，但核心功能模块的迭代仍在持续中。整体来看，项目处于平稳维护期，暂无紧急阻塞性问题。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日重点关注的动态为 PR #215，其状态在 2026-06-23 更新为 `[CLOSED]`。
*   **PR #215**: `feat(tools): add send_image tool for channel image delivery`
    *   **内容**：引入了 `send_image` 工具，允许 Skills 向 Telegram 等渠道发送本地图片文件（支持 PNG, JPEG, GIF, WebP）。
    *   **技术细节**：复用了现有的截图管道，返回 `data:` URI 格式的数据，Chat Runner 可自动识别并处理。支持可选的 `caption` 参数。
    *   **状态分析**：虽然标签显示为 `CLOSED`，但标题包含 `feat` 且摘要详细描述了功能实现。若该 PR 未被合并（Merged），则意味着该功能尚未进入主分支；若被误标或后续处理中，需维护者确认其最终状态。鉴于无新 PR 合并，今日实际代码库未发生实质性变更。
    *   [查看 PR #215](https://github.com/moltis-org/moltis/pull/215)

### 4. 社区热点
*   **今日无活跃讨论**。
*   由于过去 24 小时 Issues 和 PR 的新增/评论数为 0，当前社区焦点集中在上述已关闭/待确认的图像发送功能上。用户对于多模态（图片）交互的需求通过此 PR 得到了初步响应。

### 5. Bug 与稳定性
*   **无新增 Bug 报告**。
*   今日无关于崩溃、回归或稳定性的 Issue 更新。

### 6. 功能请求与路线图信号
*   **信号**：PR #215 反映了用户对**多模态消息支持**（特别是图片发送）的明确需求。
*   **分析**：该功能旨在增强 Skill 与 Telegram 等渠道的交互能力，通过复用截图管道降低实现成本。如果该功能最终被合并，将显著提升 Moltis 在富媒体通信场景下的可用性。

### 7. 用户反馈摘要
*   由于今日无新的 Issue 评论，无法提取实时用户痛点。
*   基于 PR #215 的上下文，开发者（maximilize）关注的是如何优雅地集成图片发送逻辑，并考虑了兼容性（多种图片格式）和用户体验（可选 Caption）。

### 8. 待处理积压
*   **PR #215 状态澄清**：建议维护者确认 PR #215 的最终状态（是已合并后关闭，还是被拒绝/取消）。若该功能对用户至关重要，需确保其正确合并至主分支以释放价值。
    *   [链接](https://github.com/moltis-org/moltis/pull/215)
*   **长期无活动**：自 2026-02-23 创建以来，该 PR 经历了一段时间的沉默直至 2026-06-23 的状态更新，建议关注此类长期 PR 的处理效率，以保持社区贡献者的积极性。

---
*免责声明：本报告基于提供的 GitHub 数据自动生成，旨在提供客观的项目状态快照。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub agentscope-ai/CoPaw

## 1. 今日速览
今日 CoPaw 项目保持高活跃度，共处理 **29 个 Issues** 和 **50 个 Pull Requests**。核心焦点集中在 **v1.1.12.post1 版本的稳定性修复**（特别是 Cron 调度器和内存索引）以及 **v2.0 架构的合并准备**。前端移动端适配、Discord 流式响应及沙箱安全机制是今日主要的功能推进点。虽然无正式新版本发布，但多个关键 Bug 的修复 PR 已合并或处于审查阶段，项目正处于从 1.x 向 2.0 过渡的关键稳定期。

## 2. 版本发布
*   **无正式新版本发布。**
*   **开发动态：** PR #5429 已将版本号 bump 至 `1.1.12.post2`，表明团队正在为下一个补丁版本做准备，主要旨在解决今日报告的高优先级 Bug。
*   **重大分支合并：** PR #5412 正在执行 `upstream/main` (v1.1.12) 到 `dev/agentscope2.0` 的合并，涉及 170 个 commit 的手动冲突解决，标志着 v2.0 架构集成进入深水区。

## 3. 项目进展
今日合并/关闭的重要 PR 显著提升了系统的健壮性和用户体验：

*   **Cron 调度器修复：**
    *   **PR #5347** (Closed): 修复了 `jobs.json` 中的无效条目导致启动失败的问题，增强了容错性。
    *   **PR #5426** (Closed): 修正了 Dream Task 的默认 misfire 时间为 600s，解决了 #5402 报告的执行失败问题。
*   **前端与移动端优化：**
    *   **PR #5394 & #5425** (Open/Closed): 解决了 Plugin Manager 在手机视图下的布局溢出和响应式问题，提升了移动端可用性。
    *   **PR #5314** (Closed): 为 Discord 频道添加了流式响应支持（消息编辑+打字指示器），改善了长文本生成的交互体验。
*   **安全性与隔离：**
    *   **PR #5310** (Closed): 引入 `bubblewrap` 作为 Linux 沙箱后端，提供了比 Landlock 更强的挂载命名空间隔离，提升了 Agent 执行环境的安全性。
    *   **PR #5424** (Closed): 改进了登录错误处理并增加了速率限制，增强了认证层的安全性。

## 4. 社区热点
以下 Issue/PR 因评论活跃或涉及核心功能而受到高度关注：

*   **[Bug] 内置技能升级后重置 (#5262)**
    *   **链接:** https://github.com/agentscope-ai/CoPaw/issues/5262
    *   **分析:** 用户抱怨每次升级后需手动重新禁用不需要的内置技能（如 docx/xlsx）。这反映了配置持久化机制的缺陷，是高频痛点。
*   **[Bug] 自定义 OpenAI 提供商不支持 Function Calling (#5345)**
    *   **链接:** https://github.com/agentscope-ai/CoPaw/issues/5345
    *   **分析:** 用户在使用 OMLX 等兼容提供商时发现工具调用失效，而 Ollama 正常。这表明框架对非原生提供商的工具调用解析存在兼容性问题，限制了生态扩展。
*   **[Feature] 记忆管理增强 (#3995)**
    *   **链接:** https://github.com/agentscope-ai/CoPaw/issues/3995
    *   **分析:** 长期未关闭的功能请求，指出当前基于 Markdown 的记忆系统缺乏生命周期管理和冲突检测。随着用户数据量增加，此问题日益凸显。
*   **[Bug] 思考内容截断导致用户不可见 (#5416 / #5415)**
    *   **链接:** https://github.com/agentscope-ai/CoPaw/issues/5416
    *   **分析:** 部分模型（如 StepFun, DeepSeek）将回复放入 `reasoning_content` 而非 `content`，导致前端显示空白。这是与大模型协议演进相关的常见兼容性问题。

## 5. Bug 与稳定性
今日报告了多个严重阻碍使用的 Bug，主要集中在后端稳定性和前端渲染：

| 严重程度 | 问题描述 | Issue ID | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **高** | **Cron 调度停止触发**: 应用存活但定时任务不再执行。 | #5398 | 关联 PR #5347 (修复无效条目) |
| **高** | **前端崩溃**: 包含大量工具调用历史的会话导致前端白屏/崩溃。 | #5401 | 需检查 `agentscope_msg_to_message` 转换逻辑 |
| **高** | **内部服务器错误**: 安装后启动直接报错 `get_remote_addr`。 | #5379 | 未知，需排查网络中间件兼容性 |
| **中** | **Agent 卡死**: DeepSeek 模型在 thinking 阶段容易卡死，需手动干预。 | #5328 | 未知，可能涉及超时设置或流式处理 |
| **中** | **LLM 获取超时挂起**: 空闲 10-15 分钟后新消息导致无限加载。 | #5411 | 未知，连接池或心跳机制问题 |
| **低** | **Shell 命令解析失败**: 无法正确处理管道、重定向等特殊字符。 | #5373 | 未知，工具调用解析器缺陷 |

## 6. 功能请求与路线图信号
*   **智能体与工作空间解耦 (#5392):** 用户强烈希望实现 Agent 与 Workspace 的分离，以支持跨工作空间复用 Agent。这是一个架构层面的重大改进，若采纳，将极大提升多租户和多项目管理的能力。
*   **移动端友好控制台 (#4635):** 尽管已有部分响应式修复，但用户仍指出 WebUI 在移动端存在严重的显示和交互问题。这符合 PR #5394/#5425 的推进方向，预计未来版本会继续强化移动端体验。
*   **拖拽上传文件 (#5420):** 标准 UX 改进请求，期待在后续迭代中纳入。
*   **Kimi Coding Plan 模型支持 (#5427):** 用户提出需要支持 Anthropic 格式的自定义提供商，以兼容 Kimi 等新模型接口。

## 7. 用户反馈摘要
*   **配置持久性缺失:** 用户多次提到升级后配置丢失（如 #5262），对“每次升级都要重新配置”感到沮丧。
*   **大模型兼容性挑战:** 随着各种新型号（DeepSeek, StepFun, OMLX）的出现，框架在处理 `reasoning_content` 和非标准 OpenAI 兼容 API 时显得力不从心，用户期望更通用的适配器。
*   **稳定性焦虑:** 频繁出现的“卡死”、“白屏”和“内部错误”让用户对生产环境的可靠性产生疑虑，尤其是在长时间运行场景下。
*   **安全需求提升:** 引入 Bubblewrap 沙箱受到关注，表明高级用户对 Agent 执行环境的安全隔离有明确需求。

## 8. 待处理积压
*   **Issue #5379 (Internal Server Error):** 安装即报错，属于阻断性 Bug，需立即调查 `get_remote_addr` 在不同网络环境下的兼容性。
*   **Issue #5411 (LLM Timeout Hang):** 长时间空闲后的连接挂起问题，可能影响服务器资源释放，需优化连接池或心跳检测机制。
*   **Issue #3995 (Memory Management):** 长期存在的记忆系统架构缺陷，建议列入 v2.0 重构的核心议程。
*   **PR #5412 (Merge to 2.0):** 该合并请求涉及大量代码冲突解决，需密切跟踪以确保 v2.0 分支的代码完整性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-23
**数据来源：** GitHub (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 项目在 2026-06-23 保持极高的开发活跃度，过去24小时内共产生 50 条 Issue 更新和 50 条 PR 更新，显示出核心开发与社区贡献的双向繁荣。虽然没有新的版本发布，但多个关键基础设施（如安全扫描、Wasm 插件运行时、认证系统）的 RFC 和 PR 正在快速推进，标志着项目正从“功能完善”向“架构硬化”转型。重点突破在于供应链安全（SLSA/Trivy）、运行时稳定性（Hook 覆盖、上下文管理）以及多通道集成（Telegram/Webhook, Discord 修复）。

## 2. 版本发布
**无新版本发布。**
当前处于 v0.8.x 系列的稳定化阶段，大量工作集中在 v0.9.0 的安全与架构重构预备上。

## 3. 项目进展
今日合并/关闭的重要 PR 显著提升了系统的可观测性与安全性：

*   **安全与合规加固：**
    *   **[PR #8215](https://github.com/zeroclaw-labs/zeroclaw/pull/8215)**: 硬化了 SOP 触发器上下文，防止未信任载荷注入模型提示，提升了自动化流程的安全性。
    *   **[PR #8168](https://github.com/zeroclaw-labs/zeroclow/pull/8168)**: 在 CI 流水线中集成了 Trivy 容器镜像扫描，针对基础层 CVE 进行拦截，符合 RFC #7675 第二阶段目标。
    *   **[PR #8227](https://github.com/zeroclaw-labs/zeroclaw/pull/8227)**: 修复了 Kilo 提供商的重放助手推理逻辑，增强了自定义 Provider 的兼容性。

*   **运行时与可观测性修复：**
    *   **[PR #8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146)**: 修复了 CLI 一次性进程退出时 Telemetry 数据丢失的问题，确保监控数据的完整性。
    *   **[PR #7771](https://github.com/zeroclaw-labs/zeroclaw/pull/7771)**: 完善了 Agent 生命周期观察者事件中的元数据传播（Channel, Alias, Turn ID），极大提升了分布式追踪的可调试性。
    *   **[PR #8003](https://github.com/zeroclaw-labs/zeroclaw/pull/8003)**: 激活了静默的 `session_end` Hook，修复了会话结束时的资源清理逻辑。

*   **功能增强：**
    *   **[PR #8182](https://github.com/zeroclaw-labs/zeroclaw/pull/8182)**: 恢复了客户端关系图谱知识表面，增强了 Agent 的记忆与关联能力。
    *   **[PR #8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)**: 实现了 Dashboard 内的应用内升级功能，支持受监督的重启，提升了运维体验。

## 4. 社区热点
今日讨论最激烈的议题集中在**架构演进**与**安全风险**上：

*   **WebAssembly 优先战略 ([Issue #7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) & [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)):**
    *   开发者 ConYel 提出彻底消除 Node.js 依赖，转向 Wasm-first 插件运行时。这不仅涉及构建工具的移除，更提出了“默认开启、能力声明、签名分发”的新安全模型。这是 ZeroClaw 摆脱传统 JS 生态供应链风险的关键一步。
*   **供应链签名与 SLSA ([Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)):**
    *   紧随 Wasm 提案，社区讨论了硬件 PGP 密钥和 SLSA 溯源证明的实施细节，旨在建立业界领先的发布信任链。
*   **默认上下文预算 Bug ([Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)):**
    *   用户 JordanTheJet 报告默认 32k 上下文预算在首次迭代即被系统提示词和工具定义耗尽，导致持续的预emptive trim（提前截断）。这是一个高优先级（P1）的工作流阻塞问题，反映了配置默认值的合理性需要重新评估。

## 5. Bug 与稳定性
*   **[High] Discord 禁用失效 ([Issue #8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013)):**
    *   **现象：** 在配置中禁用 Agent 后，其绑定的 Discord 频道仍在线并回复消息。
    *   **严重性：** S0 (数据丢失/安全风险)，可能导致未授权交互。
*   **[High] TUI 中 MCP 工具不可见 ([Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)):**
    *   **现象：** Zerocode TUI 会话无法发现 Gateway 已连接的 MCP 工具。
    *   **严重性：** S1 (工作流阻塞)，影响开发者调试与使用。
*   **[Medium] Telegram Token 泄露 ([Issue #2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091)):**
    *   **现象：** Telegram 轮询错误日志中可能包含 Bot API Token URL 片段。
    *   **严重性：** S3 (轻微)，但涉及凭证安全，需尽快修复日志脱敏。
*   **[Medium] Windows 测试失败 ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)):**
    *   **现象：** 116 个测试在 Windows 环境下失败，主要因 Unix 特定命令和路径语义引起。
    *   **状态：** 需改进 CI 以覆盖 Windows 平台。

## 6. 功能请求与路线图信号
*   **本地用户认证 ([Issue #8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076)):**
    *   请求实现 IdP-less 的本地用户名/密码认证，作为 OIDC/SSH 之外的补充，满足私有部署且无外部身份源的场景。
*   **Telegram Webhook 模式 ([Issue #8046](https://github.com/zeroclaw-labs/zeroclong/issues/8046)):**
    *   用户希望增加可选的 Webhook 模式替代长轮询，以支持更复杂的网络拓扑（如反向代理、云函数环境）。
*   **会话历史自动截断 ([Issue #8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)):**
    *   基于现有配置项 `session_ttl_hours` 实现自动清理陈旧会话历史，以降低 Token 消耗并提升响应速度。
*   **OpenRouter 模型回退 ([Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)):**
    *   利用 OpenRouter 的原生 fallback 机制，提高多模型配置的可用性。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍反映默认配置（如 Context Budget）过于保守或不合理，导致频繁的工具调用中断或性能下降（Issue #5808, #8048）。
*   **需求：** 运维侧强烈渴望更细粒度的控制能力，如 WhatsApp 群组白名单（Issue #6371）、Per-Agent 环境变量隔离（Issue #8226）以及本地浏览器登录（Issue #8076）。
*   **满意度：** 对近期在可观测性（Telemetry 修复）和 UI 交互（Zerocode 界面优化, Issue #8000）方面的改进表示认可，认为提升了开发体验。

## 8. 待处理积压
*   **[Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054):** 系统提示词中的工具可用性与实际进入点（Gateway/WebSocket等）不一致。虽然 Direct Runtime 路径已在 PR #8053 修复，但其他入口点的同类问题仍需解决，目前状态为 `blocked`。
*   **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462):** Windows 平台的测试兼容性问题是长期存在的跨平台障碍，需分配专门资源进行修复，否则将阻碍 Windows 用户的正式采用。
*   **[Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078):** RFC 提议的“本地预提交门禁”旨在提高代码质量门槛，但涉及复杂的本地环境模拟，需维护者深入评审其可行性与开发者体验影响。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*