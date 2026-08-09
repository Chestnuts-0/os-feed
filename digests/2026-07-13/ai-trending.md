# AI 开源趋势日报 2026-07-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-13 01:48 UTC

---



# 📊 AI 开源趋势日报 | 2026-07-13

## 1. 今日速览
今日 GitHub AI 开源生态呈现明显的“工程化与模块化”转向：Agent 编排框架与元控制层（Meta-Harness）成为绝对流量中心，MCP 协议正快速成为工具调用的事实标准。本地化记忆存储与隐私优先的 RAG 基础设施热度攀升，反映出开发者对数据主权与推理成本控制的重视。同时，垂直场景 Agent（金融交易、视频渲染、终端开发）加速落地，AI 开源重心已从“大模型能力验证”全面迈向“生产级工作流构建”。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
1. **[affaan-m/ECC](https://github.com/affaan-m/ECC)** ⭐228,966 (+401 today)  
   Agent harness 性能优化系统，为 Claude Code/Codex/Cursor 等提供技能、记忆与安全策略的统一管理。
2. **[ollama/ollama](https://github.com/ollama/ollama)** ⭐176,000  
   支持 Kimi、GLM、Qwen、Gemma 等百余个模型的本地化 LLM 推理引擎，一键部署零门槛。
3. **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)** ⭐105,940 (+34 today)  
   Google 官方开源终端 AI 代理，将 Gemini 能力直接集成至命令行环境。
4. **[pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai)** ⭐18,455 (+42 today)  
   基于 Pydantic 类型系统的轻量级 AI Agent 框架，强调结构化输出与运行时校验。
5. **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** ⭐0 (+210 today)  
   面向 Claude 的 MCP 服务端，赋予 AI 终端控制、文件搜索与 Diff 编辑能力。

### 🤖 AI 智能体/工作流
1. **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** ⭐37,114  
   基于图结构构建高韧性 AI Agent 的官方框架，支持循环、分支与状态持久化。
2. **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** ⭐76,854  
   字节开源的长周期 SuperAgent 平台，内置沙箱、记忆、技能与子 Agent 协作机制。
3. **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐104,411  
   使 AI Agent 能够安全、自动化操控浏览器完成网页任务与数据采集。
4. **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** ⭐0 (+142 today)  
   领先的 Agent 元控制平台，支持自适应记忆、自学习智能与多智能体协同编排。
5. **[FoundationAgents/OpenManus](https://github.com/FoundationAgents/OpenManus)** ⭐0 (+101 today)  
   纯开源、无围墙的 Agent 运行环境，聚焦多模型兼容与低延迟任务调度。

### 📦 AI 应用
1. **[langgenius/dify](https://github.com/langgenius/dify)** ⭐148,611  
   生产级 Agentic Workflow 开发平台，可视化编排 RAG、Agent 与外部工具集成。
2. **[open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐145,178  
   支持 Ollama/OpenAI/Gemini 等多后端的用户友好型 AI 聊天界面，强调本地优先。
3. **[Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)** ⭐120,490 (+125 today)  
   最强大的模块化扩散模型 GUI 与后端，节点式工作流设计支撑复杂生图/视频管线。
4. **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** ⭐20,605 (+768 today)  
   个人量化交易 Agent，结合市场数据与 LLM 决策实现自动化投资组合管理。
5. **[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)** ⭐0 (+164 today)  
   专为 AI Agent 设计的 HTML 转视频渲染引擎，支持模板化批量视频生成。

### 🧠 大模型/训练
1. **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐86,078  
   高吞吐、低内存占用的 LLM 推理与服务引擎，支持 PagedAttention 与连续批处理。
2. **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐73,203  
   统一高效微调框架，支持 100+ LLM/VLM 的全参数、LoRA、QLoRA 及多模态对齐训练。
3. **[unslothai/unsloth](https://github.com/unslothai/unsloth)** ⭐68,064  
   针对消费级硬件优化的本地 LLM 训练与推理平台，大幅降低显存需求与训练时间。
4. **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** ⭐59,401  
   YOLO 系列视觉模型官方库，覆盖检测、分割、姿态估计与跟踪，工业级精度与速度。
5. **[microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2)** ⭐0 (+22 today)  
   微软开源的原生紧凑结构化潜在表示模型，推动高质量 3D 内容生成进入新阶段。

### 🔍 RAG/知识库
1. **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐84,884  
   融合前沿 RAG 与 Agent 能力的开源检索增强引擎，支持深度文档解析与多路召回。
2. **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐60,677  
   面向 AI Agent 的通用记忆层，实现跨会话持久化、自动摘要与上下文注入。
3. **[getzep/graphiti](https://github.com/getzep/graphiti)** ⭐28,638  
   为 AI Agent 构建实时知识图谱，支持事件追踪、关系推理与动态记忆更新。
4. **[alibaba/zvec](https://github.com/alibaba/zvec)** ⭐14,818  
   阿里开源的轻量级进程内向量数据库，极速检索且无需独立部署服务。
5. **[screenpipe/screenpipe](https://github.com/screenpipe/screenpipe)** ⭐19,796 (+18 today)  
   本地私有 AI 记忆系统，24/7 记录屏幕/语音/交互数据，无缝对接 OpenClaw/Hermes 等 Agent。

---

## 3. 趋势信号分析
今日热榜清晰映射出 AI 开源生态的三大演进方向：**Agent 编排标准化**、**本地化记忆基建崛起**、**垂直场景 ROI 驱动落地**。过去以“提示词工程”为核心的开发模式正被“Agent Harness + MCP 工具链”取代，ECC、Ruflo、Deer-Flow 等项目表明社区已转向构建可插拔、可审计、支持长期运行的智能体操作系统。同时，RAG 领域从单纯向量检索升级为“图谱+记忆+流式更新”的复合架构，Graphiti、Mem0、ZVec 的爆发说明开发者更看重数据的结构化沉淀与低延迟检索。此外，Coding Agent（Gemini CLI、Codex、Claude Code 生态）与垂直

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*