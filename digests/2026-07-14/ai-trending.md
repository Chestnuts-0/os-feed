# AI 开源趋势日报 2026-07-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-14 01:25 UTC

---



# 📊 AI 开源趋势日报 | 2026-07-14

## 1. 今日速览
今日 AI 开源生态呈现“Agent 工程化与本地化双轮驱动”态势。多智能体编排框架（LangGraph、Deer-Flow）与记忆/知识图谱基础设施（Mem0、Graphiti）集中爆发，标志着 AI 应用正从单点对话迈向具备长期状态感知与自主规划能力的复杂工作流。同时，Ollama、Gemini CLI 等终端原生工具的持续升温，以及 RAGFlow、LlamaIndex 在检索增强领域的深化，反映出开发者对低成本、高可控、可私有化部署的 AI 基建需求激增。垂直场景（量化金融、离线生存、自托管视频）的开源代理快速涌现，验证了 AI 技术正加速向专业领域渗透。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
1. **`ollama/ollama`** [GitHub](https://github.com/ollama/ollama) | ⭐176k (+82)  
   极简本地大模型运行环境，今日新增对 Kimi-K2.6、GLM-5.1 等模型的支持，大幅降低终端 AI 调用门槛。
2. **`vllm-project/vllm`** [GitHub](https://github.com/vllm-project/vllm) | ⭐86k  
   业界领先的高吞吐 LLM 推理引擎，持续优化 PagedAttention 与连续批处理，是企业级私有化部署的首选基座。
3. **`google/gemini-cli`** [GitHub](https://github.com/google-gemini/gemini-cli) | ⭐105k  
   Google 官方推出的终端 AI 编程助手，将 Gemini 的多模态与代码理解能力直接注入开发者命令行工作流。
4. **`continuedev/continue`** [GitHub](https://github.com/continuedev/continue) | ⭐34k  
   开源跨平台代码智能体，支持多模型路由与自定义上下文规则，正快速替代部分闭源 IDE 插件。
5. **`unslothai/unsloth`** [GitHub](https://github.com/unslothai/unsloth) | ⭐68k  
   极致加速的微调框架，通过算子融合与显存优化，使消费级显卡也能高效完成 70B+ 模型的指令微调。

### 🤖 AI 智能体/工作流
1. **`bytedance/deer-flow`** [GitHub](https://github.com/bytedance/deer-flow) | ⭐76k  
   字节跳动开源的长周期 SuperAgent 框架，内置沙箱执行、动态记忆与多子智能体协作，适合复杂自动化任务。
2. **`OpenHands/OpenHands`** [GitHub](https://github.com/OpenHands/OpenHands) | ⭐80k  
   AI 驱动的软件开发智能体，可自主解析 Issue、规划步骤并生成修复代码，在 SWE-bench 基准上表现亮眼。
3. **`langchain-ai/langgraph`** [GitHub](https://github.com/langchain-ai/langgraph) | ⭐37k  
   基于有向图构建 resilient agents 的核心框架，支持状态持久化、循环控制与人工介入，是生产级 Agent 的标配。
4. **`simstudioai/sim`** [GitHub](https://github.com/simstudioai/sim) | ⭐29k (+23)  
   面向企业 AI 工作力的中央编排层，提供 Agent 部署、监控、策略管控与多智能体协同的完整生命周期管理。
5. **`google/adk-python`** [GitHub](https://github.com/google/adk-python) | ⭐20k  
   Google 官方发布的 Agent 开发套件 (ADK)，提供代码优先的构建、评估与部署能力，强化了对复杂 Agent 的控制力。

### 📦 AI 应用
1. **`langgenius/dify`** [GitHub](https://github.com/langgenius/dify) | ⭐148k  
   低代码/无代码 AI 应用开发平台，集成可视化工作流、RAG 与 Agent 能力，社区插件生态极为活跃。
2. **`open-webui/open-webui`** [GitHub](https://github.com/open-webui/open-webui) | ⭐145k  
   开箱即用的开源 AI 聊天前端，完美兼容 Ollama 与 OpenAI API，支持插件扩展、多租户与本地化部署。
3. **`Anil-matcha/Open-Generative-AI`** [GitHub](https://github.com/Anil-matcha/Open-Generative-AI) | ⭐23k  
   自托管的无内容过滤 AI 视频/图像生成工作室，集成 Flux、Sora、Kling 等 200+ 模型，满足创意自由需求。
4. **`virattt/ai-hedge-fund`** [GitHub](https://github.com/virattt/ai-hedge-fund) | ⭐330 (today)  
   AI 对冲基金团队模拟框架，利用多智能体多空辩论与历史数据回测，探索量化金融的 AI 落地路径。
5. **`Crosstalk-Solutions/project-nomad`** [GitHub](https://github.com/Crosstalk-Solutions/project-nomad) | ⭐370 (today)  
   离线生存计算机项目，预装 AI 工具链与关键知识库，专为极端断网环境下的信息获取与技能维持设计。

### 🧠 大模型/训练
1. **`huggingface/transformers`** [GitHub](https://github.com/huggingface/transformers) | ⭐162k  
   Hugging Face 核心库，统一了文本、视觉、音频等多模态模型的训练与推理接口，是整个开源 AI 生态的基石。
2. **`hiyouga/LlamaFactory`** [GitHub](https://github.com/hiyouga/LlamaFactory) | ⭐73k  
   一站式大模型微调平台，支持 LoRA/Q-LoRA/全参等多种策略，对中文社区及垂直领域适配极友好。
3. **`deepspeedai/DeepSpeed`** [GitHub](https://github.com/deepspeedai/DeepSpeed) | ⭐42k  
   微软开源的分布式训练加速库，通过 ZeRO 等技术实现万亿参数模型的高效训练与推理，工业界广泛采用。
4. **`ray-project/ray`** [GitHub](https://github.com/ray-project/ray) | ⭐43k  
   AI 计算引擎，提供 Ray Train/Ray Serve 等组件，是大规模分布式机器学习、超参搜索与 RLHF 的事实标准。
5. **`modular/modular`** [GitHub](https://github.com/modular/modular) | ⭐26k  
   包含 MAX AI 平台与 Mojo 语言的新一代 AI 开发栈，旨在打通从底层硬件算子到上层应用的研发链路。

### 🔍 RAG/知识库
1. **`infiniflow/ragflow`** [GitHub](https://github.com/infiniflow/ragflow) | ⭐84k  
   深度融合 Agent 能力的开源 RAG 引擎，支持深度文档解析、多路检索与可视化编排，企业级知识问答首选。
2. **`run-llama/llama_index`** [GitHub](https://github.com/run-llama/llama_index) | ⭐50k  
   文档智能与 OCR 平台，提供丰富的数据连接器与上下文工程工具，是构建企业级 RAG 应用的核心框架。
3. **`mem0ai/mem0`** [GitHub](https://github.com/mem0ai/mem0) | ⭐60k  
   为 AI Agent 打造的通用记忆层，支持会话缓冲、向量存储与知识图谱，有效解决大模型“上下文遗忘”痛点。
4. **`qdrant/qdrant`** [GitHub](https://github.com/qdrant/qdrant) | ⭐33k  
   高性能 Rust 向量数据库，提供毫秒级相似性搜索与混合检索能力，支撑海量非结构化数据的实时索引。
5. **`microsoft/graphrag`** [GitHub](https://github.com/microsoft/graphrag) | ⭐34k  
   微软开源的基于知识图谱的 RAG 系统，擅长处理多跳推理与全局上下文，大幅提升复杂问答的准确率与可解释性。

---

## 3. 趋势信号分析
今日榜单清晰映射出 AI 开源从“模型

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*