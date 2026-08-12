# OpenClaw 生态日报 2026-08-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-04 01:26 UTC

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



# 📊 OpenClaw 项目动态日报

**日期：2026-08-04** | 数据周期：过去24小时

---

## 1. 今日速览

OpenClaw 今日保持**高活跃度**，24小时内共产生500条 Issues 更新（新开/活跃469，关闭31）和500条 PR 更新（待合并326，已合并/关闭174），发布2个新版本（v2026.7.1-2 / v2026.7.1-1）。项目整体呈**健康的迭代节奏**，bug 修复与功能演进并行推进。社区对 DeepSeek 模型静默失败、子代理结果丢失、会话状态管理等核心稳定性问题高度关注，多个 P1 级 Issue 仍待维护者最终裁决。

---

## 2. 版本发布

### v2026.7.1-2（2026-08-04）
**修复内容：**
- **npm 插件更新兼容性：** 接受来自新版 npm 客户端的 `singleton-array` 元数据，确保官方追踪插件可正常安装和更新至修正版本。（#108336）

### v2026.7.1-1
**修复内容：**
- **Codex 进度回复处理：** 修复 GPT/Codex 在推送进度消息后提前终止的问题，确保 App Server 能持续运行直至获得最终权威回复。（#106961, #108487）感谢 @joshavant
- **Memory Core 启动修复：** 恢复派生的 legacy-index 和 ca（摘要截断）

> ⚠️ **无已知破坏性变更。** 建议所有用户升级至 v2026.7.1-2 以获取最新修复。

---

## 3. 项目进展

### 今日重点合并/推进的 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#118409](https://github.com/openclaw/openclaw/pull/118409) | 🔧 fix | 沙箱网关锁隔离修复 — 解决 `OPENCLAW_STATE_DIR` 模式下锁文件泄漏至共享临时目录的问题，提升容器化部署隔离性 |
| [#119045](https://github.com/openclaw/openclaw/pull/119045) | 🔧 fix | xAI 实时语音会话修复 — 停止播放确认卡住时的实时会话，防止内存无限增长（关联 #116201） |
| [#116604](https://github.com/openclaw/openclaw/pull/116604) | 🔧 fix | Codex 回答丢失修复 — 修复尾随 NO_REPLY 事件覆盖已有真实答案的问题（关联 #112468） |
| [#118954](https://github.com/openclaw/openclaw/pull/118954) | 🔧 fix | Custodian 向导状态保留 — 修复页面重载后待处理控制丢失的问题 |
| [#116302](https://github.com/openclaw/openclaw/pull/116302) | 🔧 fix | SecretRef 密钥检测修复 — 修复文件类型密钥提供者被误报为"无 API key"的问题（关联 #115062） |
| [#116677](https://github.com/openclaw/openclaw/pull/116677) | 🔧 fix | 备份中断恢复 — 回收 `backup create` 被硬杀后遗留的临时文件（关联 #95582） |
| [#113462](https://github.com/openclaw/openclaw/pull/113462) | 🔧 fix | Moonshot/Kimi MCP 工具 schema 兼容修复 |
| [#118657](https://github.com/openclaw/openclaw/pull/118657) | 🔧 fix | Google 标准 API Key 网页搜索支持修复 |
| [#118601](https://github.com/openclaw/openclaw/pull/118601) | 🔧 fix | 插件 hook 注册类型警告 — 防止遗留 API 注册静默失效 |

**项目健康度评估：** 174 条 PR 今日已关闭/合并，其中多项直接对应高热度 P1 稳定性问题，维护团队响应积极，整体迭代方向聚焦于**会话可靠性**与**多模型兼容性**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 状态 | 核心议题 |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 100 | ✅ 已关闭 | **DeepSeek v4 Flash 静默回复失败** — 模型不生成回复且仅返回通用 fallback 消息，影响 Telegram 群组场景 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 51 | 📂 开放 | **实时语音会话资源泄漏** — 未限制 provider/consult 状态边界，低速/突发场景下累积大量过时帧 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 24 | 📂 开放 | **记忆信任来源标记** — 按来源（用户命令/网页抓取/第三方技能）对记忆条目打信任标签，防御记忆投毒攻击 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 23 | 📂 开放 | **子代理完成结果静默丢失** — 超时/排空/孤儿清理后结果无重试、无通知、无自动重启 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | 📂 开放 | **统一文件名编码工具** — 支持多编码 Content-Disposition 处理（Shift-JIS/EUC-KR/GB18030 等） |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | 17 | 📂 开放 | **Codex 回退 Telegram 会话反复超时** — 2026.5.27 版本回归，`turn/completed` 无法到达 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 12 | 📂 开放 | **A2A sessions_send 重复消息** — Agent B 回调 Agent A 导致请求方渠道消息重复 |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | 11 | 📂 开放 | **Codex 长回复静默截断** — 无 aborted 信号，`stopReason` 为 null 但在 ~1000-1100 字符处截断 |

**热点分析：** 社区最核心的痛点集中在**消息丢失**和**会话状态管理**两大领域。DeepSeek 和 Codex 相关的静默失败问题引发大量讨论，反映出用户对这些生产级模型集成的可靠性期望较高。记忆安全和子代理编排稳定性也是持续关注的长期议题。

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（P0-P1）

| Issue | 级别 | 描述 | 关联 PR |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | P1 | DeepSeek v4 Flash 静默失败，不生成回复 | ✅ 已关闭 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | P1 | 实时语音会话资源无限累积 | 🔧 [#119045](https://github.com/openclaw/openclaw/pull/119045) |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1 | 子代理完成结果静默丢失（无重试/通知） | 📋 待修复 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | P1 | Codex-backed 会话反复超时，`turn/completed` 无法到达 | 📋 待修复 |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | P1 | Codex 长回复静默截断（无 abort 信号） | 📋 待修复 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | P1 | 子代理完成投递在 direct-announce 超时/排空/孤儿清理下丢失 | 📋 待修复 |
| [#112906](https://github.com/openclaw/openclaw/issues/112906) | P2 | v2026.7.1 回归：`\`\`` 折叠渲染失效 | 📋 待修复 |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | P1 | beta.5 `/new` 复用稳定会话 ID，无法恢复已淘汰的 Codex 绑定墓碑 | 📋 待修复 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | P1 | 容器重启复用 PID 后 usage-cost 刷新锁永久冻结 | 📋 待修复 |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | P2 | 所有持久化会话上下文被硬限 128k，忽略模型配置 | 📋 待修复 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | P1 | `chat.send` 在模型完成后因 stale `expectedLeafEntryId` 被拒绝 | 📋 待修复 |
| [#115037](https://github.com/openclaw/openclaw/issues/115037) | P1 | 中断恢复后合成"No response requested"触发模型降级，用户轮次被静默服务 | 📋 待修复 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | P1 | Cron 任务在 LLM API 持续 500 时未快速失败，耗尽 timeout 窗口 | 📋 待修复 |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | P0 | service-env 生成器双重引号导致 AWS_REGION 主机名损坏 | 📋 待修复 |

### 🟡 中等 Bug（P2-P3）

| Issue | 级别 | 描述 |
|---|---|---|
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | P1 | ACP 父会话在 yield 等待子完成时卡住，需手动刷新 |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | P1 | 长对话后 `write`/`exec` 工具参数静默丢失 |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | P2 | Windows 计划任务网关无法保持运行 |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | P2 | 记忆管理行为不一致（回归） |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | P2 | `OPENCLAW_HOME=~/.openclaw` 产生嵌套目录 `~/.openclaw/.openclaw` |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | P2 | 备份 CLI 不支持 .gitignore 风格排除模式 |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | P1 | `memory_search corpus=all` 超时但单独 corpus 成功 |
| [#57256](https://github.com/openclaw/openclaw/issues/57256) | P2 | `openclaw status` 误报 mem0 记忆不可用 |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | P1 | Discord 路由/mention-gating 回归 |
| [#46031](https://github.com/openclaw/openclaw/issues/46031) | P2 | `auth.order` 对 GitHub Copilot 提供者被忽略 |
| [#45573](https://github.com/openclaw/openclaw/issues/45573) | P1 | 群聊会话未持久化（166+ 消息仅生成 1 个会话） |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | P1 | Session lane 饥饿：followup drain 垄断车道阻塞入站分发 |
| [#44134](https://github.com/openclaw/openclaw/issues/44134) | P1 | Google Antigravity 频繁 Tool Schema 重载触发反滥用封禁 |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) | P1 | 402 计费错误导致无限重试死亡螺旋（无退避） | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求描述 | 路线图信号 |
|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆信任来源标记 — 按来源可信度标记记忆条目 | 🟢 安全功能，高社区呼声 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 统一文件名编码工具 — 多编码 Content-Disposition 处理 | 🟢 多语言国际化支持 |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | 备份 CLI 支持 .gitignore 排除模式 | 🟡 实用功能 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | 支持 YAML 作为配置文件格式 | 🟡 低优先级，JSON5 已稳定 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX 渲染 | 🟡 内容展示增强 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding 向导强制包含记忆/Embedding 配置 | 🟢 用户体验优化 |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | 按失败类别 Provider 故障转移 — 隔离认证故障 provider | 🟢 可靠性增强 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | Webchat 支持自托管 STT/TTS（绕过浏览器 Speech API） | 🟡 隐私/部署灵活性 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 在 session_status 中暴露解析后的后端模型 | 🟡 可观测性增强 |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | `session.resetPrompt` 可配置会话启动消息 | 🟡 自定义能力 |

**PR 中的功能信号：**
- [#118623](https://github.com/openclaw/openclaw/pull/118623) — 批量工具搜索查询支持
- [#119040](https://github.com/openclaw/openclaw/pull/119040) — Cron wake-only payload
- [#118977](https://github.com/openclaw/openclaw/pull/118977) — 实时转录 WebSocket 协议支持
- [#118953](https://github.com/openclaw/openclaw/pull/118953) — Custodian 设置一键取消
- [#101276](https://github.com/openclaw/openclaw/pull/101276) — exec 审批 denylist 功能
- [#81185](https://github.com/openclaw/openclaw/pull/81185) — exec 工具结果载荷脱敏

---

## 7. 用户反馈摘要

### 🔴 核心痛点

1. **消息静

---

## 横向生态对比



# AI 智能体开源生态横向对比分析报告
**日期：2026-08-04 | 分析师：Agnes (Sapiens AI)**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态今日呈现**高活跃分化**态势：OpenClaw、Hermes Agent、IronClaw、CoPaw 和 ZeroClaw 维持高强度迭代，而 PicoClaw、NanoClaw、LobsterAI 等进入功能打磨期。生态整体从"功能快速扩张"转向**会话可靠性、多模型兼容性、审批安全与生产部署稳定性**的精细化竞争。OpenClaw 凭借 500 条/日变更量保持核心参照地位，社区痛点高度趋同（消息丢失、静默失败、子代理编排），反映行业共性挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PR | Release | 健康度 | 核心方向 |
|------|--------|-----|---------|--------|----------|
| **OpenClaw** | 500 | 500 | v2026.7.1-2, v2026.7.1-1 | 🟢 高 | 会话可靠性、多模型兼容 |
| **IronClaw** | 45 | 50 | 无 | 🟢 高 | 架构重构 Wave 2/3、E2E 测试 |
| **Hermes Agent** | 50 | 50 | v0.20.0 | 🟡 中 | Telegram 网关、Windows 兼容 |
| **CoPaw** | 23 | 50 | v2.1.0-beta.1 | 🟢 高 | 桌面稳定性、agent 编排 API |
| **ZeroClaw** | 50 | 50 | 无 | 🟢 高 | 安全审批、多渠道路由 |
| **NanoBot** | 2 | 36 | 无 | 🟢 高 | Provider 扩展、WebUI 优化 |
| **NullClaw** | 1 | 5 | 无 | 🟡 中 | 流式 Tool Call、传输安全 |
| **PicoClaw** | 8 | 5 | 无 | 🟡 中 | 生产部署、多语言本地化 |
| **NanoClaw** | 1 | 10 | 无 | 🟡 中 | 会话持久化、iMessage 接入 |
| **LobsterAI** | 2 | 11 | 无 | 🟡 中 | 用户体验、模型兼容性 |
| **Moltis** | 0 | 1 | 无 | 🟢 平稳 | MCP 服务器治理 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |

---

## 3. OpenClaw 在生态中的定位

**规模优势**：OpenClaw 今日 500 条 Issue + 500 条 PR，是生态中变更量最高的项目，社区讨论密度（如 #116277 达 100 条评论）反映其用户基数与问题覆盖广度领先。

**技术路线差异**：
- 相比 IronClaw（Rust 架构、Wave 重构）、Hermes Agent（NousResearch 背景、Telegram 深度集成）、CoPaw（阿里系、桌面端优先），OpenClaw 走**跨平台多渠道 + 多模型网关**路线，聚焦会话状态管理与模型适配层稳定性
- 相比 ZeroClaw（安全审批优先）、NullClaw（流式协议完善），OpenClaw 更强调**生产级可靠性**（Codex/DeeptSeek 集成修复）
- 相比 NanoBot/Moltis（轻量级/MCP 专注），OpenClaw 是**功能最全面**的通用智能体框架

**社区规模**：650+ contributors（Hermes v0.20.0 数据）、高 Issue 评论数，表明 OpenClaw 已建立生态级社区网络效应。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **消息/会话可靠性** | OpenClaw、Hermes、CoPaw、NanoBot | 消息静默丢失、超时后结果丢失、会话状态管理、重复消息（#44925, #6614, #5235） |
| **多模型/Provider 兼容性** | OpenClaw、NanoBot、Hermes、LobsterAI | DeepSeek/Codex 静默失败、Opus 5 参数弃用、Kimi2.5 重复回复、Gemini unsigned tool calls |
| **审批与安全** | ZeroClaw、OpenClaw、NanoClaw | 多渠道审批授权、审计链完整性、SSRF 防护、密钥泄漏 |
| **流式协议完善** | NullClaw、OpenClaw、CoPaw | 流式 Tool Call 结构化 delta、SSE keep_alive、流式状态闪烁 |
| **生产部署稳定性** | PicoClaw、Hermes、ZeroClaw | systemd 生命周期、容器化锁隔离、超时降级机制、Agent Loop 容错 |
| **可观测性** | ZeroClaw、CoPaw、OpenClaw | OTel trace 关联、session_status 暴露模型、结构化事件日志 |
| **跨会话/多 Agent 编排** | OpenClaw、CoPaw、NanoBot | 子代理结果投递、跨会话搜索、Agent 发现与调用引导 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
|------|----------|----------|----------|
| **OpenClaw** | 全场景通用智能体、多模型网关 | 企业/开发者、多模型需求用户 | TypeScript/Node.js、插件系统、多渠道路由 |
| **IronClaw** | 架构重构、可扩展性、测试平台 | 核心贡献者、架构研究者 | Rust、Wasm 插件、WIT 扩展系统 |
| **Hermes Agent** | Telegram/Signal 深度集成、技能系统 | 社交渠道优先用户、NousResearch 社区 | TypeScript、技能索引、profile 隔离 |
| **CoPaw** | 桌面端体验、多 Agent 协作、阿里生态 | 中国用户、桌面优先场景 | Electron/WebView2、Python 后端、Qwen 集成 |
| **ZeroClaw** | 安全审批、审计追踪、协议治理 | 安全敏感部署、企业级用户 | TypeScript、多渠道审批链、RFC 治理 |
| **NanoBot** | 轻量级、多 Provider 快速适配 | 个人开发者、快速集成需求 | TypeScript、Provider 抽象层 |
| **PicoClaw** | 生产部署友好、多语言本地化 | 自托管用户、国际化场景 | TypeScript、路由上下文管理 |
| **NullClaw** | 流式协议、传输安全 | 低延迟 Agent 场景、代理部署 | TypeScript、curl 传输锁定 |
| **LobsterAI** | 网易生态、营销活动、桌面客户端 | 网易内部用户、中国市场 | Electron、内置营销功能 |
| **Moltis** | MCP 服务器治理、仓库级管理 | MCP 生态参与者、企业治理 | TypeScript、托管仓库 bundles |

---

## 6. 社区热度与成熟度

### 🔥 快速迭代阶段（高活跃度、新功能密集）
- **OpenClaw**：500 条/日，v2026.7.1-2 发布，P1 Bug 集中修复，迭代节奏健康
- **IronClaw**：95 条/日，Wave 2/3 重构深水区，测试覆盖恢复中
- **CoPaw**：73 条/日，v2.1.0-beta.1 冲刺，桌面稳定性攻坚
- **ZeroClaw**：100 条/日，安全审批 RFC 推进，v0.9.0 架构明确

### 🟡 质量巩固阶段（中等活跃度、修复主导）
- **Hermes Agent**：100 条/日但 v0.20.0 回归问题集中（Telegram 挂起、Windows 兼容），需技术债务清理
- **NanoBot**：38 条/日，修复类 PR 占 60%，Provider 扩展与体验优化并重
- **NullClaw**：6 条/日，流式协议补齐后进入功能打磨

### 📉 平稳/低频阶段
- **PicoClaw**：13 条/日，生产部署友好方向明确
- **NanoClaw**：10 条/日，安全加固周期
- **LobsterAI**：13 条/日，网易内部迭代为主
- **Moltis**：1 条/日，MCP 治理专注期

### ⚪ 无活动
- **TinyClaw**、**ZeptoClaw**

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **消息丢失成为行业共性痛点** | OpenClaw #44925/#116277、CoPaw #6614、NanoBot #5235 | 会话状态管理、超时重试、结果投递是生产级 Agent 的基础能力，需优先保障 |
| **多模型兼容性维护成本上升** | DeepSeek/Codex/Opus5/Kimi2.5 问题横跨 5+ 项目 | 建议建立模型兼容性测试矩阵，抽象 Provider 适配层，降低新模型接入成本 |
| **审批与安全成为企业级门槛** | ZeroClaw #9574/#9472、OpenClaw SecretRef 修复 | 多渠道审批授权、审计链完整性、SSRF 防护是生产部署必备能力 |
| **流式协议标准化需求增强** | NullClaw #964/#965、OpenClaw Codex 进度修复、CoPaw SSE 问题 | 结构化 Tool Call delta、SSE 状态管理需关注 OpenAI/Anthropic 协议演进 |
| **多 Agent 编排进入实用阶段** | CoPaw spawn_subagent 修复、OpenClaw 子代理结果丢失、NanoBot 跨会话搜索 | Agent 间通信协议（A2A）、结果投递可靠性、会话引用机制是下一阶段竞争点 |
| **桌面端稳定性成为体验瓶颈** | CoPaw WebView2 崩溃、Hermes Windows 兼容、ZeroClaw macOS 窗口消失 | Electron/WebView2/Tauri 生态的内存管理、进程隔离、崩溃恢复需专项投入 |
| **可观测性从可选变刚需** | ZeroClaw OTel trace、CoPaw session_status 暴露、OpenClaw 可观测性请求 | 结构化日志、trace 关联、metrics 暴露应纳入核心架构设计 |
| **架构重构与功能迭代并行** | IronClaw Wave 2/3、ZeroClaw v0.9.0 RFC、OpenClaw 插件系统 | 大型重构需配套测试平台（如 IronClaw Hermetic Testing），避免回归累积 |

---

**总结**：2026 年 8 月个人 AI 助手开源生态进入**可靠性竞赛**阶段。OpenClaw 以规模优势保持参照地位，IronClaw/Hermes/CoPaw/ZeroClaw 在各细分方向形成差异化竞争。消息丢失、多模型兼容、审批安全、流式协议是跨项目共性挑战，建议开发者优先关注会话状态管理与 Provider 适配层抽象，同时重视可观测性与多 Agent 编排能力的建设。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报
**日期：2026-08-04** | 数据来源：github.com/HKUDS/nanobot

---

## 1. 今日速览

过去24小时 NanoBot 项目保持**高活跃度**，共处理 PR 36 条（已合并/关闭 25 条，待合并 11 条），Issue 更新 2 条。开发重心集中在 **Mattermost 频道增强、WebUI 体验优化、Provider 兼容性修复**三大方向。无新版本发布，但代码库持续迭代，整体健康度良好，Bug 修复节奏稳定。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并的重要 PR 体现了项目向**多平台适配**和**稳定性增强**方向推进：

| PR | 作者 | 类型 | 摘要 |
|---|---|---|---|
| [#5232](https://github.com/HKUDS/nanobot/pull/5232) | goodtiding5 | feat | Mattermost 支持线程与频道分离的 groupPolicy 配置 |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | arcdrake22 | fix | 修复 DeepSeek 推理内容通过 OpenAI Responses API 时的序列化错误 |
| [#5227](https://github.com/HKUDS/nanobot/pull/5227) | chengyongru | fix | 完成 WebUI 国际化审计，修正中文字体术语 |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) | Mieluoxxx | feat | OpenAI Codex 支持 OAuth 与自定义 Responses 双模式 |
| [#5228](https://github.com/HKUDS/nanobot/pull/5228) | chengyongru | fix | 修复本地触发器消息在 WebUI 显示异常 |
| [#5229](https://github.com/HKUDS/nanobot/pull/5229) | chengyongru | fix | 修复 IME 输入期间线程滚动不稳定问题 |
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | MVS-source | feat | 新增 Eden AI 作为 OpenAI 兼容网关 Provider |
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | arcdrake22 | fix | 修复 Gateway 停止时异步子进程资源未确定性释放问题 |

**推进评估**：今日代码合入以**修复类 PR 为主**（约 60%），表明项目进入稳定性加固阶段。新增 Provider（Eden AI、MST）和跨会话搜索功能为下一步版本积累功能储备。

---

## 4. 社区热点

### 🔥 活跃 Issue
- **[Issue #5235](https://github.com/HKUDS/nanobot/issues/5235)** — `Anthropic: Opus 5 configuration by Nanobot always rejected on the API`
  - **诉求**：Opus 5 已于 2026-07-24 发布，但其温度参数（`temperature`）已被完全弃用，而 `omit_temperature` 的排除列表仍不包含 `"opus-5"`，导致每次请求均携带无效参数。
  - **分析**：用户反馈直接关联模型兼容性，属于 P1 级别问题。当前列表仅覆盖 opus-4 系列和 sonnet-5，需补充 opus-5 及 future model。

### 📢 活跃 PR（待合并）
- **[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)** — `feat(agent): integrate mst-python as a metasearch provider`
  - **诉求**：通过 RRF（Reciprocal Rank Fusion）聚合多引擎搜索结果，提升搜索覆盖广度。
  - **分析**：响应多源搜索需求，优先级 P1，预计纳入近期版本。

- **[PR #5211](https://github.com/HKUDS/nanobot/pull/5211)** — `feat(session): add cross-session search and mentions`
  - **诉求**：允许 WebUI 用户在 `@` 提及面板中引用其他会话记录。
  - **分析**：跨会话知识复用功能，用户粘性增强，优先级待评估。

---

## 5. Bug 与稳定性

| 严重级别 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **P1** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 temperature 参数未被忽略，API 请求失败 | 🟡 Open |
| 🟠 **P1** | [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Gemini 路由时历史中的 unsigned tool calls 导致 400 错误 | 🟡 Open |
| 🟢 **P1** | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | DeepSeek 推理内容序列化错误 | ✅ Closed |
| 🟢 **P1** | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Gateway 停止时 asyncio 资源泄漏 | ✅ Closed |
| 🟡 **P2** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram fenced code 语言标签含特殊字符时损坏 | 🟡 Open |
| 🟢 **P2** | [#5221](https://github.com/HKUDS/nanobot/pull/5221) | history.jsonl 尾读 UTF-8 校验不严 | ✅ Closed |
| 🟢 **P2** | [#5229](https://github.com/HKUDS/nanobot/pull/5229) | IME 输入时 WebUI 线程滚动跳跃 | ✅ Closed |

**稳定性评估**：今日关闭 4 个 P1 级 Bug，修复率较高。剩余 Open 的 P1 Issue 涉及模型兼容性和跨 Provider 路由，需尽快响应。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 PR | 优先级 | 纳入可能性 |
|---|---|---|---|
| 新增 MST 元搜索引擎 Provider | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | P1 | ⭐⭐⭐⭐ 高 |
| Mattermost 线程策略分离 | [#5233](https://github.com/HKUDS/nanobot/pull/5233) | P2 | ⭐⭐⭐ 中高 |
| 跨会话搜索与引用 | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | — | ⭐⭐⭐ 中 |
| Eden AI 网关支持 | [#4861](https://github.com/HKUDS/nanobot/pull/4861) | P2 | ⭐⭐⭐ 已合并 |
| ModelScope 文档完善 | [#5038](https://github.com/HKUDS/nanobot/pull/5038) | P2 | ⭐⭐ 已合并 |

**路线图判断**：项目正向**多 Provider 扩展**和**WebUI 体验精细化**双轨推进。MST 搜索和跨会话功能可能纳入下一版本；Mattermost 增强预计随 v2.x 发布。

---

## 7. 用户反馈摘要

- **模型兼容痛点**：Opus 5 发布后温度参数问题暴露，用户期望项目能及时跟进 Anthropic 模型变更。
- **多平台适配需求**：Mattermost、Telegram、Eden AI 等第三方集成请求持续增加，反映用户场景多元化。
- **WebUI 体验细节**：IME 输入稳定性、移动端键盘、国际化术语等细节问题被高频反馈，说明用户对 WebUI 质量有较高期待。
- **跨会话能力**：用户希望能在不同对话间建立引用关系，提升知识复用效率。

---

## 8. 待处理积压

| Issue/PR | 类型 | 状态 | 建议 |
|---|---|---|---|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Bug (P1) | Open | 紧急更新 `omit_temperature` 列表，补充 `"opus-5"` |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Fix (P1) | Open | 待合并，修复 Gemini unsigned tool calls 问题 |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Fix (P2) | Open | 待合并，修复 Telegram fenced code 语言标签 |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | Feat | Open | 跨会话搜索功能，建议加速 review |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Feat (P2) | Open | Mattermost 增强，与 #5232 类似但保留 Open 状态 |

---

**总结**：NanoBot 项目今日保持高强度迭代，Bug 修复效率良好，新功能以 Provider 扩展和 WebUI 优化为主。建议维护者优先处理 Opus 5 兼容性问题和 Gemini 路由修复，以确保多模型支持稳定性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 — 2026-08-04

## 1. 今日速览

Hermes Agent 项目今日保持高度活跃：**50 条 Issue 更新**（41 新开/活跃，9 已关闭）与 **50 条 PR 更新**（45 待合并，5 已合并/关闭）。昨日发布的 v0.20.0（v2026.8.3）引发密集反馈，Telegram 网关连接挂起、Windows 平台兼容性及 profile 隔离问题成为焦点。多条目热修复 PR 已于今日提交，项目整体健康度良好，社区贡献持续活跃。

---

## 2. 版本发布

### v0.20.0 (v2026.8.3) — 2026-08-03

**版本代号：The Herald Release**

| 指标 | 数值 |
|------|------|
| Commits | ~3,650 |
| Merged PRs | ~1,400 |
| Files Changed | ~5,200 |
| Insertions / Deletions | ~559,000 / ~405,000 |
| Issues Closed | ~1,200 |
| Contributors | 650+ |

**迁移注意事项：**
- Telegram 网关在部分环境下存在连接挂起回归（#78052），升级后需关注 `attempt 1/8` 卡死问题
- Windows 平台路径解析需额外注意 MSYS 与原生路径兼容（#67629、#69216）

🔗 [Release Notes](https://github.com/NousResearch/hermes-agent/releases)

---

## 3. 项目进展

今日已合并/关闭的重要 PR：

| PR | 类型 | 说明 |
|----|------|------|
| [#77806](https://github.com/NousResearch/hermes-agent/pull/77806) | Bugfix | 修复 `os.open()` 在含 NUL 字节路径时抛出未捕获 `ValueError` 的问题 |
| [#52765](https://github.com/NousResearch/hermes-agent/pull/52765) | Feature | 修复 `google-gemini-cli` provider 注册及 429 配额限制问题，同步 Cloud Code headers |
| [#78005](https://github.com/NousResearch/hermes-agent/pull/78005) | Feature | 新增 `skills.index_excluded` 可见性状态，支持从发现索引隐藏但保留精确加载 |
| [#78071](https://github.com/NousResearch/hermes-agent/issue/78071) | Bugfix | `sanitize_api_messages` 现已过滤缺少 `tool_call_id` 的 tool 消息 |
| [#78057](https://github.com/NousResearch/hermes-agent/issue/78057) | Bugfix | 修复 gateway 启动状态通知被错误填充为 A2A task 响应的问题 |
| [#78034](https://github.com/NousResearch/hermes-agent/issue/78034) | Bugfix | 明确 Matrix 线程到 session 的映射逻辑，修复 auto_thread 下的会话漂移 |

**整体进展：** 今日修复集中在稳定性与安全性边界，技能系统新增可见性控制，Google Gemini 接入得到完善。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 主题 | 热度分析 |
|-------|--------|------|----------|
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | 7 | 后台自我改进审查误分类 memory/skill/user store | 核心架构问题，影响长期学习的可靠性 |
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | 7 | `read_file` 将有效 UTF-8 误判为二进制（0.19.1 回归） | v0.20.0 升级后高频触发，用户 Obsidian 笔记受影响 |
| [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) | 7 | Telegram 网关永久挂起（含 workaround 失效） | P1 级稳定性问题，多次出现但根因未定位 |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | 7 | Signal 原生引用/回复/编辑/已读回执支持 | 用户期望完整 signal-cli 能力暴露 |
| [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) | 5 | 扩展凭证池支持 Tavily/Exa 等搜索后端 | 跨 provider 凭证统一管理的合理需求 |
| [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) | 5 | Windows 上 `uv` 安装后 PATH 不可见 | P1 安装体验问题，新用户门槛 |
| [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) | 5 | Windows 绝对路径 `search_files` 失败 | MSYS 路径转换与原生 rg 的二义性冲突 |

---

## 5. Bug 与稳定性

### 严重级别排序

| Issue | 级别 | 描述 | Fix PR |
|-------|------|------|--------|
| [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) | **P1** | v0.20.0 Telegram 网关内进程永久挂起（独立脚本正常） | 待确认 |
| [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) | **P1** | Telegram 连接 attempt 1/8 卡死（#63309 回归） | 无 |
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | **P2** | `read_file` UTF-8 误判二进制（0.19.1 回归） | 无 |
| [#75329](https://github.com/NousResearch/hermes-agent/issues/75329) | P3 | Desktop 语音对话仅第一次可用，后续不捕获 | 无 |
| [#78078](https://github.com/NousResearch/hermes-agent/issues/78078) | P3 | 状态栏重复显示 gateway 状态 | 无 |
| [#78072](https://github.com/NousResearch/hermes-agent/issues/78072) | P2 | 自定义 provider 的 `model.provider` 被错误设为 display name | 无 |
| [#78022](https://github.com/NousResearch/hermes-agent/issues/78022) | P2 | Webhook 平台端口冲突时进入重连循环 | 无 |
| [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | P2 | duplicate skill names 在 list/prompt/skill_view 中行为不一致 | 无 |

**重点关注：** Telegram 相关问题（#67498、#78052）在多版本中反复出现，建议维护者深入排查异步初始化链路与网络 I/O 超时配置。

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 关联 PR | 纳入可能性 |
|-------|----------|---------|------------|
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | Signal 原生引用/回复/编辑/已读回执 | — | 中等：依赖 signal-cli 能力映射 |
| [#78061](https://github.com/NousResearch/hermes-agent/issues/78061) | 工具输出引用（避免模型重新生成大 payload） | [#78090](https://github.com/NousResearch/hermes-agent/pull/78090) | **高**：PR 已提交，结构化实现 |
| [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) | 凭证池扩展至搜索后端 | — | 中等：需评估 provider 统一抽象 |
| [#77367](https://github.com/NousResearch/hermes-agent/issues/77367) | OMP 分析：LSP/AST/安全/SQLite 全功能提案 | — | 低：范围过大，建议分拆 |
| [#77744](https://github.com/NousResearch/hermes-agent/issues/77744) | 状态栏 context % 在工具循环中增量更新 | — | 低：体验优化，优先级不高 |
| [#68859](https://github.com/NousResearch/hermes-agent/issues/68859) | 定义工具重试语义与生命周期钩子 | — | 中等：需设计重试策略与观测接口 |

**路线图信号：** 今日 PR #78090 直接响应 #78061，体现了工具链间数据传递的用户诉求；PR #78086 强化密钥安全，符合项目安全加固方向。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈摘要 |
|------|----------|
| **Telegram 集成** | 多个用户报告 v0.18.2 → v0.19.0 → v0.20.0 版本间 Telegram 连接间歇性挂起，workaround 失效，情绪明显焦虑（#67498、#72454、#78052） |
| **Windows 兼容性** | `uv` 安装后 PATH 不可见（#69216）；`search_files` 绝对路径被错误转换为 MSYS 格式（#67629）；敏感路径守卫对 Windows 不生效（#78079） |
| **Desktop 体验** | 语音对话只工作一次（#75329）；macOS 15 无法运行（#77618）；状态栏重复显示（#78078） |
| **Profile 隔离** | `--clone` 实际复制了 memory 文件，违背"fresh profile"文档承诺（#10376）；multiplexed gateway 忽略 routed profile 的 terminal 配置（#68559） |
| **工具行为不一致** | `disabled_toolsets: [browser]` 意外移除 `web_search`（#73692）；duplicate skill names 在不同命令中表现不一（#64392） |

### 用户满意点
- v0.20.0 发布规模宏大，commits 和 contributors 数量可观
- `skills.index_excluded` 新增（#78005）被社区认可为实用功能
- PT-BR 本地化 PR（#78081）展现国际化进展

---

## 8. 待处理积压

| Issue | 状态 | 建议关注 |
|-------|------|----------|
| [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) | OPEN · P1 · 7 comments · 自 2026-07-19 | Telegram 挂起根因未定位，多次回归，建议优先处理 |
| [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) | CLOSED · 自 2026-08-03 | 已关闭但关联问题（#72454）仍存在，需验证 |
| [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) | OPEN · P2 · 4 comments · 自 2026-04-15 | Profile 隔离文档与实际行为长期不符，需明确修复计划 |
| [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) | OPEN · P2 · 4 comments · 自 2026-07-21 | Multiplexed gateway 忽略 routed profile 配置，影响多租户部署 |
| [#78022](https://github.com/NousResearch/hermes-agent/issues/78022) | OPEN · P2 · 自 2026-08-03 | Webhook 端口冲突导致重连循环，需增加端口检测与优雅降级 |
| [#77367](https://github.com/NousResearch/hermes-agent/issues/77367) | OPEN · P3 · 自 2026-08-03 | OMP 全面分析提案，范围大但内容详实，建议维护者评估拆分路径 |

---

**日报生成时间：** 2026-08-04  
**数据来源：** NousResearch/hermes-agent GitHub  
**分析师：** Agnes-2.0-Flash (Sapiens AI)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 | 2026-08-04

## 1. 今日速览
过去 24 小时 PicoClaw 社区保持高频迭代，共处理 8 条 Issue（3 开/5 关）与 5 条 PR（2 待合并/3 已合入），无新版本发布。项目整体健康度良好，Issue 关闭率达 62.5%，代码贡献集中於路由上下文管理、多语言本地化与底层通信稳定性。社区反馈明确指向生产环境部署（systemd/MCP/Telegram 私有频道）与长会话前端性能两大核心痛点，维护者响应积极，技术债务清理节奏稳健。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并 3 项关键 PR，显著提升了路由健壮性、认证稳定性与国际化覆盖：
- **#3202** `fix(routing): strip leading/trailing underscores in ID normalization` — 修复 `NormalizeAgentID`/`NormalizeAccountID` 的正则校验逻辑，确保规范化输出严格匹配路由规则，消除潜在的分包错乱问题。
- **#3267** `fix scope bug for refresh agy token` — 修正 Antigravity provider 刷新令牌时 scope 传递错误，解决 `PERMISSION_DENIED` 导致的 LLM 调用重试失败。
- **#3273** `feat(webui): add Japanese (ja) localization` — 完成 WebUI 日语本地化（968 行文案 + dayjs locale 注册），配合 #3272 需求闭环，验证了 i18n 扩展通路的可复用性。

项目整体向「生产级部署友好」与「多语言覆盖」方向稳步推进，核心路由链路与外部 Provider 集成稳定性得到实质性加固。

## 4. 社区热点
- **[BUG] Web UI 长历史会话输入严重卡顿** [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 👍1 | 评论3
  用户在积累一定聊天记录后，WebUI 输入框响应明显延迟。反映出现有前端渲染/状态管理在历史消息膨胀时存在性能瓶颈，社区对该体验优化诉求强烈。
- **[BUG] MCP 连接失败导致 Agent Loop 永久挂起** [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 👍1 | 评论2
  MCP Server 断连后 Agent 主循环无超时/降级机制，直接阻塞整个聊天接口。暴露了工具调用层的容错设计缺失，是生产环境的高优先级稳定性隐患。

## 5. Bug 与稳定性
| 严重程度 | Issue / PR | 状态 | 说明 |
|:---:|:---|:---:|:---|
| 🔴 高 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) [OPEN] | 无 Fix PR | WebUI 长历史输入卡顿 |
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) [OPEN] | 无 Fix PR | MCP 断连导致 Agent Loop 挂起 |
| 🟡 中 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) [OPEN] | PR [#3316](https://github.com/sipeed/picoclaw/pull/3316) 待合并 | 路由至非默认 Agent 的 `/clear` 与会话压缩失效 |
| 🟢 已修复 | [#3264](https://github.com/sipeed/picoclaw/issues/3264) [CLOSED] | — | `SplitMessage` 长 fenced-code 信息字符串导致无限循环 |
| 🟢 已修复 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) [CLOSED] | — | Gateway 启动时未知 `deltachat` channel 类型崩溃 |
| 🟢 已修复 | [#3268](https://github.com/sipeed/picoclaw/issues/3268) [CLOSED] | — | `exec` 工具缺少 `action` 默认参数导致调用失败 |

## 6. 功能请求与路线图信号
- **Telegram 私有频道 Topic 支持** [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) [OPEN]：修复仅依赖 `IsForum` 判断 Topic 的逻辑，补充 `IsTopicMessage` 支持。表明路线图正加强对 Telegram 复杂会话场景的深度适配。
- **外部 systemd 网关生命周期管理** [#3276](https://github.com/sipeed/picoclaw/issues/3276) [CLOSED]：Headless 部署场景下，用户希望 Launcher 能检测并尊重外部 systemd 托管的网关进程，避免启停冲突。需求已通过关闭收口，预期将纳入后续版本

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-08-04

---

## 1. 今日速览

NanoClaw 今日（2026-08-03）保持中等活跃度，共接收 **10 条变更记录**（9 PRs + 1 Issue），其中 **6 条已合并/关闭**、3 条待审核、1 条新开 Issue。项目整体处于"修复 + 安全加固"周期：核心关注点集中在会话持久化修复、iMessage 接入优化、以及 agent 镜像安全版本回滚。无新版本发布，节奏偏保守稳健。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 **6 条 PR** 推进了以下方向：

| PR | 类型 | 摘要 |
|----|------|------|
| [#3182](https://github.com/qwibitai/nanoclaw/pull/3182) | 安全/基础设施 | 将 agent 镜像重锁定至 `hardened-2026-08-02`，保持上游 digest 一致，仅刷新基础镜像 |
| [#3180](https://github.com/qwibitai/nanoclaw/pull/3180) | 运维技能 | 新增 hardened 镜像迁移工作流，完善升级路径文档化 |
| [#3137](https://github.com/qwibitai/nanoclaw/pull/3137) | 核心修复 | 修复会话上下文累积导致的不一致响应，暴露自服务连线策略控制面板，拒绝无效 JS 正则 |
| [#3181](https://github.com/qwibitai/nanoclaw/pull/3181) | iMessage 修复 | 修复 iMessage 渠道首次消息接入逻辑，确保消息正确路由至分配线路 |
| [#3143](https://github.com/qwibitai/nanoclaw/pull/3143) | 核心修复 | 保留已决议审批卡片的标题与请求详情，确保终端卡片在状态变更后仍可追溯 |
| [#3178](https://github.com/qwibitai/nanoclaw/pull/3178) | 误提交 | 用户提交至错误仓库，已关闭，无上游变更 |

**进展评估**：今日合并以"稳定性修复 + 运维加固"为主，核心会话管理和审批流程有实质性改进，项目整体向前推进约 **中等偏上**（修复类主导，无新功能落版）。

---

## 4. 社区热点

### 🔥 Issue #3179 — Node.js 兼容性报错
- **链接**: [Issue #3179](https://github.com/qwibitai/nanoclaw/issues/3179)
- **状态**: OPEN · 创建时间: 2026-08-03 · 评论: 1
- **用户**: benjamin920102
- **摘要**: `@clack/core@1.2.0` 引入的 `node:util` 模块中 `styleText` 导出在当前运行环境中不存在，导致启动时 `SyntaxError`。该问题与 Node.js 版本兼容性相关（`styleText` 为较新 API）。
- **诉求分析**: 用户在使用 Jupyter 环境（`/home/jovyan/`）运行 NanoClaw 时触发，反映项目在**低版本 Node.js 环境**下的兼容性缺口，可能影响容器化/云 notebook 部署场景。

### 📌 PR #3092 — 远程 Streamable HTTP MCP 服务器支持
- **链接**: [PR #3092](https://github.com/qwibitai/nanoclaw/pull/3092)
- **状态**: OPEN · 创建时间: 2026-07-19
- **用户**: amit-shafnir
- **诉求分析**: 长期未闭合的功能请求，用户期望支持远程 MCP 服务器接入，属于扩展集成能力的重要方向。

---

## 5. Bug 与稳定性

| 级别 | Issue/PR | 描述 | Fix 状态 |
|------|----------|------|----------|
| 🟡 中 | [#3179](https://github.com/qwibitai/nanoclaw/issues/3179) | `node:util.styleText` 导入失败，导致启动崩溃 | 尚无 PR |
| 🟢 低 | [#3178](https://github.com/qwibitai/nanoclaw/pull/3178) | 误提交至错误仓库 | 已关闭 |

**稳定性评估**：今日无崩溃级严重 Bug 上报，但 #3179 的兼容性报错在 Jupyter/容器场景中具有实际影响，建议维护者关注 Node.js 版本兼容矩阵。

---

## 6. 功能请求与路线图信号

| PR | 类型 | 信号解读 |
|----|------|----------|
| [#3092](https://github.com/qwibitai/nanoclaw/pull/3092) | 新功能 | 远程 MCP HTTP 服务器支持，长期未决，社区需求明确，可能纳入下一版本集成扩展路线 |
| [#3184](https://github.com/qwibitai/nanoclaw/pull/3184) | 修复 | 会话死锁/丢失时的自动旋转策略，修复现有体验缺陷，即将合并 |
| [#3183](https://github.com/qwibitai/nanoclaw/pull/3183) | 修复 | 群聊会话保留策略修复，防止冷会话被误清理，即将合并 |

**路线图判断**：今日合并/待合并 PR 均聚焦**会话可靠性**和**集成稳定性**，无大规模新功能；远程 MCP 支持（#3092）是唯一可能的长期功能信号，但尚未进入核心开发节奏。

---

## 7. 用户反馈摘要

- **痛点 1（#3179）**: Jupyter 环境下的 Node.js 版本兼容性差，`@clack/core` 依赖的新 API 导致启动崩溃，影响容器化部署体验。
- **痛点 2（#3184/#3183 背景）**: 用户反馈冷会话（30+ 天无活动）会被保留策略误清理，导致"No conversation found"错误，影响多日断联后的上下文恢复。
- **痛点 3（#3181 背景）**: iMessage 渠道首次消息路由异常，需要显式 opt-in 才能正确分配线路。
- **满意点**: 审批卡片内容保留机制（#3143）改善了大量用户在状态变更后的追溯体验。

---

## 8. 待处理积压

| 编号 | 类型 | 描述 | 创建时间 | 建议优先级 |
|------|------|------|----------|------------|
| [#3092](https://github.com/qwibitai/nanoclaw/pull/3092) | Feature PR | 远程 Streamable HTTP MCP 服务器支持 | 2026-07-19（16 天） | 中 |
| [#3179](https://github.com/qwibitai/nanoclaw/issues/3179) | Bug Issue | `node:util.styleText` 兼容性崩溃 | 2026-08-03 | 高 |

**维护者提醒**：
- **#3179** 已在社区引发实际启动失败，建议优先排查 `@clack/core@1.2.0` 的 Node.js 最低版本要求，并考虑降级或 polyfill 方案。
- **#3092** 已停留 16 天，如需纳入路线图建议尽快评审；如暂不规划，建议关闭并附说明。

---

**报告生成时间**: 2026-08-04 · **数据来源**: GitHub API (NanoClaw)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目日报 — 2026-08-04

## 1. 今日速览

过去24小时 NullClaw 项目保持中等活跃度：1 条 Issue 更新（无关闭），5 条 PR 更新（2 条已合并，3 条待审）。核心进展集中在流式 Tool Call 功能的完善与代理连接稳定性修复。无新版本发布，项目整体处于功能打磨阶段，健康度良好。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**已合并 PR（2 条）：**

- **#964** — 启用流式请求中的原生 API 级 Tool Calls。修复了 `StreamChatResult` 未保留结构化 tool-call delta 的问题，使 Agent 能够执行纯流式 tool 响应，消除了此前需依赖 provider 全能力检查的 workaround。
- **#965** — 为 SSE Parser 增加结构化流式 Tool Call 支持。针对部分 provider 将模型生成的 XML 残留于 `delta.content` 的场景提供补充处理，是对 #964 的配套修复。

**推进方向：** 两枚 PR 共同补齐了 NullClaw 在 streaming + tools 场景下的完整支持链，为后续复杂 Agent 工作流打下基础。

---

## 4. 社区热点

| 类型 | 编号 | 标题 | 评论 | 👍 | 链接 |
|------|------|------|------|----|------|
| Issue | #915 | scheduler 未授权异常 | 4 | 1 | [链接](https://github.com/nullclaw/nullclaw/issues/915) |
| PR | #983 | fix(providers): 代理请求使用 pinned curl path | 0 | 0 | [链接](https://github.com/nullclaw/nullclaw/pull/983) |
| PR | #982 | fix(telegram): 显式代理使用 curl transport | 0 | 0 | [链接](https://github.com/nullclaw/nullclaw/pull/982) |

**分析：** #915 是当前唯一活跃的 Issue，涉及 scheduler 模块在 Telegram 和其他方式下的未授权错误，评论数 4 条、1 个 👍，反映出用户对调度可靠性的关注。#983 / #982 是同一作者（ArcanePivot）连续提交的代理稳定性修复，聚焦 curl 传输路径的安全性改进，暂未引发讨论。

---

## 5. Bug 与稳定性

| 编号 | 严重程度 | 描述 | 已有 Fix PR |
|------|----------|------|-------------|
| #915 | 中 | scheduler 在 Ubuntu + Ollama 环境下报 unauthorized，影响 Telegram 及其他 channel | 暂无 |

**说明：** #915 自 2026-05-15 创建，最近更新于 08-03，历时近 3 个月仍未关闭，建议维护者优先跟进。

---

## 6. 功能请求与路线图信号

- **流式 Tool Call 完整支持** — #964 与 #965 的合并表明项目正系统化补齐 streaming + tools 的能力，未来可预期更多基于流式的 Agent 编排功能。
- **依赖与安全加固** — #983 / #982 持续强化代理场景下的传输安全，反映出维护团队对供应链安全（pinned curl、mode-0600 header）的重视，预计会成为后续版本的标准安全基线。

---

## 7. 用户反馈摘要

- **痛点：** #915 用户反映在 Ubuntu + 外部 Ollama（qwen3.6:27b + RTX 3090）部署中，LLM 推理与 Tool Calling 整体正常，但 **scheduler 完全不可用**，且错误同时出现在 Telegram 和其他 channel，指向 scheduler 模块的通用授权逻辑问题。
- **场景：** 用户属于自托管高级用户，使用本地 GPU 运行大模型，对调度和多渠道集成有强依赖。
- **满意度：** LLM 调用和工具调用体验正面，问题集中在基础设施层（scheduler/授权），非模型侧。

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 最后更新 | 说明 |
|------|------|----------|----------|------|
| #915 | Bug | 2026-05-15 | 2026-08-03 | scheduler unauthorized，长期未响应 |
| #983 | PR | 2026-08-03 | 2026-08-03 | 代理 curl path 修复，待合并 |
| #982 | PR | 2026-08-03 | 2026-08-03 | Telegram 代理 curl transport，待合并 |
| #956 | PR | 2026-06-15 | 2026-08-03 | Alpine 3.23→3.24 依赖升级，长期 open |

> **提醒：** #915 已挂起约 3 个月，#956 作为 Dependabot 自动 PR 长期未处理，建议维护者安排 review。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 | 2026-08-04

## 1. 今日速览

过去24小时 IronClaw 项目保持高活跃度，共处理 95 条 Issue/PR（Issues 45 条，PRs 50 条），其中 18 条 PR 已合并/关闭，9 条 Issue 已关闭，整体推进节奏积极。今日工作重心集中在 **架构重构 Wave 2/3 收尾**（依赖边界清理、扩展管理重分层）、**Google OAuth 多服务认证重复问题修复**，以及**WebUI E2E 测试覆盖恢复**。无新版本发布，但 Dependabot 持续跟进依赖更新，项目代码健康度和测试覆盖率有明显改善。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#7023](https://github.com/nearai/ironclaw/pull/7023) | 依赖更新 | 批量更新 6 个依赖（base64 0.22.1→0.23.0 等），修复潜在安全风险 |
| [#6999](https://github.com/nearai/ironclaw/pull/6999) | 架构修复 | 关闭 server-lifecycle 规则对 WebChat v2 路由未覆盖的问题 |
| [#7040](https://github.com/nearai/ironclaw/pull/7040) | 重构完成 | 关闭 WS2 遗留行及 WS2.1 跟进项，修正了两处过期声明 |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | 流程优化 | 新增周三发布策略文档，对齐 Monday-to-Monday 冲刺周期 |
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | 重构（WS3/WS4） | 将模型网关和工具披露逻辑剥离到 `loop_host`，纯移动无行为变更 |
| [#7070](https://github.com/nearai/ironclaw/pull/7070) | Bug 修复 | 修复 5 个阻塞主 E2E 测试的 WebUI v2 问题（SSE keep_alive、admin 重试、过 selector） |

**整体推进：** Wave 2 重构已基本收尾，Wave 3 进入深水区（扩展管理重分层、沙箱合并、secrets 依赖收紧），架构边界日益清晰。

---

## 4. 社区热点

| Issue/PR | 评论数 | 热度说明 |
|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) — Epic: Error Recoverability Endgame | 15 | 核心长期目标：模型需能从 100% 运行时错误中恢复，已关闭但影响深远 |
| [#7084](https://github.com/nearai/ironclaw/pull/7084) — refactor(wasm): move wit/ inside its owning crate | — | Wave 3 大型重构，原因 planner 门控阻塞，现已修复并解除合并限制 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) — Epic: Hermetic Capability Testing Platform | 4 | 测试平台长期规划，关注确定性覆盖 |
| [#7085](https://github.com/nearai/ironclaw/issues/7085) — check-version-bumps.sh macOS 兼容问题 | 2 | BSD sed 与 GNU sed 兼容性问题，阻塞版本 bump 检查 |
| [#7060](https://github.com/nearai/ironclaw/issues/7060) — WIT 扩展包变更触发 Reborn scope classifier 误判 | 2 | 回归问题，与 #7019 引入的 bounded planner 相关 |

**热点分析：** 社区关注点集中在**架构重构的持续性**（Wave 2/3 清理工作）和**测试/质量保障平台化**。#6284 已关闭说明 error-recoverability 阶段目标达成，进入下一阶段。#7085/#7060 暴露了 CI 工具链在跨平台兼容性和新引入边界检查方面的摩擦。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | Fix PR |
|---|---|---|---|
| **P1** | [#7069](https://github.com/nearai/ironclaw/issues/7069) | Google 服务对同一账号重复请求 OAuth 授权 | [#7077](https://github.com/nearai/ironclaw/pull/7077) ✅ |
| **P1** | [#7074](https://github.com/nearai/ironclaw/issues/7074) | 多工具会议研究在日历数据检索后失败 | 尚无 |
| — | [#7081](https://github.com/nearai/ironclaw/issues/7081) | Docker fail-closed 测试门控未正确连接（环境变量未设置） | 尚无 |
| — | [#7083](https://github.com/nearai/ironclaw/issues/7083) | `crates/extensions/` 家族整体缺乏覆盖率检测 | 纳入 [#7094](https://github.com/nearai/ironclaw/pull/7094) |
| **P2** | [#7071](https://github.com/nearai/ironclaw/issues/7071) | 流式更新中状态反复闪烁 "Reconnecting" | 尚无 |
| **P2** | [#7075](https://github.com/nearai/ironclaw/issues/7075) | 失败运行后代理忽略用户新问题，重播旧任务 | 尚无 |
| **P2** | [#7073](https://github.com/nearai/ironclaw/issues/7073) | 响应中泄露内部工具名和路由逻辑 | 尚无 |
| **P2** | [#7072](https://github.com/nearai/ironclaw/issues/7072) | Telegram 消息展示原始 Markdown 而非格式化文本 | 尚无 |
| — | [#7082](https://github.com/nearai/ironclaw/issues/7082) | `builtin.skill_install` 多文件安装入口不可达、URL 安装静默丢弃字段 | 尚无 |
| — | [#7068](https://github.com/nearai/ironclaw/issues/7068) | Hosted MCP `destructiveHint` 缺失时默认 false 与规范默认 true 不符 | 尚无 |

**稳定性评估：** 今日集中修复了高优先级的 OAuth 重复认证问题（#7069），但多个 P2 级别的 UX 问题（流式状态闪烁、Markdown 渲染、上下文丢失）仍未解决，预计在下轮 QA 冲刺中处理。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 说明 | 关联 PR |
|---|---|---|---|
| [#7044](https://github.com/nearai/ironclaw/issues/7044) | Epic | 首次用户引导（channel-first onboarding），降低新用户采用摩擦 | — |
| [#7046](https://github.com/nearai/ironclaw/issues/7046) | Epic | 通过 AI 聊天配置所有工具、频道和扩展，替代 WebUI 导航 | 关联 #7044 |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | Epic | Skills 自生成/发现/选择能力，#6565 的精简子集 | — |
| [#6957](https://github.com/nearai/ironclaw/pull/6957) | 功能 | IronHub 已安装包生命周期管理，持久化安装凭证 | 进行中 |
| [#7097](https://github.com/nearai/ironclaw/issues/7097) | 功能 | 账单页增加升级路径指引，解决用户"找谁处理"的不确定性 | 尚无 |
| [#6481](https://github.com/nearai/ironclaw/issues/6481) | 已完成 | Manifest-Driven Extension Lifecycle，已关闭 | — |
| [#6482](https://github.com/nearai/ironclaw/issues/6482) | 进行中 | Pluggable Memory Providers，等待 provider contract 完成 | — |

**路线图判断：** 产品方向明确聚焦于**降低新用户采用门槛**（#7044/#7046）和**扩展生态可观测性**（#6957）。#7097 的账单支持需求反映用户社区规模扩大后的服务诉求，可能被纳入下一版本 WebUI 改进。

---

## 7. 用户反馈摘要

**核心痛点：**
- **OAuth 重复认证**（#7069）：同一账号多次安装 Google 服务时每次都要重新授权，体验断裂。已通过 [#7077](https://github.com/nearai/ironclaw/pull/7077) 修复。
- **流式状态闪烁**（#7071）：SSE 流式响应中 "Reconnecting" 状态频繁闪烁，用户感知连接不稳定。
- **Telegram 消息渲染**（#7072）：Markdown 语法原样显示，破坏聊天体验。
- **上下文丢失**（#7075）：任务失败后模型无法响应用户新问题，而是重复执行旧任务。
- **内部信息泄露**（#7073）：响应中暴露工具名和路由逻辑，影响专业形象。
- **账单支持不明确**（#7097）：用户不清楚找谁解决计费问题，缺乏清晰的路径指引。

**积极信号：**
- Wave 2/3 重构获得核心贡献者密集推进，代码结构和测试覆盖持续改善。
- #7070 修复了阻塞主 E2E 测试的 5 个问题，说明团队在恢复测试信心上有明确行动。

---

## 8. 待处理积压

| Issue | 类型 | 状态 | 建议 |
|---|---|---|---|
| [#7074](https://github.com/nearai/ironclaw/issues/7074) | Bug P1 | 多工具会议研究失败 | 需优先处理，影响核心工作流 |
| [#7085](https://github.com/nearai/ironclaw/issues/7085) | Bug | macOS `sed` 兼容性问题 | 阻塞 CI，建议快速修复 |
| [#7060](https://github.com/nearai/ironclaw/issues/7060) | QA 回归 | WIT 扩展包变更误触发 scope classifier | 与 #7084 Wave 3 工作相关，需跟进 |
| [#7081](https://github.com/nearai/ironclaw/issues/7081) | Bug | Docker fail-closed 门控未连接 | 影响沙箱测试可靠性，建议修复 |
| [#7082](https://github.com/nearai/ironclaw/issues/7082) | Bug | skill_install 多文件入口不可达 | 预存在于 main，建议排入 backlog |
| [#7068](https://github.com/nearai/ironclaw/issues/7068) | Bug | MCP `destructiveHint` 默认值不符合规范 | 潜在安全/行为风险，建议修复 |
| [#7071/#7072/#7073/#7075] | Bug P2 × 4 | WebUI/Telegram 多问题 | 建议统一排入下一轮 UX 冲刺 |
| [#6482](https://github.com/nearai/ironclaw/issues/6482) | Epic | Pluggable Memory Providers | 等待 provider contract 完成后收尾 |

---

**项目健康度评分：良好** — 重构推进有序，关键 Bug 有明确修复路径，但 P2 UX 类问题积累较多，建议在 Wave 3 收尾后安排一轮用户体验专项。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目日报 — 2026-08-04

---

## 1. 今日速览

过去24小时 LobsterAI 项目保持**中低活跃度**。Issues 新增2条，均以用户反馈和功能建议为主；PR 方面共11条更新，其中6条已合并/关闭，5条仍待处理。无新版本发布。整体来看，今日项目以**维护性修复和内部迭代**为主，社区驱动的新功能 PR （如 Markdown 导出、自定义 Provider 扩容）仍在审查队列中推进，项目健康度处于平稳状态。

---

## 2. 版本发布

**无新版本发布。** 最新状态仍处于 v2026.3.30 版本，尚未有 Release 记录。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 状态 | 摘要 |
|---|---|---|
| [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | ✅ 已关闭 | 修复 Windows NSIS 打包过程中 Stop-Process 仅执行一次导致的残留进程问题，改为每轮轮询均重新发出终止指令，并记录超时进程的详细信息（名称/PID/路径），提升 Windows 端停止操作的可靠性。 |
| [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419) | ✅ 已关闭 | 新增启动积分营销活动功能（startup credit campaign），面向网易用户获取场景，在桌面客户端集成弹窗和新会话页入口，支持登录延续与积分领取流程。 |
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | ✅ 已关闭 | 侧边栏新增多 Agent 任务活动过滤器，采用 Codex 灵感设计，用蓝色指示器高亮需要关注的任务，提升多 Agent 协作场景下的任务管理效率。 |
| [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | ✅ 已关闭 | 回滚 [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) 和 [#2421](https://github.com/netease-youdao/LobsterAI/pull/2421) 对 btw tools 的修改，表明相关改动存在未预见的副作用，已回退至稳定状态。 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 🔄 待合并 | Dependabot 自动更新 Electron 从 40.2.1 → 43.2.0，同时更新 electron-builder，属于重大版本升级，潜在影响面较广，需重点关注兼容性。 |

**整体评价：** 今日6条已关闭 PR 以内部功能迭代和 bug 修复为主，体现了维护团队在体验优化（营销活动、侧边栏过滤器）和系统稳定性（进程终止修复、回滚修复）上的持续投入。Electron 大版本升级 PR 仍在等待合并，是今日最值得关注的待办事项。

---

## 4. 社区热点

**#1206 — Kimi2.5 文档分析重复回复 Bug**
- 作者：ze23sw | 创建：2026-04-01 | 更新：2026-08-03 | [Issue 链接](https://github.com/netease-youdao/LobsterAI/issues/1206)
- 自创建以来已**近4个月未解决**，用户反馈 Kimi2.5 模型在处理源码分析文档时**必现**重复回复当前动作的问题，切换模型后恢复正常。反映出特定模型接入的兼容性问题是当前用户关注焦点。

**#1213 / #1214 — 会话详情导出 Markdown 功能（Issue + 对应 PR）**
- 作者：MaoQianTu | 创建：2026-04-01 | [Issue 链接](https://github.com/netease-youdao/LobsterAI/issues/1213) · [PR 链接](https://github.com/netease-youdao/LobsterAI/pull/1214)
- 用户痛点明确：当前仅支持导出图片，无法以文本格式保存和检索对话内容。PR #1214 已提供完整实现方案（复用已有数据结构、工具调用代码块呈现、过长结果自动截断），但仍在审查队列中，体现了社区对**内容可移植性**的强烈需求。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) Kimi2.5 模型文档分析重复回复，必现 | 待处理，无关联 PR | 无 |
| 🟡 中 | [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) btw tools 修改引入回归，已回滚 | 已回退修复 | 通过回滚解决 |
| 🟡 中 | [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) Windows 停止进程时残留进程 | 已修复 | ✅ #2420 |

**分析：** 项目今日修复了 Windows 进程终止的稳定性问题，但 Kimi2.5 的重复回复 Bug 长期未处理，且涉及特定模型集成，建议维护者优先评估修复路径。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR | 纳入下一版本可能性 |
|---|---|---|---|
| 会话详情导出为 Markdown | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | ⭐⭐⭐⭐ 高 — PR 已完整实现，等待审查 |
| 自定义 Provider 上限提升至 20 | [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | ⭐⭐⭐⭐ 高 — 硬编码限制突破，技术难度低 |
| Cowork 会话错误手动重试按钮 | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | ⭐⭐⭐ 中 — 改善用户体验，已分类瞬时可重试错误类型 |
| Web Search 修复 Chrome 标志兼容 | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | ⭐⭐⭐ 中 — 解决 Chrome 130+ 兼容性问题 |

**信号判断：** 今日 4 条待合并 PR 均聚焦于**用户体验优化**（重试机制、导出功能、Provider 扩容），反映出项目当前阶段在稳固基础功能的同时，向"易用性"和"可移植性"方向演进。Electron 大版本升级若合并，可能影响后续版本计划。

---

## 7. 用户反馈摘要

- **痛点一：模型集成稳定性。** [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) 用户反馈 Kimi2.5 在文档分析场景下必现重复回复，行为提示不清晰，切换模型后正常。说明私有化部署多模型场景中，模型适配层存在质量风险。
- **痛点二：内容可移植性不足。** [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) 用户希望会话内容可导出为 Markdown，便于引用、整理和检索，当前仅支持截图导出，操作繁琐且不便于后续编辑。
- **痛点三：瞬时错误用户体验差。** [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) 用户反馈 Cowork 会话因 429 限流或网络问题中断后，需手动重新输入消息，缺乏一键重试机制。
- **痛点四：自定义 Provider 数量受限。** [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) 用户最多只能保留 10 个自定义 Provider，切换时无法保留旧配置，限制了多模型工作流的灵活性。

---

## 8. 待处理积压

> 以下 Issue/PR 已开放超过 **4 个月**，需维护者关注：

| 编号 | 类型 | 标题 | 状态 | 链接 |
|---|---|---|---|---|
| #1206 | Bug | Kimi2.5 文档分析重复回复 | 🔄 OPEN / stale | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1206) |
| #1208 | 功能 | Cowork 错误手动重试按钮 | 🔄 OPEN / stale | [PR](https://github.com/netease-youdao/LobsterAI/pull/1208) |
| #1209 | Bug | Web Search Chrome 标志兼容 | 🔄 OPEN / stale | [PR](https://github.com/netease-youdao/LobsterAI/pull/1209) |
| #1212 | 功能 | 自定义 Provider 上限提升至 20 | 🔄 OPEN / stale | [PR](https://github.com/netease-youdao/LobsterAI/pull/1212) |
| #1214 | 功能 | 会话详情导出 Markdown | 🔄 OPEN / stale | [PR](https://github.com/netease-youdao/LobsterAI/pull/1214) |
| #1277 | 维护 | Electron 40→43 大版本升级 | 🔄 OPEN / stale | [PR](https://github.com/netease-youdao/LobsterAI/pull/1277) |

**建议：** 6 条待处理项中，PR #1212（Provider 扩容）和 #1214（Markdown 导出）实现完整、风险低，建议优先审查合并；#1277（Electron 升级）涉及面广，建议安排专项测试；#1206（Kimi2.5 Bug）需要模型集成团队介入排查。

---

**报告生成时间：** 2026-08-04 | **数据周期：** 过去24小时 | **分析师：** Agnes (Sapiens AI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报 — 2026-08-04

## 1. 今日速览

Moltis 今日整体活跃度较低，过去24小时内无新 Issue 提交、无新版本发布。唯一动态为 **PR #1183** 处于待合并状态，聚焦于 MCP 服务器的托管仓库 bundles 功能。项目目前处于功能迭代平稳期，无紧急阻塞或严重问题，健康度良好。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 功能方向 |
|---|---|---|
| [#1183](https://github.com/moltis-org/moltis/pull/1183) | 🟡 待合并 | MCP 托管仓库 bundles 支持 |

**推进内容**：PR #1183 为今日核心进展，引入了对 MCP 服务器的完整仓库级生命周期管理（发现、预览、安装、更新、回滚、移除），并整合了 HTTPS 凭据、SSH 传输锁定、Vault 生命周期及导入型仓库配置等能力。该 PR 的合并将显著提升 Moltis 在 MCP 服务器可观测性与可维护性方面的表现，是该项目面向企业级 MCP 管理方向的关键一步。

---

## 4. 社区热点

今日无高活跃度 Issue 或 PR 讨论。

**关注点**：[PR #1183](https://github.com/moltis-org/moltis/pull/1183) — 功能范围较广，涵盖 MCP 服务器全生命周期管理，后续建议关注合并后的用户反馈及社区对托管 bundle 工作流的适配情况。

---

## 5. Bug 与稳定性

今日无 Bug 报告或稳定性问题。

---

## 6. 功能请求与路线图信号

**潜在路线图信号**：
- [PR #1183](https://github.com/moltis-org/moltis/pull/1183) 的功能方向（托管仓库 bundles、仓库级 MCP 配置导入）表明项目正朝着**企业级 MCP 治理**和**可观测性增强**演进。
- 该 PR 若合并，预计将被纳入下一版本，作为 MCP 服务器管理能力的核心补强。

---

## 7. 用户反馈摘要

今日无新 Issue 评论，暂无可提炼的用户反馈。

---

## 8. 待处理积压

| 项目 | 状态 | 链接 |
|---|---|---|
| PR #1183 | 待合并（已更新于 2026-08-03） | [PR #1183](https://github.com/moltis-org/moltis/pull/1183) |

**提醒**：PR #1183 创建时间距今已约 2 天，状态仍为 Open，建议维护者关注审核进度，避免功能合并延迟。

---

*数据截止：2026-08-04 | 报告生成依据：GitHub API 数据*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw (QwenPaw) 项目动态日报 — 2026-08-04

---

## 1. 今日速览

过去24小时 CoPaw 保持**高活跃度**：共处理 Issues 23 条（关闭 6 条，活跃 17 条）、PR 50 条（合并/关闭 24 条，待合并 26 条），并发布了 **v2.1.0-beta.1** 预发布版本。今日维护者重点响应了多起桌面端稳定性问题（WebView2 崩溃、UI 冻结、Skill 标签丢失）以及 `spawn_subagent` 参数规范化等核心 API 缺陷，项目正处于 2.1.0 版本冲刺阶段，问题闭环速度明显加快。

---

## 2. 版本发布

### v2.1.0-beta.1（Beta）
**链接：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.1

| 变更类型 | 详情 |
|---|---|
| **修复** | `fix(chat): prevent stale channel identity leaking into new chats` — 修复新会话继承旧会话渠道身份的问题（#6382） |
| **增强** | `feat(inbox): wobble sidebar inbox on new approvals & color-code badge dot` — 新审批通知时侧边栏 Inbox 动效提示，徽章点颜色编码（#638x） |
| **版本类型** | Beta，存在验证任务（#6656），截止验证时间 2026-08-03 14:35 UTC |

**注意事项：** 此为 Beta 版本，尚未正式稳定，建议仅测试环境试用；验证通过后才会进入候选正式版流程。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) | 修复 | 桌面版执行 Python 脚本时改用内置 Python，解决"未安装 Python 环境"报错（关联 #6160） |
| [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) | 修复 | 修正 `spawn_subagent` 参数 schema，将 `Optional[list\|str]` 改为 `list\|str\|None`，解决单任务调用时的空 batch 推断错误 |
| [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) | 修复 | 修复 CI `real-behavior-proof` 校验中 fenced 代码块被整段删除的误判问题（关联 #6626） |
| [#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) | 修复 | 修复 fork PR 的 CI 校验失败：通过 API 获取 PR body 以绕过 `pull_request_target` 安全限制 |
| [#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) | 修复 | 将 Playwright 版本限制在 1.62 以下，解决 macOS 桌面构建超时问题 |

**整体评价：** 今日 24 条 PR 关闭中，80% 为 bug 修复，反映维护者正集中清理桌面端与 CI 链路上的技术债务，为 v2.1.0 正式发版扫清障碍。

---

## 4. 社区热点

### 🔥 关注度最高的 Issues

**1. #6614 — 微信 cron 定时推送静默失败**（2 条评论）
- 问题：自 2026-07-27 起，每日定时推送始终显示 `status=success` 但微信侧 `ret=-2`（`context_token` 失效），累计消耗约 44M tokens。
- 诉求：修复 cron 任务对微信渠道 token 失效的感知与重试机制。
- 链接：https://github.com/agentscope-ai/QwenPaw/issues/6614

**2. #6608 — 长时 shell 命令阻塞飞书会话**（3 条评论）
- 问题：执行一次耗时 1.5 小时的 shell 命令导致整个飞书会话挂起，后续消息全部排队，仅靠系统 cancel 才恢复；缺少单 channel 总超时保护。
- 诉求：为 `execute_shell_command` 增加 per-channel 超时与孤儿进程清理。
- 链接：https://github.com/agentscope-ai/QwenPaw/issues/6608

**3. #6588 — `spawn_subagent` 空 batch 占位符误判为批量模式**（6 条评论，已有关闭 PR #6609）
- 问题：部分 Responses 兼容 provider 对单任务调用返回空 `batch=[]`，QwenPaw 将其识别为 batch 模式导致错误。
- 状态：PR #6658（normalize empty batch）与 #6609（schema 修正）已在修复中。
- 链接：https://github.com/agentscope-ai/QwenPaw/issues/6588

**4. #6537 — Skill 标签重启后丢失（回归）**（11 条评论）
- 问题：2.0.1 版本中 Skill Pool 设置的标签写入 `skill_pool/skill.json` 成功，但启动时 manifest 重建后标签消失。为 #3270 的回归。
- 状态：已关闭，修复应已合入。
- 链接：https://github.com/agentscope-ai/QwenPaw/issues/6537

**5. #6649 — 支持 GPT-5.6 prompt caching 参数**（8 条评论）
- 诉求：在 Responses API provider 中支持 `prompt_cache_key`、`prompt_cache_options`、`prompt_cache_breakpoint`，以降低多轮 Agent 循环的延迟与成本。
- 链接：https://github.com/agentscope-ai/QwenPaw/issues/6649

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) | WebView2 进程崩溃导致桌面 UI 全黑，无恢复路径（STATUS_IN_PAGE_ERROR 0xc0000006） | — |
| 🔴 高 | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容：`Msg.content` 类型错误导致主动崩溃 + 工具权限死锁 | — |
| 🔴 高 | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | `ToolCallBlock` 无 `extra_content` 字段，openai_chat_model_compat 流式解析崩溃（同上兼容性问题） | — |
| 🟡 中 | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP `delegate_external_agent` 在 notification 与 prompt 同 TCP 段到达时返回"completed without text output" | #6623（开放中） |
| 🟡 中 | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` 输出数万行时前端 UI 冻结（已关闭） | 已修复 |
| 🟡 中 | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) | 慢速网络下 Console 页面加载失败：API 响应为 MB 级未压缩数据，超过 30s 前端超时 | — |
| 🟡 中 | [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) | Skills / Skill Pool 页面同上问题，`GET /api/skills` 返回完整 skill 内容（MB 级） | #6650（开放中，分离列表与详情接口） |
| 🟢 低 | [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) | Coding Mode 编辑器光标位置偏移（已关闭） | 已修复 |

**稳定性总结：** 今日出现 3 起与 agentscope 版本不兼容相关的崩溃问题（#6612、#6619），属于阻塞性 Bug，建议优先关注；#6647 WebView2 崩溃问题尚无修复方案，需维护者跟进。

---

## 6. 功能请求与路线图信号

| 诉求 | Issue/PR | 评估 |
|---|---|---|
| GPT-5.6 prompt caching 支持 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 明确标注 Core/Backend 受影响，评论活跃，大概率纳入 2.1.x |
| 拖入文件时直接读取原路径（不上传下载） | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | 与 #6643 同作者，反映用户体验痛点；对应 PR #6651（文件管理 API）部分覆盖 |
| 任务产出物按任务分目录存放 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 用户体验改进，无对应 PR，可能作为 2.1 后续优化项 |
| 文件拖入后完整分行显示文件名 | [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) | UI 小优化，待排期 |
| 多智能体协作自动引导 | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | 用户反馈 Default Agent 需显式配置才能调用其他 Agent，反映引导设计不足，需产品层面决策 |
| 模型降级与冷却机制 | [#6659](https://github.com/agentscope-ai/QwenPaw/issues/6659)、[PR #2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) | 同一功能有两路 PR，#6659 为最新版实现，预计合并入 2.1.0 |
| `SandboxConfig` 约束未全面执行 | [PR #6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) | 暴露 `NoneSandbox` 静默忽略所有约束的安全隐患，建议优先合入 |
| Mission Mode 服务端 `max_iterations` 强制校验 | [PR #6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | 修复 LLM 可无限派发子 agent 导致超额消耗的问题，安全增强，建议优先合入 |
| 用户上下文透明穿透（user_id、metadata） | [PR #6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | 企业级功能，贯穿 Chat API → Agent → Tool → MCP → SKILL CLI，技术复杂度高 |
| Provider 发现与路由统一 | [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 大型重构 PR，统一 provider 发现、模型元数据、路由与 Agent 控制，影响面广，审核中 |

---

## 7. 用户反馈摘要

| 主题 | 用户声音 |
|---|---|
| **桌面端稳定性** | WebView2 崩溃后无恢复路径（#6647）；长时间 shell 命令阻塞会话（#6608）；大量输出冻结 UI（#6589，已修复） |
| **Python 执行环境** | 用户反映桌面版依赖系统全局 Python，在 Conda 多环境用户中频繁报错"未安装 Python"；#6579 已合入内置 Python 修复 |
| **Console 审批体验** | 安全审批请求在 Console 通道下静默超时，用户完全无感知（#6655，已关闭）；Web UI 下可正常点击确认，体验差异大 |
| **Skill 管理** | Skill Pool 页面加载慢，全量返回 MB 级未压缩内容（#6633）；#6650 PR 正在优化 |
| **多 Agent 协作** | 用户需手动在 PROFILE.md 中显式写入调用指令才能激活其他 Agent，缺乏引导（#6621），导致大量无效调试 |
| **API 自动化** | 通过 API 调用时对话异常结束（如 loop 检测）无法通过 SSE 可靠感知（#5930）；对应 PR 增加结构化输出 |
| **版本兼容** | agentscope 2.0.4.post1 升级后 QwenPaw 2.0.1 出现 `Msg.content` 类型错误与工具权限死锁（#6612、#6619），影响主动记忆演化子系统 |

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 未响应天数 | 说明 |
|---|---|---|---|---|
| [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) | Bug 🔴 | 2026-08-03 | 1 天 | WebView2 崩溃后 UI 全黑无恢复，需维护者评估兜底策略 |
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | Bug 🔴 | 2026-07-31 | 3 天 | agentscope 版本不兼容，阻塞主动记忆演化子系统，建议紧急处理 |
| [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | Bug 🔴 | 2026-08-01 | 2 天 | 同上兼容性问题，`ToolCallBlock` 缺少 `extra_content` 字段 |
| [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) | Bug 🟡 | 2026-07-31 | 3 天 | 微信 cron 推送静默失败，已消耗 44M tokens，需排查 token 刷新机制 |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | Bug 🟡 | 2026-07-31 | 3 天 | 长时 shell 命令无 per-channel 总超时，阻塞会话 |
| [#6635](https://github.com/agentscope

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-08-04

---

## 1. 今日速览

过去24小时，ZeroClaw 共产生50条 Issue 更新与50条 PR 更新，其中7个 Issue 被关闭、3个 PR 完成合并/关闭，整体活跃度维持高位。**安全与通道审批**成为今日焦点，P1 级 PR #9574 推进了多渠道（Telegram/Slack/Lark/Matrix）审批授权机制；同时 OpenAI Responses 代理支持与缓存边界修复同样以 P1 推进，反映出项目正集中修复生产环境关键路径。架构层面，v0.9.0 相关的安全、网关与持久化合同等 RFC 持续讨论中，路线图清晰。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（3 条）

| PR | 类型 | 说明 |
|---|---|---|
| [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) | Bug（已关闭） | Telegram 超时审批被错误记录为"显式拒绝"的问题已关闭，审计链完整性修复已推进 |
| [#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) | Refactor（已关闭） | OAuth refresh 重试逻辑已从各 provider 中抽出至 `oauth_common`，减少重复代码 |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Feature（已关闭） | Turn-level OTel trace correlation 已完成，`llm.call` / `tool.call` / `memory.*` span 已嵌套到单一 turn trace 下 |

### 待合并的重要 PR（部分 P1/P2）

- **#9574** — 多渠道审批授权修复（P1，高风险）：绑定 Telegram/Slack/Lark/Matrix 的工具审批至对应聊天/房间，解决审批响应者身份验证问题
- **#9472** — 停止将 `vi_verify` 注册为模型可调用的工具（P2，高风险）：修复签名凭证验证缺失的安全问题
- **#9720** — 强制 response cache 请求边界（P1，高风险）：将 modifying/cancelling `before_llm_call` hooks 限制在临时最终请求上，不重写持久化对话历史
- **#9606** — OpenAI Responses 支持运行时代理（P1）：使 Responses API 路径遵循 `model_provider.openai` proxy 配置
- **#9419** — 限速后轮换活跃凭据（P2，高风险）：绑定每次 reliable-provider 尝试到具体凭据，仅对返回 429 的凭据执行冷却
- **#8713** — `file_download` SSRF 网关（P2，超大型）：实现文件下载工具的内网访问防护

---

## 4. 社区热点

### Issue 热度 Top 5

1. **#8303 — RFC: Goal mode v1（11条评论）**
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
   讨论零Claw如何实现跨多个 agent turn 的有界用户目标追求。核心争议在于实现边界：是否包含重启交接、通道准入和模型发起的控制权。这是当前社区参与度最高的架构 RFC，代表用户对"持续目标导向 agent"的强烈需求。

2. **#8692 — Maintainer decision queue tracker（8条评论）**
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)
   建立 RFC 和设计 Issue 的维护者决策队列，反映社区对治理透明度与流程规范化的期望。

3. **#9488 — RFC: Unified attachment architecture（8条评论）**
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)
   统一 Web Chat 与 Channel 的附件架构，是 v0.9.0 的重要前置设计工作。

4. **#6157 — Nextcloud Talk 使用错误 bot message API（8条评论，已关闭）**
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)
   Nextcloud Talk 通道因使用错误的 bot API URL 导致响应失败，已关闭，应有配套修复。

5. **#7232 — Structured Observability Enhancement RFC（5条评论）**
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)
   结构化可观测性增强 RFC，与已关闭的 #6641 形成上下游关系，关注 agent/通道可归因事件与 OTel 关联。

---

## 5. Bug 与稳定性

| Issue/PR | 严重程度 | 组件 | 说明 | Fix PR |
|---|---|---|---|---|
| [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) | **S1 审计链伪造** | runtime/security | 超时审批被记录为显式拒绝，扭曲审计记录 | 已关闭 |
| [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) | **S2 降级** | channel/telegram | Telegram 渠道在模型同时返回 `tool_call` 和 `content` 时发送重复消息 | 暂无 |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | **S1 工作流阻塞** | desktop/tauri | macOS 桌面应用重启后窗口消失或空白，无法检测已授予权限 | 暂无 |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | **S1 工作流阻塞** | channel/telegram | Telegram 消息未正确识别为 directed-to-assistant，已关闭 | — |
| [#9472](https://github.com/zeroclaw-labs/zeroclaw/pull/9472) | 安全 | tool/security | `vi_verify` 被错误注册为模型可调用的工具，缺少签名凭证验证 | [#9472](https://github.com/zeroclaw-labs/zeroclaw/pull/9472) 待合并 |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | 可观测性 | runtime/security | Staged opt-in 遥测 RFC，生产环境可观测性治理 | RFC 讨论中 |

---

## 6. 功能请求与路线图信号

| RFC/Issue | 方向 | 纳入下一版本可能性 |
|---|---|---|
| **#8303** — Goal mode v1 | 有界目标驱动的跨 turn agent 工作模式 | **高** — 社区讨论最深，架构方向已明确 |
| **#9488** — Unified attachment architecture | 统一 Web/Channel 附件处理 | **高** — v0.9.0 架构核心组件 |
| **#8424** — Workspace-relative forbidden paths + `.zeroclawignore` | 工作区内部敏感文件保护 | **中高** — 安全刚需，已有 RFC 草案 |
| **#9598** — SOP capability permission contract | SOP 权限契约定义 | **中** — 与 v0.9.0 SOP 授权目标对齐 |
| **#8132** — React/Vite → Rust→Wasm 迁移 | Web UI 技术栈替换 | **待定** — 涉及重大架构变更，需更多讨论 |
| **#9005** — Inject active interaction harness context | 向 agent prompt 注入交互 harness 上下文 | **中** — 已有 accepted 标签 |
| **#9072** — 分离权威存储与可选 enricher | 内存架构解耦 | **高** — PR 已开发（stack 7/7），v0.9.0 重要组件 |
| **#9246** — ZeroCode ownership migration 保留 Todo tracker 配置 | ZeroCode 配置迁移兼容性 | **中** — 与 zerocode SOP MVP (#9682) 关联 |

---

## 7. 用户反馈摘要

- **审批链路完整性**（#9642、#9574）：用户高度关注 Telegram/Slack 审批被错误记录的审计问题，以及多渠道审批的身份验证，说明生产环境中审批可靠性是关键信任基础。
- **观测性需求强烈**（#6641、#7232、#9621）：多个 RFC 和 Issue 围绕 OTel 追踪、事件关联和产品遥测展开，反映出运维和用户需要更细粒度的 agent 行为可观测性。
- **多通道重复消息**（#9718）：Telegram 渠道在 tool_call + content 并存时产生重复消息，是直接损害用户体验的已知缺陷。
- **macOS 桌面体验不佳**（#7527）：用户报告重启后窗口消失、权限无法检测，属于桌面端关键可用性阻塞问题。
- **Nextcloud Talk API 错误**（#6157，已关闭）：bot 消息 API URL 构造错误导致响应失败，已解决，说明社区对自建部署通道的质量有持续要求。
- **敏感文件防护**（#8424）：用户反映当前 `forbidden_paths` 仅阻止工作区外部路径，`.env`、`rust-toolchain.toml` 等工作区内部敏感文件无法保护，是实际安全痛点。

---

## 8. 待处理积压

| Issue/PR | 状态 | 风险提示 |
|---|---|---|
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS 桌面窗口消失 | Open，2026-06-12 创建，**已 53 天无实质进展** | S1 严重性，阻塞 macOS 桌面用户 |
| [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) — Telegram 重复消息 | Open，今日新建 | S2 降级，直接影响用户感知 |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) — Web UI Rust→Wasm 迁移 RFC | Open，2026-06-22 创建，**已 43 天** | 涉及重大架构决策，需维护者明确方向 |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI 缓存与关键路径优化 | Open，2026-06-02 创建，**已 63 天** | PR CI 耗时 15-20 分钟影响开发者体验 |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — file_download SSRF 网关 | Open，待合并，超大型 PR | P1 安全风险，建议优先合并 |
| [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) — zerocode SOP pane MVP | Open，状态可见性 MVP | 与 #9686 关联，Run/Resume 控制已延期 |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) — Session-persistence contract 所有权 | Open tracker | 四个独立工作流修改同一契约，需维护者指定 owner |

---

**项目健康度评估**：今日活动活跃，P1 级安全与审批修复持续推进，v0.9.0 架构 RFC 讨论有序进行。主要风险点为 macOS 桌面端长期未解决的 S1 Bug（#7527）和 SSRF 修复 PR（#8713）的合并进度，建议维护者优先关注。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*