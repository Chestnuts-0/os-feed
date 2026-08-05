# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 22:43 UTC

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



# OpenClaw 项目动态日报 — 2026-08-06

---

## 1. 今日速览

过去24小时 OpenClaw 维持高强度活跃：**500 条 Issues 更新**（新开/活跃 469，关闭 31）与 **500 条 PR 更新**（待合并 423，已合并/关闭 77），社区参与度极高。今日无新版本发布，但多个关键修复 PR 已进入维护者审阅阶段。议题热度集中在 session 状态管理、子代理可靠性和多渠道消息投递稳定性，反映出项目正进入数据库优先运行时（database-first runtime）的深度磨合期。整体健康度良好，bug 反馈链路清晰，维护者响应及时。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 重点合并/关闭 PR

| PR | 作者 | 说明 |
|---|---|---|
| [#119747](https://github.com/openclaw/openclaw/pull/119747) [CLOSED] `fix(diagnostics): preserve OTEL startup failure during rollback` | vincentkoc | 修复诊断 OTEL 启动失败在回滚时被吞掉的问题，维护可观测性完整性 |
| [#116505](https://github.com/openclaw/openclaw/pull/116505) [OPEN] `fix(github-copilot): stop advertising unsupported Raptor mini` | vincentkoc | 移除静态 fallback catalog 中 GitHub Copilot 不支持的 `raptor-mini` 条目，避免 400 报错 |
| [#119698](https://github.com/openclaw/openclaw/pull/119698) [OPEN] `fix(qa): recognize portable Slack commentary lane` | vincentkoc | 修复 QA 流水线中 Slack 可移植评论通道的误报失败 |
| [#119680](https://github.com/openclaw/openclaw/pull/119680) [OPEN] `fix(ci): restore package Telegram beta validation` | vincentkoc | 恢复 CI 中 Telegram beta 验收通道的包验证能力 |
| [#119745](https://github.com/openclaw/openclaw/pull/119745) [OPEN] `improve(ollama): reduce inactive startup cost` | vincentkoc | 按需加载 Ollama 插件运行时，降低未使用场景的启动开销和内存占用 |

### 关键进行中的 PR

- [#97175](https://github.com/openclaw/openclaw/pull/97175) — **P1** 背景维护不再阻塞新消息，解决 deferred context-engine maintenance 导致会话卡顿
- [#119741](https://github.com/openclaw/openclaw/pull/119741) — 防止大 transcript 清理时内存爆炸（关联 Issue #112423）
- [#119729](https://github.com/openclaw/openclaw/pull/119729) — **P1** 修复 Control UI 返回活跃会话时丢失聊天记录和计时
- [#103537](https://github.com/openclaw/openclaw/pull/103537) — **P1** 防止 auto-update 期间 Gateway respawn 导致包替换失败
- [#119752](https://github.com/openclaw/openclaw/pull/119752) — **P1** 修复时间戳竞争导致成功 session 标记为 running 的竞态条件

**整体判断：** 项目正在集中攻克 session 生命周期管理和数据库迁移的核心稳定性问题，77 条 PR 已合并/关闭，维护团队在 QA 自动化和通道修复上持续投入。

---

## 4. 社区热点

### 评论数 TOP Issues

| Issue | 评论 | 评级 | 主题 |
|---|---|---|---|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 58 | 🐚 platinum | Realtime voice session 状态无界累积 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 25 | 🦞 diamond | Subagent 完成结果静默丢失 |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 19 | 🦪 silver | Gateway 启动即 CPU 100%，plugin-metadata 快照阻塞 accept loop（已关闭）|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 14 | 🦞 diamond | Telegram 上 Agent 重复发送相同回复 2-10x（回归）|
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | 13 | 🦪 silver | SQLite snapshot 恢复缺少端到端崩溃和身份保证 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 13 | 🦞 diamond | 工作路径被 hardcode 进代码并随发布推送 |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 13 | 🌊 off-meta | 为 SQLite transcript 添加 companion-friendly session 接口 |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) | 12 👍3 | 🦪 silver | 2026.7.1 本地 llama.cpp provider 400 错误（已关闭）|

### 热点分析

- **Session 状态管理是绝对核心议题。** #116201（voice 状态无界累积）和 #44925（subagent 结果丢失）分别获得 58 和 25 条评论，反映出用户对长会话可靠性的深度关切。
- **#51429**（hardcode 路径问题）引发社区强烈反响，虽评论数不是最高但情感强度高，暴露了代码审查流程的疏漏。
- **#118846** 已被关闭，说明 Gateway 启动性能问题得到了快速响应。

---

## 5. Bug 与稳定性

### P0 / P1 严重 Bug

| Issue | 级别 | 摘要 | Fix PR |
|---|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | **P0** 🚨 | DB v14→v15 迁移失败：`no such column: entry_valid`，Gateway 拒绝启动 | — |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | P1 | Realtime voice session 保留无界 provider/consult 状态 | — |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1 | Subagent 完成静默丢失，无重试/通知/重启 | — |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | P1 | Telegram 重复回复回归（5.20 引入） | — |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | P1 | SQLite snapshot 恢复缺少持久化保证 | — |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | P1 | 大 transcript 清理阻塞 Gateway 事件循环 | [#119741](https://github.com/openclaw/openclaw/pull/119741) |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | P1 | Codex app-server turn 卡死直到 stuck-session recovery | — |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | P1 | 循环检测阻塞 exec 但不终止卡住的 agent run | — |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | P1 | client-delegated tool 中断后承诺工作未执行 | — |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | P1 | 自动更新后 Gateway 持有过期 hashed bundle 引用 | — |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 | 子进程泄漏导致 zombie 累积和运行时退化 | — |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) | P1 | WebChat turn 被 session takeover 异常中止而非重试 | — |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | P1 | `chat.send` 在模型完成后报 "thread switched branches" | — |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | P1 | Slack thread 回复生成成功但投递失败 | — |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | P1 | beta.5 `/new` 复用已 retire 的 Codex binding tombstone | — |
| [#117445](https://github.com/openclaw/openclaw/issues/117445) | P1 | Feishu 渠道入站 DM 解码为 "?"，ingress spool 抛 undefined.catch | — |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | P1 | AuthProfileStoreUnreadable 在 snapshot 发布失败后 sticky | — |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | **P0** 🚨 | 持久化 provider cooldown 在账单恢复后仍阻塞用户数小时 | — |

### 近期新增 Bug（2026-08-04/05）

- [#119557](https://github.com/openclaw/openclaw/issues/119557) — chat delta throttle 无 trailing flush，导致最后一个 chunk 被无限等待
- [#119263](https://github.com/openclaw/openclaw/issues/119263) — **今日最紧急**：DB v14→v15 迁移失败阻断升级路径

### 已有关闭的 Bug

- [#118846](https://github.com/openclaw/openclaw/issues/118846) — Gateway 启动 CPU 饱和（plugin-metadata 快照问题）
- [#106779](https://github.com/openclaw/openclaw/issues/106779) — llama.cpp provider 400 错误

---

## 6. 功能请求与路线图信号

| Issue | 摘要 | 相关 PR | 可能性 |
|---|---|---|---|
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 为 SQLite transcript/session 添加 companion-friendly 接口 | 关联 #78595 | ⭐⭐⭐ 高 — 与 database-first runtime 战略一致 |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) | ACP thread-bound session 的 agent-to-agent 可见消息（不创建 main session） | — | ⭐⭐ 中 — 架构层面需产品决策 |
| [#53654](https://github.com/openclaw/openclaw/issues/53654) | Discord messageUpdate/messageDelete 事件支持（编辑重处理/删除取消） | — | ⭐⭐ 中 — 明确的用户需求 |
| [#8892](https://github.com/openclaw/openclaw/issues/8892) | TUI `--agent` 标志选择会话处理的 agent | — | ⭐⭐ 中 — UX 便利性需求 |
| [#50205](https://github.com/openclaw/openclaw/issues/50205) | Gemini API 请求支持可配置标签（GCP 计费追踪） | — | ⭐ 低 — 特定用户群体需求 |
| [#48918](https://github.com/openclaw/openclaw/issues/48918) | 用户级 Skill Preferences/Conventions 支持 | — | ⭐⭐ 中 — 长期需求 |
| [#119325](https://github.com/openclaw/openclaw/pull/119325) | session 级 `/model -s` 选择 | — | ⭐⭐⭐ 高 — 已在 PR 阶段 |
| [#103840](https://github.com/openclaw/openclaw/pull/103840) | Codex session MCP profile | — | ⭐⭐⭐ 高 — 扩展 OpenClaw 可集成性 |
| [#117365](https://github.com/openclaw/openclaw/pull/117365) | Control UI reasoning blocks 可折叠 | — | ⭐⭐ 中 — UX 改进 |

**路线图判断：** 项目正围绕 database-first runtime 的配套能力（transcript 接口、session 管理、MCP 集成）加速建设，同时Control UI 体验也在持续优化。

---

## 7. 用户反馈摘要

### 核心痛点

1. **Session 状态不可靠**：多个 Issue 反映 session 在长时间运行、跨通道切换、subagent 编排时出现状态不一致（#44925, #86519, #115700, #107873）。用户明确表示"结果静默丢失且无通知"是不可接受的。

2. **多通道消息投递问题集中爆发**：Telegram 重复回复（#86519）、Slack 投递丢失（#96692）、Feishu 解码失败（#117445）、Discord 渠道加载回归（#77930）、QQBot 重复（#77306）——渠道稳定性是当前最大用户 Complaint 来源。

3. **升级路径风险**：DB 迁移失败（#119263）和 auto-update 后模块缓存失效（#85844）让用户对升级心存顾虑。

4. **资源泄漏**：子进程 zombie 累积（#97616）和 context 注入浪费 20-30% tokens（#67419）影响长期运行稳定性。

### 正面反馈

- Gateway 启动 CPU 饱和问题（#118846）得到快速响应并关闭，用户认可维护效率
- QA 自动化管道持续完善，多 PR 聚焦于提升测试覆盖率
- `openclaw agent exec` 默认 agent 修复（#119765）解决了多 agent 部署场景的实际问题

---

## 8. 待处理积压

### 需维护者关注

| Issue/PR | 状态 | 提醒 |
|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | P0, 无 fix PR | **DB v14→v15 迁移失败阻断升级，需优先处理** |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | P0, stale | 持久化 cooldown 阻塞用户数小时，已 stale 但问题依旧 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | P1, 58 评论 | Realtime voice 状态无界累积，最高讨论热度 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1, 25 评论, 2 👍 | Subagent 结果静默丢失，diamond 评级 |
| [#103537](https://github.com/openclaw/openclaw/pull/103537) | PR, needs proof | 防止 Gateway respawn 期间包替换，P1 但需验证 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | P2, 13 评论 | hardcode 路径问题，社区情绪强烈 |
| [#117445](https://github.com/openclaw/openclaw/issues/117445) | P1, 新报 | Feishu 渠道完全不可用，无 fix PR |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | P1, 新报 | AuthProfileStore sticky 错误，无 fix PR |
| [#90098](https://github.com/openclaw/openclaw/issues/90

---

## 横向生态对比



# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据周期：2026-08-06 | 分析师：Agnes-2.0-Flash (Sapiens AI)**

---

## 1. 生态全景

2026年8月初，个人AI助手开源生态呈现**"头部高频迭代、长尾停滞分化"**的格局。OpenClaw以日均1000条Issue/PR更新遥遥领先，Hermes Agent、IronClaw、ZeroClaw、CoPaw构成第二梯队（日均50-100条），而PicoClaw、NullClaw、TinyClaw等已进入低活跃维护或停滞状态。生态整体从功能扩张期转向**稳定性加固与架构治理期**，database-first runtime、多Agent协作、安全可观测性成为跨项目共同技术方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (待合并/合并) | Release | 健康度 |
|------|-------------------|-------------------|---------|--------|
| **OpenClaw** | 469 / 31 | 423 / 77 | 无 | 🟢 良好 |
| **Hermes Agent** | 45 / 5 | 45 / 5 | 无 | 🟡 中等（P1 Bug集中） |
| **ZeroClaw** | 39 / 11 | 49 / 1 | 无 | 🟡 中等（S1 Bug+PR积压） |
| **IronClaw** | 33 / 10 | 30 / 20 | v1.1.0-rc.1 | 🟢 良好 |
| **CoPaw** | 17 / 6 | 29 / 21 | 无 | 🟢 B+ |
| **NanoBot** | 4 / 0 | 8 / 8 | 无 | 🟢 良好 |
| **LobsterAI** | 3 / 0 | 1 / 12 | 2026.8.5 | 🟢 良好 |
| **NanoClaw** | 2 / 0 | 9 / 1 | 无 | 🟢 良好 |
| **PicoClaw** | 0 / 0 | 2 / 0 | 无 | 🟡 低活跃（PR积压135天） |
| **NullClaw** | 0 / 0 | 2 / 0 | 无 | 🟡 低活跃（修复阶段） |
| TinyClaw | 0 / 0 | 0 / 0 | 无 | ⚪ 停滞 |
| Moltis | 0 / 0 | 0 / 0 | 无 | ⚪ 停滞 |
| ZeptoClaw | 0 / 0 | 0 / 0 | 无 | ⚪ 停滞 |

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **社区规模绝对领先**：Issue/PR更新量是第二梯队的10倍以上，维护者响应及时，bug反馈链路清晰
- **渠道覆盖最广**：支持Telegram、Slack、Discord、Feishu、QQBot、WhatsApp等全渠道，是生态中多通道集成最完整的项目
- **database-first runtime战略明确**：聚焦session生命周期管理和数据库迁移，技术路线清晰

**技术路线差异：**
- vs Hermes Agent：OpenClaw侧重个人助手全渠道整合，Hermes侧重企业级多租户隔离与架构治理
- vs IronClaw：OpenClaw为通用个人助手，IronClaw聚焦企业部署与Reborn模块化架构
- vs ZeroClaw：OpenClaw功能迭代优先，ZeroClaw安全合规与RFC决策流程优先

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| **Session/长会话稳定性** | OpenClaw、Hermes Agent、CoPaw、ZeroClaw | 状态不一致、subagent结果静默丢失、context压缩中断导致历史永久丢失 |
| **多渠道消息投递可靠性** | OpenClaw、Hermes Agent、NanoBot、CoPaw | Telegram重复回复、Slack投递丢失、WeChat审批失效、Signal静默丢弃 |
| **多Agent协作链路** | OpenClaw、NanoClaw、ZeroClaw | Agent-to-Agent通信打通、多租户Memory隔离、并行监控 |
| **安全性与可观测性** | ZeroClaw、Hermes Agent、IronClaw | MCP鉴权发现、凭证链验证、日志路径诊断、安全加固 |
| **架构治理** | Hermes Agent、IronClaw、OpenClaw | god-file分解、模块化拆分、database-first runtime配套能力 |
| **LLM降级与容错** | CoPaw、OpenClaw | 模型故障自动切换、reasoning_content透传、provider发现 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|---------|---------|---------------|
| **OpenClaw** | 全渠道个人助手、database-first runtime | 个人用户、多通道集成者 | Session状态管理、数据库迁移、多渠道消息路由 |
| **Hermes Agent** | 企业级多租户、Desktop体验、架构治理 | 企业用户、生产环境部署者 | 多租户Memory隔离、god-file sharding、安装包自包含 |
| **IronClaw** | 企业部署、Reborn架构、MCP/IronHub扩展 | 企业级用户、声明式配置需求者 | Reach扩展能力、配置即代码、租户蓝图 |
| **ZeroClaw** | 安全合规、RFC决策、成本优化 | 安全敏感用户、OpenRouter成本优化者 | verifiable-intent、Goal mode、prompt cache |
| **CoPaw** | LLM降级、Thinking模式兼容、Windows测试 | 多模型用户、Windows桌面用户 | per-agent全局降级、reasoning_content透传、模型路由 |
| **NanoBot** | WebUI重构、权限架构精简、多引擎搜索 | UI/交互优化关注者和搜索增强需求者 | construction-time权限开关、mst-python聚合搜索 |
| **NanoClaw** | 多Agent协作、Skill生态扩展 | 多Agent编排和Skill扩展需求者 | Agent-to-Agent通信链路、容器/代理环境透传 |
| **LobsterAI** | 

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目日报 | 2026-08-06

## 1. 今日速览
过去24小时 NanoBot 保持高活跃度：新增 Issue 4 条，PR 16 条（8 条已合并/关闭，8 条待审），无新版本发布。今日开发重心集中在 **WebUI 视觉与交互重构**、**多渠道兼容性修复**（WhatsApp/Matrix/Mattermost）以及 **会话/记忆管理架构清理**。贡献者参与密集，技术决策偏向稳定性加固与边缘场景补全，项目整体健康度良好，无明显阻塞风险。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的 8 条 PR 显著推进了核心能力与架构一致性：
- **WebUI 视觉统一**：[#5249](HKUDS/nanobot PR #5249) 与 [#5250](HKUDS/nanobot PR #5250) 重构了菜单、弹窗、Activity 窗口的视觉层级，引入方向感知羽化与自动跟随逻辑。
- **权限架构精简**：[#5238](HKUDS/nanobot PR #5238) 移除了 request-scoped 的 `Tool.available()` 层，统一为 construction-time 开关，降低会话访问控制复杂度。
- **渠道与搜索增强**：[#5203](HKUDS/nanobot PR #5203) 修复 WhatsApp 出站媒体识别逻辑；[#5234](HKUDS/nanobot PR #5234) 正式集成 `mst-python` 作为多引擎聚合搜索提供者；[#5233](HKUDS/nanobot PR #5233) 为 Mattermost 增加线程/主频道分离的提及策略。
- **快捷会话能力**：[#5184](HKUDS/nanobot PR #5184) 将 Quick Chat 与 Temporary Chat 纳入正式 WebUI 导航，支持稳定身份与内存隔离的临时会话。

整体来看，项目在本日完成了从底层权限模型到上层 UI 的一致性治理，代理工作流的稳定性基础得到进一步夯实。

## 4. 社区热点
- **[Bug] MCP tool returns "data not found" envelope** [#5237](HKUDS/nanobot Issue #5237)：Agent 将 MCP 业务错误信封（`isError=False`）误判为成功调用，导致 LLM 无法感知失败并无限等待。该问题直指多工具编排的核心可靠性，已引发 2 条评论。
- **[Bug] fix(matrix): send non-empty POST body on room join** [#5248](HKUDS/nanobot PR #5248)：Continuwity 等 Homeserver 拒绝空 POST 体，导致 Matrix 频道加入静默失败

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目日报 — 2026-08-06

---

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去24小时共50条Issue更新（45活跃 / 5关闭）与50条PR更新（45待合并 / 5关闭），无新版本发布。今日核心信号集中在**稳定性修复**——多个P1/P2级Bug（Gateway崩溃、会话压缩中断、lifecycle guard null byte异常）集中暴露，同时**架构治理**（god-file sharding Epic）与**Desktop安装包重构**同步推进。社区对多租户隔离、长会话稳定性和桌面端体验的诉求持续升温。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭（5条）

| PR/Issue | 内容 | 贡献 |
|----------|------|------|
| [#8576](https://github.com/NousResearch/hermes-agent/issues/8576) [CLOSED] | WhatsApp bridge 3个npm漏洞修复 | 安全修复 |
| [#78201](https://github.com/NousResearch/hermes-agent/pull/78201) | 修复lifecycle guard对NUL字节及循环脚本路径的崩溃 | 核心稳定性 |
| [#79642](https://github.com/NousResearch/hermes-agent/issues/79642) [CLOSED] | 拒绝未授权第三方"TaskMarket"代理合作 | 项目治理 |
| [#79703](https://github.com/NousResearch/hermes-agent/pull/79703) [CLOSED] | Electron 41.10.3升级（GHSA-9f4c安全漏洞） | 安全修复 |
| [#15951](https://github.com/NousResearch/hermes-agent/issues/15951) [CLOSED] | `hermes doctor`全局安装检测误报修复 | 用户体验 |

### 重点在途PR

- **[PR #79599](https://github.com/NousResearch/hermes-agent/pull/79599)** — Desktop自包含安装包重构：将agent源码、uv、CPython、Node、TUI/Dashboard一并打包，首次启动无需联网下载。
- **[PR #79618](https://github.com/NousResearch/hermes-agent/pull/79618)** — 清除`uv audit`发现的安全告警，修补两条可导致依赖回退的路径。
- **[PR #79722](https://github.com/NousResearch/hermes-agent/pull/79722)** — 修复`sessions prune/archive`中SQL LIKE通配符未转义导致的误删除Bug。
- **[PR #79717](https://github.com/NousResearch/hermes-agent/pull/79717)** — 修复压缩重试循环导致Context Overflow的Bug（关联#64382）。

---

## 4. 社区热点

| Issue | 类型 | 评论 | 热度原因 |
|-------|------|------|----------|
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | Feature | 15 👍2 | 多租户Memory隔离——生产环境痛点，已自研修复 |
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | Bug P2 | 11 | lifecycle guard在heredoc路径下崩溃 |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Refactor | 10 | 全仓库god-file分解Epic，建立架构治理纪律 |
| [#68927](https://github.com/NousResearch/hermes-agent/issues/68927) | Bug P2 | 6 | Desktop长任务后Enter无响应，UI/后端不同步 |
| [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) | Bug P2 | 6 | LM-Studio工具调用重复/碎片化 |

**热点分析**：多租户问题（#34352）已运行于生产环境数月，社区期待上游集成；god-file分解Epic（#78647）标志着项目从"可用"向"可维护"过渡的关键一步。

---

## 5. Bug 与稳定性

### 🔴 P1 — 严重

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) | Gateway重启时preflight compaction崩溃（exit(1)），超大session直接杀进程 | 暂无 |
| [#79391](https://github.com/NousResearch/hermes-agent/issues/79391) | 压缩被`explicit_interrupt`中断后，session历史永久丢失（无摘要、无归档） | 暂无 |

### 🟠 P2 — 高优先级

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | lifecycle guard `ValueError: embedded null byte`崩溃 | [PR #78201](https://github.com/NousResearch/hermes-agent/pull/78201) ✅ 已合并 |
| [#79704](https://github.com/NousResearch/hermes-agent/issues/79704) | terminal_tool lifecycle guard对venv路径崩溃（与#77780同源） | [PR #78201](https://github.com/NousResearch/hermes-agent/pull/78201) ✅ 已合并 |
| [#79562](https://github.com/NousResearch/hermes-agent/issues/79562) | WeChat `/approve`首次之后文本fallback失效（竞态） | 暂无 |
| [#78541](https://github.com/NousResearch/hermes-agent/issues/78541) [CLOSED] | Telegram群组消息压缩发送吞掉完整回复 | 已关闭 |
| [#79677](https://github.com/NousResearch/hermes-agent/issues/79677) | QQ Bot cron消息不渲染markdown（msg_type硬编码为0） | 暂无 |
| [#68927](https://github.com/NousResearch/hermes-agent/issues/68927) | Desktop长任务后Enter无响应，UI气泡未渲染 | 暂无 |
| [#68876](https://github.com/NousResearch/hermes-agent/issues/68876) | Desktop provider/model切换后UI与live request不同步 | 暂无 |
| [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) | LM-Studio工具调用重复/碎片化 | 暂无 |
| [#79702](https://github.com/NousResearch/hermes-agent/pull/79702) | SSH后端文件路径在Hermes宿主机被错误解析 | [PR #79702](https://github.com/NousResearch/hermes-agent/pull/79702) |
| [#79726](https://github.com/NousResearch/hermes-agent/pull/79726) | Windows Desktop后端PATH未刷新 | [PR #79726](https://github.com/NousResearch/hermes-agent/pull/79726) |
| [#79727](https://github.com/NousResearch/hermes-agent/pull/79727) | Codex reasoning summary identity丢失导致Desktop乱序 | [PR #79727](https://github.com/NousResearch/hermes-agent/pull/79727) |

### 🟡 P3 — 中低优先级

- [#76901](https://github.com/NousResearch/hermes-agent/issues/76901) — Termux安装脚本错误
- [#43339](https://github.com/NousResearch/hermes-agent/issues/43339) — macOS `.env` immutable flag导致profile删除失败
- [#79664](https://github.com/NousResearch/hermes-agent/issues/79664) — Vite config `configLoader: native`警告
- [#79537](https://github.com/NousResearch/hermes-agent/issues/79537) — LCM SQLite descriptors无限增长（有[PR #79538](https://github.com/NousResearch/hermes-agent/pull/79538)跟进）
- [#79718](https://github.com/NousResearch/hermes-agent/pull/79718) — TUI workspace move前未重新检查session busy状态

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关PR/信号 |
|------|-------|-------------|
| 多租户Hermes隔离 | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 社区已自研修复，上游尚未集成 |
| Desktop/Web Dashboard持久化重连 | [#53839](https://github.com/NousResearch/hermes-agent/issues/53839) 👍1 | 与#79732（[Topic]会话分组）方向一致 |
| Desktop响应模式（隐藏thinking chrome） | [#71870](https://github.com/NousResearch/hermes-agent/issues/71870) 👍1 | 已有PR跟进，低争议 |
| Discord link preview suppression | [#60942](https://github.com/NousResearch/hermes-agent/issues/60942) | 对齐Telegram现有能力 |
| Codex usage payload暴露 | [#79695](https://github.com/NousResearch/hermes-agent/issues/79695) | 直接增强计费可观测性 |
| 长运行自治能力（subagent保留、goal gates、session心跳） | [#79686](https://github.com/NousResearch/hermes-agent/issues/79686) | 多个子需求分散在各Issue，需统筹 |
| SL3-alpha Writer primitives | [#79543](https://github.com/NousResearch/hermes-agent/issues/79543) | 分解Epic下的规划子任务 |
| SL3-beta Watchdog engine | [#79544](https://github.com/NousResearch/hermes-agent/issues/79544) | 同上 |
| [Topic]会话分组（Desktop侧边栏） | [PR #79732](https://github.com/NousResearch/hermes-agent/pull/79732) | 已提交，用户体验改进 |
| Codex LB session affinity | [PR #79720](https://github.com/NousResearch/hermes-agent/pull/79720) | 已有实现，提升多会话稳定性 |
| v0.20 session write policy迁移 | [PR #79723](https://github.com/NousResearch/hermes-agent/pull/79723) | 架构治理，29个路径的合规迁移 |

**路线图信号**：项目正从"功能扩展"转向"稳定性加固+架构治理"，god-file sharding、session write policy迁移、Desktop安装包重构均指向可维护性提升。

---

## 7. 用户反馈摘要

**核心痛点**：
- **多租户隔离**：Memory操作绕过hook系统，租户间无法真正隔离（#34352），生产环境已自研修复。
- **长任务稳定性**：Desktop在长任务后UI/后端状态不同步（#68927、#68876），session压缩中断会导致历史记录永久丢失（#79391）。
- **平台网关一致性**：Telegram/WeChat/QQ Bot各自存在消息发送/渲染缺陷，用户体验参差不齐。
- **Windows体验**：PATH刷新滞后（#79726）、SSH路径解析错误（#79702）影响跨平台使用。

**用户满意点**：
- 安装包重构（#79599）承诺首次启动零下载，降低部署门槛。
- `hermes sessions prune/archive`通配符转义修复（#79722）解决了误删除风险。
- Codex reasoning summary identity保留（#79727）改善多summary场景的Desktop显示。

---

## 8. 待处理积压

| Issue | 类型 | 状态 | 建议优先级 |
|-------|------|------|-----------|
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | Feature | 15条评论，5月创建 | **高** — 生产用户迫切需求 |
| [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) | Bug P1 | Gateway重启崩溃 | **紧急** — 直接影响生产可用性 |
| [#79391](https://github.com/NousResearch/hermes-agent/issues/79391) | Bug P1 | 压缩中断导致历史永久丢失 | **紧急** — 数据安全风险 |
| [#79562](https://github.com/NousResearch/hermes-agent/issues/79562) | Bug P2 | WeChat approve失效 | **高** — 审批流程阻断 |
| [#68927](https://github.com/NousResearch/hermes-agent/issues/68927) | Bug P2 | Desktop Enter无响应 | **高** — 核心交互阻断 |
| [#68876](https://github.com/NousResearch/hermes-agent/issues/68876) | Bug P2 | Desktop provider切换不同步 | **中** — 影响多模型用户 |
| [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) | Bug P2 | LM-Studio工具调用重复 | **中** — 本地部署用户痛点 |
| [#76901](https://github.com/NousResearch/hermes-agent/issues/76901) | Bug P2 | Termux安装脚本错误 | **中** — 移动/边缘场景 |
| [#79728](https://github.com/NousResearch/hermes-agent/issues/79728) | Bug P3 | Kanban block-loop恢复误判重复 | **低** — 自动化用户 |

---

**项目健康度评估**：今日Issue/PR数量双50，活跃度较高。但P1级Bug集中（Gateway崩溃、数据丢失）需优先处理；多租户架构与god-file分解是中长期治理重点；Desktop体验修复与平台网关一致性是当前用户感知最敏感的领域。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报
**日期：2026-08-06 | 数据来源：sipeed/picoclaw**

---

## 1. 今日速览

过去 24 小时 PicoClaw 项目整体保持**低活跃度**状态：Issues 零更新，PR 待合并 2 条，无合并/关闭记录，亦无新版本发布。主要贡献者 `lc6464` 近期持续跟进两个长期 PR，项目处于**功能迭代平稳期**。整体健康度良好，但功能落地节奏偏缓，建议关注 PR 积压情况。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭，项目核心代码库无实质性推进。

待合并 PR 动态：
- **#3200** [feat] 添加可配置的默认 fallback 模型链（2026-07-01 创建，2026-08-05 更新）
- **#1951** [chore] 将安装脚本从 docs 仓库迁移至主仓库（2026-03-24 创建，2026-08-05 更新）

> 两个 PR 均在昨日（2026-08-05）有活动更新，显示贡献者仍在推进中。

---

## 4. 社区热点

今日无 Issues 讨论，PR 评论区无新增互动（评论数均为 0）。

**值得关注：**
- [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) — 引入默认 fallback 链配置功能，解决多模型场景下的容灾切换需求
- [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) — 安装脚本集中化管理，提升部署一致性

---

## 5. Bug 与稳定性

今日无 Bug 报告，无回归问题记录。项目稳定性暂无异常信号。

---

## 6. 功能请求与路线图信号

**潜在路线图信号：**

| PR | 功能方向 | 状态 | 纳入可能性 |
|----|---------|------|-----------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 多模型 fallback 链配置 | 待合并 | ⭐⭐⭐⭐ 高 |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | 部署工具链整合 | 待合并 | ⭐⭐⭐ 中 |

`#3200` 涉及核心模型管理体验，与 AI 助手类产品多模型容灾场景高度契合，预计会在近期合入主线。

---

## 7. 用户反馈摘要

今日无新的用户反馈收集。从已有 PR 可间接推断用户需求：
- **模型容灾需求**：用户期望支持多模型 fallback，避免单模型故障导致服务中断
- **部署简化需求**：用户希望安装脚本集中管理，减少维护成本

---

## 8. 待处理积压

| PR | 创建时间 | 待合并天数 | 风险评级 |
|----|---------|-----------|---------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | 2026-03-24 | **135 天** | ⚠️ 高 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 2026-07-01 | **36 天** | 中 |

> **建议维护者关注**：PR #1951 已长期处于待合并状态，建议确认代码审查进度或关闭；PR #3200 功能价值较高，建议优先审核。

---

**报告生成时间**：2026-08-06 | **分析师**：Agnes-2.0-Flash (Sapiens AI)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报
**数据周期**：2026-08-05 ~ 2026-08-06  
**报告日期**：2026-08-06

---

## 1. 今日速览
过去24小时 NanoClaw 保持中高强度的开发节奏，共产出 2 条活跃 Issue 与 10 条 PR，其中 1 条关键修复已关闭/合并，无新版本发布。项目重心明确偏向核心稳定性加固与技能（Skill）生态扩展，社区贡献者活跃度较高。整体健康度良好，基础设施兼容性（容器/代理/环境透传）与多 Agent 协作链路得到实质性推进。

## 2. 版本发布
过去24小时内无 Release 发布。当前处于密集迭代期，建议关注 `main` 分支合并进度以把握下一版本窗口。

## 3. 项目进展
- **PR #3187** `[CLOSED]` 已合并：通过禁止内置 `SendMessage` 打通了 Agent-to-Agent 通信链路，解决了多 Agent 编排场景下的核心阻塞问题。
- **PR #3191、#3188、#3156、#2346** 等修复类 PR 处于审查阶段，分别针对 WhatsApp 会话挂起、MCP 环境变量缺失、附件透传丢失及未知命令静默丢弃进行修补。
- 项目整体向前推进了 1 

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目日报 | 2026-08-06

---

## 1. 今日速览

今日 NullClaw 项目处于**低活跃度修复阶段**：过去24小时内无新 Issue 提交，亦无新版本发布。开发重心集中在 2 条待合并的运行时与通道稳定性修复 PR 上，均由核心贡献者 `raskevichai` 发起。整体来看，项目未处于功能突破期，而是进入**稳定性巩固阶段**，修复长期存在的堆栈溢出和通道静默问题，为后续迭代奠定基础。

---

## 2. 版本发布

**无新版本发布。**

当前无 Release 记录，未检测到破坏性变更或迁移需求。

---

## 3. 项目进展

### 待合并 PR（2 条）

| PR | 类型 | 作者 | 状态 |
|----|------|------|------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | Runtime 修复 | raskevichai | OPEN |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | Channels 修复 | raskevichai | OPEN |

**推进情况：**
- **#985** 修复了 `SESSION_TURN_STACK_SIZE` 被错误对齐为 `HEAVY_RUNTIME_STACK_SIZE`（2 MiB）的问题，将 Agent 路径堆栈提升至 16 MiB，直接解决深层调用栈导致的栈溢出风险。
- **#984** 修复了 Telegram/Matrix 频道在夜间闲置后静默、需全量重启网关才能恢复的结构性缺陷，通过让 `supervisionLoop` 感知轮询线程失效来实现自动回收。

两项修复均针对**运行时稳定性**，未引入新功能，但显著降低了生产环境中的静默故障概率。项目整体处于**向后兼容的补丁路径**，未发生方向性转变。

---

## 4. 社区热点

今日无高活跃度讨论，所有 PR 评论数均为 0。

**值得关注的基础修复：**
- [#985](https://github.com/nullclaw/nullclaw/pull/985) — 堆栈溢出修复，潜在影响所有使用 `SessionManager.processMessage*()` 路径的用户
- [#984](https://github.com/nullclaw/nullclaw/pull/984) — 修复长期存在的频道静默回归问题，直接影响 Telegram 和 Matrix 集成用户的日常使用体验

两个 PR 均通过 Closes 语句关联 Issue（#976、#972），说明是**有追踪的回归修复**，非临时补丁。

---

## 5. Bug 与稳定性

### 今日报告/修复问题

| 问题 | 严重程度 | 状态 | 关联 PR |
|------|----------|------|---------|
| Agent turn 路径堆栈不足导致溢出 | 中（崩溃风险） | PR #985 修复中 | [#985](https://github.com/nullclaw/nullclaw/pull/985) |
| 夜间闲置后 Telegram/Matrix 频道静默 | 高（可用性影响） | PR #984 修复中 | [#984](https://github.com/nullclaw/nullclaw/pull/984) |

**分析：**
- **#976（堆栈溢出）**：属于边界情况 Bug，在深度调用链或复杂会话场景下触发，修复后不会引入回归风险。
- **#972（频道静默）**：属于**高严重度可用性 Bug**，影响生产环境长时间运行的 Agent，修复涉及 Supervisor 监控逻辑的结构变更，合并后应显著降低运维成本。

---

## 6. 功能请求与路线图信号

今日无新功能请求提交。

**隐含信号：**
- 两个 PR 均聚焦**稳定性而非功能扩展**，表明当前版本周期优先保障生产可用性。
- `raskevichai` 连续提交两个运行时修复，可能暗示维护团队正在清理技术债，为下一版本的功能迭代做准备。

---

## 7. 用户反馈摘要

今日无新 Issue 或评论，无法提取实时用户反馈。

**基于 PR 描述推断的用户痛点：**
- **"需全量重启才能恢复频道"** — #984 摘要中明确提及此高频痛点，说明部分用户长期承受运维负担
- **堆栈限制过于保守** — #985 将堆栈从 2 MiB 提升至 16 MiB，反映之前版本对复杂 Agent 工作负载的支持不足

---

## 8. 待处理积压

### 长期未合并 PR（今日新增）

| PR | 类型 | 创建时间 | 备注 |
|----|------|----------|------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | Bug 修复 | 2026-08-05 | 堆栈修复，建议优先审查合并 |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | Bug 修复 | 2026-08-05 | 通道稳定性修复，影响生产环境 |

### 建议关注

- 两条 PR 均无评论，审查节奏可能较慢，建议维护者尽快跟进
- 无其他长期积压 Issue（今日 Issue 更新为 0），项目整体干净

---

**项目健康度评估：** 🟡 **中等偏稳** — 低功能活跃度但修复质量高，两个 PR 均针对影响生产可用性的关键 Bug，合并后将显著提升系统健壮性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-08-06

## 1. 今日速览
过去 24 小时 IronClaw 保持高并发迭代节奏：Issues 更新 43 条（活跃 33 / 关闭 10），PR 更新 50 条（待合并 30 / 已合并或关闭 20）。项目正处于 `v1.1.0-rc.1` 候选发布后的验证与收尾阶段，核心工作围绕 Reborn 架构治理、扩展能力（MCP/IronHub）落地、渠道路由修复及 CI/E2E 稳定性加固展开。整体健康度良好，贡献者活跃度高，技术债清理与发布候选验证同步推进。

## 2. 版本发布
**`ironclaw-v1.1.0-rc.1`（2026-08-03）**
- **核心变更**：扩展能力 Reach 突破，支持注册任意托管 MCP Server、通过 IronHub 深度链接安装技能、跨渠道持久化文件附件、Slack `/ironclaw` 斜杠命令；同时对错误可观测性进行全面优化。
- **迁移注意**：从 1.0 升级至 1.1 RC 需执行无损启动迁移。#7256（已关闭）已完成该路径的验证，保留线程/转录本、定时任务、渠道绑定、OAuth、auth 状态等关键状态。
- **依赖告警**：#5598 记录了 `ironclaw_common`（0.4.2 → 0.5.0）与 `ironclaw_skills`（0.3.0 → 0.4.0）的破坏性 API 变更，升级前建议核查集成方代码。

## 3. 项目进展
今日关闭/合并的关键 PR 集中体现架构收敛与发布前置清理：
- **#7258**（已关闭）：完成 WS5/WS6/WS8/WS10 切片合并及 crate 剥离，推进 Reborn 模块化拆分收尾。
- **#7256**（已关闭）：修复 1.1 RC 启动时的 1.0 状态保留问题，阻断升级数据丢失风险。
- **#7227**（已关闭）：修复 `read_file` 读后编辑校验导致可读文本日志变只读的问题。
- **#7133**（已关闭）：为 `builtin.json` 查询操作增加有界文件读取与 JSONPath 支持。
- **#4632 / #6892 / #6394 / #7053 / #7056 / #7244**（已关闭）：连续关闭多期 Dogfooding & QA 史诗，补齐首次启动 LLM 引导、项目生命周期、自动化生命周期等 E2E 覆盖缺口。

**推进幅度**：项目已完成从 RC 验证到架构切片的阶段性收敛，E2E 与迁移路径趋于稳定，为 `v1.1.0` 正式放行扫清主要阻塞点。

## 4. 社区热点
- **#3036** [EPIC] Configuration-as-Code for IronClaw Reborn（7 条评论）：操作员对声明式租户蓝图与用例 harness 诉求强烈，期望统一 `.env`/settings/skill/install 配置口径并建立审计轨迹。
- **#7194** [OPEN] 支持将管理员允许的共享频道设为出站投递目标（3 条评论）：当前 Agent 只能向频道发消息，但无法将其注册为投递路由目标，影响企业级消息分发架构。
- **#6831** [OPEN] Standardized messaging framework（16 个核心操作 + 13 保留名 + 12 类错误 taxonomy）：核心开发者推动主机级消息契约标准化，减少各 crate 间语义摩擦。
- **#6938 / #6745** [OPEN] 技能选择权从关键词打分器移交至模型（pranavraja99）：引发架构讨论，标志着 IronClaw 从“规则驱动技能激活”向“模型自主决策”演进。

**诉求分析**：社区关注点已从功能拼凑转向**可观测性、契约化、声明式配置**三层治理，反映项目正进入企业级生产落地阶段。

## 5. Bug 与稳定性
今日 Bug 报告高度集中在集成验证与渠道路由层，按严重程度排列：
| Issue | 描述 | 状态 | 已有 Fix |
|---|---|---|---|
| #7249 | Slack DM 执行结果错误投递至 Telegram | OPEN [bug_bash_P2] | 无 |
| #7248 | 无效自定义 MCP 端点被误接受，导致模型 run 崩溃 | OPEN [bug_bash_P2] | 无 |
| #7251 | Agent 猜测 MCP 认证类型而非自动发现/发起 | OPEN [bug_bash_P2] | 无 |
| #7250 | DeepWiki MCP 对网络错误返回误导性认证提示 | OPEN [bug_bash_P2] | 无 |
| #7247 | Agent 误报 GitHub 已连接 | OPEN [bug_bash_P1] | 无 |
| #7246 | Agent 幻觉自动化运行状态 | OPEN [bug_bash_P1] | 无 |
| #6257 | PDF 附件 `attachments.mime_type` 校验失败 | OPEN [bug] | 无 |
| #7209 | CI 回归门禁无法识别 `node:assert` 风格，误杀前端 PR | OPEN [bug] | 无 |
| #7254 | 无法下载/读取 Slack 反馈线程中的附件文件 | OPEN [bug] | 无 |
| #7231 | PR Review 文本含 `APPROVE` 但未触发真实 GitHub 审批，导致合并阻塞 | OPEN [bug] | 无 |

**稳定性评估**：暂无内核级崩溃报告，但 MCP 鉴权发现、跨渠道路由、附件解析三类问题呈集群式暴露，与 RC.1 新引入的扩展能力直接相关。`#7260` 已 backport MCP egress 修复，建议跟进。

## 6. 功能请求与路线图信号
- **#3036** 配置即代码 / 租户蓝图 → 可能纳入 v1.2 声明式部署能力。
- **#6578** 管理员托管 Agent 作为 UserId 主体 → 指向多租户企业治理场景。
- **#6731** IronHub 深度集成 → v1.1.0 核心路线图，已随 RC.1 开放安装入口。
- **#7218** Web Debug Inspector（`?debug=true` 查看 Prompt/Token/工具执行）→ 增强可观测性，契合 RC 阶段反馈。
- **#7038** Storybook + AI-first 设计系统 → UI 治理长期投资，#6994 

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 | 2026-08-06

## 1. 今日速览
过去24小时项目保持高活跃节奏，共推进13条PR（12条已合并/关闭），发布 `2026.8.5` 版本，并产出3条新Issue。核心进展聚焦于网关锁竞争与窗口生命周期稳定性加固、依赖版本升级及活动体验优化。社区反馈显示NIM群名解析、OpenClaw技能开关与系统提示词注入机制存在实现缺口，需架构层面关注。整体项目健康度良好，底层稳定性与上层交互体验同步推进，技术债清理节奏平稳。

## 2. 版本发布
**LobsterAI 2026.8.5**
- **新增/变更**：原生每日签到体验上线；企业级账户作用域认证与服务流隔离；多项样式优化。
- **潜在破坏性变更**：企业版 `enterprise` 认证与服务流隔离可能改变现有自定义集成或脚本的调用路径。
- **迁移注意事项**：企业用户需复核账户级隔离后的服务路由配置，确认第三方集成或自动化流程在隔离模式下的鉴权行为是否符合预期。

## 3. 项目进展
今日共合并/关闭12条PR，主要推进以下方向：
- **稳定性加固**：[#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) 为OpenAI-compat代理与HTML预览服务器添加排空定时器与硬截止时间，解决keep-alive连接导致的应用关闭卡死；[#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) 修复OpenClaw网关单实例锁被污染的中断竞态，消除重启失败窗口。
- **交互体验**：[#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) 在协作面板标题栏新增会话搜索入口，复用侧边栏搜索工作流。
- **活动/渲染优化**：[#2438](https://github.com/netease-youdao/LobsterAI/pull/2438)、[#2439](https://github.com/netease-youdao/LobsterAI/pull/2439)、[#2433](https://github.com/netease-youdao/LobsterAI/pull/2433)、[#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) 完成启动credits活动海报替换、关闭按钮交互保留及领奖流程体验打磨。
- **依赖升级**：[#1279](https://github.com/netease-youdao/LobsterAI/pull/1279)、[#1280](https://github.com/netease-youdao/LobsterAI/pull/1280)、[#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) 完成 `cross-env`、`react-dom`、`vite` 核心依赖版本跃迁。

项目整体在底层健壮性与上层交互可发现性上同步迈进一步。

## 4. 社区热点
- [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) [stale] NIM超大群 `teamTypeNum` 硬编码错误导致群名回退为原始ID，关联修复PR [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)。诉求明确：SDK枚举映射需与代码注释一致，影响企业协作群@机器人场景。
- [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) & [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) 均由作者 `fujingzhai` 提交，指出OpenClaw技能开关命名不一致静默失效，以及桌面端系统提示词重复注入问题。反映出高阶用户对配置可预测性与上下文整洁度的强诉求。

## 5. Bug 与稳定性
按严重程度与影响范围排列：
1. **[Medium] [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)**：NIM超大群群名解析错误。已有单行修复PR提交，待合并。
2.

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



# CoPaw 项目动态日报 — 2026-08-06

---

## 1. 今日速览

CoPaw 项目今日活跃度保持高位：24 小时内新增 23 条 Issue、50 条 PR，其中 6 条 Issue 关闭、21 条 PR 合并/关闭。开发重心集中在**稳定性修复**与**通道层健壮性提升**——DeepSeek reasoning_content 透传修复、SSE 错误重试逻辑、WeChat 审批交互、Windows 集成测试覆盖等关键问题均有实质性进展。无新版本发布，整体项目健康度良好，社区贡献者活跃度显著。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 内容 | 影响 |
|---|---|---|
| [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) | 强制 DeepSeek 模型透传 `reasoning_content` | 修复多轮对话中因 scroll context 压缩导致 thinking 模式请求被上游拒绝的严重问题（关联 #6667、#6541） |
| [#6713](https://github.com/agentscope-ai/QwenPaw/pull/6713) | 敏感目录排除的审计可见性 | 提升安全策略透明度 |
| [#6718](https://github.com/agentscope-ai/QwenPaw/pull/6718) | 统一应用市场列表展示 | Console UI 体验优化 |
| [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) | 按智能体/全局 LLM 模型降级策略（后端） | 配合 UI 层 PR #5598，实现模型故障时自动切换备用模型 |
| [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) | LLM 降级配置 UI | 用户在 Models 设置页可直接配置 per-agent 或全局 fallback 候选列表 |
| [#5447](https://github.com/agentscope-ai/QwenPaw/pull/5447) | Console 通道错误时 yield 失败 AgentResponse | 修复模型/运行时错误导致 UI 永久等待不响应的问题 |
| [#5462](https://github.com/agentscope-ai/QwenPaw/pull/5462) | 全局响应式工具类 | 为移动端适配提供统一 `@media` 模式，减少重复代码 |

**整体评估：** 今日合并的 PR 覆盖了**模型层容错**（降级+reasoning 修复）、**UI 层韧性**（错误状态处理）、**测试覆盖**（Windows 平台 66 个被静默跳过的用例现已解锁）三大方向，是近期质量提升最集中的一天。

---

## 4. 社区热点

| Issue/PR | 类型 | 活跃度 | 核心诉求 |
|---|---|---|---|
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | Feature | 4 评论 | 自建 Matrix 频道需要重试/健康检测机制，当前服务波动后必须手动重保存 |
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | Enhancement | 3 评论 | 按消息类型自动路由模型（简单对话→轻量模型、图片→视觉模型、复杂推理→大模型） |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | Question | 2 评论 | `nohup`/后台 shell 进程导致 agent 永久卡住，用户希望支持进程脱钩 |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | Bug | 已关闭 | 超大工具输出（数 MB 级）导致历史会话加载卡死，建议增加截断+分页 |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | Bug | 2 评论 | WeChat iLink 单次 `context_token` 被 typing indicator 消费，导致回复被拒（ret=-2） |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | Bug | 1 评论 | 长时间 console 会话累积 20-30+ tool_call/tool_result 对后报 400 错误 |
| [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) | Feature PR | 进行中 | 持久化工具产物卡片（WorkBuddy 风格），已在 PR 中实现 |

**热点分析：** 用户最强烈的诉求集中在**通道层可靠性**（Matrix 重试、WeChat token 竞争）和**长会话稳定性**（工具输出截断、tool_call 累积错误）。自动模型路由（#6436）代表了进阶用户对成本/性能平衡的深层需求。

---

## 5. Bug 与稳定性

### 🔴 严重

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 桌面版注入 `PYTHONHOME` 导致所有 Python 子进程崩溃（`ModuleNotFoundError: encodings`） | 尚无 |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 Browser SDK 每次 `open()` 均报 `WireProtocolError: Target crashed`（isolated Playwright session） | 尚无 |
| [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | 含 tool calls 的会话历史配合 thinking-mode 上游时，`reasoning_content` relay 失败报 400 | [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) 已提交 fix |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | 长时间 console 会话中大量 tool_call/tool_result 累积后触发 400 `role 'tool' must be response to 'tool_calls'` | 尚无 |

### 🟡 中等

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink `context_token` 被 typing indicator 提前消费 | 尚无 |
| [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | 上游网关在 SSE 流内报告 503 错误时不触发重试直接失败 | [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) 已提交 fix |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测用 false 覆盖已记录的影像能力 | 尚无 |
| [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | 后台 fork subagent 在 worktree 最终化失败时错误报告 completed | [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) 已提交 fix |
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | `cron pause/resume` 状态未持久化，重启后丢失 | 已关闭（预期修复中） |

### 🟢 已关闭

- [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) 超大工具输出导致会话卡死 — 已关闭（建议纳入 backlog）
- [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) WeChat 通道审批提示不可达 — 已关闭
- [#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413) UI"完整模式"命名困惑 — 已关闭
- [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) 智能体级 token 统计 — 已关闭

---

## 6. 功能请求与路线图信号

| 请求 | Issue/PR | 纳入下一版本可能性 |
|---|---|---|
| **通道重试机制**（Matrix 等自建频道） | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | ⭐⭐⭐ 高 — 与 #6714（SSE 重试）属于同类健壮性需求 |
| **按消息类型自动路由模型** | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | ⭐⭐ 中 — 架构改动较大，需评估与已有 fallback 机制（#5597）的关系 |
| **Live Artifact Canvas**（侧边栏渲染 Agent 生成的 HTML） | [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) | ⭐⭐⭐ 高 — PR #6719 已实现 workspace artifact cards，Canvas 是其自然扩展 |
| **MCP 工具调用可配置超时** | [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | ⭐⭐⭐ 高 — 单一 PR 可解决，与 #6721（reasoning retry）同为底层稳定性增强 |
| **按需加载技能**（On-Demand Skill Loading） | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | ⭐⭐⭐ 高 — 27+ 技能用户已产生 8000-10000 token 系统提示开销，痛点明确 |
| **WeChat 审批中文标签** | [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | ⭐⭐ 中 — #6695 修复后自然延伸的本地化需求 |
| **智能体级 Token 统计** | [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | ⭐ 低 — 已关闭，可能作为插件开放 |

---

## 7. 用户反馈摘要

**核心痛点：**
1. **通道可靠性不足** — 自建 Matrix 频道服务波动后无自动恢复机制（#6684），WeChat token 竞争导致回复被拒（#6696），SSE 流内 503 不触发重试（#6708）
2. **长会话稳定性** — 大量 tool_call 累积后 API 报错（#6726）、超大工具输出撑爆会话上下文（#6700）
3. **v2.1.0b1 桌面版引入回归** — Python 子进程崩溃（#6697）、Playwright 浏览器会话持续失败（#6698），影响 Windows 用户体验
4. **系统提示膨胀** — 多技能场景下技能描述占用 25-30% system prompt 空间（#6699）
5. **Thinking 模式兼容** — DeepSeek 等 reasoning 模型要求每轮透传 `reasoning_content`，context 压缩后丢失导致 400（#6707，#6667）

**正面反馈：**
- LLM 降级机制 UI（#5598）和后端（#5597）的完整实现获得认可
- Console 通道错误后 UI 不再永久卡死（#5447）
- Windows 集成测试 66 个被静默跳过用例现已暴露并修复（#6727）

---

## 8. 待处理积压

| Issue/PR | 状态 | 建议优先级 |
|---|---|---|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) v2.1.0b1 PYTHONHOME 崩溃 | OPEN，无 PR | 🔴 P0 — 阻塞 Windows 桌面用户 |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) Browser SDK 持续崩溃 | OPEN，无 PR | 🔴 P0 — 同上 |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) 长会话 tool_call 累积 400 错误 | OPEN，无 PR | 🟡 P1 — 影响重度工具用户 |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) WeChat context_token 竞争 | OPEN，无 PR | 🟡 P1 — WeChat 用户直接受阻 |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) OpenRouter 多模态能力覆盖 | OPEN，无 PR | 🟢 P2 |
| [#6716](https://github.com/agentscope-ai/QwenPaw/issues/6716) 集成测试 `KeyError: auto_update_targets` | 已关闭但提示 nightly 持续失败 | 🟡 P1 — 需跟进 CI 稳定性 |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) Provider 发现与路由统一 | OPEN，较早期 PR | ⏳ 需维护者 review |

---

**项目健康度评分：B+** — 日活 Issue/PR 数量充足，社区贡献活跃，但 v2.1.0b1 桌面版两个 P0 级回归需尽快修复，长会话稳定性是下一阶段重点方向。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-08-06

---

## 1. 今日速览

过去 24 小时内 ZeroClaw 保持高活跃度：共 100 条更新（50 Issues + 50 PRs），其中新开/活跃 Issue 39 条、关闭 11 条；PR 中待合并 49 条、已合并仅 1 条。安全与可观测性议题占据今日讨论重心，多项 RFC 进入修订后期，同时出现数条 S1 级阻塞性 Bug。今日无新版本发布，但 v0.8.5 稳定线已进入冻结期（8 月 4 日 intake freeze），v0.9.0 安全与认证重构持续推进。

---

## 2. 版本发布

**无新版本发布。**

v0.8.5 稳定线 tracker (#9459) 已冻结 intake（截至 8 月 4 日），目标 8 月 30 日完成收尾；v0.9.0 安全/认证里程碑的 RFC 队列仍在维护者决策中（#8692、#7432）。

---

## 3. 项目进展

今日已合并/关闭的 PR 仅 **1 条**：

| PR | 作者 | 内容 |
|---|---|---|
| [#9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) — `fix(service): bound launcher-owned daemon logs` | Audacity88 | 将 launcher 拥有的 daemon 日志替换为共享服务监管器，单文件上限 8 MiB，解决日志无限增长问题 |

其余 49 条 PR 均处于待合并状态，涵盖以下方向：

- **安全加固**：#9737（强制执行 agent pipeline 策略）、#9678（Git shell 参数硬化）、#9428（Bluesky/Reddit 发送者授权）、#8826（image_gen SSRF 防护）
- **WASM 插件稳定性**：#9403（导出调用超时上限 30s）
- **基础设施/CI**：#9717（release attestation 简化）、#9755（no-default-features 检查覆盖）、#9741（all-features 镜像校验）
- **Provider 增强**：#9420（Anthropic OAuth stored profiles）、#9109（Hailo-Ollama 原生支持）、#9722（Telegram per-user session）
- **开发体验**：#8928（Doctor 诊断日志路径）、#9223（JUnit XML 测试报告）
- **网关**：#9701（WebSocket keepalive ping）

> **进度评估**：PR 积压 49 条待合并，维护者侧吞吐偏低，但安全相关 PR 集中度较高，反映出 v0.8.x 稳定线前的安全加固冲刺态势。

---

## 4. 社区热点

### 讨论最活跃的 Issue（按评论数）

| # | 标题 | 评论 | 标签 | 链接 |
|---|---|---|---|---|
| #8303 | RFC: Goal mode v1 — bounded foreground Matrix work | 17 | p2, RFC, high-risk | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| #8603 | RFC: ZeroClaw Chat Completions profile | 16 | p2, RFC, high-risk | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| #7155 | RFC: Per-execution confirmation tier for high-risk shell commands | 16 | p1, RFC, high-risk | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| #7141 | RFC: Pluggable inbound authentication and canonical principals | 12 | p1, RFC, high-risk | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| #8692 | Tracker: Maintainer decision queue for RFCs and design issues | 10 | p2, tracker | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #9487 | RFC: Runtime-owned conversation sessions and transport surface adapters | 10 | p2, RFC, high-risk | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| #8424 | RFC: Workspace-relative forbidden path patterns + .zeroclawignore | 9 | p2, RFC, high-risk | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| #6954 | RFC: Provenance, conversation binding for internally initiated turns | 8 | p2, RFC, high-risk | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) |

**热点分析**：
- **Goal mode (#8303)** 和 **Chat Completions profile (#8603)** 评论最多，反映社区对"Agent 跨轮次目标持久化"和"OpenAI 协议兼容性"的高度关注——前者是 Agent 能力边界的核心问题，后者直接决定 ZeroClaw 能否接入 Open WebUI、Continue.dev 等主流客户端。
- **Shell 命令确认分级 (#7155)** 和 **可插拔认证 (#7141)** 均为 p1 级 RFC，已进入修订后期，是 v0.9.0 安全加固的关键组件。
- **RFC 决策队列 tracker (#8692)** 评论数较高但内容偏向协调性质，说明维护者正在有意识地管理 RFC 审查节奏。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 状态 | Fix PR | 链接 |
|---|---|---|---|---|---|
| **S1** | #9775 | OpenRouter streaming 请求丢失 `provider_extra` | OPEN | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) |
| **S1** | #9774 | Signal channel 静默丢弃仅含 `sourceUuid` 的发送者 | OPEN | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) |
| **S2** | #9768 | daemon reload 未绑定 SIGUSR1，降级安全警告误导操作者 | OPEN | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) |
| **S2** | #6350 | WhatsApp Web LID 联系人绕过 allowed-numbers 限制 | CLOSED (in-progress) | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) |
| **S3** | #9697 | ZeroCode 无法连接 Task Scheduler 启动的 daemon | OPEN | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) |
| **S2** | #9328 | verifiable-intent 未验证凭证链即评估约束 | CLOSED (accepted) | #9432 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) |
| **S3** | #9652 | config set 拒绝含连字符的 cron 别名，但 list/get 可读取 | CLOSED | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) |
| — | #8642 | MCP/tool-schema 克隆导致 agent loop RSS 无界增长 | OPEN (in-progress) | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| — | #9462 | plugins-wasmtime feature 下单元测试在 CI 中不执行 | CLOSED | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) |

**重点关注**：
- **#9775 和 #9774** 均为今日新报的 S1 级阻塞性 Bug，前者影响 OpenRouter 用户的工作流，后者影响 Signal 渠道的可用性，均**暂无 Fix PR**。
- **#9328**（vi_verify 凭证链验证缺失）已 accept 并由 [#9432](https://github.com/zeroclaw-labs/zeroclaw/issues/9432) 跟进（已关闭，建议停止注册 vi_verify 工具直至链验证器就绪）。
- **#8642** MCP 内存泄漏问题仍在进行中，与 WSL2 OOM 根因相关，需持续关注。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容摘要 | 纳入下一版本可能性 |
|---|---|---|---|
| #8603 (RFC) / 关联 PR | 新功能 | OpenAI Chat Completions profile，打通 Open WebUI、LobeChat、Continue.dev 等客户端 | **高** — p2 但社区需求强烈，与 v0.9.0 集成目标一致 |
| #8303 (RFC) | 新功能 | Goal mode v1，跨轮次有界目标追踪 | **中高** — 架构级 RFC，可能跨版本推进 |
| #9631 | 功能请求 | 向 OpenRouter 传递稳定 `session_id` 以启用 prompt cache 节省成本 | **高** — 成本优化明确，实现难度低，已有具体方案 |
| #9727 (Epic) | 新功能 | zerocode sidebar 多 Agent 并行运行与监控 | **中** — Epic 级功能，#9728 子任务已 accept，可能需要独立版本 |
| #9109 (PR) | 新功能 | Hailo-Ollama 原生 provider 支持 | **中高** — PR 已提交，特色 provider 扩展 |
| #7431 | 功能请求 | 预轮次工具 elicitation hints，自然语言路由 | **中** — accepted 状态，Lightweight 方案 |
| #9772 (PR) | 新功能 | Telegram 群聊 per-user session 开关 | **高** — PR 已提交，解决多用户协作痛点 |
| #7467 (CLOSED) | 增强 | zerocode 字符串编辑光标导航 | **已关闭** — 未被采纳或已完成 |
| #9716 | 功能请求 | Provider 错误结构化本地化边界 | **中** — 改善 UX 的工程性需求 |

---

## 7. 用户反馈摘要

**主要痛点**：
1. **成本敏感**：#9631 明确指出 OpenRouter 场景下因缺少稳定 `session_id` 导致 prompt cache 无法命中，单会话产生大量冗余 LLM 调用，用户直接反映"unnecessarily expensive"。
2. **渠道可用性**：#9774（Signal）和 #6350（WhatsApp）均报告消息静默丢失问题，用户无法感知失败原因，属于严重体验缺陷。
3. **多 Agent 协作**：#9727 反映 zerocode 当前"一窗一世"模型无法满足多 Agent 并行监控需求，用户需要 side-by-side 对比和跳转能力。
4. **安全误操作风险**：#9768 指出 daemon reload 信号与文档/警告不一致，可能导致操作者误发 SIGUSR1 导致进程退出而非重载，属于安全隐患。
5. **内存泄漏**：#8642 的 MCP tool-schema 克隆无界增长在 WSL2 环境下触发 OOM，影响生产稳定性。

**积极反馈信号**：
- #8928（Doctor 显示日志路径）被标记为 `distinguished contributor`，反映可观测性改进获得认可。
- #9420（Anthropic OAuth stored profiles）由核心贡献者 `vrurg` 提交，扩展了认证灵活性。
- CI/基础设施类 PR（#9717、#9755、#9741）密集提交，表明项目工程纪律在加强。

---

## 8. 待处理积压

| 类型 | Issue/PR | 创建时间 | 未响应时长 | 说明 | 链接 |
|---|---|---|---|---|---|
| **Bug (S1)** | #9775 | 2026-08-05 | ~1 天 | OpenRouter streaming 丢失 provider_extra，无 Fix PR | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) |
| **Bug (S1)** | #9774 | 2026-08-05 | ~1 天 | Signal channel 静默丢消息，无 Fix PR | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) |
| **Bug (S2)** | #9768 | 2026-08-05 | ~1 天 | daemon reload 信号不匹配，无 Fix PR | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) |
| **Bug (进行中)** | #8642 | 2026-07-03 | ~34 天 | MCP 内存泄漏，仍在 in-progress | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| **RFC (待决策)** | #8303 | 2026-06-24 | ~43 天 | Goal mode v1，需 maintainer review | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| **RFC (待决策)** | #8603 | 2026-07-02 | ~35 天 | Chat Completions profile，需 maintainer review | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| **PR (待合并)** | #9737 | 2026-08-04 | ~2 天 | 强制执行 agent pipeline 策略（p1 安全），需 author action | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9737) |
| **PR (待合并)** | #9678 | 2026-08-02 | ~4 天 | Git shell 参数硬化（p1 安全），需 author action | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9678) |

> **维护者提醒**：两项 S1 级 Bug（#9775、#9774）今日新报且暂无修复进展，建议优先分配资源。同时 #8642 内存泄漏已持续 34 天，与 WSL2 OOM 问题直接相关，需加速闭环。PR #9737 和 #9678 均为 p1 安全修复且标记 `needs-author-action`，建议跟进作者回复以推进合并。

---

*报告生成时间：2026-08-06 | 数据来源：ZeroClaw GitHub API*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*