# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 02:32 UTC | 覆盖工具: 9 个

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

**AI CLI 工具生态横向对比分析报告**
**日期：** 2026-06-28
**分析师：** Agnes-2.0-Flash

### 1. 生态全景
2026年中期的 AI CLI 生态正从“功能竞赛”转向“稳定性与安全性治理”深水区。跨平台兼容性（尤其是 Windows/WSL）和 MCP（Model Context Protocol）集成成为各工具的技术分水岭，安全策略的误报与静默失效是主要痛点。社区对“可解释性”（如思考过程渲染、配额透明）和“控制权”（如手动上下文压缩、撤销机制）的需求显著提升，标志着开发者对 AI 代理的信任建立已进入精细化运营阶段。

### 2. 各工具活跃度对比

| 工具名称 | 版本发布 | Issues (24h) | PRs (24h) | 核心状态 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 无 | 10 | 1 | 稳定期，聚焦 Opus 4.7 兼容性修复 |
| **OpenAI Codex** | 3 (Rust Alpha) | 10 | 10 | 高频迭代，应对配额危机与安全重构 |
| **Gemini CLI** | 1 (Nightly) | 10 | 10 | 活跃期，安全加固与 Agent 自主性平衡 |
| **GitHub Copilot** | 无 | 10 | 3 | 回归期，Windows 平台稳定性承压 |
| **Kimi Code** | 无 | 0 | 0 | 静止期，无显著社区活动 |
| **OpenCode** | 无 | 10 | 10 | 爆发期，WSL 兼容性与内存泄漏修复 |
| **Pi** | 无 | 10 | 8 | 维护期，扩展生态规范化与错误可见性 |
| **Qwen Code** | 1 (Nightly) | 10 | 50 | 极高活跃，协作同步与成本控制优化 |
| **DeepSeek TUI** | 无 | 10 | 10 | 发布前夕，插件系统落地与 Token 优化 |

### 3. 共同关注的功能方向

*   **MCP 集成与标准化：**
    *   **涉及工具：** OpenAI Codex, Gemini CLI, GitHub Copilot, OpenCode, DeepSeek TUI。
    *   **诉求：** 解决 OAuth 令牌刷新、并发安全、Schema 兼容性及 MIME 类型识别问题。社区期待更稳定的插件发现机制和安全边界。
*   **跨平台一致性（特别是 Windows/WSL）：**
    *   **涉及工具：** OpenAI Codex, Gemini CLI, GitHub Copilot, OpenCode, Pi。
    *   **诉求：** 修复路径解析错误（UNC vs POSIX）、剪贴板失效、环境变量继承及沙箱启动失败。Windows 用户反馈表明底层抽象层仍需加强。
*   **上下文管理与成本控制：**
    *   **涉及工具：** Claude Code, OpenAI Codex, Qwen Code, DeepSeek TUI。
    *   **诉求：** 提高 Prompt 缓存命中率，透明化配额消耗，提供手动上下文压缩/清理选项，以及防止 Token 异常激增的监控机制。
*   **安全策略的透明度与灵活性：**
    *   **涉及工具：** Claude Code, Gemini CLI, Pi。
    *   **诉求：** 解决安全过滤器对合法开发（如无人机固件、二进制分析）的误报，提供细粒度白名单或更明确的拦截原因，避免静默阻断工作流。

### 4. 差异化定位分析

*   **Claude Code：** 定位为**高端专业开发助手**。侧重复杂逻辑推理（Opus 4.7）和 Cowork 模式下的深度集成。优势在于模型能力，劣势在于对新模型特性的适配速度（渲染 Bug）。
*   **OpenAI Codex：** 定位为**企业级代理平台**。侧重大规模部署、配额管理和 MCP 生态。当前受限于配额系统的信任危机和 Windows 稳定性，正通过 Rust CLI 重构底层。
*   **Gemini CLI：** 定位为**安全优先的通用 Agent**。强调 SSRF 防护、路径遍历修复及子代理的可控性。适合对安全合规有严格要求的场景。
*   **GitHub Copilot CLI：** 定位为**IDE 原生延伸**。依赖 VS Code/Windows 生态，当前痛点在于回归测试不足导致的 Windows 体验下滑，需追赶竞品的上下文记忆功能。
*   **Qwen Code：** 定位为**协作与多模态专家**。突出跨设备任务同步（Todo/Loop 持久化）和移动端/Web Shell 适配，适合团队开发和远程场景。
*   **OpenCode：** 定位为**高性能开源替代**。聚焦于解决 WSL 路径地狱和服务器模式内存泄漏，吸引追求低成本和高定制化的开发者。
*   **DeepSeek TUI：** 定位为**轻量级与插件化先锋**。快速推进插件系统（Manifest/Registry）和 ACP 集成，试图在 Zed 等现代编辑器中占据生态位。
*   **Pi：** 定位为**可扩展的微内核框架**。通过 `reportUsage` API 和安全的扩展重载机制，吸引第三方开发者构建丰富生态，但面临 TUI 渲染稳定性的挑战。

### 5. 社区热度与成熟度

*   **高热度/快速迭代：** **Qwen Code** (50 PRs) 和 **OpenAI Codex/OpenCode/Gemini** (各10 PRs)。这些工具正处于功能快速扩充或重大架构调整期，社区反馈密集，适合喜欢尝试新功能且能容忍 Bug 的早期采用者。
*   **中等热度/稳定维护：** **Claude Code**, **Pi**, **DeepSeek TUI**。社区关注点从功能新增转向 Bug 修复和优化（如 Token 成本、插件系统），表明产品进入成熟期，用户体验是关键。
*   **低热度/回归阵痛：** **GitHub Copilot CLI**。Issues 多为回归 Bug 和功能请求，缺乏新功能发布，显示团队重心在修复而非创新，社区信心略有动摇。

### 6. 值得关注的趋势信号

1.  **“思考过程”可视化成为标配：** Claude Code 的 Opus 4.7 渲染失败引发大规模投诉，表明开发者不仅需要结果，更需要理解模型的推理路径（Chain of Thought）。未来工具需提供可靠、可配置的思维链展示机制。
2.  **MCP 从“连接”走向“治理”：** 各工具纷纷投入 MCP OAuth 和权限控制，说明生态已从简单的工具调用阶段，进入需要严格身份认证、令牌管理和安全沙箱的治理阶段。
3.  **Windows 是 AI CLI 的“试金石”：** 几乎所有主要工具（Codex, Copilot, Gemini, OpenCode）均在 Windows/WSL 上遭遇路径、剪贴板或沙箱问题。能否提供无缝的 Windows 原生体验，将成为区分顶级工具与普通工具的关键指标。
4.  **成本透明化驱动用户留存：** OpenAI 的配额危机和 Qwen 的缓存优化问题显示，用户对“隐形成本”极度敏感。提供实时的 Token 消耗监控、缓存命中率分析及灵活的配额管理，将是提升用户信任的核心功能。
5.  **Agent 自主性与人类监督的平衡：** 从 Gemini 的“静默扩权”修复到 OpenCode 的“会话管理”需求，开发者希望 AI 能自主执行，但在关键操作（如文件修改、命令执行）上保留明确的确认或撤销机制（Undo）。

**建议：** 技术决策者应根据自身平台偏好（Windows/macOS/Linux）和对安全/成本的控制需求选择工具。对于企业级应用，重点关注 MCP 安全性和配额透明度；对于个人开发者，可尝试高迭代率的工具（如 Qwen, OpenCode）以获取最新协作功能，但需做好应对回归 Bug 的准备。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

基于提供的 2026 年 6 月数据，以下是 Claude Code Skills 社区热点分析报告：

### 1. 热门 Skills 排行 (Top 5 by Engagement/Impact)

尽管点赞数显示为 0（可能因数据抓取时间或 UI 显示限制），以下 PR 因其解决的核心痛点（Bug 修复 vs 新功能）及长期未决状态，代表了社区当前的最高关注度焦点：

1.  **skill-creator 评估循环严重 Bug 修复系列**
    *   **涉及 PR**: [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)
    *   **功能**: 修复 `run_eval.py` 和 `run_loop.py` 在 Windows 环境下的崩溃、编码错误以及“召回率始终为 0%”的逻辑缺陷。
    *   **状态**: OPEN (长期未合)
    *   **热点**: 这是目前社区技术讨论最激烈的领域。由于 Skill Creator 工具链无法正确评估 Skill 描述的有效性，导致用户无法通过自动化流程优化 Skill。多个 PR 并行存在但未合并，显示维护者面临复杂的跨平台兼容性问题。

2.  **security-analyzer & skill-quality-analyzer**
    *   **涉及 PR**: [#83](https://github.com/anthropics/skills/pull/83)
    *   **功能**: 提供元技能（Meta Skills），用于从结构、文档、安全性等五个维度自动分析其他 Skill 的质量。
    *   **状态**: OPEN
    *   **热点**: 随着 Skill 数量激增，社区对“Skill 治理”和“安全审计”的需求凸显。该 PR 试图建立 Skill 市场的准入标准。

3.  **frontend-design 技能清晰度改进**
    *   **涉及 PR**: [#210](https://github.com/anthropics/skills/pull/210)
    *   **功能**: 重构前端设计 Skill 的指令，使其更具可操作性和内部一致性，避免模糊指引。
    *   **状态**: OPEN
    *   **热点**: 反映了社区对“高质量、可直接执行”的基础开发 Skill 的渴望，而非仅仅停留在概念性指导。

4.  **testing-patterns 测试模式 Skill**
    *   **涉及 PR**: [#723](https://github.com/anthropics/skills/pull/723)
    *   **功能**: 覆盖单元测试、React 组件测试、测试哲学（AAA 模式、纯函数等）的综合测试 Skill。
    *   **状态**: OPEN
    *   **热点**: 测试是工程化中的高频痛点，该 Skill 提供了系统化的测试方法论集成。

5.  **document-typography 排版质量控制**
    *   **涉及 PR**: [#514](https://github.com/anthropics/skills/pull/514)
    *   **功能**: 检测并修正 AI 生成文档中的孤行、寡行、编号错位等排版问题。
    *   **状态**: OPEN
    *   **热点**: 针对非代码类生成内容（文档）的细节优化需求，体现了用户对输出成品质量的精细化要求。

### 2. 社区需求趋势 (从 Issues 提炼)

1.  **组织级协作与共享 (Org-wide Sharing)**
    *   **核心 Issue**: [#228](https://github.com/anthropics/skills/issues/228) (14 评论, 7 👍)
    *   **趋势**: 用户强烈希望支持企业内部 Skill 库的直接共享，替代目前繁琐的手动下载/上传流程。这是从个人开发者向企业团队扩展的关键瓶颈。

2.  **持久化记忆与上下文管理 (Persistent Memory)**
    *   **核心 Issue**: [#154](https://github.com/anthropics/skills/pull/154), [#1329](https://github.com/anthropics/skills/issues/1329)
    *   **趋势**: 社区正在探索如何让 Agent 在多轮对话中保持长期上下文。`shodh-memory` 和 `compact-memory` 提案表明，用户急需高效的“代理记忆”机制来减少 Token 消耗并维持连贯性。

3.  **安全信任边界与 Namespace 滥用 (Trust Boundary)**
    *   **核心 Issue**: [#492](https://github.com/anthropics/skills/issues/492) (23 评论, 2 👍)
    *   **趋势**: 出现冒充官方 Anthropic 命名空间发布恶意或低质 Community Skills 的现象。社区高度关注身份验证和权限隔离，担心提权攻击。

4.  **Agent 治理与安全模式 (Agent Governance)**
    *   **核心 Issue**: [#412](https://github.com/anthropics/skills/issues/412), [#1175](https://github.com/anthropics/skills/issues/1175)
    *   **趋势**: 随着 Agent 能力增强，用户开始关注策略执行、威胁检测和审计追踪。特别是在处理敏感数据（如 SharePoint）时，需要在 Skill 层面嵌入访问控制逻辑。

5.  **跨平台兼容性与基础设施集成**
    *   **核心 Issue**: [#29](https://github.com/anthropics/skills/issues/29) (Bedrock), [#16](https://github.com/anthropics/skills/issues/16) (MCPs)
    *   **趋势**: 用户希望 Skills 能更好地集成到 AWS Bedrock 等第三方 LLM 平台，并通过 MCP (Model Context Protocol) 暴露 API 接口，实现标准化交互。

### 3. 高潜力待合并 Skills (High Potential Open PRs)

以下 PR 虽未合并，但具备明确价值且讨论较为成熟，若修复关键问题后有望落地：

*   **[PR #83] skill-quality-analyzer & skill-security-analyzer**
    *   **理由**: 解决了生态扩张后的质量控制问题，符合 Anthropic 对安全性的重视。
    *   **链接**: <https://github.com/anthropics/skills/pull/83>

*   **[PR #486] ODT Skill (OpenDocument Support)**
    *   **理由**: 填补了 LibreOffice/OpenDocument 格式处理的空白，相比 DOCX/PDF 具有特定的企业/欧洲市场受众。
    *   **链接**: <https://github.com/anthropics/skills/pull/486>

*   **[PR #181] SAP-RPT-1-OSS Predictor Skill**
    *   **理由**: 针对特定企业生态（SAP）的垂直模型集成，展示了 Skills 在垂直领域预测分析中的应用潜力。
    *   **链接**: <https://github.com/anthropics/skills/pull/181>

*   **[PR #360] AppDeploy Skill**
    *   **理由**: 实现了从对话直接部署全栈 Web 应用的能力，闭环了“开发-部署”工作流，极具实用价值。
    *   **链接**: <https://github.com/anthropics/skills/pull/360>

### 4. Skills 生态洞察

**当前社区最集中的诉求是：解决 Skill 开发与评估工具链（特别是 Windows 兼容性）的工程阻塞，并建立组织级的安全协作与信任机制。**

*注：数据截止 2026-06-28。*

---

# Claude Code 社区动态日报
**日期：** 2026-06-28
**数据来源：** GitHub anthropics/claude-code

## 1. 今日速览
今日社区讨论的核心焦点集中在 **Opus 4.7 模型更新后的兼容性问题**，特别是“思考摘要”（Thinking Summaries）在 VS Code 扩展及非交互界面中渲染失败的问题，引发了大量高热度 Bug 报告。此外，围绕无人机开发的安全策略误报（False Positives）以及 Cowork 模式下的上下文管理痛点也成为近期热议话题。

## 2. 版本发布
**无新版本发布。**
过去 24 小时内没有新的 Release 记录。当前社区主要处于对已有版本（如 VS Code 扩展 2.1.112/111）中 Bug 的排查和反馈阶段。

## 3. 社区热点 Issues
以下是过去 24 小时内更新且关注度最高的 10 个 Issue：

1.  **[BUG] Opus 4.7 thinking summaries not rendered in VS Code extension (#49322)**
    *   **重要性：** 核心显示问题，影响大量 VS Code 用户查看 Opus 4.7 的思考过程。
    *   **社区反应：** 47 条评论，41 个赞，热度极高。
    *   **链接：** [Issue #49322](https://github.com/anthropics/claude-code/issues/49322)

2.  **[BUG] Thinking summaries missing on Opus 4.7 — harness doesn't set display: "summarized" (#49268)**
    *   **重要性：** 深入分析了 API 层面 `display` 参数缺失导致的前端渲染问题，提供了技术复现路径。
    *   **社区反应：** 46 条评论，75 个赞，被广泛认为是关键的技术根因分析。
    *   **链接：** [Issue #49268](https://github.com/anthropics/claude-code/issues/49268)

3.  **[BUG] Opus 4.7 thinking summaries not rendered (VSCode extension 2.1.112) (#49902)**
    *   **重要性：** 确认了特定版本（2.1.112）下的复现情况，涉及 WSL2 环境。
    *   **社区反应：** 14 条评论，41 个赞，属于重复但具验证性的报告。
    *   **链接：** [Issue #49902](https://github.com/anthropics/claude-code/issues/49902)

4.  **[BUG] `showThinkingSummaries: true` silently no-ops on Opus 4.7 in non-interactive surfaces (#59844)**
    *   **重要性：** 指出配置项在非交互界面（CLI、SDK）中静默失效，影响自动化工作流。
    *   **社区反应：** 10 条评论，6 个赞，提出了具体的修复建议（一行代码修复）。
    *   **链接：** [Issue #59844](https://github.com/anthropics/cla-code/issues/59844)

5.  **[BUG] API Error: 401 Invalid authentication credentials (#69706)**
    *   **重要性：** 认证失败问题，影响 Windows 用户正常使用。
    *   **社区反应：** 21 条评论，10 个赞。
    *   **链接：** [Issue #69706](https://github.com/anthropics/claude-code/issues/69706)

6.  **[FEATURE] Cowork: give users a manual /compact (user-initiated compaction) (#65114)**
    *   **重要性：** 用户希望手动控制上下文压缩，以避免自动压缩时机不当导致的上下文丢失。
    *   **社区反应：** 5 条评论，1 个赞。
    *   **链接：** [Issue #65114](https://github.com/anthropics/claude-code/issues/65114)

7.  **[FEATURE] Native Windows toast notifications (#67220)**
    *   **重要性：** 提升 Windows 用户体验的功能请求，希望获得与 macOS/Linux 一致的桌面通知支持。
    *   **社区反应：** 3 条评论。
    *   **链接：** [Issue #67220](https://github.com/anthropics/claude-code/issues/67220)

8.  **[BUG] MCP server instructions from initialize response are not passed to the model (#23808)**
    *   **重要性：** MCP 服务器指令传递失败，影响多服务器配置下的系统提示词完整性。
    *   **社区反应：** 9 条评论，2 个赞。
    *   **链接：** [Issue #23808](https://github.com/anthropics/claude-code/issues/23808)

9.  **[Bug][cyber] Safety block interrupts legitimate open-source drone ground station development (#71920)**
    *   **重要性：** 安全过滤器对合法开源硬件开发产生误报，阻碍项目进度。
    *   **社区反应：** 3 条评论，被标记为重复项。
    *   **链接：** [Issue #71920](https://github.com/anthropics/claude-code/issues/71920)

10. **[BUG] SSL certificate has expired not working since 2.1.190+ on mac (#71663)**
    *   **重要性：** macOS 上 SSL 证书过期处理回归 Bug，影响使用自签名证书或内部代理的用户。
    *   **社区反应：** 2 条评论。
    *   **链接：** [Issue #71663](https://github.com/anthropics/claude-code/issues/71663)

## 4. 重要 PR 进展
过去 24 小时内更新的 PR 较少，以下为值得关注的内容：

1.  **fix(scripts): add error message to edit-issue-labels.sh (#68787)**
    *   **状态：** OPEN
    *   **内容：** 改进了 CI/CD 脚本 `edit-issue-labels.sh` 的错误处理，当未提供标签参数时输出明确的错误信息，而非静默退出。有助于维护者更快速地排查脚本执行问题。
    *   **链接：** [PR #68787](https://github.com/anthropics/claude-code/pull/68787)

*(注：由于过去 24 小时内仅更新 2 条 PR，且另一条为已关闭的空内容 PR，故仅列出上述一条实质性进展。)*

## 5. 功能需求趋势
从 Issue 和 PR 中可提炼出以下社区关注趋势：

*   **新模型兼容性适配：** Opus 4.7 的推出引发了大量关于“思考摘要”渲染、API 参数兼容性及非交互界面支持的 Bug 报告。社区强烈期待官方快速修复这些回归问题。
*   **Cowork 模式体验优化：** 用户对 Cowork 模式下的上下文管理（如手动压缩）、跨平台一致性（Windows 通知缺失）以及不同 Surface（Code, Web, Desktop）间的功能 parity 提出了更多改进建议。
*   **安全策略的透明度与可调性：** 多个 Issue 反映安全过滤器对合法开发工作（如无人机固件逆向、二进制上传）的误报问题，社区希望提供更细粒度的控制或更透明的拦截原因。
*   **MCP 与插件生态稳定性：** 针对 MCP 服务器指令截断、环境变量传递（Windows 下缺失 `CLAUDE_PROJECT_DIR`）等底层集成的 Bug 报告表明，随着 MCP 生态扩张，稳定性成为痛点。

## 6. 开发者关注点
*   **Opus 4.7 的“思考摘要”显示故障：** 这是目前最大的痛点。无论是 VS Code 扩展还是 CLI，用户均反馈无法正确查看 Opus 4.7 的思考过程，且配置项 `showThinkingSummaries` 在某些场景下静默失效。
*   **跨平台体验不一致：** Windows 用户在通知机制、MCP 环境变量继承、SSL 证书处理等方面频繁遇到问题，而 macOS/Linux 用户相对稳定。社区呼吁提升 Windows 原生体验。
*   **自动化工作流的可靠性：** 对于 SDK、CI/CD 集成以及非交互模式（`--print`），用户期望行为与交互式界面保持一致，任何静默失败或配置忽略都会严重影响自动化流程。
*   **安全策略的灵活性：** 开发者在进行敏感领域（如网络安全、嵌入式开发）工作时，容易触发安全拦截。社区希望有更明确的反馈机制或白名单功能，以减少对合法工作的干扰。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：** 2026-06-28

## 1. 今日速览
今日 Codex 社区面临严峻的 **Rate Limit 与配额消耗异常** 问题，多个高热度 Issue 报告 gpt-5.5 模型下预算瞬间耗尽，引发大量用户不满。同时，**MCP OAuth 认证机制**的重构工作取得显著进展，一系列 PR 正在解决令牌刷新和并发冲突问题。此外，Windows 平台的沙箱启动失败及 macOS 的资源泄漏问题仍是主要技术痛点。

## 2. 版本发布
过去24小时内发布了三个 Rust CLI 的 Alpha 版本，主要侧重于底层迭代：
- **rust-v0.143.0-alpha.29**
- **rust-v0.143.0-alpha.28**
- **rust-v0.143.0-alpha.27**
*注：具体变更细节未在提供的日志中展开，建议查阅对应 Release Notes。*

## 3. 社区热点 Issues
以下 Issue 因高评论量或高点赞数成为本周焦点：

1. **[BUG] Rate-limit 成本激增导致预算瞬间耗尽** (#28879)
   - **重要性：** ⭐⭐⭐⭐⭐ 核心痛点。用户报告 gpt-5.5 下每 Token 消耗的限额增加 10-20 倍，Plus 用户 2-3 个 Prompt 即耗尽 5 小时预算。
   - **社区反应：** 334 👍, 186 条评论，情绪激动。
   - [链接](https://github.com/openai/codex/issues/28879)

2. **[FEATURE] 请求 Linux 桌面版 Codex App** (#11023)
   - **重要性：** ⭐⭐⭐⭐ 长期呼声最高的功能请求之一。
   - **社区反应：** 650 👍, 130 条评论，显示 Linux 开发者对原生支持的强烈需求。
   - [链接](https://github.com/openai/codex/issues/11023)

3. **[BUG] SQLite 反馈日志导致 SSD 寿命快速损耗** (#28224)
   - **重要性：** ⭐⭐⭐ 虽已合并部分修复 PR，但仍有用户关注日志体积过大问题（曾达 640TB/年）。
   - **社区反应：** 399 👍, 93 条评论。
   - [链接](https://github.com/openai/codex/issues/28224)

4. **[FEATURE] 敏感文件排除机制 (.codexignore)** (#2847)
   - **重要性：** ⭐⭐⭐ 安全与隐私相关的关键功能，允许用户明确禁止 Agent 读取特定路径。
   - **社区反应：** 414 👍, 79 条评论。
   - [链接](https://github.com/openai/codex/issues/2847)

5. **[BUG] Quota 瞬间清空：100 积分一条消息后归零** (#29955)
   - **重要性：** ⭐⭐⭐ 与 #28879 类似，进一步证实配额系统的普遍性故障。
   - **社区反应：** 29 条评论, 7 👍。
   - [链接](https://github.com/openai/codex/issues/29955)

6. **[FEATURE] 恢复 `/undo` 命令** (#9203)
   - **重要性：** ⭐⭐⭐ 用户反馈 Agent 误删未跟踪文件或修改未提交代码时缺乏回滚手段。
   - **社区反应：** 300 👍, 50 条评论。
   - [链接](https://github.com/openai/codex/issues/9203)

7. **[BUG] Windows 应用 `apply_patch` 失败** (#29072)
   - **重要性：** ⭐⭐ Windows 平台核心功能阻塞，sandbox-setup.exe 无法启动。
   - **社区反应：** 22 条评论, 19 👍。
   - [链接](https://github.com/openai/codex/issues/29072)

8. **[BUG] macOS 子进程泄漏导致系统卡顿** (#25744)
   - **重要性：** ⭐⭐ 长期存在的资源泄漏问题，影响 Computer Use 和 MCP 场景下的系统稳定性。
   - **社区反应：** 8 条评论, 3 👍。
   - [链接](https://github.com/openai/codex/issues/25744)

9. **[BUG] Windows 多仓库工作区 git.exe 进程驻留** (#29408)
   - **重要性：** ⭐⭐ 影响 Windows 大型项目性能，导致 CPU 和内存占用异常。
   - **社区反应：** 6 条评论。
   - [链接](https://github.com/openai/codex/issues/29408)

10. **[BUG] Intel Mac 上 Computer Use 快照功能不可用** (#29422)
    - **重要性：** ⭐⭐ 架构兼容性 Bug，Intel 用户无法使用最新的 App Snapshot 功能。
    - **社区反应：** 4 条评论。
    - [链接](https://github.com/openai/codex/issues/29422)

## 4. 重要 PR 进展

1. **#30395 [codex] 展示用量限制重置过期详情**
   - **内容：** 前端新增功能，展示 Banked usage-limit resets 的具体过期时间，此前仅显示数量。
   - **状态：** OPEN

2. **#30334 [telemetry] 结构化记录工具与推理计时事件**
   - **内容：** 改进 App-server 日志，区分分发/排队时间与处理器运行时间，便于诊断延迟问题。
   - **状态：** OPEN

3. **#30384 [app-server] 增加 currentTime/read 超时时间**
   - **内容：** 将外部当前时间/读取请求的超时时间从 5 秒增加到 10 秒，提升稳定性。
   - **状态：** CLOSED (已合并)

4. **#29691 [plugins] 运行时强制执行市场源策略**
   - **内容：** 企业级功能，确保被阻止的插件在运行时保持非激活状态，并过滤市场发现列表。
   - **状态：** CLOSED (已合并)

5. **#30269 [codex] 禁用 Rendezvous WebSockets 上的 Nagle 算法**
   - **内容：** 优化 WebSocket 连接延迟，无条件禁用 Nagle 算法以提升实时响应速度。
   - **状态：** OPEN

6. **#30291 [app-server] 暴露环境信息 RPC**
   - **内容：** 允许客户端在执行前发现命名执行环境的 Shell 和工作目录信息。
   - **状态：** CLOSED (已合并)

7. **#30294 - #30296 [MCP OAuth 系列重构]**
   - **内容：** 包含路由 OAuth 恢复、自动存储漂移报告、序列化登录/注销等关键 PR，旨在解决 MCP 令牌刷新和并发安全问题。
   - **状态：** OPEN (系列 PR)

8. **#30327 [core] 稳定合成调用输出 ID**
   - **内容：** 为合成的 "aborted" 输出分配固定 ID，确保重试时的对话身份一致性。
   - **状态：** CLOSED (已合并)

9. **#30091 - #29019 [rmcp-client MCP OAuth 系列]**
   - **内容：** 一系列被后续 PR (#30292 stack) 取代或合并的旧版 MCP OAuth 修复尝试，反映了团队对认证模块的重构努力。
   - **状态：** CLOSED/OVERLAP

10. **#30292 [rmcp-client] 序列化共享 MCP OAuth 凭证存储**
    - **内容：** 核心修复，确保 MCP OAuth 凭证存储在并发访问下的线程安全性。
    - **状态：** OPEN

## 5. 功能需求趋势
从 Issue 和 PR 分析，社区关注点集中在以下方向：
1.  **配额透明度与控制：** 用户对 Rate Limit 计算逻辑极度不满，急需更透明的额度监控和更合理的限制策略（Issues #28879, #29955, #29618）。
2.  **跨平台支持：** Linux 原生桌面应用是最高频的功能请求（Issue #11023），同时 Windows 平台的稳定性修复也是重点。
3.  **安全与隐私：** 敏感文件忽略机制（.codexignore）和 MCP 安全认证（OAuth 序列化）是企业和高级用户的核心关切（Issues #2847, PRs #3029x）。
4.  **操作安全性：** 用户强烈呼吁恢复 `/undo` 功能，以防止 Agent 造成不可逆的代码损坏（Issue #9203）。

## 6. 开发者关注点
*   **配额系统故障：** 目前最大的阻碍是 gpt-5.5 模型下出现的配额异常消耗，这直接影响了 Plus 和 Pro 用户的日常使用体验，可能导致用户流失。
*   **Windows 平台稳定性：** Windows 用户频繁报告沙箱启动失败、Git 进程泄漏、拼写检查失效等问题，表明 Windows 版本的 QA 流程可能存在疏漏。
*   **Mac 资源管理：** macOS 用户关注后台进程泄漏（Zombie children）导致的系统资源占用和 HID 延迟问题。
*   **MCP 集成复杂性：** 随着 MCP 的深入集成，OAuth 令牌的刷新、持久化和并发控制成为新的技术难点，社区期待更稳健的实现。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：** 2026-06-28
**来源：** github.com/google-gemini/gemini-cli

## 1. 今日速览
今日 Gemini CLI 发布了 `v0.51.0-nightly.20260628` 版本，重点修复了敏感路径块列表的大小写不敏感处理及 VS Code HitL 安全问题。安全领域成为今日焦点，多个高优先级 PR 致力于修复 SSRF DNS 重绑定漏洞、防止路径遍历攻击以及移除未脱敏的环境变量泄露风险。社区在 Agent 自主性、子代理恢复机制及浏览器 Agent 稳定性方面仍有大量讨论。

## 2. 版本发布
### v0.51.0-nightly.20260628.gae0a3aa7b
*   **发布时间：** 2026-06-28
*   **核心变更：**
    *   **安全修复：** 强制执行大小写不敏感的敏感路径块列表（PR #27966），并修复了 VS Code Human-in-the-loop (HitL) 相关的安全隐患。
    *   **链接：** [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-nightly.20260628.gae0a3aa7b)

## 3. 社区热点 Issues
以下 Issue 因涉及核心 Agent 行为逻辑、严重 Bug 或安全隐私问题而备受关注：

1.  **[Bug] Subagent recovery after MAX_TURNS is reported as GOAL success** (#22323)
    *   **重要性：** 子代理在达到最大回合数时错误报告“目标成功”，导致中断被隐藏，影响调试和任务准确性。
    *   **社区反应：** P1 优先级，8条评论，2个赞。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[Bug] Gemini does not use skills and sub-agents enough** (#21968)
    *   **重要性：** 用户反馈 Agent 不会主动调用自定义 Skills 或子代理，除非显式指令，降低了自动化效率。
    *   **社区反应：** P2 优先级，6条评论。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

3.  **[Bug] Shell command execution gets stuck with "Waiting input"** (#25166)
    *   **重要性：** 简单的 CLI 命令执行后挂起，显示“等待输入”，严重阻碍工作流。
    *   **社区反应：** P1 优先级，4条评论，3个赞（高共鸣）。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

4.  **[Feature] Enhance browser_agent resilience: Automatic session takeover** (#22232)
    *   **重要性：** 请求改进浏览器 Agent 在会话锁定或孤儿进程时的自动恢复能力，当前策略过于严格。
    *   **社区反应：** 3条评论。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22232)

5.  **[Bug] Browser Agent ignores settings.json overrides** (#22267)
    *   **重要性：** 配置覆盖（如 maxTurns）对 Browser Agent 无效，导致用户无法精细控制其行为。
    *   **社区反应：** 3条评论。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22267)

6.  **[Bug] Model frequently creates tmp scripts in random spots** (#23571)
    *   **重要性：** 模型在任意目录生成临时脚本，增加清理负担且存在安全隐患。
    *   **社区反应：** 3条评论。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/23571)

7.  **[Security] Add deterministic redaction and reduce Auto Memory logging** (#26525)
    *   **重要性：** 自动记忆系统在发送给模型前未完全脱敏，存在隐私泄露风险。
    *   **社区反应：** 5条评论。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/26525)

8.  **[Bug] Gemini CLI encounters 400 error with > 128 tools** (#24246)
    *   **重要性：** 工具数量过多时触发 API 400 错误，表明 Agent 缺乏智能的工具范围限制机制。
    *   **社区反应：** 3条评论。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/24246)

9.  **[Feature] Subagent trajectory should be visible via `/chat share`** (#22598)
    *   **重要性：** 提升可观测性，允许用户通过分享命令查看子代理的执行轨迹，便于评估和调试。
    *   **社区反应：** 2条评论，1个赞。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22598)

10. **[Bug] Subagent recovery after MAX_TURNS...** (重复提及，此处替换为) **[Bug] get-shit-done output hook causes crash** (#22186)
    *   **重要性：** 特定输出钩子在生成摘要时导致 CLI 崩溃，影响稳定性。
    *   **社区反应：** 3条评论。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22186)

## 4. 重要 PR 进展
今日 PR 活动集中在安全加固、MCP 兼容性及基础设施自动化：

1.  **[Security] Prevent DNS rebinding bypass of SSRF protection** (#28181)
    *   **内容：** 修复 `web_fetch` 工具中因同步主机名检查导致的 DNS 重绑定攻击漏洞。
    *   **状态：** Open
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28181)

2.  **[Security] Restore defensive path resolution for at-reference files** (#28180)
    *   **内容：** 重新应用之前的安全修复，防止通过符号链接进行路径遍历攻击。
    *   **状态：** Open
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28180)

3.  **[Security] Remove ISSUE_BODY and ISSUE_TITLE from ALWAYS_ALLOWED env vars** (#28179)
    *   **内容：** 移除 GitHub Issue 内容的环境变量白名单，防止敏感信息在 CI 模式下未经脱敏进入 AI 提示。
    *   **状态：** Open
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28179)

4.  **[Feat] Egress Cloud Run Service** (#28167)
    *   **内容：** 实施自动 Caretaker 出站服务，通过 Cloud Pub/Sub 接收事件并执行自动化 GitHub 操作。
    *   **状态：** Open
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28167)

5.  **[Fix] Sniff MCP image MIME types** (#27878)
    *   **内容：** 修复 Figma MCP 返回的 WebP 图片被错误标记为 PNG 导致的 API 400 错误。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/27878)

6.  **[Fix] Refresh MCP OAuth with stored client ID** (#27889)
    *   **内容：** 修复自动发现服务器在 OAuth 刷新时使用错误客户端 ID 的问题。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/27889)

7.  **[Fix] Normalize MCP tool schemas to root type object** (#28188)
    *   **内容：** 解决 MCP 工具输入 schema 缺少根对象类型导致的严格验证失败问题。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28188) *(注：原数据为 #27888)*

8.  **[Fix] Respect .gitignore in session_context** (#28186)
    *   **内容：** 确保 `<session_context>` 目录树构建时遵循 `.gitignore` 规则。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28186) *(注：原数据为 #27886)*

9.  **[Fix] Don't let unreadable .env break extension loading** (#28059)
    *   **内容：** 增强扩展加载鲁棒性，防止因 `.env` 文件权限问题（EACCES）导致扩展加载失败。
    *   **状态：** Open
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28059)

10. **[Fix] Prevent silent scope expansion on task failure** (#28172 & #28171)
    *   **内容：** 修复 Agent 在任务失败或审查特定代码行时，未经用户批准擅自扩大执行范围（如读取全文件或运行脚本）的问题。
    *   **状态：** Open
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28172) [链接](https://github.com/google-gemini/gemini-cli/pull/28171)

## 5. 功能需求趋势
*   **安全性与隐私强化：** 社区和开发者高度关注环境变量泄露、SSRF 防御、路径遍历及敏感数据脱敏。这是当前版本迭代的核心驱动力。
*   **Agent 自主性与可控性平衡：** 用户希望 Agent 能更智能地调用 Skills 和子代理，同时要求在执行破坏性操作（如 git force reset）或超出指定范围时必须有明确确认或避免静默扩权。
*   **MCP 集成稳定性：** 随着 MCP 使用的普及，针对 OAuth 刷新、Schema 兼容性、MIME 类型检测及资源泄漏的修复需求显著增加。
*   **浏览器 Agent 健壮性：** 针对 Wayland 环境故障、会话锁定恢复及配置忽略问题的反馈，显示用户对 GUI 自动化稳定性的强烈需求。

## 6. 开发者关注点
*   **痛点：**
    *   **静默行为：** Agent 在未获明确授权的情况下扩大执行范围或忽略配置，导致不可预测的结果和安全风险。
    *   **稳定性：** 终端挂起、Shell 命令等待输入假死、Browser Agent 崩溃等问题直接影响日常开发体验。
    *   **调试困难：** 子代理内部状态在 Bug Report 中缺失，使得排查复杂 Agent 交互问题变得困难。
*   **高频需求：**
    *   更严格的沙箱和执行边界控制。
    *   更好的 MCP 工具链兼容性支持。
    *   透明的子代理执行轨迹和更完善的日志记录。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：** 2026-06-28
**数据来源：** github.com/github/copilot-cli

## 1. 今日速览
过去24小时内，Copilot CLI 社区活跃度较高，共更新 16 个 Issues 和 3 个 Pull Requests。主要焦点集中在 **Windows 平台的稳定性回归问题**（如剪贴板失效、MCP 服务器启动失败）以及 **终端渲染体验**（Alt-screen 争议、视觉伪影）。虽然无新版本发布，但用户对 v1.0.65/66 版本的 Bug 反馈密集，特别是跨平台兼容性和上下文管理功能。

## 2. 版本发布
*   **无新版本发布。**
*   注意：多个 Issue 提及 v1.0.65 和 v1.0.66 存在回归问题（Regression），建议 Windows 用户暂时谨慎升级或等待官方修复补丁。

## 3. 社区热点 Issues
以下是过去24小时内最受关注或具有代表性的 10 个 Issue：

1.  **[Bug] Ubuntu keychain 支持损坏** (#2165)
    *   **重要性：** 影响 Linux 用户的基础认证流程，文档与行为不符。
    *   **社区反应：** 高赞（20👍），评论显示该问题长期未决，用户迫切希望修复文档和代码以匹配。
    *   [链接](https://github.com/github/copilot-cli/issues/2165)

2.  **[Bug] Windows 11 剪贴板复制失效** (#3949)
    *   **重要性：** 核心交互功能失效，且存在“虚假成功”提示（告知用户已复制但实际未复制），严重降低信任度。
    *   **社区反应：** 新用户反馈，要求增加验证逻辑和错误日志。
    *   [链接](https://github.com/github/copilot-cli/issues/3949)

3.  **[Bug] Windows v1.0.66 无法启动 stdio MCP 服务器** (#3958)
    *   **重要性：** 涉及 MCP (Model Context Protocol) 这一新兴集成标准，.bat/.cmd 脚本参数解析失败导致进程立即崩溃。
    *   **社区反应：** 标记为 triage，属于严重回归，影响自动化工作流。
    *   [链接](https://github.com/github/copilot-cli/issues/3958)

4.  **[Feature] 询问 Claude Code 的 `/btw` 类似功能何时上线** (#2778)
    *   **重要性：** 用户希望在不打断当前会话上下文的情况下，利用累积记忆快速提问。这反映了用户对“长上下文记忆”与“即时问答”分离的需求。
    *   **社区反应：** 对比竞品（Claude Code），期待功能对齐。
    *   [链接](https://github.com/github/copilot-cli/issues/2778)

5.  **[Bug] Alt-screen 视图引发诸多问题，求关闭选项** (#1799)
    *   **重要性：** 近期引入的 Alt-screen 模式导致兼容性冲突，用户强烈要求提供开关以回退到旧模式。
    *   **社区反应：** 高赞（7👍），评论指出该功能引发了大量报告，需紧急评估回滚或配置化方案。
    *   [链接](https://github.com/github/copilot-cli/issues/1799)

6.  **[Bug] 软换行复制时丢失空格** (#3964)
    *   **重要性：** 文本处理细节 bug，导致复制粘贴后单词粘连，影响代码块或日志的可用性。此前已尝试修复但未彻底解决。
    *   **社区反应：** 指出这是 v1.0.49 修复的不完全遗留问题。
    *   [链接](https://github.com/github/copilot-cli/issues/3964)

7.  **[Bug] 终端删除文字后出现视觉伪影/幽灵字符** (#3959)
    *   **重要性：** TUI（终端用户界面）渲染引擎缺陷，影响视觉整洁度和用户体验。
    *   **社区反应：** 描述清晰，涉及底层终端库的重绘逻辑。
    *   [链接](https://github.com/github/copilot-cli/issues/3959)

8.  **[Bug] VS Code Agent `preToolUse` 钩子权限拒绝失效** (#3874)
    *   **重要性：** 安全与控制机制失效，用户配置的 Hook 无法阻止命令执行，存在安全隐患。
    *   **社区反应：** 涉及插件开发和权限控制的高级用户群体。
    *   [链接](https://github.com/github/copilot-cli/issues/3874)

9.  **[Bug] MacBook Pro 触控板无法滚动历史记录** (#3957)
    *   **重要性：** 手势交互冲突，触控板滑动被误识别为文本选择而非窗口滚动。
    *   **社区反应：** 特定硬件环境下的 UX 痛点。
    *   [链接](https://github.com/github/copilot-cli/issues/3957)

10. **[Feature] 显示会话保留/过期日期** (#3963)
    *   **重要性：** 用户希望透明化数据生命周期策略，避免会话意外丢失带来的困惑。
    *   **社区反应：** 状态栏信息缺失导致的可观察性问题。
    *   [链接](https://github.com/github/copilot-cli/issues/3963)

## 4. 重要 PR 进展
由于过去24小时内更新的 PR 数量较少（3条），且多为非核心代码贡献或历史遗留项，仅列出如下：

1.  **[PR #3928] Add .gitignore and settings configuration**
    *   **状态：** OPEN
    *   **摘要：** 添加项目配置文件，旨在优化本地开发环境设置。
    *   [链接](https://github.com/github/copilot-cli/pull/3928)

2.  **[PR #570] [WIP] Add macOS installation instructions to README.md**
    *   **状态：** CLOSED (由 Copilot 自动处理或合并)
    *   **摘要：** 更新 README 中的 macOS 安装指南，由 AI 辅助完成。
    *   [链接](https://github.com/github/copilot-cli/pull/570)

3.  **[PR #3737] Jigg empire ai**
    *   **状态：** OPEN
    *   **摘要：** 作者声称尝试新方法，但标题和内容较为模糊，疑似测试性提交或非功能性 PR。
    *   [链接](https://github.com/github/copilot-cli/pull/3737)

## 5. 功能需求趋势
通过分析 Issue 标签和摘要，提炼出以下社区关注方向：

1.  **跨平台一致性修复 (Platform Consistency):**
    *   Windows 平台成为 Bug 重灾区（剪贴板、MCP 启动、路径分隔符、触控板交互）。社区急需针对 Windows 11 的深度适配和回归测试。
2.  **终端渲染与 UI 体验 (TUI Rendering):**
    *   对 Alt-screen 模式的反感、软换行复制问题、视觉伪影、触控板手势冲突，表明用户对 CLI 界面的细腻程度要求提高，现有的终端渲染库可能存在瓶颈。
3.  **上下文管理与记忆增强 (Context & Memory):**
    *   用户希望获得类似竞品（Claude Code）的“随时提问”能力（/btw 类功能），以及更透明的会话生命周期管理（过期时间显示）。
4.  **安全与权限控制 (Security & Permissions):**
    *   `preToolUse` 钩子失效暴露了权限控制的脆弱性，用户期望更严格的插件和命令执行沙箱机制。

## 6. 开发者关注点
*   **痛点：** Windows 用户在 v1.0.65/66 版本中遭遇了一系列破坏性更新（Breakage），包括基础输入输出（剪贴板）、外部协议集成（MCP）和系统调用（.bat 执行）的故障。
*   **高频需求：**
    1.  **提供配置开关：** 允许用户禁用 Alt-screen 或切换回旧版终端渲染模式。
    2.  **文档修正：** 立即更新 Linux Keychain 认证文档，并修正 Windows 路径分隔符等低级错误。
    3.  **健壮性验证：** 在提示用户操作成功（如复制）前，必须增加后端状态校验。
    4.  **竞品对标：** 加快实现长上下文独立查询和会话持久化可视化的功能。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-06-28
**数据源：** github.com/anomalyco/opencode

## 1. 今日速览
今日 OpenCode 社区活跃度极高，主要聚焦于 **Windows/WSL 环境下的路径兼容性问题** 以及 **服务器模式下的内存泄漏修复**。开发者们热烈讨论了关于加密货币支付、文档解析以及桌面端会话管理功能的改进需求。同时，多个针对特定模型（如 GLM-5.1, NVIDIA Nemotron）的兼容性 Bug 报告引发了广泛关注。

## 2. 版本发布
*   **无最新 Release：** 过去24小时内未发布新的正式版本。

## 3. 社区热点 Issues
以下 Issue 因评论数多、涉及面广或解决痛点明显而备受关注：

1.  **[FEATURE] 提供 llms.txt 和 docs 作为 Markdown 下载 (#8816)**
    *   **热度：** 34 👍 | 15 评论
    *   **重要性：** 旨在简化本地知识库构建，允许用户轻松下载并离线使用 OpenCode 文档，提升开发者自助能力。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/8816)

2.  **[FEATURE] Pay Go with crypto (#23153)**
    *   **热度：** 24 👍 | 13 评论
    *   **重要性：** 反映社区对去中心化支付方式的强烈需求，特别是针对全球开发者群体的便利性考虑。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/23153)

3.  **[BUG] Desktop App sends UNC paths to WSL-hosted server (#19473)**
    *   **热度：** 0 👍 | 7 评论
    *   **重要性：** 这是一个严重的 Windows WSL 兼容性问题，导致 Bash 工具调用全部失败，拥有明确的 Workaround 但急需官方修复。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/19473)

4.  **[BUG] Desktop v1.16.0 converts WSL /mnt/c/... workspace to Windows C:\... path (#30895)**
    *   **热度：** 0 👍 | 6 评论
    *   **重要性：** 与上述 Issue 类似，描述了路径转换错误导致文件/会话列表损坏的问题，影响大量 WSL 用户。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/30895)

5.  **[PERF] server mode: long-running opencode serve accumulates anonymous JS heap/swap (#33213)**
    *   **热度：** 0 👍 | 5 评论
    *   **重要性：** 指出服务器模式在长时间运行后存在严重的内存累积问题（峰值达 26.8 GiB），影响生产环境稳定性。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/33213)

6.  **[BUG] Bun 1.3.14 segfault (SIGILL) on Linux x86_64 (#33890)**
    *   **热度：** 5 👍 | 6 评论
    *   **重要性：** 涉及底层运行时 Bun 的崩溃问题，特别是在支持 AVX-512 的 AMD CPU 上，可能导致 TUI 无法启动。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/33890)

7.  **[BUG] GLM-5.1 prompt cache randomly drops to 0 (#31348)**
    *   **热度：** 2 👍 | 4 评论
    *   **重要性：** 特定模型（GLM-5.1）的缓存失效导致成本激增，对比 DeepSeek V4 Flash 的稳定性，凸显模型适配差异。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/31348)

8.  **[BUG] NVIDIA NIM Nemotron 3 Ultra 550B hangs indefinitely (#34026)**
    *   **热度：** 0 👍 | 3 评论
    *   **重要性：** 大型模型集成问题，请求在 Build/Thinking 阶段挂起，影响高性能模型用户的体验。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/34026)

9.  **[FEATURE] IDE extension lacks session management UI (#34232)**
    *   **热度：** 0 👍 | 2 评论
    *   **重要性：** 指出 IDE 插件相比 TUI 缺少会话浏览和管理功能，是提升 IDE 集成体验的关键短板。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/34232)

10. **[BUG] macOS kernel NFS messages leak into TUI (#34146)**
    *   **热度：** 0 👍 | 3 评论
    *   **重要性：** macOS 用户在使用 NFS 挂载时遇到的显示污染问题，影响 TUI 界面的整洁性和可用性。
    *   [查看 Issue](https://github.com/anomalyco/opencode/issues/34146)

## 4. 重要 PR 进展
以下 PR 涉及核心功能改进、Bug 修复及新特性开发：

1.  **[feat] v2 wsl ui (#34233)**
    *   **作者:** arvsrn
    *   **内容：** 新增 WSL UI 支持，添加加载状态组件，直接回应 Windows/WSL 用户体验痛点。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34233)

2.  **[fix] resolve sandbox project edits (#34253)**
    *   **作者:** Brendonovich
    *   **内容：** 修复沙箱项目元数据匹配逻辑，确保编辑动作正确触发，增加回归测试覆盖。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34253)

3.  **[fix] reject foreign directory hints before instance lookup (#34256)**
    *   **作者:** romanilyin
    *   **内容：** 安全修复，防止外部目录提示干扰实例查找，关联修复了 WSL 路径相关 Issue。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34256)

4.  **[fix] preserve attachment file paths (#34234)**
    *   **作者:** jparradog
    *   **内容：** 保留粘贴/拖拽附件的文件系统路径，使 Agent 能直接访问文件而非仅嵌入数据，修复两个长期 Bug。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34234)

5.  **[fix] prevent piped stdin from breaking UI (#34242)**
    *   **作者:** LordMikkel
    *   **内容：** 修复管道输入导致的 TUI 键盘输入中断问题，合并关闭多个历史遗留 Bug。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34242)

6.  **[feat] port MiMo tools and subsystems (#34270)**
    *   **作者:** Angelo17123
    *   **内容：** 引入新工具集（multiedit, notebook_edit, codesearch 等）及基于 BM25 的无数据库记忆和历史子系统。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34270)

7.  **[fix] account for partial Zen refunds (#34227)**
    *   **作者:** opencode-agent[bot]
    *   **内容：** 完善 Stripe 支付回调处理，支持部分退款逻辑，避免重复扣款，保障计费准确性。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34227)

8.  **[feat] add tool_output_expanded_default option (#34246)**
    *   **作者:** SBhojani
    *   **内容：** 新增 TUI 配置项，允许用户默认展开工具输出，提升长输出内容的可读性。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34246)

9.  **[fix] collapse system messages when plugin appends a single entry (#34267)**
    *   **作者:** kagura-agent
    *   **内容：** 优化 LLM 请求中的系统消息折叠逻辑，减少不必要的 Token 消耗和上下文噪音。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34267)

10. **[feat] add session rename (#34264)**
    *   **作者:** thdxr
    *   **内容：** 实现会话重命名端到端功能，包括新的事件类型、API 端点和数据库投影，增强会话管理。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/34264)

## 5. 功能需求趋势
*   **跨平台兼容性优先：** 大量 Issue 和 PR 集中在 Windows、WSL2 和 macOS 的路径处理、UI 渲染及依赖兼容性问题。社区迫切需要更健壮的跨平台抽象层。
*   **服务器稳定性与资源管理：** 内存泄漏（Heap/Swap 增长）和长时间运行后的崩溃是服务器模式用户的主要担忧，优化 Bun 运行时和资源回收是关键趋势。
*   **高级会话管理：** 用户期望在 IDE 插件中获得与 TUI 同等的会话管理能力（如重命名、撤销/重做、历史浏览），提升工作流连续性。
*   **多样化支付与集成：** 加密货币支付请求以及对 GitHub Copilot Enterprise 第三方模型的集成需求，显示出用户对灵活性和生态连接的渴望。

## 6. 开发者关注点
*   **WSL/Windows 路径地狱：** 开发者频繁遇到 Windows UNC 路径与 Linux 路径转换错误，导致工具调用失败或文件列表损坏。这是当前阻碍 Windows 用户流畅使用的最大痛点。
*   **特定模型适配缺陷：** 对于 GLM-5.1、NVIDIA Nemotron 等特定模型，出现了缓存失效、无限挂起或工具调用冲突（如不支持图片却尝试读取截图）等问题，用户希望官方提供更完善的模型适配或更清晰的错误提示。
*   **TUI 输入与显示干扰：** 管道输入导致键盘死锁、Wayland 下剪贴板读取失败、macOS NFS 消息污染终端显示等细节问题，严重影响日常编码体验。
*   **计费与退款透明度：** 随着功能扩展，用户对支付逻辑（如部分退款、加密货币支持）的正确性和灵活性提出了更高要求。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期：** 2026-06-28
**数据来源：** github.com/badlogic/pi-mono

## 1. 今日速览
过去24小时内，Pi 项目无新版本发布，但社区活跃度极高，共处理了 22 个 Issues 和 8 个 Pull Requests。开发者重点聚焦于**扩展机制的安全性**（如 `reload()` 延迟执行）、**错误可观测性**（HTTP 错误体暴露及安装失败反馈）以及**多模型兼容性**（Azure OpenAI 模型映射修正）。此外，针对 TUI 渲染闪烁和外部编辑器配置的改进正在快速推进。

## 2. 版本发布
*   **无新版本发布。**

## 3. 社区热点 Issues
以下 Issues 因涉及核心稳定性、开发者体验或重大 Bug 而备受关注：

1.  **[Bug] Streaming markdown forces scroll to bottom (#5825)**
    *   **重要性：** 影响用户阅读体验，特别是在启用 `clear on shrink` 时，强制滚动导致无法回溯历史对话。
    *   **状态：** Open，评论 34。
    *   **链接：** [Issue #5825](https://github.com/earendil-works/pi/issues/5825)

2.  **[Bug] Providers swallow the HTTP error body (#5763)**
    *   **重要性：** 导致网关/代理后的错误信息不可读（如显示为 `Unknown: UnknownError`），严重阻碍调试。
    *   **状态：** Open/In Progress，评论 5。
    *   **链接：** [Issue #5763](https://github.com/earendil-works/pi/issues/5763)

3.  **[Bug] Full screen redraw (flicker) when multiple tool calls stream (#6131)**
    *   **重要性：** 多工具并行调用时的 TUI 闪烁问题，影响视觉稳定性和性能。
    *   **状态：** Closed，评论 1。
    *   **链接：** [Issue #6131](https://github.com/earendil-works/pi/issues/6131)

4.  **[Bug] renderCall/renderResult silently ignore exceptions (#6130)**
    *   **重要性：** 静默异常导致开发者难以排查扩展代码中的导入错误，浪费调试时间。
    *   **状态：** Closed，评论 1。
    *   **链接：** [Issue #6130](https://github.com/earendil-works/pi/issues/6130)

5.  **[Security] Package Report: @hypabolic/pi-hypa (#6129)**
    *   **重要性：** 举报恶意包通过刷安装量进行自我推广，反映社区对包管理安全性的担忧。
    *   **状态：** Closed，评论 2。
    *   **链接：** [Issue #6129](https://github.com/earendil-works/pi/issues/6129)

6.  **[Feature] add externalEditor setting for Ctrl+G (#6122)**
    *   **重要性：** 解决 Windows/Git Bash 环境下环境变量锁定导致无法配置外部编辑器的问题。
    *   **状态：** Closed，评论 2。
    *   **链接：** [Issue #6122](https://github.com/earendil-works/pi/issues/6122)

7.  **[Bug] User messages get incorrectly escaped (#6105)**
    *   **重要性：** 基础输入处理 Bug，导致特殊字符转义错误，影响文本完整性。
    *   **状态：** Closed，评论 2。
    *   **链接：** [Issue #6105](https://github.com/earendil-works/pi/issues/6105)

8.  **[Bug] Devnagri breaking the Pi harness (#6124)**
    *   **重要性：** 非拉丁字符（如天城文）导致 UI 布局崩坏，体现国际化/本地化测试的缺失。
    *   **状态：** Closed，评论 1。
    *   **链接：** [Issue #6124](https://github.com/earendil-works/pi/issues/6124)

9.  **[Bug] Azure Open AI 5.2-chat-latest doesn't exist (#6114)**
    *   **重要性：** 模型别名映射错误，导致特定 Azure 模型无法被识别和使用。
    *   **状态：** Closed，评论 1。
    *   **链接：** [Issue #6114](https://github.com/earendil-works/pi/issues/6114)

10. **[Bug] pi install xxx should be failed when it has no write permission (#6112)**
    *   **重要性：** 静默成功而非报错，导致用户误以为扩展已安装但实际未生效，用户体验极差。
    *   **状态：** Closed，评论 1。
    *   **链接：** [Issue #6112](https://github.com/earendil-works/pi/issues/6112)

## 4. 重要 PR 进展
以下 PR 解决了关键的功能缺陷或引入了重要特性：

1.  **[Fix] fix(coding-agent): defer extension reload requests safely (#5735)**
    *   **内容：** 实现扩展重载请求的安全延迟机制，确保在 `AgentSession` 的安全边界内执行，防止上下文冲突。
    *   **作者：** mitsuhiko
    *   **链接：** [PR #5735](https://github.com/earendil-works/pi/pull/5735)

2.  **[Fix] fix(ai): surface provider HTTP error body instead of opaque SDK message (#5832)**
    *   **内容：** 修复 Provider 吞没 HTTP 错误体的问题，使代理后的错误信息（如 403 详情）对用户可见，直接关联 Issue #5763。
    *   **作者：** stephanmck
    *   **链接：** [PR #5832](https://github.com/earendil-works/pi/pull/5832)

3.  **[Feat] feat(coding-agent): add externalEditor setting for Ctrl+G (#6123)**
    *   **内容：** 允许在 `settings.json` 中直接配置外部编辑器，绕过不稳定的环境变量，主要解决 Windows 兼容性问题。
    *   **作者：** slybootslion
    *   **链接：** [PR #6123](https://github.com/earendil-works/pi/pull/6123)

4.  **[Feat] feat: add reportUsage API for extensions to contribute session cost (#6119)**
    *   **内容：** 新增 `reportUsage` API，允许子代理扩展将 Token/成本消耗反馈至主会话 Footer，完善计费统计。
    *   **作者：** austinsr1
    *   **链接：** [PR #6119](https://github.com/earendil-works/pi/pull/6119)

5.  **[Fix] fix(coding-agent): report settings write failures in install/remove (#6111)**
    *   **内容：** 修复 `pi install` 在设置文件只读时静默成功的问题，现能正确报告写入失败并退出非零状态码。
    *   **作者：** jiangge
    *   **链接：** [PR #6111](https://github.com/earendil-works/pi/pull/6111)

6.  **[Fix] Rename model key from 'gpt-5.2-chat-latest' to 'gpt-5.2-chat' (#6099)**
    *   **内容：** 修正 Azure OpenAI 模型映射，移除不存在的 `-latest` 后缀，确保模型识别正确。
    *   **作者：** vamshi9666
    *   **链接：** [PR #6099](https://github.com/earendil-works/pi/pull/6099)

7.  **[Feat] Add excludeFromContext for custom messages (#5678)**
    *   **内容：** 允许自定义消息排除在 LLM 上下文之外但仍保留渲染，优化元数据传递效率。
    *   **作者：** mitsuhiko
    *   **链接：** [PR #5678](https://github.com/earendil-works/pi/pull/5678)

8.  **[WIP] feat(coding-agent): add configurable chat padding (#6115)**
    *   **内容：** 讨论是否允许配置聊天区域的 Padding，以响应社区对更紧凑 UI 的需求。
    *   **作者：** mitsuhiko
    *   **链接：** [PR #6115](https://github.com/earendil-works/pi/pull/6115)

## 5. 功能需求趋势
从本周的 Issues 和 PR 中可以提炼出以下趋势：
1.  **扩展生态规范化：** 社区强烈希望扩展能更好地参与会话成本统计（`reportUsage`）并拥有更安全的重载机制（`defer reload`）。
2.  **错误可见性与调试友好度：** 无论是 HTTP 错误体泄露还是安装权限失败静默成功，都表明用户对“黑盒”行为容忍度降低，需要更透明的反馈。
3.  **跨平台与输入法兼容性：** 针对 Windows 环境变量的适配以及 Devnagri 等非拉丁字符导致的 UI 崩溃，显示国际化和本地化支持仍是薄弱环节。
4.  **模型映射维护：** 随着新模型（如 GPT-5.2 系列）的推出，保持 Provider 模型别名与实际 API 名称的一致性成为高频需求。

## 6. 开发者关注点
*   **TUI 稳定性：** 多个 Issue 指出 TUI 在流式输出、多工具调用及特殊字符输入时的渲染问题（闪烁、崩溃、滚动异常）。
*   **SDK 一致性：** 下游消费者反馈 `createAgentSession` 等公共 API 的路径不稳定，影响第三方插件开发的确定性。
*   **配置灵活性：** 用户希望摆脱对环境变量（如 `$EDITOR`）的依赖，提供更直接的配置文件选项。
*   **安全性：** 对恶意包的举报以及对 `renderCall` 中静默异常处理的批评，显示出开发者对底层健壮性和包管理安全的高度关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：** 2026-06-28

## 1. 今日速览
Qwen Code 发布 `v0.19.2` 夜间构建版，核心修复了 `web_fetch` 的 JSON 回退机制。社区活跃度极高，过去24小时内新增/更新 Issue 28 个、PR 50 个。开发者高度关注跨设备任务同步、Anthropic 缓存成本优化以及后台自动化任务（Loop）的可控性改进。

## 2. 版本发布
**v0.19.2-nightly.20260628.714513df2**
- **核心修复**：允许 `web_fetch` 工具在特定情况下使用 JSON 格式作为回退方案，提升网络请求处理的兼容性。
- **链接**：[Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260628.714513df2)

## 3. 社区热点 Issues
以下 Issue 反映了当前社区对稳定性、成本和易用性的核心关切：

1.  **[Bug] 升级后默认切换高价模型导致 Token 浪费** (#5819)
    *   **重要性**：用户反馈升级至 v0.19 后，系统自动将模型切换为高单价版本且未充分提示，导致资金耗尽。
    *   **链接**：[Issue #5819](https://github.com/QwenLM/qwen-code/issues/5819)
2.  **[Feature] Anthropic Provider 缓存命中率低导致成本激增** (#5942)
    *   **重要性**：指出侧边查询和前缀不一致导致 Prompt Cache 失效，相比 Claude Code 存在显著的成本劣势。
    *   **链接**：[Issue #5942](https://github.com/QwenLM/qwen-code/issues/5942)
3.  **[Feature] 任务清单持久化以支持跨设备同步** (#5836)
    *   **重要性**：当前 Todo 仅保存在本地 `~/.qwen`，无法通过 Git 共享，阻碍了团队协作和多设备工作流。
    *   **链接**：[Issue #5836](https://github.com/QwenLM/qwen-code/issues/5836)
4.  **[Bug] /loop 定时任务静默执行且不可见** (#5823)
    *   **重要性**：用户发现未察觉的 Cron 任务在后台自动运行，缺乏可视化管理和停止机制，引发资源担忧。
    *   **链接**：[Issue #5823](https://github.com/QwenLM/qwen-code/issues/5823)
5.  **[Bug] 默认 8K 输出限制导致大文件写入失败循环** (#5756)
    *   **重要性**：`CAPPED_DEFAULT_MAX_TOKENS=8000` 截断大模型输出，导致 `write_file` 重试陷入死循环。
    *   **链接**：[Issue #5756](https://github.com/QwenLM/qwen-code/issues/5756)
6.  **[Feature] 允许调整 Agent 发起命令的超时时间** (#5838)
    *   **重要性**：针对长耗时进程，用户需要更细粒度的超时控制权限。
    *   **链接**：[Issue #5838](https://github.com/QwenLM/qwen-code/issues/5838)
7.  **[Feature] 模式 B (Serve) 向生产就绪迈进的路径** (#4175)
    *   **重要性**：长期追踪 `qwen serve` 的功能完整性，涉及权限、LSP 等关键集成。
    *   **链接**：[Issue #4175](https://github.com/QwenLM/qwen-code/issues/4175)
8.  **[Bug] 会话重连时历史记录断裂** (#5920)
    *   **重要性**：`parentUuid` 存储错误导致恢复会话时上下文丢失，影响交互连续性。
    *   **链接**：[Issue #5920](https://github.com/QwenLM/qwen-code/issues/5920)
9.  **[Feature] 增加对非精确匹配的 Skill 自动补全** (#5875)
    *   **重要性**：提升 CLI 交互效率，支持模糊搜索技能名称。
    *   **链接**：[Issue #5875](https://github.com/QwenLM/qwen-code/issues/5875)
10. **[Bug] Windows 下 cua-driver.exe 后台高 CPU 占用** (#5922)
    *   **重要性**：涉及计算机视觉工具的进程管理问题，影响用户体验和资源消耗。
    *   **链接**：[Issue #5922](https://github.com/QwenLM/qwen-code/issues/5922)

## 4. 重要 PR 进展
以下 PR 展示了开发团队在功能增强和缺陷修复上的主要方向：

1.  **[Feat] 移动端 TodoPanel 响应式视图** (#5948)
    *   **内容**：优化 Web Shell 在移动端的显示，小屏幕下折叠步骤详情，提升便携性。
    *   **链接**：[PR #5948](https://github.com/QwenLM/qwen-code/pull/5948)
2.  **[Fix] Anthropic SDK 监听器内存泄漏隔离** (#5946)
    *   **内容**：通过每请求子控制器隔离 Abort 信号，防止 Anthropic 客户端的连接泄漏。
    *   **链接**：[PR #5946](https://github.com/QwenLM/qwen-code/pull/5946)
3.  **[Feat] Loop 任务持久化与注入** (#5890)
    *   **内容**：引入 `.qwen/loop.md` 文件，使长时循环任务具备可编辑、持久的指令上下文，解决 Issue #5889 提出的痛点。
    *   **链接**：[PR #5890](https://github.com/QwenLM/qwen-code/pull/5890)
4.  **[Feat] 配置 Todo 本地持久化目录** (#5928)
    *   **内容**：新增 `todosDirectory` 设置，允许将任务列表保存在项目根目录下，实现 Git 同步和跨设备共享。
    *   **链接**：[PR #5928](https://github.com/QwenLM/qwen-code/pull/5928)
5.  **[Feat] QQ Bot 流式传输优化** (#5902)
    *   **内容**：重构 QQ 机器人流式行为，移除字符限制，增加空闲刷新和 TTL 管理，提升长消息体验。
    *   **链接**：[PR #5902](https://github.com/QwenLM/qwen-code/pull/5902)
6.  **[Feat] Web Shell 错误边界保护** (#5943)
    *   **内容**：添加 React 错误边界，防止单个组件渲染崩溃导致整个嵌入界面白屏。
    *   **链接**：[PR #5943](https://github.com/QwenLM/qwen-code/pull/5943)
7.  **[Fix] ACP 权限投票跨连接解析** (#5912)
    *   **内容**：修复 Daemon 模式下，权限响应因连接断开而丢失的问题，确保多连接场景下的权限验证可靠性。
    *   **链接**：[PR #5912](https://github.com/QwenLM/qwen-code/pull/5912)
8.  **[Feat] 会话恢复时保留最近 N 轮对话** (#5848)
    *   **内容**：新增 `ui.history.collapsePreviewCount`，允许用户在折叠的历史会话中预览最近的交互。
    *   **链接**：[PR #5848](https://github.com/QwenLM/qwen-code/pull/5848)
9.  **[Refactor] Shell 命令解析基于 Tree-sitter AST** (#2652)
    *   **内容**：替换字符串解析为 AST 解析，极大提高复杂 Shell 命令（如嵌套引号、Here-docs）的鲁棒性。
    *   **链接**：[PR #2652](https://github.com/QwenLM/qwen-code/pull/2652)
10. **[Feat] MCP 资源浏览功能完善** (#5879)
    *   **内容**：Web Shell 的 `/mcp` 对话框现在支持浏览 MCP 服务器资源，补齐与终端 UI 的功能差距。
    *   **链接**：[PR #5879](https://github.com/QwenLM/qwen-code/pull/5879)

## 5. 功能需求趋势
1.  **协作与同步**：社区强烈需求任务（Todo）、记忆（Memory）和会话状态的跨设备/跨项目同步，倾向于基于 Git 的版本控制方案。
2.  **成本控制与性能**：针对 Anthropic 等提供者的缓存优化、Token 使用透明化以及避免无效重试成为高频痛点。
3.  **后台任务管理**：用户希望加强对 `/loop`、Cron 任务等长时间运行进程的可见性、可控性和持久化能力。
4.  **多端体验优化**：移动端适配（Web Shell）和流式输出的稳定性（QQ Bot、Chrome 扩展）受到持续关注。

## 6. 开发者关注点
*   **配置安全性**：担心模型自动升级或配置变更导致意外产生高额费用（如 Issue #5819）。
*   **稳定性**：对进程泄漏（Issue #5922）、内存泄漏（Issue #5946）和 UI 崩溃（Issue #5943）敏感。
*   **工作流连续性**：会话历史断裂（Issue #5920）和上下文丢失直接影响开发效率，是亟待修复的关键 Bug。
*   **工具链健壮性**：Shell 解析的准确性（PR #2652）和文件写入的大文本处理能力（Issue #5756）是基础体验的核心。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：** 2026-06-28
**数据来源：** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

## 1. 今日速览
今日社区核心焦点集中在 **v0.8.66 版本的收尾与发布准备**，包括令牌优化、缓存机制改进及 TUI 界面重构。同时，**插件系统（Plugin System）** 的开发取得重大突破，已完成 Manifest 解析、注册表发现及 CLI/TUI 集成，标志着扩展性进入新阶段。此外，针对 Agent 模式下的工具调用失败重试机制和搜索降级策略进行了多项底层修复，以提升稳定性。

## 2. 版本发布
**无新版本正式 Release。**
目前处于 v0.8.66 的发布前准备阶段（Release Ledger 已更新），主要工作集中在代码清理、文档完善及遗留 Issue 的归档。

## 3. 社区热点 Issues
以下 Issue 反映了社区对性能、稳定性和用户体验的高度关注：

1.  **[Bug] 输入缓存命中率太低 (#1177)**
    *   **重要性：** 直接影响 Token 成本和响应速度。用户对比官方其他模型指出缓存失效严重。
    *   **社区反应：** 高关注度（24 条评论），多位用户确认存在类似问题。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/1177)

2.  **[Bug] 缓存命中方面似乎还是有些问题 (#1120)**
    *   **重要性：** 进一步证实缓存问题是系统性而非个案，涉及版本兼容性排查。
    *   **社区反应：** 21 条评论，用户正在协助定位是特定版本 Bug 还是普遍现象。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/1120)

3.  **[Bug] Token 消耗增大了很多 (#743)**
    *   **重要性：** 高 Token 消耗导致成本激增，用户报告半天消耗 4 亿 Token，需紧急优化交互逻辑。
    *   **社区反应：** 13 条评论，开发者正在分析重复传输上下文的问题。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/743)

4.  **[Enhancement] 接入 Agent Client Protocol Registry (#3192)**
    *   **重要性：** 使 CodeWhale 能被 Zed 等支持 ACP 的编辑器直接安装和使用，扩大生态兼容。
    *   **社区反应：** 12 条评论，推动标准化集成。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3192)

5.  **[Bug] CodeWhale 过度介入修改，偏离用户意图 (#3275)**
    *   **重要性：** 反映 Agent 自主性过强导致的 UX 问题，即“自作主张”执行任务而未等待确认。
    *   **社区反应：** 12 条评论，被视为回归问题，急需修复以恢复用户控制权。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3275)

6.  **[Bug] Plan 和 Agent 模式混合 (#3568)**
    *   **重要性：** 模式识别错误导致 AI 行为逻辑混乱，影响特定工作流的使用体验。
    *   **社区反应：** 6 条评论，附带具体日志案例，便于复现。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3568)

7.  **[Enhancement] Cache-maximal context mode (#528)**
    *   **重要性：** 提出激进的性能优化方案：不再压缩上下文，而是重新读取活跃文件以保持精确源信息。
    *   **社区反应：** 3 条评论，但关联了多个相关 PR，显示开发团队重视此方向。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/528)

8.  **[Feature Request] Rust-based native runtime (#3541)**
    *   **重要性：** 用户希望用 Rust 重写运行时以降低 Node.js 带来的冷启动延迟和内存开销。
    *   **社区反应：** 3 条评论，代表了对底层性能优化的长期诉求。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3541)

9.  **[Bug] 合并分析报告保存文档巨慢 (#1732)**
    *   **重要性：** 特定场景（报告合并）下的性能瓶颈，伴随极低的缓存命中率。
    *   **社区反应：** 2 条评论，提供截图佐证。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/1732)

10. **[Bug] Token 消耗超级大 (#1818)**
    *   **重要性：** 与 #743 类似，持续的高 Token 消耗投诉表明 Prompt 工程或上下文管理仍有缺陷。
    *   **社区反应：** 2 条评论，点赞数较高，引发共鸣。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/1818)

## 4. 重要 PR 进展
今日主要 PR 集中在插件系统落地、ACP 协议适配及引擎稳定性修复：

1.  **Feat: Plugin p3 MCP (#3710)**
    *   **内容：** 完成插件系统的 MCP (Model Context Protocol) 集成部分，支持外部技能和服务的发现与注入。
    *   **状态：** Open
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3710)

2.  **Feat: Plugin manifest parsing & registry (#3708)**
    *   **内容：** 实现插件清单解析、注册表管理（启用/禁用/列表）及内置/用户插件目录发现，奠定插件生态基础。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3708)

3.  **Feat: Plugin p2 CLI (#3709)**
    *   **内容：** 为插件系统添加 CLI 支持，允许用户在命令行中管理插件。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3709)

4.  **Docs: v0.8.66 release ledger (#3707)**
    *   **内容：** 记录 v0.8.66 版本的发布清单，包括令牌/缓存评分、ACP 注册状态及已解决的关键 Issue。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3707)

5.  **Layer 4.2: Registry cleanup & validation (#3706)**
    *   **内容：** 完成命令边界重构的最后验证层，清理注册表并更新架构文档。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3706)

6.  **Feat: Override base prompt from config (#3696)**
    *   **内容：** 允许通过配置文件覆盖基础 System Prompt，支持非软件场景（如写作、文档审阅）。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3696)

7.  **Fix: Suggest direct URLs after search errors (#3705)**
    *   **内容：** 当搜索连续失败时，引擎会自动建议直接使用 URL 获取内容，提升容错率。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3705)

8.  **Chore: Reactivate stale issue cleanup (#3607)**
    *   **内容：** 重新激活过时 Issue 清理流程，自动关闭缺乏信息反馈的旧 Issue，保持仓库整洁。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3607)

9.  **Fix: Nudge fallback after tool errors (#3703)**
    *   **内容：** 在工具连续出错后，向模型提供降级提示，避免陷入无效重试循环。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3703)

10. **Feat: Stream session/prompt deltas via ACP (#3702)**
    *   **内容：** 优化 ACP 适配器，支持流式传输会话和 Prompt 增量，改善 Zed 等编辑器的实时渲染体验。
    *   **状态：** Closed (Merged)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3702)

## 5. 功能需求趋势
1.  **插件化与扩展性 (Plugin Ecosystem):** 社区强烈欢迎插件系统。从 Manifest 解析到 CLI/TUI 集成，再到 MCP 支持，开发团队正在快速构建开放的扩展架构。
2.  **Token 效率与成本控制:** “缓存命中率低”和“Token 消耗过大”是高频痛点。社区期待更智能的上下文压缩、缓存机制优化以及更精简的 Prompt 设计。
3.  **多模态与非代码场景支持:** 通过允许自定义 Base Prompt，用户希望将工具应用于文学创作、文档审查等非编程领域，体现了对通用 AI 助手能力的渴望。
4.  **IDE/编辑器深度集成:** ACP (Agent Client Protocol) 的完善表明开发者致力于让 CodeWhale 更好地融入 Zed 等现代编辑器，强调流式输出和无缝交互。

## 6. 开发者关注点
*   **稳定性与容错:** 开发者非常关注 Agent 在执行外部工具（如 Web 搜索）失败时的表现。当前的修复重点在于增加“降级策略”和“ fallback 提示”，防止 Agent 因死循环重试而浪费资源。
*   **用户体验 (UX) 控制:** 用户反感 AI 的“过度自主”。社区希望明确区分 Plan 模式和 Agent 模式，并确保 AI 在执行重大修改前获得用户确认，避免“自作聪明”。
*   **性能优化:** 除了 Token 成本，用户还关注冷启动速度和内存占用。Rust 原生运行时的提议反映了对 Node.js 环境性能瓶颈的不满，尽管目前主要工作仍集中在优化现有架构。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*