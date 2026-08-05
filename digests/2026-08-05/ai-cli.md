# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 07:33 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比



# AI CLI 工具生态横向对比分析报告
**日期：2026-08-05**

---

## 1. 生态全景

2026年8月初，AI CLI工具生态呈现**安全加固与架构重构并行**的态势。主流工具正从"功能试水"转向"生产就绪"阶段：Claude Code 修复worktree隔离漏洞，Gemini CLI 紧急补丁SSRF与变量扩展绕过，Qwen Code 提出确定性工具执行边界提案，显示行业对Agent安全信任体系的重视。同时，**会话持久化与跨设备连续性**成为跨工具共性需求，OpenCode、Copilot CLI、Kimi Code均在此方向有明确用户诉求。v2架构迁移（OpenCode）与turn-level权限重构（Codex）标志着底层协议正在重新定义。

---

## 2. 各工具活跃度对比

| 工具 | Release | 今日Issue数 | 今日PR数 | 发布节奏 |
|------|---------|------------|---------|---------|
| **Claude Code** | v2.1.222（安全修复） | 10 | 10 | 稳定迭代，安全优先 |
| **OpenAI Codex** | 4个alpha（v0.147.0-alpha.1~7） | 10 | 10（已合并） | 高频alpha，权限重构期 |
| **Gemini CLI** | 无 | 10 | 11 | 稳定期，安全补丁+eval完善 |
| **GitHub Copilot CLI** | v1.0.79-1/2（含Breaking Change） | 10 | 2 | 热修复节奏，生态过渡期 |
| **Kimi Code CLI** | 无 | 5（精选） | 2 | 功能积累期，需求驱动 |
| **OpenCode** | v1.18.13 | 10 | 10 | V2迁移关键期，活跃重构 |
| **Qwen Code** | v0.21.6-preview.0 | 10 | 10 | 功能扩展期，第三方集成加速 |
| **DeepSeek TUI** | v0.9.4进行中（超前77提交） | 10 | 10 | 发布列车期，构建优化+Epic驱动 |

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **会话持久化/跨设备续接** | Claude Code、Copilot CLI、Kimi Code | SSH重装后丢失、云同步Session、手机/平板续接本地会话 |
| **Agent可靠性与生命周期管理** | Claude Code、Gemini CLI、Codex、Kimi Code | subagent挂起、MAX_TURNS错误报告、多轮对话上下文错乱 |
| **MCP工具生态稳定性** | Codex、Copilot CLI、Qwen Code、DeepSeek TUI | 进程泄漏、SSE挂起、初始化兼容、Registry发现 |
| **用量/配额透明化** | OpenCode、Copilot CLI | 暴露Go Plan API、免费层断供预警、订阅状态实时感知 |
| **多模型/多API Key支持** | DeepSeek TUI、Qwen Code、Codex | 未知模型ID降级、BYOK流式错误、自定义模型提供商体验 |
| **安全与权限隔离** | Claude Code、Gemini CLI、Qwen Code、Codex | worktree隔离、SSRF防护、变量扩展绕过、turn-level权限 |
| **插件/技能系统成熟度** | Claude Code、Copilot CLI、OpenCode | frontmatter schema不一致、缓存泄漏、hook测试工具缺陷 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 企业级Agent安全、worktree隔离、PreToolUse hooks | 企业开发者、安全敏感场景 | 稳定迭代，安全补丁优先，插件系统渐进完善 |
| **OpenAI Codex** | turn-level权限、工具命名空间规范化、多轮上下文管理 | OpenAI生态用户、Power User | 高频alpha试错，权限模型重构，Rust CLI |
| **Gemini CLI** | eval评估基础设施、Agent挂起恢复、安全漏洞修补 | Google Cloud用户、评估导向团队 | 稳定为主，安全紧急响应，可观测性优先 |
| **GitHub Copilot CLI** | Session Forking、插件自动更新、企业Agent可见性 | GitHub/Copilot订阅用户、企业团队 | 功能积累期，MCP兼容性追赶，企业特性完善 |
| **Kimi Code CLI** | 跨会话记忆、远程控制、长上下文稳定性 | 中文开发者、多设备工作流用户 | 需求驱动，功能聚焦移动端连续性 |
| **OpenCode** | V2架构迁移、用量API暴露、Provider流式韧性 | 开源贡献者、多Provider用户 | 激进重构，V1→V2协议剥离，社区驱动 |
| **Qwen Code** | 第三方提供商集成（Kimi/MiMo）、Computer Use驱动、多工作区资源管控 | 国内开发者、多模型混合用户 | 快速扩展，多模态输入，安全边界讨论领先 |
| **DeepSeek TUI** | 构建性能优化、Runtime API扩展、MCP Registry | Rust开发者、自托管/fleet场景 | 单体架构痛点明显，向托管客户端演进 |

---

## 5. 社区热度与成熟度

| 维度 | 高活跃度/成熟度 | 快速迭代期 |
|------|----------------|-----------|
| **Issue讨论热度** | OpenCode（#16017 获126👍）、Codex（#8648 获58👍）、Claude Code（#71542 获49👍） | Kimi Code（需求明确但量少）、DeepSeek TUI（编译痛点多） |
| **PR合并频率** | Codex（10个核心PR全合并）、OpenCode（多组V2迁移PR） | Claude Code（PR偏脚本健壮性）、Copilot CLI（仅2个PR） |
| **Release节奏** | Codex（4个alpha/24h）、OpenCode（v1.18.13）、Copilot CLI（热修复） | Gemini CLI（无发布）、Kimi Code（无发布） |
| **架构演进** | OpenCode（V2迁移）、Codex（权限模型重构）、DeepSeek TUI（Runtime API扩展） | 其他工具以功能修补为主 |

**结论**：OpenCode与Codex处于架构重构关键期，社区参与度高；Claude Code与Gemini CLI进入稳定维护期；Kimi Code与DeepSeek TUI处于功能快速积累期。

---

## 6. 值得关注的趋势信号

### 信号一：Agent安全从"功能优先"转向"信任边界重构"
Claude Code修复worktree隔离与hooks绕过、Gemini CLI紧急补丁SSRF、Qwen Code发起确定性工具执行边界提案（#8102），三者呼应显示行业共识：**自主Agent的生产化必须建立在可验证的安全边界之上**。对开发者的参考价值：选择工具时需关注其权限模型与隔离机制，企业用户应优先评估安全修复响应速度。

### 信号二：会话持久化成为跨平台工作流的刚需
Claude Code（SSH重装丢失）、Copilot CLI（云同步Session）、Kimi Code（跨设备续接）均收到高频诉求。当前各工具实现路径各异：Copilot走云同步路线，Kimi强调移动端，Claude聚焦远程会话恢复。**会话状态管理正从"本地临时"向"连续身份"演进**。

### 信号三：MCP生态从"能连上"到"可靠运行"
Codex（进程泄漏#30408）、Qwen Code（SSE挂起#8550）、Copilot CLI（FastMCP兼容#4370）、DeepSeek TUI（Registry发现#5238）集中暴露MCP集成痛点。MCP协议已进入成熟期，**工具链从连接能力竞争转向稳定性与可观测性竞争**。

### 信号四：用量透明化影响用户留存
OpenCode（#16017 获126👍）、Copilot CLI（计费实体#4005）、OpenCode（免费层断供#40588）共同指向同一问题：用户希望在CLI内部感知配额状态，而非依赖Web控制台。**用量API暴露将成为工具粘性的关键指标**。

### 信号五：V2架构迁移预示协议标准化
OpenCode多组PR推进V1→V2协议剥离，Codex进行turn-level权限重构，DeepSeek TUI扩展Runtime API。这显示AI CLI底层正在从"黑盒调用"向"可编程运行时"演进，**未来工具间 interoperability 可能基于统一的session/permission/model协议**。

---

*报告生成时间：2026-08-05 | 数据来源：各工具GitHub社区*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-08-05**

---

## 1. 热门 Skills 排行

| 排名 | PR | 功能 | 状态 | 社区关注点 |
|------|-----|------|------|-----------|
| 1 | [#1367](https://github.com/anthropics/skills/pull/1367) | **Self-Audit** — 交付前机械验证 + 四维推理质量门禁 | OPEN | 多作者协作迭代，覆盖任意项目/技术栈，解决 AI 输出质量兜底问题 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复** — `run_eval.py` 永远报告 recall=0% | OPEN | 10+ 独立复现，描述优化循环在噪声上运行，直接阻塞 skill-creator 工具链 |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **Document-Typography** — 文档排版质量控制 | OPEN | 解决孤行/寡行、编号对齐等 Claude 生成文档的普遍缺陷 |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **Testing-Patterns** — 全栈测试模式 skill | OPEN | 覆盖 Testing Trophy 哲学、AAA 模式、React Testing Library 等，填补社区空白 |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill** — OpenDocument 格式创建/填充/解析 | OPEN | 补充 LibreOffice/ISO 标准生态，触发词覆盖 ODT/ODS/ODF/OpenDocument |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) | **Pyxel Skill** — 复古像素游戏开发 | OPEN | MCP 服务器集成，支持 write→run_and_capture→inspect→iterate 工作流 |
| 7 | [#1479](https://github.com/anthropics/skills/pull/1479) | **Plan-File-Hygiene** — 规划文件生命周期管理 | OPEN | 解决规划产物累积无清理机制的痛点（Issue #1417） |
| 8 | [#1099](https://github.com/anthropics/skills/pull/1099) | **skill-creator Windows 修复** — 子进程管道读取崩溃 | OPEN | `[WinError 10038]` 阻塞 Windows 用户，与 #1298/#1323 共同构成 skill-creator 工具链阻塞 |

---

## 2. 社区需求趋势

从 Issues 提炼出以下四大方向：

**🔒 安全与信任边界（最紧迫）**
- Issue #492（43 评论）：社区技能冒充官方 `anthropic/` 命名空间，存在权限提升风险
- Issue #1175：SharePoint 文档处理的权限逻辑不应写入 SKILL.md
- Issue #412（已关闭）：agent-governance 安全治理技能提案，期望政策执行/威胁检测/审计追踪

**⚙️ 工具链稳定性**
- Issue #556（12 评论）：`run_eval.py` claude -p 永远无法触发 skill（recall=0%），与 #1169 互为补充
- Issue #1061（3 评论）：Windows 下 PATHEXT/subprocess/cp1252/管道 select 三重兼容性问题
- Issue #202（已关闭）：skill-creator 应转向操作型指令而非教育性文档

**🔄 组织与协作**
- Issue #228（16 评论，8 👍）：组织级技能共享，当前需手动下载/上传
- Issue #189（6 评论，9 👍）：`document-skills` 与 `example-skills` 插件内容重复导致上下文窗口污染

**🎯 垂直领域扩展**
- Issue #1329：compact-memory 符号化紧凑状态表示，减少长会话上下文消耗
- Issue #29/#16：Bedrock 支持与 Skill 转 MCP 协议，反映对多云部署和标准化 API 的诉求

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、问题清晰，具备近期合并条件：

| PR | 类型 | 核心改动 | 合并阻力 |
|----|------|---------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | Bug Fix | 修复 eval artifact 安装 + Windows 流读取/并行 worker | 低（纯修复，10+ 复现） |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Bug Fix | Windows 子进程管道崩溃 | 低（1 行改动） |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Bug Fix | Windows subprocess PATHEXT + 编码 | 低（1 行改动） |
| [#541](https://github.com/anthropics/skills/pull/541) | Bug Fix | DOCX 修订 ID 冲突导致文档损坏 | 低（根因清晰） |
| [#539](https://github.com/anthropics/skills/pull/539) | Bug Fix | YAML description 未加引号导致静默解析失败 | 低（防御性校验） |
| [#723](https://github.com/anthropics/skills/pull/723) | New Skill | 全栈测试模式 skill | 中（需评估是否与内置能力重复） |
| [#514](https://github.com/anthropics/skills/pull/514) | New Skill | 文档排版质量控制 | 中（新 skill，需评审质量标准） |
| [#1367](https://github.com/anthropics/skills/pull/1367) | New Skill | 自我审计 + 四维推理质量门禁 | 中（复杂 skill，需验证泛用性） |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：修复 skill-creator 工具链在 Windows 和评估机制上的系统性缺陷，同时加速文档处理类 skill（排版/ODT/DOCX）和测试类 skill 的落地，以弥补官方 skill 集合在高频率使用场景中的空白。**

具体表现为：skill-creator 的 `run_eval.py` recall=0% bug（Issue #556/#1169 + PR #1298/#1323/#1099/#1050）已形成跨平台阻塞，且社区对文档/测试/安全治理类 skill 的需求显著高于创意/设计类。

---



# Claude Code 社区动态日报 — 2026-08-05

## 1. 今日速览

Anthropic 发布 **v2.1.222**，重点修复了 worktree 隔离漏洞及 PreToolUse hooks 绕过安全限制的问题。社区最活跃的议题集中在 Fable 5 模型 text block 丢失（多个重复 issue）、会话持久化/恢复失败，以及插件系统开发体验问题。

---

## 2. 版本发布

### v2.1.222
- **修复 worktree 隔离**：之前 worktree 隔离会话及其子代理可对主 checkout 运行破坏性 git 命令，现已在所有会话类型中对文件编辑和 Bash 强制应用隔离。
- **修复 PreToolUse auto-allow hooks 漏洞**：后台代理任务中 auto-allow hooks 曾绕过工具限制，现已封堵。

🔗 [GitHub Release](https://github.com/anthropics/claude-code)

---

## 3. 社区热点 Issues（TOP 10）

| # | 问题摘要 | 关注点 | 评论/👍 |
|---|---------|--------|---------|
| #71542 | GitHub connector 认证成功但无法访问任何仓库（全账号回归） | 高优先级 bug，影响范围极广 | 49 / 43 |
| #65620 | Fable 5 中 assistant text block 被静默丢弃（自 v2.1.162 起） | 跨版本回归，内容丢失 | 28 / 16 |
| #74260 | 同 Issue #65620 的独立复现报告（含 jsonl 证据） | 补充证据，推动修复 | 25 / 16 |
| #66960 | Fable 5 长时间沉默工具调用后突然 AskUserQuestion | 交互体验严重缺陷 | 14 / 18 |
| #83633 | 登录后 `has_finished_claudeai_onboarding=false` 阻挡已有 Max 账户 | 付费用户登录流程 bug | 12 / 0 |
| #52477 | Claude 覆盖用户显式代词设置，默认男性偏见 | 模型对齐/公平性问题 | 11 / 3 |
| #21378 | 内存泄漏：20+ 分钟后进程冻结，占用 15GB RAM | 严重性能 issue，长期未解 | 9 / 12 |
| #76124 / #83730 / #81907 | Desktop SSH 远程会话和重装后会话列表丢失 | 会话持久化核心痛点 | 共 8 条评论 |
| #83981 | Custom Skills 与 Plugin Skills 的 frontmatter schema 不一致 | 开发者体验/文档缺失 | 1 / 0 |
| #84070 | 注入的 system prompt 行覆盖用户 CLAUDE.md 和 memory | 用户指令被覆盖，可配置性不足 | 1 / 0 |

---

## 4. 重要 PR 进展（TOP 10）

| PR | 作者 | 内容 |
|----|------|------|
| #84004 | RerankerGuo | 修复插件 frontmatter 解析：仅解析开头 YAML 块，拒绝缺少 markers 的文件 |
| #84003 | RerankerGuo | 修复脚本：传播顶层失败状态，确保 `.catch` 不会静默 swallow 错误 |
| #83999 | RerankerGuo | 修复 `gh` wrapper：验证带值 flag 缺少参数时的输入完整性 |
| #83995 | RerankerGuo | 修复 `--add-label`/`--remove-label`：验证 label 值存在后再读取下一参数 |
| #83993 | RerankerGuo | 修复 `comment-on-duplicates.sh`：阻止 issue 自引用为自身 duplicate |
| #83992 | RerankerGuo | 修复 `test-hook.sh`：新增 `--expect allow|deny|ask` 参数，验证 hook 预期行为 |
| #83990 | RerankerGuo | 修复 `test-hook.sh`：检测 `jq` 缺失并报告，而非将合法输入误报为无效 JSON |
| #83890 | KrypticKode007 | 新增 `pylint.yml` 配置文件 |
| #83374 | iCodeCraft | 文档更新：补充 `MessageDisplay` hook 事件的说明和 quick-reference 表 |

> 注：今日 PR 集中在插件开发脚本的健壮性修复，暂无核心功能 PR 合入。

---

## 5. 功能需求趋势

从本期 issue 中可提炼出以下社区高频关注方向：

- **会话持久化与恢复**：SSH 远程会话、Desktop 重装后列表丢失、Remote Control 取消后无法恢复 — 多次独立报告，说明这是稳定性的核心短板。
- **Fable 5 / 混合思考（interleaved thinking）渲染**：至少 4 个独立 issue 反映 assistant text block 在思考块之后被静默丢弃，涉及 TUI、VS Code、Desktop 多端。
- **模型行为对齐**：用户记忆（代词）被覆盖、模型默认偏见、长时间沉默后突然提问 — 用户对模型行为可控性诉求强烈。
- **插件/技能系统**：frontmatter schema 不一致、缓存目录无上限增长（#80367 报告 8GB 孤儿目录）、hook 测试工具缺陷 — 开发者生态工具链亟待完善。
- **平台级体验**：Windows Korean IME（#73064）、macOS SGR 鼠标追踪泄漏（#81648）、macOS 自动更新破坏 TCC 授权（#84071）— 多平台兼容问题持续涌现。

---

## 6. 开发者关注点

1. **安全与隔离信任**：v2.1.222 修复的 worktree 隔离和 hooks 绕过问题，直接影响企业用户对 Claude Code 作为自主代理的信任度。
2. **内容完整性**：text block 丢失（#65620/#74260/#77651/#84065）意味着用户指令的部分输出静默消失，对 incident response 等关键场景风险极高。
3. **开发者工具链**：`test-hook.sh` 的多个缺陷（#83990/#83992）和 `gh` wrapper 的参数校验缺失（#83995/#83999）表明插件开发调试工具成熟度不足，已有多位贡献者主动修复。
4. **存储管理**：插件缓存目录无界增长（#80367）和内存泄漏（#21378）是两类不同的资源泄漏，均长期存在且影响生产环境稳定性。
5. **用户指令优先级**：injected prompt 覆盖 CLAUDE.md（#84070）和代词被忽略（#52477）均指向"系统层指令 vs 用户层指令"的优先级争议，社区期望用户配置具有更高权重。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-08-05**

---

## 1. 今日速览

过去 24 小时内，Codex Rust CLI 密集发布了 4 个 alpha 版本（v0.147.0-alpha.1 至 .7），同时大量权限与工具注册相关 PR 被合并，显示开发团队正在推进 turn-level 权限隔离与工具命名空间规范化。社区热点 Issue 聚焦于多轮对话上下文错乱（#8648，58👍）、MCP 进程泄漏（#30408）及 Windows/WSL 环境下的路径映射与沙箱问题。

---

## 2. 版本发布

过去 24 小时 Rust CLI 连续发布 4 个 alpha 版本：

| 版本 | 链接 |
|------|------|
| rust-v0.147.0-alpha.7 | [Release](https://github.com/openai/codex/releases) |
| rust-v0.147.0-alpha.6.4 | [Release](https://github.com/openai/codex/releases) |
| rust-v0.147.0-alpha.6.3 | [Release](https://github.com/openai/codex/releases) |
| rust-v0.147.0-alpha.6.1 | [Release](https://github.com/openai/codex/releases) |

> 注：当前未获取到详细的 changelog，仅知版本号递增，疑似迭代修复中。

---

## 3. 社区热点 Issues（Top 10）

### #8648 — Codex 在多轮对话中回复旧消息而非最新消息 ⭐
- **作者**: BobbyWang0120 | **评论**: 81 | **👍**: 58 | **状态**: OPEN
- **标签**: bug, context, agent
- **重要性**: 影响所有多轮对话场景，用户反馈 Codex 有时会回复历史消息而非最新一条，严重干扰连续工作流。社区关注度最高。
- [链接](https://github.com/openai/codex/issues/8648)

### #30009 — Windows Sandbox 环境下 apply_patch 失败
- **作者**: TheCrake | **评论**: 31 | **👍**: 10 | **状态**: OPEN
- **标签**: bug, windows-os, sandbox, tool-calls
- **重要性**: Windows 用户高频遇到的文件编辑失败问题，与沙箱权限配置直接相关。
- [链接](https://github.com/openai/codex/issues/30009)

### #30408 — MCP Server 进程泄漏（9+ GB RSS）
- **作者**: kkkayye | **评论**: 23 | **👍**: 6 | **状态**: OPEN
- **标签**: bug, mcp, app, performance
- **重要性**: 每新建线程都会生成完整的 MCP 进程池但永不回收，长期运行会导致内存泄漏。
- [链接](https://github.com/openai/codex/issues/30408)

### #30440 — Codex 使用捆绑 pnpm 而非主机工具链
- **作者**: kkaatii | **评论**: 20 | **👍**: 26 | **状态**: OPEN
- **重要性**: 导致构建脚本无法正确执行，26👍 反映社区对工具链兼容性的强烈诉求。
- [链接](https://github.com/openai/codex/issues/30440)

### #28080 — Windows Desktop Thread Tools 间歇性丢失 Handler
- **作者**: Hogna67 | **评论**: 19 | **👍**: 2 | **状态**: OPEN
- **标签**: bug, windows-os, tool-calls
- **重要性**: 活跃会话中工具 handler 随机消失（`No handler registered`），影响可靠性。
- [链接](https://github.com/openai/codex/issues/28080)

### #37002 — macOS 点击更新后无法安装
- **作者**: ytc301 | **评论**: 17 | **状态**: OPEN
- **标签**: bug, app
- **重要性**: 全新创建的 Issue（今日），更新流程阻断，影响用户体验。
- [链接](https://github.com/openai/codex/issues/37002)

### #29787 — [已关闭] Windows 更新后应用不重启
- **作者**: kendonB | **评论**: 14 | **👍**: 2 | **状态**: CLOSED
- **标签**: bug, windows-os, app
- **重要性**: 已被修复关闭，但反映 Windows 更新后进程管理的历史痛点。
- [链接](https://github.com/openai/codex/issues/29787)

### #24268 — Windows+WSL 插件缓存路径映射错误
- **作者**: MisterRound | **评论**: 11 | **👍**: 3 | **状态**: OPEN
- **标签**: bug, windows-os, skills
- **重要性**: WSL 环境下插件缓存被解析为无效的 `C:\mnt\c` 路径。
- [链接](https://github.com/openai/codex/issues/24268)

### #25233 — /side 聊天过期过快
- **作者**: miraclebakelaser | **评论**: 10 | **👍**: 18 | **状态**: OPEN
- **标签**: bug, session
- **重要性**: 18👍 表明开发者对 Side Chat 持久性有明确需求，当前过期行为不透明。
- [链接](https://github.com/openai/codex/issues/25233)

### #10989 — Xcode 插件在 Safari HTTPS-only 模式下登录失败
- **作者**: marlonjames71 | **评论**: 9 | **👍**: 6 | **状态**: OPEN
- **标签**: bug, extension, auth
- **重要性**: macOS Safari 启用 HTTPS-only 后，localhost HTTP 回调被阻止，影响 Xcode 集成用户。
- [链接](https://github.com/openai/codex/issues/10989)

---

## 4. 重要 PR 进展（Top 10）

### #37040 — 使用 Turn 级权限配置 Context 与 Discovery
- **状态**: CLOSED（已合并）
- **内容**: 从主 Turn 环境的权限配置、工作目录和 workspace roots 构建文件系统和权限上下文，取代旧的 thread 级别上下文。
- [链接](https://github.com/openai/codex/pull/37040)

### #37038 — 使用 Turn 级权限执行工具
- **状态**: CLOSED（已合并）
- **内容**: 为 shell、unified exec、apply_patch、图像查看和网络审批流程派生沙箱与权限环境变量。
- [链接](https://github.com/openai/codex/pull/37038)

### #37035 — 工具注册表测试与规范名称对齐
- **状态**: CLOSED（已合并）
- **内容**: 工具冲突时报告规范化的 `functions` 命名空间名称，移除过时的显式命名空间测试。
- [链接](https://github.com/openai/codex/pull/37035)

### #37031 — 权限 Profile 更新传播至未来 Turn 环境
- **状态**: CLOSED（已合并）
- **内容**: 每个 Turn 环境配置中嵌入当前权限 profile，会话设置变更时刷新保留的配置。
- [链接](https://github.com/openai/codex/pull/37031)

### #37027 — 强制 Agent Plugin 运行时边界
- **状态**: CLOSED（已合并）
- **内容**: 通过 plugin/skill/MCP 加载追踪 Agent Plugin manifests，隔离 MCP 数据与 legacy plugin。
- [链接](https://github.com/openai/codex/pull/37027)

### #37022 — 在 `functions` 命名空间下规范化默认工具
- **状态**: CLOSED（已合并）
- **内容**: 将顶级 function 和自定义工具定义归入单一 `functions` 命名空间，适配 Responses Lite 提供者。
- [链接](https://github.com/openai/codex/pull/37022)

### #37020 — 强制执行严格工具名称冲突检测
- **状态**: CLOSED（已合并）
- **内容**: 装配工具注册表时追踪首个重复工具名，支持通过配置开关 `error_on_tool_collisions` 触发失败。
- [链接](https://github.com/openai/codex/pull/37020)

### #36998 — 支持工具搜索中的延迟加载自定义工具
- **状态**: CLOSED（已合并）
- **内容**: 将顶级 freeform 工具纳入搜索索引并标记延迟加载，搜索后反序列化为可执行工具 spec。
- [链接](https://github.com/openai/codex/pull/36998)

### #36993 — 支持分页线程的 `includeTurns` 读取
- **状态**: CLOSED（已合并）
- **内容**: 为使用 `thread/read` 且 `includeTurns: true` 的客户端重建完整 projected turns，兼容分页存储。
- [链接](https://github.com/openai/codex/pull/36993)

### #36992 — 允许注入模型目录缓存
- **状态**: CLOSED（已合并）
- **内容**: 新增异步 `ModelsCache` 接口，支持调用方提供自定义缓存实现，保留默认文件缓存。
- [链接](https://github.com/openai/codex/pull/36992)

---

## 5. 功能需求趋势

基于 Issue 分析，社区当前最关注的方向如下：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **对话上下文与多轮管理** | #8648 (58👍), #29811 | ⭐⭐⭐⭐⭐ |
| **Windows/WSL 兼容性** | #30009, #28080, #24268, #28174 | ⭐⭐⭐⭐ |
| **MCP 工具与进程管理** | #30408, #35485, #32574 | ⭐⭐⭐⭐ |
| **Side Chat / 会话持久性** | #25233 (18👍), #22001, #20977 | ⭐⭐⭐ |
| **自定义模型提供商** | #29156 (17👍), #31625 | ⭐⭐⭐ |
| **Computer Use / 浏览器插件** | #37036, #24437, #30026 | ⭐⭐⭐ |
| **模型选择与 Plan/Implement 分离** | #14969 (10👍), #28469 (4👍) | ⭐⭐ |
| **IDE 扩展稳定性** | #10989, #36418 | ⭐⭐ |

---

## 6. 开发者关注点

**高频痛点总结：**

1. **对话状态管理缺陷** — #8648 是最受关注的 Issue，反映多轮对话中 context 追踪存在系统性问题，用户期望 Codex 始终响应最新消息。

2. **Windows 平台兼容性是重灾区** — 近半数高热度 Issue 涉及 Windows 或 WSL，包括沙箱权限、路径映射、工具链选择、进程管理等问题，平台适配仍是短板。

3. **MCP 进程泄漏影响生产使用** — #30408 和 #35485 描述相同的根因：每线程生成独立 MCP 进程但不回收，长期运行导致内存耗尽，需官方修复。

4. **Side Chat 可用性差** — 过期快、Fork 失败、未持久化等问题反复出现（#25233, #22001, #20977），开发者依赖 Side Chat 进行临时探索，当前体验不佳。

5. **自定义模型与插件生态受限** — #29156 指出 Desktop 端自定义模型提供商体验远差于 CLI，#30440 反映工具链绑定问题，影响高级用户工作流。

6. **权限模型正在重构** — 今日合并的大量 PR（#37040, #37038, #37031 等）表明团队正将权限管理从 thread 级别升级到 turn 级别，并强化工具命名空间规范化，值得关注后续影响。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报
**日期：2026-08-05**

---

## 1. 今日速览

今日无新版本发布，社区活跃度集中在 Agent 稳定性修复与安全漏洞补丁。Google 团队紧急修复了 SSRF 漏洞（#28557）及 Bash 变量扩展绕过攻击（#28418），同时 eval 评估基础设施持续完善，新增工具调用格式化工具与静态校验命令。

---

## 2. 版本发布

> 过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 优先级 | 评论/👍 | 链接 |
|---|------|--------|---------|------|
| #22323 | Subagent MAX_TURNS 被错误报告为 GOAL success，掩盖中断状态 | P1 | 12 / 2 | [链接](https://github.com/google-gemini/gemini-cli/issues/22323) |
| #21409 | Generalist agent 无限挂起 | P1 | 8 / 8 | [链接](https://github.com/google-gemini/gemini-cli/issues/21409) |
| #19873 | 通过零依赖 OS 沙盒利用模型的 Bash 亲和性 | P2 | 8 / 1 | [链接](https://github.com/google-gemini/gemini-cli/issues/19873) |
| #24353 | 健壮的分组件级别评估体系 | P1 | 7 / 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/24353) |
| #22745 | 评估 AST 感知文件读取/搜索的价值 | P2 | 7 / 1 | [链接](https://github.com/google-gemini/gemini-cli/issues/22745) |
| #21968 | Gemini 未充分使用 skills 和 sub-agents | P2 | 6 / 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/21968) |
| #26522 | Auto Memory 无限重试低信号 session | P2 | 5 / 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/26522) |
| #26525 | 增加确定性脱敏并减少 Auto Memory 日志 | P2 | 4 / 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/26525) |
| #25166 | Shell 命令执行完成后卡在"Waiting input" | P1 | 4 / 3 | [链接](https://github.com/google-gemini/gemini-cli/issues/25166) |
| #21983 | browser subagent 在 Wayland 下失败 | P1 | 4 / 1 | [链接](https://github.com/google-gemini/gemini-cli/issues/21983) |

**重点关注**：#22323 和 #21409 均涉及 Agent 生命周期管理缺陷，直接影响多步骤任务可靠性；#26522/#26525 暴露 Auto Memory 机制在隐私与效率上的双重问题。

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 链接 |
|---|------|------|------|
| #28695 | 修复 SDK： malformed tool arguments 不再中断 sendStream | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28695) |
| #28694 | 修复发布流程：容忍禁止删除 dist-tag 的 npm 注册表 | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28694) |
| #28557 | 🔒 修复 web-fetch.ts SSRF 漏洞（异步 DNS 解析） | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28557) |
| #28691 | 🔒 阻止 `$VAR` / `${VAR}` 变量扩展绕过安全门 | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28691) |
| #28305 | 评估增强：工具调用时间线格式化 + 失败摘要 | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28305) |
| #28344 | 新增 `eval:validate` 静态校验命令（CI 门禁） | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28344) |
| #28369 | 评估报告：本地聚合通过率和开发者文档 | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28369) |
| #28689 | 修复 gaxios 嵌套流式错误的解包与解析 | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28689) |
| #28641 | 修复终端窄宽度下 ghost text 无限换行循环 | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28641) |
| #28688 | 支持 Cloud Workstations OAuth 动态重定向 URI | OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/28688) |

---

## 5. 功能需求趋势

- **评估与可观测性**：社区对 eval 基础设施需求旺盛，涵盖失败摘要、静态校验、本地报告聚合（#24353、#28305、#28344、#28369）。
- **安全性加固**：SSRF 防护、变量扩展绕过修补、Auto Memory 隐私脱敏成为高频议题（#28557、#28691、#26525）。
- **Agent 可靠性**：subagent 生命周期管理（恢复、权限控制、Wayland 兼容）是核心痛点（#22323、#21409、#21983、#22093）。
- **AST 感知能力**：探索基于 AST 的文件读取与代码库映射，以减少 token 噪声（#22745、#22746）。
- **开发体验**：Nixie 渲染性能、终端自适应、editor 退出后刷新等 CLI 底层体验持续优化。

---

## 6. 开发者关注点

1. **Agent 挂起与恢复**：Generalist Agent 和 subagent 在达到 MAX_TURNS 时行为不一致，且缺乏有效恢复机制，是最高频反馈的稳定性问题。
2. **Skills/Subagent 使用率低**：用户反馈即使配置了 skill 描述，模型也不会主动调用，需改进上下文匹配策略（#21968）。
3. **Auto Memory 隐私隐患**：未脱敏的 session 内容被发送至模型，且低信号 session 被重复处理，影响安全与效率（#26522、#26525、#26523）。
4. **浏览器 Agent 环境兼容**：Wayland 环境下 browser subagent 失败，影响 Linux 用户（#21983）。
5. **MCP 配置可见性**：服务器 env/cwd/headers 等关键字段未在权限确认中展示，建议完善（#28664）。
6. **Shell 命令阻塞**：简单命令执行后仍显示"Awaiting user input"，交互状态机存在缺陷（#25166）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**日期：2026-08-05 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

GitHub Copilot CLI 发布 v1.0.79-1/2 两个热修复版本，重点修复了 MCP 初始化兼容性及终端 prompt 固定行的显示逻辑。社区持续反馈多起高价值功能需求：Session Forking（25 👍）、插件自动更新（29 👍）和自定义主题（23 👍）位列评论热度前三。

---

## 2. 版本发布

### v1.0.79-2（2026-08-04）
- **Prompt 固定行优化**：将当前 prompt 固定行上移一行，复用 tab bar 已预留空间，减少 timeline 占用行数

### v1.0.79-1（2026-08-04）⚠️ Breaking Change
- **Sandbox 配置重命名**：`allowDevToolCaches` → `allowDevToolAccess`（授权范围从仅缓存扩展至 dev-tool 配置和 registries）
- 旧 key 已被忽略，已显式设为 `false` 的 opt-out 将恢复为默认开启状态

> 链接：[Release v1.0.79-2](https://github.com/github/copilot-cli/releases) · [Release v1.0.79-1](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标签 | 主题 | 评论 | 👍 | 状态 |
|---|------|------|------|-----|------|
| [#1697](https://github.com/github/copilot-cli/issues/1697) | sessions, context-memory | **Session Forking** — 将对话分支为并行 session，共享上下文 | 3 | 25 | OPEN |
| [#1504](https://github.com/github/copilot-cli/issues/1504) | theming-accessibility | **自定义主题支持** — 允许用户创建并分享可自定义主题（JSON） | 8 | 23 | OPEN |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | agents, enterprise | **组织级 Agent 不可见** — org 下创建的 Agent 未在 CLI/VS Code 中显示 | 7 | 9 | OPEN |
| [#2692](https://github.com/github/copilot-cli/issues/2692) | networking, mcp | **Web Search MCP 报错** — github-mcp-server 执行时出现 Streamable HTTP 错误 | 6 | 2 | CLOSED |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | enterprise, context-memory | **计费实体未选择** — 企业版无法保存 memories，提示 billing entity 未选 | 4 | 3 | OPEN |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | non-interactive, tools | **view 工具路径异常** — 1.0.73 对已有文件报 Path does not exist，1.0.71 正常 | 4 | 1 | OPEN |
| [#1947](https://github.com/github/copilot-cli/issues/1947) | sessions | **云同步 Session** — 跨设备 Continuity，当前 session 仅本地存储 | 4 | 6 | CLOSED |
| [#1037](https://github.com/github/copilot-cli/issues/1037) | authentication | **设备登录失败** — ENOTFOUND next-waitlist.azurewebsites.net，设备码流程中断 | 2 | 0 | OPEN |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | triage | **MCP 初始化兼容** — FastMCP 返回 -32602 被 CLI 误判为失败，1.0.79-1 引入 | 2 | 1 | OPEN |
| [#4196](https://github.com/github/copilot-cli/issues/4196) | models | **BYOK 流式补全失败** — reasoning_content 在 streaming delta 中导致 API 错误（5 次重试后放弃） | 2 | 0 | OPEN |

---

## 4. 重要 PR 进展

| # | 状态 | 摘要 | 作者 | 链接 |
|---|------|------|------|------|
| [#4366](https://github.com/github/copilot-cli/pulls/4366) | OPEN | **安全修复** — 解决 Vault app `copilot-cli` 基础安全发现（ci/production） | vault-chatops[bot] | [PR #4366](https://github.com/github/copilot-cli/pulls/4366) |
| [#4355](https://github.com/github/copilot-cli/pulls/4355) | OPEN | **合并请求** | XavierMP14 | [PR #4355](https://github.com/github/copilot-cli/pulls/4355) |

---

## 5. 功能需求趋势

从 Issue 热度与分类统计中提炼以下方向：

| 方向 | 代表 Issue | 社区热度 | 趋势 |
|------|-----------|---------|------|
| **Session 管理** | #1697 Forking, #1947 云同步, #4334 Stashed prompt 丢失 | 🔥🔥🔥 | 多设备 Continuity 和并行对话是高频需求 |
| **MCP 生态** | #2692, #4370, #4371 OAuth 3LO | 🔥🔥 | MCP 兼容性与认证流程持续暴露问题 |
| **企业/计费** | #1285 Agent 可见性, #4005 计费实体 | 🔥🔥 | 企业级部署体验亟待改善 |
| **BYOK/自定义模型** | #4196, #4139 | 🔥 | Bring Your Own Key 支持流式补全的稳定性 |
| **插件系统** | #4048 Skills 不可调用, #4361 Slash command 回归, #1709 自动更新 | 🔥🔥🔥 | 插件生态活跃但稳定性不足 |
| **主题/可访问性** | #1504 自定义主题, #3898 颜色对比度 | 🔥 | 个性化需求强，1.0.73 引入的终端显示问题 |

---

## 6. 开发者关注点

**🔴 高频痛点（近 24h 新增/更新）**
- **MCP 初始化兼容**：1.0.79-1 对非标准 MCP server（如 FastMCP）的 `-32602` 响应处理过于严格，导致初始化失败
- **BYOK 流式错误**：`reasoning_content` 字段在 streaming delta 中引发 5 次重试后放弃，影响自定义模型体验
- **Session 数据丢失**：`ctrl+S` 暂存的未提交 prompt 在 session 切换后丢失（#4334）

**🟡 体验改进**
- 企业版 Agent 列表与 Billing Entity 配置问题（#1285, #4005）
- 插件 Skill 无法通过 Slash Command 调用，且 `/plugin-skill-name` 行为回归（#4048, #4361）
- `web_search` 工具在无结果时返回幻觉内容而非明确提示（#4093）

**🟢 功能期待 Top 5**
1. Session Forking（#1697 · 25 👍）
2. 插件自动更新（#1709 · 29 👍）
3. 自定义主题（#1504 · 23 👍）
4. 云同步 Session（#1947 · 6 👍）
5. 删除 Session 命令（#2019 · 13 👍）

---

*报告生成时间：2026-08-05 | 数据覆盖：过去 24 小时*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报
**日期：2026-08-05**

---

## 1. 今日速览

过去24小时内 Kimi Code CLI 无新版本发布，社区活跃度集中在功能需求与稳定性改进。开发者重点关注**跨会话记忆系统**和**远程控制**两大功能方向，同时高上下文负载下的代理可靠性问题引发关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

### 🔥 #1282 [Enhancement] Remote Control - 跨设备续接会话
- **作者：** CatKang | **评论：** 12 | **👍：** 24
- **重要性：** 允许用户通过手机、平板或浏览器继续本地 CLI 会话，实现工作流无缝衔接，是提升移动端体验的关键功能。社区反响热烈（24 票支持）。
- **链接：** [MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

### 🔥 #1283 [Enhancement] Memory System - 跨会话持久化上下文
- **作者：** CatKang | **评论：** 18 | **👍：** 0
- **重要性：** 建议实现 AI 自动记忆与用户自定义指令的混合记忆系统，解决 CLI 每次启动重置上下文的痛点，对长期项目开发有重要价值。
- **链接：** [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### 🔥 #2586 [Closed] 高上下文填充下 Agent 可靠性下降
- **作者：** GrokBuildMJW | **评论：** 1 | **状态：** ✅ CLOSED
- **重要性：** 报告了约 500K tokens 上下文阈值后出现的重复动作循环、指令漂移等问题，是首个系统性记录长会话稳定性的 issue，对后续优化具有参考意义。
- **链接：** [MoonshotAI/kimi-cli Issue #2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)

### ⚠️ #2587 [Bug] Windows 下正常推进会话时异常退出
- **作者：** Sdongmaker | **评论：** 0
- **重要性：** 影响 Windows 用户使用 K3 high 模型时的基础稳定性，属于阻断性 bug。
- **链接：** [MoonshotAI/kimi-cli Issue #2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)

### ⚠️ #2584 [Bug] Windows 下泰语等 IME 字符重复输入
- **作者：** mgprona | **评论：** 0 | 版本：0.31.1
- **重要性：** 影响非拉丁语系用户的输入体验，是 Windows 平台的已知 IME 兼容性问题。
- **链接：** [MoonshotAI/kimi-cli Issue #2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)

---

## 4. 重要 PR 进展

### 🛠️ #2200 [Fix] Shell 超时适配长命令执行
- **作者：** he-yufeng | **更新：** 2026-08-04
- **功能：** 自动延长 git submodule、clone/fetch、包安装、构建等慢操作的时间超时，同时保留显式超时值，解决默认 60s 超时导致长命令失败的问题。
- **链接：** [MoonshotAI/kimi-cli PR #2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)

### 🛠️ #2585 [Feat] 为子进程设置 AI_AGENT 环境变量
- **作者：** complynx | **更新：** 2026-08-04
- **功能：** 通过 `AI_AGENT=kimi` 标记向 pip/uv 和独立二进制入口点启动的子进程暴露代理标识，支持包装器/编排器覆盖，解决多代理环境下的标识冲突问题。
- **链接：** [MoonshotAI/kimi-cli PR #2585](https://github.com/MoonshotAI/kimi-cli/pull/2585)

---

## 5. 功能需求趋势

| 优先级 | 功能方向 | 说明 |
|--------|----------|------|
| 🔴 高 | 跨会话记忆系统 | #1283 持续获得关注，开发者期望 CLI 能记住项目模式与用户偏好 |
| 🔴 高 | 远程控制/跨设备同步 | #1282 获 24 票支持，移动端续接本地会话是明确需求 |
| 🟡 中 | 长会话稳定性 | #2586 揭示高上下文负载下的可靠性退化问题 |
| 🟡 中 | 多代理环境兼容 | #2585 PR 解决子进程代理标识问题 |
| 🟢 低 | Windows IME 支持 | 泰语等多字节字符输入兼容性待修复 |

---

## 6. 开发者关注点

**核心痛点：**
- **上下文持久化缺失：** 每次启动 CLI 需重新提供背景信息，缺乏记忆机制是最大痛点（#1283）
- **长会话可靠性：** 500K+ tokens 后代理行为退化，需改进上下文管理与指令遵循稳定性（#2586）
- **跨设备工作流断裂：** 用户希望随时随地继续本地会话，当前缺乏远程接入能力（#1282）

**高频反馈：**
- Windows 平台的输入兼容性问题（IME 字符重复、异常退出）
- 慢命令超时配置不够灵活，需根据命令类型动态调整
- 多代理/编排场景下缺乏统一的代理标识机制

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-08-05

## 今日速览

OpenCode 发布 **v1.18.13**，修复 TUI PR review 上下文显示及 Desktop RTL 布局问题。社区最高热度 Issue 集中在 **Go Plan 用量 API 暴露**（#16017，126👍）与 **provider stream 异常中断静默失败**（#37852，52👍）两大痛点。v2 重构进入关键阶段，多组 PR 正在推进 V1 兼容性剥离。

---

## 版本发布

### v1.18.13

- **TUI**: GitHub PR review 现在在上下文中包含 PR 编号与 URL
- **Desktop**: 修复多处分 RTL（从右至左）布局问题，涉及标签页、抽屉、缩放及标题栏交互；统一方向性图标行为

> 🔗 [GitHub Releases](https://github.com/anomalyco/opencode/releases)

---

## 社区热点 Issues

| Issue | 热度 | 状态 | 摘要 |
|-------|------|------|------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | 👍 126 | OPEN | 请求暴露 Go Plan 用量/余额 API（滚动/周/月维度），当前仅 Web 控制台可见 |
| [#37852](https://github.com/anomalyco/opencode/issues/37852) | 👍 52 | OPEN | Provider stream 异常中断被记录为 `finish=unknown`，零 token、零文本，子 agent 静默返回空结果 |
| [#31122](https://github.com/anomalyco/opencode/issues/31122) | 👍 50 | OPEN | OMO Harness Stream Consumer 死锁：LLM stream 停止 emit 但永不关闭，Kimi K2.6 thinking 模式观察到的 36 分钟挂起 |
| [#39829](https://github.com/anomalyco/opencode/issues/39829) | 👍 22 | OPEN | 为 opencode-go 添加 DeepSeek v4-flash Responses API 支持（2026-07-31 发布的 `deepseek-v4-flash-0731` checkpoint） |
| [#28590](https://github.com/anomalyco/opencode/issues/28590) | 👍 2 | OPEN | `writeOsc52` 在 GNU screen 下错误使用 tmux DCS 格式，无分块处理 |
| [#40243](https://github.com/anomalyco/opencode/issues/40243) | 👍 4 | OPEN | ChatGPT OAuth 拒绝 EU 居住者工作区的 GPT-5.6 模型，官方 Codex CLI 正常 |
| [#38723](https://github.com/anomalyco/opencode/issues/38723) | 👍 1 | OPEN | `opencode run` 初始化阶段间歇性挂起（~56% 失败率），无 session 创建、无输出、无错误 |
| [#39207](https://github.com/anomalyco/opencode/issues/39207) | 👍 1 | CLOSED | GitHub OAuth 登录失败：email 参数为空导致 SQL update 报错 |
| [#40588](https://github.com/anomalyco/opencode/issues/40588) | 👍 0 | OPEN | 免费层 mid-task 断供无预警，请求暴露剩余配额/倒计时 |
| [#40572](https://github.com/anomalyco/opencode/issues/40572) | 👍 0 | OPEN | Electron 渲染进程无响应（~3 秒冻结），Solid.js 响应式依赖循环 + ResizeObserver 抖动 |

---

## 重要 PR 进展

| PR | 状态 | 摘要 |
|----|------|------|
| [#40381](https://github.com/anomalyco/opencode/pull/40381) | CLOSED | 屏蔽 V2 不支持的能力，保留 V1 行为于 legacy facade 之后 |
| [#40382](https://github.com/anomalyco/opencode/pull/40382) | OPEN | 移除 V1 兼容性层：删除 V1 协议检测、兼容适配器、legacy SDK |
| [#40378](https://github.com/anomalyco/opencode/pull/40378) | CLOSED | 迁移 session transport、catalog、MCP 等至 V2 API |
| [#40376](https://github.com/anomalyco/opencode/pull/40376) | CLOSED | V2 session 投影协调：标记完整页、剪枝过期源 |
| [#40375](https://github.com/anomalyco/opencode/pull/40375) | CLOSED | App 自有渲染契约定义，路由渲染类型导入 |
| [#40576](https://github.com/anomalyco/opencode/pull/40576) | OPEN | 恢复中断的 provider response：保留有输出的 attempt，追加合成 user message 请求模型续写 |
| [#40487](https://github.com/anomalyco/opencode/pull/40487) | OPEN | 退役 legacy provider 别名：移除 Azure Cognitive Services 和 Google Vertex Anthropic 独立注册 |
| [#40595](https://github.com/anomalyco/opencode/pull/40595) | OPEN | 同步 session 选择至 prompt 前：统一 agent/model/reasoning 变体同步 |
| [#40590](https://github.com/anomalyco/opencode/pull/40590) | OPEN | 安装脚本支持 GITHUB_TOKEN 认证，避免匿名 API 限流 |
| [#40578](https://github.com/anomalyco/opencode/pull/40578) | OPEN | 新增 `/handoff` 命令，支持会话移交（close #26757） |

---

## 功能需求趋势

1. **用量透明化** — Go Plan 配额 API（#16017）、免费层剩余额度暴露（#40588）、`/usage` 命令（#40584）高频出现，用户对订阅状态感知需求强烈
2. **流式连接韧性** — stream 中断静默失败（#37852）、stream consumer 死锁（#31122）、中断恢复 PR（#40576）均指向 provider 连接的可靠性痛点
3. **新模型适配** — DeepSeek v4-flash Responses API（#39829）、DeepSeek 退役模型清理（#40577）、Ollama reasoning field 兼容（PR #36068）
4. **V2 架构迁移** — 多组 PR 推进 V1→V2 协议剥离，开发者关注兼容性边界与遗留 SDK 清理节奏
5. **跨平台终端兼容** — GNU screen vs tmux OSC52 差异（#28590）、WSL 输出异常（#20234）、Linux 自定义标题栏（PR #37620）

---

## 开发者关注点

- **订阅体验断层**：Go Plan 用户无法在 TUI/CLI 查询用量，只能依赖 Web 控制台 cookie 登录，免费层 mid-task 断供无预警
- **Provider 异常静默**：stream 异常终止被记录为"正常完成"，无 error 日志、无 usage 上报，调试困难
- **V2 迁移不确定性**：多栈 PR（#40375-#40382）正在重构核心协议，开发者关注 V1 legacy 支持周期与 breaking change 范围
- **Electron 性能**：Solid.js 响应式循环导致渲染进程冻结，ResizeObserver 与 API rate-limit retry 放大效应
- **OAuth/合规**：GitHub OAuth email 为空（#39207）、ChatGPT EU  residency 模型拒绝（#40243）

---

*数据来源：github.com/anomalyco/opencode · 统计周期：2026-08-04 至 2026-08-05*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报
**日期：2026-08-05**  
**数据源：github.com/QwenLM/qwen-code**

---

## 1. 今日速览

今日 Qwen Code 发布 v0.21.6-preview.0 预览版，主要更新包括浏览器扩展诊断功能和无头 Goal 工作流文档。社区热议集中在 Agent 运行时安全边界、MCP 工具挂起问题以及多工作区守护进程资源管控等核心架构议题。

---

## 2. 版本发布

### v0.21.6-preview.0 / v0.21.5-nightly.20260805
**发布日期：** 2026-08-05  
**PR 链接：** [#6739](https://github.com/QwenLM/qwen-code/pull/6739)

**更新内容：**
- `feat(browser-ext)`：新增 Alpha 就绪诊断功能，帮助开发者检查浏览器扩展的环境配置
- `docs`：补充无头 Goal 工作流的文档说明

---

## 3. 社区热点 Issues

### 🔥 高优先级 Issues

**1. [Proposal] 确定性工具执行边界 — 可信赖 Agent 运行时**
- **Issue #8102** | 17 条评论 | 作者：chiga0
- **重要性：** 提出将 LLM 置于信任边界外，使运行时能够确定性约束、授权、观察和评估模型产生的动作。这是 Qwen Code 架构安全性的核心讨论。
- **社区反应：** 引发对 Agent 安全性的深度思考，标记为 P3 但讨论热度高。

**2. [Bug] Provider 警告消毒剂截断含端口消息，泄露含 `@` 的密码**
- **Issue #8136** | 8 条评论 | 作者：LHMQ878
- **重要性：** 安全漏洞 — `sanitizeProviderWarning` 函数在处理含端口的 URL 时会错误截断，导致密码泄露。
- **状态：** 已确认 bug，需紧急修复。

**3. [Bug] qwen code 在 tmux 中严重闪屏**
- **Issue #8519** | 11 条评论 | 作者：Pengwei-Jin | **已关闭**
- **重要性：** 影响终端用户体验的高频问题，多位用户反馈相同症状。
- **状态：** 已关闭，推测已修复。

**4. [Bug] `qwen mcp list` 在 SSE 服务器无响应时永久挂起**
- **Issue #8550** | 4 条评论 | 作者：dpc00
- **重要性：** MCP 工具集成关键路径的可用性 bug，影响多工作区场景。
- **状态：** OPEN，待处理。

**5. [Feature] 多工作区守护进程资源使用追踪**
- **Issue #8051** | 9 条评论 | 作者：doudouOUC
- **重要性：** 生产级 `qwen serve` 需要可度量的资源边界，当前仅限制数量不限制字节。
- **状态：** OPEN，P2 优先级。

**6. [Bug] APIUserAbortError 后会话 transcript 丢失后续轮次**
- **Issue #8356** | 5 条评论 | 作者：aipanini
- **重要性：** 会话管理核心功能 bug，影响 ACP/Web 桥接场景。
- **状态：** OPEN。

**7. [Bug] 内容类型无法安全编码 per-provider 推理回放契约**
- **Issue #8533** | 4 条评论 | 作者：netbrah
- **重要性：** 基础性架构问题，涉及 Content[]/Part[] 类型系统的安全扩展。
- **状态：** OPEN，需讨论。

**8. [Bug] `--resume` 可重建 PR #8260 已修复的悬空未签名思考问题**
- **Issue #8535** | 3 条评论 | 作者：netbrah
- **重要性：** 回归问题，会话恢复路径存在安全漏洞。
- **状态：** OPEN。

**9. [Feature] 添加 Korean (ko) 到文档站点和 README 语言栏**
- **Issue #8551** | 3 条评论 | 作者：ken-jo
- **重要性：** 国际化扩展，提升韩语开发者体验。
- **状态：** OPEN。

**10. [Bug] 终端窗口缩小时 scrollback 重复打印 transcript**
- **Issue #8557** | 3 条评论 | 作者：pomelo-nwu
- **重要性：** macOS/Warp 终端渲染 bug，影响交互体验。
- **状态：** OPEN。

---

## 4. 重要 PR 进展

### 🚀 新功能 PR

**1. feat(core): 从 API 元数据解析模型模态**
- **PR #8529** | 作者：DragonnZhang
- **内容：** 从 models.dev 解析模型输入模态，支持运行时动态更新，后台刷新元数据。

**2. feat(computer-use): 默认使用 Qwen CUA 驱动**
- **PR #8568** | 作者：LaZzyMan
- **内容：** 将 Computer Use 后端从 trycua 切换到 Qwen 自研 CUA 驱动 v0.17.0，暴露 54 工具 MCP 契约。

**3. feat(external-context): 添加 Mem0 内存写入支持**
- **PR #8507** | 作者：doudouOUC
- **内容：** 可选的 Mem0 写入变体，配置 `"write": {"enabled": true}` 后注册 `context_remember` 钩子。

**4. feat(auth): 添加 Kimi 和 Xiaomi MiMo 提供商**
- **PR #8368** | 作者：DragonnZhang
- **内容：** 新增第三方提供商预设，支持 Coding Plan、API Key（中国/国际）等多种接入方式。

**5. feat(core): 向后转录分页边界控制**
- **PR #8553** | 作者：wenshao
- **内容：** 限制长单轮会话中的向后分页扩展，最多超出请求大小一个页面窗口。

**6. feat(web-shell): 原生 Live Voice 支持**
- **PR #7859** | 作者：LaZzyMan
- **内容：** 实验性 Live Voice 功能，仅 macOS 可用，默认禁用。

**7. feat(review): capture-tui 第二阶段**
- **PR #8388** | 作者：wenshao
- **内容：** 证据图片采集工具，可在私有 tmux 服务器中驱动代码并捕获终端渲染。

**8. feat(omni): S2 输入扩展 — 图像/音频/URL 源**
- **PR #8512** | 作者：LaZzyMan
- **内容：** 扩展多模态输入支持，包含 token 维度传输守卫。

### 🐛 修复 PR

**9. fix(channels): DingTalk 交互式卡片配置管理**
- **PR #8517** | 作者：BenGuanRan
- **内容：** 暴露 `interactiveCards` 为可管理嵌套对象，验证配置值并镜像到 TypeScript SDK。

**10. fix(web-shell): 允许 daemon 认证时的会话刷新**
- **PR #8445** | 作者：BZ-D
- **内容：** 修复带 bearer token 时刷新会话返回 401 的问题。

---

## 5. 功能需求趋势

从今日 Issues 和 PR 中提炼出以下社区关注方向：

| 趋势方向 | 热度 | 代表 Issue/PR |
|---------|------|--------------|
| **Agent 安全与可信赖运行时** | 🔥🔥🔥 | #8102, #8533, #8535 |
| **多工作区守护进程资源管控** | 🔥🔥🔥 | #8051, #8182, PR #8213 |
| **MCP 工具集成稳定性** | 🔥🔥 | #8550, #8136 |
| **第三方模型提供商支持** | 🔥🔥 | PR #8368 (Kimi/MiMo) |
| **Computer Use / CUA 驱动** | 🔥🔥 | PR #8568, PR #8564 |
| **终端/交互体验优化** | 🔥 | #8519, #8557, #8538 |
| **国际化 (i18n)** | - | #8551 (Korean) |
| **外部上下文/记忆系统** | 🔥 | PR #8507 (Mem0) |

---

## 6. 开发者关注点

### 高频痛点

1. **安全边界问题**：多位开发者关注 LLM 与运行时的信任边界划分，担心 Agent 动作的可控性。Issue #8102 提出"可信赖 Agent 运行时"方向，获得高度关注。

2. **MCP 工具集成稳定性**：SSE 传输模式下的挂起问题（#8550）和 Provider 警告消毒剂的安全漏洞（#8136）均涉及 MCP 集成的核心路径。

3. **守护进程资源管理**：多工作区场景下内存和连接限制不足（#8051, #8182），生产环境部署需要更精细的资源管控。

4. **终端渲染问题**：tmux 闪屏（#8519）、窗口缩小重复打印（#8557）等 UX 问题影响开发者日常使用。

5. **会话恢复安全**：`--resume` 和 `--continue` 路径可能重建已修复的安全漏洞（#8535），需回归测试覆盖。

### 社区期待

- 更完善的模型元数据自动解析
- 第三方提供商（Kimi、MiMo 等）的一键接入
- Computer Use 功能的稳定化
- 更细粒度的资源限制配置

---

**报告生成时间：** 2026-08-05  
**数据截止时间：** 2026-08-05 07:00 UTC

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报
**日期：2026-08-05** | 数据源：[github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## 一、今日速览

今日社区核心关注点集中在**编译性能优化**与**多模型/多 API Key 支持**，作者 Hmbown 发起了一系列构建系统改进的 Epic 议题（#5249/#5248），引发开发者对长编译时间的广泛讨论（#4991）。同时，v0.9.4 版本持续集成中，新增 Runtime API、MCP Registry 发现等关键能力。

---

## 二、版本发布

无新版本发布。v0.9.4 发布列车（PR #5135）正在进行中，已超前 main 分支 77 个提交。

---

## 三、社区热点 Issues

### 1. [#5249] Epic: v0.9.5 构建时 lane — 终结单体编译税
- **作者**: Hmbown | **状态**: OPEN
- **摘要**: `codewhale-tui` crate 包含 682,959 行代码、620 个文件，占工作区的 86%，每次 edit/compile 均需完整重新编译。此 Epic 旨在系统性解决构建性能瓶颈。
- **重要性**: ⭐⭐⭐⭐⭐ 直接影响所有开发者的开发体验与迭代效率。

### 2. [#4991] 编译时间与 TUI crate 单体架构讨论
- **作者**: aboimpinto | **状态**: OPEN | **评论**: 4
- **摘要**: 开发者分享在自定义 slash command 重构过程中体验到的编译等待痛点，发起社区讨论。
- **重要性**: ⭐⭐⭐⭐ 反映真实用户痛点，与 #5249 形成呼应。

### 3. [#5209] [bug] File edit 动作静默接受错误参数并报告虚假成功
- **作者**: yekern | **状态**: OPEN | **评论**: 3
- **摘要**: `action=edit` 模式接受 `new_str` 等非标准参数名时不报错，返回假成功，导致用户需 3-5 次重试。
- **重要性**: ⭐⭐⭐⭐ 关键功能缺陷，影响工具调用可靠性。

### 4. [#5244] 未知模型 ID 静默降级至 128K 旧上下文默认值
- **作者**: Hmbown | **状态**: OPEN | **评论**: 1
- **摘要**: 当 `context_window_for_model` 不认识某模型 ID 时，静默回退至 128K，1M 窗口模型实际被压缩至 128K。
- **重要性**: ⭐⭐⭐⭐ 影响多模型支持的正确性，需明确报错。

### 5. [#5250] 仅支持保存一个 API Key，多提供商场景不便
- **作者**: ffyuhf | **状态**: OPEN | **评论**: 1
- **摘要**: 切换 DeepSeek/GLM 等模型时需反复获取新 key，期望支持多 key 分别保存。
- **重要性**: ⭐⭐⭐⭐ 多模型用户高频需求。

### 6. [#5239] 模型支持 1M 上下文，工具却在 128K 触发压缩
- **作者**: hardy922 | **状态**: OPEN | **评论**: 1
- **摘要**: 用户反馈 1M 上下文模型被提前压缩，询问是否可以调整阈值。
- **重要性**: ⭐⭐⭐ 与 #5244 相关，反映上下文管理痛点。

### 7. [#5241] 定价接口返回 503，所有会话显示未验证实时定价
- **作者**: alitvak69 | **状态**: OPEN | **评论**: 1
- **摘要**: 升级至 v0.9.3 后成本显示失效，所有 provider 均返回 `unverified_live_pricing`。
- **重要性**: ⭐⭐⭐ 影响成本控制功能。

### 8. [#5005] [已关闭] 沙箱支持文件系统路径白名单
- **作者**: WillHouMoe | **状态**: CLOSED | **更新**: 2026-08-05
- **摘要**: 请求支持访问 Xcode DerivedData 等外部构建产物路径，已关闭（可能已解决或拒绝）。
- **重要性**: ⭐⭐⭐ 沙箱灵活性需求。

### 9. [#5243] OAuth 登录必须采用刚颁发的 token — 避免二次跳转
- **作者**: Hmbown | **状态**: OPEN | **评论**: 0
- **摘要**: xAI/ChatGPT OAuth 登录后仍需手动回到 provider picker 按 `e` 确认，期望自动采用。
- **重要性**: ⭐⭐⭐ 用户体验优化。

### 10. [#4029] 计划创建类似 Reasonix 的界面？
- **作者**: longASKme | **状态**: OPEN | **评论**: 4
- **摘要**: 社区成员询问是否计划开发类似 Reasonix 的界面。
- **重要性**: ⭐⭐ 功能方向探讨。

---

## 四、重要 PR 进展

### 1. [#5135] v0.9.4 发布列车
- **作者**: Hmbown | **状态**: OPEN
- **内容**: v0.9.4 集成发布，包含 77 个提交，涵盖此前多个候选版本的修复与功能。
- **链接**: [PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)

### 2. [#5240] 暴露 Bash wait 真实耗时
- **作者**: SparkofSpike | **状态**: OPEN
- **内容**: 修复 `wait` 工具仅记录 `duration_ms` 到 metadata 的问题，现在模型可直接感知等待时长，避免忙轮询误判。
- **链接**: [PR #5240](https://github.com/Hmbown/CodeWhale/pull/5240)

### 3. [#5242] 子代理中断恢复功能
- **作者**: SparkofSpike | **状态**: OPEN
- **摘要**: 修复 `agents/followup` 对 `interrupted_continuable` 子代理的恢复逻辑，现可通过 checkpoint 续跑长任务。
- **链接**: [PR #5242](https://github.com/Hmbown/CodeWhale/pull/5242)

### 4. [#5234] 修复鼠标捕获时交替滚动的 bug
- **作者**: SparkofSpike | **状态**: OPEN
- **摘要**: 修复鼠标滚轮在内容溢出时误切换输入历史的问题，根源为 xterm 交替滚动模式冲突。
- **链接**: [PR #5234](https://github.com/Hmbown/CodeWhale/pull/5234)

### 5. [#5225] ACP 暴露文件/搜索/Git 等工具
- **作者**: rafaelcavalheri | **状态**: OPEN
- **摘要**: 修复 ACP server 的 `session/prompt` 仅流式返回文本、不执行工具调用的问题，现支持 Zed 等编辑器集成。
- **链接**: [PR #5225](https://github.com/Hmbown/CodeWhale/pull/5225)

### 6. [#5133] Runtime API 持久化目标循环状态
- **作者**: Copilot | **状态**: OPEN
- **摘要**: 新增 `/v1/threads/{id}/goal` 端点，允许管理客户端读取活跃目标状态并驱动生命周期转换。
- **链接**: [PR #5133](https://github.com/Hmbown/CodeWhale/pull/5133)

### 7. [#5132] Runtime API 暴露验证器回执与证据
- **作者**: Copilot | **状态**: OPEN
- **摘要**: 新增 `/v1/fleet/runs/{run_id}/receipts` 等端点，替代单一计数器，支持定位失败任务。
- **链接**: [PR #5132](https://github.com/Hmbown/CodeWhale/pull/5132)

### 8. [#5131] Runtime API 内存端点
- **作者**: Copilot | **状态**: OPEN
- **摘要**: 新增 `/v1/memory` 路由，支持有界内存检查与生命周期控制。
- **链接**: [PR #5131](https://github.com/Hmbown/CodeWhale/pull/5131)

### 9. [#5130] Runtime API MCP 服务器配置
- **作者**: Copilot | **状态**: OPEN
- **摘要**: 新增 MCP 服务器 CRUD 端点，支持通过 HTTP 管理 MCP 配置，无需直接编辑 TOML。
- **链接**: [PR #5130](https://github.com/Hmbown/CodeWhale/pull/5130)

### 10. [#5238] MCP Registry 发现与优先选择
- **作者**: bistack | **状态**: OPEN
- **摘要**: 新增 MCP Registry 发现机制，模型在调用 `exec_shell` 前优先查询公共 Registry 中的零环境 stdio 服务器。
- **链接**: [PR #5238](https://github.com/Hmbown/CodeWhale/pull/5238)

---

## 五、功能需求趋势

| 趋势方向 | 代表议题/PR | 热度 |
|---------|------------|------|
| **构建性能优化** | #5249, #5248, #5245, #5247, #5246, #4991 | 🔥🔥🔥🔥🔥 |
| **多模型/多 API Key 支持** | #5250, #5244, #5239, #5241 | 🔥🔥🔥🔥 |
| **Runtime API 扩展** | #5133, #5132, #5131, #5130, #5129 | 🔥🔥🔥🔥 |
| **MCP 生态集成** | #5225, #5238 | 🔥🔥🔥 |
| **子代理/工作流可靠性** | #5242, #5240 | 🔥🔥🔥 |
| **IDE/编辑器集成** | #4029 (Reasonix 讨论), #5225 | 🔥🔥 |
| **文档与新手引导** | #5229 (Windows 中文指南) | 🔥🔥 |

---

## 六、开发者关注点

1. **编译时间是最大痛点**：`codewhale-tui` 单体 crate 导致每次编辑、提交、测试均需长时间编译，社区强烈期待构建系统拆分与增量编译改进。

2. **多模型支持不完善**：API Key 无法并存、未知模型 ID 静默降级、上下文窗口误判等问题频繁出现，反映多模型支持仍是短板。

3. **Runtime API 快速演进**：v0.9.4 期间集中推出目标管理、内存、MCP、验证器等 API，显示项目向"托管客户端/ fleet 管理"方向演进。

4. **工具调用可靠性需加强**：File edit 假成功、wait 耗时不可见等 bug 影响 agent 任务执行准确性。

5. **OAuth 体验待优化**：登录后仍需手动确认 token，增加使用摩擦。

---

*日报生成时间：2026-08-05 | 数据覆盖范围：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*