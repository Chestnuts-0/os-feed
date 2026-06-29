# OpenClaw 生态日报 2026-06-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-29 02:32 UTC

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
**日期：** 2026-06-29
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
2026年6月29日，OpenClaw 项目保持极高的开发活跃度，过去24小时内产生了500条Issue更新和500条PR更新，显示出社区与维护者之间紧密的互动节奏。核心焦点集中在**会话存储架构的重大重构**（从JSONL转向SQLite）以及针对近期回归问题的紧急修复。虽然新版本 `v2026.6.11-beta.2` 刚刚发布并引入了渠道控制增强功能，但社区对会话状态丢失、内存泄漏及特定平台（Windows/macOS/Linux）兼容性的反馈依然强烈，表明系统在规模化部署下的稳定性仍是当前主要挑战。

## 2. 版本发布
**v2026.6.11-beta.2** 是今日唯一的发布版本。

*   **核心亮点：**
    *   **增强的渠道控制：** 支持 Slack Relay 模式，原生 Mattermost `/oc_queue` 命令，以及针对每个 DM 的模型覆盖配置，显著提升了自动化运维和渠道调优的能力。
    *   **操作丰富性：** 改进了内部操作逻辑（注：原始数据截断，推测涉及更细粒度的运行时控制）。
*   **迁移注意事项：** 鉴于同日存在涉及底层存储转换的大规模 PR (#96625)，建议用户在升级后运行 `openclaw doctor` 以确保配置和会话数据的完整性，特别是涉及跨平台部署的环境。

## 3. 项目进展
今日最重大的技术推进是 **PR #96625** (`refactor: flip sessions and transcripts to sqlite storage`)，由 `jalehman` 发起。

*   **关键进展：** 该 PR 标志着 OpenClaw 将核心会话和转录存储从传统的 `sessions.json` 和 JSONL 文件全面迁移至 SQLite。这是解决长期存在的会话膨胀、读写锁竞争和数据一致性问题的根本性举措。
*   **其他重要合并/关闭 PR：**
    *   **PR #97624:** 修复了会话工具结果刷新路径中的潜在竞态条件，增强了防御性编程。
    *   **PR #97622:** 优化了安全审计逻辑，避免对已知非密钥占位符（如 LM Studio 本地模式）产生误报。
    *   **PR #95616:** 细化了模型使用统计中的异常捕获范围，防止 `KeyboardInterrupt` 等系统信号被意外吞没。
*   **整体影响：** 项目正从“功能堆叠”向“基础设施加固”转型，SQLite 迁移若成功落地，将极大提升高并发场景下的性能上限。

## 4. 社区热点
以下 Issues 评论数最高，反映了用户当前的焦虑点和核心诉求：

1.  **Issue #75 [Linux/Windows Clawdbot Apps]** (110 评论)
    *   **链接:** [openclaw/openclaw Issue #75](https://github.com/openclaw/openclaw/issues/75)
    *   **分析：** 尽管项目已运行较久，但 Linux 和 Windows 的原生应用支持仍被视为缺失的关键拼图。用户强烈期望获得与 macOS/iOS 相当的功能体验，这是扩大开源社区基础的关键障碍。
2.  **Issue #88838 [Track core session/transcript SQLite migration]** (36 评论)
    *   **链接:** [openclaw/openclaw Issue #88838](https://github.com/openclaw/openclaw/issues/88838)
    *   **分析：** 随着 PR #96625 的出现，大量用户和技术关注者正在追踪此次重大架构变更的实施细节、回滚策略及数据迁移安全性。
3.  **Issue #77598 [Track live dev agent behavior]** (22 评论)
    *   **链接:** [openclaw/openclaw Issue #77598](https://github.com/openclaw/openclaw/issues/77598)
    *   **分析：** 开发者对 Agent 在长时间运行下的行为轨迹表现出浓厚兴趣，反映出社区对 Agent 自主性稳定性和可观测性的高度关注。
4.  **Issue #88312 [Regression: Codex app-server turn-completion stall]** (18 评论)
    *   **链接:** [openclaw/openclaw Issue #88312](https://github.com/openclaw/openclaw/issues/88312)
    *   **分析：** 针对 Codex 后端在特定版本下的严重回归问题，用户对此类影响核心工作流的问题容忍度极低。

## 5. Bug 与稳定性
今日报告的 Bug 多集中于**会话状态管理**、**内存泄漏**及**平台兼容性**。

| 严重程度 | Issue ID | 问题描述 | 关联 PR/状态 |
| :--- | :--- | :--- | :--- |
| **P1 Critical** | #86538 | Session 写锁超时导致子代理交付通道阻塞 | 待修复 |
| **P1 Critical** | #55334 | `sessions.json` 无限增长导致 Gateway OOM | 待修复 (可能受 SQLite 迁移缓解) |
| **P1 Critical** | #74484 | Gateway 配对作用域死锁，CLI 无法自动修复 | 待修复 |
| **High** | #88312 | Codex 代理轮次完成停滞 (回归) | 待修复 |
| **High** | #76038 | 卡住的会话恢复机制双重失效，Gateway 无响应 | 待修复 |
| **High** | #76042 | 新版本干净安装失败，启动时间过长 | 待修复 |
| **Medium** | #77930 | Discord 频道加载失败 (回归) | 待修复 |
| **Medium** | #78308 | MCP 工具调用缺乏渠道中介批准机制 | 功能请求/Bug |

*注：SQLite 迁移 (PR #96625) 有望从根本上解决 #55334 和 #86538 等与文件锁和 JSON 解析相关的性能瓶颈。*

## 6. 功能请求与路线图信号
*   **跨平台原生应用：** Issue #75 持续高热度，表明官方需优先规划 Linux/Windows 客户端的开发路线图。
*   **确定性部署模式：** Issue #86881 请求“Gateway-lite”模式，允许在不加载 AI 模型的情况下仅作为网关使用，这符合企业级用户对成本控制和确定性的需求。
*   **MCP 审批管道：** Issue #78308 和 #88312 反映了用户对 MCP 工具调用安全性和人工介入（Approval Envelope）的迫切需求。
*   **i18n 支持：** Issue #79458 和 #79034 指出斜杠命令描述和控制 UI 元数据的国际化缺失，尤其是中文用户群体呼声较高。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍对**内存泄漏**和**会话数据丢失**感到沮丧。多个 Issue (#55334, #83184, #86827) 指出，即使 Agent 正常运行，底层的会话清理和状态同步机制也存在缺陷，导致后续消息被静默丢弃或会话卡死。
*   **满意点：** 用户对 Slack/Mattermost 等新渠道控制的增强表示欢迎（Release Notes 提及）。此外，社区对维护者主动追踪 SQLite 迁移进度（Issue #88838）持积极态度，认为这有助于建立信任。
*   **不满点：** Windows 和 Linux 上的用户体验明显落后于 macOS，且 `sudo openclaw update` 导致的权限混乱问题 (#78493) 增加了运维负担。

## 8. 待处理积压
*   **Issue #75:** 长期未解决的 Linux/Windows 原生应用支持，需产品决策层明确优先级。
*   **Issue #74484:** Gateway 配对死锁问题，影响新用户初始化和设备管理，需安全团队介入。
*   **Issue #88312:** Codex 回归问题，直接影响使用 Codex 作为后端的用户，需快速热修复。
*   **PR #84465:** 安全相关 PR，涉及从生成的配置文件中剥离 API Key，虽已提交但状态为等待作者，需尽快合并以消除潜在泄露风险。

---
*生成时间：2026-06-29*
*分析师：Agnes-2.0-Flash*

---

## 横向生态对比

以下是基于 2026-06-29 各开源项目社区动态的横向对比分析报告。

### 1. 生态全景
2026 年中，个人 AI 助手与自主智能体开源生态正从“功能探索期”全面转向“基础设施加固与企业级部署期”。核心趋势表现为：底层存储从非结构化文件向关系型数据库（SQLite）迁移以解决并发与一致性痛点；安全合规（SBOM、签名、沙箱隔离）成为新项目标配；多代理协作（Multi-Agent）与确定性工作流（Deterministic Workflow）取代单纯的 LLM 对话，成为提升生产环境稳定性的关键。与此同时，跨平台原生体验（尤其是 Windows/Linux 桌面端）和细粒度权限控制成为社区反馈中最集中的短板。

### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 核心特征 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 500+ | 500+ | v2026.6.11-beta.2 | 🟢 极高 | 流量巨大，架构重构期，稳定性挑战严峻 |
| **Hermes Agent** | 50+ | 50+ | 无 | 🟢 高 | 桌面端适配攻坚，安全补丁密集 |
| **IronClaw** | 3+ | 43+ | 无 (内部升级) | 🟡 中高 | 深度重构，测试框架完善，Slack 集成深化 |
| **ZeroClaw** | 50+ | 50+ | 无 | 🟢 高 | SOP 引擎落地，供应链安全合规，WASM 插件 |
| **NanoBot** | 7+ | 24+ | 无 | 🟡 中 | 上下文治理优化，子代理能力增强 |
| **CoPaw** | 6+ | 10+ | 无 | 🟡 中 | Agentscope 2.0 适配，多 Agent 协作优化 |
| **NanoClaw** | 1+ | 6+ | 无 | 🟡 中 | 安全修复（Symlink 逃逸），多平台适配 |
| **Moltis** | 1+ | 2+ | 无 | 🟢 稳 | 内部优化，构建依赖精简，性能微调 |
| **LobsterAI** | 5+ | 5+ | 无 | 🟠 低 | 依赖锁定痛点，UI 细节修复，社区响应滞后 |
| **PicoClaw** | 0+ | 2+ | 无 | 🟢 稳 | 协议标准化，视觉管道优化，适度迭代 |
| **NullClaw** | 0+ | 0+ | 无 | 🔴 停滞 | 维护静默，无实质代码推进 |
| **TinyClaw** | - | - | - | ⚪ 无活动 | 过去 24 小时无数据 |
| **ZeptoClaw** | - | - | - | ⚪ 无活动 | 过去 24 小时无数据 |

### 3. OpenClaw 在生态中的定位
*   **优势**：**社区规模与活跃度断层领先**。500+ 的日均 Issue/PR 数量远超其他项目，表明其拥有最广泛的用户基础和最强的生态号召力。
*   **技术路线差异**：OpenClaw 正处于从“单体应用”向“分布式/多通道网关”转型的关键期，重点解决会话存储（JSONL -> SQLite）和渠道控制（Slack/Mattermost）的规模化问题。相比之下，NanoBot 和 CoPaw 更侧重单代理内部的上下文治理和多代理协作逻辑。
*   **挑战**：巨大的用户基数带来了极高的稳定性压力（P1 级 Bug 频发，如 OOM、死锁），且 Windows/Linux 原生体验严重滞后于 macOS，成为其生态扩张的最大瓶颈。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求/进展 |
| :--- | :--- | :--- |
| **会话/上下文存储优化** | OpenClaw, NanoBot, ZeroClaw | **OpenClaw**: 迁移至 SQLite 解决锁竞争；**NanoBot**: 修复 Prefix Cache 失效；**ZeroClaw**: 解决 Context Compression 导致的工具循环 Bug。 |
| **多代理协作与路由** | NanoBot, CoPaw, ZeroClaw | **NanoBot**: 子代理模型覆盖与 A2A 委托；**CoPaw**: 钉钉 @mention 协作；**ZeroClaw**: SOP 引擎与独立委托目标。 |
| **安全性加固** | NanoClaw, Hermes Agent, ZeroClaw | **NanoClaw**: 修复 Symlink 逃逸；**Hermes**: 限制文件系统遍历；**ZeroClaw**: 引入 SBOM/Cosign 签名及 MCP 工具过滤。 |
| **跨平台/原生体验** | OpenClaw, Hermes Agent, Moltis | **OpenClaw**: 用户强烈渴求 Win/Linux 原生 App；**Hermes**: 修复 Windows 控制台闪烁/IME 问题；**Moltis**: 修复 Apple Container ID 兼容性问题。 |
| **确定性工作流** | Hermes Agent, ZeroClaw | **Hermes**: 用户请求 Deterministic Workflow Engine；**ZeroClaw**: 推出 SOP 引擎，实现步骤 Schema 强制执行。 |

### 5. 差异化定位分析

*   **OpenClaw**: **全能型网关平台**。定位为企业级和个人用户的多渠道 AI 接入中枢，强调渠道丰富性（Slack, Discord, Telegram 等）和高并发处理能力，但牺牲了部分平台原生体验的一致性。
*   **NanoBot**: **轻量级上下文治理专家**。定位为解决 LLM 调用成本高、上下文管理难的垂直领域助手，强调 Prompt Cache 效率和子代理的资源隔离，适合对 Token 成本敏感的场景。
*   **Hermes Agent**: **桌面端优先的生产力工具**。定位是类似 Cursor 或 VS Code 的智能 IDE 伴侣，强调 Windows/macOS 原生 GUI 体验和确定性工作流，适合开发者和本地化部署需求。
*   **ZeroClaw**: **企业级自动化编排引擎**。定位是具备严格安全合规（SLSA, SBOM）和 SOP 执行能力的自动化平台，强调供应链安全和多代理的标准作业程序，适合对安全性要求极高的企业环境。
*   **CoPaw**: **Agentscope 生态连接器**。定位是深度集成阿里云 Agentscope 框架的多 Agent 协作平台，强调与钉钉等国内 IM 工具的无缝对接，适合国内企业级多 Agent 应用场景。
*   **IronClaw**: **Reborn 子系统重构者**。定位是通过深度重构底层协议和测试框架来提升系统稳定性的项目，特别强调 Slack 的深度集成和错误信息的精细化，适合重度 Slack 用户。

### 6. 社区热度与成熟度

*   **快速迭代阶段 (High Velocity)**: **OpenClaw**, **Hermes Agent**, **ZeroClaw**。这些项目每日有数十至上百次交互，正处于功能快速扩张和架构剧烈变动的时期，Bug 率相对较高，但新功能涌现也快。
*   **质量巩固阶段 (Stabilization)**: **NanoBot**, **CoPaw**, **IronClaw**。PR 数量适中，重点在于修复前期遗留的 Bug（如缓存失效、测试框架完善、依赖适配），代码库趋于稳定。
*   **维护/停滞阶段 (Maintenance/Stagnation)**: **NullClaw**, **TinyClaw**, **ZeptoClaw**。缺乏实质性的代码贡献，社区互动极少，长期维护风险高。
*   **特定场景深耕 (Niche Optimization)**: **PicoClaw**, **Moltis**, **NanoClaw**。项目规模较小，但聚焦于特定痛点（如协议标准化、构建优化、安全修复），社区反馈精准，维护效率高。

### 7. 值得关注的趋势信号

1.  **从“对话”到“工作流” (Workflow over Chat)**:
    *   **信号**: Hermes 用户请求确定性工作流，ZeroClaw 推出 SOP 引擎，CoPaw 强化多 Agent 协作。
    *   **启示**: 开发者应减少对单纯 LLM 对话能力的投入，转而关注任务分解、状态管理和工具调用的确定性，以提升 AI 在复杂场景下的可靠性。

2.  **数据持久化与存储架构升级**:
    *   **信号**: OpenClaw 大规模迁移至 SQLite，NanoBot 优化缓存机制，ZeroClaw 解决上下文压缩 Bug。
    *   **启示**: JSONL 等非结构化存储已无法满足高并发和复杂查询需求。采用关系型数据库或引入专业的向量/混合检索后端将成为新一代 AI 助手的标配。

3.  **安全合规成为准入门槛**:
    *   **信号**: ZeroClaw 引入 SBOM/Cosign，NanoClaw 修复 Symlink 逃逸，Hermes 限制文件遍历。
    *   **启示**: 随着 AI 智能体获得更高的系统权限，供应链安全和运行时沙箱隔离不再是可选功能，而是企业部署的必要条件。开发者需尽早集成安全扫描和权限最小化策略。

4.  **跨平台体验鸿沟亟待填补**:
    *   **信号**: OpenClaw 和 Hermes 的 Windows/Linux 支持被频繁诟病。
    *   **启示**: 仅支持 macOS/iOS 已无法吸引大众市场。利用 Electron/Tauri 等技术构建高性能、跨平台的原生 GUI，并提供完善的 IME 支持和后台服务管理，是扩大用户基数的关键。

5.  **上下文感知的精细化治理**:
    *   **信号**: NanoBot 的 Prefix Cache 修复，CoPaw 的滚动上下文管理。
    *   **启示**: 随着对话长度增加，Token 成本和控制难度呈指数上升。实现动态上下文裁剪、记忆检索（RAG）与对话历史的无缝结合，是提升用户体验和控制成本的核心竞争力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-06-29
**数据来源：** GitHub HKUDS/nanobot

## 1. 今日速览
NanoBot 项目在今日展现出极高的开发活跃度，过去24小时内新增了 **24 条 Pull Requests** 和 **7 个 Issues**。开发重心明显集中在**上下文治理优化**（解决 Prompt Cache 失效问题）、**子代理（Sub-agent）能力增强**（模型覆盖、MCP 工具继承、A2A 通信）以及**安全性加固**（Shell 执行防护）。虽然今日没有发布新的正式版本（Release），但大量 PR 的合并预示着即将进行的重大功能迭代和性能提升。社区对语音输出和 WebUI 体验改进的需求依然强烈。

## 2. 版本发布
*   **无新版本发布。**
*   当前最新稳定版仍为 `v0.2.2`（根据 Issue #4500 提及）。
*   建议开发者密切关注即将合并的代码，特别是涉及 `session` 和 `context` 核心逻辑的重构，可能会在下次 Release 中带来显著的缓存命中率提升。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的稳定性和功能性：

*   **上下文缓存修复 (High Impact):**
    *   **#4568** 由 `findshan` 提交，修复了 `max_messages` 截断导致的 Prefix/Prompt 缓存持续失效问题（关联 Issue #4222）。这是降低 LLM 调用成本、提升响应速度的关键优化。
    *   **#4566** 由 `axelray-dev` 提交，修复了 `list_sessions` 中因旧版非 Base64 文件名导致的会话列表静默丢弃 Bug，提升了数据完整性。
*   **WebUI 体验修复:**
    *   **#4565** 由 `axelray-dev` 提交，解决了 WebUI 自重启后 WebSocket 连接残留导致的“卡死”状态和停止按钮误报问题（关联 Issue #4500），大幅改善了多会话并行使用的稳定性。
*   **安全与健壮性:**
    *   **#4510** 和 **#4569** 由 `m11y` 提交，增强了代理层对畸形 Tool Call 的容错处理，防止上游 Relay 返回的损坏数据导致代理崩溃或陷入无限循环。
*   **功能扩展:**
    *   **#4504** 由 `goodtiding5` 提交，支持 Skills 目录的子目录分组，提升了复杂技能库的可管理性。
    *   **#4542** 由 `codedragoncom` 提交，修复了 MCP 工具返回图片内容时的序列化问题，确保图像能正确作为 Artifact 传递。

## 4. 社区热点
以下 Issue 和 PR 获得了较高的关注度或代表了强烈的用户需求：

*   **[Feature] Text-to-Speech Support (Issue #4010)**
    *   **热度:** 2 👍, 2 评论
    *   **分析:** 用户 `olgagaga` 提出让 NanoBot 具备语音输出能力，以闭合“听-说”交互循环。尽管目前主要通道仅支持文本输入，但 WebRTC/Voice Note 场景下的反馈表明，语音输出是提升移动端和车载场景体验的关键缺失环节。
*   **[Enhancement] Spawn Tool Model Override (Issue #4231 & PR #4570)**
    *   **分析:** 用户 `jsapede` 指出无法为子代理指定不同模型的限制。PR #4570 (`findshan`) 已实现此功能，允许在 `spawn` 时指定 `model` 参数。这反映了高级用户对**成本优化**（子任务用小模型）和**专业化分工**（特定任务用强模型）的迫切需求。
*   **[Enhancement] Conda Environment for Subprocesses (Issue #4580)**
    *   **分析:** 用户 `HaoyangSunMartin` 希望原生支持虚拟环境/Conda 执行上下文，以隔离依赖。这显示了企业级或复杂科学计算场景中，环境一致性是阻碍 NanoBot 广泛部署的主要痛点之一。

## 5. Bug 与稳定性
今日报告的问题主要集中在缓存机制、WebUI 状态管理和安全边界上：

1.  **Prompt Cache 失效 (Critical):**
    *   **Issue #4222:** `max_messages` 截断和 `microcompact` 机制导致前缀不断变化，使缓存命中率趋近于零，严重增加延迟和成本。
    *   **状态:** **已修复** (见 PR #4568)。
2.  **WebUI 状态卡死 (High):**
    *   **Issue #4500:** 服务自重启后，前端 WebSocket 未正确重置，导致 UI 显示“处理中”且停止按钮失效。
    *   **状态:** **已修复** (见 PR #4565)。
3.  **Shell 执行绕过风险 (High Security):**
    *   **Issue #4521 (Referenced in PR #4562):** `exec.allowPatterns` 使用正则搜索，导致链式命令（如 `cmd1 && evil_cmd`）绕过白名单检查。
    *   **状态:** **正在修复** (见 PR #4562)，通过分段验证命令来加固沙箱。
4.  **Weixin 流式传输丢失 (Medium):**
    *   **PR #4567:** 微信渠道因配置字段缺失导致静默降级为非流式模式，且在某些 Relay 下丢失 Tool Use 元数据。
    *   **状态:** **Open**，需合并以恢复流式体验和数据完整性。

## 6. 功能请求与路线图信号
基于今日提交的 PR 和 Issue，可推断出以下路线图方向：

*   **细粒度成本控制:** 通过 PR #4581 (`optimization: reducing context usage`) 和 PR #4570 (子代理模型覆盖)，项目正致力于通过更智能的上下文压缩和模型路由来降低 Token 消耗。
*   **Agent 协作网络:** PR #4571 (`feat(subagent): native A2A peer delegation`) 引入了 Agent-to-Agent 的原生委托机制，并带有跨委托深度守卫。这表明 NanoBot 正从“单代理”向“多代理团队”架构演进，支持更复杂的任务分解。
*   **MCP 生态完善:** 多个 PR (#4192, #4542, #4562) 都在深化对 MCP (Model Context Protocol) 的支持，包括工具继承、图像处理和执行安全，预示 MCP 将成为核心集成标准。
*   **基础设施灵活性:** Issue #4580 提出的 Conda 支持若被采纳，将显著提升 NanoBot 在数据科学和工程领域的适用性。

## 7. 用户反馈摘要
*   **痛点:** 用户在长期使用中发现，随着对话变长，缓存机制反而成为性能瓶颈（Issue #4222）。此外，WebUI 在多会话切换和服务重启时的状态同步问题影响了用户体验（Issue #4500）。
*   **期望:** 高级用户渴望更多的控制权，例如指定子代理使用的模型（Issue #4231）以及在复杂环境中运行代码的能力（Issue #4580）。
*   **满意点:** 社区对“Keep it tiny”的设计哲学表示认可，倾向于轻量级、模块化的改进（如 Issue #4579 中的侧边栏时间戳功能），而非臃肿的大重构。

## 8. 待处理积压
*   **Issue #4010 [Feature] TTS Support:** 创建超过一个月，仍有 2 个点赞。这是一个高价值功能，建议优先评估技术可行性。
*   **Issue #4580 [Enhancement] Conda Env Support:** 新提 Issue，反映实际部署中的环境隔离需求。
*   **PR #4567 [Fix] Weixin Streaming:** 涉及核心渠道的流式传输和数据完整性，虽已修复但尚未合并，需尽快审查以避免微信用户持续遭遇非流式体验。
*   **Issue #3938 [Enhancement] Group Chat Debounce:** 针对飞书/Telegram 群聊的消息抖动问题，提出了缓冲机制的需求，有助于提升多用户场景下的响应质量。

---
*Generated by Agnes-2.0-Flash based on provided GitHub data.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-29
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 项目在 2026-06-29 保持极高活跃度，过去24小时内产生50个新Issue和50个PR更新，显示社区参与度旺盛。核心焦点集中在 **Windows Desktop GUI 的稳定性修复**（控制台闪烁、IME输入问题、启动超时）以及 **Agent 执行层的并发安全与资源限制**。多个高优先级（P1/P2）的安全补丁和架构重构（Dashboard/Desktop 解耦、共享 WebSocket 层）正在并行推进，表明项目正处于从 CLI/TUI 向全平台桌面体验转型的关键加固期。

## 2. 版本发布
*   **无新版本发布。**
*   当前主要分支为 `v0.17.0+` 阶段，重点在于修复和集成，而非大版本迭代。

## 3. 项目进展
今日合并/关闭的重要 PR 显著提升了系统的健壮性和安全性：
*   **架构解耦与统一：** PR #54568 将 Desktop 和 Dashboard 的 WebSocket/JSON-RPC 层统一，消除了代码冗余并简化了部署复杂度。PR #54558 统一了 Cron/Profiles/Agents 的 UI 面板原语，提升了桌面端的一致性。
*   **关键安全修复：** PR #54569 修复了 Matrix 和 Mattermost 平台的认证漏洞（邀请白名单检查及路径遍历防护）。PR #54563 限制了 `.hermes.md` 的文件系统遍历范围，防止跨用户提示注入攻击。
*   **功能完善：** PR #54517 为桌面应用引入了多终端面板支持，增强了开发者和高级用户的调试能力。PR #54562 引入了并发工具调用的超时限制，防止单个卡死的工具导致整个 Agent 轮次冻结。

## 4. 社区热点
以下 Issue 获得了较高的关注度（评论数多或点赞数高），反映了用户的核心痛点：

*   **[Tracking] Windows Desktop GUI: console windows flash on subprocess spawns (#54220)**
    *   **热度：** 8 条评论，0 👍 (作为 Tracking Issue，聚合了大量子问题)
    *   **分析：** 这是 Windows 桌面版目前最活跃的 Bug 追踪贴。用户普遍反映在调用子进程（Git, PowerShell, CMD）时出现黑框闪烁，严重影响用户体验。这与 PR #54565 试图解决的 `photon` 侧车启动问题直接相关。
*   **[Feature]: Deterministic Workflow Engine (#5354)**
    *   **热度：** 8 条评论，8 👍
    *   **分析：** 用户对“确定性工作流”的需求强烈，希望替代 LLM 的随机规划以降低成本并提高可靠性。这表明用户开始从“探索性 AI 助手”转向“生产级自动化”场景。
*   **[Bug]: Fails to install NeuTTS during setup (#3002)**
    *   **热度：** 12 条评论，4 👍
    *   **分析：** 安装配置阶段的 TTS 模块缺失是新手用户的高频阻碍点，评论数最高说明社区对此类基础体验问题的容忍度较低。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 **Windows 桌面端** 和 **Gateway 通信** 层面：

| 严重程度 | 问题描述 | Issue 链接 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **P1/P2** | **Agent 死锁：** 并发工具调用中，一个挂起的工具会导致整个 Turn 无限等待。 | #54562 (PR 已提) | PR #54562 提供了解决方案 |
| **P2** | **Windows 控制台闪烁：** 子进程启动时黑框频繁闪烁，影响视觉体验。 | #54220, #54506, #54528 | PR #54565 尝试修复部分侧车问题 |
| **P2** | **Telegram 打字指示器卡住：** 响应结束后 "typing..." 状态不消失。 | #28004 | 需排查 `_keep_typing` 竞态条件 |
| **P2** | **Desktop Gateway 断连：** 长时间前台任务导致 WebSocket 断开，前端显示重连。 | #48445 | 需检查长连接心跳机制 |
| **P2** | **Windows IME 输入失效：** 中文输入法下回车无法发送消息，或按钮显示异常。 | #39025, #39651 | 需修复 Rich Composer 状态同步 |
| **P3** | **配置优先级冲突：** `~/.hermes/.env` 覆盖了系统级环境变量，违反 12-Factor 原则。 | #19201 | 需调整 `load_dotenv` 行为 |
| **P3** | **Dashboard 滚动漂移：** 长会话中新输入/输出不可见，光标位置错误。 | #53641 | 需优化 xterm.js 滚动逻辑 |

## 6. 功能请求与路线图信号
*   **确定性工作流引擎 (#5354)：** 用户明确要求引入类似 Lobster 的确定性工作流，以减少 Token 消耗并提高任务可靠性。这是一个明确的产品方向信号，可能需要在后续版本中规划 MVP。
*   **持久化知识库 (#531)：** 持续呼吁建立用户工作区和 RAG 集成，目前文件仅存在临时缓存中。这是提升 Hermes 作为“第二大脑”能力的核心缺口。
*   **多终端支持 (#54517)：** 桌面应用新增多终端面板，反映了高级用户对隔离运行环境和并行调试的需求。
*   **CubeSandbox 集成 (#47614)：** 提议通过 KVM 隔离微虚拟机运行高风险工具（Terminal/Code Exec），显示了社区对容器化安全沙箱的强烈兴趣。

## 7. 用户反馈摘要
*   **桌面端体验滞后于 CLI：** 多位用户（如 #54473）指出，Desktop 版本虽然功能丰富，但在基础稳定性（如 IME 支持、启动速度、设置面板可达性 #54545）上甚至不如成熟的 CLI/TUI 体验，存在明显的回归现象。
*   **Windows 适配痛苦：** Windows 用户在启动超时、控制台黑框、代理配置冲突（#25319）等方面遇到了大量障碍，急需更严格的 QA 测试。
*   **安全焦虑：** 用户对 WhatsApp 桥接器的 CVE 漏洞（#44983）和 `.hermes.md` 的路径遍历风险（#54563）表示担忧，期望官方能更快地响应安全审计。
*   **配置困惑：** 用户反映 OpenRouter 配置覆盖自定义 Provider（#39753）以及 LM Studio URL 标准化问题（#54567），说明配置系统的灵活性与易用性之间存在平衡难题。

## 8. 待处理积压
*   **WhatsApp Bridge CVE (#44983)：** 尽管已被标记为 duplicate 或关联 Issue，但底层的 `@whiskeysockets/baileys` 漏洞仍未彻底解决，存在安全风险。
*   **Ollama Cloud 模型列表错误 (#52599)：** 桌面和 CLI 在 Provider 为 `ollama-cloud` 时仅显示本地模型，这是一个明显的功能缺陷，需尽快修复以支持云端模型发现。
*   **Stale Dashboard Processes (#39136)：** 更新后旧版本的 Dashboard 进程残留占用端口，导致新版本无法启动，影响升级体验。
*   **DeepSeek 流式响应中断 (#54049)：** 涉及 OpenResty 代理与 httpx 自定义 Transport 的兼容性问题，需要网络层面的深入调试。

---
*报告生成时间：2026-06-29*
*分析师：Agnes-2.0-Flash (Sapiens AI)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期**：2026-06-29
**数据来源**：GitHub (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 项目在过去24小时内保持适度的开发节奏，主要贡献集中在协议完善与功能扩展上。核心进展在于通过合并图像压缩功能优化了视觉管道的性能，并新增了 Simplex 通道类型以支持更灵活的通信模式。虽然今日无新 Issue 被主动激活，但一条关于 WebSocket 客户端信号确定的 Issue 在昨日正式关闭，标志着该关键协议功能的落地。整体来看，项目处于功能迭代与协议标准化并行的稳定阶段，社区参与度适中，无重大阻塞性问题报告。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日主要推进了两项重要合并/关闭操作，提升了系统的可配置性与通信灵活性：

*   **视觉管道优化 (#2964)**：
    *   **状态**：已合并/关闭
    *   **贡献者**：afjcjsbx
    *   **详情**：引入了可配置的入站图像压缩策略。此前仅依赖 `max_media_size` 限制，现在允许在构建模型负载前进行多级压缩。这一改动显著降低了高解析度图像传输时的带宽消耗和潜在的处理延迟，提升了 Vision Pipeline 的效率。
    *   **链接**：[PR #2964](https://github.com/sipeed/picoclaw/pull/2964)

*   **新增 Simplex 通道类型 (#3193)**：
    *   **状态**：开放中 (Open)
    *   **贡献者**：dim
    *   **详情**：添加了 `simplex` 通道类型支持。这是一个非破坏性的新功能，旨在支持单向通信场景或特定的流式处理需求，丰富了 PicoClaw 的集成能力。目前仍在待合并状态，需关注后续审查进度。
    *   **链接**：[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)

## 4. 社区热点
今日讨论热度主要集中在协议确定性需求的解决上：

*   **WebSocket 客户端完成信号机制 (#2984)**
    *   **状态**：已关闭
    *   **互动**：4 条评论，2 个 👍
    *   **背景分析**：外部 Pico Protocol WebSocket 客户端开发者长期以来缺乏一种确定性的方式来感知 Agent 对单条用户消息的处理完全结束。现有的事件流（如 `message.create`, `typing.stop`）存在时序模糊性。该 Issue 的关闭意味着协议层已明确增加了显式的“turn completion”信号，解决了第三方集成的痛点，提升了 API 的鲁棒性。
    *   **链接**：[Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)

## 5. Bug 与稳定性
*   **今日无新增 Bug 报告**。
*   未观察到导致崩溃或回归测试失败的紧急问题。PR #2964 的合并间接改善了因大图片导致的数据包溢出或处理超时风险，属于稳定性增强而非 Bug 修复。

## 6. 功能请求与路线图信号
*   **显式完成信号需求 (#2984)**：此 Issue 的高关注度（2个点赞）表明，对于外部开发者而言，协议的确定性是优先事项。该功能的实现暗示未来路线图将继续重视 API 的标准化和客户端体验的精细化。
*   **Simplex 通道支持 (#3193)**：新增通道类型表明项目正在向更细分的通信场景拓展，可能预示着未来会有更多针对特定硬件或低延迟场景的接口优化。

## 7. 用户反馈摘要
*   **痛点解决**：用户（特别是 WebSocket 客户端开发者）对缺乏明确的消息处理结束信号感到困扰，这导致了状态同步的复杂性。Issue #2984 的解决直接回应了这一核心痛点，用户对此表示认可。
*   **性能担忧缓解**：通过 PR #2964 的讨论可以看出，用户对大尺寸媒体文件（尤其是图像）的处理效率有明确要求。引入可配置压缩策略表明项目方正在积极响应用户对资源占用和处理速度的关切。

## 8. 待处理积压
*   **PR #3193 (Added simplex channel type)**：
    *   **当前状态**：Open
    *   **建议**：该 PR 创建于一周前（2026-06-27），虽标记为 `stale` 但不影响其作为新功能的价值。建议维护者尽快进行代码审查，确认 Simplex 通道的实现细节是否符合规范，以便将其纳入下一个潜在的功能版本中。
    *   **链接**：[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-06-29
**数据来源：** GitHub (nanocoai/nanoclaw)

### 1. 今日速览
NanoClaw 在过去24小时内保持了中等偏上的开发活跃度，共有 **6 条 PR** 提交和 **1 条新 Issue**。项目重心明显集中在**安全性加固**（解决 symlink 逃逸漏洞）和**多平台适配器修复**（Discord、Telegram、OneCLI）上。虽然无新版本发布，但多个关键修复已被合并，显示出维护团队对稳定性和安全性的重视。社区参与度适中，主要贡献者为核心维护者和资深用户。

### 2. 版本发布
*   **无新版本发布。**

### 3. 项目进展
今日有 **1 条 PR 被合并/关闭**，其余 5 条仍为 Open 状态：
*   **#2879 [CLOSED] fix(agent-to-agent): containment-check target inbox in forwardAttachedFiles**
    *   **进展：** 该 PR 解决了 Agent-to-Agent 附件转发中的 symlink 逃逸问题（关联 Issue #2828）。通过镜像 `src/session-manager.ts` 中的防御模式，确保了写入操作严格限制在会话根目录内。这是今日最重要的安全修复落地，显著提升了多租户环境下的隔离安全性。
    *   **链接：** [PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879)

*   **#2880 [OPEN] fix(security): contain inbox symlink escapes in attachment writes**
    *   **进展：** 作为对 #2828 的全面修复方案，此 PR 旨在从根源上封闭入站和出站文件写入时的 symlink 风险。目前仍在审查中，预计将很快合并。
    *   **链接：** [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)

### 4. 社区热点
*   **Issue #2876 [OPEN] Add OpenAI provider to agent-runner**
    *   **热度分析：** 尽管评论数为 0，但该 Issue 揭示了 CLI 配置与容器实际运行行为之间的不一致性。用户报告 CLI 接受 `--provider openai` 并成功保存配置，但在 spawn 容器时崩溃。这反映了用户对 OpenAI 提供商集成的强烈需求以及当前实现中的缺陷。
    *   **链接：** [Issue #2876](https://github.com/nanocoai/nanoclaw/issues/2876)

*   **PR #2881 [OPEN] fix(discord): decode custom_id delimiter before parsing button actions**
    *   **热度分析：** 修复了 Discord 适配器中因 `\n` 分隔符解析错误导致的按钮动作失效问题。此类底层协议解析 Bug 通常影响大量用户，修复后将提升 Discord 渠道的稳定性。
    *   **链接：** [PR #2881](https://github.com/nanocoai/nanoclaw/pull/2881)

*   **PR #2877 [OPEN] feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage**
    *   **热度分析：** 这是一个功能增强型 PR，利用 Telegram Bot API 10.1 的新特性实现原生富文本渲染。这表明社区正在推动提升消息交互体验，且贡献者遵循了新的技能开发指南。
    *   **链接：** [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)

### 5. Bug 与稳定性
今日报告的主要 Bug 及修复状态如下（按严重程度排列）：

1.  **高危：Symlink 文件写入逃逸 (CWE-59)**
    *   **描述：** 攻击者可利用预置的 symlink 将文件写入到会话目录之外，导致任意主机文件写入。
    *   **状态：** 部分修复已合并 (#2879)，全面修复 PR (#2880) 待合并。
    *   **链接：** [Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828) | [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)

2.  **中危：OpenAI 提供商容器启动崩溃**
    *   **描述：** 配置了 OpenAI 提供商后，Agent 接收消息时容器 spawn 失败。
    *   **状态：** 未修复，新 Issue。
    *   **链接：** [Issue #2876](https://github.com/nanocoai/nanoclaw/issues/2876)

3.  **低危：Discord 自定义 ID 解析错误**
    *   **描述：** `custom_id` 中包含 `\n` 时导致解析失败，按钮动作无法触发。
    *   **状态：** 已有修复 PR (#2881)。
    *   **链接：** [PR #2881](https://github.com/nanocoai/nanoclaw/pull/2881)

4.  **低危：OneCLI 陈旧密钥导致 Codex 重连失败**
    *   **描述：** 当 OpenAI 密钥过期或撤销时，Codex 代理未能正确重新认证，导致对话中断。
    *   **状态：** 已有修复 PR (#2878)。
    *   **链接：** [PR #2878](https://github.com/nanocoai/nanoclaw/pull/2878)

### 6. 功能请求与路线图信号
*   **Telegram 富文本支持：** PR #2877 提出了基于 Telegram Bot API 10.1 的原生富消息渲染。如果合并，将显著提升 Telegram 渠道的用户体验，符合“Feature skill”类别，可能纳入下一版本的渠道增强更新。
*   **Coolify 部署支持：** PR #2875 尝试添加对 Coolify 部署的支持。虽然目前状态为 Open，但这表明社区希望简化 PaaS 层面的部署流程。若合并，将成为重要的运维工具链扩展。
*   **OpenAI 提供商完善：** Issue #2876 暴露了现有 OpenAI 集成的不足。修复此问题将是稳定多模型支持路线的关键一步。

### 7. 用户反馈摘要
*   **痛点：** 用户在使用 CLI 配置 OpenAI 提供商时，遇到配置持久化但运行时崩溃的问题，导致工作流中断。
*   **场景：** 多 Agent 协作场景下，附件传输的安全性成为关注焦点，特别是当 Agent 容器拥有写入权限时。
*   **满意度：** 社区对遵循贡献指南（如 PR #2875, #2877）的新功能持开放态度，但更期待核心适配器（Discord, Telegram）的稳定性和新功能（如富文本）的快速落地。

### 8. 待处理积压
*   **PR #2875 [OPEN] Deploy/coolify**
    *   **建议：** 该 PR 试图引入 Coolify 部署技能，但状态为 Open。建议维护者尽快审查其是否符合当前的技能规范，或给予反馈以加速合并。
    *   **链接：** [PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875)

*   **PR #2877 [OPEN] feat(telegram): native rich rendering**
    *   **建议：** 这是一个高价值的用户体验改进 PR。鉴于 Telegram API 更新，建议优先审查并合并，以抢占功能先机。
    *   **链接：** [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)

*   **PR #2881 [OPEN] fix(discord): decode custom_id delimiter**
    *   **建议：** 修复已合并类似问题的逻辑，但此 PR 仍未合并。建议尽快批准，以恢复 Discord 用户的按钮交互功能。
    *   **链接：** [PR #2881](https://github.com/nanocoai/nanoclaw/pull/2881)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：** 2026-06-29
**数据来源：** GitHub (nullclaw/nullclaw)

## 1. 今日速览
NullClaw 项目在 2026-06-29 呈现出极低的活动状态。过去 24 小时内，仅有一条历史 Issue 被标记为关闭，无新的 Pull Request 提交或合并，亦无新版本发布。项目当前处于维护静默期，社区互动主要集中在对硬件兼容性的早期咨询上，缺乏实质性的代码贡献或功能迭代信号。整体活跃度评估为“停滞”，建议关注核心维护者的响应频率以判断项目长期生命力。

## 2. 版本发布
**无新版本发布。**
- 过去 24 小时内未检测到任何 Release 动作。
- 无破坏性变更或迁移注意事项需记录。

## 3. 项目进展
**无实质性代码推进。**
- **PR 状态：** 0 条待合并，0 条已合并/关闭。
- **进展分析：** 今日没有通过 PR 引入新功能或修复 Bug。项目的代码库在昨日无变更，技术栈和架构保持稳定但未发生演进。

## 4. 社区热点
**Issue #50: [CLOSED] Can this run on an Esp32?**
- **链接:** [nullclaw/nullclaw Issue #50](https://github.com/nullclaw/nullclaw/issues/50)
- **热度分析：**
    - **状态：** 已关闭 (Closed)。
    - **时间线：** 创建于 2026-02-21，更新于 2026-06-28（即昨日）。
    - **评论数：** 4 条评论，点赞数 0。
    - **背后诉求：** 用户 `ngantrandev` 询问项目是否支持 ESP32 微控制器，这表明社区中存在对轻量化、嵌入式部署的需求。该 Issue 在数月后才被关闭，可能意味着维护者经过评估后决定不支持该平台，或认为其不在当前路线图内。此事件反映了边缘计算场景下的兼容性关切，但并未转化为具体的功能请求 PR。

## 5. Bug 与稳定性
**无新增 Bug 报告。**
- 今日未收到任何关于崩溃、回归或稳定性问题的 Issue。
- 由于缺乏活跃的开发者介入和测试反馈，当前无法评估近期版本的稳定性趋势。

## 6. 功能请求与路线图信号
**信号微弱：嵌入式支持需求。**
- **潜在需求：** Issue #50 中提到的 ESP32 支持是一个明确的功能请求信号。
- **路线图推断：** 鉴于该 Issue 已被关闭且无后续 PR 跟进，维护者可能暂时将嵌入式移植排除在短期路线图之外。若该需求具有普遍性，建议社区通过发起新的 Feature Request 并附带技术提案来重新激活讨论，否则该需求可能被视为“低优先级”或“不兼容”。

## 7. 用户反馈摘要
**主要痛点：硬件兼容性边界不清。**
- **用户反馈：** 用户希望了解 NullClaw 在资源受限设备（如 ESP32）上的运行可能性。
- **满意度分析：** 4 条评论和最终关闭状态表明，用户得到了回应（尽管是拒绝或确认不支持），沟通渠道尚属通畅。但未提及具体的使用场景细节（如是否用于 IoT 网关或传感器节点），使得维护者难以提供针对性的优化建议。

## 8. 待处理积压
**无紧急积压项，但存在长期未决的兼容性疑问。**
- **关注点：** 虽然 Issue #50 已关闭，但若未来有更多用户询问类似嵌入式支持问题，建议维护者在 README 或文档中明确列出支持的硬件平台和不支持的列表，以减少重复咨询。
- **行动建议：** 暂无需要立即处理的 PR 或高严重度 Issue。建议监控 Issue 区是否有新的类似硬件兼容性提问，以便提前准备标准化回复。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-29
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目在今日（2026-06-29）保持极高的开发活跃度，过去24小时内产生了 **43 条 PR 更新** 和 **3 条 Issue 更新**。核心重点在于 **Reborn** 子系统的深度重构与集成测试框架的完善，特别是针对 Slack 配对流程的加固、错误信息的精细化展示以及上下文管理优化的重大进展。尽管没有新的大版本发布，但内部依赖更新频繁（如 agent-client-protocol 1.0.0），显示出技术栈正在快速迭代以支持更复杂的 Agent 交互能力。

## 2. 版本发布
**无新版本发布。**
*注：PR #5311 提及了 `ironclaw_common` 和 `ironclaw_skills` 等组件的版本升级，但这属于 CI/CD 自动化发布的中间状态或预发布步骤，尚未形成正式的 Release Tag。*

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的稳定性和可观测性：

*   **Slack 配对流程加固 (PR #5377 [CLOSED])**:
    *   **内容**: 引入了新的 `/pair` Slack 斜杠命令，用于安全地重新生成配对码，并修复了无效代码赎回时的错误指向问题。
    *   **影响**: 解决了用户在使用 Slack v2 时遇到的配对恢复痛点，提升了用户体验的连续性。
*   **错误信息精细化 (PR #5338 [CLOSED])**:
    *   **内容**: 修复了 Reborn 运行失败时显示通用 "invalid_input" 的问题，改为向终端和工具卡片展示真实的详细错误堆栈。
    *   **影响**: 极大降低了开发者调试门槛，提高了系统排错效率。
*   **集成测试框架扩展 (PR #5392 [OPEN], PR #5386 [CLOSED], PR #5387 [CLOSED])**:
    *   **内容**: henrypark133 推进了 Reborn 集成测试框架的第 3-9 切片，包括 LibSql 矩阵、HTTP 匹配器验证等。其中 Slice 9 (Embeddings fake) 因发现设计缺陷被标记为 STOP 并关闭。
    *   **影响**: 确保了底层基础设施（数据库、HTTP 路由）的可靠性，同时通过测试发现了架构层面的潜在问题并进行了修正。
*   **WebUI v2 独立部署优化 (PR #5236 [CLOSED])**:
    *   **内容**: 停止了将 WebUI v2 的构建产物提交到仓库中，改为完全自托管前端资产。
    *   **影响**: 减少了仓库体积，消除了对 CDN 的运行时依赖，提升了部署的一致性和安全性。

## 4. 社区热点
以下是今日评论数较多或关注度较高的 Issue 和 PR：

*   **[Issue #5385] Add Capability Policy**
    *   **链接**: https://github.com/nearai/ironclaw/issues/5385
    *   **分析**: 用户 zetyquickly 提出需要细粒度的用户配置能力（Owner/Admin/Member）。这反映了项目从单一所有者模式向多用户协作模式演进的强烈需求，是权限管理模块的核心痛点。
*   **[PR #5362] Harden Slack pairing activation flows**
    *   **链接**: https://github.com/nearai/ironclaw/pull/5362
    *   **分析**: BenKurrek 提交的关于强化 Slack 配对激活流程的 PR，旨在隔离配对续期线程并保留本地代码赎回功能。这是解决 Issue #5385 相关体验问题的关键工程实现。
*   **[PR #5394] capability policy e2e**
    *   **链接**: https://github.com/nearai/ironclaw/pull/5394
    *   **分析**: 直接回应 Issue #5385 的端到端测试 PR，表明团队正在积极落实细粒度权限控制的落地验证。
*   **[PR #5149] Context management — progressive tool disclosure**
    *   **链接**: https://github.com/nearai/ironclaw/pull/5149
    *   **分析**: 针对 NEAR AI 超时问题的重大优化，通过逐步披露工具上下文来减少 Token 消耗。这是解决生产环境性能瓶颈的关键补丁。

## 5. Bug 与稳定性
*   **[Issue #4108] Nightly E2E failed**
    *   **链接**: https://github.com/nearai/ironclaw/issues/4108
    *   **严重级别**: 高
    *   **描述**: 夜间端到端自动化测试失败。虽然该 Issue 创建于 5 月 27 日，但在 6 月 28 日仍有活动记录。
    *   **状态**: 尚未关闭，可能由最近的 PR #5392 (Integration-test framework slices) 中的改动引发或需要重新验证。需关注后续 CI 状态。
*   **[PR #5388] fix reborn google oauth decode and preview host login**
    *   **链接**: https://github.com/nearai/ironclaw/pull/5388
    *   **描述**: 修复了 `jsonwebtoken` 10.x 升级后导致的 Google SSO `id_token` 解码失败问题，以及 Railway 预览域名下的登录重定向规范问题。这是一个关键的稳定性修复。

## 6. 功能请求与路线图信号
*   **细粒度权限管理 (Capability Policy)**:
    *   **信号**: Issue #5385 和 PR #5394 明确指向了基于角色的访问控制（RBAC）和细粒度能力策略。
    *   **预测**: 下一版本将包含完整的 Owner/Admin/Member 权限体系，并支持基于策略的工具调用限制。
*   **Slack v2 深度集成**:
    *   **信号**: PR #5362, #5377, #5252 集中展示了 Slack 配对、持久化绑定和对话路由的改进。
    *   **预测**: Slack 将成为 Reborn 的核心入口之一，支持更复杂的异步交互和身份验证流程。
*   **LLM 调用优化**:
    *   **信号**: PR #5149 通过“渐进式工具披露”解决超时问题。
    *   **预测**: 未来的路线图将侧重于降低 Token 成本和提高响应速度，可能涉及更智能的上下文压缩和工具选择算法。

## 7. 用户反馈摘要
*   **痛点**:
    *   **模糊的错误信息**: 用户此前难以定位 Reborn 运行的具体失败原因（见 PR #5338 的背景描述）。
    *   **Slack 配对失败**: 用户在重新配对或恢复会话时遇到阻碍，缺乏清晰的指引和恢复机制（见 PR #5377）。
    *   **LLM 超时**: 生产环境中由于上下文过大导致模型调用超时（见 PR #5149）。
*   **满意点**:
    *   **自托管前端**: 用户受益于不再依赖外部 CDN，部署更加可控和安全（见 PR #5236）。
    *   **测试透明度**: 集成测试框架的切片化开发让用户能更清晰地看到底层组件（如 HTTP 匹配器）的验证过程。

## 8. 待处理积压
*   **[Issue #4108] Nightly E2E failed**:
    *   **链接**: https://github.com/nearai/ironclaw/issues/4108
    *   **建议**: 尽管是旧 Issue，但其关联的 CI 失败可能影响当前开发流。建议维护者在合并重大重构 PR（如 #5392）后，立即验证并关闭此 Issue。
*   **[PR #5392] feat(reborn): integration-test framework slices 3–9**:
    *   **链接**: https://github.com/nearai/ironclaw/pull/5392
    *   **建议**: 该 PR 规模巨大（XL），且包含多个切片的合并。需确保代码审查充分，特别是关于 LibSql 矩阵和 HTTP 匹配器的逻辑正确性。
*   **[PR #5311] chore: release**:
    *   **链接**: https://github.com/nearai/ironclaw/pull/5311
    *   **建议**: 包含 `ironclaw_common` 的破坏性 API 变更。需确认所有下游依赖和文档已同步更新，避免引入兼容性问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-06-29
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
过去24小时内，LobsterAI 项目保持中等活跃度，共产生 5 个 Issue 更新和 5 个 PR 更新。值得注意的是，尽管有 3 个 PR 被合并，但所有 Issue 均标记为 `[stale]` 或已关闭，仅有一个高优先级的技术阻塞性问题 (#2216) 处于开放状态。整体来看，前端 UI 优化和功能细节修复是近期的重点方向，但核心依赖（如 OpenAI Embedding）的配置灵活性仍是当前用户的主要痛点。项目健康度良好，但缺乏新版本发布，部分长期未响应的 Issue 堆积可能影响社区体验。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的 PR 主要集中在用户体验优化和代码健壮性提升上：

*   **PR #1440 (feat/cowork):** 将已选技能标签从底部工具栏移至输入框内部，解决了技能过多时的布局拥挤问题，提升了视觉层级清晰度。
*   **PR #1441 (feat/artifacts):** 合并并修复了 HTML、React 和 Mermaid 的可扩展预览管道，解决了之前的冲突和运行时 Bug，增强了 Cowork 会话中的内容展示能力。
*   **PR #1445 (fix/skills):** 修复了技能导入时的两个关键问题：一是 ZIP 解压后目录名随机导致的安装异常，二是缺乏重复技能校验导致的 System Prompt 污染风险。这对维护 Agent 路由稳定性至关重要。

**进展评估：** 项目在 UI 细节和底层数据一致性上取得了实质性推进，特别是技能管理模块的修复有助于减少因配置错误导致的非预期行为。

## 4. 社区热点
今日讨论最集中的 Issue 均为长期未解决的遗留问题（标记为 `[stale]`），反映出社区对特定功能稳定性的持续关注：

*   **#1443: OpenClaw 新版本适配计划**
    *   **链接:** [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)
    *   **分析:** 用户报告升级 OpenClaw v2026.3.24 后出现 Breaking Change 导致启动失败。这揭示了 LobsterAI 对外部依赖版本更新的滞后性，若不及时适配，可能导致大量用户无法使用最新功能或面临兼容性问题。
*   **#1437 & #1439: 定时任务与技能开关的逻辑缺陷**
    *   **链接:** [Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437), [Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439)
    *   **分析:** 用户反馈在禁用技能后仍能被调用，以及定时任务创建时的 UI 无响应问题。这些属于明显的功能逻辑漏洞，影响了功能的可信度。
*   **#2216: Memory Search 本地 Embedding 支持受阻 (HIGH PRIORITY)**
    *   **链接:** [Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)
    *   **分析:** 这是今日唯一活跃且未关闭的关键 Issue。用户指出 UI 强制锁定 OpenAI Provider，且在 API 限流时导致服务完全不可用。这触及了本地化部署用户的核心需求（隐私、成本、离线可用性），是亟待解决的技术债务。

## 5. Bug 与稳定性
*   **严重 (High):**
    *   **#2216:** Memory Search 无法切换本地 Embedding Provider，且受限于 OpenAI API 配额，存在单点故障风险。
    *   **#1445 修复前的问题:** 技能重复导入导致 System Prompt 混乱，影响 LLM 路由稳定性（已通过 PR #1445 修复）。
*   **中等 (Medium):**
    *   **#1439:** 已停用的技能在对话中仍可被调用，权限控制失效。
    *   **#1442:** Agent 技能引用展示状态不一致，切换会话后才能刷新，存在 UI 状态同步 Bug。
*   **低等 (Low):**
    *   **#1437:** 定时任务创建时 UI 无反馈，用户体验不佳（非功能性崩溃）。

## 6. 功能请求与路线图信号
*   **本地化/去依赖化需求强烈:** Issue #2216 明确指出了用户对摆脱 OpenAI 强依赖的迫切需求，希望支持 Local Embedding Provider。这应被视为路线图中的高优先级任务。
*   **精细化会话状态管理:** PR #1494 (Open) 提出将技能选择状态改为按会话独立管理，这与 Issue #1442 中用户抱怨的技能展示问题相呼应。预计该 PR 合并后将显著改善多会话场景下的用户体验。
*   **定时任务 UI 现代化:** PR #1488 (Open) 展示了定时任务模块的卡片化、搜索和筛选功能升级，表明团队正在着手改善这一复杂模块的可用性。

## 7. 用户反馈摘要
*   **痛点:**
    *   **依赖锁定:** 用户无法在非 OpenAI 环境下可靠使用记忆搜索功能（Issue #2216）。
    *   **配置脆弱性:** 技能导入缺乏校验，容易因文件名或重复安装导致系统行为异常（Issue #1445 背景）。
    *   **状态不同步:** 技能开关、会话切换后的 UI 反馈存在延迟或错误，导致用户困惑（Issue #1439, #1442）。
*   **满意点:**
    *   **UI 优化:** 用户普遍认可将技能标签移至输入框上方（PR #1440）以及定时任务卡片化（PR #1488）的改进，认为这提升了界面的整洁度和操作效率。

## 8. 待处理积压
以下 Issue 和 PR 长期处于 `[stale]` 或开放状态，建议维护者优先关注：

*   **Issue #1443:** OpenClaw 新版本兼容性。需确认官方适配计划或提供临时规避方案。
*   **Issue #1437, #1439, #1442:** 均为功能逻辑 Bug，虽标记 stale 但直接影响核心功能可用性，建议重新打开并分配修复。
*   **PR #1488:** 定时任务模块 UI 升级。功能完整且已测试，建议尽快合并以改善用户体验。
*   **PR #1494:** 技能会话状态隔离。修复了关键的用户体验缺陷，建议合并。

**总结建议：** 当前项目应优先解决 #2216 的技术架构限制（支持本地 Embedding），并清理长期未响应的 Bug 列表（#1437, #1439, #1442），以恢复社区信任。同时，合并 #1488 和 #1494 可显著提升产品成熟度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**：2026-06-29
**数据来源**：GitHub (moltis-org/moltis)

### 1. 今日速览
Moltis 项目在 2026 年 6 月 28 日保持了稳定的开发节奏，主要精力集中在代码优化与依赖管理上。过去 24 小时内，社区贡献了两个重要的 Pull Request (#1138, #1139)，分别针对图像上下文压缩和构建依赖进行修复，显示出开发者对性能瓶颈和构建灵活性的关注。目前无新版本发布，Issue 方面仅有一条关于 Apple Container ID 的 Bug 报告，整体项目处于“内部优化”阶段，健康度良好，但缺乏大规模的功能迭代信号。

### 2. 版本发布
**无新版本发布**。
当前无新的 Release 记录，建议关注即将合并的 PR 以评估下一版本的潜在内容。

### 3. 项目进展
今日有两个关键 PR 处于开放状态，虽未合并，但已明确解决了两个核心痛点：
*   **构建优化 (#1139)**：`fix(gateway): don't force-enable matrix-sdk via the metrics feature`。该 PR 修正了 `metrics` 特性强制引入 `moltis-matrix` 依赖的问题。此前，即使未启用 Matrix 通道，构建也会拉入整个 `matrix-sdk`，导致构建体积冗余。此修复将显著降低非 Matrix 用户的构建依赖负担。
*   **性能优化 (#1138)**：`fix(agents): downscale oversized images before they enter model context`。针对高分辨率图片（如 4032×3024）作为 Base64 嵌入时占用巨大 Token 预算（约 350K tokens）的问题，引入了预处理的图像缩放机制。这直接缓解了上下文溢出导致的 Prompt 拒绝问题，提升了 Agent 处理多媒体输入的稳定性和效率。

### 4. 社区热点
*   **Issue #1137**：[Bug] Apple Container ID exceeds name limit
    *   **链接**：[moltis-org/moltis Issue #1137](https://github.com/moltis-org/moltis/issues/1137)
    *   **分析**：这是今日唯一的 Issue，由用户 `holgzn` 提交。虽然评论数为 0，但标记为 `[bug]` 且涉及 Apple 生态兼容性，可能影响 macOS 或 iOS 集成用户的部署体验。由于是刚提交的 Bug，目前社区关注度较低，但需警惕其是否为更广泛容器命名规范问题的前兆。

### 5. Bug 与稳定性
*   **严重性：中** - **Apple Container ID 长度限制问题**
    *   **描述**：Issue #1137 报告了在 Apple 环境中 Container ID 超过名称限制的错误。
    *   **状态**：Open，暂无关联 Fix PR。
    *   **建议**：若该 ID 生成逻辑硬编码或未考虑特殊字符/长度截断，可能在其他 Unix-like 系统中也存在隐患，建议维护者检查容器 ID 生成的通用性逻辑。

### 6. 功能请求与路线图信号
*   **隐式信号：上下文窗口管理精细化**
    *   通过 PR #1138 可以看出，Moltis 正在积极优化 Agent 处理非文本模态（图像）的能力。这表明未来的路线图可能侧重于“多模态输入的预处理管道”建设，而不仅仅是增加模型支持。
*   **隐式信号：模块化构建**
    *   PR #1139 反映了对“按需加载”特性的重视，暗示项目可能在向更轻量级、插件化的架构演进，以减少不必要的依赖注入。

### 7. 用户反馈摘要
*   **痛点**：
    *   **Token 浪费**：用户在使用包含高清照片的会话时，遭遇严重的 Token 预算耗尽问题，导致正常对话被中断（PR #1138 摘要提及）。
    *   **构建冗余**：启用 Metrics 监控却被迫引入完整的 Matrix SDK，造成资源浪费（PR #1139 摘要提及）。
*   **满意度**：
    *   目前 Issue 评论区无负面反馈积累，但 PR 摘要中明确指出了之前版本在资源管理上的缺陷，说明用户对这些性能问题较为敏感。

### 8. 待处理积压
*   **Issue #1137**：Apple Container ID 兼容性问题。
    *   **行动建议**：由于是今日新报 Bug 且无评论，建议维护者优先确认复现步骤，判断是否为特定环境配置错误还是代码缺陷。
*   **PR #1138 & #1139**：
    *   **行动建议**：这两个 PR 均为修复性质（fix），且由同一位贡献者 (`resumeparseeval`) 提交，逻辑清晰。建议快速审查并合并，以改善用户体验和构建效率。

---
*注：以上数据基于 2026-06-29 00:00 至 23:59 (UTC+8) 期间的 GitHub 活动快照。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期**：2026-06-29
**数据来源**：GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
CoPaw 项目在 2026 年 6 月 29 日保持高活跃度，过去 24 小时内共产生 **16 条** 关键更新（6 条 Issues，10 条 PRs）。项目重心明显集中在 **Agentscope 2.0 适配** 与 **多 Agent 协作体验优化** 上。虽然无新版本发布，但 PR #5531 显著提升了测试效率，而 PR #5568 和 #5590 直接回应了插件安装与钉钉集成中的关键痛点。整体项目健康度良好，社区贡献者活跃，技术债务正在通过系统性的单元测试和架构调整逐步偿还。

## 2. 版本发布
*   **当前状态**：无新版本发布。
*   **备注**：近期 Issue 中提及的版本为 `v1.1.12.post2` 及 `v1.1.11.post2`，且多个 PR 正在适配 `agentscope==2.0.2`，暗示项目可能正处于向 2.0 核心版本过渡或大版本更新的准备期。

## 3. 项目进展
今日主要进展体现在基础设施优化、兼容性修复及核心功能增强：

*   **测试效能提升**：
    *   **PR #5531** ([Link](https://github.com/agentscope-ai/QwenPaw/pull/5531))：通过引入 `pytest-xdist`并行执行，将本地集成运行时间从 ~24 分钟缩短至 ~3.5 分钟（提升约 7 倍），并修复了并行调度下的测试不稳定问题。这对加速 CI/CD 流程至关重要。
*   **Agentscope 2.0 适配**：
    *   **PR #5581, #5422, #5423** ([Links](https://github.com/agentscope-ai/QwenPaw/pull/5581), [5422](https://github.com/agentscope-ai/QwenPaw/pull/5422), [5423](https://github.com/agentscope-ai/QwenPaw/pull/5423))：由贡献者 `hanson-hex` 提交的大规模单元测试覆盖，针对 `qwenpaw.app` 基础设施层、聊天模块及定时任务模块进行了重构，以适配 Agentscope 2.0 的 API 变更（如包重命名 `runner` -> `chats`）。
*   **插件与渠道修复**：
    *   **PR #5568** ([Link](https://github.com/agentscope-ai/QwenPaw/pull/5568))：修复了官方插件在 QwenPaw 2.0 环境下因 Agentscope 1.x 到 2.x 迁移导致的安装失败问题，确保了生态系统的可用性。
    *   **PR #5590** ([Link](https://github.com/agentscope-ai/QwenPaw/pull/5590))：实现了钉钉群聊中的 `@mention` 支持，允许 Agent 在主动发送消息时指定提醒对象，增强了多 Agent 协作的可操作性。
*   **UI 与上下文管理**：
    *   **PR #5515** ([Link](https://github.com/agentscope-ai/QwenPaw/pull/5515))：更新了 `@agentscope-ai/chat` 依赖至 Beta 版本，启用了新的聊天 UI 功能（如用户消息导航器锚点变体）。
    *   **PR #5321** ([Link](https://github.com/agentscope-ai/QwenPaw/pull/5321))：引入了基于检索的“滚动”上下文管理策略，通过持久化存储替代单纯的总结压缩，允许模型按需回忆历史对话细节。

## 4. 社区热点
以下 Issues 引发了较多关注或代表了强烈的用户需求：

*   **跨 Agent 无限循环 Bug**：
    *   **Issue #5204** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5204))：报告了两个 QwenPaw Agent 通过 Matrix 通信时陷入双向唤醒死循环的问题。这是典型的复杂多 Agent 系统稳定性挑战，尽管已关闭，但其反映的架构缺陷仍是社区关注焦点。
*   **钉钉 @mention 功能需求**：
    *   **Issue #5564** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5564)) & **PR #5590**：用户强烈要求在钉钉群中支持 `@` 其他 Agent，以实现更清晰的多 Agent 协作记录。该需求已通过 PR #5590 得到实质性推进，体现了开发者对即时通讯场景集成的重视。
*   **记忆检索精度优化**：
    *   **Issue #5588** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5588))：指出当前 `memory_search` 仅使用 Embedding 单阶段检索，缺乏精排导致召回精度随记忆量增加而下降。建议引入 Reranker 模型实现两阶段检索，这是提升长期记忆准确性的关键技术路径。

## 5. Bug 与稳定性
*   **日志噪音问题**：
    *   **Issue #5591** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5591))：用户报告在 UOS 系统下，终端频繁打印 `GET /api/console/inbox/events?...` 日志，单晚超过 40,000 条。这属于中等严重程度的体验类 Bug，可能源于高频轮询或缺少日志级别控制，需优化后端事件推送机制。
*   **工具安装错误**：
    *   **Issue #5587** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5587))：`Qwen-Image Tool` 安装报错。由于缺乏具体堆栈信息，目前尚无法定位根因，但属于核心视觉能力的基础组件故障，影响用户体验。
*   **上下文压缩阈值忽略运行时配置**：
    *   **PR #5586** ([Link](https://github.com/agentscope-ai/QwenPaw/pull/5586))：修复了当用户在会话内切换模型时，上下文压缩逻辑仍读取静态配置而非运行时模型参数的 Bug。这解决了动态模型切换导致的资源浪费或截断不当问题。

## 6. 功能请求与路线图信号
*   **输入框多技能连续添加**：
    *   **Issue #5589** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5589))：用户希望在使用 `/` 触发技能下拉菜单后，无需重复输入 `/` 即可连续添加多个技能。这反映了用户对高效交互的期待，建议前端团队优化命令解析器的状态保持。
*   **记忆系统 Reranker 支持**：
    *   **Issue #5588** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5588))：明确提出在记忆搜索中集成专用 Reranker 模型。鉴于当前大模型应用对长窗口记忆的需求增长，此功能极可能纳入下一版本的路线图优先事项。
*   **钉钉深度集成**：
    *   **Issue #5564** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5564))：除了 @mention，用户还隐含了对多 Agent 在 IM 群组中协作可见性的需求。PR #5590 的实现只是第一步，后续可能涉及更复杂的群组权限或消息路由逻辑。

## 7. 用户反馈摘要
*   **痛点**：
    *   **日志泛滥**：Issue #5591 显示用户对生产环境中的日志噪音极度反感，认为其干扰调试且占用终端资源。
    *   **安装障碍**：Issue #5587 和 Issue #5568（虽为 PR 但对应 Issue 背景）表明，随着 Agentscope 版本的快速迭代，插件和工具的兼容性安装成为新手用户的最大门槛。
    *   **交互繁琐**：Issue #5589 指出技能选择流程不够流畅，重复输入符号降低了操作效率。
*   **满意点**：
    *   **性能优化**：PR #5531 带来的测试速度大幅提升，间接预示着未来版本发布和迭代周期的缩短，有利于长期维护者和早期采用者。
    *   **协作能力增强**：钉钉 @mention 功能的开发（PR #5590）直接解决了多 Agent 场景下的沟通断层问题，获得了相关用户的积极反馈。

## 8. 待处理积压
*   **Qwen-Image Tool 安装错误** (**Issue #5587**)：
    *   **状态**：Open，无 Assignee，无关联 PR。
    *   **建议**：需立即排查依赖冲突或镜像源问题，否则将阻碍视觉 Agent 的部署。
*   **内存搜索 Reranker 实现** (**Issue #5588**)：
    *   **状态**：Open，Enhancement。
    *   **建议**：虽然技术方向明确，但尚无 PR 跟进。建议将其列为高优先级特性，分配工程师进行原型开发。
*   **日志频率控制** (**Issue #5591**)：
    *   **状态**：Open，Question/Bug。
    *   **建议**：检查 `/api/console/inbox/events` 的轮询间隔或实现去重/限流机制，避免无效请求刷屏。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-29
**数据来源：** ZeroClaw GitHub Repository (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-06-29 保持高活跃度，过去 24 小时内共产生 100 次关键交互（50 Issues + 50 PRs）。虽然未发布新版本，但核心架构演进显著，特别是 **SOP (Standard Operating Procedure) 引擎** 和 **WASM 插件系统** 取得了实质性进展。安全合规方面，Release Pipeline 的签名与 SBOM 生成流程已正式合并，标志着项目在供应链安全上的成熟。社区对 Telegram 渠道的多消息模式及权限控制机制讨论热烈，反映出用户对即时通讯体验优化的强烈需求。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在基础设施加固、SOP 引擎实现及运行时优化：

*   **供应链安全强化 (PR #8404):** 实现了 Issue #8058 中的提议，为 Release Pipeline 添加了 Cosign 签名、SLSA 溯源证明及 SBOM 发布。这是项目迈向企业级可信分发的关键一步。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8404)
*   **SOP 引擎核心功能落地 (PR #8393, #8399, #8420, #8416):** 多个 PR 共同推进了 SOP 引擎的实现。包括引入“目标模式” (Goal Mode)、执行实时 SOP 步骤、以及在引擎边界强制执行步骤 Schema。这解决了复杂工作流自动化的核心痛点。
    *   [Goal Mode](https://github.com/zeroclaw-labs/zeroclaw/pull/8393)
    *   [Live Execution](https://github.com/zeroclaw-labs/zeroclaw/pull/8399)
    *   [Schema Enforcement](https://github.com/zeroclaw-labs/zeroclaw/pull/8420)
*   **代理委托模式优化 (PR #8239):** 实现了独立委托目标 (Independent Delegate Targets)，允许专家代理在各自策略下运行，提升了多代理协作的灵活性和隔离性。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8239)
*   **可观测性增强 (PR #6966):** 捕获 LLM 响应 Span 中的 prompt/completion 内容，显著改善了 Langfuse 和 Tempo 等追踪工具中的调试能力。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/6966)
*   **运行时稳定性修复 (PR #8463, #8350, #8326):** 限制了交互式 CLI 输入行数以防内存溢出；优化了 Web 搜索标签剥离的正则表达式性能；修复了 Windows Notepad 编辑 config.toml 时的 UTF-8 BOM 解析错误。
    *   [Input Cap](https://github.com/zeroclaw-labs/zeroclaw/pull/8463)
    *   [Regex Perf](https://github.com/zeroclaw-labs/zeroclaw/pull/8350)
    *   [BOM Fix](https://github.com/zeroclaw-labs/zeroclaw/pull/8326)

## 4. 社区热点
以下 Issues 因高评论数或近期活跃成为讨论焦点：

*   **MCP 工具过滤失效 (Issue #6699):** 用户指出 `tool_filter_groups` 对真实 MCP 工具无效，且存在前缀匹配 Bug。这是一个 P1 级高风险问题，直接影响 MCP 生态的工具安全管控。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
*   **翻译文件模块化 (Issue #7184):** 提议将 `.ftl` 和 `.po` 文件移至 Git Submodule，以解耦翻译工作流与主仓库历史。此提议获得较高关注度，涉及构建系统的重大重构。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)
*   **Telegram 多渠道消息模式 (Issue #8445):** 新提出的功能请求，希望 Telegram 渠道能像原生 Bot 一样发送多条消息而非合并为一条，极大改善长对话体验。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)
*   **插件系统去冲突 (Issue #6943):** RFC 提议用 Wasmtime Component Model 替代 Extism，以解决 FND-001 中的架构矛盾。这是插件生态未来的核心技术路线之争。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)
*   **内存生命周期解耦 (Issue #6850):** 提议引入 `MemoryStrategy` trait，使记忆管理策略与存储后端分离，提升架构灵活性。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)

## 5. Bug 与稳定性
今日报告或关注的 Bug 按严重程度排列：

*   **[P1] Context Compression 导致工具循环 (Issue #6361):** OpenAI 兼容提供商（如 MiniMax）在上下文压缩时丢弃 `assistant(tool_calls)` 和 `tool(result)`，导致 2013 无效角色错误或无限工具循环。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)
*   **[P1] 频道会话持久化竞态条件 (Issue #7753):** 并发同一发送者的消息处理存在排序竞态，可能导致会话状态不一致。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7753)
*   **[P2] SQLite 默认后端嵌入模型缺失 (Issue #8386):** Quickstart 流程未提示配置嵌入模型，导致混合搜索静默降级为仅关键词搜索，用户体验受损。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)
*   **[P2] 心跳引擎读取路径错误 (Issue #8366):** Heartbeat Engine 从 `data_dir` 而非 agent workspace 读取任务，可能导致配置冲突。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8366)
*   **[P2] Telegram 提示缓存失效 (Issue #6360):** Telegram 渠道无法复用 Prompt Caching，导致重复计算和成本增加。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)
*   **[P3] ZeroCode 快捷键误导 (Issue #7800):** macOS 上部分快捷键不可达或描述不清。
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)

*注：Issue #6361 和 #7753 目前尚无明确合并的 Fix PR，需优先关注。*

## 6. 功能请求与路线图信号
*   **SOP 引擎完善:** 通过 PR #8393, #8399, #8420 等系列 PR，可以看出 **SOP (标准作业程序)** 是 v0.8.3/v0.9.0 期间的核心功能方向，重点在于自动化复杂工作流。
*   **文件保护机制:** Issue #8424 提出 `.ignore` 文件机制，用于保护敏感文件不被 AI 访问。这与现有的 `forbidden_paths` 形成互补，可能纳入下一版本的安全特性。
*   **技能注册表扩展:** Issue #7816 建议支持可插拔的技能注册表，允许用户配置外部来源（如 ClawHub），增强生态开放性。
*   **Telegram 富媒体支持:** Issue #8415 请求实现 Telegram Bot API 10.1 Rich Messages，旨在提升聊天界面的可视化效果。

## 7. 用户反馈摘要
*   **痛点:** 用户在处理多轮工具调用时，遇到因上下文压缩导致的协议不兼容问题（Issue #6361）；Telegram 渠道的消息合并导致长对话难以阅读（Issue #8445）；Quickstart 流程对高级功能（如嵌入模型）引导不足，导致功能静默降级（Issue #8386）。
*   **满意点:** 用户对 Release Pipeline 的安全加固（Cosign/SLSA）表示认可；SOP 引擎的逐步实现满足了自动化工作流的迫切需求；独立委托模式的引入提高了多代理协作的可控性。
*   **使用场景:** 大量用户关注跨平台兼容性（macOS 快捷键、Windows BOM 问题）、企业级安全合规（文件保护、插件安全）以及即时通讯渠道的体验优化。

## 8. 待处理积压
*   **Issue #6699 (MCP Filter Bug):** P1 级严重 Bug，影响 MCP 工具的安全性，需尽快定位并修复。
*   **Issue #7753 (Session Race Condition):** 涉及核心会话逻辑的竞态条件，可能导致数据丢失或状态错误，优先级高。
*   **Issue #6943 (Plugin System RFC):** 架构层面的重大变更提案，需要社区和核心团队进行深入的技术评审和决策。
*   **Issue #8386 (SQLite Embedding Gap):** 虽然非崩溃性 Bug，但严重影响新手体验和默认配置的有效性，建议作为 UX 改进项快速跟进。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*