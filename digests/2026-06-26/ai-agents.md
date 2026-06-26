# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-26 05:34 UTC

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
**数据来源：** GitHub Issues & PRs (openclaw/openclaw)

## 1. 今日速览
OpenClaw 项目在 2026-06-26 保持极高的开发活跃度，过去 24 小时内产生 500 条 Issue 更新和 500 条 PR 更新，显示出社区参与度和维护者响应速度均处于高位。核心焦点集中在**会话状态管理（Session State）**的稳定性修复、**托管市场（Hosted Marketplace）**功能的初步落地以及**内存泄漏/OOM**问题的持续攻关。尽管没有新版本发布，但大量 PR 标记为“Ready for maintainer look”或“Needs proof”，表明代码库正处于密集的集成测试前夜。整体项目健康度面临挑战，主要源于底层会话机制的复杂性和资源管理的脆弱性。

## 2. 版本发布
*   **无新版本发布。**
*   当前处于 `main` 分支的快速迭代期，大量修复和功能增强尚未打包。

## 3. 项目进展
今日合并/关闭及待合并的重要 PR 推动了以下关键进展：

*   **托管市场基础设施搭建：**
    *   一系列由 `giodl73-repo` 提交的 PR (#95846, #95868, #95877, #95964, #95969, #96155, #96158, #96194) 构成了“托管市场 Feed 栈”。这些 PR 引入了外部插件目录的重构、快照持久化、配置验证、刷新命令及遥测功能。目前处于暂停等待 Review 状态，旨在为未来的自动化安装和更新打下基础。
    *   **链接:** [PR #95846](https://github.com/openclaw/openclaw/pull/95846), [PR #96155](https://github.com/openclaw/openclaw/pull/96155)

*   **会话与运行时稳定性修复：**
    *   **#96924:** 修复 macOS launchd 中 profile-scoped 更新器任务重复运行导致死循环的问题。
    *   **#96944:** 清理孤立会话车道（orphaned session lanes），解决诊断恢复中的状态残留。
    *   **#96943:** 修复安装版中捆绑渠道配置解析失败的问题。
    *   **#96920:** 限制 Google Media 理解服务的 JSON 响应读取，防止过大响应导致连接异常。
    *   **链接:** [PR #96924](https://github.com/openclaw/openclaw/pull/96924), [PR #96944](https://github.com/openclaw/openclaw/pull/96944)

*   **功能完善与安全加固：**
    *   **#81364:** 在插件和技能安装前增加 ClawHub 信任检查，防止恶意发布。
    *   **#96479:** 细化 Codex Computer Use 的空表单批准作用域。
    *   **#77158:** 优化 QMD 内存导出性能，通过缓存减少 CPU 消耗。
    *   **链接:** [PR #81364](https://github.com/openclaw/openclaw/pull/81364), [PR #77158](https://github.com/openclaw/openclaw/pull/77158)

## 4. 社区热点
以下 Issue 因高评论数或高优先级标签引发社区广泛关注：

*   **[P2] Cron agentTurn 发送 unsupported thinking 值导致 OpenAI 报错**
    *   **Issue #63918:** 自动任务在处理 `gpt-5-nano` 等不支持 `thinking=none` 的模型时失败。这是自动化工作流稳定性的关键阻碍。
    *   **链接:** [Issue #63918](https://github.com/openclaw/openclaw/issues/63918)

*   **[P2] 长思考模型流式监控超时问题**
    *   **Issue #68596:** 用户抱怨在使用 Kimi-k2.5、DeepSeek-R1 等长推理模型时，默认的 30s 心跳超时过于激进，导致误报“无流更新”。请求可配置的阈值。
    *   **链接:** [Issue #68596](https://github.com/openclaw/openclaw/issues/68596)

*   **[P1] 子代理完成交付丢失**
    *   **Issue #67777:** 在繁忙、超时或孤儿修剪条件下，子代理的结果可能无法传回父会话，导致静默失败。这影响了多代理协作的可靠性。
    *   **链接:** [Issue #67777](https://github.com/openclaw/openclaw/issues/67777)

*   **[P2] 社区技能开发与 ClawHub 生态**
    *   **Issue #50090:** 用户对“编写 SKILL.md 即可发布”的承诺与实际体验之间的差距表示担忧，Driftnet 等工具链尚不完善。
    *   **链接:** [Issue #50090](https://github.com/openclaw/openclaw/issues/50090)

## 5. Bug 与稳定性
今日报告的高严重度 Bug 主要集中在会话状态、内存管理和认证流程：

*   **Gateway OOM / 内存泄漏：**
    *   **Issue #55334:** `sessions.json` 无限增长，未清理临时会话且重复存储 `skillsSnapshot`，导致 Gateway 内存每分钟增长 50-100MB。
    *   **Issue #54155:** 多日运行后内存从 389MB 飙升至 14.7GB。
    *   **Issue #67419:** 启动文件（MEMORY.md 等）在多轮对话中每轮重新注入，浪费 20-30% 上下文窗口。
    *   **链接:** [Issue #55334](https://github.com/openclaw/openclaw/issues/55334), [Issue #54155](https://github.com/openclaw/openclaw/issues/54155), [Issue #67419](https://github.com/openclaw/openclaw/issues/67419)

*   **会话状态与消息丢失：**
    *   **Issue #69208:** 跨渠道（MSTeams, Webchat, Telegram）存在重复转录、回放和上下文组装的通用 Bug。
    *   **Issue #69118:** Claude CLI 在群聊中每轮转换都重置会话，因为 `extraSystemPromptHash` 漂移。
    *   **Issue #66443:** 溢出恢复时重复插入 `role=user` 消息，加剧上下文膨胀。
    *   **Issue #64810:** 心跳事件中断 Telegram 主题中的用户回复，导致回答“消失”。
    *   **链接:** [Issue #69208](https://github.com/openclaw/openclaw/issues/69208), [Issue #69118](https://github.com/openclaw/openclaw/issues/69118), [Issue #64810](https://github.com/openclaw/openclaw/issues/64810)

*   **认证与安全回归：**
    *   **Issue #51396:** `clearUnboundScopes` 无条件剥离非本地客户端的操作员权限，导致后端客户端聊天发送失败。
    *   **Issue #45740:** `gh-issues` 技能未对原始 Issue Body 进行清洗直接注入子代理提示词，存在安全风险。
    *   **Issue #57326:** CLI 辅助路径绕过 CLI 分发，导致认证提供者行为不一致。
    *   **链接:** [Issue #51396](https://github.com/openclaw/openclaw/issues/51396), [Issue #45740](https://github.com/openclaw/openclaw/issues/45740)

## 6. 功能请求与路线图信号
*   **多语言 TTS/STT 支持：**
    *   **Issue #66252:** 请求按 Agent 配置不同的语音合成/识别参数，以支持多语言场景。
    *   **链接:** [Issue #66252](https://github.com/openclaw/openclaw/issues/66252)

*   **远程重排序器（Remote Reranker）：**
    *   **Issue #64438:** 建议支持外部 Reranker API（如 Cohere, Qwen3-Reranker），类似于已有的 Embedding 提供商支持。
    *   **链接:** [Issue #64438](https://github.com/openclaw/openclaw/issues/64438)

*   **多槽位记忆架构：**
    *   **Issue #60572:** 提议将单一 `memory` 槽位替换为多个专用槽位，允许不同记忆提供商并行工作。
    *   **链接:** [Issue #60572](https://github.com/openclaw/openclaw/issues/60572)

*   **敏感数据脱敏：**
    *   **Issue #64046:** 用户强烈要求在配置文件、日志和 UI 中对 API Key 等敏感信息进行脱敏显示。
    *   **链接:** [Issue #64046](https://github.com/openclaw/openclaw/issues/64046)

*   **Anthropic Advisor 工具支持：**
    *   **Issue #63930:** 请求支持 Anthropic 的 `advisor-tool`，以利用其服务器端工具能力。
    *   **链接:** [Issue #63930](https://github.com/openclaw/openclaw/issues/63930)

## 7. 用户反馈摘要
*   **痛点：**
    *   **“承诺即服务”的信任危机：** 用户指出 Agent 经常承诺后续跟进但未执行任何实际动作（Issue #58450），或在群聊中硬编码路径导致意外创建用户目录（Issue #51429）。
    *   **调试困难：** Telegram 论坛主题的投递失败日志缺乏上下文，使得诊断变得极其困难（Issue #96942, Issue #64810）。
    *   **资源浪费：** 引导文件在每次对话轮次中被重复注入，严重挤占上下文窗口，影响长对话能力（Issue #67419）。

*   **满意点：**
    *   **ClawHub 生态愿景：** 尽管目前工具链不完善，但社区对基于 `SKILL.md` 的模块化扩展模式保持高度关注（Issue #50090）。
    *   **快速响应：** 对于明确的回归问题（如 Issue #96924 的 launchd 死循环），开发者迅速提交了修复 PR。

## 8. 待处理积压
以下 Issue/PR 长期未得到最终解决或合并，需维护者重点关注：

*   **[P1] CLI 后端所有权修复残留问题：**
    *   **Issue #57326:** 虽然主修复已合并，但仍有少量 Helper 路径绕过 CLI 分发，需进一步清理。
    *   **链接:** [Issue #57326](https://github.com/openclaw/openclaw/issues/57326)

*   **[P1] 嵌入式 Runner 网络超时误报：**
    *   **Issue #53540:** 当 LLM 生成大参数工具调用时，因生成延迟超过底层请求超时，导致错误报告“Network connection lost”。
    *   **链接:** [Issue #53540](https://github.com/openclaw/openclaw/issues/53540)

*   **[P2] 混合传输配置静默失败：**
    *   **PR #72515:** 当 MCP 服务器配置同时包含 `command` 和 `url` 时，运行时静默选择 stdio 并丢弃 HTTP 传输，导致连接超时。此 PR 仍在等待真实行为证明。
    *   **链接:** [PR #72515](https://github.com/openclaw/openclaw/pull/72515)

*   **[P2] 医生命令检测本地重建：**
    *   **PR #69355:** `openclaw doctor` 应能区分“本地补丁安装”和“纯净 npm 版本”，以防止静默覆盖导致的回归难以排查。
    *   **链接:** [PR #69355](https://github.com/openclaw/openclaw/pull/69355)

---

## 横向生态对比

# 2026-06-26 个人 AI 助手与开源智能体生态横向对比分析报告

## 1. 生态全景
2026年中期，个人 AI 助手开源生态已从“功能堆砌”转向“稳定性与安全治理”深水区。**OpenClaw** 凭借极高的社区活跃度和复杂的会话管理能力，确立了其作为“全能型基础设施”的地位，但面临严重的内存泄漏与资源管理挑战。**NanoBot** 和 **ZeroClaw** 则分别在“极致安全/轻量级”和“多代理协作/A2A协议”上形成差异化优势，前者聚焦于沙箱逃逸修复，后者加速企业级权限隔离。**IronClaw** 和 **CoPaw** 展示了向生产级部署迈进的趋势，强调可观测性、容器化资源控制及与上游框架（如 Agentscope 2.0）的深度集成。整体来看，**安全性（Sandboxing/Permissions）**、**资源效率（Memory/Context）** 和 **互操作性（A2A/MCP）** 是本周期的三大核心议题。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release | 活跃度评级 | 健康度评估 | 核心痛点/焦点 |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 500+ | 500+ | ❌ 无 | 🌟🌟🌟🌟🌟 | ⚠️ 挑战大 | 内存泄漏(OOM)、会话状态一致性、托管市场基建 |
| **NanoBot** | 高(安全类为主) | 高(修复类为主) | ❌ 无 | 🌟🌟🌟🌟 | ✅ 响应快 | `exec` 沙箱绕过、MCP 权限控制、Windows 服务稳定性 |
| **Hermes Agent** | 50 | 50 | ❌ 无 | 🌟🌟🌟🌟 | ✅ 工程力强 | Desktop 构建失败、凭证泄露、多模态兼容性 |
| **PicoClaw** | 4 | 19 | ❌ 无 | 🌟🌟🌟 | ✅ 稳定 | WhatsApp 超时、Token 消耗优化、依赖现代化(vodozemac) |
| **NanoClaw** | 1 | 21 | ❌ 无 | 🌟🌟🌟 | ✅ 迭代快 | 会话清理、技能扩展(`/learn`)、容器资源限制 |
| **IronClaw** | 50 | 50 | ❌ 无 | 🌟🌟🌟🌟 | ✅ 高健康度 | Reborn 架构能力策略、CAS 共享锁优化、代理循环加固 |
| **LobsterAI** | 0 | 7 | ❌ 无 | 🌟🌟 | ✅ 低噪音 | 协作模式(Cowork)逻辑修复、UI 一致性、无紧急 Bug |
| **CoPaw** | 26 | 50 | ❌ 无 | 🌟🌟🌟🌟 | ⚠️ 回归多 | Chrome 进程泄漏、Agentscope 2.0 适配、前端渲染崩溃 |
| **ZeroClaw** | 27 | 50 | ✅ v0.8.2 | 🌟🌟🌟🌟 | ✅ 高速发展 | A2A 代理发现、权限绕过(S0)、供应链签名(SLSA) |
| **NullClaw** | 0 | 0 | ❌ 无 | 🌟 | ⏸️ 停滞 | 无活动 |
| **TinyClaw** | 0 | 0 | ❌ 无 | 🌟 | ⏸️ 停滞 | 无活动 |
| **Moltis** | 0 | 0 | ❌ 无 | 🌟 | ⏸️ 停滞 | 无活动 |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | 🌟 | ⏸️ 停滞 | 无活动 |

## 3. OpenClaw 在生态中的定位
*   **生态基石与复杂性中心：** OpenClaw 拥有远超其他项目的 Issue/PR 吞吐量（千级/日），表明其拥有最大的用户基数和最复杂的部署场景。它不仅是个人助手，更试图承载“托管市场”、“多代理协作”等重型功能。
*   **技术路线差异：** 与其他项目相比，OpenClaw 更侧重于**会话状态的精细管理**（Session State）和**多渠道融合**（MSTeams, Webchat, Telegram 等）。其架构复杂度导致了较高的维护成本（如 OOM、上下文窗口浪费）。
*   **社区规模：** 绝对领先。其社区热点涉及底层内核（如 launchd 死循环、JSON 响应限制），而其他项目更多关注上层功能或特定平台适配。OpenClaw 的“信任危机”（承诺即服务但未执行）反映了大规模用户群对可靠性的高敏感度。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与分析 |
| :--- | :--- | :--- |
| **安全与权限隔离** | **NanoBot, ZeroClaw, NanoClaw, Hermes Agent** | **NanoBot:** 修复 `exec` 沙箱绕过和 MCP 权限缺陷。<br>**ZeroClaw:** 解决代理委派权限绕过 (S0) 及引入 SLSA 供应链签名。<br>**NanoClaw:** 加强 `send_file` 安全限制及容器资源隔离。<br>**Hermes:** 修复凭证泄露及提出 Credential Proxy Daemon。 |
| **资源管理与效率** | **OpenClaw, PicoClaw, ZeroClaw** | **OpenClaw:** 攻克 Gateway OOM、会话内存无限增长及引导文件重复注入问题。<br>**PicoClaw:** 修复 Evolution 模式下的 Token 无限消耗。<br>**ZeroClaw:** 优化日志持久化（旋转日志）以平衡存储与性能。 |
| **多代理协作与互操作** | **ZeroClaw, OpenClaw, IronClaw** | **ZeroClaw:** 发布 A2A 代理发现，强化多代理间的权限继承与隔离。<br>**OpenClaw:** 解决子代理结果丢失及长思考模型的流式监控超时。<br>**IronClaw:** 实现 Reborn 架构下的能力策略（Capability Policy）及多租户隔离。 |
| **前端/桌面端稳定性** | **Hermes Agent, CoPaw, NanoBot** | **Hermes:** 解决 Desktop 构建失败、输入截断及搜索失效。<br>**CoPaw:** 修复前端渲染崩溃及 Agentscope 2.0 迁移后的回归问题。<br>**NanoBot:** 优化 WebUI PWA 支持及 Windows 服务稳定性。 |

## 5. 差异化定位分析

*   **OpenClaw vs. Others:** **重型全栈平台**。适合需要高度定制化、多渠道集成且有能力处理复杂运维（内存、状态）的高级用户或企业自建场景。劣势是稳定性包袱重。
*   **NanoBot:** **安全优先的轻量级助手**。主打“Ultra-lightweight”（尽管有争议）和高安全响应速度。适合对个人隐私、命令执行安全有极高要求的开发者。
*   **ZeroClaw:** **多代理协作与标准化先锋**。通过 A2A 协议和严格的权限控制，定位为连接多个智能体的“操作系统”或网关。适合构建代理集群或企业级自动化工作流。
*   **CoPaw:** **框架集成型助手**。深度绑定 Agentscope 2.0，强调与现有 AI 开发框架的兼容性。适合已经使用 Agentscope 生态进行模型训练或应用开发的团队。
*   **IronClaw:** **企业级可观测性与策略管理**。Reborn 架构强调细粒度的能力策略（Capability Policy）和底层性能优化（CAS 共享）。适合对稳定性、审计和性能有严苛要求的生产环境。
*   **LobsterAI:** **精细化打磨的协作体验**。无新 Issue 且 PR 多为 UI/UX 和逻辑微调，表明其处于“体验优化”阶段，适合注重界面流畅度和协作细节的用户。
*   **PicoClaw/NanoClaw:** **垂直/边缘场景补充**。PicoClaw 侧重 WhatsApp/Matrix 等特定渠道及低成本运行；NanoClaw 侧重技能（Skills）的快速构建和容器化部署。

## 6. 社区热度与成熟度

*   **快速迭代/高噪期 (High Velocity/Noise):**
    *   **OpenClaw:** 海量 Issue/PR，但 Bug 密集（OOM, 状态丢失），处于“边跑边修鞋带”的阶段，技术债务高。
    *   **CoPaw:** 因框架迁移（Agentscope 2.0）导致大量回归 Bug，处于适应期。
    *   **ZeroClaw:** 新版本发布后迅速暴露安全漏洞和兼容性问题，迭代极快但稳定性待验证。
*   **稳健/安全加固期 (Stability/Security Focus):**
    *   **NanoBot:** 活跃度适中，但重点完全集中在安全漏洞修复，响应迅速，技术路线清晰。
    *   **IronClaw:** 底层重构（Reborn）带来大量基础设施 PR，但社区反馈相对理性，侧重于架构完善。
*   **成熟/优化期 (Mature/Optimization):**
    *   **LobsterAI:** 低 Issue 增长，PR 合并率高且无阻塞，专注于用户体验微调，表明核心功能已稳定。
    *   **Hermes Agent:** 虽然 Desktop 端有问题，但核心逻辑修复迅速，处于功能完善阶段。

## 7. 值得关注的趋势信号

1.  **从“功能可用”到“安全可信”：**
    *   **信号：** NanoBot 的 `exec` 沙箱修复、ZeroClaw 的 SLSA 签名提议、NanoClaw 的文件权限隔离。
    *   **启示：** 开源 AI 助手正在将“最小权限原则”和“供应链安全”作为核心卖点。开发者需重视 Agent 执行环境的隔离性和可审计性。

2.  **多代理协作的标准化合约 (A2A & Capability Policies)：**
    *   **信号：** ZeroClaw 的 A2A 代理发现、IronClaw 的 Capability Policy、OpenClaw 的子代理结果传递问题。
    *   **启示：** 单点智能体正在向网络化智能体演进。谁能制定出清晰的代理间通信协议（A2A）和权限继承规则，谁就能主导下一代分布式 AI 架构。

3.  **资源效率成为核心竞争力：**
    *   **信号：** OpenClaw 的 OOM 危机、PicoClaw 的 Token 浪费修复、ZeroClaw 的日志旋转。
    *   **启示：** 随着模型能力增强，资源消耗（内存、Token、上下文窗口）成为瓶颈。优化“每轮对话成本”和“长期运行稳定性”将是用户留存的关键。

4.  **桌面端/边缘端的工程挑战：**
    *   **信号：** Hermes 的构建失败、NanoBot 的 Windows 服务问题、CoPaw 的前端崩溃。
    *   **启示：** 开源 AI 助手正走向本地化部署（Edge/Local）。解决跨平台（Win/Mac/Linux）的环境差异、进程管理和 UI 渲染性能，是区别于纯云端 API 产品的关键工程壁垒。

5.  **技能（Skills）生态的模块化与标准化：**
    *   **信号：** OpenClaw 的托管市场、NanoClaw 的 `/learn` 技能、ZeroClaw 的技能注册表。
    *   **启示：** 未来的竞争不在于模型本身，而在于如何让用户轻松创建、分享和复用技能。标准化的技能描述格式（如 SKILL.md）和安全的分发机制是生态繁荣的基础。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (HKUDS/nanobot)

## 1. 今日速览
今日 NanoBot 项目处于**高安全修复与功能完善期**。尽管没有发布新版本，但社区和安全研究人员密集报告了多项关键漏洞（特别是 `exec` 工具沙箱绕过及 MCP 权限控制缺陷），导致大量 Issue 被标记为已关闭并迅速跟进修复 PR。同时，WebUI 的 PWA 支持和移动端体验优化成为新的亮点，Windows 平台的服务稳定性问题也得到关注。整体活跃度极高，安全治理是今日核心主题。

## 2. 版本发布
*   **无新版本发布。**
*   *注：今日关闭的多个安全 Issue 预计将在即将到来的补丁版本中统一合并修复，建议用户关注后续 Release Notes。*

## 3. 项目进展
今日主要进展集中在**安全性加固**和**基础架构稳定性**上：

*   **安全修复闭环：** 针对 `exec.allowPatterns` 的沙箱绕过问题（Issue #4514, #4515, #4516, #4520, #4521），开发者 `axelray-dev` 迅速提交了 PR #4525 和 #4526，通过改用 `re.fullmatch` 和修正默认 shell 行为来阻断恶意命令链执行。MCP 权限绕过问题（Issue #4519, #4434, #4435, #4517）也在 PR #4524 中得到修复，确保 `enabledTools` 配置能正确过滤资源。
*   **文件系统权限隔离：** PR #4099 修复了 `extra_allowed_dirs` 被误当作可写根目录的问题，增强了文件操作的安全性。
*   **会话管理优化：** PR #4533 解决了磁盘会话键冲突导致的潜在数据覆盖风险，提升了多平台接入（如 Telegram）的稳定性。
*   **WebUI 增强：** PR #4494 和 #4535 引入了 PWA 支持和更严格的 CI 测试覆盖，改善了移动端用户体验和代码质量保障。

## 4. 社区热点
今日讨论最集中的领域是**安全漏洞披露**和**功能合理性争议**：

*   **[Security] exec 工具沙箱绕过系列 (High Interest)**
    *   **Issues:** #4514, #4515, #4516, #4520, #4521
    *   **PRs:** #4525, #4526
    *   **分析：** 同一作者 `YLChen-007` 和 `axelray-dev` 在短时间内集中提交和修复了多个关于 `exec` 工具白名单绕过的漏洞。这反映出用户对 AI Agent 执行系统命令的高度敏感，以及项目团队对安全响应的高效性。
*   **[Feature Request] ask_clarification 工具**
    *   **Issue:** #4508
    *   **PR:** #4527
    *   **分析：** 用户提出当需求模糊时，Agent 应主动询问而非猜测。这一功能旨在减少“幻觉”操作，提升 Agent 的可靠性和交互自然度，符合当前 AI 助手向“协作型”转变的趋势。
*   **[Discussion] “超轻量级”宣传争议**
    *   **Issue:** #660
    *   **PR:** #4536
    *   **分析：** 用户指出项目文档宣称“ultra-lightweight”，但依赖 Node.js 和 Python 双运行时，存在宣传与实际不符的问题。PR #4536 直接修改了 README，体现了社区对项目透明度的重视。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及**平台兼容性**和**并发处理**：

1.  **[Critical] Windows 下 Gateway 后台运行与服务重启异常**
    *   **Issues:** #4511, #4513
    *   **描述：** 在 Windows 使用 `--background` 或 NSSM 注册为服务时，`/restart` 命令可能导致进程状态不同步、端口占用或假死。
    *   **状态：** 待处理。目前尚无明确 Fix PR，需维护者关注 Windows 特定路径的资源清理逻辑。
2.  **[Medium] Telegram Web 消息不支持报错**
    *   **Issue:** #4488
    *   **描述：** Rich messages 功能引入后，Telegram Web 客户端无法渲染某些消息类型。
    *   **状态：** 已知回归，需适配 Web 端限制。
3.  **[Low] Xiaomi MiMo ASR 转录失败**
    *   **Issue:** #4492
    *   **PR:** #4492 (Closed/Fixed)
    *   **描述：** WebM 音频格式不被 MiMo API 支持，导致转录错误。已通过 PR #4492 修复，增加了格式转换逻辑。
4.  **[Low] Subagent 错误恢复机制僵化**
    *   **Issue:** #4198
    *   **PR:** #4198 (Closed/Fixed)
    *   **描述：** 子代理在工具调用失败后立即终止，缺乏重试或调整机会。已通过配置项暴露 `fail_on_tool_error` 解决。

## 6. 功能请求与路线图信号
*   **PWA 与移动端优化 (High Confidence):** PR #4494 和 #4535 的提交表明，官方正在积极改善移动访问体验，预计下一版本将正式支持 WebUI 作为 PWA 安装。
*   **MCP 服务器空闲自动销毁 (Medium-High Confidence):** PR #4506 提议实现 MCP 服务器的 idle timeout 自动 kill 机制，以解决僵尸进程和资源泄漏问题。这是一个典型的运维友好型功能，很可能被纳入近期版本。
*   **Skills 目录结构化 (Medium Confidence):** PR #4504 允许 Skills 使用子目录组织，解决了随着技能数量增加导致的扁平化管理困难问题，符合模块化设计趋势。
*   **流式处理与 Provider 兼容性 (Ongoing):** 多个 PR (#4530, #4531, #4532) 专注于修复非标准 LLM Provider（如 Anthropic, OpenAI Compatible）在流式输出、Tool Call ID 去重和内容块类型验证上的兼容性问题，显示项目正在努力扩大对异构模型的支持。

## 7. 用户反馈摘要
*   **痛点：**
    *   **安全风险感知强：** 用户对 `exec` 工具和 MCP 权限控制的漏洞反应激烈，强调“最小权限原则”在 Agent 中的重要性。
    *   **文档与预期不符：** 用户希望项目宣传更加务实，避免夸大“轻量级”等特性。
    *   **Windows 体验落后：** 相比 Linux/macOS，Windows 用户在后台运行和服务集成方面遇到更多摩擦。
*   **满意点：**
    *   **响应速度快：** 安全漏洞从报告到修复 PR 的周期极短，体现了良好的维护态度。
    *   **功能实用性：** `ask_clarification` 和 Skills 目录化等功能直接解决了日常使用中的效率瓶颈。

## 8. 待处理积压
*   **[Windows Service Stability] Issue #4511 & #4513:**
    *   **状态:** OPEN
    *   **优先级:** High
    *   **建议：** 需要专门针对 Windows 环境的 Gateway 生命周期管理进行调试，特别是 `/restart` 命令下的进程句柄释放和端口复用逻辑。
*   **[Telegram Web Compatibility] Issue #4488:**
    *   **状态:** CLOSED (但在 PR #4492 附近讨论中暗示需进一步适配)
    *   **优先级:** Medium
    *   **建议：** 确保 Rich Messages 在 Telegram Bot API 的 Web 视图中有降级方案或兼容格式。

---
*本报告由 Agnes-2.0-Flash 生成，基于公开 GitHub 数据进行分析。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：** 2026-06-26
**数据来源：** NousResearch/hermes-agent GitHub Repository

## 1. 今日速览
Hermes Agent 项目在 2026-06-26 保持极高的开发活跃度，过去 24 小时内产生 50 个新 Issues 和 50 个 PR，其中 19 个 PR 已被合并/关闭，显示出团队强大的工程执行力。今日核心焦点集中在 **Desktop 客户端的稳定性修复**（如输入截断、搜索失效、CMD 闪屏）以及 **MCP 工具链的安全与兼容性加固**。虽然无新版本发布，但大量针对 Windows/Linux 平台的底层 Bug 修复和 Provider 适配优化正在快速推进，预计将为即将到来的稳定版版本奠定坚实基础。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日合并/关闭的关键 PR 显著提升了系统的健壮性和用户体验：
*   **文件编辑修复：** PR #52678 修复了模糊匹配文件编辑时边界空格丢失的问题，解决了导致代码格式损坏的严重 Bug（关联 Issue #52491）。
*   **Copilot ACP 分页修复：** PR #52863 修复了 `fs/read_text_file` 忽略 `line=1` 分页参数的问题，防止大文件读取时的内存溢出或性能瓶颈。
*   **Gemini 多模态兼容：** PR #52862 修复了原生适配器在处理字符串格式 `image_url` 时的崩溃问题，增强了多模态输入的兼容性。
*   **Claude 计费错误处理：** PR #52869 将 Anthropic 的“超额使用”400 错误正确分类为计费问题，避免了错误的凭证轮换尝试。
*   **Exa 搜索代理修复：** PR #52867 通过设置标准 User-Agent 头，解决了因 Cloudflare 拦截导致的 403 错误。
*   **技能描述截断修复：** PR #52866 将技能描述提取上限从 60 字符提升至 1024 字符，改善了系统提示词中的技能路由准确性。

## 4. 社区热点
以下 Issues 获得了最高关注度，反映了用户对特定组件的深层需求：

*   **[Bug] Desktop build fails after update (Issue #47917)**
    *   **热度：** 23 条评论，2 个赞
    *   **分析：** 尽管有 PR #47276 的临时修复，但 Electron 二进制缓存清理机制仍导致构建失败。这是 Desktop 用户面临的最大障碍，需彻底解决缓存策略。
*   **[Feature] Integrate headroom-ai for tool output compression (Issue #39691)**
    *   **热度：** 8 条评论，10 个赞
    *   **分析：** 用户对上下文压缩有强烈需求，特别是针对长工具输出。当前基于会话级别的压缩无法有效处理单次调用产生的大量数据，该功能被广泛期待以提升 Token 效率。
*   **[Feature] Credential Proxy Daemon (Issue #4656)**
    *   **热度：** 11 条评论，1 个赞
    *   **分析：** 随着 Agent 权限扩大，凭证泄露风险成为核心关切。零知识 HTTP/HTTPS 经纪人的提议旨在隔离敏感凭证，符合安全最佳实践。
*   **[Bug] Curator may archive active skills (Issue #29912)**
    *   **热度：** 7 条评论，1 个赞
    *   **分析：** Curator 误归档活跃技能被视为高风险行为，可能导致关键功能突然失效，社区呼吁增加更严格的验证机制。

## 5. Bug 与稳定性
今日报告了多个影响桌面端和核心功能的 Bug，按严重程度排序：

*   **P1 (高):**
    *   **Issue #47917:** Desktop 构建在更新后因缓存失效而失败。*(已有相关讨论，需跟进修复)*
    *   **Issue #47197:** `browser_type` 工具在 Telegram/Discord 等渠道泄露明文凭证。*(已关闭，暗示修复已在途或确认风险)*
    *   **Issue #47627:** Gateway/TUI 新建会话缺乏 fallback 机制，导致认证失败时硬崩溃而非降级。*(已关闭)*
    *   **Issue #48137:** Windows Docker 终端后端路径暴露及挂载范围过大。*(已关闭)*
    *   **Issue #47472:** Anthropic 传输层工具调用被误识别为文本而被丢弃。*(已关闭)*

*   **P2 (中):**
    *   **Issue #51646:** Gateway 内存丢失，`INSERT` 语句遗漏 `active` 列，导致所有平台无法加载历史对话。*(严重数据一致性问题)*
    *   **Issue #47830:** MCP 工具通用异常被错误报告为需要重新认证。
    *   **Issue #40187:** macOS 下 `hermes update` 编译失败。
    *   **Issue #48515:** Linux 桌面端通过标题栏菜单操作会导致整个桌面环境冻结。
    *   **Issue #41323:** Desktop 端 `/goal` 命令不支持换行输入。
    *   **Issue #40142:** Desktop 端输入内容被截断。
    *   **Issue #46470:** 飞书平台 Markdown 渲染问题（表格、代码块等）。

*   **P3 (低/体验):**
    *   **Issue #52872:** 侧边栏会话搜索在存在 FTS 命中时显示“无匹配”。
    *   **Issue #52788:** Windows 端执行终端命令时 CMD 窗口闪屏。

*   **关联修复 PRs：**
    *   PR #52873: 修复 Desktop 侧边栏搜索不转发活跃 Profile 的问题。
    *   PR #52871: 修复 TUI/Desktop 中断逻辑，确保能停止排队任务。
    *   PR #52861: 修复模糊替换中的边界空格保留问题。

## 6. 功能请求与路线图信号
*   **Pluggable SessionDB Provider (Issue #23717):** 用户强烈建议支持 PostgreSQL/MySQL，以解决 SQLite 在高并发更新下的锁竞争问题（"Hot-Update Death Spiral"）。这是企业级部署的关键需求。
*   **Credential Proxy Daemon (Issue #4656):** 提出构建独立的凭证代理服务，实现权限隔离，符合安全边界扩展的方向。
*   **Headroom-ai 集成 (Issue #39691):** 针对长工具输出的压缩方案，若采纳将显著提升长上下文场景下的可用性。
*   **Telegram Rich Messages (Issue #44428):** 支持 Telegram Bot API 10.1 的新富媒体格式，提升消息呈现质量。
*   **Volcengine Ark 内置支持 (PR #52836):** 新增火山引擎作为官方内置 Provider，反映了对国内云厂商 AI 服务的集成需求。
*   **Vertex AI Provider (PR #8427):** 新增 Google Vertex AI 支持，完善多云模型覆盖。
*   **Iron-Proxy 沙箱防火墙 (PR #30179):** 提供可选的出口流量代理，用于沙箱环境下的凭证注入，增强安全性。

## 7. 用户反馈摘要
*   **痛点：** Desktop 端的稳定性是最大槽点。用户频繁报告输入截断、搜索失效、构建失败以及特定 OS（Windows/Linux）下的界面冻结问题。这表明前端/Electron 层的测试覆盖率或自动化回归测试可能存在盲区。
*   **场景：** 用户在生产环境中高度依赖技能（Skills）的持久化和自动管理，但 Curator 的“静默删除”行为引发了信任危机。
*   **满意度：** 社区对快速修复 PR（如空格保留、分页修复）表示认可，但对缓存清理等基础构建流程的反复出错感到沮丧。
*   **需求：** 对数据库后端多样化的需求迫切，尤其是对于需要高可用和多实例部署的用户。

## 8. 待处理积压
*   **Issue #38240:** Skills Index Watchdog 持续报告索引陈旧/退化。这是一个自动化监控问题，需检查 CI/CD 流水线中的索引重建逻辑。
*   **Issue #52825:** 桌面端中文本地化请求。随着非英语用户增加，UI 本地化应提上日程。
*   **Issue #52814:** 请求 `hermes update` 支持拉取最新 Tag 版本而非仅 Main 分支，以满足追求稳定的用户需求。
*   **Issue #52878:** Auto Trace Injection for Skill Execution。基于 HarnessX 框架的可观测性增强提议，目前尚无明确进展，但符合 Agent 调试趋势。
*   **长期未决：** Issue #47917 和 #40187 涉及跨平台构建，需维护者优先处理以解除 Desktop 用户的更新障碍。

---
*分析师：Agnes-2.0-Flash | 生成时间：2026-06-26*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub API (sipeed/picoclaw)

## 1. 今日速览
2026年6月26日，PicoClaw 项目保持高频开发节奏，过去24小时内共产生19个PR和4个Issue更新。代码质量与安全性是今日焦点，多个PR致力于修复资源泄漏、类型断言潜在panic以及依赖库升级。尽管没有新版本的正式Release，但内部修复密集，特别是针对 WhatsApp 通道超时、Evolution 模式Token消耗异常等关键问题的讨论与修复正在推进。项目整体健康度良好，社区贡献者活跃，维护者在持续清理技术债务。

## 2. 版本发布
*   **状态：** 无新版本发布。
*   **说明：** 近期合并的PR主要集中在bug修复、依赖更新和内部重构，尚未触发新的语义化版本发布。建议关注 `v0.2.9` 后续的稳定版更新，特别是涉及 `vodozemac` 替换 `libolm` 的重大架构变更落地情况。

## 3. 项目进展
今日合并/关闭的PR显著提升了系统的稳定性和健壮性：
*   **依赖安全与现代化：**
    *   **PR #3088 (Issue)** 提议用 `vodozemac` 替代不再维护且存在安全隐患的 `libolm`，这是Matrix通道长期稳定性的关键一步。
    *   **PR #3177, #3145** 将 `github.com/github/copilot-sdk/go` 从 `0.2.x` 大幅升级至 `1.0.x`，确保Copilot集成的兼容性与功能完整性。
    *   **PR #3176, #3174, #3175, #3173** 批量更新了 Telego、LINE SDK、Systray 和 SQLite 驱动，修复了已知漏洞并引入了新特性。
*   **核心逻辑修复：**
    *   **PR #3169** 修复了 Evolution 模式下 Heartbeat 轮询导致的无效 Token 消耗，直接优化了成本控制。
    *   **PR #3142** 解决了 Spawn 子代理完成后因 `ForUser` 字段未清空导致的重复消息推送问题。
    *   **PR #3045** 修复了 Matrix 用户 ID 格式解析错误导致的消息静默拒绝问题。
*   **代码质量提升：**
    *   **PR #3128, #3172, #3171, #3170** 系列 PR 由 `chengzhichao-xydt` 提交，统一处理了 `Close()` 错误忽略、`sync.Map` 类型断言安全检查及 Base64 编码器资源泄漏问题，显著降低了运行时 Panic 风险。

## 4. 社区热点
*   **[BUG] Continuous consumption of tokens every minutes when evolution is enabled (Issue #3012)**
    *   **热度：** 高（5条评论，虽已关闭但引发关注）
    *   **背景：** 用户在启用 Evolution 模式时遭遇严重的 Token 浪费问题。
    *   **关联：** 此问题直接推动了 **PR #3169** 的合并，该 PR 通过跳过 Heartbeat 周期的冷路径调度来解决此问题。这表明社区对成本敏感型功能的反馈能迅速转化为代码改进。
*   **[Feature] use vodozemac instead of libolm (Issue #3088)**
    *   **热度：** 中（3条评论，2个👍）
    *   **背景：** 维护 `libolm` 已停止，存在安全风险。社区强烈呼吁迁移到官方替代品 `vodozemac`。
    *   **影响：** 这是一个架构级决策，可能涉及 Matrix 通道的重写，需密切关注后续 PR 的进展。
*   **[BUG] WhatsApp Websocket Timeout (Issue #3178)**
    *   **热度：** 新发（0评论，但环境配置复杂）
    *   **背景：** 用户在使用 Docker + Launchpad 部署 WhatsApp Websocket 连接时遇到超时。
    *   **分析：** 随着 WhatsApp 渠道支持的普及，连接稳定性成为新的痛点，可能需要调整心跳机制或网络超时配置。

## 5. Bug 与稳定性
*   **严重：**
    *   **WhatsApp 连接超时 (Issue #3178)**：新报告，影响生产环境可用性。目前尚无合并的 Fix PR，需维护者介入排查 WebSocket 握手或保活机制。
    *   **Evolution 模式 Token 无限消耗 (Issue #3012)**：已确认并修复 (PR #3169)。
*   **中等：**
    *   **重复消息推送 (PR #3142)**：Spawn 子代理完成时的副作用，已修复。
    *   **Matrix 用户 ID 解析失败 (PR #3045)**：特定格式用户无法通信，已修复。
    *   **Base64 编码器资源泄漏 (PR #3170)**：在 `io.Copy` 失败路径下未关闭编码器，可能导致内存泄漏，已修复。
*   **低：**
    *   **Type Assertion 潜在 Panic (PR #3171)**：LINE 通道中 `sync.Map` 读取未做 ok 检查，已修复。
    *   **Web Search 提供者 Body 关闭错误忽略 (PR #3128)**：非功能性 Bug，仅规范代码，已修复。

## 6. 功能请求与路线图信号
*   **DeltaChat 网关支持 (PR #3063)**：
    *   作者 `trufae` 提交了添加 DeltaChat 网关的功能 PR。DeltaChat 基于 Mailvelope 协议，是一个独特的去中心化聊天平台。如果合并，将极大扩展 PicoClaw 的渠道兼容性，吸引隐私优先的用户群体。
*   **远程 Agent 模式 (PR #3118)**：
    *   允许 `picoclaw agent` 通过 WebSocket 连接到远程实例。这为分布式部署和云端托管提供了灵活性，符合当前 AI Agent 云原生趋势。
*   **Inline Data URL 媒体提取修复 (PR #3115)**：
    *   修复了通用工具输出中误识别 `data:image/...` 为附件的问题。虽然主要是 Bug 修复，但也改善了非结构化数据处理的能力，间接支持更复杂的媒体交互场景。

## 7. 用户反馈摘要
*   **痛点：**
    *   **成本控制：** 用户极度关注 Evolution 模式下的 Token 效率，任何不必要的轮询都会被视为严重缺陷 (Issue #3012)。
    *   **稳定性：** WhatsApp 和 Telegram 通道的连接稳定性是用户部署后的主要担忧，特别是超时和通道错误 (Issue #3178, #1757)。
    *   **配置复杂性：** 用户在使用 Raspberry Pi Zero W 等边缘设备或 FreeBSD 等非主流 OS 时，遇到环境兼容性问题 (Issue #1757, #3012)。
*   **满意点：**
    *   快速响应：社区对关键 Bug 的修复速度较快，如 Token 消耗问题在报告后不久即有对应 PR。
    *   扩展性：用户对新增渠道（如 DeltaChat）和远程模式表现出兴趣。

## 8. 待处理积压
*   **Issue #3178 [BUG] WhatsApp Websocket Timeout**：
    *   **状态：** Open
    *   **优先级：** High
    *   **行动建议：** 维护者需尽快复现此问题，检查 WebSocket 客户端实现及 Docker 网络策略。
*   **Issue #3088 [Feature] use vodozemac instead of libolm**：
    *   **状态：** Open
    *   **优先级：** Medium-High (Security/Maintenance)
    *   **行动建议：** 评估迁移工作量，制定分阶段移除 `libolm` 的计划，避免破坏现有 Matrix 用户配置。
*   **PR #3063 [feat] add deltachat gateway**：
    *   **状态：** Open
    *   **优先级：** Medium
    *   **行动建议：** 审查代码质量与协议实现标准，若符合项目方向，可考虑合并以丰富渠道生态。
*   **PR #3118 [feat] Add remote Pico WebSocket mode**：
    *   **状态：** Open
    *   **优先级：** Medium
    *   **行动建议：** 测试远程模式的鉴权与安全机制，确保无数据泄露风险。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (nanocoai/nanoclaw)

## 1. 今日速览
NanoClaw 在 2026-06-26 保持极高的开发活跃度，过去 24 小时内共产生 **21 条 PR** 和 **1 条 Issue**。其中 10 条 PR 已被合并或关闭，显示出维护者对代码审查和合并的高效处理能力。主要进展集中在稳定性修复（会话管理、日志噪音）、新功能技能（Skills）的扩展以及容器资源控制的优化。尽管没有新版本发布，但密集的补丁提交表明项目正处于快速迭代和稳定化阶段，核心架构正在通过细粒度的技能模块和基础设施加固不断演进。

## 2. 版本发布
**无新版本发布。**
当前所有更新均以 PR 形式存在，尚未聚合成正式的 Release 版本。建议关注即将合并的核心功能（如容器资源限制、多管理员审批）是否会在下一版本中作为主要特性推出。

## 3. 项目进展
今日有 10 个 PR 被标记为 Closed/Merged，主要推动了以下方面的改进：

*   **会话稳定性与清理：**
    *   **#2865 & #2864**：修复了 OpenCode 和 Provider 会话在“ceiling-kill”信号或空结果下的旋转（rotate）逻辑，解决了会话僵死或资源泄漏问题。
    *   **#2854**：修复了 macOS 上使用 Rancher Desktop 时因 Gateway CA 挂载问题导致的 API 连接失败（自签名证书错误），显著提升了本地开发环境的兼容性。
*   **新功能技能（Skills）落地：**
    *   **#2863**：引入了 `/setup-system-digest` 和 `/system-digest` 技能，用于系统摘要管理。
    *   **#2862**：添加了 `/manage-agents` 和 `/manage-schedules` 操作技能，增强了对 Agent 生命周期和调度的控制能力。
    *   **#2843**：合并了 `/learn` 技能，允许从任意源（目录、URL等）蒸馏出可复用的技能，丰富了技能生态。
    *   **#2472 & #2471**：完善了 Slack 集成，实现了基于 Thread 的会话隔离，避免了 DM 消息混杂在一个长会话中的历史遗留问题。
*   **基础设施与安全：**
    *   **#2856**：新增可选的容器 CPU/内存限制功能（`CONTAINER_CPU_LIMIT`/`CONTAINER_MEMORY_LIMIT`），防止单个 Agent 耗尽主机资源，提升了多租户环境下的安全性。
    *   **#2817**：加强了 `send_file` 的安全限制，确保文件读取严格局限于 Workspace 内，并阻止指向外部的符号链接。
    *   **#2832**：改进了审批模块，支持拒绝时附带理由，提升了人机协作的可解释性。

## 4. 社区热点
*   **Issue #2857**: [approval should support multi admins and terminal cli approvals](https://github.com/nanocoai/nanoclaw/issues/2857)
    *   **热度分析**：这是今日唯一的 Open Issue，直接指出了当前审批机制的单点故障风险（单管理员不可用时无法审批）。用户提出了两个具体诉求：支持自动重试其他管理员以及支持 CLI 终端审批。这反映了生产环境中对高可用审批流程的迫切需求。
*   **PR #2860**: [chore(logging): silence libsignal session debug spam](https://github.com/nanocoai/nanoclaw/pull/2860)
    *   **关注度**：虽然评论数为 undefined（可能因数据抓取限制），但标题显示其解决了 `libsignal` 库带来的严重日志噪音问题，涉及密钥材料泄露风险，这对安全敏感型用户是重大利好。
*   **PR #2859**: [fix(migrate-v2): don't SELECT is_main from v1 registered_groups](https://github.com/nanocoai/nanoclock/pull/2859)
    *   **关注度**：修复了数据库迁移脚本在旧版本 v1 安装上的崩溃问题，保障了平滑升级路径，对于存量用户至关重要。

## 5. Bug 与稳定性
今日修复了多个影响稳定性和兼容性的 Bug：

| 严重程度 | 问题描述 | 关联 PR | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | macOS 上因 CA 证书挂载导致 API 调用全部失败 | [#2854](https://github.com/nanocoai/nanoclaw/pull/2854) | Merged |
| **中** | 数据库迁移 v2 在旧版 v1 安装上崩溃（缺少 `is_main` 列） | [#2859](https://github.com/nanocoai/nanoclaw/pull/2859) | Merged |
| **中** | OpenCode/Provider 会话未能正确旋转，导致状态残留 | [#2865](https://github.com/nanocoai/nanoclaw/pull/2865)<br>[#2864](https://github.com/nanocoai/nanoclaw/pull/2864) | Merged |
| **低** | Telegram 适配器仍在使用已废弃的 Markdown 解析器 | [#2866](https://github.com/nanocoai/nanoclaw/pull/2866) | Open (Pending Merge) |
| **低** | `libsignal` 调试日志泄露密钥信息 | [#2860](https://github.com/nanocoai/nanoclaw/pull/2860) | Open (Pending Merge) |

## 6. 功能请求与路线图信号
*   **精细化资源控制**：PR #2856 引入的容器资源限制功能，表明项目正从“可用性”向“生产级可靠性”迈进，未来可能会默认启用或提供更完善的资源配额管理。
*   **技能生态扩展**：今日合并的 `/learn`、`/manage-agents`、`/system-digest` 等多个 Skill PR 显示，项目重心在于降低用户构建和管理自定义技能的门槛，鼓励社区贡献技能模块。
*   **审批流程自动化**：Issue #2857 提出的多管理员支持和 CLI 审批，若被采纳，将极大增强 NanoClaw 在企业级工作流中的适用性，可能是下一版本的重点特性。
*   **环境兼容性**：针对 macOS/Rancher Desktop 的修复（#2854）和对 Node.js 版本的明确限制（#2858 要求 >=22.5），显示维护者正在收紧运行环境依赖以提升稳定性。

## 7. 用户反馈摘要
*   **痛点**：用户普遍反映在复杂部署环境（如 macOS 容器化开发、旧数据库升级）中遇到阻碍性 Bug，特别是证书问题和迁移脚本兼容性。
*   **需求**：对于审批流程，用户不仅希望功能可用，更希望具备**容错性**（多管理员备选）和**便捷性**（CLI 终端直接操作），避免因为单一节点离线导致业务停滞。
*   **满意度**：用户对新增的 `/learn` 技能表示欢迎，认为这简化了技能复用过程；同时，Slack Thread 会话隔离的修复解决了长期存在的消息混乱问题，提升了用户体验。

## 8. 待处理积压
*   **PR #2866, #2865, #2864, #2863, #2862, #2861, #2860, #2858, #2854, #2856, #2843, #2824, #2795**：这些 PR 目前状态为 Open 或刚被关闭/合并，需确认最终合并状态。特别是 **#2858** 是对 #2795 的后续修复，需确保其完全解决安装和引擎问题。
*   **Issue #2857**：该 Issue 已开放且无评论，但需求明确。建议维护者尽快回应，评估是否将其纳入下一个 Sprint 进行开发，以解决多管理员审批的痛点。
*   **PR #2858**：由 `mksocial19-code` 提交，作为 #2795 的替代方案，需重点关注其关于 Node 版本要求和 `mkdir` 修复的完整性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub `nearai/ironclaw`

## 1. 今日速览
IronClaw 项目在 2026-06-26 保持高活跃度，过去24小时内共产生 100 项更新（50 Issues + 50 PRs），其中 33 项为新开或活跃状态。核心开发重点集中在 **Reborn 架构的能力策略（Capability Policy）**、**内存系统重构** 以及 **代理循环（Agent Loop）的混沌工程加固**。尽管无新版本发布，但大量底层基础设施 PR（如 CAS 共享、写缓存批处理）的合并为后续功能稳定奠定了基础。整体项目健康度高，技术债清理与核心功能迭代同步进行。

## 2. 版本发布
*   **无新版本发布。**

## 3. 项目进展
今日主要进展体现在 Reborn 栈的底层稳定性与可观测性提升：
*   **持久层优化：** PR #5234 通过引入共享的 `cas_update` 辅助函数，消除了 Reborn 存储层中冗余的每记录锁（per-record locks），显著降低了高并发下的写入阻塞风险。同时，PR #5257 实现了持久化事件日志的批量追加（write-behind coalescing），优化了热路径上的 I/O 性能。
*   **能力策略实施：** PR #5288 引入了 `CapabilityPolicyDeltaStore` 和 `PolicyResolver`，这是实现细粒度用户级权限控制（Issue #5261 Epic）的关键基础设施，允许管理员通过 REST API 配置工具与技能的访问策略。
*   **代理循环加固：** PR #5296 增强了代理循环对瞬态心跳丢失和终端故障恢复的处理能力，并将模型/能力恢复路径分类，提高了系统的鲁棒性。PR #5250 修复了因状态分类不全导致的“永久挂起”和“门控运行被杀”问题。
*   **内存系统扩展：** PR #5205 将模型内存实现为用户态扩展，支持源感知信任、主机定义的能力配置文件及原生文档存储提供者，标志着个人记忆系统向模块化迈出关键一步。

## 4. 社区热点
*   **[EPIC] Reborn capability policy: admin-shared tools & skills with per-user auth (#5261)**
    *   **链接:** https://github.com/nearai/ironclaw/issues/5261
    *   **分析:** 这是今日讨论的核心 Epic，旨在解决企业场景下多用户共享主机时的权限隔离问题。围绕此 Epic，多个子任务（#5272, #5268, #5267, #5273, #5266）正在并行推进，涉及本地用户创建、REST 管理面、可用性解析器及四维度策略存储。这表明团队正集中资源攻克 Reborn 的多租户能力边界。
*   **IronClaw Reborn Local Dogfooding Findings (#5119)**
    *   **链接:** https://github.com/nearai/ironclaw/issues/5119
    *   **分析:** 作为内部测试追踪 Issue，它聚合了大量来自 Reborn WebUI 的实际使用问题（如工具审批不持久化、设置页错误等）。该 Issue 的高关注度反映了团队对“吃自己的狗粮”（Dogfooding）流程的重视，许多今日关闭的 Issue 均源于此。

## 5. Bug 与稳定性
今日报告了多个影响用户体验和系统稳定性的 Bug，主要集中在 Reborn WebUI 和代理逻辑中：
*   **[严重] 工具审批权限未持久化 (#5243, #5283)**
    *   **描述:** 用户在对话框中点击“Approve & always allow”后，设置中的工具权限并未更新，导致后续请求仍需重复审批。
    *   **状态:** Issue #5243 已关闭，Issue #5283 仍开放，表明部分场景（如 `nearai.web_search`）可能仍有遗留问题。
*   **[中等] 代理循环陷入失败重试 (#5285, #5291)**
    *   **描述:** PR #5285 修复了代理在遇到连续相同失败调用时无法跳出循环的问题；PR #5291 修复了子代理目标主体因 512 字节安全摘要限制而被拒绝的问题。这些修复直接提升了长任务执行的稳定性。
*   **[低] UI/UX 交互缺陷 (#5282, #5211, #5208)**
    *   **描述:** “Logs”链接错误显示在输入框内（#5282，PR #5284 已修复）、新消息不自动滚动（#5211）、输入框在等待响应时冻结（#5208）。这些虽不影响核心功能，但严重影响用户体验，今日均有对应的 PR 或 Issue 跟进。
*   **[中等] 调度自动化失败 (#5276)**
    *   **描述:** 定时自动化任务因“No thread attached”错误导致 0% 成功率，需排查线程关联逻辑。

## 6. 功能请求与路线图信号
*   **Trace Commons 实例级注册 (#5280):** PR #5280 增加了客户端侧的 Trace Commons 功能，支持实例级注册和用户个人资料提交。这表明项目正致力于构建更完善的分布式追踪和贡献者管理体系，可能成为未来版本的可观测性核心组件。
*   **个人记忆与自我学习系统 (#5260, #5205):** Issue #5260 作为追踪 Issue，列出了个人记忆系统的完整路线图。PR #5205 的实现是其中的关键里程碑，信号表明“自我学习”和“语义搜索”将是近期重点发展的功能方向。
*   **REST 管理面扩展 (#5268):** 除了 WebUI，团队正在完善 REST API 以支持管理员手动授予权限，这暗示了对非 GUI 集成和企业级 API 集成的持续投入。

## 7. 用户反馈摘要
*   **痛点:** 用户对 Reborn WebUI 的**权限管理直观性**和**状态反馈**有强烈诉求。多次提到“批准但未生效”、“日志入口位置不当”、“输入框无响应”等问题，反映出当前版本在状态同步和 UI 反馈机制上存在脱节。
*   **场景:** 开发者频繁使用 CLI 和 WebUI 进行工具调试（如 `read_file` 限制、`http` 请求拒绝映射），希望获得更明确的错误信息而非通用的“driver protocol error”（Issue #5289, PR #5293）。
*   **满意度:** 对于底层性能优化（如 CAS 锁移除、批量写入）和功能模块化（内存作为扩展）表示认可，认为这些改进有助于长期稳定性。

## 8. 待处理积压
*   **[OPEN] Scheduled automation fails with "No thread attached" (#5276):** 定时任务完全失效，需优先排查线程上下文传递问题。
*   **[OPEN] Run ends with generic "driver protocol error" (#5289):** 错误信息过于笼统，阻碍了问题定位，需确保底层错误能正确透传（参考 PR #5293 的思路，但需覆盖更多场景）。
*   **[OPEN] Disabled tool may cause the assistant to invoke unrelated tools (#5197):** 工具禁用后的行为异常，可能导致意外操作，需确认代理决策逻辑是否严格尊重工具状态。
*   **[OPEN] Nightly E2E failed (#4108):** 尽管是长期 Issue，但持续的 E2E 失败表明 CI/CD 管道存在不稳定因素，需定期审视。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：** 2026-06-26
**数据来源：** GitHub (netease-youdao/LobsterAI)

## 1. 今日速览
LobsterAI 项目在 2026-06-26 呈现出**高交付效率与低噪音**的健康状态。过去24小时内，项目完成了 **7 个 Pull Request (PR)** 的合并，涵盖了渲染器优化、协作模式（Cowork）逻辑修复以及核心引擎 OpenClaw 的稳定性增强，且所有 PR 均处于已关闭/已合并状态，无遗留阻塞。值得注意的是，今日 **0 个新 Issue** 和 **0 个新 Release**，表明当前版本迭代节奏稳定，社区暂无紧急故障报告或重大新功能请求爆发，开发者正专注于底层逻辑的打磨与现有功能的微调。

## 2. 版本发布
*   **无新版本发布。**
    *   *分析：* 尽管有 7 个 PR 合并，但团队尚未触发新的 Release 流程。这可能意味着这些更改属于常规维护、Bug 修复或微小功能迭代，尚未积累到需要独立版本发布的阈值，或者下一个正式版本仍在规划中。

## 3. 项目进展
今日合并的 7 个 PR 主要集中在提升系统稳定性、UI 一致性以及异步任务处理的健壮性：

*   **OpenClaw 核心稳定性增强 (PR #2203, #2202, #2201, #2200)**
    *   **扩展预编译支持：** PR #2203 修复了本地扩展条目的预编译加载问题，确保 TypeScript 入口能被正确重写为 JS，提升了打包兼容性。
    *   **浏览器插件白名单机制：** PR #2202 将内置浏览器插件加入受管插件列表及允许白名单，确保在严格的安全策略下浏览器控制功能依然可用。
    *   **去重与同步优化：** PR #2201 解决了最终历史同步中的重复回复问题，通过复用已提交的助手片段和思维块，避免了 UI 上的冗余显示，提升了多 Agent 协作时的日志清晰度。
*   **协作模式 (Cowork) 逻辑修复 (PR #2204, #2200)**
    *   **标签解析优先权：** PR #2204 修正了块级计划标签的解析逻辑，防止内联标签泄漏导致 GLM 计划模式渲染错误，确保了“计划卡片”内容的准确性。
    *   **子代理轮询机制：** PR #2200 修复了父会话完成后子代理仍可能丢失终端事件的问题，引入了 5 分钟的窗口期轮询和延迟刷新，显著提高了长耗时任务的监控可靠性。
*   **UI/UX 细节优化 (PR #2205, #2206)**
    *   **图标主题化：** PR #2205 更新了协作模式的计划图标，采用主题感知的 SVG 组件，保持了菜单和徽章尺寸的一致性。
    *   **登录项同步：** PR #2206 增强了设置中“开机自启”状态的同步逻辑，增加了针对 Windows 历史参数变体的清理诊断日志和本地化失败消息，提升了跨平台用户体验的一致性。

**总体评价：** 项目正从“功能开发”向“体验打磨与稳定性加固”阶段过渡，代码质量与边缘情况处理能力显著提升。

## 4. 社区热点
*   **当前热度：极低。**
*   **分析：** 今日无新建 Issue，所有合并的 PR 评论数均为 `undefined` 或 0，点赞数为 0。这表明今日的代码变更多为内部逻辑修复或配置调整，未引发社区广泛的讨论或争议。维护者 liuzhq1986 和 btc69m979y-dotcom 的提交主要集中在技术实现层面，而非功能提案层面。

## 5. Bug 与稳定性
今日修复了多个潜在的稳定性问题，按影响范围排序：

1.  **[Critical/Fix] 子代理事件丢失导致状态不同步 (PR #2200)**
    *   **问题：** 父会话结束后，若子代理仍在运行，其终端输出可能无法及时反映在 UI 上。
    *   **修复：** 引入父会话完成后的持续轮询机制（最大5分钟）及延迟刷新逻辑。
    *   **状态：** ✅ 已合并 (PR #2200)
2.  **[High/Fix] 计划模式渲染异常 (PR #2204)**
    *   **问题：** 内联标签被错误解析，导致 GLM 计划模式在卡片中泄露原始标签而非展示实际计划。
    *   **修复：** 提高块级 `proposed_plan` 标签的解析优先级，并增加回归测试覆盖。
    *   **状态：** ✅ 已合并 (PR #2204)
3.  **[Medium/Fix] 重复消息显示 (PR #2201)**
    *   **问题：** 最终历史同步时，助手回复和思维块出现重复。
    *   **修复：** 优化 `sessions_yield` 后的复用逻辑，标记子代理运行的终止状态。
    *   **状态：** ✅ 已合并 (PR #2201)
4.  **[Low/Fix] 开机自启状态不同步 (PR #2206)**
    *   **问题：** 设置界面的自启状态未实时反映 OS 实际状态，且缺乏 Windows 环境下的详细错误提示。
    *   **修复：** 增加 OS 状态验证、历史参数清理及本地化错误消息。
    *   **状态：** ✅ 已合并 (PR #2206)

## 6. 功能请求与路线图信号
*   **当前无明确的新功能请求。**
*   **信号解读：** 今日的 PR 显示团队正在深化现有功能（如 OpenClaw 扩展系统、Cowork 协作流）。特别是 PR #2203 对扩展预编译的完善，暗示未来可能会有更多第三方或本地自定义扩展的接入能力，路线图可能正向“更开放的插件生态”倾斜，但目前仍处于基础架构加固期。

## 7. 用户反馈摘要
*   **无直接用户反馈。**
*   **间接洞察：** 由于今日没有新建 Issue 或公开讨论，我们无法获取实时的用户痛点。然而，PR #2206 中提到的“surface localized failure messages”（展示本地化失败消息）表明，开发团队正在响应用户对于错误信息不清晰、难以排查问题的潜在抱怨，致力于提升易用性。

## 8. 待处理积压
*   **当前积压：无。**
*   **建议：** 鉴于今日 Issues 更新为 0，建议维护者关注 GitHub Notifications 中是否有非 Issue/PR 形式的反馈（如 Discussions 板块）。同时，考虑到 PR #2206 涉及 Windows 特定逻辑，建议在后续版本中增加对 Windows 用户群体的定向调研，以验证修复效果并收集更多边缘案例。

---
**免责声明：** 本报告基于提供的 GitHub 数据自动生成，旨在提供客观的项目动态概览。

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
**数据来源：** GitHub (agentscope-ai/CoPaw)

## 1. 今日速览
过去24小时，CoPaw 社区保持高活跃度，共处理 **26 条 Issues**（15 新开/活跃，11 关闭）及 **50 条 PR**（30 待合并，20 已合并/关闭）。项目处于 Agentscope 2.0 迁移后的关键稳定期，今日重点在于修复因版本升级引发的回归问题（Regression），特别是浏览器自动化资源泄漏、前端渲染异常以及第三方模型兼容性故障。虽然无新版本发布，但大量紧急 Bug 修复 PR 的提交表明开发团队正在快速响应核心稳定性挑战。

## 2. 版本发布
*   **状态：** 无新版本发布。
*   **注意：** 基于 Issue #5542，团队正在适配 Agentscope 2.0 迁移后的 E2E 测试套件，暗示近期可能有一个针对 2.0 兼容性的补丁版本（Patch Release）以修复回归问题。

## 3. 项目进展
今日合并/关闭的 PR 主要集中在**缺陷修复**和**基础架构完善**：

*   **前端渲染修复 (PR #5538, #5444)：**
    *   解决了 Assistant 消息在新行保留上的 CSS 布局问题，修复了长消息排版错乱 (#5480)。
    *   补全了 TokenUsage 页面的空状态样式，防止布局断裂。
*   **技能与工具治理 (PR #5477, #5481)：**
    *   优化了 Skill 初始化逻辑，仅启用新技能，保留旧技能状态 (#5262)。
    *   增强了 ZIP 文件上传时的元数据错误处理，防止无效技能占用命名空间。
*   **内存与上下文管理 (PR #5540, #5321)：**
    *   重构了自动记忆系统，从 `reply_id` 跟踪转向基于 `user-turn` 的标记，提升逻辑准确性。
    *   引入了 "Scroll" 上下文管理策略，允许模型按需检索持久化存储的历史对话，而非单纯压缩。
*   **Agentscope 2.0 适配 (PR #5542)：**
    *   修复了因上游迁移导致的 E2E 测试失败，移除了 Plan Mode 相关依赖并更新了选择器。

## 4. 社区热点
以下是今日讨论最激烈或关注度最高的 Issue/PR：

*   **[Bug] 浏览器自动化导致 Chrome 进程泄漏 (Issue #2733, #5520)**
    *   **热度：** ⭐⭐⭐⭐⭐
    *   **分析：** 这是长期存在的痛点。Issue #2733 虽已关闭，但 #5520 指出在 `browser_use stop()` 后仍有 Renderer 进程残留，导致内存泄漏。这表明之前的修复不完整，是用户反馈最强烈的稳定性问题。
    *   **链接：** [Issue #2733](https://github.com/agentscope-ai/QwenPaw/issues/2733), [Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520)

*   **[Bug] MiniMax-M3 图片安全审核误判 (Issue #5505)**
    *   **热度：** ⭐⭐⭐⭐
    *   **分析：** 用户报告当 MiniMax 拒绝图片时，QwenPaw 错误地缓存了 `rejects_media=True`，导致后续合法图片请求被剥离。这影响了多模态能力的可用性，且涉及缓存逻辑的健壮性。
    *   **链接：** [Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505)

*   **[Feature] Windows 桌面 GUI 自动化 (PR #5187)**
    *   **热度：** ⭐⭐⭐⭐
    *   **分析：** 新增基于 UIA 和 Tauri 的 Windows 桌面控制工具，允许 Agent 截图、点击和拖拽。这是 Agent 自主操作能力的重要扩展，受到开发者关注。
    *   **链接：** [PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)

*   **[Question] 自定义 OpenAI 提供商 Function Calling 支持 (Issue #5345)**
    *   **热度：** ⭐⭐⭐
    *   **分析：** 用户反馈 OMLX 等自定义提供商在 QwenPaw 中无法触发工具调用，尽管 API 兼容。这反映了生态整合中的边缘案例问题。
    *   **链接：** [Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)

## 5. Bug 与稳定性
今日报告的 Bug 较多，主要集中在**兼容性**和**资源管理**：

| 严重等级 | 问题描述 | Issue ID | 关联 PR/Fix |
| :--- | :--- | :--- | :--- |
| **High** | **Chrome 进程泄漏**：`browser_use` 停止后未清理渲染进程，导致内存耗尽。 | #5520, #2733 | 需进一步修复，#2733 曾关闭但回归。 |
| **High** | **GLM 模型报错**：使用 `open-code go` 套餐中的 GLM 系列时报 `json_schema_converter.cc` 编译失败。 | #5472 | **Fixed**: [PR #5496](https://github.com/agentscope-ai/QwenPaw/pull/5496) (内联 $ref/$defs) |
| **Medium** | **Function Schema 兼容**：`type: null` 导致第三方代理（如 Gemini 路由）处理失败。 | #5543 | **Fixed**: [PR #5549](https://github.com/agentscope-ai/QwenPaw/pull/5549), [PR #5545](https://github.com/agentscope-ai/QwenPaw/pull/5545) |
| **Medium** | **前端渲染崩溃**：会话文件 >500KB 时，前端打开报错“渲染此页面时发生了意外错误”。 | #5479 | 待修复，建议增加分页或懒加载。 |
| **Medium** | **Windows 文件预览 404**：`send_file_to_user` 在 Windows 本地版返回 Not Found。 | #5508 | 待修复，涉及路径处理逻辑。 |
| **Low** | **心跳任务超时**：复杂心跳任务因硬编码 120s 超时被中断。 | #5539 | 待调整超时配置。 |
| **Low** | **模型统计错误**：设置页显示在线提供商数量多于实际配置数量。 | #5512 | **Fixed**: [PR #5537](https://github.com/agentscope-ai/QwenPaw/pull/5537) |

## 6. 功能请求与路线图信号
*   **Agentscope 2.0 动态切换 (Issue #5527)：** 用户询问何时支持模型动态切换（如 A 模型限流时自动切换至 B 模型）。结合 PR #5542 的适配工作，这可能成为 2.0 稳定版的核心特性之一。
*   **Plugin Tool 获取 SessionId (Issue #5547)：** 开发者需要在插件中获取当前 `session_id` 以实现多租户权限管控。这是一个明确的企业级功能需求。
*   **Discord 附件本地化 (Issue #904)：** 长期未解决的 Feature Request，要求 Discord 渠道与其他渠道保持一致，将附件下载到本地。
*   **数据分析和 BI 技能 (PR #4622)：** 贡献了包含 12 个 BI 技能的 DataPaw 插件，显示出用户对垂直领域 Agent 能力的强烈需求。

## 7. 用户反馈摘要
*   **痛点：**
    *   **资源泄漏焦虑：** 多次提到 Chrome 进程和 Helper 进程无法彻底关闭，严重影响长时间运行的 Agent 任务。
    *   **Windows 体验不一致：** Windows 本地用户在文件预览、路径解析和 Tauri 集成上遇到较多 404 或渲染错误。
    *   **大文件性能瓶颈：** 随着对话积累，前端加载大型会话文件时卡顿甚至崩溃，缺乏渐进式加载机制。
*   **满意点：**
    *   **快速响应：** 对于 Schema 兼容性问题（GLM, MiniMax），社区和核心开发者提供了较快的 PR 修复。
    *   **功能扩展：** 新的 `computer_use` 工具和 `scroll` 上下文管理策略被认为是对 Agent 自主性和记忆能力的重大增强。

## 8. 待处理积压
以下 Issue 需要维护者优先关注，以避免影响用户体验：

1.  **[Bug] 浏览器进程彻底清理 (Issue #5520)**
    *   **状态：** Open
    *   **理由：** 内存泄漏是生产环境的大忌，且此前修复已被证实不完全。
    *   **链接：** [Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520)

2.  **[Bug] 大会话前端崩溃 (Issue #5479)**
    *   **状态：** Open
    *   **理由：** 影响长期使用者的体验，且涉及前端性能优化，非简单 Bug。
    *   **链接：** [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)

3.  **[Bug] Windows 文件预览 404 (Issue #5508)**
    *   **状态：** Closed (但摘要中提到影响范围广泛，需确认是否彻底解决)
    *   **理由：** 如果 PR #5457 仅限制了文件大小而未修复路径逻辑，此问题仍需关注。
    *   **链接：** [Issue #5508](https://github.com/agentscope-ai/QwenPaw/issues/5508)

4.  **[Enhancement] 自定义提供商 Function Calling 支持 (Issue #5345)**
    *   **状态：** Closed (但摘要暗示问题可能未根本解决，或需更广泛测试)
    *   **理由：** 随着更多用户接入自定义 Ollama/OMLX 服务，兼容性至关重要。
    *   **链接：** [Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)

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
ZeroClaw 在 v0.8.2 发布后保持高活跃度，过去24小时新增 Issue 27 条，PR 50 条，其中 45 条处于待合并状态，显示开发节奏紧凑且协作高效。社区焦点集中在 **A2A 代理发现**、**技能（Skills）系统扩展** 以及 **原生工具调用的稳定性修复**。安全方面，供应链签名（SLSA）和代理委派权限绕过问题引发高层级讨论，表明项目在追求功能扩展的同时，正强化其安全基座。整体项目健康度高，但需关注 v0.8.2 发布后迅速暴露的多项运行时 Bug。

## 2. 版本发布
### v0.8.2 正式发布
*   **核心更新：**
    *   **A2A 代理发现：** 引入新的代理间互操作性接口，支持代理自动发现与通信。
    *   **技能系统增强：** 支持用户配置的额外注册表及类型化的斜杠命令选项，丰富了技能生态。
    *   **安全加固：** 针对插件、通道及代理委派机制进行了底层安全策略收紧。
*   **注意事项：**
    *   本次更新涉及架构层面的变动，特别是代理委派（Delegate）和工具调用机制，建议用户仔细审查现有自定义代理的配置兼容性。
    *   二进制文件体积略有增长（超过 50MB），CI 限制已相应调整至 64MB，不影响正常运行但占用了更多磁盘空间。
    *   相关链接：[ZeroClaw v0.8.2 Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.2)

## 3. 项目进展
今日主要进展体现在基础设施完善、可观测性提升及文档同步上：
*   **可观测性与日志优化：**
    *   PR #8307 引入了旋转日志持久化模式，填补了滚动日志（丢弃旧事件）和全量日志（无限增长）之间的空白，提升了生产环境运维能力。
    *   PR #8146 修复了 CLI 单次运行模式下遥测数据丢失的问题，确保 OpenTelemetry 后端能正确接收追踪信息。
*   **网关与交互体验：**
    *   PR #8325 添加了局域网（LAN）对等节点发现提示，支持通过 mDNS 配置进行本地网络代理发现，增强了多节点部署的便利性。
    *   PR #8173 实现了 Web Dashboard 内的应用内升级功能，支持从检测到重启的全流程自动化。
*   **CI/CD 与维护：**
    *   PR #8342 将二进制大小硬限制从 50MB 提升至 64MB，以适应 v0.8.2 的功能增长。
    *   PR #8344 修复了 Docs Pages 部署因标签检查时机不当导致的失败问题。
    *   PR #8332 同步了 v0.8.2 的国际化翻译资源。

## 4. 社区热点
以下是今日讨论最激烈或具有战略意义的议题：

*   **[RFC] 供应链签名与 SLSA 溯源 (Issue #8177)**
    *   **热度：** 高优先级，涉及安全架构。
    *   **内容：** 提议引入硬件 PGP 密钥、多方签名及 SLSA 标准，以增强容器镜像和发布二进制文件的信任链。
    *   **链接：** [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
    *   **分析：** 随着 v0.8.2 的发布和安全问题的暴露，社区对构建系统的透明度和安全性提出了更高要求，这是向企业级应用迈进的关键一步。

*   **[Tracker] v0.9.0 认证、安全与网关边界 (Issue #7432)**
    *   **热度：** 高，作为下一阶段路线图的核心协调点。
    *   **内容：** 汇总了 v0.9.0 在身份验证、安全加固、网关边界及 A2A 互操作性方面的 116 个开放项。
    *   **链接：** [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)
    *   **分析：** 显示维护团队正在系统化地规划重大版本迭代，重点在于解决当前的安全债务和架构扩展性问题。

*   **[Bug] 代理委派绕过父级工具白名单 (Issue #8279)**
    *   **热度：** 极高风险，已标记为 S0 级别。
    *   **内容：** 子代理可以调用父代理策略中被禁止的工具，存在严重的数据泄露或滥用风险。
    *   **链接：** [Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)
    *   **分析：** 直接关联 v0.8.2 的安全强化主题，此漏洞的发现迫使团队优先处理代理隔离机制的安全性。

*   **[RFC] 通过外部集成精简 ZeroClaw 核心 (Issue #6165)**
    *   **热度：** 架构讨论活跃。
    *   **内容：** 建议移除核心代码中的特定集成（如 Jira, GitHub），转而通过 Skills 和 MCP 协议进行外部交互，以保持核心轻量。
    *   **链接：** [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
    *   **分析：** 反映了用户对模块化和高定制化的需求，符合当前 AI Agent 框架去中心化集成的趋势。

## 5. Bug 与稳定性
今日报告了多个影响稳定性的关键 Bug，主要集中在运行时、工具调用和渠道集成：

1.  **MCP stdio 子进程泄漏 (Issue #5903)**
    *   **严重性：** 高。启用心跳时，每个心跳周期都会产生一个孤儿 MCP 进程，导致长期运行的 Daemon 资源耗尽。
    *   **状态：** 待修复。
    *   **链接：** [Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)

2.  **原生工具调用中图像标记处理错误 (Issue #8327)**
    *   **严重性：** 高。使用 OpenAI 兼容提供商时，工具结果中的 `[IMAGE:data:...]` 被当作纯文本发送，导致 Token 激增且模型无法正确解析图像。
    *   **状态：** 已有修复 PR #8339 正在审查中。
    *   **链接：** [Issue #8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)

3.  **代理委派权限绕过 (Issue #8279)**
    *   **严重性：** 致命 (S0)。子代理可突破父代理的工具限制。
    *   **状态：** 进行中。
    *   **链接：** [Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)

4.  **Groq 提供商多轮工具循环失败 (Issue #8219)**
    *   **严重性：** 高。`gpt-oss-120b` 在 Groq 上进行多轮工具调用时，第二轮请求因 `tool_call_id` 序列化 null 或推理内容被拒而失败。
    *   **状态：** 进行中。
    *   **链接：** [Issue #8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219)

5.  **Telegram 多图片请求拆分 (Issue #5514 & #7873)**
    *   **严重性：** 中。Telegram 上的多张图片被拆分为多个独立请求，而非合并为一个上下文，导致 Agent 输出冗余。
    *   **状态：** Issue #7873 已关闭，表明修复可能已在其他 PR 中合并或计划中。
    *   **链接：** [Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)

6.  **响应缓存键包含时间戳导致失效 (Issue #8320)**
    *   **严重性：** 中。缓存键中包含秒级时间戳，导致缓存命中率极低且测试不稳定。
    *   **状态：** 已有修复 PR #8323。
    *   **链接：** [Issue #8320](https://github.com/zeroclaw-labs/zeroclaw/issues/8320)

## 6. 功能请求与路线图信号
*   **独立委托模式 (Issue #8238):** 用户请求为专家代理增加独立的委托模式，使其能在自身策略下运行，而非仅继承父级策略。这暗示了未来多代理编排将更加灵活。
*   **SOP 控制平面完成 (Issue #8288):** 跟踪器显示 SOP（标准操作程序）能力已达到 5/5，意味着自动化工作流引擎的核心功能已基本就绪，即将进入全面推广阶段。
*   **A2A 代理发现 (v0.8.2 特性):** 虽然已在 v0.8.2 发布，但后续 Issue #3566 和 #7218 的持续活跃表明，A2A 协议的具体实现细节和互操作性标准仍在细化中，预计将在 v0.9.0 中进一步完善。

## 7. 用户反馈摘要
*   **痛点：**
    *   **配置复杂性：** 用户反映 `zeroclaw models set` 命令行为异常，路由到医生模式而非保存配置 (Issue #7087)，增加了上手难度。
    *   **提供商兼容性：** Kimi Code 端点失效 (Issue #8154) 和 Groq 的多轮工具调用失败 (Issue #8219) 表明第三方提供商的适配层需要更严格的回归测试。
    *   **技能安装路径问题：** `skills install` 指向的数据目录未被多代理运行时加载 (Issue #8334)，导致技能安装后无法使用，这是一个明显的回归 Bug。
*   **正面反馈：**
    *   用户认可 v0.8.2 在安全和互操作性方面的改进方向。
    *   Web Dashboard 内的升级功能 (PR #8173) 受到运维人员的欢迎，简化了集群管理。

## 8. 待处理积压
*   **长尾 Issue：**
    *   **Issue #6165:** 精简核心架构的 RFC 自 4 月创建以来一直开放，需要架构师尽快给出明确的技术路线决策。
    *   **Issue #7412:** `web_fetch` 私有主机允许列表的安全缺陷自 6 月初报告以来仍未完全修复，存在潜在安全风险。
*   **维护者注意：**
    *   目前有 11 个 Issue 标记为 `status:in-progress` 或 `needs-maintainer-review`，包括关键的安全绕过问题 (Issue #8279)。建议维护者优先审查这些高优先级 PR，以防止 v0.8.2 用户遭遇严重故障。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*