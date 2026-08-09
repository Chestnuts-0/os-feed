# OpenClaw 生态日报 2026-07-21

> Issues: 353 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 01:44 UTC

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



# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**日期**：2026-07-21 | **分析口径**：基于各仓库公开社区动态

---

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态已从“单点功能验证”全面转入“生产就绪工程化”阶段。头部项目（Hermes Agent、CoPaw、ZeroClaw）保持高频迭代，核心诉求集中在 Agent 编排路由、协议标准化、可观测性、评估流水线与安全门禁。与此同时，桌面端体验、Windows 构建分发、依赖现代化等工程细节成为差异化竞争焦点。OpenClaw 作为核心参照项目今日数据缺失，但其生态位可通过竞品动态反向映射：框架层竞争已明确收敛至**协议抽象、评估体系与供应链安全**三大基础设施。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release 情况 | 健康度评估 |
|------|-------------|---------|--------------|------------|
| OpenClaw | 数据缺失 | 数据缺失 | 数据缺失 | ⚠️ 摘要未生成，暂无法评估 |
| NanoBot | 数据缺失 | 数据缺失 | 数据缺失 | ⚠️ 摘要未生成，暂无法评估 |
| Hermes Agent | ~50 | ~50 | v0.19.0（昨日） | 🟢 高活跃 / 版本快速验证期 |
| PicoClaw | 数据缺失 | 数据缺失 | 数据缺失 | ⚠️ 摘要未生成 |
| NanoClaw | 数据缺失 | 数据缺失 | 数据缺失 | ⚠️ 摘要未生成 |
| NullClaw | 0 | 1（Dependabot） | 无 | 🟡 低活跃 / 常规维护 |
| IronClaw | 数据缺失 | 数据缺失 | 数据缺失 | ⚠️ 摘要未生成 |
| LobsterAI | 0 | 15（10合并） | 无 | 🟢 高产出 / 内部闭环打磨 |
| TinyClaw | 0 | 0 | 无 | 🔴 停滞 / 无活动 |
| Moltis | 0 | 0 | 无 | 🔴 停滞 / 无活动 |
| CoPaw | 30 | 42（10合并） | 无 | 🟢 高活跃 / v2迁移收敛期 |
| ZeptoClaw | 0 | 0 | 无 | 🔴 停滞 / 无活动 |
| ZeroClaw | 39 | 50（12合并） | 无 | 🟢 高活跃 / 路线图强执行 |

---

## 3. OpenClaw 在生态中的定位
尽管今日 OpenClaw 社区数据未能生成，但结合其“核心参照”定位与竞品动态，可作如下推断：
- **优势预期**：作为早期参照项目，OpenClaw 通常在基础运行时、网关抽象或轻量部署路径上具备先发积累，适合追求低门槛接入的个人开发者。
- **技术路线差异**：与 Hermes Agent 的 `ACPClient` 泛化路由、CoPaw 的 AgentScope 底层格式迁移、ZeroClaw 的 SOP 守护进程级控制面相比，OpenClaw 若继续停留在基础桥接层而缺乏评估框架与安全证明（如 SBOM/Attestation），将在生产级场景中面临架构债务压力。
- **社区规模对比**：Hermes Agent 已累积 450+ 贡献者，CoPaw 与 ZeroClaw 单日 PR 更新均超 40 条。若 OpenClaw 未同步建立规模化贡献者入口与 CI 自动化流水线，社区活跃度可能被头部项目拉开差距。
> 建议优先补充 OpenClaw 的 Issue 热区、Release Notes 与贡献者分布数据，以完成精确对标。

---

## 4. 共同关注的技术方向

| 技术方向 | 具体诉求 | 涉及项目 |
|----------|----------|----------|
| **协议标准化与多 Provider 路由** | 统一 ACP/MCP 客户端、按任务类型预配置模型/推理路由、降低子 Agent 切换风险 | Hermes Agent、CoPaw、ZeroClaw |
| **可观测性与成本透明** | Cron 错过任务审计日志、reasoning token 计费修正、JUnit/LLM-Judge 校准与 `pass@k` 统计 | Hermes Agent、ZeroClaw |
| **安全与供应链加固** | SSRF 封堵、Skill 沙箱门禁、GitHub Attestation + SBOM、环境变量隔离防泄漏 | ZeroClaw、LobsterAI、NullClaw |
| **桌面/浏览器端体验** | 多文件夹会话状态修复、Windows 安装器分发、浏览器多注释附件渲染、Electron/React 升级 | Hermes Agent、LobsterAI、CoPaw |
| **依赖现代化与 CI/CD 治理** | Dependabot 自动合并时效、PyPI sdist 打包清理、brew 兼容核对、基础镜像安全补丁对齐 | Hermes Agent、NullClaw、LobsterAI |

---

## 5.

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 | 2026-07-21

## 1. 今日速览
过去 24 小时 Hermes Agent 保持高活跃开发节奏，Issues 与 PR 更新量均达 50 条，社区贡献者持续涌入（v0.19.0 累计 450+ 位贡献者）。昨日刚发布的 v0.19.0 进入快速验证期，社区已集中反馈桌面端会话状态、安装打包、定时任务认证及多平台网关连接等问题。整体项目健康度良好，但版本发布后的回归治理与安装体验优化成为当前首要任务；PR 队列中有大量面向跨端一致性、Agent 编排路由、可观测性与安全加固的实质性推进。

---

## 2. 版本发布
**v0.19.0（The Quicksilver Release）| 2026-07-20**
- **规模指标**：自 v0.18.0 以来累计 ~2,245 commits、~1,065 merged PRs、~3,300 issues closed，涉及 ~300,000 行新增与 ~36,000 行删除。
- **核心定位**：本轮为大规模功能迭代与架构收敛版本，覆盖 Gateway 多平台桥接、桌面端会话管理、Cron 调度、Voice/STT 管线、MCP/ACP 协议扩展及计费模型校准。
- **迁移注意**：官方未在此摘要中附带完整 Changelog，建议升级前查阅 [GitHub Releases](https://github.com/NousResearch/hermes-agent/releases/tag/v0.19.0)。社区已报告 `brew upgrade` 与 PyPI sdist 打包残留测试用例等环境兼容问题，建议在正式生产环境采用 venv 隔离安装并核对 `~/.hermes/config.yaml` 中的 provider/cron 配置。

---

## 3. 项目进展
过去 24 小时共 50 条 PR 更新，其中 7 条已合并/关闭，43 条待合并。重点推进方向如下：

| 方向 | 代表 PR | 状态 | 进展说明 |
|------|---------|------|----------|
| Agent 编排与路由 | [#68304](https://github.com/NousResearch/hermes-agent/pull/68304) feat: named delegation routes | OPEN | 支持按任务类型预配置 provider/model/reasoning 路由，降低子 Agent 任意切换模型的風險 |
| ACP 协议扩展 | [#68222](https://github.com/NousResearch/hermes-agent/pull/68222) feat(acp): generalize ACP client | OPEN | 将 Copilot ACP 集成泛化为统一 `ACPClient`，支持 Claude Code/Codex/Gemini/Qwen 等 |
| 计费与成本 | [#68308](https://github.com/NousResearch/hermes-agent/pull/68308) fix(pricing): include reasoning tokens | OPEN | 修复 `estimate_usage_cost()` 忽略 reasoning_tokens 导致的系统性低估 |
| Cron 可观测性 | [#54349](https://github.com/NousResearch/hermes-agent/pull/54349) feat(cron): audit log for missed jobs | OPEN | 为错过执行时间的任务生成审计日志，解决调度静默跳过问题 |
| 桌面端会话管理 | [#68293](https://github.com/NousResearch/hermes-agent/pull/68293) fix(desktop): drill into project folders | OPEN | 修复多文件夹 Project 下会话列表重复/错位问题 |
| 已合拢/关闭 | [#68309](https://github.com/NousResearch/hermes-agent/pull/68309) fix(kanban) | CLOSED | 对齐 Kanban 交接契约；[#67817](https://github.com/NousResearch/hermes-agent/pull/67817) 修复 Telegram HTTPXRequest 只读属性报错 |

**整体判断**：项目正从“功能堆叠”转向“协议标准化 + 可观测性 + 

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 | 2026-07-21

## 1. 今日速览
2026年7月21日，NullClaw 项目整体处于**低活跃度、常规维护**状态。过去24小时内无新增 Issue、无已合并/关闭的 PR，亦无新版本发布。唯一活跃项为 Dependabot 自动提交的容器依赖更新 PR [#956](https://github.com/nullclaw/nullclaw/pull/956)，目前仍处于待合并状态。项目健康度表现平稳，未出现破坏性变更或社区争议，当前工作重心集中在基础设施加固与自动化依赖管理上。

## 2. 版本发布
今日无新版本发布，本章节省略。

## 3. 项目进展
今日无已合并或关闭的 PR。当前仅有一条待处理 PR：[#956](https://github.com/nullclaw/nullclaw/pull/956)，由 `dependabot[bot]` 于 2026-06-15 创建，最近一次状态更新为 2026-07-20。该 PR 将 Docker 镜像组中的基础镜像 `alpine` 从 3.23 升级至 3.24，属于常规的安全补丁对齐与容器兼容性维护。项目整体推进幅度较小，尚未进入核心功能开发或架构迭代阶段，主要维持依赖链路的时效性。

## 4. 社区热点
今日无高讨论度 Issue 或 PR。唯一相关条目为 [#956](https://github.com/nullclaw/nullclaw/pull/956)，评论与点赞数均为 0，反映该更新完全由自动化流水线触发，社区人工参与度较低。背后的核心诉求是保障 Docker 部署环境的底层依赖安全与版本一致性，而非用户驱动的功能演进或设计讨论。

## 5. Bug 与稳定性
今日无新增 Bug 报告、崩溃日志或回归问题。Alpine 3.24 的升级若顺利合并，将有助于消除旧版基础镜像潜在的安全补丁滞后风险，间接提升容器构建与运行环境的稳定性。当前无已知严重稳定性告警或质量阻断项。

## 6. 功能请求与路线图信号
今日无新功能需求提交。基于现有数据，无法判断下一版本的路线图方向。建议后续关注仓库 `enhancement`/`feature-request` 类 Issue 标签及 Discussion 板块，以捕捉用户侧的真实功能诉求与优先级信号。

## 7. 用户反馈摘要
今日无新 Issue 及评论数据，未能提取到直接的用户痛点、使用场景或满意度反馈。项目近期公开交互集中于机器账号的自动化维护，人工用户声音暂未在 Issue 渠道体现。

## 8. 待处理积压
PR [#956](https://github.com/nullclaw/nullclaw/pull/956) 自 2026-06-15 提交至今已开放约 **36 天**，虽为 Dependabot 常规依赖更新，但长期滞留待合并可能影响下游用户的容器镜像安全性与合规要求。建议维护者优先审查并合并该 PR，同时排查仓库内是否存在其他同类自动化 PR 积压，保持 CI/CD 依赖链路的响应时效。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 | 2026-07-21

## 1. 今日速览
过去 24 小时 LobsterAI 仓库保持高开发活跃度，共产生 15 条 PR（10 条已合并/关闭，5 条待合并），Issues 更新为 0，无新版本发布。今日工作重心集中在 Windows 构建分发优化、Cowork 浏览器多注释附件能力、会话/聊天界面稳定性修复，以及 Electron、React 等核心依赖的大版本升级。整体项目健康度良好，核心维护者协同效率高，代码进入密集打磨期；但本期缺乏公开 Issue 讨论与外部社区反馈输入，主要依赖内部贡献闭环。

## 2. 版本发布
本期无新版本发布。

## 3. 项目进展
今日合并的 PR 覆盖打包分发、协作渲染、配置热更新、认证流程与依赖治理五个方向，项目整体向“体验精细化 + 依赖现代化”迈进：
- **Windows 构建与安装器**：[#2367](https://github.com/netease-youdao/LobsterAI/pull/2367) 新增 `dist-win-channel.cjs` / `dist-win-web.cjs` 显式入口，隔离 `keyfrom` 与 `web-installer` 环境变量，消除跨构建泄漏风险

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



# CoPaw 项目动态日报 | 2026-07-21
> *注：本日报基于 `agentscope-ai/QwenPaw` 仓库公开数据生成，项目口径沿用 CoPaw。*

## 1. 今日速览
过去 24 小时 CoPaw 保持**高活跃状态**：Issues 更新 30 条（活跃 22 / 关闭 8），PR 更新 42 条（待合并 32 / 已合并或关闭 10），无新版本发布。当前项目处于 **v2.0.x 向 v2.1 过渡的密集收敛期**，核心工作围绕 AgentScope 2 底层格式迁移后的推理一致性、工具调用生命周期重构、记忆系统索引优化及浏览器自动化增强展开。社区贡献者活跃度高，多个关键修复与功能 PR 已进入 `Under Review` 或 `ready-for-human-review` 阶段。整体健康度评估：**高产出、高参与度，但 v2 迁移

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 | 2026-07-21

## 1. 今日速览
ZeroClaw 在过去 24 小时内保持高活跃开发节奏，累计更新 Issues 39 条、PRs 50 条，无新版本发布。当前工程重心高度集中在 **SOP 控制面落地、Agent 评估框架（Eval Harness）模块化扩展、运行时鲁棒性修复与安全门禁加固** 三条主线上。维护者响应迅速，多个 P1/S1 问题当日即有对应 PR 或诊断跟进，项目整体健康度与路线图执行力处于高位。尽管 Windows 平台测试与部分 TUI 交互体验仍有摩擦，核心运行时、网关与协议层的改进正在系统性提升产品成熟度。

## 2. 版本发布
**暂无新版本发布。** 当前所有功能迭代仍停留在 `master` 分支开发与 PR 评审阶段，预计 Eval Harness、SOP 认证扇入、Skill 沙箱门禁等模块将在后续 Beta 或 v0.9.x 周期内随里程碑打包。

## 3. 项目进展
过去 24 小时共有 **12 个 PR 完成合并/关闭**，另有 38 个 PR 处于待合并状态。今日推进的核心进展如下：

| 方向 | 关键 PR | 进展说明 |
|------|---------|----------|
| **SOP 管道** | [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203)、[#9205](https://github.com/zeroclaw-labs/zeroclaw/pull/9205)、[#8979](https://github.com/zeroclaw-labs/zeroclaw/pull/8979) | 完成认证 HTTP 扇入、集中化 `SopIngress` 适配器与渠道门禁审批块，SOP 从“实验性可视化编排”向“守护进程级控制面”收敛。 |
| **Eval 框架** | [#9220](https://github.com/zeroclaw-labs/zeroclaw/pull/9220)、[#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221)、[#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222)、[#9223](https://github.com/zeroclaw-labs/zeroclaw/pull/9223)、[#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) | 单日密集交付 5 个 PR，补齐运行收据、Git 版本基线/回归门禁、LLM-Judge 校准、JUnit 报告与 `pass@k` 统计，评估基础设施已具备 CI 集成条件。 |
| **运行时优化** | [#9201](https://github.com/zeroclaw-labs/zeroclaw/pull/9201)、[#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) | 修复 `shared_budget` 并发下溢崩溃；移除 Agent 循环中每轮工具 Schema 深拷贝，降低长会话 CPU/内存开销。 |
| **安全与供应链** | [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)、[#9084](https://github.com/zeroclaw-labs/zeroclaw/pull/9084)、[#9211](https://github.com/zeroclaw-labs/zeroclaw/pull/9211) | 封堵 `file_download` SSRF 面、引入 Skill 安装屏幕/收据/沙箱门禁、将发布制品证明统一为 GitHub Attestation + SBOM。 |
| **网关与渠道** | [#9002](https://github

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*