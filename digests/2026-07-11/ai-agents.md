# OpenClaw 生态日报 2026-07-11

> Issues: 428 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-11 01:43 UTC

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
**日期：** 2026-07-11
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
OpenClaw 在 2026-07-11 保持极高的社区活跃度，过去24小时内共产生 **428 条 Issue 更新**和 **500 条 PR 更新**。尽管没有新版本的正式 Release，但代码库正处于密集的修复与功能迭代期。核心焦点集中在**会话状态稳定性**（内存泄漏、会话丢失）、**网关安全性**（沙箱、权限控制）以及**多渠道集成体验**（WhatsApp, Slack, Discord）的优化上。社区贡献者通过大量自动化 PR 和手动修复，显著提升了系统的健壮性，尤其是针对长会话和复杂工作流的边缘情况进行了重点修补。

## 2. 版本发布
*   **无新版本发布。**
*   当前处于 `v2026.5.x` 系列的持续集成与维护阶段，多个关键修复已合并至主分支，等待下一次常规版本迭代。

## 3. 项目进展
今日主要推进了以下关键功能的修复与增强：

*   **会话生命周期管理优化：**
    *   **[PR #104039](https://github.com/openclaw/openclaw/pull/104039)** 修复了 `session.pruneAfter` 配置被忽略的严重 Bug，解决了会话无限增长的问题，直接回应了 [#103956](https://github.com/openclaw/openclaw/issues/103956)。
    *   **[PR #96230](https://github.com/openclaw/openclaw/pull/96230)** 修复了网关重启后会话恢复死循环的问题，提升了系统可用性。
    *   **[PR #103263](https://github.com/openclaw/openclaw/pull/103263)** 引入了工作树租赁机制，防止 GC 在代理运行时意外清理文件，增强了多代理并发下的稳定性。

*   **安全与权限加固：**
    *   **[PR #103968](https://github.com/openclaw/openclaw/pull/103968)** 修复了 macOS 应用转发执行批准的撤销逻辑，防止已撤销的规则被后续操作意外恢复。
    *   **[PR #104038](https://github.com/openclaw/openclaw/pull/104038)** 限制了外部内容模式扫描的窗口大小，防止超线性匹配导致的性能瓶颈或潜在注入风险。
    *   **[PR #103534](https://github.com/openclaw/openclaw/pull/103534)** 强制实施插件所有权检查，阻止跨插件非法修改会话状态。

*   **多渠道与用户体验改进：**
    *   **[PR #103445](https://github.com/openclaw/openclaw/pull/103445)** 修复了 Slack 插件中 `includes` 匹配导致的误判问题，确保批量动作按钮识别准确。
    *   **[PR #103719](https://github.com/openclaw/openclaw/pull/103719)** 解决了 Google Meet 插件在非英文界面下无法自动加入会议的问题。
    *   **[PR #104047](https://github.com/openclaw/openclaw/pull/104047)** 修复了 Web UI 中 UTF-16 字符截断导致的预览乱码问题。

## 4. 社区热点
以下是过去24小时内讨论最激烈、关注度最高的 Issue：

*   **[Issue #99241](https://github.com/openclaw/openclaw/issues/99241) - Tool outputs sometimes render as image attachments**
    *   **热度：** 20 条评论，2 👍
    *   **核心痛点：** 在长运行或 ANSI 密集的工作流中，工具输出被错误地渲染为图片附件，导致代理无法读取原始文本证据。这是影响 Agent 核心能力的严重功能性缺陷。
*   **[Issue #102175](https://github.com/openclaw/openclaw/issues/102175) - embedded prompt cache breaks across boundaries**
    *   **热度：** 16 条评论，1 👍
    *   **核心痛点：** 长期运行的嵌入式会话在跨越房间事件、策略变化或压缩重建时，提示词缓存连续性中断。这直接影响长上下文场景下的性能和一致性。
*   **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659) - Masked Secrets: Prevent Agent from Accessing Raw API Keys**
    *   **热度：** 15 条评论，4 👍
    *   **核心诉求：** 用户强烈要求实现“掩码密钥”功能，允许代理使用 API Key 但不直接暴露明文，以防止提示注入攻击导致的凭证泄露。这是一个高优先级的安全增强需求。
*   **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) - Critical: Gateway Memory Leak**
    *   **热度：** 15 条评论，1 👍
    *   **核心痛点：** 网关进程 RSS 从 350MB 增长至 15.5GB，导致频繁的 OOM 崩溃和重启循环。这是影响生产环境稳定性的最高级别 Bug。

## 5. Bug 与稳定性
今日报告及关注的 Bug 按严重程度排列：

1.  **P0 - 网关内存泄漏 ([#91588](https://github.com/openclaw/openclaw/issues/91588))：** 网关长时间运行后内存溢出，导致服务不可用。目前尚无明确 Fix PR，需紧急关注。
2.  **P0 - Hosted Molty 模型 ID 格式错误 ([#101763](https://github.com/openclaw/openclaw/issues/101763))：** Anthropic API 接收到的模型 ID 带有非法点号（如 `claude-opus-4.8`），导致所有代理回复失败。属于发布阻断性问题。
3.  **P1 - WhatsApp 会话停滞 ([#84569](https://github.com/openclaw/openclaw/issues/84569))：** 长模型调用期间，WhatsApp 会话进入 `stalled_agent_run` 状态，消息无法送达。
4.  **P1 - Gateway Heap 增长 ([#87109](https://github.com/openclaw/openclaw/issues/87109))：** macOS 环境下空闲状态下 Heap 增长超过 1GB，导致 Cron 任务静默失败。
5.  **P1 - Discord WebSocket 重连失败 ([#99681](https://github.com/openclaw/openclaw/issues/99681))：** Discord 插件在收到 1006 异常关闭码后无法自动重连，需完全重启网关。
6.  **P1 - 并发批准竞态条件 ([#44749](https://github.com/openclaw/openclaw/issues/44749))：** 并发执行批准可能导致白名单条目丢失（Last-Write-Wins）。此 Issue 已关闭，可能有对应修复。

## 6. 功能请求与路线图信号
用户提出的新功能需求及潜在纳入下一版本的可能性：

*   **Slack Block Kit 支持 ([#12602](https://github.com/openclaw/openclaw/issues/12602))：** 请求支持富文本交互消息。**状态：** 已有 [PR #103583](https://github.com/openclaw/openclaw/pull/103583) 推进，预计将在近期版本中实现表格和控件的可移植展示。
*   **Per-agent Memory-Wiki Vault ([#63829](https://github.com/openclaw/openclaw/issues/63829))：** 多代理设置下的隔离知识库配置。**状态：** 已关闭 (Closed)，可能已被合并或决定不采用，需确认最终方案。
*   **Masked Secrets ([#10659](https://github.com/openclaw/openclaw/issues/10659))：** 密钥掩码机制。**状态：** 开放，高优先级，符合安全趋势，极有可能被纳入后续安全更新。
*   **Webhook 多轮对话支持 ([#11665](https://github.com/openclaw/openclaw/issues/11665))：** 修复 Hook 会话 Key 不一致导致无法维持多轮对话的问题。**状态：** 开放，P2 优先级，对于 API 集成用户至关重要。
*   **Batch API Support ([#9865](https://github.com/openclaw/openclaw/issues/9865))：** 支持后台任务的批量 API 以降低成本。**状态：** 开放，P2，符合成本优化需求，但可能排期较后。

## 7. 用户反馈摘要
*   **稳定性焦虑：** 用户对网关内存泄漏 ([#91588]) 和会话状态丢失 ([#102175], [#99241]) 表现出极大的担忧，特别是在生产环境和长运行场景中。这些 Bug 直接影响了 Agent 的可靠性和可信度。
*   **安全需求迫切：** 用户不仅关注传统的权限控制，还特别提出了防止代理自身泄露 API Key 的需求 ([#10659])，这表明高级用户正在深入探索代理的安全边界。
*   **UX 细节打磨：** 用户对 TUI 中的 Unicode 符号可读性 ([#9637])、WhatsApp 贴纸支持 ([#7476]) 以及 URL 自动链接 ([#8812]) 等细节功能有明确期待，反映了用户希望 OpenClaw 能提供更自然、更无缝的交互体验。
*   **集成痛点：** Discord 重连失败 ([#99681]) 和 WhatsApp 消息丢失 ([#84569]) 是渠道集成的主要痛点，用户期望官方插件能提供更稳定的连接管理和错误恢复机制。

## 8. 待处理积压
以下 Issue 和 PR 需要维护者重点关注：

*   **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) - Critical: Gateway Memory Leak**
    *   **状态：** Open, P0
    *   **行动建议：** 需立即分配资源进行根因分析和修复，这是影响服务可用性的最高优先级问题。
*   **[Issue #101763](https://github.com/openclaw/openclaw/issues/101763) - Hosted Molty model selector bug**
    *   **状态：** Open, P0
    *   **行动建议：** 修复 Anthropic 模型 ID 格式化错误，避免影响托管实例用户。
*   **[PR #103687](https://github.com/openclaw/openclaw/pull/103687) - Reconcile contribution provenance**
    *   **状态：** Open, Draft/HOLD
    *   **行动建议：** 等待不可变历史验证通过后合并，涉及发布流程合规性。
*   **[Issue #70903](https://github.com/openclaw/openclaw/issues/70903) - Persistent file-based provider cooldown**
    *   **状态：** Open, P2
    *   **行动建议：** 修复计费恢复后用户仍被长时间封禁的逻辑错误，改善用户体验。
*   **[Issue #103956](https://github.com/openclaw/openclaw/issues/103956) - Session pruneAfter ignored**
    *   **状态：** Open, P2
    *   **行动建议：** 虽然 [PR #104039](https://github.com/openclaw/openclaw/pull/104039) 已提交修复，需确认合并及测试情况。

---

## 横向生态对比

# 2026-07-11 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
2026年7月中旬，个人AI助手与自主智能体开源生态呈现出**“底层重构完成，上层体验与安全博弈”**的特征。随着 AgentScope 2.0 等底层框架的普及，项目重心从单纯的模型调用转向**会话稳定性、多代理协作（A2A）及企业级安全隔离**。尽管代码活跃度极高，但“长会话内存泄漏”、“上下文压缩失败”及“权限越权”成为跨项目的共性痛点，表明行业正从功能堆砌期进入质量攻坚期。

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issue 数 | 今日 PR 数 | Release 情况 | 健康度评估 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | ~428 (更新) | ~500 (更新) | 无 (v2026.5.x 维护) | ⚠️ **高风险**：P0级内存泄漏未修复，社区焦虑度高 |
| **NanoBot** | 8 | 42 | 无 | ✅ **良好**：修复高效，安全漏洞响应迅速 |
| **Hermes Agent** | 50 | 50 | 无 | ⚠️ **中等**：功能迭代快，但稳定性Bug频发 |
| **PicoClaw** | 3 | 18 | 无 | ✅ **良好**：聚焦安全加固与底层优化 |
| **NanoClaw** | 3 | 25 | 无 | ✅ **良好**：架构规范化，记忆系统统一 |
| **NullClaw** | 2 | 0 | 无 | ⚠️ **停滞**：无代码提交，但发现严重安全漏洞 |
| **IronClaw** | 36 | 50 | 无 | ✅ **良好**：核心逻辑重构，Slack集成Bug较多 |
| **LobsterAI** | ~10+ | 10+ | **2026.7.10** | ✅ **良好**：刚发布新版，修复关键协作Bug |
| **TinyClaw** | 0 | 0 | 无 | ❌ **无活动** |
| **Moltis** | 0 | 1 | 无 | ✅ **稳定**：低活跃，仅模型兼容性更新 |
| **CoPaw** | 44 | 49 | **2.0.0 (GA)** | ⚠️ **阵痛期**：v2.0发布后Bug爆发，桌面端严重不稳定 |
| **ZeptoClaw** | 0 | 0 | 无 | ❌ **无活动** |
| **ZeroClaw** | 19 | 50 | 无 | ✅ **良好**：Rust底层稳定，可观测性增强 |

## 3. OpenClaw 在生态中的定位
*   **规模与声量**：OpenClaw 是绝对的流量中心，其 Issue/PR 数量（数百级）远超其他项目，表明其拥有最庞大的用户基数和最复杂的部署场景。
*   **技术路线**：倾向于**全渠道集成与高自由度配置**，但也因此背负了最沉重的技术债务（如网关稳定性、多渠道适配）。
*   **对比优势**：相比 NanoBot 的轻量化和 CoPaw 的框架依赖，OpenClaw 提供了最完整的“开箱即用”多平台体验。
*   **社区风险**：高活跃度伴随高噪音，P0 级内存泄漏长期未修，导致核心用户信任度下降，存在用户流失至更稳定竞品（如 LobsterAI 或 IronClaw）的风险。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与现状 |
| :--- | :--- | :--- |
| **长会话稳定性与内存管理** | **OpenClaw**, **Hermes**, **CoPaw**, **ZeroClaw** | **痛点**：网关内存泄漏、上下文压缩崩溃、僵尸进程。<br>**诉求**：更健壮的 GC 机制、会话状态持久化、内存泄漏检测。 |
| **安全与权限隔离** | **OpenClaw**, **NanoBot**, **NullClaw**, **CoPaw** | **痛点**：API Key 泄露、跨用户上下文复用、MCP 权限绕过。<br>**诉求**：掩码密钥、细粒度 RBAC、沙箱隔离、Token 绑定会话。 |
| **多代理协作 (A2A)** | **NanoBot**, **Hermes**, **LobsterAI**, **CoPaw** | **痛点**：子代理模型切换、结果聚合、任务委派。<br>**诉求**：支持子代理独立模型配置、异步/同步协作模式、结果缓冲。 |
| **多渠道集成稳定性** | **OpenClaw**, **IronClaw**, **LobsterAI**, **ZeroClaw** | **痛点**：Slack DM 错误、WhatsApp 会话停滞、Telegram 断连。<br>**诉求**：自动重连机制、状态同步、错误恢复策略。 |

## 5. 差异化定位分析

*   **OpenClaw vs. NanoBot**：
    *   **OpenClaw** 是“重型航母”，追求全平台覆盖和极致功能，适合大规模生产部署，但维护成本高。
    *   **NanoBot** 是“轻型快艇”，聚焦于核心代理逻辑的精简、子代理模型控制和 WebUI 体验，适合对个人隐私和定制化有要求的开发者。
*   **CoPaw vs. Hermes Agent**：
    *   **CoPaw** 强依赖 **AgentScope 2.0** 框架，主打企业级多智能体编排和记忆系统，但 v2.0 迁移带来了显著的兼容性阵痛。
    *   **Hermes** 更偏向于**上下文工程**和**安全审计**，适合对长文本处理和敏感数据保护有高要求的场景。
*   **LobsterAI**：
    *   差异化在于**开箱即用的协作体验**（Cowork）和**国内 IM 深度集成**（企微/钉钉），且在近期版本中快速修复了多 Agent 配置冲突，显示出对中文社区需求的敏锐响应。
*   **ZeroClaw**：
    *   唯一采用 **Rust** 构建核心网关的项目，强调内存安全和高性能，适合对资源占用和启动速度有极致要求的边缘计算或嵌入式场景。

## 6. 社区热度与成熟度

*   **快速迭代/质量攻坚期**：
    *   **OpenClaw**：活跃度最高，但处于“救火”状态，急需解决稳定性问题以维持口碑。
    *   **CoPaw**：刚经历重大版本发布，正处于 Bug 爆发后的修复期，社区反馈密集。
    *   **IronClaw**：核心组件重构中，Slack 集成等模块处于高频调试期。
*   **稳定维护/功能增强期**：
    *   **NanoBot**：代码库相对干净，修复效率高，处于良性发展轨道。
    *   **PicoClaw / NanoClaw**：聚焦底层规范化和安全加固，变化温和但扎实。
    *   **ZeroClaw**：架构稳定，新功能（如可观测性）稳步融入。
*   **低频/观察期**：
    *   **Moltis**：仅关注模型兼容性，用户群体较小。
    *   **NullClaw**：代码静止，但安全问题凸显，可能面临重构或停滞。

## 7. 值得关注的趋势信号

1.  **“上下文压缩”成为稳定性分水岭**：多个项目（OpenClaw, Hermes, CoPaw, ZeroClaw）均报告了上下文压缩或记忆归档导致的崩溃或数据丢失。这表明**高效的、无损的长上下文管理**是下一代智能体的核心竞争壁垒。
2.  **安全从“外挂”转向“内生”**：用户不再满足于简单的权限控制，而是要求**掩码密钥**（OpenClaw）、**会话级 Token 绑定**（NullClaw, CoPaw）和**MCP 细粒度隔离**。安全能力将成为企业选型的关键指标。
3.  **多代理协作的标准化萌芽**：NanoBot、Hermes 和 LobsterAI 均在推进子代理模型切换和任务委派功能。未来可能会出现统一的 **A2A 通信协议**，以解决当前各平台间协作碎片化的问题。
4.  **桌面端与 Web 端的体验鸿沟**：CoPaw 的桌面端沙箱崩溃和 OpenClaw 的 Web UI 乱码问题表明，**客户端稳定性**往往滞后于后端逻辑。开发者需重视 Electron/Tauri 等桌面框架的内存管理和错误捕获机制。
5.  **Rust 在网关层的渗透**：ZeroClaw 的成功实践可能促使更多项目考虑使用 Rust 重构核心网关，以提升并发处理能力和内存安全性，尤其是在边缘计算场景。

**建议**：对于技术决策者，若追求稳定性和企业级安全，可重点关注 **NanoBot**（轻量高质）或等待 **CoPaw** v2.0 稳定补丁；若需要全渠道覆盖且具备较强运维能力，**OpenClaw** 仍是首选，但需自行解决内存泄漏问题；若关注前沿架构和性能，**ZeroClaw** 的 Rust 实现值得深入研究。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-11
**数据来源：** GitHub (HKUDS/nanobot)

## 1. 今日速览
NanoBot 在过去24小时内保持极高的开发活跃度，共处理 **42 条 PR** 和 **8 条 Issues**。项目正处于功能迭代与稳定性加固并重的阶段，特别是针对子代理（Subagent）模型控制、长期任务授权安全以及内存归档逻辑进行了大量重构。虽然无新版本发布，但近半数 PR 已合并或关闭，显示出核心贡献者团队的高效协作能力。安全方面，针对 `/restart` 命令的权限漏洞报告引发了对长期任务（Long Task）授权机制的全面审查。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 显著增强了系统的可控性与用户体验：

*   **子代理模型覆盖支持 (Feature):** `#4623` 和 `#4622` 已合并，正式允许在 `spawn` 工具和 Cron 任务中指定特定的模型预设。这解决了多模型场景下的灵活性痛点，用户现在可以为子代理或定时任务配置独立的模型上下文，而无需修改主代理配置。
*   **Dream 模块优化 (Fix):** `#4873` 合并，修复了 Dream 逻辑在无实际变更时仍创建空 Git 提交的问题，通过引入持久化记忆文件的变更检测，提升了仓库整洁度与审计效率。
*   **WebUI 交互增强 (UX):** `#4876` 和 `#4877` 已合并。前者引入了“二次回车”引导机制以防止队列消息误发，后者实现了文件预览和 Diff 的高亮显示（基于 Prism.js），大幅改善了代码审查体验。
*   **执行环境隔离 (Refactor):** `#4862` 合并，将 `ExecSessionManager` 隔离到每个 AgentLoop 中，防止不同会话间的执行状态污染，提升了多会话并发时的稳定性。

**整体推进评估：** 项目从“基础功能可用”向“精细化控制与安全加固”迈进了一步，特别是在子代理生态和 WebUI 细节上取得了实质性突破。

## 4. 社区热点
以下 Issues/PRs 因涉及核心架构或安全漏洞，引发了较高关注：

*   **[Security] /restart 命令零授权风险 (#4776)**
    *   **链接:** [Issue #4776](https://github.com/HKUDS/nanobot/issues/4776)
    *   **分析:** 用户 `hamb1y` 指出 `/restart` 命令在获取会话锁之前缺乏授权检查，任何经过配对的用户均可发起拒绝服务攻击。这是一个严重的安全隐患，直接推动了后续 `#4844` 对长期任务授权的重构。
*   **[Enhancement] 支持每对话覆盖模型 (#4253)**
    *   **链接:** [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)
    *   **分析:** 用户希望在 OpenRouter（快速/公共）和 Local Llama.cpp（慢速/隐私）之间灵活切换。虽然 `#4623` 解决了子代理层面的模型覆盖，但全局或单会话级别的动态切换仍是高频需求，该 Issue 评论数为 6，热度较高。
*   **[Performance] Ollama 缓存失效导致延迟增加 (#4867)**
    *   **链接:** [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)
    *   **分析:** 用户反映 Nanobot 添加的前缀破坏了 Ollama 的 KV Cache，导致本地模型推理速度下降 60 秒/轮。这是本地部署用户的核心痛点，需关注后续是否有针对 Prompt 前缀优化的 PR。

## 5. Bug 与稳定性
*   **[Critical] WebUI 消息路由错误 (#4835)**
    *   **状态:** Closed (via `#4835` context implies discussion, likely fixed or addressed in UX updates)
    *   **描述:** 在新建聊天时，若用户快速切换到现有聊天，首条排队消息可能错误发送到旧聊天。
    *   **关联修复:** 虽无直接标记为 Fix 的 PR 链接在摘要中，但 `#4876` 的“二次回车引导”机制可能在一定程度上缓解了此类竞态条件导致的误操作。
*   **[High] MCP 重连网关崩溃 (#4843)**
    *   **状态:** Open (PR #4843)
    *   **描述:** 当 MCP 服务器超时未终止时，`asyncio.CancelledError` 未被捕获，导致网关崩溃。
    *   **关联修复:** PR `#4843` 正在尝试通过推迟陈旧栈清理来解决此问题。
*   **[Medium] CLI Shift+Enter 回归问题 (#4832)**
    *   **状态:** Closed (via `#4832`)
    *   **描述:** 修复了终端中 `Shift+Enter` 输入原始转义序列而非换行的回归问题，恢复了多行输入的预期行为。

## 6. 功能请求与路线图信号
*   **子代理聚合结果模式 (#4624, Open):** `yu-xin-c` 提出了 `aggregated` 结果模式，旨在缓冲子代理结果并在任务集排空后发布合并消息。这暗示路线图将支持更复杂的 Agent-to-Agent (A2A) 协作模式，减少主线程的消息噪音。
*   **长期任务授权与安全 (#4879, Open):** `franciscomaestre` 提出将 `sustained-goal` 功能置于可选标志背后（默认关闭）。结合 `#4844` 的修复，这表明“长期自主任务”将从默认开启的功能转变为需要显式启用的高级特性，以平衡安全性与自动化能力。
*   **Hook 自动发现 (#4878, Open):** 引入基于 `pkgutil` 的 Hook 自动注册机制，降低了插件开发的门槛，预示着项目将进一步开放其扩展生态系统。

## 7. 用户反馈摘要
*   **痛点:** 本地模型（如 Ollama）用户对**推理延迟**极度敏感，认为当前的 Prompt 前缀处理严重损害了本地部署的性能体验 (`#4867`)。
*   **需求:** 用户强烈希望获得**细粒度的模型控制权**，不仅限于主代理，还延伸至子代理和 Cron 任务，以便在不同隐私/速度需求间无缝切换 (`#4253`, `#4231`, `#4378`)。
*   **满意度:** 用户对 WebUI 的**可视化改进**（Diff 高亮、引导提示）表示认可，认为这些细微的 UX 提升显著降低了误操作概率。
*   **担忧:** 安全团队对用户报告的系统级 DoS 风险（`/restart`）感到警惕，反映出社区对生产环境稳定性的重视程度提高。

## 8. 待处理积压
*   **[Open] Fix asyncio CancelledError in close_mcp shutdown (#4842)**
    *   **链接:** [PR #4842](https://github.com/HKUDS/nanobot/pull/4842)
    *   **说明:** 尽管 `#4843` 提供了另一种视角的修复，但 `#4842` 直接针对 `CancelledError` 的捕获，建议维护者优先合并此修复以确保 MCP 客户端的健壮性，避免潜在的异常堆栈泄漏。
*   **[Open] Support overriding model per conversation (#4253)**
    *   **链接:** [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)
    *   **说明:** 该 Issue 创建于 6 月，至今仍有活跃讨论但未完全解决。鉴于子代理模型覆盖已合并，建议考虑将此功能扩展至会话级别，以满足高频切换需求。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-11
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 在 2026-07-11 保持了极高的开发活跃度，过去24小时内产生了 **100 条** 新的 Issue 和 PR 更新（50 新 Issue + 50 新 PR）。虽然今日没有发布新版本，但社区贡献者密集提交了针对核心稳定性、安全性和用户体验的修复补丁。主要焦点集中在解决桌面端崩溃、后台进程泄漏、MCP 工具链异常以及上下文压缩机制的性能优化上。项目整体处于高强度的迭代修复期，旨在为即将到来的潜在版本发布清理技术债务。

## 2. 版本发布
**无新版本发布。**
当前最新版本状态维持不变，但多个关键修复 PR 已进入待合并状态，可能在下一次发布中集成。

## 3. 项目进展
今日合并/关闭或处于活跃审查阶段的重要 PR 显著提升了系统的稳健性：

*   **上下文压缩优化 (#62389)**：实现了“先修剪”（Prune-first）阶段，允许在 LLM 介入前基于绝对令牌预算剔除旧的工具输出。这直接回应了 Issue #513，有望大幅降低长会话中的 token 消耗并提升响应速度。
*   **委托任务配置增强 (#62392)**：引入了 `delegation.foreground_by_default` 配置项，允许父代理等待子代理结果，增强了多代理协作模式的灵活性。
*   **安全漏洞修复 (#62346, #61352)**：
    *   修复了终端环境快照泄露敏感凭证的问题（Issue #62346）。
    *   确保即使在使用 `code_file` 模式时，已知 Hermes 密钥环境变量也会被正确脱敏（PR #61352）。
*   **TUI/Desktop 稳定性修复 (#60973, #54785)**：解决了会话状态补丁导致的跨会话通知泄漏问题，并改进了后台进程通知的路由逻辑，防止孤儿事件干扰主会话。
*   **MCP 工具名称修复 (#61336)**：修复了某些模型（如 GLM）发出的 MCP 工具名称缺少 `mcp__` 前缀导致无法调用的问题。

## 4. 社区热点
以下是今日讨论最激烈或关注度最高的议题：

*   **[Feature] 双阶段上下文管理 (Issue #513)**
    *   **链接**: [NousResearch/hermes-agent Issue #513](https://github.com/NousResearch/hermes-agent/issues/513)
    *   **分析**: 用户 teknium1 提出的受 Kilocode 启发的两阶段上下文压缩方案引发了广泛关注。该方案不仅涉及性能优化，更触及了 Hermes 核心的记忆管理架构。今日 PR #62389 正是对此需求的直接响应，显示社区对更高效上下文管理的强烈需求。
*   **[Feature] 多用户隔离与独立上下文 (Issue #32107)**
    *   **链接**: [NousResearch/hermes-agent Issue #32107](https://github.com/NousResearch/hermes-agent/issues/32107)
    *   **分析**: 尽管创建时间较早，但该 Issue 依然拥有 7 个 👍，是今日讨论中点赞最高的 Issue。初创公司用户迫切需要在单实例部署中实现多租户级别的用户隔离，这对 Hermes 的企业级部署至关重要。
*   **[Bug] Bedrock + Claude 认证与路由故障 (Issue #28156)**
    *   **链接**: [NousResearch/hermes-agent Issue #28156](https://github.com/NousResearch/hermes-agent/issues/28156)
    *   **分析**: 涉及 AWS Bedrock 和 IAM 认证的复杂交互问题，评论数高达 5 条。反映了用户在混合云环境下面临的配置痛点，尤其是 EU 区域的路由问题。

## 5. Bug 与稳定性
今日报告了大量影响稳定性和可用性的 Bug，按严重程度排序：

*   **P1/P2 高危/高严重性**:
    *   **Bedrock/Claude 认证失败 (Issue #28156)**: Wizard 接受 Bearer Token 但运行时因缺少 IAM 而失败，且 EU 区域路由错误。
    *   **Context Compaction 崩溃 (Issue #55677)**: 第二次/第三次压缩尝试时抛出 Jinja 模板错误，导致会话损坏。*(注: 此 Issue 已标记为 CLOSED，可能已在近期合并中修复，需验证)*
    *   **Desktop 状态滞留 (Issue #48098)**: 压缩恢复后仍显示 "Summarizing thread"，误导用户。
    *   **NVIDIA 580+ 驱动崩溃 (Issue #40077)**: Ubuntu 24.04 上 Electron 应用因显卡驱动不兼容崩溃。
    *   **Lazy Backend Refresh 破坏 Venv (Issue #57828)**: 更新失败导致虚拟环境损坏，且无自愈机制，引发循环崩溃。
    *   **Teams 打字指示器永久动画 (Issue #62394)**: 疑似 `_keep_typing` 任务泄漏。
    *   **Weixin iLink 限流错误 (Issue #62383)**: `context_token` 过期导致静默限流错误，而非预期的认证错误。

*   **P3 中等严重性**:
    *   **MCP 进程泄漏 (Issue #60385)**: 重连时未杀死旧进程，导致资源耗尽。
    *   **非 Git 文件夹重复 Lane (Issue #53329)**: 项目树显示重复条目。
    *   **邮件主题硬编码 (Issue #46947)**: 出站邮件缺乏自定义主题机制。
    *   **Desktop 消息气泡视觉混淆 (Issue #57104)**: 用户/助手消息样式过于相似。

## 6. 功能请求与路线图信号
*   **MCP Memory 暴露 (Issue #10835)**: 用户希望将 Hermes 的记忆能力通过 MCP 服务器暴露给其他 AI 客户端（如 Cursor, Claude Code），以构建跨代理的知识共享网络。这是一个重要的生态扩展信号。
*   **Volatile Skills (Issue #36656)**: 请求支持“易失性技能”，即仅在当前轮次加载，不持久化到对话历史中。这对于节省上下文窗口和处理临时性任务（如一次性 Cron 报告）非常有价值。
*   **Per-Subagent Model Override (Issue #58731)**: 希望在委托任务中为不同的子代理指定不同的模型，以实现成本优化或能力匹配（例如，简单子任务用便宜模型，复杂推理用昂贵模型）。
*   **Remote Attachment Resumable Uploads (Issue #62375)**: 桌面端远程附件上传需要支持断点续传和大小限制调整，以支持大文件传输。

## 7. 用户反馈摘要
*   **痛点**: 用户普遍反映在长会话中，上下文压缩后的状态不一致（如 TUI 显示忙碌但实际已完成）以及会话切换时的内容残留是主要体验障碍。
*   **满意度**: 对于新增的 `custom_providers` 配置支持表示欢迎，但认为 UI 配置界面缺失（Issue #52807）增加了使用门槛。
*   **场景**: 企业用户（如 Issue #32107 所述）正在探索将 Hermes 集成到内部行政助理产品中，对多用户隔离、计费精确性（Issue #9403）和安全审计（Issue #3630）有极高要求。

## 8. 待处理积压
*   **Issue #3630**: 高级安全功能（第4阶段：临时密钥、外部 Vault、审计）依赖前期阶段，需持续关注其实施进度。
*   **Issue #40077**: NVIDIA 580+ 驱动下的 Desktop 崩溃问题，涉及 Electron 底层兼容性，可能需要上游修复或特定的 Workaround。
*   **Issue #57828**: 更新过程中的自愈合机制缺失，若无修复，用户在网络不稳定时极易陷入坏境状态。
*   **Issue #62341**: 计划任务面板显示错误状态，虽不影响核心功能，但影响运维监控体验。

---
*本报告由 Agnes-2.0-Flash 生成，基于 NousResearch/hermes-agent GitHub 公开数据。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-07-11
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
今日 PicoClaw 项目保持高活跃度，共处理 **18 条 Pull Request** 和 **3 条 Issues**。开发重心明显转向**安全性加固**、**底层性能优化**以及**OAuth 认证机制的标准化**。虽然无新版本发布，但通过合并多个依赖更新和安全修复，项目的整体稳健性显著提升。社区贡献者活跃，特别是在 WhatsApp 渠道体验和内部 Agent 协作机制上取得了实质性进展。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要进展集中在基础设施加固与新功能落地：
*   **安全与合规加固**：PR #3248 将 Go 工具链升级至 1.25.12 以修复标准库漏洞；PR #3246 修复了 MQTT 通道默认跳过 TLS 证书验证的安全隐患，并优化了 OAuth 超时处理。这些改动直接提升了生产环境部署的安全性。
*   **WhatsApp 体验优化**：PR #3242 实现了原生 WhatsApp “正在输入”（typing presence）状态，解决了用户等待时的交互盲区，对应 Issue #3240 的需求。
*   **架构完善**：PR #3241 重构了 OAuth 刷新令牌逻辑，使其符合各提供商（如 OpenAI, Google）的特定语义，并解决了并发竞争问题，这是稳定集成第三方服务的关键一步。
*   **性能微优化**：PR #3243, #3244, #3245 由同一贡献者发起，通过减少字符串分配和优化 XML 转义逻辑，降低了内存开销，体现了对高频调用路径的性能关注。

## 4. 社区热点
*   **OAuth 刷新机制的标准化 (Issue #3239 & PR #3241)**
    *   **链接**: [Issue #3239](https://github.com/sipeed/picoclaw/issues/3239), [PR #3241](https://github.com/sipeed/picoclaw/pull/3241)
    *   **分析**: 用户 `greencabe` 指出通用的 OAuth 刷新逻辑导致 OpenAI 等提供商报错。该 Issue 直接推动了 PR #3241 的合并，展示了社区反馈快速转化为代码修复的高效闭环。
*   **WhatsApp 状态反馈缺失 (Issue #3240 & PR #3242)**
    *   **链接**: [Issue #3240](https://github.com/sipeed/picoclaw/issues/3240), [PR #3242](https://github.com/sipeed/picoclaw/pull/3242)
    *   **分析**: 针对长延迟回复导致的用户体验断裂，社区提出了增加“正在输入”状态的明确需求。PR #3242 不仅解决了显示问题，还实现了后台定时刷新逻辑，提升了产品细腻度。
*   **Agent 协作总线 (PR #2937)**
    *   **链接**: [PR #2937](https://github.com/sipeed/picoclaw/pull/2937)
    *   **分析**: 尽管标记为 `[stale]`，但该 PR 引入了内部 Agent 协作总线，支持邮件箱和会话隔离。这表明项目正在向多智能体协作方向演进，是架构层面的重大增强。

## 5. Bug 与稳定性
*   **[高] MQTT TLS 证书验证被禁用 (PR #3246)**
    *   **描述**: 原代码硬编码 `InsecureSkipVerify: true`，导致中间人攻击风险。
    *   **状态**: 已通过 PR #3246 修复，默认启用证书验证。
*   **[中] Go 标准库已知漏洞 (PR #3248)**
    *   **描述**: CI 扫描发现 `crypto/tls` 和 `os` 包存在已知漏洞 (GO-2026-5856, GO-2026-4970)。
    *   **状态**: 已通过 PR #3248 升级 Go 版本修复。
*   **[低] WhatsApp WebSocket 超时 (Issue #3178)**
    *   **描述**: 用户报告在特定环境下 WebSocket 连接超时。
    *   **状态**: Issue 已关闭，可能通过之前的重连逻辑修复或配置调整解决，但未关联到今日特定的新 PR。

## 6. 功能请求与路线图信号
*   **模型回退链配置 (PR #3200)**: 允许用户在 Web UI 中配置默认模型及备用模型链。这反映了用户对**高可用性**和**成本优化**（自动切换更便宜/更快的模型）的强烈需求。
*   **Simplex 频道支持 (PR #3193)**: 新增 Simplex 隐私通讯协议支持，显示项目致力于拓展**去中心化/隐私优先**的消息渠道生态。
*   **Linux ARMv7 构建支持 (PR #3205)**: 修复 Raspberry Pi 3 B+ 上的兼容性问题，表明项目对**边缘计算设备**和低功耗硬件的支持仍在持续加强。
*   **安装脚本整合 (PR #1951)**: 将安装脚本从文档仓库移入主仓库，简化了新手用户的部署流程，是提升开发者体验（DX）的重要步骤。

## 7. 用户反馈摘要
*   **痛点**: 用户普遍反映在长文本生成或复杂推理时，缺乏即时反馈（如“正在输入”），导致不确定机器人是否工作。
*   **满意点**: 社区对安全性修复（如 OAuth 标准化、TLS 修复）表示认可，认为这增强了生产环境的信任度。
*   **使用场景**: 大量用户尝试在资源受限设备（如树莓派）上运行 PicoClaw，并依赖 OpenAI 兼容网关（如 9router），因此对 ARM 支持和网关兼容性 PR 反响积极。

## 8. 待处理积压
*   **PR #3211 (Dependabot)**: ESLint 依赖更新。虽为自动化 PR，但需注意其可能引发的前端 lint 错误，建议定期合并以保持前端代码规范同步。
*   **PR #3208 (Dependabot)**: Mautrix (Matrix 客户端) 依赖更新。作为核心通道之一，需确保 v0.28.1 的兼容性测试覆盖全面。
*   **PR #3165 (OpenAI Compat Seed XML)**: 恢复 Volcengine Doubao 的特定 XML 格式工具调用。此 PR 针对特定厂商的兼容性问题，若后续有其他类似专有协议需求，可作为参考案例。

---
**分析师备注**: PicoClaw 目前处于“修补短板、夯实基础”的阶段。通过集中解决 OAuth、MQTT 安全和 Go 版本漏洞，项目正在为更大规模的生产部署扫清障碍。接下来的重点可能在于将这些底层稳定性提升转化为更丰富的渠道支持和更灵活的模型编排能力。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-07-11
**数据来源：** GitHub (nanocoai/nanoclaw)
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
NanoClaw 项目在 2026-07-11 保持高活跃度，过去24小时内共产生 **28** 次关键交互（3 Issues + 25 PRs）。尽管没有新版本的正式发布，但核心开发团队（Core Team）密集提交了多项关于**持久化记忆系统**、**渠道默认配置重构**以及**时间戳标准化**的 Pull Requests。项目正从“功能堆砌”向“底层架构规范化”转型，特别是解决了长期存在的时区混乱和记忆同步问题。整体健康度良好，但需关注遗留的 Bug 对用户体验的影响。

## 2. 版本发布
*   **当前状态：** 无新版本发布。
*   **注意：** 多个已合并的 PR（如 #3010, #3012, #3006）涉及底层架构重大变更，建议在下一个正式版本发布前，仔细审查迁移指南，特别是针对自定义 Channel 适配器和 Memory Provider 的用户。

## 3. 项目进展
今日主要进展集中在基础设施的规范化和核心功能的增强：

*   **记忆系统统一 (#3012, #3013):** 引入了 provider-agnostic 的持久化记忆树，并完成了 Codex 端的会话启动集成。这标志着项目在多模型后端间的记忆一致性上迈出了关键一步。
*   **渠道配置重构 (#3010, #3011):** 将渠道行为（Engage Mode, Threading, Sender Policy）的决定权从 Core 层下放至各 Adapter 声明。这提高了系统的模块化程度，减少了硬编码逻辑。
*   **时间戳标准化 (#3006, #3007, #3005):** 强制实施“存储用 ISO-Z UTC，显示用本地时间”的全局规范，修复了任务行、Exchange Archives 和数据库写入中的时区不一致问题。
*   **WhatsApp 修复 (#3008):** 解决了 LID 模式下因缓存元数据错误导致的 SKDM 失败问题，提升了 WhatsApp 渠道的稳定性。

## 4. 社区热点
今日讨论最活跃的 Issues/PRs 主要集中在以下方面：

*   **[PR #3010] Adapter-declared channel defaults:**
    *   **链接:** https://github.com/nanocoai/nanoclaw/pull/3010
    *   **热度分析:** 这是今日最大的架构变动之一。社区关注点在于此变更如何影响现有 Channel 的兼容性，以及是否简化了新 Channel 的开发流程。
*   **[Issue #3001] Stale skill copies blocking symlinks:**
    *   **链接:** https://github.com/nanocoai/nanoclaw/issues/3001
    *   **热度分析:** 这是一个隐蔽但严重的 Bug，影响了在特定日期前创建的 Agent Group。虽然目前评论数为0，但其描述的问题可能导致大量存量用户无法获得技能更新，潜在影响范围广。
*   **[PR #2999] Unify iMessage:**
    *   **链接:** https://github.com/nanocoai/nanoclaw/pull/2999
    *   **热度分析:** 统一 iMessage 渠道的本地和托管后端，简化了用户配置，是提升用户体验的重要功能改进。

## 5. Bug 与稳定性
今日报告了多个影响稳定性的 Bug，部分已有 PR 跟进：

*   **[BUG] Groups created before refactor have stale skills (Issue #3001):**
    *   **严重性:** 高。旧组无法自动更新共享技能，且静默失败。
    *   **状态:** Open。需评估是否需要在 #3002 (warn when real entry blocks symlink) 的基础上增加自动迁移或强制刷新机制。
*   **[BUG] ncl groups create skips container_configs row (Issue #2415):**
    *   **严重性:** 高。导致首次 Spawn 容器失败，报错 "Container config not found"。
    *   **状态:** Closed (2026-07-10)。预计已在后续代码中修复。
*   **[BUG] Wirings don't auto-create destinations (Issue #2389):**
    *   **严重性:** 中。消息被静默丢弃，用户无感知。
    *   **状态:** Closed (2026-07-10)。
*   **[BUG] WhatsApp LID mode SKDM failure (PR #3008):**
    *   **严重性:** 中。特定 WhatsApp 群组模式下的消息发送失败。
    *   **状态:** Open (PR #3008)。

## 6. 功能请求与路线图信号
*   **Provider-Agnostic Memory:** PR #3012 和 #3013 强烈暗示项目路线图将重点放在跨后端的记忆一致性上，这可能是未来版本的核心卖点。
*   **Telegram Rich Rendering:** PR #2877 提议利用 Bot API 10.1 实现原生丰富渲染，表明项目正在积极跟进 Telegram 的新特性以提升消息体验。
*   **Context Preview Tool:** PR #3004 添加了 `context-preview.ts` 脚本，用于模拟和打印 Agent 视角的上下文。这表明开发者重视调试能力和透明度，可能将其作为官方工具集的一部分保留。

## 7. 用户反馈摘要
*   **痛点:** 用户对于“静默失败”（如 Issue #2389 消息被吞）和“配置不一致”（如 Issue #2415 缺少行）感到困扰，因为这增加了排查难度。
*   **需求:** 对更明确的错误提示和日志记录有强烈需求。例如，PR #3002 提出在共享技能符号链接被阻塞时发出警告，这是对用户反馈的直接回应。
*   **满意度:** 时间戳标准化的努力（PR #3006 等）可能会受到重视开发环境和日志分析用户的欢迎，因为它解决了跨时区协作中的常见混淆。

## 8. 待处理积压
*   **Issue #3001:** 需要尽快解决，因为影响存量用户。建议优先合并相关的修复 PR 或提供手动修复脚本。
*   **PR #3008:** WhatsApp LID 模式的修复尚未合并，考虑到 WhatsApp 的高使用率，建议加速审核与合并。
*   **PR #2988:** 任务交付路径的统一（One-door delivery）尚在 Open 状态，这是任务调度模块的重要重构，需确保测试覆盖全面后再合并。

---
*报告生成时间：2026-07-11*
*数据来源：GitHub API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**：2026-07-11
**数据来源**：GitHub (nullclaw/nullclaw)

### 1. 今日速览
2026年7月11日，NullClaw 项目整体处于**低代码提交、高安全关注**的状态。过去24小时内无新的 Pull Request 合并或新版本发布，代码库处于静默期。然而，社区活跃度并未完全停滞，今日新增 2 个 Issues，其中一条涉及核心安全漏洞（跨调用者任务复用），显示出用户对系统边界和权限隔离的高度敏感。项目当前主要面临后端稳定性与前端连接保持的技术挑战，以及潜在的安全架构风险。

### 2. 版本发布
*   **无新版本发布**。
*   最近一次版本更新信息缺失，建议维护者检查 CI/CD 流水线或近期 Release 标签状态，以确认发布流程是否正常运作。

### 3. 项目进展
*   **代码贡献**：今日无 PR 合并，项目代码库在功能实现层面暂无实质性推进。
*   **架构影响**：Issue #974 揭示的 `A2A` 路由共享 Bearer Token 导致的上下文重用问题，若不及时修复，可能迫使后续版本引入更严格的身份验证中间件或重构任务调度逻辑，这将是对现有架构的一次重要修正而非功能扩展。

### 4. 社区热点
今日最受关注的议题集中在 **Telegram 集成稳定性** 和 **API 安全模型** 上：

*   **Telegram 断连问题 (Issue #972)**
    *   **链接**: [nullclaw/nullclaw Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
    *   **热度分析**: 用户 `i11010520` 报告 Telegram Channel 在夜间空闲后停止响应，尽管后端 Agent 进程正常。这反映了长连接管理或心跳机制在生产环境中的痛点，直接影响用户体验。
*   **A2A 路由安全漏洞 (Issue #974)**
    *   **链接**: [nullclaw/nullclaw Issue #974](https://github.com/nullclaw/nullclaw/issues/974)
    *   **热度分析**: 用户 `N0zoM1z0` 指出共享 Bearer Token 允许不同调用者（如 Bob 和 Alice）复用任务和上下文。这是一个严重的逻辑缺陷，可能导致数据泄露或操作越权，是今日技术讨论的核心焦点。

### 5. Bug 与稳定性
今日报告了 2 个 Bug，按严重程度排列如下：

1.  **[严重] 安全/逻辑缺陷: NullClaw shared bearer A2A route allows cross-caller task and context reuse**
    *   **Issue**: #974
    *   **描述**: 认证层 (`/a2a` 的 bearer token) 与会话层 (task ID/contextId) 解耦不当，导致权限隔离失效。
    *   **状态**: Open | **Fix PR**: 无
2.  **[中等] 连接稳定性: Telegram channel stop respond after some idle time**
    *   **Issue**: #972
    *   **描述**: Telegram 通道在长时间空闲（过夜）后断开连接且无自动重连机制，导致服务不可用。
    *   **状态**: Open | **Fix PR**: 无

### 6. 功能请求与路线图信号
*   **隐含需求**：通过 Issue #972 和 #974，可以推断出用户对以下功能的需求信号强烈：
    *   **健壮的连接管理**：需要支持自动重连、心跳保活机制，特别是针对第三方 API（如 Telegram）。
    *   **细粒度的权限控制**：需要改进 A2A 路由的身份验证模型，确保 Token 与会话上下文严格绑定，防止横向越权。
*   **路线图判断**：解决 #974 的安全隐患应优先于新功能开发，因为它涉及基础安全性。#972 的修复将提升现有集成的可用性。

### 7. 用户反馈摘要
*   **痛点**：
    *   **不可预测的服务中断**：用户发现后端进程看似正常（`nullclaw agent -m "ping"` 成功），但前端通道（Telegram）却“死亡”，这种不一致性增加了排查难度。
    *   **信任危机**：共享 Token 导致上下文被其他用户读取，破坏了多租户环境下的数据隐私预期。
*   **使用场景**：
    *   自动化运维监控（Telegram 集成）。
    *   多用户协作的任务代理系统（A2A 路由）。

### 8. 待处理积压
*   **Issue #972** (创建于 2026-06-30，更新于 2026-07-10)：虽有新评论，但尚未有开发者介入。建议将其标记为 `bug` 并分配给负责集成模块的维护者。
*   **Issue #974** (创建于 2026-07-10)：这是一个新发现的安全问题，需要立即进行安全审计。建议维护者优先审查此 Issue，并考虑是否需要进行紧急热修复或发布补丁版本。

---
**分析师备注**：尽管代码提交量为零，但今日的安全和稳定性问题对项目的生产可用性构成直接威胁。建议团队暂停非关键功能开发，集中资源修复 #974 的逻辑缺陷和 #972 的连接保持问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-07-11
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 在 2026-07-11 保持高频开发节奏，过去24小时内产生 **36 条 Issue 更新**和 **50 条 PR 更新**。尽管没有新的正式 Release 发布，但核心开发团队（特别是 `tmartin2113`, `henrypark133`, `ilblackdragon`）提交了多个大型功能 PR，重点聚焦于 **记忆机制（Episodic Memory）**、**MCP 工具超时控制**以及 **循环执行器的韧性提升**。社区反馈显示，Slack 集成中的状态同步、断连逻辑及消息投递问题仍是当前主要痛点，同时内部测试框架正在经历重大的重构以对齐生产环境配置。

## 2. 版本发布
*   **无新版本发布。**
*   *注：PR #5598 提及了 `ironclaw_common` (0.4.2 -> 0.5.0) 等依赖包的版本变更，但这属于内部依赖升级，尚未形成独立的 Release Tag。*

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的稳定性和可观测性：

*   **循环韧性增强 (PR #5959 [OPEN], PR #5895 [CLOSED])**
    *   **进展：** PR #5895 已合并，修复了工具执行后的压缩失败导致运行终止的问题，将非取消类的压缩错误视为可恢复的提示步骤跳过。
    *   **影响：** 结合 PR #5959 提出的深度可用性重试和迭代后备机制，大幅降低了因临时资源波动导致的任务中断率。
*   **MCP 注册存储重构 (PR #5916 [CLOSED], PR #5970 [OPEN])**
    *   **进展：** PR #5916 完成了基于 `InstallationOwner` 的用户级 MCP 注册存储基础架构。
    *   **影响：** 为多租户隔离和安全的能力暴露奠定了基石，PR #5970 在此基础上进行了重建和优化。
*   **默认迭代上限提升 (PR #5960 [CLOSED])**
    *   **进展：** 将 `DefaultBudgetStrategy` 的默认迭代上限从 32 提升至 256。
    *   **影响：** 解决了复杂工具调用链（如大文档分块读取+计算）因达到上限而失败的问题，直接提升了长流程任务的完成率。
*   **启动崩溃修复 (PR #5967 [CLOSED])**
    *   **进展：** 修复了因无效扩展清单导致的启动循环崩溃（对应 Issue #5966）。
    *   **影响：** 恢复了生产环境部署的稳定性。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在 **Slack 集成缺陷** 和 **UI 状态不一致**：

*   **Slack 断连与配对故障 (Issue #5747, #5834)**
    *   **热度：** 高评论数，涉及底层协议与 UI 交互的不匹配。
    *   **分析：** 用户无法通过 UI 或命令解除 Slack 配对，且 Agent 错误地拒绝了断开请求。这暴露了内置通道挂载层面的状态管理漏洞。
*   **Slack DM 投递错误 (Issue #5943, #5944)**
    *   **热度：** 高优先级 (P1/P2)。
    *   **分析：** 用户报告“发送 DM”实际发到了频道，或显示成功但未收到消息。这是严重的信任危机点，直接影响用户对 Agent 执行能力的信心。
*   **GitHub 扩展状态误报 (Issue #5948)**
    *   **热度：** 中等。
    *   **分析：** Agent 报告扩展已激活，但 UI 显示仅为“已安装”。反映了后端状态检查逻辑与前端展示逻辑的脱节。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，按严重程度排序：

| 严重等级 | 问题描述 | Issue ID | 关联/状态 |
| :--- | :--- | :--- | :--- |
| **P1** | **Slack DM 路由错误**：指令发送 DM 却发到公共频道，或静默失败。 | #5943, #5944 | 需紧急修复 |
| **P2** | **Routine 调度失败**：定时任务因“No thread attached”持续报错。 | #5836 | 系统性问题 |
| **P2** | **上下文压缩崩溃**：多步工具执行后，因压缩失败导致整个 Run 终止。 | #5838 | **已修复** (PR #5895) |
| **P2** | **Google Sheet 修改顺序错误**：在确认 Trigger 可用前已修改数据。 | #5946 | 待处理 |
| **P3** | **UI 状态不同步**：线程删除需刷新、旧错误横幅残留、最后完成时间显示错误。 | #5947, #5879, #5891 | 体验优化 |
| **P3** | **Boot Crash Loop**：持久卷上的过时 Manifest 导致启动循环。 | #5966 | **已修复** (PR #5967) |

*   **回归风险：** Issue #5741 指出 `http.save` 在处理大响应时抛出 `OutputTooLarge` 而非保存文件，这可能是一个性能边界测试遗漏导致的回归。

## 6. 功能请求与路线图信号
*   **跨会话记忆 (Episodic Memory) (PR #5974)**
    *   **信号：** 开发者正在实现自动将对话蒸馏为可搜索摘要，并在新会话中注入相关上下文的功能。这是向更智能、具有长期记忆的 Agent 迈进的关键一步。
*   **MCP 服务器超时与后台桥接 (PR #5973)**
    *   **信号：** 引入每服务器级别的超时控制和后台任务桥接，旨在解决外部服务连接不稳定导致的整体阻塞问题。
*   **动态工具发现 (PR #5972)**
    *   **信号：** 实施基于余弦相似度的工具检索，仅向模型推送核心+Top-K 工具，以减少 Prompt Token 消耗并提高推理效率。
*   **GLM-5.2 支持缺失 (Issue #5969)**
    *   **信号：** 用户希望原生支持更多模型，目前需手动配置，反映出默认模型列表的扩展性不足。

## 7. 用户反馈摘要
*   **痛点：**
    *   **“假成功”与“假失败”：** 用户极度反感运行状态与实际结果不符（如 Slack DM 未送达却显示成功，或工具执行成功但因压缩报错导致整体失败）。
    *   **调试困难：** 定时任务（Routine）失败时缺乏清晰的错误定位，UI 上的操作按钮（如查看日志）不可点击，增加了排查成本。
    *   **内部细节泄露：** 创建 Routine 时的响应暴露了 Cron 语法和内部命令引用，被认为是不必要的信息泄露，降低了产品的专业感。
*   **满意点：**
    *   团队对底层架构（如 Reborn 的 Port 组装）的持续重构得到了认可，尤其是通过 PR #5950 使测试环境更贴近生产环境的做法。

## 8. 待处理积压
*   **Issue #5640 [OPEN]**: Harness gap - `hook_security_audit_sink` 在集成测试中始终为 None。这是一个长期的测试基础设施缺陷，可能掩盖了安全审计相关的 Bug。
*   **Issue #5860 [OPEN]**: Tool 活动详情仅在完成后显示。虽然用户可手动展开，但实时可见性的缺失影响了交互流畅度。
*   **Issue #5935 [OPEN]**: 退役 v1 Runtime。这是一个重大的清理任务，需要协调 CI/CD、文档和 Docker 镜像的全面迁移，建议尽早规划里程碑。
*   **PR #5963 & #5962 [OPEN]**: 这两个 PR 是堆叠提交（Stacked PRs），依赖于彼此且基于 `#5279` 分支。维护者需确保合并顺序正确，以避免代码冲突或功能断裂。

---
*分析师备注：今日代码活动主要集中在 `agent-loop` 和 `reborn` 核心组件，表明团队正致力于解决长期运行的稳定性问题。Slack 集成模块的 Bug 密度较高，建议优先分配资源进行专项修复。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-07-11
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 项目在 2026 年 7 月 10 日保持高活跃度，发布了 **2026.7.10** 新版本，并合并了 10 个 Pull Requests，主要集中在 Cowork 协作体验优化、定时任务路由修复及构建稳定性提升。核心亮点包括支持委托子代理协作、最小化权限提示以及解决 Windows 端 UI 压缩问题。社区层面，用户对于多 Agent 下 `USER.md` 配置隔离的 Bug 反馈强烈，同时会话列表的时间分组功能成为高频需求。整体项目健康状况良好，技术债务清理与新功能迭代并行推进。

## 2. 版本发布
### 🚀 LobsterAI 2026.7.10
**发布日期：** 2026-07-10

**主要变更内容：**
*   **Agent 协作增强：** 新增委托子代理协作支持 (`feat(agents): support delegated subagent collaboration`)，允许主 Agent 更灵活地调度子任务。
*   **Cowork 体验优化：**
    *   添加可最小化的权限提示框，减少界面遮挡 (`feat(cowork): add minimizable permission prompts`)。
    *   修复队列跟随协调器的连接问题，确保跨会话和最小化状态下的任务连续性。
    *   仅提交选定的排队引导指令，保留 FIFO 处理逻辑。
*   **IM 定时任务修复：** 修复企业微信和钉钉群聊 ID 大小写敏感性问题，防止因 OpenClaw session key 转换导致的投递失败 (`fix(scheduled-task): preserve WeCom and DingTalk group ID casing`)。
*   **UI/UX 修复：**
    *   修复 Windows 端侧边栏折叠时标题栏 Logo 被压缩的问题。
    *   修复 AskUser 组件在最小化状态下状态丢失的问题。
*   **内存索引迁移：** 自动迁移所有 Agent 的 FTS-only 内存索引，确保搜索功能一致性。

**迁移注意事项：**
*   本次更新涉及 IM 定时任务的路由修复，建议用户检查现有的企微/钉钉定时任务配置，确保 `delivery.to` 字段格式正确。
*   内存索引后台自动迁移，通常无需用户干预，但若迁移失败将在下次启动时重试。

## 3. 项目进展
今日合并/关闭的 PR 显著提升了系统的稳定性和用户体验细节：

*   **功能落地：**
    *   **#2285:** 引入委托子代理协作机制，增强了 Agent 的复杂任务处理能力。
    *   **#2310:** 新增文件夹上下文附件支持，允许直接拖拽本地文件夹作为 Prompt 上下文，而非上传目录内容，提升效率。
*   **Bug 修复：**
    *   **#2314 & #2306:** 集中修复 IM 群聊定时任务的 ID 大小写敏感性及路由问题，解决了部分任务误报 `delivered=true` 但实际未送达的严重问题。
    *   **#2316:** 修复 Windows 客户端 UI 布局缺陷。
    *   **#2312:** 修复 Electron 应用最小化时的状态管理 Bug。
*   **基础设施：**
    *   **#1275 & #1276:** Dependabot 自动更新了 CI 动作版本，提升构建安全性。
    *   **#2309:** 修复构建脚本中的 ES2020 兼容性问题，确保跨平台构建稳定。

## 4. 社区热点
以下 Issue 和 PR 获得了较高的关注度或代表了明确的用户诉求：

*   **[HIGH] 多 Agent USER.md 配置冲突 Bug**
    *   **Issue #2293:** 用户报告在多 Agent 环境下，修改任一 Agent 的 `USER.md` 或“关于你”设置会导致其他 Agent 的配置被覆盖。这是一个严重的回归 Bug，直接影响多角色工作流的可用性。
    *   **状态：** OPEN | 评论：3
    *   **链接：** [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)

*   **[FEATURE] 会话列表按时间分组**
    *   **Issue #1337 / PR #1338:** 用户强烈建议参考 ChatGCLAUDE 等主流产品，将会话列表按“今天、昨天、本周、更早”分组，以解决长历史会话查找困难的问题。
    *   **状态：** Issue OPEN, PR OPEN (Stale)
    *   **链接：** [Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337) | [PR #1338](https://github.com/netease-youdao/LobsterAI/pull/1338)

*   **[FEATURE] MCP 服务器 JSON 导入**
    *   **PR #1336:** 用户贡献了 MCP 自定义服务器配置的 JSON 粘贴导入功能，极大提升了配置效率。
    *   **状态：** OPEN (Stale)
    *   **链接：** [PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336)

## 5. Bug 与稳定性
*   **严重 (Critical):**
    *   **#2293 [OPEN]** `USER.md` 在多 Agent 间同步覆盖。此 Bug 破坏了多 Agent 隔离的核心假设，需优先修复。
*   **中等 (Medium):**
    *   **#1392 [CLOSED]** 定时任务开关点击无反应。该 Issue 已被标记为 Stale 并关闭，可能因复现困难或优先级较低，建议重新评估其状态。
    *   **#2314/2306 [MERGED]** IM 群聊 ID 大小写问题已修复，但仍需观察后续版本中是否有回归。
*   **轻微 (Low):**
    *   **#2316 [MERGED]** Windows 端 UI Logo 压缩问题已修复。
    *   **#2312 [MERGED]** AskUser 最小化状态丢失问题已修复。

## 6. 功能请求与路线图信号
*   **会话结构化浏览：** 多个 Issue (#1337, #1338) 和 PR 指向同一需求——会话列表时间分组。这表明用户希望提升长周期使用的导航效率。虽然 PR #1338 已存在，但处于 Stale 状态，建议维护者审查是否纳入下一版本。
*   **定时任务灵活性：** PR #1335 提议添加“工作日 (Mon-Fri)”调度选项，这是对现有 Cron 表达式支持的友好封装，符合普通用户的使用习惯，具有较高的合并潜力。
*   **MCP 配置便捷性：** PR #1336 提出的 JSON 导入功能属于典型的“开发者体验”改进，能降低 MCP 集成门槛，建议合并。
*   **错误可视化：** PR #1331 提议在会话列表增加错误状态红点，提升异常可见性，属于低成本的 UX 改进。

## 7. 用户反馈摘要
*   **痛点：** 多 Agent 环境下的配置隔离失效是目前用户最紧迫的痛点。用户明确指出在关闭软件后重启，`workspace-*` 下的 `USER.md` 会被 `main agent` 的内容覆盖，导致个性化设定丢失。
*   **期望：** 用户希望获得类似 ChatGPT 的直观会话管理体验，特别是针对大量历史会话的分组浏览和错误状态标识。
*   **满意点：** 用户对近期修复的 IM 定时任务路由问题和 Windows 端 UI 细节表示认可，认为这些修复解决了实际工作中的阻碍。

## 8. 待处理积压
以下 Issue/PR 长期处于 OPEN 或 Stale 状态，建议维护者跟进：

*   **Issue #1392:** 定时任务开关无反应。虽已标记 Stale 并关闭，但若该 Bug 仍存在于最新版本，应重新打开。
*   **PR #1331:** 会话列表错误状态红点徽标。UX 改进型 PR，建议合并。
*   **PR #1333:** i18n 附件标签及删除保护修复。涉及国际化一致性，建议合并。
*   **PR #1335:** 定时任务“工作日”选项。实用功能增强，建议合并。
*   **PR #1336:** MCP JSON 导入。提升配置效率，建议合并。
*   **PR #1338:** 会话列表时间分组。核心功能请求，建议优先评审代码质量并决定是否合并或重写。
*   **PR #1275 & #1276:** Dependabot 自动更新 PR。通常建议定期合并以保持依赖最新。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-07-11)

**数据来源**: GitHub (moltis-org/moltis)
**分析师**: Agnes-2.0-Flash (Sapiens AI)

### 1. 今日速览
2026年7月11日，Moltis 项目处于低活跃度的稳定维护期。过去24小时内无新 Issue 提交，也无版本发布，表明核心开发工作可能集中在代码重构或后台优化，而非新功能的大规模爆发。唯一的动态是一条关于支持 GPT-5.6 模型的 Pull Request (#1146)，显示项目正在积极跟进前沿大模型生态。整体来看，项目健康度良好，社区互动平稳，但缺乏高频的用户反馈或争议性讨论。

### 2. 版本发布
*   **无新版本发布**。
*   近期无 Release 记录，建议关注下一个主要版本（如 vX.X.X）的预告，以了解 GPT-5.6 支持是否作为独立补丁或集成在更大更新中。

### 3. 项目进展
*   **关键 PR**: [#1146](https://github.com/moltis-org/moltis/pull/1146) - **Add GPT-5.6 model support**
    *   **状态**: OPEN (待合并)
    *   **贡献者**: PeterDaveHello
    *   **进展分析**: 该 PR 旨在注册 GPT-5.6 (Sol, Terra, Luna 变体) 到 OpenAI 及 OpenAI Codex 的回退目录中。它明确了上下文窗口限制（OpenAI API 1.05M，ChatGPT/Codex 后端 372K），并更新了配置文件和文档中的模型引用。
    *   **影响**: 这是本项目在 AI 模型兼容性上的重要一步，确保 Moltis 能够无缝对接最新的 GPT-5.6 系列模型，提升了产品的市场竞争力和技术前瞻性。

### 4. 社区热点
*   **当前热点**: 无高热度 Issue 或 PR。
*   **分析**: 由于今日仅有一条待合并的 PR 且无评论，社区参与度较低。这可能意味着 GPT-5.6 的支持是预期内的常规更新，或者社区更倾向于通过直接提交 PR 而非讨论 Issue 来参与贡献。

### 5. Bug 与稳定性
*   **今日报告**: 0 条
*   **分析**: 过去24小时无新 Bug 报告或回归问题反馈。这表明当前版本的稳定性较高，或者用户群体尚未遇到新的触发条件。

### 6. 功能请求与路线图信号
*   **信号**: **GPT-5.6 全面支持**
    *   **来源**: PR #1146
    *   **解读**: 用户（PeterDaveHello）主动提出并实现了 GPT-5.6 的支持，这反映了市场对最新模型支持的强烈需求。该 PR 详细处理了不同后端（API vs Codex）的上下文窗口差异，暗示路线图将侧重于“兼容性与性能平衡”。预计下一版本将正式包含此功能。

### 7. 用户反馈摘要
*   **今日反馈**: 无新评论或反馈。
*   **历史洞察**: 由于缺乏今日的 Issue 评论，无法提取新的用户痛点。建议回顾最近一周的 Issue 以捕捉潜在的用户体验问题。

### 8. 待处理积压
*   **重点关注**: **[PR #1146](https://github.com/moltis-org/moltis/pull/1146)**
    *   **状态**: OPEN
    *   **行动建议**: 虽然该 PR 已提交两天（创建于 2026-07-09），但目前仍处于待合并状态。鉴于其重要性（支持最新模型），建议维护者优先审查此 PR，确认上下文窗口配置的正确性及文档更新的完整性，以便尽快合并，避免功能滞后。
*   **其他积压**: 无新增长期未响应的 Issue。

---
*注：以上数据基于 2026-07-11 00:00:00 至 23:59:59 (UTC) 期间的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-07-11
**数据来源：** GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
CoPaw 项目今日处于 **v2.0.0 正式版发布后的关键稳定期**。随着 v2.0.0 的 GA 发布，社区活跃度显著回升，过去24小时内产生了 44 条 Issue 和 49 条 PR，其中近半数为新发现的 Bug 或兼容性报告。核心焦点集中在 **AgentScope 2.0 底层架构迁移后的副作用修复**（如内存管理、MCP 权限控制、上下文截断逻辑）以及 **桌面端沙箱稳定性**。项目整体健康度良好，但 v2.0 初期存在一定数量的回归问题（Regression），需优先处理以确保持续集成环境的稳定性。

## 2. 版本发布
### 🚀 QwenPaw v2.0.0 (Stable)
*   **发布日期：** 2026-07-10
*   **核心变更：**
    *   **Runtime 2.0 重构：** 基于 AgentScope 2.0 内核重写，采用新的运行时模型和 API。
    *   **Agent OS 能力：** 强化多智能体协作、Loop Engineering（循环工程）及滚动上下文管理。
    *   **ReMe v0.4：** 记忆模块升级，引入混合检索（BM25 + Vector）及重排序（Reranker）支持。
    *   **Terminal UI：** 原生支持 TUI 界面，提升开发者体验。
*   **迁移注意事项：**
    *   **破坏性变更：** 后端依赖从 `agentscope==1.x` 全面升级至 `2.0`，旧版插件或自定义工具可能因 API 变动失效。
    *   **配置兼容：** 部分配置文件结构需调整，建议查阅官方升级指南。
    *   **已知风险：** 发布后短时间内涌现大量关于 MCP 权限、Memory 路径及中文编码的 Bug，建议在生产环境部署前进行充分测试。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在 **修复 v2.0 发布初期的结构性缺陷** 和 **完善基础功能**：

*   **🔧 核心修复：**
    *   **[PR #5949]** (Closed): 修复 MCP 访问策略更新延迟问题，确保权限控制实时生效。
    *   **[PR #5938]** (Closed): 修复 Memory 归档任务中 `session_id` 丢失导致的记忆归属错误。
    *   **[PR #5935]** (Open/In Review): 重构工具结果裁剪逻辑，统一由 `ToolResultPruningMiddleware` 管理，解决上下文压缩时的结构丢失问题。
    *   **[PR #5936]** (Closed): 撤销了关于时间戳注入的改动，因 UI 显示问题回滚，体现对用户体验的快速响应。
*   **✨ 功能增强：**
    *   **[PR #5726]** (Ready): 实现文本模型的视觉回退机制（Vision Fallback），允许纯文本模型调用视觉模型处理图片。
    *   **[PR #5922]** (Open): 增强可观测性，支持在 Langfuse 追踪中记录用户 ID、Session ID 及版本信息。
    *   **[PR #5930]** (Open): 为 API 自动化集成提供结构化运行结果输出，解决非 Web 端调用的状态同步难题。

## 4. 社区热点
以下是今日讨论最激烈、关注度最高的 Issue：

1.  **[Issue #5951] Desktop shell sandbox: icacls timeout silently swallowed → pwsh recursive explosion**
    *   **热度：** ⭐⭐⭐⭐⭐ (极高)
    *   **描述：** 桌面端沙箱功能导致 PowerShell 窗口无限递归弹出，内存瞬间耗尽，且无法通过常规手段关闭。
    *   **分析：** 这是一个严重的 **Blocker 级 Bug**，直接影响 Windows 用户的正常使用。用户被迫回退至 v1.1.12 版本，表明 v2.0 桌面版的稳定性存在重大隐患。
    *   **链接：** [Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)

2.  **[Issue #5947] V2.0.0版本 MCP中禁用了某些子工具的访问,但是agent还是可以调用**
    *   **热度：** ⭐⭐⭐⭐
    *   **描述：** MCP 工具的 Allow/Deny 策略失效，Agent 仍可访问被禁止的子工具。
    *   **分析：** 涉及安全与权限控制的底层逻辑错误，虽已合并 PR #5949 进行修复，但反映出 v2.0 在复杂权限场景下的测试覆盖不足。
    *   **链接：** [Issue #5947](https://github.com/agentscope-ai/QwenPaw/issues/5947)

3.  **[Issue #5401] Console: session with large tool-use history fails to render**
    *   **热度：** ⭐⭐⭐
    *   **描述：** 前端在处理大量工具调用历史时崩溃，后端返回的 `type: "data"` 格式不被前端渲染器支持。
    *   **分析：** 前后端数据契约不一致导致的渲染崩溃，影响长会话用户体验。
    *   **链接：** [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)

4.  **[Issue #4727] Migrate backend from AgentScope 1.x to AgentScope 2.0**
    *   **热度：** ⭐⭐⭐ (历史遗留高赞)
    *   **描述：** v2.0 迁移的核心追踪 Issue，当前已随 v2.0 发布而关闭，但评论区仍有大量关于迁移痛点的讨论。
    *   **链接：** [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

| 严重程度 | Issue ID | 问题简述 | 状态/修复 PR |
| :--- | :--- | :--- | :--- |
| **Critical** | #5951 | 桌面沙箱导致进程爆炸、内存溢出、无法关闭 | Open (急需 Fix) |
| **High** | #5947 | MCP 权限控制失效 (Allow/Deny 无效) | Fixed by PR #5949 |
| **High** | #5952 | Auto-memory 报错 `No module named 'agentscope.tool...'` | Open (路径兼容性问题) |
| **High** | #5950 | 中文记忆文件触发 Embedding 400 错误 (截断逻辑错误) | Open (需优化截断算法) |
| **Medium** | #5856 | 上下文压缩导致 Tool_call 结构丢失，引发 LLM 400 错误 | Open (需优化格式化逻辑) |
| **Medium** | #5946 | 提示词导致 Agent 对已在上下文的内容发起无效 recall 调用 | Open |
| **Medium** | #5918 | prd.json 格式错误导致会话陷入死循环 | Open |
| **Low** | #5401 | 前端渲染长工具历史崩溃 | Open |

**稳定性评估：** v2.0 发布初期稳定性承压明显，主要集中在 **内存管理、路径兼容性及前端渲染** 三个维度。建议团队优先解决 Critical 和 High 级别的问题。

## 6. 功能请求与路线图信号
*   **会话分组与导入导出：**
    *   [Issue #5903] 用户强烈希望能对会话进行分组管理，并支持导入/导出功能，以便更好地组织多 Agent 场景下的对话。
    *   [PR #5943] 已有贡献者提交设计提案，预计将在后续版本中纳入。
*   **LaTeX/Math 公式支持：**
    *   [Issue #5453] 用户希望在 Desktop App 中支持 LaTeX 公式渲染，目前仅支持基础 Markdown。
*   **定时任务增强：**
    *   [Issue #3569] 用户希望定时任务支持查看执行记录、编辑参数及版本回退，目前功能较为简陋。
*   **UI 定制：**
    *   [Issue #5909] 提议增加可配置的主题/Skin 模块，以提升品牌定制能力。

## 7. 用户反馈摘要
*   **痛点：**
    *   **升级焦虑：** 用户普遍反映从 v1.x 升级到 v2.0 过程中遇到大量兼容性问题（如模块路径错误、配置失效），缺乏清晰的“破坏性变更”清单。
    *   **桌面端体验差：** Windows 桌面版的沙箱功能被视为“灾难”，严重影响可用性。
    *   **中文处理缺陷：** 中文语境下的 Token 截断、Embedding 报错等问题频发，显示国际化/本地化测试不足。
*   **满意点：**
    *   **架构升级：** 尽管有阵痛，但用户认可基于 AgentScope 2.0 的重构带来的性能潜力和新特性（如 TUI、Scroll Context）。
    *   **响应速度：** 开发团队对 v2.0 发布后迅速出现的 Bug 响应较快，多个关键 Issue 在 24 小时内得到了 PR 修复或明确回复。

## 8. 待处理积压
*   **[Issue #5951] Desktop Shell Sandbox Crash:** 此 Issue 导致用户无法使用桌面版，且无临时规避方案，需作为最高优先级处理。
*   **[Issue #5950] Chinese Text Embedding Failure:** 涉及核心记忆功能在中文场景下的可用性，影响广泛用户群体。
*   **[Issue #5856] Context Compaction Data Loss:** 影响长会话的连贯性和工具调用准确性，需深入调试上下文压缩逻辑。
*   **[Issue #5952] Module Not Found Error:** 影响 Auto-Memory 功能的正常运行，需排查 v2.0 包结构与运行时环境的兼容性。

---
*报告生成时间：2026-07-11*
*分析师：Agnes-2.0-Flash (Sapiens AI)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-11
**数据来源：** ZeroClaw GitHub Repository

## 1. 今日速览
ZeroClaw 在 2026-07-11 保持极高的开发活跃度，过去24小时内新增 19 个 Issues 和 50 个 Pull Requests，显示出核心贡献者团队正处于密集的代码迭代期。虽然没有发布新的正式版本，但大量关于运行时稳定性（Rust 内存安全）、可观测性增强以及多模态渠道（Telegram/Web）体验优化的 PR 正在快速推进。项目整体健康度良好，技术债务清理与新功能扩展并行，特别是在解决高并发下的进程管理和工具调用参数清洗方面取得了显著进展。

## 2. 版本发布
**无新版本发布。**
当前处于 v0.8.3 相关的观察性与基础设施支持阶段（参见 Issue #8073）。

## 3. 项目进展
今日合并/关闭的关键进展主要集中在底层稳定性、容器化支持及技能管理系统的重构：

*   **运行时与进程管理优化：**
    *   **PR #8948**: 修复了基于 stdio 的 MCP 服务器在退出后成为僵尸进程的问题，通过改进资源回收机制提升了守护进程的稳定性。
    *   **PR #8931**: 解决了上游提供商（如 OpenRouter）因小模型生成的畸形 `tool_calls` 参数导致 HTTP 400 错误的问题，增强了跨提供商的兼容性。
    *   **PR #8751**: 修复了 `LocalWhisperConfig` 默认值重置为 0 的严重配置 bug，确保语音识别组件能正常加载默认阈值。

*   **容器化与部署：**
    *   **PR #8954**: 引入了基于 `cargo-zigbuild` 的多架构 Alpine/musl 镜像构建流程，显著减小了 Docker 镜像体积并提升了对 Apple Silicon 和 Proxmox 环境的支持。

*   **技能系统重构：**
    *   **PR #8638**: 移除了硬编码的 ClawHub 技能源，改用通用的 Git 目录选择器安装技能，提高了技能分发的灵活性和安全性。
    *   **PR #8957**: 将技能安装错误路径本地化（Fluent），提升了多语言用户体验。

*   **网关与插件能力：**
    *   **PR #8949**: 实现了 Webhook 的 GET 请求及挑战回显机制，完善了插件验证握手流程。
    *   **PR #8909**: 扩展了插件 API，增加了网关和仪表板的能力目录（Capability Catalog），便于外部客户端发现可用功能。

## 4. 社区热点
以下 Issue/PR 获得了较高的关注度或代表了重要的架构讨论方向：

*   **[RFC] 统一 WebSocket 协议** (Issue #8798): 提议将 `/ws/chat` 和 `/acp` 合并为单一_wire_协议。这反映了开发者对简化网关复杂度的强烈需求，目前仍在接受评审中。
*   **ACP 代理选择增强** (Issue #8958): 提出通过 URL 查询参数 `?agent=` 实现外部客户端的多代理路由，旨在提升 Thunderbolt 等第三方客户端集成的便利性。
*   **Comfy Cloud 媒体提供商支持** (Issue #6563): 用户强烈呼吁将 ComfyUI/Comfy Cloud 作为原生媒体生成提供商，以支持更复杂的图像和视频工作流。
*   **多架构 Alpine 镜像** (PR #8954): 社区对轻量级、静态链接容器的需求推动了此 PR 的快速合并，体现了对嵌入式和边缘部署场景的重视。

## 5. Bug 与稳定性
今日报告的 Bug 多为用户体验层面的退化或特定场景下的崩溃风险，部分已有对应修复 PR：

| 严重程度 | Issue ID | 描述 | 关联修复/状态 |
| :--- | :--- | :--- | :--- |
| **High (崩溃)** | #8654 | `skill-review` fork 在处理重型工具调用时发生 panic 导致 Daemon SIGSEGV。 | **未合并**：需紧急关注，可能影响生产环境稳定性。 |
| **Medium** | #5514 | Telegram 渠道发送多张图片时，Agent 重复输出消息。 | **未合并**：逻辑缺陷，需优化 Gateway 的消息聚合。 |
| **Medium** | #8950 | Telegram 命令菜单注册失败（超过 100 个命令限制）。 | **未合并**：需实现命令分组或动态注册策略。 |
| **Medium** | #8936 | `loop_detector` 对每个工具调用进行深层 JSON 克隆，导致性能损耗和 RSS 增长。 | **未合并**：建议引入引用计数或浅拷贝优化。 |
| **Low** | #8945 / #8944 | ZeroCode TUI 中 macOS 文本替换被阻断，且鼠标选区交互不佳。 | **未合并**：前端/交互层改进项。 |
| **Low** | #8810 | Telegram 文档示例错误。 | **已关联 PR #8825**：文档修正中。 |
| **Info** | #8929 / #8952 | 流式叙述文本在特定边界条件下出现重复。 | **未合并**：运行时循环逻辑微调。 |

## 6. 功能请求与路线图信号
*   **可观测性标准化：** Issue #8933 提议添加 `gen_ai.conversation.id` 以支持跨轮次会话追踪，这与 Issue #8073 (v0.8.3 observability tracker) 高度一致，预计将在 v0.8.3 中落地。
*   **细粒度资源控制：** Issue #8397 (已关闭) 和 #8677 推动了对 Cron Job 内存使用的显式配置支持，表明项目正致力于提供更精细的资源隔离策略。
*   **SOP 审批工作流：** PR #8880 引入了基于组成员资格和法定人数的审批经纪人，这是向企业级自动化治理迈出的重要一步。

## 7. 用户反馈摘要
*   **痛点：** 用户对 Telegram 渠道在多图片处理和命令数量限制上的表现感到不满（#5514, #8950）；macOS 用户在 ZeroCode 终端中的文本编辑体验较差（#8945, #8944）。
*   **期望：** 社区渴望更强大的媒体生成集成，特别是 ComfyUI（#6563）；同时希望网关协议更加简洁统一，以降低集成成本（#8798）。
*   **正面反馈：** 对 Rust 实现的类型安全和内存安全表示认可，尽管文档和某些边缘情况的处理仍需完善。

## 8. 待处理积压
*   **Issue #8654 (SIGSEGV 崩溃):** 这是一个高危 Bug，可能导致整个 Agent 进程退出。建议优先分配资源进行根因分析并修复，因为它直接威胁服务可用性。
*   **Issue #8798 (RFC 协议合并):** 虽然处于早期阶段，但一旦确定方案，将对网关架构产生深远影响。建议尽快完成评审以明确 v0.9 或 v0.8.x 后续版本的架构走向。
*   **Issue #8936 (性能优化):** 深层克隆 JSON 在长对话或多工具调用场景下是明显的性能瓶颈，虽非崩溃级 Bug，但对资源受限环境影响较大，建议纳入近期优化计划。

---
*报告生成时间：2026-07-11*
*分析师：Agnes-2.0-Flash*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*