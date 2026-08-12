# AI CLI 工具社区动态日报 2026-07-19

> 生成时间: 2026-07-19 01:43 UTC | 覆盖工具: 9 个

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



# 📊 AI CLI 工具生态横向对比分析报告 | 2026-07-19

## 1. 生态全景
当前 AI CLI 工具生态正从“功能跑马圈地”全面转向**生产级稳定性与交互体验优化**。社区高频聚焦超长上下文支持、多模型路由策略、Agent/ACP 协议健壮性及 TUI 交互扁平化，标志着工具链已深度嵌入开发者核心工作流。头部项目通过强化会话持久化、权限可控性与跨平台兼容性，加速向企业级研发基础设施演进。整体呈现技术路线分化但核心诉求趋同的成熟期特征。

## 2. 各工具活跃度对比
| 工具名称 | 24h Issue 数 | 24h PR 动态 | 版本发布情况 |
|:---|:---|:---|:---|
| **GitHub Copilot CLI** | 27 | 信息不足（焦点集中于 Issue 修复） | 无 Release |
| **Qwen Code** | 4（Top 展示） | 多项底层修复与 CI 优化 PR 进入 Review/合并 | `v0.19.12` (Stable) + Preview/Nightly |
| **DeepSeek TUI (CodeWhale)** | 10 | 过去 24h 合并 20+ PR（高强度重构） | 无 Release（冲刺 `v0.9.1` 架构升级） |
| **Pi** | 10 | 3 个活跃 PR（#6807, #6813, #6812） | 无 Release |
| **Kimi Code CLI** | 2 | 2 个活跃 PR（#2509, #2507） | 无 Release |
| **Gemini CLI** | 数据截断（社区焦点集中） | 信息不足 | `v0.52.0-nightly.20260719` |
| **Claude Code / OpenAI Codex / OpenCode** | 摘要生成失败，数据暂缺 | 数据暂缺 | 数据暂缺 |

## 3. 共同关注的功能方向
| 功能方向 | 涉及工具 | 具体诉求与现状 |
|:---|:---|:---|
| **🔹 长上下文与性能优化** | Copilot, Pi, Qwen, DeepSeek | 突破 1M 上下文限制、修复大文件编辑 CPU 飙升、优化上下文压缩重试机制、缓存 Provider 目录以降低启动延迟。 |
| **🔹 TUI/CLI 交互心流保护** | Kimi, DeepSeek, Copilot | 主界面快捷切换推理强度、新增 `/slash-command` 替代深层菜单、常驻上下文

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



### Claude Code Skills 社区热点分析报告（数据截止 2026-07-19）

#### 1. 热门 Skills 排行（按社区关注度与讨论热度筛选）
| 排名 | Skill 名称/PR | 核心功能 | 社区讨论热点 | 状态 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 1 | **self-audit** (#1367) | AI 输出交付前自检：机械文件验证 + 四维推理质量门禁 | 解决长任务上下文漂移与幻觉问题，提供通用型质量护栏 | OPEN | [PR #1367](https://github.com/anthropics/skills/pull/1367) |
| 2 | **document-typography** (#514) | 文档排版质量控制（防孤行、标题错位、编号对齐） | 直击 AI 生成文档“专业度不足”痛点，覆盖所有文本输出场景 | OPEN | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 3 | **skill-quality/security-analyzer** (#83) | 元技能：对任意 Skill 进行结构、文档、安全、测试、性能五维评估 | 社区急需标准化评估工具，推动 Skill 质量分级与准入 | OPEN | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **ODT** (#486) | OpenDocument 格式（.odt/.ods）创建、填充与解析 | 填补开源办公格式支持空白，契合政企合规与跨平台需求 | OPEN | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **frontend-design** (#210) | 前端设计指南重构：提升指令清晰度与单次对话可执行性 | 优化 Token 效率，避免多轮兜底交互，提升开发者体验 | OPEN | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 6 | **skill-creator 评估修复** (#1298) | 修复 `run_eval.py` 召回率恒为 0% 及 Windows 流读取缺陷 | 直接阻断 Skill 描述优化循环，复现报告超 10 例，创作者工具链刚需 | OPEN | [PR #1298](https://github.com/anthropics/skills/pull/1298) |

#### 2. 社区需求趋势（基于 Issues 深度提炼）
- **企业级协作与分发**：Issue #228（14 评论/7 👍）强烈呼吁原生支持组织内 Skill 共享库，替代低效的手动文件传输流程。
- **Agent 状态压缩与记忆管理**：Issue #1329 提出 `compact-memory` 符号化记忆方案，旨在降低长会话中的上下文占用与检索延迟。
- **安全治理与权限隔离**：Issue #492（34 评论）暴露 `anthropic/` 命名空间被社区 Skill 冒充的风险；Issue #412 与 #1175 均指向内置 `agent-governance` 与安全策略执行能力的需求。
- **生态标准化与协议升级**：Issue #16 建议将 Skill 暴露为标准 MCP 接口；Issue #189 反馈多插件安装导致内容重复，反映社区对去重机制与安装规范的期待。

#### 3. 高潜力待合并 Skills
- **#1367 [self-audit]**：提案与 Issue #1385 高度契合，构建了“预校准→对抗审查→交付验证”的完整管线，具备成为官方基准质检工具的潜力。
- **#514 [document-typography] & #486 [odt]**：精准补齐文档处理与开源格式短板，维护者沟通活跃且无架构冲突，合并路径清晰。
- **#83 [skill-quality/security-analyzer]**：Meta-Skill 方向符合 Anthropic 强化生态治理的战略意图，五维评估框架已具备可落地性。
- **#1298 / #1099 / #1050（Skill-Creator 修复系列）**：虽为底层脚本修复，但集中攻克了 Windows 兼容性与评估失效两大阻塞性问题，是创作者工具链稳定运行的先决条件，预计近期优先合并。

#### 4. Skills 生态洞察
当前社区最集中的诉求已从“单一功能拓展”转向**“企业级协作分发、安全治理边界与创作工具链可靠性”**，亟需官方提供标准化的质量门禁、组织共享机制及跨平台兼容性保障。

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# 📊 Gemini CLI 社区动态日报 | 2026-07-19

## 1. 今日速览
今日 Gemini CLI 推送 `v0.52.0-nightly.20260719` 构建版本，社区焦点高度

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报 | 2026-07-19

## 1. 今日速览
过去 24 小时内，Copilot CLI 社区共更新 27 个 Issue，无新版本发布。开发焦点集中在超长上下文支持、跨平台会话稳定性及权限拦截逻辑优化上。多个高热度历史问题（如 1M 上下文、远程终端接入）已关闭，但 Plan 模式误杀只读命令、多端会话恢复卡顿等实际工作流阻塞问题仍待修复。

## 2. 版本发布
过去 24 小时内无 Release 更新。

## 3. 社区热点 Issues（精选 Top 10）
| 优先级 | Issue 编号 & 状态 | 核心内容摘要 | 社区反应 | 链接 |
|:---:|:---|:---|:---|:---|
| 🔥 | **#2785 [CLOSED]** 支持 Claude Opus 4.7 的 1M 上下文窗口 | 请求对齐 Claude Code 默认提供 1M 上下文能力，突破当前模型上下文限制。 | 👍 62（极高热度） | [Issue #2785](https://github.com/github/copilot-cli/issues/2785) |
| 🔥 | **#1979 [CLOSED]** 远程会话支持（移动端/浏览器） | 建议实现类似 Claude Code 的远程 Attach 机制，打破终端进程绑定限制。 | 👍 53 | [Issue #1979](https://github.com/github/copilot-cli/issues/1979) |
| 🔥 | **#2052 [CLOSED]** 持久化 Token/上下文使用指示器 | 建议在 CLI 界面增加常驻状态栏，实时显示上下文窗口利用率（如 `45% context used`）。 | 👍 19 | [Issue #2052](https://github.com/github/copilot-cli/issues/2052) |
| 🟡 | **#1477 [CLOSED]** Autopilot 模式“继续自主运行”提示异常 | 反馈 Premium 请求计数提示与实际交互行为存在感知偏差，疑似状态同步 Bug。 | 👍 18 | [Issue #1477](https://github.com/github/copilot-cli/issues/1477) |
| 🟡 | **#1610 [CLOSED]** 为 Opus 4.6 添加 100 万上下文支持 | 延续对长上下文能力的诉求，解决复杂工程文件加载时的上下文截断问题。 | 👍 

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报
**日期**：2026-07-19  
**数据来源**：github.com/MoonshotAI/kimi-cli

---

### 1. 今日速览
今日 Kimi Code CLI 社区动态聚焦于 TUI 交互优化与底层协议修复。开发者提出的“主界面快捷切换思考强度”需求已迅速转化为 PR #2509，显著改善长对话中的参数调整体验；同时 ACP Server 模式的问答信号处理机制得到完善。此外，权限规则文档与实际解析逻辑的偏差引发关注，提示团队需尽快对齐配置规范。

### 2. 版本发布
过去 24 小时内无新版本发布。

### 3. 社区热点 Issues
*(注：过去 24 小时共收录 2 条活跃 Issue，均具较高参考价值)*

- **#2501 [Feature Request] 支持在 TUI 主界面直接快捷切换 Reasoning Level / Thinking Effort**
  **重要性**：直击 CLI 交互痛点。当前切换推理深度需进入 `/model` 二级菜单，在长提示输入或对话中途调整时严重打断心流。该需求对标主流 IDE 插件的即时下拉切换体验，对提升编码效率至关重要。
  **社区反应**：1 条评论，0 点赞。需求已被核心贡献者识别并直接驱动开发（见 PR #2509）。
  🔗 [MoonshotAI/kimi-cli Issue #2501](https://github.com/MoonshotAI/kimi-cli/issues/2501)

- **#2508 Permission rules: deny overrides allow regardless of order, contradicting documented "first matching rule takes effect"**
  **重要性**：暴露权限控制模块的逻辑缺陷与文档不符。若开发者按文档“首个匹配生效”的策略配置安全规则，实际运行时可能遭遇隐性的 `deny` 覆盖，导致自动化脚本或 CI/CD 流程异常中断。
  **社区反应**：0 评论，属隐蔽但高风险的配置类 Bug，建议维护者优先核查规则引擎实现并同步更新文档。
  🔗 [MoonshotAI/kimi-cli Issue #2508](https://github.com/MoonshotAI/kimi-cli/issues/2508)

### 4. 重要 PR 进展
*(注：过去 24 小时共收录 2 条活跃 PR，详情如下)*

- **#2509 feat(kimi): configurable thinking effort and /effort command**
  **功能/修复**：实现 TUI 主界面的思考强度快捷配置，新增 `/effort` 斜杠命令，彻底响应 Issue #2501。代码基于历史 `reasoning_effort` 透传机制扩展，兼顾向后兼容与多档位切换。
  **状态**：OPEN | 作者: n-WN | 关联 Issue: #2501
  🔗 [MoonshotAI/kimi-cli PR #2509](https://github.com/MoonshotAI/kimi-cli/pull/2509)

- **#2507 fix(acp): signal QuestionNotSupported instead of resolving empty answers**
  **功能/修复**：修复 ACP Server 模式下 `QuestionRequest` 的状态机处理。此前返回空字典会被下游模型误判为“用户主动取消”，现改为明确抛出 `QuestionNotSupported` 信号，确保工具调用与多轮对话的边界清晰、可追踪。
  **状态**：OPEN | 作者: ayaangazali | 关联 Issue: #2495
  🔗 [MoonshotAI/kimi-cli PR #2507](https://github.com/MoonshotAI/kimi-cli/pull/2507)

### 5. 功能需求趋势
结合本期 Issue 与 PR 走向，社区关注点呈现以下趋势：
1. **TUI 交互扁平化与命令化**：高频参数调整（推理深度、模型切换、权限配置）正从深层菜单向主界面快捷键或 `/slash-command` 迁移，追求“零上下文丢失”的编码流。
2. **Agent/ACP 协议健壮性升级**：随着 ACP Server 模式普及，开发者对会话状态反馈、工具调用信号明确性的要求显著提高，静默失败或歧义返回正在被快速淘汰。
3. **配置策略的可预测性**：权限规则、环境变量加载顺序等底层逻辑的透明度成为企业级用户的核心诉求，文档与实现的强一致性成为迭代基准。

### 6. 开发者关注点
- **心流保护**：反感在复杂调试或长文本生成过程中因切换模型参数而中断输入，强烈依赖快捷入口与斜杠命令。
- **确定性配置**：权限规则（Allow/Deny）的解析顺序必须严格符合预期，任何隐性覆盖都会增加安全审计与自动化集成的调试成本。
- **显式错误信号**：在 Agent 通信协议中，明确的 `Unsupported/NotImplemented` 信号优于空值或静默丢弃，便于上层框架进行优雅降级、重试或日志追踪。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# 📊 Pi 社区动态日报 | 2026-07-19

## 1. 今日速览
过去24小时，Pi 社区迭代重心转向**流式传输稳定性**与**核心性能优化**，多个涉及上下文压缩重试机制、大文件编辑高CPU占用及启动卡顿的关键问题已闭环或深入修复。同时，团队积极推进共享认证文件、Anthropic Vertex 适配及会话树 RPC 暴露等架构级改进，整体生态正加速向高可靠、易集成的开发者工具演进。

## 2. 版本发布
过去24小时内无新版本发布。

## 3. 社区热点 Issues
1. **#6725** `Copilot pricing for GPT-5.6 models is incorrect`  
   **重要性**：OpenAI 模型的 `cacheWrite` 未计入 Copilot 计费，导致实际消耗远高于预期。  
   **社区反应**：已标记为 `bug`，需尽快校准计费逻辑以维持用户信任。  
   🔗 https://github.com/earendil-works/pi/issues/6725

2. **#6167** ``transformMessages` + `isSameModel === false` thinking block normalization interacts poorly...`  
   **重要性**：模型切换时思考块非红文本被内联至助手消息，破坏多模型混用时的格式隔离。  
   **社区反应**：核心消息转换链路缺陷，开发者呼吁增加格式校验与隔离策略。  
   🔗 https://github.com/earendil-works/pi/issues/6167

3. **#6792** `High CPU usage when writing or editing big 500+ line files`  
   **重要性**：生成/编辑 1000+ 行 Markdown 时 CPU 飙升至 100%，附带完整性能剖析文件。  
   **社区反应**：已关闭，证明主程已定位阻塞点并实施优化。  
   🔗 https://github.com/earendil-works/pi/issues/6792

4. **#6647** `Compaction fails on a single transient stream drop (no retry)`  
   **重要性**：上下文压缩仅执行一次非重试调用，单次 Socket 中断即导致整个压缩失败。  
   **社区反应**：保持 `OPEN`，社区强烈建议对齐常规 Assistant 调用的重试逻辑。  
   🔗 https://github.com/earendil-works/pi/issues/6647

5. **#6675** ``pi update --self` gives up after one transient latest-version connection failure`  
   **重要性**：自更新机制缺乏网络容错，单次瞬断直接终止升级流程。  
   **社区反应**：建议引入指数退避或本地缓存降级策略。  
   🔗 https://github.com/earendil-works/pi/issues/6675

6. **#6768** `Compaction using Copilot Enterprise not possible`  
   **重要性**：企业版授权下调用 OpenAI/Anthropic API 进行上下文压缩时触发 `421 Misdirected Request`。  
   **社区反应**：已关闭，需调整 Enterprise 路由头或代理配置。  
   🔗 https://github.com/earendil-works/pi/issues/6768

7. **#6801** `OpenAI Responses: degenerate output can self-amplify and stream indefinitely`  
   **重要性**：模型返回序列化响应信封作为纯文本，导致 Pi 递归嵌套并引发无限流式循环。  
   **社区反应**：已关闭，需增加输出合法性校验与最大嵌套深度限制。  
   🔗 https://github.com/earendil-works/pi/issues/6801

8. **#6796** `Duplicate tool_call_id error when switching to deepseek/deepseek-v4-pro`  
   **重要性**：跨提供商切换时 `tool_call_id` 未重置，触发 HTTP 400 错误。  
   **社区反应**：已关闭，提示会话状态机在模型切换时需彻底清理工具调用上下文。  
   🔗 https://github.com/earendil-works/pi/issues/6796

9. **#6794** `Pi startup super slow due to model catalogue refresh`  
   **重要性**：启动时全量刷新模型目录导致长时间无响应，严重影响 CLI 交互效率。  
   **社区反应**：已关闭，推测已改为异步加载或按需缓存。  
   🔗 https://github.com/earendil-works/pi/issues/6794

10. **#6774** `Ctrl+G external editor is slow to launch when os.tmpdir() is crowded`  
    **重要性**：临时文件直写系统 `tmpdir` 导致竞争，外部编辑器启动延迟。  
    **社区反应**：已关闭，建议改用 `mkdtemp` 私有沙盒目录。  
    🔗 https://github.com/earendil-works/pi/issues/6774

## 4. 重要 PR 进展
1. **#6807** `fix(ai): stop Responses streams at terminal event`  
   修复 Responses 流在 `response.completed` 后仍等待 HTTP EOF 的延迟问题，确保终端事件及时触发。  
   🔗 https://github.com/earendil-works/pi/pull/6807

2. **#6813** `feat(coding-agent): support shared auth file`  
   新增独立认证文件覆盖机制，通过 `${APP_NAME}_CODING_AGENT_AUTH_FILE` 环境变量统一管理 CLI、OAuth 刷新与模型目录鉴权。  
   🔗 https://github.com/earendil-works/pi/pull/6813

3. **#6812** `Remove "./

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 | 2026-07-19

## 1. 今日速览
Qwen Code v0.19.12 正式版今日推送，核心聚焦于 Daemon 冷启动性能追踪与多工作区会话所有权守卫强化。社区活跃度持续走高，MCP 协议兼容性治理、Daemon 会话持久化并发安全及 CLI 交互阻断成为高频讨论焦点，多项底层修复与 CI 流程优化 PR 已进入 Review 或合并阶段。

## 2. 版本发布
- **v0.19.12 (Stable)**：无已知破坏性变更。主要更新包括：
  - 新增 Daemon 首次冷启动会话追踪能力，定位性能瓶颈（[#6907](https://github.com/QwenLM/qwen-code/pull/6907)）
  - 强化多工作区所有权守卫，防止并发写入冲突
  - 同步第三方合规声明并防范未来漂移（[#7161](https://github.com/QwenLM/qwen-code/pull/7161)）
  - 预览版 `v0.19.12-preview.0` 与 Nightly 构建已同步发布。

## 3. 社区热点 Issues（Top 10）
| 优先级 | 类型 | 标题摘要 | 重要性/社区反应 | 链接 |
|:---:|:---:|:---|:---|:---|
| P1 | Bug | Subagent 静默切换主会话模型导致上下文溢出 | 影响 Agent 链式调用稳定性，复现 #7119 修复未覆盖的代码路径，社区高度关注 | [Issue #7156](https://github.com/QwenLM/qwen-code/issues/7156) |
| P2 | Enhancement | 优化 Daemon 冷启动与 qwen serve 快速路径延迟 | 长期性能诉求，追踪早期 2.5s 启动差距的剩余瓶颈，关联 daemon SDK 演进 | [Issue #4748](https://github.com/QwenLM/qwen-code/issues/4748) |
| P2 | Bug | EventEmitter 内存泄漏警告引发 Crash | Node.js 环境下资源管理问题，影响长会话稳定性，已触发 PR 修复 | [Issue #7159](https://github.com/QwenLM/qwen-code/issues/7159) |
| P2 | Bug | MCP Server 工具/资源列表获取超时失败 | 阻碍第三方 MCP 服务集成，涉及认证后列表拉取与超时重试逻辑 | [Issue #7147](https://github.com/QwenLM/qwen-code/issues

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报
**日期**: 2026-07-19  
**数据来源**: github.com/Hmbown/DeepSeek-TUI (CodeWhale)

## 1. 今日速览
今日无新 Release 发布，但代码库处于高强度迭代期。过去 24 小时合并了 20+ 个 PR，核心围绕 `v0.9.1` 公共面线梳理、工作流图（Work-Graph）底层重构、多模型路由稳定性修复及 TUI 渲染性能优化展开。社区 Issue 讨论高度聚焦于代理行为合规性、跨平台文件/终端兼容性及 CLI/TUI 控制面一致性设计。

## 2. 版本发布
无新版本发布。大量已合入 PR 指向 `v0.9.1` 的内部架构升级与文档对齐，包括会话级崩溃检查点、工作流图核心模型落地、Provider 目录缓存优化及公开 README/网站文案标准化。

## 3. 社区热点 Issues（Top 10）
| 编号 | 标题摘要 | 关注原因 | 链接 |
|:---|:---|:---|:---|
| #4032 | Codewhale 未遵循宪法，频繁生成临时脚本 | 代理行为可控性是核心痛点，引发 39 条评论深度讨论 | [Issue #4032](https://github.com/Hmbown/CodeWhale/issues/4032) |
| #1186 | 为 execpolicy 添加类型化持久权限规则 | 提升工具执行安全性与策略可追溯性，社区期待结构化约束 | [Issue #1186](https://github.com/Hmbown/CodeWhale/issues/1186) |
| #1481 | 支持 OpenCode Go/Zen 作为 DeepSeek 提供商 | 拓展低成本/开源模型接入路径，满足灵活部署需求 | [Issue #1481](https://github.com/Hmbown/CodeWhale/issues/1481) |
| #3480 | v0.9.2 TUI 信息架构与视觉 UX 重构 | 解决多 Agent 场景下状态展示杂乱、交互入口分散问题 | [Issue #3480](https://github.com/Hmbown/CodeWhale/issues/3480) |
| #4410 | 恢复 xAI device-code OAuth 登录并暴露端点错误 | 修复硬编码路径导致的认证失败，属近期 Release Blocker | [Issue #4410](https://github.com/Hmbown/CodeWhale/issues/4410) |
| #1675 | Agent 实时输出中文乱码 | 终端渲染与 UTF-8 处理兼容性痛点，影响多语言用户 | [Issue #1675](https://github.com/Hmbown/CodeWhale/issues/1675) |
| #4085 | macOS File Provider (Dropbox) 读写失败 | 原生云盘同步目录的权限/沙箱绕过方案待明确 | [Issue #4085](https://github.com/Hmbown/CodeWhale/issues/4085) |
| #3927 | 添加 Provider 无关的离线首次引导路径 | 降低 Ollama/SGLang/vLLM 等本地模型用户的使用门槛 | [Issue #3927](https://github.com/Hmbown/CodeWhale/issues/3927) |
| #2886 | 为工具生命周期添加 Gherkin E2E 测试覆盖 | 提升复杂命令路由与 Agent 执行流的回归测试可靠性 | [Issue #2886](https://github.com/Hmbown/CodeWhale/issues/2886) |
| #1854 | Windows 默认启动改用 Windows Terminal | 改善字体渲染与色彩表现，提升原生终端体验 | [Issue #1854](https://github.com/Hmbown/CodeWhale/issues/1854) |

## 4. 重要 PR 进展（Top 10）
| PR | 功能/修复摘要 | 技术价值 | 链接 |
|:---|:---|:---|:---|
| #4558 | 会话级崩溃检查点与 flush 报告 | 替代单槽共享检查点，提升长会话数据恢复可靠性 | [PR #4558](https://github.com/Hmbown/CodeWhale/pull/4558) |
| #4553 | Work-Graph 核心模型、Reducer 与验证 | 建立单会话权威工作账本，为复杂 Agent 编排奠定基础 | [PR #4553](https://github.com/Hmbown/CodeWhale/pull/4553) |
| #4555/#4556/#4557 | Kimi Code K3 路由真相、上下文溯源与会员上线 | 精细化多模型路由策略，完善密钥恢复与上下文证明 | [PR #4555](https://github.com/Hmbown/CodeWhale/pull/4555) |
| #4554 | 修复根级默认配置泄漏至厂商锁定路由 | 避免 `deepseek-v4-pro` 等默认值错误覆盖 xAI 等专属端点 | [PR #4554](https://github.com/Hmbown/CodeWhale/pull/4554) |
| #4550 | 缓存 Provider Catalog 快照 | 解决 `/model` 每次打开重合并编目录导致的 ~3.1s 延迟 | [PR #4550](https://github.com/Hmbown/CodeWhale/pull/4550) |
| #4549 | 修复 Ctrl+T 推理力度切换无反馈及预算不同步 | 补齐快捷键交互闭环，保持热键与 GUI 状态一致 | [PR #4549](https://github.com/Hmbown/CodeWhale/pull/4549) |
| #4546 | 修复 xAI 拒绝 root oneOf 工具 Schema 的 400 错误 | 适配 Grok-4.5 等模型的严格 JSON Schema 校验要求 | [PR #4546](https://github.com/Hmbown/CodeWhale/pull/4546) |
|

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*