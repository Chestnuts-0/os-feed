# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 06:51 UTC

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



# OpenClaw 项目动态日报 — 2026-08-05

---

## 1. 今日速览

过去24小时 OpenClaw 保持极高活跃度：500 条 Issue 更新（390 活跃 / 110 关闭）与 500 条 PR 更新（376 待合并 / 124 已合并），日均流量处于高位。今日无新版本发布，但多个 P0/P1 级 Bug 修复 PR 已就绪待合入，涵盖会话状态一致性、媒体清理数据安全、子智能体完成丢失等核心稳定性问题。社区整体呈现"高频反馈 + 快速响应"的健康态势，Diamond Lobster 级问题数量较多，说明近期版本迭代对边缘并发场景暴露了一些深层 race condition。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/推进的重要 PR 主要集中在三个方向：

**① 会话状态与分支一致性**
- [#116382](https://github.com/openclaw/openclaw/issues/116382) — 修复 Control UI 因后台 append 导致"分支已切换"误报问题（P1）
- [#119221](https://github.com/openclaw/openclaw/pull/119221) — 会话 ID 在 append 中途旋转时拒绝写入 transcript 的未保护路径
- [#115968](https://github.com/openclaw/openclaw/pull/115968) — 为 fallback 链中每个候选 compaction 分配独立超时，而非共享单一 180s 安全超时

**② 媒体与数据保护**
- [#119260](https://github.com/openclaw/openclaw/pull/119260) — P0：managed media 清理在无法读取会话存储时改为 fail-closed，防止永久删除媒体文件
- [#119127](https://github.com/openclaw/openclaw/pull/119127) — 将 TTL sweep 移出 managed outgoing 树，修复已配置 `attachments.ttlHours` 用户的附件丢失问题

**③ 插件质量与 QA 体系**
- [#119485](https://github.com/openclaw/openclaw/pull/119485) — 隔离 `configSchema` 结构无效的插件，防止整个 gateway 启动崩溃
- [#119497](https://github.com/openclaw/openclaw/pull/119497) — QA 增加对禁用语 fallback 文本的拒绝
- [#119491](https://github.com/openclaw/openclaw/pull/119491) — QA 场景选择器优先按 provider lane 再按 model 过滤
- [#119482](https://github.com/openclaw/openclaw/pull/119482) — Doctor 路径避免重复扫描 plugin metadata（单次节省约 17s 同步扫描时间）

项目整体在**会话状态一致性**和**数据防丢失**两个方向上有实质性推进，多个 P0 级修复已进入待合并状态。

---

## 4. 社区热点

| Issue | 评论数 | 热度标签 | 核心诉求 |
|-------|--------|----------|----------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 59 | 🦞 diamond lobster | Realtime voice 会话中 provider/consult 状态无硬边界，慢速/突发场景下会累积过时数据 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 23 | 🦞 diamond lobster | Subagent 完成结果在超时/drain/orphan 场景下静默丢失，无重试无通知 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | 🐚 platinum hermit | 多编码 Content-Disposition 文件名处理，需统一中心化 utility |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 15 | 🦐 gold shrimp | Gateway 主线程从启动即被 plugin-metadata snapshot + fs statting 占满，WS 升级 1006 失败 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 13 | 🦞 diamond lobster | 持久写入负载下 session transcript projection 可能 livelock，阻塞主线程和所有 channel transport |

**热点分析：** 评论 Top 5 中有 4 个为 Diamond Lobster 级 Bug，集中于**并发会话状态管理**和**实时语音/子智能体生命周期**，说明当前架构在高并发、长会话场景下存在系统性脆弱点。社区对 subagent 结果丢失问题的反馈尤为强烈（#44925 和 #67777 描述同一根因的不同模式）。

---

## 5. Bug 与稳定性

### P0 — 数据丢失 / 启动阻断
| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败，`entry_valid` 列不存在导致 gateway 拒绝启动 | — |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 从 6.11 升级到 7.1 后启动迁移预检失败，表与租约均为空 | — |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env 生成器对值双重引号包裹，破坏 `AWS_REGION` 等环境变量 | — |

### P1 — 核心功能受损
| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 会话无硬边界，资源无限累积 | — |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成在超时/drainer 场景静默丢失 | — |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent 完成投递在直接 announce 超时后丢失（与 #44925 同源） | — |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程被 plugin-metadata 扫描占满，WS 升级 1006 | [#119482](https://github.com/openclaw/openclaw/pull/119482) |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 持久写入下 transcript projection livelock 阻塞主线程 | — |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 在模型完成后因 stale `expectedLeafEntryId` 被拒绝 | [#116382](https://github.com/openclaw/openclaw/pull/116382) |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) **[CLOSED]** | `claude-cli` 后端绕过 `ANTHROPIC_API_KEY` 脱敏，单日产生 ~13.7M token 计费 | ✓ 已修复 |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有 persistent session 上下文上限被硬编码为 128k | — |

### P2 — 体验与功能缺陷
| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#118560](https://github.com/openclaw/openclaw/issues/118560) | WebChat canvas 在会话重置后隐藏早期消息 | — |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | Memory 文件 watcher 永不触发重新索引，`memory status` 显示 Dirty: no | — |
| [#119385](https://github.com/openclaw/openclaw/issues/119385) | Active Memory QA doctor 迁移在 catalog 并发下超时 | — |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏导致 zombie 累积 | — |
| [#116893](https://github.com/openclaw/openclaw/issues/116893) | 浏览器 click 创建的 tab 未被追踪/清理 | — |
| [#77733](https://github.com/openclaw/openclaw/issues/77733) | `/new` 和 `/reset` 不再生成 persona 问候（回归） | — |
| [#114690](https://github.com/openclaw/openclaw/issues/114690) | Discord 原生 Codex compaction 后可成功 source reply 被重复发送 | — |

---

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 社区反应 | 对应 PR 状态 |
|-------|----------|----------|-------------|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX 渲染 | 👍 10，最高点赞 Issue | — |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | WebChat 文件浏览器增加图片查看 | — | — |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | 支持 YAML 作为配置文件格式 | 👍 2 | — |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | Backup CLI 支持 .gitignore 风格排除 | 👍 1 | — |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | WebChat 支持自托管 STT/TTS（绕过浏览器 Speech API） | 👍 2 | — |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | Memory 索引支持 heading-aware chunking + entity extraction | 👍 2 | — |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | 探索 chat-first Android 原生表面 | 👍 1 | — |
| [#79168](https://github.com/openclaw/openclaw/issues/79168) | 工具输出内容级 prompt injection 扫描 | 👍 1 | — |

**路线图判断：**
- **#42840（MathJax）** 社区呼声最高（👍10），但当前 Bug 优先级更高，预计不会进入近期版本
- **#45508（自托管 TTS/STT）** 与 #45758 同属可配置性改进，有明确的架构改造需求
- **#95830（Telegram poll 路由）** 已在 PR 中且有 mantis proof，可能纳入下一版本
- **#119523（WhatsApp LID 支持）** 和 **#119520（Cron 清理）** 均为小修复，风险低，可能快速合入

---

## 7. 用户反馈摘要

**核心痛点：**
1. **会话状态一致性**：多个用户反映 `chat.send` 报错 "thread switched branches"（#115700）、transcript livelock（#115908）、session ID 旋转导致消息写入错误会话（#119221），这是当前最高频的投诉类别
2. **子智能体结果丢失**：#44925 和 #67777 描述了同一根因的不同触发模式——subagent 完成在 direct announce 超时、drain、orphan prune 三种场景下静默丢失，对生产级编排场景影响严重
3. **Gateway 启动性能**：#118846 报告 plugin-metadata 快照和 fs statting 从启动即占满主线程，直接影响 WS 连接建立
4. **媒体数据安全**：#119088 / #119260 用户反馈配置了 TTL 后生成的附件被误删，属于 P0 数据丢失风险
5. **API 计费意外**：#117956 用户报告 claude-cli 绕过了 OpenClaw 的环境变量清理，单日产生 13.7M token 意外费用，已关闭但暴露了安全审计缺口

**正面反馈：**
- QA 体系持续完善（#118785、#118965、#119497、#119491），用户对可验证性提升表示认可
- Doctor 诊断工具的性能优化（#119482）直接解决了 plugin-heavy 场景的启动慢问题

---

## 8. 待处理积压

以下 Issue 长期未获维护者

---

## 横向生态对比



# AI 智能体开源生态横向对比分析报告
**日期：2026-08-05 | 分析师：Agnes (Sapiens AI)**

---

## 1. 生态全景

2026年Q3，个人AI助手/自主智能体开源生态呈现**"核心框架高频迭代 + 垂直场景分化收敛"**的双轨态势。OpenClaw、Hermes Agent、IronClaw、ZeroClaw四项目日均Issue/PR流量超500条，承担会话管理、多Agent协作、安全隔离等底层能力建设；NanoBot、PicoClaw、NanoClaw聚焦渠道集成与WebUI体验，形成差异化竞争。生态整体从"功能堆砌期"转入**"稳定性与安全加固期"**，多项目集中修复race condition、跨Agent权限隔离、会话状态一致性等深层架构问题，反映行业对生产级可靠性的迫切需求。

---

## 2. 各项目活跃度对比

| 项目 | Issue更新 | PR更新 | 合并/关闭 | Release | 健康度 | 核心态势 |
|------|-----------|--------|-----------|---------|--------|----------|
| **OpenClaw** | 500（390活跃） | 500（376待合） | 124合并 | 无 | 🟢 高活跃 | 高频反馈+快速响应，P0 Bug修复集中 |
| **Hermes Agent** | 50（44活跃） | 50（9合并） | 6关闭 | 无 | 🟢 高强度 | Telegram战役+桌面端稳定性并行 |
| **IronClaw** | 50（13关闭） | 50（23关闭） | 23合并 | v1.1.0-rc.1 | 🟢 高活跃 | WS架构重构收尾，质量保障体系化 |
| **ZeroClaw** | 38 | 50 | 若干 | 无 | 🟢 高活跃 | 安全加固+架构收敛双主线 |
| **NanoBot** | 4高关注 | 21（16关闭） | 16合并 | 无 | 🟢 健康 | WebUI优化+频道修复，合并率76% |
| **LobsterAI** | 1活跃 | 14（11关闭） | 11合并 | 2026.8.3→main | 🟢 良好 | 功能迭代收尾，依赖升级推进 |
| **PicoClaw** | 3新增 | 4（2合并） | 2合并 | 无 | 🟡 中等偏上 | 稳定迭代，MCP容错待修复 |
| **NanoClaw** | 1更新 | 6（1合并） | 1合并 | 无 | 🟢 良好 | 语音/短信渠道集成推进中 |
| **NullClaw** | 0 | 1待合 | 0 | 无 | 🟡 平稳低活跃 | 贡献者活跃度不足 |
| **Moltis** | 0 | 1待合 | 0 | 无 | 🟡 一般 | 平稳维护期 |
| **TinyClaw** | — | — | — | — | 🔴 无活动 | 停滞 |
| **ZeptoClaw** | — | — | — | — | 🔴 无活动 | 停滞 |
| **CoPaw** | — | — | — | — | ⚠️ 异常 | 摘要生成失败 |

---

## 3. OpenClaw 在生态中的定位

**优势定位：**
- **规模标杆**：日均500条Issue/PR流量，为生态中最高，社区反馈-响应闭环最成熟
- **会话状态管理领导者**：P0级修复聚焦branch一致性、transcript livelock、subagent结果丢失，解决高并发场景系统性脆弱点
- **数据安全第一**：managed media fail-closed机制、TTL sweep修复防止附件丢失，建立生产级数据保护范式

**技术路线差异：**
| 维度 | OpenClaw | 竞品对比 |
|------|----------|----------|
| 架构重点 | 会话状态机+compaction超时隔离 | IronClaw重WS架构重构；Hermes重god-file拆分 |
| 安全模型 | 媒体清理fail-closed、API密钥脱敏 | ZeroClaw强调per-agent权限隔离；NanoBot关注os.environ泄漏 |
| 扩展生态 | Plugin metadata快照优化 | NanoClaw推Dial渠道；Hermes推Telegram Bot API 10.2全量对齐 |

**社区规模**：OpenClaw Diamond Lobster级Issue占比80%（4/5热点），反映其用户群更深入生产场景，问题复杂度高；NanoBot/Moltis以功能型Issue为主，用户更偏轻量级/实验性使用。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **会话状态一致性** | OpenClaw、Hermes Agent、PicoClaw | OpenClaw: branch切换误报/transcript livelock；Hermes: Desktop会话切换丢失；PicoClaw: MCP连接失败导致agent挂起 |
| **跨Agent/多租户隔离** | ZeroClaw、NanoClaw、IronClaw | ZeroClaw: S0级Knowledge graph无per-agent归属、Session工具缺所有权校验；NanoClaw: Agent间SendMessage冲突；IronClaw: 跨会话记忆不可靠 |
| **安全与认证** | ZeroClaw、NanoBot、LobsterAI | ZeroClaw: Webhook未认证接入；NanoBot: API密钥跨Provider泄漏；LobsterAI: NIM群名渲染硬编码错误 |
| **长会话性能** | OpenClaw、PicoClaw、Hermes Agent | OpenClaw: plugin-metadata扫描占满主线程；PicoClaw: 长历史会话输入卡顿；Hermes: Cron对reasoning model 600s超时竞态 |
| **渠道集成深化** | NanoBot、Hermes Agent、NanoClaw | Hermes: Telegram Bot API 10.2战役（14子需求）；NanoBot: Matrix/WeCom/Telegram多频道修复；NanoClaw: Dial channel（SMS+语音通话） |
| **可观测性与可测试性** | OpenClaw、Hermes Agent、ZeroClaw | OpenClaw: QA体系fallback拒绝/过滤优化；Hermes: memory.changed广播事件替代轮询；ZeroClaw: Eval框架重构（pass@k+误差棒） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | 会话状态机+数据防丢失+Plugin生态 | 生产级部署、高并发场景 | 独立compaction超时、fail-closed媒体清理、plugin-metadata快照优化 |
| **IronClaw** | WS架构重构+错误恢复+Skill市场 | 企业级部署、需强稳定性保障 | Wave Structure架构、composition驱逐policy/service cluster、skill discovery/routing/activation可靠性Epic |
| **Hermes Agent** | 多模态推理集成+桌面端体验 | 研究/实验用户、多模型需求 | god-file拆分（17,700行重构）、memory.changed广播、Telegram战役驱动 |
| **ZeroClaw** | 安全隔离+架构收敛+RFC治理 | 安全敏感场景、多Agent协作 | VerifiedWebhookIngress类型化边界、per-agent所有权校验、RFC决策队列 |
| **NanoBot** | WebUI体验+多频道集成 | 轻量级部署、渠道多样化需求 | 临时聊天模式、MCP Apps host支持、元搜索RRF融合 |
| **PicoClaw** | OAuth认证+Prompt cache可观测 | 远程/无头部署用户 | Exa原生搜索接入、LLM响应debug日志增强 |
| **NanoClaw** | 语音/短信渠道（Dial） | 多模态交互需求 | Dial channel adapter、Discord webhook修复、Agent间通信加固 |
| **LobsterAI** | 启动积分活动+用户体验优化 | C端用户、国内用户 | React 19/Vite 8升级、Artifact自动预览控制 |
| **NullClaw** | 本地CLI Provider生态 | 本地模型运行需求 | spawn-per-request模式、grok-cli provider扩展 |
| **Moltis** | 基础依赖维护 | 稳定运行用户 | 平稳维护期，无功能突破 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（High Velocity）
| 项目 | 证据 | 阶段特征 |
|------|------|----------|
| **OpenClaw** | 500条/日流量，124 PR已合并，4个P0修复待合 | 高频Bug修复+架构稳定性巩固并行 |
| **IronClaw** | 50条/日，WS0-6批量合并，v1.1.0-rc.1发布 | 架构重构收尾，进入RC验证期 |
| **Hermes Agent** | 50条/日，9 PR合并，Telegram战役启动 | 功能爆发期（Bot API 10.2对齐） |
| **ZeroClaw** | 38 Issue+50 PR，3个S0安全Bug响应 | 安全加固+架构收敛双轮驱动 |

### 质量巩固阶段（Stabilization）
| 项目 | 证据 | 阶段特征 |
|------|------|----------|
| **NanoBot** | 76%合并率，WebUI重构+频道修复 | 体验优化期，安全漏洞待修复 |
| **PicoClaw** | 2/4 PR合并，MCP容错Bug待处理 | 稳定性打磨期 |
| **NanoClaw** | 1/6 PR合并，Dial渠道推进中 | 功能扩展期 |
| **LobsterAI** | 11/14 PR合并，2026.8.3待发布 | 活动功能收尾期 |

### 平稳/停滞阶段（Low Activity）
| 项目 | 证据 | 建议 |
|------|------|------|
| **NullClaw** | 1 PR待合并，0 Issue | 贡献者活跃度不足，需维护者推动 |
| **Moltis** | 1 Dependabot PR | 基础维护期，关注依赖安全 |
| **TinyClaw/ZeptoClaw** | 无活动 | 项目可能已进入维护或停滞状态 |

---

## 7. 值得关注的趋势信号

### 趋势1：会话状态一致性成为生产级部署核心瓶颈
**信号来源**：OpenClaw（4个P1 Issue）、Hermes Agent（#79050已修复）、PicoClaw（#3269待修复）
**解读**：多项目同时暴露transcript livelock、branch切换误报、会话切换丢失等问题，反映当前智能体框架在**并发会话管理**上存在系统性缺陷。建议开发者关注：
- 会话ID旋转时的写入保护机制
- compaction超时隔离策略
- MCP服务故障时的降级容错

### 趋势2：跨Agent权限隔离从"可选"变为"必须"
**信号来源**：ZeroClaw（3个S0安全Bug）、NanoClaw（Agent间通信冲突）、IronClaw（跨会话记忆丢失）
**解读**：多Agent协作场景下，Knowledge graph归属、Session所有权、Webhook认证成为安全红线。ZeroClaw的`VerifiedWebhookIngress`类型化边界设计值得参考，建议架构设计时**尽早引入per-agent所有权校验**，避免后期重构成本。

### 趋势3：Telegram Bot API版本升级驱动插件生态竞争
**信号来源**：Hermes Agent（#78791 Meta Issue，14子需求）、NanoBot（Telegram私有化部署PR）
**解读**：Telegram Bot API 10.2引入菜单按钮、服务消息、企业账号等特性，成为插件能力竞赛点。Hermes的"战役式"推进（Meta Issue串联）模式值得借鉴，建议开发者**跟踪Telegram官方API变更**，提前布局企业级通信场景。

### 趋势4：推理模型超时竞态暴露非流式调用架构缺陷
**信号来源**：OpenClaw（#115908 transcript livelock）、Hermes Agent（#78862 Cron 600s超时）
**解读**：DeepSeek等reasoning model在非流式模式下易触发stale-stream检测竞态，导致进程假死。建议架构设计时：
- 引入独立stale-stream detector（Hermes PR #79143方案）
- 区分流式/非流式超时策略
- 为长推理场景预留fallback机制

### 趋势5：WebUI体验优化从"可用"转向"专业级"
**信号来源**：NanoBot（WebUI视觉重构、临时聊天模式）、LobsterAI（登录流程优化、Artifact预览控制）、PicoClaw（长历史输入卡顿）
**解读**：用户期望WebUI具备专业应用体验（Markdown渲染、时间戳Tooltip、输入性能）。建议开发者关注：
- 长列表虚拟滚动优化
- 临时会话与持久会话并存模式
- Vite HMR开发体验支持

---

**报告结束** | 数据截止：2026-08-05 | 生成：Agnes (Sapiens AI)

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报
**日期：2026-08-05**  
**数据来源：github.com/HKUDS/nanobot**

---

## 1. 今日速览

过去24小时 NanoBot 开发节奏活跃，21个 PR 中 16个已合并/关闭，合并率达 76%，整体贡献活跃度高。核心进展集中在 WebUI 体验优化（临时聊天模式、视觉一致性重构）和多个频道修复（Matrix、WeCom、Telegram）。安全类 Issue #4784（API密钥泄露）持续未关闭，需维护者关注。当前无新版本发布，项目处于功能迭代期。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（16条）

| PR | 作者 | 类型 | 核心内容 |
|----|------|------|----------|
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Re-bin | feat(webui) | 合并 Quick Chat + Temporary Chat 功能，持久化快速会话与临时会话并存 |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | chengyongru | refactor(webui) | WebUI 视觉一致性重构：统一菜单/弹窗/面板的层级系统，移除冗余动画 |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | chengyongru | fix(webui) | 修复 Agent Activity 面板边缘裁切问题，增加方向感知羽化效果 |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | chengyongru | refactor(session) | 移除请求级工具访问授权抽象，简化会话工具权限模型 |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | goodtiding5 | feat(mattermost) | 分离 Mattermost 群组/线程的 mention 策略配置，暴露至 WebUI |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | santhreal | fix(wecom) | 修复 WeCom 媒体文件名清理后为空时写入目录的 bug |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | concertypin | feat(webui) | 新增可信代理引导认证，支持 Cloudflare Tunnel 等场景 |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | santhreal | fix(telegram) | 修复 Telegram 代码块中特殊语言标签（如 `c++`、`html+django`）被截断的问题 |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | aoliaoduo | fix(telegram) | 补全 TelegramConfig 中缺失的 `group_mode` 字段定义 |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | chengyongru | fix(webui) | 修复 Prompt Rail 预览中 Markdown 未渲染的问题 |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | chengyongru | fix(webui) | 统一时间戳 Tooltip 样式，提升可访问性 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | Re-bin | refactor(webui) | 统一浮动控件样式，标准化 Menu/Popover/Combobox 语义 |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | chengyongru | fix(webui) | 自动化触发标记从消息体移至底部时间戳旁，视觉对齐优化 |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | chengyongru | fix(commands) | 拒绝格式错误的斜杠命令，提供 closest 命令建议 |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | chengyongru | feat(webui) | 集成 Vite 开发模式，支持 `nanobot webui --dev` 一键启动 |

**整体评估**：今日 PR 合并以 WebUI 体验和稳定性修复为主，16/21 的高合并率反映维护者响应积极，项目迭代效率良好。

---

## 4. 社区热点

### 高关注度 Issues

| Issue | 类型 | 摘要 | 活跃度 |
|-------|------|------|--------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | 🔴 Security | Provider API 密钥通过全局 `os.environ` 写入导致跨 Provider 泄漏 | 创建 9 天前，仍有评论，**未关闭** |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | 🟡 Enhancement | 请求在 WebUI 中支持 MCP Apps host（官方 `io.modelcontextprotocol/ui` 扩展） | 今日新开 |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | 🔴 Bug | Matrix bot 被邀请时无法自动加入房间，Continuwuity 拒绝空 POST body | 今日新开，已有对应 PR #5248 |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | 🟡 Enhancement | `.gitignore` 配置遗漏 `memory/.cursor` 和 `memory/history.jsonl` 文件 | 今日新开 |

### 高关注度 Open PR

| PR | 类型 | 摘要 |
|----|------|------|
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | feat(webui) | 新增临时聊天模式入口，复用现有 agent/tools/workspace 体系 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent) | 集成 mst-python 作为元搜索 Provider，聚合多引擎结果（RRF 融合） |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | fix(matrix) | 修复 Matrix 加入房间时发送空 POST body 导致 Continuwity 拒绝的问题 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram) | 支持 Telegram 自定义 Bot API Base URL 和额外请求头，适配私有化部署 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram) | 恢复 Telegram 静默挂起的 polling，修复网络抖动后永久收不到消息的回归 |

**热点分析**：安全类 Issue #4784 持续时间较长，社区对 API 密钥管理安全性存在关切；MCP Apps 支持和元搜索 Provider 反映用户对扩展能力的持续需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|----------|----------|------|----------|
| 🔴 严重 | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API 密钥通过全局 `os.environ` 泄漏 | ❌ 无对应 PR |
| 🔴 严重 | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix bot 被邀请后无法自动加入房间 | ✅ PR #5248 已提交 |
| 🟠 中等 | [#5223](https://github.com/HKUDS/nanobot/pull/5223) | WeCom 媒体文件名清理为空时写入目录 | ✅ 已合并 |
| 🟠 中等 | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram polling 静默挂起，永久收不到消息 | 🔄 待合并 |
| 🟡 低 | [#5246](https://github.com/HKUDS/nanobot/issues/5246) | `.gitignore` 遗漏 memory 子目录文件 | ❌ 无对应 PR |

**稳定性评估**：今日合并了多个频道稳定性修复，但安全类 Issue #4784 和 Telegram 静默挂起问题仍是潜在风险点。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 信号分析 |
|------|----------|----------|
| MCP Apps WebUI 支持 | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | 用户希望 MCP Server 可在 WebUI 中渲染自定义 UI 组件，契合 MCP 官方扩展规范 |
| 元搜索聚合 Provider | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR 已提交，RRF 融合多引擎结果，扩展搜索能力 |
| Telegram 私有化部署 | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | 支持自定义 Bot API Base URL，适配企业/自建网关场景 |
| 临时聊天模式 | [#5252](https://github.com/HKUDS/nanobot/pull/5252) | 复用现有 agent 体系，轻量级会话隔离 |
| Mattermost 线程策略 | [#5233](https://github.com/HKUDS/nanobot/pull/5233) | 群组与线程 mention 策略分离，提升频道灵活性 |

**路线图判断**：上述 5 项功能均已有 PR 推进，预计将纳入下一版本发布。MCP Apps 支持和元搜索是较明确的扩展方向。

---

## 7. 用户反馈摘要

| 痛点/场景 | 来源 |
|-----------|------|
| API 密钥跨 Provider 泄漏风险，用户担心多 Provider 部署安全性 | Issue #4784 |
| Matrix 机器人集成 Continuwity 时邀请无法自动加入，影响多租户部署 | Issue #5247 |
| Telegram 代码块语言标签含特殊字符（`c++`、`html+django`）时被截断，影响开发者体验 | PR #5222 |
| WeCom 媒体文件名含特殊字符时下载失败，影响文件接收功能 | PR #5223 |
| Telegram polling 在网络抖动后静默挂起且日志无报错，难以排查 | PR #5156 |
| WebUI 快捷操作入口不足，用户希望临时会话与持久化快速会话并存 | PR #5184 / #5252 |
| 开发者期望本地开发时一键启动 WebUI + Vite HMR | PR #5239 |

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 建议 |
|----------|------|----------|------|------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | 🔴 Security | 2026-07-06 | OPEN，9天未关闭 | 需优先处理，建议维护者评估 `os.environ` 作用域隔离方案 |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | 🟡 Enhancement | 2026-08-04 | OPEN | 低优先级，补充 `.gitignore` 即可修复 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | 🟠 Bug Fix | 2026-07-29 | OPEN，待合并 | Telegram 稳定性关键修复，建议尽快合入 |

---

**项目健康度总结**：NanoBot 当前开发节奏健康，PR 合并效率高（76%），WebUI 体验和频道稳定性持续改进。需重点关注安全类 Issue #4784 的响应进度，以及 Telegram 静默挂起问题的合入。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目日报 — 2026-08-05

---

## 1. 今日速览

过去 24 小时内 Hermes Agent 项目保持高强度活跃度：**50 条 Issue 更新、50 条 PR 更新**，其中 44 条 Issue 为新开或活跃状态，9 条 PR 已合并/关闭，另有 6 条 Issue 被关闭。无新版本发布，整体处于功能迭代与 Bug 修复并行期。今日社区热点集中在 **Telegram Bot API 10.2 特性对齐战役**（#78791 元 Issue，4 条评论）、**桌面端会话状态/崩溃问题**（#55498、#79050 均已关闭，#76245、#61457 仍待处理）以及 **Cron 与 reasoning model 的超时竞态 Bug**（#78862，已有 PR #79143 跟进）。项目代码健康度指标良好：god-file 重构（#78647、#78628）持续推进，原子写入修复（#79137）已合并，基础设施稳定性在逐步提升。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR（9 条）

| PR | 摘要 | 影响 |
|---|---|---|
| [#64349](https://github.com/NousResearch/hermes-agent/pull/64349) | 新增 `Concierge` 远程 MCP（x402 市场情报 + Security Desk） | 扩展 MCP 生态，支持链上支付结算 |
| [#79137](https://github.com/NousResearch/hermes-agent/pull/79137) | 使 `profile.yaml` 和 skin YAML 写入原子化 | 修复 SIGINT/crash 中途写入导致字段静默丢失的严重隐患 |
| [#79144](https://github.com/NousResearch/hermes-agent/pull/79144) | 常规更新 | — |

### 已关闭的 Issue（6 条）

- **[Close #55498](https://github.com/NousResearch/hermes-agent/issues/55498)** — Dashboard BasicAuthProvider 崩溃（`NotImplementedError`）：非回环地址绑定 + basic_auth 的 OAuth 重定向路径缺失问题已解决。
- **[Close #57757](https://github.com/NousResearch/hermes-agent/issues/57757)** — Desktop 启动时强制激活 Default profile：已确认根因并在后续 PR 中修复。
- **[Close #78887](https://github.com/NousResearch/hermes-agent/issues/78887)** — `codex_app_server` 忽略 `codex_binary`/`codex_home` 配置：标记为 duplicate，已归档。
- **[Close #79050](https://github.com/NousResearch/hermes-agent/issues/79050)** — Desktop 会话切换丢失已完成的 turn：hydrate 路径用过期 store 数据覆盖本地 pending 状态的问题已修复。
- **[Close #79091](https://github.com/NousResearch/hermes-agent/issues/79091)** — 自定义 provider 间歇性 API 连接错误：已关闭（原因待标注）。
- **[Close #79113](https://github.com/NousResearch/hermes-agent/issues/79113)** — multiplex 模式下 `profile_routes` 残留 `HERMES_HOME` 于二级 profile：已关闭。

### 进行中的关键 PR（精选）

- **[PR #79150](https://github.com/NousResearch/hermes-agent/pull/79150)** — 修复 `vision_analyze` 在 callable API key + 自定义 OpenAI endpoint 下的 `AttributeError` 崩溃（关联 #79121）
- **[PR #79149](https://github.com/NousResearch/hermes-agent/pull/79149)** — 修复 `_seed_custom_pool()` 忽略 `key_env` 导致自定义 provider 凭证池为空（关联 #79130）
- **[PR #79151](https://github.com/NousResearch/hermes-agent/pull/79151)** — 修复 terminal 工具因绝对路径含空字节导致的 `ValueError` 崩溃（关联 #79148）
- **[PR #79143](https://github.com/NousResearch/hermes-agent/pull/79143)** — 延长 Cron 对 reasoning model 的非流式超时容忍，解决 600s 竞态导致的假死（关联 #78862）
- **[PR #79142](https://github.com/NousResearch/hermes-agent/pull/79142)** — 恢复 Desktop 按 profile 作用域的路由导航（#67709 的 rebase）
- **[PR #79098](https://github.com/NousResearch/hermes-agent/pull/79098)** — 新增 `memory.changed` 广播事件，替代轮询实现即时 UI 刷新
- **[PR #79031](https://github.com/NousResearch/hermes-agent/pull/79031)** — 修复钉钉 Stream 连接静默断连（~3 分钟无消息后 TCP 未关闭）
- **[PR #79146](https://github.com/NousResearch/hermes-agent/pull/79146)** — WhatsApp 群组白名单支持从 profile 环境变量加载
- **[PR #79145](https://github.com/NousResearch/hermes-agent/pull/79145)** — 修复 Claude 4.6+ / Fable 模型拒绝 assistant 消息 prefill 的 `HTTP 400` 问题
- **[PR #78216](https://github.com/NousResearch/hermes-agent/pull/78216)** — 移除 GPT-5.6 系列 `ultra → max` 硬编码 clamp，适配不同 provider 能力
- **[PR #78368](https://github.com/NousResearch/hermes-agent/pull/78368)** — 修复 Dashboard 中会话恢复误入 delegate subagent 的问题
- **[PR #72697](https://github.com/NousResearch/hermes-agent/pull/72697)** — Windows 上 Cron 优先使用 Git Bash 执行 `.sh` 脚本
- **[PR #59886](https://github.com/NousResearch/hermes-agent/pull/59886)** — systemd/launchd 服务 PATH 补全 `~/bin`
- **[PR #73537](https://github.com/NousResearch/hermes-agent/pull/73537)** — 修复 SSE 流中 `MEDIA:` 标签跨 chunk 分割导致的媒体路径解析失败
- **[PR #53448](https://github.com/NousResearch/hermes-agent/pull/53448)** — 统一 `content_hash` 与 `bundle_content_hash` 的排序方式，修复跨平台哈希不一致

---

## 4. 社区热点

| 主题 | 链接 | 热度分析 |
|---|---|---|
| **MiniMax-M3 interleaved thinking 在首次 tool call 后停止思考** | [Issue #75725](https://github.com/NousResearch/hermes-agent/issues/75725) | 5 条评论，P3。用户反映 `/anthropic` endpoint 下 MiniMax-M3 第二轮起链式思维中断，影响多轮 tool-use 场景。 |
| **Telegram Bot API 10.2 特性对齐战役（Meta Issue）** | [Issue #78791](https://github.com/NousResearch/hermes-agent/issues/78791) | 4 条评论，P3。由 `@andrexibiza` 发起，将 Bot API 10.2 的 14 个子需求全部串联，覆盖菜单按钮、服务消息、企业账号、指令管理等，是 Telegram 插件最大规模的特性补齐行动。 |
| **Cron 对 reasoning model 非流式调用的 600s 超时竞态** | [Issue #78862](https://github.com/NousResearch/hermes-agent/issues/78862) | 3 条评论，P2。DeepSeek 等 reasoning model 在非流式模式下挂起时，stale-stream detector 来不及触发，Cron 进程直接超时死亡，无 fallback 机制。已有 PR #79143 跟进。 |
| **Desktop 退出时 backend 进程未被可靠清理（孤儿进程）** | [Issue #76245](https://github.com/NousResearch/hermes-agent/issues/76245) | 3 条评论，P3。Electron `before-quit` 发送 SIGTERM 后未等待进程真正退出，导致 `hermes serve` 孤儿残留。 |
| **Desktop 远程 gateway session cookie 登录后立即 401 循环** | [Issue #61457](https://github.com/NousResearch/hermes-agent/issues/61457) | 3 条评论，P3，安全边界标记。Basic auth 登录后 WS 连接短暂建立随即被 `hermes:api` REST 调用拒绝，session 无法持久化。 |

**热点分析**：社区当前关注焦点高度集中于 **多模态/推理模型集成稳定性**（MiniMax、DeepSeek、Claude prefill 拒绝）和 **桌面端体验**（会话状态、进程生命周期、认证持久化）。Telegram 插件因 Bot API 10.2 更新而成为功能性需求爆发点，反映出用户对该平台集成深度的强烈诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P2 — 高影响

| Issue | 摘要 | Fix PR |
|---|---|---|
| [#78862](https://github.com/NousResearch/hermes-agent/issues/78862) | Cron + reasoning model 非流式调用 600s 超时竞态，进程直接死亡 | [PR #79143](https://github.com/NousResearch/hermes-agent/pull/79143) |
| [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) | Desktop 退出时 backend 孤儿进程 | 尚无 PR |
| [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) | Desktop 远程 basic-auth 登录后 session 立即失效（401 循环） | 尚无 PR |

### 🟡 P3 — 中等影响

| Issue | 摘要 | Fix PR |
|---|---|---|
| [#79121](https://github.com/NousResearch/hermes-agent/issues/79121) | `vision_analyze` 在 callable API key + 自定义 endpoint 下崩溃 | [PR #79150](https://github.com/NousResearch/hermes-agent/pull/79150) |
| [#79148](https://github.com/NousResearch/hermes-agent/issues/79148) | terminal 工具因绝对路径含空字节 `ValueError` 崩溃 | [PR #79151](https://github.com/NousResearch/hermes-agent/pull/79151) |
| [#79130](https://github.com/NousResearch/hermes-agent/issues/79130) | 自定义 provider 的 `key_env` 未被解析，凭证池为空 | [PR #79149](https://github.com/NousResearch/hermes-agent/pull/79149) |
| [#79100](https://github.com/NousResearch/hermes-agent/issues/79100) | tool-call 恢复后 length-continuation 计数器未重置 | 尚无 PR |
| [#73454](https://github.com/NousResearch/hermes-agent/issues/73454) | Desktop Artifacts 面板将 Unix 秒级时间戳误判为毫秒（显示 1970 年） | 尚无 PR |
| [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | Windows Desktop 启动时双重 backend 进程（venv + uv），GIL 竞争导致 gateway ready 帧延迟 | 尚无 PR |
| [#78216](https://github.com/NousResearch/hermes-agent/pull/78216) | GPT-5.6 `ultra` 推理力度被硬编码 clamp 为 `max` | [PR #78216](https://github.com/NousResearch/hermes-agent/pull/78216)（进行中） |
| [#78368](https://github.com/NousResearch/hermes-agent/pull/78368) | Dashboard 会话恢复误入 delegate subagent | [PR #78368](https://github.com/NousResearch/hermes-agent/pull/78368)（进行中） |

### 🟢 已关闭/已修复

- [#55498](https://github.com/NousResearch/hermes-agent/issues/55498) — BasicAuthProvider 崩溃
- [#57757](https://github.com/NousResearch/hermes-agent/issues/57757) — Desktop 强制激活 Default profile
- [#79050](https://github.com/NousResearch/hermes-agent/issues/79050) — Desktop 会话切换丢失消息
- [#79113](https://github.com/NousResearch/hermes-agent/issues/79113) — multiplex profile_routes 残留 HERMES_HOME

---

## 6. 功能请求与路线图信号

| 需求方向 | 关联 Issue/PR | 纳入下一版本可能性 |
|---|---|---|
| **Telegram Bot API 10.2 全量对齐** | [Issue #78791](https://github.com/NousResearch/hermes-agent/issues/78791) + 14 个子 Issue | ⭐⭐⭐⭐⭐ 高优先级，meta-issue 已建立，预计分批次在 0.21+ 版本落地 |
| **Telegram 菜单按钮、企业账号、指令管理** | #78789、#78786、#78782、#78783、#78781 | 同上，作为 Telegram 战役的一部分推进 |
| **Telegram 服务消息（ChatOwnerLeft/Changed）暴露** | [Issue #78771](https://github.com/NousResearch/hermes-agent/issues/78771) | ⭐⭐⭐ 中等，属于 Telegram 战役的子集 |
| **Telegram callback query 未处理导致客户端 spinner 永驻** | [Issue #78788](https://github.com/NousResearch/hermes-agent/issues/78788) | ⭐⭐⭐⭐ 高优先级，影响用户体验的已知缺陷 |
| **Telegram setMyShortDescription 被误用作在线状态指示器** | [Issue #78784](https://github.com/NousResearch/hermes-agent/issues/78784) | ⭐⭐⭐ 中等，属于行为修正 |
| **memory.changed 广播事件** | [PR #79098](https://github.com/NousResearch/hermes-agent/pull/79098) | ⭐⭐⭐⭐ 高，已在 PR 阶段，将替代轮询方案 |
| **MCP Concierge 远程工具（x402 市场情报）** | [PR #64349](https://github.com/NousResearch/hermes-agent/pull/64349) | ⭐⭐⭐ 已合并，纳入可选 MCP 生态 |
| **WhatsApp 群组白名单支持 profile 环境变量** | [PR #79146](https://github.com/NousResearch/hermes-agent/pull/79146) | ⭐⭐⭐ 中等，完善平台配置灵活性 |
| **god-file 重构（hermes_cli/web_server.py 17,700 行）** | [Issue #78628](https://github.com/NousResearch/hermes-agent/issues/78628)、[Issue #78647](https://github.com/NousResearch/hermes-agent/issues

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 — 2026-08-05

---

## 1. 今日速览

PicoClaw 昨日社区活跃度中等，共新增 3 个 Issue 与 4 个 PR。两项已合并的 PR 分别修复了 OAuth 登录认证流程及 Anthropic 提供商的 prompt cache token 统计缺失问题，直接改善生产环境可用性与可观测性。同时，两个新开的 open PR 分别推进了 Exa 原生搜索提供商接入与 LLM 响应调试日志增强。整体项目处于稳定的迭代节奏，无新版本发布。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

**今日已合并/关闭的 PR：**

- **[PR #3280](https://github.com/sipeed/picoclaw/pull/3280)** — `fix(auth): 使浏览器 OAuth 登录在真实回调条件下保持存活`
  修复了 `picoclaw auth login --provider <oauth-provider>` 在无头/远程部署场景下普遍失败的问题。问题根因为用户在完成授权同意后，回调环节仍因四种独立原因失败，导致授权码被消耗且整个流程需重来。本次修复提升了远程部署体验。

- **[PR #3251](https://github.com/sipeed/picoclaw/pull/3251)** — `fix(providers): 在 Anthropic 提供商中捕获 prompt cache token 用量`
  修复了 Anthropic SDK provider 与 Anthropic Messages API provider 丢弃 Claude 返回的缓存相关 token 指标的问题，使运维人员能够确认 prompt cache 是否正常工作。

**整体评估：** 今日两项合并均聚焦于可观测性与认证流程稳定性，项目向生产环境可靠性方向稳步迈进。

---

## 4. 社区热点

**Issue #3281** — [Web UI 聊天输入在会话历史较长时严重卡顿](https://github.com/sipeed/picoclaw/issues/3281)
- 评论：3 | 👍：1 | 状态：OPEN
- 用户 `xpader` 报告在 PicoClaw 0.3.1 版本中，当单个会话历史较长时，Web UI 输入框输入明显延迟。该问题直接影响日常使用体验，且已获社区点赞关注，反映出前端渲染性能是一个亟待优化的方向。

**Issue #3269** — [MCP 服务器连接失败导致 agent 循环挂起，界面停止响应](https://github.com/sipeed/picoclaw/issues/3269)
- 评论：3 | 👍：1 | 状态：OPEN
- 用户 `ruiyigen` 报告在 nightly 版本中，MCP 服务器连接失败会导致 agent 循环挂起，chat 界面完全停止回复。这是一个严重的功能性 Bug，涉及核心 agent 执行链路的容错机制。

> **热点分析：** 两个活跃 Issue 均指向稳定性与用户体验的核心痛点——前端性能与后端容错。两者均已有 1 个 👍，说明社区有较强共鸣，建议维护者优先处理。

---

## 5. Bug 与稳定性

| 严重级别 | Issue | 描述 | 状态 | Fix PR |
|---------|-------|------|------|--------|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败导致 agent 循环挂起，界面停止响应 | OPEN | 暂无 |
| 🟡 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史会话输入严重卡顿 | OPEN | 暂无 |
| 🟢 低 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 版本无法启动服务、无法更改路径 | CLOSED (stale) | — |

> Issue #3182 因长期无响应已被标记为 stale 并关闭，Android 平台支持问题可能需重新评估。

---

## 6. 功能请求与路线图信号

- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — 新增原生 Exa 网页搜索提供商
  作为 `tools.web` / `web_search` 的新 provider 接入，支持 `POST /search` API、`type: "auto"` 及 `contents.highlights`，并兼容现有时间范围过滤器。该 PR 已 open，若合并将为 PicoClaw 扩展搜索引擎生态。

- **[PR #3317](https://github.com/sipeed/picoclaw/pull/3317)** — 在 LLM 响应调试日志中输出 prompt cache token 信息
  扩展 gateway 的 debug 日志，使其能显示 DeepSeek 等提供商返回的缓存元数据（如 `cached_prompt_tokens`）。与已合并的 PR #3251 形成互补，进一步完善可观测性体系。

> **路线图判断：** PR #3299 属于功能扩展型 PR，有望纳入下一版本；PR #3317 属于可观测性增强，可能随后续迭代合并。

---

## 7. 用户反馈摘要

- **远程/无头部署认证体验差：** PR #3280 的修复源于真实用户反馈——OAuth 登录在完成授权后仍频繁失败，尤其在远程服务器场景下。用户痛点在于每次失败都需从头开始，严重影响部署效率。
- **Web UI 前端性能待优化：** Issue #3281 表明用户在长期使用中积累会话历史后遇到输入卡顿，反映出前端在长列表渲染或状态管理上存在性能瓶颈。
- **MCP 容错机制缺失：** Issue #3269 揭示了 agent 循环对 MCP 服务可用性的强依赖，一旦下游服务异常即导致整个对话链中断，用户希望有降级或超时恢复机制。
- **Android 端支持不完善：** Issue #3182 虽已 stale 关闭，但反映出移动端（尤其是 Android）在路径配置和服务启动方面存在适配问题，值得后续关注。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 备注 |
|------|------|------|---------|------|
| 🐛 Bug | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 agent 挂起 | 2026-07-20 | 严重，无 fix PR |
| 🐛 Bug | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史输入卡顿 | 2026-07-21 | 用户体验影响大 |
| 🆕 PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增 Exa 原生搜索提供商 | 2026-07-26 | 待评审 |
| 🆕 PR | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | LLM 响应日志增加 cache token | 2026-08-04 | 今日新建，待评审 |
| ⚠️ Stale | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 版本服务无法启动 | 2026-06-26 | 已关闭，但问题未解决 |

> **维护者提示：** Issue #3269 和 #3281 均为高影响 Bug，建议优先分配资源。PR #3299 功能价值明确，可加速评审流程。Android 平台问题虽已 stale 关闭，但建议跟踪是否有社区志愿者跟进。

---

**项目健康度评估：** 🟡 中等偏上 — 合并活动稳定，Bug 响应及时，但存在两个需关注的高优先级稳定性问题，Android 端支持有待加强。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报
**日期：2026-08-05** | 数据来源：GitHub nanoclaw

---

## 1. 今日速览

今日 NanoClaw 项目保持中等活跃度，社区贡献者持续推进渠道集成与 Agent 内部通信机制的优化。过去 24 小时内共处理 6 条 PR（含 1 条已合并）和 1 条 Issue 更新。核心开发方向聚焦于语音/短信渠道适配（Dial channel）及 Discord 交互修复，同时修复了 Agent 调度任务的当前时间传递问题。项目整体向前迈进，功能扩展与稳定性维护并行推进。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 类型 | 作者 | 说明 |
|----|------|------|------|
| [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | Fix | Koshkoshinsk | 修复 Agent 调度任务未能传递当前运行时的问题 |

**核心进展：**
- **Agent 调度修复**（#3154）：解决定时任务执行时无法获取当前时间的 Bug，增强调度可靠性。
- **Discord 交互修复**（#3185，待合并）：修复 webhook 回调中 `custom_id` 解析错误导致所有审批被拒绝的问题。
- **Agent 间通信加固**（#3187，待合并）：禁止内置 `SendMessage`，确保 Agent 间消息路由机制正常工作。

---

## 4. 社区热点

### 高关注度 Issue/PR

**[Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006)** — Debian 12 LXC 安装权限问题
- 作者：dooha333
- 状态：Open（更新于 2026-08-05）
- 痛点：fresh install 脚本在 LXC 容器环境中添加用户到 docker 组后，同一会话中后续步骤仍报权限拒绝，恢复路径未触发。
- 诉求：完善容器化部署的权限处理逻辑，支持 LXC/docker-in-container 场景。

**[PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185)** — Discord webhook 审批按钮失效修复
- 作者：omerh
- 状态：Open
- 影响：修复所有 Discord 审批操作被错误拒绝的严重 Bug，直接影响用户体验。

---

## 5. Bug 与稳定性

| 严重级别 | 问题 | PR 状态 | 链接 |
|----------|------|---------|------|
| 🔴 高 | Discord 审批按钮全部失败（每次点击均被拒绝） | #3185 待合并 | [PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185) |
| 🟡 中 | Agent 调度任务时间传递错误 | #3154 已合并 | [PR #3154](https://github.com/nanocoai/nanoclaw/pull/3154) |
| 🟡 中 | LXC 容器 Docker 权限问题导致安装失败 | 无 fix PR | [Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006) |
| 🟢 低 | Agent 间消息路由异常（内置 SendMessage 冲突） | #3187 待合并 | [PR #3187](https://github.com/nanocoai/nanoclaw/pull/3187) |

---

## 6. 功能请求与路线图信号

### 新增渠道功能（Dial Channel）

两条功能 PR 同时推进，信号明确：

- **[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)** — 新增 Dial channel adapter，支持 SMS 和 AI 语音通话
- **[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — 在渠道选择器和向导中加入 Dial，完善 `runChannelSkill` 模型

**判断：** 语音/短信渠道集成已进入功能成熟阶段，预计将在下一版本正式推出，扩展 NanoClaw 的多模态交互能力。

---

## 7. 用户反馈摘要

| 场景 | 反馈内容 | 来源 |
|------|----------|------|
| 容器化部署 | LXC 环境中 Docker 权限处理不完整，`usermod` 后组变更未在当前 shell 生效 | Issue #2006 |
| Discord 集成 | 审批卡片按钮完全失效，影响所有需要人工确认的 Agent 操作流 | PR #3185 |
| 定时任务 | 调度任务执行时无法获取"当前时间"，影响依赖时间的业务逻辑 | PR #3154（已修复） |
| Agent 通信 | 内置 SendMessage 与 Agent 间消息路由冲突，需明确边界 | PR #3187 |

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 关注建议 | 链接 |
|------|------|------|----------|------|
| Issue | #2006 | Debian 12 LXC Docker 权限问题 | 需维护者确认 LXC 场景的兼容方案 | [Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006) |
| PR | #3187 | 修复 Agent 间 SendMessage 冲突 | 合并后可改善多 Agent 协作稳定性 | [PR #3187](https://github.com/nanocoai/nanoclaw/pull/3187) |
| PR | #3185 | Discord 审批修复 | 高优先级，影响核心用户流程 | [PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185) |
| PR | #3186 | 重构：为 skill 能力添加 host seams | 架构优化，建议 review | [PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186) |

---

**项目健康度评估：** 🟢 良好 — 6 条 PR 中 5 条活跃开发、1 条已合并，社区贡献节奏稳定；Bug 修复与功能扩展并行，Dial 渠道集成显示产品方向清晰。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 — 2026-08-05

---

## 1. 今日速览

NullClaw 项目今日整体活跃度**偏低**。过去24小时内无新 Issue 提交，无新版本发布，社区处于相对平静期。唯一值得关注的是 PR #981 仍在开放状态，等待维护者 review 与合并。项目当前无紧急 Bug 或阻塞性问题，整体健康度稳定，但 contributor 活跃度有待提升。

---

## 2. 版本发布

今日无新版本发布（Releases: 0）。

---

## 3. 项目进展

**待合并 PR：**

- **[PR #981](https://github.com/nullclaw/nullclaw/pull/981)** — `feat(provider): add grok-cli provider for xAI Grok CLI`
  - 作者：valonmulolli | 创建：2026-07-29 | 最后更新：2026-08-04
  - 引入 xAI Grok CLI 作为可选 Provider，沿用项目已有的 `spawn-per-request` 模式（与 `codex-cli` / `gemini-cli` / `claude-cli` 一致）。该 PR 若合并，将进一步扩充 NullClaw 支持的本地 CLI 模型供应方生态。
  - **当前状态：OPEN，尚未合并。**

> **进度评估**：今日无 PR 被合并或 Issue 被关闭，项目整体处于停滞状态，进展幅度为 0。

---

## 4. 社区热点

今日无活跃 Issue 或高评论 PR，社区暂无热点讨论。

- 唯一待处理 PR #981（[链接](https://github.com/nullclaw/nullclaw/pull/981)）由 contributor 于 7 月 29 日提交，已等待维护者 review 超过一周，评论数为 0，尚未触发社区讨论。

---

## 5. Bug 与稳定性

今日无新增 Bug 报告，无崩溃或回归问题记录。

---

## 6. 功能请求与路线图信号

**信号：本地 CLI Provider 生态持续扩展**

- PR #981 提出新增 `grok-cli` provider，表明社区用户对**本地 CLI 调用 xAI Grok** 的需求。该功能与已有的 `codex-cli` / `gemini-cli` / `claude-cli` provider 形成完整覆盖，符合 NullClaw 整合多源本地 AI CLI 工具的战略方向。
- 若 PR #981 被合并，下一版本（如 v0.x+1）的 Provider 矩阵将新增 xAI Grok 支持。

---

## 7. 用户反馈摘要

今日无新 Issue，无法提炼最新用户反馈。

- PR #981 摘要中提到 `grok-cli` 为**可选 Provider**，需用户本地安装 `grok` CLI 并完成认证，暗示用户关注**配置简洁性**与**本地工具链集成**体验。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 链接 |
|------|------|------|----------|------|------|
| PR | #981 | feat(provider): add grok-cli provider for xAI Grok CLI | 2026-07-29 | OPEN（待合并） | [PR #981](https://github.com/nullclaw/nullclaw/pull/981) |

> **维护者提醒**：PR #981 已开放约 7 天，暂无 review 反馈。建议优先处理该 PR 的代码审查，以推进 Provider 生态扩展。

---

**整体健康度评级：🟡 平稳但低活跃** — 无阻塞问题，但 contributor 活跃度和维护者响应速度有待提升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-08-05

---

## 1. 今日速览

IronClaw 今日保持**高活跃**状态，过去24小时共处理 50 条 Issue 和 50 条 PR，其中 13 个 Issue 和 23 个 PR 已关闭/合并，27 个 PR 仍处于待合并状态，整体进展节奏健康。项目核心工作集中在 **WS（Wave Structure）架构重构**——BenKurrek 主导的 WS2/WS3/WS4/WS5/WS6 系列 PR 大量落地，同时 `v1.1.0-rc.1` Release Candidate 已于 8 月 3 日发布，标志着 1.1.0 正式版进入收尾阶段。

---

## 2. 版本发布

### `ironclaw-v1.1.0-rc.1`（2026-08-03）

**核心更新：**
- **MCP 扩展能力**：支持注册任意托管 MCP 服务器，扩展 agent 工具生态
- **IronHub 深度链接安装**：支持通过深度链接直接从 IronHub 安装工具/技能
- **跨通道持久化文件附件**：文件附件可在不同会话通道间保持可访问性
- **Slack `/ironclaw` slash 命令**：通过 Slack 交互触发 agent 操作
- **错误恢复性全面增强**：确保 mid-run 错误可被模型感知并重试恢复

**破坏性变更与迁移注意：**
- `ironclaw_common` 0.4.2 → 0.5.0（⚠ API 破坏性变更，`failure copy_impl_added` 类型变更）
- `ironclaw_skills` 0.3.0 → 0.4.0（⚠ API 破坏性变更）
- `ironclaw_safety` 0.2.2 → 0.2.3（✓ API 兼容）
- Issue #7178 明确提示 `1.0.0-rc.1 → 1.1.0-rc.1` 的启动迁移**当前非无损**，需关注相关修复 PR 进展

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 内容 |
|----|------|------|
| [#7181](https://github.com/nearai/ironclaw/pull/7181) [CLOSED] | BenKurrek | Waves 0–4 batch 2：注册到零、adapter_registry 迁移、规则化决策累积（与 #7170 零冲突合并） |
| [#7190](https://github.com/nearai/ironclaw/pull/7190) [CLOSED] | BenKurrek | WS6：从 composition 驱逐 policy cluster，切断 product→loop_host |
| [#7189](https://github.com/nearai/ironclaw/pull/7189) [CLOSED] | BenKurrek | WS2：清除 extension_host→product 残留（auth/conversations 词汇、自由函数、D-A 工厂端口） |
| [#7187](https://github.com/nearai/ironclaw/pull/7187) [CLOSED] | BenKurrek | WS6：RebornRuntime 瘦身、typed ExtensionId、domain 清理、ref-store 折叠 |
| [#7186](https://github.com/nearai/ironclaw/pull/7186) [CLOSED] | BenKurrek | WS6：从 composition 驱逐 service cluster（admin users、trace capture、route mounts 等） |
| [#7179](https://github.com/nearai/ironclaw/pull/7179) [CLOSED] | BenKurrek | WS6：剩余三个模块章程（mcp 单文件拆分、auth 双引擎、webui） |
| [#7175](https://github.com/nearai/ironclaw/pull/7175) [CLOSED] | BenKurrek | WS3 收尾：`LAYER_MATRIX_EXCEPTIONS` 归零（1 → 0） |
| [#7174](https://github.com/nearai/ironclaw/pull/7174) [CLOSED] | BenKurrek | WS5：adapter_registry 解析迁移至 contracts/registry owners |
| [#7172](https://github.com/nearai/ironclaw/pull/7172) [CLOSED] | BenKurrek | WS4/WS6：三条规则化决策执行（triggers/hooks SQL ADRs + identity binding-store 收敛） |
| [#6970](https://github.com/nearai/ironclaw/pull/6970) [CLOSED] | elliotBraem | 文档升级：移除 Reborn 术语，更新工具/频道/技能文档 |

**整体判断：** 架构重构 Wave 0–6 已完成大部分落地，`LAYER_MATRIX_EXCEPTIONS` 归零标志 Wave 3 正式关闭。WS7（family directory moves）已启动（[#7206](https://github.com/nearai/ironclaw/pull/7206)），项目正在向更清晰的 crate 家族目录结构演进。

---

## 4. 社区热点

### 评论最多的 Issues

| Issue | 评论数 | 状态 | 核心议题 |
|-------|--------|------|----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 15 | CLOSED | **错误恢复性最终战役**：模型需能从 100% 错误中恢复，满足五项可恢复性契约 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 4 | CLOSED | **Hermetic 能力与旅程测试平台**：解决"每个能力是否都有确定性覆盖"的机械验证问题 |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | 4 | CLOSED | **Clippy 代码风格**：main 在 `{ironclaw, ironclaw_reborn_config}` 包集下 fails clippy |

### 热点分析
- **#6284** 的高讨论量反映了社区对 agent 错误恢复能力的深度关注，这是 v1.1.0 的核心卖点之一。
- **#6524** 涉及测试平台的基础设施级建设，说明项目正从"功能开发"向"质量保障体系化"转型。
- **#7119** 暴露了 monorepo 多包场景下 lint 一致性挑战，已关闭表明 CI 质量门禁正在收紧。

---

## 5. Bug 与稳定性

### 高优先级 Bug

| Issue | 严重度 | 描述 | Fix PR |
|-------|--------|------|--------|
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | 中 | Instance 删除失败，重新登录后"Loading your agents..."卡死 | — |
| [#7192](https://github.com/nearai/ironclaw/issues/7192) | 中 | Optimistic user messages 渲染在 agent 输出下方，对话顺序错乱 | [#7205](https://github.com/nearai/ironclaw/pull/7205) 已关联 |
| [#7191](https://github.com/nearai/ironclaw/issues/7191) | 中 | `builtin.time` 缺少相对偏移算术，`input_error()` 不可读 | — |
| [#7168](https://github.com/nearai/ironclaw/issues/7168) | 高 | Agent 安装的 skill 不可见：`skill_install` 写入路径与 discovery 读取路径不一致 | 已关闭，待确认根因 |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | 高 | 跨会话记忆不可靠：同一 workspace 不同 conversation 间上下文丢失 | — |
| [#7180](https://github.com/nearai/ironclaw/issues/7180) | 中 | Web scraping 不稳定，agent 有时用 http tool 替代 web_search 导致成功率低 | — |

### 稳定性趋势
- **#7168** 已关闭但为 skill 安装机制的根因问题，需关注是否彻底修复。
- **#7185**（跨会话记忆）和 **#7180**（web scraping）来自 Champions 用户反馈，代表生产环境的真实痛点，建议纳入 v1.1.0 修复清单。
- **#7151** 揭示了 composition mass gate 的 share-based 预算机制存在 feature inflow 污染分母的问题，属于架构级稳定性隐患。

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 纳入 v1.1.0 可能性 |
|-------|----------|-------------------|
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | 共享 Slack channel 作为 outbound delivery target | 高（与 IronHub 集成配套） |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | 手动触发 automation（run-now） | 中（v1.1.0 候选功能） |
| [#7177](https://github.com/nearai/ironclaw/issues/7177) | 基于 schema 的 ranked tool retrieval 替代 name-only 匹配 | 中（deferred tool disclosure 优化） |
| [#7203](https://github.com/nearai/ironclaw/issues/7203) | 技能文件通过 mount 而非 copy 暴露给进程 | 低（架构优化，可能 v1.2.0） |
| [#7183](https://github.com/nearai/ironclaw/issues/7183) | per-user LLM 模型选择（当前仅 admin 可配置） | 中（用户定制化需求） |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Skill Discovery、Routing、Activation 可靠性 Epic | 高（核心能力，持续投入） |
| [#7105](https://github.com/nearai/ironclaw/issues/7105) | 独立 identity/session 与 payments 服务评估 | 低（长期架构演进） |

**路线图信号：** 项目正围绕 **Skill 生态**（IronHub 集成、skill 发现/激活/路由）和 **渠道交付**（outbound delivery、Slack slash 命令）双线推进，同时 WS 架构重构为 v1.1.0 后的可扩展性奠定基础。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Champions 周会反馈）
1. **跨会话上下文丢失**（#7185）： Devon（legal）反映 agent 无法获取之前 conversation 中的信息，影响连续任务执行。
2. **LLM 模型选择权受限**（#7183）： Jeremy Koch 提出用户希望自主切换底层模型，当前仅 admin 可配置。
3. **Web scraping 不稳定**（#7180）： Michael Kelly 反馈数据爬取成功率波动大，agent 有时错误选择 http tool 而非 web_search。

### 正面反馈
- **错误恢复能力**（#6284）：社区对模型从错误中自愈的机制高度关注，认为这是 agent 实用化的关键里程碑。
- **IronHub 集成**（#6731）：将工具/技能从构建时固定列表变为运行时可扩展市场，被广泛认可为重要价值提升。

### 用户体验改进建议
- **#7204**（WebUI composer 聚焦）：用户希望打开 thread 时自动聚焦输入框并清除 accent ring，减少操作摩擦。
- **#7199**（Skill 效果日志）：用户建议区分"候选 skill 未被选择"和"被选中并改变了最终答案"的日志，便于效果归因。

---

## 8. 待处理积压

| Issue/PR | 状态 | 风险等级 | 建议关注点 |
|----------|------|----------|------------|
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | OPEN | 中 | WS2 extension_host→loops re-layer，依赖 #7092 后续，需跟进是否阻塞 Wave 进度 |
| [#7144](https://github.com/nearai/ironclaw/issues/7144) | OPEN | 中 | Trace contribution pipeline 缺陷，CodeRabbit review 发现 40 个线程中 29 个为 pre-existing 问题 |
| [#7147](https://github.com/nearai/ironclaw/issues/7147) | OPEN | 高 | 两个 shrink-only architecture ratchets 携带 untracked slack，三 PR 持有不同 baseline 值 |
| [#7178](https://github.com/nearai/ironclaw/issues/7178) | OPEN | 高 | 1.0.0-rc.1 → 1.1.0-rc.1 启动迁移非无损，影响升级体验，需尽快修复 |
| [#7201](https://github.com/nearai/ironclaw/issues/7201) | OPEN | 低 | OutboundStateStore 的 PostgreSQL/libSQL con

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 📋 LobsterAI 项目动态日报
**日期：2026-08-05 | 数据来源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日整体活跃度中等偏高，过去 24 小时内共处理 **14 条 PR**（11 条已合并/关闭、3 条待合并），**1 条 Issue 保持活跃**。项目核心重心集中在 **启动积分活动（Startup Credit Campaign）** 的功能打磨与发布准备，版本 `2026.8.3` 已完成合并进入发布流程。依赖层面由 Dependabot 批量推进了 Electron、React、Vite 等核心库的升级。整体项目处于功能迭代收尾阶段，健康度良好。

---

## 2. 版本发布

今日 **无新版本正式 Release**。但 PR [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) 已将 `release/2026.8.3` 合并入 `main` 分支，预计即将正式发布。

**2026.8.3 主要变更预览**（来自关联 PR 摘要）：
- 新增原生积分奖励活动（Startup Credit Campaign）
- 优化首次登录体验
- 新增 Artifact 自动预览控制选项
- 改进模型错误处理
- 提升 Windows 安装包稳定性

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 摘要 |
|----|------|------|
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | 🏷️ Release | 合并 `release/2026.8.3` 至 `main`，完成新版本发布准备 |
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | 🐛 Fix | 优化启动积分活动的海报裁剪、错误提示本地化及失败重试逻辑 |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | 🐛 Fix | 禁用世界杯最终奖励自动弹出，保留手动领取流程 |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | 🐛 Fix | 补全启动积分活动的埋点字段（登录跳转 URL、错误消息等） |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | ✨ Feat | 将启动积分活动素材打包进客户端，支持本地渲染 |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | 🎨 Chore | 优化登录页面体验 |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | 📦 Chore | `react-dom` 从 `18.3.1` → `19.2.4` |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | 📦 Chore | `vite` 从 `5.4.21` → `8.0.9` |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | 📦 Chore | `cross-env` 从 `7.0.3` → `10.1.0` |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | 🐛 Fix | rlog 修复 |
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) | 🐛 Fix | rlog 修复 |

> **进展评估**：今日 11 条 PR 全部关闭，其中 6 条围绕启动积分活动形成完整闭环（开发→优化→修复→发布），项目向前推进约 **1 个功能版本**。

---

## 4. 社区热点

### 🔥 活跃 Issue
- **[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200)** — `NIM 超大群消息中 teamTypeNum 硬编码错误导致群名无法正确获取`
  - 状态：🟠 开放 / ⚠️ stale
  - 评论：1 | 👍：0
  - 创建于 2026-04-01，今日刚被重新激活更新
  - **诉求分析**：用户在使用云信（NIM）超大群 @机器人时，群名显示为原始 ID 而非可读名称，严重影响用户体验。该 Bug 存在近 4 个月，虽有对应 PR 但仍未合并，属于**长期未解决的体验类问题**。

### 📌 待合并 PR
- **[PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201)** — 修复 Issue #1200，一行代码修正 `teamTypeNum` 映射，已关联 Issue 但状态仍为 `stale`
- **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** — 新增设置项允许用户永久隐藏侧边栏广告横幅（关联 Issue #2342），用户主动贡献，社区呼声较高
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — Dependabot 自动提案，将 Electron 从 `40.2.1` 升级至 `43.2.0`，属安全性/稳定性更新

---

## 5. Bug 与稳定性

| 优先级 | 问题 | PR 状态 | 链接 |
|--------|------|---------|------|
| 🔴 高 | NIM 超大群 @机器人时群名显示错误（teamTypeNum 硬编码映射反了） | ✅ 已有修复 PR [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)，但未合并 | [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) |
| 🟡 中 | 启动积分活动最终奖励自动弹窗干扰用户 | ✅ 已在 [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) 中修复 | [PR #2432](https://github.com/netease-youdao/LobsterAI/pull/2432) |
| 🟡 中 | 启动积分活动埋点字段不完整 | ✅ 已在 [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) 中补全 | [PR #2428](https://github.com/netease-youdao/LobsterAI/pull/2428) |
| 🟢 低 | rlog 相关问题 | ✅ 已在 [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431)、[#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) 中修复 | [PR #2431](https://github.com/netease-youdao/LobsterAI/pull/2431) |

> **稳定性评估**：今日无新增崩溃报告。已关闭的 Bug 均为活动相关体验问题，修复已合入主干。唯一遗留的高优先级 Bug（#1200）修复 PR 已就绪，等待维护者合并。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 纳入下版本可能性 |
|------|------|------|------------------|
| 永久隐藏侧边栏广告横幅 | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（用户提交） | 🟠 待合并 | ⭐⭐⭐⭐ 高 — 用户主动贡献，关联 Issue #2342，体验改善明确 |
| 启动积分活动完整链路 | PRs #2427/#2428/#2432/#2433 | ✅ 已全部合入 2026.8.3 | 已释放 |
| Electron 大版本升级（40→43） | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 🟠 待合并 | ⭐⭐⭐ 中 — Dependabot 自动提案，需验证兼容性 |
| React 19 升级 | [PR #1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | ✅ 已合并 | 已合入，待版本发布 |

> **路线图判断**：项目当前聚焦于 **活动功能稳定性** 与 **基础依赖升级**，用户侧功能请求以体验优化为主（广告隐藏、登录流程优化），暂无重大新方向信号。

---

## 7. 用户反馈摘要

- **痛点 1 — 群名显示异常**：NIM 超大群场景下 @机器人时，群名无法正确渲染，显示原始 ID。影响团队协作场景下的可读性。[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200)
- **痛点 2 — 广告横幅无法永久关闭**：用户只能临时Dismiss单条横幅，缺乏持久化关闭选项，干扰长期使用体验。[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)
- **痛点 3 — 活动弹窗打扰**：启动积分活动的最终奖励自动弹窗被用户认为过于侵入，已主动修复为手动触发。[PR #2432](https://github.com/netease-youdao/LobsterAI/pull/2432)
- **满意点**：首次登录流程优化、Artifact 自动预览可控性提升、Windows 安装包稳定性改进。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 滞留时间 | 建议 |
|------|------|------|----------|------|
| 🐛 Bug | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM 超大群 teamTypeNum 硬编码错误 | ~4 个月 | 修复 PR #1201 已就绪，建议优先合并 |
| 🛠️ PR | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | 修复 Issue #1200 的一行代码补丁 | ~4 个月 | 标记 stale 但无维护者回应，需推动 |
| 🛠️ PR | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 新增永久隐藏侧边栏广告设置 | ~15 天 | 用户贡献，价值明确，建议合并 |
| 🛠️ PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 40→43 升级 | ~4 个月 | 标记 stale，需维护者验证兼容性后合并 |

> ⚠️ **维护者关注提醒**：Issue #1200 及其修复 PR #1201 已滞留超过 4 个月且被标记 `stale`，但该 Bug 直接影响 NIM 核心群聊体验，建议优先处理。PR #1277（Electron 升级）同样长期未响应，升级涉及 major version 变更，需尽快决策。

---

*日报生成时间：2026-08-05 | 分析师：Agnes (Sapiens AI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报
**日期：2026-08-05** | 项目地址：[moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 今日整体活跃度较低，过去24小时内无新增 Issues，无版本发布。唯一动态来自 Dependabot 自动创建的 PR #1184，用于更新 `undici` 依赖版本。项目当前处于平稳维护期，无紧急事务或重大进展。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭。唯一进行中的 PR 为 Dependabot 维护性更新，不直接推进新功能或修复：

- **[PR #1184](https://github.com/moltis-org/moltis/pull/1184)** — `chore(deps-dev): bump undici from 7.28.0 to 7.29.0`（待合并）

项目整体处于稳定态，无实质性功能推进。

---

## 4. 社区热点

今日无活跃 Issues 或高评论 PR。社区讨论热度较低，暂无热点话题。

---

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

---

## 6. 功能请求与路线图信号

今日无新功能请求或路线图相关讨论。

---

## 7. 用户反馈摘要

今日无来自 Issues 的用户反馈可提炼。

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 作者 | 日期 | 链接 |
|------|------|------|------|------|------|
| PR #1184 | 依赖更新（undici 7.28.0 → 7.29.0） | OPEN（待合并） | dependabot[bot] | 2026-08-04 | [PR #1184](https://github.com/moltis-org/moltis/pull/1184) |

**建议：** 该 PR 为自动化依赖更新，建议维护者尽快合并以确保安全性与兼容性。

---

**健康度评估：** 🟡 一般 — 无紧急问题，但今日无实质性进展，建议关注依赖更新合并及后续功能规划。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时 ZeroClaw 保持高活跃度：38 条 Issue 更新、50 条 PR 更新，社区协作密集。安全相关讨论占据主导，当日出现 3 个 S0 级安全 Bug（跨 Agent 权限隔离缺失、Webhook 未认证接入），均已被标注为 **accepted** 或 **in-progress** 状态。架构层面，4 条并发工作流围绕会话持久化合同（#9600）展开协调，RFC 决策队列（#8692）持续运转。无新版本发布，项目整体处于"安全加固 + 架构收敛"阶段。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR

**PR #9520** [CLOSED] — `fix(skills): honor always-inject frontmatter in compact prompt mode`  
修复了 compact prompt 模式下 `always: true` skill frontmatter 标记丢失的问题，确保策略/安全性关键 skill 指令不被截断。由 **IftekharUddin** 提交，直接解决了技能注入一致性问题。

### 活跃中的重要 PR

- **PR #9744** — `refactor(gateway): require authenticated webhook ingress before agent dispatch`  
  新增 `VerifiedWebhookIngress` 类型化认证边界（密封结构，无 `Clone`），将传输层 webhook 校验与 Agent 调度解耦。直接回应 #9565 安全漏洞，由 **IftekharUddin** 推动。

- **PR #9715** — `fix(infra): make JSONL session migration retry-safe`  
  引入共享会话目录变更锁 + 原子 SQLite 事务，实现无竞态的旧 JSONL 会话迁移。由 **Audacity88** 提交，风险等级 high、规模 XL。

- **PR #9758** — `fix(memory): stop consolidation inventing traits and speaking over a persona`  
  修复记忆整合模块越界冒充 Agent 人设输出的问题，确保 consolidate 结果以授权描述形式注入上下文而非覆盖 Agent 身份。

- **PR #9324** — `feat(a2a): outbound client config, shared wire-model, tools`  
  A2A 出站客户端 RFC（#9106）Phase 1 落地：4 个 `a2a_*` 工具 + 共享 A2A v1.0 wire model + 默认关闭的配置块，已完成两轮审查。

- **PR #9476** — `feat(sop): add authenticated operator cancellation for running SOP jobs`  
  为 SOP 运行时添加经认证的取消端点 `POST /api/sops/{name}/runs/{run_id}/cancel` 及 Dashboard **Stop** 按钮，支持运行中任务的可靠终止。

- **PR #9403** — `fix(plugins): bound WASM exports by a wall-clock deadline`  
  新增 `plugins.limits.call_timeout_ms`（默认 30,000ms），对所有 tool/memory/channel guest 导出施加主机端超时边界，防止 WASM 插件无界运行。

- **PR #9217 / #9219 / #9224** — Eval 框架重构三件套  
  将 `Grader` trait 异步化 + workspace-aware，新增 workspace/budget/response_json 三种评估器，以及 `pass@k` / `pass^k` + 误差棒的重复试运行支持。

---

## 4. 社区热点

| Issue | 主题 | 评论 | 热度分析 |
|-------|------|------|---------|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 16 | 探讨跨 Agent turn 持久化目标执行的边界设计，关注 restart handoff、channel admission 与 model-initiated control 的分离 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Shell 高危命令确认分层 + 命令模式策略 | 14 | 2026-08-05 修订第三版，收紧规范性提案范围至 shell-policy 契约，保留非规范性分期路线图 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Web chat 与 Channel 统一附件架构 | 13 | 与 #9487/#9600 形成所有权边界协同，讨论 `InboundAction` 提交流程与耐用准入语义 |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | RFC: Mixture-of-Agents (MoA) 虚拟模型提供器 | 10 → [CLOSED](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | 2026-08-04 关闭，聚合/judge 模型 + 并行参考模型的 MoA 设计已获认可或转入实现 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Memory 生命周期策略与存储后端解耦 | 10 | 关注 Memory trait 边界划定，避免各 gateway/channel/backend 重复实现生命周期逻辑 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned 会话与传输适配 | 10 | 第2版修订（2026-08-03）确立 #9487/#9488/#9600 所有权边界，要求所有迁移入口提交 `InboundAction` |

**热点分析：** 社区当前焦点集中在三条主线——①**安全边界**（shell 命令策略、附件统一架构、会话所有权）、②**架构收敛**（Memory 生命周期解耦、会话持久化合同 #9600）、③**可观测性与治理**（SOP 取消、Eval 框架重构）。高评论数 Issue 均带有 `needs-maintainer-review` 或 `status:accepted` 标签，说明维护者参与度较高。

---

## 5. Bug 与稳定性

| 严重级别 | Issue | 描述 | 状态 | Fix PR |
|---------|-------|------|------|--------|
| **S0** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | WhatsApp Cloud / Linq / WATI Webhook 未认证即分发到 Agent | **in-progress** | #9744（待合并） |
| **S0** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Knowledge graph 无 per-agent 归属，任意 Agent 可读写他人知识 | **accepted** | 暂无 |
| **S0** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | Session/channel read+write 工具缺乏 per-agent 所有权校验 | **accepted** | 暂无 |
| S1 | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `vi_verify` evaluate_constraints 未验证凭证链 | **open** | 暂无 |
| S2 | [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) | Stale provider refresh 可替换正在运行的 session（#9719） | **open** | #9748 本身即 fix |
| S2 | [#9695](https://github.com/zeroclaw-labs/zeroclaw/pull/9695) | 流式/非流式响应中 terminal markers (`<eom>`, `<|eom|>`) 泄漏 | **open** | #9695 本身即 fix |

**关键风险：** #9565/#9647/#9646 三个 S0 级安全问题已获确认，但 #9647 和 #9646 尚无对应 Fix PR。#9565 的修复 PR #9744 已进入评审。建议维护者优先处理跨 Agent 权限隔离的 #9647/#9646。

---

## 6. 功能请求与路线图信号

| RFC / Issue | 诉求 | 状态评估 |
|------------|------|---------|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) Goal mode v1 | 跨 turn 持久化目标执行 | 设计中，边界待收敛 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Shell 高危命令确认 | 分层确认 + allow/ask/deny 策略 | 第3版修订，规范范围已收紧，临近 ratification |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 统一附件架构 | Web/Channel 附件处理统一 | 与 #9487/#9600 协同设计，所有权边界已初步确立 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) Runtime-owned 会话 | 会话生命周期所有权归属 Runtime | 第2版修订，已与 #9488/#9600 建立协同关系 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) Memory 生命周期解耦 | 分离 durable storage 与 lifecycle policy | 设计中，需 maintainer review |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) Persistent memory parity | 持久记忆子系统功能对齐 | in-progress tracker，18 个 open items（3 issue + 15 PR） |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) A2A 出站客户端 | A2A v1.0 wire model + tools | Phase 1 已完成两轮审查，可纳入下一版本 |
| [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) OpenRouter prompt-cache | 传递稳定 session_id 以启用 prompt 缓存 | 功能请求，成本优化方向，需 maintainer review |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) Rust→Wasm Web UI | 用 Rust Wasm 框架替换 React/Vite | p3 优先级，长期架构目标，暂无 active PR |

**纳入判断：** #9324 (A2A Phase 1) 审查进展良好，最有可能进入下一版本；#7155 (Shell 策略) 已收敛至规范性提案；#8891 (Persistent memory) 跟踪器活跃，多项 PR 并行推进中。

---

## 7. 用户反馈摘要

- **安全焦虑显著：** #9565、#9647、#9646 三个 S0 问题均由社区成员主动发现并提交，反映出用户对多 Agent 隔离和 Webhook 认证的高度敏感。#9328 进一步指出 `vi_verify` 的约束检查未验证凭证链，安全审计意识较强。
- **记忆系统质量困扰：** #9758 修复的"consolidation 冒充人设"问题表明用户关注 Agent 行为一致性和记忆整合的可预测性。
- **成本敏感：** #9631 提出 OpenRouter prompt-cache 支持，直指多轮对话重复传输 system prompt 和 tool schema 导致的费用浪费。
- **工具解析鲁棒性：** #9477 修复 `<tools>` 标签包裹的调用解析恢复，说明 Qwen2.5-Coder-32B 等模型的输出格式存在变异，用户需要更强的容错。
- **终端标记泄漏：** #9695 修复 `<eom>` 等标记泄露到响应文本，影响 UI 展示和持久化内容质量。

---

## 8. 待处理积压

| Issue/PR | 类型 | 最后更新 | 风险 | 建议 |
|---------|------|---------|------|------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) Knowledge graph 无 per-agent 归属 | Bug S0 | 2026-08-04 | 数据隔离失效 | 优先分配开发者，与 #9646 联动修复 |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) Session/channel 工具缺所有权校验 | Bug S0 | 2026-08-04 | 跨 Agent 越权读写 | 同上 |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) vi_verify 未验证凭证链 | Bug S1 | 2026-08-05 | 安全审计绕过 | 需安全专家 review |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) Memory 生命周期解耦 RFC | RFC | 2026-08-04 | 架构债 | 需 maintainer review |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) Goal mode v1 RFC | RFC | 2026-08-05 | 功能延迟 | 边界设计仍在讨论 |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) Rust→Wasm Web UI RFC | RFC p3 | 2026-08-04 | 长期技术债 | 低优先级，等待资源 |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) Session 持久化合同所有权 tracker | Tracker | 2026-08-04 | 并发工作流冲突 | 需维护者明确Owner |

---

**整体健康度评估：** 项目保持活跃开发节奏，安全响应迅速（#9565 已有 Fix PR #9744），架构决策机制运转正常（RFC tracker #8692 持续收集决策）。主要风险在于 S0 安全问题的 Fix PR 覆盖不全（#9647/#9646 尚无修复），建议维护者优先分配资源。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*