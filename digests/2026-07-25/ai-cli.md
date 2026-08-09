# AI CLI 工具社区动态日报 2026-07-25

> 生成时间: 2026-07-25 01:46 UTC | 覆盖工具: 9 个

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

## AI CLI 工具生态横向对比分析报告
**日期：** 2026-07-25
**分析对象：** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI (Codewhale)

### 1. 生态全景
当前 AI CLI 生态正从“单一模型对话”向“多模型协同与复杂工作流编排”演进。随着 Opus 5、GPT-5.6 等新一代模型的普及，工具间的竞争焦点已转向**企业级稳定性**（权限管理、沙箱控制）、**跨平台一致性**（特别是 Windows 和 Linux 服务端场景）以及**本地化集成能力**（LLM-as-a-Service 兼容）。社区反馈显示，开发者对“黑盒式”自动化信任度降低，更倾向于可观测性强、错误处理透明且支持细粒度控制的工具链。

### 2. 各工具活跃度对比

| 工具名称 | Release 情况 | 热点 Issues 数 | 重要 PR 进展 | 核心动态关键词 |
| :--- | :--- | :---: | :---: | :--- |
| **Claude Code** | v2.1.220/219 (发布) | 10 | 1 (Open) | Opus 5 默认化、企业权限兼容、沙箱增强 |
| **OpenAI Codex** | Rust Alpha 系列 (发布) | 10 | 10 (Closed) | Windows 稳定性危机、Context 压缩缺陷、MCP 优化 |
| **Gemini CLI** | 无 | 10 | 10 (Merged/Fix) | Agent 子代理稳定性、Auto Memory 隐私、Caretaker 评估 |
| **GitHub Copilot** | v1.0.75 (发布) | 10 | 0 | 回归问题频发、OOM、计划模式权限过严 |
| **Kimi Code CLI** | 无 | 5 | 2 | 远程控控需求、企业代理 SSL 支持、Windows UX |
| **OpenCode** | v1.18.5 (发布) | 10 | 10+ | 自动发现模型、Agent 崩溃修复、无锁重构 |
| **Pi** | v0.82.0 (发布) | 10 | 10+ | 受限工具采样、llama.cpp 本地集成、会话压缩 |
| **Qwen Code** | v0.21.0 (发布) | 10 | 10+ | SWE-bench POC、TUI 渲染修复、多 Agent 提示词冲突 |
| **DeepSeek TUI** | v0.9.1 (品牌更名) | 10 | 10+ | 架构重构 (Fleet/Lane)、i18n、性能瓶颈修复 |

*(注：PR 数指过去24小时内提及的重要或合并 PR；Issues 数为 Top 10 列表项)*

### 3. 共同关注的功能方向

*   **Windows 平台稳定性与兼容性**
    *   **涉及工具：** OpenAI Codex, Claude Code, Kimi Code CLI, OpenCode, Pi
    *   **具体诉求：** 进程泄漏（Git.exe/CPU 占用）、终端渲染异常（TUI 覆盖/闪烁）、路径分隔符处理、WSL 集成问题。Windows 用户群体庞大但被忽视，成为各工具主要的 Bug 来源。
*   **长上下文管理与资源优化**
    *   **涉及工具：** OpenAI Codex, Claude Code, OpenCode, Pi
    *   **具体诉求：** Context 压缩失效导致额度耗尽、自动压缩后内存未释放、会话恢复时的 OOM（内存溢出）。开发者急需更透明的 Token 统计和更稳健的压缩算法。
*   **企业级安全与权限控制**
    *   **涉及工具：** Claude Code, Gemini CLI, Kimi Code CLI, OpenCode
    *   **具体诉求：** 静默降级导致的配置混乱、OAuth 令牌刷新失败、沙箱网络白名单、SSL 证书在代理环境下的验证。B 端部署要求工具具备更强的可审计性和容错机制。
*   **多模型互操作性与本地集成**
    *   **涉及工具：** OpenCode, Pi, Qwen Code, DeepSeek TUI
    *   **具体诉求：** 自动发现本地模型（Ollama/LM Studio）、支持多种 OpenAI 兼容端点、混合使用不同厂商模型（如 Anthropic + OpenAI）。

### 4. 差异化定位分析

*   **企业级标准制定者：Claude Code & OpenAI Codex**
    *   **侧重：** 稳定性、企业合规、大规模代码库支持。
    *   **差异：** Claude Code 强调沙箱安全和 Opus 5 的深度集成；Codex 则面临 Windows 端稳定性的巨大挑战，但在 MCP 生态和 Enterprise 计划支持上动作迅速。
*   **极客与本地化先锋：OpenCode & Pi**
    *   **侧重：** 灵活性、本地模型支持、高度可配置。
    *   **差异：** OpenCode 主打“自动发现模型”和无锁高性能架构，吸引自托管用户；Pi 专注于 `llama.cpp` 本地推理和受限工具采样，适合离线或高隐私需求场景。
*   **国产力量与特定市场：Kimi Code CLI & Qwen Code**
    *   **侧重：** 中文生态、跨境协作、SWE-bench 基准验证。
    *   **差异：** Kimi 聚焦于解决国内企业内网代理认证和远程会话连续性；Qwen 则在 TUI 体验和 SWE-bench 自动化测试基础设施上投入大量资源，展现技术自信。
*   **架构实验与创新者：Gemini CLI & DeepSeek TUI (Codewhale)**
    *   **侧重：** 多 Agent 编排、品牌重塑、底层重构。
    *   **差异：** Gemini 深入探索 Subagent 的行为控制和 Auto Memory 隐私；DeepSeek 通过大规模代码重构（Fleet/Lane 模型）试图解决长期存在的架构债务，并拓展全球本地化。

### 5. 社区热度与成熟度

*   **高热度/高摩擦期：OpenAI Codex, GitHub Copilot CLI**
    *   尽管用户基数大，但近期版本回归问题（Copilot）和严重的平台适配缺陷（Codex Windows）导致社区负面情绪较高，处于“信任重建”阶段。
*   **快速迭代/重构期：DeepSeek TUI, OpenCode, Pi**
    *   这些工具正处于功能大幅更新或底层重构阶段（如 Codewhale 更名、OpenCode 无锁化），社区对新特性的期待值高，同时对潜在不稳定性的容忍度也在测试中。
*   **稳步进化期：Claude Code, Gemini CLI, Qwen Code**
    *   社区反馈更多集中在功能完善（如权限、沙箱扩展）而非基础崩溃，表明产品核心体验相对成熟，正逐步向企业级可用性靠拢。

### 6. 值得关注的趋势信号

1.  **“静默失败”是最大痛点：** 多个工具（Claude, Copilot, OpenAI）都出现了因权限、网络或模型路由导致的“静默降级”或“无提示崩溃”。**趋势：** 未来的 CLI 工具必须提供显式的状态反馈和明确的错误原因，而非默默执行旧逻辑。
2.  **Windows 不再是二等公民：** OpenAI 和 Claude 在 Windows 上的严重 Bug 表明，跨平台一致性已成为核心竞争壁垒。**建议：** 开发者在选型时，若主要使用 Windows，需格外谨慎测试 CI/CD 兼容性。
3.  **Agent 编排进入“深水区”：** 从简单的 Prompt 执行转向复杂的 Multi-Agent 协作（Gemini Subagents, OpenCode Agents, Codewale Fleet）。**趋势：** 工具将提供更多关于 Agent 状态、权限边界和执行历史的可见性接口，以解决“黑盒”焦虑。
4.  **本地模型集成标准化：** OpenCode 的“自动发现”和 Pi 的 `llama.cpp` 深度集成显示，**Hybrid Cloud（云端+本地）** 将成为标准工作流。开发者应优先选择支持灵活后端配置的 CLI 工具，以便随时切换成本更优的本地模型。
5.  **安全与隐私前置：** 从 Gemini 的 Auto Memory 去标识化到 Kimi 的企业 SSL 支持，**Security-by-Design** 正在成为 B 端采纳的关键指标。个人开发者也应关注工具如何处理敏感代码和环境变量。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：** 2026-07-25
**分析师：** Agnes-2.0-Flash

## 1. 热门 Skills 排行 (Top PRs by Community Attention)

以下 PR 基于评论互动及 GitHub Issue 引用热度筛选，反映了当前开发者最关注的功能改进与新技能需求。

1.  **Skill Creator 评估工具链修复 (Critical Infrastructure)**
    *   **PR #1298 / #1323**: 修复 `run_eval.py` 在 Windows 及跨平台环境下始终报告 `recall=0%` 的严重 Bug。这是 Skill 创建者工具的核心痛点，直接影响 Skill 描述优化的有效性。
    *   **状态:** OPEN | [链接](https://github.com/anthropics/skills/pull/1298)
2.  **前端设计技能清晰度重构 (Frontend Design)**
    *   **PR #210**: 对 `frontend-design` 技能进行指令重写，提升其在单次对话中的可执行性和连贯性。旨在解决 AI 生成前端代码时指令模糊的问题。
    *   **状态:** OPEN | [链接](https://github.com/anthropics/skills/pull/210)
3.  **文档排版质量控制 (Document Typography)**
    *   **PR #514**: 新增 `document-typography` 技能，专门解决 AI 生成文档中的孤行、寡行及编号错位等排版问题。满足企业对专业文档输出的高标准需求。
    *   **状态:** OPEN | [链接](https://github.com/anthropics/skills/pull/514)
4.  **DOCX 书签与修订冲突修复 (Office Automation)**
    *   **PR #541**: 修复 DOCX 技能在处理已有书签的文档时，因 ID 冲突导致文件损坏的问题。体现了社区对现有办公自动化技能稳定性的深度依赖。
    *   **状态:** OPEN | [链接](https://github.com/anthropics/skills/pull/541)
5.  **自审计与推理质量门禁 (Quality Assurance)**
    *   **PR #1367**: 引入 `self-audit` 技能，提供机械验证（文件存在性）和四维推理质量检查。这是目前最高阶的“元技能”，旨在提升 Agent 输出前的自检能力。
    *   **状态:** OPEN | [链接](https://github.com/anthropics/skills/pull/1367)
6.  **测试模式全面覆盖 (Testing Patterns)**
    *   **PR #723**: 新增 `testing-patterns` 技能，涵盖从单元测试哲学到 React 组件测试的全栈测试规范。填补了官方技能库在测试领域的空白。
    *   **状态:** OPEN | [链接](https://github.com/anthropics/skills/pull/723)
7.  **色彩专家技能 (Color Expertise)**
    *   **PR #1302**: 新增 `color-expert` 技能，提供 ISCC-NBS、Munsell 等专业色彩系统及空间转换指南。服务于 UI/UX 设计和创意领域。
    *   **状态:** OPEN | [链接](https://github.com/anthropics/skills/pull/1302)

## 2. 社区需求趋势 (Community Demand Trends)

通过分析高热度 Issue，社区对 Skills 的需求呈现以下三大趋势：

*   **企业级安全与治理 (Enterprise Security & Governance):**
    *   **Issue #492** (43 comments) 指出社区技能冒充官方技能的安全风险，引发对信任边界的强烈关注。
    *   **Issue #412** 提议增加 `agent-governance` 技能，用于策略执行和审计追踪。
    *   **趋势:** 用户急需更严格的权限隔离机制和企业级合规模板。

*   **协作共享与组织管理 (Collaboration & Sharing):**
    *   **Issue #228** 呼吁支持 Org-wide 技能共享，解决目前通过 Slack/Teams 手动分发 `.skill` 文件的低效流程。
    *   **Issue #189** 反馈插件安装导致的重复技能问题。
    *   **趋势:** 从“个人使用”向“团队/企业协同”演进，需要原生集成共享库功能。

*   **开发工具链的鲁棒性 (Toolchain Robustness):**
    *   **Issue #556** 和 **Issue #1169** 持续抱怨 `run_eval.py` 的触发检测失效。
    *   **Issue #1061** 强调 Windows 兼容性是阻碍 Skill 开发普及的最大障碍。
    *   **趋势:** 社区希望官方优先解决 Skill Creator 工具链在 Windows 上的兼容性及评估准确性，降低开发门槛。

## 3. 高潜力待合并 Skills (High-Potential Pending PRs)

以下 PR 虽未合并，但具备明确的价值主张或修复关键缺陷，近期落地可能性较高：

1.  **ODT 格式支持 (OpenDocument Format)**
    *   **PR #486**: 扩展 LibreOffice/OpenDocument 支持。鉴于 PDF 和 DOCX 技能已成熟，补齐 ODT 将完善开源办公套件支持。
    *   **链接:** [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)
2.  **Retro 游戏开发 (Pyxel Engine)**
    *   **PR #525**: 针对特定 niche 市场（复古游戏）的专用 Skill，展示了 Skills 生态向垂直创意工具扩展的能力。
    *   **链接:** [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525)
3.  **SAP 预测分析模型集成**
    *   **PR #181**: 集成 SAP-RPT-1-OSS 模型，针对企业数据分析场景。若 SAP 用户群体活跃，此 Skill 具有高商业价值。
    *   **链接:** [anthropics/skills PR #181](https://github.com/anthropics/skills/pull/181)
4.  **贡献指南完善 (CONTRIBUTING.md)**
    *   **PR #509**: 解决社区健康度指标低的问题，规范化贡献流程，有助于吸引更多高质量 PR。
    *   **链接:** [anthropics/skills PR #509](https://github.com/anthropics/skills/pull/509)

## 4. Skills 生态洞察 (Ecosystem Insight)

**当前社区最集中的诉求是：在确保工具链（Skill Creator）跨平台稳定性与安全信任边界的前提下，从“通用编程辅助”向“企业级合规、垂直领域专业化（如排版、色彩、测试）”及“团队协同共享”深化。**

---

# Claude Code 社区动态日报
**日期：** 2026-07-25
**数据来源：** GitHub (anthropics/claude-code)

## 1. 今日速览
Anthropic 发布 **v2.1.220**（主要修复稳定性）及 **v2.1.219**，后者引入默认模型 **Claude Opus 5** 并增强沙箱网络控制。社区焦点集中在 **Opus 5 的企业权限兼容性问题**、**Remote Control 连接的稳定性缺陷** 以及 **Fable 5 模型的安全策略误报** 上。此外，插件生态和 iOS 移动端体验仍存在若干阻碍生产使用的 Bug。

## 2. 版本发布

### v2.1.220
- **类型：** 维护更新
- **内容：** 常规 Bug 修复与可靠性提升。

### v2.1.219
- **类型：** 功能更新
- **关键变更：**
    - **新默认模型：** 引入 `claude-opus-5` 作为默认 Opus 模型，支持 1M 上下文，提供 Fast 模式（定价 $10/$50 per Mtok）。
    - **沙箱增强：** 新增 `sandbox.network.strictAllowlist` 设置，允许在沙箱命令执行前拒绝未列入白名单的主机连接，无需用户确认。
    - **Hook 机制：** 添加 `DirectoryAdded` Hook，用于监听目录变化事件。

> [链接: Release v2.1.219](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)

## 3. 社区热点 Issues (Top 10)

1.  **[Bug] Opus 5 默认导致企业 Org 静默回退**
    - **Issue #81025**: 新用户升级后，因组织权限未包含 Opus 5，CLI 静默降级并覆盖保存的模型偏好。
    - **重要性：** 影响企业用户升级体验，导致非预期的模型降级和配置混乱。
    - **链接:** [Issue #81025](https://github.com/anthropics/claude-code/issues/81025)

2.  **[Bug] Remote Control 桥接初始化失败且无重试机制**
    - **Issue #81036 & #78469**: 远程会话启动时若遇到短暂网络波动或 401 错误，CLI 仅重试 3 次即永久放弃，导致无头服务器无法启动。
    - **重要性：** 严重阻碍 CI/CD 和无头环境下的自动化工作流。
    - **链接:** [Issue #81036](https://github.com/anthropics/claude-code/issues/81036), [Issue #78469](https://github.com/anthropics/claude-code/issues/78469)

3.  **[Bug] Fable 5 安全策略过度拦截合规内容**
    - **Issue #81026, #81027, #81028**: 多个报告指出 Fable 5 将合法的监管合规消息、代码审查标记为“政策违规”。
    - **重要性：** 直接影响开发者日常编码和安全审计流程，需调整安全阈值。
    - **链接:** [Issue #81026](https://github.com/anthropics/claude-code/issues/81026)

4.  **[Bug] Windows MSIX 更新后应用无法启动**
    - **Issue #76357**: Windows 更新因文件占用报错，必须重启才能再次使用。
    - **重要性：** 高频出现的 UX 痛点，影响 Windows 桌面用户稳定性。
    - **链接:** [Issue #76357](https://github.com/anthropics/claude-code/issues/76357)

5.  **[Bug] Telegram 插件 MCP 通道消息未送达**
    - **Issue #36431**: 插件能接收消息但无法转发至对话，获 32 个赞，社区呼声高。
    - **重要性：** 阻碍即时通讯集成场景的使用。
    - **链接:** [Issue #36431](https://github.com/anthropics/claude-code/issues/36431)

6.  **[Bug] iOS 新建会话自动归档不可见**
    - **Issue #71616**: 移动端新建会话立即被归档，导致用户无法在手机上继续工作。
    - **重要性：** 破坏移动端核心功能闭环。
    - **链接:** [Issue #71616](https://github.com/anthropics/claude-code/issues/71616)

7.  **[Bug] Cloud Cowork Git 代理阻止非授权仓库推送**
    - **Issue #76248**: 即使使用 PAT，非当前会话授权集的仓库也无法推送。
    - **重要性：** 影响多仓库并行开发的工作流。
    - **链接:** [Issue #76248](https://github.com/anthropics/claude-code/issues/76248)

8.  **[Bug] WebSearch 在 xhigh 模式下报错**
    - **Issue #80940**: 设置 `effort=xhigh` 时始终返回 400 错误。
    - **重要性：** 限制高级搜索功能的可用性。
    - **链接:** [Issue #80940](https://github.com/anthropics/claude-code/issues/80940)

9.  **[Bug] macOS 沙箱中 Python ProcessPoolExecutor 权限错误**
    - **Issue #81032**: 沙箱 Sysctl 白名单缺失，导致多进程任务失败。
    - **重要性：** 阻碍需要并行处理的复杂脚本在沙箱中运行。
    - **链接:** [Issue #81032](https://github.com/anthropics/claude-code/issues/81032)

10. **[Bug] OAuth MCP 连接器缺乏重新认证功能**
    - **Issue #81020**: 令牌过期后只能断开重连，无“重新认证”按钮。
    - **重要性：** 增加维护自定义连接器的操作成本。
    - **链接:** [Issue #81020](https://github.com/anthropics/claude-code/issues/81020)

## 4. 重要 PR 进展

1.  **feat: Add context-safety-net plugin to mitigate auto-compact context loss**
    - **PR #80883**: 由社区贡献者 `jeshiomurmu` 提交。旨在解决长会话中自动压缩导致的上下文丢失问题，通过插件形式提供“锚点”恢复机制。
    - **状态：** Open
    - **链接:** [PR #80883](https://github.com/anthropics/claude-code/pull/80883)

*(注：过去24小时内仅统计到 1 条相关 PR)*

## 5. 功能需求趋势

1.  **企业级权限与兼容性管理：** 随着 Opus 5 成为默认模型，企业用户急需更平滑的权限过渡机制和明确的降级提示，而非静默失败。
2.  **无头/自动化工作流稳定性：** Remote Control 和 Headless 会话的重试机制、状态持久化是自动化场景的核心痛点，社区强烈要求增强容错性。
3.  **沙箱环境扩展性：** 开发者希望沙箱能支持更多系统调用（如 Sysctl）和多进程库，以适配复杂的工程任务。
4.  **连接器生命周期管理：** 现有的 OAuth 连接器管理过于基础，缺乏细粒度的令牌刷新和重新认证交互。

## 6. 开发者关注点

*   **新模型适配焦虑：** Opus 5 的引入带来了性能预期，但也引发了关于成本（Fast 模式定价）、权限兼容性和安全策略（Fable 5 误报）的广泛讨论。
*   **跨平台一致性缺失：** Windows (MSIX)、macOS (Sandbox/iOS) 和 Web 端存在多处各自独立的 Bug，开发者期望 Anthropic 能统一排查跨平台的基础设施问题。
*   **插件生态的成熟度：** 尽管插件市场活跃，但核心插件（如 Telegram）和自定义 MCP 连接器的稳定性不足，影响了高级集成方案的落地。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：** 2026-07-25
**数据来源：** github.com/openai/codex

## 1. 今日速览
今日社区焦点集中在 **Windows 平台的稳定性问题**，多个高热度 Issue 报告了 `git.exe` 进程泄漏、CPU 占用过高及应用崩溃现象。同时，**Pro 用户反馈资源消耗异常**（Context 压缩失效导致额度快速耗尽），且 **GPT-5.6 模型在 Code Mode 下存在序列化调用效率低及潜在的错误路由问题**。开发侧近期密集发布了 Rust CLI v0.146.0-alpha 系列版本，并完成了多项关于 MCP 配置刷新、远程插件追踪及 Enterprise 计划支持的底层优化。

## 2. 版本发布
过去 24 小时内发布了 Rust CLI 的四个 Alpha 版本，主要涉及内部构建迭代：
*   **rust-v0.146.0-alpha.9**
*   **rust-v0.146.0-alpha.8**
*   **rust-v0.146.0-alpha.7**
*   **rust-v0.146.0-alpha.6**

> *注：具体变更日志未在提供的数据中详细列出，建议关注后续正式 Release 说明。*

## 3. 社区热点 Issues (Top 10)

| 排名 | 标题摘要 | 关键标签 | 热度/评论 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **App 启动静默创建空文件夹**<br>每次启动都在 `~/Documents` 生成空 Codex 文件夹，用户反感此行为。 | [bug, app] | 👍 39 / 20 | [#20880](https://github.com/openai/codex/issues/20880) |
| 2 | **Pro 周额度消耗过快**<br>使用 5.5 模型且 Context 压缩不稳定时，Pro 额度耗尽速度远超预期。 | [bug, rate-limits, context] | 👍 29 / 33 | [#19585](https://github.com/openai/codex/issues/19585) |
| 3 | **Windows Git 进程泄漏与高 CPU**<br>旧版 Windows 应用持续生成 Git 进程导致系统卡顿，虽已关闭但影响深远。 | [bug, windows-os, performance] | 👍 24 / 14 | [#22085](https://github.com/openai/codex/issues/22085) |
| 4 | **Windows App 持续生成 Git 状态检查进程**<br>类似上述问题，新版 App 仍频繁执行 `git status` 并留下孤儿进程。 | [bug, windows-os, app] | 👍 6 / 33 | [#17229](https://github.com/openai/codex/issues/17229) |
| 5 | **自动压缩后上下文未释放**<br>自动压缩成功但上下文占用仍维持在 80%，导致重复压缩和资源浪费。 | [bug, windows-os, rate-limits] | 0 / 14 | [#35032](https://github.com/openai/codex/issues/35032) |
| 6 | **Windows 打开项目触发大量 Git 进程**<br>打开项目/聊天界面时并行触发多个 `git add -A`，造成严重磁盘和 CPU 负载。 | [bug, windows-os, app] | 👍 11 / 13 | [#20933](https://github.com/openai/codex/issues/20933) |
| 7 | **Xcode 27 Beta 登录失败**<br>ChatGPT Pro 账号需邮箱 OTP 验证时登录失败，而 Go 账号正常。 | [bug, extension, auth] | 👍 11 / 18 | [#28078](https://github.com/openai/codex/issues/28078) |
| 8 | **远程连接通知失效**<br>在使用远程 Linux/MacOS 连接时，Codex 完成对话后不发送系统通知。 | [bug, app, remote] | 👍 15 / 8 | [#20930](https://github.com/openai/codex/issues/20930) |
| 9 | **GPT-5.6 串行化独立调用**<br>Code Mode 下 GPT-5.6 未能并行处理独立任务，导致加权使用量增加 27-45%。 | [bug, model-behavior, tool-calls] | 0 / 7 | [#35050](https://github.com/openai/codex/issues/35050) |
| 10 | **WSL 仓库被误判为非 Git**<br>新版 Windows App 将有效的 WSL 仓库识别为无 Git，报错 "Git is unavailable"。 | [bug, windows-os, app] | 👍 3 / 3 | [#35119](https://github.com/openai/codex/issues/35119) |

## 4. 重要 PR 进展

| PR 编号 | 标题 | 状态 | 核心内容摘要 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#35275** | Trace remote exec-server connection setup | Closed | 优化远程执行服务器连接建立的追踪（Tracing），保留 Span 并添加噪声、WebSocket 等阶段的详细追踪。 | [Link](https://github.com/openai/codex/pull/35275) |
| **#35271** | Include code-mode tool names in Responses Lite metadata | Closed | 在 Responses Lite 元数据中加入 `code_mode_tool_names`，将标准化标识映射到结构化工具名，防止客户端覆盖。 | [Link](https://github.com/openai/codex/pull/35271) |
| **#35267** | Harden network approval cancellation and concurrency | Closed | 强化网络审批的取消逻辑和并发处理，确保废弃的审批所有者被正确关闭，并解决等待中的请求。 | [Link](https://github.com/openai/codex/pull/35267) |
| **#35266** | Allow disabling the in-process code-mode host fallback | Closed | 新增配置项 `disable_in_process_fallback`，允许在独立 Host 启动失败时返回错误而非回退到嵌入式 V8。 | [Link](https://github.com/openai/codex/pull/35266) |
| **#35264** | Sign bundled macOS helper binaries | Closed | 修复 macOS 打包流程，确保捆绑的辅助二进制文件（如 rg, zsh）在签名和公证检查范围内。 | [Link](https://github.com/openai/codex/pull/35264) |
| **#35262** | Track remote plugin IDs in skill invocation analytics | Closed | 在技能调用分析和事实记录中加入 `remote_plugin_id`，支持显式和隐式插件调用的追踪。 | [Link](https://github.com/openai/codex/pull/35262) |
| **#31307** | Support a configurable plugins MCP endpoint | Closed | 允许通过环境变量 `CODEX_PLUGINS_MCP_ENDPOINT` 独立配置插件服务的 MCP 端点，不再强制依赖主 API 地址。 | [Link](https://github.com/openai/codex/pull/31307) |
| **#31310** | Coordinate MCP tool refreshes | Closed | 序列化重叠的 MCP 工具刷新操作，确保实时工具快照与最新刷新状态同步，避免状态不一致。 | [Link](https://github.com/openai/codex/pull/31310) |
| **#35254** | Expose workspace plugin publish capability | Closed | 在插件分享上下文中暴露 `canPublishToWorkspace` 元数据，使客户端能判断是否支持工作区发布功能。 | [Link](https://github.com/openai/codex/pull/35254) |
| **#35238** | Support the ent26 enterprise plan | Closed | 全面支持 `ent26` 企业计划，包括认证、速率限制载荷、后端 Schema 及令牌处理逻辑。 | [Link](https://github.com/openai/codex/pull/35238) |

## 5. 功能需求趋势
*   **Windows 平台健壮性优先：** 超过 40% 的高热度 Issue 集中在 Windows 环境，特别是 Git 集成、进程管理和性能优化。社区对 Windows 端的稳定性容忍度正在降低。
*   **资源管理与计费透明度：** 用户对 Context 压缩效率、API 额度消耗速度高度敏感，尤其是 Pro 和企业级用户，期望更精准的用量控制和更透明的压缩机制。
*   **MCP 生态与插件管理：** 开发者关注 MCP 端点的独立性、插件 ID 的追踪以及工作区插件发布能力，表明插件生态系统正在向更复杂、更可观测的方向演进。
*   **多代理（Multi-Agent）与串行优化：** 针对 GPT-5.6 等高级模型的并行调用能力提出质疑，反映出用户对自动化工作流执行效率的更高期待。

## 6. 开发者关注点
1.  **Windows 进程泄漏与性能瓶颈：** `git.exe` 和 `conhost.exe` 的孤儿进程问题是当前最严重的痛点，直接导致开发机卡顿甚至崩溃（如 #17229, #20933, #35179）。
2.  **Context 压缩逻辑缺陷：** 自动压缩后上下文占用率未下降（#35032）以及压缩不稳定导致的额度快速耗尽（#19585），严重影响长会话的开发体验。
3.  **模型行为一致性：** 用户发现选择 GPT-5.6 Pro 时可能实际路由到了 GPT-5.5 Mini（#34677），或者 Code Mode 下无法有效并行化独立任务（#35050），这损害了用户对高级模型能力的信任。
4.  **IDE 集成兼容性：** Xcode 27 Beta 的登录问题（#28078）和 VS Code/Cursor 扩展中 Prompt 消失（#25928）表明，随着 IDE 版本的快速迭代，Codex 的兼容性测试需要加强。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期**: 2026-07-25
**数据来源**: github.com/google-gemini/gemini-cli

## 1. 今日速览
今日 Gemini CLI 社区活跃度较高，主要聚焦于 **Agent 子代理（Subagent）的稳定性与行为控制**，多个高优先级 Issue 涉及子代理挂起、恢复及权限问题。同时，**安全性与隐私保护**成为核心议题，包括 Auto Memory 的数据泄露风险和 OAuth 令牌刷新失败等关键修复。基础设施方面，Caretaker Agent 的评估框架和部署脚本有显著进展。

## 2. 版本发布
*   **无新版本发布**。过去 24 小时内没有新的 Release 记录。

## 3. 社区热点 Issues
以下 Issue 因评论数多、优先级高或涉及核心功能稳定性而备受关注：

1.  **[P1] Subagent recovery after MAX_TURNS is reported as GOAL success** (#22323)
    *   **重要性**: 揭示了一个严重的逻辑错误，子代理在达到最大轮次限制时仍被报告为“目标成功”，导致中断被隐藏，影响调试和用户体验。
    *   **社区反应**: 12 条评论，2 个赞，开发者对此类隐蔽性 Bug 反应强烈。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[P1] Generalist agent hangs** (#21409)
    *   **重要性**: 通用代理（Generalist Agent）经常无限期挂起，即使是简单的文件夹创建操作也会卡住，严重影响工作流效率。
    *   **社区反应**: 8 条评论，8 个赞，高赞表明这是广泛存在的痛点。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[P2] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (#19873)
    *   **重要性**: 提出利用 Gemini 模型原生的 Bash 能力，通过零依赖沙箱进行后执行意图路由，旨在平衡安全性和模型原生优势。
    *   **社区反应**: 8 条评论，被视为潜在的架构优化方向。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/19873)

4.  **[P2] Stop Auto Memory from retrying low-signal sessions indefinitely** (#26522)
    *   **重要性**: 自动记忆系统（Auto Memory）对低信号会话的无限重试不仅浪费资源，还可能导致上下文污染。
    *   **社区反应**: 5 条评论，关注系统效率和资源管理。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/26522)

5.  **[P2] Shell command execution gets stuck with "Waiting input" after command completes** (#25166)
    *   **重要性**: 核心交互问题，Shell 命令执行完毕后界面仍显示“等待输入”，导致用户无法继续操作。
    *   **社区反应**: 4 条评论，3 个赞，直接影响日常使用体验。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

6.  **[P2] Add deterministic redaction and reduce Auto Memory logging** (#26525)
    *   **重要性**: 安全关键项。当前 Auto Memory 在发送给模型前未完全去标识化敏感信息，存在数据泄露风险。
    *   **社区反应**: 4 条评论，强调隐私合规的重要性。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/26525)

7.  **[P2] Gemini does not use skills and sub-agents enough** (#21968)
    *   **重要性**: 反馈自定义技能和子代理未被模型主动调用，削弱了模块化能力的价值。
    *   **社区反应**: 6 条评论，0 个赞（可能因属主观体验争议），但反映了功能可用性差距。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

8.  **[P1] browser subagent fails in wayland** (#21983)
    *   **重要性**: 浏览器子代理在 Wayland 环境下失效，限制了 Linux 用户的图形化操作能力。
    *   **社区反应**: 4 条评论，1 个赞，特定环境下的兼容性问题。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/21983)

9.  **[P2] Gemini CLI encounters 400 error with > 128 tools** (#24246)
    *   **重要性**: 工具数量上限导致的 API 错误，限制了复杂项目的集成规模。
    *   **社区反应**: 3 条评论，关注扩展性瓶颈。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/24246)

10. **[P2] (Sub)agents running without permission since v0.33.0** (#22093)
    *   **重要性**: 重大回归 Bug，子代理在用户明确禁用配置的情况下仍被启用，涉及权限和控制权问题。
    *   **社区反应**: 3 条评论，引发对版本更新稳定性的担忧。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22093)

## 4. 重要 PR 进展
以下 PR 涉及核心功能修复、安全加固及基础设施改进：

1.  **feat(caretaker-evals): add local golden issue collection and firestore sync tools** (#28532)
    *   **内容**: 添加用于组装黄金测试用例并与 Cloud Firestore 同步的 CLI 工具，增强 Caretaker Agent 的评估能力。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28532)

2.  **fix(core): filter out thought parts from getHistoryTurns when context management is disabled** (#28509)
    *   **内容**: 修复当上下文管理禁用时，`getHistoryTurns` 返回中包含内部思维片段（thought parts）的问题，防止推理块重复泄露。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28509)

3.  **fix(auth): use native fetch for OAuth token exchange to avoid "Premature close"** (#28446)
    *   **内容**: 解决在无头 VPS 环境下 OAuth 令牌交换时因 `Premature close` 导致的登录失败问题，提升稳定性。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28446)

4.  **fix(core): enforce HTTPS for GoogleCredentialsAuthProvider to prevent cleartext leakage** (#28517)
    *   **内容**: 强制 `GoogleCredentialsAuthProvider` 使用 HTTPS 协议，防止敏感 ADC 令牌在明文 HTTP 连接中泄露。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28517)

5.  **fix(vscode-ide-companion): stop leaking gemini.diff.accept and onDidChangeWorkspaceFolders disposables** (#28526)
    *   **内容**: 修复 VS Code 插件中的内存泄漏问题，纠正了 Disposable 注册时的语法错误。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28526)

6.  **fix(a2a-server): normalize CRLF line endings to LF in getProposedContent** (#28531)
    *   **内容**: 解决 Windows 上 Gemini Code Assist 侧边栏 Diff 视图无法高亮显示更改的问题，统一行尾符格式。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28531)

7.  **feat(caretaker): add GCP deployment script for caretaker agent services** (#28529)
    *   **内容**: 提供 GCP Cloud Run 部署脚本，简化 Caretaker Agent 各服务（Ingestion, Triage, Egress）的云端部署流程。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28529)

8.  **fix(core): enforce explicit tag length and validation in file keychain** (#28523)
    *   **内容**: 在基于文件的关键链存储中强制执行显式认证标签长度和验证，提高凭证存储的安全性。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28523)

9.  **feat(pr-generator-core): add environment config parser, command executor...** (#28435)
    *   **内容**: 引入 SSR 管道的基础实用模块，包括配置解析、子进程执行和 GitHub API 客户端集成。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28435)

10. **fix(trust dialog disclosure for runnable hooks)** (#28346)
    *   **内容**: 修复可运行 Hook 的信任对话框披露逻辑，确保只报告有效的嵌套 Hook 定义，防止误报。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28346)

## 5. 功能需求趋势
从 Issues 和 PR 中可以观察到以下趋势：
*   **Agent 可靠性与可控性**: 社区高度关注子代理（Subagent）的行为稳定性，包括防止挂起、正确处理终止条件以及尊重用户权限配置。
*   **安全与隐私强化**: 对 Auto Memory 的数据处理、OAuth 令牌传输安全以及文件权限控制提出了更高要求，推动确定性红action（Redaction）和安全协议的实施。
*   **评估基础设施完善**: Caretaker Agent 的评估框架、黄金数据集管理和 CI 集成正在快速迭代，显示出对自动化质量保障的重视。
*   **跨平台兼容性**: 针对 Wayland、Windows 行尾符差异等特定环境的修复需求持续存在，强调全平台体验的一致性。

## 6. 开发者关注点
*   **子代理行为异常**: 开发者频繁报告子代理在达到限制时状态报告错误、无故挂起或在禁用状态下意外启动，这严重影响了工作流的连贯性。
*   **资源泄露与性能**: 内存泄漏（如 VS Code 插件中的 Disposable）、无限重试循环（Auto Memory）以及 Shell 命令等待状态卡死是主要的性能痛点。
*   **安全信任**: 用户对敏感信息（如令牌、代码库路径）在处理过程中的泄露风险非常敏感，特别是在后台提取和日志记录环节。
*   **调试可见性**: 缺乏子代理内部的详细上下文（如 Bugreport 中缺失子代理信息）使得排查复杂问题变得困难，呼吁增强调试数据的完整性。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期**: 2026-07-25
**数据来源**: github.com/github/copilot-cli

## 1. 今日速览
GitHub Copilot CLI 于昨日发布 v1.0.75，正式引入对 **Claude Opus 5** 模型的支持，标志着多模型策略的进一步扩展。今日社区焦点集中在 v1.0.74/75 版本引发的多项回归问题上，特别是计划模式（Plan Mode）权限限制过严、会话恢复时的内存溢出（OOM）以及终端渲染冻结等稳定性问题，引发大量开发者反馈。

## 2. 版本发布
### v1.0.75 (2026-07-24)
- **核心更新**: 添加了对 Claude Opus 5 模型的支持。
- **影响**: 用户现在可以在 CLI 中调用最新一代 Claude 模型进行更复杂的代码生成和推理任务。

## 3. 社区热点 Issues
以下 Issue 因评论数高、点赞多或涉及关键功能回归而备受关注：

1. **[Feature] 等待用户输入的 Hook 支持** (#1128)
   - **摘要**: 当前缺乏在 CLI 等待用户输入时触发的 Hook，限制了自动化场景。
   - **热度**: 👍 28 | 评论: 5
   - **链接**: [Issue #1128](https://github.com/github/copilot-cli/issues/1128)

2. **[Bug] 计划模式回归：阻止 Shell 命令执行** (#4188)
   - **摘要**: v1.0.7x 版本后，`gh` CLI 等只读命令被错误拦截，破坏了通过 Shell 丰富计划上下文的工作流。
   - **热度**: 👍 3 | 评论: 4
   - **链接**: [Issue #4188](https://github.com/github/copilot-cli/issues/4188)

3. **[Bug] Linux 下僵尸进程累积** (#4163)
   - **摘要**: 子进程未被正确回收，导致每个会话积累约 2 个僵尸进程，长期运行可能导致资源泄漏。
   - **热度**: 👍 3 | 评论: 3
   - **链接**: [Issue #4163](https://github.com/github/copilot-cli/issues/4163)

4. **[Bug] 自动压缩无法防止 CAPI 5MB 限制失败** (#4183)
   - **摘要**: 长会话中，尽管 Token 未超限，但序列化后的请求体超过 5MB 导致 API 调用永久失败，且自动压缩机制对此无效。
   - **热度**: 👍 10 | 评论: 3
   - **链接**: [Issue #4183](https://github.com/github/copilot-cli/issues/4183)

5. **[Bug] 浅色主题显示异常** (#3773)
   - **摘要**: 用户提示背景为黑色且对比度低，严重影响可读性。
   - **热度**: 👍 3 | 评论: 3
   - **链接**: [Issue #3773](https://github.com/github/copilot-cli/issues/3773)

6. **[Bug] `/sandbox` 命令不可用** (#4242)
   - **摘要**: 新版中 `/sandbox` 命令从列表消失并报错 `Unknown command`，疑似配置或注册丢失。
   - **热度**: 评论: 3
   - **链接**: [Issue #4242](https://github.com/github/copilot-cli/issues/4242)

7. **[Bug] 插件安装路径拼接错误** (#2200)
   - **摘要**: 从市场安装插件时，路径重复导致安装失败。
   - **热度**: 👍 1 | 评论: 2
   - **链接**: [Issue #2200](https://github.com/github/copilot-cli/issues/2200)

8. **[Bug] 会话启动时陷入无限加载循环** (#4214)
   - **摘要**: 新会话启动后显示“Loading: 1 skill”并持续闪烁，疑似与计费或技能加载冲突。
   - **热度**: 👍 2 | 评论: 2
   - **链接**: [Issue #4214](https://github.com/github/copilot-cli/issues/4214)

9. **[Bug] Ctrl+C 无法中断 Agent 运行** (#4235)
   - **摘要**: 紧急中断快捷键失效，导致用户无法停止卡住的 Agent 任务。
   - **热度**: 评论: 1
   - **链接**: [Issue #4235](https://github.com/github/copilot-cli/issues/4235)

10. **[Bug] 计划模式误报只读命令** (#4220)
    - **摘要**: `gh api GET` 等明确只读操作被权限系统判定为可能修改工作区而被阻断。
    - **热度**: 👍 1 | 评论: 1
    - **链接**: [Issue #4220](https://github.com/github/copilot-cli/issues/4220)

## 4. 重要 PR 进展
**今日无新增 Pull Requests。**

## 5. 功能需求趋势
通过分析今日 Issues，社区主要关注以下方向：
1. **多模型集成与兼容性**: 随着 v1.0.75 引入 Claude Opus 5，社区对新模型的集成细节及与其他模型的切换体验关注度上升。
2. **会话管理与稳定性**: 大量 Issue 聚焦于会话恢复（Resume）、内存泄漏（OOM）、僵尸进程清理以及工作树（Worktree）的生命周期管理，反映出对长会话稳定性的强烈需求。
3. **权限与沙箱精细化控制**: 开发者普遍反映当前的权限过滤过于激进（如误拦只读命令），需要更细粒度的工具访问控制和“计划模式”下的安全边界调整。
4. **IDE 与终端体验优化**: 包括 VS Code 中的插件支持、Linux 下的剪贴板行为、主题适配以及非交互模式（ACP）的状态同步。

## 6. 开发者关注点
- **回归问题频发**: 近期版本（v1.0.74/75）出现了多个严重回归，包括权限误判、终端渲染死锁、Ctrl+C 失效等，导致用户体验下降。
- **资源消耗过大**: 在恢复大型会话时出现的 OOM 问题和 CPU 满载现象，限制了 CLI 处理复杂项目的能力。
- **工作流中断**: 权限系统的过度保守（如阻断 `gh` CLI 读取 Issue）直接打断了开发者依赖 Copilot 进行代码探索和管理的习惯。
- **配置持久化 Bug**: 会话退出时错误覆盖 `settings.json` 中的模型设置，导致配置意外回滚。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：** 2026-07-25
**数据来源：** GitHub MoonshotAI/kimi-cli

## 1. 今日速览
今日无新版本发布，但社区活跃度较高，主要关注点集中在**网络认证稳定性**与**企业级代理兼容性**上。开发者对“远程控控”功能呼声极高（Issue #1282），同时针对 Windows 终端交互体验及 VS Code 插件稳定性的 Bug 报告持续增加，反映出跨平台兼容性和企业内网支持是当前优化的重点方向。

## 2. 版本发布
*   **无新发布**：过去 24 小时内未检测到新的 Release。

## 3. 社区热点 Issues
以下 Issue 因讨论热度、影响范围或代表性问题被选中：

1.  **[Feature] Remote Control - Continue local sessions from any device (#1282)**
    *   **重要性**：解决了用户离开桌面后无法继续编码会话的核心痛点，支持手机/平板/浏览器无缝衔接。
    *   **社区反应**：👍 16，评论 7，显示出极高的期待值，是近期最受关注的功能请求。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/1282)

2.  **[Bug] windows 版本的herdr中，无法使用方向键选择 (#2521)**
    *   **重要性**：直接影响 Windows 用户的基础交互体验，属于高优先级的 UX Bug。
    *   **社区反应**：刚提交不久，已引起注意。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/2521)

3.  **[Bug] Login failed: Cannot connect to host auth.kimi.com:443 ... (#1070)**
    *   **重要性**：涉及核心登录流程的网络连通性问题，可能由 DNS、防火墙或地区网络波动引起。
    *   **社区反应**：虽然已关闭，但作为历史高频问题的参考案例仍有价值。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/1070)

4.  **[Bug] kimi login fails (#2556)**
    *   **重要性**：最新提交的登录失败报告，涉及 Linux ARM64 架构，暗示可能存在特定平台或 OAuth 流程的回归问题。
    *   **社区反应**：新建 Issue，需密切关注后续进展。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/2556)

5.  **[Bug] VS code Kimi Freezes (#2326)**
    *   **重要性**：VS Code 插件在 Ubuntu 环境下出现冻结，严重影响开发效率，涉及版本兼容性（0.5.10 vs kimi 2.6）。
    *   **社区反应**：用户反馈存在多个并发问题。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/issues/2326)

## 4. 重要 PR 进展
以下 PR 对用户体验和底层稳定性有显著改进：

1.  **fix: respect SSL_CERT_FILE env var for corporate proxy support (#762)**
    *   **内容**：添加对 `SSL_CERT_FILE` 环境变量的支持，解决企业代理（如 Zscaler, BlueCoat）下的 SSL 证书验证错误。
    *   **价值**：极大提升了 Kimi CLI 在企业内网环境中的可用性，是 B 端部署的关键修复。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/pull/762)

2.  **fix: route MCP server log notifications to loguru instead of TUI (#1637)**
    *   **内容**：将 MCP 服务器（如 SearXNG）的日志通知重定向至 loguru，避免日志信息刷屏干扰 TUI（终端用户界面）显示。
    *   **价值**：优化了终端界面的整洁度和可读性，提升了使用第三方 MCP 服务时的体验。
    *   [链接](https://github.com/MoonshotAI/kimi-cli/pull/1637)

*(注：数据源中仅列出 2 条 PR，故全部呈现)*

## 5. 功能需求趋势
从 Issues 和 PR 中提炼出的核心趋势：

*   **企业级网络支持**：通过 PR #762 和多个 Login 相关的 Issue，可以看出开发者对**企业代理兼容性**、**SSL 证书自定义**以及**内网穿透能力**有强烈需求。
*   **跨设备工作流连续性**：Issue #1282 的高热度表明，用户希望打破终端限制，实现**移动端/浏览器端的远程控制**，以增强开发的灵活性。
*   **平台交互优化**：Windows 方向键失效（#2521）和 VS Code 冻结（#2326）反映了不同操作系统和 IDE 集成下的**交互一致性**和**稳定性**仍需加强。

## 6. 开发者关注点
*   **认证稳定性**：多次出现 `Login failed` 相关 Issue，涵盖 Windows、Linux ARM64 等不同环境，说明 OAuth 流程或网络握手环节存在不稳定因素。
*   **终端 UI/UX 细节**：Windows 下方向键无法导航是典型的 TUI 库兼容性问题，开发者希望获得更流畅的原生交互体验。
*   **IDE 集成健壮性**：VS Code 插件的冻结问题直接阻碍日常开发，社区期待更稳定的 IDE 扩展支持。
*   **日志噪音控制**：MCP 服务器日志污染 TUI 界面，开发者倾向于将后台日志与前台交互分离，以保持界面清晰。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-07-25
**数据来源：** github.com/anomalyco/opencode

## 1. 今日速览
OpenCode v1.18.5 发布，重点修复了 Claude 自适应思考、OpenAI Responses 阶段处理及 Mistral 稳定性等核心问题。社区对“自动发现兼容模型”的需求持续高涨（Issue #6231），同时近期涌现大量关于 Agent 意外停止、会话崩溃及 Windows 路径处理的用户反馈，显示版本迭代后的稳定性仍是当前关注焦点。

## 2. 版本发布
**v1.18.5 (Core Bugfixes)**
本次更新主要解决多模型交互中的兼容性与稳定性问题：
*   **Claude:** 改进了对多种响应形状的自适应思考处理逻辑。
*   **OpenAI:** 修复了可能导致对话中断的 Responses 阶段处理 bug。
*   **Mistral:** 跨轮次保留推理历史，并提升了整体稳定性。
*   **搜索:** 在搜索结果中保留了 grep 符号链接路径。

🔗 [GitHub Releases: v1.18.5](https://github.com/anomalyco/opencode/releases/tag/v1.18.5)

## 3. 社区热点 Issues
以下 Issue 因高评论数或近期活跃度被选中，反映了用户最迫切的痛点与需求：

1.  **[FEATURE] Auto-discover models from OpenAI-compatible provider endpoints** (#6231)
    *   **热度:** 32 评论, 188 👍
    *   **重要性:** 用户强烈要求支持 LM Studio/Ollama 等本地提供商的模型自动发现，避免手动配置 `opencode.json`。这是提升本地 AI 工作流体验的关键功能。
    *   🔗 [Issue #6231](https://github.com/anomalyco/opencode/issues/6231)

2.  **[BUG] Long-running shell commands hang even after “BUILD SUCCESSFUL”** (#25038)
    *   **热度:** 11 评论, 9 👍
    *   **重要性:** Gradle 等构建工具完成后进程挂起，严重影响 CI/CD 自动化场景下的 Agent 效率。
    *   🔗 [Issue #25038](https://github.com/anomalyco/opencode/issues/25038)

3.  **[FEATURE] Cross-project session list / picker for TUI** (#31932)
    *   **热度:** 13 评论, 5 👍
    *   **重要性:** 多仓库开发者急需在 TUI 中跨项目切换和管理会话，当前仅支持当前项目作用域。
    *   🔗 [Issue #31932](https://github.com/anomalyco/opencode/issues/31932)

4.  **[BUG] opencode jumping into a difference language** (#25130)
    *   **热度:** 10 评论
    *   **重要性:** 用户反馈 Big Pickle 模型偶尔会切换语言，影响多语言开发的一致性体验。
    *   🔗 [Issue #25130](https://github.com/anomalyco/opencode/issues/25130)

5.  **[BUG] opencode reads agents.md from parent directories** (#6479)
    *   **热度:** 10 评论
    *   **重要性:** 全局读取父级 `agents.md` 可能导致上下文污染或意外行为，用户希望限定作用域。
    *   🔗 [Issue #6479](https://github.com/anomalyco/opencode/issues/6479)

6.  **[BUG] Opencode Go: kimi-k3 fails on /v1/messages** (#38378)
    *   **热度:** 4 评论
    *   **重要性:** 特定模型（Kimi K3）在 Anthropic 兼容端点下失败，暴露了网关层面的协议兼容性问题。
    *   🔗 [Issue #38378](https://github.com/anomalyco/opencode/issues/38378)

7.  **[BUG] Session close or delete not working/crashing** (#38771)
    *   **热度:** 2 评论
    *   **重要性:** 基础会话管理功能崩溃，直接影响用户日常使用信心。
    *   🔗 [Issue #38771](https://github.com/anomalyco/opencode/issues/38771)

8.  **[BUG] OpenCode stops executing every task after ~30 seconds** (#38766)
    *   **热度:** 2 评论
    *   **重要性:** 任务执行存在硬性超时或中断，导致复杂任务无法完成，需频繁人工介入。
    *   🔗 [Issue #38766](https://github.com/anomalyco/opencode/issues/38766)

9.  **[BUG] Crash in different sessions within seconds of submitting tasks** (#38756)
    *   **热度:** 2 评论
    *   **重要性:** 提交任务后秒级崩溃，属于严重稳定性故障。
    *   🔗 [Issue #38756](https://github.com/anomalyco/opencode/issues/38756)

10. **[BUG] opencode run --auto hangs indefinitely when a Task subagent requests permission** (#36868)
    *   **热度:** 3 评论
    *   **重要性:** 非交互式运行模式下，子代理权限请求导致主进程永久挂起，阻塞自动化脚本。
    *   🔗 [Issue #36868](https://github.com/anomalyco/opencode/issues/36868)

## 4. 重要 PR 进展
近期合并及进行中的 PR 主要集中在核心架构优化、稳定性修复及新特性支持：

1.  **Refactor(core): settle steps lock-free by joining tool fibers first** (#38743)
    *   **内容:** Kitlangton 重构了 runner 的核心步骤锁定机制，移除了 12 个信号量站点，实现无锁化结算，显著提升并发性能。
    *   🔗 [PR #38743](https://github.com/anomalyco/opencode/pull/38743)

2.  **Fix(core): keep execute tool cache stable** (#38783)
    *   **内容:** 修复了 Code Mode 目录为空时 `execute` 工具缓存不稳定的问题，确保权限控制准确。
    *   🔗 [PR #38783](https://github.com/anomalyco/opencode/pull/38783)

3.  **Fix(ai): preserve response message phases** (#38777 & #38762)
    *   **内容:** 对齐 OpenAI SDK 规范，保留 `commentary`、`final_answer` 等阶段元数据，解决流式输出排序导致的对话断裂问题。
    *   🔗 [PR #38777](https://github.com/anomalyco/opencode/pull/38777) | [PR #38762](https://github.com/anomalyco/opencode/pull/38762)

4.  **Fix(core): branch-keyed repository cache with gated reference readiness** (#38759)
    *   **内容:** 修复了 RepositoryCache 中多分支共享单一 checkout 导致的正确性 bug，按分支键值管理缓存。
    *   🔗 [PR #38759](https://github.com/anomalyco/opencode/pull/38759)

5.  **Feat(auth): add support for multiple profiles per provider** (#36781)
    *   **内容:** 支持同一提供商存储多个 API Key（如不同的 OpenRouter 账户），通过命名 Profile 切换。
    *   🔗 [PR #36781](https://github.com/anomalyco/opencode/pull/36781)

6.  **Fix(opencode): keep DeepSeek assistant content non-empty** (#38778)
    *   **内容:** 解决 DeepSeek 返回空 reasoning_content 导致助手轮次丢失的问题。
    *   🔗 [PR #38778](https://github.com/anomalyco/opencode/pull/38778)

7.  **Feat(tui): show model variant in subagent footer** (#38772)
    *   **内容:** 在子代理会话页脚显示模型变体详情，增强调试透明度。
    *   🔗 [PR #38772](https://github.com/anomalyco/opencode/pull/38772)

8.  **Feat(core): enable fff in node runtimes** (#38776)
    *   **内容:** 引入 `@ff-labs/fff-node` 运行时依赖，替代 Node FFF stub，统一搜索适配器。
    *   🔗 [PR #38776](https://github.com/anomalyco/opencode/pull/38776)

9.  **Fix(tui): handle Windows path separators in status dialog plugin names** (#38764)
    *   **内容:** 修复 Windows 下 `/status` 命令中插件文件路径显示错误的问题。
    *   🔗 [PR #38764](https://github.com/anomalyco/opencode/pull/38764)

10. **Fix(session): preserve agent and model on async prompt without explicit fields** (#35195)
    *   **内容:** 确保异步提示词在不指定字段时也能保留当前的 Agent 和模型设置。
    *   🔗 [PR #35195](https://github.com/anomalyco/opencode/pull/35195)

## 5. 功能需求趋势
从 Issues 和 PR 中提炼出的社区核心关注方向：

*   **模型互操作性与兼容性:** 用户极度渴望支持更多模型（GPT-5.6, Kimi K3, Qwen 3.6）及更广泛的 OpenAI 兼容端点。特别是**自动发现模型列表**已成为最高优先级的功能请求之一。
*   **稳定性与健壮性:** 近期大量 Issue 报告 Agent 意外停止、会话崩溃及长时间任务挂起。社区对 `opencode run --auto` 等非交互模式的稳定性尤为敏感。
*   **多租户与配置管理:** 支持多 Profile API Key、跨项目会话管理、以及更细粒度的权限控制（如 `agents.md` 作用域限制）是进阶用户的需求重点。
*   **平台特定优化:** Windows 用户在路径处理、控制台窗口闪烁及子进程生成方面遇到了较多兼容性问题，期待更完善的原生支持。

## 6. 开发者关注点
*   **高频痛点:** “Agent 中途停止”和“需要手动输入 continue 才能继续”是近期最频繁的反馈，表明当前的自动循环机制仍存在缺陷。
*   **调试困难:** 缺乏详细的耗时统计（Issue #38666）和清晰的错误日志（如 `opencode serve` 绑定失败不显示 errno），使得排查性能瓶颈和网络问题变得困难。
*   **本地集成:** 对于 LM Studio、Ollama 等本地部署方案，用户希望减少手动配置成本，实现即插即用。
*   **GUI vs TUI 一致性:** 粘贴路径行为不一致、OneDrive 同步目录显示问题等，反映出不同客户端间体验割裂，需加强统一性。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期：** 2026-07-25
**数据来源：** github.com/badlogic/pi-mono

## 1. 今日速览
Pi v0.82.0 正式发布，引入受限工具采样（Constrained Tool Sampling）功能，增强了对 JSON Schema 和 OpenAI Lark/regex 语法的严格支持。社区当前高度关注 `llama.cpp` 本地模型的启动配置问题、会话压缩（Compaction）后的状态异常，以及模型切换时的上下文验证缺失导致的崩溃风险。

## 2. 版本发布
### v0.82.0
*   **核心更新：受限工具采样 (Constrained Tool Sampling)**
    *   工具现在可以偏好或要求严格的 JSON Schema 采样，或使用 OpenAI Lark/regex 语法。
    *   引入模型能力元数据，防止向不支持的模型发送不兼容的请求，提升工具调用的稳定性和准确性。
    *   详情参考：[Constrained Sampling for Tools](https://github.com/earendil-works/pi/blob/v0.82.0/package)

## 3. 社区热点 Issues
以下 Issue 在过去24小时内讨论最激烈或影响范围最广：

1.  **[Bug] Copilot Enterprise 压缩失败** (#6768)
    *   **重要性：** 使用 Copilot Enterprise License 进行上下文压缩时，OpenAI API 返回 421 Misdirected Request 错误，导致关键会话无法继续。
    *   **反应：** 12条评论，11个 👍，用户反馈强烈。
2.  **[Bug] llama.cpp 默认模型启动报错 "No models available"** (#6922)
    *   **重要性：** 配置 `defaultProvider: "llama.cpp"` 后，Pi 启动时无法识别已加载的本地模型，直接退出或显示警告，严重影响本地 AI 工作流。
    *   **反应：** 10个 👍，高优先级 Bug。
3.  **[Bug] Gemini 3.x 工具调用 ID 被剥离** (#7047)
    *   **重要性：** 多轮对话中，Gemini 3.x 返回的 `functionCall` ID 在历史记录回放时被丢弃，导致后续 `functionResponse` 匹配失败。
    *   **反应：** 新发现，涉及最新模型兼容性。
4.  **[Bug] GitHub Copilot Plugin 集成导致 Token 失效** (#6970)
    *   **重要性：** Pi 使用 Copilot Plugin 而非 OAuth 可能导致双设备登录时 Token 快速失效，影响多端协作体验。
    *   **反应：** 开发者正在调查认证机制冲突。
5.  **[Bug] 会话压缩后 Pi 有时不再继续生成** (#7020)
    *   **重要性：** 长会话压缩后，Agent 可能陷入停滞，不再响应用户输入，需手动重启或重载。
    *   **反应：** 涉及核心交互逻辑，影响用户体验。
6.  **[Bug] 模型切换导致会话中断及 HTML 错误** (#7067, #7065)
    *   **重要性：** 在 Qwen 和 GPT 之间切换模型时，因未校验上下文窗口大小或 Thinking 设置，导致 API 返回 HTML 错误或 400 Bad Request，会话直接损坏。
    *   **反应：** 多个相关 Issue 合并讨论，急需修复。
7.  **[Bug] `/copy` 命令在沙箱环境中虚假成功** (#6872)
    *   **重要性：** 在 bwrap 等沙箱中运行时，`wl-copy` 失败但未检查退出码，导致 Pi 误报复制成功，且跳过 fallback 到 `xclip`。
    *   **反应：** 12条评论，Linux 用户痛点。
8.  **[Bug] AWS Bedrock 忽略配置文件中的 Profile** (#6957)
    *   **重要性：** 当存在 AWS 环境变量时，Pi 会忽略 `settings.json` 中配置的 Bedrock Profile，导致认证混乱。
9.  **[Bug] qwen3.8-max-preview 推理层级映射错误** (#6951)
    *   **重要性：** Pi 使用了默认的推理层级，但 Qwen 官方文档要求不同的层级设置（low, medium, xhigh），导致参数传递错误。
10. **[Bug] 并发 inline prompt 导致死锁** (#7007)
    *   **重要性：** 快速连续打开两个 inline custom prompt 会导致第一个 Promise 永远不解决，造成界面卡死。

## 4. 重要 PR 进展
以下 PR 展示了近期的主要开发方向和修复：

1.  **#7082 [Perf] TUI 视口窗口化渲染优化**
    *   **内容：** 实现 O(viewport) 复杂度的转录本渲染，解决大型会话（5000+行）中的输入延迟问题。
    *   **状态：** Closed (Merged)
2.  **#7081 [Feat] 支持 Bedrock 上的 Claude Opus 5**
    *   **内容：** 配置 Claude Opus 5 使用自适应思考模式，并修复 Bedrock 提供商的错误消息隐藏细节问题。
    *   **状态：** Open
3.  **#7072 [Fix] 缓存 llama.cpp 模型目录**
    *   **内容：** 修复 #6948，通过缓存模型目录解决启动时的竞态条件，确保 `defaultModel` 正确应用。
    *   **状态：** Open
4.  **#7046 [Feat] 添加提供商无关的 Prompt Cache 契约**
    *   **内容：** 引入新的缓存断点合同，强化 OpenAI Codex 传输层处理，提供更健壮的缓存可用性聚合。
    *   **状态：** Closed (Merged)
5.  **#7055 [Fix] 防止工具验证错误触发重试**
    *   **内容：** 修复当 LLM 发送格式错误的工具参数时，因错误信息中包含 '429' 而错误触发 Agent 级重试的问题。
    *   **状态：** Closed (Merged)
6.  **#7059 [Feat] 暴露 setRenderedSession 扩展 API**
    *   **内容：** 允许外部扩展接管 Pi 的主要交互式渲染器（转录本、页脚、编辑器提交路由等），提升扩展灵活性。
    *   **状态：** Closed (Merged)
7.  **#7050 [Fix] 规范化 OpenAI 工具 Schema 必需数组**
    *   **内容：** 修复 DeepSeek 等严格提供商拒绝 `required` 为 null 的工具定义的问题，显式发射空数组。
    *   **状态：** Closed (Merged)
8.  **#6654 [Feat] 添加 promptCacheKey 流选项**
    *   **内容：** 允许通过 `promptCacheKey` 覆盖提示词缓存键，替代默认的 sessionId，细粒度控制缓存行为。
    *   **状态：** Open
9.  **#7085 [Feat] 添加 vitest eval harness**
    *   **内容：** 引入私有 `packages/evals` 工作区，提供基于 Vitest 的评估框架，支持显式提供商/模型选择和隔离测试。
    *   **状态：** Open
10. **#7009 [Fix] 等待 wl-copy 退出码并降级到 xclip**
    *   **内容：** 修复 #6872，确保在 `wl-copy` 失败时正确执行 fallback 到 `xclip` 或 OSC 52。
    *   **状态：** Closed (Merged)

## 5. 功能需求趋势
*   **本地模型与 llama.cpp 集成深化：** 社区对本地模型的支持需求极高，主要集中在解决启动配置、模型缓存、推理层级映射（Thinking Level）以及异步刷新竞态条件等问题。
*   **会话管理与压缩稳定性：** 随着模型上下文窗口扩大，会话压缩（Compaction）的可靠性成为焦点。用户频繁报告压缩后状态丢失、ID 不匹配或代理停滞问题。
*   **跨提供商兼容性标准化：** 针对 Anthropic OAuth 令牌检测、AWS Bedrock Profile 忽略、Gemini 3.x ID 处理等问题的反馈，表明社区期望更健壮的提供商抽象层和自动适配机制。
*   **UI/UX 性能优化：** 对大型转录本的渲染性能优化（如 PR #7082）受到欢迎，显示出用户对长会话流畅交互的高要求。

## 6. 开发者关注点
*   **认证与令牌管理：** Copilot 插件集成导致的 Token 失效、Anthropic OAuth 硬编码问题、AWS 环境变量覆盖配置文件等问题，反映了认证机制在不同场景下的脆弱性。
*   **错误处理与重试逻辑：** 工具验证错误引发的无限重试、API 返回非标准响应（如 HTML 错误页）时的解析失败，是开发者调试的重点。
*   **沙箱与环境隔离：** 在 bwrap 等沙箱环境中，剪贴板命令 (`wl-copy`) 的行为差异和权限问题需要更完善的 Fallback 机制。
*   **模型切换的健壮性：** 用户在会话中途切换模型时，缺乏对上下文窗口大小和特定模型参数（如 Thinking）的预检查，导致静默失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期**: 2026-07-25

## 1. 今日速览
Qwen Code v0.21.0 正式释放，修复了 CLI 洞察报告中的时区显示问题，并引入了 Web Shell 工作区选择器。社区活跃度极高，围绕 SWE-bench 基准测试的异步 POC 版本持续发布，同时开发者对 TUI 渲染缺陷、后台 Shell 状态管理及多 Agent 系统提示词冲突等核心体验问题关注热烈。

## 2. 版本发布
*   **v0.21.0**: 正式版本发布。
    *   **关键修复**: 统一了 CLI 洞察（Insight）报告中天数和小时的本地时区计算逻辑 (#7670)。
    *   **新功能**: Web Shell  Composer 工具栏新增工作区选择按钮，支持添加/切换工作区 (#7390)。
    *   **注意**: 官方声明无已知破坏性变更。
*   **DSW SWE-bench POC 系列 (v0.20.0-nightly 基准)**: 发布了多个非官方的隔离测试预发布版本 (`dsw-swe-full-poc-20260724-*`)，用于在 DSW 自托管运行器上验证 500 个 SWE-bench Verified 案例的完整结果。其中部分版本状态标记为 **QUARANTINED**，主要展示了解决率、未解决及执行错误等详细指标。

## 3. 社区热点 Issues
以下 Issue 因涉及核心体验、性能瓶颈或重大功能请求而备受关注：

1.  **[Bug] TUI 回复超出终端高度时最后一行被覆盖** (#5800)
    *   *重要性*: 影响默认静态模式下的基础阅读体验，导致信息丢失。
    *   *社区反应*: 上游 Ink 库问题，需本地适配。
2.  **[Bug] 后台 Shell 输出为空时模型误判并重启动任务** (#7626)
    *   *重要性*: 涉及长期运行的 Python 训练脚本等场景，错误状态感知会导致资源浪费和逻辑中断。
3.  **[Bug] 系统默认 Explore 指引覆盖 QWEN.md 多 Agent 禁令** (#7679)
    *   *重要性*: 暴露了系统提示词优先级管理的缺陷，用户自定义规则被系统行为覆盖，影响多 Agent 成本控制。
4.  **[Enhancement] 冷启动懒加载优化：ACP 子进程 eager-closure 审计后续** (#7264)
    *   *重要性*: 针对 17.24 MiB 的模块在冷启动时被强制解析的问题，直接影响 CLI 启动速度。
5.  **[Bug] Command 模式下多行 Statusline 导致输入法候选框位置偏移** (#7684)
    *   *重要性*: macOS 特定环境的 UX 痛点，影响中文输入体验。
6.  **[Bug] Thinking 模式下 `tool_choice: "required"` 被 DashScope 拒绝** (#7659)
    *   *重要性*: 限制了思考模式下的工具调用灵活性，需配置绕过或后端适配。
7.  **[Feature] 子代理生成时的模型等级选择** (#7685)
    *   *重要性*: 允许用户在 Agent 工具中指定子代理使用的模型规格（小/中/大/超），实现更精细的成本/性能控制。
8.  **[Bug] WSL + Windows Terminal 流式输出文本重复渲染** (#7634)
    *   *重要性*: 特定环境下的严重渲染 Bug，导致界面混乱。
9.  **[Feature] 添加生成计时指标 (TPS, TTFT) 到 /stats** (#4252)
    *   *重要性*: 开发者急需实时性能监控数据以评估模型响应效率。
10. **[Bug] OpenAI 兼容流式响应中 Token 用量丢失** (#7649)
    *   *重要性*: 涉及计费准确性和会话统计的正确性。

## 4. 重要 PR 进展
以下 PR 展示了当前开发重点：

1.  **PR #7651 [Perf] 系统提示词分层重构**
    *   将系统提示词重组为稳定、上下文、易变三层结构，优化自动记忆部分的加载顺序，提升上下文管理效率。
2.  **PR #7686 [Perf] 延迟加载首次使用依赖**
    *   进一步优化冷启动性能，通过懒加载策略减少初始内存占用和解析时间。
3.  **PR #7268 [Feat] 工作区信任热重载**
    *   无需重启守护进程即可应用工作区信任策略变更，提升开发调试体验。
4.  **PR #7669 [Fix] 后台 Shell 状态边车文件**
    *   为解决 #7626 提出的方案，为后台 Shell 创建可读的状态 JSON 文件，防止模型误读空输出文件。
5.  **PR #7680 [Perf] Web Shell Git Chip 即时渲染**
    *   利用缓存和去重机制，使 Composer 中的 Git 分支标签几乎瞬间显示，提升 UI 响应感。
6.  **PR #7632 [Feat] GitHub 轮询适配器**
    *   新增 GitHub 频道适配器，支持通过轮询通知和 @提及 唤醒 Agent 并回复 Issue/PR，扩展了集成场景。
7.  **PR #7586 [Feat] 外部上下文检索集成**
    *   引入仅检索模式的外部上下文提供者，支持受限凭证下的私有语料库搜索。
8.  **PR #7694 [Fix] Review Worktree 租约清理**
    *   修复 `/review` 取消后遗留的工作目录和分支问题，确保环境整洁。
9.  **PR #7698 [Feat] 钉钉图片发送支持**
    *   允许钉钉频道发送 Agent 生成的本地图片（如截图、图表），增强沟通富媒体能力。
10. **PR #7656 [CI] DSW SWE-bench 异步发布流水线**
    *   构建了隔离的异步基准测试发布流程，用于大规模验证 SWE-bench 表现。

## 5. 功能需求趋势
从 Issues 和 PRs 中可提炼出以下社区关注方向：
*   **性能与启动速度**: 冷启动优化、懒加载、Token 统计准确性是高频痛点。
*   **多 Agent 与工作流控制**: 用户希望更细粒度地控制子代理的模型选择、工具限制以及系统提示词的优先级。
*   **IDE/Shell 集成增强**: 包括 GitHub 通知集成、钉钉图片发送、Web Shell 的 Git 视图完善等。
*   **稳定性与状态管理**: 后台进程状态同步、TUI 渲染稳定性、不同环境（WSL/macOS）的兼容性修复。

## 6. 开发者关注点
*   **UX 细节打磨**: TUI 渲染bug（如 #5800, #7634, #7684）频繁出现，表明底层终端库交互仍有较多边缘情况需处理。
*   **状态一致性**: 后台 Shell、Review 工作区、系统提示词层级的状态同步是主要技术难点，开发者期望更健壮的“状态边车”或信号机制。
*   **可观测性**: 对实时性能指标（TPS, TTFT）和 Token 用量的透明化需求强烈，以便进行成本控制和性能调优。
*   **配置灵活性**: 用户希望摆脱硬编码的限制（如重试延迟 #7658、时区计算 #6835），获得更高的配置自由度。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期**: 2026-07-25
**数据来源**: github.com/Hmbown/DeepSeek-TUI (CodeWhale)

## 1. 今日速览
v0.9.1 版本已发布，标志着 `deepseek-tui` 正式更名为 **Codewhale**，旧版 npm 包已弃用。社区重点转向 v0.9.2 的大规模架构重构，包括工作流运行时模型（Fleet/Workflow/Lane/Runtime）的落地以及 TUI 界面的彻底 overhaul。同时，多语言本地化（印地语、乌克兰语）及性能优化成为近期讨论热点。

## 2. 版本发布
### v0.9.1: Codewhale 品牌重塑与基础设施更新
*   **品牌变更**: 公共产品名称正式更改为 `codewhale`，命令行工具、npm 包及发布资产名称均保持小写技术标识符格式。
*   **弃用通知**: 遗留的 npm 包 `deepseek-tui` 已停止维护，不再接收后续版本更新。
*   **兼容性**: 此版本主要涉及命名空间迁移和基础架构清理，建议用户从 v0.8.x 迁移至新的 `codewhale` 命令体系。

## 3. 社区热点 Issues
以下 Issue 反映了当前开发重心和社区关注焦点：

1.  **[EPIC] 命令边界重构 (#2870)**
    *   **重要性**: 这是 v0.9.2 的核心工程任务，旨在解决长期存在的代码耦合问题，通过分阶段合并提升代码可维护性。
    *   **链接**: [Hmbown/CodeWhale Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)

2.  **[v0.9.2] 工作流作为 Fleet 支持的 Lane (#4178)**
    *   **重要性**: 实现了端到端的“Dogfood”测试，验证了新的编排词汇表（Fleet/Workflow/Lane/Runtime），确保各概念分离清晰。
    *   **链接**: [Hmbown/CodeWhale Issue #4178](https://github.com/Hmbown/CodeWhale/issues/4178)

3.  **[v0.9.2] 架构：Fleet/Workflow/Lane/Runtime 产品模型 (#4175)**
    *   **重要性**: 定义了 v0.9.2 的核心架构规范，防止不同层级概念混淆，是后续所有功能开发的基础文档。
    *   **链接**: [Hmbown/CodeWhale Issue #4175](https://github.com/Hmbown/CodeWhale/issues/4175)

4.  **[Bug] deepseek doctor 通过但 run 无法运行 (#689)**
    *   **重要性**: 影响用户体验的关键 Bug，诊断工具正常但实际执行失败，导致开发者无法启动对话。
    *   **链接**: [Hmbown/CodeWhale Issue #689](https://github.com/Hmbown/CodeWhale/issues/689)

5.  **[UX] TUI 信息架构与视觉重构 (#3480)**
    *   **重要性**: 针对多 Agent 工作场景下的 UI 混乱问题进行 overhaul，提升决策效率和视觉清晰度。
    *   **链接**: [Hmbown/CodeWhale Issue #3480](https://github.com/Hmbown/CodeWhale/issues/3480)

6.  **[Enhancement] /dryrun 预览聊天完成请求 (#1004)**
    *   **重要性**: 允许开发者在不发送请求的情况下预览长上下文和工具定义，对调试 V4 Pro 等复杂交互至关重要。
    *   **链接**: [Hmbown/CodeWhale Issue #1004](https://github.com/Hmbown/CodeWhale/issues/1004)

7.  **[Bug] SSH 连接失败：exit code 255 (#1829)**
    *   **重要性**: 涉及沙箱环境下的网络策略问题，影响使用内置 Shell 进行远程操作的用户。
    *   **链接**: [Hmbown/CodeWhale Issue #1829](https://github.com/Hmbown/CodeWhale/issues/1829)

8.  **[Local] 添加印地语本地化 (#4790)**
    *   **重要性**: 针对全球最大开发者群体之一（印度）的首个 Devanagari 字体终端支持尝试，具有战略意义。
    *   **链接**: [Hmbown/CodeWhale Issue #4790](https://github.com/Hmbown/CodeWhale/issues/4790)

9.  **[Perf] 流式思考单元格 O(N²) 解析问题 (#3903)**
    *   **重要性**: 修复了在生成思考过程时因重复解析导致的严重性能瓶颈。
    *   **链接**: [Hmbown/CodeWhale Issue #3903](https://github.com/Hmbown/CodeWhale/issues/3903)

10. **[Bug] 多模态音频/图像隐私与计费诚实性 (#4796)**
    *   **重要性**: 明确音频和图片上传时的隐私去向和计费透明性，符合安全合规趋势。
    *   **链接**: [Hmbown/CodeWhale Issue #4796](https://github.com/Hmbown/CodeWhale/issues/4796)

## 4. 重要 PR 进展
1.  **[CI] 替换不可用的恢复输入 (#4802)**
    *   **内容**: 修正了前一个 PR 中导致 GitHub Actions 分派失败的配置问题，建立了独立的恢复工作流。
    *   **链接**: [Hmbown/CodeWhale PR #4802](https://github.com/Hmbown/CodeWhale/pull/4802)

2.  **[CI] 添加衍生渠道的恢复路径 (#4801)**
    *   **内容**: 解决了 v0.9.1 发布后 Docker 镜像和 Homebrew tap 未同步更新的问题。
    *   **链接**: [Hmbown/CodeWhale PR #4801](https://github.com/Hmbown/CodeWhale/pull/4801)

3.  **[Web] 更新已发布版本事实 (#4799)**
    *   **内容**: 修复网站安装页面显示的版本号滞后问题，确保静态资源与发布同步。
    *   **链接**: [Hmbown/CodeWhale PR #4799](https://github.com/Hmbown/CodeWhale/pull/4799)

4.  **[Chore] 删除 v0.8.68 废弃的工作流脚本 (#4793)**
    *   **内容**: 清理了基于旧版本 issue 编号的过时 GitHub Actions 脚本，减少维护负担。
    *   **链接**: [Hmbown/CodeWhale PR #4793](https://github.com/Hmbown/CodeWhale/pull/4793)

5.  **[CI] 要求每个 PR 关闭 Issue 或说明理由 (#4798)**
    *   **内容**: 引入自动化检查，强制关联 Issue，改善仓库卫生状况，防止无主 PR。
    *   **链接**: [Hmbown/CodeWhale PR #4798](https://github.com/Hmbown/CodeWhale/pull/4798)

6.  **[Docs] 采用“意图即工件”的操作立场 (#4768)**
    *   **内容**: 更新了 Agent 开发文档，确立以生成最新代码优于修复旧代码的指导原则。
    *   **链接**: [Hmbown/CodeWhale PR #4768](https://github.com/Hmbown/CodeWhale/pull/4768)

7.  **[CI] 停止过度标记明确定义的 Issue (#4792)**
    *   **内容**: 优化自动标签逻辑，避免因为描述过于详细而被错误地打上冲突标签。
    *   **链接**: [Hmbown/CodeWhale PR #4792](https://github.com/Hmbown/CodeWhale/pull/4792)

8.  **[Web] 自动部署 codewhale.net (#4776)**
    *   **内容**: 将网站部署从手动触发改为 push to main 自动触发，解决文档滞后问题。
    *   **链接**: [Hmbown/CodeWhale PR #4776](https://github.com/Hmbown/CodeWhale/pull/4776)

9.  **[Readme] 简化语气并刷新翻译 (#4746)**
    *   **内容**: 重写了 README 营销文案，去除空洞口号，并更新了六种语言的翻译以保持一致性。
    *   **链接**: [Hmbown/CodeWhale PR #4746](https://github.com/Hmbown/CodeWhale/pull/4746)

10. **[Goal] 跨轮次持续持久目标 (#4611)**
    *   **内容**: 修复了 Agent 在会话轮次之间丢失目标上下文的问题，增强了长期任务执行的稳定性。
    *   **链接**: [Hmbown/CodeWhale PR #4611](https://github.com/Hmbown/CodeWhale/pull/4611)

## 5. 功能需求趋势
1.  **架构解耦与重构**: 社区高度关注 v0.9.2 的代码拆分，特别是将 `RuntimeThreadManager`、MCP 传输层和历史渲染器模块化，以解决单文件过大导致的维护困难。
2.  **多语言本地化 (i18n)**: 除了常规的英语支持，专门提出了印地语（Devanagari 字体渲染挑战）和乌克兰语的本地化需求，显示出对非拉丁语系市场的重视。
3.  **工作流编排细化**: 从简单的 Prompt 执行转向基于 Role（Fleet Roles）和 Gate（关卡）的复杂工作流引擎，强调步骤间的显式交接和审批。
4.  **安全性与隐私透明**: 针对多模态数据（音频/图像）的出境行为提出了明确的隐私告知和计费诚实性需求。

## 6. 开发者关注点
*   **性能瓶颈**: 开发者对 `@` 提及补全时的文件系统重复遍历（O(N²)）以及流式思考单元格的重新解析效率表示强烈不满，期待具体的性能优化 PR。
*   **沙箱网络限制**: Windows 环境下通过内置 Shell 进行 SSH 连接失败（Exit Code 255）是一个高频痛点，疑似出站 TCP 22 端口被阻断，需要官方提供网络配置指南或修复。
*   **诊断工具与运行时不一致**: `doctor` 命令显示配置正常，但 `run` 命令无法启动，这种“假阳性”诊断极大地增加了排查难度。
*   **UI/UX 复杂性**: 在多 Agent 场景下，TUI 界面元素（如子 Agent 覆盖层、状态栏、侧边栏）相互竞争空间，导致信息过载，用户渴望更清晰的信息架构。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*