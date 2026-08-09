# OpenClaw 生态日报 2026-08-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-07 02:06 UTC

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



# OpenClaw 项目日报 | 2026-08-07

## 1. 今日速览
过去 24 小时 OpenClaw 保持极高活跃度，共流转 Issues 500 条（新增/活跃 432，已关闭 68）、PR 500 条（待合并 400，已合并/关闭 100）。核心开发重心集中在**诊断工具链修复、跨运行时执行溯源重构、以及多通道消息投递稳定性**上。项目整体健康度显示为“高负载运转中”：社区反馈高度集中于 LLM 路由可靠性、会话状态准确性与内存压缩阈值管理，生产环境稳定性是当前首要瓶颈。维护者响应节奏稳健，但 P0/P1 级回归问题密集，需优先收敛。

---

## 2. 版本发布
今日无新版本发布。当前代码库仍处于 `2026.7.x` 系列迭代周期，主要精力用于修复 beta/稳定版中暴露的会话状态与通道投递问题。

---

## 3. 项目进展
今日合并/关闭的重要 PR 共 100 条，核心推进方向如下：

| PR | 类型 | 进展说明 |
|----|------|----------|
| [#119896](https://github.com/openclaw/openclaw/pull/119896) | 修复 | `doctor --fix` 恢复终端 NUL 截断的 JSONL 归档解析，消除误报的无限警告循环 |
| [#116793](https://github.com/openclaw/openclaw/pull/116793) / [#116794](https://github.com/openclaw/opencl

---

## 横向生态对比



# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**日期：2026-08-07**

---

## 1. 生态全景

2026年8月，开源 AI 智能体生态呈现"头部活跃、梯队分化"的格局：IronClaw v1.1.0 正式发布标志着生产级稳定版本落地，ZeroClaw 和 NanoClaw 在可观测性与调度可靠性方向密集迭代，CoPaw（QwenPaw）聚焦长会话稳定与 MCP 工具链质量。同时，多个小型项目（NullClaw、TinyClaw、Moltis、ZeptoClaw）处于停滞状态，社区资源正向头部项目集中。整体生态从"功能铺陈"阶段迈入"稳定性与安全性"巩固期。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PR | Release | 健康度评估 |
|------|--------|-----|---------|-----------|
| **OpenClaw** | 500（新增/活跃 432，关闭 68） | 500（待合并 400，合并/关闭 100） | 无 | 🔴 高负载运转，P0/P1 回归密集 |
| **NanoBot** | 10 | 17 | 无 | 🟢 良好，安全修复加速 |
| **PicoClaw** | 0 | 2（合并 1，待合并 1） | 无 | 🟡 中等，社区互动待提升 |
| **NanoClaw** | 2 | 14（合并 8） | 无 | 🟢 活跃修复中，维护者响应快 |
| **IronClaw** | 50（新开/活跃 27，关闭 23） | 50（待合并 33，合并/关闭 17） | v1.1.0 ✅ | 🟢 良好，QA 推动闭环 |
| **CoPaw** | 34（新开/活跃 17，关闭 17） | 50（待合并 20，合并/关闭 30） | 无 | 🟢 良好，社区贡献活跃 |
| **LobsterAI** | 5 | 2（均 stale） | 无 | 🟡 6.5/10，维护响应偏低 |
| **ZeroClaw** | 22 | 45 | 无 | 🟢 良好，稳定化窗口期 |
| **NullClaw** | — | — | — | ⚪ 无活动 |
| **TinyClaw** | — | — | — | ⚪ 无活动 |
| **Moltis** | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势**：OpenClaw 以 500 条 Issue/PR 的绝对规模领跑生态，社区反馈高度集中于 LLM 路由可靠性、会话状态准确性与内存压缩阈值管理，表明其用户群以**生产环境部署者**为主，对系统稳定性要求严苛。

**技术路线差异**：OpenClaw 聚焦**诊断工具链修复**（`doctor --fix`）、**跨运行时执行溯源重构**与**多通道消息投递稳定性**，区别于 NanoClaw 的技能清理路线、IronClaw 的 MCP 注册扩展路线、ZeroClaw 的 SOP 工具链治理路线。

**社区规模对比**：OpenClaw 的 Issue/PR 数量约为第二梯队（IronClaw、CoPaw、ZeroClaw）的 10-20 倍，呈现"一超多强"格局；其余项目活跃度呈长尾分布。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **通道/消息可靠性** | OpenClaw、NanoClaw、IronClaw、CoPaw | 多通道消息投递稳定性（OpenClaw）、Telegram 通道修复（NanoClaw #2213/#2643/#2644）、Slack 通知与断连问题（IronClaw #5553/#5834）、Matrix 频道稳定性（CoPaw #6684） |
| **会话状态与生命周期** | NanoBot、CoPaw、ZeroClaw | 临时会话隔离（NanoBot #5259）、长会话空响应静默失效（CoPaw #6601）、跨天会话时间感知（CoPaw #6755）、SOP 运行状态不一致（ZeroClaw #9784） |
| **工具/MCP 稳定性** | NanoClaw、CoPaw、IronClaw | MCP 工具间歇性失效需重启（CoPaw #6732）、调度器失败后重排（NanoClaw #2678）、MCP 扩展注册私有化（IronClaw #7253） |
| **可观测性与调试** | NanoBot、IronClaw、ZeroClaw | Token 消耗逐调用日志（NanoBot #5266）、Inspector 诊断面板（IronClaw #7236/#7277/#7239）、SOP 审计事件缺失（ZeroClaw #9784） |
| **安全与凭证隔离** | NanoBot、ZeroClaw | API 密钥泄露修复（NanoBot #5270/#5269）、pipeline 工具策略绕过（ZeroClaw #7947/#9737）、verifiable-intent 凭证链验证（ZeroClaw #9328） |
| **模型路由与容错** | OpenClaw、PicoClaw、CoPaw | LLM 路由可靠性（OpenClaw）、模型默认回退链配置（PicoClaw #3200）、模型故障自动降级+冷却（CoPaw #6659） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | 诊断工具链、跨运行时执行溯源、多通道投递 | 生产环境部署者、运维团队 | 强调可观测性与路由可靠性，内存压缩阈值管理 |
| **IronClaw** | MCP 扩展注册、IronHub 安装、Inspector 诊断面板 | 企业级自动化用户 | v1.1.0 正式版，架构向"可观测性+稳定性"演进 |
| **ZeroClaw** | SOP 工具链、A2A 协议、网关架构治理 | 多 Agent 协作场景研究者 | RFC 治理流程驱动，SOP 子系统快速迭代中 |
| **NanoClaw** | 调度可靠性、Telegram 通道质量、技能系统清理 | 多通道消息交互用户 | 维护者主导修复，事务性升级（#3195）为关键改进 |
| **CoPaw** | Memory 子系统、Embedding 配置、长会话稳定性 | 中文用户、多轮对话场景 | agentscope 生态集成，Scroll 上下文协议收敛 |
| **NanoBot** | WebUI 体验、临时会话、Token 可观测性 | 个人用户、轻量级部署者 | 强调安全性加固（API 密钥隔离）、WebUI 交互优化 |
| **PicoClaw** | QQ Channel 集成、模型回退链配置 | 国内 QQ 生态用户 | 社区贡献驱动，PR 积压较长（#3200 37 天） |
| **LobsterAI** | Agent 管理页面、per-model 配置 | 中文用户 | 维护响应偏低，stale PR 积压严重 |

---

## 6. 社区热度与成熟度分层

| 阶段 | 项目 | 特征 |
|------|------|------|
| **快速迭代期** | ZeroClaw、NanoClaw、CoPaw | 高频 PR 合入，RFC 治理推进，新功能密集落地 |
| **质量巩固期** | IronClaw、OpenClaw、NanoBot | v1.1.0/v0.8.5 稳定化窗口，P0/P1 回归修复密集，可观测性建设 |
| **维持/停滞期** | PicoClaw、LobsterAI | 低 Issue/PR 量，stale 积压，维护响应不足 |
| **沉寂期** | NullClaw、TinyClaw、Moltis、ZeptoClaw | 过去 24 小时无活动，生态边缘化 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **SOP 工具链可观测性成为痛点** | ZeroClaw 6 条 P1 SOP Bug 集中爆发（静默失败、审计缺失） | 生产级 Agent 系统需重视配置校验与错误诊断，避免"静默失败" |
| **MCP 工具稳定性影响生产可用性** | CoPaw #6732（MCP 规律性失效）、IronClaw MCP 扩展注册 | MCP 集成需配套超时、重试、状态清理机制，建议参考 CoPaw #6724 PR |
| **长会话可靠性是共性瓶颈** | OpenClaw 会话状态准确性、CoPaw #6601 空响应静默失效、NanoClaw 调度器失败重排 | 需建立会话健康检测与降级机制，避免"静默死亡" |
| **安全修复节奏加快** | NanoBot 连续 2 条 P1 API 密钥泄露修复、ZeroClaw pipeline 工具门控绕过 | 凭证隔离、最小权限原则应纳入架构设计早期 |
| **治理流程 RFC 化** | ZeroClaw 多条 RFC 接受/推进（#6808、#9106、#9328） | 大型项目需建立透明治理机制，社区贡献者可参与 RFC 流程 |
| **诊断工具链成为差异化能力** | OpenClaw `doctor --fix`、IronClaw Inspector 面板 | 可观测性是生产级 Agent 的核心竞争力，建议优先建设 |
| **模型容错机制受重视** | PicoClaw 模型回退链（#3200）、CoPaw 模型降级+冷却（#6659） | 多模型场景下自动降级与冷却机制是提升可用性的关键 |

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 — 2026-08-07

## 1. 今日速览

过去24小时 NanoBot 项目保持中高频活跃，共处理 27 条活动（10 Issues + 17 PRs），无新版本发布。今日开发重心明显偏向 **安全性加固**（2条 P1 级 API 密钥泄露修复 PR 合并）和 **WebUI 体验优化**（临时聊天模式、响应式布局、拖拽排序等功能推进）。社区对会话隔离、Token 消耗可观测性等问题关注度高，但部分长期 Bug（如 #4290 cronjob 问题）仍待解决。项目整体健康度良好，安全修复节奏加快。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 类型 | 作者 | 说明 |
|---|---|---|---|
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | Bug Fix (P2) | @orrinwitt | 修复 Matrix 频道在 Continuwuity 服务器上无法自动加入房间的问题（空 POST body 导致 `M_BAD_JSON`） |
| [#5261](https://github.com/HKUDS/nanobot/pull/5261) | 功能 | @Re-bin | WebUI 侧边栏支持拖拽排序会话（Codex 风格插入线） |
| [#5267](https://github.com/HKUDS/nanobot/pull/5267) | Bug Fix (P2) | @chengyongru | 优化 WebUI 交互动画，对齐 220ms 过渡时长，支持 reduced motion  |
| [#5259](https://github.com/HKUDS/nanobot/pull/5259) | Bug Fix (P2) | @chengyongru | 强制临时会话仅保留在内存，不写入 session history 或自动记忆 |
| [#5262](https://github.com/HKUDS/nanobot/pull/5262) | 性能 (P1) | @chengyongru | 减少 WebUI 冷启动负载，为可压缩资产生成 gzip 预压缩副本，分离 React 运行时 chunk |

### 关键功能推进

- **临时聊天模式** [#5252](https://github.com/HKUDS/nanobot/pull/5252) — 新增临时会话入口，支持多会话切换，不持久化到历史，适合一次性问答场景。
- **mst-python 元搜索引擎集成** [#5234](https://github.com/HKUDS/nanobot/pull/5234) — 新增 MST provider，聚合 DuckDuckGo/Google/Brave/Bing 结果并用 RRF 融合，搜索覆盖度显著提升。
- **共享交互式终端** [#5253](https://github.com/HKUDS/nanobot/pull/5253) — WebUI 新增项目级共享 PTY 面板，支持 xterm.js 交互、重连、自动打开。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**#5198** — [无法在会话内切换模型](https://github.com/HKUDS/nanobot/issues/5198)（创建 2026-07-31，最近更新 2026-08-07，3 条评论）
> 用户反馈 Nanobot 始终以首选模型运行，额外模型仅作 fallback，无法像 SaaS AI 那样在会话内切换模型。该问题与现有 PR #5277（响应式模型预设面板）形成呼应，社区对模型切换灵活性需求强烈。

**#5278** — [会话历史不应存放在 agent 工作区内](https://github.com/HKUDS/nanobot/issues/5278)（创建 2026-08-07，0 评论）
> 指出 PR #713 将会话存储从全局 `~/.nanobot/sessions/` 移至 `<workspace>/sessions/` 后存在安全隐患，多用户场景下会话历史可能被其他会话访问。此 Issue 与 #5276（会话级文件隔离）形成关联讨论。

**#5266** — [Token 消耗日志需求](https://github.com/HKUDS/nanobot/issues/5266)（创建 2026-08-06，0 评论）
> 用户报告 Nanobot 在 2 小时内消耗百万级 Token 且无明显活动，请求逐调用记录 Token 消耗以便追踪。此为成本控制场景下的真实痛点，有望推动可观测性功能。

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 问题描述 | 修复状态 |
|---|---|---|---|
| **P0** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务保存导致会话数据被覆盖（用户 `/new` 后旧后台任务写入脏数据） | ✅ PR #5271 已提交，待合并 |
| **P1** | [#5270](https://github.com/HKUDS/nanobot/pull/5270) | CLI 子进程泄露 API 密钥（`env=os.environ.copy()` 导致凭证外泄） | ✅ PR #5270 已提交，待合并 |
| **P1** | [#5269](https://github.com/HKUDS/nanobot/pull/5269) | Provider 将 API 密钥写入进程全局 `os.environ`，多 Provider 场景下凭证被覆盖或泄露 | ✅ PR #5269 已提交，待合并 |
| **P2** | [#5273](https://github.com/HKUDS/nanobot/pull/5273) | Session 保留截断逻辑丢弃主动推送的 channel delivery 消息 | ✅ PR #5272 已提交，待合并 |
| **P2** | [#5264](https://github.com/HKUDS/nanobot/pull/5264) | `/api/sessions/{key}/messages` 不返回 media root 外的文件 media_urls | ✅ PR #5268 已提交，待合并 |
| **P2** | [#5265](https://github.com/HKUDS/nanobot/pull/5265) | 工具参数接受 `NaN`/`Infinity` 导致后续处理异常 | ✅ PR #5265 已提交，待合并 |
| **未分级** | [#4290](https://github.com/HKUDS/nanobot/issues/4290) | cronjob 在子代理完成后提前结束，主代理无法处理子代理结果 | ⚠️ 无修复 PR，长期未解决 |
| **未分级** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 无法在会话内切换模型 | ⚠️ 无修复 PR |

> **安全专项**：今日连续出现 2 条 P1 级 API 密钥泄露修复（#5270、#5269），建议维护者优先合并以消除供应链风险。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 评估 |
|---|---|---|
| 会话级临时文件隔离 | [#5276](https://github.com/HKUDS/nanobot/issues/5276) | 与 #5278 安全诉求相关，可能纳入隔离增强版本 |
| 会话历史独立存储（不在工作区） | [#5278](https://github.com/HKUDS/nanobot/issues/5278) | 安全导向，与 PR #5276 可能联动 |
| Token 消耗可观测日志 | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | 成本治理需求，暂无 PR，可考虑 roadmap 优先级 |
| Matrix reply 语义对齐 | [#5274](https://github.com/HKUDS/nanobot/issues/5274) / [#5275](https://github.com/HKUDS/nanobot/issues/5275) | 渠道体验改进，暂无 PR，待社区贡献 |
| 临时聊天模式 | [#5252](https://github.com/HKUDS/nanobot/pull/5252) | ✅ 功能已完成，即将合并 |
| mst-python 元搜索 | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | ✅ 功能已完成，即将合并 |

---

## 7. 用户反馈摘要

**痛点：**
- **模型切换不灵活**（#5198）：用户期望像 ChatGPT/Claude 等 SaaS 产品一样在会话内即时切换模型，当前行为不符合预期。
- **Token 消耗黑盒**（#5266）：用户无法定位高额 Token 消耗的根源，影响成本控制和调试效率。
- **会话数据安全**（#5278）：多用户共享 workspace 时，会话历史暴露于其他会话可访问目录，存在隐私风险。
- **主动消息丢失**（#5273）：session retention 截断时会误删 cron 通知等背景消息，影响用户体验连续性。

**正面反馈：**
- WebUI 交互优化（拖拽排序、动画调优）获得积极评价（#5261、#5267）。
- 安全修复（API 密钥隔离）得到社区认可（#5270、#5269）。

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 建议 |
|---|---|---|---|---|
| [#4290](https://github.com/HKUDS/nanobot/issues/4290) | Bug（长期） | 2026-06-10 | 无 PR | 优先修复，影响 cronjob + subagent 工作流稳定性 |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Bug/功能 | 2026-07-31 | 无 PR，3 评论 | 社区呼声高，建议纳入后续版本规划 |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | 功能请求 | 2026-08-06 | 无 PR | 与成本控制相关，可考虑为独立功能模块 |
| [#5274](https://github.com/HKUDS/nanobot/issues/5274) | 渠道体验 | 2026-08-06 | 无 PR | Matrix 用户反馈，建议跟进 |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) | 渠道体验 | 2026-08-06 | 无 PR | 与 #5274 相关，建议合并处理 |

---

**报告生成时间**：2026-08-07  
**数据来源**：[HKUDS/nanobot GitHub](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报
**日期：2026-08-07** | 数据来源：GitHub API

---

## 1. 今日速览

PicoClaw 昨日整体活跃度**中等偏低**，无 Issues 更新，无新版本发布。过去24小时完成 1 个 PR 合并（#1349）、1 个 PR 仍处于待合并状态（#3200），项目持续迭代中。主要进展集中在 **QQ Channel 消息处理能力增强** 与 **模型回退链配置功能** 两个方向，社区参与度平稳。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**已合并/关闭 PR：**

- **#1349** - [feat(qq): support parsing and replying to more attachment types](https://github.com/sipeed/picoclaw/pull/1349)
  - 作者：aishannon | 合并时间：2026-08-06
  - **功能推进**：显著扩展了 QQ Channel 的消息处理能力，新增对语音、图片、视频、文件类附件的解析与回复支持，并优先采用 Markdown 格式进行回复，降级兼容方案也已覆盖。
  - **项目意义**：完善了多平台消息协议的覆盖度，增强了 PicoClaw 在 QQ 生态中的兼容性与用户体验，属于频道集成功能的重要补强。

---

## 4. 社区热点

**今日无活跃 Issues 讨论。**

**关注 PR：**

- **#3200** - [feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)
  - 作者：lc6464 | 状态：**OPEN** | 创建：2026-07-01
  - **诉求分析**：用户期望在 Web UI 中可配置模型默认回退链，并持久化至后端 API。该功能满足多模型场景下的容错需求，允许用户按优先级设置主模型与备用模型，提升服务可用性。目前 PR 已开放约 37 天，等待审查与合并。

---

## 5. Bug 与稳定性

今日无新增 Bug 报告或崩溃反馈。

---

## 6. 功能请求与路线图信号

| 需求方向 | 状态 | 链接 |
|---------|------|------|
| 模型默认回退链配置（多模型容错） | PR #3200 待合并 | [sipeed/picoclaw#3200](https://github.com/sipeed/picoclaw/pull/3200) |
| QQ Channel 附件类型支持（语音/图片/视频/文件） | 已合并 ✅ | [sipeed/picoclaw#1349](https://github.com/sipeed/picoclaw/pull/1349) |

**研判**：#3200 如被合并，将进一步完善 PicoClaw 的模型编排能力，可作为下一版本的亮点功能。QQ Channel 附件支持已落地，后续可关注是否有更多协议扩展需求。

---

## 7. 用户反馈摘要

- **#1349（已合并）**：用户对 QQ Channel 的附件处理能力提出了明确需求，涉及语音、图片、视频、文件等多种媒体类型，说明现有实现覆盖不足。合并后用户可期待更完整的多媒体交互体验。
- **#3200（开放中）**：用户关注模型选择的灵活性与容错机制，希望在不依赖手动切换的情况下实现自动回退，反映出生产环境中对服务稳定性的重视。

---

## 8. 待处理积压

| PR/Issue | 状态 | 创建时间 | 超期天数 | 链接 |
|---------|------|---------|---------|------|
| #3200 - 模型默认回退链配置 | OPEN | 2026-07-01 | **37 天** | [sipeed/picoclaw#3200](https://github.com/sipeed/picoclaw/pull/3200) |

> ⚠️ 建议维护者关注 PR #3200 的审查进度，该功能对用户场景覆盖较广，合并后可提升项目竞争力。

---

**项目健康度评估**：🟡 中等 —— 功能迭代稳步推进，PR 合并节奏正常，但 Issue 交互活跃度和社区讨论热度有待提升。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# 📋 NanoClaw 项目动态日报 — 2026-08-07

---

## 1. 今日速览

NanoClaw 今日整体活跃度较高，24小时内共推进 **14 条 PR**（其中 8 条已合并/关闭）和 **2 条 Issue**。项目处于密集的修复与清理阶段：核心维护者 `glifocat` 关闭了因依赖外部 SaaS 服务而废弃的 Qodo/Google MCP 相关技能，同时发起了一项事务性升级 PR（#3195）以修复已知风险。社区贡献者持续为 Telegram 通道、调度系统和技能系统带来功能增强与缺陷修复。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) | Fix (core-team) | 将预检与凭证配置分离，使 `/update-skills` 可独立刷新代码而不触发凭据检查 |
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Refactor (core-team) | 移除废弃的 Qodo 和 Google MCP 技能（响应 Issue #3171） |
| [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) | Fix | 调度器现在从 `failed` 状态的行重新触发下次重复执行，而非仅从 `completed` 行提取 |
| [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) | Fix | 新增 `notifyFailedTasks` 扫描钩子，将永久失败的调度任务转化为用户可见通知 |
| [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) | Fix | 修复路由器中 `pattern` 模式无法匹配直接 @提及/DM/回复场景的缺陷 |
| [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Fix | Telegram `extractReplyContext` 现正确识别机器人自回复（`isReplyToBot` 标志） |
| [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) | Fix | 修复 Telegram/ChatSDK 通道静默丢弃纯媒体消息（无文字附件）的问题 |
| [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) | Fix | 用户 ID 命名空间改为按通道类型前缀区分，修复跨通道 ID 冲突 |

**推进小结：** 今日合并集中在 **调度可靠性修复**（#2678/#2679）、**Telegram 通道质量改善**（#2213/#2643/#2644）和 **技能系统清理**（#2873/#3172）三大方向，项目整体向前修复了多个长期存在的边界缺陷。

---

## 4. 社区热点

### 🔥 高关注 Issue / PR

- **[Issue #3194](https://github.com/nanocoai/nanoclaw/issues/3194)** — `/update-nanoclaw` 可在未通过验证前标记成功，导致 SQLite 数据库、gitignored 配置等组件无回滚保护。同一作者 `glifocat` 已跟进提交 **[PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195)**，将升级流程改为事务性操作。这是今日最关键的工程改进，直接影响升级稳定性。

- **[Issue #3171](https://github.com/nanocoai/nanoclaw/issues/3171)** → 已合并 **[PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172)** 关闭。用户指出两个内置 Qodo 技能依赖需要手动配置 `~/.qodo/config.json` 的外部 SaaS 服务，与项目自包含理念相悖，社区反馈后维护者果断清理。

- **[PR #2705](https://github.com/nanocoai/nanoclaw/pull/2705)** — `use-native-credential-proxy` 技能未能正确绕过 OneCLI 网关，在真实 `launchd`/`systemd` 部署中引发双重失败。该 PR 自 6 月 7 日提交至今仍未合并，已积压 60 天。

---

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) | `/update-nanoclaw` 升级路径存在数据损坏窗口（SQLite、配置丢失且不可回滚） | PR #3195 已提交，待合并 |
| 🟡 中 | [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) | 纯媒体消息在 Telegram 通道被静默丢弃 | ✅ 已合并（#2213） |
| 🟡 中 | [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) | 直接 @提及/DM/回复不被 pattern 规则触发 | ✅ 已合并（#2643） |
| 🟡 中 | [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Telegram 回复上下文中无法识别"回复 bot 自身消息" | ✅ 已合并（#2644） |
| 🟢 低 | [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) | 调度器失败后不自动重排重复执行 | ✅ 已合并（#2678） |

---

## 6. 功能请求与路线图信号

- **[PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)** — 新增 **Tavily MCP 工具技能**（`utility skill` 类别），为 Agent 提供 AI 搜索引擎能力。若合并，可作为独立工具链补充，不依赖外部 SaaS 账号，符合社区对"开箱即用工具"的需求信号。

- **[PR #3193](https://github.com/nanocoai/nanoclaw/pull/3193)** — 更新 Telegram Chat SDK 以支持富文本消息，反映用户对 **Telegram 通道体验持续改善** 的诉求。

- **[PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186)** — 重构引入 host seam，支持"技能自有能力"（skill-owned capabilities）的注入模式，为未来模块化扩展奠定基础。

- **[PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149)** — CLI 新增 `--rw` 标志支持 `groups config add-mount`，表明用户对挂载权限控制有持续需求。

---

## 7. 用户反馈摘要

- **真实痛点：** `glifocat` 连续报告了两个核心使用风险：一是内置 Qodo 技能依赖外部服务却无法自动配置（#3171），二是升级命令缺乏事务保护可能导致数据损坏（#3194）。两类问题均源于"**自动安装的技能未提供完整的初始化链路**"，是项目扩展过程中暴露的架构短板。
- **正面信号：** Telegram 通道修复密集落地（#2213/#2643/#2644），说明社区对多通道兼容性的需求得到了快速响应，用户交互体验在持续改善。
- **潜在不满：** PR #2705 自 6 月 7 日提交后已 **60 天未获合并**，该问题在真实生产部署中影响显著（OneCLI 网关绕过失败），长期搁置可能影响核心功能信任度。

---

## 8. 待处理积压

| PR / Issue | 状态 | 积压天数 | 建议 |
|---|---|---|---|
| [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | OPEN | ~60 天 | 核心功能修复，建议优先审查合并 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | OPEN | 3 天 | 重构类 PR，需评估架构合理性后合并 |
| [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) | OPEN | 1 天 | 事务性升级修复，直接对应 #3194，建议优先合并 |
| [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) | OPEN | 1 天 | Telegram 通道更新，合并后消除已知富文本缺陷 |
| [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) | OPEN | 9 天 | CLI 功能增强，可安排合并 |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | OPEN | 2 天 | 新 Tavily 技能，符合社区需求信号 |

---

**📊 项目健康度评估：** 活跃修复中，8/14 PR 已合并，核心维护者响应迅速。主要风险点为 **事务性升级修复（#3195）尚未合并** 及 **PR #2705 长期积压**。建议在下一个版本发布前优先完成升级安全修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目日报 — 2026-08-07

---

## 1. 今日速览

过去24小时 IronClaw 项目保持**高活跃度**：共处理 50 条 Issues 与 50 条 PR，新开/活跃 27 条，关闭 23 条；PR 合并/关闭 17 条，33 条待合并。核心亮点为 **v1.1.0 正式版发布**，标志着 1.0.0 以来首个稳定版本的落地，重点扩展了 MCP 注册、IronHub 安装、持久化文件附件等能力。整体项目健康度良好，QA 测试推动大量 bug 闭环，同时 Inspector 诊断体系持续完善。

---

## 2. 版本发布

### ironclaw-v1.1.0（2026-08-06）

**更新内容**
- 基于 `1.1.0-rc.1` 正式发布，包含 rc.1 以来的全部修复
- **扩展能力**：支持注册任意托管的 MCP 服务器
- **IronHub deep links**：可直接从 deep link 安装扩展
- **持久化文件附件**：支持跨通道（channel）传递文件附件
- Slac...（注：原始数据截断，完整内容请查看 [Release Notes](https://github.com/nearai/ironclaw/releases)）

**破坏性变更 / 迁移注意事项**
- 暂无明确破坏性变更声明，建议升级前确认 Slack 等通道配置仍符合预期

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 说明 |
|----|------|------|
| [#7235](https://github.com/nearai/ironclaw/pull/7235) | italic-jinxin | **Operator Inspection API 与实时诊断流** — 已合并，为排查提供底层能力 |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) | serrrfirat | **Fix FTS 查询注入** — 已合并，修复自然语言召回的 bug |
| [#7303](https://github.com/nearai/ironclaw/pull/7303) | henrypark133 | **Docker 镜像安装 curl** — 已合并，解决 staging 节点健康检查失败问题 |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) | thisisjoshford | **Docs 发布边界修复** — 已合并，关闭内部文档泄露到公网的问题 |

**整体推进**：Inspector 诊断体系、MCP 扩展注册、Slack 投递修复、docs 安全等关键方向均有实质进展，项目从"功能完善"向"可观测性+稳定性"阶段演进。

---

## 4. 社区热点

### 高关注 Issues

| Issue | 标题 | 评论数 | 状态 | 链接 |
|-------|------|--------|------|------|
| #5553 | Approval notifications disappear | 4 | OPEN | [链接](https://github.com/nearai/ironclaw/issues/5553) |
| #5702 | GitHub issue search/create HTTP 403 | 4 | OPEN | [链接](https://github.com/nearai/ironclaw/issues/5702) |
| #5522 | Reborn routine fails — Slack DM + capability_info | 3 | OPEN | [链接](https://github.com/nearai/ironclaw/issues/5522) |
| #5701 | Activity panel hides tool details | 3 | OPEN | [链接](https://github.com/nearai/ironclaw/issues/5701) |
| #5834 | Slack disconnect request incorrectly rejected | 3 | OPEN | [链接](https://github.com/nearai/ironclaw/issues/5834) |

**诉求分析**：
- **#5553 / #5834**：用户对通知和 Slack 断连的管理体验敏感，影响日常自动化使用
- **#5702**：GitHub 集成能力因权限配置问题不可用，阻塞开发者场景
- **#5522**：Routine 自动化与 Slack 能力注册存在耦合缺陷，是跨模块交互的共性问题

### 高关注 PRs

| PR | 标题 | 链接 |
|----|------|------|
| #7236 | Inspector debug panel + live diagnostics client | [链接](https://github.com/nearai/ironclaw/pull/7236) |
| #7277 | Model call statistics for Inspector | [链接](https://github.com/nearai/ironclaw/pull/7277) |
| #7239 | Prompt inspection + Prompt tab | [链接](https://github.com/nearai/ironclaw/pull/7239) |
| #7157 | Explicit channel delivery tool | [链接](https://github.com/nearai/ironclaw/pull/7157) |

---

## 5. Bug 与稳定性

### 已关闭的 Bug

| Issue | 标题 | 严重度 | 状态 |
|-------|------|--------|------|
| #3533 | Telegram 自动配置失效 | P1 | ✅ CLOSED |
| #5504 | Routine 创建挂起无返回 | P1 | ✅ CLOSED |
| #5557 | Logs deep link 需点击两次 | P3 | ✅ CLOSED |
| #5704 | 图片预览透明度异常 | P3 | ✅ CLOSED |
| #5705 | 终端图标无法禁用 | P3 | ✅ CLOSED |
| #5706 | Sidebar 显示原始 thread ID | P3 | ✅ CLOSED |
| #5838 | Context compaction 错误 | P2 | ✅ CLOSED |
| #5877 | Slack 通知发送错误用户 | P1 | ✅ CLOSED |

### 待修复 Bug（按严重度排列）

| Issue | 标题 | 严重度 | 是否有 Fix PR |
|-------|------|--------|---------------|
| #5553 | Approval 通知消失 | P2 | ❌ |
| #5702 | GitHub 集成 403 | P2 | ❌ |
| #5522 | Reborn Routine + Slack | P2 | ❌ |
| #5701 | Activity panel 不实时更新 | P2 | ❌ |
| #5834 | Slack 断连被拒绝 | P2 | ❌ |
| #5707 | Routine 创建暴露内部细节 | P2 | ❌ |
| #5836 | Routine 定时运行失败 | P2 | ❌ |
| #5456 | Runner lease 过期 | P1 | ❌ |
| #5508 | Slack delivery target 未找到 | P2 | ❌ |
| #5509 | Chat 创建延迟随历史增长 | P2 | ❌ |
| #5510 | 无法删除旧 Routine | P3 | ❌ |
| #5552 | 多次工具失败后显示通用错误 | P2 | ❌ |
| #5776 | 长 prompt 超时降级为 invalid result | P2 | ❌ |
| #4339 | MiniMax 工具调用被拒绝 | P2 | ❌ |
| #4340 | 空 content 验证错误 | P2 | ❌ |
| #4341 | THINKING 链暴露给用户 | P2 | ❌ |
| #4342 | 认证弹窗刷新后残留 | P2 | ❌ |
| #4343 | MCP 集成因驱动失败不可用 | P2 | ❌ |
| #4344 | Agent 镜像用户消息 | P2 | ❌ |

> 注：PR #7300（Slack 投递修复）和 #7289（FTS 查询修复）已合并，对应部分问题有望缓解。

---

## 6. 功能请求与路线图信号

| 方向 | 关联 Issue / PR | 信号 |
|------|----------------|------|
| **Inspector 诊断面板** | #7220（已合并）、#7236、#7277、#7239 | 强烈信号：可观测性将是后续迭代重点，为运维/调试提供支撑 |
| **MCP 扩展注册私有化** | #7253 | 用户在生产环境需要隔离的 MCP 配置，v1.1.0 已部分落地 |
| **Channel Delivery Tool** | #7157 | 跨通道统一投递的设计已进入实现阶段，是架构级改进 |
| **Nostr host functions** | #7184 | WASM sandbox 增加 Nostr 签名能力，社区对去中心化通道有需求 |
| **OAuth 登录流程优化** | #7304 | 用户反馈 OAuth 应优先展示，登录体验持续改善 |
| **Docker / Railway sandbox** | #7214 | 多部署环境的 sandbox 隔离需求推动架构抽象 |

---

## 7. 用户反馈摘要

**高频痛点**
1. **通知与状态可见性差**：审批通知消失（#5553）、Activity panel 不实时更新（#5701）、图片预览异常（#5704）— 用户对实时反馈敏感
2. **Routine 生命周期管理缺失**：无法删除旧 Routine（#5510）、创建挂起（#5504）、定时运行失败（#5836）— 自动化工作流的稳定性待提升
3. **Slack 通道行为不可预期**：断连被拒绝（#5834）、通知发错人（#5877）、delivery target 找不到（#5508）— 多轮测试仍未完全稳定
4. **错误信息过于笼统**：多次工具失败后仅显示 "invalid result"（#5552、#5776），用户无法定位根因
5. **UI/UX 细节问题**：Sidebar 显示 raw ID（#5706）、Logs deep link 需两次点击（#5557）、终端图标无法隐藏（#5705）

**正面信号**
- v1.1.0 发布后扩展能力受到关注
- Inspector 诊断工具获社区认可，为复杂调试提供可能
- 文档安全修复（#7259）体现维护者对治理的重视

---

## 8. 待处理积压

| Issue | 标题 | 严重度 | 创建时间 | 建议优先级 |
|-------|------|--------|----------|------------|
| #5456 | Routine runner lease 过期 | P1 | 2026-06-30 | 🔴 高 — 影响核心自动化稳定性 |
| #5553 | Approval 通知消失 | P2 | 2026-07-02 | 🔴 高 — 用户交互关键路径 |
| #5702 | GitHub 集成 403 | P2 | 2026-07-06 | 🔴 高 — 开发者场景阻塞 |
| #5508 | Slack delivery target 未找到 | P2 | 2026-07-01 | 🟡 中 — 与 #5834 相关联 |
| #5836 | Routine 定时运行持续失败 | P2 | 2026-07-08 | 🟡 中 — 直接影响用户使用 |
| #5509 | Chat 创建延迟随历史增长 | P2 | 2026-07-01 | 🟡 中 — 体验退化问题 |
| #5522 | Reborn Routine + Slack 能力缺失 | P2 | 2026-07-02 | 🟡 中 — 跨模块耦合问题 |
| #5776 | 长 prompt 超时降级 | P2 | 2026-07-07 | 🟡 中 — 错误信息质量 |
| #4341 | THINKING 链暴露给用户 | P2 | 2026-06-02 | 🟡 中 — 安全/体验问题 |

> 建议维护者优先关注 **P1 级 Routine 稳定性** 与 **P2 级通知/集成类问题**，这些直接影响用户生产使用体验。

---

*报告生成时间：2026-08-07 | 数据来源：nearai/ironclaw GitHub 仓库*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 📋 LobsterAI 项目动态日报
**日期：2026-08-07 | 分析周期：过去24小时**

---

## 1. 今日速览

LobsterAI 项目今日整体活跃度**中等偏低**。过去24小时内新增 5 条 Issue（均为新开状态）和 2 条 PR（均待合并），但**无新版本发布**。社区反馈集中在用户体验改进和 Bug 修复，暂无严重稳定性危机。两个待合并 PR 均被标记为 `[stale]`，提示维护者需关注冲突解决与合并推进。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 描述 |
|---|---|---|
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | 🔶 待合并（stale） | Agent 管理页面交互优化，原 PR #1176 因与主分支冲突重提 |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | 🔶 待合并（stale） | 新增 per-model contextWindow 和 maxTokens 设置 |

**进展评估**：两个 PR 均处于 stale 状态，需维护者介入解决冲突或重新审核。PR #1199 的上下文窗口与 Token 配置功能是社区长期诉求，合并后将显著增强模型管理能力。

---

## 4. 社区热点

| Issue | 类型 | 热度 | 摘要 |
|---|---|---|---|
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | 功能请求 | 🔥 新提出 | 输入框编辑模式：支持 Enter 换行 / Ctrl+Enter 发送，降低长 Prompt 编写门槛 |
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Bug 反馈 | 🔥 新提出 | 模型 ID 含斜杠的自定义 Provider（如 SiliconFlow）无法在界面中选择 |
| [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) | 讨论 | 📊 中等 | 询问内核 PowerShell 版本未从 5.1 升级至 7.4 的原因 |

**诉求分析**：用户核心痛点在于**输入体验**（长文本编辑不便）和**兼容性**（非标准模型 ID 格式），反映出项目在中英文混用场景下的适配仍有提升空间。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | ⚠️ 中 | 新开 | 自定义 Provider 模型 ID 含斜杠时界面无法选择，影响 SiliconFlow 等广泛使用的服务商 |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | ⚠️ 中 | stale | 网关重启进度条异常消失，状态反馈缺失，用户无法判断重启是否完成 |

**暂无紧急 Bug 或崩溃报告**，但 #2443 影响面较广（所有使用斜杠 ID 的 OpenAI 兼容服务商），建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 路线图匹配度 |
|---|---|---|
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | 输入框编辑模式（Enter 换行 / Ctrl+Enter 发送） | ✅ 高 — 用户日常高频痛点，易实现，社区呼声强 |
| [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) | 升级 PowerShell 内核至 7.4 | ⚠️ 中 — 需评估 Windows 兼容性成本，非阻塞性需求 |

**建议**：#2444 可作为下一版本 UX 优化重点，快速响应社区期待。

---

## 7. 用户反馈摘要

| 来源 | 痛点 / 反馈 | 场景 |
|---|---|---|
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | 每次切换工作目录都强制创建 6 个系统文件，管理混乱，删除后需重建 | 多工作目录场景 |
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | 长 Prompt 编辑需 Shift+Enter 换行，误触易导致消息提前发送 | 复杂任务编写 |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | 网关重启进度条消失，状态不可见，后续对话显示模型不可用 | 运维 / 故障排查 |

**正向反馈**：暂无今日收到的正面评价记录，项目口碑维护需加强用户互动。

---

## 8. 待处理积压

| 编号 | 类型 | 创建日期 | 状态 | 风险 |
|---|---|---|---|---|
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | Bug/建议 | 2026-04-01 | stale | 高 — 影响多工作目录用户，反馈强烈 |
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | 功能优化 | 2026-04-01 | stale（有冲突） | 高 — Agent 管理体验优化，社区期待 |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | Bug | 2026-04-01 | stale | 中 — 网关状态反馈问题 |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | 功能增强 | 2026-04-01 | stale | 中 — 上下文窗口配置功能 |

> ⚠️ **维护者提醒**：4 个 stale 条目均创建超过 4 个月未获响应，建议优先处理 #1197 冲突解决与 #1196 需求评估，避免社区信任度持续下降。

---

**📊 项目健康度评分：6.5 / 10**
- 社区参与：活跃（日均 5+ Issue）
- 维护响应：偏低（4 条 stale 积压）
- 版本节奏：停滞（无新版本）
- Bug 处理：中等（无紧急问题，但有中等优先级待修）

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



# CoPaw 项目日报 — 2026-08-07

---

## 1. 今日速览

CoPaw 今日继续保持高活跃度：过去 24 小时共处理 34 条 Issues（新开/活跃 17，关闭 17）与 50 条 PR（待合并 20，已合并/关闭 30）。无新版本发布，但多条关键 bug 修复被关闭，Memory 中篇配置与 Embedding 生命周期 PR 也已合入。整体项目健康度良好，社区贡献活跃，维护者响应及时。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#6741](https://github.com/agentscope-ai/QwenPaw/issues/6741) [CLOSED] | feat | ReMe Embedding 配置增强与生命周期管理，补齐保存前连通性验证、统一模型工厂（OpenAI/DashScope/Gemini/Ollama）、Console 状态面板 |
| [#6739](https://github.com/agentscope-ai/QwenPaw/issues/6739) [CLOSED] | docs | 同步发布中英文 Embedding 配置指南 |
| [#6530](https://github.com/agentscope-ai/QwenPaw/issues/6530) [CLOSED] | fix | 修复 per-tool call limit 名称可编辑的回归问题，新增回归测试 |
| [#6744](https://github.com/agentscope-ai/QwenPaw/issues/6744) [CLOSED] | fix | 强化共享文件系统上 agent 配置持久化的原子写入机制 |
| [#6664](https://github.com/agentscope-ai/QwenPaw/issues/6664) [CLOSED] | fix | Codex CLI 缺失时 harnesses 优雅降级 |
| [#6611](https://github.com/agentscope-ai/QwenPaw/issues/6611) [CLOSED] | refactor | Scroll 上下文与 AgentScope 生命周期对齐，收敛为唯一上下文协议 |

**整体进展评估：** Memory 子系统今日是重点推进方向，Embedding 配置链路从验证→保存→生效→文档全线补齐；共享文件系统配置持久化得到加固；Scroll 上下文架构收敛完成。项目向 2.1 稳定版稳步推进。

---

## 4. 社区热点

### 高讨论 Issues

| Issue | 状态 | 评论数 | 链接 | 核心诉求 |
|---|---|---|---|---|
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | CLOSED | 8 | 自建 Matrix 频道需增加重试与健康检测机制 |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | CLOSED | 6 | `spawn_subagent` 将空 `batch` 占位符误判为 batch 模式 |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | OPEN | 5 | 长会话中模型空响应不报错，导致会话静默失效 |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | CLOSED | 5 | DeepSeek 思考模式多轮推理 content 丢失 |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | OPEN | 3 | MCP 工具规律性失效，需重启容器恢复 |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | CLOSED | 3 | 超大工具输出导致历史会话加载卡死 |
| [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | CLOSED | 3 | Matrix E2E 加密不可用（olm 依赖问题） |
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | OPEN | 3 | QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容 |

**热点分析：**
- **频道稳定性**（#6684、#6476）是高频诉求，用户在使用自建 Matrix 时频繁遭遇连接问题，期望框架层增加自动重试与健康检测。
- **MCP 工具稳定性**（#6732）近期新增，暴露了 MCP 会话在长时间运行下的潜在泄漏或状态错乱问题。
- **长会话可靠性**（#6601、#6726、#6700）持续被提及，核心痛点是上下文膨胀与错误处理缺失导致会话"静默死亡"。

---

## 5. Bug 与稳定性

### 已报告 Bug（按严重程度排列）

| 级别 | Issue | 状态 | 简述 | 已有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | OPEN | MCP 工具规律性失效，需重启容器 | 无 |
| 🔴 高 | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | OPEN | agentscope 2.0.4.post1 兼容性问题，proactive 子系统崩溃 | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) 部分覆盖 |
| 🟠 中高 | [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | OPEN | 长会话空响应不报错，会话静默失效 | 无 |
| 🟠 中高 | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | OPEN | 多轮 tool_call 累积导致 400 错误 | 无 |
| 🟠 中高 | [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) | OPEN | 多步骤任务完成后 Agent 进入无限循环，会话卡死数小时 | 无 |
| 🟡 中 | [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) | OPEN | `run_tool_batch` 报 No toolkit available | 无 |
| 🟡 中 | [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | CLOSED | 思考模式 history relay 失败 400 | 无（已关闭） |
| 🟡 中 | [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | CLOSED | SSE 流内 503 错误未触发重试 | 无（已关闭） |
| 🟡 中 | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | CLOSED | Browser SDK open() 持续报 Target crashed | 无（已关闭） |
| 🟡 中 | [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | CLOSED | `execute_shell_command` sandbox_config 传参崩溃 | 无（已关闭） |
| 🟢 低 | [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) | OPEN | Malware Bytes 报 Trojan Loader（疑似误报） | 待确认 |
| 🟢 低 | [#6760](https://github.com/agentscope-ai/QwenPaw/issues/6760) | CLOSED | `qwenpaw task` cmdline 在 2.0.1 报错 | 无（已关闭） |

**稳定性评估：** 今日关闭 9 条 Bug，涵盖思考模式、SSE 重试、Browser SDK、MCP 工具名校验等痛点；但仍有 4 条高/中优先级 Bug 待处理，尤其是 **#6732（MCP 规律失效）** 和 **#6768（无限循环卡死）** 对生产可用性影响较大。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 诉求 | 纳入下一版本可能性 |
|---|---|---|---|
| [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | enhancement | MCP 工具调用可配置超时（per-client + call-level guard） | ⭐⭐⭐ 高 — 与 #6732 稳定性问题直接相关 |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | enhancement | Chrome tab 生命周期跨响应周期可配置 | ⭐⭐ 中 |
| [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | enhancement | 微信审批提示支持中文操作标签 | ⭐⭐ 中 — 国际化体验优化 |
| [#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765) | enhancement | 增加匈牙利语等欧盟语言支持 | ⭐ 低 — 用户热情但优先级靠后 |
| [#6737](https://github.com/agentscope-ai/QwenPaw/issues/6737) | enhancement | 历史对话自动生成标题表意更清晰 | ⭐⭐ 中 — UI 体验优化 |
| [#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736) | enhancement | 取消或优化会话窗口左上角标题 | ⭐⭐ 中 — 与 #6737 可合并考虑 |
| [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | feat (PR) | 模型故障自动降级 + 冷却机制 | ⭐⭐⭐ 高 — 已在 review 中，直接提升可用性 |

**路线图信号：** 用户普遍期待 **MCP 稳定性增强**（超时、重试）与 **模型容错**（降级/冷却），这两类需求已有多条 PR 并行推进，预计 2.1.x 版本将重点覆盖。

---

## 7. 用户反馈摘要

| 主题 | 反馈内容 | 来源 |
|---|---|---|
| 频道连接稳定性 | 自建 Matrix 频道需手动重连，缺乏自动重试与健康检测，体验较差 | #6684 |
| 长会话可靠性 | 长上下文+多工具调用场景下，模型空响应不报错，会话"静默死亡"后完全无提示 | #6601、#6726 |
| MCP 工具可靠性 | MCP 工具间歇性失效，需重启容器，严重影响生产使用 | #6732 |
| 上下文管理 | 超大工具输出（MB 级）导致历史会话加载卡死，需截断/分页 | #6700 |
| 跨天会话时间感知 | 跨天会话中 Agent 对日期/星期判断错乱，日程任务定错日期 | #6755 |
| UI 体验 | 会话标题自动生成质量差、多模态能力提示过于粗暴 | #6452、#6736、#6737 |
| 兼容性 | 与 agentscope 2.0.4.post1 升级后 proactive 子系统崩溃、工具权限死锁 | #6612 |
| 安全误报 | Windows Desktop 版被 Malware Bytes 报 Trojan Loader，用户要求官方回应 | #6775 |
| 多语言支持 | 中国用户希望微信审批使用中文操作标签；匈牙利用户请求欧盟语言支持 | #6728、#6765 |

---

## 8. 待处理积压

以下 Issue/PR 长时间未关闭，建议维护者优先关注：

| 优先级 | 类型 | Issue/PR | 创建时间 | 简述 | 链接 |
|---|---|---|---|---|---|
| 🔴 高 | Bug | #6732 | 2026-08-06 | MCP 工具规律性失效，需重启恢复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6732) |
| 🔴 高 | Bug | #6768 | 2026-08-06 | 多步骤任务后 Agent 无限循环，会话卡死数小时 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6768) |
| 🔴 高 | Bug | #6612 | 2026-07-31 | agentscope 2.0.4.post1 兼容性崩溃，仅部分修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6612) |
| 🟠 中 | Bug | #6601 | 2026-07-31 | 长会话空响应不报错 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6601) |
| 🟠 中 | Bug | #6726 | 2026-08-05 | 多轮 tool_call 累积导致 400 错误 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6726) |
| 🟠 中 | Bug | #6756 | 2026-08-06 | `run_tool_batch` 报 No toolkit available | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6756) |
| 🟡 中 | Enhancement | #6724 | 2026-08-05 | MCP 工具调用超时可配置（PR #6724 待合入） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6724) |
| 🟡 中 | Question | #6761 | 2026-08-06 | MCP 2026-07-28 无状态规范是否支持 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6761) |
| 🟢 低 | 安全 | #6775 | 2026-08-07 | Malware Bytes 误报，需官方声明 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6775) |

---

**报告生成时间：** 2026-08-07  
**数据来源：** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) GitHub

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报
**日期：2026-08-07**

---

## 1. 今日速览

过去24小时内，ZeroClaw 项目保持**高活跃度**：新增 22 条活跃 Issue 与 45 条待合并 PR，总计 81 项开发动态。项目当前处于 **v0.8.5 稳定化窗口期**（截止 2026-08-30），维护者正聚焦于 SOP 工具链、A2A 协议、网关架构等核心模块的治理 RFC 与 bug 修复。5 项 PR 已合并/关闭，主要包括安全修复（pipeline 工具门控）、测试稳定性改进与文档澄清，整体项目健康度良好，社区贡献节奏稳健。

---

## 2. 版本发布

**无新版本发布。**

当前处于 v0.8.5 有限周稳定化阶段（Tracker: [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)），已于 2026-08-04 冻结新特性入库，预计 2026-08-30 结束。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（5 条）

| PR | 作者 | 变更要点 |
|----|------|----------|
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) `fix(tools): enforce agent policy in pipelines` | Audacity88 | 修复 `execute_pipeline` 绕过 per-agent 工具策略的安全漏洞（Closes #7947），在 pipeline 执行前构建有效工具策略并应用 ACP 断言 |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) `fix(providers): exclude Nova 2 from Bedrock prompt caching` | ozpool | 修复 Bedrock Nova 2 Lite 模型因 `cachePoint` 字段引发 400 错误的兼容性问题（关联 #8720） |
| [#9659](https://github.com/zeroclaw-labs/zeroclaw/pull/9659) `fix(docs): disambiguate contextual protected literals` | Audacity88 | 修复文档中 `Signal`、`Filesystem` 等通用词被误识别为产品字面量的问题（Closes #9657） |
| [#9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) `refactor(zerocode): derive slash commands from shared catalogue` | IftekharUddin | 统一 ZeroCode slash 命令源为 `BUILTIN_COMMANDS` 单一真相源，消除多源不一致（Closes #9172） |
| [#9764](https://github.com/zeroclaw-labs/zeroclaw/pull/9764) `test(config): widen scheduler-latency margin` | mov-xound-glitch | 放宽 OnePassword 非阻塞测试的时间预算，修复 CI 随机失败（Closes #9763） |

**推进方向**：今日合并集中在**安全合规**（pipeline 工具门控）、**模型兼容性**（Bedrock Nova 2）与**工程基建**（命令源统一、测试稳定性），为 v0.8.5 稳定化积累了关键质量保障。

---

## 4. 社区热点

### 高讨论 Issue（评论数 ≥5）

| Issue | 主题 | 评论 | 作者 | 状态 |
|-------|------|------|------|------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 19 | Audacity88 | 审批延期/推进中 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs and design issues | 11 | Audacity88 | 已接受 |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC: A2A outbound client (A2ATool) | 11 | kingstar001 | 已接受 |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: Preserve Todo tracker configuration during ZeroCode ownership migration | 11 | IftekharUddin | 进行中 |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance, conversation binding, reply contract for internally initiated agent turns | 10 | mov-xound-glitch | 已接受 |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | RFC: Per-model capability & context-window config | 8 | NiuBlibing | 待维护者审核 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none | 7 | belumume | 进行中 |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | Bug: verifiable-intent 未验证凭证链即评估约束 | 6 | AngryPacifist | 已接受 |

**热点分析**：
- **治理与流程优化**（#6808、#8692、#9496）是讨论最集中的领域，社区对 RFC 流程冗长、投票协调成本高的痛点有强烈改善诉求。
- **A2A 协议扩展**（#9106）反映用户对 agent-to-agent 主动调用能力的迫切需求，当前协作被迫绕道中转，阻碍多 agent 场景落地。
- **安全加固**（#9328、#9397）持续引发关注，空白配置语义的边界问题被识别为高风险，维护者响应积极。

---

## 5. Bug 与稳定性

### 高严重度（P1 / risk:high）

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | SOP: 畸形 `SOP.toml` 被静默丢弃，`sop validate` 报告成功 | OPEN | — |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | SOP: `sops_dir` 文档默认值未被 daemon 尊重，SOP 静默不加载 | OPEN（进行中） | — |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | SOP: 多步 agent-driven 运行中途失败，无审计事件记录 | OPEN | — |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | Task: `cron update` 静默丢弃声明式作业的六列变更 | OPEN | — |
| [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | SOP: `finish_run` 接受失败原因参数但直接丢弃 | OPEN | — |
| [#9792](https://github.com/zeroclaw-labs/zeroclaw/issues/9792) | git channel: 空 peer allowlist 静默丢弃所有事件（含 SOP 路由） | OPEN | — |
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | Bug: `execute_pipeline` 绕过 per-agent 工具门控（confused deputy） | CLOSED | ✅ [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | Bug: verifiable-intent 未验证凭证链即评估约束 | OPEN | — |

### 中等严重度（P2 / risk:medium-low）

| Issue | 标题 | 状态 |
|-------|------|------|
| [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | SOP cron 触发器无 HTTP 能力，无法执行网络工作 | OPEN |
| [#9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) | `zeroclaw-gateway` 默认特性集 clippy -D 警告 | OPEN |
| [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) | cron add CLI 帮助示例全部失效 | CLOSED（修复中） |
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Bedrock Nova 2 Lite `cachePoint` 缓存错误 | CLOSED | ✅ [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) |
| [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) | cron 父 help 仍打印失效的 `add-at/add-every/once` 示例 | OPEN |

**稳定性评估**：今日 Bug 报告高度集中于 **SOP 工具链的健壮性与可观测性**（6 条 P1），包括配置静默失败、审计缺失、运行状态不一致等，反映出 SOP 子系统仍处于快速迭代期，测试覆盖与错误处理有待加强。

---

## 6. 功能请求与路线图信号

| Issue / PR | 主题 | 与路线图关联 |
|------------|------|--------------|
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) + PR [#待合并] | A2A 出站客户端（A2ATool） | v0.9.0 多 agent 协作核心能力，RFC 已接受，预计纳入 v0.9.0 |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 按模型配置能力与 context-window | 网关配置精细化，v0.9.0 auth/security 加固配套 |
| [#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788) | 在 system prompt 中暴露当前 shell 方言 | 用户体验改进，低延迟改进项 |
| [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) | Kimi Code provider 支持 | CLOSED（暂不纳入） |
| [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) + [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) | eval 基准文件 + 沙箱化 live 执行模式 | 质量基础设施，持续推进中 |
| [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) | Grok Build ACP model provider | 新 provider 接入，PR 已开放 |
| [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | Telegram 群聊 per-user-session 开关 | 通道能力增强，PR 已开放 |

**路线图信号**：v0.9.0 聚焦 **auth/security 加固、A2A 协议、网关边界**（见 Tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）；v0.8.5 以稳定化为主，新增功能有限。

---

## 7. 用户反馈摘要

**痛点聚焦**：
- **SOP 配置静默失败**：多个 Issue 反映 `sops_dir` 默认值、畸形 `SOP.toml`、空 peer allowlist 均导致 SOP 静默不加载或不执行，且无任何错误提示（#9786、#9779、#9792）。用户对"无诊断信息的静默失败"反馈强烈。
- **SOP 可观测性缺失**：失败原因被丢弃（#9783）、多步运行中途失败无审计事件（#9784），导致运维排障困难。
- **SOP 能力受限**：cron 触发的 SOP 无法执行 HTTP 网络请求，被文档描述为"watch-loop"却缺乏基础能力（#9780）。
- **管道工具策略绕过**：#7947 指出 pipeline 执行时可绕过 per-agent 工具门控，构成 confused deputy 安全风险，已获修复。
- **凭证验证不完整**：#9328 指出 verifiable-intent 在未完成凭证链验证的情况下评估约束，存在安全隐忧。

**正面反馈**：
- 社区对治理 RFC 流程的积极参与（#6808、#9496）反映项目治理透明度建设获得认可。
- eval 基础设施（#9221、#9214）的持续推进表明用户对质量保障体系有正面预期。

---

## 8. 待处理积压

### 需维护者关注

| Issue / PR | 类型 | 积压时长 | 优先级 |
|------------|------|----------|--------|
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | Bug（安全） | ~14 天 | P2 / risk:high |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | Bug（数据丢失） | ~2 天 | P1 / risk:high |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | Bug（静默失败） | ~1 天 | P1 / risk:high（进行中） |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | Bug（审计缺失） | ~1 天 | P2 / risk:high |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | Bug（静默失败） | ~1 天 | P1 / risk:high |
| [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | Bug（可观测性） | ~1 天 | P2 / risk:medium |
| [#9792](https://github.com/zeroclaw-labs/zeroclaw/issues/9792) | Bug（静默丢弃） | ~1 天 | P2 / risk:medium |
| [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) | RFC（治理） | ~10 天 | P1 / risk:high |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | RFC（配置） | ~36 天 | P1 / risk:high（待审核） |

**建议**：今日 SOP 相关 Bug 呈集中爆发态势，建议维护者优先处理 #9779/#9786/#9792 的静默失败根因，并推动 #9328 凭证验证修复入库，以保障 v0.8.5 发布质量。

---

*报告生成时间：2026-08-07 | 数据来源：GitHub API*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*