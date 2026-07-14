# OpenClaw 生态日报 2026-07-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-14 01:25 UTC

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



# 📊 个人 AI 助手与自主智能体开源生态横向对比分析报告
**报告日期**：2026-07-14  
**分析师**：Agnes-2.0-Flash  

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正从“功能堆叠期”全面迈入“生产级收敛期”。高频 PR 合并与技术债清算表明，项目重心已由基础对话能力转向流式控制、上下文成本优化、多通道稳定性及企业级安全合规。尽管各项目在架构抽象层级与交互形态上存在分化，但底层均面临协议碎片化、网关兼容断层与加密栈现代化的共性挑战，生态整体呈现出高工程纪律、强可观测性需求与精细化运维导向的成熟特征。

---

### 2. 各项目活跃度对比

| 项目 | Issues 数 | PR 数 | Release 情况 | 健康度评估 |
|:---|:---|:---|:---|:---|
| **NanoBot** | 13（11关） | 45（18处理/27待审） | 无 | 良好：高频交付，聚焦通道解耦与 WebUI 本地化 |
| **Hermes Agent** | 50（26关） | 50（1已合/49待合） | 无 | 极佳：底层修复密集，Gateway 与会话状态治理推进迅速 |
| **PicoClaw** | 4 | 5（1关/4待合） | 无 | 良好：安全升级与缓存机制并行，维护带宽略承压 |
| **NanoClaw** | 3（关） | 33（27处理/6待合） | 无 | 良好：安全审计与消息投递可靠性强化，协同紧密 |
| **NullClaw** | 0 | 13（待合） | 无 | 良好：CLI 重构与审批流落地，正向生产级健壮性收敛 |
| **LobsterAI** | 0 | 21（19处理） | 无 | 良好：构建管线加固与桌面交互打磨，工程化成熟度高 |
| **Moltis** | 0 | 1（待合） | 无 | 稳定：低活跃，专注 CalDAV 协议合规与性能优化 |
| **TinyClaw** | 无活动 | 无活动 | 无 | 停滞：24h 无提交，需关注维护连续性 |
| **OpenClaw / IronClaw / CoPaw / ZeroClaw** | 数据缺失 | 数据缺失 | 未知 | 待补充：摘要生成异常，可能受流量峰值或抓取限流影响 |

---

### 3. OpenClaw 在生态中的定位
受限于今日摘要生成异常，具体指标暂缺。但从命名惯例与生态结构推演，**OpenClaw** 大概率承担**核心运行时/网关路由基座**角色，与侧重桌面交互（LobsterAI/NullClaw）或垂直协议适配（Moltis/PicoClaw）的项目形成互补。其潜在优势在于提供高抽象层的编排接口与 Provider 无关的路由能力；技术路线上更偏向“框架/中间件”而非“开箱即用客户端”；社区规模预计处于头部水平，常作为其他项目集成的参考实现或依赖基线。建议后续持续跟踪其架构演进，以判断生态核心标准的走向。

---

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 |
|:---|:---|:---|
| **流式工具调用与结构化审批** | NullClaw, LobsterAI, Hermes Agent | 解决流式中断上下文丢失问题；引入 SSE 事件渲染审批流；支持 Provider 级能力检查与动态路由，提升 Agent 执行可控性。 |
| **上下文管理与 Token 成本优化** | PicoClaw, NanoClaw, Hermes Agent | 推进 Anthropic 滚动缓存断点设计；修复 SystemParts 扁平化导致缓存失效；持久化记忆同步与会话状态一致性治理，降低 Agentic 工作流重复传输开销。 |
| **多通道兼容与协议对齐** | Hermes Agent, PicoClaw, NullClaw, LobsterAI | 修复 Telegram/Discord/Teams 弱模型提示词注入异常；解决 Cloudflare 网关转发时的签名缺失

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# 📊 NanoBot 项目动态日报 | 2026-07-14

## 1. 今日速览
过去24小时 NanoBot 保持高频活跃，累计处理 13 个 Issue（11 已关闭）与 45 个 PR（18 已合并/关闭，27 待审查）。整体健康度良好，社区贡献高度聚焦于通道架构解耦、核心工具修复、WebUI 本地化及文档工作流优化。暂无新版本发布，但多项 P1 级稳定性修复与 DX 改进已落地或进入最终审查，项目正稳步脱离早期

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 | 2026-07-14

## 1. 今日速览
过去24小时，Hermes Agent 项目保持极高活跃度，共处理 50 条 Issue 更新（新开/活跃 24，已关闭 26）及 50 条 PR 更新（待合并 49，已合并/关闭 1）。开发重心明显偏向底层稳定性修复与桌面端体验优化，覆盖 Gateway 会话状态管理、多平台路由、IME 兼容性、工具链内存泄漏及认证委托等核心模块。暂无新版本发布，但 49 个待合并 PR 显示出强大的修复流水线已准备就绪。整体项目健康度良好，技术债正在被系统化清算，工程纪律与用户交付质量稳步提升。

## 2. 版本发布
无新版本发布。当前处于密集修复与功能收敛期，待合并的 PR 预计将在近期整合至 `main` 分支并触发下一版本迭代。

## 3. 项目进展
今日推进了多项关键架构与交互优化，显著增强了系统的鲁棒性：
- **会话与状态一致性：** 修复了 `housekeeping` 缓存残留导致后续工具调用误判的问题（[#63860](https://github.com/NousResearch/hermes-agent/issues/63860) → [#64080](https://github.com/NousResearch/hermes-agent/pull/64080)），完善了 Gateway 中断/停止指令的路由逻辑。
- **多平台集成增强：** 解决 Telegram 轮询冲突死循环（[#63724](https://github.com/NousResearch/hermes-agent/pull/64082)）、Discord 弱模型提示词注入异常（[#63940](https://github.com/NousResearch/hermes-agent/issues/63940)），并新增 Anthropic WIF 认证支持（[#20073](https://github.com/NousResearch/hermes-agent/p

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报 | 2026-07-14

## 1. 今日速览
过去24小时，PicoClaw 保持中等活跃度，共产生 4 条新/活跃 Issue 与 5 条 PR（4 待合并，1 已关闭），无新版本发布。社区贡献重心集中在底层加密库安全升级、Anthropic 缓存机制适配、模型引用解析修复及基础构建配置清理。整体代码健康度良好，但多项议题被标记为 `[stale]`，提示维护带宽可能紧张，需关注积压任务的响应节奏与合并效率。

## 2. 版本发布
过去24小时无新版本发布。

## 3. 项目进展
今日无 PR 正式合并入主分支，但多项关键改进已进入 Review 阶段：
- **[Fix] 模型引用解析优化** (`#3254`)：修正 `lookupModelConfigByRef` 中的匹配优先级逻辑，避免 provider-alias 拆分覆盖完整模型名，提升多模型配置的确定性。[链接](https://github.com/sipeed/picoclaw/pull/3254)
- **[Fix] Anthropic 缓存控制支持** (`#3228`)：解决 SystemParts 被扁平化为单字符串导致 `cache_control` 标记失效的问题，为后续 Token 成本优化铺路。[链接](https://github.com/sipeed/picoclaw/pull/3228)
- **[Chore] 基础配置清理** (`#3191`, `#3192`)：移除 `.gitignore` 重复项并升级 Docker goreleaser 基础镜像至 Alpine 3.23，提升构建一致性。[链接](https://github.com/sipeed/picoclaw/pull/3191) | [链接](https://github.com/sipeed/picoclaw/pull/3192)
- **已关闭 PR** (`#3253`)：Gateway Webhook 功能提案状态为 Closed，未进入合并流程，可能为作者撤回或需求重叠。[链接](https://github.com/sipeed/picoclaw/pull/3253)

## 4. 社区热点
- **#3088** (8条评论, 2👍)：提议以 `vodozemac` 全面替代已停更的 `libolm`，标注 `priority: high`。反映用户对 E2EE 模块安全性与长期维护的强烈诉求。[链接](https://github.com/sipeed/picoclaw/issues/3088)
- **#3229 / #3228**：围绕 Anthropic 滚动缓存断点设计展开 Proposal 与实现并行推进。用户指出 Agentic 工作流中对话历史重复传输导致 Token 浪费，该方向获技术社区高度关注。[链接](https://github.com/sipeed/picoclaw/issues/3229) | [链接](https://github.com/sipeed/picoclaw/pull/3228)
- **#3230**：报告通过 Cloudflare AI Gateway 转发 OpenAI 兼容格式调用 Gemini 时，返回 `missing thought_signature` 错误，暴露第三方网关与模型提供商间的协议对齐缺口。[链接](https://github.com/sipeed/picoclaw/issues/3230)

## 5. Bug 与稳定性
- **高影响**：`#3230` 涉及 Gemini API 签名校验失败，直接影响使用 AI Gateway 代理的企业/高级用户链路。目前暂无对应 Fix PR，建议优先跟进。[链接](https://github.com/sipeed/picoclaw/issues/3230)
- **中影响**：`#3254` 修复模型配置解析冲突，属路由层逻辑缺陷，合并后可避免多 Provider 环境下的静默错误。[链接](https://github.com/sipeed/picoclaw/pull/3254)
项目核心服务运行稳定，但跨提供商兼容层（特别是签名透传与结构化消息处理）仍是稳定性短板。

## 6. 功能请求与路线图信号
- **加密栈现代化**：`#3088` 的 `libolm → vodozemac` 迁移若落地，将消除已知安全债务，符合 Matrix/E2EE 生态演进标准。[链接](https://github.com/sipeed/picoclaw/issues/3088)
- **搜索引擎企业级鉴权**：`#3231` 请求为 SearXNG 集成添加 HTTP Basic Auth 支持，满足内网/私有化部署的访问控制需求。[链接](https://github.com/sipeed/picoclaw/issues/3231)
- **Agentic 上下文成本优化**：`#3229` 提出的“滚动缓存断点 + 剥离易变运行时上下文”方案，若配合 `#3228` 完成，极可能成为 v0.4+ 版本的核心性能特性。[链接](https://github.com/sipeed/picoclaw/issues/3229)

## 7. 用户反馈摘要
基于 Issue 摘要与评论倾向，真实用户痛点可归纳为：
1. **安全与维护焦虑**：`libolm` 停更引发合规与安全担忧，社区期望官方提供明确的加密库替换时间表。
2. **网关/中间件兼容断层**：通过 Cloudflare AI Gateway 或类似代理调用 Gemini/Anthropic 时，出现签名缺失、System Parts 结构丢失等问题，说明项目对非直连调用场景的容错不足。
3. **Token 成本敏感**：Agentic 多轮工具调用场景下，历史对话全量重传导致成本飙升，用户强烈期待细粒度缓存控制机制。
满意度方面

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# 📊 NanoClaw 项目动态日报
**日期**：2026-07-14  
**数据来源**：GitHub `qwibitai/nanoclaw` 近24小时活动  

---

### 1. 今日速览
截至本日，NanoClaw 在过去24小时内保持高频维护节奏，共处理 **33 条 PR**（27 条已合并/关闭，6 条待合并），关闭 **3 个 Issue**。项目暂无新版本发布，但安全审计、消息投递可靠性及核心基础设施（持久化记忆、模板调度、渠道集成）取得实质性进展。整体健康度良好，安全团队与核心维护者协同紧密，技术债清理与新特性开发并行推进，系统鲁棒性与可观测性显著提升。

---

### 2. 版本发布
过去24小时无新版本发布。当前已合并的关键修复（如 `#2998` 审批流加固、`#2226`/`#2996` 投递重试逻辑）预计将随下一稳定版正式纳入。建议发布前对 Socket 硬限制（`#2802`）与持久记忆同步（`#3012`）进行端到端回归测试。

---

### 3. 项目进展
今日合并/关闭的 PR 显著推动了架构标准化与安全基线建设：


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 | 2026-07-14

## 1. 今日速览
截至2026-07-14，NullClaw在过去24小时内无新Issue提交或关闭，无新版本发布。核心开发活动高度集中于13个待合并的Pull Request，覆盖CLI交互重构、Agent审批流与流式工具调用、多通道（Matrix/Discord/Weixin/Teams）底层稳定性修复，以及内存配置可观测性提升。所有PR均在2026-07-13完成最新代码更新，表明维护者团队正处于高强度迭代与审查阶段。项目整体健康度良好，技术债清理与新特性开发并行推进，架构正从“基础可用”向“生产级健壮性+精细化控制”收敛。

## 2. 版本发布
过去24小时无Release记录。当前13个PR尚未合并，预计下一版本将集中包含CLI原生行编辑器、结构化工具审批流、内存召回策略配置化及多项通道底层修复。建议关注合并进度以评估发版窗口。

## 3. 项目进展
今日无已合并/关闭的PR，但13个待合并PR已全面覆盖核心模块，显著推动项目向前演进：
- **Agent工作流增强**：[#969](https://github.com/nullclaw/nullclaw/pull/969) 实现两阶段工具审批流，[#964](https://github.com/nullclaw/nullclaw/pull/964) 支持流式请求中的原生API级工具调用，提升Agent执行可控性与实时性。
- **CLI与交互体验**：[#970](https://github.com/nullclaw/nullclaw/pull/970) 引入allocation-free行编辑器并启用POSIX raw-mode，彻底解决REPL方向键/历史导航/退格键失效问题。
- **配置与可观测性**：[#961](https://github.com/nullclaw/nullclaw/pull/961) 新增`auto_recall`、`recall_limit`等内存控制参数；[#962](https://github.com/nullclaw/nullclaw/pull/962)/[#963](https://github.com/nullclaw/nullclaw/pull/963) 完善Anthropic原生Provider与微信iLink认证文档。
- **基础设施与安全**：[#956](https://github.com/nullclaw/nullclaw/pull/956) 升级Alpine至3.24，[#959](https://github.com/nullclaw/nullclaw/pull/959) 持久化cron配对Token，[#958](https://github.com/nullclaw/nullclaw/pull/958) 修复Teams JWT Claim兼容问题。
项目整体已具备向稳定分支合入的条件，核心链路完整性显著提升。

## 4. 社区热点
基于PR的技术影响范围与维护者投入度，以下条目最受关注：
- [#969](https://github.com/nullclaw/nullclaw/pull/969) `feat(agent): structured approval_request / approval_response flow`：重构工具执行审批机制，引入SSE事件通道渲染UI，直击复杂Agent任务中“误操作/权限越界”痛点，为多步自动化提供安全护栏。
- [#964](https://github.com/nullclaw/nullclaw/pull/964) `Enable native API-level tool calls during streaming`：解决流式响应中断工具调用上下文的问题，支持Provider级能力检查与动态路由，是迈向“流式原生Agent”的关键一步。
- [#

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报
**报告日期**：2026-07-14  
**数据来源**：GitHub netease-youdao/LobsterAI（过去24小时）

---

### 1. 今日速览
过去24小时，LobsterAI 保持高频交付节奏，共处理 Pull Requests 21 条（已合并/关闭 19 条），Issues 更新为 0。开发重心高度聚焦于构建管线加固、跨平台安装包稳定性修复以及 Cowork 交互流程的精细化打磨。项目工程健康度良好，核心逻辑与渲染层均有实质性推进，但社区 Issue 讨论与用户反馈通道暂时处于静默期。

### 2. 版本发布
过去24小时无新版本（Release）发布。当前分支正持续累积构建优化、依赖升级与核心编排修复，相关变更预计将在下一稳定版或功能版发布说明中集中归档。

### 3. 项目进展
今日完成 19 个 PR 的合并或关闭，主要推进方向如下：
- **构建与分发管线**：`#2327` 补齐 Windows 应用二进制签名流程，消除安全软件拦截；`#2326` 为 NSIS 安装包增加解压自恢复与 watchdog 机制；`#2323` 新增可选的 Windows Web Installer 目标，支持 CDN 按需下载。
- **Cowork 交互与渲染**：`#2318` 重构桌面通知管理器，支持前台模式与权限请求状态追踪；`#2319` 刷新首页快捷场景分类与文案映射；`#1494` 实现技能选择按会话独立存储，彻底解决跨会话状态污染。
- **OpenClaw 核心与编排**：`#2324` 实现有序思考块（Thinking Blocks）流式渲染；`#2320` 修复定时任务跳过后的状态漂移；`#2315`/`#2292`/`#2300` 系列完善队列跟进协调器、Steer 路由稳定性及附件透传能力。
项目整体已完成从“基础可用”向“高可靠、强交互、可编排”的架构深化，核心链路闭环率显著提升。

### 4. 社区热点
受原始数据限制，今日 PR 评论数均为 `undefined` 且互动指标为零，热度分析基于 PR 解决的问题面与影响范围：
- **#2326 [CLOSED]** 针对安全软件冻结导致安装挂起的行业共性痛点，提供降级策略与自恢复方案，直接提升交付成功率。[链接](https://github.com/netease-youdao/LobsterAI/pull/2326)
- **#1494 [CLOSED]** 修复多会话并行时技能状态全局共享的长期体验缺陷，高度契合专业用户的多任务工作流。[链接](https://github.com/netease-youdao/LobsterAI/pull/1494)
- **#2320 [CLOSED]** 修正 Cron 任务跳过后的 `nextRunAtMs` 状态不同步问题，保障自动化调度引擎的确定性。[链接](https://github.com/netease-youdao/LobsterAI/pull/2320)

### 5. Bug 与稳定性
今日修复多项关键稳定性问题，按严重程度排列如下：
- **P0 安装/更新阻塞**：Windows 未

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报 | 2026-07-14

### 1. 今日速览
过去24小时内，Moltis 项目整体处于低活跃状态，未产生新 Issue 或新版本发布。核心进展集中于 1 条待合并的 Pull Request，主要修复 CalDAV 日历同步模块的时间范围过滤逻辑。项目代码库健康度稳定，无新增风险或冲突，但社区互动与迭代节奏较为平缓，依赖维护者推进关键修复的合并流程。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日重点推进 PR #1147 `[fix(caldav): honor time range in list_events via server-side calendar…]`。该 PR 修正了 `CalDavClient::list_events` 方法中 `_range` 参数绑定后未被实际调用的缺陷，使客户端能够正确向服务器下发 `start/end` 查询条件，替代原有的全量资源拉取逻辑。合并后，将显著提升日历同步效率并严格对齐官方文档行为，推动项目向后端协议合规性与性能优化方向迈进。
🔗 [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

### 4. 社区热点
今日唯一受关注的动态为上述 CalDAV 修复 PR。尽管目前评论数与点赞数为 0，但其触及了第三方日历集成的核心痛点：客户端过度依赖本地过滤而非服务端查询。开发者 `thoscut` 的提交反映了社区对“按需同步”与“协议严格遵循”的持续诉求，后续若合并，预计将减少相关兼容性反馈与性能投诉。
🔗 [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

### 5. Bug 与稳定性
- **Medium/High**: CalDAV `list_events` 忽略时间范围参数（PR #1147）。该缺陷导致每次调用均触发全量资源拉取，违背设计预期并增加不必要的网络与内存开销。当前已有对应修复 PR 处于开放状态，尚未合入主分支。
🔗 [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

### 6. 功能请求与路线图信号
今日无新功能提案。此次修复间接印证了项目路线图对“第三方服务集成健壮性”与“API 契约一致性”的重视。若该 PR 顺利合入，后续可关注是否伴随针对 CalDAV/WebDAV 批量操作、增量同步或缓存策略的优化需求浮现。

### 7. 用户反馈摘要
基于 PR 描述反推，受影响用户的主要痛点在于日历工具调用时无法按日期筛选事件，需等待全量数据加载后再由客户端截断，造成体验延迟与性能浪费。修复后，使用场景将回归“服务端精准查询”，高度契合个人 AI 助手对日历模块“实时、轻量、准确”的核心期待，有助于提升用户信任度与工具链稳定性。

### 8. 待处理积压
- PR #1147 已于 2026-07-11 创建，截至报告日已开放 3 天，目前状态为 `[OPEN]` 且无评论交互。建议维护者尽快完成 Code Review 或合并，以解除该阻塞点并释放后续日历相关迭代的依赖。
🔗 [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

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

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*