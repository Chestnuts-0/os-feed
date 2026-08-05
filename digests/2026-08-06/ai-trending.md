# AI 开源趋势日报 2026-08-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 22:43 UTC

---



# AI 开源趋势日报 | 2026-08-06

## 今日速览

今日 AI 开源领域呈现三大主线：**Agent 工程化进入成熟期**，Claude Code / Codex 生态 Skills、MCP Server 和 Harness 工具集中爆发；**Agent 基础设施层加速分化**，内存、上下文管理、安全沙箱等细分组件快速增长；**AI 与安全、DevOps 深度融合**，AI 渗透测试、Agent 可观测性、企业级安全治理首次密集上榜。Rust 在 AI 基础工具栈中的渗透率显著提升，litellm、vllm、deepseek-native agent 等高性能推理与网关工具均基于 Rust 构建。

---

## 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [openai/codex](https://github.com/openai/codex) | 104,168 | +277 | OpenAI 官方终端编码 Agent，轻量级 Rust 实现，持续领跑 CLI 编码工具赛道 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 55,644 | +105 | Rust 核心的 AI Gateway，支持 100+ LLM API，具备成本追踪、负载均衡和 Guardrails，是企业接入多模型的事实标准 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 74,902 | — | Rust 编写的 CLI 代理，可将常见开发命令的 Token 消耗降低 60–90%，解决 Agent 成本痛点 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 65,037 | — | 上下文压缩库/代理/MCP Server，对编码 Agent 减少 20% Token，对 JSON 减少 60–95%，直接回应 Agent 上下文窗口瓶颈 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 73,808 | — | 支持 100+ LLM/VLM 的统一高效微调框架，ACL 2024，是开源模型适配一线生产工具 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 69,612 | — | 本地化训练 UI，支持 Kimi K3、Gemma 4、Qwen3.6 等最新模型，降低个人开发者微调门槛 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 31,548 | +747 | DeepSeek 原生终端编码 Agent，围绕 prefix-cache 稳定性优化，今日增速显著，反映国产模型 Agent 化趋势 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 226,041 | +628 | "与你共同成长的 Agent"，今日增速领跑，已成为开源 Agent 框架第一梯队 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 38,979 | — | LangChain 官方 Agent 编排框架，构建 resilient multi-agent 系统的首选 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 79,366 | — | 字节开源 SuperAgent Harness，支持沙箱、记忆、Skills、子 Agent 和消息网关，处理分钟到小时级长周期任务 |
| [obra/superpowers](https://github.com/obra/superpowers) | 267,268 | +931 | Agentic Skills 框架与软件开发方法论，今日新增近千星，Skills 工程化理念快速普及 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | 44,248 | +335 | 开源托管 Agent 平台，将编码 Agent 转变为"真实队友"，支持任务分配、进度追踪和技能叠加 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 15,005 | +1,891 | 今日增速最高项目之一，企业级 Agent 记忆中枢，将对话/文档/代码转化为可共享的四种记忆资产 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 22,179 | +355 | 终端 AI 编码 Agent，支持 hash 锚定编辑、LSP、浏览器、子 Agent，体现终端 Agent 的模块化演进 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 13,267 | — | 企业级 Agent 安全沙箱环境，提供真实世界工具，解决 Agent 运行的隔离与权限问题 |

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | 151,457 | — | Agentic 工作流与 RAG 平台，支持多种 AI 模型和工具接入，企业级原型到生产的一站式平台 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 147,969 | — | 用户友好的本地 AI 界面，支持 Ollama 和 OpenAI API，是本地部署 LLM 的首选前端 |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | 123,940 | +234 | 最强大的模块化扩散模型 GUI，支持节点式工作流，生成式视觉内容领域的核心工具 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 81,954 | +203 | 生产级 AI 编码 Agent Skills，由 Chrome 前技术主管打造，推动 Skills 成为 Agent 标准化的可复用模块 |
| [usestrix/strix](https://github.com/usestrix/strix) | 48,944 | +956 | 开源 AI 渗透测试工具，将安全测试 Agent 化，反映 AI+安全垂直领域的爆发 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 107,991 | — | 让 AI Agent 可通过浏览器自动化完成网页任务，是 Computer Use 方向的核心基础库 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 161,712 | — | 大规模网页搜索/爬取/交互 API，为 Agent 提供稳定互联网上下文，RAG 数据管道关键组件 |

---

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | 177,869 | — | 本地 LLM 运行平台，支持 DeepSeek、Qwen、GLM、Gemma 等主流模型，是个人开发者跑通 Agent 的第一入口 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 88,277 | — | 高吞吐量 LLM 推理引擎，生产级部署的事实标准，持续支持最新模型架构 |
| [modular/modular](https://github.com/modular/modular) | 26,672 | — | 包含 MAX 平台和 Mojo 语言，面向 AI 原生开发的统一编程平台，Mojo 语言生态持续扩展 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 100,642 | — | 从零用 PyTorch 实现 ChatGPT 级别 LLM 的教程，深度学习教育的标杆项目 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,375 | — | Hugging Face 核心库，支持文本/视觉/音频/多模态 SOTA 模型，开源 AI 基础设施的基石 |
| [DataWhaleChina/hello-agents](https://github.com/datawhalechina/hello-agents) | 71,051 | — | 《从零开始构建智能体》中文教程，系统覆盖 Agent 原理与工程实践 |
| [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 26,118 | — | 生产级 LLM 应用编排框架，支持 RAG、Agent、多模态管道，强调可观测性和可控性 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 130,822 | — | 100+ AI Agent、Skills 和 RAG 应用合集，是入门和灵感收集的必读资源库 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 89,740 | — | 跨会话持久化上下文，自动捕获 Agent 行为并压缩注入，解决 Agent 记忆断裂问题 |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | 35,278 | — | 微软开源的基于图结构的 RAG 系统，将知识图谱与检索增强结合，是 RAG 进阶方案 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 62,609 | — | AI Agent 通用记忆层，跨会话持久化，支持多 Agent 场景，是 Agent 记忆基础设施的代表 |
| [getzep/graphiti](https://github.com/getzep/graphiti) | 29,597 | — | 实时知识图谱构建工具，为 Agent 提供可更新的长期记忆结构 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,904 | — | 开源 RAG 引擎，融合 Agent 能力，支持深度文档理解，是企业级 RAG 落地的热门选择 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,804 | — | Rust 编写的高性能向量数据库，支持 ANN 搜索，是 RAG 后端的工业级选择 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 51,405 | — | 文档 Agent 和 OCR 平台，RAG 生态最成熟的框架之一，企业级部署首选 |

---

## 趋势信号分析

**Agent Skills 工程化成为核心趋势。** obra/superpowers（+931）、addyosmani/agent-skills（+203）、Leonxlnx/taste-skill（+685）等项目集中上榜，标志着 AI 编码 Agent 正从"单体工具"向"可组合技能模块"演进。Skills 作为 Agent 的可复用知识单元，已形成类似 npm/pypi 的生态雏形，这是 Agent 工程化成熟的重要信号。

**Rust 在 AI 基础设施层渗透率急剧上升。** litellm（Rust 核心）、rtk（Rust）、FalkorDB（Rust）、lean-ctx（Rust）等高性能 AI 工具均使用 Rust 构建，反映出 Token 成本敏感场景下对低延迟、低内存占有的极致追求。

**AI 安全治理从边缘走向主流。** uber/ADR（Uber 内部部署的企业级 Agent 安全框架）、usestrix/strix（AI 渗透测试）、mukul975/Anthropic-Cybersecurity-Skills（817 个结构化安全技能）等项目登榜，表明企业级 Agent 部署的安全合规需求正在快速涌现。

**国产模型 Agent 化加速。** DeepSeek-Reasonix（+747 today）和 LocalMiniDrama（纳米流水线短剧生成）反映国产模型在 Agent 工具和垂直应用两端同时发力，生态活跃度显著提升。

---

## 社区关注热点

- **TencentDB-Agent-Memory**（+1,891 today）：企业级 Agent 记忆中枢，将对话、文档、代码转化为可治理、可共享的四种记忆资产，是今日增速最高的 AI 项目，预示记忆管理将成为 Agent 平台标配能力。
- **obra/superpowers**（+931 today）：Agentic Skills 框架，定义了 Agent 能力的模块化组织方式，其方法论层面的影响力可能超越代码本身。
- **usestrix/strix**（+956 today）：AI 驱动的开源渗透测试工具，将安全测试 Agent 化，填补了"AI 做安全"这一垂直赛道的空白。
- **mem0ai/mem0**：Agent 通用记忆层，解决多 Agent 场景下的跨会话状态持久化问题，是构建持久智能体的关键基础设施。
- **DeepSeek-Reasonix**（+747 today）：DeepSeek 原生终端编码 Agent，围绕 prefix-cache 稳定性优化，反映国产模型在 Agent 工具层的快速追赶。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*