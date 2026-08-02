# OpenClaw 生态日报 2026-08-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-02 01:48 UTC

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
**日期：2026-08-02** | **数据周期：过去24小时**

---

## 1. 今日速览

OpenClaw 项目今日保持**极高活跃度**：过去24小时共产生 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 462 条，待合并 PR 405 条，但仅有 38 条 Issue 和 95 条 PR 被关闭/合并，**积压释放率约 19%**，维护团队面临较大处理压力。项目发布 `v2026.7.2-beta.6`，重点引入状态安全与崩溃恢复机制，但社区反馈显示当前版本仍集中爆发多起 P0/P1 级稳定性问题，涵盖会话状态损坏、崩溃循环、消息丢失等核心场景，整体健康度需重点关注。

---

## 2. 版本发布

### v2026.7.2-beta.6
**链接：** https://github.com/openclaw/openclaw/releases

**核心亮点 — 状态安全与恢复（State Safety & Recovery）：**
- **隔离存储（Quarantine Store）：** 主数据库损坏时保护持久化数据
- **SQLite 崩溃恢复快照：** 支持从崩溃点恢复
- **文件系统发布崩溃持久化：** 确保写入操作原子性
- **Schema 升级数据丢失拒绝：** 防止迁移过程中静默丢数据
- **Rollback Writer 快照恢复：** 回滚路径的快照支持

**破坏性变更 / 迁移注意：**
- 本次为 beta 版本，建议先在非生产环境验证
- 状态 schema 升级路径需关注是否触发旧版安装的兼容性问题（参见 #115421）

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 标题 | 作者 | 说明 |
|---|---|---|---|
| #117720 [CLOSED] | improve(cli): attribute command startup stages | vincentkoc | CLI 启动阶段诊断细化，帮助定位 Kova 本地代理预启动阶段的性能瓶颈 |
| #117710 [CLOSED] | refactor(whatsapp): deduplicate reply delivery test fixtures | steipete | WhatsApp 回复交付测试用例去重重构，提升测试可维护性 |
| #110834 [CLOSED] | fix(doctor): stream JSONL line counts without full-file reads | nocodet888-arch | `openclaw doctor` 修复：流式统计 JSONL 行数，避免数百 MB 文件全量加载导致内存 spike |

### 推进方向
- **诊断工具改进：** #117720 和 #110834 表明团队正在加强 CLI 可观测性，降低生产环境排障成本
- **测试质量提升：** WhatsApp 测试重构反映对消息通道稳定性的重视
- **状态安全：** v2026.7.2-beta.6 的发布本身即是对近期多起数据库损坏/崩溃循环问题的系统性回应

---

## 4. 社区热点

### 评论数 Top 5 Issues

| 排名 | Issue | 评论数 | 标签 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) | 73 | P1, platinum hermit, message-loss | DeepSeek v4 Flash 静默失败无回复，影响 Telegram 群消息 |
| 2 | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 39 | P1, diamond lobster, security, session-state | 工具调用间文本泄露到消息频道，隐私与 UX 双重问题 |
| 3 | [#116201](https://github.com/openclaw/openclaw/issues/116201) | 38 | P1, gold shrimp, session-state | 实时语音会话资源无限累积，慢速/突发行为下状态失控 |
| 4 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 26 | P1, platinum hermit, message-loss | 工具输出渲染为图片附件导致 agent 不可读，长运行工作流受损 |
| 5 | [#115326](https://github.com/openclaw/openclaw/issues/115326) | 24 | P1, platinum hermit, crash-loop | 崩溃循环保护器永久抑制 Discord/WhatsApp，恢复路径 `channels.start` 失败 |

### 热点分析
- **消息丢失（message-loss）** 是最大痛点：#116277、#99241、#115326 均直接导致用户消息无响应或丢失
- **状态安全（session-state）** 紧随其后：#25592、#116201 反映会话层资源管理和数据隔离存在结构性缺陷
- **崩溃循环（crash-loop）** 是稳定性的核心威胁：#115326 的恢复路径本身失败，形成死锁

---

## 5. Bug 与稳定性

### P0 级（发布阻断级）

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检在 gateway 运行时损坏状态 DB，出现 `database disk image is malformed` | OPEN | — |
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | Schema 降级恢复错误地 quarantine/擦除状态 DB，导致 cron 任务丢失 | OPEN | — |

### P1 级（高优先级）

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默不生成回复 | OPEN | — |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄露到消息频道 | OPEN | — |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音会话无限累积 provider/consult 状态 | OPEN | — |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | 崩溃循环保护器永久抑制 Discord/WhatsApp | OPEN | — |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话转录投影在持续写入下活锁，阻塞主线程 | OPEN | — |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 使用重复 PID 重启后 usage-cost 刷新锁永久泄漏 | OPEN | — |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | Gateway V8 堆 OOM 后重启恢复产生 7 核心转储循环 | OPEN | — |
| [#115847](https://github.com/openclaw/openclaw/issues/115847) | ACP 会话半初始化导致永久 ready-check 超时循环 | OPEN | — |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 在模型完成后拒绝并报错 `thread switched branches` | OPEN | — |

### 已有 Fix PR 的 Bug

| Issue | Fix PR | 状态 |
|---|---|---|
| #117358（compaction 估算错误） | [#117400](https://github.com/openclaw/openclaw/pull/117400) | OPEN，待合并 |
| #88079（WebChat reasoning_content 未流式渲染） | [#117721](https://github.com/openclaw/openclaw/pull/117721) | OPEN，待合并 |
| #116243（默认 agent 丢失 keys） | [#116248](https://github.com/openclaw/openclaw/pull/116248) | OPEN，待合并 |
| #104358（媒体暂存目录未清理） | [#117184](https://github.com/openclaw/openclaw/pull/117184) | OPEN，待合并 |
| #111923（REM 阶段垃圾主题过滤） | [#117248](https://github.com/openclaw/openclaw/pull/117248) | OPEN，待合并 |
| #117672（WhatsApp 自动回复方向丢失） | [#117697](https://github.com/openclaw/openclaw/pull/117697) | OPEN，待合并 |

### 稳定性总结
- **崩溃/循环类：** 至少 5 个独立 P1 级崩溃循环问题（#115326、#115424、#115847、#115908、#101290），涉及 Gateway、会话管理、ACP 子系统
- **数据丢失类：** #99241、#115421、#94939 均导致用户数据不可恢复
- **新发布的 beta.6 虽引入状态安全机制，但上述多数问题尚未有合并的 fix PR**

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 关联 PR | 纳入可能性 |
|---|---|---|---|
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | WebChat 文件查看器增加图片预览 | — | 中等，UI 改进类需求 |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | 发布标识"生产就绪稳定性"标签 | — | 低，流程/文档类 |
| [#17840](https://github.com/openclaw/openclaw/issues/17840) | 可选的反应（reaction）触发 agent turn | — | 中等，交互模式扩展 |
| [#110171](https://github.com/openclaw/openclaw/issues/110171) | 语音聊天与文本聊天上下文 parity | — | 高，核心体验一致性 |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | 按工作目录索引向量存储，消除重复 | — | 中等，性能优化 |

### 路线图信号
- **上下文一致性（#110171）** 与当前实时语音状态管理 bug（#116201）形成对照——用户期望语音/文本体验对齐，但底层状态管理尚未稳定
- **记忆系统优化（#95724、#117248）** 有活跃 PR 推进，反映 memory-core 扩展正在迭代中
- **生产就绪标签（#73537）** 虽为低优先级需求，但反映社区对版本稳定性分级的诉求，与当前多 P0 bug 现状形成张力

---

## 7. 用户反馈摘要

### 核心痛点
1. **消息丢失 = 信任危机：** 用户反复遭遇"发了消息但 agent 无响应"或"agent 回复了但内容不可见"（#116277、#99241、#115326）。#73537 用户明确表示 OpenClaw 已成为家庭和业务日常 workflow 的核心组件，此类问题直接影响生产可用性。
2. **状态损坏不可逆：** #101290 用户报告在正常运行的 gateway 上 4 天内数据库损坏 4 次；#115421 用户降级后 cron 任务全部丢失。数据持久化可靠性是基础信任问题。
3. **配置/热重载脆弱：** #112864 报告 `openclaw config set` 热重载时 JSON 读取不完整导致崩溃循环；#31583 报告 `exec` 工具不继承 `skills.env` 环境变量，影响密钥注入。
4. **多通道一致性缺陷：** #111778 指出 Mattermost 的 tool-warning 会 gate 住真实回复，而 Discord/Slack/Telegram 无此问题——通道层存在行为分歧。

### 正面反馈
- #73537 用户："OpenClaw has genuinely become part of our daily workflow"，认可 Telegram 集成、自动化、cron、Home Assistant 控制等场景价值
- #110834 PR 作者解决了 doctor 命令内存 spike 问题，获 0 赞但被 maintainer 合并，反映维护团队对可观测性的重视

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 天数未动 | 严重程度 | 备注 |
|---|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 2026-02-24 | ~159 天 | P1, diamond lobster | 工具调用间文本泄露，security + UX 双重问题，长期 open |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 2026-03-02 | ~153 天 | P1, diamond lobster | exec 不继承 env 变量，regression，影响密钥管理 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 2026-03-17 | ~138 天 | P0, diamond lobster | Live Docs 与发布版本不一致，IsolatedSessions 文档超前 |
| [#30381](https://github.com/openclaw/openclaw/issues/30381) | 2026-03-01 | ~154 天 | P2, diamond lobster | chatCompletions 忽略 x-openclaw-agent-id header 的 model 校验 |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | 2026-05-29 | ~96 天 | P2, diamond lobster | WebChat reasoning_content 未流式渲染（已有 PR #117721 待合并）|
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | 2026-04-28 | ~126 天 | P2 | 生产就绪稳定性标签请求 |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) | 2026-06-10 | ~83 天 | P1, silver shellfish | 内部推理内容泄露给用户，privacy regression |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 2026-06-19 | ~74 天 | P1, diamond lobster | 6.x 状态迁移后 conversation-store SQLite 为空，MS Teams 受影响 |
| [#87763](https://github.com/openclaw/openclaw/issues/87763) |

---

## 横向生态对比



# AI 智能体开源生态横向对比分析报告
**日期：2026-08-02 | 分析师：Agnes（Sapiens AI）**

---

## 1. 生态全景

2026年8月，个人AI助手开源生态呈现**高速分化**态势：头部项目（OpenClaw、ZeroClaw）已进入**稳定性攻坚期**，大量 P0/P1 级 Bug 暴露架构层脆弱性；同时 WAVE 2 架构重构（IronClaw）、可信评估体系（ZeroClaw eval）和安全机制升级（mTLS、KeySource trait）成为新基础设施方向。生态整体从"功能扩张"转向"可靠性与安全性并重"，多项目聚焦状态管理、消息通道一致性和权限隔离等核心痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度 | 核心状态 |
|------|------------|---------|---------|--------|----------|
| **OpenClaw** | 500 | 500 | v2026.7.2-beta.6 | 🟡 需关注 | 积压释放率仅19%，P0/P1崩溃/状态损坏密集爆发 |
| **ZeroClaw** | 50 | 50 | — | 🟡 中高风险 | 讨论密集但合并保守，安全漏洞待修复 |
| **Hermes Agent** | 50 | 50 | — | 🟢 良好 | 多Profile安全加固，Windows修复节奏稳定 |
| **NanoClaw** | 2 | 15 | v2.1.54 | 🟢 良好 | iMessage统一+凭证告警，PR合并率33% |
| **IronClaw** | 11 | 24 | — | 🟢 良好 | Wave 2重构推进，libSQL性能回归待解决 |
| **CoPaw** | 9 | 13 | — | 🟢 良好 | Provider重构+记忆压缩修复，修复节奏稳定 |
| **LobsterAI** | 7 | 2 | — | 🟢 稳定 | 稳定迭代期，i18n/UX打磨为主 |
| **PicoClaw** | 1 | 3 | — | 🟡 中等 | 功能扩展活跃，但核心Issue #3203长期stale |
| **Moltis** | 0 | 3 | — | 🟢 稳健 | 可观测性与权限安全双推进 |
| **NullClaw** | 0 | 0 | — | ⚪ 停滞 | 无活动 |
| **TinyClaw** | 0 | 0 | — | ⚪ 停滞 | 无活动 |
| **ZeptoClaw** | 0 | 0 | — | ⚪ 停滞 | 无活动 |
| **NanoBot** | — | — | — | ⚪ 未知 | 摘要生成失败 |

---

## 3. OpenClaw 在生态中的定位

**规模与定位：** OpenClaw 是当前生态中**绝对流量中心**，24小时 1000 条 Issue/PR 更新量级远超其他项目总和，表明其用户基数最大、集成场景最广（Telegram/Discord/WhatsApp/Mattermost/Slack 全通道覆盖）。

**技术路线差异：**
| 维度 | OpenClaw | 竞品（ZeroClaw/IronClaw） |
|------|----------|--------------------------|
| 状态管理 | SQLite + Quarantine Store（beta 6 引入） | ZeroClaw 抽象 KeySource trait / IronClaw Wave 2 crate 拆分 |
| 发布节奏 | Beta 激进迭代 | ZeroClaw 保守评估 / IronClaw 架构重构期 |
| 安全模型 | 多通道隔离但存在 token 泄露（#25592） | Hermes Agent 已修复 Profile 间 token 泄露（#51603） |
| 可观测性 | `openclaw doctor` 流式诊断 | Moltis/ZeroClaw 原生支持 Langfuse/OTel |

**社区规模对比（估算）：**
- OpenClaw：日活 Issue/PR > 1000，处于第一梯队
- ZeroClaw/Hermes Agent：日活 ~50-100，第二梯队
- NanoClaw/IronClaw/CoPaw：日活 ~10-30，第三梯队
- LobsterAI/Moltis：日活 < 10，细分垂直

---

## 4. 共同关注的技术方向

### 4.1 状态管理与数据持久化可靠性
| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | SQLite 崩溃恢复快照、Quarantine Store、Schema 升级拒绝数据丢失（#101290、#115421） |
| **NanoClaw** | `outbound.db` journal 恢复轮询竞态（#2750）、rootless Docker 兼容性（#3174） |
| **Hermes Agent** | 多 Profile 间 session 状态隔离（#51603 token 泄露已修复，但生命周期管理仍脆弱） |
| **ZeroClaw** | RFC #9048 分离会话历史与长期记忆存储 |

### 4.2 多通道一致性与消息可靠性
| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | 消息丢失（#116277 DeepSeek 静默失败）、通道行为分歧 Mattermost/Discord/Slack（#111778） |
| **NanoClaw** | iMessage 统一通道（Local + Photon Hosted）、重复消息去重（#2956） |
| **ZeroClaw** | WhatsApp Web 白名单配置缺陷（#9348 S1 严重性） |
| **CoPaw** | ACP 竞态导致文本丢失（#6625） |

### 4.3 权限安全与密钥管理
| 项目 | 具体诉求 |
|------|----------|
| **Hermes Agent** | Anthropic token 跨 Profile 泄露（#51603 已关闭）、Teams 加载外 .env（#62935 已关闭） |
| **ZeroClaw** | RFC #9127 抽象 KeySource trait、WhatsApp Cloud token 泄露（#9417） |
| **Moltis** | channel 权限模型修复，per-account operators 列表（#1170 已合并） |
| **CoPaw** | 无直接反馈，但 Provider 模型列表准确性问题（#6631） |

### 4.4 可观测性与可维护性
| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | CLI 启动阶段诊断细化（#117720）、doctor 命令内存优化（#110834） |
| **ZeroClaw** | RFC #8933 OTel 跨轮次对话关联、eval 评估系统（#9220-#9225 系列） |
| **Moltis** | 后端中立化 agent 可观测性基础设施、Langfuse v4 导出（#1174 已合并） |
| **IronClaw** | CI gate 治理、path-keyed inventory-driven 策略（#6963/#6996） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|------|----------|----------|--------------|
| **OpenClaw** | 全通道覆盖、cron 自动化、Home Assistant 集成 | 家庭/个人 workflow 深度用户、自动化爱好者 | 单体 SQLite + 多通道网关，状态安全机制正在重构 |
| **ZeroClaw** | 安全传输（mTLS）、eval 评估体系、OpenAI 兼容适配 | 企业/生产部署用户、注重安全合规的开发者 | RFC 驱动架构演进，KeySource trait + ScopedToolRegistry 抽象层 |
| **Hermes Agent** | 多 Profile 隔离、Kanban 通知、桌面端 | 多账户/多上下文用户、桌面端重度用户 | Profile 级 secret 作用域、Windows Desktop 原生体验 |
| **NanoClaw** | iMessage 通道统一、凭证过期告警、rootless Docker | macOS 用户、容器化部署用户 | 双后端 iMessage（Local Chat SDK + Photon）、Provider 无关 setup |
| **IronClaw** | Wave 2 架构重构、extension_host 端口反转 | 核心贡献者、架构探索型开发者 | Rust crate 化依赖管理、product_contracts 中性契约 |
| **CoPaw** | 记忆压缩、Provider 体系重构、多智能体协作 | 阿里云/Qwen 生态用户、AgentScope 集成者 | Provider 发现/模型元数据/路由统一重构（#6302） |
| **LobsterAI** | i18n、MCP 引擎兼容性、长图解析 | 中文用户、MCP 扩展开发者 | 聚焦 UX 打磨与 MCP 协议适配 |
| **PicoClaw** | Exa 搜索、OrcaRouter 多模型路由 | 轻量级部署用户、搜索增强需求 | 简单 Provider 扩展模式，社区驱动功能 |
| **Moltis** | Langfuse 集成、per-account 权限控制 | 分布式追踪需求用户、安全敏感场景 | 后端中立化设计，immutable completion-only turns |

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：快速迭代期（功能扩张 + 稳定性攻坚并行）            │
│  OpenClaw、ZeroClaw                                          │
│  特征：日活 Issue/PR > 50，Beta 版本密集，Bug 批量爆发       │
├─────────────────────────────────────────────────────────────┤
│  第二梯队：高质量迭代期（架构重构 + 安全加固）                │
│  Hermes Agent、NanoClaw、IronClaw、CoPaw                    │
│  特征：日活 10-50，PR 合并率健康，修复节奏稳定               │
├─────────────────────────────────────────────────────────────┤
│  第三梯队：稳定维护期（体验打磨 + 功能扩展）                  │
│  LobsterAI、Moltis、PicoClaw                                │
│  特征：日活 < 10，Issue 解决周期长，无紧急风险               │
├─────────────────────────────────────────────────────────────┤
│  第四梯队：停滞/低频期                                       │
│  NullClaw、TinyClaw、ZeptoClaw、NanoBot                      │
│  特征：24h 无活动或数据不可用                                │
└─────────────────────────────────────────────────────────────┘
```

**成熟度信号解读：**
- OpenClaw：用户基数最大但处于**"规模-稳定性悖论"**阶段，v2026.7.2-beta.6 的状态安全机制是成熟度跃迁的关键节点
- ZeroClaw：**RFC 驱动决策**模式成熟（#9048/#9127/#8603/#8933 均获 accepted），但 PR 合并保守，处于**"架构成型期"**
- Hermes Agent：已修复多 Profile 安全核心漏洞（#51603），进入**"质量巩固期"**
- IronClaw：Wave 2 重构是**"架构成熟度跃迁"**的必经阶段，libSQL 性能回归是短期阵痛

---

## 7. 值得关注的趋势信号

### 7.1 状态管理成为核心战场
OpenClaw（Quarantine Store）、NanoClaw（outbound.db journal）、ZeroClaw（RFC #9048 记忆分离）均在重构持久化层。**行业信号：AI Agent 从"调用链可靠"转向"状态机可靠"**，这对生产部署至关重要。

### 7.2 多 Provider 路由成为标配
CoPaw（#6302 Provider 统一重构）、PicoClaw（OrcaRouter 集成）、ZeroClaw（RFC #8603 OpenAI 兼容网关）均在此方向。**机会点：Provider 抽象层存在跨项目复用价值。**

### 7.3 安全从"事后修复"转向"架构内建"
ZeroClaw（mTLS + KeySource trait）、Hermes Agent（per-profile secret 作用域）、Moltis（per-account operators）均将安全机制下沉到架构层。**对开发者的启示：早期引入 KeySource/SecretScope 抽象可避免后期重构成本。**

### 7.4 Eval 体系成为质量门禁新基础设施
ZeroClaw 连续 6 个 eval PR 进入审阅队列，构建 run receipt → baseline diff → LLM-judge grader → JUnit XML 全流程。**趋势：开源 Agent 项目开始重视回归测试和版本基线对比。**

### 7.5 Windows Desktop 体验成为差异化竞争点
Hermes Agent（7 个 Windows 相关 Issue/PR）、NanoClaw（rootless Docker + iMessage Local 后端）均在攻克桌面端稳定性。**细分机会：Windows 原生体验仍是一片蓝海。**

### 7.6 多智能体协作引导不足
CoPaw（#6621 用户 50+ 轮对话才发现需显式配置）、OpenClaw（#110171 语音/文本上下文 parity 诉求）反映**现有项目对多 Agent 协作的 onboarding 设计存在系统性缺陷**。

---

**结论：** 生态正从"功能竞赛"进入"可靠性竞赛"阶段。OpenClaw 用户量最大但稳定性风险最高；ZeroClaw 架构前瞻性最强但合并保守；Hermes Agent 和 NanoClaw 在垂直场景（多 Profile、iMessage）建立差异化优势。对于开发者选型建议：**生产部署优先 Hermes Agent/NanoClaw，大规模场景关注 OpenClaw beta.6 状态安全机制落地情况，安全敏感场景参考 ZeroClaw KeySource trait 设计。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报
**日期：2026-08-02 | 数据周期：过去24小时**

---

## 1. 今日速览

Hermes Agent 今日保持高活跃度：50条Issue更新（新开/活跃34条，关闭16条）、50条PR更新（待合并42条，合并/关闭8条），无新版本发布。项目健康度良好，社区贡献密集，焦点集中在Windows桌面端稳定性修复、多Profile安全隔离加固、以及插件系统完善。值得注意的是，今日有多个安全相关Issue被关闭（#51603、#62935），且数项关键bug已合并修复，整体正从v0.19.x向更稳定的方向推进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的关键PR：

| PR | 类型 | 内容摘要 |
|----|------|----------|
| [#75875](https://github.com/NousResearch/hermes-agent/pull/75875) | fix(update) | 修复Windows更新后`.hermes-update-in-progress`标记文件残留导致后续更新卡死的bug |
| [#76513](https://github.com/NousResearch/hermes-agent/pull/76513) | feat(gateway) | Discord自动线程会话现在基于`prospective_thread_id`做键，修复了同频道多个自动线程命名错乱问题 |
| [#76514](https://github.com/NousResearch/hermes-agent/pull/76514) | fix(kanban) | 修复`hermes kanban notify-subscribe`在省略`--notifier-profile`时错误使用调用shell的profile |
| [#76499](https://github.com/NousResearch/hermes-agent/pull/76499) | fix(npm) | 放宽`package.json`的npm引擎约束，允许Node 22/npm 11安装（修复#76486） |
| [#76484](https://github.com/NousResearch/hermes-agent/pull/76484) | fix(desktop) | 修复Windows bootstrap安装器因npm版本约束导致的`EBADENGINE`失败 |
| [#76501](https://github.com/NousResearch/hermes-agent/pull/76501) | feat(tts) | TTS流式传输现在使用端点返回的采样率，而非硬编码24kHz（修复#76466） |
| [#76482](https://github.com/NousResearch/hermes-agent/pull/76482) | fix(kanban) | 修复无适配器的gateway拥有dispatcher单例时kanban通知静默跳过所有订阅的问题 |
| [#76511](https://github.com/NousResearch/hermes-agent/pull/76511) | fix(security) | 修复Copilot token交换启动延迟~4.5秒问题（`_is_suppressed()`检查顺序错误） |

**整体推进评估：** 今日8个合并PR中，6个为bug修复，2个为功能改进，主要集中在Windows安装体验、多Profile场景下的正确性、以及Telegram/Discord网关稳定性。项目正在系统性解决v0.19.x引入的回归问题。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**[Issue #75598](https://github.com/NousResearch/hermes-agent/issues/75598) — Windows更新导致程序不稳定**（7条评论，已关闭）
- 用户反馈多Profile网关运行时更新后程序整体不稳定，切换Profile无法正确停用其他组件
- 反映多Profile + 自动更新交叉场景下的生命周期管理仍是薄弱环节

**[Issue #65274](https://github.com/NousResearch/hermes-agent/issues/65274) — Desktop项目级会话在Windows上cwd回退**（6条评论，👍1）
- 新建的Desktop会话在项目内创建时，cwd错误回退到用户home目录而非项目路径
- 现有项目绑定会话正常工作，仅"全新会话"受影响，属于边界条件bug

**[Issue #51603](https://github.com/NousResearch/hermes-agent/issues/51603) — Anthropic token跨Profile泄露**（5条评论，已关闭）
- 在`multiplex_profiles: true`模式下，`resolve_anthropic_token()`绕过profile secret作用域，导致Profile A的API key可能泄露给Profile B的请求
- 属于安全边界问题，已关闭表明已修复

**[Issue #37566](https://github.com/NousResearch/hermes-agent/issues/37566) — 桌面端字体选择器**（4条评论，👍5）
- 用户强烈期望桌面端支持字体/字号/颜色自定义，当前仅Web UI支持
- 同主题Issue #64790也已关闭，说明功能开发已在推进

### 🔥 讨论最活跃的 PR

**[PR #76509](https://github.com/NousResearch/hermes-agent/pull/76509) — 强化委托审批边界**（安全相关）
- 为`delegate_task`子任务添加不可变的审批作用域，在Relay/请求中间件之前和执行之前双重校验
- 对委托shell执行、workspace逃逸、外部变更失败关闭

**[PR #75500](https://github.com/NousResearch/hermes-agent/pull/75500) — SSH后端所有权保持**（Desktop/SSH）
- 修复Desktop替换launcher时SSH后端所有权丢失问题，使用安装/profile作用域token路径和spawn nonce验证

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| **P1** | [#76435](https://github.com/NousResearch/hermes-agent/issues/76435) | Discord gateway陷入重连循环，bot token被Discord重置（>1000次连接尝试）；同时Desktop更新器不可用 | 📢 开放 |
| **P2** | [#60845](https://github.com/NousResearch/hermes-agent/issues/60845) | Telegram队列模式(FIFO)下，排队跟进响应跳过MEDIA提取，文件以纯文本路径发送 | 📢 开放 |
| **P2** | [#76381](https://github.com/NousResearch/hermes-agent/issues/76381) | `sidebar`/`footer-left`/`footer-right`三个PluginSlot已注册并文档化，但`App.tsx`中从未渲染 | 📢 开放 |
| **P2** | [#76064](https://github.com/NousResearch/hermes-agent/issues/76064) | Desktop生产版默认启用了两个demo/dogfood插件（点击计数器、重复gateway药丸），造成UI混乱 | 📢 开放 |
| **P2** | [#43757](https://github.com/NousResearch/hermes-agent/issues/43757) | Responses API下，`input`数组中的`function_call_output`项被剥离，导致跨轮次tool结果丢失 | 📢 开放 |
| **P2** | [#76481](https://github.com/NousResearch/hermes-agent/issues/76481) | OpenRouter xAI `:online`模式与Hermes客户端`web_search`工具重名，导致HTTP 400拒绝 | 📢 开放 |
| **P2** | [#76485](https://github.com/NousResearch/hermes-agent/issues/76485) | Windows Desktop下gateway启动时注册的event hooks在session agent内从未触发 | 📢 开放 |
| **P2** | [#76448](https://github.com/NousResearch/hermes-agent/issues/76448) | Gateway lifecycle guard误报：任何直接在gateway进程内执行的脚本（如`kakei balance`）都被拦截 | ✅ 已关闭 |
| **P2** | [#76469](https://github.com/NousResearch/hermes-agent/issues/76469) | Termux安装失败：`nemo-relay<0.7,>=0.6.0`依赖无法满足 | 📢 开放 |
| **P3** | [#75960](https://github.com/NousResearch/hermes-agent/issues/75960) | Windows Desktop日语/中文IME预编辑文本出现在composer占位符之后而非光标位置 | 📢 开放 |
| **P3** | [#76414](https://github.com/NousResearch/hermes-agent/issues/76414) | `hermes honcho peers`对非默认profile显示`(not set)`，host key用`.`而非`_`构建 | 📢 开放 |

**已有Fix PR的Bug：**
- #75598（更新不稳定）→ PR #75875已合并
- #51603（token泄露）→ 已关闭
- #62935（Teams加载外.env）→ 已关闭
- #76466（TTS采样率硬编码）→ PR #76501已合并
- #76486（npm引擎约束）→ PR #76499已合并

---

## 6. 功能请求与路线图信号

| 请求 | Issue/PR | 分析 |
|------|----------|------|
| **插件生命周期管理** | [#64229](https://github.com/NousResearch/hermes-agent/issues/64229) | 提出`on_load`/`on_ready`/`on_unload`回调、注册句柄、背景任务管理。是插件系统规范化的关键基础设施，可能被纳入下一版本核心 |
| **桌面字体/外观自定义** | [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) / [#64790](https://github.com/NousResearch/hermes-agent/issues/64790) | 两个相似请求均已关闭，表明功能开发已完成或正在推进，预计soon合入 |
| **委托任务父级实时控制** | [#76512](https://github.com/NousResearch/hermes-agent/pull/76512) | PR已提交，提供`delegate_control`的`list`/`cancel`/`steer`动作，属高阶agent功能，可能进入下一版本 |
| **Custom Provider reasoning_echo** | [#76503](https://github.com/NousResearch/hermes-agent/pull/76503) | 为Kimi K3、GLM-5.2等自定义provider添加thinking模式内容保留，填补现有provider支持空白 |
| **Gateway发送方稳定标识** | [#76516](https://github.com/NousResearch/hermes-agent/pull/76516) | 为每条入站消息添加持久化sender attribution，改进跨平台会话追踪和transcript准确性 |
| **Agent授权策略层** | [#34992](https://github.com/NousResearch/hermes-agent/issues/34992) | 社区提案：基于策略的tool执行授权、人工审批工作流、scoped delegation。属中长期路线图方向 |

---

## 7. 用户反馈摘要

**痛点TOP 3：**

1. **多Profile隔离问题反复出现** — 用户反馈#51603（token泄露）、#62935（Teams加载外.env）、#76482（kanban跨profile订阅丢失）均指向同一根因：多Profile场景下的secret作用域和singleton管理不够严格。这是当前最紧迫的系统性问题。

2. **Windows Desktop体验不佳** — 更新卡死（#75598、#76435）、demo插件污染UI（#76064）、IME输入错位（#75960）、npm安装失败（#76486）等多个问题集中在Windows Desktop端，表明该平台的QA覆盖不足。

3. **Gateway心跳/健康检查失效** — #32887指出`gateway_state.json`只在状态变化时写入，idle超过2分钟后WebUI误判为down。这对Docker/跨容器部署影响严重。

**满意点：**
- 字体选择器功能被多个用户提及（#37566有5个👍），反映对桌面端可定制化的强烈需求已被响应
- TTS采样率支持（#76466）和npm版本放宽（#76486）的修复速度快，社区响应积极

---

## 8. 待处理积压

| Issue | 创建时间 | 状态 | 提醒 |
|-------|----------|------|------|
| [#32887](https://github.com/NousResearch/hermes-agent/issues/32887) — gateway_state.json心跳缺失 | 2026-05-27 | 开放 | 长期未修复，影响Docker部署的liveness检查准确性 |
| [#43757](https://github.com/NousResearch/hermes-agent/issues/43757) — Responses API tool结果丢失 | 2026-06-10 | 开放 | 影响使用Responses API + tool calling的会话连续性 |
| [#60845](https://github.com/NousResearch/hermes-agent/issues/60845) — Telegram队列MEDIA提取跳过 | 2026-07-08 | 开放 | 文件传输功能在队列模式下完全失效 |
| [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) — Desktop项目级会话cwd回退 | 2026-07-16 | 开放 | Windows用户高频场景，已有1个👍 |
| [#76381](https://github.com/NousResearch/hermes-agent/issues/76381) — PluginSlot未渲染 | 2026-08-01 | 开放 | 文档化功能但未实现，影响插件开发者体验 |
| [#76064](https://github.com/NousResearch/hermes-agent/issues/76064) — Demo插件默认启用 | 2026-08-01 | 开放 | 生产环境UI污染，建议快速修复 |
| [#76485](https://github.com/NousResearch/hermes-agent/issues/76

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时，PicoClaw 项目保持**中低活跃度**。共更新 1 条 Issue 与 3 条 PR，其中 1 条 PR 已合并（中文本地化），2 条新 PR 待合并（Exa 搜索、OrcaRouter 提供商），暂无新版本发布。社区对多模型路由与搜索能力扩展的需求清晰可见，但核心稳定性 Issue #3203 长期未获回应，项目健康度需关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | ✅ 已合并 | 添加繁体中文（zh-TW）本地化，统一 WebUI 与文档术语，提升中文用户安装与使用体验。 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 🔄 待合并 | 新增 Exa 原生 Web 搜索 Provider，支持 `type:auto`、`contents.highlights`、范围过滤（`d`/`w`/`m`/`y`），通过 `X-Api-Key` 鉴权。 |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | 🔄 待合并 | 新增 OrcaRouter 作为 OpenAI 兼容 Provider，支持 `vendor/model` 格式路由，丰富多模型接入能力。 |

**推进小结：** 今日合并 1 条，待合并 2 条。本地化与功能扩展并行推进，整体呈稳步增量态势。

---

## 4. 社区热点

### 🔴 Issue #3203 — Matrix sync loop 断网后静默死亡
**[链接](https://github.com/sipeed/picoclaw/issues/3203)** · 👍 2 · 7 条评论 · 创建 2026-07-02 · 更新于 2026-08-01 · 标记 `stale`

**核心诉求：** Matrix 频道 `/sync` 长轮询在任意网络中断或 homeserver 重启后永久停止响应，且主进程未退出，导致 `systemd Restart=on-failure` 无法触发重启，用户完全无感知。

**背后分析：**
- 影响长期部署场景（systemd 托管、无人值守运行）；
- 标记 `stale` 表明 Issue 长期未获维护者回应，存在流失风险；
- 与当前 OpenAI 兼容层扩展形成对比，基础设施稳定性优先级有待提升。

---

### 🟡 PR #3299 / #3309 — 搜索与路由能力扩展
**[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** · 新增 Exa 搜索 Provider  
**[PR #3309](https://github.com/sipeed/picoclaw/pull/3309)** · 新增 OrcaRouter Provider

社区对**搜索工具接入**与**多模型路由聚合**需求强烈，两条 PR 均聚焦提升 PicoClaw 的集成广度。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` 循环无重连逻辑，网络/服务端中断后静默失败，systemd 不触发重启 | 无 |

**结论：** 当前最高优先级 Bug 缺乏修复进展，需维护者重点关注。

---

## 6. 功能请求与路线图信号

| 需求方向 | PR | 可能性评估 |
|---|---|---|
| 原生 Exa Web 搜索 | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 高 — PR 结构完整，已支持范围过滤与 highlights，可直接纳入 |
| OrcaRouter 多模型路由 | [#3309](https://github.com/sipeed/picoclaw/pull/3309) | 高 — 符合现有 Provider 扩展模式，代码量小 |
| Matrix 断线重连机制 | 无 | 低 — 暂无 PR，建议维护者主动推进或开放贡献 |

---

## 7. 用户反馈摘要

- **Matrix 用户痛点：** 长期使用 PicoClaw 作为 systemd 托管服务时，网络抖动会导致 sync 永久中断且无重启机制，运维体验差（Issue #3203）。
- **繁体中文用户：** 欢迎 zh-TW 本地化，但期待术语统一覆盖到所有渠道引导页面（PR #3261）。
- **搜索需求：** 用户希望原生支持 Exa 等现代搜索 API，减少对第三方工具的依赖（PR #3299）。
- **模型路由需求：** 多模型聚合路由（OrcaRouter）呼声高，便于统一管理不同供应商模型（PR #3309）。

---

## 8. 待处理积压

| 类型 | ID | 标题 | 建议 |
|---|---|---|---|
| 🔴 Issue | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop 无重连逻辑 | **立即响应**，长期 `stale` 标记可能导致 Issue 被自动关闭 |
| 🟡 PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa web search provider | 尽快 Review 合并 |
| 🟡 PR | [#3309](https://github.com/sipeed/picoclaw/pull/3309) | OrcaRouter provider | 尽快 Review 合并 |

---

**项目健康度评级：🟡 中等** — 功能扩展活跃，但核心稳定性 Issue 长期未响应，存在社区流失风险。建议优先处理 #3203 并建立 Matrix 重连机制的 Issue 追踪。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报
**日期：2026-08-02 | 数据周期：2026-08-01 00:00 – 23:59 UTC**

---

## 1. 今日速览

NanoClaw 今日保持高强度活跃：15 条 PR 更新（5 合并/关闭 + 10 开放）、2 条 Issue 交互（1 关闭 + 1 新建），并正式发布 **v2.1.54** rollup 版本。项目核心进展集中在三项：iMessage 通道重构完成（含本地与 Photon 双后端）、非 Claude 提供商的 setup 流程修复、凭证过期告警机制落地。整体健康度良好，PR 合并率 33%，社区贡献者参与度较高。

---

## 2. 版本发布

### 📦 v2.1.54（Rollup Release）
**发布内容：** 覆盖 v2.1.18 至 v2.1.54 期间所有已合并变更的汇总版本。

**关键突破性变更（Breaking）：**
- **iMessage 通道统一**：原先分散的 iMessage 集成重构为单一 `imessage` 通道，通过 `/add-imessage` 安装，支持两个可插拔后端：
  - **Local**：通过 Chat SDK 桥接本机 `chat.db`
  - **Hosted**：通过 [Photon](https://photon.codes) 原生集成
- 此变更替代了先前 PR #2999 与 #3164，提供了更完善的注册流程。

**迁移注意事项：**
- 使用旧版 iMessage 集成的用户需重新运行 `/add-imessage` 并按提示选择后端类型。
- 确认 Photon 账户（Hosted 模式）或本地 macOS Chat SDK 环境已正确配置。
- 查阅完整变更日志：https://github.com/qwibitai/nanoclaw/releases/tag/v2.1.54

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（5 条）

| PR | 类型 | 摘要 | 贡献者 | 链接 |
|----|------|------|--------|------|
| #3170 | Fix | 修复非 Claude 提供商 setup 时错误引导安装 Claude CLI 的问题，将故障协助正确分发到用户选择的提供商 | glifocat | [链接](https://github.com/qwibitai/nanoclaw/pull/3170) |
| #3168 | Fix | 关闭发布流程中的安全漏洞，防止合并后状态不一致 | glifocat | [链接](https://github.com/qwibitai/nanoclaw/pull/3168) |
| #3167 | Feature | 新增凭证过期告警：当 provider 凭据过期时在终端和日志中明确提示，避免 silently 失败 | AmiTal4 | [链接](https://github.com/qwibitai/nanoclaw/pull/3167) |
| #2999 | Feature | iMessage 通道统一（本地后端） | underthestars-zhy | [链接](https://github.com/qwibitai/nanoclaw/pull/2999) |
| #3164 | Feature | iMessage Hosted 后端（Photon），完善注册流程 | glifocat | [链接](https://github.com/qwibitai/nanoclaw/pull/3164) |

**进展评估：** 今日 5 条 PR 合并标志着三个方向同时推进：(1) **通道层** iMessage 统一完成，(2) **可靠层** 凭证管理告警上线，(3) **体验层** setup 流程修复。项目架构稳定性与多提供商兼容性显著提升。

---

## 4. 社区热点

### 🔥 高关注度 Issue / PR

**#3171 [OPEN] Qodo Skills 依赖未配置的集成，且拦截正常编码请求**
- 作者：glifocat | 创建：2026-08-01
- 摘要：两个内置 skill（`get-qodo-rules`、`qodo-pr-resolver`）依赖 Qodo SaaS 账户，但项目中无任何设置步骤。两者均从 `~/.qodo/config.json` 读取 API Key，导致未配置用户遇到静默失败或行为异常。
- 链接：https://github.com/qwibitai/nanoclaw/issues/3171
- **诉求分析：** 用户希望内置 skill 在依赖外部服务时具备降级机制或明确提示，避免"开箱即用"体验被打断。同日 #3172 PR（移除两个 Qodo skill）正在处理此问题。

**#2750 [OPEN] 容器被 kill 后恢复 stale outbound.db journal，修复轮询竞态条件**
- 作者：sturdy4days | 创建：2026-06-12 | 最近更新：2026-08-01
- 摘要：修复两个与 `outbound.db` READONLY 句柄相关的失败模式（#2516、#2640），涉及容器 SIGKILL 后的 journal 恢复逻辑。
- 链接：https://github.com/qwibitai/nanoclaw/pull/2750
- **诉求分析：** 这是长期悬置的稳定性问题，涉及多用户生产环境的可靠性痛点，近期被重新激活讨论。

**#2801 [OPEN] Router 输入安全加固：safeParseContent 对原始值类型处理不当**
- 作者：sturdy4days | 创建：2026-06-17
- 摘要：`JSON.parse` 直接应用于原始负载（如 `"5"`、`"true"`）时会返回非 object 类型，导致 `.text`/`.sender` 读取返回 `undefined`，破坏 fallback 逻辑。
- 链接：https://github.com/qwibitai/nanoclaw/pull/2801
- **诉求分析：** 安全与健壮性修复，影响路由层对非结构化输入的容错能力。

---

## 5. Bug 与稳定性

| 问题 | 来源 | 严重程度 | Fix PR | 状态 |
|------|------|----------|--------|------|
| 非 Claude 提供商 setup 失败时错误提示安装 Claude CLI | Issue #3169 | 🟡 中 | #3170 | ✅ 已合并 |
| 容器 rootless Docker 环境下 agent containers 不可用（双重故障） | PR #3174 | 🟠 高 | — | 🔄 开放 |
| `migrate-v2` 中调用已重命名的 `insertTask`（应为 `insertTaskRow`），导致静态 ESM 导入失败 | PR #3166 | 🔴 高 | — | 🔄 开放 |
| 凭证过期后仅输出模糊错误信息，无明确告警 | PR #3167 动机 | 🟡 中 | #3167 | ✅ 已合并 |
| `safeParseContent` 对原始值类型返回非 object，破坏路由 fallback | PR #2801 | 🟠 高 | — | 🔄 开放 |
| 容器 SIGKILL 后 `outbound.db` journal 残留导致消息发送异常 | PR #2750 | 🔴 高 | — | 🔄 开放 |

**稳定性评估：** 今日修复了 setup 流程中的关键引导 bug，但 **rootless Docker 支持** 和 **数据库迁移 bug** 仍是高优先级未解决问题，可能阻塞部分用户的升级路径。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 相关 PR | 纳入可能性 |
|------|------|---------|-----------|
| 统一 iMessage 通道（本地 + 云端后端） | PR #2999 / #3164 | #2999, #3164 | ✅ 已在 v2.1.54 中发布 |
| 凭证过期告警 | PR #3167 | #3167 | ✅ 已发布 |
| 移除未配置的 Qodo skills | PR #3172 | #3172 | 🔄 开放，预计纳入下一 patch |
| Rootless Docker 支持 | PR #3174 | #3174 | 🔄 开放，属于基础设施兼容性改进 |
| 重复消息去重（`send_message` 后不重复输出） | PR #2956 | #2956 | 🔄 开放，影响多通道投递一致性 |
| Router 输入安全加固 | PR #2801 | #2801 | 🔄 开放，属于核心安全改进 |

**路线图信号：** 项目当前重点在于 **通道统一**（iMessage）、**可靠性增强**（凭证告警、journal 恢复）和 **多提供商兼容性**（非 Claude setup 修复、rootless Docker）。

---

## 7. 用户反馈摘要

- **setup 体验痛点**：用户选择非 Claude 提供商后，setup 失败仍引导安装 Claude CLI，造成困惑（Issue #3169，已修复）。
- **内置 skill 依赖问题**：Qodo 相关 skills 需要外部 SaaS 账户但无配置引导，影响开箱体验（Issue #3171）。
- **凭证管理盲区**：Codex ChatGPT 凭据过期时仅显示模糊的 "Read-only file system" 错误，无法定位根因（PR #3167 动机），用户亟需明确的凭据状态通知。
- **容器化部署限制**：rootless Docker 环境下 agent containers 无法使用，当前仅限 `docker` group 成员正常运作（PR #3174）。
- **消息重复投递**：agent 通过 `send_message` MCP 工具发送消息后又重复输出文本，导致通道接收重复内容（PR #2956）。

---

## 8. 待处理积压

| PR/Issue | 创建日期 | 天数未响应 | 优先级 | 建议 |
|----------|----------|-----------|--------|------|
| #3174 fix: support rootless Docker | 2026-08-01 | 今日 | 🟠 高 | 尽快 review，影响容器部署兼容性 |
| #3166 fix(migrate-v2): insertTask 重命名遗漏 | 2026-08-01 | 今日 | 🔴 高 | 阻塞迁移流程，建议优先合并 |
| #2750 恢复 stale outbound.db journals | 2026-06-12 | 51 天 | 🔴 高 | 长期稳定性问题，需安排 review |
| #2801 Router 安全加固 | 2026-06-17 | 46 天 | 🟠 高 | 安全类修复，建议加速处理 |
| #2956 重复消息去重 | 2026-07-05 | 28 天 | 🟡 中 | 体验类修复，可排入下一迭代 |
| #3171 Qodo skills 依赖问题 | 2026-08-01 | 今日 | 🟡 中 | PR #3172 正在处理，等待合并 |

---

**报告生成时间：** 2026-08-02 | **数据来源：** GitHub API (nanocoai/nanoclaw)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报
**日期：2026-08-02** | 数据来源：nearai/ironclaw

---

## 1. 今日速览

过去24小时项目保持高活跃度：**11 条 Issues**（9 新开/活跃、2 已关闭）和 **24 条 PR**（16 待合并、8 已合并/关闭）。核心工作集中在 Reborn 架构重构（Wave 2）与 CI _gate 治理，`extension_host` 与 `product_contracts` 的端口反转已完成合并（#6998/#7002），`extension_manager` 拆分（#7003）已进入 Review。性能瓶颈方面，Postgres API 容量恢复（#6973）仍待合并，libSQL `thread_store_writes` 在工具密集型场景下 p95 延迟达 37–135s（#6974）。**项目整体健康度：良好，架构重构推进顺利，但存在若干关键性能回归待修复。**

---

## 2. 版本发布

无新版本发布。

> 注：PR #5598（chore: release）仍在 Open 状态，包含 `ironclaw_common` 0.4.2→0.5.0（⚠ API breaking）、`ironclaw_safety` 0.2.2→0.2.3、`ironclaw_skills` 0.3.0→0.4.0 的版本升级。

---

## 3. 项目进展 — 今日合并/关闭

| PR | 状态 | 说明 |
|----|------|------|
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | ✅ CLOSED | **Wave 2 Slot 1** — `extension_host` 的产品端口反转到 `product_contracts`，行为无变更，仅定义迁移 |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | ✅ CLOSED | **Wave 2 WS5** — `webui` + `openai_compat` 端口反转到 `product_contracts`，依赖管理清理 |
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | ✅ CLOSED | **CI Gate 治理** — 完成 #6963 的 path-keyed gate 清单，inventory-driven 发现 + fail-closed 策略落地 |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | ✅ CLOSED | **Wave 1 真理审计** — 校验 `target-architecture/` 文档与实际 merged main 的一致性，7 个 PR 全部闭环 |
| [#6761](https://github.com/nearai/ironclaw/pull/6761) | ✅ CLOSED | **回归测试** — 新增 generic outbound registration 覆盖，防止 `register_generic_channel_outbound_targets` 退化 no-op |
| [#6921](https://github.com/nearai/ironclaw/issue/6921) | ✅ CLOSED | **依赖重构** — 提取 loop/extension/product 中性契约词汇到 `ironclaw_host_api`，密封 evidence minting |
| [#6963](https://github.com/nearai/ironclaw/issue/6963) | ✅ CLOSED | **CI Gate 跟踪** — path-keyed gate 治理 issue 关闭，剩余 gate 已 inventory-driven 覆盖 |

**整体推进：** Wave 2 重构已清理 Slot 1–5 中的 3 个 PR，`extension_manager` 拆分（#7003）和 `operator` 端口反转（#7004）仍在进行中，目标是将 `ironclaw_extension_host` 的职责边界重新定义清晰。

---

## 4. 社区热点

| Issue/PR | 类型 | 热度分析 |
|----------|------|----------|
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | Bug/性能 | **最高关注** — libSQL `thread_store_writes` 在工具密集型压测场景下 p95 37–135s，远超 2.5s 阈值；源自 #6696 的行式 journal 回归 |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | 性能修复 | 恢复 Postgres API 容量：p95 从 12.0s 恢复到 ~3.74s，但工具密集型子集仍未达标，待进一步修复 |
| [#7011](https://github.com/nearai/ironclaw/issues/7011) | 架构/Bug | `extension_manager` 拆分 PR（#7003）审查中发现 5 个预存问题：假 `WriteFilesystem` effect、未测试的 lock predicate、2 个缺失 dispatch 测试、6 个丢失 causes |
| [#6978](https://github.com/nearai/ironclaw/issues/6978) | CI/Bug | **Critical** — `workflow_dispatch` 触发 `reborn-tests.yml` 时 `critical-mutation` 因 `if:` 条件仅允许 `pull_request\|merge_group` 导致静默跳过，roll-up 仍然 red |
| [#7009](https://github.com/nearai/ironclaw/issues/7009) | 功能请求 | 请求将 OrcaRouter 加入内置 LLM provider（`providers.json` 已有 OpenRouter、Together 等，唯独缺失 OrcaRouter）|

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|----------|----------|------|----------|
| 🔴 **Critical** | [#6978](https://github.com/nearai/ironclaw/issues/6978) | `workflow_dispatch` 触发时 `critical-mutation` gate 静默跳过，导致测试 roll-up 误报 red | 无 Fix PR |
| 🔴 **Critical** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` 在工具密集型压测下 p95 37–135s（目标 <2.5s） | #6973 部分修复 Postgres 容量，工具密集型子集仍需跟进 |
| 🟡 **Medium** | [#7006](https://github.com/nearai/ironclaw/issues/7006) | `queued-message steering`（#5981）在 ~180 行触达 integration-tier coverage gate，但这些路径在 hermetic harness 中无法执行 | 无 Fix PR |
| 🟡 **Medium** | [#6999](https://github.com/nearai/ironclaw/issues/6999) | `reborn_dependency_boundaries` server-lifecycle 规则未覆盖 WebChat v2 路由表面 | 无 Fix PR（记录型 issue）|
| 🟠 **Low** | [#7011](https://github.com/nearai/ironclaw/issues/7011) | `extension_manager` 拆分引入 5 个预存问题（false WriteFilesystem、untested lock 等） | #7003 待修复 |

---

## 6. 功能请求与路线图信号

| 请求 | Issue/PR | 分析 |
|------|----------|------|
| OrcaRouter 内置 provider | [#7009](https://github.com/nearai/ironclaw/issues/7009) | `providers.json` 已支持 OpenRouter、Together、Fireworks 等 9 个多 provider gateway，OrcaRouter 缺失；社区有实际需求，**可能被纳入下一版本** |
| OOBE 自动化任务后端 | [#6993](https://github.com/nearai/ironclaw/issues/6993) | UI 原型已落地（#6994），当前 issue 追踪后端 wiring；**属于已规划的路线图功能，预计近期推进** |
| cached system prefix 稳定性 | [#7001](https://github.com/nearai/ironclaw/pull/7001) | 保持 system prefix 跨模型调用字节稳定，配合 #6997 的 explicit `cache_control` breakpoints；**属于 pi-harness 采纳计划的 P0 项，即将合并** |
| Anthropic `cache_control` breakpoints | [#6997](https://github.com/nearai/ironclaw/pull/6997) | 双传输路径显式设置 `cache_control`，不再依赖自动缓存；**P0，已在队列中** |

---

## 7. 用户反馈摘要

- **性能痛点**：#6973/#6974 显示用户和 CI 对 Postgres/libSQL 容量恢复有强烈诉求，行式 journal（#6696）引入的回归影响生产级压测，p95 从 3.74s 劣化至 12s 引起重视。
- **架构清晰度**：Wave 1/2 的多轮重构（#6995、#6998、#7002、#7003）反映维护者对 crate 依赖边界的持续梳理，社区贡献者（@serrrfirat、@BenKurrek）深度参与设计决策。
- **CI 可信度**：#6978 暴露了 `workflow_dispatch` 与 `merge_group` 条件下 gate 行为不一致的隐患，影响开发者对 CI 结果的信任。
- **工具集成需求**：#7009 表明用户实际使用 OrcaRouter 作为多 provider gateway，期望项目原生支持。

---

## 8. 待处理积压

| 类型 | Issue/PR | 创建日期 | 风险/说明 |
|------|----------|----------|-----------|
| 🔴 **PR 积压** | [#6780](https://github.com/nearai/ironclaw/pull/6780) | 2026-07-28 | Deep-link register/install gateway + private manifest source，re-port 自 #5409，待合并 |
| 🔴 **PR 积压** | [#5981](https://github.com/nearai/ironclaw/pull/5981) | 2026-07-11 | Queued-message steering（核心功能），已在队列中但触发 coverage gate 误报（#7006） |
| 🟡 **PR 积压** | [#5982](https://github.com/nearai/ironclaw/pull/5982) | 2026-07-11 | Budget approval-as-blocked-gate + usage settings，依赖 #5981 |
| 🟡 **PR 积压** | [#7003](https://github.com/nearai/ironclaw/pull/7003) | 2026-08-01 | `extension_manager` 拆分，含 #7011 发现的 5 个预存问题待修复 |
| 🟢 **Issue 积压** | [#6978](https://github.com/nearai/ironclaw/issues/6978) | 2026-07-31 | **Critical** — `workflow_dispatch` CI gate 行为不一致，无 Fix PR |

---

**报告生成时间：** 2026-08-02 | **分析师：** Agnes（Sapiens AI）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报
**日期：2026-08-02 | 数据周期：2026-08-01 ~ 2026-08-02**

---

## 1. 今日速览

LobsterAI 今日共处理 7 条 Issue（6 条已关闭，1 条保持开放）与 2 条待合并 PR，项目活跃度处于**中上水平**。关闭的 6 条 Issue 中包含 5 个 Bug 修复与 1 个功能请求，覆盖 MCP 引擎兼容性、长图解析、i18n 国际化、定时任务显示等核心问题，反映出社区对基础稳定性的关注。当前无新版本发布，2 条待合并 PR 主要聚焦 UX 细节改进，项目整体处于**稳定迭代期**。

---

## 2. 版本发布

> 过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日有 2 条 PR 处于待合并状态，尚未关闭，但关联的 Issue 已全部标记为 `[CLOSED]`，说明对应修复已进入合并流程或已通过其他方式解决。

| PR | 作者 | 状态 | 摘要 |
|---|---|---|---|
| [#1224](https://github.com/netease-youdao/LobsterAI/issues/1224) | @MaoQianTu | OPEN | 修复 i18n 硬编码问题，支持 Agent 弹窗 Escape 键关闭及删除防重复点击 |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | @wangxu-dev | OPEN | 会话重命名失败时展示本地化错误反馈，修复 #670 |

**进展评估：** 今日修复集中在 UX 与 i18n 层面，未涉及核心引擎重大变更。项目整体向前推进以**用户体验打磨**为主，技术架构无突破性更新。

---

## 4. 社区热点

| Issue | 作者 | 评论 | 👍 | 标签 | 热度分析 |
|---|---|---|---|---|---|
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | @qxjysd | 2 | 1 | MCP / openclaw | 🔥 社区关注度高：自定义 MCP 引擎兼容性是 AI 智能体扩展的核心痛点，SSE 与 HTTP 支持不一致的问题直接影响开发者体验 |
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | @devilszy | 2 | 0 | Bug / 长图解析 | 🔥 中等热度：长图上传报错导致任务不可用，属于影响核心功能的稳定性问题 |
| [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | @MaoQianTu | 2 | 0 | 功能请求 | ⭐ 功能请求类，用户希望代码块支持行号切换，与开发效率直接相关 |

**热点背后诉求分析：**
- **#1293** 反映用户对 LobsterAI 作为"AI 智能体平台"的定位期待——多引擎、多协议兼容性是扩展生态的基础，目前 openclaw 仅支持 SSE 的 MCP 实现成为瓶颈。
- **#1296 / #1298** 连续出现解析与输入限制问题，暗示长上下文处理与输入校验逻辑存在缺陷，建议纳入下一版本重点回归测试范围。

---

## 5. Bug 与稳定性

今日共关闭 6 条 Issue，其中 5 条为 Bug 类问题，按严重程度排列如下：

| 优先级 | Issue | 标题 | 作者 | 状态 | 关联 PR |
|---|---|---|---|---|---|
| 🔴 高 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 上传 3M 长图解析导致页面崩溃，任务不可用 | @devilszy | CLOSED | — |
| 🔴 高 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 模型连接正常，输入两个字即提示超长 | @xuzx-code | CLOSED | — |
| 🟡 中 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 HTTP MCP 无法在 openclaw 引擎中使用 | @qxjysd | CLOSED | — |
| 🟡 中 | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 定时任务删除后历史标题展示错误 | @xuzx-code | CLOSED | — |
| 🟡 中 | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 关闭模型 Provider 编辑面板后无法再编辑其他 Provider | @funaiy | CLOSED | — |
| 🟢 低 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | CoworkPromptInput 硬编码中文标签，Agent 弹窗缺少 Escape 键与防重复点击保护 | @MaoQianTu | OPEN | [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) |

> **说明：** #1293、#1296、#1298、#1305、#1307 均已关闭但暂无关联 PR 显示，推测已通过其他分支提交修复。#1223 仍有待合并的 PR #1224。

---

## 6. 功能请求与路线图信号

| Issue | 描述 | 作者 | 状态 | 纳入下一版本可能性 |
|---|---|---|---|---|
| [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 代码块添加行号显示切换按钮（有/无语言标识） | @MaoQianTu | CLOSED | ⭐⭐⭐⭐ 高 — 开发者体验优化，且已有明确技术方案（react-syntax-highlighter） |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 支持 HTTP 协议 MCP（当前仅支持 SSE） | @qxjysd | CLOSED | ⭐⭐⭐ 中高 — 生态扩展需求，与 openclaw 引擎能力直接相关 |

**路线图信号判断：** 代码块行号功能属于前端体验增强，风险低、收益明确，预计纳入近期迭代。MCP HTTP 协议支持涉及引擎层改造，需评估技术复杂度与优先级。

---

## 7. 用户反馈摘要

| 反馈类型 | 来源 | 摘要 |
|---|---|---|
| ❌ 痛点 | #1296 | 长图上传后页面崩溃，新开任务持续报错，功能完全不可用 |
| ❌ 痛点 | #1298 | 模型连接测试通过，但极短输入即触发"内容过长"错误，校验逻辑与模型实际限制不匹配 |
| ❌ 痛点 | #1223 | i18n 硬编码导致英文用户提示词中出现中文字符"输入文件"，违反多语言一致性原则 |
| ⭐ 满意 | #1302 | 用户对代码块行号功能有明确需求，技术方案描述清晰（React-Syntax-Highlighter showLineNumbers），表明社区对开发工具链有较高要求 |
| ⭐ 满意 | #2358（PR） | 用户期望会话重命名失败时有明确反馈，而非静默失败，体现对 UX 可感知性的重视 |

---

## 8. 待处理积压

| 类型 | ID | 标题 | 作者 | 创建时间 | 更新 | 建议 |
|---|---|---|---|---|---|---|
| 🔶 待合并 PR | [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | 修复 i18n 硬编码 + Agent 弹窗 UX 改进 | @MaoQianTu | 2026-04-01 | 2026-08-01 | 已关联 Issue #1223，建议优先合并 |
| 🔶 待合并 PR | [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 会话重命名失败时展示本地化反馈 | @wangxu-dev | 2026-07-18 | 2026-08-01 | 修复 #670，影响范围小，建议尽快合并 |
| 🟠 长期开放 Issue | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | CoworkPromptInput i18n 硬编码 + Agent 弹窗问题 | @MaoQianTu | 2026-04-01 | 2026-08-01 | 有对应 PR #1224，合并后同步关闭 |

> **维护者提醒：** 有 2 条 PR 已等待近 4 个月（#1224 自 2026-04-01），建议加快审查节奏，避免社区贡献者体验下降。同时，#1293 / #1296 / #1298 等 Bug 虽已关闭但无关联 PR 公开，建议确认修复是否已纳入主线分支并补充相关说明。

---

**报告生成时间：** 2026-08-02  
**数据来源：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) GitHub

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目日报 | 2026-08-02

## 1. 今日速览

Moltis 项目今日整体活跃度偏低，24小时内无新 Issue 提交，但 PR 贡献保持节奏（3条更新，2条合并/关闭，1条待审）。两个已关闭的 PR 分别推进了可观测性基础设施建设和权限安全加固，项目核心稳定性持续改善。社区暂无紧急问题或功能诉求，整体处于稳健维护期。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**已合并/关闭的 PR：**

- **#1174** [CLOSED] — 新增后端中立化的 agent 可观测性基础设施，支持 Langfuse v4 导出、OTLP 操作面板及终端用户反馈收集。该 PR 补齐了 Moltis 在分布式追踪和可观测性方面的短板，为后续生产环境监控奠定基础。
- **#1170** [CLOSED] — 修复 channel 权限模型的安全缺陷，将访问白名单与特权操作（`/sh`、privileged tools）解耦，引入 per-account `operators` 列表进行细粒度控制，消除了越权访问风险。

**当前 Open PR：**

- **#1182** [OPEN] — 解除 `main` session 的删除/归档限制，允许用户像其他 session 一样管理主会话。目前待审。

## 4. 社区热点

今日无高活跃度 Issue/PR 讨论。已关闭的两个 PR 均无评论和 👍 标记，反映当前社区对这两项改进已默认接受。

## 5. Bug 与稳定性

- **已修复（#1170）**: channel 发送者通过访问白名单绕过权限限制、访问特权命令的问题 → 已通过 per-account operators 列表修复。
- **功能增强（#1174）**: 之前缺乏 agent 完成记录的追踪能力 → 现已支持 immutable completion-only turns 及 provider failover 归因。

无今日新报告的 Bug 或崩溃问题。

## 6. 功能请求与路线图信号

- **#1182** 反映用户对 session 管理灵活性的需求，`main` session 不应享有永久不可删除的特权。若合并，将完善 session 生命周期管理能力，可能纳入下一版本。

## 7. 用户反馈摘要

今日无新 Issue，无直接用户反馈。从已关闭 PR 的改动可推断：
- 用户对**可观测性**有明确需求（#1174），希望能集成 Langfuse 等主流追踪后端。
- 用户对**权限安全**敏感，#1170 的修复回应了生产环境对越权访问的担忧。

## 8. 待处理积压

- **#1182** [OPEN] — session 管理改进，自 2026-08-01 提交至今未见维护者评审，建议优先处理。

---

**项目健康度评估**: 🟢 稳健 — PR 节奏稳定，安全与可观测性持续改进，无紧急风险。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw 项目动态日报 — 2026-08-02

---

## 1. 今日速览

过去24小时内，CoPaw 项目保持活跃：9条Issue更新（均为新开/活跃，0条关闭），13条PR更新（12条待合并，1条已合并）。维护者 BlackBox-Labs 集中推进了多项稳定性修复，涵盖记忆压缩、Provider模型对齐、空响应处理等核心问题。社区功能请求持续聚焦于**清理工具、全局快捷键、多智能体协作引导**三大方向。整体项目健康度良好，Bug修复节奏稳定。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日已合并/关闭 PR

| PR | 类型 | 说明 |
|----|------|------|
| [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) | Bug Fix | 修复插件来源的 Skill 标签在重启后丢失的问题（#6537）。通过修正 `reconcile_pool_manifest()` 和 `reconcile_workspace_manifest()` 的逻辑，确保未本地存放的插件 Skill 不再被错误删除。 |

### 今日待合并的重要 PR（12条）

- **[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)** — 修复自动压缩未触发 `summarize_when_compact` 记忆流程的问题，直接对应 Issue #6624
- **[#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630)** — 修复模型返回空响应时静默失败的问题，改为向用户报告
- **[#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631)** — 对齐阿里云 Coding Plan 模型列表，移除不支持的 `glm-5.1/5.2`，补充 `qwen3.7-plus` 等
- **[#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628)** — 修复压缩上下文注入 `role=user` 导致 DeepSeek 等 API 返回 400 的问题
- **[#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)** — 修复 ACP 通知与 prompt 响应并发时导致文本丢失的竞态问题（#6625）
- **[#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620)** — 修复 Gemini `thought_signature` relay 导致 `ToolCallBlock.extra_content` 崩溃的问题（#6619）
- **[#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618)** — 移除会话列表强制 UTC 时间戳归一化，修复时区显示错误
- **[#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632)** — 同上 #6598，针对 `reconcile` 周期的 Skill 标签保留修复
- **[#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622)** — 新增 OrcaRouter 内置 Provider，简化用户配置流程
- **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — 统一 Provider 发现、模型元数据、路由与 Agent 控制逻辑（大重构）
- **[#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490)** — 工具卡片图片内联展示 + 画廊导航功能
- **[#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306)** — 桌面端侧边栏添加 Workspace 快捷入口

**项目推进评估：** 今日维护者修复了 3 个关键 Bug（记忆压缩、ACP竞态、Provider崩溃），并推进了 Provider 体系重构与用户体验优化，整体稳定性显著提升。

---

## 4. 社区热点

| Issue/PR | 类型 | 评论数 | 热度分析 |
|----------|------|--------|----------|
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | Question | 1 | **多智能体协作引导缺失**引发关注。用户反馈7月起50+轮对话才发现 Default Agent 不会自动调用其他 Agent，需在 `PROFILE.md` 中显式写入。文档引导不足是核心痛点。 |
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | Feature | 2 | **全局清理页面**需求强烈。长期使用后数据臃肿、存储空间占用大，用户希望有统一的手动/自动清理入口。 |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Feature | 2 | **全局快捷键唤出浮动输入框**（类豆包/Raycast体验）。用户认为当前点击图标唤起整个主窗口"太重"，轻量场景需要更低的摩擦。 |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | Question | 2 | `nohup`/后台进程执行后 Agent 卡住，影响 shell 工具使用体验。 |
| [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | Bug | 1 | ACP 竞态导致文本丢失，已有 PR #6623 跟进修复。 |
| [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | Bug | 1 | CI gate 剥离 fenced Evidence blocks，影响 PR 提交体验。 |

---

## 5. Bug 与稳定性

### 严重度排序

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| 🔴 **高** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP `delegate_external_agent` 在通知与响应竞态时返回"completed without text output" | ✅ [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) |
| 🔴 **高** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | `ToolCallBlock` 无 `extra_content` 字段，Gemini streaming 崩溃 | ✅ [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) |
| 🟡 **中** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | 自动压缩未触发 `summarize_when_compact` 记忆流程 | ✅ [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) |
| 🟡 **中** | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | CI gate 剥离 fenced Evidence blocks，导致 PR 被误拒 | ❌ 暂无 |
| 🟡 **中** | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | `nohup`/后台进程执行后 Agent 卡住不返回 idle | ❌ 暂无 |
| 🟢 **低** | [#6618](https://github.com/agentscope-ai/QwenPaw/issues/6618) | 会话列表时间戳强制 UTC 导致本地时间显示错误 | ✅ [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 信号强度 | 分析 |
|------|-------|----------|------|
| 全局清理页面 | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | ⭐⭐⭐ 强 | 用户长期使用的核心痛点，数据存储管理缺失已被多次提及 |
| 全局快捷键浮动输入框 | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | ⭐⭐⭐ 强 | 对标豆包/Raycast，降低轻量提问摩擦，作者已核查代码路径 |
| 多智能体自动协作引导 | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | ⭐⭐ 中 | 用户文档体验问题，可能需要在默认 Prompt 或引导流程中改进 |
| OrcaRouter 内置 Provider | — | ⭐⭐ 中 | 已通过 PR #6622 实现，说明社区对统一 Provider 注册有需求 |
| Loongsuite 追踪集成 | [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | ⭐ 低 | 较垂直的使用场景，与 AgentScope 生态集成 |

---

## 7. 用户反馈摘要

**正向反馈：**
- 用户认可 QwenPaw 2.0 在记忆压缩和上下文管理方面的改进方向（Issue #6624 的反馈本身说明用户关注此功能）
- 内置 Provider 注册简化了配置流程（PR #6622 的 OrcaRouter）

**核心痛点：**
1. **数据管理缺失**：长期使用后存储空间臃肿，缺乏全局清理工具（#6593）
2. **轻量交互体验差**：全局快捷键缺失，"随手问一句"需要打开完整主窗口（#6568）
3. **多智能体引导不清晰**：文档未能有效传达 Default Agent 的行为模式，导致用户大量无效调试（#6621）
4. **Shell 工具稳定性**：后台进程（nohup/&）执行后 Agent 状态卡住（#6480）
5. **Provider 模型列表不准确**：阿里云 Coding Plan 列出不支持的模型（#6551 → PR #6631）

---

## 8. 待处理积压

| Issue | 类型 | 创建日期 | 等待天数 | 建议优先级 |
|-------|------|----------|----------|------------|
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | Bug | 2026-07-26 | 7天 | 高 — shell 工具是核心场景 |
| [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | Bug | 2026-08-01 | 1天 | 中 — 影响 PR 提交流程 |
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | Feature | 2026-07-31 | 2天 | 高 — 用户存储管理刚需 |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Feature | 2026-07-30 | 3天 | 中 — 用户体验优化 |
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | Question | 2026-08-01 | 1天 | 中 — 文档/引导改进机会 |

**维护者建议：**
- #6480（nohup 卡住）已等待7天，建议优先排查，涉及 shell 工具的核心稳定性
- #6621 反映的文档/引导问题可通过改进默认 Agent 行为或增强 Onboarding 流程解决，无需单独 Issue 跟踪

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-08-02

---

## 1. 今日速览

过去 24 小时 ZeroClaw 仓库保持高度活跃：**50 条 Issues 更新**（47 新开/活跃，仅 3 关闭），**50 条 PR 待合并**（0 已合并），整体呈现"讨论密集、合并保守"的状态。项目当前无新版本发布，v0.8.4 版本准备（PR #9648）仍在进行中。安全类 Issue 占据今日热点：WhatsApp Web 允许列表配置缺陷（S1 严重性）及 Cloud API token 泄露问题引发持续关注，同时 WATI 通道正式移除（PR #9571）清理了维护负担。eval 评估系统迎来一波合并潮，为后续回归测试框架奠定基础。

---

## 2. 版本发布

**无新版本发布。**

- PR #9648 标记了 v0.8.4 版本准备，但当前仍为 OPEN 状态，且 PR 描述指出翻译目录需修正后才能正式发布：
  > "The existing translation v0.8.4 tag still targets the earlier catalogue commit and must be corrected before release publication."
- 链接：[PR #9648](https://github.com/zeroclaw-labs/zeroclaw/pull/9648)

---

## 3. 项目进展

### 重要开放 PR（按功能域归类）

| PR | 主题 | 贡献者 | 状态 |
|---|---|---|---|
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | 移除 WATI 通道，清理模块、网关路由、CI 配置及迁移条目 | JordanTheJet | OPEN |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) | 将引擎工具注册表重构为 `ScopedToolRegistry`，封闭类型系统 | Nillth | OPEN |
| [#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) | Slack 通道新增 6 种 Agent 生命周期状态，改善长时间运行任务的可见性 | abhinavmathur-atlan | OPEN |
| [#9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) | Telegram 通道新增 `allow_groups` 字段，修复非提及群组消息的权限处理 | Hyye123 | OPEN |
| [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) | computer-use 工具新增 macOS/Linux X11/Windows 原生驱动 | JordanTheJet | OPEN |
| [#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080) | 远程 WSS 传输引入双向 mTLS、CSR 签发、证书吊销审计等安全机制 | Nillth | OPEN |
| [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) | 修复 OpenAI STT 凭证仅通过环境变量配置时失效的问题 | Papilionidae | OPEN |
| [#9056](https://github.com/zeroclaw-labs/zeroclaw/pull/9056) | 提供程序失败诊断从通用错误信封细化为按原因分类 | wm0018 | OPEN |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | Skills 注入默认切换为 compact 模式，降低 prompt 上下文消耗 | JordanTheJet | OPEN |

**eval 评估系统连续 6 个 PR 进入审阅队列**（#9220/#9221/#9222/#9223/#9244/#9248/#9225），构建了从 run receipt → baseline diff → LLM-judge grader → JUnit XML → 回归用例的种子全流程，预计将成为 v0.9.0 质量门禁的核心基础设施。

---

## 4. 社区热点

### 高讨论度 Issues（Top 5）

1. **[RFC: 分离会话历史与 Agent 长期记忆](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** — 16 条评论
   - 核心诉求：Runtime/Gateway/Channel 的 autosave 路径将对话轮次与长期记忆混存入 `MemoryCategory::Conversation`，导致生命周期语义模糊。
   - 社区呼声：需要明确区分"会话级持久化"与"Agent 策展式记忆"两种不同的存储与压缩策略。

2. **[RFC: 抽象 KeySource trait 分类主密钥来源](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** — 13 条评论
   - 已有 ChaCha20-Poly1305 加密基础，但 93 个 `#[secret]` 字段的来源分类缺乏抽象层。
   - 讨论焦点：生产部署（KMS/HashiCorp Vault）与本地开发密钥的管理策略如何统一抽象。

3. **[RFC: OpenAI Chat Completions 兼容适配器](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — 12 条评论
   - 当前仅支持 WebSocket 和 per-channel webhook，Open WebUI、LobeChat 等客户端无法直接接入。
   - 社区强烈期待：降低集成门槛，扩大生态兼容性。

4. **[RFC: OTel 跨轮次对话关联](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — 12 条评论
   - 建议携带 `gen_ai.conversation.id` 属性（OpenTelemetry SemConv v1.41.0）实现可观测性闭环。

5. **[RFC: 高风险 shell 命令确认分级 + 策略模式](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — 11 条评论
   - 当前仅有"完全允许"或"完全禁止"两级，缺少 Claude Code 风格的 `allow/ask/deny` 中间态。

### 高讨论度 PR

- **[feat: computer-use 多平台驱动](https://github.com/zeroclaw-labs/zeroclaw/pull/9091)** — 支持 macOS/Linux/Windows 桌面交互控制，RFC #6909 的配套实现。
- **[feat: 安全传输与浏览器入网机制](https://github.com/zeroclaw-labs/zeroclaw/pull/9080)** — 引入 mTLS + 证书生命周期管理，是 v0.9.0 安全架构的关键组件。

---

## 5. Bug 与稳定性

### 严重级别分类

| 级别 | Issue | 描述 | Fix PR |
|---|---|---|---|
| **S1 安全** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp Web 在 `mode=business` 下，空 `allowed_groups` 默认允许**所有群组**，配置形同虚设 | RFC #9397（进行中） |
| **S2 降级** | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | WhatsApp Cloud `request_approval` 在发送失败或取消时泄露真实 approval token | 待定 |
| **P1 功能** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI 创建的 cron 任务 `delivery.mode` 硬编码为 `None`，调度执行后输出被丢弃 | 待定 |
| **S3 次要** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk 使用错误的 bot message API 格式 | RFC #9397 已提及，需跟进 |

**关键风险点：** WhatsApp 双通道（Web + Cloud）均存在安全/配置类缺陷，建议维护者优先处理 RFC #9397 和 #9417 的修复 PR。

---

## 6. 功能请求与路线图信号

### 高置信度纳入信号

| 需求 | 依据 |
|---|---|
| **OpenAI Chat Completions 网关适配** | RFC #8603（12 条评论，accepted），PR 合并将直接扩展客户端生态 |
| **跨轮次 OTel 对话关联** | RFC #8933（accepted），语义约定对齐，低风险高收益 |
| **Skills compact 注入默认化** | PR #8313 已进入审阅，deprecation 窗口策略清晰 |
| **eval 回归测试框架** | #9220/#9221/#9222/#9223/#9244/#9248/#9225 形成完整链路，预计 v0.9.0 前置合并 |
| **computer-use 多平台支持** | PR #9091 已完成 macOS/Linux/Windows 驱动实现，对应 RFC #6909 |
| **OpenRouter prompt cache 兼容** | Issue #9631，通过 `session_id` 传递降低 API 成本，实现简单 |

### 中等置信度

- **A2A 出站客户端（RFC #9106）**：10 条评论，解决 Agent 间主动调用问题，依赖 #3566 基础。
- **内存后端分离（RFC #9103）**：10 条评论，将权威存储与 Lucid 等富连接器解耦。
- **内存生命周期与存储解耦（RFC #6850）**：9 条评论，架构层关键重构。

### 待观察

- **MoA 虚拟模型提供程序（RFC #8568）**：已关闭（accepted），实现优先级待确认。
- **Gemini Live 实时语音通道（RFC #8780）**：8 条评论，依赖 Gemini API 成熟度。
- **Security UX 重构（RFC #6971）**：8 条评论，涉及全系统安全策略的可观测性。

---

## 7. 用户反馈摘要

### 真实痛点提炼

1. **"配置了白名单却没有起到限制作用"** — WhatsApp Web `allowed_groups` 空列表默认放行所有群组（#9348），用户反映"看起来锁定的配置实际上是完全开放的"，这是严重的信任偏差。

2. **"CLI cron 任务运行后结果去哪了？"** — #9340 指出 CLI 创建的任务 delivery 硬编码为 `None`，运行成功但输出消失，用户无法得知结果，误以为任务失败。

3. **"OpenAI STT 凭证需要通过 config 文件而非环境变量配置才生效"** — #8576 反映当前 env-only 方式被忽略，用户被迫在 config 中重复声明凭证。

4. **"Slack 长时间任务看起来像卡住了"** — PR #8985 的初衷来自用户反馈：Agent 在处理复杂任务时，Slack 端无任何中间状态可见，用户误认为死锁。

5. **"LLM 调用成本过高，重复发送 system prompt"** — #9631 用户发现通过 OpenRouter 的请求每次重建 system prompt 和 tool schema，期待通过 `session_id` 启用 prompt cache 降低成本。

6. **"eval 结果缺乏可追踪性"** — #7065 催生的 eval 系列 PR 反映了用户对可重复测试、基线对比、CI 门禁的迫切需求。

---

## 8. 待处理积压

### 维护者关注提醒

| Issue/PR | 阻塞原因 | 建议行动 |
|---|---|---|
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) `ScopedToolRegistry` 重构 | XL 大小，依赖多个下游 PR 对齐 | 优先审阅，为工具注册表类型安全铺路 |
| [#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080) 安全传输 mTLS | XL 大小，安全架构核心 | 高优先级，v0.9.0 安全里程碑前置依赖 |
| [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) computer-use 驱动 | XL 大小，多平台实现 | 审阅难度高但用户呼声强烈 |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) KeySource trait RFC | 13 条评论未收敛 | 需要维护者做最终设计裁定 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Shell 命令确认分级 | 11 条评论，p1 优先级 | 与安全架构 RFC #7142 协同决策 |
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) WhatsApp 安全漏洞 | S1 严重性，已接受 | **紧急**：RFC #9397 已提出修复方向，需尽快落地 PR |
| [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) WhatsApp Cloud token 泄露 | S2 降级，无 fix PR | 建议维护者分配或社区认领 |

### 长期开放 Issue（>30 天未更新）

- [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — 统一能力目录与插件迁移路线图（Tracker，最后更新 2026-08-01）
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer 决策队列 Tracker（最后更新 2026-08-01）
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — v0.9.0 auth/security/gateway 队列（最后更新 2026-08-01）

---

**报告生成时间**：2026-08-02  
**数据来源**：ZeroClaw GitHub Repository（zeroclaw-labs/zeroclaw）  
**分析师**：Agnes-2.0-Flash（Sapiens AI）

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*