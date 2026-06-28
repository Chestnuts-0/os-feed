# OpenClaw 生态日报 2026-06-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-28 02:32 UTC

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
**日期：** 2026-06-28
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
2026年6月28日，OpenClaw 社区保持极高的活跃度，过去24小时内共产生 **500 条 Issue** 和 **500 条 PR** 更新，显示出庞大的用户基数和密集的迭代节奏。核心焦点集中在 **会话状态管理（Session State）**、**内存泄漏（OOM）** 以及 **嵌入式子代理（Embedded Agent）的稳定性** 上。虽然无新版本发布，但大量 PR 正在修复关键的可靠性问题，特别是针对 Telegram、Discord 等多渠道集成的消息丢失和上下文溢出恢复机制。整体项目处于“高负荷稳定期”，维护者正全力处理积压的技术债务。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在底层基础设施加固和特定渠道的体验优化：
*   **PR #96668** (`fix(agents): keep lightweight cron prompts out of no-op compaction`): 解决了轻量级定时任务在上下文压缩时占用过多窗口的问题，提升了资源效率。
*   **PR #68936** (`Autofix: add PR review autofix pipeline + Windows daemon`): 引入了自动化修复管道和 Windows 守护进程，显著降低了维护者的人工审查负担，提升了开发流程的自动化水平。
*   **PR #97197** (`fix(telegram): tell models to use <tg-math> for rich-text formulas`): 修复了 Telegram 中数学公式渲染为纯文本的问题，改善了多模态交互体验。
*   **PR #97342** (`Fix embedded transcript flush before afterTurn`): 修复了嵌入式会话转录本在最终化前未写入磁盘导致的潜在数据丢失风险，增强了持久性保障。

## 4. 社区热点
以下是评论数最多、关注度最高的议题：

*   **[P1] Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic)** (#92201)
    *   **热度:** 15 条评论, 1 👍
    *   **分析:** 用户报告 Anthropic 思维链签名在重放时失效，且错误信息被泛化处理导致恢复机制无法触发。这影响了高级推理功能的稳定性，是 P1 级严重问题。
    *   [链接](https://github.com/openclaw/openclaw/issues/92201)

*   **[P2] Agent can promise a later follow-up without starting any actual follow-up action** (#58450)
    *   **热度:** 15 条评论, 3 👍
    *   **分析:** 代理承诺后续跟进但未执行任何后台动作，导致用户体验断裂。这是关于“代理行为一致性”的核心痛点，高点赞数表明社区对此类“空承诺”高度反感。
    *   [链接](https://github.com/openclaw/openclaw/issues/58450)

*   **[P2] Heartbeat isolated mode: cadence stalls...** (#65161)
    *   **热度:** 14 条评论, 1 👍
    *   **分析:** 心跳机制在隔离模式下停滞，且命令输出误导性标签。这影响了长运行会话的状态监控能力。
    *   [链接](https://github.com/openclaw/openclaw/issues/65161)

*   **[P1] [Bug]: Coding Agent never completes anything** (#62505)
    *   **热度:** 14 条评论, 1 👍
    *   **分析:** 回归问题，编码代理陷入无限循环或停滞。对于依赖自动编码的用户来说，这是阻断性的故障。
    *   [链接](https://github.com/openclaw/openclaw/issues/62505)

*   **[Enhancement] Per-agent memory-wiki vault configuration** (#63829)
    *   **热度:** 10 条评论, 9 👍
    *   **分析:** 获得极高点赞的多代理内存隔离需求。用户希望在多代理环境中实现知识图谱的物理隔离，避免上下文污染。
    *   [链接](https://github.com/openclaw/openclaw/issues/63829)

## 5. Bug 与稳定性
今日报告了大量影响稳定性和数据完整性的 Bug，按严重程度排序：

*   **🔴 高严重性 (P1/Crash/Data Loss):**
    *   **#95833 & #95915 (Closed/Open):** 子代理中止时 `.jsonl.lock` 文件未被释放，导致会话永久锁定和堆内存未释放。这是导致 Gateway 进程逐渐耗尽资源的直接原因之一。
        *   [Issue #95833](https://github.com/openclaw/openclaw/issues/95833) | [Issue #95915](https://github.com/openclaw/openclaw/issues/95915)
    *   **#55334:** `sessions.json` 无限制增长导致 Gateway OOM。`skillsSnapshot` 在每个会话中重复存储，且未清理临时会话。
        *   [链接](https://github.com/openclaw/openclaw/issues/55334)
    *   **#54155:** Gateway 内存泄漏，4天内从 389MB 飙升至 14.7GB。
        *   [链接](https://github.com/openclaw/openclaw/issues/54155)
    *   **#63216:** 在高 `reserveTokensFloor` 配置下，重复硬重置导致引导上下文被重新注入，引发无限循环或状态混乱。
        *   [链接](https://github.com/openclaw/openclaw/issues/63216)

*   **🟠 中严重性 (Regression/Functionality):**
    *   **#62505:** 编码代理回归问题，无法完成任务。
    *   **#58957:** 模型切换时，若上下文过大则静默失败，缺乏明确错误提示。
    *   **#66443:** 溢出恢复期间角色为 `user` 的消息重复，加剧上下文膨胀。
    *   **#64664:** Gateway 重启后审批 ID 丢失，导致用户点击“批准”时出现混淆的错误信息。

*   **🟡 低严重性 (Config/UI):**
    *   **#53628:** 安装 Skill 时未处理 `XDG_CONFIG_HOME` 环境变量。
    *   **#51429:** 工作路径被硬编码为用户 `wangtao` 的个人目录，疑似测试提交未清理。
    *   **#67366:** `openclaw onboard` 替换 Telegram Token 时报错。

## 6. 功能请求与路线图信号
*   **多代理协作增强 (#35203):** 提出能力画像、共享黑板和分层记忆，反映了对复杂多代理工作流支持的强烈需求。
*   **远程重排序器支持 (#64438):** 用户希望像支持远程 Embedding 一样支持远程 Reranker，以提升搜索精度并降低本地算力压力。
*   **多索引嵌入内存 (#63990):** 请求支持多模型嵌入以提供故障转移能力，确保单一向量模型不可用时服务不中断。
*   **Gateway 生命周期钩子 (#43454):** 请求在子代理完成、工具调用阈值等时刻触发 Hook，以增强可观测性和自动化控制。
*   **持久任务状态表面 (#52640):** 针对长时间运行的频道对话，需要一个权威的任务状态显示区域，而非零散的打字指示器。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍对 **内存泄漏** 和 **会话状态不一致** 感到沮丧。多个 Issue 指出 Gateway 在长时间运行后变得无响应，或者在重启后丢失关键状态（如审批 ID、子代理锁）。
*   **体验断裂：** “代理承诺但不执行” (#58450) 和 “心跳打断回复” (#64810) 是两个高频抱怨点，破坏了人机交互的自然流畅感。
*   **安全与隐私：** 用户关注敏感数据脱敏 (#64046) 和配置中的明文存储问题，以及对 Mattermost 回调 URL 的安全隐患担忧 (#65624)。
*   **渠道适配：** Telegram 和 Discord 的用户对消息丢失、路由错误（#58514, #44502）和格式渲染问题（#97197）反馈较多，表明多渠道集成仍是稳定性短板。

## 8. 待处理积压
*   **#57326:** CLI 后端辅助路径仍绕过 CLI 分发，存在安全边界漏洞。
*   **#57901:** Safeguard 压缩忽略 `compaction.model` 配置，导致意外的高成本或低质量压缩。
*   **#67419:** 启动文件在每轮对话中重复注入，浪费 20-30% 的上下文窗口，需优化引导逻辑。
*   **#51396:** `clearUnboundScopes` 无条件剥离非本地客户端的操作员权限，导致后端集成失效。

---
*报告生成时间：2026-06-28T23:59:59Z*
*分析师：Agnes-2.0-Flash*

---

## 横向生态对比

### 2026-06-28 个人 AI 助手开源生态横向对比分析报告

#### 1. 生态全景
2026年6月，个人 AI 助手开源生态已进入**“深水区”**，竞争焦点从单纯的功能堆砌转向**系统稳定性、安全性与多代理协作的复杂性管理**。OpenClaw 凭借极高的社区吞吐量成为事实上的行业标准参照系，而其他项目如 NanoBot、Hermes Agent 等则在垂直领域（如轻量级、企业级安全）寻求差异化突破。整体态势表现为：底层基础设施（网关、凭证管理、会话持久化）的健壮性修复占据主导，多模态支持和 MCP 协议集成成为新的功能高地，而供应链安全（Supply Chain Security）开始进入核心路线图。

#### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 核心特征 |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | 无 | **高负荷/高维护** | 规模效应显著，技术债务集中爆发，稳定性修复为主。 |
| **NanoBot** | 8 | 43 | 无 | **优秀/高响应** | 小而美，安全与底层逻辑修复密集，维护者响应极快。 |
| **Hermes Agent** | 50 | 50 | 无 | **高活跃/快速迭代** | 聚焦多平台网关稳定性与凭证池并发问题，工程化程度高。 |
| **PicoClaw** | 3 | 3 | 无 | **稳健/中速** | 聚焦底层协议（MCP）与多代理协作总线，Go 语言优势显现。 |
| **NanoClaw** | 1 | 8 | 无 | **中等/功能增强** | 容器化部署优化与技能更新机制修复，面向运维场景。 |
| **NullClaw** | 1 | 1 | 无 | **低频/特定场景** | 聚焦移动端/边缘设备（Termux）兼容性与结构化合规。 |
| **IronClaw** | 9 | 22 | 无 | **高活跃/重构期** | Reborn 架构落地，企业级权限控制（RBAC）为核心驱动力。 |
| **LobsterAI** | 2 | 8 | 无 | **中高/稳定维护** | 网易有道背景，侧重安装兼容性、数据备份与 UI 体验。 |
| **TinyClaw** | 0 | 0 | 无 | **停滞/低频** | 近期无显著活动。 |
| **Moltis** | 1 | 2 | 无 | **中等/本地化专注** | 聚焦小参数模型（Gemma/oMLX）的序列化兼容性与本地部署。 |
| **CoPaw** | 5 | 14 | 无 | **高活跃/测试驱动** | 基于 Agentscope 2.0，侧重测试覆盖率与插件生态修复。 |
| **ZeptoClaw** | 0 | 0 | 无 | **停滞/低频** | 近期无显著活动。 |
| **ZeroClaw** | 45 | 50 | 无 | **高活跃/架构演进** | 供应链安全、Wasm 插件架构与 MCP 完整支持并重。 |

#### 3. OpenClaw 在生态中的定位
*   **行业基准与规模领导者**：OpenClaw 以日均数百条 Issue/PR 的体量，确立了其在通用型个人 AI 助手领域的“操作系统”地位。其社区反馈直接定义了行业标准（如会话状态管理、多渠道集成痛点）。
*   **技术路线差异**：相比 NanoBot 的极简主义和 Hermes Agent 的企业级网关侧重，OpenClaw 采用**全渠道、多代理嵌套**的复杂架构。其优势在于生态丰富度和渠道覆盖广度，但代价是极高的维护成本和复杂性（如 OOM、上下文溢出）。
*   **社区规模对比**：OpenClaw 的社区活跃度是第二名（Hermes/ZeroClaw）的 10 倍以上，形成了显著的“马太效应”。其他项目更多服务于特定技术栈（如 Rust/Go）或特定部署场景（如边缘计算、企业内网）。

#### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **会话状态与内存管理** | OpenClaw, NanoBot, ZeroClaw, LobsterAI | **痛点**：OOM、上下文溢出、会话锁死、数据持久化失败。<br>**诉求**：更健壮的压缩算法、自动垃圾回收、断点续传机制。 |
| **MCP 协议集成与扩展** | PicoClaw, ZeroClaw, CoPaw, NanoBot | **趋势**：从单纯的工具调用扩展到 Resource/Prompt 支持。<br>**诉求**：标准化多模态传输（如图片作为 Artifact）、远程 Reranker/Embedding 支持。 |
| **多代理协作与权限控制** | OpenClaw, PicoClaw, IronClaw, ZeroClaw | **演进**：从单代理向多代理工作流过渡。<br>**诉求**：细粒度 RBAC、代理间隔离内存、结构化审批流程（Approval Flow）。 |
| **供应链安全与合规** | ZeroClaw, IronClaw, OpenClaw | **新兴**：SBOM、Cosign 签名、凭证安全。<br>**诉求**：防止凭证泄露、自动化安全扫描、可追溯的构建流程。 |
| **多渠道网关稳定性** | OpenClaw, Hermes Agent, LobsterAI | **基础**：Telegram/Discord/WhatsApp 连接保活。<br>**诉求**：自动重连、心跳机制优化、消息丢失恢复。 |

#### 5. 差异化定位分析

*   **OpenClaw**：**通用型旗舰**。适合追求功能全面、多渠道集成和多代理复杂工作流的开发者/极客用户。优势是生态最大，劣势是复杂性高，需自行处理大量技术债务。
*   **NanoBot**：**轻量级/嵌入式专家**。适合资源受限环境或对启动速度、依赖极简有极致要求的用户。Rust 语言带来高性能，但功能相对聚焦。
*   **Hermes Agent**：**企业级/生产环境首选**。强调网关稳定性、凭证管理和多租户支持。适合需要在生产环境中部署、对安全性和可观测性有高要求的团队。
*   **IronClaw**：**安全合规导向**。Reborn 架构专注于细粒度权限控制和审计，适合对数据主权和操作合规性有严格要求的组织。
*   **PicoClaw/ZeroClaw**：**架构创新者**。PicoClaw 利用 Go 语言优势探索内部协作总线；ZeroClaw 激进地引入 Wasm 插件运行时和供应链安全，适合关注前沿架构和安全性的开发者。
*   **Moltis/CoPaw**：**特定模型/框架适配**。Moltis 专注小模型本地兼容性；CoPaw 深度绑定 Agentscope 生态，适合已有 Agentscope 技术栈的用户。

#### 6. 社区热度与成熟度

*   **快速迭代/高增长阶段**：
    *   **OpenClaw**：用户基数巨大，需求多样化，处于功能快速扩张与稳定性博弈期。
    *   **ZeroClaw**：架构激进，RFC 讨论活跃，处于定义下一代标准的关键期。
    *   **IronClaw**：核心重构完成，正在填充企业级功能，活跃度紧随其后。
*   **质量巩固/深度优化阶段**：
    *   **NanoBot**：代码库相对稳定，重点在于修补边缘情况和提升安全性。
    *   **Hermes Agent**：经过多轮迭代，核心路径稳定，重点在于解决长尾 Bug 和优化用户体验。
    *   **LobsterAI**：侧重用户体验细节和本地化部署兼容性，属于成熟产品的精修期。
*   ** niche/特定场景阶段**：
    *   **PicoClaw, Moltis, NullClaw**：服务于特定技术栈或硬件环境，社区虽小但粘性高，问题更具针对性。

#### 7. 值得关注的趋势信号

1.  **从“能用”到“可靠”的范式转移**：
    *   **信号**：所有头部项目（OpenClaw, Hermes, NanoBot）的 PR 中，超过 60% 涉及内存泄漏、会话锁死、网关断连等稳定性问题。
    *   **启示**：开发者应优先关注系统的**可恢复性（Resilience）**设计，如自动重试、状态快照、优雅降级，而非仅仅追求新功能。

2.  **MCP 协议的全面深化**：
    *   **信号**：PicoClaw 和 ZeroClaw 不再满足于简单的 Tool Call，而是向 Resource、Prompt 和结构化数据交换延伸。
    *   **启示**：未来的 AI 代理将更像“微服务聚合器”，MCP 将成为代理间通信和数据交换的事实标准。开发者需提前适配 MCP 2.0+ 规范。

3.  **安全左移与供应链信任**：
    *   **信号**：ZeroClaw 引入 SLSA/Cosign，IronClaw 强化 RBAC，OpenClaw 关注凭证泄露。
    *   **启示**：AI 应用的安全边界已从“模型幻觉”扩展到“系统入侵”和“数据泄露”。构建可验证的软件供应链和细粒度的运行时权限控制将成为企业级 AI 助手的标配。

4.  **多代理协作的标准化尝试**：
    *   **信号**：OpenClaw 的嵌入式代理、PicoClaw 的协作总线、IronClaw 的能力策略。
    *   **启示**：单体代理的极限已过，**多代理编排（Multi-Agent Orchestration）**成为竞争新高地。如何定义代理间的通信协议、职责划分和冲突解决机制，将是下一阶段的技术壁垒。

5.  **本地化与小模型的下沉**：
    *   **信号**：Moltis 专注小模型序列化兼容，NanoBot 强调轻量，NullClaw 探索 Termux 部署。
    *   **启示**：隐私保护和离线能力需求上升。能够高效运行在小参数模型（<10B）上并保持稳定性的代理框架，将在边缘设备和隐私敏感场景中获得更大市场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-06-28
**数据来源：** GitHub (HKUDS/nanobot)

## 1. 今日速览
NanoBot 在 2026 年 6 月 28 日展现出极高的社区活跃度与工程响应速度。过去 24 小时内，项目共处理 8 个 Issues 和 43 个 Pull Requests，其中 29 个 PR 已合并或关闭，显示出维护者对代码库质量控制的严格态度。今日核心焦点集中在**安全性修复**（Shell 链式注入漏洞）和**底层稳定性优化**（会话键冲突、流式处理合并错误）。虽然无新版本发布，但大量关键 Bug 修复即将进入下一个稳定版本，项目整体健康度良好，技术债务正在快速偿还。

## 2. 版本发布
*   **当前状态：** 无新版本发布。
*   **备注：** 鉴于今日集中修复了多个严重的安全隐患和核心逻辑 Bug，建议维护者在合并剩余 PR 后尽快发布补丁版本（如 v0.2.3 或 v0.2.2.1），以解决 `exec` 工具的安全风险。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在底层架构的健壮性提升和安全加固：

*   **安全加固：** PR #4562 修复了 `exec.allowPatterns` 被 shell 链绕过的问题（关联 Issue #4521），这是今日最重要的安全修复。PR #4518 相关的默认登录 Shell 执行泄露秘密问题也在审查中。
*   **会话管理修复：** PR #4533 解决了不同会话键在磁盘上因文件名清洗导致的碰撞问题（Issue #4057），确保了多平台会话数据的隔离性。
*   **流式处理优化：** PR #4530 和 #4531 分别修复了非流式解析器中的工具调用 ID 去重问题，以及流式 Delta 合并时忽略 `_stream_id` 导致的消息错乱问题（Issue #4063）。
*   **Provider 兼容性：** PR #4532 修复了 Anthropic Provider 中内容块缺少 `type` 字段导致的 API 拒绝问题（Issue #4060）。

**整体评价：** 项目从“功能开发”阶段转向“深度优化与维稳”阶段，核心引擎的稳定性显著增强。

## 4. 社区热点
*   **高关注度 Issue #660：** 用户指出 NanoBot 自称“超轻量级”却依赖 Node.js 和 Python，引发关于架构定位的讨论（5 👍, 14 评论）。这反映了用户对“轻量”定义的敏感度，建议维护者在文档中明确界定“轻量”是指运行时开销而非依赖数量，或考虑移除 Node.js 依赖。
*   **WebUI 体验痛点 Issue #4500：** 用户报告 WebUI 在自重启后陷入“处理中”死锁，且停止按钮失效。该问题直接影响了用户体验，PR #4565 正在积极修复此问题。
*   **活跃 PR #4542：** 关于 MCP 工具返回图片内容的讨论，用户希望将图像作为 Artifact 传递而非序列化文本，这符合现代 AI Agent 的多模态趋势。

## 5. Bug 与稳定性
以下 Bug 按严重程度排列，多数已有对应 PR 修复：

| 严重程度 | 问题描述 | 关联 Issue | 修复 PR |
| :--- | :--- | :--- | :--- |
| **高危 (Security)** | `exec.allowPatterns` 可通过 shell 链绕过，导致未授权命令执行 | #4521 | #4562 (Open) |
| **高危 (Security)** | 默认登录 Shell 执行可能泄露环境变量中的敏感信息 | #4518 | 待确认 |
| **高 (Stability)** | 会话键文件名清洗导致不同会话碰撞，数据覆盖风险 | #4057 | #4533 (Closed) |
| **高 (Stability)** | 流式 Delta 合并逻辑缺陷，导致不同会话的消息流混淆 | #4063 | #4531 (Closed) |
| **中 (Bug)** | Anthropic Provider 缺少 `type` 字段导致 API 报错 | #4060 | #4532 (Closed) |
| **中 (Bug)** | 非流式解析器未去重 Tool Call ID，导致重复执行 | #4059 | #4530 (Closed) |
| **低 (UI/UX)** | WebUI 自重启后状态卡死，无法停止任务 | #4500 | #4565 (Open) |

## 6. 功能请求与路线图信号
*   **MCP 图像支持：** PR #4542 提出将 MCP 工具返回的图片作为 Artifact 传递，而非简单的文本序列化。这表明项目正在积极扩展对多模态 Agent 工作流的支持。
*   **Cron 静默模式：** PR #4225 和 #4357 引入了 `silent` 模式和 `lock_recipient`，允许定时任务仅在必要时通知用户。这满足了后台监控类场景的需求，预计将在下一版本中正式启用。
*   **Per-Session Model Preset：** PR #4555 允许每个会话独立指定模型预设，增强了配置的灵活性，适合需要混合使用不同能力模型的高级用户。
*   **Web Search 扩展：** PR #4406 添加了 Serper.dev 作为搜索引擎后端，丰富了网络搜索的选项。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍反映 WebUI 在处理长时间运行或重启后的状态同步存在缺陷（Issue #4500）。此外，对于“轻量级”项目的依赖复杂度表示担忧（Issue #660）。
*   **满意点：** 用户对 `exec` 工具的安全配置改进表示认可（尽管发现了漏洞，但社区响应迅速）。Cron 任务的静默模式功能受到了背景监控用户的欢迎。
*   **场景：** 大量用户在使用 Telegram 和 WhatsApp 等多渠道接入，因此会话隔离和音频转录（PR #4353）的稳定性至关重要。

## 8. 待处理积压
*   **Issue #660:** 依赖争议问题尚未从架构层面彻底解决，需维护者给出明确回应或文档澄清。
*   **PR #4562:** 安全修复 PR 仍为 Open 状态，鉴于其涉及命令执行安全，建议优先合并并触发紧急发布流程。
*   **PR #4565:** WebUI 状态卡死修复 PR 仍在 Open 状态，影响用户体验，建议加快测试与合并。
*   **PR #4534:** Agent 验证门控与恢复机制，旨在提高 Agent 在 Provider 故障时的可靠性，属于重要功能增强，目前仍为 Open。

---
*报告生成时间：2026-06-28*
*分析师：Agnes-2.0-Flash*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-28
**数据来源：** GitHub NousResearch/hermes-agent

## 1. 今日速览
2026年6月28日，Hermes Agent 项目展现出极高的维护活跃度与稳定性修复力度。在过去24小时内，团队共处理了 **50个 Issues** 和 **50个 Pull Requests**，其中 **40个 Issue 已关闭**，**32个 PR 已合并**。尽管当日无新版本正式 Release，但大量针对 v0.13.0 升级后出现的配置丢失、凭证池死锁及网关僵尸状态的紧急修复已被快速合并。项目重心明显偏向于解决“会话状态管理”、“多平台网关连接稳定性”以及“辅助任务计费漏洞”等核心痛点，整体健康度处于高修复率状态。

## 2. 版本发布
*   **当前状态：** 无新版本发布。
*   **备注：** 多个关键 Bug 修复（如 PR #53924, #53923, #53919）已合并至 `main` 分支，预计将随下一次补丁版本（Patch Release）或 v0.13.x 迭代一起发布。

## 3. 项目进展
今日主要推进了以下关键修复，显著提升了系统的鲁棒性：

*   **网关连接自愈能力增强：**
    *   合并了针对 Discord 适配器网络中断后进入“僵尸状态”的修复（**PR #53924**, **PR #26684**）。通过引入 REST 存活探针，网关现在能自动检测并重建死连接，无需手动重启服务。
    *   修复了 Telegram 网关工具结果无法投递的问题（关联 Issue #27230 的背景修复）。
*   **凭证池与认证流程优化：**
    *   解决了 Anthropic 401 错误导致的无限重试死锁，确保在凭证失效时能正确触发备用提供商（**PR #53919**）。
    *   修正了 OpenAI-Codex 凭证在旋转过程中被意外丢弃的问题（关联 Issue #19566）。
*   **配置持久化修复：**
    *   修复了 `save_config()` 导致默认配置项污染 `config.yaml` 的问题，防止配置文件膨胀（**PR #53925**）。
    *   解决了 CLI 中断命令 `/stop` 失效的问题，恢复用户对长时间运行任务的控制权（关联 Issue #22176 的修复逻辑）。

## 4. 社区热点
以下是今日讨论最激烈、关注度最高的 Issue 和 PR：

*   **[Bug] OpenAI-Codex 凭证池在旋转期间丢失凭证**
    *   **Issue #19566** (9 comments, Closed)
    *   **分析：** 用户报告在多进程环境下，`auth.json` 的重写导致新添加的凭证失效。这是 v0.13.0 后高频出现的并发竞争条件，社区对此类数据一致性问题的容忍度极低。
*   **[Feature] Desktop 远程客户端首次引导支持**
    *   **Issue #36970** (5 comments, Open, 3 👍)
    *   **分析：** 用户强烈希望桌面应用能直接连接现有的后端实例，而非强制本地启动新的 Hermes 进程。这反映了用户对“云原生+本地轻客户端”架构的需求增长。
*   **[Bug] 辅助任务静默回退到付费模型**
    *   **Issue #24029** (5 comments, Closed, 3 👍)
    *   **分析：** 用户配置了免费模型，但标题生成等后台任务却使用了付费的 OpenRouter 模型，导致意外扣费。此问题触及用户核心利益（成本），修复优先级极高（已关闭）。
*   **[Bug] 测试套件全面崩溃**
    *   **Issue #27004** (5 comments, Closed)
    *   **分析：** CI/CD 流水线因级联失败和超时变得不可用，阻碍了其他开发工作。该问题的解决为后续稳定开发扫清了障碍。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**状态管理**、**网络边缘情况**和**配置解析**上，严重程度普遍较高（P1）。

| 严重等级 | 问题描述 | 关联 Issue | 修复状态 | 关联 PR |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | **安全漏洞：** `hermes debug share` 暴露私有数据 | #22016 | ✅ Closed | - |
| **P1** | **安全追踪：** 跨用户会话劫持风险 (GHSA-7w36...) | #29149 | ✅ Closed | - |
| **P1** | **Gateway:** Discord 混合附件导致 HTTP 400 错误 | #25935 | ✅ Closed | #53923, #25936 |
| **P1** | **Agent:** Anthropic 401 死锁阻止备用提供商激活 | #26080 | ✅ Closed | #53919 |
| **P1** | **CLI:** 自定义模型配置在 v0.13.0 更新后全部消失 | #25272 | ✅ Closed | - |
| **P1** | **Gateway:** Launchd 双spawn 导致重启死亡螺旋 | #21549 | ✅ Closed | - |
| **P1** | **Agent:** 工具结果污染导致 HTTP 400 循环 | #27033 | ✅ Closed | - |
| **P2** | **TUI:** 上下文压缩后会话混叠 | #51058 | 🔄 Open | #53928 |
| **P2** | **Agent:** 子代理工具委托不一致 (文件/终端丢失) | #21658 | ✅ Closed | #53904, #5316 |

*   **稳定性评估：** 尽管 Bug 数量较多，但大部分 P1 级别的关键路径问题（如凭证死锁、Discord 网关崩溃、配置丢失）均在今日被标记为 Closed 或通过 PR 修复。系统稳定性正在快速回升。

## 6. 功能请求与路线图信号
*   **托管代理运行时契约 (Managed Agent Runtime):**
    *   **Issue #26675** (Open)
    *   **信号：** 用户希望基于现有的 `agent_control` 和 Kanban DAG 建立更正式的“托管代理”接口，以支持复杂的多代理工作流。这表明社区对**多代理协作**和**可观测性**有强烈需求，可能是未来版本的重点方向。
*   **桌面端远程连接体验:**
    *   **Issue #36970** (Open)
    *   **信号：** 除了上述提到的远程引导功能外，还隐含了对**解耦前端与后端**的架构偏好。如果此功能被采纳，Hermes 将更接近标准的 Client-Server 模式。

## 7. 用户反馈摘要
*   **痛点：**
    *   **“配置消失”恐慌：** 多位用户反映 v0.13.0 升级后自定义配置丢失或行为异常（#25272, #24433），这对信任度造成打击。
    *   **意外计费：** 辅助任务（如摘要生成）绕过免费配置使用付费模型（#24029, #44894）是用户投诉的高频点。
    *   **网络脆弱性：** Discord 和 Telegram 网关在网络波动时容易进入不可用状态，且缺乏自动恢复机制（#26656, #27230）。
*   **满意点：**
    *   **响应速度：** 社区对团队快速修复 P1 级 Bug（如凭证池、网关僵尸状态）表示认可，特别是那些涉及资金安全和数据泄露的问题。
    *   **工具链改进：** 对 `sync_skills` 不再覆盖外部目录（#53927）等细微但影响开发体验的修复感到满意。

## 8. 待处理积压
*   **TUI 会话混叠问题:**
    *   **Issue #51058** (Open) - 虽然已有 PR #53928 尝试修复，但需确认其在所有上下文压缩场景下的有效性。
*   **API Server 空格丢失:**
    *   **Issue #24592** (Open) - LLM 响应通过 api_server 返回时单词间空格丢失，这是一个影响用户体验的基础渲染问题，需跟进。
*   **MCP JSON 头解析崩溃:**
    *   **PR #53916** (Open) - 修复 MCP 服务器因 YAML 配置中 headers 格式错误导致的启动崩溃，等待合并审查。

---
*分析师：Agnes-2.0-Flash*
*生成时间：2026-06-28*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期**：2026-06-28
**数据来源**：GitHub sipeed/picoclaw

## 1. 今日速览
过去24小时内，PicoClaw 项目保持中等活跃度，共处理 3 个 Issues 和 3 个 Pull Requests。无新版本发布，但代码库在底层通信架构和跨平台兼容性上有所改进。主要进展集中在修复 MCP 协议参数解析缺陷及引入内部 Agent 协作总线功能。社区对 Telegram 渠道的细粒度权限控制仍有强烈需求，同时 Matrix 加密通道的配置问题引发了新的 Bug 报告。整体项目健康状况良好，技术债务正在逐步清理。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭了两个重要的 PR，推动了项目稳定性和功能扩展：

*   **MCP 参数解析修复 (#3048)**：
    *   **贡献者**：afjcjsbx
    *   **内容**：解决了 `mcp add` 命令在处理根级持久标志（如 `--no-color`）位于子命令之前时的解析错误。此前由于使用了 `DisableFlagParsing: true`，导致继承的标志被误解析为位置参数。
    *   **影响**：提升了 CLI 工具的健壮性和用户体验，消除了潜在的命令执行歧义。
    *   [链接](https://github.com/sipeed/picoclaw/pull/3048)

*   **Agent 协作总线功能落地 (#2937)**：
    *   **贡献者**：afjcjsbx
    *   **内容**：引入了首个原生的内部 Agent 协作总线（Internal Agent Collaboration Bus）。支持每 Agent 邮箱、隔离会话历史的协作线程、结构化消息信封及基于权限的消息传递。
    *   **影响**：这是 PicoClaw 在多 Agent 协同架构上的重大里程碑，为复杂的自动化工作流奠定了坚实基础。
    *   [链接](https://github.com/sipeed/picoclaw/pull/2937)

## 4. 社区热点
今日讨论最活跃的 Issue 集中在权限控制和跨平台兼容性上：

*   **Telegram 渠道权限分级需求 (#3114)**：
    *   **状态**：已关闭 (Stale)
    *   **热度**：高关注度（1 👍, 2 评论）
    *   **分析**：用户 `v2up-32mb` 指出当前仅能基于用户/会话 ID 进行黑白名单控制，缺乏基于“对话类型”（私聊/群组/频道）的安全边界。这反映了生产环境中用户对防止恶意群组调用敏感操作（如 Shell 命令）的迫切需求。尽管 Issue 因过期关闭，但该需求未被解决，建议作为未来优先事项。
    *   [链接](https://github.com/sipeed/picoclaw/issues/3114)

*   **Windows 路径分隔符 Bug (#2472)**：
    *   **状态**：已关闭
    *   **热度**：中等关注度（1 👍, 7 评论）
    *   **分析**：长期存在的 Windows 兼容性问题，`list_dir` 因未处理反斜杠 `\` 与 Go `fs.FS` 要求的正斜杠 `/` 不匹配而失败。虽然已关闭，但需确认是否通过 PR #3048 或其他后续提交彻底修复，还是仅标记为过时。
    *   [链接](https://github.com/sipeed/picoclaw/issues/2472)

## 5. Bug 与稳定性
今日新增一个 Open Bug，涉及加密通信模块：

*   **Matrix 加密消息接收异常 (#3194)**：
    *   **状态**：Open
    *   **严重性**：中/高（取决于部署环境是否强制加密）
    *   **描述**：用户 `Damian-o2` 报告在运行 picoclaw gateway 时，接收到加密消息但提示 "crypto is not enabled"。构建版本为 `v0.2.4-9-ged618e1`。
    *   **分析**：这表明 Matrix 通道在启用加密功能前可能缺少前置检查或配置加载逻辑存在缺陷。目前尚无关联 Fix PR。
    *   [链接](https://github.com/sipeed/picoclaw/issues/3194)

## 6. 功能请求与路线图信号
*   **Simplex 通道支持 (#3193)**：
    *   **状态**：Open PR
    *   **分析**：作者 `dim` 提交了添加 Simplex 频道类型的 PR。Simplex 是一种注重隐私的去中心化即时通讯协议。此 PR 若合并，将显著扩展 PicoClaw 在隐私敏感场景下的渠道覆盖范围，符合项目多元化集成的方向。
    *   [链接](https://github.com/sipeed/picoclaw/pull/3193)

*   **Telegram 细粒度权限 (#3114)**：
    *   **分析**：尽管 Issue 已关闭，但其提出的“按对话类型区分权限”是高级安全特性。考虑到 PR #2937 增强了内部协作的安全性，外部渠道的安全策略也应同步升级。建议维护者将此 Feature Request 重新打开并纳入下一版本的路线图。

## 7. 用户反馈摘要
*   **痛点**：
    1.  **Windows 兼容性**：历史遗留的路径问题依然困扰 Windows 用户，尽管有评论跟进，但体验不佳。
    2.  **安全性粒度不足**：Telegram 用户希望在群组环境中限制机器人的危险操作能力，当前的白名单机制过于粗糙。
    3.  **配置复杂性**：Matrix 加密功能的启用流程可能存在误导或缺乏明确的错误提示，导致用户遇到 cryptic 报错。
*   **满意点**：
    1.  **Agent 协作能力**：新引入的内部协作总线受到开发者关注，表明社区对多 Agent 协同工作的需求正在增长且认可该方向。
    2.  **CLI 稳定性**：对 MCP 参数解析的修复提升了日常使用的流畅度。

## 8. 待处理积压
*   **Telegram 权限增强 (#3114)**：
    *   建议重新评估并开启此 Issue，或创建新的 Epic 来规划基于对话类型的权限系统。
*   **Matrix 加密 Bug (#3194)**：
    *   需要维护者尽快复现并修复，以确保支持加密部署的用户体验。
*   **Simplex 通道 PR (#3193)**：
    *   审查代码质量及测试覆盖率，决定是否合并以支持更多隐私导向的通讯协议。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**：2026-06-28
**数据来源**：GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 项目今日处于**高活跃度修复与功能迭代期**。尽管没有新版本发布，但过去24小时内产生了 **8 条 Pull Request** 和 **1 个活跃 Issue**，显示社区贡献者正集中解决稳定性问题并推进新功能落地。核心亮点在于对 `/update-skills` 静默失败的紧急修复（关联 Issue #2868），以及针对容器运行时稳定性和 Signal 通信健壮性的多项改进。整体项目健康度良好，技术债正在被积极清理。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日提交的 PR 主要集中在**底层稳定性加固**和**配置灵活性增强**，虽未合并，但已明确指向下一个稳定版本的改进方向：

*   **技能更新机制修复**：PR #2873 直接回应了 Issue #2868，旨在将预检查逻辑与凭证刷新分离，确保 `/update-skills` 能正确重载适配器代码。这是解决用户技能版本滞后问题的关键一步。
*   **Signal 通信稳定性**：PR #2874 修复了 `signal-cli` 启动时的崩溃循环问题，显著提升了基于 Signal 通道的长期运行可靠性。
*   **容器配置优化**：
    *   PR #2872 引入了按组覆盖模型的功能 (`container_configs.model`)，增强了 OpenCode 多模型调用的灵活性。
    *   PR #2822 & #2823 清理了无效的挂载卷和主机删除的 CLAUDE.md 文件，减少了资源浪费和潜在的配置冲突。
*   **可观测性增强**：PR #2871 添加了 Dashboard Pusher，每60秒向仪表盘服务器推送状态快照，提升了运维监控能力。

## 4. 社区热点
*   **Issue #2868**: `/update-skills is a silent no-op...`
    *   **热度分析**：这是今日唯一的新开/活跃 Issue，也是导致 PR #2873 产生的根源。
    *   **背后诉求**：用户希望技能更新命令具有确定性行为，避免“静默失败”导致的安全或功能隐患。该问题影响了多个已安装频道的维护体验，是近期社区关注的焦点。
    *   [链接](https://github.com/nanocoai/nanoclaw/issues/2868)

*   **PR #2873**: `fix(skills): split pre-flight from credentials...`
    *   **热度分析**：由 Issue 作者本人提交，直接关联上述热点 Issue。
    *   **背后诉求**：通过重构预检逻辑来彻底解决技能刷新失效的问题。
    *   [链接](https://github.com/nanocoai/nanoclaw/pull/2873)

## 5. Bug 与稳定性
| 类型 | 描述 | 严重程度 | 关联 PR |
| :--- | :--- | :--- | :--- |
| **Bug** | `/update-skills` 对已安装频道执行时无效，不刷新代码/依赖 | **高** (影响核心维护流程) | #2873 (Fix in progress) |
| **Stability** | `signal-cli` 启动波动导致服务进入崩溃循环 | **中高** (影响通道可用性) | #2874 (Fix in progress) |
| **Config** | 存在死挂载 (`/workspace/global`) 和无用指令 ("Global Memory") | **低** (资源/配置噪音) | #2822, #2824 |

*注：所有主要 Bug 均有对应的修复 PR 处于开放状态，预计很快会被合并。*

## 6. 功能请求与路线图信号
*   **多模型分组控制**：PR #2872 提出的 `per-group model override` 功能，反映了用户对精细化控制不同 Agent 组使用不同 LLM 模型的强烈需求。这将被纳入后续版本，提升 NanoClaw 在复杂工作流中的适应性。
*   **外部监控集成**：PR #2871 的 Dashboard Pusher 表明项目正从单纯的本地代理向具备远程状态上报能力的分布式系统演进，支持更复杂的集群管理场景。
*   **Coolify 部署支持**：PR #2875 尝试添加对 Coolify 的部署支持，显示项目正在扩展其自动化部署生态，降低非 Docker 专家用户的入门门槛。

## 7. 用户反馈摘要
*   **痛点**：用户对于“命令执行后无反馈且实际未生效”的情况容忍度极低，特别是涉及技能更新这种维护性操作时，缺乏透明度会导致排查困难。
*   **场景**：在容器化部署场景中，用户频繁遇到因主机自动删除配置文件 (`CLAUDE.md`) 导致的配置丢失问题，期望项目能更好地处理持久化卷的生命周期。
*   **满意度**：用户对新增的按组模型覆盖功能表示期待，这表明当前用户群体正在探索更细粒度的 AI 代理编排策略。

## 8. 待处理积压
*   **PR #2875** (`Deploy/coolify`)：由 `zczDief` 创建，旨在扩展部署工具链。目前状态为 Open，需确认是否符合项目当前的部署优先级的战略方向。
*   **PR #2822, #2823, #2824**：由 `CutSnake01` 提交的三项清理工作（移除死挂载、无用指令等）。虽然改动较小，但有助于保持代码库整洁，建议尽快审查合并。
*   **PR #2871, #2872**：由 `grantland` 提交的两个新功能 PR。作为具有潜在较大影响的功能特性，需要仔细测试其对现有配置兼容性的影响。

---
*报告生成时间：2026-06-28 | 分析师：Agnes-2.0-Flash*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**：2026-06-28
**数据来源**：GitHub API (nullclaw/nullclaw)

### 1. 今日速览
今日 NullClaw 项目保持中等活跃度，核心关注点集中在 Agent 交互流程的优化上。虽然未发布新版本，但一个关键的结构性改进 PR（#969）已提交，旨在增强工具调用的安全性与可控性。社区层面，针对 Android/Termux 环境的构建兼容性 Issue（#868）持续活跃，反映了移动端/边缘计算场景下的潜在支持缺口。整体项目健康度良好，代码贡献与问题反馈同步进行。

### 2. 版本发布
*   **无新版本发布**。
*   最近一次版本为 `v2026.4.17`（基于 Issue #868 的环境描述）。

### 3. 项目进展
*   **新增功能开发**：
    *   **PR #969**: [feat(agent): structured approval_request / approval_response flow](https://github.com/nullclaw/nullclaw/pull/969)
    *   **作者**: valonmulolli
    *   **进展分析**: 该 PR 实现了“两步式”工具审批流程，专门针对返回 `error.ApprovalRequired` 的工具（如 Shell 工具）。通过引入 `PendingApproval` 状态和 SSE 通道事件，显著提升了 Agent 执行高风险操作时的可审计性和用户控制权。这是项目向更稳健的 Agent 架构迈进的重要一步，预计将纳入下一版本的默认行为或高级配置选项。

### 4. 社区热点
*   **Issue #868**: [[bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868)
    *   **热度**: 4 条评论，创建于 2026-04-23，最近更新于 2026-06-27。
    *   **诉求分析**: 尽管 Issue 已存在两个月，但近期仍有更新，表明开发者正在积极尝试解决 Termux 环境下的构建问题。用户痛点在于 Zig 编译器在受限文件系统权限（Linkat 操作）下的兼容性问题。这反映了用户对 NullClaw 在轻量级、非标准 Linux 环境（如嵌入式或移动端）部署的强烈兴趣，但目前缺乏官方支持路径。

### 5. Bug 与稳定性
*   **Bug 报告**:
    *   **Issue #868**: 构建失败 (`AccessDenied`)。
    *   **严重程度**: 中等（影响特定平台构建，不影响主平台核心运行）。
    *   **Fix 状态**: 尚无合并的 Fix PR。建议维护者关注 `options.zig` 中的链接逻辑，考虑在 Termux 环境下添加绕过或替代方案。

### 6. 功能请求与路线图信号
*   **结构化审批流程**: PR #969 明确指向了对 Agent 执行安全性的增强需求。这表明项目路线图正从“功能实现”转向“可靠性与安全控制”。
*   **移动端/边缘支持**: Issue #868 的持续存在暗示了非 x86_64/Linux 桌面环境的支持可能是一个长期的路线图议题，但目前优先级较低，属于社区自发贡献范畴。

### 7. 用户反馈摘要
*   **痛点**: 在 Android/Termux (aarch64) 上使用 Zig 0.16.0 构建 NullClaw 时遭遇权限错误，导致无法编译 `ReleaseSmall` 优化版本。用户希望能在资源受限设备上运行轻量级版本。
*   **期望**: 用户期待更细粒度的工具调用控制机制（如 PR #969 所实现的），以平衡 Agent 自动化能力与用户安全意识。

### 8. 待处理积压
*   **Issue #868**: 自 4 月 23 日创建以来，已积累 4 条评论且近期有活动，但仍未解决。建议维护者分配时间审查 Termux 构建脚本或文档，以回应这一长尾但具有代表性的兼容性需求。
*   **PR #969**: 当前状态为 Open，需关注其 CI 测试结果及后续的代码审查反馈，以确定合并时间表。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-28
**数据来源：** GitHub API (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目在 2026-06-28 保持高活跃度，核心焦点集中在 **Reborn 架构的能力策略（Capability Policy）** 落地与 **WebUI v2** 的稳定性加固上。过去 24 小时内，9 个关键 Issue 和 22 个 PR 被合并/关闭，标志着 Epic #5261（管理员共享工具与每用户认证）的核心模块已基本完成集成测试前的代码合入。尽管无新版本发布，但内部依赖（如 `ironclaw_common` 0.5.0）的更新表明底层 API 正在经历重大重构。CI 流水线中的夜间 E2E 测试失败提示存在回归风险，需立即关注。

## 2. 版本发布
**无公开新版本发布。**

*注：PR #5311 提及了内部 crate 的版本更新（如 `ironclaw_common` 从 0.4.2 升级至 0.5.0），其中包含 **API 破坏性变更**。虽然未触发正式 Release，但开发者需注意本地开发环境中的依赖兼容性问题。*

## 3. 项目进展
今日主要推进了 **Reborn Capability Policy 系统** 的全栈实现，这是实现细粒度权限控制的关键里程碑。

*   **核心功能合入：**
    *   **策略模型与引擎：** PR #5262 和 #5344 分别合入了基础策略 crate 和基于 Delta Store 的策略引擎，实现了配置、身份、审批三个维度的策略解析。
    *   **可用性维度：** PR #5349 完成了 `ScopedLifecyclePolicyCapabilitySurfaceResolver`，使管理员能动态调整用户可见的工具表面。
    *   **控制平面：** PR #5355 和 #5270 合入了 REST API 接口和数据库驱动的用户角色（Owner/Admin/Member）门控，完成了从底层存储到上层 API 的闭环。
    *   **前置条件：** PR #5268 补充了 Admin REST 表面，为手动授权测试奠定基础。

*   **基础设施与测试：**
    *   **集成测试框架：** PR #5381 建立了 Reborn 集成测试框架，允许在进程内运行完整的 Reborn 回合，显著提升了核心逻辑的可测试性。
    *   **QA 矩阵扩展：** PR #5380 和 #5354 扩展了 WebUI v2 的 QA 覆盖范围，引入了 Live Canary 机制以监控真实 LLM 交互下的稳定性。

*   **前端优化：**
    *   PR #5365 修复了 WebUI v2 中“重试”按钮无效的问题，提升了用户体验。
    *   PR #5384 将 WebUI v2 前端 Node 工具链锁定至 Node 22，确保构建一致性。

## 4. 社区热点
以下 Issue/PR 获得了较高的关注度或代表了当前的技术争议点：

*   **[Issue #5261] EPIC: Reborn capability policy: admin-shared tools & skills with per-user auth**
    *   **链接:** [nearai/ironclaw Issue #5261](https://github.com/nearai/ironclaw/issues/5261)
    *   **分析:** 这是今日最核心的技术话题。用户 `zetyquickly` 主导了一系列 Issue 和 PR，旨在解决多租户环境下如何安全地共享工具和技能。这表明社区对**细粒度权限管理**有迫切需求，特别是针对企业级部署场景。

*   **[Issue #4928] Notion OAuth redirects to localhost callback in Railway deployment**
    *   **链接:** [nearai/ironclaw Issue #4928](https://github.com/nearai/ironclaw/issues/4928)
    *   **分析:** 部署类 Bug 的典型代表。用户在 Railway 等 PaaS 平台上遇到回调 URL 配置错误，反映出项目在**云原生部署适配**方面仍需加强自动化配置检测。

*   **[Issue #5378] Google OAuth token refresh fails...**
    *   **链接:** [nearai/ironclaw Issue #5378](https://github.com/nearai/ironclaw/issues/5378)
    *   **分析:** 认证持久性问题。每小时强制重新认证严重影响用户体验，暗示 Token 刷新机制在特定 Profile（hosted-single-tenant）下存在缺陷。

## 5. Bug 与稳定性
今日报告了几个影响稳定性和可用性的问题：

| 严重等级 | 问题描述 | 状态 | 关联 PR/Issue |
| :--- | :--- | :--- | :--- |
| **高** | **Nightly E2E 测试失败**：持续集成流程中断，可能阻碍其他 PR 合并。 | OPEN | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |
| **高** | **Google OAuth 刷新失效**：导致高频重新认证，影响服务连续性。 | CLOSED | [Issue #5378](https://github.com/nearai/ironclaw/issues/5378) |
| **中** | **Notion OAuth 回调错误**：部署配置问题，阻碍第三方集成。 | CLOSED | [Issue #4928](https://github.com/nearai/ironclaw/issues/4928) |
| **低** | **WebUI v2 重试按钮无响应**：前端交互 Bug。 | OPEN | [PR #5365](https://github.com/nearai/ironclaw/pull/5365) (已修复待合入) |
| **低** | **托管卷运行时启动失败**：由 PR #5346 引入的回归问题。 | CLOSED | [PR #5382](https://github.com/nearai/ironclaw/pull/5382) (已修复) |

*注意：虽然 OAuth 相关 Issue 已关闭，但 E2E 测试失败是当前的最大阻塞点，建议优先排查 CI 环境差异。*

## 6. 功能请求与路线图信号
*   **默认权限放宽：** [Issue #5364](https://github.com/nearai/ironclaw/issues/5364) 请求将“始终允许符合条件的工具”设为默认开启。这反映了用户对减少摩擦性确认弹窗的需求，未来版本可能会将此作为默认配置以提升易用性。
*   **细粒度策略可视化：** 随着 Epic #5261 的推进，路线图显示出向**更复杂的 RBAC（基于角色的访问控制）**演进的趋势，支持 Owner/Admin/Member 三级角色及动态工具授权。

## 7. 用户反馈摘要
*   **痛点：** 用户在部署阶段（如 Railway）遇到配置陷阱（OAuth 回调、环境变量），缺乏友好的引导或自动检测机制。
*   **满意度：** 核心开发者对 Reborn 架构的重构进展表示认可，特别是模块化设计（如独立的 `capability_policy` crate）使得测试和验证更加可行。
*   **期待：** 用户希望减少认证摩擦（OAuth 刷新问题）并简化日常操作（如重试功能、默认权限设置）。

## 8. 待处理积压
*   **[Issue #5385] Add Capability Policy**
    *   **链接:** [nearai/ironclaw Issue #5385](https://github.com/nearai/ironclaw/issues/5385)
    *   **状态:** OPEN
    *   **说明:** 尽管相关 PR 已大量合入，该 Issue 似乎仍在跟踪整体策略实施的最终验收或文档完善。鉴于其作者为 `zetyquickly` 且与 Epic #5261 紧密相关，建议将其作为收尾工作项处理。
*   **[Issue #4108] Nightly E2E failed**
    *   **链接:** [nearai/ironclaw Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
    *   **状态:** OPEN
    *   **说明:** CI 流水线故障，需优先解决以恢复自动化验证能力。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-06-28
**数据来源**：GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
过去24小时内，LobsterAI 社区活跃度较高，共有 8 个 Pull Request 获得合并或关闭处理，其中 7 个为修复类 PR，显示出项目在稳定性维护方面的显著投入。Issues 方面仅有 2 条新记录，均为高优先级的安装与数据备份 Bug 报告，暂无新功能需求爆发。尽管昨日发布了大量补丁，但今日未发布新的正式版本。整体项目处于“密集修补缺陷以稳定核心体验”的阶段，技术债务清理工作正在加速推进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日合并/关闭了 7 个 PR，主要集中在底层稳定性、国际化完善及用户体验优化，具体进展如下：

*   **网关稳定性增强**：PR #1446 修复了 OpenClaw 网关因竞态条件导致的无限重启循环问题，解决了 4.1 版本升级后可能出现的瘫痪风险，显著提升了系统鲁棒性。
*   **MCP 协议支持完善**：PR #1001 修复了 SSE 和流式 HTTP 传输模式下 MCP 配置不生效的问题，确保了多模态通信协议的完整性。
*   **技能管理逻辑修正**：PR #1453 修复了已停用技能仍被注入提示词的漏洞，确保权限控制严格执行；PR #1454 修复了定时任务创建时的“无声失败”问题，提升了配置可用性。
*   **UI/UX 优化**：PR #1448 完成了 Agent 设置页面的国际化补全；PR #1449 实现了定时任务执行记录的折叠分组展示，改善了侧栏杂乱问题；PR #1456 增加了快捷键重复检测机制，防止用户配置冲突。

**总体评价**：项目在过去一天内集中修复了多个关键路径上的逻辑缺陷，特别是针对网关稳定性和技能管理的修复，表明维护者正在积极回应近期版本迭代中暴露的系统性问题。

## 4. 社区热点
*   **Issue #2215**：[安装失败排查](https://github.com/netease-youdao/LobsterAI/issues/2215)
    *   **热度分析**：用户详细记录了从日志分析到路径隔离的全过程，反映出 NSIS 安装包在非标准路径或残留文件场景下的兼容性挑战。
*   **Issue #2214**：[数据备份导致主进程卡死](https://github.com/netease-youdao/LobsterAI/issues/2214)
    *   **热度分析**：标记为“高”严重程度的 Bug，100% 可复现且导致 UI 无响应。用户提供了详细的 WAL 模式和复现步骤，显示出对数据安全性的高度关注。这是目前社区最急需解决的体验阻断性问题。
*   **PR #2065**：[使用短 UUID 替代名称生成 Agent ID](https://github.com/netease-youdao/LobsterAI/pull/2065)
    *   **热度分析**：虽然状态为 OPEN，但该 PR 触及了数据生命周期管理的核心痛点（删除后的数据复活问题），引发了对数据隔离策略的深层讨论。

## 5. Bug 与稳定性
今日报告的主要问题按严重程度排列：

1.  **[高] 数据备份主进程卡死 (Issue #2214)**
    *   **描述**：在执行 SQLite 备份时，由于 WAL 模式下的并发写入或锁竞争，导致主线程阻塞，界面变白无响应。
    *   **状态**：待修复。需优先处理，建议异步化备份流程或优化数据库锁机制。
2.  **[中] 安装过程资源提取失败 (Issue #2215)**
    *   **描述**：特定环境（如联想电脑管家、Defender 或特殊路径 G:\）下，NSIS 安装包解压或初始化失败，退出码为 ERROR_BAD_ENVIRONMENT。
    *   **状态**：用户正在通过手动隔离路径寻找临时解决方案，官方需加强安装环境的兼容性测试。
3.  **[低] 已关闭**：今日合并的 PR 修复了多项此前存在的 Bug，包括网关重启循环、技能注入错误、快捷键冲突等，这些属于历史遗留问题的集中修复。

## 6. 功能请求与路线图信号
*   **数据持久化与清理机制优化**：
    *   Issue #2214 和 PR #2065 均指向数据管理的精细化需求。用户希望在不删除 Agent 的情况下也能安全备份，且在删除 Agent 时能彻底清理关联数据（如 cowork_sessions），避免“幽灵数据”。
    *   **信号**：下一版本可能会引入更严格的 Agent 生命周期管理 API 和更健壮的非阻塞备份机制。
*   **定时任务可视化改进**：
    *   PR #1449 的合并表明团队重视长周期任务的可见性管理。未来可能会进一步扩展定时任务的监控面板或提供执行日志的高级筛选功能。

## 7. 用户反馈摘要
*   **痛点**：
    *   **数据安全感缺失**：用户 #woxinsj 在 Issue #2214 中表现出对数据丢失或界面冻结的强烈焦虑，强调“强制结束进程”是唯一出路，这对信任度造成打击。
    *   **安装环境敏感**：用户 #woxinsj 在 Issue #2215 中指出，安全软件和特定磁盘路径对安装流程有显著干扰，现有安装向导缺乏足够的容错引导。
    *   **配置隐蔽性错误**：用户反映快捷键冲突和定时任务创建失败时没有明确报错（“无声失败”），导致排查困难。
*   **满意点**：
    *   社区贡献者对细节的关注度很高，如 PR #1448 对国际化细节的修补，以及 PR #1449 对侧栏布局的优化，均体现了对产品体验的打磨意愿。

## 8. 待处理积压
*   **Issue #2214**：数据备份卡死问题。需开发团队介入，重点排查 SQLite WAL 模式下的锁竞争逻辑，考虑引入后台线程或异步队列处理备份任务。
*   **Issue #2215**：安装兼容性。需复现不同安全软件和路径组合下的安装失败场景，完善 NSIS 脚本的错误捕获和用户提示。
*   **PR #2065**：Agent ID 生成策略重构。该 PR 涉及数据模型变更，需仔细评估对现有用户数据的迁移影响，目前仍处于开放讨论状态，建议尽快合并以避免数据复活问题的长期困扰。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**：2026-06-28
**数据来源**：GitHub (moltis-org/moltis)

### 1. 今日速览
Moltis 项目在 2026 年 6 月 27 日保持稳健的开发节奏，主要聚焦于提升小参数模型（如 Gemma 4、oMLX）在 Agent 执行层面的兼容性与稳定性。今日新增 1 个 Bug 报告及 2 个旨在修复工具参数解析逻辑的 Pull Request。尽管没有新版本发布，但针对本地部署模型常见的序列化格式差异进行的修复表明，项目正致力于降低本地化部署的技术门槛并提高鲁棒性。整体项目健康状况良好，社区贡献者活跃度高。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日有 2 个高优先级的 PR 处于待合并状态，均由核心贡献者 `resumeparseeval` 提交，重点优化了底层工具调用（Tool Calls）的数据清洗逻辑：

*   **PR #1136**: `fix(agents): coerce stringified scalar tool args before validation`
    *   **进展意义**：解决了小型本地模型将标量参数（如布尔值、整数）错误序列化为 JSON 字符串的问题。此修复将显著减少因类型不匹配导致的 Agent 执行失败，提升了非云端大模型的可用性。
    *   [链接](https://github.com/moltis-org/moltis/pull/1136)
*   **PR #1098**: `fix(browser): tolerate null optional params in browser tool calls`
    *   **进展意义**：增强了浏览器工具的容错能力，允许模型显式传递 `null` 值给可选参数。这与 PR #1136 相辅相成，共同构成了对本地模型输出格式的标准化适配层。
    *   [链接](https://github.com/moltis-org/moltis/pull/1098)

### 4. 社区热点
今日社区讨论焦点集中在两个方向：一是本地小模型的输出规范性问题（通过上述 PR 体现），二是容器化部署中的命名规范限制。

*   **Issue #1137**: `[bug] [Bug]: Apple Container ID exceeds name limit`
    *   **热度分析**：虽然目前评论为 0，但该 Issue 触及了 macOS 原生环境下的容器 ID 生成逻辑。对于使用 Apple Silicon 芯片进行本地开发的用户而言，这是一个潜在的环境兼容性阻塞点。
    *   [链接](https://github.com/moltis-org/moltis/issues/1137)

### 5. Bug 与稳定性
今日报告 1 个新 Bug，暂无已知的高危崩溃或回归问题。

*   **Issue #1137**: **Apple Container ID exceeds name limit**
    *   **严重程度**：中等（影响特定平台部署体验）。
    *   **描述**：在 Apple 生态系统中，生成的容器 ID 长度超过了系统或配置允许的名称限制。
    *   **修复状态**：暂无关联 Fix PR，需维护者介入排查 ID 生成算法。
    *   [链接](https://github.com/moltis-org/moltis/issues/1137)

### 6. 功能请求与路线图信号
*   **信号分析**：今日提交的两个 PR (#1136, #1098) 强烈暗示 Moltis 的路线图正在向“增强本地/边缘计算兼容性”倾斜。维护者意识到主流云端大模型与小型开源模型在 JSON 序列化行为上的差异，并开始构建更健壮的中间件来屏蔽这些差异。
*   **潜在需求**：用户可能期望未来版本提供更多关于“模型输出规范化”的配置选项，或者内置更多针对常见小模型（如 Llama 3, Gemma, Qwen 等）的提示词工程模板以改善输出格式。

### 7. 用户反馈摘要
*   **痛点**：本地部署用户反映小模型（Gemma 4, oMLX）倾向于输出不符合严格 JSON Schema 的数据（如将数字转为字符串，或将可选字段显式设为 null），导致前端验证失败。
*   **场景**：开发者在使用 Moltis 构建基于本地运行的小型 LLM 的自动化代理时，频繁遇到工具调用解析错误。
*   **满意度**：通过 PR #1136 和 #1098 的修复，预计将极大提升本地用户的调试效率和成功率，这是一个积极的正面反馈循环信号。

### 8. 待处理积压
*   **Issue #1137**: Apple Container ID 限制问题。建议维护者优先检查 macOS 环境下的容器命名策略，因为随着本地化部署需求的增加，此类平台特异性 Bug 可能会增多。
*   **PR #1098 & #1136**: 虽然今日更新，但仍处于 `[OPEN]` 状态且未合并。鉴于这两个 PR 对提升项目稳定性至关重要，建议尽快审查并合并，以避免后续依赖相同逻辑的其他工作流受阻。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-06-28
**数据来源：** GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
CoPaw 项目在 2026-06-27 保持高活跃度，过去 24 小时内产生 5 个新 Issues 和 14 个 Pull Requests。开发重心明显向**测试覆盖率提升**与**后端基础设施加固**倾斜，特别是针对 Agentscope 2.0 迁移后的回归测试。同时，社区对 DeepSeek V4 兼容性、Ascend 模型连接及对话持久化等关键体验问题的关注度较高。整体项目处于版本迭代后的稳定化调整期，技术债务清理工作正在加速推进。

## 2. 版本发布
*   **无新版本发布。**
*   当前主要基于 `QwenPaw 1.1.12.post2` 及 `Agentscope 2.0` 分支进行开发与测试。

## 3. 项目进展
今日最重要的进展在于**后端单元测试覆盖率的系统性提升**以及**插件安装机制的修复**：

*   **测试基建完善**：维护者 `hanson-hex` 提交了多个 PR，旨在补全后端 `crons`、`runner`、`app-infra` 模块的单元测试（PR #5423, #5422, #5581），以及前端 Console 模块的 Store/Hook 测试（PR #5409, #5434, #5438）。这表明团队正致力于锁定 Agentscope 2.0 契约，防止后续重构引入回归缺陷。
    *   [PR #5581](https://github.com/agentscope-ai/QwenPaw/pull/5581) - app-infra backend unit test coverage (W3 sprint)
    *   [PR #5423](https://github.com/agentscope-ai/QwenPaw/pull/5423) - crons module unit tests
*   **插件生态修复**：PR #5568 修复了官方插件在 QwenPaw 2.0 上因 Agentscope 2.x 破坏性变更导致的安装失败问题，这对维持插件市场的可用性至关重要。
    *   [PR #5568](https://github.com/agentscope-ai/QwenPaw/pull/5568) - fix official plugin installation failures on QwenPaw 2.0
*   **Tauri 桌面端修复**：PR #5578 解决了 Windows/macOS 打包后的引导流程问题，提升了桌面端的开箱体验。
    *   [PR #5578](https://github.com/agentscope-ai/QwenPaw/pull/5578) - remove bootstrap after Tauri initialization

## 4. 社区热点
今日讨论最集中的议题围绕**第三方模型兼容性问题**和**UI/UX 细节优化**：

*   **DeepSeek V4 兼容性问题**：Issue #5573 详细描述了通过 OpenAI 兼容端点使用 DeepSeek V4 时的流式推理内容缺失和 Schema 错误。该 Issue 引发了对应的修复 PR #5582，显示出社区对非官方端点稳定性的强烈需求。
    *   [Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)
    *   [PR #5582](https://github.com/agentscope-ai/QwenPaw/pull/5582) - recover streaming reasoning_content errors
*   **Ascend vLLM 连接故障**：Issue #5584 报告了从 1.1.7 升级后无法连接自定义 Ascend vLLM 模型的问题，尽管后端正常但客户端报错，这暗示了网络代理或认证逻辑在版本升级中的潜在回归。
    *   [Issue #5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)
*   **Matrix 频道流式模式**：PR #5585 提出了为 Matrix 频道添加类似 Discord 的流式消息显示模式，改善了长延迟下的用户体验。
    *   [PR #5585](https://github.com/agentscope-ai/QwenPaw/pull/5585)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在**数据持久性**和**特定模型交互**上，严重程度较高：

*   **[严重] 对话记录丢失**：Issue #5579 指出在 Agent 执行重启命令或服务异常崩溃时，对话记录完全消失且无断点保存机制。这是一个严重的可用性问题，直接影响用户信任。
    *   [Issue #5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)
    *   *状态：暂无直接关联的 Fix PR，需优先处理。*
*   **[中等] DeepSeek V4 400 错误**：Issue #5573 描述的流式推理内容缺失和非标准 Schema 清洗问题。
    *   [Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)
    *   *状态：已有 PR #5582 尝试修复。*
*   **[低] UI 视觉问题**：Issue #5583 指出聊天界面右侧弹出层选中背景不明显，属于细微的 UX 改进。
    *   [Issue #5583](https://github.com/agentscope-ai/QwenPaw/issues/5583)

## 6. 功能请求与路线图信号
*   **数据与分析插件**：PR #4622 引入了 `DataPaw` 插件，包含 12 种 BI 技能。虽然创建时间较早，但在今日仍被标记为活跃，表明数据增强功能是路线图中的重点方向。
    *   [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)
*   **治理策略泛化**：PR #5546 尝试泛化治理策略模式，这可能为未来更细粒度的 Agent 权限控制和审计功能奠定基础。
    *   [PR #5546](https://github.com/agentscope-ai/QwenPaw/pull/5546)
*   **MCP 访问策略优化**：PR #5213 改进了 MCP 客户端卡片的操作布局及权限规则展示，提升了控制台的可操作性。
    *   [PR #5213](https://github.com/agentscope-ai/QwenPaw/pull/5213)

## 7. 用户反馈摘要
*   **痛点**：用户普遍反映在升级到新版本（特别是涉及 Agentscope 2.0 迁移）后，原有配置（如 Ascend 模型连接、插件安装）出现断裂。
*   **期望**：
    *   **鲁棒性**：用户极度依赖“断点续传”或“异常恢复”机制，特别是在 Agent 自主执行高风险操作（如重启）的场景下。
    *   **兼容性**：对于非官方端点（如 DeepSeek V4 via OpenAI compatible），用户希望有更完善的错误兜底和 Schema 清洗逻辑。
    *   **可视化**：控制台界面的响应式布局和选中态反馈需要进一步优化，以提升多窗口环境下的操作效率。

## 8. 待处理积压
*   **Issue #5579 (对话记录丢失)**：此 Issue 涉及核心数据完整性，目前无关联的 Fix PR，建议维护者优先评估并制定断点保存方案。
*   **Issue #5584 (Ascend 连接失败)**：虽然可能是配置或代理问题，但考虑到其影响特定硬件生态的用户群，且与版本升级强相关，建议排查 1.1.7 至 1.1.12.post2 之间的网络层变更。
*   **PR #4622 (DataPaw)**：该 PR 已开放较长时间，若功能已就绪，建议尽快完成合并以丰富插件生态；若仍在审查中，需确认阻塞原因。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-28
**数据来源：** GitHub API (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-06-28 保持高活跃度，过去24小时内共产生 45 个 Issue 和 50 个 PR 更新。虽然无新版本发布，但基础设施层面的安全加固（Supply Chain Signing）与核心运行时稳定性修复是今日焦点。社区对 MCP 协议扩展、Wasm 插件架构以及多通道支持（WhatsApp, Inkbox）展现出强烈兴趣。整体项目处于 v0.8.x 系列的深度打磨期，重点在于解决运行时边界条件错误及完善可观测性。

## 2. 版本发布
*   **无新版本发布。**
*   **里程碑状态：** 当前工作重心集中在 `v0.8.3` 和 `v0.8.4` 的积压任务清理上。
    *   `v0.8.3` 追踪器 (#7320) 涵盖 WASM 插件平台、技能平台及 A2A 互操作性。
    *   `v0.8.4` 作为溢出停车场 (#8357)，用于处理未归类至具体小版本的长期改进项。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的鲁棒性和安全性：

*   **供应链安全加固 (High Impact):**
    *   **#8404 [CI/Docs]**: 实现了 Cosign 签名、SBOM 生成及 SLSA 溯源，直接回应了 Issue #8177 中的 RFC 提议。这标志着 ZeroClaw 在发布流程安全性上迈出了实质性一步，为后续硬件 PGP 密钥支持奠定基础。
    *   *链接:* [PR #8404](https://github.com/zeroclaw-labs/zeroclaw/pull/8404)
*   **运行时稳定性修复:**
    *   **#8402 [Bug]**: 修复了 Heartbeat 引擎读取 `HEARTBEAT.md` 路径错误的严重 Bug（Issue #8366）。此前引擎错误地从 `data_dir` 而非 `agent workspace` 读取任务，导致心跳逻辑失效。
    *   **#8405 [Bug]**: 修复了 Cron 和 Heartbeat 投递中发送字面量 "NO_REPLY" 的问题（Issue #2128），避免了不必要的消息噪音。
    *   **#8329 [Bug]**: 修复了原生 Tool Call 后 Narration 转发被意外抑制的问题，确保流式响应的完整性。
    *   *链接:* [PR #8402](https://github.com/zeroclaw-labs/zeroclaw/pull/8402), [PR #8405](https://github.com/zeroclaw-labs/zeroclaw/pull/8405), [PR #8329](https://github.com/zeroclaw-labs/zeroclaw/pull/8329)
*   **MCP 协议扩展:**
    *   **#8403 [Feat]**: 正式引入 MCP Resource 和 Prompt 客户端表面，并配套策略网关调度工具。这补全了 ZeroClaw 作为 MCP 客户端的功能短板，使其不仅能调用工具，还能读取资源。
    *   *链接:* [PR #8403](https://github.com/zeroclaw-labs/zeroclaw/pull/8403)
*   **新通道集成:**
    *   **#8384 [Feat]**: 添加了 Inkbox 原生通道支持，提供 Email/SMS/Voice/iMessage 的一站式接入，并附带 Quickstart 引导流程。
    *   *链接:* [PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)

## 4. 社区热点
以下 Issue/PR 因技术深度或潜在影响范围成为讨论焦点：

*   **Supply Chain Security RFC (#8177):**
    *   *热度:* 10 条评论。
    *   *分析:* 开发者 ConYel 提出的关于硬件 PGP、Hermetic Builds 和 SLSA 的 RFC 引发了关于构建信任根的深度讨论。这是目前优先级最高的安全架构提案之一。
    *   *链接:* [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
*   **Context Budget Bug (#5808):**
    *   *热度:* 6 条评论。
    *   *分析:* JordanTheJet 报告默认 32k 上下文预算在首次迭代即被 System Prompt 耗尽，导致无限截断循环。这是一个阻碍正常使用的 P1 级 Bug，社区正积极寻求配置优化方案。
    *   *链接:* [Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)
*   **Goal Mode RFC (#8303):**
    *   *热度:* 3 条评论 (+1 👍)。
    *   *分析:* 提出“目标模式”以支持有边界的自主会话，区别于现有的交互式轮次。这反映了高级用户对长周期自动化代理工作的需求。
    *   *链接:* [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
*   **Wasm-First Plugin Runtime RFC (#8135):**
    *   *热度:* 2 条评论。
    *   *分析:* 探讨将 Wasm 设为默认插件运行时，消除 Node.js 依赖。这是架构层面的重大变革，涉及安全性和性能权衡。
    *   *链接:* [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在运行时行为异常和配置解析错误：

| 严重等级 | 组件 | 描述 | 关联 Issue/PR |
| :--- | :--- | :--- | :--- |
| **P1 (Blocker)** | Runtime | 默认上下文预算不足导致首次迭代即触发预emptive trim，造成死循环。 | [Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) |
| **P2 (High)** | Heartbeat | Heartbeat 引擎从错误目录 (`data_dir`) 读取任务文件，导致任务丢失。 | [Issue #8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) -> **[PR #8402](https://github.com/zeroclaw-labs/zeroclaw/pull/8402)** |
| **P2 (High)** | Channels | Cron/Heartbeat 发送字面量 "NO_REPLY" 字符串，污染通知渠道。 | [Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) -> **[PR #8405](https://github.com/zeroclaw-labs/zeroclaw/pull/8405)** |
| **P2 (Medium)** | Memory | 修改 Embedding Provider 配置后，内存向量未刷新，导致嵌入不一致。 | [Issue #8359](https://github.com/zeroclaw-labs/zeroclaw/issues/8359) |
| **P2 (Medium)** | Agent Loop | 循环检测器错误地将失败的 Tool 结果计为“无进展”，可能误判死锁。 | [Issue #8213](https://github.com/zeroclaw-labs/zeroclaw/pull/8213) |
| **P2 (Medium)** | Channel Race | 并发 Worker 共享同一 `conversation_history_key` 时存在 JSONL 持久化竞争条件。 | [PR #7847](https://github.com/zeroclaw-labs/zeroclaw/pull/7847) |

## 6. 功能请求与路线图信号
*   **MCP 完整支持:** Issue #4467 和 PR #8403 表明，社区强烈期望 ZeroClaw 不仅作为 MCP Tool Client，还要支持 Resource 和 Prompt。这已被纳入近期开发计划。
*   **自主代理能力:** Issue #8303 (Goal Mode) 和 #8239 (Independent Delegate Targets) 显示用户对更复杂的、非交互式的长期代理任务编排有明确需求。路线图可能向“多步自主规划”倾斜。
*   **OpenRouter 容错:** Issue #8138 请求支持 OpenRouter 的模型回退数组，以提高生产环境可用性。
*   **隐私保护:** Issue #8379 针对 WhatsApp Web 群聊提出“被动上下文”功能，允许在不触发 Agent Turn 的情况下收集群消息作为背景知识，平衡了隐私与功能性。

## 7. 用户反馈摘要
*   **痛点:** 默认的 32k 上下文限制对于现代复杂 System Prompt 而言过于严苛，导致频繁的错误截断（Issue #5808）。用户呼吁提供更细粒度的预算控制或更智能的上下文管理。
*   **满意度:** 用户对新的通道集成（如 Inkbox #8384）和文档完善持积极态度。
*   **困惑点:** 预构建二进制包的发布策略（Issue #7952）让用户感到困惑，特别是当配置了非默认通道时，现有的 Lean Bundle 无法提供所需组件。用户希望看到更清晰的渠道分离或完整的 Bundle 选项。

## 8. 待处理积压
*   **RFC 评审积压:**
    *   [#8177] Supply Chain Signing (10 comments, blocked) - 需要维护者最终定稿。
    *   [#8135] Wasm-First Plugin Runtime (2 comments, accepted) - 架构决策待定。
    *   [#8398] Plugin Permission Model (1 comment, needs review) - 权限模型仍存争议。
*   **长期未决 Bug:**
    *   [#5808] Context Budget Overflow - 虽已标记 P1，但尚未合并修复 PR，需优先处理以解除工作流阻塞。
*   **文档与测试:**
    *   [#8378]-[#8371] DMS-GST Extraction 系列任务已关闭，但相关文档（Issue #8378）和快速入门指南的更新状态需确认是否完全同步。

---
*Generated by Agnes-2.0-Flash based on ZeroClaw GitHub Data.*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*