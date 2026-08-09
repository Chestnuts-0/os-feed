# OpenClaw 生态日报 2026-07-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-10 01:54 UTC

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
**日期：** 2026-07-10
**数据来源：** GitHub openclaw/openclaw

## 1. 今日速览
2026年7月10日，OpenClaw 项目保持极高的社区活跃度，过去24小时内共产生 1000 次 Issue/PR 更新（500 Issues + 500 PRs）。虽然今日无新版本发布，但核心维护者（如 `steipete`）与贡献者在基础设施、会话状态管理及渠道兼容性方面进行了密集修复。当前项目面临的主要挑战集中在**长会话稳定性**、**子代理执行可靠性**以及**多渠道（WhatsApp/Discord/Telegram）的消息路由与状态同步**问题上。整体代码库处于高频迭代期，大量回归测试与性能优化 PR 正在排队等待合并，显示出维护团队正致力于解决早期版本遗留的技术债务。

## 2. 版本发布
*   **无新版本发布。**
*   *注：今日主要活动为针对特定 Bug 的补丁修复及内部重构，未见完整 Release 标记。*

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在提升系统稳定性和修复高危回归问题上：

*   **[codex] 修复原生子代理完成重试上限 (#97715)**
    *   **状态：** Closed/Merged
    *   **影响：** 解决了子代理在父代理非持久化交接时无限重试的问题，防止资源耗尽和会话卡死。这是针对高优先级稳定性问题的关键修复。
*   **fix(doctor): 抑制干净状态的修复尾部信息 (#103233)**
    *   **状态：** Closed/Merged
    *   **影响：** 优化了 `openclaw doctor` 命令的输出体验，减少误报噪音，提升运维调试效率。
*   **fix(ci): 验证推送超时后的性能报告 (#103237)**
    *   **状态：** Closed/Merged
    *   **影响：** 修复了 CI/CD 流水线中因客户端超时导致的假阴性失败，确保发布流程的可靠性。
*   **fix(config): 拒绝零值 cron.sessionRetention 以防止静默数据丢失 (#102619)**
    *   **状态：** Open (Pending Review)
    *   **影响：** 这是一个重要的防御性编程修复，防止用户配置错误导致会话历史被意外清空。

**整体推进评估：** 项目正从“功能扩张”转向“稳定性加固”。今日的高价值 PR 多涉及底层会话管理、CI 可靠性和配置校验，表明维护团队正在系统性清理早期版本中积累的边缘情况 Bug。

## 4. 社区热点
以下是基于评论数和关注度筛选出的热门讨论：

*   **🔥 [Bug] 子代理完成结果静默丢失 (#44925)**
    *   **链接:** [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
    *   **热度：** 21 条评论，🦞 Diamond Lobster 评级
    *   **分析：** 用户报告在 Telegram 论坛模式下，子代理任务因超时等原因失败时，结果既无通知也无自动重启，导致工作流中断。这触及了分布式代理协作的核心信任问题，社区对此高度关注。
*   **🔥 [Bug] 工具输出渲染为图片附件导致 Agent 不可读 (#99241)**
    *   **链接:** [Issue #99241](https://github.com/openclaw/openclaw/issues/99241)
    *   **热度：** 15 条评论
    *   **分析：** 长期运行的 ANSI-heavy 工作流中，工具 stdout 被错误地转换为图像占位符，导致 Agent 无法读取文本证据。这与 #100782 类似，反映了多模态处理管道在复杂场景下的脆弱性。
*   **🔥 [Security] gh-issues 技能注入未 sanitization 的 Issue Body (#45740)**
    *   **链接:** [Issue #45740](https://github.com/openclaw/openclaw/issues/45740)
    *   **热度：** 14 条评论，🦞 Diamond Lobster 评级
    *   **分析：** 安全敏感问题。`gh-issues` 技能直接将 GitHub Issue 正文注入子代理 Prompt，存在提示词注入风险。社区呼吁进行隔离和清洗。
*   **🔥 [Bug] 会话压缩超时导致无限重复消息发送 (#43661)**
    *   **链接:** [Issue #43661](https://github.com/openclaw/openclaw/issues/43661)
    *   **热度：** 7 条评论 (Closed)，但曾引发广泛讨论
    *   **分析：** 这是一个严重的回归问题，导致会话挂起并反复向用户发送相同消息。虽已关闭，但其反映的压缩逻辑缺陷可能在其他场景复现。

## 5. Bug 与稳定性
今日报告的 Bug 多集中于**会话状态管理**和**渠道集成**，按严重程度排列：

| 严重等级 | 问题描述 | Issue ID | 关联 PR/状态 |
| :--- | :--- | :--- | :--- |
| **P0/P1** | **Gateway 内存泄漏**：4天从 389MB 涨至 14.7GB (#54155) | [Issue #54155](https://github.com/openclaw/openclaw/issues/54155) | 需长期监控，暂无直接 Fix PR |
| **P1** | **WhatsApp 会话停滞**：长时间模型调用导致会话进入 `stalled_agent_run` (#84569) | [Issue #84569](https://github.com/openclaw/openclaw/issues/84569) | 影响长文本/思考模式用户 |
| **P1** | **Cron 会话幻觉输出**：工具失败时 LLM 伪造结果而非报错 (#49876) | [Issue #49876](https://github.com/openclaw/openclaw/issues/49876) | 信任与安全核心问题 |
| **P1** | **子代理模型路由忽略参数**：默认回退到 deepseek (#95436) | [Issue #95436](https://github.com/openclaw/openclaw/issues/95436) | **PR #95436 已提交修复** |
| **P1** | **Playwright 断言错误导致 Gateway 崩溃** (#45224) | [Issue #45224](https://github.com/openclaw/openclaw/issues/45224) | 浏览器自动化用户痛点 |
| **P2** | **沙箱容器无权限退出**：`no-new-privileges` 导致 exec 失败 (#43996) | [Issue #43996](https://github.com/openclaw/openclaw/issues/43996) | 安全配置与功能冲突 |
| **P2** | **Codex OAuth 刷新超时**：心跳检测失败 (#89278) | [Issue #89278](https://github.com/openclaw/openclaw/issues/89278) | 认证稳定性问题 |
| **P2** | **工具参数静默丢弃**：长对话后 write/exec 参数为空 (#53408) | [Issue #53408](https://github.com/openclaw/openclaw/issues/53408) | 上下文窗口管理缺陷 |

**稳定性总结：** 内存泄漏和长会话参数丢失是两大顽疾，直接影响生产环境的可用性。OAuth 刷新超时和沙箱权限问题则反映了集成复杂度的增加。

## 6. 功能请求与路线图信号
*   **📢 预压缩记忆冲刷 (Pre-reset agentic memory flush) (#45608)**
    *   **链接:** [Issue #45608](https://github.com/openclaw/openclaw/issues/45608)
    *   **信号：** 用户希望在 `/new` 或 `/reset` 前执行静默记忆整理，以保留重要上下文。这与当前的 Compaction 机制形成互补，可能是未来内存管理模块的重要增强方向。
*   **📢 支持 YAML 配置文件格式 (#45758)**
    *   **链接:** [Issue #45758](https://github.com/openclaw/openclaw/issues/45758)
    *   **信号：** 提高配置可读性。虽然目前仅标记为 P3，但考虑到 DevOps 趋势，若社区呼声持续高涨，可能会在后续版本中作为可选支持引入。
*   **📢 持久化任务状态表面 (Persistent task-status surface) (#52640)**
    *   **链接:** [Issue #52640](https://github.com/openclaw/openclaw/issues/52640)
    *   **信号：** 针对长运行通道（如 Discord）的状态反馈需求。当前打字指示器和部分流式更新不足以提供权威状态，此功能将提升用户体验的一致性。
*   **📢 系统事件优先级/绕过队列模式 (#50739)**
    *   **链接:** [Issue #50739](https://github.com/openclaw/openclaw/issues/50739)
    *   **信号：** 确保系统告警在高负载下不被阻塞。这对于生产级部署至关重要，可能推动内部消息队列优先级的重构。

## 7. 用户反馈摘要
*   **痛点：**
    *   **“静默失败”令人沮丧：** 多个 Issue (#44925, #49876, #53408) 指出，当子代理或长任务失败时，系统缺乏明确的错误提示或重试机制，导致用户难以排查问题。
    *   **配置复杂性：** 用户抱怨 `XDG_CONFIG_HOME` 变量处理不当 (#53628)、`OPENCLAW_HOME` 导致嵌套目录 (#45765)，反映出路径解析逻辑存在缺陷。
    *   **渠道特定问题：** WhatsApp 和 Discord 用户频繁报告消息延迟、路由错误或状态不同步 (#84569, #44502, #100782)，表明多渠道抽象层仍存在边界情况。
*   **满意点：**
    *   **快速响应：** 对于高可见度的 Bug（如 #97715 的子代理重试），社区贡献者能迅速提供修复 PR。
    *   **诊断工具改进：** `openclaw doctor` 和成本仪表盘 (#46252) 的反馈显示用户重视可观测性，尽管目前仍有改进空间（如成本统计遗漏重置文件）。

## 8. 待处理积压
以下 Issue 和 PR 长期未得到彻底解决或需要维护者重点关注：

*   **🚨 Gateway 内存泄漏 (#54155)**
    *   **状态：** Open, 8 条评论
    *   **风险：** 高。导致服务在数天内耗尽资源并崩溃。需优先定位泄露源（可能是会话累积或插件缓存）。
*   **🚨 沙箱容器权限冲突 (#43996)**
    *   **状态：** Open, 7 条评论
    *   **风险：** 高。影响所有启用沙箱的用户，特别是使用 `no-new-privileges` 的安全敏感部署。
*   **⚠️ 子代理完成静默丢失 (#44925)**
    *   **状态：** Open, 21 条评论
    *   **风险：** 高。涉及核心代理编排逻辑，需明确重试策略和错误传播机制。
*   **⚠️ 安全：未 sanitization 的 Issue Body 注入 (#45740)**
    *   **状态：** Open, 14 条评论
    *   **风险：** 中/高。需尽快实施输入清洗或隔离，防止提示词注入攻击。
*   **⏳ PR #102619 (Config Validation)**
    *   **状态：** Open, 等待 Proof
    *   **建议：** 建议维护者快速审查并合并，此类防御性修复成本低且收益高。

---
*报告生成时间：2026-07-10*
*分析师：Agnes-2.0-Flash*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告
**日期：** 2026-07-10
**分析师：** Agnes-2.0-Flash (Sapiens AI)

## 1. 生态全景
2026年中旬，个人 AI 助手开源生态已从“功能原型验证”全面转入“生产级稳定性与安全性攻坚”阶段。OpenClaw 凭借其庞大的社区基数和复杂的代理编排能力，确立了行业基准，但同时也面临着严重的技术债务和安全漏洞挑战。与此同时，NanoBot、Hermes Agent 等项目在垂直领域（如 MCP 集成、企业级部署）展现出更强的架构严谨性，而 LobsterAI 和 CoPaw 则聚焦于提升 C 端用户体验和交互细节。整体而言，**“多通道稳定性”、“内存/资源泄漏治理”以及“安全合规（SSRF/提示词注入）”**已成为全行业的共性痛点。

## 2. 各项目活跃度对比

| 项目名称 | 日均 Issue | 日均 PR | 版本发布 | 健康度评估 | 核心关注点 |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | ⚠️ **高负荷/高风险** | 长会话稳定性、子代理可靠性、内存泄漏 |
| **CoPaw** | 35 | 50 | v2.0.0-beta.5 | ⚠️ **激进迭代** | 上下文压缩 Bug、沙箱机制争议、前端性能 |
| **NanoClaw** | 9 | 17 | 无 | ✅ **稳定修复** | MCP 安全审批、Telegram 路由、审计日志 |
| **IronClaw** | 32 | 50 | 无 | ✅ **重构期** | Slack 集成修复、Reborn 架构清理 |
| **Hermes Agent** | 50 | 50 | 无 | ✅ **稳步优化** | 凭证轮换、网关稳定性、远程执行 |
| **LobsterAI** | 7 | 14 | 无 | ✅ **体验打磨** | UI 交互细节、时间戳、历史回溯 |
| **NanoBot** | 22 | 22 | 无 | ✅ **安全加固** | MCP 连接、WebUI 重构、执行环境隔离 |
| **PicoClaw** | 3 | 16 | 无 | 🟡 **维护期** | 配置迁移、Matrix 稳定性、依赖更新 |
| **ZeroClaw** | 36 | 50 | 无 | ✅ **安全强化** | SSRF 修复、MCP 进程泄漏、多用户隔离 |
| **Moltis** | 0 | 1 | 无 | 🟢 **低频维护** | 新模型适配 (GPT-5.6) |
| **NullClaw** | 0 | 0 | 无 | 🔴 **停滞** | 无活动 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 **停滞** | 无活动 |
| **ZeptoClaw**| 0 | 0 | 无 | 🔴 **停滞** | 无活动 |

## 3. OpenClaw 在生态中的定位

*   **市场地位：** **事实上的行业标准制定者与流量中心**。OpenClaw 以千级的日活跃贡献量遥遥领先，其代码库规模和社区讨论密度构成了生态的“引力场”。
*   **优势：** 拥有最丰富的渠道集成（WhatsApp/Discord/Telegram 等）和最复杂的代理编排逻辑（子代理、Cron 任务）。其社区反馈直接反映了最广泛的真实生产场景。
*   **劣势/风险：** “大而不倒”的副作用明显。由于早期快速扩张，积累了大量技术债务（内存泄漏、会话状态同步问题）。今日数据显示，其核心挑战已从“功能实现”转变为“系统健壮性”，若不能有效治理，可能导致用户信任流失。
*   **对比：** 相比之下，NanoBot 和 Hermes Agent 在架构设计上更倾向于模块化和安全隔离，适合对稳定性要求更高的小团队或企业级部署；而 OpenClaw 更适合追求极致灵活性和功能丰富度的重度用户。

## 4. 共同关注的技术方向

1.  **MCP (Model Context Protocol) 的稳定性与安全**
    *   **涉及项目：** NanoBot, NanoClaw, ZeroClaw, CoPaw
    *   **具体诉求：** NanoBot 修复 MCP 网关崩溃；NanoClaw 关注 MCP 服务器审批流程的安全走私；ZeroClaw 修复 MCP 工具过滤器失效和进程泄漏。
    *   **趋势：** MCP 已成为智能体集成的核心标准，但当前的实现普遍存在资源管理不当（泄漏）和安全校验缺失的问题。

2.  **长会话管理与上下文压缩 (Context Compression)**
    *   **涉及项目：** OpenClaw, CoPaw, ZeroClaw
    *   **具体诉求：** OpenClaw 遭遇会话压缩超时导致无限消息发送；CoPaw 的 v2.0 版本出现工具调用结构在压缩中丢失；ZeroClaw 用户反馈长上下文导致幻觉。
    *   **趋势：** 随着模型上下文窗口增大，如何在有限资源下高效管理长历史、防止结构化数据（如 Tool Calls）在压缩中损坏，是下一代智能体的关键技术瓶颈。

3.  **多渠道集成的“静默失败”问题**
    *   **涉及项目：** OpenClaw, NanoBot, PicoClaw, ZeroClaw
    *   **具体诉求：** OpenClaw 子代理结果静默丢失；NanoBot WhatsApp 群组路由错误；PicoClaw Matrix 通道断连无自愈；ZeroClaw 通道转换忽略配置。
    *   **趋势：** 用户不再满足于“能连接”，而是要求“可观测”和“可恢复”。缺乏明确的错误提示和自动重试机制是导致用户挫败感的主要原因。

4.  **执行环境的安全加固**
    *   **涉及项目：** NanoBot, NanoClaw, ZeroClaw, LobsterAI
    *   **具体诉求：** NanoBot 修复子进程僵尸残留和符号链接逃逸；NanoClaw 修复 SSRF 漏洞；ZeroClaw 强化 SSRF 防护；LobsterAI 清洗 Null Byte。
    *   **趋势：** 随着 Agent 获得执行代码和访问网络的权限，安全边界模糊化。防御性编程（输入清洗、权限隔离、最小权限原则）成为项目维护的重中之重。

## 5. 差异化定位分析

*   **OpenClaw vs. NanoBot/Hermes Agent：**
    *   **OpenClaw** 是“全能型选手”，强调功能的广度和社区的自由度，允许用户深度定制代理行为，但牺牲了部分开箱即用的稳定性。
    *   **NanoBot** 和 **Hermes Agent** 更偏向“工程化选手”，强调模块化、配置的可维护性和执行环境的安全性。NanoBot 特别注重 MCP 连接的稳健性，Hermes 则在多租户和凭证管理方面表现更优。

*   **CoPaw vs. LobsterAI：**
    *   **CoPaw** 定位为“开发者友好型框架”，提供强大的沙箱控制和子代理生命周期管理，适合需要构建复杂自动化工作流的开发者，但学习曲线陡峭。
    *   **LobsterAI** 定位为“C 端体验优化器”，聚焦于 Cowork 界面的交互细节（时间戳、历史回溯、Markdown 导出），旨在让 AI 助手更像传统的即时通讯软件，降低普通用户的使用门槛。

*   **NanoClaw vs. ZeroClaw：**
    *   **NanoClaw** 强调“企业级合规”，通过审计日志、SIEM 格式输出和严格的 MCP 审批流程，吸引对数据安全敏感的企业用户。
    *   **ZeroClaw** 强调“本地优先与多用户隔离”，通过 Work Lanes 和本地模型支持，吸引注重隐私和边缘计算场景的个人及小型团队用户。

## 6. 社区热度与成熟度

*   **快速迭代/激进期 (High Velocity, High Risk)：**
    *   **OpenClaw, CoPaw, IronClaw**
    *   特征：PR/Issue 数量巨大，版本发布频繁（尤其是 CoPaw 的 Beta 版），大量修复集中在底层架构和回归 Bug。适合愿意承担不稳定风险以换取最新功能的早期采用者。

*   **稳健优化/质量巩固期 (Steady, Focus on Stability)：**
    *   **NanoBot, Hermes Agent, NanoClaw, ZeroClaw**
    *   特征：活跃度适中，PR 多针对具体 Bug 修复、安全补丁和配置优化。社区反馈更侧重于“能不能稳定跑起来”而非“有什么新功能”。适合生产环境部署。

*   **体验打磨/细分领域期 (Niche, UX Focused)：**
    *   **LobsterAI, PicoClaw**
    *   特征：LobsterAI 专注于 UI/UX 细节；PicoClaw 专注于嵌入式/边缘设备（Raspberry Pi）的兼容性和依赖管理。

*   **低频维护/停滞期 (Low Activity)：**
    *   **Moltis, NullClaw, TinyClaw, ZeptoClaw**
    *   特征：Moltis 仅跟进新模型支持；其余三个项目今日无活动，可能已进入维护尾声或转型期。

## 7. 值得关注的趋势信号

1.  **“静默失败”是用户流失的主因：**
    多个项目（OpenClaw, NanoBot, PicoClaw）的用户反馈都指向同一个痛点：当 Agent 失败时，系统缺乏明确的错误告知和自动恢复机制。
    *   *建议：* 开发者应优先实现“失败可观测性”，确保每个子代理、每次工具调用都有明确的日志记录和错误回调，避免用户陷入“黑盒”焦虑。

2.  **安全从左移：配置即安全：**
    NanoClaw 的 MCP 审批漏洞和 ZeroClaw 的 SSRF 修复表明，安全问题往往隐藏在配置和默认行为中。
    *   *建议：* 在架构设计初期引入“安全默认值”（Secure by Default），并对所有外部输入（包括 Issue Body、URL、文件路径）进行严格的 Sanitization。

3.  **上下文压缩的结构化保真度：**
    CoPaw 和 OpenClaw 的案例显示，简单的文本截断会破坏 Tool Call 等结构化数据。
    *   *建议：* 未来的上下文管理方案需要从“文本压缩”转向“语义摘要+结构保留”，确保 Agent 在长对话中仍能准确调用工具。

4.  **多通道抽象层的脆弱性：**
    WhatsApp、Telegram、Matrix 等渠道的特定 Bug 频发，表明通用的渠道抽象层难以覆盖所有边缘情况。
    *   *建议：* 建立更完善的渠道回归测试套件，并考虑为每个渠道提供独立的“健康检查”探针，以便快速定位是网络问题、API 变更还是代码逻辑错误。

5.  **企业级需求的崛起：**
    NanoClaw 的审计日志和 Hermes Agent 的多租户支持，反映了个人 AI 助手正向小型团队和企业内部工具渗透。
    *   *建议：* 关注 RBAC（基于角色的访问控制）、操作审计、私有化部署支持等企业级特性，这将是区别于消费级产品的关键壁垒。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-10
**数据来源：** GitHub HKUDS/nanobot

## 1. 今日速览
NanoBot 在 2026-07-10 保持高活跃度，过去24小时内产生22条 Issue 和22条 PR 更新。项目核心焦点集中在 **MCP 连接稳定性修复**、**WebUI 体验优化** 以及 **执行环境安全性加固**。虽然无新版本发布，但多个 P1 级修复 PR 已提交并处于审查阶段，显示出开发团队正在积极解决近期引入的回归问题（Regression）。社区对多租户网关、任务特定模型配置等功能的需求依然强烈，但当前资源主要倾斜于底层架构的稳定性和安全性重构。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日重点推进了底层架构的重构与稳定性修复，主要体现在以下方面：

*   **MCP 连接稳定性修复 (P1)**：
    *   **#4843** (flyzstu) 修复了 MCP 重连时的网关崩溃问题，通过延迟清理过期的 `AsyncExitStack` 解决了因会话过期导致的工具注销异常。
    *   **#4863** (SIDD-KIDD) 同步了 `package-lock.json`，解决了 Docker 构建失败的问题，确保了 CI/CD 流程的稳定性。
*   **WebUI 与运行时重构**：
    *   **#4769** (chengyongru) 集中化了 WebUI 的原生运行时访问，统一了引擎重启和诊断接口。
    *   **#4696** (chengyongru) 优化了 WebUI 的流式 Markdown 渲染，增加了缓冲调度以提供更自然的阅读体验。
*   **执行环境与安全性增强**：
    *   **#4862** (yu-xin-c) 隔离了执行会话管理器，防止不同 AgentLoop 间的会话泄露。
    *   **#4840** (macroadster) 修复了子进程僵尸进程清理问题，确保在所有退出路径上都能正确回收资源。
    *   **#4629** (yu-xin-c) 阻止了通过相对符号链接逃逸工作区的风险，增强了文件系统安全。
*   **新功能探索**：
    *   **#4861** (MVS-source) 添加了 Eden AI 作为 OpenAI 兼容提供商，扩展了模型选择范围。
    *   **#4855** (Re-bin) 引入了引导式通道设置流程，改善了新用户配置飞书等复杂通道的体验。

## 4. 社区热点
以下是今日讨论最激烈或关注度最高的议题：

*   **[Bug] WhatsApp 群组消息路由错误**
    *   **Issue #4823**: 用户报告在 v0.2.2 之后，WhatsApp 群组响应会发送到所有加入的群组，导致严重的使用混乱。这是一个明显的回归问题，需紧急排查。
    *   [链接](https://github.com/HKUDS/nanobot/issues/4823)
*   **[Feature] 任务特定模型配置**
    *   **Issue #912**: 用户强烈建议支持为对话、工具使用、浏览器操作等不同任务类型配置不同的 LLM 模型，以优化成本和性能。该 Issue 获得 3 个赞，显示社区对此功能的期待。
    *   [链接](https://github.com/HKUDS/nanobot/issues/912)
*   **[Bug] WebUI 命令缺失**
    *   **Issue #4860**: 新安装用户反馈 `nanobot onboard` 和 `nanobot webui` 命令不存在，尽管 `-h` 帮助列表中有提及。这反映了文档与代码实现之间的脱节。
    *   [链接](https://github.com/HKUDS/nanobot/issues/4860)
*   **[Feature] 多租户网关**
    *   **Issue #936**: 提出单实例管理多个 Agent 的多租户网关方案，以降低资源消耗和管理复杂度。
    *   [链接](https://github.com/HKUDS/nanobot/issues/936)

## 5. Bug 与稳定性
今日报告了多个严重程度的 Bug，部分已有修复 PR：

| 严重等级 | 描述 | 关联 Issue | 关联 PR / 状态 |
| :--- | :--- | :--- | :--- |
| **P1 (高)** | **MCP 网关崩溃**：重连时因栈清理不当导致崩溃。 | - | **PR #4843** (已提交，待合并) |
| **P1 (高)** | **WebUI 构建失败**：`package-lock.json` 不同步导致 Docker 构建中断。 | - | **PR #4863** (已提交，待合并) |
| **P1 (高)** | **子进程僵尸残留**：子进程退出路径未正确清理，导致僵尸进程。 | - | **PR #4840** (已提交，待合并) |
| **P1 (高)** | **BaseException 误捕**：工具执行中捕获 `KeyboardInterrupt` 等导致异常被吞没。 | - | **PR #4816** (已提交，有冲突) |
| **P1 (高)** | **Endless Loop**：`complete_goal` 因参数解析错误陷入死循环。 | #4864 | 暂无 PR |
| **P1 (高)** | **WhatsApp 群组路由失效**：v0.2.2 后群组消息广播至所有群组。 | #4823 | 暂无 PR |
| **P2 (中)** | **Matrix 图片源丢失**：Mistune 更新导致 `mxc://` 链接被重写。 | - | **PR #4859** (已关闭/Merged?) |
| **P2 (中)** | **Red Hat 证书问题**：沙箱内 Node.js 无法获取系统 CA 证书。 | - | **PR #4845** (已提交，待合并) |
| **P2 (中)** | **Onboard/Webui 命令缺失**：文档命令与实际可执行命令不符。 | #4860 | 暂无 PR |

## 6. 功能请求与路线图信号
*   **动态工具提供者生命周期重构**：
    *   **Issue #4858** 指出 MCP 逻辑直接耦合在 `AgentLoop` 中，提议将其剥离。这与 **PR #4844** (将长期目标工具 gated 在运行时模式后) 相呼应，表明项目正朝着更模块化、更可控的工具执行架构演进。
*   **零 Token 消息路由**：
    *   **Issue #990** 请求添加 Pre-handler Hook，允许特定模式（如 `#日记`）绕过 LLM 处理。这对于降低运营成本至关重要，若采纳，将显著提升 Nanobot 的经济性。
*   **原生沙箱接口**：
    *   **Issue #931** 提议引入 `SandboxDriver` 以隔离不受信任的插件执行。随着插件生态扩展，这是保障平台安全的必要步骤，可能与 **PR #4862** (执行会话隔离) 形成互补。
*   **SimpleX Chat 支持**：
    *   **Issue #240** 持续请求支持去中心化加密聊天协议 SimpleX Chat，反映了对隐私敏感用户的长期需求。

## 7. 用户反馈摘要
*   **痛点**：
    *   **配置与文档不一致**：用户普遍反映 `onboard` 和 `webui` 命令无法直接使用，且 WhatsApp 等渠道在更新后出现行为异常，降低了新手上手体验和老用户信任度。
    *   **幻觉与工具调用泄露**：Issue #954 和 #937 指出，内部工具调用（如 `exec`, `read_file`）意外泄露到用户聊天界面，以及 `exec` 工具产生的幻觉导致用户终止评估。这表明 Agent 的“思考过程”可视化需要更严格的过滤。
    *   **资源管理**：Telegram/Discord 媒体文件无限增长（Issue #896）和 Cron 作业自动重置（Issue #1100）是长期存在的运维痛点。
*   **满意点**：
    *   用户对 **Eden AI** 等新提供商的支持表示欢迎（PR #4861），这扩大了模型选择的灵活性。
    *   **引导式设置**（PR #4855）被视为改善用户体验的重要一步，特别是对于飞书等复杂集成的通道。

## 8. 待处理积压
以下 Issue 长期未得到实质性解决或评论较少，建议维护者关注：

*   **[Stale] Telegram/Discord 媒体文件清理**
    *   **Issue #896**: 自 2026-02-20 以来未解决，导致磁盘空间无限增长。这是一个基础但关键的稳定性问题。
    *   [链接](https://github.com/HKUDS/nanobot/issues/896)
*   **[Stale] 内置技能在 restrictToWorkspace 下失效**
    *   **Issue #1138**: 用户报告当启用工作区限制时，内置技能文件因路径问题无法加载。
    *   [链接](https://github.com/HKUDS/nanobot/issues/1138)
*   **[Stale] 远程 MCP URL 超时**
    *   **Issue #935**: 报告 Streamable HTTP MCP 服务器连接超时并抛出 `CancelledError`。虽然 PR #4843 修复了重连崩溃，但未明确解决超时问题。
    *   [链接](https://github.com/HKUDS/nanobot/issues/935)
*   **[Stale] 桥接链接错误 (WhatsApp)**
    *   **Issue #1159**: WebSocket 握手超时导致连接失败，可能与环境依赖或网络配置有关。
    *   [链接](https://github.com/HKUDS/nanobot/issues/1159)

---
*报告生成时间：2026-07-10 | 分析师：Agnes-2.0-Flash*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-10
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
2026年7月10日，Hermes Agent 项目保持高活跃度，过去24小时内产生50条Issue更新和50条PR更新，显示社区参与度高且开发迭代迅速。今日无新版本发布，但核心基础设施层面进行了多项关键修复，特别是针对网关稳定性、凭证轮换逻辑以及桌面端构建流程的优化。社区对远程执行、OIDC注销及多平台适配（如飞书、QQ、WeCom）的关注度显著上升，反映出用户对生产环境可用性和安全性的强烈需求。整体项目健康度良好，技术债务正在通过密集的PR进行偿还。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭的PR主要集中在底层稳定性和兼容性修复，推动了项目在“可靠性”层面的进步：
*   **网关重连契约强化 (PR #61767):** 修复了QQ Bot和WeCom回调在网关重启后无法通过重连监听器恢复的问题，增加了全局合同测试以防止签名漂移，提升了多平台适配的鲁棒性。
*   **飞书WebSocket支持 (PR #61770):** 恢复了飞书群@提及事件在WebSocket通道上的接收能力，解决了因SDK版本不匹配导致的功能失效。
*   **HTML导出安全性加固 (PR #61769):** 完成了会话导出的XSS防护，转义了角色徽章和CSS类名，并引入了基于nonce的CSP策略，显著提升了数据导出的安全性。
*   **技能安装完整性 (PR #61771):** 修复了第三方技能安装时依赖文件丢失和扫描溯源失败的问题，确保技能包的可复现性。
*   **macOS签名保留 (PR #61763):** 解决了Electron应用重建导致macOS TCC权限（如完全磁盘访问）失效的问题，改善了桌面端用户体验。

## 4. 社区热点
以下Issue/PR引发了较多讨论，反映了用户的核心关切：

*   **[Feature] 支持远程Hermes Agent配合本地工具执行 (Issue #18715)**
    *   **热度:** 20 👍, 8 评论
    *   **链接:** [NousResearch/hermes-agent Issue #18715](https://github.com/NousResearch/hermes-agent/issues/18715)
    *   **分析:** 用户希望将计算密集型或配置复杂的Agent服务部署在远程服务器，而将工具调用限制在本地安全环境中。这是典型的“边缘-云”混合架构需求，对于企业级部署场景极具价值。

*   **[Feature] Dashboard登出应重定向到IdP结束会话端点 (Issue #35410)**
    *   **热度:** 1 👍, 3 评论
    *   **链接:** [NousResearch/hermes-agent Issue #35410](https://github.com/NousResearch/hermes-agent/issues/35410)
    *   **分析:** 当前登出仅清除本地Cookie，未通知身份提供商（IdP），导致会话残留。这与Issue #61243相关，后者已被标记为重复，表明社区对OIDC标准合规性的重视。

*   **[Bug] Z.AI提供商密钥池级联标记耗尽 (Issue #61487)**
    *   **热度:** 0 👍, 5 评论
    *   **链接:** [NousResearch/hermes-agent Issue #61487](https://github.com/NousResearch/hermes-agent/issues/61487)
    *   **分析:** 单个密钥达到配额会导致整个密钥池被错误标记为耗尽，严重影响可用性。这是一个严重的资源调度Bug，虽已关闭，但反映出多密钥池管理逻辑的脆弱性。

*   **[Bug] Gateway Session Hygiene 导致静默数据丢失 (Issue #61145)**
    *   **热度:** 0 👍, 1 评论
    *   **链接:** [NousResearch/hermes-agent Issue #61145](https://github.com/NousResearch/hermes-agent/issues/61145)
    *   **分析:** 会话压缩机制直接删除历史记录而非软归档，造成不可逆的数据损失。此类P1级Bug对长时运行用户影响巨大。

## 5. Bug 与稳定性
今日报告了多个严重级别的Bug，部分已有PR跟进：

*   **P1 - 网关配置反序列化崩溃 (Issue #40834, #58277):**
    *   描述：错误的YAML格式（如空键值或标量嵌套错误）导致Gateway启动即崩溃。
    *   状态：Issue #40834 和 #58277 均已关闭，暗示可能已在近期版本中修复或作为已知限制处理。
    *   风险：影响系统可用性，需严格校验配置文件。

*   **P2 - 凭证轮换与模型切换Bug (Issue #61296, #61712, #61451):**
    *   **Issue #61296:** `switch_model` 信任过时的 `base_url`，导致跨提供商密钥误用。
    *   **Issue #61712:** `restore_primary_runtime()` 缺乏MoA分支处理，导致回退后状态损坏。
    *   **Issue #61451:** Anthropic单模型429错误导致整张凭证被标记耗尽，阻塞其他模型。
    *   **关联PR:** PR #61754 和 #61757 专门修复了Copilot凭证轮换中的类似逻辑缺陷，表明团队正在系统性重构认证模块。

*   **P2 - 测试泄漏与数据竞争 (Issue #61673, #61768):**
    *   **Issue #61673:** Cron测试套件写入用户真实目录，导致测试间干扰。
    *   **Issue #61768:** 桌面端Cron线程存在数据竞争，可能导致不同Profile间的jobs.json相互覆盖。
    *   风险：极高。前者影响开发者体验，后者直接导致生产环境数据丢失。

*   **P3 - 工具与前端异常 (Issue #61661, #60794, #60583):**
    *   `honcho_conclude` 发送空API Key。
    *   Discord网关SQLite查询阻塞事件循环。
    *   桌面端状态栏Token速率计算不准确。

## 6. 功能请求与路线图信号
*   **自动推理模式 (Issue #40306):** 用户请求类似ChatGPT的自动推理切换，根据问题复杂度动态调整 `reasoning_effort`。目前仅支持手动固定级别。这是一个提升易用性的潜在高优功能。
*   **每Cron任务推理级别覆盖 (Issue #23524):** 允许为定时任务单独指定思考深度，以适应轻量级扫描与复杂分析的不同需求。
*   **桌面版精简安装器 (Issue #61329):** 请求提供仅包含GUI客户端的安装包，以连接远程后端。这符合“Thin Client”趋势，有助于降低边缘设备的部署门槛。
*   **Hindsight多库自动路由 (PR #52987):** 正在开发的记忆提供者功能，支持基于工作区、用户等上下文自动路由记忆检索。这将极大增强Agent的记忆管理能力。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍抱怨凭证池管理的“过于敏感”，单一模型的限流或错误会波及整个凭证组（Issue #61451, #61487）。此外，会话数据的永久丢失（Issue #61145）引发了严重的安全焦虑。
*   **场景：** 大量用户处于混合部署场景，需要本地工具调用与远程Agent结合（Issue #18715），或在非英语环境下使用Google Meet插件（Issue #37781）。
*   **满意度：** 对于桌面端macOS权限保留（PR #61763）和多平台网关稳定性（PR #61767）的快速响应表示认可。但对于Windows桌面构建失败（Issue #61657, #38963）仍有持续抱怨。

## 8. 待处理积压
*   **Issue #61768 [OPEN]:** 桌面端Cron数据竞争导致跨Profile覆盖。这是一个高危Bug，涉及数据一致性，需优先解决。
*   **Issue #61673 [OPEN]:** 测试套件污染用户真实数据。虽然主要影响开发者，但也暴露了测试隔离机制的重大缺陷。
*   **Issue #58572 [OPEN]:** Gateway在Token过期时崩溃且无远程恢复路径。对于无人值守的Headless部署是致命问题。
*   **Issue #60715 [OPEN]:** Nous Portal推理API完全不可达。需确认是临时故障还是长期架构问题。

---
*Generated by Agnes-2.0-Flash*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-07-10
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
2026年7月9日，PicoClaw 项目保持中等活跃度，共有 **16 条 PR** 和 **3 条 Issue** 更新。虽然没有新的官方 Release 发布，但依赖更新（Dependabot）非常频繁，涉及 AWS SDK、GitHub Copilot SDK 及 Go 标准库，显示出项目对供应链安全的重视。代码层面，重点在于修复配置迁移失败、Matrix 连接稳定性以及路由 ID 规范化等底层逻辑问题。整体来看，项目正处于维护关键依赖和修复边缘案例的阶段，核心功能迭代平稳。

## 2. 版本发布
*   **无新版本发布。**
*   当前最新已知版本为 v0.2.9（基于 Issue #3206 上下文）。

## 3. 项目进展
今日有 **4 条 PR 被合并或关闭**（状态显示为 CLOSED），主要涉及依赖升级和特定 Bug 修复，推动了项目的稳定性和兼容性：

*   **依赖更新与修复：**
    *   [#3213] & [#3207]: 合并了 AWS SDK Go V2 Config 的升级（至 v1.32.27）及 GitHub Copilot SDK 的升级（至 v1.0.5）。
    *   [#3226]: 修复了 `write_file` 工具在覆盖文件时的行为逻辑，防止模型被错误引导进行破坏性覆盖（关联 Issue #3150）。
*   **潜在进展（Open 但近期活跃）：**
    *   [#3205]: 支持 9router 网关响应及 Linux ARMv7 构建目标，这对树莓派等嵌入式部署至关重要。
    *   [#3202]: 修复路由 ID 规范化逻辑，确保符合正则表达式约束，提升系统健壮性。

## 4. 社区热点
以下 Issue 和 PR 获得了较多关注或代表了重要的用户需求：

*   **[Feature] QQ 频道流式输出支持 (Issue #3201)**
    *   **链接:** https://github.com/sipeed/picoclaw/issues/3201
    *   **分析:** 用户强烈期望在 QQ 频道实现类似 Telegram 的 Token-by-Token 流式响应。目前仅 Telegram 和 Pico WebSocket 支持 `StreamingCapable`。这是提升用户体验的关键功能，社区呼声较高。
*   **[BUG] Matrix 同步循环无重连逻辑 (Issue #3203)**
    *   **链接:** https://github.com/sipeed/picoclaw/issues/3203
    *   **分析:** 报告了在网络中断或服务端重启后，Matrix 通道会“静默死亡”，且因主进程存活导致 systemd 无法自动重启。这是一个严重的稳定性问题，影响生产环境可用性。
*   **[BUG] v2→v3 配置迁移失败 (Issue #3206)**
    *   **链接:** https://github.com/sipeed/picoclaw/issues/3206
    *   **分析:** 用户在升级到 v0.2.9 时遇到配置加载失败，报错未知字段 `build_info` 和 `session.dm_scope`。这表明配置迁移脚本可能存在兼容性问题，影响新用户安装体验。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在配置解析、网络协议处理和工具调用安全性上：

1.  **高严重度：Matrix 通道断连后无自愈能力 (Issue #3203)**
    *   **描述:** `/sync` 长轮询在异常退出后不再重试，导致服务永久失效。
    *   **状态:** Open, Stale。尚无明确 Fix PR，需优先处理。
2.  **高严重度：配置迁移导致服务启动失败 (Issue #3206)**
    *   **描述:** 旧版配置字段未被正确忽略或转换，导致 `picoclaw status` 等命令崩溃。
    *   **状态:** Open, Stale。需检查 v3 配置加载器对遗留字段的处理。
3.  **中严重度：`write_file` 工具存在误导性覆盖风险 (PR #3226)**
    *   **描述:** 之前的实现可能诱导 AI 模型覆盖重要文件。
    *   **状态:** Closed (已修复)。
4.  **低严重度：LINE 通道 `sync.Map` 类型断言缺少错误检查 (PR #3171)**
    *   **描述:** 潜在 Panic 风险。
    *   **状态:** Closed (已修复)。

## 6. 功能请求与路线图信号
*   **AWS Bedrock Prompt Caching (PR #3163):** 贡献者提出了利用 AWS Bedrock Converse API 的缓存点功能来降低延迟和成本。这是一个高质量的性能优化建议，若合并将显著提升 AWS 用户的体验。
*   **QQ 频道流式支持 (Issue #3201):** 明确的功能需求，反映了多平台实时交互的一致性追求。
*   **远程 Agent WebSocket 模式 (PR #3118):** 允许 `picoclaw agent` 通过 WebSocket 连接到远程实例，增强了架构的灵活性，适合分布式部署场景。
*   **Deltachat 清理与重构 (PR #3222):** 删除遗留特性，精简代码量 320 行，表明维护者正在致力于减少技术债务，保持代码库整洁。

## 7. 用户反馈摘要
*   **嵌入式/边缘计算需求:** 用户 (@sarwonous) 明确提到在 Raspberry Pi 3 B+ 上使用 9router 作为网关的需求，指出缺乏 ARMv7 构建目标是痛点。这提示项目需要加强对轻量级硬件的支持。
*   **配置管理痛点:** 用户 (@OhYash) 反馈即使全新安装也会遇到配置迁移错误，说明文档或安装流程中的自动化步骤可能存在缺陷，或者向后兼容性测试不足。
*   **对稳定性的焦虑:** 用户 (@weissfl) 强调 Matrix 通道的“静默死亡”问题，指出当前监控机制（systemd Restart=on-failure）无法覆盖此类应用层死锁，呼吁增加更健壮的重连机制。

## 8. 待处理积压
以下 Issue 标记为 `[stale]` 且已开放一段时间，建议维护者重新评估优先级：

1.  **Issue #3203:** Matrix 同步循环无重连逻辑。
    *   *理由:* 直接影响服务可用性，属于生产环境高风险 Bug。
2.  **Issue #3206:** v2→v3 配置迁移失败。
    *   *理由:* 阻碍用户顺利升级到最新版本，影响新用户获取率。
3.  **Issue #3201:** QQ 频道流式输出支持。
    *   *理由:* 重要的功能缺口，相比其他渠道，QQ 缺少流式支持降低了竞争力。
4.  **PR #3205:** 支持 9router 网关及 ARMv7 构建。
    *   *理由:* 解决了特定硬件和网关组合下的兼容性问题，有助于扩大用户群体。

---
*分析师：Agnes-2.0-Flash*
*生成时间：2026-07-10*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**: 2026-07-10
**数据来源**: GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 今日保持高活跃度，过去24小时内新增9个 Issues 和17个 Pull Requests，显示出社区贡献与核心开发并行的强劲势头。**安全性**是今日焦点，多个关于 `add_mcp_server` 审批流程漏洞的 Issue 被标记为安全相关，并迅速对应产生了修复 PR。同时，Telegram 适配器的一系列连接与消息路由问题集中爆发，表明近期对该模块的改动需要更多稳定性验证。尽管没有新版本发布，但大量 Bug 修复和功能增强（如飞书集成、审计日志）正在快速推进，项目整体处于密集的迭代优化期。

## 2. 版本发布
**无新版本发布**。

## 3. 项目进展
今日主要进展集中在**安全加固**、**调度系统重构**及**渠道适配层修复**：

*   **安全审批流修复**: 针对 Issue #2827/#2762 中提到的 `add_mcp_server` 隐藏参数风险，PR #2998 正在渲染完整的 MCP 服务器负载以进行审批，确保透明度。
*   **调度任务闭环**: 作为“Scheduled tasks”系列的一部分，PR #2981 (已合并) 完成了 `ncl tasks` 控制平面和隔离会话的实现；PR #2988 则确保了任务最终文本只能通过 `send_message` 工具发出，实现了“单门交付”逻辑。
*   **容器运行时韧性**: PR #2993 (已关闭/合并) 修复了 Docker 不可用时导致主进程崩溃的问题，提升了生产环境的稳定性。
*   **Socket 传输硬化**: PR #2802 对 `ncl` socket 传输进行了超时和缓冲限制，防止潜在的 DoS 或资源泄漏。
*   **多模态能力恢复**: PR #2618 尝试恢复 v1 中的图像、语音附件支持，尽管该 PR 仍开放，但反映了用户对多模态交互的持续需求。

## 4. 社区热点
今日讨论最激烈的议题围绕 **Telegram 适配器的行为异常** 和 **MCP 安全漏洞**：

*   **[Security] MCP Server 审批走私 (Issue #2827, #2762)**:
    *   **链接**: [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827), [Issue #2762](https://github.com/nanocoai/nanoclaw/issues/2762)
    *   **分析**: 用户 YLChen-007 指出 `add_mcp_server` 的审批卡片未显示 `args` 和 `env`，允许攻击者通过隐藏参数进行“批准走私”。这是今日最关键的安全信号，直接推动了 PR #2998 的出现。
*   **Telegram 静默失败与黑盒问题 (Issue #2989, #2990, #2991)**:
    *   **链接**: [Issue #2989](https://github.com/nanocoai/nanoclaw/issues/2989), [Issue #2990](https://github.com/nanocoai/nanoclaw/issues/2990), [Issue #2991](https://github.com/nanocoai/nanoclaw/issues/2991)
    *   **分析**: 用户 allixsenos 报告了 Telegram 适配器在 `allowed_updates` 配置、`my_chat_member` 事件丢弃以及频道匿名发送者处理上的严重缺陷。这些 Issue 揭示了 Telegram 协议复杂性与 NanoClaw 适配器实现之间的脱节，可能导致机器人状态不同步或消息丢失。
*   **消息投递状态错误 (Issue #2995)**:
    *   **链接**: [Issue #2995](https://github.com/nanocoai/nanoclaw/issues/2995)
    *   **分析**: 当通道适配器离线时，消息仍被标记为“已送达”，这与 PR #2226 和 PR #2996 的修复目标一致，显示了用户对可观测性和正确错误处理的强烈需求。

## 5. Bug 与稳定性
以下 Bug 按潜在影响程度排列，部分已有对应的修复 PR：

| 严重等级 | Bug 描述 | 关联 Issue | 关联 PR (修复方案) | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | **安全漏洞**: `add_mcp_server` 隐藏运行时参数，允许权限提升/走私 | #2827, #2762 | [#2998](https://github.com/nanocoai/nanoclaw/pull/2998) | PR 已提交，待合并 |
| **高** | **数据一致性**: 离线通道消息被错误标记为“已送达”，导致数据丢失且无重试 | #2995 | [#2996](https://github.com/nanocoai/nanoclaw/pull/2996), [#2226](https://github.com/nanocoai/nanoclaw/pull/2226) | PR 已提交，待合并 |
| **中** | **功能回归**: 重复提醒因 `hasIdenticalSend` 匹配历史记录而停止触发 | #2997 | 暂无明确关联 PR | 待处理 |
| **中** | **可用性**: 跨会话调度的定时任务不可见/不可管理 | #2992 | PR #2981 (部分修复) | 需确认是否完全解决 |
| **中** | **协议兼容**: Telegram 频道帖子因匿名发送者无法匹配 `known` 范围 | #2991 | 暂无明确关联 PR | 待处理 |
| **低** | **健壮性**: 容器启动时 Docker 故障导致进程崩溃 | - | [#2993](https://github.com/nanocoai/nanoclaw/pull/2993) | **已合并** |

## 6. 功能请求与路线图信号
*   **飞书集成深化 (PR #2994)**: 用户 tier2tech-tian 提交了“汇报结果直发飞书群”的功能，旨在解决 Agent 执行后缺乏即时通知的问题。这暗示了团队对国内 IM 平台（如飞书）的深度集成需求正在增加。
*   **本地审计日志 (PR #2987)**: 新增 `/add-audit` Skill，提供 SIEM 格式的 NDJSON 审计日志。这表明项目正朝着企业级合规性和可追溯性方向演进，满足安全敏感型用户的需求。
*   **远程存储挂载 (PR #1598)**: 长期开放的 WebDAV/S3 远程存储 Skill，显示了用户对持久化外部存储支持的持续渴望。
*   **Guarded Actions Phase 2 (PR #2986)**: 引入统一的 `guard()` 决策函数，将所有特权操作收敛到一个决策点。这是架构层面的重大改进，旨在简化权限管理并提高安全性。

## 7. 用户反馈摘要
*   **痛点**: 用户普遍反映当前在长轮询（Long-polling）和多 Agent 组场景下，消息路由和状态同步存在“静默失败”现象。例如，Telegram 适配器忽略 `my_chat_member` 更新导致机器人“失联”，以及重复任务因去重逻辑过于激进而停止发送。
*   **安全焦虑**: 对于 AI Agent 自动修改自身配置（如添加 MCP Server）的行为，用户高度关注其可控性和可见性。Issue #2827 明确指出，如果审批流程不透明，将带来严重的安全隐患。
*   **期望**: 用户希望获得更细粒度的错误报告和重试机制（如 PR #2996 所解决的投递问题），以及更强大的跨平台通知能力（如飞书集成）。

## 8. 待处理积压
*   **Telegram 适配器深层修复**: Issue #2989, #2990, #2991 涉及 Telegram 协议的核心交互逻辑，目前尚无直接合并的修复 PR，建议核心团队优先审查，因为这些问题直接影响大量 Telegram 用户的正常使用。
*   **重复任务去重 Bug**: Issue #2997 描述的 `hasIdenticalSend` 逻辑缺陷导致定时任务失效，这是一个明显的回归 Bug，需要尽快定位并修复，以免破坏自动化工作流。
*   **跨会话任务可见性**: Issue #2992 指出调度任务在不同 Session 间隔离导致的管理困难，虽然 PR #2981 引入了新调度器，但该 Issue 尚未关闭，需确认新调度器是否已解决此全局可见性问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-07-10
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 在 2026-07-10 保持高活跃度，过去 24 小时内共产生 **32 条 Issue** 和 **50 条 PR** 更新。项目核心焦点集中在 **Slack 自动化集成的稳定性修复** 以及 **Reborn 架构的代码重构与清理**。尽管没有新的大版本发布，但多个关键 Bug（如通知丢失、认证流程断裂）已被识别并正在通过 PR 进行修复。技术债务清理工作也在同步推进，整体项目处于“高强度修复与优化”阶段。

## 2. 版本发布
*   **无新版本发布。**
*   *注：PR #5598 提及 `ironclaw` 版本从 `0.24.0` 跃升至 `0.29.1`，但这似乎是内部依赖或构建元数据的更新，并非面向用户的正式 Release 标签推送。*

## 3. 项目进展
今日主要进展体现在底层架构优化和特定模块的重构上：
*   **错误处理强化：** PR #5652 将 `unused_must_use` 提升为工作区级别的 deny 规则，确保不再静默丢弃错误结果，提升了代码健壮性。
*   **配置构建器标准化：** 一系列 PR (#5791, #5793, #5794, #5798, #5799, #5800, #5811, #5812) 由 `ilblackdragon` 提交，统一使用默认值支持的 Builder 模式重构 Reborn 模块的配置和测试夹具，显著减少了样板代码。
*   **运行时控制平面整合：** PR #5901 完成了 Wave 4 的关键部分，将受信任的运行器控制平面集中命名和管理，解决了此前调度与执行分离的问题。
*   **WASM 工具支持：** PR #5499 推进了 Reborn 栈中通过 ZIP 安装 WASM 工具的基础设施，这是可配置工具链的重要一步。

## 4. 社区热点
以下是今日讨论最激烈或最受关注的议题：

*   **[Slack 集成重大修复] Slack tool overhaul & Automation fixes**
    *   **关联 PR:** [#5904](https://github.com/nearai/ironclaw/pull/5904), [#5898](https://github.com/nearai/ironclaw/pull/5898), [#5899](https://github.com/nearai/ironclaw/pull/5899)
    *   **分析:** 开发者 `BenKurrek` 针对 Slack 自动化中的多个致命缺陷（如消息发错人、身份标识混乱、重复投递）进行了大规模修复。PR #5899 引入了新的 QA 探针以复现生产环境故障，体现了“测试驱动修复”的工程实践。这是今日最重要的技术活动。

*   **[Bug Bash 高频问题] 通知与审批流失效**
    *   **关联 Issue:** [#5553](https://github.com/nearai/ironclaw/issues/5553), [#5885](https://github.com/nearai/ironclaw/issues/5885), [#5886](https://github.com/nearai/ironclaw/issues/5886)
    *   **分析:** 用户报告审批通知消失、Pending Approval 阻塞后续运行等问题。这表明当前的通知系统和调度器之间存在状态同步缺陷，严重影响自动化工作的可靠性。

*   **[技术债] 第一方技能激活模块分解**
    *   **关联 Issue:** [#5897](https://github.com/nearai/ironclaw/issues/5897)
    *   **分析:** 针对 `activation.rs` 模块的职责过重问题提出重构计划，旨在解耦描述符加载、缓存和选择逻辑。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 **Slack 集成**、**UI 状态同步** 和 **上下文管理** 三个方面：

| 严重等级 | 类别 | 问题描述 | 关联 Issue/PR |
| :--- | :--- | :--- | :--- |
| **P1/P2** | **Slack 集成** | 通知发送给错误用户；认证完成后 WebUI 状态不同步；断连后无法重新配对 | [#5877](https://github.com/nearai/ironclaw/issues/5877), [#5880](https://github.com/nearai/ironclaw/issues/5880), [#5747](https://github.com/nearai/ironclaw/issues/5747) |
| **P2** | **调度/执行** | 等待审批时阻塞后续独立运行；达到最大动作限制后丢失进度 | [#5886](https://github.com/nearai/ironclaw/issues/5886), [#5887](https://github.com/nearai/ironclaw/issues/5887) |
| **P2** | **上下文/模型** | 上下文压缩失败导致运行中断；模型输出解析通用错误 | [#5838](https://github.com/nearai/ironclaw/issues/5838), [#5883](https://github.com/nearai/ironclaw/issues/5883) |
| **P2** | **认证安全** | Token 被撤销后产生误导性错误而非触发重新认证流程 | [#5878](https://github.com/nearai/ironclaw/issues/5878) |
| **P3** | **UI/UX** | 侧边栏显示原始 Thread ID；日志深链接需点击两次；终端图标无法隐藏 | [#5706](https://github.com/nearai/ironclaw/issues/5706), [#5557](https://github.com/nearai/ironclaw/issues/5557), [#5705](https://github.com/nearai/ironclaw/issues/5705) |

*   **Fix 状态：** Slack 相关问题已有 PR #5898 和 #5904 正在进行修复；上下文压缩问题有 PR #5902 试图解决。

## 6. 功能请求与路线图信号
*   **CLI/TUI 密钥管理：** Issue [#2601](https://github.com/nearai/ironclaw/issues/2601) 再次被提及，用户希望获得更清晰的命令行或终端界面来管理认证凭据，当前文档和 UX 对此支持不足。
*   **JMT x402 Agent Tools：** PR [#5903](https://github.com/nearai/ironclaw/pull/5903) 添加了基于 Base 主网的付费 x402 端点工具，表明项目正在探索去中心化支付和外部 API 集成的新路径。
*   **Routine 创建挂起：** Issue [#5504](https://github.com/nearai/ironclaw/issues/5504) 指出 Routine 创建过程无反馈，暗示需要改进异步操作的 UI 状态提示机制。

## 7. 用户反馈摘要
*   **痛点：** 用户对 **Slack 集成的可靠性** 抱怨较多，特别是消息发送错误对象、认证状态不同步以及无法取消配对。
*   **体验断层：** 用户在等待审批或处理长运行任务时，缺乏实时的视觉反馈（如 Activity Panel 不更新、日志链接失效），导致“黑盒”焦虑。
*   **维护困扰：** 旧线程无法删除、Sidebar 在负载下显示技术细节（UUID），表明用户体验尚未完全脱离开发调试模式。

## 8. 待处理积压
*   **Secrets Management (CLI/TUI):** Issue [#2601](https://github.com/nearai/ironclaw/issues/2601) 自 2026-04-18 创建以来长期未得到实质性推进，建议将其纳入下一版本的功能规划。
*   **Daily Failure Taxonomy:** Issue [#5859](https://github.com/nearai/ironclaw/issues/5859) 显示了 Pinchbench 测试套件中严重的 Provider 侧速率限制问题，需要持续监控并可能需要在基础设施层面进行扩容或限流策略调整。
*   **Legacy Code Cleanup:** 虽然 PR #5826 和 #5827 清理了部分 V1 覆盖测试，但仍有大量遗留代码（如 Issue #5897 指出的激活模块）需要分解和维护。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-07-10
**数据来源**：GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 今日保持高频迭代状态，过去24小时内共有 **14 个 PR** 提交，其中 **11 个已合并/关闭**，显示出极高的开发执行力。主要进展集中在 **Cowork 交互体验优化**（时间戳、历史回溯、附件支持）、**OpenClaw 网关稳定性修复**（空字节清洗、梦境功能禁用）以及 **Windows 原生 UI 适配**。社区方面，针对消息时间戳、搜索功能和 Markdown 导出的功能缺失问题（Issues #1339-#1345）引发了集中反馈，部分需求已通过 PR #1340 和 #1342 得到初步响应。整体项目健康度高，技术债务清理与新功能开发同步推进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的稳定性和核心工作流体验：

*   **安全性与稳定性加固**：
    *   **#2308**: 修复了向 OpenClaw Gateway 发送 Prompt 时包含 `U+0000` (Null Byte) 导致的拒绝服务问题，增强了输入清洗机制。
    *   **#2301**: 显式禁用 OpenClaw 的 "Memory Dreaming" 功能，防止因配置不同步产生的残留定时任务，提升后台进程稳定性。
*   **Cowork 工作流增强**：
    *   **#2300**: 支持在 Steer 队列中附加文件（拖拽、粘贴、图片等），解决了复杂任务中上下文传递的痛点。
    *   **#2307**: 优化了 Prompt 模式切换 UI，移除了冗余的 Plan Mode 开关，重构了 Goal/Steer 状态栏布局，提升视觉一致性。
    *   **#2299**: 修复了子代理 (Subagent) 工具调用历史同步问题，确保子会话中的 Tool Call/Result 能正确展示在主会话视图中。
*   **UI/UX 与国际化**：
    *   **#2302**: 新增 Windows 平台专属标题栏，集成 Logo 和原生窗口控制，优化了侧边栏折叠时的图标显示逻辑。
    *   **#1397**: 修复了会话列表紧凑模式下时间后缀（如 "26m", "1d"）硬编码英文的问题，现已支持根据系统语言本地化显示。
    *   **#2304**: 改进了侧边栏任务分页加载逻辑，引入拖拽排序 (dnd-kit) 和持久化代理排序，提升长列表管理效率。

## 4. 社区热点
今日 Issues 中，用户 **MaoQianTu** 连续提交了多个关于 **Cowork 基础交互缺失** 的功能请求，反映出用户对“类聊天应用”基础体验的高期待：

*   **#1339 & #1340**: 【功能缺失】消息气泡缺少发送时间戳。用户指出无法判断消息发送间隔，影响回顾效率。**关联 PR #1340 已提出修复方案**，在 UserMessageItem 底部添加 HH:MM 格式时间戳。
*   **#1341 & #1342**: 【功能缺失】输入框不支持方向键回溯历史。用户希望像终端一样使用 `Up/Down` 键复用指令。**关联 PR #1342 已实现内存中维护最近 50 条去重历史**。
*   **#1343**: 【功能缺失】搜索仅限标题，不支持消息全文检索。这是长会话管理中的常见痛点，目前尚无直接对应的 PR，但需求明确。
*   **#1345**: 【功能缺失】会话详情缺少 Markdown 导出。用户急需可编辑的文本格式以进行笔记整理，当前仅支持截图。

**分析**：社区对“基础可用性”功能的呼声高于复杂特性，特别是时间感知、历史复用和文本导出，这些是提升用户留存的关键细节。

## 5. Bug 与稳定性
*   **P1 - 定时任务异常删除 (#1394)**:
    *   **描述**: 用户报告，当创建“不重复执行”的定时任务并在运行后，任务被永久自动删除，导致用户无法再次编辑或使用该配置。
    *   **现状**: Issue 已关闭，但摘要暗示这是一个预期行为与用户习惯冲突的问题（用户希望保留模板）。需确认是否为误报或设计缺陷。
*   **P2 - OpenClaw 网关崩溃风险 (#2308)**:
    *   **描述**: 之前存在的 Null Byte 注入可能导致网关硬拒绝。
    *   **修复**: **PR #2308 已合并**，在入站和出站边界增加了清洗逻辑。
*   **P3 - Windows 标题栏图标重复 (#2302)**:
    *   **描述**: 侧边栏折叠时，Compose 动作图标可能在标题栏和内容头重复显示。
    *   **修复**: **PR #2302 已合并**，优化了条件渲染逻辑。

## 6. 功能请求与路线图信号
基于今日 Issue 和 PR 的对应关系，以下功能极可能纳入近期版本：

1.  **消息时间戳显示**: 高优先级。PR #1340 已就绪，预计下一个 Patch 版本发布。
2.  **输入框历史回溯**: 高优先级。PR #1342 已就绪，预计下一个 Patch 版本发布。
3.  **子代理工具历史同步**: 中等优先级。PR #2299 已合并，解决了数据可见性问题。
4.  **IM 群组任务路由修复**: 中等优先级。PR #2306 已合并，改善了多账号/群组场景下的任务分配准确性。

**未解决的需求**：
*   **全文搜索 (#1343)** 和 **Markdown 导出 (#1345)** 目前仅有 Issue 描述，暂无关联 PR，可能是下一迭代的重点规划方向。

## 7. 用户反馈摘要
*   **痛点**: 用户在长时间会话中缺乏“时间坐标”，难以梳理对话脉络（#1339）；在调试任务时，重复输入相同指令效率极低（#1341）。
*   **期望**: 用户期望 LobsterAI 不仅是一个 AI 客户端，更是一个具备良好交互习惯的生产力工具（类似 VS Code 或 Terminal 的快捷键体验）。
*   **满意度**: 用户对 **PR #1396** 中提到的“完善卸载清理流程”表示认可，这反映了用户对本地数据隐私和整洁度的重视。

## 8. 待处理积压
*   **#1343 [OPEN]**: 会话内容全文搜索功能缺失。尽管有 PR 涉及其他搜索优化，但全文检索尚未落地。
*   **#1345 [OPEN]**: 会话 Markdown 导出功能缺失。这是知识沉淀场景下的刚需，建议优先排期。
*   **#1394 [CLOSED]**: 需进一步确认“不重复任务”删除逻辑是否真的符合用户预期，若确认为设计缺陷，可能需要重新开放 Issue 讨论 UX 改进。

---
*分析师：Agnes-2.0-Flash | 生成时间：2026-07-10*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：** 2026-07-10
**数据来源：** GitHub (moltis-org/moltis)

### 1. 今日速览
Moltis 项目在昨日（2026-07-09）保持低活跃度，无新 Issue 提交或版本发布，整体处于平稳维护状态。唯一的动态来自一条针对 OpenAI 生态的新功能 Pull Request (#1146)，旨在扩展对即将发布的 GPT-5.6 系列模型的支持。项目目前专注于适配最新的大模型 API 标准，社区参与度暂时较低，但核心维护工作仍在有序进行。

### 2. 版本发布
**无新版本发布。**
*   最近一次 Release 信息缺失，建议开发者关注 PR #1146 的合并进度，这可能构成下一次小版本更新的核心内容。

### 3. 项目进展
今日有一条关键的 Pull Request 正在等待合并，标志着项目在模型兼容性上的重要推进：
*   **PR #1146: Add GPT-5.6 model support**
    *   **状态：** OPEN (待合并)
    *   **贡献者：** PeterDaveHello
    *   **进展详情：** 该 PR 为 Moltis 引入了对 OpenAI GPT-5.6 系列模型（Sol, Terra, Luna）的原生支持。具体工作包括：
        1.  在 OpenAI 和 OpenAI Codex 的回退目录中添加新模型标识。
        2.  应用文档记录的 1.05M 上下文窗口限制，以及 ChatGPT/Codex 后端的 372K 限制。
        3.  更新了 OpenAI 配置模板及提供者选择文档，新增 `gpt-5.6` Sol 别名支持。
    *   **影响：** 合并后将显著提升 Moltis 对最新 OpenAI 模型栈的兼容性和用户配置体验。

### 4. 社区热点
今日社区讨论焦点集中在 **PR #1146** 上，尽管当前点赞数为 0 且无评论，但该 PR 直接响应用户对最新 GPT-5.6 模型支持的潜在需求。
*   **链接：** [PR #1146](https://github.com/moltis-org/moltis/pull/1146)
*   **分析：** 用户/开发者迫切需要将 Moltis 的配置适配至 OpenAI 最新的 API 版本（1.05M context window）。虽然暂无公开争议，但此类底层模型适配的 PR 通常对用户体验影响重大，建议合并前确保配置模板的准确性。

### 5. Bug 与稳定性
**无今日报告的 Bug 或稳定性问题。**
*   过去 24 小时内 Issues 更新为 0，未检测到新的崩溃报告或回归问题。
*   鉴于 PR #1146 涉及核心配置更新，建议合并后进行回归测试，确保新的上下文窗口限制逻辑未引入配置解析错误。

### 6. 功能请求与路线图信号
*   **信号：** 支持 GPT-5.6 系列模型（Sol, Terra, Luna）及更新后的上下文窗口策略。
*   **预判：** 此功能极大概率被纳入下一个 minor 版本（如 vX.X.1 或 vX.X.2），以维持 Moltis 对主流大模型厂商最新产品的同步支持能力。PeterDaveHello 的提交表明项目正积极跟进 OpenAI 的产品迭代。

### 7. 用户反馈摘要
*   **当前反馈：** 今日无新 Issue 评论，缺乏实时用户痛点数据。
*   **隐含需求：** 通过 PR #1146 的内容可推断，用户群体高度关注“最大上下文窗口利用率”和“多模型别名配置的便利性”。用户希望 Moltis 能自动识别并正确配置最新的高性能模型参数，减少手动调整配置文件的负担。

### 8. 待处理积压
*   **PR #1146 (Add GPT-5.6 model support)**
    *   **状态：** OPEN
    *   **建议：** 该 PR 创建于 2026-07-09，至今未合并。作为唯一活跃的开发任务，建议维护者优先审查其配置模板变更，确认无误后尽快合并，以避免用户因缺少最新模型支持而产生配置困扰。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-07-10
**数据来源：** GitHub agentscope-ai/CoPaw

## 1. 今日速览
CoPaw 项目在 2026-07-10 保持高活跃度，过去24小时内产生 35 个 Issues 和 50 个 PRs，显示出极强的社区参与度和开发迭代速度。项目正处于 v2.0.0-beta.5 的关键过渡期，核心焦点集中在解决上下文压缩导致的工具调用丢失、前端性能瓶颈以及多通道（DingTalk/Feishu/Matrix）的稳定性修复。尽管新版本引入了沙箱限制等争议性功能，但社区通过大量 PR 积极修补漏洞并优化用户体验，项目整体健康度良好，但 v2.0 系列的稳定性仍需密切关注。

## 2. 版本发布
### **v2.0.0-beta.5**
*   **发布时间：** 2026-07-10
*   **关键更新：**
    *   **滚动索引修复 (Fix Scroll Index)：** 解决了在 Eviction Index 中标签未正确标头化以及实时会话锚点定位的问题 (#5848, #58)。
*   **破坏性变更/注意事项：**
    *   作为 Beta 版本，v2.0 系列引入了更严格的沙箱机制（Issue #5879 反馈），可能导致部分信任环境下的 Agent 能力受限（如无法安装 Python 库）。建议用户在测试环境中验证沙箱配置，或通过配置项调整（若支持）。
    *   上下文压缩逻辑有重大调整，需留意 `LightContextManager` 对结构化数据（Tool Call）的处理兼容性。

## 3. 项目进展
今日合并/关闭了 32 个 PRs，主要推进了以下方向：

*   **运行时与安全性加固：**
    *   **修复 rm 绕过漏洞：** PR #5866 修复了 `rm -rf ${HOME}` 的安全绕过问题，将检测与提取分离，显著提升了 Shell 命令执行的安全性。
    *   **错误处理标准化：** PR #5905 修复了 Runtime v2 重构中 `Envelope` 对象序列化错误导致前端 SDK 解析失败的问题，恢复了前端错误提示的可用性。
*   **Agent 核心逻辑优化：**
    *   **子代理生命周期：** PR #5637 实现了基于事件的后台子代理生命周期管理，替代了原有的轮询机制，提升了并发处理的效率和响应速度。
    *   **推理内容对齐：** PR #5908 减少了 `model_factory.py` 中的日志刷屏问题，优化了 `reasoning_content` 对齐失败的诊断日志级别。
    *   **工具调用恢复：** PR #5841 修复了因 JSON 参数前后缀空白导致的工具调用输入丢失问题，提高了模型生成容错率。
*   **前端与交互体验：**
    *   **文本自动复制：** PR #5739 添加了聊天消息卡片中文本选中后自动复制的功能，提升了用户操作便捷性。
    *   **审批流程优化：** PR #5892 改进了 TUI/ACP 的审批流程和预热会话处理，使人机协作更加流畅。

## 4. 社区热点
以下 Issues 和 PRs 引发了最高关注度：

*   **[OPEN] #2291: Help Wanted - Open Tasks** (64 评论)
    *   **分析：** 这是项目的“贡献者指南”型 Issue，长期活跃。它展示了社区对参与核心开发的强烈意愿，也是新贡献者进入项目的主要入口。
*   **[OPEN] #5757: 飞书信息不回复情况** (13 评论)
    *   **分析：** 用户反馈 Docker 版本在飞书通道中存在首条消息正常、后续消息无响应的严重 Bug。这影响了大量使用飞书集成的用户，表明多通道适配仍存在稳定性隐患。
*   **[CLOSED] #5379: Python 安装后启动 Internal Server Error** (10 评论)
    *   **分析：** 涉及 Windows 环境下 `get_remote_addr` 导致的启动崩溃。虽然已关闭，但高评论数反映了安装体验的痛点，尤其是对于非 Linux 环境的用户。
*   **[OPEN] #5879: 增加可关闭沙箱的功能** (6 评论)
    *   **分析：** 用户对 v2.0 默认开启的沙箱表示不满，认为其限制了 Agent 在可信设备上的能力。这是一个重要的产品反馈信号，提示维护者需平衡安全与灵活性。
*   **[OPEN] #5797: 定时任务结果弹窗提醒应加开关** (6 评论)
    *   **分析：** 用户批评“一刀切”关闭弹窗的做法，呼吁提供细粒度的用户控制选项。这反映了用户对个性化工作流的需求。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，按严重程度排列：

1.  **[HIGH] #5856: Tool_call structure lost during context compaction**
    *   **描述：** 上下文压缩过程中，结构化工具调用数据被转换为纯文本，导致后续 LLM 请求出现 400 错误或消息计数不匹配。
    *   **状态：** OPEN。这是 v2.0 上下文管理模块的核心缺陷，直接影响 Agent 长期运行的稳定性。
2.  **[HIGH] #5872: Docker 容器内 browser_use 启动失败**
    *   **描述：** 由于 dbus 连接错误导致 Chromium 进程退出，进而使 CDP 端口不可用。
    *   **状态：** OPEN。影响了基于 Docker 部署的浏览器自动化用户。
3.  **[MEDIUM] #5911: Windows AppContainer sandbox 忽略配置的 shell**
    *   **描述：** Windows 沙箱强制使用 `cmd.exe` 而非用户配置的 PowerShell，导致命令执行异常。
    *   **状态：** OPEN。影响 Windows 高级用户的使用体验。
4.  **[MEDIUM] #5906: 防重复功能异常触发**
    *   **描述：** v2.0 beta 4 中，正常对话被误判为重复，导致 Agent 陷入死循环并报错。
    *   **状态：** OPEN。同一作者还报告了 #5896 迭代次数限制 Bug，表明 v2.0 核心循环逻辑存在多处缺陷。
5.  **[LOW] #5771: model_factory.py 调试日志误用 WARNING 级别**
    *   **描述：** 日志刷屏影响排查问题。
    *   **状态：** OPEN。已有 PR #5908 修复。

## 6. 功能请求与路线图信号
*   **会话分组与导入导出 (#5903)：** 用户强烈需求对大量会话进行分组管理，并支持 JSON 文件的导入导出以备份或迁移。这符合 v2.0 增强控制台管理功能的趋势。
*   **MCP 会话自动重连 (#5900)：** 用户指出 `streamable_http` MCP 会话中断后无法自动重注册，导致客户端永久跳过。这是一个关键的可用性改进点，目前尚无公开 PR 修复。
*   **Token 信息可见性 (#4767)：** 长期存在的请求，希望在前端查看每个会话的 Token 使用情况，以便更好地管理上下文压缩。
*   **ReMe 记忆搜索 Reranker (#5692 PR)：** 正在开发的 PR 将为记忆搜索添加重排序功能，这表明项目路线图正致力于提升 Agent 记忆的准确性和相关性。

## 7. 用户反馈摘要
*   **痛点：**
    *   **v2.0 稳定性不足：** 多位用户报告了 v2.0 beta 版本中的逻辑错误，如防重复机制误判 (#5906)、迭代计数错误 (#5896) 和上下文压缩破坏数据结构 (#5856)。
    *   **平台兼容性差：** Windows 环境下的沙箱配置 (#5911)、Docker 内的 dbus 问题 (#5872) 以及飞书通道的消息丢失 (#5757) 表明跨平台适配仍有大量工作要做。
    *   **日志噪音：** 过多的 WARNING 级别调试日志 (#5771) 干扰了正常运维。
*   **满意点：**
    *   **响应速度快：** 社区对 Issue 的响应迅速，许多 Bug 在报告当天就有 PR 关联或讨论。
    *   **功能丰富性：** 用户对子代理事件驱动 (#5637)、Windows GUI 自动化 (#5187) 等新特性表示期待。

## 8. 待处理积压
*   **#5856 (Tool_call structure lost):** 极高优先级。上下文压缩是长对话 Agent 的核心，此 Bug 可能导致数据丢失或请求失败，需尽快合并修复 PR 或发布补丁。
*   **#5900 (MCP auto-reconnect):** 中等优先级。MCP 集成是扩展 Agent 能力的重要途径，缺乏自动重连机制严重影响生产环境稳定性。
*   **#5879 (Sandbox toggle):** 产品决策类 Issue。需维护者明确 v2.0 的设计哲学：是坚持严格安全默认值，还是提供灵活配置。建议增加配置开关以回应用户诉求。
*   **#5757 (Feishu no reply):** 渠道稳定性 Issue。需复现并修复 Docker 环境下飞书通道的消息队列处理逻辑。

---
*本报告由 Agnes-2.0-Flash 基于 GitHub 数据自动生成，旨在提供客观的项目状态洞察。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-10
**数据来源：** GitHub API (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 项目在 2026-07-10 保持高活跃度，过去 24 小时内产生 36 条 Issue 更新和 50 条 PR 更新，显示开发节奏紧凑且社区参与度较高。虽然今日无新版本发布，但多个关键安全补丁（SSRF 修复）、运行时稳定性改进（MCP 进程泄漏修复）及插件系统增强（Gateway/Dashboard 目录）已合并或处于活跃评审阶段。项目整体健康度良好，重点在于强化安全性、完善多用户隔离架构以及提升本地模型体验。

## 2. 版本发布
*   **无新版本发布。**
*   当前主要关注点为 v0.8.3 的配置驱动运行时策略、v0.9.0 的多用户隔离与安全加固，以及 v0.8.3 的可观测性改进。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了项目的安全性和运行时稳定性：

*   **安全加固 (SSRF 修复):**
    *   **#8826 & #8827**: 修复了 `image_gen` 工具中的 Server-Side Request Forgery (SSRF) 漏洞，增加了层 3 的解析 IP DNS 重绑定检查。
    *   **#8713**: 为 `file_download` 工具添加了 `allowed_private_hosts` 可选配置，封闭了另一个 SSRF 表面。
    *   *影响*: 这些修复直接回应了内部安全审计，大幅降低了代理执行文件下载和图片生成时的安全风险。
*   **运行时稳定性与资源管理:**
    *   **#8866**: 修复了 MCP 守护进程中 stdio 子进程随心跳累积泄漏的问题（关联 Issue #5903）。通过共享 MCP 注册表，解决了每心跳周期重新连接导致的孤儿进程问题。
    *   **#7836**: 修复了通道转换忽略运行时配置文件（`strict_tool_parsing` 和 `parallel_tools`）的 Bug，确保工具调用行为符合预期配置。
*   **功能增强:**
    *   **#8881**: 在 Cron 交付模式中正式支持 WeChat, Signal 和 Email 渠道，扩展了自动化任务的触达范围。
    *   **#8872**: 修正了 ZeroCode TUI 中上下文计量器未使用运行时配置 `max_context_tokens` 的问题，提升了 UI 对长上下文的准确性。

## 4. 社区热点
以下 Issue 因评论数较多或涉及核心架构争议而受到高度关注：

*   **[RFC] Work Lanes, Board Automation, and Label Cleanup (#6808)**
    *   *链接*: https://github.com/zeroclaw-labs/zeroclaw/issues/6808
    *   *分析*: 这是关于治理和工作流自动化的 RFC，旨在简化维护者的标签管理和任务路由。13 条评论表明社区对降低维护负担有强烈共识。
*   **[Bug] tool_filter_groups is a no-op for real MCP tools (#6699)**
    *   *链接*: https://github.com/zeroclaw-labs/zeroclaw/issues/6699
    *   *分析*: 报告了 MCP 工具过滤器的前缀匹配 Bug 以及与 `deferred_loading` 的集成失败。9 条评论显示该问题影响了工具的安全性和可用性配置，属于 P1 级高优先级 Bug。
*   **[Bug] MCP stdio child processes accumulate on daemon (#5903)**
    *   *链接*: https://github.com/zeroclaw-labs/zeroclaw/issues/5903
    *   *分析*: 尽管今日已通过 PR #8866 关闭，但此前 5 条评论揭示了长期存在的资源泄漏问题，特别是在启用心跳功能的默认配置下，导致守护进程生命周期内进程无限积累。
*   **[Feature] Local-First Mode for Small Models (#5287)**
    *   *链接*: https://github.com/zeroclaw-labs/zeroclaw/issues/5287
    *   *分析*: 获得 2 个赞成，是今日 Issue 中唯一获赞项。用户迫切希望减少本地小模型运行的提示词膨胀，并防止系统指令泄露，反映了边缘计算和隐私敏感场景下的核心痛点。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在配置解析、提供者兼容性和运行时行为异常：

*   **高严重性 (S1/S0):**
    *   **#6034**: 单轮/多轮对话中丢失 User Message（已关闭，可能是复现困难或环境特定问题）。
    *   **#6672**: 小米思考模式模型（mimo-v2.5）在代理工具调用循环中未传递 `reasoning_content`，导致后续步骤缺失推理上下文。
    *   **#8044**: 强化 `/model --agent` 作用域的安全性，发现缺乏发送者级别的授权检查，任何能发消息的用户均可更改代理模型。今日已有关闭的 PR 或 Issue 跟进此安全加固。
*   **中等严重性 (S2):**
    *   **#6558**: Qwen3.5-plus 提供商报错 405 Method Not Allowed，疑似 API 端点或配置问题。
    *   **#6517**: 上下文溢出导致幻觉/主题漂移，用户反馈当对话过长时 Bot 开始偏离主题。
    *   **#8762**: Anthropic 提供商对长轮次使用固定总超时，导致合法长任务在 120 秒后被中断。
    *   **#8578**: ZeroCode 启动失败时未正确终止进程，留下僵尸进程。
*   **低严重性 (S3):**
    *   **#8875**: 配置迁移警告可能误导用户，未显示具体解析错误。
    *   **#8652**: ZeroCode 转录本高亮在空白侧点击时不消失的 UI 瑕疵。

## 6. 功能请求与路线图信号
*   **OpenAI 兼容接口 (#8550)**: 用户请求添加 OpenAI 兼容的聊天完成端点，以便兼容 Open WebUI、LobeChat 等标准客户端。这与 PR #8909 (插件能力目录) 和整体网关架构演进方向一致，预计将作为 v0.9.0 或后续版本的重点特性。
*   **Discord 交互面parity (#7831)**: 追踪器协调了 Discord 频道在嵌入、斜杠命令选项、组件和语音方面的功能补齐，旨在使其与其他成熟集成保持一致。
*   **多用户隔离与授权 (#8290)**: 这是一个路线图 Epic 跟踪器，涉及 per-principal 会话/内存隔离和 per-sender 授权。今日多个 Issue (#8044, #8921) 都在为此基础架构做准备或修补相关 Bug。
*   **Plugin/Catalog 统一 (#8907 & #8909)**: 正在推进插件和能力的统一目录视图，计划通过 Gateway 和 Dashboard 暴露统一的能力清单，改善用户体验和插件发现机制。

## 7. 用户反馈摘要
*   **痛点**:
    *   **配置复杂性**: 用户反映配置迁移和错误提示不够直观 (#8875)，MCP 工具过滤配置无效 (#6699)。
    *   **长上下文管理**: 用户担心上下文溢出导致幻觉 (#6517)，以及 Anthropic 等提供商在长任务上的超时设置不合理 (#8762)。
    *   **本地模型体验**: 本地运行小模型时，提示词冗长且存在系统指令泄露风险 (#5287)。
*   **满意点**:
    *   **安全修复**: 社区对 SSRF 漏洞的快速修复和加固表示认可 (#8826, #8827, #8713)。
    *   **稳定性改进**: MCP 进程泄漏修复 (#8866) 解决了长期困扰用户的资源占用问题。
    *   **文档与示例**: 新增的 SOP 条件语法示例 (#8887) 有助于用户理解复杂工作流配置。

## 8. 待处理积压
*   **#5862 [OPEN]**: `zeroclaw cron` 无法被 Agent 识别以添加定时任务。虽然关联 PR #8881 扩展了交付渠道，但未解决 Agent 自身发现和使用 cron 工具的认知问题。需关注 Agent 工具发现机制。
*   **#6517 [OPEN]**: 上下文溢出导致幻觉。这是一个持续性的用户体验问题，可能需要更先进的上下文压缩或摘要策略，而非仅靠 Bug 修复。
*   **#8871 [OPEN]**: 显式处理第三方 API 429 速率限制响应。这是一个技术性 Task，旨在完善错误处理和重试逻辑，目前仍在等待明确边界。
*   **#8925 [OPEN]**: Amazon Bedrock 连接配置支持。用户寻求官方文档或示例来配置 Bedrock，这可能是一个文档补充或配置向导改进的机会。

---
*报告生成时间：2026-07-10*
*分析师：Agnes-2.0-Flash (Sapiens AI)*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*