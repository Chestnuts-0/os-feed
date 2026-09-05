# AI CLI 工具社区动态日报 2026-09-05

> 生成时间: 2026-09-05 01:58 UTC | 覆盖工具: 9 个

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



---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-09-05)

## 1. 热门 Skills 排行

### 🏆 **skill-creator** (Bug 修复与体验优化)
- **功能**：官方技能创建与管理工具，包含 `run_eval.py` 评估脚本和描述优化循环。
- **热点**：社区集中反馈 Windows 兼容性问题（#556, #1099, #1050），导致评估工具无法正常触发或崩溃，影响技能开发体验。
- **状态**：**OPEN** (多起 Bug 修复 PR 待合并)
- [PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1099](https://github.com/anthropics/skills/pull/1099) | [PR #1050](https://github.com/anthropics/skills/pull/1050)

### 🏆 **文档处理工具集** (高实用性与高频反馈)
- **功能**：提供 DOCX、PDF、ODT 等文档格式的高质量处理能力，包括格式修复、引用修正和模板填充。
- **热点**：社区频繁反馈文件引用大小写敏感、追踪变更冲突等问题（#538, #541），显示文档处理是高频刚需。
- **状态**：**OPEN** (Bug 修复与功能完善)
- [PR #541](https://github.com/anthropics/skills/pull/541) | [PR #538](https://github.com/anthropics/skills/pull/538) | [PR #486](https://github.com/anthropics/skills/pull/486)

### 🏆 **前端设计** (体验优化)
- **功能**：提供前端设计规范与最佳实践指导。
- **热点**：社区建议提升技能的可操作性与清晰度，使其更具指导性。
- **状态**：**OPEN** (优化 PR)
- [PR #210](https://github.com/anthropics/skills/pull/210)

### 🏆 **测试模式** (开发效率提升)
- **功能**：覆盖测试策略、单元测试、React 组件测试等全栈测试流程。
- **热点**：开发团队急需提升代码测试覆盖率与测试质量。
- **状态**：**OPEN** (新增技能)
- [PR #723](https://github.com/anthropics/skills/pull/723)

### 🏆 **ServiceNow 平台** (企业级应用)
- **功能**：覆盖 ITSM、ITOM、安全、ITAM 等全平台功能。
- **热点**：企业级用户对 ServiceNow 生态支持需求强烈。
- **状态**：**OPEN** (新增技能)
- [PR #568](https://github.com/anthropics/skills/pull/568)

---

## 2. 社区需求趋势

从 Issues 讨论中提炼出以下核心需求方向：

- **工作流自动化与编排**：如 **Hivemind** (多智能体编排)、**Self-audit** (质量门禁)、**Compact-memory** (状态管理)，社区希望技能能处理复杂跨任务流程。
- **文档与数据格式标准化**：对 **DOCX/PDF/ODT** 的规范化处理（引用修正、格式控制）呼声极高，反映企业用户对文档质量的刚需。
- **安全与治理**：对 **Agent Governance** (治理模式)、**Security** (信任边界) 的提案增多，显示企业部署技能时对安全合规的担忧。
- **跨平台兼容性**：Windows 兼容性、**MCP** (Model Context Protocol) 集成成为高频讨论点，开发者期待技能能在多环境下稳定运行。
- **上下文窗口优化**：如 **claude-api** 技能的 Token 注入问题，社区呼吁技能设计更注重效率，避免过早耗尽上下文。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、需求明确，可能近期合并：

- **Hivemind** (PR #1628)：零成本多智能体编排，解决昂贵模型上下文稀缺问题，符合“AI 分工”趋势。
- **Self-audit** (PR #1367)：机械验证 + 四维质量门禁，覆盖全流程质量管控，实用性强。
- **Pyxel** (PR #525)：复古游戏开发技能，结合 MCP 生态，满足创意开发需求。
- **UIZZE** (PR #1595)：UI 设计规范与验收技能，填补产品交付缺口。

---

## 4. Skills 生态洞察

**“从工具到治理：社区正从单一技能工具向系统化工作流与安全治理演进。”**

当前社区最集中的诉求是：**如何让 Skills 不仅能完成单一任务，还能作为安全、可复用的企业级能力组件，贯穿项目全生命周期。**

---

# Claude Code 社区动态日报

**日期**: 2026-09-05  
**数据来源**: [anthropics/claude-code](https://github.com/anthropics/claude-code)  
**分析师**: AI 开发工具技术分析师

---

## 1. 今日速览

今日 Claude Code 发布了 **v2.1.261** 版本，重点解决了组织策略加载失败（如代理未转发端点）的问题，并新增了 `bashOutputMaxChars` 和 `taskOutputMaxChars` 设置以控制输出长度。社区最活跃的讨论集中在 Windows 平台的进程锁、自动更新导致会话中断、权限系统回归等问题，反映出桌面端体验仍需优化。

---

## 2. 版本发布

### v2.1.261 (2026-09-05)
**核心更新**:
- **组织策略优化**: 在 `/status` 和 `claude doctor` 中新增组织策略加载失败的原因说明（如代理未转发端点）
- **输出长度控制**: 新增 `bashOutputMaxChars` 和 `taskOutputMaxChars` 设置，允许开发者自定义命令和后台任务的输出字符限制
- **问题修复**: 针对上一版本权限系统的回归问题进行了修复

---

## 3. 社区热点 Issues

### 🔴 高优先级/影响面广
1. **Windows 自动更新导致进程锁死** (Issue #42776)
   - **状态**: Open | **评论**: 159 | **👍**: 75
   - **问题**: Windows 桌面端自动更新后无法重启，因旧进程文件锁导致 `0x80070020` 错误
   - **影响**: 所有 Windows 用户，需要重启才能恢复

2. **Function Hooks 功能提案** (Issue #91870)
   - **状态**: Open | **评论**: 99 | **👍**: 62
   - **亮点**: 提议通过函数钩子系统让插件深度修改 Claude Code，类似 Express/Koa 的中间件模式
   - **意义**: 可能彻底改变插件开发方式，大幅提升扩展性

3. **跨平台同步故障** (Issue #81658)
   - **状态**: Open | **评论**: 16
   - **问题**: Desktop/Web/Android 之间同步失败，导致会话和聊天记录消失
   - **原因**: 怀疑是服务器端事故

### 🟡 平台特定问题
4. **Bash 权限系统回归** (Issue #91650, #91683)
   - **状态**: Open | **评论**: 10-7
   - **问题**: 2.1.259 版本中，`cd` 命令在存在 `Read()` 拒绝规则时会意外提示权限确认
   - **影响**: Windows Git Bash 用户

5. **Desktop 消息工具缺失** (Issue #92249)
   - **状态**: Open | **评论**: 2
   - **问题**: Scheduled task 和 Remote Control 会话中，`ListAgents` 和 `SendMessage` 工具未注册
   - **版本**: bisected 到 Desktop 1.44121.4 -> 1.46388.1

6. **Mac 上报 Endpoint Security 误报** (Issue #90109)
   - **状态**: Open | **评论**: 3
   - **问题**: 桌面应用误杀自己的 worker 进程，并错误归因于 Endpoint Security
   - **影响**: Mac 用户无法正常使用

### 🟢 功能需求
7. **CLI 模型查询命令** (Issue #12612)
   - **状态**: Open | **评论**: 18 | **👍**: 58
   - **需求**: 需要非交互式的 `claude model list` 命令来查询可用模型

8. **MEMORY.md 压缩阈值可配置** (Issue #91188)
   - **状态**: Open | **评论**: 19
   - **需求**: 当前 `MEMORY.md` 加载逻辑硬编码为 200 行/25KB，希望可配置

9. **Desktop 声音效果关闭选项** (Issue #91237)
   - **状态**: Closed (Invalid)
   - **反馈**: 社区认为该功能已存在或非必需

10. **LaTeX 数学公式渲染** (Issue #63139)
    - **状态**: Closed
    - **反馈**: 已实现，无需重复提交

---

## 4. 重要 PR 进展

1. **安全规则 glob 模式修复** (PR #87079)
   - **作者**: anishsamant
   - **内容**: 修复 `**` glob 模式在安全规则中的匹配问题，确保零深度路径被正确处理
   - **重要性**: 安全规则静默失败可能导致权限绕过

2. **GitHub 连接器诊断脚本** (PR #61691)
   - **作者**: giruuuuj
   - **内容**: 添加 PowerShell 脚本诊断 GitHub MCP 连接器"已连接但无工具"问题
   - **关联**: 关闭 #61682 及相关问题

---

## 5. 功能需求趋势

根据 50 条 Issues 分析，社区需求集中在以下方向：

| 需求类别 | 典型 Issue | 频次 | 优先级 |
|---------|-----------|------|-------|
| **桌面端稳定性** | Windows 更新锁死、进程管理 | 高 | 🔴 高 |
| **权限系统** | Bash 权限提示回归、密钥链管理 | 中 | 🟡 中 |
| **插件扩展性** | Function Hooks | 高 | 🟡 中 |
| **模型管理** | CLI 模型查询、MEMORY.md 配置 | 中 | 🟢 低 |
| **跨平台同步** | 会话丢失、Cowork 集成 | 低 | 🟡 中 |

**关键洞察**: 社区对桌面端的稳定性和权限系统的可靠性要求极高，插件生态和模型管理功能需求正在升温。

---

## 6. 开发者关注点

### 痛点总结
1. **Windows 自动更新机制激进**: 多个用户报告更新时强制重启会话，无取消选项
2. **权限系统复杂且易回归**: 新版本引入的权限检查逻辑在特定场景下表现异常
3. **进程管理问题**: Windows 上文件锁、孤儿进程、MSIX 容器问题频发
4. **跨会话通信不稳定**: Remote Control 和 Scheduled task 的工具注册异常

### 高频技术问题
- **MSIX 包更新冲突**: Desktop 版本升级导致的 AppX 容器问题
- **Git Bash 集成**: 权限提示在 Git Bash 中表现异常
- **截图权限**: Windows 上 Computer use 截图完全被遮罩
- **Keychain 读取**: macOS 配置目录设置导致凭证读取错误

---

**附**: 完整 Issues 列表请访问 [GitHub Issue Tracker](https://github.com/anthropics/claude-code/issues)。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-09-05)

**分析师：** AI 开发工具技术分析师  
**数据来源：** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览

今日 GitHub Copilot CLI 迎来了重量级更新，版本 **v1.0.84-1** 正式宣布提供对 **GPT-6 Astra** 模型的支持。与此同时，在沙盒安全隔离（支持忽略提示bypass）、macOS/Linux 本地网络屏蔽以及 Windows 11 任务栏实时状态集成方面均有显著升级。

在社区反馈方面，开发者高度关注上下文 Token 开销与成本优化（包括 BYOK 模式下 Prompt Caching 失效问题），同时对 V8 堆内存溢出 (OOM) 崩溃以及 ACP 模式下的安全权限回归Bug表达了强烈担忧。

---

## 2. 版本发布

### [v1.0.84-1](https://github.com/github/copilot-cli/releases/tag/v1.0.84-1)
* **新增模型支持：** 官方加入了对 **GPT-6 Astra** 的支持。

### [v1.0.84-0](https://github.com/github/copilot-cli/releases/tag/v1.0.84-0)
* **沙盒控制：** 允许在获得批准的 Bypass 提示后，在该会话的剩余时间内禁用受管沙盒。
* **修复：** 修复了 PowerShell 沙盒拦截中误将命令推荐至沙盒外运行的问题，以及凭据库存在多个 GitHub 账号时沙盒内 `gh` CLI 的选择冲突。

### [v1.0.83 / v1.0.83-5](https://github.com/github/copilot-cli/releases/tag/v1.0.83)
* **系统集成：** Windows 11 任务栏新增运行中 Copilot 会话支持，并提供悬停实时状态卡片。
* **MCP & Agent：** 支持用于 MCP OAuth 登录的 Client ID Metadata Document (CIMD)；自定义 Agent 允许在 `model` 字段配置备选模型列表（按顺序尝试直至可用），并通过 `model-policy: required` 强制模型策略。
* **网络安全：** macOS 和 Linux 环境下，沙盒命令不再允许访问本机运行的服务（macOS 上进一步拦截了运行在 127.0.0.1 的服务）。

---

## 3. 社区热点 Issues

1. **[#2904](https://github.com/github/copilot-cli/issues/2904) 自定义 Agent Frontmatter 应支持配置 Reasoning Effort** (👍 23)
   * **关注原因：** 当前自定义 Agent (`.agent.md`) 可以锁定模型，但无法按 Agent 设定推理强度 (Reasoning Effort)，仅能全局配置，限制了复杂 Agent 的灵活微调。

2. **[#2627](https://github.com/github/copilot-cli/issues/2627) 请求支持自定义/精简系统提示词以减少固定 Token 开销** (👍 19)
   * **关注原因：** 默认系统提示词在会话初始即占用约 20,500 tokens，占 200K 上下文窗口的 10%。社区希望提供轻量化配置选项。

3. **[#4720](https://github.com/github/copilot-cli/issues/4720) [Bug] 1.0.82 BYOK 模式隐式禁用了 Prompt Caching，导致 API 成本暴增 5 倍** (👍 0)
   * **关注原因：** 在自备 Key (BYOK) 模式下，CLI 1.0.82 发送请求时未带 prompt-cache 声明，导致服务提供商无法命中缓存（`cached_tokens=0`），每次对话都重新计算全量上下文。

4. **[#4537](https://github.com/github/copilot-cli/issues/4537) [安全回归] ACP 模式再次自动批准工具调用，自 1.0.81-1 起不再发送权限请求** (👍 2)
   * **关注原因：** 在 `--acp` 模式下，Shell 命令和文件修改不需要用户确认即自动执行，严重违背了权限防护机制。

5. **[#4725](https://github.com/github/copilot-cli/issues/4725) & [#4699](https://github.com/github/copilot-cli/issues/4699) 恢复长会话时频繁触发 V8 JavaScript 堆内存溢出崩溃** (👍 2)
   * **关注原因：** 长时间使用 `--resume` 恢复会话时，CLI 容易达到 4 GiB 内存上限并触发 OOM 崩溃，且会将 Dump 文件写入当前工作目录。

6. **[#4710](https://github.com/github/copilot-cli/issues/4710) 会话空闲时 `copilot-file-search` 后台线程打满单核 CPU 且无限制写入磁盘日志** (👍 0)
   * **关注原因：** 严重影响开发机性能，后台搜索进程在 `--yolo` 模式下陷入死循环，耗尽磁盘与 CPU 资源。

7. **[#1688](https://github.com/github/copilot-cli/issues/1688) 支持在 `config.json` 中配置自动上下文压缩 (Auto-Compaction) 阈值** (👍 5)
   * **关注原因：** 在使用 Claude Opus 4.6 等大模型时，上下文膨胀到 45-60% 即会导致响应延迟剧增，需要早于默认阈值触发压缩。

8. **[#4724](https://github.com/github/copilot-cli/issues/4724) 建议结合模型的 Prompt Cache TTL 自动在空闲时压缩上下文** (👍 0)
   * **关注原因：** 服务端的 Prompt Cache TTL 约 5 分钟，空闲过后重新读取未缓存的完整上下文开销巨大，建议按 TTL 空闲间隔触发上下文压缩。

9. **[#4728](https://github.com/github/copilot-cli/issues/4728) 自动更新覆盖 `copilot.exe` 破坏 GitHub Copilot 桌面客户端的内嵌 CLI** (👍 0)
   * **关注原因：** 在终端独立运行 `copilot` 触发自动升级后，会导致 Copilot Desktop 客户端报错“Session unavailable”，无法恢复任何既有会话。

10. **[#4721](https://github.com/github/copilot-cli/issues/4721) JSON-RPC 序列化错误损坏发送至 Canvas 扩展的工具调用参数** (👍 0)
    * **关注原因：** 工具调用的 JSON 参数末尾被拼接了非法的 `}{}` 后缀，导致 Canvas 扩展接收参数时报 `Unexpected end of JSON input` 解析错误。

---

## 4. 重要 PR 进展

* **[#3771](https://github.com/github/copilot-cli/pull/3771) Initial project setup**
  * **内容：** 基础设施及项目初始配置更新（过去 24 小时内 PR 提交活动相对平静，主要工作集中于 1.0.84 系列版本的紧急 Release 发布）。

---

## 5. 功能需求趋势

从社区近期的议题来看，开发者对 CLI 工具的需求正呈现出以下三大趋势：

1. **更精细的上下文与 Token 成本控制：** 上下文窗口越来越大，但随之带来的是首字延迟增加与计算成本飙升。开发者急切需要：可自定义的精简版系统提示词（如 [#2627](https://github.com/github/copilot-cli/issues/2627)）、可调节的上下文压缩阈值（[#1688](https://github.com/github/copilot-cli/issues/1688)）以及结合 Prompt Cache 生命周期的空闲压缩机制（[#4724](https://github.com/github/copilot-cli/issues/4724)）。
2. **多模型与 Agent 配置的深度化：** 随着多模型策略的落地（如新增 GPT-6 Astra 支持），用户不仅希望为自定义 Agent 设定特定模型，还迫切

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### Kimi Code CLI 社区动态日报 2ated: 20D6-1-1

### ** **徽*旨速览
1 今天的 Kimi Code CLI 社区活跃度较高，主要专注于解决一些用户遇到的问题D同时也进一步优化了功能。
1

DD版本发布
D 无新版本发布D

D D社区热点 Issues
D 1热点 Issue 主要集中在以下几个方面：
1

D #1316: [CLOSED] bug: Mcp timeout 导致 kimi-cli 不可用
D 该问题提交者反馈在使用使用过程出现 mcp 迌源时问题D导致整个 kimi-cli 界面挂掉D此问题对于日常构建过程影响较大D同时无更多用户评论。
D 链接: [https://github.com/MoonshotAI/kimi-cli/issues/#1316](https://github.com/MmoonshotAI/kimi-cli/issues/# e3116)

D D #26D34: [OPEN] bug: K e 终端设置问题
D 该问题提交者反馈在 Windows 终端 D 使用快捷键粘贴功能不上勾D主要用于办公环境使用较多D需要优化以满足更多用户需求D效果良好已有新提交。
D 链接: [https://github.com/MmoonshotAI/kem-cli/issues/#D6D34](https://github.com/MmoonshotAI/kimi-cli/issues/#D6D34)

D D重要 PR 进展
D 重要 PR 主要集中在工具修复和和新功能支持D：


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026年9月5日
**来源：** [GitHub - anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. 今日速览
今日 OpenCode 发布了 **v1.18.29** 版本，重点修复了 Codex OAuth 模型过滤的兼容性问题（如 `gpt-6` 系列），并优化了会话追踪机制。社区活跃度极高，过去24小时内更新了50个 Issues 和 50个 PR，主要集中在 **桌面端 UI 交互体验**（侧边栏显示、标签页宽度）以及 **性能与稳定性**（CPU 占用、数据库膨胀）的改进与反馈。

---

## 2. 版本发布
### v1.18.29 (2026-09-05)
本次更新主要针对 Core 和 Desktop 进行了关键修复：
*   **Core (Bugfixes):**
    *   修复了 Codex OAuth 模型过滤逻辑，现在可以正确识别整数版本的 GPT 模型（如 `gpt-6`）。
    *   修复了 `gpt-6-astra` 模型在 OpenAI 订阅用户列表中不显示的问题。
*   **Desktop (Bugfixes):**
    *   修复了 OpenCode 账户设备认证时使用错误的 Desktop Client ID 的问题。
    *   增大了桌面应用内“打开应用”图标的尺寸，提升可见性。
*   **Contributors:**
    *   感谢社区贡献者 @Peter267 修复了中文文档中的加粗渲染问题。

---

## 3. 社区热点 Issues (Top 10)
**#30086 [OPEN] High CPU usage in newer versions of OpenCode**
*   **热度：** 50 评论 / 26 👍
*   **重要性：** **严重性能问题**。用户反馈自7天前更新后，CPU 占用率飙升。原本可同时运行10个会话，现在3个就会导致鼠标严重卡顿。这是过去24小时内关注度最高的 Issue。
*   **详情：** [Issue #30086](https://github.com/anomalyco/opencode/issues/30086)

**#33356 [OPEN] Unbounded growth of the `event` table**
*   **热度：** 27 评论 / 9 👍
*   **重要性：** **数据存储瓶颈**。长期运行的实例会导致本地 SQLite 数据库膨胀至 13GB+，主要是 `message.updated.1` 快照未做清理，影响系统性能。
*   **详情：** [Issue #33356](https://github.com/anomalyco/opencode/issues/33356)

**#30680 [CLOSED] OpenCode immediately enters auto-compaction loop**
*   **热度：** 17 评论
*   **重要性：** **功能异常**。用户报告 OpenCode 进入无限自动压缩循环，占用大量 Token 并导致模型停止生成回复。虽然已关闭，但反映了核心逻辑的稳定性问题。
*   **详情：** [Issue #30680](https://github.com/anomalyco/opencode/issues/30680)

**#47363 [CLOSED] GPT-6 Astra is missing from the OpenAI Codex OAuth model picker**
*   **热度：** 3 评论 / 20 👍
*   **重要性：** **模型支持回归**。这是与 v1.18.29 同步修复的 Bug。用户发现同一账户在官方客户端可用，但在 OpenCode 中通过 OAuth 无法选择该模型。
*   **详情：** [Issue #47363](https://github.com/anomalyco/opencode/issues/47363)

**#47368 [CLOSED] Remote MCP regression in OpenCode 1.18.28**
*   **热度：** 3 评论
*   **重要性：** **插件生态**。更新至 1.18.28 后，远程 MCP 服务器连接失败。这影响了依赖外部工具链的开发工作流。
*   **详情：** [Issue #47368](https://github.com/anomalyco/opencode/issues/47368)

**#47425 [OPEN] Desktop freezes or crashes when pasting large text**
*   **热度：** 1 评论
*   **重要性：** **桌面端稳定性**。在 Windows 桌面版中粘贴大量文本时，应用会立即崩溃。影响用户体验。
*   **详情：** [Issue #47425](https://github.com/anomalyco/opencode/issues/47425)

**#47406 [OPEN] Right sidebar (project files) hidden on "New Session"**
*   **热度：** 1 评论
*   **重要性：** **UI 交互缺陷**。新建会话时，右侧项目文件树不显示，必须发送第一条消息后才可见，不符合直觉。
*   **详情：** [Issue #47406](https://github.com/anomalyco/opencode/issues/47406)

**#47350 [OPEN] Shell tool never returns when command leaves background process**
*   **热度：** 3 评论
*   **重要性：** **工具链可靠性**。Shell 工具在子进程退出但后台进程仍在运行时，会永久挂起，导致自动化任务失效。
*   **详情：** [Issue #47350](https://github.com/anomalyco/opencode/issues/47350)

**#46760 [OPEN] `opencode run` returns {UnknownError} when default model is deprecated**
*   **热度：** 3 评论
*   **重要性：** **配置兼容性**。当配置的默认模型被弃用后，CLI 工具返回模糊的错误信息，缺乏明确的指引。
*   **详情：** [Issue #46760](https://github.com/anomalyco/opencode/issues/46760)

**#47335 [CLOSED] opencode problem**
*   **热度：** 2 评论
*   **重要性：** **通用稳定性**。用户发送消息后只显示 `.` 不响应，属于偶发性严重 Bug。
*   **详情：** [Issue #47335](https://github.com/anomalyco/opencode/issues/47335)

---

## 4. 重要 PR 进展 (Top 10)
**#47423 [OPEN] feat(core): support provider OAuth client credentials**
*   **内容：** 增加对配置的 Provider 的 OAuth `client_credentials` 认证支持。允许在无浏览器交互的情况下通过 Basic Auth 或 POST 方式进行认证，仅内存缓存 Token 并在过期时重试。
*   **详情：** [PR #47423](https://github.com/anomalyco/opencode/pull/47423)

**#47424 [OPEN] fix(app): increase vertical tabs minimum width**
*   **内容：** 修复 UI 布局问题。将侧边栏标签页的最小宽度从 130px 增加到 140px，防止“New session”标签被截断换行。
*   **详情：** [PR #47424](https://github.com/anomalyco/opencode/pull/47424)

**#47392 [CLOSED] fix(lsp): idle TTL timeout and LRU eviction policy**
*   **内容：** 修复 LSP 客户端的无界增长问题。引入空闲 TTL 超时和 LRU 淘汰策略，自动清理闲置的 LSP 连接。
*   **详情：** [PR #47392](https://github.com/anomalyco/opencode/pull/47392)

**#47391 [CLOSED] perf(plugin): parallel internal plugin loading**
*   **内容：** 性能优化。将内部插件加载改为并行执行，减少应用启动时的初始化时间。
*   **详情：** [PR #47391](https://github.com/anomalyco/opencode/pull/47391)

**#47414 [OPEN] fix(core): preserve legacy markdown agent variants**
*   **内容：** 修复 Markdown Agent 在使用特定配置（如 `model: example/chat` 和 `variant: high`）时丢失变体信息的问题。
*   **详情：** [PR #47414](https://github.com/anomalyco/opencode/pull/47414)

**#47412 [OPEN] fix(core): preserve literal command arguments**
*   **内容：** 修复模板替换 Bug。在 `Explain $ARGUMENTS` 模板中，传递 `$&` 时应保持原样，而非被错误替换为 `$ARGUMENTS`。
*   **详情：** [PR #47412](https://github.com/anomalyco/opencode/pull/47412)

**#47410 [OPEN] fix(core): preserve inline code boundary backticks**
*   **内容：** 修复代码块边界丢失。HTML 内联代码两端的反引号与生成的 Markdown 分隔符合并，导致输出内容损坏。
*   **详情：** [PR #47410](https://github.com/anomalyco/opencode/pull/47410)

**#47417 [OPEN] fix(app): Path key normalization**
*   **内容：** 修复项目管理 Bug。确保位于不同路径但同名（如 `c:\foo` 和 `d:\foo`）的项目能被正确识别为独立项目。
*   **详情：** [PR #47417](https://github.com/anomalyco/opencode/pull/47417)

**#46850 [OPEN] feat(core): transcript recall index for semantic session history**
*   **内容：** **新功能**。实现本地会话历史的语义搜索索引，支持跨会话的智能内容检索。
*   **详情：** [PR #46850](https://github.com/anomalyco/opencode/pull/46850)

**#47404 [CLOSED] fix(core): compare Codex GPT versions by major and minor**
*   **内容：** 修复模型过滤逻辑。修正了 `gpt-6` 等整数版本无法被识别的问题，并修复了版本号排序错误（如 `gpt-5.10` 排序异常）。
*   **详情：** [PR #47404](https://github.com/anomalyco/opencode/pull/47404)

---

## 5. 功能需求趋势
从今日的 Issue 和 PR 中可以看出，社区关注点高度集中在以下三个方向：
1.  **桌面端 UI/UX 优化：** 新版布局设计带来了一些交互问题，如侧边栏隐藏、标签页截断、快捷键占位符影响布局等，这是开发者反馈最集中的领域。
2.  **核心性能与资源管理：** 随着使用时间增长，**CPU 占用过高**和 **数据库无限膨胀** 成为长期困扰用户的两大痛点。社区急需更完善的连接池管理和数据清理机制。
3.  **模型兼容性与 OAuth：** 社区对第三方模型（如 Augure AI）的支持呼声增加，同时 OpenAI Codex OAuth 的模型列表过滤逻辑需要更健壮的版本兼容处理。

---

## 6. 开发者关注点
*   **资源泄漏风险：** LSP 连接未做自动清理、Shell 工具在后台进程存在时挂起、本地 SQLite 数据库无限制增长，这些都是可能导致系统长期运行后卡顿甚至崩溃的隐患。
*   **多路径项目管理：** 开发者常在跨盘符（C盘和D盘）或不同目录下管理同名项目，现有的路径识别逻辑导致项目无法正确添加或覆盖。
*   **大文本处理稳定性：** 桌面端在处理大段粘贴文本时的崩溃风险，影响了用户在遇到错误或日志时快速反馈的体验。
*   **API 与配置透明度：** 当模型被弃用或配置错误时，CLI 返回模糊的错误信息，缺乏对开发者友好的错误诊断指引。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 | 2026-09-05

## 1. 今日速览

v0.85.0 正式发布，新增 Anthropic 持久化 thinking effort 支持，并修复了打包依赖缺失问题（`pi-server` 未声明依赖引发多个 `ERR_MODULE_NOT_FOUND` 错误）。社区同时推动了 Meta Muse 订阅 OAuth、OrcaRouter 网关、Durable Object SQLite 后端等多项新能力，TUI 交互体验（剪贴板、滚动、spinner）也在持续优化。

## 2. 版本发布

**v0.85.0**
- **新特性**：支持 Anthropic 传输层的 per-turn thinking effort 持久化，可从 signed-thinking 不匹配中安全恢复。
- **相关链接**：[v0.85.0 Releases](https://github.com/badlogic/pi-mono/releases) | [Model Configuration 文档](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)

> ⚠️ v0.85.0 存在打包缺陷：`dist/cli.js` / `dist/experimental/server.js` 静态导入 `@earendil-works/pi-server`，但该包未在 `dependencies` 中声明，导致 Fresh Install 失败（Issue #9132/#9158/#9140/#9173）。PR #9170 已修复依赖声明，PR #9172 防止同类问题再次发布。

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论/👍 | 重要性 |
|---|------|------|---------|--------|
| #5363 | Add amazon-bedrock-mantle provider | OPEN / inprogress | 18 / 15 | 新增 AWS Bedrock Mantle OpenAI 兼容 API 支持，填补现有 Converse API 覆盖盲区 |
| #7730 | High CPU usage on Mac OS with long session | OPEN / bug | 15 / 10 | macOS 长会话 CPU 飙升至 100%+，内存 600-800MB，影响核心用户体验 |
| #5593 | Tab-completing slash command inserts trailing space | OPEN / inprogress | 7 / 0 | Tab 补全后多余空格阻断参数自动补全，破坏交互流畅度 |
| #8896 | `/export HTML` silently drops `display:false` messages | OPEN | 6 / 0 | 导出 HTML 静默丢弃 TUI 隐藏消息，破坏会话导出完整性 |
| #9052 | Fullscreen mode scroll wheel 3x slower | OPEN | 5 / 2 | 全屏模式滚动体验明显劣于普通模式 |
| #8760 | OpenRouter `:free` models fail with 400 | OPEN / bug | 5 / 0 | Pi 发送的 `max_tokens` 超出上游限制，导致免费模型全部不可用 |
| #5137 | Header-only collapsed tool output mode | CLOSED / no-action | 5 / 0 | 社区请求工具卡片默认折叠，仅显示 header |
| #9132 | 0.85.0 `pi-server` 未声明依赖 | CLOSED / untriaged | 4 / 5 | 发布缺陷，直接影响安装，已触发多个 follow-up issue |
| #8720 | Whitespace-only tool result bricks session | OPEN / bug | 4 / 0 | Bash 返回空白字符导致 provider 返回 400，会话永久损坏 |
| #8684 | `PI_OFFLINE` 静默禁用所有 provider 发现 | OPEN / bug | 4 / 0 | 环境变量行为与文档描述不符，存在误导性 |

**活跃 Issue 链接：**
- [#5363](https://github.com/earendil-works/pi/issues/5363) | [#7730](https://github.com/earendil-works/pi/issues/7730) | [#5593](https://github.com/earendil-works/pi/issues/5593) | [#8896](https://github.com/earendil-works/pi/issues/8896) | [#9052](https://github.com/earendil-works/pi/issues/9052) | [#8760](https://github.com/earendil-works/pi/issues/8760) | [#8720](https://github.com/earendil-works/pi/issues/8720) | [#8684](https://github.com/earendil-works/pi/issues/8684)

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 作者 | 状态 | 说明 |
|---|------|------|------|------|
| #9170 | fix: declare pi-server runtime dependency | any-victor | OPEN | 修复 v0.85.0 发布缺陷，补充缺失依赖声明 |
| #9172 | fix: prevent broken package root publication | any-victor | OPEN | 在上 PR 基础上增加发布保护，防止同类问题复发 |
| #9096 | feat: add Meta provider with Muse subscription OAuth | xl0 | OPEN | 新增 Meta 官方 Provider，支持 Muse 订阅 OAuth（含每日 Token 重铸机制） |
| #9135 | feat: add OrcaRouter as first-class provider | kuswardhanietidims-svg | CLOSED | OrcaRouter OpenAI 兼容网关正式纳入，支持自适应路由与自动故障转移 |
| #9116 | feat: add mid-conversation system messages | mitsuhiko | OPEN | 支持会话中途注入 system message，为扩展动态修改上下文铺路（#8998 分层第一层） |
| #9117 | feat: deliver prompt/tool changes as system message deltas | mitsuhiko | OPEN | 将 prompt 和工具负载变更以 system message delta 形式下发，避免全量重写 top-level prompt |
| #9166 | feat: accelerate Alt-modified wheel scrolling | xl0 | OPEN | Alt 组合键下滚动速度提升 5x，修复 #9052 |
| #9138 | feat: use Cmd+V for clipboard image paste on macOS | say4n | CLOSED | macOS 剪贴板图片粘贴改用 `Cmd+V`，符合平台惯例 |
| #9163 | feat: simplify clipboard handling | mitsuhiko | OPEN | 简化剪贴板处理逻辑，支持 NixOS 等非标准构建环境 |
| #9131 | feat: Durable Object SQLite session backend | muhajirdev | CLOSED | 新增 Cloudflare Durable Object 作为会话存储后端，适配 Serverless 场景 |

**PR 链接：**
- [#9170](https://github.com/earendil-works/pi/pulls/9170) | [#9096](https://github.com/earendil-works/pi/pulls/9096) | [#9116](https://github.com/earendil-works/pi/pulls/9116) | [#9117](https://github.com/earendil-works/pi/pulls/9117) | [#9131](https://github.com/earendil-works/pi/pulls/9131) | [#9135](https://github.com/earendil-works/pi/pulls/9135) | [#9138](https://github.com/earendil-works/pi/pulls/9138) | [#9166](https://github.com/earendil-works/pi/pulls/9166)

## 5. 功能需求趋势

从本期 Issues/PRs 中可观察到以下趋势：

1. **Provider 生态扩展**：AWS Bedrock Mantle (#5363)、Meta Muse (#9096)、OrcaRouter (#9135) 等新增 Provider 持续涌入，社区对多云/多网关集成需求强烈。
2. **会话中间件注入能力**：mid-conversation system messages (#9116/#9117) 和 tool result 生命周期 hook (#9175) 表明开发者期望更细粒度的会话流控制。
3. **存储后端多元化**：Durable Object SQLite (#9131) 和 JsonlSessionRepo cwd 作用域问题 (#9073) 反映出对可移植、跨环境存储方案的需求。
4. **TUI 交互精细化**：剪贴板 (#9163/#9138)、滚动性能 (#9166/#9052)、工具卡片折叠 (#5137)、export 完整性 (#8896) 等 issue 显示用户对 CLI 体验细节关注度提升。
5. **打包与依赖治理**：v0.85.0 的 `pi-server` 缺失依赖事件 (#9132/#9158/#9140/#9173/#9172) 暴露了 monorepo 发布流程的脆弱性，社区呼吁更严格的发布保护。

## 6. 开发者关注点

**高频痛点：**

- **发布/依赖管理**：v0.85.0 的 dependency 声明遗漏导致大量用户安装失败，引发 5+ follow-up issues，社区对包质量管控敏感度极高。
- **Provider 兼容性边界**：OpenRouter `:free` 模型的 `max_tokens` 超限 (#8760)、Claude Opus 5 的 `output_config` 不支持 (#9165)、Anthropic adapter 静默丢弃 `anyOf` (#9134) 等 issue 共同指向：Pi 对不同 provider 的适配层存在隐式行为差异，需更严格的契约校验。
- **长会话稳定性**：macOS 高 CPU (#7730)、空白 tool result 永久损坏会话 (#8720)、google-vertex ECONNRESET (#3218) 等问题表明，长时间运行场景下的错误恢复机制仍是薄弱环节。
- **环境变量语义清晰度**：`PI_OFFLINE` 的行为超出文档范围 (#8684)，反映出内部行为与文档对齐存在滞后。
- **扩展能力诉求**：tool 执行前 hook (#9175)、消息队列暴露 (#9174)、session pinning (#9139) 等 feature request 表明开发者希望获得更完整的扩展点以构建定制化 Agent 工作流。

---

*日报生成时间：2026-09-05 | 数据来源：github.com/badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 (2026-09-05)

**分析师观察**：今日社区焦点集中在**本地模型（Ollama）上下文窗口分配算法修复**与 **TUI 界面转录卡片（Transcript Snapshot）的冗余清理**。同时，开发者提出了关于 AI Agent 自动学习进化（Continuous Self-Learning）以及纯 Rust 交叉编译无 C 依赖内存分配器（`rusty_alloc`）等前瞻性架构探讨。

---

## 1. 今日速览

过去 24 小时内，社区重点修复了 Ollama 32K 本地模型在默认 64K 输出预留策略下导致输入 Budget 缩减至 1024 tokens 的严重缺陷（[#5820](https://github.com/Hmbown/Codewhale/issues/5820) / [#5883](https://github.com/Hmbown/Codewhale/pull/5883)），并解决了 `todo_write` 工具卡片在对话历史中不断堆积卡顿的问题（[#5871](https://github.com/Hmbown/Codewhale/issues/5871) / [#5873](https://github.com/Hmbown/Codewhale/pull/5873)）。此外，项目维护团队更新了 CI 基线，并推进了 OpenCode 协议与 MCP SDK 的版本对齐。

---

## 2. 社区热点 Issues

*由于过去24小时内社区共产生 4 条有效技术 Issue，已全部收录如下：*

1. **[OPEN] [#5820](https://github.com/Hmbown/Codewhale/issues/5820) Ollama 供应商：32K 本地模型的输入 Budget 崩溃降至 1024 tokens**
   * **为什么重要**：默认的 64K 输出预留逻辑直接压塌了 32K（如 qwen2.5:7b）本地模型的窗口，导致本地大模型基本无法处理稍长的 Prompt。社区已快速跟进 PR 修复。
   * **社区反应**：引发本地部署用户的高度关注，促使团队重新设计基于 Route 声明窗口的自动输出预留算法。

2. **[OPEN] [#5860](https://github.com/Hmbown/Codewhale/issues/5860) [增强提案] 从对话中持续自学习（技能自动演进）**
   * **为什么重要**：当前 Agent 的 `SKILL.md` 需要手动创建，知识属于静态模式。提案建议增加自动模式识别与技能自动提炼机制，提升 Agent 长期解决同类问题的效率。
   * **社区反应**：AI Agent 架构层面的长远建议，引发对知识提取精度与安全边界的讨论。

3. **[OPEN] [#5872](https://github.com/Hmbown/Codewhale/issues/5872) [增强提案] 引入 `rusty_alloc` 作为可选项（替代 `mimalloc`）**
   * **为什么重要**：`mimalloc` 依赖 C 编译器和构建脚本。引入纯 Rust 实现的 `rusty_alloc` 可大幅简化跨平台编译流程，降低贡献者门槛。
   * **社区反应**：系统级性能与构建易用性之间的折中思考。

4. **[OPEN] [#5871](https://github.com/Hmbown/Codewhale/issues/5871) [Bug] To-do 列表历史记录堵塞 Transcript 且无法清理**
   * **为什么重要**：每次执行 `todo_write` 都会在对话流中生成永久快照卡片，即使清空待办列表，旧快照依然堆叠，极大影响终端视觉体验。
   * **社区反应**：终端 UI 交互高频痛点，提交后立刻得到了社区开发者 PR [#5873](https://github.com/Hmbown/Codewhale/pull/5873) 的响应。

---

## 3. 重要 PR 进展

1. **[OPEN] [#5883](https://github.com/Hmbown/Codewhale/pull/5883) fix(tui): 根据 Route 窗口动态推导本地输出预算**
   * **内容**：修复 Issue [#5820](https://github.com/Hmbown/Codewhale/issues/5820)。当模型缺乏静态目录定义时，根据路由声明的上下文窗口动态计算自动输出预留，彻底解决 32K 本地模型预算塌陷问题。

2. **[OPEN] [#5873](https://github.com/Hmbown/Codewhale/pull/5873) fix(tui): 替换过期的 Todo Transcript 历史快照**
   * **内容**：修复 Issue [#5871](https://github.com/Hmbown/Codewhale/issues/5871)。终端界面仅保留最新一条成功的 `todo_write` 快照，避免历史堆叠，同时不丢失内部对话上下文。

3. **[OPEN] [#5869](https://github.com/Hmbown/Codewhale/pull/5869) fix(shell): 在 Job 快照中保留 Task Origin 唯一标识**
   * **内容**：解决了后台 Shell 任务在同会话多任务交替时缺少稳定 ID 导致错配（将旧任务错误信息投射到新工具卡片）的问题。

4. **[OPEN] [#5868](https://github.com/Hmbown/Codewhale/pull/5868) feat: 为 OpenCode Go/Zen 服务商补充 `x-opencode-session` 请求头**
   * **内容**：补齐请求头以配合 OpenCode 服务端的 Prompt 缓存优化策略，并提升会话级别的流量归因。

5. **[OPEN] [#5867](https://github.com/Hmbown/Codewhale/pull/5867) feat(config): 新增 `[reasoning_only]` 配置项自定义重试逻辑**
   * **内容**：支持用户配置“纯思考/无返回（Reasoning-only）”模型在未输出回答或工具调用时的重试次数（此前硬编码为 2 次）。

6. **[OPEN] [#5870](https://github.com/Hmbown/Codewhale/pull/5870) Fix: 原子提交拆分——按依赖关系对无关联变更排序**
   * **内容**：增强 Git 工具链能力，实现依据依赖关系拆分 commit 并自动拒绝循环依赖（修复 [#3999](https://github.com/Hmbown/Codewhale/issues/3999)）。

7. **[CLOSED] [#5882](https://github.com/Hmbown/Codewhale/pull/5882) test: 恢复贡献者 CI 基线与进程生命周期检查**
   * **内容**：修复 CI 测试套件中的符号链接与 Windows 兼容性问题，恢复干净的 CI 基线供新 PR 校验。

8. **[OPEN] [#5877](https://github.com/Hmbown/Codewhale/pull/5877) chore(deps): 升级 Rust MCP SDK (`rmcp`) 从 2.2.0 至 3.2.0**
   * **内容**：跟进 Model Context Protocol 生态 Rust SDK 的大版本升级。

9. **[OPEN] [#5876](https://github.com/Hmbown/Codewhale/pull/5876) & [#5881](https://github.com/Hmbown/Codewhale/pull/5881) 基础依赖库升级**
   * **内容**：升级 Rust 核心依赖 `lru` (0.18.3) 与 `tower-http` (0.7.1)，保持网络栈与缓存组件更新。

10. **[OPEN] [#5880](https://github.com/Hmbown/Codewhale/pull/5880) chore(deps): 升级 `jsonschema` 至 0.52.1**
    * **内容**：更新 JSON Schema 校验库，确保 Tool Calling 参数校验的稳定性与规范合规。

---

## 4. 功能需求趋势

从近期社区互动来看，主要需求方向呈现以下趋势：

1. **本地小模型（Ollama/Qwen 等）精细化适配**：社区强烈要求优化针对 7B/14B、32K 窗口等本地模型的 Token 分配策略，避免套用云端大模型的默认预留参数。
2. **终端 TUI 渲染与视觉去噪**：针对工具调用（如 Todo、Shell）产生的历史卡片堆积，社区倾向于“滚动更新/单卡片替代”的整洁渲染模式。
3. **Agent 自进化与记忆增强**：从简单的 `SKILL.md` 静态规则，向结合对话历史的动态模式识别、自动技能构建演进。
4. **编译与部署轻量化**：减少 C/C++ 依赖，向 Pure-Rust 架构靠拢，降低交叉编译至异构环境（如嵌入式或跨平台开发环境）的复杂度。

---

## 5. 开发者关注点

* **上下文窗口计算黑盒**：开发者反映模型路由在缺乏准确能力数据时，盲目占用输出 Budget 会直接卡死本地小模型，要求提供更透明的上下文分配日志或自定义覆盖配置。
* **推理模型（Reasoning Model）的“死循环”重试**：硬编码的思考重试策略在部分模型（如 DeepSeek-R1 系列导出版本）上可能导致 API 额度浪费，自定义 `[reasoning_only]` 配置成为高频诉求。
* **TUI 界面上下文（Context）与转录（Transcript）的解耦**：开发者非常看重“清理终端界面 UI 杂乱卡片”的同时**绝对不影响/丢弃发送给 LLM 的实际历史上下文**。

</details>

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*