# OpenClaw 生态日报 2026-07-24

> Issues: 321 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-24 01:46 UTC

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
**日期：** 2026-07-24
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
OpenClaw 项目在 2026-07-24 保持极高的活跃度，过去 24 小时内处理了 **321 个 Issues** 和 **500 个 PRs**，显示出社区贡献与维护者响应的高强度。尽管没有新版本发布，但大量的 PR 合并与 Issue 关闭表明团队正在集中清理积压问题，特别是针对近期版本（2026.7.x）引入的回归缺陷进行紧急修复。整体项目健康度良好，但需警惕多起 P0/P1 级别的会话状态丢失和网关启动故障，这可能影响生产环境的稳定性。

## 2. 版本发布
**无新版本发布。**
当前主要关注点在于修复 2026.7.1 及后续 Beta 版本中暴露的严重回归问题。

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在基础设施、渠道兼容性和核心稳定性上：

*   **iOS 应用修复 (#113187)**: 解决了 iOS 发布截图测试中的停滞问题，提升了自动化测试效率。
*   **MiniMax 提供商支持 (#111696)**: 修复了 MiniMax coding-plan API 响应解析问题，增强了第三方 LLM 提供商的兼容性。
*   **依赖项迁移 (#112963)**: 完成了保守的依赖项更新，迁移了主要合同版本，为后续功能开发铺平道路。
*   **Matrix 渠道增强 (#113199)**: 实现了 Matrix 原生 HTML 元素（如剧透、下划线、表格）的渲染，提升了 Rich Text 支持。
*   **WhatsApp 反应恢复 (#113178)**: 修复了 WhatsApp 对话中代理选择反应被拒绝的问题，改善了用户体验。
*   **Cron 任务清理 (#113198)**: 修复了 `cron.remove` 命令未能完全停止后台作业的问题，确保了资源释放。

## 4. 社区热点
以下是评论数最多、关注度最高的 Issue 和 PR：

*   **[Bug] Subagent completion silently lost (#44925)**: [链接](https://github.com/openclaw/openclaw/issues/44925)
    *   **热度**: 22 条评论, 🦞 Diamond Lobster (高评级)
    *   **分析**: 用户报告子代理完成结果静默丢失，涉及超时重试和通知机制缺失。这是长期存在的痛点，直接影响多代理工作流的可靠性。
*   **[Bug] Second message in a session fails with "reply session initialization conflicted" (#102020)**: [链接](https://github.com/openclaw/openclaw/issues/102020)
    *   **热度**: 15 条评论
    *   **分析**: 跨渠道会话初始化冲突，导致第二条消息失败。这反映了会话状态管理在多通道场景下的复杂性。
*   **[Bug] Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads (#94228)**: [链接](https://github.com/openclaw/openclaw/issues/94228)
    *   **热度**: 14 条评论, 🐚 Platinum Hermit (高评级)
    *   **分析**: Anthropic 原生路径下，历史思考块重放导致工具调用线程永久损坏。这是特定提供商路径下的严重功能性障碍。
*   **[Feature] Everything is a cron — unify heartbeat, watchers, and scheduled automation (#110950)**: [链接](https://github.com/openclaw/openclaw/issues/110950)
    *   **热度**: 9 条评论
    *   **分析**: 提议统一自动化概念，将心跳、观察者和定时任务整合为 Cron 模型。这代表了社区对简化配置和增强可预测性的强烈需求。
*   **[Bug] update to openclaw 2026.7.1: gateway fails to start w/ error (#108435)**: [链接](https://github.com/openclaw/openclaw/issues/108435)
    *   **热度**: 10 条评论, P0 级别
    *   **分析**: 升级到 2026.7.1 后网关无法启动。这是一个严重的回归问题，直接阻止用户使用最新版本。

## 5. Bug 与稳定性
今日报告的 Bug 和稳定性问题按严重程度排列：

*   **P0 - Gateway 启动失败 (#108435)**: 升级到 2026.7.1 后网关无法启动。[Fix PR: #113198 (部分相关)](https://github.com/openclaw/openclaw/pull/113198) 或需单独修复。
*   **P0 - Cron 存储迁移导致频道错误 (#90378)**: 从 5.28 升级至 6.1 时，Cron 存储静默迁移到 SQLite 但未保留配置，导致新作业默认设置引发频道错误。
*   **P1 - 子代理完成结果静默丢失 (#44925)**: 涉及超时、重试和通知机制的多个失败模式。
*   **P1 - Anthropic 路径下工具调用线程损坏 (#94228)**: 长生命周期会话因 `Invalid signature` 错误而永久失效。
*   **P1 - Telegram DM 回复回退 (#111519)**: 2026.7.2-beta.3 中，Telegram 私聊回复在源回复所有权清理后回退，导致消息传递延迟或丢失。
*   **P1 - MCP Loopback 传输重连失败 (#98435)**: 网关重启后，MCP 循环传输未自动重新握手，导致工具调用失败。
*   **P1 - 所有 LLM API 调用同时超时 (#43374)**: 多代理并发运行时，内部瓶颈导致所有 API 调用同时超时。
*   **P2 - 会话上下文膨胀 (#67419)**: Bootstrap 文件每轮重复注入，浪费 20-30% Token。
*   **P2 - 180s 压缩超时导致崩溃循环 (#92043)**: 对于需要长时间压缩的安装，超时导致每轮都失败。

## 6. 功能请求与路线图信号
*   **统一自动化原语 (#110950)**: 提议将所有自动化（心跳、观察者、定时任务）统一为 Cron 模型。这可能与未来的版本路线图中的核心架构重构有关。
*   **技能权限清单标准 (#12219)**: 请求标准化的 `skill.yaml` 来声明技能所需的权限，以提高安全性和用户信任。
*   **预压缩代理通知 (#38520)**: 建议在上下文压缩前通知代理，并提供结构化交接窗口，以保护状态ful工作流。
*   **全局 Dry-Run 模式 (#41418)**: 请求添加 `--dry-run` 标志以拦截工具执行，用于调试和安全预览。
*   **WhatsApp 呼叫事件订阅 (#7540)**: 请求通过 Baileys 订阅 WhatsApp 语音/视频呼叫事件，以增强消息渠道的功能性。

## 7. 用户反馈摘要
*   **痛点**: 用户普遍抱怨会话状态管理的不稳定性，特别是跨渠道消息丢失、子代理结果静默失败以及网关重启后的连接问题。这些“静默失败”使得调试变得极其困难。
*   **满意度**: 用户对 Matrix 渠道的 Rich Text 支持和 iOS 应用的改进表示认可。社区对维护者积极回应大量 Issue 和 PR 表示满意，尽管部分问题仍未解决。
*   **使用场景**: 多代理协作、长上下文会话管理、以及与企业级渠道（如 Telegram Forum Mode, Feishu, Discord）的深度集成是主要使用场景。用户对 Token 效率和上下文窗口利用率非常敏感。

## 8. 待处理积压
*   **#44925 [Bug]: Subagent completion silently lost**: 长期未解决的高优先级问题，严重影响多代理工作流的可靠性。
*   **#94228 [Bug]: Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads**: Anthropic 专用路径下的严重功能性阻塞。
*   **#108435 [Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error**: 阻碍用户升级的严重回归问题，需优先排查。
*   **#90378 [Bug]: Upgrading from 5.28 → 6.1: cron store migrated to SQLite silently...**: 数据迁移过程中的静默失败，可能导致数据丢失或配置错误。
*   **#43374 [Bug]: All LLM API calls time out simultaneously despite APIs being reachable**: 多代理并发下的内部瓶颈问题，影响生产环境稳定性。

**建议**: 维护者应重点关注 P0 和 P1 级别的回归问题，特别是网关启动失败和会话状态丢失问题，这些是当前影响用户信任和系统稳定性的最大风险点。

---

## 横向生态对比

### 2026-07-24 AI 智能体开源生态横向对比分析报告

#### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“功能可用”向“生产级稳定”转型的关键阵痛期**。OpenClaw 等头部项目正集中清理 v2.x/v1.0 版本引入的回归缺陷，表明行业重心已从单纯的功能堆砌转向底层架构的健壮性与安全性加固。与此同时，多代理协作（Multi-Agent）、跨渠道一致性以及容器化部署体验成为社区共同关注的痛点，显示出开发者对系统可观测性、资源隔离及自动化运维能力的迫切需求。

#### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release 状态 | 健康度评估 | 核心特征 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | 321 | 500 | 无 | **高负荷/高风险** | 极高活跃度，集中修复 P0/P1 回归缺陷，社区维护压力大。 |
| **NanoBot** | 8 | 37 | 无 | **良好/高效** | 聚焦 WebUI 体验与安全加固，响应迅速，积压清理效率高。 |
| **Hermes Agent** | 50 | 50 | 无 | **中等/需警惕** | 桌面端稳定性问题频发，MoA 隐私优化获认可，后端连接存在隐患。 |
| **PicoClaw** | 1 | 7 (Open 8) | 无 | **良好/稳健** | 依赖更新为主，远程 WebSocket 模式合并，架构灵活性提升。 |
| **NanoClaw** | - | 10 (4 Closed) | 无 | **良好/转型中** | 聚焦容器编排稳定性与多渠道适配，从“可用”向“可靠”过渡。 |
| **NullClaw** | 0 | 0 | 无 | **停滞** | 过去24小时无活动。 |
| **IronClaw** | - | - | 无 | **冲刺期/阻塞** | v1 发布前冲刺，品牌标准化，但托管环境配置与集成存在严重 Blocker。 |
| **LobsterAI** | - | 2 (Closed) | 无 | **低/风险高** | 活跃度低，但存在高危 SQL.js 内存崩溃 Bug 及长期未响应的 Stale Issue。 |
| **TinyClaw** | 0 | 0 | 无 | **停滞** | 过去24小时无活动。 |
| **Moltis** | 2 | 5 | **2个** | **极高/高效** | 快速迭代，安全漏洞修复及时，企业级集成（Slack/Teams）加固明显。 |
| **CoPaw** | 37 | 50 | v2.0.1-beta.2 | **阵痛期/高噪** | v2.0 架构重构带来性能回退与兼容性 Bug，Docker 体验受挫，迭代剧烈。 |
| **ZeptoClaw** | 2 | 1 | 无 | **良好/严谨** | 聚焦运行时安全与 CI/CD 合规，Rust 生态质量把控严格。 |
| **ZeroClaw** | 50 | 50 | 无 | **高/复杂度高** | 多通道数据丢失与 Cron 死锁问题突出，A2A 协议互操作性呼声高。 |

#### 3. OpenClaw 在生态中的定位
*   **市场地位**：OpenClaw 是生态中**绝对的活动中心与事实标准制定者**。其日均 800+ 的 Issue/PR 处理量远超其他项目，表明其拥有最庞大的用户基数和最复杂的部署场景。
*   **技术路线差异**：与其他项目相比，OpenClaw 更侧重于**全渠道网关（Gateway）的统一管理与多代理工作流的深度集成**。相比之下，NanoBot 和 ZeptoClaw 更侧重单节点的安全沙箱与轻量级运行，而 Moltis 则偏向企业即时通讯渠道的原生适配。
*   **社区规模**：OpenClaw 的 Issue 热度（如 #44925 子代理丢失）反映了整个生态对“多代理协作可靠性”的共同焦虑，其修复进度直接影响下游依赖或类似架构项目的参考基准。

#### 4. 共同关注的技术方向

| 技术方向 | 具体诉求/现象 | 涉及项目 |
| :--- | :--- | :--- |
| **会话状态与上下文管理** | 解决子代理结果静默丢失、长会话上下文压缩失效、跨渠道消息丢失。 | **OpenClaw** (P1/P0), **Hermes** (P1), **ZeroClaw** (S0/S1) |
| **运行时安全与沙箱隔离** | 防止凭证泄露、Shell 路径逃逸、子进程僵尸进程治理、WASM 内存安全。 | **NanoBot** (ExecTool 加固), **ZeptoClaw** (P1 环境变量清洗), **LobsterAI** (WASM 内存溢出) |
| **多渠道集成稳定性** | 修复 Telegram/Matrix/WhatsApp 的连接重试循环、媒体处理错误、OAuth 配置持久化。 | **OpenClaw** (Matrix/WhatsApp), **NanoClaw** (Telegram Thread/Matrix E2EE), **Moltis** (Slack/Teams ACL), **IronClaw** (WebChat SSE) |
| **容器化与部署体验** | 解决 Docker 热更新缺失、Windows 路径兼容性问题、孤儿容器竞态条件。 | **CoPaw** (Docker 依赖丢失), **NanoClaw** (容器重复启动), **IronClaw** (Windows 本地开发), **ZeroClaw** (AppImage/Installer) |

#### 5. 差异化定位分析

*   **OpenClaw**: **全能型基础设施**。适合需要高度自定义、多代理编排及复杂渠道集成的资深开发者。优势在于生态丰富，劣势在于当前版本稳定性波动大，学习曲线陡峭。
*   **NanoBot & ZeptoClaw**: **安全优先的轻量级运行时**。NanoBot 强调 WebUI 易用性与执行安全；ZeptoClaw 基于 Rust，强调内存安全与 CI 合规。适合对安全性要求极高、部署环境受限（如边缘设备）的场景。
*   **Moltis**: **企业级 IM 渠道专家**。专注于 Slack/Teams/Matrix 的深度集成与安全加固，适合企业内网部署或需要严格权限控制的场景。
*   **CoPaw**: **快速迭代的实验性平台**。依托 AgentScope 框架，功能更新极快（v2.0），但牺牲了部分稳定性。适合愿意容忍 Beta 阶段 Bug、追求最新特性（如 Reranker、第三方代理集成）的研究者或早期采用者。
*   **IronClaw**: **品牌化产品过渡期**。正在从“Reborn”实验阶段向正式商业/产品化阶段转型，目前卡在托管环境配置的易用性上，适合关注品牌化 Agent 平台演进的观察者。
*   **LobsterAI**: **特定场景的桌面应用**。依托网易有道背景，侧重 Electron 桌面体验，但目前面临严重的后端稳定性危机，需谨慎评估。

#### 6. 社区热度与成熟度分层

*   **快速迭代/阵痛期 (High Velocity / High Volatility)**:
    *   **OpenClaw**, **CoPaw**, **ZeroClaw**。
    *   *特征*：Issue/PR 数量巨大，频繁出现 P0/P1 级别回归缺陷，处于架构重构后的稳定化清洗阶段。
*   **稳健交付/质量巩固 (Steady Delivery / Quality Focus)**:
    *   **NanoBot**, **Moltis**, **ZeptoClaw**, **NanoClaw**。
    *   *特征*：活跃度适中，Bug 修复闭环快，重点关注安全补丁、用户体验细节（WebUI/Theme）和基础设施健壮性。
*   **停滞/风险积累 (Stagnant / Risk Accumulation)**:
    *   **LobsterAI**, **NullClaw**, **TinyClaw**。
    *   *特征*：活动极少，但遗留高危 Bug（如 LobsterAI 的数据损坏风险）未得到及时响应，存在技术债务爆发风险。

#### 7. 值得关注的趋势信号

1.  **“静默失败”成为最大痛点**：多个项目（OpenClaw, NanoClaw, Hermes）均报告子代理结果丢失、消息静默丢弃等问题。这表明当前的 Agent 框架在**异步任务追踪与状态一致性**方面存在普遍架构缺陷，未来“可观测性（Observability）”和“确定性执行”将成为核心竞争点。
2.  **安全左移与供应链加固**：ZeptoClaw 的 CI 合规审查、NanoBot 的 Shell 路径白名单、Moltis 的空允许列表修复，均显示开源项目正从“功能驱动”转向“安全驱动”。**默认安全配置（Secure by Default）** 将成为用户选型的关键指标。
3.  **多代理互操作性协议兴起**：ZeroClaw 的 A2A 协议支持请求、CoPaw 的第三方代理后端扩展，暗示社区正在寻求打破单体 Agent 孤岛。**标准化的 Agent-to-Agent 通信协议**可能成为下一个开源热点。
4.  **桌面端与容器化的体验鸿沟**：CoPaw 的 Docker 热更新缺失、IronClaw 的 Windows 兼容性问题、ZeroClaw 的 AppImage 失败，反映出**AI 智能体软件在“最后一公里”的部署体验**仍远落后于后端逻辑开发。谁能解决开箱即用的部署难题，谁就能突破当前的小众圈层。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-24
**数据来源：** GitHub (HKUDS/nanobot)

## 1. 今日速览
NanoBot 项目在 2026-07-23 至 2026-07-24 期间保持极高活跃度，共处理 **37 条 PR**（其中 31 条已合并/关闭）和 **8 条 Issue**。开发重心集中在 **WebUI 体验优化**、**执行工具安全性加固** 以及 **多通道连接稳定性修复** 上。虽然无新版本发布，但通过密集的代码合并，显著提升了系统的安全边界（如 Shell 路径提取、文件句柄绑定）和长文本生成的恢复能力。项目整体健康度良好，核心维护者响应迅速，积压问题清理效率较高。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并了多项关键功能与修复，主要推进方向如下：

*   **安全与权限加固：**
    *   **#5064 / #4594**：修复了 `ExecTool` 中的路径提取漏洞。此前正则表达式未识别 `=` 后的绝对路径（如 `curl --output=/etc/passwd`），现已修复并增加了对破坏性命令的管理员白名单校验 (#4889)。
    *   **#4987 (Open)**：正在推进将工作区检查绑定到打开的文件句柄，并使用 `O_NOFOLLOW` 防止符号链接攻击，这是进一步的安全增强。
*   **WebUI 与用户体验：**
    *   **#5061**：简化了模型预设设置流程，引入可复用的模型预设概念。
    *   **#5065**：修复了在启用 `restrictToWorkspace` 时，WebUI 无法预览 `media` 目录下文件的 Bug。
    *   **#5060 / #5058**：大幅优化了 WebUI 的响应式布局和深色模式视觉一致性。
    *   **#5017**：实现了单轮次模型回退指示器，用户可在 UI 上看到当前请求实际使用的备用模型。
*   **Agent 核心逻辑：**
    *   **#5056**：修复了 `AgentRunner` 在遭遇 Token 限制截断时的长度恢复逻辑，确保输出内容不丢失。
    *   **#5066 / #5068**：改进了执行会话和会话列表管理的健壮性，处理了进程终止失败和文件并发删除导致的异常。

## 4. 社区热点
以下 Issue/PR 获得了较多关注或代表了重要的社区诉求：

*   **[PR #5061] feat(webui): simplify model preset settings**
    *   **链接：** https://github.com/HKUDS/nanobot/pull/5061
    *   **分析：** 用户对复杂的模型配置感到困扰，此 PR 通过抽象“模型预设”简化了交互，反映了用户对易用性的强烈需求。
*   **[Issue #4253] support overriding model per conversation**
    *   **链接：** https://github.com/HKUDS/nanobot/issues/4253
    *   **分析：** 用户希望在不同隐私等级（本地 vs OpenRouter）之间灵活切换模型。虽然未直接解决，但相关的模型预设简化工作可能为后续细粒度控制奠定基础。
*   **[Issue #5059] 都支持各个浏览器的什么版本**
    *   **链接：** https://github.com/HKUDS/nanobot/issues/5059
    *   **分析：** 新用户或企业用户在部署前关心兼容性，建议维护者在文档中明确列出支持的浏览器版本矩阵。
*   **[PR #5069] fix(channels): ignore confirmations after connect cancellation**
    *   **链接：** https://github.com/HKUDS/nanobot/pull/5069
    *   **分析：** 解决了微信/飞书连接取消后仍保存凭证的竞态条件 Bug，对多通道集成用户至关重要。

## 5. Bug 与稳定性
| 严重等级 | 问题描述 | 关联 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **Shell 路径提取绕过**：`restrictToWorkspace` 下，使用 `=` 分隔符的命令可逃逸沙箱。 | Issue #4592 / PR #4594 | ✅ **已修复** |
| **高** | **会话元数据丢失**：旧格式会话重启后丢失 `workspace_scope`。 | Issue #4940 | ✅ **已修复** (推测由相关 PR 覆盖) |
| **中** | **Media 路径冲突**：飞书上传文件因 workspace 限制导致 WebUI 无法读取。 | Issue #5028 | ✅ **已修复** (PR #5065) |
| **中** | **长文本截断丢失**：Token 超限恢复后，早期生成内容丢失。 | Issue #5051 | ✅ **已修复** (PR #5056) |
| **低** | **测试环境兼容性**：Linux 无 `python` 软链导致测试失败。 | Issue #5062 | ✅ **已修复** (PR #5064) |
| **低** | **Cron 任务空值异常**：`schedule: null` 导致整个定时任务 store 隔离。 | PR #5042 | 🟡 **待合并** |

## 6. 功能请求与路线图信号
*   **模型预设与回退可视化：** 从 #5061 和 #5017 可以看出，团队正在重构模型配置体系，并增强 UI 对底层模型调用的透明度。
*   **MCP 工具标准化：** PR #5057 修复了 MCP 本地 Schema 引用不兼容问题，表明项目正在加强对 MCP (Model Context Protocol) 生态的适配。
*   **文档解析增强：** PR #5039 改进了 DOCX 表格内容的保留，显示团队致力于提升非纯文本文档的处理能力。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍反映在启用严格的工作区限制 (`restrictToWorkspace`) 时，媒体文件和外部上传文件的访问存在摩擦，导致功能不可用 (Issue #5028, #4940)。
*   **场景：** 开发者需要在本地私有模型和云端快速模型之间根据任务敏感度灵活切换 (Issue #4253)。
*   **满意点：** 用户对 WebUI 的视觉优化和响应式布局改进表示认可 (PR #5060, #5058)。
*   **不满点：** 之前的测试套件对 Linux 发行版差异（`python` vs `python3`）缺乏兼容性，导致 CI 不稳定 (Issue #5062)。

## 8. 待处理积压
*   **[PR #4987] fix(filesystem): bind workspace checks to opened files**
    *   **链接：** https://github.com/HKUDS/nanobot/pull/4987
    *   **状态：** Open (Priority P0)
    *   **说明：** 这是一个涉及文件系统安全的核心 PR，引入了 `O_NOFOLLOW` 和句柄绑定检查。由于标记为 P0 且有冲突，需优先处理以完成安全闭环。
*   **[PR #5042] fix(cron): default null schedule when loading jobs.json**
    *   **链接：** https://github.com/HKUDS/nanobot/pull/5042
    *   **状态：** Open
    *   **说明：** 修复 Cron 模块的容错性，防止单个坏数据影响全局任务调度。
*   **[PR #5057] fix(mcp): normalize local schema refs**
    *   **链接：** https://github.com/HKUDS/nanobot/pull/5057
    *   **状态：** Open
    *   **说明：** 解决 MCP 工具兼容性问题，对于使用 Kimi/Moonshot 等严格提供商的用户至关重要。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-24
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 在 2026-07-24 保持高活跃度，过去 24 小时内共产生 50 个 Issue 和 50 个 PR 更新。社区焦点集中在 **桌面端（Desktop）会话状态管理的稳定性**、**MoA（混合智能体）模式的优化与隐私保护**，以及 **上下文压缩（Context Compression）逻辑的修复**。虽然无新版本发布，但大量 PR 已合并或处于待合并状态，显示出开发团队正在积极解决近期暴露的多个 P1/P2 级别 Bug，项目整体健康度良好，但桌面端用户体验仍有较多待修复痛点。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要推进了以下关键改进：

*   **MoA 功能增强与优化：**
    *   **[PR #60463] (Closed)** 添加了 MoA 参考输出的可选隐私过滤功能，敏感数据（如邮箱、电话、API 密钥）将被自动脱敏。解决了用户对于隐私泄露的担忧 (#59959)。
    *   **[PR #59753] (Closed)** 实现了 MoA 参考模型的独立启用/禁用开关。用户现在可以在不删除配置的情况下临时排除特定参考模型，提升了 MoA 配置的灵活性 (#59707)。
    *   **[PR #63448] (Closed)** 引入了 `tool_call_batch_cadence` 配置项，允许控制参考顾问刷新的频率，优化了长时间运行任务的资源使用。

*   **技能库（Skills）重构与精简：**
    *   **[PR #70452] (Open)** 对 `hermes-agent` 技能包进行了大规模重构，将其作为轻量级 Hub，并吸收了主题、桌面插件等子技能，减少了核心体积。
    *   **[PR #70456, #70434, #70453] (Open)** 将 `yuanbao`、`segment-anything`、`heartmula` 和 `audiocraft` 等 niche 或重型技能移至 `optional-skills` 目录，遵循“默认最小化安装”原则，提升了首次安装的体验。

*   **桌面端与 Dashboard 修复：**
    *   **[PR #63292] (Open)** 改进了中断完成（interrupted completions）的处理逻辑，将其标记为元数据而非助手文本，防止历史会话记录混乱。
    *   **[PR #70438] (Open)** 修复了 Web Dashboard 中聊天会话列表在启动新对话后不实时更新的问题，增加了轮询和可见性变化监听。

## 4. 社区热点
以下 Issue 因评论数多或涉及核心功能而受到高度关注：

*   **[Issue #66875] Desktop session switching bug (8 comments)**
    *   **现象：** 在桌面版中，从非聊天标签页（如 Plugins）切换回最近一次会话时无响应，仅点击倒数第二次会话有效。
    *   **诉求：** 修复会话切换的 UI/UX 逻辑错误，确保“最新会话”能正确加载。
    *   **链接：** [NousResearch/hermes-agent Issue #66875](https://github.com/NousResearch/hermes-agent/issues/66875)

*   **[Issue #69314] Telegram gateway proxy retry loop (7 comments)**
    *   **现象：** 位于 HTTP 代理后的 Telegram 网关陷入 CLOSE_WAIT 套接字重试循环，导致服务降级直至重启。
    *   **诉求：** 修复代理环境下的连接管理逻辑，避免资源泄漏。
    *   **链接：** [NousResearch/hermes-agent Issue #69314](https://github.com/NousResearch/hermes-agent/issues/69314)

*   **[Issue #513] Two-Phase Context Management (5 comments)**
    *   **现象：** 用户建议借鉴 Kilocode 的两阶段上下文管理（先修剪工具输出，再压缩），以提高效率和准确性。
    *   **诉求：** 优化上下文压缩算法，减少 LLM 调用成本并提升摘要质量。
    *   **链接：** [NousResearch/hermes-agent Issue #513](https://github.com/NousResearch/hermes-agent/issues/513)

## 5. Bug 与稳定性
今日报告了多个影响稳定性的 Bug，按严重程度排列：

*   **P1 (Critical/High):**
    *   **[Issue #70401] OAuth 401 无限重试循环：** Nous OAuth 凭证池进入不可中断的 401 重试循环，只有外部进程杀死才能停止。存在安全风险和资源耗尽风险。
        *   链接：[Issue #70401](https://github.com/NousResearch/hermes-agent/issues/70401)
    *   **[Issue #14694] 防抖动保护永久禁用自动压缩：** 触发防抖动后，`should_compress()` 永久返回 False，且无恢复机制，导致长会话上下文溢出。
        *   链接：[Issue #14694](https://github.com/NousResearch/hermes-agent/issues/14694)

*   **P2 (Major):**
    *   **[Issue #67762] 网关重启后会话估算成本重置为 $0：** 影响计费功能的准确性，属于阻塞性问题。
        *   链接：[Issue #67762](https://github.com/NousResearch/hermes-agent/issues/67762)
    *   **[Issue #69930] 桌面 GUI WebSocket 重连风暴：** Electron 渲染器在 ~30-45 秒网格上频繁断开重连，导致 UI 冻结和会话堆积。
        *   链接：[Issue #69930](https://github.com/NousResearch/hermes-agent/issues/69930)
    *   **[Issue #69512] Anthropic API 400 错误：** 上下文压缩产生空文本块导致 Anthropic API 拒绝请求。已有相关修复讨论。
        *   链接：[Issue #69512](https://github.com/NousResearch/hermes-agent/issues/69512)
    *   **[Issue #69551] Desktop SSH 远程模式 Broken：** 非默认配置文件下，token-path 验证路径硬编码导致失败。
        *   链接：[Issue #69551](https://github.com/NousResearch/hermes-agent/issues/69551)

*   **P3 (Minor/Cosmetic):**
    *   **[Issue #60693]** 界面缩放设置随机重置。
    *   **[Issue #47359]** 后端更新成功但报告失败。
    *   **[Issue #70400]** WSLg 环境下缺少窗口控制按钮。

## 6. 功能请求与路线图信号
*   **MoA 进度可视化：** [Issue #59546] 用户强烈要求显示 MoA 的中间进度（如 "2/3 refs done"），目前被视为“黑盒”。这可能与 [PR #60463] 的隐私过滤结合考虑，但 UI 反馈是独立需求。
*   **个性化 MoA 模型开关：** [Issue #59707] 已实现 ([PR #59753])，允许单独启用/禁用参考模型，这是 MoA 配置精细化的重要一步。
*   **静态路径硬编码修复：** [Issue #52669] 系统提示符中硬编码 `~/.hermes` 路径，忽略 `HERMES_HOME` 环境变量，影响自定义安装路径的用户。

## 7. 用户反馈摘要
*   **痛点：** 桌面端（Desktop App）的会话管理和 UI 稳定性是当前最大的投诉来源。用户反馈包括：会话列表不刷新、切换会话无响应、WebSocket 断连导致 UI 冻结、以及非默认路径下的配置错误。
*   **场景：** 远程/SSH 模式和 Telegram 网关是企业/高级用户的重要场景，但代理环境下的连接稳定性问题（Issue #69314）和 SSH 配置问题（Issue #69551）阻碍了这些场景的流畅使用。
*   **满意度：** 用户对 MoA 功能的隐私保护（Issue #59959）和灵活配置（Issue #59707）表示欢迎，认为这些功能增强了生产环境使用的安全性。

## 8. 待处理积压
*   **[Issue #70401] OAuth 重试循环：** 这是一个 P1 级别的安全/稳定性问题，需要立即关注。
*   **[Issue #14694] 压缩防抖动永久失效：** 影响长会话的可用性，需确认修复方案是否已纳入 [PR #60662] (configurable max_tail_message_floor) 或需要单独修复。
*   **[Issue #69930] Desktop WebSocket 风暴：** 严重影响桌面端用户体验，需优先排查 Electron 渲染器与 Gateway 之间的通信逻辑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期**：2026-07-24
**数据来源**：GitHub (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 项目今日保持中等活跃度，主要工作集中在依赖更新与基础设施维护上。过去24小时内关闭了1个Issue和7个PR，同时有8个PR处于待合并状态，其中大部分为 Dependabot 自动发起的依赖版本升级。值得注意的是，核心功能层面有显著进展，包括 DeltaChat 模块的重构、远程 WebSocket 模式的正式合并以及模型故障转移链的配置化支持。整体项目健康度良好，依赖安全性得到加强，架构灵活性有所提升。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的重要 Pull Requests 推动了以下关键改进：

*   **远程代理模式支持**：[#3118](https://github.com/sipeed/picoclaw/pull/3118) 合并了由 `jp39` 开发的远程 Pico WebSocket 模式。该功能允许 `picoclaw agent` 命令通过 WebSocket 连接远程实例，增强了项目的部署灵活性和集成能力。
*   **DeltaChat 模块重构**：[#3222](https://github.com/sipeed/picoclaw/pull/3222) 对 DeltaChat 实现进行了大幅清理（减少约200行代码），移除了遗留功能和过时测试，引入了官方中继列表引用，并规范了邀请链接参数命名。这提高了代码的可维护性和安全性。
*   **媒体提取 Bug 修复**：[#3115](https://github.com/sipeed/picoclaw/pull/3115) 修复了一个严重的会话历史损坏问题，该问题导致工具输出中的 base64 数据 URL 被错误地识别为媒体附件。此修复对于使用 `read_file` 或 `exec` 等通用工具的用户至关重要。
*   **Go 语言栈安全更新**：[#3286](https://github.com/sipeed/picoclaw/pull/3286) 更新了 Go 版本及 `x/text` 库以通过 `govulncheck` 扫描，确保了基础运行时的安全性。

## 4. 社区热点
*   **OpenAI GPT 配置问题**：[#3195](https://github.com/sipeed/picoclaw/issues/3195) 用户报告在 NanoKVM 设备上使用默认配置无法连接 OpenAI GPT-5.4。尽管该 Issue 已关闭，但其反映了特定硬件/环境下的兼容性痛点，可能暗示文档或默认配置需要针对边缘设备进一步优化。
*   **模型故障转移配置需求**：[#3200](https://github.com/sipeed/picoclaw/pull/3200) 提出的“可配置的默认故障转移链”功能备受关注。它允许用户在 Web UI 中设置主模型和备用模型，并通过 API 持久化保存。这一功能直接回应了用户对高可用性 AI 服务的需求，预计将成为下一版本的核心特性之一。

## 5. Bug 与稳定性
*   **[CLOSED] [#3115]**：修复了 inline data URL 媒体提取导致的会话历史损坏。这是一个影响数据完整性的严重 Bug，现已通过 PR #3115 解决。
*   **[CLOSED] [#3195]**：NanoKVM 上 OpenAI GPT 连接失败。Issue 已关闭，但未明确提及是否通过代码修复还是配置调整解决，建议关注后续是否有相关文档更新或配置补丁。

## 6. 功能请求与路线图信号
*   **模型冗余与高可用**：[#3200](https://github.com/sipeed/picoclaw/pull/3200) 显示团队正在积极响应用户对模型故障转移的需求。通过 Web UI 可视化配置故障转移链，表明项目正朝着更企业级、更稳定的方向演进。
*   **通信协议扩展**：[#3118](https://github.com/sipeed/picoclaw/pull/3118) 的合并表明项目正在扩展其代理通信方式，从本地进程间通信向网络 WebSocket 协议延伸，这可能为未来的分布式代理集群或多机协作奠定基础。

## 7. 用户反馈摘要
*   **痛点**：用户在特定硬件（如 NanoKVM）上遇到开箱即用的配置问题，说明默认配置可能未覆盖所有嵌入式场景。
*   **满意点**：DeltaChat 模块的代码清理和文档引用规范化得到了认可（通过 PR 合并体现），用户倾向于更清晰、基于官方标准的配置方式。
*   **期望**：用户强烈希望获得更细粒度的模型管理控制，特别是故障转移机制，以减少单点故障风险。

## 8. 待处理积压
*   **Dependabot PR 积压**：当前有 8 个待合并的 PR，其中大部分是 Dependabot 发起的依赖升级（如 `actions/setup-node`, `actions/setup-go`, `copilot-sdk`, `aws-sdk-go-v2` 等）。虽然这些通常是低风险的安全或功能更新，但数量较多，建议维护者批量审查合并，以保持依赖栈的最新和安全。
    *   [#3263](https://github.com/sipeed/picoclaw/pull/3263), [#3262](https://github.com/sipeed/picoclaw/pull/3262), [#3291](https://github.com/sipeed/picoclaw/pull/3291), [#3290](https://github.com/sipeed/picoclaw/pull/3290), [#3289](https://github.com/sipeed/picoclaw/pull/3289), [#3288](https://github.com/sipeed/picoclaw/pull/3288) 等均处于 OPEN 状态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-07-24
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
今日 NanoClaw 项目保持中等活跃度，核心焦点集中在**容器编排稳定性**与**多通道适配器的兼容性修复**。过去24小时内共有10个PR更新（4个已合并/关闭，6个待处理），显示出开发团队正在积极清理积压的技术债务。虽然无新版本发布，但针对 Telegram 线程支持、Matrix E2EE 原生适配以及容器重复启动竞态条件的修复，显著提升了系统的健壮性。整体项目健康度良好，技术债正在被系统性偿还。

## 2. 版本发布
*   **无新版本发布。**
    *   近期无 `Release` 标记，建议关注合并后的 PR 是否包含 Breaking Changes，特别是涉及 `container-runner` 和 `matrix-bot-sdk` 的重构部分。

## 3. 项目进展
今日主要推进了以下关键功能与修复，增强了系统的兼容性与底层稳定性：

*   **基础设施与容器管理优化：**
    *   **[已合并] #3119**: 修复了 `container-runner` 中未跟踪孤儿容器导致的重复启动问题。该修复解决了单 Agent 组内容器累积导致的资源浪费和会话冲突，直接回应了 Issue #2466 中描述的竞态条件。
    *   **[已合并] #3115**: 在 OneCLI 中阻止遗留的 Gmail API 路由，防止因 API 端点变更导致的流量拦截错误，增强了邮件集成的稳定性。
*   **多渠道适配器增强：**
    *   **[已合并] #2892**: 正式启用 Telegram 的线程（Thread）支持，通过设置 `supportsThreads: true` 使论坛/主题帖能被正确追踪。
    *   **[已合并] #2844**: 将 Matrix 通道从基于 WASM 的 Chat SDK 桥接迁移至原生的 `matrix-bot-sdk` + Rust Crypto 绑定。此举消除了 WASM 性能瓶颈，提供了更安全的端到端加密（E2EE）体验。
*   **用户体验与工具链改进：**
    *   **[已合并] #3120**: 修复了长时间工具调用期间打字指示器（Typing Indicator）消失的问题，提升了交互流畅度。
    *   **[已合并] #2346**: 修正了未知斜杠命令的处理逻辑，使其不再被误判为 Claude Code 命令导致响应静默丢弃，提高了容错率。
    *   **[待合并] #3122**: 由核心团队成员 glifocat 提交，旨在解决 OpenCode 的主分支兼容性、自定义端点传输及内存parity问题，预计将显著提升核心引擎的稳定性。

## 4. 社区热点
*   **Issue #2466 [Bug] Duplicate container spawn race on wakeContainer**
    *   **链接:** [nanocoai/nanoclaw Issue #2466](https://github.com/nanocoai/nanoclaw/issues/2466)
    *   **分析:** 这是今日最受关注的 Bug 报告，描述了在脚本注入与主机扫描并发时，导致相同 Brief 被两个独立容器处理的竞态条件。虽然该问题已在 PR #3119 中得到根本性修复（Reconcile untracked orphan containers），但该 Issue 仍保持开放状态以验证长期稳定性。用户对此类资源浪费和数据一致性问题的容忍度极低，修复此问题对生产环境至关重要。
*   **PR #3122 [Fix] fix(opencode): main compatibility, custom-endpoint transport, memory parity**
    *   **链接:** [nanocoai/nanoclaw PR #3122](https://github.com/nanocoai/nanoclaw/pull/3122)
    *   **分析:** 由核心贡献者发起的高优先级修复，涉及底层通信协议和内存管理。由于涉及“main compatibility”和“memory parity”，社区密切关注其合并后对现有集成（如自定义端点）的影响。

## 5. Bug 与稳定性
*   **高优先级修复完成：**
    *   **#3119**: 解决了容器重复启动导致的资源泄漏和会话冲突。这是今日最重要的稳定性修复。
    *   **#2346**: 修复了命令解析器的边界情况，避免了未知命令导致的静默失败。
*   **潜在风险点：**
    *   **#2844 (Matrix 重写)**: 虽然已合并，但从旧 SDK 迁移到原生 Rust 绑定的 Crypto 实现可能引入细微的行为差异或性能波动，建议后续观察 Matrix 通道的错误日志。
    *   **#3122 (待合并)**: 涉及核心兼容性和内存模型，若合并失败或引入回归，可能影响所有依赖 OpenCode 架构的用户。

## 6. 功能请求与路线图信号
*   **操作可观测性与运维工具：**
    *   **#2971 [Skill] Add ncc utility skill: host operational and health CLI**
        *   **链接:** [nanocoai/nanoclaw PR #2971](https://github.com/nanocoai/nanoclaw/pull/2971)
        *   **信号:** 用户和社区强烈需要更细粒度的主机健康检查和运维 CLI 工具。该 PR 增加了 `.claude/skills` 下的独立工具，表明项目正从单纯的“Agent 运行时”向“可运维的 Agent 平台”演进。
*   **模板上下文管理：**
    *   **#3090 [Fix] fix(templates): prepend all top-level context Markdown**
        *   **链接:** [nanocoai/nanoclaw PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090)
        *   **信号:** 用户对 Prompt 工程和模板管理的精确性要求提高，确保上下文注入的顺序和完整性成为关键需求。

## 7. 用户反馈摘要
*   **痛点：** 用户对于“静默失败”极为敏感。Issue #2466 和 PR #2346 都反映了用户在使用脚本注入或混合命令时，遇到无报错但行为异常的情况，这降低了调试效率。
*   **场景：** 生产环境中的高并发场景（如 Gamma Expert 批量处理）暴露了容器编排的缺陷。用户期望系统能自动清理孤儿进程，而不是手动干预。
*   **满意度：** Telegram 线程支持和 Matrix 原生 E2EE 的引入得到了正面预期，这表明用户对即时通讯的深度集成和安全标准有较高期待。

## 8. 待处理积压
*   **长期未响应的 Issue/PR：**
    *   **#2466 [OPEN]**: 尽管 Bug 根源已在 #3119 中修复，但 Issue 仍未关闭。建议维护者验证修复后的长期运行效果后手动关闭，以释放标签占用。
    *   **#3122 [OPEN]**: 核心团队的兼容性修复 PR。由于涉及面广，建议尽快进行代码审查并决定合并策略，以免影响后续版本的依赖关系。
    *   **#3090 [OPEN]**: 模板上下文修复。虽然看似微小，但影响 Prompt 工程的准确性，建议优先合并。
    *   **#2346 [OPEN]**: 命令解析器修复。已合并但标记为 OPEN？需确认状态同步问题。
    *   **#3121 [OPEN]**: 反应投递最佳努力策略。属于可靠性改进，建议评估后合并。

---
**分析师备注：** 本周 NanoClaw 的核心战略是“稳固底座”。通过修复容器竞态条件、重构 Matrix 底层连接、增强 Telegram 特性，项目正在从“可用”向“可靠”转型。建议重点关注 #3122 的合并结果，它将决定下一阶段的兼容性基线。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-07-24
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目今日处于高强度的 v1 发布冲刺阶段，核心焦点在于**“Reborn”架构向正式产品身份的过渡**。开发团队密集处理了 CLI 和 WebUI 中“Reborn”相关术语的清理工作，并修复了多个阻碍生产环境稳定性的关键 Bug，特别是涉及 Slack/Telegram 集成、WebChat 连接稳定性以及 Windows 本地开发兼容性的问题。尽管没有新版本发布，但代码库的整洁度、扩展生命周期管理的健壮性以及测试基础设施的现代化（E2E 迁移）取得了显著进展，项目整体健康度良好，但在托管环境的配置持久化和 OAuth 流程上仍存在若干待解痛点。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭的 PR 主要集中在架构重构、Bug 修复和依赖更新，推动了项目从“实验性 Reborn 阶段”向“标准化 IronClaw 阶段”的正式转型：

*   **产品身份标准化 (Major):**
    *   **#6556 [feat(product): make IronClaw the default product identity]**: 将 CLI 和 WebUI 中的默认产品标识统一为 "IronClaw"，移除了用户可见面的 "Reborn" 字样，同时保留运行时兼容性。这是 v1 发布前的重要品牌和技术解耦步骤。
    *   **#6559 [feat(config): make IronClaw contracts canonical]**: 确立了 `IRONCLAW_*` 环境变量和 `~/.ironclaw` 目录为默认配置标准，旧有的 `IRONCLAW_REBORN_*` 变量仅作为兼容别名保留。
    *   **#6550 [Remove “Reborn” from User-Facing CLI and WebUI Surfaces]**: 配合上述变更，全面清理用户界面文本。

*   **扩展与集成修复 (Critical Fixes):**
    *   **#6520 [fix(reborn): make extension readiness and channel delivery generic]** (已合并): 重构了扩展生命周期管理，将安装、激活和解耦，解决了扩展状态不一致的问题，并为后续的自动化重置脚本奠定了基础。
    *   **#6607 [fix(automations): inherit implicit source channel target]**: 修复了自动化场景中对话绑定和目标通道匹配的逻辑错误。
    *   **#6604 [fix(reborn): fall back to web-app delivery when a run's final-reply channel is removed mid-run]**: 解决了在运行过程中移除通道（如卸载 Telegram）导致最终回复投递失败的问题，增强了系统的容错性。
    *   **#6601 [ops: add admin-config-preserving extension reset]**: 提供了新的运维脚本，允许管理员在保留配置的前提下重置扩展状态，极大提升了调试效率。

*   **测试与基础设施:**
    *   **#6560/#6561/#6562**: 一系列 PR 正在将遗留的 E2E 测试迁移到基于 `ironclaw serve` 的新测试框架中，旨在消除对过时二进制文件的依赖，提高测试的可维护性和覆盖率。
    *   **#6594 [retire legacy extension sources]**: 清理了废弃的 `tools-src/` 和 `channels-src/` 目录，简化了构建结构。

## 4. 社区热点
以下 Issues 因评论较多或涉及核心功能而成为讨论焦点：

*   **#6389 [Phase 4: collapse build_local_runtime + build_production_shaped]** (11 comments):
    *   **背景:** 开发者 ilblackdragon 提议合并两种运行时构建路径，以简化 `crates/ironclaw_reborn_composition` 中的代码逻辑。
    *   **诉求:** 降低复杂度，统一后端参数化构建流程，这是架构简化的关键一步。
*   **#6274 [Finish DeploymentConfig as the main composition config]** (5 comments):
    *   **背景:** 继续推进 #6389 之前的工作，确保 `DeploymentConfig` 成为配置的核心对象。
    *   **诉求:** 完善配置模型，解决之前遗留的结构不一致问题。
*   **#6524 [Epic: Hermetic capability and journey testing platform]** (3 comments):
    *   **背景:** 提出建立确定性、可复现的端到端测试平台的需求。
    *   **诉求:** 解决当前测试覆盖无法机械性验证所有能力路径的问题，提升产品质量保证能力。
*   **#6544 / #6522 / #6534 / #6548 / #6521 / #6541 / #6591**: 这一组 Issue 均标记为 `[v1-launch-checklist]`，集中反映了托管环境 (`agent-stg.near.ai`) 在 OAuth 配置、Telegram/Slack 集成、CLI 可用性和 WebUI 连接稳定性方面的严重缺陷。这些是 v1 发布前的 blocker。

## 5. Bug 与稳定性
今日报告的 Bug 多集中在集成层和平台兼容性上，部分已有 PR 跟进：

| 严重程度 | Issue ID | 描述 | 状态/关联 PR |
| :--- | :--- | :--- | :--- |
| **高** | #6581 | WebChat v2 SSE 连接在正常负载下返回 429 Too Many Requests，导致前端显示“Disconnected”。 | 关联 PR #6592 (已合并)，修复了速率限制预算扣除和 SSE 争用问题。 |
| **高** | #6605 | Telegram 扩展在安装/重装后，若无完整配置提交，入站消息会静默失败。 | 待修复。需确保 `telegram_webhook_secret` 的正确传递。 |
| **高** | #6548 | 托管预发环境背后的预览认证墙拦截了 Telegram/Slack 的 webhook 投递。 | 待修复。需要绕过或配置 webhook 白名单。 |
| **中** | #4548 | DeepSeek 模型在包含 tools 时，请求体序列化出重复的 `model` 字段，导致 400 错误。 | 待修复。需修正 JSON 序列化逻辑。 |
| **中** | #6590 | Windows 环境下 `ironclaw serve` 失败，提示 workspace root 重叠。 | 待修复。路径解析逻辑需适配 Windows。 |
| **低** | #6575 | Ubuntu 上 `ironclaw onboard` 后 systemd 服务报错。 | 待修复。检查服务单元文件生成逻辑。 |
| **低** | #6600 | Anthropic 默认模型更新导致 404 错误。 | 关联 PR #6600 (已合并)，更新为 `claude-sonnet-4-6`。 |

## 6. 功能请求与路线图信号
*   **心跳机制 (Heartbeat):** #6569, #6570, #6571 详细定义了 Reborn 的心跳契约、调度语义及实现方案。这表明项目正在增强代理的活跃状态管理和超时检测能力，预计将在下一版本中通过 `trigger pipeline` 落地。
*   **技能发现与路由优化:** #6565 指出当前技能激活主要依赖模型指令，缺乏可靠的路由机制。提出的 Epic 旨在建立更确定的技能发现和激活流程，这可能影响未来的技能市场或插件生态设计。
*   **管理员代理身份:** #6578 提出了“Admin-Managed Agents as UserId Subjects”的概念，支持租户管理员创建非人类主体（如自动化代理），而不破坏私有用户隔离。这预示着企业级多租户功能的加强。
*   **评估与基准测试:** #6572 展示了每日失败分类分析，结合 #6524 的测试平台需求，表明项目正致力于建立数据驱动的持续改进闭环。

## 7. 用户反馈摘要
*   **托管环境配置困难:** 多位用户 (#6544, #6522, #6534) 抱怨在托管环境中配置 Slack OAuth Redirect URI、Google OAuth 和 Telegram 时缺乏直观的 UI/CLI 支持，甚至出现配置无法保存或 webhook 被拦截的情况。用户期望像 Google 集成那样有清晰的指引和持久化存储。
*   **WebUI 连接不稳定:** 用户反映 WebChat 频繁重连或显示断开 (#6541, #6581)，即使代理本身工作正常。这种视觉上的混乱影响了用户体验，尽管实际功能未中断。
*   **CLI 可用性缺失:** 在 staging 环境中 SSH 登录后找不到 `ironclaw` 命令 (#6521)，且无法使用 `service restart` (#6591)，迫使运维人员回到 UI 进行操作，降低了效率。
*   **Windows 开发体验差:** #6590 报告了 Windows 上的路径冲突错误，表明跨平台支持仍需加强。

## 8. 待处理积压
*   **#6544 / #6522 / #6534 / #6548:** 这些 `[v1-launch-checklist]` 中的托管环境集成配置问题必须在 v1 发布前解决，否则将严重影响新用户上手和现有用户的信任度。
*   **#4548:** DeepSeek 的序列化 Bug 是一个明确的兼容性缺陷，需尽快修复以避免特定模型提供商的用户无法使用工具功能。
*   **#6590:** Windows 兼容性问题是阻碍广泛开发者参与本地贡献的障碍，应优先处理。
*   **#6575:** systemd 服务错误可能影响 Linux 服务器部署的稳定性，需排查 `onboard` 脚本的服务注册逻辑。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-07-24  
**数据来源**：GitHub (netease-youdao/LobsterAI)  
**分析师**：Agnes-2.0-Flash

---

### 1. 今日速览
LobsterAI 项目今日保持中等活跃度，社区贡献者主要聚焦于 Electron 依赖升级及 UI 皮肤细节优化。尽管没有新版本发布，但两个重要 PR 已合并，显示出维护团队对构建稳定性和视觉体验的持续投入。然而，多个标记为 `[stale]` 的高优先级 Issue（涉及 API 限流、多 Agent 绑定及数据库崩溃）仍未得到官方实质性回应，反映出后端核心稳定性与架构扩展性方面存在潜在风险，需引起重视。

### 2. 版本发布
*   **状态**：无新版本发布。
*   **说明**：昨日发布的 `Release/2026.7.20` (PR #2379) 已合并，但今日未触发新的 Release Cycle。

### 3. 项目进展
今日合并/关闭了 2 个 Pull Request，主要涉及基础设施更新和前端体验优化：

*   **Electron 依赖升级 (PR #1277)**
    *   **内容**：将 `electron` 从 `40.2.1` 升级至 `43.1.1`，并同步更新 `electron-builder`。
    *   **意义**：这是一个重大的底层依赖更新，可能带来性能提升和安全补丁，但也引入了潜在的兼容性风险，需关注后续用户反馈。
    *   [链接](https://github.com/netease-youdao/LobsterAI/pull/1277)

*   **AI 皮肤外观优化 (PR #2378)**
    *   **内容**：统一了 Artifact 添加标签页和任务搜索表面与 AI 皮肤的展示风格；实现了标准主题与 AI 皮肤的互斥绑定；优化了皮肤库的排序逻辑（最新优先）。
    *   **意义**：提升了用户界面的视觉一致性和个性化配置的易用性。
    *   [链接](https://github.com/netease-youdao/LobsterAI/pull/2378)

### 4. 社区热点
以下 Issue 因长期活跃且标记为 `[stale]` 而成为社区讨论焦点，反映了用户对核心功能稳定性的焦虑：

*   **定时任务重复显示与 API 限流 (Issue #1263)**
    *   **摘要**：用户在 UI 上看到重复的定时任务，且均提示 API 速率限制。
    *   **诉求**：修复前端渲染逻辑以去重，并解决后端 API 限流导致的任务执行失败问题。
    *   [链接](https://github.com/netease-youdao/LobsterAI/issues/1263)

*   **多 Agent 场景下的 IM 机器人与模型绑定需求 (Issue #1265)**
    *   **摘要**：当前所有 Agent 共享相同的 IM 机器人和模型配置，无法实现“调度 Agent”与“生成 Agent”的职责分离。
    *   **诉求**：支持细粒度的配置，允许不同 Agent 绑定不同的 IM 机器人和专用模型（如编程模型 vs 推理模型），以支持复杂的 Agent 团队协作场景。
    *   [链接](https://github.com/netease-youdao/LobsterAI/issues/1265)

### 5. Bug 与稳定性
**严重级别：高**

*   **SQL.js WASM 内存溢出导致崩溃 (Issue #1273)**
    *   **描述**：在高频写入场景（如长时间 Cowork 会话）下，WASM 线性内存碎片化导致 `memory access out of bounds` 运行时错误，应用卡死或强制退出。此外，非原子写入操作可能导致数据库文件永久损坏。
    *   **影响**：直接威胁数据完整性和用户体验，属于阻塞性 Bug。
    *   **状态**：暂无合并的 Fix PR。
    *   [链接](https://github.com/netease-youdao/LobsterAI/issues/1273)

### 6. 功能请求与路线图信号
*   **多 Agent 异构配置 (来自 Issue #1265)**
    *   **信号**：用户明确提出需要根据职责分配不同模型和机器人的需求。这暗示了 LobsterAI 正在向更复杂的 Multi-Agent Orchestration 方向演进。若此功能被纳入路线图，可能需要重构现有的 Agent-Binding 配置模块。

### 7. 用户反馈摘要
*   **痛点**：
    1.  **稳定性差**：高频使用场景下应用易崩溃且存在数据丢失风险 (Issue #1273)。
    2.  **API 管理混乱**：定时任务界面显示异常且频繁遭遇限流，阻碍自动化流程 (Issue #1263)。
    3.  **灵活性不足**：缺乏对多 Agent 场景的精细化控制，限制了高级用户构建复杂工作流的能力 (Issue #1265)。
*   **满意点**：
    1.  **UI 细节打磨**：用户关注皮肤和主题的一致性，表明对视觉体验有较高要求，当前的皮肤优化 PR 符合这一期待。

### 8. 待处理积压
以下 Issue 自 2026-04-02 创建以来，直至 2026-07-23 仍无官方回复或修复，且状态为 `[stale]`，建议维护者优先处理：

1.  **[Bug] sql.js 内存崩溃与数据损坏风险** (Issue #1273) - *高危，可能导致用户数据丢失。*
2.  **[Feature] 多 Agent 绑定不同 IM 机器人和模型** (Issue #1265) - *关键功能缺口，影响高级用例。*
3.  **[Bug] 定时任务重复显示及 API 限流** (Issue #1263) - *基础功能故障。*

**建议**：鉴于 Electron 已大幅升级，建议开发团队在测试新 Electron 版本时，重点复现并修复 Issue #1273 中的 WASM 内存问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：** 2026-07-24
**数据来源：** GitHub (moltis-org/moltis)

## 1. 今日速览
Moltis 项目在 2026-07-23 呈现出极高的活跃度和交付效率。过去24小时内，团队完成了 **5 个 PR 的合并**以及 **2 个新版本的发布**（20260723.02 和 20260723.03），显示出快速迭代的能力。核心进展集中在 Slack/Teams 等外部渠道的安全加固、Web UI 会话时间显示的优化以及上下文命令支持上。尽管 Issue 更新量较少（仅 2 条），但大部分近期 Bug 已通过 PR 迅速闭环，项目整体健康度良好，稳定性正在通过安全补丁得到加强。

## 2. 版本发布
今日发布了两个新版本，具体细节未在数据中提供，建议查阅 Release Notes 获取完整变更日志：
- **v20260723.03**: [Release Link](https://github.com/moltis-org/moltis/releases/tag/20260723.03)
- **v20260723.02**: [Release Link](https://github.com/moltis-org/moltis/releases/tag/20260723.02)

*注意：由于缺乏具体的 Commit 或 Diff 信息，无法在此列出详细的破坏性变更或迁移指南，请用户自行核对升级影响。*

## 3. 项目进展
今日合并的 5 个 PR 涵盖了功能增强、依赖维护和关键 Bug 修复，显著提升了产品的安全性和用户体验：

*   **Slack 安全性重大加固 ([PR #1163](https://github.com/moltis-org/moltis/pull/1163), [PR #1164](https://github.com/moltis-org/moltis/pull/1164))**:
    *   修复了允许列表为空时的访问控制漏洞（此前可能成为开放后门）。
    *   引入了针对未知 DM 用户的 OTP 挑战机制，增强了非授权用户的身份验证。
    *   新增 `MOLTIS_SLACK_API_BASE_URL_ALLOWLIST` 配置项，允许运营商自定义内部代理主机，同时保留对云元数据端点的默认阻断。
    *   同步修复了 Microsoft Teams, Signal 和 Matrix 中的类似空允许列表绕过问题。
*   **Web UI 体验优化 ([PR #1162](https://github.com/moltis-org/moltis/pull/1162))**:
    *   解决了会话列表中“只显示时间不显示日期”的问题。现在会根据会话新旧程度展示本地化的“昨天”、工作日或完整日历日期。
*   **上下文命令支持 ([PR #1124](https://github.com/moltis-org/moltis/pull/1124))**:
    *   引入了可选的 `chat.context_command` 配置，允许在每次聊天轮次前运行脚本并将输出注入提示词，便于部署时动态注入运行时上下文。
*   **文档依赖更新 ([PR #1161](https://github.com/moltis-org/moltis/pull/1161))**:
    *   将文档站点的 Astro 框架从 7.0.9 升级至 7.1.3，保持构建工具链的最新状态。

## 4. 社区热点
今日没有高互动（高评论或高点赞）的新兴讨论热点，但以下 Issue 反映了长期存在的痛点：

*   **[Issue #1095] Podman is not working via moltis** ([链接](https://github.com/moltis-org/moltis/issues/1095)):
    *   **状态**: OPEN | **作者**: RokkuCode
    *   **分析**: 用户报告在 Moltis 环境中使用 Podman 存在问题。虽然创建于 6 月，但在 7 月 23 日仍有更新。这反映了容器化部署兼容性是部分用户关注的重点，尤其是使用非 Docker 运行时环境的用户。
*   **[Issue #1108] Session list in the web UI shows times, but not dates** ([链接](https://github.com/moltis-org/moltis/issues/1108)):
    *   **状态**: CLOSED | **作者**: IlyaBizyaev
    *   **分析**: 此问题已在今日通过 [PR #1162](https://github.com/moltis-org/moltis/pull/1162) 修复。这表明社区反馈被迅速响应并转化为代码改进。

## 5. Bug 与稳定性
*   **已修复 - Web UI 日期显示错误**:
    *   **描述**: 旧会话仅显示时间，导致用户难以区分历史会话。
    *   **解决**: [PR #1162](https://github.com/moltis-org/moltis/pull/1162) 已合并，增加了基于时间的分级日期显示逻辑。
*   **已修复 - Slack/Teams 权限绕过漏洞**:
    *   **描述**: 空允许列表可能导致未授权访问。
    *   **解决**: [PR #1163](https://github.com/moltis-org/moltis/pull/1163) 修复了语义逻辑，[PR #1164](https://github.com/moltis-org/moltis/pull/1164) 增强了 API 基础 URL 的控制。这是一次关键的安全稳定性提升。
*   **未解决 - Podman 兼容性问题**:
    *   **描述**: [Issue #1095](https://github.com/moltis-org/moltis/issues/1095) 仍处于打开状态，可能需要维护者进一步调查容器运行时兼容性。

## 6. 功能请求与路线图信号
*   **动态上下文注入**: [PR #1124](https://github.com/moltis-org/moltis/pull/1124) 的合并表明项目正在向更灵活的企业级集成迈进。`chat.context_command` 功能允许高级用户自定义 AI 的上下文窗口内容，这对于需要实时获取系统状态或私有知识库的场景非常有价值。这暗示路线图可能继续深化“可配置性”和“插件化”方向。
*   **多通道统一安全模型**: 通过修复 Slack, Teams, Signal 和 Matrix 的空允许列表问题，可以看出项目致力于建立统一且严格的多通道访问控制标准。

## 7. 用户反馈摘要
*   **痛点**: 用户在查看历史会话时，对缺乏清晰日期标识感到困惑（Issue #1108），现已解决。
*   **需求**: 有用户（RokkuCode）在使用 Podman 时遇到阻碍，说明非 Docker 生态的用户群体存在兼容性焦虑。
*   **满意度**: 快速修复 Slack 安全漏洞和 UI 显示问题，通常能显著提升企业用户对平台安全性和易用性的信任度。

## 8. 待处理积压
*   **[Issue #1095] Podman is not working via moltis** ([链接](https://github.com/moltis-org/moltis/issues/1095)):
    *   **优先级**: 中/高（取决于目标用户群体的容器技术栈）。
    *   **建议**: 建议维护者确认是否计划增加对 Podman 或其他 OCI 兼容运行时的官方支持，或至少提供工作区说明。该 Issue 已存在约一个月，需关注后续反馈。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-07-24
**数据来源：** GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
CoPaw 项目在 v2.0.x 阶段保持高频迭代，过去24小时处理了 37 个 Issues 和 50 个 PRs，显示出极高的开发活跃度。社区对 v2.0 引入的架构变更（如性能开销、MCP 工具兼容性问题）反馈强烈，同时 Docker 部署体验优化成为用户关注的核心痛点。新版本 `v2.0.1-beta.2` 已发布，重点修复了构建编排和文本消息旋转逻辑，但 Windows 端的多行命令执行及会话历史管理仍存在显著 Bug。整体来看，项目正处于从 v1.x 向 v2.0 稳定过渡的关键阵痛期，稳定性修复是当前的首要任务。

## 2. 版本发布
**最新版本：v2.0.1-beta.2**

*   **更新内容：**
    *   **CI/CD 优化：** 统一发布编排器，确保 Web 端构建依赖于桌面端构建完成后再进行 gating (#6329)。
    *   **运行时修复：** 修复了在推理块（reasoning block）新增时，文本消息未能正确旋转/更新的问题 (#6310)。
*   **迁移注意事项：**
    *   此为 Beta 版本，建议生产环境用户谨慎升级，重点关注 Windows 平台下的 Shell 命令执行及 MCP 工具调用兼容性。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在底层稳定性修复和功能增强：

*   **内存与上下文管理优化：**
    *   [#6323] feat(scroll): add staged compaction and durable task continuity - 重构了 Scroll 上下文管理，引入持久化阶段压缩管道，确保 `history.db` 作为唯一事实来源，提升了任务连续性。
    *   [#6351] fix(memory): guide failed memory edits - 改进了 MEMORY.md 编辑失败后的恢复机制，避免无限重试导致的 Token 浪费。
*   **第三方代理集成：**
    *   [#6397] feat(third-party agents): add extensible Codex and Qoder backends - 引入了可扩展的第三方代理后端架构，支持 Codex 和 Qoder 集成，增强了 Agent 生态的开放性。
*   **浏览器控制 SDK 统一：**
    *   [#6276] feat(browser): unified browser — one SDK, any backend - 统一了浏览器控制 SDK，分离控制平面与执行平面，提升了浏览器自动化功能的灵活性和性能。
*   **依赖与安装优化：**
    *   [#6387] feat(channels): support on-demand installation of built-in channel dependencies - 实现了内置 Channel 依赖的按需安装，减少了核心包的体积。

## 4. 社区热点
以下 Issue 因评论数多或涉及核心体验问题而引发广泛讨论：

*   **[Performance] v2.0 introduces ~2s fixed overhead per simple conversational reply**
    *   **链接:** [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)
    *   **分析:** 用户报告升级至 v2.0 后，简单对话出现约 2 秒的固定延迟。这反映了 v2.0 架构重构带来的性能回归风险，是社区最担忧的问题之一。
*   **Feature: 为Docker部署增加Web端热更新**
    *   **链接:** [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344)
    *   **分析:** 频繁的版本更新导致 Docker 容器重建时丢失本地安装的依赖（Node, ffmpeg 等），严重影响自用机器人体验。用户强烈呼吁参考 AstrBot 实现热更新机制，这是提升部署友好性的关键需求。
*   **[Bug] tool_call arguments polluted with markdown fences / XML tags**
    *   **链接:** [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363)
    *   **分析:** 特定模型（GLM-5-Turbo, DeepSeek-V3）输出的 JSON 被 Markdown 代码块包裹，导致解析失败。这表明 LLM 输出格式的鲁棒性处理仍需加强。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

1.  **Windows 命令行执行崩溃/失效**
    *   **Issue:** [#6406](https://github.com/agentscope-ai/QwenPaw/issues/6406) - `execute_shell_command` 将多行 PowerShell 命令折叠为一行，导致脚本失败。
    *   **PR Fix:** [#6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) - 已提交修复 PR，保留多行命令格式。
2.  **定时任务覆盖会话历史**
    *   **Issue:** [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) - 复用已有用户会话的定时任务会覆盖该会话的历史记录。
    *   **状态:** 严重数据丢失风险，需优先修复。
3.  **ReAct Agent 上下文格式错误**
    *   **Issue:** [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) - `tool_result` 混入 `role:assistant` 消息，导致 OpenAI 兼容 API 报 400 错误。
    *   **状态:** 影响核心 Agent 运行流程。
4.  **MiniMax 供应商图片识别失败**
    *   **Issue:** [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) - 使用内置 MiniMax 供应商时，图片无法被正确识别。
    *   **状态:** 多模态功能回归。
5.  **MCP 工具 "Tool notfound"**
    *   **Issue:** [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) - 升级 v2.0 后 MCP 工具总是提示未找到。
    *   **状态:** 可能与 MCP 注册或命名空间变更有关，需排查。

## 6. 功能请求与路线图信号
*   **智能体级别 Token 统计：** [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) 用户希望细化 Token 统计，支持智能体级别的消耗追踪。这可能纳入未来的可观测性功能模块。
*   **对话撤销/重新编辑：** [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) 用户期望类似 ChatGPT 的“重新编辑上一条消息”功能，以改善交互体验。
*   **特定工作 API 生成：** [#6377](https://github.com/agentscope-ai/QwenPaw/issues/6377) 用户询问是否能将智能体封装为具有自主学习的 HTTP API 服务。
*   **Reranker 支持：** PR [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) 和 [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) 显示团队正在积极开发 ReMe 记忆搜索的重排序（Reranker）功能，并配套 UI 配置面板，这是检索增强生成（RAG）能力的重要增强。

## 7. 用户反馈摘要
*   **痛点：**
    *   **Docker 更新体验差：** 用户抱怨每次更新都需要重建容器，导致本地依赖（Node, ffmpeg 等）丢失，需要重新安装，耗时且易出错。
    *   **Windows 兼容性：** Windows 用户对多行命令执行、PATH 变量分隔符丢失、以及桌面端强制杀死后端进程（而非优雅关闭）表示不满。
    *   **UI/UX 困惑：** 部分用户认为“完整模式”概念令人困惑，建议简化配置入口；审批对话框中“总是允许”按钮过于醒目，存在安全风险。
*   **满意点：**
    *   项目迭代速度快，新功能（如第三方代理集成、浏览器控制）响应迅速。
    *   社区对开源贡献者（如 AIOnly provider 集成）持欢迎态度。

## 8. 待处理积压
*   **[Bug] Repeated MCP client registration leads to task cancellation**
    *   **链接:** [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999)
    *   **说明:** 这是一个长期存在的 Issue（创建于 2026-04-06），描述每次聊天请求重新连接 MCP 服务器可能导致超时取消。尽管 v2.0 进行了重构，但该问题仍未彻底解决，可能影响高并发场景下的稳定性。
*   **[Bug] Installed market skill is not visible until page refresh**
    *   **链接:** [#6294](https://github.com/agentscope-ai/QwenPaw/issues/6294)
    *   **说明:** 技能市场安装后需要刷新页面才能看到，用户体验不佳。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**日期：** 2026-07-24
**数据来源：** GitHub (qhkm/zeptoclaw)

## 1. 今日速览
今日 ZeptoClaw 项目保持高度活跃，核心焦点集中在**运行时安全加固**与**CI/CD 流水线稳定性**上。尽管没有新版本发布，但开发者 qhkm 提交了两个 P1-critical 级别的关键 Issue 和一个对应的修复 PR (#645)，显示出团队对安全漏洞和构建中断问题的高度重视。整体健康度良好，主要风险点在于子进程环境隔离及依赖项的版本合规性，目前已有明确的修复路径在推进中。

## 2. 版本发布
*   **无新版本发布。**
*   当前处于修复关键安全缺陷和优化 CI 流程阶段，预计待 #645 合并及 CI 稳定后，可能会伴随一个补丁版本或安全更新发布。

## 3. 项目进展
*   **关键修复 PR #645**: [fix(runtime): scrub subprocess secrets and reap timed-out process trees](https://github.com/qhkm/zeptoclaw/pull/645)
    *   **状态**: OPEN (待合并)
    *   **进展说明**: 该 PR 直接回应了 Issue #644，旨在解决两个严重的安全与资源管理问题：
        1.  **凭证泄露防护**: 清理子进程继承的 ZeptoClaw 完整环境变量，防止 Provider Key 等敏感信息被模型生成的 Shell 命令意外暴露。
        2.  **僵尸进程治理**: 确保在 Runtime 超时终止 `Command::output()` 时，不仅关闭主进程，还彻底终止并回收（reap）所有子进程树及 Docker 容器，防止资源泄漏。
    *   **影响**: 此 PR 的合并将显著提升项目的生产环境安全性及运行稳定性。

## 4. 社区热点
今日讨论高度集中于以下两个由维护者发起的 P1-critical 问题：

1.  **Issue #646: [chore, area:safety, P1-critical] chore(ci): restore Clippy and cargo-deny checks on current toolchain**
    *   **链接**: [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)
    *   **热点分析**: 该 Issue 指出 PR #645 暴露了 CI 基线的失败。Rust 1.97.1 引入了新的 Clippy 警告，且 `cargo-deny` 拒绝存在已知漏洞的旧版依赖 (`quick-xml 0.39.2`, `lopdf 0.40.0`)。这反映了社区/维护者对代码质量和供应链安全的严格把控，旨在恢复 CI 绿灯状态。

2.  **Issue #644: [bug, area:safety, P1-critical] bug(safety): scrub subprocess environments and terminate process trees on timeout**
    *   **链接**: [Issue #644](https://github.com/qhkm/zeptoclaw/issues/644)
    *   **热点分析**: 这是导致上述 CI 失败和安全风险的根源。用户和维护者关注点在“最小权限原则”在子进程执行中的落地，以及防止因超时导致的资源僵死。

## 5. Bug 与稳定性
今日报告了两个 P1-critical 级别的问题，均涉及底层运行时稳定性与安全：

| 严重程度 | 类型 | 描述 | 关联 PR/Issue | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P1-Critical** | **Bug/Safety** | **子进程环境隔离缺失**: 子进程继承完整环境变量，导致凭证泄露风险；超时机制未正确清理子进程树。 | [PR #645](https://github.com/qhkm/zeptoclaw/pull/645) / [Issue #644](https://github.com/qhkm/zeptoclaw/issues/644) | **Fix Available** |
| **P1-Critical** | **Chore/Breaking** | **CI 构建失败**: 新工具链下出现 Clippy 警告及旧版依赖漏洞扫描失败，阻碍发布流程。 | [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) | **In Progress** |

*   **稳定性评估**: 当前主要风险为**供应链安全**（旧版依赖漏洞）和**运行时资源泄漏**。PR #645 提供了直接的代码级修复方案。

## 6. 功能请求与路线图信号
*   **信号**: 虽然今日主要为 Bug 修复，但 Issue #646 中提到的 `cargo-deny` 拒绝旧版依赖，暗示项目路线图将强制推进依赖项升级。
*   **潜在动作**: 下一版本极可能包含 `quick-xml` 和 `lopdf` 的安全版本升级，以符合现代 Rust 生态的安全标准。这可能涉及少量的 API 兼容性调整，需关注迁移指南。

## 7. 用户反馈摘要
*   **痛点**: 用户（或内部测试）发现当 AI 模型生成包含 Shell 命令的 Agent 行为时，存在极高的**凭证泄露风险**（如 AWS Key, DB Password 通过环境变量传递）。
*   **场景**: 在自动化运维或复杂任务处理场景中，子进程超时后的“孤儿进程”导致服务器资源逐渐耗尽，影响长期运行的稳定性。
*   **满意度**: 目前用户对安全性的关注度极高，维护者快速响应 P1 问题的态度有助于提升信任度。

## 8. 待处理积压
*   **Issue #646 (CI Restore)**: 需要配合 PR #645 的合并进行后续处理。一旦 PR #645 合并，需立即跟进 Issue #646 以修复 Clippy 警告并升级漏洞依赖，从而完全恢复 CI 状态。
*   **建议**: 优先合并 PR #645，随后立即处理 Issue #646 中的依赖升级和代码风格修正，以消除所有 P1-critical 阻塞项。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-24
**数据来源：** GitHub zeroclaw-labs/zeroclaw

## 1. 今日速览
过去24小时，ZeroClaw 项目保持高活跃度，共处理 50 条 Issue 和 50 条 PR。虽然无新版本发布，但核心稳定性与安全性得到显著加强，特别是针对 Telegram 和 WeChat 通道的数据丢失 Bug、Cron 任务死锁问题以及配置并发写入冲突进行了紧急修复。社区对 A2A 协议互操作性及多代理路由的讨论持续升温，显示开发者正聚焦于增强异构 Agent 生态的连接能力。整体项目健康度良好，但在桌面端兼容性（Linux AppImage/Windows Installer）和长期运行的 Session 性能上仍存在若干需关注的痛点。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在修复严重 Bug 和优化基础设施：
*   **Telegram 媒体处理修复 (#9321, #8955):** 修复了未授权媒体消息通知遗漏的问题，并实现了媒体组批量附件支持，提升了 Telegram 通道的用户体验。
*   **Cron 任务稳定性 (#9320):** 为 Cron Agent 作业添加了墙钟超时机制，解决了因 Provider 无响应导致的锁持有问题，防止任务无限挂起。
*   **配置系统健壮性 (#9310, #9297, #9299):** 修复了嵌套 `set_prop` 错误掩码、含点号的 Map Key 保存失败问题，并将 `context_compression.enabled` 默认值设为 false 以匹配实际状态。
*   **发布流程修复 (#9295):** 恢复了 Scoop 包发布工作流，确保 Linux AppImage 下载链接有效并改进检测逻辑。
*   **PostgreSQL 支持 (#9251):** 作为首个受支持的会话后端，证明了 PostgreSQL 路径的完整性，为未来多数据库支持奠定基础。

## 4. 社区热点
以下 Issue 评论数较多，反映了社区关注焦点：
*   **[Tracker]: A2A protocol interoperability (#3566)** - *9 条评论, 7 👍*
    *   **分析:** 用户强烈渴望 ZeroClaw 原生支持 A2A 协议，以便与其他 Agent（如 NanoClaw, OpenClaw）通过 HTTP 通信。这是构建去中心化 Agent 生态的关键一步。
*   **Multi-Agent Routing (#2767)** - *7 条评论, 9 👍*
    *   **分析:** 多代理路由功能获得极高支持率，用户希望在一个 Gateway 实例中运行多个隔离的 Agent 并通过绑定路由入站消息，类似于 OpenClaw 的实现。
*   **RFC: Abstract a `KeySource` trait (#9127)** - *7 条评论*
    *   **分析:** 针对密钥管理的 RFC 讨论深入，旨在分类主密钥材料，反映用户对安全架构抽象化的专业需求。
*   **Discord Bot respond only in specific channels (#6378)** - *8 条评论*
    *   **分析:** 用户希望 Discord 机器人能像 Matrix 一样限制响应频道，提升隐私和控制力。

## 5. Bug 与稳定性
今日报告了多个高严重程度的 Bug，部分已有 Fix PR：
*   **S0 - 数据丢失风险:**
    *   **#9188 (Telegram long-poll offset 提前推进):** 导致消息丢失。*状态: Open*
    *   **#9187 (WeChat sync cursor 持久化过早):** 崩溃后丢失入站消息。*状态: Open*
*   **S1 - 工作流阻塞:**
    *   **#9204 (Landlock sandbox 限制 Daemon):** Landlock 策略导致 SQLite 内存访问等问题。*状态: Open*
    *   **#9191 (Cron agent jobs 无墙钟超时):** 导致锁无法释放。*状态: Open -> Fix PR #9320 已提交*
    *   **#9290 (Windows desktop installer 缺失 TaskDialogIndirect):** Windows 客户端无法启动。*状态: Open*
    *   **#9207 (web_fetch 返回压缩垃圾数据):** 影响 Web 工具可用性。*状态: Open*
*   **S2 - 降级行为:**
    *   **#9284 (Config flush 覆盖并发写入):** 配置保存竞态条件。*状态: Open -> Fix PR #9297/#9310 相关*
    *   **#9092 (ZeroCode keystrokes lag):** 长 Session 渲染历史导致卡顿。*状态: Open -> Fix PR #9317 已提交*
    *   **#8999 (ZeroCode Ollama 流式输出被误读):** 小模型将日志误认为协议数据。*状态: Open*

## 6. 功能请求与路线图信号
*   **A2A 协议原生支持 (#3566):** 明确的功能请求，可能与 v0.9.0 的安全/网关重构有关联。
*   **多代理路由 (#2767):** 长期呼声最高的功能之一，可能纳入 v0.9.0 或后续版本。
*   **外部命令生命周期钩子 (#3696):** 允许在消息处理前后执行 Shell 脚本，增强自动化能力。
*   **TOTP 跨通道审批 (#3767):** 提升关键工具调用的安全性，要求 2FA。
*   **内存整合使用 Schema 验证的工具调用 (#4760):** 提高内存管理的可靠性。
*   **评估结果仪表盘 (#9228):** 增加对测试套件通过率的历史趋势追踪。

## 7. 用户反馈摘要
*   **痛点:**
    *   **配置复杂性:** 用户抱怨配置项（如 `allowed_channels`）在不同通道间不一致，希望统一模式。
    *   **调试困难:** 日志输出到 stdout 而非 stderr (#4721) 干扰了脚本解析。
    *   **桌面体验:** Linux 下 AppImage 检测失败 (#9202)，Windows 安装器崩溃 (#9290)，UI 在长会话中卡顿 (#9092)。
    *   **安全误报:** LeakDetector 对合法的高熵文件名（如 MD5 哈希）进行红acted (#4832)。
*   **满意点:**
    *   **模块化设计:** 用户认可 `#[secret]` 加密和 `#[credential_class]` 元数据系统的安全性基础。
    *   **开源协作:** 社区对 A2A 协议支持和多代理路由的积极参与表明对项目愿景的认可。

## 8. 待处理积压
*   **#9188 & #9187:** Telegram 和 WeChat 通道的数据丢失 Bug 严重程度为 S0，需优先处理。
*   **#9204:** Landlock 沙箱限制 Daemon 自身的问题阻碍了某些部署场景。
*   **#9290:** Windows 桌面安装器崩溃影响新用户获取。
*   **#9207:** web_fetch 工具在压缩响应上的失败影响 Web 搜索类 Agent 的工作流。
*   **#8999:** ZeroCode 与 Ollama 等本地模型的集成问题，影响边缘计算场景用户体验。

---
*免责声明：本报告基于提供的 GitHub 数据生成，旨在提供客观的项目状态分析。*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*