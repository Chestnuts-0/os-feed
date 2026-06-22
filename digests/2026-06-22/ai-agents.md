# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-22 10:22 UTC

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
**数据来源：** GitHub openclaw/openclaw

## 1. 今日速览
OpenClaw 项目在 2026-06-22 保持极高的社区活跃度，过去 24 小时内产生 500 条 Issue 更新和 500 条 PR 更新，显示开发者与用户群体深度参与核心逻辑的迭代。项目刚发布 `v2026.6.10-beta.2`，重点引入了对话“快速模式”及更可靠的路由机制，但社区反馈显示该版本及其前序版本（如 6.9）存在严重的内存泄漏、会话状态同步错误及数据迁移回归问题。整体来看，项目功能扩展迅速，但稳定性与生产环境的健壮性（特别是长运行会话和跨提供商故障转移）面临严峻挑战，维护团队正密集修复关键路径上的阻塞性 Bug。

## 2. 版本发布
**新版本：** `v2026.6.10-beta.2`

*   **亮点功能：**
    *   **自动快速模式 (Automatic fast mode)：** 针对简短对话回合启用快速处理模式，长对话则回退至正常模式，具备边界控制与交付行为保障。（Issue #85104）
    *   **更可靠的路由：** 优化了模型路由机制（提及 Zai 相关改进）。
*   **潜在风险与反馈：**
    *   尽管发布了新 Beta，但 Issue #95495 指出上一版本 `2026.6.9` 存在严重回归：静默重定位内存存储且无迁移警告，导致全量重新嵌入（1499 文件），建议用户谨慎升级并关注存储路径兼容性。

## 3. 项目进展
今日 PR 活动高度集中于修复核心会话管理、消息传递可靠性及 UI/UX 细节。重要推进包括：

*   **会话恢复与状态修复：**
    *   [#89039](https://github.com/openclaw/openclaw/issues/89039)：修复 `EmbeddedAttemptSessionTakeoverError` 导致的静默消息丢失，解决 SDK 重试期间会话写锁释放的问题。
    *   [#89045](https://github.com/openclaw/openclaw/issues/89045)：恢复在可见入站回合中的终端会话状态，解决群组聊天陷入 `failed` 状态后消息被丢弃的问题。
    *   [#88992](https://github.com/openclaw/openclaw/issues/88992)：修复 `message_tool_only` 模式下被遗弃的回复恢复问题。
*   **CLI 与 UI 增强：**
    *   [#94368](https://github.com/openclaw/openclaw/issues/94368)：Control UI 新增 Cron Job ID 显示及运行状态指示。
    *   [#95700](https://github.com/openclaw/openclaw/issues/95700)：为 `/new` 命令增加命名支持，并新增 `/close` 和 `/delete` 会话管理命令。
    *   [#94517](https://github.com/openclaw/openclaw/issues/94517)：CLI 新增 `openclaw devices rename` 命令，支持人性化设备名称管理。
*   **基础设施与安全：**
    *   [#95691](https://github.com/openclaw/openclaw/issues/95691)：**已合并**：升级 `dompurify` 以修复安全漏洞 (GHSA-cmwh-pvxp-8882)。
    *   [#66444](https://github.com/openclaw/openclaw/issues/66444)：修复 systemd 环境单元迁移中的回归问题。

## 4. 社区热点
以下 Issue 评论数较多，反映了当前社区最关注的痛点：

*   **[Critical] Gateway 内存泄漏导致 OOM 崩溃** [#91588](https://github.com/openclaw/openclaw/issues/91588)
    *   **热度：** 13 评论，👍 1
    *   **分析：** RSS 从 350MB 飙升至 15.5GB，引发反复重启。这是影响生产稳定性的最高优先级问题，直接关联到系统的可用性。
*   **[Bug] Session write-lock timeouts 阻塞子代理通道** [#86538](https://github.com/openclaw/openclaw/issues/86538)
    *   **热度：** 13 评论
    *   **分析：** 主线程、Cron 嵌套及子代理通道因 JSONL 写入锁超时而阻塞，导致交付失败。涉及复杂的并发控制逻辑。
*   **[Feature] 支持 PostgreSQL 替代 SQLite** [#90370](https://github.com/openclaw/openclaw/issues/90370)
    *   **热度：** 11 评论，👍 2
    *   **分析：** 用户强烈呼吁解耦存储后端，以利用 pgvector 等企业级功能，避免资源浪费和数据孤岛。
*   **[Bug] 嵌入式 Runner 思考签名无效** [#92201](https://github.com/openclaw/openclaw/issues/92201)
    *   **热度：** 11 评论
    *   **分析：** Anthropic 流式思考块在重放时签名间歇性无效，且错误文本被泛化导致恢复包装器未触发。

## 5. Bug 与稳定性
今日报告了大量 P1/P0 级别的稳定性问题，主要集中在会话生命周期、消息传递和提供商兼容性上：

*   **P0/Critical:**
    *   **#91588:** Gateway 严重内存泄漏 (RSS 增长至 15.5GB)。
    *   **#95623:** Tool-use ID 清洗器遗漏 OpenAI 复合 ID，导致跨提供商故障转移时 Anthropic 400 错误。
    *   **#95495:** 版本升级静默迁移内存存储，导致全量重新嵌入（回归 Bug）。
*   **P1 (高严重):**
    *   **#86538:** Session 写入锁超时阻塞子代理交付。
    *   **#92043:** Compaction 超时设置不合理，导致合法长会话被错误中断。
    *   **#92460:** 隔离 Cron 完成公告丢弃 delivery.channel 配置，导致投递失败。
    *   **#91363:** 隔离 Cron 始终在 `model-call-started` 阶段失败。
    *   **#91804:** 内部推理过程泄露 (Reasoning Leakage)，隐私回归问题。
    *   **#91212:** 网关重启后投递恢复失败，消息静默丢失。
    *   **#89278:** Codex OAuth 刷新成功但 Cron/心跳因 10s 超时失败。
*   **P2 (中等):**
    *   **#90354:** 预压缩内存刷新的追加语义缺乏边界验证。
    *   **#92076:** 请求者会话非活跃时，子代理完成投递失败。
    *   **#92415:** `/model` 切换后 `AgentSession.this.model` 快照未刷新。
    *   **#93807:** `web_fetch` 忽略 `NO_PROXY` 环境变量。
    *   **#94032:** `exec` 私有 LAN 访问失败。

**注意：** 大量 Bug 涉及 `clawsweeper` 标签，表明自动化测试或扫描工具识别出了形状不清晰或缺少修复 PR 的问题，需人工介入决策。

## 6. 功能请求与路线图信号
*   **存储后端解耦：** Issue #90370 (PostgreSQL 支持) 和 Issue #95724 (按目录索引记忆而非按代理) 显示用户希望更灵活地管理底层存储和向量索引，以减少冗余并提升性能。
*   **高级会话管理：** Issue #90916 请求“Topic-session families”，允许单个助手拥有多个隔离上下文通道，这符合复杂工作流的需求。
*   **Telegram 能力扩展：** Issue #54794 (Inline Query 支持) 和 PR #94384 (语音输入提示) 显示 Telegram 渠道的功能增强是近期重点。
*   **Kubernetes 文档优化：** Issue #91455 指出 K8s 部署指导不够清晰，可能需要更完善的 Helm Chart 或官方示例。

## 7. 用户反馈摘要
*   **痛点：**
    *   **稳定性焦虑：** 用户对“静默消息丢失”、“OOM 崩溃”和“会话状态不同步”感到极度困扰，尤其是在生产环境中。
    *   **调试困难：** 多个 Issue 提到错误信息过于泛化（如 #92201, #92460），或日志被重定向到 `/dev/null`（#90711），导致难以定位根因。
    *   **升级恐惧：** #95495 反映出用户对版本升级缺乏透明度和向后兼容性的担忧。
*   **满意点：**
    *   社区对 `clawsweeper` 自动标记问题的效率表示认可，但也希望更明确的修复指引。
    *   新发布的“快速模式”和路由改进受到技术用户的关注。

## 8. 待处理积压
*   **#86538 & #91588:** 这两个高评论数的关键 Bug 目前均标记为 `clawsweeper:no-new-fix-pr`，意味着尚未有直接的修复 PR 提交，或者现有 PR 未被采纳。作为 P0/P1 问题，需优先分配资源。
*   **#90370 (PostgreSQL Support):** 长期存在的功能请求，目前仍为 `needs-product-decision`，产品团队需评估是否将其纳入路线图。
*   **#75299 (Starvation Guard):** 关于优先级队列饥饿保护的 PR 已开放较久，需维护者审查合并。
*   **#66444 (Systemd Migration):** 基础设施修复 PR 等待作者提供证明或维护者审核。

**总结：** OpenClaw 正处于功能快速迭代期，但稳定性基石尚不牢固。建议维护者优先处理内存泄漏和消息传递可靠性相关的 P0/P1 问题，并加强对版本升级的数据迁移保护机制。

---

## 横向生态对比

# 2026-06-22 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
2026年6月下旬，个人 AI 助手与自主智能体开源生态呈现**“功能极速迭代”与“生产级稳定性焦虑”并存**的特征。OpenClaw、Hermes Agent、NanoClaw 等项目正处于版本密集发布期，核心竞争焦点已从基础对话能力转向**多代理协作（Multi-Agent）**、**边缘计算轻量化**及**底层运行时安全（WASM/权限隔离）**。尽管社区活跃度极高，但内存泄漏、会话状态同步及配置漂移等工程化痛点已成为阻碍大规模生产部署的主要瓶颈，行业正从“Demo 驱动”向“鲁棒性驱动”过渡。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.6.10-beta.2 | ⚠️ **高风险** | 功能激进，但 P0/P1 级内存泄漏和会话丢失问题严重，稳定性堪忧。 |
| **NanoBot** | 9 | 33 | v0.2.2 (Pre-release) | ✅ **良好** | 收敛期，重点修复 Anthropic 流式错误和 MCP 安全，即将稳定发布。 |
| **Hermes Agent** | 50 | 50 | 无 (v0.17.0 后) | ⚠️ **中等** | 大量回归 Bug 需处理（Discord/Cron/CLI），处于稳定性强化期。 |
| **PicoClaw** | ~5 | ~34 | v0.3.0-nightly | ✅ **良好** | 高频重构，底层基础设施（消息总线/配置）优化迅速，响应快。 |
| **NanoClaw** | 2 (Sec) | 4 | 无 | ⚠️ **需警惕** | 安全审计密集，A2A 和 MCP 审批流程存在严重逻辑漏洞。 |
| **NullClaw** | 1 | 1 | 无 | ❌ **停滞** | 极低活跃度，仅依赖更新，存在严重模型兼容性 Bug 未解决。 |
| **IronClaw** | ~10 | ~10 | 无 (Reborn 内测) | ✅ **良好** | 聚焦性能优化（Dogfooding）和自动化控制，工程化程度高。 |
| **LobsterAI** | 6 | 12 | 无 | ⚠️ **中等** | 插件生态修复迅速，但存在 SSRF 安全隐忧和 UI 统计 Bug。 |
| **CoPaw** | 22 | 50 | 无 | ⚠️ **中等** | 移动端适配和内存管理压力大，进程冻结等阻塞性 Bug 较多。 |
| **ZeptoClaw**| 0 | 2 | 无 | ✅ **极佳** | 极简主义，严格二进制控制，无功能噪音，工程纪律性强。 |
| **ZeroClaw** | 50 | 50 | 无 (v0.8.x 冲刺) | ✅ **良好** | 安全与运行时现代化（WASM）为核心，社区治理 RFC 活跃。 |
| **TinyClaw** | 0 | 0 | 无 | ❌ **无活动** | 过去24小时零动态。 |
| **Moltis** | 0 | 0 | 无 | ❌ **无活动** | 过去24小时零动态。 |

## 3. OpenClaw 在生态中的定位

*   **市场地位**：**生态领导者与“痛苦中心”**。OpenClaw 拥有极高的社区声量（500+ Issue/PR），是事实上的行业标准参考系，但其庞大的用户基数也使其成为所有已知 Agent 框架痛点的集中体现者。
*   **技术路线差异**：
    *   **vs. NanoBot/Hermes**：OpenClaw 更侧重于**通用网关（Gateway）**和**复杂路由/故障转移**，而 NanoBot 偏向轻量级 IM 集成，Hermes 侧重 CLI/Desktop 体验。
    *   **vs. ZeroClaw/ZepotoClaw**：OpenClaw 是重型全功能栈，包含记忆、工具、多代理；ZeroClaw 则通过 WASM 实现插件沙箱隔离，ZeptoClaw 追求极致二进制精简，三者不在同一重量级赛道。
*   **社区规模**：远超其他项目，Issue 和 PR 数量呈指数级领先，但**信噪比低**，大量重复性 Bug 报告拉低了有效开发效率。

## 4. 共同关注的技术方向

1.  **会话状态管理与持久化可靠性**
    *   **涉及项目**：OpenClaw, Hermes Agent, CoPaw, LobsterAI
    *   **具体诉求**：解决“静默消息丢失”、“会话重置无感知”、“Cron 任务上下文断裂”等问题。用户急需强一致性的存储后端（如 OpenClaw 社区的 PostgreSQL 呼声）和可靠的会话恢复机制。

2.  **插件/工具调用的安全与权限隔离**
    *   **涉及项目**：NanoClaw, ZeroClaw, LobsterAI, PicoClaw
    *   **具体诉求**：防止 MCP 服务器权限绕过（NanoClaw #2827）、SSRF 攻击（LobsterAI #2181, ZeroClaw PR #8130）、以及敏感数据泄露。WASM 沙箱（ZeroClaw）和严格的审批流程成为主流解决方案。

3.  **多代理（Multi-Agent）协作与路由**
    *   **涉及项目**：OpenClaw, NanoBot, CoPaw, IronClaw
    *   **具体诉求**：子代理（Sub-agent）的模型预设、跨代理消息传递、以及自动化工作流（如 IronClaw 的 Reborn 引擎）的稳定性。用户希望实现更复杂的任务分解与执行闭环。

4.  **移动端与多端一致性体验**
    *   **涉及项目**：CoPaw, PicoClaw, NanoBot
    *   **具体诉求**：CoPaw 集中修复移动端 UI 错乱；PicoClaw 优化 Web Chat 流式传输；NanoBot 增强钉钉/Telegram 的企业级 IM 体验。跨平台适配成为刚需。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw/Hermes**：全能型，覆盖 CLI、Desktop、Web、多 IM 渠道，适合重度定制用户。
    *   **NanoBot/PicoClaw**：嵌入式/边缘侧友好，PicoClaw 甚至支持硬件串口，NanoBot 聚焦 IM 渠道深度集成。
    *   **IronClaw/ZeroClaw**：企业级/生产级导向，IronClaw 强调自动化与工作流引擎，ZeroClaw 强调安全隔离与 WASM 插件生态。
    *   **ZeptoClaw**：极致轻量，服务于资源受限的机器人或嵌入式场景。

*   **目标用户**：
    *   **OpenClaw**：高级开发者、Agent 框架研究者、对稳定性容忍度较高的早期采用者。
    *   **NanoBot/PicoClaw**：需要快速接入特定 IM（钉钉/Telegram）或边缘设备的中小团队。
    *   **IronClaw/ZeroClaw**：关注生产环境稳定性、安全性和自动化运维的企业用户。
    *   **CoPaw**：注重多端体验（特别是移动端）和个人知识库管理的普通用户。

*   **技术架构**：
    *   **OpenClaw/Hermes**：单体或紧耦合微服务，依赖复杂的会话状态机。
    *   **ZeroClaw**：Micro-kernel + WASM 插件，强调隔离性。
    *   **NanoBot**：模块化 Gateway，侧重 IM 协议适配。
    *   **ZeptoClaw**：Rust 编写，极致优化二进制体积。

## 6. 社区热度与成熟度

*   **快速迭代/混沌期（High Activity, Low Stability）**：
    *   **OpenClaw, Hermes Agent**：Issue 爆炸，大量回归 Bug，处于“边跑边修鞋”的阶段。功能强大但生产环境风险极高。
    *   **CoPaw**：移动端适配带来大量 UI Bug，进程冻结等核心问题未解。

*   **收敛/稳定期（Moderate Activity, High Quality）**：
    *   **NanoBot, PicoClaw**：PR 合并率高，Bug 修复响应快（如 PicoClaw 的 Token 消耗修复），即将或刚刚完成版本发布，适合寻求稳定体验的用户。
    *   **IronClaw**：内部 Dogfooding 发现问题并快速修复，工程化流程成熟。

*   **垂直/精益期（Low Noise, High Focus）**：
    *   **ZeroClaw, ZeptoClaw**：社区讨论集中在架构设计和安全规范，无噪音 Issue，适合对特定技术指标（安全/体积）有严格要求的场景。

*   **停滞/维护期（Low Activity）**：
    *   **NullClaw, TinyClaw, Moltis**：缺乏活力，存在已知严重 Bug 未修复，不建议新项目依赖。

## 7. 值得关注的趋势信号

1.  **“信任边界”的重构**：ZeroClaw 和 NanoClaw 的安全审计表明，**插件系统的权限控制**已成为继“模型能力”之后的第二竞争高地。未来 Agent 框架必须内置类似 WASM 沙箱或严格的 MCP 审批机制，否则将被企业用户排斥。
2.  **从“对话”到“工作流”**：IronClaw 的 Reborn 引擎和 OpenClaw 的“快速模式/路由”显示，单纯的自然语言对话已无法满足需求，**结构化任务执行、自动化触发（Cron）、多代理协作**是下一代 Agent 的核心形态。
3.  **存储后端的解耦**：OpenClaw 和 Hermes 社区对 PostgreSQL 和企业级存储的强烈呼声，预示着**向量数据库/关系型数据库的灵活切换**将成为标配，以解决 SQLite 在并发和高负载下的性能瓶颈。
4.  **移动端体验的觉醒**：CoPaw 和 NanoBot 的移动端修复表明，**“随时随地”的 Agent 交互**不再是锦上添花，而是用户留存的关键。UI 的响应式设计和离线/弱网下的状态同步（如 CoPaw 的队列串台修复）将是重点攻坚方向。
5.  **Lite 版与 Edge 计算的崛起**：ZeptoClaw 和 PicoClaw 的成功证明，在资源受限环境（机器人、边缘设备）中，**二进制体积小、启动快、内存占用低**的 Agent 框架具有独特的生存空间和商业价值。

**建议**：技术决策者在选择框架时，若追求功能全面且能容忍一定稳定性风险，可选 OpenClaw；若关注生产安全与企业级自动化，IronClaw 和 ZeroClaw 更具潜力；若需快速集成特定 IM 或边缘部署，NanoBot 和 PicoClaw 是更佳选择。避免使用 NullClaw 等停滞项目。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub HKUDS/nanobot

## 1. 今日速览
NanoBot 在 2026-06-22 保持高活跃度，过去24小时内共产生 9 个 Issue 和 33 个 PR 更新。项目正处于 **v0.2.2** 版本发布前夕，核心开发重点集中在提升系统稳定性（特别是 Anthropic 流式响应去重和 MCP 安全加固）以及优化用户体验（上下文窗口默认值调整、钉钉渠道增强、初始化向导改进）。虽然无正式 Release 标签更新，但大量 PR 已合并或准备就绪，显示代码库正在快速收敛以支持新版本发布。

## 2. 版本发布
*   **当前状态**：无新正式版本发布。
*   **预发布活动**：PR #4445 正在准备 **v0.2.2** 版本发布流程，包括版本号 bump、README 更新及依赖清理。预计该版本将包含今日大部分已合并的安全修复和功能增强。

## 3. 项目进展
今日主要进展体现在基础设施加固与渠道扩展上：
*   **Gateway 稳定性增强**：PR #4447 修复了 Gateway 生命周期中的边缘情况，确保后台进程状态管理更可靠，解决了停止失败时的状态不一致问题。
*   **MCP 安全与资源管理**：PR #4436 和 #4441 解决了 MCP 服务器注册资源的权限绕过漏洞及连接断开时的运行时错误，显著提升了多平台集成的安全性与健壮性。
*   **渠道功能深化**：PR #4446 为钉钉（DingTalk）增加了私有聊天限制和群聊提及功能，PR #4206 已合并了群组白名单功能，进一步丰富了企业级 IM 集成能力。
*   **配置优化**：PR #4448 将默认上下文窗口从 65k 提升至 **200k** tokens，更好地适配现代长上下文模型；PR #4398 优化了 WebUI 设置页面的刷新性能。

## 4. 社区热点
*   **[Security] MCP 权限绕过漏洞** (Issue #4435, #4434)
    *   **链接**：[Issue #4435](https://github.com/HKUDS/nanobot/issues/4435), [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434)
    *   **分析**：用户 `YLChen-007` 报告了 `enabledTools` 配置项未能有效屏蔽 MCP 资源和 Prompt 的严重安全隐患。这引发了社区对配置安全性的关注，目前已有对应 Fix PR #4436 正在处理。
*   **Telegram Rich Messages 支持** (Issue #4413, #4422)
    *   **链接**：[Issue #4413](https://github.com/HKUDS/nanobot/issues/4413), [Issue #4422](https://github.com/HKUDS/nanobot/issues/4422)
    *   **分析**：随着 Telegram Bot API 10.1 引入富文本格式，用户强烈要求支持原生渲染（表格、任务列表等）。Issue #4422 已提交相关实现 PR，反映了用户对高质量消息格式的迫切需求。
*   **用户友好型初始化向导** (Issue #4376, PR #4395)
    *   **链接**：[Issue #4376](https://github.com/HKUDS/nanobot/issues/4376), [PR #4395](https://github.com/HKUDS/nanobot/pull/4395)
    *   **分析**：针对新用户技术门槛高的问题，社区呼吁简化 `onboard` 流程。PR #4395 已合并了改进后的 Wizard 逻辑，降低了非技术用户的上手难度。

## 5. Bug 与稳定性
*   **Anthropic 流式响应重复 Tool ID 导致会话中断** (Issue #4442)
    *   **链接**：[Issue #4442](https://github.com/HKUDS/nanobot/issues/4442)
    *   **严重性**：**高**。流式解析错误导致 `tool_use` ID 重复，引发 API 400 错误并使会话永久失效。
    *   **状态**：已有多个 PR 尝试修复，包括 PR #4444 (dedupe tool_use ids) 和 PR #4443 (guard against duplicate)。需确认最终合并方案。
*   **DeepSeek 提供商消息硬编码问题** (PR #3869)
    *   **链接**：[PR #3869](https://github.com/HKUDS/nanobot/pull/3869)
    *   **严重性**：**中**。DeepSeek API 对 null 内容或特定占位符敏感，导致 400 错误或异常输出。PR 正在处理内容清洗逻辑。
*   **MCP 连接崩溃** (PR #4441)
    *   **链接**：[PR #4441](https://github.com/HKUDS/nanobot/pull/4441)
    *   **严重性**：**中**。MCP 服务器重连失败时导致 Gateway 抛出 `RuntimeError` 崩溃。PR 旨在强制关闭生成器以恢复稳定。

## 6. 功能请求与路线图信号
*   **历史记忆搜索工具** (Issue #4440, PR #4439)
    *   **链接**：[Issue #4440](https://github.com/HKUDS/nanobot/issues/4440), [PR #4439](https://github.com/HKUDS/nanobot/pull/4439)
    *   **信号**：用户希望从 `memory/history.jsonl` 中检索早期对话摘要，而非仅依赖当前上下文窗口。PR #4439 提出了一个只读的 `search_history` 工具，这可能成为 v0.2.2 或后续版本的核心记忆增强功能。
*   **子代理模型预设** (PR #4291)
    *   **链接**：[PR #4291](https://github.com/HKUDS/nanobot/pull/4291)
    *   **信号**：允许子代理使用不同于父代理的模型预设，增强了多代理架构的灵活性和成本优化潜力。
*   **Mattermost 集成** (Issue #1011)
    *   **链接**：[Issue #1011](https://github.com/HKUDS/nanobot/issues/1011)
    *   **信号**：长期存在的对 Mattermost 集成的需求，目前仍为 Open 状态，暂无近期进展迹象。

## 7. 用户反馈摘要
*   **痛点**：
    *   **配置复杂性**：新用户觉得 `nanobot onboard` 需要过多技术细节，缺乏引导式体验（Issue #4376）。
    *   **会话稳定性**：在使用 Anthropic 模型时，偶发的流式解析错误会导致整个会话“变砖”，严重影响用户体验（Issue #4442）。
    *   **隐私与合规**：用户担忧 Telegram 和 WhatsApp 的数据隐私，倾向于寻找 Mattermost 等更可控的平台（Issue #1011）。
*   **满意点**：
    *   **上下文窗口扩容**：默认 200k 上下文的提议获得了积极反响，满足了长文档处理的需求（PR #4448）。
    *   **渠道细化控制**：钉钉的群聊白名单和私有聊天禁用功能满足了企业用户对权限管理的细致要求（PR #4446, #4206）。

## 8. 待处理积压
*   **Mattermost Bot 集成** (Issue #1011)
    *   **链接**：[Issue #1011](https://github.com/HKUDS/nanobot/issues/1011)
    *   **状态**：Open (Stale)。创建于 2026-02-22，长期无人认领。建议维护者评估是否将其纳入未来渠道支持路线图，或关闭以清理积压。
*   **DeepSeek 消息硬化** (PR #3869)
    *   **链接**：[PR #3869](https://github.com/HKUDS/nanobot/pull/3869)
    *   **状态**：Open。自 2026-05-16 创建以来尚未合并，可能涉及复杂的边界情况处理，需尽快 Review 以避免更多用户遇到 400 错误。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-22
**数据来源：** NousResearch/hermes-agent GitHub

## 1. 今日速览
Hermes Agent 项目今日保持高活跃度，过去24小时内共产生50条 Issue 和 50 条 PR 更新。尽管没有新版本发布，但社区贡献者密集修复了多个关键组件的严重 Bug，特别是 **Cron 调度器**、**CLI 配置持久化** 以及 **Gateway 会话状态管理** 方面。整体来看，项目正处于针对 v0.17.0 版本上线后的稳定性强化期，大量 PR 专注于解决升级带来的回归问题和长期存在的架构缺陷。

## 2. 版本发布
- **无新版本发布。**
- **注意：** 社区报告 v0.17.0 (v2026.6.19) 存在 Discord 按钮交互失效及任务执行上下文残留等问题，预计后续补丁将集中解决此类回归 Bug。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在底层稳定性和功能完善：
- **Cron 调度器修复 (Priority P1/P2)：** 多个 PR (#50112, #50062, #33361) 解决了 Cron 作业在长时间执行后陷入“跳过循环”导致永不执行的严重 Bug，并修复了 Profile 作用域下 Job 存储路径错误的问题。
- **工具集隔离修复 (Priority P1)：** PR #50109 修复了当禁用特定平台 Bundle 时，误删核心工具定义导致 Gateway 和 CLI 功能瘫痪的问题。
- **上下文压缩逻辑优化 (Priority P1/P2)：** PR #49579 和 #50726 修正了仅减少 Token 数量但未减少消息行数时的压缩判定逻辑，防止误报上下文耗尽。
- **桌面端体验改进：** PR #50731 引入了类似 PR 的文件编辑 Diff 视图，提升了 Desktop 端代码审查体验。

## 4. 社区热点
以下是今日讨论最活跃的 Issue 及其背后的用户诉求：

1.  **[Bug] Desktop build fails after update** (#47917)
    -   **热度：** 21 条评论，2 👍
    -   **分析：** 用户反映在应用 PR #47276 修复后，再次拉取最新代码构建仍失败，原因是 Electron 二进制缓存被意外清除。这表明构建系统的缓存清理逻辑存在竞态条件或路径配置错误，严重影响开发者体验。
    -   **链接：** [Issue #47917](https://github.com/NousResearch/hermes-agent/issues/47917)

2.  **[Feature] Web Dashboard: multi-profile switching support** (#10674)
    -   **热度：** 6 条评论，2 👍
    -   **分析：** 用户强烈呼吁在 Web Dashboard 中支持多 Profile 切换，目前单进程绑定单一 `HERMES_HOME` 的设计在多租户或多环境测试场景下造成极大不便。
    -   **链接：** [Issue #10674](https://github.com/NousResearch/hermes-agent/issues/10674)

3.  **[Bug] Cron jobs created from a profile-scoped agent session go to a jobs.json the gateway never reads** (#32091)
    -   **热度：** 4 条评论
    -   **分析：** 揭示了 Profile 隔离机制下的一个隐蔽缺陷：非默认 Profile 创建的 Cron Job 被写入本地目录，而 Gateway 始终读取全局目录，导致“静默孤儿”作业。
    -   **链接：** [Issue #32091](https://github.com/NousResearch/hermes-agent/issues/32091)

4.  **[Bug] /restart bricks a launchd-managed gateway on macOS** (#43475)
    -   **热度：** 4 条评论
    -   **分析：** macOS 用户反馈 `/restart` 命令导致服务退出码为 0，从而被 `launchd` 视为成功退出而不重启，破坏了守护进程的自恢复能力。
    -   **链接：** [Issue #43475](https://github.com/NousResearch/hermes-agent/issues/43475)

5.  **[Bug] v0.17.0: Discord MESSAGE_COMPONENT button interactions broken** (#50627)
    -   **热度：** 1 条评论 (新报告)
    -   **分析：** 升级至 v0.17.0 后，Discord 消息组件按钮交互失效，返回授权错误。这是典型的版本回归 Bug，需紧急关注。
    -   **链接：** [Issue #50627](https://github.com/NousResearch/hermes-agent/issues/50627)

## 5. Bug 与稳定性
今日报告了大量涉及稳定性、内存安全和配置解析的 Bug：

-   **CLI 崩溃与异常退出：**
    -   **#33485:** Honcho hybrid memory 模式下，CLI 关闭时可能残留线程导致 `SIGABRT` (Exit 134)。
    -   **#30387:** `hermes -z` 模式成功响应后在关闭阶段崩溃，误导脚本认为执行失败。
    -   **#48316:** Windows (GBK) 环境下 Dashboard 启动因编码问题崩溃。
-   **配置与状态管理：**
    -   **#50698:** `hermes config set` 命令会清除 `config.yaml` 中的所有注释和模板块，破坏用户文档习惯。
    -   **#50681:** `pytest` 测试意外写入生产 `state.db`，产生大量空壳会话，根因是模块级常量 `DEFAULT_DB_PATH` 在导入时冻结。
    -   **#50671:** `hermes auth add` 创建死凭证，运行时无法解析，导致推理调用失败。
-   **Gateway 与会话：**
    -   **#43008:** 会话空闲过期后静默重置，Agent 和用户均无感知，导致上下文丢失。
    -   **#46563:** Desktop 端 WebSocket 断开后，Pinned 聊天记录在前端消失（虽数据库中存在）。
    -   **#50688:** 升级 v0.17 后，任务被静默跳过或 stale context 导致子代理重复触发。
-   **平台适配器：**
    -   **#50733:** QQBot 适配器在单次传输层重连失败后永久挂起，无重试上限。
    -   **#50732:** Slack 适配器的 `mention_patterns` 配置被文档记录但实际被忽略。

*注：上述多个 Bug 已有对应的 Fix PR 合并或正在审查中（如 Cron 相关 Bug 有多个 PR 跟进）。*

## 6. 功能请求与路线图信号
-   **跨 Profile 子代理委托：** #41889 请求在 `delegate_task` 中支持指定目标 Profile 运行子代理，以利用其独立的身份和配置。
-   **分层记忆注入：** #32198 建议引入 `memory_tiers`，允许根据模型上下文窗口大小动态调整记忆注入限制，避免小模型上下文溢出或大模型资源浪费。
-   **平台特定模型配置：** #14327 希望支持不同平台（如飞书、Telegram）使用不同的模型配置，而非全局统一。
-   **Post-turn 语音编排：** #50728 提出通过 shell hook 实现非每次对话都发声的语音控制，平衡交互感与静谧性。
-   **GitHub 链接：**
    -   [#41889](https://github.com/NousResearch/hermes-agent/issues/41889)
    -   [#32198](https://github.com/NousResearch/hermes-agent/issues/32198)
    -   [#14327](https://github.com/NousResearch/hermes-agent/issues/14327)
    -   [#50728](https://github.com/NousResearch/hermes-agent/issues/50728)

## 7. 用户反馈摘要
-   **痛点：** 用户对 v0.17.0 版本的稳定性表示担忧，特别是 Discord 集成失效和任务执行逻辑混乱。Windows 中文用户面临严重的编码兼容性障碍。
-   **不满：** `hermes config set` 破坏配置文件可读性、Cron 作业静默失败、以及 Gateway 会话重置缺乏透明度是主要抱怨点。
-   **满意/期待：** 桌面端引入 PR-style 文件 Diff 视图受到欢迎；多 Profile 支持和跨平台模型配置被视为提升生产环境可用性的关键需求。

## 8. 待处理积压
-   **长期未解决的架构隐患：**
    -   **#43008:** Gateway 会话静默重置问题，影响用户体验连贯性，需优先设计信号机制。
    -   **#10674:** Web Dashboard 多 Profile 切换，涉及核心 UI 重构，需长期规划。
-   **需维护者关注的 Issue：**
    -   **#50627:** Discord 按钮交互回归 Bug，影响主流社交平台集成，建议高优先级修复。
    -   **#50681:** 测试污染生产数据库问题，涉及核心模块设计缺陷（模块级常量），需彻底重构。
    -   **#50733:** QQBot 适配器挂起问题，可能导致服务长期不可见，需增加重连超时和告警机制。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 在 2026-06-22 保持高频开发节奏，过去 24 小时内共有 **34 个 PR** 被合并或关闭，显示出极高的代码迭代速度。**1 个新版 Nightly 构建** (`v0.3.0-nightly.20260622.287853ab`) 发布，标志着 v0.3.0 重大版本进入持续集成阶段。核心维护者 SiYue-ZO 主导了多项底层基础设施（消息总线、会话存储、配置系统）的重构与优化，同时针对特定模型（Volcengine Doubao Seed）的兼容性问题进行了快速响应。项目整体处于 v0.3.0 版本前的冲刺整合期，稳定性与功能完整性并重。

## 2. 版本发布
*   **版本：** `v0.3.0-nightly.20260622.287853ab`
*   **类型：** Nightly Build (自动化构建)
*   **详情：** 此为 v0.3.0 系列的夜间测试版。由于包含大量近期合并的 PR（包括消息总线背压处理、JSONL 会话索引修复、V3 配置格式同步等），该版本可能包含未完全稳定的改动。
*   **建议：** 仅用于测试环境或愿意承担风险的高级用户。生产环境建议等待正式 Release。
*   **链接：** [Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

## 3. 项目进展
今日主要进展集中在底层架构优化和用户体验增强，大部分重要 PR 由核心贡献者 **SiYue-ZO** 提交并合并：

*   **运行时稳定性增强：**
    *   **#2906:** 修复消息总线 (`pkg/bus`) 的背压处理，引入有界等待机制，防止队列饱和时无限阻塞，并增加了健康检查可见性。
    *   **#2907:** 修复 JSONL 内存存储在崩溃后的元数据漂移问题，确保原子性写入，提升数据一致性。
    *   **#2905:** 优化过期上下文的处理逻辑，使回退链在遇到死锁或取消时立即停止无效尝试。
    *   **#2913:** 修复 JSONL 会话索引的热路径克隆性能问题及 TTL 刷新语义。

*   **配置与模型管理重构：**
    *   **#2752, #2831, #2832, #2833:** 这一系列 PR 完成了模型配置工作流的重大改进，包括后端模型获取、保存目录支持、提供商选择基础以及真实的连接性验证测试。
    *   **#2891:** 新增“恢复出厂设置”功能，提供配置不兼容时的安全回退路径，保留密钥的同时重置配置。
    *   **#2766:** 文档全面同步至 V3 配置格式。

*   **前端与交互体验：**
    *   **#2587:** 实现 Pico Web Chat 的端到端流式传输支持，重建前端渲染和滚动行为。
    *   **#2908:** 恢复模型页面提供商 Logo 的回退显示。
    *   **#2663:** 改善配置保存和重启的用户反馈，修复前端构建阻塞问题。

*   **新功能：**
    *   **#2915:** 为 MiMo 提供商添加 `CommonModels` 支持，默认推荐具备视觉理解能力的模型。
    *   **#2673:** 添加跨平台串行工具 (`serial`) 支持。

*   **今日新合并/关闭的关键 PR：**
    *   **#3155:** 实现 `spawn` 功能的 `direct_reply` 参数，解决异步回调导致的消息重复发送问题。

## 4. 社区热点
*   **#3012 [BUG] Evolution 启用后每分钟持续消耗 Token**
    *   **热度：** 高 (5 评论)
    *   **分析：** 用户报告在 Draft 模式下，Evolution 功能导致非预期的 Token 消耗。这反映了用户对成本控制的高度敏感，尤其是对于长周期运行的 AI 代理任务。
*   **#3093 [Feature] 需要 SimpleX 或 Tox 网关**
    *   **热度：** 中 (2 评论, 1 👍)
    *   **分析：** 隐私通信协议的支持需求再次出现。尽管此前可能有相关讨论，但用户明确指出需要 SimpleX/Wire/Tox，表明去中心化/隐私优先的聊天渠道仍是部分核心用户的需求。
*   **#3154 [Fix] 修复 Doubao Seed 工具调用泄露**
    *   **热度：** 低 (刚创建)
    *   **分析：** 针对 #3153 的快速修复 PR。显示社区对非标准 OpenAI 兼容模型的兼容性关注度较高。

## 5. Bug 与稳定性
*   **严重/高优先级：**
    *   **#3153 [BUG] Volcengine Doubao Seed 工具调用泄露为文本**
        *   **描述：** 使用 `doubao-seed-2.0-pro` 时，工具调用有时作为原始 XML 文本返回给用户而非执行。
        *   **状态：** 已有对应修复 PR **#3154** (作者: hanZeng-08)。
    *   **#3090 [BUG] Safari iOS < 16.4 面板无法工作**
        *   **描述：** 旧版 iOS Safari 浏览器存在兼容性问题，登录后面板无响应。
        *   **状态：** Open。
    *   **#3044 [BUG] Matrix allow_from 对含冒号的用户 ID 失效**
        *   **描述：** 标准 Matrix 用户 ID 格式导致消息被静默拒绝。
        *   **状态：** Closed (已修复)。
    *   **#3041 [BUG] `mcp add` 误解析全局标志**
        *   **描述：** `--no-color` 等全局标志被误解析为位置参数，导致 HTTP/SSE 添加失败。
        *   **状态：** Closed (已修复)。

*   **中等优先级：**
    *   **#3012 [BUG] Evolution 模式 Token 异常消耗**
        *   **状态：** Open。需进一步调查 Draft 模式下的逻辑缺陷。

## 6. 功能请求与路线图信号
*   **隐私通信支持：** Issue **#3093** 明确提出对 SimpleX/Tox 的需求。虽然目前 PR 列表中未见直接实现，但这可能是未来路线图中的一个潜在方向，特别是如果社区呼声持续高涨。
*   **硬件集成：** PR **#2673** 已合并跨平台串行工具支持，表明项目正在扩展其作为“边缘 AI 助手”的能力，不仅限于纯软件聊天，还涉及硬件交互。
*   **配置简化：** “恢复出厂设置” (#2891) 和 V3 配置格式的同步 (#2766) 表明下一步重点在于降低用户维护成本，提高配置的鲁棒性。

## 7. 用户反馈摘要
*   **痛点：**
    *   **Token 浪费：** 用户极度关注 AI 代理（如 Evolution 模式）在无操作或草稿状态下的资源消耗 (#3012)。
    *   **浏览器兼容性：** 老旧设备（iOS < 16.4）的用户体验较差，缺乏回退机制 (#3090)。
    *   **CLI 解析错误：** 复杂的命令行标志解析导致易用性下降，特别是对于高级用户 (#3041)。
*   **满意点：**
    *   **快速响应：** 对于 #3153 这样的关键 Bug，社区和开发者在几小时内就提供了修复 PR (#3154)。
    *   **功能完善：** 新的模型配置界面和连接性测试功能受到欢迎，提升了管理多提供商模型的便利性。

## 8. 待处理积压
*   **#3012 [BUG] Continuous consumption of tokens...**
    *   **建议：** 需优先排查 Evolution/Draft 模式的触发逻辑，确认是否存在死循环或错误的心跳机制。
*   **#3090 [BUG] Panel does not work on Safari...**
    *   **建议：** 检查前端 Polyfills 或 ES6+ 语法兼容性问题，考虑添加旧版 Safari 的友好提示或降级方案。
*   **#3093 [Feature] I need SimpleX or tox**
    *   **建议：** 评估实现难度和社区需求规模。若暂不排期，可在 Issue 中回复当前状态或标记为“低优先级/未来计划”。

---
*报告生成时间：2026-06-22*
*分析师：Agnes-2.0-Flash*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub (nanocoai/nanoclaw)

## 1. 今日速览
今日 NanoClaw 项目处于**高安全关注度与日常维护并重**的状态。尽管没有新版本的正式发布，但社区对安全漏洞的反应迅速，两名独立贡献者提交了两个严重的安全审计 Issue（#2828, #2827），涉及 A2A 附件转发和 MCP 服务器审批流程。与此同时，核心维护者积极处理基础设施稳定性问题，合并了多个关于容器生命周期管理、Socket 连接等待及去重逻辑的修复 PR。整体项目健康度良好，但在安全合规性方面存在明显短板，需优先响应。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **4 个 PR 被合并/关闭**，主要聚焦于提升系统的稳定性和用户体验的细微优化：

*   **基础设施稳定性修复**：
    *   **#2825 [CLOSED]** (amit-shafnir): 修复了首次聊天时因主机 Socket 尚未就绪导致的失败问题。通过增加等待机制，解决了 `service` 步骤返回成功但进程未完全启动的竞争条件。
    *   **#2830 [OPEN]** (amit-shafnir): 提出清理僵尸服务注册的功能，防止卸载 NanoClaw 后遗留无效的 `launchd` plist 或 `systemd` 单元文件，提升系统整洁度。
*   **容器网络兼容性**：
    *   **#2168 [CLOSED]** (kpscheffel): 修复了 Rootless Docker 环境下 `host.docker.internal` 解析错误的问题，通过硬编码桥接 IP 确保 OneCLI 通信正常。
*   **技能更新逻辑优化**：
    *   **#2826 [OPEN]** (Koshkoshinsk): 改进了 `/update-skills` 流程，确保用户在更新主机代码时不会遗漏上游渠道/提供商分支的关键修复，强制重新构建容器以同步状态。

## 4. 社区热点
今日最受关注的议题集中在**安全性**上，两个由 `YLChen-007` 提交的 Security Issue 引发了重要警示：

*   **[Security] NanoClaw A2A attachment forwarding follows a symlinked inbox and writes outside the target session root (#2828)**
    *   **链接**: https://github.com/nanocoai/nanoclaw/issues/2828
    *   **分析**: 攻击者可通过注入提示词或控制目标 Agent，将挂载的 `inbox/` 目录替换为符号链接，从而将文件写入会话根目录之外的任意位置。这构成了潜在的路径遍历和数据泄露风险。
*   **[Security] `add_mcp_server` approval flow hides runtime `args` and `env`, enabling approval smuggling (#2827)**
    *   **链接**: https://github.com/nanocoai/nanoclaw/issues/2827
    *   **分析**: MCP 服务器的自我修改审批卡片仅显示服务器名称和基本配置，隐藏了运行时参数 (`args`) 和环境变量 (`env`)。这可能导致“审批走私”，即用户批准了一个看似无害的配置，而实际执行了恶意参数。

此外，**Telegram 集成 (#2831)** 虽已关闭，但表明用户对多渠道支持仍有持续兴趣，尽管该 PR 可能因规范不符或其他原因未被合并。

## 5. Bug 与稳定性
今日报告的 Bug 主要为逻辑缺陷和边缘情况，未发现导致大规模崩溃的高危 Bug：

1.  **高危 (Security)**:
    *   **Issue #2828**: 符号链接绕过写入限制。
    *   **Issue #2827**: 审批流程信息不对称导致的安全隐患。
2.  **中危 (Stability/UX)**:
    *   **PR #2531 [OPEN]** (cfis): 轮询循环中 `send_message` 触发时产生重复文本。这是一个影响用户体验的 UI/逻辑 Bug，目前尚无合并的 Fix PR。
    *   **PR #2825 [CLOSED]**: 首次聊天时的竞态条件（已修复）。
3.  **低危 (Cleanup)**:
    *   **PR #2830 [OPEN]**: 残留的服务注册文件清理问题。

## 6. 功能请求与路线图信号
*   **审批流程改进**: **PR #2832** 提议在模块审批卡片中添加“拒绝并附带理由”的功能。这反映了用户希望获得更透明的交互反馈，以便 Agent 能够根据具体原因调整行为，而非仅仅收到“被拒绝”的通知。
*   **只读仪表盘工具**: **PR #2795** 添加了一个基于 CLI 数据的只读仪表板技能 (`/add-clidash`)。这表明用户群体中存在对轻量级、非侵入式监控工具的需求。
*   **多渠道集成**: 尽管 **PR #2831** (Telegram) 被关闭，但其存在本身证明了社区对扩展支持更多 IM 平台的强烈需求。

## 7. 用户反馈摘要
*   **痛点**: 用户在遇到 Agent 被拒绝时感到困惑，缺乏具体的失败原因指导（PR #2832 的动机）。
*   **使用场景**: 开发者在本地开发环境中频繁遇到容器与宿主机通信的网络配置问题，特别是 Rootless Docker 环境（PR #2168 的修复印证了这一点）。
*   **满意度**: 用户对快速修复启动阶段竞态条件（PR #2825）表示欢迎，因为这解决了“第一次聊天就失败”的糟糕体验。

## 8. 待处理积压
建议维护者优先关注以下长期未解决或新发现的高优先级问题：

1.  **Security Fixes (Critical)**:
    *   **Issue #2828 & #2827**: 这两个安全问题需要立即进行代码审查并发布补丁。它们直接影响了多 Agent 协作环境中的信任边界。
2.  **Open PRs**:
    *   **PR #2832**: 审批理由反馈功能，有助于提升 Agent 调试效率，建议合并。
    *   **PR #2830**: 僵尸服务注册清理，属于良好的工程实践，建议合并。
    *   **PR #2531**: 消息去重 Bug 修复，影响用户体验，建议跟进。
    *   **PR #2826**: 技能更新逻辑加固，建议合并以防止静默失效。
    *   **PR #2795**: 只读仪表盘技能，若符合规范可合并，丰富生态工具集。
    *   **PR #2829**: 内容模糊（标题为 "eee"），需确认是否为误提交或测试 PR，若无实质内容应关闭。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub (nullclaw/nullclaw)

### 1. 今日速览
今日 NullClaw 项目整体活跃度较低，处于平稳维护状态。过去24小时内仅有1条新 Issue 报告和1条依赖更新 PR，无新版本发布。社区主要关注点集中在底层 Docker 镜像的常规安全升级以及特定模型交互中的异常报错。项目核心功能未见重大突破，但依赖链保持更新，显示出基础架构层面的持续维护迹象。

### 2. 版本发布
*   **状态**：无新版本发布。
*   **说明**：近期版本为 v2026.5.29，暂无后续版本更新记录。

### 3. 项目进展
*   **依赖更新**：
    *   **PR #956** ([ci(deps): bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956))：由 Dependabot 自动发起，将 Docker 基础镜像 Alpine 从 3.23 升级至 3.24。
    *   **影响**：此更新旨在提升容器环境的安全性和软件包兼容性，属于常规维护操作，不涉及业务逻辑变更，预计对现有部署影响极小。

### 4. 社区热点
*   **Issue #967** ([error: NoResponseContent](https://github.com/nullclaw/nullclaw/issues/967))：
    *   **热度分析**：该 Issue 报告了高频出现的 `NoResponseContent` 错误，发生概率超过50%（21次对话中出现12次）。
    *   **背后诉求**：用户反馈在使用 `Agnes-2.0-Flash` 模型时，尽管 API Key 有效且在其他平台（如 picocla...）正常，但在 NullClaw 中频繁响应失败。这反映了用户对本地代理/客户端与特定大模型兼容性的高度关注，尤其是响应解析层的稳定性。

### 5. Bug 与稳定性
*   **严重 Bug 报告**：
    *   **Issue #967**：`error: NoResponseContent`。
    *   **严重程度**：**高**。由于复现率极高（>50%），严重影响用户体验和可用性。
    *   **环境信息**：Windows 11, 程序版本 v2026.5.29, 模型 Agnes-2.0-Flash。
    *   **修复状态**：目前尚无关联的 Fix PR，仅有一条评论，等待维护者介入排查是网络层、解析层还是模型适配层的问题。

### 6. 功能请求与路线图信号
*   当前无明确的新功能请求（Feature Request）。
*   用户反馈间接指向了对**多模型兼容性**和**错误日志详细化**的需求。若能解决 Issue #967 中的解析异常，可能有助于提升对其他类似行为异常模型的适配能力。

### 7. 用户反馈摘要
*   **痛点**：用户在配置好正确的 API Key 后，仍遭遇高频的服务端响应解析错误（`NoResponseContent`），导致对话中断。
*   **对比测试**：用户指出同一模型和 Key 在 `picocla...`（推测为其他客户端或平台）上工作正常，暗示问题可能出在 NullClaw 客户端的请求构造或响应处理逻辑上，而非模型服务本身。
*   **情绪**：用户表现出明显的困惑和挫败感，因为错误频率过高且难以通过重启或重试解决。

### 8. 待处理积压
*   **Issue #967**：作为当前唯一的活跃 Issue，需优先分配给维护者进行调试。建议检查 `Agnes-2.0-Flash` 模型的输出格式是否与 NullClaw 的解析器兼容，或是否存在超时导致的空响应被误报为 `NoResponseContent`。
*   **PR #956**：虽为自动化更新，但需确认 CI 流程能否顺利通过 Alpine 3.24 的构建测试。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-22
**来源：** IronClaw (github.com/nearai/ironclaw)

## 1. 今日速览
IronClaw 项目在 2026-06-22 保持高活跃度，核心焦点集中在 **IronClaw Reborn** 版本的本地 Dogfooding（内部使用测试）与性能优化上。过去24小时内，团队创建了多项关于性能追踪、自动化功能完善及权限模型统一的 Issue，并合并了多个关键的基础设施与功能 PR（如 LLM 用量持久化、CI 缓存优化）。尽管没有新版本发布，但 Reborn 引擎在自动化控制、并发执行及用户权限粒度上的改进显著提升了系统的成熟度。整体来看，项目正处于从“功能构建”向“体验打磨与稳定性加固”过渡的关键阶段。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要进展体现在基础设施优化、权限模型细化及自动化功能增强：

*   **Engine V2 可观测性完善：** PR #4989 已合并，解决了 Engine V2 模式下 LLM 用量数据在 Admin API 中丢失的问题，通过集成 CostGuard 和 `llm_calls` 实现了更精准的用户级用量追踪。
*   **CI/CD 稳定性提升：** PR #5118 和 #5115 解决了 Rust 闭包测试中的缓存失效和网络重试问题，大幅减少了因 CI 环境波动导致的假阴性失败，提升了开发效率。
*   **自动化功能扩展：** PR #5065 引入了“一次性定时触发器”（One-shot scheduled triggers），丰富了自动化场景；PR #5131（进行中）正在完善自动化的暂停/恢复支持。
*   **NEAR AI MCP 状态修正：** PR #4990 修复了 NEAR AI MCP 插件在安装后仍显示“需要设置”的状态投影错误，改善了首次运行体验。
*   **并发执行架构演进：** PR #5085 正在重构 Reborn 运行时，引入 `TurnRunScheduler` 以支持并发 Turn 执行，旨在解决当前串行执行导致的性能瓶颈。

## 4. 社区热点
以下 Issue 和 PR 引发了较多关注或代表了当前的开发重心：

*   **[Reborn] IronClaw Performance Issues 06/22/2026 - 06/28/2026 (#5125)**
    *   **链接:** [Issue #5125](https://github.com/nearai/ironclaw/issues/5125)
    *   **分析:** 这是本周性能优化的总纲 Issue，由核心贡献者 `think-in-universe` 发起。它标志着团队正式将“本地 Dogfooding 中的慢响应”列为最高优先级的技术债，计划从推理延迟、冗余步骤和日志追踪三个维度进行系统性治理。
*   **IronClaw Reborn Local Dogfooding Findings (#4879, #5119)**
    *   **链接:** [Issue #4879](https://github.com/nearai/ironclaw/issues/4879), [Issue #5119](https://github.com/nearai/ironclaw/issues/5119)
    *   **分析:** 连续的 Dogfooding 报告反映了 Reborn 版本在早期采用阶段的真实摩擦点。社区和用户正在通过实际使用来暴露 WebUI 启动、配置向导和模型提供商设置中的可用性问题。
*   **feat(reborn): skill extraction & self-evolution (#5061)**
    *   **链接:** [PR #5061](https://github.com/nearai/ironclaw/pull/5061)
    *   **分析:** 该 PR 引入了类似 Hermes 的技能提取和自我进化机制，允许 Agent 将成功交互转化为可复用的 `SKILL.md`。这是一个具有前瞻性的功能，旨在让 Agent 具备长期记忆和技能积累能力，是 Reborn 区别于传统聊天机器人的关键特性之一。

## 5. Bug 与稳定性
*   **Nightly E2E 测试失败 (#4108)**
    *   **链接:** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
    *   **详情:** 夜间端到端测试持续失败，主要涉及 `E2E (v2-engine)` 工作流。虽然具体错误日志需查看运行记录，但这表明 Engine V2 的核心路径可能存在回归或配置不一致问题，需优先排查以确保主干稳定性。
*   **NEAR AI MCP 虚假“Setup Needed”状态 (#4925, Closed by #4990)**
    *   **链接:** [Issue #4925](https://github.com/nearai/ironclaw/issues/4925)
    *   **详情:** 用户报告即使 MCP 服务器已就绪，WebUI 仍提示需要配置。此问题已通过 PR #4990 修复，属于用户体验层面的 Bug。
*   **Outbound Delivery Target Set 审批失效 (#5129)**
    *   **链接:** [Issue #5129](https://github.com/nearai/ironclaw/issues/5129)
    *   **详情:** “Always approve”设置在 `outbound_delivery_target_set` 能力上未生效。这是一个具体的功能缺陷，需要进一步复现以确定是逻辑遗漏还是配置解析问题。

## 6. 功能请求与路线图信号
*   **Telegram 渠道支持 (#5124)**
    *   **链接:** [Issue #5124](https://github.com/nearai/ironclaw/issues/5124)
    *   **信号:** 明确请求将 Telegram 作为 Reborn 的原生渠道，而非遗留的 v1 路径。这表明项目正在整合多渠道接入能力，统一消息处理架构。
*   **自动化删除/暂停支持 (#5122, #5121)**
    *   **链接:** [Issue #5122](https://github.com/nearai/ironclaw/issues/5122), [Issue #5121](https://github.com/nearai/ironclaw/issues/5121)
    *   **信号:** 用户对自动化全生命周期管理的需求强烈，特别是针对 Reborn 原生触发器的细粒度控制（暂停/恢复/删除）。这将是下一版本自动化模块的核心功能集。
*   **统一 Gate Declined 语义 (#5120)**
    *   **链接:** [Issue #5120](https://github.com/nearai/ironclaw/issues/5120)
    *   **信号:** 旨在统一认证、审批和活动投影中的拒绝状态语义（如 Deny vs Declined vs Canceled）。这是提升系统一致性和开发者体验的重要内部重构。

## 7. 用户反馈摘要
*   **性能焦虑：** 用户和内部测试者普遍反映 Reborn 本地构建的响应速度慢，特别是在模型推理和多余循环步骤上。Issue #5125 及其子任务直接回应了这一痛点。
*   **配置困惑：** 尽管 NEAR AI MCP 已自动安装，但 UI 提示的不确定性让用户感到困惑（Issue #4925），直到 PR #4990 修复后才缓解。
*   **自动化需求：** 用户希望获得更精细的自动化控制（暂停/恢复/删除），而不仅仅是创建和运行，这反映了生产环境中对自动化流程管理的高阶需求。

## 8. 待处理积压
*   **Nightly E2E Failure (#4108)**
    *   **链接:** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
    *   **建议:** 作为阻塞集成测试稳定性的关键 Issue，建议维护者优先排查 Engine V2 相关的 E2E 失败原因，避免长期累积的技术债务影响发布信心。
*   **Always Approve 失效问题 (#5129)**
    *   **链接:** [Issue #5129](https://github.com/nearai/ironclaw/issues/5129)
    *   **建议:** 该 Issue 刚创建，需要开发者尽快复现并定位 `outbound_delivery_target_set` 相关的审批逻辑漏洞，因为这可能影响安全策略的执行。

---
*报告生成时间：2026-06-22 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
今日 LobsterAI 项目保持高活跃度，共处理 **18 条** 关键更新（12 条 PR，6 条 Issues）。开发重心主要集中在 **OpenClaw 插件生态的稳定性修复**、**SQLite 性能优化** 以及 **Cowork 协作模式的重大功能迭代**。虽然无新版本正式 Release，但 5 条 PR 已被合并，显示出维护团队对技术债务和核心功能缺陷的快速响应能力。安全方面出现一起关于 SSRF 防护减弱的严重报告，需引起高度重视。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的 PR 主要推动了以下方面的改进：

*   **Cowork 模式重大升级 (#2183)**：
    *   引入了 "Plan Mode"（计划模式），允许用户在执行前查看和批准交互式计划块。
    *   支持复制、下载、展开/折叠计划，并防止在规划阶段突变工具调用。
    *   **影响**：显著提升了复杂任务的可控性和透明度，是 Cowork 工作流的关键演进。
*   **OpenClaw 插件生态修复 (#2186, #2185, #2182)**：
    *   修复了 NIM 插件运行时入口编译问题。
    *   补全了 OpenClaw v2026.6.1 补丁中缺失的 `cwd` 字段，解决了插件 SDK 声明生成错误。
    *   升级了钉钉、飞书、企微等 IM 插件的安装布局兼容性，支持新旧安装路径。
    *   **影响**：增强了多平台 IM 集成的稳定性和向后兼容性。
*   **文档更新 (#2184)**：
    *   刷新了 `AGENTS.md`，明确了 Codex 指令范围、质量门禁及遗留代码规范。

## 4. 社区热点
*   **安全风险报告 (#2181)**：
    *   **议题**：用户报告 LobsterAI 默认恢复私有网络浏览器访问，并削弱了捆绑的 OpenClaw SSRF 防护。
    *   **分析**：这是今日最受关注的 Issue，涉及底层安全架构。作者指出默认配置为 `ProxyCompatible` 模式可能导致序列化问题。
    *   **建议**：安全团队需立即审查默认策略，确认是否需要强化 SSRF 守卫或提供明确的配置警告。
*   **UI/UX 反馈集中爆发 (#1411, #1414, #1416)**：
    *   多个 Issues 指向“概览页” (`#/profile`) 的严重 UI 缺陷，包括时间筛选器无效、总会话数显示为 0、中英文切换导致布局重叠。
    *   **分析**：反映出前端国际化适配和数据统计模块存在系统性疏漏，严重影响用户体验。

## 5. Bug 与稳定性
按严重程度排序的 Bug 及修复状态：

| ID | 类型 | 描述 | 严重程度 | Fix PR 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **#2181** | Security | 默认启用私有网络访问，SSRF 防护减弱 | **高危** | 无 |
| **#1407** | Bug | OpenClaw Token Proxy 无请求体大小限制，易致 OOM | 高 | **#1407** (待合并) |
| **#1416** | Bug | 概览页切换英文后 UI 布局错乱，文本重叠 | 中 | 无 |
| **#1411** | Bug | 概览页时间维度筛选器点击无响应 | 中 | 无 |
| **#1414** | Bug | 概览页“总会话数”始终显示为 0 | 中 | 无 |
| **#1408** | Bug | MCP Bridge Server 忽略 Promise 返回，可能导致崩溃 | 高 | **#1408** (待合并) |
| **#1419** | Bug | NIM 群组类型枚举值映射错误 | 中 | **#1419** (待合并) |

*注：#1407, #1408, #1419 等已有关联的 Fix PR，但状态仍为 OPEN/Stale，需确认合并进度。*

## 6. 功能请求与路线图信号
*   **性能优化需求**：
    *   **#1410, #1421**：用户反馈高频写入和 Prompt 构建时的性能瓶颈。
    *   **对应 PR**：#1410 (SQLite 防抖批量写入) 和 #1421 (记忆查询缓存) 旨在解决此问题。若合并，将显著提升长会话下的流畅度。
*   **并发安全增强**：
    *   **#1420**：修复 CronJob 重入并发导致的“事件风暴”。这表明项目正在加强后台任务调度的健壮性，符合企业级应用对稳定性的要求。
*   **数据一致性保障**：
    *   **#1415**：修复迁移标志位逻辑错误，确保事务原子性。这反映了开发团队对数据完整性（特别是记忆系统迁移）的重视。

## 7. 用户反馈摘要
*   **痛点**：
    1.  **概览页数据失真**：用户发现总会话数为 0 但 API 调用数正常，且时间筛选器失效，导致无法准确评估使用情况。
    2.  **国际化适配差**：中英文切换导致界面元素重叠，影响非中文用户的阅读体验。
    3.  **技能列表展示拥挤**：当添加较多 Skills 时，输入框区域展示混乱，缺乏良好的滚动或折叠机制。
*   **满意点**：
    1.  **计划模式 (Plan Mode)**：新引入的 Cowork Plan Mode 受到开发者欢迎，因为它提供了更好的可控性。
    2.  **快速响应**：对于明显的逻辑错误（如枚举映射、Promise 处理），社区贡献者迅速提出了修复方案。

## 8. 待处理积压
以下 Issue/PR 创建时间较长（2026-04-03），目前仍处于 `OPEN` 或 `Stale` 状态，建议维护者优先处理：

1.  **#1407 [OPEN] fix: OpenClaw Token Proxy 无请求体大小限制**
    *   *风险*：潜在的服务拒绝服务 (DoS) 漏洞。
2.  **#1408 [OPEN] fix: MCP Bridge Server 的 handleRequest 处理 Promise 返回**
    *   *风险*：异步错误未捕获可能导致进程崩溃。
3.  **#1410 [OPEN] perf(sqlite): SqliteStore.set() 每次写入都同步落盘**
    *   *影响*：直接阻碍性能优化路线图。
4.  **#1411, #1414, #1416 [OPEN]**
    *   *影响*：UI/UX 核心体验缺陷，影响用户留存。
5.  **#1420 [OPEN] fix(cron): 修复 pollOnce 重入并发与 stopPolling 幽灵事件**
    *   *风险*：后台任务调度不稳定。

**分析师建议**：
今日项目呈现出“后端稳定性修复”与“前端体验缺陷”并存的局面。建议优先合并 **#1407** 和 **#1408** 以消除安全隐患，并集中资源解决 **#14xx** 系列 UI 和统计 Bug，以提升用户信任度。同时，务必跟进 **#2181** 的安全审计结果。

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

# CoPaw (QwenPaw) 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub agentscope-ai/QwenPaw

## 1. 今日速览
今日 CoPaw 项目保持高活跃度，过去24小时内收到 **22 条 Issue** 和 **50 条 PR**。虽然无新版本发布，但社区贡献集中体现在 **移动端适配**、**内存管理优化** 及 **后台消息队列修复** 上。整体来看，开发重心正从核心功能迭代转向提升多端体验的一致性与稳定性，特别是针对 Tauri 桌面端和 Web 控制台的移动设备兼容性进行了大规模重构。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要进展集中在前端体验优化与底层机制修复：

*   **移动端全面适配 (High Impact):** 多位贡献者提交了针对控制台各页面的移动端适配 PR，显著提升了小屏幕设备的可用性。
    *   `#5382` [Mobile: ACP Page]
    *   `#5383` [Mobile: Inbox Page]
    *   `#5384` [Mobile: Workspace Page]
    *   `#5385` [Mobile: Environments Page]
    *   `#5381` [Mobile: MCP Page]
    *   **分析：** 这一系列 PR 解决了用户在手机端操作时的布局重叠、按钮不可见等问题，是提升移动端用户体验的关键步骤。
*   **消息队列与会话稳定性修复:**
    *   `#5389` [Fix: Queue Item User/Channel Binding] - 修复了钉钉渠道因 userId/channel 硬编码导致的会话创建错误。
    *   `#5371` [Fix: Cross-Agent Message Deliberation] - 修复了后台发送队列中 Agent ID 绑定问题，防止消息串台。
    *   `#5357` [Fix: Session Switch Lock] - 修复了嵌入式模式下会话切换卡死的问题。
*   **记忆系统升级:**
    *   `#5349` [Feat: Migrate to ReMe4] - 将内存运行时迁移至 ReMe4 框架，保留向后兼容性，提升了记忆管理的现代化水平。
    *   `#5325` [Feat: Recency-Aware Ranking] - 为每日笔记添加了基于时间的衰减排名算法。

## 4. 社区热点
以下 Issue 和 PR 获得了较高的关注度或评论量，反映了用户当前的痛点与期待：

*   **[Bug] 子Agent触发上下文压缩时QwenPaw进程冻结无响应** (`#5218`)
    *   **热度：** 17 条评论
    *   **分析：** 这是一个严重的阻塞性 Bug，影响核心交互流程。用户反馈在上下文压缩时进程完全无响应，需重启应用。这是目前优先级最高的修复项之一。
*   **[Bug] 每次升级之后，被禁用的内置技能又会重新变回启用** (`#5262`)
    *   **热度：** 9 条评论
    *   **分析：** 用户普遍反感每次更新后都需要手动重新配置偏好设置。这反映了配置持久化机制的缺失。
*   **[Feature] 增加个人知识库的功能** (`#2969`)
    *   **热度：** 5 条评论, 2 👍
    *   **分析：** 尽管创建时间较早，但近期仍有互动。用户希望将 CoPaw 的执行能力与个人知识库结合，这是一个高频需求，暗示了 RAG 集成的重要性。
*   **[Bug] Shell command execution fails to parse shell special characters** (`#5373`)
    *   **分析：** 开发者反馈 `execute_shell_command` 无法正确处理管道、重定向等标准 Shell 语法，限制了 Agent 执行复杂脚本的能力。

## 5. Bug 与稳定性
今日报告了多个涉及稳定性和兼容性的 Bug，按严重程度排列如下：

1.  **严重：进程冻结/无响应**
    *   `#5218`: 上下文压缩导致 QwenPaw 进程冻结。
    *   `#5333`: 提交指令后 Agent 卡住，文本框仍显示可提交状态（疑似 DeepSeek 兼容性问题）。
    *   `#5379`: 启动后直接报错 Internal Server Error (`get_remote_addr` 问题)。
2.  **中等：功能失效/逻辑错误**
    *   `#5378`: 新增自定义模型后，Endpoint 自动写入查询框且不可删除，导致模型无法使用。
    *   `#5330`: Zhipu 供应商 API 测试通过，但所有模型测试连接失败（路由或名称解析问题）。
    *   `#5354`: 消息发送队列串台，切换对话时原对话变灰无法切回。
    *   `#5320`: `send_file_to_user` 发送图片后，聊天窗口不显示图片（仅控制台显示成功），且历史图片消失。
3.  **低等：UI/UX 缺陷**
    *   `#5358`: 切换会话时 UI 报错 `Cannot read properties of null`。
    *   `#5374`: Mac Chrome 浏览器拖拽上传附件失效。

**已有 Fix PR 的 Bug:**
*   `#5354` (队列串台) -> 关联 PR `#5389` 和 `#5371` 正在修复队列绑定问题。
*   `#5320` (图片显示) -> 关联 PR `#5377` 正在增强文件预览支持相对路径。

## 6. 功能请求与路线图信号
*   **个人知识库/RAG 集成:** Issue `#2969` 持续获得关注，结合 `#5349` (ReMe4 迁移) 和 `#5325` (记忆排名优化)，可以看出项目正在强化记忆和知识管理能力。未来版本可能会内置更完善的个人知识库功能。
*   **OpenClaw/Hermes 迁移工具:** Issue `#5254` 询问是否支持从其他 Agent 平台导入配置。虽然暂无明确回应，但此类需求若增多，可能促使团队开发配置转换工具。
*   **实时 UI 更新:** Issue `#5322` 和 `#5344` 指出通过 API 发送消息时，UI 不能实时更新或消息被静默丢弃。这暗示了 WebSocket/SSE 实时通信机制需要进一步优化。

## 7. 用户反馈摘要
*   **移动端体验迫切需求:** 大量用户（如 `#5329`, `#5382-5385`）提到在手机浏览器上使用时 UI 错乱、按钮被挤出屏幕、无法切换 Agent。社区对此反应积极，今日多个 PR 专门解决此问题。
*   **配置丢失 frustration:** 用户抱怨更新后自定义设置（如禁用内置技能、模型配置）丢失或重置，导致重复劳动。
*   **插件与后端初始化问题:** Tauri 桌面版的插件加载器 (`#4889`) 和 Python 安装后的启动报错 (`#5379`) 表明，不同安装渠道的初始化逻辑存在不一致或 Bug，影响了新手用户的上手体验。

## 8. 待处理积压
*   **Tauri 插件加载器未启动** (`#4889`): 创建于 6 月 2 日，至今未解决，严重影响桌面版插件生态。
*   **Zhipu 模型连接失败** (`#5330`): 供应商级通但模型级不通，可能是特定供应商的路由 Bug，需深入排查。
*   **DeepSeek 兼容性问题** (`#5333`): 用户报告与 DeepSeek 模型交互时出现卡顿，需确认是否为通用问题或特定模型适配问题。
*   **个人知识库功能** (`#2969`): 长期 Feature Request，虽无具体 PR 跟进，但用户呼声高，建议纳入后续路线图规划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**日期**：2026-06-22
**数据来源**：GitHub (qhkm/zeptoclaw)

## 1. 今日速览
2026年6月22日，ZeptoClaw 项目保持稳健的工程化推进节奏。过去24小时内，核心维护者 `qhkm` 关闭并合并了一项关于 CI/CD 流水线的关键配置优化（Issue #537 和 PR #611）。虽然今日无新 Issue 开启且无新版本发布，但项目重点在于强化“二进制体积控制”这一战略护城河，确保工具在资源受限环境（如机器人平台）中的竞争力。整体活跃度适中，工程纪律性较强。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日的主要进展集中在持续集成（CI）流程的加固上，旨在防止依赖膨胀导致二进制文件过大。

*   **PR #611: chore(ci): promote binary-size to PR gate at 7.5MB**
    *   **状态**: 已合并/关闭
    *   **链接**: [PR #611](https://github.com/qhkm/zeptoclaw/pull/611)
    *   **详情**: 将现有的 `binary-size` 作业从仅在主分支推送时运行，改为在每一个 Pull Request 中运行。同时调整了阈值逻辑，将其作为严格的 PR Gate（门控）。这标志着项目从“事后监测”转向“事前预防”，有效遏制了因引入新依赖而导致的二进制体积无序增长。

*   **Issue #537: [chore, P1-critical] chore(ci): binary size budget gate**
    *   **状态**: 已关闭
    *   **链接**: [Issue #537](https://github.com/qhkm/zeptoclaw/issues/537)
    *   **详情**: 该 Issue 提出了将二进制大小控制在 7MB 以下的战略动机，PR #611 是对此需求的最终实施闭环。

## 4. 社区热点
今日社区互动主要集中在对工程规范执行的确认上，无大规模公开讨论，但核心维护者的高频操作显示了团队对项目质量标准的严格执行。

*   **焦点话题**: 二进制体积预算（Binary Size Budget）
    *   **背景**: 维护者强调 "6MB binary is THE strategic moat"（6MB 的二进制是核心战略护城河），反映了项目对嵌入式或边缘计算场景的高度适配性。
    *   **链接**: [Issue #537](https://github.com/qhkm/zeptoclaw/issues/537)

## 5. Bug 与稳定性
*   **无新增 Bug 报告**。
*   **稳定性措施**: 通过 PR #611 引入的 PR 级门控机制，显著提升了代码合并前的稳定性，防止了潜在的性能退化（由依赖膨胀引起）。

## 6. 功能请求与路线图信号
*   **当前信号**: 暂无新的功能性需求提出。
*   **路线图推断**: 项目当前的路线图信号非常明确——**极致轻量化**。所有近期的工作（Issue #537, PR #611）都指向优化构建产物的大小，而非增加新功能。这表明下一阶段的重点仍是维持和强化这一核心优势，而非功能扩张。

## 7. 用户反馈摘要
*   **痛点/需求**: 用户对“在机器人或其他资源受限设备上运行”的能力有强烈需求。
*   **满意度**: 维护者通过主动实施严格的 CI 门控，回应了社区对于项目“轻量级”定位的期待。虽然今日无直接的用户评论反馈，但 P1-critical 的标签表明维护者视此为最高优先级的用户需求。

## 8. 待处理积压
*   **无显著积压**。今日关闭的 Issue 和合并的 PR 均属于已完成的工程任务。由于过去24小时无新 Issue 产生，目前不存在需要紧急关注的长期未响应问题。建议维护者继续监控 PR 合并后的实际构建体积变化，以验证 7.5MB 阈值的合理性。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-22
**数据来源：** GitHub (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-06-22 保持极高活跃度，过去24小时内产生 **50 条 Issue** 和 **50 条 PR** 更新。项目重心显著向 **安全性加固** 与 **插件运行时现代化** 转移，特别是针对 WASM 插件的权限隔离（SSRF 防护、环境变量读取限制）以及从 Extism 向 Wasmtime Component Model 的底层迁移。虽然无新版本发布，但多个高优先级（P1/P2）的安全修复和功能增强已合并或处于最后审查阶段，表明 v0.8.x 系列正在经历严格的稳定化冲刺。

## 2. 版本发布
**无新版本发布。**
当前焦点集中在 v0.8.0 系列的稳定化及 v0.8.1 的功能队列整理（Issue #6970）。

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在基础设施安全与运行时优化：

*   **插件运行时现代化 (PR #8144):** JordanTheJet 提交了重大重构，使用 `wasmtime` 的 Component Model (WIT) 替代原有的 Extism 占位符。这是实现“WebAssembly-first”战略的关键一步，旨在消除 Node.js 依赖并提升插件安全性。
*   **安全加固：环境变量与 HTTP 请求 (PR #8137, PR #8130):**
    *   **PR #8137:** 移除了 `zc_env_read` 主机函数，禁止插件直接读取进程环境变量，改为通过别名作用域配置访问。这直接回应了 Issue #5919 中关于跨插件密钥泄露的风险。
    *   **PR #8130:** 为 `zc_http_request` 和 `zc_env_read` 引入了基于插件的白名单机制，防止 SSRF 攻击和环境变量越权访问。
*   **MCP 工具作用域修复 (PR #7747):** Yyukan 修复了 MCP Bundles 未正确绑定到特定 Agent 的问题，之前所有 Agent 都会无条件连接所有 MCP 服务器，存在隐私和安全风险。
*   **快速启动体验优化 (PR #8133):** 将 Quickstart 的风险预设强制为 `yolo`，以匹配默认的无边界运行时行为，减少新用户因配置误解导致的困惑。

## 4. 社区热点
以下 Issue 讨论最激烈，反映了社区对架构演进和安全性的关注：

*   **[RFC] Work Lanes, Board Automation... (Issue #6808)**
    *   *热度:* 11 条评论
    *   *分析:* 维护者 Audacity88 推动的工作流自动化 RFC，旨在简化贡献者路由和维护者负担。这是项目治理层面的重要讨论。
*   **[Feature] Where is napcat channel? (Issue #2503)**
    *   *热度:* 9 条评论
    *   *分析:* 用户持续寻找 NapCat/OneBot 支持选项，反映出国内 QQ 生态用户对 ZeroClaw 渠道支持的强烈需求。
*   **[RFC] Native Dynamic-Library Plugin System (Issue #7420)**
    *   *热度:* 5 条评论
    *   *分析:* Vitaly567 提出的原生动态库插件系统 RFC，试图解决微内核架构下的“单体痛苦”，与当前的 WASM 优先策略形成互补或竞争关系，值得观察最终采纳方向。
*   **[RFC] WebAssembly-first, eliminate Node.js... (Issue #7674)**
    *   *热度:* 4 条评论
    *   *分析:* ConYel 提出的彻底移除 Node.js 依赖的 RFC，直接推动了今日 PR #8144 的进展，显示社区对供应链安全和构建简化的共识正在形成。

## 5. Bug 与稳定性
今日报告了多个 P1/P2 级 Bug，主要集中在 Provider 兼容性和配置解析上：

*   **Gemini CLI OAuth 失败 (Issue #4879):** 用户报告 Gemini CLI 认证后仍报错 `rate_limited` 或 `All providers/models failed`。*状态: Open*
*   **MiniMax/OpenAI 兼容模式上下文压缩导致 Tool Loop (Issue #6361):** `context_compression` 错误地丢弃了 `assistant(tool_calls)` 和 `tool(result)`，导致模型陷入无效循环。*状态: In-Progress*
*   **Anthropic Provider Quickstart 后不可用 (Issue #8094):** 快速启动添加 Anthropic 提供商后，聊天窗口无法使用该模型，需重置。*状态: Open, Needs Repro*
*   **Telegram Prompt Caching 失效 (Issue #6360):** Telegram 渠道下提示词缓存未生效，导致全量重新处理，增加延迟和成本。*状态: Open*
*   **Native/MCP Tools 在 OpenAI/Anthropic 回合中不可用 (Issue #7756):** MCP 服务器注册成功，但模型回合未接收到工具定义。*状态: Open*

## 6. 功能请求与路线图信号
*   **本地优先模式与小模型优化 (Issue #5287):** 用户呼吁提供紧凑的本地模型模式，减少 Prompt 膨胀并防止内部指令泄露。*信号: 可能纳入 v0.8.1 或后续微调版本。*
*   **OpenRouter 模型回退数组支持 (Issue #8138 / PR #8141):** 支持 OpenRouter 的原生 `models` 数组以实现自动故障转移。*状态: PR #8141 已提交，极大概率并入下一版本。*
*   **会话 TTL 清理 (PR #8139):** 新增 `channels.session_ttl_hours` 配置，自动截断长时间不活跃的会话历史。*状态: PR 已提交，针对存储增长痛点。*
*   **浏览器工具支持 HTTP (PR #8136):** 放宽 `browser_open` 对 HTTPS 的限制，允许 HTTP。*状态: PR 已提交。*

## 7. 用户反馈摘要
*   **痛点:** 用户普遍反映本地部署时 Prompt 过长导致成本增加和延迟高（Issue #5287）；Telegram 等渠道缺乏有效的即时反馈（如输入指示器），导致用户体验割裂（Issue #8142 / PR #8145）。
*   **安全焦虑:** 随着插件系统的扩展，用户对插件能否窃取 API Key 或发起内网攻击（SSRF）高度敏感。今日多个 Issue (#5918, #5919, #8044) 和 PR (#8130, #8137) 的密集出现，表明维护团队正在积极回应这一核心关切。
*   **配置复杂性:** 尽管有 Quickstart，但自定义 Provider（如 Anthropic）的配置仍存在“添加后不可见/不可用”的认知偏差（Issue #8094），需要更好的 UI 引导或默认值逻辑。

## 8. 待处理积压
*   **Issue #2503:** NapCat/OneBot 渠道缺失问题已开放超过 3 个月，评论数高达 9 条，是社区高频诉求，建议排期评估。
*   **Issue #6074:** 追踪因批量 Revert 丢失的 153 个 Commit，涉及功能恢复，需 CI/维护者重点关注。
*   **Issue #7038:** WebSocket 401 认证失败问题，标记为 `blocked` 且 `needs-author-action`，若作者不跟进可能导致问题搁置。
*   **Issue #4879:** Gemini OAuth 严重阻碍工作流（S1 Severity），需尽快复现并修复。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*