# OpenClaw 生态日报 2026-08-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-11 00:56 UTC

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



# OpenClaw 项目日报 — 2026-08-11

## 1. 今日速览

OpenClaw 今日保持高活跃态势，过去24小时共产生 500 条 Issues 更新（407 活跃/新开，93 已关闭）及 500 条 PR 更新（348 待合并，152 已合并/关闭）。无新版本发布，社区焦点集中在会话状态稳定性、认证刷新机制及多渠道消息重复问题。当前 PR 积压约 348 条，维护者.review 负载较高，但核心 bug 修复推进迅速。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日已关闭/合并的重要 PR 及进行中的关键修复：

- **PR #121599** [待维护者审核] — 统一 provider 诊断信息脱敏逻辑，防止敏感数据泄露（安全风险：🚨 security-boundary）
- **PR #121647** [待Proof] — 修复 durable context engine 在长会话（>20,000 事件或 8 MiB）后卡死的问题
- **PR #121509** [待维护者审核] — 修复 claude-cli 心跳与聊天会话切换时丢失全部对话上下文的 bug
- **PR #121299** [待Proof] — 将 prepared-model 运行时刷新作用域限定至变更的 agent，避免 N-agent 网关配置热重载时 O(N) 阻塞事件循环
- **PR #112932** [待Proof] — 修复 OAuth refresh 被永久拒绝后，即使完成新 `codex login` 仍重复重试死 grant 的问题
- **PR #120398** [待Proof] — Linux 下 detach service-managed tool 子进程，防止超时后子进程泄漏
- **PR #121601** [待维护者审核] — 修复 open terminal 阻止 gateway 自动更新的问题

**整体评估**：今日合并/关闭的 152 条 PR 主要集中在稳定性修复与安全加固，核心架构层（context engine、auth refresh、模型热重载）均有针对性推进。

## 4. 社区热点

| Issue | 评论数 | 主题 | 链接 |
|-------|--------|------|------|
| #121058 | 47 | 关闭后 silent reply failure 持续复发 | [Issue](https://github.com/openclaw/openclaw/issues/121058) |
| #7707 | 33 | 按来源对记忆条目添加信任标签（防 memory poisoning） | [Issue](https://github.com/openclaw/openclaw/issues/7707) |
| #22438 | 18 | 分级 bootstrap 文件加载以节省 context 预算 | [Issue](https://github.com/openclaw/openclaw/issues/22438) |
| #86519 | 15 | Telegram 重复回复回归（5.20 引入，5.22 部分缓解） | [Issue](https://github.com/openclaw/openclaw/issues/86519) |
| #42475 | 14 | 网关层 per-agent 成本预算控制 | [Issue](https://github.com/openclaw/openclaw/issues/42475) |

**热点分析**：
- **#121058** 是最活跃 Issue，反映 #116277 关闭后问题仍未根除，用户监控 cron 持续记录新发生，信任度受损。
- **#7707** 高评论数表明社区对 AI 安全（memory poisoning）高度关注，期待原生信任机制。
- **#22438** 与 **#42475** 分别针对 context 效率与成本可控性，反映生产级用户的核心诉求。

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 核心问题

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection 在高写入负载下 livelock，阻塞主线程 | 无 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | `write` 工具无 append 模式，cron 会话覆盖共享文件导致静默数据丢失 | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏导致 zombie 积累，运行时退化 | [#120398](https://github.com/openclaw/openclaw/pulls/120398) (进行中) |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动时间 Regression ~2.5x（2026.7.1 → 2026.7.2） | 无 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复回归（5.20→5.22 部分缓解，未根治） | 无 |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | 多独立路径导致 Telegram 重复消息（已关闭） | — |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息写入 transcript 但不触发回复 | 无 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh 超时 10s 导致 cron/heartbeat 失败 | [#121764](https://github.com/openclaw/openclaw/pulls/121764) (进行中) |
| [#111010](https://github.com/openclaw/openclaw/issues/111010) | 分离的 native Codex 子 agent 在 parent turn 结束后丢失 hook relay | 无 |
| [#100941](https://github.com/openclaw/openclaw/issues/100941) | Gateway 在并行 tool fan-out 下丢弃 WebSocket 连接（1006） | 无 |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | Claude CLI "session limit" 错误未触发 fallback 链 | 无 |
| [#113181](https://github.com/openclaw/openclaw/issues/113181) | Cron `delivery.mode="none"` + isolated agent 静默 no-op | 无 |

### 🟡 P2 问题

| Issue | 描述 |
|-------|------|
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron agent 在 LLM API 持续 500 时未 fast-fail，耗尽 timeout |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) | 容器化部署无法使用外部化 channel插件（openKeyedStore 限制） |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 隔离 cron agentTurn 超时："setup timed out before runner start" |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows 下 vitest teardown EBUSY unlink agent state DB |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) | `NO_REPLY` 静默策略无条件生效，忽略 `silentReply` 配置 |
| [#40919](https://github.com/openclaw/openclaw/issues/40919) | Session 记忆同步性能退化（全量 delete-reinsert 模式） |

## 6. 功能请求与路线图信号

| Issue | 诉求 | 关联 PR | 纳入可能性 |
|-------|------|---------|-----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆信任标签（按来源分级） | 无 | ⭐⭐⭐ 高（安全趋势） |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent 成本预算网关控制 | 无 | ⭐⭐⭐ 高（生产需求） |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 分级 bootstrap 文件加载 | 无 | ⭐⭐ 中（效率优化） |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | 子 agent 完成 announce 路由至父 session | [#121465](https://github.com/openclaw/openclaw/pulls/121465) | ⭐⭐ 中 |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) | Per-spawn tool 限制（子 agent 沙箱） | 无 | ⭐⭐⭐ 高（安全/DMZ场景） |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | backup CLI 支持 .gitignore 排除模式 | 无 | ⭐ 低 |
| [#28300](https://github.com/openclaw/openclaw/issues/28300) | 主题自定义系统（预设+自定义工作室） | 无 | ⭐ 低 |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | 上下文超限触发 model fallback | 无 | ⭐⭐ 中 |

## 7. 用户反馈摘要

**痛点集中区**：

1. **消息重复/丢失**：Telegram、Feishu 多渠道均报告重复消息或消息不触发回复（#86519、#96242、#97983、#114020），严重影响生产可用性。
2. **认证机制脆弱**：Codex OAuth refresh 超时（#89278）、Anthropic claude-cli refresh 死端（#83598）、OpenAI OAuth 继承失败（#98702）——多 provider 认证链路均存在稳定性问题。
3. **长会话退化**：context engine 卡死（#121623/#121647）、transcript projection livelock（#115908）、记忆同步性能下降（#40919）——随着会话增长，系统稳定性显著降低。
4. **子 agent 生命周期管理**：子 agent 完成后 session 残留（#47975）、hook relay 丢失（#111010）、tool 无权限隔离（#15032）。
5. **可观测性不足**：silent reply failure 关闭后仍复发（#121058）、模型 fallback 在异步上下文中不可见（#94919）、工具错误警告干扰 UX（#39406）。

**满意点**：
- #33413（Slack 工具级进度显示）获 3 👍，#28300（主题定制）获 5 👍，UI 体验改进需求强烈但响应不足。
- #26037（阿里百炼 coding plan 支持）获 4 👍，反映国内用户生态扩展需求。

## 8. 待处理积压

| Issue/PR | 状态 | 风险 | 建议 |
|----------|------|------|------|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 无 fix PR，P1 diamond lobster | 🔴 高 | 需紧急排期，影响多通道稳定性 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 无 fix PR，P1 diamond lobster | 🔴 高 | `write` 工具 append 模式为生产刚需 |
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 47 评论，无 fix PR | 🔴 高 | 关闭后复发损害维护者信誉，需重新评估 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 33 评论，无 fix PR | 🟡 中 | 安全特性，建议纳入路线图 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 14 评论，无 fix PR | 🟡 中 | 企业用户核心需求 |
| [#112932](https://github.com/openclaw/openclaw/pulls/121299) | 待 Proof，P1 | 🟡 中 | OAuth 修复需社区验证 |
| [#121509](https://github.com/openclaw/openclaw/pulls/121509) | 待维护者审核，P1 | 🟡 中 | 心跳上下文丢失修复 |
| [#121764](https://github.com/openclaw/openclaw/pulls/121764) | 等待 author，P2 | 🟡 中 | cancellable OAuth refresh hooks |

---

**项目健康度评级**：🟡 需谨慎关注
- **活跃度**：高（500+ Issue/PR 日更）
- **Bug 密度**：高（多个 P1 核心问题无 fix）
- **维护响应**：中（152 PR 已处理，但 348 待合并积压）
- **社区参与**：活跃（多 Issue 高评论、多 👍）

**优先建议**：
1. 排期 #115908（transcript livelock）与 #40001（write append 模式），两者均为生产阻塞级问题。
2. 重新评估 #121058 根因，恢复社区对 issue 关闭流程的信任。
3. 加速 #121509、#121299 等关键修复的 proof 与合并流程，缓解 PR 积压。

---

## 横向生态对比



# AI 智能体开源生态横向对比分析报告
**日期：2026-08-11**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态当前处于**快速迭代与质量 consolidations 并存**的阶段。OpenClaw 系列项目（OpenClaw、NanoClaw、PicoClaw、ZeroClaw、NanoBot 等）形成最大技术家族，覆盖从桌面端到容器化部署的多场景需求。生态整体呈现"安全优先、稳定性攻坚、多模态渠道整合"三大主线，同时社区对生产级可用性（成本可控、可观测性、多租户隔离）的诉求显著升温。

---

## 2. 各项目活跃度对比

| 项目 | 新增 Issue | 新增 PR | 已合并/关闭 | Release | 健康度 | 核心状态 |
|------|-----------|---------|------------|---------|--------|---------|
| **OpenClaw** | 407 | 348 | 152 | 无 | 🟡 需谨慎 | 高积压，P1 核心问题无 fix |
| **NanoBot** | 4 | 23 | 10 | 无 | 🟢 良好 | 快速迭代，关键修复高效 |
| **Hermes Agent** | 50 | 50 | 13 | 无 | 🟢 良好 | god-file 重构中，进程泄漏修复 |
| **PicoClaw** | 4 | 9 | 7 | 无 | 🟢 良好 | 安全加固为主，stale PR 待清理 |
| **NanoClaw** | 3 | 20 | 10 | 无 | 🟢 良好 | 架构重构+隐私安全，静默失败痛点 |
| **NullClaw** | 1 | 1 | 0 | 无 | 🟡 平稳 | 低活跃，Alpine 升级积压 |
| **LobsterAI** | 1 | 12+ | 7 | 无 | 🟢 良好 | 协作体验优化，大版本依赖升级中 |
| **Moltis** | 3 | 1 | 0 | 无 | 🟡 需关注 | Apple Container 后端集中爆 Bug，PR 长期停滞 |
| **CoPaw** | 34 | 50 | 19 | 无（v2.1.0 准备中） | 🟢 良好 | 高活跃，provider 兼容性+UI 打磨 |
| **ZeroClaw** | 50 | 50 | 1 | 无 | 🟡 需谨慎 | 极高 RFC 密度，安全审计密集，合并保守 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 停滞 | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**技术定位**：OpenClaw 是生态中的**核心运行时与网关层**，承担多 agent 编排、多渠道接入、成本预算控制等基础能力，是多数衍生项目（如 LobsterAI、CoPaw）的依赖底座。

**相比同类优势**：
- 渠道覆盖最广（Telegram、Slack、飞书、Matrix、WebChat 等）
- 多 agent 网关架构（per-agent 成本预算、会话隔离）
- 长会话稳定性投入（durable context engine、transcript projection）

**技术路线差异**：
- vs NanoBot：NanoBot 聚焦 MCP OAuth 与 WebUI 重构，更轻量化；OpenClaw 更重企业级网关能力
- vs Hermes Agent：Hermes 聚焦 god-file 分解与多 Profile 正确性，OpenClaw 更重会话状态与认证链路
- vs CoPaw：CoPaw 是 OpenClaw 的桌面端 UI 实现层，专注兼容性修复与 ReMe 记忆系统

**社区规模**：OpenClaw Issue/PR 量级（500+/日）远超其他项目，社区参与度最高，但 PR 积压 348 条也反映维护者 review 瓶颈。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **认证链路稳定性** | OpenClaw、NanoBot、CoPaw | OAuth refresh 超时/死端、凭证残留、多 provider 兼容 |
| **消息重复/丢失** | OpenClaw、NanoClaw、PicoClaw | Telegram 重复回复、入站消息静默丢弃、工具调用死循环 |
| **长会话稳定性** | OpenClaw、Hermes Agent、NanoClaw | context engine 卡死、transcript livelock、进程/FD 泄漏 |
| **多租户/多 Profile 正确性** | OpenClaw、Hermes Agent、ZeroClaw | per-agent 成本预算、cron 路由错误、知识图谱隔离 |
| **安全加固** | PicoClaw、NanoClaw、ZeroClaw | 远程执行默认禁用、CSPRNG 配对码、SSRF 防护、信任标签 |
| **可观测性** | OpenClaw、NanoClaw、CoPaw | silent failure 检测、错误路由、定时任务告警 |
| **MCP 生态集成** | NanoBot、CoPaw、ZeroClaw | OAuth 支持、SDK v2 迁移、远程服务器适配 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|----------------|
| **OpenClaw** | 多 agent 网关、多渠道接入、成本预算 | 企业/生产级部署 | durable context engine、OAuth refresh 链路、per-agent 预算 |
| **NanoBot** | MCP OAuth、WebUI 重构 | 个人开发者、MCP 生态用户 | 显式 RuntimeControl 协议、OAuth 状态隔离 |
| **Hermes Agent** | god-file 分解、多 Profile、Desktop | 追求代码可维护性的贡献者 | 模块提取重构、multiplex gateway 正确性 |
| **PicoClaw** | 安全边界、渠道渲染 | 安全敏感用户、Telegram 用户 | 远程执行默认禁用、Telegram 富消息 |
| **NanoClaw** | 隐私日志、会话去重、架构重构 | 隐私合规场景 | privacySafeLogs、消息 ID 重用修复 |
| **CoPaw** | 桌面 UI、ReMe 记忆、provider 兼容 | 中文用户、桌面端用户 | StepFun/Gemini 字段清理、IME 输入修复 |
| **ZeroClaw** | 安全审计、RFC 治理、WASM plugin | 安全研究、WASM 生态 | S0/S1 级安全 RFC 密集评审、PR 合并保守 |
| **LobsterAI** | cowork 协作、Windows 稳定性 | Windows 用户、协作者 | 文件附件卡片化、右键菜单、依赖大版本升级 |
| **Moltis** | Apple Container、浏览器自动化 | macOS 用户 | Apple Container 后端（当前问题集中） |
| **NullClaw** | A2A 协议服务端 | 多 Agent 编排用户 | 仅服务端实现，客户端工具缺失 |

---

## 6. 社区热度与成熟度

**第一梯队（极高活跃，快速迭代）**：
- **ZeroClaw**：50/50 Issue/PR，但仅 1 合并，处于安全审计密集期，决策节奏稳健但迭代受限
- **OpenClaw**：500+ 日更，PR 积压 348 条，处于稳定性攻坚期

**第二梯队（高活跃，健康推进）**：
- **CoPaw**：34 Issue/50 PR，v2.1.0 准备中，修复与新功能并行
- **NanoBot**：23 PR/4 Issue，关键 Bug 修复高效，维护者响应迅速
- **Hermes Agent**：100 条动态，god-file 重构系统性推进

**第三梯队（中等活跃，特定方向深耕）**：
- **NanoClaw**：20 PR/3 Issue，架构重构+隐私安全
- **PicoClaw**：9 PR/4 Issue，安全加固为主
- **LobsterAI**：12 PR，协作体验优化，依赖升级风险待观察

**第四梯队（低活跃/停滞）**：
- **NullClaw**：1 Issue/1 PR，平稳但缺乏进展
- **Moltis**：3 Issue/1 PR（4 个月未合并），Apple Container 后端问题集中
- **ZeptoClaw**：无活动

---

## 7. 值得关注的趋势信号

### 7.1 安全从"功能附加"转向"架构核心"
ZeroClaw、PicoClaw、NanoClaw 均在本轮集中推进安全加固（CSPRNG、SSRF 防护、远程执行默认禁用、信任标签）。**趋势**：AI 智能体项目正从"功能优先"转向"安全合规优先"，未来新版本将默认携带更严格的安全边界。

### 7.2 生产级稳定性成为竞争分水岭
OpenClaw（500+ Issue）、Hermes Agent（进程泄漏）、NanoClaw（静默失败）的共同痛点是**长运行退化**。社区对"会话卡死"、"消息丢失"、"资源泄漏"的容忍度已接近阈值。**趋势**：下一轮版本竞争将围绕"7×24 小时稳定运行能力"展开。

### 7.3 多租户/Multiplex 正确性需求凸显
Hermes Agent（多 Profile 路由错误）、OpenClaw（per-agent 成本预算）、ZeroClaw（知识图谱隔离）均出现多租户场景下的正确性 Bug。**趋势**：从"单人单 agent"向"多人多 agent"演进时，路由隔离、权限边界、资源计费成为必答题。

### 7.4 MCP 生态集成加速
NanoBot（MCP OAuth、SDK v2 迁移）、CoPaw（MCP 超时配置）、ZeroClaw（MCP CA 信任）均在推进 MCP 兼容性。**趋势**：MCP 正在成为智能体工具调用的标准协议，支持深度 MCP 集成的项目将获得开发者生态优势。

### 7.5 可观测性短板暴露
多个项目出现"silent failure"（静默失败）问题：NanoClaw 定时任务错误被吞、OpenClaw silent reply failure 复发、Hermes Agent 通知路由错误。**趋势**：可观测性（错误告警、操作审计、状态追踪）将成为下一轮产品差异化关键。

---

**总结**：生态整体处于"功能扩张期"向"质量巩固期"过渡阶段，OpenClaw 作为核心网关承担最大维护压力，NanoBot 与 Hermes Agent 在特定方向（MCP、代码重构）展现高效迭代能力，ZeroClaw 以安全审计驱动高质量演进。对开发者而言，关注**长会话稳定性、多租户正确性、MCP 兼容性、可观测性**四个方向将有助于把握生态演进趋势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目日报 — 2026-08-11

---

## 1. 今日速览

过去24小时 NanoBot 项目保持高度活跃：**4 条 Issue、23 条 PR**，其中 3 条 Issue 和 10 条 PR 已关闭，整体活跃度较高。今日核心进展集中在 **MCP 功能增强**（OAuth 支持、SDK v2 迁移）、**WebUI 重构**（设置服务拆分、UX 修复）和**多个关键 Bug 修复**（Dream 无限循环、CORS/跨任务崩溃）。项目处于快速迭代期，维护者响应迅速，积压 Issue/PR 得到较好清理。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 类型 | 内容概要 |
|---|---|---|
| [#5316](https://github.com/HKUDS/nanobot/pull/5316) | feat(mcp) | 新增浏览器 OAuth 支持，覆盖 Streamable HTTP 和 SSE 远程 MCP 服务器，提供 XMind/Notion/Linear 预设 |
| [#5325](https://github.com/HKUDS/nanobot/pull/5325) | fix(files) | 拒绝 `edit_file` 无操作编辑，修复 Dream 记忆整理无限循环问题（#5324） |
| [#5321](https://github.com/HKUDS/nanobot/pull/5321) | refactor(webui) | WebUI 设置服务收归 Gateway 管辖，实现原子读写与 OAuth 状态隔离 |
| [#5319](https://github.com/HKUDS/nanobot/pull/5319) | refactor(agent) | 用显式 `RuntimeControl` 协议替换反射式运行时状态访问，提升可维护性 |
| [#5317](https://github.com/HKUDS/nanobot/pull/5317) | fix(webui) | WebUI 状态变更迁移至认证 WebSocket，拒绝未认证 mutation 请求 |
| [#5315](https://github.com/HKUDS/nanobot/pull/5315) | fix(webui) | 改善 UX 恢复流程和空状态处理，降低认证挑战摩擦 |
| [#5310](https://github.com/HKUDS/nanobot/pull/5310) | fix(weixin) | 微信登录强制走全新 QR 流程，避免残留凭证恢复旧账号 |

**整体判断**：今日推进了 MCP 安全性增强、WebUI 架构重构、微信登录体验改进三个方向，为下一版本打下稳定性与安全性基础。

---

## 4. 社区热点

### 🔥 高关注度 Issue / PR

1. **[Issue #5297](https://github.com/HKUDS/nanobot/issues/5297)** — MCP OAuth 网页授权需求
   - 用户希望配置需要 OAuth 的 MCP（如 XMind API）时能走 gateway 远程授权
   - **已合并 PR #5316**，该需求今日正式落地

2. **[Issue #5324](https://github.com/HKUDS/nanobot/issues/5324)** — Dream 记忆整理无限循环
   - 2026-08-10 下午异常运行 23 分钟，消耗超 10M token（约半个月用量）
   - **已合并 PR #5325**，拒绝无操作编辑以阻断循环

3. **[Issue #5300](https://github.com/HKUDS/nanobot/issues/5300)** — MCP 连接失败导致进程崩溃
   - Cloudflare 530 错误触发 anyio cancel scope 跨任务崩溃，CPU 飙升
   - 修复路径清晰，属于稳定性关键问题

4. **[PR #5179](https://github.com/HKUDS/nanobot/pull/5179)** — MCP 迁移至 SDK v2
   - 从 v1 `ClientSession` API 迁移至 v2 `Client`，保持 SSRF/DNS pinning 安全校验
   - 长期活跃 PR（创建于 07-30），仍在 open，待合并

5. **[PR #5322](https://github.com/HKUDS/nanobot/pull/5322)** — WebUI Tabbed Pane 工作区
   - 引入多 Tab、多 Pane 布局，支持列/行/网格/主堆叠/ monocle 多种排列
   - 显著提升多任务并行场景体验

---

## 5. Bug 与稳定性

| Issue/PR | 严重程度 | 描述 | 状态 |
|---|---|---|---|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | P1 | 推理时重复输出相同消息（随机触发） | **OPEN**，无 Fix |
| [#5300](https://github.com/HKUDS/nanobot/issues/5300) | P0 | MCP 连接失败 → 进程崩溃 + CPU 飙升 | **CLOSED**，待合并 PR |
| [#5324](https://github.com/HKUDS/nanobot/issues/5324) | P1 | Dream 记忆整理无限循环，消耗异常 token | **CLOSED**，已合并 PR #5325 |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | P0 | 后台任务陈旧写盘覆盖新会话数据 | **OPEN**，待合并 |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | P1 | 目标续接无上限，闲置时反复注入提示 | **OPEN**，待合并 |

**稳定性评估**：今日修复了 Dream 无限循环和 MCP 崩溃两个 P0/P1 级问题，但仍有 2 个 P0 级 PR 待合并（#5271 会话数据覆盖、#5327 重复消息）。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 纳入下版本概率 |
|---|---|---|---|
| MCP OAuth 网页授权 | #5297 → PR #5316 | ✅ 已合并 | — |
| MCP SDK v2 迁移 | PR #5179 | 🔄 Open | 高（优先级 P1） |
| 结构化 Token 使用记录 | PR #5299 | 🔄 Open | 中（诊断能力） |
| WebUI Tabbed 工作区 | PR #5322 | 🔄 Open | 高（体验改进） |
| OrcaRouter 网关 Provider | PR #5328 | 🔄 Open | 中（第三方集成） |
| Agent 插件与 CLI 应用整合 | PR #5288 | 🔄 Open | 中（架构演进） |
| 目标续接上限控制 | PR #5257 | 🔄 Open | 高（稳定性） |
| Matrix room 级别回复 | PR #5292 | 🔄 Open | 低（渠道扩展） |

**路线图判断**：MCP SDK v2 迁移（#5179）和 WebUI 重构是两大主线，OrcaRouter 集成反映项目扩展 Provider 生态的意图。

---

## 7. 用户反馈摘要

- **MCP OAuth 需求强烈**：用户（sunboy0523）多次提及需要 OAuth 支持的 MCP 服务（XMind、Notion、Linear），PR #5316 已满足该诉求
- **Token 消耗担忧**：Dream 无限循环消耗 10M token（半个月用量）引发社区关注，用户期望更严格的成本控制
- **微信登录体验痛点**：PR #5310 修复了强制 QR 登录残留凭证问题，反映用户对登录可靠性的敏感度
- **WebUI 多任务需求**：Tabbed Pane（#5322）表明用户需要更灵活的工作区布局支持并行任务
- **稳定性敏感度**：MCP 崩溃（#5300）和会话数据覆盖（#5271）属于影响生产可用性的关键问题

---

## 8. 待处理积压

| 类型 | ID | 标题 | 优先级 | 建议跟进 |
|---|---|---|---|---|
| Issue | [#5327](https://github.com/HKUDS/nanobot/issues/5327) | 推理时重复输出相同消息 | P1 | 需维护者确认复现路径 |
| PR | [#5179](https://github.com/HKUDS/nanobot/pull/5179) | MCP SDK v2 迁移 | P1 | 创建于 07-30，已开放 11 天，建议优先合并 |
| PR | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务陈旧写盘覆盖会话 | P0 | 生产稳定性问题，建议尽快合并 |
| PR | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 目标续接无上限控制 | P1 | 创建 08-05，待 5 天 |
| PR | [#5328](https://github.com/HKUDS/nanobot/pull/5328) | OrcaRouter 网关集成 | P2 | 新功能，可评估后合并 |

---

**项目健康度评估**：🟢 **良好**。今日关闭 3 个 Issue、合并 10 个 PR，维护者响应及时，关键 Bug 修复效率高。主要风险点为 MCP SDK v2 迁移和会话数据覆盖两个待合并 PR，建议优先处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报
**日期：2026-08-11 | 数据周期：过去24小时**

---

## 1. 今日速览

Hermes Agent 今日保持高度活跃，共处理 **100 条** 仓库动态（50 Issues + 50 PRs），其中 6 个 Issue 已关闭、13 个 PR 已合并，整体开发节奏稳定。项目当前正处于**大规模重构期**——god-file 分解 epic（#78647）持续推进，今日合并了两项 agent 层重构 PR；同时多个长期积累的 Windows/macOS Desktop 进程泄漏 bug 获得关注并产出 fix PR。整体健康度良好，社区参与度活跃，无阻塞性 release 风险。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#83397](https://github.com/NousResearch/hermes-agent/pull/83397) | Bug Fix | **SQLite 文件描述符泄漏修复**——在异常路径和关闭路径上正确关闭 SessionDB 连接，缓解 EMFILE 问题（关联 Issue #75269、#83512） |
| [#83545](https://github.com/NousResearch/hermes-agent/pull/83545) | Bug Fix | **Windows SSH 沙箱路由可靠性修复**——保持 SSH 后端的远程 POSIX 路径命名空间，避免 Windows 主机路径规范化导致的路径错乱 |
| [#83558](https://github.com/NousResearch/hermes-agent/pull/83558) | Bug Fix | 修复 SGLang 端点在上下文窗口边界错误时的输出解析问题 |
| [#83546](https://github.com/NousResearch/hermes-agent/pull/83546) | Refactor | 将 `api_server` 幂等性集群提取至独立模块（god-file 分解 Part） |
| [#83547](https://github.com/NousResearch/hermes-agent/pull/83547) | Refactor | 将 `conversation_loop.py` 中内容策略阻断逻辑提取至独立模块（god-file 分解 Part） |

**项目整体推进评估：** 今日工作集中在三类方向——（1）god-file 分解持续落地，2 个重构 PR 合并；（2）SQLite 连接泄漏这一长期稳定性问题获得实质性修复；（3）Windows 平台兼容性持续改进。项目架构债务正在被系统性地偿还。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 类型 | 评论数 | 热度分析 |
|---|---|---|---|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) — **Epic: Shard all 20 god files** | Refactor | 64 | 仓库级重构总指挥部，维持最高讨论热度，社区对 god-file 分解方案高度关注 |
| [#75269](https://github.com/NousResearch/hermes-agent/issues/75269) — **SessionDB WAL 读取器泄漏至进程关闭** | Bug P1 | 9 | 已关闭，关联修复 PR #83397 已合并，问题实质已解决 |
| [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) — **cronjob `repeat='forever'` 类型错误** | Bug P2 | 7 | 持续开放，cron 调度器兼容性问题的代表性案例 |
| [#69451](https://github.com/NousResearch/hermes-agent/issues/69451) — **Desktop 自定义端点忽略活跃 Profile** | Bug P2 | 5 | 多 Profile 用户的核心痛点，涉及 Desktop 全局配置作用域问题 |
| [#63395](https://github.com/NousResearch/hermes-agent/issues/63395) — **Matrix 加密房间定时投递后数据库池崩溃** | Bug P3 | 5 | 长运行场景下的平台生命周期管理问题 |

### 讨论最活跃的 PR

| PR | 说明 |
|---|---|
| [#83557](https://github.com/NousResearch/hermes-agent/pull/83557) | **修复多 Profile 定时投递路由到错误 Bot**——multiplex gateway 下 cron 使用拥有者 profile 的 bot token，关联 Issue #83182 |
| [#83556](https://github.com/NousResearch/hermes-agent/pull/83556) | **修复 Windows Desktop 启动回归**——解决 `HERMES_PARENT_PID` 父进程守护机制在 Windows 上失效的问题 |
| [#83552](https://github.com/NousResearch/hermes-agent/pull/83552) | **全局 Kanban worker 并发上限**——修复多 board 下 `max_in_progress` 被独立计数导致的并发超限 |
| [#77297](https://github.com/NousResearch/hermes-agent/pull/77297) | **Desktop 后端关闭时停止 app-managed gateway**——补充启动期孤儿清理的关闭侧对等逻辑 |

**热点分析：** 社区当前最集中的诉求是**多 Profile / multiplex gateway 场景下的正确性**（#83557、#69451、#83550），以及**长运行场景下的资源泄漏**（#75269、#83512）。此外 god-file 重构 epic 维持极高关注度，表明社区对代码可维护性的重视。

---

## 5. Bug 与稳定性

### 按严重程度排列

#### 🔴 P1 — 高优先级

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#83512](https://github.com/NousResearch/hermes-agent/issues/83512) | SessionDB `_read_conns` 每个 agent 线程泄漏一个只读连接，~40h 后 EMFILE | OPEN | #83397 已合并（部分覆盖） |
| [#83213](https://github.com/NousResearch/hermes-agent/issues/83213) | `/new` 后后台进程完成通知路由到错误会话 | OPEN | 暂无 |
| [#83484](https://github.com/NousResearch/hermes-agent/issues/83484) | 定时任务对永久不兼容目标无限重试 | OPEN | 暂无 |
| [#5908](https://github.com/NousResearch/hermes-agent/issues/5908) | kimi-coding 凭证池 base_url 未在加载时重新解析 | OPEN（2 👍） | 暂无 |

#### 🟡 P2 — 中等优先级

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#78872](https://github.com/NousResearch/hermes-agent/issues/78872) | macOS Desktop 孤儿 `hermes serve` 进程堆积 → EMFILE | ✅ CLOSED | #83556 已合并 |
| [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) | Windows Desktop 加载插件后 React #310 崩溃 | ✅ CLOSED | 相关修复跟进中 |
| [#79428](https://github.com/NousResearch/hermes-agent/issues/79428) | Windows Desktop 第二窗口 React #310 崩溃 | ✅ CLOSED | 同上 |
| [#83455](https://github.com/NousResearch/hermes-agent/issues/83455) | `/refine` 拒绝已完成但 in-memory cache 缺失的 Desktop 会话 | OPEN | 暂无 |
| [#83380](https://github.com/NousResearch/hermes-agent/issues/83380) | Desktop 产物页面时间戳显示1970年 + 图片无法显示 | OPEN | 暂无 |
| [#83006](https://github.com/NousResearch/hermes-agent/issues/83006) | TUI Ctrl+Z 通过 `os.kill(0, SIGTSTP)` 挂起整个进程组，粘贴 `0x1A` 可意外触发 | OPEN | 暂无 |
| [#79434](https://github.com/NousResearch/hermes-agent/issues/79434) | `uv sync --locked` 每日失败：lockfile 过期 + 未上传日期 Pin | OPEN | 暂无 |
| [#80898](https://github.com/NousResearch/hermes-agent/issues/80898) | macOS 多次重启 Desktop 后 `hermes serve` 进程堆积 | OPEN | 与 #78872 同根，#83556 部分覆盖 |
| [#83482](https://github.com/NousResearch/hermes-agent/issues/83482) | Linux Desktop 关闭窗口泄漏孤儿后端进程 | OPEN | 暂无 |
| [#83473](https://github.com/NousResearch/hermes-agent/issues/83473) | Linux/X11 HUD 模式卡死，band 无法重新armed | OPEN | 暂无 |
| [#82816](https://github.com/NousResearch/hermes-agent/issues/82816) | OpenAI 兼容 Provider 自动会话标题生成 100% 失败（vLLM guided_grammar） | OPEN | 暂无 |
| [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) | cronjob `repeat='forever'` 类型错误 | OPEN | 暂无 |
| [#69451](https://github.com/NousResearch/hermes-agent/issues/69451) | Desktop 自定义端点忽略活跃 Profile | OPEN | 暂无 |
| [#69304](https://github.com/NousResearch/hermes-agent/issues/69304) | `cron deliver=origin` 在 api_server 会话中静默失败 | OPEN | 暂无 |

#### 🟢 P3 — 低优先级

| Issue | 标题 | 状态 |
|---|---|---|
| [#83017](https://github.com/NousResearch/hermes-agent/issues/83017) | Desktop HUD 模式退出按钮失效 | OPEN |
| [#63395](https://github.com/NousResearch/hermes-agent/issues/63395) | Matrix 加密房间投递后数据库池崩溃日志 | OPEN |
| [#45762](https://github.com/NousResearch/hermes-agent/issues/45762) | Telegram Rich Message 文本过大 | ✅ CLOSED |
| [#83475](https://github.com/NousResearch/hermes-agent/issues/83475) | headless Linux 上浏览器工具集不出现 | ✅ CLOSED |

**稳定性总结：** 今日共关闭 6 个 Issue，其中 3 个与 Windows Desktop React 崩溃和 macOS 进程泄漏相关，修复正在推进。但**进程/文件描述符泄漏**仍是当前最突出的稳定性威胁，至少 4 个相关 Issue 有待进一步修复。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 分析 |
|---|---|---|
| [#9485](https://github.com/NousResearch/hermes-agent/issues/9485) — HermesClaw CRM 前端 | Feature | 用户提出为 Hermes 销售自动化管线构建可视化管理界面，与核心 agent 运行时耦合度低，更可能作为独立项目或插件存在 |
| [#56766](https://github.com/NousResearch/hermes-agent/pull/56766) — kanban `--board` 标志 + cronjob `prompt_file` | Feature | 已开放 PR，两项实用小功能，有望纳入近期版本 |
| [#83553](https://github.com/NousResearch/hermes-agent/pull/83553) — 运行时 Footer 新增 `tokens_in`/`tokens_out`/`effort` 字段 | Feature | 扩展 gateway 运行时元数据展示，关联 #19922 功能伞，有明确需求支撑 |
| [#83551](https://github.com/NousResearch/hermes-agent/pull/83551) — 静默自动批准的危险命令添加解释说明 | Feature | 提升安全性透明度，port from kilocode，社区价值明确 |
| [#82822](https://github.com/NousResearch/hermes-agent/pull/82822) — Desktop 会话列表上下切换按钮 | Feature | 改善 Desktop UX 的渐进式改进，低风险的体验优化 |
| [#82821](https://github.com/NousResearch/hermes-agent/pull/82821) — Desktop 侧边栏视图切换条 | Feature | 解决用户长期反馈的"找不到 Projects/所有 Profile 视图"问题（关联 #66894） |
| [#83549](https://github.com/NousResearch/hermes-agent/pull/83549) — 负价格信号降级为 unknown | Bug Fix | 修正 OpenRouter 动态定价模型的成本计算逻辑，port from kilocode |

**路线图信号：** 当前开发重心明确集中在三个方向——（1）**架构现代化**：god-file 分解 + 模块提取；（2）**多租户/Multiplex 正确性**：Profile 隔离、定时投递路由、busy mode 路由；（3）**Desktop 体验打磨**：会话管理 UI、视图切换、进程生命周期管理。

---

## 7. 用户反馈摘要

| 痛点/场景 | 来源 | 提炼 |
|---|---|---|
| **长运行资源泄漏**：Gateway/Dashboard 运行约 40 小时后因 SQLite 文件描述符耗尽而崩溃 | #75269、#83512、#78872 | 生产环境持续运行的用户受困于 FD 泄漏，直接影响服务可用性 |
| **多 Profile 路由错误**：Multiplex gateway 下 cron 定时任务投递到错误的 Bot/Chat | #83182（通过 #83557） | 多租户部署用户的核心痛点，涉及业务关键的消息投递正确性 |
| **Windows Desktop 崩溃**：React #310 错误导致第二窗口或插件加载后崩溃 | #80560、#79428 | Windows 用户群体体验严重受损，已关闭但需确认根因修复完整性 |
| **Kanban 数据持久化异常**：更新后空 `kanban.db` 无表结构，看板数据丢失 | #83445 | 回归问题，影响使用 Kanban 功能的用户工作流 |
| **TUI 意外挂起**：粘贴操作中的 `0x1A` 字节触发 Ctrl+Z，挂起整个进程组 | #83006 | 终端用户日常操作中的意外中断，影响 CLI/TUI 使用体验 |
| **Desktop 产物页面时间戳错误** | #83380 | 前端秒/毫秒解析不一致，影响用户查看历史记录 |
| **自动化更新每日失败** | #79434 | `uv sync --locked` 因 lockfile 过期和未上传日期 Pin 持续失败，影响 VPS 自维护部署 |
| **自定义端点不区分 Profile** | #69451 | 多 Profile 用户的配置隔离需求未被满足 |

---

## 8. 待处理积压

| Issue | 严重级别 | 开放天数 | 风险说明 |
|---|---|---|---|
| [#83512](https://github.com/NousResearch/hermes-agent/issues/83512) — SessionDB 连接泄漏 | P1 | 1 天（新增） | 长运行进程的稳定性杀手，#83397 部分修复但需确认覆盖完整性 |
| [#83213](https://github.com/NousResearch/hermes-agent/issues/83213) — 后台通知路由错误 | P1 | 1 天（新增） | `/new` 切换会话后通知丢失，影响多会话工作流 |
| [#83484](https://github.com/NousResearch/hermes-agent/issues/83484) — 定时任务无限重试 | P2 | 1 天（新增） | 对永久不可达目标无限重试消耗资源，需增加退避/失败上限 |
| [#83380](https://github.com/NousResearch/hermes-agent/issues/83380) — Desktop 产物页双 Bug | P3 | 1 天（新增） | 时间戳 + 图片显示问题，影响 Desktop 用户体验 |
| [#83006](https://github.com/NousResearch/hermes-agent/issues/83006) — TUI Ctrl+Z 意外触发 | P2 | 1 天（新增） | 粘贴敏感字符导致进程挂起，CLI 用户高频场景 |
| [#79434](https://github.com/NousResearch/hermes-agent/issues/79434) — uv sync 每日失败 | P2 | 6 天 | 影响自动化部署和自维护用户，lockfile 维护

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报
**日期：2026-08-11** | 数据来源：GitHub

---

## 1. 今日速览

过去24小时内，PicoClaw 保持中等活跃度：共处理 4 个 Issues（2 新开/活跃、2 已关闭）和 9 个 PRs（7 已合并、2 待合并），无新版本发布。项目聚焦于**安全性加固**、**工具调用稳定性**和**渠道渲染体验**三类问题，其中安全边界的收紧（#3297）和重复工具调用死循环修复（#3312/#3314）是当前维护重点，整体方向稳健。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭了 **7 个 PRs**，主要推进了以下方向：

| PR | 类型 | 说明 |
|----|------|------|
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | 🔒 安全 | 收紧远程 prompt 和执行边界，默认禁用远程执行，强制 per-call 审批 |
| [#3327](https://github.com/sipeed/picoclaw/pull/3327) | ✨ 功能 | Telegram 表格渲染改用 Bot API 原生富消息，告别等宽代码块 |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | 🐛 修复 | 修复 `SplitMessage` 在超长 fence header 时卡死的问题 |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | 🌐 i18n | 补全捷克语代码块标签 |
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | 🔧 构建 | 移除 `pnpm-lock.yaml` 中重复条目，修复 `--frozen-lockfile` 安装失败 |
| [#2132](https://github.com/sipeed/picoclaw/pull/2132) | ⚙️ 配置 | 支持模型级 `max_tokens` 独立配置，修复 config key 覆盖问题 |
| [#1547](https://github.com/sipeed/picoclaw/pull/1547) | 🔧 合并 | 合并 #1466/#1465 的修复 |

> **整体判断**：今日合并以**安全性加固**和**稳定性修复**为主，同时有实质性的用户体验改进（Telegram 表格渲染）。项目向前迈进了安全边界重构和渠道渲染现代化两步。

---

## 4. 社区热点

| Issue/PR | 状态 | 评论 | 热度说明 |
|----------|------|------|----------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | OPEN | 3 | dispatch rules 路由场景下 `/clear` 和 session 压缩失效，影响多 agent 部署用户 |
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | CLOSED | 2 | 请求将 AI Router 作为 OpenAI 兼容的预设 provider，维护者 affiliated disclosure，已关闭（可能已解决或拒绝） |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | CLOSED | 2 | `/list models` 仅显示当前模型而非全部配置，用户预期与实现不一致 |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | OPEN | 1 | 工具反复失败导致静默循环至 `max_tool_iterations`，用户永远收不到回复，生产环境 Telegram 观测到 |

**热点分析**：
- **#3301** 和 **#3311** 是当前最值得关注的问题，均涉及 agent 核心执行路径的可靠性，且均有对应 PR 跟进（#3314 和 #3312 待合并）。
- **#3298** 来自 AI Router 维护者，属于生态集成需求，关闭原因待确认。
- **#3294** 属于功能预期不一致类 bug，已关闭但修复状态需确认。

---

## 5. Bug 与稳定性

| 问题 | 严重程度 | Issue | Fix PR | 状态 |
|------|----------|-------|--------|------|
| 重复工具调用死循环，用户永远无回复 | 🔴 高 | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | [#3312](https://github.com/sipeed/picoclaw/pull/3312) | PR 待合并 |
| `customAllowPatterns` 未生效，shell 命令被错误拦截 | 🟡 中 | — | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | PR 待合并 |
| `/clear` 在多 agent dispatch 路由下失效 | 🟡 中 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | — | 暂无 fix |
| session auto-compression 在多 agent 路由下失效 | 🟡 中 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | — | 暂无 fix |
| `/list models` 仅显示当前模型 | 🟢 低 | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | — | 已关闭（修复待确认） |
| `SplitMessage` 超长 fence header 卡死 | 🟡 中 | — | [#3295](https://github.com/sipeed/picoclaw/pull/3295) | ✅ 已合并 |

> **稳定性评估**：2 个高/中优先级 bug 已有对应 PR 待合并，整体风险可控。但 **#3301** 涉及 dispatch 路由核心路径，暂无 fix，建议关注。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 关联 PR | 纳入可能性 |
|------|-------|---------|------------|
| AI Router 作为预设 provider | [#3298](https://github.com/sipeed/picoclaw/issues/3298) | — | 已关闭，暂不明朗 |
| Telegram 表格原生富消息渲染 | — | [#3327](https://github.com/sipeed/picoclaw/pull/3327) | ✅ 已合并，即将随版本发布 |
| 模型级 `max_tokens` 独立配置 | — | [#2132](https://github.com/sipeed/picoclaw/pull/2132) | ✅ 已合并，配置粒度提升 |
| `customAllowPatterns` 修复 | — | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | ✅ 逻辑已修复，待合并 |

> **路线图信号**：项目在**配置精细化**（模型级参数）和**渠道体验现代化**（Telegram 富消息）方向持续投入，同时强化**安全默认值**（远程执行默认禁用）。

---

## 7. 用户反馈摘要

- **多 agent dispatch 路由场景**是高频痛点：#3301 报告了 `/clear` 和 session 压缩在该场景下失效，说明 dispatch rules 路径的测试覆盖不足。
- **工具调用静默失败**严重影响用户体验：#3311 用户反映 Telegram 上 git 命令因凭证问题反复失败，全程无反馈，暴露了错误提示缺失的问题。
- **安全与灵活性的平衡**：#3297 安全加固 PR 反映了用户对远程执行安全的关注，社区接受"默认禁用 + 手动启用"的策略。
- **配置键覆盖行为不符合预期**：#2132 提到 `gateway.go` 将 `Defaults.ModelName` 覆盖为 provider 的 `modelID`，导致配置查找异常，现已修复。

---

## 8. 待处理积压

| 项目 | 状态 | 创建时间 | 建议 |
|------|------|----------|------|
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) `/clear` 和 session 压缩在多 agent 路由下失效 | OPEN [stale] | 2026-07-29 | ⚠️ 已 stale，涉及核心路由路径，建议优先响应 |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) 重复工具调用死循环 | OPEN [stale] | 2026-08-02 | ⚠️ 已 stale，Fix PR #3312 待合并，合并后可关闭 |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) `customAllowPatterns` 未生效 | OPEN [stale] | 2026-08-03 | 建议尽快审核合并 |
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) 停止重复工具调用死循环 | OPEN [stale] | 2026-08-02 | 建议尽快审核合并 |

> **维护者提醒**：当前有 2 个 Issue 和 2 个 PR 标记为 `[stale]`，其中 #3301 缺少对应 fix PR，建议优先处理。#3311 和 #3314 的 fix 已就绪，合并后可显著改善 agent 执行可靠性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-08-11

---

## 1. 今日速览

NanoClaw 昨日保持高活跃开发节奏：20 条 PR 更新（10 合并/关闭），3 条新 Issue，无新版本发布。当日工作聚焦于三项核心方向：**安全加固**（Telegram 配对码 CSPRNG 改造、DM 日志隐私脱敏）、**会话稳定性**（入站消息去重与 ID 重用修复）、**架构重构**（模块生命周期统一、数据库迁移注册）。项目整体处于"夯实基础 + 修复长期隐患"的稳健演进阶段，健康度良好。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

**今日合并/关闭的重要 PR（10 条）：**

| PR | 类型 | 摘要 |
|----|------|------|
| [#3228](https://github.com/nanocoai/nanoclaw/pull/3228) | Fix | 修复会话级聊天投递重复问题，消除同一 turn 内消息被多次发送的缺陷 |
| [#3222](https://github.com/nanocoai/nanoclaw/pull/3222) | Feature | 新增可选的隐私安全 DM 日志模式（`privacySafeLogs`），默认关闭，启用后剥离用户 ID/句柄等标识信息 |
| [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) | Fix | 对 DM 解析日志进行脱敏处理，与 #3222 配合完善隐私合规 |
| [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) | Docs | 文档补注 `install_packages` 仅覆盖 apt 和 npm，避免用户误用 |
| [#3214](https://github.com/nanocoai/nanoclaw/pull/3214) | Refactor | 统一 host 模块生命周期钩子，降低模块初始化的不确定性 |
| [#3212](https://github.com/nanocoai/nanoclaw/pull/3212) | Refactor | 引入数据库模块迁移注册表，为后续 schema 演进提供基础设施 |
| [#3213](https://github.com/nanocoai/nanoclaw/pull/3213) | Refactor | 注册渠道问题渲染器，统一 UI 层反馈行为 |
| [#3211](https://github.com/nanocoai/nanoclaw/pull/3211) | Docs | 定义技能（Skill）单职责集成规范，明确贡献边界 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | Refactor | 为 skill 自有能力在 host 层增加注入钩子（seams），增强扩展性 |
| [#3219](https://github.com/nanocoai/nanoclaw/pull/3219) | Docs | Telegram 与容器环境配置说明文档 |

**整体判断：** 今日工程产出以重构和文档为主（7/10），辅以关键 Bug 修复和隐私功能。项目正从"功能扩张"转向"结构加固"，为后续大版本（Agent Templates → Plugins 1.0）打基础。

---

## 4. 社区热点

**今日活跃 Issue：**

- **[Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226)** — 入站消息因平台重用消息 ID 被静默丢弃
  - 诉求：用户反馈消息"石沉大海"且无任何可见提示，体验极差。该 Issue 已由 [#3224](https://github.com/nanocoai/nanoclaw/pull/3224) 修复 PR 跟进，状态良好。

- **[Issue #3223](https://github.com/nanocoai/nanoclaw/issues/3223)** — 定时任务执行出错时，错误信息无法路由且被静默丢弃
  - 诉求：操作员完全感知不到定时任务失败，运维盲区。目前尚无对应 Fix PR。

- **[Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075)** — 长期运行后日志静默丢失 + 入站消息重复插入错误，且无 systemd 单元
  - 诉求：WSL2/Docker 部署场景下的生产稳定性问题，创建时间较久（2026-07-17）但最近活跃（2026-08-10），有 1 条评论，可能正在讨论方案。

**分析：** 今日 Issues 全部围绕"**静默失败**"主题——消息丢失、错误被吞——反映用户对该类隐蔽 Bug 的容忍度已接近阈值，社区对此类问题的关注度和评论预期将上升。

---

## 5. Bug 与稳定性

| 级别 | 问题 | Issue | Fix PR | 状态 |
|------|------|-------|--------|------|
| 🔴 高 | 平台重用消息 ID 导致入站消息静默丢弃（用户侧无感知） | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) | [#3224](https://github.com/nanocoai/nanoclaw/pull/3224) | PR 已开，待合并 |
| 🔴 高 | 定时任务出错时错误消息无法路由、静默丢弃，操作员无感知 | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | 无 | ⚠️ 待修复 |
| 🟡 中 | 长期运行后日志丢失 + 重复插入错误，且缺乏 systemd 部署单元 | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | 无 | 讨论中 |
| 🟡 中 | Telegram 配对码使用 `Math.random()`，安全性不足 | 无独立 Issue | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229)（Open）、[#3225](https://github.com/nanocoai/nanoclaw/pull/3225)（Open） | 双 PR 并行，待合并 |

**稳定性评估：** 当日修复了投递重复和隐私日志两个历史问题，但**静默失败类 Bug 仍是最大风险点**，尤其是 #3223 缺少对应 PR，建议优先跟进。

---

## 6. 功能请求与路线图信号

| 功能方向 | 相关 PR | 状态 | 评估 |
|----------|---------|------|------|
| Agent 模板 → Agent Plugins 1.0 目录格式迁移 | [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) | Open | 核心引擎变更，破坏性更新，预计纳入下一大版本 |
| 模板向导与首 Agent Stamping 流程 | [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | Open | 与 #3220 配套，共同完成模板功能重构 |
| 远程 Streamable HTTP MCP 服务器支持 | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092)、[#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | Open（2 PR） | #3092 为引擎层支持，#3221 补齐 codex/opencode 侧缺失，二者需同步合入 |
| CLI 支持从 stdin 接收有界 JSON | [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | Open | 实用性工具增强，风险评估低，较易合入 |
| 单次写入文件表面声明（替代推断） | [#3227](https://github.com/nanocoai/nanoclaw/pull/3227) | Open | 重构类，降低文件系统权限风险 |

**路线图信号：** 项目正集中推进 **Agent 模板体系重构**（#3220 + #2909）和 **MCP 远程支持**（#3092 + #3221），这两组 PR 完成后可能触发一次版本跃迁。`--stdin-json` CLI 增强和权限加固类 PR 风险较低，有望在近期快速合入。

---

## 7. 用户反馈摘要

- **痛点：消息静默丢失。** Issue #3226 和 #3075 均反映同一类问题——用户发出消息后 Agent 无响应，且没有任何错误提示，用户体验等同于"被忽略"。此类问题在长期运行的生产部署中尤为致命。

- **痛点：定时任务失败不可观测。** Issue #3223 指出，调度任务出错时操作员完全无法感知，缺乏告警通道。

- **满意点：隐私安全改进。** #3222 和 #3215 新增的 DM 日志脱敏功能受到隐私敏感用户的期待，`privacySafeLogs` 采用 opt-in 设计保留了默认行为的完整性。

- **使用场景：** Issue #3075 用户运行在 WSL2 + Docker Desktop + Matrix 本地服务器环境，说明 NanoClaw 的容器化部署场景正在扩展，对 systemd 单元等生产级支持的需求随之增长。

---

## 8. 待处理积压

| 优先级 | 项目 | 说明 |
|--------|------|------|
| 🔴 高 | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) — 定时任务错误静默丢弃 | 无对应 Fix PR，运维盲区，建议尽快认领 |
| 🔴 高 | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) — 长期运行日志丢失 + 重复插入 | 存在约 25 天，有评论但无 PR，需推进修复方案 |
| 🟡 中 | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) + [#3225](https://github.com/nanocoai/nanoclaw/pull/3225) — Telegram 配对码安全加固 | 两个 PR 内容重叠（均涉及 CSPRNG 改造），建议协调合并或明确分工 |
| 🟡 中 | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) + [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) — 远程 MCP 支持 | 两个 PR 互为依赖，需同步完成才能完整支持 |
| 🟢 低 | [#3227](https://github.com/nanocoai/nanoclaw/pull/3227) — 单写入文件声明重构 | 安全改进型 PR，无紧急性但值得合入 |

---

**报告生成时间：** 2026-08-11 | **数据来源：** [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) GitHub API

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 — 2026-08-11

---

## 1. 今日速览

NullClaw 昨日整体活跃度较低，过去24小时内仅产生1条 Issue 更新和1条 PR 更新，无新版本发布。Issue #700（a2a_call 客户端工具）被关闭，推测为已合入主干或需求不再适用。项目处于平稳迭代期，无重大事件或风险信号。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

- **Issue #700**（`a2a_call` 客户端工具）已于 2026-08-10 关闭，作者 georgeglarson 实现的 `a2a_call` 工具（用于向远程 Agent 发送 `message/send` JSON-RPC 请求）已进入收尾阶段，相关功能可能已通过合并或独立 PR 落地。
- PR **#956**（Dependabot Alpine 3.23 → 3.24）仍处于待合并状态，尚未被维护者处理。

**整体判断：** 今日无新合并 PR，项目推进节奏偏缓，但 Issue 关闭表明存在隐式进展。

---

## 4. 社区热点

| 类型 | 编号 | 标题 | 评论 | 👍 | 状态 |
|------|------|------|------|----|------|
| Issue | [#700](https://github.com/nullclaw/nullclaw/issues/700) | Add a2a_call client tool for calling remote agents | 1 | 1 | ✅ 已关闭 |
| PR | [#956](https://github.com/nullclaw/nullclaw/pull/956) | ci(deps): bump alpine from 3.23 to 3.24 | 0 | 0 | 🟡 待合并 |

**热点分析：**
- **#700** 反映用户希望在 NullClaw 的 A2A 协议支持中补充客户端能力（当前仅服务端实现），典型使用场景为多 Agent 编排（如 doorman + 私人 Agent 协同）。该需求的关闭值得进一步确认是否已合并。
- **#956** 为 Dependabot 自动依赖升级 PR，创建时间较长（2026-06-15），至今未合并，可能因 Alpine 3.24 兼容性审查或维护者疏忽所致。

---

## 5. Bug 与稳定性

今日无新提交的 Bug 报告或回归问题。

---

## 6. 功能请求与路线图信号

- **#700** 提出的 `a2a_call` 客户端工具代表了用户对 **A2A 客户端实现** 的明确需求。NullClaw 当前仅实现了 A2A 服务端协议（v0.3.0），缺少客户端工具链。若该 Issue 被关闭是因为功能已合入，建议关注相关 PR 合并情况以确认路线图方向。
- 无其他新功能请求在近期出现。

---

## 7. 用户反馈摘要

- **痛点：** A2A 协议缺乏客户端 SDK/工具，用户需要自行构建远程 Agent 调用能力（参考 #700 摘要中的多实例编排场景）。
- **满意点：** 社区对新增功能有正向反馈（#700 获得 1 👍）。
- **使用场景：** 多 NullClaw 实例协同（公开展示入口 + 私有个人 Agent）。

---

## 8. 待处理积压

| 类型 | 编号 | 创建时间 | 描述 | 优先级 |
|------|------|----------|------|--------|
| PR | [#956](https://github.com/nullclaw/nullclaw/pull/956) | 2026-06-15 | Alpine 基础镜像升级 3.23 → 3.24，已超时约 2 个月未处理 | 中 |

**建议：** 维护者应尽快审查 #956，Alpine 版本滞后可能引入已知安全漏洞风险。同时确认 #700 关闭的实际原因，避免社区误解。

---

**项目健康度评级：** 🟡 平稳（低活跃度，无风险事件，但存在 PR 积压）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 — 2026-08-11

## 1. 今日速览

过去 24 小时 LobsterAI 项目活跃度**中等偏高**，核心贡献者 fisherdaddy 密集提交了 12 个 PR，覆盖 cowork 协作体验、网关稳定性修复及 Windows 运行时升级问题。dependabot 批量推进了 React、Vite 等核心依赖的升级，版本跨度极大（Vite 5→8、React-DOM 18→19），潜在风险需关注。今日无新版本发布，但关闭了关键 Bug #1243（网关频繁重启），稳定性有所改善。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#2472](https://github.com/netease-youdao/LobsterAI/pull/2472) | feat | cowork 活动组折叠功能，优化协作界面空间利用率 |
| [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471) | feat | 将提交的文件附件渲染为可点击卡片，统一与图片附件的展示体验 |
| [#2454](https://github.com/netease-youdao/LobsterAI/pull/2454) | fix | 修复工具循环保护逻辑误杀合法轮询请求的问题 |
| [#2467](https://github.com/netease-youdao/LobsterAI/pull/2467) | fix | 修复 Windows 运行时升级后过期的 pip shim 残留问题 |
| [#2466](https://github.com/netease-youdao/LobsterAI/pull/2466) | fix | 修复 renderer 初始化 IPC 阻塞问题，增加重试机制 |
| [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470) | fix | 修复延迟聊天错误被吞掉的问题，确保 provider 运行时故障正确暴露 |
| [#2468](https://github.com/netease-youdao/LobsterAI/pull/2468) | refactor | 统一 streaming loading 指示器，减少重复代码 |

### 进行中的 PR（待合并）

- [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) — 为本地文件链接添加右键上下文菜单（打开/保存/复制路径/内容/图片/在文件夹中显示）
- [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) — Vite 5.4.21 → 8.2.1 升级
- [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) — React-DOM 18.3.1 → 19.2.8 升级
- [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — 修复含斜杠的模型 ID 保留 provider 前缀

**整体推进评估**：今日主要聚焦于 **cowork 协作体验优化** 和 **OpenClaw 网关稳定性**，两个方向均有实质进展。依赖升级跨度大但属于维护性任务，需验证兼容性。

---

## 4. 社区热点

### 活跃 Issue

- **[Bug #1243](https://github.com/netease-youdao/LobsterAI/issues/1243)** — `qwen-portal-auth` 插件配置循环写入导致网关频繁重启（已关闭）
  - 用户反馈网关每 5-20 分钟自动重启，伴随"AI 引擎正在启动网关..."弹窗，严重影响使用体验。该问题已标注为 stale 并关闭，推测已在后续版本中修复。

### 活跃 PR

- [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) — 本地文件右键菜单功能，用户可通过上下文菜单执行多种操作，无需依赖内联按钮
- [#2462](https://github.com/netease-youdao/LobsterAI/pull/2462) — Mermaid 10.9.8 → 11.16.1 升级，覆盖图表渲染能力改进

---

## 5. Bug 与稳定性

| 问题 | 来源 | 状态 | 说明 |
|---|---|---|---|
| `qwen-portal-auth` 配置循环写入导致网关重启 | [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | 已关闭 | 影响 Win10/11 用户，网关每 5-20 分钟重启一次 |
| 工具循环保护误杀合法轮询 | [#2454](https://github.com/netease-youdao/LobsterAI/pull/2454) | 已合并 | fix(openclaw): 修复过度激进的循环检测逻辑 |
| Windows 运行时升级后 pip shim 过期 | [#2467](https://github.com/netease-youdao/LobsterAI/pull/2467) | 已合并 | fix(python-runtime): 新增健康检查校验 shim 内容而非仅检查文件存在 |
| Renderer 初始化 IPC 阻塞 | [#2466](https://github.com/netease-youdao/LobsterAI/pull/2466) | 已合并 | 增加重试机制防止初始化卡死 |
| Provider 运行时故障被吞掉 | [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470) | 已合并 | 修复 late chat error 处理逻辑，确保 idle timeout failover 等真实故障可见 |

**稳定性评估**：今日修复了 4 个 OpenClaw 相关的稳定性问题，涵盖网关重启、IPC 阻塞、错误暴露缺失等，整体稳定性呈改善趋势。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 分析 |
|---|---|---|
| 本地文件右键操作 | [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) | 用户期望更便捷的文件管理能力，PR 已覆盖 open-with/save-as/copy/copy-image/reveal 等高频场景，预计纳入近期版本 |
| 协作活动组折叠 | [#2472](https://github.com/netease-youdao/LobsterAI/pull/2472) | 协作空间有限时折叠无关活动是合理需求，已合并不排除后续增加更多 UI 精简选项 |
| 文件附件富展示 | [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471) | 非图片附件此前仅显示为原始路径文本，现改为卡片形式，说明产品团队在持续优化 cowork 附件体验 |
| 快捷键支持 | [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469) | 折叠 agent tasks 快捷键及输入时支持修饰键，表明键盘效率是 cowork 模块的优化方向 |

**路线图判断**：cowork 协作体验是近期核心方向，依赖升级（Vite 8、React 19）若验证通过，可能伴随下一大版本一并发布。

---

## 7. 用户反馈摘要

- **痛点**：`qwen-portal-auth` 插件导致的网关频繁重启是今日唯一活跃 Issue，用户描述"严重影响使用体验"，属于高频干扰型问题，修复优先级高。
- **满意点**：文件附件从原始路径文本升级为卡片展示（[#2471](https://github.com/netease-youdao/LobsterAI/pull/2471)），以及右键菜单的补充（[#2473](https://github.com/netease-youdao/LobsterAI/pull/2473)），说明用户对交互细节有反馈渠道且被响应。
- **使用场景**：Windows 用户占比高（Issue #1243 明确 Win10/11），依赖 Windows 运行时升级和 Python pip 管理，Windows 平台的稳定性修复是重点。

---

## 8. 待处理积压

| 项目 | 来源 | 风险提示 |
|---|---|---|
| Vite 5→8 升级 | [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) | 跨大版本升级，可能引入构建配置变更和破坏性变更，需充分回归测试 |
| React-DOM 18→19 升级 | [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) | React 19 存在 API 变更，需验证组件兼容性及第三方依赖 |
| `@vitejs/plugin-react` 4→6 升级 | [#2463](https://github.com/netease-youdao/LobsterAI/pull/2463) | 与 Vite 升级联动，建议同步验证 |
| `rimraf` 5→6 升级 | [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) | 底层文件系统操作变更，需关注构建/清理脚本行为 |

> **建议维护者**：今日 20 个 PR 中有多个依赖升级，且版本跨度大。建议在合并前确保 CI 全量构建通过，并关注 Dependabot 关联 Issue 中的兼容性讨论。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报 — 2026-08-11

---

## 1. 今日速览

过去24小时内，Moltis 项目共新增 3 条 Issues 与 1 条 PR，全部为活跃状态，无 Issues 或 PR 被关闭/合并，无新版本发布。项目活跃度维持在**中等水平**——今日没有重大功能合并或版本迭代，但 Apple Container 后端集中出现了 3 个关联 Bug 反馈，表明该模块正处于高频使用与问题暴露期。整体来看，项目处于"问题收集"而非"功能推进"阶段，健康度正常但需关注 Apple Container 的稳定性。

---

## 2. 版本发布

无新版本发布。上一个版本发布距今已超过 24 小时，暂无 Release Notes 可更新。

---

## 3. 项目进展

| 项目 | 状态 | 说明 |
|------|------|------|
| PR #531 — 交互式浏览器查看 UI（CDP Screencast） | 🔵 待合并 | 最后更新 2026-08-10，作者 `penso`，已持续 open 超过 4 个月。该 PR 为 Settings > Browser 页面引入完整的浏览器会话管理、实时预览与交互能力，是项目浏览器功能演进的核心入口，但至今未被合并，进展停滞。 |

**整体推进评估**：今日无 PR 合并记录，项目功能层面未向前推进。所有新活动均集中在 Bug 反馈，而非新功能落地。

---

## 4. 社区热点

今日热度最高的是 **Issue #1185**，拥有 3 条评论，是过去 24 小时内唯一有社区互动的 Issue。

- **🔥 Issue #1185** — Apple Container 1.x sandbox 已启动但 Moltis 误报为未运行
  - 作者：`mikz` | 创建：2026-08-08 | 评论：3 | 👍 0
  - [链接](https://github.com/moltis-org/moltis/issues/1185)
  - **分析**：该问题涉及容器生命周期状态检测逻辑与 Apple Container 1.x 实际行为不一致，已有 3 轮讨论说明社区关注度高，且可能影响多用户。

其余两条 Issue（#1188、#1189）暂无评论，处于待响应状态。

---

## 5. Bug 与稳定性

今日报告 **3 个 Bug**，均与 Apple Container 后端相关，按严重程度排列如下：

| 级别 | Issue | 描述 | 有无 Fix PR |
|------|-------|------|------------|
| 🟡 中 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x sandbox 实际已启动，但 Moltis 状态检测误判为"未运行"，影响用户任务调度判断 | ❌ 暂无 |
| 🔴 高 | [#1189](https://github.com/moltis-org/moltis/issues/1189) | Sandbox 构建失败，根因为 `gogcli` GitHub URL 配置错误，属于阻塞性构建问题 | ❌ 暂无 |
| 🔴 高 | [#1188](https://github.com/moltis-org/moltis/issues/1188) | Apple Container 后端的资源限制（CPU/内存）未生效，存在性能与隔离性风险 | ❌ 暂无 |

**稳定性评估**：今日 3 个 Bug 全部集中在 Apple Container 后端，呈现明显的模块性缺陷特征，而非分散的偶发问题。建议维护者优先排查该后端的启动检测、URL 解析与资源限制注入逻辑。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 评估 |
|------|------|------|
| PR #531 | 交互式浏览器查看 UI（CDP Screencast） | 功能完整、描述清晰，但已 open 超 4 个月未合并，可能是功能成熟度或审查瓶颈问题。若合并，将显著提升 Moltis 的浏览器自动化能力。 |

**路线图判断**：当前未见新的功能请求 Issue，社区活动以 Bug 反馈为主。PR #531 的浏览器交互功能是已知的最大功能增量，但合并优先级需维护者明确。

---

## 7. 用户反馈摘要

| 用户痛点 | 来源 | 场景描述 |
|----------|------|----------|
| 状态检测误判 | #1185 | 用户启动 Apple Container 1.x sandbox 后，Moltis 无法正确识别其运行状态，可能导致任务重复提交或状态显示错误。 |
| 构建工具链 URL 错误 | #1189 | `gogcli` 的 GitHub 引用地址配置错误，导致 sandbox 构建流程直接失败，影响开发者和贡献者的本地测试体验。 |
| 资源限制未生效 | #1188 | Apple Container 后端在启动容器时未正确注入 CPU/内存限制，可能引发资源争抢或容器行为不可预期。 |

**用户满意度信号**：今日无正面反馈 Issue，所有活动均为问题报告，整体用户情绪偏负面，集中在 Apple Container 后端的可用性问题。

---

## 8. 待处理积压

| 项目 | 类型 | 开放时长 | 风险提示 |
|------|------|----------|----------|
| [PR #531](https://github.com/moltis-org/moltis/pull/531) | 功能 PR | 超 4 个月 | 长期未合并可能影响贡献者积极性，需维护者尽快给出审查反馈或合并决策 |
| [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) | Bug | 3 天 | 已有 3 条评论，社区关注度最高，建议优先响应 |
| [Issue #1189](https://github.com/moltis-org/moltis/issues/1189) | Bug | 1 天 | 阻塞性构建问题，影响开发体验 |
| [Issue #1188](https://github.com/moltis-org/moltis/issues/1188) | Bug | 1 天 | 资源限制失效，潜在稳定性风险 |

---

**📊 项目健康度评分（主观评估）**

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐☆☆ | 有持续 Issue/PR 活动，但无合并/关闭产出 |
| Bug 响应 | ⭐⭐☆☆☆ | 3 个 Bug 均无响应，#1185 有讨论但无结论 |
| 功能推进 | ⭐⭐☆☆☆ | PR #531 长期停滞，无新功能合并 |
| 版本迭代 | ⭐☆☆☆☆ | 无新版本发布 |

**总体评价**：项目处于 Bug 暴露期，Apple Container 后端是当前主要风险点。建议维护者优先关闭或确认 #1185/#1188/#1189 的修复计划，并推动 PR #531 的审查闭环。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw 项目日报 — 2026-08-11

## 1. 今日速览

CoPaw 项目今日保持高活跃度：过去24小时新增/活跃 Issues 34条、关闭 6条，PR 更新 50条（待合并 31、已合并/关闭 19）。核心进展集中在三块：**严格兼容性问题修复**（StepFun/Gemini provider 字段清理）、**UI/UX 细节打磨**（IME 输入、窗口记忆、后台任务面板折叠）以及 **ReMe 记忆系统增强**（reranker 支持、embedding 热更新）。整体项目健康度良好，bug 修复占主导，新功能 PR 稳步推进，但窗口仍存在一定积压需关注。

---

## 2. 版本发布

**无新版本发布。** PR #6875 正在准备 v2.1.0 发布说明，预计近期随主要功能合并后发布。

---

## 3. 项目进展

### 今日已关闭/合并的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#6809](https://github.com/agentscope-ai/CoPaw/pull/6809) | fix | 清理 Chat Completions content 中的内部运行时字段（delta、internal 等），修复 StepFun 等严格提供商的 400 错误 |
| [#6878](https://github.com/agentscope-ai/CoPaw/pull/6878) | feat | Console 项目目录选择器新增「显示隐藏文件夹」开关 |
| [#6615](https://github.com/agentscope-ai/CoPaw/pull/6615) | fix | 修复 `agent.json` 损坏时 `load_agent_config()` 直接抛出原始异常的健壮性问题 |
| [#6398](https://github.com/agentscope-ai/CoPaw/pull/6398) | feat | ReMe 记忆搜索新增 **reranker 重排序支持**，可过外部 reranker API 对召回结果二次排序 |

**整体评估：** 今日合并的 PR 以修复类为主，重点解决了上游 provider 兼容性这一高频痛点，同时为 ReMe 记忆系统补齐了 reranker 能力，项目稳定性和功能完备性稳步提升。

---

## 4. 社区热点

### 高讨论度 Issues

| Issue | 标签 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) | bug | 9 | Docker 版插件市场/应用市场始终显示"维护中"，无法使用 |
| [#6803](https://github.com/agentscope-ai/CoPaw/issues/6803) | bug | 6 | OpenAI-compatible 请求携带 Responses-API 内部字段，StepFun 等严格提供商拒绝（400） |
| [#6811](https://github.com/agentscope-ai/CoPaw/issues/6811) | bug | 5 | OpenAI Responses 模式下 continuation summary 忽略 `disable_thinking`，阻塞主对话 |
| [#6826](https://github.com/agentscope-ai/CoPaw/issues/6826) | bug | 5 | 助手消息结束时间显示异常（实际思考2min，页面显示仅几秒） |
| [#6814](https://github.com/agentscope-ai/CoPaw/issues/6814) | bug | 4 | macOS 下 SQLite WAL 模式打开 history.db 触发 SIGBUS 崩溃 |
| [#6820](https://github.com/agentscope-ai/CoPaw/issues/6820) | bug | 4 | 前端 UI 不实时显示模型输出/工具调用，全部完成才渲染 |
| [#4237](https://github.com/agentscope-ai/CoPaw/issues/4237) | enhancement | 4 | 请求聊天内嵌 Shell 命令运行面板（查看/终止/延长超时） |
| [#6405](https://github.com/agentscope-ai/CoPaw/issues/6405) | question | 4 | 升级 2.0 后 MCP 工具总是报 "Tool not found" |

**趋势分析：** 社区焦点集中在 **provider 兼容性**（#6782、#6803、#6811）和 **前端实时渲染**（#6820、#6826）两大方向，反映出用户对多模型支持稳定性和 UI 响应速度的强烈诉求。

---

## 5. Bug 与稳定性

### 高严重程度

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6885](https://github.com/agentscope-ai/CoPaw/issues/6885) | **v2.1.0b2 Console 中文 IME 输入导致消息队列不可用（崩溃）** | [#6889](https://github.com/agentscope-ai/CoPaw/pull/6889) 已提交 |
| [#6814](https://github.com/agentscope-ai/CoPaw/issues/6814) | **macOS SQLite WAL 崩溃 SIGBUS**，影响 Scroll history.db 打开 | 暂无 |
| [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) | Docker 版插件/应用市场始终维护中，功能不可用 | 暂无 |
| [#6803](https://github.com/agentscope-ai/CoPaw/issues/6803) | OpenAI-compatible 请求携带 Responses-API 字段，StepFun 等拒绝 | [#6809](https://github.com/agentscope-ai/CoPaw/pull/6809) 已合并 |
| [#6811](https://github.com/agentscope-ai/CoPaw/issues/6811) | continuation summary 忽略 `disable_thinking`，阻塞主对话 | 暂无 |
| [#6821](https://github.com/agentscope-ai/CoPaw/issues/6821) | thinking-mode 模型多轮对话 400 错误：`reasoning_content` 未回传 | 暂无 |
| [#6867](https://github.com/agentscope-ai/CoPaw/issues/6867) | Gemini 压缩（compaction）报 `thought_signature` 缺失 400 错误 | 暂无 |

### 中严重程度

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6820](https://github.com/agentscope-ai/CoPaw/issues/6820) | 前端 UI 不流式渲染，全部完成后才显示 | 暂无 |
| [#6826](https://github.com/agentscope-ai/CoPaw/issues/6826) | 助手消息结束时间显示异常（与实际耗时不符） | [#6845](https://github.com/agentscope-ai/CoPaw/pull/6845) 已提交 |
| [#6813](https://github.com/agentscope-ai/CoPaw/issues/6813) | `consume_model_response` KeyError: `__aiter__`，自动标题生成失败 | 暂无 |
| [#6828](https://github.com/agentscope-ai/CoPaw/issues/6828) | Console 空闲时 CSS 无限动画导致 ~20% CPU 占用 | 暂无 |
| [#6807](https://github.com/agentscope-ai/CoPaw/issues/6807) | qwenpaw-creator 插件 Windows 上视频/图片生成完全不可用 | 暂无 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 路线图信号 |
|---|---|---|
| [#4237](https://github.com/agentscope-ai/CoPaw/issues/4237) | 聊天内嵌 Shell 命令运行面板（看/杀/延长超时） | 长期请求，尚未有 PR |
| [#6881](https://github.com/agentscope-ai/CoPaw/issues/6881) | Auto-refresh session title after auto-memory update | 功能增强，无 PR |
| [#6840](https://github.com/agentscope-ai/CoPaw/issues/6840) | ReMe4 完整路线图时间表（Auto-Link、tri-modal search 等） | 用户主动询问，需官方回应 |
| [#4634](https://github.com/agentscope-ai/CoPaw/issues/4634) | 窗口大小和位置记忆 | [#6877](https://github.com/agentscope-ai/CoPaw/pull/6877) 已提交（Tauri window-state plugin） |
| [#6841](https://github.com/agentscope-ai/CoPaw/issues/6841) | Auto-Dream 集成容错（单单元失败不应整体报错） | [#6884](https://github.com/agentscope-ai/CoPaw/pull/6884) 已提交 |
| [#6724](https://github.com/agentscope-ai/CoPaw/issues/6724) | MCP 工具调用超时可配置 | 功能增强，无 PR |
| [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | 按会话指定模型覆盖 | 已提交，待合并 |
| [#6880](https://github.com/agentscope-ai/CoPaw/pull/6880) | 统一应用/插件/技能市场页面 | 已提交，待合并 |
| [#6772](https://github.com/agentscope-ai/CoPaw/pull/6772) | ReMe Light embedding 热更新 + Daily Paper | 已提交，待合并 |

**判断：** #6877（窗口记忆）、#6884（Auto-Dream 容错）、#6880（统一市场）、#6772（ReMe embedding）均有 PR 待合并，预计纳入 v2.1.0。ReMe4 路线图时间表（#6840）需维护者官方回应以稳定社区预期。

---

## 7. 用户反馈摘要

- **插件市场不可用（#6782）：** Docker 用户反馈插件/应用市场持续显示"维护中"，严重影响插件生态使用体验。
- **前端不流式渲染（#6820）：** 用户期望看到模型输出、工具调用实时展示，但当前需等待全部完成才渲染，体验割裂。
- **后台任务面板占满聊天窗口（#6876）：** 多个长任务时卡片撑满主界面，建议默认折叠或移至独立区域。
- **IME 中文输入崩溃（#6885）：** v2.1.0b2 升级后中文输入法在 agent 运行期间导致消息队列完全不可用，社区反应强烈。
- **杀软误报（#6847）：** Windows 上 QwenPaw 常被杀软拦截/关停，而竞品 WorkBuddy 不受影响，安全性认证亟待解决。
- **MCP 参数类型错误（#6839）：** MCP 工具将数字字符串参数错误地以数字类型传递，导致调用失败。
- **自动思考耗时显示错误（#6826）：** 助手实际思考 2 分钟，页面却显示几秒，误导性强。
- **动态字符统计闪动（#6585）：** 加载技能/文件时字符数动态跳变影响注意力，用户希望有关闭开关。

---

## 8. 待处理积压

| Issue | 创建时间 | 评论数 | 状态 | 建议 |
|---|---|---|---|---|
| [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) | 2026-08-07 | 9 | OPEN | 高优先级：Docker 用户高频痛点，需尽快排查插件市场连接逻辑 |
| [#6814](https://github.com/agentscope-ai/CoPaw/issues/6814) | 2026-08-08 | 4 | OPEN | 高优先级：macOS SQLite 崩溃，影响 Scroll 功能稳定性 |
| [#6828](https://github.com/agentscope-ai/CoPaw/issues/6828) | 2026-08-08 | 2 | OPEN | 中优先级：CSS 动画导致 ~20% CPU，影响 Mac 用户体验 |
| [#6847](https://github.com/agentscope-ai/CoPaw/issues/6847) | 2026-08-09 | 3 | OPEN | 中优先级：杀软误报影响 Windows 用户群，建议寻求安全认证或白名单 |
| [#6840](https://github.com/agentscope-ai/CoPaw/issues/6840) | 2026-08-09 | 2 | OPEN | 需维护者回应 ReMe4 路线图时间线，稳定社区预期 |
| [#6724](https://github.com/agentscope-ai/CoPaw/issues/6724) | 2026-08-05 | 2 | OPEN | 长期请求：MCP 超时配置，已有明确方案可推进 |

---

*数据来源：GitHub CoPaw 仓库，统计周期 2026-08-10 ~ 2026-08-11。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报
**日期：2026-08-11** | 数据来源：GitHub API | 统计周期：过去24小时

---

## 1. 今日速览

ZeroClaw 在过去24小时内保持**极高活跃度**，新增 Issue 50条、PR 50条，社区贡献者密集推进。安全审计持续深化，#9397、#9393、#9395 等安全 RFC/Bug 均标注 high risk，反映项目对安全边界的持续收紧。仅1条 PR 获合并，整体仍处于**大量 RFC 评审与修复等待合并**的阶段，决策节奏稳健但迭代速度受限。

---

## 2. 版本发布

> 过去24小时无新版本发布。当前最新稳定版本为 `v0.8.3`，RFC 追踪器显示部分特性已进入 rollout 阶段。

---

## 3. 项目进展

### 已合并/关闭 PR（1条）

| PR | 类型 | 摘要 |
|----|------|------|
| [#8301](https://github.com/zeroclaw-labs/zeroclaw/pull/8301) | test | 新增回归测试：覆盖 catalog tool name 格式（lower_snake_case） |

### 重点待合并 PR（部分）

| PR | 类型 | 摘要 | 风险 |
|----|------|------|------|
| [#9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900) | fix | OpenAI Codex provider 修复：不再在无流式模式下重试（避免 400 错误） | high |
| [#9898](https://github.com/zeroclaw-labs/zeroclaw/pull/9898) | fix | 修复 `zeroclaw status` 内存 banner 后端解析逻辑 | medium |
| [#9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867) | ci | 自动化 PR size label 生成（`pr-size-labeler.yml`） | high |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | feat | Windows 原生 PowerShell 支持 | high |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | feat | Plugin typed instance config 校验 | high |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | fix | 修复 dashboard WebSocket 断开后 agent turn 被意外取消的问题 | high |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | fix | `file_download` SSRF 防护：新增 `allowed_private_hosts` 白名单 | high |
| [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | fix | Lark 验证 token 改用 `constant_time_eq`，修复 timing attack 漏洞 | high |
| [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) | fix | Telegram 媒体组批量上传修复 | medium |
| [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) | fix | `cron add` CLI 新增 delivery flags 支持 | high |
| [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) | feat | LLM-judge 维度评估器（校准前默认关闭） | high |

> **进展评估**：今日合并数量偏低（1/50），大量 PR 处于 review 阶段，项目整体处于**高质量 review 密集期**，合并节奏保守但质量有保障。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 主题 | 热度分析 |
|-------|--------|------|----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 23 | RFC: Work Lanes, Board Automation, Label Cleanup | 治理 RFC 持续讨论，维护者试图优化工作流管理，社区关注自动化标签与 RFC 流程的改进 |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 13 | RFC: Per-model capability & context-window config | 模型配置透明化需求强烈，provider 默认值误报问题困扰大量用户 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 12 | Tracker: Maintainer decision queue for RFCs | 治理框架完善，RFC 审批队列需要可见性 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 12 | RFC: WhatsApp Web `allowed_groups` 空列表语义 | 安全审计驱动，空列表应视为"拒绝全部"而非"允许全部" |

### 热点 PR

- [#9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867)：自动化 PR size label——解决人工维护负担，社区呼声较高（关联 Issue #9345）
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)：Gateway 新增 OpenAI Chat Completions 端点——打通 LangChain/Aider 等生态，需求明确

---

## 5. Bug 与稳定性

### 高优先级 Bug（S0/S1）

| Issue | 严重度 | 摘要 | Fix PR |
|-------|--------|------|--------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | **S0** 数据安全/安全风险 | 知识图谱无 per-agent 隔离，任意 agent 可读写其他 agent 的知识 | 待 fix |
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | **S0** 数据安全/安全风险 | Matrix 通道未实现 `.well-known/matrix/client` 代理发现，连接失败 | 待 fix |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | **S1** 工作流阻断 | Bluesky/Reddit 通道无发件人授权机制，无中央 gate 覆盖 | 待 fix |
| [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) | **S1** 工作流阻断 | WASM plugin `wasi:http` egress 无目的地策略，无配置旋钮 | 待 fix |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | **S1** 工作流阻断 | SOP 运行中任务无 operator 取消路径 | PR [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) 部分相关 |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | **S1** 工作流阻断 | Docker Compose gateway 端口绑定后仍为 loopback，连接拒绝 | 待 fix |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | **S1** 工作流阻断 | `web_fetch` 对 gzip/brotli 压缩响应返回乱码 | 待 fix |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | **S0** 数据/安全风险 | git write 动词通过 `-C`/`--git-dir` 全局选项绕过风险分类器 | 待 fix |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | **S1** 配置错误 | `sops_dir` 文档默认值未被 daemon 遵守，SOP 静默不加载 | 待 fix |
| [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) | **S1** 工作流阻断 | LINE 群组消息跳过 allowlist 和配对握手 | 待 fix |
| [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) | **S1** 安全 | 未认证 POST `/api/pair` 的 lockout 依赖攻击者可控 header | 待 fix |
| [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) | **S1** 可观测性 | 命令审计日志默认开启但实际写入为空 | 待 fix |

### 中低优先级 Bug

| Issue | 严重度 | 摘要 | Fix PR |
|-------|--------|------|--------|
| [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | S2 | daemon reload 未在 SIGUSR1 上触发，降级安全警告误导操作 | 待 fix |
| [#9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) | — | `zeroclaw-gateway` clippy -D warnings 失败（dead code） | PR [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) 部分覆盖 |
| [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) | S2 | `cron --help` 父命令示例无效 | 待 fix |
| [#9844](https://github.com/zeroclaw-labs/zeroclaw/issues/9844) | S3 | ZeroCode Dashboard CPU 指标未标识被测进程 | 待 fix |
| [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) | S2 | WebChat 自动滚动覆盖手动滚动（流式传输期间） | 待 fix |
| [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | S2 | ZeroCode Ollama 流式用户输入被小模型误识别为协议/日志 | 待 fix |

> **稳定性评估**：近期安全审计产生**大量 S0/S1 级修复需求**，其中多个（#9647、#9855、#9627）涉及核心安全边界，需优先处理。`web_fetch` 压缩响应（#9207）和 SOP 取消（#9425）影响日常使用。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 需求摘要 | 纳入可能性 |
|----------|------|----------|------------|
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) + [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | RFC + PR | 模型能力/上下文窗口配置细化；OpenAI 兼容端点 | ⭐⭐⭐⭐ 高——已有 PR 推进 |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) + [#9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867) | 增强 + PR | PR 自动 size/risk label 重新计算 | ⭐⭐⭐⭐ 高——PR 已提交 |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | 增强 | Windows PowerShell 原生支持 | ⭐⭐⭐ 中高——PR 已提交 |
| [#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) | 增强 | MCP 服务器自定义 CA 信任 | ⭐⭐⭐ 中——需求合理但优先级待排 |
| [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) | 增强 | LLM-judge 评估器（校准前默认关闭） | ⭐⭐⭐ 中高——已有诊断版 PR |
| [#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047) | 增强 | ZeroCode 会话历史与持久化记忆隔离说明 | ⭐⭐ 中——文档/UX 优化 |
| [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) | 增强 | rustdoc warning 纳入 PR CI | ⭐⭐⭐ 高——基础设施改进 |

---

## 7. 用户反馈摘要

| 主题 | 反馈内容 | 来源 |
|------|----------|------|
| **安全隔离缺失** | 知识图谱无 per-agent 隔离，任意 agent 可越权读写他人知识，引发 S0 级担忧 | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| **配置语义陷阱** | `sops_dir` 文档默认值未被 daemon 遵守，SOP 静默失败无日志，严重误导运维 | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) |
| **WebChat 体验** | 流式回复期间自动滚动无法手动覆盖，阅读历史消息受阻 | [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) |
| **小模型兼容性** | ZeroCode 流式输入被 Ollama 小模型（如 llama3.2）误判为协议/日志数据 | [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) |
| **Docker 部署** | `docker-compose up` 后端口无法访问（Connection refused），网络桥接失效 | [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) |
| **治理流程** | RFC 审批周期过长，需要维护者决策队列提升透明度 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| **信号误导** | 降级安全警告提示发送 SIGUSR1 重载，但实际该信号会直接终止 daemon | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) |

---

## 8. 待处理积压

| Issue/PR | 状态 | 最后更新 | 风险 | 建议 |
|----------|------|----------|------|------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | in-progress | 2026-08-10 | **S0** | 知识图谱隔离为最高优先级安全修复 |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | in-progress | 2026-08-10 | **S1** | Bluesky/Reddit 授权缺失需紧急修复 |
| [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) | in-progress | 2026-08-10 | **S1** | WASM plugin egress 无目的地策略 |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | in-progress | 2026-08-10 | **S1** | `web_fetch` 压缩响应 bug 影响广泛 |
| [#9425](https://github.com/zeroc

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*