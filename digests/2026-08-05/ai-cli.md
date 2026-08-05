# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 01:41 UTC | 覆盖工具: 9 个

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
**日期：2026-08-05** | **分析师：Agnes（Sapiens AI）**

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**“头部领跑、差异化竞争、稳定性成为新瓶颈”**的发展态势。Claude Code 与 OpenAI Codex 作为企业级主力，社区活跃度最高且迭代频繁；OpenCode、Gemini CLI 通过多模型支持与协议扩展形成差异化；DeepSeek TUI 等开源项目聚焦构建性能与 Runtime API。Windows 平台稳定性、长上下文可靠性、MCP/ACP 协议标准化成为行业共同挑战。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | 版本发布 | 核心动态 |
|------|-------------|---------|----------|----------|
| **Claude Code** | 10 | 8 | v2.1.222（安全修复） | worktree 隔离、Hook 绕过修复 |
| **OpenAI Codex** | 10 | 10 | 4× alpha（Rust CLI） | Windows 性能问题爆发 |
| **Gemini CLI** | 10 | 10 | 无 | 安全修复集中提交，子代理问题突出 |
| **Kimi Code CLI** | 6 | 3 | 无 | 长上下文可靠性，ACP 协议完善 |
| **OpenCode** | 11 | 12 | v1.18.13 | DeepSeek V4 Flash 稳定性问题集中 |
| **Pi** | 10 | 13 | 无 | Compaction 故障（企业用户痛点） |
| **Qwen Code** | 10 | 9 | v0.21.5 / preview | Tauri 迁移、钩子安全加固 |
| **DeepSeek TUI** | 10 | 10 | 无（v0.9.4 进行中） | 构建性能优化（68 万行 crate） |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|----------|----------|
| **Windows 平台稳定性** | Codex、Claude Code、OpenCode、Kimi Code | GPU 崩溃、进程暴增、IME 字符重复、Bash 解析错误 |
| **长上下文可靠性** | Kimi Code、Claude Code、DeepSeek TUI | 500K+ tokens 后 Agent 漂移、压缩阈值不一致、静默降级 |
| **MCP/ACP 协议扩展** | Gemini CLI、Kimi Code、OpenCode、Qwen Code | 模型列表广播、权限切换、工具暴露、会话同步 |
| **会话管理与 Compaction** | Pi、Claude Code、OpenCode、Gemini CLI | 错误恢复、断线续接、token 成本优化 |
| **工具安全与权限边界** | Claude Code、Qwen Code、Gemini CLI | Hook 绕过、证书泄漏、未授权网络请求 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级安全隔离、Hook 系统 | 开发者、安全合规团队 | TypeScript，worktree 隔离 |
| **OpenAI Codex** | 多 Agent 工作流、桌面体验 | 企业用户、IDE 集成 | Rust CLI + Electron 桌面 |
| **Gemini CLI** | 模型灵活性、开源协议扩展 | 研究社区、私有化部署用户 | 支持 SGLang/OpenAI 兼容端点 |
| **Kimi Code CLI** | 长上下文 Agent、ACP 协议 | 中文用户、移动端场景 | Moonshot AI 模型生态 |
| **OpenCode** | 多模型集成、IDE 插件 | 多 Provider 用户 | Go，DeepSeek/V4 Flash 支持 |
| **Pi** | GitHub Copilot 集成、企业部署 | GitHub Enterprise 用户 | Bun/Node/Deno 多运行时 |
| **Qwen Code** | 开源本地化、Tauri 迁移 | 中国开发者、私有化部署 | Rust + Tauri（替代 Electron） |
| **DeepSeek TUI** | 构建性能、Runtime API | 开源贡献者、自定义客户端 | Rust TUI，68 万行代码优化 |

---

## 5. 社区热度与成熟度

**高活跃度（Issue/PR 数量多、讨论激烈）：**
- **Codex**：#11023（Linux 桌面需求）获 917👍，#25719（macOS 性能）获 387👍
- **OpenCode**：#16017（usage API）获 126👍，#34498（SKILL.md）获 48👍
- **Claude Code**：#13378（换行策略）获 72👍，安全漏洞修复受高度关注

**快速迭代期（版本频繁、PR 活跃）：**
- **Codex**：24 小时内发布 4 个 alpha 版本
- **Qwen Code**：v0.21.5 正式版 + preview 并行
- **DeepSeek TUI**：v0.9.4 release train 持续更新

**成熟稳定期（问题聚焦体验优化）：**
- **Claude Code**：安全修复为主，功能迭代平稳
- **Gemini CLI**：安全加固集中提交，子代理问题待解
- **Pi**：Compaction 等企业级问题修复

---

## 6. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **Windows 性能成为全行业痛点** | Codex（WMI/PowerShell 暴增）、Claude Code（MSIX GPU 崩溃）、Kimi Code（IME bug） | Windows 用户需关注版本更新，企业部署建议优先 macOS/Linux |
| **长上下文可靠性边界显现** | Kimi Code（500K+ 漂移）、DeepSeek TUI（128K 压缩阈值） | 复杂多步任务需分段处理，避免单会话超长 |
| **MCP/ACP 协议标准化竞争** | Gemini CLI（SGLang 支持）、Kimi Code（ACP 权限切换）、Qwen Code（ACP IDE 集成） | 生态集成能力将成为工具差异化关键 |
| **企业级 Compaction 能力关键** | Pi（Compaction 故障）、Claude Code（会话恢复断裂） | 企业用户需验证长会话管理稳定性 |
| **钩子安全成为新战场** | Claude Code（PreToolUse 绕过）、Qwen Code（钩子信任边界） | 安全策略配置需谨慎，建议启用 auto-allow 白名单 |
| **构建性能优化受重视** | DeepSeek TUI（68 万行 crate）、OpenCode（渲染内存优化） | 开源项目将加速代码拆分与依赖精简 |

---

**结论**：AI CLI 工具生态正从“功能竞争”转向“稳定性与体验竞争”。Windows 平台、长上下文可靠性、企业级会话管理成为下一阶段关键战场。开发者在选择工具时应优先考虑目标平台的稳定性记录、模型生态灵活性及协议扩展能力。

*报告生成时间：2026-08-05 | 数据来源：GitHub 各工具仓库 Issue/PR API*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-08-05** | 分析师：Agnes

---

## 1. 热门 Skills 排行

| 排名 | PR | Skill 名称 | 状态 | 社区热度 |
|:---:|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` 修复 | OPEN | 🔥🔥🔥 核心工具链 bug，影响所有 Skill 作者 |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | OPEN | 🔥🔥🔥 输出质量门禁，通用型审计 Skill |
| 3 | [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | OPEN | 🔥🔥 覆盖完整测试栈（单元/组件/哲学） |
| 4 | [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | OPEN | 🔥 文档排版质量控制 |
| 5 | [#1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` | OPEN | 🔥 清理规划产物堆积问题 |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | OPEN | 🔥 元 Skill：Skill 质量与安全审计 |
| 7 | [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | OPEN | 颜色知识专家 Skill |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | OPEN | 复古像素游戏开发 |

**讨论焦点：**
- **#1298 / #1099 / #1050 / #1323** 形成一组：`run_eval.py` 的 Windows 兼容性与召回率 bug 已被多次独立复现，是当前 Skill 作者体验的最大痛点
- **#1367** 提出"机械验证 + 四维推理质检"的通用审计范式，与 **#83** 形成技能质量保障的产品矩阵
- **#723** 覆盖测试哲学→单元测试→React 组件测试的完整栈，呼应 Issue #202 对 Skill 最佳实践的讨论

---

## 2. 社区需求趋势

从 Issues 中提取的五大方向：

| 方向 | 代表 Issue | 核心诉求 |
|---|---|---|
| **🏢 企业协作与安全治理** | [#492](https://github.com/anthropics/skills/issues/492) · [#228](https://github.com/anthropics/skills/issues/228) · [#1175](https://github.com/anthropics/skills/issues/1175) | 防止社区技能冒充官方技能（信任边界问题）；组织级技能共享；SharePoint 等企业系统集成安全 |
| **🧪 测试与质量保证** | [#723](https://github.com/anthropics/skills/pull/723) · [#412](https://github.com/anthropics/skills/issues/412) · [#1385](https://github.com/anthropics/skills/issues/1385) | 测试模式 Skill；Agent 治理（策略执行/威胁检测/审计追踪）；推理质量门禁流水线 |
| **🛠️ Skill 作者工具链** | [#556](https://github.com/anthropics/skills/issues/556) · [#202](https://github.com/anthropics/skills/issues/202) · [#1169](https://github.com/anthropics/skills/issues/1169) | 修复 run_eval 触发检测 bug；skill-creator 符合最佳实践；描述优化循环收敛 |
| **📄 文档与文件格式** | [#514](https://github.com/anthropics/skills/pull/514) · [#486](https://github.com/anthropics/skills/pull/486) · [#538](https://github.com/anthropics/skills/pull/538) · [#541](https://github.com/anthropics/skills/pull/541) | 排版控制；ODT 格式支持；PDF/DOCX 大小写与 ID 冲突修复 |
| **💾 上下文与状态管理** | [#1329](https://github.com/anthropics/skills/issues/1329) · [#1487](https://github.com/anthropics/skills/issues/1487) | 紧凑记忆表示法；防止 Skill 一次性注入 156k token 耗尽上下文 |

**新兴方向：**
- **#16** 提出将 Skill 暴露为 MCP 接口，推动 Skill 标准化 API
- **#181** 引入 SAP 开源预测模型，企业 AI 分析场景起步

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、关注度高，具备近期合并潜力：

| PR | Skill | 潜力理由 |
|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | 通用型质量门禁，跨项目/跨栈可用；与 Issue #1385 形成呼应 |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 覆盖完整测试栈，痛点明确（Issue #202 推动 Skill 质量提升） |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | 填补文档质量空白，与现有 PDF/DOCX 修复 PR 形成系列 |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | 元 Skill 互补：质量分析 + 安全审计，构建 Skill 生态治理基础设施 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` | 解决 Issue #1417 明确提出的规划产物堆积问题，命名精确 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | 垂直领域深度 Skill，覆盖 ISCC-NBS/Munsell/CAM16 等专业体系 |

**风险预警：**
- **#1298 / #1099 / #1050 / #1323** 是上述 Skill 作者能否正常测试的前提——`run_eval.py` 未修复则所有 Skill 作者都在"噪声"上优化描述
- **#492** 安全问题若不官方回应，可能阻碍社区 Skill 的广泛采用

---

## 4. 生态洞察

> **当前社区最集中的诉求是：在保证 Skill 质量与生态安全的前提下，让 Skill 作者工具链（尤其是 `run_eval.py` 评估循环）在跨平台环境下真正可用。**

这一诉求贯穿技术层（Windows 兼容性 bug）、流程层（描述优化失效）和治理层（官方/社区信任边界问题），是社区贡献活跃度提升的关键瓶颈。

---



# Claude Code 社区动态日报
**日期：2026-08-05** | 数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览

Anthropic 发布 **Claude Code v2.1.222**，重点修复 worktree 隔离会话的安全漏洞及 PreToolUse hook 绕过问题。社区本周高度关注**图像 API 错误持续消耗额度**、**text block 静默丢失**、以及**Windows MSIX 版 GPU 崩溃**三大核心体验问题，Bug 追踪热度显著提升。

---

## 2. 版本发布

### v2.1.222（2026-08-05）
- **安全修复**：worktree-isolated sessions 及其 subagents 此前可针对主仓库执行破坏性 git 操作，现隔离策略已全面覆盖所有会话类型的文件编辑与 Bash 执行
- **Hook 修复**：修复 PreToolUse auto-allow hooks 在后台代理任务中绕过工具限制的问题

🔗 [Releases · anthropics/claude-code](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues

| # | 问题 | 评论 | 👍 | 优先级 |
|---|------|------|----|--------|
| #62466 | Image 无法处理 API 错误持续消耗用量额度 | 30 | 20 | 🔴 高 |
| #74260 | Assistant text blocks 被静默丢弃，不渲染且不写入 transcript | 24 | 15 | 🔴 高 |
| #13378 | 2-space 缩进 + 80 字符硬换行导致复制粘贴错乱 | 15 | 72 | 🟡 中 |
| #23704 | Read tool PDF 支持依赖 poppler-utils 但未文档化 | 15 | 19 | 🟡 中 |
| #21108 | Claude 启动时未执行任何命令即访问 git origin 服务器 | 13 | 15 | 🟡 中 |
| #81275 | Claude Desktop MSIX Browser pane 触发 GPU 崩溃导致整应用退出 | 11 | 0 | 🔴 高 |
| #72248 | Workflow tool 将 JSON 对象/数组以字符串形式传入脚本 | 9 | 0 | 🟡 中 |
| #82536 | `--continue` 无法恢复 `-p` 交互模式创建的会话 | 7 | 0 | 🟡 中 |
| #66563 | Read tool 误报未加密 PDF 为"密码保护" | 6 | 1 | 🟢 低 |
| #79953 | Workflow 内部 agent() 调用不受 PreToolUse 钩子与运行时预算约束 | 2 | 0 | 🟡 中 |

### 重点 Issue 详解

**#62466 — Image API 错误持续消耗用量额度**
社区反馈最强烈的 bug 之一：图像无法处理时 API 仍持续计费，直接侵害用户权益（20👍，30评论）。

🔗 [Issue #62466](https://github.com/anthropics/claude-code/issues/62466)

**#74260 — text block 静默丢失（含 adaptive thinking）**
模型在同一 turn 内输出的 text block 若后接 thinking，则 text 被静默丢弃且不在 transcript JSONL 中留存，严重影响调试与审计。

🔗 [Issue #74260](https://github.com/anthropics/claude-code/issues/74260)

**#13378 — 2-space 缩进与 80 字符换行破坏复制粘贴**
用户呼声最高（72👍），希望提供可配置的换行/缩进策略，避免代码块复制后格式错乱。

🔗 [Issue #13378](https://github.com/anthropics/claude-code/issues/13378)

**#21108 — 启动时未授权访问 git origin**
隐私/安全敏感问题：Claude Code 在用户未发出任何命令前即发起 git origin 网络请求，引发企业用户关注。

🔗 [Issue #21108](https://github.com/anthropics/claude-code/issues/21108)

**#81275 — MSIX Browser pane GPU 崩溃**
Claude Desktop Windows 版打开 Browser 面板时 Chromium GPU 进程以固定退出码 `0x60C201E` 崩溃，Intel/NVIDIA/WARP 均受影响，应用完全退出。

🔗 [Issue #81275](https://github.com/anthropics/claude-code/issues/81275)

**#23704 — PDF 读取依赖 poppler-utils 未文档化**
Read tool 文档称支持 PDF，但实际依赖系统级工具 `poppler-utils`，容器环境默认不安装，用户无提示失败。

🔗 [Issue #23704](https://github.com/anthropics/claude-code/issues/23704)

---

## 4. 重要 PR 进展

| PR | 作者 | 类型 | 内容摘要 |
|----|------|------|----------|
| #83999 | RerankerGuo | Bugfix | 修复 `gh` 包装脚本中缺值 flag 的校验，防止不完整命令绕过参数检查 |
| #83995 | RerankerGuo | Bugfix | 修复 `--add-label` / `--remove-label` 缺值时因 `set -u` 导致未绑定变量报错 |
| #83993 | RerankerGuo | Bugfix | 阻止 `comment-on-duplicates.sh` 将触发 issue 自身误报为重复项 |
| #83992 | RerankerGuo | Bugfix | `test-hook.sh` 新增 `--expect allow\|deny\|ask` 参数，精确验证 hook 决策 |
| #83990 | RerankerGuo | Bugfix | `test-hook.sh` 新增 `jq` 依赖检测，避免将 jq 缺失误报为无效 JSON |
| #83890 | KrypticKode007 | 新功能 | 新增 `pylint.yml` 配置文件 |
| #83374 | iCodeCraft | 文档 | 补充 `MessageDisplay` hook 事件的流式语义文档，更新 skill 快速参考表 |
| #83738 | KrypticKode007 | Bugfix | 修复 `claude install` 在部分 Linux 发行版上创建 `%h` 字面量符号链接而非展开 `$HOME` 的问题 |

🔗 [PR #83999](https://github.com/anthropics/claude-code/pull/83999) · [PR #83995](https://github.com/anthropics/claude-code/pull/83995) · [PR #83993](https://github.com/anthropics/claude-code/pull/83993) · [PR #83992](https://github.com/anthropics/claude-code/pull/83992) · [PR #83990](https://github.com/anthropics/claude-code/pull/83990) · [PR #83890](https://github.com/anthropics/claude-code/pull/83890) · [PR #83374](https://github.com/anthropics/claude-code/pull/83374) · [PR #83738](https://github.com/anthropics/claude-code/pull/83738)

---

## 5. 功能需求趋势

从本期 Issue 中可提炼出以下社区关注方向：

| 方向 | 典型 Issue | 需求密度 |
|------|-----------|---------|
| **会话管理与上下文控制** | #82536、#82144、#79293、#83971 | ⭐⭐⭐⭐ |
| **工具安全与权限隔离** | #64706、#79953、#21108 | ⭐⭐⭐⭐ |
| **Windows/MSIX 稳定性** | #81275、#83130、#83243 | ⭐⭐⭐ |
| **浏览器面板（Browser pane）** | #81275、#74902、#83997 | ⭐⭐⭐ |
| **计费与账号体验** | #62466、#82529、#83973 | ⭐⭐⭐ |
| **插件/Hook 开发体验** | #55875、#83981、#83374 | ⭐⭐ |
| **TUI / Bash 工具改进** | #64474、#80834、#13378 | ⭐⭐ |
| **多模型/自适应思考** | #74260、#84001 | ⭐⭐ |

---

## 6. 开发者关注点

**🔴 高频痛点 Top 5：**

1. **额度消耗异常** — Image 处理失败仍持续计费（#62466），是最直接影响用户体验的财务问题
2. **上下文丢失不可感知** — text block 静默丢弃（#74260）、compaction 后 skill 重注入成本过高（#82144）导致调试困难
3. **Windows 桌面端稳定性** — MSIX 版本 GPU 崩溃（#81275、#83130）和 Bash tool 解析错误（#83243）集中爆发
4. **会话中断与恢复断裂** — `--continue` 与 `-p` 模式不兼容（#82536）、后台会话上下文丢失（#83971）
5. **工具权限边界模糊** — PreToolUse hooks 可被绕过（v2.1.222 已修复）、Workflow 内部 agent 不受预算约束（#79953）、启动时未经授权访问 git（#21108）

**🟡 持续呼声：**
- 可配置的代码换行/缩进策略（#13378，72👍）
- PDF 读取的依赖声明与自动检测（#23704）
- Browser pane 多 profile 标识稳定性（#74902）
- Desktop 多仓库 clone 的项目标签区分（#81628）

---

*本报告由 Agnes（Sapiens AI）生成，数据截止 2026-08-05。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-08-05**

---

## 1. 今日速览

过去24小时内，Codex 发布了 **4 个 Rust alpha 版本**（0.147.0-alpha.7 至 alpha.6.1），持续迭代底层 CLI 框架。社区焦点集中在 **Windows 桌面端的严重性能问题**——多起 Issue 反映 WMI轮询、PowerShell进程暴增导致系统级卡顿，已引发大量用户关注（#25719 获387个👍，#33776 为今日新增热点）。同时，**Linux 桌面版支持**（#11023）以917个👍持续领跑功能需求榜。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| rust-v0.147.0-alpha.7 | CLI | 0.147.0 系列最新 alpha |
| rust-v0.147.0-alpha.6.4 | CLI | 0.147.0 系列 alpha |
| rust-v0.147.0-alpha.6.3 | CLI | 0.147.0 系列 alpha |
| rust-v0.147.0-alpha.6.1 | CLI | 0.147.0 系列 alpha |

> 所有版本均为 Rust CLI 框架 alpha 预览版，未见桌面应用（Electron）大版本更新。

---

## 3. 社区热点 Issues

### 🔥 高关注度 Issue（按 👍 排序）

**1. [Linux 桌面版需求] #11023 — 198 评论 / 917 👍**
- **摘要**：用户请求官方 Linux 桌面客户端，当前 macOS 版因 #10432 问题在笔记本上几乎无法使用，Linux 成为替代选择。
- **重要性**：长期呼声最高的功能需求，社区参与度极高，反映 Linux 开发者对原生桌面体验的强烈诉求。
- [链接](https://github.com/openai/codex/issues/11023)

**2. [macOS CPU/内存失控] #25719 — 80 评论 / 387 👍**
- **摘要**：Codex Desktop 反复触发 `syspolicyd`/`trustd` 进程，导致 CPU 和内存 runaway。
- **重要性**：macOS 用户核心痛点，影响日常使用体验，涉及系统级进程异常。
- [链接](https://github.com/openai/codex/issues/25719)

**3. [/undo 功能需求] #9203 — 68 评论 / 372 👍**
- **摘要**：请求为 TUI 添加 `/undo` 命令，防止 Codex 意外删除未 git 跟踪的文件或修改未提交内容。
- **重要性**：实用安全功能，多位用户反馈"多次被坑"，属于高频刚需。
- [链接](https://github.com/openai/codex/issues/9203)

**4. [GPU 占用过高] #16857 — 38 评论 / 46 👍**
- **摘要**：App "思考"期间因微小动画导致 GPU 占用过高。
- **重要性**：影响 macOS Apple Silicon 设备续航与发热。
- [链接](https://github.com/openai/codex/issues/16857)

**5. [Windows Sandbox 错误] #30009 — 30 评论 / 10 👍**
- **摘要**：Windows 沙箱环境下 `apply_patch` 失败。
- **重要性**：Windows 用户沙箱工作流的阻塞性 Bug。
- [链接](https://github.com/openai/codex/issues/30009)

**6. [Windows 进程爆炸] #33776 — 29 评论 / 26 👍 ⭐ 今日新增**
- **摘要**：`ChatGPT.exe` 生成数百个 `taskkill.exe`/`conhost.exe` 进程，引发 WMI 风暴和 DWM 降级。
- **重要性**：今日新增高优 Windows 性能 Bug，影响系统稳定性。
- [链接](https://github.com/openai/codex/issues/33776)

**7. [MCP 工具未暴露] #19425 — 28 评论 / 5 👍**
- **摘要**：自定义 stdio MCP 服务器被 `tools/list` 发现，但工具未暴露给 Desktop threads。
- **重要性**：MCP 集成回归问题，影响扩展能力。
- [链接](https://github.com/openai/codex/issues/19425)

**8. [Windows PowerShell 轮询] #25453 — 22 评论 / 6 👍**
- **摘要**：Codex Desktop 每秒派生 `powershell.exe` 进行全量进程轮询，导致高 CPU。
- **重要性**：Windows 平台系统性性能缺陷。
- [链接](https://github.com/openai/codex/issues/25453)

**9. [MCP 进程泄漏] #30408 — 22 评论 / 6 👍**
- **摘要**：每个新 thread 派生独立 MCP 进程且永不回收，内存泄漏达 9+ GB RSS。
- **重要性**：资源泄漏严重，长时间使用必然导致系统变慢。
- [链接](https://github.com/openai/codex/issues/30408)

**10. [子 Agent 忽略模型设置] #28719 — 5 评论 / 6 👍**
- **摘要**：Subagents 忽略用户指定的模型和 reasoning 设置，继承父 thread 配置。
- **重要性**：多 Agent 工作流的核心功能缺陷。
- [链接](https://github.com/openai/codex/issues/28719)

---

## 4. 重要 PR 进展

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| #36998 | 支持延迟自定义工具（deferred custom tools）在 tool search 中 | ✅ Closed | 将顶层 freeform 工具纳入搜索索引并标记延迟加载，序列化后转换回可执行工具规范。 |
| #37000 | 跨插件加载保持共享 skill 缓存新鲜 | ✅ Closed | 按文件系统和插件快照身份缓存 skill 快照，避免重复加载陈旧插件数据。 |
| #36993 | 支持分页 thread 的 `includeTurns` 读取 | ✅ Closed | 为需要历史全量的客户端重构分页历史为完整 projected turns。 |
| #36992 | 允许注入 model catalog 缓存 | ✅ Closed | 新增 `ModelsCache` 异步接口，支持调用方提供自定义缓存实现。 |
| #36990 | 移除遗留协作模式变体 | ✅ Closed | 删除隐藏的 `PairProgramming`/`Execute` 变体，简化为仅 `Default` 和 `Plan`。 |
| #36989 | 保留共享内置 skill 缓存 | ✅ Closed | 确保禁用 bundled skills 的服务不会删除其他服务仍使用的缓存文件。 |
| #36987 | 添加可选并发 exec-server 请求分发 | ✅ Closed | 新增 `--concurrent-requests` 标志，防止长请求阻塞健康检查。 |
| #36986 | 为 ChatGPT 请求添加进程级 PSP 路由 | ✅ Closed | 新增隐藏 `--psp` 运行时标志，为第一方 ChatGPT 请求附加认证 cookie。 |
| #36984 | 在 HTTP 客户端中支持配置的 ChatGPT cookies | ✅ Closed | 让 `HttpClientFactory` 携带额外 ChatGPT cookies 并在启用时附加。 |
| #36983 | 为可信 staging MCP 服务器保留 ChatGPT 认证 | ✅ Closed | 匹配 `chatgpt-staging.com` 的 MCP 服务器视为可信，继续信任生产环境 origin。 |

> 注：以上 PR 均通过 `copyberry[bot]` 自动合入，反映 OpenAI 内部持续优化缓存、认证、工具发现和并发管理。

---

## 5. 功能需求趋势

从今日 Issues 中提炼出以下社区关注方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **跨平台桌面支持** | #11023 (Linux)、#25719 (macOS 性能) | 🔥🔥🔥 |
| **Windows 性能优化** | #33776、#25453、#29499、#36025、#34158 | 🔥🔥🔥🔥 |
| **安全/撤销机制** | #9203 (/undo)、#30009 (sandbox) | 🔥🔥 |
| **MCP 扩展生态** | #19425、#30408 | 🔥🔥 |
| **多 Agent 工作流** | #28719、#34700 | 🔥 |
| **CLI/TUI 体验** | #33037 (冻结)、#22585 (链接渲染) | 🔥 |
| **会话管理** | #21079 (CLI 历史导入)、#33589 (删除聊天) | 🔥 |

---

## 6. 开发者关注点

### ⚠️ 核心痛点

1. **Windows 平台系统性性能问题**
   - WMI Provider Host CPU 饱和（#29499、#32562）
   - PowerShell/conhost.exe 进程暴增（#33776、#25453、#36025、#36176）
   - 系统级鼠标卡顿（#34158、#36025）
   - **共识**：Windows 版存在架构层面的轮询机制缺陷，需彻底重构进程发现逻辑。

2. **MCP 服务器资源泄漏**
   - 每 thread 派生独立 MCP 进程且永不回收（#30408）
   - 自定义工具未在 Desktop threads 中暴露（#19425）
   - **共识**：MCP 生命周期管理存在设计缺陷，亟需修复。

3. **macOS 系统权限进程触发**
   - `syspolicyd`/`trustd` 反复触发（#25719）
   - GPU 动画占用过高（#16857）

4. **功能缺失**
   - `/undo` 命令缺失（#9203）
   - Linux 桌面版缺失（#11023）
   - 子 Agent 无法独立设置模型（#28719）
   - 无法删除 macOS 聊天（#33589）

### 📊 社区情绪

- **Windows 用户**：焦虑程度高，多个 Issue 描述"系统级卡顿"，要求优先修复。
- **macOS 用户**：对性能问题容忍度较低，关注续航和发热。
- **CLI/TUI 用户**：对 `/undo`、会话导入等效率工具需求迫切。
- **整体**：对 OpenAI 快速迭代 alpha 版本持肯定态度，但 Desktop 端稳定性需大幅提升。

---

*报告生成时间：2026-08-05 | 数据来源：github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报
**日期：2026-08-05**

---

## 1. 今日速览

今日 Gemini CLI 仓库无新版本发布，但社区活跃度依然较高，共追踪 50 个 Issues 和 24 个 PRs。安全修复成为焦点——PR #28691 修复了变量展开绕过的安全漏洞（GHSA-wpqr-6v78-jr5g），多项 PR 集中改进 OAuth 认证流程和错误处理体验。子代理（Subagent）相关 Bug 仍是社区关注热点。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 热度 | 重要性说明 |
|---|-------|------|-----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 达到 MAX_TURNS 后被误报为 GOAL success | 👍 2 · 12 评论 | **P1 Bug** — 子代理未完成任务却被标记为成功，会误导用户以为分析已完成，严重影响调试可信度。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 永久挂起 | 👍 8 · 8 评论 | **P1 Bug** — 社区反响最强烈（8 票），通用代理在简单操作（如创建文件夹）时也会永久挂起，用户反馈等待超一小时无响应。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 基于零依赖 OS 沙箱利用模型 Bash 亲和性 | 👍 1 · 8 评论 | **P2 增强** — 提出让 Gemini 3 模型以原生 bash 方式操作，结合 POSIX 工具链探索代码库，是架构级改进提案。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估框架（Behavioral Evals） | 👍 0 · 7 评论 | 官方追踪 Epic，已生成 76 个行为测试覆盖 6 个 Gemini 模型，持续完善评估基础设施。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取与代码库映射评估 | 👍 1 · 7 评论 | 官方 Epic，探究 AST-aware 工具能否减少 token 消耗、提升代码导航精度，关乎底层工具链优化方向。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 未充分使用 Skills 和 Subagents | 👍 0 · 6 评论 | 社区反馈 Gemini 不会主动调用自定义 Skills（如 gradle、git），需显式指令才触发，影响自动化体验。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 对低信号会话无限重试 | 👍 0 · 5 评论 | **P2 Bug** — Auto Memory 因未成功读取 transcript 而无法标记会话为已处理，导致同一低价值会话反复出现。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行完成后仍显示"Waiting input" | 👍 3 · 4 评论 | **P1 Bug** — 简单命令执行完毕后终端卡在"Awaiting user input"状态，用户无法继续操作。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 browser subagent 失败 | 👍 1 · 4 评论 | browser 代理在 Wayland 环境无法运行，对 Linux 用户影响较大，标记为 agent/browser 领域 Bug。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 settings.json 配置覆盖 | 👍 0 · 3 评论 | **P2 Bug** — Browser Agent 完全忽略全局/项目级 settings.json 中的配置（如 maxTurns），破坏了用户自定义能力。 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 说明 |
|---|----|------|------|
| [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) | fix(core): 阻止 `$VAR` / `${VAR}` 变量展开绕过 | 🔒 安全 | 修复 `detectBashSubstitution()` 和 `detectPowerShellSubstitution()` 中的检查缺陷，防止绕过此前 GHSA 安全修复，含防御性加固。 |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | fix(core): Cloud Workstations OAuth 重定向 URI 动态解析 | 🔒 安全 | 解决 Google Cloud Workstations VM 内 OAuth 2.0 认证流程失败问题——浏览器运行在本地而非 VM，静态配置 `localhost` 回调导致认证中断。 |
| [#28690](https://github.com/google-gemini/gemini-cli/pull/28690) | feat(ingestion): Issue 评论处理与重新分类工作流 | 🆕 功能 | Caretaker Agent 新增处理 `issue_comment.created` Webhook 事件的能力，支持通过 `@caretaker-agent` 提及或 `/caretaker triage` 命令触发重新分类。 |
| [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) | feat(core,cli): 支持 SGLang 和本地 OpenAI 兼容端点 | 🆕 功能 | **重大功能** — 允许连接 SGLang 及本地 OpenAI 兼容推理后端，扩展模型部署灵活性，降低对 Google 原生端点的依赖。 |
| [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) | fix(core,cli): 修复上下文损坏和配额错误回退 | 🐛 修复 | 解决工具执行被中断或遇到配额回退时出现的上下文损坏和模型"自动补全"前缀续写行为，增强历史记录防御性保护。 |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | fix(core,cli): 修复 `/compress` 会话恢复失败和配额错误导致工具响应丢失 | 🐛 修复 | 解决 `/compress` 命令执行失败导致的会话恢复错误，以及配额限制时工具响应丢失的问题。 |
| [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | fix(cli): 修复窄宽度下 ghost text 换行无限循环 | 🐛 修复 | 修复 CJK/emoji 等宽字符在窄终端中导致 `getGhostTextLines` 无限循环的 Bug，含回归测试。 |
| [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) | fix(mcp): 在同意提示中显示完整 MCP Server 配置 | 🐛 修复 | MCP 扩展更新同意提示此前仅显示 command/args/httpUrl，现在补充展示 `env`、`cwd`、`headers` 等执行相关字段。 |
| [#28680](https://github.com/google-gemini/gemini-cli/pull/28680) | fix(core): 在验证阶段拒绝 A2A OpenID Connect 认证 | 🔒 安全 | 修复 A2A 远程代理连接中 OpenID Connect 认证在配置验证时通过、实际使用时立即失败的问题。 |
| [#28678](https://github.com/google-gemini/gemini-cli/pull/28678) | fix(core): 防止 OAuth 回调超时泄漏并释放资源 | 🔒 安全 | 集中处理 OAuth 回调服务器清理，防止残留超时回调和内存泄漏。 |

---

## 5. 功能需求趋势

- **模型后端灵活性**：PR #28681 引入 SGLang 和本地 OpenAI 兼容端点支持，反映社区对降低厂商锁定、支持私有化部署的强烈需求。
- **评估基础设施**：Issue #24353 和 #22745 均指向官方正在建设的评估体系（Behavioral Evals + AST-aware 工具），说明项目正从功能驱动转向质量验证驱动。
- **子代理系统成熟化**：多个 Issue 围绕 Subagent（#22323、#21409、#21968、#21763）展开，社区希望子代理更加可靠、可观测、可追溯。
- **安全与认证强化**：今日 4 个安全相关 PR（#28691、#28688、#28680、#28678）集中提交，表明项目正在系统性加固安全层面。
- **Auto Memory 可靠性**：Issue #26522、#26525、#26523 共同指向 Auto Memory 系统的三个维度问题（无限重试、日志脱敏、无效 patch 处理），社区期待更稳健的记忆机制。

---

## 6. 开发者关注点

| 痛点/需求 | 涉及 Issue |
|-----------|-----------|
| **子代理行为不可预测**：挂起、误报成功、未充分利用 Skills — 这是当前最大体验盲区 | #22323, #21409, #21968, #21763 |
| **终端交互卡死**：命令完成后仍显示"Waiting input"，或交互式提示无法自动化处理 | #25166, #22465, #21924 |
| **Wayland/Linux 兼容性**：Browser Agent 在 Wayland 环境下完全失效 | #21983 |
| **配置覆盖不生效**：Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等设置 | #22267 |
| **临时脚本污染工作区**：模型在随机目录生成临时脚本，增加清理负担 | #23571 |
| **工具数量上限**：超过 128 个工具时触发 400 错误，缺乏自动限流机制 | #24246 |
| **Bugreport 缺乏子代理上下文**：`/bug` 报告仅包含主会话，不包含子代理内部信息 | #21763 |
| **destructive 操作缺乏保护**：`git reset --force` 等危险命令未被有效阻止 | #22672 |

---

*报告生成时间：2026-08-05 · 数据来源：github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报
**日期：2026-08-05**

---

## 1. 今日速览

过去24小时无新版本发布。社区活跃度集中在长上下文 Agent 可靠性问题（Issue #2586）与 Windows 平台输入法 Bug（Issue #2584）。ACP 协议与远程会话控制成为持续关注的功能方向。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 热度 | 重要性 |
|---|------|------|------|--------|
| #2586 | Agent 在上下文超过 500K tokens 时可靠性急剧下降 | CLOSED | 今日更新 | 🔴 **高** |
| #2587 | Kimi CLI 正常推进会话时异常退出 | OPEN | 今日更新 | 🟡 **中** |
| #2584 | Windows 平台泰语等 IME 字符重复输入 | OPEN | — | 🟡 **中** |
| #2583 | ACP 协议支持模型列表广播与会话中切换 | OPEN | — | 🟡 **中** |
| #1282 | Remote Control：从任意设备继续本地会话 | OPEN | 👍 24 | 🟢 **功能需求** |
| #1283 | Memory System：跨会话持久上下文记忆 | OPEN | — | 🟢 **功能需求** |

**重点解读：**

- **[Issue #2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)** — 社区实测发现 Agent 在上下文填充超过约 500K tokens 后出现重复动作循环、指令漂移等问题，已关闭但值得开发者关注长会话的稳定性边界。

- **[Issue #2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)** — 用户反馈 Kimi Code v0.29.2 在正常推进会话时异常退出，使用 K3 high 模型，涉及 Windows 平台稳定性，需跟进。

- **[Issue #2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)** — Windows 11 上泰语及其他基于 IME 的语言在提示框中输入时字符被重复，影响非拉丁语系用户体验。

- **[Issue #2583](https://github.com/MoonshotAI/kimi-cli/issues/2583)** — ACP 客户端（如 Happy Coder、Zed）无法发现可用模型列表及会话中切换模型，影响 IDE/移动端集成体验。

- **[Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)** — 远程续接本地会话功能（跨设备）获社区高度关注，已有 24 个 👍，反映移动端与无缝切换的实际需求。

- **[Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** — 跨会话 Memory System 需求，希望 AI 记住项目模式与用户偏好，属于提升长期协作体验的关键功能。

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 功能摘要 |
|---|------|------|------|----------|
| #2200 | 适配长时间命令的 Shell 超时机制 | he-yufeng | OPEN | 对 git submodule、clone、包安装等慢命令自动延长超时，保留原有 60s 默认值 |
| #2585 | 为子进程设置 AI_AGENT 环境变量 | complynx | OPEN | 统一暴露 `AI_AGENT=kimi` 标识，区分 CLI 启动的子进程来源 |
| #2364 | ACP 协议支持权限模式切换 | huntharo | OPEN | 解决 Issue #1414，支持 `default`/`auto-accept`/`reject` 等权限模式广播 |

**重点解读：**

- **[PR #2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)** — 解决常见慢命令（git 操作、构建）因默认 60s 超时而中断的问题，按命令类型智能适配超时策略。

- **[PR #2585](https://github.com/MoonshotAI/kimi-cli/issues/2585)** — 为子进程注入 `AI_AGENT` 环境变量，方便上游编排器（Orchestrator）识别由 Kimi CLI 启动的进程，提升 Agent 生态集成能力。

- **[PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)** — ACP 协议层权限模式切换，使远程客户端可动态调整 Kimi 的操作权限级别，是移动端/IDE 集成的关键能力。

---

## 5. 功能需求趋势

基于 Issues 提炼社区核心关注方向：

| 方向 | 说明 | 代表 Issue |
|------|------|-----------|
| **长上下文 & Agent 可靠性** | 500K+ tokens 后性能衰退是实际痛点 | #2586 |
| **跨设备 & 远程会话** | 离开键盘后继续工作，移动场景需求强烈 | #1282 |
| **持久化记忆系统** | 跨会话记住项目上下文与用户偏好 | #1283 |
| **ACP 协议完善** | 模型列表广播、权限切换、会话状态同步 | #2583, #2364 |
| **平台兼容性** | Windows 输入法（IME）、异常退出等 | #2584, #2587 |

---

## 6. 开发者关注点

**高频痛点：**

1. **长会话稳定性** — 超过 500K tokens 后 Agent 出现重复循环和指令漂移，影响复杂多步任务的可靠性。
2. **Windows 平台体验** — 输入法字符重复（IME bug）与意外退出，非英文用户的日常阻碍。
3. **远程/移动协作** — 希望随时从手机或另一台设备继续当前会话，无缝切换尚未实现。
4. **ACP 生态集成** — IDE 客户端（Zed 等）和移动端（Happy Coder）需要更完整的协议支持（模型列表、权限模式）。
5. **上下文记忆** — 开发者期望 CLI 能主动记住项目结构和偏好，减少重复指令。

---

*数据来源：github.com/MoonshotAI/kimi-cli | 统计周期：2026-08-04 ~ 2026-08-05*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-08-05

## 1. 今日速览

OpenCode v1.18.13 正式发布，重点修复了 TUI 的 PR 审查上下文和 Desktop 端的 RTL 布局问题。社区今日焦点集中在 DeepSeek V4 Flash 模型稳定性问题上——大量用户反馈桌面端无响应、返回空白结果，Go 服务被指实际提供的是 V3.2 而非 V4 Flash。

---

## 2. 版本发布

### v1.18.13（2026-08-05）

**TUI 修复：**
- Pull request reviews 现包含 PR 编号和 URL 上下文

**Desktop 修复：**
- 修复多处 RTL（从右向左）布局问题，涉及标签页、抽屉、调整大小和标题栏交互
- 修复共享的 RTL UI 行为，包括方向性图标

> 详情: https://github.com/anomalyco/opencode/releases/tag/v1.18.13

---

## 3. 社区热点 Issues

### 🔴 高优先级（模型/API 问题）

| Issue | 摘要 | 热度 |
|-------|------|------|
| [#40409](https://github.com/anomalyco/opencode/issues/40409) | Go 服务的 `deepseek-v4-flash` 实际返回 V3.2（知识截止 2025-05），存在计费/质量不匹配 | 5 评论 |
| [#40485](https://github.com/anomalyco/opencode/issues/40485) | `deepseek-v4-flash` via opencode-go 返回 403/挂起，同 key 下其他模型正常 | 6 评论 👍6 |
| [#40483](https://github.com/anomalyco/opencode/issues/40483) | Windows 11 桌面端 DeepSeek v4 Flash Free 返回空白响应 | 7 评论 |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | DeepSeek V4 Flash 突然要求"启用中国托管模型" | 15 评论 👍22 |

### 🟡 中优先级（功能/集成）

| Issue | 摘要 | 热度 |
|-------|------|------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | 为 Go 计划添加 usage/balance API 端点 | 29 评论 👍126 |
| [#34498](https://github.com/anomalyco/opencode/issues/34498) | 支持 SKILL.md frontmatter 中 `disable-model-invocation: true` | 9 评论 👍48 |
| [#22235](https://github.com/anomalyco/opencode/issues/22235) | VSCode 扩展 `Context Awareness` 功能未生效 | 12 评论 👍7 |
| [#40516](https://github.com/anomalyco/opencode/issues/40516) | 桌面端启动时 provider/model/MCP 加载失败（v1.18.5+ 回归） | 2 评论 |
| [#40540](https://github.com/anomalyco/opencode/issues/40540) | VSCode 扩展无法感知编辑器中选中和活动标签 | 2 评论 |

### 🟢 其他值得关

| Issue | 摘要 | 热度 |
|-------|------|------|
| [#38723](https://github.com/anomalyco/opencode/issues/38723) | `opencode run` 间歇性挂起（~56% 失败率） | 4 评论 |
| [#40171](https://github.com/anomalyco/opencode/issues/40171) | `/v1/responses` SSE 流不完整，破坏 Codex 风格客户端 | 3 评论 👍2 |

---

## 4. 重要 PR 进展

### 已合并

| PR | 作者 | 内容 |
|----|------|------|
| [#40551](https://github.com/anomalyco/opencode/pull/40551) | kitlangton | TUI 标签页导航快捷键优化，采用 Slack/Mattermost 风格 |
| [#40543](https://github.com/anomalyco/opencode/pull/40543) | Hona | 新增 RTL 开发 skill，含逻辑 CSS、bidi 隔离等文档 |
| [#40549](https://github.com/anomalyco/opencode/pull/40549) | opencode-agent[bot] | 修复 malformed Responses tool calls 分类逻辑 |
| [#40546](https://github.com/anomalyco/opencode/pull/40546) | opencode-agent[bot] | 保留 Gemini tool finish semantics |
| [#34848](https://github.com/anomalyco/opencode/pull/34848) | eXamadeus | 默认自适应 Anthropic 模型使用 summarized thinking |
| [#40535](https://github.com/anomalyco/opencode/pull/40535) | rekram1-node | 空不完整流的重试逻辑 |

### 开放中

| PR | 作者 | 内容 |
|----|------|------|
| [#40552](https://github.com/anomalyco/opencode/pull/40552) | kitlangton | 避免 ripgrep 索引时重复重建目录快照（大仓库性能） |
| [#40537/40538](https://github.com/anomalyco/opencode/pull/40537) | rekram1-node | xAI OAuth 改为设备流（RFC 8628），移除 loopback |
| [#40545](https://github.com/anomalyco/opencode/pull/40545) | macurandb | `run --format json` 输出增加模型归属 |
| [#40547](https://github.com/anomalyco/opencode/pull/40547) | opencode-agent[bot] | Anthropic tool finish reason 推导修复 |
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | Hona | 实验性渲染性能优化（初始渲染从 7.45MB 降至 1.82MB） |
| [#40403](https://github.com/anomalyco/opencode/pull/40403) | openchat-ai | 空闲后恢复会话时自动压缩（节省 token） |

---

## 5. 功能需求趋势

| 方向 | 关注度 | 说明 |
|------|--------|------|
| **模型稳定性与 API 质量** | 🔥🔥🔥 | DeepSeek V4 Flash 问题集中爆发，社区对 Go 服务模型版本准确性强烈关注 |
| **IDE/编辑器集成** | 🔥🔥 | VSCode 扩展上下文感知功能频繁报障，用户期待更深的编辑器集成 |
| **使用量 API** | 🔥🔥 | Issue #16017 获 126 票，用户需要透明的 quota/usage 查询能力 |
| **SKILL.md 控制** | 🔥 | 期望在前端matter中声明模型调用限制，精细化控制 AI 行为 |
| **性能优化** | 🔥 | 大仓库索引性能、渲染内存占用是持续焦点 |
| **OAuth 体验** | 新趋势 | xAI OAuth 从 loopback 改为设备流，改善远程/本地统一认证体验 |

---

## 6. 开发者关注点

**🔴 高频痛点：**
1. **DeepSeek V4 Flash 可用性** — 多平台（桌面/TUI/Go API）均出现异常，用户反馈"只播放完成音效但内容为空"
2. **v1.18.5+ 回归问题** — 桌面端启动时 provider/MCP 加载失败，影响约 80% 启动，需降级至 v1.18.4
3. **间歇性挂起** — `opencode run` 命令约 56% 概率卡在 init 阶段，无输出无错误

**🟡 功能诉求：**
- 需要透明的用量查询 API（Issue #16017）
- VSCode 扩展应能感知编辑器选中和活动文件（Issue #22235, #40540）
- 支持 SKILL.md 中 `disable-model-invocation` 控制模型调用（Issue #34498）

**🟢 积极信号：**
- 性能优化 PR 显示初始渲染内存降低 75%
- 会话自动压缩功能正在推进，可节省长会话 token 成本
- RTL 国际化支持持续完善

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-08-05

---

## 1. 今日速览

过去24小时，Pi 社区最集中的焦点是 **Copilot Enterprise 的 Context Compaction 故障**——多个 issue 指向同一根因（421 Misdirected Request / unknown stamp），已关闭但修复痕迹明显。同时，**Mermaid 图表渲染**、**LLM Gateway 内置支持**、**可配置 summarization 模型**三项功能以 PR 形式推进，社区活跃度较高。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 热度 | 关注原因 |
|---|-------|------|------|---------|
| #6768 | Compaction using Copilot Enterprise not possible | ✅ CLOSED | 👍 18 / 19 评论 | 最高赞 issue，Enterprise 用户核心痛点：compaction 触发 421 错误，影响大规模会话管理 |
| #7547 | How do you use Pi on Windows? | 📖 OPEN | 12 评论 | 作者主动征集 Windows 使用体验，旨在厘清各运行方式的优先级，直接决定后续文档与 bug 修复资源分配 |
| #5023 | Terminal scrolls to beginning without reason | ✅ CLOSED | 11 评论 | 终端随机跳顶问题困扰大量用户，属高频体验 bug，已关闭但反映渲染子系统稳定性待提升 |
| #7161 | anthropic-messages never sends x-client-request-id | ✅ CLOSED | 10 评论 | Anthropic 路径缺失关键 header，导致第三方代理无法做会话亲和路由，影响多账号轮转场景 |
| #7465 | Add payload size to iTerm2 inline images | ✅ CLOSED | 7 评论 | xterm.js image addon 0.9.0 强制要求 size 参数，缺少则图片静默失败，社区反馈及时修复 |
| #7413 | Compaction fails on GHE.com enterprise — "unknown stamp" | ✅ CLOSED | 6 评论 | 与 #6768 同系列问题，明确指出 token 验证中 `unknown stamp "prod-cus-01"` 根因，帮助定位 |
| #7244 | Enhance version to show runtime (bun|node|deno) | ✅ CLOSED | 6 评论 | 大量 issue 因 bun 运行环境产生，`pi version` 补充运行时信息可降低诊断摩擦 |
| #7553 | Configurable thinking level/model for compaction | ✅ CLOSED | 6 评论 | 用户希望 compaction 使用独立 thinking budget，避免与主会话预算耦合，已有关闭说明可配置化 |
| #7508 | OAuth refresh 无超时导致 session 冻结 ~5 分钟 | ✅ CLOSED | 5 评论 | 网络抖动时 credential-store 锁被长任务持有，严重影响用户体验，修复价值高 |
| #6817 | find 工具在 Windows 上对含路径分隔符的模式返回空 | ✅ CLOSED | 5 评论 | Windows 用户高频痛点，`src/**/*.ts` 模式失效，影响代码导航核心功能 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|----|------|------|
| #7632 | fix: retry transient management HTTP requests | 📖 OPEN | 对所有幂等管理请求（pi.dev、GitHub releases 等）添加重试机制，修复 #6675，提升网络不稳定场景下的可靠性 |
| #7624 | feat: render Mermaid diagrams | 📖 OPEN | 在 markdown 中渲染 Mermaid 图表，响应社区需求（#7623），提升文档与对话可视化能力 |
| #7571 | feat: add built-in Cortecs provider | ✅ CLOSED | 新增欧洲 AI 路由提供商 Cortecs（基于 models.dev），丰富可用模型矩阵 |
| #7610 | feat: add LLM Gateway providers | 📖 OPEN | 新增 LLM Gateway 及 DevPass 两个内置 provider，替代之前被自动关闭的 #7480，继续推进 OpenRouter 风格路由接入 |
| #7602 | feat: configurable summarization models | 📖 OPEN | 允许为 compaction 和 branch summary 配置独立模型与 thinking level，解决 #7553 |
| #7619 | feat: resume failed turn via /tree | 📖 OPEN | 在 /tree 中选择失败的 assistant entry 可触发重试，提升断线恢复体验，关闭 #7609 |
| #7612 | fix: add size param to iTerm2 image encoder | 📖 OPEN | 修复 xterm.js image addon 0.9.0 兼容问题，为 OSC 1337 序列添加 `size` 参数 |
| #7597 | fix: extension selector scrollable in fullscreen | 📖 OPEN | 全屏模式下扩展选择器支持滚动，解决大 diff 场景下 yes/no 按钮不可见问题 |
| #7626 | fix: own SQLite backend tests in storage package | ✅ CLOSED | 将 SQLite 后端测试迁入 `packages/storage/sqlite-node`，完善 Vitest 配置，提升测试可维护性 |
| #7591 | refactor: update sqlite for lanes | ✅ CLOSED | 为 v2 harness 引入 lane 感知的 SQLite 会话存储，支持 records、lane moves、branch-cache 等特性 |

---

## 5. 功能需求趋势

1. **Provider 生态扩展**：Cortecs、LLM Gateway 连续入库，社区对多路由/多提供商接入需求旺盛；同时 Copilot Enterprise / GitHub Copilot Business 的模型可见性（#7560）仍是关注点。
2. **会话管理可靠性**：Compaction 错误、OAuth 刷新冻结、JSON mode 二次复杂度（#7395）等问题集中暴露，开发者对长会话稳定性要求日益提高。
3. **可视化增强**：Mermaid 渲染（#7623/#7624）和 iTerm2 内联图片修复（#7465/#7612）反映用户对 rich content 呈现的需求。
4. **跨平台一致性**：Windows 专属问题（#7547、#6817、#7427）持续出现，与 macOS/Linux 体验差距是社区明确感知的痛点。
5. **RPC 与嵌入场景**：RPC over sockets（#7599）、argument completions（#7621）、auth 暴露（#7590）说明 headless / IDE 嵌入模式正在成为重点投入方向。

---

## 6. 开发者关注点

- **Compaction 是企业用户的"卡脖子"问题**：#6768、#7413、#7579 三道 issues 指向同一根因——compaction 请求丢失 baseUrl 重写或 token stamp 验证失败，导致 Copilot Enterprise 用户无法正常使用长会话管理。
- **Windows 体验需要体系化梳理**：#7547 主动征集 Windows 问题是积极信号，但 #6817（find 工具路径分隔符）、#7427（skills 加载路径错误）、#7528（TUI 超宽行崩溃）说明 Windows 兼容性是系统性短板。
- **诊断信息不够友好**：#7244 补充运行时版本、#7161 补充 request-id header，均指向一个共识：出问题时用户难以提供有效诊断上下文。
- **网络不稳定下的鲁棒性**：#7508（OAuth 刷新冻结 5 分钟）和 #7632（管理请求重试）说明网络抖动是真实生产场景中的高频问题，需要更完善的超时与重试策略。
- **JSON mode 性能隐患**：#7395 揭示 `--mode json` 下每次 delta 序列化完整消息，导致输出呈二次增长，对长会话或高吞吐场景构成潜在瓶颈。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 — 2026-08-05

## 1. 今日速览

Qwen Code 发布 v0.21.5，为 macOS 用户引入从 Electron 桌面版迁移至 Tauri 新 shell 的桥接机制，并新增工具调用执行结果追踪能力。社区重点关注安全运行时边界、MCP 会话管理缺陷及 ACP IDE 集成体验优化，多项 PR 推进审核流水线性能与钩子系统安全加固。

---

## 2. 版本发布

### v0.21.5（正式版）
- **亮点**：为 macOS 用户提供一次性迁移桥接，支持从 Electron 桌面应用平滑过渡到新版 Tauri shell
- **新增**：工具调用级执行结果追踪，支持更细粒度的执行状态记录
- [PR #8392](https://github.com/QwenLM/qwen-code/pull/8392)

### v0.21.6-preview.0 / v0.21.5-nightly
- **browser-ext**：新增 alpha 就绪诊断功能
- **文档**：补充 headless Goal 工作流文档
- [PR #6739](https://github.com/QwenLM/qwen-code/pull/6739)

---

## 3. 社区热点 Issues

| # | 标题 | 关注度 | 重要性说明 |
|---|------|--------|-----------|
| #8102 | 确定性工具执行边界与可信 Agent 运行时提案 | 17 评论 | 核心安全架构讨论， propose 将 LLM 隔离在信任边界外 |
| #8519 | tmux 中严重闪屏问题 | 11 评论 | 高频体验痛点，影响 Linux/TUI 用户使用 |
| #8051 | 多工作区 Daemon 资源用量追踪 | 9 评论 | 生产环境稳定性关键，当前仅限制数量不限制内存字节 |
| #8136 | Provider 警告清洗器截断含端口消息并泄漏密码 | 6 评论 | 安全漏洞，`@` 符号导致凭证泄露 |
| #8356 | APIUserAbortError 后会话转录未写入 | 5 评论 | 数据丢失 Bug，影响会话恢复与审计 |
| #8493 | 取消的文件操作仍可修改文件系统 | 5 评论 | 安全性问题，异步取消信号处理缺陷 |
| #8550 | `qwen mcp list` 在 SSE 服务器无 endpoint 时无限挂起 | 3 评论 | 可用性 Bug，MCP 连接管理缺陷 |
| #8533 | Content[]/Part[] 无法安全编码推理回放契约 | 4 评论 | 基础架构问题，影响多 Provider 兼容 |
| #8182 | Daemon 为每个 ACP 子进程分配 50% 主机内存 | 3 评论 | 资源泄漏，多工作区场景下内存分配错误 |
| #8544 | ACP Task List 在 JetBrains 中未渲染 | 3 评论 | IDE 集成体验缺陷，对比 Claude Code/Codex 缺失功能 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| #8125 | 外部工具守卫 Provider | Closed | 为 `qwen serve` ACP 部署添加可选的预先执行策略 Provider |
| #8496 | Web Shell 只读命令即时执行 | Open | `/stats`、`/about`、`/context` 在流式处理中立即执行 |
| #8461 | 支持本地 gh 认证 | Open | GitHub Channel 可复用 daemon 主机的 `gh auth login` 凭证 |
| #8445 | Web Shell 会话刷新支持 | Open | 修复文档导航与 bearer 认证顺序问题 |
| #8368 | 新增 Kimi 和 Xiaomi MiMo Provider | Open | 第三方模型接入，支持 Coding Plan 和多种 API Key 配置 |
| #8443 | 流式时点击展开/折叠思考块 | Open | 修复 VP 模式下思考块无法交互式展开的问题 |
| #8439 | VP 模式支持 Ctrl+点击超链接和右键菜单 | Open | 恢复 SGR 鼠标追踪丢失的原生终端功能 |
| #8396 | 修复钩子系统四个信任边界漏洞 | Open | HTTP 钩子不再跟随重定向，加强 SSRF 防护 |
| #8213 | 建立工作区运行时所有权 | Open | 定义五状态运行时快照和工作区级生命周期管理 |
| #8548 | 审核 CLI 包构建性能优化 | Open | 每轮扫描仅构建一次 CLI bundle，扇出至各 leg |

---

## 5. 功能需求趋势

- **安全与信任边界**：多个 Issue/PR 聚焦于运行时安全（#8102、#8136、#8396、#8493），社区强烈要求确定性的工具执行约束和凭证保护
- **IDE/ACP 集成体验**：JetBrains 任务列表渲染（#8544）、上下文用量显示（#8513）、推理层级配置（#8514）等需求集中涌现
- **多模型/Provider 支持**：Kimi、MiMo 接入（#8368），以及 Provider 警告清洗修复（#8136）反映扩展生态需求
- **Daemon 与多工作区管理**：资源限制（#8051、#8182）、会话转录（#8356）等生产级稳定性问题受关注
- **MCP 连接稳定性**：SSE 挂起（#8550）、元数据热重载（#8492）暴露协议层缺陷

---

## 6. 开发者关注点

1. **取消操作的安全性**：多个 Issue 指出取消信号（abort signal）未能正确中断异步操作，可能导致文件篡改或状态不一致（#8493、#8491）

2. **VP 模式体验退化**：鼠标交互、超链接点击、右键菜单等原生终端功能在 Virtual Viewport 模式下丢失，用户反馈强烈（#8439、#8443）

3. **生产环境资源管理**：Daemon 多工作区场景下内存分配逻辑错误（#8182）和资源限制不足（#8051）影响稳定性

4. **凭证安全**：Provider 警告清洗逻辑存在 Bug，可能导致密码泄漏（#8136），用户对此高度敏感

5. **会话恢复可靠性**：`--resume`/`--continue` 可能重建已修复的悬挂推理状态（#8535），中断后会话转录丢失（#8356）

---

*数据来源：github.com/QwenLM/qwen-code | 生成时间：2026-08-05*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报
**日期：2026-08-05 | 数据源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

v0.9.4 发布列车（#5135）持续推进，累计已超 main 分支 77 个提交，成为今日核心动态。与此同时，构建性能问题引发社区高度关注，维护者 Hmbown 连续发起 6 个优化 Issue（#5244–#5249），直指 68 万行 TUI crate 的编译瓶颈与依赖膨胀问题。

---

## 二、版本发布

**v0.9.4 Release Train（PR #5135）**
- 作者：Hmbown
- 状态：OPEN，持续更新中
- 进展：包含 2026-08-01 来源候选的所有提交，当前较 `main` 超前 77 个 commit
- 链接：[PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)

---

## 三、社区热点 Issues（Top 10）

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| #5249 | Epic: v0.9.5 构建时优化 — 终结单体编译税 | 🔴 高 | 维护者发起，直击 68 万行 TUI crate  recompilation 痛点 |
| #5248 | 精简 708 个依赖包构建图 | 🔴 高 | 95 个 build scripts + 52 个 proc-macro 序列化编译，社区共鸣强烈 |
| #5245 | Git commit 触发全量重建 | 🟠 中高 | 每个本地 commit 强制重建 tui+cli，开发者高频痛点 |
| #4978 | Anthropic API 400 错误频繁出现 | 🟠 中高 | `type` 参数校验异常，重试偶发成功，无固定规律，6 条评论 |
| #5209 | File edit 接受错误参数返回假成功 | 🟠 中高 | `new_str` 等非法参数静默接受并返回成功，需 3-5 倍重试 |
| #5241 | 定价接口 503，所有会话显示 unverified_live_pricing | 🟡 中 | 升级 0.8.67→0.9.3 后成本显示失效，1 条评论 |
| #5239 | 1M context 模型为何在 128K 触发压缩 | 🟡 中 | 模型支持 1M 但工具仅在 128K 压缩，1 条评论 |
| #4955 | 请求 zero-sandbox 模式用于本地开发 | 🟡 中 | kernel-level Seatbelt 沙箱频繁破坏 shell 命令，1 👍 |
| #4991 | 编译时间讨论 — 其他人是否有同感 | 🟡 中 | slash command 重构期间编译等待频繁，4 条评论 |
| #5244 | 未知 model ID 静默降级为 128K 默认 | 🟡 中 | 残留 bug，1M 窗口模型静默在 128K 压缩，无提示 |

---

## 四、重要 PR 进展（Top 10）

| # | 标题 | 状态 | 功能摘要 |
|---|------|------|----------|
| #5135 | v0.9.4 release train | OPEN | 发布列车，包含 77 个 commits |
| #5242 | 通过 followup 恢复中断的子 agent | OPEN | 解决 checkpoint 保留但无法恢复运行的问题 |
| #5225 | ACP 暴露 file/search/git 等工具 | OPEN | `session/prompt` 以前只流式输出文本，现支持实际执行工具调用 |
| #5133 | Runtime API 暴露目标循环状态 | OPEN | 新增 `/v1/threads/{id}/goal` 端点，支持生命周期管理 |
| #5132 | Runtime API 暴露验证器票据 | OPEN | 新增 `/v1/fleet/runs/{run_id}/receipts` 等端点，可识别失败任务 |
| #5131 | Runtime API 内存端点 | OPEN | 新增 `/v1/memory` 路由，支持内存 inspect 和生命周期控制 |
| #5130 | Runtime API MCP 服务器配置 | OPEN | 新增 MCP 服务器 CRUD 端点，无需直接编辑 TOML/JSON |
| #5129 | Runtime API Skill 生命周期 | OPEN | 新增 skill install/update/uninstall/trust/audit 端点 |
| #5240 | Shell wait 显示真实耗时 | OPEN | `duration_ms` 现暴露给模型，避免 busy-polling 短等待 |
| #5234 | 鼠标捕获期间保持 alternate scroll off | OPEN | 修复滚轮输入错误切换 composer 历史的问题 |

---

## 五、功能需求趋势

1. **构建性能优化** — 最高频需求，6 个独立 Issue 集中讨论编译时间、依赖精简、Git 触发重建等，社区对 "monolith tax" 痛点共鸣强烈
2. **Runtime API 完善** — 多个 PR 持续补充 goal/memory/MCP/skill 等生命周期端点，说明 managed client 生态正在快速发展
3. **MCP 集成扩展** — #5238 引入 Registry-first 工具选择策略，#5130 支持 MCP 服务器动态管理
4. **上下文窗口管理** — #5239/#5244 反映用户对大窗口模型（1M）的正确配置和透明降级提示的期待
5. **沙箱灵活性** — #4955 呼吁提供 zero-sandbox 模式，平衡安全性与本地开发便利性

---

## 六、开发者关注点

- **编译等待时间**：682,959 行代码、620 文件的单体 TUI crate 导致 edit/commit/test/release 全流程构建缓慢，开发者期望通过拆分 crate、去重依赖、解耦 SHA stamp 等方式改善
- **API 错误静默失败**：#5209 中 File edit 接受错误参数返回假成功，#4978 中 Anthropic API 偶发 400，反映错误处理透明度的不足
- **成本显示失效**：#5241 升级后所有会话定价显示异常，影响用户对 API 费用的追踪
- **Unknown model ID 静默降级**：#5244 指出 1M 窗口模型被静默降级为 128K 且无任何提示，期望明确报错或警告
- **OAuth 流程冗余**：#5243 指出 xAI/ChatGPT 登录后仍需二次操作才能使用 token，期望一次登录直接生效

---

*报告生成时间：2026-08-05 | 数据来源：GitHub Issue/PR API*

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*