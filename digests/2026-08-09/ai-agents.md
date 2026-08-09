# OpenClaw 生态日报 2026-08-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-09 00:54 UTC

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
**日期：2026-08-09**

---

## 1. 今日速览

OpenClaw 在过去24小时内保持高活跃度，共处理 **500 条 Issue**（活跃 451，关闭 49）和 **500 条 PR**（待合并 321，已合并/关闭 179），显示项目处于快速迭代期。发布 **2 个安全补丁版本**（v2026.6.33/34），聚焦浏览器沙箱、网络边界和数据泄露防护。核心挑战集中在 Gateway 内存泄漏、子代理任务丢失和 OAuth 认证失败等稳定性问题上，社区反馈积极但痛点明确。

---

## 2. 版本发布

### v2026.6.34（2026-08-09）
**安全强化：浏览器与网络边界**
- 新增沙箱化浏览器路由
- 限制受信任 DNS 目标
- 自定义浏览器来源验证
- 回环提供程序端点拒绝不安全访问路径
- 关联 Issue: #97958, #38290, #103075, #110693

### v2026.6.33（2026-08-08）
**安全强化：网络与密钥边界**
- 限制 provider 流、Discord REST 响应、浏览器 fetch 的恶意响应大小
- OAuth 路径防护
- Telegram 凭据从诊断日志中移除
- 关联 Issue: #96989, #95412, #99428

> **迁移注意：** 两个版本均为安全补丁，无破坏性变更，直接升级即可。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（179 条）
| PR | 类型 | 说明 |
|---|---|---|
| #120698 | perf(doctor) | 保持 doctor 合约依赖轻量化，优化冷启动 |
| #120705 | fix(process) | 修复进程输出被保留策略截断时的报告问题 |
| #120640 | fix(ui) | 修复 Control UI 仪表板在视图切换时重新加载的问题 |

### 待合并的关键 PR（321 条）
- **#120343** [P1] `fix(agents)`: 将 per-agent contextTokens 限制应用到嵌入式运行上下文预算
- **#120572** [P2] `fix(agents)`: 将工具循环警告暴露给模型，修复 #120449
- **#119835** [P1] `fix(codex)`: 保留静默原生工具结果，防止 attempt-progress 预算超时
- **#119139** [P1] `fix`: 持续 admission 新到期 cron 任务，修复 #119083
- **#120717** [P1] `fix(cloud-workers)`: 修复 SSH 断开后保留已接受工作区
- **#120268** [P1] `perf(sessions)`: 将大 entry blobs 外置，解决 2.4GB SQLite 数据库多秒加载问题

> **进度评估：** 项目正推进多个 P1 级稳定性和性能修复，尤其关注嵌入运行、云工作区和会话管理的关键路径。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 状态 | 评论数 | 热度分析 |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | ✅ CLOSED | 179 | DeepSeek v4 Flash 静默失败——无回复生成，通用 fallback。用户投诉 Silent Failure 模式，已关闭但反映 LLM  provider 稳定性痛点 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 🔄 OPEN | 31 | 记忆信任标签功能请求——按来源（用户命令/网络抓取/第三方技能）标记记忆信任级别，防止记忆投毒攻击 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 🔄 OPEN | 24 | 子代理完成静默丢失——超时时无重试、无通知、无自动重启，多失败模式导致结果丢失 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 🔄 OPEN | 22 | **P0 严重** Gateway 内存泄漏：RSS 从 350MB 增长至 15.5GB，导致反复 OOM 崩溃 |
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | 🔄 OPEN | 17 | QA 工具默认值套件混淆 Codex 原生工具与 OpenClaw 动态工具对等性 |

### 用户诉求分析
- **稳定性优先：** 内存泄漏、任务丢失、OAuth 刷新失败是高频痛点
- **可观测性需求：** 用户希望清晰的任务状态跟踪和失败告警
- **安全关注：** 记忆投毒防护、凭据泄露是新兴关注点

---

## 5. Bug 与稳定性

### 🔴 P0 严重（影响核心功能）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏，RSS 350MB→15.5GB，OOM 崩溃 | 无 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 升级至 2026.7.1 后 Gateway 启动失败 | 无 |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 启动迁移预检阻止 Gateway，升级 6.11→7.1 后迁移表为空 | 无 |
| [#118923](https://github.com/openclaw/openclaw/issues/118923) | ✅ CLOSED | 安全压缩重试循环：47分钟内24次相同尝试，无熔断机制 |

### 🟠 P1 严重

| Issue | 描述 | Fix PR |
|---|---|---|
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth 刷新失败导致 Agent 挂起数小时 | 无 |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | Cron 通知投递触发 EmbeddedAttemptSessionTakeoverError | 无 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | 循环检测阻断 exec 但不终止卡住的 Agent 运行 | [#120572](https://github.com/openclaw/openclaw/pull/120572) 待合并 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 图片导致主通道卡住 ~3分钟 | 无 |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP 回环传输 Gateway 重启后不自动重连 | 无 |
| [#103231](https://github.com/openclaw/openclaw/issues/103231) | `claude-cli` 后端 `ownsNativeCompaction` 假设错误 | 无 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap 空闲时增长至 1073MB+，cron 静默失败 | 无 |

### 🟡 P2 及其他

| Issue | 描述 |
|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026.3.2 升级后 `Cannot convert undefined or null to object` |
| [#92199](https://github.com/openclaw/openclaw/issues/92199) | ✅ CLOSED | WeChat 中工具调用前的文本丢失 |
| [#72370](https://github.com/openclaw/openclaw/issues/72370) | Workspace hooks 被拒绝为 "cannot override openclaw-managed hook code" |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | Windows Scheduled Task 无法保持运行 |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram 频道分发失败 |

> **稳定性评估：** 内存管理和会话状态是主要风险点，3 个 P0 Issue 尚无合并的修复 PR，需维护者重点关注。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 诉求 | 路线图信号 |
|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 功能请求 | 记忆信任标签（按来源标记信任级别） | 安全增强方向，可能纳入后续版本 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 功能请求 | 完全动态模型发现（OpenRouter + 更多） | 当前为静态目录，用户希望动态更新 |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | 功能请求 | Topic-session families（多主题会话族） | 聊天原生助手的上下文隔离需求 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 功能请求 | 按模型使用日志（成本追踪） | 商业化/成本管控需求 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | 功能请求 | 持久任务状态表面（长运行频道） | Discord 优先，通用抽象后续 |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | 功能请求 | `before_route_inbound_message` 钩子 | 插件架构扩展需求 |
| [#49740](https://github.com/openclaw/openclaw/issues/49740) | 功能请求 | Cron 自动重试（--retry-count, --retry-delay） | 可靠性增强，已有 [#119139](https://github.com/openclaw/openclaw/pull/119139) 推进 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 功能请求 | 配置选项抑制子代理通知 | 用户体验优化 |

> **路线图判断：** 内存/稳定性优先于新功能，但安全增强（记忆标签、动态模型发现）和可观测性（使用日志、任务状态）是明确的用户诉求方向。

---

## 7. 用户反馈摘要

### 痛点 Top 5
1. **静默失败最令人沮丧**
   - DeepSeek v4 Flash 无回复生成但无错误提示（#116277，179 评论）
   - 子代理任务丢失无通知（#44925，24 评论）
   - Cron 任务静默失败（#87109）

2. **内存泄漏影响生产部署**
   - Gateway RSS 从 350MB 增长至 15.5GB（#91588）
   - 空闲状态 heap 持续增长（#87109）

3. **认证/会话状态管理脆弱**
   - OAuth 刷新失败导致 Agent 挂起数小时（#86215）
   - Codex binding tombstone 无法恢复（#116022）

4. **跨平台兼容性问题**
   - Windows Scheduled Task 无法保持运行（#91144）
   - Feishu 流式渲染极慢（#108265）
   - WeChat 中间消息丢失（#92199）

5. **工具调用结果丢失**
   - WhatsApp 图片导致消息通道卡住（#96834）
   - Slack 线程回复生成但未投递（#96692）
   - Foreground reply fence 取消早期并发消息投递（#92186）

### 用户满意点
- 安全补丁响应迅速（v2026.6.33/34 连续发布）
- 部分问题已关闭（#118923 压缩循环、#92199 WeChat 文本丢失）
- 社区贡献活跃（多贡献者参与安全修复）

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| Issue | 严重度 | 状态 | 风险 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | P0 | 🔄 OPEN，22 评论 | Gateway 内存泄漏无 Fix PR，生产环境高风险 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | P0 | 🔄 OPEN，13 评论 | 2026.7.1 升级阻塞，影响新用户 |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | P0 | 🔄 OPEN，6 评论 | 迁移预检阻塞启动 |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | P1 | 🔄 OPEN，11 评论 | OAuth 刷新失败无自动恢复机制 |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | P2 | 🔄 OPEN，7 评论 | bundle-mcp 工具策略通过但会话不加载 |
| [#87327](https://github.com/openclaw/openclaw/issues/87327) | P1 | 🔄 OPEN，6 评论 | 隔离代理运行时插件阶段卡住 |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | P1 | 🔄 OPEN，6 评论 | Feishu/Telegram 分发失败（2026.7.2-beta.4 回归） |

### 📌 建议优先级
1. **紧急：** 解决 P0 内存泄漏和启动失败问题
2. **高：** 推进 OAuth 刷新和会话恢复机制
3. **中：** 修复跨平台兼容性问题（Windows、Feishu）

---

**报告生成时间：** 2026-08-09  
**数据来源：** GitHub API (openclaw/openclaw)  
**分析师：** Agnes-2.0-Flash (Sapiens AI)

---

## 横向生态对比



# AI 智能体开源生态横向对比分析报告
**日期：2026-08-09 | 分析师：Agnes-2.0-Flash (Sapiens AI)**

---

## 1. 生态全景

2026年8月，个人AI助手开源生态呈现**多极分化、快速迭代**的态势。OpenClaw、Hermes Agent、IronClaw、CoPaw、ZeroClaw构成第一梯队，日均处理50-500条Issue/PR，处于架构重构与稳定性攻坚期；NanoBot、PicoClaw、NanoClaw、Moltis、LobsterAI为第二梯队，活跃度中等，聚焦垂直场景打磨；NullClaw、TinyClaw、ZeptoClaw当日无活动，生态位待观察。**安全加固**（沙箱、认证、凭据泄露防护）与**稳定性修复**（内存泄漏、任务丢失、MCP连接）成为各项目的共同焦点，反映生态正从"功能竞赛"转向"可靠性竞争"。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃/关闭) | PR (待合并/已合) | Release | 活跃度 | 健康度 |
|------|----------------------|-----------------|---------|--------|--------|
| **OpenClaw** | 500 (451/49) | 321/179 | v2026.6.33/34 (2个安全补丁) | 🔥 高 | 🟡 快速迭代期，稳定性挑战集中 |
| **Hermes Agent** | 50 (38/12) | 35/15 | 无 | 🔥 高 | 🟢 良好，平台稳定性压力显著 |
| **IronClaw** | 30 (6/24) | 18/32 | 无 | 🔥 高 | 🟢 良好，技术债清理加速 |
| **CoPaw** | 18 | 50 | 无 | 🔥 高 | 🟢 稳定迭代期 |
| **ZeroClaw** | 50 | 50 | 无 | 🔥 高 | 🟡 高活跃，技术债集中暴露 |
| **NanoBot** | 5 | 4/9 | 无 | 🟡 中高 | 🟢 良好 |
| **NanoClaw** | 8 (5/3) | 3/6 | 无 | 🟡 中等 | 🟢 良好 |
| **PicoClaw** | 2 (1/1) | 0/4 | 无 | 🟡 中等 | ⚠️ 3/5，PR积压严重 |
| **Moltis** | 2 | 1 | 无 | 🟡 中等 | 🟢 良好 |
| **LobsterAI** | 1 | 3 | 无 | 🟢 低 | 🟡 中等偏稳 |
| **NullClaw** | — | — | — | ⚪ 无 | — |
| **TinyClaw** | — | — | — | ⚪ 无 | — |
| **ZeptoClaw** | — | — | — | ⚪ 无 | — |

---

## 3. OpenClaw 在生态中的定位

**规模优势**：OpenClaw以500条Issue/PR的数量级显著领先，社区规模约为第二梯队（Hermes/IronClaw约50条）的**10倍**，是生态中活跃度最高的项目。

**技术路线差异**：
- OpenClaw：**Gateway架构**，聚焦浏览器沙箱、网络边界、OAuth认证等基础设施安全，已发布2个连续安全补丁版本
- Hermes Agent：桌面应用优先（macOS/Windows），强调Session生命周期与压缩算法
- IronClaw：Reborn架构重构期，关注多智能体审计、通道迁移、能力生命周期治理
- ZeroClaw：Rust原生，架构瘦身+安全加固并行，SOP自动化工作流为特色

**社区规模对比**：OpenClaw的Issue评论热度最高（#91588内存泄漏22评论、#116277静默失败179评论），反映其用户基数大、生产部署场景多；其他项目Issue评论数普遍在1-18条，社区规模较小但反馈更集中。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **MCP稳定性** | NanoBot, Hermes Agent, CoPaw, ZeroClaw | NanoBot #5300 MCP连接失败导致进程崩溃；Hermes #81995 stdio MCP冷启动死进程挂起300s；CoPaw #6822/#6836 MCP超时与恢复；ZeroClaw #8731 MCP僵尸进程累积 |
| **Token可观测性/成本追踪** | NanoBot, IronClaw, ZeroClaw | NanoBot #5266/#5293 按迭代记录token消耗；IronClaw #6989 Token计量错误（引用字符串vs实际内容）；ZeroClaw #9816/#9573 Anthropic成本报告$0.00、多provider别名定价失效 |
| **静默失败与可观测性** | OpenClaw, Hermes Agent, ZeroClaw | OpenClaw #116277 DeepSeek静默失败179评论、#44925子代理任务丢失；Hermes #70846压缩清除用户可见历史；ZeroClaw #9805 SOP headless模式卡死 |
| **跨平台兼容性** | OpenClaw, Hermes Agent, NanoClaw, Moltis | OpenClaw #91144 Windows Scheduled Task、#108265 Feishu流式慢；Hermes #63047 macOS 27 beta卡死、#81969 Windows更新破坏；NanoClaw #3177 Docker文件系统锁竞争；Moltis #1185 Apple Container状态误判 |
| **安全加固** | OpenClaw, NanoClaw, ZeroClaw, IronClaw | OpenClaw v2026.6.33/34 浏览器沙箱/DNS限制/OAuth防护；ZeroClaw #9348 WhatsApp安全漏洞、#9815 forbidden_paths失效、#9387审批无身份验证；NanoClaw #3206附件安全过滤；IronClaw #7391 SafetyLayer断链 |
| **会话/记忆管理** | Hermes Agent, OpenClaw, ZeroClaw | Hermes #57240 fork丢失reasoning字段、#82001 flush后session身份丢失；OpenClaw #7707 记忆信任标签；ZeroClaw #8054 多渠道工具可用性不一致 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | 浏览器沙箱、网络边界、多通道聚合（Discord/Telegram/WhatsApp/飞书） | 生产级部署、多平台消息聚合场景 | Gateway架构，重基础设施安全，OAuth/DNS/沙箱为特色 |
| **Hermes Agent** | 桌面应用、Session压缩、Memory tiering、Browser Use集成 | 个人桌面用户、macOS/Windows开发者 | TUI/Desktop优先，压缩算法与session生命周期为核心技术点 |
| **IronClaw** | 多智能体审计、Reborn通道迁移、Web Debug Inspector、Slack/Telegram渐进预览 | 企业级多智能体协作、调试需求强的用户 | Rust原生，Reborn架构重构，强调身份绑定与能力生命周期治理 |
| **CoPaw** | 模型回退/冷却、多提供商扩展（Volcengine/MiMo/NVIDIA NIM/AnySearch）、MCP超时管理 | 国内用户、多模型切换需求 | Tauri桌面应用，提供商扩展与MCP稳定性为方向 |
| **ZeroClaw** | SOP自动化工作流、OpenAI兼容端点、架构瘦身（移除废弃crate） | 自动化工作流用户、Rust生态爱好者 | Rust原生，SOP无头执行为特色，安全加固与crate清理并行 |
| **NanoBot** | Token可观测性、临时聊天模式、WebUI交互 | 成本敏感型用户、快速试错场景 | 强调token诊断日志，临时会话支持并行 |
| **NanoClaw** | 第三方服务集成（Strava）、远程MCP、Mattermost渠道 | 渠道扩展需求用户 | 生态集成导向，Strava/Mattermost为新增亮点 |
| **Moltis** | 容器沙盒（Docker/Apple Container）、文件系统工具fallback | 容器化部署用户 | 沙盒环境适配为核心，路径转换与回归测试为特色 |
| **LobsterAI** | LiteLLM网关集成、工具默认配置覆盖 | 多模型接入、工具可控性需求用户 | 轻量级，LiteLLM降低多模型接入成本 |
| **PicoClaw** | IRC/OAuth 2.1/Deltachat/Simplex渠道 | 小众消息协议用户 | 渠道扩展导向，但PR积压严重 |

---

## 6. 社区热度与成熟度

### 第一梯队：快速迭代期（高活跃，稳定性攻坚）
| 项目 | 活跃度 | 特征 |
|------|--------|------|
| OpenClaw | 🔥🔥🔥 | 500 Issue/PR，安全补丁连续发布，P0内存泄漏无修复，快速迭代但技术债累积 |
| Hermes Agent | 🔥🔥🔥 | 50 Issue/PR，PR合并率高（15/50），平台稳定性问题集中（macOS/Windows） |
| IronClaw | 🔥🔥🔥 | 30 Issue/50 PR，Reborn架构收尾，P1安全/成本问题无修复PR |
| CoPaw | 🔥🔥🔥 | 18 Issue/50 PR，v2.1.0-beta.2稳定性收敛，MCP/前端性能为焦点 |
| ZeroClaw | 🔥🔥🔥 | 50 Issue/PR，架构重构期，11个P1安全/稳定性问题密集爆发 |

### 第二梯队：质量巩固期（中活跃，垂直打磨）
| 项目 | 活跃度 | 特征 |
|------|--------|------|
| NanoBot | 🔥🔥 | 5 Issue/9 PR，token可观测性快速响应，MCP崩溃为新增风险点 |
| NanoClaw | 🔥🔥 | 8 Issue/6 PR，生态集成稳健，Docker/附件问题待解 |
| Moltis | 🔥🔥 | 2 Issue/1 PR，容器沙盒专项，快速闭环能力突出 |
| PicoClaw | 🔥 | 2 Issue/4 PR，PR合并率0%，积压严重，健康度3/5 |
| LobsterAI | 🔥 | 1 Issue/3 PR，低强度活跃，stale积压需清理 |

### 第三梯队：停滞期
| 项目 | 特征 |
|------|------|
| NullClaw | 24小时无活动 |
| TinyClaw | 24小时无活动 |
| ZeptoClaw | 24小时无活动 |

---

## 7. 值得关注的趋势信号

### 信号1：MCP稳定性成为生态级痛点
**涉及项目**：NanoBot、Hermes Agent、CoPaw、ZeroClaw
**解读**：4个项目同时报告MCP连接失败、僵尸进程、超时未处理等问题，反映MCP协议在复杂生产环境下的健壮性不足。建议开发者：
- 优先实现MCP连接的超时控制与自动重试
- 避免单点MCP故障导致整个网关崩溃（NanoBot #5300教训）
- 关注stdio MCP的进程生命周期管理（Hermes #81995、ZeroClaw #8731）

### 信号2：Token成本可观测性需求爆发
**涉及项目**：NanoBot、IronClaw、ZeroClaw
**解读**：3个项目同时暴露成本追踪失效（NanoBot百万token无诊断、IronClaw引用字符串误估、ZeroClaw Anthropic报告$0.00），反映当前生态在成本管控层面存在系统性缺陷。建议：
- 将token消耗日志作为Agent迭代的标配能力
- 避免依赖引用长度估算，需对接Provider实际计费API
- 支持多Provider别名场景下的定价查找（ZeroClaw #9573）

### 信号3：安全配置"锁屏感"误导用户
**涉及项目**：OpenClaw、NanoClaw、ZeroClaw、IronClaw
**解读**：多项目出现"配置看似安全但实际无效"的漏洞（ZeroClaw WhatsApp mode=business全开放、IronClaw SafetyLayer断链、NanoClaw附件过滤绕过），反映安全设计存在认知偏差。建议：
- 安全配置需有明确的生效验证机制
- 避免"默认关闭但实际未拦截"的伪安全设计
- 建立安全配置的自动化测试覆盖

### 信号4：静默失败是用户最大痛点
**涉及项目**：OpenClaw、Hermes Agent、ZeroClaw
**解读**：OpenClaw #116277（179评论）、Hermes #70846（压缩清历史）、ZeroClaw #9805（SOP卡死）均反映用户对"无错误提示但功能失效"的强烈不满。建议：
- 建立任务状态的显式告警机制（成功/失败/超时）
- 子代理/后台任务需有失败重试与通知
- 避免静默降级（如DeepSeek失败无fallback提示）

### 信号5：跨平台兼容性仍是高频风险
**涉及项目**：OpenClaw、Hermes Agent、NanoClaw、Moltis
**解读**：Windows Scheduled Task、macOS FTS索引、Docker文件系统、Apple Container状态检测等问题横跨4个项目，反映AI Agent部署环境的碎片化严重。建议：
- 关键路径需覆盖多平台CI测试
- 容器部署需明确文件系统限制（如VirtioFS锁竞争）
- 关注OS级变更（如npm 11/12 allowScripts）的兼容性

---

**报告总结**：2026年8月，AI智能体开源生态从"功能扩张"转向"可靠性攻坚"。OpenClaw以规模领先但稳定性压力最大；Hermes/IronClaw/CoPaw/ZeroClaw处于架构重构期，技术债集中暴露；NanoBot/Moltis等垂直项目快速响应但需警惕新增风险。MCP稳定性、Token可观测性、安全配置有效性、静默失败防护、跨平台兼容性是跨项目的

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 — 2026-08-09

## 1. 今日速览

NanoBot 在过去24小时内保持中高强度活跃：新增 5 个 Issues、9 个 PR（4 个已合并），无新版本发布。核心进展集中在 **token 可观测性**（#5293 已合）、**WebUI 交互修复**（#5294、#5252 已合）及**死代码清理**（#5296 已合）。MCP 稳定性问题（#5300）引发关注，暴露了异常处理路径的深层缺陷，预计将成为下一阶段重点修复方向。整体项目健康度良好，维护者响应及时。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（4 条）

| PR | 标题 | 推进内容 |
|----|------|----------|
| [#5293](https://github.com/HKUDS/nanobot/pull/5293) | `feat(usage): log per-iteration token diagnostics` | 实现了单次 Agent 迭代的 token 消耗日志，直接响应 #5266 的用户诉求，为排查"2小时消耗百万 token"问题提供基础能力。 |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | `feat(webui): add temporary chat mode` | 新增临时聊天模式，支持多会话并行、不持久化历史记录，满足用户快速试错场景。 |
| [#5296](https://github.com/HKUDS/nanobot/pull/5296) | `refactor: remove verified dead code` | 清理 19 个内部死代码单元和 11 个测试专属 seam，降低维护负担，无行为变更。 |
| [#5294](https://github.com/HKUDS/nanobot/pull/5294) | `fix(webui): prevent image hover clipping` | 修复 WebUI 图片悬停时被容器裁剪的视觉回归，保留缩放光标与键盘聚焦样式。 |

**整体进度评估**：今日合并的 PR 以 **可观测性增强** 和 **WebUI 体验修复** 为主，项目向"更透明、更稳定"的方向稳步演进。

---

## 4. 社区热点

### 最活跃 Issue
- **[#5266](https://github.com/HKUDS/nanobot/issues/5266)** — `Logs about token consumption` | **13 条评论** | 创建于 2026-08-06
  - 用户反映 nanobot 在无活动状态下 2 小时内消耗百万 token，请求按调用粒度记录 token 消耗。该 Issue 已驱动 #5293（已合）和 #5299（待合并），是今日社区关注焦点。

### 其他热点
- **[#5300](https://github.com/HKUDS/nanobot/issues/5300)** — `MCP连接失败未隔离+anyio cancel scope跨任务崩溃` | 创建即上报严重稳定性问题，远程 MCP 返回 HTTP 530 后触发 `RuntimeError`，导致网关进程崩溃、任务泄漏、CPU 飙升。
- **[#5297](https://github.com/HKUDS/nanobot/issues/5297)** — `希望mcp增加oauth网页授权功能` | 用户需要配置需网页 OAuth 授权的 MCP（如 XMind API），当前项目不支持此场景。

**诉求分析**：社区对 **token 成本控制** 和 **MCP 稳定性/兼容性** 的诉求高度集中，反映出用户正在将 nanobot 用于生产级工作负载，对可靠性和可观测性要求提升。

---

## 5. Bug 与稳定性

| 级别 | Issue/PR | 描述 | Fix 状态 |
|------|----------|------|----------|
| 🔴 高 | [#5300](https://github.com/HKUDS/nanobot/issues/5300) | MCP 连接失败导致 anyio cancel scope 跨任务崩溃，网关进程卡死/崩溃，任务泄漏，CPU 异常飙升 | 暂无 PR |
| 🟡 中 | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose 部署失败：`entrypoint.sh: Permission denied` | 暂无 PR |
| 🟢 低 | — | [#5294](https://github.com/HKUDS/nanobot/pull/5294) 已修复 WebUI 图片悬停裁剪 | ✅ 已合 |

**稳定性评估**：#5300 是今日最严重的发现，暴露了 MCP 客户端在异常路径下的根本性设计缺陷（cancel scope 跨任务），建议维护者优先处理。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 相关 PR | 纳入可能性 |
|------|-------|---------|------------|
| MCP OAuth 网页授权 | [#5297](https://github.com/HKUDS/nanobot/issues/5297) | 无 | ⚠️ 需评估，涉及 gateway 架构变更 |
| Model-agnostic 计算机控制工具 | — | [#4276](https://github.com/HKUDS/nanobot/pull/4276)（待合并） | ✅ 高，PR 已就绪 |
| MCP schemas 预算优化 | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | 无 | ⚠️ 中等，大型 tool set 场景需求明确 |
| 最近 token 使用详情展示 | — | [#5299](https://github.com/HKUDS/nanobot/pull/5299)（待合并） | ✅ 高，直接响应 #5266 |

**路线图信号**：token 可观测性是明确的短期优先级（#5293 已合、#5299 待合）；MCP 稳定性与 OAuth 支持是中期重点；计算机控制工具（#4276）已等待较久，有望纳入下一版本。

---

## 7. 用户反馈摘要

- **痛点**：
  - Token 消耗不可见，无法定位高消耗来源（#5266，13 条评论）
  - 远程 MCP 服务不可达时，整个网关进程崩溃，影响其他功能（#5300）
  - Docker 部署存在权限配置问题，阻碍新手上手（#5295）
  - 需要网页 OAuth 授权的 MCP 服务无法配置（#5297）

- **满意点**：
  - 临时聊天模式（#5252 已合）满足快速试错需求
  - token 诊断日志功能（#5293 已合）被明确提出并快速响应

- **使用场景**：用户已将 nanobot 用于生产级工作负载，涉及远程 MCP 服务集成、Docker 部署、大规模 tool set 管理。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 建议 |
|------|------|------|------|------|
| 🐛 Bug | [#5300](https://github.com/HKUDS/nanobot/issues/5300) | MCP 连接失败导致崩溃 + 任务泄漏 | 0 评论，无 PR | **优先级 P0**，涉及进程稳定性 |
| 🐛 Bug | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose 部署权限失败 | 2 评论，无 PR | 快速修复 entrypoint.sh 权限 |
| 💡 功能 | [#5297](https://github.com/HKUDS/nanobot/issues/5297) | MCP 增加 OAuth 网页授权 | 2 评论，无 PR | 需架构讨论 |
| 💡 功能 | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | MCP schemas 预算优化 | 0 评论，无 PR | 可结合 #5266 讨论 |
| 🔀 PR | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 修复后台任务覆盖会话数据 | 待合并，标注 P0 | 建议优先审查 |
| 🔀 PR | [#5206](https://github.com/HKUDS/nanobot/pull/5206) | 修复流式响应重复日志 | 待合并，标注 P2 | 低优先级 |
| 🔀 PR | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 计算机控制工具 | 待合并，长期未合 | 建议评估合并 |
| 🔀 PR | [#5292](https://github.com/HKUDS/nanobot/pull/5292) | Matrix 回复修复 | 待合并 | 建议审查 |
| 🔀 PR | [#5299](https://github.com/HKUDS/nanobot/pull/5299) | 显示最近 token 使用详情 | 待合并 | 建议优先合并 |

---

**健康度评分**：🟢 良好 — 维护者响应及时，今日合并 4 个 PR，但 MCP 稳定性（#5300）和部署体验（#5295）需重点关注。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 — 2026-08-09

## 1. 今日速览

过去24小时 Hermes Agent 项目保持高活跃度：共处理 50 条 Issues（38 新开/活跃，12 已关闭）和 50 条 PRs（35 待合并，15 已合并/关闭）。项目核心关注点集中在**桌面应用稳定性**（macOS/Windows 双重平台问题）、**Session 状态管理**（压缩/分叉导致的数据丢失）以及 **MCP 工具链隔离性**。无新版本发布，但多个 P1 级 Bug 的修复 PR 已进入合并队列，整体健康度良好但稳定性压力显著。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|----|------|------|
| [#82116](https://github.com/NousResearch/hermes-agent/pull/82116) | Bugfix | 修复压缩算法对 stale thinking 的预算浪费（#73624），19-24% 的 tail budget 此前被无效占用，现仅对最新 assistant turn 计费 |
| [#57248](https://github.com/NousResearch/hermes-agent/pull/57248) | Bugfix | 修复 session fork/branch 时 reasoning 字段（`reasoning_details`/`codex_reasoning_items`）丢失和双重编码问题 |
| [#82113](https://github.com/NousResearch/hermes-agent/pull/82113) | Bugfix | 修复 HUD band 被 tool rows/notice 撑爆导致用户看不到回复内容的布局问题 |
| [#45014](https://github.com/NousResearch/hermes-agent/pull/45014) | Feature | 使 background review toolsets 可配置（默认仍为 `["memory", "skills"]`） |
| [#73730](https://github.com/NousResearch/hermes-agent/pull/73730) | Bugfix | 同上 #82116 的独立修复路径，关闭 #73624 |

**整体推进**：今日 PR 合并主要聚焦于 **session 状态一致性和压缩算法准确性**，两个高优先级 issue（#73624、#57240）的同源修复均已合入，session 生命周期管理的核心缺陷正在逐步补齐。

---

## 4. 社区热点

### 评论最活跃的 Issues

| Issue | 评论数 | 标签 | 核心诉求 |
|-------|--------|------|----------|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | 18 | P1, Bug, macOS | 桌面应用在 macOS 27 beta 上约 5 条消息后完全卡死，连 Settings 也锁死 |
| [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) | 6 | Security, P3 | Skills Guard 默认关闭时 agent 编写的 skills 可绕过内容扫描进入每个 session 的 system prompt |
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) | 6 | P2, Bug, Cron | Cron script-path guard 错误拒绝 default profile scripts 目录下的脚本 |
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | 6 | P1, Bug, Windows | Windows 更新反复破坏环境，用户丧失产品信任 |
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | 6 | P1, Bug, macOS | 桌面更新产生重复 `hermes-setup` 实例导致更新窗口假死 |

**热点分析**：社区最强烈的诉求集中在**平台稳定性**（macOS/Windows 更新机制）和**数据安全边界**（skills guard 绕过）。#63047 的高评论数反映该阻塞性问题已长期存在（7月12日创建）且影响面广。

---

## 5. Bug 与稳定性

### P1 — 高严重程度（影响核心体验）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | macOS 27 beta 桌面应用消息对话约 5 轮后完全无响应 | 暂无 |
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | Windows 更新导致环境反复损坏，用户信任危机 | [#82118](https://github.com/NousResearch/hermes-agent/pull/82118) / [#81983](https://github.com/NousResearch/hermes-agent/pull/81983)（allowScripts 修复） |
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | 桌面更新产生重复 hermes-setup 实例，假死窗口遮挡真实更新进程 | 暂无 |
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | Agent flush 后压缩导致 session 身份丢失，用户误收到"磁盘满"错误提示 | 暂无 |

### P2 — 中等严重程度

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#70846](https://github.com/NousResearch/hermes-agent/issues/70846) | 压缩操作同时清除用户可见消息历史 | 暂无 |
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) | Cron profile-scoped jobs 被错误拒绝 | 暂无 |
| [#66978](https://github.com/NousResearch/hermes-agent/issues/66978) | TUI 每次启动都触发 npm install（性能/体验问题） | 暂无 |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | macOS 上 state.db FTS 索引损坏，影响 session 搜索 | 暂无 |
| [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) | lifecycle_guard 对 ELF 二进制路径报 embedded null byte | 暂无 |
| [#81162](https://github.com/NousResearch/hermes-agent/issues/81162) | 异步 TTS 语音回复阻塞文本响应 | 暂无 |
| [#81995](https://github.com/NousResearch/hermes-agent/issues/81995) | stdio MCP 冷启动时死进程挂起 in-flight 调用达 300s | 暂无 |
| [#82074](https://github.com/NousResearch/hermes-agent/issues/82074) | Podman + SELinux 环境下 skills 目录自动挂载不可访问 | 暂无 |

### P3 — 低严重程度

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#78807](https://github.com/NousResearch/hermes-agent/issues/78807) | DeepSeek V4 Flash 0731 无限推理循环 | 暂无 |
| [#43997](https://github.com/NousResearch/hermes-agent/issues/43997) | npm 11 allowScripts 警告影响 hermes update 体验 | [#81527](https://github.com/NousResearch/hermes-agent/pull/81527) |
| [#81430](https://github.com/NousResearch/hermes-agent/issues/81430) | Telegram session 中 memory 状态报告与实际写入不一致 | 暂无 |
| [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) | ANSI CSI/SGR 序列绕过 redact 前缀掩码，导致 token 泄露 | 暂无 |
| [#77833](https://github.com/NousResearch/hermes-agent/issues/77833) | Kanban WS handler 断开连接时泄漏 poll 任务，CPU 100%+ | 暂无 |
| [#72641](https://github.com/NousResearch/hermes-agent/issues/72641) | Windows /diff 因编码问题崩溃 | 已关闭 |

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 已有 PR | 纳入可能性 |
|-------|----------|---------|------------|
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | 内置 memory 的 lifecycle 管理 UX（inspection/dedup/conflict detection） | 暂无 | 高 — 近期社区呼声强 |
| [#14859](https://github.com/NousResearch/hermes-agent/issues/14859) | CLI/TUI 状态栏显示当前 session 标题 | 已关闭 | 已采纳 |
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) | ToolCallStormBreaker — 抑制重复 tool-call 循环 | 暂无 | 中 — 长期 RFC，需决策 |
| [#49103](https://github.com/NousResearch/hermes-agent/issues/49103) | Cmd+K 统一搜索（files/sessions/skills） | 暂无 | 中 — 体验类增强 |
| [#72337](https://github.com/NousResearch/hermes-agent/issues/72337) | Cron 交付 UI 改为多选 checkbox | 已关闭 | 已采纳 |
| [#51152](https://github.com/NousResearch/hermes-agent/pull/51152) | Memory core/extended tiering + `[core]` prefix | 待合并 | 高 — 已开发完成，等待审查 |
| [#27040](https://github.com/NousResearch/hermes-agent/pull/27040) | 通用 `voice_server` gateway 平台 | 待合并 | 中 — 架构性改动，需决策 |
| [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | `claude-agent-sdk` 作为一等公民 runtime（订阅 OAuth） | 待合并 | 高 — 官方 SDK 集成，战略级 |
| [#81958](https://github.com/NousResearch/hermes-agent/pull/81958) | Browser Use CLI 3.0 mode — 单一 driver 替代 12 个 browser_* 工具 | 待合并 | 中 — 依赖第三方 CLI |

---

## 7. 用户反馈摘要

**核心痛点**：
- **更新机制不可靠**：Windows 用户反映"每次更新都破坏环境"（#81969），macOS 用户遇到更新后重复进程假死（#75778），npm 11/12 的 `allowScripts` 策略变化导致安装失败（#43997、#62171）
- **Session 生命周期管理有缺陷**：压缩清除用户可见历史（#70846）、fork 丢失 reasoning 字段（#57240）、flush 后 session 身份丢失误报磁盘满（#82001）
- **多 Profile 隔离不足**：OpenViking memory plugin 在多 profile 场景下凭据泄漏（#82117 → PR #82119）
- **平台兼容性问题集中**：Windows 编码（#72641）、Podman SELinux（#82074）、macOS FTS 索引损坏（#63386）

**正面反馈**：
- Browser Use 单一 driver 重构（#81958）和 claude-agent-sdk 集成（#65982）显示项目向更简洁的架构演进
- Memory tiering（#51152）和 background review 可配置化（#45014）改善系统 prompt 效率

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 时长 | 优先级 | 备注 |
|----------|----------|------|--------|------|
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) | 2026-05-30 | 3个月+ | P3 | ToolCallStormBreaker RFC，长期未决策 |
| [#57752](https://github.com/NousResearch/hermes-agent/issues/57752) | 2026-07-03 | 1个月+ | P3 | Session-DB auto-prune+VACUUM 默认关闭，无用户提示 |
| [#62171](https://github.com/NousResearch/hermes-agent/issues/62171) | 2026-07-10 | 1个月+ | P3 | npm 12 稳定版破坏 Linux Desktop 更新路径 |
| [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) | 2026-08-04 | 5天 | P3 | Skills Guard 绕过安全问题，defense-in-depth 建议 |
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | 2026-08-04 | 5天 | P3 | Memory lifecycle UX，用户需求明确 |
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | 2026-07-12 | 1个月+ | P1 | macOS 桌面完全无响应，18条评论，高优先级 |
| [#51152](https://github.com/NousResearch/hermes-agent/pull/51152) | 2026-06-23 | 1个半月+ | P3 | Memory tiering PR，等待审查合并 |
| [#65982](https://github.com/N

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 — 2026-08-09

## 1. 今日速览

过去24小时 PicoClaw 项目保持中等活跃度：Issues 新增/活跃 2 条、关闭 1 条，PR 新增 4 条但合并率为 0。社区在消息渠道集成（IRC 长消息、OAuth 2.1）和底层稳定性（WhatsApp 连接、CPU 优化）方面均有反馈。整体项目处于"需求积累期"，功能请求多于实际交付，需关注积压清理节奏。

---

## 2. 版本发布

今日无新版本发布（Releases: 0）。

---

## 3. 项目进展

**合并/关闭 PR：0 条**

今日无 PR 进入主分支，项目代码交付节奏偏慢。Issue #3292（CPU 占用高）已关闭，表明该问题已有解决路径，但具体修复未通过 PR 合并体现，需关注是否已在其他分支中完成。

---

## 4. 社区热点

| Issue/PR | 类型 | 评论数 | 热度分析 |
|----------|------|--------|----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature | 4 | IRC 长消息支持，用户诉求明确，涉及 IRCv3 协议兼容性 |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Feature | 2 | OAuth 2.1 for MCP，延续 #2546 需求，属增强型功能 |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | Bug Fix | - | WhatsApp 客户端版本过期（405），直接影响通道可用性 |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | Bug Fix | - | 动态上下文位置调整，涉及 prefix caching 性能优化 |

**热点分析：**
- **#3287** 评论最多，反映用户对多平台长消息兼容性的持续关注。IRC 协议 512 字节限制在 modern messaging 场景下已成为痛点。
- **#3320 / #3321** 均为 grrowl 于昨日提交的修复 PR，聚焦 WhatsApp 通道稳定性和缓存性能，属于关键基础设施修复，值得优先 review。

---

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 | Fix PR |
|------|----------|------|--------|
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) — 聊天界面输入框聚焦时 CPU 占用过高 | 中 | ✅ 已关闭 | 待确认 |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) — WhatsApp 连接被拒（Client outdated 405） | 高 | 🔄 待合并 | #3320 |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) — prefix caching 失效导致性能退化 | 中 | 🔄 待合并 | #3321 |

**稳定性评估：** 存在 2 个待合并的高优先级修复 PR，合并后将显著改善 WhatsApp 通道可用性和缓存性能。#3292 虽已关闭，但需确认修复是否已合入主分支。

---

## 6. 功能请求与路线图信号

| 请求 | Issue/PR | 类型 | 纳入下一版本可能性 |
|------|----------|------|-------------------|
| IRC 长消息支持（IRCv3） | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Nice-to-Have | 中 — 有明确技术方案，但 PR 未提交 |
| OAuth 2.1 for MCP servers | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Enhancement | 低 — 依赖 #2546，属后续迭代 |
| Deltachat 重构（-200 LOC） | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Refactor | 中 — PR 已提交但标记 stale，需维护者介入 |
| Simplex channel 支持 | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | New Feature | 低 — 长期 stale，优先级待评估 |

**路线图信号：** 社区对消息渠道扩展（Simplex、Deltachat）和协议升级（OAuth 2.1、IRCv3）有持续需求，但 PR 积压严重，建议维护者明确优先级。

---

## 7. 用户反馈摘要

**痛点：**
- **IRC 长消息截断**：用户反馈 IRCv3 环境下超过 512 字节的消息被自动分割，导致 AI 理解断裂（#3287）
- **CPU 开销**：Firefox 下聊天界面输入框聚焦时 CPU 占用过高，影响使用体验（#3292，已关闭）
- **WhatsApp 连接失效**：whatsmeow 客户端版本过期导致连接被拒，且无自动重连机制（#3320）

**满意点：**
- 当前无正面反馈记录，社区反馈以问题驱动为主

**使用场景：**
- 多平台消息聚合（IRC、WhatsApp、Deltachat、Simplex）
- AI 对话助手集成（MCP servers、prefix caching 优化）

---

## 8. 待处理积压

| 项目 | 标签 | 创建日期 | 最后更新 | 风险 |
|------|------|----------|----------|------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) — IRC 长消息 | stale | 2026-07-22 | 2026-08-08 | 中 — 用户需求明确但无 PR |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) — OAuth 2.1 | stale | 2026-07-30 | 2026-08-08 | 低 — 增强型功能 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) — Deltachat 重构 | stale | 2026-07-03 | 2026-08-08 | 高 — PR 超 5 周未 review |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) — Simplex channel | stale | 2026-06-27 | 2026-08-08 | 高 — PR 超 6 周未 review |

**建议：**
- 优先 review #3320 和 #3321（关键修复）
- 尽快响应 #3222 和 #3193（长期 stale PR）
- 关注 #3287 是否需社区贡献或官方实现

---

**项目健康度评分：⭐⭐⭐☆☆（3/5）**

- 优点：Bug 修复 PR 及时提交，社区反馈活跃
- 风险：PR 合并率 0%，多处 stale 积压，交付节奏偏慢

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报
**日期：2026-08-09** | 数据来源：GitHub API

---

## 1. 今日速览

过去24小时内，NanoClaw 项目保持中等活跃度，共处理 8 个 Issues（5 新开/活跃、3 已关闭）和 6 个 PRs（3 待合并、3 已合并/关闭）。今日无新版本发布。项目重点修复了 Discord 审批按钮失效和 Docker 文件系统锁竞争两个关键问题，同时完成了 Mattermost 渠道集成的 v2 架构适配。整体项目健康状况良好，社区贡献者持续活跃。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 3 个，主要推进以下方向：

| PR | 状态 | 作者 | 说明 |
|----|------|------|------|
| [#2777](https://github.com/nanocoai/nanoclaw/issues/2777) | ✅ 已合并 | clementdecoligny | 新增 `/add-strava` 技能，集成官方 Strava MCP 端点，支持 OAuth 自动刷新 |
| [#2776](https://github.com/nanocoai/nanoclaw/issues/2776) | ✅ 已合并 | clementdecoligny | 扩展 `McpServerConfig` 支持远程 HTTP/SSE MCP 服务器，增强渠道灵活性 |
| [#3199](https://github.com/nanocoai/nanoclaw/issues/3199) | ✅ 已合并 | wakqasahmed | Mattermost 渠道集成（v2 ChannelAdapter 架构），替代已废弃的旧版实现 |

**进展评估**：今日合并的 PR 覆盖了**第三方服务集成**（Strava）和**渠道扩展**（Mattermost）两个方向，项目生态正在稳步扩充。远程 MCP 服务器支持（#2776）为后续更多外部工具接入奠定基础。

---

## 4. 社区热点

今日讨论最活跃的问题及分析：

### 🔴 Issue #3201 — Discord 审批按钮点击无响应
- **状态**：已关闭 | **作者**：churchcrm-hazel | **评论**：2
- **链接**：[nanocoai/nanoclaw Issue #3201](https://github.com/nanocoai/nanoclaw/issues/3201)
- **分析**：owner 角色在 Discord 中点击 Approve 按钮时，审批请求未被记录，导致请求被自动拒绝。该问题直接影响管理员工作流，属于高优先级 Bug。相关修复 PR [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) 待合并，通过剥离 webhook `custom_id` 中的 `\n` 分隔符解决。

### 🔴 Issue #3177 — Docker 跨挂载文件系统锁竞争
- **状态**：已关闭 | **作者**：DawoudIO | **评论**：1
- **链接**：[nanocoai/nanoclaw Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177)
- **分析**：SQLite DELETE journal mode 在 VirtioFS 挂载下不生效，导致 29,000+ readonly 错误和间歇性投递失败。该问题影响 Docker 部署场景的稳定性，修复已合并。

### 🟡 Issue #3206 — Google Chat 附件静默丢弃
- **状态**：已开启 | **作者**：codybuell | **评论**：0
- **链接**：[nanocoai/nanoclaw Issue #3206](https://github.com/nanocoai/nanoclaw/issues/3206)
- **分析**：`extractAttachmentFiles` 函数中的 `isSafeAttachmentName` 检查拒绝包含 `/` 或 `\` 的 message ID，导致 Google Chat 等渠道的附件无法处理。用户诉求明确，但尚无修复 PR。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | 修复 PR |
|--------|-------|------|------|---------|
| 🔴 高 | [#3201](https://github.com/nanocoai/nanoclaw/issues/3201) | Discord 审批按钮不注册点击 | 已关闭 | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) (待合并) |
| 🔴 高 | [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) | Docker 文件系统锁竞争导致 29k+ 错误 | 已关闭 | 已修复 |
| 🟡 中 | [#3206](https://github.com/nanocoai/nanoclaw/issues/3206) | Google Chat 附件因 message ID 含路径分隔符被丢弃 | 已开启 | 无 |
| 🟡 中 | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal 渠道图片/PDF 附件在容器内不可访问 | 已开启 | 无 |
| 🟡 中 | [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | Codex provider 发出未声明的 `file` 事件，导致类型检查失败和生成图片丢失 | 已开启 | 无 |

**稳定性评估**：今日关闭 2 个高优先级 Bug，项目稳定性有所提升。但仍存在 3 个未解决的附件/集成相关 Bug，建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 描述 | 关联 PR | 纳入可能性 |
|-------|------|---------|-----------|
| [#3205](https://github.com/nanocoai/nanoclaw/issues/3205) | 支持持久化组级 OneCLI 密钥分配 | 无 | 🟡 中等 — 设计存在分歧，需先明确架构方向 |
| [#3202](https://github.com/nanocoai/nanoclaw/issues/3202) | 添加 Mattermost 渠道集成 | #3199 已合并 | ✅ 高 — 相关 PR 已合并 |
| [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) | `add-opencode` 技能仍使用过时的 Dockerfile 编辑指令 | 无 | 🟡 中等 — 属于文档/技能更新，优先级较低 |

**路线图信号**：项目正持续扩展渠道集成（Mattermost 已合并）和外部服务支持（Strava、远程 MCP）。密钥管理设计（#3205）是未来版本的潜在方向，但需解决架构分歧。

---

## 7. 用户反馈摘要

**痛点：**
- Discord 审批流程不可靠：owner 角色点击 Approve 后请求仍被拒绝，影响管理员工作效率（#3201）
- Docker 部署稳定性差：SQLite 锁竞争导致大量 readonly 错误，影响生产环境可用性（#3177）
- 附件传输存在缺陷：Google Chat 和 Signal 渠道的附件无法正常处理，限制多模态交互能力（#3206, #2528）

**满意点：**
- Strava 集成和远程 MCP 支持扩展了项目生态，用户可使用更多外部工具（#2777, #2776）
- Mattermost 渠道集成按 v2 架构重新实现，确保长期可维护性（#3199）

---

## 8. 待处理积压

| Issue/PR | 优先级 | 未响应时间 | 建议 |
|----------|--------|-----------|------|
| [#3206](https://github.com/nanocoai/nanoclaw/issues/3206) | 🔴 高 | 今日新增 | 修复 `isSafeAttachmentName` 逻辑，支持含路径分隔符的 message ID |
| [#3205](https://github.com/nanocoai/nanoclaw/issues/3205) | 🟡 中 | 今日新增 | 召开设计讨论，明确 OneCLI 密钥分配架构方向 |
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | 🟡 中 | 今日新增 | 更新 `ProviderEvent` 类型声明，修复 codex provider 事件处理 |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | 🔴 高 | 待合并 (4天) | 尽快合并 Discord 修复，解决审批按钮失效问题 |

---

**报告生成时间**：2026-08-09  
**数据来源**：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-08-09

---

## 1. 今日速览

过去 24 小时内，IronClaw 保持高强度迭代：**30 条 Issue 更新（6 新/活跃，24 关闭）、50 条 PR 更新（18 待合并，32 已合并/关闭）**，无新版本发布。核心进展集中在 Reborn 架构的 Reborn-ification 收尾（多个通道迁移、CLI 服务化、能力生命周期治理已陆续关闭）与 Web Debug Inspector 功能完善两条主线。安全与稳定性方面，TOCTOU 竞态修复、Gate 审计补漏、SafetyLayer 断链等问题引发关注，整体项目健康度良好，技术债清理节奏加快。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 内容概要 |
|---|---|---|
| [#7377](https://github.com/nearai/ironclaw/pull/7377) | BenKurrek | **关键架构变更**：统一"运行以调用者身份执行"语义，消除 #7157 后遗留的身份绑定分裂点，完成 2026-08-08 多智能体审计全量修正 |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | pranavraja99 | **技能激活机制重构**：Host 不再通过关键词评分激活技能，改由模型决策，修复此前"无痕迹激活"行为 |
| [#7280](https://github.com/nearai/ironclaw/pull/7280) | italic-jinxin | Inspector 安全与操作覆盖测试补齐（授权、跨作用域隔离、连接限制等） |
| [#7393](https://github.com/nearai/ironclaw/pull/7393) | BenKurrek | 核心交付对在宽目录基准测试中的计量 |
| [#7389](https://github.com/nearai/ironclaw/pull/7389) | BenKurrek | 修复 Slack 交付验证在 #7157 合并后的断链问题 |
| [#7029](https://github.com/nearai/ironclaw/pull/7029) | theredspoon | 恢复持久化交付声明（compare-and-swap 作为所有权唯一权威） |
| [#7382](https://github.com/nearai/ironclaw/pull/7382) | serrrfirat | #7360 第一阶段：脚本化工具调用压力测试，mock LLM 驱动确定性内置工具序列 |

### 已关闭的重要 Issue（24 条）
今日关闭的 Issue 集中在 **Reborn 通道迁移收尾**：微信通道适配（#3582）、v1 遗留通道端口追踪（#3577）、Reborn CLI 认证对等（#4118）、模型可见错误上下文增强（#4059）、Reborn 批准对等 Epic（#4539）、Composition 拆分（#4470）、OAuth 默认账户策略（#4382）、声明式能力策略（#4120）等。这标志着 Reborn 1.0 的通道层与权限层迁移已基本完成。

---

## 4. 社区热点

### 🔥 讨论活跃 Issue / PR

1. **[Issue #7391](https://github.com/nearai/ironclaw/issues/7391)** — `SafetyLayer::validate_input` / `scan_inbound_for_secrets` 在实时 Reborn 转换路径上无调用方
   - 作者 `0xkurious` 指出安全文档描述的"验证-清洗-泄漏检测"数据流与实际代码存在断裂，**安全治理与实现脱节**的严重问题，目前尚无修复 PR。

2. **[Issue #6989](https://github.com/nearai/ironclaw/issues/6989)** — Token 计费：混合 provider 用量 + 尾部估计，`ModelWorkRequest` 从内容引用字符串估算输入 Token
   - `ilblackdragon` 提交的高优先级 Bug，`for_assistant` 方法错误地使用引用字符串长度而非实际内容长度估算 Token，**直接影响成本计量准确性**，属 P1 级别。

3. **[PR #7398](https://github.com/nearai/ironclaw/pull/7398)** — Web Push 通知 + PWA：Web 应用作为一等通知通道
   - `BenKurrek` 提出将 Web 应用提升为与 Slack/Telegram 对等的第一方通知渠道，实现 W3C Web Push 标准，**社区对多通道通知诉求强烈**。

4. **[Issue #6939](https://github.com/nearai/ironclaw/issues/6939)** — 迁移工具：将 legacy agent 配置和记忆迁移至 IronClaw
   - `sergeiest` 反映 Hermes/Openclaw 用户面临高切换成本，**无数据迁移路径**，用户抵触从零开始，建议纳入路线图。

5. **[PR #7396](https://github.com/nearai/ironclaw/pull/7396)** — Slack 通用渐进式预览支持
   - 新增通道无关的渐进预览契约，映射到 Slack `chat.startStream/appendStream/stopStream`，**提升聊天渠道体验**。

---

## 5. Bug 与稳定性

| 级别 | 问题 | 链接 | Fix PR |
|---|---|---|---|
| **P1** | Token 计量错误：`ModelWorkRequest::for_assistant` 用引用字符串长度代替实际内容长度估算输入 Token | [Issue #6989](https://github.com/nearai/ironclaw/issues/6989) | 尚无 |
| **P1** | SafetyLayer 验证/泄漏检测函数在实时 Reborn 路径上未接入 | [Issue #7391](https://github.com/nearai/ironclaw/issues/7391) | 尚无 |
| **P2** | 外部渠道发送声明的 TOCTOU 竞态导致发送行丢失被错误分类 | [PR #7395](https://github.com/nearai/ironclaw/pull/7395) | [PR #7395](https://github.com/nearai/ironclaw/pull/7395)（开放待合并） |
| **P2** | 网关投影身份未绑定至网关引用，同一运行中不同通知类型派生相同投影 ID | [PR #7352](https://github.com/nearai/ironclaw/pull/7352) | [PR #7352](https://github.com/nearai/ironclaw/pull/7352)（开放待合并） |
| **P2** | 中断恢复时无条件写入状态，应使用 compare-and-swap 保护 `Sending -> Unknown` 转换 | [PR #7028](https://github.com/nearai/ironclaw/pull/7028) | [PR #7028](https://github.com/nearai/ironclaw/pull/7028)（开放待合并） |
| **P2** | WASM guest 诊断信息在 tracing 前未做清理，存在信息泄露风险 | [PR #7048](https://github.com/nearai/ironclaw/pull/7048) | [PR #7048](https://github.com/nearai/ironclaw/pull/7048)（依赖 #7063，开放待合并） |
| — | WebUI 附件读取回归：Reborn 迁移后 SSE 传输导致附件丢失 | [PR #7341](https://github.com/nearai/ironclaw/pull/7341) | [PR #7341](https://github.com/nearai/ironclaw/pull/7341)（开放待合并） |
| — | 技能安装后从 Settings 消失、无法激活 | [PR #7171](https://github.com/nearai/ironclaw/pull/7171) | [PR #7171](https://github.com/nearai/ironclaw/pull/7171)（开放待合并，修复 #7168） |

> ⚠️ **关键风险**：两个 P1 级别问题（Token 计量、SafetyLayer 断链）均无修复 PR，建议在下一迭代中优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 路线图判断 |
|---|---|---|
| Web Push 通知 + PWA 支持，Web 应用作为一等通知渠道 | [PR #7398](https://github.com/nearai/ironclaw/pull/7398) | 规模 XL、风险中，已由核心贡献者提交，**极有可能纳入 v1.1.0** |
| Slack/Telegram 基于存在感的共享对话 | [PR #7397](https://github.com/nearai/ironclaw/pull/7397) | 继承 #7377 的身份体系，**将随 v1.1.0 通道增强一并发布** |
| Slack 渐进式预览（流式消息预览） | [PR #7396](https://github.com/nearai/ironclaw/pull/7396) | 通道体验增强，**纳入 v1.1.0** |
| Web Debug Inspector（调试面板）完整功能 | [Issue #7218](https://github.com/nearai/ironclaw/issues/7218)、[PR #7291](https://github.com/nearai/ironclaw/pull/7291) | Epic 级别，统计、导航、本地化已补齐，**v1.1.0 核心交付** |
| 用固定 omp 工具替换第一方编码工具 | [Issue #7392](https://github.com/nearai/ironclaw/issues/7392) | 新建 Epic，通过宿主常驻通道交付，**可能推迟至 v1.2.0** |
| Legacy agent 数据迁移工具 | [Issue #6939](https://github.com/nearai/ironclaw/issues/6939) | 社区呼声高但尚无 PR，**建议纳入后续路线图** |
| 内置工具调用压力测试与持久化写入验证 | [Issue #7360](https://github.com/nearai/ironclaw/issues/7360)、[PR #7382](https://github.com/nearai/ironclaw/pull/7382) | 基础设施完善，已启动 |

---

## 7. 用户反馈摘要

- **切换成本高**（#6939）：Hermes/Openclaw 现有用户强烈希望携带已有配置和记忆迁移，拒绝"从零开始"，这是社区留存的关键痛点。
- **Token 计费不准确**（#6989）：模型输入 Token 估算依赖引用字符串长度而非实际内容，影响成本计量的精确性，运维侧反馈明显。
- **技能激活行为异常**（#7168/#6938）：旧版 Host 通过关键词评分"静默激活"技能且不留痕迹，用户难以追踪；PR #6938 已将决策权交还给模型，改进后可观测性提升。
- **WebUI 附件丢失**（#7341）：Reborn 迁移至 fetch/ReadableStream SSE 传输后，已落地附件读取出现回归，影响 WebUI 正常使用。
- **Inspector 调试需求旺盛**：多个 Inspector 相关 PR（#7291、#7225、#7226、#7280）密集提交，说明操作者对实时调试和诊断工具的刚性需求。

---

## 8. 待处理积压

| Issue / PR | 类型 | 创建时间 | 风险说明 |
|---|---|---|---|
| [#7391](https://github.com/nearai/ironclaw/issues/7391) — SafetyLayer 未在实时路径接入 | Bug P1 | 2026-08-08 | 安全治理文档与实现脱节，**需优先处理** |
| [#6989](https://github.com/nearai/ironclaw/issues/6989) — Token 计量 Bug | Bug P1 | 2026-08-01 | 影响成本计量准确性，**无修复 PR** |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) — 替换第一方编码工具 | Epic 新建 | 2026-08-08 | 无相关 PR，新方向待启动 |
| [#6939](https://github.com/nearai/ironclaw/issues/6939) — Legacy 迁移工具 | Feature P2 | 2026-07-31 | 社区呼声高，但无 PR，**长期未响应** |
| [#7395](https://github.com/nearai/ironclaw/pull/7395) — TOCTOU 竞态修复 | Bug P2 | 2026-08-08 | 开放待合并，修复外发声明丢失问题 |
| [#7352](https://github.com/nearai/ironclaw/pull/7352) — 网关投影身份绑定 | Bug P2 | 2026-08-07 | 开放待合并，多网关场景下投影 ID 冲突 |
| [#7048](https://github.com/nearai/ironclaw/pull/7048) — WASM 诊断信息清理 | Bug P2 | 2026-08-03 | 依赖 #7063，开放待合并 |

> 📌 **维护者关注建议**：P1 级别的 SafetyLayer 断链（#7391）和 Token 计量（#6989）已存在数天但无修复 PR，建议在本周内启动修复；legacy 迁移工具（#6939）社区诉求强烈，可考虑纳入 v1.2.0 规划。

---

*报告生成时间：2026-08-09 | 数据来源：nearai/ironclaw GitHub*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 | 2026-08-09

---

## 1. 今日速览

LobsterAI 在过去 24 小时内保持**低强度活跃**，共更新 1 个 Issue 与 3 个 PR，无新版本发布。社区贡献以性能优化（SQLite 写入改良）和基础设施扩展（LiteLLM 网关支持）为主，反映出项目在保持核心功能稳定同时，持续吸纳外部贡献者参与维护。整体项目健康度**中等偏稳**，无明显阻塞性问题，但 Issue 响应速度有待提升。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 1 条，主要贡献如下：

| PR | 类型 | 作者 | 说明 |
|---|---|---|---|
| [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) | 功能新增 | RheagalFire | 添加 LiteLLM 作为 AI 网关提供商，复用现有 `chatWithOpenAICompatible` 处理器，无需新增依赖即可接入 100+ LLM 提供商。 |

**项目整体推进评估：** 本轮更新侧重于**基础设施可扩展性**，通过 LiteLLM 集成降低用户接入多模型的成本。SQLite 写入性能优化（[#1193](https://github.com/netease-youdao/LobsterAI/pull/1193)）仍在待合并状态，若合入将显著改善数据存储层的写放大问题。项目整体向前迈进，但进展节奏偏缓，需关注贡献者留存与响应效率。

---

## 4. 社区热点

### 🔥 Issue #1192 — 自定义已有工具的默认配置

**[链接](https://github.com/netease-youdao/LobsterAI/issues/1192)** | 作者：duzhen1996 | 评论：1 | 👍：0

**核心诉求：** 用户希望为已有工具（如 `browser`）设置默认启动参数（如 `headless` 模式），避免因大模型指令跟随不稳定而导致的不可控行为。

**背景分析：** 当前 LobsterAI 依赖大模型动态生成工具调用参数，但在某些场景（如无头浏览器）下，模型生成的参数存在不确定性，影响用户体验的稳定性。用户希望通过"写死默认配置"的方式实现确定性控制，这反映了**工具可控性**是社区的核心痛点之一。

---

## 5. Bug 与稳定性

**今日无新报告的 Bug 或崩溃问题。**

- 无阻塞性回归。
- 无已知严重稳定性问题。

---

## 6. 功能请求与路线图信号

### 潜在路线图信号

| 需求来源 | 类型 | 预估优先级 | 说明 |
|---|---|---|---|
| [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) | 功能请求 | 中 | 工具默认配置覆盖，可提升工具调用的确定性 |
| [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) | 网关扩展 | 中 | LiteLLM 接入，已合并/关闭，说明社区对多模型接入有需求 |

**分析：** 功能请求多集中于**配置灵活性**与**模型接入便捷性**，建议维护者在下一版本规划中优先考虑工具参数默认覆盖机制，以提升用户对复杂工作流的控制力。

---

## 7. 用户反馈摘要

### 真实痛点提炼

1. **工具参数不可控**（Issue #1192）
   - 痛点：大模型动态生成工具参数存在不确定性，用户无法强制指定 `headless` 等关键参数。
   - 场景：自动化测试、后台任务等需要无干扰运行的场景。
   - 情绪：用户表达对当前行为的不满，但态度礼貌，属于建设性反馈。

2. **多模型接入成本**（PR #2193）
   - 用户希望通过 LiteLLM 统一网关降低接入多模型的学习成本与维护成本。

---

## 8. 待处理积压

以下 Issue / PR 长期处于开放状态，建议维护者关注：

| 编号 | 类型 | 作者 | 创建时间 | 状态 | 链接 |
|---|---|---|---|---|---|
| #1192 | Issue | duzhen1996 | 2026-04-01 | OPEN / stale | [链接](https://github.com/netease-youdao/LobsterAI/issues/1192) |
| #1193 | PR | Housum | 2026-04-01 | OPEN / stale | [链接](https://github.com/netease-youdao/LobsterAI/pull/1193) |
| #2294 | PR | oratis | 2026-07-08 | OPEN / stale | [链接](https://github.com/netease-youdao/LobsterAI/pull/2294) |

**建议：** 积压 Issue/PR 均标注为 `stale`，可能因缺乏响应而被自动关闭。维护者可考虑主动回应或标注优先级，以维持社区贡献者的参与热情。

---

**报告生成时间：** 2026-08-09  
**数据来源：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目日报 | 2026-08-09

## 1. 今日速览
过去24小时，Moltis 共更新 2 条 Issue 与 1 条 PR，整体活跃度保持稳健。今日动态高度聚焦于容器沙盒环境（Docker / Apple Container）的稳定性与文件系统工具兼容性，通过一次关键 PR 合并实现了从问题报告到修复闭环的快速响应。项目健康度良好，维护者对容器化运行时的容错机制进行了实质性补强，暂无阻塞性风险。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
- **[PR #1105] Fix Docker sandbox filesystem tool fallback** ([链接](https://github.com/moltis-org/moltis/pull/1105))
  该 PR 今日已合并关闭，作者为 `penso`。修复核心包括：
  - 当网关进程无法直接访问宿主机挂载点时，自动回退至容器内路径操作；
  - 新增针对 `/home/sandbox` 与 `workspace/data` 路径的回归测试覆盖；
  - 在保留 `missing-list` 原有语义的前提下，优化了宿主机-容器路径转换逻辑。
  此次合并不仅修复了 Docker 沙盒环境下的工具失效问题，也为后续多平台沙盒抽象层的标准化积累了工程范式。

## 4. 社区热点
- **Issue #1096 [CLOSED]** `Read`/`Write`/`Edit` tools don't work in Docker ([链接](https://github.com/moltis-org/moltis/issues/1096))
  由 `IlyaBizyaev` 提交，随 PR #1105 合并关闭。社区对 Docker 环境文件工具失效的关注度较高，修复闭环及时。
- **Issue #1185 [OPEN]** Apple Container 1.x sandbox starts but Moltis treats it as not running ([链接](https://github.com/moltis-org/moltis/issues/1185))
  今日新开，由 `mikz` 提交。当前讨论聚焦于 Apple 容器运行时的状态心跳检测与生命周期识别逻辑。

**热点分析**：社区诉求高度集中于“跨容器运行时的状态感知与文件访问稳定性”，反映出 AI Agent 部署用户对沙盒环境可靠性的强依赖。

## 5. Bug 与稳定性
| 状态 | Issue | 描述 | 严重程度 | 修复状态 |
|------|-------|------|----------|----------|
| 🔴 Open | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x 沙盒已启动，但 Moltis 误判为未运行 | 中危 | 无关联 PR |
| 🟢 Closed | [#1096](https://github.com/moltis-org/moltis/issues/1096) | Docker 环境下 `Read`/`Write`/`Edit` 工具不可用 | 高（已闭环）| PR #1105 已修复 |

**稳定性评估**：今日 Bug 修复率为 50%（1/2）。遗留的 #1185 属于特定运行时（Apple Container）的状态识别问题，暂未蔓延至核心执行链路，不影响 Docker/K8s 等主流部署场景。

## 6. 功能请求与路线图信号
今日无明确新功能需求 Issue。但从近期动态可清晰观察到项目路线图信号：
- **多运行时沙盒抽象化**：PR #1105 引入的 fallback 机制与回归测试体系，预示后续版本可能进一步抽离 `SandboxRuntime` 接口，统一 Docker、Apple Container、Podman 等环境的交互协议。
- **可观测性强化**：用户对沙盒状态误判的敏感度高，预计未来版本会在健康检查（Health Check）与事件日志中增加更细粒度的运行时状态广播。

## 7. 用户反馈摘要
- **核心痛点**：容器化部署时，文件系统工具因宿主机路径与容器路径映射失败而不可用；Apple Container 的环境启动信号未被正确解析。
- **典型使用场景**：开发者在本地 IDE 或 CI/CD 流水线中运行 Moltis 智能体，依赖沙盒进行安全的代码编辑、文件读写与命令执行。
- **满意度反馈**：社区对 PR #1105 的快速跟进与回归测试覆盖表示认可；同时期待官方补充跨容器环境的诊断手册与状态排障指南。

## 8. 待处理积压
- **[需关注] Issue #1185** ([链接](https://github.com/moltis-org/moltis/issues/1185))：Apple Container 状态误判问题，目前无 assignee 与关联 PR。建议维护者优先评估是否为状态轮询逻辑的回归盲区，并补充对应测试用例。
- 其余 Issue/PR 均处于活跃或已闭环状态，无长期搁置的阻塞项，积压负荷健康。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# 📊 CoPaw 项目动态日报 | 2026-08-09

---

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，过去24小时内新增 Issues 18条、PR 50条，社区贡献者参与热情持续高涨。Bug 修复是今日焦点，MCP 连接稳定性、前端性能优化（无限 CSS 动画导致 ~20% CPU 占用）、以及自动标题生成崩溃等关键问题均有对应 PR 跟进。3个 PR 已合并，包括 MCP timeout 传递修复和 auto-title `KeyError` 修复。整体项目处于**稳定迭代期**，v2.1.0-beta.2 版本问题正在快速收敛。

---

## 2. 版本发布

**无新版本发布。**

当前主要版本为 v2.1.0-beta.2（桌面版）和 v2.0.1（稳定版）。

---

## 3. 项目进展

### 今日合并/关闭的 PR（3条）

| PR | 作者 | 说明 |
|---|---|---|
| [#6836](https://github.com/agentscope-ai/QwenPaw/issues/6836) | @mohitdebian | **fix(mcp): 将 read_timeout_seconds 正确传入 MCP SDK ClientSession** —— 修复 MCP 会话因未传递超时配置导致请求无限挂起的问题 |
| [#6835](https://github.com/agentscope-ai/QwenPaw/issues/6835) | @mohitdebian | **fix(llm): 修复 auto-title 生成时的 `KeyError: '__aiter__'`** —— 解决非流式提供商返回 dict/string 时的崩溃 |
| [#6834](https://github.com/agentscope-ai/QwenPaw/issues/6834) | @mohitdebian | **fix(console): 暂停不可见区域的无限 CSS 动画** —— 解决 Tauri 构建闲置时 ~20% CPU 占用问题 |

**整体进展评估：** 项目正集中修复 v2.1.0-beta.2 的稳定性问题，今日合并的3条 PR 分别针对 MCP 连接超时、自动标题崩溃和前端性能三大痛点，项目整体向前推进显著。

---

## 4. 社区热点

### 高关注 Issues

- **[Bug] 前端 UI 未实时显示模型输出** — [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820)  
  用户反馈模型输出、工具调用、思考过程需全部完成后才显示，影响实时交互体验。**4条评论**

- **[Bug] 本地 Whisper ffmpeg 未检测到** — [#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831)  
  macOS Apple Silicon 上 Homebrew 安装的 ffmpeg 因 PATH 未包含 `/opt/homebrew/bin` 而未被识别。**2条评论**

- **[Enhancement] AI 审批时加入用途描述** — [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832)  
  用户希望在权限审批弹窗中显示 AI 生成的审批目的简述，而非仅展示原始 PowerShell 代码。**1条评论**

- **[Bug] 对话结束时间显示异常** — [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)  
  助手实际思考耗时2分钟，但页面显示仅几秒，时间计算逻辑存在偏差。

### 高关注 PR

- **[feat] 模型回退与冷却机制** — [#6659](https://github.com/agentscope-ai/QwenPaw/pulls/6659)  
  实现当主模型因限流/超时/服务错误失败时自动切换到备用模型，含冷却期避免反复触发。关联修复 #2199、#1327、#2089。

- **[feat] OpenAI Responses 提示词缓存支持** — [#6668](https://github.com/agentscope-ai/QwenPaw/pulls/6668)  
  为 GPT-5.6+ 提供可选的 prompt caching 支持，通过 `extra_body` 传递 `prompt_cache_options`。

- **[feat] AnySearch 网页搜索集成** — [#6817](https://github.com/agentscope-ai/QwenPaw/pulls/6817)  
  集成 AnySearch 作为内置网页搜索能力，替代 Tavily，同时修复 MCP env-ref header 绑定缺陷。

- **[fix] MCP 恢复陈旧会话** — [#6586](https://github.com/agentscope-ai/QwenPaw/pulls/6586)  
  修复 MCP 服务器重启或会话过期后状态仍显示连接但请求持续失败的问题。

---

## 5. Bug 与稳定性

### 🔴 严重（影响核心功能）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | 临时 streamable HTTP MCP 连接失败后，自动重连仍导致对话永久阻塞 | [#6825](https://github.com/agentscope-ai/QwenPaw/pulls/6825) ✅ **已有 PR** |
| [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OpenAI Responses 的 continuation summary 忽略 `disable_thinking`，60秒取消被误报为 malformed output | 待修复 |
| [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) | thinking-mode 模型多轮对话时 `reasoning_content` relay 返回 400 BadRequestError | 待修复 |
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Gemini provider 发送含 `$schema` 字段的 tool schema 导致 Google API 拒绝请求 | [#6809](https://github.com/agentscope-ai/QwenPaw/pulls/6809) ✅ **已有 PR** |

### 🟡 中等（影响用户体验）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Docker 版插件市场/应用市场持续提示"维护中" | 待修复 |
| [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Console 闲置时 ~20% CPU 占用，因无限 CSS 动画（ai-copilot-blink + antd spinner） | [#6834](https://github.com/agentscope-ai/QwenPaw/pulls/6834) ✅ **已合并** |
| [#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831) | macOS 本地 Whisper 显示 ffmpeg disabled | 待修复 |
| [#6819](https://github.com/agentscope-ai/QwenPaw/issues/6819) | Channel 工具未按要求请求审批 | 待修复 |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows 安装/更新时未终止占用文件的进程（浏览器扩展 NM host 锁文件导致） | 待修复 |
| [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | Chat 自动标题生成 `KeyError: '__aiter__'` 崩溃 | [#6835](https://github.com/agentscope-ai/QwenPaw/pulls/6835) ✅ **已合并** |
| [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) | `run_tool_batch` 报错 `No toolkit available in current context` | 已关闭（#6756）✅ |
| [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | macOS 打开 Scroll history.db 时 SQLite WAL 模式 SIGBUS 崩溃 | 待修复 |

### 🟢 轻微（体验优化）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息结束时间显示异常（实际2分钟显示几秒） | 待修复 |
| [#4558](https://github.com/agentscope-ai/QwenPaw/issues/4558) | 长文本输出时 CPU 异常升高，前端渲染疑似性能瓶颈 | 已关闭（#4558）✅ |

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue/PR | 诉求 | 匹配 PR |
|---|---|---|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 内置支持火山引擎 Agent Plan 和小米 MiMo Standard API | [#6490](https://github.com/agentscope-ai/QwenPaw/pulls/6490) ✅ **已有 PR** |
| [#6817](https://github.com/agentscope-ai/QwenPaw/pulls/6817) | 集成 AnySearch 替代 Tavily 作为默认网页搜索 | [#6817](https://github.com/agentscope-ai/QwenPaw/pulls/6817) ✅ **已有 PR** |
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | 审批请求中加入 AI 生成的用途描述 | 待评估 |
| [#6827](https://github.com/agentscope-ai/QwenPaw/issues/6827) | 删除对话时可选清理临时文件 | 待评估 |
| [#6526](https://github.com/agentscope-ai/QwenPaw/pulls/6526) | 新增 NVIDIA NIM 模型提供商支持 | [#6526](https://github.com/agentscope-ai/QwenPaw/pulls/6526) ✅ **已有 PR（待合并）** |

### 路线图信号分析

- **模型提供商扩展**：今日数据强烈指向"扩展提供商覆盖"方向，Volcengine、MiMo、NVIDIA NIM、AnySearch 等多个新提供商 PR 正在推进，预计下一版本将大幅扩充内置提供商列表。
- **MCP 稳定性**：多个 MCP 相关 Issue 和 PR（#6822/#6825、#6586、#6836）集中在连接管理和超时处理，MCP 可靠性是当前重点优化领域。
- **前端性能**：CPU 占用问题（#6828/#4558）持续被报告，已有合并的动画暂停修复，但长文本渲染性能问题仍未彻底解决。

---

## 7. 用户反馈摘要

### 主要痛点

1. **实时性不足**：[#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) 用户抱怨模型输出、工具调用、思考过程需全部完成后才显示，破坏了流式交互体验。

2. **审批流程不友好**：[#6819](https://github.com/agentscope-ai/QwenPaw/issues/6819) 和 [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) 反映用户希望审批弹窗更直观，AI 应生成用途简述而非仅展示原始代码。

3. **Windows 安装体验差**：[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) 用户报告自动更新时因浏览器扩展锁文件导致 NSIS 多次报错，需手动强制退出。

4. **macOS 本地能力检测问题**：[#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831) Homebrew 路径未包含在 PATH 中导致 Whisper/ffmpeg 检测失败。

5. **时间显示异常**：[#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) 助手思考时间计算逻辑有误，影响用户对模型性能的判断。

### 满意点

- MCP 会话恢复机制（[#6586](https://github.com/agentscope-ai/QwenPaw/pulls/6586)）和模型回退机制（[#6659](https://github.com/agentscope-ai/QwenPaw/pulls/6659)）受到社区正面关注，用户期待这些稳定性增强功能尽快落地。

---

## 8. 待处理积压

| Issue/PR | 状态 | 提醒事项 |
|---|---|---|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | OPEN，9条评论 | Docker 版插件/应用市场问题，可能影响大量用户，建议优先处理 |
| [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OPEN，5条评论 | OpenAI Responses 与 reasoning 模型兼容性问题，影响思考模式用户 |
| [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | OPEN，3条评论 | macOS SQLite WAL SIGBUS 崩溃，数据完整性风险 |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | OPEN，3条评论 | Windows 安装流程问题，影响新用户体验 |
| [#6615](https://github.com/agentscope-ai/QwenPaw/pulls/6615) | OPEN，待合并 | 配置文件损坏时优雅降级，提升容错能力 |
| [#6799](https://github.com/agentscope-ai/QwenPaw/pulls/6799) | OPEN，待合并 | Windows shell 命令临时文件泄漏（已发现 26GB 孤儿文件） |
| [#6833](https://github.com/agentscope-ai/QwenPaw/pulls/6833) | OPEN，待合并 | 审批请求渠道路由字段丢失，导致审批等待无响应 |

---

**报告生成时间**：2026-08-09  
**数据来源**：[CoPaw GitHub Repository](https://github.com/agentscope-ai/CoPaw)  
**分析师**：Agnes (Sapiens AI)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-08-09

---

## 1. 今日速览

ZeroClaw 在过去24小时内保持高活跃度：共处理50条Issue和50条PR，其中48条活跃讨论/待处理，仅2条正式关闭。项目正处于架构重构的关键窗口期，核心维护者 JordanTheJet 集中推进了多项清理工作（移除废弃crate、删除WATI渠道、重构网络守卫原语）。安全修复成为今日焦点，累计发现8个以上P1级安全/稳定性问题。无新版本发布，但SOP无头执行修复已完成合并，为后续自动化工作流铺平道路。

**健康度评估：🟡 高活跃但技术债务集中暴露期**

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要PR

**#9494 [CLOSED] fix(sop): drive cron-started headless runs** — 核心修复：cron触发的工作流此前因缺乏agent循环而永久挂起在ExecuteStep。已合并至master。
- 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9494

**#9798 [CLOSED] docs(sop): document which agent executes SOP steps** — 文档性PR，已被#9841替代。
- 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9798

### 今日推进的关键PR（待合并）

| PR | 类型 | 摘要 | 风险/规模 |
|----|------|------|-----------|
| #9841 | bugfix | SOP无头执行修复的后续补丁，解决review中发现的4个阻断性问题 | high / XL |
| #9828 | feature | 代理可自主编写配置并附带operator审批预览 | medium / L |
| #9571 | chore | 移除WATI渠道模块及全部依赖 | high / XL |
| #9580 | refactor | 网络守卫原语迁移至zeroclaw-infra::net_guard | high / L |
| #9744 | refactor | 要求webhook入口经过认证后再dispatch给agent | high / XL |
| #9854 | fix | 从family registry派生context-window发现，修复多provider别名误判 | medium / L |
| #9853 | chore | 删除aardvark-sys和zeroclaw-robot-kit两个废弃crate | medium / L |
| #9739 | feature | 多会话分屏+agent侧边栏快速启动（依赖#9738） | high / XL |
| #9410 | fix | 默认禁用command audit logging | high / S |

**整体推进判断：** 今日重点在于**架构瘦身**（移除废弃crate/渠道）与**安全加固**（认证webhook入口、默认禁用审计日志）。SOP无头执行链路的修复是最大进展，解决了长期存在的cron工作流不可用问题。

---

## 4. 社区热点

### 讨论最活跃的Issue（按评论数排序）

| Issue | 类型 | 评论数 | 摘要 | 链接 |
|-------|------|--------|------|------|
| #8043 | RFC | 11 | 提议将aardvark-sys crate合并入zeroclaw-hardware | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) |
| #8424 | RFC | 11 | workspace-relative forbidden paths + .zeroclawignore机制 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) |
| #8054 | bug | 10 | 系统prompt工具可用性与多渠道入口不一致 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) |
| #9348 | bug | 9 | WhatsApp Web模式下所有DM和群聊均被响应（安全漏洞） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) |
| #5514 | bug | 6 | Telegram批量图片被当作多次请求处理 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| #8550 | feature | 6 | 添加OpenAI兼容chat completions端点 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) |

**热点分析：**
- **架构RFC讨论持续升温**：#8043和#8424均有超过10条评论，反映社区对crate拆分策略和权限模型演进的高度关注。
- **WhatsApp安全漏洞引发重视**：#9348（P1级）评论数达到9条，暴露了channel配置中"锁屏感"与"实际开放"之间的严重偏差，预计将快速获得修复。
- **OpenAI兼容端点需求强烈**：#8550直接回应了Open WebUI、LobeChat等生态的接入诉求，配合PR #9828的配置编辑能力，可能构成下一版本的集成卖点。

---

## 5. Bug 与稳定性

### P1 严重级 Bug

| Issue | 摘要 | Fix PR | 链接 |
|-------|------|--------|------|
| #9348 | WhatsApp Web `mode=business` 配置锁定但实际全开放（安全漏洞） | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) |
| #9825 | leak检测误删公开区块链地址，导致支付URL无法投递 | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) |
| #9390 | emergency stop仅CLI状态文件，runtime路径不读取 | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) |
| #9815 | `forbidden_paths`对allowed_roots内路径完全失效 | #8424 (RFC) | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) |
| #9816 | Anthropic provider成本报告$0.00，预算限制永远不触发 | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) |
| #9340 | CLI创建cron job输出delivery被硬编码为None | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) |
| #9805 | SOP auto-mode从channel/cron触发后永远running | #9841 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) |
| #8731 | stdio MCP服务器累积为僵尸进程 | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) |
| #9834 | zeroclaw-runtime测试因共享全局状态间歇失败 | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) |
| #9035 | Docker Compose gateway端口发布后无法访问 | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) |
| #9387 | Telegram/Slack/Lark/Matrix审批响应可被任意成员接受 | 尚无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) |

### P2 级别 Bug

| Issue | 摘要 | 链接 |
|-------|------|------|
| #9486 | 高熵检测器误屏蔽Solana钱包地址，`high_entropy_tokens=false`无效 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) |
| #8559 | 退出Web dashboard chat窗口导致agent任务中断 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) |
| #9656 | Telegram审批等待期间typing indicator持续显示 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) |
| #9202 | `zeroclaw desktop`使用过期下载URL，无法检测已安装AppImage | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) |
| #9573 | 同provider多别名配置导致cost pricing查找失败 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9573) |
| #8054 | 系统prompt工具可用性与多渠道入口不一致 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) |

**稳定性判断：** 今日Bug报告呈现**安全配置类问题密集爆发**态势，11个P1中有至少6个涉及权限/认证/审计机制失效，疑似与近期架构重构引入的回归有关。僵尸进程和测试稳定性问题反映CI/CD基础设施层存在隐患。

---

## 6. 功能请求与路线图信号

| Issue | 需求摘要 | 关联PR | 纳入可能性 |
|-------|----------|--------|-----------|
| #8550 | OpenAI兼容chat completions端点 | 无直接PR | 🟢 高（生态对接刚需） |
| #5514 | Telegram批量媒体合并为单次multimodal turn | 无 | 🟡 中（改善体验但非核心） |
| #8445 | Telegram多消息模式（每次turn独立消息） | #9772 (per-user session) | 🟡 中 |
| #6663 | Telegram工具调用进度提示（draft progress） | 无 | 🟡 中 |
| #9179 | MCP embedded resource blob intake | 无 | 🟢 高（扩展MCP能力） |
| #9824 | 简化默认web-tool surface为fetch+research+http | 无直接PR | 🟡 中（与#8043架构清理同步） |
| #9496 | RFC流程简化 | 无直接PR | 🟢 高（已确认是阻塞性问题） |

**路线图信号：**
1. **架构瘦身优先**：#8043、#9803、#9853指向将aardvark-sys和zeroclaw-robot-kit合并入zeroclaw-hardware，预计下一版本（v0.8.5或v0.9.0）将清理此批废弃crate。
2. **安全加固持续**：#9410（默认禁用审计日志）、#9744（webhook认证）均为安全相关修复，反映项目正系统性收紧默认安全策略。
3. **渠道精简**：#9571移除WATI，未来可能继续清理低使用率渠道。
4. **可观测性扩展**：#8337（Herdr集成）、#9248（eval历史记录）显示对可观测性的持续投入。

---

## 7. 用户反馈摘要

### 真实痛点

1. **"配置看起来安全但实际不安全"** — #9348、#9815、#9486多条Issue指向同一类问题：配置项设计存在"锁屏感"误导，用户以为禁用了某些能力，实际完全无效。
   
2. **"成本追踪完全失灵"** — #9816、#9573反映Anthropic和多provider别名场景下，成本统计模块完全失效，导致预算控制形同虚设。

3. **"自动化工作流跑起来就卡死"** — #9805、#9340、#9390三个P1问题共同描述了一个模式：从channel/cron触发的自动化任务缺乏完整的headless执行路径，任务要么不执行要么无输出。

4. **"长会话导致资源泄漏"** — #8731（MCP僵尸进程）、#9843（CPU spin）、#8559（退出窗口中断任务）指向 daemon 与客户端长时间运行时的资源管理缺陷。

5. **"Telegram体验割裂"** — #5514（多图变多次）、#9656（typing indicator误导）、#9486（地址被误屏蔽）反映Telegram渠道在 multimodal 处理和内容过滤方面存在用户体验断层。

### 用户满意点
- SOP无头执行的修复（#9494已合）是对自动化用户的重要回应。
- OpenAI兼容端点需求（#8550）获得持续关注，社区期待生态对接。
- 架构清理工作（#8043、#9853）获得维护者明确推进，用户对此表示认可。

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 状态 | 风险提示 |
|----------|------|----------|
| #9348 | in-progress，无Fix PR | P1安全漏洞，WhatsApp mode=business实际全开放 |
| #9390 | in-progress，无Fix PR | P1，emergency stop对runtime路径无效 |
| #9387 | in-progress，无Fix PR | P1，多平台审批响应无身份验证 |
| #9815 | accepted，关联RFC #8424 | P1，forbidden_paths权限绕过 |
| #9816 | accepted，无Fix PR | P1，成本追踪完全失效 |
| #9805 | in-progress，由#9841跟进 | P1，SOP headless模式卡死 |
| #8731 | in-progress，无Fix PR | P2，MCP僵尸进程累积 |
| #9035 | in-progress，无Fix PR | P2，Docker Compose端口绑定问题 |
| #9834 | accepted，无Fix PR | P2，CI测试稳定性问题 |

**维护者建议

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*