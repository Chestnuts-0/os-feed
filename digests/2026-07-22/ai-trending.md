# AI 开源趋势日报 2026-07-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-22 01:43 UTC

---



# 📊 AI 开源趋势日报 — 2026-07-22

## 1. 今日速览

今日 GitHub AI 开源生态呈现 **"Agent Harness 工程化"全面爆发**态势：Claude Code、Codex、OpenClaw、Hermes Agent 等编码代理的 Skills、Memory、上下文压缩层成为新基建焦点。Kimi CLI、Qwen Code、Gemini CLI 等厂商原生终端代理持续入局，CLI 层竞争白热化。RAG 与 Agent Memory 赛道出现明显的 "本地优先 + 图数据库融合" 转向，Cognee、Mem0、Graphiti 等项目同步升温。同时，Token 压缩与成本优化类工具（RTK、Caveman、LeanCTX）以实用主义姿态快速积累用户。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,606 | — | 本地大模型运行器，支持 Kimi-K2.6、GLM-5.2、DeepSeek、Qwen 等主流模型一键启动 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐142,278 | — | Agent 工程平台，今日同步热榜出现 `open_deep_research`（+23），LangChain 正从框架向深度研究产品延伸 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | ⭐54,276 | — | 统一 LLM API 网关，Rust 核心 + Python SDK，支持 100+ 模型提供商的负载均衡与成本追踪 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86,820 | — | 高吞吐 LLM 推理引擎，仍是私有化部署的首选后端 |
| [google/gemini-cli](https://github.com/google-gemini/gemini-cli) | ⭐106,113 | — | Google 官方终端 AI Agent，将 Gemini 能力直接注入命令行工作流 |
| [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | — | ⭐+329 today | Kimi Code CLI 正式发布，月之暗面入局终端编码代理赛道 |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | — | ⭐+47 today | 通义千问团队开源终端编码 Agent，对标 Claude Code / Codex |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | — | ⭐+65 today | 结构化输出库，解决 LLM 输出 JSON/Schema 的稳定性问题 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐72,408 | ⭐+274 today | Rust CLI 代理，可减少 60-90% LLM Token 消耗，直击开发者成本痛点 |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | ⭐30,211 | ⭐+129 today | 一条命令找出你的硬件能跑哪些模型，本地部署的"兼容性检测器" |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐218,422 | — | 开源个人 AI Agent，"与你一起成长"的定位使其成为 OpenClaw 最强竞品之一 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,643 | — | 经典自主 Agent 项目，持续迭代中保持高热度 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐231,908 | — | Agent Harness 性能优化系统，Skills/Instincts/Memory/Security 全栈方案，今日同时登上 Trending (+372) |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐77,547 | — | 字节开源 SuperAgent Harness，支持沙箱、记忆、工具、子 Agent 的长周期任务执行 |
| [stablyai/orca](https://github.com/stablyai/orca) | — | ⭐+1,356 today | 并行 Agent 舰队管理 ADE，支持桌面/移动端/VPS，今日 Trending 榜首级热度 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | — | ⭐+1,230 today | AI Agent 工具包：统一 LLM API + Agent Loop + TUI + 编码 Agent CLI |
| [AgentWrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator) | — | ⭐+39 today | Agent IDE，可编排编码 Agent 舰队，自动处理 CI 修复、合并冲突和代码审查 |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | ⭐28,068 | — | OpenAI 官方轻量多 Agent 框架，生产级多 Agent 工作流首选 |
| [google/adk-python](https://github.com/google/adk-python) | ⭐20,832 | — | Google 开源 Agent 开发工具包，代码优先的 Python Agent 构建方案 |
| [agentscope-ai/AgentTeams](https://github.com/agentscope-ai/AgentTeams) | — | ⭐+9 today | 基于 Matrix 房间的协作多 Agent OS，强调人类在环的任务协调 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐149,679 | ⭐+157 today | Agentic Workflow + RAG 一体化平台，企业级 AI 应用落地标杆 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐146,254 | — | 本地友好的 AI 对话界面，支持 Ollama / OpenAI API 等主流后端 |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | — | ⭐+1,295 today | AI 驱动的全球情报看板，实时新闻聚合 + 地缘政治监控 + 基础设施追踪 |
| [every-app/open-seo](https://github.com/every-app/open-seo) | — | ⭐+849 today | Semrush/Ahrefs 的开源替代，AI 驱动的 SEO 分析工具 |
| [Canner/WrenAI](https://github.com/Canner/WrenAI) | ⭐16,533 | ⭐+88 today | GenBI 产品，自然语言→SQL→仪表板，覆盖 20+ 数据源的企业级 Text-to-SQL |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐60,891 | — | AI 求职助手：扫描招聘网站、结构化评分、定制简历，完全本地运行 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐59,159 | — | 给 AI Agent 装上"眼睛"，零 API 费用读取 Twitter/Reddit/YouTube/GitHub/B站/小红书 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐40,360 | — | AI 自动生成原生 PowerPoint，支持动画、图表、音频旁白和自定义模板 |
| [waooAI/waoowaoo](https://github.com/waooAI/waoowaoo) | ⭐13,306 | — | 工业级全流程 AI 影视生产平台，从短片到真人剧的好莱坞标准工作流 |
| [xuanyustudio/LocalMiniDrama](https://github.com/xuanyustudio/LocalMiniDrama) | — | ⭐+15 today | 开源本地 AI 短剧/漫剧生成工具，故事→分镜→成片全流程离线 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,811 | — | ML 模型定义框架，文本/视觉/音频/多模态推理与训练的统一入口 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐99,527 | — | 从零实现 ChatGPT 级 LLM 的 PyTorch 教程，深度学习教育标杆 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,428 | — | 统一高效微调 100+ LLM/VLM，ACL 2024 论文配套工具 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68,688 | — | 本地训练与运行 Gemma 4、Qwen3.6、DeepSeek、Kimi 等模型的 UI 工具 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | ⭐67,743 | — | 《从零开始构建智能体》中文教程，Agent 原理与实践的系统化学习路径 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | — | ⭐+4,624 today | 《深入理解 AI Agent》开源主仓库，今日 Trending 全站第一，中文 Agent 教材现象级传播 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐41,495 | ⭐+1,007 today | "Learn it. Build it. Ship it."——AI 工程实战课程，今日继续飙升 |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | ⭐47,733 | — | 本地 AI 引擎，无需 GPU 即可运行 LLM/视觉/语音/图像/视频模型 |
| [NVIDIA/cosmos-framework](https://github.com/NVIDIA/cosmos-framework) | — | ⭐+9 today | NVIDIA Cosmos 模型推理与训练框架，世界模型方向的基础设施 |
| [datalab-to/chandra](https://github.com/datalab-to/chandra) | — | ⭐+46 today | 处理复杂表格、表单、手写的全布局 OCR 模型 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,402 | — | AI Agent 通用记忆层，跨会话持久化用户与上下文信息 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐61,019 | — | 在 Tool Output/日志/RAG Chunk 进入 LLM 前进行压缩，编码 Agent 省 20% Token，JSON 省 60-95% |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐58,694 | — |  lightning-fast 搜索引擎，内置 AI 混合搜索能力 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,988 | — | 文档 Agent 与 OCR 平台，RAG 基础设施的头部项目 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | — | ⭐+358 today | Agent 开源记忆平台，基于自托管知识图谱引擎实现长期记忆 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐37,977 | — | EMNLP 2025 论文，简单快速的检索增强生成方案 |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐34,723 | — | 模块化基于图的 RAG 系统，将知识图谱与检索增强结合 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐34,156 | — | 无向量库的推理型 RAG，文档索引新范式 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | ⭐24,581 | ⭐+1,925 today | 本地优先的代码智能图，让 AI 编程工具只读取相关内容，审查场景大幅减少上下文 |
| [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) | — | ⭐+16 today | Lean Context：60-90% Token 节省的 Agent 上下文智能层，76 个 MCP 工具，纯本地 Rust 二进制 |

---

## 3. 趋势信号分析

今日热榜最显著的趋势是 **AI Agent 的"Harness Engineering"（Agent 驾驭工程）成为独立技术栈**。ECC（23 万星）、CodeWhale、jcode、Orca、Pi 等项目集中上榜，表明开发者不再满足于调用 LLM API，而是专注于构建 Skills、Memory、Tool、安全策略和上下文工程的完整体系。其次，**Token 压缩与成本控制**从边缘需求跃升为核心议题——RTK、Caveman、Headroom、LeanCTX、OmniRoute 等项目均以"省 Token"为卖点，反映大模型使用成本仍是规模化落地的关键瓶颈。第三，**RAG 正在从"向量检索"走向"图谱+记忆+推理"的融合架构**，Cognee、Graphiti、PageIndex、LightRAG 分别代表知识图谱、图数据库、无向量 RAG 三条路径。最后，厂商原生 CLI Agent（Kimi CLI、Qwen Code、Gemini CLI）集体亮相，终端层正成为 AI 编程体验的新战场。

---

## 4. 社区关注热点

- **`bojieli/ai-agent-book`**（今日 +4,624 ⭐）—— 中文 AI Agent 系统性教材，全书正文+PDF+代码开源，填补了 Agent 工程化教学的空白，适合转行和进阶开发者。
- **`affaan-m/ECC`**（⭐231,908）—— Agent Harness 性能优化系统的绝对头部，Skills/Instincts/Memory/Security 四层架构，是 Claude Code/Codex/Cursor 用户的必读项目。
- **`stablyai/orca`**（今日 +1,356 ⭐）—— 并行 Agent 舰队管理工具，支持任意编码 Agent + 自有订阅，桌面/移动/VPS 全覆盖，多 Agent 协作的实用化方案。
- **`rtk-ai/rtk`**（⭐72,408）—— Rust 编写的 CLI Token 压缩代理，减少 60-90% 消耗，零依赖单二进制，对高频使用 Claude Code/Codex 的开发者有直接经济价值。
- **`tirth8205/code-review-graph`**（今日 +1,925 ⭐）—— 为 MCP 和 CLI 构建持久化代码库图谱，让 AI 代码审查只读取相关上下文，大仓库场景下效果显著。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*