# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 07:33 UTC

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

过去24小时 OpenClaw 项目保持**极高活跃度**：共处理 500 条 Issue 更新（新开/活跃 389，已关闭 111）及 500 条 PR 更新（待合并 372，已合并/关闭 128），无新版本发布。今日工作重心集中在**会话状态稳定性修复**、**安全边界强化**（CSRF Origin 检查、凭证泄露防护）及**Gateway 性能瓶颈**排查。多起 P0/P1 级 Bug 引发社区高度关注，包括子代理结果静默丢失、数据库迁移失败、Gateway 主线程卡死等问题，反映当前版本迭代中并发状态管理的复杂度仍待优化。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 影响 |
|----|------|------|
| [#119517](https://github.com/openclaw/openclaw/pull/119517) | fix(tooling): prevent local tsgo checks from saturating CPUs | 修复本地类型检查可耗尽多核 CPU 的问题，维护者构建环境稳定性提升 |
| [#96107](https://github.com/openclaw/openclaw/pull/96107) | fix(sanitize): preserve user-visible prose after error-prefix lines | 修复错误信息后用户可见文本被静默丢弃的问题，改善错误提示 UX |
| [#111902](https://github.com/openclaw/openclaw/pull/111902) | fix(codex): stop timed-out resume process trees on Windows | Windows 下 Codex 超时恢复进程树泄露修复 |

### 待合并的关键 PR（高优先级）

- **#119446** (P1): Gateway CSRF 修复 — 增加 Origin 头校验，堵住跨站 Cookie 认证绕过漏洞
- **#119260** (P0): 媒体清理 fail-closed 修复 — 防止 session store 不可读时丢失已生成媒体文件
- **#119127** (P0): 媒体 TTL 清理路径隔离 — 避免正常聊天历史引用的附件被误删
- **#92499** (P1): QMD 内存 sidecar 按 agent 隔离 — 多 agent 场景下认证信息隔离
- **#95830** (P1): Telegram 投票答案路由到 session — 修复 poll answer 不触发 agent turn 的长期 bug

---

## 4. 社区热点

### Issue 热榜（评论数 Top 5）

1. **#116201** — [Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201) | 59 评论 | 🦞 diamond lobster
   - 实时语音会话的资源边界问题， stalled/bursty provider 行为下旧状态无法释放

2. **#25592** — [Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592) | 40 评论 | 🦞 diamond lobster
   - 工具调用间的内部处理文本泄露到 Slack/iMessage 等渠道，严重影响 UX

3. **#7707** — [Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 25 评论 | 🌊 off-meta tidepool
   - 功能请求：按来源对记忆条目打信任标签，防御 memory poisoning 攻击

4. **#44925** — [Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | 24 评论 | 🦞 diamond lobster
   - 子代理完成结果静默丢失，无重试/通知/自动重启，影响 Telegram forum bot 场景

5. **#48788** — [Centralized filename encoding utility](https://github.com/openclaw/openclaw/issues/48788) | 20 评论 | 🐚 platinum hermit
   - 飞书中文文件名编码修复的架构化提议，需统一处理多编码（Shift-JIS/EUC-KR/GB18030）

### PR 热度

- [#119446](https://github.com/openclaw/openclaw/pull/119446) 安全修复 PR 引发关注，CSRF Origin 检查被认为是关键安全边界补齐

---

## 5. Bug 与稳定性

### P0 级（影响可用性或数据丢失）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败，`no such column: entry_valid`，Gateway 拒绝启动 | 待修复 |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 6.11→7.1 升级后启动迁移预检阻塞，tables 和 leases 为空 | 待修复 |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程启动即 100% 占用，plugin-metadata snapshot + fs statting 饥饿 accept loop | 待修复 |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | `CLAUDE_CLI_CLEAR_ENV` 剥离 ANTHROPIC_API_KEY 后仍产生 ~13.7M tokens 计费 | ✅ 已关闭 |

### P1 级（核心功能异常）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音会话 retain 无界 provider/consult 状态 | 待修复 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection 持续写入下 livelock，阻塞主线程 | 待修复 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成投递在 direct-announce timeout/drain/orphan prune 下丢失 | 待修复 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理完成静默丢弃：announce 切入结束中的 requester run | 待修复 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 返回 "thread switched branches"，stale expectedLeafEntryId | 待修复 |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有 persistent session 强制 capped 128k context，无视模型配置 | 待修复 |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env generator 双重引号破坏 AWS_REGION hostname | 待修复 |

### P2 级（体验/可靠性问题）

| Issue | 描述 |
|-------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄露到消息通道 |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) | Embedded prompt-lock session takeover 在 tool failure 后 abort 而非 retry |
| [#116512](https://github.com/openclaw/openclaw/issues/116512) | Telegram progress 模式下 commentary 重复显示 |
| [#114690](https://github.com/openclaw/openclaw/issues/114690) | Discord 消息在 Codex compaction 后可被重复发送 |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | memory_search 间歇性 "index metadata is missing"，疑似 race condition |
| [#77733](https://github.com/openclaw/openclaw/issues/77733) | `/new` 和 `/reset` 不触发 persona greeting（2026.5.3 回归） |

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 可能纳入版本 |
|-------|----------|-------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source — 按来源信任度标记记忆，防御 poisoning | 中期路线图 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks — 强制 tool-call/策略硬门控 | 安全相关，有 PR 储备 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at gateway | 运营需求，有 linked PR |
| [#72741](https://github.com/openclaw/openclaw/issues/72741) | 外部安全/guardrail 检查标准接口 | 架构改进，pending |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | YAML 配置文件格式支持 | 低优先级 UX |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI MathJax/LaTeX 支持 | 👍 10 票，用户呼声高 |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | backup CLI 支持 .gitignore 排除模式 | linked PR 已存在 |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | heading-aware chunking + entity extraction for memory | 有 linked PR |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | Android chat-first 界面探索 | 社区 fork，upstreaming 讨论中 |

---

## 7. 用户反馈摘要

**核心痛点：**

1. **子代理可靠性**：多个 Issue（#44925、#67777、#92433）聚焦子代理完成结果静默丢失，用户反馈在无通知、无重试的情况下任务中断，严重影响多步自动化工作流。

2. **会话状态稳定性**：transcript livelock（#115908）、thread branch 错乱（#115700）、persistent session context 被硬限 128k（#116010）等问题持续出现，用户对并发写入场景下的状态一致性信心不足。

3. **渠道适配质量**：Telegram progress 重复（#116512）、Discord 重复发送（#114690）、Tool-call 间文本泄露（#25592）反映多渠道适配的边界条件覆盖不足。

4. **认证/计费安全**：#117956 显示 API Key 被剥离后仍可产生计费，#103804 的 service-env 引号问题影响 AWS 集成，用户对认证安全敏感度高。

5. **数据库迁移风险**：#119263 和 #112395 均为升级后迁移失败导致 Gateway 无法启动，用户反馈升级路径风险较高。

**正面反馈：**
- #42840 获 10 个 👍，MathJax 支持需求强烈
- 多个安全修复 PR（#119446、#119390、#119536/#119537/#119538 凭证泄露修复）获得社区认可

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 标签 | 说明 |
|-------|----------|------|------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | P2, security | Memory Trust Tagging，创建半年余，无 maintainer 回复 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | 2026-02-10 | P2, security | Pre-response enforcement hooks，金融/安全场景刚需 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 2026-03-10 | P2 | Per-agent cost budget，有 linked PR 但产品决策待定 |
| [#72741](https://github.com/openclaw/openclaw/issues/72741) | 2026-04-27 | security | 外部 guardrail 标准接口 |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | 2026-03-22 | P1, closed | ACP parent session stuck（已关闭但需验证修复完整性） |

### 需 maintainer 关注的合并风险 PR

| PR | 风险标签 | 说明 |
|----|----------|------|
| [#92499](https://github.com/openclaw/openclaw/pull/92499) | compatibility + session-state + availability | QMD sidecar 隔离，影响多 agent 部署 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | security-boundary | install policy warning 确认机制，用户交互变更 |
| [#119446](https://github.com/openclaw/openclaw/pull/119446) | security-boundary + compatibility | CSRF Origin 修复，需验证现有部署兼容性 |

---

*报告生成时间：2026-08-05 | 数据周期：过去 24 小时 | 来源：github.com/openclaw/openclaw*

---

## 横向生态对比



# 2026-08-05 个人 AI 助手/自主智能体开源生态横向分析报告

---

## 1. 生态全景

2026年8月，个人AI助手开源生态呈现**"头部项目高强度迭代、长尾项目进入维护期"**的分化格局。OpenClaw、IronClaw、CoPaw、ZeroClaw 四个头部项目保持每日数百级社区动态，核心竞争焦点从"功能覆盖"转向"稳定性治理"与"安全边界"建设。NanoBot、Hermes Agent 处于快速成长期，以 WebUI 体验和渠道稳定性为突破口加速追赶。Moltis、NullClaw、TinyClaw、ZeptoClaw 等中小型项目活跃度明显下滑，部分进入低维护模式。整体生态正从"野蛮生长"过渡到**"工程成熟度竞争"**阶段，会话状态一致性、跨 agent 权限隔离、Token 成本优化成为全行业共同痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 | 待合并 | Release | 健康度 |
|------|-----------|---------|----------|--------|---------|--------|
| **OpenClaw** | 500 | 500 | 239 | 372 | 无 | 🟡 高活跃，P0/P1 bug 积压 |
| **IronClaw** | 50 | 50 | 33 | 29 | v1.1.0-rc.1 | 🟢 良好，重构+功能并行 |
| **CoPaw** | 26 | 47 | 32 | 25 | 无 | 🟡 良好，beta 版稳定性待修复 |
| **ZeroClaw** | 47 | 50 | 1 | 49 | 无 | 🟠 高活跃，维护者产能瓶颈 |
| **NanoBot** | 4 | 21 | 16 | 5 | 无 | 🟢 良好，WebUI 迭代紧凑 |
| **Hermes Agent** | 50 | 50 | 26 | 48 | 无 | 🟡 良好，向 v0.19 推进 |
| **PicoClaw** | 3 | 4 | 2 | 2 | 无 | 🟡 中等偏上，Bug 积压 |
| **NanoClaw** | 1 | 6 | 1 | 5 | 无 | 🟡 中等，关键 Bug 待合并 |
| **LobsterAI** | 1 | 14 | 11 | 3 | 2026.8.3 合入中 | 🟢 良好，发版收尾期 |
| **NullClaw** | 0 | 1 | 0 | 1 | 无 | 🟢 正常，低活跃平稳期 |
| **Moltis** | 0 | 1 | 0 | 1 | 无 | 🟠 低活跃，仅 Dependabot |
| **TinyClaw** | — | — | — | — | 无 | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | — | 无 | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模与影响力**：OpenClaw 以 500 条 Issue/PR 更新遥遥领先，社区规模约为第二名 IronClaw/CoPaw 的 10 倍，是生态中绝对的"旗舰项目"。

**优势**：
- **并发状态管理深度**：子代理路由、Gateway 线程模型、会话 transcript 投影等复杂并发场景的工程积累，其他项目尚未触及同等复杂度
- **安全边界建设**：CSRF Origin 校验、凭证泄露防护、QMD sidecar 多 agent 隔离等安全修复集中推进，领先于生态平均水准
- **多渠道覆盖**：Telegram、Discord、Slack、iMessage、飞书等全渠道适配，边界条件处理经验最丰富

**技术路线差异**：
| 维度 | OpenClaw | 主要竞品 |
|------|----------|----------|
| 架构重心 | Gateway 中心化 + 子代理联邦 | NanoBot/CoPaw 偏单机桌面；IronClaw 偏 wasm 插件化 |
| 状态管理 | 显式 session store + transcript projection | Hermes Agent 偏进程生命周期；ZeroClaw 偏 RFC 治理 |
| 安全模型 | fail-closed + 凭证隔离 | ZeroClaw S0 级漏洞暴露同类问题；NanoBot 有 API key 污染风险 |
| 扩展机制 | MCP + 子代理通信 | IronClaw Skill 系统；CoPaw 插件 bundle |

**社区规模对比**（基于 Issue 日更新量估算）：
- OpenClaw：~389 日新增/活跃 Issue → 预计仓库总 Star 100k+ 量级
- IronClaw/CoPaw：~30-50 日新增 → 预计 Star 10k-50k 量级
- NanoBot/Hermes：~10-20 日新增 → 预计 Star 5k-20k 量级
- 其他项目：<5 日新增 → 利基/垂类项目

---

## 4. 共同关注的技术方向

### 4.1 会话状态一致性（跨项目痛点）
| 项目 | 具体问题 |
|------|----------|
| OpenClaw | #115908 transcript livelock、#115700 thread branch 错乱、#116010 128k context 硬限 |
| Hermes Agent | #79017 prompt_cache_key 连续性丢失、#75756 历史消息编辑失败 |
| CoPaw | #6564 记忆压缩前 pending turns 未持久化 |
| ZeroClaw | #9487 会话所有权 RFC、#8303 Goal mode 重启上下文丢失 |

**共同诉求**：多轮对话、会话重启、上下文压缩场景下的状态机健壮性，是阻碍生产部署的核心障碍。

### 4.2 子代理/多 agent 通信可靠性
| 项目 | 具体问题 |
|------|----------|
| OpenClaw | #44925/#67777/#92433 子代理结果静默丢失（3个关联 Issue） |
| NanoClaw | #3187 agent-to-agent 消息路由内置 SendMessage 被拦截 |
| ZeroClaw | #9324 A2A outbound client Phase 1 落地 |
| Hermes Agent | #79173 子智能体 heartbeat stale 逻辑优化 |

**共同诉求**：子代理完成结果的可靠投递、超时/孤儿清理、跨 agent 消息路由的正确性。

### 4.3 Token 成本优化
| 项目 | 具体问题 |
|------|----------|
| Hermes Agent | #6839 Lazy Tool Schema Loading（18👍）、#4379 73% 固定开销数据 |
| CoPaw | #6699 27+ 技能导致系统提示词膨胀 25-30% |
| PicoClaw | #3251 Anthropic prompt cache token 指标修复 |
| OpenClaw | #117956 API Key 剥离后仍计费 |

**共同诉求**：工具 Schema 按需加载、prompt cache 可观测、长技能库场景的 token 治理。

### 4.4 安全与权限隔离
| 项目 | 具体问题 |
|------|----------|
| ZeroClaw | #9647/#9646 跨 agent 知识图谱/工具越权（S0 级） |
| OpenClaw | #119446 CSRF Origin 校验、#92499 QMD sidecar 隔离 |
| NanoBot | #4784 多 Provider API Key 全局污染 |
| IronClaw | #7203 Skill 真实 mount 隔离 multi-tenant 执行 |

**共同诉求**：多 agent/多租户场景下的数据隔离、凭证安全、webhook 认证 fail-closed。

### 4.5 渠道稳定性
| 项目 | 具体问题 |
|------|----------|
| NanoBot | #5156 Telegram polling 静默卡死、#5247 Matrix Continuwity 兼容 |
| PicoClaw | #3269 MCP 连接失败导致 agent loop 挂起 |
| CoPaw | #6684 频道重试与健康检测、#6696 WeChat iLink token 消费异常 |
| ZeroClaw | #9314 Telegram offset 提前推进导致消息丢失 |

**共同诉求**：网络抖动下的重连机制、MCP/渠道连接的容错与超时处理。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 差异化能力 |
|------|----------|-----------|
| **OpenClaw** | 企业级 Gateway + 多 agent 联邦 | 子代理通信、并发状态管理、多渠道适配深度 |
| **IronClaw** | 扩展能力 + 错误可恢复性 | wasm 插件化、IronHub 技能市场、error-recoverability 契约 |
| **CoPaw** | 桌面优先 + 中文生态 | DingTalk/微信集成、OS 级交互（全屏/Dock/Spaces）、token 统计 |
| **NanoBot** | WebUI 体验 + 快速迭代 | 临时聊天模式、Vite HMR 开发体验、MST 聚合搜索 |
| **Hermes Agent** | 进程管理 + 定时任务 | Cron 调度、Desktop 进程生命周期、Lazy Tool Schema |
| **ZeroClaw** | 安全治理 + RFC 驱动 | Goal mode、Shell 策略、权限隔离框架、维护者决策队列 |
| **PicoClaw** | MCP 原生 + 成本可观测 | Exa 搜索、prompt cache 指标、OAuth 生产稳定性 |
| **NanoClaw** | 语音/SMS 多渠道 | Dial 渠道（SMS+AI 语音）、Discord 审批流 |
| **LobsterAI** | 云通信集成 | 飞书/钉钉/NIM  SDK 深度集成、积分运营活动 |

### 5.2 目标用户

| 项目 | 主要用户群 |
|------|-----------|
| OpenClaw | 企业/开发者，需要多 agent 协作和Gateway部署 |
| IronClaw | 技术栈为 Rust/wasm 的开发者，重视扩展机制 |
| CoPaw | 中文用户、钉钉/微信生态用户、桌面端重度用户 |
| NanoBot | 个人用户、快速原型开发者、WebUI 体验敏感用户 |
| Hermes Agent | 自动化工作流用户、定时任务场景 |
| ZeroClaw | 安全敏感用户、多 agent 协作场景、RFC 治理爱好者 |
| PicoClaw | MCP 生态用户、成本优化敏感型运营 |
| NanoClaw | 需要语音/SMS 触达的用户 |
| LobsterAI | 云通信（飞书/钉/NIM）企业用户 |

### 5.3 技术架构关键差异

| 维度 | OpenClaw | IronClaw | CoPaw | NanoBot |
|------|----------|----------|-------|---------|
| 语言 | TypeScript | Rust | Python | TypeScript/React |
| 部署模式 | Gateway 中心化 | wasm 插件化 | 桌面应用 | WebUI + CLI |
| 扩展机制 | 子代理 + MCP | Skill + IronHub | 插件 bundle | MCP Apps |
| 状态存储 | SQLite + session store | DB-backed tree | 文件系统 | 内存/临时 |
| 多租户 | QMD sidecar 隔离 | Skill mount 隔离 | 多 profile | 单用户为主 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
🔥 高频迭代层（日更新 >100）
   OpenClaw（500 Issue + 500 PR）

⚡ 中高频层（日更新 30-100）
   ZeroClaw（47+50，但合并率仅2%）
   Hermes Agent（50+50，净增48）
   CoPaw（26+47，合并率47%）
   IronClaw（50+50，rc.1 刚发布）

📈 成长期层（日更新 10-30）
   NanoBot（4+21，WebUI 冲刺）
   LobsterAI（1+14，发版收尾）
   NanoClaw（1+6，Dial 渠道扩展）

📉 低活跃/维护期层（日更新 <10）
   PicoClaw（3+4，Bug 积压）
   NullClaw（0+1，平稳期）
   Moltis（0+1，仅 Dependabot）

⚪ 停滞层
   TinyClaw、ZeptoClaw（无活动）
```

### 6.2 成熟度判断

| 阶段 | 项目 | 判断依据 |
|------|------|----------|
| **快速迭代期** | NanoBot、CoPaw、Hermes Agent | 高 PR 吞吐量、WebUI/功能快速推进、社区响应积极 |
| **质量巩固期** | OpenClaw、IronClaw、ZeroClaw | 大量 P0/P1/S0 Bug 集中暴露、安全修复密集、RFC 治理启动 |
| **功能扩展期** | NanoClaw、PicoClaw | 新增渠道（Dial/Exa）、基础设施改进（OAuth/cache） |
| **维护/收缩期** | NullClaw、Moltis、TinyClaw、ZeptoClaw | 低活跃度、无新功能、依赖自动更新为主 |
| **发版收尾期** | LobsterAI | 特性分支合入 main、依赖升级、运营活动闭环 |

---

## 7. 值得关注的趋势信号

### 7.1 从"能用"到"可靠"：工程成熟度成为新竞争维度

OpenClaw 的 389 个活跃 Issue 中 P0/P1 占比显著（DB 迁移失败、Gateway 主线程卡死、子代理结果丢失），ZeroClaw 暴露 4 个 S0 级安全漏洞，CoPaw v2.1.0b1 出现 PYTHONHOME 注入崩溃——这些信号表明，**功能堆叠的红利期已结束，工程健壮性成为分水岭**。对开发者的价值：优先保障会话状态一致性和错误恢复机制，而非盲目追加功能。

### 7.2 多 agent 协作从"玩具"走向"生产"

OpenClaw（3个关联 Issue）、NanoClaw（消息路由修复）、ZeroClaw（A2A client、Goal mode RFC）、Hermes Agent（子代理 heartbeat）同时聚焦子代理可靠性，说明**多 agent 系统已进入真实工作流验证阶段**。静默

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报
**日期：2026-08-05** | 数据来源：GitHub HKUDS/nanobot

---

## 1. 今日速览

过去24小时 NanoBot 项目保持高活跃度：**21 条 PR**（16 条合并/关闭，5 条待处理）与 **4 条 Issue** 同步推进，无新版本发布。核心进展集中在 WebUI 体验优化（临时聊天模式、Vite 开发模式、浮动控件统一）、多个 Channel 的 bug 修复（Matrix、Telegram、WeCom）以及新增 MCP Apps 和 MST 搜索引擎支持。维护者 chengyongru、Re-bin 贡献密集，项目健康度良好，技术债清理与功能迭代并行。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（16 条）

| PR | 作者 | 类型 | 核心内容 |
|----|------|------|---------|
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | chengyongru | refactor/p1 | 移除请求级 `Tool.available()` 层，简化会话工具权限模型 |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | chengyongru | feat/p1 | 新增 `nanobot webui --dev`，集成 Vite 热更新，贡献者工作流完善 |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | concertypin | feat/p1 | 支持可信代理引导认证（Cloudflare Tunnel/Access 场景） |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | Re-bin | feat/p2 | WebUI 新增"临时聊天"模式，连接级内存会话，会话结束自动清理 |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | chengyongru | refactor/p2 | WebUI 视觉一致性重构：菜单/弹窗 elevation 体系、Skills/Channels 布局扁平化 |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | chengyongru | fix/p2 | 修复 WebUI 活动面板 clip 边缘羽毛模糊渲染 |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | chengyongru | fix/p2 | Prompt Rail 预览支持 Markdown 渲染 |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | chengyongru | fix/p2 | 时间戳 Tooltip 样式统一，键盘可访问性改善 |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | chengyongru | fix/p2 | 自动化元数据标记从消息体移至脚注，视觉对齐时间戳 |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | chengyongru | fix/p2 | 拒绝未注册的斜杠命令，提供 closest-match 建议 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | Re-bin | refactor | 统一 WebUI 浮动控件的样式与语义（Menu/Popover/Combobox） |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | goodtiding5 | feat/p2 | Mattermost 线程/主频道独立 groupPolicy 配置 |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | santhreal | fix/p2 | WeCom 文件名清理后为空时回退命名，防止写入目录而非文件 |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | santhreal | fix/p2 | Telegram 围栏代码块语言标签支持特殊字符（如 `c++`、`html+django`） |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | aoliaoduo | fix | Telegram `group_mode` 配置字段缺失补全 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Re-bin | feature | Quick Chat + Temporary Chat 功能（后续被 #5252 替代） |

**项目推进评估**：今日以 **WebUI 体验打磨**为主轴，16 条关闭 PR 中约 10 条直接作用于前端交互、样式与开发体验。后端侧以安全加固（可信代理、权限模型简化）和渠道稳定性修复（Telegram、WeCom、Mattermost）为主，项目整体朝"可用→好用"方向加速迭代。

---

## 4. 社区热点

### 热门 Issue

| Issue | 作者 | 状态 | 关注点 | 链接 |
|-------|------|------|--------|------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | hamb1y | OPEN | 多 Provider API Key 污染安全漏洞 | 2026-07-06 创建，评论 2 条 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | yuklcool | OPEN | MCP Apps 在 WebUI 中的展示需求 | 刚创建，0 评论 |

### 热门 PR

| PR | 作者 | 状态 | 关注点 | 链接 |
|----|------|------|--------|------|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | nolanchic | OPEN | Telegram 支持自定义 Bot API Base URL | 长期未合，p2 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | goodtiding5 | OPEN | 集成 mst-python 作为多源搜索引擎 Provider | p1，MST 聚合搜索能力 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | QQQ300kuai | OPEN | 修复 Telegram polling 静默卡死问题 | p2，生产环境严重 |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | orrinwitt | OPEN | 修复 Matrix Continuwity 兼容性（空 POST body） | 对应 #5247 |

**热点分析**：
- **#4784** 是最受关注的长期 Issue，涉及多 Provider 场景下 `os.environ` 全局污染的安全风险，影响企业级部署，已有 2 条评论讨论但尚未修复。
- **#5234**（MST 搜索集成）和 **#4919**（Telegram 自定义 API 端点）均处于 OPEN 状态，代表用户对**搜索多样性**和**私有化部署**的持续诉求。
- **#5156** 的 polling 卡死问题是生产环境高优先级稳定性问题，尚未合并。
- **#5248** 快速响应了 **#5247** 报告的 Matrix bug，体现社区维护响应及时。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 状态 | 关联 PR | 链接 |
|--------|------|------|---------|------|
| **p2** | Matrix bot 被邀请时无法自动加入（Continuwity 拒绝空 POST body） | Issue #5247 OPEN | [#5248](https://github.com/HKUDS/nanobot/pull/5248) OPEN（待合并） | [Issue](https://github.com/HKUDS/nanobot/issues/5247) |
| **p2** | Telegram polling 在网络抖动后静默卡死 | PR #5156 OPEN | 同 PR | [PR](https://github.com/HKUDS/nanobot/pull/5156) |
| **p2** | WeCom 文件名清理后为空时写入目录而非文件 | CLOSED | [#5223](https://github.com/HKUDS/nanobot/pull/5223) ✅ | [PR](https://github.com/HKUDS/nanobot/pull/5223) |
| **p2** | Telegram 围栏代码语言标签含特殊字符（`c++`、`html+django`）导致代码块损坏 | CLOSED | [#5222](https://github.com/HKUDS/nanobot/pull/5222) ✅ | [PR](https://github.com/HKUDS/nanobot/pull/5222) |
| **p1** | `Tool.available()` 请求级访问授权设计过于复杂 | CLOSED | [#5238](https://github.com/HKUDS/nanobot/pull/5238) ✅ | [PR](https://github.com/HKUDS/nanobot/pull/5238) |
| **p2** | 未注册斜杠命令被转发给 LLM 造成困惑 | CLOSED | [#5242](https://github.com/HKUDS/nanobot/pull/5242) ✅ | [PR](https://github.com/HKUDS/nanobot/pull/5242) |

**稳定性评估**：2 个 p2 级 Channel bug（Matrix、Telegram polling）尚未合并 fix PR，存在生产隐患。其余 Bug 均已修复并关闭，项目近期 Bug 修复覆盖率良好。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 纳入前景评估 |
|------|------|------|-------------|
| MCP Apps WebUI 展示支持 | Issue #5251 | 刚创建 | 与现有 MCP client 路径互补，WebUI 重构期可能纳入路线图 |
| 多源聚合搜索（MST） | PR #5234 | OPEN | p1 优先级，RRF 融合算法成熟，合并概率高 |
| Telegram 自定义 Bot API Base URL | PR #4919 | OPEN | 企业/私有化部署刚需，与 #4702 关联，合并概率中等 |
| 临时聊天模式（一次性会话） | PR #5252 | OPEN | 紧跟 WebUI 快速迭代，合并后提供轻量试用场景，概率高 |
| Quick Chat 持久化入口 | PR #5184（已 closed） | 已关闭 | 由 #5252 替代，设计方向调整 |

**路线图信号**：WebUI 体验优化（临时聊天、开发模式、浮动控件统一）是当前迭代主轴；后端侧聚焦**搜索能力扩展**（MST）与**企业部署适配**（可信代理、Telegram 自定义端点）。MCP Apps 支持是下一个潜在增长点。

---

## 7. 用户反馈摘要

- **安全痛点**：[#4784](https://github.com/HKUDS/nanobot/issues/4784) 用户反馈多 Provider 切换时 API Key 通过全局 `os.environ` 互相污染，影响多租户/网关场景，需隔离修复。
- **渠道兼容性**：[#5247](https://github.com/HKUDS/nanobot/issues/5247) Matrix Continuwity 对空 POST body 拒绝解析，用户期望更广泛的 homeserver 兼容。
- **Telegram 稳定性**：[#5156](https://github.com/HKUDS/nanobot/pull/5156) 描述生产环境中网络抖动后 polling 完全静默卡死的问题，严重影响机器人可用性。
- **文件名安全**：[#5223](https://github.com/HKUDS/nanobot/pull/5223) WeCom 场景下用户发送含特殊字符的文件名导致文件写入异常，已修复。
- **代码块展示**：[#5222](https://github.com/HKUDS/nanobot/pull/5222) Telegram 场景下 `c++`、`html+django` 等语言标签被截断导致代码块损坏，已修复。
- **斜杠命令误用**：[#5242](https://github.com/HKUDS/nanobot/pull/5242) 用户输入未注册命令时被转发 LLM 造成混淆，现已拦截并提供 closest-match 建议。
- **开发体验**：[#5239](https://github.com/HKUDS/nanobot/pull/5239) 贡献者期待一键启动开发环境，Vite HMR 集成满足此需求。

---

## 8. 待处理积压

| 类型 | ID | 标题 | 创建时间 | 建议优先级 | 链接 |
|------|----|------|----------|------------|------|
| Issue | #4784 | Provider API keys leaked via global `os.environ` mutation | 2026-07-06 | **p1** | [Issue](https://github.com/HKUDS/nanobot/issues/4784) |
| PR | #5156 | Telegram polling 静默卡死恢复 | 2026-07-29 | **p2** | [PR](https://github.com/HKUDS/nanobot/pull/5156) |
| PR | #5248 | Matrix Continuwity 空 POST body 修复 | 2026-08-04 | **p2** | [PR](https://github.com/HKUDS/nanobot/pull/5248) |
| PR | #4919 | Telegram 自定义 Bot API Base URL | 2026-07-14 | **p2** | [PR](https://github.com/HKUDS/nanobot/pull/4919) |
| PR | #5234 | MST 多源聚合搜索集成 | 2026-08-03 | **p1** | [PR](https://github.com/HKUDS/nanobot/pull/5234) |
| PR | #5252 | 临时聊天模式 | 2026-08-05 | **p2** | [PR](https://github.com/HKUDS/nanobot/pull/5252) |
| Issue | #5251 | MCP Apps WebUI 展示支持 | 2026-08-05 | 观察 | [Issue](https://github.com/HKUDS/nanobot/issues/5251) |
| Issue | #5246 | memory/.gitignore 未追踪问题 | 2026-08-04 | p3 | [Issue](https://github.com/HKUDS/nanobot/issues/5246) |

**维护者提醒**：
- **#4784** 为长期未修复的安全 Issue，涉及多 Provider 生产部署，建议优先处理。
- **#5156**（Telegram 卡死）和 **#5248**（Matrix 兼容性）为 Channel 稳定性关键项，合并后可显著提升多频道部署可靠性。
- **#5234**（MST 搜索）作为新增能力 PR，评估后可快速纳入下一版本提升搜索覆盖面。
- **#5252**（临时聊天）处于 OPEN 状态，与已合并的 #5184 功能重叠，需确认最终设计意图后合并。

---

**项目健康度评分**：🟢 良好 — 高 PR 吞吐量、快速 Bug 响应、WebUI 迭代节奏紧凑；需关注安全 Issue #4784 与 Channel 稳定性 PR 合并进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报
**日期：2026-08-05** | 数据来源：NousResearch/hermes-agent GitHub

---

## 1. 今日速览

Hermes Agent 项目今日保持高强度活跃，24小时内共处理 **100 条** Issue/PR 更新（Issues 50条、PRs 50条），其中新打开/活跃 74 条，已关闭/合并 26 条，**净增 48 条待处理事项**。项目健康度良好，团队在稳定性修复（Desktop 进程管理、Cron 超时处理、网关状态持久化）和功能演进（Token 开销优化、权限分级、会话记忆）两条主线同步推进。今日无新版本发布，但有多项 P2 级关键 Bug 修复待合并，整体向 v0.19 迭代迈进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（13 条）

| PR | 作者 | 类型 | 说明 |
|----|------|------|------|
| [#79170](https://github.com/NousResearch/hermes-agent/pull/79170) | kshitijk4poor | Bug Fix | 防止历史 OOB steer 标记被误认为新指令，修复会话状态重放问题 |
| [#78887](https://github.com/NousResearch/hermes-agent/issues/78887) | Datawav | Bug Fix | codex_app_server 忽略 `model.codex_binary` 配置问题已确认并关闭（重复项） |
| [#57757](https://github.com/NousResearch/hermes-agent/issues/57757) | ihorman | Bug Fix | Desktop 启动时始终激活 Default profile 的问题已修复并关闭 |

### 关键开放 PR（部分）

- **#79173** — 修复子智能体在慢速模型等待时被意外杀死的问题（heartbeat stale monitor 逻辑优化）
- **#78323** — 修复 FTS 全文索引重建写入路径验证，防止 spool 溢出导致的状态损坏
- **#79172** — 将 Feishu WebSocket 路由到适配器自有执行器，避免低核主机死锁
- **#79158** — 修复 Anthropic `tool_result` 块位置错误导致的请求拒绝问题
- **#71506** — 修复 Cron 脚本超时后进程树清理无界问题，增加 POSIX/Windows 双平台支持

**整体判断：** 今日修复聚焦于 **会话状态一致性**、**进程生命周期管理** 和 **网关稳定性** 三大核心痛点，项目工程成熟度正在快速提升。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数）

| Issue | 标题 | 评论 | 👍 | 核心诉求 |
|-------|------|------|-----|----------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading — Two-Pass Tool Injection | 32 | 18 | 降低 50+ 工具场景下每次 API 调用 ~3,500-5,000 token 的固定开销 |
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) | Token overhead analysis: 73% fixed overhead per call | 21 | 0 | 提供监控数据，推动 Lazy Tool Schema 等优化落地 |
| [#527](https://github.com/NousResearch/hermes-agent/issues/527) | Gateway Permission Tiers — Role-Based Access Control | 19 | 11 | 从二元授权模型升级到 Owner/Admin/User/Guest 多级别权限 |
| [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | Persistent Session Memory with Cross-Session Search | 17 | 0 | 实现跨会话记忆持久化与自动压缩，解决重启后上下文丢失问题 |

**热点分析：** 社区对 **Token 成本优化** 和 **多用户权限管控** 呼声最高。#6839 和 #4379 形成数据驱动的需求闭环，#527 是生产环境多用户部署的前置需求。#8457 与 #49730（跨平台对话连续性）共同指向 **会话状态管理** 的系统性改进方向。

---

## 5. Bug 与稳定性

### P0 级（紧急）

| Issue | 标题 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#79017](https://github.com/NousResearch/hermes-agent/issues/79017) | prompt_cache_key 在上下文压缩会话轮换时丢失连续性 | OPEN | 无 |
| [#75756](https://github.com/NousResearch/hermes-agent/issues/75756) | Desktop 编辑历史消息失败："Edit failed" / session not found | OPEN | 无 |

### P1 级（高优先级）

| Issue | 标题 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#78862](https://github.com/NousResearch/hermes-agent/issues/78862) | Cron jobs 使用推理模型非流式调用时超时崩溃（600s 竞态） | OPEN | 无 |
| [#78237](https://github.com/NousResearch/hermes-agent/issues/78237) | 用户消息在数小时后被重复注入为 mid-turn OOB 消息 | CLOSED（原 Issue） | [#79170](https://github.com/NousResearch/hermes-agent/pull/79170) 已修复 |

### P2 级（中优先级）

| Issue | 标题 | 状态 | 关联 PR |
|-------|------|------|---------|
| [#67026](https://github.com/NousResearch/hermes-agent/issues/67026) | Desktop 重启时积累僵尸 `hermes serve` 进程 | OPEN | 部分缓解 |
| [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) | Desktop 退出时后端进程未可靠清理 | OPEN | [#71877](https://github.com/NousResearch/hermes-agent/pull/71877) 部分修复 |
| [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) | Desktop 远程网关 session cookie 登录后立即失效（401 循环） | OPEN | 无 |
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 推理在首次 tool-call 后停止思考 | OPEN | 无 |
| [#67709](https://github.com/NousResearch/hermes-agent/issues/67709) | Desktop 冷启动恢复可能进入错误 profile 并创建重复 session ID | CLOSED | 无 |

### P3 级及已修复

| Issue | 状态 |
|-------|------|
| [#79148](https://github.com/NousResearch/hermes-agent/issues/79148) terminal 工具绝对路径 null byte 崩溃 | ✅ 已修复（本地 patch + 回归测试） |
| [#73454](https://github.com/NousResearch/hermes-agent/issues/73454) Desktop Artifacts 时间戳误用毫秒 | OPEN |
| [#50837](https://github.com/NousResearch/hermes-agent/issues/50837) Windows 高 DPI 下 Alt+Tab 后 zoom 重置 | OPEN |
| [#79121](https://github.com/NousResearch/hermes-agent/issues/79121) vision_analyze 在 callable API key 下崩溃 | OPEN |
| [#79100](https://github.com/NousResearch/hermes-agent/issues/79100) tool-call recovery 后 length-continuation counter 未重置 | OPEN |

**稳定性总结：** 今日新增 6 个 P2/P3 Bug，主要集中在 **Desktop 进程管理**、**会话状态一致性** 和 **特定 Provider 兼容性问题**。Cron 超时竞态（#78862）和 prompt_cache_key 连续性（#79017）需优先关注。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 诉求 | 落地可能性 |
|----------|------|------|------------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Feature | Lazy Tool Schema Loading 两阶段注入 | ⭐⭐⭐⭐⭐ 高 — 数据支撑充分（#4379），社区 18👍 |
| [#527](https://github.com/NousResearch/hermes-agent/issues/527) | Feature | Gateway 权限分级（RBAC） | ⭐⭐⭐⭐ 较高 — P2 级别，多用户部署刚需 |
| [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | Feature | 持久化会话记忆 + 跨会话搜索 | ⭐⭐⭐⭐ 较高 — 与 #49730 形成功能组合 |
| [#76503](https://github.com/NousResearch/hermes-agent/pull/76503) | Feature | 按 Provider 配置 reasoning_echo | ⭐⭐⭐ 中 — 上游已独立实现，存在合并冲突风险 |
| [#73828](https://github.com/NousResearch/hermes-agent/issues/73828) | Feature | Webhook 回调支持 | ⭐⭐⭐ 中 — 社区长期呼声，暂无 PR |
| [#79138](https://github.com/NousResearch/hermes-agent/issues/79138) | Feature | 按渠道强制原生 @mention | ⭐⭐ 中低 — 单点需求，影响面有限 |

**路线图判断：** Token 优化和权限分级是近期最可能的两个功能增量。#76503 与上游 commit `f8758dcaf8` 存在重复实现，需优先协调合并策略。

---

## 7. 用户反馈摘要

### 核心痛点

1. **Token 成本过高**
   - #4379 用户提供真实监控数据：73% 的 API 调用 Token 是固定开销，50+ 工具场景下单调用约 13.9K Token
   - 诉求：按需加载工具 Schema，而非每次全量注入

2. **Desktop 进程管理混乱**
   - #67026 用户发现重启后积累 47 个僵尸 `hermes serve` 进程
   - #76245 指出 `before-quit` 处理器不等待 SIGTERM 完成即退出
   - 共同诉求：完善进程生命周期管理，防止资源泄漏

3. **会话状态不一致**
   - #75756 编辑历史消息后无法重放，Toast 报 "session not found"
   - #61457 Basic Auth 登录后 session cookie 立即失效，陷入 401 循环
   - #67709 冷启动恢复可能进入错误 Profile
   - 共同诉求：Session 状态机需更健壮的错误处理和恢复机制

4. **特定 Provider 兼容性问题**
   - #75725 MiniMax-M3 推理在 tool-call 后停止
   - #78862 DeepSeek 推理模型非流式调用超时
   - #79121 自定义 OpenAI 兼容端点 callable API key 崩溃
   - 共同诉求：Provider 适配层需增强容错和边界条件处理

### 用户满意点

- #79148 用户主动提交修复方案 + 回归测试，社区响应积极
- #78237 重复消息注入问题通过 PR #79170 得到快速修复
- God-file 拆分重构（#78647）得到维护者明确的政策支持

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>60 天未更新）

| Issue | 创建时间 | 天数 | 严重性 | 建议 |
|-------|----------|------|--------|------|
| [#527](https://github.com/NousResearch/hermes-agent/issues/527) | 2026-03-06 | 152天 | P2 | 权限分级是生产部署前置，建议纳入 v0.19 路线图 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 2026-04-09 | 118天 | P3 | Token 优化核心需求，建议优先评审 |
| [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | 2026-04-12 | 115天 | P3 | 会话记忆跨版本需求，建议与 #49730 合并讨论 |
| [#50837](https://github.com/NousResearch/hermes-agent/issues/50837) | 2026-06-22 | 44天 | P3 | Windows 高 DPI UX 问题，影响特定用户群 |
| [#73828](https://github.com/NousResearch/hermes-agent/issues/73828) | 2026-07-29 | 7天 | P3 | Webhook 支持需求，可考虑社区贡献 |

### 需维护者关注的新增 Issue

| Issue | 创建时间 | 严重

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 — 2026-08-05

## 1. 今日速览

过去 24 小时内 PicoClaw 项目保持中等活跃度：3 条 Issue 更新、4 条 PR 动态，无新版本发布。两个 PR（#3280 OAuth 修复、#3251 Anthropic prompt cache）已合并，为认证流程和成本可观测性带来实质性改进。社区对 **Web UI 性能** 和 **MCP 连接稳定性** 的关注度上升，两个相关 Bug 目前仍待处理。项目整体向前推进，但在用户体验层面的稳定性问题仍需加速解决。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 2 条，均标注为 stale 但已完成：

- **#3280** [fix(auth)] 解决 OAuth 登录在生产环境回调失效问题
  - 作者 honbou 通过排查四种独立的失败根因，确保浏览器 OAuth 登录流程在 headless/远程部署中不再因授权码失效而中断。这对生产环境用户是重要稳定性提升。
  - 链接：https://github.com/sipeed/picoclaw/pull/3280

- **#3251** [fix(providers)] 修复 Anthropic 提供商丢失 prompt cache token 指标的问题
  - 作者 hydrogenbond007 修复了 Anthropic SDK 和 Messages API 两个 provider 中 prompt cache 相关 token 指标被丢弃的 bug，使运营方可正确监控缓存命中率和成本结构。
  - 链接：https://github.com/sipeed/picoclaw/pull/3251

**整体评估**：今日合并聚焦于"可观测性"和"认证稳定性"两个痛点，属于后端基础设施类改进，用户无感但运维价值显著。项目在此方向稳步前进。

## 4. 社区热点

| Issue/PR | 类型 | 活跃度 | 分析 |
|----------|------|--------|------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | BUG | 👍 1，3 条评论 | Web UI 长历史会话下输入框严重卡顿，直接阻碍日常使用体验 |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | BUG | 👍 1，3 条评论 | MCP 服务器连接失败导致 agent loop 挂起，聊天界面完全无响应，属阻塞性故障 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 功能请求 | 👍 0，待合并 | 新增 Exa 作为原生 `web_search` 工具提供者，扩展了 RAG/搜索能力 |

**热点分析**：
- **#3281** 反映用户对 Web UI 交互体验的敏感，随着会话历史增长，前端性能成为显性瓶颈，建议优先排查 DOM 重渲染或状态管理问题。
- **#3269** 是严重的可用性 Bug，MCP 作为 PicoClaw 的核心集成层，其容错能力直接影响生产信任度。
- **#3299** 体现了用户对多样化搜索后端的需求，Exa（原 Metaphor）在语义搜索领域有差异化优势，合并后丰富工具生态。

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| 🔴 **高** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败 → agent loop 挂起 → 聊天界面停止响应 | 无 |
| 🟡 **中** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长会话历史下输入框严重卡顿 | 无 |
| 🟢 **低** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 版本无法启动服务 | 已关闭（stale） |

**说明**：两个活跃 Bug 均无对应的 fix PR，需维护者重点关注。#3182 标注 stale 后关闭，可能因 Android 端需求较少或无法复现。

## 6. 功能请求与路线图信号

- **#3299** — 原生 Exa 网页搜索 provider：支持 `type: "auto"` 模式、`contents.highlights`、日期范围过滤（d/w/m/y）。若合并，将提供语义搜索能力，与现有工具链形成互补。
- **#3317** — 在 LLM 响应调试日志中暴露 prompt cache token 明细（DeepSeek 等支持 cache 的模型）。与 #3251 形成上下游：#3251 修复采集，#3317 增强日志可观测性。

**路线图判断**：#3299 和 #3317 方向与今日已合并的 #3280、#3251 一脉相承——分别指向**工具生态扩展**和**成本可观测性**，均为项目成熟度提升的关键方向，纳入下一版本的概率较高。

## 7. 用户反馈摘要

| 痛点/场景 | 来源 | 用户原声提炼 |
|-----------|------|-------------|
| **移动端兼容性** | #3182 | Android 用户反馈即使授予全量权限，服务仍无法启动，且路径不可配置 |
| **Web UI 性能** | #3281 | 长会话历史导致输入框严重卡顿，影响日常对话流畅度 |
| **MCP 容错** | #3269 | MCP 服务器短暂断连即导致整个 agent loop 卡死，用户无响应感知，体验极差 |
| **成本透明** | #3251（PR 修复前） | Anthropic prompt cache 命中率对运营方不可见，影响成本优化决策 |

**满意度信号**：OAuth 修复（#3280）和 Anthropic token 捕获（#3251）均获得社区认可，说明用户在身份认证和成本核算这两个 B 端核心诉求上得到了回应。

## 8. 待处理积压

| 类型 | ID | 标题 | 创建时间 | 提醒 |
|------|----|------|----------|------|
| 🐛 Bug | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 agent loop 挂起 | 2026-07-20 | **最高优先**，阻塞性 Bug，建议添加超时/重试机制 |
| 🐛 Bug | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史输入卡顿 | 2026-07-21 | **高优先**，前端性能优化，影响普通用户高频体验 |
| ✨ 功能 | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 原生 Exa 搜索 provider | 2026-07-26 | 待 review，丰富工具生态 |
| ✨ 功能 | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | LLM 响应调试日志增强 prompt cache | 2026-08-04 | 今日新提交，与 #3251 形成完整可观测链路 |

---

**项目健康度评估**：🟡 中等偏上。PR 合并节奏正常（2/4），但两个高优先级 Bug 积压超过两周且无 fix PR，建议维护者在下一个迭代中优先处理 MCP 容错和 Web UI 性能问题，以稳定用户基本盘。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目日报 | 2026-08-05

---

## 1. 今日速览

NanoClaw 今日保持中等活跃度，过去24小时内共产生 **6 条 PR**（5 待合并 / 1 已合并）和 **1 条活跃 Issue**。代码贡献聚焦于 Agent 运行时修复、Discord 渠道稳定性改进以及新的 Dial 语音/SMS 渠道接入，整体方向清晰。未发布新版本。项目处于功能扩展期，PR 吞吐稳定，社区参与健康。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### ✅ 今日合并 / 关闭的 PR

| PR | 类型 | 作者 | 说明 |
|---|---|---|---|
| [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | Bugfix | Koshkoshinsk | 修复 Agent 定时任务的 `current_time` 生成逻辑，使任务在执行时能获取当前运行时间（含星期信息），修复了定时调度中时间戳 fallback 的兼容性问题 |

**评估：** 此 PR 修复了 Agent Runner 的核心调度机制，对依赖定时任务的 agent 组具有实际稳定性意义，项目健壮性小幅提升。

### 🔄 待合并的重要 PR

| PR | 类型 | 作者 | 说明 |
|---|---|---|---|
| [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | Bugfix | dim0627 | 修复 agent-to-agent 通信：禁止内置 `SendMessage` 被重复调用，确保多 agent 消息路由正确 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | Refactor | zvi-fried | 为 Skill 添加 host seam 抽象层，支持 skill 自持能力注册，为后续能力扩展打下架构基础 |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Bugfix | omerh | **修复 Discord webhook 关键 Bug**：`custom_id` 解析时未剥离 `\n` 分隔符，导致所有审批按钮实际响应为"拒绝"，无论用户点击哪个选项 |

---

## 4. 社区热点

### 🔥 关注 Issue / PR

**[Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006) — Docker Socket Permission Denied on Debian 12 LXC**

- **状态：** OPEN，最近更新于 2026-08-05
- **贡献者：** dooha333
- **热度：** 0 👍，1 条评论
- **诉求分析：** 用户在 Proxmox VE LXC 容器中执行 `bash nanoclaw.sh` 安装 Docker 后，`usermod` 已将用户加入 `docker` 组，但后续安装步骤仍报 socket permission denied。该问题与 LXC 容器的特权隔离机制有关，属于安装脚本对 LXC 环境适配不足。反映出社区对非标准容器环境（尤其是 Proxmox）安装体验的诉求。

---

## 5. Bug 与稳定性

| 问题 | 严重程度 | PR | 状态 |
|---|---|---|---|
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) Discord 审批按钮全部误判为拒绝 | 🔴 **高** — 直接影响用户交互与审批流程 | 已有 PR #3185，待合并 | 未合并 |
| [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) Agent 定时任务时间戳 fallback 错误 | 🟡 中 — 影响历史任务兼容，新任务正常 | ✅ 已合并 | 已解决 |
| [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) LXC 环境下 Docker socket 权限拒绝 | 🟠 中 — 影响特定部署环境的安装成功率 | 暂无 fix PR | 待处理 |

**稳定性评估：** Discord 审批 Bug 影响面大但已被定位，合并后即可修复。整体 Bug 密度处于合理水平。

---

## 6. 功能请求与路线图信号

### 📌 新功能信号：Dial 渠道接入

| PR | 作者 | 说明 |
|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | OmriBenShoham | 新增 **Dial Channel Adapter**，支持 SMS + AI 语音通话渠道接入 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | OmriBenShoham | 将 Dial 加入 channel picker 和 wizard（`runChannelSkill` 模型），完善设置流程 |

**评估：** 两条 PR 由同一贡献者提交，构成完整功能。Dial 渠道的引入显著扩展了 NanoClaw 的通信渠道矩阵，预示着项目正在向多模态交互（语音 + SMS）方向演进。两条 PR 均处于待合并状态，预计将在下一版本中一并发布。

### 📌 架构信号：Skill 能力自持

- [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) 引入 host seam 抽象层，使 skill 可自主注册能力，降低了耦合。这是面向长期可扩展性的重构，值得纳入路线图关注。

---

## 7. 用户反馈摘要

| 来源 | 反馈内容 | 情感倾向 |
|---|---|---|
| [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | LXC 容器内安装脚本未正确处理 `docker` 组权限传递，导致后续步骤失败 | 😕 痛点：部署环境兼容性不足 |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Discord webhook 审批全部误判为拒绝，影响关键交互流程 | 😤 高优先级 Bug，严重影响用户体验 |
| [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | Agent-to-agent 消息路由存在内置 SendMessage 被错误拦截的问题 | 🛠 开发者反馈，影响多 agent 协作场景 |

---

## 8. 待处理积压

| 类型 | ID | 标题 | 创建时间 | 风险 |
|---|---|---|---|---|
| 🐛 Bug | [Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Debian 12 LXC Docker socket 权限问题 | 2026-04-25（>3 个月） | 中 — 影响特定环境安装，建议维护者关注并补充 LXC 适配说明或脚本修复 |
| 🔄 PR | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Discord 审批 Bug Fix | 2026-08-04 | 高 — 关键 Bug 修复，待合并 |
| 🔄 PR | [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | Agent 消息路由修复 | 2026-08-05 | 中 — 多 agent 场景关键修复 |

---

## 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 6 PR / 24h，贡献节奏稳定 |
| 代码质量 | ⭐⭐⭐⭐ | 含 Refactor 与多类型 PR，贡献者遵循指南 |
| 响应速度 | ⭐⭐⭐ | Issue #2006 已滞留 3 个月未获响应 |
| 稳定性风险 | ⚠️ 中 | Discord 审批 Bug 影响面大，需尽快合并修复 |
| 路线图清晰度 | ⭐⭐⭐⭐ | Dial 渠道与 Skill 架构扩展方向明确 |

**结论：** NanoClaw 今日项目推进节奏健康，多 agent 通信和 Discord 稳定性修复正在收尾，Dial 渠道扩展标志项目进入新阶段。建议优先合并 #3185 和 #3187 两个关键修复，并关注 Issue #2006 的 LXC 适配方案。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目日报 — 2026-08-05

---

## 1. 今日速览

NullClaw 项目今日整体活跃度偏低，过去 24 小时内无新的 Issue 创建或关闭，也无新版本发布。唯一社区动态来自 PR #981（待合并），为 xAI Grok CLI 提供了新的 provider 支持。项目处于功能迭代平稳期，维护节奏正常，无紧急风险信号。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | 🔵 待合并 | 新增 `grok-cli` provider，遵循与 `codex-cli` / `gemini-cli` / `claude-cli` 相同的 spawn-per-request 架构模式，扩展了对 xAI Grok CLI 的本地集成支持 |

**进展评估：** 今日无合并/关闭的 PR，项目当前处于等待审查状态。PR #981 已提交近一周，属于常规功能扩展，合并进度正常。

---

## 4. 社区热点

今日无活跃 Issue 或高讨论量 PR。社区焦点暂时集中在：

- **[PR #981](https://github.com/nullclaw/nullclaw/pull/981)** — 新增 Grok CLI Provider
  - 作者 `valonmulolli` 于 7 月 29 日提交，最近一次更新为 8 月 4 日
  - 该 PR 响应了用户对本地 Grok CLI 集成的明确需求，与项目已有其他 CLI provider 的设计保持一致
  - 目前尚无评论和 👍，处于等待维护者审查阶段

---

## 5. Bug 与稳定性

今日无新报告 Bug 或稳定性问题。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 优先级判断 |
|---|---|---|
| [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | 支持 xAI Grok CLI 作为本地 provider | 🟡 中等 — 与现有 provider 架构一致，属于生态扩展 |

**判断：** PR #981 符合 NullClaw 扩展多 provider 支持的路线图方向，预计将在审查通过后纳入下一个 patch 或小版本。

---

## 7. 用户反馈摘要

今日无新 Issue 评论，无直接用户反馈更新。

---

## 8. 待处理积压

| 类型 | 条目 | 状态 | 建议 |
|---|---|---|---|
| PR | [#981](https://github.com/nullclaw/nullclaw/pull/981) | 待合并（提交于 2026-07-29，距今 7 天） | 建议维护者尽快完成审查，避免功能延迟纳入 |

---

**项目健康度评估：🟢 正常**  
活跃度：低 | 稳定性：无风险 | 维护响应：正常（PR 待合并中）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

IronClaw 在过去24小时保持高活跃度：共50条Issue更新（38新开/活跃、12关闭）与50条PR更新（29待合并、21已合并/关闭），开发节奏紧凑。v1.1.0-rc.1 于昨日发布，标志着项目从1.0.0正式迈入扩展能力与错误可恢复性为核心诉求的下个里程碑。架构重构（Wave 5/WS7）持续推进，今日多个WS6遗留事项合并入main，代码库组织更加清晰。用户反馈聚焦于跨对话记忆可靠性、支付流程与skill可见性等痛点，社区参与度较高。

---

## 2. 版本发布

### `ironclaw-v1.1.0-rc.1`（2026-08-03）

**核心变更：**
- 注册任意托管 MCP 服务器，扩展工具生态
- 支持从 IronHub deep links 安装技能/工具
- 跨渠道持久化文件附件
- Slack `/ironclaw` slash commands
- 错误可恢复性全面改造（模型可见错误原因+恢复路径）

**破坏性变更提示：** 参见 PR #5598，`ironclaw_common` 从 0.4.2 → 0.5.0（⚠ API breaking），`ironclaw_skills` 从 0.3.0 → 0.4.0（⚠ API breaking）。

**迁移注意：** Issue #7178 指出 1.0.0-rc.1 → 1.1.0-rc.1 的启动迁移当前**非无损耗**，需关注后续修复。

- 📎 [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.0-rc.1)
- 📎 [Issue #7178 — 启动迁移无损耗化](https://github.com/nearai/ironclaw/issues/7178)

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 摘要 | 状态 |
|---|---|---|---|
| [#7189](https://github.com/nearai/ironclaw/pull/7189) | WS2 重构 | 清除 extension_host→product 残留（认证/对话词汇、自由函数、D-A 工厂端口） | ✅ 已合并 |
| [#7187](https://github.com/nearai/ironclaw/pull/7187) | WS6/WS5 清理 | RebornRuntime 瘦身、typed ExtensionId、domain 清理 | ✅ 已合并 |
| [#7186](https://github.com/nearai/ironclaw/pull/7186) | WS6 重构 | 从 composition 驱逐 service cluster（admin用户、trace capture、路由挂载等） | ✅ 已合并 |
| [#7179](https://github.com/nearai/ironclaw/pull/7179) | WS6 模块章程 | mcp 单文件拆分（2,767行 lib.rs → 7个模块）、auth/webui 双引擎拆分 | ✅ 已合并 |
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | Bug修复 | 修复 skill_install 后技能不可见问题（DB-backed tree） | ✅ 已合并 |

### 进行中关键 PR

- **#7212**（WS7 2/2）：wasm lane 迁移 + Wave-5 收尾，将 `ironclaw_wasm` 移入家族目录
- **#7211**（CI修复）：识别 `node:assert` 方法，解决前端回归测试误报（关联 #7209）
- **#7210**（WebUI清理）：删除死代码 `ThreadSidebar` 组件及 orphaned i18n keys
- **#7205**（UX改进）：打开 thread 时自动聚焦 composer，提升交互流畅度
- **#7157**（新功能）：显式 channel delivery tool，双通道模型（对话生命周期 + 通知渠道）

**整体判断：** 项目正从代码重构向功能补强过渡，Wave 5 收尾后重心转向 v1.1.0 功能完善与用户体验打磨。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 状态 | 核心议题 |
|---|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 15 | ✅ 已关闭 | error-recoverability epic — 模型从100%错误中恢复的契约 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 4 | ✅ 已关闭 | Hermetic capability 与 journey testing 平台 |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | 4 | ✅ 已关闭 | clippy lint 在 `ironclaw_reborn_config` 包集失败 |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | 3 | 🟡 开放 | Instance 删除失败，re-login 卡在 "Loading your agents..." |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | 3 | 🟡 开放 | extension_host → loops 重分层设计调整 |

**热点分析：**
- **#6284** 作为 v1.1.0 核心 epic 已关闭，表明错误恢复机制的基础架构已落地，后续将进入实测验证阶段。
- **#6752** 反映托管环境的实例生命周期管理存在缺陷，影响用户信任，需优先处理。
- **#7145** 体现核心开发者对架构一致性的严格要求，继续推进 WS2 残余清理。

---

## 5. Bug 与稳定性

### 今日报告/关注的 Bug（按严重程度排序）

| 级别 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#7209](https://github.com/nearai/ironclaw/issues/7209) | CI regression gate 无法识别 `node:assert` 风格断言，导致正确前端 PR 误报失败 | ✅ [#7211](https://github.com/nearai/ironclaw/pull/7211) |
| 🟠 中 | [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance 删除失败，re-login 时界面卡死 | 无 |
| 🟠 中 | [#7192](https://github.com/nearai/ironclaw/issues/7192) | Optimistic user messages 锚点错误，用户消息渲染在 agent 回复下方 | 无 |
| 🟡 低 | [#7191](https://github.com/nearai/ironclaw/issues/7191) | `builtin.time` 工具缺乏相对偏移计算，解析 "24 hours ago" 失败 | 无 |
| 🟡 低 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨对话记忆不可靠，上下文丢失 | 无 |
| ✅ 已修 | [#7168](https://github.com/nearai/ironclaw/issues/7168) | Agent 安装的 skill 不可见 | ✅ [#7171](https://github.com/nearai/ironclaw/pull/7171) |

**稳定性评估：** CI 基础设施问题已快速修复（#7209→#7211），响应迅速。用户侧 Bug 集中在记忆持久化与 UI 渲染时序，建议纳入 v1.1.0 正式 Release 前的修复清单。

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 优先级 | 路线图契合度 |
|---|---|---|---|
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | 共享 Slack channel 可作为 outbound delivery target | Medium | ✅ 与 #7157 channel delivery tool 设计一致，可纳入 v1.1.0 |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | 支持 run-now 手动触发 automation | Medium | ✅ 补全 automation 操作面（list/pause/resume/delete → +fire） |
| [#7183](https://github.com/nearai/ironclaw/issues/7183) | Per-user LLM 模型选择（当前仅 admin 可配） | Low-Medium | ⚠ 涉及权限模型，需评估 |
| [#7203](https://github.com/nearai/ironclaw/issues/7203) | Skill 脚本通过真实 mount 而非拷贝暴露 | High | ✅ 与 #7171 配套，解决 multi-tenant 执行隔离 |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Skill 可靠发现、路由与激活 Epic | High | ✅ v1.1.0 核心能力之一 |

**路线图判断：** v1.1.0 将围绕"扩展能力"与"错误恢复"双主线完成功能闭环，#7193（手动触发）与 #7194（outbound target）大概率随 RC 同步落地。

---

## 7. 用户反馈摘要

### 痛点
- **跨对话记忆丢失**（#7185）：多位测试者独立报告同一问题，上下文无法在 conversation 间可靠传递
- **支付/身份流程不稳定**（#7105）：用户建议将 identity/session 与 payments 抽离为独立服务
- **Skill 安装后不可见**（#7168，已修复）：`skill_install` 返回 `{"installed":true}` 但技能不出现，影响用户信任

### 满意点
- IronHub 集成预期（#6731）：用户认可"运行时发现/安装工具"的扩展模式
- Error recoverability 方向（#6284）：社区对"模型可见错误+自动恢复"的设计高度认同

### 使用场景反馈
- 用户希望按 skill 效果归因日志（#7199）："记录候选 skill 存在但未选中 vs. 选中后改变结果"，便于评估 skill 价值
- 多租户场景下 skill 执行隔离需求（#7207）：bundled script 无法在 tenant sandbox 中运行

---

## 8. 待处理积压

| Issue | 描述 | 风险 | 建议关注 |
|---|---|---|---|
| [#7144](https://github.com/nearai/ironclaw/issues/7144) | Trace contribution pipeline 29条遗留问题（由 #7139 审查暴露） | 中 | 需 CodeRabbit 后续 pass 跟进 |
| [#7147](https://github.com/nearai/ironclaw/issues/7147) | Architecture ratchets 携带 untracked slack，3个 PR 持有不同基线值 | 中 | doc-truth audit 发现，影响架构一致性 |
| [#7151](https://github.com/nearai/ironclaw/issues/7151) | Composition mass gate 分母被 feature inflow 污染，gate 虚绿 | 高 | 架构健康度指标失真 |
| [#7178](https://github.com/nearai/ironclaw/issues/7178) | 1.0.0-rc.1 → 1.1.0-rc.1 启动迁移非无损耗 | 高 | 影响存量用户升级体验 |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance 删除失败 + re-login 卡死 | 高 | 托管用户直接受影响 |

---

**项目健康度评级：🟢 良好**
- 开发节奏稳定，重构与功能并行推进
- CI 基础设施问题响应迅速
- 用户反馈渠道畅通，痛点有明确跟进
- 建议优先处理 #7178（迁移）与 #6752（实例删除）以保障 v1.1.0 正式发布质量

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 | 2026-08-05

## 1. 今日速览
LobsterAI 今日保持中高强度迭代节奏。过去24小时共产生 14 条 PR 记录（11 条已合并/关闭，3 条待审），活跃度较高，工作主线集中在 `release/2026.8.3` 特性合入、启动积分活动（startup credit campaign）体验打磨与依赖链升级。新增 1 个 Issue（#1200），为历史遗留的 NIM SDK 枚举映射 Bug。整体项目健康度良好，维护者主导发版与依赖治理，社区贡献者活跃提交功能修复。

## 2. 版本发布
今日无新 Release Tag 生成。PR #2430 已于昨日完成 `release/2026.8.3` 至 `main` 的合并，该版本核心内容涵盖：原生积分奖励活动接入、首屏登录体验简化、Artifact 自动预览开关、模型错误处理优化及 Windows 安装包稳定性改进。正式 Tag 预计随 CI 流水线在近期打版推送。

## 3. 项目进展
- **发版收尾**：[#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) 完成 2026.8.3 特性分支合入，主线发布周期进入最后阶段。
- **运营活动闭环**：[#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) 至 [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) 集中完善了启动积分活动的本地素材打包、UI 细节裁剪、错误埋点与奖励弹窗逻辑，修复了最终奖励自动拦截体验问题，并补齐了登录跳转链路的 Analytics 字段。
- **可观测性修复**：[#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) / [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) 修复了 `rlog` 日志记录异常，提升内部排障与线上问题定位效率。
- **依赖治理**：Dependabot 批量推进 `cross-env` (#1279)、`react-dom` (#1280)、`vite` (#1281) 及 Electron 组件组 (#1277) 升级，降低运行时兼容性与安全风险。
**进展评估**：今日以“发版合并+活动精细化+技术债清理”为核心，项目整体向前推进约 1 个发版周期，代码库处于稳定收敛状态。

## 4. 社区热点
- **Issue #1200** | [链接](https://github.com/netease-youdao/LobsterAI/issues/1200)
- **PR #1201** | [链接](https://github.com/netease-youdao/LobsterAI/pull/1201)
**热点分析**：该 Issue 精准指出 `nimGateway.ts:917` 在调用 `fetchTeamName` 时，对 `superTeam` 与普通群传入了错误的 `teamTypeNum`，导致 SDK 将超大群误判为 P2P 或普通群，@提及机器人时群名回退为原始 ID。PR #1201 已提供与文件头部注释一致的 1 行修复方案。尽管因 `stale` 机制未被自动合并，但该问题直击云信超大群协作场景的核心体验，隐含大量实际用户痛点，具备高优先级修复价值。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 状态 | 关联链接 |
|:---:|:---|:---|:---|
| 🟡 中 | NIM 超大群/普通群 `teamTypeNum` 枚举映射错误，导致群名解析失败、回退显示原始 ID | 有 Fix PR，待合并 | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) |

今日无崩溃、内存泄漏或高严重性回归报告。依赖升级进一步收窄了运行时潜在风险面，整体稳定性评级为 **良好**。

## 6. 功能请求与路线图信号
- **PR #2374** | [链接](https://github.com/netease-youdao/LobsterAI/pull/2374)
  请求在 `Settings → General` 增加“永久隐藏侧边栏广告”开关（关联 [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)）。此前仅支持临时 dismiss，用户长期诉求明确。该 PR 状态开放且实现完整，预计将纳入近期维护版本，反映项目在**用户体验精细化**与**商业化平衡**上的持续优化方向。
- 启动积分活动相关 PR 密集提交，表明当前路线图重点在于**用户拉新/促活运营体系**的技术支撑与数据埋点完善。

## 7. 用户反馈摘要
- **核心痛点**：
  - 侧边栏广告缺乏永久关闭选项，影响沉浸式使用体验（#2342/#2374）。
  - 云信超大群场景下，机器人无法正确解析并展示群名称，@提及功能体验断裂（#1200）。
- **正向反馈**：
  - 首屏登录流程简化与 Artifact 自动预览控制开关受到认可。
  - 启动积分活动的海报裁切、按钮命中区对齐、多语言错误提示等 UI 细节打磨到位。
  - Windows 安装包稳定性提升改善了一键安装场景的可用性。
- **典型场景**：重度依赖云信超大群协作的企业/社群用户、关注界面整洁度的个人用户、需要精细控制积分权益领取流程的用户。

## 8. 待处理积压
| 编号 | 类型 | 创建时间 | 状态 | 建议 |
|:---|:---|:---|:---|:---|
| #1200 / #1201 | Bug /

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# 📊 Moltis 项目动态日报 | 2026-08-05

---

## 1. 今日速览

Moltis 项目今日整体活跃度**较低**。过去24小时内无 Issues 更新、无新版本发布，仅涉及 **1 条 Dependabot 维护性 PR**（#1184），用于升级 `undici` 依赖版本。项目当前处于**低维护模式**，无新功能开发或重大修复活动，建议关注后续是否有社区贡献者活跃。

---

## 2. 版本发布

> ⚠️ 今日无新版本发布

| 版本 | 发布日期 | 更新内容 |
|------|----------|----------|
| — | — | — |

**下一步版本预估**：暂无信号，当前无合并的 PR 或关闭的 Issues，发布节奏可能放缓。

---

## 3. 项目进展

### 合并/关闭的 PR
无

### 待合并 PR

| PR # | 类型 | 标题 | 作者 | 状态 | 链接 |
|------|------|------|------|------|------|
| #1184 | `chore` | bump undici from 7.28.0 to 7.29.0 | dependabot[bot] | OPEN | [PR #1184](https://github.com/moltis-org/moltis/pull/1184) |

**进展分析**：今日仅有一条自动依赖升级 PR，无功能开发或 bug 修复推进。项目整体**未向前迈进**，维护工作以自动化依赖安全更新为主。

---

## 4. 社区热点

### 活跃讨论
无社区热点。今日无新 Issue 或 PR 讨论。

### 待合并 PR 详情

**[#1184](https://github.com/moltis-org/moltis/pull/1184)** — `chore(deps-dev): bump undici from 7.28.0 to 7.29.0`
- 范围：`/website` 目录
- 类型：Dependabot 自动维护
- 评论数：0 | 👍：0
- 分析：纯依赖升级，无社区讨论热点

---

## 5. Bug 与稳定性

> 🟢 今日无 Bug 报告

| 严重程度 | 数量 | 说明 |
|----------|------|------|
| 严重 | 0 | 无 |
| 中等 | 0 | 无 |
| 轻微 | 0 | 无 |

**项目稳定性评估**：无新报告，基于现有 PR 判断，项目整体稳定性良好。

---

## 6. 功能请求与路线图信号

> 📭 今日无新功能请求

**路线图信号**：
- 当前无社区成员提出功能需求或改进建议
- 无 WIP (Work in Progress) PR 可参考
- 建议关注仓库 Discussions 区或社区频道获取早期信号

---

## 7. 用户反馈摘要

> 📭 今日无用户反馈

**近期反馈趋势**（基于无新数据）：
- 无新痛点或满意度变化
- 建议定期审计 Issues 区历史反馈

---

## 8. 待处理积压

| 类型 | 数量 | 说明 |
|------|------|------|
| 长期未响应 PR | 1 | #1184（Dependabot 维护 PR） |
| 长期未响应 Issue | 0 | 无 |

**待关注项**：
- **[PR #1184](https://github.com/moltis-org/moltis/pull/1184)** — Dependabot 依赖升级，待维护者合并

---

## 📈 项目健康度评分

| 指标 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐☆☆☆☆ | 仅 1 条自动 PR |
| 维护响应 | ⭐⭐☆☆☆ | Dependabot PR 待合并 |
| 社区参与 | ⭐☆☆☆☆ | 无讨论、无反馈 |
| 稳定性 | ⭐⭐⭐⭐☆ | 无 bug 报告 |
| 整体健康度 | ⭐⭐☆☆☆ | **低活跃，需维护者关注** |

---

**报告生成时间**：2026-08-05  
**数据来源**：GitHub API (moltis-org/moltis)  
**分析周期**：过去24小时 (2026-08-04 ~ 2026-08-05)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw (QwenPaw) 项目日报 — 2026-08-05

## 1. 今日速览

过去 24 小时 CoPaw 项目保持高度活跃：共 26 条 Issues 更新（16 新开/活跃，10 已关闭）与 47 条 PR 动态（25 待合并，22 已合并/关闭），合并率约 47%，整体健康度良好。今日无新版本发布，但多个关键 Bug 修复与功能增强 PR 已合并，包括 cron 状态持久化、桌面端口 socket 处理、DingTalk 自动填充凭证等。用户反馈集中在 thinking-mode 兼容性问题、大型工具输出导致的会话性能瓶颈，以及 v2.1.0b1 桌面版的稳定性回归。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 类型 | 贡献者 | 说明 |
|----|------|--------|------|
| [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) | Bug Fix | axelray-dev | **cron pause/resume 持久化**：修复定时任务状态重启后丢失的问题，将 `enabled` 写入 job 存储，补充了回归测试。 |
| [#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) | Feature | zhaozhuang521 | **OS 增强**：全屏桌面、菜单栏、Dock、Launchpad、Spaces、Mission Control 等系统级交互功能合并。 |
| [#6503](https://github.com/agentscope-ai/QwenPaw/pull/6503) | Feature | yuanxs21 | **智能体级 Token 统计**：通过扫描 per-turn metadata 计算当前 agent 的 prompt/completion tokens 和 LLM 调用次数，与全局统计并存。 |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | Bug Fix | RerankerGuo | **记忆压缩前刷新 pending turns**：修复 MemoryMiddleware 在压缩前未持久化待处理对话的缺陷。 |
| [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) | Bug Fix | RerankerGuo | **空 batch 占位符归一化**：修复部分 Responses-compatible provider 发出空 `batch` 导致模式冲突的问题。 |
| [#6703](https://github.com/agentscope-ai/QwenPaw/pull/6703) | Bug Fix | zhijianma | **safe_swap 空文件锁初始化修复**：防止文件锁在空文件场景下初始化失败。 |
| [#6671](https://github.com/agentscope-ai/QwenPaw/pull/6671) | Bug Fix | jinglinpeng | **Computer Use 包身份修复**：将 Computer Use 迁移至 `plugins/bundle/`，对齐 beta 插件身份并保留安全恢复机制。 |

**整体评估**：今日合并以稳定性修复为主（cron、memory、safe_swap、batch 归一化），配合桌面 OS 增强和 token 统计功能，项目向生产可用性稳步推进。

---

## 4. 社区热点

### 高关注 Issues

- **[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)** — 支持 GPT-5.6 prompt caching 参数（13 评论）
  - 用户希望 Agent 循环多轮对话复用缓存前缀以降低延迟和成本，涉及 Core/Backend 组件。
  
- **[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)** — 任务产出物按任务目录隔离（6 评论）
  - 用户反映 media 目录堆积混乱，建议按任务创建子目录。

- **[#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667)** — DeepSeek thinking mode 多轮对话 reasoning_content 丢失（5 评论）
  - OpenAI formatter 跳过 ThinkingBlock 后导致多轮推理断裂，存在 workaround 但不完整。

- **[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)** — 增加频道重试功能（4 评论）
  - 自建 Matrix 场景下 QwenPaw 启动快于服务导致连接失败，缺少健康检测和重试机制。

- **[#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)** — 按需加载技能（On-Demand Skill Loading）（1 评论）
  - 27+ 技能场景下系统提示词消耗 8000-10000 tokens（占 25-30%），用户呼吁按需加载。

---

## 5. Bug 与稳定性

### 已合并/关闭的 Bug

| Issue | 标题 | 状态 |
|-------|------|------|
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | 超大工具输出导致会话加载卡死，建议输出截断和历史消息分页 | ✅ Closed |
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | cron pause/resume 不持久化 enabled 状态 | ✅ Closed（#6691 已修复）|
| [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | 对话框拖入文件直接读取原路径 | ✅ Closed |
| [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | 防重复功能异常触发 doom loop | ✅ Closed |
| [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | 智能体级 token 统计需求 | ✅ Closed（#6503 已实现）|
| [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | 时间戳时区转换错误 | ✅ Closed |

### 待修复 Bug（按严重程度）

| Issue | 严重程度 | 标题 | Fix PR |
|-------|----------|------|--------|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | 🔴 高 | v2.1.0b1 注入 PYTHONHOME 导致子进程崩溃（encodings ModuleNotFoundError） | — |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | 🔴 高 | v2.1.0b1 browser SDK open() 始终失败：WireProtocolError: Target crashed | — |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | 🟠 中 | WeChat iLink: context_token 被 typing indicator 消费，回复被拒绝 | — |
| [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) | 🟠 中 | 纯微信频道下审批提示不可达（5 分钟自动拒绝） | — |
| [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | 🟠 中 | 上游网关 503 SSE in-stream 错误不重试直接失败 | — |
| [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | 🟠 中 | thinking 模式 session 含 tool calls 时 reasoning_content 回传导致 400 错误 | — |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | 🟡 低 | OpenRouter multimodal probe 错误覆盖已记录的能力标记 | — |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有 PR | 评估 |
|------|-------|---------|------|
| GPT-5.6 prompt caching 支持 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | — | 成本优化诉求明确，预计纳入后续版本 |
| 任务产出物目录隔离 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | — | 用户体验优化，低风险高回报 |
| 频道重试与健康检测 | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | — | 生产环境稳定性关键需求 |
| 按需技能加载 | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | — | 长技能库用户痛点，路线图信号强 |
| 全局规则（.agent/.claude 风格） | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | — | 系统级配置诉求 |
| 多模型并行独立执行 | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | — | 高级用户工作流需求 |
| 会话分叉（Session Fork） | — | [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | PR 已提交待合，支持右键分叉会话 |
| 工作区路径引用 | — | [#6710](https://github.com/agentscope-ai/QwenPaw/pull/6710) | PR 已提交，Console 聊天框支持文件/文件夹 chip |
| 消息文本一键复制 | — | [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) | PR 待 Review，提升聊天交互体验 |

---

## 7. 用户反馈摘要

**痛点聚焦：**

1. **桌面版 v2.1.0b1 稳定性问题突出**：[#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) 和 [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) 均指向 beta 版 Python 子进程崩溃和 Playwright 连接失败，建议正式版发布前优先解决。

2. **Thinking-mode 生态兼容问题**：[#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) 和 [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) 反映 DeepSeek 等 thinking 模型在多轮工具调用场景下的 `reasoning_content` 传递存在缺陷，影响推理链完整性。

3. **大规模技能场景性能瓶颈**：[#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) 用户反馈 27+ 技能导致系统提示词膨胀 25-30%，消耗大量 token 预算。

4. **中文文件名处理优化**：[#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) 已合并，修复上传中文文件后只显示 UUID 路径、丢失原始文件名的问题。

5. **时区显示错误**：[#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) 已修复 naive UTC 时间戳被误解析为用户本地时间的问题。

---

## 8. 待处理积压

| 类型 | 条目 | 链接 | 建议 |
|------|------|------|------|
| Bug | v2.1.0b1 PYTHONHOME 注入崩溃 | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | 🔴 高优，影响桌面版可用性 |
| Bug | v2.1.0b1 browser SDK Target crashed | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | 🔴 高优，影响浏览器自动化功能 |
| Bug | WeChat iLink token 消费异常 | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | 🟠 中优，影响微信频道稳定性 |
| Bug | 503 SSE in-stream 错误无重试 | [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | 🟠 中优，网关层容错增强 |
| Bug | thinking 模式 reasoning_content 回传失败 | [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | 🟠 中优，模型兼容性修复 |
| Feature | 频道重试与健康检测 | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | 纳入版本规划 |
| Feature | 按需技能加载 | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | 路线图长期需求 |
| PR | Session Fork | [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | 待 Review 合并 |
| PR | 工作区路径引用 | [#6710](https://github.com/agentscope-ai/QwenPaw/pull/6710) | 待 Review 合并 |
| PR | 消息一键复制 | [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) | 待 Review 合并 |
| PR | UTC/POSIX TZ 环境值处理 | [#6706](https://github.com/agentscope-ai/QwenPaw/pull/6706) |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报
**日期：2026-08-05** | 数据周期：过去24小时

---

## 1. 今日速览

ZeroClaw 今日保持高活跃开发节奏，共产生 47 条 Issue 与 50 条 PR，社区参与度持续高涨。**安全治理成为今日核心议题**——多个 S0 级权限隔离漏洞被发现并进入修复流程，同时维护者同步推进了 RFC 决策队列的规范化建设。项目整体健康度良好：PR 合并率约 2%（1/50），但待合并队列积压 49 条，需关注维护者审查产能。无新版本发布。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭 PR（1条）
- **#9520** [已关闭] 修复 skills 在 compact prompt mode 下未遵循 `always: true` frontmatter 的 Bug（IftekharUddin）——**意义**：恢复了安全/策略关键技能指令的内联保证，填补了 compact 模式下的功能回退。

### 关键进行中 PR
| PR | 主题 | 影响 |
|---|---|---|
| **#9757** | Anthropic 工具结果图片嵌套传递修复 | 修复多模态场景下图片丢失问题 |
| **#9314** | Telegram long-poll offset 提前推进修复 | 解决瞬态失败导致消息永久丢失的 Bug |
| **#9385** | WhatsApp Web `request_approval` 实现 | 完善人工审批工作流 |
| **#9109** | Hailo-Ollama 原生支持 | 扩展本地推理硬件生态 |
| **#9604** | Linq webhook 归属强制校验 | 安全修复，防止跨 agent 消息路由 |

**项目推进评估**：今日进度集中于**安全加固**与**渠道稳定性修复**，架构层 RFC 讨论同步活跃，为下一版本奠定了权限隔离与多模态支持的基础。

---

## 4. 社区热点

### 最活跃 Issues（按评论数）

1. **#8303 — Goal mode v1 RFC**（16条评论，1👍）
   - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
   - 核心诉求：为多轮 agent 交互提供可持续的目标追踪机制，避免重启上下文丢失。讨论涉及 restart handoff、channel admission、model-initiated control 等边界问题。

2. **#7155 — Shell 命令确认策略 RFC**（14条评论）
   - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
   - 核心诉求：引入 per-execution 风险分级确认 + Claude Code 风格 allow/ask/deny 策略。今日更新收窄了规范性范围，保留非规范性路线图。

3. **#9488 — 统一附件架构 RFC**（13条评论）
   - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)
   - 核心诉求：为 web chat 与 channels 建立一致的附件处理架构，与 #9487（会话所有权）协同设计。

### 活跃 Tracker
- **#8692** — Maintainer 决策队列 Tracker（9条评论）：规范 RFC 与设计 Issue 的审查流程
- **#8891** — 持久化内存 parity Tracker（8条评论）：协调多 PR  rollout 以对齐同行 agent runtime

**热点分析**：社区高度关注**安全治理框架**（shell 策略、权限隔离）与**架构标准化**（Goal mode、附件统一），反映项目正从功能扩张转向成熟度建设。

---

## 5. Bug 与稳定性

### S0 级安全漏洞（需紧急关注）

| Issue | 组件 | 问题描述 | Fix PR |
|---|---|---|---|
| **#9647** | memory | 知识图谱无 per-agent 归属，任意 agent 可读/写他者数据 | 待分配 |
| **#9646** | tools | session/channel 工具缺乏归属限制，可跨 agent 操作 | 待分配 |
| **#9565** | gateway | WhatsApp/Linq/WATI webhook 未 fail closed，未经认证的攻击者消息可直入 agent | #9604（Linq 部分） |
| **#9328** | verifiable-intent | `vi_verify` 评估约束时未验证凭证链 | 待分配 |

### S2 级体验问题

| Issue | 问题描述 | Fix PR |
|---|---|---|
| **#9718** | Telegram 双响应（tool_call + content）导致重复消息 | #9314（部分缓解） |
| **#9177** | Qwen3.6 JIT 加载失败 "Engine protocol startup aborted" | 未分配 |
| **#9697** | ZeroCode 无法连接 Windows Task Scheduler 启动的 daemon | 未分配 |

**稳定性评估**：今日安全漏洞暴露集中，尤其是**跨 agent 数据隔离**与**webhook 认证**两大问题，需维护者优先处理。

---

## 6. 功能请求与路线图信号

### 高优先级 RFC（可能被纳入下一版本）

| RFC | 状态 | 潜在版本归属 |
|---|---|---|
| **#8303** Goal mode v1 | 讨论中（16条评论） | vNext 核心功能 |
| **#7155** Shell 命令确认策略 | 规范性范围已收敛 | vNext 安全模块 |
| **#9488/#9487** 统一附件与会话所有权 | 协同设计阶段 | vNext 架构升级 |
| **#8832** Plugin Kanban board | 讨论中 | 插件生态扩展 |
| **#7100** Per-model 能力与 context window 配置 | 讨论中 | 配置层优化 |

### 已有 PR 实现的功能信号
- **#9324** A2A outbound client（Phase 1）——Agent-to-Agent 通信协议落地
- **#9109** Hailo-Ollama 支持——边缘设备推理生态扩展
- **#9350** Cron CLI delivery flags——任务调度能力完善

**路线图判断**：下一版本将聚焦**安全治理**（shell 策略、权限隔离）、**多 agent 协作**（Goal mode、A2A）与**多模态支持**（附件架构、图片传递）。

---

## 7. 用户反馈摘要

### 痛点提炼
1. **跨 agent 数据泄露风险**：#9647、#9646 反映多 agent 共享环境下用户担心知识图谱与 session 被越权访问
2. **Telegram 消息丢失**：#9314 涉及的 offset 提前推进问题，用户反馈瞬态失败导致消息永久丢失
3. **技能注入策略混乱**：#9520 修复前，compact 模式下 `always: true` 未生效，用户担心安全策略被绕过
4. **WhatsApp 人工审批缺失**：#9385 实现前，`always_ask` 工具默认拒绝，用户体验中断

### 正面反馈
- Hailo-Ollama 原生支持（#9109）获得边缘计算场景用户认可
- Goal mode RFC 讨论深度反映用户对**长期目标追踪**的强烈需求

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 建议优先级 |
|---|---|---|---|
| **#6850** Memory lifecycle 解耦 RFC | 2026-05-22 | 活跃（10条评论） | P1 ——架构基础 |
| **#6996** Granular sandbox policy RFC | 2026-05-28 | 进行中（7条评论） | P1 ——安全基石 |
| **#6971** Security UX & credential boundaries | 2026-05-27 | 活跃（9条评论） | P1 ——合规需求 |
| **#8043** Retire aardvark-sys crate | 2026-06-20 | 活跃（8条评论） | P2 ——技术债 |
| **#7929** Slash-command 统一注册表 | 2026-06-18 | 活跃（6条评论） | P2 ——体验一致性 |

### 待合并 PR 积压（49条）
- 部分 PR 已等待超过 2 周（如 #8313 skills compact 默认、#9109 Hailo-Ollama）
- **建议**：维护者需增加审查产能，或建立 PR 分层处理机制（security fix > feature > docs）

---

**报告生成时间**：2026-08-05 | **数据来源**：GitHub API (zeroclaw-labs/zeroclaw)

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*