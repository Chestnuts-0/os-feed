# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-26 02:15 UTC

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
**日期：** 2026-06-26
**数据来源：** GitHub (openclaw/openclaw)

## 1. 今日速览
2026年6月26日，OpenClaw 项目保持极高的社区活跃度，过去24小时内产生500个新Issue和500个PR更新，显示出庞大的开发者生态和密集的贡献流。尽管没有新版本发布，但代码库在安全性（特别是资源耗尽攻击防护）、会话状态一致性及多通道集成方面取得了显著进展。核心议题集中在解决Gateway内存泄漏、优化长上下文管理以及强化插件安装信任机制。项目整体处于“高吞吐、高维护压力”的健康状态，但需警惕长期未解决的内存和会话状态Bug对稳定性的潜在影响。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键PR主要集中在底层稳定性修复和安全加固：
*   **安全与资源保护：** PR #96899 和 #96893 针对 Runway Video 和 Image Generation 提供商限制了 JSON 响应读取大小，防止恶意或故障提供商导致 OOM（内存溢出）。PR #81364 引入了 ClawHub 信任检查，在插件和技能安装前验证发布者信誉，显著提升生态安全性。
*   **会话与状态一致性：** PR #95996 修复了 yield 父运行在子代理完成前过早终止的问题，确保异步工作流的状态正确。PR #96391 尝试保留 Gateway 重启后的 WebChat 会话上下文，解决重启导致上下文丢失的问题。
*   **提供商兼容性：** PR #96047 禁用了 Minimax-M3 模型的 thinking 功能以兼容 Anthropic Messages 路径；PR #96721 修复了 Moonshot 自定义 baseUrl 导致的 Kimi 网页搜索认证失败问题。

## 4. 社区热点
以下 Issues 和 PRs 获得了最高的社区关注和评论量，反映了用户的核心痛点：

*   **[Security] gh-issues skill 注入未清理的 Issue Body** (#45740) - *18 评论*
    *   **链接:** [Issue #45740](https://github.com/openclaw/openclaw/issues/45740)
    *   **分析:** 用户担忧将原始 GitHub Issue 内容直接注入子代理 Prompt 存在安全风险，缺乏 sanitization。这是关于 Agent 安全边界的典型讨论。
*   **[Feat] 集中式文件名编码工具** (#48788) - *18 评论*
    *   **链接:** [Issue #48788](https://github.com/openclaw/openclaw/issues/48788)
    *   **分析:** 针对飞书等多渠道文件名乱码问题，社区呼吁建立统一的编码处理架构，而非补丁式修复。
*   **[Bug] Cron agentTurn 发送不支持的 thinking 参数** (#63918) - *17 评论*
    *   **链接:** [Issue #63918](https://github.com/openclaw/openclaw/issues/63918)
    *   **分析:** 自动化任务因模型兼容性配置错误而失败，影响生产环境的可靠性。
*   **[Bug] Gateway 内存泄漏导致 OOM** (#55334, #54155) - *10-7 评论*
    *   **链接:** [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) / [Issue #54155](https://github.com/openclaw/openclaw/issues/54155)
    *   **分析:** 多个 Issue 指向 `sessions.json` 无限增长和 skillsSnapshot 重复存储导致的内存泄漏。这是一个长期存在的严重稳定性问题，用户报告内存从 389MB 飙升至 14.7GB。
*   **[Feature] 社区技能开发 & ClawHub** (#50090) - *15 评论*
    *   **链接:** [Issue #50090](https://github.com/openclaw/openclaw/issues/50090)
    *   **分析:** 用户对技能生态系统的成熟度有较高期待，希望简化技能开发和分发流程。

## 5. Bug 与稳定性
今日报告及持续关注的严重 Bug 如下：

*   **P1/Critical: Gateway 内存泄漏与 OOM**
    *   **Issue:** #55334, #54155
    *   **描述:** `sessions.json` 积累未修剪的条目，导致内存持续增长直至崩溃。
    *   **状态:** 已有 PR #48278 提出压缩循环守卫的配置脚手架，但根本修复仍需跟进。
*   **P1: 会话状态不一致与消息丢失**
    *   **Issue:** #63216 (硬重置循环), #52249 (ACP 父会话卡死), #50165 (子代理提前完成)
    *   **描述:** 复杂的会话状态机在处理高负载或特定模型行为时出现逻辑错误，导致用户感知到的“假死”或数据丢失。
    *   **状态:** PR #95996 正在尝试修复部分 yield 语义问题。
*   **P1: 安全漏洞**
    *   **Issue:** #45740 (Prompt 注入), #65624 (Mattermost 回调 URL 明文暴露)
    *   **描述:** 插件或通道适配器中的安全配置缺陷可能导致信息泄露或被利用。
*   **Regression: Chrome Extension 中继移除**
    *   **Issue:** #53599
    *   **描述:** v2026.3.22 移除了跨机器浏览器中继支持，破坏了托管服务提供商的工作流。

## 6. 功能请求与路线图信号
*   **多索引向量记忆 (Multi-Index Embedding Memory):**
    *   **Issue:** #63990, #60572
    *   **信号:** 用户强烈要求支持多模型/多提供商的记忆索引，以实现故障转移和避免向量空间混合。这可能成为下一代记忆架构的核心特性。
*   **敏感数据脱敏:**
    *   **Issue:** #64046
    *   **信号:** 用户对配置文件和日志中的明文 API Key/Token 表示担忧，期望原生支持脱敏展示。
*   **Per-Agent TTS/STT 配置:**
    *   **Issue:** #66252
    *   **信号:** 多语言/多声音需求推动了对细粒度语音合成配置的请求。
*   **远程 Reranker 支持:**
    *   **Issue:** #64438
    *   **信号:** 为了提升检索质量，用户希望像支持远程 Embedding 一样支持远程 Reranker。

## 7. 用户反馈摘要
*   **痛点:**
    *   **稳定性焦虑:** 多次提到 Gateway 重启后上下文丢失、长时间运行导致的内存溢出，以及对“幻觉”输出的担忧（如 Issue #49876 中 Cron 任务产生伪造输出）。
    *   **配置复杂性:** 用户反映在 Docker 环境中 `XDG_CONFIG_HOME` 变量未被正确解析 (Issue #53628)，以及模型别名排序错误 (Issue #96588) 等细节问题增加了运维负担。
    *   **用户体验:** 流式传输时的屏幕阅读器无障碍问题 (Issue #65538) 和工具卡片折叠状态 (Issue #49944) 表明 UI/UX 的细节打磨仍有空间。
*   **满意点:**
    *   **社区响应速度:** 大量 PR 在提交当天即获得审查或合并，显示了高效的维护流程。
    *   **扩展性:** 用户对 ClawHub 和社区技能生态抱有厚望，认为这是 OpenClaw 区别于其他框架的关键优势。

## 8. 待处理积压
以下 Issue 和 PR 长期未获最终解决或合并，建议维护者优先关注：

*   **[Security] gh-issues skill 注入漏洞** (#45740) - *已标记 P2，但涉及核心安全，需尽快提供 sanitization 方案。*
*   **[Bug] Gateway 内存泄漏** (#55334, #54155) - *严重影响生产环境可用性，需优先定位 `sessions.json` 修剪逻辑。*
*   **[Regression] Chrome Extension 中继移除** (#53599) - *影响特定用户群体，需评估是否恢复或提供替代方案。*
*   **[Feature] 社区技能开发 & ClawHub** (#50090) - *生态建设的核心，需明确产品决策和优先级。*
*   **[Bug] 敏感数据脱敏** (#64046) - *用户需求明确，技术实现相对简单，可作为快速改进项。*

---
*本报告由 Agnes-2.0-Flash 基于 GitHub 数据自动生成。*

---

## 横向生态对比

以下是基于 2026-06-26 各开源项目社区动态的横向对比分析报告。

### 1. 生态全景
2026年6月下旬，个人 AI 助手与自主智能体开源生态进入**“深水区”**，竞争焦点从单纯的功能堆砌转向**安全性、稳定性与企业级可用性**。核心框架如 OpenClaw、NanoBot 和 ZeroClaw 均面临严峻的内存泄漏、权限绕过和会话一致性挑战，表明 Agent 架构正从实验性玩具迈向生产级基础设施。社区活跃度两极分化，头部项目维持高频迭代以修复技术债，而部分边缘项目趋于沉寂，行业整合迹象初显。

### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 核心状态 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 500+ | 500+ | ❌ | **高负荷/高风险** | 极高活跃度，但内存泄漏与安全漏洞堆积，维护压力大。 |
| **NanoBot** | ~10 | ~10+ | ❌ | **高危/紧急修复** | 安全响应极快，集中修复 Exec/MCP 权限绕过，处于紧急补丁期。 |
| **Hermes Agent** | 50+ | 50+ | ❌ | **中等/稳定** | 聚焦认证安全与桌面端构建修复，P1 Bug 响应迅速。 |
| **PicoClaw** | 3 | 19 | ❌ | **良好/优化** | 依赖更新与资源泄漏修复，Go 语言生态稳健，无重大阻塞。 |
| **NanoClaw** | 1 | 16 | ❌ | **优秀/演进** | 容器隔离与认证架构优化，技术债务清理高效，社区互动适中。 |
| **IronClaw** | 50+ | 50+ | ❌ | **高负荷/重构** | Reborn 架构冲刺期，WebUI 交互与底层 CAS 性能优化并重。 |
| **LobsterAI** | 1 | 9 | ❌ | **稳定/收敛** | 插件生态强化与协作逻辑优化，开发节奏平稳，无新功能爆发。 |
| **CoPaw** | 27 | 50+ | ❌ | **高负荷/迁移** | AgentScope 2.0 适配阵痛期，浏览器自动化与前端渲染问题集中。 |
| **ZeroClaw** | 47 | 50+ | ❌ | **高负荷/冲刺** | v0.8.2/0.8.3 发布冲刺，WASM 安全与多代理权限控制是重点。 |
| **NullClaw** | 0 | 0 | ❌ | **停滞** | 无活动。 |
| **TinyClaw** | 0 | 0 | ❌ | **停滞** | 无活动。 |
| **Moltis** | 0 | 0 | ❌ | **停滞** | 无活动。 |
| **ZeptoClaw** | 0 | 0 | ❌ | **停滞** | 无活动。 |

### 3. OpenClaw 在生态中的定位
*   **规模效应与生态中心：** OpenClaw 拥有绝对领先的社区规模（日均千级交互），是事实上的“参考框架”。其插件生态（ClawHub）和多通道集成能力最强，吸引了大量第三方开发者。
*   **技术路线差异：** 相比 NanoBot 的极简安全沙箱和 ZeroClaw 的 WASM 插件化，OpenClaw 走的是**全能型单体架构**路线，功能极其丰富但随之带来巨大的复杂性（如 Gateway 内存管理、会话状态机）。
*   **优势与挑战：** 优势在于功能覆盖面最广；挑战在于“高吞吐、高维护压力”，其核心的内存泄漏和 Prompt 注入问题若不解决，将动摇其作为生产级基座的地位。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与表现 |
| :--- | :--- | :--- |
| **安全边界与权限控制** | NanoBot, ZeroClaw, OpenClaw, Hermes | **NanoBot** 紧急修复 Exec/MCP 绕过；**ZeroClaw** 修复 Delegate 权限继承漏洞；**OpenClaw** 引入 ClawHub 信任检查；**Hermes** 修复 OAuth 令牌泄露。共识：Agent 必须具备严格的沙箱和白名单机制。 |
| **内存与资源管理** | OpenClaw, CoPaw, ZeroClaw, IronClaw | **OpenClaw** Gateway OOM；**CoPaw** 浏览器进程残留；**ZeroClaw** MCP 子进程泄漏；**IronClaw** CAS 锁冲突。共识：长期运行的 Agent 系统必须解决资源泄漏和并发锁性能瓶颈。 |
| **多代理协作与状态一致性** | OpenClaw, LobsterAI, ZeroClaw | **OpenClaw** 修复子代理 Yield 语义；**LobsterAI** 优化 Cowork 轮询；**ZeroClaw** 处理 Skill 安装上下文。共识：父子代理间的状态同步、工具调用链路的可靠性是核心难点。 |
| **插件/技能生态标准化** | ZeroClaw, CoPaw, NanoClaw | **ZeroClaw** 推动 WASM 默认化和 OCI 注册表；**CoPaw** 尝试 pip 插件标准化；**NanoClaw** 引入技能蒸馏。共识：插件需更安全（签名/WASM）、更易分发（OCI/pip）。 |

### 5. 差异化定位分析

*   **OpenClaw (全能型基座):** 面向**重度用户和开发者**。功能最全，支持最多通道和模型，但配置复杂，运维成本高。适合需要高度定制化和庞大生态支持的场景。
*   **NanoBot (安全优先型):** 面向**对安全性极度敏感的个人/小团队**。核心卖点是严格的 Exec 白名单和 MCP 权限隔离，架构轻量，适合嵌入式或低资源环境，但功能相对聚焦。
*   **ZeroClaw (现代化/模块化):** 面向**前沿探索者和企业级试点**。大力推行 WASM 插件、ACP 协议标准化和供应链签名。技术栈最新，但处于快速变动期，适合愿意承担一定不稳定风险以换取架构先进性的用户。
*   **Hermes Agent (桌面/CLI 体验):** 面向**日常驾驶 (Daily-driver)**。重点优化 Electron 桌面端体验和 TUI，解决认证和会话持久化问题，适合个人助理场景。
*   **IronClaw (企业/团队协作):** 面向**团队部署**。强调 Reborn 架构下的 WebUI 交互、权限策略（RBAC）和自动化调度，试图解决多用户环境下的状态一致性问题。
*   **CoPaw (AgentScope 生态):** 面向**AgentScope 用户**。深度绑定 AgentScope 2.0，侧重浏览器自动化和数据分析插件，是 Python 生态中 Agent 编排的重要一环。

### 6. 社区热度与成熟度

*   **快速迭代/重构阶段 (High Velocity / Refactoring):**
    *   **ZeroClaw:** v0.8.2/0.8.3 冲刺，WASM 和 ACP 协议落地，架构变动剧烈。
    *   **IronClaw:** Reborn 架构 Dogfooding，大量 UI/UX 和底层性能修复。
    *   **CoPaw:** 适配 AgentScope 2.0，迁移期 Bug 频发但修复迅速。
*   **高负荷/技术债清理阶段 (High Load / Tech Debt):**
    *   **OpenClaw:** 流量巨大，但内存泄漏和安全漏洞成为瓶颈，急需稳定性修复。
    *   **NanoBot:** 被动响应安全漏洞，处于“救火”模式，但响应速度快。
*   **稳定/成熟阶段 (Stable / Mature):**
    *   **NanoClaw:** 功能完善，依赖管控良好，社区互动适中，处于良性发展期。
    *   **Hermes Agent:** 聚焦具体 Bug 修复，无大规模架构变动，稳定性尚可。
*   **收缩/停滞阶段 (Declining/Stagnant):**
    *   **NullClaw, TinyClaw, Moltis, ZeptoClaw:** 无活动，可能已被市场淘汰或并入其他项目。

### 7. 值得关注的趋势信号

1.  **“默认拒绝”安全范式确立：** NanoBot 和 ZeroClaw 的实践表明，未来的 Agent 框架必须在设计上贯彻“默认拒绝”原则，无论是 Exec 命令、MCP 资源还是插件权限，白名单机制将成为标配。
2.  **WASM 成为插件运行时新标准：** ZeroClaw 推动 WASM 默认化，结合 OCI 注册表提案，预示着插件生态将从 Node.js/Python 脚本向更轻量、更安全、跨语言的 WASM 沙箱迁移。
3.  **多代理协作的复杂性爆发：** 随着 LobsterAI、OpenClaw 和 ZeroClaw 都在处理父子代理状态同步、工具调用链和权限继承问题，**“多代理编排的确定性”** 将是下一阶段的核心技术壁垒。
4.  **企业级可用性成为分水岭：** IronClaw 的 RBAC 和 ZeroClaw 的供应链签名显示，开源 Agent 框架正在从个人玩具向企业工具转型，**审计、权限控制和合规性** 将成为用户选型的关键指标。
5.  **内存与资源管理是稳定性杀手：** 几乎所有活跃项目都报告了 OOM、进程泄漏或会话状态不一致问题。谁能率先提供经过验证的、长期运行稳定的资源管理机制，谁就能赢得生产环境的信任。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub HKUDS/nanobot

## 1. 今日速览
NanoBot 在过去24小时内展现出极高的安全响应速度与社区活跃度。针对一系列严重的执行工具（Exec Tool）和 MCP 权限绕过漏洞，维护者迅速提交了修复 PR，显示出对供应链安全和沙箱隔离的高度重视。同时，WebUI 移动端体验优化（PWA）、Windows 服务稳定性修复以及亚信（Xiaomi）语音转录兼容性改进等功能性进展显著。尽管安全补丁密集，但暂无新版本正式发布，预计即将发布紧急安全更新。

## 2. 版本发布
- **当前状态：** 过去24小时无新版本（Release）发布。
- **注意：** 鉴于多个 Critical 级别的安全漏洞已被报告并正在修复中，建议用户密切关注后续发布的 `v0.2.x` 或紧急补丁版本，以应用 `allowPatterns` 绕过修复及 MCP 权限收紧补丁。

## 3. 项目进展
今日主要进展集中在**安全加固**与**底层稳定性修复**：

*   **安全漏洞修复（High Priority）：**
    *   **Exec 工具白名单绕过：** 针对 `tools.exec.allowPatterns` 被链式命令（chained commands）或注释尾部绕过的风险，PR **#4526** 引入了更严格的正则匹配逻辑（从 `re.search` 改为 `re.fullmatch`），并移除了不安全的注释剥离逻辑。
    *   **MCP 权限越权：** 多个 Issue 指出 MCP 的 `enabledTools` 配置未能有效屏蔽资源（Resources）和提示词（Prompts）暴露。PR **#4524** 修复了此问题，确保所有 MCP 能力均受限于配置的白名单策略。
    *   **环境变量泄露：** PR **#4525** 将 `exec` 工具的默认 `login_shell` 行为从 `true` 改为 `false`，防止加载 `~/.bash_profile` 等文件导致敏感密钥泄露。
    *   **文件系统权限：** PR **#4099** 修复了 `extra_allowed_dirs` 被错误地视为可写根目录的问题，确保只读目录的完整性。

*   **核心逻辑优化：**
    *   **会话去重与稳定性：** PR **#4530** 修复了非流式解析器中的工具调用 ID 重复问题；PR **#4533** 解决了磁盘会话键冲突导致的覆盖风险；PR **#4522** 添加了通用的重复工具调用守卫，防止代理因反复失败而陷入死循环。
    *   **流式处理优化：** PR **#4531** 和 **#4532** 改进了流式 delta 合并及 Anthropic 内容块类型验证，提升了多模型兼容性和数据一致性。

## 4. 社区热点
以下是今日讨论最激烈、关注度最高的议题：

*   **[Security] MCP `enabledTools` Scope Bypass Exposes Resource and Prompt Wrappers**
    *   **Issue:** [#4519](https://github.com/HKUDS/nanobot/issues/4519)
    *   **热度分析：** 该 Issue 揭示了 MCP 服务器能力暴露的核心设计缺陷，直接关联到多个其他 MCP 相关安全 Issue（#4517, #4434, #4435）。社区和安全研究人员对此类权限边界模糊问题高度敏感。
    *   **诉求：** 要求严格实施“默认拒绝”策略，确保只有明确允许的工具才暴露给模型，且资源/提示词也应受同等限制。

*   **[Security] `tools.exec.allowPatterns` whitelist bypass leads to shell command execution via chained commands**
    *   **Issue:** [#4514](https://github.com/HKUDS/nanobot/issues/4514)
    *   **热度分析：** 作为执行工具最常见的绕过方式之一，链式命令执行漏洞影响范围极广。该 Issue 及其变体（#4515, #4516, #4520, #4521）构成了今日最大的安全讨论集群。
    *   **诉求：** 强化命令白名单的校验机制，防止通过 `;`, `&&`, `||` 或注释符号绕过限制。

*   **[Bug] Windows 系统下，gateway 命令行选项 `--background` 的问题**
    *   **Issue:** [#4511](https://github.com/HKUDS/nanobot/issues/4511)
    *   **热度分析：** 涉及 Windows 平台用户的后台运行体验，特别是与 `/restart` 命令配合使用时的进程状态不一致问题。
    *   **诉求：** 修复 Windows 环境下守护进程的生命周期管理，确保重启后 PID 和日志文件指向正确。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列：

1.  **Critical - 安全漏洞系列：**
    *   **Malicious data-exfiltration code in litellm_init.pth** ([#2439](https://github.com/HKUDS/nanobot/issues/2439))：PyPI 包中捆绑恶意代码，虽已关闭，但需确认是否需重新发布干净包。
    *   **Exec 工具多种绕过方式** ([#4514](https://github.com/HKUDS/nanobot/issues/4514), [#4515](https://github.com/HKUDS/nanobot/issues/4515), [#4516](https://github.com/HKUDS/nanobot/issues/4516), [#4520](https://github.com/HKUDS/nanobot/issues/4520), [#4521](https://github.com/HKUDS/nanobot/issues/4521))：均已在 PR **#4526** 和 **#4525** 中部分或全部修复。
    *   **MCP 权限绕过** ([#4519](https://github.com/HKUDS/nanobot/issues/4519), [#4517](https://github.com/HKUDS/nanobot/issues/4517), [#4434](https://github.com/HKUDS/nanobot/issues/4434), [#4435](https://github.com/HKUDS/nanobot/issues/4435))：已在 PR **#4524** 中修复。

2.  **High - 功能缺陷与回归：**
    *   **Exec 默认登录 Shell 导致密钥泄露** ([#4518](https://github.com/HKUDS/nanobot/issues/4518))：已在 PR **#4525** 中修复。
    *   **Filesystem 额外目录读写权限错误** ([#4073](https://github.com/HKUDS/nanobot/issues/4073))：已在 PR **#4099** 中修复。
    *   **Dream 禁用后历史注入** ([#4242](https://github.com/HKUDS/nanobot/issues/4242))：已关闭，需确认代码逻辑是否彻底解决。

3.  **Medium - 平台兼容性与体验：**
    *   **Windows NSSM 服务重启异常** ([#4513](https://github.com/HKUDS/nanobot/issues/4513))：待处理。
    *   **Telegram Web 消息不支持** ([#4488](https://github.com/HKUDS/nanobot/issues/4488))：已关闭，可能与富文本功能引入有关。
    *   **小米 MiMo ASR 转录失败** ([#4492](https://github.com/HKUDS/nanobot/issues/4492))：已在 PR **#4493** 中通过前端 WebM 转 WAV 修复。

## 6. 功能请求与路线图信号
*   **Gateway Webhook 支持：** PR **#4502** 提议添加顶层 `webhooks` 配置，支持通用和 GitHub 风格的 webhook 触发器，这将增强 NanoBot 作为事件驱动代理的能力。
*   **Skills 子目录支持：** PR **#4504** 允许技能目录嵌套，解决随着技能数量增加导致的扁平化管理混乱问题，提升可维护性。
*   **PWA 与移动端手势：** PR **#4494** 实现了 PWA 支持和侧边栏滑动手势，显著改善移动端用户体验，符合现代 Web 应用标准。
*   **MCP 服务器空闲自动杀死：** PR **#4506** 提议添加 `idle_timeout` 参数，自动终止闲置的 MCP 服务器进程，防止资源泄漏和僵尸进程。
*   **记忆急切合并：** PR **#4402** 提供可选的记忆合并功能，有助于控制上下文窗口大小，优化长对话性能。
*   **Ask Clarification 工具：** Issue [#4508](https://github.com/HKUDS/nanobot/issues/4508) 请求新增 `ask_clarification` 工具，使代理在需求模糊时能主动询问而非猜测，提升任务完成准确率。

## 7. 用户反馈摘要
*   **安全焦虑：** 用户对 Exec 工具和 MCP 配置的漏洞表示担忧，特别是在生产环境中部署时，对“白名单绕过”类漏洞零容忍。
*   **Windows 体验痛点：** Windows 用户频繁反馈后台运行、服务重启和进程管理方面的问题，表明跨平台一致性仍有提升空间。
*   **移动端需求强烈：** 对 PWA 的支持和移动端交互优化的呼声很高，用户希望 NanoBot 能在手机上获得接近原生应用的体验。
*   **特定硬件/服务兼容性：** 小米 MiMo 语音识别用户的反馈推动了前端音频格式转换功能的快速迭代，体现了社区对特定集成场景的重视。
*   **功能灵活性：** 用户希望更多的配置项（如自定义 Provider 的思考模式、子代理的错误处理策略）能够暴露出来，以满足个性化工作流的需求。

## 8. 待处理积压
*   **Windows 服务管理 Bug：** Issue [#4511](https://github.com/HKUDS/nanobot/issues/4511) 和 [#4513](https://github.com/HKUDS/nanobot/issues/4513) 涉及 Windows 平台的核心运行稳定性，建议优先处理，尤其是 NSSM 服务集成场景。
*   **Ask Clarification 功能：** Issue [#4508](https://github.com/HKUDS/nanobot/issues/4508) 是一个高价值的功能增强，有助于减少代理幻觉和用户挫败感，可纳入下一版本规划。
*   **MCP 闲置清理：** 虽然 PR **#4506** 已提交，但尚未合并，需尽快审查以确保资源管理的健壮性。
*   **HVTracker 信任徽章：** Issue [#4503](https://github.com/HKUDS/nanobot/issues/4503) 涉及项目声誉建设，若维护者认可该第三方评级体系，可考虑在 README 中添加徽章。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-26
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
2026年6月26日，Hermes Agent 项目处于**高活跃度维护模式**。过去24小时内共产生100次代码库交互（50 Issues + 50 PRs），其中34项为新增/活跃，16项已解决。核心焦点集中在**认证安全修复**（特别是多配置文件下的OAuth令牌旋转问题）和**桌面端稳定性**（Electron打包依赖缺失导致的崩溃）。虽然无新版本发布，但大量P1级Bug已被快速标记并合并，显示出团队对关键安全漏洞和阻断性Bug的高效响应能力。

## 2. 版本发布
*   **无新版本发布。**
*   *注：多个Issue（如 #52735, #52753）提及升级到 `0.17.0` 后出现崩溃，暗示当前稳定版可能已存在已知缺陷，修复PR正在紧急跟进中。*

## 3. 项目进展
今日合并/关闭的关键PR主要集中在安全加固和底层逻辑修复，显著提升了系统的健壮性：

*   **认证安全修复 (P1):**
    *   **PR #51753 & #52760:** 修复了 Codex/xAI 凭证池在旋转刷新令牌时未写回全局根配置的问题，解决了多配置文件间令牌失效的连锁反应。直接关联 Issue #48415。
    *   **PR #49127:** 针对 OpenAI-Codex 的多配置文件旋转写入修复，确保全局状态一致性。
*   **网关与状态管理修复 (P1/P2):**
    *   **PR #52798:** 检测并修复了 FTS (全文搜索) 数据库写入损坏导致的历史记录静默丢失问题，解决了网关“失忆”现象。
    *   **PR #52797:** 为 TUI/网关添加了初始化时的提供者回退机制，避免在主要提供商凭据缺失时硬失败。
    *   **PR #52799:** 实现了按提供商过滤凭证池，防止运行时提供商与所选凭证池不匹配导致的错误。
*   **桌面端与构建修复:**
    *   **PR #52789 & #52793:** 修复了 Docker 阶段2所有权修复过程中跟随符号链接导致的递归 `chown` 问题，提升了容器环境下的安全性与稳定性。
    *   **PR #52272 & #52795:** 优化了推理模型（Reasoning Models）的超时处理，将 `thinking-timeout` 正确分类为超时而非上下文溢出，避免了误删对话历史。

## 4. 社区热点
以下 Issue 评论数较多或关注度较高，反映了用户的核心关切：

*   **[Bug] Desktop app crashes on launch — Cannot find module 'simple-git'** (#52735, #52753)
    *   *热度:* 高 (9+ comments, duplicates)
    *   *分析:* 这是一个严重的回归Bug，导致 Windows 和 Linux 桌面应用在更新后无法启动。根本原因是 `simple-git` 依赖未被正确捆绑到 Electron 主进程中。社区对此反应强烈，多个重复Issue已被合并处理。
*   **[Feature] credential proxy daemon — zero-knowledge HTTP/HTTPS broker** (#4656)
    *   *热度:* 中高 (11 comments)
    *   *分析:* 用户持续呼吁更高级别的凭据隔离方案，以解决 PID 命名空间隔离后的剩余攻击面。这代表了高级用户对“零信任”架构的深层需求。
*   **[Feature] Slack platform: use Block Kit markdown block type** (#8552)
    *   *热度:* 高 (8 comments, 9 👍)
    *   *分析:* 用户对 Slack 适配器支持原生 Markdown 表格和格式有强烈需求，当前遗留的 `mrkdwn` 格式严重限制了信息呈现能力。
*   **[Feature] Support Telegram Bot API 10.1 Rich Messages** (#44428)
    *   *热度:* 中 (7 comments, 5 👍)
    *   *分析:* 随着 Telegram API 更新，用户希望 Hermes 能支持富媒体消息（LaTeX, 表格等），以保持平台竞争力。

## 5. Bug 与稳定性
今日报告了多个高严重程度的 Bug，部分已有修复 PR：

| Issue ID | 标题 | 严重程度 | 状态 | 相关 PR/备注 |
| :--- | :--- | :--- | :--- | :--- |
| **#52735** | Desktop app crashes on launch (simple-git missing) | **P1/Critical** | Closed | 依赖打包问题，需重构构建流程 |
| **#52753** | Windows desktop app crashes after update | **P1/Critical** | Duplicate | 同上 |
| **#52764** | hermes update produces broken Desktop asar | **P1/Critical** | Open | 描述了 git pull 后构建失败的具体场景 |
| **#52197** | gateway cross-process agent-cache invalidation stalls event loop | **P1** | Closed | 导致 Discord 心跳阻塞，影响实时性 |
| **#49106** | Web/WeChat sessions leak history | **P1** | Closed | 会话隔离失效，隐私泄露风险 |
| **#52023** | GPT-4o-mini/4.1 fail with "Encrypted content not supported" | **P1** | Closed | 特定模型兼容性回归 |
| **#48415** | openai-codex multi-profile rotation race | **P1** | Closed | 已通过 PR #51753/#52760 修复 |
| **#46260** | INSTALL DIDN'T FINISH... npm install exit code 1 on Windows | **P2** | Open | 安装脚本兼容性问题 |
| **#29912** | Curator may archive active skills... fail-open behavior | **P2** | Open | 技能管理逻辑缺陷，可能导致服务中断 |

## 6. 功能请求与路线图信号
*   **飞书 (Feishu) 适配增强:**
    *   Issue #52786 指出飞书适配器错误地将 Markdown 表格降级为纯文本。
    *   **PR #27922** 和 **PR #52790** 正在推进修复，旨在让飞书支持原生 Markdown 表格渲染。这表明飞书集成是近期的重点改进方向。
*   **本地化支持:**
    *   Issue #52137 请求添加俄语 (ru-RU) 支持。此前已有法语、中文、葡萄牙语请求，显示国际化 (i18n) 是持续演进的功能。
*   **桌面端体验优化:**
    *   Issue #52787 请求 Windows/Linux 下最小化到系统托盘而非完全退出。
    *   Issue #48843 请求批量归档会话功能。
    *   Issue #52769 请求自动创建 Linux `.desktop` 入口文件。
    *   *分析:* 这些请求均指向提升桌面应用作为“日常驾驶 (daily-driver)”工具的易用性和后台管理能力。
*   **新提供商支持:**
    *   PR #8427 正在为 Gemini 模型添加 Google Vertex AI 支持，扩展了企业级 AI 提供商的选择范围。

## 7. 用户反馈摘要
*   **痛点:**
    *   **桌面端构建脆弱:** 用户对 `simple-git` 缺失导致的崩溃感到沮丧，认为这是基础依赖管理失误。
    *   **会话隔离不清:** WeChat/Web 会话历史记录泄漏（#49106）引发了用户对隐私和数据完整性的担忧。
    *   **Windows 兼容性:** 安装程序在 Windows 上失败（#46260）以及路径解析问题（#48137 Docker 终端后端）表明 Windows 平台的测试覆盖仍有不足。
*   **满意点:**
    *   团队对 P1 级安全漏洞（如 OAuth 旋转竞争条件 #48415）的响应速度较快，合并了多个相关 PR。
    *   用户对推理模型超时处理的改进（#52271/#52795）表示认可，因为这解决了误导性错误提示和历史记录丢失的问题。

## 8. 待处理积压
*   **#52764:** `hermes update produces broken Desktop asar` - 尽管有重复 Issue 被关闭，但此 Issue 仍开放，需确认构建流水线是否已彻底修复。
*   **#46260:** Windows 安装程序失败 - 需要针对 Windows 环境的 npm 安装问题进行专项调试。
*   **#29912:** Curator 归档活跃技能的风险 - 这是一个逻辑层面的严重 Bug，可能导致自动化任务意外停止，建议优先处理。
*   **#38240:** Skills index stale or degraded - 自动化探针发现技能索引过时，需检查 CI/CD 定时任务的状态。
*   **#40801:** Cron script-path guard rejects profile-scoped jobs - 配置文件作用域脚本执行被错误拒绝，影响特定工作流。

---
*分析师：Agnes-2.0-Flash*
*生成时间：2026-06-26*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (sipeed/picoclaw)

## 1. 今日速览
2026年6月25日，PicoClaw 项目保持高活跃度，过去24小时内共产生 **19 条 PR** 和 **3 条 Issue** 更新。开发重心主要集中在**代码健壮性提升**（资源泄漏修复、类型断言安全）和**依赖项自动更新**上。虽然无新版本发布，但多个关键 Bug 修复（如重复消息发送、Token 消耗异常）已合并，显著提升了 Agent 运行的稳定性。社区对替换过时加密库 `libolm` 的呼声较高，显示用户对安全性和维护性的重视。

## 2. 版本发布
*   **无新版本发布。**
*   当前主要依赖项正在通过 Dependabot 进行常规更新，包括 `github.com/github/copilot-sdk/go` (0.2.0 -> 1.0.4)、`github.com/mymmrac/telego` (1.9.0 -> 1.10.0) 等，旨在获取上游的安全补丁和功能改进。

## 3. 项目进展
今日合并/关闭的 PR 主要推动了底层稳定性和资源管理的优化：
*   **修复子代理消息重复问题：** PR #3142 解决了 `spawn` 子任务完成时因 `ForUser` 字段未清空导致的重复消息推送问题，提升了多步 Agent 交互的准确性。
*   **优化 Evolution 模式资源消耗：** PR #3169 和 #3012 (Issue关联) 针对 Evolution 模式下的 Token 过度消耗进行了修复，特别是跳过了心跳轮次的冷路径处理，防止在草稿模式下浪费算力。
*   **增强错误处理与资源释放：** PR #3170 修复了 Base64 编码器在 IO 错误时未正确关闭导致的资源泄漏；PR #3128 和 #3172 规范了 `resp.Body.Close()` 的错误忽略逻辑，使代码更符合 Go 最佳实践。
*   **修复 Matrix 身份验证失效：** PR #3045 解决了 Matrix 用户 ID 中包含冒号时被 `allow_from` 规则误拒的问题，修复了即时通讯集成的关键阻塞点。

## 4. 社区热点
*   **🔥 Issue #3088: 提议用 vodozemac 替换 libolm**
    *   **链接:** [sipeed/picoclaw Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
    *   **热度:** 2 👍, 3 条评论
    *   **分析:** 这是今日最受关注的功能性议题。用户指出 `libolm` 已停止维护且存在安全隐患，建议采用官方推荐的替代库 `vodozemac`。这反映了核心贡献者对长期维护性和安全合规性的担忧，可能成为后续版本的技术重构重点。
*   **📈 Issue #3012: Evolution 模式 Token 持续消耗**
    *   **链接:** [sipeed/picoclaw Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
    *   **热度:** 5 条评论
    *   **分析:** 用户报告启用 Evolution 后每分钟持续消耗 Token。虽然今日 PR #3169 已部分缓解此问题，但该 Issue 的高关注度表明“成本控制”是高级用户的核心痛点。

## 5. Bug 与稳定性
| 严重程度 | 问题描述 | 相关 Issue/PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **子代理消息重复发送**：异步子 Agent 完成后，用户收到重复消息。 | PR #3142 | ✅ **已合并** |
| **高** | **Matrix 消息被静默拒绝**：标准 Matrix ID 格式导致 `allow_from` 解析失败。 | PR #3045 | ✅ **已合并** |
| **中** | **Token 无限消耗**：Evolution 模式下即使无实际任务也消耗 Token。 | Issue #3012 / PR #3169 | ✅ **已修复** |
| **中** | **Base64 编码器资源泄漏**：IO 复制失败时编码器未关闭。 | PR #3170 | ✅ **已合并** |
| **低** | **工具输出误解析为媒体**：普通文本中的 Data URL 被错误识别为附件。 | PR #3115 | ⏳ **待合并** (Open) |
| **低** | **技能安装类型断言静默失败**：非预期类型导致 UX 困惑。 | PR #3092 | ✅ **已合并** |

## 6. 功能请求与路线图信号
*   **远程 WebSocket 模式支持：** PR #3118 尝试为 `picoclaw agent` 命令添加远程 WebSocket 连接能力。若合并，将扩展 PicoClaw 作为分布式 Agent 后端的使用场景。
*   **DeltaChat 网关集成：** PR #3063 引入了对 DeltaChat 的支持，进一步丰富了即时通讯渠道生态。
*   **安全性升级：** 如 Issue #3088 所述，路线图隐含了从 `libolm` 迁移至 `vodozemac` 的需求，以确保持续的安全支持。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍反映在复杂 Agent 流程（如 Spawn 子任务、Evolution 草稿模式）中，容易出现资源浪费（Token 消耗）或状态不一致（消息重复、文件句柄泄漏）。
*   **场景：** 开发者主要在 Raspberry Pi (Raspbian) 和 FreeBSD 环境中运行 PicoClaw，结合 Telegram、Matrix 和 Web 渠道。
*   **满意度：** 用户对快速响应的 Bug 修复（如 #3142, #3045）表示认可，但对 `libolm` 的过时状态表示担忧，期待更现代化的底层依赖。

## 8. 待处理积压
*   **PR #3115 (Open):** 修复内联 Data URL 媒体提取错误。该修复对于防止日志/代码输出被误判为附件至关重要，建议优先审查合并。
*   **PR #3063 (Open):** 新增 DeltaChat 网关。这是一个重要的渠道扩展，需确认其实现符合项目安全标准。
*   **PR #3177 (Open):** Copilot SDK 依赖更新。需验证新版本是否与现有功能兼容，避免引入回归问题。
*   **Issue #3088 (Open):** 关于替换 `libolm` 的讨论。建议维护者在下一个技术规划周期中正式评估并制定迁移时间表。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**：2026-06-26
**数据来源**：GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 在 2026-06-26 保持高频开发节奏，过去 24 小时内共有 **16 个 PR** 更新，其中 **11 个已合并/关闭**，显示核心代码库正在快速迭代。尽管没有新版本发布，但内部功能完善显著，重点集中在 **容器资源隔离**、**认证机制优化** 以及 **CLI 工具链的稳定性修复** 上。社区参与度适中，新增 1 个关于审批流程优化的 Issue，反映出用户对多管理员协同工作的迫切需求。整体项目健康度高，技术债务清理与新特性开发并行推进。

## 2. 版本发布
*   **无新版本发布**。
*   当前处于密集的功能合并期，预计近期将根据合并后的稳定状态考虑发布新的 Patch 或 Minor 版本。

## 3. 项目进展
今日合并的关键 PR 推动了以下核心能力的提升：

*   **容器资源管控增强**：[#2856](https://github.com/nanocoai/nanoclaw/pull/2856) 引入了可选的 CPU/内存限制环境变量 (`CONTAINER_CPU_LIMIT`, `CONTAINER_MEMORY_LIMIT`)，解决了多 Agent 共享主机时的资源争抢问题，提升了生产环境的稳定性。
*   **认证架构优化**：[#2855](https://github.com/nanocoai/nanoclaw/pull/2855) 实现了以订阅（OAuth）为主、API Key 为热备的自动故障转移机制，增强了认证的可靠性和用户体验，避免了手动切换凭证的繁琐。
*   **安全性加固**：[#2817](https://github.com/nanocoai/nanoclaw/pull/2817) 严格限制了 `send_file` 的文件读取范围至工作区，并阻止指向工作区外的符号链接，消除了潜在的路径遍历安全风险。
*   **路由与数据处理修复**：[#2815](https://github.com/nanocoai/nanoclaw/pull/2815) 和 [#2813](https://github.com/nanocoai/nanoclaw/pull/2813) 修复了路由器对原始 JSON 内容的解析逻辑及 Socket 响应字节计数问题，防止了因数据类型不匹配导致的路由失败。
*   **Slack 集成改进**：[#2472](https://github.com/nanocoai/nanoclaw/pull/2472) 和 [#2471](https://github.com/nanocoai/nanoclaw/pull/2471) 完成了 Slack 会话模式的优化，确保每条顶级消息都能独立成为线程，改善了长对话的管理体验。

## 4. 社区热点
*   **Issue #2857**: [approval should support multi admins and terminal cli approvals](https://github.com/nanocoai/nanoclaw/issues/2857)
    *   **热度分析**：虽然暂无评论，但该 Issue 直指当前审批系统的瓶颈。用户提出当主管理员不可用时，其他管理员无法介入审批，且缺乏 CLI 端的紧急批准能力。这反映了企业级用户对**高可用性审批流程**和**权限冗余**的核心诉求。
    *   **关联 PR**：[#2832](https://github.com/nanocoai/nanoclaw/pull/2832) 刚刚合并了“拒绝时附带理由”的功能，虽未直接解决多管理员分配问题，但完善了审批交互的细节，为后续的多管理员路由逻辑奠定了基础。

## 5. Bug 与稳定性
今日合并的多个 PR 均为重要的 Bug 修复，显著提升了系统稳定性：

1.  **迁移崩溃修复**：[#2859](https://github.com/nanocoai/nanoclaw/pull/2859) 修复了从 v1 升级到 v2 时，因旧版本缺少 `is_main` 列导致的数据库迁移崩溃问题，保障了平滑升级路径。
2.  **macOS 证书连接错误**：[#2854](https://github.com/nanocoai/nanoclaw/pull/2854) 解决了 macOS 上使用 Rancher Desktop 时因 Gateway CA 挂载问题导致的“自签名证书”连接失败报错，提升了 Mac 用户的开发体验。
3.  **日志噪音清理**：[#2860](https://github.com/nanocoai/nanoclaw/pull/2860) 禁用了 `libsignal` 带来的调试日志刷屏，提高了日志的可读性，便于排查真实问题。
4.  **残留进程清理**：[#2830](https://github.com/nanocoai/nanoclaw/pull/2830) 修复了卸载 NanoClaw 后遗留的无效 launchd/systemd 注册项，避免了系统启动时的无谓尝试和资源浪费。

## 6. 功能请求与路线图信号
*   **CLI Dashboard 技能**：[#2795](https://github.com/nanocoai/nanoclaw/pull/2795) 提议添加 `/add-clidash` 技能，用于生成只读的 CLI 衍生仪表板。这表明用户希望将命令行输出可视化，可能成为下一版本中**可观测性**模块的一部分。
*   **AI 技能提炼**：[#2843](https://github.com/nanocoai/nanoclaw/pull/2843) 合并了 `/learn` 技能，允许从目录、URL 或历史记录中蒸馏出可复用的技能。这标志着项目正朝着**更智能的技能管理**方向演进，降低用户创建自定义技能的门槛。
*   **全局记忆指令移除**：[#2824](https://github.com/nanocoai/nanoclaw/pull/2824) 移除了主 Seed Prompt 中过时的“Global Memory”指令，暗示项目正在重构提示词工程，以更精确地控制 Agent 的记忆和行为边界。

## 7. 用户反馈摘要
*   **痛点**：用户普遍反映在 macOS 环境下配置容器网络时遇到的证书问题（[#2854]），以及升级数据库时遇到的兼容性陷阱（[#2859]）。这些是阻碍新手上路和现有用户升级的主要摩擦点。
*   **需求**：对于审批流程，用户不仅需要“批准/拒绝”，还需要“带理由拒绝”（[#2832]）以及更灵活的授权机制（[#2857]）。这表明用户倾向于将 NanoClaw 用于需要审计和多人协作的企业场景。
*   **满意度**：资源限制功能（[#2856]）和自动认证故障转移（[#2855]）直接回应了运维人员对稳定性和免维护性的期待，预计将获得积极反馈。

## 8. 待处理积压
*   **PR #2860** [OPEN]: 虽然解决了日志噪音，但作为依赖项的清理，建议维护者关注其是否影响了其他模块的调试便利性。
*   **PR #2858** [OPEN]: 作为 `clidash` 功能的补充修复（安装步骤和 Node 版本要求），需确认其与主技能 PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) 的合并顺序，以确保文档和代码的一致性。
*   **Issue #2857** [OPEN]: 多管理员审批支持尚未有对应的 PR 提出，建议维护者优先评估此需求的实现方案，因为它直接关系到生产环境的高可用性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub nearai/ironclaw

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，过去24小时内新增50个Issues和50个PRs，显示出“Reborn”架构迭代正处于冲刺阶段。核心焦点集中在 **Reborn WebUI 的用户体验修复**（如日志滚动、输入框冻结、权限持久化）以及 **底层基础设施的性能优化**（CAS循环合并、事件日志批处理）。虽然无新Release发布，但大量PR涉及内存扩展、能力策略及追踪系统的底层重构，表明系统正从“功能可用”向“生产级稳定”迈进。

## 2. 版本发布
*   **无新版本发布。**
*   **注意：** 多个关键功能（如 Memory Extension Manifest v2、Trace Commons 客户端）以 PR 形式存在，尚未合并至主分支发布。

## 3. 项目进展
今日合并/关闭的 PR 主要解决了阻塞性 Bug 和性能瓶颈，推动了 Reborn 栈的成熟度：

*   **WebUI 交互修复：**
    *   [#5278](https://github.com/nearai/ironclaw/pull/5278) 修复了 Logs 页面无法滚动的问题，提升了可观测性体验。
    *   [#5275](https://github.com/nearai/ironclaw/pull/5275) 修复了 Chat 中 "Logs" 链接路由重复 (`/v2/v2/logs`) 导致的死链问题。
    *   [#5222](https://github.com/nearai/ironclaw/pull/5222) 修复了被阻止 (Blocked) 的触发式运行任务在 Slack 通知中被错误标记为 Failed 的逻辑缺陷。
*   **底层性能优化：**
    *   [#5234](https://github.com/nearai/ironclaw/pull/5234) 移除了冗余的 per-record 锁，通过共享 `cas_update` 辅助函数减少了并发写入时的锁冲突和死锁风险。
    *   [#5255](https://github.com/nearai/ironclaw/pull/5255) 将 CAS put 目录预检查合并，减少了数据库往返次数 (3->1)，提升了写入效率。
*   **构建与依赖：**
    *   [#5244](https://github.com/nearai/ironclaw/pull/5244) 将生成的 WebUI v2 静态资源从源码控制中移除，改为构建时嵌入，简化了仓库管理。

## 4. 社区热点
今日讨论最活跃的 Issues 集中在 **Reborn WebUI 的 Dogfooding（内部试用）** 发现的问题，反映了用户对易用性和稳定性的强烈诉求：

*   **[Issue #5276](https://github.com/nearai/ironclaw/issues/5276)**: 自动化调度失败 "No thread attached"。
    *   *背景：* 定时任务创建的运行记录未正确关联对话线程，导致成功率显示为 0%。这是自动化功能的核心路径，阻塞了日常使用。
*   **[Issue #5192](https://github.com/nearai/ironclaw/issues/5192)** & **[Issue #5196](https://github.com/nearai/ironclaw/issues/5196)**: 工具审批逻辑混乱。
    *   *背景：* 拒绝工具批准后仍出现额外请求，或 "Ask each time" 模式下批准授权后反而报错并触发重复审批。这显示了 Reborn 在状态管理和权限持久化上的深层不一致。
*   **[Issue #5242](https://github.com/nearai/ironclaw/issues/5242)**: 设置页权限错误。
    *   *背景：* 普通用户在 Settings 页面看到 "Operator-only" 错误，说明角色鉴权在 UI 层未正确过滤非管理员视图。

## 5. Bug 与稳定性
今日报告的 Bug 多为 UI/UX 层面的体验问题，但也暴露了一些后端逻辑缺陷：

*   **高严重度 (High Severity):**
    *   **[Issue #5210](https://github.com/nearai/ironclaw/issues/5210)**: 在审批门 (Approval Gate) 打开时发送新消息会导致警告重复并丢失消息状态。*(状态: Closed, 可能已通过 UI 状态机重构解决)*
    *   **[Issue #5208](https://github.com/nearai/ironclaw/issues/5208)**: 等待 Agent 响应时，消息输入框冻结，无法输入新内容。*(状态: Closed, 需确认前端防抖机制)*
*   **中严重度 (Medium Severity):**
    *   **[Issue #5243](https://github.com/nearai/ironclaw/issues/5243)**: "Approve & always allow" 点击后权限未持久化到 Settings。*(状态: Closed, 需验证修复 PR)*
    *   **[Issue #5282](https://github.com/nearai/ironclaw/issues/5282)**: Agent 运行时，Composer 内部错误地显示 "Logs" 入口。
    *   **[Issue #5191](https://github.com/nearai/ironclaw/issues/5191)**: 内部技能激活/上下文预算消息泄露到聊天 UI 中，干扰用户体验。
*   **低严重度 (Low Severity):**
    *   **[Issue #4980](https://github.com/nearai/ironclaw/issues/4980)**: 自动化空状态页面缺乏引导，用户不知道如何创建自动化。
    *   **[Issue #5211](https://github.com/nearai/ironclaw/issues/5211)**: 新消息不自动滚动到底部。

## 6. 功能请求与路线图信号
从开放的 Epic 和 PR 中可以看出，**Reborn 栈的企业级特性**和**记忆系统**是接下来的重点：

*   **多租户与权限策略 (Capability Policy):**
    *   **[Epic #5261](https://github.com/nearai/ironclaw/issues/5261)**: 推进 "Admin-shared tools & skills with per-user auth"。
    *   **[PR #5277](https://github.com/nearai/ironclaw/pull/5277)**: 实现可用性解析器，将管理员授予的能力映射到具体用户可见的工具表面。
    *   **[PR #5270](https://github.com/nearai/ironclaw/pull/5270)**: 引入基于数据库的用户角色 (Owner/Admin/Member) 和 WebChat-v2 的管理员门控。
    *   *信号：* 即将支持更细粒度的 RBAC（基于角色的访问控制），适合团队部署场景。
*   **记忆与自我学习 (Memory & Self-Learning):**
    *   **[PR #5205](https://github.com/nearai/ironclaw/pull/5205)**: 将模型记忆实现为用户空间扩展 (Userland Extension)，引入 Extension Manifest v2 和源感知信任机制。
    *   **[Issue #5260](https://github.com/nearai/ironclaw/issues/5260)**: 追踪个人记忆与自我学习全系统。
    *   *信号：* 记忆系统将从硬编码转向插件化架构，允许更灵活的存储后端和语义搜索集成。
*   **可观测性与追踪 (Trace Commons):**
    *   **[PR #5280](https://github.com/nearai/ironclaw/pull/5280)**: 添加实例级注册、每用户贡献者档案和提交追踪检查的客户端支持。

## 7. 用户反馈摘要
*   **痛点：** 用户频繁抱怨 Reborn WebUI 中的**状态不同步**问题。例如，批准工具后权限未保存（#5243）、拒绝工具后仍被询问（#5192）、审批期间发送新消息导致状态丢失（#5210）。这表明前后端的状态机同步机制尚不完善。
*   **体验：** 自动化功能的**发现性差**。新用户面对空的自动化列表感到困惑（#4980），且定时任务因线程关联错误而失败（#5276），直接影响了“无人值守”场景的信任度。
*   **期望：** 高级用户和开发者关注**性能开销**。对 CAS 循环和日志写入性能的优化（#5234, #5257）受到核心贡献者的重视，反映出用户对高并发下系统稳定性的期待。

## 8. 待处理积压
*   **[Issue #5276](https://github.com/nearai/ironclaw/issues/5276)**: Scheduled automation "No thread attached"。这是一个功能性阻断问题，影响所有依赖定时任务的自动化场景，需优先排查线程上下文传递逻辑。
*   **[Issue #5264](https://github.com/nearai/ironclaw/issues/5264)**: Memory #3537 follow-ups。涉及原生 SQL 存储端口、主机管理流程等后续步骤，虽有大 PR (#5205) 打底，但细节仍需完善。
*   **[Issue #5253](https://github.com/nearai/ironclaw/issues/5253)**: Heartbeat lease write-behind。建议将 Runner Lease 续期从同步 Postgres 路径移至异步，以消除潜在的延迟抖动，目前仍在 Backlog 中。
*   **[PR #5281](https://github.com/nearai/ironclaw/pull/5281)**: Unblock main and cut flake。CI 流水线的不稳定性阻碍了其他 PR 的快速合并，需尽快解决 libsql 特征和 apt 重试相关的 Flake。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-06-26
**数据来源**：GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
今日 LobsterAI 项目呈现出极高的开发活跃度，过去24小时内合并了 **9 条 Pull Requests**，且全部已关闭（合并），显示出团队在代码审查和发布流程上的高效执行。虽然无新版本正式发布，但密集的 PR 合并表明底层架构（特别是 OpenClaw 插件系统和 Cowork 协作模式）正在进行重要的稳定性修复和优化。社区层面仅有一条关于 UI 交互的 Bug 报告，整体开发重心集中在内部技术债务清理和功能增强上。

## 2. 版本发布
*   **无新版本发布**。
*   *注：尽管有 9 个 PR 合并，但未触发新的 Release 标签，可能这些更改将累积至下一次正式版本中，或属于热修复性质。*

## 3. 项目进展
今日合并的 PR 主要集中在 **OpenClaw 插件系统优化** 和 **Cowork 协作体验改进** 两大领域：

*   **OpenClaw 插件生态强化**：
    *   **#2203**: 修复了预编译本地扩展条目的加载问题，确保 TypeScript 入口能正确重写为 `index.js`，增强了插件打包的健壮性。
    *   **#2202**: 修复了浏览器插件在白名单中的状态，确保在严格限制下浏览器控制功能依然可用。
    *   **#2198**: 预安装了官方的 QQ 和 Discord 频道插件，并修复了 NIM 账户索引问题，显著提升了多平台集成的开箱即用体验。
*   **Cowork 协作逻辑优化**：
    *   **#2204 & #2200**: 解决了计划模式（Plan Mode）下的渲染问题。前者优先解析块级标签以避免信息泄露，后者通过处理流抖动防止重复的计划消息显示，提升了 AI 回复的可读性和准确性。
    *   **#2199**: 改进了子代理轮询机制，确保父会话结束后子会话仍能正常运行直至终止，并增加了诊断日志，提升了复杂协作场景下的稳定性。
*   **其他修复**：
    *   **#2206**: 修复了“登录时自动启动”状态与操作系统不同步的问题，增强了跨平台一致性。
    *   **#2205**: 更新了协作模式的图标样式，保持主题一致性。

**整体评估**：项目向前迈进了显著的一步，特别是在解决多平台插件兼容性和 AI 响应流的稳定性方面，技术债得到实质性偿还。

## 4. 社区热点
*   **Issue #1392**: [定时任务开关点击无反应](https://github.com/netease-youdao/LobsterAI/issues/1392)
    *   **热度分析**：这是今日唯一的活跃 Issue，虽然评论数为 0，但其描述的“部分任务开关无法点击”属于高频使用的核心功能故障。
    *   **背后诉求**：用户对自动化工作流的依赖性强，UI 交互故障直接阻碍了日常任务调度。尽管该 Issue 创建于 4 月，但在 6 月 25 日仍有更新（标记为 stale），说明维护者仍在监控此类长期未决问题。

## 5. Bug 与稳定性
今日合并的 PR 中包含多个针对稳定性和一致性的修复，按影响范围排序：

1.  **High Severity - 插件加载与同步失败 (#2203, #2198)**:
    *   修复了 OpenClaw 本地扩展预编译失败及 QQ/Discord 插件预安装配置错误的问题。若未修复，可能导致部分插件无法加载或配置丢失。
    *   *Fix PRs*: [#2203](https://github.com/netease-youdao/LobsterAI/pull/2203), [#2198](https://github.com/netease-youdao/LobsterAI/pull/2198)

2.  **Medium Severity - AI 响应重复与显示异常 (#2200, #2204)**:
    *   解决了因网络流抖动导致的计划消息重复显示，以及标签解析错误导致的信息泄露。这直接影响用户体验的流畅度和专业性。
    *   *Fix PRs*: [#2200](https://github.com/netease-youdao/LobsterAI/pull/2200), [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204)

3.  **Low Severity - 状态同步与 UI 细节 (#2206, #2205, #2202)**:
    *   修复了开机自启状态同步、图标样式及浏览器插件白名单问题。
    *   *Fix PRs*: [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206), [#2205](https://github.com/netease-youdao/LobsterAI/pull/2205), [#2202](https://github.com/netease-youdao/LobsterAI/pull/2202)

## 6. 功能请求与路线图信号
*   **多平台插件原生支持**: PR #2198 预装了 QQ 和 Discord 插件，表明项目路线图正积极向即时通讯平台集成倾斜，旨在降低用户接入多平台工作的门槛。
*   **协作模式精细化控制**: 通过 #2204 和 #2200 对 Plan Mode 的优化，反映出开发者正在深入打磨 AI 在复杂协作场景下的表现，未来可能会推出更高级的协作规则或可视化界面。

## 7. 用户反馈摘要
*   **痛点**:
    *   **UI 交互不可靠**: Issue #1392 指出定时任务开关存在“部分不可点击”的现象，用户对此类低级交互错误感到困扰，尤其是当大部分功能正常时，这种不一致性会严重削弱信任感。
    *   **插件配置复杂性**: 虽然今日修复了预安装问题，但此前可能存在手动配置插件的繁琐过程，用户更倾向于“开箱即用”的体验。
*   **满意点**:
    *   **响应速度优化**: 针对流抖动和重复消息的修复（#2200, #2204）直接回应了用户对 AI 回复清晰度的高要求。

## 8. 待处理积压
*   **Issue #1392** ([定时任务开关点击无反应](https://github.com/netease-youdao/LobsterAI/issues/1392)):
    *   **状态**: OPEN / STALE
    *   **风险**: 该 Issue 已存在超过两个月，且涉及核心自动化功能。尽管标记为 stale，但它是今日唯一被关注的用户反馈。建议维护者优先复现此问题，因为间歇性 UI 故障最难排查且影响面大。

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

# CoPaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** agentscope-ai/CoPaw GitHub Repository

## 1. 今日速览
今日 CoPaw 社区活跃度极高，过去24小时内产生 **27 条 Issue** 和 **50 条 PR**，显示出开发者与用户的高频互动。虽然无新版本发布，但大量 PR 集中在 **AgentScope 2.0 适配**、**浏览器自动化资源泄漏修复**以及**前端渲染稳定性**优化上。项目正处于从 1.0 向 2.0 架构迁移的关键适应期，技术债务清理和功能对齐是当前的核心主线。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭或正在积极评审的 PR 主要推动了以下关键进展：

*   **AgentScope 2.0 深度适配**：
    *   **PR #5442** 将 Mission Mode 的执行引擎重新接入 Runtime v2 架构，修复了此前因架构迁移导致的命令注册失效和钩子引用错误。
    *   **PR #5542** 完成了 E2E 测试套件对 AgentScope 2.0 的适配，解决了迁移后的 P0 级回归失败问题，确保了核心流程的稳定性。
    *   **PR #5443** 恢复了 TUI 界面中的 ACP 命令支持和内联审批功能，提升了命令行交互体验。
*   **浏览器自动化稳定性修复**：
    *   **PR #5536** 针对 Issue #5520 和 #2733，修复了 `browser_stop()` 后 Chrome Renderer 进程未完全清理导致的内存泄漏问题。
    *   **PR #5526** 解决了 Linux 环境下因环境变量包裹 Exec 路径导致的浏览器检测失败问题，扩大了平台兼容性。
*   **前端与用户体验优化**：
    *   **PR #5538** 修复了长消息 Markdown 排版错乱的问题（对应 Issue #5480），通过保留换行符改善了阅读体验。
    *   **PR #5537** 修正了模型设置页中“在线提供商”计数不准确的问题（对应 Issue #5512）。
    *   **PR #5544** 修复了 TokenUsage 页面的空状态样式缺失导致的布局崩溃。

## 4. 社区热点
以下 Issue/PR 因涉及广泛的用户痛点或架构变更，讨论热度较高：

*   **[Issue #5345] 自定义 OpenAI 兼容提供商不支持 Function Calling**
    *   **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5345
    *   **分析**: 用户反馈 OMLX 等自定义提供商在 QwenPaw 中无法触发工具调用，尽管其 API 兼容 OpenAI。这反映了当前对非官方 OpenAI 兼容接口的工具协议支持仍存在盲区，影响了多模型集成的灵活性。
*   **[Issue #5505 & PR #5535] MiniMax-M3 图片安全审核误报导致视觉功能失效**
    *   **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5505
    *   **分析**: 内容审核错误被错误地缓存为模型级属性 `rejects_media=True`，导致后续合法的图片请求被剥离。这是一个严重的逻辑缺陷，PR #5535 已提出修复方案，强调了细粒度错误处理的重要性。
*   **[Issue #5479 & PR #5457] 大会话文件导致前端崩溃**
    *   **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5479
    *   **分析**: 会话历史超过 500KB 时前端直接报错。用户迫切需求渐进式加载或分页机制，PR #5457 尝试通过限制 `send_file_to_user` 的文件大小来缓解，但根本的前端渲染性能优化仍需跟进。
*   **[PR #4622] DataPaw 数据分析插件**
    *   **链接**: https://github.com/agentscope-ai/QwenPaw/pull/4622
    *   **分析**: 贡献者提交了包含 12 个 BI 技能的数据分析插件，显示了社区对垂直领域 Agent 能力的强烈兴趣，若合并将显著增强 CoPaw 在企业场景下的吸引力。

## 5. Bug 与稳定性
今日报告的问题按严重程度排序：

1.  **高严重 - 浏览器资源泄漏 (Regression)**:
    *   **Issue #5520 / #2733**: 浏览器停止后 Chrome 进程残留，导致内存耗尽。**状态**: PR #5536 已提交修复。
2.  **高严重 - 逻辑错误导致功能失效**:
    *   **Issue #5505**: 安全审核错误缓存导致视觉输入永久失效。**状态**: PR #5535 已提交修复。
3.  **中严重 - 前端渲染崩溃**:
    *   **Issue #5479**: 大会话 (>500KB) 打开即报错。**状态**: 暂无完美修复 PR，PR #5457 仅做局部限制。
    *   **Issue #5480**: 长消息 Markdown 排版错乱。**状态**: PR #5538 已修复。
4.  **中严重 - 兼容性与配置问题**:
    *   **Issue #5379**: Windows 下启动报 Internal Server Error (get_remote_addr)。**状态**: 待分析，可能与环境变量或代理配置有关。
    *   **Issue #5543**: `functionDeclaration` 中 `type: null` 导致第三方代理拒绝请求。**状态**: PR #5545 已提交修复。
5.  **低严重 - UI/UX 瑕疵**:
    *   **Issue #5501**: 宽屏模式下发送按钮对齐问题。
    *   **Issue #5403**: 模型配置页搜索框被浏览器自动填充干扰。

## 6. 功能请求与路线图信号
*   **插件标准化安装**: **Issue #5484** 请求支持通过 pip 安装插件，以符合 Python 生态标准。这暗示了 CoPaw 正在从封闭的 ZIP 分发向更开放的包管理过渡。
*   **上下文管理增强**: **PR #5321** 提出的 "Scroll Context Manager" 允许持久化历史并通过 REPL 召回，而非简单压缩。这表明团队倾向于提供更精细的上下文控制策略，而非单一的摘要压缩。
*   **模型动态切换**: **Issue #5527** 询问何时支持 AgentScope 2.0 的动态模型切换。结合 **PR #5399** (支持提供商内模型排序)，可以看出路线图正侧重于提升模型调度的灵活性和配置的可操作性。
*   **Cron 任务管理**: **PR #5210** 添加了 `cron update` 命令，完善了定时任务的运维能力，显示自动化调度功能是近期的重点完善方向。

## 7. 用户反馈摘要
*   **痛点**: 用户对 **Windows 本地部署**的稳定性抱怨较多（Issue #5379, #5508），特别是文件预览链接 404 和服务启动报错，表明跨平台兼容性测试仍有遗漏。
*   **期待**: 用户高度关注 **AgentScope 2.0 的迁移进度**，特别是 Runtime 2.0 下的工具注册和 Mission Mode 的可用性。
*   **满意**: 社区对快速响应 Bug（如浏览器内存泄漏、Markdown 渲染）表示认可，特别是首次贡献者（First-time contributors）的积极参与提升了社区的活跃度。

## 8. 待处理积压
*   **Issue #5379**: Windows 启动 Internal Server Error 问题，需排查 `get_remote_addr` 在不同环境下的行为差异。
*   **Issue #5162**: 对话思考逻辑死循环，需深入分析 ReAct 或 Plan 模式的终止条件。
*   **Issue #4188**: 文档打开卡顿，长期未解决，可能涉及静态站点生成器配置或文档体积过大，需优化文档构建流程。
*   **Issue #5541**: Ollama Cloud 模型无法访问，需确认 API Key 传递机制或网络代理配置问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub zeroclaw-labs/zeroclaw

## 1. 今日速览
ZeroClaw 在 2026-06-26 保持极高的开发活跃度，过去24小时内产生 47 条 Issue 更新和 50 条 PR 更新，显示团队正处于 v0.8.2 发布冲刺及 v0.8.3/v0.9.0 规划的关键窗口期。今日核心焦点集中在 **v0.8.2 版本的最终打磨**（包括文档同步、Nix 构建修复、版本标记）以及 **v0.8.3 的功能落地**（如 Web 仪表盘就地升级、WASM 插件运行时默认化、MCP 支持优化）。安全与稳定性方面，针对委托机制漏洞、MCP 进程泄漏及图像标记处理的修复 PR 密集提交，表明项目正着力解决早期架构中的技术债务。整体项目健康度高，但存在大量处于 `in-progress` 或 `blocked` 状态的 RFC 和技术债，需关注合并节奏对发布稳定性的影响。

## 2. 版本发布
*   **当前状态：** 无新正式版本发布。
*   **近期动作：** PR #8234 已将工作区版本从 v0.8.1 提升至 v0.8.2，并更新了 Changelog、Docker 标签及打包配置，为 v0.8.2 正式发布做准备。PR #8332 同步了 v0.8.2 的多语言文档翻译。

## 3. 项目进展
今日主要推进了以下关键功能与基础设施改进：

*   **Web 仪表盘就地升级 (v0.8.3 特性):** PR #8173 实现了 RFC #8170，允许用户通过 Web Dashboard 直接检测新版本、查看发布说明并应用重启，无需离开浏览器。这是提升用户体验的重大改进。
*   **WASM 插件运行时默认化:** PR #8135 (关联 RFC) 推动将 WASM 设为默认插件运行时，并实施能力声明和签名分发。这标志着 ZeroClaw 向消除 Node.js 依赖、增强安全沙箱化的战略迈进。
*   **ACP 协议完善:** PR #8338 将 ACP 多选项提示从临时的 `session/request_permission` 重载迁移至标准的 `elicitation/create` JSON-RPC 方法，提升了协议合规性。PR #8237 为独立 ACP 会话添加了可选的 MCP 支持，解决了此前 ACP 会话无法调用工具的问题。
*   **日志持久化增强:** PR #8307 引入了 `rotating` 日志模式，填补了现有日志管理在保留策略上的空白，允许基于大小/日期/保留期的自动归档。
*   **构建系统修复:** PR #8336 修复了 Nix 构建因缺失 Git 依赖哈希而失败的问题，并添加了自动化脚本更新哈希，改善了开发者体验。

## 4. 社区热点
以下 Issue/PR 获得了较多关注或代表了重要的架构讨论方向：

*   **[RFC] Work Lanes & Board Automation (#6808):** 作者 Audacity88。讨论如何通过自动化和标签清理来简化维护者工作流。**诉求：** 降低社区贡献门槛，提高 Issue 处理效率。
*   **[RFC] Supply chain signing & SLSA provenance (#8177):** 作者 ConYel。提议引入硬件 PGP 密钥和多方授权进行供应链签名。**诉求：** 满足企业级用户对软件来源可信度的极高要求，对标 StageX 模型。
*   **[RFC] OCI-Compliant Container Registries for Plugins (#7497):** 作者 bheatwole。建议用 OCI 注册表替代 JSON 索引作为 WASM 插件存储。**诉求：** 利用现有容器生态标准简化插件发现、分发和安全验证。
*   **[Bug] Delegate bypasses parent's tool allowlist (#8279):** 作者 wangmiao0668000666。**严重性：** S0 (数据丢失/安全风险)。子代理可绕过父代理的工具白名单。**现状：** 已标记为进行中，需紧急修复以保障多代理环境下的安全边界。
*   **[RFC] Capability-gated WASI hardware host functions (#8187):** 作者 Audacity88。探讨插件访问 GPIO/USB 等硬件的安全机制。**诉求：** 扩展 ZeroClaw 到 IoT 边缘设备场景，同时确保安全性。

## 5. Bug 与稳定性
今日报告并修复了多个影响稳定性和安全性的问题：

*   **P1 - Delegate 安全漏洞 (#8279):** 委托工具未能正确继承父代理的工具限制，导致潜在的安全绕过。**状态：** Open, In Progress。
*   **P1 - Kimi Code 端点回归 (#8154):** Moonshot/Kimi 提供商配置指向了失效的 404 端点，导致聊天和 Doctor 检查失败。**状态：** Closed (已修复/验证)。
*   **P2 - MCP stdio 进程泄漏 (#5903):** 启用心跳时，MCP stdio 子进程每 tick 泄漏一个，长期运行会导致资源耗尽。**状态：** Open, Accepted。
*   **P2 - Telegram 图片重复发送 (#5514):** Telegram 多张图片被拆分为多次请求，导致 Agent 输出冗余消息。**状态：** Open, Accepted。
*   **P2 - Native Tool Calling 图像标记处理 (#8327):** OpenAI 兼容提供商在处理原生工具调用时，将图像标记作为纯文本发送，导致 Token 计数膨胀。**状态：** Open。对应修复 PR #8339 已提交，旨在将标记转换为正确的 `image_url` 格式。
*   **P2 - Skills 安装路径错误 (#8334):** 多代理运行时无法加载通过 CLI `skills install` 安装的技能，因为目标目录未被运行时扫描。**状态：** Open。对应修复 PR #8335 已提交，使技能管理感知 Bundle 上下文。
*   **P2 - CLI One-Shot 遥测丢失 (#8146):** `zeroclaw agent -a ...` 单次执行模式下，进程退出前未能刷新 OTLP 遥测数据。**状态：** Open, 有修复 PR #8146。

## 6. 功能请求与路线图信号
*   **Goal Mode (目标模式):** RFC #8303 提出增加“目标模式”，允许 Agent 在预算耗尽、取消或失败前自主追求单一用户目标。**信号：** 强烈反映用户希望 ZeroClaw 具备更强的自主规划和长期任务执行能力，可能纳入 v0.8.3 或 v0.9.0。
*   **Lighter Core via External Integrations:** RFC #6165 建议移除内置的特定集成代码（如 Jira, GitHub CLI），转而通过 Skills/MCP 交互。**信号：** 保持内核精简，依赖生态系统。这与 WASM 插件战略一致。
*   **SOP Control Plane:** Tracker #8288 协调 SOP (Standard Operating Procedure) 能力达到 5/5 完成度。**信号：** 企业级工作流自动化是重点方向，Daemon 拥有的 SOP 控制平面即将完工。
*   **LAN Peer Discovery:** PR #8325 添加 MDNS 局域网发现支持。**信号：** 增强本地部署和多节点自组网能力，适合家庭实验室或私有云场景。

## 7. 用户反馈摘要
*   **痛点：** 用户普遍反映 Telegram 渠道在多媒体消息处理上体验不佳（拆分请求、重复输出），期望更自然的交互方式（#5514, #7873）。
*   **痛点：** 多代理环境下，技能（Skills）的安装和管理缺乏上下文感知，导致“拉取技能却无法使用”的困惑（#8334）。
*   **满意：** Web 仪表盘的升级功能（#8173）受到欢迎，因为它消除了手动命令行更新的摩擦。
*   **关注：** 用户对供应链安全（#8177）和硬件访问权限（#8187）的关注度上升，表明企业用户正在评估 ZeroClaw 在生产环境中的安全性和合规性。
*   **反馈：** 图像标记在 Token 计费上的不准确（#8327）直接影响成本控制，用户期望原生工具调用能更高效地处理多媒体内容。

## 8. 待处理积压
*   **MCP 进程泄漏 (#5903):** 高风险长期运行稳定性问题，需尽快定位并修复心跳机制中的资源清理逻辑。
*   **Delegate 安全漏洞 (#8279):** S0 级别安全问题，必须优先处理，防止子代理滥用权限。
*   **SkillForge 孤儿问题 (#8309):** 自动技能发现引擎已合并但未连接至运行时，需决定是完善集成还是移除，避免代码库混乱。
*   **v0.8.3 追踪器 (#8071, #8070, #8072):** 包含大量 Runtime, Agent, Gateway, Channels 的修复和功能，需持续监控合并进度，确保 v0.8.3 发布的完整性。
*   **v0.9.0 安全与网关 (#7432):** 涉及认证、安全加固和 A2A 边界的重大变更，需提前规划以避免破坏性变更带来的迁移困难。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*