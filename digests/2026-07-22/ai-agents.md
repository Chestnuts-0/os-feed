# OpenClaw 生态日报 2026-07-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-22 01:43 UTC

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



# 2026-07-22 个人 AI 助手/自主智能体开源生态横向对比分析报告

## 1. 生态全景
截至 2026-07-22，个人 AI 助手与自主智能体开源生态呈现“高频迭代、渠道为王、工程化补课”的总体态势。以 NanoClaw、LobsterAI、PicoClaw 为代表的活跃项目正从功能验证期转向生产就绪阶段，开发重心高度集中在多 IM 渠道接入、容器化兼容性、可观测性集成及多模型路由等核心能力。尽管部分头部项目（OpenClaw、Hermes Agent 等）今日社区数据存在采集缺口，但大量衍生与竞品项目维持了中高频维护节奏，表明该赛道仍处于快速扩张与差异化竞争并存的关键窗口期。

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release | 健康度评估 |
|:---|:---:|:---:|:---:|:---|
| **NanoClaw** | 1 | 12 (9 待合并/3 关闭) | ❌ 无 | 🟢 高活跃，贡献集中，审查需提速 |
| **LobsterAI** | 1 | 10 (5 待合并/5 关闭) | ❌ 无 | 🟢 中高活跃，工程闭环良好 |
| **PicoClaw** | 8 (4 活跃/4 关闭) | 8 (5 待合并/3 关闭) | ❌ 无 | 🟡 中高频维护，侧重渠道修复 |
| **Moltis** | 1 | 1 (Dependabot 自动) | ❌ 无 | 🟡 低活跃/稳定蓄力，维护响应需关注 |
| **NullClaw** | 0 | 0 | ❌ 无 | 🔴 停滞 |
| **TinyClaw** | 0 | 0 | ❌ 无 | 🔴 停滞 |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | 🔴 停滞 |
| **OpenClaw** | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 监控缺口/低频发布 |
| **NanoBot** | ⚠️ 无数据 | ⚠️ 无数据 | ⚠️ 无数据 | ⚠️ 监控缺口 |
| **Hermes Agent** | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 监控缺口 |
| **IronClaw** | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 监控缺口 |
| **CoPaw** | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 监控缺口 |
| **ZeroClaw** | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 监控缺口 |

## 3. OpenClaw 在生态中的定位
作为生态的“核心参照”，OpenClaw 今日虽无有效社区数据产出，但从项目命名谱系（Nano/Pico/Iron/Zero/NullClaw 等）及功能分化路径来看，它大概率承担着**架构基准**或**上游源头**的角色。

*   **优势与定位**：OpenClaw 的核心价值在于定义了基础 Agent 交互范式与协议标准。衍生项目（如 NanoClaw 的全渠道扩展、PicoClaw 的轻量/飞书原生适配）均在其基础上进行垂直裁剪，侧面印证了其架构的可扩展性。
*   **技术路线差异**：当前活跃项目正通过“渠道插件化”、“容器化部署”和“可观测性集成（Langfuse）”等工程手段补齐长尾场景。若 OpenClaw 保持单体或通用架构，可能在特定渠道深度优化和企业级可审计性上落后于细分竞品。
*   **社区规模推断**：鉴于大量衍生项目 PR 流转活跃，OpenClaw 的社区影响力已通过 Fork 生态外溢。建议维护者关注上游依赖同步机制，防止技术债反向传导至衍生项目。

## 4. 共同关注的技术方向
多个项目不约而同地推进以下技术方向，反映出行业共识正在形成：

| 技术方向 | 涉及项目 | 具体诉求与表现 |
|:---|:---|:---|
| **多 IM 渠道深度接入** | NanoClaw, PicoClaw, LobsterAI | LINE 官方账号支持、飞书原生音视频、Telegram 消息可靠性、Gmail 旧版 API 路由阻断。用户要求 Agent 无缝嵌入现有通讯习惯。 |
| **可观测性与追踪** | NanoClaw | 提交 Langfuse Tracing Skill，为 Agent 调用链提供标准化集成，解决黑盒调用痛点。 |
| **多模型路由与成本优化** | Moltis, LobsterAI | Moltis 长期 Feature Request 要求按对话主题自动路由 LLM；LobsterAI 处理多模型切换时的附件状态同步问题。 |
| **容器化与云原生兼容** | NanoClaw | 修复容器环境下的运行兼容性，推动部署形态向 K8s/容器化收敛。 |
| **跨平台消息稳定性** | NanoClaw, PicoClaw | 修复 Markdown 解析器误删链接、飞书音视频通道崩溃等底层通信问题，夯实生产可用性。 |

## 5. 差异化定位分析

| 维度 | NanoClaw | LobsterAI | PicoClaw | Moltis |
|:---|:---|:---|:---|:---|
| **功能侧重** | 渠道扩展（LINE/Dial）、容器化、Langfuse 追踪、文档现代化 | 协作渲染（`cowork`/`artifacts`）、订阅权限、Windows 桌面端体验 | 飞书原生音视频、轻量级渠道体验修复 | 静态站点维护、长期需求沉淀（模型路由） |
| **目标用户** | 追求全渠道覆盖与生产级可审计性的开发者/企业用户 | 重视多模态协作、浏览器协同与权限管理的团队用户 | 飞书生态重度用户、边缘/轻量部署场景 | 偏好稳定架构、注重基础设施规范的用户 |
| **技术架构** | 模块化 Skill 注册表、registry-branch 协作模型 | 强渲染与 Artifact 状态机、订阅制权限拦截层 | 渠道原生适配优先，强调低延迟与原生 API

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 | 2026-07-22

##

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报
**日期**：2026-07-22  
**数据源**：GitHub `sipeed/picoclaw` Issues & Pull Requests  

## 1. 今日速览
PicoClaw 在过去 24 小时保持中高频维护节奏，共处理 8 个 Issue 与 8 个 PR（Issue 新开/活跃 4、关闭 4；PR 待合并 5、合并/关闭 3），无新版本发布。开发重心集中在三条主线：**渠道体验修复**（飞书原生音视频

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# 📊 NanoClaw 项目动态日报
**日期：** 2026-07-22  
**数据源：** GitHub (`nanocoai/nanoclaw`)  

---

## 1. 今日速览
截至 2026-07-22，NanoClaw 过去 24 小时呈现**高活跃、多并行**的贡献态势。共更新 12 条 PR（9 条待合并/审查中，3 条已关闭），1 条 Issue 保持开放，无新版本发布。整体项目健康度良好，社区贡献高度集中在**渠道扩展**（LINE、Dial）、**容器化兼容性修复**、**消息通道稳定性打磨**及**文档体系完善**。PR 流转效率较高，但 9 条 Open PR 的审查与合并节奏需维护者及时跟进，避免功能型补丁与技术修复类 PR 互相阻塞。

---

## 2. 版本发布
过去 24 小时**无新 Release**。当前开发重心位于 Skill 迭代、通道修复与文档现代化，建议关注待合并 PR 的合入进度及后续版本预告。

---

## 3. 项目进展
今日关闭/完成流程的 PR 共 3 条，主要推进了工程规范与可观测性基础设施：
- **PR #3095** `docs: rewrite branch maintenance guide for the registry-branch model`：重写分支维护指南，适配新的 registry-branch 协作模型，降低贡献者认知成本。[链接](https://github.com/nanocoai/nanoclaw/pull/3095)
- **PR #3114** `Langfuse tracing skill pr`：提交 Langfuse 追踪 Skill，为 Agent 调用链可观测性提供标准化集成方案。[链接](https://github.com/nanocoai/nanoclaw/pull/3114)
- **PR #3116** `sync pr`：完成规范同步，确保本地贡献流程与仓库指南保持一致。[链接](https://github.com/nanocoai/nanoclaw/pull/3116)

**推进评估：** 项目在主线功能之外持续夯实文档规范与可观测性能力，技术债清理与国际化文档同步推进，整体向“开箱即用 + 可审计”方向稳步迈进。

---

## 4. 社区热点
| 类型 | 编号 | 主题 | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|:---|
| Issue | [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) | `feat: Add /add-line skill for LINE Official Account channel support` | 评论 3 | 聚焦亚太核心 IM 渠道补齐。作者指出 LINE 在日/台/泰市场占主导且尚未纳入渠道注册表，区域化通讯需求明确。 |
| PR | [#3115](https://github.com/nanocoai/nanoclaw/pull/3115) | `fix(onecli): block legacy Gmail API routes` | 当日新建 | 针对 OneCLI 配置中 Gmail 流量路由问题，提出幂等性全局阻断方案，覆盖标准、批量及上传旧路径。反映用户对邮件自动化合规与稳定性的强需求。 |
| PR | [#3111](https://github.com/nanocoai/nanoclaw/pull/3111) | `Protect URLs from Telegram legacy-Markdown delimiter stripping` | 当日新建 | 解决 Telegram 旧版 Markdown 解析器误删含下划线裸链接导致消息永久丢弃的问题，直击跨平台消息可靠性痛点。 |

---

## 5. Bug 与稳定性
今日无

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 | 2026-07-22

## 1. 今日速览
过去 24 小时，LobsterAI 保持中高活跃度的迭代节奏，共更新 **1 条 Issue** 与 **10 条 PR**（5 条待合并、5 条已合并/关闭），无新版本发布。开发重心集中在 `renderer`、`cowork`、`artifacts` 三大模块，核心目标是修复多模型切换时的附件状态同步、完善浏览器协作注释、统一订阅权限拦截及优化 Windows 桌面端更新体验。项目整体健康度良好，社区反馈与工程修复已形成有效闭环，代码质量与用户体验正在同步收敛。

## 2. 版本发布
过去 24 小时 **无新版本发布**。当前活动以 Bug 修复与体验优化为主，建议关注已合并 PR 的后续 Release 排期及依赖升级（React DOM 19 / Vite 8）的兼容性落地。

## 3. 项目进展
今日已合并/关闭的 5 条 PR 从以下维度推进了项目：

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报 | 2026-07-22

## 1. 今日速览
过去 24 小时 Moltis 仓库整体活跃度偏低，处于常规维护与需求沉淀期。期间仅产生 1 条 Issue 更新与 1 条 Dependabot 自动依赖升级 PR，无核心代码合并或新版本发布。项目健康度保持平稳，自动化运维流程正常运转，但维护者响应节奏与功能迭代速度仍需关注。整体评估：**🟡 低活跃 / 稳定蓄力**。

## 2. 版本发布
过去 24 小时无新版本发布（Releases: 0）。

## 3. 项目进展
今日无核心功能或修复类 PR 被合并/关闭。唯一更新的 PR 为文档站依赖例行升级：
- [#1161](https://github.com/moltis-org/moltis/pull/1161) `chore(deps): bump astro from 7.0.9 to 7.1.3 in /docs`（作者: `dependabot[bot]`）
该 PR 仅作用于 `/docs` 目录的静态站点构建工具，属于常规安全与兼容性维护，未触及项目核心架构。项目整体工程推进幅度较小，主要精力仍在基础设施维护层面。

## 4. 社区热点
今日社区讨论焦点集中在唯一活跃的长期 Feature Request：
- [#574](https://github.com/moltis-org/moltis/issues/574) **[OPEN] Model Routing Per topic** | 作者: `@azharkov78` | 评论: 5 | 👍: 1 | 最近更新: 2026-07-22
**诉求分析：** 用户希望 Moltis 支持“按对话主题/上下文自动路由至不同 LLM”的能力。这反映出进阶用户对多模型协同、任务分级处理及 Token 成本控制的需求正在显性化。尽管该 Issue 自 4 月创建至今已积累 5 条评论，但点赞数仅 1，说明目前仍属早期探索性需求，尚未形成大规模社区共识，但具备明确的路线图参考价值。

## 5. Bug 与稳定性
今日无新增 Bug 报告、崩溃日志或回归问题。项目稳定性维度暂无风险信号，依赖升级 PR 也未触发已知兼容性问题。

## 6. 功能请求与路线图信号
- [#574](https://github.com/moltis-org/moltis/issues/574) **[Feature]: Model Routing Per topic**
**路线图研判：** “按主题路由模型”若落地，将显著提升 Moltis 作为个人 AI 助手的任务调度灵活性。结合当前 PR 均为文档依赖维护的现状，该功能大概率仍处于需求验证或设计排期阶段。若下一版本纳入，预计会伴随 `model-router`、`topic-classifier` 或配置 schema 相关的架构调整。建议维护者在项目 Roadmap 或 Issue 中同步该需求的优先级状态，以管理社区预期。

## 7. 用户反馈摘要
基于今日活跃 Issue 的元数据与标题语境提炼：
- **核心痛点：** 现有模型调用策略可能偏单一，无法根据对话内容（如代码生成、日常问答、长文本分析）自动匹配能力与成本最优的 LLM。
- **使用场景：** 个人 AI 助手在混合负载下需要“轻量模型处理简单指令 + 强模型处理复杂推理”的分级路由机制。
- **情绪倾向：** 建设性增强建议（Enhancement）。用户已勾选 Preflight Checklist 并主动检索既有请求，表明需求真实、经过调研且符合开源协作规范。

## 8. 待处理积压
- **Issue #574** ([链接](https://github.com/moltis-org/moltis/issues/574))：创建于 2026-04-06，距今已超 3 个月。虽昨日有更新且评论数达 5 条，但尚未获得维护者明确回复、标签变更或实现计划。建议优先响应，哪怕仅确认“已收到/排期中”，也可有效降低社区信任损耗。
- **PR #1161** ([链接](https://github.com/moltis-org/moltis/pull/1161))：Dependabot 自动提交的 Astro 依赖升级，当前状态为待合并。虽为常规操作，但建议尽快合并以维持文档站安全基线与构建环境一致性。

---
**📊 项目健康度总结**
| 维度 | 状态 | 说明 |
|:---|:---|:---|
| 活跃度 | 🟡 低 | 仅 1 Issue + 1 自动化 PR，无核心提交 |
| 交付节奏 | 🟡 停滞/常规维护 | 无 Release，无功能型 PR 合并 |
| 社区参与 | 🟢 正常 | Issue 讨论持续，用户遵循协作规范 |
| 技术债/依赖 | 🟢 良好 | Dependabot 自动跟踪并推送文档依赖更新 |
| 维护者响应 | 🔴 需关注 | 长期 Issue 缺乏明确反馈，建议提速响应 |

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