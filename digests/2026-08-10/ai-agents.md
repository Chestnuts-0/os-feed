# OpenClaw 生态日报 2026-08-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-10 00:56 UTC

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



# OpenClaw 项目日报 | 2026-08-10

---

## 1. 今日速览

过去24小时 OpenClaw 共更新 Issues 500条（新开/活跃428，已关闭72）、PR 500条（待合并319，已合并/关闭181），项目处于高强度活跃期。今日无新版本发布，但合并了约10个重要修复 PR，主要集中在渠道稳定性（Telegram/Slack/ACP）、会话生命周期正确性及 UI 体验优化。社区最关注的问题仍为 DeepSeek v4 Flash 静默回复失败（#116277），该 Issue 虽已关闭但复发迹象明显，需持续跟进。整体项目健康度良好，大量 PR 标注为 move-only 重构，表明代码库正在系统性治理。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 说明 | 链接 |
|---|---|---|
| **#121284** [CLOSED] | `fix(sessions): fence lifecycle transcript writers` — 用事务预期状态检查修复四个生命周期 writer 的盲写问题，防止会话分支、checkpoint 恢复后状态不一致 | [链接](https://github.com/openclaw/openclaw/pull/121284) |
| **#121142** [CLOSED] | `fix(diagnostics): defer silent model-call aborts until provider request allowance expires` — 修复诊断事件中 timeoutSeconds 未正确传递导致过早静默中止的问题 | [链接](https://github.com/openclaw/openclaw/pull/121142) |
| **#121292** [CLOSED] | `fix(telegram): remove vacuous usage-limit assertion` — 删除重复的 Telegram 测试断言，清理冗余验证逻辑 | [链接](https://github.com/openclaw/openclaw/pull/121292) |
| **#121303** | `fix(auto-reply): expand Windows home paths in usage templates` — 修复 Windows 平台 `~\...` 路径未正确展开的问题，含 Unicode 和空格回归测试 | [链接](https://github.com/openclaw/openclaw/pull/121303) |
| **#121309** | `prep: retain delete-cleanup completion receipts` — 作为 #112623 的前置拆分，仅保留 Registry 层的完成收据，风险面控制在 session-state | [链接](https://github.com/openclaw/openclaw/pull/121309) |
| **#121308** | `refactor(channels): flatten channel-turn dispatch naming layers` — 将 channel inbound dispatch 的六层重命名合并为单一实现，消除跨层 re-export/alias 混乱 | [链接](https://github.com/openclaw/openclaw/pull/121308) |
| **#121278** | `fix(agents): scope quota failures to auth profiles` — 修复单 profile quota 耗尽导致整个 command lane 冻结30分钟的问题，影响多 profile 场景 | [链接](https://github.com/openclaw/openclaw/pull/121278) |
| **#121262** [CLOSED] | `fix(cloud-workers): support large Git workspaces` — 解除 Cloud Worker 25,000 条 mutation 上限导致的大仓库 workspace reconciliation 失败 | [链接](https://github.com/openclaw/openclaw/pull/121262) |
| **#121295** | `refactor(agents): move swarm family into subagents/swarm` — 子代理子系统重构第一枪，将 swarm 相关代码收敛至独立子目录 | [链接](https://github.com/openclaw/openclaw/pull/121295) |
| **#121286** | `fix(ui): confirm destructive sidebar session actions in-app` — 修复 Control UI 中 window.confirm 在嵌入式 WebView 内返回 false 导致误删会话的问题 | [链接](https://github.com/openclaw/openclaw/pull/121286) |

> **整体推进评估：** 今日合并的 PR 以稳定性修复和内部治理为主，直接面向用户的功能性发布较少。代码质量方向上，多轮 refactor PR 正在系统性地收敛历史技术债（channels naming、subagents 结构、transcript writer 一致性）。

---

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

**🔥 #116277 [CLOSED] — DeepSeek v4 Flash 静默回复失败（196条评论）**
> 作者: sloptop-the-terrible | 创建: 2026-07-30 | 影响: message-loss, ux-friction | [链接](https://github.com/openclaw/openclaw/issues/116277)
>
> 核心问题：deepseek/deepseek-v4-flash 模型在 Telegram 群消息场景中静默失败，返回 "No reply was generated for this message" 通用兜底。社区关注度极高，已关闭但问题尚未根除。

**⚠️ #121058 [OPEN] — 回复失败在 #116277 关闭后仍复发（19条评论）**
> 作者: sloptop-the-terrible | 创建: 2026-08-09 | 影响: message-loss | [链接](https://github.com/openclaw/openclaw/issues/121058)
>
> 监控 cron 在 #116277 关闭后继续记录新发生实例，说明该修复仅为临时缓解，根本原因未解决。

**🔧 #92201 [OPEN] — Embedded runner thinking signatures 间歇性无效（21条评论）**
> 作者: CarlCapital | 创建: 2026-06-11 | 影响: session-state, message-loss, auth-provider | [链接](https://github.com/openclaw/openclaw/issues/92201)
>
> Anthropic thinking blocks 的 signature 在 replay 时间歇性失效，且 recovery wrapper 因错误信息被泛化而无法触发。

**🛡️ #45740 [OPEN] — gh-issues skill 注入未清理的 issue body 到子代理 prompt（16条评论）**
> 作者: zients | 创建: 2026-03-14 | 影响: security | [链接](https://github.com/openclaw/openclaw/issues/45740)
>
> P1 安全 Issue：`skills/gh-issues/SKILL.md` 直接将原始 GitHub issue body 注入子代理 prompt，无任何 sanitization，存在 prompt injection 风险。

**💾 #91009 [OPEN] — Codex PreToolUse hook 导致 CPU 耗尽（18条评论）**
> 作者: aspalagin | 创建: 2026-06-06 | 影响: crash-loop, message-loss | [链接](https://github.com/openclaw/openclaw/issues/91009)
>
> Codex 集成在 tool call 时可能 spawn 多个 `openclaw-hooks` 进程，每个消耗 ~100% CPU，导致 gateway RPC 卡死。

**🔐 #10659 [OPEN] — Masked Secrets：阻止 Agent 访问明文 API Key（15条评论）**
> 作者: jmkritt | 创建: 2026-02-06 | 影响: session-state, security, auth-provider | [链接](https://github.com/openclaw/openclaw/issues/10659)
>
> 特性请求：希望 Agent 能使用 API Key 但不能读取明文，防 prompt injection 提取凭证。

### 社区诉求分析

用户反馈集中在三类痛点：**(1) 消息丢失/回复失败**（DeepSeek 系列、Telegram 重复消息 #96242）；**(2) 多代理协作稳定性**（subagent 生命周期 #47975、quota 影响全局 #121278）；**(3) 安全/隐私**（gh-issues 注入 #45740、Masked Secrets #10659）。

---

## 5. Bug 与稳定性

### 今日报告的高优先级 Bug

| Issue | 严重级别 | 描述 | Fix PR |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | P1 / diamond lobster | DeepSeek 静默回复失败在 #116277 关闭后仍复发，监控持续记录新案例 | ❌ 无 |
| [#121295](https://github.com/openclaw/openclaw/issues/121295) 关联 #91009 | P1 / diamond lobster | Codex hook 进程泄漏导致 CPU 100% + gateway 卡死 | 🟡 #111205（待合并，限制/禁用 native hook relay）|
| [#121014](https://github.com/openclaw/openclaw/issues/121014) 关联 | P2 / silver shellfish | Slack Enterprise Grid 延迟交互丢失 workspace scope | 🟢 #121014（待合并）|
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | P1 / platinum hermit | Windows exec/read 工具静默返回空输出（v2026.6.x 回归）| ❌ 无 |
| [#121278](https://github.com/openclaw/openclaw/issues/121278) 关联 | P1 / silver shellfish | 单 auth profile quota 耗尽冻结整个 command lane 30分钟 | 🟢 #121278（待合并）|
| [#121262](https://github.com/openclaw/openclaw/issues/121262) 关联 | P2 / diamond lobster | Cloud Worker 大 Git 仓库（>25k 条目）reconciliation 失败 | 🟢 #121262（已合并）|
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | P0 / diamond lobster | 6.11→7.1 升级后迁移预检阻断 gateway 启动，迁移表为空 | ❌ 无 |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | P1 / diamond lobster | 多独立路径导致 Telegram 重复发送消息 | ❌ 无 |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | P1 / diamond lobster | 6.x 状态迁移后 channel conversation-store SQLite 为空（0字节），破坏 MS Teams 主动发送 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 / silver shellfish | OpenClaw 泄漏 hook/tool 子进程，zombie 累积导致运行时退化 | ❌ 无 |

> **稳定性评估：** 今日无新 P0 级别 Issue 爆发，但多个长期 P1 Bug（#116277 复发、#94939 迁移问题、#97616 进程泄漏）尚未有合并的修复 PR，构成发布风险。#112395（升级阻断）为最新 P0，需优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 需求概述 | 已有 PR/信号 |
|---|---|---|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 分层 bootstrap 文件加载，按 session 类型（主代理/子代理/cron）选择性注入，节省 context 预算 | ❌ 无 PR，标 `needs-product-decision` |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets：Agent 可使用但不可见 API Key，防 prompt injection 泄露凭证 | ❌ 无 PR，标 `needs-product-decision` |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 按 Agent 粒度配置 dreaming，避免多 workspace 同时 dreaming 触发 OOM | ❌ 无 PR，标 `needs-product-decision` |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent 自主触发 context compaction（self-compact tool），无需用户干预 | ❌ 无 PR |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | Multi-Slot Memory Architecture：替换单一 memory slot，允许多 provider 同时处理不同记忆层 | ❌ 无 PR |
| [#112623](https://github.com/openclaw/openclaw/issues/112623) | 子代理完成后将 completion receipt 注入父代理 prompt，防止父代理重复 spawn 已完成工作 | 🟡 #121309（prep 拆分，已提交） |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | 多索引 embedding memory，支持 model-aware failover，避免混合向量空间 | ❌ 无 PR |
| [#47677](https://github.com/openclaw/openclaw/issues/47677) | Telegram reaction 作为一等公民的 agent wake-up 和执行触发器 | ❌ 无 PR |
| [#104018](https://github.com/openclaw/openclaw/issues/104018) | Readiness conditions & providers：插件通过 `api.registerReadinessCriterion` 注册健康检查条件 | 🟡 待 maintainer 决策，标 `needs proof` |

> **路线图判断：** `#112623`（子代理 completion 注入）已通过 #121309 进入拆分评审阶段，最可能纳入下一版本。`#104018`（readiness criteria）处于 RFC 评审期，维护者正在权衡是否纳入 V1。分层记忆和 per-agent dreaming 需求明确但未排期，属于中期路线图候选。

---

## 7. 用户反馈摘要

**痛点 Top 3：**
1. **消息丢失/静默失败**：DeepSeek v4 Flash 静默回复失败（#116277/#121058）是社区讨论最热烈的单一问题，用户反映监控 cron 持续记录新实例，说明临时修复未根治。
2. **升级迁移破坏性**：多个用户报告从 5.x/6.x 升级后的数据丢失问题，包括 cron store 迁移无声无息（#90378）、channel SQLite 为空（#94939）、gateway 启动被迁移预检阻断（#112395）。
3. **Windows 兼容性退化**：#105528 报告 Windows 上 exec/read 工具静默返回空输出

---

## 横向生态对比



# 2026-08-10 个人 AI 助手/自主智能体开源生态横向对比分析

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**"一超多强、分层演化"**格局。OpenClaw 以 500+ Issues/PR 的日活跃度领跑，代码库进入系统性治理阶段；Hermes Agent、IronClaw、ZeroClaw、CoPaw 构成第二梯队，聚焦 Desktop 客户端稳定性、多渠道接入与工具调用优化；NanoClaw 和 PicoClaw 在垂直场景（CLI、IoT/边缘）差异化竞争；LobsterAI、Moltis 等中小型项目处于维护或特定功能探索期。生态整体从"功能堆叠"转向"稳定性与安全"深耕。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PR (24h) | Release | 健康度 | 核心特征 |
|------|-------------|---------|---------|--------|----------|
| **OpenClaw** | 500 | 500 | 无 | 🟢 良好 | 高强度活跃，系统性治理技术债 |
| **Hermes Agent** | 50 | 50 | 无 | 🟡 中等 | Desktop 稳定性攻坚，安全 PR 集中 |
| **IronClaw** | 22 | 27 | 无 | 🟢 良好 | 工具发现优化，Slack 集成长期痛点 |
| **CoPaw** | 17 | 50 | 无 | 🟢 良好 | 审批体验优化，前端渲染修复 |
| **ZeroClaw** | 50 | 50 | 无 | 🟡 待评估 | 治理收紧，安全加固倾向明显 |
| **NanoClaw** | 1 | 16 | 无 | 🟡 中等 | 合并效率低（0合并），Signal 附件积压 |
| **PicoClaw** | 3 | 6 | 无 | 🟢 良好 | SSRF 安全修复，快速响应 Issue→PR |
| **Moltis** | 2 | 1 | 无 | 🟡 中等 | 维护者响应慢，安全正确性修复 |
| **LobsterAI** | 3 | 0 | 无 | 🟡 中等 | 低活跃，stale Issue 堆积 |
| **NanoBot** | — | — | — | ⚪ 未知 | 摘要生成失败 |
| **NullClaw** | 0 | 0 | 无 | 🟡 停滞 | 24h 无活动 |
| **TinyClaw** | 0 | 0 | 无 | 🟡 停滞 | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 🟡 停滞 | 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模优势**：OpenClaw 日活跃量（500/500）约为第二梯队（Hermes/IronClaw）的 10-20 倍，社区贡献密度显著领先，具备生态参照系地位。

**技术路线差异**：
- **OpenClaw**：偏向**通用多通道网关架构**，强调渠道标准化（Telegram/Slack/ACP）、会话生命周期管理、子代理编排（subagents/swarm 重构），代码库治理投入大（move-only 重构密集）。
- **Hermes Agent**：聚焦 **Desktop 原生体验**（Electron/Tauri），强调本地模型（llama.cpp）集成与 macOS/Windows 平台差异化问题修复。
- **IronClaw**：强调**工具发现效率**（渐进式签名返回）与**并行执行策略**（BatchPolicy::Parallel），面向高 tool catalog 规模场景。
- **CoPaw**：基于 AgentScope 框架，强调**审批工作流**与**记忆系统**（ReMe），面向企业/团队协作用户。

**社区规模**：OpenClaw #116277 Issue 获 196 条评论，远超其他项目热点（Hermes #63047 为 19 条、IronClaw 最高 2 条），反映其用户基数与问题曝光度呈量级差异。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **消息丢失/静默失败** | OpenClaw, Hermes Agent, NanoClaw | OpenClaw: DeepSeek v4 Flash 静默回复失败 (#116277/#121058)；Hermes: Desktop 消息丢失 (#82756 三次同类事件)；NanoClaw: Signal 附件丢失 (#2529) |
| **多通道/渠道稳定性** | OpenClaw, IronClaw, PicoClaw | OpenClaw: Telegram/Slack 渠道稳定性；IronClaw: Slack 重连认证损坏 (#5882)；PicoClaw: Matrix 重连死锁 (#3203) |
| **子代理/多 Agent 协作** | OpenClaw, LobsterAI, Hermes Agent | OpenClaw: subagent 生命周期 (#47975)、completion receipt 注入 (#112623)；LobsterAI: 跨模型子任务跟踪缺陷 (#2132)；Hermes: 跨 profile 子 agent (#41889) |
| **安全加固** | PicoClaw, NanoClaw, Hermes Agent, ZeroClaw | PicoClaw: SSRF 媒体下载漏洞 (#3322/#3323/#3324)；NanoClaw: tar CVE 修复 (#3207)；Hermes: 绝对路径绕过审批 (#71996)、vault token 泄露 (#82829)；ZeroClaw: 网关 fail-closed 策略 |
| **Windows/跨平台兼容** | OpenClaw, Hermes Agent, NanoClaw | OpenClaw: Windows 路径展开 (#121303)、exec/read 空输出 (#105528)；Hermes: Windows 插件崩溃 (#80560)；NanoClaw: hardened image pip 支持 (#3217) |
| **会话生命周期/状态管理** | OpenClaw, Hermes Agent, IronClaw | OpenClaw: transcript writer 事务一致性 (#121284)；Hermes: 测试会话泄漏至生产 (#82770)；IronClaw: run history 丢失 (#7349) |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | CoPaw | NanoClaw | PicoClaw |
|------|----------|--------------|----------|-------|----------|----------|
| **功能侧重** | 通用多通道网关 + 子代理编排 | Desktop 原生客户端 + 本地模型 | 工具发现效率 + 并行执行 | 审批工作流 + 记忆系统 | CLI 工具 + 容器化部署 | IoT/边缘 + 多平台 Bot |
| **目标用户** | 开发者/企业级部署 | 个人用户/Demo 体验 | 高 tool catalog 场景 | 团队协作/企业 | 安全敏感场景/DevOps | 边缘设备/个人 Bot |
| **技术架构** | 异步网关 + 渠道抽象层 | Electron/Tauri Desktop + llama.cpp | Capability 端口 + 并行批处理 | AgentScope 框架 + ReMe 记忆 | Docker 容器 + hardened image | 多协议适配层 |
| **独特卖点** | 代码库治理深度、子代理生命周期管理 | macOS/Windows 桌面体验、本地模型集成 | 渐进式工具披露、BatchPolicy 并行 | 审批卡片 UX、微信中文支持 | CVE 扫描门禁、stdin JSON 输入 | SSRF 安全修复、Telegram 表格渲染 |

---

## 6. 社区热度与成熟度

**🔥 快速迭代阶段**（日活跃 100+ 条目，功能与稳定性并重）：
- **OpenClaw**：高强度重构 + 稳定性修复并行，处于"规模扩张后的治理期"
- **Hermes Agent**：Desktop 客户端快速迭代，安全 PR 集中提交显示成熟度提升
- **ZeroClaw**：治理收紧趋势明显，RFC 密集反映架构思考深化

**⚡ 稳定成长阶段**（日活跃 20-50 条目，质量巩固为主）：
- **IronClaw**：工具发现与通知渠道完善，Slack 稳定性为长期课题
- **CoPaw**：审批体验与前端渲染优化，MCP 参数类型为待突破点
- **NanoClaw**：多渠道接入完成但合并效率低，需加速 PR review

**🌱 垂直深耕阶段**（日活跃 <10 条目，特定场景优化）：
- **PicoClaw**：安全修复 + 渠道体验优化，响应速度快但规模有限
- **Moltis**：安全正确性修复，维护者响应节奏偏慢

**💤 停滞/低频阶段**：
- **LobsterAI**：stale Issue 堆积，核心功能改进缺乏推进
- **NullClaw/TinyClaw/ZeptoClaw**：24h 无活动，需观察是否项目休眠

---

## 7. 值得关注的趋势信号

### 趋势 1：消息丢失问题成为生态共性痛点
OpenClaw (#116277 复发)、Hermes (#82756 三次同类事件)、NanoClaw (Signal 附件丢失) 均报告消息静默失败或丢失。这反映**异步网关架构下会话生命周期管理的复杂性**，建议开发者关注 checkpoint/recovery 机制与 transcript writer 一致性设计。

### 趋势 2：安全从"功能属性"升级为"架构前提"
PicoClaw (SSRF 三合一修复)、NanoClaw (CVE 扫描门禁)、Hermes (vault token 泄露修复、路径绕过审批)、ZeroClaw (fail-closed 策略) 均在同期推进安全修复。趋势显示**安全加固已进入 CI/CD 门禁阶段**，建议新项目进行安全设计时前置考虑。

### 趋势 3：子代理编排从"可用"走向"可靠"
OpenClaw (subagents/swarm 重构、completion receipt 注入)、LobsterAI (跨模型子任务跟踪)、Hermes (跨 profile 子 agent) 均在此方向投入。行业正在从"能 spawn 子代理"演进到"子代理状态可追踪、可编排"，**子代理生命周期管理**将成为差异化竞争点。

### 趋势 4：跨平台兼容性成为 Desktop 客户端最大风险面
Hermes (macOS 冻结、Windows 插件崩溃、macOS 休眠后会话丢失)、OpenClaw (Windows 路径展开、exec 空输出) 的 Issue 高度集中在平台差异。建议桌面应用采用**平台隔离测试**与**fallback 机制**，避免单平台回归影响全局。

### 趋势 5：工具调用效率优化进入深水区
IronClaw (渐进式工具签名、并行 BatchPolicy)、OpenClaw (单 profile quota 耗尽影响全局 #121278)、LobsterAI (工具调用浪费 token #6046) 共同指向**大规模 tool catalog 场景下的调用优化**。未来竞争点将在"工具发现质量"与"调用成本"之间寻找平衡。

---

**核心结论**：个人 AI 助手开源生态已从"功能竞赛"进入"稳定性与安全深耕期"。OpenClaw 作为生态参照系，其代码治理经验与子代理架构演进值得跟踪；Hermes Agent 与 IronClaw 在 Desktop 体验与工具效率方向的探索，为差异化竞争提供参考。消息丢失、跨平台兼容、子代理可靠性是未来 6-12 个月需重点突破的共性技术挑战。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 — 2026-08-10

## 1. 今日速览

Hermes Agent 今日保持高强度活跃：过去 24 小时内共更新 100 条讨论（Issues 50 条 + PRs 50 条），净新增 47 个活跃 Issues 和 46 个待合并 PR，项目处于快速迭代期。开发重点集中在 **Desktop 客户端稳定性** 与 **会话状态管理**，多个 P0/P1 级 Bug 并行修复，包括消息静默丢失、客户端无响应、测试会话泄漏等核心问题。暂无新版本发布，但社区贡献活跃，多项修复已提交流备合并。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日已合并/关闭的 PR（4 条）

| PR | 作者 | 说明 |
|---|---|---|
| [#72086](https://github.com/NousResearch/hermes-agent/pull/72086) | coe0718 | 修复时间戳记录时机，确保会话转录对下游观察者（如 Attest）可用 |
| [#82442](https://github.com/NousResearch/hermes-agent/pull/82442) | mhilboezen | 修复 Desktop SSH 模式中 `bootstrapSshConnectionInner` 调用 venv Python 而非 hermes 二进制导致的认证失败 |
| [#74411](https://github.com/NousResearch/hermes-agent/pull/74411) | Valej18 | 修复 Desktop SSH 模式版本检查参数顺序错误，避免误报 `--ssh-session-token-file` 不支持 |
| #82616 | teknium1 | Gateway session 连续性追踪 Issue 已关闭（通过后续修复 PR 解决） |

### 今日重点开发生态

- **会话状态修复**：PR [#82811](https://github.com/NousResearch/hermes-agent/pull/82811)（JoaoMarcos44）针对 #82756 的静默消息丢失问题，包含三个独立提交，修复 truncate ordinal 地址空间并让误操作回滚可恢复。
- **Desktop 客户端稳定性**：PR [#82841](https://github.com/NousResearch/hermes-agent/pull/82841)（chelsealong）修复左侧边栏会话标题悬停时文字缩进的 CSS 问题（直接回应 #82807）；PR [#82828](https://github.com/NousResearch/hermes-agent/pull/82828)（fangliquanflq）防止旧版插件行崩溃 Settings 视图。
- **插件兼容性**：PR [#82828](https://github.com/NousResearch/hermes-agent/pull/82828) 处理 legacy plugin registry key 缺失的版本错位场景，保留列表可搜索性与 toggle 能力。

---

## 4. 社区热点

### 最活跃 Issues

| Issue | 类型 | 评论数 | 核心议题 |
|---|---|---|---|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Bug / P1 | 19 | macOS Desktop 在约 5 条消息后完全无响应，Settings 也被锁定 |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | Feature / P3 | 13 | 视障用户 VoiceOver 无障碍改进需求 |
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | Bug / P1 | 7 | Gateway 会话在 state.db FTS 损坏后出现孤立 fork 与会话恢复问题（已关闭）|
| [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) & [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) | Bug / P2（重复）| 各 6 | `cronjob create` 与 `repeat='forever'` 触发 `TypeError` |
| [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) | Feature / P3 | 5 | 请求 `delegate_task` 支持跨 profile 子 agent |

### 社区诉求分析

- **Desktop 稳定性是当前最大痛点**：#63047（无响应冻结）与 #82756/#80763/#70516（消息静默丢失）形成系列问题，用户反馈修复后仍存在未被覆盖的路径，显示 Desktop 客户端的会话生命周期管理存在系统性漏洞。
- **无障碍需求**：#26689 由盲人群体提出，已获 1 个 👍，属于低优先级（P3）但具有长期价值的需求。
- **跨 profile 子 agent**：#41889 反映了高级用户对 agent 编排能力的深层需求，但目前缺乏官方原语支持。

---

## 5. Bug 与稳定性

### P0 / 高优先级

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#82756](https://github.com/NousResearch/hermes-agent/issues/82756) | Desktop 按 Enter 提交静默删除 ~65 条消息（第三次同类事件）| 开放 | [#82811](https://github.com/NousResearch/hermes-agent/pull/82811) |
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | macOS Desktop 约 5 条消息后完全无响应 | 开放 | 待修复 |
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | Gateway session 在 FTS 损坏后断连（已关闭） | 已关闭 | 已修复 |

### P1 / 中优先级

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#82806](https://github.com/NousResearch/hermes-agent/issues/82806) | macOS Desktop 休眠恢复后会话提示消失 | 开放 | 待修复 |
| [#82770](https://github.com/NousResearch/hermes-agent/issues/82770) | 测试会话泄漏至生产 state.db（700+ 垃圾行）| 开放 | 待修复 |
| [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) | Windows Desktop 加载插件时 React #310 崩溃 | 开放 | 待修复 |
| [#82831](https://github.com/NousResearch/hermes-agent/issues/82831) | `normalize_usage` 在 dict 类型 usage 时漏计 reasoning tokens | 开放 | 待修复 |
| [#82805](https://github.com/NousResearch/hermes-agent/issues/82805) | 本地 llama.cpp 间歇性 HTTP 400 空 body | 开放 | [#82809](https://github.com/NousResearch/hermes-agent/pull/82809) |

### P2 / 其他

| Issue | 描述 | 状态 |
|---|---|---|
| [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) | cronjob `repeat='forever'` TypeError | 开放（重复） |
| [#46064](https://github.com/NousResearch/hermes-agent/issues/46064) | OpenRouter router 模型被 `hermes model` 静默过滤 | 开放 |
| [#80125](https://github.com/NousResearch/hermes-agent/issues/80125) | 微信 adapter 错误码误报为 rate limit | 开放 |
| [#77211](https://github.com/NousResearch/hermes-agent/issues/77211) | `hermes update` 跳过 Node.js 依赖刷新 | 开放 |
| [#75097](https://github.com/NousResearch/hermes-agent/issues/75097) | Iteration budget 语义不一致 | 开放 |
| [#80841](https://github.com/NousResearch/hermes-agent/issues/80841) | Fastmail `delete_event` 无法通过 CLI/TUI/Matrix 完成确认 | 开放 |
| [#78190](https://github.com/NousResearch/hermes-agent/issues/78190) | Gmail MCP OAuth 在 gateway 进程中 404 注册失败 | 开放 |
| [#77753](https://github.com/NousResearch/hermes-agent/issues/77753) | macOS 内联更新因旧 hermes-setup 死锁 | 开放 |
| [#79314](https://github.com/NousResearch/hermes-agent/issues/79314) | Desktop Edge TTS 静默降级为全量合成 | 开放 |
| [#82689](https://github.com/NousResearch/hermes-agent/issues/82689) | Kanban 任务分配无审计门控，dispatcher 可在无授权下执行副作用任务 | 开放 |
| [#82798](https://github.com/NousResearch/hermes-agent/issues/82798) | `hardcoded_secret` 将 `__PLACEHOLDER__` 误报为凭证泄露 | 开放 |
| [#81055](https://github.com/NousResearch/hermes-agent/issues/81055) | Desktop Markdown TOC 链接无效果 | 开放 |
| [#82836](https://github.com/NousResearch/hermes-agent/issues/82836) | Desktop Mermaid 图表展开显示空白 | 开放 |
| [#82807](https://github.com/NousResearch/hermes-agent/issues/82807) | macOS Desktop 悬停左侧会话时标题文字消失 | 开放 |
| [#77521](https://github.com/NousResearch/hermes-agent/issues/77521) | Status 面板显示过期模型/provider 信息 | 开放 |

### 安全相关

| Issue/PR | 描述 |
|---|---|
| [#71996](https://github.com/NousResearch/hermes-agent/pull/71996) / [#82830](https://github.com/NousResearch/hermes-agent/pull/82830) | 修复绝对路径绕过审批硬线限制的安全漏洞（拆分独立 PR）|
| [#82829](https://github.com/NousResearch/hermes-agent/pull/82829) | 将 vault token 从 CLI 进程表面移除，防止泄露 |
| [#82834](https://github.com/NousResearch/hermes-agent/pull/82834) | 保持 steer provenance 在 runtime roles 中，防止模型伪造 prompt exemplar |

---

## 6. 功能请求与路线图信号

| Issue | 描述 | 优先级 | 路线图信号 |
|---|---|---|---|
| [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) | `delegate_task` 跨 profile 子 agent 支持 | P3 | 高级编排能力需求，尚无对应 PR |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | 视障用户 VoiceOver 无障碍改进 | P3 | 长期可达性目标，评论活跃但未启动 |
| [#15831](https://github.com/NousResearch/hermes-agent/issues/15831) | Job chaining — cron job 触发完成后可联动下一 job | P3 | 社区呼声较高（1 👍），尚无对应 PR，潜在路线图功能 |
| [#82316](https://github.com/NousResearch/hermes-agent/issues/82316) | Desktop "New session in project" 不应强制进入项目视图 | P3 | 用户体验优化，尚无对应 PR |
| [#18188](https://github.com/NousResearch/hermes-agent/pull/18188) | 扩展 gateway runtime footer 元数据（provider/quota/reasoning-effort 等）| P3 | 已在 PR 中，可纳入下一版本 |
| [#79862](https://github.com/NousResearch/hermes-agent/pull/79862) | kimi-k3 多模态视觉输入支持 | P3 | 已在 PR 中，覆盖 kimi-coding 模型 |
| [#82835](https://github.com/NousResearch/hermes-agent/pull/82835) | iMessage 通过首条消息确认 opt-in | P3 | 已在 PR 中，改善 photon setup 体验 |

---

## 7. 用户反馈摘要

### 主要痛点

1. **Desktop 会话稳定性**：用户在 #63047 反馈客户端在约 5 条消息后完全冻结且 Settings 不可访问，仅能靠强制退出恢复。#82756 报告第三次同类静默消息丢失事件，用户情绪明显升级，显示修复尚未覆盖所有路径。
2. **消息丢失恐惧**：#82756 中用户丢失 ~65 条消息，此前 #70516（308 条）和 #80763（244 条）已有类似报告，用户信任度正在受损。
3. **跨平台兼容问题**：Windows 端插件崩溃（#80560）、macOS 端更新死锁（#77753）和休眠后会话丢失（#82806）反复出现，平台差异化问题突出。
4. **诊断困难**：#80125 微信 adapter 错误码被误报为 rate limit，隐藏真实原因（missing context_token），用户难以定位问题。
5. **安全边界漏洞**：#71996 发现绝对路径可绕过审批硬线限制，用户报告了严重的安全关切。

### 正面反馈

- 无障碍用户（#26689）肯定 Hermes 后端和 agent 生态的"极强能力"，希望 UX 能更好地服务于屏幕阅读器用户。
- Job chaining 功能请求（#15831）显示用户希望利用 Hermes 构建复杂自动化工作流。

---

## 8. 待处理积压

### 需维护者关注

| Issue | 风险等级 | 说明 |
|---|---|---|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | 🔴 P1 | Desktop 完全无响应，19 条评论无实质修复进展，已影响多个用户 |
| [#82770](https://github.com/NousResearch/hermes-agent/issues/82770) | 🔴 P2 | 测试会话泄漏至生产 state.db，700+ 垃圾行，影响数据完整性 |
| [#82689](https://github.com/NousResearch/hermes-agent/issues/82689) | 🔴 P2 | Kanban 任务无授权门控即可执行，安全边界问题 |
| [#77753](https://github.com/NousResearch/hermes-agent/issues/77753) | 🟡 P2 | macOS 更新死锁，无支持的修复路径，用户无法更新 |
| [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) | 🟡 P2 | Windows 插件加载崩溃，React #310，影响 Windows 用户群 |
| [#82798](https://github.com/NousResearch/hermes-agent/issues/82798) | 🟡 P2 | `__PLACEHOLDER__` 被硬编码凭证规则误报，`--force` 也无法绕过，阻塞技能安装 |
| [#46064](https://github.com/NousResearch/hermes-agent/issues/46064) | 🟡 P3 | OpenRouter router 模型被静默过滤，用户需手动编辑 config.yaml |
| [#77211](https://github.com/NousResearch/hermes-agent/issues/77211) | 🟡 P2 | `hermes update` 跳过 Node.js 依赖刷新，错误循环无法自愈 |

---

**项目健康度评估**：今日项目活跃度极高，核心稳定性问题（消息丢失、客户端冻结）有并行修复推进，但 Desktop 客户端的会话生命周期管理仍存在系统性漏洞。安全相关 PR（#71996、#82829、#82834）集中提交，显示团队对安全边界的重视。建议优先

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 — 2026-08-10

## 1. 今日速览

PicoClaw 今日活跃度适中：过去 24 小时新增 3 条 Issues、6 条 PR 更新（5 条待合并、1 条已关闭）。项目无新版本发布，但安全修复与工作流优化是今日主线——SashaMIT 连续提交 3 个 PR 修复媒体下载 SSRF 漏洞，As-tsaqib 同步推进了 Telegram 表格渲染功能并修复了 pnpm 锁文件损坏问题。Matrix 频道重连 Bug 已关闭，项目稳定性略有提升。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已关闭/合并

| PR | 作者 | 说明 |
|----|------|------|
| [#3326](https://github.com/sipeed/picoclaw/issues/3326) | As-tsaqib | 修复 `web/frontend/pnpm-lock.yaml` 中重复的 `semver@7.8.5` 映射条目，解决 `pnpm install --frozen-lockfile` 报 `ERR_PNPM_BROKEN_LOCKFILE` 导致构建中断的问题。无包变更，属工作流修复。 |

### 待合并（值得关注的 PR）

- **#3222** (trufae) — Deltachat 频道重构，删除遗留功能与过时测试，精简约 200 行代码，并完善文档。
- **#3327** (As-tsaqib) — Telegram 表格原生渲染，对应 Issue #3325，利用 Bot API 10.1+ 的富消息能力替代原有的纯文本/代码块降级方案。
- **#3322 / #3323 / #3324** (SashaMIT) — 三合一安全修复系列，为 QQ/Telegram/Discord/LINE/Slack/微信/企微等频道的媒体下载引入 SSRF 防护。

---

## 4. 社区热点

| 条目 | 类型 | 评论数 | 👍 | 热度说明 |
|------|------|--------|-----|----------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Issue (已关闭) | 8 | 2 | Matrix 重连逻辑缺失问题讨论最充分，社区关注度高 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue (开放) | 4 | 0 | IRC 长消息处理需求，有 4 轮讨论 |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Issue (开放) | 0 | 0 | 今日新增，已触发 PR #3327 快速响应 |

**热点分析：**
- **#3203** 的 8 条评论和 2 个 👍 表明 Matrix 用户群体对连接稳定性有持续痛点，该 Issue 已关闭说明维护者接受了修复。
- **#3287** 反映 IRC 用户在实际部署中遭遇 512 字节限制导致的消息碎片化问题，诉求明确但暂无对应 PR。
- **#3325** 与 **#3327** 形成 Issue→PR 快速闭环，说明维护者对高价值功能请求响应积极。

---

## 5. Bug 与稳定性

| 严重级别 | 条目 | 说明 | Fix PR |
|----------|------|------|--------|
| 🔴 高 | [#3322](https://github.com/sipeed/picoclaw/issues/3322) | QQ/Telegram/Discord/LINE/Slack 媒体下载未做 SSRF 防护，恶意 URL 可导向回环/内网地址 | #3322（开放，待合并） |
| 🔴 高 | [#3323](https://github.com/sipeed/picoclaw/issues/3323) | 企微（WeCom）媒体下载存在相同 SSRF 漏洞 | #3323（开放，待合并） |
| 🔴 高 | [#3324](https://github.com/sipeed/picoclaw/issues/3324) | 微信（Weixin）媒体下载存在相同 SSRF 漏洞 | #3324（开放，待合并） |
| 🟡 中 | [#3326](https://github.com/sipeed/picoclaw/issues/3326) | pnpm 锁文件损坏导致 Web 前端构建失败 | ✅ #3326（已关闭） |
| 🟡 中 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` 长轮询在断网/服务端重启后永久死锁，systemd 重启策略不触发 | ✅ #3203（已关闭） |

> **安全说明：** SashaMIT 提出的三则 SSRF 修复（#3322/#3323/#3324）为同根漏洞，均通过引入 `CreateSafeHTTPClient` + `ValidateSafeHTTPURL` 实现。待合并期间建议维护者在部署中暂限媒体下载目标网段。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 状态 | 对应 PR | 纳入下版本可能性 |
|----------|-------|------|---------|------------------|
| Telegram 表格原生渲染 | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | 开放 | #3327 | ⭐⭐⭐⭐⭐ 高（PR 已就绪） |
| IRC 长消息支持（IRCv3） | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 开放 | 无 | ⭐⭐ 中（需评估 IRCv3 扩展兼容性） |
| Deltachat 重构与文档完善 | — | — | #3222 | ⭐⭐⭐⭐ 高（PR 已就绪，属清理性质） |

**路线图信号：** 项目正同时推进三方向——**安全加固**（SSRF 修复）、**用户体验优化**（Telegram 表格、IRC 长消息）、**代码质量**（Deltachat 重构）。若三组 PR 顺利合并，下一版本可重点释放安全修复与表格渲染能力。

---

## 7. 用户反馈摘要

| 来源 | 核心诉求 | 情绪 |
|------|----------|------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix 频道在网络抖动后永久停止同步，且无日志报错，运维难以排查 | 😤 不满（silent death） |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 长消息在 IRC 中被强制拆分为多条，AI 收到碎片化输入导致理解错误 | 😤 不满 |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Markdown 表格在 Telegram 中渲染为代码块，影响信息可读性 | 😐 中性（功能缺失） |
| [#3326](https://github.com/sipeed/picoclaw/issues/3326) | 锁文件损坏阻断构建，影响本地开发体验 | 😤 不满 |

**真实场景提炼：**
- **生产环境稳定性**：Matrix 重连、微信/企微媒体下载安全是运维最关心的两点。
- **AI 输入质量**：IRC 长消息拆分和 Telegram 表格降级直接影响 AI 对结构化内容的理解能力。

---

## 8. 待处理积压

| 条目 | 类型 | 创建时间 | 距今 | 风险 |
|------|------|----------|------|------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue（功能请求） | 2026-07-22 | ~19 天 | 中：IRC 用户痛点明确，但无 PR 跟进 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR（重构） | 2026-07-03 | ~38 天 | 低：内容已完备，等待维护者审阅 |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | PR（安全修复） | 2026-08-09 | 1 天 | 高：SSRF 漏洞公开，建议优先合并 |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | PR（安全修复） | 2026-08-09 | 1 天 | 高：同上 |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | PR（安全修复） | 2026-08-09 | 1 天 | 高：同上 |

> **维护者提醒：** 3 条安全修复 PR（#3322/#3323/#3324）已提交一日，建议尽快合并以关闭 SSRF 攻击面。#3287（IRC 长消息）已开放近 3 周，可评估是否指派或接受社区贡献。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-08-10

## 1. 今日速览

NanoClaw 项目今日保持**高活跃度**，过去24小时共产生 **1 条新 Issue** 与 **16 条 PR**，全部处于待合并状态，未见任何 PR 被合并或关闭，表明代码审查流程可能正在积压。开发重心集中在 CLI 输入扩展、安全加固（CVE 修复）、Signal/Dial 渠道接入及容器镜像优化等领域。项目整体呈现"**重构与功能并行推进**"态势，但缺乏合并动作值得维护者关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日 **0 条 PR 被合并或关闭**，全部 16 条 PR 仍为 OPEN 状态。

**值得关注的高价值 PR：**

| PR | 类型 | 作者 | 摘要 |
|----|------|------|------|
| [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) | Core | gabi-simons | 新增 CI 工作流，将 agent 镜像推送至 Docker Hub 并附加 CVE 扫描门禁 |
| [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) | Core | gabi-simons | 升级 pnpm/npm 以修复 tar 组件关键 CVE（GHSA-23hp-3jrh-7fpw） |
| [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | CLI | zvi-fried | 新增 `--stdin-json` 参数，支持从标准输入接收结构化 JSON 参数 |
| [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) | Slack | ariel-greenfeld | 修复 Slack 粘贴表格无法被 agent 识别的问题 |
| [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) | Signal | brentkearney | 修复 Signal 附件丢失问题，将入站附件正确路由至 agent |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | Feature | OmriBenShoham | 新增 Dial 渠道适配器（支持 SMS + AI 语音通话） |

**项目前进评估：** 今日 PR 涵盖安全加固、基础设施 CI、多渠道接入、体验修复四大方向，质量较高，但合并停滞可能影响项目迭代节奏。

---

## 4. 社区热点

### 🔥 Issue #3217 — `install_packages` 缺失 pip 渠道（新开）
- **作者：** stumpjumper
- **链接：** [#3217](https://github.com/nanocoai/nanoclaw/issues/3217)
- **热度评估：** ⭐⭐⭐（高优先级，阻碍 hardened-image 采用）
- **核心诉求：** 当前 `install_packages` 模型仅支持 `packages_apt` 和 `packages_npm`，缺少 Python 包安装渠道，导致依赖 pip 工具的 agent 无法使用预构建加固镜像路径。

### 📋 PR #3216 — 文档补充说明 install_packages 限制（响应 Issue #3217）
- **作者：** stumpjumper
- **链接：** [#3216](https://github.com/nanocoai/nanoclaw/pull/3216)
- **说明：** 在 hardened-image 指南中明确标注 `install_packages` 仅覆盖 apt 和 npm，属于对 Issue #3217 的即时响应。

### 📋 PR #3142 — Signal 附件路径修复
- **作者：** ira-at-work
- **链接：** [#3142](https://github.com/nanocoai/nanoclaw/pull/3142)
- **背景：** 长期存在的问题，Signal 适配器将附件路径硬编码到 `/workspace/extra/signal-attachments/<id>`，但该路径从未挂载到容器中，导致 Read 工具无法访问。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | PR 状态 | 链接 |
|--------|------|---------|------|
| 🔴 高 | Signal 附件丢失（非图片/音频文件被丢弃） | PR #2529 待合并 | [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) |
| 🔴 高 | Signal 附件路径未挂载导致 Read 工具失效 | PR #3142 待合并 | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) |
| 🟡 中 | Slack 粘贴表格无法被 agent 识别 | PR #3209 待合并 | [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) |
| 🟡 中 | tar 组件关键 CVE（GHSA-23hp-3jrh-7fpw） | PR #3207 待合并 | [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) |

> **稳定性评估：** 今日无新增崩溃报告，但存在 **2 个高优先级 Signal 附件问题** 与 **1 个关键安全 CVE** 待修复，合并优先级建议：CVE 修复 > Signal 附件 > Slack 表格。

---

## 6. 功能请求与路线图信号

| 请求/信号 | 来源 | 路径 | 纳入下一版本可能性 |
|-----------|------|------|-------------------|
| **stdin JSON 输入支持** | PR #3218 | `feat(cli): accept bounded JSON from stdin` | ⭐⭐⭐ 高（已提交，符合 CLI 扩展趋势） |
| **Dial 渠道（SMS + AI 语音）** | PR #3041 / #3050 | `feat(channels): add Dial channel adapter` | ⭐⭐⭐ 高（双 PR 配套，功能完整） |
| **Python 包安装渠道** | Issue #3217 | `install_packages` 需新增 pip 支持 | ⭐⭐ 中（需实质代码变更，文档 PR #3216 仅为临时方案） |
| **模块生命周期钩子统一** | PR #3214 | `refactor(host): unify module lifecycle hooks` | ⭐ 低（内部重构，不对外暴露） |
| **数据库迁移注册表** | PR #3212 | `refactor(db): add module migration registry` | ⭐ 低（基础设施改进） |

---

## 7. 用户反馈摘要

### 痛点
1. **Hardened Image 采用受阻** — Issue #3217 反映用户希望使用预构建加固镜像，但 `install_packages` 不支持 Python 包安装，导致必须回退到自定义 Dockerfile，失去自动化优势。
2. **Signal 附件机制失效** — 用户反馈 Signal 频道收到的文件附件（PDF、文档等）无法被 agent 读取，路径挂载缺失是根本原因。
3. **Slack 表格格式丢失** — 粘贴到 Slack 的表格数据无法正确传递给 agent，影响数据分析类工作流。

### 满意点
- **Dial 渠道接入** — 用户（OmriBenShoham）主动贡献 SMS + AI 语音通话支持，扩展了 NanoClaw 的通讯能力边界。
- **CI/CD 安全门禁** — PR #3208 引入 Docker Hub 发布流程与 CVE 扫描，体现项目对安全合规的重视。
- **贡献规范清晰** — 所有 PR 均附带 `<!-- contributing-guide: v1 -->` 模板，表明项目贡献流程成熟。

---

## 8. 待处理积压

| 类型 | 编号 | 作者 | 创建时间 | 状态 | 建议 |
|------|------|------|----------|------|------|
| 📌 PR | #2529 | brentkearney | 2026-05-18 | 待合并 84 天 | 🔴 紧急：Signal 附件修复，长期积压 |
| 📌 PR | #3142 | ira-at-work | 2026-07-27 | 待合并 14 天 | 🔴 高优先级：Signal 附件路径修复 |
| 📌 PR | #3186 | zvi-fried | 2026-08-04 | 待合并 6 天 | 🟡 中：host 层重构，影响 skill 能力扩展 |
| 📌 PR | #3041 / #3050 | OmriBenShoham | 2026-07-14 | 待合并 27 天 | 🟡 中：Dial 渠道双 PR，功能完整但等待合并 |
| 📌 Issue | #3217 | stumpjumper | 2026-08-09 | 新开 | 🟡 高：需评估是否新增 pip 渠道支持 |

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐ 高 | 24h 内 17 条贡献（1 Issue + 16 PR） |
| 合并效率 | ⭐⭐ 低 | 0 条 PR 今日合并，积压明显 |
| 安全响应 | ⭐⭐⭐⭐ 高 | CVE 修复 PR 已提交，文档限制已标注 |
| 社区参与 | ⭐⭐⭐ 中 | 多贡献者参与，但 Issue 响应以文档补充为主 |
| 代码质量 | ⭐⭐⭐⭐ 高 | PR 类型覆盖完整，遵循贡献规范 |

**综合评估：** 项目开发活跃、方向清晰，但**合并流程存在瓶颈**，建议维护者优先处理安全相关 PR（#3207、#3208）与长期积压的 Signal 修复（#2529、#3142）。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报
**日期：2026-08-10**

---

## 1. 今日速览

过去24小时，IronClaw 保持高活跃度：**22条 Issues、27条 PR**，项目推进节奏紧凑。无新版本发布，但多个关键 PR 进入 review 阶段，涵盖工具搜索优化、Slack/Telegram渐进式预览、Web Push通知渠道、outbound竞态条件修复等核心能力。社区 QA 持续发现UI时序、emoji渲染、自动化计数一致性等问题，同时出现一个高严重程度的 streaming API zombie线程 bug，需重点关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**已合并/关闭的重要 PR：**

| PR | 内容 | 链接 |
|---|---|---|
| #7171 | 修复 skill 安装后从 Settings 消失的 bug，实现 DB-backed skill tree | [PR #7171](https://github.com/nearai/ironclaw/pull/7171) |
| #7387 | Dependabot 依赖更新组（12个包） | [PR #7387](https://github.com/nearai/ironclaw/pull/7387) |

**重点进行中 PR：**

- **#7395** — 修复 outbound 模块 `claim_delivery_attempt_for_send` 的 TOCTOU 竞态条件，防止发送行 claim 丢失被误分类。[PR #7395](https://github.com/nearai/ironclaw/pull/7395)
- **#7352** — 修复多 gate 场景下 run notification projection id 重复导致的耐用投递身份冲突。[PR #7352](https://github.com/nearai/ironclaw/pull/7352)
- **#7410 + #7409** — 实现工具搜索渐进式完整签名返回（`schema_complete` 标记），建立 100~1000 工具规模下的检索质量基线。[PR #7410](https://github.com/nearai/ironclaw/pull/7410) · [PR #7409](https://github.com/nearai/ironclaw/pull/7409)
- **#7396** — 新增 Slack/Telegram 通用的渐进式预览能力，支持 `chat.postMessage`/`chat.update` 可编辑预览。[PR #7396](https://github.com/nearai/ironclaw/pull/7396)
- **#7398** — 新增 `web-push` 通道扩展，使 Web App 成为一等通知渠道（W3C Web Push + VAPID）。[PR #7398](https://github.com/nearai/ironclaw/pull/7398)
- **#7131** — 修复触发型 run 失败时通知未投递给创建者的问题，将 Failed/RecoveryRequired/Cancelled 状态正确送达。[PR #7131](https://github.com/nearai/ironclaw/pull/7131)
- **#7341** — 恢复 WebUI v2 附件读取和 SSE 测试，修复迁移到 fetch/ReadableStream 后的回归。[PR #7341](https://github.com/nearai/ironclaw/pull/7341)
- **#7402/#7404/#7403/#7401** — 一组 UI 修复 PR：精确自动化计数、emoji 短代码渲染、Activity 时间序纠正、拒绝 stream+tools 非法组合。[PR #7402](https://github.com/nearai/ironclaw/pull/7402) · [PR #7404](https://github.com/nearai/ironclaw/pull/7404) · [PR #7403](https://github.com/nearai/ironclaw/pull/7403) · [PR #7401](https://github.com/nearai/ironclaw/pull/7401)

---

## 4. 社区热点

**最活跃的 Issues：**

- **#7405** — 延迟工具发现改进：完整签名 + 命名空间感知目录预览（2条评论）[Issue #7405](https://github.com/nearai/ironclaw/issues/7405)
- **#7407** — 并发执行 `BatchPolicy::Parallel` 能力批次，将 agent loop 的并行策略真正落地到 capability 端口（2条评论）[Issue #7407](https://github.com/nearai/ironclaw/issues/7407)
- **#5882** — Slack 多次断开重连导致认证流程损坏，WebUI 卡死在"Waiting for Slack..."（2条评论）[Issue #5882](https://github.com/nearai/ironclaw/issues/5882)
- **#7166** — 工具披露 follow-up epic：渐进式工具披露已作为 Reborn 默认值验证安全可用（1条评论）[Issue #7166](https://github.com/nearai/ironclaw/issues/7166)

**热点分析：** 工具发现效率和并行执行是近期高频讨论主题，反映用户对大规模 tool catalog 场景下模型调用成本的敏感性。Slack 认证稳定性（#5882）和重连恢复路径是长期痛点。#7166 的完成标志着工具披露机制进入稳定期。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 High | [#7400](https://github.com/nearai/ironclaw/issues/7400) | `stream: true` + `tools[]` 在 `/api/v1/responses` 中途失败，产生永久无法删除的 zombie 线程 | [PR #7401](https://github.com/nearai/ironclaw/pull/7401) 已提交修复（返回 400 拒绝） |
| 🟡 P2 | [#7346](https://github.com/nearai/ironclaw/issues/7346) | Emoji 短代码（`:wave:` 等）在助手消息中显示为纯文本 | [PR #7404](https://github.com/nearai/ironclaw/pull/7404) 已修复 |
| 🟡 P2 | [#7348](https://github.com/nearai/ironclaw/issues/7348) | Activity 块和进度消息时间序错乱 | [PR #7403](https://github.com/nearai/ironclaw/pull/7403) 已修复 |
| 🟡 P2 | [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent 报告 61 个 automations 而 UI 仅显示 50 个 | [PR #7402](https://github.com/nearai/ironclaw/pull/7402) 已修复 |
| 🟡 P2 | [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 多次重连后认证流程卡死 | 暂无 fix PR |
| 🟡 P2 | [#7349](https://github.com/nearai/ironclaw/issues/7349) | 刷新页面后 run history 和 Activity 时间线部分丢失 | 暂无 fix PR |
| 🟢 P3 | [#5509](https://github.com/nearai/ironclaw/issues/5509) | Chat 创建延迟随历史累积增长 | 已关闭 |
| 🟢 P3 | [#7292](https://github.com/nearai/ironclaw/issues/7292) | 安装的 CoinGecko 工具无法使用，runner 心跳报错 | 已关闭 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 诉求 | 路线图判断 |
|---|---|---|
| [#7405](https://github.com/nearai/ironclaw/issues/7405) + [PR #7410](https://github.com/nearai/ironclaw/pull/7410) | 延迟工具发现返回完整签名，支持命名空间感知目录预览 | 已进入实现阶段，预计 v1.2.0 |
| [#7407](https://github.com/nearai/ironclaw/issues/7407) | 并发执行并行能力批次，减少多 tool-call 回合延迟 | 已提为 issue，pending 实现 |
| [#7398](https://github.com/nearai/ironclaw/pull/7398) | Web Push 作为一等通知渠道 | 已提交 PR，与 Slack/Telegram 对齐 |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) | 实验性：用 pinned omp tool surface 替代第一方编程工具 | 标记为"Experiment"，需观察社区反馈 |
| [#7360](https://github.com/nearai/ironclaw/issues/7360) | 扩展 built-in 能力和 durable write 路径的压测覆盖 | 基础设施改进，长期优先级 |
| [#7166](https://github.com/nearai/ironclaw/issues/7166) | 工具披露 follow-up（v1.2.0 epic） | 已完成主体，剩余 backlog |

---

## 7. 用户反馈摘要

**核心痛点：**

1. **Slack 集成稳定性**：多次重连后认证流程损坏（#5882）、自动化进度消息错误投递到 channel 而非最终结果（#5551）、读取 Slack DM 时缺少能力导致 run 失败（#5522）。Slack 是用户最主要的通知和触发渠道，其可靠性直接影响生产体验。
2. **工具调用效率**：简单任务（"查邮件并写入 Google Sheet"）触发 124 次工具调用（#6046），模型在无关内容（base64 解码、FOIA 分析）上浪费 token。
3. **UI 一致性**：emoji 不渲染（#7346）、Activity 时序错乱（#7348）、刷新后历史丢失（#7349）、自动化计数不准（#7345）——多个 QA 发现的 UI bug 集中在同一窗口期。
4. **自动化安全管理**：routine 可创建/修改其他 routine（#6479），存在自我复制风险；旧 routine 无法删除（#5510，已关闭但反映历史问题）。

**积极反馈**：工具披露机制（#7166）验证安全可用，渐进式披露成为 Reborn 默认；PR 修复组（#7401-#7404）快速响应了多个并发发现的 UI bug。

---

## 8. 待处理积压

| Issue | 状态 | 关注点 |
|---|---|---|
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | OPEN，7月创建 | Slack 重连认证损坏，长期未修复，影响生产用户 |
| [#7349](https://github.com/nearai/ironclaw/issues/7349) | OPEN | 刷新页面后 run history 丢失，涉及 SSE/状态持久化 |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) | OPEN | 工具调用效率问题，需 agent loop 层面优化 |
| [#6479](https://github.com/nearai/ironclaw/issues/6479) | OPEN | routine 自复制风险，安全相关，需 gate 机制 |
| [#7360](https://github.com/nearai/ironclaw/issues/7360) | OPEN | 压测覆盖不足，需 CI 能力建设 |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) | OPEN | 编程工具替换实验，需评估社区接受度 |

---

**项目健康度评估**：🟢 良好。过去24小时 49 个活跃条目，8 个 PR 已合并，多个关键 bug 已有对应 fix PR。Slack 稳定性和工具调用效率是待突破的长期课题。zombie 线程 bug（#7400）的修复 PR 已提交，待合并后可降低风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 | 2026-08-10

---

## 1. 今日速览

过去24小时，LobsterAI 项目保持 **低活跃度**，共收到 3 条 Issue 更新，无 PR 提交，无新版本发布。Issue 更新集中在用户反馈与功能讨论，暂无已关闭或合并条目，社区参与仍以问题报告为主。项目整体处于平稳维护状态，无明显重大进展或风险事件。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭，项目代码库无实质性推进。

---

## 4. 社区热点

### 🔥 #1187 — 建议增加上下文窗口大小与输出 Token 设置
- **作者**: qxjysd | **评论**: 2 | 👍: 1 | **标签**: stale
- **链接**: [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)
- **热度分析**: 该 Issue 因 DeepSeek 模型运行时频繁触发 `Context overflow` 错误而引发关注，用户期望在设置面板中直接配置上下文窗口大小与输出 Token 限制，避免手动调整。1 个点赞及 stale 标签表明该需求长期未获响应，但痛点明确。

### 📢 #2453 — 自定义模型切换被误判为"不许可"
- **作者**: Alexandre0820 | **评论**: 1 | 👍: 0
- **链接**: [Issue #2453](https://github.com/netease-youdao/LobsterAI/issues/2453)
- **热度分析**: 用户发现模型定义格式 `custom_1/openai/gpt-oss-20b:free` 会被系统误解析为 Provider=OpenAI，导致自定义模型切换时持续报错。该问题在 OpenRouter 免费模型与 NVIDIA 模型上均复现，属于 **配置解析逻辑缺陷**，影响多模型场景下的使用体验。

### 💬 #2132 — 跨模型子任务调用机制缺陷
- **作者**: woxinsj | **评论**: 1 | 👍: 0 | **标签**: stale
- **链接**: [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)
- **热度分析**: 用户提出跨模型子任务协作的深度分析与修复方案，指出 `call_function` 创建的网关级调用未被纳入 `subagents` 跟踪，导致主任务无法感知子任务状态。该 Issue 技术深度较高，涉及核心架构，若解决将显著提升多模型协作能力。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🟡 中 | #2453 | 自定义模型切换时 Provider 解析错误，导致误判为不许可 | 未修复 |
| 🔵 低 | #2132 | 跨模型子任务调用未被正确跟踪，主任务无法感知子任务状态 | 未修复 |

> 注：今日无崩溃或回归类紧急 Bug 报告。

---

## 6. 功能请求与路线图信号

### 高优先级需求
- **#1187 — 上下文窗口与输出 Token 设置**: 用户需求明确，建议开发者在模型设置面板中增加可配置项，避免 overflow 错误。该功能若实现，可覆盖 DeepSeek 等长上下文模型的兼容性问题。
- **#2453 — 自定义模型 Provider 解析修复**: 需优化模型定义格式的正则解析逻辑，区分 `custom_*` 前缀与标准 Provider 格式，建议纳入下一版本修复。

### 中长期信号
- **#2132 — 跨模型子任务协作机制**: 用户提出了完整的技术方案（主任务通知机制、子任务卡点上报），若实现将增强多模型编排能力，可作为独立功能模块纳入路线图。

---

## 7. 用户反馈摘要

| 反馈主题 | 痛点/场景 | 情绪倾向 |
|----------|-----------|----------|
| 上下文窗口限制 | DeepSeek 模型运行时报 `Context overflow`，需手动重置会话 | 不满 |
| 自定义模型切换 | 配置格式错误导致持续报错，影响多模型切换体验 | 不满 |
| 跨模型子任务 | 主任务无法感知子任务完成状态，协作机制缺失 | 期待改进 |

**总体情绪**: 用户反馈集中在**配置灵活性**与**多模型协作**两大痛点，对项目易用性和高级功能有较强期待。

---

## 8. 待处理积压

以下 Issue 已标记为 `stale`，长期未获响应，建议维护者关注：

- **#1187** — 上下文窗口设置请求（创建时间：2026-04-01，最后更新：2026-08-09）
- **#2132** — 跨模型子任务调用机制缺陷（创建时间：2026-06-09，最后更新：2026-08-09）

> **维护建议**: 两个 stale Issue 均涉及核心功能改进，建议优先响应 #2453 的配置解析 Bug（影响用户体验），并评估 #1187 与 #2132 的技术可行性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目日报 — 2026-08-10

---

## 1. 今日速览

过去24小时内，Moltis 项目保持中等活跃度：共收到 **2 条新 Issue** 和 **1 条 PR**，暂无 Issue 被关闭或 PR 被合并，亦无新版本发布。项目处于两个安全相关修复的推进阶段（Issue #1187 与 PR #1186 分别涉及 UI 数据丢失风险与密钥派生一致性），社区反馈集中在 Bug 报告而非新功能诉求，整体健康度良好，但积压中的 Issue 暂无维护者响应，需关注闭环节奏。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

### 📌 关键 PR

**#1186 — fix(vault): normalize recovery phrase before hashing**
- **作者：** pxmpsdev
- **状态：** OPEN（待合并）
- **链接：** [moltis-org/moltis#1186](https://github.com/moltis-org/moltis/pull/1186)
- **内容：** 修复了 `derive_recovery_kek` 函数在派生密钥加密密钥（KEK）时仅对恢复短语做了规范化（去破折号、转大写），但存储的哈希值却基于原始短语计算的问题。该修复确保 vault 解封时大小写不敏感的短语在哈希验证环节保持一致，避免因规范化不一致导致用户无法解封密钥库。
- **意义：** 这是一项安全与用户体验双重改进，属于关键正确性修复，合并后能消除一个潜在的密钥丢失场景。

> 截至日报生成时，该 PR 尚无合并动作，维护者 review 进度待跟进。

---

## 4. 社区热点

| 议题 | 类型 | 作者 | 活跃度 | 链接 |
|------|------|------|--------|------|
| #1187 Heartbeat settings UI 静默重置未绑定字段 | Bug | IlyaBizyaev | 0 评论 / 0 👍 | [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) |
| #1185 Apple Container 1.x sandbox 状态误判 | Bug | mikz | 0 评论 / 0 👍 | [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) |
| #1186 恢复短语规范化修复 PR | Fix | pxmpsdev | 待 review | [PR #1186](https://github.com/moltis-org/moltis/pull/1186) |

**热点分析：** 今日社区反馈几乎全部集中于 **稳定性与正确性**，无功能讨论或路线图相关诉求。Issue #1185 涉及 Apple 容器沙箱集成，是 Moltis 运行环境层面的问题，可能影响 macOS 用户群体；Issue #1187 则指向 UI 组件的数据绑定缺陷，属于易用性隐患。两条 Issue 均尚无评论，维护者响应窗口较为关键。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 摘要 | 严重程度 | 关联 Fix PR |
|--------|-------|------|----------|-------------|
| 🔴 高 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x 沙箱已启动，但 Moltis 错误判定为未运行 | 功能阻断（macOS 用户） | 暂无 |
| 🟡 中 | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat 设置 UI 静默重置未由表单表示的字段，可能导致配置意外丢失 | 数据一致性 | 暂无 |
| 🟢 低 | — | PR #1186 修复恢复短语哈希不一致问题 | 安全/正确性 | 已在途 [#1186](https://github.com/moltis-org/moltis/pull/1186) |

> Issue #1185 属于环境兼容性层面的阻断性问题，若 Mac 用户频繁遇到则可能影响核心用户群的日常使用，建议优先跟进。

---

## 6. 功能请求与路线图信号

今日无新的功能请求或增强提案。现有动态均为 Bug 修复，未观察到暗示未来路线图方向的用户诉求。维护者可将 PR #1186 的合并节奏视为当前对安全问题的重视程度信号。

---

## 7. 用户反馈摘要

| 用户 | 痛点 | 场景 |
|------|------|------|
| IlyaBizyaev | Heartbeat 设置页面中，未被表单直接绑定的字段在保存时会被静默重置为空值，导致配置意外丢失 | 用户通过 UI 配置 Heartbeat 参数时，发现部分字段保存后变为空，且无任何警告提示 |
| mikz | Apple Container 1.x 沙箱已成功启动，但 Moltis 的状态检测逻辑误判为"未运行"，导致无法正常使用容器化功能 | macOS 用户部署 Apple Container 环境后，Moltis 客户端持续显示容器未运行状态，影响工作流 |
| pxmpsdev（PR 提交者） | 恢复短语规范化与哈希计算逻辑不一致，可能导致用户在使用非标准格式短语时遭遇密钥库解封失败 | 安全敏感场景：用户输入的短语含破折号或全小写，哈希验证失败后可能永久丢失密钥数据 |

---

## 8. 待处理积压

| 类型 | 编号 | 摘要 | 创建时间 | 备注 |
|------|------|------|----------|------|
| Issue | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 状态误判 | 2026-08-08 | 超过24小时无维护者响应，建议优先 review |
| Issue | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat UI 字段静默重置 | 2026-08-09 | 刚提交，处于可响应窗口 |
| PR | [#1186](https://github.com/moltis-org/moltis/pull/1186) | 恢复短语规范化修复 | 2026-08-09 | 修复已就绪，等待合并 |

---

**项目健康度评级：** 🟡 中等 — 问题发现及时，修复路径清晰，但维护者响应节奏偏慢，建议加快 Issue 闭环与 PR review。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw 项目日报 — 2026-08-10

## 1. 今日速览

CoPaw 今日保持高活跃度：24小时内新增/更新 Issues 17条（11条活跃、6条关闭），PR 更新50条（仅1条已合并，49条待审），社区贡献节奏稳健。主要进展集中在**审批体验优化**（#6854 新增审批用途描述）、**前端渲染修复**（4个重复 Issue 已关闭）、**Google/Gemini 兼容性问题修复**（#6844）以及**SSE 实时流式传输改进**（#6843）。无新版本发布，项目处于 2.1.0b2 版本迭代周期。

---

## 2. 版本发布

无新版本发布。当前最新版本仍为 **v2.1.0b2**（ReMe Light 0.4.1.4 作为 memory backend）。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 | 关联 Issue |
|----|------|------|-----------|
| [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | feat | 为 DeepSeek V4（flash/pro）补充 1M token 上下文窗口配置，修复 Console 错误报告 131K 导致提前压缩 | — |
| [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | feat | 审批卡片新增用户友好型用途描述，解决 #6832 痛点 | #6832 |
| [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) | fix | 修复历史消息重加载时助手完成时间丢失问题 | #6826 |
| [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) | fix | 移除 Gemini 工具请求中的 `$schema` 元数据，解决 #6812 的模型 unknown 错误 | #6812 |

**整体评价**：今日合并质量较高，4条 PR 均针对已验证的用户痛点，其中 3 条直接闭环了当日热门 Issue，项目技术债清理节奏良好。

---

## 4. 社区热点

### 🔥 评论最多 Issue

- **#2291** [Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) — 66 条评论，长期维护的贡献者入口，今日更新状态。社区对 P0-P2 优先级任务认领活跃。

### 📈 高关注 Issue / PR

| Issue/PR | 热度原因 | 链接 |
|---------|---------|------|
| [#6851/#6850/#6849/#6848](https://github.com/agentscope-ai/QwenPaw/issues/6851) | 同一 Bug 被多次提交后合并关闭，反映用户对前端长文本渲染的强烈诉求 | [Issue #6851](https://github.com/agentscope-ai/QwenPaw/issues/6851) |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具参数类型转换 Bug，直接影响生产调用 | [Issue #6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 杀软拦截问题，涉及用户体验核心稳定性 | [Issue #6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) |
| [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) | SSE 流式传输修复，影响所有实时对话场景 | [PR #6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | 会话 Fork 功能，受 checkpoint 需求驱动 | [PR #6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) |

**热点分析**：今日社区关注点集中在**前端渲染质量**和**实时交互体验**，反映出 2.1.0b2 版本在 UI/UX 层面仍有较大优化空间。MCP 参数类型问题 (#6839) 和杀软兼容性 (#6847) 属于阻塞性使用问题，需优先跟进。

---

## 5. Bug 与稳定性

| 级别 | Issue | 描述 | Fix PR | 状态 |
|------|-------|------|--------|------|
| 🟡 中 | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具调用时数字字符串被错误转换为数字类型，导致调用失败 | — | 待修复 |
| 🟡 中 | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Gemini provider 发送含 `$schema` 的工具 schema，Google SDK 拒绝 | [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) | ✅ 已关闭 |
| 🟡 中 | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息结束时间显示异常（显示几秒 vs 实际2分钟） | [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) | ✅ 已关闭 |
| 🟢 低 | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | `prompts.py` 中 Dream 同步描述与实际行为不符（未实现） | — | 待修复 |
| 🟢 低 | [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream 单单元集成失败将整个任务标记为 error，缺乏重试容错 | — | 待修复 |
| 🟢 低 | [#6838](https://github.com/agentscope-ai/QwenPaw/issues/6838) | 子代理无法自动切换模型，共享 workspace 时 Web 端显示混乱 | — | 待修复 |

**稳定性评估**：今日关闭 6 个 Issue，关闭率 35%，但仍有 5 个开放 Bug 待处理。MCP 参数类型转换 (#6839) 属于高影响 Bug，建议优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 分析 |
|------|---------|------|
| 审批用途描述 | [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) → [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | 已实现并待合并，纳入近期版本确定性高 |
| ReMe4 完整路线图（Auto-Link、三模搜索、4类摘要权重） | [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | 用户主动询问 2.1.0b2 ReMe Light 与 ReMe4 的关系，维护者需明确时间线 |
| 移动端 Web 控制台适配 | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 长期需求，暂无对应 PR |
| Agent 隐藏字段 | [#6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) | 插件场景需求，PR 已提交待审 |
| 主题/皮肤可配置化 | [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) | Draft 阶段，需维护者确认方向 |
| OneBot 音视频媒体支持 | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | 扩展 OneBot 协议能力，PR 待审 |
| ReMe 搜索 Reranker | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | 提升记忆检索质量，Backend 功能，PR 待审 |
| 会话 Fork 功能 | [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | 用户可复制会话上下文创建新会话，受 checkpoint 场景驱动 |

---

## 7. 用户反馈摘要

### 痛点
- **审批体验差**：用户需查看原始 PowerShell 代码才能理解审批意图，#6832 和 #6854 直接回应此诉求
- **前端长文本渲染崩溃**：4 个重复 Issue（#6848-#6851）反映同一问题，用户不满工具输出被折叠为不可读 blob
- **杀软误报**：#6847 指出 QwenPaw 被杀软强制关停，而竞品 WorkBuddy 无此问题，信任度受影响
- **MCP 参数类型不匹配**：#6839 中字符串被自动转为数字，破坏 API 调用契约
- **子代理配置混乱**：#6838 反映多代理场景下 workspace 共享与 Web 端显示不一致

### 满意度
- **SSE 流式改进**：#6843 解决前端实时展示问题，用户期待上线
- **微信中文审批回复**：#6804 支持"允许/拒绝"中文回复，本土化体验提升
- **DeepSeek V4 上下文窗口**：#6846 修复 1M token 配置缺失，长上下文用户受益

---

## 8. 待处理积压

| 类型 | Issue/PR | 积压原因 | 建议优先级 |
|------|---------|---------|-----------|
| Bug | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 参数类型转换，生产阻塞 | 🔴 高 |
| Bug | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 杀软拦截，影响用户信任 | 🔴 高 |
| Bug | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | prompts.py 文档/实现不一致 | 🟡 中 |
| Bug | [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream 容错不足 | 🟡 中 |
| Bug | [#6838](https://github.com/agentscope-ai/QwenPaw/issues/6838) | 子代理模型切换与配置共享 | 🟡 中 |
| PR | [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) | SSE 实时流式修复，已提交待审 | 🟡 中 |
| PR | [#6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) | Agent 隐藏字段，插件需求 | 🟡 中 |
| PR | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | ReMe Reranker，质量提升 | 🟢 低 |
| PR | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | OneBot 媒体支持 | 🟢 低 |
| Issue | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 移动端适配，长期需求 | 🟢 低 |
| Issue | [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | ReMe4 路线图咨询，需维护者回应 | 🟡 中 |

---

**项目健康度评估**：🟢 良好。Issue 关闭率 35%（6/17），PR 合并效率高（1/50 今日合并，但 49 条待审积压需关注）。核心痛点（审批体验、Gemini 兼容、时间显示）已快速闭环，MCP 参数类型和杀软问题需优先跟进。社区贡献活跃，首次贡献者占比高，项目生态健康。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目日报 | 2026-08-10

## 1. 今日速览
过去 24 小时 ZeroClaw 保持高活跃度，共产生 50 条 Issue 与 50 条 PR 更新，其中仅 1 条 PR 完成合并/关闭，12 条 Issue 已闭环，无新版本发布。项目动态呈现明显的**治理收紧**与**安全加固**倾向，大量 RFC 集中于工作流看板、多模型上下文配置、网关 fail-closed 策略及安全策略热加载。整体健康度良好，但 PR 审查吞吐（49 条待合并）与 P0 安全漏洞修复进度是当前

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*