# OpenClaw 生态日报 2026-07-25

> Issues: 463 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-25 01:46 UTC

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
**日期：** 2026-07-25
**数据来源：** GitHub openclaw/openclaw

## 1. 今日速览
OpenClaw 项目在 2026-07-25 保持极高的活跃度，过去24小时内处理了 **963** 个更新（463 Issues + 500 PRs），显示出社区对底层稳定性修复的高度关注。今日无新版本发布，但核心开发重心集中在 **SQLite 数据一致性**、**会话状态恢复** 以及 **多平台渠道连接性** 的关键 Bug 修复上。尽管 Issues 积压严重（特别是涉及内存泄漏和会话阻塞的 P0/P1 问题），PR 的合并速度较快，表明维护团队正在积极通过代码层面解决技术债务。

## 2. 版本发布
**无新版本发布。**
当前处于稳定迭代期，重点在于修复 `2026.7.x` 系列回归问题及底层基础设施的健壮性。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在修复底层机制的边界情况：

*   **SQLite 完整性与状态修复：**
    *   **#113459** (fix/sqlite): 防止数据库替换后过期的验证器隔离状态导致数据锁定。这是针对 #113306 的关键修复，解决了快照恢复中的身份保证问题。
    *   **#113395** (fix/auth): 修复 Anthropic OAuth 令牌在预过期窗口内未被刷新导致的服务中断问题，提升了认证链路的可靠性。
*   **渠道与代理兼容性：**
    *   **#113176, #112905, #112851, #112844**: 集中修复了 Google Chat, OpenRouter, Venice, Kilocode 等渠道在 HTTP 代理环境下的模型发现失败问题，显著改善了企业网络或受限环境下的可用性。
    *   **#113419** (feat/channels): 新增 **Buzz** 频道插件，扩展了 OpenClaw 的即时通讯支持范围。
*   **iOS 客户端体验优化：**
    *   **#113057, #113372**: 修复 iOS 端助手媒体附件渲染缺失及语音语言配置不生效的问题，提升了移动端原生体验。
*   **清理与维护：**
    *   **#112631**: 修复卸载脚本未清除 Shell 补全块的问题，完善了生命周期管理。

## 4. 社区热点
以下 Issues 因评论数高且涉及核心功能痛点，成为社区讨论焦点：

*   **[P0] Gateway Crash-Loop & Memory Conflicts (#107220)**
    *   **链接:** [Issue #107220](https://github.com/openclaw/openclaw/issues/107220)
    *   **摘要:** 升级至 2026.7.1 后，遗留的内存索引侧车 (`meta`/`chunks`) 冲突导致 Gateway 启动即崩溃循环。这是典型的迁移破坏性问题，严重影响用户体验。
*   **[Bug] Session Initialization Conflict (#102020)**
    *   **链接:** [Issue #102020](https://github.com/openclaw/openclaw/issues/102020)
    *   **摘要:** 跨通道（Signal/Da）在会话中发送第二条消息时失败，报错 "reply session initialization conflicted"。这揭示了会话状态机在多通道并发下的竞态条件。
*   **[Performance] Active Memory Latency Spike (#86996)**
    *   **链接:** [Issue #86996](https://github.com/openclaw/openclaw/issues/86996)
    *   **摘要:** 启用 Active Memory 并使用 `openai/gpt-5.4-mini` 时，Telegram 直接消息出现严重延迟和 Hook 超时。反映了内存后端与 LLM 路由之间的性能瓶颈。
*   **[Feature] Unified Cron Automation (#110950)**
    *   **链接:** [Issue #110950](https://github.com/openclaw/openclaw/issues/110950)
    *   **摘要:** 提议将心跳、观察者和计划任务统一为 Cron 原语。这代表了用户对简化自动化配置结构的强烈需求，可能影响未来的架构设计。

## 5. Bug 与稳定性
今日报告的高优先级 Bug 及修复状态如下：

| Issue ID | 严重程度 | 问题描述 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **#107220** | **P0** | 2026.7.1 升级导致 Gateway 崩溃循环 (Memory Sidecar 冲突) | **Closed** (已修复/缓解) |
| **#113306** | **P1** | SQLite 快照恢复缺乏端到端崩溃和身份保证 | **Open** (关联 PR #113459) |
| **#111519** | **P1** | Telegram DM 回复在旧作用域清理后回退丢失 | **Open** (回归问题) |
| **#111498** | **P1** | 主代理被 Anthropic 认证恢复后的持久工作区状态阻塞 | **Open** (回归问题) |
| **#94228** | **P1** | Anthropic 路径下长 Tool-use 线程因 `thinking` 块签名无效而砖化 | **Open** |
| **#92043** | **P1** | 180s 压缩超时导致合法长历史会话反复失败 | **Open** |
| **#98528** | **P1** | [Regression] 工具输出在每轮首次调用后返回空值 | **Closed** (关联 PR #98528 描述) |
| **#106786** | **P1** | gpt-5.6-* 模型在 ChatGPT-OAuth 路由下静默回退 | **Open** |

**稳定性评估：** 项目近期面临较多的**回归问题**（特别是 2026.7.x 版本），主要涉及会话状态持久化、跨通道兼容性和内部依赖（SQLite/Anthropic）的边界处理。稳定性风险较高。

## 6. 功能请求与路线图信号
*   **统一自动化原语 (#110950):** 用户希望简化 Cron 配置，将其作为所有后台任务的核心抽象。这是一个高价值的架构改进请求。
*   **文件系统沙箱配置 (#7722):** 安全增强需求持续存在，用户渴望更细粒度的 `tools.fileAccess` 控制。
*   **YAML 配置文件支持 (#45758):** 尽管 JSON5 是标准，但 YAML 的可读性需求强烈，尤其是对于 DevOps 背景的用户。
*   **Android Chat-First 表面 (#46058):** 社区正在探索独立的 Android 前端，表明移动端原生体验仍有巨大拓展空间。

## 7. 用户反馈摘要
*   **痛点：** 用户对 **会话丢失** 和 **状态不一致** 极度敏感。例如，Telegram 频道被“黑洞化” (#91564)、子代理会话完成后主会话无响应 (#47975) 等问题频繁出现。
*   **满意点：** 代理在复杂多步任务中的工具使用能力得到认可，但前提是底层通道（如 Ollama 远程流式 #94251）必须稳定。
*   **不满点：** 
    *   **静默失败：** 模型回退 (#106786) 和工具输出为空 (#98528) 缺乏明确的错误提示，导致调试困难。
    *   **配置复杂性：** 环境变量（如 `NO_PROXY`）的大小写敏感性导致意外行为 (#113176)，增加了部署摩擦。

## 8. 待处理积压
以下 Issue 长期未获解决或需要维护者进一步介入，建议优先处理以释放积压：

1.  **#94228** (P1): Anthropic 原生路径下的 `thinking` 块签名错误导致会话永久砖化。需维护者审查复现步骤。
2.  **#92043** (P1): 压缩超时逻辑缺陷导致合法长会话失败。需产品决策是否调整默认超时或引入断点续传。
3.  **#86996** (P1): Active Memory 导致的严重延迟问题。需性能团队分析内存后端与 LLM 调用的交互瓶颈。
4.  **#67419** (P2): Bootstrap 文件重复注入导致上下文膨胀。虽标记为 Stale，但影响 Token 成本，需重新评估优化方案。
5.  **#111519 & #111498** (P1): 两个新的 P1 回归问题（Telegram DM 和 Anthropic Auth），需在下一个补丁版本前定位并修复。

---

## 横向生态对比

**AI 智能体与个人助手开源生态横向对比分析报告**
**日期：** 2026-07-25
**分析师：** Agnes-2.0-Flash

### 1. 生态全景
2026年7月，个人AI助手与自主智能体开源生态呈现出**“底层重构与安全加固”**并行的态势。随着v1.0/v2.0版本的密集发布，社区焦点已从单纯的功能堆砌转向**系统稳定性、数据一致性（SQLite/状态机）及运行安全（沙箱/权限控制）**的深度优化。多平台渠道（Telegram, Slack, Discord, IM）的兼容性成为各项目的必争之地，而“插件化”与“MCP集成”则是统一架构的主流方向。

### 2. 各项目活跃度对比

| 项目 | Issues (今日) | PRs (今日) | Release | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | 463 | 500 | 无 | **高活跃/高风险** | 极高PR合并率，但P0回归问题多，处于高压修复期。 |
| **CoPaw** | 49 | 37 | v2.0.1 | **高活跃/转型期** | v2.0上线后性能与功能回归问题集中爆发，用户反馈强烈。 |
| **Hermes Agent** | 50 | 50 | 无 | **中活跃/稳定** | 大量PR待合并，重点解决Windows兼容性与编码Bug。 |
| **LobsterAI** | 19 | 50 | 2026.7.23 | **高活跃/迭代期** | 快速迭代，侧重协作模块与IM路由修复，连接稳定性待解。 |
| **NanoBot** | - | 25 | 预备 v0.3.0 | **中活跃/优化期** | WebUI体验大幅优化，本地模型性能仍是痛点。 |
| **ZeroClaw** | 48 | 50 | 无 | **高活跃/安全导向** | 聚焦SOP控制面重构与安全补丁，架构严谨性提升。 |
| **IronClaw** | 32 | 50 | 无 | **高活跃/冲刺期** | v1 RC阶段，依赖更新与安全子系统加固，QA压力大。 |
| **PicoClaw** | 3 | 8 | 无 | **低活跃/维护期** | 代码清理与内存优化为主，新功能较少。 |
| **NanoClaw** | 0 | 6 | 无 | **低活跃/内部迭代** | 团队内部小步快跑，修复逻辑缺陷，社区互动少。 |
| **Moltis** | 0 | 2 | 无 | **极低活跃/专注** | 仅Slack集成深度优化，生态范围窄。 |
| **ZeptoClaw** | 2 | 2 | 无 | **低活跃/安全加固** | Rust底层安全与CI流程修复。 |
| **NullClaw** | 0 | 0 | 无 | **停滞** | 无活动。 |
| **TinyClaw** | 0 | 0 | 无 | **停滞** | 无活动。 |

### 3. OpenClaw 在生态中的定位
*   **优势：** **极高的社区参与度与吞吐量**。OpenClaw 拥有远超其他项目的 Issue/PR 处理量（>900次/日），表明其拥有最庞大的用户基数和贡献者网络。其底层基础设施（如 SQLite 一致性、OAuth 刷新机制）的修复频率最高，显示出其在复杂企业级或重度用户场景下的不可替代性。
*   **技术路线差异：** 相比 CoPaw 的“PawApp 插件平台”和 ZeroClaw 的“SOP 控制面”，OpenClaw 更侧重于**多通道连接的鲁棒性**和**会话状态的精确管理**。它是目前唯一在处理“跨通道会话竞态条件”和“大规模内存索引冲突”方面积累深厚经验的项目。
*   **社区规模：** 作为参照系，OpenClaw 的社区活跃度是 NanoBot 的 20 倍以上，是 Hermes Agent 的近 10 倍，确立了其作为“行业标准参考实现”的地位。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与现状 |
| :--- | :--- | :--- |
| **多模态与流式输出优化** | OpenClaw, NanoBot, ZeptoClaw, Moltis, LobsterAI | 用户极度渴望 Telegram/Slack/Discord 等 IM 渠道支持 Token-by-Token 流式响应，以减少等待焦虑。NanoBot 已引入 rAF 调度器平滑渲染，ZeptoClaw 实现了渐进式消息编辑。 |
| **MCP (Model Context Protocol) 集成与生命周期** | NanoBot, Hermes Agent, CoPaw, NanoClaw, ZeroClaw | 所有主流项目均在加强 MCP 支持。痛点在于 MCP 服务器的**懒加载**（Hermes）、**生命周期解耦**（NanoBot）以及**状态可见性**（NanoClaw）。 |
| **会话状态持久化与恢复** | OpenClaw, CoPaw, ZeroClaw | 跨会话状态丢失、SQLite 损坏、Cron 任务覆盖历史是普遍痛点。CoPaw 引入了分阶段压缩管道，OpenClaw 正在修复快照恢复的身份保证。 |
| **安全性与沙箱隔离** | ZeroClaw, IronClaw, LobsterAI, ZeptoClaw | 从应用层到运行时层的安全加固。ZeroClaw 修复 Shell 逃逸；IronClaw 强化 Attested Signing；LobsterAI 限制 IPC 越权；ZeptoClaw 清理子进程环境变量。 |
| **Windows 平台兼容性** | Hermes Agent, LobsterAI, ZeroClaw | Windows 端的启动失败、编码错误（BOM）、签名拦截是 Hermes 和 LobsterAI 的主要崩溃源，ZeroClaw 也面临安装器缺失依赖的问题。 |

### 5. 差异化定位分析

*   **OpenClaw:** **全能型基础设施层。** 适合需要高度定制、复杂多通道集成和企业级会话管理的开发者。其代码库庞大，技术债务较多，但扩展性最强。
*   **CoPaw (QwenPaw):** **面向大众的生产力工具。** 主打“PawApp”插件生态和原生桌面自动化（Computer Use），界面友好，但 v2.0 升级带来了显著的性能倒退和功能回归，适合注重 UI/UX 和普通用户。
*   **Hermes Agent:** **研究与企业治理导向。** 由 NousResearch 驱动，强调 Agent Governance Toolkit 和细粒度权限控制，适合对安全性、可观测性和企业合规有严格要求的场景。
*   **NanoBot:** **极客与本地部署首选。** 侧重 WebUI 体验和 Ollama 本地模型优化，架构相对轻量，适合开发者快速搭建私有化 AI 助手。
*   **ZeroClaw:** **安全与协议优先的运行时。** 强调“Everything is a plugin”和可信目标（Trusted Goals），架构设计最为严谨，适合对安全性有极致要求的边缘计算或高敏感场景。
*   **IronClaw:** **Web 原生与扩展生态。** 采用 Rust 后端 + WebUI 前端，强依赖扩展宿主（Extension Host）和 Manifest V3，适合喜欢浏览器插件式交互的用户。

### 6. 社区热度与成熟度

*   **快速迭代/功能扩张期：**
    *   **CoPaw:** 刚完成 v2.0 大版本切换，正处于功能验证和用户适应期，社区噪音大，需求多样。
    *   **LobsterAI:** 新版本发布后，集成模块（Cowork, IM）仍在快速打磨，社区对新功能期待值高。
    *   **NanoBot:** 处于 v0.3.0 发布前夜，频繁提交 UI 和体验优化 PR。

*   **质量巩固/技术债务清理期：**
    *   **OpenClaw:** 虽然活跃度最高，但大量 P0/P1 Bug 表明其处于“边跑边修鞋带”的状态，核心开发者正忙于修复回归问题和内存泄漏。
    *   **IronClaw:** v1 RC 阶段，QA 力度加大，重点在于消除已知 Bug 和提升稳定性。
    *   **Hermes Agent:** 大量 Windows 和编码问题的积压，显示其需要系统性重构以解决长期存在的兼容性痛点。

*   **垂直深耕/稳定运营期：**
    *   **ZeroClaw:** 活动集中在安全和架构 RFC，表明核心功能已相对稳定，进入精细化运营阶段。
    *   **ZeptoClaw / Moltis:** 专注于特定渠道（Telegram/Slack）的深度优化，生态较小但粘性高。

### 7. 值得关注的趋势信号

1.  **“流式体验”成为 IM 渠道标配：** 无论是 ZeptoClaw 的渐进式编辑，还是 NanoBot 的流式渲染平滑，都表明用户不再接受“黑盒”等待。**建议开发者将流式输出作为第一优先级体验指标。**
2.  **MCP 从“可选”变为“核心依赖”：** 几乎所有活跃项目都在重构 MCP 集成方式（懒加载、生命周期管理、状态报告）。**未来标准将围绕更健壮、可观测的 MCP 客户端实现。**
3.  **Windows 环境的“信任危机”：** Hermes、LobsterAI、ZeroClaw 均报告 Windows 端启动或签名问题。**跨平台构建流水线（CI/CD）的自动化签名和兼容性测试将成为项目成熟的标志。**
4.  **从“单代理”向“编排系统”演进：** CoPaw 的 PawApp 平台、ZeroClaw 的 SOP 控制面、IronClaw 的扩展宿主，都显示单一 Agent 已无法满足复杂需求。**模块化、插件化、可组合的架构是未来 1-2 年的主流方向。**
5.  **安全左移与运行时沙箱：** 从 Shell 逃逸修复到 Landlock 沙箱，再到 Attested Signing，**安全性不再仅仅是文档建议，而是代码层面的硬性约束。** 开发者需重视最小权限原则和环境隔离。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-25
**数据来源：** GitHub (HKUDS/nanobot)

## 1. 今日速览
NanoBot 项目在 2026 年 7 月 24 日展现出极高的开发活跃度，共处理 25 个 Pull Requests（PR），其中 20 个已合并或关闭，显示出版本迭代前的密集修复与优化节奏。核心贡献者 `chengyongru` 和 `Re-bin` 主导了 WebUI 体验升级、Agent 逻辑重构及多模态支持等关键模块的改进。尽管无正式新版本标签发布，但 PR #5081 已启动 v0.3.0 的版本准备流程，预示着近期将有重大更新。社区对本地模型性能优化（Ollama）和 Telegram 消息截断问题的关注持续存在，但大部分技术债务正在被快速清理。

## 2. 版本发布
*   **状态：** 无正式 Release 发布。
*   **预备动作：** PR #5081 正在执行 `v0.3.0` 的版本预发布准备，包括版本号 bump 和 Composer 模型徽章样式修复。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在提升用户体验、修复后端逻辑缺陷以及优化架构解耦：

*   **WebUI 体验大幅优化：**
    *   **流式渲染平滑化：** PR #4696 引入了基于 rAF 调度器的 Markdown 流式揭示机制，解决了原始 Markdown 标记闪烁问题，并增加了标点停顿动画，显著提升阅读体验。
    *   **响应式布局修复：** PR #5031 和 #5060 解决了移动端欢迎页重叠、设置页导航混乱及窄屏布局压缩问题，确保跨设备一致性。
    *   **交互增强：** PR #5077 允许用户通过长按和拖拽在 Composer 中切换模型预设；PR #5071 改进了引用上下文的显示逻辑。
    *   **首次启动引导：** PR #5078 实现了从桌面安装器直接启动 WebUI 首次设置向导，降低了新用户门槛。
*   **Agent 核心功能增强：**
    *   **子代理内联咨询：** PR #5074 为 spawn 工具添加了 `wait` 参数，支持内联子代理查询，提升了任务执行的并行效率和控制力。
    *   **多模态输出保留：** PR #5073 修复了工具输出（文本、图片、文件）在转换为 OpenAI Responses 格式时的丢失问题，特别是避免了 Base64 图像被序列化为无效 JSON 文本。
    *   **授权任务传递：** PR #5075 确保经过验证的编码和工件生成任务能正确传递执行策略。
*   **架构与基础设施：**
    *   **品牌资产 SVG 迁移：** PR #5080 和 #5079 将 README 和 WebUI 的品牌图片统一迁移至 SVG 格式，提升了分辨率适应性并减小了文件体积。
    *   **MCP 生命周期重构：** Issue #4858 提出将 MCP 动态工具提供者生命周期从 AgentLoop 中解耦，旨在解决当前硬编码导致的代码泄漏问题，这是后续稳定性的关键步骤。
    *   **Weixin 流式修复：** PR #4567 修复了微信渠道因缺少 streaming 字段而强制使用非流式 API 的问题，并处理了上游兼容性问题。

## 4. 社区热点
以下 Issues 因高评论数或长期未决而成为讨论焦点：

*   **[CLOSED] Ollama 缓存前缀保留问题 (#4867)**
    *   **链接:** [HKUDS/nanobot Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)
    *   **热度:** 23 条评论
    *   **分析:** 用户反馈调用 Ollama 时每次对话增加约 60 秒延迟，导致在 32GB VRAM 环境下完全不可用。该 Issue 已关闭，暗示可能通过 PR #5073（多模态/上下文保留）或相关配置优化间接解决，或者是作为 #2463 的后续跟进已找到替代方案。这反映了本地部署用户对**推理速度**和**缓存效率**的极高敏感度。
*   **[CLOSED] Telegram 长消息截断渲染失败 (#4637)**
    *   **链接:** [HKUDS/nanobot Issue #4637](https://github.com/HKUDS/nanobot/issues/4637)
    *   **热度:** 4 条评论
    *   **分析:** 报告 Telegram 长消息在分块传输后无法正确渲染。虽已关闭，但需确认是否由今日合并的 PR #4696（WebUI 流式优化）或其他渠道特定修复覆盖。
*   **[OPEN] MCP 生命周期重构需求 (#4858)**
    *   **链接:** [HKUDS/nanobot Issue #4858](https://github.com/HKUDS/nanobot/issues/4858)
    *   **热度:** 2 条评论
    *   **分析:** 技术债清理请求，指出当前 MCP 实现泄漏到 AgentLoop 中。这是架构健康度的重要信号，需优先处理以支持更复杂的工具链集成。
*   **[OPEN] 中间消息丢失上下文 (#4064)**
    *   **链接:** [HKUDS/nanobot Issue #4064](https://github.com/HKUDS/nanobot/issues/4064)
    *   **热度:** 1 条评论, 1 个赞
    *   **分析:** 排队中的中途消息注入时丢失发送者/频道元数据。虽然 PR #5072 撤销了之前的尝试性修复，但该根本问题仍未彻底解决，需持续关注。

## 5. Bug 与稳定性
今日修复了多个影响稳定性和一致性的 Bug：

1.  **Vite 代理端口失效 (#5076):** 修复了在开发模式下，自定义 Gateway 端口被 Vite 代理忽略的问题，确保 WebSocket 连接正常。
2.  **非流式最终响应丢失 (#5049):** 修复了流式通道因抑制最终数据包而导致非流式场景下响应不完整的回归问题。
3.  **Pending 消息上下文丢失 (#5072):** 撤销了一个旧的修复 PR #4665，因为它基于过时的架构。这是一个**警示信号**，表明“中间消息丢失上下文”问题（Issue #4064）尚未有完美解决方案，强行修复可能导致更多不稳定，建议暂缓合并直到架构重构完成。
4.  **WeChat 流式支持缺失 (#4567):** 修复了 Pydantic 静默丢弃 `streaming` 配置项的问题，确保微信渠道能正确使用流式 API。

## 6. 功能请求与路线图信号
*   **Globalping MCP 预设 (#4383):** 用户请求内置 Globalping 网络测量 MCP 服务器，用于全球节点探测。这是一个高价值的网络诊断功能，若合并将增强 Agent 的环境感知能力。
*   **xAI X Search 活动可视化 (#5050):** 已将 xAI 托管的搜索活动转化为结构化 Agent 活动并在 UI 中展示，体现了对第三方 AI 提供商生态的快速适配能力。
*   **首次启动 WebUI 向导 (#5078):** 响应了用户对简化初始配置的需求，标志着项目正从“开发者工具”向“普通用户友好型应用”转型。

## 7. 用户反馈摘要
*   **痛点：** 本地模型（如 Ollama）的**延迟过高**是主要抱怨点，严重影响可用性。
*   **满意点：** 用户对 WebUI 的**视觉流畅度**（流式动画）和**操作便捷性**（预设切换、首次设置向导）表示认可。
*   **场景：** 微信和 Telegram 用户高度依赖**长消息的正确渲染**和**流式响应**，任何中断都会导致体验下降。
*   **期望：** 用户希望 Agent 能更智能地处理**子任务委托**（内联子代理）和**多模态内容**的无缝传递。

## 8. 待处理积压
*   **Issue #4858:** MCP 生命周期重构。这是清理 `AgentLoop` 复杂度的关键，建议优先排期。
*   **Issue #4064:** Pending 消息丢失运行时上下文。由于之前的修复被撤销，此问题处于悬而未决状态，需要新的架构级解决方案。
*   **PR #4383:** Globalping MCP 预设。功能明确且价值清晰，若测试通过可快速合并。
*   **PR #5081:** v0.3.0 版本准备。需确保所有依赖此版本的依赖项和文档同步更新。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-25
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，过去24小时内共产生 100 次代码库交互（50 Issues + 50 PRs），其中 82% 的 PRs 处于待合并状态，显示开发团队正在进行高强度的功能迭代与 bug 修复。社区反馈集中在 **Windows 平台的稳定性**、**内存/文件编码处理** 以及 **会话状态管理** 上。尽管没有新版本发布，但大量针对桌面端启动失败、SQLite 数据库损坏及编码错误的修复 PR 已提交，预示着下一版本将重点解决这些长期存在的兼容性痛点。整体项目健康度良好，但 Windows 环境的健壮性仍是当前主要挑战。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭或新提交的 PR 主要聚焦于底层稳定性和用户体验优化：

*   **会话压缩与状态修复：** PR #71115 引入了当 `archive_and_compact` 失败时的回退机制，防止静默错误导致会话状态不一致。PR #71123 改进了会话导出逻辑，确保在级联删除子会话前先验证转录数据。
*   **API 与服务增强：** PR #71130 修复了 MoA fan-out 事件未转发至 SSE 客户端的问题。PR #71129 和 #71128 完善了计费接口，暴露 `cost_status` 并正确处理未定价模型的 NULL 成本记录，提升了 API 的可观测性。
*   **配置与 CLI 改进：** Watergard 提交了一系列 CLI 修复（PR #71124 - #71127），包括 Kanban 默认分配者作用域修正、config show 显示遗漏字段、以及处理含点号的分层配置键值，显著提升了 CLI 的可用性。
*   **性能优化：** PR #67350 为 Insights 查询添加了 SQLite 索引，解决了大数据量下工具调用统计查询缓慢的问题。
*   **安全加固：** PR #71120 增加了 `/v1/runs` 端点对 `session_id` 的路径安全检查，防止潜在的路径遍历或控制字符注入风险。

## 4. 社区热点
以下是今日讨论最激烈、评论数最多的 Issue：

*   **[CLOSED] Desktop boot fails on Windows (Issue #60144)**
    *   **链接:** [NousResearch/hermes-agent Issue #60144](https://github.com/NousResearch/hermes-agent/issues/60144)
    *   **分析:** 用户报告在 Windows 上因 MCP 注册超时导致桌面端无法启动。此问题虽已关闭，但反映了 Windows 环境下异步初始化的脆弱性，是社区近期关注的核心痛点之一。
*   **[CLOSED] Windows bootstrap installer unsigned binary blocked (Issue #50210)**
    *   **链接:** [NousResearch/hermes-agent Issue #50210](https://github.com/NousResearch/hermes-agent/issues/50210)
    *   **分析:** Smart App Control 阻止未签名的 `Hermes.exe`。虽然 Issue 已关闭，但结合今日 PR #71119（修复更新后二进制文件损坏/架构不匹配问题），表明团队正在系统性解决 Windows 桌面端的信任链和完整性问题。
*   **[CLOSED] state.db zeroed during update (Issue #68474)**
    *   **链接:** [NousResearch/hermes-agent Issue #68474](https://github.com/NousResearch/hermes-agent/issues/68474)
    *   **分析:** 更新过程中 SQLite 数据库被清零。这是一个严重的数据丢失风险。虽然 Issue 已关闭，但其背后的并发写入竞争条件（Race Condition）仍是潜在隐患，需关注相关修复 PR 是否彻底解决了 `state.db` 的原子性更新问题。
*   **[OPEN] MCP Smart Loading Feature Request (Issue #66473)**
    *   **链接:** [NousResearch/hermes-agent Issue #66473](https://github.com/NousResearch/hermes-agent/issues/66473)
    *   **分析:** 用户强烈呼吁实现 MCP 服务的懒加载和按会话隔离，以减少启动开销和资源占用。这是社区呼声最高的功能请求之一，可能影响未来的架构设计。
*   **[OPEN] Bedrock image upload rejection (Issue #33317)**
    *   **链接:** [NousResearch/hermes-agent Issue #33317](https://github.com/NousResearch/hermes-agent/issues/33317)
    *   **分析:** Bedrock 适配器对图片数据的 Base64 编码处理错误，导致所有图片上传失败。这影响了 AWS 用户的日常使用，是一个明确的兼容性 Bug。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 **编码处理** 和 **Windows 平台兼容性** 上：

| 严重程度 | 问题描述 | 关联 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **P1** | **Windows 桌面端启动失败**：MCP 注册超时导致 Electron 进程崩溃。 | [Issue #60144](https://github.com/NousResearch/hermes-agent/issues/60144) | Closed |
| **P1** | **数据丢失风险**：更新导致 `state.db` 全零化；Bootstrap 安装器产生未签名可执行文件被拦截。 | [Issue #68474](https://github.com/NousResearch/hermes-agent/issues/68474)<br>[Issue #50210](https://github.com/NousResearch/hermes-agent/issues/50210) | Closed |
| **P2** | **UnicodeDecodeError 泛滥**：`MEMORY.md`, `USER.md`, `.env`, `lock.json` 等文件中存在 BOM 或非 UTF-8 字节导致程序崩溃或静默失效。 | [Issue #10878](https://github.com/NousResearch/hermes-agent/issues/10878)<br>[Issue #10879](https://github.com/NousResearch/hermes-agent/issues/10879)<br>[Issue #57754](https://github.com/NousResearch/hermes-agent/issues/57754)<br>[Issue #65123](https://github.com/NousResearch/hermes-agent/issues/65123) | Open/Closed Mix |
| **P2** | **Windows 特定崩溃**：中文 Windows 下 `skills check` 崩溃；Cron 脚本 stdout 输出包含 Emoji 时被丢弃或乱码。 | [Issue #68369](https://github.com/NousResearch/hermes-agent/issues/68369)<br>[Issue #42384](https://github.com/NousResearch/hermes-agent/issues/42384) | Open |
| **P2** | **Desktop 渲染异常**：远程网关连通性检查误报；附件文件名 Unicode 解码错误。 | [Issue #69230](https://github.com/NousResearch/hermes-agent/issues/69230)<br>[PR #68788](https://github.com/NousResearch/hermes-agent/pull/68788) | Open/Fixed |

**注意：** 多个编码相关的 Bug（如 #10878, #10879, #57754, #65123）指向同一个根因：`MemoryStore._read_file()` 和其他文件读取函数缺乏健壮的编码容错处理。虽然部分 Issue 标记为 Closed，但类似的编码问题仍在不同模块（如 `.env` 解析）中出现。

## 6. 功能请求与路线图信号
*   **MCP 智能加载 (Issue #66473):** 用户希望实现 MCP 服务器的懒连接、工具预算控制和按会话隔离。这与当前 Hermes 在启动时加载所有 MCP 服务器导致的性能问题形成对比，是未来版本优化的重要方向。
*   **Microsoft Agent Governance Toolkit (Issue #69128):** 企业用户提出集成 AGT 以完善治理基础设施（审批、沙箱、环境过滤）。这表明 Hermes 正在从个人开发者工具向企业级 AI 代理平台演进，治理功能是关键路线图。
*   **Per-session Auto-injection Skills (Issue #26709):** 用户希望在每个新会话开始时自动注入特定技能，而非仅通过用户指令触发。这暗示了对“预配置工作流”需求的增加。
*   **Session Export & Deletion Safety (PR #71123):** 虽然这是 Bug 修复，但也体现了用户对会话数据完整性和可控性的重视，可能推动更完善的会话管理 API。

## 7. 用户反馈摘要
*   **Windows 体验不佳:** 大量反馈指出 Windows 版本存在启动失败、编码崩溃、签名拦截等问题。用户抱怨“在 Linux/Mac 上运行完美，但在 Windows 上充满陷阱”。
*   **配置文件敏感性:** 用户对 `.env` 文件中 BOM 导致的静默密钥丢失感到困惑和沮丧，因为没有任何警告信息。
*   **记忆系统脆弱:** `MEMORY.md` 或 `USER.md` 中的任何非标准字符都会导致整个记忆功能失效且无日志，用户难以排查。
*   **API 可观测性不足:** 用户希望从 API 响应中获取更详细的成本状态（真实成本 vs 估算成本 vs 未知），以便进行精确的预算控制。
*   **对修复的期待:** 社区对 PR #71119（更新前校验二进制完整性）和 PR #71120（路径安全校验）表示欢迎，认为这些补丁增强了软件的鲁棒性。

## 8. 待处理积压
*   **Bedrock Adapter Image Handling (Issue #33317):** 这是一个明确的 P3 Bug，但影响 AWS 用户的核心视觉能力。需要确认是否有对应的 Fix PR 已被合并或即将合并。
*   **Z.AI API Key 检查缺失 (Issue #35266):** CLI 状态检查命令未能正确识别 `ZAI_API_KEY`，导致误报。这是一个简单的配置检查 Bug，应优先修复以提升 CLI 可信度。
*   **Kimi Provider Brotli 解码 Bug (Issue #48428):** 长期存在的流式解码问题，可能导致 API 调用失败。需要关注 httpx 库升级或内部工作区修复。
*   **Write File 权限限制 (Issue #47107):** 代理无法写入自身的 `.env` 文件，限制了自动化配置管理的能力。用户希望看到更灵活的权限策略或白名单机制。
*   **SubdirectoryHintTracker 相对路径忽略 (Issue #11032):** 代理在处理相对路径 `cd dir && ...` 时丢失上下文，影响多目录项目的导航准确性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-07-25
**数据来源：** GitHub sipeed/picoclaw

## 1. 今日速览
PicoClaw 项目在 2026 年 7 月 25 日保持了较高的社区活跃度，过去 24 小时内共处理了 11 个关键任务（3 个 Issues + 8 个 PRs）。虽然未发布新版本，但代码库在**性能优化**和**本地化支持**方面取得了显著进展。值得注意的是，一位核心贡献者 `corporatepiyush` 连续提交了多个针对内存分配和 XML 转义的重构 PR，显示出项目正在积极进行底层代码清理以换取运行时性能提升。同时，前端交互体验（如输入框 CPU 占用）和安全加固（MQTT TLS）也是当前的关注焦点。

## 2. 版本发布
*   **无新版本发布。**
*   当前最新稳定版仍为 v0.3.1（基于 Issue #3292 的环境信息推断）。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在**后端性能优化**、**安全加固**及**多语言支持**上：

*   **🚀 性能与内存优化 (由 `corporatepiyush` 主导):**
    *   **[PR #3243](https://github.com/sipeed/picoclaw/pull/3243)**: 重构 `seahorse` 模块中的压缩字符串辅助函数，使用 `strings.Builder` 替代低效的字符串拼接，消除了 O(n²) 的时间复杂度问题。
    *   **[PR #3244](https://github.com/sipeed/picoclaw/pull/3244)** & **[PR #3245](https://github.com/sipeed/picoclaw/pull/3245)**: 优化 `escapeXML` 函数，将多次 `strings.ReplaceAll` 替换为单次遍历的 `strings.NewReplacer`，显著减少了内存分配次数。
    *   **影响评估**: 这些重构直接提升了长对话上下文压缩和 XML 处理时的 CPU 效率，对资源受限环境（如边缘设备）尤为有益。

*   **🔒 安全加固:**
    *   **[PR #3246](https://github.com/sipeed/picoclaw/pull/3246)**: 修复了 MQTT 通道中默认禁用 TLS 证书验证的安全隐患，增加了 OAuth 超时控制和搜索读取限制。这是项目安全性的重要里程碑。

*   **🌍 本地化扩展:**
    *   **[PR #3261](https://github.com/sipeed/picoclaw/pull/3261)**: 新增繁体中文 (zh-TW) 支持，统一了 WebUI 和文档中的术语。
    *   **[PR #3247](https://github.com/sipeed/picoclaw/pull/3247)**: 补充了捷克语 (cs) 的代码换行选项翻译。

## 4. 社区热点
*   **QQ 频道流式输出需求**:
    *   **[Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)**: 用户请求在 QQ 频道实现类似 Telegram 的 Token-by-Token 流式输出。目前该功能仅在 Telegram 和 Pico WebSocket 中实现。
    *   **分析**: 这反映了用户对即时反馈体验的高要求，尤其是对于国内主流社交平台 QQ 的支持完善度是社区期待的重点。
*   **Discord 消息处理稳定性**:
    *   **[PR #323](https://github.com/sipeed/picoclaw/pull/323)** (虽创建较早但今日关闭): 解决了 Discord 频道因消息长度限制导致的 400 错误，并改进了打字状态指示。
    *   **分析**: 表明维护者正在逐步清理长期积压的渠道兼容性问题。

## 5. Bug 与稳定性
*   **🔴 高优先级: 聊天界面输入框高 CPU 占用**
    *   **[Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)**: 用户在 Firefox 下选中聊天输入框时观察到 CPU 占用过高。
    *   **状态**: 已关联修复 PR **[PR #3293](https://github.com/sipeed/picoclaw/pull/3293)** (作者: Acdfmwaopuio)，今日已关闭。
    *   **结论**: 该性能瓶颈预计已在最新代码中解决。

*   **🟡 中优先级: 历史记录消息显示异常**
    *   **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)**: 在多轮对话的历史记录中，仅能查看到最后一条用户消息，之前的消息丢失或不可见。
    *   **状态**: 已关闭 (标记为 stale)。
    *   **风险**: 由于被标记为 stale 而非明确修复，需确认是否真正解决或仅是因长时间无响应而关闭。建议验证此回归问题。

## 6. 功能请求与路线图信号
*   **QQ 频道高级特性**: 来自 [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) 的请求强烈暗示下一版本可能优先适配 QQ 频道的流式传输能力，以缩小与其他渠道的功能差距。
*   **国际化深化**: 通过 [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) 和 [PR #3247](https://github.com/sipeed/picoclaw/pull/3247)，可以看出项目正致力于完善非英语语言环境，特别是亚洲市场（繁体中文）和中欧市场（捷克语）。

## 7. 用户反馈摘要
*   **痛点**: 用户非常在意**实时性**（希望 QQ 也能流式输出）和**基础性能**（输入框卡顿/高 CPU）。
*   **满意度**: 对于底层重构（如内存优化），虽然普通用户不可见，但贡献者社区对此类提升系统健壮性的工作持积极态度。
*   **场景**: 用户主要在 Debian/Linux x64 环境下使用 DeepSeek-v4-flash 模型，并通过 WebUI (Firefox) 进行交互，这表明 PicoClaw 在 Linux 桌面端的 Web 集成场景中有稳固的用户群。

## 8. 待处理积压
*   **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)**: 尽管状态为 Closed，但其 "stale" 标签和关于历史消息完整性的描述暗示可能存在未彻底解决的 UI/数据展示逻辑缺陷。建议维护者在下次发布前复查此问题的实际修复情况。
*   **[PR #3261](https://github.com/sipeed/picoclaw/pull/3261)**: 繁体中文本地化 PR 状态为 Open/Stale，若意图合并，需尽快完成审查；若不再需要，应正式关闭以避免混淆。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-07-25
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
今日 NanoClaw 项目保持中等活跃度，核心开发团队（glifocat, amit-shafnir）贡献了 6 个 Pull Requests，主要集中在 `agent-runner`、`opencode` 兼容性、聊天交互体验及模板系统的底层修复。尽管 Issues 区今日无新增讨论，但 PR 的密集提交表明内部迭代节奏稳定。整体来看，项目正致力于提升多智能体组管理的灵活性（时区支持）以及前端与后端通信的稳定性，暂无重大新功能发布或版本升级。

## 2. 版本发布
*   **状态：** 无新版本发布。

## 3. 项目进展
今日合并/关闭的重要 PR 及对项目的推进作用：

*   **[CLOSED] #3123** - *Pacific changes. Wrong PR.*
    *   **作者:** iamarunkumark
    *   **进展：** 该 PR 因提交错误被直接关闭。虽未产生代码变更，但反映了社区成员试图参与贡献的过程，需留意后续是否有正确的 PR 跟进。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/3123)

*   **[OPEN] #3126** - *fix(agent-runner): never deliver silence when a nudged chat turn stays bare*
    *   **作者:** glifocat
    *   **进展：** 修复了 Agent Runner 中的交互逻辑缺陷，确保在特定聊天轮次状态下不会错误地返回“静默”响应，提升了代理行为的确定性。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/3126)

*   **[OPEN] #3122** - *fix(opencode): main compatibility, custom-endpoint transport, memory parity*
    *   **作者:** glifocat
    *   **进展：** 解决了 OpenCode 模块的主分支兼容性问题，优化了自定义端点的传输机制，并确保了内存状态的一致性。这是基础设施层面的关键修复，有助于降低集成复杂度。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/3122)

*   **[OPEN] #3125** - *feat: per-agent-group timezone override*
    *   **作者:** Koshkoshinsk
    *   **进展：** 引入了按智能体组（Agent Group）设置时区覆盖的新功能。通过 `ncl groups config update --timezone` 命令实现，支持从局部到全局的时区解析优先级。这一功能增强了多时区分布式智能体部署的管理能力。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/3125)

*   **[OPEN] #3093** - *fix(chat): keep typing active for processing turns*
    *   **作者:** amit-shafnir
    *   **进展：** 改进了聊天界面的用户体验，确保在处理轮次期间保持“正在输入”状态，避免用户误以为系统无响应。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/3093)

*   **[OPEN] #3124** - *fix: report unavailable MCP servers*
    *   **作者:** shixi-li
    *   **进展：** 增强了对 Model Context Protocol (MCP) 服务器状态的监控，当服务器不可用时提供明确的报告而非静默失败，提升了调试效率。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/3124)

*   **[OPEN] #3090** - *fix(templates): prepend all top-level context Markdown*
    *   **作者:** amit-shafnir
    *   **进展：** 修复了模板系统中上下文 Markdown 的处理逻辑，确保所有顶级上下文内容都能正确前置，保障了提示词构建的完整性。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/3090)

## 4. 社区热点
*   **今日活跃讨论：** 无显著活跃的 Issue 讨论。
*   **PR 关注度分析：**
    *   **#3125 (per-agent-group timezone override)** 是今日最具功能扩展性的 PR，满足了复杂部署场景下的精细化控制需求。
    *   **#3122 和 #3090** 涉及底层兼容性和模板渲染，对于依赖这些模块的用户而言至关重要，虽然目前评论数为 undefined/0，但其修复性质意味着一旦合并将直接影响稳定性。

## 5. Bug 与稳定性
今日报告的修复主要集中于逻辑缺陷和状态同步问题，未发现严重的崩溃类 Bug。

*   **高优先级修复：**
    *   **#3126:** 修复 Agent Runner 在特定 nudged chat turn 下错误返回静默的问题。这属于行为逻辑 Bug，可能影响自动化流程的可靠性。
    *   **#3122:** 修复 OpenCode 的兼容性和内存parity问题。此类底层不一致可能导致难以复现的内存泄漏或数据不同步。
    *   **#3124:** 修复 MCP 服务器不可用时的反馈缺失。这属于可观测性 Bug，影响运维排查效率。
*   **中优先级修复：**
    *   **#3093 & #3090:** 分别修复了 UI 状态显示和模板上下文拼接问题，改善了最终用户的交互体验和配置准确性。

## 6. 功能请求与路线图信号
*   **时区管理精细化 (#3125):** PR #3125 展示了项目对多智能体组独立配置能力的重视。这表明路线图中包含更多针对“组级”而非“全局”的配置选项，旨在支持更复杂的组织架构模拟。
*   **MCP 生态整合 (#3124):** 对 MCP 服务器状态的详细报告，暗示项目正在加强对外部工具和服务连接的健壮性支持，未来可能会有更多关于第三方服务集成的改进。

## 7. 用户反馈摘要
*   **痛点：** 用户对于“静默失败”或“状态不明确”非常敏感。#3126 和 #3124 的修复直接回应了用户在调试代理行为和检查外部服务连接时的挫败感。
*   **需求：** #3125 的提出者 Koshkoshinsk 代表了需要跨时区管理智能体组的用户群体，他们希望获得比全局配置更细粒度的控制权。
*   **满意度：** 尽管没有直接的评论反馈，但密集的修复类 PR（Fix）表明维护团队正在积极响应用户在使用过程中遇到的细微但影响体验的问题。

## 8. 待处理积压
*   **#3123 (Closed):** 虽然已关闭，但标题 "Pacific changes. Wrong PR." 暗示可能存在未提交的正确更改或误解。建议关注该提交者是否有后续的正确 PR，以免遗漏有价值的太平洋时区相关修复。
*   **长期未响应 Issue:** 今日无新 Issue，但需回顾过往是否存在关于 `opencode` 兼容性或模板渲染的遗留问题，确保 #3122 和 #3090 合并后能彻底解决相关历史包袱。

---
*注：以上分析基于 2026-07-25 发布的 GitHub 数据。所有 PR 链接指向 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-07-25
**数据来源**: GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 在 v1 发布冲刺阶段（Reborn）展现出极高的开发活跃度，过去 24 小时内产生 32 个 Issues 和 50 个 PRs，其中 19 个 PR 已合并。核心焦点集中在 **WebUI 性能优化**、**v1 发布前的最后修复（Bug Bash）** 以及 **签名与安全子系统的长期加固**。尽管无新版本正式发行，但大量合并的 PR 表明底层架构正在快速收敛，特别是依赖更新和扩展主机重构为后续稳定版奠定了坚实基础。

## 2. 版本发布
*   **状态**: 无新 Release 发布。
*   **背景**: 当前处于 `1.0.0-rc.x` 候选版本迭代期，重点在于修复 RC 阶段的回归问题和性能瓶颈，而非功能新增。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了项目的工程质量和安全性：

*   **依赖与构建优化**:
    *   [#6640](https://github.com/nearai/ironclaw/pull/6640): 批量更新了 `async-trait`, `thiserror`, `uuid` 等 Rust 核心依赖，提升了运行时稳定性。
    *   [#6428](https://github.com/nearai/ironclaw/pull/6428) & [#6361](https://github.com/nearai/ironclaw/pull/6361): 更新了 `tokio` 生态及 `serde` 序列化库，确保异步运行时和数据处理层的最新特性与安全补丁。
    *   [#6663](https://github.com/nearai/ironclaw/pull/6663): 重构了默认 `cargo run` 行为，使其直接启动 WebUI 服务并简化了本地开发体验。
*   **安全与签名子系统 (Attested Signing)**:
    *   [#4058](https://github.com/nearai/ironclaw/pull/4058), [#4060](https://github.com/nearai/ironclaw/pull/4060), [#4104](https://github.com/nearai/ironclaw/pull/4104), [#4055](https://github.com/nearai/ironclaw/pull/4055), [#4054](https://github.com/nearai/ironclaw/pull/4054): 一系列关于 KMS 故障关闭机制、信任注册仪式、多租户隔离及续期绑定的 PR 被合并或推进。这标志着 Reborn 的核心安全契约已趋于完善，解决了早期版本中潜在的信任链断裂风险。
*   **扩展与能力管理**:
    *   [#6616](https://github.com/nearai/ironclaw/pull/6616): 将扩展宿主逻辑从 Composition 模块解耦至独立的 `ironclaw_extension_host`，降低了模块耦合度。
    *   [#6531](https://github.com/nearai/ironclaw/pull/6531): 实现了 Manifest V3 OAuth 配置在运行时的原子应用，增强了多租户环境下的配置一致性。
    *   [#6655](https://github.com/nearai/ironclaw/pull/6655): 规范化了基于文件系统的扩展状态记录，提高了持久化的可靠性。

## 4. 社区热点
以下 Issues 引发了较多讨论或代表了关键的技术方向：

*   **[EPIC] Error Recoverability Endgame (#6284)**: 作者 `serrrfirat` 提出的核心目标，要求模型能从 100% 的错误中恢复。这是 Reborn 架构的基石，评论数虽不多但权重极高，定义了系统的韧性标准。
*   **Hermetic Capability & Journey Testing Platform (#6524)**: 旨在解决“机械性”测试覆盖问题，确保每个关键用户旅程都有确定性覆盖。反映了团队对自动化测试完备性的迫切需求。
*   **WebUI Bundle Size & Performance Epic (#6628)**: 由 `italic-jinxin` 发起，针对初始加载慢、JS 体积大等问题提出代码分割、懒加载和静态资源压缩方案。这是提升用户体验的关键技术债清理工作。
*   **Reliable Skill Discovery (#6565)**: 指出当前技能发现机制不可靠，特别是 TurnCoordinator 路径未正确运行自动激活管线。这是影响 Agent 智能感知的核心缺陷。

## 5. Bug 与稳定性
今日报告了大量 UI/UX 和功能逻辑层面的 Bug，主要集中在 staging 环境和 Railway 部署实例上，显示出 v1 发布前 QA 力度加大：

*   **P1 级严重 Bug**:
    *   [#6645](https://github.com/nearai/ironclaw/issues/6645): Slack DM 发送成功但实际未送达（工具报告成功但无后续交付）。
    *   [#6644](https://github.com/nearai/ironclaw/issues/6644): Telegram 回复错配，回复发送给错误的用户消息上下文。
    *   [#6643](https://github.com/nearai/ironclaw/issues/6643): Telegram 配对后消息进入“死胡同”，未被处理。
    *   [#6650](https://github.com/nearai/ironclaw/issues/6650): Agent 编造 AQI 数据，缺乏事实核查机制。
    *   [#6646](https://github.com/nearai/ironclaw/issues/6646): 忽略 Google Sheets 写入操作，仅报告邮件内容。
*   **P2 级 UI/交互 Bug**:
    *   [#6651](https://github.com/nearai/ironclaw/issues/6651): UI 重复显示用户问题文本。
    *   [#6649](https://github.com/nearai/ironclaw/issues/6649): 工具活动面板渲染滞后，无法实时跟踪执行状态。
    *   [#6648](https://github.com/nearai/ironclaw/issues/6648): 工具失败消息重复且不一致。
    *   [#6623](https://github.com/nearai/ironclaw/issues/6623): 聊天失败消息硬编码英文，忽略本地化设置。
    *   [#6622](https://github.com/nearai/ironclaw/issues/6622): 自动化列表过滤时出现全屏加载骨架屏闪烁。
    *   [#6621](https://github.com/nearai/ironclaw/issues/6621): 扩展配置模态框未正确管理键盘焦点，无障碍性差。
    *   [#6642](https://github.com/nearai/ironclaw/issues/6642): CLI 模型列表显示陈旧配置，与后端设置不同步。

## 6. 功能请求与路线图信号
*   **Skill Self-Creation (#6641)**: 提出设计文档，允许 Agent 将困难任务的学习成果转化为可复用的“技能”。这表明路线图正从“人工定义技能”向“自适应技能生成”演进。
*   **Process Journal Kernel (#6666)**: 提议将进程日志内核移入 `ironclaw_processes`，以提供更耐久的 spawn/monitor/suspend 功能。这暗示未来将增强 Agent 的生命周期管理能力。
*   **Manifest V3 Migration (#6490)**: 已完成定义，下一步将是具体的实现和迁移，这将彻底改变扩展的兼容性策略。

## 7. 用户反馈摘要
*   **痛点**: 用户（主要是内部 QA 和早期采用者）对 **通道集成（Slack/Telegram）的可靠性** 感到担忧，多个 P1 级别 Bug 涉及消息丢失或错乱。此外，**WebUI 的性能和流畅度**（如加载卡顿、焦点丢失、重复渲染）也是主要抱怨点。
*   **满意点**: 依赖更新的自动化（Dependabot）和核心安全子系统的持续加固获得了正面关注，表明基础设施层正在变得稳健。
*   **使用场景**: 用户在测试 Agent 处理多步骤任务（如同时操作 Gmail 和 Google Sheets）时的意图保持和数据一致性方面遇到了挑战。

## 8. 待处理积压
*   **#6635 [CI] Restore Docker image build**: CI 管道中 Docker 镜像构建缺失，可能影响容器化部署流程，需尽快恢复。
*   **#6647 Design**: 标题为空，可能是设计讨论的占位符，需确认具体内容。
*   **#6633 Daily ironclaw failure taxonomy**: 虽然已关闭或归档每日报告，但其中提到的 `pinchbench` 模型结果失败需要持续关注，确保非 Harness 缺陷导致的误报被排除。

---
*分析师: Agnes-2.0-Flash | 生成时间: 2026-07-25*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-07-25
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 在过去24小时内保持高活跃度，共处理 **69** 项更新（19 Issues + 50 PRs）。项目处于快速迭代期，核心焦点集中在 **Cowork（协作）模块的稳定性修复**、**Windows 构建流程的安全加固**以及 **IM 定时任务的路由修复**。尽管有 1 个新版本发布，但社区反馈显示底层引擎连接和模型调用仍存在若干阻塞性 Bug，整体健康度良好但需关注后端稳定性。

## 2. 版本发布
**LobsterAI 2026.7.23**
*   **发布日期：** 2026-07-23
*   **主要变更：**
    *   **AI Skin 优化：** 改进了 AI 皮肤创建流程，提升用户体验 (#2361)。
    *   **Browser Cowork 增强：** 支持浏览器多注释附件功能，增强上下文处理能力 (#2366)。
    *   **构建系统：** 为 Wind 平台添加了明确的渠道入口点 (#2368)。
*   **迁移注意：** 无已知破坏性变更，但建议用户检查自定义皮肤配置是否兼容新流程。

## 3. 项目进展
今日合并/关闭了 **43** 个 PR，主要集中在以下领域：

*   **安全与稳定性加固 (Security & Stability):**
    *   **#2327:** 修复 Windows 应用二进制文件签名问题，解决因杀毒软件拦截导致的安装挂起问题。
    *   **#2326:** 优化 Windows 安装包资源解压逻辑，实现中断后的自我修复机制。
    *   **#1831 - #1833:** 一系列安全修复，包括脱敏主进程日志、限制 Store IPC 越权访问、以及 `shell.openExternal` 的 Scheme 白名单过滤，显著提升了桌面端安全性。
*   **Cowork 模块优化:**
    *   **#2382:** 改进模型超时处理逻辑，区分网络故障与响应超时，并提供本地等待提示。
    *   **#2264:** 优化大会话渲染性能，减少工具结果格式化开销，并增加诊断包导出功能。
    *   **#2299 & #2261:** 修复子代理 (Subagent) 的工具历史同步和面板时间戳显示问题。
*   **IM 与定时任务:**
    *   **#2314 & #2306:** 修复企微和钉钉群聊 ID 大小写敏感性问题，确保定时任务能正确路由到原生 IM 群组。
    *   **#2231:** 恢复基于 Gateway 的计划任务运行历史记录。

## 4. 社区热点
以下 Issue 和 PR 获得了较高的关注度或代表了当前社区的焦点：

*   **[Bug] DeepSeek V4 无法使用 / LLM Request Failed**
    *   **Issue #1813:** 用户报告 DeepSeek V4 模型请求被拒绝，涉及 Schema 或 Tool Payload 错误。
    *   **关联分析：** 可能与新发布的皮肤创建流程或内部模型路由变更有关，需结合 PR #2382 (超时处理) 进一步排查。
*   **[Feature] 支持 Kimi K3 模型**
    *   **PR #2381:** 贡献者提交了支持 Kimi K3 模型的代码。
    *   **状态：** 开放中，反映了用户对新增主流国产大模型支持的强烈需求。
*   **[Feature] 集成 LiteLLM 作为网关**
    *   **PR #2193:** 建议添加 LiteLLM 作为 AI 网关提供商，以统一接入 100+ LLM。
    *   **价值：** 这将极大扩展 LobsterAI 的模型兼容性，符合开源社区对灵活性的期待。
*   **[Security] 邮箱 Skill 路径穿越漏洞**
    *   **Issue #1885:** 披露了 `imap.js` 中的路径穿越漏洞，攻击者可利用恶意附件名称下载任意文件。
    *   **风险：** 高危。虽然已有相关安全 PR (#1831-#1833) 在推进，但该特定 Skill 的漏洞仍需单独确认修复状态。

## 5. Bug 与稳定性
按严重程度排列的已知问题：

1.  **AI Engine 连接丢失 (Critical)**
    *   **Issue #1993:** 桌面版应用频繁显示 "AI engine connection lost"，而 IM Bot 模式稳定。这表明 Electron 主进程与 OpenClaw 后端之间的通信存在瓶颈或配置差异。
2.  **模型调用强制切换 (High)**
    *   **Issue #1988:** 更新后，阿里百炼的 Coding Plan 无法调用 Qwen3.6-plus，系统强制切换至网易自带模型且提示额度不足。配置文件修改无效。
3.  **本地运行登录失败 (High)**
    *   **Issue #2017:** 本地开发者版本报错“未检测到内置 OpenClaw runtime”，导致无法登录和创建任务。
4.  **UI 滚动异常 (Medium)**
    *   **Issue #1971:** 会话页包含超长元素（如 Mermaid 图表）时，向上滚动会出现异常或卡死，疑似虚拟滚动实现缺陷。
5.  **追问输出中断 (Medium)**
    *   **Issue #1849:** 追问时出现无限 `NO_REPLY` 或输出几个字后停止，原因是任务被提前标记为完成但模型仍在输出。

## 6. 功能请求与路线图信号
*   **对话管理：**
    *   **Issue #1797:** 请求增加批量删除对话功能，以保持上下文有效性。这是一个高频用户需求，可能纳入后续 UI 优化。
*   **Agent 生态扩展：**
    *   **Issue #1880:** 建议集成 Hermes Agent 和 OpenHuman 引擎。
    *   **Issue #2040 & #2041:** 深度讨论 OpenClaw 的五大薄弱点（记忆缺失、安全、成本等），并对比 Self-Evolver 现状。这暗示项目路线图可能侧重于 **长期记忆系统** 和 **成本优化** 的改进。
*   **安全与隐私：**
    *   社区对日志脱敏和权限控制的关注度高（Issue #1831-#1833 的关联讨论），未来版本可能会进一步强化本地数据隐私保护机制。

## 7. 用户反馈摘要
*   **痛点：**
    *   **连接稳定性：** 桌面端与后端的连接不稳定是最大抱怨点 (#1993, #1813)。
    *   **模型配置失效：** 用户自定义的模型提供商（如阿里百炼）在更新后被覆盖或无法使用，体验极差 (#1988)。
    *   **UI/UX 粗糙：** 多个 Issue (#1836, #1920, #1921) 指出界面设计落后于竞品，加载状态缺乏骨架屏，空状态页面简陋。
*   **满意点：**
    *   **功能丰富度：** 用户对 Browser Cowork 多附件、微信 IM 机器人等功能表现出兴趣，尽管配置过程仍有摩擦 (#1878)。
    *   **社区贡献：** 大量 PR 来自社区贡献者（如 fisherdaddy, btc69m979y-dotcom），显示了活跃的开源生态。

## 8. 待处理积压
维护者需重点关注以下长期未解决或标记为 `stale` 的问题：

*   **Issue #1813:** DeepSeek V4 兼容性问题（已 stale，影响特定模型用户）。
*   **Issue #1849:** 追问输出中断问题（已 stale，影响核心聊天体验）。
*   **Issue #1878:** 微信 IM 机器人扫码后无法输入验证码（已 stale，阻碍 IM 集成用户）。
*   **Issue #1796:** Write/Edit 工具执行持续失败（已 stale，影响自动化任务）。
*   **PR #2381:** 支持 Kimi K3 模型（开放中，若合并可提升模型吸引力）。
*   **PR #2193:** 集成 LiteLLM 网关（开放中，架构级改进，值得优先审查）。

---
*注：本报告基于 2026-07-25 00:00 至 2026-07-25 23:59 (UTC+8) 期间的 GitHub 数据生成。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**：2026-07-25
**数据来源**：GitHub (moltis-org/moltis)

## 1. 今日速览
Moltis 项目在 2026-07-24 呈现出**高专注度的功能开发状态**，核心活动集中在 Slack 集成模块的深度优化上。过去 24 小时内无新 Issue 提交或版本发布，但收到了 2 条由核心贡献者 `penso` 提交的重大 Pull Requests（PR #1165 和 PR #1166）。这两项 PR 均处于待合并状态，主要解决 Slack 交互中的关键体验痛点（如消息确认机制、重连逻辑及 Bug 修复），显示出项目在提升平台兼容性和稳定性方面的积极进展。整体项目健康度良好，开发节奏紧凑且目标明确。

## 2. 版本发布
*   **状态**：无新版本发布。

## 3. 项目进展
今日主要推进了 Slack 集成的两项关键功能改进，目前均有 2 条 PR 等待合并：

*   **Slack 消息确认与反应触发器 (PR #1165)**：
    *   **链接**：[PR #1165](https://github.com/moltis-org/moltis/pull/1165)
    *   **进展说明**：解决了 Slack Bot 无法显示“正在输入”指示器的用户体验盲区。通过引入“反应确认（Reaction Acknowledgments）”和“入站反应触发器”，增强了用户与 Agent 之间的交互反馈闭环。同时修复了线程回复中可能出现的错误消息问题。
*   **Slack 集成增强与 Bug 修复 (PR #1166)**：
    *   **链接**：[PR #1166](https://github.com/moltis-org/moltis/pull/1166)
    *   **进展说明**：作为 #1165 的后续跟进，此 PR 实现了更复杂的 Slack 功能，包括阶段反应处理、断线重连监督机制、Block Kit 支持以及一个关键的 `chat.send` 异步执行 Bug 修复。该修复确保了 Agent 运行不会因立即返回而中断，提升了集成的健壮性。

## 4. 社区热点
今日社区讨论热度主要集中在 Slack 集成的技术实现细节上，由于缺乏公开的 Issue 评论数据，以下基于 PR 摘要分析潜在诉求：

*   **PR #1166** ([链接](https://github.com/moltis-org/moltis/pull/1166))
    *   **背后诉求**：用户对 Slack 集成的可靠性要求极高。`chat.send` 的 Bug 修复表明开发者正在解决异步执行与同步响应之间的竞态条件，这是企业级 AI 助手稳定性的关键指标。Block Kit 的支持则反映了用户对富文本界面交互的需求。
*   **PR #1165** ([链接](https://github.com/moltis-org/moltis/pull/1165))
    *   **背后诉求**：改善“黑盒”交互体验。用户希望在使用 Slack 时能明确感知到系统已接收指令并正在处理，反应触发器的引入旨在利用 Slack 的原生特性弥补 Bot 交互的滞后感。

## 5. Bug 与稳定性
*   **关键 Bug 修复**：
    *   **问题描述**：在 PR #1166 中修复了一个 `premature-ack bug`。具体表现为 `chat.send` 在启动 Agent 运行时立即返回，可能导致前端或上层应用误判任务已完成，从而引发后续逻辑错误。
    *   **严重程度**：高（影响核心交互流程的正确性）。
    *   **Fix PR**：[PR #1166](https://github.com/moltis-org/moltis/pull/1166)
*   **其他稳定性改进**：
    *   引入了 Slack 连接的“重连监督（reconnect supervision）”，增强了网络不稳定情况下的服务连续性。

## 6. 功能请求与路线图信号
*   **Slack Block Kit 支持**：PR #1166 提及了对 Block Kit 的实现，这表明项目路线图正朝着提供更丰富、更现代化的 UI 组件方向演进，以适配 Slack 的最新生态标准。
*   **高级交互反馈机制**：通过 PR #1165 引入的反应确认和触发器，暗示未来可能会开放更多基于事件驱动的交互模式，允许用户通过 Emoji 反应直接触发 Agent 行为，而不仅仅是通过文本命令。

## 7. 用户反馈摘要
*   **当前痛点**：
    *   Slack 环境中缺乏即时反馈，用户不知道消息是否被接收。
    *   现有集成在处理复杂聊天场景（如线程回复）时存在消息错乱的风险。
    *   异步任务执行时的状态同步存在问题。
*   **满意点/预期收益**：
    *   通过 Reaction 提供视觉反馈将显著提升用户体验。
    *   对 `hermes-agen` 等竞品功能的借鉴（如摘要所述）表明项目正在吸收行业最佳实践，以满足用户对高性能 AI 助手的期待。

## 8. 待处理积压
*   **当前积压**：
    *   **PR #1165** ([链接](https://github.com/moltis-org/moltis/pull/1165))：待合并。此为前置依赖，需优先审查合并。
    *   **PR #1166** ([链接](https://github.com/moltis-org/moltis/pull/1166))：待合并。依赖于 #1165，包含重要的 Bug 修复和功能增强。
*   **建议**：维护者应尽快审核这两条 PR。鉴于两者均由同一作者提交且存在堆叠关系（Stacked PRs），建议进行端到端的集成测试，确保 `third-effect` 分支上的改动无冲突，并验证 Slack 重连和反应触发逻辑在实际环境中的表现。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-07-25
**数据来源：** GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
今日 CoPaw 项目保持高活跃度，过去24小时内共产生 **86** 次代码仓库交互（49 Issues + 37 PRs）。v2.0.1 及 beta 版本的发布标志着平台向“PawApp”插件生态和更稳定的会话管理迈进。社区对 v2.0 升级后的性能损耗、MCP 工具兼容性以及多模态体验优化表现出高度关注。虽然核心功能迭代迅速，但部分用户反馈的回归问题（如 SSH 离线、历史记录丢失）需要优先解决以稳固 v2.0 的用户基础。

## 2. 版本发布
### v2.0.1
*   **核心更新：** 引入 **PawApp Platform**，这是一个全新的迷你应用平台，允许插件在 QwenPaw 之上构建丰富的交互式 UI。
*   **内置应用：** 随版本附带了一个内置的 **Kanban Task Board**（看板任务板），用于项目管理。
*   **迁移注意：** 此版本主要侧重于功能扩展而非底层架构重构，预计对现有 v2.0.x 用户的破坏性变更较小，但需确保插件兼容新的 PawApp SDK。

### v2.0.1-beta.3
*   **性能优化：** 稳定了聊天选项的记忆机制（memo），并通过减少 SSE（Server-Sent Events）的重解析次数提升了控制台性能。
*   **维护动作：** 版本号更新及日期调整。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在数据存储可靠性、第三方代理集成及原生桌面控制能力上：

*   **数据持久性增强 (#6459, #6323):** `niceIrene` 提交的 PR 强化了 SQLite 历史记录的持久化、备份与恢复机制，并引入了分阶段压缩管道，解决了并发写入和 schema 兼容性痛点，显著提升了会话数据的鲁棒性。
*   **第三方代理集成 (#6397):** 集成了 Codex 和 Qoder 等第三方代理后端，实现了后端中立的可扩展架构，允许智能体在聊天和现有频道中独立选择后端。
*   **原生桌面自动化 (#6424):** 新增 `computer_use` 内置工具，支持通过 Tauri 控制在 Windows 和 macOS 上的原生 GUI 自动化，标志着 Agent 从纯文本交互向系统级操作的重要跨越。
*   **Zalo Bot 支持 (#6118):** 添加了 Zalo 聊天平台的内置通道，采用长轮询机制，无需公网 Webhook 即可接入。

## 4. 社区热点
以下 Issue 评论数最多或关注度最高，反映了用户当前的主要痛点：

*   **[Performance] v2.0 introduces ~2s fixed overhead per simple conversational reply (#6307)**
    *   *热度:* 7 评论 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6307)
    *   *分析:* 用户报告 v2.0 相比 v1.x 在简单回复中存在固定的 ~2秒延迟，这可能与请求架构变更有关。这是影响用户体验的关键性能指标，需开发团队重点排查。
*   **[OPEN] v2.0.0 Missing features: SSH Offline, Profiles returning 404 (#5980)**
    *   *热度:* 7 评论 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5980)
    *   *分析:* 从 v1.1.12 升级至 v2.0.0 后，SSH 离线功能和 Profiles 出现 404 错误。这表明 v2.0 存在严重的功能回归，影响了依赖这些工作流的资深用户。
*   **[bug] openai 模型最大输出token不生效 (#6258)**
    *   *热度:* 3 评论 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6258)
    *   *分析:* 配置的最大输出 token 参数未正确传递给 OpenAI 兼容 API，导致生成内容超出预期限制，可能引发下游处理错误或额外费用。
*   **[Question]: 升级2.0以后，mcp工具总是提示Tool notfound (#6405)**
    *   *热度:* 3 评论 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6405)
    *   *分析:* MCP 工具名称格式变化（添加前缀）后，工具注册或查找逻辑可能出现偏差，导致运行时无法识别工具。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | Issue ID | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **High** | **定时任务复用会话覆盖历史记录**：Cron 任务在使用 `share_session: true` 时，会清空原有用户对话历史。 | [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | Closed (需验证修复) |
| **High** | **ReAct Agent 上下文格式错误**：tool_result 混入 role:assistant 消息，导致 OpenAI API 报 400 错误。 | [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | Open |
| **Medium** | **Edge+Wayland 高 CPU 占用**：在 Linux Wayland 环境下，单标签页长时间停留导致高 CPU 消耗，疑似 WebSocket 推送或大结果集渲染问题。 | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Open |
| **Medium** | **Channel 删除后默认频道异常**：删除 Channel 后新建智能体，默认聊天频道仍指向已删除的频道而非 Console。 | [#6341](https://github.com/agentscope-ai/QwenPaw/issues/6341) | Closed |
| **Low** | **MCP 工具 Tool notfound**：升级后 MCP 工具列表获取失败。 | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | Open |

## 6. 功能请求与路线图信号
*   **撤销/重新编辑对话 (#6408):** 用户强烈呼吁增加类似 ChatGPT 的“重新编辑上一条消息”功能，当前 `/compact` 无法精确删除特定轮次。
    *   *信号:* 需求明确，若纳入路线图，可能涉及前端 UI 交互重构和历史存储接口的调整。
*   **智能体级别 Token 统计 (#6392):** 用户希望获得更细粒度的 Token 消耗统计（每次对话、每个智能体），以便成本管控。
    *   *信号:* 随着 Agent 数量增多，可观测性成为刚需。
*   **内置知识库 (RAG) (#6432):** 用户建议拖拽文档即可自动建立知识库，这是本地 AI 应用最核心的诉求之一。
    *   *信号:* 已有相关 PR 或讨论，若实现将极大提升竞争力。
*   **多模型并行运行 (#6455):** 希望一个 Agent 能同时调用多个模型进行独立推理并汇总结果。
    *   *信号:* 符合复杂任务分解的趋势，可能与“Parallel Sub-Agents” (#6442) 特性相关联。
*   **UX 优化:** 复制菜单 (#6454)、中文文件名友好显示 (#6453)、移除多模态检测提示 (#6452)。
    *   *信号:* 这些是高频出现的体验类小修小补，反映出用户对细节打磨的期待。

## 7. 用户反馈摘要
*   **痛点：** v2.0 升级带来的**性能倒退**（2秒延迟）和**功能缺失**（SSH/Profiles 404）是用户抱怨最多的地方，部分用户甚至考虑回退。
*   **场景：** 大量用户正在尝试将 CoPaw 用于**工作流自动化**（Cron 任务、MCP 工具集成）和**本地知识管理**（RAG、文档处理）。
*   **满意点：** 用户对 **PawApp 平台** 的引入表示欢迎，认为这扩展了 QwenPaw 的能力边界；同时，**桌面端 GUI 自动化** (#6424) 的进展被视为重大利好。
*   **不满：** 错误提示不够人性化（如中文文件名乱码、多模态提示过于粗暴），以及部分命令面板的冗余展示。

## 8. 待处理积压
*   **#5980 [OPEN] v2.0.0 Missing features: SSH Offline, Profiles returning 404**
    *   *风险:* 直接影响核心工作流，且创建时间较早（7月12日），长期未解决可能导致用户流失。
*   **#6307 [OPEN] [Performance] v2.0 introduces ~2s fixed overhead**
    *   *风险:* 性能回归是开源项目的大忌，建议作为 P0 优先级进行性能剖析和优化。
*   **#2999 [OPEN] Repeated MCP client registration leads to task cancellation**
    *   *风险:* 这是一个长期存在的架构缺陷，导致 MCP 服务器响应慢时任务容易失败，影响稳定性。
*   **#6458 [OPEN] Cron Task Safety Defaults**
    *   *风险:* 工具执行安全检查默认关闭，可能存在安全隐患，需评估是否调整为默认开启或提供更明显的警告。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**日期**：2026-07-25
**数据来源**：ZeptoClaw GitHub Repository (qhkm/zeptoclaw)

## 1. 今日速览
今日 ZeptoClaw 项目保持中等活跃度，核心关注点集中在 **Telegram 频道响应流式传输优化**与 **CI/CD 安全性加固**两个维度。主要进展包括 PR #648 的合并，实现了 Telegram 网关会话的渐进式消息编辑功能，显著提升了用户体验；同时 PR #645 暴露了运行时子进程环境隔离的安全隐患，引发了对 Rust 工具链检查（Clippy/cargo-deny）的紧急回归修复（Issue #646）。整体来看，项目在提升实时交互能力的同时，正在强化底层安全合规性，项目健康度良好，但需警惕 CI 流水线因依赖版本问题导致的构建中断风险。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日最重要的技术推进是 **Telegram 网关响应流式化功能的落地**。

*   **PR #648 [CLOSED] feat(telegram): stream gateway responses**
    *   **内容**：该 PR 被合并，引入了通道中立（channel-neutral）的累积出站流阶段。它允许通过单次渐进式编辑预览来流式传输 Telegram 网关响应，同时保留了回复和论坛主题路由、UTF-16 长度限制及 HTML 最终渲染逻辑。
    *   **意义**：这一更新解决了长文本响应在 Telegram 中显示延迟的问题，通过“渐进式编辑”机制，用户能实时看到 AI 的思考过程或输出结果，极大提升了即时通讯场景下的交互流畅度。

*   **PR #645 [OPEN] fix(runtime): scrub subprocess secrets and reap timed-out process trees**
    *   **内容**：虽然状态仍为 Open，但其引发的讨论直接推动了今日的安全修复工作。该 PR 指出了运行时 shell 命令继承完整环境变量导致密钥泄露的风险，以及超时进程树未正确回收的问题。
    *   **意义**：这是底层运行时稳定性的关键修复，旨在消除凭证泄露隐患并防止僵尸进程资源耗尽。

## 4. 社区热点
今日社区讨论焦点集中在 **CI 流水线的稳定性**与 **Telegram 新功能**上。

*   **Issue #646 [OPEN] chore(ci): restore Clippy and cargo-deny checks on current toolchain**
    *   **链接**: [qkham/zeptoclaw Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)
    *   **热度分析**：由 PR #645 触发，揭示了 Rust 1.97.1 工具链下新出现的 Clippy 警告及 `quick-xml` 和 `lopdf` 库的安全漏洞警告。作者 qhkm 积极跟进，目前已进行 2 轮评论。这反映了维护者对代码质量和供应链安全的重视，社区虽无大量外部评论，但内部技术对齐迅速。

*   **Issue #647 [CLOSED] feat(telegram): stream agent responses with progressive message edits**
    *   **链接**: [qkham/zeptoclaw Issue #647](https://github.com/qhkm/zeptoclaw/issues/647)
    *   **热度分析**：作为 PR #648 的前置需求，该 Issue 已关闭，标志着需求从设计到实现的闭环完成。评论区虽少，但体现了需求提出的清晰度和实现的高效性。

## 5. Bug 与稳定性
*   **高优先级安全隐患 (P1-critical)**：
    *   **问题描述**：PR #645 指出 `Command::output()` 在超时时未能一致地终止和回收后代进程，且 Docker 容器可能存在残留。此外，子进程继承完整环境变量可能导致 Provider Keys 泄露。
    *   **状态**：已有对应 PR #645 尝试修复，目前处于 Open 状态，等待审查和合并。
    *   **关联**：此问题还导致了 CI 中的 `cargo-deny` 报错（Issue #646），提示 `quick-xml 0.39.2` 和 `lopdf 0.40.0` 存在已知漏洞，需升级依赖。

*   **CI 构建失败**：
    *   **问题描述**：Rust 1.97.1 在现有代码库中报告了 5 个新的 Clippy 警告。
    *   **状态**：正在通过 Issue #646 进行修复，属于常规技术债务清理，不影响功能稳定性。

## 6. 功能请求与路线图信号
*   **Telegram 流式输出**：
    *   **信号**：Issue #647 和 PR #648 的完成表明，“实时流式传输”已成为 Telegram 渠道的核心标准功能。未来可能会将此模式推广至其他支持流式输出的渠道（如 Slack, Discord 等）。
*   **安全性增强**：
    *   **信号**：对子进程环境变量隔离和进程树回收的重视，暗示下一版本路线图中将包含更严格的“沙箱执行”或“最小权限原则”实现，以应对模型生成不可信命令的场景。

## 7. 用户反馈摘要
*   **痛点**：用户对于 Telegram 中长响应等待时间长、无法实时查看生成进度有明确反馈（通过 Issue #647 体现）。
*   **满意点**：维护者快速响应了流式传输的需求，并实现了复杂的边界情况处理（如 UTF-16 溢出、HTML 渲染保留），显示出对用户交互体验的高度关注。
*   **潜在不满**：CI 检查的严格化（Clippy/cargo-deny）可能会导致开发者在本地提交时遇到更多阻碍，但这属于为了长期稳定性的必要阵痛，Issue #646 的处理态度积极，有助于缓解摩擦。

## 8. 待处理积压
*   **PR #645 [OPEN]**: `fix(runtime): scrub subprocess secrets and reap timed-out process trees`
    *   **建议**：该 PR 涉及核心运行时安全和资源管理，优先级应设为最高。建议维护者尽快完成审查并合并，以解决凭证泄露风险和潜在的进程泄漏问题。
*   **Issue #646 [OPEN]**: `chore(ci): restore Clippy and cargo-deny checks`
    *   **建议**：需同步更新 `Cargo.lock` 以修复 `cargo-deny` 报告的漏洞依赖，并修复 Clippy 警告，确保 CI 绿灯。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-25
**数据来源：** GitHub API (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-07-25 保持高强度的开发节奏，过去24小时共产生 **98 条** Issue/PR 更新（48 Issues, 50 PRs）。项目核心聚焦于 **v0.9.0 的安全加固、Goal 控制面重构以及插件系统的统一化**。今日无新版本发布，但多个关键安全修复（SSRF、Shell 边界绕过、Landlock 沙箱）和架构 RFC 正在推进中。社区活跃度极高，特别是围绕“Everything is a plugin”和可信目标（Trusted Goals）的讨论深入，表明项目正从功能堆砌向更严谨的 Agent 运行时架构演进。

## 2. 版本发布
*   **当前状态：** 无新版本发布。
*   **关注点：** 维护者正在清理 v0.8.x 系列的遗留问题（如 #6074 审计丢失提交），并为 v0.9.0 的重大变更（认证、网关边界、SOP 控制面）做准备。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在安全性修复和 CLI 功能完善，推动了项目的稳定性和可用性：

*   **CLI Cron 交付修复 (#9350):** 修复了 CLI 创建的定时任务默认 `delivery.mode = "none"` 导致输出被丢弃的问题，这是一个影响用户日常自动化流程的关键 Bug 修复。
    *   [PR #9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350)
*   **SBOM 动作升级 (#9344):** 将 `anchore/sbom-action` 从 v0.17.9 升级至 v0.24.0，强化了供应链安全扫描能力。
    *   [PR #9344](https://github.com/zeroclaw-labs/zeroclaw/pull/9344)
*   **SOP 文档澄清 (#8679):** 明确了 SOP 条件评估中布尔值的比较方式，减少了用户配置歧义。
    *   [PR #8679](https://github.com/zeroclaw-labs/zeroclaw/pull/8679)
*   **可验证意图（VI）闭环修复 (#9327):** 当约束主体缺失时，VI 系统现在采取“失败关闭”（fail closed）策略，提升了安全合规性。
    *   [PR #9327](https://github.com/zeroclaw-labs/zeroclaw/pull/9327)

## 4. 社区热点
以下 Issue 和 PR 引发了大量技术讨论，反映了社区对架构安全性和扩展性的深度关切：

*   **RFC: Work Lanes & Board Automation (#6808):**
    *   **热度:** 14 条评论
    *   **分析:** 维护者试图通过自动化工作流和标签清理来降低维护负担。这是关于项目治理效率的核心讨论，旨在解决 Issue 积压问题。
    *   [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
*   **Feature: "Everything is a plugin" (#6489):**
    *   **热度:** 4 条评论
    *   **分析:** 长期架构 RFC，提议将 Integrations 和 Plugins 合并为统一目录。这标志着 ZeroClaw 向更松耦合、更高扩展性的架构迈进，是 v0.9.0+ 的核心方向。
    *   [Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)
*   **RFC: Wire Protocol First-Class (#8396):**
    *   **热度:** 3 条评论
    *   **分析:** 提升 Wire Protocol 在 Provider 构建中的地位，旨在简化 Provider 开发和维护，解决当前 Provider 实现碎片化的问题。
    *   [Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)
*   **Bug: Shell Tool Workspace Boundary Bypass (#9247):**
    *   **热度:** 1 条评论 (但标记为 S0 高危)
    *   **分析:** 发现 Shell 工具可通过符号链接绕过工作区限制，直接读写外部文件。这是严重的安全漏洞，需立即修复。
    *   [Issue #9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)

## 5. Bug 与稳定性
今日报告了多个高优先级 Bug，部分已有对应修复 PR，部分仍处于开放状态：

| 严重等级 | Issue/PR ID | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **S0 - 安全** | [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | Shell 工具工作区边界绕过 (Symlink 逃逸) | OPEN (需紧急修复) |
| **S1 - 阻断** | [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | Windows 桌面版安装后启动失败 (缺少 TaskDialogIndirect) | OPEN |
| **S1 - 阻断** | [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | Shared Budget TOCTOU 竞态条件导致 Panics | OPEN (关联 PR #9327 部分修复) |
| **S1 - 阻断** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI 创建的 Cron 任务不交付结果 | FIXED by PR #9350 |
| **S2 - 降级** | [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) | Delegate 子代理 API Key 泄露 | CLOSED (已修复) |
| **S2 - 降级** | [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock 沙箱限制 ZeroClaw 自身进程 | CLOSED (已修复) |
| **S3 - 轻微** | [#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) | 嵌套 set_prop 掩码无效值 | OPEN |
| **S3 - 轻微** | [#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116) | ACP 控制台思考内容分段显示错误 | CLOSED (已修复) |

**稳定性评估：** 核心运行时存在若干并发安全和权限边界问题，尤其是 Shell 工具和 Budget 管理部分。建议优先处理 #9247 和 #9192。

## 6. 功能请求与路线图信号
*   **DingTalk 流式消息支持 (#8228):** 用户强烈要求 DingTalk 渠道支持流式传输，以减少长响应延迟。此功能符合 v0.9.0 增强渠道体验的方向。
    *   [Issue #8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)
*   **OpenAI Compatible Data-Wrapped Responses (#9335):** 支持某些 OpenAI 兼容端点返回的 `data` 包裹格式，扩大模型兼容性。
    *   [Issue #9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335)
*   **Crusoe Managed Inference 集成 (#9338):** 新增 Crusoe 作为一等公民的 OpenAI 兼容提供商，反映用户对特定高性能推理集群的需求。
    *   [PR #9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338)
*   **AI 辅助 PR 预审查 (#9330):** 提议利用 CI 结果触发 AI 辅助审查，以提高代码质量并减轻维护者负担。
    *   [Issue #9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)

## 7. 用户反馈摘要
*   **配置复杂性痛点:** 用户反映 `config set` 在处理非 `providers.*` 部分的动态映射（如 `risk_profiles`, `channels.telegram`）时行为不一致，容易创建无效别名或静默丢弃配置（#8834, #9236, #9240）。这表明配置解析器需要更严格的校验和一致性检查。
*   **观察性需求:** 用户指出 `AgentEnd` 事件中的 `cost_usd` 始终为 `None`，尽管底层已计算成本，导致下游可观测性数据缺失（#9349）。
*   **Windows 体验障碍:** Windows 桌面用户遇到启动崩溃，阻碍了新用户的入门体验（#9290）。
*   **Telegram 文件下载:** 用户希望更智能地处理 Telegram 文件下载失败，区分永久性和临时性故障，以优化重试策略（#9315）。

## 8. 待处理积压
以下 Issue 长期未决或需要维护者重点关注：

*   **[Tracker] Restore ADR baseline (#8691):** 架构决策记录基线恢复和审计工作滞后，可能影响后续架构变更的可追溯性。
    *   [Issue #8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)
*   **[Bug] Shell Tool Workspace Boundary Bypass (#9247):** 高危安全漏洞，需立即分配资源进行修复。
    *   [Issue #9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)
*   **[Bug] shared_budget TOCTOU (#9192):** 并发竞态条件可能导致运行时崩溃，影响多 Agent 场景下的稳定性。
    *   [Issue #9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192)
*   **[Bug] config set alias issues (#8834, #9236, #9240):** 多个关联的配置 Bug 揭示了底层配置存储机制的缺陷，建议作为一个 Epic 统一修复。
    *   [Issue #8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834)
    *   [Issue #9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236)
    *   [Issue #9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240)

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*