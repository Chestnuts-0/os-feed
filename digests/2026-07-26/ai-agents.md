# OpenClaw 生态日报 2026-07-26

> Issues: 332 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-26 01:49 UTC

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
**日期：** 2026-07-26
**分析师：** Agnes-2.0-Flash (Sapiens AI)

## 1. 今日速览
OpenClaw 项目在 2026-07-26 保持极高活跃度，过去24小时内处理了 **332 条 Issue** 和 **500 条 PR**。尽管没有新版本发布，但维护者（如 `steipete`）集中推进了多项底层重构与 UI 修复，重点解决 Gateway 稳定性、内存泄漏及会话状态一致性等核心痛点。社区对“内存信任标记”、“MCP 工具调用审批”及“模型成本追踪”等功能需求强烈，反映出用户对 Agent 安全性与可观测性的高度关注。整体项目处于从功能扩展向稳定性加固转型的关键阶段。

## 2. 版本发布
*   **无新版本发布。**
*   当前焦点在于修复 v2026.7.1-beta.5 引入的回归问题及累积的技术债务。

## 3. 项目进展
今日合并/关闭了多个高优先级 PR，主要涉及架构优化与用户体验改进：

*   **[已合并] 实时语音中继重构 (PR #113967)**: `steipete` 将 Gateway 实时 Talk 中继模块拆分为独立所有权，解决了原模块过于臃肿（1,647行）且职责混杂的问题，提升了可维护性。
*   **[已合并] 浏览器启动恢复修复 (PR #113926)**: 修复了远程浏览器节点启动失败后用户陷入无限重试循环的问题，确保服务恢复的健壮性。
*   **[已合并] 健康检查模块拆分 (PR #113937)**: 将 `doctor` 命令的健康贡献逻辑拆分，降低了单文件复杂度，便于后续维护。
*   **[已合并] 任务注册表重构 (PR #113964)**: 移除了对插件 ID 的模式匹配硬编码，使子代理行的分类更加通用和稳定。
*   **[已合并] 文档清理 (PR #113963)**: 移除了关于已退役日志脱敏配置的过时文档指引。

**进展评估：** 维护者正通过“小步快跑”的重构策略，逐步消除代码库中的技术债务，为后续更复杂的特性（如就绪性框架 RFC）奠定基础。

## 4. 社区热点
以下 Issues 评论数最多，代表了社区当前的核心关切：

*   **🦞 内存信任源标记 (Issue #7707)**: 21条评论。用户希望根据来源（用户指令 vs 网页抓取）对记忆条目进行信任分级，以防止“记忆投毒”攻击。**诉求：** 提升 Agent 在开放环境下的安全性。
*   **🦞 MCP 工具调用的渠道中介审批 (Issue #78308)**: 15条评论。提议让 MCP 服务器复用现有的 `/approve` 管道，实现对外部状态变更的显式同意。**诉求：** 增强对 Agent 外部操作的控制权和审计能力。
*   **🦪 SQLite 快照恢复缺乏崩溃保证 (Issue #113306)**: 13条评论。指出快照创建/恢复在目录链接和身份守卫方面存在竞态条件风险。**诉求：** 数据持久性的绝对可靠性。
*   **🦞 Gateway 启动失败回归 (Issue #108435)**: 11条评论。v2026.7.1 更新后 Gateway 因错误无法启动，影响大量用户。**状态：** 紧急回归，需优先修复。
*   **🦞 Session 上下文膨胀 (Issue #67419)**: 10条评论。引导文件在每轮对话中重复注入，浪费 20-30% Token。**诉求：** 优化上下文管理，降低使用成本。

## 5. Bug 与稳定性
今日报告了多个严重程度的 Bug，按 P0/P1 排列：

*   **[P0] Gateway HTTP 服务器监听但不接受连接 (Issue #109145)**: v2026.7.1-beta.5 中，HTTP 服务启动但 TCP 连接被挂起，导致服务不可用。**状态：** 未提及 Fix PR，高风险。
*   **[P0] 升级导致邮件通道配置损坏 (Issue #95515)**: 从 2026.6.8 升级到 6.9 时，`openclaw.json` 中被写入无效的 `groupAllowFrom` 字段。**状态：** 数据丢失风险。
*   **[P1] Gateway 空闲内存持续增长至 1GB+ (Issue #87109)**: macOS 上 Gateway Heap 随时间增长，导致 Cron 任务静默失败。**状态：** 长期性能问题，需内存分析。
*   **[P1] /new 和 /reset 命令未真正创建新会话 (Issue #113466)**: 仅触发 Hook 返回成功，未执行实际会话重置逻辑。**状态：** 行为错误。
*   **[P1] 大型 SQLite 转录清理阻塞事件循环 (Issue #112423)**: 归档大转录时全量加载导致 Gateway 卡顿。**状态：** 性能瓶颈。
*   **[P1] Telegram 入站更新永久丢失 (Issue #113315)**: 偏移量持久化后消息未进入入队或调度流程。**状态：** 消息丢失。

## 6. 功能请求与路线图信号
*   **就绪性框架 (Readiness Framework)**: 多个 PR (#113422, #113421, #104018) 正在推进基于 RFC 的就绪性检查机制，允许主机和插件提供自定义的运行状况观察指标。这表明项目正加强生产环境部署的可观测性支持。
*   **每代理每日模型支出警报 (PR #113548)**: 新增功能允许 Operator 设置每代理的每日成本上限并报警，直接响应 Issue #9016 中关于暴露 OpenRouter 成本的请求。
*   **结构化页面提取 (PR #113938)**: 改进浏览器 `extract` 动作，支持针对页面特定区域提取，减少无效 Token 消耗。
*   **Mac App 网关切换器 (PR #113965)**: 为 macOS 应用增加仪表盘网关选择器，支持多网关配置下的无缝切换。

## 7. 用户反馈摘要
*   **痛点：** 用户对 v2026.7.x 版本的稳定性表示担忧，特别是 Gateway 启动失败、配置损坏和会话重置失效等问题。Telegram 和 WhatsApp 的消息丢失/黑盒现象也是高频投诉点。
*   **场景：** 企业级用户高度关注“权限最小化”和“审计”，如 MCP 工具调用的审批机制、Skill 权限清单标准（Issue #12219）以及文件系统沙箱配置（Issue #7722）。
*   **满意度：** 用户对 TUI 无障碍改进（Issue #9637）和 Discord 多部分回复渲染修复（Issue #96007）等细节优化有正面反馈，但对上下文窗口浪费（Issue #67419）感到沮丧。

## 8. 待处理积压
*   **Issue #7707 [Feature]: Memory Trust Tagging by Source**: 长期未解决的安全增强功能，评论数高，建议纳入下一安全更新路线图。
*   **Issue #87109 [Bug]: Gateway heap grows to 1073MB+**: 内存泄漏问题已存在数月，严重影响长运行实例，需分配专门资源进行 Profiling。
*   **Issue #113306 [Bug]: SQLite snapshot restore lacks guarantees**: 数据完整性相关 Bug，虽为 P1 但潜在风险极大，建议在下一个补丁版本中修复。
*   **Issue #7722 [Feature]: Filesystem Sandboxing Config**: 安全沙箱配置请求，与 Issue #7707 类似，属于高优先级安全特性。

---

## 横向生态对比

# 2026-07-26 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
2026年7月下旬，个人AI助手与自主智能体开源生态正从“功能野蛮生长”全面转向“稳定性与安全合规”的深度治理阶段。OpenClaw、NanoBot和IronClaw等头部项目通过底层重构（如Gateway拆分、WebUI性能优化、Rust后端硬化）解决内存泄漏、上下文一致性及多通道路由等核心痛点，标志着基础设施成熟度显著提升。与此同时，跨平台兼容性（Windows/Linux/macOS）、数据隐私（沙箱/记忆信任标记）及可观测性（成本追踪/审计日志）成为社区共识，反映出Agent应用即将进入企业级生产部署的关键窗口期。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release 状态 | 健康度评估 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | 332 | 500 | 无 (修复回归) | ⭐⭐⭐⭐⭐ (极高活跃，技术债务清理期) |
| **ZeroClaw** | 19 | 50 | v0.8.4 预备中 | ⭐⭐⭐⭐⭐ (高活跃，发布冲刺期) |
| **Hermes Agent** | 50 | 50 | 无 (密集修复) | ⭐⭐⭐⭐ (高活跃，多平台适配阵痛期) |
| **LobsterAI** | 9 | 11 | 无 (积压清理) | ⭐⭐⭐⭐ (高效执行，UX重点突破) |
| **NanoBot** | ~1 | 12+ | **v0.3.0 发布** | ⭐⭐⭐⭐ (里程碑后稳定化，文档/CI完善) |
| **IronClaw** | 11 | 20 | 无 (v1检查项) | ⭐⭐⭐⭐ (稳定打磨，WebUI/架构加固) |
| **CoPaw** | 8 | 8 | 无 (v2.0.1) | ⭐⭐⭐ (中等活跃，MCP集成阻塞需解决) |
| **NanoClaw** | 2 | 11 | 无 (安全加固) | ⭐⭐⭐ (稳定，侧重容器安全与上下文) |
| **PicoClaw** | 2 | 3 | 无 (边缘适配) | ⭐⭐ (低活跃，特定硬件/协议维护) |
| **Moltis** | 0 | 5 | 无 (协议扩展) | ⭐⭐ (低活跃，Slack/Nostr深度集成) |
| **NullClaw** | 0 | 0 | - | ⭐ (无活动) |
| **TinyClaw** | 0 | 0 | - | ⭐ (无活动) |
| **ZeptoClaw** | 0 | 0 | - | ⭐ (无活动) |

## 3. OpenClaw 在生态中的定位
*   **优势**：**绝对的市场主导力**。以日均800+的Issue/PR吞吐量远超其他项目，拥有最庞大的用户基数和最复杂的集成场景（Gateway, Browser, MCP）。其“内存信任标记”和“MCP审批”需求代表了行业对Agent安全性的最高标准。
*   **技术路线差异**：OpenClaw采用**重型全栈架构**，强调Gateway的独立性与插件化，试图统一所有通信渠道；相比之下，NanoBot和Moltis更偏向**轻量级协议适配**或**特定场景（如Slack/Nostr）**的深度优化；IronClaw则选择了**Rust原生重写**以追求极致性能与安全性。
*   **社区规模**：OpenClaw的社区讨论密度是第二梯队（Hermes/NanoBot）的10倍以上，形成了事实上的行业标准制定者地位，但其维护压力也最大，导致近期频繁出现因快速迭代引发的回归Bug。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **安全性与权限控制** | OpenClaw, NanoClaw, IronClaw, ZeroClaw | **OpenClaw**: 记忆投毒防御(Memory Trust Tagging)。<br>**NanoClaw**: 容器Cap Drop与挂载隔离。<br>**IronClaw**: 签名意图证明(Signature Intent)。<br>**ZeroClaw**: WhatsApp Business模式下的访问控制失效修复。 |
| **上下文与记忆一致性** | OpenClaw, NanoBot, Hermes, CoPaw | **OpenClaw**: Session Context膨胀问题(Tokken浪费)。<br>**NanoBot**: 排队消息丢失RequestContext。<br>**Hermes**: CLI/GUI配置不同步导致记忆断裂。<br>**CoPaw**: 记忆检索重排序(Reranker)引入以提升精度。 |
| **多通道/跨平台稳定性** | OpenClaw, Hermes, LobsterAI, PicoClaw | **OpenClaw**: Telegram/WhatsApp消息丢失黑盒。<br>**Hermes**: Windows启动循环崩溃与非ASCII路径失败。<br>**LobsterAI**: 批量解决Windows安装器安全问题。<br>**PicoClaw**: Matrix连接断线后的静默死亡修复。 |
| **可观测性与成本追踪** | OpenClaw, ZeroClaw, IronClaw | **OpenClaw**: 每代理每日模型支出警报。<br>**ZeroClaw**: Peer-agent交付未记录成本。<br>**IronClaw**: 每日失败分类报告(Taxonomy)以区分模型短板与框架缺陷。 |

## 5. 差异化定位分析

*   **OpenClaw**: **通用型旗舰平台**。适合需要高度定制化、复杂多Agent协作及大规模部署的企业级或个人极客用户。技术栈庞大，学习曲线陡峭，但生态兼容性最强。
*   **NanoBot**: **学术与极简主义代表**。由HKUDS支持，强调“Agent自主性(Agency)”概念，v0.3.0后聚焦于WebUI的一键启动体验，适合研究者和希望快速上手轻量级Agent的用户。
*   **Hermes Agent**: **本地优先与隐私导向**。NousResearch出品，强调Local-First，支持本地STT和严格的隐私保护（如不泄露命令行参数），适合对数据主权敏感的用户。
*   **LobsterAI**: **C端用户体验优化者**。网易有道旗下，动作极快，专注于Cowork界面的交互细节（时间分组、折叠展开、历史回溯），旨在缩小与ChatGPT/Claude商业产品的体验差距，适合大众开发者。
*   **IronClaw**: **高性能与可靠性追求者**。基于Rust重构(Reborn架构)，强调突变测试和结构死代码检测，适合对系统稳定性、资源占用有极致要求的运维和高级开发者。
*   **ZeroClaw**: **模块化与发布工程专家**。独特的Cargo Workspace结构和crates.io发布机制，适合Rust生态重度用户及需要细粒度依赖管理的开发者。
*   **CoPaw/QwenPaw**: **云原生与平台集成**。深度绑定AgentScope平台，侧重MCP驱动层的兼容性和云端部署的稳定性，适合已有AgentScope基础设施的团队。

## 6. 社区热度与成熟度

*   **快速迭代/扩张期**：
    *   **OpenClaw**: 虽然处于稳定性加固期，但功能需求（如MCP审批、成本追踪）仍在快速涌现，社区处于“边修bug边加特性”的高压状态。
    *   **NanoBot**: 刚完成v0.3.0重大版本跃迁，正处于功能落地后的文档完善和CI固化阶段，属于典型的里程碑后扩张期。
    *   **LobsterAI**: 通过集中合并大量UX优化PR，显示出极强的产品迭代能力，正处于快速追赶主流商业体验的阶段。

*   **质量巩固/稳定期**：
    *   **IronClaw**: 从功能构建转向WebUI性能优化和Rust后端工程纪律（突变测试、死代码检测），表明其核心架构已相对稳定，进入打磨期。
    *   **NanoClaw**: 重点在于容器安全硬化和上下文同步修复，属于底层健壮性提升阶段。
    *   **ZeroClaw**: 处于v0.8.4发布前的最后冲刺，重点在于修复高危安全配置和测试Flakiness，为正式Release做准备。

*   ** niche/垂直领域**：
    *   **PicoClaw/Moltis**: 活跃度较低，专注于特定硬件（RPi）或特定协议（Slack/Nostr）的深度适配，属于垂直领域的稳定维护者。

## 7. 值得关注的趋势信号

1.  **“安全左移”与“最小权限原则”成为标配**：
    *   从OpenClaw的“记忆信任标记”到NanoClaw的“容器Cap Drop”，再到ZeroClaw的“WhatsApp访问控制修复”，社区不再满足于Agent能干活，而是极度关注Agent**如何安全地干活**。开发者在构建Agent时，必须优先考虑上下文隔离、工具调用审批和数据边界。

2.  **可观测性从“可选”变为“必选”**：
    *   OpenClaw的成本警报、IronClaw的失败分类报告、ZeroClaw的成本追踪缺失反馈，均表明**Token成本**和**错误归因**已成为生产环境部署的核心KPI。未来的Agent框架若无内置的成本控制和详细的错误分类机制，将难以获得企业级用户的信任。

3.  **跨平台一致性仍是最大痛点**：
    *   Hermes的Windows崩溃、OpenClaw的Telegram消息丢失、CoPaw的MCP传输硬编码，揭示了**多通道、多操作系统**下的状态同步和异常处理逻辑极其脆弱。这提示开发者，在开发Agent时，应优先使用成熟的、经过广泛测试的中间件（如标准化的Gateway），而非自行实现复杂的通道适配层。

4.  **UX细节决定C端留存**：
    *   LobsterAI通过批量折叠、时间分组、输入框历史回溯等微小交互改进，显著提升了用户体验。这表明在Agent同质化严重的今天，**交互效率**（如减少点击次数、提供视觉反馈）将成为区分产品优劣的关键因素，而不仅仅是模型能力的比拼。

5.  **架构轻量化与模块化**：
    *   IronClaw的Rust重写、ZeroClaw的Cargo Workspace拆分、NanoBot的WebUI一键启动，都指向一个趋势：**降低部署复杂度**和**提升运行时效率**。重型的全栈单体架构正在向微内核、插件化、易集成的方向演进，以适应边缘计算和多租户场景的需求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-26
**数据来源：** GitHub HKUDS/nanobot

## 1. 今日速览
NanoBot 项目在 2026-07-26 迎来重大里程碑，正式发布 **v0.3.0** 版本。该版本标志着 Agent 获得“自主性（Agency）”，合并了 260 个 PR 并引入了 38 位新贡献者。过去 24 小时内，项目活跃度极高，共有 12 个 PR 更新（7 个已合并/关闭，5 个待合并），同时有 1 个 Issue 被解决。整体来看，项目正处于从 v0.2.x 向 v0.3.0 过渡后的稳定化与文档完善阶段，核心功能已落地，重点转向用户体验优化、CI 流程固化及遗留 Bug 修复。

## 2. 版本发布
### 🚀 v0.3.0 正式发布
*   **发布日期：** 2026-07-25
*   **核心亮点：**
    *   **Agent 自主性增强：** 赋予 Agent 更高的自主决策和执行能力。
    *   **一键启动 WebUI：** 新增 `nanobot webui` 命令，自动准备本地 WebUI、启动网关并打开浏览器工作区，极大降低了新手门槛。
    *   **大规模合并：** 包含 260 个已合并的 PR 和 38 位新贡献者。
*   **迁移注意事项：**
    *   对于首次安装用户，推荐使用 `nanobot webui` 快速体验。
    *   现有用户需注意配置文件的兼容性清理工作已推迟至 v0.3.1（见 PR #5083）。
    *   文档已更新，明确推荐 `nanobot webui` 为浏览器优先路径，而 `nanobot gateway` 保留给操作员和服务场景（见 PR #5082）。
*   **链接：** [Release v0.3.0](https://github.com/HKUDS/nanobot/releases/tag/v0.3.0) (注：基于 PR #5081 摘要推断发布动作)

## 3. 项目进展
今日主要进展集中在 **v0.3.0 发布准备、WebUI 体验优化及 CI 流程建设**。

*   **WebUI 体验优化：**
    *   **PR #5085:** 实现了在新鲜桌面安装后自动打开 WebUI 的功能，同时保留 SSH/Headless 环境的设置向导逻辑，提升了用户体验的一致性。
    *   **PR #4696:** 通过状态驱动的视口运动平滑了 WebUI 中的流式传输效果，解决了长内容输出时的滚动卡顿问题，显著提升了阅读体验。
    *   **PR #4954:** 修复了子代理（subagent）任务在 WebUI 中晚期结果不可见的问题，确保 WebSocket 聊天流能正确路由子代理的状态和输出。

*   **CI/CD 与工程化：**
    *   **PR #1284:** 引入完整的 CI/CD 流水线，包括自动化测试、代码质量检查和覆盖率工具。这解决了长期存在的测试执行不明确问题，提高了代码提交的质量保障。
    *   **Issue #1131:** 关于 CI 测试覆盖率的疑问已被解决（Closed），表明团队已明确并实施了相应的检查策略。

*   **版本管理与文档：**
    *   **PR #5081 & #5083:** 完成了 v0.3.0 的版本号升级，并将部分兼容性清理工作推迟至 v0.3.1，以保持 v0.3.0 的稳定性和行为一致性。
    *   **PR #5082:** 更新了 README 文档，清晰区分了 WebUI、Gateway 和 CLI 的使用场景，降低了用户的学习成本。

*   **链接汇总：**
    *   [PR #5085](https://github.com/HKUDS/nanobot/pull/5085)
    *   [PR #4696](https://github.com/HKUDS/nanobot/pull/4696)
    *   [PR #1284](https://github.com/HKUDS/nanobot/pull/1284)
    *   [PR #4954](https://github.com/HKUDS/nanobot/pull/4954)
    *   [PR #5081](https://github.com/HKUDS/nanobot/pull/5081)
    *   [PR #5083](https://github.com/HKUDS/nanobot/pull/5083)
    *   [PR #5082](https://github.com/HKUDS/nanobot/pull/5082)
    *   [Issue #1131](https://github.com/HKUDS/nanobot/issues/1131)

## 4. 社区热点
今日讨论最活跃且具有高优先级的焦点集中在 **统一会话路由稳定性** 和 **运行时上下文保持** 上，均由开发者 `yu-xin-c` 主导。

*   **PR #4928 (Open):** 修复心跳机制中统一会话路由错误的问题。
    *   **背景：** 在多通道（channel）环境下，心跳消息可能路由到错误的会话节点。
    *   **诉求：** 确保心跳消息始终路由到最后一个活跃的 `channel:chat_id`，并过滤掉无效或系统生成的路由，防止自动化任务干扰用户会话。
*   **PR #5084 (Open):** 修复代理在处理排队消息时丢失运行时上下文的问题。
    *   **背景：** 在中途切换或排队多条用户消息时，后续消息可能无法正确继承其特有的 `RequestContext`（如频道、聊天ID、元数据等）。
    *   **诉求：** 确保每个排队消息都能使用其自身的上下文进行解析和处理，解决 Issue #4064 中提到的上下文丢失 bug。

这两个 PR 直接关系到多会话、多通道场景下的核心稳定性，是 v0.3.0 后亟需解决的技术债。

*   **链接：**
    *   [PR #4928](https://github.com/HKUDS/nanobot/pull/4928)
    *   [PR #5084](https://github.com/HKUDS/nanobot/pull/5084)

## 5. Bug 与稳定性
今日报告或修复的关键 Bug 如下，按严重程度排列：

1.  **高严重度 - 统一会话路由错误 (PR #4928, Open):**
    *   **描述：** 心跳消息未能正确路由到最新的聊天通道，可能导致消息丢失或发送错误位置。
    *   **状态：** 已有 Fix PR (#4928) 待合并。
2.  **高严重度 - 运行时上下文丢失 (PR #5084, Open):**
    *   **描述：** 排队消息在处理时丢失其特定的请求上下文（如频道、元数据），导致功能异常（关联 Issue #4064）。
    *   **状态：** 已有 Fix PR (#5084) 待合并。
3.  **中严重度 - WebUI 子代理结果不可见 (PR #4954, Closed):**
    *   **描述：** 晚期产生的子代理结果在 WebUI 中未正确显示。
    *   **状态：** 已通过 PR #4954 修复并合并。
4.  **中严重度 - 配置保存时自定义键值丢失 (PR #1073, Open):**
    *   **描述：** `save_config()` 仅序列化 Pydantic 模型中定义的字段，导致手动添加的自定义 Provider 配置（如 `openai-codex`）在保存后被静默丢弃。
    *   **状态：** 已有 Fix PR (#1073) 待合并。

*   **链接：**
    *   [PR #4928](https://github.com/HKUDS/nanobot/pull/4928)
    *   [PR #5084](https://github.com/HKUDS/nanobot/pull/5084)
    *   [PR #4954](https://github.com/HKUDS/nanobot/pull/4954)
    *   [PR #1073](https://github.com/HKUDS/nanobot/pull/1073)

## 6. 功能请求与路线图信号
*   **沙箱环境扩展支持 (PR #4625, Open):**
    *   **需求：** 允许配置额外的 `bwrap` bind roots，以便在沙箱内暴露用户级工具目录（如 `~/.local/bin` 或 `~/.cargo/bin`）。
    *   **分析：** 这反映了高级用户对灵活工具集成和环境定制的需求。当前默认沙箱过于严格，限制了用户自定义工具的可用性。此功能若合并，将显著提升 NanoBot 在复杂开发场景下的适应性。
*   **Cron 任务宽限窗口 (PR #3035, Open):**
    *   **需求：** 为 `at` 类型定时任务引入 10 分钟的宽限窗口，以应对 LLM 处理延迟导致的轻微过期问题。
    *   **分析：** 这是一个实用性极强的改进，解决了因系统负载或 LLM 响应慢导致的定时任务“永远不执行”的逻辑缺陷，提高了自动化任务的可靠性。

*   **链接：**
    *   [PR #4625](https://github.com/HKUDS/nanobot/pull/4625)
    *   [PR #3035](https://github.com/HKUDS/nanobot/pull/3035)

## 7. 用户反馈摘要
*   **正面反馈：**
    *   用户对 `nanobot webui` 的一键启动体验表示欢迎，认为这极大地简化了入门流程（PR #5085, #5082）。
    *   WebUI 流式传输的平滑处理（PR #4696）改善了长文本输出的阅读体验，减少了视觉跳跃感。
*   **痛点/不满：**
    *   **配置持久性问题：** 用户抱怨自定义 Provider 配置在保存后丢失，导致每次重启或重新加载配置都需要重新输入（PR #1073）。
    *   **定时任务可靠性：** 用户指出由于 LLM 延迟，原本设定的精确时间点任务经常失败或永不执行，需要更宽容的执行策略（PR #3035）。
    *   **多通道路由混乱：** 在使用统一会话和多通道功能时，用户遇到消息路由错误或上下文丢失的问题，影响了多任务并行处理的体验（PR #4928, #5084）。

## 8. 待处理积压
以下 Issue/PR 长期处于 Open 状态，建议维护者优先处理，以维持项目健康度：

1.  **PR #1073:** `fix: preserve unknown config keys when saving to prevent data loss`
    *   **影响：** 直接导致用户配置数据丢失，属于高优先级 Bug 修复。
    *   **作者:** haosenwang1018
    *   **链接:** [PR #1073](https://github.com/HKUDS/nanobot/pull/1073)

2.  **PR #3035:** `fix(cron): 为 at 类型任务引入宽限窗口...`
    *   **影响：** 修复定时任务调度的核心逻辑缺陷，提升自动化可靠性。
    *   **作者:** weitongtong
    *   **链接:** [PR #3035](https://github.com/HKUDS/nanobot/pull/3035)

3.  **PR #4625:** `feat(exec): allow extra bwrap bind roots`
    *   **影响：** 增强沙箱灵活性，满足高级用户定制化需求。
    *   **作者:** yu-xin-c
    *   **链接:** [PR #4625](https://github.com/HKUDS/nanobot/pull/4625)

4.  **PR #4928 & #5084:** 两个关于路由和上下文的 Critical Bug Fixes。
    *   **影响：** 直接影响多会话和复杂交互场景的稳定性。
    *   **作者:** yu-xin-c
    *   **链接:** [PR #4928](https://github.com/HKUDS/nanobot/pull/4928), [PR #5084](https://github.com/HKUDS/nanobot/pull/5084)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-26
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
今日项目活跃度极高，过去24小时内共产生50条 Issue 更新和50条 PR 更新，显示出社区对当前版本（0.19.0）稳定性的强烈关注。维护团队响应迅速，当日合并/关闭了15个PR，并提交了多个关键修复，涵盖桌面端体验、网关安全性及配置一致性等核心领域。虽然无新版本发布，但密集的 Bug 修复表明开发重心正从功能扩展转向系统稳固性优化。整体项目健康度良好，但 Windows 平台及多平台网关集成方面存在较多碎片化问题。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日主要推进了以下技术改进：
*   **桌面端体验优化：** 修复了 Composer 中 Skill 引用触发逻辑过于僵化的问题（PR #71664），统一了 `⌘T` 新建标签页与 `⌘N` 会话的命名行为（PR #71672），并修正了推理努力程度配置在 Desktop 中被忽略的 Bug（PR #71679）。此外，代码块溢出窗口显示问题得到解决（PR #71678），以及删除 Git worktree 后会话归属混乱的问题（PR #71665）。
*   **网关与代理核心修复：** 解决了工作目录漂移导致 System Prompt 缓存失效的问题（PR #71676），确保了上下文压缩器能正确保留终端执行证据（PR #71670）。
*   **安全加固：** 实施了媒体下载中的 SSRF 防护策略（PR #71677），并在 s6 Docker 部署中修复了日志符号链接导致的权限提升漏洞（PR #71682）。同时，不再在关机诊断日志中捕获完整的进程命令行参数，以保护隐私（PR #59929）。
*   **兼容性改进：** 修正了浏览器工具在非 Debian 系统上的安装依赖逻辑（PR #71681），并解决了 Gateway 在无控制台环境（如 Windows 后台服务）下因 `sys.stderr` 为 None 导致的崩溃问题（PR #71671）。

## 4. 社区热点
以下 Issue 讨论最为激烈，反映了用户的核心痛点：
*   **[Telegram] MarkdownV2 escape breaks bullet list display** (#6388): 7条评论。用户反馈 Telegram 平台的 MarkdownV2 转义机制破坏了列表渲染，这是跨平台消息格式兼容性的典型难题。
*   **Dashboard cross-tab session bleed + /new hang** (#62726): 7条评论。涉及 Web Dashboard 的多标签页状态隔离和会话创建卡顿问题，直接影响多任务工作效率。
*   **providers vs custom_providers dual storage causes CLI/GUI mismatch** (#71298): 6条评论。揭示了 CLI 与 GUI 在配置存储结构上的不一致，导致模型版本锁定等诡异行为，暴露出配置管理的深层架构缺陷。
*   **Desktop boot loop: WebSocket connects but client disconnects** (#71226): 5条评论。Windows 用户报告启动循环崩溃，属于高优先级的可用性阻断问题。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：
1.  **P0/P1 - 崩溃与启动失败：**
    *   Desktop 启动循环崩溃（Issue #71226, PR #71671 部分缓解）。
    *   Windows 路径含非 ASCII 字符时构建脚本失败（Issue #60447）。
2.  **P2 - 核心功能异常：**
    *   Dashboard 跨标签页会话泄露（Issue #62726）。
    *   CLI `/reload-mcp` 导致终端冻结（Issue #39418）。
    *   Photon iMessage 流式输出显示乱码方块（Issue #49793）。
    *   Windows 上 `search_files` 对绝对路径返回空结果（Issue #63177）。
    *   `.env` 文件 UTF-8 BOM 导致第一个 Key 静默丢失（Issue #65123）。
3.  **P3 - 体验与显示问题：**
    *   Telegram 列表渲染错误（Issue #6388）。
    *   视频生成后聊天界面显示破损图标（Issue #40896）。
    *   Langfuse 追踪在更新后静默停止（Issue #59026）。

*注：多数 P2 级 Bug 已有对应的 PR 提交或正在审查中。*

## 6. 功能请求与路线图信号
*   **单网关多代理支持 (Single Gateway, Multiple Agents)：** PR #62944 重新基于当前 main 分支提交了这一长期以来的功能请求。这表明维护者认可该架构方向，可能将在下一大版本中正式引入，以实现更灵活的资源调度。
*   **本地语音识别 (Local STT)：** Issue #56989 请求文档化和支持完全本地的 STT（MLX/CUDA），以满足隐私敏感用户的需求。这符合 Hermes 作为开源代理对本地优先（Local-First）趋势的顺应。
*   **技能管理增强：** Issue #67139 请求为遗留和本地技能提供 curator 管理路径，反映用户对自动化技能生命周期管理的期待。

## 7. 用户反馈摘要
*   **配置复杂性是主要痛点：** 用户频繁抱怨 CLI 与 GUI 配置不同步（Issue #71298）、环境变量覆盖行为不明确（Issue #65123）、以及 Discord 配置项无效（Issue #40332）。用户希望有一个统一的、可预测的配置来源。
*   **平台适配质量参差不齐：** Windows 用户群体反馈集中，包括路径编码、更新失败、启动崩溃等问题（Issues #71226, #60447, #63717）。相比之下，Linux/macOS 用户的反馈更多集中在特定插件或高级功能上。
*   **对安全性的担忧：** 用户敏锐地指出了 `hermes debug share` 泄露私有数据（Issue #22016）以及媒体下载潜在的 SSRF 风险（PR #71677），表明社区对代理操作外部资源的安全性高度警惕。

## 8. 待处理积压
*   **ACP Session CWD 不一致：** Issue #11515 指出 ACP 模式下工作目录用于工具执行但未用于上下文发现，这是一个长期的架构不一致问题。
*   **Verify-on-stop 触发过于敏感：** Issue #52612 报告验证守卫在不相关的文件编辑时也会触发，影响用户体验。
*   **WeChat 语音转写语言支持：** Issue #27300 指出微信语音消息在非中文场景下转写质量差，建议路由到 Hermes 自身的 STT 管道，这需要较大的后端改造。

---
*分析师：Agnes-2.0-Flash | 开发者：Sapiens AI*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-07-26
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 项目在昨日（7月25日）保持了适度的社区活跃度，共处理了 2 个新 Issue 和 3 个 PR 更新。尽管没有新版本发布，但多个长期存在的功能请求 PR 获得了合并或状态更新，显示出维护者对扩展生态的持续投入。当前主要焦点集中在修复 Matrix 同步连接的稳定性问题以及优化多模型列表显示的用户体验。整体项目健康度良好，核心功能迭代平稳。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日有 2 个 PR 被标记为已关闭（通常意味着已合并或归档），推动了以下功能的完善：

*   **PR #339: 新增邮件、日历集成及系统监控工具**
    *   **贡献者:** udbhav-44
    *   **进展:** 该 PR 整合了 Google Calendar 支持，增强了 Email 通道的轮询和内容获取能力，并添加了 GitHub 和 System Stats 等新开发者工具。这显著扩展了 PicoClaw 作为 AI 助手的外部工具调用能力。
    *   **链接:** [sipeed/picoclaw PR #339](https://github.com/sipeed/picoclaw/pull/339)

*   **PR #3205: 修复 9router 网关兼容性及 ARMv7 构建支持**
    *   **贡献者:** sarwonous
    *   **进展:** 解决了在 Raspberry Pi 3 B+ 上使用 9router 作为 OpenAI 兼容网关时的响应解析失败问题，并补全了 Linux ARMv7 的构建目标。这对边缘设备部署和特定硬件兼容性至关重要。
    *   **链接:** [sipeed/picoclaw PR #3205](https://github.com/sipeed/picoclaw/pull/3205)

## 4. 社区热点
今日讨论最活跃的 Issue 如下：

*   **Issue #3203: Matrix 同步循环缺乏重连逻辑导致静默死亡**
    *   **热度:** 6 条评论, 2 个赞 👍
    *   **分析:** 用户 `weissfl` 报告了一个严重的稳定性问题：在网络中断或服务器重启后，Matrix 通道的 `/sync` 长轮询会永久停止，且由于主进程未崩溃，systemd 的自动重启机制无法触发。这反映了用户对高可用性（HA）和断网恢复能力的强烈需求。
    *   **链接:** [sipeed/picoclaw Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

*   **Issue #3294: /list models 命令仅显示当前模型而非所有配置模型**
    *   **热度:** 0 条评论 (刚创建)
    *   **分析:** 用户 `2suige-coder` 指出 `/list models` 命令的行为与预期不符，仅显示当前激活的模型，而忽略了 `model_list` 中配置的其他模型。这是一个明显的 UX 缺陷，影响了多模型环境下的管理效率。
    *   **链接:** [sipeed/picoclaw Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)

## 5. Bug 与稳定性
*   **[严重] Matrix 连接持久性问题 (Issue #3203)**
    *   **描述:** 网络波动或服务器维护后，Matrix 通道进入“静默死亡”状态，需要手动干预才能恢复。
    *   **状态:** 待修复，尚无关联的 Fix PR。
    *   **建议:** 需优先实现指数退避重连逻辑，或在检测到连接异常时触发进程级重启。

*   **[中等] 多模型列表显示错误 (Issue #3294)**
    *   **描述:** `/list models` 命令未能正确枚举所有配置的模型，造成用户困惑。
    *   **状态:** 新报告，待确认。

## 6. 功能请求与路线图信号
*   **外部工具集成:** PR #339 的合并表明项目正积极拥抱第三方服务集成（Email, Calendar, GitHub）。未来版本可能会进一步扩展此类“Tool”插件体系。
*   **硬件兼容性扩展:** PR #3205 的合并暗示维护者重视 ARM 架构（特别是 Raspberry Pi 系列）的支持，后续可能还会有更多针对边缘设备的优化 PR。
*   **通信协议多样化:** PR #3193 (Open/Stale) 尝试添加 "simplex channel type"，虽然目前状态为 stale，但表明社区在探索更轻量级或单向通信模式的可能性，可作为未来路线图的一个参考点。
    *   **链接:** [sipeed/picoclaw PR #3193](https://github.com/sipeed/picoclaw/pull/3193)

## 7. 用户反馈摘要
*   **痛点:** 用户高度关注服务的**鲁棒性**，特别是在不可靠的网络环境下（如 Matrix 连接断开后的恢复机制缺失）。
*   **使用场景:** 大量用户将 PicoClaw 部署在资源受限的边缘设备上（如 RPi 3 B+），并对特定硬件平台（ARMv7）和中间件（9router）的兼容性有具体需求。
*   **满意度:** 用户对新增的工具集成（如日历、邮件）表示欢迎，认为这提升了 PicoClaw 作为个人助手的实用性。
*   **不满意:** 命令行交互的准确性（如 `/list models` 行为不一致）降低了用户体验的一致性。

## 8. 待处理积压
*   **PR #3193: Added simplex channel type**
    *   **状态:** OPEN / Stale
    *   **作者:** dim
    *   **提醒:** 该 PR 自 6 月 27 日创建以来状态标记为 stale，但尚未被关闭或合并。建议维护者评估 "simplex channel" 的需求价值，若暂不采纳应及时关闭以保持仓库整洁；若感兴趣则需跟进代码审查。
    *   **链接:** [sipeed/picoclaw PR #3193](https://github.com/sipeed/picoclaw/pull/3193)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**：2026-07-26
**数据来源**：GitHub (nanocoai/nanoclaw)

## 1. 今日速览
今日 NanoClaw 项目保持高活跃度，社区贡献集中体现在**上下文一致性修复**、**安全加固**及**容器资源管理优化**三个核心领域。过去24小时内共更新 Issues 2 条（均为新增），PR 更新 11 条（10 条待合并，1 条已关闭/合并）。虽然无新版本发布，但多项关键修复 PR（如 #3135, #2748）直接关联核心稳定性与安全合规，显示出项目维护者对底层架构健壮性的高度重视。整体健康度良好，技术债务正在被系统性清理。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日主要推进了以下关键改进，显著提升了系统的可靠性与安全性：

*   **上下文同步修复 (#3135)**：针对 Issue #3134，PR #3135 解决了主机代发消息未进入 Agent 上下文的问题。这是提升 Agent 记忆完整性的关键一步，确保审批卡片、拒绝理由等关键信息在 Agent 侧可见，避免了因上下文缺失导致的逻辑断裂。
*   **容器安全硬化 (#2748 - Closed/Merged)**：该 PR 已被处理，引入了 `--cap-drop=ALL`、`no-new-privileges:true` 和 `pids-limit` 等 Docker 安全选项。这标志着 NanoClaw 在多租户环境下的防御纵深能力得到实质性增强，降低了容器逃逸或 Fork Bomb 攻击的风险。
*   **资源清理优化 (#3131)**：PR #3131 修正了卸载脚本中未能清理特定标签镜像 (`<base>:<agentGroupId>`) 的问题，解决了长期存在的磁盘空间泄漏隐患，提升了运维效率。
*   **输入验证加固 (#3130, #3129)**：通过 PR #3130 在写入阶段校验 `image_tag`，以及 PR #3129 阻断敏感路径挂载，进一步收紧了配置入口的安全边界，防止非法配置注入。

## 4. 社区热点
今日讨论最活跃且具技术深度的议题集中在数据一致性与轮询逻辑上：

*   **[OPEN] Messages the host sends on an agent's behalf are absent from that agent's context (#3134)**
    *   **链接**：[Issue #3134](https://github.com/nanocoai/nanoclaw/issues/3134)
    *   **分析**：用户 `brianjcohen` 指出了 Agent 记忆组装中的逻辑漏洞。此问题直接影响用户体验的连贯性，尤其是涉及人机协作审批场景时。目前已有对应 PR #3135 进行修复，是今日最高优先级的功能补全。
*   **[OPEN] bug: follow-up poll pushes accumulate messages into an active query (#3132)**
    *   **链接**：[Issue #3132](https://github.com/nanocoai/nanoclaw/issues/3132)
    *   **分析**：用户 `buzali` 发现 `poll-loop.ts` 中仅部分路径受 `trigger` 门控保护，导致消息堆积绕过控制逻辑。该 Bug 可能导致消息处理顺序混乱或重复消费。PR #3133 提供了精确的代码级修复，体现了社区对内部循环逻辑细节的高度关注。

## 5. Bug 与稳定性
今日报告了两个明确的功能性 Bug，均已有对应的修复 PR 处于开放状态：

1.  **高严重性 - 上下文丢失 (#3134 / PR #3135)**：
    *   **描述**：主机代发的消息（如审批卡）未同步至 Agent 上下文。
    *   **影响**：Agent 无法感知关键交互历史，可能导致后续决策错误。
    *   **状态**：Fix PR 已提交 (#3135)。
2.  **中高严重性 - 消息堆积逻辑缺陷 (#3132 / PR #3133)**：
    *   **描述**：跟进轮询器未正确应用 `trigger=1` 门控，导致非触发消息意外进入活跃查询。
    *   **影响**：可能引发消息队列污染或性能损耗。
    *   **状态**：Fix PR 已提交 (#3133)。

*注：PR #2748 虽标记为 CLOSED，但根据其摘要“harden agent containers”，推测其为合并或已解决的安全加固任务，不属于新发 Bug。*

## 6. 功能请求与路线图信号
*   **MCP 服务器状态报告 (#3124)**：PR #3124 由 `shixi-li` 提交，旨在报告不可用的 MCP 服务器。这反映了用户对**可观测性**的需求，希望更清晰地了解外部服务连接状态，而非静默失败。
*   **工具调用可视化预览 (#2211)**：PR #2211 长期开放，提供 `PreToolUse/PostToolUse` 钩子的实时预览功能。尽管存在已久，但其持续更新表明这是一个高价值用户体验功能，预计将在未来版本作为核心特性集成。
*   **航班值机容器技能 (#3128)**：新增 Operational Skill，显示社区正在扩展特定领域的垂直应用能力，路线图倾向于支持模块化、插件化的技能生态。

## 7. 用户反馈摘要
*   **痛点**：用户普遍关注 Agent 的“记忆完整性”和“执行透明度”。Issue #3134 和 #2211 均指向同一核心诉求——用户需要确认 Agent 是否真正“知道”并“看到”了所有交互步骤和工具调用结果。
*   **安全焦虑**：Issue #3129 和 PR #2748 表明，随着 NanoClaw 在生产环境的部署，用户对容器隔离、权限最小化和挂载安全性的敏感度极高。任何配置疏忽（如挂载 `~/.config/nanoclaw`）都被视为潜在风险点。
*   **运维效率**：Issue #3131 反映出用户在大规模部署后，对镜像清理和资源回收的具体痛点，期望工具能提供更精准的运维辅助。

## 8. 待处理积压
*   **长期未合并 - 工具可见性技能 (#2211)**：
    *   **链接**：[PR #2211](https://github.com/nanocoai/nanoclaw/pull/2211)
    *   **建议**：该 PR 已维护三个月并经过生产环境验证，建议 Core Team 优先审查并合并，以回应用户对透明度的强烈需求。
*   **主兼容性修复 (#3122)**：
    *   **链接**：[PR #3122](https://github.com/nanocoai/nanoclaw/pull/3122)
    *   **建议**：涉及 OpenCode 兼容性及内存parity，影响范围较广，需确保测试覆盖充分后尽快合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-07-26
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目在 2026-07-26 保持高活跃度，过去 24 小时内共产生 11 个 Issues 和 20 个 Pull Requests。核心进展集中在 **WebUI 性能优化与可访问性修复**（由 `italic-jinxin` 主导）以及 **Reborn 架构的底层稳定性加固**（由 `serrrfirat` 和 `ilblackdragon` 主导）。今日合并了多个关键 PR，显著降低了 WebUI 初始加载体积并修复了焦点陷阱等体验问题，同时通过突变测试和结构死代码检测提升了 Rust 后端的工程纪律。整体项目处于从“功能构建”向“稳定性与体验打磨”过渡的健康阶段。

## 2. 版本发布
*   **无新版本发布。**
*   *注：PR #5598 (`chore: release`) 仍处于 OPEN 状态，包含 `ironclaw_common` 和 `ironclaw_skills` 的版本更新，预计将在近期合并后触发实际发布流程。*

## 3. 项目进展
今日合并/关闭的 PR 主要推动了以下三个维度的改进：

### A. WebUI 性能与用户体验重大突破
*   **代码分割与树摇优化 (PR #6632):** 实现了路由级代码分割，将初始 JavaScript 包大小从 **1,227.16 kB (348.55 kB gzip)** 大幅缩减至 **376.87 kB (116.32 kB gzip)**，降幅约 69%。这直接解决了 Issue #6628 和 #6629 中提到的加载缓慢问题。
*   **可访问性 (a11y) 修复 (PR #6624):** 修复了扩展配置模态框中的键盘焦点陷阱问题，确保 Tab 键导航仅在模态框内循环，并在关闭时正确恢复焦点，响应 Issue #6621。
*   **状态管理优化 (PR #6627 & #6626):** 修复了运行取消失败时的前端状态不一致问题，以及自动化列表过滤时的闪烁现象，提升了交互流畅度。

### B. Reborn 架构稳定性与工程纪律
*   **突变测试框架引入 (PR #6674 & #6681):** 建立了突变审计工具链，旨在检测“执行但未验证结果”的测试漏洞，强化错误恢复契约 (#6284) 的覆盖率。
*   **结构死代码检测 (PR #6673 & #6679):** 引入了生产环境的结构死代码扫描器（使用 `syn` 解析），替代了原有的行导向扫描器，能更准确地识别未使用的字段和方法，防止 API 膨胀。
*   **扩展主机重构 (PR #6669 & #6616):** 将扩展主机所有权从 `composition` 模块移出，简化了依赖关系，移除了废弃的产品工作流 facade。

### C. 安全与集成增强
*   **签名意图生命周期 (PR #6672):** 推进了“已认证签名”计划的 B 阶段，实现了代理的加密意图证明和每代理密钥生命周期管理。
*   **命令管道统一 (PR #6678):** `/model` 和 `/status` 斜杠命令在所有渠道（Slack, Telegram, WebChat）实现端到端工作，消除了适配器中的重复逻辑。

## 4. 社区热点
以下是今日讨论最活跃或具有战略意义的 Issues/PRs：

*   **[EPIC] Error Recoverability Endgame (Issue #6284)**
    *   **链接:** [nearai/ironclaw Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
    *   **分析:** 这是当前架构的核心目标，要求模型能 100% 恢复其看到的错误。今日 PR #6677 为此提供了具体的分类矩阵实现，显示团队正在从理论设计转向严格的工程落地。
*   **Daily ironclaw failure taxonomy — 2026-07-25 (Issue #6676)**
    *   **链接:** [nearai/ironclaw Issue #6676](https://github.com/nearai/ironclaw/issues/6676)
    *   **分析:** 每日失败分类报告指出当前运行主要由模型短板驱动而非测试套件缺陷，表明基础测试框架稳定，但模型能力仍是瓶颈。
*   **V1 Launch Checklist Items (Issues #6671, #6668, #6667)**
    *   **链接:** [Issue #6671](https://github.com/nearai/ironclaw/issues/6671), [Issue #6668](https://github.com/nearai/ironclaw/issues/6668), [Issue #6667](https://github.com/nearai/ironclaw/issues/6667)
    *   **分析:** 用户反馈 V1 发布前存在严重的引导缺失问题：Telegram/Slack 集成路径隐蔽、GitHub PAT 错误静默重试。这些是阻碍新用户上手的关键摩擦点，需优先解决。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 WebUI 交互和集成引导上，严重程度中等：

| 严重等级 | 问题描述 | 关联 Issue | 修复状态 |
| :--- | :--- | :--- | :--- |
| **High** | **运行取消失败导致前端状态错乱**：后端取消失败时，前端仍显示空闲，导致用户无法停止仍在运行的任务。 | [#6620](https://github.com/nearai/ironclaw/issues/6620) | ✅ **已修复** (PR #6627) |
| **Medium** | **GitHub PAT 静默循环**：无效令牌导致无限重试提示，无错误反馈。 | [#6667](https://github.com/nearai/ironclaw/issues/6667) | ⏳ **待处理** |
| **Medium** | **扩展配置焦点丢失**：键盘用户无法在模态框内正常导航。 | [#6621](https://github.com/nearai/ironclaw/issues/6621) | ✅ **已修复** (PR #6624) |
| **Low** | **自动化列表过滤闪烁**：切换过滤器时出现全屏骨架屏加载。 | [#6622](https://github.com/nearai/ironclaw/issues/6622) | ✅ **已修复** (PR #6626) |
| **Low** | **Slack/Telegram 集成引导缺失**：Agent 无法指导用户完成非默认渠道的配置。 | [#6668](https://github.com/nearai/ironclaw/issues/6668), [#6671](https://github.com/nearai/ironclaw/issues/6671) | ⏳ **待处理** |

## 6. 功能请求与路线图信号
*   **依赖集中化管理 (Issue #6675):** 用户提议使用 `[workspace.dependencies]` 集中管理 Rust 依赖。这与 PR #6640 (Dependabot 批量更新) 和 PR #6679 (清理死代码) 的方向一致，暗示下一版本将重点进行 Cargo workspace 的规范化。
*   **WebUI 性能极致优化:** 基于 Issue #6628 和已合并的 PR #6632，路线图显示 WebUI 将继续向“轻量化”方向发展，后续可能涉及更多静态资源压缩和缓存策略优化。
*   **多模态/多渠道命令统一:** PR #6678 表明项目正致力于消除不同前端（WebChat, Slack, Telegram）之间的逻辑差异，未来可能会有更多跨渠道的功能同步。

## 7. 用户反馈摘要
*   **痛点：** 新手用户在配置 Telegram 和 Slack 时感到困惑，因为 Agent 没有提供明确指引，且配置入口深埋于 Extensions 菜单底部 (Issue #6671, #6668)。
*   **痛点：** 当 GitHub Token 失效时，系统没有任何提示，只是不断重试，导致用户不知道需要手动更换 Token (Issue #6667)。
*   **满意点：** WebUI 的性能提升显著，初始加载速度加快；扩展配置的键盘无障碍支持得到改善。
*   **场景：** 运维人员关注每日失败分类 (Issue #6676)，希望区分是模型能力问题还是 Harness 缺陷，以便针对性优化。

## 8. 待处理积压
*   **Issue #6675 (Centralize Shared Rust Dependencies):** 长期未响应的重要架构改进建议，建议维护者评估并纳入下一轮依赖更新周期。
*   **Issue #6667, #6668, #6671 (V1 Launch Checklist Guidance Gaps):** 这三个关于集成引导的 Issue 均标记为 `[v1-launch-checklist]`，属于发布前阻塞项。虽然已有相关 PR 处理底层逻辑，但用户侧的引导文案和 Agent 行为仍需专门处理，建议优先分配资源。
*   **PR #5598 (chore: release):** 该 PR 已开放超过 20 天，包含重要的 API 变更 (`ironclaw_common` 0.4.2 -> 0.5.0)，需尽快合并以解除版本锁定。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-07-26
**数据来源**：GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 项目在 2026-07-25 至 2026-07-26 期间表现出极高的活跃度与高效的执行力。过去 24 小时内，项目共处理 **9 条 Issue**（仅 1 条新开，8 条已解决/标记 stale）和 **11 条 Pull Request**（全部合并或关闭）。值得注意的是，大量长期积压的功能增强类 Issue（如工具调用折叠、会话列表分组、时间戳显示等）均在昨日集中合并，标志着 Cowork 会话体验的重大迭代完成。同时，Windows 平台的安装器安全性得到加固，并新增了对 Kimi K3 模型的支持。整体项目健康度良好，技术债务清理迅速，新功能落地速度快。

## 2. 版本发布
*   **无新版本发布**。
*   尽管今日合并了大量功能 PR，但尚未触发新的 Release 标签创建。建议维护团队在下一窗口期发布新版本，以包含今日合并的 Cowork 体验优化及 Windows 安全补丁。

## 3. 项目进展
今日合并的 PR 主要集中在 **Cowork 会话体验优化** 和 **平台稳定性加固** 两个维度：

### 🚀 Cowork 会话体验重大升级 (由 MaoQianTu 主导)
以下功能均已通过 PR 合并并关联对应的 Issue，显著提升了用户操作效率：
*   **工具调用批量控制** (#1327): 当 AI 回合包含 2+ 个 ToolUse 块时，支持“展开全部/折叠全部”一键切换。解决了逐个点击繁琐的问题。[PR #1327](https://github.com/netease-youdao/LobsterAI/pull/1327)
*   **错误状态可视化** (#1331): 为侧边栏会话列表中 `error` 状态的会话添加红色静态圆点指示器，便于快速定位故障会话。[PR #1331](https://github.com/netease-youdao/LobsterAI/pull/1331)
*   **会话列表时间分组** (#1338): 实现类似 ChatGPT/Claude 的时间分组展示（今天/昨天/本周/更早/置顶），提升长历史记录的可浏览性。[PR #1338](https://github.com/netease-youdao/LobsterAI/pull/1338)
*   **消息时间戳显示** (#1340): 在用户消息气泡底部增加发送时间戳（HH:MM），悬浮显示完整时间，辅助回顾对话节奏。[PR #1340](https://github.com/netease-youdao/LobsterAI/pull/1340)
*   **输入框历史回溯** (#1342): 支持在输入框中使用 ↑/↓ 方向键浏览最近 50 条已发送消息，极大提升调试和复用指令的效率。[PR #1342](https://github.com/netease-youdao/LobsterAI/pull/1342)

### 🛠️ 其他关键更新
*   **Kimi K3 支持** (#2381): 新增对 Kimi K3 模型的集成支持，扩展了可用模型生态。[PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381)
*   **Windows 安装器加固** (#2383, #2384): 修复了 Windows 环境下安装器可能受到外部内容保护问题，并增强了安装和更新恢复机制，提升安全性与稳定性。[PR #2383](https://github.com/netease-youdao/LobsterAI/pull/2383), [PR #2384](https://github.com/netease-youdao/LobsterAI/pull/2384)
*   **MCP 配置 JSON 导入** (#1336): MCP 自定义服务器配置弹窗新增 JSON 粘贴导入功能，简化了复杂配置的录入过程。[PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336)
*   **定时任务工作日选项** (#1335): 新增“工作日 (Mon-Fri)”计划类型，自动生成对应 Cron 表达式。[PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335)
*   **i18n 与 UX 修复** (#1333): 修复了附件标签国际化问题、Escape 键关闭行为及删除确认守卫。[PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333)

## 4. 社区热点
今日社区讨论焦点集中在 **UI/UX 细节完善** 和 **特定平台功能缺失**：

*   **高关注度长期 Issue 集中解决**: 多个由 `MaoQianTu` 发起的 Issue（#1326, #1330, #1337, #1339, #1341, #1343, #1345）在过去几天被标记为 stale 或关闭，且均有对应的 PR 合并。这反映了社区对于提升 Cowork 界面交互效率的强烈诉求，且维护者响应积极。
*   **新发起的 Bug/功能请求**:
    *   **#2385 [OPEN]**: 用户反馈对话框目前只能添加文件，无法添加文件夹，也不能像其他 Agent 一样使用 `@` 符号引用文件。这是当前唯一的活跃 Issue，显示了用户对更灵活的文件管理功能的期待。[Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)
    *   **#1329 [CLOSED]**: 报告新建定时任务时通知渠道选项为空，仅能选不通知。该 Issue 已被关闭，可能已通过后续配置逻辑修复或标记为需进一步调查。[Issue #1329](https://github.com/netease-youdao/LobsterAI/issues/1329)

## 5. Bug 与稳定性
*   **Windows 安装器安全性修复**: PR #2383 和 #2384 针对 Windows 平台的安装过程进行了安全加固，修复了潜在的 root foreign content 保护问题和更新恢复机制缺陷。这对 Windows 用户的稳定性至关重要。[PR #2383](https://github.com/netease-youdao/LobsterAI/pull/2383), [PR #2384](https://github.com/netease-youdao/LobsterAI/pull/2384)
*   **定时任务 UI 异常**: Issue #1329 描述了通知渠道选项缺失的问题，虽已关闭，但需确认是否彻底修复，避免用户在实际使用中遇到配置困难。[Issue #1329](https://github.com/netease-youdao/LobsterAI/issues/1329)
*   **无严重崩溃报告**: 今日 Issues 中未提及应用崩溃或数据丢失等严重稳定性问题。

## 6. 功能请求与路线图信号
基于今日合并的 PR 和新开的 Issue，可以推断以下路线图信号：

*   **优先推进的方向**:
    *   **交互效率**: 批量操作（折叠/展开）、历史回溯（方向键）、时间分组、时间戳显示等功能的高速合并，表明团队正致力于将 LobsterAI 的 Cowork 界面打磨得接近主流商业 AI 产品（如 ChatGPT/Claude）的体验。
    *   **配置便利性**: MCP 的 JSON 导入和定时任务的工作日选项，显示出团队重视降低高级功能的使用门槛。
*   **潜在的新需求**:
    *   **文件管理增强**: Issue #2385 明确提出支持文件夹添加和 `@` 引用文件。鉴于团队对 UX 的重视，此功能很可能被纳入近期开发计划，特别是如果它被视为提升工作流效率的关键点。
    *   **全文搜索**: Issue #1343 提出搜索弹窗应支持消息内容全文搜索而不仅是标题。虽然该 Issue 已关闭，但未看到明确的合并 PR 提及此功能，需关注是否已排期或作为独立任务处理。[Issue #1343](https://github.com/netease-youdao/LobsterAI/issues/1343)
    *   **Markdown 导出**: Issue #1345 提出会话详情导出为 Markdown 的功能。同样，Issue 已关闭但需确认是否有对应 PR 合并，若无，则可能是优先级较低或待后续版本实现。[Issue #1345](https://github.com/netease-youdao/LobsterAI/issues/1345)

## 7. 用户反馈摘要
*   **正面反馈**: 用户对批量折叠/展开工具调用、错误状态红点指示、会话列表按时间分组、输入框历史回溯等功能表示认可（从 Issue 描述的清晰度和 PR 的快速合并可以看出这些是高频痛点）。
*   **痛点**:
    *   **文件操作受限**: 用户希望像在其他 Agent 应用中那样，能够直接添加文件夹并通过 `@` 符号引用，而不是仅限于单个文件。[Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)
    *   **通知配置困惑**: 有用户反映新建定时任务时通知渠道选项不可用，导致无法设置有效通知。[Issue #1329](https://github.com/netease-youdao/LobsterAI/issues/1329)
    *   **搜索能力不足**: 用户希望搜索功能能覆盖消息内容全文，而不仅仅是标题，以便更精准地找回历史对话。[Issue #1343](https://github.com/netease-youdao/LobsterAI/issues/1343)
    *   **导出格式单一**: 用户需要 Markdown 格式的会话导出，以便进行二次编辑和笔记整理，目前仅支持截图不够实用。[Issue #1345](https://github.com/netease-youdao/LobsterAI/issues/1345)

## 8. 待处理积压
*   **#2385 [OPEN] 对话框添加文件只能添加文件，不能添加文件夹**: 这是目前唯一开放的 Issue，明确提出了功能缺失。建议维护者优先评估此需求的可行性，并将其纳入下一个功能迭代周期。[Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)
*   **Issue #1343 (全文搜索) 和 #1345 (Markdown 导出)**: 这两个 Issue 虽已关闭，但若未找到对应的合并 PR，则可能仍处于待办状态或优先级较低。建议检查内部追踪系统或后续 PR 列表，确认其实现状态。若未实现，可作为下一个版本的功能候选项。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：** 2026-07-26
**数据来源：** GitHub (moltis-org/moltis)

## 1. 今日速览
今日 Moltis 项目保持中等活跃度的开发节奏，主要聚焦于多协议适配层的完善与内部工作流规范。过去24小时内无新 Issue 提交，但 Pull Request 活动频繁（5条），其中2条已合并，3条处于开放状态。开发重点在于增强 Slack 交互的可靠性（ACK机制）以及扩展 Nostr 协议的群组聊天能力。整体代码库稳定性良好，未见重大回归或阻塞性问题，项目正向更完善的 AI Agent 协作基础设施迈进。

## 2. 版本发布
**无新版本发布。**
当前处于功能迭代期，未触发新的 Release 流程。

## 3. 项目进展
今日通过合并以下 PR，显著提升了项目的健壮性和功能覆盖：

*   **Slack 交互可靠性增强 (#1165, #1166)**
    *   **PR #1165 [CLOSED] feat(slack): acknowledge messages with reactions and add reaction triggers**
        *   **进展：** 解决了 Slack Bot 无法显示“正在输入”指示器的问题，引入了基于 Reaction 的消息确认机制。同时修复了线程回复中的消息错乱 Bug。
        *   **影响：** 极大改善了用户在使用 Slack 集成时的体验反馈闭环，确保消息处理的透明性。
    *   **PR #1166 [OPEN] feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit**
        *   **进展：** 在 #1165 基础上进一步深化，增加了阶段反馈（Phase feedback）、重连监督机制以及 Block Kit 渲染支持。
        *   **影响：** 使 Slack 集成能够处理更复杂的队列、取消和投递失败场景，提升了企业级使用的稳定性。

*   **Nostr 协议扩展 (#1168)**
    *   **PR #1168 [OPEN] feat(nostr): add NIP-29 group chat support for Buzz channels**
        *   **进展：** 正在为 `moltis-nostr` 模块添加对 NIP-29 群组聊天的支持，以适配 Block 开源工作区 Buzz。
        *   **影响：** 拓展了 Moltis 在去中心化社交网络（Nostr）生态中的兼容性，使其能更好地融入 AI Agent 与人类平等的协作环境。

*   **内存后端实验性支持 (#1158)**
    *   **PR #1158 [OPEN] feat(memory): add zvec vector database memory backend**
        *   **进展：** 引入了基于 Zvec 和 redb 的向量数据库作为记忆后端，并通过 Cargo Feature 进行特性门控。
        *   **影响：** 为高性能向量检索提供了替代方案，丰富了项目的存储架构选择。

*   **开发规范强化 (#1167)**
    *   **PR #1167 [CLOSED] docs: forbid Claude session URLs in commits and PRs**
        *   **进展：** 更新了 `CLAUDE.md` 工作流规则，禁止在提交信息和 PR 描述中包含 Claude 会话链接。
        *   **影响：** 保持了代码仓库的整洁性和专业性，避免了无关的 AI 辅助痕迹泄露。

## 4. 社区热点
今日社区讨论热度主要集中在 **Slack 集成的用户体验优化** 上。

*   **核心议题：** 用户/开发者关注点在于 Slack Bot 缺乏即时反馈导致的“黑盒”焦虑。
*   **关键 PR：** [PR #1166](https://github.com/moltis-org/moltis/pull/1166) 和 [PR #1165](https://github.com/moltis-org/moltis/pull/1165)。
*   **诉求分析：** 现有的 Slack API 限制（无 Typing Indicator）迫使项目采用 Reaction 作为 ACK 信号。社区对此类“补偿性 UX 设计”高度认可，并期望进一步细化到消息处理的不同阶段（如排队中、处理中、完成）。这表明用户对 AI Agent 在 IM 工具中的行为可观测性有强烈需求。

## 5. Bug 与稳定性
*   **已修复 Bug：** [PR #1165](https://github.com/moltis-org/moltis/pull/1165) 中明确提到修复了一个“confirmed wrong-message bug in threaded replies”（线程回复中的消息错误 Bug）。这是一个重要的稳定性修复，防止了对话上下文混乱。
*   **当前状态：** 今日无新增 Bug 报告。所有已知的 Slack 相关交互问题正在通过一系列 PR 逐步解决。

## 6. 功能请求与路线图信号
*   **向量记忆后端多样化：** [PR #1158](https://github.com/moltis-org/moltis/pull/1158) 展示了用户对自定义/高性能记忆后端的兴趣。虽然目前标记为实验性（vibe-coded experiment），但它暗示了路线图可能包含对更多嵌入式向量数据库的支持，以满足不同部署场景（如本地化、低延迟）的需求。
*   **Nostr 深度集成：** [PR #1168](https://github.com/moltis-org/moltis/pull/1168) 表明项目正积极拥抱 Nostr 生态，特别是针对 Buzz 这样的特定工作区应用。这符合 Moltis 作为通用 AI Agent 助手定位的扩展策略。

## 7. 用户反馈摘要
*   **正面反馈：** 开发者对 Slack 集成中添加的“ACK 反应”机制表示欢迎，认为这是弥补平台缺陷的必要且优雅的方案。
*   **痛点洞察：** 用户在使用 Slack 时，最痛点在于“不知道 AI 是否收到了消息”以及“不知道消息处理到了哪一步”。PR #1166 正在直接回应这一痛点，通过增加 phase feedback（阶段反馈）来提供实时状态。

## 8. 待处理积压
*   **PR #1168:** [feat(nostr): add NIP-29 group chat support](https://github.com/moltis-org/moltis/pull/1168) - 创建于 7月25日，目前仍为 OPEN 状态。需关注其测试覆盖率和与现有 Nostr 模块的兼容性。
*   **PR #1166:** [feat(slack): per-message acknowledgment...](https://github.com/moltis-org/moltis/pull/1166) - 创建于 7月24日，OPEN 状态。作为 #1165 的后续增强，需尽快合并以形成完整的 Slack 功能集。
*   **PR #1158:** [feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158) - 创建于 7月17日，OPEN 状态。由于时间较长，建议维护者评估其作为正式功能纳入主分支的可行性，或将其标记为长期实验特性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期**：2026-07-26
**数据来源**：GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
今日 CoPaw 社区活跃度较高，过去 24 小时内共产生 8 个新 Issue 和 8 个 PR 更新。核心关注点集中在 **MCP 驱动层的传输协议兼容性问题**（多个重复 Issue 指向同一根因）以及 **Windows 环境下的稳定性修复**。虽然无新版本发布，但针对 SQLite 持久化、浏览器控制 SDK 统一化以及 Windows 原生沙箱支持的 PR 正在积极推进，显示项目在底层架构健壮性和跨平台兼容性上持续投入。

## 2. 版本发布
*   **无新版本发布**。当前最新版本仍为 v2.0.1。

## 3. 项目进展
今日合并/关闭的 PR 主要涉及记忆检索增强和本地测试流程优化，显著提升了系统的可配置性和开发体验：

*   **记忆搜索重排序功能落地**：
    *   **[PR #5692] feat(memory): add reranker for search results on reme0.4**：在 reme0.4 记忆搜索后端添加了标准的重排序（Reranker）阶段，配合原有的混合检索（BM25 + Vector），提升结果相关性。
    *   **[PR #5691] feat(console): add reranker config UI for reme0.4 memory search**：在前端控制台增加了“搜索结果重排序”的配置面板，支持模型名称、Base URL、API Key 等参数配置，并完成了中英双语国际化。
    *   **进展评估**：这两项 PR 的合并标志着 QwenPaw 的记忆系统从单纯的向量检索向更精准的语义重排迈进，大幅提升了长上下文场景下的信息召回质量。

*   **开发体验与文档修正**：
    *   **[PR #6365] fix(console): run test scripts on Windows**：修复了 Windows 环境下 npm 脚本执行失败的问题，允许 Windows 贡献者正常运行测试覆盖率检查。
    *   **[PR #6462] docs(sandbox): clarify native Windows sandbox support**：澄清了 Windows 原生沙箱支持情况，指出不再强制依赖 WSL2，降低了 Windows 用户的部署门槛。

## 4. 社区热点
今日社区讨论热度最高的是关于 **MCP 驱动传输配置被忽略** 的问题，出现了多条高度相似的报告，反映出该 Bug 对多用户造成了广泛影响：

*   **Issue #6470, #6469, #6468**：
    *   **现象**：用户报告 MCP Driver 在建立连接时硬编码使用 `sse_client`，忽略了 YAML 配置中指定的 `transport: streamable_http`，导致 Streamable HTTP 服务器连接失败。
    *   **分析**：这并非单一用户的误操作，而是框架代码层面的逻辑缺陷（根因指向 `mcp_stateful_client.py` 约第 800 行）。多位用户（JohnyLe, cloud-orchestrator）在不同工作区复现此问题，表明这是阻碍 MCP 工具集成的关键阻塞性 Bug。
    *   **链接**：
        *   [Issue #6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)
        *   [Issue #6469](https://github.com/agentscope-ai/QwenPaw/issues/6469)
        *   [Issue #6468](https://github.com/agentscope-ai/QwenPaw/issues/6468)

*   **Issue #6466**：
    *   **需求**：希望 Agent 能在聊天中发送可点击的文件/文件夹路径按钮，方便用户直接打开资源，而非手动复制粘贴。
    *   **链接**：[Issue #6466](https://github.com/agentscope-ai/QwenPaw/issues/6466)

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

1.  **高严重度：MCP 连接失败（回归/逻辑错误）**
    *   **描述**：MCP Driver 无视配置，硬编码 SSE 客户端，导致 Streamable HTTP 服务不可用。
    *   **状态**：Open，需紧急修复。
    *   **链接**：[Issue #6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)

2.  **中高严重度：模型连接测试全面失败**
    *   **描述**：在 AgentScope Platform 部署的 QwenPaw v2.0.1 无法连接任何模型，下拉列表为空，报错 "API error when connecting to model 'xxx'"。
    *   **状态**：Open，可能涉及后端 API 网关或认证配置问题。
    *   **链接**：[Issue #6464](https://github.com/agentscope-ai/QwenPaw/issues/6464)

3.  **中严重度：Edge+Wayland 下高 CPU 占用**
    *   **描述**：在 Linux Wayland 环境下使用 Edge 浏览器访问 QwenPaw 首页或大会话页面时，单标签页 CPU 占用极高，疑似 WebSocket 推送或大结果集渲染触发。
    *   **状态**：Open，需前端性能优化。
    *   **链接**：[Issue #6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)

4.  **低严重度：节点搭建失败（用户配置问题）**
    *   **描述**：用户反馈按照视频搭建翻墙节点失败，访问返回 -1。经判断为用户自身网络或配置环境问题，非项目代码 Bug。
    *   **链接**：[Issue #6467](https://github.com/agentscope-ai/QwenPaw/issues/6467)

## 6. 功能请求与路线图信号
*   **智能体完全隔离（隐私保护）**：
    *   **Issue #6461**：用户强烈要求在服务器部署场景下，实现智能体之间的数据完全隔离（Memory、设置、对话记录互不可见），防止多租户或多机器人场景下的隐私泄露。
    *   **路线图信号**：此需求反映了企业对级联部署和多智能体协作场景的安全合规要求。若官方未提供细粒度的权限控制系统，此 Issue 可能推动团队在下一版本中引入更严格的沙箱隔离或租户级数据隔离机制。
    *   **链接**：[Issue #6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)

*   **可点击路径交互**：
    *   **Issue #6466**：用户希望 Agent 输出可点击的路径按钮。这属于提升 UX 的微创新，若实施成本较低，可能被纳入后续体验优化迭代中。
    *   **链接**：[Issue #6466](https://github.com/agentscope-ai/QwenPaw/issues/6466)

## 7. 用户反馈摘要
*   **痛点**：
    *   **MCP 集成受阻**：大量用户尝试接入外部 MCP 工具时，因传输协议不兼容而失败，严重影响工具扩展性。
    *   **隐私焦虑**：在多智能体共用实例的场景下，用户担心不同角色的 AI 助手之间互相窥探数据和记忆，缺乏信任感。
    *   **性能瓶颈**：特定浏览器/操作系统组合（Edge + Wayland）下存在明显的性能问题，影响高端用户的使用体验。
*   **满意点**：
    *   **记忆搜索增强**：用户对新加入的重排序（Reranker）功能表示期待，认为这将显著提升搜索准确性。
    *   **Windows 支持简化**：澄清无需 WSL2 即可使用原生沙箱，降低了 Windows 开发者和企业用户的部署难度。

## 8. 待处理积压
*   **维护者关注重点**：
    *   **MCP 驱动 Bug (#6470, #6469, #6468)**：这三个 Issue 指向同一个代码缺陷，建议合并讨论并优先修复，以恢复 MCP 生态的可用性。
    *   **模型连接故障 (#6464)**：需排查 AgentScope Platform 后端的 API 连通性问题，这可能影响所有云端部署用户。
    *   **长期未响应 Issue**：Issue #6467 明显为用户配置错误，但作者表示“去群里咨询也没人理我”，建议社区志愿者或维护者在 Issue 评论区简要指引，避免用户感到被忽视。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-26
**数据来源：** GitHub API (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-07-26 保持高活跃度，过去 24 小时内共产生 69 次代码交互（19 Issues + 50 PRs），其中 48 个 PR 待合并，显示开发节奏紧凑且维护者响应迅速。项目核心焦点集中在 **v0.8.4 维护版本的发布准备**、**WhatsApp Web 渠道的安全漏洞修复**以及 **运行时稳定性优化**（特别是测试 Flake 和成本追踪）。尽管没有正式的新版本 Release 标签更新，但 PR #9376 已标记为切割 v0.8.4 分支，预示着即将发布的版本已进入收尾阶段。整体项目健康度良好，但存在若干高危安全配置误用问题需紧急关注。

## 2. 版本发布
**当前状态：无正式 Release 标签更新**
- **预备版本：** v0.8.4 维护版正在推进中（Issue #8357），目标发布日期为 2026-07-31。
- **关键变更预告（PR #9376）：**
    - **工作区可发布性：** 首次使工作区可向 crates.io 发布。根包重命名为 `zeroclaw`，以匹配二进制名称 `cargo install zeroclaw`。
    - ** crate 结构：** 18 个 crate 将发布，5 个保持内部引用。
    - **破坏性变更注意：** 对于依赖底层 crate 路径的用户，需注意包命名空间的变化。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在基础设施加固和插件系统完善：

*   **[CLOSED] PR #9270 - 修复 Web 依赖安全漏洞**
    *   **内容：** 解决 npm audit 报告的高危漏洞，包括锁定 `@redocly/openapi-core` 至 `1.34.7`，升级 `js-yaml` 和 `brace-expansion`。
    *   **意义：** 直接响应 Issue #9235 的 CI 审计失败，提升了 Web 仪表盘的安全性。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9270)

*   **[CLOSED] PR #9123 - 修复 Host-Stamp 通道插件路由**
    *   **内容：** 引入 `PluginChannelEndpoint`，分离通道类型路由与实例标识别名，修复了插件通道的路由逻辑。
    *   **意义：** 完善了 WASM 插件系统的宿主端集成，确保通道身份识别的准确性。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9123)

*   **[OPEN] PR #9376 - 切割 v0.8.4 发布**
    *   **内容：** 执行发布流程，清理 crate 并更新 changelog。
    *   **意义：** 标志着 v0.8.x 系列维护周期的关键里程碑。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9376)

*   **[OPEN] PR #9115 - CI 构建加速**
    *   **内容：** 将编译密集型任务迁移至更快的 Blacksmith 运行器。
    *   **意义：** 提升开发者体验和 CI 效率。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9115)

## 4. 社区热点
以下 Issues/PRs 引发了较多关注或具有架构指导意义：

*   **Issue #9348: WhatsApp Web 安全配置失效 (High Risk)**
    *   **描述：** 在 `mode = business` 下，即使配置了允许列表，Agent 也会回复所有 DM 和群组消息。这是一个严重的配置误导导致的安全风险。
    *   **热度：** 高（关联 Issue #9366, PR #9354）。
    *   **链接：** [Issue #9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)

*   **Issue #6489: “一切皆插件” 架构演进 (RFC)**
    *   **描述：** 提议将 Integrations 和 Plugins 概念统一为单一插件目录，涵盖通道、AI 提供商、工具等。这是长期架构方向的关键讨论。
    *   **热度：** 高（长期活跃，最近更新于昨日）。
    *   **链接：** [Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)

*   **Issue #9357: Runtime 测试 Flakiness (P1)**
    *   **描述：** `cargo test` 在 master 分支上 19/20 次失败，涉及全局互斥锁污染问题。这阻碍了 CI 的稳定性和新功能的合入。
    *   **热度：** 高（P1 优先级，影响开发进度）。
    *   **链接：** [Issue #9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)

*   **Issue #9330: AI 辅助 PR 预审查 (RFC)**
    *   **描述：** 提议利用现有 CI 结果触发 AI 辅助的初始审查，以提高人工审查效率。
    *   **热度：** 中（反映社区对提升工程效能的关注）。
    *   **链接：** [Issue #9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列，部分已有对应 PR：

| 严重等级 | Issue ID | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **Critical/High** | #9348 | WhatsApp Web 安全策略失效，默认全开 | Open (Fix: PR #9354) |
| **High** | #9328 | 可验证意图 (VI) 未验证凭证链 | Open |
| **High** | #9357 | Runtime 测试高频失败，互斥锁污染 | Open |
| **High** | #9340 | CLI Cron 任务输出被丢弃 (`delivery=None`) | Open |
| **High** | #9374 | `agent::run` 生命周期 bracket 非 drop-safe，导致资源泄漏 | Open |
| **High** | #9373 | Peer-agent 交付未记录成本，预算控制失效 | Open |
| Medium | #9285 | `set_prop` 掩码无效值，错误提示不清晰 | Closed |
| Medium | #9239 | Config patch JSON 模式在某些失败路径下输出明文错误 | Open |
| Medium | #9366 | WhatsApp Web 忽略 `approval_timeout_secs` 配置 | Open (Split from #9348) |
| Medium | #9363 | 本地化界面中 Config 元数据仍显示英文 | Open |

**分析：**
*   **安全性：** WhatsApp 相关配置 Bug (#9348, #9366) 是今日最大隐患，可能导致未经授权的聊天访问。
*   **稳定性：** 测试 Flakiness (#9357) 和运行时资源泄漏 (#9374) 是影响开发稳定性的主要因素。
*   **功能缺陷：** Cron 输出丢失 (#9340) 和成本追踪缺失 (#9373) 影响了自动化和计费的可信度。

## 6. 功能请求与路线图信号
*   **统一插件目录 (Issue #6489)：** 社区强烈呼吁简化集成复杂性，未来版本可能向“单一插件源”架构迈进。
*   **AI 辅助审查 (Issue #9330)：** 反映团队希望利用 AI 提升 Code Review 质量，可能纳入后续 DevOps 改进计划。
*   **Atlas Cloud 提供商支持 (PR #9200)：** 新增对 Atlas Cloud 模型提供商的支持，扩展了生态兼容性。
*   **Matrix 单消息草稿 (PR #8443)：** 改进 Matrix 通道的用户体验，减少消息刷屏，提升阅读体验。
*   **Shell Cron 原始输出格式 (PR #8438)：** 提供 `shell_output_format` 配置，允许更灵活的 Cron 任务结果处理。

## 7. 用户反馈摘要
*   **痛点：**
    *   **配置陷阱：** 用户抱怨 WhatsApp Web 的配置看似安全实则开放，缺乏明确的警告机制（Issue #9348）。
    *   **调试困难：** Runtime 测试的不确定性使得本地开发体验糟糕，开发者难以信任 CI 结果（Issue #9357）。
    *   **可见性缺失：** Cron 任务成功执行但无输出反馈，导致运维人员无法确认任务实际效果（Issue #9340）。
*   **满意点：**
    *   **快速响应：** 针对 npm 审计失败的依赖更新（PR #9270）和 WhatsApp 配置警告 PR（PR #9354）显示出维护者对安全问题的快速响应能力。
    *   **架构透明：** 关于“一切皆插件”的 RFC 讨论保持了良好的透明度，让用户理解长期技术方向。

## 8. 待处理积压
建议维护者优先关注以下长期未解决或高优先级的积压项：

1.  **Issue #9357:** Runtime 测试 Flakiness。这是阻塞 CI 信任度的关键问题，需尽快定位互斥锁污染根源。
2.  **Issue #9348 & #9366:** WhatsApp 安全配置 Bug。虽然已有 PR #9354 试图缓解，但根本的逻辑缺陷（business mode 下的行为差异）需要彻底修复以防止安全事件。
3.  **Issue #7130:** 禁止 `unsafe_code`。长期存在的代码质量倡议，仅允许 `aardvark-sys` 使用 unsafe，有助于提升 Rust 代码库的整体安全性。
4.  **Issue #8583:** 通道/源共享边界清理。这是一个跟踪器 Issue，协调架构清理工作，需持续跟进其子任务的完成情况。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*