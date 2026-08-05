# AI 开源趋势日报 2026-08-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 05:56 UTC

---



# 🤖 AI 开源趋势日报 — 2026-08-05

---

## 一、今日速览

今日 AI 开源生态呈现三大核心趋势：**Agent 技能化与记忆基建爆发**（TencentDB-Agent-Memory 单日 +1111 stars，mem0、headroom、Mempalace 等内存/压缩方案密集上榜）；**Token 成本优化成为刚需**（rtk 降价 60–90% 的 CLI 代理、caveman 用"洞穴人"风格节省 65% token）；**垂直场景 Agent 快速落地**，涵盖视频生成、A 股投研、安全渗透、小说创作等细分领域，显示 AI 应用正从通用框架向行业专用 Agent 快速演进。

---

## 二、各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|---------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,814 | — | 本地运行 Kimi-K2.6、GLM-5.2、DeepSeek、Qwen 等 40+ 大模型的推理框架，支持一键部署 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐88,213 | — | 高吞吐 LLM 推理引擎，支持 PagedAttention，是当前开源推理服务的事实标准 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐74,768 | +181 today | Rust 编写的 CLI 代理，可将常见开发命令的 LLM token 消耗降低 60–90%，零依赖单二进制 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | ⭐106,368 | — | Google 官方开源终端 AI Agent，将 Gemini 能力直接带入命令行 |
| [continue/continue](https://github.com/continuedev/continue) | ⭐35,324 | — | 开源 coding agent，支持多模型、多 IDE，专注本地优先的 AI 编程体验 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐30,970 | +922 today | DeepSeek 原生 AI 编程 Agent，围绕 prefix-cache 稳定性设计，可长时间运行 |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | ⭐26,707 | — | 通义千问开源终端 AI 编程 Agent，支持多模型切换 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|---------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐225,639 | +616 today | "与你共同成长"的自进化 Agent 框架，社区活跃度极高 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐38,910 | — | 构建容错 Agent 的图结构框架，支持复杂多步工作流与人工审核节点 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐79,317 | — | 字节开源长周期 SuperAgent，支持沙箱、记忆、技能、子 Agent 编排，可处理数小时级任务 |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | ⭐28,388 | — | OpenAI 官方轻量多 Agent 工作流框架，结构化 Agent 定义与工具调用 |
| [livekit/agents](https://github.com/livekit/agents) | ⭐0 | +432 today | 实时语音 AI Agent 框架，支持通话、会议等低延迟语音交互场景 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐107,904 | +320 today | 让 AI Agent 具备浏览器操作能力，自动化网页任务 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | ⭐0 | +406 today | 开源托管 Agent 平台，支持任务分配、进度追踪、技能累积，将 Coding Agent 变真正"队友" |
| [uber/ADR](https://github.com/uber/ADR) | ⭐0 | +148 today | Uber 企业级 AI Agent 安全框架，提供可观测性、安全基准测试与威胁检测 |

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|---------|------|
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐28,568 | +1711 today | 单块 4GB GPU 即可推理 AirLLM 70B 模型，大幅降低大模型本地部署门槛 |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | ⭐0 | +2540 today | Rust 编写的 PDF 智能解析库，自动区分扫描版/文本版 PDF 并路由处理 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | ⭐0 | +2297 today | AI 逆向/渗透安全技能路由包，支持 Claude Code/Cursor/Cline 等，按需自举工具链 |
| [usestrix/strix](https://github.com/usestrix/strix) | ⭐48,479 | +984 today | 开源 AI 渗透测试工具，帮助发现和修复应用漏洞 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐66,598 | +956 today | 赋予 AI Agent "眼睛"，CLI 一键读取 Twitter、Reddit、YouTube、GitHub、B站等全网内容，零 API 费用 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | ⭐0 | +811 today | 让 AI 拥有"好品味"的技能包，阻止 AI 生成平庸、千篇一律的代码/文本 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | ⭐0 | +126 today | 158 个科学 Agent 技能 + 100+ 科学数据库，将任何 AI Agent 转化为 AI 科学家 |
| [harry0303/MoneyPrinterTurbo](https://github.com/harry0303/MoneyPrinterTurbo) | ⭐101,649 | — | 基于 AI 大模型+自动化工作流，根据主题/关键词一键生成高清短视频 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|---------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163,347 | — | Hugging Face 主流 LLM/VLM 框架，支持推理与微调，社区生态最丰富 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,764 | — | 统一高效微调 100+ LLM/VLM 工具，ACL 2024，支持全参数/LoRA |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69,583 | — | 本地训练与推理 Kimi K3、Gemma 4、Qwen3.6、DeepSeek-V4 等模型的 UI 工具 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐100,579 | — | 从零用 PyTorch 实现类 ChatGPT 大模型的分步教程，教育类标杆项目 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐31,312 | — | 高性能 LLM 和多模态模型 serving 框架，推理速度业界领先 |
| [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni) | ⭐5,857 | — | vLLM 多模态推理框架，支持视觉+文本联合推理 |

---

### 🔍 RAG / 知识库 / 向量数据库

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|---------|------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,552 | — | AI Agent 通用记忆层，跨会话持久化存储与检索，已集成主流 Agent 框架 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐14,099 | +1111 today | 团队级 Agent 记忆中枢，将对话/文档/代码转化为 Chat Memory、Skill、LLM-Wiki、Code-Graph 四类资产 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐64,835 | — | 在工具输出/日志/文件到达 LLM 前进行智能压缩，编码 Agent 节省 20% token，JSON 节省 60–95% |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | ⭐58,073 | — | 基准测试最优的开源 AI 记忆系统，免费自托管 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,784 | +20 today | 高性能向量数据库，支持大规模 ANN 搜索，AGI 基础设施核心组件 |
| [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) | ⭐5,288 | +182 today | 基于 GraphBLAS 的超快图数据库，专为 LLM GraphRAG 知识图谱设计 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐102,643 | — | 将任意代码库、文档、SQL schema 转化为可查询知识图谱，确定性 AST 解析，无需向量库 |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐35,253 | — | 微软开源图增强检索（GraphRAG）系统，多跳推理场景下 RAG 效果显著优于传统方案 |

---

## 三、趋势信号分析

**Agent 技能化（Skills）成为今日最大热点。** 从 `taste-skill`（+811）、`reverse-skill`（+2297）、`claude-skills`（+83，总量 23k+）、`scientific-agent-skills`（+126）到 `awesome-agent-skills`（29k stars），社区正围绕"Agent 技能注册表"构建标准化生态，类似 VS Code 扩展市场的 Agent 技能经济正在形成。

**Token 成本优化从辅助工具升级为核心刚需。** `rtk`（-60~90% token）、`headroom`（压缩工具输出）、`caveman`（"洞穴人"风格省 65% token）同日登榜，说明在 Agent 高频调用 LLM 的场景下，**上下文工程（Context Engineering）** 已从高级技巧变为基础设施级需求。

**Rust 在 AI 基础设施层快速渗透。** `pdf-inspector`、`rtk`、`FalkorDB`、`xberg` 等高性能 AI 组件均选用 Rust，反映社区对低延迟、低内存占用的 AI 原生日益重视。

**与近期事件的关联：** 今日 `airllm`（+1711）的热度与 70B 级模型本地单卡推理需求直接相关，`DeepSeek-Reasonix`（+922）呼应 DeepSeek 模型生态的持续热度，`hermes-agent`（NousResearch 出品）则得益于开源 Agent 框架的新一轮社区扩散。

---

## 四、社区关注热点

- **TencentCloud/TencentDB-Agent-Memory** — 今日 +1111 stars 榜首，腾讯开源的团队级 Agent 记忆中枢，将对话/文档/代码转化为可治理、可共享的四类记忆资产，是 Agent 记忆基础设施的代表作。
- **zhaoxuya520/reverse-skill** — 今日 +2297 stars，国内首个 AI 安全技能路由包，支持 Claude Code/Cursor/Cline 等主流编码 Agent，将安全渗透能力以 Skill 形式标准化。
- **lyogavin/airllm** — 今日 +1711 stars，单 4GB GPU 跑 70B 模型的推理方案，大幅降低大模型本地部署门槛，对消费级硬件用户极具吸引力。
- **Panniantong/Agent-Reach** — 今日 +956 stars，零 API 费用的全网内容读取 Agent，支持 Twitter/Reddit/YouTube/B站/小红书，对需要实时外部信息接入的 Agent 应用极具价值。
- **headroomlabs-ai/headroom** — 65k stars，LLM 上下文压缩代理/库/MCP Server 三合一方案，解决 Agent 工具输出过长导致 token 爆炸的核心痛点，已被多家生产环境采用。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*