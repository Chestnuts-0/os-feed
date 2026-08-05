# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 06:19 UTC

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

---

## 1. 今日速览

OpenClaw 在 2026-08-05 保持极高活跃度：过去24小时共产生 500 条 Issue 更新（390 条新开/活跃，110 条关闭）与 500 条 PR 更新（377 条待合并，123 条已合并/关闭），社区贡献节奏稳健。今日无新版本发布，但多个 P0/P1 级 Bug 修复 PR 已进入 maintainer review 阶段，核心稳定性问题（子代理完成丢失、会话状态竞态、迁移失败）正被集中推进。项目整体健康度较高，维护者团队对高优先级问题的响应速度有所改善。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日 123 条 PR 已合并/关闭，以下为重点进展：

| PR | 类型 | 说明 |
|---|---|---|
| [#119512](https://github.com/openclaw/openclaw/pull/119512) | 修复 | 会话去重时复用 SQLite 身份绑定，消除 65 存储扫描中 16,900 次无谓身份准备，显著降低启动开销 |
| [#119299](https://github.com/openclaw/openclaw/pull/119299) | 修复 | 修复 Codex 后端定时任务丢失 MCP 工具与原生能力的回归问题（Closes #113475） |
| [#119127](https://github.com/openclaw/openclaw/pull/119127) | 修复 | 将 media TTL 清理任务移出受管输出树，防止配置 `attachments.ttlHours` 后聊天历史引用附件被误删（Fixes #119088） |
| [#119499](https://github.com/openclaw/openclaw/pull/119499) | QA | QA 通道修复：保留原生消息 ID 与斜杠命令参数，解决模拟测试中 ID 覆盖问题 |
| [#119491](https://github.com/openclaw/openclaw/pull/119491) | QA | QA 修复：确保场景选择时优先确定 provider 再选 model，避免 Lane 冲突 |
| [#119511](https://github.com/openclaw/openclaw/pull/119511) | 修复 | cron 任务清理会话时补写 `.deleted` 归档，确保自动化操作记录完整可追溯 |
| [#81939](https://github.com/openclaw/openclaw/pull/81939) | 修复 | 恢复 `/new` 与 `/reset` 无参数时向下交由模型处理的回归（对应 Issue #77733） |
| [#117906](https://github.com/openclaw/openclaw/pull/117906) | 修复 | 飞书多 Bot 群聊中保留 Bot 自身 @mention，解决多 Bot 场景下各自误判未被寻址的问题 |
| [#119308](https://github.com/openclaw/openclaw/pull/119308) | 修复 | Control UI 头像在 Tailscale identity-header 认证下 401 问题的前端保留方案 |

**整体评价**：今日合并重点围绕会话状态完整性、定时任务可靠性、渠道消息正确性三大维度，项目核心稳定性正在系统性加固。

---

## 4. 社区热点

### 🔥 最活跃 Issues（评论数 Top 5）

1. **[Issue #116201](https://github.com/openclaw/openclaw/issues/116201)** — Realtime voice 会话保留无界 provider/consult 状态（59 条评论，🦞 diamond lobster）
   - 核心诉求：语音会话在 provider 响应缓慢或突发时，superseded 的 consult 工作与大帧音频不被及时释放，导致内存与状态泄漏。

2. **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** — 子代理完成在超时时静默丢失（23 条评论，🦞 diamond lobster）
   - 核心诉求：子代理结果在 E31/E42/E45 等错误路径下既无重试也无通知，用户完全无感知地丢失任务结果。

3. **[Issue #48788](https://github.com/openclaw/openclaw/issues/48788)** — 集中式文件名编码工具（20 条评论，🐚 platinum hermit）
   - 核心诉求：Feishu 中文文件名 UTF-8/Latin-1 误读问题需从架构层面统一处理多编码（Shift-JIS、EUC-KR、GB18030 等）。

4. **[Issue #118846](https://github.com/openclaw/openclaw/issues/118846)** — Gateway 主线程启动即饱和（15 条评论，🦐 gold shrimp）
   - 核心诉求：plugin-metadata snapshot + fs statting 使主线程持续占用 ~100% 单核，导致 accept loop 饥饿，ws_upgrade 返回 1006。

5. **[Issue #115908](https://github.com/openclaw/openclaw/issues/115908)** — 会话转录投影在持续写入下 livelock（13 条评论，🦞 diamond lobster）
   - 核心诉求：同步重建路径使事件循环阻塞数十秒，所有渠道传输 Stall。

### 📌 高关注 PR

- [#95830](https://github.com/openclaw/openclaw/pull/95830) — Telegram poll 答案路由进会话（等待作者补充 proof）
- [#104160](https://github.com/openclaw/openclaw/pull/104160) — CLI 命令参考文档自动生成（需要 proof）
- [#117128](https://github.com/openclaw/openclaw/pull/117128) — SecretRef 执行路径预检（需要 proof）

---

## 5. Bug 与稳定性

### P0 级（发布阻塞）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env generator 双重引号导致 AWS_REGION hostname 解析失败 | 待修复 |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 从 6.11 升级至 7.1 后迁移预检阻塞 gateway 启动，迁移表为空 | 待修复 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid`，gateway 拒绝启动 | 待修复 |

### P1 级（高严重性）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 无界状态保留 | 待修复 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失（多模式） | 待修复 |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程启动饱和，accept loop 饥饿 | 待修复 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 转录投影 livelock 阻塞事件循环 | 待修复 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 在模型完成后报 "thread switched branches"（expectedLeafEntryId 未刷新） | 待修复 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | memory 文件监听器从不重新索引，`memory status` 报告 Dirty: no 但索引数低于磁盘数 | 待修复 |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 嵌入式助手阶段不重试瞬态 LLM/socket 错误，长 turn 直接失败 | 待修复 |
| [#116116](https://github.com/openclaw/openclaw/issues/116116) | Anthropic catalog.json 违反自身 schema，未防护的成本解引用崩溃所有 `openclaw models` 命令 | 待修复 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏导致 zombie 累积与运行时退化 | 待修复 |

### 已有关闭的已修复 Bug

- [#117956](https://github.com/openclaw/openclaw/issues/117956) — claude-cli 在 `CLAUDE_CLI_CLEAR_ENV`  scrubbing 后仍产生计费（~13.7M tokens/天）
- [#52249](https://github.com/openclaw/openclaw/issues/52249) — ACP 父会话在子代理完成后卡住需手动刷新
- [#72031](https://github.com/openclaw/openclaw/issues/72031) — Bedrock `image` 工具在 `aws-sdk` 认证模式下 requireApiKey 抛错
- [#80036](https://github.com/openclaw/openclaw/issues/80036) — Chrome MCP existing-session `profile=user` 页面工具全部超时
- [#45388](https://github.com/openclaw/openclaw/issues/45388) — TUI `--session` 模式不实时流式传输消息

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 关联 PR / 信号 |
|---|---|---|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 集中式多编码文件名处理工具 | PR #48578 已修复 UTF-8/Latin-1 最常见场景，架构级方案待推进 |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | WebChat 文件查看器增加图片预览 | 功能请求，暂无关联 PR |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | Backup CLI 支持 .gitignore 风格排除模式 | 用户痛点明确（node_modules、.env 敏感数据），暂无关联 PR |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | 支持 YAML 作为配置文件格式 | 高 👍（2），DevOps 生态友好需求，暂无关联 PR |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX 渲染 | 高 👍（10），学术/技术用户刚需，暂无关联 PR |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | WebChat 支持自托管 STT/TTS（绕过浏览器 Speech API） | 企业部署场景明确，暂无关联 PR |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | Memory 分块支持 heading-aware + 实体提取 | 改进检索质量，暂无关联 PR |
| [#79168](https://github.com/openclaw/openclaw/issues/79168) | 工具输出内容级 prompt injection 扫描 | 安全增强需求，XML wrapping 仅为结构隔离，内容级防御待实现 |
| [#118570](https://github.com/openclaw/openclaw/pull/118570) | 执行作用域插件 turn yielding | PR 已存在，允许插件工具在完成持久化交接后结束当前 turn |
| [#118623](https://github.com/openclaw/openclaw/pull/118623) | 批量工具搜索查询支持 | PR 已存在，多表面工作流能力发现优化 |
| [#118977](https://github.com/openclaw/openclaw/pull/118977) | SDK 支持实时转录 WebSocket 子协议协商 | PR 已存在，解决 FunASR 等上游服务器 subprotocol 拒绝问题 |
| [#95402](https://github.com/openclaw/openclaw/pull/95402) | 新增希伯来语（he）本地化 | PR 已存在，扩展语言覆盖 |

---

## 7. 用户反馈摘要

### 痛点集中区

1. **会话状态管理脆弱**：多个 Issue（#115700、#115908、#116201、#67777、#92433）反复指向同一类问题——会话状态在亚稳态下（超时、drain、compaction、branch switch）发生静默丢失或 livelock，用户感知为"消息丢了"或"AI 卡死了"。

2. **升级迁移风险高**：#112395、#119263、#111498 三个独立 Issue 均报告升级后 gateway 无法启动或认证失效，用户被迫回滚或手动修复数据库 schema。

3. **多渠道消息正确性**：飞书（#117906、#116237）、Telegram（#95830、#117022）、MS Teams（#119513）的渠道适配层仍有较多边界 case，尤其是群聊 @mention 处理与媒体消息顺序。

4. **资源泄漏与性能**：#118846（主线程饱和）、#97616（zombie 进程）、#116201（无界状态保留）共同指向系统在高负载下的资源管理缺陷。

5. **自托管场景受限**：#45508（STT/TTS 绕过浏览器 API）、#40786（备份排除）、#103804（环境变量引号）反映企业用户在意隐私与可控性，但工具链支持不足。

### 满意点

- `openclaw doctor --fix` 命令在部分迁移问题上提供自救路径
- QA channel 模拟框架持续改进（#119499、#119491、#119492）
- ClawSweeper 自动标签与修复 PR 生成机制在多个 Issue 上生效

---

## 8. 待处理积压

以下 Issue/PR 需维护者重点关注：

| 类型 | ID | 标题 | 积压原因 |
|---|---|---|---|
| 🔴 P0 Issue | [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env generator 双重引号破坏 AWS 认证 | 影响 AWS 部署，无 fix PR |
| 🔴 P0 Issue | [#112395](https://github.com/openclaw/openclaw/issues/112395) | 6.11→7.1 迁移预检阻塞 gateway | 升级路径阻塞，无 fix PR |
| 🔴 P0 Issue | [#119263](https://github.com/openclaw/openclaw/issues/119263) | DB v14→v15 迁移失败 `entry_valid` 列缺失 | 新版本升级阻塞，无 fix PR |
| 🟠 P1 PR | [#95830](https://github.com/openclaw/openclaw/pull/95830) | Telegram poll 答案路由 | 等待作者补充 proof |
| 🟠 P1 PR | [#104160](https://github.com/openclaw/openclaw/pull/104160) | CLI 命令参考文档自动生成 | 需要 proof |
| 🟠 P1 PR | [#117128](https://github.com/openclaw/openclaw/pull/117128) | SecretRef 执行路径预检 | 需要 proof |
| 🟡 长期 Issue | [#40786](https://github.com/openclaw/openclaw/issues/40786) | Backup CLI 排除模式 | 无 fix

---

## 横向生态对比



# 个人 AI 助手开源生态横向对比分析
**报告日期：2026-08-05**

---

## 1. 生态全景

个人 AI 助手开源生态在 2026 年 8 月呈现**多梯队分化态势**：OpenClaw 以日千级活动量稳居生态核心，形成"一个超级项目 + 多个垂直方向补充项目"的格局。社区正经历从"功能跑马圈地"向"稳定性与安全性加固"的转折——多个项目集中修复会话状态管理、多 Agent 通信、渠道适配边界问题。安全合规（Webhook 认证、凭据隔离、Shell 策略分级）成为头部项目的新竞争维度，反映企业级部署需求正在倒逼开源生态升级。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 500 (390新开/活跃, 110关闭) | 500 (123已合并) | 无 | 🟢 高 |
| **Hermes Agent** | 50 | 50 (9已合并) | 无 | 🟢 良好 |
| **IronClaw** | 50 | 50 | v1.1.0-rc.1 | 🟢 良好 |
| **ZeroClaw** | 37 (35新开) | 50 (待合并) | 无 | 🟡 高风险敞口 |
| **NanoBot** | 4 | 21 (16已合并) | 无 | 🟢 良好 |
| **LobsterAI** | 1活跃 | 14 (11已合并) | 2026.8.3 | 🟢 良好 |
| **PicoClaw** | 3 | 4 (2已合并) | 无 | 🟡 中等偏上 |
| **NanoClaw** | 0 | 6 (1已关闭) | 无 | 🟢 稳定 |
| **NullClaw** | 0 | 1 (待合并) | 无 | 🟢 稳定 |
| **Moltis** | 0 | 1 (自动化) | 无 | 🔴 低活跃 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模碾压**：OpenClaw 单日 500 Issue + 500 PR 的活动量是第二梯队（Hermes/NanoBot/IronClaw 各约 50-100 条）的 **5-10 倍**，已形成明显的生态中心效应。

**技术路线差异**：
- OpenClaw：强调**多 Agent 协作 + 多渠道统一接入**，核心投入在会话状态管理、子代理生命周期、DB 迁移可靠性
- Hermes Agent：聚焦 **Telegram 平台深度适配**（Bot API 10.2 全功能对齐），同时推进 god-file 架构重构
- IronClaw：走 **Rust 多 crate 架构**路线，强调错误恢复能力（error-recoverability）和确定性测试
- ZeroClaw：最激进的安全导向，P0 级漏洞集中于**跨 Agent 数据隔离**（知识库、会话归属）
- NanoBot：轻量级 WebUI 优先，侧重渠道 Bug 修复与开发者体验（Vite HMR）

**社区规模**：OpenClaw 拥有最多"🦞 diamond lobster"高级贡献者标识的 Issue（表明长期活跃维护者参与），NanoBot/Hermes 社区贡献者结构更扁平。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话状态可靠性** | OpenClaw、Hermes、PicoClaw | 子代理完成丢失、会话切换消息丢失、转录投影 livelock、Provider 竞态导致会话被替换 |
| **多渠道消息正确性** | OpenClaw、NanoBot、Hermes、ZeroClaw | 飞书/Telegram/Matrix/Discord 群聊 @mention 处理、媒体消息顺序、fenced code 语言标签截断 |
| **Agent 间通信** | NanoClaw、ZeroClaw、Hermes | Agent-to-Agent 消息被内置工具阻断、A2A 协议实现（ZeroClaw Phase 1）、多 Agent 协作边界 |
| **安全与权限隔离** | ZeroClaw、NanoBot、Hermes、IronClaw | Webhook 未认证（ZeroClaw P0）、API 密钥全局环境泄漏（NanoBot #4784）、凭证文件访问防护（Hermes）、Shell 命令分级确认（ZeroClaw RFC） |
| **MCP 生态扩展** | OpenClaw、NanoBot、PicoClaw | MCP 工具丢失回归（OpenClaw）、MCP Apps host 嵌入（NanoBot）、MCP 连接失败优雅降级（PicoClaw） |
| **定时任务可靠性** | OpenClaw、NanoClaw | cron 任务清理归档（OpenClaw）、调度时间语义统一（NanoClaw #3154 已修复） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
|---|---|---|---|
| **OpenClaw** | 全功能多 Agent 平台，强调稳定性与迁移可靠性 | 企业级部署、技术深度用户 | TypeScript/SQLite，重型架构 |
| **Hermes Agent** | Telegram 深度适配 + 平台扩展（Nextcloud/WhatsApp） | Telegram 生态用户、自托管爱好者 | Python，god-file 重构中 |
| **IronClaw** | 错误恢复能力 + 确定性测试 + Rust 架构 | 对可靠性要求极高的生产环境 | Rust multi-crate |
| **ZeroClaw** | 安全优先 + A2A 协议 + Goal Mode | 安全敏感场景、多 Agent 研究 | TypeScript，RFC 驱动开发 |
| **NanoBot** | WebUI 体验 + 轻量多渠道 | 个人用户、快速部署场景 | TypeScript/Vite |
| **LobsterAI** | 桌面客户端 + 积分活动运营 | 中文用户、教育/轻量场景 | Electron/React |
| **PicoClaw** | 嵌入式/OAuth 稳定性 + prompt cache 可观测 | 边缘设备、API 成本敏感用户 | 轻量架构 |
| **NanoClaw** | Dial 频道（SMS/语音）+ Agent 协作 | 通话集成需求场景 | 待确认 |
| **NullClaw** | 本地 CLI 工具链扩展（xAI Grok） | 本地优先、闭源模型用户 | spawn-per-request 模式 |

---

## 6. 社区热度与成熟度

```
活跃度分层：
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
第一梯队（>100条/天）：OpenClaw
第二梯队（50-100条/天）：Hermes Agent、IronClaw、ZeroClaw
第三梯队（10-50条/天）：NanoBot、LobsterAI
第四梯队（<10条/天）：PicoClaw、NanoClaw、NullClaw
第五梯队（极低）：Moltis、TinyClaw、ZeptoClaw
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**快速迭代阶段**：
- **OpenClaw**：高吞吐 PR 合并（123条/天），但 P0 Bug 积压 3 个无 Fix PR，迭代质量需关注
- **ZeroClaw**：50 条 PR 待合并但无一条已合，安全修复与 RFC 讨论并行，处于"设计密集→实施落地"转换期
- **Hermes Agent**：god-file 分解（7 条并行 PR）+ Telegram 功能扩展并行推进

**质量巩固阶段**：
- **NanoBot**：WebUI 视觉一致性重构 + 渠道 Bug 批量修复，进入体验打磨期
- **IronClaw**：v1.1.0-rc.1 发布后架构收敛，迁移兼容性收尾
- **LobsterAI**：2026.8.3 版本发布后依赖升级 + 活动运营功能收尾

---

## 7. 值得关注的趋势信号

### 信号 1：多 Agent 安全隔离成为新战场
ZeroClaw 集中爆发 3 个 P0 安全问题（Webhook 未认证、知识库跨 Agent 读写、会话工具无归属），Hermes 修复凭证文件访问漏洞，NanoBot 暴露 API 密钥全局泄漏——**多 Agent 协作的权限边界正在成为开源项目的核心竞争点**，未来 6 个月内可能出现专门的安全审计工具或认证中间件项目。

### 信号 2：Telegram 平台深度适配竞赛
Hermes Agent 围绕 Bot API 10.2 创建 20+ 子 Issue，OpenClaw 修复飞书/Telegram 多渠道边界 case，NanoBot 推进 Telegram 自定义 API base 和静默恢复——**Telegram 作为企业级 AI 助手入口的战略价值被广泛认可**，预计将催生更多 Telegram 专属 Skill/插件生态。

### 信号 3：会话状态管理是行业共性难题
OpenClaw（子代理丢失、转录 livelock）、Hermes（Desktop 会话切换消息丢失）、PicoClaw（Provider 竞态替换会话）——**不同架构的项目在相同的抽象层面临相似问题**，表明这是 Agent 系统的固有复杂性，可能催生通用的"会话状态机"参考实现或标准化协议。

### 信号 4：架构重构进入收获期
Hermes `web_server.py` 17,700 行 god-file 分解（7 条并行 PR）、IronClaw WS0-WS6 多轮重构落地、OpenClaw QA 通道模拟框架持续改进——**早期"先跑通再重构"的项目开始系统性还技术债**，预计未来 1-2 个版本将显著改善可维护性。

### 信号 5：企业级部署需求倒逼功能完善
PicoClaw prompt cache 计量、LobsterAI 侧边栏广告开关、OpenClaw 备份排除模式、ZeroClaw prompt caching session_id——**个人用户向团队/企业用户延伸过程中，可观测性、可控性、成本敏感度成为新需求维度**，开源项目需平衡个人用户简洁性与企业用户定制化需求。

---

**结论**：个人 AI 助手开源生态正从"功能竞赛"转向"质量与安全竞赛"，OpenClaw 作为生态锚点持续输出稳定性改进，ZeroClaw/Hermes 在安全与平台深度两个方向形成差异化突破，NanoBot/LobsterAI 聚焦终端用户体验打磨。对开发者而言，**会话状态管理、多 Agent 权限隔离、Telegram 平台适配**是未来半年最值得投入的技术方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报
**日期：2026-08-05**  
**数据来源：GitHub (HKUDS/nanobot)**

---

## 1. 今日速览

过去24小时 NanoBot 项目保持**高活跃度**，共处理 25 条活动（4 Issues + 21 PRs），其中 16 条 PR 已合并/关闭，5 条仍开放。贡献重心明显偏向 **WebUI 体验优化**（视觉一致性、临时会话、Vite 开发模式、命令校验等），由 `chengyongru` 和 `Re-bin` 主导；同时多个渠道适配（Matrix、Wecom、Telegram）的 Bug 修复集中推进。项目整体处于稳定的迭代节奏，无新版本发布，但内部质量与体验改进显著。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（16 条）

| PR | 类型 | 贡献者 | 内容摘要 |
|---|---|---|---|
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | 功能 | Re-bin | ~~快速聊天+临时聊天~~（已冲突标记，被 #5252 替代） |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | 重构 | chengyongru | WebUI 视觉一致性重构：统一层级、扁平化布局、移除多余动画 |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | 修复 | chengyongru | WebUI 活动面板边缘羽化渲染修复 |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | 重构 | chengyongru | 移除 request-scoped access grants，简化工具权限模型 |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | 功能 | goodtiding5 | Mattermost 渠道增加 threads 与主频道分离的 groupPolicy 配置 |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | 修复 | santhreal | WeCom 媒体文件名 sanitization 全清除后回退处理 |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | 功能 | concertypin | WebUI 支持可信代理 Bootstrap 认证（Cloudflare Tunnel 等场景） |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | 修复 | santhreal | Telegram fenced code 语言标签特殊字符（c++/html+django）修复 |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | 修复 | aoliaoduo | Telegram `group_mode` 配置字段缺失补全 |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | 修复 | chengyongru | Prompt rail 预览中 Markdown 渲染修复 |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | 修复 | chengyongru | 时间戳 tooltip 样式统一与键盘可访问性 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | 重构 | Re-bin | 统一浮动控件样式语义 |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | 修复 | chengyongru | 自动化元数据与时间戳对齐，优化 hover tooltip |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | 修复 | chengyongru | 拒绝未注册斜杠命令，提供拼写建议 |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | 功能 | chengyongru | 集成 Vite dev 模式（`nanobot webui --dev`），支持前端 HMR |

**整体进展评估**：WebUI 层今日集中交付了约 8 项改进（含 3 项重构），渠道层修复了 3 个长期存在的 Bug，开发体验（Vite HMR）显著改善。项目向"更稳定的多渠道+更一致的 UI"方向稳步演进。

---

## 4. 社区热点

| 条目 | 类型 | 说明 |
|---|---|---|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Issue ⚠️ | **安全：Provider API 密钥通过全局 `os.environ` 污染在 provider 间泄露**。`OpenAICompatProvider._setup_env()` 用 `os.environ[...] = api_key` 直接写入全局环境，gateway 类型会覆盖已有值。此 Issue 创建于 7 月 6 日，截至 8 月 4 日仍未修复，评论 2 条，是今日最受关注的长期安全问题。 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Issue（新） | **MCP Apps host 支持请求**。用户期望 MCP call 结果能以"App"形式嵌入 WebUI，而不仅是模型面向的文本/图片。反映了用户对 MCP 生态扩展的强烈需求。 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR（开放） | **Telegram 自定义 Bot API base URL**。支持自建 Bot API 服务器或企业网关，回应了部分用户对 Telegram 访问稳定性和隐私的需求。 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR（开放） | **Meta-Search Provider（mst-python）集成**。使用 RRF 融合多引擎结果，优先级 P1，有望成为 Web 搜索的重要补充。 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | PR（开放） | **Telegram 静默卡住恢复**。修复网络抖动后 bot 永久停止接收消息的生产问题。 |

---

## 5. Bug 与稳定性

### 高严重程度

| Issue/PR | 描述 | 状态 | 链接 |
|---|---|---|---|
| #4784 | Provider API 密钥通过 `os.environ` 污染泄露 | 🔴 未修复 | [Issue](https://github.com/HKUDS/nanobot/issues/4784) |
| #5247 | Matrix bot 被邀请时不自动加入房间（Continuwity 兼容） | 🟡 未修复 | [Issue](https://github.com/HKUDS/nanobot/issues/5247) |
| — | Matrix 加入修复 PR #5248 已提交 | 🟢 待合并 | [PR](https://github.com/HKUDS/nanobot/pull/5248) |

### 中低严重程度（今日已修复）

| PR | 描述 | 链接 |
|---|---|---|
| #5223 | WeCom 文件名 sanitization 全清除后写入目录而非文件 | [PR](https://github.com/HKUDS/nanobot/pull/5223) |
| #5222 | Telegram fenced code 语言标签截断导致代码块损坏 | [PR](https://github.com/HKUDS/nanobot/pull/5222) |
| #1776 | Telegram `group_mode` 配置字段缺失被静默忽略 | [PR](https://github.com/HKUDS/nanobot/pull/1776) |
| #5242 | 未注册斜杠命令被错误转发给 LLM | [PR](https://github.com/HKUDS/nanobot/pull/5242) |

**稳定性评估**：今日 Bug 修复效率较高（4 个渠道相关 Bug 已闭环），但 **API 密钥泄露（#4784）** 作为安全类问题仍悬而未决，建议优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 判断 |
|---|---|---|
| MCP Apps host 支持 | #5251（今日新 Issue） | 新兴需求，目前尚无对应 PR，可作为下一版本功能候选 |
| Meta-Search Provider 集成 | #5234（P1 PR，开放中） | 高优先级，RRF 多引擎融合方案较完整，**纳入下一版本可能性高** |
| Telegram 自定义 API base | #4919（开放 PR） | 需求明确，已有实现，**纳入可能性高** |
| Temporary Chat 独立入口 | #5252（开放 PR，#5184 冲突替代） | Re-bin 正在推进独立实现，**纳入可能性高** |
| Vite dev 模式集成 | #5239（已合并） | 已完成，提升开发者体验 |

**路线图信号**：项目正持续扩展渠道生态（Mattermost、Telegram 企业化、Meta-Search）并强化 WebUI 体验，安全加固（#4784）是目前最大的短板。

---

## 7. 用户反馈摘要

- **API 密钥安全（#4784）**：用户明确指出多 provider 场景下全局 `os.environ` 写入会导致密钥污染，属于生产环境潜在风险，已反馈近一个月。
- **Matrix 兼容性（#5247 / #5248）**：Continuwity 类自托管 Matrix homeserver 对空 POST body 严格校验，导致 bot 被邀请后无法自动加入，影响自动化部署体验。
- **记忆文件跟踪（#5246）**：`.gitignore` 中 `!memory/` 和 `!memory/MEMORY.md` 的排除规则导致 `memory/.cursor` 和 `history.jsonl` 被意外纳入版本控制，用户希望统一记忆管理。
- **Telegram 长期问题**：`group_mode` 配置静默失效（#1776）和轮询卡死（#5156）均被多次提及，反映用户对 Telegram 渠道稳定性的持续关注。
- **WebUI 体验**：今日大量 PR 来自用户对界面一致性的反馈，包括浮动控件样式、时间戳可读性、命令校验等，用户满意度在逐步提升。

---

## 8. 待处理积压

| 条目 | 类型 | 创建时间 | 说明 | 链接 |
|---|---|---|---|---|
| #4784 | Issue ⚠️ | 2026-07-06 | API 密钥泄露安全问题，已开放 30 天，无修复 PR，建议优先处理 | [Issue](https://github.com/HKUDS/nanobot/issues/4784) |
| #4919 | PR | 2026-07-14 | Telegram 自定义 API base，P2 优先级，已有实现但未合并 | [PR](https://github.com/HKUDS/nanobot/pull/4919) |
| #5156 | PR | 2026-07-29 | Telegram 静默卡住恢复，P2 优先级，修复生产问题 | [PR](https://github.com/HKUDS/nanobot/pull/5156) |
| #5234 | PR | 2026-08-03 | Meta-Search Provider 集成，P1 优先级，待合并 | [PR](https://github.com/HKUDS/nanobot/pull/5234) |
| #5252 | PR | 2026-08-05 | Temporary Chat 独立入口，替代冲突的 #5184，新提交待审 | [PR](https://github.com/HKUDS/nanobot/pull/5252) |

---

**项目健康度评级**：🟢 **良好** — PR 吞吐率高（21 条/天），主要渠道 Bug 修复及时，WebUI 重构持续推进；需关注的唯一重大风险是 **#4784 安全漏洞**。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报
**日期：2026-08-05** | 数据周期：过去24小时

---

## 1. 今日速览

Hermes Agent 项目今日保持**高活跃度**，共处理 100 条活动（50 Issues + 50 PRs），其中 41 条 PR 待合并、9 条已合并/关闭，但无新版本发布。社区焦点集中在三个方向：Telegram Bot API 10.2 功能对齐（20+ 条关联 Issue）、`web_server.py` god-file 大规模重构（7 条并行 PR），以及若干 Desktop/网关稳定性修复。项目整体健康度良好，架构清理与平台扩展并行推进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR（9 条）

| PR | 类型 | 说明 |
|----|------|------|
| [#79116](https://github.com/NousResearch/hermes-agent/pull/79116) | Bug Fix | 修复 Buzz coordinator 传输层问题：统一最终答案顺序、保留 DM 时间线、支持非成员 `@token` 引用 |
| [#79131](https://github.com/NousResearch/hermes-agent/pull/79131) | Bug Fix | 修复 Console 在命令以字符串退出时崩溃（`SystemExit("msg")` 导致 `int()` 失败） |
| [#78939](https://github.com/NousResearch/hermes-agent/pull/78939) | Bug Fix | `hermes doctor` 增加 npm audit 冷却期解释，避免误报 |
| [#58457](https://github.com/NousResearch/hermes-agent/pull/58457) | Bug Fix | 同上（与 #79131 重复修复，已合并） |

### 重要进行中的 PR

- **[PR #79134](https://github.com/NousResearch/hermes-agent/pull/79134)** — 修复 MCP OAuth provider 在事件循环停止后无法恢复的问题（进程级缓存失效导致永不可用）
- **[PR #12525](https://github.com/NousResearch/hermes-agent/pull/12525)** — Home Assistant 工具调用后增加实体状态验证，解决 API 返回 `success: true` 但实体不存在的问题
- **[PR #11458](https://github.com/NousResearch/hermes-agent/pull/11458)** — 新增 Nextcloud Talk 平台适配器（OCS API + 长轮询）
- **[PR #63721](https://github.com/NousResearch/hermes-agent/pull/63721)** — 新增 `register_background_service()` 插件 API，支持长期运行的观察者服务
- **[PR #11455](https://github.com/NousResearch/hermes-agent/pull/11455)** — Mistral API 兼容性补丁（tool call ID 长度限制等）
- **[PR #79132](https://github.com/NousResearch/hermes-agent/pull/79132)** — 新增 `email_send` 工具（AgentMail/SMTP + macOS Keychain 密钥管理）
- **[PR #75738](https://github.com/NousResearch/hermes-agent/pull/75738)** | 修复 `custom_providers[].models.context_length` 仅在启动时生效、部分调用路径未传递配置的问题
- **[PR #78308](https://github.com/NousResearch/hermes-agent/pull/78308)** | 安全修复：拒绝通过 managed-files 读取 `.env` 等凭证文件和 transcript 数据库
- **[PR #6276](https://github.com/NousResearch/hermes-agent/pull/6276)** | 新增 YouTube 自动化 Agent Skill（策略→脚本→缩略图→SEO→发布→分析全流程）

### 架构重构推进

`web_server.py`（17,700 行 god-file）分解工作今日新增 **7 条 PR**，按计划推进：
- [#79129](https://github.com/NousResearch/hermes-agent/pull/79129) — WhatsApp onboarding 路由提取
- [#79128](https://github.com/NousResearch/hermes-agent/pull/79128) — 消息平台目录管理提取
- [#79127](https://github.com/NousResearch/hermes-agent/pull/79127) — 自定义端点路由提取
- [#79126](https://github.com/NousResearch/hermes-agent/pull/79126) — Schema/配置渲染提取
- [#79125](https://github.com/NousResearch/hermes-agent/pull/79125) — 受管理文件路由提取
- [#79124](https://github.com/NousResearch/hermes-agent/pull/79124) — 网关拓扑读取提取
- [#79123](https://github.com/NousResearch/hermes-agent/pull/79123) — 模型分配助手提取

---

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

| Issue | 状态 | 评论数 | 热点原因 |
|-------|------|--------|----------|
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | OPEN | 5 | MiniMax-M3 工具调用后 thinking 中断——核心模型功能缺陷 |
| [#55498](https://github.com/NousResearch/hermes-agent/issues/55498) | CLOSED | 4 | Dashboard BasicAuthProvider 崩溃（已修复合并） |
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | OPEN | 4 | **Telegram Bot API 10.2 功能对齐 Campaign** 元 Issue |

### Telegram 功能对齐话题集群

围绕 meta-issue [#78791](https://github.com/NousResearch/hermes-agent/issues/78791)，社区今日密集创建了 **20+ 条子 Issue**，覆盖 Bot API 10.2 中 Hermes 尚不支持的完整功能面，包括：菜单按钮、所有者变更消息、管理员权限、机器人身份/描述、命令管理、内联/回复键盘、Passport、WebApp、游戏、礼物、支付/Stars、Inline Mode 等。反映出 Telegram 平台用户群体活跃且需求明确。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度

| Issue | 说明 | Fix PR |
|-------|------|--------|
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 在首次工具调用后停止 thinking（/anthropic endpoint），影响核心推理链路 | 暂无 |
| [#79050](https://github.com/NousResearch/hermes-agent/issues/79050) | Desktop 0.20.0 会话切换仍丢失已完成轮次的消息（hydrate 路径用旧数据覆盖本地 pending） | 暂无（#75825 已修复部分路径） |
| [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) | Desktop 远程网关 BasicAuth 登录后 session cookie 立即失效，401 循环 | 暂无 |

### 🟡 中严重度

| Issue | 说明 | Fix PR |
|-------|------|--------|
| [#79113](https://github.com/NousResearch/hermes-agent/issues/79113) | `multiplex_profiles=true` 下 secondary profile 路由到 default 时 HERMES_HOME 残留 | 已关闭 |
| [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | Windows Desktop 启动双后端进程（venv + uv），GIL 竞争导致 gateway 卡顿 | 暂无 |
| [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) | Desktop 退出时后端进程未及时等待 SIGTERM，产生孤儿进程 | 暂无 |

### 🟢 低严重度 / 已修复

- [#55498](https://github.com/NousResearch/hermes-agent/issues/55498) — Dashboard BasicAuthProvider 崩溃 → **已关闭**
- [#79091](https://github.com/NousResearch/hermes-agent/issues/79091) — 自定义 provider 间歇性 APIConnectionError → **已关闭**
- [#57757](https://github.com/NousResearch/hermes-agent/issues/57757) — Desktop 启动时忽略 `is_active` 始终激活 Default profile → **已关闭**

---

## 6. 功能请求与路线图信号

| 需求方向 | 相关 Issue/PR | 纳入下一版本可能性 |
|----------|--------------|-------------------|
| **Telegram Bot API 10.2 全面对齐** | [Issue #78791](https://github.com/NousResearch/hermes-agent/issues/78791) 及 20+ 子 Issue | ⭐⭐⭐⭐ 高——已形成系统化合并计划 |
| **邮件发送工具** | [PR #79132](https://github.com/NousResearch/hermes-agent/pull/79132) | ⭐⭐⭐ 中高——PR 已提交，待评审 |
| **Nextcloud Talk 平台适配器** | [PR #11458](https://github.com/NousResearch/hermes-agent/pull/11458) | ⭐⭐⭐ 中高——完整适配器 PR 已提交 |
| **YouTube 自动化 Skill** | [PR #6276](https://github.com/NousResearch/hermes-agent/pull/6276) | ⭐⭐ 中——可选 Skill，依赖上游 repo |
| **后台服务注册 API** | [PR #63721](https://github.com/NousResearch/hermes-agent/pull/63721) | ⭐⭐⭐ 高——插件系统基础设施补强 |
| **Mistral API 兼容** | [PR #11455](https://github.com/NousResearch/hermes-agent/pull/11455) | ⭐⭐⭐ 高——已有 PR，填补 provider 缺口 |
| **MCP OAuth 恢复** | [PR #79134](https://github.com/NousResearch/hermes-agent/pull/79134) | ⭐⭐⭐ 高——稳定性修复，优先级高 |

---

## 7. 用户反馈摘要

**核心痛点：**

1. **MiniMax-M3 thinking 中断**（[#75725](https://github.com/NousResearch/hermes-agent/issues/75725)）：用户在工具调用场景下遭遇推理链断裂，直接影响多步任务执行能力，是目前最受关注的功能缺陷。

2. **Desktop 会话状态管理**（[#79050](https://github.com/NousResearch/hermes-agent/issues/79050)、[#61457](https://github.com/NousResearch/hermes-agent/issues/61457)、[#76245](https://github.com/NousResearch/hermes-agent/issues/76245)）：会话切换消息丢失、BasicAuth cookie 不持久、后端孤儿进程——Desktop 端用户体验的多个稳定性问题集中爆发，用户反馈"刚从 0.20.0 升级却发现老问题仍在"。

3. **Windows 双进程问题**（[#79087](https://github.com/NousResearch/hermes-agent/issues/79087)）：Windows 用户在 Desktop 启动时遇到 venv 和 uv 两套 Python 环境同时运行，导致 GIL 竞争和 gateway 卡顿，属于平台兼容性典型问题。

4. **Telegram 功能缺失**：大量用户通过子 Issue 表达了对 Telegram 平台功能完整性的强烈诉求，尤其是支付、礼物、内联模式等企业级和娱乐级功能。

---

## 8. 待处理积压

| 类型 | Issue/PR | 风险说明 |
|------|----------|----------|
| **Bug（高）** | [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 thinking 中断无修复 PR，影响核心推理功能 |
| **Bug（高）** | [#79050](https://github.com/NousResearch/hermes-agent/issues/79050) | Desktop 会话消息丢失，0.20.0 已修复部分路径但仍有遗漏 |
| **Bug（中）** | [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) | BasicAuth 会话 cookie 持久化失败，需复现环境 |
| **Bug（中）** | [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | Windows 双后端进程，需平台级诊断 |
| **重构（进行中）** | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | God-file 分解 Epic，7 条 PR 今日并行提交，需协调合并顺序避免冲突 |
| **安全** | [#78308](https://github.com/NousResearch/hermes-agent/pull/78308) | 凭证文件访问漏洞修复 PR 待合并 |

---

**项目健康度评估：🟢 良好**

- 活跃度：高（100 条/天活动量）
- Bug 响应：中等（部分关键 bug 暂无 fix PR）
- 架构维护：积极（god-file 分解大规模推进）
- 功能扩展：活跃（Telegram、Nextcloud、邮件、YouTube 等多方向扩展）
- 建议关注：MiniMax-M3 thinking 中断和 Desktop 会话状态两类核心体验问题需优先处理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 | 2026-08-05

## 1. 今日速览

过去 24 小时内，PicoClaw 项目保持中等活跃度：**4 条 PR 更新、3 条 Issue 更新**，2 个 PR 已合并入主分支，项目核心功能持续迭代。今日主要进展集中在 **OAuth 登录稳定性修复** 与 **Anthropic prompt cache 计量支持** 两个方向。社区同时报告了 2 个 Open 状态的高优先级 Bug（MCP 挂起、Web UI 卡顿），但暂无紧急修复 PR 跟进。无新版本发布。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 作者 | 说明 |
|---|---|---|---|
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | ✅ 已合并 | honbou | 修复浏览器 OAuth 登录在 Headless/远程环境下因回调条件变化而失败的问题，涉及 4 类独立场景的容错处理 |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | ✅ 已合并 | hydrogenbond007 | 补充 Anthropic SDK 及 Messages API Provider 的 prompt cache token 计量，修复缓存指标丢失导致无法验证 cache 生效的问题 |

**项目推进评估**：今日合并的 2 个 PR 均针对可观测性与认证稳定性，属于基础质量改进，对项目长期健康度有正向贡献，但未涉及核心 Agent 循环或模型路由的重大重构。

---

## 4. 社区热点

| 类型 | 编号 | 热度 | 说明 |
|---|---|---|---|
| 🐛 Issue | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | ⭐⭐ | MCP 服务器连接失败导致 Agent 循环挂起、聊天界面停止响应；作者 `ruiyigen`，1 👍 |
| 🐛 Issue | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | ⭐ | Web UI 长会话历史下输入框严重卡顿；作者 `xpader`，1 👍 |
| 🛠 PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | ⭐ | 提议添加 Exa 作为原生 `tools.web` / `web_search` 提供商，支持 Auto 模式与日期过滤；作者 `kesku` |
| 🛠 PR | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | ⭐ | 在 LLM 响应 Debug 日志中补充 prompt cache token 输出，作者 `vmuliadi-astro` |

**分析**：Issue #3269 是当前最受关注的稳定性问题，直接影响 Agent 可用性；PR #3299 与 #3317 形成功能互补——前者扩展搜索能力，后者增强现有 Provider 的可观测性。

---

## 5. Bug 与稳定性

| 优先级 | 编号 | 标题 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败 → Agent 循环挂起 → 聊天界面停止响应 | OPEN | 暂无 |
| 🟡 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长会话历史下输入框严重卡顿 | OPEN | 暂无 |
| 🟢 低 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 版本服务无法启动、路径无法修改 | ✅ 已关闭 (stale) | 已关闭 |

**稳定性评估**：当前 2 个 Open Bug 均无关联 Fix PR，#3269 作为 Agent 核心循环的稳定问题应优先处理。#3182 已 stale 关闭，Android 端问题暂未被社区跟进。

---

## 6. 功能请求与路线图信号

| PR/Issue | 类型 | 说明 | 纳入概率评估 |
|---|---|---|---|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新功能 | Exa 原生 Web 搜索 Provider，支持 `type: auto` 模式与 `startPublishedDate` 过滤 | ⭐⭐⭐ 中高度 — 符合项目扩展 Provider 的方向，实现完整度高 |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 可观测性 | 在 Gateway 调试日志中补充 prompt cache token 输出 | ⭐⭐ 中度 — 与已合并 #3251 互补，属于运维需求 |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 稳定性诉求 | MCP 连接失败时 Agent 不应阻塞聊天界面 | ⭐⭐⭐ 高 — 用户明确痛点，但需独立修复而非功能扩展 |

---

## 7. 用户反馈摘要

- **MCP 连接失败导致界面完全无响应**（#3269）：用户使用 Qwen3 + MCP 组合时，MCP 服务器一旦连接失败，Agent 循环陷入阻塞，Chat 界面停止回复，直接影响用户体验。诉求：连接超时/失败时应优雅降级而非挂起整个循环。
- **Web UI 长会话卡顿**（#3281）：会话历史较长后，输入框响应显著变慢，影响日常使用流畅度。诉求：对长历史会话做前端性能优化（如虚拟列表、增量渲染）。
- **Android 端服务启动失败**（#3182，已 stale）：用户反馈 Android 应用无法启动服务、无法修改存储路径，且已授予完整权限。该 Issue 已关闭，问题状态不明。

---

## 8. 待处理积压

| 类型 | 编号 | 说明 | 建议 |
|---|---|---|---|
| 🛠 PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa 搜索 Provider，提交至今等待 Review | 建议尽快审核合并，扩展搜索能力 |
| 🛠 PR | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | Prompt cache token 日志补充，今日新提交 | 与已合并 #3251 形成完整可观测性闭环 |
| 🐛 Issue | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 Agent 挂起，高优先级无 Fix PR | 建议维护者评估并指派修复，或招募贡献者 |
| 🐛 Issue | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入卡顿，中等优先级无 Fix PR | 建议前端团队跟进性能分析 |

---

**项目健康度评分**：🟡 中等偏上
- 代码合并节奏正常（2 PR/24h）
- Bug 响应滞后（2 个高优 Bug 无 Fix PR）
- 功能扩展活跃（Exa 搜索提议）
- 建议关注 #3269 的修复进度

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-08-05

---

## 1. 今日速览

NanoClaw 今日无新 Issue 提交，整体活跃度以 PR 流转为主。过去 24 小时共 6 条 PR 更新，其中 1 条已关闭（#3154），5 条仍处于待合并状态，无新版本发布。项目处于稳定的日常迭代节奏，社区贡献集中在 Agent 调度修复、Dial 频道集成推进及 Discord 关键 Bug 修复三个方向，整体健康度良好。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### ✅ 已关闭 PR

| PR | 类型 | 作者 | 说明 |
|---|---|---|---|
| [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | Bug Fix | Koshkoshinsk | 修复调度任务的当前时间渲染逻辑，确保定时任务抵达 Agent 时使用 `process_after` 计算的有效执行时间，而非仅依赖创建时间戳。 |

> **进展评估**：#3154 的关闭标志着 agent-runner 调度系统的时间语义得到统一，为后续定时任务的精准调度打下基础。其余 5 条 PR 均待合并，项目整体推进平稳，无阻塞性积压。

---

## 4. 社区热点

今日无 Issue 动态，PR 关注度均较低（👍 均为 0）。以下为今日更新的核心 PR：

- **[PR #3187](https://github.com/nanocoai/nanoclaw/pull/3187)** — `fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works`
  - 修复 Agent 间通信被内置 SendMessage 阻塞的问题，是多 Agent 协作场景的关键修复。
  
- **[PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185)** — `fix(discord): strip \n delimiter in webhook interaction custom_id`
  - 修复 Discord 审批按钮无论点击 Approve 还是 Reject 均返回错误选项的严重 Bug，影响所有通过 webhook 路径的交互。

- **[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — Dial 频道适配器（SMS + AI 语音呼叫）
  - 由 OmriBenShoham 主导，横跨近一个月持续迭代，是近期最显著的集成扩展，反映社区对通话频道的强需求。

---

## 5. Bug 与稳定性

| 优先级 | PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Discord webhook 交互 `custom_id` 解析错误，导致所有审批请求默认被拒绝 | OPEN，待合并 |
| 🟡 中 | [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | Agent-to-Agent 消息因内置 SendMessage 被阻断，协作流程异常 | OPEN，待合并 |
| ✅ 已修复 | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | 调度任务时间语义错误（已关闭） | CLOSED |

---

## 6. 功能请求与路线图信号

- **Dial 频道集成（SMS + AI 语音呼叫）**：[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) 与 [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 形成完整的功能闭环，前者实现频道适配器，后者将其接入配置向导。两项均标记为 **Feature skill**，预计将纳入下一版本发布。
- **Skill 能力宿主化**：[#3186](https://github.com/nanocoai/nanoclaw/pull/3186) 提出为 Skill 自有能力添加 host 接口抽象，属于基础设施层面的重构，为未来 Skill 生态扩展铺路。

---

## 7. 用户反馈摘要

今日无新 Issue，无直接用户反馈收集。从 PR 描述可推断近期核心痛点：

| 痛点 | 来源 |
|---|---|
| Discord 审批按钮点击失效，用户体验严重受损 | PR #3185 |
| Agent 间消息机制异常，多 Agent 场景受阻 | PR #3187 |
| 调度任务时间显示不准确，影响计划任务可靠性 | PR #3154（已修复） |

---

## 8. 待处理积压

| PR | 状态 | 创建时间 | 说明 |
|---|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | OPEN | 2026-07-14 | Dial 频道适配器，积压约 22 天 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | OPEN | 2026-07-14 | Dial 频道接入向导，积压约 22 天 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | OPEN | 2026-08-04 | Skill 宿主化重构，积压 1 天 |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | OPEN | 2026-08-04 | Discord Bug Fix，积压 1 天（高优） |
| [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | OPEN | 2026-08-05 | Agent 间通信修复，积压 0 天（高优） |

> **建议关注**：[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) 与 [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 已开放超过三周，建议维护者优先 review，以释放 Dial 功能闭环。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 — 2026-08-05

---

## 1. 今日速览

NullClaw 今日整体活跃度较低，过去24小时内无 Issues 更新，无新版本发布，仅有一条在途 PR（#981）处于待合并状态。项目维护节奏趋于平稳，暂无紧急问题或重大功能推进。社区贡献者 valonmulolli 正在推进 xAI Grok CLI 的集成，为项目扩展更多本地 AI 工具链支持。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无已合并或关闭的 PR。当前有一条活跃的 PR 在仓库中等待审查：

- **[PR #981](nullclaw/nullclaw PR #981)** — 新增 `grok-cli` 提供程序，支持通过本地 `grok` CLI 调用 xAI Grok 模型。该 PR 遵循项目已有的 `codex-cli` / `gemini-cli` / `claude-cli` 提供程序的 spawn-per-request 模式，是一个可选的可选依赖型功能，需用户本地安装并认证 `grok` CLI。

> 该项目在提供程序扩展方面保持稳健节奏，当前等待合并的 PR 数量适中，未出现积压。

---

## 4. 社区热点

今日无高讨论度的 Issues 或 PR。`[PR #981](nullclaw/nullclaw PR #981)` 是当前唯一活跃贡献条目，评论数为 undefined（可能尚未开放评论或无互动）。

---

## 5. Bug 与稳定性

今日无 Bug 报告、崩溃或回归问题。项目状态稳定。

---

## 6. 功能请求与路线图信号

- **[PR #981](nullclaw/nullclaw PR #981)** 反映社区对扩展本地 CLI 工具支持的持续需求，xAI Grok 是目前主流闭源模型服务之一，此 PR 补全了 NullClaw 对主要 AI 平台 CLI 工具的覆盖。若合并，NullClaw 的提供程序列表将进一步完善。

---

## 7. 用户反馈摘要

今日无新增 Issues 评论，无法提取新的用户反馈。现有 PR #981 摘要表明贡献者注重保持代码一致性（沿用 spawn-per-request 模式），说明社区对架构规范的认可。

---

## 8. 待处理积压

- **[PR #981](nullclaw/nullclaw PR #981)** — 创建时间为 2026-07-29，最近更新时间为 2026-08-04，距今已等待约一周。建议维护者尽快审查，以维持项目贡献流程的良性运转。

---

**项目健康度评估：🟢 稳定**  
活跃度：低 | 代码质量：良好 | 维护节奏：平稳 | 社区参与度：正常

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 | 2026-08-05

## 1. 今日速览
过去24小时 IronClaw 保持高活跃节奏，共产生 50 条 Issue 更新与 50 条 PR 更新，整体处于 **v1.1.0-rc.1 上线后的架构收敛与稳定性加固期**。核心工作聚焦于 WS0–WS6 多轮仓库重构的合并落地、跨频道持久化交付链路的修复，以及 WebUI/自动化能力的体验打磨。项目健康度良好，但 rc.1 → rc.1 启动迁移尚未达到无损标准，需关注发布前的兼容性收尾。

## 2. 版本发布
**`ironclaw-v1.1.0-rc.1`（2026-08-03）**
- **核心变更**：扩展生态接入能力（注册任意托管 MCP 服务器、IronHub 深度链接安装）、跨频道持久化文件附件、Slack `/ironclaw` 斜杠命令，以及对错误可见性的系统性重写。
- **依赖变更**：[PR #5598](https://github.com/nearai/ironclaw/pull/5598) 同步更新了内部 crate 版本：`ironclaw_common` 0.4.2 → 0.5.0（⚠ API 破坏性变更）、`ironclaw_safety` 0.2.2 → 0.2.3、`ironclaw_skills` 0.3.0 → 0.4.0。
- **迁移风险提示**：[Issue #7178](https://github.com/nearai/ironclaw/issues/7178) 指出，从 `v1.0.0-rc.1` 升级至 `v1.1.0-rc.1` 的启动迁移 **当前并非无损自动迁移**，建议生产用户升级前进行状态备份与验证。

## 3. 项目进展
今日推进主要集中在 **架构审计与仓库重构（Waves 0–6）** 的批量化落地，以及 **通道/外发交付层** 的重塑：
- **架构收敛**：`#7152`、`#7181`、`#7190`、`#7189`、`#7187`、`#7186`、`#7179`、`#7175`、`#7174`、`#7172` 构成一组堆叠 PR，系统性执行了 crate 重命名、策略/服务集群驱逐、适配器解析迁移、模块契约拆分及 Wave 3 异常清单清零。项目正从“历史遗留绑定”向 `target architecture` 严格靠拢。
- **通道与交付**：`#7157` 引入了显式的双车道频道交付工具（对话生命周期 + 通知通道）；`#7202` 完成了 `channel_host` 的产品栈构造反转。
- **基础设施与文档**：`#5101` 优化了 live-canary 的 `cargo-component` 安装策略；`#6970`、`#6965` 完成了 V1 术语清理与 IronHub 文档补全。
- **净进度**：架构债清理进入冲刺阶段，核心产品边界已初步清晰，但底层契约审计仍暴露出若干未闭合的例外项。

## 4. 社区热点
| Issue/PR | 状态 | 评论数 | 核心议题 |
|---|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | CLOSED | 15 | Error-recoverability endgame：要求模型能看见错误根因并自主恢复 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | CLOSED | 4 | Hermetic capability testing：建立确定性、可复现的端到端能力覆盖平台 |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | CLOSED | 4 | `cargo clippy` 在主分支特定包集下报红，CI 卫生修复 |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | OPEN | 3 | WS2 扩展宿主重分层：按端口约束而非文件数 sizing |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | OPEN | 3 | 实例删除失败，重新登录后卡在 “Loading your agents...” |

**诉求分析**：社区/开发者焦点已从“功能新增”转向“可观测性与可靠性契约”。高评论 Epics 表明团队正在关闭 v1.1 前的关键技术债闭环，CI 稳定性与测试确定性是当前高频痛点。

## 5. Bug 与稳定性
| 级别 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆无法可靠召回（Champions 测试组独立复现） | 待处理 |
| 🟠 中 | [#6752](https://github.com/nearai

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 📊 LobsterAI 项目动态日报 — 2026-08-05

---

## 1. 今日速览

过去 24 小时，LobsterAI 项目保持中等活跃度：**14 条 PR 更新**（11 条已合并/关闭，3 条仍为 OPEN），**1 条 Issue 活跃**。核心进展围绕 **2026.8.3 版本发布**及配套的启动积分活动（Startup Credit Campaign）功能收尾，同时一批底层依赖（React DOM、Vite、Electron）完成升级。整体项目健康度良好，维护者对近期 PR 响应迅速，但部分长期 stale Issue 仍未关闭，需关注。

---

## 2. 版本发布

> 昨日已发布的 **2026.8.3** 版本（PR #2430，已于 2026-08-04 合并入 main）今日仍在持续产生关联 PR，主要补齐活动相关细节：

- **核心变更**：引入原生积分奖励活动、优化首次登录体验、新增 Artifact 自动预览控制、改进模型错误处理及 Windows 安装包可靠性
- **同日关联提交**：#2429（登录页优化）、#2428（活动分析字段补全）、#2427（活动素材打包）、#2432/#2433（活动体验打磨）
- **今日无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR（11 条）

| PR | 类型 | 说明 |
|---|---|---|
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | Release | 合并 `release/2026.8.3` → main，正式发版 |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | Chore | 登录页 UI 优化 |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | Fix | 补全启动积分活动的分析埋点字段（登录跳转 URL、错误消息、IPC 返回） |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | Feat | 将活动海报/Cta 素材打包进桌面客户端，使用本地资源渲染弹窗 |
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | Fix | 裁切海报白边、完善失败提示本地化、重试前刷新活动绑定 |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | Fix | 禁用世界杯决赛奖励自动弹窗，保留手动领取入口 |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | Chore | `react-dom` 18.3.1 → 19.2.4 |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | Chore | `vite` 5.4.21 → 8.0.9 |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | Chore | `cross-env` 7.0.3 → 10.1.0 |
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) | Fix | rlog 修复 |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | Fix | rlog 修复 |

**评估**：今日主要推进了 **2026.8.3 版本配套功能收尾** 和 **依赖栈大规模升级**，项目向前迈出坚实一步，稳定性与开发体验同步改善。

---

## 4. 社区热点

### 🔥 高关注 Issue / PR

1. **[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200)** — NIM 超大群 `teamTypeNum` 硬编码错误
   - 状态：OPEN / stale
   - 创建时间：2026-04-01（已积压 **4 个月**）
   - 评论：1 | 👍：0
   - **诉求分析**：云信超大群中 @机器人时群名显示异常，影响用户体验。关联 PR #1201 已提交修复，但仍未合并，需维护者审核。

2. **[PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201)** — 修复 #1200 的一行代码变更
   - 状态：OPEN / stale
   - 创建时间：2026-04-01
   - **诉求分析**：与 Issue #1200 同源，修正 NIM SDK 枚举映射错误，修复极简单但影响明确。

3. **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** — 新增隐藏侧边栏广告横幅的永久设置
   - 状态：OPEN（非 stale）
   - 创建时间：2026-07-21
   - **诉求分析**：用户长期反馈侧边栏广告干扰使用（关联 Issue #2342），此 PR 在设置中新增开关，响应社区合理诉求，建议优先审查合并。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🟡 中 | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) NIM 超大群群名无法正确获取（@mention 时显示 raw ID） | OPEN / stale | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) 待合并 |
| 🟢 低 | #2432/#2433 启动积分活动体验问题（自动弹窗、海报白边） | ✅ 已修复 | 已合并 |
| 🟢 低 | #2428 活动分析埋点缺失 | ✅ 已修复 | 已合并 |

> 目前无崩溃类或回归类 Bug 报告，项目近期版本稳定性良好。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 状态 | 纳入下版本可能性 |
|---|---|---|---|
| 隐藏侧边栏广告横幅的永久开关 | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) → Issue #2342 | OPEN | ⭐⭐⭐⭐ 高 — 用户呼声强，实现成本低 |
| NIM 群名显示修复 | [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201) → Issue #1200 | OPEN / stale | ⭐⭐⭐ 中高 — 修复明确，应尽快合并 |
| Electron 大版本升级 | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) electron 40→43 | OPEN | ⭐⭐⭐ 中 — 依赖升级，需测试兼容性 |

**路线信号**：近期开发重心集中在 **用户活动运营（积分 Campaign）** 和 **底层依赖现代化**，同时开始响应社区对界面定制（去广告）的需求。

---

## 7. 用户反馈摘要

- **痛点**：
  - 云信超大群中 @机器人时，群名无法正确显示，暴露原始 ID，影响交互体验（Issue #1200）
  - 侧边栏广告横幅只能临时关闭，缺少永久关闭选项，用户感到困扰（PR #2374 引用 Issue #2342）

- **满意点**：
  - 启动积分活动整体体验持续打磨，修复了海报白边、自动弹窗干扰等问题
  - 2026.8.3 版本首次登录体验优化和 Artifact 自动预览控制受到关注

---

## 8. 待处理积压

| 项目 | 状态 | 积压时长 | 建议 |
|---|---|---|---|
| [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) + [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201) — NIM teamTypeNum 修复 | OPEN / stale | **~4 个月** | 优先合并 PR #1201，修复一行代码即可解决问题 |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40→43 升级 | OPEN | **~4 个月** | 需验证 Electron 大版本升级兼容性后合并 |
| [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — 隐藏侧边栏广告 | OPEN | ~15 天 | 社区需求明确，建议尽快审查 |

---

> 📌 **整体健康度评估**：项目维护活跃，版本迭代节奏稳定，依赖升级及时。主要风险点为 **3 个长期未合并的 PR/Issue**，其中 #1201 修复简单应优先处理，#2374 为高价值用户功能请求。建议维护者集中清理 stale 条目以维持社区信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报 — 2026-08-05

---

## 1. 今日速览

Moltis 项目今日整体处于**极低活跃度**状态，过去24小时内无新 Issue 提交、无版本发布。唯一动态为一条由 **Dependabot** 自动发起的依赖更新 PR（#1184），旨在将 `/website` 目录下的 `undici` 包从 `7.28.0` 升级至 `7.29.0`。项目当前维护节奏偏向保守，基础设施侧仍有例行自动化维护活动。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | 🟡 待合并 | `chore(deps-dev): bump undici from 7.28.0 to 7.29.0`（`/website` 目录，`npm_and_yarn` 组） |

- **今日合并数：0**，项目代码层面今日无实质性功能推进。
- 唯一 PR 为自动化安全/依赖升级，不涉及功能变更或 API 破坏，合并后仅更新静态网站构建依赖版本。

---

## 4. 社区热点

今日无活跃 Issue 或 PR 讨论，**无社区热点条目**。

---

## 5. Bug 与稳定性

> 今日无新报告的 Bug、崩溃或回归问题。

---

## 6. 功能请求与路线图信号

> 今日无新增功能请求 Issue，暂无可识别的路线图信号。

---

## 7. 用户反馈摘要

> 今日无新 Issue 或评论，无用户反馈可提炼。

---

## 8. 待处理积压

| 类型 | PR/Issue | 描述 | 状态 |
|---|---|---|---|
| PR | [#1184](https://github.com/moltis-org/moltis/pull/1184) | `undici` 依赖升级（`7.28.0 → 7.29.0`），由 Dependabot 创建 | 🟡 待合并（已创建 1 天，暂无维护者评审） |

> ⚠️ 建议维护者关注 #1184 的合并时机，此类自动化依赖更新若长期未响应，可能累积为小型积压。

---

## 项目健康度简评

| 维度 | 评估 |
|---|---|
| 活跃度 | 🔴 低 — 24h 内仅 1 条自动化 PR，无人工提交 |
| Issue 响应 | — 无新 Issue |
| PR 积压 | 🟡 1 条待合并（自动化依赖更新） |
| 版本节奏 | 无发布 |

**结论**：Moltis 当前处于**平稳低活跃期**，无紧急风险。Dependabot 维护活动正常，基础设施依赖保持更新。若此低活跃状态持续超过一周，建议维护团队评估是否需主动发布预告或召集社区贡献。

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



# ZeroClaw 项目动态日报
**日期：2026-08-05** ｜ 数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

过去24小时，ZeroClaw 项目保持高度活跃：**37 条 Issue 更新**（35 条新开/活跃，2 条关闭），**50 条 PR 进入评审**（尚无合并）。项目处于密集架构重构与安全加固阶段，今日最突出的信号是**三道 P0 级安全问题集中爆发**——Webhook 未认证、知识库跨 Agent 读写、会话工具缺少归属隔离。与此同时，围绕 Goal Mode、附件架构、会话所有权等核心 RFC 的讨论持续深入，社区参与度高。整体健康度：**高活跃度、高风险敞口并存**，需维护者重点关注安全修复 PR 的合并节奏。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日有 **50 条 PR 处于待合并状态**，覆盖安全加固、评估框架重构、ZeroCode TUI 体验改进、A2A 协议等关键方向，以下为核心进展：

| PR | 类型 | 说明 |
|---|---|---|
| [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) | 安全重构 | **强制 Webhook 认证入口**：新增 `VerifiedWebhookIngress` 类型化边界，直接对应 #9565 P0 漏洞，修复 WhatsApp/Linq/WATI 未认证分发的安全敞口 |
| [#9758](https://github.com/zeroclaw-labs/zeroclaw/pull/9758) | Bug 修复 | 修复 memory consolidation 模块错误继承 persona 属性的问题，防止代理行为漂移 |
| [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) | Bug 修复 | 通过 per-session generation counter 解决 provider 刷新导致会话被意外替换的竞态（#9719） |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | 新功能 | A2A 出站客户端 Phase 1：4 个 `a2a_*` 工具 + 共享 v1.0 wire model + 默认关闭的 config 块，完成两轮 RFC 评审意见 |
| [#9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9217) | 框架重构 | `Grader` trait 异步化 + workspace-aware，使测试在临时工作空间存活期间完成评分 |
| [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) | 安全加固 | 为所有 WASM 插件导出绑定 wall-clock 超时（默认 30s），防止插件无限挂起 |
| [#9476](https://github.com/zeroclaw-labs/zeroclaw/pull/9476) | 新功能 | SOP 作业新增认证Operator取消接口 + Dashboard Stop 按钮，运行中作业可安全终止 |
| [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) | 新功能 | Anthropic 服务端 fallback 请求可选启用，提升服务可用性 |
| [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) | Bug 修复 | 修复 `<tools>` 标签包裹的调用无法被解析的兼容性问题（Qwen2.5-Coder-32B 等模型触发） |
| [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) | 新功能 | 评估框架支持重复运行 + `pass@k`/`pass^k` 及误差线，解决 flaky 测试单样本判断失真 |

**整体判断：** 项目正从前一阶段的 RFC 设计密集期转入实施落地期，今日 PR 中安全修复与框架重构占比显著，说明维护者正在系统性地补齐架构债务。

---

## 4. 社区热点

今日讨论最活跃的 Issue（按评论数排序）：

| Issue | 标题 | 评论 | 标签 | 核心诉求 |
|---|---|---|---|---|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 16 | P2, RFC, high-risk | 用户需要跨多 Agent 轮次持久追求有界目标的机制；讨论聚焦于重启交接、通道准入、模型自主控制等边界 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: 高风险 Shell 命令逐执行确认分级 + Claude Code 风格策略 | 14 | P1, RFC, high-risk | 提出 allow/ask/deny 三级策略，今日更新至 Revision 3，收敛到 normtive shell-policy contract |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Web 聊天与通道统一附件架构 | 13 | P2, RFC, high-risk | 统一 web 与 channel 的附件处理管线，消除当前分裂实现 |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | MoA 虚拟模型 Provider（已关闭） | 10 | P2, RFC | Mixture-of-Agents 聚合器模式：多个参考模型并行 + 聚合模型裁决 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: 记忆生命周期与存储后端解耦 | 10 | P2, RFC, high-risk | 明确 durable storage 与 lifecycle policy 的边界，避免各 gateway/channel 重复实现 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: 运行时拥有的会话与传输适配器 | 10 | P2, RFC, high-risk | 今日更新至 Revision 2，与 #9488/#9600 形成 ownership 边界协调 |

**热点分析：** 当前社区关注点集中在三大方向：**（1）Agent 自主性边界**（Goal Mode、MoA）；**（2）安全与沙箱策略精细化**（Shell 确认分级、记忆隔离）；**（3）架构统一化**（附件、会话所有权、RFC 决策队列 #8692）。高 comment 数 + 多 RFC 状态为 `needs-maintainer-review` 表明：**维护者评审能力是当前的主要瓶颈**。

---

## 5. Bug 与稳定性

今日新增 / 更新的安全相关 Bug（按严重程度排列）：

### 🔴 P0 — 数据安全/安全漏洞

| Bug | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Webhook 处理未 fail-closed（WhatsApp Cloud / Linq / WATI） | In-progress | [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744)（已提交，待合并） |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | 知识图谱缺少 per-Agent 归属，任意 Agent 可读写他人知识 | Accepted | 暂无 |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | 会话/通道工具缺少 per-Agent 归属限制（sessions_list/history/send, discord_search） | Accepted | 暂无 |

### 🟠 P1 — 功能/安全缺陷

| Bug | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `verifiable-intent` 验证约束时未校验凭证链 | Open | 暂无 |
| [#9719](https://github.com/zeroclaw-labs/zeroclaw/issues/9719) | Provider 刷新竞态导致会话被替换 | — | [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)（已提交） |

### 🟡 P2 — 一般 Bug

| Bug | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#9402](https://github.com/zeroclaw-labs/zeroclaw/issues/9402) | Docker 沙箱嵌套在 Docker 运行时内 | — | [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402)（已提交） |
| [#9477](https://github.com/zeroclaw-labs/zeroclaw/issues/9477) | `<tools>` 标签包裹的调用解析失败 | — | [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477)（已提交） |
| [#9321](https://github.com/zeroclaw-labs/zeroclaw/issues/9321) | Telegram 媒体消息未发送未授权通知 | — | [#9321](https://github.com/zeroclaw-labs/zeroclaw/pull/9321)（已提交） |

**风险评估：** P0 级安全问题有 3 个，其中仅 #9565 已有 Fix PR 提交，**#9647 和 #9646 尚无修复 PR**，属于高风险敞口。`verifiable-intent` 的凭证链验证缺失（#9328）也可能被利用。

---

## 6. 功能请求与路线图信号

| 请求来源 | 内容 | 已有 PR / 进展 | 纳入下版可能性 |
|---|---|---|---|
| [#9106 → #9324](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | A2A 出站客户端协议（4 工具 + wire model） | Phase 1 PR #9324 已提交，完成两轮评审 | ⭐⭐⭐ 高，已完成 RFC 评审 |
| [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | 向 OpenRouter 传递稳定 session_id 以启用 prompt caching | 已提交，3 条评论 | ⭐⭐ 中高，运维成本敏感需求 |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | 插件化 Kanban 看板协调 Agent 工作 | RFC 阶段，#8832 | ⭐ 中，需更多评审 |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 按模型粒度配置 capability 与 context_window | RFC 阶段，7 条评论 | ⭐⭐ 中，解决多模型配置混乱痛点 |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | WASM 插件生命周期钩子订阅 | RFC 阶段，4 条评论 | ⭐ 中，插件生态扩展关键 |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | 用 Rust→Wasm 替代 React/Vite Web UI | RFC 阶段（拆自 #7674），4 条评论，1 👍 | ⭐ 低-中，大规模重构，需长期规划 |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal Mode v1 有界前台工作 | RFC 阶段，16 条评论，1 👍 | ⭐⭐⭐ 高，社区关注度高 |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | 统一斜杠命令注册表（Web UI / ZeroCode / Channel） | RFC 阶段，6 条评论 | ⭐⭐ 中高，消除跨端漂移 |

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的关键用户诉求：

- **安全可控性是最高优先级**：#7155（Shell 命令确认分级）、#6996（细粒度沙箱策略）、#8424（workspace 内 forbidden paths）持续获得关注。用户明确表示当前 `forbidden_paths` 仅保护 workspace 外部文件，无法防护 `.env`、`rust-toolchain.toml` 等内部敏感文件。
- **多模型/多 Agent 协作需求增长**：#8303（Goal Mode）、#8568（MoA）反映用户对复杂工作流的期望正在超出单轮 Agent 的能力边界。
- **成本敏感**：#9631 直接指向 OpenRouter prompt caching 兼容，用户抱怨单次对话产生数十次 LLM 请求导致不必要开支。
- **UX 一致性痛点**：#7929 指出斜杠命令在 Web UI / ZeroCode TUI / Channel 三端不同步，添加命令后需手动维护多处。
- **记忆系统可靠性**：#9758 的修复反映用户遭遇 consolidation 模块"发明新人格特质"的异常行为，导致 Agent 行为漂移。
- **插件可观测性不足**：#7822 指出第三方 WASM 插件无法订阅生命周期事件，用户需打核心补丁或绕道 telemetry。

---

## 8. 待处理积压

以下 Issue/PR 需维护者重点关注：

| 项目 | 类型 | 原因 | 建议 |
|---|---|---|---|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Bug P0 | 知识图谱无 per-Agent 隔离，Accepted 但无 Fix PR | 紧急排期，建议优先处理 |
| [#9646](https://github.com/zeroclaw-labs/zer

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*