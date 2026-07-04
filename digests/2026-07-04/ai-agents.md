# OpenClaw 生态日报 2026-07-04

> Issues: 314 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-04 01:55 UTC

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
**日期：** 2026-07-04
**数据来源：** GitHub openclaw/openclaw

## 1. 今日速览
2026年7月4日，OpenClaw 项目保持极高活跃度，过去24小时内产生 **314 条 Issue** 和 **500 条 PR** 更新。尽管没有新版本的正式 Release，但内部维护工作极为密集，主要集中在底层基础设施的重构（如 PR #99746, #99755 等）以及针对近期回归问题的紧急修复。社区对安全性（Secret 管理）、多代理协作稳定性以及 iOS/macOS 客户端体验的关注度显著提升。整体来看，项目正处于从“功能迭代”向“架构加固与体验优化”转型的关键阶段，维护者正在积极清理技术债务并修补高优先级漏洞。

## 2. 版本发布
*   **无新版本发布。**
*   注：近期发布的 `v2026.6.11` 已被报告存在多个严重回归问题（如 Issue #98416, #98528），当前社区焦点在于修复这些遗留问题，而非推出新版本。

## 3. 项目进展
今日合并/活跃的关键 PR 主要集中在**底层重构**、**安全加固**和**客户端体验优化**：

*   **基础设施与安全重构 (High Impact):**
    *   **PR #99746**: 整合秘密（Secret）原语，统一了密钥掩码和常量时间比较逻辑，提升了审计安全性。
    *   **PR #99755**: 重构策略无关的延迟 Promise，统一了生命周期管理。
    *   **PR #99753**: 整合中止原语（Abort Primitives），防止错误处理和监听器清理在不同路径间漂移。
    *   **PR #99744**: 整合有界的 HTTP 主体读取，解耦了媒体包与传输基础设施的耦合。
    *   **PR #99740**: 整合工具结果辅助函数，减少插件间的代码重复。
    *   *分析*: 维护者 RomneyDa 正在进行大规模的代码标准化工作，旨在降低长期维护成本并提高核心运行时的一致性。

*   **客户端与平台修复:**
    *   **PR #99752**: 修复 macOS 登录项 plist 中的环境变量保留问题，确保自定义配置在重启后生效。
    *   **PR #99243**: 打磨 iOS 应用引导流程和聊天界面修复，提升移动端用户体验。
    *   **PR #99426**: 为 iOS 聊天输入框添加斜杠命令选择器，解决命令发现难的问题。
    *   **PR #99748**: 修复嵌入式代理在重试时剥离过期的思考签名（Thinking Signatures），解决 `replay_invalid` 错误。

*   **功能增强:**
    *   **PR #83600**: 支持 WhatsApp 列表回复操作，增强了业务交互能力。
    *   **PR #99184**: 修复 Anthropic 兼容提供商返回结构化无效请求错误时的故障转移问题。

## 4. 社区热点
以下 Issue 因高评论数和关键性成为今日讨论焦点：

*   **[P1] Text between tool calls leaks to messaging channels (#25592)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/25592
    *   *热度*: 33 条评论, Diamond Lobster 评级。
    *   *分析*: 用户强烈抱怨代理在工具调用之间产生的内部文本（如错误处理、叙述）泄露到 Slack/iMessage 等频道，造成严重的 UX 污染和安全隐患。这是目前最受关注的 P1 级别 Bug。

*   **[Tracker] Codex worker runaway hardening sprint (#99551)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/99551
    *   *热度*: 14 条评论。
    *   *分析*: 针对 Codex 工作进程失控问题的专项硬化追踪。社区关注点在于如何在不完全改变现有 PR 的情况下，防止私有转录本泄露并增强失败模式处理。

*   **Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys (#10659)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/10659
    *   *热度*: 13 条评论, 4 👍。
    *   *分析*: 安全敏感型用户提出代理应能“使用”但“看不见” API Key，以防止提示注入导致的凭证泄露。这与今日 PR #99746 的安全重构形成呼应，显示社区对安全原语的迫切需求。

*   **Bug: 180s compaction timeout is a single wall clock over the whole chunk pipeline (#92043)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/92043
    *   *热度*: 11 条评论, 3 👍。
    *   *分析*: 报告了压缩超时机制的缺陷，导致长历史会话必然失败。这是一个影响稳定性的核心架构问题。

## 5. Bug 与稳定性
今日报告的 Bug 多为**回归问题（Regression）**，主要影响 `v2026.6.x` 系列版本：

*   **P1: [Bug] v2026.6.11 published dist missing reentrancy guard (#98416)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/98416
    *   *描述*: 版本发布时遗漏了重入保护，导致会话初始化冲突。
    *   *状态*: 已有相关修复逻辑在 PR #99748 中提及（针对类似 replay 问题）。

*   **P1: [Bug]: Tool output (exec, web_fetch, web_search) returns empty after first call per turn [2026.6.11 regression] (#98528)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/98528
    *   *描述*: 同一回合内后续工具调用返回空输出，严重影响多步推理任务。
    *   *状态*: 标记为回归，需紧急修复。

*   **P1: [Bug] "Cannot convert undefined or null to object" in 2026.3.2 (#38327)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/38327
    *   *描述*: Google Vertex/Gemini 模型集成中的类型转换错误，导致代理崩溃。

*   **P1: Bug: subagents list still empty after spawn (#75593)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/75593
    *   *描述*: 子代理创建后列表为空，影响多代理协作流程。

*   **Medium: iOS/WebChat messages append to transcript but do not trigger/deliver assistant replies (#97983)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/97983
    *   *描述*: 消息发送后无响应，涉及交付工具链问题。

*   **Medium: Agent's final agent_message stranded when LLM forgets to call configured delivery tool (#85714)**
    *   *链接*: https://github.com/openclaw/openclaw/issues/85714
    *   *描述*: LLM 忘记调用交付工具导致消息丢失，缺乏回退机制。

## 6. 功能请求与路线图信号
*   **动态模型发现 (#10687)**: 用户强烈要求支持 OpenRouter 等提供商的动态模型目录，而非静态硬编码。这符合当前多提供商集成的趋势。
*   **Slack Block Kit 支持 (#12602)**: 希望富文本交互消息进入 Slack，提升企业级集成体验。
*   **内置自动更新 (#12855)**: 请求类似 IDE 的自动更新机制，带确认和通知，减少手动运维负担。
*   **技能权限清单标准 (#12219)**: 随着插件生态发展，用户要求标准化的 `skill.yaml` 权限声明，以增强安装前的透明度。
*   **多代理协作增强 (#35203)**: 提出能力画像、共享黑板和分层内存，显示用户对复杂多代理工作流的高级需求。

## 7. 用户反馈摘要
*   **痛点**:
    *   **信息泄露**: 用户极度反感代理内部状态（如工具间文本）泄露到聊天频道（Issue #25592）。
    *   **错误晦涩**: 缺少 `sharp` 包时出现的“Failed to optimize image”错误让用户无法排查（Issue #73148）。
    *   **稳定性焦虑**: `v2026.6.11` 引入的工具输出为空和重入问题破坏了生产环境的可靠性（Issue #98416, #98528）。
*   **满意/期待**:
    *   **iOS 改进**: 用户对 iOS 端的命令选择器和引导流程优化表示期待（PR #99426, #99243）。
    *   **安全增强**: 用户对 Secret 掩码和权限隔离功能（Issue #10659, #6615）表现出高度关注和点赞。

## 8. 待处理积压
*   **Image Tool Fallback (#73148)**: 长期存在的图片优化工具错误处理问题，缺乏清晰的错误提示。
*   **Compact Timeout Logic (#92043)**: 压缩超时机制的架构缺陷，需要重新设计以支持部分进度重用。
*   **Model Fallback on Context Length (#9986)**: 当上下文长度超出限制时，代理冻结而非自动回退到备用模型，影响长对话稳定性。
*   **Stale Module Imports (#92241)**: 网关在更新/回滚后持有过时的模块导入路径，导致消息静默丢弃，这是一个严重的运维陷阱。

---

## 横向生态对比

# 2026-07-04 个人 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
2026年7月，个人 AI 智能体开源生态呈现出**“从功能堆砌向架构加固与体验优化转型”**的显著特征。头部项目如 OpenClaw、Hermes Agent 和 NanoBot 正集中解决多代理协作（Multi-Agent）、MCP 协议稳定性及内存管理等核心痛点，标志着行业进入深水区。同时，生态内部出现明显的**垂直分化**：部分项目聚焦于企业级安全与合规（如 IronClaw 的 Reborn 架构、ZeroClaw 的 SOP 引擎），而另一些则致力于降低部署门槛与跨平台兼容性（如 PicoClaw 的移动端适配、LobsterAI 的 Cowork 模式）。整体健康度取决于项目能否在快速迭代中有效遏制技术债务与安全漏洞。

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issues | 今日 PR | Release 状态 | 健康度评估 | 核心关注点 |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 314 | 500 | 无 (修复回归) | ⭐⭐⭐⭐⭐ | 底层重构、安全加固、iOS/macOS 体验 |
| **NanoBot** | 29 | 38 | 无 (密集修复) | ⭐⭐⭐⭐ | MCP 稳定性、记忆系统优化、Anthropic 兼容 |
| **Hermes Agent** | 50 | 50 | 无 (审查中) | ⭐⭐⭐⭐ | 安全凭证泄露修复、多租户隔离、Docker 体验 |
| **PicoClaw** | 2 | 17 | v0.3.1 (昨日) | ⭐⭐⭐ | 渠道重连机制、Agent 协作总线、Android 适配 |
| **NanoClaw** | 1 | 17 | 无 (积压审查) | ⭐⭐⭐ | 渠道适配 (LINE/Signal)、Token 效率优化 |
| **NullClaw** | 1 | 0 | 无 (静默期) | ⭐⭐ | Telegram 长连接稳定性 |
| **IronClaw** | ~10+ | ~10+ | 组件版本升级 | ⭐⭐⭐⭐ | Reborn 架构集成、身份认证重构、CI 修复 |
| **LobsterAI** | 0 | 16 | v2026.7.3 | ⭐⭐⭐⭐ | Cowork 协作模式、大会话渲染性能 |
| **CoPaw** | 39 | 33 | 无 (Beta 测试) | ⭐⭐⭐⭐ | 上下文压缩稳定性、内存检索、Tauri 重构 |
| **ZeroClaw** | 36 | 50 | 无 (v0.8.3 预备) | ⭐⭐⭐⭐ | SOP 引擎安全、WASM 插件隔离、OIDC 认证 |
| **TinyClaw** | 0 | 0 | 无 | ⭐ | 无活动 |
| **Moltis** | 0 | 0 | 无 | ⭐ | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⭐ | 无活动 |

## 3. OpenClaw 在生态中的定位
*   **生态领导者与技术标杆**：以 **314 Issues / 500 PRs** 的惊人活跃度远超其他项目，显示出其作为核心基础设施的地位。其维护者 RomneyDa 主导的底层重构（Secret 管理、Promise 生命周期）为行业树立了工程规范。
*   **技术路线差异**：不同于 NanoBot 的轻量级 CLI 导向或 LobsterAI 的桌面应用导向，OpenClaw 正演变为一个**高度模块化的运行时平台**，强调多代理协作的稳定性与跨平台客户端（iOS/macOS）的深度集成。
*   **社区规模与影响力**：其 Issue #25592（工具间文本泄露）和 #10659（Secret 掩码）的高热度表明，OpenClaw 用户群体多为高阶开发者和企业用户，对**安全性**和**UX 纯净度**有极致要求，其技术决策往往引领整个开源生态的标准制定。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与分析 |
| :--- | :--- | :--- |
| **MCP 协议稳定性与安全性** | NanoBot, Hermes Agent, NanoClaw, ZeroClaw | **痛点**：MCP 工具调用异常导致进程崩溃 (NanoBot #4652)、Schema 泄露 (NanoClaw #2917)。<br>**趋势**：社区急需更健壮的错误处理机制、沙箱隔离及 Token 效率优化。 |
| **多代理协作 (Multi-Agent)** | OpenClaw, PicoClaw, LobsterAI, CoPaw | **需求**：从简单的子代理调用转向**结构化协作**。<br>**表现**：OpenClaw 强化代理间通信；PicoClaw 引入协作总线；LobsterAI 推出 Goal Mode；CoPaw 探索多工作空间。 |
| **上下文管理与记忆优化** | NanoBot, CoPaw, OpenClaw | **痛点**：短期记忆丢失 (NanoBot #4044)、上下文压缩导致“失忆” (CoPaw #5746)。<br>**趋势**：引入 Reranker 增强检索 (CoPaw)、优化滚动窗口策略、防止关键信息在合并中被丢弃。 |
| **跨平台渠道适配** | OpenClaw, PicoClaw, NanoClaw, LobsterAI | **需求**：WhatsApp/Signal/Telegram 的长连接稳定性。<br>**表现**：PicoClaw 和 NanoClaw 重点修复重连机制；LobsterAI 增强 IM 多实例校验；OpenClaw 优化 iOS/macOS 原生体验。 |
| **安全与隐私加固** | OpenClaw, Hermes Agent, ZeroClaw, IronClaw | **痛点**：Secret 泄露 (OpenClaw #10659, Hermes #48441)、Zip-Bomb 攻击 (ZeroClaw #8554)。<br>**趋势**：引入 OIDC 多租户认证 (ZeroClaw/IronClaw)、掩码原语、权限最小化原则。 |

## 5. 差异化定位分析

*   **OpenClaw**: **全功能平台型选手**。适合需要高度定制化、多代理复杂协作及跨平台原生体验的开发者和企业。技术栈深厚，但维护成本高。
*   **NanoBot**: **轻量级 CLI/开发者工具**。适合追求快速部署、基于 Anthropic 生态的开发者。优势在于简洁和快速迭代，劣势在于 Windows 兼容性和内存管理尚待完善。
*   **LobsterAI**: **桌面应用与协作体验导向**。由网易有道支持，强项在于 Cowork 模式的 UX 设计和 macOS 原生体验，适合普通用户和非技术背景的多代理协作者。
*   **Hermes Agent & IronClaw**: **企业级/安全敏感型选手**。Hermes 侧重多租户和 Docker 部署的安全隔离；IronClaw 的 Reborn 架构强调类型安全和基础设施即代码。适合对合规性和稳定性有高要求的场景。
*   **PicoClaw & NanoClaw**: **渠道连接与边缘计算**。PicoClaw 侧重多渠道（WhatsApp/Signal）的稳定性与 Android 适配；NanoClaw 侧重亚洲市场渠道（LINE/Signal）及本地模型效率。
*   **CoPaw & ZeroClaw**: **前沿技术探索者**。CoPaw 聚焦于 Qwen 生态及上下文算法优化；ZeroClaw 探索 WASM 插件隔离和 SOP 引擎，适合喜欢尝鲜和构建高度自动化工作流的技术极客。

## 6. 社区热度与成熟度

*   **快速迭代/高热度阶段**：
    *   **OpenClaw**: 绝对的中心，讨论最激烈，技术债务清理压力大。
    *   **CoPaw**: 处于 v2.0 Beta 的关键测试期，上下文管理等核心算法问题频发，社区参与度高。
    *   **ZeroClaw**: 功能扩展迅速，SOP 和 WASM 等新特性吸引大量技术探讨。
*   **质量巩固/稳定修复阶段**：
    *   **NanoBot**: 从功能添加转向 MCP 稳定性和记忆优化的深度修复，进入“填坑”期。
    *   **IronClaw**: 专注于 Reborn 架构的内部整合与 CI 稳定性，代码质量要求极高。
    *   **Hermes Agent**: 大量 PR 处于审查阶段，重点在于安全漏洞修补和配置便利性提升。
*   **垂直深耕/平稳发展阶段**：
    *   **LobsterAI**: 版本发布节奏稳定，专注于 UX 细节和协作模式打磨。
    *   **PicoClaw/NanoClaw**: 关注特定渠道和平台的适配问题，社区相对小众但粘性高。
*   **低活跃度/观望阶段**：
    *   **NullClaw, TinyClaw, Moltis, ZeptoClaw**: 活动极少，可能处于维护模式或开发停滞，需谨慎评估长期支持风险。

## 7. 值得关注的趋势信号

1.  **“确定性”取代“随机性”成为核心指标**：
    *   用户不再满足于代理能“偶尔”完成任务，而是要求 SOP 引擎 (ZeroClaw)、审批门控 (ZeroClaw) 和重入保护 (OpenClaw) 等机制确保执行过程的**可预测性和安全性**。
2.  **上下文管理的“算法化”与“可视化”**：
    *   CoPaw 引入 Reranker，NanoBot 优化记忆守卫，OpenClaw 修复压缩超时。这表明**上下文不再是简单的 Token 堆积，而是需要主动管理、检索和压缩的知识资产**。
3.  **安全从“附加功能”变为“架构基石”**：
    *   从 Secret 掩码原语 (OpenClaw) 到 OIDC 多租户 (ZeroClaw/IronClaw) 再到 WASM 沙箱 (ZeroClaw)，**零信任架构**正在深入智能体内核。任何忽视凭证安全和进程隔离的项目都将被企业用户抛弃。
4.  **多渠道连接的“自愈能力”是标配**：
    *   WhatsApp/Signal 的重连机制 (PicoClaw/NanoClaw) 和 Telegram 心跳检测 (NullClaw/Hermes) 表明，**长连接的稳定性**已成为智能体作为“服务”而非“玩具”的基本门槛。
5.  **桌面端与 CLI 的分野加剧**：
    *   LobsterAI 和 OpenClaw (iOS/macOS) 深耕原生体验，而 NanoBot 和 Hermes 坚守 CLI/Docker。开发者需根据目标用户（普通用户 vs. 开发者）选择技术栈，**跨平台一致性**（如 Electron vs. Tauri vs. Native）将成为架构选型的关键考量。

**建议**：对于技术决策者，若追求极致控制和安全性，关注 **OpenClaw** 和 **IronClaw**；若侧重团队协作和易用性，**LobsterAI** 是优选；若构建自动化工作流，**ZeroClaw** 的 SOP 引擎值得深入研究；若需快速原型验证，**NanoBot** 依然具有敏捷优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-04
**数据来源：** GitHub HKUDS/nanobot

## 1. 今日速览
NanoBot 在过去 24 小时内保持极高的社区活跃度，共处理 29 个 Issues 和 38 个 PRs。项目重心主要集中在**稳定性修复**（特别是 MCP 连接崩溃、Windows 后端运行及 Anthropic Provider 兼容性问题）和**内存管理优化**上。虽然无新版本发布，但多项关键 Bug 修复（如 PR #4666, #4685, #4687）已合并或接近合并，显著提升了生产环境的健壮性。开发者对“短期记忆丢失”和“MCP 工具调用异常导致崩溃”等核心痛点响应迅速。

## 2. 版本发布
*   **无新版本发布。**
*   当前处于密集修复期，主要合并了针对 Anthropic 模型兼容性、MCP 错误处理和 WebUI 安全启动的补丁。

## 3. 项目进展
今日合并/关闭的关键 PR 推动了以下改进：
*   **Anthropic Provider 重大修复：**
    *   **PR #4685** (Closed): 修复了 `claude-sonnet-5` 因携带废弃的 `temperature` 参数导致的 400 错误，增加了回归测试覆盖。
    *   **PR #4687** (Closed): 更新了 Anthropic 默认模型从过时的 `claude-sonnet-4-20250514` 到 `claude-sonnet-4-6`，并同步更新了文档和测试 Mock。
*   **WebUI 与 CLI 体验提升：**
    *   **PR #4688** (Closed): 引入了安全的 WebUI 首次启动命令 `nanobot webui`，自动检查配置并提供快速开始流程，降低了新手门槛。
    *   **PR #4691** (Closed): 完善了可选插件功能的控制逻辑，增加了缺失依赖时的警告提示，提升了故障排查体验。
*   **MCP 稳定性增强：**
    *   **PR #4666** (Open): 解决了 MCP 工具调用返回畸形结果时导致的进程崩溃问题（Fix #4652），将异常转化为结构化错误而非直接 Crash。
*   **记忆系统优化：**
    *   **PR #4554** (Open): 为 Dream 系统添加了写入守卫，防止创建重复的技能文件（Skills），解决 #4467 提出的重复创建问题。

## 4. 社区热点
以下是今日讨论最激烈或最具代表性的议题：

*   **[Bug] Windows Gateway 后台运行崩溃**
    *   **Issue #4511**: 用户报告在 Windows 下使用 `--background` 模式重启后，进程信息与 JSON 记录不一致。
    *   **关联 PR #4690**: 正在修复 Windows 停止网关时的 `CTRL_BREAK_EVENT` 错误回退逻辑。
    *   *分析*: Windows 平台的跨平台兼容性仍是痛点，尤其是后台服务管理。

*   **[Feature] Anthropic OAuth 支持**
    *   **PR #4632** (Closed): 新增了 Anthropic OAuth 提供商支持，允许使用 `claude-code` 生成的令牌。
    *   **Issue #4675** (Closed): 指出默认模型过时问题，已通过 PR #4687 解决。
    *   *分析*: 用户强烈希望利用 Claude Code 的订阅优势，OAuth 支持填补了这一生态缺口。

*   **[Bug] MCP 重连导致 Gateway 崩溃**
    *   **Issue #4302**: 会话终止后 MCP 重连导致 Gateway 崩溃。
    *   **Issue #4652**: MCP 工具调用异常直接导致进程退出。
    *   *分析*: MCP 作为核心扩展能力，其稳定性至关重要。今日合并的 PR #4666 是重大进步，但 #4302 的重连逻辑仍需进一步观察。

*   **[Enhancement] 短期记忆丢失 (Context Window Pressure)**
    *   **Issue #4044**: 多轮对话中 Agent 忘记之前的问题。
    *   **关联 PR #4280**: 尝试通过优化上下文构建逻辑来保留消息历史。
    *   *分析*: 这是用户感知最强的痛点之一，涉及复杂的上下文窗口管理和 Consolidation 策略，社区关注度极高。

## 5. Bug 与稳定性
今日报告的高严重度 Bug 及状态：

| Issue ID | 描述 | 严重程度 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **#4652** | MCP 工具调用异常导致 Nanobot 进程直接崩溃 | **P0 (Critical)** | **Fixed by PR #4666** (Open/Merged pending) |
| **#4302** | MCP 重连后 Gateway 崩溃 | **P1 (High)** | 关联 PR #4666 可能缓解，需验证 |
| **#4683** | Anthropic `claude-sonnet-5` 因 temperature 参数报错 400 | **P1 (High)** | **Fixed by PR #4685** (Closed/Merged) |
| **#4511** | Windows `--background` 模式重启后进程信息不一致 | **P1 (High)** | **Fixing in PR #4690** (Open) |
| **#4307** | 后回合整理 (Post-turn consolidation) 擦除 Agent 自身回复，导致引用丢失 | **P2 (Medium)** | 未直接修复，属 Memory 逻辑缺陷 |
| **#3626** | Telegram Long Polling 静默挂起 | **P2 (Medium)** | 网络层问题，暂无代码修复 PR |

*注：Issue #4044 (短期记忆丢失) 虽被标记为 Bug，但更倾向于架构优化需求，目前由 PR #4280 进行探索性修复。*

## 6. 功能请求与路线图信号
基于今日 Issues 和 PRs，以下功能极有可能进入下一版本：

1.  **只读历史记录搜索工具 (`search_history`)**:
    *   **Issue #4440** & **PR #4439**: 用户渴望在不污染当前上下文窗口的情况下检索过往对话摘要。PR #4439 提供了具体的实现方案，预计将被采纳。
2.  **Cron 任务模型预设支持**:
    *   **Issue #4218** (WebUI Cron 管理) & **PR #4622** (Cron 模型预设): 用户希望定时任务能独立于主 Agent 使用不同的模型或配置，以降低成本或优化效果。PR #4622 实现了底层支持。
3.  **子代理 MCP 服务访问权限**:
    *   **Issue #4166**: 当前子代理无法访问父级配置的 MCP 服务。这是一个合理的增强请求，有助于复杂工作流的编排。
4.  **Heartbeat 专用模型覆盖**:
    *   **Issue #4431**: 建议心跳服务使用更廉价或专用的模型，而非主 Agent 模型。这符合成本优化的趋势。
5.  **原生 Agent-to-Agent (A2A) 编排**:
    *   **Issue #4179**: 用户希望在一个实例内实现多 Agent 协作（如 Supervisor -> Worker）。目前仍停留在提议阶段，尚无具体 PR。

## 7. 用户反馈摘要
*   **正面反馈**:
    *   用户对 `nanobot webui` 安全启动命令 (#4688) 表示欢迎，认为这简化了部署流程。
    *   Anthropic OAuth 支持 (#4632) 解决了订阅用户的痛点，无需再寻找 API Key。
*   **负面/痛点反馈**:
    *   **记忆断层**: 用户频繁抱怨“短期记忆丢失” (#4044) 和“后回合整理擦除回复” (#4307)，导致对话连贯性差，需要 Agent “回忆” 上下文。
    *   **MCP 脆弱性**: 多个 Issue (#4652, #4302) 指出 MCP 工具调用失败会导致整个进程崩溃，用户体验极差，期望更优雅的降级或重试机制。
    *   **Windows 兼容性**: Windows 用户在后台服务和进程管理上遇到较多非预期行为 (#4511)。

## 8. 待处理积压
建议维护者优先关注以下长期未决或高热度 Issue：

1.  **Issue #4044**: `[bug] short term memory loss` (Created 2026-05-28, 6 Comments)
    *   *理由*: 核心功能缺陷，影响几乎所有用户的多轮对话体验。PR #4280 提供了思路，但尚未完全解决。
2.  **Issue #3846**: `[enhancement] keep skill content in multi-turn conversations` (Created 2026-05-15, 5 Comments)
    *   *理由*: 技能定义在多轮对话中易丢失，影响 Agent 行为一致性。
3.  **Issue #3626**: `Telegram long polling silently hangs` (Created 2026-05-05, 4 Comments)
    *   *理由*: 通道稳定性问题，静默挂起难以排查，需增加心跳检测或重连机制。
4.  **Issue #4179**: `Native Agent-to-Agent (A2A) Orchestration` (Created 2026-06-03, 2 Comments)
    *   *理由*: 高级用户的功能请求，若实现将极大提升 NanoBot 作为多 Agent 框架的能力。
5.  **Issue #4061**: `OpenAI-compatible text-format tool calls are not parsed` (Created 2026-05-29, 6 Comments)
    *   *理由*: 兼容性问题，影响使用非标准 Structured Outputs 的 LLM 提供商，需增强解析器鲁棒性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-04  
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 项目今日保持极高的开发活跃度，过去24小时内共产生100个更新（50 Issues + 50 PRs），其中仅7个PR被合并/关闭，显示大量代码处于审查或测试阶段。安全性是今日的核心焦点，多个高优先级（P1/P2）Issue 和 PR 涉及 OAuth 凭证泄露、终端快照敏感信息暴露以及多租户环境下的权限隔离问题，表明团队正在紧急加固安全边界。同时，桌面端（Desktop）和 Gateway 的多重配置（Multiplexing）稳定性成为主要技术挑战，出现了一系列关于会话状态、数据库锁死及异步调用的 Bug。尽管无新版本发布，但底层架构的健壮性修复正在进行中。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在修复阻塞性 Bug 和安全漏洞，为后续稳定版本铺路：

*   **[PR #58012] feat(achievements): add export endpoint and agent summary**  
    *   **状态：** Closed/Merged  
    *   **进展：** 实现了成就系统的导出接口和代理摘要功能，解决了成就数据被困在 `state.json` 中的问题，提升了可观测性。
*   **[PR #57999] feat(telegram): add external callback handlers**  
    *   **状态：** Closed/Merged  
    *   **进展：** 为 Telegram 平台添加了外部回调处理器支持，允许通过本地脚本处理特定前缀的 `callback_data`，增强了 Telegram 网关的灵活性。
*   **[PR #56074] fix: reset in-memory _openrouter_catalog_cache on /model --refresh**  
    *   **状态：** Closed/Merged  
    *   **进展：** 修复了模型刷新命令因内存缓存未重置而导致返回过时数据的问题，CLI 体验得到改善。
*   **[PR #51592] fix(docker): avoid overlayfs copy-up storm in chmod/chown**  
    *   **状态：** Closed/Merged  
    *   **进展：** 优化了 Docker 构建过程中的权限设置，避免了因递归操作导致的性能损耗（copy-up storm），提升了镜像构建效率。

## 4. 社区热点
以下 Issue 和 PR 获得了最高的关注度（评论数/点赞数）：

*   **GitHub Issue #12058** [Bug]: OpenAI Codex OAuth works in CLI, but Telegram gateway replies No Codex credentials stored  
    *   **热度：** 5 评论, 0 👍  
    *   **分析：** 用户报告了跨平台认证不一致的问题，反映出多网关环境下 OAuth 状态同步的复杂性。
*   **GitHub Issue #48441** [Security] Terminal session snapshots leak .env secrets to disk in plaintext  
    *   **热度：** 5 评论, 1 👍  
    *   **分析：** 这是一个严重的安全披露，指出终端快照明文存储环境变量。此类高敏感性问题通常会引起社区对隐私保护的强烈关注。
*   **GitHub Issue #12188** [Feature]: Setting `hermes model` config/settings inside Docker compose as env variables  
    *   **热度：** 5 评论, 2 👍  
    *   **分析：** 用户希望改进 Docker 部署的配置便利性，反映了容器化用户对“环境变量优先”配置模式的强烈需求。
*   **GitHub Issue #7269** [Question] Whatsapp groups and require_mention: true, only reply to allowed users  
    *   **热度：** 4 评论, 0 👍  
    *   **分析：** 关于 WhatsApp 群组权限控制的疑问，显示了用户在非 DM 场景下对精细化访问控制的需求。
*   **GitHub Issue #17790** Make Discord voice inactivity timeout configurable  
    *   **热度：** 4 评论, 0 👍  
    *   **分析：** 针对 Discord 语音频道固定超时时间的功能请求，体现了高级用户对工作流持久化的需求。

## 5. Bug 与稳定性
今日报告了大量 P1-P3 级别的 Bug，主要集中在 Gateway 并发、桌面端稳定性和安全边界：

*   **P1 [Security/Auth]**
    *   **#48441**: 终端快照泄露 `.env` 明文密钥。*(关联 PR #58006 试图修复 OAuth 文件的原子写入和权限问题)*
    *   **#48534**: Anthropic Max OAuth 因 User-Agent 被拒导致 Token Exchange 失败。
    *   **#54675**: 多租户 Gateway 中，二级 Profile 错误使用默认 Profile 的 Bot Token。*(关联 PR #57563 正在修复多重配置凭据隔离问题)*
*   **P2 [Gateway/Agent/Core]**
    *   **#58010**: `AsyncSessionDB` 缺少 `await` 导致 `/resume` 命令崩溃。
    *   **#57967**: `hermes kanban create` 在网关争用下静默失败（Commit 前返回 ID）。
    *   **#57903**: Desktop 异步 LLM 调用忙轮询阻塞 WebSocket 循环。
    *   **#57861**: Cron 触发的会话无法挂载 Composio MCP 工具。
    *   **#58003**: SQLite 忙超时过短（1s）导致 Gateway/Dashboard 共享 `state.db` 时频繁锁死。*(关联 PR #58003 已将超时增至 30s)*
*   **P3 [Desktop/Platform]**
    *   **#57911**: Desktop 远程连接时新会话落入错误的项目目录。
    *   **#57968**: Windows Desktop 更新后侧边栏“最近会话”列表消失。
    *   **#56747**: Windows Desktop 运行时闪烁空白终端窗口。
    *   **#57905**: Windows `computer_use` 工具忽略 `cua-driver` 输出导致窗口发现为空。

## 6. 功能请求与路线图信号
*   **自动化迁移工具**: **#524** 提出首次安装时自动检测并导入来自 Claude Code, Cursor 等竞品的配置。这符合降低新用户门槛的战略方向。
*   **Telegram 路由增强**: **#40173** 请求在一个 Gateway 进程中通过 `channel_profiles` 将不同聊天路由到不同 Profile，实现单一 Bot 多人格。
*   **本地媒体生成 UI**: **#46337** 要求在 Hermes Desktop 设置中暴露自定义本地 STT/TTS 和媒体生成提供商的配置界面。
*   **隐私安全的用量会计**: **#57973** 请求暴露基于模型的细粒度 MoA (Mixture of Agents) 用量统计，而非仅聚合数据。
*   **OpenAI Agents SDK 桥接**: **#57984** (PR) 正在添加受控的 OpenAI Agents SDK 桥接插件，表明项目正在积极整合主流生态标准。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍抱怨 Docker 部署的配置繁琐，缺乏直接的环境变量支持（#12188）；Telegram 和 Discord 网关在复杂场景（如群组、多 Profile）下的行为不符合直觉或存在 Bug（#7269, #54675）。
*   **安全焦虑：** 随着 Agent 能力的增强，用户对凭证泄露（#48441, #54675）极其敏感，特别是当涉及 `.env` 文件和 OAuth 令牌时。
*   **稳定性不满：** Desktop 端的异步处理和数据库锁死问题（#57903, #58010）导致用户体验中断，特别是 `/resume` 等核心功能的崩溃。
*   **正面反馈：** 用户认可 Hermes Desktop 作为原生应用的进步（#46337 提及），但对功能完整性仍有高期待。

## 8. 待处理积压
*   **Issue #57928** [BUG] - Telegram 文件附件在配合 `/steer` 命令时被丢弃。这是一个影响核心交互流程的 Bug，需尽快排查。
*   **Issue #57955** [Security] Terminal 工具缺乏受保护文件路径验证，可绕过 `SOUL.md` 写保护。需等待安全补丁合并。
*   **Issue #57569** [Bug] `auth.json` 缓存旧凭证导致重复请求。这可能影响使用多端点配置的用户。
*   **PR #56522** Handle provider errors encoded inside HTTP 200 SSE streams。该 PR 尚未合并，但解决了 OpenAI 兼容提供商的一个边缘情况错误处理问题，建议加快审查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-07-04
**数据来源：** GitHub API / PicoClaw Repository

## 1. 今日速览
PicoClaw 在 2026-07-04 保持高频活跃状态，过去 24 小时内提交了 **17 条 PR** 和 **2 条新 Issue**。项目正处于 v0.3.1 版本发布后的快速迭代期，核心焦点集中在**多渠道连接稳定性**（WhatsApp/Matrix 重连机制）、**配置迁移修复**以及**Agent 协作框架**的完善上。尽管有新版本发布，但社区仍报告了 Android 端服务启动失败及 WhatsApp WebSocket 超时等关键稳定性问题，显示多平台适配仍有优化空间。整体项目健康度高，代码贡献者活跃，但需关注遗留 Bug 的处理进度。

## 2. 版本发布
**当前版本：v0.3.1**

*   **发布时间：** 2026-07-03
*   **主要变更：**
    *   合并了 NearAI Provider 支持 (#2917)。
    *   引入了 Codex 存储锁类型断言修复 (#3053)。
    *   包含其他多项内部合并提交。
*   **注意事项：**
    *   本次发布为小版本更新，主要侧重于功能扩展和底层逻辑修复。
    *   建议用户检查 `build_info` 字段在 v2 到 v3 配置迁移中的兼容性（见 PR #3218 修复的问题）。

## 3. 项目进展
今日有 **5 条 PR 被合并/关闭**，主要涉及代码清理、Bug 修复和功能增强：

*   **Agent 会话管理优化：**
    *   **#3223 (Closed/Merged):** 修复了路由到非默认 Agent 时 `/clear` 命令清空错误会话的问题。确保多 Agent 环境下的会话隔离正确性。
    *   **#3142 (Closed/Merged):** 解决了 spawn 子任务中 `ForUser` 字段重复设置导致的消息重复投递问题，提升了异步子 Agent 完成的稳定性。
*   **代码质量与重构：**
    *   **#3128 (Closed/Merged):** 显式忽略 `web.go` 中搜索提供者函数在读取完整响应后 `resp.Body.Close()` 的错误，符合 Go 最佳实践，消除误报日志。
    *   **#3063 (Closed/Merged):** Deltachat Gateway 功能正式合入，并伴随文档更新。
*   **功能增强：**
    *   **#3156 (Closed/Merged):** 在 Pico 通道中发射每轮 LLM Token 使用情况，便于下游消费者追踪成本消耗。

**进展评估：** 项目正从“功能添加”转向“精细化治理”，特别是在多 Agent 协作和消息路由的边界条件处理上取得了显著进步。

## 4. 社区热点
今日最受关注的动态集中在**渠道稳定性修复**和**新架构探索**：

1.  **WhatsApp 与 Matrix 重连机制修复 (PR #3220, #3219)**
    *   **链接：** [PR #3220](https://github.com/sipeed/picoclaw/pull/3220), [PR #3219](https://github.com/sipeed/picoclaw/pull/3219)
    *   **分析：** 用户 `AMEOBIUS` 指出 WhatsApp 和 Matrix 在长时间运行后容易因网络波动永久断开且无法自动恢复。今日提交的 PR 引入了带退避策略的重连机制，直接回应了生产环境中对高可用性的迫切需求。
2.  **Agent 协作总线 (PR #2937)**
    *   **链接：** [PR #2937](https://github.com/sipeed/picoclaw/pull/2937)
    *   **分析：** 这是一个重大架构更新，引入了第一方内部 Agent 协作总线，支持邮件箱、隔离会话历史和结构化消息信封。这表明 PicoClaw 正在向更复杂的 Multi-Agent 系统演进。
3.  **Android 服务启动失败 (Issue #3182)**
    *   **链接：** [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)
    *   **分析：** 用户报告在 Android 上无法启动服务且无法更改路径，尽管拥有完全权限。该 Issue 标记为 `stale` 且无评论更新，可能暗示移动端适配存在深层兼容性问题。

## 5. Bug 与稳定性
今日报告了 **2 个开放 Bug**，均标记为 `stale`，需引起重视：

| 严重等级 | Issue ID | 标题 | 描述 | 状态 | 关联 PR/Fix |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **高** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android version | Android 服务无法启动，日志显示权限虽全但路径设置无效。 | Open/Stale | 暂无明确 Fix PR |
| **高** | [#3178](https://github.com/sipeed/picoclaw/issues/3178) | WhatsApp Websocket Timeout | WhatsApp 通过 Websocket 连接时发生超时，导致消息发送/接收中断。 | Open/Stale | PR #3220 可能缓解此问题，但 Issue 尚未关闭 |

*   **回归风险：** PR #3221 撤销了对 Sandbox FS Windows 路径处理的测试覆盖，因为引入了 `pkg/providers/openai_compat/provider.go` 中的日志导入错误。这提示近期合并的代码可能存在集成测试不足的问题。

## 6. 功能请求与路线图信号
基于今日 PR 和 Issue，可推断以下路线图方向：

1.  **模型容错与回退链：**
    *   **信号：** PR #3200 添加了可配置的默认模型回退链（Fallback Chain）。
    *   **解读：** 用户强烈需要在主模型失效时自动切换备用模型，以提升服务连续性。这将作为标准功能纳入后续版本。
2.  **隐私与安全通信渠道：**
    *   **信号：** Deltachat 网关的持续优化 (#3222, #3063) 以及 Simplex 通道类型的添加 (#3193)。
    *   **解读：** PicoClaw 正积极拓展去中心化或注重隐私的消息渠道，满足特定企业或极客用户的需求。
3.  **Discord 细粒度权限控制：**
    *   **信号：** PR #3217 增加了基于角色的访问控制（allow_roles）。
    *   **解读：** 社区希望在不改变基础白名单（allow_from）的情况下，通过 Discord 角色灵活管理 Bot 访问权限，这是企业级部署的关键需求。

## 7. 用户反馈摘要
*   **痛点：**
    *   **移动端体验差：** Android 用户反馈服务启动困难且配置项不可变，阻碍了移动端的普及。
    *   **长连接脆弱性：** WhatsApp 和 Matrix 用户反映长时间运行后连接静默断开，缺乏自愈能力，严重影响依赖 Bot 的自动化流程。
*   **满意度：**
    *   **Token 追踪：** 开发者用户对 PR #3156 引入的每轮 Token 使用量发射表示欢迎，有助于成本控制监控。
    *   **配置迁移便利化：** 用户感谢 PR #3218 修复了 v2 到 v3 迁移时的 `build_info` 报错，降低了升级门槛。

## 8. 待处理积压
以下 Issue/PR 长期未获响应或处于停滞状态，建议维护者优先处理以维持社区信任：

1.  **[BUG] Android version (#3182)**
    *   **创建时间：** 2026-06-26
    *   **最后更新：** 2026-07-03
    *   **风险：** 阻塞 Android 平台的正常使用，可能导致用户流失。
2.  **[BUG] WhatsApp Websocket Timeout (#3178)**
    *   **创建时间：** 2026-06-26
    *   **最后更新：** 2026-07-03
    *   **风险：** 虽然 PR #3220 提供了修复方案，但 Issue 尚未关联或关闭，需确认修复有效性并通知提问者。
3.  **[Stale] fix(whatsapp): reconnect after websocket drops (#3179)**
    *   **状态：** Open/Stale
    *   **备注：** 此 PR 由 `Alix-007` 提交，早于今日合并的 #3220。需确认 #3220 是否替代了此 PR，若已替代则应关闭此 PR。

---
*报告生成时间：2026-07-04*
*分析师：Agnes-2.0-Flash*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-07-04
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 项目在 2026-07-03 保持高频活跃，过去 24 小时内产生 **17 条 PR** 和 **1 条 Issue**。开发重心明显偏向于**渠道适配（Channel Adapters）**与**系统稳定性修复**，特别是针对 WhatsApp、Signal 和 LINE 等即时通讯平台的集成优化及底层会话管理逻辑的修正。虽然当日无新版本发布，但大量 PR 处于“待合并”状态（15条），表明核心维护者正在集中审查代码以准备后续发布。项目整体健康状况良好，社区贡献者活跃度高，但存在明显的积压审查压力。

## 2. 版本发布
*   **状态：** 无新版本发布。
*   **说明：** 当前处于功能迭代期，多个修复和新功能 PR 尚未合入主干，预计近期会有包含这些改动的版本更新。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在基础设施稳定性和兼容性修复上，为后续功能扩展扫清障碍：

*   **代理兼容性修复 (#2330 [CLOSED])：** 解决了 OneCLI 网关仅支持 CONNECT 模式导致 axios 客户端无法通过代理连接 MCP Server 的问题。这修复了一个关键的网络连通性 Bug，确保在使用代理环境时认证注入正常工作。
*   **资源泄漏修复 (#2920 [OPEN])：** 指出了 `container-restart.ts` 中的数据库连接泄漏问题以及文档过时问题。此类底层资源管理的修复对长期运行的 Agent 实例至关重要。
*   **技能碎片逻辑修复 (#2921 [OPEN])：** 修正了 `composeGroupClaudeMd` 中错误地将所有技能指令注入每组 CLAUDE.md 的问题，改为基于组技能选择进行过滤。这将显著降低 Token 消耗并提高配置准确性。
*   **新渠道接入 (#2918 [OPEN])：** 提交了 LINE Official Account 的原生适配器及技能支持，扩展了项目的消息渠道覆盖范围。

**整体推进：** 项目正从单纯的“功能堆砌”转向“精细化治理”，重点解决现有集成的稳定性（如 Signal/WhatsApp 的重连、会话状态处理）和配置正确性。

## 4. 社区热点
*   **本地模型 Token 开销问题 (#2917 [OPEN]):**
    *   **链接:** [Issue #2917](https://github.com/nanocoai/nanoclaw/issues/2917)
    *   **分析:** 用户报告在使用本地模型（如 Gemma4:31B）作为主要编排模型时，每次请求仍需发送完整的 MCP 工具 Schema（约 27k Tokens）。这是一个严重的性能瓶颈，直接影响了本地部署的经济性和响应速度。该 Issue 目前评论为 0，但痛点明确，急需官方确认是否能在非云端模型调用时动态裁剪 Schema。

*   **Signal 渠道消息丢失与附件读取失败 (#2694, #2695 [OPEN]):**
    *   **链接:** [PR #2694](https://github.com/nanocoai/nanoclaw/pull/2694), [PR #2695](https://github.com/nanocoai/nanoclaw/pull/2695)
    *   **分析:** 两个关联 PR 修复了 Signal 适配器的关键缺陷：私聊消息被静默丢弃以及容器内无法读取图片附件。这反映了 Signal 集成在早期版本中存在设计疏漏，社区对此类修复有迫切需求。

*   **Poll 循环重试机制优化 (#2184 [OPEN]):**
    *   **链接:** [PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184)
    *   **分析:** 修复了会话过期后错误地向用户展示原始错误信息的问题，改为静默重试。提升了用户体验的平滑度。

## 5. Bug 与稳定性
以下 Bug 按严重程度排序，均附有相关 PR：

1.  **高严重性：Signal 私聊消息静默丢失**
    *   **描述：** 由于未设置 `isMention`/`isGroup` 标志，路由器未自动创建 `messaging_group`，导致 DM 被丢弃。
    *   **状态：** 有 Fix PR (#2694)。
2.  **高严重性：Signal 图片附件不可读**
    *   **描述：** 主机路径未挂载至容器，导致 Agent 无法读取发送的图片。
    *   **状态：** 有 Fix PR (#2695)。
3.  **中严重性：容器重启时的数据库连接泄漏**
    *   **描述：** `openInboundDb()` 未在检查后关闭，导致文件描述符泄漏。
    *   **状态：** 有 Fix PR (#2920)。
4.  **中严重性：代理环境下 MCP 服务器连接失败**
    *   **描述：** axios 绝对形式 HTTP 请求被 OneCLI 拒绝。
    *   **状态：** 已合并 (#2330)。
5.  **低严重性：重复文本发送**
    *   **描述：** `send_message` 在轮次中间触发时产生重复文本。
    *   **状态：** 有 Fix PR (#2531)。

## 6. 功能请求与路线图信号
*   **LINE 官方账号支持：** PR #2918 添加了 LINE OA 的原生适配器和技能。这表明项目正在积极拓展亚洲市场的主流即时通讯平台，预计下一版本将正式支持 LINE。
*   **Google 联系人集成：** PR #2693 添加了 `/add-google-contacts-tool`，作为 Gmail 和 Google Calendar 技能的补充，完善了 Google Workspace 生态的工具链。
*   **CalDAV 日历工具：** PR #2530 添加了 CalDAV 工具，进一步丰富了日历管理能力，不局限于 Google Calendar。
*   **HTTP/SSE 传输支持：** PR #2208 支持 HTTP 和 SSE 传输的 MCP 服务器，增强了 MCP 协议的兼容性和灵活性。
*   **系统摘要技能：** PR #2863 添加了 `/setup-system-digest` 技能，可能用于生成每日/每周活动摘要，增强 Agent 的信息聚合能力。

## 7. 用户反馈摘要
*   **痛点：** 本地部署用户强烈关注 Token 效率。Issue #2917 明确指出，当使用本地模型时，沿用云端模型的完整 Schema 策略是不合理的，造成了巨大的资源浪费。
*   **满意度：** 用户对基础设施稳定性的修复（如会话重试、代理兼容）持正面态度，因为这些修复直接影响了使用的可靠性。
*   **场景：** 用户正在广泛尝试将 NanoClaw 集成到各种即时通讯平台（WhatsApp, Signal, LINE, Telegram 隐含在通用架构中），并对多平台一致性的体验有较高要求。

## 8. 待处理积压
维护者需重点关注以下长期未合并的 PR，它们涉及核心功能的可用性和稳定性：

*   **PR #2184:** Poll 循环重试逻辑修复（自 2026-05-02 开放）。
*   **PR #2208:** MCP 服务器 HTTP/SSE 传输支持（自 2026-05-03 开放）。
*   **PR #2348:** WhatsApp 重连机制修复（自 2026-05-08 开放）。
*   **PR #2530:** CalDAV 工具技能（自 2026-05-18 开放）。
*   **PR #2531:** 重复文本发送修复（自 2026-05-18 开放）。
*   **PR #2693:** Google 联系人工具（自 2026-06-06 开放）。
*   **PR #2694 & #2695:** Signal 渠道关键 Bug 修复（自 2026-06-06 开放）。
*   **PR #2863:** 系统摘要技能（自 2026-06-26 开放）。
*   **PR #2918:** LINE 渠道支持（自 2026-07-03 开放）。
*   **PR #2920:** 数据库泄漏修复（自 2026-07-03 开放）。
*   **PR #2921:** 技能碎片逻辑修复（自 2026-07-03 开放）。

**建议：** 鉴于 #2694/#2695 和 #2921 涉及数据正确性和资源管理，应优先审查合并。Issue #2917 需要产品负责人给出技术回应或指引。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：** 2026-07-04
**数据来源：** GitHub (nullclaw/nullclaw)

### 1. 今日速览
2026年7月4日，NullClaw 项目处于低活跃度的维护状态。过去24小时内无代码提交、Pull Request 合并或新版本发布，核心开发活动停滞。社区层面仅有一条关于 Telegram 集成稳定性的 Bug 报告被标记为活跃，反映出用户在使用长连接服务时面临非预期中断的问题。整体而言，项目当前处于“静默”期，主要依靠现有用户反馈来驱动潜在的后续修复。

### 2. 版本发布
**无新版本发布。**
截至报告时间，GitHub 上未检测到新的 Release 标签。建议维护者关注 #972 中的 Bug 是否需要在下一个补丁版本中优先修复。

### 3. 项目进展
**无新合并 PR。**
今日没有新的 Pull Request 被合并或关闭，这意味着项目的代码库在功能迭代和重构方面今日暂无实质性推进。开发重心似乎暂时从新功能构建转移到了后端稳定性或内部规划阶段。

### 4. 社区热点
**焦点 Issue: #972 [OPEN] [bug] telegram channel stop respond after some idle time**
*   **链接:** https://github.com/nullclaw/nullclaw/issues/972
*   **分析:** 这是目前唯一的活跃讨论点。用户 `i11010520` 报告了一个严重的生产环境问题：Telegram Channel 在夜间空闲后停止响应。尽管后端进程 (`nullclaw agent`) 仍在运行且内存计划正常解析，但前端交互能力丧失。
*   **诉求:** 社区急需确认这是否为 WebSocket 心跳丢失、Token 过期或 Telegram API 限流导致的连接断开问题。该 Issue 虽仅有 1 条评论，但涉及核心功能可用性，具有高优先级潜力。

### 5. Bug 与稳定性
**今日新增/活跃 Bug: 1 个**
1.  **[严重] Telegram 频道空闲后断连 (#972)**
    *   **描述:** 经过一夜或长时间空闲后，Telegram Channel 停止响应，表现为“die away”，但后端 Agent 进程未崩溃。
    *   **严重程度:** 高（影响核心集成功能的可用性）。
    *   **Fix 状态:** 尚无关联的 Fix PR。
    *   **建议:** 需检查长连接的心跳机制及 Token 刷新逻辑。

### 6. 功能请求与路线图信号
**今日无新功能请求。**
当前 Issue #972 属于缺陷修复范畴，未体现新的功能需求信号。若该问题频繁发生，可能暗示项目需要增加更健壮的重连机制或连接健康检查功能，但这目前尚未作为正式 Feature Request 提出。

### 7. 用户反馈摘要
**核心痛点：连接持久性与自动化运维的缺失**
*   **场景:** 用户将 NullClaw 用于 Telegram Channel 的自动化管理或交互。
*   **不满:** 系统缺乏对“空闲状态”下的连接保持能力。用户观察到后端进程看似正常（通过 CLI 命令验证），但实际服务不可用，这种“假活”状态增加了排查难度。
*   **潜在期望:** 用户可能期望项目能提供自动重连功能，或在文档中明确说明如何配置 Telegram 集成的超时与保活策略。

### 8. 待处理积压
**长期未响应 Issue: #972**
*   **创建时间:** 2026-06-30
*   **最后更新:** 2026-07-03
*   **状态:** 开放 (Open)，1 条评论，0 个赞。
*   **提醒:** 该 Issue 已存在 4 天，且涉及生产环境稳定性。鉴于今日无其他活跃贡献，建议维护者尽快介入调查，确认是配置问题还是框架本身的 Bug，以避免更多用户遭遇类似困扰。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-07-04
**数据来源：** GitHub Issues & PRs (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目今日保持高活跃度，核心焦点集中在 **Reborn 架构的深化集成**与**身份认证模块的重构**。过去24小时内，团队合并了多个关键 PR，包括 Slack 入站路由的 Manifest 驱动化、WebUI 侧边栏状态修复以及类型去重清理。同时，QA 团队报告了多项关于 Reborn 日常任务执行失败和凭证注入逻辑的 Bug，表明系统正处于从原型向生产稳定态过渡的关键调试期。CI 流水线出现短暂中断后正在恢复中。

## 2. 版本发布
*   **状态：** 无独立新版本发布，但通过 PR #5598 进行了内部组件的版本升级。
*   **组件更新：**
    *   `ironclaw_common`: 0.4.2 -> 0.5.0 (**⚠️ 存在破坏性 API 变更**)
    *   `ironclaw_safety`: 0.2.2 -> 0.2.3
    *   `ironclaw_skills`: 0.3.0 -> 0.4.0 (**⚠️ 存在破坏性 API 变更**)
    *   `ironclaw`: 0.24.0 -> 0.29.1
    *   `ironclaw_skill_learning`: 0.1.0 -> 0.1.1
*   **注意：** 用户需关注 `ironclaw_common` 和 `ironclaw_skills` 的 API 变动，检查依赖兼容性。

## 3. 项目进展
今日主要推进了 Reborn 基础架构的“去冗余”和“配置化”工作：

*   **Slack 集成重构：** PR #5604 移除了旧的 Slack 配对代码流程，全面转向 OAuth 设置；PR #5626 进一步将 Slack 入站路由从硬编码 Rust 策略移至 Manifest 驱动，提升了扩展性。([PR #5604](https://github.com/nearai/ironclaw/pull/5604), [PR #5626](https://github.com/nearai/ironclaw/pull/5626))
*   **身份层清理：** PR #5619 对 `ironclaw_reborn_identity` 进行了深度重构，移除了死代码、统一了错误路径测试，并加强了边界规则。([PR #5619](https://github.com/nearai/ironclaw/pull/5619))
*   **类型去重：** PR #5567 执行了类型/特征清理计划，移除了6个重复特征，统一了6个 DTO 集群，净减少176行代码，无功能回归。([PR #5567](https://github.com/nearai/ironclaw/pull/5567))
*   **WebUI 体验优化：** PR #5132 修复了无效聊天线程路由的重定向问题；PR #5130 解决了侧边栏线程高亮在非聊天页面残留的问题。([PR #5132](https://github.com/nearai/ironclaw/pull/5132), [PR #5130](https://github.com/nearai/ironclaw/pull/5130))
*   **基础设施：** PR #5101 优化了 CI 中的 `cargo-component` 安装流程，使用固定版本以提高构建稳定性。([PR #5101](https://github.com/nearai/ironclaw/pull/5101))

## 4. 社区热点
以下 Issue 评论数较多，反映了开发团队对底层架构一致性的深度讨论：

*   **[Issue #3067] Reborn 垂直切片集成测试套件** (33条评论)
    *   **摘要：** 致力于创建调用级别的集成测试，以证明 Reborn 子系统通过公共入口点正常工作。这是确保 Reborn 落地 `reborn-integration` 的关键步骤。
    *   **链接：** [Issue #3067](https://github.com/nearai/ironclaw/issues/3067)
*   **[Issue #3087] 组合 ironclaw_host_runtime 服务** (7条评论，已关闭)
    *   **摘要：** 追踪主机运行时服务的组合方式，涉及 CapabilityHost 和 TrustAwareCapabilityDispatchAuthorizer 的实现细节。
    *   **链接：** [Issue #3087](https://github.com/nearai/ironclaw/issues/3087)
*   **[Issue #3231] Reborn 架构深化后续工作** (3条评论，已关闭)
    *   **摘要：** 在默认关闭的子系统落地后的跟进架构深化，强调不阻塞主合并，而是作为小 PR 持续改进。
    *   **链接：** [Issue #3231](https://github.com/nearai/ironclaw/issues/3231)

## 5. Bug 与稳定性
今日报告了多个影响 Reborn 稳定性和安全性的 Bug，主要集中在身份验证、凭证注入和错误处理上：

*   **[High Risk] 身份验证与凭证漏洞：**
    *   **Issue #5615:** `bind()` 缺乏 OAuth 表面守卫，可能导致防御纵深缺失。
    *   **Issue #5616:** `adopt_migrated_identity` 从未写入 `StoredUser`，导致“幽灵用户”。
    *   **Issue #5614:** 跨进程差异邮件登录可能导致主体分裂。
    *   **Issue #5512:** WASM 凭证提供者从 Manifest 重新推导注入资格，而非咨询 Authorizer 的决策，导致逻辑不一致。
    *   **链接：** [Issue #5615](https://github.com/nearai/ironclaw/issues/5615), [Issue #5616](https://github.com/nearai/ironclaw/issues/5616), [Issue #5614](https://github.com/nearai/ironclaw/issues/5614), [Issue #5512](https://github.com/nearai/ironclaw/issues/5512)
*   **[Medium Risk] 运行时与重试逻辑：**
    *   **Issue #5583:** 模型幻觉调用已禁用的能力时，网关拒绝整个响应并标记为 `model_error`，而非模型可见的拒绝。
    *   **Issue #5608:** 本地开发合成能力的重试路径不可达，导致可恢复失败被折叠为终端 `driver_unavailable`。
    *   **Issue #5605:** 记忆提示上下文注入未连接，生产环境中 `memory_snippets` 始终为空。
    *   **链接：** [Issue #5583](https://github.com/nearai/ironclaw/issues/5583), [Issue #5608](https://github.com/nearai/ironclaw/issues/5608), [Issue #5605](https://github.com/nearai/ironclaw/issues/5605)
*   **[Low/Medium Risk] UI 与 QA 发现：**
    *   **Issue #5522:** 需要读取 Slack DM 的日常任务失败，因缺少 Slack 读取能力和 `capability_info` 重试循环问题。
    *   **Issue #5510:** 无法删除旧的日常任务，导致配置冲突。
    *   **Issue #5507:** 失败的日常任务运行显示“无附加线程”，阻碍调试。
    *   **Issue #5602:** 从聊天界面连接 Slack 时，私聊仅返回链接/配对码，未自动完成连接。
    *   **链接：** [Issue #5522](https://github.com/nearai/ironclaw/issues/5522), [Issue #5510](https://github.com/nearai/ironclaw/issues/5510), [Issue #5507](https://github.com/nearai/ironclaw/issues/5507), [Issue #5602](https://github.com/nearai/ironclaw/issues/5602)

## 6. 功能请求与路线图信号
*   **Manifest 驱动的入站路由：** 多个 PR (#5625, #5626, #5107) 表明路线图正朝着完全基于 Manifest 配置渠道入站（Slack, Telegram 等）的方向发展，旨在消除硬编码的路由逻辑。
*   **成本预算集成：** Issue #3141 提出将基于成本的预算行为集成到 `ResourceGovernor` 和 `HostRuntime` 中，这是 Reborn 资源控制的核心功能。
*   **取消语义定义：** Issue #3238 正在定义端到端的 Reborn 取消语义，包括状态转换和锁释放，这对于构建可靠的多步 Agent 流程至关重要。
*   **并行 PR 审查技能：** PR #5622 添加了 `parallel-pr-review` 技能，允许 Agent 并行审查多个 PR，显示了项目在增强自身开发效率和外部工具链集成方面的意图。

## 7. 用户反馈摘要
*   **痛点：** 用户和 QA 团队普遍反映 Reborn 的日常任务（Routines）在执行过程中容易失败，且失败后的调试信息不足（如 Issue #5507 中“无附加线程”的问题）。
*   **体验摩擦：** Slack 连接的 OAuth 流程在 WebUI 中尚不完全流畅，用户手动触发连接后仍需通过 DM 交互才能完成，存在断点（Issue #5602）。
*   **管理困难：** 用户抱怨无法清理旧的日常任务，导致配置混乱和新任务无法正确绑定（Issue #5510）。
*   **正面反馈：** 尽管存在 Bug，但团队成员对 Reborn 架构的模块化进展（如身份层重构、类型去重）持积极态度，认为这些清理工作为后续的稳定性和可扩展性奠定了基础。

## 8. 待处理积压
*   **CI 红色状态：** Issue #5603 和 #5590 指出 `main` 分支的 CI 流水线因 Docker 构建缺失 Prompt 文件和 Clippy Windows 警告而失败，需尽快修复以保持主干绿色。 ([Issue #5603](https://github.com/nearai/ironclaw/issues/5603), [Issue #5590](https://github.com/nearai/ironclaw/issues/5590))
*   **身份层防御纵深：** Issue #5615 和 #5617 揭示了身份模块中多个安全审计发现的问题（缺少 OAuth 守卫、测试仅覆盖 Fake），建议优先分配资源进行加固和补测。 ([Issue #5615](https://github.com/nearai/ironclaw/issues/5615), [Issue #5617](https://github.com/nearai/ironclaw/issues/5617))
*   **重试逻辑修复：** Issue #5608 描述的重试路径不可达问题影响了本地开发和合成能力的测试体验，需确认根因并修复。 ([Issue #5608](https://github.com/nearai/ironclaw/issues/5608))

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-07-04
**数据来源**：GitHub (netease-youdao/LobsterAI)
**分析师**：Agnes-2.0-Flash

## 1. 今日速览
LobsterAI 项目在 2026 年 7 月 3 日保持了极高的开发活跃度，共完成 16 个 Pull Request 的合并或关闭，并发布了 `2026.7.3` 版本。本次更新重点强化了 **Cowork（协作模式）** 的功能完整性，包括新增“目标模式（Goal Mode）”及子代理面板，同时优化了大会话渲染性能和上下文维护机制。此外，针对 macOS 全屏体验、IM 多实例重复校验以及服务部署 UI 进行了多项关键修复。整体来看，项目正处于功能迭代与稳定性加固并行的活跃期，代码库健康度良好。

## 2. 版本发布
**版本**：`2026.7.3`
**发布时间**：2026-07-03
**主要变更**：
*   **服务部署优化**：支持更灵活的服务部署配置 (`PR #2238`)。
*   **Cowork 新功能**：
    *   新增 **Goal Mode（目标模式）**，增强多代理协作的任务导向能力 (`PR #2241`)。
    *   新增 **Subagent Artifact Panel**，提供更直观的子代理产物展示 (`PR #2241` 相关)。
*   **其他集成**：包含 OpenClaw RPC 集成、Prompt 工具入口点及命令显示优化。

> **链接**：[Release 2026.7.3](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.3)

## 3. 项目进展
今日合并/关闭的 PR 主要集中在提升 Cowork 模式的稳定性和用户体验，具体进展如下：

*   **Cowork 核心功能增强**：
    *   **模型同步修复**：解决了 IM/Channel 会话中本地模型覆盖与 OpenClaw Gateway 不同步的问题，确保外部切换模型后 UI 能正确反映 (`PR #2267`)。
    *   **错误处理优化**：修复了聊天错误时上下文维护状态未清除导致的 UI 卡死问题，增加了回归测试覆盖 (`PR #2266`)。
    *   **计划恢复机制**：延迟 Plan 恢复直到 Abort 结算完成，防止会话文件锁冲突 (`PR #2247`)。
    *   **UI 细节打磨**：移除了 Goal 菜单中不再需要的辅助文本，并恢复了紧凑模式下的添加菜单宽度 (`PR #2262`, `PR #2268`)。

*   **性能与渲染优化**：
    *   **大会话渲染**：将折叠的工具结果格式从 64K 减少至 16K，并引入 Memoization 降低渲染开销，显著提升大型会话流畅度 (`PR #2264`)。
    *   **诊断导出**：新增“分享 > 导出为 > 诊断包”功能，方便用户提交包含原始消息和元数据的调试信息 (`PR #2264`)。

*   **跨平台与客户端修复**：
    *   **macOS 全屏黑屏**：修复了退出全屏前隐藏窗口导致的黑屏问题 (`PR #2246`)。
    *   **时间戳修复**：修正了子代理面板中时间戳显示异常的问题 (`PR #2261`)。
    *   **工作目录隔离**：在系统提示词中明确区分任务运行时目录与代理工作空间，避免路径混淆 (`PR #2260`)。

> **关键 PR 链接**：
> *   [PR #2267](https://github.com/netease-youdao/LobsterAI/pull/2267) - 模型同步
> *   [PR #2264](https://github.com/netease-youdao/LobsterAI/pull/2264) - 性能与诊断
> *   [PR #2246](https://github.com/netease-youdao/LobsterAI/pull/2246) - macOS 修复

## 4. 社区热点
*   **Issue #1422**：[MCP-自定义页面服务名称过长时删除弹框展示不友好]
    *   **状态**：Closed (Stale)
    *   **分析**：用户反馈 UI 组件在处理长文本时的适配性问题。虽然已关闭，但反映了用户对 MCP 自定义页面易用性的持续关注。建议后续版本中检查所有涉及长文本展示的 UI 组件。
    *   **链接**：[Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422)

*   **PR #1353**：[Agent 技能选择器新增全选和清除功能]
    *   **状态**：Open (Stale)
    *   **分析**：这是一个高价值的 UX 改进请求。用户痛点在于批量管理技能时的低效操作。尽管尚未合并，但该 PR 提供了清晰的全选/清除交互方案，符合当前 Agent 生态复杂化的趋势，应优先评估合并。
    *   **链接**：[PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353)

## 5. Bug 与稳定性
今日修复了多个潜在的稳定性和回归问题：

1.  **[严重] macOS 全屏黑屏**
    *   **问题**：在 macOS 上退出全屏时出现黑屏。
    *   **修复**：`PR #2246` 通过调整窗口隐藏顺序解决。
2.  **[中等] Cowork 上下文卡死**
    *   **问题**：LLM 超时或错误导致上下文整理/压缩状态残留，UI 无响应。
    *   **修复**：`PR #2266` 增加了错误清理逻辑和回归测试。
3.  **[中等] 模型状态不一致**
    *   **问题**：IM/Channel 会话中的模型切换未在本地 UI 正确同步。
    *   **修复**：`PR #2267` 实现了双向同步机制。
4.  **[低] 子代理时间戳错误**
    *   **问题**：子代理消息时间显示不正确。
    *   **修复**：`PR #2261` 修正了 SQLite 读取和格式化逻辑。

## 6. 功能请求与路线图信号
*   **Agent 技能管理效率**：`PR #1353` 提出的“全选/清除”功能表明用户期望更高效的批量操作能力。这暗示未来 Agent 配置可能趋向于更复杂的技能组合，UI 需要支持更高级的管理工具。
*   **IM 多实例安全性**：`PR #1464` 提议对钉钉、飞书、QQ 多实例进行重复名称/ID 校验。这反映了用户对多账号并行管理的需求增加，且对数据冲突（如消息重复处理）的容忍度降低。
*   **诊断与调试工具**：`PR #2264` 引入的诊断包导出功能，标志着项目开始重视用户侧的问题排查支持，未来可能建立更完善的反馈闭环机制。

## 7. 用户反馈摘要
*   **满意度**：
    *   用户对 **Cowork 模式** 的新增功能（Goal Mode）表示期待，认为这增强了多代理协作的可控性。
    *   大会话性能优化（`PR #2264`）直接回应了重度用户对于长上下文渲染卡顿的痛点。
*   **痛点**：
    *   **UI 细节**：用户指出 MCP 自定义页面和删除确认框在长文本下的显示缺陷 (`Issue #1422`)。
    *   **操作效率**：技能选择缺乏批量操作按钮，导致配置复杂 Agent 时体验繁琐 (`PR #1353`)。
    *   **稳定性**：macOS 原生全屏体验和 IM 多实例的数据冲突是主要的稳定性担忧来源。

## 8. 待处理积压
以下 Issue/PR 标记为 "Stale" 或长期未合并，建议维护者关注：

1.  **PR #1353**: [feat(agent): Agent 技能选择器新增全选和清除功能]
    *   **理由**：显著提升 UX，代码改动小，建议合并。
    *   **链接**：[PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353)
2.  **PR #1464**: [fix(im): add duplicate validation for instance name and credential ID]
    *   **理由**：防止多实例配置错误导致的数据混乱，属于防御性编程的重要补充。
    *   **链接**：[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464)
3.  **Issue #1422**: [MCP-自定义页面，对应的服务名称较长时，删除弹框那展示不友好]
    *   **理由**：虽然已关闭，但未明确修复，若用户再次提及需重新评估 UI 适配方案。
    *   **链接**：[Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-07-04
**数据来源：** GitHub agentscope-ai/CoPaw

## 1. 今日速览
CoPaw 项目在 2026-07-04 保持高活跃度，过去 24 小时内新增 Issue 39 条，PR 33 条，显示出社区对 QwenPaw 2.0 Beta 及 1.1.x 版本的强烈关注。开发重心明显向 **上下文管理稳定性**、**内存检索优化** 以及 **多平台渠道接入** 倾斜。尽管无新版本发布，但多个关键 Bug（如 Scroll 上下文压缩错误、工具调用死循环）已通过 PR 修复或处于 Review 阶段，项目整体健康度良好，技术债务正在快速清理中。

## 2. 版本发布
*   **无新版本发布。**
*   **注意：** 社区正密切关注 `v2.0.0b2` 的稳定性，今日多个 Issue 集中在该版本的上下文丢失和会话管理问题上。

## 3. 项目进展
今日合并/关闭的主要 PR 推动了以下核心能力的提升：

*   **内存检索增强：**
    *   **#5648** & **#5647** (Closed): 引入可配置的 Reranker 支持及 UI 配置面板。通过外部重排序 API 提升混合搜索结果的准确性，显著改善长上下文下的信息召回率。
*   **沙箱与基础设施：**
    *   **#5525** (Closed): 实现 Windows 原生沙箱支持，填补了 Windows 用户在隔离执行环境方面的空白。
*   **Provider 集成更新：**
    *   **#5735** (Closed): 更新 GitHub Models 提供商至新端点，并支持细粒度 PAT，解决了旧端点弃用问题。
*   **桌面端架构演进：**
    *   **#5734** (Open): 提议将桌面端发布流程切换至 Tauri，旨在替代旧的 conda-pack 方案，提升打包效率和跨平台一致性。
*   **渠道扩展：**
    *   **#5762** (Open): 新增 `azure_bot` 通道，支持通过统一 Webhook + REST API 架构接入 Teams, Slack 等 Azure Bot Framework 平台。

## 4. 社区热点
以下是评论数较多或引发广泛讨论的话题：

*   **[Bug] 上下文压缩导致模型“失忆” (#5746)**
    *   **链接:** [Issue #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746)
    *   **热度:** 4 条评论
    *   **分析:** 用户报告在 `v2.0.0b2` 中使用 `scroll` 策略时，模型错误地折叠了当前任务上下文，导致回复旧消息。此问题严重影响了多步任务执行的可靠性。
    *   **进展:** 已有对应修复 PR **#5765** 正在 Review 中，承诺保护当前回合并优化压力释放机制。

*   **[Feature] 密钥脱敏与安全存储 (#5705)**
    *   **链接:** [Issue #5705](https://github.com/agentscope-ai/QwenPaw/issues/5705)
    *   **热度:** 6 条评论
    *   **分析:** 用户深入分析了 v1.1.12 的密钥安全机制，指出环境变量回退覆盖不全及日志脱敏缺失的问题。反映了企业用户对数据安全的极高关注度。

*   **[Bug] Runtime 2.0 工具调用死循环 (#5717)**
    *   **链接:** [Issue #5717](https://github.com/agentscope-ai/QwenPaw/issues/5717)
    *   **热度:** 2 条评论
    *   **分析:** 截断的 `tool_call.input` 导致历史记录异常，进而引发模型重复执行同一工具。这是一个典型的边缘情况导致的稳定性问题。
    *   **进展:** PR **#5761** 已提出修复方案，确保畸形工具调用能正确反馈给模型而非被静默丢弃。

*   **[Feature] 能力短板分析与竞品对比 (#5711)**
    *   **链接:** [Issue #5711](https://github.com/agentscope-ai/QwenPaw/issues/5711)
    *   **热度:** 3 条评论
    *   **分析:** 用户提供了详细的竞品对标分析，指出了工具调用效率、记忆机制和规则执行力等方面的差距，为后续内核迭代提供了明确的优化方向。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在上下文管理和会话状态上：

1.  **Scroll 上下文压缩错误折叠 (#5746)** - **严重**。导致任务中断和上下文丢失。-> **Fix PR: #5765**
2.  **Runtime 2.0 畸形工具调用导致死循环 (#5717)** - **严重**。无限重复执行同一工具。-> **Fix PR: #5761**
3.  **Console 双 `/api` 前缀导致 404 (#5769)** - **中等**。前端路由配置错误，影响 API 调用。
4.  **计划模式反复读取文件 (#5759)** - **中等**。资源浪费和潜在的性能瓶颈。
5.  **Console UI 思维链显示缺失 (GLM-5.1) (#4650)** - **低**。特定模型的兼容性问题，已在旧版本中关闭，但反映了对多模型兼容性持续关注的必要性。
6.  **Windows GBK 编码问题 (#4481)** - **低**。已在旧版本中通过系统性修复关闭，但仍有零星用户提及。

## 6. 功能请求与路线图信号
*   **自定义模型协议支持 (#5609):** 用户希望支持非标准 `/v1/chat/completions` 端点的模型（如图像生成 API），以利用更多免费或私有模型资源。
*   **Azure Bot 框架集成 (#5762):** 新增 PR 表明团队正在积极扩展企业级 IM 渠道支持，Azure Bot 是重要一步。
*   **Tauri 桌面端重构 (#5734):** 标志着桌面应用架构的重大现代化转型，未来版本将更倾向于 Electron/Tauri 混合或纯 Tauri 方案以提升性能。
*   **会话项组件统一 (#5754):** 前端 UI 重构的一部分，旨在简化侧边栏和抽屉中的会话列表逻辑，提升用户体验一致性。

## 7. 用户反馈摘要
*   **痛点:**
    *   **上下文管理脆弱:** 多位用户（#5746, #5710, #5717）反映在长任务或多轮对话中，上下文压缩和记忆检索机制不够稳健，导致“失忆”或重复执行。
    *   **插件生命周期管理:** 插件安装/删除后残留报错（#5689）和会话未自动关闭（#4611）影响使用体验。
    *   **Windows 环境适配:** 尽管有修复，GBK 编码和沙箱问题仍是 Windows 用户的主要抱怨点（#4481, #5525）。
*   **满意点:**
    *   **内存搜索优化:** 用户对引入 Reranker 功能表示期待（#5648, #5647），认为这将显著提升知识库检索效果。
    *   **多渠道支持:** 新增 Azure Bot 和现有飞书/钉钉的支持受到企业用户欢迎。

## 8. 待处理积压
*   **Console 会话模型限制 (#5767):** 指出当前 SDK 的“单会话 pull”模型阻碍了多 Agent/多工作空间的演进。这是一个架构层面的根本性问题，需要长期规划。
*   **自动化任务无故终止 (#5616, #5763):** 用户报告重型任务经常卡死或中断，需进一步排查 Runtime 的资源调度或超时机制。
*   **插件 Hook 支持 (#4613):** 早期提出的插件扩展能力增强需求，目前仍缺乏非侵入式的 Hook 机制，限制了高级用户的定制化能力。

---
*本报告由 Agnes-2.0-Flash 生成，基于 CoPaw GitHub 仓库公开数据。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-04
**数据来源：** GitHub ZeroClaw-labs/zeroclaw

## 1. 今日速览
ZeroClaw 在 2026-07-04 保持高活跃度，过去24小时内新增 36 个 Issues 和 50 个 Pull Requests。项目重心集中在 **v0.8.3 版本的准备阶段**，核心进展包括 SOP（标准作业程序）引擎的文档完善与安全加固、WASM 插件系统的隔离架构探索，以及多用户认证（OIDC）的实现。尽管无新版本正式发行，但大量关键功能（如 Goal Mode、OTel 可观测性）已通过 PR 合并或进入最终审查，项目整体向生产就绪状态稳步迈进。

## 2. 版本发布
- **当前状态：** 无新版本发布。
- **版本焦点：** 所有开发工作均指向 **v0.8.3**。多个 Tracker Issue（如 #7314, #8071, #8073）明确标记为 v0.8.3 的协调入口，涵盖 WASM 插件、运行时执行稳定性和可观测性。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了项目的安全性、文档完整性和核心功能覆盖：

- **SOP 引擎增强与安全加固：**
  - **#8679** (Docs): 补充了 `SOP.toml` 引用和条件语法示例，解决了文档缺失问题。
  - **#8524** (Fix): 修复了 OpenAI 兼容提供商中空 `tool-call` 内容导致的请求被拒问题，提升了多模型兼容性。
  - **#8393** (Feat): 实现了 **Goal Mode**（目标模式），允许代理在无需人工干预的情况下自主完成长期任务，这是自动化流程的重大突破。

- **安全与认证体系：**
  - **#8672** (Feat): 引入了 RFC #7141 的多用户认证栈，支持 OIDC、SSH Key 等多种 Provider，增强了多租户环境下的权限隔离。
  - **#8554** (Security): 加固了技能包解压器的 Zip-Bomb 防御机制，防止恶意压缩文件导致资源耗尽。

- **可观测性与插件架构：**
  - **#8567** (Feat): 实现了运行时 OTel 内容策略，默认关闭 LLM/Tool I/O 的详细追踪，仅在操作员显式启用时记录，平衡了调试需求与隐私安全。
  - **#8661** (Proto): 提出了 WASM 插件通过 `zeroclaw-plugin-host` 旁路进程执行的 PoC，旨在提供额外的沙箱隔离层，提升插件系统的安全性。

## 4. 社区热点
以下 Issue 因涉及核心架构或高优先级 Bug 而获得大量关注：

- **[RFC] Work Lanes & Label Cleanup (#6808)**
  - **热度：** 13 条评论
  - **分析：** 维护者正在重构工作流程自动化和标签体系，以提高贡献效率。这是治理层面的重大调整，旨在减少维护者负担并规范 Issue 分类。
  - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/6808

- **[Bug] Windows 测试失败 (#7462)**
  - **热度：** 8 条评论
  - **分析：** 报告了在 Windows 环境下 74 个测试用例失败的问题，主要涉及路径语义和控制台编码。由于 CI 仅运行 Linux，此问题长期未被捕获，社区呼吁增加跨平台 CI 覆盖。
  - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/7462

- **[RFC] OIDC Authentication Support (#7141)**
  - **热度：** 7 条评论
  - **分析：** 作为多租户和安全性的基石，OIDC 支持是 v0.9.0 的关键特性。社区讨论了不同身份提供商的集成细节及权限映射策略。
  - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/7141

- **[Bug] Skill Review Fork Panic (#8654)**
  - **热度：** 1 条评论（但关联紧急修复 PR #8680）
  - **分析：** 后台技能审查进程在工具调用过多时发生切片越界崩溃，导致整个代理进程 SIGSEGV。这是一个严重的稳定性问题，已在 #8680 中得到初步修复。
  - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8654

## 5. Bug 与稳定性
今日报告了多个影响稳定性和用户体验的 Bug，按严重程度排序：

1.  **SOP 审批门控绕过 (#8678)**
    - **严重性：** High
    - **描述：** `advance_step` 缺乏运行状态守卫，允许驱动程序通过 `sop_advance` 绕过审批门控。
    - **状态：** 新报告，需紧急修复。
    - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8678

2.  **Skill Review 进程崩溃 (#8654)**
    - **严重性：** High (SIGSEGV)
    - **描述：** 工具密集型调用后，`maybe_run_skill_review` 中的切片操作越界导致守护进程崩溃。
    - **状态：** Fix PR #8680 已提交。
    - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8654

3.  **Memory Leak in MCP Tools (#8642)**
    - **严重性：** High
    - **描述：** MCP/Tool Schema 克隆导致代理循环中 RSS 无限增长，是之前 OOM 问题的独立根因之一。
    - **状态：** 已拆分跟踪，需进一步调查。
    - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8642

4.  **WhatsApp 设备链接失败 (#8627)**
    - **严重性：** High (Workflow Blocked)
    - **描述：** WhatsApp 引入的新 Passkey/Shortcake 链接机制导致原生 WhatsApp Web 通道无法完成设备绑定。
    - **状态：** Blocked，等待上游库或适配补丁。
    - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8627

5.  **Source Install 构建失败 (#8632)**
    - **严重性：** Medium
    - **描述：** 包含 `embedded-web` 的源码安装在编译网关时，因生成的 API 客户端文件不存在而失败。
    - **状态：** 新报告。
    - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8632

6.  **ZeroCode 复制包含 Markdown 围栏 (#8664)**
    - **严重性：** Low
    - **描述：** 复制代码块时意外包含 Markdown 反引号行。
    - **状态：** 新报告。
    - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8664

## 6. 功能请求与路线图信号
- **Goal Mode (#8303 / #8393):** 用户强烈需要一个无需人工持续交互即可达成特定目标的“目标模式”。PR #8393 已实现该功能，预计将在 v0.8.3 或 v0.9.0 中作为核心自动化特性推出。
- **Uses Memory 标志暴露 (#8397 / #8676):** 用户希望 CLI 和 Web 界面能直接控制 Cron 任务的内存使用策略，而非仅通过配置文件。PR #8676 已实现此功能，提升了易用性。
- **Auto-resume Code Sessions (#8653):** ZeroCode TUI 用户希望打开面板时自动恢复最近的会话，而非从头开始。此功能请求反映了用户对无缝工作流的需求。
- **WASM 插件隔离 (#8661):** 社区对插件安全性的关注推动了旁路进程执行方案的提出，这可能成为未来插件架构的标准模式。

## 7. 用户反馈摘要
- **痛点：**
  - **Windows 兼容性差：** 用户指出 Windows 上的测试失败率极高，且 CI 未覆盖，导致本地开发体验不佳。
  - **内存管理不透明：** 用户报告了多次 OOM 和内存泄漏问题（特别是 MCP 工具和 Skill Review），表明当前资源监控和管理存在盲区。
  - **第三方服务依赖脆弱：** WhatsApp 通道的失效显示了项目对上游 API 变更的应对滞后，影响了即时通讯场景的用户。
- **满意点：**
  - **SOP 确定性：** 用户对 SOP 引擎的可审计性和确定性表示认可，但也期望更完善的文档和 UI 支持。
  - **文档改进：** 近期大量的文档 PR（如 SOP 语法、插件指南）得到了社区的正面反馈，认为这降低了入门门槛。

## 8. 待处理积压
- **#8519: Reconcile cargo-audit ignores**
  - **状态：** In Progress
  - **描述：** `cargo audit` 与 `cargo deny` 之间的配置漂移导致 22 个 RustSec 警告未被正确处理。需统一审计配置以消除安全隐患。
  - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8519

- **#8678: Advance Step Approval Gate Bypass**
  - **状态：** Open
  - **描述：** SOP 引擎中的审批门控逻辑存在漏洞，可能被利用绕过人工批准步骤。需尽快修复以确保工作流安全。
  - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8678

- **#8627: WhatsApp Web Device Linking Broken**
  - **状态：** Blocked
  - **描述：** 由于 WhatsApp 更新链接机制，原生通道失效。需等待 `wa-rs` 库更新或自行适配新协议。
  - **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/8627

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*