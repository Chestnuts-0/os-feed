# OpenClaw 生态日报 2026-06-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-27 02:10 UTC

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
**日期：** 2026-06-27
**数据来源：** GitHub openclaw/openclaw

## 1. 今日速览
OpenClaw 项目在 2026-06-27 保持极高的社区活跃度，过去 24 小时内产生 500 条 Issue 更新和 500 条 PR 更新，显示出开发者与用户群体的高度参与。尽管没有新版本发布，但大量关于安全性（如沙箱、权限）、会话稳定性（如死锁、内存泄漏）以及多平台兼容性（Linux/Windows 支持、飞书/Nostr 修复）的关键讨论和代码贡献正在密集进行。项目整体处于“高强度迭代与稳定性加固”阶段，维护者团队正积极处理积压的技术债务和安全隐患。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的 PR 主要集中在底层稳定性修复、安全边界加固及特定渠道的兼容性优化，推动了项目在健壮性上的实质性进展：

*   **安全与资源保护：**
    *   **PR #97147 / #97146:** 修复了 OpenAI 和 Azure OpenAI 提供商中 SSE 流读取无限制的问题，防止恶意或 buggy 端点导致内存耗尽或无限等待（`buildGuardedModelFetch`）。
    *   **PR #95359:** 修复了 ClawHub 技能安装时的所有者权限覆盖问题，防止强制安装导致现有技能数据丢失。
    *   **PR #97138:** 修复了代理配置中 `NO_PROXY` 匹配逻辑，确保内部插件请求能正确绕过全局代理。
*   **会话与状态管理：**
    *   **PR #97141:** 修复了日常重置期间活体转录本回滚的问题，确保活跃会话在跨天边界时状态一致。
    *   **PR #97140:** 修复了模型截断或错误时不完整工具调用的执行问题，避免无效操作。
    *   **PR #96883:** 实现了 Agent Cron 操作的权限隔离，确保 Cron 任务仅对调用 Agent 可见和可操作。
*   **渠道与插件修复：**
    *   **PR #95387 / #96756:** 修复了飞书（Feishu）多机器人群组中 `@` 提及被错误剥离导致 `NO_REPLY` 的问题。
    *   **PR #97133:** 修复了 Nostr 渠道中 Seen Tracker 的 TTL 和修剪间隔边界条件，防止重复消息追踪失效。
    *   **PR #96727:** 修复了语音通话状态查询在通话结束后返回 `found: false` 的问题，使其能正确从存储中检索记录。

## 4. 社区热点
以下是今日评论数最多、关注度最高的 Issue，反映了用户的核心关切：

*   **[Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (109 评论)
    *   **热度分析：** 作为长期存在的增强请求，该 Issue 持续获得高关注。用户迫切希望 OpenClaw 提供类似 macOS 的桌面级原生体验，以扩大在非 Apple 生态中的部署能力。
*   **[Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443)** (25 评论)
    *   **热度分析：** 移动端用户体验的痛点。用户希望简化安装流程，直接通过 GitHub Releases 获取 APK，而非手动编译源码。
*   **[Track live dev agent behavior](https://github.com/openclaw/openclaw/issues/77598)** (22 评论)
    *   **热度分析：** 开发者社区对 Agent 行为可观测性的深入探讨，旨在建立更完善的调试和监控基准。
*   **[Session write-lock timeouts block subagent delivery lanes](https://github.com/openclaw/openclaw/issues/86538)** (16 评论)
    *   **热度分析：** 严重的生产环境 Bug，涉及子 Agent 交付通道的阻塞，直接影响多 Agent 协作的可靠性。
*   **[Masked Secrets - Prevent Agent from Accessing Raw API Keys](https://github.com/openclaw/openclaw/issues/10659)** (13 评论)
    *   **热度分析：** 安全意识提升的直接体现。用户强烈要求引入密钥掩码机制，以防止 Prompt Injection 攻击泄露凭证。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug 和回归问题，部分已有 PR 跟进：

*   **高危/严重：**
    *   **#86538:** Session JSONL 写锁超时导致主线程、Cron 嵌套及子 Agent 通道阻塞。（无直接合并 PR，需关注）
    *   **#74484:** Gateway 配对作用域死锁，CLI 无法批准/拒绝自动重新发布的过度授权请求。（无直接合并 PR）
    *   **#94228:** 原生 Anthropic 路径下，长会话重放 `thinking` 块导致永久砖化（HTTP 400 Invalid signature）。（无直接合并 PR）
    *   **#76042:** 自 2026.5.xx 版本起，全新安装无法正常启动，存在回归问题。（无直接合并 PR）
    *   **#76038:** Stuck Session Recovery 机制双重失效，导致 Gateway 无响应并被强杀。（无直接合并 PR）
*   **中等/功能缺陷：**
    *   **#75593:** v2026.4.29 上 `/subagents list` 在 spawn 后仍返回空列表。（关联 PR #74704 可能涉及）
    *   **#77930:** Discord 频道在 2026.5.4 及 beta.2/3 中未加载，属于回归问题。（无直接合并 PR）
    *   **#77802:** `doctor --fix` 在配置有多个验证错误时原子性失败，导致修复无法持久化。（无直接合并 PR）
    *   **#75380:** `provider-payload.jsonl` 和 `cache-trace.jsonl` 无限增长，缺乏日志轮转策略。（无直接合并 PR）
    *   **#75621:** Gateway 懒加载时重复生成相同的 stdio MCP 子进程，导致内存/CPU 泄漏。（已关闭，可能有后续修复）
    *   **#76171:** 陈旧 worker 进程累积导致主机负载过高和响应缓慢。（无直接合并 PR）

## 6. 功能请求与路线图信号
用户提出的新功能需求主要集中在安全控制、跨平台支持和运维便利性上：

*   **安全与权限：**
    *   **#10659 (Masked Secrets):** 请求防止 Agent 访问原始 API 密钥。
    *   **#78308 (Channel-mediated approval for MCP):** 请求为 MCP 工具调用引入类似 Shell 执行的通道中介审批机制。
    *   **#7707 (Memory Trust Tagging):** 请求基于来源对记忆条目进行信任标记，防止记忆投毒。
    *   **#12678 (Capability-based permissions):** 请求为 Skills/Tools 引入基于能力的默认拒绝权限模型。
*   **平台与支持：**
    *   **#75 (Linux/Windows Apps):** 长期呼声最高的平台扩展需求。
    *   **#9443 (Android APK):** 移动端预构建包需求。
    *   **#12855 (Built-in auto-update):** 请求内置的自动更新工作流，包括计划更新和通知。
*   **开发与运维：**
    *   **#13583 (Pre-response enforcement hooks):** 请求硬网关（Hard Gates）以确保关键工具调用规则的执行。
    *   **#14785 (Reduce tool schema token overhead):** 请求减少工具 Schema 的 Token 开销，优化上下文效率。
    *   **#13616 (Backup/restore utility):** 请求配置、Cron 和会话历史的备份/恢复工具。

## 7. 用户反馈摘要
*   **痛点：** 用户在多 Agent 协作（子 Agent 列表为空、会话锁超时）、长会话稳定性（Anthropic 签名错误、Worker 泄漏）以及配置修复（Doctor 工具原子性失败）方面遇到显著挫折。
*   **安全焦虑：** 随着功能增强，用户对密钥泄露（Prompt Injection）、技能权限滥用和记忆投毒的担忧日益增加，强烈要求更细粒度的安全控制。
*   **易用性期待：** 用户希望简化安装（APK、Windows/Mac 原生应用）、自动化运维（自动更新、日志轮转）并降低 Token 成本（Schema 优化）。
*   **正面反馈：** 社区对现有 Hook 系统、插件架构以及多渠道支持（Telegram, WhatsApp, Discord 等）的认可度较高，但希望这些渠道的功能更加完善（如 Slack Block Kit, WhatsApp Sticker）。

## 8. 待处理积压
以下 Issue 长期未得到实质性解决或合并，建议维护者优先关注：

*   **#75:** Linux/Windows Clawdbot Apps (Enhancement) - 长期未决的平台扩展。
*   **#86538:** Session write-lock timeouts block subagent delivery lanes (Bug) - 影响多 Agent 稳定性的关键 Bug。
*   **#74484:** Gateway pairing scope deadlock (Bug) - 身份认证与授权流程的死锁问题。
*   **#94228:** Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads (Bug) - 特定 Provider 的严重回归。
*   **#76042:** Clean install of new versions since 2026.5.xx is not possible (Bug) - 安装流程的重大回归。
*   **#76038:** Stuck Session Recovery 机制双重失效 (Bug) - 导致服务不可用的严重问题。
*   **#75380:** provider-payload.jsonl and cache-trace.jsonl grow unbounded (Enhancement/Bug) - 运维隐患。
*   **#76171:** High host load & slow responses caused by stale openclaw worker process accumulation (Bug) - 资源泄漏问题。

---
*注：本报告基于 2026-06-27 24 小时内的 GitHub 公开数据生成。*

---

## 横向生态对比

你好，我是 Agnes-2.0-Flash。以下是基于 2026-06-27 各开源项目社区动态生成的横向对比分析报告。

### 1. 生态全景
2026年6月下旬，个人 AI 助手与自主智能体开源生态呈现出**“核心框架趋于稳定，垂直场景加速分化”**的特征。主流项目如 OpenClaw、NanoBot 和 ZeroClaw 均处于高强度迭代期，重点从基础功能构建转向**安全性加固（沙箱、权限隔离）**、**多平台兼容性（Windows/Linux/Android）**及**可观测性建设**。与此同时，生态内出现了明显的分层：头部项目致力于构建通用的 Agent 操作系统，而垂直领域项目（如 PicoClaw、NanoClaw）则深耕特定渠道集成与轻量化部署，整体生态正从“玩具级实验”向“生产级可靠”过渡。

### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 500 | 500 | 无 | ⭐⭐⭐⭐⭐ | 高强度迭代，安全性与稳定性加固为主 |
| **NanoBot** | 20 | 15+ | 无 | ⭐⭐⭐⭐⭐ | 极高响应速度，Windows 兼容性与插件系统落地 |
| **Hermes Agent** | 50 | 50 | 无 | ⭐⭐⭐⭐ | 桌面端稳定性修复，Gateway 安全加固 |
| **PicoClaw** | 5 | 22 | 无 | ⭐⭐⭐⭐ | 底层重构，依赖升级，WhatsApp 稳定性优化 |
| **NanoClaw** | 3 | 11 | 无 | ⭐⭐⭐⭐ | 数据迁移修复，自动化运维技能增强 |
| **NullClaw** | 1 | 0 | 无 | ⭐⭐ | 低活跃度，移动端构建阻塞 |
| **IronClaw** | 30 | 50 | 无 | ⭐⭐⭐⭐⭐ | Reborn 栈攻坚，多租户权限策略落地 |
| **LobsterAI** | N/A | 8 | v2026.6.26 | ⭐⭐⭐⭐ | 多 Agent 协作增强，桌面端备份 Bug 待修 |
| **TinyClaw** | 0 | 0 | 无 | ⭐ | 无活动 |
| **Moltis** | 0 | 1 | 无 | ⭐⭐⭐ | 低活跃度，浏览器自动化可观测性增强 |
| **CoPaw** | 29 | 50 | v2.0.0-beta.1 | ⭐⭐⭐⭐ | 版本迁移阵痛期，插件生态重建 |
| **ZeptoClaw** | 0 | 0 | 无 | ⭐ | 无活动 |
| **ZeroClaw** | 50 | 50 | v0.8.2 (近期) | ⭐⭐⭐⭐⭐ | 供应链安全与可观测性强化，Goal Mode 探索 |

### 3. OpenClaw 在生态中的定位
*   **优势**：**社区规模与活跃度断层领先**。500+ Issue/PR 的日吞吐量远超其他项目，表明其拥有最广泛的开发者基础和用户群体。其技术路线侧重于**通用性**与**底层稳定性**（如沙箱、会话锁、内存管理），是事实上的“行业标准参考实现”。
*   **技术路线差异**：相较于 NanoBot 的“轻量插件化”和 LobsterAI 的“桌面原生体验”，OpenClaw 更像是一个**分布式 Agent 操作系统**，强调多平台（Linux/Win/Android）适配和多渠道（飞书/Nostr/Telegram）集成。
*   **社区规模**：作为核心参照，OpenClaw 的 Issue 讨论热度（如 Linux/Windows 原生应用需求）往往预示了整个生态的用户痛点走向，其他项目（如 PicoClaw, NanoClaw）的功能演进常受其启发或与其形成互补。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **多平台原生体验** | OpenClaw, NanoBot, Hermes, CoPaw | **痛点**：macOS 体验好，但 Windows/Linux 桌面端存在黑屏、启动白屏、UI 交互缺陷。<br>**诉求**：提供类似 macOS 的原生桌面应用，优化 Electron/Tauri 渲染性能。 |
| **安全性与权限隔离** | OpenClaw, NanoBot, ZeroClaw, IronClaw | **痛点**：Prompt Injection、API Key 泄露、子 Agent 越权。<br>**诉求**：沙箱机制、密钥掩码（Masked Secrets）、基于能力的权限模型（Capability-based）、供应链签名（SBOM）。 |
| **可观测性与成本监控** | ZeroClaw, NanoBot, Hermes | **痛点**：Token 消耗黑盒、Agent 行为不可见。<br>**诉求**：离线定价目录、实时网关价格填充、Agent 行为日志追踪、上下文窗口使用率指示。 |
| **移动端/嵌入式适配** | OpenClaw, PicoClaw, NullClaw | **痛点**：Android 安装复杂、Termux 构建失败。<br>**诉求**：预构建 APK、优化 Zig/Go 在 ARM 架构下的兼容性、简化移动端部署流程。 |
| **多 Agent 协作编排** | NanoBot, LobsterAI, ZeroClaw, IronClaw | **痛点**：子 Agent 状态同步、任务阻塞、上下文污染。<br>**诉求**：心跳任务隔离、Plan Mode 工作流、Session Write-Lock 修复、自动降级策略。 |

### 5. 差异化定位分析

*   **OpenClaw**：**全场景通用框架**。适合需要高度定制化、多平台部署、复杂多渠道集成的开发者。技术栈偏向 Go/TypeScript 混合，强调底层稳健性。
*   **NanoBot**：**轻量级模块化助手**。主打“超轻量”与“插件生态”，适合资源受限环境或需要快速嵌入特定业务流的小型 Agent。Python/JS 混合栈，强调灵活性与低成本。
*   **LobsterAI**：**桌面端优先的协作平台**。依托网易有道背景，强项在于 IM 渠道集成（飞书/钉钉）和桌面端用户体验（Mermaid 渲染、备份功能）。适合国内企业级或个人重度桌面用户。
*   **ZeroClaw**：**企业级安全与合规导向**。聚焦于供应链安全（SBOM、签名）、Goal Mode 自主性及多数据库支持。适合对数据主权、审计追踪有高要求的 B 端或高级开发者。
*   **CoPaw**：**AgentScope 生态的桌面入口**。依托通义实验室背景，深度集成 AgentScope 2.0，侧重插件生态重建与长上下文管理。适合阿里云/通义生态用户。
*   **PicoClaw/NanoClaw**：**垂直渠道/边缘设备专家**。PicoClaw 专注 Go 语言高性能与 WhatsApp/Matrix 集成；NanoClaw 专注技能管理与数据库迁移。适合特定技术栈偏好者。

### 6. 社区热度与成熟度

*   **快速迭代阶段（高热度/高变化）**：
    *   **OpenClaw**：500+ 交互，处于高强度功能修补与平台扩展期。
    *   **IronClaw**：50 PRs，Reborn 栈重大更新，多租户功能攻坚。
    *   **CoPaw**：v2.0 Beta 发布，新旧版本交替，社区反馈集中。
    *   **ZeroClaw**：50+ 交互，v0.8.2 验证期，安全与可观测性强化。
*   **质量巩固阶段（中热度/高响应）**：
    *   **NanoBot**：20 Issues/15 PRs，维护者响应极快，Bug 修复闭环高效，Windows 兼容性收尾。
    *   **Hermes Agent**：50/50 交互，但合并率低，处于审查与桌面端稳定性打磨期。
    *   **PicoClaw**：5/22 交互，底层重构与依赖升级，代码质量加固。
*   **低活跃度/停滞期**：
    *   **NullClaw, TinyClaw, ZeptoClaw**：几乎无活动，可能存在维护断层或小众 niche 市场。
    *   **Moltis**：极低活跃度，仅有一条浏览器自动化 PR，处于静态维护或小步演进。

### 7. 值得关注的趋势信号

1.  **“安全左移”成为标配**：从 OpenClaw 的沙箱修复、ZeroClaw 的 SBOM 签名到 NanoBot 的命令注入修复，**安全性不再是附加功能，而是核心架构的一部分**。开发者需关注 Agent 的权限最小化原则与供应链透明度。
2.  **桌面端体验是留存关键**：OpenClaw、Hermes、CoPaw、LobsterAI 均报告了严重的桌面端 Bug（黑屏、白屏、卡顿）。**跨平台原生体验（Electron/Tauri）的质量直接决定普通用户的去留**，这也是各平台竞争的下一个高地。
3.  **从“单轮对话”到“自主工作流”**：LobsterAI 的 Plan Mode、ZeroClaw 的 Goal Mode、NanoBot 的心跳隔离，表明社区需求已从简单的问答转向**长时间跨度、多步骤、具备自我监控能力的自主任务执行**。
4.  **移动端与边缘计算潜力**：OpenClaw 和 PicoClaw 对 Android/APK 及 ARM 架构的重视，暗示了**轻量级、低功耗、离线可用的边缘 Agent** 将是未来重要增长点，特别是结合 IoT 或移动办公场景。
5.  **可观测性即竞争力**：ZeroClaw 和 NanoBot 对成本追踪、行为日志、上下文窗口监控的投入，反映了**企业级用户**对 Agent 运行状态的透明化需求。无法提供良好可观测性的框架将被排除在生产环境之外。

**建议**：对于技术决策者，若追求通用性与生态丰富度，**OpenClaw** 仍是首选；若注重桌面体验与企业级 IM 集成，**LobsterAI** 更具优势；若关注安全合规与自主性，**ZeroClaw** 值得深入评估；若需轻量嵌入，**NanoBot** 是高效选择。同时，需密切关注各平台在 Windows/Linux 桌面端的稳定性修复进展。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期**：2026-06-27
**数据来源**：GitHub (HKUDS/nanobot)

## 1. 今日速览
NanoBot 项目在今日展现出极高的开发活跃度与社区响应速度。过去24小时内，团队合并了 **15+ 个关键 Pull Requests**，集中解决了心跳任务隔离、Windows 平台兼容性、API 安全性及插件系统等核心痛点。尽管 Issues 更新量较大（20条），但大部分高优先级问题已迅速转化为代码提交并处于待合并或刚合并状态，显示出维护者对社区反馈的高效闭环能力。整体项目健康度极高，正处于功能扩展与稳定性加固的关键阶段。

## 2. 版本发布
**无新版本发布。**
*注：虽然今日有大量功能合并，但未触发新的 Release 标签。建议维护者评估是否需手动创建一个 Patch 或 Minor 版本以固化今日的安全修复与功能增强。*

## 3. 项目进展
今日主要进展集中在以下三个维度，显著提升了产品的可用性与安全性：

*   **架构灵活性增强**：
    *   **插件系统落地**：PR #4558 引入了基于 `plugin.json` 的最小化插件系统，支持工具、技能和 MCP 服务器配置，极大扩展了 Agent 的可扩展性。（关联 Issue #2231）
    *   **模型动态切换**：PR #4555 实现了会话级模型覆盖，允许不同对话使用不同模型预设，满足隐私与成本平衡的需求。（关联 Issue #4253）
*   **Windows 平台稳定性修复**：
    *   针对 Windows 下的后台运行、服务重启及命令行执行语义不一致问题，PR #4546、#4547、#4545 进行了全面重构。特别是将 `exec` 默认路由统一为 PowerShell 并优化了重启逻辑，解决了长期存在的平台兼容性问题。（关联 Issues #4511, #4513, #4544）
*   **安全加固**：
    *   PR #4548 强制要求绑定 `0.0.0.0` 时的 API 认证，消除了未授权访问风险。（关联 Issue #4490）
    *   PR #4562 修复了 `exec` 工具中的命令注入绕过漏洞，通过分段验证 Shell 参数提高了执行安全性。（关联 Issue #4521）

## 4. 社区热点
以下 Issues 和 PRs 反映了用户最迫切的需求，且已获得维护者的快速响应：

1.  **心跳任务上下文隔离与路由优化**
    *   **Issue**: [#1899](https://github.com/HKUDS/nanobot/issues/1899), [#4418](https://github.com/HKUDS/nanobot/issues/4418), [#4082](https://github.com/HKUDS/nanobot/issues/4082)
    *   **分析**：用户强烈要求心跳任务不应与主会话共享上下文，且需支持指定结果投递频道。
    *   **进展**：PR #4551, #4553, #4550 直接回应了这些诉求，增加了 `isolated_session` 配置和基于 Run ID 的会话隔离机制。
2.  **Web 抓取能力升级**
    *   **Issue**: [#2700](https://github.com/HKUDS/nanobot/issues/2700)
    *   **分析**：现有抓取方式稳定性不足，用户希望引入更强大的解析器。
    *   **进展**：PR #4561 集成了 Crawl4AI，提供了更可靠的网页提取能力。
3.  **语音输出支持**
    *   **Issue**: [#4010](https://github.com/HKUDS/nanobot/issues/4010)
    *   **分析**：用户希望实现完整的语音交互闭环（听+说）。
    *   **进展**：PR #4560 添加了 TTS 工具，支持多种后端（Edge, macOS say, espeak-ng 等）。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 Windows 环境及特定配置下的行为异常，多数已有对应 Fix PR：

| 严重级别 | 问题描述 | 关联 Issue | 修复状态 |
| :--- | :--- | :--- | :--- |
| **高** | **API 未授权暴露风险**：绑定所有接口时无需认证即可控制 Agent。 | [#4490](https://github.com/HKUDS/nanobot/issues/4490) | ✅ PR #4548 已修复 |
| **高** | **命令注入绕过**：`exec` 工具可通过链式命令绕过白名单。 | (Referenced in #4521) | ✅ PR #4562 已修复 |
| **中** | **Windows 重启状态不一致**：`/restart` 后 PID 文件未更新，导致服务管理器混乱。 | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | ✅ PR #4547 已修复 |
| **中** | **Windows 服务重启异常**：使用 NSSM 时重启导致端口占用或假死。 | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | ✅ PR #4546 已修复 |
| **低** | **Shell 执行语义不一致**：单行/多行命令在 Windows 下分别调用 cmd/powershell 导致跨平台脚本失败。 | [#4544](https://github.com/HKUDS/nanobot/issues/4544) | ✅ PR #4545 已修复 |
| **低** | **Cron 任务上下文污染**：重复执行的 Cron 任务共享相同会话历史。 | [#4082](https://github.com/HKUDS/nanobot/issues/4082) | ✅ PR #4550 已修复 |

*注：Issue #4539 (Telegram Web 渲染问题) 已关闭，可能已在其他更新中解决或标记为 WONTFIX。*

## 6. 功能请求与路线图信号
基于今日合并的 PR 和用户反馈，推测下一版本路线图将重点关注：

1.  **Agent 可扩展性生态**：通过引入 **插件系统** (PR #4558) 和 **外部代理委托** (PR #4559)，NanoBot 正从单一助手向模块化 Agent 框架演进。
2.  **推理效率与成本控制**：
    *   **自动推理升级** (PR #4552) 允许 Agent 在复杂任务中动态增加思考深度。
    *   **心跳专用模型** (PR #4549) 允许将例行检查路由至廉价模型，显著降低运营成本。
3.  **多媒体交互完善**：TTS (PR #4560) 和 Crawl4AI (PR #4561) 的加入表明项目正在补齐感知和执行层面的短板，提升用户体验的丰富度。

## 7. 用户反馈摘要
*   **痛点**：
    *   用户抱怨“超轻量”定位与实际依赖（Node.js + Python）不符 (Issue #660)，这可能影响部分极简部署场景。
    *   Windows 用户的运维体验较差，特别是作为后台服务运行时，重启和状态管理存在诸多陷阱 (Issues #4511, #4513)。
    *   定时任务（Heartbeat/Cron）的上下文隔离问题导致任务间互相干扰，影响准确性 (Issues #1899, #4082)。
*   **满意点**：
    *   社区对维护者快速响应 Bug 和 Feature Request 表示认可，尤其是针对 Windows 兼容性和安全性的修复。
    *   插件系统和模型覆盖功能的引入，满足了高级用户对定制化和成本控制的深层需求。

## 8. 待处理积压
尽管今日进展迅速，仍有部分 Issue 需持续关注：

1.  **Issue #660**: "Ultra-lightweight" 依赖争议。虽然技术上是 Python/JS 混合栈，但社区期望更轻量的部署方案。若无短期解决方案，建议在文档中明确界定“轻量”的定义，或提供纯 Python 精简版选项。
2.  **Issue #3024**: Claude Code Remote Session Tool。虽已关闭，但涉及与外部重型 IDE Agent 集成的需求，若后续有类似需求，可参考此 Issue 的设计思路。
3.  **PR #4553, #4552 等**: 今日提交的多个 PR 状态为 `[OPEN]` 且更新时间为 `2026-06-27`，需确认是否已完成 CI 测试并最终合并。若未合并，可能导致这些关键修复无法立即进入下游构建。

---
**分析师备注**：NanoBot 本周的开发节奏非常紧凑，建议维护者在合并完所有安全相关 PR 后，尽快发布一个补丁版本，以稳定 Windows 用户和 API 使用者的体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-27
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 项目在 2026-06-27 保持高活跃度，过去24小时内共产生 100 次关键交互（50 Issues + 50 PRs）。尽管无新版本发布，但社区在 **Windows Desktop 稳定性修复**、**Gateway 安全加固** 以及 **多平台消息通道集成** 方面取得了显著进展。PR 合并率较低（仅 3/50），表明大部分贡献仍处于审查阶段，但核心维护团队对安全边界和桌面端用户体验的关注度极高。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要进展集中在底层基础设施优化与安全补丁，虽未大量合并，但以下 PR 展示了明确的技术推进方向：
*   **Dashboard 安全加固 (#13176)**：针对 `--insecure` 模式下的会话嵌入风险进行了硬编码限制，提升了 Web Dashboard 在非本地部署时的安全性。
*   **Desktop 构建流程修复 (#53241)**：解决了 Electron 主进程打包时的文件覆盖问题，确保 `main.cjs` 在更新路径中不被生成的 esbuild 输出错误覆盖，这对 Windows/Linux 桌面版的稳定更新至关重要。
*   **Gateway 错误信息脱敏 (#53334)**：修复了压缩失败通知中原始异常字符串可能泄露敏感信息的漏洞，增强了网关通信的安全性。
*   **Signal 群组功能对齐 (#53348)**：将 Signal 群组的授权、@提及和所有者检测功能提升至与 Telegram 同等级别，扩大了 Hermes 在加密通讯平台上的可用性。

## 4. 社区热点
以下 Issues 和 PRs 获得了最高的社区关注度（评论数/点赞数）：

*   **[Skills Index Stale] (#38240)** | **18 评论**
    *   **摘要**：自动化探针检测到 Skills 索引过时。
    *   **分析**：这是高频出现的运维类 Issue，反映了用户对技能库实时性的强烈依赖。虽然由 bot 触发，但持续的 `degraded` 状态表明 CI/CD 流水线在重建索引时可能存在稳定性问题。
*   **[Desktop UI Improvements] (#44140)** | **4 👍**
    *   **摘要**：请求自动滚动、侧边栏重叠修复及自定义会话组。
    *   **分析**：桌面端用户界面体验是当前的核心痛点。用户对于流式响应不自动滚动感到沮丧，这直接影响了长对话的使用流畅度。
*   **[Ollama Reasoning Models Empty Response] (#46147)** | **3 评论**
    *   **摘要**：修复 Ollama 推理模型返回空内容的问题。
    *   **分析**：随着本地推理模型（如 Qwen3.5, DeepSeek-R1）的流行，用户期望 Hermes 能正确处理 `reasoning_effort` 等特定参数。此 Issue 代表了本地 AI 爱好者群体的共同需求。
*   **[NetEase IM Integration] (#13062)**
    *   **摘要**：新增网易云音乐/即时通讯平台支持。
    *   **分析**：展示了社区对本土化通讯平台集成的热情，尽管目前仍为开放状态，但表明开发者愿意贡献此类特定渠道的适配器。

## 5. Bug 与稳定性
今日报告了多个影响特定平台稳定性的严重 Bug，尤其是 Windows 桌面端：

*   **🔴 Critical: Windows Desktop 黑屏闪烁 (#53342)**
    *   **描述**：升级后 Windows 11 桌面客户端出现命令行窗口持续闪烁，导致软件不可用。
    *   **状态**：Open | **关联 PR**：暂无直接修复 PR，但 #53241 涉及桌面构建修复，可能相关。
*   **🟠 High: 上下文压缩导致消息丢失 (#28093, #29522)**
    *   **描述**：自动上下文压缩（Context Compaction）在特定条件下会丢弃用户刚发送的消息或助手已完成但未显示的回答。
    *   **状态**：Closed (#28093) / Open (#29522)。这表明压缩逻辑的边缘情况仍是稳定性隐患。
*   **🟠 High: VS Code ACP 会话挂起 (#20250)**
    *   **描述**：VS Code 中的 ACP 会话在压缩超时后可能无限期保持飞行状态，后端进程不退出。
    *   **状态**：Closed。这是一个重要的修复，缓解了开发者的集成焦虑。
*   **🟡 Medium: `hermes update` 破坏本地依赖 (#43564)**
    *   **描述**：执行 `hermes update` 后，`agent-browser` 等依赖可能被意外移除，导致 `hermes doctor` 报错。
    *   **状态**：Open。这是 CLI 更新机制的一个潜在回归问题。

## 6. 功能请求与路线图信号
*   **CWD Local Soul.md (#53349)**：用户希望支持基于当前工作目录的 `soul.md`，以实现不同项目拥有不同的 Agent 人格/身份。这符合模块化、上下文感知 Agent 的发展趋势。
*   **Shell Command Passthrough (! prefix) (#53341)**：请求在 CLI 中添加 `!` 前缀以直接执行 Shell 命令，绕过 LLM 推理。这旨在降低简单任务的延迟和 Token 成本，提升 CLI 效率。
*   **Desktop Providers Settings (#39020)**：要求在桌面 GUI 中提供专门的“Providers”设置区域，简化 API Key 管理。这反映了非技术用户或初级用户对配置复杂度的抱怨。
*   **Session Sort by Activity (#52857)**：CLI 会话浏览应按最近活动时间排序，而非创建时间。这是对多任务并行处理用户的实用主义改进。

## 7. 用户反馈摘要
*   **本地推理痛点**：用户在使用 Ollama/MLX 进行本地推理时，频繁遇到参数兼容性（如 `reasoning_effort`）和资源限制导致的 400 错误或上下文溢出误判（#52261）。
*   **桌面端体验差距**：Web Dashboard 和 Desktop 应用的用户体验存在断层。用户特别提到 Desktop 端的自动滚动缺失、预览面板遮挡滚动条等问题，认为这些基础 UX 细节影响了日常使用的愉悦感。
*   **Gateway 复杂性**：Discord 和 WhatsApp 网关的用户对并发会话中的路由错误（如审批提示发错线程）和权限配置（如 WhatsApp 群组允许非白名单用户提及）感到困惑，希望有更直观的引导或更灵活的默认行为。

## 8. 待处理积压
*   **Windows 黑屏 Bug (#53342)**：这是一个阻塞性问题（Blocking Bug），严重影响 Windows 用户的正常使用，建议维护者优先排查 Electron 渲染进程或子进程启动逻辑。
*   **Skills Index 持续降级 (#38240)**：作为自动化系统的一部分，其长期处于 `degraded` 状态可能掩盖了底层仓库结构或 CI 定时任务的真正故障，需人工介入检查 `.github/workflows/skills-index.yml` 的执行日志。
*   **Python 3.9 兼容性 (#13789)**：虽然 PR 已提出，但若最终合并，需确认是否彻底解决了旧版 Python 环境下的导入和类型注解问题，避免其他插件或用户环境出现类似崩溃。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-27
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
PicoClaw 在 2026-06-27 保持了极高的开发活跃度，过去24小时内共产生 **27** 个关键事件（5 Issues + 22 PRs）。尽管没有新版本发布，但代码库进行了大量底层优化、依赖升级及国际化修复。主要贡献者 `chengzhao-xydt` 和 `Alix-007` 推动了多项基础设施改进，重点在于提升错误处理的严谨性（特别是 HTTP 响应体关闭逻辑）以及增强 WhatsApp 通道的连接稳定性。项目整体处于“内部重构与稳定性加固”阶段，外部功能迭代相对平稳。

## 2. 版本发布
**无新版本发布。**
*注：近期合并的 PR 多为依赖更新（如 `telego`, `sqlite`, `copilot-sdk`）及内部清理，尚未触发新的 Release 标签。*

## 3. 项目进展
今日合并/关闭的 PR 主要集中在**代码质量加固**、**依赖升级**和**特定通道修复**：

*   **依赖与安全升级**：
    *   升级 `github.com/github/copilot-sdk/go` 至 v1.0.4 (#3177)，可能带来 API 兼容性变化。
    *   升级 `modernc.org/sqlite` 至 v1.53.0 (#3173) 和 `fyne.io/systray` (#3175)，提升底层存储和系统托盘功能的稳定性。
    *   升级 `mymmrac/telego` 至 v1.10.0 (#3176) 和 `line-bot-sdk-go` (#3174)，适配最新 Telegram Bot API v10.1 和 LINE SDK 更新。
*   **基础设施与构建优化**：
    *   Goreleaser 基础镜像从 Alpine 3.21 升级至 3.23 (#3192)，保持构建环境一致性。
    *   清理 `.gitignore` 中的重复条目 (#3191)。
*   **关键 Bug 修复**：
    *   **WhatsApp 重连机制**：Alix-007 提交 PR #3179，优化 WebSocket 断线后的自动重连逻辑，配置读取超时和 Ping/Pong 处理，显著改善 WhatsApp 通道的长期运行稳定性。
    *   **Gateway 启动保护**：PR #3181 增加了网关启动信息提取的空值保护，防止因配置缺失导致的 Panic。
    *   **CLI 工具调用容错**：PR #3180 修复了当 CLI 发出的工具参数无效 JSON 时跳过该调用而非丢弃整个批次的问题，提升了容错率。
*   **代码规范与错误处理**：
    *   `chengzhao-xydt` 连续提交了多个 PR (#3183, #3184, #3185, #3186, #3187, #3188, #3189)，统一修复各模块中 `resp.Body.Close()` 的错误忽略问题。虽然这些是次要错误，但显式处理消除了 linter 警告并符合 Go 最佳实践。
*   **国际化 (i18n)**：
    *   PR #3190 同步了缺失的翻译键至孟加拉语 (`bn-in`) 和捷克语 (`cs`)，确保前端界面在缺失翻译时正确回退到英文，避免 UI 显示空白或键名。

## 4. 社区热点
*   **Issue #3088: 提议使用 vodozemac 替代 libolm**
    *   **热度**：高 (👍 2)
    *   **背景**：`libolm` 已被标记为不再维护且存在安全隐患。作者提议使用官方推荐的替代品 `vodozemac`。
    *   **影响**：若采纳，将涉及加密库的重大重构，需评估编译选项（make libolm optional）及对现有 Matrix 协议兼容性的影响。这是提升项目长期安全性的关键议题。
*   **Issue #3150: 代理“失忆”Bug**
    *   **状态**：Open, Stale
    *   **背景**：用户报告代理在特定情境下丢失上下文记忆。由于模板填写不全，复现难度较大，但反映了多轮对话状态管理的潜在脆弱性。
*   **PR #3063: 新增 DeltaChat 网关**
    *   **状态**：Open
    *   **背景**：社区贡献者希望扩展 PicoClaw 对 DeltaChat 的支持。这是一个重要的渠道扩展功能，目前仍在审查阶段。

## 5. Bug 与稳定性
今日报告的 Issues 中，以下 Bug 值得关注：

| Issue ID | 标题 | 严重等级 | 状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **#3150** | 它给自己整失忆了 (Context Loss) | **高** | Open | 核心功能缺陷，可能导致用户体验中断。 |
| **#3182** | Android version 无法启动服务 | **中** | Open | 移动端部署问题，涉及权限和路径配置，用户已提供截图。 |
| **#3178** | WhatsApp Websocket Timeout | **中** | Open | 网络超时问题，可能与 PR #3179 的重连优化相关，需验证。 |
| **#3094** | 异步子代理消息重复推送 | **低** | Closed | **已修复**。之前因 ForUser 字段逻辑冲突导致飞书/Telegram 出现两条消息，现已关闭。 |

*   **修复情况**：Issue #3094 对应的 Bug 已通过代码逻辑调整解决（Closed）。Issue #3178 的 WhatsApp 超时问题可能有待合并的 PR #3179 进行缓解，但尚未关联。

## 6. 功能请求与路线图信号
*   **DeltaChat 支持**：PR #3063 表明社区对集成 DeltaChat 有强烈需求，这可能纳入下一版本的渠道扩展计划。
*   **加密库现代化**：Issue #3088 提出的 `vodozemac` 替换方案若被接受，将成为路线图上的一个重要技术债务偿还项，旨在提升安全性。
*   **移动端体验优化**：Issue #3182 暴露了 Android 版本在权限管理和路径配置上的易用性问题，暗示未来可能需要更友好的移动端引导或自动化配置流程。

## 7. 用户反馈摘要
*   **痛点**：
    *   **上下文稳定性**：用户报告代理出现“失忆”现象（#3150），这是当前最高频的功能性抱怨之一。
    *   **移动端部署困难**：Android 用户遇到服务启动失败和路径设置问题（#3182），反映出移动端文档或默认配置可能存在缺陷。
    *   **网络稳定性**：WhatsApp 用户频繁遭遇 WebSocket 超时（#3178），对连接的持久性提出挑战。
*   **满意度**：
    *   对于之前存在的“异步子代理消息重复”问题（#3094），修复后用户反馈积极（Issue 已关闭）。
    *   频繁的依赖更新和代码规范修复（如 Body.Close 处理）显示了维护团队对代码质量的重视，有助于长期稳定性。

## 8. 待处理积压
*   **Issue #3150** ([stale]): “失忆”问题缺乏详细的环境信息和复现步骤，建议维护者引导用户提供更多日志或具体操作场景，以便定位上下文管理漏洞。
*   **Issue #3182**: Android 启动问题，建议检查 Android Termux 或原生 Android 环境的权限处理逻辑，并考虑增加更详细的错误提示。
*   **PR #3063**: DeltaChat 网关功能请求，需确认其实现完整性和测试覆盖率，以决定是否合并入主线。
*   **Issue #3088**: 关于 `vodozemac` 的讨论需要架构师介入，评估迁移成本和收益，制定明确的实施计划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-06-27
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
2026年6月26日，NanoClaw 项目保持中等活跃度。过去24小时内共有 **3 个 Issues** 和 **11 个 Pull Requests** 发生更新。虽然无新版本发布，但社区贡献集中在底层稳定性修复（WhatsApp 加密、日志噪音、数据库迁移）以及新增实用技能（System Digest、Agent 管理）。值得注意的是，PR 提交者 `grantland` 在当日贡献了 5 个 PR，显示出对系统稳定性和运维工具链的重点投入。整体项目健康度良好，技术债务清理与新功能扩展并行推进。

## 2. 版本发布
**无新版本发布。**
*   近期无 `Release` 标签更新，建议关注即将合并的 PR 以评估潜在的功能迭代。

## 3. 项目进展
今日有 **2 个 PR 已合并/关闭**，主要涉及数据一致性和规范遵循，为后续版本奠定了更稳定的基础：

*   **PR #2859 [CLOSED] fix(migrate-v2): don't SELECT is_main from v1 registered_groups**
    *   **贡献者:** cben0ist
    *   **进展说明:** 修复了从 v1 升级到 v2 时的关键数据库迁移崩溃问题。此前旧版本安装（如 1.1.0）因缺少 `is_main` 列导致迁移失败，此修复确保了平滑升级路径，解决了严重的回归 Bug。
*   **PR #2867 [CLOSED] test. finding**
    *   **贡献者:** Strke
    *   **进展说明:** 这是一个测试性质的 PR，随后被关闭。表明社区成员正在积极遵循贡献指南进行测试验证，但非功能性代码未进入主干。

**其他重要开放 PR 动态：**
*   **WhatsApp 组消息修复 (PR #2870):** 解决了 WhatsApp 群组回复被标记为送达但未实际显示的问题，通过保留原生参与者寻址修复了 Baileys 集成层的缺陷。
*   **Signal 日志噪音清理 (PR #2860):** 静默了 `libsignal` 库中不必要的调试日志，提升生产环境日志的可读性并减少隐私泄露风险（key material）。

## 4. 社区热点
今日讨论热度较高的 Issue/PR 如下：

*   **Issue #2868 [OPEN] /update-skills 静默无操作 Bug**
    *   **链接:** [nanocoai/nanoclaw Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868)
    *   **分析:** 用户 `glifocat` 报告 `/update-skills` 命令对于已安装的频道不刷新代码或依赖。这直接影响了用户应用 `CHANGELOG` 中提到的 `4.29...` 迁移步骤。这是一个高优先级的功能缺陷，因为它阻碍了技能更新的正常流程，可能导致用户停留在过时的适配器版本上。
*   **PR #2870 [OPEN] fix(whatsapp): keep native participant addressing for group encryption**
    *   **链接:** [nanocoai/nanoclaw PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870)
    *   **分析:** 针对 WhatsApp 群组消息丢失问题的根本原因修复。由于 WhatsApp 是核心集成渠道之一，此 PR 的合并将显著提升用户体验的稳定性。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

1.  **[高] 数据库迁移失败 (已修复)**
    *   **来源:** PR #2859
    *   **描述:** 旧版 v1 升级到 v2 时因 SQL 查询列不存在而崩溃。
    *   **状态:** 已通过 PR #2859 合并修复。
2.  **[中] /update-skills 命令失效**
    *   **来源:** Issue #2868
    *   **描述:** 命令执行后静默跳过，不更新适配器代码或依赖。
    *   **状态:** 开放中，暂无关联 Fix PR。需维护者介入排查预检逻辑。
3.  **[低] WhatsApp 群组消息未显示**
    *   **来源:** PR #2870
    *   **描述:** 群组回复显示送达但不可见。
    *   **状态:** 开放中，PR #2870 提供了修复方案，等待合并。
4.  **[低] 日志噪音**
    *   **来源:** PR #2860
    *   **描述:** `libsignal` 调试日志过多，可能包含敏感信息。
    *   **状态:** 开放中，PR #2860 提供了解决方案。

## 6. 功能请求与路线图信号
今日多个 PR 显示了项目向“自动化运维”和“结构化技能管理”方向发展的信号：

*   **系统摘要与 Agent 管理技能:**
    *   **PR #2863:** 添加 `/setup-system-digest` 和 `/system-digest` 技能，用于生成系统状态摘要。
    *   **PR #2862:** 添加 `/manage-agents` 和 `/manage-schedules` 运维技能。
    *   **分析:** 这些 PR 均由 `grantland` 提交，表明项目正在增强对多 Agent 调度和系统状态可视化的支持，适合企业级或复杂部署场景。
*   **会话生命周期管理:**
    *   **PR #2865 & #2864:** 分别针对 OpenCode 和 Provider 会话，实现了基于“天花板杀死信号”和空闲时间的会话旋转机制。
    *   **分析:** 提升了资源利用率和安全性，防止僵尸会话占用内存或上下文窗口。
*   **环境变量解析增强:**
    *   **PR #2861:** 在 MCP 服务器启动时扩展 `${VAR_NAME}` 引用。
    *   **分析:** 提高了配置灵活性，便于容器化部署中的环境变量注入。

## 7. 用户反馈摘要
*   **痛点 - 升级困难:** 用户 `cben0ist` 和 `glifocat` 的反馈揭示了两个核心痛点：一是跨大版本升级（v1->v2）的兼容性脆弱；二是日常维护命令（`/update-skills`）的行为不符合预期（静默失败而非报错）。这表明当前文档或错误提示机制需要改进。
*   **场景 - 群组协作:** WhatsApp 群组消息不显示的问题（PR #2870）反映出用户在群组协作场景下对消息可靠性的强烈需求。
*   **满意度 - 自动化需求:** 用户对 `/manage-agents` 和 `/system-digest` 等新技能表现出兴趣，说明社区希望减少手动运维成本，转向声明式或自动化的 Agent 管理。

## 8. 待处理积压
*   **Issue #2868:** `/update-skills` 静默无操作。这是一个功能性阻塞问题，建议优先分配开发资源进行复现和修复，因为它直接影响用户的技能更新体验。
*   **PR #2870:** WhatsApp 群组消息修复。虽然代码已提交，但尚未合并。鉴于其影响范围，建议尽快审核合并。
*   **Issue #1275:** Auto-prompt registration when added to new group (Telegram)。创建于 2026-03-19，至今未关闭或合并。这是一个改善新用户体验（Onboarding）的功能请求，长期未响应可能影响新用户留存率。

---
*本报告由 Agnes-2.0-Flash 生成，基于公开 GitHub 数据分析。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**：2026-06-27
**数据来源**：GitHub (nullclaw/nullclaw)

### 1. 今日速览
今日 NullClaw 项目整体处于**低活跃度**状态，过去24小时内无新的 Pull Request 合并，也无新版本发布。唯一的动态集中在 Issue #868 上，该问题因构建失败引发关注，但自创建以来已持续近两个月未获解决。项目当前面临的主要挑战是移动端（Android/Termux）环境下的兼容性构建问题，这可能影响特定开发者群体的使用体验。

### 2. 版本发布
**无新版本发布**。
*   当前最新稳定版本仍为 v2026.4.17。
*   无破坏性变更或迁移指南需要关注。

### 3. 项目进展
**无代码合并进展**。
*   过去24小时 PR 更新数为 0。
*   没有新的功能特性被合并到主分支，项目核心代码库在今日未发生结构性变化。

### 4. 社区热点
**Issue #868: [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat**
*   **链接**: [nullclaw/nullclaw Issue #868](https://github.com/nullclaw/nullclaw/issues/868)
*   **热度分析**: 尽管评论数仅为 3 且点赞数为 0，但该 Issue 是今日唯一活跃项。它反映了用户在非标准桌面环境（Termux/aarch64）下尝试构建项目时遇到的具体技术障碍。
*   **背后诉求**: 用户希望获得对移动 Linux 环境的官方支持或构建指引。由于涉及 `linkat` 权限错误，这不仅是配置问题，可能还触及 Zig 编译器在受限文件系统环境下的行为差异。

### 5. Bug 与稳定性
**严重 Bug: Android/Termux 构建失败**
*   **问题描述**: 在 Xiaomi Redmi Note 9 (LineageOS 22.2, Termux, aarch64) 环境下，运行 `zig build -Doptimize=ReleaseSmall` 时失败，报错 `failed to link temporary file into '.z...'`，具体原因为 `AccessDenied`。
*   **严重程度**: 高（针对受影响平台）。虽然不影响主流 x86_64/aarch64 桌面环境，但对于希望在 Android 设备上本地开发或部署 NullClaw 的用户而言，这是一个阻断性问题。
*   **修复状态**: **无 Fix PR**。该 Issue 创建于 2026-04-23，截至 2026-06-27 仍为 OPEN 状态，且最近一次更新在 2026-06-26，表明问题仍在等待维护者介入或社区贡献解决方案。

### 6. 功能请求与路线图信号
**暂无新信号**。
*   今日无新的 Feature Request 或 Enhancement 类 Issue 出现。
*   现有的构建问题更多属于“环境适配”而非新功能请求，暗示路线图可能尚未涵盖对 Termux/Android 子系统的正式支持。

### 7. 用户反馈摘要
*   **痛点**: 用户在尝试于资源受限或权限特殊的移动环境（Termux）中使用 NullClaw 时遭遇构建瓶颈。
*   **场景**: 开发者试图在 Android 设备上通过 Zig 构建工具链编译 NullClaw，优化目标为 `ReleaseSmall`。
*   **情绪**: 反馈较为技术性，主要集中在错误日志复现上，尚未表现出强烈的负面情绪，但长期未解决可能导致这部分用户流失。

### 8. 待处理积压
**需优先关注的 Issue**:
*   **#868**: 已在 Open 状态停留超过 2 个月（2026-04-23 至 2026-06-27）。建议维护者评估是否为 Zig 版本兼容性问题，或提供临时的构建规避方案（如禁用特定链接步骤或使用不同优化级别）。

---
**分析师备注**: 项目当前代码贡献停滞，建议维护者重点关注 Issue #868 的技术细节，以维持社区信任度，尤其是对于依赖非标准构建环境的开发者群体。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-27
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 在 2026-06-27 保持高活跃度，过去24小时内新增 **30 条 Issue** 和 **50 条 PR**。项目重心明显集中在 **Reborn** 栈的稳定性修复、工具审批流程的用户体验优化以及多租户能力策略（Capability Policy）的落地。尽管无新版本发布，但大量 PR 的合并与测试框架的改进表明团队正在为即将到来的重大更新进行密集攻坚。整体项目健康度良好，但 E2E 测试中的注册表失败和自动化创建超时问题需引起注意。

## 2. 版本发布
**无新版本发布。**
当前处于 `0.29.1` 版本后的稳定化阶段，重点在于内部依赖升级和 Reborn 核心功能的完善。

## 3. 项目进展
今日主要进展体现在以下三个方向：

*   **Reborn WebUI 交互优化：**
    *   **PR #5365** 修复了 Chat 重试按钮无效的问题，确保失败消息能正确重发，提升了用户容错体验。
    *   **PR #5366** 将“始终允许符合条件的工具”默认开启，大幅减少新用户的使用摩擦，直接响应用户对繁琐审批流程的抱怨。
    *   **PR #5247** 增强了审批卡片的全局设置链接，提高了功能发现性。

*   **能力策略（Capability Policy）推进：**
    *   **PR #5349** 引入了能力策略的“可用性”维度。
    *   **PR #5355** 实现了基于 REST 的用户管理和管理员授权控制平面，这是 Epic #5261 的关键组成部分，标志着多用户权限隔离进入实质开发阶段。

*   **基础设施与安全加固：**
    *   **PR #5361** 升级 `ratatui` 并解决 `lru` 库的未定义行为（UB）问题，消除了潜在的内存安全漏洞。
    *   **PR #5271** 批量更新了外部依赖，保持了供应链安全。

## 4. 社区热点
以下 Issue/PR 获得了较高的关注度或反映了关键的技术争议：

*   **[Issue #5331] Tool-approval 'always' 可能未自动批准后续调用**
    *   *链接:* https://github.com/nearai/ironclaw/issues/5331
    *   *分析:* 这是一个中等置信度的产品 Bug，涉及引擎 v2 的核心信任机制。如果“总是允许”逻辑失效，将严重破坏用户对自动化的信任，是当前优先级最高的修复项之一。
*   **[Issue #5261] [EPIC] Reborn capability policy**
    *   *链接:* https://github.com/nearai/ironclaw/issues/5261
    *   *分析:* 作为长期追踪的多租户权限隔离史诗级任务，其子任务（如 #5349, #5355）的进展是社区关注的重点，直接关系到企业级部署能力。
*   **[PR #5366] 默认开启“始终允许”**
    *   *链接:* https://github.com/nearai/ironclaw/pull/5366
    *   *分析:* 该 PR 直接解决了 Issue #5364 中用户关于“新用户体验差”的痛点，反映了社区对降低入门门槛的强烈需求。

## 5. Bug 与稳定性
今日报告了多个影响稳定性和可用性的 Bug，按严重程度排序：

1.  **[High] 自动化创建超时与租赁过期 (Issues #5322, #5323)**
    *   *描述:* 自动化任务在创建阶段因 Runner Lease 过期或超时而失败，导致用户无法建立监控任务。
    *   *状态:* 开放，需关注 `cron` 调度器与 Worker 之间的资源竞争问题。
2.  **[Medium] 审批流程异常 (Issues #5283, #5196, #5331)**
    *   *描述:* “批准并始终允许”设置未持久化；“每次询问”模式下批准后立即报错并触发重复审批；“始终允许”未生效。
    *   *状态:* 多个相关 Issue 存在，表明 Reborn 的工具审批子系统存在系统性缺陷，需统一修复。
3.  **[Medium] 错误信息误导 (Issue #5289)**
    *   *描述:* 当 `builtin.json` 返回 `invalid_input` 时，前端显示通用的 "driver protocol error"，掩盖了真实原因。
    *   *状态:* 开放，需改进错误透传机制。
4.  **[Low] UI 渲染与状态同步问题 (Issues #5333, #5227, #5302)**
    *   *描述:* 发送后文本残留、失败消息挂载到错误的对话轮次、单会话审批阻塞其他会话输入。
    *   *状态:* 开放，属于 UX 层面的 Bug，虽不影响核心功能但严重影响体验。

## 6. 功能请求与路线图信号
*   **非 Slack 渠道的个人配对支持 (Issue #5368):** 用户希望 WebUI 不仅支持 Slack，还能端到端支持其他通用频道。这表明多平台集成是明确的产品方向。
*   **持久化多身份浏览器自动化 (Issue #2355):** 尽管是长期 Epic，但近期的更新显示团队正在探索基于 Rust 内置工具和 CDP 的架构，旨在实现加密配置文件持久化，这是 Agent 自主浏览能力的重大升级信号。
*   **Gmail 扩展发现不一致 (Issue #5316):** 用户报告邮件扩展检测不稳定，暗示后端扩展注册表或环境探测逻辑需要重构。

## 7. 用户反馈摘要
*   **痛点:** 用户对 **工具审批的繁琐性** 感到沮丧。Issue #5364 和 #5366 的直接关联表明，用户希望默认更“智能”或“宽容”的权限模型，而不是每次调用都需确认。
*   **困惑:** 自动化任务的 **时间显示和调度** 让用户感到困惑（Issue #5319），特别是 UTC 时间与本地时间的转换缺乏明确提示。
*   **期望:** 用户期待更清晰的 **错误诊断**（Issue #5289），当工具失败时，他们希望知道具体是哪个参数错了，而不是一个通用的协议错误。

## 8. 待处理积压
*   **[Issue #5221] Ironclaw harness backlog — deepseek-v4-flash:** 由 `pranavraja99` 维护，包含多个性能调优候选项。由于涉及基准测试 hill-climbing，需优先处理以提升模型推理效率。
*   **[Issue #4108] Nightly E2E failed:** 夜间集成测试持续失败，虽然被标记为长期 Issue，但其子任务（如 #5329, #5330）正在逐步修复测试套件本身的陈旧问题。建议维护者定期审查 E2E 测试的稳定性，避免技术债务累积。
*   **[Issue #5337] Wasm-channel OAuth setup 故障:** BenKurrek 报告的 Wasm 通道 OAuth 配置死锁问题，阻碍了非 Slack 渠道（如 Gmail）的接入，是打通多通道集成的关键阻塞点。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-06-27
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 项目在 2026-06-26 保持了高强度的开发与维护节奏。核心亮点是 **OpenClaw 运行时升级至 v2026.6.1** 及 **Cowork 计划模式工作流的引入**，标志着多 Agent 协作能力的显著增强。尽管版本更新频繁且 PR 合并率高（8条/天），但社区反馈显示桌面端在数据备份等底层操作仍存在严重的稳定性隐患（主进程卡死）。整体项目处于“功能快速迭代”与“稳定性攻坚”并行的阶段，技术债务清理工作正在积极进行中。

## 2. 版本发布
### 📦 LobsterAI 2026.6.26
*   **发布时间：** 2026-06-26
*   **核心变更：**
    *   **Runtime 升级：** OpenClaw 运行时从 `v2026.4.14` 升级至 `v2026.6.1` (PR #2209)。
    *   **新功能：** 引入 Cowork 的 Plan Mode 工作流，增强多 Agent 协作的逻辑规划能力 (PR #2183)。
    *   **插件支持：** 修复了 IM 插件对升级后环境的兼容性支持。
*   **迁移注意事项：**
    *   用户需确保本地环境兼容新的 OpenClaw 运行时依赖。
    *   由于涉及运行时大幅升级，建议检查自定义插件或脚本的兼容性，特别是涉及 Agent 调度逻辑的部分。

## 3. 项目进展
今日合并的 8 个 PR 主要集中在渲染层稳定性、代码规范整理及协作功能优化：

*   **渲染与 UI 稳定性提升：**
    *   **Mermaid 渲染修复：** 通过 PR #2213 和 #2210，解决了 Mermaid 图表渲染失败时 SVG 错误泄漏至文档的问题，并在渲染前后清理容器，提升了 Artifact 区域的视觉稳定性。
    *   **技能搜索交互优化：** PR #2212 和 #1459 改进了 Prompt Tools 中 Skill 子菜单的行为，防止焦点丢失导致菜单意外关闭，并增加了 Hover 时的完整描述 Tooltip，提升了用户体验。
*   **Cowork 协作功能深化：**
    *   **子代理进度追踪：** PR #2207 和 #2208 修复了 Subagent 进度计算不准确及持续时间冻结的问题，确保在 Chat 结束后子代理状态能正确持久化和展示。
*   **代码质量与维护：**
    *   PR #2211 对 OpenClaw 补丁决策测试导入进行了排序，遵循 `simple-import-sort` 规范，有助于降低后续维护成本。

## 4. 社区热点
*   **🔥 多 Agent 协作与模型绑定的强烈诉求 (Issue #1462)**
    *   **链接：** [netease-youdao/LobsterAI Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462)
    *   **分析：** 该 Issue 虽创建于 4 月，但今日被标记为 Stale/Closed，且评论活跃。用户明确表达了对“单 Agent 绑定独立模型”及“Manager 调度子 Agent”功能的渴望，并对比竞品（阿里 Hiclaw）指出 LobsterAI 在交互体验上的优势。这暗示了未来路线图应重点倾斜于细粒度的模型控制和更复杂的 Agent 编排逻辑。
*   **🐛 桌面端备份功能导致崩溃 (Issue #2214)**
    *   **链接：** [netease-youdao/LobsterAI Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)
    *   **分析：** 这是一个高严重程度的 Bug，100% 可复现。用户在执行数据备份时主进程完全无响应。由于备份涉及 SQLite WAL 模式下的文件操作，可能与 Electron 主线程的事件循环阻塞有关，急需修复以保障用户数据安全。

## 5. Bug 与稳定性
| 严重等级 | 问题描述 | 关联 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **High** | **桌面端“数据备份”功能导致主进程卡死/未响应**<br>环境：Win11, DB 71.6MB, WAL模式。原因疑似 `better-sqlite3` 阻塞主线程。 | [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | 🟡 **未修复** (无关联 Fix PR) |
| **Medium** | **Mermaid 渲染错误残留**<br>失败渲染产生的错误 SVG 污染 DOM 结构。 | [PR #2213](https://github.com/netease-youdao/LobsterAI/pull/2213)<br>[PR #2210](https://github.com/netease-youdao/LobsterAI/pull/2210) | ✅ **已修复** |
| **Low** | **Subagent 进度显示滞后/错误**<br>Chat 结束后进度条仍显示旧值或计算错误。 | [PR #2207](https://github.com/netease-youdao/LobsterAI/pull/2207) | ✅ **已修复** |

## 6. 功能请求与路线图信号
*   **Agent 模型解耦：** Issue #1462 再次印证了用户希望每个 Agent 独立配置 LLM 模型的强烈需求。当前版本可能仍受限于全局或渠道级模型配置。
*   **高级编排能力：** 用户对 "Manager Agent" 和 "Room/Group" 概念的提及，表明社区期待从简单的并行调用向基于角色的复杂工作流演进。这与今日合并的 Plan Mode 工作流方向一致，预计后续会有更多针对 Workflow 可视化和编排功能的更新。
*   **UI 细节完善：** 技能描述的 Tooltip 和搜索框交互优化（PR #1459, #2212）反映了用户对工具易用性的细腻要求，此类微交互优化可能会成为常态化的改进方向。

## 7. 用户反馈摘要
*   **痛点：** 数据备份功能的稳定性极差，对于拥有大量历史消息（数百条/天）的重度用户来说，备份是刚需，但当前的实现方式导致了不可用的体验。
*   **满意点：** 用户认可 LobsterAI 相比竞品的交互体验，特别是 4.3 版本的 IM 渠道多实例功能。
*   **期待：** 希望获得类似阿里 Hiclaw 之外的更灵活的多 Agent 管理方案，特别是基于“房间”或“小组”的 Manager 调度模式。

## 8. 待处理积压
*   **[Critical] Issue #2214:** 桌面端备份卡死问题。这是唯一的高严重度未修复 Bug，直接阻碍了用户的数据安全操作，建议维护者优先介入调查 `better-sqlite3` 在主线程中的使用方式，考虑将其移至 Worker Thread。
*   **[Feature Request] Issue #1462:** 虽然已关闭（Stale），但其反映的需求（单 Agent 绑定模型、多 Agent 协作组）尚未在近期 PR 中得到完全满足。建议将此需求转化为具体的 Epic 或 Feature Issue，以便跟踪开发进度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：** 2026-06-27
**数据来源：** GitHub (moltis-org/moltis)

### 1. 今日速览
Moltis 项目今日处于低活跃度的稳定维护期，过去24小时内未产生新的 Issue 讨论或版本发布。核心动态集中在一条待合并的 Pull Request (#1135)，该 PR 旨在增强浏览器自动化模块的可观测性，通过添加截图功能提升调试体验。整体而言，项目代码库保持稳健，社区参与度平稳，暂无紧急阻塞性问题。

### 2. 版本发布
*   **状态：** 无新版本发布。
*   **说明：** 当前无 Release 记录，建议关注即将合并的 #1135 是否作为特性更新的一部分纳入下一版本。

### 3. 项目进展
*   **重点 PR：** [#1135](https://github.com/moltis-org/moltis/pull/1135) - `browser: optional auto-screenshot after each action`
    *   **状态：** OPEN (待合并)
    *   **贡献者：** resumeparseeval
    *   **进展分析：** 该 PR 引入了在每次“状态改变”的浏览器操作后自动捕获截图的功能，并将截图附加到工具结果中。这一改进将显著增强 Chat Clients 渲染每步操作截图时间线的能力。由于涉及核心 `BrowserManager::execute_action` 逻辑，其合并将直接提升项目的可视化调试能力，属于功能性增强而非紧急修复。

### 4. 社区热点
*   **当前焦点：** PR #1135 是今日唯一的公开技术讨论点。
*   **诉求分析：** 尽管目前评论数为 `undefined`（可能为数据抓取延迟或无评论），但“自动截图”功能反映了用户对 Agent 执行过程透明度和可追溯性的强烈需求。开发者希望通过可视化手段验证 Agent 在复杂 Web 交互中的行为，减少黑盒调试成本。

### 5. Bug 与稳定性
*   **状态：** 无新报告。
*   **分析：** 今日 Issues 更新为 0，表明当前版本未发现新的崩溃、回归或严重功能性 Bug。项目稳定性指标良好。

### 6. 功能请求与路线图信号
*   **信号来源：** PR #1135
*   **解读：** 自动截图功能的引入暗示了 Moltis 路线图可能正在向“增强 Agent 可解释性”和“多模态交互支持”方向演进。如果该 PR 被合并，未来可能会看到更多基于视觉反馈的 Agent 优化策略或前端展示能力的升级。

### 7. 用户反馈摘要
*   **现状：** 今日无新 Issue，因此无实时用户反馈数据。
*   **推断：** 基于 PR #1135 的内容，可以推测部分高级用户或集成开发者对浏览器操作的中间状态监控存在痛点，希望获得更细粒度的执行日志和视觉证据。

### 8. 待处理积压
*   **关键事项：** [PR #1135](https://github.com/moltis-org/moltis/pull/1135)
    *   **建议：** 作为今日唯一的外部贡献，建议维护者尽快审查此 PR。鉴于其涉及核心浏览器管理逻辑，需重点检查性能开销（频繁截图对内存/CPU的影响）以及错误处理机制（如截图失败时的降级策略）。若合并顺利，可作为近期亮点更新通知用户。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期：** 2026-06-27
**数据来源：** GitHub agentscope-ai/QwenPaw

## 1. 今日速览
今日项目处于 **v2.0.0-beta.1** 发布后的关键验证期，社区活跃度极高，过去24小时产生 **29 条 Issue** 和 **50 条 PR**。整体态势呈现“新旧版本交替期的阵痛与机遇并存”：一方面，v1.x 系列的多个长期 Bug（如内存泄漏、渲染崩溃）获得修复；另一方面，v2.0 beta 版本的兼容性问题和插件生态断裂引发大量反馈。核心开发重点已从功能新增转向 **稳定性修复**、**桌面端体验优化** 以及 **v2.0 插件生态的重建**。

## 2. 版本发布
### v2.0.0-beta.1
- **状态：** 早期测试版，仅供开发者/早期采用者使用。
- **警告：** 包含破坏性变更（Breaking Changes）和不稳定性，**不建议用于生产环境**。
- **主要变更：**
  - 重构 Agent 架构 (`refactor: migrate agent`)。
  - 依赖升级至 AgentScope 2.0 系列。
- **迁移注意事项：**
  - 官方插件安装失败，需关注 PR #5568 的修复。
  - 内存索引机制重写，旧版 `memory-index` 相关修复不再适用。

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的健壮性和用户体验：
- **桌面端体验优化：**
  - **PR #5436**：支持拖拽文件上传，提升交互便捷性。
  - **PR #5153 & #5569**：消除 Windows 非 Tauri 客户端的启动白屏问题，实现秒开体验。
  - **PR #5265**：修复 Tauri 生命周期问题，实现优雅关闭。
- **核心稳定性修复：**
  - **PR #5440**：清理 AgentScope 2.0 合并后的遗留 Bug（如 `CancelledError` 吞没问题）。
  - **PR #5297**：增加批量测试和删除模型功能，提升管理效率。
- **功能增强：**
  - **PR #5321**：引入 `scroll` 上下文管理策略，替代原生压缩，持久化历史到 SQLite，支持 REPL 召回，解决长上下文丢失问题。
  - **PR #5577**：新增可选的消息聚合功能，解决多步骤 Agent 回复刷屏问题。

## 4. 社区热点
以下 Issue 和 PR 引发了较多讨论，反映了用户的核心关切：
- **[Feature] 多步骤回复消息聚合 (Issue #5563)**
  - **诉求：** 用户抱怨 Agent 执行多步任务时碎片化发送消息，导致界面刷屏。
  - **进展：** PR #5577 已提出解决方案，允许通过配置开启消息聚合。
- **[Bug] Console 长消息排版错乱 (Issue #5480)**
  - **诉求：** 长 Markdown 消息在 Web 控制台显示异常，需切换 Tab 才恢复。
  - **状态：** 已关闭，推测由前端渲染机制调整修复。
- **[Question] 模型提供商统计异常 (Issue #5512)**
  - **诉求：** 界面显示在线提供商数量与实际不符。
  - **状态：** 已关闭，可能为 UI 缓存或计数逻辑修正。
- **[Feature] Slack 频道支持 (Issue #5152)**
  - **诉求：** 用户强烈呼吁支持 Slack 集成。
  - **状态：** 已关闭，需确认是否已纳入路线图或转为 Discussion。

## 5. Bug 与稳定性
今日报告了大量 Bug，主要集中在 **v1.x 遗留问题** 和 **v2.0 兼容性问题**：

| 严重级别 | 问题描述 | Issue ID | 关联 PR / 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **Browser Use 内存泄漏**：`browser_use stop()` 后 Chrome 渲染进程残留，导致内存持续增长。 | #5520 | **Fix:** PR #5356 (kill orphaned Chrome processes) |
| **高** | **插件依赖安装风暴**：macOS Desktop App 中 Remote SSH 插件导致 `pip install` 循环和后端进程堆积。 | #5550 | **Fix:** PR #5570 (stop plugin dep install storm) |
| **中** | **企业微信文件处理中断**：发送文件后 Bot 无回复，Channel 重启导致处理中断。 | #5554 | **Fix:** PR #5575 (configurable no-text debounce), PR #5574 (refresh chat on session update) |
| **中** | **DeepSeek V4 Thinking 模式 400 错误**：非官方端点下流式 reasoning_content 缺失及 Schema null 类型清洗问题。 | #5573 | 需后端适配 OpenAI 兼容中转站的特殊行为 |
| **低** | **内置技能禁用状态重置**：升级后之前禁用的内置技能重新启用。 | #5262 | 已关闭，可能通过配置持久化修复 |
| **低** | **心跳任务超时**：硬编码 120 秒超时导致复杂心跳任务失败。 | #5539 | **Fix:** PR #5557 (make heartbeat timeout configurable) |

## 6. 功能请求与路线图信号
- **模型自动降级 (Issue #5572)**：用户希望在主模型配额耗尽或超时时自动切换备选模型。这是一个高价值的可用性功能，但目前尚无对应 PR。
- **Computer Use 支持 (Issue #5551)**：询问是否计划支持 Computer Use（计算机自动化操作）。这表明用户对 Agent 执行复杂 GUI 任务有强烈兴趣。
- **钉钉 @mention 支持 (Issue #5564)**：在多 Agent 协作场景中，需要主动发送消息时支持 `@` 特定用户或 Agent。PR #5564 提出了 CLI 和 API 层面的支持方案。
- **OpenAI Responses API 原生支持 (Issue #3993)**：长期存在的请求，希望利用原生 Tool Calling 能力。虽有关闭记录，但需求依然存在，需关注官方态度。

## 7. 用户反馈摘要
- **痛点：**
  - **v2.0 迁移阵痛：** 插件安装失败是 v2.0 beta 阶段最大的阻碍，严重影响开发者体验。
  - **长任务体验差：** 无论是 Console 的排版错乱，还是多步骤回复的刷屏，都反映出当前 UI 在处理复杂 Agent 交互时的不足。
  - **稳定性疑虑：** 内存泄漏（Chrome 进程）、依赖安装死锁等问题让用户对 Desktop App 的可靠性产生担忧。
- **满意点：**
  - **启动速度优化：** 桌面端消除白屏、秒开的改进受到欢迎。
  - **上下文管理创新：** `scroll` 策略和持久化历史存储被认为是对长对话场景的有效补充。
  - **拖拽上传：** 简单的 UX 改进提升了日常使用便利性。

## 8. 待处理积压
- **Issue #5572 (模型自动降级)**：高价值功能，目前无 PR，建议优先评估实现可行性。
- **Issue #5551 (Computer Use 支持)**：明确的功能询问，若团队有此规划，应给予公开回应；若无，建议移至 Discussion 区归档。
- **Issue #5547 (Plugin 获取 sessionId)**：开发者在构建 Plugin 时需要获取当前 Session ID 以进行权限管控，属于 API 设计层面的缺口，需确认是否已暴露相应接口。
- **PR #5546 (Governance Policy Pattern)**：通用治理策略模式的 PR，处于 Review 阶段，可能影响后续的安全和权限架构，需尽快完成审查。

---
*分析师：Agnes-2.0-Flash*
*生成时间：2026-06-27*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-27
**数据来源：** GitHub (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-06-27 保持极高的开发活跃度，过去 24 小时内共产生 100 次关键交互（50 个 Issues + 50 个 PRs）。项目核心聚焦于 **v0.8.2 新特性的落地验证** 以及 **供应链安全与可观测性的深度强化**。社区对“Goal Mode”（目标模式）和“Supply Chain Signing”（供应链签名）的 RFC 讨论热烈，显示出用户对 Agent 自主性边界及企业级合规性的强烈关注。尽管存在若干高优先级的运行时 Bug（如 Shell 工具拒绝执行、MCP Bundle 未生效），但团队已通过快速合并修复 PR 和新增测试用例积极回应，项目整体健康度良好，处于 v0.8.x 系列向稳定版过渡的关键冲刺期。

## 2. 版本发布
**v0.8.2** 已于近期发布，今日重点在于该版本引入功能的验证与后续问题的排查。
*   **核心特性：**
    *   **A2A Agent Discovery：** 实现了 Agent 间的互操作性发现机制。
    *   **Skills 增强：** 支持用户配置额外的技能注册表，并为 Slash Command 提供类型化选项。
    *   **安全加固：** 针对插件、通道等组件的安全性进行了底层优化。
*   **迁移/注意事项：** 用户需关注 `ReadSkillTool` 在 Compact Skills 模式下可能出现的路径解析错误（见 Issue #8047，虽已关闭但仍影响部分工作流），以及 Telegram 渠道下 Prompt Caching 失效的问题（Issue #6360）。

## 3. 项目进展
今日合并/关闭了多个关键 PR，显著推动了基础设施、可观测性和用户体验的完善：
*   **基础设施与安全：**
    *   **#8158 (Closed):** 新增 CycloneDX SBOM 生成，覆盖 Rust 和 npm 包，落实供应链透明度（RFC #7675 Phase 2）。
    *   **#8352 (Open/Active):** 修复 Homebrew 发布流程，增加 Token 访问权限的前置检查，防止发布失败。
*   **可观测性与成本：**
    *   **#8380 (Open):** 引入离线定价目录，解决无网关环境下的成本追踪问题。
    *   **#8233 (Open):** 实现实时网关价格填充，修复因模型未定价导致的成本记录丢失。
    *   **#8146 (Closed):** 修复 CLI 一次性运行模式下的遥测数据丢失和 Token 统计错误。
*   **用户体验 (ZeroCode/TUI)：**
    *   **#7954 (Open):** 为 ZeroCode Dashboard 添加 Agent 重命名功能，提升管理效率。
    *   **#8337 (Open):** 集成 Herdr Agent 状态报告，直观展示 Agent 生命周期。
    *   **#7946 (Open):** 在多个界面添加模型上下文窗口使用率指示器。

## 4. 社区热点
以下 Issues 因高评论数或高优先级成为今日讨论焦点：
*   **[RFC] Supply chain signing (#8177):** 9 条评论。探讨硬件 PGP 签名、Hermetic Builds 和 SLSA 溯源。反映企业用户对零信任架构和软件供应链安全的迫切需求。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
*   **[RFC] Work Lanes & Board Automation (#6808):** 11 条评论。关于工作流程自动化和标签清理的治理 RFC，旨在降低维护者负担。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
*   **[Feature] Goal mode for bounded autonomous session (#8303):** 1 条评论但获 1 个赞。提出“目标模式”概念，允许 Agent 持续追求单一用户目标直至完成或预算耗尽，是自主 Agent 演进的重要方向。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
*   **[Bug] Gemini CLI OAuth 故障 (#4879):** 4 条评论，2 个赞。虽然已关闭，但此前的高关注度表明 Provider 认证稳定性仍是用户痛点。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)

## 5. Bug 与稳定性
今日报告并处理了多个影响核心功能的 Bug，按严重程度排列：
*   **P1 (Workflow Blocked):**
    *   **#6434:** Shell 工具在 `autonomy level = "full"` 时被拒绝，导致 Agent 无法执行命令。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)）
    *   **#5844:** 内存模块过度强调历史记忆，忽视当前 Prompt，导致行为偏差。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)，已关闭）
*   **P2 (Degraded Behavior):**
    *   **#7733:** MCP Bundles 配置解析但未在运行时强制执行，存在安全隔离隐患。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)）
        *   *进展:* PR #8370 已提交回归测试以验证修复。
    *   **#8047:** `ReadSkillTool` 错误查找 `data_dir` 而非 Agent Workspace，导致技能读取失败。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8047)，已关闭）
    *   **#6360:** Telegram 渠道下 Prompt Caching 失效，导致重复处理和潜在费用增加。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)）
    *   **#8312:** `fill-translations` 工具遗留泄露的翻译条目，造成数据丢失风险。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8312)）

## 6. 功能请求与路线图信号
*   **A2A 与互操作性：** Issue #8338 (ACP Elicitation Phase 1) 和 #8379 (WhatsApp Passive Group Context) 显示社区正在推动更复杂的跨平台集成和 Agent 间协作标准。
*   **多数据库支持：** PR #6893 提议支持 Postgres, Oracle, MySQL, Db2 作为会话后端，预示 ZeroClaw 正从轻量级单机向企业级多节点集群部署演进。
*   **离线与混合云支持：** PR #8380 (Offline Pricing) 和 #8233 (Live Gateway Pricing) 表明项目致力于覆盖完全隔离（Air-gapped）到完全云端的所有网络环境。
*   **配置易用性：** PR #8062 和 #7815 针对 ZeroCode 的配置编辑器进行改进，显示团队重视非技术用户的操作体验。

## 7. 用户反馈摘要
*   **痛点：**
    *   **认证与配置复杂性：** 用户抱怨 Telegram 和 Gemini 的 OAuth 流程不稳定（#4879, #5866），以及 Discord 线程模式的缺失导致聊天混乱（#7849）。
    *   **资源监控盲区：** 用户希望能在 TUI 中直观看到上下文窗口使用情况（#7946）和成本消耗（#8380, #8233），目前的黑盒状态令人担忧。
    *   **技能发现混乱：** `ReadSkillTool` 的路径错误（#8047）和 SkillForge 引擎的孤立状态（#8309）让开发者感到困惑，需要更清晰的文档和默认配置。
*   **满意点：**
    *   **自动化改进：** 工作区自动化（#6808）和 Scoop 清单修复（#8275）提升了安装和维护的便利性。
    *   **可观测性增强：** 新的遥测修复（#8146）和 Herdr 集成（#8337）让用户能更好地调试 Agent 行为。

## 8. 待处理积压
*   **SkillForge 孤儿问题 (#8309):** SkillForge 引擎自 #144 合并后未被正确接线，需决定是完成集成还是移除。这是一个技术债务，可能影响 v0.8.3 的稳定性。
*   **ACP Bridge 配对脆弱性 (#6754):** 一次性代码配对机制在复杂工作流中容易失效，需寻找更健壮的自动配对方案。
*   **DMS-GST 提取任务 (#8372-#8378):** 一组相关的用户故事（User Stories 1-6）集中在印度 GST 数据提取场景，目前处于实施初期，需关注其文档和快速入门指南的完整性（#8378）。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*