# OpenClaw 生态日报 2026-07-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-08 01:45 UTC

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
**日期：** 2026-07-08
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
过去24小时内，OpenClaw 项目保持了极高的活跃度，累计处理 **500 个 Issues** 和 **500 个 PRs**。尽管没有新版本发布，但社区在**会话状态稳定性**、**多智能体通信可靠性**以及**工具调用精度**方面取得了显著进展。大量高优先级的 Bug（P1/P2）已被识别并关联了修复 PR，特别是针对上下文溢出检测、子代理生命周期管理和消息路由冲突的问题。项目整体处于“高强度修复与优化”阶段，核心引擎的健壮性正在通过密集的 PR 合并得到加强。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日重点推进了底层引擎的稳定性和性能优化，主要里程碑包括：
*   **上下文与令牌估算修正：** 多个 PR (`#101951`, `#101952`, `#101950`) 对齐了 `TOOL_RESULT_CHARS_PER_TOKEN` 与 `ESTIMATED_CHARS_PER_TOKEN`，解决了 Mid-turn 预检中因令牌估算过高导致的误报截断问题，提升了长对话的连续性。
*   **会话锁与竞态条件修复：** PR `#101928` 允许嵌入代理在溢出恢复期间重新进入会话写锁，解决了 `#97747` 中的死锁问题；PR `#101920` 实现了回复会话初始化的自愈机制，防止会话永久挂起。
*   **媒体理解优化：** PR `#101947` 在提供商执行前应用图像压缩，解决了大图片（>25MP）导致的维度限制错误。
*   **Cron 持久化改进：** PR `#100597` 修复了 Cron 任务结果增量持久化的问题，确保 `runningAtMs` 字段及时重置，避免状态不一致。
*   **MCP 协议合规性：** PR `#101730` 修复了 MCP 客户端接收通知（Notification）时错误返回响应的问题，符合 JSON-RPC 规范。

## 4. 社区热点
以下 Issues 因评论数多、评级高（🦞 Diamond Lobster / 🐚 Platinum Hermit）而成为社区焦点：

*   **[Security] Text between tool calls leaks to messaging channels (#25592)**
    *   **热度：** 33 评论，Diamond Lobster 评级。
    *   **诉求：** 用户强烈要求隔离代理内部处理文本与最终用户可见消息，当前机制导致内部错误或日志泄露到 Slack/iMessage 等渠道，严重影响用户体验。
*   **[Bug] Subagent completion silently lost (#44925)**
    *   **热度：** 21 评论，Diamond Lobster 评级。
    *   **诉求：** 多智能体编排中，子代理完成信号丢失且无重试/通知，导致工作流静默失败。这是构建可靠多智能体系统的核心阻碍。
*   **[Security] Security Roadmap: Protecting API Keys (#11829)**
    *   **热度：** 20 评论。
    *   **诉求：** 社区持续关注密钥泄露风险，呼吁建立分层保护机制，防止 API Key 序列化进 Prompt 或被 Chat 暴露。
*   **[Performance] `openclaw doctor --fix` 性能回退 (#85333)**
    *   **热度：** 15 评论，Platinum Hermit 评级。
    *   **诉求：** 诊断命令速度下降 4-5 倍，严重影响运维效率，需紧急优化路径遍历瓶颈。

## 5. Bug 与稳定性
今日报告的高严重性 Bug 及修复状态：

| 问题描述 | Issue # | 严重程度 | 修复状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **Signal daemon 重启竞态条件**：SIGUSR1 重启导致孤儿进程和发送失败 | #22676 | P1 | 待审查 | [Issue](https://github.com/openclaw/openclaw/issues/22676) |
| **Bootstrap 文件被忽略**：agentDir 下的配置未生效 | #29387 | P1 | 待修复 | [Issue](https://github.com/openclaw/openclaw/issues/29387) |
| **Exec 工具环境变量继承缺失**：技能配置 env 未传递给子进程 | #31583 | P1 | 待修复 | [Issue](https://github.com/openclaw/openclaw/issues/31583) |
| **多智能体编排不稳定**：并发添加/配置覆盖，会话锁失败 | #43367 | P1 | 待修复 | [Issue](https://github.com/openclaw/openclaw/issues/43367) |
| **A2A 消息重复**：目标代理回电导致主通道消息重复 | #39476 | P1 | 待修复 | [Issue](https://github.com/openclaw/openclaw/issues/39476) |
| **Webchat 头像 404**：有效 IDENTITY.md 头像无法显示 | #38439 | P2 (Regression) | 待修复 | [Issue](https://github.com/openclaw/openclaw/issues/38439) |
| **Google Vertex 崩溃**：`Cannot convert undefined or null to object` | #38327 | P1 (Regression) | 待修复 | [Issue](https://github.com/openclaw/openclaw/issues/38327) |

*注：多个 P1 级别的核心稳定性问题（如子代理丢失、信号竞态、A2A 重复）尚未有明确的合并 PR，建议维护者优先处理。*

## 6. 功能请求与路线图信号
*   **分层引导文件加载 (#22438)**：提议对 Bootstrap 文件进行分层加载，以节省上下文窗口预算。这与当前优化令牌估算的努力方向一致，可能纳入下一版本以支持更大规模的工作区。
*   **私有网络访问控制 (#39604)**：请求添加 `tools.web.fetch.allowPrivateNetwork` 配置项。社区对此需求强烈（11 👍），反映了内部部署和 API 集成的常见痛点。
*   **每代理成本预算 (#42475)**：请求在网关层实施每代理成本上限。这对于企业级多租户场景至关重要，可能成为商业化版本的关键特性。
*   **分布式代理运行时 (#42026)**：RFC 提议将网关拆分为控制平面和计算平面。这是一个重大的架构演进信号，旨在提高可扩展性和资源利用率，但短期内落地可能性较低。
*   **Telegram Business Bot 支持 (#20786)**：请求订阅 `business_message` 更新类型。随着 Telegram 生态的发展，此功能能显著扩大 OpenClaw 的用户触达面。

## 7. 用户反馈摘要
*   **上下文管理痛点：** 用户频繁抱怨工具输出被错误渲染为图片附件 (`#99241`, `#96857`)，导致代理无法读取文本证据。此外，`write` 工具缺乏追加模式导致 Cron 会话覆盖共享文件 (`#40001`)，引发数据丢失焦虑。
*   **多智能体复杂性：** 用户在使用多代理编排时遇到诸多困难，包括会话路由混乱 (`#41165`)、参数冲突 (`#41199`) 以及缺乏生命周期可观测性 (`#38626`)。社区期望更稳定的 A2A 通信机制和更好的调试工具。
*   **安全性担忧：** 密钥泄露 (`#11829`) 和沙箱权限问题 (`#37634`, `#31331`) 是高频痛点。用户希望沙箱环境既能隔离又能灵活写入，且不应在日志中泄露敏感凭证 (`#101620`)。
*   **UX 细节：** 用户对 TUI 实时流式传输 (`#45388`)、Slack 线程状态显示 (`#33413`) 以及数学公式渲染 (`#42840`) 等功能有明确期待，以提升交互体验。

## 8. 待处理积压
以下 Issue 长期未获实质性进展或标签为 `stale`/`needs-maintainer-review`，需维护者关注：

*   **#25592** [Security] Text between tool calls leaks... (33 评论, P1) - *关键安全/UX 问题*
*   **#44925** [Bug] Subagent completion silently lost... (21 评论, P1) - *多智能体核心缺陷*
*   **#11829** [Security] Security Roadmap... (20 评论) - *长期安全规划*
*   **#22676** [Bug] Signal daemon stop() race condition... (17 评论, P1) - *稳定性隐患*
*   **#22438** [Feat] Tiered bootstrap file loading... (17 评论, P2) - *性能优化需求*
*   **#85333** [Bug] `openclaw doctor --fix` performance regression... (15 评论, P1) - *运维工具性能*
*   **#90370** [Feature] 支持 PostgreSQL 替代 SQLite (12 评论, Closed) - *虽然已关闭，但反映了存储后端灵活性的持续需求*

**建议：** 优先处理 P1 级别的稳定性问题（#22676, #44925, #43367）和安全问题（#25592, #11829），这些是当前阻碍大规模生产部署的主要障碍。

---

## 横向生态对比

# 2026-07-08 个人 AI 智能体开源生态横向对比分析报告

**分析师：** Agnes-2.0-Flash
**日期：** 2026-07-08

## 1. 生态全景
2026年7月，个人 AI 智能体开源生态正处于从“功能堆砌”向“生产级稳健性”转型的关键期。安全性（特别是本地认证与权限控制）成为全行业的最高优先级痛点，多个项目爆发集中式安全审计发现。同时，多智能体编排（Multi-Agent Orchestration）的可靠性、MCP协议的标准化合规性以及边缘/硬件端的集成能力，构成了当前技术演进的核心三角。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 500 | 500 | 无 | 🟢 高活跃/高强度修复 | 核心引擎稳定性攻坚，社区极度活跃 |
| **NanoBot** | 12 | 32 | 无 | 🟡 中活跃/补丁模式 | 修复 0.2.x 回归问题，安全漏洞频发 |
| **Hermes Agent** | 50 | 50 | v0.18.1 | 🟢 高活跃/稳定迭代 | 资源泄漏修复，桌面端体验优化 |
| **PicoClaw** | 7 | 4 | 无 | 🟠 低活跃/功能迭代 | 硬件集成(ADB)与安全策略优化 |
| **NanoClaw** | 1 | 23 | 无 | 🟢 高活跃/文档重构 | 供应链安全加固，文档与代码对齐 |
| **NullClaw** | 0 | 0 | 无 | 🔴 静止 | 无活动 |
| **IronClaw** | 32 | 50 | 无 | 🟢 高活跃/架构重构 | Reborn 架构模块化，CI 稳定性提升 |
| **LobsterAI** | 9 | 14 | v2026.7.7 | 🟢 高活跃/安全预警 | 定时任务重构，集中响应安全审计 |
| **TinyClaw** | 9 | 0 | 无 | 🔴 高危/安全危机 | 9个 Critical 安全 Issue，无功能进展 |
| **CoPaw** | 16 | 38 | v2.0.0-beta.3 | 🟢 高活跃/前端加固 | Windows 沙箱修复，前端渲染优化 |
| **ZeptoClaw** | 0 | 0 | 无 | 🔴 静止 | 无活动 |
| **ZeroClaw** | 23 | 50 | 无 | 🟢 高活跃/内存优化 | MCP 安全性与内存泄漏修复 |

## 3. OpenClaw 在生态中的定位

*   **优势：** 拥有绝对领先的社区活跃度（500+ Issues/PRs），是事实上的“生态基准”。其在多智能体通信可靠性、会话状态管理以及长上下文优化方面积累了深厚的技术债修复经验。
*   **技术路线差异：** 与其他项目相比，OpenClaw 更侧重于**底层引擎的健壮性**（如上下文锁、令牌估算修正）和**大规模多智能体编排**。相比之下，NanoBot 和 LobsterAI 更偏向于渠道集成（WhatsApp/Slack）和快速功能迭代，而 TinyClaw 则因安全架构缺失处于被动防御状态。
*   **社区规模：** 作为核心参照系，OpenClaw 的 Issue 评级（Diamond Lobster）和社区参与度远高于其他项目，其技术决策往往具有风向标意义。

## 4. 共同关注的技术方向

1.  **本地安全与认证机制 (Local Auth & Security)**
    *   **涉及项目：** TinyClaw (Critical), NanoClaw (P1), LobsterAI (High), CoPaw (Beta security), NanoBot (P1).
    *   **具体诉求：** 几乎所有活跃项目都面临本地 Webhook、API 网关或控制平面的未认证访问风险。TinyClaw 甚至因缺乏基础认证而爆发 9 个 Critical Issue。用户迫切要求实施 Token 验证、RBAC 和防止本地提权。

2.  **MCP 协议合规性与稳定性 (MCP Compliance)**
    *   **涉及项目：** OpenClaw, NanoBot, Hermes Agent, ZeroClaw.
    *   **具体诉求：** 解决 MCP 客户端通知处理错误、工具过滤绕过、Schema 克隆导致的内存泄漏以及重连稳定性问题。MCP 已成为智能体与工具交互的事实标准，但其实现细节在各项目中仍存在显著差异和 Bug。

3.  **多智能体/子代理生命周期管理 (Subagent Lifecycle)**
    *   **涉及项目：** OpenClaw, Hermes Agent, LobsterAI.
    *   **具体诉求：** 解决子代理完成信号丢失、僵尸进程清理、并发配置覆盖以及会话路由冲突。用户需要更可靠的 A2A (Agent-to-Agent) 通信机制和可观测性。

4.  **前端渲染与用户体验 (Frontend & UX)**
    *   **涉及项目：** CoPaw, IronClaw, ZeroClaw.
    *   **具体诉求：** 解决大上下文导致的浏览器崩溃、UI 布局错乱、错误信息不透明以及长输出截断问题。Web Dashboard 的稳定性成为影响用户留存的关键因素。

## 5. 差异化定位分析

*   **OpenClaw：** **企业级/重度用户核心引擎**。侧重底层稳定性、多智能体编排和长对话管理。适合需要高度定制化和复杂工作流的开发者。
*   **NanoBot：** **渠道集成专家**。侧重 WhatsApp、WeChat、Feishu 等即时通讯渠道的兼容性和快速响应。适合需要在社交平台上部署 Bot 的用户。
*   **Hermes Agent：** **桌面端/全平台体验**。侧重 Desktop 应用、跨平台兼容性（Windows/Linux/macOS）和可视化行为分析。适合个人日常助理场景。
*   **CoPaw (QwenPaw)：** **硬件与本地自动化**。侧重 Windows 沙箱安全、GUI 自动化和边缘设备集成。适合需要控制本地软件或硬件设备的场景。
*   **TinyClaw：** **反面教材/安全警示**。当前处于严重安全危机中，适合作为“如何避免本地 API 安全缺陷”的案例研究。
*   **LobsterAI：** **功能快速迭代者**。侧重邮件、定时任务等业务功能集成，但近期安全审计暴露了其架构短板。

## 6. 社区热度与成熟度

*   **快速迭代/功能扩张期：** **OpenClaw**, **LobsterAI**, **CoPaw**。这些项目每天有大量 PR 合并，新功能（如 ADB 控制、邮件多账号、行为分析）不断涌现，但伴随而来的 Bug 和安全问题也最多。
*   **质量巩固/安全加固期：** **Hermes Agent**, **ZeroClaw**, **NanoClaw**。这些项目将重心放在修复资源泄漏、内存优化、文档对齐和安全补丁上，版本发布趋于谨慎（如 v0.18.1 补丁版）。
*   **危机处理/信任重建期：** **TinyClaw**, **NanoBot (0.2.x)**。TinyClaw 面临生存级安全挑战；NanoBot 正在努力修复 0.2.x 系列的回归问题以挽回用户信任。
*   **静止/低活跃：** **NullClaw**, **ZeptoClaw**, **Moltis**。这些项目在当前周期内无实质活动，可能已停止维护或转向私有分支。

## 7. 值得关注的趋势信号

1.  **“本地默认不安全”共识形成：** TinyClaw 和 NanoClaw 的安全审计结果表明，假设本地环境是可信的架构设计已过时。未来的智能体框架必须默认实施零信任（Zero Trust）和本地认证机制。
2.  **MCP 成为标准互操作层：** 多个项目（OpenClaw, ZeroClaw, NanoBot）都在修补 MCP 实现的 Bug，表明 MCP 协议正在取代早期的私有工具调用格式，成为智能体生态的基础设施。
3.  **多智能体编排的“确定性”需求：** 用户不再满足于简单的代理调用，而是要求确定的生命周期管理、错误重试和状态持久化。OpenClaw 和 Hermes Agent 在此方向的投入最大。
4.  **前端稳定性成为体验瓶颈：** CoPaw 和 IronClaw 的用户反馈显示，随着上下文长度增加，Web 前端的性能瓶颈日益突出。虚拟列表、分片渲染和内存管理将成为前端优化的重点。
5.  **硬件与边缘集成兴起：** PicoClaw 的 ADB 工具和 CoPaw 的 GUI 自动化表明，AI 智能体正从纯软件领域向物理世界和操作系统底层渗透，这对沙箱安全和权限控制提出了更高要求。

**建议：** 对于 AI 智能体开发者，应优先参考 OpenClaw 的多智能体稳定性实践，吸取 TinyClaw 的安全教训，并关注 MCP 协议的标准化实现。在架构设计上，务必将本地认证和资源隔离作为第一性原理考虑。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-08
**数据来源：** GitHub HKUDS/nanobot

## 1. 今日速览
NanoBot 在 2026-07-08 保持极高的开发活跃度，过去24小时内接收了 **12 条 Issue** 和 **32 条 PR**。尽管没有新版本发布，但社区对 **0.2.x 版本系列回归问题** 的反应强烈，特别是涉及 WhatsApp、WebUI 安全及多模态处理的 Bug。开发者团队响应迅速，多个 P1 级紧急修复 PR 已提交，主要集中在 MCP 网关稳定性、WebUI 安全漏洞修复以及渠道兼容性问题。项目目前处于高强度的“补丁模式”，旨在快速修复近期版本引入的不稳定因素。

## 2. 版本发布
**无新版本发布。**
当前主要焦点在于修复 0.2.x 系列引入的回归问题，尚未形成新的稳定 Release。

## 3. 项目进展
今日合并/关闭的重要 PR 显著提升了系统的稳定性和安全性：
*   **MCP 网关稳定性增强：** PR #3378 (Closed) 和 PR #4843 (Open) 聚焦于 MCP 连接管理。特别是 PR #4843 通过延迟清理过期的 `AsyncExitStack`，解决了重连时的网关崩溃问题，这对依赖 MCP 协议的工具链至关重要。
*   **微信渠道修复：** PR #3517 (Closed) 修复了因 `context_token` 过期导致的微信消息静默丢失问题，确保了定时任务和重启后的消息连通性。
*   **飞书会话优化：** PR #4763 (Closed) 改进了飞书（Feishu）的会话分隔符显示逻辑，消除了重复的系统提示气泡，提升了用户体验的一致性。
*   **底层代码重构：** PR #3232 (Closed) 简化了任务回调逻辑并恢复了意外删除的代码块，为后续开发奠定了更清晰的代码基础。

> **链接:**
> *   [HKUDS/nanobot PR #4843](https://github.com/HKUDS/nanobot/pull/4843)
> *   [HKUDS/nanobot PR #3517](https://github.com/HKUDS/nanobot/pull/3517)
> *   [HKUDS/nanobot PR #4763](https://github.com/HKUDS/nanobot/pull/4763)
> *   [HKUDS/nanobot PR #3232](https://github.com/HKUDS/nanobot/pull/3232)

## 4. 社区热点
今日讨论最激烈的议题集中在 **WebUI 安全漏洞** 和 **WhatsApp 群组功能失效**：
*   **WebUI 安全告警：** Issue #4825, #4826, #4827 由同一作者 `YLChen-007` 提交，揭示了在未配置 Token 的情况下，本地进程可轻易获取 API Bearer Token 的高危漏洞。这引发了社区对嵌入式 WebUI 默认安全配置的担忧。
*   **WhatsApp 群组回归：** Issue #4823 指出 0.2.2 版本后 WhatsApp 群组响应逻辑错误，导致消息广播至所有所在群组。这是近期版本升级中用户痛点最集中的功能性回归。
*   **MCP 重连崩溃：** PR #4764 和 Issue #4013 反映了用户在使用流式传输时遇到的长时间卡顿和网关不稳定问题，表明 MCP 异步处理仍是当前的薄弱环节。

> **链接:**
> *   [HKUDS/nanobot Issue #4825](https://github.com/HKUDS/nanobot/issues/4825)
> *   [HKUDS/nanobot Issue #4823](https://github.com/HKUDS/nanobot/issues/4823)
> *   [HKUDS/nanobot PR #4764](https://github.com/HKUDS/nanobot/pull/4764)

## 5. Bug 与稳定性
今日报告了大量中高风险 Bug，部分已有对应 PR 修复：

| 严重程度 | 问题描述 | 相关 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **P1 (高危)** | **WebUI 本地 Token 泄露**：未认证本地进程可获取 API 权限。 | #4825, #4826, #4827 | Open |
| **P1 (高)** | **DNS Rebinding TOCTOU**：SSRF 验证存在时间窗口竞争条件，未固定解析 IP。 | #4611 | Closed (需确认修复合并) |
| **P1 (高)** | **WebUI 消息错乱**：新建聊天时，首条消息可能误发至旧对话。 | #4835 | Open (PR #4836 跟进) |
| **P1 (中)** | **多模态崩溃**：对 List 类型内容调用 `.strip()` 导致程序异常退出。 | #4800 | Open (PR #4837 跟进) |
| **P1 (中)** | **工具静默失败**：`suppress(Exception)` 掩盖了工具准备阶段的验证错误。 | #4805 | Open (PR #4837 跟进) |
| **P2 (中)** | **Slack 依赖缺失**：`pyproject.toml` 缺少 `aiohttp` 导致 Slack 插件无法构建。 | #4829 | Open |
| **P2 (低)** | **WhatsApp 群组逻辑错误**：群组响应广播至所有加入的群组。 | #4823 | Open (PR #4834 跟进) |

> **链接:**
> *   [HKUDS/nanobot Issue #4835](https://github.com/HKUDS/nanobot/issues/4835)
> *   [HKUDS/nanobot Issue #4800](https://github.com/HKUDS/nanobot/issues/4800)
> *   [HKUDS/nanobot Issue #4829](https://github.com/HKUDS/nanobot/issues/4829)

## 6. 功能请求与路线图信号
*   **Provider-hosted Web Search：** Issue #3741 和 PR #3743 (Closed) 讨论了支持 Azure OpenAI 等提供商托管的网络搜索工具。这表明项目正在探索更深层次的 LLM 提供商集成，而非仅依赖本地工具执行。
*   **Camera Capture Tool：** PR #3378 (Closed) 引入了基于 OpenCV 的摄像头拍照工具。虽然已合并，但默认禁用，暗示团队正在扩充 Agent 的物理世界交互能力。
*   **Goal 运行时控制：** PR #4833 提出将长期目标（Long-term Goals）功能 gated 在特定的运行时模式下，避免 UI  clutter。这反映了用户对“持久化任务”功能的兴趣，但同时也希望保持界面的简洁性，允许按需启用高级规划功能。
*   **Zombie Process 清理：** PR #4840 和 PR #4506 共同指向了对子进程（特别是 MCP 服务器）生命周期管理的加强，包括空闲超时自动杀死和僵尸进程回收，这是提升生产环境稳定性的关键路径。

> **链接:**
> *   [HKUDS/nanobot PR #3743](https://github.com/HKUDS/nanobot/pull/3743)
> *   [HKUDS/nanobot PR #4833](https://github.com/HKUDS/nanobot/pull/4833)
> *   [HKUDS/nanobot PR #4506](https://github.com/HKUDS/nanobot/pull/4506)

## 7. 用户反馈摘要
*   **版本升级焦虑：** 多位用户（如 `mxnbf`）反馈在升级到 0.2.x 后出现严重回归，特别是 WhatsApp 和 WebUI 的行为异常，导致“任何实际工作都变得无用”。用户对稳定性下降表达了强烈不满。
*   **安全信任危机：** 关于 WebUI 本地 Token 泄露的 Issue 获得了高度关注，用户期望嵌入式 WebUI 在默认配置下具备更高的安全性，尤其是当绑定到 localhost 时。
*   **多模态兼容性不足：** 用户 `hamb1y` 指出的 `.strip()` 崩溃问题，反映了当前代码库在处理非纯文本（多模态）输入时的鲁棒性较差，这是从纯文本 LLM 向多模态 Agent 演进过程中的典型痛点。
*   **MCP 体验断点：** 用户报告 MCP 流式传输长时间停滞（90秒+），表明当前的异步处理和超时机制未能满足实时交互的需求。

## 8. 待处理积压
*   **Matrix 设备信任问题 (Issue #4841)：** 报告了 bot 在 Element 客户端显示为“Untrusted”且缺乏交叉签名或 SAS 验证路径的问题。随着隐私合规要求的提高，E2EE 支持是长期路线图的重要部分，但目前尚无明确 PR 跟进。
*   **QQ 重连指数退避 (PR #4838)：** 虽然提出了修复方案，但作为 P2 优先级，需确认是否已合并或何时纳入下一个补丁版本，以改善网络波动下的连接稳定性。
*   **Shell 僵尸进程 (PR #4840)：** 该 PR 提出了全面的僵尸进程清理方案，属于 P1 优先级，建议优先审查合并，以防止资源泄漏导致的服务不可用。

> **链接:**
> *   [HKUDS/nanobot Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)
> *   [HKUDS/nanobot PR #4838](https://github.com/HKUDS/nanobot/pull/4838)
> *   [HKUDS/nanobot PR #4840](https://github.com/HKUDS/nanobot/pull/4840)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-08
**数据来源：** NousResearch/hermes-agent GitHub 仓库

## 1. 今日速览
Hermes Agent 在 2026-07-08 保持极高的开发与社区活跃度，过去 24 小时内共产生 100 次关键更新（50 Issues + 50 PRs）。项目刚刚发布了 v0.18.1 稳定版，旨在整合近期大量合并的 PR 以提供稳定的下游依赖。当前开发重心集中在修复严重的资源泄漏（MCP 子进程）、配置同步延迟以及桌面端状态管理问题上。社区对“最小化安装”和“行为分析”等新功能的呼声较高，同时 Windows 平台兼容性成为近期 Bug 报告的高发区。

## 2. 版本发布
### **v0.18.1 (v2026.7.7)**
*   **发布日期：** 2026年7月7日
*   **类型：** 补丁版本 (Patch Release)
*   **核心内容：** 该版本打包了自 v0.18.0 (July 1) 以来合并的约 660 个 PR。主要包含 bug 修复、系统硬化（hardening）及部分进行中的特性工作。
*   **目标受众：** Docker 镜像构建者、托管部署用户及 PyPI 安装者。
*   **迁移注意：** 作为补丁版本，通常无需重大代码更改，但建议检查涉及 MCP 子进程管理和配置同步的旧有工作流，因底层逻辑已在这些 PR 中得到修正。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的稳定性和安全性：
*   **安全与权限加固：** PR #60547 修复了 `cron_mode` 在审批门控中的绕过风险，确保非交互模式下的执行策略正确应用。
*   **资源管理修复：** PR #60610 解决了终端子进程 `killpg` 导致的网关崩溃问题；PR #60612 改进了 `/update` 期间的 Cron 任务排水机制，防止更新时任务中断。
*   **用户体验优化：** PR #55787 修复了桌面端恢复会话时上下文用量显示为 0 的竞态条件；PR #60608 实现了 GUI 与后端双向的版本合同检查，避免旧 GUI 与新后端不兼容的问题。
*   **功能推进：** PR #60417 引入了 `/behavior` 命令，提供基于 5 轴的行为分析洞察，补充了原有的定量 `/insights` 功能。

## 4. 社区热点
以下 Issues 获得了较高的关注度（评论数或点赞数）：
*   **[Feature] 最小化默认安装** - Issue #19986
    *   **热度：** 3 👍, 9 评论
    *   **分析：** 用户强烈希望将非核心捆绑技能（skills）设为可选，以减少默认安装体积和维护负担。这反映了用户对“轻量级”和“模块化”部署的持续需求。
*   **[Bug] MiniMax 连接频繁断开** - Issue #6838
    *   **状态：** 已关闭
    *   **分析：** 尽管已关闭，但高评论数表明该 Provider 的稳定性曾是社区痛点，特别是从 OpenClaw 迁移的用户群体。
*   **[Bug] 配置文件静默失效** - Issue #18946 & #50199
    *   **状态：** 已关闭
    *   **分析：** 多个关于 `delegation.*` 配置在运行时未生效的报告被标记为重复或已解决，显示了配置缓存机制（`CLI_CONFIG`）是近期调试的重点。

## 5. Bug 与稳定性
今日报告了大量中高风险 Bug，主要集中在资源泄漏和状态同步上：

| 严重程度 | 问题描述 | 关联 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **Critical** | **MCP 子进程泄漏**：Gateway 和 Worker 中 stdio-MCP 子进程在重连或初始化失败时未清理，导致 FD 耗尽 (EMFILE) 和僵尸进程积累。 | #59349, #57228, #57355 | 部分有 Fix PR (#60572 相关) |
| **High** | **配置热更新失效**：`hermes config set` 修改后，运行中的进程未读取新值，需重启生效。 | #18946, #50199, #57930 | 已识别，正在修复中 |
| **High** | **Windows 平台兼容性问题**：WSL bash 解析错误、WhatsApp 控制台窗口弹出、Cron 脚本执行异常。 | #60617, #60605, #60536 | PR #60617, #60605 待合并 |
| **Medium** | **桌面端状态残留**：切换 Profile 后 Shell CWD 未跟随；冷启动时恢复过期 Session ID。 | #54990, #60541 | PR #60607 修复 Session 回退 |
| **Medium** | **文件写入逻辑缺陷**：`write_file` 先写磁盘后检查语法，导致无效 JSON/YAML 被持久化。 | #60525 | PR #60618 已提交 |

## 6. 功能请求与路线图信号
*   **行为分析工具：** Issue #60417 (PR #60417) 提出的 `/behavior` 命令展示了用户对定性分析的需求，预计将纳入后续版本，与现有的定量指标形成互补。
*   **Discord 线程管理：** PR #60146 引入 `/branch` 和 `/merge` 命令，支持 Discord 线程与 Hermes Session 的双向绑定，这是对平台原生功能深度集成的明确信号。
*   **Zulip 集成：** PR #3335 长期存在，旨在将 Zulip 作为官方平台插件支持，表明项目正逐步扩展对非主流即时通讯协议的支持。
*   **技能库扩展：** PR #46524 请求添加“头脑风暴”、“完成前验证”等开发方法论技能，反映用户希望 Hermes 不仅是对话代理，更是结构化开发助手。

## 7. 用户反馈摘要
*   **痛点：**
    *   **配置滞后：** 用户普遍抱怨命令行配置修改不能实时反映在运行中的网关或代理进程中，需要手动重启，影响了自动化运维体验。
    *   **资源泄漏：** 在生产环境中，MCP 子进程的累积泄漏导致服务器性能下降甚至崩溃，是运维人员最头疼的问题。
    *   **Windows 适配粗糙：** 多个报告指出 Windows 下的路径解析、进程组管理和 GUI 布局存在明显缺陷。
*   **满意点：**
    *   **快速响应：** 对于高优先级的崩溃和泄漏 Bug，社区和 Maintainer 的反应速度较快，多个严重 Issue 在几天内即有 PR 跟进。
    *   **Desktop 体验改进：** 用户对桌面端上下文使用量显示修复和版本握手双向检查表示认可，认为提升了稳定性感知。

## 8. 待处理积压
*   **Issue #55790:** 删除 Provider 后模型选择器仍显示旧凭证。这是一个 UI/状态同步 Bug，影响多 Provider 用户的体验。
*   **Issue #42248:** Kanban 工作流在使用自定义本地模型时死锁。这是一个高价值工作流场景下的严重 Bug，可能需要深入排查调度器与模型提供商的交互。
*   **Issue #60597:** Gemini Provider 的 UI 包装器崩溃。由于标记为 `needs-repro`，需等待更多复现步骤以定位前端与流式响应的交互问题。
*   **PR #60572:** Dashboard 不必要地启动 MCP 服务。虽然已提交 Fix PR，但若未及时合并，将继续浪费生产环境资源。

---
*分析师：Agnes-2.0-Flash*
*生成时间：2026-07-08*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-07-08
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
2026年7月7日，PicoClaw 项目保持中等活跃度，过去24小时内共产生 7 个新 Issue 和 4 个 Pull Request。社区焦点主要集中在 AI 模型调用的稳定性（如 Volcengine 工具调用泄露、OpenAI 配置失效）以及 OAuth 登录功能的回归问题上。虽然无新版本发布，但代码层面有显著改进，包括清理 Deltachat 实现、修复文件写入安全策略以及新增 Android ADB 远程操作工具。整体项目处于功能迭代与稳定性修复并行的阶段。

## 2. 版本发布
*   **无新版本发布。**
*   当前主要涉及的版本为 v0.2.8, v0.2.9 及开发中的 v0.3.1。

## 3. 项目进展
今日有 1 个重要 PR 被合并/关闭，另有 3 个 PR 处于开放状态：

*   **✅ 已合并/关闭：[#3157] feat: add Android ADB remote operations tool**
    *   **贡献者：** danmobot
    *   **进展：** 正式引入了实验性的 Android ADB 工具集，支持设备列表查看、截图、UI 层级摘要、点击、滑动及键盘事件等固定原语。这扩展了 PicoClaw 在硬件控制领域的自动化能力，且明确限制了任意 Shell 执行以保障安全。
    *   **链接：** [PR #3157](https://github.com/sipeed/picoclaw/pull/3157)

*   **🔄 开放中：**
    *   **[PR #3222] refactor(deltachat): cleanup implementation, documentation -320LOC**：大幅重构 Deltachat 集成，移除遗留功能，精简代码量，提升安全性（密码移至 JSON-RPC）。
    *   **[PR #3226] fix(tools): stop write_file from coaching destructive overwrite**：修复 `write_file` 工具的安全隐患，防止 AI 代理因提示词引导而覆盖现有文件。
    *   **[PR #3233] Fix pr 3222 backward compat**：针对上述重构的向后兼容性修复。

## 4. 社区热点
今日讨论最集中的议题围绕**第三方服务集成稳定性**展开：

1.  **Volcengine (火山引擎) 工具调用异常**
    *   **Issue [#3153]**：用户报告在使用 `doubao-seed-2.0-pro` 时，工具调用结果有时以原始 XML 文本 `<seed:tool_call>` 返回而非执行。
    *   **分析：** 这表明特定模型供应商的解析层存在兼容性问题，影响自动化任务的可靠性。
    *   **链接：** [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)

2.  **NanoKVM 与 OpenAI 配置冲突**
    *   **Issue [#3195]**：在 NanoKVM 上尝试配置 GPT-5.4 失败，交互无响应。
    *   **分析：** 涉及硬件特定环境下的环境变量或网络代理配置问题。
    *   **链接：** [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195)

3.  **OAuth 登录失效**
    *   **Issues [#3196, #3197]**：同一用户报告 Codex 和 Antygravity 的 OAuth 登录无法工作。
    *   **分析：** 多个独立认证提供商同时出现问题，可能指向底层 OAuth 库的通用故障或上游 API 变更。
    *   **链接：** [Issue #3196](https://github.com/sipeed/picoclaw/issues/3196), [Issue #3197](https://github.com/sipeed/picoclaw/issues/3197)

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

1.  **高严重度：Rate Limiting 失效 (Issue #3232)**
    *   **描述：** 在未配置 fallback models 的情况下，单模型的 RPM 限流配置不生效。
    *   **风险：** 可能导致 API 额度耗尽或服务被封禁。
    *   **状态：** 新报告，暂无 Fix PR。
    *   **链接：** [Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)

2.  **中高严重度：AI 代理行为异常 (Issue #3159)**
    *   **描述：** DeepSeek 模型在处理连续新闻查询时，出现任务重复执行（先查美国新闻再查法国新闻，却在法国新闻回答中再次执行美国新闻任务）。
    *   **风险：** 降低用户体验，浪费 Token。
    *   **状态：** 已关闭 (可能是误报或用户端问题)。
    *   **链接：** [Issue #3159](https://github.com/sipeed/picoclaw/issues/3159)

3.  **中严重度：工具调用格式泄露 (Issue #3153)**
    *   **描述：** Volcengine 工具调用以文本形式泄露。
    *   **状态：** 开放中。
    *   **链接：** [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)

4.  **低严重度：安全策略优化 (PR #3226)**
    *   **描述：** 修复 `write_file` 可能被误导进行破坏性覆盖的问题。
    *   **状态：** PR 开放中。
    *   **链接：** [PR #3226](https://github.com/sipeed/picoclaw/pull/3226)

## 6. 功能请求与路线图信号
*   **即时通讯协议集成需求 (Issue #3093)**
    *   **诉求：** 用户强烈希望增加对 SimpleX、Tox 或 Wire 的支持。
    *   **分析：** 尽管该 Issue 标记为 [stale] 且较旧（2026-06-10），但反映了用户对去中心化或隐私增强通信集成的持续兴趣。目前路线图未见直接对应 PR，但 Deltachat 的重构 (#3222) 表明项目正致力于完善现有的 Matrix/Deltachat 生态，未来可能优先考虑此类成熟协议。
    *   **链接：** [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)

*   **Android 硬件控制 (PR #3157)**
    *   **信号：** 已合并的 ADB 工具表明，PicoClaw 正积极拓展“Agent + 硬件”的场景，未来可能会有更多 IoT 或移动端控制相关的功能推进。

## 7. 用户反馈摘要
*   **痛点：**
    *   **配置复杂性：** 用户在 NanoKVM 等边缘设备上配置模型时遇到阻碍，文档指引与实际行为存在偏差。
    *   **认证稳定性：** OAuth 流程的不稳定是近期主要抱怨点，影响了 Codex 等高级功能的可用性。
    *   **Token 效率：** 模型在处理多步任务时出现逻辑冗余（如 Issue #3159），导致效率低下。
*   **满意点：**
    *   **工具扩展性：** 新增的 ADB 工具受到开发者欢迎，提供了更细粒度的设备控制能力。
    *   **代码质量意识：** 社区对 `write_file` 安全问题的关注以及 Deltachat 的大规模重构，显示出用户对系统安全性和代码整洁度的重视。

## 8. 待处理积压
*   **维护者关注建议：**
    1.  **Rate Limiting 逻辑缺陷 (Issue #3232)**：这是一个影响核心计费和安全的功能性 Bug，需优先排查 v0.3.1 中的限流中间件逻辑。
    2.  **OAuth 通用故障 (Issues #3196, #3197)**：建议检查底层 OAuth 库的版本或上游提供商的 API 变更，这可能是一个系统性问题而非个别配置错误。
    3.  **Deltachat 重构兼容性 (PR #3222, #3233)**：确保向后兼容性的修复到位，避免现有用户升级后配置失效。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**: 2026-07-08
**数据来源**: GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 在 2026-07-07 至 07-08 期间保持了极高的开发活跃度，过去24小时内共产生 **23 条 PR 更新**和 **1 条 Issue 更新**。项目重心明显转向**安全性加固**与**内部架构修复**，包括针对本地 Webhook 认证漏洞的紧急披露以及多项 CLI 和 Agent Runner 的关键 Bug 修复。同时，文档同步工作大幅推进，修正了与当前代码库（v2.1.38+）严重脱节的架构说明。尽管没有新版本的正式 Release，但大量 PR 的合并预示着即将进行的版本迭代将在稳定性和安全性上显著提升。

## 2. 版本发布
**无新版本发布。**
*注：虽然无正式 Release，但 PR #2964 和 #2963 表明项目正在对齐 `@anthropic-ai/claude-agent-sdk` 0.3.197 版本及内部文档，这通常是新版本发布前的准备阶段。*

## 3. 项目进展
今日合并/关闭的 PR 主要推动了以下关键改进：
*   **SDK 兼容性修复**：PR #2965 修复了 Anthropic SDK 0.3.x 中 `rate_limit_event` 类型映射错误的问题，确保速率限制事件能被正确识别为失败而非完成。
*   **文档与架构同步**：PR #2961, #2962, #2963, #2964 由 `glifocat` 发起的大规模文档清洗行动，重新验证并更新了 `architecture.md`, `agent-runner-details.md`, `db-central.md` 等核心文档，使其与当前代码基线一致，消除了长期存在的文档过时风险。
*   **Discord 消息转发优化**：PR #2922 修复了 Discord 通道中转发消息快照无法被 Agent 正确解析内容的问题，提升了多用户协作场景下的体验。
*   **供应链安全加固**：PR #2973 修正了 `pnpm-workspace.yaml` 中 `minimumReleaseAge` 配置项的路径错误，确保供应链年龄门控机制真正生效。

## 4. 社区热点
*   **[Security] Local action forgery via unauthenticated forwarded gateway loopback webhook (Issue #2970)**
    *   **链接**: [nanocoai/nanoclaw Issue #2970](https://github.com/nanocoai/nanoclaw/issues/2970)
    *   **分析**: 这是今日最受关注的 Issue，由 `YLChen-007` 报告。该漏洞指出本地 Webhook 接口缺乏发送者认证，可能导致本地动作伪造。由于涉及核心安全机制，预计将引发高优先级的修复 PR。
*   **Skills 分离与刷新机制 (PR #2873)**
    *   **链接**: [nanocoai/nanoclaw PR #2873](https://github.com/nanocoai/nanoclaw/pull/2873)
    *   **分析**: 由 `glifocat` 提交，旨在重构技能预飞行检查与凭据管理的逻辑，使 `/update-skills` 能更灵活地刷新代码。这反映了社区对技能模块解耦和热更新能力的持续需求。
*   **Messaging Groups 创建崩溃修复 (PR #2804)**
    *   **链接**: [nanocoai/nanoclaw PR #2804](https://github.com/nanocoai/nanoclaw/pull/2804)
    *   **分析**: 修复了 `ncl messaging-groups create` 命令因数据库约束缺失而始终报错的问题，解决了 CLI 工具的一个致命阻断性 Bug。

## 5. Bug 与稳定性
*   **高危**: **本地 Webhook 未认证漏洞** (Issue #2970)。允许攻击者在本地网络环境下伪造网关交互事件。*状态: 待修复/审查中。*
*   **中危**: **批准流程竞态条件** (PR #2974)。当前审批路径可能在处理程序执行前未原子性地锁定待处理审批，导致重复处理或状态不一致。*状态: Open PR，需合并。*
*   **中危**: **容器标记错误** (PR #2800)。`ncl groups create` 命令允许通过 `--folder` 参数绕过安全检查，导致目录遍历漏洞 (CWE-22)。*状态: Open PR，需合并。*
*   **低危**: **Agent Runner 错误记录不准确** (PR #2966)。Provider 错误被错误标记为“已完成”，掩盖了实际运行中的故障。*状态: Open PR (Draft)，语义讨论中。*

## 6. 功能请求与路线图信号
*   **代理模板与向导优化**: PR #2909 引入了代理模板的第二阶段功能，包括设置向导中的模板选择和首次代理生成逻辑。这表明路线图正致力于降低新用户上手门槛，提供更结构化的初始配置体验。
*   **Microsoft Teams 集成现代化**: PR #2958 重构了 `add-teams` 技能，采用结构化技能格式 (SSF) 和 CLI 优先的凭据流，取代了繁琐的 Azure Portal 步骤。这显示项目正推动所有频道集成向标准化、自动化方向演进。
*   **远程存储支持**: PR #1598 长期开放，提议添加基于 rclone 和 systemd 的 WebDAV/S3 远程存储技能。*信号*: 此功能优先级较低，但仍有贡献者在推进，建议维护者关注其长期可行性。

## 7. 用户反馈摘要
*   **痛点**: 用户普遍反映文档与实际代码版本脱节严重，特别是 SDK 版本和数据库 Schema 的变化未在文档中及时同步 (见 PR #2964, #2962 的摘要)。
*   **满意度**: 用户对 CLI 工具的稳定性改进表示欢迎，如 PR #2804 修复了长期存在的 `messaging-groups` 创建崩溃问题。
*   **新需求**: 用户期望更细粒度的权限控制和更安全的本地通信机制，Issue #2970 和 PR #2800 均指向了对本地操作安全性和数据隔离性的强烈关注。

## 8. 待处理积压
*   **Issue #2970**: 安全漏洞报告，需立即分配安全工程师进行审查和修复。
*   **PR #2800**: 目录遍历漏洞修复，合并后可显著增强 CLI 的安全性。
*   **PR #2966**: Agent Runner 错误语义讨论，需维护者尽快明确“失败”状态的判定标准并合并。
*   **PR #1598**: 远程存储技能，虽为旧 PR，但若项目计划支持多云存储，需决定是继续合并还是重新设计。

---
*报告生成时间: 2026-07-08*
*分析师: Agnes-2.0-Flash*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-07-08
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目在 2026-07-08 保持高活跃度，过去24小时内处理了 32 个 Issues 和 50 个 PRs。开发重心集中在 **Reborn 架构的内部重构**（如 Slack 集群模块化、默认值构建器标准化）以及 **关键 Bug 修复**（特别是 CI 中的时间竞态问题和工具权限泄露）。虽然无新版本发布，但大量底层基础设施的优化和安全补丁表明项目正处于代码质量加固阶段，整体健康度良好，技术债务正在被系统性清理。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在代码重构、测试稳定性和安全加固：

*   **Reborn 内部模块重构与标准化：**
    *   **PR #5785**: 将庞大的 Slack 集群（17个模块）重组为单一的 `slack/` 内部模块，这是模块化重构计划的一部分，有助于降低维护复杂度。
    *   **PR #5791, #5792, #5793, #5794, #5796**: 引入并应用了基于 `default()` 的流畅构建器设置器（Fluent Setters），显著减少了测试代码和配置对象中的样板代码，提升了代码可读性和一致性。
    *   **PR #5790**: 实现了 `PromptContextTokenBudget` 的全栈可覆盖性，为更精细的资源控制提供了集成测试基础。

*   **CI 稳定性与测试修复：**
    *   **PR #5789**: 修复了导致 `slack_pairing_redeem_rejects_expired_code` 测试间歇性失败的根本原因（Tokio 暂停时钟与 Chrono 墙钟时间的竞态），提高了集成测试的确定性。

*   **安全加固：**
    *   **PR #5659**: 修复了工具披露表面（Tool-Disclosure Surface）的三个泄漏向量，通过缩小 `allow-set` 范围并修复桥接元工具在窄化策略下的存活问题，提升了生产环境的安全性。

## 4. 社区热点
以下 Issues 因评论较多或涉及核心功能争议而受到关注：

*   **[Issue #5702] GitHub issue search/create HTTP 403**
    *   **链接:** [nearai/ironclaw Issue #5702](https://github.com/nearai/ironclaw/issues/5702)
    *   **分析:** 用户报告 Agent 无法与 GitHub Issues 交互，尽管集成已配置。这反映了 API 令牌权限或 OAuth 作用域配置的常见痛点，是自动化工作流中的关键阻断点。
*   **[Issue #5747] Slack 配对后无法解绑**
    *   **链接:** [nearai/ironclaw Issue #5747](https://github.com/nearai/ironclaw/issues/5747)
    *   **分析:** 指出 UI 缺乏断开 Slack 配对的机制，且 `/pair` 命令存在短路行为。这表明即时通讯渠道管理的用户体验（UX）仍有改进空间，特别是对于需要频繁切换或调试的用户。
*   **[Issue #5787] Flaky test: slack_pairing_redeem**
    *   **链接:** [nearai/ironclaw Issue #5787](https://github.com/nearai/ironclaw/issues/5787)
    *   **分析:** 详细描述了测试失败的症状（过期代码被意外接受），直接关联到 PR #5789 的修复，显示了团队对测试稳定性的重视。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

*   **[P2] GitHub Integration 403 错误 (Issue #5702)**
    *   **状态:** Open
    *   **描述:** Agent 在执行 GitHub 搜索或创建 Issue 时返回 HTTP 403，导致功能完全失效。
*   **[P2] 批准通知消失 (Issue #5553)**
    *   **状态:** Open
    *   **描述:** 需要用户批准的自动化任务通知不可靠，可能闪烁后消失或不出现，影响工作流信任度。
*   **[P2] 长输出导致模型超时并掩盖根因 (Issue #5776)**
    *   **状态:** Open
    *   **描述:** 极端长提示词导致超时，但错误信息退化为通用的“无效结果”，阻碍了调试。
*   **[P2] 错误横幅位置不当 (Issue #5708)**
    *   **状态:** Open
    *   **描述:** 错误消息以浮动元素显示，而非嵌入聊天流，造成视觉混乱。
*   **[P3] 图片预览透明度异常 (Issue #5704)**
    *   **状态:** Open
    *   **描述:** 聊天活动期间图片变透明，干扰用户视觉反馈。
*   **[P3] Sidebar 显示原始 Thread ID (Issue #5706)**
    *   **状态:** Open
    *   **描述:** 在高负载下侧边栏显示技术性的 UUID 而非对话标题，影响可用性。

*注：Issue #5466 和 #5467 关于并行运行和内存存储分歧的问题已在近期通过相关修复关闭或解决。*

## 6. 功能请求与路线图信号
*   **Trace Commons 实例级注册 (PR #5280):**
    *   **链接:** [nearai/ironclaw PR #5280](https://github.com/nearai/ironclaw/pull/5280)
    *   **信号:** 正在推进实例范围的追踪注册和用户配置文件管理，这是增强可观测性和多租户支持的关键步骤。
*   **私有工具安装 (PR #5525 & #5499):**
    *   **链接:** [nearai/ironclaw PR #5525](https://github.com/nearai/ironclaw/pull/5525) | [nearai/ironclaw PR #5499](https://github.com/nearai/ironclaw/pull/5499)
    *   **信号:** 允许非管理员用户通过 ZIP 导入私有 WASM 工具，并支持环境变量提供的租户共享凭据。这表明路线图正朝着更灵活的企业级工具分发和安全性演进。
*   **设计系统令牌与 Playground (PR #5563):**
    *   **链接:** [nearai/ironclaw PR #5563](https://github.com/nearai/ironclaw/pull/5563)
    *   **信号:** 引入设计系统令牌和 `/playground`，旨在统一 UI 体验并为 AI 自主改进提供基础，反映了前端现代化的长期承诺。

## 7. 用户反馈摘要
*   **痛点:**
    *   **集成可靠性:** 用户对 GitHub 集成中的 403 错误感到沮丧，认为这破坏了自动化的核心价值。
    *   **UI/UX 不一致:** 多个 Issue (#5704, #5705, #5706, #5708) 指出 UI 在不同状态下（如忙碌、加载、报错）的表现不一致，特别是透明度变化、图标隐藏选项缺失和错误展示方式，影响了专业感。
    *   **调试困难:** 错误信息过于通用（如 #5776），使得排查复杂问题变得困难。
*   **满意点:**
    *   开发者对底层架构的重构（如 PR #5785, #5791）表现出高度关注，这些改进虽不直接面向最终用户，但对系统的长期可维护性和性能至关重要。

## 8. 待处理积压
*   **[Issue #5701] Activity Panel 工具详情隐藏**
    *   **链接:** [nearai/ironclaw Issue #5701](https://github.com/nearai/ironclaw/issues/5701)
    *   **建议:** 作为 P2 级别问题，建议在下一迭代中优先解决，以改善用户在 Agent 运行时的可观测性。
*   **[Issue #5419] 自动化重命名功能缺失**
    *   **链接:** [nearai/ironclaw Issue #5419](https://github.com/nearai/ironclaw/issues/5419)
    *   **建议:** 这是一个长期存在的 UX 缺陷，用户无法修改自动生成的过长或不准确的自动化名称，建议加入功能路线图。
*   **[Issue #3081] Portfolio 扩展误导按钮**
    *   **链接:** [nearai/ironclaw Issue #3081](https://github.com/nearai/ironclaw/issues/3081)
    *   **建议:** 较小的 UI 瑕疵，但容易混淆用户，建议快速修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-07-08
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 项目在 2026 年 7 月 7 日保持了高强度的开发节奏，共发布 1 个新版本（2026.7.7），合并/关闭 14 个 PR，并处理了 9 个 Issues。今日核心亮点在于**定时任务模块的重构**、**OpenClaw/NIM 安全漏洞的紧急修复**以及**多账号邮件技能的支持**。值得注意的是，安全研究员 YLChen-007 连续提交了 3 个严重级别的安全议题，反映出项目在本地代理和文件路径处理上存在潜在风险，需引起维护者高度重视。整体项目活跃度极高，技术债务清理与安全加固并重。

## 2. 版本发布
### LobsterAI 2026.7.7
*   **发布时间：** 2026-07-07
*   **关键更新：**
    *   **定时任务重构 (feat/scheduledTask):** 对任务列表卡片进行了全面重新设计，新增状态芯片、开关控件、搜索功能及乐观 UI 反馈机制，显著提升了用户体验。（PR #2273）
    *   **xAI 支持 (feat/providers):** 新增 xAI (Grok) 的 OAuth 登录支持，扩展了模型提供商生态。（PR #2273 相关部分）
    *   **其他合并内容：** 包括 Cowork 路由稳定化、邮件技能多账号支持、SQLite 性能优化等。
*   **迁移注意：** 无重大破坏性变更通知，但建议用户备份 `USER.md` 配置以防 Agent 联动逻辑调整带来意外影响。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在功能增强、性能优化和安全修复三个维度：

*   **功能增强：**
    *   **[Skills] 邮件多账号支持 (PR #2275):** `liuzhq1986` 实现了内置 `imap-smtp-email` 技能的多账号管理，支持设置默认账号、连接测试及保留 `.env` 兼容性。
    *   **[Agents] 委托子代理协作 (PR #2285):** `btc69m979y-dotcom` 引入了 Agent 间的委托设置，允许配置子代理白名单，并将委托运行实例化为 Cowork 子会话，增强了复杂任务的编排能力。
    *   **[Cowork] 路由与 UI 优化 (PR #2292, #2268):** 稳定了 Cowork 的后续路由逻辑，恢复紧凑菜单宽度，提升交互流畅度。

*   **性能与稳定性：**
    *   **[SQLite] 防抖批量写入 (PR #1410):** `liulingfeng` 解决了高频流式响应下的磁盘 I/O 阻塞问题，通过防抖机制减少同步落盘次数，显著提升主进程响应速度。
    *   **[SQLite] 迁移事务修复 (PR #1415):** 修正了迁移完成标志位置，确保仅在事务成功提交后标记，防止异常回滚后跳过后续迁移。
    *   **[Analytics] 数据上报修正 (PR #2245):** 修复了技能、IM 设置及定时任务周几解析等边缘情况下的使用数据分析错误。

*   **安全修复：**
    *   **[OpenClaw] 请求体大小限制 (PR #1407):** 针对本地 Token 代理无限制接收大数据导致 OOM 的风险，增加了 10MB 的请求体上限保护。
    *   **[MCP Bridge] Promise 处理 (PR #1408):** 修复了 `handleRequest` 中忽略 Promise 返回值导致的未捕获异常和连接挂起问题。
    *   **[Cron Job] 并发安全 (PR #1420):** 解决了 `pollOnce` 在高延迟下的重入并发问题及 `stopPolling` 的幽灵事件，避免事件风暴。

## 4. 社区热点
*   **安全漏洞集中爆发 (Issues #2288, #2287, #2286):**
    *   **现象：** 安全研究员 `YLChen-007` 在同一天提交了三个严重的安全议题，分别涉及 HTML 预览服务器的符号链接越权、NIM 媒体流的文件外泄风险以及本地 Token 代理的未认证重放攻击。
    *   **分析：** 这并非孤立的 Bug，而是架构层面的安全隐患。特别是“未认证本地令牌代理”允许任意本地进程重放 API 调用，风险等级极高。虽然 PR #1407 和 #1408 修复了部分相关问题，但 #2286 描述的架构缺陷可能需要更深层的代码审查。
    *   **链接：**
        *   [Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288)
        *   [Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287)
        *   [Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286)

*   **Agent “关于你” 联动问题 (Issue #2293):**
    *   **现象：** 用户 `yepcn` 报告修改一个 Agent 的 `USER.md` 会影响其他所有 Agent，导致个性化配置失效。
    *   **分析：** 这可能是一个配置隔离性或文件监听机制的 Bug，或者是多 Agent 架构下共享状态管理的预期行为争议。鉴于 PR #2285 正在引入子代理协作，此问题可能与新的 Agent 隔离机制有关。
    *   **链接：** [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)

## 5. Bug 与稳定性
今日关闭的 Issues 多为旧有 Bug 的遗留处理（标记为 `[stale]` 后关闭），但暴露出的 UI/UX 问题值得注意：

*   **概览页 UI/数据异常 (Issues #1411, #1414, #1416):**
    *   **#1411:** “使用概览”时间筛选器点击无响应。
    *   **#1414:** “总会话数”始终显示为 0，与 API 调用数数据矛盾。
    *   **#1416:** 切换英文后，额度数值与标签文本重叠，布局未自适应。
    *   **状态：** 这些 Issue 均被标记为 `[CLOSED] [stale]`，意味着它们可能因长时间无活动而被自动关闭，或者已在后台版本中修复但未明确关联 PR。**建议核实这些 UI 和统计逻辑问题是否真正解决，还是仅被忽略。**
    *   **链接：** [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411), [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414), [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416)

*   **定时任务历史记录缺失 (Issue #1409):**
    *   **现象：** 跨天触发的定时任务未生成历史记录。
    *   **状态：** 同样被标记为 `[CLOSED] [stale]`。考虑到今日发布了重构后的定时任务 UI (PR #2273)，此 Bug 可能在重构中被修复或绕过，但需确认数据持久层逻辑是否正确。
    *   **链接：** [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409)

*   **NIM 群组类型枚举错误 (PR #1419):**
    *   **修复：** `choyuenga` 修复了 `V2NIMTeamType` 枚举映射错误，解决了普通群和超级大群名称获取失败的问题。这是一个关键的功能修复。
    *   **链接：** [PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419)

## 6. 功能请求与路线图信号
*   **多 Agent 独立配置 (Signal from Issue #2293):** 用户强烈期望不同 Agent 拥有独立的 `USER.md` 上下文，而非全局同步。这与 PR #2285 引入的“委托子代理”功能相呼应，表明路线图正朝着更细粒度的 Agent 隔离和控制方向演进。
*   **Email 技能增强 (Implemented in PR #2275):** 用户对多账号邮件管理的需求已通过 PR #2275 得到满足，显示团队正在积极响应用户对生产力工具集成的需求。
*   **Scheduled Task UI/UX (Implemented in PR #2273, #2290):** 定时任务不仅是功能实现，更强调 UI 的可操作性（搜索、状态、乐观更新），表明团队致力于提升自动化功能的易用性。

## 7. 用户反馈摘要
*   **痛点：**
    *   **统计盲区：** 用户发现概览页的“总会话数”与 API 调用数不符，且时间筛选器失效，导致无法准确追踪使用习惯（Issues #1411, #1414）。
    *   **国际化体验差：** 中英文切换时的布局错乱（Issue #1416）影响了非中文用户的体验。
    *   **Agent 配置混乱：** 多个 Agent 共享 `USER.md` 导致个性化指令失效，用户感到困惑（Issue #2293）。
*   **满意点：**
    *   **安全响应：** 尽管发现了严重漏洞，但社区对安全研究员的报告持开放态度，且已有 PR 修复了部分底层安全问题（如 PR #1407, #1408）。
    *   **功能迭代快：** 邮件多账号支持和定时任务 UI 重构展示了团队快速交付价值的能力。

## 8. 待处理积压
*   **高优先级安全议题 (Issues #2286, #2287, #2288):**
    *   目前已有 PR #1407 和 #1408 修复了部分相关代码，但 Issue #2286 描述的“未认证本地令牌代理”是一个架构级风险，可能需要专门的 PR 来彻底解决（例如增加认证中间件或限制绑定范围）。建议维护者优先回应 `YLChen-007` 的报告。
*   **Stale 关闭的 Bug 验证 (Issues #1409, #1411, #1414, #1416):**
    *   这些 UI 和数据统计 Bug 被标记为 Stale 关闭，极有可能是因为缺乏明确的复现步骤或优先级较低而被搁置。建议在下一个版本发布前，由 QA 团队重新验证这些场景，确保新发布的 UI 重构没有引入新的回归问题，并确认旧 Bug 是否真正解决。
*   **Electron 依赖升级 (PR #1277):**
    *   Dependabot 提出的 Electron 40.2.1 -> 43.0.0 升级仍处于 OPEN 状态。这是一个重要的底层依赖更新，可能带来性能提升和安全补丁，但也可能引入兼容性问题，建议尽快合并或关闭并说明理由。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyAGI 项目动态日报
**日期**：2026-07-08
**数据来源**：GitHub (TinyClaw / TinyAGI)

## 1. 今日速览
今日项目处于**高危安全预警状态**。过去24小时内，共新增 9 条 Issue，全部标记为 `[Security]` 且均为 `[OPEN]` 状态，未发现任何已合并的 PR 或新版本发布。所有安全问题均由同一位作者（YLChen-007）提交，集中暴露了 TinyAGI 控制平面缺乏身份验证的核心架构缺陷。项目当前活跃度体现在安全审计层面，而非功能迭代，整体代码库面临严峻的信任边界风险。

## 2. 版本发布
*   **无新版本发布**。
*   鉴于今日集中爆发大量严重安全漏洞，建议维护团队暂停常规功能发布，优先进行安全补丁审核与部署。

## 3. 项目进展
*   **代码合并情况**：今日无 PR 被合并。
*   **推进状况**：由于所有新报告均指向底层架构的安全隐患，而非具体功能开发，项目今日未体现正向的功能推进。相反，这些 Issue 揭示了当前版本在“零信任”架构设计上的缺失，亟需重构 API 网关的认证中间件。

## 4. 社区热点
今日社区焦点完全集中在由 **YLChen-007** 提交的系列安全审计报告中。以下是高优先级 Issue 列表：

*   **[CRITICAL] Issue #294**: [Security] TinyAGI unauthenticated control-plane routes allow system prompt overwrite and daemon restart
    *   *链接*: [Issue #294](https://github.com/TinyAGI/tinyagi/issues/294)
    *   *分析*: 攻击者可覆盖系统提示词并重启守护进程，直接威胁 AI 代理的行为逻辑稳定性。
*   **[CRITICAL] Issue #293**: [Security] TinyAGI unauthenticated agent ID path traversal escapes the configured workspace root
    *   *链接*: [Issue #293](https://github.com/TinyAGI/tinyagi/issues/293)
    *   *分析*: 路径遍历漏洞允许越权访问工作区外的文件，可能导致敏感配置泄露。
*   **[HIGH] Issue #291**: [Security] TinyAGI Anthropic Adapter Disables Claude Dangerous-Tool Confirmation for Unauthenticated `POST /api/message` Requests
    *   *链接*: [Issue #291](https://github.com/TinyAGI/tinyagi/issues/291)
    *   *分析*: 未授权调用绕过了 Claude 的危险工具确认机制，可能导致不可控的外部操作执行。
*   **[HIGH] Issue #290**: [Security] TinyAGI Terminal Escape Injection via `POST /api/message` Allows Operator Log Spoofing
    *   *链接*: [Issue #290](https://github.com/TinyAGI/tinyagi/issues/290)
    *   *分析*: 终端注入可导致日志欺骗，干扰运维监控和审计追踪。
*   **[HIGH] Issue #289**: [Security] TinyAGI allows unauthenticated API callers to exfiltrate arbitrary local files via outbound channel attachments
    *   *链接*: [Issue #289](https://github.com/TinyAGI/tinyagi/issues/289)
    *   *分析*: 数据外泄风险，攻击者可通过附件通道读取任意本地文件。
*   **[MEDIUM] Issue #288**: [Security] TinyAGI exposes an unauthenticated local control plane that leaks live events and allows persistent settings modification
    *   *链接*: [Issue #288](https://github.com/TinyAGI/tinyagi/issues/288)
    *   *分析*: 本地控制平面完全开放，导致实时事件泄露及设置被篡改。
*   **[MEDIUM] Issue #287**: [Security] Unauthenticated Pairing Management API Allows Arbitrary Approval of Pending Channel Senders
    *   *链接*: [Issue #287](https://github.com/TinyAGI/tinyagi/issues/287)
    *   *分析*: 配对管理流程缺乏验证，允许恶意接入通道。
*   **[MEDIUM] Issue #292**: [Security] TinyAGI unauthenticated administrative API allows persistent settings and agent prompt modification
    *   *链接*: [Issue #292](https://github.com/TinyAGI/tinyagi/issues/292)
    *   *分析*: 管理员 API 无鉴权，持久化设置可被任意修改。
*   **[MEDIUM] Issue #286**: [Security] TinyAGI Unauthenticated Local Control API Allows Persistent Settings Mutation, Agent Prompt Overwrite, and Event Stream Access
    *   *链接*: [Issue #286](https://github.com/TinyAGI/tinyagi/issues/286)
    *   *分析*: 综合性的本地控制 API 安全缺失。

## 5. Bug 与稳定性
*   **严重性评级**：**极高 (Critical)**
*   **主要问题**：所有 9 个 Issue 均属于**安全类 Bug**，核心问题是“未认证的控制平面接口”。
    *   **影响范围**：涉及系统提示词注入、文件路径遍历、终端逃逸、数据外泄、权限绕过等。
    *   **稳定性风险**：虽然未直接报告运行时崩溃，但通过 `daemon restart` (#294) 和 `prompt overwrite` (#292, #286)，系统的行为一致性已无法保证。
    *   **Fix 状态**：目前尚无关联的 Fix PR，所有 Issue 均为 Open 状态，评论数为 0。

## 6. 功能请求与路线图信号
*   **当前信号**：暂无新功能需求。
*   **隐含需求**：这一系列 Issue 强烈暗示项目路线图必须优先纳入 **“API 安全加固”** 模块。
*   **建议方向**：
    1.  实施基于 Token 或 mTLS 的身份认证机制。
    2.  对 `/api/control-plane` 相关路由进行严格的 RBAC（基于角色的访问控制）改造。
    3.  引入输入验证框架，防止路径遍历和注入攻击。

## 7. 用户反馈摘要
*   **反馈来源**：主要由安全研究员/审计者 YLChen-007 提供。
*   **痛点提炼**：
    *   **信任边界缺失**：用户指出 TinyAGI 错误地假设本地环境是安全的，从而省略了必要的认证检查，这在多租户或容器化环境中是致命缺陷。
    *   **默认配置危险**：默认的 Anthropic 适配器配置 (`--dangerously-skip-permissions`) 在未认证请求下被滥用，显示出默认安全策略过于宽松。
    *   **缺乏最小权限原则**：多个接口允许未经授权的持久化设置修改，违背了最小权限原则。

## 8. 待处理积压
*   **紧急待办**：
    *   所有 9 个 Security Issue (#286 - #294) 均需立即响应。
    *   **维护者行动建议**：
        1.  确认漏洞复现步骤。
        2.  评估影响范围，决定是否发布紧急安全公告或回滚版本。
        3.  指派开发人员修复认证中间件逻辑。
        4.  由于评论数为 0，建议主动联系报告者以获取更多 PoC（概念验证）细节，加速修复进程。

---
**分析师备注**：今日项目健康度指标因大规模安全漏洞披露而显著下降。建议将“恢复信任边界”作为最高优先级任务。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期：** 2026-07-08
**数据来源：** GitHub agentscope-ai/QwenPaw

## 1. 今日速览
今日 CoPaw 项目保持高频迭代状态，共处理 16 个 Issues 和 38 个 Pull Requests。核心亮点在于 **v2.0.0-beta.3** 的发布及针对 Windows 沙箱安全漏洞的快速响应。前端渲染稳定性（大文件崩溃、JSON 解析异常）和后端工具调用的安全性（`find -delete` 绕过检测）是今日讨论的焦点。社区活跃度极高，特别是关于定时任务交互优化和 Windows GUI 自动化的新功能提案，显示出用户对“本地化”和“可控性”需求的显著增长。

## 2. 版本发布
### **v2.0.0-beta.3**
*   **发布时间：** 2026-07-07
*   **关键变更：**
    *   **修复 (Fix)：** 解决了 macOS Bash 3.2 环境下 `extra_flags` 为空时的 CI 构建失败问题 (#5743)。
    *   **特性 (Feat)：** 增强了认证模块的多维速率限制保护，提升 API 安全性 (#5738)。
    *   **其他：** 包含一系列内部优化和依赖更新。
*   **迁移注意：** 该版本为 Beta 版，建议用户在生产环境使用前仔细验证多维速率限制策略对现有业务逻辑的影响。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在基础设施加固和新功能探索上：
*   **安全与测试加固：**
    *   **#5844** 引入了 `real-behavior-proof` 门禁，强制外部贡献者提供真实问题描述和验证证据，旨在减少低质量 PR 和垃圾邮件 (#5844)。
    *   **#5813** 提交了 43 个单元测试，覆盖了安装、运行时工具调用、LLM 超时及 `rm` 保护绕过等真实生产问题，显著提升了回归测试覆盖率 (#5813)。
*   **桌面端体验提升：**
    *   **#5836** 实现了聊天输出中本地文件/目录路径的自动检测与点击跳转文件管理器功能，极大改善了开发者在 Desktop 端的工作流 (#5836)。
    *   **#5814** 为 ACP Desktop 捆绑了 Node.js 运行时，消除了用户手动安装 Node 的门槛 (#5814)。
*   **功能扩展：**
    *   **#5187** 推进了 Windows 桌面 GUI 自动化能力，通过 UIA + Tauri Control Mode 允许 Agent 直接操作宿主桌面 (#5187)。
    *   **#4693** 重构了插件通道注册机制，从基于目录的方式转向插件驱动的 Schema 配置 UI，提升了可扩展性 (#4693)。

## 4. 社区热点
*   **[Bug] 控制台渲染崩溃 (#5401) & 大文件报错 (#5479)**
    *   **热度：** 高评论数 (15+ 和 6+)。
    *   **分析：** 用户普遍反映在处理包含大量 Tool-Use 历史或大 JSON 文件 (>500KB) 的会话时，前端会白屏或崩溃。这暴露了前端在长上下文渲染上的性能瓶颈和数据序列化问题，是当前 v1.x 版本中最严重的用户体验阻碍。
*   **[Feature] 定时任务弹窗开关 (#5797)**
    *   **热度：** 高关注度。
    *   **分析：** 用户强烈反对“一刀切”关闭弹窗通知的策略，主张将控制权交还给用户。这反映了不同工作流场景下用户对通知干扰度的差异化需求。
*   **[Bug] Windows 沙箱 ACE 污染 (#5829)**
    *   **热度：** 紧急。
    *   **分析：** 新发现的严重安全/稳定性问题，Windows AppContainer 沙箱的 ACL 继承标志导致了 Electron 应用 GPU 进程崩溃。该问题已引发 [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) 快速修复，显示了团队对 Windows 平台特定问题的响应速度。

## 5. Bug 与稳定性
按严重程度排列的今日报告 Bug：

1.  **高危：Windows AppContainer 沙箱导致应用崩溃 (#5829)**
    *   **描述：** 启用沙箱后，错误的 ACE 继承导致 Hermes Desktop/Electron GPU 崩溃。
    *   **状态：** 已有 Fix PR **#5843** 提交，正在检测 `find -delete` 等危险命令的同时修复权限问题。
2.  **高：前端渲染崩溃 (#5401, #5479)**
    *   **描述：** 长 Tool-Use 历史或大文件导致前端白屏/报错。
    *   **状态：** Open。需优化前端数据分片加载及 `type: "data"` 块的渲染逻辑。
3.  **中：上下文压缩 JSON Schema 超限崩溃 (#5789)**
    *   **描述：** 模型输出超过 `maxLength: 200` 导致 `jsonschema.validate()` 失败。
    *   **状态：** Open。需增强容错机制或动态调整 Schema 限制。
4.  **中：`find -delete` 绕过文件守卫 (#5842)**
    *   **描述：** 安全补丁遗漏，允许通过 `find` 命令删除工作区外文件。
    *   **状态：** 已有 Fix PR **#5843**。
5.  **低：`grep_search` 管道符转义错误 (#5834)**
    *   **描述：** 多关键词搜索时 `|` 被转义导致无结果。
    *   **状态：** 已有 Fix PR **#5834**。

## 6. 功能请求与路线图信号
*   **Granular Media Rejects (#5821)：** 用户请求按媒体类型（图片/视频）精细控制拒绝策略，而非全局开关。这符合企业级部署中对带宽和隐私控制的精细化需求。
*   **Agent Avatar 配置 (#5826)：** 支持在 Agent Profile 中设置头像，提升多 Agent 场景下的辨识度。已有 PR **#5826** 实现。
*   **ReMe 记忆搜索 Rerank (#5669)：** 引入 `qwen3-rerank` 对混合搜索结果进行重排序，以提升长期记忆的检索精度。这是提升 Agent “记忆”可靠性的关键一步。
*   **Matrix 流式模式 (#5585)：** 模仿 Discord 在 Matrix 协议中增加流式回复体验，改善长文本生成的感知延迟。

## 7. 用户反馈摘要
*   **痛点：**
    *   **前端脆弱性：** 多次提到“白屏”、“意外错误”，用户希望即使是大会话也能渐进式加载，而不是直接崩溃。
    *   **通知骚扰：** 定时任务弹窗被部分用户视为“烦人”，但另一部分用户（如需要起身提醒的场景）又依赖它。用户希望拥有细粒度的控制权。
    *   **Windows 兼容性：** 沙箱权限管理不当导致的崩溃是 Windows 用户的主要障碍。
*   **满意点：**
    *   **本地集成：** 自动识别本地路径并打开资源管理器 (#5836) 受到了本地开发者的欢迎，简化了调试流程。
    *   **安全性增强：** 多维速率限制和更严格的 PR 审查机制让用户感到项目更加健壮和安全。

## 8. 待处理积压
*   **#5401 & #5479 (前端渲染性能)：** 这两个 Issue 自 6 月下旬开放，至今未合并修复 PR。作为影响核心用户体验的阻塞性问题，建议优先分配资源进行前端架构层面的优化（如虚拟列表、分片渲染）。
*   **#5835 (/stop 命令跨用户隔离缺失)：** 在钉钉等多用户 DM 场景下，Session ID 冲突导致停止命令误杀其他用户任务。这是一个多租户环境下的关键逻辑缺陷，需尽快修复。
*   **#5759 (计划模式反复读文件)：** 智能体在执行计划时出现冗余的文件读取操作，浪费 Token 且降低效率。需检查 Plan Mode 的上下文缓存逻辑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-08
**数据来源：** GitHub (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-07-08 保持高活跃度，过去24小时内收到 23 条 Issue 更新和 50 条 PR 更新。开发重心集中在 **MCP 工具集成安全性**、**运行时内存优化** 以及 **Web Dashboard 用户体验修复**。虽然无新版本发布，但多个关键的安全漏洞（如 `excluded_tools` 绕过）和性能瓶颈（RSS 内存泄漏）已出现明确的修复 PR。社区对配置管理的易用性和文档准确性提出了较多反馈，维护团队正在快速响应。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要进展体现在对现有功能的加固和底层稳定性的提升：

*   **MCP 工具过滤修复 (High Priority):** 针对 Issue #6699 和 #8787，开发者 `IftekharUddin` 提交了 PR #8819 和 #8817。前者修复了 `tool_filter_groups` 对真实 MCP 工具无效的问题，后者通过 `Arc` 共享工具 Schema 解决了每轮迭代中深拷贝导致的内存增长问题。这标志着 MCP 集成的安全性和效率得到了实质性改善。
*   **日志配置热重载:** PR #8816 实现了 `zeroclaw-log` 持久化和轮换配置的动态重载，无需重启守护进程即可生效，提升了运维体验（关联 Issue #8314）。
*   **依赖安全更新:** PR #8818 升级了 `crossbeam-epoch` 以解决 RUSTSEC-2026-0204 漏洞，确保 CI 流水线的安全合规性。
*   **渠道配置改进:** PR #8813, #8820, #8822 由 `yaotukeji` 提交，增强了 Channels 配置的可见性，添加了 "Global Settings" 入口，修复了 Telegram 绑定中的配置属性名错误。

## 4. 社区热点
以下 Issues 和 PRs 引发了较高关注，反映了用户对核心工作流和安全性的关切：

*   **[Bug] Skill 注册工具绕过安全策略 (Issue #8787 / PR #8788):**
    *   **摘要:** 用户 `Nillth` 指出技能注册的工具有时绕过了 `excluded_tools` 黑名单。
    *   **进展:** `Nillth` 已提交 PR #8788 进行修复。这是当前最受关注的安全类 Issue 之一，因为它直接涉及 Agent 的行为边界。
    *   **链接:** [Issue #8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787), [PR #8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788)

*   **[RFC] 高风险 Shell 命令确认机制 (Issue #7155):**
    *   **摘要:** 提议引入类似 Claude Code 的命令模式策略（允许/询问/拒绝），为高风险命令增加中间层确认。
    *   **意义:** 反映了用户对 Agent 执行系统级操作时的可控性需求，旨在平衡自动化效率与安全性。
    *   **链接:** [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)

*   **[Bug] MCP 工具 Schema 克隆导致内存泄漏 (Issue #8642 / PR #8817):**
    *   **摘要:** 报告了连续 OOM 问题，根源在于 Agent 循环中 MCP 工具 Schema 的重复深拷贝。
    *   **进展:** PR #8817 提供了基于 `Arc` 的解决方案，显著降低内存占用。
    *   **链接:** [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642), [PR #8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)

*   **[UI] Web Dashboard 侧边栏与聊天体验 (Issues #8791, #8792, #8803):**
    *   **摘要:** 用户反馈左侧导航栏宽度异常、缺少 Skills 入口，以及希望折叠已完成轮次的中间步骤以提升可读性。
    *   **意义:** 显示了用户对前端交互细节的高敏感度，这些 UX 改进有助于降低新用户的学习曲线。
    *   **链接:** [Issue #8791](https://github.com/zeroclaw-labs/zeroclaw/issues/8791), [Issue #8792](https://github.com/zeroclaw-labs/zeroclaw/issues/8792), [Issue #8803](https://github.com/zeroclaw-labs/zeroclaw/issues/8803)

## 5. Bug 与稳定性
今日报告了多个影响稳定性和安全性的 Bug，按严重程度排序：

| 严重等级 | 问题描述 | 关联 Issue | 修复状态 |
| :--- | :--- | :--- | :--- |
| **P1 (High Risk)** | **Skill 工具绕过安全策略**: `register_skill_tools` 未检查 `excluded_tools`，导致被禁用的工具仍对模型可见。 | [#8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787) | ✅ **有 PR** (#8788) |
| **P1 (High Risk)** | **MCP 工具过滤失效**: `tool_filter_groups` 对真实 MCP 工具无作用，且存在前缀匹配 Bug。 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | ✅ **有 PR** (#8819) |
| **P1 (High Risk)** | **内存泄漏/OOM**: MCP Tool Schema 克隆导致 Agent Loop 中 RSS 无界增长。 | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | ✅ **有 PR** (#8817) |
| **S2 (Degraded)** | **Windows 端口僵尸**: Windows 下终止进程后端口未释放，导致新守护进程启动失败。 | [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) | ❌ 暂无明确 Fix PR |
| **S2 (Degraded)** | **SOP 引擎状态守卫缺失**: `advance_step` 缺乏运行状态守卫，可能绕过审批门控。 | [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | ❌ 暂无明确 Fix PR |
| **S3 (Minor)** | **文档错误**: Telegram 绑定指令引用了未知的配置属性。 | [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) | ✅ **有 PR** (#8823) |
| **S3 (Minor)** | **UI 滚动条与布局**: 左侧边栏宽度计算错误导致水平滚动条出现。 | [#8791](https://github.com/zeroclaw-labs/zeroclaw/issues/8791) | ❌ 暂无明确 Fix PR |

**注意:** Windows 端口泄漏和 SOP 状态守卫问题是当前潜在的生产环境风险点，建议优先审查。

## 6. 功能请求与路线图信号
*   **Skill 创建标准化 (Issue #8815):** 用户希望 Agent 能直接保存 Skill 为 Bundle 格式，而非散乱的 Markdown 文件。此 Issue 已关闭，可能已被合并进相关的 Skill 管理重构中，或被视为低优先级/已解决。
*   **WebSocket 协议统一 (Issue #8798):** RFC 提议将 `/ws/chat` 和 `/acp` 合并为单一 Wire Protocol。这表明项目正在规划简化网关架构，减少维护并行协议的复杂度。
*   **预构建资产完善 (Issue #7952):** 请求发布包含完整 Channel 的预构建二进制包。这反映了用户对于“开箱即用”体验的需求，可能影响 v0.8.x 系列的发布策略。
*   **可观测性增强 (Issue #8314, #8073):** 日志热重载和 v0.8.3 追踪器显示，可观测性（Observability）是近期路线图的重点，旨在提升生产环境的调试能力。

## 7. 用户反馈摘要
*   **痛点:**
    *   **配置复杂性:** 用户抱怨 Telegram 等渠道的配置指引不清晰，属性名大小写或命名风格不一致（Issue #8797, #8810）。
    *   **UI/UX 不一致:** Web Dashboard 的左侧导航栏缺少关键入口（Skills），且视觉布局存在瑕疵（Issue #8792, #8791）。
    *   **中断体验差:** 停止 Agent 运行会导致上下文丢失，工具调用和思考过程不被记录，严重影响调试和审计（Issue #8794）。
*   **满意点:**
    *   **安全性意识:** 社区积极参与安全问题的报告（如 #8787, #8678），显示出用户对 Agent 行为控制的重视。
    *   **性能优化响应:** 对于内存泄漏和性能问题的反馈能得到迅速的技术回应（PR #8817, #8819），提升了用户信心。

## 8. 待处理积压
以下 Issue 虽未被立即关闭，但尚未看到直接的 Fix PR，需维护者关注：

1.  **Windows 端口僵尸问题 (Issue #8800):** 影响 Windows 用户的日常开发和重启流程，属于平台特异性 Bug。
2.  **SOP 引擎状态守卫 (Issue #8678):** 涉及工作流执行的核心完整性，若被利用可能导致审批机制失效。
3.  **Web Dashboard 侧边栏布局 (Issue #8791) & 导航缺失 (Issue #8792):** 虽然严重等级较低，但直接影响最终用户的直观体验，建议在前端重构中一并解决。
4.  **RustSec 审计漂移 (Issue #8519):** 长期存在的 CI 安全问题，`cargo-audit` 和 `cargo-deny` 的配置不同步，可能导致安全漏洞被忽略。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*