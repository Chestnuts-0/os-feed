# OpenClaw 生态日报 2026-09-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-06 21:50 UTC

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

⚠️ 摘要生成失败。

---

## 横向生态对比



---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 – 2026‑09‑07

| 项目 | 状态 |
|------|------|
| **Issue 活跃度** | 4 件（3 新/活跃，1 已关闭） |
| **PR 活跃度** | 2 件（1 待合并，1 已合并/关闭） |
| **版本发布** | 无新发布 |

---

## 1. 今日速览  
- **总体活跃度**：项目在过去24 小时保持中等活跃，新增3 个 Issue 并关闭1 个，PR 也保持同步推进。  
- **社区参与**：Issue 与 PR 的讨论量相对有限，均未出现高频评论，但已开启数个新功能请求。  
- **质量指标**：未出现新版本发布，也没有报告新的严重崩溃或回归问题，项目稳定性维持在可接受水平。

---

## 2. 版本发布  
> 无新版本发布。  
> （如果以后发布，请在此处补充变更日志、破坏性变更与迁移建议。）

---

## 3. 项目进展  
| PR | 状态 | 主要变更 | 影响 |
|----|------|----------|------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | ✅ 已合并 | • QQ Channel 解析多种附件（表情、语音、图片、视频、文件）<br>• 支持本地附件上传并回复<br>• 优先使用 Markdown 格式回复 | 为多模态交互提供更完整的 QQ Channel 支持，显著提升用户体验。 |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | 🔄 待合并 | 完成捷克语（Czech）标签的 i18n 代码包 | 使国际化覆盖更广，提升多语言 UI 的可读性。 |

**总体进展**：通过 #1349，项目在多模态聊天方面取得实质性突破；#3348 将在未来合并后进一步完善本地化体验。

---

## 4. 社区热点  
| 主题 | 链接 | 讨论亮点 | 关键诉求 |
|------|------|----------|----------|
| **Issue #3369 – OpenCode Go session header** | [#3369](https://github.com/sipeed/picoclaw/issues/3369) | 新增 `x-opencode-session` header 需求，讨论如何将内部 session ID 与 OpenCode Go 兼容。 | 提供统一的会话标识，满足 OpenCode Go 的安全与追踪需求。 |
| **Issue #3350 – Web UI 输入卡顿** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 在低性能嵌入式设备上输入延迟严重，讨论缓存、压缩与渲染优化。 | 优化前端与后端交互，提升低端硬件上的可用性。 |
| **Issue #3351 – 物理删除会话记录** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | 讨论 `JSONLStore` 物理覆盖导致历史消失的问题，涉及持久化策略。 | 需要改进存储模型，避免会话记录被意外删除。 |

> **观察**：热点 Issue 主要集中在「低性能设备兼容性」与「会话持久化」两大痛点，显示社区对产品可靠性与可扩展性的高度关注。

---

## 5. Bug 与稳定性  
| 级别 | Issue | 描述 | 状态 |
|------|-------|------|------|
| **中等** | #3350 | Web UI 输入卡顿，CPU 升高 | 仍在讨论，未提供 fix |
| **中等** | #3351 | 会话记录被物理删除导致历史丢失 | 仍在讨论，未提供 fix |

> **注意**：目前尚未出现严重的 crash 或回归 bug，项目整体稳定性维持在良好状态。

---

## 6. 功能请求与路线图信号  
| 功能 | Issue | 关联 PR | 预计集成时间 |
|------|-------|--------|--------------|
| **支持更多 LLM Provider** | #675 | 已关闭 | 已完成，已集成至主分支 |
| **OpenCode Go session header** | #3369 | 无 | 视实现难度，预估 1–2 版 |
| **低性能设备优化** | #3350、#3351 | 无 | 需要进一步评估与实现，建议在 2.0 版本前完成 |

> 结合已合并 PR #1349 与开放 Issue #3369，项目路线图应侧重 **多模态扩展** 与 **跨平台性能**。

---

## 7. 用户反馈摘要  
- **QQ Channel 需求**：用户期望能上传本地音视频文件并直接回复，#1349 解决了大部分痛点。  
- **低端设备体验**：多用户反馈在 RV1106 等嵌入式硬件上 Web UI 输入卡顿，影响日常使用。  
- **历史记录丢失**：#3351 反映会话文件被压缩后数据被截断，担心重要对话被永久删除。  

> 用户对多模态支持的积极反馈与对低端设备兼容性的关注构成了项目当前的主要动力。

---

## 8. 待处理积压  
| 事项 | 链接 | 说明 | 建议行动 |
|------|------|------|----------|
| **Issue #3350** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 输入卡顿、CPU 升高 | 需要评估前端优化或后端缓存方案，建议设定里程碑。 |
| **Issue #3351** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | 会话记录被物理删除 | 考虑重构 `JSONLStore` 为 append‑only 或引入备份机制。 |
| **PR #3348** | [#3348](https://github.com/sipeed/picoclaw/pull/3348) | i18n 完成 Czech 代码包 | 确认合并后发布多语言包，减少语言覆盖缺口。 |

> **提醒**：以上 Issue 与 PR 属于长期积压且直接影响产品质量，建议将其列入下周维护计划。

---

> **整体结论**：PicoClaw 在本周期维持中等活跃度，已实现关键多模态功能并收到积极用户反馈。当前重点应聚焦于低端设备优化与会话持久化，确保产品在多平台上的稳定性与可维护性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-09-07)

## 1. 今日速览
NullClaw 项目在过去24小时内保持**低日常活跃度**，整体处于静默维护状态。今日无新版本发布，无新增或活跃的用户 Issue。项目推进主要依赖于一个针对 MCP（Model Context Protocol）标准输入流稳健性的修复 PR，表明团队目前专注于提升核心通信协议的稳定性和资源清理机制。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日有 **0** 个 PR 被合并。项目代码库在主干分支上目前无变更。

## 4. 社区热点
今日社区讨论极为冷清，无可统计的活跃讨论。唯一的工程动态为以下待合并 PR：

*   **PR #996: fix(mcp): bound stdio response waits** [OPEN]
    *   **链接**: [nullclaw/nullclaw PR #996](https://github.com/nullclaw/nullclaw/pull/996)
    *   **内容**: 该 PR 旨在修复 MCP stdio 响应读取缺乏超时控制的问题。作者 `be-student` 引入了 `timeout_ms` 机制，并在请求超时或初始化失败时正确终止服务器进程组及清理子进程。
    *   **背景**: 关联修复了 **Issue #991**。这反映了对 MCP 客户端在服务端无响应时可能导致资源泄漏或挂起问题的关注。目前该 PR 处于开放状态，等待代码审查与合并。

## 5. Bug 与稳定性
今日无新的用户报告的 Bug、崩溃或回归问题进入 Issue 追踪系统。

然而，从 PR #996 的内容可以推断，项目正在内部处理一个潜在的稳定性问题：
*   **潜在问题**: MCP stdio 通信在响应超时场景下存在进程和文件描述符泄漏风险。
*   **状态**: **已有 Fix PR** ([#996](https://github.com/nullclaw/nullclaw/pull/996))。该修复通过了 `zig build test` 的全量测试（7,373 项通过），并验证了 Release 构建。此修复对于防止长期运行的 Agent 进程因 MCP 错误累积资源消耗至关重要。

## 6. 功能请求与路线图信号
今日无新的功能请求 Issue。

根据 PR #996 的活动，可以观察到项目路线图的一个侧重点：**增强底层通信协议的健壮性**。对超时控制和进程生命周期的管理表明，NullClaw 正致力于使其 MCP 集成在生产环境中更加可预测和安全。这可能预示着即将发布的版本将包含这次稳定性改进。

## 7. 用户反馈摘要
今日无用户通过 Issue 提供的直接反馈。由于 Issue 活动量为零，暂无法从评论中提炼用户痛点或满意度数据。

## 8. 待处理积压
*   **PR 积压**: **PR #996** ([fix(mcp): bound stdio response waits](https://github.com/nullclaw/nullclaw/pull/996)) 自 2026-09-06 创建以来已处于开放状态一天。鉴于其关联了 Bug 修复且测试已全面通过，建议维护者优先审查此 PR，以尽快合并这一稳定性改进。
*   **Issue 积压**: 当前无新 Issue 积压。建议团队关注更早期的未关闭 Issues，特别是与核心功能相关的请求，以评估其优先级。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 (2026-09-07)

作为开源项目分析师，为您带来网易有道旗下 AI 智能体与个人助手项目 **LobsterAI**（`netease-youdao/LobsterAI`）的最新社区动态分析。

---

## 1. 今日速览
过去 24 小时内，LobsterAI 项目整体处于**极低活跃度**状态。期间无新版本发布，无 Pull Request（PR）的提交或合并，仅有 1 条标有 `stale`（陈旧）标签的 Issue 发生了状态更新。这表明项目在周末或当前阶段的代码合入频率放缓，维护重心可能暂时转入内部迭代或长线规划。

---

## 2. 版本发布
*无新版本发布。*

---

## 3. 项目进展
*无新合并或关闭的 PR。今日代码库无实质性进展。*

---

## 4. 社区热点
今日社区唯一的讨论焦点集中在状态管理与 UI 联动逻辑上：

*   **[#1068 Bug: 删除当前的agent，切换到别的agent之后需要自动刷新任务列表](https://github.com/netease-youdao/LobsterAI/issues/1068)**
    *   **作者**：OnePieceJoker
    *   **状态**：[OPEN] [stale] (创建于 2026-03-30，最近更新于 2026-09-06)
    *   **背景与诉求**：用户反馈在多 Agent 切换场景下，当删除当前正在使用的 Agent 并自动/手动切换到其他 Agent（如仅剩的 `main` agent）时，任务列表未能触发自动刷新，导致界面停留在错误或空白状态。
    *   **社区诉求分析**：该 Issue 暴露出前端在处理“当前实体被删除”后的级联状态重置和视图同步（UI State Sync）方面存在疏漏，影响了多 Agent 协作场景下的流畅度。

---

## 5. Bug 与稳定性
今日仅追踪到 1 个长期未解决的交互类 Bug：

*   **[#1068 多 Agent 切换与删除后的任务列表未刷新问题](https://github.com/netease-youdao/LobsterAI/issues/1068)**
    *   **严重程度**：中等（影响多 Agent 管理的交互体验和数据一致性）。
    *   **已有 Fix PR**：无。
    *   **状态**：已被标记为 `stale`，暂无核心维护者认领修复。

---

## 6. 功能请求与路线图信号
*今日暂无新的功能请求（Feature Request）提出。* 结合现有的 Issue 信号来看，前端状态管理（State Management）的健壮性仍是当前体验打磨需要关注的领域。

---

## 7. 用户反馈摘要
*   **痛点**：在进行 Agent 实例的生命周期管理（如删除）时，UI 层的响应不够敏捷，存在视图不同步的瑕疵。
*   **使用场景**：用户在深度使用多 Agent（Multi-Agent）配置及主从 Agent（如 `main` agent 搭配自定义 agent）切换的高级功能时遇到了边缘情况。

---

## 8. 待处理积压
*   **[#1068 任务列表自动刷新问题](https://github.com/netease-youdao/LobsterAI/issues/1068)**：该 Issue 自 3 月底创建以来跨度较长，且已被标记为 `stale`。建议维护团队评估其影响范围，若该问题在多 Agent 场景下依然存在，建议尽快安排前端人力修复或关闭该陈旧 Issue 以保持 Issue 列表的整洁。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 (2026-09-07)

---

## 1. 今日速览
过去 24 小时内，CoPaw (QwenPaw) 项目保持了高度的社区活跃度，共更新了 19 条 Issues（新开/活跃 16 条，关闭 3 条）及 6 条 PR（待合并 5 条，已关闭/合并 1 条）。今日社区焦点高度集中于多 Agent 协作状态同步、上下文压缩与丢失问题、桌面端性能与稳定性，以及部分 UI/通道（如 Telegram 适配）的体验优化。整体来看，虽然暴露出较多关于长文本处理和异步阻塞的痛点，但新贡献者们正在通过高质量的 PR 快速响应并推进修复。

---

## 2. 版本发布
*今日无新版本发布 (Releases)*

---

## 3. 项目进展
今日暂无大规模 Feature PR 被正式合并，但核心贡献者提交了多项关键的修复与优化 PR（大部分处于待合并状态）：
- **心跳超时配置化**：PR [#2134](https://github.com/agentscope-ai/QwenPaw/pull/2134)（由 `dai-junjie` 提交并已关闭/推进）为心跳任务引入了可配置的运行超时时间，解决了以往硬编码 120 秒导致长任务失败的问题。
- **防止重复提交报错**：针对用户在任务执行中发送新消息遭遇 `409 Conflict` 的痛点，PR [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) 提出了将后续消息自动入队的优化方案。
- **工具调用异常捕获与日志留痕**：针对 `_drain()` 吞掉异常栈的问题，PR [#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578) 增加了完整的异常日志记录，大幅提升了故障可观测性。
- **内置通道懒加载优化**：PR [#7546](https://github.com/agentscope-ai/QwenPaw/pull/7546) 优化了内置通道的注册机制，避免控制台工作区无谓预加载沉重的 SDK，显著提升了启动速度。

---

## 4. 社区热点
今日讨论最热烈的 Issue 当属关于主子 Agent 协作与任务进度的讨论：
- **[#7450 主 agent+多子 agent 任务推进依赖人工追问](https://github.com/agentscope-ai/QwenPaw/issues/7450)**（8条评论）：用户反馈在复杂任务中，主 Agent 常常不会主动查询子 Agent 的执行状态，导致长时间静默，必须由用户人工追问“进度如何”后才恢复推进。这暴露出当前 Agent 在自主任务编排与长周期轮询上的设计缺陷。

---

## 5. Bug 与稳定性
今日报告了多起高危 Bug，严重影响了长文本处理、会话持久化与稳定性：
1. **上下文与记忆丢失/错乱（高危）**：
   - [#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584) & [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) 报告了模型的回复意外从上下文中丢失，导致 AI 陷入“工具调用-结果丢失-再次调用”的死循环。
   - [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) 反应在长上下文、手动压缩后，早期会话记录彻底丢失，导致任务无法继续。
2. **异步阻塞与事件循环卡死**：
   - [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) 指出桌面端在启动和发消息时由于同步调用导致事件循环被阻塞 110 秒以上。
3. **异常吞没**：
   - [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) 反应工具派发层 `_coordinator.py` 的 `_drain` 吞掉了异常栈，已由社区 PR [#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578) 着手解决。

---

## 6. 功能请求与路线图信号
社区用户和贡献者提出了多项极具价值的功能扩展：
- **等待子任务完成工具**：[#7580](https://github.com/agentscope-ai/QwenPaw/issues/7580) 提议增加一个阻塞式的内置 Tool，允许主 Agent 可靠地等待子 Agent 完成，替代目前不可靠的轮询。
- **Telegram 体验优化**：[#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585) 反映 Markdown 表格无法渲染成乱码；[#7586](https://github.com/agentscope-ai/QwenPaw/issues/7586) 请求在最终回复发出后自动清理流式中间消息。
- **AgentScope 社区生态联动**：[#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583) 建议增加社区登录、信箱与快速反馈功能。
- **插件市场与工作目录优化**：[#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) 请求插件市场增加一键更新与防刷新优化；[#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588) 强烈呼吁恢复 v2.1.0 的主工作目录直接输入路径功能。

---

## 7. 用户反馈摘要
- **痛点集中区**：用户在使用 v2.2 版本处理长文档、长会话时，普遍遭遇了**上下文丢失、模型“失忆”、工具调用陷入死循环**等稳定性问题。此外，桌面端在 UI 交互（如工作目录选择器变难用、插件商店操作繁琐）上的退化也引发了部分老用户的抱怨。
- **使用场景**：多 Agent 协同处理长达数百页的技术文档、OCR 校对、自动化插件开发维护是当前核心高频场景。

---

## 8. 待处理积压
- **长期积压建议关注**：部分关于数据库 WAL 模式崩溃（如 [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814)，近期已关闭）和深度集成商兼容性的 Issue 需要维护团队持续跟进验证。建议维护者优先合并针对通道队列阻塞（[#7547](https://github.com/agentscope-ai/QwenPaw/pull/7547)）和思考内容压缩（[#7521](https://github.com/agentscope-ai/QwenPaw/pull/7521)）的高质量 PR，以缓解当前的稳定性危机。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*