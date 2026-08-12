# AI 开源趋势日报 2026-07-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-06 02:08 UTC

---

# AI 开源趋势日报 | 2026-07-06

## 1. 今日速览

今日 GitHub AI 开源生态呈现**“Agent 基础设施成熟化”**与**“终端侧智能爆发”**两大核心趋势。随着 Anthropic Claude Code、OpenAI Codex 等 CLI 编程智能体的普及，围绕它们的**Skill（技能）、Harness（容器）和 Memory（记忆层）**工具链迎来井喷式增长，如 `taste-skill` 和 `planning-with-files` 迅速登上热榜。同时，**Rust 语言在 AI 底层基础设施中的应用**显著加速，从高性能终端编辑器（Zed, Helix）到本地推理引擎（Ollama, Kokoro）均占据重要席位。此外，**A2A（Agent-to-Agent）协议**及其相关实现开始进入主流视野，标志着多智能体协作标准正在形成。

## 2. 各维度热门项目

### 🔧 AI 基础工具
*聚焦开发框架、推理引擎、CLI 及底层 SDK*

1. **[ollama/ollama](https://github.com/ollama/ollama)**
   - ⭐ 175,551 (+94 today)
   - **说明**：本地大模型运行事实标准，今日更新支持 Kimi-K2.6、GLM-5.1 等新模型，持续巩固其在本地 AI 基础设施中的地位。
2. **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**
   - ⭐ 105,777 (+1,200+ est.)
   - **说明**：Google 官方推出的终端 AI 代理，直接将 Gemini 能力注入命令行，与 Claude Code 和 Codex 形成直接竞争。
3. **[microsoft/typescript-go](https://github.com/microsoft/typescript-go)**
   - ⭐ 6,000+ (+6 today)
   - **说明**：虽然主要是 TS 编译器重写，但作为 AI 编码代理（如 Copilot, Codex）的核心解析基础，其 Rust/Go 重写带来的性能提升对 AI 代码分析至关重要。
4. **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)**
   - ⭐ 26,044 (+102 today)
   - **说明**：基于 DeepSeek 原生的终端 AI 编码代理，强调前缀缓存稳定性，适合长期运行的自动化开发任务。

### 🤖 AI 智能体/工作流
*聚焦 Agent 框架、多智能体协作、自动化与编排*

1. **[anthropics/claude-code](https://github.com/anthropics/claude-code)**
   - ⭐ 50,000+ (+156 today)
   - **说明**：Anthropic 官方终端编码代理，今日热度持续，社区围绕其开发的 Skill 和插件生态极度活跃。
2. **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)**
   - ⭐ 0 (+1,532 today)
   - **说明**：允许在 Claude Code 中直接使用 OpenAI Codex，体现了不同厂商 Agent 工具之间的互操作性需求激增。
3. **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)**
   - ⭐ 50,049 (+981 today)
   - **说明**：泄露的系统提示词库，涵盖 Claude、GPT、Gemini 等主流模型。对于 Agent 开发者调试和优化 Prompt 具有极高参考价值。
4. **[A2A](https://github.com/a2aproject/A2A)**
   - ⭐ 24,634 (+300+ est.)
   - **说明**：Agent-to-Agent 开放协议，旨在实现不同智能体应用间的通信与互操作，是多智能体协作的关键基础设施。

### 📦 AI 应用
*聚焦具体落地产品、垂直场景解决方案及生产力工具*

1. **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)**
   - ⭐ 0 (+1,409 today)
   - **说明**：基于 Rust 的隐私优先 AI 会议助手，支持本地转录和总结，回应了用户对数据隐私和离线处理的强烈需求。
2. **[alibaba/page-agent](https://github.com/alibaba/page-agent)**
   - ⭐ 0 (+805 today)
   - **说明**：阿里巴巴推出的页内 GUI 智能体，通过自然语言控制 Web 界面，展示了 AI 从文本向图形界面操作延伸的趋势。
3. **[usestrix/strix](https://github.com/usestrix/strix)**
   - ⭐ 37,184 (+1,114 today)
   - **说明**：开源 AI 渗透测试工具，利用 AI 自动发现并修复应用漏洞，是 AI 在网络安全领域的典型垂直应用。
4. **[rommapp/romm](https://github.com/rommapp/romm)**
   - ⭐ 10,564 (+410 today)
   - **说明**：虽主要为 ROM 管理器，但其高热度反映了 AI 辅助游戏模拟和复古计算领域的社区活力，常与本地 AI 推理结合使用。

### 🧠 大模型/训练
*聚焦模型权重、微调、训练框架及评测*

1. **[karpathy/nanoGPT](https://github.com/karpathy/nanoGPT)**
   - ⭐ 300,000+ (+246 today)
   - **说明**：Karpathy 的经典 GPT 训练库，近期因新的微调教程或社区实验再次受到关注，仍是入门 LLM 训练的标杆。
2. **[huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech)**
   - ⭐ 17,000+ (+78 today)
   - **说明**：Hugging Face 推出的语音到语音生成框架，支持构建本地语音 Agent，推动了多模态 AI 的本地化部署。
3. **[google-antigravity/antigravity-sdk-python](https://github.com/google-antigravity/antigravity-sdk-python)**
   - ⭐ 21 (+21 today)
   - **说明**：Google Antigravity SDK 的 Python 实现，尽管星标少，但作为新兴大模型平台的早期接入工具，值得跟踪。

### 🔍 RAG/知识库
*聚焦向量数据库、检索增强生成及知识管理*

1. **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**
   - ⭐ 85,996 (+167 today)
   - **说明**：为 AI 编码代理提供跨会话持久化记忆，解决了 Agent 上下文丢失的核心痛点，是 RAG 在 Agent 层面的重要应用。
2. **[langflow-ai/langflow](https://github.com/langflow-ai/langflow)**
   - ⭐ 151,205 (+500+ est.)
   - **说明**：流行的 LLM 应用开发可视化平台，持续更新其 Agent 工作流构建能力，是低代码 AI 应用的标杆。
3. **[Tencent/WeKnora](https://github.com/Tencent/WeKnora)**
   - ⭐ 17,793 (+200+ est.)
   - **说明**：腾讯开源的 LLM 知识平台，集成 RAG、自主推理 Agent 和自维护 Wiki，展示了大厂在企业级知识管理上的布局。

## 3. 趋势信号分析

今日热榜清晰地指向了 **AI Agent 工程化（Agent Engineering）** 的深化。早期关注“如何构建 Agent”的阶段已过，当前焦点转向 **“如何优化 Agent 的行为、记忆和协作”**。
1.  **Skill 与 Harness 经济**：`taste-skill`、`claude-skills`、`planning-with-files` 等项目的高增长表明，开发者正在通过模块化技能（Skills）和持久化规划机制来弥补 LLM 在长周期任务中的不足。Agent 不再是一个黑盒，而是由可组合的工具链构成。
2.  **本地化与隐私优先**：`meetily`、`RuView` 等项目的兴起，以及 Ollama 对新模型的支持，显示社区对数据主权和本地推理的需求并未减弱，反而因 Agent 需要访问敏感代码和数据而更加迫切。
3.  **互操作性标准初现**：`system_prompts_leaks` 的热度反映了逆向工程和提示词工程的白热化，而 `A2A` 协议的提及则暗示行业标准正在从碎片化的私有协议向开放协议过渡。

## 4. 社区关注热点

*   **[Claude Code 生态扩展](https://github.com/anthropics/claude-code)**：随着 Anthropic 官方 CLI 的成熟，围绕它的 Skill 注册表（如 `alirezarezvani/claude-skills`）和记忆层（如 `thedotmack/claude-mem`）将成为开发者提升编码效率的关键。建议关注其插件架构的演进。
*   **[Agent 记忆解决方案](https://github.com/thedotmack/claude-mem)**：长上下文窗口并非万能，`claude-mem` 提供的基于文件的持久化记忆和压缩机制，为低成本维持 Agent 长期一致性提供了新思路，是构建可靠 Agent 系统的必选项。
*   **[Rust 主导的 AI 基础设施](https://github.com/ollama/ollama)**：从推理引擎到终端编辑器，Rust 因其性能和安全性成为 AI 本地化工具的首选语言。关注 `ollama` 对最新模型（如 Kimi, GLM）的支持速度，以及 `helix-editor` 等编辑器对 AI 集成的原生支持。
*   **[GUI Agent 的崛起](https://github.com/alibaba/page-agent)**：`alibaba/page-agent` 等项目标志着 AI 从“文本交互”向“图形界面操作”迈进。这对于自动化测试、Web 爬虫和无人值守办公场景具有颠覆性意义，值得前端和自动化测试开发者重点关注。
*   **[安全与伦理：System Prompts 泄露](https://github.com/asgeirtjg/system_prompts_leaks)**：该仓库的高热度揭示了行业对模型内部逻辑和安全边界的焦虑。开发者应借此机会审视自身 Agent 系统的 Prompt 注入防护，并关注各大厂商在系统提示词保护方面的最新动态。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*