# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-06 01:29 UTC

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



# OpenClaw 项目日报 — 2026-08-06

---

## 1. 今日速览

过去24小时 OpenClaw 保持高活跃开发节奏：**Issues 更新 500 条**（新开/活跃 437，关闭 63），**PR 更新 500 条**（待合并 427，合并/关闭 73）。今日无新版本发布，但维护者团队在 session 状态管理、多通道消息可靠性（Slack/Discord/Telegram/Zalo）以及 Signal QR 设置流程上取得实质性推进。社区反馈集中在**消息丢失、session 卡死恢复、billing cooldown 过长**三大痛点，其中 P0 级 DB 迁移阻断与 managed media 误删问题需优先处理。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（73 条）

| PR | 类型 | 摘要 |
|---|---|---|
| [#119787](https://github.com/openclaw/openclaw/pull/119787) | fix | Gateway E2E 测试在 x64 架构下不再卡死（修复虚假 5 分钟无输出超时） |
| [#119792](https://github.com/openclaw/openclaw/pull/119792) | fix | `openclaw backup` 跳过 ephemeral coordinator lock DB，修复运行中 gateway 备份失败 |
| [#118796](https://github.com/openclaw/openclaw/pull/118796) | fix | 修复 CLI 聚合 run usage 被误认为 session context snapshot 的问题（superseded by #118792） |
| [#113066](https://github.com/openclaw/openclaw/pull/113066) | fix | 在终端 incomplete-turn 提示中暴露具体的 auth failure 信息，降低排查门槛 |
| [#119802](https://github.com/openclaw/openclaw/pull/119802) | docs | 将 Release & CI 文档提升为顶级导航，改善运维文档发现性 |

### 关键进行中 PR

- **[PR #119737](https://github.com/openclaw/openclaw/pull/119737)** — Slack 终端回执修复：要求确认 `threadTs` 放置后再标记 delivery，直接对应 Issue #96692
- **[PR #118465](https://github.com/openclaw/openclaw/pull/118465)** — 启动后首条消息延迟优化：预热 model catalog 与 plugin registry，解决生产环境首条消息数秒卡顿
- **[PR #119402](https://github.com/openclaw/openclaw/pull/119402)** — 修复多次模型请求后队列回复被阻塞问题（#119009）
- **[PR #119596](https://github.com/openclaw/openclaw/pull/119596)** — 从 overflow 模式移除 bodyless 400/413，防止误触发 compaction
- **[PR #116793/116795](https://github.com/openclaw/openclaw/pull/116793)** — agents 执行归因重构栈（2/5 & 4/5），统一工具策略与执行追踪来源

---

## 4. 社区热点

### 评论最多 Issue TOP 5

| Issue | 主题 | 评论 | 等级 | 链接 |
|---|---|---|---|---|
| #116201 | 实时语音 session 保留无界 provider/consult 状态 | 59 | 🐚 Platinum / P1 | [链接](https://github.com/openclaw/openclaw/issues/116201) |
| #7707 | 基于来源的 Memory Trust Tagging 功能请求 | 27 | 🌊 Off-meta / P2 | [链接](https://github.com/openclaw/openclaw/issues/7707) |
| #44925 | Subagent 完成结果静默丢失（无重试/通知/重启） | 25 | 🦞 Diamond / P1 | [链接](https://github.com/openclaw/openclaw/issues/44925) |
| #118846 | Gateway 主线程启动即饱和，插件元数据 snapshot 阻塞 accept loop | 19 | 🦪 Silver / P1 | [链接](https://github.com/openclaw/openclaw/issues/118846) |
| #86519 | 5.20 更新后 Telegram 重复发送相同回复 2-10 次 | 13 | 🐚 Platinum / P1 | [链接](https://github.com/openclaw/openclaw/issues/86519) |

**热点分析：**
- **#116201**（59 评论）反映用户对实时语音 session 资源边界控制的强烈关注，维护者 vincentkoc 主导，属核心架构问题。
- **#7707**（27 评论）是安全相关的长期功能请求，提出按来源对 memory 条目打信任标签，防御 memory poisoning 攻击。
- **#44925**（25 评论）直击多子 agent 编排可靠性，对生产级工作流影响显著。
- **#118846**（19 评论）为今日新增 P1 问题，Docker 环境下 gateway 启动即 CPU 100%，影响可用性。

---

## 5. Bug 与稳定性

### P0 级问题

| Issue | 描述 | 状态 | Fix PR | 链接 |
|---|---|---|---|---|
| #119263 | DB v14→v15 迁移失败：`no such column: entry_valid`，gateway 拒绝启动 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/119263) |
| #119090 | managed media cleanup 在 session store 不可读时误删全部媒体 | CLOSED（已修复） | — | [链接](https://github.com/openclaw/openclaw/issues/119090) |
| #70903 | 持久化 billing cooldown 在充值后仍阻塞用户数小时 | OPEN | 部分：#115642 提出 probe-based recovery | [链接](https://github.com/openclaw/openclaw/issues/70903) |

### P1 级问题（重点）

| Issue | 描述 | Fix PR | 链接 |
|---|---|---|---|
| #116201 | Realtime voice 无界状态保留 | 无 | [链接](https://github.com/openclaw/openclaw/issues/116201) |
| #44925 | Subagent 完成静默丢失 | 无 | [链接](https://github.com/openclaw/openclaw/issues/44925) |
| #118846 | Gateway 主线程启动饱和（plugin-metadata snapshot） | 无 | [链接](https://github.com/openclaw/openclaw/issues/118846) |
| #86519 | Telegram 重复回复回归（5.20 引入，5.22 缓解） | 无 | [链接](https://github.com/openclaw/openclaw/issues/86519) |
| #113306 | SQLite snapshot restore 缺 crash/identity 保证 | 无 | [链接](https://github.com/openclaw/openclaw/issues/113306) |
| #112423 | 大 transcript cleanup 阻塞 gateway 事件循环 | 无 | [链接](https://github.com/openclaw/openclaw/issues/112423) |
| #85251 | Codex app-server turn 发出后静默挂起 | 无 | [链接](https://github.com/openclaw/openclaw/issues/85251) |
| #106231 | Loop detection 阻断工具但不终止 session | 无 | [链接](https://github.com/openclaw/openclaw/issues/106231) |
| #109490 | 客户端委托 tool 结果后 turn 中断，承诺工作未执行 | 无 | [链接](https://github.com/openclaw/openclaw/issues/109490) |
| #96692 | Slack thread reply 生成成功但交付失败 | [#119737](https://github.com/openclaw/openclaw/pull/119737) | [链接](https://github.com/openclaw/openclaw/issues/96692) |
| #90098 | 大附件上传撑爆 browser/gateway 栈 | 无 | [链接](https://github.com/openclaw/openclaw/issues/90098) |
| #53540 | Embedded runner 在 tool 参数过大时报告"Network connection lost" | 无 | [链接](https://github.com/openclaw/openclaw/issues/53540) |
| #85844 | Auto-update 后 gateway 持有 stale hashed bundle imports | 无 | [链接](https://github.com/openclaw/openclaw/issues/85844) |
| #97616 | Hook/tool 子进程泄漏导致 zombie 累积 | 无 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| #107873 | Embedded prompt-lock session takeover 在 tool 失败后中止可见 WebChat turn | 无 | [链接](https://github.com/openclaw/openclaw/issues/107873) |
| #116022 | beta `/new` 复用 stable session ID，无法恢复已 tombstone 的 Codex binding | 无 | [链接](https://github.com/openclaw/openclaw/issues/116022) |
| #117358 | Post-turn compaction 忽略 compaction/reset 边界，延迟回复投递 | 无 | [链接](https://github.com/openclaw/openclaw/issues/117358) |
| #117609 | 瞬态 LLM/socket 错误在 embedded-assistant 阶段不重试 | 无 | [链接](https://github.com/openclaw/openclaw/issues/117609) |
| #106786 | gpt-5.6-* 在 ChatGPT-OAuth 路由静默 fallback | 无 | [链接](https://github.com/openclaw/openclaw/issues/106786) |
| #116691 | 火山引擎 openai-responses 长对话缺失 `input.status` 参数 | 无 | [链接](https://github.com/openclaw/openclaw/issues/116691) |

### 回归问题

- **#86519** — Telegram 重复回复（5.20 引入，5.22 缓解未根治）
- **#77306** — QQBot 消息重复发送（`message_sending` hook 在 WebChat 历史回放时触发）
- **#77930** — Discord channel 在 2026.5.4/beta.2/beta.3 未加载（beta.1 和 2026.4.29 正常）
- **#117358** — Post-turn compaction 行为回归

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 相关 PR | 纳入可能性 |
|---|---|---|---|
| #7707 | Memory Trust Tagging by Source（按来源打信任标签防御 poisoning） | 无 | 🟡 中长期，安全特性 |
| #13597 | AWS 全面部署指南（EC2/ECS/Lambda） | 无 | 🟢 文档类，低冲突 |
| #50205 | Gemini API 请求可配置 label（GCP 计费追踪） | 无 | 🟢 商业用户刚需 |
| #50798 | ACP thread-bound session 的可见 agent-to-agent 消息（proxy-only，不创建 main session） | 无 | 🟡 架构敏感 |
| #44289 | 从 secret target registry 元数据生成 secretref 参考文档 | 无 | 🟢 文档自动化 |
| #53654 | Discord messageUpdate/messageDelete 事件支持（编辑重处理/删除取消） | 无 | 🟡 渠道功能扩展 |
| #115642 | Billing cooldown 探活恢复 + 短 TTL + 手动重置命令 | 无 | 🟢 紧急用户体验修复 |

**路线图信号：**
- Signal 渠道 QR 设置流程有 5 个串联 PR 正在推进（[#119341](https://github.com/openclaw/openclaw/pull/119341) → [#119342](https://github.com/openclaw/openclaw/pull/119342) → [#119343](https://github.com/openclaw/openclaw/pull/119343) → [#114173](https://github.com/openclaw/openclaw/pull/114173) → [#118169](https://github.com/openclaw/openclaw/pull/118169)），预计即将合入，Signa l 渠道首次支持完整 QR 流程。
- `readiness` 条件与 providers（[#104018](https://github.com/openclaw/openclaw/pull/104018)）涉及 Plugin SDK V1 设计决策，维护者正在征集决策。

---

## 7. 用户反馈摘要

**核心痛点：**

1. **消息丢失/重复**（最高频抱怨）
   - Telegram 重复回复（#86519，#77306 QQBot）
   - Slack thread reply 生成但交付失败（#96692）
   - Discord 后续消息在 inline error 后被截断（#96007）
   - Telegram forum topic 成为永久 inbound black hole（#91564）

2. **Session 可靠性**
   - Subagent 结果静默丢失，无重试无通知（#44925）
   - 长 turn 因瞬态错误直接死亡，不重试（#117609）


---

## 横向生态对比



# AI 智能体开源生态横向分析报告
**数据周期：2026-08-06 | 覆盖项目：10个**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正经历从"功能跑通"向"生产级可用性"的关键跃迁。OpenClaw 与 ZeroClaw 以日均百级 Issue/PR 的极高活跃度主导技术讨论，IronClaw 已进入 rc 候选发布阶段，LobsterAI 完成企业版架构重构。共性痛点高度集中：消息投递可靠性（OpenClaw/CoPaw/NanoBot）、MCP 工具链稳定性（CoPaw/NanoBot/ZeroClaw）、容器化部署兼容性（NanoClaw/PicoClaw）以及长会话上下文管理（OpenClaw/CoPaw）。安全架构（认证可插拔、SSRF 防护、凭证隔离）成为 v0.9/v1.1 版本的核心里程碑。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 合并率 | 健康度 |
|------|-------------|-----------|---------|--------|--------|
| **OpenClaw** | 500 (437活跃/63关闭) | 500 (427待审/73合并) | — | 14.6% | 🟡 高负载，P0 积压 |
| **Hermes Agent** | 50 (全开放) | 50 (全开放) | — | 0% | 🟡 重构期，PR 未落地 |
| **ZeroClaw** | 50 (39活跃/11关闭) | 50 (49待审/1合并) | — | 2% | 🟡 v0.8.5 冲刺，维护者瓶颈 |
| **CoPaw** | 25 (19活跃/6关闭) | 50 (29待审/21合并) | — | 42% | 🟢 稳定迭代，响应及时 |
| **IronClaw** | 43 | 50 | v1.1.0-rc.1 | — | 🟢 候选发布，工程成熟 |
| **LobsterAI** | 3 | 13 (12合并/1开放) | 2026.8.5 | 92% | 🟢 高交付，企业版就绪 |
| **NanoBot** | 4 | 16 (8合并/8开放) | — | 50% | 🟢 架构收敛中 |
| **NanoClaw** | 2 | 12 (2合并/10开放) | — | 17% | 🟡 稳定性修复期 |
| **PicoClaw** | 0 | 4 (1合并/3开放) | — | 25% | 🟡 低频维护 |
| **NullClaw** | 0 | 2 (0合并/2开放) | — | 0% | 🔴 低活跃，修复待审 |

---

## 3. OpenClaw 在生态中的定位

**规模优势**：Issue/PR 量级（各 500）是第二梯队（Hermes/ZeroClaw 各 50）的 **10 倍**，社区体量和缺陷暴露能力遥遥领先。

**技术路线差异**：
| 维度 | OpenClaw | 竞品差异 |
|------|----------|----------|
| 多通道架构 | Slack/Discord/Telegram/Zalo/Signal/WebChat 全栈支持 | Hermes 聚焦 Telegram，CoPaw 强于微信/Matrix |
| 协议兼容 | 深度适配 OpenAI Chat Completions + Codex binding | ZeroClaw 推进 Chat Completions profile RFC |
| 运行时 | Gateway 单进程 + embedded runner | IronClaw 强调沙箱隔离，LobsterAI 桌面端架构 |
| 商业化 | managed media、billing cooldown 体系成熟 | 企业版能力由 IronClaw/LobsterAI 覆盖 |

**社区规模对比**：OpenClaw 以评论数 #116201（59 评论）、#7707（27 评论）反映的参与度，显著高于其他项目单 Issue 通常 <20 评论的讨论密度，是生态事实上的 **参考实现与问题集散地**。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **消息投递可靠性** | OpenClaw、CoPaw、NanoBot | Telegram 重复回复（#86519）、Slack thread 交付失败（#96692）、MCP 错误信封被吞（#5237）、微信 token 提前消耗（#6696） |
| **MCP 工具链稳定性** | CoPaw、NanoBot、ZeroClaw | MCP 工具规律性失效（#6732）、tool-schema 克隆导致 OOM（#8642）、SSRF 防护（#8826） |
| **长会话上下文管理** | OpenClaw、CoPaw、ZeroClaw | 20-30 轮 tool_call 后 400 错误（#6726）、post-turn compaction 行为回归（#117358）、prompt-cache 缺失（#9631） |
| **容器化/多租户隔离** | NanoClaw、IronClaw、PicoClaw | Signal 附件容器内不可达（#2528）、LXC docker socket 权限（#2006）、Docker/Railway 沙箱 Profile（#7214） |
| **安全架构** | ZeroClaw、Hermes、NanoBot | VI 凭证链验证缺失（#9328）、ANSI-C quoting 绕过（#76219）、凭证 URL 泄露（#5258） |
| **可观测性/诊断** | OpenClaw、ZeroClaw、CoPaw | billing cooldown 探活恢复（#115642）、Doctor 日志路径展示（#8928）、Agent 幻觉状态误报（IronClaw #7247） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | 全渠道消息网关 + 多 agent 编排 | 自建部署的技术团队 | Gateway 单进程 + embedded runner + session state 管理 |
| **IronClaw** | 企业级托管 + Config-as-Code + 跨渠道投递 | 中大型组织 | DB 驱动技能树 + 声明式配置 + 租户级工作空间隔离 |
| **LobsterAI** | 桌面端体验 + 网易云信生态集成 + 企业 SSO | 国内企业用户 | Electron 桌面壳 + 原生签到/企业账号隔离 |
| **Hermes Agent** | Telegram Bot 框架 + TUI 终端交互 | Telegram 生态开发者 | God-file 分解重构 + Telegram Bot API 10.2 全量对齐 |
| **CoPaw** | 微信生态 + 多模型 Fallback + Artifact 画布 | 国内微信用户 | LLM fallback 链 + thinking-mode 兼容 + 按需加载技能 |
| **ZeroClaw** | 安全优先 + RFC 驱动架构 + 协议兼容 | 安全敏感型用户 | Verifiable Intent + 可插拔认证 + Chat Completions profile |
| **NanoBot** | WebUI 体验 + MCP 生态 + 会话隔离 | 个人开发者 | 请求级→构建期权限模型简化 + RRF 元搜索聚合 |
| **NanoClaw** | Agent-to-Agent 通信 + 技能系统 | 多 agent 协作场景 | single-writer 数据库原则 + command-gate 规范化 |
| **PicoClaw** | 轻量级部署 + Anthropic OAuth | 个人轻量用户 | OAuth token 登录 + 模型 fallback 链配置 |
| **NullClaw** | 运行时稳定性（栈/线程） | 生产环境运维者 | 16MiB 栈提升 + 通道轮询线程自动回收 |

---

## 6. 社区热度与成熟度分层

```
🟢 成熟交付期      LobsterAI (92% PR合并率, 企业版就绪)
                   IronClaw (rc.1 发布, CI/消息契约收敛)

🟡 快速迭代期      OpenClaw (规模第一, 但 P0 积压, 14.6% 合并率)
                   ZeroClaw (RFC 密集, 维护者决策瓶颈)
                   Hermes Agent (高活跃但 0% 合并率, 重构沉淀期)
                   CoPaw (42% 合并率, 稳定性修复密集)

🟠 架构收敛期      NanoBot (WebUI/MCP 方向明确, 50% 合并率)
                   NanoClaw (单写规范化, 稳定性修复为主)

🔴 低频维护期      PicoClaw (基础设施优化, 低频)
                   NullClaw (两条修复 PR 待审, 无新功能)
```

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **Chat Completions 协议标准化** | ZeroClaw #8603 RFC、OpenClaw Codex binding | 协议层兼容将成为生态接入的关键门槛，建议优先支持 |
| **MCP 工具链从"能用"到"可靠"** | CoPaw #6732、NanoBot #5237、ZeroClaw #8642 | 生产环境需关注 MCP 超时、错误信封处理、内存泄漏三重保障 |
| **Prompt Cache 成本优化需求爆发** | ZeroClaw #9631、OpenClaw #70903 | OpenRouter/Anthropic session_id 透传是降低 Token 成本的明确方向 |
| **容器化部署权限适配仍是痛点** | NanoClaw #2006、#2528、IronClaw #7214 | LXC/Docker socket/附件挂载的自动化适配需更完善的 recovery path |
| **安全架构从"功能级"下沉到"执行级"** | ZeroClaw #9737 工具策略强制执行、#9678 shell policy 规范化 | 安全策略需从声明层（config）下沉到执行层（pipeline/gateway），避免绕过 |
| **长会话上下文管理成为瓶颈** | OpenClaw #117358 compaction 回归、CoPaw #6726 400 错误 | post-turn compaction 边界语义、tool_call 历史管理需更健壮的实现 |
| **生态从"单 agent"向"多 agent 编排"演进** | OpenClaw #44925 subagent 静默丢失、NanoClaw #3187 agent-to-agent | 子 agent 结果重试/通知机制、静默失败可观测性是生产级多 agent 的前提 |
| **微信/Telegram 渠道差异化竞争** | CoPaw 微信 context_token 问题、Hermes Telegram API 10.2 对齐 | 渠道深度适配（审批流、typing indicator、支付）是区域市场的核心竞争力 |

---

**总结**：生态正从功能竞赛转向可靠性竞赛。OpenClaw 以规模定义问题边界，IronClaw/LobsterAI 以工程成熟度定义交付标准，ZeroClaw 以安全架构定义长期方向。开发者选型时建议：生产部署优先考虑 IronClaw（企业能力）或 OpenClaw（生态广度），个人轻量场景关注 CoPaw（微信生态）或 NanoBot（MCP 集成），安全敏感场景关注 ZeroClaw（认证/策略架构）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 | 2026-08-06

## 1. 今日速览
过去24小时 NanoBot 保持高活跃状态，共新增 4 个 Issues 与 16 个 PR（8 个合并/关闭，8 个仍为开放）。项目重心明显向 **WebUI 体验打磨、会话隔离机制、MCP 生态对接与安全加固** 倾斜。整体健康度良好：修复与特性并行推进，架构层面同步进行权限模型简化，社区反馈响应速度较快，但仍需关注 MCP 错误处理与目标循环等稳定性痛点。

## 2. 版本发布
今日无新版本发布（Releases: 0）。当前仍处于功能迭代与底层重构阶段，建议关注合并后的 PR 打包节奏。

## 3. 项目进展
今日共合并/关闭 8 个 PR，主要推进方向如下：
- **搜索能力扩展**：[#5234](https://github.com/HKUDS/nanobot/pull/5234) 接入 `mst-python` 作为元搜索 Provider，通过 RRF 算法聚合多引擎结果，提升检索覆盖率。
- **会话与权限架构简化**：[#5238](https://github.com/HKUDS/nanobot/pull/5238) 移除请求级 `Tool.available()` 层，统一为构建期 `Tool.enabled()`，降低 Session 访问控制的复杂度。
- **WebUI 视觉与交互重构**：[#5249](https://github.com/HKUDS/nanobot/pull/5249)、[#5250](https://github.com/HKUDS/nanobot/pull/5250)、[#5184](https://github.com/HKUDS/nanobot/pull/5184) 完成菜单/弹窗层级扁平化、活动流边缘羽化修复，并正式引入 Quick Chat 与 Temporary Chat 入口。
- **渠道稳定性**：[#5203](https://github.com/HKUDS/nanobot/pull/5203) 修复 WhatsApp 媒体发送逻辑，改由文件内容识别替代扩展名判断；[#5233](https://github.com/HKUDS/nanobot/pull/5233) 为 Mattermost 渠道新增线程/主频道独立提及策略。
- **Provider 原生开关**：[#5254](https://github.com/HKUDS/nanobot/pull/5254) 开放 OpenAI Codex/DeepSeek/xAI 的底层请求字段透传开关。

项目整体在 WebUI 成熟度、渠道鲁棒性与架构收敛三个维度同步向前推进。

## 4. 社区热点
- **[#5149](https://github.com/HKUDS/nanobot/issues/5149)** [WhatsApp 音频发送失败] — 4 条评论，自 7/28 持续跟踪。用户反馈 bot 可接收但无法发送音频，底层 `ffmpeg` 报错。已由 [#5203](https://github.com/HKUDS/nanobot/pull/5203) 修复并关闭。
- **[#5237](https://github.com/HKUDS/nanobot/issues/5237)** [MCP 工具返回业务错误信封时被吞没] — 2 条评论。`isError=False` 但内容为 `404/data not found` 时，Agent 误判为成功，导致循环等待至 `tool_timeout`。目前**尚无关联 Fix PR**，属 MCP 集成链路的关键断点。
- **[#5256](https://github.com/HKUDS/nanobot/issues/5256)** [/goal 消息触发重复回复循环] — 0 条评论，今日新开。Agent 等待用户输入时不断注入同类回复，消耗 token 且破坏体验。已由 [#5257](https://github.com/HKUDS/nanobot/pull/5257) 提出有界化修复方案，PR 仍待合并。
- **[#5251](https://github.com/HKUDS/nanobot/issues/5251)** [WebUI 增加 MCP Apps Host 支持] — 0 条评论，功能诉求。官方 MCP 客户端目前仅将结果视为文本/图片 artifact，未利用 `io.modelcontextprotocol/ui` 扩展渲染服务端 UI。
- **进行中高关注度 PR**：[#5258](https://github.com/HKUDS/nanobot/pull/5258)（凭证 URL 安全隔离）、[#5253](https://github.com/HKUDS/nanobot/pull/5253)（WebUI 共享交互式终端）、[#5252/#5259](https://github.com/HKUDS/nanobot/pull/5252)（临时会话内存隔离）正处于 Review 阶段。

## 5. Bug 与稳定性
按严重程度排序：
| 严重度 | 问题/修复 | 状态 |
|---|---|---|
| 🔴 P1 | [#5237](https://github.com/HKUDS/nanobot/issues/5237) MCP 业务错误信封被忽略，Agent 陷入无效等待 | 无 Fix PR |
| 🔴 P1 | [#5258](https://github.com/HKUDS/nanobot/pull/5258) 含凭证 URL 被转发至远程 Jina Reader，存在信息泄露风险 | PR 开放待合并 |
| 🟠 P2 | [#5256](https://github.com/HKUDS/nanobot/issues/5256) `/goal` 循环注入重复响应，资源浪费 | [#5257](https://github.com/HKUDS/nanobot/pull/5257) 待合并 |
| 🟡 P2 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp 音频发送失败 | 已合并 [#5203](https://github.com/HKUDS/nanobot/pull/5203) |
| 🟡 P2 | [#5248](https://github.com/HKUDS/nanobot/pull/5248) Matrix/Continuwity 房间加入

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报
**日期：2026-08-06 | 数据周期：过去24小时**

---

## 1. 今日速览

Hermes Agent 项目今日保持极高活跃度，过去24小时内共产生 **50 条新 Issue 和 50 条 PR**，全部处于开放状态，无合并或关闭记录。项目核心工作聚焦于两大方向：**Telegram Bot API 10.2 功能对齐**（约 20 个相关 Issue 组成 Campaign）和 **god-file 分解重构**（Epic #78647 推进中）。安全修复和稳定性改进同步进行，包括 ANSI-C quoting 绕过漏洞修复和 WAL 锁超时问题。当前无版本发布，项目处于功能扩展与架构优化的活跃周期。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日所有 PR 均处于待合并状态（0 条已合并），主要推进方向：

### 架构重构（God-file 分解）
- **#79661** / **#79670** — `hermes_cli/main.py` 和 `tui_gateway/server.py` 的 workspace/worker mixins 提取（Shard S4）
- **#79708** — `cli.py` 状态栏/skill-command mixins 提取（Shard S2）
- **#79127** — `web_server.py` 自定义端点路由提取（R3-C1）

### 安全与稳定性修复
- **#76219** — 修复 bash ANSI-C quoting (`$'...'`) 绕过终端审批硬线的问题，防止磁盘清空风险
- **#79404** — 修复 `lifecycle_guard` 中 `os.open` 未捕获 `ValueError: embedded null byte` 导致终端命令崩溃
- **#79813** — 为 `TERMINAL_CWD` 锁添加超时绑定，防止工作目录任务阻塞并发执行
- **#79809** — 升级 Electron 至 41.10.3，修复依赖安全漏洞

### 功能改进
- **#79656** — Webhook 路由支持从环境变量解析 `${VAR}` 密钥，增强配置安全性
- **#79581** — 修复本地 TTS 提供者（Piper/KittenTTS）忽略配置语音的问题
- **#79808** — Cron 任务新增 `required_skills` 强制依赖机制

🔗 相关链接：
- [#79656](https://github.com/NousResearch/hermes-agent/pull/79656)
- [#76219](https://github.com/NousResearch/hermes-agent/pull/76219)
- [#79404](https://github.com/NousResearch/hermes-agent/pull/79404)
- [#79813](https://github.com/NousResearch/hermes-agent/pull/79813)

---

## 4. 社区热点

### 🔥 最活跃 Issue TOP 3

| Issue | 类型 | 评论数 | 核心议题 |
|-------|------|--------|----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Epic/Refactor | 14 | 全仓库 20 个 god-file 分解 |
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | Bug/P2 | 12 | `lifecycle_guard` 因 NUL 字节崩溃 |
| [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) | Refactor/P3 | 11 | 提取 Gateway 平台路由逻辑 |

### 📡 Telegram 功能对齐 Campaign
**[#78791](https://github.com/NousResearch/hermes-agent/issues/78791)** 作为元 Issue 统领约 20 个子 Issue，系统性地补齐 Telegram Bot API 10.2 支持，涵盖：
- 回复/内联键盘 (#78780, #78781)
- 指令管理 (#78782)
- Bot 身份配置 (#78783)
- 支付与 Stars (#78775, #78776)
- 商业账户管理 (#78786)
- 托管 Bot API (#78785)
- WebApp/Game/Passport 等高级功能

**诉求分析**：用户迫切需要 Hermes 作为 Telegram Bot 框架的完整能力，当前仅支持基础功能，高级 API（支付、商业账户、WebApp）完全缺失，制约了企业级和商业化场景。

---

## 5. Bug 与稳定性

| 严重级别 | Issue | 描述 | Fix PR |
|---------|-------|------|--------|
| **P2** | [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | `lifecycle_guard` 因 `ValueError: embedded null byte` 崩溃，影响所有终端命令 | [#79404](https://github.com/NousResearch/hermes-agent/pull/79404) ✅ |
| **P2** | [#79459](https://github.com/NousResearch/hermes-agent/issues/79459) | 本地 TTS（Piper/KittenTTS）忽略配置的语音 | [#79581](https://github.com/NousResearch/hermes-agent/pull/79581) ✅ |
| **P2** | [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | 委托子上下文在共享终端快照中持久化 | 待处理 |
| **P2** | [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) | 低成本模型费用显示为 `$0.00`（显示 Bug） | 待处理 |
| **P3** | [#78788](https://github.com/NousResearch/hermes-agent/issues/78788) | Telegram 未知回调查询未响应，客户端旋转永不终止 | 待处理 |

**安全相关**：
- [#76219](https://github.com/NousResearch/hermes-agent/pull/76219) — ANSI-C quoting 绕过审批硬线（高危）
- [#79809](https://github.com/NousResearch/hermes-agent/pull/79809) — Electron/TUI 依赖漏洞修复

---

## 6. 功能请求与路线图信号

### 高优先级需求（已有 PR 或明确 Epic）

| 需求 | Issue | PR 状态 | 纳入下一版本可能性 |
|------|-------|---------|------------------|
| Telegram Bot API 10.2 完整对齐 | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | 20+ 子 Issue 已创建 | ⭐⭐⭐⭐⭐ 正在进行中 |
| God-file 分解重构 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 多个 Shard PR 在审 | ⭐⭐⭐⭐⭐ 核心目标 |
| Cron 任务技能依赖强制 | [#79808](https://github.com/NousResearch/hermes-agent/pull/79808) | PR 待合并 | ⭐⭐⭐⭐ 已Ready |
| 内置 Memory 生命周期管理 | [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | 无 PR | ⭐⭐⭐ 待启动 |

### 中等优先级
- Webhook 环境变量密钥解析 (#79656) — 安全改进，即将合并
- 委托子上下文隔离 (#71941) — 架构问题，需决策

---

## 7. 用户反馈摘要

### 痛点
1. **Telegram 功能严重缺失**：大量 Issue 指向 Bot API 10.2 未实现的功能，用户期望 Hermes 作为完整的 Telegram Bot 框架，当前仅基础功能可用。
2. **终端命令稳定性**：`lifecycle_guard` 崩溃 (#77780) 和委托上下文污染 (#71941) 影响生产环境可靠性。
3. **TTS 配置失效**：语音设置被静默忽略，用户无法控制合成音色。
4. **成本显示误导**：低成本模型显示 `$0.00` 造成使用困惑 (#79220)。

### 满意点
- **重构进展透明**：God-file 分解采用 5×2×3 方法论，PR 描述清晰标注行数和验证状态。
- **安全响应迅速**：ANSI-C quoting 漏洞 (#76219) 和 NUL 字节崩溃 (#79404) 均有对应 Fix PR。
- **Windows 兼容性改进**：#79810 修复 Windows 路径和时区测试问题。

---

## 8. 待处理积压

### 长期未响应 Issue
| Issue | 创建日期 | 天数 | 类型 | 建议 |
|-------|---------|------|------|------|
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | 2026-07-26 | 11 | Bug/P2 | 委托上下文隔离问题，需架构决策 |
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | 2026-08-04 | 2 | Feature/P3 | Memory 生命周期管理，建议启动 |
| [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) | 2026-08-05 | 1 | Bug/P2 | 费用显示 Bug，快速修复 |

### 积压 PR（待合并）
- **#79154** — WhatsApp bridge 端口清理安全检查
- **#79811** — 模型切换时 provider 持久化修复
- **#79812** — Teams SDK 懒加载修复
- **#75352** — WAL reader 安全回收（长期 PR，7月31日创建）

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 50 Issue + 50 PR/24h，极高 |
| 响应速度 | ⭐⭐⭐⭐ | 关键 Bug 均有对应 Fix PR |
| 代码质量 | ⭐⭐⭐⭐ | 重构方法论清晰，测试覆盖 |
| 安全态势 | ⭐⭐⭐⭐ | 快速响应安全漏洞 |
| 功能完整性 | ⭐⭐⭐ | Telegram 等平台功能待补齐 |

**总体评价**：Hermes Agent 项目处于活跃发展期，架构重构和功能扩展同步推进。Telegram 功能对齐和 god-file 分解是当前双主线，建议关注 PR 合并节奏和 P2 Bug 修复进展。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 — 2026-08-06

---

## 1. 今日速览

PicoClaw 项目昨日活跃度中等，过去24小时内共收到 **4 条 PR 更新**，其中 **1 条已合并**，**3 条处于待合并状态**。Issues 方面无新增或更新，社区关注点集中在功能增强与基础设施优化上。项目整体进展平稳，未出现紧急 Bug 或严重回归问题，维护者对关键贡献的处理响应积极。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### ✅ 已合并 / 已关闭

**PR #926 — 支持 Anthropic OAuth Setup Token 登录**
- 作者：`BallerIsLeet`
- 链接：[sipeed/picoclaw#926](https://github.com/sipeed/picoclaw/pull/926)
- 内容：新增 `--setup-token` 参数及交互式登录菜单，支持 `sk-ant-oat01-*` 格式的 Anthropic OAuth token，替代传统的 API Key 认证方式。同时集成 Anthropic usage 接口，在 `auth status` 中展示 5 小时与 7 天用量信息，并补充 OAuth token 的流式支持。
- 意义：扩展了用户认证路径，提升 OAuth 场景下的用户体验，减少 API Key 管理的繁琐性。

> 昨日合并的 PR 数量有限，但均属于增强型功能，对项目核心稳定性影响可控。

---

## 4. 社区热点

| 优先级 | PR | 状态 | 主题 | 作者 | 链接 |
|--------|-----|------|------|------|------|
| 🔴 高 | #3318 | 待合并 | 修复 pnpm-lock.yaml 重复键导致安装失败 | nuestraai | [PR #3318](https://github.com/sipeed/picoclaw/pull/3318) |
| 🟡 中 | #3200 | 待合并 | 新增可配置的默认模型 fallback 链 | lc6464 | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |
| 🟡 中 | #1951 | 待合并 | 将安装脚本从 docs 仓库迁移至主仓库 | lc6464 | [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) |

**热点分析：**
- **#3318** 修复了前端构建依赖链断裂问题，属于基础设施修复，若合并将降低新用户的安装门槛。
- **#3200** 回应用户对模型切换灵活性的诉求，允许配置 fallback 链是 AI 助手类产品的高频需求，合并后有望获得积极反馈。
- **#1951** 将安装脚本集中管理，有助于文档仓库与代码仓库的同步维护，降低长期维护成本。

---

## 5. Bug 与稳定性

今日无新增 Bug Issue 报告。

| 问题描述 | 关联 PR | 状态 | 严重级别 |
|----------|---------|------|----------|
| `pnpm-lock.yaml` 包含重复映射键，导致 pnpm 安装失败 | #3318 | 待合并 | 🔴 高（影响构建） |

> **注意：** 该问题属于回归性质的构建失败，若未合并将阻塞依赖前端的新用户安装流程。

---

## 6. 功能请求与路线图信号

| 请求方向 | 关联 PR | 状态 | 评估 |
|----------|---------|------|------|
| 支持 Anthropic OAuth 登录 | #926 | ✅ 已合并 | 已纳入当前版本 |
| 模型 fallback 链配置化 | #3200 | 待合并 | 可能纳入下一版本 |
| 安装脚本统一维护 | #1951 | 待合并 | 属于基础设施优化，优先级中等 |

**预测：** 模型 fallback 链（#3200）与 OAuth 增强（#926）共同反映出用户对**灵活认证与模型容灾**的关注，预计这些方向将在未来版本中持续迭代。

---

## 7. 用户反馈摘要

- **认证方式多样化需求**：#926 的合并表明社区对 OAuth 登录有明确诉求，传统 API Key 管理方式已无法满足部分用户场景。
- **前端构建稳定性诉求**：#3318 暴露了 lockfile 不一致问题，反映出用户对项目构建可靠性的敏感。
- **模型管理灵活性诉求**：#3200 的提交者反复更新（最近一次为 2026-08-05），说明该功能在用户中有一定关注度和使用场景。

---

## 8. 待处理积压

| PR / Issue | 创建时间 | 最后更新 | 状态 | 说明 | 链接 |
|------------|----------|----------|------|------|------|
| #3318 | 2026-08-05 | 2026-08-05 | 待合并 | 构建修复，建议尽快审核合并 | [PR #3318](https://github.com/sipeed/picoclaw/pull/3318) |
| #3200 | 2026-07-01 | 2026-08-05 | 待合并 | 模型 fallback 链功能，已活跃更新 | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |
| #1951 | 2026-03-24 | 2026-08-05 | 待合并 | 安装脚本迁移，长期未合并 | [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) |

> **维护者建议：** #1951 自创建至今已开放超过 4 个月，建议优先评估合并可行性，或关闭并明确迁移路径，避免长期积压影响社区贡献积极性。

---

**综合评估：** 项目当前处于功能增强阶段，核心稳定性良好，基础设施类修复（#3318）和用户体验优化（#3200、#1951）正在推进中。建议维护者关注积压 PR 的处理节奏，以维持社区贡献的可持续性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-08-06

## 1. 今日速览

NanoClaw 在过去24小时内保持活跃，共更新 14 条话题（2 Issues + 12 PRs），其中 2 条 PR 已合并/关闭，10 条仍待审查。项目无新版本发布，但修复类 PR 占比较高，反映出维护者正聚焦于稳定性与架构健壮性。整体项目健康度良好，社区贡献活跃，尤其在技能系统（Skills）和容器通信机制方面有明确推进。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**已合并/关闭的 PR：**

- **PR #3175** → 已被 PR #3192 替代（作者同为 Joi），修复了 `writeOutboundDirect()` 将 command-gate 拒绝通知直接写入 `outbound.db` 的问题，避免多 writer 导致的数据库损坏风险。
- **PR #3187** 已关闭（作者 dim0627）：禁用了内置 `SendMessage`，确保 agent-to-agent 消息传递正常工作。

**关键推进方向：**
- 数据库写入规范化（single-writer 原则落地）
- Agent 间通信机制修复
- WhatsApp 会话超时保护（PR #3191）
- Docker 容器环境隔离改进（MCP 环境变量转发，PR #3188）

---

## 4. 社区热点

| 类型 | 编号 | 标题 | 链接 |
|------|------|------|------|
| Issue | #2528 | Signal 图片/PDF 附件在容器内不可达 | [链接](https://github.com/qwibitai/nanoclaw/issues/2528) |
| Issue | #2006 | Debian 12 LXC 安装后 docker socket 权限被拒绝 | [链接](https://github.com/qwibitai/nanoclaw/issues/2006) |
| PR | #3192 | 修复 command-gate 拒绝通知写入路径 | [链接](https://github.com/qwibitai/nanoclaw/pull/3192) |
| PR | #3191 | WhatsApp 会话超时保护 | [链接](https://github.com/qwibitai/nanoclaw/pull/3186) |

**热点分析：**
- **#2528** 反映 Signal 通道在容器化部署下的附件传输是用户高频痛点，涉及多容器通信链路的边界处理。
- **#2006** 暴露了自动安装脚本在 LXC 环境下的权限适配缺陷，recovery path 未能触发，影响开箱体验。
- **PR #3192** 和 **#3191** 均是针对现有架构隐患的修复，说明社区正在系统化解决稳定性问题。

---

## 5. Bug 与稳定性

| 优先级 | 类型 | 描述 | 状态 | Fix PR |
|--------|------|------|------|--------|
| 高 | Bug | Signal 附件在容器内不可读（#2528） | 未修复 | 无 |
| 高 | Bug | Debian LXC 下 docker socket 权限失败（#2006） | 未修复 | 无 |
| 中 | Bug | WhatsApp 未登录会话导致主机启动挂起（PR #3191） | 已提交修复 | #3191 |
| 中 | Bug | command-gate 拒绝写入导致 DB 损坏风险（PR #3175/#3192） | 已修复/替代 | #3192 |
| 低 | Bug | 未知斜杠命令被 Agent SDK 静默丢弃（PR #2346） | 已提交修复 | #2346 |

---

## 6. 功能请求与路线图信号

| 提案 | 作者 | 类型 | 状态 | 纳入下一版本可能性 |
|------|------|------|------|------------------|
| 添加 Tavily MCP 工具技能（PR #3190） | manisrinivasan2k1 | Feature Skill | 待合并 | ⭐⭐⭐⭐ 高 |
| 添加 `add-why` 技能，解释单条消息的处理逻辑（PR #3189） | teran13 | Utility Skill | 待合并 | ⭐⭐⭐ 中 |
| 将 Dial 加入通道选择器 + 向导（PR #3050） | OmriBenShoham | Feature Skill | 待合并 | ⭐⭐⭐ 中 |
| 移除过时的 qodo 和 Google MCP 技能（PR #3172） | glifocat | Refactor | 待合并 | ⭐⭐⭐⭐ 高 |
| 为 skill-owned capabilities 添加 host seams（PR #3186） | zvi-fried | Refactor | 待合并 | ⭐⭐⭐ 中 |

**路线图信号：**
- **技能生态扩张**：Tavily、add-why 等新技能表明项目正向工具链丰富化发展。
- **架构解耦**：PR #3186 和 #3172 显示维护者正在清理旧技能、抽象 host 接口，为未来 skill 系统扩展铺路。
- **用户体验优化**：WhatsApp 超时保护、未知命令处理修复，反映出对部署稳定性和交互体验的重视。

---

## 7. 用户反馈摘要

**痛点：**
1. **容器化附件传输**（#2528）：用户在 Signal 上发送图片/PDF 后，agent 容器无法读取，说明当前通道→容器文件同步链路存在缺陷。
2. **LXC 环境安装失败**（#2006）：Proxmox LXC 环境下 docker group 配置后权限仍未生效，recovery 机制未触发，用户安装体验受挫。
3. **WhatsApp 会话挂起**（PR #3191）：退出登录的 WhatsApp 会话会无限等待 QR 扫码事件，阻塞主机启动。

**满意点：**
- PR #3187 修复 agent-to-agent 消息传递，回应了多 agent 协作场景需求。
- 未知斜杠命令不再被静默丢弃（PR #2346），错误可见性提升。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建日期 | 最后活跃 | 评论数 | 建议 |
|------|------|------|----------|----------|--------|------|
| #2528 | Bug | Signal 附件不可达 | 2026-05-18 | 2026-08-05 | 1 | 需优先修复，影响核心通道体验 |
| #2006 | Bug | LXC 安装权限问题 | 2026-04-25 | 2026-08-05 | 1 | 需完善 LXC 环境适配和 recovery path |
| #2346 | PR | 未知斜杠命令处理 | 2026-05-08 | 2026-08-05 | 0 | 待审查，修复周期较长（>80天） |
| #3050 | PR | 添加 Dial 通道 | 2026-07-14 | 2026-08-05 | 0 | 待审查，功能有价值但积压 |

**维护者提醒：**
- Issue #2528 和 #2006 均涉及安装/部署核心流程，建议优先响应。
- PR #2346 已开放超过 80 天，建议尽快审查或关闭。
- 当前有 10 条待合并 PR，建议按优先级分批处理，避免审查积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报
**日期：2026-08-06**

---

## 1. 今日速览

NullClaw 今日无新 Issue 提交，整体社区活跃度处于**低水位**。两个活跃 PR 均由核心贡献者 `raskevichai` 提交，聚焦于**运行时栈溢出**与**通道轮询线程僵死**两个稳定性问题，均为修复类 PR，无新功能合并。项目处于"修复先行"的沉淀期，未见版本发布。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并，但有两条高价值的修复 PR 处于待审状态：

| PR | 类型 | 摘要 |
|----|------|------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | `fix(runtime)` | 将 agent turn 路径的栈大小从 2 MiB 提升至 16 MiB，修复深层递归导致的栈溢出崩溃 |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | `fix(channels)` | 修复 Telegram / Matrix 通道轮询线程死后无法自动回收的泄漏问题，解决"夜间静默后需重启 gateway"的已知痛点 |

**整体判断**：两条 PR 均指向影响核心可用性的稳定性缺陷，合并后将显著改善生产环境的运行可靠性，项目正从"功能迭代"阶段向"稳定性加固"阶段过渡。

---

## 4. 社区热点

今日无活跃 Issue 或 PR 讨论，社区热度较低。两条在审 PR 均暂无评论，可能处于初提审阶段。

---

## 5. Bug 与稳定性

| 问题 | 严重程度 | 关联 PR | 状态 |
|------|----------|---------|------|
| [TG/Matrix 通道夜间静默，需重启 gateway 恢复](https://github.com/nullclaw/nullclaw/issues/972) | 🔴 高（影响可用性） | [#984](https://github.com/nullclaw/nullclaw/pull/984) | PR 待合并 |
| [Agent turn 路径栈溢出（SESSION_TURN_STACK_SIZE = 2 MiB）](https://github.com/nullclaw/nullclaw/issues/976) | 🟠 中高（可能导致运行时崩溃） | [#985](https://github.com/nullclaw/nullclaw/pull/985) | PR 待合并 |

两条修复 PR 已定位根因并提单，暂无其他新 Bug 报告。

---

## 6. 功能请求与路线图信号

> 今日无新功能 Issue 或 PR 提交。

从当前两条修复 PR 的优先级来看，项目路线图重心已转向**稳定性与运行时健壮性**，而非功能扩展。建议关注后续是否出现与"agent turn 性能优化"相关的扩展需求（[#985](https://github.com/nullclaw/nullclaw/pull/985) 合并后可能引发更大栈需求的讨论）。

---

## 7. 用户反馈摘要

- **痛点 1**：Telegram / Matrix 通道经历夜间空闲后进入静默状态，`nullclaw agent` 主进程正常运行，但消息无法收发，唯一解法是重启 gateway（[#984](https://github.com/nullclaw/nullclaw/pull/984) → [#972](https://github.com/nullclaw/nullclaw/issues/972)）。
- **痛点 2**：Agent turn 路径在复杂场景下因 2 MiB 栈空间不足导致崩溃，用户期望更稳定的运行时行为（[#985](https://github.com/nullclaw/nullclaw/pull/985) → [#976](https://github.com/nullclaw/nullclaw/issues/976)）。

---

## 8. 待处理积压

| 类型 | 编号 | 摘要 | 建议 |
|------|------|------|------|
| PR | [#985](https://github.com/nullclaw/nullclaw/pull/985) | 栈大小修复 | 建议优先合入，影响生产稳定性 |
| PR | [#984](https://github.com/nullclaw/nullclaw/pull/984) | 通道轮询线程回收修复 | 建议优先合入，影响多通道场景可用性 |

> 两条 PR 均已闭合关联 Issue，作者为单一核心贡献者 `raskevichai`，建议维护者关注审阅进度，尽快合入以降低运行时崩溃风险。

---

**项目健康度评估**：🟡 中等 — 无新需求涌入，稳定性修复在推进，但无合并产出，待 PR 审查速度决定项目短期走向。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# 📊 IronClaw 项目日报 | 2026-08-06

## 1. 今日速览
过去24小时项目保持高活跃节奏，累计处理 Issues 43 条、PRs 50 条。整体健康度良好，开发重心聚焦于 **v1.1.0-rc.1 候选发布准备**、**跨渠道交付与 MCP 认证修复** 及 **CI/沙箱环境加固**。贡献者矩阵健康，新老开发者均有多个 PR 进入 review 或合并阶段。项目正从功能拓展向工程成熟度、可观测性与声明式运维演进。

## 2. 版本发布
**`ironclaw-v1.1.0-rc.1`** (2026-08-03)
- **核心更新**：扩展生态触达能力，支持注册任意托管 MCP 服务器、通过 IronHub 深度链接安装技能、支持跨渠道持久化文件附件，以及 Slack `/ironclaw` 斜杠命令；同时对失败可观测性进行了全面重构。
- **破坏性变更/迁移提示**：RC 阶段仍可能调整。`outbound` 交付状态机与 `durable delivery` 语义（关联 PR #7028/#7029）存在变更，建议存量租户在升级前验证 Delivery 队列与恢复逻辑；MCP 注册与 IronHub 安装流程若依赖旧版解析器，需同步更新环境变量与技能清单。

## 3. 项目进展
**今日合并/关闭的关键项**：
- `#7244` & `#7261`：修复 main 分支 CI 失败及 Release Canary 临时路径问题，发布流水线恢复稳定。
- `#6831`：标准化消息框架正式落地（16 项核心操作 + 12 类错误码），宿主级通信契约统一。
- `#4632` / `#7053` / `#7056`：WebUI 关键 E2E 覆盖完成（首次启动 LLM 引导、项目生命周期、自动化全生命周期）。
- `#7234`：清理误开 Issue。

**在途推进**：
- `#7214`：新增 Docker 与 Railway 显式用户沙箱 Profile，租户/用户级工作空间隔离加固。
- `#7027` / `#7034`：禁用环境代理自动发现，增强网络出站目标的权威性与可审计性。
- `#7171`：技能挂载改为 DB 驱动树结构，修复安装后技能不可见/不可用的回归。

**进度评估**：v1.1.0 候选版本基础设施已收敛，CI/沙箱/消息契约三大底座补强，交付链路稳定性显著提升。

## 4. 社区热点
| Issue/PR | 热度/评论 | 核心诉求 |
|---|---|---|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) Config-as-Code Epic | 7 评论 | 租户需声明式配置能力，摆脱手工编辑 `.env`/JSON/文档的碎片化管理 |
| [#7194](https://github.com/nearai/ironclaw/issues/7194) 共享频道作为出站目标 | 3 评论 | 运营侧要求将 admin 允许的共同频道纳入交付路由，补齐 Host 层路由盲区 |
| [#7209](https://github.com/nearai/ironclaw/issues/7209) CI 回归门控误判 | 2 评论 | 前端 PR 因断言风格无法被识别而阻塞合并，影响交付效率 |
| [#7204](https://github.com/nearai/ironclaw/issues/7204) WebUI Composer 聚焦 | 2 评论 | 线程切换后光标未自动聚焦，操作动线断裂 |

**分析**：社区痛点已从“功能有无”转向“运维声明化”与“交付路由可控性”。CI 门控误判成为近期合并摩擦点，需优先修复以恢复前端迭代流速。

## 5. Bug 与稳定性
**P1（高影响）**
- [#7247](https://github.com/nearai/ironclaw/issues/7247) Agent 误报 GitHub 已连接，实际未认证（无 Fix PR）
- [#7246](https://github.com/nearai/ironclaw/issues/7246) Agent 幻觉自动化状态，与页面实际显示矛盾（无 Fix PR）

**P2（中影响）**
- [#7249](https://github.com/nearai/ironclaw/issues/7249) Slack DM 执行结果错误投递至 Telegram（无 Fix PR）
- [#7251](https://github.com/nearai/ironclaw/issues/7251) MCP 认证类型由 Agent 猜测而非协商/发现（无 Fix PR）
- [#7250](https://github.com/nearai/ironclaw/issues/7250) DeepWiki MCP 网络错误时返回误导性认证提示（无 Fix PR）
- [#7248](https://github.com/nearai/ironclaw/issues/7248) 无效自定义 MCP 端点被接受并导致 Run 失败（无 Fix PR）
- [#6257](https://github.com/nearai/ironclaw/issues/6257) PDF 生成/发送时报 `attachments.mime_type` 无效（无 Fix PR）
- [#7254](https://github.com/nearai/ironclaw/issues/7254) 无法读取 Slack 反馈线程中附带的文件（无 Fix PR）

**分析**：今日集中暴露的 Bug 主要来自 **Bug Bash 测试轮次**，核心集中在 **跨渠道投递路由**、**MCP 认证协商** 与 **附件/文件解析** 三个模块。目前均无关联 Fix PR

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 | 2026-08-06

## 1. 今日速览
过去24小时 LobsterAI 保持高交付节奏，累计处理 13 条 PR（已合并/关闭 12 条，待合并 1 条）与 3 条 Issue，发布 `2026.8.5` 版本。开发重心从活动功能上线平稳过渡至底层稳定性加固与企业级能力完善，今日合并的窗口生命周期管理、网关锁修复及标题栏搜索显著提升了桌面端健壮性与导航效率。整体健康度良好，维护质量与功能迭代并行推进。

## 2. 版本发布
**LobsterAI 2026.8.5**（2026-08-05）
- **新增能力**：接入原生每日签到体验（`#2408`）；企业版重构认证与服务流，实现账号级作用域隔离（`#2409`）。
- **破坏性变更/迁移注意**：企业版 `account-scoped` 隔离改变了原有共享凭证的挂载方式，建议企业用户复核 SSO/OAuth 回调配置及多账号权限边界，确保现有企业策略不受影响。

## 3. 项目进展
今日合并的 PR 直接支撑了运行稳定性与用户体验的双向提升：
- `#2437` [CLOSED] - 为 OpenAI-compat 代理与 HTML 预览服务增加 drain 定时器与硬超时，解决 keep-alive 连接导致的进程退出卡死。
- `#2436` [CLOSED] - 修复 OpenClaw 网关重启竞态导致的单实例锁文件中毒，消除网关 30s 级阻塞恢复。
- `#2435` [CLOSED] - 新增标题栏会话搜索入口，复用侧边栏搜索工作流，缩短长会话定位路径。
- `#1279` / `#1280` / `#1281` [CLOSED] - 同步升级 `cross-env`、`react-dom` (18→19)、`vite` (5→8)，为后续构建性能与 React 19 特性奠定基础。
- 活动体验优化：`#2432` / `#2433` / `#2438` / `#2439` 集中处理了启动 credited 海报的展示逻辑、关闭图标与失败文案本地化。

**前进幅度**：项目已完成从“功能跑通”到“生产级稳定性”的关键跃迁，为后续企业版规模化落地扫清底层隐患。

## 4. 社区热点
- **#1200 / #1201** [Bug] NIM 超大群 `teamTypeNum` 硬编码错误导致群名解析失败  
  [Issue](https://github.com/netease-youdao/LobsterAI/issues/1200) | [PR](https://github.com/netease-youdao/LobsterAI/pull/1201)  
  *诉求分析*：该 Issue 自 4 月初创建至今被重新激活，修复代码已就绪（仅一行），但 Issue 仍标记 `stale`。反映出云信生态超大群场景下 @提及解析是高频刚需，用户期待尽快合入。
- **#2440 & #2441** [Bug] 桌面端系统提示词重复注入 / 技能开关匹配逻辑不一致  
  [Issue #2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | [Issue #2441](https://github.com/netease-youdao/LobsterAI/issues/2441)  
  *诉求分析*：均由 `fujingzhai` 于昨日提交，均附带精确复现路径与数据（如 `4,425 字符` 冗余、`frontmatter name` vs 目录名 mismatch）。虽暂无评论，但精准击中 Agent 

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

## 1. 今日速览

过去24小时 CoPaw 社区保持高活跃度：共 25 条 Issues（新开/活跃 19 条，关闭 6 条）和 50 条 PRs（待合并 29 条，已合并/关闭 21 条）。无新版本发布，但多个关键 bug 修复已合并入 main，包括能力缓存失效、Windows 测试覆盖、后台 subagent 状态报告等问题。社区反馈集中在 MCP 工具稳定性、超长会话 400 错误、以及微信渠道 token 消耗等现实痛点，整体项目健康度良好，维护者响应及时。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**今日已合并/关闭的重要 PR：**

| PR | 说明 | 影响 |
|----|------|------|
| [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) | 修复 capability cache 永不过期问题，切换模型时正确清除缓存 | 消除上游网关路由瞬态故障导致的永久错误标记 |
| [#6727](https://github.com/agentscope-ai/QwenPaw/pull/6727) | 修复 Windows 路径分隔符导致 66 个集成测试被静默跳过的问题 | 提升 CI 覆盖率真实性 |
| [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) | 修复 forked background subagent 在 worktree 最终化失败时仍报告 completed 的 bug | 改进任务状态可靠性 |
| [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) + [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) | LLM fallback UI 和后端已合并 | 用户可配置每智能体/全局模型备选列表 |
| [#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) | 模型重试逻辑完善 | 提升 API 瞬态故障恢复能力 |
| [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) | 强制为 DeepSeek 模型 relay reasoning_content | 修复思考模式多轮会话 API 拒绝问题 |
| [#6718](https://github.com/agentscope-ai/QwenPaw/pull/6718) | 统一 App Market 列表展示 | 改善插件市场用户体验 |

项目整体在**可靠性**（缓存/重试/状态报告）和**功能完善**（LLM fallback/DeepSeek 兼容）两个维度持续推进。

---

## 4. 社区热点

**活跃讨论 Issues：**

- [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — **频道重试功能**（4 评论，自建 Matrix 频道连接不稳定，qwenpaw 快于服务恢复时无重试机制，需手动重启）
- [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — **自动模型路由**（3 评论，轻量模型处理简单轮次、视觉模型处理图片、大模型处理推理，按消息自动分流）
- [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — **MCP 工具规律性失效**（2 评论，每隔数小时 MCP 工具自动失效，需重启容器恢复）
- [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — **nohup 命令导致 agent 卡死**（2 评论，后台 shell 进程永远不返回 idle 状态）

**热点分析：** 用户最关注**连接稳定性**（频道重试、MCP 超时）和**资源效率**（自动模型路由、按需加载技能），反映出生产环境对高可用和 token 成本控制的双重诉求。

---

## 5. Bug 与稳定性

**高严重度：**

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具规律性失效，需手动重启容器 | 暂无 |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | 长会话大量 tool_call 后返回 400 "tool must respond to tool_calls" | 暂无 |
| [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | thinking-mode 混合 tool_call 历史后上游返回 400 | [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) 已合并（DeepSeek），[#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) 待合并（通用） |

**中严重度：**

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | execute_shell_command 传入 sandbox_config 时 TypeError 崩溃 | 暂无 |
| [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | SSE 流内 503 错误未触发重试直接失败 | [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) 待合并 |
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 Windows 桌面版 PYTHONHOME 注入导致所有 Python 子进程崩溃 | 暂无 |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | 微信 iLink context_token 被 typing indicator 提前消耗，导致回复被拒 | 暂无 |
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | cron pause/resume 状态未持久化，重启后丢失 | 暂无 |

**低严重度：**

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 Browser SDK open() 持续返回 Target crashed | 暂无 |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测覆盖已有能力标记为 false | [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) 部分缓解 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 纳入可能性 |
|----------|------|-----------|
| [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) | **实时 Artifact 画布** — 在 Console 侧面板渲染 agent 生成的 HTML | ⭐ 高，[#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) 已实现持久化 artifact 卡片基础 |
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | **自动模型路由** — 按消息类型自动选择模型 | ⭐ 高，与已合并的 LLM fallback（#5597）形成互补 |
| [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | **按需加载技能** — 避免 27+ 技能占用 8-10k tokens | ⭐ 高，token 效率痛点明确，技术可行 |
| [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | **MCP 工具超时可配置** — 防止 hung MCP server 阻塞 turn | ⭐ 中，[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) 已暴露该问题 |
| [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | **微信审批提示中文化** — Approve/Deny → 批准/拒绝 | ⭐ 中，国际化改进，成本低 |
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | **频道重试机制** — 健康检测与自动重连 | ⭐ 中，稳定性核心能力 |

---

## 7. 用户反馈摘要

**痛点：**
- **MCP 工具不稳定性**：多个用户报告 MCP 工具在运行数小时后自动失效，需重启容器（#6732），暴露运行时状态管理缺陷。
- **长会话崩溃**：20-30+ 轮 tool_call 后模型返回 400 错误（#6726），上下文累积导致 API 校验失败。
- **微信渠道审批阻塞**：一次性 context_token 被 typing indicator 消耗后，审批请求被拒（#6696），且仅限微信渠道时审批界面不可达（#6695 已关闭）。
- **Windows 兼容性**：v2.1.0b1 桌面版 PYTHONHOME 注入导致 Python 子进程全量崩溃（#6697），Browser SDK 持续崩溃（#6698）。
- **Token 浪费**：27+ 技能全量加载占用系统提示 25-30%（#6699），用户强烈期待按需加载。

**满意点：**
- LLM fallback 功能（#5597/#5598）已落地，用户可配置模型备选列表。
- DeepSeek 思考模式兼容性问题已修复（#6675）。
- 测试覆盖率改进得到认可（#6727 修复 Windows 静默跳过问题）。

---

## 8. 待处理积压

| Issue | 创建时间 | 天数 | 优先级 | 说明 |
|-------|----------|------|--------|------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 2026-07-24 | 13 | 高 | 自动模型路由，长期未响应但社区关注度高 |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | 2026-07-26 | 11 | 中 | nohup 命令卡住 agent，生产环境常见场景 |
| [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | 2026-07-23 | 14 | 中 | 智能体级别 token 统计，用户询问主分支是否计划支持 |
| [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | 2026-08-01 | 6 | 低 | Loongsuite tracing 集成使用指南 |

**维护者建议：** #6436（自动模型路由）和 #6480（nohup 卡死）已开放 10+ 天且均有生产影响，建议优先排期。#6392 的 token 统计需求与 #6699 按需加载技能存在协同效应，可合并考虑。

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

ZeroClaw 今日保持**高强度活跃**：过去 24 小时共 50 条 Issue 更新（新开/活跃 39、关闭 11）、50 条 PR 更新（待合并 49、已合并 1），且大量 RFC 持续进入复审与修订阶段。项目当前正处于 v0.8.5 稳定化冲刺窗口（截止 2026-08-30），安全与认证架构（v0.9.0 队列）同步推进，整体健康度良好，但维护者审查积压明显。

---

## 2. 版本发布

**今日无新版本发布。** v0.8.5 稳定化追踪器 [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) 仍活跃，冻结于 08-04，当前处于逐周交付就绪项的阶段。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) [CLOSED] | 用共享服务 Supervisor 替代无界固定文件日志重定向，单文件上限 8 MiB | macOS/launcher 日志管理关键稳定性改进 |
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) | 在 pipeline 构建阶段强制执行 Agent 工具策略 | 安全边界从声明层下沉到执行层 |
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | 统一 Git shell policy 参数规范化，避免引号/转义不一致导致策略绕过 | 修复安全策略的边界模糊漏洞 |
| [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) | JSONL 会话迁移增加事务与重试保障 | 数据迁移可靠性提升 |

### 开放中重点 PR

- [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) — **image_gen 工具 SSRF 防护**：对 fal.ai 返回的 URL 进行严格校验，防止服务端注入恶意地址
- [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) — **修复 Provider 刷新导致旧 Session 被替换的竞态问题**（关联 #9719）
- [#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) — **workspace-relative forbidden_paths glob 支持**：实现 RFC #8424，扩展路径拦截粒度
- [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) — **Bluesky/Reddit 通道强制 Sender 鉴权**：此前两个通道完全跳过 peer_groups 检查，现已补全
- [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — **Matrix 单消息进度草稿**：progress/reasoning 编辑进同一 draft，最终答案独立发送

---

## 4. 社区热点

以下 Issue 评论数最多、讨论最密集，反映社区核心关注方向：

| Issue | 主题 | 评论 | 核心诉求 |
|---|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | Work Lanes + Board Automation + Label Cleanup RFC | 18 | 改进维护者工作流路由与自动化，降低维护负担 |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode v1 — bounded foreground Matrix 工作 RFC | 18 | 跨 Agent turn 的持久化目标推进机制 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | ZeroClaw Chat Completions profile RFC | 16 | 兼容 OpenAI Chat Completions 协议，接入 Open WebUI/LobeChat/Continue 等生态 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 高风险 shell 命令逐次确认层 + 类 Claude Code 策略 RFC | 16 | 细粒度命令审批（allow/ask/deny），提升安全可控性 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 可插拔入站认证与规范主体 RFC | 12 | 统一 OIDC/多 provider 认证架构 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 维护者 RFC/设计决策队列 Tracker | 11 | 建立维护者决策看板，降低 RFC 积压 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned 会话与传输适配器 RFC | 10 | 统一会话所有权与传输层抽象 |

**趋势分析**：社区焦点集中在三大方向——① **安全策略细化**（shell 确认、认证可插拔、SSRF 防护）；② **协议兼容性**（Chat Completions profile）；③ **维护者工作流**（RFC 决策队列、看板自动化）。RFC #8603 若落地，将显著扩展 ZeroClaw 的客户端生态接入能力。

---

## 5. Bug 与稳定性

### 高优先级 Bug

| Issue | 描述 | 严重程度 | Fix PR |
|---|---|---|---|
| [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | OpenRouter 流式请求丢失 `provider_extra`，prompt-cache 等配置失效 | **S1 — 工作流阻塞** | 无 |
| [#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) | Signal 通道静默丢弃仅含 `sourceUuid` 的发送者消息 | **S1 — 工作流阻塞** | [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) [OPEN] |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `verifiable-intent` 验证约束时未验证凭证链 | **高风险** | 无 |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool-schema 克隆导致 Agent 循环 RSS 无界增长 | **高风险（OOM）** | 关联 #5542，#8633 已处理重启风暴根因 |
| [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) | ZeroCode 无法连接由 Windows Task Scheduler 启动的 Daemon | S3 | 无 |
| [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | `daemon reload` 未绑定 SIGUSR1，文档却提示发送该信号会导致崩溃 | **S2** | 无 |

### 已修复/关闭
- [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) — CI 中 `plugins-wasmtime` feature 下 unit tests 不执行（已关闭）
- [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) — ZeroCode 字符串编辑不支持方向键导航（已关闭）
- [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp Web LID 联系人绕过 allowed-numbers（已关闭）

---

## 6. 功能请求与路线图信号

| 请求 | 状态 | 纳入可能性 |
|---|---|---|
| **Chat Completions 协议适配**（#8603） | RFC Rev 进行中，16 条评论 | ⭐ 高 — 生态兼容关键，已有维护者关注 |
| **Goal mode v1 持久化目标**（#8303） | RFC，高优先级 | ⭐ 高 — 与 v0.9.0 多 Agent 边界里程碑对齐 |
| **OpenRouter session_id 支持 prompt-cache**（#9631） | Feature request，6 条评论 | 中 — 成本优化明确，实现路径清晰 |
| **workspace-relative forbidden_paths glob**（#8424 / #9776） | RFC + PR 并行推进 | ⭐ 高 — PR 已在审，v0.8.5 或 v0.9.0 可纳入 |
| **Computer-use 桌面交互支持**（#6909） | RFC，长期开放 | 中 — 架构复杂，更可能归入 v0.9.0+ |
| **Kanban 插件化看板**（#8832） | RFC，8 条评论 | 中 — 插件化设计，独立交付路径清晰 |
| **Anthropic stored OAuth alias**（#9464 / #9420） | RFC + PR 并行 | ⭐ 高 — PR #9420 已开放，直接关联 v0.9.0 认证里程碑 |

---

## 7. 用户反馈摘要

- **成本痛点明确**：#9631 指出 OpenRouter 每次 turn 重复发送 system prompt + tool schemas，prompt-cache 缺失导致费用不必要增长，用户强烈期望 `session_id` 透传支持。
- **安全性焦虑**：#9328 发现 VI（Verifiable Intent）约束评估未验证凭证链，属于安全审计级问题；#8826 SSRF 修复也反映用户对工具链输入来源的信任担忧。
- **通道可用性缺陷**：Signal（#9774）和 WhatsApp（#6350，已修复）的静默消息丢失严重影响用户体验，用户希望错误可观测而非静默吞掉。
- **文档与信号不一致**：#9768 指出 daemon reload 文档建议 SIGUSR1，但实际该信号会杀死进程，混淆操作者。
- **ZeroCode 体验**：#9697 Windows Task Scheduler 场景下 ZeroCode 无法连 Daemon，影响自动化部署用户；#7467 字符串编辑不支持方向键是长期 UX 抱怨（已修复）。
- **正向反馈**：#8928 Doctor 诊断增加日志路径展示，用户可直接从 UI 定位日志文件，无需猜测配置路径。

---

## 8. 待处理积压

| Issue/PR | 问题 | 风险 |
|---|---|---|
| [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | OpenRouter streaming 丢失 `provider_extra`（S1） | 无 Fix PR，直接影响 prompt-cache 功能 |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | VI 凭证链未验证（高风险） | 无 Fix PR，安全审计级缺陷 |
| [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | daemon reload 信号文档错误（S2） | 无 Fix PR，可能导致操作者误操作 |
| [#9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) | `zeroclaw-gateway` clippy -D warnings | 无 Fix PR，CI 阻塞风险 |
| [#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) | `log_persistence=none` 时 withheld-capability 通知不可见 | 无 Fix PR，可观测性盲区 |
| [#9778](https://github.com/zeroclaw-labs/zeroclaw/pull/9778) | 文档 revision history 不同步 | 今日新建 PR，待审查 |
| **RFC 积压队列** [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 多个 RFC 等待维护者决策 | 维护者审查瓶颈，已建 Tracker 但进展缓慢 |

---

**整体评估**：ZeroClaw 项目活跃度高、RFC 推进有序、安全修复密集，符合 v0.8.5 稳定化冲刺节奏。主要风险在于 **S1 级 Bug（#9775、#9774）缺乏即时代码修复**、**RFC 维护者决策积压**，以及 **v0.9.0 安全/认证架构的复杂性**。建议维护者优先处理 #9775 与 #9328。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*