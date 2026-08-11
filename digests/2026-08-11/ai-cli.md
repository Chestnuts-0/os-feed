# AI CLI 工具社区动态日报 2026-08-11

> 生成时间: 2026-08-11 09:21 UTC | 覆盖工具: 9 个

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

# 2026-08-11 AI CLI 工具生态横向对比分析报告

## 1. 生态全景
当前 AI CLI 工具生态已从“功能尝鲜”阶段全面迈入“深度生产力工具”阶段。各大厂商（Anthropic、OpenAI、Google 等）与开源社区共同构建了一个高度竞争且快速迭代的工具矩阵。工具的核心价值正从单一的代码补全转向**长会话上下文管理**、**跨会话持久化记忆**以及**复杂任务链自动化**。同时，Windows 平台的兼容性、WSL 环境的稳定性以及企业级的安全策略（如 MCP 权限验证）成为各工具争夺企业开发者的关键战场。

## 2. 各工具活跃度对比

| 工具名称 | Issues 数量 | PR 数量 | 新版本发布 | 活跃度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 10 | 10 | v26.803 (Rust Alpha) | ⭐⭐⭐⭐⭐<br>极高 (核心库迭代频繁) |
| **Gemini CLI** | 50 | 30 | v0.56.0-nightly | ⭐⭐⭐⭐⭐<br>极高 (社区贡献活跃) |
| **OpenCode** | 50 | 50 | 无 | ⭐⭐⭐⭐⭐<br>极高 (开源社区繁荣) |
| **Qwen Code** | 41 | 50 | v0.21.9 | ⭐⭐⭐⭐⭐<br>极高 (功能迭代迅猛) |
| **Claude Code** | 12 | 2 | v2.1.227 | ⭐⭐⭐⭐<br>高 (企业级修复为主) |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.79 | ⭐⭐⭐⭐<br>高 (企业功能聚焦) |
| **Pi (Mono)** | 10 | 10 | v0.84.1 | ⭐⭐⭐<br>中高 (跨平台适配) |
| **Kimi Code** | 5 | 7 | 无 | ⭐⭐⭐<br>中 (小众但专注) |
| **DeepSeek TUI** | 4 | 5 | v0.9.6 | ⭐⭐⭐<br>中 (架构重构期) |

## 3. 共同关注的功能方向

**A. 上下文管理与记忆系统**
*   **核心痛点**：几乎所有工具（Claude, OpenCode, Qwen, Kimi）都在处理**上下文压缩导致记忆丢失**的问题。
*   **诉求**：实现**跨会话持久化记忆**，防止在长期任务（>26天）中因压缩而丢失上下文。
*   **代表工具**：Claude Code (#34556), Kimi Code (#1283), OpenCode (#37852)。

**B. 跨平台与终端兼容性**
*   **核心痛点**：Windows 平台（尤其是 WSL 和 Store 版本）的稳定性问题成为最大阻碍。
*   **诉求**：修复 WSL 终端启动失败、Windows 窗口闪烁、MSIX 安装错误以及 PowerShell 路径解析问题。
*   **代表工具**：OpenAI Codex (#37104, #37415), OpenCode (#41694), Pi (#6187)。

**C. Agent 安全与权限控制**
*   **核心痛点**：AI Agent 在执行复杂操作（如 Git、数据库维护）时缺乏自我保护机制。
*   **诉求**：增强 **MCP (Model Context Protocol)** 的权限验证（特别是 `readOnlyHint`），防止 Agent 执行破坏性命令或误杀。
*   **代表工具**：Gemini CLI (#28548), GitHub Copilot CLI (#4380), OpenCode (#41670)。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 | 独特优势 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | **通用开发**<br>强调 IDE 集成与代码模式 | 大型团队 / 通用开发者 | C++/Bazel 构建，高性能后端 | 强大的 Rust 核心库，企业级沙箱安全，广泛的插件生态。 |
| **Gemini CLI** | **多模态与生态**<br>侧重 MCP 生态与模型多样性 | Google 生态用户 / MCP 开发者 | Rust/Go 混合，高度模块化 | 原生支持多模型（3.6 Flash），MCP 权限验证机制完善，插件生态活跃。 |
| **Claude Code** | **专业编码**<br>强调 IDE 深度集成与 Artifact | Anthropic Max 计划用户 | Python/Terminal UI | 深度集成 Anthropic 模型（Fable），Artifact 系统成熟，企业策略支持强。 |
| **Qwen Code** | **代理协作**<br>强调多会话协调与 Web Shell | 阿里云用户 / 中大型团队 | Go/Node.js，Daemon 架构 | 强大的多会话协调能力，支持 Web Shell 通道管理，企业内网支持好。 |
| **OpenCode** | **开源自由**<br>强调可定制性与移动端支持 | 开源爱好者 / 小团队 | Electron/Go，移动端优先 | 支持高棉语等小众语言，Termux 安卓支持，架构解耦活跃。 |
| **DeepSeek TUI** | **极客体验**<br>强调 TUI 架构解耦与 Rust 体验 | Rust 开发者 / 极客 | Rust (TUI) | 架构重构彻底（Crate Decomposition），ACP 协议支持深度，性能优化激进。 |

## 5. 社区热度与成熟度

*   **高热度 / 快速迭代期**：**OpenAI Codex**、**Gemini CLI**、**Qwen Code**。这些工具社区每日发布大量 Issues 和 PR，功能更新极快，处于功能爆发期。OpenCode 作为一个开源项目，其 50:50 的 Issue/PR 比例显示了极高的社区参与度。
*   **高热度 / 稳定期**：**Claude Code**。虽然更新频率不如开源工具，但 Issues 多围绕核心功能修复（如内存、登录），反映出其产品已相对成熟，正在打磨细节。
*   **中热度 / 细分领域**：**DeepSeek TUI**、**Pi**。社区规模较小但讨论度高，主要活跃在架构优化和特定平台（如 macOS 27, WSL）的适配上。

## 6. 值得关注的趋势信号

1.  **从“聊天”到“工作流”的演进**：社区不再满足于单轮对话，而是密集提出 **RFC** 和 **Epic**（如 Qwen Code 的多会话协调、DeepSeek TUI 的 Crate 解耦），标志着工具正从简单的 Copilot 向具备复杂规划能力的 Agent 系统演进。
2.  **“Windows 优先”的适配压力**：过去 Windows 往往被视为边缘环境，但如今几乎所有工具的 Top 3 Bug 都与 Windows/WSL 相关。这表明开发团队必须将跨平台兼容性提升至与核心功能同等重要的地位。
3.  **企业级安全合规成为刚需**：**MCP 权限验证** 和 **企业策略配置**（如 Copilot 的 `allow-auto-only`）的高频出现，说明 AI CLI 工具正在被引入受严格管控的企业环境，安全性和可控性不再是可选功能，而是准入门槛。
4.  **记忆持久化的技术瓶颈**：跨会话记忆是所有工具面临的共同难题。如何平衡 Token 成本与上下文保留，将成为未来 6 个月各工具竞争的核心护城河。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止时间**: 2026-08-11 | **分析范围**: anthropics/skills 仓库

---

## 1. 热门 Skills 排行

基于 PR 评论数与活跃度，以下是社区关注度最高的 5 个 Skills：

### 🏆 **Top 1: self-audit (Self-Audit Quality Gate)**
*   **功能**: AI 输出交付前的机械验证 + 四维推理质量门控
*   **热点**: 提出了一套通用的 AI 输出质量验证框架，涵盖文件完整性检查与推理逻辑审计
*   **状态**: 🔴 **OPEN** (v1.3.0)
*   **链接**: [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)

### 🏆 **Top 2: color-expert (色彩专家)**
*   **功能**: 覆盖 ISCC-NBS、Munsell、XKCD、RAL 等命名系统及 OKLCH/CAM16 等色彩空间
*   **热点**: 针对多学科任务中常见的色彩问题提供标准化解决方案
*   **状态**: 🔴 **OPEN**
*   **链接**: [anthropics/skills PR #1302](https://github.com/anthropics/skills/pull/1302)

### 🏆 **Top 3: plan-file-hygiene (计划文件卫生)**
*   **功能**: 解决 #1417 提出的规划产物生命周期缺失问题，管理技能计划文件
*   **热点**: 解决了技能社区长期存在的"规划产物无生命周期"痛点，由社区成员命名并框架化
*   **状态**: 🔴 **OPEN**
*   **链接**: [anthropics/skills PR #1479](https://github.com/anthropics/skills/pull/1479)

### 🏆 **Top 4: pyxel (像素游戏开发)**
*   **功能**: 基于 Pyxel-MCP 的复古游戏开发技能，覆盖编写→运行→捕获→迭代流程
*   **热点**: 连接 Python 创意编程生态，填补了游戏开发领域的技能空白
*   **状态**: 🔴 **OPEN**
*   **链接**: [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525)

### 🏆 **Top 5: document-typography (文档排版)**
*   **功能**: 防止 AI 生成的文档中出现孤词换行、孤行段落、编号错位等排版问题
*   **热点**: 针对文档生成质量提升，解决高频但隐蔽的排版缺陷
*   **状态**: 🔴 **OPEN**
*   **链接**: [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

---

## 2. 社区需求趋势

从 Issues 数据分析，社区最期待的新 Skill 方向包括：

| 趋势类别 | 代表 Issue | 需求描述 |
| :--- | :--- | :--- |
| **安全治理** | #492 | 希望有专门的技能来处理 AI Agent 系统的安全模式、策略执行与审计追踪 |
| **企业级协作** | #228 | 期待技能在组织内直接共享的能力，而非依赖文件传输或手动导入 |
| **架构设计** | #412 | 提议增加 "agent-governance" 技能，用于 AI Agent 系统的安全模式与信任评分 |
| **上下文管理** | #1487 | 技能应避免过度注入 Token，防止在单次工具调用中耗尽上下文窗口 |
| **推理质量** | #1385 | 建议建立"推理质量门控管道"，涵盖任务前校准、对抗性审查与交付验证 |

---

## 3. 高潜力待合并 Skills

以下 PR 虽然尚未合并，但通过 PR 评论和 Issue 关联，显示出高落地潜力：

*   **ODT 技能** (#486) - 涵盖 OpenDocument 格式的创建、填充与转换，填补了开源文档格式支持空白
*   **testing-patterns 技能** (#723) - 提供全栈测试策略（包括 Trophy 模型、React Testing Library 等），直接回应测试生成需求
*   **SAP-RPT-1-OSS 预测技能** (#181) - 连接企业级 SAP 业务数据，提供预测分析能力
*   **compact-memory 技能** (#1329) - 为长运行 Agent 提供符号化的紧凑状态记忆方案

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是"质量保证与稳定性"**：围绕 `run_eval.py` 的触发率崩溃、Windows 兼容性、YAML 解析安全、文档格式损坏等 Bug 展开了密集讨论，同时社区正在构建自我审计、推理门控等机制来提升 Skill 交付的可靠性。

---

# Claude Code 社区动态日报
**日期：** 2026-08-11  
**来源：** [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. 今日速览

今日社区重点关注**跨会话持久化记忆**这一核心痛点，已有用户在长达26天的使用中遇到上下文压缩后记忆丢失的问题。同时，Windows 平台的多项 GPU/Cowork 功能问题持续引发开发者关注。Anthropic 于今日发布了 v2.1.227 版本，修复了会话令牌过期时的特性标志评估错误及 Bash 命令执行问题。

---

## 2. 版本发布

### v2.1.227 (2026-08-11)

**关键修复：**
- **特性标志评估修复**：修复了在会话以过期登录令牌启动时，特性标志被错误评估为用户订阅等级的问题，这可能导致 Max 计划用户被错误提示启用 Fable 的使用额度。
- **Bash 命令执行修复**：修复了在 `claude-code-action` 环境下所有 Bash 命令失败的问题。

**影响范围：** 2.1.220 和 2.1.226 版本（macOS, tmux 环境下出现交互式 TUI 输入丢失问题）。

---

## 3. 社区热点 Issues

### 🔴 高优先级/高关注度

**#34556 - [enhancement, memory] Persistent Memory Across Context Compactions**
- **热度：** 65 评论 | 👍 6
- **重要性：** 核心功能缺失。用户报告在 26 天内经历了 59 次上下文压缩，导致记忆完全丢失，已自行构建完整持久化系统。
- **社区反应：** 用户强烈呼吁添加持久化内存机制。
- [Issue 链接](https://github.com/anthropics/claude-code/issues/34556)

**#14828 - [bug, platform:windows] Windows: Console window flashing when executing tools**
- **热度：** 58 评论 | 👍 36
- **重要性：** Windows 用户体验问题。工具执行时控制台窗口频繁闪烁，严重影响开发体验。
- **社区反应：** 获得较多点赞支持。
- [Issue 链接](https://github.com/anthropics/claude-code/issues/14828)

**#85603 - [bug] Typed input queued mid-turn is silently dropped at turn end**
- **热度：** 12 评论 | 👍 0
- **重要性：** 交互式 TUI 核心交互 Bug。在长会话中，回合结束时的输入会被静默丢弃，可能导致用户输入丢失。
- **环境：** macOS 25.3, tmux, Claude 2.1.220/226
- [Issue 链接](https://github.com/anthropics/claude-code/issues/85603)

### 🔵 平台/环境特定问题

**#81664 - [bug] Claude Desktop (Windows) crashes repeatedly during Browser-pane screenshot verification**
- **热度：** 11 评论 | 👍 4
- **重要性：** Windows 桌面应用稳定性。浏览器截图验证时反复崩溃，且重启失败。
- **环境：** Windows 11, Intel UHD GPU
- [Issue 链接](https://github.com/anthropics/claude-code/issues/81664)

**#83028 - [bug] Claude Desktop MSIX crash on Intel integrated GPU during browser pane use**
- **热度：** 7 评论 | 👍 0
- **重要性：** Intel 核显兼容性。在浏览器面板使用时 GPU 进程崩溃，无变通方案。
- [Issue 链接](https://github.com/anthropics/claude-code/issues/83028)

**#84199 - [bug] Local `.mcpb` extension install fails on MSIX build**
- **热度：** 7 评论 | 👍 0
- **重要性：** MSIX 构建安装问题。本地扩展安装失败，提示"Private dir leaf redirects"错误。
- [Issue 链接](https://github.com/anthropics/claude-code/issues/84199)

**#85466 - [bug] Default 30-day cleanupPeriodDays silently hard-deleted ~950 session transcripts**
- **热度：** 2 评论 | 👍 0
- **重要性：** 数据安全。默认的 30 天清理策略导致大量会话记录被静默永久删除，无警告。
- **影响：** 用户自 2026-04-10 以来积累的 ~1,000 个会话中丢失 950 个。
- [Issue 链接](https://github.com/anthropics/claude-code/issues/85466)

### 🟢 其他关注 Issue

**#21432 - [enhancement] Add setting to disable automatic caffeinate/sleep prevention**
- **热度：** 7 评论 | 👍 32
- **重要性：** 电池续航优化。开发者希望禁用 macOS 睡眠保护功能，特别是笔记本电脑用户。
- [Issue 链接](https://github.com/anthropics/claude-code/issues/21432)

**#83011 - [bug] iOS Simulator helper crash-loops on macOS 27 beta**
- **热度：** 5 评论 | 👍 2
- **重要性：** 新版 macOS 兼容性。iOS 模拟器辅助进程在 macOS 27 beta 上崩溃循环。
- [Issue 链接](https://github.com/anthropics/claude-code/issues/83011)

---

## 4. 重要 PR 进展

### 🔧 修复类 PR

**#85716 - fix(hookify): load rules from ancestor .claude directories to prevent silent bypass**
- **作者：** alifakbxr
- **内容：** 修复 `hookify` 插件中的安全漏洞，确保规则从祖先 `.claude` 目录加载，防止静默绕过。
- **状态：** Open
- [PR 链接](https://github.com/anthropics/claude-code/pull/85716)

**#34951 - feat: add automatic GitHub/GitLab detection and GitLab support for /code-review**
- **作者：** jangel97
- **内容：** 为 `/code-review` 命令添加多平台支持（GitHub 和 GitLab），包括自托管实例，无需重复逻辑。
- **状态：** Open
- [PR 链接](https://github.com/anthropics/claude-code/pull/34951)

---

## 5. 功能需求趋势

从今日 Issue 数据分析，社区关注点集中在以下方向：

### 1. **核心功能增强**
   - **持久化记忆**：跨会话上下文保持（#34556）
   - **IDE 集成**：VS Code Git Diff 悬停显示变更理由（#85769）

### 2. **跨平台稳定性**
   - **Windows 体验**：控制台闪烁（#14828）、MSIX 安装（#84199）、GPU 崩溃（#81664, #83028）
   - **macOS 27 支持**：iOS 模拟器崩溃（#83011）、睡眠保护设置（#21432）

### 3. **数据安全与隐私**
   - **会话清理保护**：添加清理前的警告机制（#85466）
   - **Artifact 删除**：支持删除已发布的 Artifact（#85770）

### 4. **本地化与国际化**
   - **UI 语言支持**：请求多语言本地化（#31413）

---

## 6. 开发者关注点

### 🔥 高频痛点
1. **记忆管理**：上下文压缩导致记忆丢失是最高频反馈的问题，涉及长期会话的用户。
2. **Windows 稳定性**：GPU 崩溃、MSIX 安装失败、控制台闪烁等问题集中影响 Windows 用户。
3. **数据安全**：默认的自动清理策略缺乏保护机制，导致历史会话丢失。

### 💡 热门功能请求
1. **电池续航优化**：禁用 macOS 睡眠保护功能（#21432）获高赞。
2. **Git Diff 集成**：在原生 diff 中显示 AI 变更理由（#85769）。
3. **Artifact 管理**：支持删除已发布 Artifact（#85770）。

### 🛠️ 技术债务
- **MCP 扩展安装**：MSIX 构建下的本地扩展安装失败（#84199）。
- **TUI 交互**：长会话中的输入丢失问题（#85603）。
- **Cowork 功能**：Windows 10 兼容性、服务创建失败等问题（#85698, #85693）。

---

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期**: 2026-08-11  
**分析对象**: github.com/openai/codex

---

## 1. 今日速览
过去24小时内，OpenAI Codex 社区活跃度极高。桌面应用版本 `26.803` 系列发布，带来了多项性能优化与安全加固，包括图片处理改进和 Windows 沙箱管理的增强。同时，社区焦点集中在 **Windows 平台** 的兼容性问题上，尤其是扩展加载失败、WSL 终端崩溃以及 Computer Use 插件在 WindowsApps 环境下的权限错误，引发了大量讨论。

---

## 2. 版本发布
*   **rust-v0.148.0-alpha.6**: 发布了 Rust 核心库的 Alpha 版本 0.148.0-alpha.6。
*   **rust-v0.147.0-alpha.6.6**: 发布了 Rust 核心库的 Alpha 版本 0.147.0-alpha.6.6。
    *   *(注：以上为内部 Rust 依赖库更新，未公开客户端具体版本号，推测与近日发布的 26.803 系列有关)*

---

## 3. 社区热点 Issues

1.  **[Windows] Codex extension fails to start: "The extension couldn't load its resources"** (#37458)
    *   **重要性**: 高 - 影响所有 Windows 用户的 VSCode 集成体验。
    *   **描述**: 用户报告 VSCode 扩展启动失败，提示资源加载错误，涉及版本 `26.803.41515`。
    *   **反应**: 2 个点赞，34 条评论。

2.  **[Windows] Weekly limit is draining like the old 5-hour limit** (#33685)
    *   **重要性**: 高 - 订阅计划核心体验问题。
    *   **描述**: 移除 5 小时限制后，用户发现每周配额消耗速度异常，与旧版本限制一致，严重影响 Pro/Plus 用户。
    *   **反应**: 14 个点赞，26 条评论。

3.  **[Windows][WSL] Integrated terminal silently fails before PTY/WSL startup** (#37104)
    *   **重要性**: 高 - 多平台用户（尤其是开发者）的核心痛点。
    *   **描述**: WSL 环境下集成终端无法启动，导致侧边栏和底部面板无法打开。
    *   **反应**: 1 个点赞，10 条评论。

4.  **[Windows] Computer Use fails with spawn EPERM** (#37415)
    *   **重要性**: 高 - 新功能 Computer Use 在 Windows 平台存在严重兼容性问题。
    *   **描述**: Windows 环境下 Computer Use 插件启动失败，涉及 elevated sandbox setup 时的 ACL 权限错误。
    *   **反应**: 4 个点赞，9 条评论。

5.  **[Windows][WSL] Integrated terminal auto-closes when Git availability probe fails** (#37962)
    *   **重要性**: 高 - 紧急 Bug，影响 WSL 用户工作流。
    *   **描述**: Git 可用性探测失败时，集成终端立即关闭。
    *   **反应**: 0 个点赞，4 条评论。

6.  **[App Performance] Thread navigation/loading slows from unbounded metadata** (#21211)
    *   **重要性**: 中 - 严重影响大型会话的流畅度。
    *   **描述**: 线程导航和加载变慢，原因是 SQLite 路径中的无界线程元数据导致膨胀。
    *   **反应**: 3 个点赞，24 条评论。

7.  **[Bug] Codex app accumulates stale subagents** (#25179)
    *   **重要性**: 中 - 影响长期会话的稳定性。
    *   **描述**: 桌面应用会话中会积累过期的 subagents，且无法可靠关闭。
    *   **反应**: 1 个点赞，16 条评论。

8.  **[CLI] False-positive cyber_policy interrupts benign tasks** (#37473)
    *   **重要性**: 中 - 安全机制误杀正常工作流。
    *   **描述**: CLI 在执行本地代码审查等良性任务时，被安全检查误判为网络攻击任务并中断。
    *   **反应**: 0 个点赞，3 条评论。

9.  **[Bug] Context compaction loses task state** (#35935)
    *   **重要性**: 中 - 上下文管理回归导致资源浪费。
    *   **描述**: 上下文压缩功能导致任务状态丢失，重复执行已完成的工作并耗尽周配额。
    *   **反应**: 0 个点赞，4 条评论。

10. **[App] Codex app output pane only shows about one screen** (#19645)
    *   **重要性**: 低 - UI 体验问题，但影响回溯历史记录。
    *   **描述**: 输出面板只能显示一屏内容，无法滚动回溯。
    *   **反应**: 5 个点赞，5 条评论。

---

## 4. 重要 PR 进展

1.  **[Closed] Validate images before returning `view_image` output** (#37939)
    *   **内容**: 修复了代码模式下可能暴露非图片文件内容的漏洞，拒绝无效图片数据，并重新编码为 PNG。
2.  **[Closed] Defer `view_image` processing to history insertion** (#37902)
    *   **内容**: 将图片处理逻辑延迟到历史记录插入阶段，统一处理解码和调整大小，提高一致性。
3.  **[Closed] Make gRPC code-mode notifications fire-and-forget** (#37906)
    *   **内容**: 改进 gRPC 通知机制，发送通知后不再等待客户端确认，避免未确认的通知阻塞代码单元完成。
4.  **[Closed] Add configurable goal token budget limits** (#37878)
    *   **内容**: 新增 `goals.max_goal_token_budget` 配置项，允许用户自定义目标任务的 Token 预算上限。
5.  **[Closed] Honor the configured Windows sandbox level for managed networking** (#37875)
    *   **内容**: 修复 Windows 沙箱网络管理逻辑，确保 Managed Networking 仅在配置了 elevated sandbox backend 时使用，否则回退到受限 token。
6.  **[Closed] Add shared runtime build information** (#37929)
    *   **内容**: 新增 `codex-build-info` 模块，用于从打包的 `codex-package.json` 中解析语义版本，同时保留可执行文件上的提交哈希。
7.  **[Closed] Apply refreshed cloud config bundles to later sessions** (#37908)
    *   **内容**: 解决后台刷新配置时，新会话仍使用旧快照的问题，确保新会话能加载最新的云端配置。
8.  **[Closed] Add hermetic Windows SDK and MSVC runtime repositories** (#37896)
    *   **内容**: 添加了 Windows SDK 和 MSVC 运行时的独立仓库引用，支持 Bazel 构建系统的版本锁定。
9.  **[Closed] Add appearance metadata to thread sections** (#37898)
    *   **内容**: 允许为自定义线程部分添加图标和颜色元数据，提升 UI 定制化能力。
10. **[Closed] Use thread configuration for `app/read`** (#37891)
    *   **内容**: 在 `app/read` 接口中支持传入 `threadId`，确保读取线程时加载正确的配置和功能门控。

---

## 5. 功能需求趋势

*   **Windows 平台兼容性**: 无论是 IDE 扩展、桌面应用集成终端还是 Computer Use 插件，Windows 平台（尤其是 WSL 环境和 Store 版本）的问题占据主导地位，社区对跨平台稳定性有强烈呼声。
*   **上下文与性能管理**: 关于 Thread 导航变慢、上下文压缩导致状态丢失、以及 Subagent 缓存泄漏的问题频繁出现，表明开发者对大规模、长时间会话的处理能力需求迫切。
*   **安全性与误报**: CLI 的安全检查（Cyber Policy）误杀良性任务，以及 App 端的资源加载安全漏洞，引发了关于“安全性”与“可用性”平衡的讨论。

---

## 6. 开发者关注点

*   **WSL/终端集成**: `PTY/WSL startup` 失败和终端自动关闭是本周最高频的崩溃场景，严重影响开发效率。
*   **订阅配额异常**: `Weekly limit` 消耗过快的问题不仅困扰 Pro 用户，也影响了 Plus 用户的付费体验，社区呼吁恢复或调整限速逻辑。
*   **工具调用与插件**: Computer Use 插件在 Windows 上的权限问题（EPERM）以及浏览器插件的不可用，阻碍了自动化工作流的落地。
*   **UI 交互细节**: 输出面板无法滚动、扩展加载失败等细节问题虽然看似微小，但直接决定了工具的易用性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：** 2026-08-11
**来源：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日速览

Gemini CLI 今日发布了 **v0.56.0-nightly** 版本，核心修复了 OAuth 令牌刷新逻辑。与此同时，社区活跃度极高，**50 个 Issues** 和 **30 个 PRs** 更新，主要集中在 **Agent（代理）稳定性**、**权限管理** 以及 **IDE 插件兼容性** 的问题上。特别是关于子代理恢复失败、Shell 命令挂起以及 MCP 工具权限验证的讨论热度最高。

---

## 2. 版本发布

### **v0.56.0-nightly.20260811.geef19f25c**
*   **发布时间：** 2026-08-11
*   **核心更新：**
    *   **修复 OAuth 令牌刷新：** 修复了 `core` 模块中 MCP OAuth 令牌无法使用存储的 Client ID 进行刷新的问题（PR #28481）。这是新贡献者 @ParthivNaresh 的首次提交。

---

## 3. 社区热点 Issues

精选 10 个高互动或高优先级的 Issue，反映当前开发痛点：

**1. [P1] 子代理在达到最大轮次后恢复逻辑错误，错误报告为 GOAL 成功** 
*   **链接：** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
*   **重要性：** **严重 Bug**。`codebase_investigator` 子代理在达到最大轮次限制时，未正确报告中断，而是错误地标记为 `status: "success"` 和 `Termination Reason: "GOAL"`，导致用户无法获得正确的错误反馈。

**2. [P1] Generalist Agent 永久挂起**
*   **链接：** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
*   **重要性：** **严重 Bug**。Gemini CLI 在 defer 到 generalist agent 时会无限期挂起，即便是创建文件夹等简单操作也会卡住。用户反馈甚至等待了 1 小时。

**3. [P1] Shell 命令执行完成后卡在 "Awaiting user input"**
*   **链接：** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
*   **重要性：** **用户体验**。Gemini 执行完简单的 CLI 命令后，界面仍显示命令处于活动状态并等待用户输入，但实际上命令已经执行完毕。

**4. [P2] Agent 未充分利用 Skills 和 Sub-agents**
*   **链接：** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
*   **重要性：** **功能建议**。用户发现 Gemini 在执行相关任务时，往往不会主动调用已配置的 `gradle` 或 `git` skills，必须手动指令才会使用。

**5. [P1] MCP Plan Mode 权限验证问题**
*   **链接：** [#28548](https://github.com/google-gemini/gemini-cli/issues/28548)
*   **重要性：** **安全漏洞**。MCP 服务器声称 `readOnlyHint`，但 Gemini CLI 未验证该声明，导致被标记为只读的工具被意外允许写入，破坏了 Plan Mode 的安全性。

**6. [P1] 自动内存系统无限重试低信号会话**
*   **链接：** [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
*   **重要性：** **系统稳定性**。Auto Memory 系统对低信号会话的处理逻辑存在问题，导致无效会话无法被正确归类或处理。

**7. [P2] IDE Companion 扩展订阅泄漏**
*   **链接：** [#28764](https://github.com/google-gemini/gemini-cli/pull/28764)
*   **重要性：** **IDE 集成**。VS Code 扩展中存在 `Disposable` 泄漏问题，导致部分功能（如 diff accept 命令）无法正常注册。

**8. [P2] Agent 应停止或劝阻破坏性行为**
*   **链接：** [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
*   **重要性：** **安全与伦理**。模型在执行复杂的 Git 操作或数据库维护时，偶尔会使用 `git reset --force` 等危险命令，缺乏对破坏性操作的阻断机制。

**9. [P2] 修复终端 Buffer 模式下退出外部编辑器后的数据损坏**
*   **链接：** [#24935](https://github.com/google-gemini/gemini-cli/issues/24935)
*   **重要性：** **数据完整性**。用户在终端 Buffer 模式下使用外部编辑器编辑文件后，可能导致数据损坏。

**10. [P2] 支持更多模型配置**
*   **链接：** [#28673](https://github.com/google-gemini/gemini-cli/pull/28673)
*   **重要性：** **新特性**。新增对 **Gemini 3.6 Flash** 和 **3.5 Flash-Lite** 模型的支持，优化了代码库的模型定义和别名配置。

---

## 4. 重要 PR 进展

精选 10 个高优先级或新近更新的 PR：

**1. [P1] 修复 `--resume` 命令打开第二个会话文件**
*   **PR：** [#28767](https://github.com/google-gemini/gemini-cli/pull/28767)
*   **内容：** 修复了 `--resume` 命令在清理旧会话时误删真实会话文件的逻辑错误，确保会话恢复的原子性。

**2. [P1] 修复 MCP Plan Mode 权限验证**
*   **PR：** [#28549](https://github.com/google-gemini/gemini-cli/pull/28549)
*   **内容：** 明确披露 MCP 服务器对 Plan Mode 只读状态的声明，并在客户端进行验证，防止恶意工具被允许写入。

**3. [P1] 修复使用 GEMINI_API_KEY 认证时的 401 错误**
*   **PR：** [#28546](https://github.com/google-gemini/gemini-cli/pull/28546)
*   **内容：** 移除了认证过程中遗留的 `Authorization` 头，防止在切换到 API Key 模式时触发 `401 UNAUTHENTICATED` 错误。

**4. [P2] 添加 Gemini 3.6 Flash 和 3.5 Flash-Lite 支持**
*   **PR：** [#28673](https://github.com/google-gemini/gemini-cli/pull/28673)
*   **内容：** 在 `packages/core` 中配置了新模型的基础定义、能力和别名，扩展了 CLI 的模型生态。

**5. [P2] 修复会话保留冲突（防止误删无关聊天）**
*   **PR：** [#28653](https://github.com/google-gemini/gemini-cli/pull/28653)
*   **内容：** 解决了会话保留机制中因文件名哈希冲突导致误删用户无关聊天记录的问题。

**6. [P2] 防止语音录制在 Provider 未就绪时启动**
*   **PR：** [#28658](https://github.com/google-gemini/gemini-cli/pull/28658)
*   **内容：** 修复了在 Whisper 模型下载或 Gemini Live 协议初始化完成前，语音录制功能就开始尝试连接，导致崩溃的问题。

**7. [P2] 修复 GitHub JSON 解析崩溃扩展**
*   **PR：** [#28657](https://github.com/google-gemini/gemini-cli/pull/28657)
*   **内容：** 增强了 `fetchJson` 函数对 malformed JSON 和流中断的容错能力，防止扩展因解析错误而崩溃。

**8. [P2] 修复 GlobTool 在未指定目录时的参数验证不一致**
*   **PR：** [#28666](https://github.com/google-gemini/gemini-cli/pull/28666)
*   **内容：** 修复了 `GlobTool.validateToolParamValues` 和 `execute` 方法在处理 `dir_path` 参数时的逻辑分歧。

**9. [P2] 修复自动内存日志记录的确定性和减少日志量**
*   **PR：** [#28769](https://github.com/google-gemini/gemini-cli/pull/28769)
*   **内容：** 添加 `.opencode` 到 `.gitignore`，防止 IDE 配置文件被追踪，并优化了日志记录逻辑。

**10. [P2] 修复扩展发布下载的原子性**
*   **PR：** [#28656](https://github.com/google-gemini/gemini-cli/pull/28656)
*   **内容：** 确保扩展下载失败时不会留下损坏的文件，实现了下载过程的原子性操作。

---

## 5. 功能需求趋势

从 Issue 分析中，社区需求主要集中在以下三个方向：

1.  **Agent 智能与安全增强 (High Priority)**
    *   **现状：** Agent 经常在复杂任务（如 Git 操作、数据库维护）中表现出不可预测性，甚至出现破坏性行为。
    *   **需求：** 增强模型的 "Self-Awareness"（自我认知），使其能准确理解 CLI 参数和热键；同时需要更严格的权限控制机制，防止 Agent 在 Plan Mode 下执行写入操作。

2.  **稳定性与性能优化**
    *   **现状：** 多个 Bug 反映了 Agent 挂起、Shell 命令流控失败、内存系统无限循环等问题。
    *   **需求：** 需要优化长轮次任务（如 `codebase_investigator`）的终止逻辑；改进终端交互的响应速度和 Buffer 模式的数据完整性。

3.  **模型生态扩展与工具集成**
    *   **趋势：** 社区对 **Gemini 3.6 Flash** 等新模型的配置支持呼声很高。
    *   **需求：** 期望工具生态更加健壮，特别是 **MCP (Model Context Protocol)** 的权限验证和工具数量限制（>128 tools 时的 400 错误）需要更好的处理方案。

---

## 6. 开发者关注点

*   **MCP 生态的信任问题：** 开发者非常关注 MCP Server 的声明（如 `readOnlyHint`）是否被客户端正确验证。这是一个跨领域（AI + 安全）的重要话题。
*   **会话管理健壮性：** 如何在多会话、自动清理、文件系统碰撞之间保持数据安全，是 CLI 核心架构面临的挑战。
*   **跨平台兼容性：** Issues 提到了 Wayland 环境下的 Browser Agent 失败，以及外部编辑器交互的兼容性问题，表明跨平台体验仍有提升空间。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期**: 2026-08-11
**分析师**: AI 开发工具技术团队

---

## 1. 今日速览
今日 GitHub Copilot CLI 发布了 **v1.0.79** 版本，重点优化了企业级策略配置、沙盒代理设置展示及代理验证功能。社区活跃度高，新增了多个关于会话管理、模型配置和 MCP（模型上下文协议）集成的热门 Issue，反映出开发者对 CLI 在企业环境下的稳定性及跨工具配置统一性的强烈关注。

---

## 2. 版本发布
### 📦 v1.0.79 (2026-08-10)
本次更新聚焦于企业级功能增强与配置透明度：
*   **企业策略优化**: 新增对 `allow-auto-only` 策略的支持，使 `/allow-all` 自动功能在受限模式下仍可工作；支持通过企业托管策略强制执行代理 URL 配置。
*   **配置透明度**: 更新 `/sandbox` 配置对话框，明确展示 `settings.json` 中沙盒设置的存储位置。
*   **代理验证**: 增强了代理功能的认证处理机制。

---

## 3. 社区热点 Issues

| # | 标题 | 作者 | 状态 | 重要性 |
|---|------|------|------|--------|
| **#4345** | Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5' | indeherb | 🟢 Closed | ⭐⭐⭐⭐<br>**模型兼容性**: 报告了新模型配置下的参数错误，已修复。 |
| **#4431** | Using /model config wipes all settings | PatrickGaissert | 🟢 Closed | ⭐⭐⭐⭐⭐<br>**严重 Bug**: v1.0.79 中用户配置模型时意外清空了整个 `settings.json`，导致配置丢失。 |
| **#4433** | Non-interactive sessions: tool-call approval silently revoked | nsd0okernicke | 🟢 Closed | ⭐⭐⭐⭐<br>**会话稳定性**: 非交互模式下会话中途权限被静默撤销，导致无法恢复。 |
| **#4222** | Regression: main pane freezes / infinite render loop | jasonthecuber | 🟢 Closed | ⭐⭐⭐⭐⭐<br>**平台兼容性**: Windows 终端渲染死循环回归，影响用户体验。 |
| **#4325** | Session becomes permanently unloadable after events.jsonl limit | MattPD | 🟢 Closed | ⭐⭐⭐<br>**数据持久化**: 会话日志超过 V8 限制后无法恢复。 |
| **#4380** | Rubber Duck reviews use same model as primary session | tanselmi-appliedsurety | 🟡 Open | ⭐⭐⭐⭐<br>**功能逻辑**: Rubber Duck 代理评审未能独立选模，降低了对抗性评审的价值。 |
| **#4434** | User-level configured model is not used in new sessions | PatrickGaissert | 🟡 Open | ⭐⭐⭐⭐⭐<br>**配置管理**: 用户默认模型在 `/new` 或 `/clear` 时未生效，需重启 CLI。 |
| **#4430** | Duplicate skills load from repository and installed plugin | rjmurillo | 🟡 Open | ⭐⭐⭐⭐<br>**插件冲突**: 技能在仓库和插件中重复加载，导致描述重复。 |
| **#4435** | Copilot recommends deprecated actions | fvandepitte | 🟡 Open | ⭐⭐⭐<br>**用户体验**: CLI 建议了已弃用的操作，可能误导用户。 |
| **#4432** | rubber-duck: model argument silently overrides strategy | eggboy | 🟡 Open | ⭐⭐⭐<br>**子代理逻辑**: Rubber Duck 强制覆盖互补策略，违背了设计初衷。 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 描述 |
|---|------|------|------|------|
| **#4428** | Add initial devcontainer configuration | Pjrich1313 | 🟢 Open | 为项目添加了开发容器配置，提升开发环境一致性。 |

---

## 5. 功能需求趋势

基于今日活跃 Issues 的分析，社区关注点主要集中在以下方向：

1.  **会话管理与状态持久化** (#4365, #4325, #4413)
    *   **痛点**: 会话恢复时的元数据丢失、配置钩子未按预期触发。
    *   **趋势**: 开发者期望 CLI 能更可靠地管理长时间运行的任务会话。

2.  **配置一致性** (#4431, #4434, #4429)
    *   **痛点**: `/config` 命令覆盖设置、默认模型未生效、VS Code 与 CLI 配置不统一。
    *   **趋势**: 需要更严格的配置验证机制，防止误操作导致配置丢失。

3.  **企业级与安全** (#1595, #4414, #4364)
    *   **痛点**: 企业策略下的模型访问被阻断、BYOK 提供商 403 错误、MCP 证书验证失败。
    *   **趋势**: 企业环境下的网络策略兼容性和私有 CA 证书支持是刚需。

4.  **跨平台体验** (#4222, #4095, #4365)
    *   **痛点**: Windows 下渲染卡顿、插件更新被拒绝、路径解析错误。
    *   **趋势**: Windows 平台的稳定性优化仍是社区反馈的高频点。

---

## 6. 开发者关注点

*   **配置安全**: Issue #4431 的快速修复显示了开发者对 CLI 配置文件完整性的极高敏感度。
*   **MCP 集成标准化**: Issue #4429 提出了统一 VS Code 和 CLI 的 MCP 配置文件，这是提升开发者体验的关键一步。
*   **子代理行为**: 多个 Issue (#4380, #4432, #4427) 指出了子代理（如 Rubber Duck）在模型选择和策略执行上的逻辑缺陷，表明开发者正在深入使用高级功能并发现边界情况。
*   **日志处理**: Issue #4325 提及的 V8 字符串长度限制，提醒开发者在处理长上下文或长时间会话时需注意数据结构设计。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**日报日期**：2026-08-11  
**项目**：MoonshotAI/kimi-cli  
**分析师**：AI 开发工具技术分析师  

---

### 1. 今日速览
- **社区活跃**：今日新增 5 个 Issues 和 7 个 PR 更新，主要集中在记忆系统优化、Windows 路径兼容性修复以及代码健壮性改进。
- **关键反馈**：用户对记忆系统（Memory System）的呼声较高，同时 Windows PowerShell 7 路径问题引发关注，CLI 规划任务中的 "Autopsy" 错误被标记为严重 Bug。

---

### 2. 版本发布
- **无新版本**：过去 24 小时内无新 Release。

---

### 3. 社区热点 Issues

#### #1283 [OPEN] [enhancement] Feature Request: Memory System - Persistent context across sessions
- **重要性**：社区最热门的需求，用户希望 Kimi Code CLI 能跨会话记住上下文、项目模式和用户偏好。
- **社区反应**：33 条评论，无点赞，但讨论热度高，涉及自动记忆和手动记忆两种模式。

#### #1478 [OPEN] [enhancement] 能否优化记忆层？搞大项目时很痛苦
- **重要性**：直接反馈记忆系统可用性问题，用户发现文档中未明确说明记忆功能。
- **社区反应**：1 条评论，提及 `~/.openclaw/workspace/` 目录结构，暗示记忆功能可能已存在但未文档化。

#### #2601 [OPEN] [Feature Request] Quote & Reply: comment on any selected part of an AI response
- **重要性**：用户希望在 Kimi Web 中支持选中 AI 回复的任意部分并附加评论，提升交互灵活性。
- **社区反应**：0 条评论，新 Issue。

#### #2600 [OPEN] [bug] Windows 中的 PowerShell 7 默认 D 盘启动，路径找不到
- **重要性**：Windows 平台兼容性 Bug，影响用户体验。
- **社区反应**：0 条评论，新 Issue。

#### #2599 [OPEN] [bug] cli 规划任务出现 "Autopsy" 错误
- **重要性**：CLI 规划任务中的严重错误，用户反馈 "好吓人"。
- **社区反应**：0 条评论，新 Issue，提及版本 0.34.0 和模型 kimi k3。

#### 其他 3 个 Issue：
- #1283（记忆系统）、#1478（记忆层优化）、#2601（Quote & Reply）已单独列出。

---

### 4. 重要 PR 进展

#### #2057 [CLOSED] fix(acp): replace assert statements with proper RuntimeError exceptions
- **内容**：将 `acp/session.py` 中的 5 个 `assert` 语句替换为 `RuntimeError`，避免 Python `-O` 优化时断言失效。
- **价值**：提升代码健壮性，防止生产环境中的隐式错误。

#### #2056 [CLOSED] fix(wire): eliminate TOCTOU race in WireFile.append_record
- **内容**：修复 `WireFile.append_record` 中的 TOCTOU（时间检查到使用）竞态条件，防止文件在检查后被删除。
- **价值**：解决并发场景下的潜在数据损坏问题。

#### #2055 [CLOSED] fix(agentspec): replace assert with proper AgentSpecError exception
- **内容**：将 `agentspec.py` 中的 `assert` 替换为 `AgentSpecError`，增强异常处理。
- **价值**：提升错误可追踪性。

#### #1328 [CLOSED] Fix minor bugs in file tools and UI feedback
- **内容**：修复 `StrReplaceFile` 替换计数计算错误、文件工具和 UI 反馈中的小 Bug。
- **价值**：改善用户体验和工具准确性。

#### #1082 [CLOSED] fix(pyinstaller): filter non-existent dateparser cache files
- **内容**：修复 PyInstaller 在 CI 环境中因 `dateparser` 缓存文件不存在导致的打包失败。
- **价值**：提升打包稳定性和 CI 兼容性。

#### #1077 [CLOSED] fix: remove redundant mode validation in WriteFile tool
- **内容**：移除 `WriteFile` 工具中冗余的运行时模式验证代码。
- **价值**：简化代码逻辑，减少不必要的检查。

#### #1393 [CLOSED] fix(acp): route shell commands through terminal args
- **内容**：修复 ACP Shell 终端执行中的命令路由问题，适配 `terminal_id`，并添加回归测试。
- **价值**：增强跨平台 Shell 命令支持。

---

### 5. 功能需求趋势

#### 记忆系统（Memory System）
- **趋势**：用户对跨会话记忆、项目上下文持久化的需求强烈，尤其是大项目场景。
- **关键词**：自动记忆、手动记忆、记忆层优化。

#### 交互体验优化
- **趋势**：Quote & Reply 功能、路径兼容性修复、错误信息友好化。
- **关键词**：选中回复、评论、路径检测。

#### 代码健壮性
- **趋势**：竞态条件修复、异常处理标准化、调试信息清晰化。
- **关键词**：TOCTOU、RuntimeError、AgentSpecError。

---

### 6. 开发者关注点

#### 痛点：
1. **记忆系统可用性**：用户抱怨记忆功能未被文档化，且大项目场景下体验不佳。
2. **Windows 路径兼容性**：PowerShell 7 默认 D 盘启动导致路径问题。
3. **错误信息吓人**：CLI 规划任务中的 "Autopsy" 错误引发恐慌。

#### 高频需求：
1. **记忆系统增强**：支持自动记忆和手动记忆，明确文档说明。
2. **交互功能**：Quote & Reply、路径自动检测、错误信息简化。
3. **代码质量**：更多竞态条件修复和异常处理改进。

---

**链接汇总**：
- Issues: [MoonshotAI/kimi-cli Issues](https://github.com/MoonshotAI/kimi-cli/issues)
- PRs: [MoonshotAI/kimi-cli Pull Requests](https://github.com/MoonshotAI/kimi-cli/pulls)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-08-11)

## 1. 今日速览
OpenCode 社区今日活跃度极高，共处理 50 个 Issue 和 50 个 Pull Request。核心进展集中在 **会话重试机制优化**（修复无限重试漏洞）和 **文件系统稳定性**（修复 Windows 路径解析问题），同时新增了 **柬埔寨语本地化** 和 **Termux 安卓支持**。此外，桌面端与 Web UI 在渲染性能、工具调用及权限管理方面仍存在多处待修复的稳定性问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 社区热点 Issues

1.  **[OPEN] message="exiting loop" (Issue #38801)**
    *   **重要性**：核心交互体验问题。用户在使用 TUI 模式时频繁遇到 `exiting loop` 错误，导致 AI 交互中断，严重影响工作流。
    *   **社区反应**：热度最高，评论数达 22 条。

2.  **[OPEN] Aborted provider stream recorded as clean stop (Issue #37852)**
    *   **重要性**：严重的后端流处理 Bug。当 AI 生成中断且未返回标准结束信号时，系统错误地将其记录为正常完成，导致空响应且无错误日志，影响任务正确性。
    *   **社区反应**：获赞 55 次，说明该问题影响广泛。

3.  **[OPEN] Long-running shell commands (e.g., Gradle build) hang (Issue #25038)**
    *   **重要性**：开发环境核心痛点。Android Gradle 等长耗时构建命令在构建成功后仍会挂起，导致用户无法继续交互，严重影响生产力。
    *   **社区反应**：获赞 9 次，是高频反馈的阻塞问题。

4.  **[CLOSED] fix(session): SessionRetry.policy() retries forever (Issue #21960)**
    *   **重要性**：已修复的关键安全漏洞。会话重试策略未设置最大尝试次数和总重试时长，可能导致无限重试并消耗资源。对应的 PR #41699 已合并。
    *   **状态**：已解决。

5.  **[OPEN] Go plan: free-model congestion + silent quota exhaustion (Issue #41684)**
    *   **重要性**：计费与资源管理。免费模型（BigPickle）拥塞导致配额静默耗尽，用户无预警情况下工作完全停止，造成经济损失。
    *   **社区反应**：2 条评论，涉及实际资金损失。

6.  **[OPEN] Desktop: cannot open Sublime Text on Windows (Issue #41694)**
    *   **重要性**：桌面端集成体验。文件关联功能失效，尽管 CLI 已在 PATH 中，OpenCode 无法正确唤起编辑器，影响开发者习惯。
    *   **社区反应**：3 条评论。

7.  **[CLOSED] [Bug] deepseek-v4-flash still broken on Console Go (Issue #41306)**
    *   **重要性**：新模型支持稳定性。DeepSeek 模型 ID 在 Go 端仍返回 400 错误，尽管已被标记为修复，但 Bug 依然存在。
    *   **状态**：已关闭但问题未解决。

8.  **[OPEN] Electron 渲染过程变得无响应 (Issue #40572)**
    *   **重要性**：桌面端性能瓶颈。渲染进程因 Solid.js 响应式依赖循环及 ResizeObserver 抖动导致冻结，严重影响应用流畅度。
    *   **社区反应**：3 条评论。

9.  **[OPEN] When Opencode TUI is embedded in the browser, the scroll bar becomes ineffective (Issue #41655)**
    *   **重要性**：Web 集成兼容性。嵌入式 TUI 模式下无法滚动查看历史记录，导致信息截断，限制了 Web 端的使用场景。
    *   **社区反应**：2 条评论。

10. **[OPEN] read tool returns 2-year-expired DashScope OSS signed URL (Issue #41670)**
    *   **重要性**：工具调用准确性。Vision 模型读取本地图片时，工具返回了过期的签名 URL，导致模型幻觉或无法加载图片。
    *   **社区反应**：2 条评论。

## 4. 重要 PR 进展

1.  **[OPEN] feat(storage): add safe database maintenance controls (PR #41711)**
    *   **内容**：新增“设置 → 存储”页面，允许用户显式维护数据库，提升数据管理安全性。

2.  **[OPEN] fix(session): cap session retries and make retry/backoffDelay configurable (PR #41699)**
    *   **内容**：修复了 Issue #21960，为会话重试策略添加最大尝试次数限制，并使重试/延迟可配置，防止无限重试。

3.  **[OPEN] feat(opencode): add one-shot Termux bootstrap script and docs (PR #41695)**
    *   **内容**：新增 Termux 安卓一键安装脚本及文档，扩展了移动端支持。

4.  **[OPEN] fix(app): fallback blob ID generation for non-secure HTTP contexts (PR #41710)**
    *   **内容**：修复在非安全 HTTP 环境下粘贴图片导致应用崩溃的问题。

5.  **[OPEN] fix(provider): respect attachment image capability (PR #41527)**
    *   **内容**：修复自定义 Provider 配置图片附件时的 Bug，确保 `attachment: true` 生效。

6.  **[OPEN] fix(opencode): speed up long session forks (PR #41701)**
    *   **内容**：优化长会话的分叉性能，通过批量处理和分块投影减少延迟。

7.  **[OPEN] feat(i18n): add Khmer (kh) localization dictionary (PR #37457)**
    *   **内容**：新增高棉语本地化支持，扩大了国际化覆盖范围。

8.  **[OPEN] feat(cli): embed web ui (PR #41525)**
    *   **内容**：将 Web UI 资源直接嵌入 CLI 发行版，允许本地离线启动，无需反向代理。

9.  **[OPEN] [needs:issue] fix(tui): hide background hint for async work (PR #37088)**
    *   **内容**：优化 TUI 体验，当所有后台任务已启动时，自动隐藏背景化提示，减少界面干扰。

10. **[OPEN] feat(app): add full session option to web fork dialog (PR #37054)**
    *   **内容**：在 Web 端会话分叉对话框中新增“完整会话”选项，允许复制整个对话历史。

## 5. 功能需求趋势

*   **跨平台与移动端支持**：**Android/Termux** 和 **高棉语本地化** 的需求显示社区正在积极拓展非标准操作系统的覆盖面。
*   **桌面端集成体验**：关于 **Sublime Text/VS Code 等编辑器唤起** 和 **桌面端性能优化** 的反馈持续存在，表明开发者对 IDE 集成的依赖度很高。
*   **会话管理与稳定性**：高频出现关于 **会话重试**、**长命令挂起** 和 **错误静默** 的报告，反映出社区对工具在复杂生产环境下的健壮性有较高要求。

## 6. 开发者关注点

*   **支付与计费**：中国大陆用户反馈 **Stripe 支付** 流程中的验证问题，以及 **配额静默耗尽** 带来的经济损失。
*   **模型兼容性**：**DeepSeek 等第三方模型** 在 Go 端和 Console 端的 API 调用仍有兼容性问题。
*   **权限与工具安全**：工具调用（`read` tool）返回过期凭证、权限列表错误等安全问题，威胁到工具链的可靠性。
*   **渲染性能**：Electron 桌面端的 **渲染器无响应** 和 TUI 在浏览器嵌入下的 **滚动失效** 是阻碍流畅使用的主要技术障碍。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 (2026-08-11)

## 1. 今日速览
今日 Pi 社区活跃度较高，主要聚焦于 **TUI（终端用户界面）性能优化**（如全屏模式渲染崩溃、滚动卡顿）以及 **AI 能力增强**（DeepSeek V4 Flash 原生支持、Cloudflare AI Gateway 集成）。同时，针对 **Bun 运行时兼容性** 和 **Windows 多种运行方式** 的讨论进入白热化阶段。

## 2. 版本发布
*   **v0.84.1**: 昨日发布，修复了包括 Cloudflare AI Gateway provider 缺失 `strict` 模式、JSONL 恢复逻辑以及部分终端兼容性问题。

## 3. 社区热点 Issues

*   **#7547 [Windows] Windows 下 Pi 的使用方式与痛点** (25 👍)
    *   **重要性**: Windows 是开发者主要平台之一，但 Pi 在 Windows 上的运行方式过于碎片化（WSL, 桌面应用等），导致文档和调试难度增加。
    *   **社区反应**: 25 条评论，社区正在集中讨论如何统一 Windows 下的最佳实践。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7547)

*   **#6187 [bug] WSL 中 Copilot 登录挂起** (21 👍)
    *   **重要性**: WSL 是 Linux 开发者常用的环境，该 Bug 阻碍了在 WSL 中使用 GitHub Copilot 的设备授权流程。
    *   **社区反应**: 关注度高，涉及核心功能流。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/6187)

*   **#7730 [bug] macOS 高 CPU 占用** (9 👍)
    *   **重要性**: 在长会话下 CPU 占用飙升至 100%，严重影响终端体验。
    *   **社区反应**: 用户反馈与上下文大小（Context Size）相关。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7730)

*   **#7850 [bug] 429 Rate Limiting 登录失败** (6 👍)
    *   **重要性**: 在拥有大量激活模型的组织中，登录 Copilot 时出现 429 错误，属于环境配置问题。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7850)

*   **#7806 [bug] macOS 终端滚动 Bug** (4 👍)
    *   **重要性**: 中文反馈，指出在 AI 流式输出时，滚动滚轮会自动跳到顶部，导致无法查看历史记录。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7806)

*   **#7782 [bug] Bedrock 工具调用无效导致会话损坏** (4 👍)
    *   **重要性**: 严重 Bug，错误的工具调用被持久化后会导致后续所有轮次失效。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7782)

*   **#7946 [bug] Bun 运行时无法启动** (3 👍)
    *   **重要性**: v0.84.0/0.84.1 在 Bun 环境下崩溃，报错 `zlib.createZstdDecompress is not a function`。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7846)

*   **#7931 [bug] `/resume` 会话计数不一致** (2 👍)
    *   **重要性**: 会话恢复功能的显示逻辑存在缺陷，影响用户体验。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7931)

*   **#7939 [bug] 硬编码快捷键配置绕过** (2 👍)
    *   **重要性**: 部分组件硬编码了按键检查，导致用户无法通过 `keybindings.json` 自定义这些按键（如 Shift+Backspace）。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7939)

*   **#7760 [bug] LaTeX 公式渲染错误** (3 👍)
    *   **重要性**: 特定数学公式在 TUI 中渲染不正确，影响技术文档阅读。
    *   [查看详情](https://github.com/badlogic/pi-mono/issues/7760)

## 4. 重要 PR 进展

*   **#7927 feat(coding-agent): 添加统一工具授权边界** (已合并)
    *   **内容**: 引入了语义化授权元数据、不可变快照和 SHA-256 指纹，增强了工具调用的安全性和可追溯性。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7927)

*   **#7926 feat(coding-agent): 添加 Goal Mode 扩展** (已合并)
    *   **内容**: 新增 `/goal` 命令，支持自主持续执行的任务模式，并支持 Token 和成本预算控制。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7926)

*   **#7943 feat(ai): 重试 Codex WebSocket 速率限制** (已合并)
    *   **内容**: 修复了 #7444 中提到的 WebSocket 重试逻辑，根据 OpenAI Codex 规范重试更多 transient 错误。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7943)

*   **#7940 feat(coding-agent): 添加规范化的转录读取模型** (已合并)
    *   **内容**: 为 `SessionManager` 添加了有界游标分页和提交顺序控制，确保读取模型独立于持久化事件。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7940)

*   **#7934 feat(ai): 通过 Cloudflare Responses 发送显式 strict 模式** (已合并)
    *   **内容**: 修复了 #7896 提到的 Cloudflare provider 缺失 `strict` 字段导致可选字段被强制的 Bug。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7934)

*   **#7913 feat(tui): 添加全屏模式转录搜索** (已合并)
    *   **内容**: 在全屏模式下实现了基本的搜索功能（快捷键 `Ctrl+Shift+f`）。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7913)

*   **#7901 feat(ai): Cloudflare AI Gateway 传输** (已合并)
    *   **内容**: 通过 Cloudflare AI Binding 添加 AI Gateway 支持，便于在 Cloudflare Worker 内运行 Pi 应用。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7901)

*   **#7897 feat(coding-agent): 继承子代理会话配置** (已合并)
    *   **内容**: 修复了多会话打开时，子代理使用错误模型配置的问题，使其遵循当前会话设置。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7897)

*   **#7892 feat(tui): 避免失去焦点时的全屏重绘** (已合并)
    *   **内容**: 优化全屏模式下的焦点事件处理，防止在 iTerm2 等终端中产生虚假的活动指示器。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7892)

*   **#7807 feat(ai): 暴露 DeepSeek V4 Flash 原生推理模式** (已合并)
    *   **内容**: 修复了 DeepSeek V4 Flash 的 `low` 推理模式被错误映射为 `high` 的问题。
    *   [查看详情](https://github.com/badlogic/pi-mono/pull/7807)

## 5. 功能需求趋势
1.  **跨平台运行标准化**: Windows 和 WSL 的运行方式与兼容性是社区最关心的问题，反映出用户希望 Pi 能在不同环境下无缝切换。
2.  **TUI 交互体验优化**: 全屏模式下的渲染崩溃、滚动卡顿、双击选词等 UI 细节问题频繁出现，表明用户对交互流畅度有较高要求。
3.  **新模型与协议支持**: 持续跟进 DeepSeek V4 Flash、Cloudflare AI Gateway 以及 OpenAI Codex WebSocket 协议的兼容性。
4.  **会话管理与扩展**: 会话恢复、扩展工具授权机制以及 Goal Mode（目标模式）的提出，显示出社区希望 Pi 向更复杂的自动化工作流发展。

## 6. 开发者关注点
*   **性能瓶颈**: 特别是 macOS 上的高 CPU 占用和全屏模式下的 GPU/CPU 冗余渲染。
*   **配置灵活性**: 用户反馈部分快捷键和配置项被硬编码，无法自定义，这与 AGENTS.md 中提倡的配置原则相悖。
*   **稳定性**: Bun 运行时的兼容性以及长会话下可能导致的数据损坏问题（如 JSONL 恢复逻辑）是急需解决的痛点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：** 2026-08-11  
**数据范围：** 过去 24 小时（截至 2026-08-11）

---

## 1. 今日速览
Qwen Code 发布了 **v0.21.9** 正式版及对应的夜间构建版本，主要强化了插件安装系统与本地控制功能。社区活跃度极高，过去 24 小时内更新了 41 个 Issues 和 50 个 Pull Requests。开发重心集中在 **Web Shell 的交互重构**、**多会话会话管理** 以及 **Daemon 资源保护机制** 的完善上，同时针对 Windows 环境下的文件链接解析和 macOS 终端闪屏等体验问题进行了密集修复。

---

## 2. 版本发布
### v0.21.9 (正式版)
本次更新引入了多项面向开发者和用户的增强功能：
*   **插件系统增强**：新增对目录、归档、Git 仓库、URL 和 npm 包的原生支持，支持自动加载系统提示词。
*   **本地控制**：通过二维码实现了 Local Control 的配对功能。
*   **核心修复**：修复了 CLI 在沙箱环境探测、链接解析以及配置更新提示重复等关键 Bug。

---

## 3. 社区热点 Issues (Top 10)

1.  **[RFC] 多会话原生协调** (#8718)
    *   **重要性**：核心架构层面的未来规划。
    *   **内容**：提出为多个独立的 Qwen Code 会话提供显式的实验性协调路径，允许 Leader 分发 Worker 并观察运行时状态。这是迈向多 Agent 系统的关键一步。
2.  **[Bug] Windows 文件链接解析错误** (#8644)
    *   **重要性**：高频痛点，影响 Windows 用户体验。
    *   **内容**：在 Windows 上点击聊天中的文件链接时，由于驱动器字母后的冒号被 URL 编码（如 `d%3A`），导致 VS Code 无法正确打开文件。
3.  **[Bug] Serve Daemon 内存分配缺陷** (#8182)
    *   **重要性**：资源管理核心问题。
    *   **内容**：`qwen serve` 给每个 ACP 子进程分配了宿主机 50% 的内存上限，且从未根据子进程数量进行平均分配，可能导致内存溢出。
4.  **[Bug] ACP 子进程启动失败** (#8871)
    *   **重要性**：Daemon 服务稳定性。
    *   **内容**：在 `qwen serve` 模式下，子进程无法解析 `--acp` 参数，导致 401 认证失败。
5.  **[Bug] macOS iTerm 闪屏问题** (#8901)
    *   **重要性**：特定平台体验。
    *   **内容**：在 macOS 的 iTerm 终端中，选择执行选项后会出现持续的闪屏现象。
6.  **[Bug] OpenAI 日志无轮转导致磁盘占用** (#8860)
    *   **重要性**：运维痛点。
    *   **内容**：启用了 `enableOpenAILogging` 后，日志文件不进行轮转，导致两个月内产生约 95GB 的日志文件。
7.  **[Bug] 提供商更新提示重复** (#8504)
    *   **重要性**：交互体验干扰。
    *   **内容**：配置自定义模型后，即使更新成功，也会反复弹出“内置提供商更新”的提示。
8.  **[Feature] Web Shell 通道管理重构** (#8845)
    *   **重要性**：功能规划。
    *   **内容**：计划重新设计 Web Shell 中的通道策略、会话和 workspace 管理，以支持更细粒度的权限控制。
9.  **[Feature] 独立会话支持** (#8908)
    *   **重要性**：会话模型演进。
    *   **内容**：建议支持无需选择工作区即可创建独立会话，允许用户进行纯文本对话。
10. **[Bug] Shell 工具输出截断配置失效** (#8922)
    *   **重要性**：配置灵活性。
    *   **内容**：`tools.truncateToolOutputThreshold` 配置项在 Shell 工具中被固定值（30,000字符）覆盖，无法生效。

---

## 4. 重要 PR 进展 (Top 10)

1.  **[PR #8661] 支持多种来源的 Qoder 插件安装**
    *   **内容**：实现了对本地目录、压缩包、Git、URL 和 npm 包的原生支持，极大扩展了插件生态的获取方式。
2.  **[PR #8687] Guard cross-worktree Git mutations**
    *   **内容**：在 Daemon 层面增加了针对跨工作树 Git 操作的安全防护，防止模型误操作导致 Git 状态混乱。
3.  **[PR #8848] Web Shell 通道管理重设计**
    *   **内容**：重构了 Channel 的权限和路由逻辑，支持更灵活的会话隔离和群组访问控制。
4.  **[PR #8866] 支持企业内网地址**
    *   **内容**：修复了 Desktop Local Control 在企业内网环境下无法使用物理网卡默认路由的问题。
5.  **[PR #8891] Web Shell 会话目录调度优化**
    *   **内容**：实现了页面级的会话列表缓存和并发控制，减少重复请求并提升列表加载性能。
6.  **[PR #8707] Chrome WebBridge 浏览器控制**
    *   **内容**：新增了通过 `qwen serve` 直接控制 Chrome 浏览器的能力，扩展了 Agent 的操作范围。
7.  **[PR #8675] 模型推理控制机制**
    *   **内容**：引入了统一的推理控制注册表，允许对不同模型设置 Thinking 和 Effort 级别。
8.  **[PR #8865] ACP 技能管理重构**
    *   **内容**：将 ACP 技能的安装、删除和启用逻辑提取到独立模块，提升了代码的维护性和安全性。
9.  **[PR #8853] Web Shell 循环检测错误处理**
    *   **内容**：将前台的循环检测停止转换为结构化的 Turn 错误，并在 Web Shell 中提供友好的错误提示。
10. **[PR #8809] Memory 测试覆盖**
    *   **内容**：新增了关于上下文刷新标记传递的测试用例，提升了内存管理的测试覆盖率。

---

## 5. 功能需求趋势

从 Issues 和 PR 的分析来看，当前社区关注点主要集中在以下三个维度：

1.  **多会话与多 Agent 体系**
    *   RFC #8718 和 PR #8841 表明，社区正在从单会话模式向多会话协作模式演进。核心诉求包括会话隔离、资源分配以及会话间的协调机制。
2.  **Web Shell 与交互式终端**
    *   Web Shell 是当前最热门的功能板块。社区在讨论如何通过 **tmux** 后端实现更强大的交互式终端子 Agent (#8613)，以及如何优化 Channel 管理和文件上传体验 (#8848, #8874)。
3.  **Daemon 资源与稳定性**
    *   随着功能复杂度增加，Daemon 的资源管理（内存分配 #8182）、会话恢复 (#8678) 以及日志轮转 (#8860) 成为保障长期稳定运行的关键。

---

## 6. 开发者关注点

*   **跨平台兼容性**：Windows 环境下的 URL 编码解析错误和 macOS iTerm 的渲染问题反馈较多，显示出在非 Linux 终端环境下的适配仍有提升空间。
*   **配置生效问题**：多个 Issue 提到配置项（如输出截断阈值、提供商版本同步）在实际使用中未按预期生效，反映出配置系统与运行时逻辑的衔接存在 gap。
*   **自动化工具链**：社区对 CI/CD 流程的自动化（如 Autofix 机制 #8888）和贡献者工具链的完善（#8921）表现出浓厚兴趣，致力于减少人工介入，提升开发效率。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期**: 2026-08-11  
**仓库**: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) (DeepSeek-TUI)

---

### 1. 今日速览
今日社区活跃度较高，主要围绕 **TUI 架构重构** 和 **子代理深度控制** 的修复展开。随着 `v0.9.6` 的发布，项目在减少运行时开销和简化编译路径方面取得了进展。同时，针对 ACP (Agent Communication Protocol) 的工具调用能力进行了扩展，修复了导致外部编辑器（如 Zed）无法执行代码编辑的关键 Bug。

### 2. 版本发布
**v0.9.6** (Released 2026-08-10) - **Hmbown**
*   **更新摘要**: 这是一个“减法”版本，旨在减少运行时保护机制，统一基础提示词，修正了提供者的结束标记，并优化了压缩路径以保持提供者一致性。
*   **影响**: 提升了核心模块的性能，简化了内部处理逻辑，为后续的架构解耦奠定基础。

### 3. 社区热点 Issues
1.  **#5316** [EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)
    *   **重要性**: **架构核心**。这是 TUI 模块解耦的总纲，标志着项目从单体架构向模块化架构迈出的关键一步。
    *   **状态**: Open | 反应: 2 comments
2.  **#2870** [EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)
    *   **重要性**: **重构跟踪**。跟踪了命令边界重构的逐步合并，是 #5316 的基础工作，涉及代码层的深度解耦。
    *   **状态**: Closed | 反应: 20 comments
3.  **#5253** [Bug: nested max_depth can widen the root session depth budget](https://github.com/Hmbown/CodeWhale/issues/5253)
    *   **重要性**: **稳定性**。发现子代理在嵌套生成时可能突破根会话的深度限制，导致潜在的无限递归风险。
    *   **状态**: Closed | 反应: 1 comment
4.  **#2791** [EPIC: command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2791)
    *   **重要性**: **长期规划**。上述所有重构工作的源头，定义了代码边界的解耦方向。
    *   **状态**: Closed | 反应: 20 comments

### 4. 重要 PR 进展
1.  **#5317** [fix(subagents): cap nested max_depth by inherited budget](https://github.com/Hmbown/CodeWhale/pull/5317)
    *   **内容**: 修复了在显式 `max_depth` 场景下，子代理可能继承并扩大根会话深度预算的 Bug。
    *   **状态**: Closed
2.  **#5300** [refactor(core): own primary request preparation](https://github.com/Hmbown/CodeWhale/pull/5300)
    *   **内容**: 移除了核心模块中未使用的 `ChatRequest` 占位符，统一使用 `MessageRequest`，并添加了纯函数构造器以支持无厂商差异的默认配置。
    *   **状态**: Closed
3.  **#5225** [feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)
    *   **内容**: 允许 ACP 服务器在会话/提示流中执行工具调用（文件、搜索、Git、补丁、Shell），而不仅仅是流式输出文本。
    *   **状态**: Closed
4.  **#5277** [build(deps): bump docker/login-action from 4.5.2 to 4.6.0](https://github.com/Hmbown/CodeWhale/pull/5277)
    *   **内容**: 依赖更新，提升 GitHub Actions 安全性和功能。
    *   **状态**: Closed
5.  **#5315** [chore(release): ship v0.9.6](https://github.com/Hmbown/CodeWhale/pull/5315)
    *   **内容**: 发布 v0.9.6 版本，包含性能优化和 Bug 修复。
    *   **状态**: Closed

### 5. 功能需求趋势
*   **架构模块化 (CRITICAL)**: 社区强烈推动将 TUI 模块进行 Crate (Rust 包) 分解，目标是降低复杂度和提高可维护性。
*   **外部集成能力 (ACP)**: 开发者高度关注通过 ACP 协议进行更深层的交互，特别是希望 IDE 集成（如 Zed）能真正具备代码编辑能力，而不仅仅是聊天。
*   **深度控制机制**: 针对 Agent 嵌套时的深度限制（`max_depth`）的讨论表明，用户对复杂任务链路的稳定性和可控性有极高要求。

### 6. 开发者关注点
*   **集成痛点**: 之前反馈 ACP 仅支持文本流，导致外部编辑器无法使用工具。最新 PR 已解决此问题，开发者正转向更复杂的架构重构。
*   **调试与限制**: 在多层子代理调用时，如何防止递归过深是开发者反馈的高频问题。
*   **性能优化**: 随着 `v0.9.6` 的发布，社区正在适应更精简的运行时逻辑，减少不必要的开销。

</details>

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*