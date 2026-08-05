# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 05:56 UTC

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



# OpenClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

OpenClaw 今日保持**高强度活跃**：24小时内 Issues 更新 500 条、PR 更新 500 条，Issue 关闭率 21.4%（107/500），PR 合并/关闭率 22.4%（112/500），无新版本发布。核心焦点集中在**会话状态稳定性**（subagent 完成丢失、迁移阻塞、主线程饱和）和**安全加固**（API Key 作用域化）两条主线。多个 P0/P1 级 Bug 已有关联 Fix PR 处于等待作者/维护者审查状态，项目整体处于"高负载修复期"。

---

## 2. 版本发布

**无新版本发布。**

当前最新稳定版本仍为 `2026.7.1`，`2026.7.2-beta.7` 已暴露多处回归（Issue #118846、#115908、#119263）。建议生产环境暂缓升级至 7.2 beta，待 P0 迁移阻塞问题（#112395、#119263）修复后再评估。

---

## 3. 项目进展

### 今日关闭/合并的重要 PR

| PR | 作者 | 说明 |
|---|---|---|
| [#119498](https://github.com/openclaw/openclaw/pull/119498) | steipete | **已关闭** — 修复 QA smoke test 使用 mock provider 而非真实 provider 的问题，确保 Anthropic/OAuth 测试路径真实可验证 |
| [#119494](https://github.com/openclaw/openclaw/pull/119494) | steipete | **已关闭** — 修复 Gateway 启动失败后临时目录泄漏问题 |
| [#119507](https://github.com/openclaw/openclaw/pull/119507) | ruel225 | **待审** — 修复 memory 索引 dirty flag 不比对磁盘文件数导致的静默冻结（关联 #119411） |
| [#119271](https://github.com/openclaw/openclaw/pull/119271) | wangmiao0668000666 | **待审** — 修复 Agent DB v14→v15 迁移因缺少 `entry_valid` 列而崩溃的 P1 阻塞问题 |
| [#119260](https://github.com/openclaw/openclaw/pull/119260) | wangmiao0668000666 | **待审** — 修复 managed media cleanup 在 session store 不可读时误删文件的 P0 数据丢失问题 |

**整体判断**：今日关闭的 PR 以 QA 基建和清理为主，实质性的 Bug Fix PR 多处于 `⏳ waiting on author` 或 `📣 needs proof` 状态，说明维护团队正在严格把关高优先级修复的可靠性。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 热度标签 | 核心诉求 |
|---|---|---|---|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 59 | 🦞 diamond lobster, P1 | Realtime voice 会话资源边界失控，需建立硬 ownership bounds |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 23 | 🦞 diamond lobster, P1 | Subagent 完成结果静默丢失，无重试/通知/自动重启 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | 🐚 platinum hermit, P3 | 多编码 Content-Disposition 文件名统一处理工具 |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 15 | 🦐 gold shrimp, P1 | Gateway 主线程启动即饱和，plugin-metadata snapshot 饿死 accept loop |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 12 | 🦞 diamond lobster, P1 | Session transcript 投影在持续写入下 livelock，阻塞所有 channel transport |

### 高关注 PR

| PR | 说明 |
|---|---|
| [#119319](https://github.com/openclaw/openclaw/pull/119319) | **MCP 2.0 迁移** — 从遗留 monolith `@modelcontextprotocol/sdk` 迁移至 2026-07-28 无状态规范，影响面大，标注 `needs proof` |
| [#119477](https://github.com/openclaw/openclaw/pull/119477) | **子系统集成 API Key 作用域化** — `OPENAI_TTS_API_KEY` 等命名空间隔离，关联安全 Issue #119074 |
| [#119476](https://github.com/openclaw/openclaw/pull/119476) | **`allowAmbientProviderKeys` 开关** — 拒绝未在配置中显式指定的凭证，进一步收紧安全边界 |
| [#119127](https://github.com/openclaw/openclaw/pull/119127) | **P0 数据保护** — 防止 TTL sweep 误删 chat history 中引用的原始附件 |

**热点分析**：社区当前最痛的是**子代理完成丢失**（#44925、#67777、#92433、#118018 多条关联 Issue）和**Gateway 主线程阻塞**（#118846、#115908、#119369）。这两类问题直接影响多代理编排和大规模部署的稳定性，是下一阶段维护重点。安全类 PR（#119476、#119477）反映用户对凭证泄露风险的高度敏感。

---

## 5. Bug 与稳定性

### P0 级（发布阻塞）

| Issue | 标题 | Fix PR | 状态 |
|---|---|---|---|
| [#119090](via #119260) | Managed media cleanup 在 session store 不可读时误删文件 | [#119260](https://github.com/openclaw/openclaw/pull/119260) | ⏳ waiting on author |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 从 6.11 升级到 7.1 后 migration preflight 阻塞 Gateway 启动 | [#119271](https://github.com/openclaw/openclaw/pull/119271) | 📣 needs proof |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env 序列化双引号破坏 AWS_REGION 主机名 | 无关联 PR | 待处理 |

### P1 级（高严重）

| Issue | 标题 | Fix PR | 状态 |
|---|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移缺少 `entry_valid` 列导致 gateway 拒绝启动 | [#119271](https://github.com/openclaw/openclaw/pull/119271) | 📣 needs proof |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程启动即饱和，plugin-metadata snapshot 饿死 RPC | [#119369](https://github.com/openclaw/openclaw/pull/119369) | ⏳ waiting on author |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript 投影 livelock 阻塞所有 channel | 无关联 PR | 待处理 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 会话资源无界保留 | 无关联 PR | 待处理 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失（多条关联：#67777、#92433、#118018） | 无关联 PR | 待处理 |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | `CLAUDE_CLI_CLEAR_ENV` 未能屏蔽 Anthropic API Key，单日 13.7M tokens 意外计费 | 已关闭 | 需确认修复完整性 |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) | Embedded prompt-lock session takeover 在 tool failure 后 abort 而非 retry | 无关联 PR | 待处理 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 在模型完成后因 stale `expectedLeafEntryId` 被拒 | 无关联 PR | 待处理 |

### P2 级（中等）

| Issue | 标题 | Fix PR | 状态 |
|---|---|---|---|
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | Memory 文件 watcher 不重新索引，`memory status` 报 Dirty: no | [#119507](https://github.com/openclaw/openclaw/pull/119507) | 👀 ready |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏导致 zombie 累积 | 无关联 PR | 待处理 |
| [#116116](https://github.com/openclaw/openclaw/issues/116116) | Model registry `catalog.json` schema 违规 + 未保护的成本解引用崩溃 | 无关联 PR | 待处理 |
| [#108265](https://github.com/openclaw/openclaw/issues/108265) | Feishu streaming 模式升级后渲染极慢（字符逐个 drip） | 无关联 PR | 待处理 |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有 persistent session 被硬限制在 128k context | 无关联 PR | 待处理 |

**稳定性评估**：今日 Issues 中 **🦞 diamond lobster**（最高评级）占比显著，且多个 P0/P1 Bug 存在关联 Fix PR 但处于等待状态，表明项目处于**修复冲刺期**。Subagent 完成丢失是跨 Issue 的共性根因问题（#44925、#67777、#92433、#118018），建议维护者统一排查 `subagent-announce-delivery.ts` 的 lifecycle 边界。

---

## 6. 功能请求与路线图信号

| Issue/PR | 诉求 | 路线图判断 |
|---|---|---|
| [#45758](https://github.com/openclaw/openclaw/issues/45758) + [#100960](https://github.com/openclaw/openclaw/pull/100960) | 支持 YAML 配置文件；命令清单与 inspect 工具 | PR #100960 已推进 command catalog，YAML 支持可作为后续扩展 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX 渲染 | 👍 10，用户呼声高，但非核心路径 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | WebChat 支持自托管 STT/TTS（绕过浏览器 Speech API） | 与 #119477 子系统集成 Key 方向一致，可能是同一路线图切片 |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | Chat-first Android 原生表面探索 | 独立 fork 验证中，upstreaming 需谨慎评估 |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | Memory 分块支持 heading-aware + entity extraction | 提升 memory_search 质量的关键改进 |
| [#79168](https://github.com/openclaw/openclaw/issues/79168) | 工具输出内容级 prompt injection 扫描 | 安全路线图明确信号，XML 包裹不够 |
| [#119319](https://github.com/openclaw/openclaw/pull/119319) | MCP 2.0 无状态规范迁移 | **高概率纳入下一版本**，协议层面重大升级 |
| [#119476/119477](https://github.com/openclaw/openclaw/pull/119476) | API Key 子系统作用域化 | **高概率纳入下一版本**，安全加固核心措施 |

---

## 7. 用户反馈摘要

### 核心痛点

1. **Subagent 完成丢失反复出现**：多个用户报告 subagent 结果在 timeout/drain/orphan prune 条件下静默丢失，且无重试或通知机制（#44925、#67777、#92433、#118018）。用户情绪：** frustrated **，认为这是多代理架构的根基性问题。

2. **升级路径脆弱**：从 6.11→7.1（#112395）、7.1→7.2（#119263）均出现 migration 阻塞，用户被迫手动修复数据库。用户反馈：`doctor --fix` 在非标准场景下失效。

3. **意外计费风险**：#117956 报告 `CLAUDE_CLI_CLEAR_ENV` 未能完全屏蔽 Anthropic API Key，导致单日 13.7M tokens 意外计费。用户对凭证管理的安全性高度敏感，这也是 #119476/#119477 安全 PR 的背景。

4. **Feishu/Telegram 渠道体验退化**：#108265 报告升级后 Feishu streaming 字符 drip；#116512 报告 Telegram progress 重复评论。中国用户群体反馈集中。

5. **WebChat canvas 状态管理问题**：#118560 报告 session reset 后早期消息不可见；#77136 报告部分 assistant 消息在 WebChat 消失（TUI 正常，transcript 完整）。

### 正面反馈

- QA 测试可靠性改进（#119498、#119494）得到维护者认可
- MCP 2.0 迁移（#119319）和 API Key 作用域化（#119477）被用户视为正确的安全方向
- Command catalog（#100960）为可观测性打下基础

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 天数 | 严重度 | 提醒 |
|---|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | ~146 | P1 🦞 | Subagent 完成丢失根因未定位，多条关联 Issue |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 2026-04-16 | ~112 | P1 🦞 | 同一根因的另一表现 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 2026-06-12 | ~54 | P1 🦞 | announce lifecycle 边界问题 |
| [#97616](https://github.com/opencl

---

## 横向生态对比



# 2026-08-05 开源 AI 智能体项目横向对比分析报告

## 1. 生态全景

2026 年夏季，个人 AI 助手与自主智能体开源生态呈现"头部高修复压力、腰部快速迭代、长尾分化加剧"的三极态势。OpenClaw 和 ZeroClaw 作为架构复杂的核心项目，已进入**稳定性冲刺期**，P0/P1 Bug 密集暴露；LobsterAI 和 NanoBot 则处于**功能扩张期**，以版本发布和用户功能交付为主。安全加固（API Key 作用域化、网关认证）和通道生态扩展（Dial/SMS/语音、MCP 2.0）成为跨项目的共性主题，标志着生态从"能用"向"可靠可用"过渡。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | Release | 健康度 | 状态判断 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 无 | ⚠️ 高负载修复期 | 维护压力大，P0/P1 积压 |
| **LobsterAI** | 1 | 14 | ✅ 2026.8.3 | 🟢 8.2/10 | 功能扩张期，稳定发布节奏 |
| **NanoBot** | 4 | 20 | 无 | 🟢 良好 | 高产出，WebUI 重构密集落地 |
| **ZeroClaw** | 38 | 50 | 无 | 🟡 稳健 | 架构收敛，PR 流水积压 |
| **PicoClaw** | 3 | 4 | 无 | 🟢 良好 | 认证/可观测性优化 |
| **NanoClaw** | 0 | 5 | 无 | B+ | 渠道扩展期，Dial 功能待合并 |
| **NullClaw** | 0 | 1 | 无 | ⚠️ 低活跃 | 单一贡献，维护节奏缓慢 |
| **Moltis** | 0 | 1 | 无 | ⚠️ 低活跃 | 仅 Dependabot，无功能推进 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | — | 无活动 |
| **Hermes / IronClaw / CoPaw** | — | — | — | ⚠️ 数据缺失 | 摘要生成失败 |

---

## 3. OpenClaw 在生态中的定位

**技术定位**：OpenClaw 是当前生态中**架构复杂度最高、多代理编排能力最强**的核心框架，其子代理生命周期管理（subagent）、Gateway 多线程模型、Agent DB 迁移机制是其他项目尚未涉及的深水区。

| 维度 | OpenClaw | 同类项目 |
|---|---|---|
| **架构规模** | 多进程 Gateway + 多通道 + MCP 2.0 + Agent DB 迁移链 | NanoBot/PicoClaw 偏单 Gateway；LobsterAI 偏客户端 |
| **并发模型** | 主线程 accept loop + subagent 异步编排 | 多数为同步/轮询模式 |
| **多代理能力** | 原生 subagent，有生命周期管理痛点 | NanoBot/ZeroClaw 部分支持 |
| **通道覆盖** | 最全面（Telegram/Feishu/WebChat/MCP等） | NanoBot 多通道但轻量化；LobsterAI 侧重云信集成 |
| **社区规模** | Issues 500+/日，活跃贡献者密集 | NanoBot 20 PRs/日；LobsterAI 14 PRs/日；其余均 < 10 |
| **版本节奏** | 保守，7.2-beta 因回归暂缓 | LobsterAI 周发布；NanoBot 按需发布 |

**核心优势**：生态广度、架构深度、协议扩展性（MCP 2.0 迁移）。**核心风险**：P0 迁移阻塞和 subagent 完成丢失等架构级 Bug 影响多代理部署的可靠性。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **凭证安全与隔离** | OpenClaw、NanoBot、ZeroClaw | OpenClaw：API Key 作用域化（#119476/#119477）；NanoBot：`os.environ` 泄漏漏洞（#4784，30天+未修）；ZeroClaw：强制 Webhook 认证准入（#9744） |
| **MCP 协议演进** | OpenClaw、NanoBot、PicoClaw | OpenClaw：MCP 2.0 无状态规范迁移（#119319）；NanoBot：MCP Apps host 渲染支持（#5251）；PicoClaw：Exa 搜索提供商扩展（#3299） |
| **多通道/多渠道扩展** | NanoClaw、NanoBot、LobsterAI | NanoClaw：Dial SMS + AI 语音（#3041/#3050）；NanoBot：Matrix/WeCom/Telegram 通道修复；LobsterAI：云信超大群 NIM 集成 |
| **可观测性与成本透明** | OpenClaw、PicoClaw | OpenClaw：`CLAUDE_CLI_CLEAR_ENV` 凭证屏蔽失败导致意外计费（#117956）；PicoClaw：Anthropic 缓存 Token 丢失（#3251） |
| **会话/代理生命周期稳定性** | OpenClaw、ZeroClaw | OpenClaw：Subagent 完成静默丢失（#44925，146天未解）；ZeroClaw：Agent 生命周期契约重构 |
| **Web UI 体验** | NanoBot、PicoClaw、LobsterAI | NanoBot：Quick Chat/Vite dev mode 重构；PicoClaw：长历史记录输入卡顿（#3281）；LobsterAI：侧边栏广告无法永久关闭（#2374） |
| **数据库迁移可靠性** | OpenClaw | OpenClaw：v14→v15 迁移阻塞（#112395/#119263），`doctor --fix` 失效 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多代理编排、MCP 生态、全通道覆盖 | 企业级/重度多代理用户、协议扩展开发者 | Gateway 多线程模型，Agent DB 版本迁移链，subagent 异步生命周期 |
| **NanoBot** | WebUI 体验、多通道 IM（Telegram/Matrix/WeCom）、快速会话 | 个人 AI 助手用户、多平台 IM 运营者 | 轻量 Gateway，Vite 前端架构，Trusted Proxy Auth |
| **LobsterAI** | 客户端体验、云信集成、信用活动/游戏化 | 中国用户、网易云信生态用户、C 端消费者 | React + Electron 桌面客户端，云信 NIM 深度集成 |
| **ZeroClaw** | 网关安全、Agent 生命周期契约、WASM 插件隔离 | 注重安全边界的部署者、插件生态构建者 | 沙箱隔离（Docker/WASM），强制认证准入，异步 Eval 框架 |
| **PicoClaw** | OAuth 远程认证、成本可观测性、搜索引擎扩展 | 无头部署用户、成本敏感型运营方 | 轻量 CLI + Web UI，Exa/Anthropic 提供商扩展 |
| **NanoClaw** | 渠道扩展（Dial SMS/语音）、Discord 集成、Skill 架构 | Discord/SMS 渠道用户、需要语音触达的场景 | Skill 系统 + Host 层抽象，多通道适配器 |
| **NullClaw** | CLI provider 扩展（Grok/Codex/Gemini） | 命令行偏好用户、xAI Grok 早期采用者 | spawn-per-request 模式，可选 provider 插件架构 |
| **Moltis** | 文档/网站依赖维护 | 低活跃维护者 | 单一 Dependabot 驱动 |

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────┐
│  第一梯队：高活跃 + 架构深水区                        │
│  OpenClaw · ZeroClaw                                │
│  → 处于"修复冲刺期"，技术债集中暴露，需要大量维护投入│
├─────────────────────────────────────────────────────┤
│  第二梯队：高活跃 + 功能扩张期                        │
│  NanoBot · LobsterAI · PicoClaw                     │
│  → 发布节奏稳定，社区贡献活跃，产品化程度高           │
├─────────────────────────────────────────────────────┤
│  第三梯队：中低活跃 +  niche 定位                     │
│  NanoClaw · NullClaw                                │
│  → 特定渠道/场景深耕，贡献者稀少，合并节奏慢          │
├─────────────────────────────────────────────────────┤
│  第四梯队：低活跃 / 停滞                             │
│  Moltis · TinyClaw · ZeptoClaw                      │
│  → 维护节奏极低或无活动                              │
└─────────────────────────────────────────────────────┘
```

**成熟度判断**：
- **OpenClaw**：技术成熟度高但**可靠性成熟度待验证**（P0 Bug 146天未解）
- **LobsterAI / NanoBot**：产品成熟度最高，有持续版本发布和用户反馈闭环
- **ZeroClaw**：架构设计处于收敛期，PR 积压 50 条反映维护者审慎态度
- **NanoClaw / PicoClaw**：功能模块已成型，但生态规模有限

---

## 7. 值得关注的趋势信号

### 7.1 安全从"锦上添花"变为"发布前必要条件"
三个项目（OpenClaw、NanoBot、ZeroClaw）均主动推进凭证隔离和网关认证加固。NanoBot 的 #4784 安全漏洞已开放 30 天+未修复，构成**反面教材**——说明即使高活跃度项目也存在安全响应滞后风险。开发者应优先评估项目的安全补丁响应速度。

### 7.2 MCP 2.0 成为下一代协议升级锚点
OpenClaw（#119319）和 NanoBot（#5251）同时推进 MCP 相关能力，反映出**MCP 协议正在从可选扩展变为基础设施层**。PicoClaw 的 Exa 搜索扩展也遵循同一趋势。对于智能体开发者，MCP 2.0 兼容性将成为项目选型的重要指标。

### 7.3 多代理编排的"可靠性鸿沟"已经显现
OpenClaw 的 subagent 完成丢失（#44925）和 Gateway 主线程阻塞（#118846）是**架构复杂度带来的必然代价**——多代理系统在理论上有优势，但在工程实现上需要解决生命周期管理、资源边界、超时重试等深层问题。ZeroClaw 的 Agent 生命周期契约重构和 WALM 超时保护（#9403）是对同一问题的不同解决路径。开发者在构建多代理系统时，应优先关注运行时契约的完备性。

### 7.4 客户端体验成为差异化竞争主战场
LobsterAI 的信用活动、NanoBot 的 Vite dev mode + Quick Chat、PicoClaw 的长历史输入卡顿问题，均指向**用户体验正在从"功能可用"向"交互流畅"跃迁**。对于个人 AI 助手类产品，WebUI 的响应性、会话管理、视觉一致性已成为用户留存的关键因素。

### 7.5 渠道扩展进入"最后一公里"
从文本 IM 扩展到 SMS/语音通话（NanoClaw Dial）、从通用网关扩展到可信代理认证（NanoBot Trusted Proxy）、从单一搜索引擎扩展到 Exa/MST 多引擎（NanoBot #5234 / PicoClaw #3299），说明生态正在向**全触点、多模态、多引擎**方向收敛。对开发者而言，渠道适配的完整性和工具生态的丰富度是选型时的重要考量。

---

**报告结论**：2026 年 8 月初的开源 AI 智能体生态处于**从功能扩张向质量巩固过渡的关键窗口期**。OpenClaw 和 ZeroClaw 承担架构深水区的技术债清偿，LobsterAI 和 NanoBot 引领产品化体验，其余项目在 niche 领域补充。建议技术决策者关注 MCP 2.0 兼容性、凭证安全响应速度、以及多代理运行时契约的完备性这三项核心指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时 NanoBot 保持高活跃度：**20条PR**中16条已合并/关闭，4条待处理；**4条Issues**均为新开或活跃状态，无版本发布。今日开发重心集中在 **WebUI 体验升级**（视觉一致性、快捷聊天、Vite开发模式）和 **多通道稳定性修复**（Matrix、Telegram、WeCom）。社区贡献者参与度较高，多个 bug 修复同步落地，项目整体健康度良好，技术债清理节奏加快。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 **16条**，主要推进以下方向：

| PR | 内容 | 影响 |
|---|---|---|
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | 新增 **Quick Chat**（持久会话）与 **Temporary Chat**（临时内存会话） | WebUI 首次支持快速对话入口，区分长期/临时使用场景 |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | WebUI 视觉一致性重构（层级化阴影、平铺布局、移除冗余动画） | 统一设计语言，提升 UI 专业度 |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | 修复 activity pane 裁剪边缘羽化效果 | 视觉细节修复 |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | 移除 request-scoped `Tool.available()` 层，简化授权模型 | 代码架构清理，降低复杂性 |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Mattermost 新增线程/主频道分组策略分离配置 | 通道功能增强 |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | 支持 Trusted Proxy Bootstrap Auth（如 Cloudflare Tunnel） | 部署安全性提升 |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | WeCom 媒体文件名清理为空时的 fallback | 文件写入崩溃修复 |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram 代码块语言含特殊字符时保留 fence 完整性 | 渲染修复 |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | 补全 Telegram `group_mode` 配置字段 | 长期遗漏的 bug 修复 |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | WebUI prompt rail 预览支持 Markdown 渲染 | 体验优化 |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | WebUI 时间戳 tooltip 样式统一 | 视觉统一 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | WebUI 浮动控件样式统一 | 视觉统一 |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | Automation 触发标记与时间戳对齐 | UX 细节优化 |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | 拒绝未注册的斜杠命令并给出提示 | 命令行体验增强 |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | 集成 **Vite dev mode**（`nanobot webui --dev`） | 开发者工作流升级 |
| [#5241](https://github.com/HKUDS/nanobot/pull/5241) | 行内 token 高亮样式精炼 | 视觉优化 |

**整体评估**：今日以 WebUI 重构和通道修复为主，16条PR一次性落地显示维护团队执行力强，前端开发流程（Vite HMR）也已补齐，对项目可持续性有积极意义。

---

## 4. 社区热点

| # | 类型 | 标题 | 评论/状态 | 分析 |
|---|---|---|---|---|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Issue | Security: Provider API keys leaked via `os.environ` | 2评论 / OPEN | **高关注安全漏洞**，2026-07-06 创建至今未修复。gateway 类型 provider 会覆盖全局环境变量，非 gateway 使用 `setdefault` 存在竞态风险。需优先处理。 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Issue | MCP Apps host support in WebUI | 0评论 / 新建 | 用户希望 MCP 服务器的 UI 面板（`io.modelcontextprotocol/ui`）能在 WebUI 中渲染，而不仅是作为文本/图片 artifacts。符合 MCP 生态趋势，可能被纳入路线图。 |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Issue | Matrix bot 邀请后不自动加入房间 | 0评论 / 新建 | Continuwity 等 homeserver 拒绝空 POST body，已有对应修复 PR [#5248](https://github.com/HKUDS/nanobot/pull/5248) 待合并。 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR | 集成 mst-python 作为 MetaSearch provider | 待合并 | 通过 RRF 聚合多引擎搜索结果，填补 Web 搜索能力空白，P1 优先级，有望进入下一版本。 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR | Telegram 自定义 Bot API base URL | 待合并 | 支持自建/企业网关部署，P2 优先级，用户需求明确。 |

---

## 5. Bug 与稳定性

按严重程度排序：

| # | 严重程度 | 描述 | 关联 PR |
|---|---|---|---|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | 🔴 高（安全） | API Key 通过全局 `os.environ` 泄漏，provider 间相互覆盖 | 暂无修复 PR |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | 🟡 中 | Matrix 邀请后 bot 不自动加入房间（Continuwity 兼容） | [#5248](https://github.com/HKUDS/nanobot/pull/5248) 待合并 |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | 🟡 中 | WeCom 文件名清理为空时写入目录而非文件（已合并修复） | ✅ 已修复 |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | 🟡 中 | Telegram 代码块语言含特殊字符时 fence 损坏（已合并修复） | ✅ 已修复 |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | 🟡 中 | Telegram `group_mode` 配置字段缺失导致静默忽略（已合并修复） | ✅ 已修复 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | 🟠 中高 | Telegram polling 网络闪断后永久静默（待合并） | 待合并 |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | 🟢 低 | `.gitignore` 未跟踪 `memory/.cursor` 和 `history.jsonl` | 暂无 PR |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 纳入下一版本可能性 |
|---|---|---|---|
| MCP Apps host 渲染支持 | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Issue，无 PR | 中 — 需评估 WebUI 渲染能力 |
| MST MetaSearch provider 集成 | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR 待合并（P1） | **高** — 已完成且优先级最高 |
| Telegram 自定义 Bot API URL | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR 待合并（P2） | 高 — 功能完整，仅待审查 |
| Quick Chat / Temporary Chat | [#5184](https://github.com/HKUDS/nanobot/pull/5184) | ✅ 已合并 | 已在当前版本 |
| Vite dev mode 集成 | [#5239](https://github.com/HKUDS/nanobot/pull/5239) | ✅ 已合并 | 已在当前版本 |
| Trusted Proxy Auth | [#5210](https://github.com/HKUDS/nanobot/pull/5210) | ✅ 已合并 | 已在当前版本 |

**路线图判断**：今日合并的 PR 已覆盖多个 P1/P2 项，下一版本预计聚焦于 **MCP 生态扩展**（Apps host）和 **搜索能力整合**（MST）。

---

## 7. 用户反馈摘要

| 来源 | 用户痛点/反馈 |
|---|---|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | 多 provider 部署时 API Key 互相污染，安全敏感用户担忧 credentials 泄漏 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | MCP 服务器的富 UI 面板（如仪表盘、表单）在当前 WebUI 中仅以纯文本展示，用户体验断层 |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix 用户反映 bot 被邀请后不自动入室，影响自动部署和工作流连续性；Continuwity 等新兴 homeserver 兼容性不足 |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | 新工作区初始化后 `.gitignore` 配置不完整，`memory/.cursor` 和 `history.jsonl` 被意外纳入版本控制 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | 生产环境中 Telegram polling 在网络抖动后会**永久静默**，日志无报错，运维发现困难 |

---

## 8. 待处理积压

| # | 类型 | 标题 | 创建时间 | 风险 |
|---|---|---|---|---|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | 🔴 安全 | API keys 通过 `os.environ` 泄漏 | 2026-07-06（30天+） | 建议维护者优先处理，涉及凭证安全 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | PR | Telegram polling 静默卡死恢复 | 2026-07-29 | 已有一个待合并 PR，建议加快审查 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR | Telegram 自定义 Bot API URL | 2026-07-14 | 功能完整，待合并 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR | MST MetaSearch provider | 2026-08-03 | P1 优先级，待合并 |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | PR | Matrix join POST body 修复 | 2026-08-04 | 阻塞 Issue #5247，待合并 |

---

**日报结论**：NanoBot 当前处于**高产出期**，WebUI 重构和通道稳定性修复密集落地，技术债清理节奏积极。需重点关注 **#4784 安全漏洞**（长期未修复）和 **Telegram/Matrix 通道的待合并 PR**，建议维护者在下一轮 release 前优先处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# 📅 Hermes Agent 项目动态日报 | 20

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报 — 2026-08-05

---

## 1. 今日速览

过去24小时 PicoClaw 社区活跃度较高，共新增 7 条开发者动态（3 Issues + 4 PRs）。两个修复类 PR 已完成合并（OAuth 登录容错、Anthropic 缓存 Token 统计），项目认证稳定性和可观测性有所提升。同时有两个关键 Bug 仍待处理：Web UI 历史消息过多时输入卡顿、MCP 服务断连导致对话挂起，两者均对用户体验影响较大。整体项目健康度良好，维护者响应及时。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（2 条）

| PR | 作者 | 说明 |
|---|---|---|
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | honbou | **修复 OAuth 登录失败问题**：解决 headless/远程场景下授权回调失效的四个独立原因，使 `picoclaw auth login --provider <oauth>` 在远程服务器等无浏览器环境中的成功率显著提升。 |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | hydrogenbond007 | **修复 Anthropic 缓存 Token 丢失**：补全 `Anthropic SDK Provider` 和 `Anthropic Messages API Provider` 中 prompt cache 相关用量指标的捕获，运维方可据此判断缓存是否生效，避免计费盲区。 |

> **整体评估**：今日合并聚焦于认证稳定性和成本可观测性两个长期痛点，虽非核心功能扩展，但对生产环境部署友好度有明显推进。

---

## 4. 社区热点

| 类型 | 编号 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| Issue | #3281 | Web UI 输入框在长历史记录时严重卡顿 | 3 | 1 | [链接](https://github.com/sipeed/picoclaw/issues/3281) |
| Issue | #3269 | MCP 服务断连导致 Agent 循环挂起，界面停止响应 | 3 | 1 | [链接](https://github.com/sipeed/picoclaw/issues/3269) |
| PR | #3299 | 新增 Exa 原生 Web Search 提供商 | 0 | 0 | [链接](https://github.com/sipeed/picoclaw/pull/3299) |
| PR | #3317 | 在 LLM 响应调试日志中输出缓存 Token | 0 | 0 | [链接](https://github.com/sipeed/picoclaw/pull/3317) |

**热点分析**：

- **#3281** 和 **#3269** 是当前最受关注的两个 Bug，均获得 👍 支持，反映出用户对 **Web UI 性能** 和 **MCP 稳定性** 的强烈诉求。#3269 的问题尤为关键——MCP 连接失败导致整个对话链挂起，属于生产环境高风险问题。
- **#3299** 新增 Exa 搜索提供商，填补了 `tools.web` 生态的一个空白，若合并将扩展项目搜索引擎支持。
- **#3317** 是对 [#3251](https://github.com/sipeed/picoclaw/pull/3251) 的补充，关注 Gateway 层调试可观测性，两条 PR 方向互补。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 严重程度 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务连接失败时 Agent 循环挂起，Chat 界面完全停止响应 | 高——直接影响可用性 | 暂无 |
| 🟡 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 会话历史较长时输入框严重卡顿 | 中——影响交互体验 | 暂无 |
| 🟢 低 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 版本无法启动服务、路径不可配置（已关闭/stale） | 低——已 stale 关闭 | 暂无 |

---

## 6. 功能请求与路线图信号

| PR/Issue | 方向 | 判断 |
|---|---|---|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增 Exa 原生 Web Search 提供商 | 需求明确、实现完整（含配置与范围过滤），合并概率较高，可纳入下一版本工具集扩展 |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 在 LLM 调试日志中补充缓存 Token 输出 | 与 #3251 形成完整可观测性闭环，若合并将完善多提供商的调试信息一致性 |

> **路线图信号**：项目正在向两个方向发力——**工具生态扩展**（Exa 搜索）和 **可观测性完善**（缓存 Token 追踪），均符合当前 AI Agent 框架的通用演进趋势。

---

## 7. 用户反馈摘要

- **认证体验仍存痛点**：[#3280](https://github.com/sipeed/picoclaw/pull/3280) 的提交信息表明，OAuth 远程登录在授权回调环节存在多种边界失败场景，是 headless 部署（Docker/K8s/SSH 远程）用户的高频障碍，本次修复覆盖了四种独立成因。
- **成本不可见引发焦虑**：[#3251](https://github.com/sipeed/picoclaw/pull/3251) 的作者在描述中明确指出，Anthropic 缓存 Token 数据丢失导致运营方"无法检查 prompt cache 是否工作"，反映出生产用户对 API 成本优化的实际需求。
- **MCP 稳定性是阿喀琉斯之踵**：[#3269](https://github.com/sipeed/picoclaw/issues/3269) 用户报告 MCP 服务失败后对话完全卡死，说明当前 Agent 循环缺乏对工具调用的超时与降级机制，是用户体验的核心风险点。
- **Web UI 性能有待优化**：[#3281](https://github.com/sipeed/picoclaw/issues/3281) 用户描述了"keep try to input"反复尝试输入的操作场景，表明长会话场景下前端渲染或状态管理存在性能瓶颈。

---

## 8. 待处理积压

| 编号 | 类型 | 创建日期 | 状态 | 建议 |
|---|---|---|---|---|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Bug | 2026-07-20 | OPEN | 🔴 建议优先处理，MCP 断连挂起属于高影响问题，可考虑增加连接超时与重试机制 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 2026-07-21 | OPEN | 🟡 建议评估前端虚拟滚动或分页加载方案，缓解长历史记录下的输入延迟 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR | 2026-07-26 | OPEN | 功能完整，建议尽快 Review 以扩展工具生态 |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | PR | 2026-08-04 | OPEN | 与 #3251 互补，可合并评审 |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Issue | 2026-06-26 | CLOSED/stale | 已 stale 关闭，若 Android 需求持续可重新开启 |

---

*报告生成时间：2026-08-05 | 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-08-05

---

## 1. 今日速览

过去24小时内，NanoClaw 项目整体活跃度偏低，未产生任何新 Issue，也无新版本发布。PR 方面共有 5 条更新，其中 1 条已合并（#3154），4 条仍处于待合并状态。核心亮点是 **Dial 通道适配器**（SMS + AI语音通话）功能即将通过两个关联 PR（#3041、#3050）上线，同时 Discord Webhook 审批逻辑的关键 Bug 修复（#3185）已进入合并流程。项目近期重心明显偏向渠道扩展与稳定性修复，整体进展稳健。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### ✅ 今日已合并/关闭

| PR | 类型 | 作者 | 摘要 |
|---|---|---|---|
| [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | Bug Fix | Koshkoshinsk | 修复 agent-runner 中定时任务的 `current_time` 渲染逻辑：现从 `process_after`（有效调度时间）派生，保留创建时间戳作为历史数据兜底；新增含工作日信息的生成时间字段。 |

**影响评估：** 此修复解决了定时任务时间戳展示不一致的问题，提升了调度和执行日志的可追溯性，对使用 Agent 定时任务的用户有直接利好。

### 🔄 待合并 PR（4 条）

- **[#3185](https://github.com/nanocoai/nanoclaw/pull/3185)**（Bug Fix · omerh）：修复 Discord Webhook 交互中 `custom_id` 解析 Bug——分割 `\n` 分隔符导致所有审批按钮实际触发"拒绝"逻辑，属 **P0 级严重缺陷**，合并后将显著提升 Discord 渠道的可用性。
- **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)**（Feature Skill · OmriBenShoham）：新增 Dial 通道适配器，支持 SMS 和 AI 语音通话集成。
- **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)**（Feature Skill · OmriBenShoham）：在 Channel Picker 和 Wizard 中集成 Dial，配合 #3041 形成完整功能闭环。
- **[#3186](https://github.com/nanocoai/nanoclaw/pull/3186)**（Refactor · zvi-fried）：为 Skill 自有能力添加 Host 层抽象（host seams），属于架构改进，有助于后续 Skill 系统的可扩展性。

---

## 4. 社区热点

今日无新开 Issue，无新增评论数据，社区讨论热度较低。

**值得关注：**

- [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) — Discord 审批 Bug 的修复涉及 Webhook 交互路径的核心逻辑，合并后预计将改善大量 Discord 用户的使用体验，值得持续跟进评论反馈。
- [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Dial 通道扩展是项目首个 SMS/语音通话集成，若合并将标志着 NanoClaw 从纯文本 IM 渠道向多模态通信的演进，建议关注后续 PR 中的测试覆盖和接入文档。

---

## 5. Bug 与稳定性

| 严重程度 | PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 P0 | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Discord `ask_question` / 审批卡片中，点击任何按钮均解析为"拒绝"，因 Webhook `custom_id` 未按正确分隔符解码 | 🟡 待合并 |
| 🟡 P1 | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | 定时任务渲染时间取自创建时间而非实际调度时间，日志显示异常 | ✅ 已合并 |

**稳定性评估：** 今日修复了一项 P0 级 Discord 渠道关键 Bug，合并后将消除用户在使用 Discord 审批功能时"点击通过却实际拒绝"的痛点，整体稳定性提升明显。

---

## 6. 功能请求与路线图信号

**今日无新增 Issue，但从待合并 PR 可推断以下路线图方向：**

1. **多渠道集成战略** — Dial（SMS + AI语音）的合并（#3041、#3050）表明项目正从 IM 渠道向传统通信协议扩展，可能预示着下一版本将支持更丰富的触达方式。
2. **Skill 系统架构演进** — #3186 的 Refactor 为 Skill 能力添加 Host 层抽象，暗示维护团队正在为未来更复杂的 Skill 依赖注入和跨 Skill 协作做铺垫。
3. **Agent 调度可观测性** — #3154 的时间戳修复反映社区对定时任务执行状态可见性的需求，后续可能还会有相关增强 PR。

---

## 7. 用户反馈摘要

今日无新 Issue 和评论，用户反馈数据暂缺。

基于近期 PR 可间接推断：
- **痛点：** Discord 审批按钮行为异常已对实际用户造成困扰（#3185），属于高优先级修复项。
- **满意点：** 定时任务时间逻辑修复（#3154）体现了对 Agent 调度透明度的重视，获得维护者响应。

---

## 8. 待处理积压

| PR/Issue | 创建日期 | 天数未合并 | 状态 | 建议关注 |
|---|---|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) — Dial 通道适配器 | 2026-07-14 | ~22 天 | 待合并 | Feature 功能，依赖 #3050 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Dial 集成到 Picker/Wizard | 2026-07-14 | ~22 天 | 待合并 | Feature 功能，依赖 #3041 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — Host seams Refactor | 2026-08-04 | 1 天 | 待合并 | Refactor，建议快速跟进 |

**提示：** #3041 和 #3050 已开放超过三周，虽为 Feature Skill 类型可能涉及较多 Review 工作，但建议维护者评估合并节奏，避免功能积压影响用户预期。

---

**📊 项目健康度评分：B+**  
活跃度一般，但关键 Bug 修复及时，功能扩展方向清晰，无阻塞性 Issue 积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报
**日期：2026-08-05 | 数据截止：过去 24 小时**

---

## 1. 今日速览

NullClaw 项目今日活跃度较低，无新版本发布，Issues 全数为零。唯一动态为 PR #981 处于待合并状态，为项目新增 xAI Grok CLI 支持。整体项目处于平稳期，社区维护者暂无新提交或发布动作。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**PR #981 — [feat(provider): add grok-cli provider](https://github.com/nullclaw/nullclaw/pull/981)**
- 作者：`valonmulolli` | 创建：2026-07-29 | 最后更新：2026-08-04
- 状态：OPEN（待合并）

该 PR 为 NullClaw 新增 `grok-cli` provider，采用与现有 `codex-cli` / `gemini-cli` / `claude-cli` provider 相同的 **spawn-per-request** 模式，委托给本地已安装并认证的 `grok` CLI（xAI Grok）。这是一个可选 provider，用户需自行安装 CLI 并配置认证。

**进展评估**：PR 已提交 7 天且最近有更新（2026-08-04），但尚未进入合并阶段。若合并，将扩充 NullClaw 的 provider 生态，支持 xAI Grok 作为可选后端。

---

## 4. 社区热点

今日无活跃 Issue 讨论。

**PR #981** 是当前唯一开放 PR，关注点在于：
- Grok CLI provider 的认证机制与现有 provider 保持一致性
- spawn-per-request 模式的边界条件处理（超时、错误码、stdin/stdout 解析）

**用户诉求分析**：xAI Grok 作为新兴 CLI 工具，用户希望将其纳入 NullClaw 的统一 provider 接口，享受与其他 provider 相同的配置管理和错误处理体验。

---

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

---

## 6. 功能请求与路线图信号

**PR #981** 本身是一个功能扩展请求，反映了用户希望：
- 将 xAI Grok CLI 作为一等公民接入 NullClaw
- 保持与现有 CLI provider 一致的开发模式（可选、本地依赖、spawn 模式）

**路线图信号**：若此 PR 被合并，表明维护者接受"可选 provider"模式，未来可能继续扩展其他 CLI 工具（如 Codex、Gemini CLI 等已有实现）作为可选后端。

---

## 7. 用户反馈摘要

无今日 Issue 评论可供提炼。

**PR #981 潜在关注点**（基于摘要推断）：
- 用户已主动实现 Grok CLI provider，表明社区对 xAI Grok 有实际需求
- 实现遵循既有模式，降低了维护者审查成本

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 最后更新 | 链接 |
|------|------|------|----------|----------|------|
| PR | #981 | feat(provider): add grok-cli provider for xAI Grok CLI | 2026-07-29 | 2026-08-04 | [PR #981](https://github.com/nullclaw/nullclaw/pull/981) |

**维护者提醒**：PR #981 已等待 7 天未合并，建议尽快审查或提供反馈，以维持贡献者积极性。

---

## 项目健康度评估

| 指标 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⚠️ 低 | 24 小时内仅 1 条 PR，无 Issue、无发布 |
| 社区参与 | 平稳 | 有贡献者主动提交功能 PR |
| 维护响应 | 待观察 | PR #981 等待合并中 |
| 代码质量 | 良好 | PR 遵循既有模式，结构清晰 |

**综合判断**：NullClaw 处于功能扩展期，核心生态稳定，但近期缺乏活跃维护节奏。建议关注 PR #981 的合并进展，以评估项目对第三方 CLI provider 的接受度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 🦞 LobsterAI 项目日报 — 2026-08-05

---

## 1. 今日速览

今日项目活跃度较高，共处理 **14 条 PR**（11 条已合并/关闭，3 条仍待审查），并发布了 **Release 2026.8.3**，是一次包含功能新增与体验优化的综合性版本更新。社区侧仅新增 1 条 Bug Issue（#1200），无崩溃或严重回归报告，整体项目健康状况良好。依赖升级由 dependabot 自动推进，前端核心栈（React、Vite、Electron）均有小幅版本跃迁，技术债务管理方面持续跟进。

---

## 2. 版本发布

### 🏷️ Release 2026.8.3（2026-08-04）

**PR：** [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430)

**合并分支：** `release/2026.8.3` → `main`

**更新内容：**
- 新增 **native credit-reward 活动**（启动信用活动），包括海报素材打包、领取流程与动画体验优化
- 优化 **首次登录体验**，简化启动流程
- 新增 **Artifact 自动预览开关**，用户可控制是否自动预览生成的内容
- 改善 **模型错误处理** 逻辑，提供更清晰的失败反馈
- 提升 **Windows 安装包** 稳定性

**破坏性变更 / 迁移注意事项：** 无公开说明；用户只需更新客户端即可，无需手动迁移配置。

---

## 3. 项目进展

今日合并/关闭的重要 PR 按类别整理如下：

### 功能开发
| PR | 标题 | 作者 |
|----|------|------|
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | 优化启动信用活动体验（海报裁切、错误提示本地化、重试绑定） | btc69m979y-dotcom |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | 禁用活动最终奖励自动弹窗 | btc69m979y-dotcom |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | 补全启动信用活动分析字段（登录跳转 URL、错误消息上报） | btc69m979y-dotcom |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | 打包启动信用活动海报与 CTA 素材 | btc69m979y-dotcom |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | 优化登录页面 | fisherdaddy |

### 依赖升级（dependabot）
| PR | 变更 |
|----|------|
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | `cross-env` 7.0.3 → 10.1.0 |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | `react-dom` 18.3.1 → 19.2.4 |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | `vite` 5.4.21 → 8.0.9 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | `electron` 40.2.1 → 43.2.0，`electron-builder` 同步升级 |

### 日志修复
| PR | 标题 |
|----|------|
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) | fix rlog 202683 |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | fix rlog 202683 |

**进展评估：** 今日以 Release 2026.8.3 为核心，集中交付了信用活动功能与登录体验优化，同时完成了多项依赖的大版本升级（React 18→19、Vite 5→8、Electron 40→43），项目技术栈整体向前推进了约 **1 个主版本代际**。

---

## 4. 社区热点

### Issue #1200 — NIM 超大群消息中 teamTypeNum 硬编码错误（未关闭）
- **链接：** [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200)
- **状态：** OPEN / stale
- **评论：** 1 | 👍：0 | 创建：2026-04-01 | 最后更新：2026-08-05
- **关联 PR：** [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)（尚未合并）

**诉求分析：** 用户反映在云信超大群中使用 @提及机器人时，群名无法正常显示，仅回退为原始 ID。根本原因是 `nimGateway.ts` 第 917 行 `teamTypeNum` 传值与 V2NIM SDK 枚举定义不匹配（superTeam 传了普通群类型号，普通群传了 p2p 类型号）。该 Issue 已 stale 近 4 个月，修复 PR 也已存在，但尚未合并，建议维护者尽快 review。

---

## 5. Bug 与稳定性

| 级别 | 问题 | Issue / PR | 状态 | Fix PR |
|------|------|-----------|------|--------|
| 🟡 中 | NIM 超大群 @机器人时群名显示异常（硬编码 teamTypeNum 错误） | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | OPEN / stale | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) |
| 🟢 低 | rlog 日志记录异常（202683 相关） | [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434)、[#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | ✅ CLOSED | — |

**稳定性评估：** 今日无崩溃或严重回归报告。@机器人群名显示问题属于已知 bug，有修复方案待合并，对核心功能无阻断影响。

---

## 6. 功能请求与路线图信号

| 请求 | PR | 状态 | 纳入下一版本可能性 |
|------|----|------|------------------|
| 永久隐藏侧边栏广告横幅 | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | OPEN | ⭐⭐⭐⭐ 高 — 用户痛点明确（关联 Issue #2342），已有完整实现，仅待审查 |
| Electron 主版本升级（40→43） | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | OPEN | ⭐⭐⭐ 中 — 依赖升级通常随 Release 周期合并，建议在下一个 release 分支时一并处理 |

---

## 7. 用户反馈摘要

- **满意点：** 启动信用活动的视觉素材本地化打包（#2427）、错误提示本地化（#2433）、登录流程优化（#2429）等改动获得了正面反馈，用户可直接感受到体验提升。
- **痛点：**
  - 侧边栏广告横幅无法永久关闭，用户多次临时关闭后仍需反复操作（[#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 明确回应此诉求）。
  - NIM 超大群 @机器人时群名显示为原始 ID，影响使用体验（[#1200](https://github.com/netease-youdao/LobsterAI/issues/1200)）。
  - 活动最终奖励自动弹窗打扰用户（[#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) 已修复）。

---

## 8. 待处理积压

| 优先级 | 条目 | 状态 | 建议 |
|--------|------|------|------|
| 🔴 高 | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) — NIM teamTypeNum 硬编码 Bug | Issue stale / PR 未合并 | 修复 PR 已就绪，建议尽快 review 合并 |
| 🟡 中 | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — 永久隐藏侧边栏广告 | OPEN | 功能完整，用户呼声高，建议纳入下个迭代 |
| 🟡 中 | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→43 升级 | OPEN | 依赖升级，建议与下次 Release 一并处理 |

---

**📊 项目健康度评分：8.2 / 10**

- ✅ Release 节奏正常，今日完成一次综合性版本发布
- ✅ 依赖管理活跃，React/Vite/Electron 等核心栈均有升级
- ⚠️ 1 个中等 Bug 修复 PR 待合并（#1201），1 个用户反馈 PR 待 review（#2374）
- ✅ 无严重稳定性问题或回归

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目日报 — 2026-08-05

---

## 1. 今日速览

Moltis 项目今日整体活跃度偏低。过去24小时内仅产生 **1 条 PR 更新**，无 Issue 变动，无新版本发布。PR 来源于 Dependabot 自动依赖更新，不涉及功能或 bugfix。项目处于**低活跃/维护期**状态，社区贡献节奏平稳。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 类型 | 说明 |
|---|---|---|
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | `chore(deps-dev)` | 将 `/website` 目录下的 `undici` 从 `7.28.0` 更新至 `7.29.0` |

- 该 PR 为依赖升级，由 Dependabot 自动发起，尚未合并。
- 当前无功能类 PR 合并，项目整体**未推进新功能或修复**。

---

## 4. 社区热点

今日无活跃讨论。无 Issue 或 PR 获得评论或 react 反应。

---

## 5. Bug 与稳定性

无新增 Bug 报告或稳定性问题。

---

## 6. 功能请求与路线图信号

今日无新功能请求或路线图相关 Issue/PR 提交。

---

## 7. 用户反馈摘要

今日无用户反馈（Issues 评论数为 0），暂无可提炼的用户痛点或使用场景。

---

## 8. 待处理积压

| 类型 | 编号 | 描述 | 状态 |
|---|---|---|---|
| PR | [#1184](https://github.com/moltis-org/moltis/pull/1184) | `undici` 依赖升级（7.28.0 → 7.29.0） | OPEN，待合并 |

- **提醒**：该 PR 由 Dependabot 创建，建议维护者及时审核合并，避免依赖滞后带来安全风险。

---

**📊 健康度评估**：今日项目活跃度较低，无新功能开发或 bug 修复推进。建议关注 PR #1184 的合并状态，维持依赖安全性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 | 2026-08-05

## 1. 今日速览
过去24小时项目保持高活跃状态：Issues 更新 38 条（活跃/新开 36，关闭 2），PR 更新 50 条（全部处于待合并状态，0 已合并/关闭），无新版本发布。社区今日高度聚焦于 **Agent 生命周期契约**、**安全作用域隔离** 与 **网关认证加固**，反映出项目正从功能扩张期转入架构收敛与健壮性补课阶段。PR 流水线中已堆积多个 P1/S0 级修复与评估框架重构，合并节奏趋于保守，预计维护者正在进行最终审查与集成测试。整体项目健康度良好，技术债正在系统性清偿，但核心运行时契约（Session/Memory/Security）正处于关键重构窗口。

---

## 2. 版本发布
无。

---

## 3. 项目进展
今日虽无 PR 合并，但 50 条活跃 PR 展现了清晰的推进主线：

| PR | 主题 | 推进价值 |
|----|------|----------|
| [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) | 强制 Webhook 认证准入 | 引入 `VerifiedWebhookIngress` 密封类型，补齐网关侧攻击面，直接响应 S0 漏洞 |
| [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) | 避免 Docker 沙箱嵌套 | 修正 `RuntimeKind` 选择逻辑，防止双重容器边界导致的运行时冲突 |
| [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) | WASM 插件墙钟超时保护 | 新增 `plugins.limits.call_timeout_ms`（默认 30s），兜底无限执行风险 |
| [#9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9217) / [#9219](https://github.com/zeroclaw-labs/zeroclaw/pull/9219) / [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) | Eval 框架重构 | 异步 Grader、Workspace/Budget/JSON 多维评估器、

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*