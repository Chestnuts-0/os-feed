# AI 开源趋势日报 2026-08-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-06 01:29 UTC

---



# AI 开源趋势日报 | 2026-08-06

---

## 1. 今日速览

今日 AI 开源生态呈现**Agent 工程化**全面爆发的态势：OpenAI Codex 独立开源、腾讯云推出团队级 Agent Memory 平台、字节跳动 Deer-Flow 超智能体框架持续领跑。本地推理与成本优化成为焦点——AirLLM 单卡 4GB 推理 70B 模型、RTK CLI 代理减少 60-90% Token 消耗。与此同时，AI 安全与渗透测试赛道涌现 usestrix/strix、Uber ADR 等项目，社区对 Agent 可观测性、沙箱化和企业级治理的关注显著提升。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|---------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,875 | — | 本地运行 LLM/VLM/语音/图像的一体化引擎，支持 DeepSeek、Qwen、GLM 等主流模型，今日仍稳居 llm topic 榜首 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | ⭐55,650 | +104 | Rust 核心的 AI Gateway，统一调用 100+ LLM API，支持成本追踪、负载均衡与 guardrails，Agent 基础设施标配 |
| [openai/codex](https://github.com/openai/codex) | ⭐104,186 | +268 | OpenAI 开源终端编码 Agent，轻量级 Rust 实现，今日登榜印证 Agent CLI 工具链的社区热度 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐74,918 | — | Rust CLI 代理，对常见开发命令可减少 60-90% Token 消耗，解决 Agent 上下文膨胀痛点 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐65,052 | — | 压缩工具输出、日志和 RAG chunk 的智能前置层，Coding Agent 降本利器 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐29,104 | +833 | 单卡 4GB GPU 即可推理 AirLLM 70B 模型，今日 +833 stars 领跑，反映边缘推理需求激增 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69,614 | — | 本地微调 Kimi K3、Gemma 4、DeepSeek-V4 等模型的高效 UI 工具，ACL 级优化 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|---------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐226,082 | +601 | "与你共同成长的 Agent"，可进化技能树的开源智能体框架，今日持续高热 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐79,367 | — | 字节跳动开源 SuperAgent 框架，支持长期任务规划、沙箱、记忆、子 Agent，面向分钟级至小时级复杂任务 |
| [openhands/openhands](https://github.com/OpenHands/OpenHands) | ⭐83,222 | — | AI 驱动的全栈开发平台，支持自主编码、调试、部署，OpenHands 生态持续扩张 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐15,090 | +1,892 | **今日最大黑马**：团队级 Agent 记忆中枢，将对话/文档/代码转化为 Chat Memory、Skill、LLM-Wiki、Code-Graph 四重资产，支持跨 Agent 共享 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | ⭐38,989 | — | 构建 resilient Agent 的核心框架，支持复杂状态机与工作流编排 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⭐22,194 | +363 | 终端 AI 编码 Agent，支持 hash-anchored 编辑、LSP、Python 集成、子 Agent，对标 Claude Code |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐31,641 | +747 | DeepSeek 原生终端编码 Agent，围绕 prefix-cache 稳定性设计，适合长时间运行场景 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | ⭐44,272 | +332 | 开源托管 Agent 平台，支持任务分配、进度追踪、技能累积，面向团队协作场景 |

---

### 📦 AI 应用

| 项目 | Stars |今日新增 | 说明 |
|------|-------|---------|------|
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | ⭐123,978 | +237 | 最强大的模块化扩散模型 GUI，节点式工作流设计，Stable Diffusion 生态核心工具 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐151,465 | — | 可视化构建 Agentic 工作流与 RAG Pipeline 的协作平台，支持云端/VPC/自托管 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐147,978 | — | 用户友好的本地 AI 聊天界面，支持 Ollama、OpenAI API 等多模型接入 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐101,772 | — | 一键 AI 短视频生成工具，基于自动化工作流从主题生成高清视频 |
| [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | ⭐28,837 | — | 自主研究 Agent，可调用任意 LLM 对任何数据源进行深度研究 |
| [Khoj-AI/khoj](https://github.com/khoj-ai/khoj) | ⭐36,291 | — | 本地优先的 AI 第二大脑，支持自托管、自定义 Agent、定时自动化与深度研究 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐107,990 | — | 让 AI Agent 能够无障碍操控网页，自动化浏览器任务，今日 companion 项目 video-use 亦登榜 |

---

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|---------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163,377 | — | ML 领域基石框架，支持文本/视觉/音频/多模态模型的推理与训练，生态核心 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,813 | — | 统一高效微调 100+ LLM/VLM 的框架，ACL 2024 认可，国产微调工具标杆 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐88,283 | — | 高吞吐、低内存的 LLM 推理与服务引擎，PagedAttention 技术代表 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐100,646 | — | 从零用 PyTorch 实现 ChatGPT 级 LLM 的分步教程，社区影响力持续攀升 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐54,362 | — | 2 小时从 0 训练 64M 参数小 LLM 的教学项目，降低入门门槛 |
| [google/langextract](https://github.com/google/langextract) | ⭐37,978 | — | 用 LLM 从非结构化文本中精确提取结构化信息，带源可追溯性 |
| [google/osv.dev](https://github.com/google/osv.dev) | ⭐2,867 | +4 | Google 开源漏洞数据库，AI 安全分析基础设施 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|---------|------|
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐35,299 | — | 模块化图基 RAG 系统，结合知识图谱与检索增强，提升复杂问答准确率 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐86,910 | — | 融合前沿 RAG 与 Agent 能力的开源引擎，支持复杂文档理解与多轮推理 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,612 | — | AI Agent 通用记忆层，跨会话持久化上下文，支持多种 Agent 框架接入 |
| [getzep/graphiti](https://github.com/getzep/graphiti) | ⭐29,597 | — | 为 AI Agent 构建实时知识图谱，支持事件驱动的知识更新 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,025 | — | 无向量、基于推理的 RAG 文档索引方案，减少向量存储依赖 |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐16,183 | — | 单文件无服务器记忆层，替代复杂 RAG Pipeline，即时检索+长期记忆 |
| [upstash/context7](https://github.com/upstash/context7) | ⭐60,317 | — | 为

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*