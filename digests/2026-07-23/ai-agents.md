# OpenClaw 生态日报 2026-07-23

> Issues: 435 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-23 01:50 UTC

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
**日期：** 2026-07-23
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
OpenClaw 项目在 2026 年 7 月 23 日保持了极高的社区活跃度，过去 24 小时内处理了 435 个 Issue 和 500 个 PR，显示出强大的维护能力和用户参与度。核心开发重点集中在会话管理（Session Lineage）、本地化框架完善以及实时语音插件 SDK 的重构上。尽管有多个 P0/P1 级别的回归 Bug（如 Gateway 启动失败、Cron 工具兼容性问题）引发关注，但社区和 Maintainer 响应迅速，大量 PR 已进入待合并或已关闭状态，项目整体稳定性正在通过系统性重构得到加固。

## 2. 版本发布
*   **无新版本发布。**
*   *注：Issue #108435 报告了升级到 `2026.7.1` 后 Gateway 启动失败的严重回归问题，目前该问题仍处于开放讨论中，尚未通过稳定版修复。*

## 3. 项目进展
今日合并/关闭的关键 PR 主要集中在基础设施重构和文档规范上，为后续功能扩展奠定基础：

*   **[PR #112524] docs(release): document complete extended-stable workflow**
    *   **状态:** Closed (Merged)
    *   **进展:** 完善了 `extended-stable` 发布流程文档，解决了此前发布候选版时 changelog 缺失导致的 npm preflight 失败问题，提升了发布流程的可靠性。
*   **[PR #112773] feat(claws): add portable agent policy settings**
    *   **状态:** Closed (Merged)
    *   **进展:** 实现了 Claw 清单中的可移植代理策略设置，支持 `alsoAllow`, `deny` 等文件系统权限控制，增强了代理的安全性和跨环境一致性。
*   **[PR #111391] Add CLAW.md manifest support**
    *   **状态:** Closed (Merged)
    *   **进展:** 引入 `CLAW.md` 作为 Claw 清单的人机可读 YAML 格式，统一了导出标准，保留了向后兼容性。
*   **[PR #112533] docs: require changelog before extended-stable preflight**
    *   **状态:** Closed (Merged)
    *   **进展:** 在 CI 流程中增加了 changelog 校验守卫，防止因文档遗漏导致发布中断。
*   **[PR #112831] fix(release): satisfy changelog attribution guard**
    *   **状态:** Closed (Merged)
    *   **进展:** 修复了发布贡献记录中的署名校验问题，确保合规性。

## 4. 社区热点
以下 Issue 和 PR 获得了最多的评论和关注，反映了用户的核心痛点和发展方向：

*   **[Issue #75] Linux/Windows Clawdbot Apps** (115 comments, 80 👍)
    *   **链接:** [openclaw/openclaw#75](https://github.com/openclaw/openclaw/issues/75)
    *   **分析:** 用户对 macOS/iOS/Android 的支持满意，但强烈呼吁补齐 Linux 和 Windows 原生应用，以覆盖更广泛的桌面用户群体。这是长期存在的“help wanted”高优先级需求。
*   **[Issue #13583] Pre-response enforcement hooks (hard gates)** (16 comments, 2 👍)
    *   **链接:** [openclaw/openclaw#13583](https://github.com/openclaw/openclaw/issues/13583)
    *   **分析:** 金融和安全领域用户迫切需要“硬性”工具调用拦截机制，以防止代理在未完成必要检查前输出结果，当前软性指令无法满足合规要求。
*   **[Issue #91009] Codex PreToolUse native hook relay spawns CPU-bound processes** (15 comments, 2 👍)
    *   **链接:** [openclaw/openclaw#91009](https://github.com/openclaw/openclaw/issues/91009)
    *   **分析:** 生产环境中 Codex 集成引发的 CPU 爆炸和网关 RPC 停滞问题，严重影响服务可用性，需紧急优化钩子进程的生命周期管理。
*   **[Issue #10659] Masked Secrets - Prevent Agent from Accessing Raw API Keys** (15 comments, 4 👍)
    *   **链接:** [openclaw/openclaw#10659](https://github.com/openclaw/openclaw/issues/10659)
    *   **分析:** 安全敏感型用户希望实现密钥掩码，防止代理泄露或注入攻击提取凭证，是提升平台安全性的关键功能。
*   **[PR #111861] refactor(sessions): canonical lineage model**
    *   **链接:** [openclaw/openclaw#111861](https://github.com/openclaw/openclaw/pull/111861)
    *   **分析:** 由核心维护者 steipete 发起的重大重构，旨在统一会话血缘关系模型，解决客户端无法构建可信会话树的问题，对多操作者网关至关重要。

## 5. Bug 与稳定性
今日报告了多个高严重程度的 Bug 和回归问题，部分已有 PR 关联：

*   **[P0] [Issue #108435] update to openclaw 2026.7.1: gateway fails to start w/ error**
    *   **描述:** 升级到 2026.7.1 后，Gateway 在 systemd、Ollama 或手动启动时均无法启动，报错 `gateway did not start on 127.0...`。
    *   **影响:** 阻断性发布问题。
    *   **状态:** Open, 需紧急修复。
*   **[P1] [Issue #92043] 180s compaction timeout is a single wall clock over the whole chunk pipeline**
    *   **描述:** 嵌入压缩超时时间从 900s 降至 180s 后，长历史记录场景下必然失败，且无部分进度复用。
    *   **影响:** 导致代理会话在特定配置下无限循环失败。
    *   **状态:** Open。
*   **[P1] [Issue #108580] cron tool schema incompatible with llama.cpp grammar-constrained tool calling**
    *   **描述:** 2026.7.1 回归导致 cron 工具 Schema 无法编译为有效的 GBNF 语法，致使所有 chat 请求失败。
    *   **影响:** 破坏 llama.cpp 用户的定时任务功能。
    *   **状态:** Open, 关联 PR #112833 (auto-reply fix, 非直接修复)。
*   **[P1] [Issue #85333] openclaw doctor --fix 4-5x slower on 2026.5.20 vs 2026.5.19**
    *   **描述:** 诊断修复命令性能严重退化，从 55s 增至 229s+，瓶颈在于 session snapshot path traversal。
    *   **影响:** 运维效率降低。
    *   **状态:** Open。
*   **[P1] [Issue #87318] amazon-bedrock provider: Haiku 4.5 inference profile ARN not supported**
    *   **描述:** AWS Bedrock 用户在使用特定推理配置文件时，参数被忽略，导致路由错误。
    *   **影响:** 阻碍 AWS 生态用户升级。
    *   **状态:** Open。
*   **[P1] [Issue #96857] Normal tool text outputs can degrade to “(see attached image)” placeholders**
    *   **描述:** 代理接收到的文本输出被错误替换为图片占位符，导致代理“失明”。
    *   **影响:** 功能逻辑错误。
    *   **状态:** Open。

## 6. 功能请求与路线图信号
*   **[Feature] Linux/Windows 原生应用 (Issue #75):** 强烈的跨平台桌面端需求，预计将在未来版本中作为重点里程碑推进。
*   **[Feature] Masked Secrets (Issue #10659):** 安全增强需求，可能纳入下一安全补丁或主要版本。
*   **[Feature] session:end internal hook event (Issue #10142):** 用于工作流编排（如 Temporal）集成，已有相关 PR 讨论，适合高级用户场景。
*   **[Enhancement] Inject context window % into system prompt (Issue #38568):** 提升代理对上下文用量的感知能力，有助于减少截断错误。
*   **[Enhancement] maxTurns/maxToolCalls config option (Issue #9912):** 控制代理迭代次数，防止无限循环，已在多个 Issue 中被提及为必要的安全护栏。

## 7. 用户反馈摘要
*   **痛点:**
    *   **稳定性焦虑:** 用户对近期版本（特别是 2026.7.x）的回归问题感到担忧，如 Gateway 启动失败、Cron 工具不兼容等。
    *   **性能瓶颈:** `doctor --fix` 变慢和压缩超时问题影响了日常运维体验。
    *   **安全顾虑:** 缺乏密钥掩码和硬性工具调用拦截机制，使得企业级部署存在合规风险。
    *   **平台缺失:** Linux/Windows 用户缺乏原生 GUI 支持，只能依赖 CLI 或 Docker，体验不佳。
*   **满意点:**
    *   **Codex 集成:** 尽管有性能问题，但 Codex 的深度集成受到开发者欢迎。
    *   **插件系统:** 插件解绑和 SDK 扩展（如实时语音插件 PR #112820）展示了良好的可扩展性。
    *   **响应速度:** 社区对 Issue 的响应非常迅速，许多问题在几天内就有大量讨论。

## 8. 待处理积压
*   **[Issue #75] Linux/Windows Clawdbot Apps:** 长期未解决，标签为 `help wanted` 和 `P2`，需维护者做出产品决策。
*   **[Issue #13583] Pre-response enforcement hooks:** 关键安全功能，需 `needs-product-decision` 和 `needs-security-review`，建议优先评估。
*   **[Issue #92516] Containerized deploys can't use externalized channel plugins:** 自托管用户面临通道插件信任问题，需明确支持路径。
*   **[Issue #39807] Billing error (402) causes infinite retry death spiral:** 尽管是 P1，但似乎缺乏自动退避机制，需尽快修复以防止资源浪费。
*   **[PR #111861] refactor(sessions): canonical lineage model:** 这是一个大型重构 PR，需要严格的测试和 Proof，目前状态为 `needs proof`，应尽快验证以避免合并后引入新问题。

---

## 横向生态对比

以下是基于 2026-07-23 各开源项目社区动态生成的横向对比分析报告。

### 1. 生态全景
2026年7月，个人 AI 助手与自主智能体开源生态呈现**“底层重构与稳定性攻坚”**并行的态势。核心项目如 OpenClaw、Hermes Agent 和 IronClaw 正从单纯的功能堆叠转向架构级的标准化（如会话血缘、ProductSurface 统一），以解决生产环境中的稳定性痛点。与此同时，垂直领域项目（如 NanoBot、PicoClaw）通过深耕特定渠道（飞书/钉钉、Matrix/IRC）和边缘计算场景，构建了差异化的技术护城河。整体生态已度过早期的概念验证阶段，进入注重企业级合规、多模态兼容及长期运行可靠性的成熟期。

### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 关键状态 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 435 | 500 | ❌ No | **高 (重构期)** | P0回归Bug集中爆发，核心维护者响应迅速，基础设施重构加速。 |
| **Hermes Agent** | 50 | 50 | ❌ No | **高 (高频迭代)** | 桌面端与CLI配置Bug较多，跨平台会话共享需求强烈，修复节奏快。 |
| **IronClaw** | 50 | 50 | ❌ No | **中 (验证期)** | Reborn 架构统一化进行中，Telegram 集成 Bug 频发，处于 v1 RC 前冲刺。 |
| **ZeroClaw** | 50 | 50 | ❌ No | **高 (稳定冲刺)** | Anthropic 可靠性增强为核心，Windows CI 兼容性为重大阻碍，v0.9.0 前夕。 |
| **NanoBot** | 6 | 40+ (总63) | ❌ No | **中高 (功能扩展)** | 多渠道集成（飞书/钉钉）活跃，SQLite 性能优化显著，多智能体协作讨论热烈。 |
| **CoPaw** | 31 | 50 | ✅ v2.0.0.post4 | **中 (磨合期)** | v2.0 引入性能开销，进程冻结问题重现，社区反馈集中在稳定性与运维体验。 |
| **PicoClaw** | 4 | 5 | ❌ No | **中 (维护期)** | 依赖安全更新积极，但存在积压的 Stale Issue，协议兼容性修复中。 |
| **NanoClaw** | 1 | 3 | ❌ No | **低 (文档/小修)** | 主要处理文档准确性及 WhatsApp 身份一致性，无重大代码合并。 |
| **LobsterAI** | 0 | 5 (全合并) | ❌ No | **中 (清理期)** | 无新功能开发，专注于 OOM 防护、Windows 安装器加固及旧 PR 清理。 |
| **Moltis** | 0 | 1 | ❌ No | **低 (平稳期)** | 仅 UI 本地化优化，无新 Issue，处于静默维护阶段。 |
| **TinyClaw** | 0 | 0 | ❌ No | **低 (停滞)** | 过去24小时无任何活动。 |
| **ZeptoClaw** | 0 | 0 | ❌ No | **低 (停滞)** | 过去24小时无任何活动。 |
| **NullClaw** | 0 | 1 | ❌ No | **中 (精准修复)** | 仅修复 Discord Gateway 栈溢出问题，无其他变动。 |

### 3. OpenClaw 在生态中的定位

*   **生态基石与参照系：** OpenClaw 以日均 435 Issue / 500 PR 的体量远超其他项目，是生态中最大的“流量池”和标准制定者。其 `CLAW.md` 清单标准和会话血缘模型正在成为事实上的行业规范。
*   **优势：** 拥有最完善的插件 SDK 生态和最广泛的 LLM 提供商支持（包括 AWS Bedrock, Ollama, llama.cpp）。其社区规模决定了其对上游模型 API 变化的响应速度最快。
*   **技术路线差异：** 相比 NanoBot 侧重“多智能体协作”和 PicoClaw 侧重“轻量级协议网关”，OpenClaw 更倾向于构建一个**重型、全功能的个人 AI 操作系统**，强调本地优先（Local-first）、隐私控制和安全沙箱。
*   **挑战：** 当前的 P0 级回归 Bug（Gateway 启动失败）暴露了其庞大代码库在快速迭代下的脆弱性，若不及时稳定，可能动摇开发者信心。

### 4. 共同关注的技术方向

1.  **多智能体协作与持久化身份：**
    *   **涉及项目：** NanoBot (#5000), OpenClaw (Session Lineage #111861), ZeroClaw (A2A Protocol #7218).
    *   **诉求：** 用户不再满足于单一代理，而是需要具备长期记忆、可跨会话持久存在的“数字分身”。NanoBot 明确提出向 Multi-agent collaboration 演进，OpenClaw 则在重构会话树以支持可信溯源。
2.  **企业级安全与合规护栏：**
    *   **涉及项目：** OpenClaw (#13583, #10659), NanoBot (#5040 MCP Schema), IronClaw (#5459).
    *   **诉求：** 金融/安全领域急需“硬性”工具调用拦截（Hard Gates）、密钥掩码（Masked Secrets）以及细粒度的权限隔离。MCP 工具 Schema 的兼容性成为跨提供商集成的痛点。
3.  **跨平台与原生桌面体验：**
    *   **涉及项目：** OpenClaw (#75 Linux/Windows), Hermes Agent (Desktop App), NanoBot (WebUI SQLite).
    *   **诉求：** macOS/iOS 支持已饱和，Linux/Windows 原生应用成为新的竞争高地。用户期望 CLI、桌面 GUI 和 Web 端之间的会话上下文无缝同步（Cross-platform session context sharing）。
4.  **资源效率与边缘适配：**
    *   **涉及项目：** NanoBot (Raspberry Pi CPU), ZeroClaw (Shell OOM), LobsterAI (Gateway OOM).
    *   **诉求：** 在资源受限设备或高并发场景下，降低内存占用、防止 OOM 崩溃、优化长对话历史加载性能（如 SQLite 索引）是普遍需求。

### 5. 差异化定位分析

*   **OpenClaw & IronClaw：** 面向**高端极客与企业级用户**。OpenClaw 强调本地隐私和全栈能力；IronClaw 侧重 Reborn 架构的统一性和多租户管理，适合需要深度定制工作流的大型团队。
*   **Hermes Agent：** 面向**开发者与 CLI 重度用户**。其核心优势在于强大的 CLI 交互、多 Profile 管理和 Desktop 应用的快速迭代，适合喜欢终端操作的技术人员。
*   **NanoBot：** 面向**亚洲市场与企业 IM 集成**。对飞书、钉钉、Telegram 的深度支持是其最大卖点，特别适合需要将 AI 嵌入现有办公流的中国及东南亚用户。
*   **PicoClaw & NullClaw：** 面向**特定协议爱好者**。PicoClaw 专注 Matrix/IRC/DeltaChat 等去中心化协议；NullClaw 专精 Discord 机器人稳定性，属于小而美的垂直领域专家。
*   **CoPaw：** 面向**Qwen 生态用户**。依托通义千问模型优化，提供 Creator App 等视频/脚本生成工作流，但在通用稳定性和性能平衡上仍需打磨。
*   **ZeroClaw：** 面向**Anthropic 重度用户**。通过强化 Claude 模型的可靠性回退机制和 OIDC 认证，吸引重视 Anthropic 生态且需要企业级安全认证的用户。

### 6. 社区热度与成熟度

*   **快速迭代/高热度层：** **OpenClaw, Hermes Agent, IronClaw, ZeroClaw**。这些项目日活极高，Issue 和 PR 数量庞大，处于技术路线快速收敛期。风险在于回归 Bug 多，需警惕“为了速度牺牲稳定”。
*   **功能扩展/中热度层：** **NanoBot, CoPaw, PicoClaw**。NanoBot 和 CoPaw 正处于新版本发布后的反馈收集期，社区关注点从“有没有”转向“好不好用”。PicoClaw 则保持稳定增长，但缺乏爆发力。
*   **质量巩固/低热度层：** **LobsterAI, NanoClaw, Moltis, NullClaw**。这些项目活动较少，主要进行代码清理、文档修正或小范围 Bug 修复。表明它们已进入成熟维护期，或社区规模较小但粘性高。
*   **停滞层：** **TinyClaw, ZeptoClaw**。无活动迹象，可能已停止维护或转入内部使用。

### 7. 值得关注的趋势信号

1.  **“会话血缘”（Session Lineage）将成为标配：** OpenClaw 和 NanoBot 都在强化会话的可追溯性和状态管理。未来 AI 助手的调试将不再局限于单次对话，而是基于完整的任务执行树进行审计和回溯。
2.  **MCP (Model Context Protocol) 的标准化阵痛期：** NanoBot (#5040) 和 OpenClaw 都提到了 MCP Schema 兼容性问题。随着更多 LLM 提供商接入 MCP，如何解决不同模型对 JSON Schema 解析的差异，将是中间件开发的关键挑战。
3.  **从“软指令”到“硬护栏”的安全演进：** OpenClaw (#13583) 和 IronClaw (#5459) 的需求显示，用户不再信任单纯的 System Prompt 约束，而是要求底层架构支持不可绕过的权限检查和工具调用拦截。这对 Agent 框架的安全性设计提出了新要求。
4.  **本地化与边缘计算的崛起：** NanoBot 在树莓派上的 CPU 优化、PicoClaw 对 IRC/Matrix 的支持，反映了用户对数据主权和低延迟交互的渴望。未来的个人 AI 助手将更倾向于混合云架构，核心逻辑本地运行，仅推理部分上云。
5.  **Windows/Linux 原生 GUI 的竞争白热化：** OpenClaw (#75) 和 Hermes Agent 的桌面端问题表明，CLI 已无法满足大众用户需求。谁能率先提供流畅、跨平台、功能完整的原生桌面应用，谁就能突破技术圈层，触达更广泛的用户群体。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-07-23
**数据来源：** GitHub (HKUDS/nanobot)

## 1. 今日速览
NanoBot 在 2026-07-23 保持极高的社区活跃度，过去 24 小时内处理了 **63 条 PR**（其中 40 条已合并）和 **6 条 Issues**。项目正处于多通道集成与底层稳定性优化的关键阶段，特别是针对飞书、钉钉、Telegram 等渠道的兼容性修复，以及 SQLite 索引优化等性能提升。虽然无新版本发布，但大量 P1/P2 优先级的修复和新功能 PR 表明核心架构正在快速迭代和完善。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并/关闭的主要 PR 集中在渠道增强、WebUI 体验优化及基础稳定性修复：

*   **模型预设会话级作用域 (#4866)**：合并了 `feat(agent): make model presets session-scoped`。此更新实现了命名模型预设的会话级隔离，确保每次请求使用一致的 `LLMRuntime`，提升了上下文管理的稳定性。
*   **xAI Grok OAuth 支持 (#5035)**：合并了 `feat(providers): add xAI Grok OAuth...`。新增了对 xAI Grok 订阅的原生 OAuth 2.0 + PKCE 登录支持，并引入了基于能力门控的 X Search 功能。
*   **Telegram 多实例支持 (#5033)**：合并了 `feat(telegram): support multiple bot instances in WebUI`。允许 WebUI 管理多个 Telegram Bot 实例，增强了配置灵活性和运行时隔离。
*   **WebUI 历史索引优化 (#5003)**：合并了 `perf(webui): index conversation history in SQLite`。通过将 JSONL 读取替换为带索引的 SQLite WAL 读取，显著提升了长对话历史的加载性能。
*   **DingTalk 隐私控制 (#4446)**：合并了 `feat(dingtalk): gate private chats...`。增加了禁止私聊的配置项及群组回复中的发送者提及功能，提升了企业级使用的可控性。

## 4. 社区热点
以下 Issue/PR 因涉及核心架构演进或重大兼容性变更而受到关注：

*   **[OPEN] #5000: Proposal: evolve the current subagent system toward multi-agent collaboration**
    *   **链接:** [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)
    *   **分析:** 用户指出当前子代理系统缺乏持久身份和共享状态，建议向真正的多智能体协作演进。这是架构层面的重大讨论，反映了用户对更复杂任务分解和长期记忆交互的需求。
*   **[OPEN] #5040: MCP tool schema with non-'#/$defs/' $ref is forwarded verbatim...**
    *   **链接:** [Issue #5040](https://github.com/HKUDS/nanobot/issues/5040)
    *   **分析:** 报告了 MCP 工具 schema 中非标准 `$ref` 导致 Kimi/Moonshot 等严格提供商禁用整个模型的问题。这暴露了 nanobot 在跨提供商 Schema 兼容性上的痛点，亟需标准化处理。
*   **[OPEN] #2584: Feature/xiaozhi support**
    *   **链接:** [PR #2584](https://github.com/HKUDS/nanobot/pull/2584)
    *   **分析:** 尽管创建较早，但近期仍有更新。该 PR 旨在支持 Xiaozhi 语音网关和 ESP32 设备，展示了项目向边缘设备和语音交互扩展的意图。

## 5. Bug 与稳定性
今日报告了多个影响稳定性和兼容性的 Bug，部分已有 PR 跟进：

*   **严重 (P1): Qwen 模型思维链泄露 (#4934 - CLOSED)**
    *   **链接:** [Issue #4934](https://github.com/HKUDS/nanobot/issues/4934)
    *   **状态:** 已关闭。
    *   **描述:** DashScope 提供的 qwen3.6-flash 等模型在聊天响应中错误暴露了 thinking/reasoning 内容。此问题已解决，但提示需持续监控其他模型的输出过滤。
*   **高 (P1): Cron 作业加载崩溃 (#5042, #5043, #5044)**
    *   **链接:** [PR #5042](https://github.com/HKUDS/nanobot/pull/5042), [PR #5043](https://github.com/HKUDS/nanobot/pull/5043), [PR #5044](https://github.com/HKUDS/nanobot/pull/5044)
    *   **状态:** PR 已开放，待合并。
    *   **描述:** `jobs.json` 中的 null 值（schedule, runHistory）以及 `pairing.json` 中的 null channel 列表会导致 TypeError 并隔离整个存储。这些 PR 通过增加 null 检查和默认值处理来修复崩溃。
*   **中 (P2): Dream 批次饥饿问题 (#5041)**
    *   **链接:** [Issue #5041](https://github.com/HKUDS/nanobot/issues/5041)
    *   **状态:** 未合并。
    *   **描述:** 完成无差异的 Dream 批次不会推进 `.dream_cursor`，导致后续历史记录被无限期忽视。这是一个逻辑缺陷，可能影响长期运行的记忆压缩效果。
*   **中 (P2): 飞书/Slack/DingTalk Markdown 表格解析冲突**
    *   **链接:** [PR #5045](https://github.com/HKUDS/nanobot/pull/5045), [PR #5046](https://github.com/HKUDS/nanobot/pull/5046)
    *   **状态:** PR 已开放。
    *   **描述:** 代码块内的 Markdown 表格被错误地转换为飞书卡片表或 Slack mrkdwn 键值对。相关 PR 正在修复各通道的解析器以保留代码块完整性。
*   **低 (P2): WebUI 可见性问题 (#4948 - CLOSED)**
    *   **链接:** [Issue #4948](https://github.com/HKUDS/nanobot/issues/4948)
    *   **状态:** 已关闭。
    *   **描述:** 子代理延迟完成时，WebUI 可能会丢失视图控制权。

## 6. 功能请求与路线图信号
*   **多智能体协作 (#5000):** 用户强烈希望从简单的背景任务委托转向具备持久身份和共享状态的真正多智能体系统。这可能成为未来版本的重大架构升级方向。
*   **空闲压缩间隔可配置 (#5036):** 用户在树莓派等资源受限设备上运行 nanobot，发现空闲时 CPU 占用过高。请求使 idle compaction scan interval 可配置，以平衡性能与资源消耗。
*   **并行搜索 MCP 预设 (#5047):** 添加 Parallel Search 作为可选的 MCP 预设，提供免费的匿名网络搜索和抓取能力，无需 API Key。这符合 nanobot 扩展插件生态的趋势。
*   **飞书群聊监听模式 (#5009):** 新增飞书群聊的 `groupPolicy: listen` 模式，允许消息累积为会话上下文而不触发 LLM 轮次，仅在 @提及时回复。这提升了在即时通讯场景中的交互效率。

## 7. 用户反馈摘要
*   **痛点:**
    *   **Schema 兼容性:** 用户对 MCP 工具 schema 在不同 LLM 提供商（如 Kimi, Moonshot）间的兼容性表示担忧，严格的验证器导致功能失效。
    *   **资源效率:** 在边缘设备（如 Raspberry Pi）上运行时，后台进程的 CPU 占用率成为主要瓶颈。
    *   **文件访问权限:** 飞书集成中，上传的文件路径与 workspace 限制存在冲突，导致用户无法读取已上传媒体文件。
*   **满意点:**
    *   **多渠道支持:** 对飞书、钉钉、Telegram 等新渠道的深度定制（如多实例、隐私控制）表示认可。
    *   **性能优化:** WebUI 引入 SQLite 索引后，历史加载速度显著提升，用户体验改善明显。

## 8. 待处理积压
*   **Issue #5041:** Dream 批次饥饿问题尚未有 PR 关联，需尽快修复以避免记忆系统退化。
*   **Issue #5028:** 飞书媒体路径与 workspace 限制冲突问题，影响文件操作可用性，需明确解决方案。
*   **PR #2584:** Xiaozhi 支持 PR 长期处于 Open 且标记为 conflict 状态，需维护者重新评估合并策略或协助解决冲突。
*   **PR #5040:** 虽然 Issue 已提出，但尚无直接对应的 Fix PR 在列表中显示为已合并，需关注其修复进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-07-23
**数据来源：** GitHub NousResearch/hermes-agent

## 1. 今日速览
Hermes Agent 在 2026-07-23 保持极高的社区活跃度，过去24小时内新增 **50条 Issue** 和 **50条 PR**。尽管没有新版本发布，但代码库修复节奏极快，特别是针对桌面端（Desktop）会话状态同步、CLI 配置解析以及 Gateway 消息投递稳定性的关键 Bug 得到了集中修复。社区对跨平台会话上下文共享、WhatsApp 技能绑定等新功能需求强烈，同时多个 P2 级稳定性问题（如 Telegram 上传超时、Windows 文件锁竞争）正在被快速响应。整体项目健康度良好，处于“高频修复+功能迭代”的活跃期。

## 2. 版本发布
*   **无新版本发布。**
*   当前最新构建版本参考：`v2026.7.1-525-g1ea0bbbb0` (Issue #63395 提及)。

## 3. 项目进展
今日合并/关闭的 PR 主要聚焦于**稳定性修复**和**内部机制完善**，显著提升了系统的健壮性：

*   **[CLOSED] #69273**: 修复了 Profile 导入后 Gateway 服务未注册导致的状态不一致问题，解决了 `hermes -p <name> gateway start` 失败的问题。
*   **[CLOSED] #69729**: 增加了 Desktop 端 E2E 测试覆盖，验证了排队消息和转向（steer）提示词的边界行为，确保中间态交互的正确性。
*   **[CLOSED] #69694**: 实现了 `delegate_task` 中按任务选择模型的功能，允许并行子代理使用不同模型，提升了复杂任务编排的灵活性。
*   **关键修复 PRs**:
    *   **#69736**: 修复了 `finalize_turn` 中的 `UnboundLocalError`，防止会话结束时的崩溃。
    *   **#69735**: 修复了连续助手回复合并时遗留的 `api_content` 副作用，优化了 MoA（Mixture of Agents）场景下的消息序列。
    *   **#69733**: 修复了 Cron 调度器中 `require_parameters` 和 `data_collection` 参数丢失的问题，确保定时任务配置完整。
    *   **#69728 & #69730**: 修复了 Windows 下 UTF-8 认证 JSON 读取错误及 Cron Fire Token 验证逻辑，增强了多语言环境和多 Profile 下的安全性与兼容性。

## 4. 社区热点
以下 Issue 因评论数较高或涉及核心架构争议，成为今日讨论焦点：

1.  **#4335 [Feature] Cross-platform session context sharing (CLI ↔ Telegram)**
    *   **链接:** https://github.com/NousResearch/hermes-agent/issues/4335
    *   **分析:** 用户强烈希望打破不同网关（CLI, Telegram, Discord等）之间的会话隔离。目前每个平台维护独立的 Session Store，导致上下文不互通。这是提升 Hermes 作为统一 AI 助手体验的关键功能，评论数 9，显示社区对此有长期期待。
2.  **#66875 [Bug] Latest session does not switch after navigating to Plugins/Artifacts tab**
    *   **链接:** https://github.com/NousResearch/hermes-agent/issues/66875
    *   **分析:** 桌面端导航逻辑缺陷，点击最新会话无反应。评论数 7，反映出用户对桌面端 UI 交互流畅度的高度关注，属于影响日常使用的高频痛点。
3.  **#62936 [Bug] Telegram uploads >~15 MB always fail with TimedOut**
    *   **链接:** https://github.com/NousResearch/hermes-agent/issues/62936
    *   **分析:** 环境变量 `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` 对媒体上传无效。评论数 6，表明大文件传输是 Telegram 用户的主要障碍，需要底层 HTTP 客户端配置的深度修复。
4.  **#21341 [Bug] nixosModule documents option installs files to wrong paths**
    *   **链接:** https://github.com/NousResearch/hermes-agent/issues/21341
    *   **分析:** NixOS 模块安装路径与运行时读取路径不一致，导致人格/记忆文件失效。评论数 5，体现了 Linux/Nix 用户在配置管理上的痛点。

## 5. Bug 与稳定性
今日报告了大量 P2/P3 级 Bug，主要集中在 **Desktop 应用**、**Gateway 通信** 和 **配置解析** 三个方面：

*   **严重/高优先级 (P2):**
    *   **#62708**: 上下文溢出时无静默警告，导致模型直接停止响应。**(Fix PR: #59656 部分相关，需确认具体修复)**
    *   **#25837**: `vision_analyze` 工具因内联超大图片导致会话崩溃（Anthropic API 非重试错误）。
    *   **#18539**: `/queue` FIFO 链中 MEDIA 文件仅最后一条被投递，前序文件被渲染为文本。
    *   **#57775**: Windows 下 `atomic_replace` 因共享冲突静默丢弃写入，可能导致数据丢失。
    *   **#63222**: ACP 模型切换时保留旧的 `base_url`，导致请求路由错误。
    *   **#65942**: Snapshot 恢复在 `state.db` 打开时可能留下较新数据，造成状态不一致。
    *   **#39248**: Desktop 应用更新过程卡死，无法重新打开。
    *   **#66329**: CLI 模型选择器将自定义提供商分组错误归类为 "CUSTOM ENDPOINT"。

*   **中等/低优先级 (P3):**
    *   **#66875**: Desktop 侧边栏会话点击无响应。
    *   **#69551**: Desktop SSH 远程模式在非默认 Profile 下因路径硬编码而失效。
    *   **#46369**: Desktop 键盘快捷键忽略 Dvorak 等非 QWERTY 布局。
    *   **#68302**: Skills & Tools 视图下侧边栏会话点击无效（已关闭，可能已修复或重复）。
    *   **#69660**: 排队消息在历史线程中显示异常。
    *   **#48027**: 中文用户反馈上下文关联推理不足及记忆同步范围过窄。
    *   **#47930**: Windows Desktop 活动会话动画静态化。

*   **状态标注:**
    *   多个 Bug 已有对应 PR 正在处理或已合并，如 **#69736** (fix UnboundLocalError), **#69725** (fix desktop warm-resume race), **#69664** (fix SSH token dir).

## 6. 功能请求与路线图信号
*   **跨平台会话共享 (#4335):** 用户希望 CLI 与 Telegram 等平台的会话上下文互通。这与当前 Gateway 架构的设计相悖，可能需要重构 Session Store 或引入全局会话层。
*   **WhatsApp Channel Skill Bindings (#69726):** 请求支持 WhatsApp 的 `channel_skill_bindings`，以自动加载群组技能。目前仅支持 Discord/Slack。这是一个明确的扩展信号，可能纳入下一版本的 Gateway 增强中。
*   **Delegation Per-Task Model Selection (#69694):** 已在 PR 中合并，允许 `delegate_task` 为不同子任务指定不同模型。这标志着 Hermes 在复杂任务编排和成本优化方面的能力升级。
*   **Browser Tool Non-Interactive Gate (#66393):** 建议在非交互会话中，若未安装 `agent-browser` 则明确报错或提示安装，而非静默失败。
*   **Clarify Prompts Durability (#44845):** 建议将 Clarify Prompt 从短阻塞计时器改为持久的 ID 可寻址决策，以避免聊天平台上的死锁并提高用户体验。

## 7. 用户反馈摘要
*   **痛点:**
    *   **桌面端交互缺陷:** 多个 Issue 指出 Desktop App 在会话切换、快捷键布局支持、更新机制和动画表现上存在明显瑕疵，影响专业用户的使用体验。
    *   **配置复杂性:** NixOS 安装路径错误、CLI 模型分组错误、SSH 路径硬编码等问题，反映出配置系统在多环境、多 Profile 场景下的脆弱性。
    *   **静默失败:** 上下文压缩阻塞时无警告、Telegram 大文件上传超时、Cron 参数丢失等，导致用户难以排查问题根源。
*   **满意点:**
    *   **功能丰富性:** 用户对 Delegate Task 的多模型支持、HSP/1 技能同步客户端等新功能表示认可。
    *   **响应速度:** 对于关键崩溃（如 `UnboundLocalError`）和回归问题，社区和开发者响应迅速，PR 合并效率高。

## 8. 待处理积压
*   **#4335 [Feature] Cross-platform session context sharing:** 长期未决的功能请求，涉及架构变更，需决策是否纳入路线图。
*   **#62936 [Bug] Telegram uploads Timeout:** 影响特定平台用户的核心功能，需底层 HTTP 客户端修复。
*   **#21341 [Bug] NixOS Module Path Issue:** 影响 Linux 特定发行版用户，需维护者确认并修复安装脚本。
*   **#62708 [Bug] Silent Context Overflow:** 用户体验差，需增加明确的警告机制或前端指示器。
*   **#48027 [Bug/Feature] Context Reasoning & Memory Sync:** 来自中文社区的深度反馈，涉及 AI 推理能力和记忆同步范围的优化，建议作为后续迭代重点。

---
*报告生成时间: 2026-07-23 | 分析师: Agnes-2.0-Flash*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-07-23
**数据来源：** GitHub API (sipeed/picoclaw)

## 1. 今日速览
2026年7月23日，PicoClaw 项目保持中等活跃度，过去24小时内共产生 **9** 个新的代码贡献事件（4 Issues + 5 PRs）。社区反馈集中在协议兼容性（Matrix重连、IRC长消息）和渠道功能增强（钉钉图片支持）上。尽管没有新版本发布，但多个关键 Bug 修复和功能改进的 PR 处于开放状态，显示开发者正在积极处理底层稳定性与多平台适配问题。整体项目健康度良好，但在“stale”标记的问题上存在积压，需关注维护者响应速度。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要进展体现在代码清理、依赖更新及特定渠道的功能补全：

*   **依赖与安全更新 (PR #3286):** `imguoguo` 更新了 Go 标准库及 `x/text` 以通过 `govulncheck` 扫描。这表明项目正在主动维护依赖安全，防止已知漏洞风险。
    *   [链接](https://github.com/sipeed/picoclaw/pull/3286)
*   **钉钉渠道功能增强 (PR #3283):** `MrTreasure` 实现了钉钉机器人接收图片消息的功能，包括 Token 缓存管理和优雅降级处理。这显著提升了 PicoClaw 在企业微信/钉钉场景下的多媒体交互能力。
    *   [链接](https://github.com/sipeed/picoclaw/pull/3283)
*   **文档/配置清理 (PR #3285):** `imguoguo` 合并了移除 `picopaw` 相关内容的 PR，属于维护性操作，保持项目配置整洁。
    *   [链接](https://github.com/sipeed/picoclaw/pull/3285) *(注: 状态为 CLOSED/Merged)*
*   **DeltaChat 重构 (PR #3222):** `trufae` 对 DeltaChat 实现进行了大规模清理（减少200行代码），移除了遗留功能和硬编码配置，提升了代码可维护性。
    *   [链接](https://github.com/sipeed/picoclaw/pull/3222)

## 4. 社区热点
以下 Issue 因涉及核心协议稳定性或新功能需求，获得了较高的关注度：

*   **Matrix 同步循环断连后无法自动重连 (Issue #3203):**
    *   **热度:** 2 👍, 5 评论
    *   **分析:** 用户报告在网络中断或服务器重启后，Matrix 通道会“静默死亡”，且由于主进程未崩溃，Systemd 无法触发重启。这是一个严重的可用性 Bug，影响了生产环境的稳定性。
    *   [链接](https://github.com/sipeed/picoclaw/issues/3203)
*   **Bedrock Converse API 提示词缓存支持 (PR #3163):**
    *   **分析:** 虽然更新较早，但今日仍有活动。该 PR 旨在利用 AWS Bedrock 的 Prompt Caching 特性降低延迟和成本，符合当前 AI 应用优化的趋势，受到关注高性能部署用户的重视。
    *   [链接](https://github.com/sipeed/picoclaw/pull/3163)
*   **IRC 长消息支持 (Issue #3287):**
    *   **分析:** 新用户提出的功能请求，指出 PicoClaw 未能正确处理超过 512 字节的 IRCv3 消息，导致消息被错误分割。这是提升 IRC 用户体验的关键点。
    *   [链接](https://github.com/sipeed/picoclaw/issues/3287)

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

1.  **[严重] Matrix 通道断连后静默失败 (Issue #3203)**
    *   **描述:** `/sync` 循环在网络断开后不重连，且主进程存活导致监控服务无法自动恢复。
    *   **状态:** Open, 有待修复 PR 或讨论。
    *   [链接](https://github.com/sipeed/picoclaw/issues/3203)
2.  **[中等] Process Hook 参数解析缺陷 (Issue #3258)**
    *   **描述:** `before_tool` 钩子中的 `decision` 字段被丢弃，`args` 因反序列化缺陷被错误解析。影响自定义逻辑的执行。
    *   **状态:** Open (标记为 stale)。
    *   [链接](https://github.com/sipeed/picoclaw/issues/3258)
3.  **[低] Gateway 模式缺乏无状态会话支持 (Issue #3257)**
    *   **描述:** 用户希望在 gateway 模式下也能像 agent CLI 一样通过 session ID 快速创建新对话，当前实现基于 channel/cha 派生 key，不够灵活。
    *   **状态:** Open (标记为 stale)。
    *   [链接](https://github.com/sipeed/picoclaw/issues/3257)

## 6. 功能请求与路线图信号
*   **AWS Bedrock 性能优化:** PR #3163 展示了社区对云厂商高级特性（如 Prompt Caching）的集成需求，若合并将显著提升 AWS 用户的成本和性能体验。
*   **多平台多媒体支持:** PR #3283 表明开发者正在积极扩展对国内 IM 平台（钉钉）的多媒体支持，未来可能看到更多类似渠道的图片/文件收发功能。
*   **协议完善:** Issue #3287 (IRC) 和 Issue #3203 (Matrix) 反映出用户对即时通讯协议的健壮性和兼容性有较高要求，路线图应优先考虑这些高频通道的稳定性修复。

## 7. 用户反馈摘要
*   **痛点:**
    *   **运维自动化失效:** Matrix 用户反映当前的错误处理机制与 systemd 等主流进程管理器不兼容，导致故障恢复依赖人工介入。
    *   **配置灵活性不足:** Gateway 模式下 Session 管理过于僵化，无法适应需要频繁切换上下文的 CLI 使用场景。
    *   **数据丢失风险:** Hook 函数的参数解析错误可能导致用户自定义的业务逻辑静默失败，难以调试。
*   **满意点:**
    *   社区对 DeltaChat 和 Bedrock 等复杂集成的持续优化表示认可，尤其是代码精简和安全依赖更新体现了项目的专业性。

## 8. 待处理积压
以下 Issue/PR 已被标记为 `stale` 或长期未获维护者明确回应，建议团队关注：

1.  **Issue #3258:** Process Hook before_tool modify not working. (创建于 7月15日，至今无合并或明确修复计划)
    *   [链接](https://github.com/sipeed/picoclaw/issues/3258)
2.  **Issue #3257:** Add stateless/no-history mode for gateway sessions. (创建于 7月15日，功能需求明确但优先级不明)
    *   [链接](https://github.com/sipeed/picoclaw/issues/3257)
3.  **PR #3222:** refactor(deltachat): cleanup implementation. (创建于 7月3日，虽为重构但涉及核心模块，需尽快审核合并以清理技术债)
    *   [链接](https://github.com/sipeed/picoclaw/pull/3222)
4.  **PR #3163:** feat(bedrock): leverage Converse prompt caching. (创建于 6月23日，长期未合并，可能因评审复杂度高或冲突)
    *   [链接](https://github.com/sipeed/picoclaw/pull/3163)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**：2026-07-23
**数据来源**：GitHub (github.com/qwibitai/nanoclaw)

## 1. 今日速览
NanoClaw 项目在 2026-07-23 保持中等活跃度，过去 24 小时内产生 1 个新 Issue 和 3 个未合并的 PR，无新版本发布。社区关注点主要集中在文档准确性修正（OAuth 凭证隔离问题）以及多通道消息发送的身份一致性修复。虽然无代码合并，但 PR #3070 和 #3117 显示出活跃的维护者参与和技能扩展讨论，项目整体处于功能迭代与文档完善并行的阶段。

## 2. 版本发布
**无新版本发布**。
*注：过去 24 小时及近期 Releases 列表为空，当前开发工作集中在 Pull Request 审查与合并阶段。*

## 3. 项目进展
今日无 PR 被合并或关闭，主要进展体现在以下待处理 PR 的技术推进上：
*   **WhatsApp 身份一致性修复 (#3070)**：由 QuantumBreakz 提交，旨在解决 Baileys 原生路径与 Cloud 路径之间 WhatsApp 发送者 ID 不一致的问题。该修复对于确保多路径部署下的消息追踪和会话状态同步至关重要，目前状态为 Open，等待合并。
*   **Telegram 富媒体渲染支持 (#2877)**：由 robbyczgw-cla 提交，利用 Bot API 10.1 的 `sendRichMessage` 增强 Telegram 通道的原生渲染能力。这是一个长期存在的 Feature Request，展示了核心集成能力的升级。

## 4. 社区热点
今日讨论热度最高的议题如下：

*   **Issue #3118: SECURITY.md 关于群组凭证隔离的过度声明**
    *   **链接**: [nanocoai/nanoclaw Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)
    *   **分析**: 用户 bradfeld 指出官方安全文档中关于“Per-agent policies”的描述存在误导，特别是在自托管 OneCLI 网关下 OAuth 连接实际上是账户级别的。这反映了用户对安全边界和权限模型的高度关注，可能影响企业级部署的信任度。建议优先更新文档以澄清这一技术限制。
*   **PR #3117: Waybar 状态指示器技能 (#3117)**
    *   **链接**: [nanocoai/nanoclaw PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)
    *   **分析**: 这是一个新增的 Utility Skill，用于在 Linux 桌面环境（Waybar）中显示 NanoClaw 状态。表明社区正在积极扩展 NanoClaw 在本地桌面端的可见性和集成度，尽管目前尚无评论，但符合“Utility skill”的贡献指南。

## 5. Bug 与稳定性
*   **WhatsApp 发送者 ID 发散 (#3070)**:
    *   **严重程度**: 高（影响消息路由和会话状态）
    *   **描述**: 同一电话号码在不同通道（Baileys vs Cloud）生成不同的 User ID，导致逻辑混乱。
    *   **状态**: 已有 PR #3070 提出修复方案，尚未合并。
*   **其他**: 今日无新报告的崩溃或回归问题。

## 6. 功能请求与路线图信号
*   **Telegram Rich Rendering**: PR #2877 表明团队正在跟进 Telegram Bot API 的最新特性（API 10.1），计划通过原生方式提升用户体验，而非依赖外部工具。
*   **桌面系统集成**: PR #3117 引入了 Waybar 状态栏支持，暗示路线图可能包含更多 Linux 桌面环境的原生集成选项，以增强开发者日常使用的便利性。

## 7. 用户反馈摘要
*   **痛点**: 用户对自托管环境下的 OAuth 权限模型存在困惑，认为现有文档未能准确反映“账户级”而非“群组级”的隔离现实。
*   **使用场景**: 用户正在混合使用 Baileys 原生库和 Cloud API 接入 WhatsApp，遇到了身份标识不统一的工程难题。
*   **满意度**: 社区对技能系统（Skills System）持开放态度，愿意贡献如 Waybar 状态指示器等辅助工具，表明生态扩展受到欢迎。

## 8. 待处理积压
*   **PR #3070 (WhatsApp Fix)**: 创建于 2026-07-16，已 Open 7 天。作为关键的一致性修复，建议优先审查合并。
*   **PR #2877 (Telegram Rich Msg)**: 创建于 2026-06-28，已 Open 超过 20 天。长期未合并可能影响 Telegram 通道的现代化体验，需确认是否因测试覆盖或兼容性检查而停滞。
*   **Issue #3118 (Doc Correction)**: 虽非代码 Bug，但涉及安全文档准确性，建议尽快响应以维护项目信誉。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：** 2026-07-23
**数据来源：** GitHub (github.com/nullclaw/nullclaw)

### 1. 今日速览
今日 NullClaw 项目活跃度中等，主要聚焦于 Discord Gateway 模块的稳定性修复。过去24小时内完成1个 Issue 关闭和1个 PR 合并，均由核心贡献者 Tetraslam 推动。虽然无新版本发布，但针对“打字指示器线程栈溢出”的关键修复已合入，显著提升了长期运行机器人的稳定性。整体健康度良好，技术债务得到针对性清理。

### 2. 版本发布
*   **状态：** 无新版本发布。
*   **说明：** 今日未触发新的 Release 流程，当前代码库处于稳定迭代阶段。

### 3. 项目进展
*   **关键合并 PR #978:** `discord: run typing thread on the heavy runtime stack`
    *   **推进内容：** 解决了 Discord 打字指示器（typing indicator）功能中的严重内存管理问题。此前该功能在辅助线程（512KB栈空间）执行 HTTPS 请求时，因 TLS 库的大规模内存拷贝导致栈溢出并崩溃。
    *   **影响评估：** 将打字线程切换至重型运行时栈（Heavy Runtime Stack），彻底消除了栈溢出风险。此举修复了一个高重现性的生产环境崩溃点，确保机器人能稳定处理用户互动反馈，是近期稳定性提升的关键一步。

### 4. 社区热点
*   **Issue #977:** [CLOSED] Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE
    *   **链接:** [nullclaw/nullclaw Issue #977](https://github.com/nullclaw/nullclaw/issues/977)
    *   **分析：** 该 Issue 描述了一个极其严重的 Bug：Bot 在处理第一条消息后永久“失聪”，仅心跳正常。虽然今日标记为关闭，但结合 PR #978 的合并，推测两者可能存在关联或独立修复。用户 Tetraslam 报告了 100% 可复现的问题，反映了社区对连接持久性和事件流可靠性的极高关注度。

### 5. Bug 与稳定性
*   **Bug 修复 (严重):**
    *   **问题：** Discord Gateway 事件流中断及线程栈溢出崩溃。
    *   **状态：** 已通过 PR #978 修复。
    *   **描述：** 之前存在的“单次 MESSAGE_CREATE 后永久失聪”现象以及“打字线程栈溢出”问题已得到解决。
    *   **严重程度：** 高（影响核心功能可用性）。
    *   **Fix PR:** [PR #978](https://github.com/nullclaw/nullclaw/pull/978)

### 6. 功能请求与路线图信号
*   **信号分析：** 今日无新的功能请求类 Issue 或 PR。
*   **推断：** 项目当前重心在于底层基础设施（Discord Gateway 实现）的健壮性，而非新功能开发。维护者正在优先消除阻碍长期稳定运行的架构缺陷（如线程栈大小配置不当），这为未来更复杂功能的集成奠定了基础。

### 7. 用户反馈摘要
*   **痛点：** 用户在遇到 Gateway 异常时感到无助，因为 Bot 表面在线（心跳正常）但无法接收新消息，这种“假死”状态难以排查。
*   **场景：** 主要用于构建基于 Discord 的自动化机器人，对连接的稳定性和事件处理的连续性有严格要求。
*   **满意度：** 对于快速响应和修复关键崩溃问题的贡献者（Tetraslam）表示认可，尽管 Issue 评论数为0，但问题本身的高复现率表明其解决了普遍存在的潜在隐患。

### 8. 待处理积压
*   **当前积压：** 低。
*   **说明：** 今日所有更新的 Issue (#977) 和 PR (#978) 均已关闭/合并。暂无长期未响应的重大 Issue 需要立即提醒。建议关注后续是否有类似 Gateway 稳定性问题的复现报告。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-07-23
**数据来源：** GitHub (nearai/ironclaw)

## 1. 今日速览
IronClaw 项目今日保持高活跃度，过去24小时共产生50条 Issue 更新和50条 PR 更新。核心开发重心集中在 **Reborn 架构的统一化与稳定性加固**，特别是 `ProductSurface` 接口的全面重构及扩展生命周期管理的标准化。虽然无新版本发布，但大量 PR 的合并与关闭表明基础设施层正在经历密集的整合期。社区对 Telegram 集成的 Bug 反馈较为集中，显示出该渠道在 v1 发布前的关键验证阶段。

## 2. 版本发布
**无新版本发布。**
当前处于 `release-fix-1.0.0-rc.1` 分支的修复与验证阶段，重点在于通过 CI/CD 流程确保回归测试覆盖度，而非功能迭代。

## 3. 项目进展
今日主要推进了以下架构层面的重大变更：

*   **ProductSurface 接口统一化：**
    *   **PR #6536** 将频道入口路由迁移至 `ChannelInboundProductSurface`，解耦了对旧 `ProductWorkflow` 的直接依赖。
    *   **PR #6538** 实现了 OpenAI 兼容接口的 `ProductSurface` 路由，增强了 API 网关的一致性。
    *   **PR #6442** 统一了本地与生产环境的运行时组合，移除了废弃的 `build_local_runtime` 路径，简化了构建逻辑。
*   **扩展生命周期标准化：**
    *   **PR #6520** 将扩展就绪状态简化为 `uninstalled`, `setup_needed`, `active` 三种状态，并分离了租户管理员配置与用户个人会员资格，提升了多租户场景下的管理清晰度。
    *   **PR #6531** 修复了管理员 OAuth 配置在运行时生效的问题，解决了托管部署中的配置应用延迟。
*   **测试基础设施增强：**
    *   **PR #6539** 引入了可选的 `BENCHMARKING_MODE`，旨在解决模型在无用户交互时的“逃逸”问题，提升自动化评估的可靠性。
    *   **PR #6525 & #6526** 隔离了 Emulate 提供者的可变状态，并建立了提供者能力覆盖清单，为后续的全自动化 QA 奠定基础。

## 4. 社区热点
以下是今日讨论最活跃的 Issue，反映了开发与维护团队的核心关切：

*   **[EPIC] Error Recoverability Endgame (#6284)**
    *   **链接:** [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
    *   **分析:** 作者 serrrfirat 提出模型必须从 100% 的中途错误中恢复。这是 Reborn 架构稳定性的基石，要求系统具备极强的容错性和自我修复契约，反映了项目向高可用性 AI Agent 平台演进的战略方向。
*   **Extension/Channel Lifecycle State Machine (#6105)**
    *   **链接:** [Issue #6105](https://github.com/nearai/ironclaw/issues/6105)
    *   **分析:** 针对 Slack 等频道生命周期导致的用户侧 Bug 家族进行根因分析与测试覆盖。由于此前多次修复未彻底解决问题，此 Issue 强调了建立严格的状态机测试的重要性。
*   **Configurable Skills and Tools (#5459)**
    *   **链接:** [Issue #5459](https://github.com/nearai/ironclaw/issues/5459)
    *   **分析:** 探讨管理员与用户在 WASM 工具和技能安装上的权限隔离，涉及多租户环境下的资源可见性与安全性设计。

## 5. Bug 与稳定性
今日报告了多个与 Telegram 集成及部署配置相关的 Bug，主要集中在 v1 发布检查清单（v1-launch-checklist）中：

*   **P1: Telegram /pair 命令失效 (#6475)**
    *   **链接:** [Issue #6475](https://github.com/nearai/ironclaw/issues/6475)
    *   **描述:** 用户在配对循环中发送 `/pair` 指令被当作普通文本处理，导致无法重试配对。
*   **P1: Telegram 交付通道不可配置 (#6474)**
    *   **链接:** [Issue #6474](https://github.com/nearai/ironclaw/issues/6474)
    *   **描述:** 交付默认设置页面仅显示 "Web app only"，无法选择 Telegram 或 Slack 作为外部交付通道。
*   **P2: Telegram 连接识别错误 (#6478)**
    *   **链接:** [Issue #6478](https://github.com/nearai/ironclaw/issues/6478)
    *   **描述:** 当 Telegram 已连接时，Agent 错误触发 Slack 授权阻塞。
*   **Bug: Google OAuth 配置在托管部署中无法应用 (#6534)**
    *   **链接:** [Issue #6534](https://github.com/nearai/ironclaw/issues/6534)
    *   **描述:** 操作者保存 Google OAuth 配置后，在 `agents-stg.near.ai` 上未生效。
    *   **关联 Fix:** **PR #6533** 试图部分修复此问题，增加了容器监督模式以改善重启和应用路径。
*   **Bug: 测试标志导致 Agent 创建失败 (#6523)**
    *   **链接:** [Issue #6523](https://github.com/nearai/ironclaw/issues/6523)
    *   **描述:** 部署新实例时勾选 "test build" 标志会导致错误。

## 6. 功能请求与路线图信号
*   **Attested-Signing Stack Revival (#6532):**
    *   **链接:** [Issue #6532](https://github.com/nearai/ironclaw/issues/6532)
    *   **信号:** 提出重新引入带 attest 签名的堆栈及 Ledger 硬件钱包清晰签名功能。这表明项目正在加强区块链交易的安全性与可审计性，可能纳入未来版本的高安全等级特性。
*   **Automated QA for Reborn (#4775):**
    *   **链接:** [Issue #4775](https://github.com/nearai/ironclaw/issues/4775)
    *   **信号:** 推动 Reborn 二进制文件的自动化 QA，包括 Hermetic、Fixture、E2E 和 Live 测试。这与今日关闭的多个测试基础 Issue (#6519, #6515, #6514) 相呼应，显示团队正致力于构建机械化的质量保障体系。

## 7. 用户反馈摘要
*   **Telegram 集成体验不佳:** 多位用户（joe-rlo, sergeiest）反馈 Telegram 的配对流程、命令识别及通道配置存在严重缺陷。这些 Bug 直接阻碍了用户通过 Telegram 使用 Agent 的核心场景。
*   **托管部署配置困难:** 用户反映在托管环境（Hosted Deployments）中，Google OAuth 等敏感配置的应用过程不透明且易出错，缺乏清晰的 CLI 或 UI 指引（参见 #6522, #6534）。
*   **CLI 可用性缺失:** 在 staging 环境中 SSH 登录后找不到 `ironclaw` 命令（#6521），反映出环境初始化或 PATH 配置的文档/实现疏漏。

## 8. 待处理积压
*   **Issue #6472 (Secret-lease + egress-proxy daemon):** 涉及沙箱出口代理和密钥租赁守护进程的设计与实现，依赖于容器核心的填充，需持续关注其与现有安全模型的兼容性。
*   **Issue #2246 (Unify extension model):** MCP 工具与 WASM 扩展的统一模型重构，旨在解决工具列表泛滥和 Provider 去重问题，是长期架构优化任务。
*   **Issue #1519 (Routine notifications lack context):** 例行通知在用户聊天线程中缺乏上下文，影响用户体验，需结合新的频道路由机制进行改进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-07-23
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
今日 LobsterAI 项目呈现出**高合并率、低新增活跃度**的特征。过去24小时内，5个 Pull Request 全部被合并或关闭，显示核心维护者对代码库的清理和更新非常积极。然而，Issues 方面仅有一条旧 Issue 因逾期（stale）被关闭，无新的功能讨论或 Bug 报告涌现。整体来看，项目处于“维护与优化”阶段，而非“新功能爆发”期，代码库正在通过修复渲染层问题和增强 Windows 安装程序稳定性来提升健壮性。

## 2. 版本发布
*   **无新版本发布。**
*   近期未检测到 `release` 标签更新，建议关注 `main` 分支的最新提交以获取最新构建。

## 3. 项目进展
今日主要进展集中在**前端渲染稳定性**、**Windows 平台安全加固**以及**内部模块重构**。

*   **Windows 安装程序加固 (#2377)**:
    *   **贡献者**: fisherdaddy
    *   **内容**: 针对 Windows 平台的更新安装器进行了硬增强处理。这通常涉及防止路径遍历、权限提升攻击或确保更新包完整性，提升了桌面端的安全性。
    *   **链接**: [PR #2377](https://github.com/netease-youdao/LobsterAI/pull/2377)

*   **导出模态框层级修复 (#2376)**:
    *   **贡献者**: liuzhq1986
    *   **内容**: 修复了协作（cowork）模块中导出选项模态框被侧边栏遮挡的问题。通过将模态框挂载到 `body`  portal，解决了 CSS 堆叠上下文（stacking context）冲突，改善了 UI 交互体验。
    *   **链接**: [PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376)

*   **OpenClaw 内存溢出防护 (#2375)**:
    *   **贡献者**: fisherdaddy
    *   **内容**: 增加了针对过大转录数据（oversized transcript）的守卫机制，防止 Gateway 进程因 JS Heap Out-of-Memory (OOM) 而崩溃。同时优化了重启后的连接逻辑，避免僵尸重连。这是提升系统稳定性的关键底层修复。
    *   **链接**: [PR #2375](https://github.com/netease-youdao/LobsterAI/pull/2375)

*   **旧 PR 清理 (#1346, #1347)**:
    *   **内容**: 两个关于“技能管理”和“定时任务增强”的旧 PR 被标记为 `stale` 并关闭。这表明维护团队正在清理积压的过时贡献，以保持代码库的整洁。
    *   **链接**: [PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346), [PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347)

## 4. 社区热点
*   **无显著活跃话题**。
*   今日唯一相关的 Issue **#1348** 已被关闭。该 Issue 提及“定时任务名称重复没有校验”，虽然已被标记为 stale，但它反映了用户对自动化任务唯一性校验的需求。由于关联的 PR #1347 已被关闭，该需求目前可能未被纳入当前开发轨道，需留意后续是否有新的替代方案提出。
    *   **链接**: [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348)

## 5. Bug 与稳定性
今日合并的 PR 中包含多项针对**稳定性**和**崩溃**的关键修复：

1.  **Gateway OOM 崩溃修复 (Critical)**:
    *   **问题**: OpenClaw 模块在处理大转录数据时导致 Gateway 进程内存溢出崩溃。
    *   **解决**: PR #2375 引入了大小限制守卫和异常分类，防止崩溃及后续的重连混乱。
    *   **链接**: [PR #2375](https://github.com/netease-youdao/LobsterAI/pull/2375)

2.  **UI 层级遮挡 Bug (Minor)**:
    *   **问题**: 协作模式下的导出模态框被侧边栏错误覆盖。
    *   **解决**: PR #2376 通过 DOM 挂载结构调整修复了此视觉 Bug。
    *   **链接**: [PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376)

3.  **Windows 安装器潜在风险 (Medium)**:
    *   **问题**: 原有安装器可能存在安全或兼容性隐患。
    *   **解决**: PR #2377 进行了加固处理。
    *   **链接**: [PR #2377](https://github.com/netease-youdao/LobsterAI/pull/2377)

## 6. 功能请求与路线图信号
*   **定时任务高级调度 (Pending/Closed)**:
    *   PR #1347 曾提出引入 Cron 自定义调度、Agent 选择器等功能，但已被关闭。这可能意味着该功能尚未达到合并标准，或者被推迟到下一个开发周期。
    *   **信号**: 用户对于细粒度的定时任务控制（如 Cron 表达式可视化编辑）有明确需求，但当前维护者可能认为实现复杂度较高或优先级较低。
    *   **链接**: [PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347)

*   **技能管理 (Pending/Closed)**:
    *   PR #1346 关于技能管理的优化也被关闭，暗示该模块的开发可能暂停或需要重新规划架构。
    *   **链接**: [PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346)

## 7. 用户反馈摘要
*   **痛点**:
    *   **内存管理**: 用户在使用 OpenClaw 处理长对话或大量数据时，遇到应用崩溃的问题，这对工作流连续性造成严重影响。
    *   **UI 一致性**: 模态框在复杂布局（如侧边栏+模态框）下的渲染层级问题影响了操作便利性。
*   **满意度**:
    *   尽管缺乏新功能的新闻，但针对稳定性和安全性的底层修复（如 Windows 安装器加固、OOM 防护）体现了维护团队对项目长期健康的重视。

## 8. 待处理积压
*   **定时任务唯一性校验 (Issue #1348)**:
    *   虽然 Issue 已关闭，但其指出的“定时任务名称重复无校验”是一个功能性缺陷。如果 PR #1347 的关闭是因为代码质量问题而非需求取消，那么这个问题可能仍未解决。
    *   **建议**: 若用户仍受此困扰，建议在 Issue #1348 下评论询问状态，或检查最新版本是否已通过其他途径修复。
    *   **链接**: [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348)

---
**分析师备注**: 当前项目重心明显偏向于**基础设施稳定性**（Gateway OOM、Windows Installer）和**代码库清理**（关闭过时 PRs）。新功能开发节奏放缓，建议关注后续是否有关于“定时任务”或“技能管理”的新提案出现。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**：2026-07-23
**数据来源**：GitHub (moltis-org/moltis)

## 1. 今日速览
今日 Moltis 项目整体处于低活跃状态，过去 24 小时内无新 Issue 提交，亦无新版本发布。社区贡献主要通过 1 个待合并的 Pull Request (#1162) 体现，专注于 Web 端会话日期显示逻辑的本地化优化。虽然代码贡献仍在持续，但缺乏新的问题报告或功能讨论，表明项目目前可能处于维护平稳期或用户反馈静默期。

## 2. 版本发布
**无新版本发布。**
今日未检测到任何 Release 记录，项目版本号保持不变。

## 3. 项目进展
**关键 PR: #1162 [WIP/OPEN] fix(web): show dates for older sessions**
*   **作者**: shixi-li
*   **状态**: Open (待合并)
*   **链接**: [PR #1162](https://github.com/moltis-org/moltis/pull/1162)
*   **进展分析**: 该 PR 旨在修复 Web 端会话列表中日期显示的本地化问题。具体改进包括：对今日会话保持 `HH:MM` 格式；对昨日及近期会话使用“昨天”或星期几的本地化标签；对更久远的会话展示完整日历日期（必要时包含年份）。此更新将显著提升多语言用户的阅读体验，解决了此前日期格式不统一或不符合本地习惯的问题。

## 4. 社区热点
**当前无显著热点讨论。**
*   今日 Issues 数量为 0，PR #1162 暂无评论和点赞数据。
*   由于缺乏互动数据，无法分析具体的用户诉求焦点。建议关注 PR #1162 合并后的用户反馈，以验证日期本地化改动的实际效果。

## 5. Bug 与稳定性
**无新增 Bug 报告。**
*   今日 Issues 更新为 0，未收到关于崩溃、回归或功能性错误的报告。
*   PR #1162 标题标记为 `fix`，暗示其修复了之前存在的日期显示逻辑缺陷，但该 PR 尚未合并，故不属于已解决的稳定状态问题。

## 6. 功能请求与路线图信号
**无明显新功能请求。**
*   今日无 Issue 提出新功能需求。
*   PR #1162 属于 UI/UX 优化性质的修复，而非全新功能开发。它反映了项目团队对国际化（i18n）细节的关注，这可能暗示未来的路线图会倾向于提升现有功能的易用性和本地化精度，而非大规模的功能拓展。

## 7. 用户反馈摘要
**无直接用户反馈。**
*   今日无 Issue 评论，因此无法提炼真实用户的痛点或使用场景。
*   基于 PR #1162 的描述可推断，用户在查看历史会话时，可能曾对日期格式的直观性或本地化适配感到不便，此次更新正是对此类潜在痛点的预防性修复。

## 8. 待处理积压
**PR #1162 需尽快审查与合并**
*   **对象**: [PR #1162](https://github.com/moltis-org/moltis/pull/1162)
*   **说明**: 该 PR 创建并更新于 2026-07-22，目前仍处于 Open 状态。作为一个涉及核心 UI 展示逻辑的修复，建议维护者优先审查其测试覆盖范围（特别是四种日期区间的浏览器兼容性），以便尽快合入主分支，提升用户体验。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：** 2026-07-23
**数据来源：** agentscope-ai/CoPaw (GitHub)

## 1. 今日速览
CoPaw 项目在 v2.0.0.post4 发布后保持高活跃度，过去24小时产生 31 个 Issues 和 50 个 PRs，显示出社区对 v2.0 架构的密集反馈与快速迭代。新版本主要优化了 Agent 推理循环，但用户反馈指出存在性能开销增加及稳定性问题（如进程冻结、连接异常）。开发团队响应迅速，今日合并了大量来自核心贡献者（如 patrick-andstar, zealonexp）的修复性 PR，重点解决 v2.0 引入的回归 Bug 和边缘情况处理。整体项目处于“快速修复期”，健康度良好，但需关注 v2.0 版本的长期稳定性。

## 2. 版本发布
**v2.0.0.post4**
*   **发布时间：** 2026-07-22
*   **核心变更：**
    *   优化 Agent 推理逻辑，旨在缓解冗余思维循环（redundant thinking loops）和重复工具调用。
*   **迁移注意：**
    *   用户反馈升级至 v2.0.x 后，简单对话响应引入了约 2 秒的固定延迟（Issue #6307），建议用户在生产环境评估此性能影响。
    *   链接: [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4)

## 3. 项目进展
今日 PR 更新频繁，主要推进以下方向：
*   **稳定性修复：** 合并了多个关键修复，包括 Token 使用持久化重试机制 (#6375)、空闲队列清理导致的状态丢失问题 (#6373)、以及文件下载超时后的回退逻辑 (#6371)。这些修复显著增强了系统在异常网络或高负载下的鲁棒性。
*   **治理与安全：** 修复了审计日志在 `audit_level=none` 时仍写入数据库的问题 (#6369)，并优先显示“一次性批准”按钮以改善用户体验 (#6357)。
*   **功能增强：**
    *   支持 Cron Job 指定独立模型 (#6353)，解决了多模型调度需求。
    *   新增 QwenPaw Creator App，提供从脚本到视频生成的完整工作流 (#6284)。
    *   插件市场增加排序功能 (#6349)。
*   **平台兼容性：** 修复了 Windows 环境下测试脚本无法运行的问题 (#6365)，提升了开发者体验。

## 4. 社区热点
*   **上下文压缩导致进程冻结 (Issue #5218)：** 评论数最多 (18条)。这是一个长期存在的严重 Bug，用户报告子 Agent 触发上下文压缩时主进程无响应。尽管已关闭，但类似稳定性问题在今日 Issue #6376 中再次出现，表明该模块仍是痛点。
*   **v2.0 性能开销质疑 (Issue #6307)：** 用户明确指出 v2.0 相比 v1.x 在简单回复上增加了 ~2s 延迟。这反映了用户对升级后性能倒退的担忧，是后续优化的重点方向。
*   **Docker 部署热更新需求 (Issue #6344)：** 用户抱怨当前 Docker 更新方式会导致本地运行环境（Node, ffmpeg 等）丢失，建议采用卷挂载或原地更新方案。这是运维层面的高频痛点。
*   **模型绑定灵活性 (Issue #6318)：** 用户希望支持 Conversation 级别的模型指定，而非仅绑定 Agent。这一需求与今日合并的 PR #6353 (Cron Job 模型指定) 有异曲同工之妙，暗示未来可能扩展为更细粒度的模型路由。

## 5. Bug 与稳定性
以下 Bug 按严重程度排列，部分已有对应 Fix PR：

| 问题描述 | 严重程度 | GitHub Issue | 关联 Fix PR |
| :--- | :--- | :--- | :--- |
| **主进程因 Loop 功能崩溃** | High | [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | 待确认 |
| **上下文压缩导致进程冻结** | High | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 已关闭 (未彻底解决?) |
| **RemoteProtocolError 连接断开** | Medium | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 待分析 |
| **Tool Call 参数被 Markdown/XML 污染** | Medium | [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) | [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) |
| **Context Injection 角色错误导致 API 报错** | Medium | [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358) | [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) |
| **MiniMax-M3 视觉能力异常/幻觉** | Medium | [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | 待分析 |
| **Token 持久化失败无重试** | Low | [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) | [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) |
| **Mission 解析引号命令错误** | Low | [#6355](https://github.com/agentscope-ai/QwenPaw/issues/6355) | [#6356](https://github.com/agentscope-ai/QwenPaw/pull/6356) |

## 6. 功能请求与路线图信号
*   **细粒度模型控制：** Issue #6318 和 #6316 均请求更灵活的模型指定能力（Conversation 级或 Cron Job 级）。PR #6353 已实现 Cron Job 级别，预计未来将扩展至通用 Conversation 级别。
*   **Docker 持续集成/更新体验：** Issue #6344 提出的“Web 端热更新”若被采纳，将极大提升自部署用户的体验，可能是 v2.1 或后续维护版本的重点。
*   **文档上传支持：** Issue #6297 请求支持拖拽上传 PDF/Office 文档。这是企业级 Agent 应用的常见需求，若纳入路线图，需评估后端解析引擎的支持情况。
*   **多租户/多用户支持：** Issue #6335 询问公司多用户使用场景。目前项目似乎侧重个人助手，多账号管理可能是长期演进方向。

## 7. 用户反馈摘要
*   **正面反馈：** 新版本发布速度快，社区响应积极；Creator App 等新功能受到关注。
*   **负面反馈/痛点：**
    *   **性能焦虑：** v2.0 带来的额外延迟让用户感到不满，尤其是对于简单任务。
    *   **稳定性不足：** 频繁的进程崩溃、连接中断和工具调用失败降低了信任度。
    *   **运维繁琐：** Docker 更新导致的环境重置是资深用户的重大痛点。
    *   **UI/UX 细节：** 审批对话框的设计风险（Issue #6354）和默认频道残留问题（Issue #6341）影响了易用性。

## 8. 待处理积压
*   **Issue #5218:** 虽然标记为 Closed，但评论数极高且涉及核心稳定性，需确认是否真正根除，否则可能引发更多类似 #6376 的报告。
*   **Issue #6314:** RemoteProtocolError 原因不明（QwenPaw 主动关闭连接），需进一步排查网络层或超时配置。
*   **Issue #6335:** 多用户/企业部署需求，需官方明确产品定位和支持计划。
*   **Issue #6344:** Docker 热更新方案，若技术可行，优先级应较高以改善运维体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-07-23
**数据来源：** GitHub (zeroclaw-labs/zeroclaw)

## 1. 今日速览
ZeroClaw 在 2026-07-23 保持高活跃度，过去24小时内共产生 **50 条 Issue** 和 **50 条 PR** 更新。项目重心明显向 **Anthropic 提供商可靠性增强**（服务端回退、拒绝处理）及 **核心运行时稳定性**（Goal 状态持久化、Channel 重启循环修复）倾斜。虽然今日无新版本发布，但多个关键 PR 已合并或处于待合并状态，显示出 v0.9.0 版本前的冲刺迹象。社区对跨平台兼容性（Windows CI）和安全认证（OIDC RFC）的关注度持续高位。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要推进了以下关键功能与修复：

*   **Anthropic 可靠性栈完善 (High Priority)**
    *   通过 PR #9262, #9263, #9265, #9266, #9268 形成闭环，实现了 Anthropic 服务端回退检测、原生拒绝转 typed error、客户端侧回退路由以及最终的用户可见通知。这显著提升了使用 Anthropic 模型时的容错率和透明度。
    *   *链接:* [PR #9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262), [PR #9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263), [PR #9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265), [PR #9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266), [PR #9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268)
*   **核心运行时稳定性修复**
    *   PR #8996 和 #8746 解决了 Daemon 重载期间 Goal 状态丢失及自我恢复循环的问题，这是长期困扰多 Agent 部署的稳定性痛点。
    *   PR #9197 修复了 WhatsApp Channel 在 Ctrl+C 关闭时因 Supervisor 误判导致的重启循环崩溃。
    *   *链接:* [PR #8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996), [PR #8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746), [PR #9197](https://github.com/zeroclaw-labs/zeroclaw/pull/9197)
*   **基础设施与文档**
    *   PR #9269 引入 Dependabot 监控 Web 端 npm 依赖，降低安全维护成本。
    *   PR #9267 和 #9264 增强了安装文档的结构化生成及贡献者边界证明矩阵，提升了项目对外的专业度。
    *   *链接:* [PR #9269](https://github.com/zeroclaw-labs/zeroclaw/pull/9269), [PR #9267](https://github.com/zeroclaw-labs/zeroclaw/pull/9267), [PR #9264](https://github.com/zeroclaw-labs/zeroclaw/pull/9264)

## 4. 社区热点
以下 Issue 评论数较多，反映了社区当前的核心关注点：

*   **[Bug] Windows 测试失败问题 (#7462)**
    *   **热度:** 11 条评论
    *   **分析:** 74 个测试在 Windows 上失败，暴露了 CI 仅运行 Linux 的盲区。社区对此高度关注，因为这阻碍了 Windows 用户的使用体验。
    *   *链接:* [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)
*   **[RFC] OIDC 认证支持 (#7141)**
    *   **热度:** 7 条评论
    *   **分析:** 作为 v0.9.0 的安全架构基石，OIDC 插件化认证方案正在激烈讨论中，涉及企业级部署的关键需求。
    *   *链接:* [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)
*   **[Feature] OTel 追踪关联 (#6641)**
    *   **热度:** 8 条评论
    *   **分析:** 可观测性增强，旨在将 LLM 调用、工具使用和记忆检索嵌套在单一 Turn Trace 下，满足高级调试需求。
    *   *链接:* [Issue #6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)
*   **[RFC] A2A Agent 发现协议 (#7218)**
    *   **热度:** 7 条评论
    *   **分析:** 探讨多 Agent 环境下的互操作性标准，显示项目正从单 Agent 向多 Agent 生态系统演进。
    *   *链接:* [Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)

## 5. Bug 与稳定性
*   **P1/P2 级别严重问题：**
    *   **#8837:** History trimming 在无提示情况下发生，导致上下文丢失。*(状态: Closed, 评论: 5)*
        *   *链接:* [Issue #8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837)
    *   **#6724:** Signal/Voice Call 通道凭据为空导致 Supervisor 重启循环。*(状态: Open, 评论: 4)*
        *   *链接:* [Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)
    *   **#7462:** Windows 平台 74 项测试失败，CI 未覆盖。*(状态: Open, 评论: 11)*
        *   *链接:* [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)
*   **其他已知问题：**
    *   **#9235:** npm audit 发现 3 个高危/临界漏洞（@redocly/openapi-core）。*(状态: Open, 评论: 2)*
        *   *链接:* [Issue #9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235)

## 6. 功能请求与路线图信号
*   **远程会话持久化 (#9249):** PR #9249 为远程 Session Backend 奠定了基础，表明下一版本将支持更灵活的状态存储后端。
*   **Shell 工具内存限制 (#6916):** 用户报告 LLM 执行 shell 命令时可能 OOM，建议增加进程内存限制。这是一个重要的生产环境稳定性补丁候选。
    *   *链接:* [Issue #6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)
*   **Agent 评估框架 (#7065):** `zeroclaw eval` 工具的计划推进，显示团队重视 Agent 质量的量化评估。
    *   *链接:* [Issue #7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)
*   **新 Channel 支持:** Mastodon (#6423), Twilio SMS (#6427), Rocket.Chat (#6435), Zulip (#6437) 等长尾渠道的需求持续存在，反映用户对去中心化通讯集成的渴望。

## 7. 用户反馈摘要
*   **配置复杂性:** 用户抱怨 `config.toml` 中 provider 设置与模型切换逻辑的不一致，导致运行时行为不可预测（见 Issue #6557）。
*   **本地化缺失:** 部分 Channel 运行时回复仍硬编码英文，未遵循 Fluent 本地化配置（Issue #6548）。
*   **文档缺口:** 用户在使用 AWS Bedrock 时遇到凭证配置困难，现有文档未涵盖 systemd 服务设置细节（Issue #8925）。
*   **正面反馈:** 开发者对 `tracing-opentelemetry` 桥接的响应速度表示赞赏（Issue #6641 评论区）。

## 8. 待处理积压
*   **Windows CI 兼容性 (#7462):** 作为 P1 风险的高优先级 Issue，需尽快修复以扩大用户群。
*   **OIDC 认证 RFC (#7141):** 该 RFC 是 v0.9.0 的核心安全特性，需加速评审与合并。
*   **npm 安全漏洞 (#9235):** 依赖 `@redocly/openapi-core` 的高危漏洞需立即升级依赖或通过 PR 解决。
*   **Signal/Voice 通道崩溃 (#6724):** 配置错误导致的服务崩溃需添加前置校验以防止重启循环。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*