# AI CLI 工具社区动态日报 2026-08-07

> 生成时间: 2026-08-07 02:06 UTC | 覆盖工具: 9 个

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
**日期：2026-08-07**

---

## 1. 生态全景

2026年8月，AI CLI工具生态已进入"多Agent协作 + MCP生态整合"的第二阶段，从单一代码补全向自主Agent编排演进。闭源大厂（Anthropic、OpenAI、Google、GitHub）凭借API优势快速迭代，开源工具（OpenCode、DeepSeek TUI、Qwen Code）通过灵活架构和性能优化追赶。跨平台稳定性、权限系统健壮性和上下文管理能力成为当前竞争分水岭，MCP（Model Context Protocol）集成深度直接决定工具扩展性上限。

---

## 2. 各工具活跃度对比

| 工具 | Issues（精选） | PR（今日） | Release | 发布节奏 |
|------|---------------|-----------|---------|---------|
| **Claude Code** | 10 | 4 | 无 | 稳态迭代 |
| **OpenAI Codex** | 10 | 9（全合并） | ✅ rust-v0.147.0 | 高频 |
| **Gemini CLI** | 10 | 10（5合入/5待审） | 无（v0.54.2/v0.55-preview已在途） | 高频预览版 |
| **GitHub Copilot CLI** | 10 | 0 | ✅ v1.0.79-6 | 稳定修复 |
| **Kimi Code CLI** | 8 | 3 | 无 | 快速跟进 |
| **OpenCode** | 10 | 10 | 无 | 高频活跃 |
| **Pi** | 11 | 11 | ✅ v0.84.0 | 新功能发布 |
| **Qwen Code** | — | — | ✅ v0.21.7 | 功能突破 |
| **DeepSeek TUI** | 10 | 8 | 无（v0.9.4列车验证中） | 中频 |

> **数据说明**：Issues数为各日报精选核心条目；PR数以24小时内变动为准；发布节奏根据近期待观测周期推断。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **权限系统简化** | Claude Code、Copilot CLI、Kimi Code | allow/ask list逻辑失效；compound command确认风暴；auto→interactive切换残留执行 |
| **跨平台稳定性** | 全部9款工具 | Windows进程泄漏（Codex、Pi）、TUI渲染异常（Claude Code、OpenCode、Gemini）、macOS shell兼容（DeepSeek TUI） |
| **MCP集成成熟度** | Codex、Copilot CLI、Gemini CLI、DeepSeek TUI | 进程复用（#20883）、BigInt序列化（#4211）、认证后孤进程（#4392）、 Registry策略（#4374） |
| **上下文/长文本管理** | OpenCode、Qwen Code、DeepSeek TUI、Gemini CLI | 上下文窗口可视化（#6152）、工具数>128触发400（#24246）、1M模型被静默截断（#5244） |
| **子Agent可靠性** | Gemini CLI、Codex、DeepSeek TUI | hang/超时误报success（#21409/#22323）、中断恢复（#5242）、嵌套深度预算溢出（#5253） |
| **文件编辑健壮性** | Kimi Code、OpenCode、Claude Code | 非UTF-8文件损坏（#2591）、文件权限弹窗无响应（#36115）、transcript损坏（#73638） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 权限精细控制 + 插件生态 | 企业级开发者、Claude Pro用户 | 闭源API + 本地TUI，强调安全沙箱和session管理 |
| **OpenAI Codex** | Agent插件 + 会话分段 + Bubblewrap沙箱 | OpenAI API重度用户、自动化流水线 | Rust实现，进程级隔离，强调多轮Agent编排 |
| **Gemini CLI** | 多Agent调度 + Auto Memory + 新模型快速支持 | Google生态用户、多模型实验者 | 高频预览版策略，API层快速跟进Flash系列 |
| **GitHub Copilot CLI** | GitHub生态集成 + ACP协议 | GitHub组织用户、CI/CD流水线 | 闭源CLI，与GitHub Actions深度绑定 |
| **Kimi Code CLI** | 轻量级 + VSCode插件体验 + 中文友好 | 中国开发者、Moonshot API用户 | 快速迭代，修复响应敏捷（24h内双PR） |
| **OpenCode** | 全开源 + 订阅制模型服务（Go/Zen） | 开源社区、隐私敏感用户 | Go语言，插件系统完善，依赖第三方模型网关 |
| **Pi** | TUI交互创新 + 多Provider支持 | TUI体验要求高的开发者 | Java/Kotlin，全屏TUI为差异化卖点 |
| **Qwen Code** | 长上下文 + 内联图片渲染 + 国产模型 | 阿里云用户、中文开发者 | 支持Kitty/wezTerm图片协议，移除50轮限制 |
| **DeepSeek TUI** | 多API Key管理 + Runtime API + Rust性能 | 多模型用户、自建部署者 | Rust实现，渐进式上下文披露，亚水shell兼容 |

---

## 5. 社区热度与成熟度

```
成熟度矩阵（横轴：社区活跃度，纵轴：产品成熟度）

                    高成熟度
                         │
    Claude Code ●        │        OpenAI Codex ●
    Copilot CLI ●        │        Gemini CLI ●
                         │
    ─────────────────────┼─────────────────────
                         │
    OpenCode ●           │        Pi ●
    Kimi Code CLI ●      │
                         │
    DeepSeek TUI ●       │        Qwen Code ●
                    低成熟度
                         │
                    低活跃度 ←────────────→ 高活跃度
```

**核心观察：**
- **高活跃 + 高成熟**：Claude Code、OpenAI Codex、Copilot CLI——大厂资源投入，Issue响应稳定，Release节奏可控
- **高活跃 + 快速迭代**：OpenCode、Gemini CLI、Pi——社区驱动明显，PR吞吐量高，但稳定性风险并存
- **新兴追赶者**：Kimi Code CLI、Qwen Code、DeepSeek TUI——Issue数较少但增长快，修复响应敏捷，处于功能补齐期

---

## 6. 值得关注的趋势信号

| 趋势 | 证据 | 对开发者的参考价值 |
|------|------|------------------|
| **权限系统成为最大痛点** | Claude Code #76718（compound command 700+次确认）、Copilot CLI #4388（权限切换失效） | 企业部署前必须压测多Agent场景下的权限交互，避免工作流阻塞 |
| **MCP从实验走向生产** | Codex进程复用需求（#20883）、Copilot CLI 5条MCP相关Issue、DeepSeek TUI新增Registry策略 | 优先选择MCP进程可复用、认证恢复稳定的工具，降低生产环境运维成本 |
| **子Agent编排可靠性仍是短板** | Gemini CLI三连Issue（hang/误报/权限绕过）、DeepSeek TUI嵌套预算溢出 | 关键任务场景慎用全自动子Agent，建议保留人工确认节点 |
| **跨平台稳定性差距拉大** | 仅Qwen Code报告Windows Merge Queue测试，其他工具均有Windows专属Issue | Windows用户优先选择有CI覆盖的工具（Qwen Code、Codex），Mac/Linux体验普遍优于Windows |
| **长上下文竞争白热化** | Qwen移除50轮限制、OpenCode #6152（129👍上下文可视化）、DeepSeek TUI 1M模型静默降级 | 长对话场景需关注工具是否如实报告上下文窗口，避免隐性截断导致任务失败 |
| **开源工具差异化路径** | OpenCode依赖第三方网关（上游401拦截风险）、Pi专注TUI交互、DeepSeek TUI走Runtime API路线 | 选择开源工具时评估其上游依赖健康度，避免供应商锁定风险 |

---

**结论**：AI CLI工具生态已从"能用"迈入"好用"阶段，竞争焦点从模型能力转向工程稳定性、权限可控性和生态集成深度。开发者选型时应优先考虑：① 目标平台稳定性记录；② MCP集成成熟度；③ 权限系统设计是否匹配工作流；④ 社区Issue响应速度。当前阶段，闭源大厂工具在稳定性上占优，开源工具在灵活性和定制化上更具潜力。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-08-07 | 分析师：Agnes**

---

## 1. 热门 Skills 排行

| 排名 | Skill | 功能 | 热度 | 状态 |
|------|-------|------|------|------|
| 1 | **skill-creator 评估脚本修复** | 修复 `run_eval.py` 在 Windows 上的 recall=0% 问题（涉及 3 个关联 PR） | 🔥🔥🔥🔥🔥 | OPEN |
| 2 | **odt** | 支持 OpenDocument 格式文件的创建、填充与解析 | 🔥🔥🔥 | OPEN |
| 3 | **docx 追踪更改 ID 修复** | 修复 DOCX skill 添加修订时与已有书签的 `w:id` 冲突导致文档损坏 | 🔥🔥🔥 | OPEN |
| 4 | **color-expert** | 提供完整色彩体系知识（ISCC-NBS、Munsell、OKLCH 等） | 🔥🔥 | OPEN |
| 5 | **testing-patterns** | 覆盖完整测试栈：单元测试、React Testing Library、测试哲学 | 🔥🔥 | OPEN |
| 6 | **document-typography** | 防止 AI 生成文档中的排版问题（孤行、寡行、编号错位） | 🔥🔥 | OPEN |
| 7 | **plan-file-hygiene** | 解决规划产物无生命周期管理问题 | 🔥🔥 | OPEN |
| 8 | **self-audit** | 机械验证 + 四维度推理质量门禁 | 🔥🔥 | OPEN |

---

## 2. 社区需求趋势

从 Issues 数据提炼五大核心方向：

| 需求方向 | 代表 Issue | 核心诉求 |
|----------|-----------|---------|
| **安全与信任** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论） | 社区 skill 冒充官方命名空间，需建立信任边界机制 |
| **组织协作** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论，8 👍） | 支持组织内 Skill 共享，替代当前手动分发模式 |
| **开发工具链** | [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169) | `skill-creator` 评估脚本在 Windows 和触发检测上存在系统性缺陷 |
| **文档处理质量** | [#12](https://github.com/anthropics/skills/issues/12)、[#541](https://github.com/anthropics/skills/pull/541) | DOCX/PDF skill 存在文档损坏、格式错乱等严重 bug |
| **推理质量保障** | [#1385](https://github.com/anthropics/skills/issues/1385)、[#1367](https://github.com/anthropics/skills/pull/1367) | 社区自研质量门禁，覆盖预校准→对抗审查→交付验证全流程 |

**新兴兴趣点**：retro 游戏开发（#525）、SAP 预测分析（#181）、compact-memory 状态压缩（#1329）、Agent 治理模式（#412）。

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、修复关键问题，具备较高合并概率：

1. **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — `run_eval.py` 评估报告永久返回 0% recall，直接阻断 skill 描述优化循环。MartinCajiao 提出的修复方案覆盖 Windows 流读取、触发检测与并行 worker，是 skill-creator 工作流的根本性修复。

2. **[PR #541](https://github.com/anthropics/skills/pull/541)** — DOCX skill 添加修订时硬编码低 ID 导致与已有书签 `w:id` 冲突，引发文档损坏。属于生产环境高风险 bug。

3. **[PR #1479](https://github.com/anthropics/skills/pull/1479)** — `plan-file-hygiene` 解决规划产物堆积问题，Issue #1417 社区呼声强烈，作者已准备好交接。

4. **[PR #1367](https://github.com/anthropics/skills/pull/1367)** — `self-audit` 技能在 Issues #1385 提案基础上实现，覆盖机械验证+四维度推理审计，具备跨项目通用性。

5. **[PR #723](https://github.com/anthropics/skills/pull/723)** — `testing-patterns` 覆盖测试哲学、单元测试、React 组件测试，填补社区测试类 skill 空白。

6. **[PR #525](https://github.com/anthropics/skills/pull/525)** — Pyxel retro 游戏开发 skill，绑定 MCP server，差异化明显，作者维护活跃（最新更新于 2026-07-15）。

---

## 4. Skills 生态洞察

> **社区最集中的诉求是"可信可用"：一方面要求官方解决 skill-creator 工具链的 Windows 兼容性等基础缺陷（多 Issue 互相印证），另一方面迫切需要在安全命名空间隔离和组织共享机制上建立制度保障，防止社区贡献被滥用或丢失。**

---



# Claude Code 社区动态日报 — 2026-08-07

---

## 1. 今日速览

今日无新版本发布。社区焦点集中在**权限系统体验**（compound command 提示过载、ask list 被忽略）和**Windows 平台稳定性**（Desktop 崩溃、TUI 渲染异常）两大方向； Coygeek 贡献了大量文档补全 PR，一次性关闭了十余条 stale 文档 issue。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

### 🔥 高热度 Bug 与 Feature Request

| # | 标题 | 评论 | 👍 | 摘要 |
|---|------|------|-----|------|
| #57371 | Windows：禁用捆绑 Cowork 后台服务 | 18 | 42 | 不使用时 CoworkVMService 仍在后台运行，用户请求提供关闭开关 |
| #26581 | 系统通知：Claude 需要关注或完成任务时通知 | 8 | 32 | 类似 Copilot 的桌面/终端通知，多任务场景高频需求 |
| #78775 | [Regression] Desktop session 时间范围筛选器只在 Group by State 时显示 | 7 | 23 | 回归 Bug，影响用户按时间段管理会话历史 |
| #6527 | [BUG] ask list 在 Bash 加入 allow list 时被忽略 | 23 | 19 | Linux 权限系统问题，ask 列表形同虚设 |
| #33026 | 允许 Claude 主动触发 context compaction（已关闭） | 8 | 15 | 核心功能请求，Claude 无法主动准备压缩上下文 |
| #72173 | CLAUDE_CODE_DISABLE_MOUSE_CLICKS=1 不再保留 VS Code 终端文本选择 | 5 | 12 | macOS/VS Code 回归，影响复制操作体验 |
| #54750 | session limit 显示 100% 但本地实际使用极低 | 16 | 9 | 计费/配额显示异常，可能导致用户被误阻断 |
| #76248 | Cowork 远程 session git push 被 proxy 阻止（含 PAT） | 14 | 5 | 4 月中旬引入的 CCR_TEST_GITPROXY 回滚导致推送失败 |
| #79584 | Windows TUI assistant 文本在 tool call 前偶发不渲染 | 9 | 7 | AskUserQuestion 场景下消息丢失，插件工作流受影响 |
| #73638 | 会话重命名注入错误 turn 导致 transcript 永久损坏 | 9 | 0 | server_tool_use 执行中重命名，后续 prompt 全部 400 |

**值得关注的原因：**
- **#6527** 和 **#76718** 共同指向权限系统的复杂度痛点，前者 allow list 逻辑失效，后者 compound command 触发 700+ 次重复确认，严重阻碍多会话编排。
- **#57371** 以 42 个 👍 成为今日最热 feature request，Windows 用户对后台服务控制需求强烈。
- **#73638** 虽无 👍，但问题性质严重——transcript 永久损坏且无法恢复，影响所有使用 advisor 等 server tool 的用户。

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 说明 |
|---|------|------|------|------|
| #84600 | Enable frontend-design plugin at project scope | DanWebOps | OPEN | 通过 `.claude/settings.json` 在项目级别启用官方 frontend-design skill，实现仓库级插件自动加载 |
| #84427 | fix(plugin-dev): validate-agent.sh 不再因第一个 warning 退出 | erichanwang | OPEN | 修复 `set -e` 下 `((error_count++))` 导致脚本提前终止的问题，是 #76985 的后续修复 |
| #84381 | fix(plugin-dev): 处理 wrapped hook schemas 和可选 matchers | erichanwang | OPEN | 增强 `validate-hook-schema.sh`，支持顶层 `hooks` 对象包装的 hook handler 定义格式 |
| #84365 | fix(scripts): 任何用户均可通过 👎 阻止自动关闭 | alifakbxr | OPEN | 修复 #79146，使 dedupe bot 的自动关闭逻辑尊重任何用户的 negative feedback |

> 注：今日仅有 4 条 PR，全部收录。

---

## 5. 功能需求趋势

从 Issue 聚类分析，社区当前最关注的功能方向：

1. **权限系统简化与健壮性** — 多条 issue 集中反映权限配置（ask list、allow list、compound command）的行为不符合直觉，亟需 UX 和逻辑层面的改进。
2. **跨平台一致性** — Windows 和 macOS 的 TUI/Desktop 各有回归 bug（渲染、鼠标事件、截图崩溃），平台适配仍是重点。
3. **多会话与协作能力** — Cowork 相关 issue（#76248、#57371）和 Web Remote Control 渲染问题（#80454）表明远程协作场景正在增长，但稳定性有待加强。
4. **上下文管理自主权** — #33026（已关闭）反映社区希望 Claude 能主动管理上下文，而非完全依赖系统触发。
5. **通知与状态可见性** — #26581 等 issue 指向多任务场景下的状态通知需求。

---

## 6. 开发者关注点

**高频痛点总结：**

| 主题 | 涉及 Issue | 核心诉求 |
|------|-----------|---------|
| 权限系统 | #6527, #76718 | allow/ask list 逻辑 bug；compound command 每次分段都弹确认，多会话场景不可用 |
| Windows 稳定性 | #57371, #79584, #81664 | 后台服务控制、TUI 渲染、浏览器截图崩溃 |
| 计费/配额显示 | #54750 | session limit 与实际情况不符，存在误阻断风险 |
| 文档完整性 | 多条 stale docs issue（已关闭） | sandboxing、MCP、env vars、命令别名等长期缺失 |
| 会话持久化 | #73638 | 执行中途重命名可破坏 transcript，影响可恢复性 |
| 插件开发体验 | PR #84427, #84381 | 验证脚本健壮性不足，hook schema 格式兼容性差 |

**开发者呼吁优先处理：**
- 修复权限系统的 compound command 确认风暴（#76718）
- 稳定 Windows Desktop 后台服务管理（#57371）
- 修复 session rename 导致 transcript 损坏的竞态问题（#73638）
- 统一多平台 TUI 渲染行为（#79584, #72173）

---

*数据来源：github.com/anthropics/claude-code | 统计时间：2026-08-07*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-08-07**

---

## 1. 今日速览

OpenAI Codex 发布 `rust-v0.147.0` 版本，新增 Agent Plugins 安装和持久化对话分段功能。社区高度关注 Windows 桌面端进程泄漏（27赞）和 CLI 多行状态栏支持（58赞）两个问题。PR 方向集中在沙箱加固、MCP 性能优化和内部架构清理。

---

## 2. 版本发布

### rust-v0.147.0

**新特性：**
- **安装便携式 Agent Plugins**：支持从本地、个人、工作区和远程插件目录搜索并安装插件 (#36544, #36409, #36919)
- **对话分段浏览**：可将长会话整理为持久化、手动排序的分段，支持增量浏览 (#35722, #36007)

---

## 3. 社区热点 Issues

| 排名 | Issue | 热度 | 摘要 |
|------|-------|------|------|
| 1 | [#21653](https://github.com/openai/codex/issues/21653) | 👍58 | CLI 状态栏过长时被截断，请求支持多行显示 |
| 2 | [#33776](https://github.com/openai/codex/issues/33776) | 👍27 | Windows 桌面端反复泄漏 taskkill.exe/conhost.exe 进程，引发 WMI 风暴和 DWM 性能降级 |
| 3 | [#19694](https://github.com/openai/codex/issues/19694) | 👍35 | **已关闭**：桌面端模型选择器过滤了 model_catalog_json 返回的模型 |
| 4 | [#16579](https://github.com/openai/codex/issues/16579) | 👍32 | Windows 环境下无法通过配置将默认 shell 改为 Git Bash 等 |
| 5 | [#20883](https://github.com/openai/codex/issues/20883) | 17评论 | 请求 MCP 服务器按项目/工作区复用进程，而非每个会话启动新进程 |
| 6 | [#26820](https://github.com/openai/codex/issues/26820) | 12评论/👍9 | CLI 无法获取 Chrome 扩展后端，而桌面端 UI 可以正常使用 |
| 7 | [#35355](https://github.com/openai/codex/issues/35355) | 5评论 | Compaction 可能将中断命令的临时输出提升为已确认任务状态 |
| 8 | [#37325](https://github.com/openai/codex/issues/37325) | 3评论 | 类似问题：checkpoint 文本被错误提升为权威项目状态 |
| 9 | [#35463](https://github.com/openai/codex/issues/35463) | 4评论 | Subagent 在夜间耗尽整周配额，用量统计逻辑存在 bug |
| 10 | [#37247](https://github.com/openai/codex/issues/37247) | **已关闭** | macOS 桌面端泄漏 4800+ 僵尸进程，耗尽进程表导致无法 fork |

---

## 4. 重要 PR 进展

| PR | 状态 | 说明 |
|----|------|------|
| [#37349](https://github.com/openai/codex/pull/37349) | ✅ 已合并 | 在完整文件系统 Bubblewrap 沙箱中挂载最小化 `/dev`，防止设备树泄露 |
| [#37344](https://github.com/openai/codex/pull/37344) | ✅ 已合并 | 修复 subagent MCP 启动状态卡住问题 |
| [#37273](https://github.com/openai/codex/pull/37273) | ✅ 已合并 | 跨采样步骤复用 MCP handlers，避免重复构建 schema |
| [#37279](https://github.com/openai/codex/pull/37279) | ✅ 已合并 | 工具搜索缓存命中时避免克隆不可变元数据，减少开销 |
| [#37347](https://github.com/openai/codex/pull/37347) | ✅ 已合并 | 按 agent 追踪上下文窗口，解决 fork 子 agent 上下文线断裂问题 |
| [#37345](https://github.com/openai/codex/pull/37345) | ✅ 已合并 | 向服务端发送 `x-codex-routing-hint` 请求头，支持模型路由 |
| [#37337](https://github.com/openai/codex/pull/37337) | ✅ 已合并 | OAuth 重新认证后恢复 MCP 服务器连接 |
| [#37352](https://github.com/openai/codex/pull/37352) | ✅ 已合并 | 新增 `default_exec_yield_time_ms` 配置项，默认 30 秒 |
| [#37340](https://github.com/openai/codex/pull/37340) | ✅ 已合并 | 整合 EnvironmentManager 的延迟环境供应 API |
| [#37335](https://github.com/openai/codex/pull/37335) | ✅ 已合并 | 修复内联视图历史重叠后的渲染残留问题 |

---

## 5. 功能需求趋势

- **MCP 生态优化**：社区强烈希望 MCP 服务器进程按项目/工作区复用（#20883），减少启动开销；同时要求修复 MCP 工具排序非确定性（#37351）
- **沙箱与安全性**：Windows 沙箱 WFP 防火墙频繁重启用户体验差（#31556），Bubblewrap `/dev` 挂载加固持续推进
- **Windows 桌面端稳定性**：进程泄漏（#33776）、应用初始化卡死（#33967）、终端面板无法打开（#37104）等问题频发
- **CLI/TUI 体验**：多行状态栏（#21653）、默认 shell 配置（#16579）、Chrome 扩展联动（#26820）等高频需求
- **用量与计费透明**：配额统计异常（#35463）、重置后仍被限流（#37250）引发用户不满

---

## 6. 开发者关注点

| 痛点类别 | 具体问题 |
|----------|----------|
| **进程泄漏** | Windows 端 taskkill/conhost 泄漏（#33776），macOS 端 zombie 进程泄漏（#37247 已关闭，#37236） |
| **认证/会话** | OAuth 切换网络后静默使用 dummy key 导致 401（#37192）；Remote control 产生并行 turn（#34767） |
| **状态一致性** | Compaction 和 checkpoint 机制可能将临时输出提升为确认状态（#35355, #37325），存在数据安全风险 |
| **模型/缓存** | GPT-5.6 prompt cache breakpoint 无法触发（#35300）；模型选择器错误过滤（#19694 已关闭） |
| **性能/资源** | MCP 进程无法跨会话复用，导致内存占用过高（#33531 报告 10.9GB） |
| **GUI 体验** | 文件权限弹窗无响应（#36115）、Chrome 侧边栏高级设置重叠（#37328） |

---

*数据来源: [github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报
**日期：2026-08-07**
**数据来源：** github.com/google-gemini/gemini-cli

---

## 1. 今日速览

过去24小时无新版本发布，但v0.54.2和v0.55.0-preview系列已完成版本提升。社区焦点集中在Agent子代理可靠性（hang/超时问题）、Auto Memory系统Bug修复，以及模型容量耗尽错误分类优化。PR方面，多个核心修复已合入，包括流中断后消息融合问题、思考签名丢失导致的400错误等关键回归修复。

---

## 2. 版本发布

**无新Release。** 近期版本动态：
- **v0.54.2** — 已通过PR #28712发布，包含多个核心修复
- **v0.55.0-preview.2** — 通过PR #28719发布，包含容量耗尽错误分类修复（PR #28716）

---

## 3. 社区热点 Issues

### 🔴 P1 关键 Bug

**1. Subagent recovery 在 MAX_TURNS 时被误报为 GOAL success**
- **Issue #22323** | 作者: matei-anghel | 💬12 | 👍2
- 子代理达到最大回合数后仍报告 `status: "success"`，掩盖了实际的终止原因，严重影响调试和eval。
- [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

**2. Generalist agent 挂起无响应**
- **Issue #21409** | 作者: turmanticant | 💬8 | 👍8
- 高频问题，挂起时间可达一小时以上。禁用子代理可规避，说明Agent调度存在阻塞逻辑缺陷。
- [链接](https://github.com/google-gemini/gemini-cli/issues/21409)

**3. Shell 命令执行完成后卡住 "Waiting input"**
- **Issue #25166** | 作者: rnett | 💬4 | 👍3
- 即使是最简单的CLI命令，执行完成后仍显示"Awaiting user input"，交互体验严重受损。
- [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

**4. 图片附件触发 UNKNOWN_UPSTREAM_ERROR 且会话冻结**
- **Issue #28714** | 作者: nikitatwo404-prog | 💬1 | 👍0
- 2026-08-06新建，直接复现于Antigravity CLI和AionUi，涉及gemini-3.6-flash-high模型，需紧急排查。
- [链接](https://github.com/google-gemini/gemini-cli/issues/28714)

### 🟡 P2 重要问题

**5. Agent 未充分使用 Skills 和 Sub-agents**
- **Issue #21968** | 作者: rnett | 💬6 | 👍0
- 用户反馈Gemini仅在明确指令下才使用自定义Skills，自身判断能力不足，影响自动化工作流。
- [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

**6. Auto Memory 无限重试低信号会话**
- **Issue #26522** | 作者: SandyTao520 | 💬5 | 👍0
- 背景提取器对低信号会话的判断逻辑存在缺陷，导致会话永不清除、反复被唤醒。
- [链接](https://github.com/google-gemini/gemini-cli/issues/26522)

**7. Browser Agent 忽略 settings.json 配置覆盖**
- **Issue #22267** | 作者: hsm207 | 💬3 | 👍0
- 全局/项目级 `settings.json`中的 `maxTurns` 等配置被完全忽略，配置系统存在断裂。
- [链接](https://github.com/google-gemini/gemini-cli/issues/22267)

**8. 工具数 >128 时触发 400 错误**
- **Issue #24246** | 作者: gundermanc | 💬3 | 👍0
- 当可用工具超过128个时直接返回400，缺乏动态工具裁剪逻辑，限制复杂场景使用。
- [链接](https://github.com/google-gemini/gemini-cli/issues/24246)

**9. (Sub)agents 自 v0.33.0 起无需权限即可运行**
- **Issue #22093** | 作者: jetspiking | 💬3 | 👍0
- 关键安全回归：用户配置已禁用Agent模式下，子代理仍被自动启用。
- [链接](https://github.com/google-gemini/gemini-cli/issues/22093)

**10. 临时脚本随机创建于各处目录**
- **Issue #23571** | 作者: galdawave | 💬3 | 👍0
- 模型生成多个编辑脚本但散落不同目录，工作空间清理负担显著。
- [链接](https://github.com/google-gemini/gemini-cli/issues/23571)

---

## 4. 重要 PR 进展

### ✅ 已合入 (CLOSED)

**1. 容量耗尽误分类修复 → 标记为 Terminal Error**
- **PR #28716** | 作者: luisfelipe-alt
- 将模型容量不足和余额不足从可重试错误改为终态错误，触发即时Fallback或降级，避免无意义重试。已随v0.55.0-preview.2发布。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28716)

**2. 修复流中断后新消息被融合进工具响应**
- **PR #28700** | 作者: adamfweidman
- 解决模型"续写"用户输入而非响应的新指令的关键回归，ESC中断场景下行为异常问题。已合入v0.54.1。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28700)

**3. 修复 parallel tool call 中 thoughtSignature 丢失导致400错误**
- **PR #28586** | 作者: Tejas-Raj01
- 修复v0.53.0引入的回归：并行工具调用时 `thoughtSignature` 被意外剥离，导致服务端400。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28586)

**4. 记录流中断时已接收的 usage 数据**
- **PR #28718** | 作者: PranavMishra28
- 修复 `generateContentStream` 在stream abort时usage数据未flush的Bug，确保计量准确性。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28718)

**5. 修复 ghost text 在窄宽度下的无限循环**
- **PR #28641** | 作者: a2105z
- 修复CJK/emoji字符在窄终端宽度下 `getGhostTextLines` 死循环问题（#19985）。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28641)

### 🔄 待合入 (OPEN)

**6. 支持 Gemini 3.6 Flash 和 3.5 Flash-Lite 模型**
- **PR #28673** | 作者: Blackmanx
- 新增两个Flash系列模型的配置定义，包括能力声明（thinking, multimodalToolUse）和Code工具支持。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28673)

**7. 修复VSCode扩展中disposable泄露**
- **PR #28526 / #28580** | 作者: godququ5-code / LHMQ878
- 修复 `activate()` 中括号包裹导致的comma表达式问题，`gemini.diff.accept` 等命令的disposable未正确注册，引发内存泄露（#27790）。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28526) | [链接](https://github.com/google-gemini/gemini-cli/pull/28580)

**8. 限制 SearchText 输出防止上下文溢出**
- **PR #19638** | 作者: Atharva-Kanherkar
- 对grep/ripgrep结果做上限截断，避免广泛搜索返回数千匹配导致context window溢出。
- [链接](https://github.com/google-gemini/gemini-cli/pull/19638)

**9. 改进 Vertex AI 401 认证错误提示**
- **PR #28679** | 作者: SHAI-nikhil-chaudhary
- 当用户使用标准Gemini API Key而非GCP凭证配置Vertex AI时，提供明确错误指引，改善DX。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28679)

**10. 转发终止信号到子进程**
- **PR #28676** | 作者: C0d3N1nja97342
- `relaunchAppInChildProcess` 现转发SIGTERM/SIGHUP等信号，避免 `kill -TERM` 后子进程成为孤儿。
- [链接](https://github.com/google-gemini/gemini-cli/pull/28676)

---

## 5. 功能需求趋势

| 方向 | 关注度 | 关键Issue/PR |
|------|--------|-------------|
| **Agent 可靠性** | 🔥🔥🔥 | #22323, #21409, #22093 — hang、超时、误报问题集中爆发 |
| **Auto Memory 系统优化** | 🔥🔥 | #26522, #26525, #26523, #26516 — 多Issue追踪内存提取的质量、安全和无效patch问题 |
| **新模型支持** | 🔥🔥 | PR #28673 — 3.6 Flash / 3.5 Flash-Lite；Issue #28714 — 图片附件兼容性 |
| **AST 感知工具** | 🔥 | #22745, #22746 — 社区和maintainer均在评估AST-aware文件读取/搜索的价值 |
| **IDE 集成稳定性** | 🔥🔥 | PR #28526/#28580 (disposable泄露)；#24935 (外部编辑器退出后终端buffer损坏) |
| **工具裁剪与上下文管理** | 🔥 | #24246 (>128工具400错误)；PR #19638 (搜索结果截断) |
| **安全性加固** | 🔥 | #22672 (阻止破坏性行为)；#26525 (Auto Memory日志脱敏) |
| **非交互模式** | 🔥 | PR #20536 — headless模式下`/stats`输出支持 |

---

## 6. 开发者关注点

**高频痛点：**

1. **子代理调度不可靠** — 多起Issue（#21409, #22323, #22093）反映Agent在自动调度、终止判断、权限控制方面存在系统性问题，是目前社区最大的体验瓶颈。

2. **配置覆盖失效** — `settings.json`中的参数被忽略（#22267）破坏了用户预期的行为定制能力，影响生产部署信心。

3. **交互式终端状态机异常** — Shell命令卡住（#25166）、vite创建挂起（#22465）、ghost text死循环（PR #28641）等问题表明TUI状态管理存在多处边界Case遗漏。

4. **Memory系统质量** — 连续的4个Issue（#26522/#26525/#26523/#26516）指向Auto Memory的提取准确率、日志安全、无效Patch处理均存在缺陷，是即将重点投入的修复方向。

5. **安全回归感知** — #22093（子代理绕过权限）和 #22672（破坏性行为抑制）反映出开发者对AI执行操作的"可控性"极为敏感，建议在后续版本优先处理。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**日期：2026-08-07**

---

## 1. 今日速览

v1.0.79-6 正式发布，修复了会话历史加载失败导致时间线永久空白的严重问题，以及交互式 UI 中诊断警告异常打印的缺陷。社区近期集中反馈了终端渲染（tmux/滚动）、MCP 进程管理和会话恢复 OOM 等稳定性问题。

---

## 2. 版本发布

### v1.0.79-6
- **修复**：罕见内部延迟不再在交互式 UI 顶部打印诊断警告
- **修复**：会话历史加载失败不再导致时间线永久空白（此前失败被静默丢弃，对话记录全程无日志）

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 摘要 |
|---|------|------|------|
| [#3392](https://github.com/github/copilot-cli/issues/3392) | Bash tool 在 NixOS ≥1.0.49 上崩溃 | 👍7 · 3评论 | NixOS 环境下启动 bash 进程失败，影响所有命令执行 |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | 大会话恢复时 OOM / 单核满载 70 分钟 | 👍1 · 2评论 | v1.0.74 引入的性能回归，内存占用约为 v1.0.73 的 3-4 倍 |
| [#4174](https://github.com/github/copilot-cli/issues/4174) | ACP server 未暴露 token/context 用量 | 👍2 · 3评论 | `--acp` 模式下协议消息中无任何 token 消耗信息，影响成本追踪 |
| [#4313](https://github.com/github/copilot-cli/issues/4313) | 支持鼠标滚轮/PageUp 滚动对话历史 | 👍0 · 4评论 | 用户可通过鼠标或键盘快捷键浏览当前会话内容 |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | Actions GITHUB_TOKEN 下 MCP 策略返回 403 | 👍1 · 1评论 | 无 PAT 的 Actions 集成场景下，非默认 MCP server 全部被阻断 |
| [#4392](https://github.com/github/copilot-cli/issues/4392) | 认证后 MCP 重建遗留孤进程 | 👍0 · 1评论 | stdio MCP server 首次启动进程未被正确回收，每次重启累积僵尸进程 |
| [#4212](https://github.com/github/copilot-cli/issues/4212) | tmux 中提示框和菜单项暗黑不可见 | 👍0 · 2评论 | 深色背景上渲染深色文字，plain iTerm2 正常 |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | MCP 响应中 BigInt 序列化失败 | 👍0 · 2评论 | MCP server 返回大整数时直接抛出 `TypeError`，中断所有任务 |
| [#4374](https://github.com/github/copilot-cli/issues/4374) | `/mcp search` 在 Azure DevOps 仓库中返回 400 | 👍4 · 0评论 | git remote 非 GitHub 时 MCP 注册表策略获取失败 |
| [#4093](https://github.com/github/copilot-cli/issues/4093) | web_search 工具返回幻觉答案 | 👍0 · 1评论 | 检索无结果时仍输出"自信的详细幻觉答案"，未标注无结果 |

---

## 4. 重要 PR 进展

过去 24 小时内无新 PR 更新。

---

## 5. 功能需求趋势

| 方向 | 关注度 | 典型 Issue |
|------|--------|-----------|
| **终端渲染与兼容性** | 🔴 高 | #4311（转录本空白）、#4212（tmux 暗黑）、#4391（Windows codepage 清屏） |
| **MCP 集成稳定性** | 🔴 高 | #3392（NixOS）、#4211（BigInt）、#4392（孤进程）、#4346（CI 403）、#4374（Azure DevOps） |
| **会话恢复与性能** | 🟡 中 | #4251（OOM 回归）、#4282（模型前缀不一致） |
| **权限与交互体验** | 🟡 中 | #4388/#4389（权限模式切换失效）、#4387（Tab 触发 Issues 而非补全）、#4386（权限提示缺少具体规则） |
| **BYOM / 模型管理** | 🟡 中 | #4390（组织模型缺失）、#4376（BYOM 模型切换）、#3053（推理强度错误） |
| **会话历史浏览** | 🟢 低 | #4313（滚动支持） |

---

## 6. 开发者关注点

**高频痛点：**

1. **终端渲染退化**：tmux 环境、Windows codepage、滚动后转录本空白——多环境渲染一致性是近期最集中的反馈。
2. **MCP 生态碎片化**：NixOS 兼容性、Azure DevOps 仓库、BigInt 序列化、认证后进程泄漏，反映出 MCP 子系统的跨平台和跨协议适配尚不成熟。
3. **会话恢复性能回归**：v1.0.74 引入的大会话 OOM 问题直接影响长期使用用户，社区已做 A/B 验证确认回归点。
4. **权限模式切换 bug**：从 auto 切回 interactive 后代理仍静默执行，可能导致意外代码变更，安全风险较高。
5. **CI/CD 集成受阻**：无 PAT 的 Actions 集成方案在 MCP 场景下因 403 无法使用，限制了自动化工作流 adoption。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报
**日期：2026-08-07**

---

## 1. 今日速览

今日最值得关注的是 `StrReplaceFile` 非 UTF-8 文件损坏问题的集中爆发：Issue #2591 报告了原始缺陷，PR #2594 和 #2595 在 24 小时内相继提交两种修复方案（保留字节 vs 拒绝编辑），展现活跃社区响应速度。此外，Issue #1283 跨会话 Memory System 功能请求持续积累关注度（20 条评论），反映社区对长期上下文记忆的强烈需求。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论 | 👍 | 热度说明 |
|---|------|------|------|-----|----------|
| #1283 | Memory System：跨会话持久化上下文 | OPEN | 20 | 0 | 长期热门需求，用户渴望 CLI 记住项目模式和个人偏好，避免重复输入背景信息 |
| #2591 | StrReplaceFile 损坏文件中的不可解码字节 | OPEN | 3 | 0 | 新报 Bug，影响所有含非 UTF-8 内容的二进制/编码混合格式文件编辑 |
| #2474 | CLI 界面持续抖动、意外重渲染整个对话 | OPEN | 2 | 2 | 体验类 Bug，Linux 环境下高频反馈，直接影响日常使用流畅度 |
| #2317 | VSCode 插件 Plan 模式文件路径不可点击 | OPEN | 4 | 1 | 插件可用性 Bug，阻断 Plan 模式下快速跳转源码的工作流 |
| #2147 | Lazy-load MCP 工具 schema 到上下文 | OPEN | 1 | 1 | 性能优化诉求，多 MCP Server 场景下显著消耗 Context 预算 |
| #2593 | VSCode 插件面板快捷切换 auto/yolo/manual 模式 | OPEN | 0 | 0 | 新功能请求，反映用户对模式切换便捷性的直接诉求 |
| #621 | 首次 WriteFile 总是报 Invalid path 错误 | **CLOSED** | 2 | 0 | 已解决，早期版本路径处理 Bug，供参考 |
| #821 | 缺失授权检查 + 依赖安全漏洞 | **CLOSED** | 0 | 0 | 安全审计发现，已关闭表明问题得到处理 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| #2595 | fix(StrReplaceFile): refuse to edit files that are not valid UTF-8 | OPEN | **保守方案**：检测文件含非法 UTF-8 字节时直接拒绝编辑，避免静默数据损坏。与 #2591 关联。 |
| #2594 | fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits | OPEN | **积极方案**：直接在原始 buffer 上进行 byte-level 替换，保留非 UTF-8 区域不变。与 #2591 关联。 |
| #2255 | feat(shell): support Shift+Enter for inserting newlines | **CLOSED** | 已合并。为交互式 Prompt 新增 Shift+Enter 换行快捷键，与已有 Ctrl-J / Alt-Enter 形成完整组合。 |

> **注**：#2594 和 #2595 为同一 Bug 的两种不同修复思路，目前均处于 OPEN 状态，社区或维护者可能需评估取舍。

---

## 5. 功能需求趋势

通过对当前 Issues 的分析，社区需求呈现以下趋势：

- **🧠 上下文与记忆能力**：Issue #1283 是纯功能请求中评论最多的条目，跨会话 Memory System 是社区最明确的长期需求，反映出用户希望 CLI 具备"记忆"能力以形成个性化工作流。
- **⚡ 性能与资源效率**：Issue #2147 聚焦 MCP 工具 schema 的 Context 占用问题，随着 MCP 生态扩展，Lazy-load 机制成为性能优化的关键方向。
- **🖥️ VSCode 插件体验**：#2317（路径不可点击）和 #2593（模式切换快捷入口）表明插件端仍是高频使用场景，交互细节的打磨需求强烈。
- **🔧 文件编辑可靠性**：#2591 暴露了编辑器在处理混合编码文件时的缺陷，文件操作的正确性是开发者信任 CLI 的基础。
- **🔒 安全性**：Issue #821（已关闭）标志社区安全审计已在进行，未来安全相关 Issue 预计会增加。

---

## 6. 开发者关注点

基于 Issue 反馈，当前开发者群体最集中的痛点如下：

1. **文件编码健壮性**：`StrReplaceFile` 对非 UTF-8 文件的处理缺陷是近期最大风险点，直接影响包含二进制数据或特殊编码文件的安全编辑，两个并发 PR 说明社区对此高度敏感。

2. **交互稳定性**：Issue #2474 描述的 UI 抖动/重渲染问题属于高频干扰型 Bug，虽然不影响功能但严重影响使用体验，Linux 平台用户反馈集中。

3. **MCP 上下文膨胀**：随着 MCP Server 数量增长，全部 schema 注入 Context 导致有效上下文被快速消耗，Lazy-load 方案（#2147）是已识别的优化方向。

4. **跨会话智能**：Memory System（#1283）虽为远期需求，但 20 条评论表明用户期望 CLI 逐步具备项目级记忆，这是提升长期使用价值的核心功能。

5. **插件可用性细节**：VSCode 插件中 Plan 模式路径不可点击（#2317）等功能性断点，说明插件从可用到好用的过渡阶段仍有较多细节待打磨。

---

*数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-08-07

## 1. 今日速览

过去24小时，**OpenCode Go/Zen 订阅服务出现大规模上游提供商拦截事件**，多个 issue 报告付费模型统一返回 `401 Request blocked by upstream provider`，社区关注度极高。同时，TUI 交互改进（会话提示队列、权限提示、模型选择作用域）和长上下文模型支持是近期开发重点。

## 2. 版本发布

> 过去24小时无新 Release。

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 热度 | 说明 |
|---|-------|------|------|
| #38257 | [Bug] OpenCode Go: return 401 Request blocked by upstream provider | 👍 11 / 44 评论 | **最严重服务故障**：Go 订阅用户所有模型调用被上游拦截，`/v1/models` 正常但 `/chat/completions` 返回 401，影响范围广泛。 |
| #38218 | bug(opencode-go): All subscription models return "Request blocked..." | 👍 13 / 31 评论 | 与 #38257 类似，Go 订阅全部模型不可用，社区反应强烈。 |
| #38195 | 401 AuthError: Request blocked by upstream provider | 👍 17 / 24 评论 | 跨平台复现（Windows/Linux + Desktop/Hermes），确认非客户端问题。 |
| #6152 | [FEATURE] Session context usage (类似 /context) | 👍 129 / 22 评论 | **最热功能需求**：用户希望查看当前会话上下文窗口使用情况，便于管理长对话。 |
| #1168 | Feature Request: Make Links Clickable | 👍 119 / 11 评论 | **高呼声 UX 改进**：期望 Ctrl+左键点击链接直接打开浏览器。 |
| #39875 | [FEATURE] Revert privacy wording changes + telemetry | 👍 44 / 6 评论 | Go 订阅用户对隐私政策变更和遥测数据收集的担忧，引发社区讨论。 |
| #31932 | [FEATURE] Cross-project session list/picker | 👍 6 / 15 评论 | 跨项目会话管理需求，当前 `/sessions` 仅限当前项目。 |
| #32157 | [2.0] Configurable mid-run prompt delivery | 👍 67 / 5 评论 | 高级用户希望区分 `queue`/`steer`/`break` 模式，提升多提示符工作流控制。 |
| #40234 | 订阅 opencode go 之后套餐没有生效 | 👍 0 / 13 评论 | 订阅成功后仍提示需要支付，与上游拦截事件时间线吻合。 |
| #40958 | [BUG] DeepSeek V4 Flash Free 上下文显示 200K 而非 1M | 👍 1 / 3 评论 | 模型 metadata 配置错误导致长上下文能力被错误限制。 |

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| #40971 | feat(tui): expose prompt action commands | Open | 向 TUI 插件暴露稳定的 prompt 操作命令（`form.option.previous` 等）。 |
| #40929 | feat(core): bound tool output | Open | 对工具输出设置行数和字节数上限，保留完整截断文本于管理文件中，7天自动清理。 |
| #40962 | refactor(core): simplify file tools to lexical paths | ✅ Closed | 简化 V2 文件工具以匹配 V1 行为：.lexical 解析路径、保留符号链接状态、容错处理非法 UTF-8。 |
| #40922 | feat(tui): queue prompts with option enter | Open | Option+Enter / Alt+Enter 将提示加入队列，Enter 直接 steer 当前响应，提升多任务工作流效率。 |
| #40969 | fix(llm): treat empty tool call identity as absent | Open | 修复 Alibaba DashScope 等 provider 发送空字符串 `id` 时导致的流式工具调用解析失败。 |
| #40880 | fix(core): default custom agents to primary | ✅ Closed | 自定义 agent 省略 `mode` 时默认使用 `primary`，统一行为。 |
| #40943 | fix(ai): preserve Responses item IDs | Open | 保留 reasoning/assistant/function 的 item ID，实现完整的 provider 端输出回放。 |
| #40960 | fix(tui): dismiss stale permission prompts | ✅ Closed | 服务端请求消失时自动清除过期权限提示，避免 TUI 卡住。 |
| #40913 | fix(tui): keep model selection session scoped | ✅ Closed | 模型选择改为会话级别作用域，切换标签页时各会话保留独立模型设置。 |
| #40954 | fix(core): reload changed skill sources | Open | 支持 skill 目录热重载，无需重启服务即可感知新增/修改/删除的 skill。 |

## 5. 功能需求趋势

- **上下文管理**：#6152（129👍）和 #32157 显示用户亟需更精细的会话控制——包括上下文窗口可视化、多提示符调度策略。
- **UX 易用性**：#1168（119👍）和 #31932 反映跨项目导航、链接交互等基础体验改进的强烈需求。
- **长上下文模型支持**：#40958 指出 DeepSeek V4 Flash 等 1M 上下文模型被错误限制，需修复 metadata 配置。
- **隐私与信任**：#39875（44👍）表明订阅用户对数据收集和隐私政策变更敏感，需要透明度。
- **插件/扩展生态**：多个 PR 正在完善 TUI 插件 API（prompt 命令暴露、skill 热重载），为第三方扩展打基础。

## 6. 开发者关注点

| 痛点 | 说明 |
|------|------|
| **付费服务稳定性** | 上游提供商大规模拦截（401）直接影响 Go/Zen 订阅用户体验，是当下最紧急问题。 |
| **模型配置错误** | 部分模型（如 DeepSeek V4 Flash）上下文长度 metadata 与实际不符，影响用户预期。 |
| **跨项目工作流割裂** | 当前会话隔离于项目内，多仓库场景下缺乏统一导航。 |
| **TUI 交互精细化** | 权限提示残留、模型选择全局污染、多提示队列控制等体验问题持续被反馈。 |
| **Windows 兼容性** | v1.18.14 在 Windows 10 + Node.js 26.7 存在启动问题（#40957）。 |
| **Linux 稳定性** | Debian 13 XFCE/X11 下 TUI 偶发冻结，仅 `kill -9` 可恢复（#35494）。 |

---

*数据来源: github.com/anomalyco/opencode | 生成时间: 2026-08-07*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-08-07

## 1. 今日速览

Pi v0.84.0 正式发布，核心亮点是引入**全屏 TUI 模式**，支持运行时切换、独立滚动记录和可拖拽滚动条。社区当前最关注的问题是 auto-compaction 在上下文溢出后不触发（#6879），以及 Windows 平台的稳定性讨论（#7547）。

---

## 2. 版本发布

### v0.84.0 — 全屏 TUI 模式
- 支持运行时在普通与全屏模式间切换
- 编辑器与页脚保持固定，转录记录可独立滚动
- 新增可拖拽滚动条
- 参考：[UI & Display 文档](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settings.md)

---

## 3. 社区热点 Issues

| # | 标题 | 评论 | 状态 | 亮点 |
|---|------|------|------|------|
| #7547 | Windows 上使用 Pi 的问题汇总 | 22 | OPEN | 社区最活跃的 Windows 兼容性讨论，收集各环境痛点 |
| #6879 | auto-compaction 在上下文超 100% 后不触发 | 12 | OPEN | 🔥 15 赞，agent 长时间运行导致 compaction 滞后，直到 API 拒绝请求才触发 |
| #7128 | 新默认 PI_* 指南过度鼓励 bash 调用 | 10 | OPEN | 5 赞，系统 prompt 变更导致 agent 频繁执行不必要的 env-inspection |
| #4990 | Edit 工具验证失败 | 8 | CLOSED | 编辑器工具校验异常，已修复 |
| #5323 | Vertex + GCP metadata server 支持 | 7 | OPEN | 改进 Vertex 认证检测逻辑，当前为同步 `existsSync` |
| #6662 | TUI 鼠标选择复制后自动滚动到底部 | 7 | CLOSED | 全屏 TUI 交互 bug，已修复 |
| #7413 | GitHub Copilot GHE 账户 Compaction 失败 | 7 | CLOSED | "unknown stamp" 错误，enterprise 用户 compaction 不可用 |
| #7702 | DeepSeek 模型 reasoning_content 未透传 | 4 | OPEN | opencode zen gateway 多轮对话报 400 |
| #7720 | 允许全屏 TUI 禁用选择复制 | 3 | OPEN | 频繁高亮终端的用户希望关闭自动复制行为 |
| #7736 | 终端宽度超限导致 TUI 崩溃 | 3 | CLOSED | 渲染行超过终端宽度时抛出 uncaughtException，已修复 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| #7745 | 保留 Gemini thought signatures | CLOSED | 修复 OpenAI completions 模式丢失 `thought_signature` 的问题 |
| #7742 | Ollama Cloud 支持 | OPEN | 新增 `ollama-cloud` provider，支持 `OLLAMA_API_KEY` |
| #7729 | 对齐快捷键行为文档 | CLOSED | 统一 `keybindings.md` 与 `/hotkeys`，补充 `super` 修饰符说明 |
| #7733 | 修复多击文本选择 | CLOSED | 修复双击选词包含首空格、选空白符组行为异常的问题 |
| #7722 | 主题覆盖 CLI 选项 | OPEN | 新增 `--use-theme`，支持 `dark` 或 `dayowl/nightowl` 格式 |
| #6216 | Amazon Bedrock Mantle Provider | OPEN | 基于 OpenAI Node SDK 添加 Bedrock Mantle 支持 |
| #7727 | SQLite 查询优化 | OPEN | 优化 session 存储查询，引入覆盖索引提升性能 |
| #7710 | 恢复挂起的 harness 操作 | OPEN | 实现从 session 重新加载并恢复 agent harness |
| #7715 | 允许阻止的工具调用终止 Agent | CLOSED | `beforeToolCall` 新增 `terminate` 提示，控制 agent 回合结束 |
| #7717 | 拒绝活跃运行中的 reset | CLOSED | 修复 `Agent.reset()` 在运行中清除 transcript 但不清理活跃 run 的 bug |

---

## 5. 功能需求趋势

- **TUI 交互体验**：全屏模式细节打磨（滚动、选择、主题、快捷键）是当前高频需求
- **Provider / 模型支持**：Ollama Cloud、Bedrock Mantle、Qwen Token Plan、DeepSeek reasoning_content 透传
- **Compaction 可靠性**：上下文溢出后的自动压缩行为是稳定性关键
- **Session 管理**：挂起恢复、reset 安全性、SessionManager.reload() 扩展能力
- **Windows 生态**：持续收集 Windows 兼容性问题和最佳实践

---

## 6. 开发者关注点

1. **Windows 兼容性** — #7547 聚集了大量 Windows 用户反馈，是跨平台稳定性的重点
2. **Compaction 时机** — #6879 指出 compaction 应每轮 agent turn 后检查，而非等到 API 拒绝
3. **系统 Prompt 变更影响** — #7128 提醒社区对默认 prompt 改变更需审慎，避免行为偏移
4. **TUI 边界处理** — #7736、#7737、#7744 连续报告渲染/Tokenizer 崩溃，提示全屏 TUI 需加强输入校验
5. **多轮对话状态一致性** — #7703、#7717 涉及 reset 和 run 状态管理，影响 extension 开发体验
6. **Terminal 兼容性** — #7321（bracketed paste）和 #7691（SSH 登录重定向）反映终端差异仍是痛点

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 | 2026-08-07

## 1. 今日速览
Qwen Code 今日发布 `v0.21.7` 正式版，核心突破包括移除 Goals 任务的 50 轮对话上限，并原生支持 Kitty 等终端的内联图片渲染。社区近期高度聚焦于安全权限模型的绕过漏洞修复、CLI 多终端环境下的渲染稳定性优化，以及跨云厂商的压缩缓存共享落地。

## 2. 版本发布
- **v0.21.7**：移除 Goals 的 50 轮限制，支持任务跨轮续接；CLI 新增 Kitty/iTerm2/WezTerm/Ghostty/Warp 内联图片渲染；CI 启用 Windows Merge Queue 测试；同步发布 `live-host-v0.1.0

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报 — 2026-08-07

## 1. 今日速览

今日无新版本发布，v0.9.4 发布列车（#5135）已合并。社区活跃度集中在两个方向：一是 command-boundary 重构进入 Layer 5.3（#5255），二是 Runtime API 补全一批新端点（内存、目标循环、verifier 票据等）。此外，多 API Key 保存（#5250）和未知模型上下文回退（#5244）两个新功能请求持续开放，社区关注度高。

---

## 2. 版本发布

**无新版本发布。** v0.9.4 发布列车 #5135 已于 2026-08-06 关闭，当前处于整合验证阶段。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 关注理由 |
|---|------|------|----------|
| #5250 | 多 API Key 保存需求 | OPEN | 多模型用户高频痛点，需切换 Provider 时手动重新输入 Key，影响多模型工作流 |
| #5244 | 未知模型 ID 静默降级 128K | OPEN | 1M 上下文模型被静默截断到 128K，无提示直接降级，严重误导用户体验 |
| #5253 | subagent 嵌套 max_depth 预算溢出 | OPEN | 子 agent 可通过显式 max_depth 突破根会话深度限制，属子 agent 编排层面的潜在 bug |
| #4978 | Anthropic API HTTP 400 错误 | CLOSED | OpenModel 兼容层频繁报错 `'type' must be in [...]`，偶发重试可过，影响稳定性 |
| #4828 | macOS 水下 shell 命令失效 | CLOSED | v0.9.0 引入后 `open`/`osascript`/`launchctl` 返回 exit code -54，macOS 用户高影响 bug |
| #5223 | TUI 鼠标滚轮路由到输入历史 | CLOSED | 长内容溢出时滚轮滚动的是输入历史而非内容区，macOS + iTerm2 用户反馈集中 |
| #5246 | 构建 LTO 全量重编译问题 | CLOSED | fat LTO 应用于每次 pre-push 构建，开发者体验差，已提出拆分 shipping profile 方案 |
| #5245 | git commit 强制全量重建 | CLOSED | 每次本地 commit 触发 codewhale-tui 全量重建，HEAD sha stamp 与编译耦合过紧 |
| #5178 | web 管理端 digest post 空成功 | CLOSED | `ok:true` 但实际未发布，草稿永久留在 Pending，属 web admin 功能缺陷 |
| #5040 | Workflow 状态栏位置调整 | CLOSED | v0.9.4 Workflow 状态常驻 composer 区占用输入空间，需迁移至顶部状态栏 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| #5255 | Layer 5.3: Palette/Completion/Filtering | OPEN | command-boundary 重构第五层，验证命令调色板与斜杠补全的集成，承接 #4992 Layer 5.2 |
| #5229 | Windows 中文新手指南 | CLOSED | 新增 `docs/WINDOWS_BEGINNER.zh-CN.md`，覆盖安装、配置、模型切换、权限及常见问题，含 4 张真实截图 |
| #5254 | FreeBSD 构建修复 | OPEN | rquickjs 在 FreeBSD 平台无 binding，添加 fallback 编译路径以支持 FreeBSD |
| #5077 | 渐进式披露上下文 | CLOSED | 优化 AGENTS.md / CLAUDE.md 加载策略，ambient skills 块限制 2400 字符，首次 turn 通过 `load_skill list` 懒加载 |
| #5242 | subagent 中断恢复 | CLOSED | `agents/followup` 现支持从 checkpoint 恢复 `interrupted_continuable` 子 agent，解决长任务中断后需重派发的痛点 |
| #5240 | Bash wait 耗时真实展示 | CLOSED | `duration_ms` 现嵌入 tool content 而非仅 metadata，模型可感知实际等待时长，减少忙轮询 |
| #5238 | MCP Registry 发现与工具选择 | CLOSED | 新增 MCP Registry 优先工具选择策略，模型在调用 exec_shell 前可先查询零环境 stdio server |
| #5234 | 修复鼠标捕获时滚轮问题 | CLOSED | 修复 #5223：`recover_terminal_modes()` 同时启用鼠标捕获和 xterm alternate-scroll 导致输入焦点错位 |
| #5131 | Runtime API 内存端点 | OPEN | 新增 `/v1/memory` 路由组，支持内存状态检视与生命周期控制，需 `require_runtime_token` 鉴权 |
| #5133 | Runtime API 目标循环状态 | OPEN | 新增 `/v1/threads/{id}/goal` 端点，暴露持久化目标循环状态与完成控制，供 managed clients 驱动生命周期 |

---

## 5. 功能需求趋势

从 Issues 和 PR 提炼出以下社区核心关注方向：

| 方向 | 热点 |
|------|------|
| **多 Provider / 多 Key 支持** | #5250 多 API Key 保存，当前仅支持单 Key 覆盖写入 |
| **子 Agent 编排可靠性** | #5253 嵌套深度预算溢出、#5242 中断恢复、#5035 并行扇出失败静默 |
| **Runtime API 完善** | #5131/#5132/#5133/#5130 集中补全内存、目标、verifier、MCP Server 等管理端点 |
| **构建与开发体验** | #5246/#5245 拆分 shipping profile、解耦 HEAD sha 与编译，减少 contributor 构建成本 |
| **模型兼容性** | #5244 未知模型 ID 静默降级、#4978 Anthropic 兼容层 400 错误 |
| **跨平台支持** | #5254 FreeBSD 构建、#4828 macOS underwater shell 兼容 |

---

## 6. 开发者关注点

- **多 Key 管理**：深度使用多模型（DeepSeek + GLM 等）的用户反复遇到每次切换模型需重新获取 Key 的问题，呼声强烈。
- **构建性能**：fat LTO 和 HEAD sha stamp 耦合导致每次 commit 全量重建，对高频 contributor 和 CI agent 影响显著。
- **子 Agent 可观测性**：中断恢复、嵌套深度预算、并行失败静默等 bug 暴露了 subagent 编排层在可靠性和可观测性上的不足。
- **API 兼容稳定性**：OpenModel 等 Anthropic 兼容 Provider 的 400 错误偶发且无固定规律，调试困难。
- **TUI 交互细节**：滚轮路由、`<turn_meta>` 块显示、Workflow 状态栏占用输入区等问题虽小但高频影响日常使用体验。

---

*数据来源：github.com/Hmbown/DeepSeek-TUI | 报告生成时间：2026-08-07*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*