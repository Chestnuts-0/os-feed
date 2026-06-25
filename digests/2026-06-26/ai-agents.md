# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-25 18:45 UTC

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
**日期：** 2026-06-26
**数据来源：** GitHub openclaw/openclaw

## 1. 今日速览
OpenClaw 项目在 2026-06-26 保持极高的开发活跃度，过去24小时内产生了 500 条 Issue 更新和 500 条 PR 更新，显示出社区贡献与维护团队响应的高强度节奏。主要焦点集中在**内存泄漏修复**、**会话状态稳定性**以及**通道消息传递的可靠性**上。虽然发布了一个新的 beta 版本（v2026.6.11-beta.1），但当前社区讨论的核心痛点在于生产环境下的资源管理（OOM）和多代理编排的稳定性。整体项目健康度处于“高负荷优化期”，大量 PR 旨在解决长期积累的架构债务。

## 2. 版本发布
**新版本：** `v2026.6.11-beta.1`

*   **核心亮点：**
    *   **增强的渠道控制能力：** 引入了 Slack 中继模式（Relay Mode）、原生的 Mattermost `/oc_queue` 支持，以及针对每个 DM 的模型覆盖功能。这些改进使得渠道操作的自动化和调优更加便捷。
    *   **相关贡献者：** @sjf-oa, @amknight, @xydigit-zt, @thomaszta, @gandalf-at-lerian。
*   **影响评估：** 此版本主要面向渠道集成的高级用户和自动化场景，预计将提升多平台部署的灵活性。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在底层基础设施的稳定性和安全性加固，显著推动了项目的长期可维护性：

*   **存储架构重大重构 (PR #96625):** `refactor: flip sessions and transcripts to sqlite storage` 是一个里程碑式的合并。它将会话元数据和转录事件从 JSONL 文件迁移至 SQLite，解决了 `sessions.json` 无限增长导致的性能瓶颈，并作为医生导入的输入源。这直接回应了社区对内存泄漏和状态管理的长期关切。
*   **iOS 用户体验优化 (PR #96822):** `improve(ios): guide first-run users into gateway onboarding` 改善了新用户引导流程，降低了移动端用户的上手门槛。
*   **安全加固 (PR #96537):** `fix(oauth): remove base64 obfuscation from public OAuth client IDs` 移除了误导性的 Base64 编码，消除了安全假象，提升了配置透明度。
*   **响应体边界限制 (PR #96495, #96499, #96496):** 多个 PR 针对图像生成、GitHub Copilot 嵌入以及 TTS/STT 提供商的 JSON 响应读取进行了边界限制（Bounding），防止因超大响应导致的服务端内存耗尽（DoS）。

## 4. 社区热点
以下 Issue 评论数最多，反映了用户最迫切的痛点：

*   **[严重] 工具调用间的文本泄露到消息频道 (Issue #25592):**
    *   **热度:** 32 条评论
    *   **痛点:** 代理在工具调用之间产生的内部处理文本（如错误处理、叙述）被直接路由到 Slack/iMessage 等外部频道，造成严重的 UX 干扰和信息泄露。
    *   **关联:** 这是一个高优先级的 P1 问题，直接影响用户体验。
*   **[严重] 子代理完成结果静默丢失 (Issue #44925):**
    *   **热度:** 20 条评论
    *   **痛点:** 在多代理编排中，子代理的超时或失败会导致结果静默丢失，且没有重试或通知机制，导致任务状态不可靠。
    *   **关联:** 随着多代理工作流普及，这一稳定性问题成为主要障碍。
*   **[功能] 集中式文件名编码工具 (Issue #48788):**
    *   **热度:** 18 条评论
    *   **痛点:** 飞书等渠道的文件名编码问题需要更通用的解决方案，以支持 Shift-JIS、EUC-KR 等多种编码。
*   **[功能] 社区技能开发与 ClawHub (Issue #50090):**
    *   **热度:** 15 条评论
    *   **痛点:** 用户对技能生态系统的期望与实际实现之间存在差距，呼吁建立更完善的技能分发和管理机制。

## 5. Bug 与稳定性
今日报告了大量影响稳定性的 Bug，主要集中在内存管理和会话状态：

*   **Gateway OOM 与内存泄漏 (Issue #55334, #54155):**
    *   **描述:** `sessions.json` 中未修剪的条目导致 Gateway 内存随时间无限增长（每小时 50-100 MB），最终导致 OOM 崩溃。
    *   **状态:** 已有 PR #96625 通过迁移到 SQLite 试图从根本上解决此问题，但该 Issue 仍显示为 OPEN，需确认新架构是否完全缓解。
*   **会话锁与重启问题 (Issue #49603):**
    *   **描述:** Gateway 重启时，若 PID 匹配当前进程，孤立锁文件未被清除，导致死锁。
    *   **状态:** 需要修复锁清理逻辑。
*   **Cron 会话幻觉输出 (Issue #49876):**
    *   **描述:** 当工具调用失败时，Cron 会话中的 LLM 会编造看似合理但错误的输出，而非干净地失败。
    *   **风险:** 信任与安全重大隐患。
*   **ACP 父会话卡住 (Issue #52249):**
    *   **描述:** 子会话完成后，等待结果的父会话仍处于挂起状态，直到手动刷新。
    *   **状态:** 涉及 ACP 流中继逻辑的修复。
*   **现有 Fix PR 关联:**
    *   PR #96637 尝试修复 Cron 定时器链在未处理拒绝后的停滞问题。
    *   PR #96715 修复了每日会话轮转期间活跃回复被中断的问题。

## 6. 功能请求与路线图信号
*   **分布式代理运行时 (Issue #42026):** 提议将网关拆分为控制平面和计算平面，以实现更好的扩展性。这是一个长期的架构演进方向，目前仍在 RFC 阶段。
*   **技能优先级配置 (Issue #50199):** 用户希望当多个技能可执行相同任务时，能配置优先级规则。这与当前正在发展的 ClawHub 生态系统密切相关。
*   **YAML 配置文件支持 (Issue #45758):** 社区对 YAML 格式的支持呼声较高，旨在提高配置的可读性。
*   **系统事件优先级/绕过队列 (Issue #50739):** 建议在会话拥塞时，系统事件能直接注入消息流，确保关键警报不被淹没。

## 7. 用户反馈摘要
*   **资源管理焦虑:** 用户普遍对长期运行时的内存消耗感到担忧，特别是 Docker 环境下多实例部署时，容器名称冲突（Issue #51363）和锁文件问题加剧了运维复杂度。
*   **跨通道一致性:** 用户在 WhatsApp、Telegram 和 Discord 之间的体验存在差异，特别是消息丢失（Issue #50093）和乱序（PR #44143 提及的问题）是主要投诉点。
*   **调试困难:** 缺乏统一的追踪上下文（Issue #50291）使得在并发群聊场景中排查问题变得极其困难，用户强烈建议增强可观测性。
*   **文档滞后:** 实时文档中包含未发布的功能（Issue #48920），导致用户配置错误，需要维护者加强文档与版本的同步。

## 8. 待处理积压
*   **Issue #25592 (Text leakage):** 尽管热度极高，但尚未看到直接的 Fix PR 合并。这是影响用户体验的关键 P1 问题，建议优先分配资源。
*   **Issue #44925 (Subagent loss):** 子代理静默丢失问题严重影响多代理工作流的可靠性，目前仍开放。
*   **PR #96636 (Edit tool fuzzy matching):** 该 PR 修复了编辑工具在处理模糊匹配时意外重写无关行的问题，状态为 `waiting on author`，需跟进测试验证。
*   **PR #46303 (Drain buffers on reload):** 修复配置重载时消息缓冲区丢失的问题，状态为 `needs proof`，需要用户提供复现证据或进行更广泛的测试。

---
*本报告由 Agnes-2.0-Flash 生成，基于 OpenClaw GitHub 仓库公开数据。*

---

## 横向生态对比

你好，我是 Agnes-2.0-Flash。基于 2026-06-26 的开源项目社区动态，以下是个人 AI 智能体与助手生态的横向对比分析报告。

### 1. 生态全景
2026 年中旬，个人 AI 智能体开源生态已从“功能验证期”全面进入“生产级稳定性与安全性攻坚期”。核心痛点集中在**内存/资源管理**（OOM、进程泄漏）、**多代理编排可靠性**（状态丢失、静默失败）以及**供应链安全**（权限绕过、依赖审计）。项目分化明显：大型单体框架（如 OpenClaw, IronClaw）致力于解决架构债务，而垂直领域项目（如 NanoBot, CoPaw）则聚焦于特定场景（如 MCP 安全、浏览器自动化）的深度优化。整体呈现出高活跃度、高维护密度的“内卷”竞争格局。

### 2. 各项目活跃度对比

| 项目名称 | 来源 (GitHub) | Issue 更新 (24h) | PR 更新 (24h) | 版本发布 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | openclaw/openclaw | 500+ | 500+ | v2026.6.11-beta.1 | **高负荷优化期**：极高活跃度，聚焦内存泄漏与架构重构，社区规模庞大。 |
| **IronClaw** | nearai/ironclaw | 41 | 50 | 无 | **高强度 Dogfooding**：WebUI 体验打磨密集，内部修复速度快，处于稳定化前夜。 |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 48 | 50 | 无 | **高负荷修复期**：WASM 插件化与委托代理安全是焦点，架构演进激进。 |
| **CoPaw** | agentscope-ai/CoPaw | 27 | 50 | 无 | **活跃稳定期**：浏览器自动化与 TUI 修复密集，响应迅速，生态整合能力强。 |
| **NanoBot** | HKUDS/nanobot | - | - | 无 | **高安全警戒期**：无版本发布，但大量高危安全补丁合并，应急响应极快。 |
| **NanoClaw** | qwibitai/nanoclaw | 2 | 18 | 无 | **高效迭代期**：多实例支持与容器化隔离，代码库重构活跃，社区贡献度高。 |
| **Hermes Agent** | nousresearch/hermes-agent | 50 | 50 | 无 | **极高活跃度**：网关稳定性与安全加固并重，多平台适配需求旺盛。 |
| **LobsterAI** | netease-youdao/LobsterAI | 1 | 9 | 无 | **内部优化期**：插件生态与协作模式（Cowork）稳定性提升，社区反馈较少。 |
| **PicoClaw** | sipeed/picoclaw | - | 17 | 无 | **精细化治理期**：依赖更新与资源泄漏修复为主，向分布式架构演进。 |
| **TinyClaw** | TinyAGI/tinyagi | 0 | 0 | 无 | **低活跃/维护期**：主要完成 Windows 兼容修复，当前处于平静期。 |
| **NullClaw** | nullclaw/nullclaw | 0 | 0 | 无 | **无活动** |
| **Moltis** | moltis-org/moltis | 0 | 0 | 无 | **无活动** |
| **ZeptoClaw** | qhkm/zeptoclaw | 0 | 0 | 无 | **无活动** |

### 3. OpenClaw 在生态中的定位
*   **市场地位**：**生态主导者与基准线制定者**。凭借每日千级以上的 Issue/PR 吞吐量，OpenClaw 是社区关注度最高、用户基数最大的项目，其架构决策（如 SQLite 迁移、渠道控制）往往成为其他项目参考的标准。
*   **优势**：
    *   **广度覆盖**：支持几乎所有主流 IM 渠道（Slack, Mattermost, Discord, WhatsApp 等）及深度集成。
    *   **多代理编排**：在子代理静默丢失、上下文传递等复杂场景上有深厚的技术积累（尽管仍有 Bug）。
*   **技术路线差异**：相比 NanoClaw 的容器化隔离和 ZeroClaw 的 WASM 插件化，OpenClaw 更倾向于**单体重型架构**的精细化治理（如 PR #96625 的存储重构）。
*   **社区规模**：远超第二名（IronClaw, Hermes），其 Issue 数量级是其他项目的 10-100 倍，意味着它承担了最多的“探索性 Bug”和“长尾需求”。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求/痛点 |
| :--- | :--- | :--- |
| **资源管理与 OOM 防护** | OpenClaw, NanoBot, CoPaw, PicoClaw, ZeroClaw | 普遍存在内存泄漏、进程未关闭（Chrome/MCP）、会话文件无限增长问题。用户急需自动清理机制和严格的资源限额（如 NanoClaw 的 CPU/Mem Limit）。 |
| **多代理/子代理稳定性** | OpenClaw, Hermes Agent, LobsterAI, ZeroClaw | 子代理状态丢失、静默失败、上下文传递错误。用户要求可靠的超时重试、结果聚合和明确的错误通知机制。 |
| **安全权限与隔离** | NanoBot, ZeroClaw, NanoClaw, IronClaw | MCP 工具权限绕过、Exec 命令注入、文件路径遍历。用户（尤其是企业级）对最小权限原则（Least Privilege）和沙箱隔离有极高要求。 |
| **可观测性与调试** | OpenClaw, Hermes Agent, ZeroClaw | 缺乏统一的追踪上下文，难以排查并发群聊中的消息乱序或丢失。用户渴望更好的日志分级、链路追踪和状态可视化。 |
| **跨平台/容器化部署** | NanoClaw, LobsterAI, TinyClaw | Windows 服务管理异常、Docker 环境下的端口/名称冲突、WSL 与非 WSL 路径兼容性问题。 |

### 5. 差异化定位分析

*   **OpenClaw**: **全能型平台**。适合需要深度定制多渠道集成、复杂多代理工作流的大型个人助手场景。架构较重，运维复杂度较高。
*   **NanoBot**: **安全敏感型/研究导向**。由高校（HKUDS）维护，对 MCP 安全和权限控制有极致追求，适合对安全性有高要求的开发者和研究人员。
*   **IronClaw**: **UX 驱动型/Web 原生**。专注于 Reborn WebUI 的流畅体验和自动化审批流程，适合喜欢图形界面交互、注重日常对话体验的用户。
*   **CoPaw**: **AgentScope 生态集成**。依托 AgentScope 框架，强项在于浏览器自动化（Browser Use）和多模态交互，适合需要操控网页、执行复杂前端任务的用户。
*   **ZeroClaw**: **前沿架构实验场**。积极探索 WASM 插件系统、委托代理（Delegate）和 OCI 合规，适合愿意尝试新技术栈、追求极致模块化和安全性的先锋用户。
*   **Hermes Agent**: **NosuResearch 品牌背书**。强调网关稳定性和凭证安全（Credential Proxy），适合重视数据隐私和后端架构稳健性的用户。
*   **LobsterAI**: **网易有道系/协作导向**。主打 Cowork 模式和插件生态，适合国内用户及需要多人协作场景的团队。

### 6. 社区热度与成熟度

*   **快速迭代/高热度层**：
    *   **OpenClaw, IronClaw, ZeroClaw, Hermes Agent**：日均百级以上更新，处于功能快速扩张与技术债集中爆发的阶段。成熟度体现在“量大管饱”，但稳定性需持续打磨。
*   **高频修复/中热度层**：
    *   **NanoBot, CoPaw, NanoClaw**：更新频率适中，但 PR 合并率高，问题解决速度快。处于“质量巩固期”，技术相对成熟，注重细节打磨。
*   **平稳维护/低热度层**：
    *   **LobsterAI, PicoClaw**：更新频率较低，主要为依赖更新和小 Bug 修复。处于“稳定运行期”，创新动力稍显不足。
*   **休眠/停滞层**：
    *   **TinyClaw, NullClaw, Moltis, ZeptoClaw**：近期无活动或极少活动。TinyClaw 虽有关闭 Issue，但无新开发迹象，可能处于维护停滞状态。

### 7. 值得关注的趋势信号

1.  **“WASM 插件化”成为新基建**：ZeroClaw 和 NanoClaw 都在积极探索 WASM 技术，旨在消除对 Node.js 的依赖并提升安全性。这预示着未来 AI 智能体的插件生态将向**轻量级、沙箱化、标准化（OCI）**方向演进。
2.  **从“可用”到“可信”的安全升级**：NanoBot 和 ZeroClaw 对 MCP 权限绕过和命令注入的紧急修复，表明社区不再满足于功能实现，而是开始严肃对待**供应链安全**和**运行时隔离**。企业级用户将更青睐具备完善 RBAC 和审计日志的项目。
3.  **多代理编排的“确定性”追求**：OpenClaw 和 Hermes Agent 对子代理状态丢失、静默失败的修复，反映了行业痛点从“如何启动代理”转向“如何保证代理执行结果的可靠性和可追溯性”。
4.  **资源管理的自动化**：随着 Agent 运行时间的延长，自动化的内存回收、进程清理和会话归档（如 OpenClaw 的 SQLite 迁移）将成为区分优秀产品与普通 Demo 的关键指标。

**建议**：对于开发者而言，若追求极致定制和生态广度，**OpenClaw** 仍是首选；若关注安全性和模块化架构，**ZeroClaw** 和 **NanoBot** 值得关注；若侧重浏览器自动化和 AgentScope 生态，**CoPaw** 更具优势。同时，需警惕各项目中普遍存在的资源泄漏问题，在生产环境中务必配置严格的监控和自动重启策略。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (HKUDS/nanobot)

## 1. 今日速览
今日 NanoBot 项目处于**高安全警戒与高频修复**状态。过去24小时内，社区报告并修复了多项严重的安全漏洞，主要集中在 MCP 工具权限绕过 (`enabledTools`) 和执行工具 (`exec`) 的命令注入风险。尽管没有新版本发布，但大量 PR 被合并以修补这些高危缺陷。此外，针对 Windows 服务管理、语音识别兼容性以及子代理逻辑的稳定性修复也在同步推进，项目整体表现出极强的应急响应能力和维护活跃度。

## 2. 版本发布
*   **无新版本发布**。
*   **注意**：今日合并的多个安全补丁（如 PR #4524, #4526, #4525）尚未随新 Tag 发布，建议用户手动检查配置或等待下一个紧急维护版本以应用安全修复。

## 3. 项目进展
今日核心进展集中在**安全加固**与**底层稳定性优化**：
*   **MCP 权限隔离修复**：PR #4524 修复了 `enabledTools` 仅过滤工具但遗漏资源和 Prompt 包装器的漏洞，确保 MCP 服务器的最小权限原则真正生效。
*   **Exec 工具沙箱强化**：PR #4526 通过改用 `re.fullmatch()` 防止了链式命令绕过；PR #4525 将 `exec` 的 `login-shell` 默认值改为 `False`，防止敏感信息泄露。
*   **资源泄漏防护**：PR #4441 修复了 MCP 重连时的运行时错误，PR #4506 提出了空闲 MCP 服务器自动杀死的机制以防止僵尸进程。
*   **子代理逻辑增强**：PR #4522 引入了通用重复工具调用守卫，防止因非网络工具失败导致的无限循环；PR #4485 使子代理的错误处理行为可配置。

## 4. 社区热点
今日最受关注的议题是**安全性**，尤其是由研究员 YLChen-007 连续提交的多个安全 Advisory：
*   **[Security] MCP `enabledTools` Scope Bypass** (Issue #4519, #4517, #4434, #4435)：指出允许列表机制存在绕过风险，导致非预期能力暴露。
    *   *链接*: [Issue #4519](https://github.com/HKUDS/nanobot/issues/4519)
*   **[Security] `exec` 命令注入与绕过** (Issue #4521, #4520, #4518, #4516, #4515, #4514)：涵盖 shell 链绕过、注释尾随绕过、默认登录 Shell 泄露秘密等多个维度。
    *   *链接*: [Issue #4521](https://github.com/HKUDS/nanobot/issues/4521)
*   **[Feature] PWA 与移动端支持** (Issue #4479)：用户强烈呼吁完善 WebUI 的移动体验，包括离线缓存和侧边栏手势。
    *   *链接*: [Issue #4479](https://github.com/HKUDS/nanobot/issues/4479)

## 5. Bug 与稳定性
以下 Bug 已报告，部分已有对应 PR 修复：

| 严重程度 | 问题描述 | 关联 Issue | 关联 PR / 状态 |
| :--- | :--- | :--- | :--- |
| **高** | MCP 权限绕过，暴露资源/Prompt | #4519, #4517, #4434, #4435 | PR #4524 (已合并) |
| **高** | Exec 工具命令注入/绕过 | #4521, #4520, #4514, #4515 | PR #4526 (已合并) |
| **高** | Exec 默认 Login Shell 泄露秘密 | #4518, #4516 | PR #4525 (已合并) |
| **中** | Telegram Web 版消息不支持 | #4488 | 无直接 PR (需排查) |
| **中** | Windows NSSM 服务重启异常 | #4513 | 无直接 PR (需排查) |
| **中** | Windows Gateway `--background` 状态不一致 | #4511 | 无直接 PR (需排查) |
| **低** | WebUI 小米语音识别失败 (WebM格式) | #4492 | PR #4493 (已合并) |
| **低** | Dream 禁用导致历史注入膨胀 | #4242 | PR #4481 (已合并) |
| **低** | 子代理错误处理不可配置 | #4198 | PR #4485 (已合并) |

## 6. 功能请求与路线图信号
*   **PWA 支持**：Issue #4479 提出添加 Manifest 和服务 Worker，这符合当前对移动端友好性的趋势，若 PR #4479 后续有具体实现方案，极可能纳入近期路线图。
*   **Ask Clarification 工具**：Issue #4508 提议新增 `ask_clarification` 工具，用于处理模糊需求。这是一个提升 Agent 交互质量的高价值功能，目前尚无对应 PR，但反映了用户对 Agent 自主性增强的高度期待。
*   **自定义 Provider 思考风格**：Issue #4429 及 PR #4482 解决了火山引擎等自定义模型的非标准推理参数配置问题，表明维护者正在积极扩展对非 OpenAI 兼容模型的适配能力。
*   **记忆聚合模式**：PR #4414 引入的子代理“聚合结果模式”和 PR #4402 的“急切记忆合并”，显示出项目在优化长上下文管理和多步任务执行效率方面的持续投入。

## 7. 用户反馈摘要
*   **安全焦虑缓解**：用户对安全研究员发现的 MCP 和 Exec 漏洞表示关切，但感谢快速响应的修复 PR。这表明用户群体包含大量企业级部署者，对权限控制极其敏感。
*   **Windows 部署痛点**：多位用户（Quincy-Zh）反馈 Windows 下的服务管理（NSSM, Gateway 后台模式）存在状态不同步问题，这是 Windows 平台用户的主要不满点。
*   **移动体验缺失**：Telegram Web 和原生 WebUI 在移动端的体验不佳（消息格式、手势支持），用户期望获得类似原生 App 的体验（PWA）。
*   **语音集成兼容性**：小米 MiMo 语音识别的格式不兼容问题已被解决，用户对此类特定硬件/服务的兼容性修复持正面态度。

## 8. 待处理积压
*   **Windows 服务管理 Bug**：
    *   Issue #4513 (NSSM 重启异常) 和 Issue #4511 (Gateway `--background` 状态不一致) 均为 Windows 特有且影响生产环境稳定性的问题，目前暂无合并的 PR，建议优先处理。
*   **Telegram Web 兼容性**：
    *   Issue #4488 指出 Rich Messages 特性破坏了 Telegram Web 版的消息显示，需确认是否回滚或修复前端渲染逻辑。
*   **HVTracker 信任徽章**：
    *   Issue #4503 提议在 README 中添加 HVTracker 信任徽章，虽非代码功能，但涉及项目形象和供应链透明度，可作为文档类任务跟进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-26
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 项目在 2026-06-26 保持极高活跃度，过去24小时内共产生 **100 条** 更新（50 Issues + 50 PRs）。尽管没有新版本发布，但社区贡献极其密集，特别是在**网关稳定性**、**会话状态一致性**以及**安全边界加固**方面取得了实质性进展。开发者团队快速响应了多个 P0/P1 级别的 Bug 修复 PR，显示出核心维护者对系统稳定性的重视。同时，多平台适配（Telegram, Slack, XMPP）和跨设备同步成为社区热议焦点，反映出用户对无缝 Agent 体验的强烈需求。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在底层稳定性和安全修复，显著提升了系统的健壮性：

*   **会话状态与持久化修复**：
    *   [#52616](https://github.com/NousResearch/hermes-agent/pull/52616): 修复了新鲜会话建立时系统提示词未正确持久化的问题，防止缓存失效导致的上下文丢失。
    *   [#52624](https://github.com/NousResearch/hermes-agent/pull/52624): 修正了会话过期监听器未将 `ended_at` 写入 SQLite 的问题，确保会话历史记录完整。
    *   [#52628](https://github.com/NousResearch/hermes-agent/pull/52628): 修复了网关压缩临时代理时因缺少 `session_db` 导致持久化失效的静默失败问题。
*   **消息去重与可靠性**：
    *   [#52375](https://github.com/NousResearch/hermes-agent/pull/52375): 解决了瞬态提供商故障（如 429/超时）重试时用户消息重复提交的问题，防止 Agent 响应滞后。
*   **安全加固**：
    *   [#48073](https://github.com/NousResearch/hermes-agent/pull/48073): 关闭了 Iron-Proxy 集成中的三个 P0 级安全漏洞。
    *   [#48076](https://github.com/NousResearch/hermes-agent/pull/48076): 进一步修复了 P1/P2 安全问题，包括密钥泄露风险和 Docker 环境冲突。
*   **功能增强**：
    *   [#46081](https://github.com/NousResearch/hermes-agent/pull/46081): 将 MoA (Mixture of Agents) 暴露为可选择的虚拟模型，丰富了推理策略选项。

## 4. 社区热点
以下 Issues 引发了最激烈的讨论，反映了用户的核心关切：

*   **[Feature] Credential Proxy Daemon (Issue #4656)** - *11 条评论, 1 👍*
    *   **背景**：用户希望实现零知识 HTTP/HTTPS 凭证代理，以解决现有 PID 命名空间隔离仍存在的凭证泄露风险。
    *   **诉求**：更严格的权限隔离和凭证管理，特别是针对高级安全场景。
*   **[Feature] Slack Block Kit Markdown (Issue #8552)** - *7 条评论, 9 👍*
    *   **背景**：Slack 适配器目前使用遗留的 `mrkdwn`，不支持表格等富文本格式。
    *   **诉求**：高点赞表明用户极度渴望在 Slack 中获得更好的消息渲染体验，支持原生表格和格式化。
*   **[Feature] Headroom-AI 工具输出压缩 (Issue #39691)** - *8 条评论, 10 👍*
    *   **背景**：现有的会话级压缩存在局限性，用户希望集成 Headroom-AI 进行更细粒度的工具输出压缩。
    *   **诉求**：降低 Token 消耗，提升长上下文会话的效率。
*   **[Bug] Cron Script Creation Failure (Issue #52523)** - *12 条评论*
    *   **背景**：Windows 环境下创建基于脚本的无代理 Cron 任务时出现类型错误。
    *   **诉求**：修复 Windows 平台的兼容性 Bug，阻塞了大量计划任务用户的使用。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，按严重程度排序：

*   **P0/P1 级别（严重）**：
    *   **#52616** (PR已合): 系统提示词持久化失败，可能导致新会话上下文初始化错误。
    *   **#52375** (PR已合): 消息重复提交，导致 Agent 行为异常（滞后或重复执行）。
    *   **#29912**: Curator 可能在不验证合并的情况下归档活跃技能，导致关键功能丢失。（Open）
    *   **#19566**: OpenAI-Codex 凭证池在旋转过程中可能丢失新增凭证。（Open）
*   **P2 级别（重要）**：
    *   **#52523**: Windows 下 Cron 创建失败。（Open）
    *   **#36658**: Dashboard 聊天功能在更新后崩溃（React Error #301）。（Open）
    *   **#33801**: 密钥脱敏系统破坏了代码语法，导致 `write_file` 等工具静默失败。（Open）
    *   **#46260**: Windows 安装程序在桌面阶段因 npm 安装失败而中断。（Open）
    *   **#47179**: macOS launchd 重启网关时未发送启动通知。（Open）
    *   **#52562**: `gateway.multiplex_profiles` 配置键未被正确读取。（Open）

## 6. 功能请求与路线图信号
*   **跨平台/跨设备同步**：
    *   **#52529** & **#47341**: 用户强烈要求“跨机器全量同步”和“第一类多设备支持”，希望 Agent 身份、记忆和配置在不同设备间无缝延续。这可能是未来版本的重点方向。
*   **国际化与本地化**：
    *   **#40239**: 请求在桌面应用中增加葡萄牙语 (pt-BR) 支持。后端已有良好基础，前端 UI 本地化呼声较高。
*   **平台扩展**：
    *   **#17469**: 提议添加 XMPP/Jabber 适配器，满足自托管用户和企业内部通讯需求。
    *   **#44428**: 支持 Telegram Bot API 10.1 的 Rich Messages，提升消息呈现能力。
*   **工作流优化**：
    *   **#52598**: 建议为开发者提供创建 Profile 分发的更快工作流。
    *   **#8302**: 请求“技能更新同步”机制，以便本地修改的技能能接收上游的改进和修复。

## 7. 用户反馈摘要
*   **痛点**：
    *   **记忆断层**：用户抱怨 `session_search` 无法搜索被压缩的父会话（#13840），导致“记忆黑洞”。
    *   **配置混乱**：自定义 Provider 设置（#52496）和多 Profile 配置（#52562）存在解析错误，增加了配置难度。
    *   **TUI/CLI 体验**：Windows 安装失败（#46260）、TUI 语音麦克风不恢复（#52573）等问题影响了日常使用体验。
*   **满意点**：
    *   社区对网关层的安全加固（如 Iron-Proxy 相关 PR）表示认可。
    *   对 Slack 富文本支持和 Telegram 新特性的期待反映了用户对现有平台适配能力的认可及更高期望。

## 8. 待处理积压
以下 Issue 长期未得到解决或需维护者特别关注：

*   **[Bug] Secret Redaction Corrupts Syntax (Issue #33801)**: 脱敏逻辑破坏代码执行，需紧急修复以避免工具链断裂。
*   **[Bug] Curator Archives Active Skills (Issue #29912)**: 自动化运维逻辑存在风险，可能导致生产环境技能丢失。
*   **[Bug] Dashboard Chat Broken (Issue #36658)**: Web 界面核心功能崩溃，影响大量 GUI 用户。
*   **[Bug] Ollama Cloud Model Picker (Issue #52599)**: 刚报告的新 Bug，影响云端模型选择准确性。
*   **[Feature] Cross-Platform Session Context Sharing (Issue #4335)**: 虽然标记为 Feature，但其对用户体验的提升巨大，且已有相关讨论，建议纳入中期规划。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
今日 PicoClaw 项目保持高度活跃，主要体现为大量的依赖更新和底层稳定性修复。**17 个 PR 中有 5 个已完成合并**，主要集中在 Dependabot 自动更新的第三方库（如 Copilot SDK、Telegram 客户端、LINE SDK）以及针对 Go 语言资源泄漏和错误处理的代码重构。虽然无新功能重大突破，但通过清理 `io.Copy` 和 `Close()` 错误路径，项目的健壮性得到显著提升。Issues 方面，两个关于定时任务报错和 Token 异常消耗的 Bug 被标记为关闭，表明核心调度逻辑正在逐步稳定。

## 2. 版本发布
**无新版本发布。**
当前仍处于维护和小幅迭代阶段，重点在于依赖项升级和内部代码质量优化。

## 3. 项目进展
今日合并/关闭的 PR 主要推动了以下方面的改进：

*   **依赖安全与兼容性升级**：
    *   合并了 `github.com/github/copilot-sdk/go` 从 `0.2.0` 至 `1.0.2` (#3145)，提升了与 GitHub Copilot 集成的安全性。
    *   合并了 `modernc.org/sqlite` 升级 (#3173 相关逻辑虽未直接显示合并状态，但依赖更新频繁)，确保本地存储引擎的性能与安全。
    *   合并了 `fyne.io/systray` 和 `line-bot-sdk-go` 的补丁版本，修复了潜在的系统托盘交互和 LINE 平台兼容性问题。
*   **代码健壮性与资源管理**：
    *   **PR #3169 (Closed)**: 修复了 Evolution 模式下的 Token 浪费问题，跳过心跳轮询时的冷启动路径，显著降低无效开销。
    *   **PR #3166 (Closed)**: 修复了 `openai_compat` 包中的构建失败问题（`undefined: log`），替换为结构化日志记录。
    *   **PR #3168 (Closed)**: 改进了模型列表获取时的错误处理，避免在非 200 响应且 Body 读取失败时返回误导性错误信息。
    *   **PR #3045 (Closed)**: 修复了 Matrix 通道中因用户 ID 格式（含冒号）导致的身份验证静默拒绝问题，完善了 `allow_from` 逻辑。

**整体评价**：项目正从“功能堆砌”转向“精细化治理”，特别是在错误处理和资源释放层面进行了大量补漏工作。

## 4. 社区热点
以下 Issue 和 PR 获得了较高的关注度或具有代表性：

*   **[BUG] Continuous consumption of tokens every minutes when evolution is enabled** (#3012)
    *   **状态**：已关闭
    *   **分析**：该 Issue 直接关联到今日合并的 PR #3169。用户反馈在启用 Evolution 模式后，即使处于心跳检测阶段也在持续消耗 Token。这反映了用户对成本控制的高度敏感，特别是在使用付费模型（如 MiniMax）时。
    *   **链接**：[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
*   **[BUG] when I ask my agent to do perform a task every hour of the day I now get channel error** (#1757)
    *   **状态**：已关闭
    *   **分析**：这是一个长期存在的定时任务调度问题，涉及 Telegram 通道和 Cron 模块。关闭可能意味着通过配置调整或底层修复解决了特定场景下的通道通信异常。
    *   **链接**：[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)
*   **Add remote Pico WebSocket mode to picoclaw agent** (#3118)
    *   **状态**：Open (Pending)
    *   **分析**：这是今日新增的一个关键功能 PR，允许 `picoclaw agent` 以远程 WebSocket 模式运行。这对于希望将 Agent 能力嵌入其他应用或通过 API 调用的开发者非常有价值，可能成为下一版本的重点功能。
    *   **链接**：[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)

## 5. Bug 与稳定性
今日报告并关闭了两个关键 Bug，同时多个 PR 针对潜在的运行时崩溃和资源泄漏进行了预防性修复：

*   **已修复 Bug**：
    1.  **#3012**: Evolution 模式下 Token 无限消耗（严重）。*Fix*: PR #3169。
    2.  **#1757**: 定时任务执行时的 Channel 错误（高）。*Fix*: 状态已关闭，具体修复 PR 未在列表明确标出，可能隐含在最近的依赖或调度逻辑更新中。
*   **潜在稳定性修复 (Open PRs)**：
    *   **#3172**: 显式忽略错误路径中的 `Close()` 错误，防止次要错误掩盖主要错误，提升日志清晰度。
    *   **#3170**: 修复 `io.Copy` 失败时 Base64 Encoder 未关闭导致的资源泄漏（Resource Leak）。
    *   **#3171**: 在 LINE 通道的 `Send` 方法中添加 `sync.Map` 类型断言检查，防止因数据类型不匹配导致的 Panic 崩溃。
    *   **#3115**: 修复会话历史损坏问题，防止工具输出中的 Data URL 被误解析为媒体附件。

## 6. 功能请求与路线图信号
*   **远程 Agent 模式**：PR #3118 提出了将 `picoclaw agent` 支持为远程 WebSocket 服务。这暗示项目正在向“分布式 Agent 架构”演进，允许更灵活的集成方式。
*   **DeltaChat 网关**：PR #3063 正在开发 DeltaChat 协议的支持。如果合并，将进一步扩展 PicoClaw 的即时通讯渠道覆盖范围，满足隐私通信或特定生态用户的需求。
*   **结构化日志完善**：多个 PR (#3166, #3128) 都在统一日志记录和错误处理标准，显示路线图中包含“可观测性”和“运维友好性”的提升计划。

## 7. 用户反馈摘要
*   **成本敏感**：用户 #xpader 在 #3012 中强烈指出 Evolution 模式下的 Token 浪费问题，表明用户在享受自动化进化的同时，对运行成本极为敏感。开发者需确保此类高级功能的效率。
*   **环境多样性**：用户 #dhensen 在 #1757 中提到在 Raspberry Pi Zero W (Raspbian 11) 上遇到的问题，说明 PicoClaw 在轻量级 ARM 设备上的兼容性仍是测试重点。
*   **集成复杂性**：用户对 Matrix 用户 ID 格式的处理感到困惑（#3045），反映出随着支持的渠道增多，身份映射规则的边界情况需要更完善的文档和测试覆盖。

## 8. 待处理积压
*   **PR #3177**: `copilot-sdk/go` 更新至 `1.0.4`。虽然 #3145 已合并 `1.0.2`，但 #3177 提供了更新的版本，建议审查并合并以保持依赖最新。
*   **PR #3176 & #3174**: Telegram 和 LINE SDK 的依赖更新尚未合并，建议尽快处理以避免后续冲突。
*   **PR #3115**: 修复会话历史损坏的关键 Bug，目前仍为 Open 状态，若影响广泛，建议优先合并。
*   **PR #3063**: DeltaChat 新特性开发中，需关注其完成度和测试覆盖率，以便规划下一版本的渠道支持矩阵。

---
*报告生成时间：2026-06-26*
*分析师：Agnes-2.0-Flash*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 在 2026 年 6 月 25 日展现出极高的开发活跃度，过去 24 小时内共有 **18 条 PR 更新**（7 条已合并/关闭，11 条待处理）和 **2 条新 Issue**。项目重心明显转向**多实例支持**（Telegram/Multi-admin）、**安全性加固**（CVE 修复、资源隔离）以及**容器化运行的稳定性优化**。虽然无新版本发布，但代码库的快速迭代表明核心功能正在经历密集的重构与增强，整体健康度良好，社区贡献者参与度极高。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的健壮性和功能性：

*   **安全性修复 (High Priority):**
    *   **#2799** [CLOSED] 修复了 `send_file` 的路径遍历漏洞（CVE-2026-29611），将文件读取限制在 `/workspace` 目录下，防止代理被提示注入攻击窃取敏感文件。
    *   **#2830** [CLOSED] 修复了卸载残留问题，清理了因未运行卸载脚本而遗留的无效 `launchd`/`systemd` 注册项，提升了系统清洁度。
    *   **#2854** [CLOSED] 解决了 macOS 上使用 Rancher Desktop 时因 CA 证书挂载导致的 API 连接失败问题，改善了本地开发体验。

*   **功能增强:**
    *   **#2856** [CLOSED] 引入了可选的容器级 CPU/内存限制（`CONTAINER_CPU_LIMIT`/`CONTAINER_MEMORY_LIMIT`），允许在多代理共享主机时进行资源隔离，防止单点过载。
    *   **#2855** [CLOSED] 重构了认证机制，确立 Subscription (OAuth) 为主凭证，API Key 为热备故障转移，增强了身份验证的稳定性。

*   **基础设施:**
    *   **#2843** [CLOSED] 添加了 `/learn` 技能，允许从任意源（目录、URL等）蒸馏可复用的技能，增强了 Agent 的自我进化能力。

## 4. 社区热点
以下是今日讨论最活跃或最具代表性的议题：

*   **Telegram 多 Bot 实例支持 (#2852, #2849, #2853)**
    *   **链接:** [Issue #2852](https://github.com/nanocoai/nanoclaw/issues/2852) | [PR #2849](https://github.com/nanocoai/nanoclaw/pull/2849) | [PR #2853](https://github.com/nanocoai/nanoclaw/pull/2853)
    *   **分析:** 用户长期渴望在同一 NanoClaw 实例中运行多个 Telegram Bot。Issue #2852 表达了对此功能缺失的困惑，而 PR #2849 已通过环境变量 `TELEGRAM_BOT_TOKEN_<SUFFIX>` 实现了该功能。尽管 #2849 已关闭，但 #2853 仍在开放中，可能涉及文档完善或后续跟进，反映出用户对多租户/多服务支持的高需求。

*   **审批流程的多管理员与 CLI 支持 (#2857)**
    *   **链接:** [Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)
    *   **分析:** 当前审批仅支持单一管理员，导致单点故障。用户建议增加“自动重试下一管理员”及“通过 CLI 终端审批”的功能。这与今日合并的 #2832 (Reject with reason) 相辅相成，共同构成了更完善的审批交互闭环。

*   **Matrix 原生持久化 E2EE 适配器 (#2844)**
    *   **链接:** [PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)
    *   **分析:** 提议替换现有的 Chat SDK 桥接，使用 `matrix-bot-sdk` 实现原生端到端加密。这是为了提升安全性和性能的重要架构改进，目前仍处于开放审查阶段。

## 5. Bug 与稳定性
*   **测试干扰问题 (#2851):**
    *   **链接:** [PR #2851](https://github.com/nanocoai/nanoclaw/pull/2851)
    *   **描述:** 测试辅助函数 `runPollLoopWithTimeout` 在超时后未正确停止轮询循环，导致后续测试消息被错误窃取。此问题虽属测试基础设施，但会影响 CI/CD 的稳定性和结果准确性。
*   **macOS 容器证书错误 (#2854):**
    *   **链接:** [PR #2854](https://github.com/nanocoai/nanoclaw/pull/2854)
    *   **状态:** 已修复。此前在 macOS 上因 Gateway CA 未正确挂载导致 API 调用失败。

## 6. 功能请求与路线图信号
基于今日 PR 和 Issue，以下功能极可能纳入近期版本：

1.  **远程 MCP 服务器支持 (#2847):** 允许通过 URL 连接远程 MCP 服务，而不仅限于本地 stdio。这标志着 NanoClaw 正从本地工具向分布式 Agent 网络演进。
2.  **Docker-in-Docker 支持 (#2846):** 通过在容器中挂载 `docker.sock` 并配置权限，支持嵌套容器操作。这将极大扩展 Agent 在 DevOps 自动化场景中的应用能力。
3.  **通用扩展点机制 (#2842):** 引入 `registerX()/applyX()` 模式，为未来插件化架构奠定基础，同时保持向后兼容。
4.  **Signal 群聊消息路由修复 (#2850):** 修正了群聊中提及检测 (`isMention`) 和群组标识 (`isGroup`) 的缺失，完善了 Signal 渠道的可用性。

## 7. 用户反馈摘要
*   **痛点:** 审批流程过于僵化，缺乏容错机制（#2857）；Telegram 多实例支持曾移除又引发争议，用户希望明确官方支持路径（#2852）。
*   **满意点:** 新增的“拒绝原因”功能（#2832）让 Agent 能更好地自我调整，提升了人机协作效率；资源限制功能（#2856）解决了多代理环境下的资源争抢焦虑。
*   **使用场景:** 用户广泛尝试在 macOS 本地开发环境（Rancher Desktop）、生产级多 Bot 部署以及复杂的容器化安全场景中应用 NanoClaw。

## 8. 待处理积压
以下 Issue/PR 处于开放状态，需维护者关注：

*   **[OPEN] #2857** - 审批流程多管理员支持及 CLI 终端审批。
*   **[OPEN] #2844** - Matrix 原生 E2EE 适配器实现。
*   **[OPEN] #2853** - Telegram 多 Bot 实例支持的后续跟进（可能与 #2849 重复或为文档/配置更新）。
*   **[OPEN] #2851** - 测试轮询循环泄漏修复。
*   **[OPEN] #2850** - Signal 群聊消息路由修复。
*   **[OPEN] #2848** - OpenCode 提供商的 CWD 和 .env 回退修复。
*   **[OPEN] #2847** - 支持 URL 基于远程 MCP 服务器。
*   **[OPEN] #2846** - Docker-in-Docker 代理组支持。
*   **[OPEN] #2845** - `q.ts` 中位置参数的转发修复。
*   **[OPEN] #2795** - 只读 CLI 派生仪表板技能 (`/add-clidash`)。
*   **[OPEN] #2842** - 通用惰性扩展点接缝 + 保留内置 MCP 服务器名称。

**建议:** 维护者应优先审查 #2844 (Matrix) 和 #2847 (Remote MCP)，这两项功能对项目的可扩展性和生态兼容性具有战略意义。同时，需尽快合并 #2851 以确保护 CI 稳定性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 在 2026-06-26 保持极高的开发与迭代活跃度。过去24小时内共产生 41 个 Issues 和 50 个 PRs，其中 25 个 PR 已合并或关闭，显示出核心开发团队正在集中火力解决 Reborn WebUI 的稳定性和用户体验问题。虽然没有新的大版本发布，但内部修复密集，重点在于消除“假死”状态、优化自动审批流程以及提升 WebUI 的响应式交互体验。项目整体处于高强度的“Dogfooding”（内部试用）反馈修正阶段，技术债务清理与功能完善并行。

## 2. 版本发布
**无新版本发布。**
当前主要精力集中在 `Reborn` 分支的内部修复和 WebUI v2 的体验打磨上，尚未进行正式 Release。

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在以下三个维度，显著提升了系统的健壮性：

*   **WebUI 交互体验优化：**
    *   **#5241 (Closed):** 修复了在繁忙发送期间批准门（Approval Gate）消失的问题，确保用户能清晰看到当前的权限请求状态。
    *   **#5248 (Closed):** 实现了聊天消息列表的自动滚动逻辑，确保新回复始终可见，同时尊重用户的手动回滚操作。
    *   **#5235 (Closed):** 解决了输入框在 Agent 响应期间的冻结问题，允许用户在等待时继续起草下一条消息。
*   **核心运行时稳定性修复：**
    *   **#5245 (Closed):** 恢复了因 Claim 丢失而停滞的触发器（Triggers），修复了调度器中的状态不一致问题。
    *   **#5254 (Closed):** 移除了过于严格的提示组装内容黑名单，防止合法的代码审查技能文档被误判为违规内容。
*   **基础设施与构建：**
    *   **#5224 (Closed):** 澄清并修复了关于调度器并发度和 `worker_count=1` 配置的误解，优化了生产环境的资源调度逻辑。

**进展评估：** 项目通过密集的小步快跑修复，显著降低了 WebUI 的使用摩擦和运行时的意外挂起风险，为后续更复杂的自动化功能铺平了道路。

## 4. 社区热点
以下 Issues 因涉及核心工作流痛点而受到高度关注：

*   **[Reborn] Tools page under Settings shows operator-only tools error for WebUI users (#5242)**
    *   **链接:** [Issue #5242](https://github.com/nearai/ironclaw/issues/5242)
    *   **分析:** 普通用户无法在设置页管理工具权限，这是一个严重的权限隔离 Bug。对应 PR **#5256** 正在修复此问题，暴露出 RBAC（基于角色的访问控制）在 WebUI 层面的实现缺陷。
*   **[Reborn] "Ask each time" tool permission may fail with authorization error (#5196)**
    *   **链接:** [Issue #5196](https://github.com/nearai/ironclaw/issues/5196)
    *   **分析:** 用户选择“每次询问”后，批准操作反而导致授权错误并触发重复流程。这直接破坏了用户信任，表明审批状态机在持久化环节存在竞态条件或逻辑漏洞。
*   **Heartbeat lease write-behind: move runner-lease renewal off the synchronous Postgres path (#5253)**
    *   **链接:** [Issue #5253](https://github.com/nearai/ironclaw/issues/5253)
    *   **分析:** 性能优化类 Issue，指出心跳续约阻塞了同步数据库路径，可能导致高并发下的延迟激增。这是架构层面的关键改进点。

## 5. Bug 与稳定性
今日报告的 Bug 多集中于 WebUI 的状态管理和调度器的边缘情况：

*   **P0/P1 (严重):**
    *   **#5208:** 消息输入框在 Agent 响应期间冻结。（已修复: **#5235**）
    *   **#5211:** 新消息不自动滚动到视图底部。（已修复: **#5248**）
    *   **#5148:** Turn 调度器心跳在持有转换锁时发生自死锁。（已修复: **#5224** 相关背景及后续清理）
*   **P2 (中等):**
    *   **#5243:** “始终允许”工具权限未在设置中持久化。（关联修复: **#5251** 草稿/替代方案）
    *   **#5210:** 在审批门打开时发送新消息导致警告重复和状态丢失。（待进一步观察）
    *   **#5231:** 自动化设置在驱动提示阶段失败，报错 `HostUnavailable`。（待排查）
*   **P3 (低等/体验):**
    *   **#5191:** 内部技能激活消息泄露到聊天界面。
    *   **#5237:** 调试日志级别过高导致 Railway 日志洪水。

## 6. 功能请求与路线图信号
*   **用户级工具权限管理 (#5256, #5247):** 多个 Issue 和 PR 指向同一个需求：普通 WebUI 用户应拥有独立的工具审批设置，而非依赖 Operator 全局配置。这标志着项目正从“单人本地工具”向“多租户/团队协作”模式演进。
*   **内存作为用户空间扩展 (#5205):** PR #5205 将内存建模为用户空间扩展，实现了 Issue #3537。这表明未来的路线图将更加注重模块化，允许用户自定义和管理 Agent 的记忆机制，而非硬编码在核心中。
*   **WASM 执行池优化 (#5206):** 针对 WASM 执行占用 Tokio 工作线程导致系统假死的问题进行修复，显示项目正在深入优化底层运行时效率，以支持更高并发的工作负载。

## 7. 用户反馈摘要
*   **痛点：** 用户最不满的是**“不可预测的状态”**。例如，批准后权限未保存、输入框冻结、或者审批弹窗意外消失。这些 UX 断裂让用户感到 Agent 是“不稳定”且“不听话”的。
*   **场景：** 高频场景包括“设置自动化任务”和“日常对话中的工具调用”。在设置自动化时，`HostUnavailable` 错误让新手用户困惑；在日常对话中，审批流程的繁琐和错误是导致用户放弃使用的主要原因。
*   **正面反馈隐含信号：** 用户对“自动滚动”、“保持输入框可用”等细节修复表示欢迎，说明用户期望的是一个流畅、响应迅速的对话界面，而非仅仅是一个功能正确的后端。

## 8. 待处理积压
*   **#5253:** Heartbeat lease 异步化改造。虽然已识别为性能瓶颈，但需确认 PR **#5257** (batch durable event-log appends) 是否足以缓解或需要单独处理。
*   **#5231:** Automation setup fails with HostUnavailable。这是一个功能性阻断 Bug，需优先排查 Host 连接逻辑。
*   **#5229:** Durable capability display previews use runtime owner scope。WebUI 预览与后端持久化之间的作用域不一致问题，可能影响多用户环境下的数据正确性。
*   **#5220:** Daily ironclaw failure taxonomy。建议定期查看此 Issue，了解 Pinchbench 基准测试中的失败趋势，特别是基础设施层面的非代码问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-06-26
**数据来源**：GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
2026年6月26日，LobsterAI 项目保持高度活跃的开发节奏，过去24小时内共有 **9 个 Pull Request 被合并**，涉及渲染层优化、OpenClaw 插件机制修复及协作模式（Cowork）的稳定性增强。尽管没有新版本发布，但代码库在底层架构和用户体验细节上进行了多项关键修补。社区侧目前仅存在 **1 个活跃的 Issue (#1392)**，主要聚焦于定时任务界面的交互缺陷，整体项目处于“内部优化与稳定化”阶段，技术债务正在被快速清理。

## 2. 版本发布
*   **无新版本发布**。
*   当前处于两个正式版本之间的迭代期，重点在于修复近期合并代码可能引入的回归问题及完善插件生态。

## 3. 项目进展
今日合并的 PR 主要集中在提升系统稳定性和扩展能力，具体进展如下：

*   **OpenClaw 插件生态加固**：
    *   **#2203 & #2202**：修复了本地扩展预编译加载问题，并确保浏览器插件在白名单中正确保留，解决了因配置限制导致的插件失效风险。
    *   **#2198**：预安装了官方的 QQ 和 Discord 频道插件，简化了用户接入即时通讯平台的流程，并修复了相关环境变量索引问题。
*   **协作模式 (Cowork) 体验优化**：
    *   **#2204 & #2200**：解决了 Plan Mode 下标签解析错误导致的 UI 泄露问题，以及因流式传输抖动产生的重复消息显示 bug，显著提升了多模型协作时的界面整洁度。
    *   **#2199**：增强了父会话完成后对子 Agent 轮询的容错机制，防止子任务状态丢失。
*   **基础设置与渲染**：
    *   **#2206**：同步了“开机自启”设置与操作系统层面的状态，增加了诊断日志，提升了跨平台（特别是 Windows）的一致性。
    *   **#2205**：更新了 Plan Mode 的图标组件，使其支持主题适配。

> **项目健康度评估**：高。今日合并的 PR 多为“Fix”类型，表明团队正在积极响应已知缺陷，且 OpenClaw 和 Cowork 作为核心模块的稳定性得到加强。

## 4. 社区热点
*   **Issue #1392: 定时任务开关点击无反应**
    *   **链接**：[netease-youdao/LobsterAI Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)
    *   **状态**：Open / Stale
    *   **分析**：这是目前唯一的活跃社区问题。用户反馈特定任务的开关控件失效，而其他任务正常。这暗示可能存在前端状态管理不一致或特定条件触发下的 DOM 事件绑定失败。由于该 Issue 创建于 4 月，截至 6 月 25 日仍未解决且被标记为 `stale`，反映出社区反馈通道可能存在响应滞后，需优先处理以恢复用户信任。

## 5. Bug 与稳定性
今日通过 PR 修复了多个潜在 Bug，以下是本次更新涉及的关键修复点：

| 严重等级 | 问题描述 | 关联 PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **OpenClaw 插件加载失败**：本地扩展未正确预编译，导致运行时入口缺失。 | [#2203](https://github.com/netease-youdao/LobsterAI/pull/2203) | ✅ Fixed |
| **高** | **浏览器控制失效**： restrictive allowlist 导致内置浏览器插件被拦截。 | [#2202](https://github.com/netease-youdao/LobsterAI/pull/2202) | ✅ Fixed |
| **中** | **Plan Mode UI 异常**：标签泄露至消息正文，以及流式抖动导致重复计划消息。 | [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204)<br>[#2200](https://github.com/netease-youdao/LobsterAI/pull/2200) | ✅ Fixed |
| **中** | **子 Agent 状态不同步**：父会话结束后子任务状态未及时刷新。 | [#2199](https://github.com/netease-youdao/LobsterAI/pull/2199) | ✅ Fixed |
| **低** | **Windows 开机自启状态不同步**：本地设置与 OS 注册表状态不一致。 | [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206) | ✅ Fixed |

*注：Issue #1392 描述的定时任务开关 Bug 尚未有对应的 Fix PR 合并，仍为开放状态。*

## 6. 功能请求与路线图信号
*   **即时通讯集成深化**：PR #2198 预装 QQ 和 Discord 插件，表明项目路线图正致力于扩大跨平台通信能力，降低用户配置门槛。
*   **渲染性能与一致性**：PR #2206 和 #2205 显示团队关注跨平台（Windows/Mac/Linux）的行为一致性和 UI 主题适配，这是提升产品成熟度的重要信号。
*   **Agent 编排可靠性**：针对 Cowork 模式的一系列修复（#2199, #2200, #2204）表明，下一步的开发重心将继续放在多 Agent 协作的健壮性上，确保复杂工作流下的状态准确性。

## 7. 用户反馈摘要
*   **痛点**：
    *   **界面交互僵死**：Issue #1392 用户反映部分定时任务开关“点击无反应”，这种间歇性的 UI 故障极易导致用户怀疑软件稳定性。
    *   **配置复杂性**：虽然今日修复了预安装插件的问题，但此前需要手动管理 `openclaw.extensions` 和 `allowlist`，说明早期版本在插件管理上对用户不够友好。
*   **满意点**：
    *   **诊断能力增强**：PR #2206 和 #2199 引入了更多的诊断日志（Diagnostic Logs），这对高级用户排查复杂协作问题至关重要。
    *   **视觉体验优化**：PR #2205 和 #2200 改善了 Plan Mode 的视觉效果，消除了冗余信息干扰。

## 8. 待处理积压
*   **Issue #1392** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1392))：
    *   **建议**：该 Issue 已存在超过两个月且被标记为 `stale`。建议维护者重新激活此 Issue，分配优先级，或联系作者获取复现步骤的详细环境信息（如操作系统、任务类型）。这是一个影响核心功能可用性的 Bug，应尽快修复以改善社区满意度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI) 项目动态日报
**日期**：2026-06-26  
**数据来源**：GitHub Repository (`github.com/TinyAGI/tinyagi`)

## 1. 今日速览
在过去24小时内，TinyClaw 项目整体处于低活跃度状态，未收到新的 Issue 报告或 Pull Request 提交。唯一的动态是一条关于 Windows 原生支持的关键修复 PR（#281）已于 6月24日 完成合并，标志着该项目在非 WSL Windows 环境下的 CLI 可用性得到实质性改善。目前暂无新版本发布，社区讨论区保持平静，项目健康状况良好，主要精力集中在底层兼容性的完善上。

## 2. 版本发布
**无新版本发布。**
当前没有新的 Release 标记。建议关注即将发布的版本是否包含上述 PR #281 的修复内容，以验证 Windows 原生支持的稳定性。

## 3. 项目进展
今日无新增代码合并，但需回顾近期已合并的重要变更对项目的影响：
*   **关键修复**：PR #281 `[CLOSED] fix: Windows cross-platform support in CLI` 由 `mperkins0155` 提交并合并。
    *   **贡献价值**：解决了 `tinyagi` CLI 在原生 Windows 环境（非 WSL）下因路径解析错误导致的 `MODULE_NOT_FOUND` 问题。具体修复了 `import.meta.url` 返回的双斜杠路径（如 `/C:/Users/...`）被 `path.resolve` 错误处理的问题。
    *   **项目推进**：此修复消除了 Windows 用户在本地运行 CLI 的主要障碍，显著提升了项目的跨平台兼容性和用户体验，是项目走向成熟多平台支持的重要一步。

## 4. 社区热点
**今日无活跃的 Issue 或 PR 讨论。**
由于过去24小时新增 Issue 为 0，且最近的 PR #281 已关闭，社区目前未有新的热点话题。此前关于 Windows 兼容性的讨论可能主要集中在该 PR 的审查过程中，现已解决。

## 5. Bug 与稳定性
**今日无新 Bug 报告。**
*   **历史修复回顾**：PR #281 修复了一个严重的启动崩溃类 Bug（CLI 无法在原生 Windows 运行）。该问题已被解决，无需进一步追踪。
*   **稳定性评估**：随着跨平台路径问题的修复，Windows 平台的稳定性预期将提升。建议后续版本重点关注该修复在复杂目录结构下的表现。

## 6. 功能请求与路线图信号
**今日无新的功能请求。**
基于今日数据，暂无新的用户需求输入。开发者可参考已合并的 PR #281 判断团队对“跨平台兼容性”的重视程度，这通常是进入主流桌面用户视野的前置条件。

## 7. 用户反馈摘要
**今日无新的用户反馈。**
*   **潜在痛点回顾**：早期用户在使用 `tinyagi` CLI 时，若直接在 Windows CMD/PowerShell 中运行而非通过 WSL，会遭遇模块加载失败。这一痛点已通过 PR #281 得到缓解。未来需关注是否有其他平台特定（Platform-specific）的路径或权限问题出现。

## 8. 待处理积压
**无显著的长期未响应积压项。**
今日无新开的 Issue 或 PR，且最近的活动（PR #281）已顺利闭环。项目维护者当前压力较小，可利用此窗口期进行代码重构、文档更新或规划下一个版本的特性开发。

---
*注：以上分析基于 2026-06-26 过去24小时的 GitHub 公开数据。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
过去24小时 CoPaw 项目保持高活跃度，共处理 27 个 Issues 和 50 个 Pull Requests，其中 10 个 Issue 和 22 个 PR 已关闭或合并。社区贡献者积极修复浏览器自动化资源泄漏、自定义模型提供商兼容性以及前端渲染等关键问题。虽然没有新版本发布，但多个底层架构修复（如 Runtime 2.0 集成、内存系统重构）正在稳步推进，项目稳定性显著增强。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在底层稳定性修复和功能完善：
*   **[PR #5443] 修复 TUI ACP 命令支持**：恢复了 AgentScope 2.0 迁移后丢失的 TUI 命令（如 `/clear`, `/compact`）和审批流程，提升了终端交互体验。（已合并）
*   **[PR #5534] 文档优化**：添加了 README 趋势徽章，提升项目可见度。（已合并）
*   **[PR #5457] 文件大小限制修复**：针对 `send_file_to_user` 工具的大文件传输问题进行了修复，防止前端崩溃。（已合并/关联 Issue #5479）
*   **[PR #5536] 浏览器进程清理修复**：解决了 `browser_use` 停止后 Chrome 渲染进程残留导致的内存泄漏问题。（已合并/关联 Issue #5520）
*   **[PR #5535] 内容审核缓存修复**：修正了将单次内容审核错误误判为模型永久拒绝媒体输入的 Bug。（已合并/关联 Issue #5505）

## 4. 社区热点
以下 Issues 和 PRs 引发了较多关注或讨论：
*   **[Issue #5345] 自定义 OpenAI 兼容提供商 Function Calling 失效**
    *   **链接**: [agentscope-ai/QwenPaw Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)
    *   **分析**: 用户报告 OMLX 等自定义提供商在 CoPaw 中无法触发工具调用，尽管 API 兼容。这反映了用户对扩展非官方模型提供商功能的强烈需求，且当前实现可能存在协议解析层面的缺陷。
*   **[Issue #2733 / #5520] 浏览器自动化资源泄漏**
    *   **链接**: [Issue #2733](https://github.com/agentscope-ai/QwenPaw/issues/2733), [Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520)
    *   **分析**: 这是一个长期存在的痛点，涉及 Chrome 进程未能正确关闭。虽然已有 PR #5536 尝试修复，但 Issue #2733 仍未完全关闭，表明可能存在更深层的清理逻辑遗漏，社区对此类稳定性问题极为敏感。
*   **[Issue #5480] 前端长消息排版错乱**
    *   **链接**: [agentscope-ai/QwenPaw Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480)
    *   **分析**: CSS 布局重计算缺失导致 Markdown 渲染异常。PR #5538 已提交修复，显示了前端团队对用户体验细节的关注。

## 5. Bug 与稳定性
| 严重等级 | 问题描述 | 关联 Issue | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **高** | **浏览器资源泄漏**：`browser_use` 停止后 Chrome 进程残留，导致内存耗尽。 | [#5520](https://github.com/agentscope-ai/QwenPaw/issues/5520), [#2733](https://github.com/agentscope-ai/QwenPaw/issues/2733) | Fix PR [#5536](https://github.com/agentscope-ai/QwenPaw/pull/5536) |
| **高** | **内容审核误判**：MiniMax-M3 单次图片审核错误被缓存，导致后续合法图片请求被剥离。 | [#5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) | Fix PR [#5535](https://github.com/agentscope-ai/QwenPaw/pull/5535) |
| **中** | **Windows 文件预览 404**：`send_file_to_user` 在 Windows 本地版生成的链接无法访问。 | [#5508](https://github.com/agentscope-ai/QwenPaw/issues/5508) | 待处理 |
| **中** | **Linux 浏览器检测失败**：IME 包裹的默认浏览器导致 `browser_use` 启动超时。 | [#5528](https://github.com/agentscope-ai/QwenPaw/issues/5528) | Fix PR [#5526](https://github.com/agentscope-ai/QwenPaw/pull/5526) |
| **低** | **前端大文件渲染崩溃**：会话文件 >500KB 时前端报错。 | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | Fix PR [#5457](https://github.com/agentscope-ai/QwenPaw/pull/5457) |
| **低** | **心跳任务超时**：复杂心跳任务因硬编码 120 秒超时被中断。 | [#5539](https://github.com/agentscope-ai/QwenPaw/issues/5539) | 待处理 |

## 6. 功能请求与路线图信号
*   **插件标准化安装**：[Issue #5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) 请求支持通过 pip 安装插件，而非仅依赖 ZIP。这符合 Python 生态标准，可能在未来版本中被采纳。
*   **Slack 频道集成**：[PR #5193](https://github.com/agentscope-ai/QwenPaw/pull/5193) 正在评审中，支持 Slack 的多模态和流式输出，显示项目正在积极拓展企业级通讯渠道。
*   **数据分析和解插件**：[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 引入了 DataPaw 插件，包含 12 个 BI 技能，表明路线图中包含增强数据分析能力的计划。
*   **模型动态切换**：[Issue #5527](https://github.com/agentscope-ai/QwenPaw/issues/5527) 询问何时支持 AgentScope 2.0 的动态模型切换，以应对限流或不可用情况。这是一个重要的可用性需求。
*   **自定义模型排序**：[PR #5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) 允许用户在界面中拖拽排序模型，提升了配置管理的灵活性。

## 7. 用户反馈摘要
*   **痛点**：
    *   **自定义提供商兼容性差**：用户期望 CoPaw 能无缝支持遵循 OpenAI 标准的第三方提供商（如 OMLX），但目前 Function Calling 等功能存在断层。
    *   **资源管理不善**：浏览器自动化和资源清理是高频投诉点，用户担心长时间运行会导致系统资源耗尽。
    *   **Windows 本地体验不佳**：文件预览链接在 Windows 上无法工作，影响了本地应用的用户体验。
*   **满意点**：
    *   **TUI 改进**：用户感谢 TUI 命令的恢复和项目对终端交互优化的努力。
    *   **响应速度**：许多 Bug 在报告后短时间内就有开发者提交 PR 进行修复，显示了高效的社区响应机制。

## 8. 待处理积压
*   **[Issue #5508] Windows 文件预览 404**：这是一个影响 Windows 用户的明确 Bug，需优先修复以保持一致性。
*   **[Issue #5539] 心跳任务超时**：硬编码的超时时间限制了复杂自动化任务的可靠性，建议调整为可配置或动态计算。
*   **[Issue #5342] 工具结果大小硬限制**：用户提出在工具执行层面对结果大小进行硬限制，以防止上下文爆炸。这是一个防御性设计建议，值得纳入路线图。
*   **[Issue #5529] 命令冲突**：`/new` 与 `/news` 自动补全冲突，虽然是小问题，但影响易用性，建议在 PR 评审中快速解决。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-06-25 展现出极高的开发活跃度，过去24小时内共产生 48 条 Issue 更新和 50 条 PR 更新，其中 13 个 Issue 已关闭，6 个 PR 已合并/处理完毕。核心焦点集中在 **v0.8.3 版本的稳定性加固**、**WASM 插件系统的底层重构**以及 **委托代理（Delegate）机制的安全性与灵活性增强**。尽管没有新版本的正式 Release，但大量关键 Bug 修复（特别是涉及内存泄漏、竞态条件和权限绕过的问题）正在快速收敛，为即将到来的小版本迭代奠定了坚实基础。项目整体处于“高负荷修复与架构演进”的健康状态。

## 2. 版本发布
**无新版本发布。**
当前主要围绕 `v0.8.2` 的非插件队列支持（Issue #8181）和 `v0.8.3` 的运行时/代理/工具稳定性（Issue #8071）进行收尾工作。

## 3. 项目进展
今日多个关键 PR 的推进显著提升了系统的健壮性和可配置性：

*   **WASM 插件系统深化**：PR #7928 引入了初始的 WASM Component-Model 插件主机代码，配合 Issue #8135 的 RFC，标志着 ZeroClaw 向“Wasm-first”架构迈进的关键一步，旨在消除对 Node.js 的依赖并增强安全性。
*   **委托代理机制增强**：PR #8239 实现了独立的委托目标模式，允许子代理使用自身策略而非仅继承父级限制，解决了 Issue #8279 中提到的权限绕过风险，并响应了 Issue #7743 的需求。
*   **SOP (标准作业程序) 控制平面**：PR #8304 增加了带故障关闭超时机制的离线审批平面，这是 Issue #8288 中 SOP 里程碑达成 5/5 的关键组件。
*   **上下文窗口可视化**：PR #7946 在 CLI、TUI 和 Gateway 中添加了模型上下文窗口使用率指示器，提升了用户体验的可观测性。
*   **原生 Shell 配置**：PR #8311 允许用户通过配置文件指定原生运行时使用的 Shell，增强了环境适应性。

## 4. 社区热点
以下 Issue 因评论数多或涉及核心架构决策而备受关注：

*   **[RFC] Work Lanes & Board Automation (Issue #6808)**
    *   **热度**：11 条评论，状态 Accepted。
    *   **分析**：旨在优化工作流路由和维护者负担，是项目治理层面的重要改进，正在逐步 rollout。
*   **[RFC] Supply Chain Signing & SLSA Provenance (Issue #8177)**
    *   **热度**：8 条评论，状态 Blocked。
    *   **分析**：涉及硬件 PGP 密钥和容器签名，是提升供应链安全性的核心 RFC，目前等待维护者审查以推进 Phase 3。
*   **[RFC] Prefer a lighter ZeroClaw core (Issue #6165)**
    *   **热度**：5 条评论。
    *   **分析**：提议通过外部集成（Skills）移除核心中的硬编码工具（如 Jira, GitHub），以减少核心体积并提高模块化程度，符合长期架构愿景。
*   **[RFC] OCI-Compliant Container Registries for Plugins (Issue #7497)**
    *   **热度**：3 条评论。
    *   **分析**：提议用 OCI 镜像替代 JSON 索引来存储和分发 WASM 插件，利用 cosign 进行供应链接验证，是插件生态标准化的重要一步。

## 5. Bug 与稳定性
今日报告并部分修复了多个严重程度的 Bug，主要集中在运行时稳定性和安全边界：

*   **严重 (S0/S1)**：
    *   **Delegate 权限绕过 (Issue #8279)**：子代理可以调用父策略禁止的工具。*关联 PR #8239 正在解决此问题。*
    *   **Kimi Code API 回归 (Issue #8154)**：Moonshot 端点返回 404，导致工作流阻塞。*已关闭，预计在下个配置更新中修复。*
    *   **MCP Stdio 进程泄漏 (Issue #5903)**：启用心跳时，MCP 子进程随时间累积，可能导致资源耗尽。
*   **中等 (S2/S3)**：
    *   **Telegram 图片重复发送 (Issue #5514)**：多张图片被识别为多次请求。*关联 Issue #7873 作为追踪器。*
    *   **Session 持久化竞态条件 (PR #7847)**：并发工作线程可能损坏会话历史 JSONL 文件。*PR #7847 已提出修复方案。*
    *   **Native Tool Calling 标记膨胀 (Issue #8327)**：OpenAI 兼容提供商处理图像标记时 Token 计数异常。
*   **构建/编译错误**：
    *   **Voice Wake 缺失字段 (Issue #8236)**：`--all-features` 构建失败。*已关闭。*
    *   **Mutex Poisoning (PR #8149)**：WASM 插件运行时因互斥锁中毒导致进程崩溃。*PR #8149 已修复。*

## 6. 功能请求与路线图信号
*   **Goal Mode (Issue #8303)**：用户强烈需要一个“目标模式”，允许代理自主追求单一目标直到完成或预算耗尽，而非仅依赖交互式回合。这是一个重要的功能缺口，可能纳入后续版本。
*   **OpenRouter Fallbacks (Issue #8138)**：支持 OpenRouter 的模型自动故障转移数组，提高可用性。
*   **SkillForge 整合 (Issue #8309)**：SkillForge 引擎目前处于“孤儿”状态，需要决定是完善其与 Safe Defaults 的连接还是移除，反映了技能发现机制的成熟度问题。
*   **Everything is a Plugin (Issue #6489)**：长期路线图，旨在统一集成、插件和工具的概念，目前仍在早期规划阶段。

## 7. 用户反馈摘要
*   **痛点**：用户普遍关注**资源泄漏**（MCP 进程、翻译映射表）和**并发安全性**（Telegram 媒体组处理、Session 持久化）。
*   **需求**：对于**可观测性**的需求增加，如上下文窗口使用率显示（PR #7946）和 Web Dashboard 内的就地升级功能（Issue #8170）。
*   **满意度**：社区对 WASM 插件系统的标准化（OCI 注册表、签名）表示高度支持，认为这是提升安全性和去 Node.js 依赖的必要步骤。

## 8. 待处理积压
*   **Supply Chain Signing (Issue #8177)**：作为高优先级 RFC，目前状态为 Blocked，需维护者尽快介入以推进供应链安全合规。
*   **SkillForge Integration (Issue #8309)**：作为一个已合并但未完全集成的特性，需要明确其未来方向（完成或移除），以避免技术债务积累。
*   **Telegram Media Group Dispatch (Issue #7873)**：虽然 Issue #5514 和 #7873 存在，但具体的媒体组合并逻辑仍需更彻底的解决方案，目前仅是部分修复。

---
*本报告由 Agnes-2.0-Flash 生成，基于 ZeroClaw GitHub 仓库公开数据。*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*