# AI CLI 工具社区动态日报 2026-08-03

> 生成时间: 2026-08-03 01:51 UTC | 覆盖工具: 9 个

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
**日期：2026-08-03 | 分析师：Agnes**

---

## 1. 生态全景

2026年8月，AI CLI工具生态呈现"头部产品趋稳、新兴项目冲刺发布"的格局。Claude Code、OpenAI Codex、Gemini CLI等第一梯队已进入稳定性打磨期，社区反馈集中于跨平台兼容性与Agent可靠性；DeepSeek TUI v0.9.4进入发布冲刺阶段，Qwen Code持续推出夜间构建。工具竞争从功能堆叠转向**多Agent协作可靠性**、**跨设备工作流连续性**和**终端生态适配**三大核心战场，插件系统与MCP协议集成成为差异化竞争的关键入口。

---

## 2. 各工具活跃度对比

| 工具 | Issues（24h） | PR（24h） | Release | 最新稳定版本 |
|------|-------------|----------|---------|------------|
| **Gemini CLI** | ~50 | ~50 | ✅ 夜间构建 | v0.55.0-nightly |
| **DeepSeek TUI** | ~50 | ~20 | ❌ 无 | v0.9.4冲刺中 |
| **Qwen Code** | ~10 | ~10 | ✅ 夜间构建 | v0.21.3-nightly |
| **OpenCode** | ~15 | ~10 | ❌ 无 | 无更新 |
| **Pi** | ~10 | ~10 | ❌ 无 | 无更新 |
| **Claude Code** | ~10 | 3 | ❌ 无 | v2.1.220 |
| **OpenAI Codex** | ~15 | 6 | ❌ 无 | 26.721.x |
| **Copilot CLI** | 13 | 0 | ❌ 无 | 无更新 |

> 注：Gemini CLI与DeepSeek TUI采用激进夜间构建策略，日更新量显著领先；Claude Code与Copilot CLI处于功能稳定期，以Bug修复为主。

---

## 3. 共同关注的功能方向

### 3.1 多Agent协作可靠性
| 工具 | 具体诉求 |
|------|---------|
| **Gemini CLI** | Subagent挂起、状态误报（#21409、#22323）、Browser Agent在Wayland下失败 |
| **DeepSeek TUI** | Agent spawn路由冲突（#5099）、Fleet config静默覆盖（#5098）、多Agent会话卡死 |
| **Kimi Code** | Swarm批次中途失败导致工作区断裂（#2578） |
| **Qwen Code** | 多工作空间守护进程资源管控（#8051） |

### 3.2 跨平台稳定性与终端适配
| 工具 | 具体诉求 |
|------|---------|
| **Claude Code** | Linux CRLF换行符Bug（#2805）、Windows BSOD（#32870） |
| **OpenAI Codex** | Windows性能/权限/WSL兼容问题集中爆发（#23198、#10090、#35119）、Linux桌面应用呼声最高（#11023，906赞） |
| **Copilot CLI** | WSL2快捷键映射异常（#4328）、tmux主题渲染（#4292） |
| **Pi** | WezTerm/iTerm2图片渲染、Termux多行粘贴失效（#7321） |

### 3.3 会话管理与持久化
| 工具 | 具体诉求 |
|------|---------|
| **Claude Code** | Cowork全局指令保存后静默回退（#40175） |
| **Copilot CLI** | Autopilot状态恢复失败（#4329）、暂存Prompt丢失（#4334） |
| **Qwen Code** | 会话自动删除Bug（#8400）、断点恢复状态管理 |
| **Kimi Code** | 跨会话记忆系统（#1283）、远程续接会话（#1282） |
| **DeepSeek TUI** | 侧边栏会话面板与自动恢复（#2934） |

### 3.4 Token/成本优化与可观测性
| 工具 | 具体诉求 |
|------|---------|
| **OpenAI Codex** | 后台轮询浪费Token（#13733）、内存占用27GB（#34863） |
| **Gemini CLI** | AST感知工具减少无效轮次（#22745）、Auto Memory去重（#26522） |
| **Qwen Code** | 工具输出预算与生命周期管理（#7306） |
| **OpenCode** | SQLite WAL无限增长、临时文件泄漏（#37495、#39876） |

---

## 4. 差异化定位分析

| 工具 | 技术路线 | 目标用户 | 功能侧重 |
|------|---------|---------|---------|
| **Claude Code** | 强推理模型驱动（Opus 5）+ 插件Hook系统 | 专业开发者、复杂编码任务 | 高思考模式、Cowork协作、多Agent可视化 |
| **OpenAI Codex** | 多模型支持（GPT-5.x系列）+ MCP深度集成 | 企业级用户、VS Code生态 | IDE插件、Desktop应用、远程协作 |
| **Gemini CLI** | 子Agent架构 + A2A协议 | 追求自治性的开发者 | Agent自主规划、AST感知工具、组件级评估 |
| **Qwen Code** | 多工作空间守护进程 + ACP协议 | 中国开发者、Java/Maven场景 | `/review`命令增强、桌面客户端、邮件通道 |
| **DeepSeek TUI** | Provider中立架构 + Fleet配置系统 | 多模型切换用户、技术爱好者 | 跨Provider Agent路由、离线测试、大上下文处理 |
| **Copilot CLI** | GitHub生态深度集成 + Autopilot模式 | GitHub用户、IDE用户 | ACP协议适配、会话状态管理、模型兼容性 |
| **Pi** | 可插拔Session存储 + 多提供商支持 | 个人开发者、隐私敏感用户 | 本地优先、compaction优化、终端渲染兼容 |
| **Kimi Code** | 跨设备协同 + 多Agent编排 | 移动端/远程办公用户 | 远程续接、跨会话记忆、Swarm容错 |
| **OpenCode** | 插件扩展 + request-scope钩子 | 高级用户、自定义工作流 | 插件控制、语音输入、MCP信任配置 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃度（快速迭代期）
| 工具 | 特征 | 成熟度判断 |
|------|------|-----------|
| **Gemini CLI** | 日更夜间构建、50+ PR/Issue | 功能快速成型，Agent稳定性为当前瓶颈 |
| **DeepSeek TUI** | v0.9.4冲刺、50+ Issue | 发布临界点，多Agent可靠性为最后挑战 |
| **Qwen Code** |  nightly构建、PR密集 | 功能迭代快，桌面端体验待完善 |

### ⚡ 稳定期（成熟产品）
| 工具 | 特征 | 成熟度判断 |
|------|------|-----------|
| **Claude Code** | 无版本更新、以Bug修复为主 | 核心功能成熟，跨平台适配为优化重点 |
| **OpenAI Codex** | 无版本更新、Windows问题集中 | 桌面端稳定性待突破，Linux支持为最大缺口 |
| **Copilot CLI** | 无版本更新、Issue以兼容性问题为主 | 产品成熟，与GitHub生态深度绑定 |

### 🌱 成长期（特色产品）
| 工具 | 特征 | 成熟度判断 |
|------|------|-----------|
| **Pi** | 夜间构建、compaction为核心痛点 | 架构设计独特，终端兼容需持续打磨 |
| **OpenCode** | 功能PR多、资源泄漏问题突出 | 扩展能力强，运行时性能待优化 |
| **Kimi Code** | Issue少但诉求明确 | 早期产品，工作流连续性为差异化方向 |

---

## 6. 值得关注的趋势信号

### 6.1 多Agent协作从"可用"走向"可靠"
**信号**：Gemini CLI的Subagent挂起（#21409）、DeepSeek TUI的Fleet配置冲突（#5098/#5099）、Kimi Code的Swarm容错（#2578）均指向同一问题——多Agent系统的**状态一致性**和**错误恢复**机制尚不成熟。

**参考价值**：开发者在选择工具时，应关注其在复杂工作流中的Agent可靠性，而非仅看单次任务执行能力。建议优先选择有明确错误恢复机制和可观测性的产品。

---

### 6.2 跨平台适配成为新竞争维度
**信号**：OpenAI Codex的Linux桌面需求以906赞遥遥领先（#11023），Claude Code的Linux CRLF问题（#2805）、Windows BSOD（#32870）持续存在，Pi的WezTerm/Kitty终端适配问题频发。

**参考价值**：企业用户需根据目标部署平台（Linux服务器、Windows桌面、macOS开发机）选择对应成熟度高的工具。Linux服务端用户应关注Qwen Code和DeepSeek TUI的守护进程架构。

---

### 6.3 会话持久化与跨设备协同成为刚需
**信号**：Kimi Code的远程续接（#1282）和跨会话记忆（#1283）获得最高社区热度，DeepSeek TUI的侧边栏会话面板（#2934）为长期痛点，Copilot CLI的Autopilot状态丢失（#4329）影响工作流连续性。

**参考价值**：移动办公和分布式团队协作场景下，会话持久化能力将成为用户选择的关键因素。建议关注支持跨设备续接和上下文记忆的工具。

---

### 6.4 插件系统与MCP协议集成加速
**信号**：Claude Code的Hook文档完善（#83374）、OpenCode的per-MCP-server信任配置（#40125）、Qwen Code的MCP外部上下文（#7585）均指向插件生态的系统性建设。

**参考价值**：插件能力和MCP协议支持将决定工具的扩展天花板。开发者应优先选择插件API成熟、MCP生态丰富的产品，避免被供应商锁定。

---

### 6.5 Token消耗透明度与成本优化受重视
**信号**：OpenAI Codex的轮询浪费Token（#13733）、Gemini CLI的AST感知工具减少无效轮次（#22745）、DeepSeek TUI的缓存命中率问题（#1732）均反映开发者对隐性成本的敏感。

**参考价值**：高频使用场景下，工具的Token效率和成本透明度直接影响使用决策。建议选择提供详细消耗统计和可配置轮询策略的产品。

---

## 总结

2026年8月的AI CLI工具生态已进入**稳定性与可用性**并重的阶段。第一梯队（Claude Code、OpenAI Codex、Gemini CLI）在核心功能上趋于成熟，竞争焦点转向多平台适配和Agent可靠性；新兴产品（DeepSeek TUI、Qwen Code）通过激进迭代和功能创新抢占细分市场。对开发者而言，工具选型应基于**目标平台**、**多Agent需求**、**会话持久化要求**和**扩展生态**四个维度综合评估，而非单纯追求功能数量。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-08-03**

---

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能概述 | 社区关注点 | 状态 |
|------|-----------|---------|-----------|------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` 评估脚本召回率始终为 0% 的修复 | 描述优化循环因评估噪声失效，影响所有 Skill 作者；10+ 独立复现 | OPEN |
| 2 | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` 触发检测缺陷（Issue 跟进） | 多个 PR (#1298, #1323, #1367) 围绕此问题，核心开发者响应活跃 | OPEN |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` — AI 生成文档排版质量管控 | 修复 AI 文档常见排版缺陷（孤行、寡行、编号错位），实用性强 | OPEN |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` 元 Skills | 为 Skill 生态提供质量与安全审计工具，推动 Skill 规范化 | OPEN |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` — 全栈测试方法论 Skill | 涵盖测试哲学、单元测试、React 组件测试，覆盖完整测试栈 | OPEN |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` — 复古像素游戏开发 Skill | 结合 MCP 服务器支持 Pyxel 引擎，独特细分场景 | OPEN |
| 7 | [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` — 机械验证 + 四维推理质量门 | 交付前自动审核 AI 输出，通用性强，可跨项目/技术栈使用 | OPEN |
| 8 | [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` — 色彩专业领域 Skill | 覆盖 ISCC-NBS、Munsell、OKLCH 等色彩系统，填补色彩工程空白 | OPEN |

---

## 2. 社区需求趋势

从 Issues 中提炼的社区核心诉求：

| 需求方向 | 代表 Issue | 关注度 |
|---------|-----------|--------|
| **Skill 治理与安全性** | [#492](https://github.com/anthropics/skills/issues/492) — 社区 Skill 冒用 `anthropic/` 命名空间引发信任边界风险 | ⭐⭐⭐⭐⭐ (43 条评论) |
| **组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) — 企内部署 Skill 库，避免手工分发 | ⭐⭐⭐⭐⭐ (16 条评论, 8 👍) |
| **长会话上下文管理** | [#1329](https://github.com/anthropics/skills/issues/1329) — `compact-memory` 符号化紧凑状态存储 | ⭐⭐⭐⭐ (9 条评论) |
| **Skill 构建最佳实践** | [#202](https://github.com/anthropics/skills/issues/202) — `skill-creator` 需重写为可操作指令而非文档 | ⭐⭐⭐⭐ (已关闭) |
| **Agent 治理与合规** | [#412](https://github.com/anthropics/skills/issues/412) — 安全审计、信任评分、策略执行 | ⭐⭐⭐ (已关闭) |
| **上下文窗口优化** | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` Skill 单次调用注入 ~156k tokens | ⭐⭐⭐ |
| **跨平台兼容** | [#1061](https://github.com/anthropics/skills/issues/1061) — Windows 下 skill-creator 脚本兼容性 | ⭐⭐⭐ |

**趋势总结**：社区最活跃的需求从"功能型 Skill"向"治理型/基础设施型 Skill"演进，安全、共享、上下文管理成为三大核心主题。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、修复关键，具备较高合并概率：

| PR | 功能 | 潜力评估 | 关键理由 |
|----|------|---------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 召回率恒为 0% | ⭐⭐⭐⭐⭐ | 阻塞 Skill 作者优化循环，10+ 独立复现，维护者已关注 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | 修复触发检测遗漏真实 Skill 名称 | ⭐⭐⭐⭐ | 与 #556 同一根因，直接修复描述优化链 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows subprocess `PATHEXT` 兼容 | ⭐⭐⭐⭐ | 1 行修复，覆盖 Windows 用户核心痛点 |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF Skill 大小写敏感修复 | ⭐⭐⭐ | 8 处文件名大小写不匹配导致 Linux/Mac 失效 |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX 追踪变更 ID 冲突修复 | ⭐⭐⭐ | 防止文档损坏，OOXML 规范层面修复 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` — 规划产物生命周期管理 | ⭐⭐⭐⭐ | 解决规划产物累积问题，有明确 Issue (#1417) 支持 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：从"开发单个 Skill"转向"治理整个 Skill 生态"——社区渴望官方的安全审计机制、组织级共享能力、以及自动化的质量评估工具，而非更多独立功能型 Skill。**

具体表现为：
- **信任危机**：#492 引发对命名空间滥用的集体担忧
- **工程化瓶颈**：#556 等多条 Issue 指向 `skill-creator` 工具链的可靠性问题
- **生产化需求**：#228 的组织共享诉求反映企业用户已进入规模化部署阶段

---



# Claude Code 社区动态日报 — 2026-08-03

---

## 1. 今日速览

过去24小时无新版本发布，社区活跃度集中在多平台 Bug 反馈与功能优化建议上。最引人注目的三项议题：① Linux 平台持续出现 CRLF 换行符 Bug（#2805，33 赞）；② Opus 5 在 xhigh/max 思考模式下 WebSearch 完全失效（#83364，回归自 v2.1.219）；③ Cowork 全局指令保存后静默回退（#40175，20 赞）。

---

## 2. 版本发布

**无新 Release。** 当前最新已知版本为 v2.1.220。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 👍 | 链接 |
|---|------|------|------|-----|------|
| #2805 | Linux 上 Claude Code 持续创建 CRLF 换行文件，导致 shell 脚本执行失败 | OPEN | 44 | 33 | [链接](https://github.com/anthropics/claude-code/issues/2805) |
| #32870 | claude.exe 在 Windows 目录列表操作时触发 BSOD（Wof.sys） | OPEN | 38 | 1 | [链接](https://github.com/anthropics/claude-code/issues/32870) |
| #40175 | Cowork 全局指令保存后静默回退到旧版本 | OPEN | 32 | 20 | [链接](https://github.com/anthropics/claude-code/issues/40175) |
| #24537 | 多 Agent 工作流实时可视化仪表盘（TUI + Desktop）功能请求 | OPEN | 14 | 17 | [链接](https://github.com/anthropics/claude-code/issues/24537) |
| #66504 | 要求 Session URL 追加到 Commit/PR 描述变为可选（Opt-in） | OPEN | 11 | 44 | [链接](https://github.com/anthropics/claude-code/issues/66504) |
| #76689 / #83364 | Opus 5 xhigh/max 模式与 WebSearch 不兼容，HTTP 400 错误 | OPEN | 10 / 1 | 11 / 0 | [#76689](https://github.com/anthropics/claude-code/issues/76689) / [#83364](https://github.com/anthropics/claude-code/issues/83364) |
| #82803 | 模型输出退化循环：单 Token 重复约 32k 次直至达到 max_tokens | OPEN | 4 | 0 | [链接](https://github.com/anthropics/claude-code/issues/82803) |
| #82588 | claude-opus-5 生成的韩文文本偶发混淆正确但错误的 Hangul 音节 | OPEN | 3 | 0 | [链接](https://github.com/anthropics/claude-code/issues/82588) |
| #71603 | 移动端（Pixel 8 Pro）在 Agent 忙时输入的文本会被静默丢弃 | OPEN | 6 | 3 | [链接](https://github.com/anthropics/claude-code/issues/71603) |
| #83403 | Claude Desktop 使用约5小时后崩溃，且重启需完全重装 | OPEN | 3 | 0 | [链接](https://github.com/anthropics/claude-code/issues/83403) |

**热点解读：**
- **#2805** 是跨平台兼容性的长期痛点，Linux 用户反馈强烈，CRLF 问题在脚本执行场景影响直接。
- **#66504** 获得 44 赞，表明用户对 Session URL 默认自动注入的工作流存在隐私或冗余顾虑。
- **#76689 + #83364** 为同一根因的两个表象，Opus 5 高思考模式与 WebSearch 工具的兼容性回归已影响生产使用。
- **#82803** 和 **#82588** 反映了用户对模型输出质量的深层担忧：前者是极端重复，后者是多语言准确性。

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 内容摘要 | 链接 |
|---|------|------|----------|------|
| #83374 | 为 MessageDisplay Hook 补充开发文档 | iCodeCraft | 在 bundled Hook Development skill 中补充 `MessageDisplay` 的触发描述、事件指南和快速参考表，该 Hook 此前被遗漏但实际支持 | [链接](https://github.com/anthropics/claude-code/pull/83374) |
| #26056 | 修复 code-review 插件在无 `--comment` 时仍发评论的问题 | apoorvdarshan | 加强 Guardrails：新增顶层行为规则、在步骤 8-9 增加显式条件判断、强化步骤 7 的终止指令，并在 Notes 段添加禁止发布的提醒 | [链接](https://github.com/anthropics/claude-code/pull/26056) |
| #48343 | 修复 skill-reviewer frontmatter YAML 格式无效问题 | Rohan5commit | 将 `skill-reviewer` 的 frontmatter 描述重写为 YAML block scalar，保持触发示例同时确保文件可解析，属于 #40370 系列修复 | [链接](https://github.com/anthropics/claude-code/pull/48343) |

> 注：今日 PR 数量较少（仅 3 条），均为文档完善与插件行为修复，暂无核心功能 PR 合入。

---

## 5. 功能需求趋势

从今日 Issues 中可提炼出以下社区高频需求方向：

1. **多平台稳定性**：Windows BSOD、macOS 崩溃、Linux 换行符问题持续涌现，跨平台兼容性仍是首要痛点。
2. **多 Agent 工作流可视化**：#24537 提出统一实时 Dashboard 需求（TUI + Desktop），反映团队/协作场景下对可观测性的强烈需求。
3. **高思考模式工具兼容性**：Opus 5 的 xhigh/max effort 与 WebSearch 等工具的冲突（#76689、#83364）暴露了模型层与工具层的集成测试缺口。
4. **插件系统完善**：Hook 文档缺失（#83374）、插件自动更新失效（#73673）、frontmatter 解析错误（#48343）等问题表明插件生态的基础设施仍需打磨。
5. **移动端体验**：输入丢失（#71603）、命令不可用（#82854）等问题显示 Remote Control 移动端功能尚未成熟。
6. **自定义与灵活性**：斜杠命令菜单排序（#83441）、ExitPlanMode 按钮文本自定义（#83438）、Session URL 行为可配置（#66504）反映了用户对可配置性的期待。

---

## 6. 开发者关注点

**高频痛点汇总：**

| 类别 | 问题描述 | 涉及 Issue |
|------|----------|------------|
| 换行符兼容 | Linux 平台强制使用 CRLF，导致脚本执行失败 | #2805 |
| 系统稳定性 | Windows BSOD、macOS 崩溃、5 小时定时崩溃 | #32870, #65239, #83403 |
| 模型输出质量 | Token 重复循环、韩文音节混淆 | #82803, #82588 |
| 高思考模式缺陷 | xhigh/max 与 WebSearch 不兼容、effort 配置冲突 | #76689, #83364 |
| 插件机制 | 自动更新失效、文档缺失、frontmatter 解析异常 | #73673, #83374, #48343 |
| Cowork 协作 | 全局指令保存后静默回退 | #40175 |
| 权限传播 | bypassPermissions 未传递到子 Agent | #83421 |
| 移动端 | 输入丢失、命令不可用 | #71603, #77010, #82854 |
| 内容安全策略 | 正常编码请求被安全策略误拦截 | #83440 |
| 模型幻觉 | 生成虚假 system-reminder 和安全警告 | #83442 |

**总结：** 当前社区最关心的三大方向为**跨平台稳定性**（覆盖 Windows/macOS/Linux/Android）、**高思考模式下的工具兼容性**，以及**插件/协作系统的可靠性**。建议优先处理 #2805、#76689/#83364 和 #40175 三个影响面广的 Issue。

---

*数据来源：github.com/anthropics/claude-code · 统计时段：2026-08-02 ~ 2026-08-03*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-08-03**

---

## 1. 今日速览

过去24小时 Codex 无新版本发布，社区活跃度集中在 Windows 端稳定性问题和 Token 消耗优化上。Linux 桌面应用需求（Issue #11023）以 906 赞持续领跑，多项 Windows 相关 Bug 集中爆发，同时后台轮询浪费 Token 的问题引发开发者关注。

---

## 2. 版本发布

**无新 Release。** 最新可用版本为 `26.721.x` 系列（Microsoft Store）。

---

## 3. 社区热点 Issues

### 🔥 高热度需求

**#11023 — Linux 桌面应用支持** | 197 评论 · 906 👍
长期以来的社区最强需求，用户期望在 Linux 桌面获得与 macOS/Windows 一致的应用体验。
🔗 https://github.com/openai/codex/issues/11023

**#35058 — VS Code Codex Diff 报错** | 45 评论 · 115 👍
Codex Diff 在 VS Code 中打开时显示 "Oops, an error has occurred"，影响所有仓库，包括全新 workspace。
🔗 https://github.com/openai/codex/issues/35058

### ⚡ 性能与成本

**#13733 — 后台进程轮询浪费 Token** | 35 评论 · 30 👍
每次 `write_stdin` 轮询均触发完整 API 调用并携带全部对话历史，Token 消耗与历史长度 × 轮询次数成正比。
🔗 https://github.com/openai/codex/issues/13733

**#35259 — 轮询重复进入模型消耗大量 Credit** | 11 评论 · 2 👍
在 Ultra 和多 Agent 工作中，等待/状态轮询动作占总 Token 消耗的 ~20%。
🔗 https://github.com/openai/codex/issues/35259

**#34863 — app-server 内存占用高达 27GB** | 6 评论 · 2 👍
含内联 PNG 的长会话使 JSONL 达 10.2GB，app-server 内存 + 交换分区超过 36GB。
🔗 https://github.com/openai/codex/issues/34863

### 🪟 Windows 端问题集中爆发

**#23198 — Windows 桌面应用极度缓慢** | 21 评论 · 47 👍
日常使用体验极差，疑似 Codex 应用层问题而非硬件性能。
🔗 https://github.com/openai/codex/issues/23198

**#25178 — Windows Computer Use 截图失败** | 21 评论 · 12 👍
`get_window_state` 调用截图时报 `SetIsBorderRequired failed: 不支持此接口`。
🔗 https://github.com/openai/codex/issues/25178

**#10090 — elevated_windows_sandbox 命令全部失败** | 22 评论 · 7 👍
`CreateProcessAsUserW failed: 5`（权限拒绝），导致所有 Agent 命令无法执行。
🔗 https://github.com/openai/codex/issues/10090

**#35119 — WSL 仓库被误判为非 Git** | 13 评论 · 13 👍
`26.721.3404` 版本后回归，WSL2 ext4 文件系统上的仓库无法识别。
🔗 https://github.com/openai/codex/issues/35119

### 🧩 其他值得关注

**#19425 — MCP 工具未暴露给 Desktop 线程** | 27 评论 · 5 👍
自定义 stdio MCP Server 可通过 `tools/list` 发现，但工具未暴露给 `tool_search`，疑似 0.124.0-alpha.2 回归。
🔗 https://github.com/openai/codex/issues/19425

**#31860 — GPT-5.6 Sol 上下文被限制在 372K** | 12 评论 · 25 👍
实际可用上下文仅 353.4K，远低于模型标注的 1.05M，影响长上下文场景。
🔗 https://github.com/openai/codex/issues/31860

---

## 4. 重要 PR 进展

**#36641 — 从响应 usage 捕获 rollout 预算单元** [CLOSED]
将 `codex_rollout_budget_units` 解析进 `TokenUsage`，并保持在 provider-only 范围内不外泄。
🔗 https://github.com/openai/codex/pull/36641

**#36635 — 登录完成通知中暴露 onboarding 提示** [CLOSED]
支持允许的 `.onboarding_entrypoint=life_sciences` 后缀，在登录回调中传递引导元数据。
🔗 https://github.com/openai/codex/pull/36635

**#36632 — 在 goal 变更时保留 SQLite 线程元数据** [CLOSED]
修复设置/清除线程 goal 时可能覆盖 SQLite-only 线程预览的问题。
🔗 https://github.com/openai/codex/pull/36632

**#36544 — 支持 portable Agent Plugins 全链路安装** [CLOSED]
解决 Agent Plugins 的 dotted name 和版本格式与目录安全版本格式不兼容的安装问题。
🔗 https://github.com/openai/codex/pull/36544

**#31781 — 限制 executor 控制的 HTTP 响应缓冲** [OPEN · code-reviewed]
对远程 exec-server 的流式 HTTP 响应添加帧数限制，防止对等方累积大量响应数据。
🔗 https://github.com/openai/codex/pull/31781

**#31817 — 自动更新 models.json** [OPEN]
CI 驱动的模型列表自动维护。
🔗 https://github.com/openai/codex/pull/31817

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **跨平台桌面支持** | #11023 (Linux) | 🔥🔥🔥🔥🔥 |
| **Token/成本优化** | #13733, #35259, #22411 | 🔥🔥🔥🔥 |
| **Windows 稳定性** | #23198, #25178, #10090, #35119 | 🔥🔥🔥🔥 |
| **MCP 集成完善** | #19425 | 🔥🔥 |
| **会话管理** | #6015, #35746 | 🔥🔥 |
| **远程协作** | #27565 (类 Claude Code 远程) | 🔥🔥 |
| **模型能力覆盖** | #31860 (上下文限制), #35763 (推理强度) | 🔥🔥 |

---

## 6. 开发者关注点

1. **Windows 端问题高度集中**：过去24小时 Issues 中超过半数与 Windows 相关，涵盖性能、截图、权限、WSL 兼容性、浏览器崩溃等多个维度，表明 Windows 桌面应用的稳定性是当前最大短板。

2. **Token 消耗透明度与优化**：多个 Issue 指向后台轮询重复触发 API 调用、长会话内存膨胀等问题，开发者对隐形成本高度敏感，期待更精细的消耗控制和可见性。

3. **IDE 插件功能滞后于桌面应用**：VS Code 扩展缺少 Max 推理强度（#35763）等功能，Codex Diff 频繁报错（#35058, #35481），插件体验成为瓶颈。

4. **MCP 生态集成待完善**：MCP 工具发现正常但暴露层存在问题（#19425），影响自定义工具链的可用性。

5. **Linux 桌面应用呼声最高**：Issue #11023 以 906 赞遥遥领先，是社区最明确的 Feature Request。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报
**日期：2026-08-03**

---

## 1. 今日速览

Gemini CLI 发布 `v0.55.0-nightly.20260803` 夜间版本，今日社区共更新 50 个 Issues 和 50 个 PRs。**Agent 子系统稳定性**（subagent 挂起、浏览器 Agent 在 Wayland 下失败、Auto Memory 无限重试）成为最核心痛点；同时 AST 感知工具集成与组件级评估框架持续推进，依赖链完成大规模升级（`@google/genai` 1.30→2.13、`@a2a-js/sdk` 0.3→1.0）。

---

## 2. 版本发布

### v0.55.0-nightly.20260803.gf47d6c6f7
- **发布类型**：夜间构建
- **变更链接**：[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)
- **说明**：自动版本递增，本次夜间版本无独立 Release Notes，配套大量依赖更新（详见 PR 部分）。

---

## 3. 社区热点 Issues

| # | Issue | 热度 | 优先级 | 重要性说明 |
|---|-------|------|--------|-----------|
| #22323 | Subagent recovery after MAX_TURNS reported as GOAL success | 12 评论 / 2👍 | P1 | `codebase_investigator` 达到最大轮次后错误返回 GOAL 成功状态，掩盖中断信号，导致主 Agent 误判任务完成。 |
| #21409 | Generalist agent hangs | 8 评论 / 8👍 | P1 | Generalist Agent 挂起问题获 8 个点赞，社区反馈强烈，简单操作（如创建文件夹）也会卡死，禁用子 Agent 可临时规避。 |
| #19873 | Leverage model's bash affinity via Zero-Dependency OS Sandboxing | 8 评论 | P2 | 提出利用 Gemini 原生 bash 能力，通过零依赖沙箱和事后意图路由增强代码探索效率，属架构级增强提案。 |
| #24353 | Robust component level evaluations | 7 评论 | P1 | 追踪 behavioral evals 测试进展，已生成 76 个测试用例覆盖 6 个支持的 Gemini 模型，对评估基础设施至关重要。 |
| #22745 | Assess AST-aware file reads, search, and mapping | 7 评论 | P2 | 评估 AST 感知工具（如 tilth/glyph）的价值，可精确读取方法边界，减少 token 消耗和无效轮次，关联 Issue #22746。 |
| #21968 | Gemini does not use skills and sub-agents enough | 6 评论 | P2 | 社区反馈自定义 skills 和 sub-agents 未被主动调用，仅显式指令才触发，反映 Agent 自主规划能力不足。 |
| #26522 | Stop Auto Memory from retrying low-signal sessions | 5 评论 | P2 | Auto Memory 对低质量 session 无限重试，造成资源浪费，需增加失效处理逻辑。 |
| #26525 | Add deterministic redaction and reduce Auto Memory logging | 4 评论 | P2 | 安全相关：提取 agent 在发送内容到模型前已暴露原始数据，需增强确定性脱敏。 |
| #25166 | Shell command execution stuck with "Waiting input" | 4 评论 / 3👍 | P1 | 简单 shell 命令执行后 hang，界面仍显示"等待用户输入"，影响核心交互体验。 |
| #21983 | browser subagent fails in Wayland | 4 评论 / 1👍 | P1 | Wayland 环境下浏览器 Agent 失败，`TERMINATION_REASON: GOAL` 未能正确区分成功与中断，影响 Linux 用户。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| #28638 | chore/release: bump version to 0.55.0-nightly | 🔄 Open | 自动版本递增，配合夜间构建发布。 |
| #28631 | chore(deps): bump @google/genai 1.30→2.13 | ✅ Closed | 核心 SDK 大版本升级，引入新 API 与安全修复。 |
| #28628 | chore(deps): bump @a2a-js/sdk 0.3→1.0 | ✅ Closed | A2A 协议 SDK 升级至 1.0，Agent 互操作能力增强。 |
| #28627 | chore(deps): bump @agentclientprotocol/sdk 0.16→1.3 | ✅ Closed | MCP 协议 SDK 升级，改善 Agent-Client 通信稳定性。 |
| #28626 | chore(deps): npm-dependencies 75 updates | ✅ Closed | 批量依赖更新，包含 simple-git、MCP SDK 等核心库。 |
| #28624 | fix(core): prevent boolean thought parts leaking | 🔄 Open | 修复 thought 部分为 boolean 时错误渲染为 `[Thought: true]` 的问题（Fix #23525）。 |
| #28535 | fix: use resolveRipgrepPath in perf test setup | 🔄 Open | 性能测试修复，替换已移除的 `canUseRipgrep()` API。 |
| #28534 | fix(ci): retry staging-tmp dist-tag removal | 🔄 Open | CI 修复：重试 `staging-tmp` 标签移除，解决 nightly 发布竞态问题。 |
| #28526 | fix(vscode-ide-companion): stop leaking disposables | 🔄 Open | 修复 VSCode 扩展中 `gemini.diff.accept` 和 `onDidChangeWorkspaceFolders` 的 Disposable 泄漏（Fix #27790）。 |
| #27070 | branch optimize virtual list2 | 🔄 Open | 虚拟列表性能优化，含滚动 checkpoint 优化与 Flaky 测试修复。 |

---

## 5. 功能需求趋势

| 方向 | 关注度 | 说明 |
|------|--------|------|
| **Agent 稳定性与自主性** | 🔥🔥🔥 | 多个 P1/P2 Issue 集中在 subagent hang、自主调用 skills 不足、错误状态上报等问题，是当前社区最迫切的改进方向。 |
| **评估与可观测性** | 🔥🔥 | 组件级 eval 基础设施（#24353）、subagent 轨迹可见性（#22598）、bug report 补充子 Agent 上下文（#21763）均有进展。 |
| **AST/语义感知工具** | 🔥🔥 | 社区强烈希望引入 AST-aware 工具（#22745、#22746）以优化代码探索效率、减少无效 token 消耗。 |
| **浏览器 Agent 跨平台兼容** | 🔥 | Wayland 支持（#21983）、配置覆盖忽略（#22267）、锁恢复（#22232）均指向浏览器子 Agent 的健壮性提升。 |
| **Auto Memory 质量与安全** | 🔥 | 低信号 session 去重（#26522）、确定性脱敏（#26525）、无效 patch 隔离（#26523）形成系统性的记忆模块优化需求。 |
| **Shell/终端交互体验** | 🔥 | 命令挂起（#25166）、外部编辑器退出后闪烁（#24935）、resize 性能（#21924）反映终端交互层仍有优化空间。 |

---

## 6. 开发者关注点

**高频痛点：**

1. **Subagent 可靠性不足** — Generalist、Browser、Codebase Investigator 等子 Agent 出现挂起、状态误报、权限绕过等问题，开发者反馈 Agent 未能可靠执行任务，且难以诊断（#21409、#22323、#21983、#22093）。

2. **配置覆盖失效** — `settings.json` 中的 `maxTurns` 等参数被 Browser Agent 忽略（#22267），Symlink Agent 文件不被识别（#20079），削弱了用户对 Agent 行为的控制力。

3. **Auto Memory 资源消耗** — 低质量 session 被无限重试、无效 patch 静默跳过、隐私数据在脱敏前已进入模型上下文，社区呼吁建立失效队列与确定性脱敏机制（#26522、#26523、#26525）。

4. **终端交互卡顿** — shell 命令完成后仍显示"Waiting input"（#25166）、vite 创建等交互式命令卡住（#22465）、外部编辑器退出后屏幕闪烁（#24935），影响日常使用流畅度。

5. **Destructive 操作缺乏防护** — 模型在 git 操作等场景中倾向使用 `git reset --force` 等高风险命令，社区建议增加破坏性行为拦截与替代建议（#22672）。

---

*数据来源：github.com/google-gemini/gemini-cli | 生成时间：2026-08-03*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**日期：2026-08-03**

---

## 1. 今日速览

过去24小时 Copilot CLI 无新版本发布，社区活跃度集中在 Issue 反馈层面。共新增 13 条 Issue，其中多项涉及 Autopilot 模式行为异常、ACP 工具调用展示问题以及 WSL2/Windows 平台兼容性，反映出用户对会话管理和跨平台体验的高度关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues（精选 10 条）

| Issue | 标题 | 优先级/原因 | 链接 |
|-------|------|-------------|------|
| **#4337** | gpt-5.6-luna 在 `/models` 中可见但 `/chat/completions` 不可用 | 🔴 高 — 破坏 MoA/aggregator 工具链兼容性，OpenAI 兼容接口断裂 | [链接](github/copilot-cli/issues/4337) |
| **#4336** | 取消的输入仍被 Agent 作为有效轮次处理（Autopilot） | 🔴 高 — 用户预期与行为不符，可能导致意外操作 | [链接](github/copilot-cli/issues/4336) |
| **#4335** | ACP 模式下 `toolCall.title` 显示摘要而非可执行命令 | 🟡 中 — 影响 Zed 等宿主编辑器的审批弹窗体验 | [链接](github/copilot-cli/issues/4335) |
| **#4334** | `ctrl+S` 暂存的 Prompt 在会话切换后丢失 | 🟡 中 — 数据丢失类 Bug，直接影响用户工作流 | [链接](github/copilot-cli/issues/4334) |
| **#4332** | 请求提供静默"Memory is disabled"提示的配置项 | 🟢 低 — 功能性增强需求，已有明确 workaround 缺失 | [链接](github/copilot-cli/issues/4332) |
| **#4329** | 恢复会话时 Autopilot 状态未正确保留 | 🔴 高 — 状态管理 Bug，影响连续会话体验 | [链接](github/copilot-cli/issues/4329) |
| **#4328** | WSL2 下 `Ctrl+H` 被误识别为 `Ctrl+Backspace`（词删除） | 🟡 中 — 源于 WT_SESSION 泄漏，影响 Windows Terminal 用户 | [链接](github/copilot-cli/issues/4328) |
| **#4292** | tmux 中浅色主题颜色完全异常 | 🟡 中 — 终端渲染兼容性问题，影响开发者使用场景 | [链接](github/copilot-cli/issues/4292) |
| **#4202** | `view` 工具在 1.0.72+ 报"Path does not exist"回归 | 🔴 高 — 内置工具回归，影响文件查看功能 | [链接](github/copilot-cli/issues/4202) |
| **#2286** | Windows 插件安装需支持 git symlink | 🟢 低 — 长期功能请求，涉及 `core.symlinks=false` 场景 | [链接](github/copilot-cli/issues/2286) |

---

## 4. 重要 PR 进展

过去24小时内无新 PR 更新。

---

## 5. 功能需求趋势

从本期 Issue 中可提炼出以下社区关注方向：

- **模型/API 兼容性**：Issue #4337 暴露了模型目录与聊天接口不一致的问题，开发者对多模型接入的稳定性需求持续上升。
- **会话与状态管理**：#4329（Autopilot 状态恢复）、#4336（取消输入处理）、#4334（暂存 Prompt 丢失）均指向会话生命周期管理的痛点。
- **跨平台/终端适配**：#4328（WSL2/Ctrl+H）、#4292（tmux 渲染）、#2286（Windows git symlink）反映多平台兼容性仍是高频反馈区。
- **ACP 协议集成**：#4335 表明 Agent Context Protocol 模式下工具调用的元数据展示需要优化，以适配 Zed 等宿主编辑器。
- **可配置性增强**：#4332 等 Issue 显示用户对细粒度 UI 行为控制（如提示静默）的需求增长。

---

## 6. 开发者关注点

**核心痛点汇总：**

1. **状态持久化不可靠**：Autopilot 模式、暂存内容在会话切换/恢复时存在丢失或状态不同步问题，影响连续工作流。
2. **API 表面不一致**：模型列表接口与实际可调用接口不匹配，对依赖 OpenAI 兼容协议的工具链造成破坏。
3. **快捷键行为与平台差异**：WSL2 环境下 Ctrl 组合键映射异常，根源在于 Windows Terminal 环境变量泄漏，需更严格的隔离处理。
4. **内置工具回归**：`view` 工具在 1.0.72 引入的回归说明版本测试覆盖不足，影响用户信任。
5. **主题/渲染兼容**：tmux 等嵌套终端中的颜色渲染问题持续存在，UX 一致性有待加强。

---

*日报生成时间：2026-08-03 | 数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报
**日期：2026-08-03**  
**数据来源：github.com/MoonshotAI/kimi-cli**

---

## 1. 今日速览

过去24小时内 Kimi Code CLI 仓库无新版本发布，但社区活跃度持续走高，共收录 4 条 Issue 和 1 条 PR。社区最关注的两大方向为**跨会话记忆系统**和**远程控制能力**，均由用户 CatKang 发起，合计获得 24 个 👍，反映出开发者对 CLI 工作流连续性和多设备协同的强烈需求。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 社区热点 Issues

### #1282 — Remote Control：从任意设备续接本地会话 ⭐ 热门
- **作者：** CatKang | **创建：** 2026-02-27 | **最后更新：** 2026-08-02
- **评论：** 11 | **👍：** 24
- **重要性：** 此 Issue 获得近期最高点赞，直接回应了开发者在移动端/远程场景下的核心痛点——离开电脑后无法继续已有的 CLI 工作流。若实现，将显著提升 Kimi Code CLI 的生产力价值。
- **链接：** [MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

### #1283 — Memory System：跨会话持久化上下文 ⭐ 热门
- **作者：** CatKang | **创建：** 2026-02-27 | **最后更新：** 2026-08-02
- **评论：** 14 | **👍：** 0
- **重要性：** 与 #1282 同作者，构建互补能力。自动记忆 + 手动指令的结合方案，有望解决 AI 编程助手"每次重启都失忆"的顽疾，是提升长期项目协作体验的关键功能。
- **链接：** [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### #2579 — 外部唤醒通道：支持 TUI 交互式会话唤醒
- **作者：** munich35 | **创建：** 2026-08-02 | **最后更新：** 2026-08-02
- **评论：** 0 | **👍：** 0
- **重要性：** 针对高级用户场景——通过 `inotifywait` 监听 inbox 目录实现多 Agent 协作唤醒。此功能将 Kimi Code CLI 从单点工具升级为可嵌入多 Agent 工作流的节点，潜力较大但目前尚处提案阶段。
- **链接：** [MoonshotAI/kimi-cli Issue #2579](https://github.com/MoonshotAI/kimi-cli/issues/2579)

### #2578 — Swarm 批次中途 403/超时导致半成品丢失 🐛 痛点
- **作者：** myagizmaktav | **创建：** 2026-08-02 | **最后更新：** 2026-08-02
- **评论：** 0 | **👍：** 0
- **重要性：** 直击并行子 Agent（swarm）模式的稳定性缺陷：配额超限或超时会导致工作区处于断裂状态，且恢复时重复消耗 Token。此为生产环境高频风险，建议官方优先关注。
- **链接：** [MoonshotAI/kimi-cli Issue #2578](https://github.com/MoonshotAI/kimi-cli/issues/2578)

---

## 4. 重要 PR 进展

### #2471 — feat(tools): 新增 Monitor 工具，支持逐行 stdout 流式输出
- **作者：** Nitjsefnie | **状态：** ✅ CLOSED | **创建：** 2026-06-22 | **最后更新：** 2026-08-02
- **功能概述：** 新增 `Monitor` 工具，作为现有后台执行工具的流式输出对照版本，支持逐行捕获并实时展示 stdout 内容，提升长耗时任务的可观测性。
- **进展说明：** 该 PR 已关闭，可能已被合并或暂存等待进一步讨论，建议关注后续是否有替代实现。
- **链接：** [MoonshotAI/kimi-cli PR #2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)

---

## 5. 功能需求趋势

根据本期 Issue 分析，社区需求呈现以下三大趋势：

| 趋势方向 | 代表 Issue | 核心诉求 |
|---------|-----------|---------|
| **工作流连续性** | #1282, #1283 | 跨设备续接 + 跨会话记忆，解决"会话中断即丢失上下文"问题 |
| **多 Agent 协作** | #2579, #2578 | 外部唤醒通道、swarm 模式容错，满足复杂自动化场景 |
| **可观测性增强** | #2471 | 流式输出、实时状态监控，提升长任务调试体验 |

---

## 6. 开发者关注点

综合本期反馈，开发者主要痛点集中在：

1. **会话持久化缺失** — 每次重新启动 CLI 均需重新建立上下文，重复劳动成本高（#1283）
2. **多设备协同空白** — 无远程续接能力，限制移动办公和应急场景（#1282）
3. **Swarm 模式稳定性不足** — 配额限制或超时会导致工作区断裂、Token 浪费（#2578）
4. **长任务可观测性弱** — 缺乏流式输出和进度监控能力，调试体验较差（#2471）

> 以上趋势表明，社区对 Kimi Code CLI 的期待已从"单点编码助手"向"持久化、可协作、高可用的开发工作流平台"演进。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-08-03

## 1. 今日速览

过去24小时 OpenCode 无新版本发布，但社区活跃度显著。SQLite WAL 无限增长和临时文件泄漏等性能问题持续引发关注（#37495、#39876），同时多个功能 PR 推进中，包括 request-scoped 模型切换（#40188）和 per-MCP-server 信任配置（#40125）。

---

## 2. 版本发布

过去24小时内无新 Release。

---

## 3. 社区热点 Issues

| Issue | 摘要 | 关注度 |
|-------|------|--------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** — 集中收集内存问题，需提供 heap snapshots | 121评论 / 94👍 |
| [#4695](https://github.com/anomalyco/opencode/issues/4695) | **语音输入功能请求** — Speech-to-Text 特性长期关注 | 36评论 / 170👍 |
| [#37495](https://github.com/anomalyco/opencode/issues/37495) | **SQLite WAL 无限增长** — 多连接导致 WAL 无法 checkpoint，占满磁盘 | 2评论 / 0👍 |
| [#39876](https://github.com/anomalyco/opencode/issues/39876) | **libopentui 临时文件泄漏 207GB** — 数万 .dylib 文件堆积在 $TMPDIR | 2评论 / 0👍 |
| [#28089](https://github.com/anomalyco/opencode/issues/28089) | **临时 .so 文件泄漏** — /tmp 中数百 GB 累积 | 7评论 / 7👍 |
| [#37239](https://github.com/anomalyco/opencode/issues/37239) | **service restart 无限循环** — 后台服务重启后 spawn 约16次无日志死亡 | 5评论 / 0👍 |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | **DeepSeek V4 Flash 需中国区托管** — 中途突然要求 opt-in | 11评论 / 18👍 |
| [#39861](https://github.com/anomalyco/opencode/issues/39861) | **零数据保留策略被移除** — Go 文档已删除相关声明 | 8评论 / 15👍 |
| [#37821](https://github.com/anomalyco/opencode/issues/37821) | **SQLite 损坏导致崩溃** — 断电/磁盘问题后启动崩溃 | 2评论 / 0👍 |
| [#40183](https://github.com/anomalyco/opencode/issues/40183) | **Copilot 每次会话重新认证** — 已存储凭证但 expires:0 导致重复登录 | 2评论 / 0👍 |

---

## 4. 重要 PR 进展

| PR | 类型 | 摘要 |
|----|------|------|
| [#40188](https://github.com/anomalyco/opencode/pull/40188) | 新功能 | **request-scoped `chat.model` hook** — 插件可在单次请求前替换模型/提供者，解决 #18793 |
| [#40197](https://github.com/anomalyco/opencode/pull/40197) | 性能优化 | **消除持久化写入放大** — 用共享 repository + 500ms checkpoint 替代 setter-coupled 写入 |
| [#40199](https://github.com/anomalyco/opencode/pull/40199) | Bug 修复 | **修复 OpenAI OAuth 中间会话移除竞态** — 保留 auth 状态后正确透传请求 |
| [#40198](https://github.com/anomalyco/opencode/pull/40198) | Bug 修复 | **Unicode 规范等价匹配** — `seekSequence()` 新增 canonical Unicode 匹配，解决 patch 验证失败 (#31651) |
| [#40202](https://github.com/anomalyco/opencode/pull/40202) | Bug 修复 | **项目选择对话框搜索扩展** — 搜索结果从最近5个扩展至全部项目，解决 #39142 |
| [#40163](https://github.com/anomalyco/opencode/pull/40163) | Bug 修复 | **Prompt 光标定位修复** — 修复 Down 箭头无法到达文本末尾的问题 (#40161) |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | 新功能 | **per-MCP-server 信任配置** — 支持为不同 MCP server 独立设置信任策略，解决多个长期问题 |
| [#40184](https://github.com/anomalyco/opencode/pull/40184) | 新功能 | **Teach mode** — 教学场景专用工作流（Draft 阶段） |
| [#38200](https://github.com/anomalyco/opencode/pull/38200) | 新功能 | **Solidity 语法高亮** — 新增 Solidity 文件类型支持 |
| [#34841](https://github.com/anomalyco/opencode/pull/34841) | Bug 修复 | **保留主 agent 插入顺序** — 移除 `Agent.list()` 中的字母排序 |

---

## 5. 功能需求趋势

1. **插件扩展能力** — `chat.model` hook（#40188）和 per-MCP-server 信任配置（#40125）反映社区对细粒度插件控制的强烈需求
2. **本地运行时性能** — 内存泄漏（#20695）、临时文件堆积（#39876、#28089）、WAL 增长（#37495）是近期最突出的痛点
3. **语音/多模态输入** — 语音输入功能（#4695）持续获得高支持（170👍）
4. **模型供应商灵活性** — DeepSeek 地区限制（#39845）、GPT-5.6 地区支持（#40162）、零数据保留策略变更（#39861）显示用户对模型可达性和数据政策的关注
5. **桌面端体验** — Windows 启动卡死（#38222、#40170）、macOS Cmd+W 快捷键冲突（#37610）、项目选择器前缀碰撞（#40094）等桌面端问题频发

---

## 6. 开发者关注点

- **存储与资源管理**：SQLite WAL 无限增长、临时文件泄漏、.so 文件堆积是开发者反馈最集中的问题，直接影响生产环境稳定性
- **认证与授权**：OAuth 竞态条件（#40199）、Copilot 重复认证（#40183）、API key 重复提示（#33775）表明认证流存在多处边界问题
- **TUI/编辑器体验**：光标定位（#40163）、侧边栏文件 diff 不显示（#32852）、CSS 主题覆盖（#40177）反映终端 UI 细节打磨需求
- **会话与持久化**：缓存写入计数为0（#37745）、子 agent 不可中断（#38966）、并发 VS Code 实例崩溃（#38849）涉及核心工作流
- **合规与数据政策**：零数据保留策略移除（#39861）引发用户信任关注，需产品侧明确回应

---

*数据来源: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-08-03

## 1. 今日速览

今日核心动态围绕 **compaction 可靠性问题**与 **新提供商接入** 展开：`#6879`（auto-compaction 在上下文超限后不触发）引发 10 条评论与 10 个 👍，成为当前最活跃 Bug；同时 **DeepInfra** 与 **LLM Gateway** 两个新提供商通过 PR 合并入库。此外，`#7505` / `#7504` 揭示了 pi.dev API 无响应与 IPv6 黑洞导致 `/login` 冻结约 5 分钟的严重体验问题，均已关闭但值得跟进。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论 | 👍 | 重要性 |
|---|------|------|------|----|--------|
| #6879 | auto-compaction 在上下文 >100% 后不触发，直至 provider 拒绝请求 | OPEN | 10 | 10 | 🔴 核心 Bug，影响长会话稳定性 |
| #7020 | compaction 后 Pi 有时不继续执行 | OPEN | 7 | 2 | 🔴 长会话"协调者"模式受阻 |
| #7062 | OpenAI completions 未处理 array content 与缺失 finish_reason | OPEN | 6 | 0 | 🟡 Databricks 等非标准流式响应兼容 |
| #7113 | `/login` 后 pi.dev 不可达时 TUI 冻结无超时 | OPEN | 4 | 0 | 🟡 影响登录体验 |
| #7321 | 无 bracketed paste 终端（如 Termux）多行粘贴失效 | OPEN | 2 | 1 | 🟡 移动端/受限终端用户痛点 |
| #7505 | `/login` 后远程 catalog 刷新无超时，登录冻结 ~5 分钟 | CLOSED | 1 | 0 | 🔴 网络不稳定场景严重 |
| #7504 | IPv6 blackhole 导致 undici 无 fallback，pi 挂起 ~5 分钟 | CLOSED | 1 | 0 | 🔴 双栈网络环境常见问题 |
| #7499 | `auth.json` 含 UTF-8 BOM 时所有凭证被静默禁用 | CLOSED | 1 | 0 | 🟡 Windows 用户易踩坑 |
| #7491 | qwen-token-plan-cn 个人版订阅者访问 9/15 模型被拒 | CLOSED | 1 | 0 | 🟡 订阅权限校验 Bug |
| #7484 | 扩展发送的斜杠命令被忽略，未执行 | CLOSED | 2 | 0 | 🟡 扩展开发体验问题 |

**链接汇总：**
- [#6879](https://github.com/earendil-works/pi/issues/6879) · [#7020](https://github.com/earendil-works/pi/issues/7020) · [#7062](https://github.com/earendil-works/pi/issues/7062) · [#7113](https://github.com/earendil-works/pi/issues/7113) · [#7321](https://github.com/earendil-works/pi/issues/7321)
- [#7505](https://github.com/earendil-works/pi/issues/7505) · [#7504](https://github.com/earendil-works/pi/issues/7504) · [#7499](https://github.com/earendil-works/pi/issues/7499) · [#7491](https://github.com/earendil-works/pi/issues/7491) · [#7484](https://github.com/earendil-works/pi/issues/7484)

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容概要 |
|---|------|------|----------|
| #7503 | 实验性 in-memory sessions | OPEN | 新增 `Session`/`SessionStorage`/`SessionRepository` 接口及内存后端，暴露于 `@earendil-works/pi-agent-core/experimental` |
| #7501 | 添加 DeepInfra provider | CLOSED | 标准 OpenAI completions 端点提供商，不支持 developer role |
| #7498 | 延迟 idle compaction 至下次 prompt | OPEN | 避免 gpt 类模型上下文窗口快速增长时的不必要 compaction 开销 |
| #7480 | 添加 LLM Gateway provider | CLOSED | OpenRouter 风格路由，支持 ~151 个 tool-capable 模型 |
| #7496 | Cycle 执行耗时与 `/copy cycle` | CLOSED | 每次工作周期结束后打印 `Execution time: Xh Ym Zs` |
| #7494 | 保留 Gemini 3 tool call IDs | OPEN | 修复 Gemini 3+ 工具调用 ID 丢失导致的 history replay 失败 |
| #7493 | 设置 `AI_AGENT=pi` 子进程标识 | OPEN | 跨 agent 约定，让子进程识别由 Pi 启动 |
| #7330 | 工具返回图片自动缩放 | OPEN | 统一通过 `processImage` 处理工具产出图片，限制最大 2000×2000 |
| #7482 | WezTerm 优先 iTerm2 inline images | CLOSED | 修复 WezTerm 上 Kitty 图片在滚动 transcript 中被逐步擦除的问题 |
| #7396 | Server session backend | OPEN | 为 `PiServer` 添加 JSONL 持久化后端，支持跨进程锁与崩溃恢复 |

**链接汇总：**
- [#7503](https://github.com/earendil-works/pi/pull/7503) · [#7501](https://github.com/earendil-works/pi/pull/7501) · [#7498](https://github.com/earendil-works/pi/pull/7498) · [#7480](https://github.com/earendil-works/pi/pull/7480) · [#7496](https://github.com/earendil-works/pi/pull/7496)
- [#7494](https://github.com/earendil-works/pi/pull/7494) · [#7493](https://github.com/earendil-works/pi/pull/7493) · [#7330](https://github.com/earendil-works/pi/pull/7330) · [#7482](https://github.com/earendil-works/pi/pull/7482) · [#7396](https://github.com/earendil-works/pi/pull/7396)

---

## 5. 功能需求趋势

| 方向 | 说明 |
|------|------|
| **新提供商扩展** | DeepInfra、LLM Gateway 加入；社区持续期待更多 OpenAI-compatible 接入点 |
| **Compaction 可靠性** | 多个 Issue 聚焦 compaction 触发时机、失败诊断、中断恢复，是长会话稳定性的核心瓶颈 |
| **终端渲染兼容** | WezTerm、Kitty、iTerm2、xterm.js 的图片渲染、IME、光标行为持续收到反馈 |
| **会话存储架构** | in-memory session、server JSONL backend、session repository 重构正在推进，指向可插拔存储层 |
| **扩展系统完善** | 斜杠命令执行、shellPath 尊重、extension loader 性能（jiti 实例复用）等痛点被提出 |
| **网络韧性** | 超时控制、IPv6 fallback、model catalog 刷新重试等网络层鲁棒性改进 |

---

## 6. 开发者关注点

1. **Compaction 是最大痛点**：`#6879` 和 `#7020` 合计 17 条评论，开发者反复报告 compaction 触发条件不一致、失败后状态丢失等问题，直接影响长时间 agent 会话的可信度。
2. **终端适配碎片化**：WezTerm（光标跳动、IME 闪烁、图片渲染）、Termux（多行粘贴）、xterm.js（缺少 size 参数）各终端均有独立 Bug，说明 TUI 层需更系统的兼容性抽象。
3. **网络超时缺乏兜底**：`#7505` / `#7504` 暴露了 login、model catalog refresh、Fireworks 等关键路径缺乏合理超时与 fallback，在网络不稳定环境下体验差。
4. **提供商非标准响应处理**：Databricks 返回 array content、Gemini 3 需要保留 tool call ID，说明 Pi 的 provider 适配层需要更宽容的解析策略。
5. **扩展开发体验**：斜杠命令静默被忽略、shellPath 被 WSL 覆盖、extension loader 串行加载等，阻碍了第三方扩展生态的成熟。

---

*数据截至 2026-08-03，来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报
**日期：2026-08-03**

---

## 1. 今日速览

Qwen Code 发布 `v0.21.3-nightly.20260803` 补丁版本，修复了 TUI 键盘快捷键文档及历史分页阻塞问题。社区围绕 MCP 外部上下文提供、守护进程资源管控及多工作空间架构展开热烈讨论，同时桌面客户端会话管理与 Windows 终端兼容性 bug 引发重点关注。

---

## 2. 版本发布

### v0.21.3-nightly.20260803.e1e5b42ce

**更新内容：**
- **文档**：完善 TUI 键盘快捷键参考文档
- **修复**：修复核心模块中历史分页在特定条件下被阻塞的问题（`fix(core): unblock history pagination`）

🔗 [Release 详情](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260803.e1e5b42ce)

---

## 3. 社区热点 Issues

### 🔥 重点关注 Issue（10条）

| # | 标题 | 热度 | 重要性说明 |
|---|------|------|-----------|
| #7585 | proposal: 添加直接外部上下文提供者 Profile | 💬 11 | 多工作空间协作场景下的核心需求，支持共享上下文管理 |
| #8051 | tracking(serve): 管控多工作空间守护进程资源使用 | 💬 9 | 生产级 `qwen serve` 的内存/请求体边界管控，直接影响规模化部署 |
| #4156 | proposal(serve): qwen --serve TUI + HTTP 守护进程模式 | 💬 7 | 解决"有 TUI 就无法运行 daemon"的架构限制，社区长期诉求 |
| #7306 | 加固工具输出预算与生命周期管理 | 💬 5 | 核心稳定性增强，Phase 1 已完成，关注后续落地 |
| #8123 | 桌面客户端无法通过 @ 符号引用文件 | 💬 5 | **用户体验痛点**：v0.5.5 桌面版文件搜索失效，直接影响开发者日常使用 |
| #8376 | 将进程名从 node.exe 改为 qwen.exe | 💬 4 | Windows 平台进程识别问题，影响第三方工具集成 |
| #8281 | 添加支持 IMAP/SMTP 的邮件通道 | 💬 4 | 扩展 Agent 通信渠道，提升异步协作能力 |
| #8382 | Duplicate provider tool call id 错误 | 💬 3 | 工具调用 ID 冲突导致调用失败，需根因修复 |
| #8400 | Windows 会话重启后自动删除 | 🔴 P1 | **严重 Bug**：ACP 会话加载失败导致本地会话镜像被静默删除，数据丢失风险 |
| #8398 | isAbortError 未识别 OpenAI SDK 的 APIUserAbortError | 🔴 P2 | 用户取消请求被错误分类为非中止，影响会话状态管理 |

**相关链接：**
- [#7585](https://github.com/QwenLM/qwen-code/issues/7585)
- [#8051](https://github.com/QwenLM/qwen-code/issues/8051)
- [#4156](https://github.com/QwenLM/qwen-code/issues/4156)
- [#7306](https://github.com/QwenLM/qwen-code/issues/7306)
- [#8123](https://github.com/QwenLM/qwen-code/issues/8123)
- [#8376](https://github.com/QwenLM/qwen-code/issues/8376)
- [#8281](https://github.com/QwenLM/qwen-code/issues/8281)
- [#8382](https://github.com/QwenLM/qwen-code/issues/8382)
- [#8400](https://github.com/QwenLM/qwen-code/issues/8400)
- [#8398](https://github.com/QwenLM/qwen-code/issues/8398)

---

## 4. 重要 PR 进展

### 🛠 重点 PR（10条）

| # | 类型 | 标题 | 作者 | 说明 |
|---|------|------|------|------|
| #8408 | Fix | 修复 provider 警告净化器中的凭证泄露 | C0d3N1nja97342 | 修复 URL 端口截断和密码泄漏两个安全漏洞 |
| #8405 | Fix | 降低 Maven 生成测试源在 `/review` 中的优先级 | wenshao | 解决 Maven 生成文件干扰代码审查结果的问题 |
| #6739 | Feature | Chrome 扩展 alpha 就绪诊断工具 | yiliang114 | 添加守护进程/浏览器自动化 onboarding 状态及 MCP 诊断 |
| #8383 | Fix | 修复行结束符检测逻辑 | doudouOUC | 修正 `readText` 仅从切片而非完整文件检测行结束符的 bug |
| #8407 | Fix | 防止 Web Shell 表格对话框关闭时的滚动跳转 | carffuca | 提升 Web Shell 用户体验，恢复键盘焦点时不滚动页面 |
| #8213 | Feature | 确立工作空间运行时所有权边界 | ytahdn | 为每个工作空间的 ACP 子进程生命周期建立明确的五态运行时快照 |
| #8406 | Fix | 为 ConEmu/Cmder 启用同步输出（DEC mode 2026） | C0d3N1nja97342 | **修复 #8385**：消除 Windows ConEmu/Cmder 终端全屏闪烁问题 |
| #8274 | Feature | 支持从任意对话节点分叉（Fork） | water-in-stone | 突破仅能从最新会话状态分叉的限制，支持基于历史消息创建分支 |
| #8180 | Feature | 工具执行结果遥测追踪 | doudouOUC | 新增 `executionStatus` 字段，记录工具调用是否成功进入执行阶段 |
| #8394 | Feature | `/review` 增加 Maven 多模块验证支持 | wenshao | 识别根 Maven reactor，将变更文件映射到最深层模块 |

**相关链接：**
- [#8408](https://github.com/QwenLM/qwen-code/pull/8408)
- [#8405](https://github.com/QwenLM/qwen-code/pull/8405)
- [#6739](https://github.com/QwenLM/qwen-code/pull/6739)
- [#8383](https://github.com/QwenLM/qwen-code/pull/8383)
- [#8407](https://github.com/QwenLM/qwen-code/pull/8407)
- [#8213](https://github.com/QwenLM/qwen-code/pull/8213)
- [#8406](https://github.com/QwenLM/qwen-code/pull/8406)
- [#8274](https://github.com/QwenLM/qwen-code/pull/8274)
- [#8180](https://github.com/QwenLM/qwen-code/pull/8180)
- [#8394](https://github.com/QwenLM/qwen-code/pull/8394)

---

## 5. 功能需求趋势

从 Issue 讨论中提炼出以下社区高频需求方向：

| 方向 | 关键 Issue | 趋势解读 |
|------|-----------|---------|
| **MCP & 外部集成** | #7585, #8291, #8281 | 社区强烈期望扩展 Agent 的通信渠道（邮件、外部上下文、云部署），提升多 Agent 协作能力 |
| **守护进程 (daemon) 架构** | #8051, #4156, #8213 | 多工作空间守护进程的资源管控和 TUI/daemon 共存是生产部署的核心瓶颈，近期 PR 密集收敛 |
| **会话管理稳定性** | #8400, #8356, #7164 | 会话转录并发写入、APIUserAbortError 处理、会话自动删除等 Bug 暴露了 session-management 模块的脆弱性 |
| **Windows 桌面客户端体验** | #8123, #8376, #8385 | 文件搜索失效、进程命名、终端闪烁是 Windows 桌面版最集中的用户反馈 |
| **代码审查增强** | #8405, #8394, #8402 | `/review` 命令持续增强对 Java/Maven 多模块项目及 Web Shell 的结构化支持 |
| **ACP Plan & Review 工作流** | #8389 | 基于 DAG 的 Plan Mode 可视化与审查流程正在形成完整产品体验 |

---

## 6. 开发者关注点

### 高频痛点与反馈

1. **桌面客户端文件搜索失效（#8123）**
   - 用户反馈使用 `@` 符号无法引用项目中存在的有效 Java 文件，直接影响日常开发效率。

2. **Windows 终端闪烁问题（#8385 → #8406）**
   - ConEmu/Cmder 用户在流式输出时出现全屏闪烁，`CI=true` 为唯一 workaround。PR #8406 已修复。

3. **会话数据丢失风险（#8400）**
   - ACP 会话加载失败或 workspace cwd 不匹配时，应用静默删除本地会话镜像，且无任何确认提示。**P1 级问题**。

4. **OpenAI 兼容模式中断识别失效（#8398 → #8356）**
   - `isAbortError` 未识别 `APIUserAbortError`，导致用户取消请求后，后续对话轮次无法写入本地会话转录，影响历史记录完整性。

5. **进程名称不利于第三方集成（#8376）**
   - Windows 上进程显示为 `node.exe`，第三方工具无法可靠识别，建议改为 `qwen.exe`。

6. **重复工具调用 ID（#8382）**
   - 频繁出现 `Duplicate provider tool call id` 错误，影响工具调用可靠性，需深入排查并发场景下的 ID 生成逻辑。

---

*报告生成时间：2026-08-03 | 数据来源：github.com/QwenLM/qwen-code*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报
**日期：2026-08-03** | 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览

过去24小时内社区活跃度高涨，共更新50条Issues与20条PRs，**无新版本发布**。v0.9.4 进入发布冲刺阶段，多个 release-blocker issue（agent spawn 配置冲突、Fleet config 静默覆盖）正在通过 PR 修复。同时，Termux/Android arm64 官方支持 QA 已结项关闭。

---

## 2. 版本发布

无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 重要性 |
|---|------|------|--------|
| #2934 | sidebar sessions panel with auto-resume and session history browsing | 12 | 长期以来的核心 UX 痛点：用户无法在侧边栏直观浏览和管理历史会话，依赖 `Ctrl+R` 弹窗操作摩擦大 |
| #998 | 文案展示不全 | 11 | 中文用户高频反馈，希望悬浮提示完整内容，影响本地化体验 |
| #689 | deepseek doctor 诊断通过但 deepseek run 无法运行 | 10 | 诊断工具与运行时行为不一致，属于严重可靠性问题 |
| #1004 | `/dryrun` — preview the next chat completion request without sending it | 8 | 长 context 调试刚需功能，可直接预览即将发送的请求内容 |
| #1425 | 执行大文本处理工程后会话中断卡死 | 6 | 子 Agent `agent_wait` 超时导致会话卡死，影响多 agent 协作场景 |
| #1829 | SSH 连接失败：exit code 255（疑似 shell 沙箱 TCP 22 出站阻断） | 5 | 沙箱环境网络限制问题，影响远程开发工作流 |
| #5134 | How to adjust the context length（128K → 1M） | 2 | 新 Issue，用户询问如何从 128K 调整至 1M context，当前无 UI 入口 |
| #5098 | Fleet config has one layer too many — and silent shadowing between the rest | 1 | 配置静默覆盖 bug，用户修改 `builder.toml` 后模型未生效 |
| #5099 | Sub-agent / Fleet spawn rejects unpinned model when session route provider differs | 1 | 跨 Provider 派生子 Agent 时的路由冲突，v0.9.4 release-blocker |
| #5123 | v0.9.4 release-blocker: agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED | 1 | v0.9.4 发布阻塞项：delegate builder 被标记为只读并自我阻塞 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| #5124 | fix(spawn): fall back to session route when role/profile model is foreign to session provider | OPEN | 修复 #5099：当子 Agent 模型不属于父会话 Provider 时，回退到 session route 而非硬拒绝 |
| #5125 | [WIP] Fix fleet config silent shadowing issue | OPEN | 修复 #5098：追踪 Fleet config 静默覆盖层，增加 `shadowed_layers_for()` 检测与警告 |
| #5126 | [WIP] Fix goal loop to allow completion beyond 10 continuations | OPEN | 允许 goal loop 突破 10 次 continuation 硬限制，通过 `max_continuations` 配置项控制 |
| #5107 | [WIP] Fix provider switching to update default model selection | OPEN | 修复切换 Provider 后 default model 未同步更新的 stale cross-origin 问题 |
| #5115 | [WIP] Detect and break non-progressing turn loops with recovery path | OPEN | 新增 no-progress watchdog，检测并恢复停滞的 agent turn 循环 |
| #5110 | [WIP] Isolate stale failed-agent state between sessions | OPEN | 隔离跨会话的 stale failed agent 状态，防止旧状态污染新会话 |
| #5127 | Add offline deterministic test corpus for web search/fetch retrieval path | OPEN | 新增 8 个离线确定性测试，覆盖 ranking、dedup、truncation、citation 等核心数据流 |
| #5133 | [WIP] Expose persistent goal-loop state and completion controls | OPEN | 通过 HTTP API 暴露 goal-loop 状态与完成控制，支持外部编排 |
| #5108 | [WIP] Make Responses API behavior provider-profiled | OPEN | 将 Responses API 行为从 provider 布尔开关重构为 typed profile 配置 |
| #5106 | [WIP] Rename DeepSeekClient and internal types to provider-neutral types | OPEN | 内部类型重命名，推进 provider-neutral 架构，无行为变更 |

---

## 5. 功能需求趋势

| 方向 | 关注度 | 说明 |
|------|--------|------|
| **Session 管理 UX** | ⭐⭐⭐⭐⭐ | sidebar 会话面板（#2934）、自动恢复（#425）、历史浏览是社区最热长期需求 |
| **Multi-Agent / Fleet 可靠性** | ⭐⭐⭐⭐⭐ | agent spawn 路由冲突、stale 状态隔离、goal loop 突破限制、worktree 竞态（#5123/#5110/#5126/#5109）集中爆发 |
| **Provider 中立化** | ⭐⭐⭐⭐ | 跨 Provider 派生子 Agent（#5099）、provider 切换后 model 同步（#5107）、类型重命名（#5106） |
| **大文本 / 长 Context 处理** | ⭐⭐⭐⭐ | context length 可调（#5134）、大文本 agent 卡死（#1425）、缓存命中率低（#1732） |
| **沙箱 / 网络限制** | ⭐⭐⭐ | SSH 出站阻断（#1829）、Termux 支持完成（#4242/#4236） |
| **调试工具** | ⭐⭐⭐ | `/dryrun` 预览请求（#1004）、vetting evidence API（#5132）、memory 管理 API（#5131） |
| **i18n / 本地化** | ⭐⭐ | 文案展示不全（#998）、i18n 覆盖扩展（#790） |

---

## 6. 开发者关注点

**高频痛点 Top 5：**

1. **Agent spawn 表面过于复杂**：v0.9.4 发布阻塞，builder/gates-shell-writer 类 delegate 因权限/路由问题自我阻塞，无法执行 assigned gates（#5123）。
2. **跨 Provider 模型路由冲突**：当父会话使用 xai/moonshot 而子 Agent 默认 deepseek-v4-flash 时，spawn 被硬拒绝（#5099/#5124）。
3. **Fleet config 静默覆盖**：编辑 `builder.toml` 后模型未生效，存在隐藏的配置层覆盖问题（#5098/#5125）。
4. **大文本多 agent 处理卡死**：`agent_wait` 超时导致会话中断，10 个子 Agent 全部 Running 后挂起（#1425）。
5. **诊断与运行时行为不一致**：`deepseek doctor` 全绿但 `deepseek run` 无法启动（#689），削弱用户对诊断工具的信任。

**其他关注：**
- SSH 沙箱内 TCP 22 出站被阻断（#1829）
- NVIDIA NIM API 404 错误（#1482）
- VS Code 内 YOLO Agent 导致编辑器崩溃（#1651）
- 中文 UI 文案截断缺乏 hover 提示（#998）
- 无 UI 调整 context length（#5134）

---

**总结**：v0.9.4 正处于发布前关键修复窗口，核心焦点集中在 Agent spawn 路由、Fleet 配置、以及多 Agent 协作可靠性。Termux 官方支持已完成 QA 并关闭。社区对 Session 管理 UX 和跨 Provider 兼容性的需求持续升温。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*