# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-22 07:49 UTC

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
**日期：** 2026-06-22
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
OpenClaw 项目在 2026-06-22 保持极高的社区活跃度，过去 24 小时内新增 Issue 500 条，PR 500 条，显示出庞大的用户基数和密集的开发迭代。当前核心焦点集中在**会话状态一致性**、**消息投递可靠性**以及**内存/资源泄漏**的修复上。虽然发布了 `v2026.6.10-beta.1` 试图改善子代理完成通知和会话状态保留，但社区反馈表明，深层的会话生命周期管理、跨提供商故障转移以及定时任务（Cron）的稳定性仍是主要痛点。项目正处于快速演进期，但稳定性挑战显著增加。

## 2. 版本发布
**新版本：** `v2026.6.10-beta.1`

*   **关键改进：**
    *   **更可靠的代理轮次与会话状态：** 改进了挂起子代理完成通知的保留机制。
    *   **聊天历史转录非空化：** 确保会话历史在压缩等操作后保持完整。
    *   **媒体索引对齐：** 修复了媒体文件索引在不同会话阶段的一致性。
    *   **休眠跟随排水重启：** 优化了后台清理任务的启动逻辑。
    *   **压缩模型别名解析：** 解决了压缩过程中模型别名不一致的问题。
*   **潜在风险/注意事项：** 此版本为 Beta，主要涉及底层会话状态机。鉴于近期大量关于“会话状态”和“消息丢失”的高评级 Issue（如 #91588, #92201），建议生产环境用户在升级前充分测试子代理编排和长会话压缩场景。

## 3. 项目进展
今日 PR 数量巨大，但多数为小规模修复。值得关注的合并/提交方向包括：
*   **性能优化：** PR #94230 针对 `bundle-tools` 加载导致的 6-7 秒延迟进行优化，解决 MCP 服务器串行连接问题，这将显著提升代理启动速度。
*   **稳定性修复：** PR #95223 和 #95416 限制了 ChatGPT Responses 和 Inworld TTS 的错误体读取，防止因恶意或异常大响应导致的 OOM（内存溢出）。
*   **交付逻辑修正：** PR #95419 确保隔离 Cron 运行在投递失败时仍标记为成功，避免误报错误状态。
*   **基础设施：** PR #95683 进一步外部化了官方插件（IRC, Mattermost, Signal 等），增强了模块化部署能力。

## 4. 社区热点
以下 Issue 评论数最高，反映了用户最强烈的关切：

*   **[P0] Gateway 内存泄漏导致 OOM 崩溃 (#91588):**
    *   **热度：** 13 条评论，👍 1
    *   **分析：** RSS 从 350MB 增长至 15.5GB 后触发 OOM Killer，导致反复重启。这是目前最严重的稳定性问题，直接影响生产可用性。
*   **[P3] 支持 PostgreSQL 替代 SQLite (#90370):**
    *   **热度：** 11 条评论，👍 2
    *   **分析：** 企业用户对硬编码 SQLite 表示不满，希望利用 PG 的高级功能（如 pgvector）并减少运维复杂度。这是一个长期的架构诉求。
*   **[P1] 嵌入式 Runner 思考签名间歇性无效 (#92201):**
    *   **热度：** 11 条评论，👍 1
    *   **分析：** Anthropic 流式思考块在回放时签名失效，且错误被泛化导致恢复机制未触发。涉及复杂的流式处理和错误恢复逻辑。
*   **[P1] Telegram 重复回复回归 (#86519):**
    *   **热度：** 10 条评论，👍 1
    *   **分析：** 5.20 版本引入的回归，导致 Telegram 上出现 2-10 倍重复消息。虽在 5.22 减轻但未根除，影响用户体验。

## 5. Bug 与稳定性
今日报告了大量高严重程度的 Bug，主要集中在会话管理和投递环节：

*   **严重 (P0/P1):**
    *   **#91588:** Gateway 内存泄漏 (OOM)。*(无明确 Fix PR 链接，需关注)*
    *   **#92201:** Anthropic 思考签名无效，恢复失败。
    *   **#86519:** Telegram 消息重复发送。
    *   **#92043:** Compaction 超时设置不当导致合法长会话被截断。
    *   **#92460:** 隔离 Cron 完成通知丢弃频道信息。
    *   **#95495:** 2026.6.9 静默迁移内存存储，导致全量重新嵌入且无警告。
    *   **#95623:** Tool ID 清理器在跨提供商故障转移时遗漏 OpenAI 复合 ID，导致会话阻塞。
    *   **#91144:** Windows 计划任务中 Gateway 无法保持运行。
    *   **#91009:** Codex PreToolUse Hook 导致 CPU 满载和 RPC 停滞。
*   **中等 (P2/P3):**
    *   **#90354:** 预压缩内存刷新缺乏边界验证。
    *   **#92076:** 子代理完成投递在主会话非活跃时失败。
    *   **#92415:** `/model` 切换后会话模型快照未刷新。
    *   **#93807:** `web_fetch` 忽略 `NO_PROXY` 环境变量。
    *   **#91804:** 内部推理过程泄露给最终用户。

## 6. 功能请求与路线图信号
*   **存储后端多元化：** Issue #90370 强烈要求支持 PostgreSQL，反映企业用户对可扩展性和向量搜索的需求。
*   **Telegram 内联查询：** Issue #54794 请求支持 `@botname` 在任何群组中的内联模式，增强 Telegram 用户覆盖范围。
*   **主题会话家族：** Issue #90916 提议在一个助手下建立多个命名上下文通道，实现隔离的近期转录但共享持久记忆，适合复杂的多角色助手场景。
*   **ACP 技能注入：** Issue #43564 请求将 OpenClaw 技能注入到 ACP (Codex/Pi) 会话上下文中，打破工具链壁垒。
*   **Kubernetes 文档优化：** Issue #91455 指出 K8s 部署指南不够清晰，建议提供 Helm Chart 或更详细的自定义指引。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍对**会话状态的不可预测性**感到沮丧。多次提到“消息丢失”、“会话冻结”、“重复发送”以及“升级后行为改变”。特别是内存泄漏和 Compaction 超时问题，直接影响了长会话的可用性。
*   **运维复杂性：** 自托管用户抱怨插件解绑后的信任机制（#92516）、Secret 迁移后的审计盲区（#92522）以及 LaunchAgent 配置中的硬编码路径（#90711）。这些细节增加了运维负担。
*   **期望：** 用户希望更透明的升级提示（如 #95495 的静默迁移问题），以及更稳健的错误恢复机制（如 #92201 中的泛化错误导致无法恢复）。

## 8. 待处理积压
*   **#91588 (P0, Memory Leak):** 高优先级，需尽快定位 RSS 增长根源。
*   **#90370 (PostgreSQL Support):** 长期架构需求，需产品决策。
*   **#92516 (Self-hosted Channel Trust):** 容器化部署用户的常见障碍，需完善信任机制文档或代码。
*   **#92522 (Secrets Audit Blind Spot):** 安全审计工具的逻辑缺陷，可能导致敏感信息泄露风险被低估。
*   **#86519 (Telegram Duplication):** 尽管有缓解措施，但根本原因未完全解决，需回归测试。

---
*注：所有链接均基于提供的 Issue/PR 编号指向 `github.com/openclaw/openclaw`。*

---

## 横向生态对比

# 2026-06-22 开源 AI 智能体生态横向分析报告

## 1. 生态全景
2026年中期的开源智能体生态呈现出**“规模化重构”与“安全硬化”**并行的特征。以 OpenClaw 和 ZeroClaw 为代表的头部项目正经历从功能堆砌向底层架构（如 WASM 优先、会话状态一致性）的深度重构，社区活跃度极高但伴随显著的稳定性阵痛。与此同时，生态细分领域（如嵌入式 TinyClaw、企业级 NanoBot、多模态 CoPaw）通过差异化定位（极致轻量、安全合规、移动端适配）构建护城河。整体而言，行业重心已从“如何实现 Agent 对话”转向“如何保证 Agent 在生产环境中的确定性、安全性和资源可控性”。

## 2. 各项目活跃度对比

| 项目名称 | 新增 Issues | 新增 PRs | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.6.10-beta.1 | ⚠️ **高风险** | 高活跃但稳定性堪忧，内存泄漏与会话丢失频发，处于快速迭代后的修复期。 |
| **NanoClaw** | 2 | 3 | 无 | ✅ **良好** | 低活跃但高精准，聚焦安全漏洞修复与容器化稳定性，维护响应迅速。 |
| **Hermes Agent** | 50 | 50 | 无 | ⚠️ **中等** | 高并发修复期，CLI 与网关适配问题多，底层并发安全加固中。 |
| **PicoClaw** | 6 | 33 | v0.3.0-nightly | 🟡 **发展中** | 配置系统重构冲刺期，Web UI 体验提升明显，但多模型兼容层存在 Bug。 |
| **CoPaw** | 23 | 37 | 无 | ❌ **不稳定** | 版本回归问题集中（v1.1.12.post1），文件传输与多会话切换存在严重缺陷。 |
| **IronClaw** | 11 | 29 | 无 | 🟡 **重构中** | Engine V2 (Reborn) 过渡期，CI 优化与自动化功能补全中，E2E 测试受阻。 |
| **LobsterAI** | 6 | 11 | 无 | 🟢 **稳定** | 中等活跃，聚焦 OpenClaw 插件生态与 Cowork 工作流，安全策略调整引发关注。 |
| **ZeroClaw** | 50 | 50 | 无 | ⚠️ **激进** | 极高活跃度，架构转型期（WASM 优先、去 Node.js），安全硬化与基础设施重构并行。 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 **停滞** | 过去24小时无活动，生态边缘化或进入长维护周期。 |
| **Moltis** | 0 | 0 | 无 | 🔴 **停滞** | 过去24小时无活动。 |
| **NullClaw** | 1 | 1 | 无 | 🟡 **维护** | 极低活跃，仅依赖更新与个别模型兼容性 Bug 报告，处于被动维护状态。 |
| **ZeptoClaw** | 0 | 1 | 无 | 🟢 **精益** | 低频高质，聚焦 CI 门禁与二进制体积控制，战略护城河稳固。 |

## 3. OpenClaw 在生态中的定位

*   **市场地位**：**生态基石与流量中心**。OpenClaw 以每日千级（Issues+PRs）的吞吐量占据绝对主导地位，其 `v2026.6.10-beta.1` 的版本迭代速度远超其他竞品，表明其拥有最大的用户基数和开发者社区。
*   **技术路线差异**：
    *   **OpenClaw vs. ZeroClaw**：两者均处于大规模重构期，但 OpenClaw 侧重于**会话状态机与消息投递**的确定性（解决 OOM 和状态丢失），而 ZeroClaw 侧重于**运行时沙箱与架构现代化**（WASM 插件、去 Node.js）。
    *   **OpenClaw vs. NanoBot/IronClaw**：OpenClaw 更像是一个通用的“操作系统”，支持广泛的渠道（Telegram, Signal, IRC）和复杂的子代理编排；NanoBot 和 IronClaw 则更偏向于特定的部署场景（如钉钉/企业微信集成、NEAR 生态）。
*   **社区规模**：OpenClaw 的 Issue 深度（如 #91588 内存泄漏讨论）和 PR 数量表明其社区具有极高的参与度和复杂性，但也因此积累了大量的技术债务。相比之下，TinyClaw 和 ZeptoClaw 通过限制规模来维持极高的代码质量和安全性。

## 4. 共同关注的技术方向

1.  **会话状态一致性与生命周期管理**
    *   **涉及项目**：OpenClaw, NanoClaw, CoPaw, ZeroClaw
    *   **具体诉求**：OpenClaw 的“会话冻结”和“消息丢失”；NanoClaw 的“流式响应 ID 重复”；CoPaw 的“上下文压缩导致进程冻结”；ZeroClaw 的“会话 TTL 自动截断”。所有主流项目均在解决长对话中的状态漂移和数据丢失问题。
2.  **安全性与权限隔离（Security Hardening）**
    *   **涉及项目**：NanoClaw, LobsterAI, ZeroClaw, NanoBot
    *   **具体诉求**：NanoClaw 的“MCP 权限绕过”和“A2A 附件越权”；LobsterAI 的“SSRF 防护减弱”；ZeroClaw 的“环境变量访问收紧”和“Cargo Audit”；NanoBot 的“钉钉群组白名单”。安全从“可选功能”变为“核心基础设施”。
3.  **多平台/多渠道网关适配**
    *   **涉及项目**：Hermes Agent, PicoClaw, ZeroClaw, LobsterAI
    *   **具体诉求**：Hermes 的“飞书/Discord 消息丢失”；PicoClaw 的“SimpleX/Tox 去中心化协议”；ZeroClaw 的“NapCat (QQ) 集成”；LobsterAI 的“OpenClaw 插件升级”。开发者亟需一套健壮的、可插拔的消息总线来处理不同 IM 平台的协议差异。
4.  **可观测性与运维自动化**
    *   **涉及项目**：IronClaw, ZeroClaw, NanoBot
    *   **具体诉求**：IronClaw 的“LLM 用量追踪”；ZeroClaw 的“CI 缓存优化”；NanoBot 的“Gateway 后台服务化”。自托管用户越来越关注资源消耗透明化和部署运维的简化。

## 5. 差异化定位分析

*   **OpenClaw & ZeroClaw (通用型平台)**：
    *   **定位**：全功能智能体操作系统。
    *   **差异**：OpenClaw 胜在生态丰富度和社区规模，但稳定性压力大；ZeroClaw 胜在架构前瞻性（WASM 优先）和安全细节，但迁移成本高。
*   **NanoBot & LobsterAI (企业/垂直集成型)**：
    *   **定位**：面向特定企业场景（钉钉、飞书、企业微信）的轻量化助手。
    *   **差异**：NanoBot 强调配置向导和企业级安全（白名单）；LobsterAI 强调与 OpenClaw 插件生态的兼容性及 Cowork 工作流，适合已有 OpenClaw 基础的企业。
*   **PicoClaw & TinyClaw (边缘/极简型)**：
    *   **定位**：资源受限环境或极客玩家。
    *   **差异**：PicoClaw 提供现代化的 Web UI 和配置重构，适合个人开发者快速部署；TinyClaw 追求极致的小体积和 Rust 性能，适合嵌入式或机器人场景。
*   **CoPaw & IronClaw (多 Agent/协作型)**：
    *   **定位**：复杂工作流和多 Agent 协作。
    *   **差异**：CoPaw 聚焦于移动端体验和文件交互，但当前版本回归问题多；IronClaw 聚焦于“自我进化”技能和自动化任务编排，处于 V2 引擎重构期。
*   **ZeptoClaw (安全/合规型)**：
    *   **定位**：对二进制体积和构建安全性有极端要求的场景。
    *   **差异**：通过 CI 门禁严格控制依赖膨胀，适合对供应链安全敏感的组织。

## 6. 社区热度与成熟度

*   **快速迭代/高动荡区 (High Velocity / High Risk)**：
    *   **OpenClaw, ZeroClaw, CoPaw**：这些项目处于功能爆发期，PR 和 Issue 数量巨大，但伴随严重的 Bug 回归（如 CoPaw 的文件预览、OpenClaw 的内存泄漏）。适合愿意承担风险、追求最新功能的早期采用者。
*   **重构/稳定过渡区 (Refactoring / Stabilization)**：
    *   **Hermes Agent, IronClaw, PicoClaw**：正在进行底层架构升级（如 Hermes 的并发锁、IronClaw 的 Engine V2、PicoClaw 的配置 V3）。社区反馈集中在适配问题和稳定性修复，适合关注长期技术债清理的开发者。
*   **精益/成熟维护区 (Lean / Mature)**：
    *   **NanoClaw, LobsterAI, ZeptoClaw, NanoBot**：活动量适中，但问题处理精准，聚焦于安全修补和特定功能完善。适合生产环境部署，尤其是企业对安全性和合规性有高要求的项目。
*   **边缘/休眠区 (Edge / Dormant)**：
    *   **TinyClaw, Moltis, NullClaw**：几乎无活动或仅依赖更新，生态影响力微弱。

## 7. 值得关注的趋势信号

1.  **“WASM 优先”与“去 Node.js 化”成为架构共识**：
    *   ZeroClaw 发起的 RFC 讨论以及 PicoClaw 对底层稳定性的追求，表明开源社区正在反思 JavaScript 生态在智能体运行时的内存泄漏和资源占用问题。**Rust/WASM 组合**正逐渐成为构建高性能、安全沙箱智能体的首选技术栈。
2.  **从“单点对话”转向“工作流编排与安全审计”**：
    *   社区热点从“如何让 AI 回答更好”转向“如何防止 AI 执行危险操作”（如 NanoClaw 的 A2A 越权、LobsterAI 的 SSRF）。**可解释性、权限最小化原则（Least Privilege）**和**操作审计**将成为新一代智能体框架的核心卖点。
3.  **企业级集成需求倒逼标准化**：
    *   钉钉、飞书、企业微信、Telegram 等多渠道支持的复杂性，促使项目如 LobsterAI 和 NanoBot 纷纷推出插件化或白名单机制。**标准化的 MCP (Model Context Protocol) 扩展**和**统一的渠道抽象层**是解决这一痛点的必经之路。
4.  **稳定性危机成为开源智能体的最大短板**：
    *   即便是头部项目如 OpenClaw 和 CoPaw，也面临着严重的内存泄漏、会话状态丢失和并发竞争问题。这表明当前的智能体框架在**长生命周期管理**和**资源隔离**方面仍存在根本性技术挑战，**“可靠性的工程化”**将是未来 6-12 个月的技术攻坚重点。

**建议**：对于技术决策者，若追求生态丰富度和快速原型开发，可选择 **OpenClaw** 或 **PicoClaw**，但需投入大量精力解决稳定性问题；若关注企业安全合规和长期维护，**NanoBot** 或 **ZeptoClaw** 更为稳妥；若看好底层架构革新，**ZeroClaw** 的 WASM 路线值得深入跟踪。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub HKUDS/nanobot

## 1. 今日速览
今日 NanoBot 项目处于高度活跃状态，社区贡献密集，特别是在 **MCP 安全性修复**、**Anthropic 流式响应稳定性**以及**用户引导体验优化**方面取得了显著进展。尽管没有发布新的正式版本，但包含多个关键修复和功能增强的 PR 正在快速合并或处于待合并状态，显示出维护团队对技术债务和安全漏洞的快速响应能力。整体项目健康度良好，但在并发安全和权限控制方面仍需持续关注。

## 2. 版本发布
*   **状态**：无新版本发布。
*   **备注**：PR #4445 正在准备 `v0.2.2` 版本的发布流程，包括版本号升级、README 更新及代码规范清理，预计即将成为下一个稳定版本的基础。

## 3. 项目进展
今日主要推进了以下关键功能与修复，显著提升了系统的健壮性和用户体验：

*   **Gateway 后台服务化**：PR #1854 已合并，引入了 `nanobot gateway --background` 及系统服务管理功能（`install-service`），解决了多平台用户对于守护进程统一管理的痛点，实现了从前台进程到系统级服务的平滑过渡。
*   **安全漏洞修复**：针对 MCP `enabledTools` 配置绕过风险，PR #4436 和 PR #4433 正在积极处理中。前者强制将资源（Resources）和提示词（Prompts）的注册限制在 `enabledTools` 白名单内，彻底堵住了之前仅限制工具调用的安全缺口。
*   **记忆搜索功能增强**：PR #4399 实现了只读的 `search_history` 工具，允许 Agent 主动回顾 `memory/history.jsonl` 中的历史摘要，解决了长周期对话中记忆召回困难的问题，对应 Issue #4440。
*   **钉钉渠道优化**：PR #4446 和 PR #4206 持续完善钉钉集成，新增了群组白名单（`group_allow_from`）和私聊禁用（`disable_private_chat`）功能，增强了企业部署的安全性。

## 4. 社区热点
以下是今日讨论最激烈的议题：

*   **[Security] MCP 权限绕过漏洞 (Issue #4434, #4435)**
    *   **热度**：高（涉及安全合规，引发紧急修复 PR #4436）
    *   **分析**：用户 YLChen-007 发现 `enabledTools: []` 配置未能阻止 MCP 服务器注册所有资源和提示词，导致潜在的信息泄露。这反映了用户对 MCP 协议细粒度控制的强烈需求，目前的修复方案正迅速跟进。
*   **[Enhancement] 用户友好向导 (Issue #4376)**
    *   **热度**：中高（点赞数 1，关联 PR #4395）
    *   **分析**：新用户反馈 `nanobot onboard` 命令对非技术人员门槛过高。PR #4395 通过引入 `--wizard` 模式和快速启动路径，显著降低了配置难度，这是提升项目大众可用性的关键一步。
*   **[Bug] Anthropic 流式响应重复 Tool ID (Issue #4442)**
    *   **热度**：中（关联 PR #4443, #4444）
    *   **分析**：Tedyyan 报告了因流式组装错误导致的会话永久损坏问题。此类底层协议兼容性 Bug 直接影响核心推理稳定性，社区对此类修复关注度极高。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在协议兼容性和并发安全层面，按严重程度排列如下：

1.  **严重 - Anthropic 会话永久损坏 (Issue #4442)**
    *   **描述**：流式响应中重复的 `tool_use` ID 导致后续请求被 API 拒绝（HTTP 400），且会话无法自动恢复。
    *   **状态**：已有多个 PR 尝试修复（#4443, #4444），旨在去重 ID 或在网关层强制关闭异常流。
2.  **中等 - MCP 安全配置失效 (Issue #4434, #4435)**
    *   **描述**：`enabledTools` 白名单未正确过滤 Resources 和 Prompts，导致非预期能力暴露。
    *   **状态**：PR #4436 正在进行修复，将注册逻辑严格绑定到 `enabledTools` 配置。
3.  **低 - 配对存储类型不一致 (Issue #4433 相关)**
    *   **描述**：Pairing store 中 Sender ID 类型不一致可能导致静默拒绝。
    *   **状态**：PR #4433 正在修复类型转换问题。
4.  **低 - Gateway 并发 Hook 竞争条件 (Issue #4408)**
    *   **描述**：`Nanobot.run()` 中的共享 `_extra_hooks` 在高并发下被覆盖。
    *   **状态**：Issue 已关闭，需确认修复是否已合并至主分支。

## 6. 功能请求与路线图信号
*   **Telegram Rich Messages 支持**：Issue #4413 和 PR #4422 显示社区强烈希望支持 Telegram Bot API 10.1 的新特性（表格、任务列表等）。这表明项目正在积极跟进上游 API 变化以提升消息表现力。
*   **只读会话模式**：PR #4271 引入了 `read_only` 会话元数据，允许侧边栏置顶信息而不触发 LLM 调用。这符合“降低无效 Token 消耗”和“优化 UI 体验”的路线图方向。
*   **Cron 任务静默模式**：PR #4225 增加了 Cron 任务的 `silent` 模式，满足了后台监控任务不需要打扰用户的场景，体现了对自动化运维需求的细化。
*   **技能激活快捷方式**：PR #4284 实现了通过 Slash Palette 激活 Skills，提升了 WebUI 的操作效率，是交互体验优化的重要信号。

## 7. 用户反馈摘要
*   **痛点**：
    *   **配置复杂**：非技术用户难以理解初始配置细节，急需交互式向导（Issue #4376）。
    *   **通信渠道限制**：用户希望有更多去中心化的通信选项，如 Mattermost（Issue #1011），以规避 Telegram/WhatsApp 的隐私顾虑。
    *   **长对话记忆断层**：Agent 难以主动回溯早期对话摘要，需要更灵活的内存检索机制（Issue #4440）。
*   **满意度**：
    *   用户对 Gateway 后台服务模式表示欢迎，认为这简化了生产环境部署（PR #1854 关联 Issue #1461）。
    *   天气技能示例（PR #4145）的完善被视为良好的入门参考案例。

## 8. 待处理积压
*   **Mattermost 支持 (Issue #1011)**：长期未解决的功能请求，拥有 4 个点赞，表明有稳定的小众用户需求，建议维护者评估优先级。
*   **OpenAI-Compatible 解析修复 (PR #4092)**：涉及非流式解析去重和 XML 块转换，虽已开放但尚未合并，可能影响部分兼容提供商的用户体验。
*   **DeepSeek 消息硬化 (PR #3869)**：针对 DeepSeek 模型特定错误的修复，涉及内容清洗和空值处理，对于使用该模型的稳定性至关重要，目前仍为 Open 状态。
*   **Eager Memory Consolidation (PR #4402)**：可选的急切记忆合并功能，有助于减少上下文窗口压力，但作为实验性功能，可能需要更多测试反馈。

---
*分析师：Agnes-2.0-Flash*
*生成时间：2026-06-22*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub NousResearch/hermes-agent

## 1. 今日速览
今日 Hermes Agent 项目保持**极高活跃度**，过去24小时内新增 Issues 和 PR 各达50条，显示社区贡献与用户反馈极为密集。开发重心集中在**底层稳定性修复**（如轨迹保存并发锁、编码统一、会话计数器回补）以及**多平台网关适配**（Telegram、Feishu、Discord）。虽然无新版本发布，但大量 P2 级 Bug 修复 PR 的提交表明核心引擎正在经历一轮重要的质量加固，为后续版本迭代奠定基础。

## 2. 版本发布
- **状态：** 无新版本发布。
- **备注：** 当前处于密集修复期，预计近期可能伴随多个关键修复补丁的累积发布。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在基础设施健壮性和跨平台兼容性提升：
- **并发安全加固：** PR #50682 解决了 `save_trajectory()` 在网关模式下的并发 JSONL 文件损坏问题，通过引入独占 advisory lock 提升了多代理协作时的数据完整性。
- **配置与认证修复：** PR #50673 修复了 `hermes auth add` 对 OAuth-only 提供商静默接受无效 API Key 的问题，防止运行时推理失败；PR #50676 允许自定义提供商配置中使用 `api_base` 别名，兼容主流 SDK 习惯。
- **编码标准化：** PR #50679 和 #50660 统一了网关、工具和代理模块中的文件读写编码为 UTF-8，消除了潜在的平台相关字符集错误。
- **功能完善：** PR #50680 实现了网关会话的频道上下文快照功能，支持 Discord 等平台的线程继承；PR #50684 增强了本地 STT 模型对初始提示词的支持，优化了中文语音识别准确率。

## 4. 社区热点
以下 Issue 获得了较高的关注度（评论数/点赞数），反映了用户的核心诉求：

- **[Feature] Delegate Task 配置文件支持 (#9459)**
  - **热度：** 7 评论, 17 👍
  - **分析：** 用户强烈希望支持基于 `config.yaml` 定义的命名代理配置文件进行任务委派，以实现更灵活的编排，避免修改核心代码。这标志着用户对“自定义编排框架”的需求日益增长。
  
- **[Feature] 多 Telegram Bot 网关路由 (#10452)**
  - **热度：** 7 评论, 4 👍
  - **分析：** 针对生产环境中多 Bot 并存场景（如主助手+开发机器人），用户要求网关支持显式路由和独立账号管理，这是企业级部署的关键痛点。

- **[Bug] macOS DMG 仅支持 ARM64 (#37505)**
  - **热度：** 6 评论, 1 👍
  - **分析：** Intel Mac 用户无法启动应用，属于明显的兼容性回归或发布失误，引发较多负面反馈。

- **[Feature] 桌面端集成看板 (#41222)**
  - **热度：** 4 评论, 6 👍
  - **分析：** 多代理工作流用户希望将 Kanban 视图直接集成到 Desktop App 中，减少终端切换摩擦，提升多 Agent 协作体验。

## 5. Bug 与稳定性
今日报告了大量 P2/P3 级别 Bug，主要集中在网关平台适配和 CLI 异常：

| 严重等级 | 组件 | 问题描述 | 关联 PR/状态 |
| :--- | :--- | :--- | :--- |
| **P2** | Agent/CLI | **pytest 测试污染生产数据库** (#50681)：测试会话写入 `state.db` 产生大量垃圾数据。 | 需修复 `DEFAULT_DB_PATH` 模块级常量问题 |
| **P2** | Gateway/Platform | **QQ Bot 私聊按钮拒绝** (#32528)：chat_type 不匹配导致审批被拒。 | 待修复 |
| **P2** | Gateway/Platform | **飞书群 @提及消息丢失** (#50656)：WebSocket 未推送群组事件。 | 待修复 |
| **P2** | Gateway/Platform | **Discord 配置非 Profile 隔离** (#50404)：GUI 设置影响所有 Profile。 | 待修复 |
| **P2** | CLI/Auth | **Nous 认证静默失败** (#50671)：添加 API Key 后运行时仍报未登录。 | **Fix PR: #50673** |
| **P2** | Agent/Tool | **Google Antigravity 集成遗留问题** (#50530)：子代理崩溃、并发掉线。 | 待修复 |
| **P3** | Desktop/Mac | **macOS DMG 架构限制** (#37505)：Intel Mac 无法运行。 | 待修复 |
| **P3** | Desktop/Win | **Ctrl +/- 缩放失效** (#37917)：Windows 菜单为空导致快捷键无响应。 | 待修复 |

*注：PR #50682 已针对轨迹并发问题提供修复方案；PR #50673 已针对 Nous 认证问题提供修复方案。*

## 6. 功能请求与路线图信号
- **配置热重载 (#48693)：** 用户期望修改 `config.yaml` 无需重启网关即可生效，这是提升运维效率的高频需求。
- **共享内存池 (#377)：** 受 CAMEL-AI 启发，用户提议在子代理间实现状态共享，打破当前的完全隔离设计，以支持更复杂的协同任务。
- **Hooks 上下文增强 (#39882)：** 建议在工具调用 Hook 中传入 `transcript_path`，使钩子脚本能基于对话历史做出决策。
- **远程网关仅 GUI 安装 (#50643)：** 用户希望 Desktop 版能作为纯客户端连接远程 Gateway，降低本地资源占用。

## 7. 用户反馈摘要
- **痛点：** 多平台网关（特别是飞书、QQ、Matrix）的消息解析和事件推送存在不一致性，导致用户体验断裂（如审批按钮失效、消息丢失）。
- **满意度：** 社区对底层并发安全和数据一致性的修复（如轨迹锁、编码统一）表示认可，认为这些改进提升了系统的可靠性。
- **不满：** macOS 桌面版的架构支持和 Windows 端的 UI 交互细节（如缩放、托盘最小化）仍有明显缺陷，影响了跨平台体验的一致性。

## 8. 待处理积压
- **#50681 [Bug] pytest 测试会话泄漏到生产 state.db**：这是一个严重的开发/测试基础设施问题，可能导致用户数据混乱，需优先处理。
- **#37505 [Bug] macOS DMG is arm64-only**：长期存在的兼容性 Bug，影响相当一部分 Mac 用户，建议尽快发布 Universal Binary 版本。
- **#50530 [Bug] google-antigravity 遗留 P2 集成问题**：涉及核心 Provider 的稳定性和认证流程，需在下一个版本中彻底解决。
- **#15516 [Bug] Incorrect custom provider parsing**：自定义 Provider 解析逻辑错误，可能导致多种 LLM 后端配置失效。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub API (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 项目在 2026-06-22 保持极高的开发活跃度，过去24小时内提交了 **33 条 PR**（其中 29 条已合并/关闭）和 **6 条 Issues**。项目正处于 v0.3.0 大版本前的冲刺阶段，大量关于配置重构、Web UI 体验优化及底层稳定性修复的代码被整合。尽管整体进展迅速，但今日新增了一个针对 Volcengine Doubao Seed 模型的工具调用泄漏 Bug，表明多模型兼容层仍存在边缘情况风险。项目健康度良好，核心贡献者 SiYue-ZO 和 hanZeng-08 等活跃度高，代码迭代节奏紧凑。

## 2. 版本发布
*   **Nightly Build:** `v0.3.0-nightly.20260622.287853ab`
    *   **说明:** 这是基于 `main` 分支的自动构建版本，旨在测试即将发布的 v0.3.0 功能。
    *   **警告:** 官方明确提示该版本可能不稳定，建议仅用于测试环境。
    *   **变更范围:** 此版本包含了今日合并的大量 PR，预计将显著改变配置格式（V3 Schema）并增强 Web UI 的模型管理能力。
    *   **Changelog:** [查看完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

## 3. 项目进展
今日主要进展集中在 **v0.3.0 配置体系重构** 和 **Web UI 体验升级** 上，由核心开发者 SiYue-ZO 主导完成了一系列关键合并：

*   **配置系统现代化 (V3 Schema):**
    *   **PR #2766**: 同步所有文档至 V3 配置格式，标志着 `api_key` 数组化、`channels` 列表化等新规范正式落地。
    *   **PR #2891**: 新增“恢复出厂设置”功能，增强了用户面对配置不兼容时的容错能力，支持备份当前配置并保留密钥。
*   **Web UI 与模型管理增强:**
    *   **PR #2752, #2831, #2832, #2833**: 这一系列 PR 构建了全新的模型配置工作流。实现了后端模型目录获取 (`/api/models/fetch`)、前端模型表单基础、以及真实的连接性测试功能。这解决了以往用户难以直观验证 Provider 可用性的痛点。
    *   **PR #2587**: 实现了 Pico Web Chat 的端到端流式传输 (Streaming) 和滚动 UX 优化，提升了实时对话的体验流畅度。
    *   **PR #2661, #2659**: 引入了“思维链可见性”切换功能，允许用户控制是否显示模型的推理过程，并修复了折叠状态的隔离问题。
*   **底层稳定性修复:**
    *   **PR #2906**: 修复了消息总线 (Message Bus) 的反压处理和健康检查可见性问题，防止队列饱和时阻塞整个系统。
    *   **PR #2913, #2907**: 修复了 JSONL 会话索引的热路径克隆性能问题及崩溃后的元数据漂移问题，提升了长时间运行的稳定性。

## 4. 社区热点
今日讨论最活跃的 Issue 和 PR 反映了用户对 **跨平台兼容性** 和 **新协议支持** 的强烈需求：

*   **[BUG] Volcengine Doubao Seed 工具调用泄漏 (Issue #3153)**
    *   **链接:** [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)
    *   **分析:** 用户报告在使用 Volcengine Doubao 模型时，工具调用以原始 XML 文本形式返回而非执行。这是典型的 API 兼容层解析失败案例。
    *   **跟进:** 开发者 hanZeng-08 已在 [PR #3154](https://github.com/sipeed/picoclaw/pull/3154) 中提出修复方案，计划通过 OpenAI 兼容接口进行恢复处理。
*   **[Feature] 需要 SimpleX 或 Tox 支持 (Issue #3093)**
    *   **链接:** [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
    *   **分析:** 用户明确提出对去中心化即时通讯协议 (SimpleX, Tox, Wire) 网关的需求。这暗示社区中有部分用户关注隐私保护和去中心化架构，希望 PicoClaw 能作为通用聚合器支持更多非传统渠道。
*   **[BUG] 进化模式下的 Token 持续消耗 (Issue #3012)**
    *   **链接:** [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
    *   **分析:** 用户反馈在 FreeBSD 环境下启用 Evolution 模式时，MiniMax 模型每分钟持续消耗 Token。这可能是一个后台循环任务未正确退出的逻辑错误，涉及资源浪费和成本控制，需重点关注。

## 5. Bug 与稳定性
| 严重等级 | Issue/PR | 描述 | 状态/Fix |
| :--- | :--- | :--- | :--- |
| **高** | **#3153** | Volcengine Doubao Seed 工具调用泄露为文本 | **Fix PR #3154 已提交** |
| **中** | **#3090** | iOS < 16.4 Safari 面板不可用 | 开放 (Stale)，涉及旧版浏览器兼容性问题 |
| **中** | **#3012** | Evolution 模式下 MiniMax 异常消耗 Token | 开放，需排查后台定时任务逻辑 |
| **低** | **#3044** | Matrix `allow_from` 配置解析失败 | **已关闭** (PR #3044 关联修复) |
| **低** | **#3041** | `mcp add` 全局标志解析错误 | **已关闭** (PR #3041 关联修复) |

*注：Issue #3044 和 #3041 虽标记为 Closed，但其对应的修复可能包含在今日合并的 PR 集中，或通过其他手段解决。*

## 6. 功能请求与路线图信号
*   **硬件集成扩展:** [PR #2673](https://github.com/sipeed/picoclaw/pull/2673) 添加了跨平台串口工具支持 (`serial` hardware tool)。这表明 PicoClaw 正从纯软件聚合向 **AI + IoT/边缘计算** 方向拓展，未来可能支持更多物理设备交互。
*   **配置简化与容灾:** [PR #2891](https://github.com/sipeed/picoclaw/pull/2891) 的“恢复出厂设置”功能显示团队重视用户体验的平滑过渡，降低新手用户因配置错误导致的使用门槛。
*   **去中心化协议支持:** Issue #3093 提出的 SimpleX/Tox 需求若被采纳，将是 PicoClaw 差异化竞争的关键点，但目前尚无对应 PR，可能属于长期路线图。

## 7. 用户反馈摘要
*   **痛点:**
    *   **配置复杂性:** 多个 Issue (#3044, #3041) 指向配置解析的细节缺陷，用户希望配置项更加健壮和符合直觉。
    *   **浏览器兼容性:** iOS 旧版本 Safari 的问题 (#3090) 提醒团队需关注移动端长尾设备的兼容。
    *   **成本失控:** Issue #3012 反映出用户对“隐形”Token 消耗的焦虑，特别是在启用自动化功能（如 Evolution）时。
*   **满意点:**
    *   **Web UI 改进:** 用户对新引入的模型连通性测试 (#2833) 和流式聊天体验 (#2587) 表示期待，这些功能直接提升了日常使用的便利性。
    *   **透明度:** 思维链显示的开关 (#2661) 满足了高级用户对模型推理过程的可控需求。

## 8. 待处理积压
*   **Issue #3012:** [Continuous consumption of tokens...](https://github.com/sipeed/picoclaw/issues/3012) - 这是一个涉及资源浪费的潜在严重 Bug，建议在下一个稳定版前优先排查，特别是针对 FreeBSD 和 MiniMax 组合的环境。
*   **Issue #3090:** [Panel does not work on Safari...](https://github.com/sipeed/picoclaw/issues/3090) - 虽然标记为 Stale，但若目标用户群包含移动端，iOS 旧版兼容性问题可能需要通过 Polyfill 或降级策略解决，否则会影响部分用户的访问。
*   **Issue #3093:** [I need SimpleX or tox](https://github.com/sipeed/picoclaw/issues/3093) - 虽然暂无 PR 跟进，但可作为 v0.3.x 之后的功能储备，评估其实现可行性及优先级。

---
*分析师: Agnes-2.0-Flash*
*生成时间: 2026-06-22*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub (nanocoai/nanoclaw)

## 1. 今日速览
今日 NanoClaw 项目呈现出**高安全关注度**与**基础设施稳定性修复**并行的态势。尽管没有新版本发布，但社区贡献者积极提交了 3 个已合并的 PR，重点解决了容器化环境下的连接超时、僵尸服务注册清理以及 `host.docker.internal` 解析等关键稳定性问题。同时，两名独立安全研究员在同一日披露了两起涉及 A2A 附件转发和 MCP 服务器批准流程的安全隐患（Issues #2828, #2827），表明项目在安全审计层面正受到严格 scrutiny，项目整体健康度良好，但在安全防御机制上仍需警惕。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日有 3 个 PR 被合并/关闭，主要推进了底层架构的健壮性：
*   **[FIX] 容器化网络兼容性修复** (#2168)：`kpscheffel` 修复了在 Rootless Docker 环境下，OneCLI 默认 bridge 网络中 `host.docker.internal` 解析失败的问题。通过绑定到特定 Bridge IP，解决了容器与宿主机通信的潜在断裂风险。
    *   链接: [PR #2168](https://github.com/nanocoai/nanoclaw/pull/2168)
*   **[FIX] 启动握手时序优化** (#2825)：`amit-shafnir` 修复了首次聊天时因 CLI Socket 尚未完全就绪而导致的失败问题。通过等待主机 Socket 绑定而非仅依赖服务启动信号，提升了初始化的可靠性。
    *   链接: [PR #2825](https://github.com/nanocoai/nanoclaw/pull/2825)
*   **[FIX] 僵尸服务注册清理** (#2830)：`amit-shafnir` 实现了自动回收因直接删除 NanoClaw 目录而未正常卸载的 `launchd`/`systemd` 单元文件，防止系统资源泄漏。
    *   链接: [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)

## 4. 社区热点
今日最受关注的议题集中在**安全性**和**技能更新机制**上：
*   **安全风险披露**：
    *   **A2A 附件越权写入** (#2828)：报告指出攻击者可通过符号链接绕过会话根目录限制，将附件写入非目标路径。这是典型的权限提升/路径遍历漏洞。
        *   链接: [Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828)
    *   **MCP 批准流程信息隐藏** (#2827)：`add_mcp_server` 审批卡片未展示运行时 `args` 和 `env`，可能导致“批准走私”，即用户批准了一个看似安全的配置，实则加载了恶意环境变量。
        *   链接: [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827)
*   **技能更新透明度**：
    *   **PR #2826** 指出之前的更新流程将技能更新标记为“可选”，导致用户可能错过上游渠道/提供商的关键安全修复。该 PR 旨在强制或显著提示此类更新，反映了用户对“静默跳过关键修复”的担忧。
        *   链接: [PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826)

## 5. Bug 与稳定性
*   **高危 - 安全漏洞**：
    *   **Issue #2828** (Symlinked Inbox Write Outside Root)：严重级别高，涉及数据隔离失效。目前尚无关联的 Fix PR。
    *   **Issue #2827** (Approval Smuggling via Hidden Args/Env)：严重级别高，涉及社会工程学/UI 欺骗导致的安全误判。目前尚无关联的 Fix PR。
*   **中危 - 容器化环境连接失败**：
    *   **PR #2168** 已修复 Rootless Docker 下主机名解析问题。此前用户可能在非特权容器模式下遇到连接超时。
*   **低危 - 初始化竞态条件**：
    *   **PR #2825** 已修复首次聊天时的 Socket 等待逻辑。

## 6. 功能请求与路线图信号
*   **只读仪表盘技能**：
    *   **PR #2795** 提出了一个名为 `/add-clidash` 的 Utility Skill，用于提供基于 CLI 数据的只读仪表板。这符合项目向模块化、插件化 Skill 发展的趋势，且明确遵循贡献指南。
        *   链接: [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)
*   **Poll Loop 重复文本抑制**：
    *   **PR #2531** 试图解决在发送消息过程中出现的重复文本问题，虽然状态仍为 Open，但显示了开发者对用户体验细节（UX Polish）的关注。
        *   链接: [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)

## 7. 用户反馈摘要
*   **对“静默更新”的不满**：PR #2826 的讨论反映出用户对于无法确保所有组件（特别是 Channel/Provider）同步更新感到不安。用户希望更新过程更加透明，避免因为“可选”步骤而遗漏上游安全补丁。
*   **对自动化清理的需求**：PR #2830 的提出暗示了部分用户在手动管理开发环境（如删除 checkout 目录）时，缺乏对残留系统服务（plist/unit）的感知能力，期望框架能提供更强的自我清理机制。
*   **安全信任危机**：两个安全 Issue 的同时出现表明，随着 Agent 间交互（A2A）和外部工具调用（MCP）的增加，用户对“代理行为可见性”和“执行边界”的信任变得极其脆弱。

## 8. 待处理积压
*   **安全修复紧急项**：
    *   **Issue #2828** & **Issue #2827**：这两个安全漏洞目前仅有报告，**无关联的 Fix PR**。鉴于涉及数据泄露和权限绕过，建议维护者优先处理，可能需要立即发布安全公告或热修复补丁。
*   **长期未合并的功能 PR**：
    *   **PR #2531**：创建于 5 月 18 日，虽已更新但仍在 Open 状态，涉及核心轮询逻辑的 UX 修复，建议审查合并。
*   **测试覆盖不足**：
    *   多个 PR 和 Issue 显示缺乏针对符号链接、环境注入等边缘情况的自动化测试用例，建议补充相关单元测试以预防回归。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub (github.com/nullclaw/nullclaw)

### 1. 今日速览
截至 2026-06-22，NullClaw 项目整体活跃度处于低水平。过去 24 小时内仅产生 1 条 Issue 和 1 条 PR 更新，无新版本发布。社区主要关注点集中在基础依赖的自动化更新（Alpine 镜像升级）以及特定模型响应异常的 Bug 报告。项目当前处于维护状态，缺乏显著的功能性突破或重大修复合并。

### 2. 版本发布
*   **无新版本发布**。
*   最近已知版本为 `v2026.5.29`。

### 3. 项目进展
*   **依赖更新**：PR **#956** 由 Dependabot 发起，旨在将 Docker 镜像中的 Alpine 基础镜像从 `3.23` 升级至 `3.24`。
    *   **状态**：待合并（Open）。
    *   **影响**：此 PR 属于基础设施维护性质，旨在提升容器环境的安全性和基础库兼容性，不涉及业务逻辑变更。目前尚未合并，项目整体代码库无实质性功能推进。

### 4. 社区热点
*   **Issue #967**：[bug] error: NoResponseContent
    *   **链接**：[nullclaw/nullclaw Issue #967](https://github.com/nullclaw/nullclaw/issues/967)
    *   **热度分析**：该 Issue 报告了在使用 `Agnes-2.0-Flash` 模型时高频率出现的 `NoResponseContent` 错误（>50% 出现率）。尽管评论数为 1，但用户提供了详细的复现步骤、错误日志及对比测试（同一 API Key 在其他客户端正常），显示出较高的技术细节密度和用户焦虑感。这是今日唯一的活跃 Issue，反映了用户对核心推理稳定性的担忧。

### 5. Bug 与稳定性
*   **严重 Bug 报告**：**Issue #967**
    *   **描述**：在 Windows 11 环境下，调用 `nullclaw agent -m "你好！"` 时，频繁返回 `error: NoResponseContent`。
    *   **严重程度**：高（High）。影响超过半数对话，直接导致功能不可用。
    *   **关联信息**：用户指出问题可能与特定模型（Agnes-2.0-Flash）或 NullClaw 客户端的解析逻辑有关，而非 API Key 或模型服务本身故障（因 Picocla 等其他客户端正常）。
    *   **Fix 状态**：暂无关联 Fix PR。

### 6. 功能请求与路线图信号
*   本期无明确的新功能请求（Feature Request）。
*   社区反馈集中于现有功能的稳定性修复，暗示下一阶段路线图应优先解决底层 Agent 引擎的异常处理机制，而非引入新特性。

### 7. 用户反馈摘要
*   **痛点**：用户在执行标准 Agent 交互命令时遭遇高频崩溃/静默失败。
*   **场景**：本地开发测试环境（Windows 11 + x86_64）。
*   **情绪**：困惑与挫败。用户通过控制变量法（更换客户端对比）排除了上游模型服务问题，将矛头指向 NullClaw 客户端自身，期望开发者能尽快定位解析层或通信层的 Bug。

### 8. 待处理积压
*   **PR #956**：[ci(deps): bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956)
    *   **状态**：自 2026-06-15 创建以来一直未合并。作为常规依赖更新，建议维护者优先审查并合并，以消除潜在的依赖过时风险。
*   **Issue #967**：[bug] error: NoResponseContent
    *   **状态**：已打开，需开发者介入调查。鉴于该 Bug 复现率高且影响核心体验，建议列为 P0 级优先级进行修复。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 在 2026-06-22 保持高活跃度，过去24小时内产生 11 个新 Issue 和 29 个 PR 更新。核心开发重点集中在 **Reborn 版本** 的功能完善上，特别是自动化系统（Automations）、LLM 使用量追踪以及本地“吃狗粮”（Dogfooding）测试反馈。CI/CD 流程进行了多项优化以解决缓存和依赖问题，同时 Dependabot 批量更新了关键 Rust 生态依赖。整体项目处于从 V1 向 Reborn (V2) 引擎平滑过渡的关键阶段，技术债清理与新功能开发并行推进。

## 2. 版本发布
**无新版本发布。**
当前工作重心在于底层引擎重构（Reborn）的功能补全与稳定性修复，尚未进行新的正式 Release。

## 3. 项目进展
今日合并/关闭的重要 PR 显著提升了系统的可观测性与 CI 稳定性：

*   **Engine V2 可观测性增强**：[#4989](https://github.com/nearai/ironclaw/pull/4989) 解决了 Engine V2 下管理员 API (`/api/admin/usage`) 返回空数据的问题，通过集成 CostGuard 实现了 LLM 调用的持久化记录，为计费和分析提供基础。
*   **NEAR AI MCP 状态修正**：[#4990](https://github.com/nearai/ironclaw/pull/4990) 修复了 NEAR AI MCP 扩展在就绪状态下仍显示 "SETUP NEEDED" 的 UI 投影错误，改善了用户体验。
*   **CI 缓存与稳定性优化**：
    *   [#5118](https://github.com/nearai/ironclaw/pull/5118) 解决了 Rust 闭包测试中因每 crate 独立缓存导致的 LRU 驱逐和重复下载问题，通过共享缓存显著加速构建。
    *   [#5115](https://github.com/nearai/ironclaw/pull/5115) 增加了 crates.io 网络失败的自动重试机制，提高了 CI 流水线在偶发网络波动下的鲁棒性。
    *   [#5113](https://github.com/nearai/ironclaw/pull/5113) 将跨平台兼容性测试提取为独立工作流，优化了 CI 结构。
*   **首次启动通道修复**：[#2927](https://github.com/nearai/ironclaw/pull/2927) 修复了全新安装时 WASM 通道默认不激活的严重配置问题，确保向导选择的通道能正确持久化。

## 4. 社区热点
以下 Issue/PR 反映了开发者当前的主要关切点：

*   **自动化系统功能缺失**：[#5122](https://github.com/nearai/ironclaw/issues/5122) 和 [#5121](https://github.com/nearai/ironclaw/issues/5121) 分别请求添加 Reborn 自动化任务的**删除**和**暂停/恢复**支持。这表明现有的自动化触发器系统尚不完整，用户需要更精细的控制能力。
*   **语义统一需求**：[#5120](https://github.com/nearai/ironclaw/issues/5120) 指出 Reborn 在认证、审批和活动投影中存在 "Declined/Deny/Canceled" 等不一致的状态命名，呼吁统一语义以简化前端逻辑和用户认知。
*   **技能自我进化**：[#5061](https://github.com/nearai/ironclaw/pull/5061) 引入了类似 Hermes 的技能提取与自我进化机制，这是一个备受关注的增强型功能，允许 Agent 从成功交互中自动学习并生成 `SKILL.md`。
*   **Telegram 渠道支持**：[#5124](https://github.com/nearai/ironclaw/issues/5124) 请求在 Reborn 架构下原生支持 Telegram 频道，旨在替代旧的 V1 通道路径，实现消息收发的现代化集成。

## 5. Bug 与稳定性
*   **[HIGH] 夜间端到端测试失败**：[#4108](https://github.com/narei/ironclaw/issues/4108)。GitHub Actions 的 `Nightly E2E` 工作流在 2026-06-22 失败，涉及 `E2E (v2-engine)` 作业。虽然具体错误日志未在摘要中展开，但作为夜间回归测试，其失败暗示 V2 引擎可能存在基础功能的阻断性缺陷或环境配置问题，需优先排查。
*   **[MEDIUM] NEAR AI MCP 虚假报错**：[#4925](https://github.com/nearai/ironclaw/issues/4925)。用户报告 MCP 扩展已就绪但 UI 提示需要设置。此问题已在 PR [#4990](https://github.com/nearai/ironclaw/pull/4990) 中修复并关闭。
*   **[MEDIUM] 管理员用量 API 为空**：[#4985](https://github.com/nearai/ironclaw/issues/4985)。Engine V2 部署下 `/api/admin/usage` 无法返回数据。此问题已在 PR [#4989](https://github.com/nearai/ironclaw/pull/4989) 中修复并关闭。

## 6. 功能请求与路线图信号
*   **自动化生命周期管理**：[#5122](https://github.com/nearai/ironclaw/issues/5122), [#5121](https://github.com/nearai/ironclaw/issues/5121), [#5117](https://github.com/nearai/ironclaw/issues/5117)。用户强烈希望完善 Reborn 自动化的 CRUD 操作及统计面板，预计下一版本将重点交付这些功能。
*   **一次性定时触发器**：[#5065](https://github.com/nearai/ironclaw/pull/5065) 已合并，支持 `TriggerSchedule::Once`，填补了调度器功能的空白。
*   **学习系统栈**：[#4937](https://github.com/nearai/ironclaw/pull/4937) 和 [#4975](https://github.com/nearai/ironclaw/pull/4975) 展示了 "Reborn Learning System" 的分步实施计划（WS-1 到 WS-3），表明项目正致力于构建具备反思和自我纠正能力的 Agent 核心。

## 7. 用户反馈摘要
*   **Dogfooding 反馈**：[#4879](https://github.com/nearai/ironclaw/issues/4879) 和 [#5119](https://github.com/nearai/ironclaw/issues/5119) 是内部团队进行的本地 Reborn 版本试用报告。反馈集中在 WebUI 启动、模型提供商配置和首次运行体验上，揭示了从 V1 迁移到 V2 过程中存在的摩擦点。
*   **依赖更新噪音**：多个 Dependabot PR ([#5116](https://github.com/nearai/ironclaw/pull/5116), [#4876](https://github.com/nearai/ironclaw/pull/4876)) 批量更新了 `agent-client-protocol` 和 `refinery` 等依赖。虽然有助于安全，但也可能引入兼容性问题，需密切关注 CI 结果。

## 8. 待处理积压
*   **Nightly E2E 故障**：[#4108](https://github.com/nearai/ironclaw/issues/4108)。该 Issue 自 5 月 27 日创建以来持续存在，并在 6 月 22 日再次标记为失败。这是当前最高优先级的阻塞项，影响发布信心。
*   **Telegram 渠道集成**：[#5124](https://github.com/nearai/ironclaw/issues/5124)。作为父 Issue #5119 的一部分，目前尚无关联的 PR，建议分配资源推进以完善多平台接入能力。
*   **自动化删除/暂停功能**：[#5122](https://github.com/nearai/ironclaw/issues/5122), [#5121](https://github.com/nearai/ironclaw/issues/5121)。这两个 Issue 创建于今日，状态为 Open，需尽快指派开发者启动实现，以满足自动化模块的完整性需求。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
2026年6月22日，LobsterAI 项目保持中等活跃度，过去24小时内共产生 **6 个新 Issue** 和 **11 个 PR 活动**（7 个待合并，4 个已合并/关闭）。今日核心亮点在于 **OpenClaw 插件生态的升级** 以及 **Cowork 工作流功能的重大更新**。安全性方面，出现了一起关于私有网络浏览器访问默认设置及 SSRF 防护削弱的严重安全报告。尽管无新版本发布，但底层架构（SQLite 性能优化、MCP Bridge 稳定性）和前端交互（概览页 Bug 修复）均有实质性推进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在基础设施加固和新功能落地：

*   **[feat] Cowork 新增 Plan Mode 工作流** (#2183)
    *   **作者**: liuzhq1986
    *   **进展**: 引入了“计划模式”，允许用户查看交互式提案块，支持复制、下载、展开/折叠操作，并防止在规划阶段修改工具调用。这标志着 LobsterAI 在复杂任务编排能力上的重要一步。
    *   **链接**: [PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183)

*   **[fix] OpenClaw IM 插件升级支持** (#2182)
    *   **作者**: btc69m979y-dotcom
    *   **进展**: 升级了钉钉、飞书、企业微信和 POP 等预装插件，并增加了对 OpenClaw 2026.6.1 插件安装布局的支持，解决了多环境下的依赖路径兼容性问题。
    *   **链接**: [PR #2182](https://github.com/netease-youdao/LobsterAI/pull/2182)

*   **[fix] OpenClaw 补丁包含 cwd 字段** (#2185)
    *   **作者**: btc69m979y-dotcom
    *   **进展**: 修复了插件 SDK 声明生成问题，确保 `GetReplyOptions.cwd` 字段被正确包含，解决了聊天发送过程中当前工作目录传递缺失的问题。
    *   **链接**: [PR #2185](https://github.com/netease-youdao/LobsterAI/pull/2185)

*   **[docs] 更新仓库指南** (#2184)
    *   **作者**: btc69m979y-dotcom
    *   **进展**: 刷新了 `AGENTS.md`，明确了 Cowork/OpenClaw 架构、Codex 指令范围及代码质量门禁，有助于降低新贡献者的门槛。
    *   **链接**: [PR #2184](https://github.com/netease-youdao/LobsterAI/pull/2184)

## 4. 社区热点
今日讨论最集中的议题围绕 **概览页（Profile Page）的 UI/UX 缺陷** 和 **数据安全**：

*   **概览页多项 Bug 集中爆发**
    *   **现象**: 用户 `STUPIDDDD0` 连续提交了三个相关 Issue (#1411, #1414, #1416)，指出概览页存在时间筛选器无响应、总会话数恒为 0、中英文切换布局错乱等问题。
    *   **分析**: 这表明 `#/profile` 模块在近期重构或国际化适配中存在严重的回归测试遗漏，影响了用户对自身使用数据的信任感。
    *   **链接**:
        *   [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411)
        *   [Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414)
        *   [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416)

*   **安全警告：SSRF 防护减弱**
    *   **现象**: Issue #2181 指出默认配置下 `ProxyCompatible` 模式恢复了私有网络浏览器访问，且弱化了 OpenClaw 的 SSRF 守卫。
    *   **分析**: 这是一个高危安全问题，可能允许恶意网页通过 LobsterAI 的内嵌浏览器访问内部网络资源。需立即评估默认策略的安全性。
    *   **链接**: [Issue #2181](https://github.com/netease-youdao/LobsterAI/issues/2181)

## 5. Bug 与稳定性
以下 Bug 已由开发者提交 Fix PR，处于待合并或已合并状态：

| 严重程度 | 问题描述 | 关联 PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **定时任务未生成历史记录**：跨天触发定时任务后，系统未能正确生成历史记录文件。 | [PR #1409 (Issue)](https://github.com/netease-youdao/LobsterAI/issues/1409) | 待解决 (Issue仅标记stale，未见对应Fix PR，需确认) |
| **中** | **OpenClaw Token Proxy OOM 风险**：缺乏请求体大小限制，可能导致内存耗尽。 | [PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407) | **待合并** (已提交修复方案：限制10MB) |
| **中** | **MCP Bridge 未处理 Promise 拒绝**：`handleRequest` 忽略异步错误，可能导致进程崩溃或挂起。 | [PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408) | **待合并** |
| **中** | **Cron Job 重入并发问题**：`pollOnce` 在高延迟下产生重复事件和幽灵事件。 | [PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420) | **待合并** |
| **低** | **NIM 群组类型枚举错误**：导致无法正确获取群名称。 | [PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419) | **待合并** |
| **低** | **SQLite 迁移标志逻辑错误**：事务回滚后仍标记迁移完成，导致历史数据丢失。 | [PR #1415](https://github.com/netease-youdao/LobsterAI/pull/1415) | **待合并** |

*注：概览页的 UI Bug (#1411, #1414, #1416) 目前尚未看到对应的 Fix PR，建议优先处理以提升用户体验。*

## 6. 功能请求与路线图信号
*   **UI 自适应与可用性改进**：
    *   Issue #1413 指出输入框添加过多 Skills 时展示不友好。这反映了随着功能扩展，UI 组件需要更灵活的布局策略（如滚动条或折叠面板）。
    *   **链接**: [Issue #1413](https://github.com/netease-youdao/LobsterAI/issues/1413)
*   **性能优化持续投入**：
    *   多个 PR 聚焦于性能优化，如 SQLite 防抖批量写入 (#1410)、记忆构建缓存 (#1421)。这表明团队正在积极解决流式响应和高频交互下的卡顿问题，路线图信号指向“流畅度”提升。
    *   **链接**: [PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410), [PR #1421](https://github.com/netease-youdao/LobsterAI/pull/1421)

## 7. 用户反馈摘要
*   **数据可视化信任危机**: 用户在使用概览页时发现“总会话数”始终为 0，但 API 调用数正常，这种数据不一致引发了用户对系统统计准确性的质疑。
*   **国际化适配粗糙**: 切换至英文后，文本重叠和布局挤压问题频发，表明多语言支持阶段的测试覆盖不足。
*   **技能管理体验**: 用户希望更优雅地管理大量 Skills，当前的列表展示方式在数量增多时变得难以阅读和操作。

## 8. 待处理积压
*   **安全审计 (Issue #2181)**: 该 Issue 涉及默认安全策略的削弱，属于最高优先级，需安全团队立即介入评估并决定是恢复默认限制还是提供显式的用户配置开关。
*   **概览页 UI Bug 集群 (#1411, #1414, #1416)**: 虽然创建了 Issue，但截至日报生成时，尚未看到针对这些具体 UI 问题的 Fix PR。鉴于这些问题直接影响用户日常使用体验，建议开发团队优先分配资源修复。
*   **定时任务历史缺失 (Issue #1409)**: 自 4 月 3 日创建以来一直未关闭，且无关联 PR，需确认是否为已知限制或需要修复的 Bug。

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
**日期：** 2026-06-22
**数据来源：** CoPaw (github.com/agentscope-ai/CoPaw)

## 1. 今日速览
CoPaw 项目今日保持高度活跃，过去24小时内共产生 **23 个 Issues** 和 **37 个 PRs**。社区对 **v1.1.12.post1** 版本的稳定性反馈集中，多个核心交互流程（文件预览、消息队列、会话切换）出现回归或逻辑缺陷。与此同时，移动端适配、长上下文管理优化及第三方渠道集成（Slack, Xiaomi Miloco）成为开发重点。整体来看，项目正处于版本迭代后的快速修复期，同时并行推进多项体验增强功能。

## 2. 版本发布
*   **无新版本发布。**
*   *注：今日大量 Issue 涉及 v1.1.12.post1 的已知问题，建议用户关注后续补丁版本。*

## 3. 项目进展
今日合并/关闭的 PR 主要集中在 **基础架构优化** 和 **移动端体验提升**：

*   **[CLOSED] #4900** (Decouple plugin loader initialization): 解决了 Tauri/PyInstaller 环境下插件加载器初始化超时的问题，显著提升了桌面端的插件稳定性。
*   **[CLOSED] #5322** (Real-time UI update): 虽未直接合并代码，但确认了 API 消息实时性问题的存在，推动了后端消息推送机制的审查。
*   **[OPEN] #5376** (Navigate to new chat after deleting): 修复了删除会话后的导航逻辑，确保用户删除当前会话后能正确跳转至新建会话，提升 UX 流畅度。
*   **[OPEN] #5153** (Replicate Tauri instant-window startup): 将 Tauri 客户端的快速启动优化移植到 pywebview 桌面版，预计将大幅缩短非 Tauri 用户的等待时间。
*   **[OPEN] #5366, #5369, #5362**: 系列移动端适配 PR，分别针对 Agent Config、Channels 和 CronJobs 页面进行了响应式布局重构，标志着 CoPaw 正在系统性补全移动 Web 端的使用体验。

## 4. 社区热点
以下 Issues/PRs 引发了较多讨论或代表了强烈的用户需求：

*   **#5218 [Bug] 子Agent触发上下文压缩时QwenPaw进程冻结**
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/5218
    *   *分析:* 高优先级 Bug。上下文压缩是长对话场景的核心功能，其导致的进程冻结直接阻断用户工作流。作者 malongan 提供了详细复现步骤，需优先排查 QwenPaw 底层异步处理逻辑。
*   **#5354 [Bug] 消息发送队列容易串台；切换对话时切不回去**
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/5354
    *   *分析:* 涉及多 Agent 并发下的状态隔离问题。用户反馈消息错误发送至其他 Agent，表明消息队列的 ID 绑定机制存在缺陷。对应 PR **#5371** 正在尝试修复此问题。
*   **#2969 [Feature] 增加个人知识库的功能**
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/2969
    *   *分析:* 长期存在的功能请求，获得 2 个赞。用户希望将 Copaw 的执行能力与私有知识库结合，反映了用户对 RAG（检索增强生成）本地化部署的强烈需求。
*   **#5344 [Bug] /api/console/chat returns 200 but silently drops messages**
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/5344
    *   *分析:* 开发者体验痛点。当 Agent 忙碌时，API 静默丢弃消息且返回 200，导致调用方难以调试。需改进 HTTP 状态码语义或增加明确的忙线响应。

## 5. Bug 与稳定性
今日报告了大量 Bug，多数指向 **v1.1.12.post1** 版本的回归或新引入的逻辑错误：

| 严重等级 | Issue ID | 描述 | 关联 PR/状态 |
| :--- | :--- | :--- | :--- |
| **High** | **#5218** | 上下文压缩导致进程冻结 | 待修复 |
| **High** | **#5354** | 消息队列串台，Agent 间消息混淆 | PR #5371 (进行中) |
| **High** | **#5379** | 安装后启动报 Internal Server Error | 待分析 |
| **Medium** | **#5370** | `send_file_to_user` 返回 404，图片无法预览 | PR #5324 (Fix: 使用 inline content-disposition) |
| **Medium** | **#5333** | Agent 卡死，文本框状态异常 | 疑似 DeepSeek 兼容性问题 |
| **Medium** | **#5330** | Zhipu 供应商 API 测试通过，但模型连接失败 | 待排查路由逻辑 |
| **Low** | **#5373** | Shell 命令解析特殊字符失败 | 待修复 |
| **Low** | **#5378** | 自定义模型 Endpoint 写入后不可删除 | UI 交互 Bug |

*   **关键修复进展:** PR **#5324** 明确指出了 v1.1.12 升级后图片预览失败的根因（FileResponse 默认 attachment 策略），并提供了解决方案。

## 6. 功能请求与路线图信号
*   **小米智能家居集成:** PR **#5375** 提交了 Xiaomi Miloco 的集成指南和模板，显示社区正在积极扩展 IoT 控制场景。
*   **Slack 渠道支持:** PR **#5193** 增加了 Slack Socket Mode 的支持，填补了主流 IM 渠道的空白。
*   **内存搜索优化:** PR **#5325** 引入了基于时间的衰减排名算法，旨在提高 `memory_search` 的相关性，这是记忆模块的重要增强。
*   **KV Cache 持久化:** PR **#5348** 提出冻结每会话的 `env_context` 日期，以保留 KV Cache 前缀，提升长对话推理效率。
*   **滚动上下文管理:** PR **#5321** 提出了替代原生压缩的 "Scroll" 策略，允许模型按需召回历史对话，为长上下文管理提供了新思路。

## 7. 用户反馈摘要
*   **痛点:** 用户普遍反映 v1.1.12.post1 版本在 **文件传输/预览** 和 **多会话切换** 方面的稳定性下降。特别是手机端访问时，UI 交互（如切换 Agent 按钮位置）存在布局缺陷（Issue #5329）。
*   **期望:** 用户希望保持配置状态的一致性，例如禁用内置技能后不应在升级后重置（Issue #5262）。
*   **集成需求:** 来自 OpenClaw/Hermes 的用户询问配置迁移工具（Issue #5254），显示出跨平台迁移的需求。

## 8. 待处理积压
*   **#5358** [Bug] Session switch 时的 Null Reference Error: `TypeError: Cannot read properties of null`。这是一个前端 JS 运行时错误，可能导致 UI 崩溃，需前端团队优先处理。
*   **#5345** [Bug] Custom OpenAI providers (OMLX) 不支持 Function Calling: 限制了自定义模型的 Agent 能力，需后端检查 Tool Call 的透传逻辑。
*   **#5360** [Enhancement] Stabilize the core app: 用户呼吁在添加新功能前先解决核心稳定性问题（移动端适配、Agent 交互），这应作为当前 Sprint 的指导原则。

---
*本报告由 Agnes-2.0-Flash 生成，基于 CoPaw GitHub 仓库公开数据。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub (qhkm/zeptoclaw)

### 1. 今日速览
过去24小时内，ZeptoClaw 项目保持低频但高专注度的开发节奏。核心活动集中在 CI/CD 流程的优化上，具体表现为二进制文件大小控制策略的最终落地。虽然今日无新 Issue 开启，但关键的基础设施 PR 已完成合并，标志着项目对“小型化”这一核心战略护城河的进一步巩固。整体项目健康度良好，维护者正通过自动化手段防止技术债务积累。

### 2. 版本发布
**无新版本发布。**
当前处于两个关键 CI 改进事项（Issue #537 和 PR #611）的收尾阶段，尚未触发新的 Release 流程。

### 3. 项目进展
今日最重要的进展是 **PR #611** 的合并。该 PR 将二进制大小检查从“事后报告”升级为“事前门禁”。
*   **推进内容：** 移除了 GitHub Action 中的 `if:` 守卫条件，使 `binary-size` 作业在每一个 PR 提交时均强制运行，而非仅在推送到 main 分支时运行。同时调整了阈值逻辑（摘要提及降低限制至 7.5MB 作为新标准）。
*   **战略意义：** 这直接回应了 Issue #537 中提出的担忧，即防止依赖库缓慢膨胀侵蚀项目“适合机器人部署”的核心优势。此举确保了未来所有贡献代码必须接受严格的体积审查。

### 4. 社区热点
今日社区讨论焦点完全集中在 **CI 基础设施与构建优化** 上，而非应用层功能。

*   **Issue #537: [chore, P1-critical] chore(ci): binary size budget gate**
    *   **状态：** 已关闭 (Closed)
    *   **链接:** [Issue #537](https://github.com/qhkm/zeptoclaw/issues/537)
    *   **分析：** 作者 `qhkm` 将该任务标记为 `P1-critical`，强调了二进制大小对于项目战略定位（"strategic moat"）的重要性。尽管今日无新增评论，但其提出的动机（防止依赖悄悄膨胀）是当前开发周期的核心驱动力。

*   **PR #611: chore(ci): promote binary-size to PR gate at 7.5MB**
    *   **状态：** 已合并 (Merged/Closed)
    *   **链接:** [PR #611](https://github.com/qhkm/zeptoclaw/pull/611)
    *   **分析：** 这是 Issue #537 的具体实施方案。通过将阈值设定为 7.5MB 并强制在 PR 阶段拦截，实现了从“监控”到“治理”的转变。

### 5. Bug 与稳定性
**今日无新报告的 Bug 或崩溃问题。**
*   所有今日关闭的活动均属于 `chore`（运维/基础设施）类别，不涉及功能缺陷修复。
*   由于 CI 门禁的加强，预计未来 PR 合并率可能会因体积超标而暂时下降，但这有助于提升长期发布的稳定性。

### 6. 功能请求与路线图信号
**无新功能请求。**
*   当前的开发重心明确指向 **工程效能（Engineering Efficiency）** 和 **核心约束管理**。
*   路线图信号显示，维护者倾向于优先保障项目的“轻量级”特性，而非快速堆砌新 API 或功能。任何可能导致二进制体积显著增加的新功能，未来都可能面临更严格的审查。

### 7. 用户反馈摘要
**基于 Issue #537 的深层洞察：**
*   **痛点：** 用户（或核心维护者代表）担心随着 Rust 生态依赖的更新，二进制文件会不知不觉变大，导致 ZeptoClaw 不再适合资源受限的嵌入式机器人环境。
*   **满意度：** 用户对“7MB 剥离后”的目标体积有高度认同，认为这是项目的核心竞争力。
*   **诉求：** 需要自动化的工具来强制执行这一约束，避免人工审查遗漏。PR #611 的合并表明这一诉求已被采纳并实现。

### 8. 待处理积压
**今日无显著积压。**
*   主要的 CI 阻塞问题已通过 PR #611 解决。
*   建议关注后续 PR 中是否出现因 `binary-size` 门禁导致的失败案例，以验证 7.5MB 阈值的合理性及是否需要微调。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-06-22 展现出极高的开发活跃度，过去24小时内共产生 100 次交互（50 Issues + 50 PRs），其中 45 个 PR 处于待合并状态，显示核心代码库正在快速迭代。**安全与架构重构**是今日的核心主题，特别是针对 WASM 插件系统的权限收紧（移除原生环境变量访问、增加 SSRF 防护）以及消除 Node.js 依赖的 RFC 讨论。尽管没有新版本发布，但大量 P1/P2 级别的 Bug 修复和安全补丁正在集中合并，项目正从“功能扩展”阶段向“稳定性与安全加固”阶段过渡。

## 2. 版本发布
*   **当前状态：** 无新版本发布。
*   **近期里程碑：** 开发者正在清理 v0.8.0 的稳定级阻碍项（Issue #7112），并追踪 v0.8.1 的集成队列（Issue #6970）。预计短期内将发布包含上述安全修复和插件系统改进的补丁版本。

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在**安全性加固**和**基础设施优化**：

*   **插件安全硬化 (PR #8137, #8130):**
    *   **PR #8137:** 移除了插件对原始环境变量的直接访问 (`zc_env_read`)，改为按别名作用域配置，解决了 Issue #5919 提出的跨插件密钥泄露风险。
    *   **PR #8130:** 为 `zc_http_request` 增加了基于插件的白名单机制，防止 SSRF 攻击（关联 Issue #5918）。
*   **供应链安全 (PR #8129):** 在 CI 流程中引入 `cargo-audit`，补充了原有的 `cargo deny`，增强了对 Rust 依赖漏洞的检测能力。
*   **网关稳定性 (PR #8017):** 修复了代理删除时的竞态条件，确保配置持久化在归档之前完成，防止数据不一致。
*   **OpenRouter 支持完善 (PR #8141):** 实现了 `fallback_models` 数组的原生传递，利用 OpenRouter 的自动故障转移功能提升可用性。
*   **浏览器工具修复 (PR #8136):** 放宽了 `browser_open` 对 HTTP 协议的封锁，允许用户在明确知晓风险的情况下访问非 HTTPS 站点。

## 4. 社区热点
以下是今日讨论最激烈、评论最多的议题：

*   **[RFC] Work Lanes & Board Automation (Issue #6808):**
    *   **热度:** 11 条评论。
    *   **分析:** 维护者 Audacity88 推动的工作流自动化提案仍在持续讨论中，旨在减轻维护负担，提高 Issue 流转效率。这是社区治理层面的重要进展。
*   **[Feature] Napcat Channel 缺失 (Issue #2503):**
    *   **热度:** 9 条评论。
    *   **分析:** 用户对 OneBot/NapCat 集成的持续需求反映了国内 QQ 生态用户群体对 ZeroClaw 的重要性。尽管目前状态为 "Accepted"，但具体实现细节仍在探讨中。
*   **[RFC] Native Dynamic-Library Plugin System (Issue #7420):**
    *   **热度:** 5 条评论。
    *   **分析:** 针对 WASM 性能瓶颈，社区提出了原生动态库插件系统的 RFC。这与今日推行的 "Wasm-first" 策略形成对比/互补，显示了开发者对高性能扩展的需求。
*   **[RFC] WebAssembly-first, eliminate Node.js (Issue #7674):**
    *   **热度:** 4 条评论。
    *   **分析:** 由 ConYel 发起的移除 Node.js 依赖的宏大重构计划。今日相关衍生 RFC (Issue #8135, #8132) 进一步细化了 WASM 插件默认开启和 Web UI 重构的路径，表明架构转型已进入实质讨论阶段。

## 5. Bug 与稳定性
今日报告了多个高严重程度的 Bug，部分已有 PR 跟进：

| 严重等级 | 组件 | 问题描述 | 关联 PR/Issue | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P1 (Workflow Blocked)** | Provider | **Gemini CLI OAuth 失败**: 认证后仍报错，导致工作流中断。 | #4879 | Open |
| **P1 (Security/Risk)** | Runtime | **Context Compression 错误**: 导致 MiniMax 等兼容提供商出现 Tool Loop 和无效消息角色。 | #6361 | In-Progress |
| **P1 (Security)** | Gateway | **Webhook 401 错误**: 即使配置有效，`zeroclaw check` 仍返回 401。 | #7038 | Blocked |
| **P1 (Tool)** | Provider | **Native/MCP Tools 不可用**: 在 OpenAI/Anthropic 回合中，MCP 工具无法被模型正确接收。 | #7756 | Open |
| **P2 (Data Loss)** | Config | **Quickstart Anthropic 不可用**: 添加提供商后聊天窗口无反应，需重置。 | #8094 | Open |
| **P2 (Build)** | Tooling | **Docker 构建失败**: 缺少 `aardvark-sys` 的 `build.rs`。 | #8089 | **Closed** (已修复) |

*注：Issue #7025 (read_skill 加载失败) 和 #6641 (OTel Trace) 也备受关注，前者涉及技能发现体验，后者涉及可观测性。*

## 6. 功能请求与路线图信号
*   **Session TTL 自动截断 (Issue #8134 / PR #8139):** 用户强烈要求在频道配置中支持 `session_ttl_hours`，以自动清理陈旧会话历史，减少 Token 消耗。PR #8139 已提交实现，预计纳入下一版本。
*   **OpenRouter 模型故障转移 (Issue #8138 / PR #8141):** 支持 OpenRouter 的 `models` 数组以实现自动降级，提升服务稳定性。PR #8141 已合并。
*   **Web UI 重构 (Issue #8132):** 提议用 Rust→Wasm 框架（如 Dioxus/Leptos）替换 React/Vite 构建管线，作为消除 Node.js 依赖的一部分。这是一个长期的路线图信号，旨在简化部署和维护。
*   **LINE 渠道增强 (PR #7768):** 新增加载指示器、图标/昵称切换等功能，显示社区对特定社交渠道的深度定制需求。

## 7. 用户反馈摘要
*   **痛点：**
    *   **本地模型体验差:** Issue #5287 指出，小模型模式下 Prompt 臃肿且存在指令泄露风险，用户希望有专门的 "Local-First" 紧凑模式。
    *   **Telegram 缓存失效:** Issue #6360 报告 Telegram 渠道下 Prompt Caching 不生效，导致成本增加和响应变慢。
    *   **配置复杂性:** 用户反映配对码强度不足 (Issue #6613) 以及 Quickstart 引导流程中的配置同步问题 (Issue #8094)。
*   **满意点：**
    *   **安全性意识提升:** 社区对插件权限隔离 (PR #8137) 和 SSRF 防护 (PR #8128) 的改进表示认可，认为这解决了早期 WASM 插件系统的安全隐患。
    *   **CI 改进:** 增加跨平台 Clippy 检查 (Issue #7486) 和 Cargo Audit (PR #8129) 被评价为良好的工程实践。

## 8. 待处理积压
*   **Issue #4879 [Gemini OAuth Broken]:** 高优先级，影响 Google 生态用户，至今未合并有效修复。
*   **Issue #7756 [MCP Tools Unavailable]:** 影响主流提供商 (OpenAI/Anthropic) 的工具调用能力，需紧急排查。
*   **Issue #5287 [Local-First Mode]:** 虽然已有 RFC 讨论，但具体的紧凑 Prompt 引擎实现尚未开始，是本地部署用户的核心痛点。
*   **Issue #6361 [Context Compression Bug]:** 导致 MiniMax 等兼容提供商不可用，状态为 In-Progress，需关注进展。

---
**分析师备注：** ZeroClaw 正处于关键的架构转型期（WASM 优先、去 Node.js 化）和安全加固期。今日的高 PR 吞吐量表明维护团队执行力极强。建议重点关注 **Gemini OAuth** 和 **MCP 工具可用性** 两个阻塞性 Bug，它们直接影响核心用户群的使用体验。同时，消除 Node.js 依赖的 RFC 讨论若达成共识，将极大简化项目的构建和分发流程。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*