# AI 开源趋势日报 2026-07-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-16 01:42 UTC

---



# 📊 AI 开源趋势日报 | 2026-07-16

## 1. 今日速览
今日 AI 开源生态呈现明显的**工程化与可控化**转向：终端智能体（CLI Agent）与 Skill 标准化生态全面爆发，开发者重心从“调用模型”快速迁移至“编排、优化与安全护栏”。Rust 与 Go 正加速接管 AI 基础设施层，在推理网关、MCP 代理与底层运行时展现统治力。同时，RAG 技术跨越传统向量检索阶段，向“持久记忆+知识图谱+多智能体协同”的生产级架构演进，本地优先与隐私计算需求在应用层持续升温。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- **[openai/codex](https://github.com/openai/codex)** `⭐0 (+423 今日新增)`  
  轻量级终端编码智能体，直接嵌入开发者命令行工作流，降低多模型调用门槛。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** `⭐86,353 (+104 今日新增)`  
  高吞吐、低显存占用的大模型推理与部署引擎，持续保持行业基准性能。
- **[QuantumNous/new-api](https://github.com/QuantumNous/new-api)** `⭐0 (+120 今日新增)`  
  统一 AI 模型网关，支持多厂商 API 聚合与 OpenAI/Claude/Gemini 格式无缝转换。
- **[agentgateway/agentgateway](https://github.com/agentgateway/agentgateway)** `⭐0 (+39 今日新增)`  
  面向 AI Agent 与 MCP 服务器的下一代代理网关，解决跨平台路由与状态管理。
- **[microsoft/agent-framework-go](https://github.com/microsoft/agent-framework-go)** `⭐0 (+34 今日新增)`  
  微软官方 Go 语言智能体构建框架，提供多智能体工作流编排与企业级部署支持。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** `⭐0 (+1,236 今日新增)`  
  收录 100+ 可一键克隆部署的 AI 智能体与 RAG 应用模板，加速产品验证。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** `⭐0 (+1,623 今日新增)`  
  将代码库、SQL 架构与文档自动转化为可查询知识图谱，为智能体提供结构化上下文。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** `⭐0 (+458 今日新增)`  
  专注 Claude Code/Codex 等智能体的性能优化系统，覆盖技能管理、内存压缩与安全策略。
- **[browseros-ai/BrowserOS](https://github.com/browseros-ai/BrowserOS)** `⭐0 (+219 今日新增)`  
  开源 Agentic 浏览器，替代 ChatGPT Atlas/Perplexity Comet 实现网页自动化与深度研究。
- **[Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard)** `⭐0 (+471 今日新增)`  
  为 AI 编码智能体提供危险 Git/Shell 命令拦截机制，保障自动化流水线安全。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- **[OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)** `⭐0 (+1,664 今日新增)`  
  开源版 CapCut 替代品，全浏览器端专业视频剪辑工具，零上传、无水印。
- **[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI)** `⭐0 (+171 今日新增)`  
  自托管无内容过滤的 AI 图像/视频生成工作室，集成 Flux/Kling/Sora 等 200+ 模型。
- **[Tencent/WeKnora](https://github.com/Tencent/WeKnora)** `⭐0 (+80 今日新增)`  
  腾讯开源 LLM 知识平台，将原始文档转化为可查询 RAG、自主推理智能体与自维护 Wiki。
- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** `⭐0 (+172 今日新增)`  
  终身个性化 AI 辅导系统，支持自适应教学路径规划与长期学习记忆。
- **[moeru-ai/airi](https://github.com/moeru-ai/airi)** `⭐0 (+110 今日新增)`  
  自托管 Gok 伴侣 AI，支持实时语音交互、游戏陪伴与多端跨平台部署。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** `⭐73,309`  
  统一高效微调 100+ LLM/VLM 的训练框架，支持 LoRA/QLoRA 与全参数微调。
- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** `⭐68,271`  
  本地化训练与运行开源大模型的加速引擎与 Web UI，显著降低硬件门槛。
- **[sgl-project/sglang](https://github.com/sgl-project/sglang)** `⭐30,348`  
  面向大语言模型与多模态模型的高性能推理服务框架，支持复杂调度与低延迟。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** `⭐145,559`  
  用户友好的本地优先 AI 对话界面，无缝集成 Ollama 及各大模型 API。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** `⭐162,632`  
  业界标准的 NLP/CV/Audio 多模态模型定义、预训练与推理框架。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- **[langgenius/dify](https://github.com/langgenius/dify)** `⭐

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*