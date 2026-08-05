# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 01:41 UTC

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

OpenClaw 今日保持极高活跃度：24小时内新增/活跃 Issues 455 条、PR 381 条，共计 500 条问题流，显示项目处于快速迭代期。近 119 条 PR 已合并或关闭，包含多个 P0/P1 级核心修复（Gateway 进程管理、Discord/Slack 通道、子代理交付、压缩回收等）。无新版本发布，但多个长期积压 bug 正在集中攻克，项目整体健康度良好，稳定性投入力度显著。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 优先级 | 说明 |
|---|---|---|---|
| [#118558](https://github.com/openclaw/openclaw/issues/118558) | steipete | P1 🦞 | **Synology Chat**: 修复 webhook 拒绝消息被误报为成功投递的问题 |
| [#118450](https://github.com/openclaw/openclaw/issues/118450) | steipete | P1 🦪 | **Slack**: 修复 question card 在多消息投递后残留或编辑错误消息 |
| [#118556](https://github.com/openclaw/openclaw/issues/118556) | steipete | P3 | **测试**: 隔离 Linux 插件发现测试，减少噪声 |
| [#118554](https://github.com/openclaw/openclaw/issues/118554) | steipete | P3 | **测试性能**: 加速存储迁移测试 |
| [#118552](https://github.com/openclaw/openclaw/issues/118552) | steipete | P3 | **测试复用**: 共享 SQLite 数据库模板减少重复初始化 |
| [#118544](https://github.com/openclaw/openclaw/issues/118544) | steipete | — | **重构**: 规范化 Crabbox 运行时调用转换逻辑 |
| [#118536](https://github.com/openclaw/openclaw/issues/118536) | steipete | — | **Zalouser**: 修复 Reaction 路由通过规范的对话目标 |
| [#118543](https://github.com/openclaw/openclaw/issues/118543) | steipete | — | **测试**: 去重 ACP 投影器事件 setup，保留全部 24 个测试 |
| [#118787](https://github.com/openclaw/openclaw/issues/118787) | steipete | P1 🐚 | **Control UI**: 修复回答/取消 split-pane 问题后界面卡死 |

**进展评估：** 今日关闭的 PR 集中在通道层（Slack/Discord/Synology/Zalouser）和 QA 基础设施，显示出维护者团队对消息投递可靠性和测试稳定性的双重投入，项目基础稳定性有明显推进。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数）

| Issue | 标题 | 评论 | 等级 | 状态 |
|---|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默回复失败 | 104 | 🦞 diamond | ✅ 已关闭 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音会话无界保留 provider/consult 状态 | 59 | 🦞 diamond | 📂 开放 |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久抑制 Discord/WhatsApp | 25 | 🦞 diamond | ✅ 已关闭 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成结果静默丢失 | 23 | 🦞 diamond | 📂 开放 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 集中式文件名编码工具（多编码 Content-Disposition） | 20 | 🐚 platinum | 📂 开放 |

**热点分析：**

- **DeepSeek v4 Flash 静默失败（#116277）**：社区关注度高，该 Issue 已关闭但反映出多模型提供商兼容性问题频发，用户期望更健壮的 fallback 机制。
- **子代理结果丢失（#44925, #67777, #92433）**：三个相关 Issue 均聚焦子代理完成交付链路的可靠性，是当前架构的核心脆弱点，社区诉求强烈。
- **实时语音资源泄漏（#116201）**：维护者 vincentkoc 本人提出，属于架构级问题，预计将在后续版本中重构。

### 高点赞 Issues

| Issue | 标题 | 👍 |
|---|---|---|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX | 10 |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron 持续 LLM 请求失败 | 6 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | 支持 YAML 配置文件格式 | 2 |

---

## 5. Bug 与稳定性

### 高危 Bug（P0/P1，按严重程度）

| Issue | 标题 | 严重度 | Fix PR |
|---|---|---|---|
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程启动时被 plugin-metadata snapshot 占满，accept loop 饥饿 | P1 🦐 | 待修复 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection 持续写入下 livelock，阻塞主线程 | P1 🦞 | 待修复 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid` | P1 🦞 | 待修复 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | 主代理被 persistent workspace-state migration 阻塞（Anthropic 认证恢复后） | P1 🦞 | 待修复 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 在 model 完成后报 "thread switched branches" | P1 🦞 | 待修复 |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有持久化会话被硬限制在 128k context | P2 🦞 | ✅ [#118717](https://github.com/openclaw/openclaw/issues/118717) 已开 PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程，产生僵尸进程 | P1 🦪 | 待修复 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh 成功但 cron/heartbeat 因 10s 超时报错 | P1 🦐 | 待修复 |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 瞬时 LLM/socket 错误在 embedded-assistant 阶段不重试 | P2 🦞 | 待修复 |
| [#114690](https://github.com/openclaw/openclaw/issues/114690) | Discord 源回复在 Codex 压缩后可能被重复发送 | P2 🐚 | 待修复 |

### 今日已关闭/修复的 Bug

- [#116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash 静默失败（已关闭）
- [#115326](https://github.com/openclaw/openclaw/issues/115326) — Crash-loop breaker 永久抑制通道（已关闭）
- [#52249](https://github.com/openclaw/openclaw/issues/52249) — ACP 父会话 yield 等待子完成时卡死（已关闭）

**稳定性评估：** 今日新增 2 个严重迁移/启动类 Bug（#119263 DB迁移、#118846 Gateway启动），结合多个子代理交付和 transcript livelock 问题，核心引擎层稳定性面临压力，但维护者已在多个 PR 中针对性修复。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 支持度 | 路线图信号 |
|---|---|---|---|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX 渲染 | 👍10 | 学术/技术用户强需求，优先级 P2 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | 支持 YAML 配置文件格式 | 👍2 | DevOps 友好度提升，P3 低优先 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | WebChat 自托管 STT/TTS（绕过浏览器 Speech API） | 👍2 | 隐私/自托管场景核心需求，P2 |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | 向 Agent 运行时暴露 OpenRouter 用量成本 | 👍1 | 成本透明化，P2 |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | 标题感知分块 + 实体提取用于记忆搜索 | 👍2 | 记忆质量改进，P2 |
| [#79168](https://github.com/openclaw/openclaw/issues/79168) | 基于内容的 Prompt 注入扫描 | 👍1 | 安全增强，P2 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | 投递队列消息支持 TTL/过期 | 👍0 | 资源管理，P2 |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | `session.resetPrompt` 可配置会话启动消息 | 👍1 | 用户体验，P2 |

**结合 PR 的判断：**
- **#118505 / #118499**（macOS Realtime Talk 支持）已开启大体积 PR，说明原生客户端语音能力是近期重点投入方向。
- **#117550**（model-picker 保留 auth profile）正在修复认证配置丢失问题，对应 #46031 长期 bug。
- **#82950**（防止不安全 approval 模式挂起命令授权）是安全边界加固，可能纳入下一安全版本。

---

## 7. 用户反馈摘要

### 核心痛点

1. **子代理结果静默丢失** — 多个 Issue（#44925, #67777, #92433, #92369）反复报告同一类问题：子代理完成结果在 timeout/drain/orphan 场景下被丢弃且无重试、无通知，严重影响多代理编排工作流。

2. **Gateway 启动与稳定性** — #118846 报告启动时 plugin-metadata snapshot 使主线程 100% 占用，导致 WebSocket 连接失败；#115908 报告 transcript projection livelock 阻塞所有通道传输。用户反馈"gateway refuses to start"是最高频 complaint 之一。

3. **数据库迁移失败** — #119263 和 #111498 均涉及版本升级后数据库迁移卡死，导致整个 Gateway 无法启动，用户数据面临风险。

4. **通道适配层缺陷** — Discord（#44502, #114690）、Slack（#118450）、Signal（#116416）、Synology Chat（#118558）多个通道存在消息投递/路由/回复重复问题，影响生产环境可靠性。

5. **自托管语音需求未被满足** — #45508 指出 WebChat 的 TTS/STT 完全依赖浏览器 Web Speech API，忽略 `openclaw.json` 配置，自托管用户无法使用自定义语音服务。

### 用户满意点
- 维护者团队响应积极，多个 P1 Issue 已有对应 PR 或已关闭
- QA Lab 基础设施持续完善（#119396, #118965, #119378）
- macOS/iOS 原生客户端功能推进明显

---

## 8. 待处理积压

### 需维护者重点关注

| Issue | 问题 | 开放时长 | 建议 |
|---|---|---|---|
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 启动线程饱和 | 2 天 | 🔴 高优，影响启动可靠性 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | DB v14→v15 迁移失败 | 1 天 | 🔴 高优，阻碍版本升级 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection livelock | 7 天 | 🔴 高优，阻塞所有通道 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音无界状态保留 | 6 天 | 🟠 架构级，需产品决策 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理结果静默丢失 | 145 天 | 🟠 长期积压，影响多代理场景 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成投递丢失 | 112 天 | 🟠 同 #44925 系列 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理 announce 被丢弃 | 85 天 | 🟠 同系列 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏僵尸积累 | 78 天 | 🟡 运行时退化 |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 记忆管理混乱 | 147 天 | 🟡 多用户报告一致性差异 |
| [#75380](https://github.com/openclaw/openclaw/issues/75380) | provider-payload.jsonl 无界增长 | 107 天 | 🟡 磁盘占用风险 |

---

**日报生成时间：** 2026-08-05  
**数据来源：** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  
**分析师：** Agnes (Sapiens AI)

---

## 横向生态对比



# 开源个人 AI 助手生态横向对比分析
**数据周期：2026-08-05 | 分析师：Agnes (Sapiens AI)**

---

## 1. 生态全景

2026年Q3个人AI助手开源生态呈现**分层竞合、快速分化**态势：OpenClaw与CoPaw占据流量与贡献量头部，分别聚焦多通道网关与深度Agent编排；ZeroClaw以安全架构RFC驱动设计层创新；NanoBot/Hermes Agent等差异化定位项目稳步迭代。整体生态从"单点能力比拼"转向"通道兼容、多Agent编排、安全边界、成本优化"四维竞争，开源社区正在自发形成技术路线共识。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PR | 新版本 | 健康度 | 活跃阶段 |
|------|--------|-----|--------|--------|----------|
| **OpenClaw** | 455 | 381 | 无 | 🟢 良好 | 快速迭代 |
| **CoPaw** | 28 | 49 | 无 | 🟢 良好 | 功能打磨 |
| **ZeroClaw** | 50 | 50 | 无 | 🟡 安全压力大 | 架构重构期 |
| **NanoBot** | 5 | 26 | 无 | 🟢 良好 | 体验优化 |
| **Hermes Agent** | 50 | 50 | 无 | 🟡 B+ | 平台治理期 |
| **LobsterAI** | 1 | 13 | v2026.8.3（已封版） | 🟢 良好 | 商业化落地 |
| **PicoClaw** | 3 | 4 | 无 | 🟢 良好 | 稳定维护 |
| **NanoClaw** | 0 | 5 | 无 | 🟡 中等 | 低活跃维护 |
| **NullClaw** | 0 | 1 | 无 | 🟡 中等 | 静默期 |
| **Moltis** | 0 | 1 | 无 | 🟡 中性 | 自动化维护 |
| **CoPaw** | 28 | 49 | 无 | 🟢 良好 | 质量攻坚 |
| **TinyClaw** | — | — | — | — | 无活动 |
| **ZeptoClaw** | — | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**与同类项目对比：**

| 维度 | OpenClaw | 同类对比 |
|------|----------|----------|
| **社区规模** | Issues 455/24h，PR 381，贡献者集中 | 是NanoBot的90倍、Hermes Agent的9倍、CoPaw的16倍 |
| **技术路线** | 多通道网关（Gateway）+ 子代理编排 + 记忆压缩 | NanoBot/WebUI侧重单Agent体验；CoPaw侧重Plugin系统；ZeroClaw侧重安全架构 |
| **核心优势** | 通道覆盖最广（Discord/Slack/Synology/Zalouser/Control UI）；子代理链路最完整；测试基建（QA Lab）领先 | Hermes Agent多租户架构更激进；ZeroClawWasm长期愿景更强；LobsterAI商业化活动已落地 |
| **短板** | DB迁移、Transcript livelock、子代理结果丢失等核心稳定性问题仍积压 | 相对零Claw在安全边界设计上略保守 |

**定位总结：** OpenClaw是当前生态中**通道兼容性最强、用户基数最大、迭代速度最快**的项目，正从"功能覆盖"向"稳定性巩固"阶段过渡，是事实上的行业参照基准。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **多通道一致性** | OpenClaw, Hermes Agent, CoPaw | Discord/Slack/Telegram消息投递可靠性、安全审批多端体验统一、typing指示器状态同步 |
| **子代理/多Agent编排** | OpenClaw, ZeroClaw, CoPaw | 子代理结果静默丢失（OpenClaw #44925等4条关联）、跨Agent会话迁移（Hermes #54204）、A2A协议支持（ZeroClaw #9324） |
| **成本优化** | OpenClaw, CoPaw, ZeroClaw | prompt caching支持（CoPaw #6649）、context压缩触发记忆流程（OpenClaw #116010）、按需加载技能（CoPaw #6699） |
| **安全边界与隔离** | ZeroClaw, LobsterAI, NanoBot | webhook鉴权缺失（ZeroClaw #9565）、Agent key泄漏（LobsterAI #1202）、Provider API Key全局污染（NanoBot #4784） |
| **模型兼容性** | 全部 | DeepSeek静默失败（OpenClaw #116277）、Opus 5参数适配（NanoBot #5235）、多模型并行（CoPaw #6455） |
| **本地CLI集成** | NullClaw, NanoBot | xAI Grok CLI支持（NullClaw #981）、本地模型spawn进程隔离 |
| **记忆/上下文管理** | OpenClaw, Hermes Agent, ZeroClaw | 记忆一致性（Hermes #43747）、prompt缓存命中率（OpenClaw #118717）、知识图谱Agent级隔离（ZeroClaw #9647） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构差异 |
|------|----------|----------|--------------|
| **OpenClaw** | 全通道网关 + 子代理编排 + 记忆压缩 | 多通道部署的企业/高级个人用户 | Gateway进程模型 + ACP投影器 + Crabbox运行时 |
| **CoPaw** | Plugin系统 + App Center + 定时任务 | 需要高度定制化工作流的开发者 | 插件沙箱 + 指数退避重试 + 时区统一处理 |
| **ZeroClaw** | 安全架构RFC + Chat Completions兼容 + Wasm长期演进 | 重视安全边界的Agent架构师 | RFC驱动设计 + 多Agent互操作（A2A）+ WASM UI路线 |
| **NanoBot** | WebUI视觉一致性 + 多通道修复 + Opus适配 | 桌面端用户、需要Fine-tuned UI体验者 | Vite HMR开发模式 + 浮动控件统一 + adaptive effort参数 |
| **Hermes Agent** | Telegram平台重构 + 多租户 + 插件接口标准化 | 需要多租户隔离的生产环境 | Mixin拆解架构 + lifecycle_guard + Hook分类体系 |
| **LobsterAI** | 积分商业化活动 + Electron桌面客户端 | 消费级用户、需要商业化激励场景 | Electron 40→43升级 + IPC积分流程 + 侧边栏广告系统 |
| **PicoClaw** | Android移动端 + OAuth流程 + Exa搜索集成 | 移动端用户、轻量级部署场景 | 移动端适配 + Exa Provider原生支持 |
| **NullClaw** | 本地CLI工具全覆盖（Codex/Gemini/Claude/Grok） | 本地优先用户、CLI驱动工作流 | spawn-per-request进程隔离 + 统一Provider抽象 |

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：快速迭代 + 大规模社区                            │
│  OpenClaw · CoPaw · ZeroClaw                                │
│  特征：日均50+ PR/Issue，活跃RFC讨论，安全/稳定性双重压力    │
├─────────────────────────────────────────────────────────────┤
│  第二梯队：高频迭代 + 稳定贡献流                            │
│  Hermes Agent · NanoBot · LobsterAI                         │
│  特征：日均10-50 PR，功能打磨期，已有部分生产验证            │
├─────────────────────────────────────────────────────────────┤
│  第三梯队：中等活跃度 + 专项推进                            │
│  PicoClaw · NanoClaw                                        │
│  特征：周级PR节奏，待合并PR积压，Issue响应较慢                │
├─────────────────────────────────────────────────────────────┤
│  第四梯队：低活跃 / 静默维护                                │
│  NullClaw · Moltis · TinyClaw · ZeptoClaw                   │
│  特征：日均0-1 PR，依赖自动化或单一贡献者                    │
└─────────────────────────────────────────────────────────────┘
```

**阶段判断：**
- **快速迭代期**：OpenClaw、CoPaw、ZeroClaw（功能扩展 + 稳定性攻坚并行）
- **质量巩固期**：Hermes Agent、NanoBot、LobsterAI（Bug修复 + 体验打磨为主）
- **稳定维护期**：PicoClaw、NanoClaw、NullClaw（社区贡献驱动，维护节奏平稳）

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **Chat Completions协议标准化** | ZeroClaw #8603 RFC（16评论）、CoPaw GPT-5.6 prompt caching | 生态互通成为刚需，选择支持OpenAI协议的项目可降低后续迁移成本 |
| **安全边界从"功能层"下沉到"架构层"** | ZeroClaw 3条P0安全漏洞（webhook鉴权、知识图谱隔离、工具所有权）；NanoBot API Key污染 | 多Agent/多租户场景必须评估per-agent所有权检查机制，不能依赖应用层防护 |
| **子代理编排可靠性成为核心竞争点** | OpenClaw 4条关联Issue（#44925/#67777/#92433/#92369） | 子代理结果丢失是多项目共性问题，建议关注其timeout/drain/orphan场景的重试与通知机制设计 |
| **本地CLI工具整合加速** | NullClaw #981（Grokk CLI）；NanoBot Opus 5适配 | 本地优先策略正在成为差异化方向，spawn-per-request进程隔离模式被多个项目验证 |
| **商业化与用户体验开始并行** | LobsterAI积分campaign落地；CoPaw App Center插件生态 | 开源项目从纯技术驱动转向运营+技术双轮驱动，关注积分/订阅模型与开放性的平衡 |
| **平台治理（Platform Governance）进入深水区** | Hermes Agent Telegram重构、OpenClaw测试基建、CoPaw CI修复 | 通道适配层复杂度指数上升，模块化拆分（Mixin/Provider抽象）是应对路径 |
| **多模型并行与按需加载** | CoPaw #6455、#6699；ZeroClaw MoA RFC | 单一模型依赖风险上升，多模型路由与技能按需加载成为降本关键能力 |

---

**报告结论：** 个人AI助手开源生态正从"功能竞赛"转向"稳定性+安全+互通性"的三重重心竞争。OpenClaw凭借通道覆盖与社区规模保持领先，但核心稳定性债务需优先清理；ZeroClaw在安全架构设计上走前列，但P0漏洞暴露了快速迭代期的风险；CoPaw与NanoBot在插件生态与桌面体验上形成差异化优势。建议开发者在选择项目时，根据部署场景（多通道/本地CLI/多Agent编排/安全敏感）匹配项目成熟度阶段，并关注Chat Completions协议兼容性以减少生态锁定风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目日报 | 2026-08-05

## 1. 今日速览
过去24小时 NanoBot 保持高频迭代，共处理 26 条 PR（18 条已合并/关闭，8 条待审），新增/更新 Issues 5 条（4 条活跃，1 条关闭）。无新版本发布。今日开发重心集中在 **WebUI 视觉一致性重构、多通道兼容性修复（Telegram/WeCom/Matrix）、安全配置增强及 Opus 5 模型适配**。合并率较高（~69%），Issue 响应链路紧凑，项目整体健康度良好，处于稳定性打磨与体验层持续优化的阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的 PR 显著推进了底层兼容性与前端体验：
- **WebUI 重构与开发者体验**：#5239 集成 Vite 开发模式，支持 `nanobot webui --dev` 一键启动并开启前端 HMR；#5249/#5240/#5245/#5243/#5241 统一了浮动控件、时间戳样式与自动化元数据展示，消除视觉层级混乱。
- **安全与认证扩展**：#5210 为 `/webui/bootstrap` 新增可信代理（Trusted Proxy）认证路径，适配 Cloudflare Tunnel + Access 等企业级部署场景。
- **多通道鲁棒性**：#5223 修复企业微信文件名清洗后路径为空导致写入覆盖目录的崩溃；#5222 修复 Telegram 代码块语言标签含 `-`/`+` 等字符时被截断的问题；#1776 补全 Telegram `group_mode` 配置缺失字段。
- **模型参数兼容**：#5236 重构 Anthropic 采样参数逻辑，适配 Opus 5 废弃 `temperature` 的新行为，支持 adaptive `effort` 与手动 `budget_tokens`。

整体而言，项目今日推进了约 1~1.5 个典型版本的功能颗粒度，主要集中在体验层收敛与边界场景修复。

## 4. 社区热点
- **Issue #4784** [Security: Provider API keys leaked between providers via global os.environ mutation] — [链接](https://github.com/HKUDS/nanobot/issues/4784)
  7月6日创建，8月4日仍被更新。核心诉求是多 Provider 并发时 `os.environ` 全局污染导致 API Key 相互覆盖或泄露。该问题触及安全边界，社区关注度持续上升，需优先处理。
- **Issue #5235 → PR #5236** [Anthropic: Opus 5 configuration always rejected on the API] — [Issue链接](https://github.com/HKUDS/nanobot/issues/5235) / [PR链接](https://github.com/HKUDS/nanobot/pull/5236)
  Opus 5 发布后温度参数报错，用户迅速提报，开发者同日完成修复并合并，响应效率较高。
- **PR #5234** [feat(agent): integrate mst-python as a metasearch provider] — [链接](https://github.com/HKUDS/nanobot/pull/5234)
  引入 MST 多源搜索引擎聚合提供者（DuckDuckGo/Google/Brave/Bing 等），满足用户对更强 Web 检索覆盖面的诉求，目前待合并。

## 5. Bug 与稳定性
按严重程度排列：
| 等级 | Issue/PR | 描述 | 状态 |
|------|----------|------|------|
| 🔴 高 | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP 工具返回业务错误信封（`isError=False`）时，Agent 误判为成功并无限等待至 `tool_timeout`，缺乏错误边界识别与重试机制。**暂无 Fix PR** | OPEN |
| 🔴 高 | [#5247](https://github.com/HKUDS/nanobot/issues/5247) → [#524

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目日报
**日期：2026-08-05**

---

## 1. 今日速览

过去 24 小时内 Hermes Agent 社区保持高度活跃：**50 条 Issue 更新**、**50 条 PR 更新**（待合并 45，已合并/关闭 5），无新版本发布。核心焦点集中在插件接口重构（#64182、#64231）、多租户架构探索（#34352）以及 Telegram/Bot 平台的持续拆解工作（#78791 系列）。项目处于密集开发期，社区贡献活跃，但 Issue 关闭率为零，部分 P2/P3 问题积压明显。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日 **5 个 PR 被合并/关闭**，主要集中在以下方向：

| PR | 类型 | 说明 |
|---|---|---|
| [#78949](https://github.com/NousResearch/hermes-agent/issues/78949) | refactor | Telegram 适配器 A1 切片：DM-topic  machinery 提取为独立 Mixin（-661 行） |
| [#78971](https://github.com/NousResearch/hermes-agent/issues/78971) | bugfix | lifecycle_guard NUL 字节防护（#76762 follow-up） |
| [#79016](https://github.com/NousResearch/hermes-agent/issues/79016) | bugfix | 修复 Gateway 终态时 `relay.scope.pop` 不兼容旧版 NeMo Relay |
| [#79011](https://github.com/NousResearch/hermes-agent/issues/79011) | bugfix | Email 平台 `enabled: false` 被环境变量覆盖的问题 |
| [#79008](https://github.com/NousResearch/hermes-agent/issues/79008) | bugfix | WhatsApp typing 指示器永不下拉问题 |

**进展评估**：今日合并以稳定性修复和小规模重构为主，Telegram 平台代码库拆解持续推进（Wave-2 PR #79010 已提交），整体项目在前端平台治理和 cron/terminal 安全边界上有所推进。

---

## 4. 社区热点

| Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|
| #64182 | 21 | Plugin Interface Expansion — 插件接口扩展追踪 | [链接](https://github.com/NousResearch/hermes-agent/issues/64182) |
| #64231 | 17 | Lifecycle-event catalog & hook taxonomy | [链接](https://github.com/NousResearch/hermes-agent/issues/64231) |
| #34352 | 14 | 多租户 Hermes 问题 | [链接](https://github.com/NousResearch/hermes-agent/issues/34352) |
| #16004 | 9 | max tool-call 限制后自动续接配置 | [链接](https://github.com/NousResearch/hermes-agent/issues/16004) |
| #54204 | 8 | Session 跨项目迁移功能 | [链接](https://github.com/NousResearch/hermes-agent/issues/54204) |

**分析**：
- **插件接口扩展** (#64182/#64231) 是社区长期关注的核心架构议题，贡献者希望建立标准化的生命周期事件目录和 Hook 分类体系，以批量处理积压的 Hook PR。
- **多租户问题** (#34352) 已有生产环境验证的修复方案，但尚未合入主干，反映出社区对多租户隔离的迫切需求。
- **Session 迁移** (#54204) 和 **自动续接** (#16004) 均获较多 👍，属于用户体验层面的高优先级功能请求。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P2 严重/回归
| Issue | 描述 | Fix PR | 链接 |
|---|---|---|---|
| #78942 | lifecycle_guard 遇 NUL 字符路径崩溃（#76762 不完整修复） | — | [链接](https://github.com/NousResearch/hermes-agent/issues/78942) |
| #78974 | lifecycle_guard 在 HOME 不可解析时崩溃，影响所有终端命令 | — | [链接](https://github.com/NousResearch/hermes-agent/issues/78974) |
| #78122 | max_in_progress 按 board 而非 gateway 全局生效（回归） | — | [链接](https://github.com/NousResearch/hermes-agent/issues/78122) |
| #75801 | OpenCode Go gpt-5.6-luna 流式响应被错误截断 | — | [链接](https://github.com/NousResearch/hermes-agent/issues/75801) |
| #78406 | OpenAI 传输层连接中断后重试延迟，高峰期 161 次/天 | — | [链接](https://github.com/NousResearch/hermes-agent/issues/78406) |
| #77047 | read_file 将有效 UTF-8 CJK 文件误判为 binary | — | [链接](https://github.com/NousResearch/hermes-agent/issues/77047) |
| #44349 | `custom:<builtin>` vision provider 被回退为内置版，导致 401 | — | [链接](https://github.com/NousResearch/hermes-agent/issues/44349) |
| #76602 | 自定义 vision provider + base_url 丢失 api_key | — | [链接](https://github.com/NousResearch/hermes-agent/issues/76602) |
| #78948 | Auxiliary 调用将主 provider 模型名发往自定义 fallback（404） | — | [链接](https://github.com/NousResearch/hermes-agent/issues/78948) |
| #78975 | Feishu cron 投递 fail：`receive_id_type="thread_id"` 非法 | — | [链接](https://github.com/NousResearch/hermes-agent/issues/78975) |
| #78514 | Feishu 多租户模式下消息去重未共享，事件重放导致重复处理 | — | [链接](https://github.com/NousResearch/hermes-agent/issues/78514) |

### 🟡 P3 一般
| Issue | 描述 | 链接 |
|---|---|---|
| #75791 | Windows 11 25H2 dashboard --status 误报无进程 | [链接](https://github.com/NousResearch/hermes-agent/issues/75791) |
| #78847 | Desktop 发送文件夹附件时消息内容覆盖路径 | [链接](https://github.com/NousResearch/hermes-agent/issues/78847) |
| #77950 | `brace-expansion@5.0.8` 存在 GHSA 高危 DoS 漏洞 | [链接](https://github.com/NousResearch/hermes-agent/issues/77950) |
| #78254 | Quickstart 文档称 Portal 为 free，但 Portal 页面需订阅 | [链接](https://github.com/NousResearch/hermes-agent/issues/78254) |

**稳定性评估**：今日报告 Bug 密集，集中在 **lifecycle_guard 崩溃**、**多租户消息重复/投递失败**、**Vision 自定义 provider 配置回退** 三类，均有用户在生产环境复现。lifecycle_guard 的 NUL 防护已被 PR #78971 部分修复但 #78942 表明仍需补完。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 可能性评估 |
|---|---|---|
| #78997 | Desktop 底部状态栏显示订阅/token 用量 | 高 — 用户痛点明确，已提 PR |
| #64615 | 提供禁用自动项目/仓库发现的配置项 | 中 — 与 #53328 关联，#53328 已有人工扫描反馈 |
| #54204 | Session 跨项目迁移（Desktop UI） | 中 — 已有明确需求，#53328 配套 |
| #16004 | max tool-call 耗尽后可配置的自动续接 | 中 — ACP/VS Code 场景需求明确 |
| #79000 | 新增 surgical-orchestration skill（多文件夹子 agent 协调） | 待定 — 功能有价值但范围较大 |
| #78791 | Telegram Bot API 10.2 功能对齐（meta-issue） | 高 — 正在进行中，Wave-2 已提交 |

**路线图信号**：Telegram 平台重构是当前最明确的开发主线；多租户支持（#34352）和插件接口标准化（#64182）是中长期架构目标；Desktop 体验优化（token 用量显示、session 迁移、自动发现控制）将陆续推进。

---

## 7. 用户反馈摘要

**核心痛点**：
- **多租户隔离缺失**：内存操作绕过 Hook 系统，租户间状态泄露，已有生产环境修复方案但未合入（#34352）。
- **lifecycle_guard 脆弱性**：NUL 字符、HOME 不可解析等边缘场景导致整个 terminal 工具崩溃（#78942、#78974），影响自动化任务可靠性。
- **Feishu/Telegram 消息重复**：重连后事件重放导致消息处理两次，去重缓存未跨 profile 共享（#78514、#78975）。
- **Vision 自定义 Provider 配置失效**：`custom:<name>` 被回退为内置 provider，导致 401（#44349、#76602、#78948），影响多 provider 部署。
- **Desktop 资源扫描无限制**：启动时全量扫描 home 目录寻找 git repo，无配置关闭（#53328、#64615）。

**正面反馈**：
- Telegram 平台大规模重构获得社区认可，Wave-2 拆分计划推进顺利。
- 安全扫描（PR #79009）对内存注入/提示词污染的检测得到认可。

---

## 8. 待处理积压

| Issue | 创建时间 | 状态 | 风险 | 链接 |
|---|---|---|---|---|
| #34352 | 2026-05-29 | Open，14 评论，2 👍 | 高 — 多租户生产问题 | [链接](https://github.com/NousResearch/hermes-agent/issues/34352) |
| #16004 | 2026-04-26 | Open，9 评论，1 👍 | 中 — ACP/长会话阻塞 | [链接](https://github.com/NousResearch/hermes-agent/issues/16004) |
| #53328 | 2026-06-26 | Open，3 评论，1 👍 | 中 — 性能/隐私 | [链接](https://github.com/NousResearch/hermes-agent/issues/53328) |
| #64615 | 2026-07-14 | Open，1 评论 | 低 — 功能请求 | [链接](https://github.com/NousResearch/hermes-agent/issues/64615) |
| #46199 | 2026-06-14 | Open，7 评论，2 👍 | 中 — Windows 部署文档缺失 | [链接](https://github.com/NousResearch/hermes-agent/issues/46199) |

**建议**：#34352 和 #16004 存在生产影响且已有用户修复方案，建议维护者优先审阅；#78942/#78974 与已合并的 #78971 关联，需确认修复是否完整覆盖。

---

**项目健康度评分：B+**  
活跃度高、贡献者众多，但 Issue 关闭率（0%）偏低，部分 P2 Bug 跨版本遗留，多租户等架构问题尚未闭环。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 — 2026-08-05

## 1. 今日速览

PicoClaw 在过去24小时内保持中等活跃度：3 条 Issue 更新（2 新开/活跃，1 已关闭），4 条 PR 更新（2 待合并，2 已关闭）。无新版本发布。项目整体健康度良好，社区贡献者持续提交功能改进与稳定性修复，OAuth 认证流程与 Anthropic 提供商的 token 缓存日志问题得到推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

### 已关闭 PR（2 条）

| PR | 作者 | 内容 |
|----|------|------|
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | honbou | 修复浏览器 OAuth 登录流程，解决无头/远程环境下授权回调失效问题 |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | hydrogenbond007 | 修复 Anthropic SDK 与 Messages API 提供商丢失 prompt cache token 指标的问题 |

这两项修复分别解决了远程部署认证和云成本可观测性两个长期痛点，项目向前推进了稳定性和运维透明度。

### 待合并 PR（2 条）

- [#3299](https://github.com/sipeed/picoclaw/pull/3299) — 新增原生 Exa Web 搜索 Provider
- [#3317](https://github.com/sipeed/picoclaw/pull/3317) — LLM 响应调试日志新增缓存 token 输出

## 4. 社区热点

| Issue/PR | 类型 | 评论数 | 👍 | 链接 |
|----------|------|--------|-----|------|
| #3281 | BUG | 3 | 1 | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| #3269 | BUG | 3 | 1 | [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) |
| #3182 | BUG | 6 | 0 | [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) |

**热点分析：**
- **#3182** 评论数最多（6 条），聚焦 Android 版本服务无法启动及路径配置失效，反映移动端部署仍是用户高频痛点。
- **#3281** 与 **#3269** 均获 1 个 👍，分别涉及 Web UI 输入卡顿与 MCP 服务器断连导致对话挂起，两者均影响核心对话体验。

## 5. Bug 与稳定性

| Issue | 严重程度 | 摘要 | Fix PR | 链接 |
|-------|----------|------|--------|------|
| #3182 | 🟡 中 | Android 版本服务无法启动，权限与路径配置异常 | 暂无 | [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) |
| #3281 | 🟡 中 | Web UI 长历史会话时输入框严重卡顿 | 暂无 | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| #3269 | 🔴 高 | MCP 服务器连接失败导致 Agent 循环挂起，界面停止响应 | 暂无 | [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) |

> **#3269** 为今日最高优先级 Bug，直接导致用户对话中断，建议维护者优先评估。

## 6. 功能请求与路线图信号

| PR | 类型 | 内容 | 纳入可能性 |
|----|------|------|------------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新功能 | 原生 Exa Web 搜索 Provider 支持 | 高（实现完整，含配置项与过滤器） |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 改进 | LLM 调试日志补充缓存 token 输出 | 高（与 #3251 修复方向一致，形成闭环） |

两项待合并 PR 均聚焦可观测性与工具扩展，符合项目当前迭代方向。

## 7. 用户反馈摘要

| 场景 | 反馈 |
|------|------|
| 移动端部署 | Android 版本服务启动失败，权限已授予但路径不可修改，用户体验受阻 |
| Web UI 交互 | 长历史会话下输入框卡顿明显，影响日常对话流畅度 |
| MCP 集成 | MCP 服务器断连时 Agent 循环无超时/降级机制，导致界面完全挂起 |
| 认证流程 | 远程/无头环境 OAuth 回调频繁失效，需重复授权 |
| 成本监控 | Anthropic 缓存 token 指标丢失，无法评估缓存命中率与成本优化空间 |

## 8. 待处理积压

以下 Issue/PR 已标记为 `[stale]`，长期未获维护者响应，建议关注：

| 项目 | 类型 | 最后更新 | 链接 |
|------|------|----------|------|
| #3182 | Bug | 2026-08-04 | [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) |
| #3280 | PR（已关闭） | 2026-08-04 | [PR #3280](https://github.com/sipeed/picoclaw/pull/3280) |
| #3251 | PR（已关闭） | 2026-08-04 | [PR #3251](https://github.com/sipeed/picoclaw/pull/3251) |

> ⚠️ **注意**：#3280 与 #3251 虽已关闭但未合并，可能因 stale 自动归档；若代码变更尚未入库，建议维护者确认是否需重新提交或手动合并。

---

**项目健康度评级：🟢 良好** — 社区贡献活跃，关键稳定性问题已推进修复，待合并 PR 与待响应 Issue 数量可控。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报
**日期：2026-08-05**

---

## 1. 今日速览

NanoClaw 今日处于**中等活跃度**状态，过去24小时内无 Issue 更新，但 PR 活动持续，共新增/更新 5 条 PR。其中 1 条已合并（#3154），4 条仍处于待审核状态。项目当前重点集中在 **Dial 通信渠道集成**与 **Discord webhook 修复**两个方向，未发布新版本。整体来看，开发节奏平稳，无明显阻塞或风险信号。

---

## 2. 版本发布

今日无新版本发布（Releases）。

---

## 3. 项目进展

**已合并 PR：**
- **#3154** [CLOSED] `fix(agent-runner): give scheduled tasks current run time`
  - 作者：Koshkoshinsk
  - 链接：[nanocoai/nanoclaw PR #3154](https://github.com/nanocoai/nanoclaw/pull/3154)
  - 内容：修复定时任务时间渲染逻辑，优先使用 `process_after` 计算有效调度时间，并新增 `current_time` 字段（含星期信息），为遗留数据保留创建时间戳回退。
  - 推进方向：提升 Agent Runner 调度的时序准确性，为后续时间敏感型自动化任务奠定基础。

**待合并 PR（4 条）：**

| PR | 类型 | 摘要 |
|----|------|------|
| #3186 | Refactor | 为 skill-owned capabilities 添加 host seams，改善扩展点设计 |
| #3050 | Feature | 将 Dial 渠道集成至 setup wizard 与 channel picker |
| #3041 | Feature | 新增 Dial channel adapter，支持 SMS 与 AI 语音通话 |
| #3185 | Fix | 修复 Discord webhook 中 `\n` 分隔符导致审批按钮全部判定为"拒绝"的 Bug |

项目整体向前推进约 **1 个完成任务 + 4 个进行中开发**，重点向多渠道通信能力（Dial）与稳定性修复方向演进。

---

## 4. 社区热点

今日无 Issue 更新，社区讨论热度较低。

**PR 互动情况：**
- 所有 5 条 PR 均无评论、无 👍，处于静默审核状态。
- 潜在关注点：
  - **#3041 / #3050**（Dial 渠道集成）：两项 PR 由同一作者 `OmriBenShoham` 提交，时间相近（2026-07-14），可能属于同一功能模块的分拆提交，建议维护者合并 Review。
  - **#3185**（Discord Bug Fix）：修复了一个**高影响**的交互错误（所有审批默认被拒绝），社区可能有潜在用户反馈，建议优先合并。

---

## 5. Bug 与稳定性

| 严重等级 | PR | 描述 | 状态 |
|----------|-----|------|------|
| 🔴 高 | #3185 | Discord webhook approval 按钮全部判定为"拒绝" | OPEN（待合并） |
| 🟡 中 | #3154 | 定时任务时间渲染不准确（已修复） | ✅ CLOSED（已合并） |

**关键 Bug 分析：**
- **#3185** 修复的 Discord 问题是**阻断性交互缺陷**：用户在 Chat SDK 桥接层点击"Approve"时，因 `custom_id` 解析逻辑错误（未处理 `\n` 分隔符），导致所有审批实际被识别为拒绝。该 Bug 影响生产环境用户体验，建议**优先合并**。

---

## 6. 功能请求与路线图信号

**当前 PR 反映的路线图方向：**

1. **多渠道通信集成（Dial）**
   - PR #3041 + #3050 构成完整功能：新增 Dial channel adapter，支持 SMS 与 AI 语音通话，并集成至 setup wizard。
   - 信号：项目正从纯文本通道向**实时语音/短信通信**扩展，可能面向企业级客服、通知场景。

2. **Skill 架构重构**
   - PR #3186 引入 host seams，表明项目正在**解耦 skill 与宿主环境**，为未来插件化、可移植性铺路。

3. **调度系统精细化**
   - PR #3154 修复时间渲染，体现对**定时任务可靠性**的重视，可能为后续复杂调度场景（如工作日/节假日感知）做准备。

---

## 7. 用户反馈摘要

今日无 Issue 更新，无法提取新的用户反馈。

**从已有 PR 推断的用户痛点：**
- **Discord 审批体验**：#3185 表明用户在使用 Discord 进行 AI 代理审批时遇到**严重交互故障**，可能引发信任问题。
- **多渠道配置复杂度**：#3050 将 Dial 集成至 wizard，暗示用户希望**简化新渠道的配置流程**。

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 状态 | 建议 |
|----------|----------|------|------|
| #3041 / #3050 | 2026-07-14 | OPEN（14天未更新） | 建议维护者主动 Review，两项 PR 可能属于同一功能，可合并处理 |
| #3186 | 2026-08-04 | OPEN | 重构类 PR，建议评估对现有 skill 兼容性的影响 |
| #3185 | 2026-08-04 | OPEN | **高优先级**，Bug 影响生产环境，建议尽快合并 |

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐☆☆ | PR 数量正常，Issue 零更新 |
| 响应速度 | ⭐⭐⭐☆☆ | 无 Issue 响应；PR #3041/#3050 停留 14 天 |
| 代码质量 | ⭐⭐⭐⭐☆ | 遵循贡献指南，PR 描述规范 |
| 稳定性 | ⭐⭐⭐☆☆ | 存在 1 个高影响 Bug（#3185）待修复 |
| 社区参与 | ⭐⭐☆☆☆ | 无 Issue/评论互动 |

**总体健康度：中等** — 开发工作持续推进，但社区互动偏低，建议维护者加强 PR Review 节奏，尤其优先处理 Discord Bug 修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报
**日期：2026-08-05** | 数据周期：2026-08-04 00:00 ~ 2026-08-05 00:00

---

## 1. 今日速览

NullClaw 今日整体活跃度偏低，过去24小时内无新 Issue 提出，无新版本发布，项目处于**低活跃静默期**。唯一值得关注的动态是 PR #981（xAI Grok CLI Provider）进入待合并状态，更新于昨日（2026-08-04），距离创建已逾一周（2026-07-29），反映社区对 xAI Grok 本地 CLI 支持的持续需求。项目健康度评估为**中等**——无突发问题，但功能扩展节奏偏缓，建议维护者关注 PR 审查进度。

---

## 2. 版本发布

**无新版本发布。** 当前无 Release 更新。

---

## 3. 项目进展

### 待合并 PR

| PR | 类型 | 标题 | 作者 | 创建时间 | 最后更新 | 状态 |
|----|------|------|------|----------|----------|------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | `feat` | `provider: add grok-cli provider for xAI Grok CLI` | valonmulolli | 2026-07-29 | 2026-08-04 | OPEN（待合并） |

**进展分析：**

PR #981 为 xAI Grok CLI 新增了 `grok-cli` Provider，实现逻辑与项目已有的 `codex-cli` / `gemini-cli` / `claude-cli` 保持一致，采用 **spawn-per-request** 进程隔离模式。该 PR 补充了 NullClaw 对 xAI 生态的覆盖，使本地已认证 `grok` CLI 的用户可直接通过 NullClaw 调用 Grok 模型，无需额外配置 API Key。

- 该 PR 自创建以来已 **7 天未合并**，处于待审查状态，反映出项目维护者对 Provider 扩展的合并节奏较为审慎。
- 若合并，NullClaw 将完成对主流本地 CLI 工具（OpenAI Codex / Google Gemini / Anthropic Claude / xAI Grok）的全覆盖，增强产品在本地 AI 编排场景的竞争力。

---

## 4. 社区热点

**今日无活跃 Issue 讨论。**

唯一值得关注的是 PR #981 本身，其背后诉求明确：

- **用户需求**：xAI Grok CLI 用户希望将 Grok 纳入 NullClaw 统一编排，避免在多 CLI 工具间手动切换。
- **社区信号**：该 PR 无评论、0 个 👍，说明尚未引发广泛讨论，可能处于早期审查阶段，或 xAI Grok 用户群体在 NullClaw 社区中占比较低。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告。** 无崩溃或回归问题记录。

---

## 6. 功能请求与路线图信号

### 已识别需求

| 需求来源 | 内容 | 状态 | 优先级评估 |
|----------|------|------|------------|
| PR #981 | 添加 xAI Grok CLI Provider | 待合并 | 中 |

**路线图信号分析：**

- NullClaw 正持续扩展对**本地 CLI 工具**的集成支持，`grok-cli` 的加入将补齐 xAI 生态拼图。
- 从现有 Provider 命名与实现模式（`codex-cli` / `gemini-cli` / `claude-cli` / 新增 `grok-cli`）来看，项目策略倾向于**以本地 CLI 为先**，而非仅依赖远程 API，符合「个人 AI 助手」的定位。
- **推测**：若 PR #981 顺利合并，下一版本（预计 v0.x 中期）可能围绕「多 Provider 编排体验优化」或「本地 CLI 认证管理」展开。

---

## 7. 用户反馈摘要

**今日无新用户反馈（Issue 评论为 0）。**

基于 PR #981 摘要可推断：
- 用户对 xAI Grok 本地 CLI 的集成需求真实存在，且希望保持与现有 Provider 一致的使用体验（spawn-per-request 模式、可选安装）。
- 无公开的负面反馈或痛点集中爆发。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 待处理时长 | 建议 |
|------|------|------|----------|------------|------|
| PR | [#981](https://github.com/nullclaw/nullclaw/pull/981) | `feat(provider): add grok-cli provider for xAI Grok CLI` | 2026-07-29 | **7 天** | 建议维护者跟进审查，回应社区对 Grok CLI 的支持诉求 |

**积压评估：**

- 当前积压 PR 仅 1 条，无阻塞性 Issue，项目整体维护节奏稳定。
- PR #981 已超出一周未合并，虽不构成紧急风险，但建议维护者尽快给出审查反馈（批准 / 修改建议 / 拒绝），以维持社区贡献者的积极性。

---

> **日报生成时间**：2026-08-05 | **数据来源**：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) GitHub API

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 — 2026-08-05

---

## 1. 今日速览

过去24小时内，LobsterAI 项目保持中等活跃度：13 条 PR 更新（10 条已合并/关闭，3 条待处理），1 条 Issue 保持开放。今日无新版本发布，但 **v2026.8.3** 的合并 PR 已于今日关闭，预计即将正式对外发布。核心工作集中在启动积分活动功能、Electron 依赖升级和渲染层体验优化，整体方向明确，推进有序。

---

## 2. 版本发布

> 无新版本正式发布。

---

## 3. 项目进展

今日共关闭 **10 条 PR**，主要推进了以下方向：

### 启动积分活动（Credits Campaign）
- **#2424** [CLOSED] — 恢复活跃的积分活动流程，包括 IPC、UI 和资产，支持非订阅用户的 500 积分领取。
- **#2427** [CLOSED] — 将启动积分海报和 CTA 素材打包进桌面客户端，实现本地渲染活动弹窗。
- **#2428** [CLOSED] — 补全启动积分活动的埋点字段，覆盖完整登录重定向 URL 及各类失败错误信息。
- **#2429** [CLOSED] — 优化登录页面体验。
- **#2430** [CLOSED] — 将 `release/2026.8.3` 合并入 `main`，正式封版。

### 模型错误处理
- **#2426** [CLOSED] — 将 Provider 容量过载（Overloaded）与速率限制（Rate Limit）错误分类分离，避免用户误判和无效重试。

### 设置与体验
- **#2425** [CLOSED] — 新增 Artifact 自动预览开关，允许用户禁用自动预览同时保留手动预览功能。
- **#2374** [OPEN] — 新增侧边栏广告横幅的永久隐藏开关（Settings → General），解决用户长期诉求（对应 Issue #2342）。

### 依赖升级
- **#1277** [OPEN] — Dependabot 升级 Electron 从 40.2.1 → 43.2.0，以及 electron-builder。
- **#1282/#1283/#1284** [CLOSED] — 分别升级 `@headlessui/react`（1.7.19 → 2.2.9）、`react`（18.3.1 → 19.2.4）、`react-syntax-highlighter`（15.6.6 → 16.1.1）。

> **项目整体评估：** 今日工作聚焦于商业化活动（积分 campaign）落地和核心体验优化，v2026.8.3 已合并入 main，项目正向稳定方向稳步前进。

---

## 4. 社区热点

### 安全敏感 Issue — #1202
> **[OPEN] [stale] agent 泄漏 model key 信息，存在敏感信息泄漏风险**
> 作者: blueb0ne | 更新于 2026-08-04
> [查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/1202)

该 Issue 自 2026-04-01 创建以来至今未获响应，已被标记为 stale。用户报告：向 agent 询问 key 配置时，agent 会回复配置文件位置及环境变量信息，进一步可推导出模型 key，存在明确的安全风险。该问题涉及敏感信息防护，属于 **P1 级安全缺陷**，建议维护者优先处理。

### 依赖升级 PR — #1277
> **[OPEN] bump the electron group with 2 updates**
> 作者: dependabot[bot] | 更新于 2026-08-04
> [查看 PR](https://github.com/netease-youdao/LobsterAI/pull/1277)

Electron 40 → 43 的大版本升级，跨度较大，可能引入 breaking changes。目前仍待合并，需关注升级后的兼容性测试。

---

## 5. Bug 与稳定性

| 级别 | 描述 | 状态 | Fix PR |
|------|------|------|--------|
| **P1 安全** | Agent 泄漏 model key 信息（Issue #1202） | OPEN，无修复 | — |
| **P2 体验** | Session 重命名失败时静默吞错，无用户反馈（PR #1205） | OPEN，有修复 PR | #1205 |
| **P3 分类** | Provider 容量过载错误被错误归类为速率限制（Issue → PR #2426） | 已修复 | #2426 ✅ |

> **稳定性评估：** 今日无新增崩溃或回归报告。已合并的 #2426 修复了错误分类问题，#1205 的修复待合并。安全类 Issue #1202 尚未得到响应，是当前的主要风险点。

---

## 6. 功能请求与路线图信号

| 诉求 | 来源 | 状态 | 纳入下一版本可能性 |
|------|------|------|-------------------|
| 永久隐藏侧边栏广告横幅 | Issue #2342 → PR #2374 | OPEN | ⭐⭐⭐ 高 — 功能已实现，待合并 |
| Artifact 自动预览开关 | PR #2425 | 已合并 | ⭐⭐⭐ 高 — 已纳入 v2026.8.3 |
| Session 重命名失败提示 | PR #1205 | OPEN | ⭐⭐ 中 — 有修复 PR，待合并 |
| 模型过载错误独立分类 | PR #2426 | 已合并 | ⭐⭐⭐ 高 — 已纳入 v2026.8.3 |
| Electron 大版本升级 | PR #1277 | OPEN | ⭐⭐ 中 — 需充分测试后合并 |

> **路线图信号：** 今日工作明显向"用户运营活动（积分 campaign）+ 体验精细化"方向倾斜，商业化功能和用户体验优化是近期重点。

---

## 7. 用户反馈摘要

- **敏感信息泄漏担忧**（Issue #1202）：用户发现 agent 可被诱导泄露配置文件路径和 key 环境变量，存在明确的安全隐患，期望 agent 主动拒绝此类请求。
- **广告横幅频繁打扰**（Issue #2342）：用户长期受侧边栏广告困扰，此前只能临时关闭单个横幅，缺乏全局关闭选项，PR #2374 回应了此诉求。
- **启动登录流程体验**：今日多笔 PR（#2429、#2424、#2428）集中优化登录和积分活动的首次体验，表明团队在收集团队对流畅度的反馈。
- **错误提示误导**（PR #2426）：容量过载被错误提示为速率限制，导致用户无效重试，修复后分类更精确。

---

## 8. 待处理积压

| 优先级 | 条目 | 创建时间 | 天数未响应 | 链接 |
|--------|------|----------|-----------|------|
| 🔴 **P1** | Issue #1202 — Agent 泄漏 model key 安全风险 | 2026-04-01 | ~127 天 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1202) |
| 🟡 **P2** | PR #2374 — 侧边栏广告永久隐藏（待合并） | 2026-07-21 | ~15 天 | [查看](https://github.com/netease-youdao/LobsterAI/pull/2374) |
| 🟡 **P2** | PR #1205 — Session 重命名失败 Toast 提示（待合并） | 2026-04-01 | ~127 天 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1205) |
| 🟢 **P3** | PR #1277 — Electron 40→43 大版本升级（待合并） | 2026-04-02 | ~126 天 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1277) |

> **维护者关注建议：**
> 1. **Issue #1202** 为安全类问题，长期未响应且已标记 stale，建议尽快评估并给出响应或修复。
> 2. **PR #2374** 和 **#1205** 均已准备就绪，建议合并以回应用户诉求。
> 3. **PR #1277** 涉及大版本升级，需确保测试覆盖后再合并。

---

**📊 项目健康度总结：** LobsterAI 今日活跃度高，PR 合并效率高（13/24h 中 10 条已关闭），v2026.8.3 已封版合并。主要风险点为安全类 Issue #1202 长期未响应，建议优先处理。整体项目健康度 **良好**。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目日报 | 2026-08-05

## 1. 今日速览

过去 24 小时内，Moltis 项目整体活跃度较低，无 Issues 更新、无新版本发布。唯一活跃来自 **dependabot** 自动发起的依赖升级 PR #1184，将 `undici` 从 7.28.0 升级至 7.29.0。项目处于平稳维护状态，无紧急事件，整体健康度中性偏保守，主要依赖自动化工具驱动小幅更新。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

- **PR #1184** ([链接](https://github.com/moltis-org/moltis/pull/1184)) — dependabot 自动发起的依赖升级，将 `/website` 目录下的 `undici` 升级至 7.29.0。该 PR 待合并，未涉及功能变更，属于常规安全/维护性更新，项目整体无实质性功能推进。

## 4. 社区热点

无今日活跃 Issues 或 PR 讨论。社区当前无明显热点话题，依赖更新仅由机器人自动触发，用户参与度较低。

## 5. Bug 与稳定性

今日无 Bug 报告、崩溃或回归问题。

## 6. 功能请求与路线图信号

今日无新功能请求或路线图相关讨论，暂无可提取信号。

## 7. 用户反馈摘要

今日无用户评论或反馈，无法提炼用户痛点或使用场景。

## 8. 待处理积压

- **PR #1184** ([链接](https://github.com/moltis-org/moltis/pull/1184)) — 已创建且待合并，由 dependabot 自动发起，建议维护者抽空review并合并，以保持依赖最新状态。

---

**总结**：Moltis 项目今日处于低活跃期，无功能级更新，整体以自动化维护为主。建议关注社区参与度及依赖链安全。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw 项目日报 | 2026-08-05

## 1. 今日速览

CoPaw 近期活跃度维持高位，过去24小时新增 28 条 Issue（16 新开 / 12 关闭）和 49 条 PR（28 待审 / 21 已合并）。今日无新版本发布，但 v2.1.0-beta.1 的社区验证通过（Issue #6656）。项目整体处于**功能打磨 + 稳定性修复阶段**，重点集中在插件系统、时区处理、记忆流程、Chrome 扩展兼容性等方面，社区贡献者参与度良好。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|----|------|------|
| [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) | Bug 修复 | 修复 `cron pause/resume` 状态不持久化问题，重启后任务状态丢失的 bug |
| [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) | Bug 修复 | 修复 App Center 插件安装时的模块命名冲突（`utils` 裸导入问题） |
| [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) | 功能增强 | 为 Channel 启动增加可配置的指数退避重试机制 |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | Bug 修复 | 修复 Scroll 压缩时注入 `[context compressed]` 导致 DeepSeek/OpenAI API 返回 400 错误 |
| [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | Bug 修复 | 修复自动压缩未触发 `summarize_when_compact` 记忆流程的缺陷 |
| [#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) | CI 修复 | 为集成测试安装 Playwright Chromium，解决 nightly 全平台构建失败 |
| [#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) | CI 修复 | 补齐 p-tier 标记，修复测试覆盖盲区 |
| [#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) | Bug 修复 | 统一会话时间戳时区转换处理逻辑 |
| [#6682](https://github.com/agentscope-ai/QwenPaw/pull/6682) | Bug 修复 | 修复 Console Agent 迭代上限保存时 legacy `max_iters` 字段未同步的问题 |
| [#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309) | Bug 修复 | 修复会话消息时区转换（配套 #6685/#6618） |

**项目推进评估：** 今日修复集中在**稳定性与兼容性**层面，覆盖插件系统、定时任务持久化、记忆流程、时区处理、CI 可靠性等核心模块，整体向前推进了 v2.1.0 的稳定化进程。

---

## 4. 社区热点

| Issue | 类型 | 评论数 | 摘要 |
|-------|------|--------|------|
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | Feature | 13 | 支持 GPT-5.6 prompt caching 参数，多轮对话复用缓存前缀降低延迟与成本 |
| [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | Question | 12 | Console 通道安全审批提示不可见，导致命令静默超时 |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Feature | 6 | 任务产出物按任务目录组织，避免 media 目录堆积 |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | Bug | 5 | DeepSeek thinking mode 多轮对话中 `reasoning_content` 缺失 |
| [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Feature | 5 | 拖入文件时直接读取原路径，避免上传下载冗余操作 |

**热点分析：**
- **GPT-5.6 prompt caching** 是长期活跃的功能诉求（13条评论），用户期望通过缓存复用降低多轮对话成本，属于高价值优化方向。
- **Console 通道安全审批**（Issue #6655）暴露了多通道体验不一致的遗留问题，Web UI 有确认按钮而终端无感知，用户困扰明显。
- **多模型并行**（Issue #6455）与**按需加载技能**（Issue #6699）反映用户在使用复杂场景下对资源效率和灵活性的诉求。

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 Desktop 注入 `PYTHONHOME` 导致所有 Python 子进程崩溃（ModuleNotFoundError） | — |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 Browser SDK 隔离 Playwright 会话 `open()` 始终报 `WireProtocolError: Target crashed` | — |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | 微信 iLink 渠道：一次性 `context_token` 被打字指示器消耗，后续回复全部被拒（ret=-2） | — |
| [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) | 微信渠道唯一入口下安全审批完全不可达，5 分钟后自动拒绝 | — |

### 🟡 中严重度

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | App Center 安装 qwenpaw-creator 插件失败（模块命名冲突） | ✅ [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) |
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | cron pause/resume 状态不持久化，重启后丢失 | ✅ [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) |
| [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩未触发 `summarize_when_compact` 记忆流程 | ✅ [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测用 false 覆盖已有能力标记 | — |

> **注：** v2.1.0b1 的 Windows Desktop 问题（#6697/#6698）为**新引入的回归问题**，建议暂停该版本推广，待 #6669 合并后再行发布。

---

## 6. 功能请求与路线图信号

| 诉求 | Issue | 相关 PR | 纳入可能性 |
|------|-------|---------|-----------|
| GPT-5.6 prompt caching 支持 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | — | ⭐⭐⭐ 高价值，成本优化方向 |
| 频道启动重试机制 | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | ✅ [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) | 已实现，即将入库 |
| 任务产出物按任务组织 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | — | ⭐ 用户体验改进 |
| 一个 Agent 多模型并行 | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | — | 中等复杂度，需架构设计 |
| 全局规则文件（类似 .agent） | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | — | 生态兼容性方向 |
| 按需加载技能 | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | — | ⭐⭐ 显著降低 token 消耗 |
| 对话框拖入文件直读原路径 | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | — | 低优先级 UX 优化 |

**路线图判断：** 社区需求向**成本控制**（prompt caching、按需加载技能）和**多通道一致性**（安全审批、重试机制）倾斜，建议下一版本重点跟进 #6649 和 #6699。

---

## 7. 用户反馈摘要

**痛点：**
- **免费模型限流频繁**（Issue #6674）：DeepSeek 免费版 429 导致任务中断，希望有自动退避与重试机制。
- **微信渠道 token 消耗问题**（Issue #6696）：打字指示器消耗一次性 token，用户无感知且对话异常。
- **插件模块命名冲突**（Issue #6683）：App Center 安装官方插件失败，用户体验差。
- **定时任务状态不可靠**（Issue #6690）：pause/resume 后重启丢失状态，自动化工作流受影响。

**正面反馈：**
- QwenPaw 整体体验良好（Issue #6674 用户正面评价），Daily use 用户基础稳定。
- 社区贡献活跃，多轮 PR 来自首次贡献者（#6331、#6615、#6688）。

---

## 8. 待处理积压

| Issue | 类型 | 评论数 | 状态 | 建议 |
|-------|------|--------|------|------|
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | Feature | 13 | OPEN | 高优先级，建议纳入路线图 |
| [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | Question | 12 | OPEN | 多通道体验一致性，需排期修复 |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | Bug | 5 | OPEN | DeepSeek 兼容性，影响推理模型用户 |
| [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | Feature | 1 | OPEN | 技能按需加载，token 优化方向 |
| [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | Feature | 3 | OPEN | 多模型并行，复杂度高需评估 |

---

**📊 项目健康度评估：** 整体良好。核心 bug 修复节奏快（21 PR/24h），社区贡献活跃，但 v2.1.0b1 引入 Windows Desktop 回归问题需尽快解决后再行推广。时区、记忆流程、插件系统三大历史债务已得到有效清理。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目日报 | 2026-08-05

---

## 1. 今日速览

ZeroClaw 项目在过去24小时内保持高频活跃，新增/更新 Issues 50条、PR 50条，社区贡献节奏稳定。**今日无新版本发布**，工作重心集中在安全架构 RFC 评审、多模型兼容修复及渠道稳定性改进。活跃度评估：**活跃**，维护者与贡献者协同推进多个关键 RFC 的设计收敛。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

**已合并/关闭 PR（2条）：**

- **#8568** [CLOSED] Mixture-of-Agents (MoA) 虚拟模型提供者 RFC —— 该设计提案已完成评审阶段，进入实现队列。
  - 链接: [Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)

**重点推进中的 PR：**

| PR | 主题 | 状态 | 作者 |
|----|------|------|------|
| #9324 | A2A 出站客户端配置与共享 wire model | 待合并 | kingstar001 |
| #9723 | 修复 DeepSeek DSML/`<\|tool_call\|>` 工具调用解析 | 待合并 | savioruz |
| #9362 | 修复浏览器工具截图路径绕过漏洞 | 待合并 | wangmiao0668000666 |
| #9320 | 修复 Cron 任务无超时导致锁不释放 | 待合并 | IftekharUddin |
| #9214 | 新增 `eval run --mode live` 沙箱化真实执行模式 | 待合并 | IftekharUddin |

项目整体向前推进：**安全修复 2 项、模型兼容性 2 项、评估框架 1 项、基础设施 3 项**。

---

## 4. 社区热点

**评论数 Top 3 Issues（均为 RFC 设计讨论）：**

| Issue | 标题 | 评论数 | 标签 | 链接 |
|-------|------|--------|------|------|
| #8603 | RFC: Chat Completions 协议支持 | 16 | p2, RFC, gateway | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| #8303 | RFC: Goal mode v1 有界前台工作 | 14 | p2, RFC, agent | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| #7155 | RFC: 高风险命令确认层级 + 工具权限策略 | 13 | p1, RFC, 安全 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |

**热点分析：**
- **#8603** 反映社区对 OpenAI 协议兼容性的强烈诉求，Open WebUI、LobeChat、Aider 等生态用户希望 ZeroClaw 成为即插即用的 Chat Completions 后端。
- **#8303** 涉及多轮 Agent 目标追踪与重启移交，是复杂自动化场景的核心能力。
- **#7155** 从 shell 扩展至全工具权限层，显示用户对细粒度安全控制的需求日益增长。

---

## 5. Bug 与稳定性

**P0 / 高危安全漏洞（3条）：**

| Issue | 描述 | 状态 | 关联 PR | 链接 |
|-------|------|------|---------|------|
| #9565 | WhatsApp/Linq/WATI webhook 未鉴权即转发消息 | Open, in-progress | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) |
| #9647 | Knowledge Graph 无 Agent 级隔离，任意 Agent 可读写他人数据 | Open, accepted | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| #9646 | Session/Channel 工具缺少 per-agent 所有权检查 | Open, accepted | — | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) |

**P1 功能 Bug：**

| Issue | 描述 | 状态 | 关联 PR | 链接 |
|-------|------|------|---------|------|
| — | 浏览器截图路径未校验（PR #9362 已修复） | Open | #9362 | [PR #9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) |
| #9320 | Cron 任务 hung 导致 sqlite 锁永不释放 | Open | #9320 | [PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) |
| #9504 | Context 耗尽时终端无提示，Agent 静默挂起 | Open | #9504 | [PR #9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504) |

**稳定性评估：** 今日安全类 Bug 集中爆发（3条 P0），需维护者优先关注 #9565/#9647/#9646 的修复排期。

---

## 6. 功能请求与路线图信号

**活跃 RFC 与功能提案：**

| RFC | 内容 | 预期版本信号 | 链接 |
|-----|------|-------------|------|
| #8603 | Chat Completions 协议适配 | 下一阶段核心兼容能力 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| #7141 | 可插拔认证 + 规范主体 | v0.9.0 安全架构目标 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| #8132 | React/Vite 替换为 Rust→Wasm（Dioxus/Leptos/Yew） | 长期架构演进 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) |
| #7822 | WASM Plugin Lifecycle Hook | 插件能力扩展 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) |
| #8832 | Plugin Owned Kanban Board | 工作流协调功能 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) |

**判断：** Chat Completions 支持与 MoA 虚拟模型提供者最有可能纳入近期版本；Wasm UI 替换为长期路线图项目。

---

## 7. 用户反馈摘要

**核心痛点：**
1. **协议兼容性不足** —— 大量用户通过 #8603 表达希望 ZeroClaw 支持 OpenAI Chat Completions 协议，以接入现有生态（Open WebUI、Continue.dev、LangChain 等）。
2. **安全边界模糊** —— #7155、#8424、#6996 集中反映用户对 workspace 内敏感文件保护、沙箱策略、工具权限颗粒度的担忧。
3. **跨 Agent 隔离缺失** —— #9646/#9647 揭示当前工具层面无 per-agent 所有权检查，存在数据越权风险。
4. **可用性体验** —— #9504 指出 context 耗尽时无终端提示导致"Agent 静默挂起"，用户体验不透明。

**满意点：**
- PR #9214 新增 live eval 模式获 principal contributor 主导推进，显示评估可观测性得到重视。
- A2A 协议支持（#9324）正在完善，多 Agent 互操作能力在增强。

---

## 8. 待处理积压

| Issue | 问题 | 创建时间 | 状态 | 建议 |
|-------|------|----------|------|------|
| #9565 | WhatsApp/Linq/WATI webhook 无鉴权 | 2026-07-30 | in-progress | ⚠️ P0 安全漏洞，建议优先合并修复 |
| #9647 | Knowledge Graph 无 per-agent 隔离 | 2026-08-01 | accepted | ⚠️ P0 安全风险，需尽快修复 |
| #9646 | Session/Channel 工具缺所有权检查 | 2026-08-01 | accepted | ⚠️ P0，与 #9647 同源问题 |
| #8692 | Maintainer 决策队列 Tracker | 2026-07-04 | open | 长期 RFC 决策追踪机制 |
| #8891 | Persistent Memory 多平面对齐 | 2026-07-09 | in-progress | 多 PR  coordinated rollout |

---

**整体健康度评估：** 🟡 活跃但安全压力较大。项目 RFC 设计活跃、贡献者多元，但今日集中暴露 3 条 P0 安全漏洞需优先处置。建议维护者关注 webhook 鉴权与 Agent 隔离的修复 PR 合并进度。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*