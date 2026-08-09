# OpenClaw 生态日报 2026-08-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-08 00:52 UTC

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
**日期：** 2026-08-08
**分析维度：** OpenClaw (github.com/openclaw/openclaw)

## 1. 今日速览

过去24小时，OpenClaw 社区保持高度活跃，共计处理 **500 条** Issue 和 **500 条** PR 更新，其中活跃/新开 Issue 468 条，新增/合并 PR 94 条，显示开发节奏紧凑。核心痛点集中在 **Gateway 内存泄漏**、**会话状态同步异常** 以及 **多模型上下文切换导致的压缩失效**，P0/P1 级 Bug 占比显著。CI 流程与嵌入式代理运行时的稳定性修复是今日 PR 的主力方向，项目整体处于高频迭代以应对生产环境稳定性挑战的阶段。

## 2. 版本发布

*   **新版本发布：** 0 个
*   **状态：** 无新 Release 发布，当前主要维护现有分支（如 2026.7.x 系列）的稳定性补丁。

## 3. 项目进展

今日 PR 活动主要聚焦于底层基础设施加固、CI 流程修复及关键 Bug 补丁：

*   **CI 与构建稳定性：**
    *   **#120399** 和 **#120392**：修复了嵌入运行注册表 lint 失败及 Full Release Validation 中子工作流元数据未结算导致的误拒问题，保障发布流水线可靠性。
    *   **#117712**：Dependabot 更新了 10 个 GitHub Actions 依赖（含 `actions/attest` 和 `trufflehog`），提升供应链安全。
*   **核心功能修复：**
    *   **#120240**：修复 Ollama 流式 NDJSON 响应中无效 UTF-8 字符被静默替换的问题，增强非 OpenAI 兼容模型的健壮性。
    *   **#120271**：限制 Cron 命令负载的 `outputMaxBytes`，防止无界输出缓冲导致内存溢出。
    *   **#120283**：增加浏览器扩展 Relay 帧字段的校验，防止畸形帧导致 Gateway 进程崩溃（TypeError）。
    *   **#120001**：修复 Codex 原生子代理在父轮次结束后丢失 Hook 支持工具（文件系统等）的问题，改善子代理工具可用性。
*   **UI/UX 改进：**
    *   **#120388**：侧边栏底部新增自定义 Commit 年龄显示，便于运维人员验证源码构建版本。
    *   **#120381**：修复属性化聊天消息头像在更新后未刷新的问题。
    *   **#120273**：优化 Usage 标签页的 Mosaic 图表在极端活动跨度下的迭代性能，防止 UI 卡顿。

## 4. 社区热点

以下 Issue 评论数最多，反映了用户最关心的稳定性与功能缺失问题：

*   **[P0] DeepSeek v4 Flash 静默回复失败** — [Issue #116277](https://github.com/openclaw/openclaw/issues/116277)
    *   **热度：** 129 评论
    *   **分析：** 模型未生成回复且仅返回通用 fallback 消息，严重影响用户体验，尤其是使用 DeepSeek 系列模型的用户群体。
*   **[P2] 基于来源的记忆信任标签** — [Issue #7707](https://github.com/openclaw/openclaw/issues/7707)
    *   **热度：** 29 评论
    *   **分析：** 用户关注 AI 安全，担忧通过 Web 抓取或第三方集成注入的恶意指令污染 Agent 记忆，提出“记忆投毒”防护需求。
*   **[P0] Gateway 内存泄漏导致 OOM** — [Issue #91588](https://github.com/openclaw/openclaw/issues/91588)
    *   **热度：** 22 评论
    *   **分析：** RSS 从 350MB 增长至 15.5GB 后触发系统 OOM Killer，导致 `launchd-handoff` 重启循环，是生产环境长期运行的重大隐患。
*   **[P0] CLI 启动预检损坏运行中的状态数据库** — [Issue #101290](https://github.com/openclaw/openclaw/issues/101290)
    *   **热度：** 14 评论
    *   **分析：** 回归 Bug，在 Gateway 运行时执行 health-check 命令导致 SQLite 数据库镜像损坏，数据完整性风险极高。
*   **[P1] 嵌入代理启动冷启动时间回退 2.5 倍** — [Issue #119087](https://github.com/openclaw/openclaw/issues/119087)
    *   **热度：** 9 评论
    *   **分析：** 从 2026.7.1-beta.1 到 2026.7.2-beta.7，1-vCPU 容器下启动延迟显著增加，影响自动化部署效率。

## 5. Bug 与稳定性

### 🔴 P0 级（严重/阻断）
| Issue | 描述 | 状态/PR |
| :--- | :--- | :--- |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏，RSS 数天内飙升至 15GB+ 引发 OOM | 开放，需维护者审查 |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 预检在 Gateway 运行时并发导致 SQLite 损坏 | 开放，已标记回归 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | DB v14->v15 迁移失败 (`no such column: entry_valid`)，Gateway 拒绝启动 | 开放 |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | `sessionEntry.totalTokens` 膨胀导致在 4-8% 上下文占用时触发过早压缩（数据丢失风险） | 开放 |

### 🟠 P1 级（高优先级）
| Issue | 描述 | 状态/PR |
| :--- | :--- | :--- |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默失败，无回复生成 | 开放 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | 模型完成后 `chat.send` 因 `expectedLeafEntryId` 未刷新被拒 | **已有 PR #116382** |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | `sessions_yield` 子代理唤醒时意外压缩父分支 | 开放 |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | `sessions_spawn` 子代理未注入 MCP 工具 | 开放 |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 嵌入式助手阶段未重试瞬态 LLM/socket 错误，导致长轮次中断 | 开放 |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | Gateway 重启后 MCP 环回传输未自动重连 | 开放 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | 记忆文件监听器未重新索引，`memory status` 显示脏数据 | 开放 |

### 🟡 P2 级（中优先级）
*   **#45608**：建议 `/new` 和每日重置时执行与压缩相同的静默记忆刷洗。
*   **#45494**：Cron 任务在 LLM API 持续 500 错误时未快速失败，而是耗尽超时时间。
*   **#94939**：6.x 状态迁移后频道对话存储 SQLite 为空，导致 MS Teams 主动发送失败。
*   **#119796**：Windows 下 vitest  teardown 因 SQLite 句柄未释放导致 `EBUSY unlink` 失败。

## 6. 功能请求与路线图信号

*   **记忆信任体系：** [#7707](https://github.com/openclaw/openclaw/issues/7707) 提出的按来源标记记忆可信度，直接回应安全诉求，可能被纳入安全加固路线图。
*   **技能生命周期管理：** [#95516](https://github.com/openclaw/openclaw/issues/95516) 建议失败时自动优化、长期不使用时归档的技能管理机制，符合 Agent 系统可扩展性趋势。
*   **Per-model 使用量日志：** [#13219](https://github.com/openclaw/openclaw/issues/13219) 原生支持按模型记录用量以进行成本追踪，当前需用户自行解析 JSONL，呼声较高。
*   **入站消息预路由钩子：** [#81061](https://github.com/openclaw/openclaw/issues/81061) 请求在路由决策前拦截消息，用于频道桥接/代理场景，增强插件扩展能力。
*   **Session 自动命名优化：** [#99583](https://github.com/openclaw/openclaw/issues/99583) 提议基于主题感知的延迟自动重命名，提升多主题会话的管理体验。

## 7. 用户反馈摘要

*   **成本控制焦虑：** 用户 [#119009](https://github.com/openclaw/openclaw/issues/119009) 报告因重试循环在 3 小时内产生 $204 异常账单，反映出当前重试机制缺乏有效的成本止损（Stalled 检测）策略。
*   **生产环境稳定性信任危机：** 内存泄漏（#91588）和数据库损坏（#101290, #119263）是用户反馈中最具破坏性的问题，直接威胁数据安全和部署连续性。
*   **多模型适配摩擦：** DeepSeek（#116277）、Kimi/DeepSeek Reasoner（#88079）的流式响应处理问题表明，随着非 OpenAI 模型集成增多，解析器和流处理层的兼容性测试亟待加强。
*   **调试可观测性不足：** 用户抱怨在异步上下文（Cron、子代理）中模型回退信息不可见（#94919），以及合成消息导致 Telegram 完全静默无日志（#90789），反映出错误链路的可观测性存在盲区。

## 8. 待处理积压

*   **#91588** (P0, Memory Leak)：已标记 `needs-maintainer-review` 超过 2 个月，内存泄漏是阻碍长期运行稳定性的核心瓶颈，需优先分配资源。
*   **#101290** (P0, DB Corruption)：回归导致的数据损坏风险，需尽快复现并修复 CLI 与 Gateway 并发访问 SQLite 的竞态条件。
*   **#7707** (P2, Security Feature)：记忆信任标签功能，虽为增强型需求，但鉴于 AI 安全趋势，建议维护者评估纳入早期路线图。
*   **#85030** (P1, MCP Injection)：子代理工具注入失败严重影响模块化代理工作流，需产品决策以明确 `bundle-mcp` 的配置行为。
*   **#119009** (Cost Control)：虽已关闭，但暴露的重试成本失控问题需要系统性解决方案（如引入预算熔断机制），建议作为独立技术债跟进。

---

## 横向生态对比

## 2026-08-08 个人 AI 助手开源生态横向分析报告

### 1. 生态全景
2026年8月，个人 AI 助手开源生态正处于从“功能堆叠”向“生产级稳定性与安全性”转型的关键阵痛期。主流项目（OpenClaw、CoPaw、IronClaw、ZeroClaw）日均 PR/Issue 均突破 50+，显示社区贡献高度活跃，但同时也暴露出内存泄漏、数据库损坏、会话状态同步失败等深层架构缺陷。**多模型兼容性**与**工具链可观测性**成为当前生态最大的共同痛点，而轻量化（TinyClaw/PicoClaw）与重型化（IronClaw/CoPaw）的路线分化日益明显。

### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 468 | 94 | ❌ 无 | 🟡 中 (高风险) | 高频迭代，P0级内存/DB bug 积压严重 |
| **CoPaw (QwenPaw)** | 31 | 49 | ✅ v2.1.0-beta.2 | 🟢 良好 | 快速修复期，Windows/Provider 兼容性问题多 |
| **ZeroClaw** | 50 | 47 | ❌ 无 | 🟡 中 (高风险) | 高强度攻坚，SOP与安全策略漏洞频发 |
| **Hermes Agent** | 50 | 50 | ❌ 无 | 🟢 良好 | 安全加固与多平台同步，Windows 体验待改善 |
| **IronClaw** | 50 | 50 | ❌ 无 | 🟢 良好 | 重构期，Doc-Truth 治理与工具披露优化 |
| **LobsterAI** | 7 | 6 | ✅ 2026.8.7 | 🟡 中 | 体验打磨期，存储层结构性风险 (sql.js) |
| **NanoClaw** | - | 10 | ❌ 无 | 🟢 良好 | 多渠道扩展 (Mattermost/Dial) 与 MCP 生态 |
| **NanoBot** | 10 | 21 | ❌ 无 | 🟢 良好 | 基础稳固，专注会话隔离与多通道稳定性 |
| **PicoClaw** | 4 | 14 | ❌ 无 | 🟢 良好 | 依赖维护为主，关键稳定性修复待合并 |
| **NullClaw/IronClaw**| 0 | 0 | - | ⚪ 停滞 | 无活动 |

### 3. OpenClaw 在生态中的定位
*   **规模与复杂度标杆**：OpenClaw 以 500+ 日动态量级远超其他项目，是生态中社区参与度最高的“重型”框架，适合大规模生产环境部署。
*   **技术路线差异**：与其他项目相比，OpenClaw 强调 **Gateway 架构**与**多模型上下文管理**，但也因此背负了最重的技术债（内存泄漏、SQLite 竞态）。相比之下，CoPaw 更侧重桌面/客户端体验，Hermes 侧重多平台会话同步，NanoClaw 侧重模块化插件生态。
*   **社区规模**：其 Issue 评论数（如 DeepSeek 静默失败 129 评）显示其用户基数最大，对上游模型 API 变化的敏感度最高，是生态中“模型兼容性”的风向标。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与痛点 |
| :--- | :--- | :--- |
| **可观测性与成本控制** | OpenClaw, NanoBot, ZeroClaw, CoPaw | 用户普遍焦虑 Token 消耗不可见、重试导致账单失控、MCP 工具调用状态丢失。ZeroClaw 和 NanoBot 均有专门的日志/追踪需求 Issue。 |
| **多模型/非 OpenAI 兼容适配** | OpenClaw, CoPaw, PicoClaw, LobsterAI | DeepSeek、Kimi、StepFun 等非标准模型出现流式解析失败、字段泄露（$schema）等问题。OpenClaw 的 DeepSeek v4 Flash 失败引发 129 条评论，极具代表性。 |
| **会话状态与持久化稳定性** | OpenClaw, Hermes, ZeroClaw, LobsterAI | SQLite 损坏、Session 历史丢失、记忆投毒防护、跨会话上下文同步失败是各项目的共同顽疾。OpenClaw 的 DB 损坏和 ZeroClaw 的 SOP 卡死均为 P0 级。 |
| **多渠道/跨平台体验一致性** | NanoBot, PicoClaw, Hermes, CoPaw | 用户迫切希望在 Telegram/Discord/CLI 间无缝切换会话，但当前各平台功能割裂（如 PicoClaw 缺会话切换命令，Hermes 缺跨平台共享）。 |
| **安全与权限隔离** | NanoBot, IronClaw, ZeroClaw, Hermes | 记忆信任标签（NanoBot/IronClaw）、Workspace 路径绕过（ZeroClaw）、OAuth 配额异常（Hermes）显示安全边界日益受重视。 |

### 5. 差异化定位分析

*   **OpenClaw**：**企业级网关与深度定制**。适合需要复杂 Gateway 管理、多模型路由、高并发代理场景，但要求较高的运维能力以应对稳定性问题。
*   **CoPaw (QwenPaw)**：**集成型桌面助手**。依托通义实验室，强调开箱即用的桌面体验、插件市场和多模态能力，但 Windows 端体验仍有明显短板。
*   **Hermes Agent**：**多平台同步的 CLI/TUI 工具**。强调 Agent 终止行为规范化与跨平台（CLI/Telegram/Discord）状态打通，适合开发者和工作流自动化用户。
*   **IronClaw**：**可信文档与工具披露研究**。聚焦于“Doc-Truth”治理和渐进式工具披露，技术探索性强，适合对模型幻觉和状态一致性有极致要求的场景。
*   **NanoClaw / NanoBot**：**轻量级多渠道集成**。NanoClaw 侧重企业渠道（Mattermost/Dial）和 MCP 技能扩展；NanoBot 侧重会话隔离安全和多通道稳定性，适合中小规模部署。
*   **LobsterAI**：**Cowork 协作与渲染优化**。侧重于团队协作会话（Cowork）的搜索、LaTeX 渲染等特定体验，以及 Windows 安装稳定性。
*   **PicoClaw**：**边缘计算与低资源环境**。强调在 $10 硬件、<10MB RAM 下运行，适合嵌入式或资源受限场景，生态扩展相对保守。
*   **ZeroClaw**：**Rust 重写与 SOP 自动化**。采用 Rust 构建，强调 SOP（标准作业程序）的自动化执行和可观测性，适合高度自动化的任务流场景。

### 6. 社区热度与成熟度

*   **快速迭代阶段（高活跃，高风险）**：**OpenClaw, ZeroClaw, CoPaw, IronClaw**。这四个项目日均动态 50+，处于功能高速膨胀期，技术债积累快，P0/P1 级 Bug 频发，需要用户具备较强的故障排除能力。
*   **质量巩固阶段（中等活跃，较稳定）**：**Hermes Agent, NanoBot, LobsterAI, NanoClaw**。动态量级适中（10-50），更专注于修复现有 Bug、优化用户体验和安全性，项目相对更成熟稳定。
*   **维护/ niche 阶段（低活跃）**：**PicoClaw, TinyClaw, Moltis, NullClaw, ZeptoClaw**。PicoClaw 虽有活跃但动力多为依赖更新，其他几个项目当日无活动，可能进入长期维护或停滞状态。

### 7. 值得关注的趋势信号

1.  **“记忆投毒”与信任体系成为新焦点**：NanoBot 和 IronClaw 均提出基于来源的记忆信任标签，反映用户对 Agent 长期记忆中恶意注入信息的担忧升级，**记忆安全**将成为下一阶段竞争高地。
2.  **非 OpenAI 模型生态的适配成本显性化**：OpenClaw 的 DeepSeek 问题、CoPaw 的 StepFun/Gemini 字段冲突，表明随着国产模型和开源模型普及，**统一 API 兼容层**的健壮性是所有框架必须解决的底层问题。
3.  **自动化任务（SOP/Cron）的可靠性瓶颈**：ZeroClaw 的 SOP 卡死、OpenClaw 的 Cron 内存溢出、CoPaw 的闲置卡死，显示**长时间无人值守运行**的稳定性是当前框架最脆弱的环节，谁能解决“永不崩溃的后台代理”，谁就能获得企业用户青睐。
4.  **可观测性从“加分项”变为“必选项”**：Token 追踪、跨轮次 OTel 关联、成本报告准确性成为用户投诉集中点，**内置的专业级监控和成本管控**将直接影响用户的选用决策。
5.  **轻量化与重型化的两极分化**：生态中既出现了追求 <10MB RAM 的 PicoClaw，也有日动态 500+ 的 OpenClaw，说明市场需求分层明显：**边缘端**和**云端重型端**都有空间，但中间地带的产品面临最大竞争压力。

**建议**：对于技术决策者，若追求生产级稳定性和生态丰富度，可关注 **OpenClaw**（需做好运维准备）或 **Hermes**；若侧重快速部署和桌面体验，**CoPaw** 或 **NanoClaw** 是更稳健的选择；若关注前沿的自动化可靠性研究，**ZeroClaw** 和 **IronClaw** 值得深入跟踪。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-08-08
**数据周期：** 过去 24 小时 (截至 2026-08-08)
**分析师：** Agnes (Sapiens AI)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**，24 小时内产生 10 条 Issues 和 21 条 PR 更新，社区贡献节奏稳定。核心进展集中在**会话隔离安全性**与**多通道稳定性**修复上，多个关键 Bug 已获修复或进入关闭流程。Telegram 轮询恢复、微信协议加固及子代理会话持久化等议题显示项目正着力提升生产环境的健壮性。暂无新版本发布，但内部技术债务清理（如 JSONL 写入去重）同步推进中。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 **11 条 PR 已合并/关闭**，主要集中在 WebUI 体验优化、记忆归档机制修复及依赖文档更新：

- **WebUI 路由清理与修复**：[#5284](https://github.com/HKUDS/nanobot/pull/5284) 移除了废弃的 `/api/sessions/{key}/messages` 路由；[#5285](https://github.com/HKUDS/nanobot/pull/5285) 修复了新主题创建后的路由保持问题；[#5281](https://github.com/HKUDS/nanobot/pull/5281) 优化了活动记录区域的视觉边缘渐变效果。
- **记忆与归档机制完善**：[#5280](https://github.com/HKUDS/nanobot/pull/5280) 和 [#5231](https://github.com/HKUDS/nanobot/pull/5231) 解决了短休眠会话无法进入 Dream 处理队列的问题，确保了历史数据的完整性。
- **依赖与文档现代化**：[#5282](https://github.com/HKUDS/nanobot/pull/5282) 更新了 Langfuse、Olostep 及微信支持的依赖恢复指南，使用户安装流程更平滑。
- **UI 交互优化**：[#5277](https://github.com/HKUDS/nanobot/pull/5277) 实现了模型预设编辑器的内联展开功能，提升了配置效率。

**整体评价**：项目今日在“清理债务”与“夯实基础”方面进展显著，特别是解决了长期存在的会话归档盲点，为后续功能迭代奠定了更稳定的底层逻辑。

## 4. 社区热点
- **Token 消耗追踪需求**：[#5266](https://github.com/HKUDS/nanobot/issues/5266) (10 条评论)
  - **热点分析**：用户反馈 nanobot 在闲置状态下仍消耗百万级 Token，急需细粒度的调用日志以定位异常。这反映了用户对**成本控制**和**可观测性**的高敏感度，是进阶用户的核心痛点。
- **Agent 插件与 CLI 集成**：[#5288](https://github.com/HKUDS/nanobot/pull/5288)
  - **热点分析**：探讨将 Agent Plugins v1 与现有 CLI Apps 目录整合，旨在统一包边界管理。此 PR 体现了项目向**标准化插件生态**演进的明确信号。
- **子代理会话持久化**：[#5291](https://github.com/HKUDS/nanobot/pull/5291)
  - **热点分析**：修复子代理（Subagent）完成后对话记录丢失的问题。随着多代理架构的普及，**调试可追溯性**已成为社区关注焦点。
- **Telegram 轮询恢复**：[#5156](https://github.com/HKUDS/nanobot/pull/5156)
  - **热点分析**：修复网络抖动后 bot 静默停滞的严重 Bug。作为高频通道，Telegram 的稳定性直接影响用户体验，此修复受到运维侧高度关注。

## 5. Bug 与稳定性
今日修复/关闭了多个关键 Bug，稳定性显著提升：

| 严重级别 | 问题描述 | 状态/链接 |
| :--- | :--- | :--- |
| **高** | **Session 历史被误删**：会话保留修剪逻辑导致主动投递消息（如 Cron 通知）丢失。 | 已修复 [#5272](https://github.com/HKUDS/nanobot/pull/5272) (关联 Issue #5273) |
| **高** | **微信渠道崩溃/异常**：协议头、二维码验证及生命周期管理存在兼容性问题。 | 已加固 [#5263](https://github.com/HKUDS/nanobot/pull/5263) |
| **中** | **媒体 URL 丢失**：非媒体根目录下的文件在历史 API 中无法返回有效的 `media_urls`。 | 已修复 [#5268](https://github.com/HKUDS/nanobot/pull/5268) (关联 Issue #5264) |
| **中** | **目标消息循环回复**：`/goal` 命令在等待用户时产生大量重复回复。 | 待处理 [#5256](https://github.com/HKUDS/nanobot/issues/5256) |
| **中** | **模型切换受限**：无法在特定会话中动态切换模型，需重置整个实例。 | 待处理 [#5198](https://github.com/HKUDS/nanobot/issues/5198) |
| **低** | **WhatsApp 音频发送失败**：Bot 无法发送音频消息。 | 待处理 [#5149](https://github.com/HKUDS/nanobot/issues/5149) |

## 6. 功能请求与路线图信号
- **会话级临时文件隔离**：[#5276](https://github.com/HKUDS/nanobot/issues/5276) 和 [#5283](https://github.com/HKUDS/nanobot/pull/5283) 强烈暗示项目正在推进**多会话环境下的安全隔离**能力，允许每个非 WebUI 会话拥有独立的文件系统沙箱。
- **会话历史外部化存储**：[#5278](https://github.com/HKUDS/nanobot/issues/5278) 提出将会话历史移出 Agent 工作区，[#5279](https://github.com/HKUDS/nanobot/pull/5279) 已跟进。这表明路线图正朝向**更严格的安全边界**和**权限最小化**方向发展。
- **Telegram 贴纸与反应支持**：[#5289](https://github.com/HKUDS/nanobot/issues/5289) 请求增加贴纸发送及 Agent 主动消息反应功能，反映了用户对**社交体验丰富度**的期待。
- **临时聊天模式**：[#5252](https://github.com/HKUDS/nanobot/pull/5252) 正在实现一种非持久化的临时会话模式，适合快速、一次性的交互场景。

## 7. 用户反馈摘要
- **成本焦虑**：用户非常关注 Token 消耗透明度，希望在后台静默活动时也能清晰看到资源使用情况（#5266）。
- **安全感需求**：随着功能扩展，用户担忧会话数据（历史、临时文件）与 Agent 工作区的混存带来的安全风险，迫切希望实现物理或逻辑上的隔离（#5276, #5278）。
- **稳定性担忧**：Telegram 和微信通道的静默失败（不报错但停止工作）严重影响了信任度，用户渴望更健壮的断线重连和错误恢复机制（#5156, #5263）。
- **使用便利性**：用户希望像使用商业 SaaS 产品一样，能够灵活地在单会话内切换模型，而非全局配置（#5198）。

## 8. 待处理积压
以下 Issue 已开放且尚未见到明确的修复 PR，建议维护者关注：

1.  **[Bug] /goal 消息循环回复** [#5256](https://github.com/HKUDS/nanobot/issues/5256)
    - *影响*：导致不必要的 Token 浪费和界面混乱。
    - *建议*：优先级较高，需检查异步消息队列或状态机逻辑。
2.  **[Bug] 会话内无法切换模型** [#5198](https://github.com/HKUDS/nanobot/issues/5198)
    - *影响*：限制了灵活性和实验性测试。
    - *建议*：评估实现会话级模型覆盖的技术路径。
3.  **[Bug] WhatsApp 音频发送失败** [#5149](https://github.com/HKUDS/nanobot/issues/5149)
    - *影响*：功能残缺，影响多媒体体验。
    - *建议*：检查 ffmpeg 集成及 WhatsApp 通道的媒体编码规范。
4.  **[Enhancement] Token 消耗日志** [#5266](https://github.com/HKUDS/nanobot/issues/5266)
    - *影响*：可观测性不足。
    - *建议*：虽非 Bug，但需求强烈，可考虑作为优先增强功能纳入下一版本。

---
*报告生成时间：2026-08-08*
*数据来源：GitHub API (HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-08-08**

## 1. 今日速览
2026年8月8日，Hermes Agent 项目保持**高活跃度**，过去24小时共产生100条更新（50 Issues + 50 PRs）。今日无新版本发布，但代码库迎来密集的安全加固与Windows平台稳定性修复。核心进展集中在**Kanban工作流可靠性**、**多平台会话同步**以及**桌面端用户体验优化**三个维度。社区对跨平台会话共享的需求强烈，而Windows端的TUI崩溃与安装残留问题仍是当前主要痛点。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日合并/关闭的关键PR推动了以下核心能力的完善：

*   **代理终止行为规范化 (PR #80808, #81415)**: `fix(agent): require actionable handoffs at implementation boundaries` 已合并。修复了代理在遇到权限、安全或工作区边界时仅停止而不提供清晰后续步骤的问题，确保用户能明确区分任务“完成”、“暂停”还是“受阻”。
*   **Kanban 进程组清理修复 (PR #81411)**: `fix(kanban): signal the whole process group when terminating workers` 已合并。解决了Kanban worker终止时仅杀死主进程而遗留子进程的问题（关联 Issue #80280），提升了定时任务执行的环境整洁度。
*   **Shell Hook 注册中心化 (PR #81409)**: `fix(hooks): register shell hooks in profile-scoped UI runtimes` 已合并。统一了Desktop、TUI Gateway和Slash Worker中的Profile Scoped Hook注册逻辑，增强了插件在多种UI运行时下的兼容性。
*   **模型供应商映射修复 (PR #81418)**: `fix(models_dev): map meta-ai provider to models.dev 'meta' id` 已合并。修正了Meta Muse Spark模型的上下文窗口解析错误，从默认的256K恢复为正确的~1M窗口。
*   **MCP工具名长度限制 (PR #81417)**: `fix(mcp): clamp generated MCP tool names to 64 chars` 已合并。防止Portable Agent Plugins因名称折叠导致生成的MCP工具名超长失效。

## 4. 社区热点
*   **跨平台会话上下文共享 (Issue #4335)**: **评论数最多 (12)**。用户迫切希望CLI与Telegram等平台的会话状态打通，当前隔离的Session Store限制了多端协同体验。
*   **上下文压缩导致工具链中断 (Issue #79278)**: 高关注度Bug。非幂等工具在preflight compression期间被执行但结果未返回，导致代理重放引发副作用。这是P1级严重问题。
*   **OAuth使用量异常报错 (Issue #65365)**: 涉及Anthropic Pro/Max订阅用户在启用`memory`或`session_search`工具时触发HTTP 400 "You're out of extra usage"，疑似Schema暴露导致的计费/配额逻辑异常。
*   **WhatsApp功能对齐运动 (Issue #79890)**: 由社区发起的Meta-Issue，旨在拉齐WhatsApp Bridge（whatsapp-web.js/Baileys）与官方Business API的功能差距，体现了用户对WhatsApp支持的深度需求。

## 5. Bug 与稳定性
今日Bug报告集中于**Windows平台稳定性**和**Kanban调度可靠性**：

*   **[P1] Gateway预检压缩崩溃 (Issue #79624)**: 重启时若Session历史超98,304 token，Preflight Compression步骤直接导致Gateway进程退出(Exit 1)。
*   **[P2] Windows TUI 启动后崩溃 (Issue #80968, #81290)**: Windows下`hermes --tui`输入命令后显示"gateway exited"；桌面应用次窗口变黑且无法恢复。
*   **[P2] Windows 安装残留 (Issue #80569)**: Desktop安装/更新后遗留重复的启动项，且可能触发 respawn。
*   **[P3] Telegram Rich Messages 静默丢弃 (Issue #63485, #79331, #81368)**: Telegram Bot API 10.1 的顶层Rich Message更新被忽略或代码块复制功能缺失。已有相关Fix讨论。
*   **[P3] Kanban 循环恢复死锁 (Issue #79728, #75444)**: 自动分解器将恢复中的Triage任务错误地重新分解，导致无限阻塞或僵尸进程。

## 6. 功能请求与路线图信号
*   **Teams 多Profile持久化协作 (Issue #81405)**: 提出“First-class Teams”概念，希望基于Profiles实现Quick Chat、Channels和共享能力，这暗示了项目正在从单Agent向多Agent团队协作演进。
*   **Cron任务完整Prompt访问 (Issue #18374)**: 沙盒Agent目前只能查看`prompt_preview`，请求通过`get/include_prompt`获取完整Prompt以支持复杂定时任务管理。**PR #81408** 已提出对应实现。
*   **实时语音 Provider 契约 (PR #81404)**: 新增`realtime voice provider contract`，支持Discord、转录等场景的实时语音能力，预示着Hermes在 multimodal交互上的扩展。
*   **确认删除会话 (Issue #81356)**: 桌面端删除会话需增加确认弹窗，防止误操作。

## 7. 用户反馈摘要
*   **痛点**: Windows用户的安装体验和UI稳定性体验较差（黑屏、路径解析错误、WSL探针噪音）。Issue #80184 和 #81290 集中反映了这一不满。
*   **满意度**: 用户对Gateway架构的扩展性持正面态度，但苦于各平台（CLI/Telegram/Discord）的数据孤岛。
*   **安全焦虑**: 用户对浏览器自动化中的SSRF风险（Issue #80847）和工具结果存储中的敏感信息泄露（PR #80760）表示关注，项目近期在安全加固上的密集更新得到了认可。

## 8. 待处理积压
*   **Issue #54523 (P2)**: Tailscale远程桌面async路由阻塞问题，已报告数月，影响远程运维体验。
*   **Issue #22418 (P2)**: macOS Atomic Hermes与CLI gateway的端口/Token冲突问题，长期存在。
*   **Issue #4335 (P3)**: 跨平台会话共享需求强烈，但涉及架构级改动，目前仍为`needs-decision`状态，建议维护者评估优先级。

---
*报告生成时间: 2026-08-08 | 数据来源: NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-08-08
**数据来源：** GitHub API (github.com/sipeed/picoclaw)

## 1. 今日速览
今日 PicoClaw 项目保持活跃，24小时内共产生 **18 条** 相关更新（4 Issues + 14 PRs）。虽然有 2 个 PR 已合并（主要为依赖更新），但核心业务代码的合并量较少，主要动力来自于 Dependabot 的自动化维护。值得注意的是，今日发起了两个针对 WhatsApp 连接稳定性和模型上下文缓存性能的关键修复 PR，显示出维护者对连接稳定性和推理效率的关注。整体项目健康度良好，依赖版本同步及时，但新功能推进相对平缓。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日有 **2 条 PR 被合并/关闭**，主要集中在依赖层面，但另有 **3 条关键修复 PR 已就绪或今日提交**，预示着近期的稳定性改进：

*   **已合并：GitHub Copilot SDK 大幅升级** (#3291)
    *   将 `github.com/github/copilot-sdk/go` 从 `0.2.0` 升级至 `1.0.8`。这是一次重大的依赖迭代，可能带来 API 兼容性问题，但也引入了新版本 SDK 的功能和修复。
*   **已合并：Pion RTP 库更新** (#3289)
    *   `github.com/pion/rtp` 从 `1.10.2` 升级至 `1.10.5`，旨在修复潜在的音频/视频传输问题。
*   **今日提交的关键修复（待合并）：**
    *   **#3321 (fix(agent))**: 调整动态上下文在 System Message 中的位置，旨在**保留 Prefix Caching（前缀缓存）效率**。这是一个重要的性能优化，可能直接影响长会话的响应速度。
    *   **#3320 (fix(deps))**: 升级 `whatsmeow` 库以解决 WhatsApp **"Client outdated (405)"** 错误。这是一个紧急的连接稳定性修复，直接关系到 WhatsApp 渠道的可用性。
    *   **#3319 (fix(tools))**: 修复 `exec` 工具中 `timeout` 和布尔选项（`background`, `pty`）未被正确识别的问题，提升工具调用的可靠性。

**项目推进评估：** 项目正从单纯的依赖维护转向修复关键的运行时稳定性（WhatsApp）和性能（Prefix Caching）问题，整体向前迈进了一步，特别是在连接层和执行层。

## 4. 社区热点
以下 Issue 和 PR 在社区中引发了较多关注（基于评论数或近期活动）：

1.  **Issue #3093: 对 SimpleX/tox 等去中心化协议的需求**
    *   **链接:** [sipeed/picoclaw Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
    *   **热度:** 评论 6 条，👍 1
    *   **分析:** 尽管创建时间较早（2026-06-10），但在今日仍被标记为活跃。用户强烈希望能支持 SimpleX、Tox 等注重隐私的去中心化通讯协议。这反映了部分用户对隐私和去中心化架构的持续需求，尽管当前项目重心似乎在集成主流渠道（如 Telegram, WhatsApp）。

2.  **Issue #3302: 支持 MCP Servers 的 OAuth 2.1**
    *   **链接:** [sipeed/picoclaw Issue #3302](https://github.com/sipeed/picoclaw/issues/3302)
    *   **热度:** 评论 2 条
    *   **分析:** 用户参考 #2546 提出为 MCP 服务器支持 OAuth 2.1。这表明社区对 MCP 协议的安全性认证方式有更高要求，是功能增强类的需求。

3.  **Issue #3307: Telegram/多渠道的 Session 列表/切换命令**
    *   **链接:** [sipeed/picoclaw Issue #3307](https://github.com/sipeed/picoclaw/issues/3307)
    *   **热度:** 评论 1 条
    *   **分析:** 用户指出 Web UI 已有完善的会话管理，但 Telegram 等聊天渠道缺失对应功能。这是一个明显的**体验不一致性**痛点，需求明确，若能通过命令行或聊天指令实现，将大幅提升移动端/聊天场景下的用户体验。

4.  **PR #3306, #3305, #3304: Dependabot 依赖更新**
    *   **链接:** [PR #3306](https://github.com/sipeed/picoclaw/pull/3306), [PR #3305](https://github.com/sipeed/picoclaw/pull/3305), [PR #3304](https://github.com/sipeed/picoclaw/pull/3304)
    *   **分析:** AWS SDK 和 Anthropic SDK 的持续更新，显示了项目对底层依赖安全性的自动维护机制在正常运转。

## 5. Bug 与稳定性
| 问题描述 | 严重程度 | 关联 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **WhatsApp 连接断开 (405 Client Outdated)** | **高** | [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) | **已有 Fix PR** (今日提交) |
| **Exec 工具超时和参数忽略** | **中** | [PR #3319](https://github.com/sipeed/picoclaw/pull/3319) | **已有 Fix PR** (今日提交) |
| **Tool-call 格式泄漏到 LLM 摘要** | **中** | [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) | 待合并 (由 MrTreasure 提交) |
| **SeaHorse/Channel Manager 并发隐患** | **低 (潜在)** | [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) | 代码审查建议，无直接 Fix PR |

**分析：** 今日最紧迫的 Bug 是 WhatsApp 连接问题，已有紧急修复 PR (#3320)。Exec 工具的参数处理错误也已被识别并修复 (#3319)。Issue #3308 提到的并发和 goroutine 泄漏问题属于代码质量层面的风险，虽未直接导致故障报告，但建议维护者关注。

## 6. 功能请求与路线图信号
*   **OAuth 2.1 for MCP:** Issue #3302 请求支持 OAuth 2.1，属于"Nice-to-Have/Enhancement"。随着 MCP 生态的发展，安全认证方式的升级是合理需求，可能被纳入后续迭代。
*   **多渠道 Session 管理:** Issue #3307 请求在 Telegram 等非 Web 渠道实现类似 Web UI 的会话列表和切换功能。这是一个重要的**用户体验增强**点，如果实现，将填补当前产品在非 Web 交互场景下的功能空白。
*   **DashScope TTS 与微信音频:** PR #3270 新增了阿里云 DashScope TTS 支持和微信音频文件发送功能。虽然尚未合并，但展示了项目对**多模态（音频）**和**国内云服务集成**的扩展意图。
*   **模型默认回退链:** PR #3200 提出在 Web UI 中配置模型默认回退链。这是针对**可靠性**的重要功能，允许在默认模型不可用时自动切换，符合项目作为个人 AI 助手的定位。

## 7. 用户反馈摘要
*   **痛点：**
    *   **WhatsApp 不可用：** 用户因客户端版本过旧被拒绝连接，导致核心渠道失效（Issue #3320 相关）。
    *   **工具调用不精确：** `exec` 工具的超时和布尔参数被忽略，导致自动化任务行为不符合预期（Issue #3319 相关）。
    *   **跨渠道体验不一致：** Web UI 功能强大，但 Telegram 等渠道缺乏基本的会话管理能力，用户体验割裂（Issue #3307）。
    *   **内部状态污染：** Tool-call 格式可能泄漏到 LLM 的摘要中，影响后续对话的连贯性（Issue #3279 相关）。
*   **满意/肯定：**
    *   用户对 PicoClaw 能在 $10 硬件上以 <10MB RAM 运行表示赞赏（Issue #3308 评论中提及）。
    *   Dependabot 的自动依赖更新被认为有助于保持项目基础库的安全和最新。

## 8. 待处理积压
*   **Issue #3308 (Code Review - Concurrency hazards):** 由 Rehanasharmin 提交，指出的 SeaHorse、Channel Manager 和 Hooks 中的并发竞争、goroutine 泄漏和性能优化问题。这是一个高价值的代码审查反馈，但截至目前尚无官方回复或关联的 Fix PR，建议维护者优先审阅。
*   **PR #3283 (DingTalk 图片消息支持):** 由 MrTreasure 提交，为钉钉渠道增加图片消息入站支持。该 PR 已开放较长时间（创建至今日），仍待合并。
*   **PR #3271 (更新默认模型名称):** 由 LeaderOnePro 提交，刷新了 9 个提供商的默认模型列表至 2026-07 最新。这是一个维护性更新，但长期未合并，可能导致用户默认配置落后。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**：2026-08-08  
**数据来源**：GitHub API (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 在 2026-08-07 展现出**高活跃度**与**活跃的开发节奏**，过去24小时内共产生 10 条 PR 更新。社区贡献主要集中在**渠道集成扩展**（Mattermost、Dial）与**工具能力增强**（Tavily MCP、AnyDoc）。虽然当日无新 Release 版本发布，但已合并/关闭了 2 个 PR，包括一个关键的中文社区 Bug 修复和一个被上游架构演进取代的旧 PR。整体项目健康度良好，多渠道适配与 Agent 工作流标准化是当前核心进展方向。

## 2. 版本发布
**无新版本发布**。
- 当前无最新 Release 记录。
- 依赖即将合并的 PR（如 #3199, #2909, #3050）完成后预计将推动下一个 Feature Release。

## 3. 项目进展
**今日合并/关闭的重要 PR：**

*   **PR #3197 [CLOSED]** - **失败状态展示优化**
    *   **贡献者**: tier2tech-tian
    *   **进展**: 修复了 `agent-runner` 中失败状态仅显示泛化文案（如“执行系统检查失败”）的问题。现能从 `resultSummary` 提取具体原因，以“动作失败：具体原因”格式展示，并复用脱敏逻辑限制单行38字符，提升了调试效率与用户体验。
    *   **链接**: [nanocoai/nanoclaw PR #3197](https://github.com/nanocoai/nanoclaw/pull/3197)

*   **PR #546 [CLOSED]** - **Mattermost 渠道技能 (旧版)**
    *   **贡献者**: wakqasahmed
    *   **进展**: 该 PR 因架构演进被标记为 Blocked 并关闭。它原计划基于旧的 `Channel`/`registry.ts` 架构实现 Mattermost 集成，已被新 PR #3199 取代。
    *   **链接**: [nanocoai/nanoclaw PR #546](https://github.com/nanocoai/nanoclaw/pull/546)

**关键进行中 PR 分析：**
*   **PR #3199** (Mattermost v2 集成) 直接替代 #546，采用新的 `ChannelAdapter` 模式，是 Mattermost 支持落地的关键路径。
*   **PR #2909** (Setup 流程模板化) 完善了 Agent 模板加载器后的用户引导流程，增强首体验。
*   **PR #3050** (Dial 渠道集成) 进一步丰富了渠道选择器，支持 Dial 协议。

## 4. 社区热点
**今日最受关注的 PRs：**

1.  **PR #3199: Add Mattermost channel integration (v2 ChannelAdapter)**
    *   **活跃度**: 创建并更新于 2026-08-07，由同一作者提交。
    *   **热点原因**: Mattermost 是企业级通信的重要渠道，v1 实现因架构变更被弃用，社区对此有明确需求。该 PR 符合最新 `ChannelAdapter` 规范，预计是下一个合并重点。
    *   **链接**: [nanocoai/nanoclaw PR #3199](https://github.com/nanocoai/nanoclaw/pull/3199)

2.  **PR #2909: feat(setup): template setup flow in the wizard and first-agent stamping**
    *   **活跃度**: 更新于 2026-08-07，核心团队成员参与。
    *   **热点原因**: 涉及 Agent 创建的核心用户体验（UX），解决新用户首次使用时的引导痛点，对降低使用门槛至关重要。
    *   **链接**: [nanocoai/nanoclaw PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)

3.  **PR #3190: feat: add Tavily MCP tool skill**
    *   **活跃度**: 更新于 2026-08-07。
    *   **热点原因**: Tavily 是流行的 AI 搜索引擎/内容获取工具，通过 MCP 协议集成可显著扩展 Agent 的信息检索能力，符合当前 MCP 生态热点。
    *   **链接**: [nanocoai/nanoclaw PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)

## 5. Bug 与稳定性
*   **PR #3197** (已合并) - **修复**: 解决了失败状态信息展示不清的问题，提升了可观测性。
*   **PR #2346** (待合并) - **修复**: 处理未知斜杠命令时被错误分类为 `passthrough` 导致响应被静默丢弃的问题。修复后未知命令将按正常聊天处理，避免功能异常。
    *   **链接**: [nanocoai/nanoclaw PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)
*   **PR #3145** (待合并) - **修复**: 为现有的 messaging-group wirings 回填缺失的 channel destinations，确保数据一致性。
    *   **链接**: [nanocoai/nanoclaw PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)
*   **PR #3196** (待合并) - **修复**: 修复/添加只读挂载 (`Fix/add mount readonly`)，可能涉及容器化部署的稳定性或安全性。
    *   **链接**: [nanocoai/nanoclaw PR #3196](https://github.com/nanocoai/nanoclaw/pull/3196)

## 6. 功能请求与路线图信号
*   **多渠道集成扩展**: PR #3199 (Mattermost), PR #3050 (Dial) 表明项目正积极扩展支持的非 Slack/Discord 渠道，满足企业多样化通信需求。
*   **MCP 工具生态**: PR #3190 (Tavily) 和 PR #3198 (AnyDoc) 显示项目通过 Skill 机制快速集成新的 MCP 工具和文档处理能力，增强 Agent 的工具集。
*   **用户体验优化**: PR #2909 聚焦于首次设置流程的模板化，暗示路线图关注降低新用户上手难度。
*   **架构标准化**: Mattermost v2 (PR #3199) 采用新的 `ChannelAdapter` 模式，表明项目正在推进内部接口的标准化和现代化。

## 7. 用户反馈摘要
*   **痛点**: 用户反馈失败时信息展示过于泛化（如“执行系统检查失败”），缺乏具体原因，影响调试效率 (PR #3197 背景)。
*   **痛点**: 未知斜杠命令被误判导致响应静默丢失，用户感知为功能失效 (PR #2346 背景)。
*   **需求**: 对 Mattermost、Dial 等企业级或特定渠道的支持有持续需求。
*   **需求**: 希望更方便地集成 Tavily、AnyDoc 等流行工具，扩展 Agent 能力边界。
*   **满意点**: 项目积极响应社区贡献，通过 Skill 机制快速接纳新工具和渠道 (如 Tavily, AnyDoc, Mattermost v2)。

## 8. 待处理积压
*   **PR #3199** (Mattermost v2): 高优先级，替代已关闭的 #546，是扩展企业渠道的关键。
*   **PR #2909** (Setup 模板化): 高优先级，改善核心用户体验。
*   **PR #3050** (Dial 集成): 中等优先级，丰富渠道选项。
*   **PR #3190** (Tavily Skill): 中等优先级，扩展工具生态。
*   **PR #3198** (AnyDoc Skill): 中等优先级，扩展文档处理能力。
*   **PR #2346** (未知命令处理修复): 中优先级，修复潜在的功能陷阱。
*   **PR #3145** (数据回填): 中优先级，修复数据一致性。
*   **PR #3196** (挂载修复): 低-中优先级，可能涉及部署稳定性。

**建议维护者关注**: 优先审查和合并 PR #3199 和 #2909，以推进多渠道支持和用户体验优化。同时确认 PR #2346 的修复是否已覆盖所有边界情况。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-08-08  
**分析周期：** 过去 24 小时

## 1. 今日速览
IronClaw 今日保持高频活跃，24 小时内产生 50 条 Issue 更新和 50 条 PR 更新，开发节奏紧凑。**核心亮点**在于“文档真实性（Doc-Truth）”治理框架的落地（5 项相关 PR/Issue 同步推进）以及渐进式工具披露（Progressive Tool Disclosure）的性能优化。尽管没有新版本发布，但内部正在为 `v1.2.0` 及持久化状态兼容性构建关键基础设施。项目整体处于**高强度重构与稳定性加固期**。

## 2. 版本发布
**无新版本发布。**

当前版本迭代聚焦于底层架构稳固，包括持久化状态兼容性校验机制的建设（Issue #7380），旨在防止类似 `1.0.0-rc.1` → `1.1.0-rc.1` 升级过程中出现的数据断裂问题。

## 3. 项目进展
今日合并/关闭的重要 PR 及其贡献：

*   **工具披露性能优化 (PR #7372)**: 增加了宽目录（91 工具）模式下的 schema-token 缩减基准测试，确保渐进式披露的性能红利不被侵蚀。
*   **渠道交付工具重构 (PR #7157)**: 实现了双通道模型（对话生命周期 vs 通知渠道），消除了旧的共享路由主体绑定复杂性，使“运行”真正作为调用者行动。
*   **网关审计与清理 (PR #7373)**: 完成了对 37 个架构测试网关文件及 ~80 个 CI 脚本的全面审计，删除了死网关并武装了 5 个失效保护，提升了系统安全红线。
*   **沙箱配置增强 (PR #7214)**: 新增了显式的 Docker 和 Railway 用户沙箱配置，隔离了工作空间权限，降低了多租户环境下的安全风险。
*   **运行失败通知修复 (PR #7131)**: 确保触发式运行失败时，用户能收到_sanitized_ 的终端通知，而非静默记录为 Skipped。

**进展评估**：项目正从功能堆叠转向**可观测性与可靠性工程**，特别是在工具披露、文档一致性和运行时隔离方面取得了实质性突破。

## 4. 社区热点
今日讨论最活跃、评论数最多的 Issues：

1.  **[Issue #7340] 无法重置模型设置为出厂默认值** (6 条评论)
    *   **链接**: https://github.com/nearai/ironclaw/issues/7340
    *   **分析**: 用户反馈在修改 Provider/Model 设置后无法恢复初始状态。这反映了用户对**配置可逆性**和**兜底机制**的强烈需求，尤其是在多租户或共享设备场景下。
2.  **[Issue #6989] Token 估算 Bug：混合 Provider 使用量与尾部估算** (4 条评论)
    *   **链接**: https://github.com/nearai/ironclaw/issues/6989
    *   **分析**: 核心库中 `ModelWorkRequest` 错误地根据引用字符串长度而非实际内容估算 Token，导致计费或配额管理偏差。这是 P1 级 Bug，影响核心成本核算。
3.  **[Issue #7317] 提议：文档真实性验证流水线 (Doc-Truth Verification Pipeline)** (3 条评论)
    *   **链接**: https://github.com/nearai/ironclaw/issues/7317
    *   **分析**: 针对发布更新与文档不同步导致的模型幻觉问题，提出了系统性的验证方案。该提议已获得社区支持并迅速转化为 PR 系列 (#7375-#7381)。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

*   **[P1] Issue #6476 (已关闭) - Slack 扩展激活编码错误导致模型幻觉**
    *   **详情**: Slack 连接失败时，模型未识别为工具错误，而是幻觉出“需要租户权限”的解释。
    *   **状态**: 已关闭，修复关联了文档漂移问题 (Issue #7367)。
*   **[P1] Issue #5456 - 常规运行因 Runner 租赁过期失败**
    *   **详情**: 90 秒非活动阈值对于涉及多工具和外部 API 的复杂流程过于激进，导致 Email 等任务中断。
    *   **状态**: 开放。需评估增加超时阈值或优化租赁逻辑。
*   **[P1] Issue #7292 - 已安装工具无法使用，Runner 心跳错误**
    *   **详情**: 在 Railway 实例上，CoinGecko 工具安装后无法调用，Agent 卡在检查状态但 Runner 失去响应。
    *   **状态**: 开放。指向基础架构稳定性问题。
*   **[P1] Issue #7298 - 请求发送失败或监控失去与 Runner 联系**
    *   **详情**: 基础设施错误，请求未发出或运行中途失联。
    *   **状态**: 开放。可能与 Issue #5456 同源，均指向 Runner 生命周期管理。
*   **[Bug] Issue #7246/#7247/#7294 - 模型幻觉状态**
    *   **详情**: 多个独立 Issue 显示模型在未验证的情况下声称 GitHub/Telegram 已连接或自动化已运行。
    *   **状态**: 开放。反映了**状态确认机制**的缺失，模型倾向于猜测而非查询真实状态。
*   **[Bug] Issue #6590 - Windows 下 serve 失败**
    *   **详情**: 工作区根目录与默认 Skill 根目录重叠导致的构建错误。
    *   **状态**: 开放。影响 Windows 开发者体验。

## 6. 功能请求与路线图信号
*   **内存持久化改进 (Issue #7185 & PR #7365)**: 用户反馈跨会话记忆不可靠。PR #7365 已通过“记忆保存指导”和“永久 MEMORY.md 提示通道”进行修复，表明**长期记忆可靠性**是 v1.2.0 的关键路线图目标。
*   **工具披露性能 (Issue #7385)**: 新增“持久化、可查询的工具披露运行指标”，表明团队关注**可观测性**，希望让运营者看清披露机制的开销。
*   **文档自动化 (Issue #7317)**: 社区主动提议并快速实现的 Doc-Truth 流水线，显示了项目对**开发者体验**和**文档准确性**的高度重视。

## 7. 用户反馈摘要
*   **痛点**:
    *   **配置锁死**: 用户无法重置模型设置 (Issue #7340)，感到无助。
    *   **记忆断裂**: 同一用户在对话 A 中提供的信息，对话 B 无法 recall (Issue #7185)。
    *   **状态幻觉**: 模型自信地报告错误状态（如“已连接”、“已运行”），导致用户信任受损 (Issue #7246, #7247, #7294)。
    *   **Windows 兼容**: 本地开发环境在 Windows 上构建失败 (Issue #6590)。
*   **满意点**:
    *   文档真实性计划的快速响应和透明化 (Issue #7317)。
    *   工具披露机制的性能优化持续进行 (PR #7372, #7374)。

## 8. 待处理积压
*   **[Issue #5456] Routine runs fail with runner lease expiration**: 长期存在的 Runner 租赁超时问题，影响多步工作流稳定性，需优先解决。
*   **[Issue #7292] Installed tool cannot be used**: 工具安装后的心跳/可用性检测逻辑缺陷，直接影响用户体验。
*   **[Issue #7295] Agent leaks or confuses Slack user identity**: 多租户隔离问题，涉及隐私，需紧急修复。
*   **[Issue #6590] serve fails on Windows**: Windows 开发者支持缺口，阻碍贡献者生态。

---
*报告生成时间: 2026-08-08*  
*数据来源: IronClaw GitHub Repository*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-08-08  
**数据来源：** LobsterAI GitHub Repository

---

## 1. 今日速览
LobsterAI 今日保持**高活跃度**，发布新版本 `2026.8.7`，合并 6 个 PR（含核心功能修复与性能优化），社区反馈积极。主要进展包括 Cowork 会话搜索功能上线、Markdown LaTeX 数学公式渲染修复、以及 Windows 安装稳定性提升。同时存在 1 个关于模型 ID 含斜杠的已知 Bug 修复 PR 待合并，显示项目对 OpenAI 兼容生态的适配正在完善。

---

## 2. 版本发布
### 🚀 LobsterAI 2026.8.7 (2026-08-07)
**链接：** [Release 2026.8.7](https://github.com/netease-youdao/LobsterAI/releases)

**核心更新内容：**
| 类型 | 模块 | 说明 | PR |
|------|------|------|-----|
| ✨ 新增 | Cowork | 添加标题栏对话搜索功能，提升长会话导航效率 | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) |
| ✨ 新增 | Renderer | 支持 Markdown LaTeX 数学公式分隔符渲染 | [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) |
| 🐛 修复 | Win Installer | 修复 Windows 安装器中 null watchdog 异常导致崩溃的问题 | [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) |
| 🐛 修复 | OpenClaw | 修复插件索引管理键污染配置的问题 | [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) |

**迁移注意事项：**  
- 本版本为补丁更新，无破坏性变更。
- 若使用自定义 OpenClaw 模型 Provider（如 SiliconFlow），建议关注 [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 的合并情况，以解决模型 ID 含斜杠时配置丢失的问题。

---

## 3. 项目进展
今日合并/关闭 **6 个 PR**，主要推进以下方向：

- **Cowork 体验优化**：[#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) 实现标题栏搜索，[#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) 修复聊天搜索相关逻辑，提升团队协作会话的可追溯性。
- **渲染层增强**：[#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) 完善 LaTeX 数学公式支持，满足科研/技术用户群体需求。
- **平台稳定性**：[#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) 修复 Windows 安装器 watchdog 空值异常；[#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) 修复全屏代码工具栏点击穿透问题。
- **架构清理**：[#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) 清理插件索引管理键，防止配置污染。

**整体评价：** 项目正从“功能扩展”向“体验打磨”过渡，今日 PR 多集中于 UI/UX 细节修复与稳定性加固，符合 v2026.8.x 系列的迭代节奏。

---

## 4. 社区热点
### 🔥 讨论活跃 Issue/PR

1. **[Bug] 自建 Skill 安装后不显示** [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)  
   - **热度**：2 条评论，必现问题（Win10, v2026.3.26）  
   - **诉求**：用户反馈创建 Skill 后提示成功，但重启后技能面板无显示，且路径指向 OpenClaw 目录而非预期位置。反映 Skill 系统路径管理与 UI 加载逻辑存在不一致。

2. **[Bug] sql.js 高频操作导致崩溃与数据损坏风险** [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273)  
   - **热度**：2 条评论，严重性高  
   - **诉求**：WASM SQLite 在密集写入时出现内存越界崩溃，且非原子写入可能导致数据库永久损坏。长期 Cowork 会话用户对此高度关注，需底层存储优化。

3. **[功能请求] 输入框编辑模式** [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)  
   - **热度**：0 评论，新建 Issue  
   - **诉求**：用户希望支持“Enter 换行、Ctrl+Enter 发送”的编辑模式，提升长 Prompt 输入体验。反映当前交互设计对专业用户不够友好。

---

## 5. Bug 与稳定性
### 🐛 今日报告 Bug（按严重程度排序）

| 等级 | Issue | 摘要 | 状态 | Fix PR |
|------|-------|------|------|--------|
| 🔴 高 | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 模型 ID 含斜杠（如 SiliconFlow 的 `deepseek-ai/DeepSeek-V4-Flash`）时，自定义 Provider 无法在界面中正确显示和选择 | Open | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) (待合并) |
| 🟠 中 | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 Skill 安装路径错误，导致技能面板不显示 | Open | 暂无 |
| 🟠 中 | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | 执行无输出且无错误信息，调试困难 | Open | 暂无 |
| 🟡 低 | [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | 定时任务 UI 重复显示两个相同条目，且提示 API rate limit | Closed | 已关闭 |
| 🟡 低 | [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) | 多 Agent 场景下无法为不同 Agent 绑定独立 IM 机器人和模型 | Closed | 已关闭 |
| 🟡 低 | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | sql.js WASM 内存碎片化导致崩溃及数据库损坏风险 | Open | 暂无（需架构级修复） |

**关键风险提示：**  
- **#2443** 影响使用 OpenAI 兼容服务商（尤其是模型 ID 含 `/` 的 SiliconFlow、DeepSeek 等）的用户，当前已有 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 待合并，建议用户临时避免使用斜杠 ID 或等待版本更新。
- **#1273** 为结构性风险，长期 Cowork 会话用户需手动频繁保存以防数据丢失。

---

## 6. 功能请求与路线图信号
### 💡 用户反馈与潜在路线图

1. **输入框编辑模式** [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)  
   - **诉求**：支持 Enter 换行/Ctrl+Enter 发送，或提供“编辑模式”开关，甚至引入 WYSIWYG 编辑器。  
   - **路线图信号**：符合当前对 Cowork 和长文本输入场景的优化趋势，可能被纳入下一小版本（如 v2026.8.8）的 UX 改进中。

2. **多 Agent 独立配置** [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265)  
   - **诉求**：不同 Agent 绑定不同 IM 机器人和模型，支持角色分工（如调度 vs 生成）。  
   - **状态**：已关闭，但诉求合理。若后续多 Agent 协作成为重点，可能需要重新评估或提供替代方案（如环境变量配置）。

---

## 7. 用户反馈摘要
- **痛点**：
  - Skill 系统路径管理混乱，导致“安装成功”但“面板不显示”（[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)）。
  - 自定义 Provider 的模型 ID 含斜杠时 UI 显示异常，影响第三方服务商集成体验（[#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)）。
  - 输入框交互不符合直觉，长 Prompt 编辑效率低（[#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)）。
  - 存储层缺乏原子写入和内存管理优化，存在数据损坏风险（[#1273](https://github.com/netease-youdao/LobsterAI/issues/1273)）。

- **满意点**：
  - 新版本 Cowork 会话搜索功能（[#2435](https://github.com/netease-youdao/LobsterAI/pull/2435)）提升长会话可操作性。
  - LaTeX 公式渲染支持（[#2449](https://github.com/netease-youdao/LobsterAI/pull/2449)）满足技术用户精确渲染需求。
  - Windows 安装器稳定性修复（[#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)）减少首次部署失败率。

---

## 8. 待处理积压
### ⚠️ 需维护者关注

1. **#1195** [Bug] 自建 Skill 安装路径错误导致面板不显示  
   - **风险**：影响 Skill 生态核心功能，用户信任度下降。  
   - **建议**：排查 Skill 安装目录注册逻辑与 UI 加载路径的一致性。

2. **#1273** [Bug] sql.js 高频操作崩溃与数据损坏风险  
   - **风险**：结构性缺陷，可能导致用户数据永久丢失。  
   - **建议**：评估迁移至更健壮的存储引擎或引入 WAL 模式、内存预分配等优化。

3. **#2443** [Bug] 模型 ID 含斜杠的 Provider 配置丢失  
   - **状态**：Fix PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 已提交，待合并。  
   - **建议**：优先合并以解决 OpenAI 兼容生态的关键兼容性阻塞。

4. **#2447** [Bug] 执行无输出无错误  
   - **风险**：调试黑盒，影响用户排查问题效率。  
   - **建议**：增强执行链路的日志记录与错误透传。

---

**项目健康度评估：** 🟢 良好  
- **活跃度**：高（7 Issues + 7 PRs/24h）  
- **响应速度**：良好（多个 Bug 有对应 PR 或快速关闭）  
- **稳定性**：中等（存在存储层和路径管理的结构性风险）  
- **用户满意度**：中等（核心体验优化获认可，但部分兼容性 Bug 影响第三方集成）  

**明日关注点：** [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 合并情况、[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) 与 [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) 的修复进展。

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

# CoPaw (QwenPaw) 项目日报
**日期：** 2026-08-08
**数据来源：** GitHub API (agentscope-ai/QwenPaw)

## 1. 今日速览
CoPaw 项目在过去24小时内保持了**高活跃度**，共处理 80 条动态（31 Issues + 49 PRs），其中 22 个 PR 已合并，11 个 Issue 已关闭。核心进展在于 `v2.1.0-beta.2` 版本的发布及配套的稳定性修复。社区反馈集中在 Windows 桌面端的用户体验问题（文件占用、文本选中）以及多模态插件的稳定性，同时发现了若干影响特定 Provider（Google Gemini, StepFun）的兼容性问题。项目整体处于快速迭代修复期，技术债务正在被积极偿还。

## 2. 版本发布
### v2.1.0-beta.2
*   **发布状态：** 正式发布
*   **核心更新：**
    *   **CI 修复：** 修正了 `real-behavior-proof` 中的 fence-aware section 提取逻辑 (Fixes #6626)。
    *   **Checkpoint 恢复：** 修复了 Web Workspace 启动时自动快照无法恢复的问题。
*   **注意事项：** 此版本为 Beta，用户反馈指出桌面模式下可能存在文本无法选中的回归问题（见 #6797, #6801），建议 Windows 用户关注后续补丁。

## 3. 项目进展
今日合并/关闭的 22 个 PR 主要集中在稳定性修复和配置健壮性提升：

*   **内存与配置增强：**
    *   PR #6615: 增强 `load_agent_config` 对损坏配置文件和非法 JSON 的处理能力，防止启动崩溃。
    *   PR #6772: (Open, 高关注度) 增强 ReMe 配置，引入 Embedding 服务真实验证、Daily Paper 定时简报及 Cron 声明机制。
*   **Provider 兼容性修复：**
    *   PR #6809: 修复发给严格 OpenAI-compatible Provider（如 StepFun）的 Chat Completions 请求，去除了不被支持的内场字段。
    *   PR #6617: (Under Review) 修复流式重试路径中对 `Retry-After` 头部的遵守逻辑。
*   **平台与基础设施：**
    *   PR #6799: 修复 Windows 下 `execute_shell_command` 导致临时文件泄漏的问题（已观察到 26GB  orphan 文件案例）。
    *   PR #6788: 修复 Multica 模式下 ACL 存储路径错误导致的新任务用户被屏蔽问题。
    *   PR #6688: 隔离插件命名空间，解决 `qwenpaw-creator` 安装时的模块导入错误。

## 4. 社区热点
**最活跃 Issue (按评论数排序):**

1.  **#6116 [CLOSED] Agent Doom Loop (重复工具调用)** - 8 条评论
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/6116
    *   *分析:* 用户在单轮对话中发现 Agent 陷入死循环调用同一工具，虽系统有检测机制，但已造成大量 Token 浪费。这是一个影响成本和安全性的核心 Bug，现已关闭，预计已被后续的稳定性的修复覆盖。
2.  **#6782 [OPEN] Docker 版插件/应用市场提示维护中** - 8 条评论
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/6782
    *   *分析:* 2.0.1 Docker 版本用户反馈市场功能不可用，表明后端服务配置或网络连通性存在部署层面的问题。
3.  **#6732 [OPEN] MCP 工具规律性失效** - 6 条评论
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/6732
    *   *分析:* 长时间运行后 MCP 工具无响应，需重启容器。指向生命周期管理或连接保活机制的潜在缺陷。
4.  **#6490 [OPEN] 新增火山引擎和小米 MiMo Provider** - 4 条评论
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/6490
    *   *分析:* 用户贡献新增国内云厂商 API 支持，显示社区对本地化模型接入的强烈需求。
5.  **#6786 [OPEN] Telegram Multica ACL 重置** - 4 条评论
    *   *链接:* https://github.com/agentscope-ai/QwenPaw/issues/6786
    *   *分析:* 多租户场景下权限配置丢失，影响企业级部署的安全性。

## 5. Bug 与稳定性
**高风险 (High Severity):**

*   **#6813 [OPEN] Chat 自动标题生成崩溃**
    *   *描述:* `consume_model_response` 在 Agentscope 2.x ChatResponse 上抛出 `KeyError: '__aiter__'`。
    *   *状态:* 新报告，暂无 Fix PR。
    *   *影响:* 阻断对话历史自动整理功能。
*   **#6780 [OPEN] 闲置进程卡死**
    *   *描述:* 2.0.1 版本非活跃几十分钟后进程无响应，需强制重启。
    *   *状态:* 待排查。
    *   *影响:* 影响长时间运行的 Agent 服务稳定性。
*   **#6812 [OPEN] Google Gemini Provider 执行失败**
    *   *描述:* 发送了包含 `$schema` 字段的 Tool Schemas，被 Gemini API 拒绝。
    *   *状态:* 新报告。
    *   *修复:* 类似逻辑已在 PR #6809 中针对 StepFun 修复，需确认是否涵盖 Gemini。

**中风险 (Medium Severity):**

*   **#6794 [OPEN] Agent Kanban 405 错误**
    *   *描述:* v2.1.0b2 中创建 Issue 返回 Method Not Allowed，热重载期间 404。
    *   *状态:* 新报告。
*   **#6565 [CLOSED] Shell 多行命令折叠 bug**
    *   *描述:* `_collapse_newlines_outside_quotes` 破坏多行命令语法。
    *   *状态:* 已关闭 (可能已合并修复或标记 wontfix，需确认)。
*   **#6773 [CLOSED] Linux 下 Doom-loop 防护失效**
    *   *描述:* `in_loop_modes` 在 Linux 下无作用。
    *   *状态:* 已关闭。

**Windows 桌面特有:**
*   **#6810:** 安装程序无法覆盖被浏览器扩展 (NM host) 锁定的文件。
*   **#6785:** 自定义 Persona `.md` 文件在 Files 页面无法 toggle (回归)。

## 6. 功能请求与路线图信号
*   **#6490: 接入火山引擎和小米 MiMo** - 用户主动提供 PR/建议，符合项目扩展 Provider 生态的方向。
*   **#6285: 添加 qwen3.8-max-preview 模型支持** - 跟随阿里云模型迭代更新内置列表。
*   **#6800: 智能邮件管理插件 (Mailbox)** - 用户贡献新插件，扩展 Agent 能力边界。
*   **#6770: Chrome Tab 生命周期可配置** - 针对浏览器自动化场景的精细化控制需求。
*   **#6715: OneBot 远程媒体支持** - 增强国内社交平台 (QQ) 的多模态交互能力。

**预测:** 上述功能请求中，**Provider 扩展 (#6490)** 和 **插件生态 (#6800)** 有望在 v2.1.0 正式版或后续迭代中被优先纳入，因为已有明确的用户贡献和 PR 雏形。

## 7. 用户反馈摘要
*   **痛点:**
    *   **Windows 体验差:** 用户抱怨安装包文件锁定 (#6810)、文本无法选中 (#6797, #6801)、桌面模式点击交互异常 (#6790)。
    *   **稳定性担忧:** Docker 部署后 MCP 工具间歇性失效 (#6732)，长期运行卡死 (#6780)，以及被误报为恶意软件 (#6775 - Malware Bytes 误报)。
    *   **配置管理:** 自定义 Persona 文件无法在 UI 中便捷管理 (#6785)，GitHub 账号解绑流程缺失 (#6789)。
*   **满意点:**
    *   v2.1.0-beta.2 的快速迭代显示了团队对反馈的响应速度。
    *   社区贡献活跃，多名 First-time contributor (如 @lllyfff, @axelray-dev) 参与修复关键 Bug。

## 8. 待处理积压
*   **#6780:** 闲置卡死问题尚无明确根因分析，需维护者关注长时间运行测试。
*   **#6813:** `KeyError: '__aiter__'` 是新版本升级后的兼容性问题，优先级应较高。
*   **#6794:** Agent Kanban 功能在 Beta 版本中完全不可用，需紧急修复以保障看板功能交付。
*   **#6775:** 安全软件误报可能影响用户信任，需官方发布签名或白名单说明。

---
*报告生成时间: 2026-08-08*
*分析师: Agnes (Sapiens AI)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-08-08)

## 1. 今日速览
今日 ZeroClaw 项目活跃度极高，过去24小时共产生50条 Issue 和50条 PR 更新，其中47条 PR 仍处于待合并状态，显示开发迭代速度极快。主要进展集中在 **SOP (Standard Operating Procedure) 运行时修复**、**安全策略加固** 以及 **Telegram 频道功能完善**。尽管无新版本发布，但多项 P1 级关键 Bug（如 SOP 任务卡死、API 密钥泄露）已被识别并进入修复流程，项目整体处于高强度的稳定性攻坚阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的重要 PR 及进展：

*   **SOP 运行时核心修复 (PR #9841)**: JordanTheJet 提交的 PR 继续推进 #9494 的工作，修复了 headless SOP 运行驱动的五个缺陷。这解决了 cron 触发的 SOP 任务在自动模式下永远处于 "running" 状态且无法执行的问题，是提升自动化可靠性的关键一步。
*   **Cron 交付契约定义 (PR #9842)**: 明确了 cron agent 回合对自主回合的交付契约，解决了模型可见性中的披露缺口，使自动化任务的行为更加可预测。
*   **本地 Whisper 鉴权优化 (PR #9836)**: 使 `local_whisper` 的 `bearer_token` 变为可选配置，适配了默认无鉴权的 whisper.cpp 本地服务场景，降低了本地语音转文字的配置门槛。
*   **技能加载性能优化 (PR #9837)**: 通过仅对技能加载决策可观察的字节进行摘要，优化了 `load_activation_candidates` 的性能，有助于减少消息路径上的延迟。

## 4. 社区热点
评论数较多、讨论活跃的重点 Issues/PRs：

*   **OTel 跨轮次会话关联 (Issue #8933)**: 13 条评论。提议将 OpenTelemetry 的跨轮次会话关联加入，导出 `gen_ai.conversation.id`。反映了社区对**可观测性标准化**的强烈需求，希望提升调试和追踪效率。
*   **Todo tracker 配置保留 RFC (Issue #9246)**: 12 条评论。讨论在 ZeroCode 所有权迁移中保留 Todo tracker 配置。涉及**内部架构重构**中的向后兼容性，维护者正在积极协调不同 RFC 的整合。
*   **统一 Provider 架构重构 (Issue #5937)**: 12 条评论。长期关注的重构需求，旨在解决 `reqwest` 客户端管理和模型构建参数的不一致问题，减少代码重复。
*   **Workspace 相对禁止路径 RFC (Issue #8424)**: 10 条评论。用户强烈要求保护工作区内部敏感文件（如 `.env`, `rust-toolchain.toml`），当前 `forbidden_paths` 机制仅阻止工作区外路径，存在**安全盲区**。
*   **弃用 aardvark-sys 独立 crate (Issue #8043)**: 9 条评论。推进架构简化，将 `aardvark-sys` 折叠进 `zeroclaw-hardware`，伴随 `forbid(unsafe_code)` 的工作区级实施（Issue #7130）。

## 5. Bug 与稳定性
今日报告的高优先级 Bug（按严重程度排列）：

| ID | 标题 | 严重程度 | 状态 | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| #9386 | Gemini API Key 泄露至聊天上下文 | **P1 / 安全泄漏** | Closed | - (已修复) |
| #9786 | SOP: 格式错误的 SOP.toml 被静默丢弃 | **P1** | Open | - |
| #9816 | Anthropic Provider 成本报告为 $0.00 | **P1** | Open | - |
| #9815 | `forbidden_paths` 对 allowed_roots 下的路径无效 | **P1 / 安全** | Open | - |
| #9805 | SOP: 自动模式下 channel/cron 触发的任务永远卡在 'running' | **P1** | Open | #9841 (部分解决) |
| #9840 | Daemon 启动时窃取并删除 daemon.sock，导致活体 Daemon  stranded | **S1 / 工作流阻塞** | Open | - |
| #9770 | `cron update` 静默丢弃声明式作业变更 | **P1** | Open | - |
| #9775 | OpenRouter 流式请求丢失 provider_extra | **S1 / 工作流阻塞** | Open | - |
| #9825 | Leak detector 误删公共区块链地址，导致支付 URL 无法投递 | **Bug** | Open | - |

**分析**: 今日安全问题突出，包括 API 密钥泄露 (#9386, 已关) 和路径权限绕过 (#9815)。SOP 子系统的多个 P1 Bug (#9786, #9805, #9770) 表明该模块处于快速迭代期的不稳定状态，需重点关注。

## 6. 功能请求与路线图信号
*   **统一 Package/Capability Catalog (Issue #9346)**: 提议定义产品级统一目录契约，整合集成、内置和插件。这表明项目正在向**更统一的扩展生态系统**演进。
*   **加载 Agent Plugins 1.0 标准 (Issue #9810)**: 支持 vendor-neutral 的 Agent Plugins 1.0.0 标准，允许加载 `plugin.json` + `skills/` + `mcp.json`。这是对**社区插件标准化**的重大接纳，有望丰富技能生态。
*   **简化默认 Web 工具表面 (Issue #9824)**: 提议将五个重叠工具简化为三个核心动词 (`web_fetch`, `web_research`, `http_request`)，并将 `web_search_tool` 移至子智能体。这反映了**降低配置复杂度、提升工具调用效率**的设计倾向。
*   **Herdr 集成 (PR #8337)**: 新增 Herdr agent 状态报告集成，显示 idle/working/blocked 等生命周期状态，旨在提升**IDE/编辑器内的可观测性体验**。

## 7. 用户反馈摘要
*   **可观测性需求强烈**: 用户多次提及 OTel 集成 (#8933, #7232) 和成本追踪 (#9816) 的问题，希望获得更细粒度、更准确的运行时洞察。
*   **安全性焦虑**: 对敏感信息泄露 (API Key #9386, 区块链地址 #9825) 和权限绕过 (forbidden_paths #9815, #8424) 的反馈显示出用户对 Agent 运行在本地/生产环境时的**数据主权和安全边界**高度关注。
*   **稳定性痛点**: SOP 任务的不可靠执行 (永远 running #9805, 静默丢弃配置 #9786) 以及 OpenRouter 请求头丢失 (#9775) 严重影响了依赖自动化流程的用户体验。
*   **配置便利性**: 用户希望简化默认工具集 (#9824) 和本地 Whisper 鉴权配置 (#9836)，反映了**降低上手难度**的普遍诉求。

## 8. 待处理积压
*   **Issue #5937**: [Feature] refactor: Unify providers architecture and reqwest client management (Open, 12 comments, since 2026-04-20). 长期存在的架构重构需求，评论活跃但尚未有合并的 PR，建议维护者评估其优先级。
*   **Issue #8424**: [RFC] Workspace-relative forbidden path patterns (Open, 10 comments, since 2026-06-28). 安全增强 RFC，已讨论数月，需推进 decision 或 implementation。
*   **Issue #8043**: [RFC] Retire standalone aardvark-sys crate (Open, 9 comments, since 2026-06-20). 伴随 #7130 的 unsafe 代码禁令，需尽快决定合并路径。
*   **PR #8965**: [Feature] declarative auto-activation with provider switch (Open, stacked on #9563). 功能完整但依赖其他 PR 合并，可适时 rebase 以推进。
*   **Issue #9656**: [Bug] Telegram typing indicator keeps running during approval wait (Open, 2 comments, since 2026-08-02). 中等严重程度的 UX Bug，已有明确复现路径，易于修复。

---
*报告生成时间: 2026-08-08*
*数据来源: ZeroClaw GitHub Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*