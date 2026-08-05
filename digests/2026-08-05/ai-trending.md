# AI 开源趋势日报 2026-08-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 06:51 UTC

---



# AI 开源趋势日报 | 2026-08-05

---

## 1. 今日速览

今日 AI 开源生态呈现三大主线：**Agent 工程化**成为绝对焦点，Claude Code / Codex / OpenClaw 等 Coding Agent 生态迅速扩张，Skill 库、Harness 框架、多智能体编排工具批量涌现；**边缘推理与成本控制**热度飙升，AirLLM、RTK 等项目直接切入低资源部署与 Token 优化场景；**安全与渗透测试 Agent**异军突起，Strix、Reverse-Skill、Agent-Reach 等工具将 AI 赋能安全研究推向新高度。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | 28,593 | +1,711 | 单张 4GB 显存运行 70B 大模型推理，极致轻量化推理方案 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 74,779 | +181 | CLI 代理工具，可削减 60-90% 的 LLM Token 消耗，开发者降本利器 |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | - | +2,540 | Rust 实现的 PDF 智能分类与文本提取库，支持扫描版/文本版自动路由 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 31,018 | +922 | 原生 DeepSeek AI 编程 Agent，专注 prefix-cache 稳定性优化 |
| [obera/superpowers](https://github.com/obra/superpowers) | - | +653 | 经实战验证的 Agentic Skills 框架与软件开发方法论 |
| [katanemo/plano](https://github.com/katanemo/plano) | 6,960 | +25 | AI 原生代理服务器与数据平面，智能 LLM 路由与可观测性 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 14,199 | +1,111 | 腾讯开源的团队级 Agent 记忆中枢，支持 Chat Memory / Skill / LLM-Wiki / Code-Graph 四资产治理 |
| [livekit/agents](https://github.com/livekit/agents) | - | +432 | 实时语音 AI Agent 框架，支持音视频多模态交互 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 225,664 | +616 | "与你共同成长"的自进化 Agent，社区热门个人助手框架 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | - | +320 | 用编程 Agent 编辑视频，AI 视频制作新范式 |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | - | +585 | 轻量级长时 Agent 循环工程内核，支持 Codex / Claude Code 等多平台 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 66,621 | +956 | 让 AI Agent 拥有"互联网之眼"，零 API 费用读取 Twitter/Reddit/B站等 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | - | +406 | 开源托管 Agent 平台，将编程 Agent 转化为真正协作队友 |
| [superplanehq/superplane](https://github.com/superplanehq/superplane) | - | +177 | 面向 Agentic 工程的开源控制面，任务调度与可观测性一站式 |

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | - | +2,297 | 逆向工程/渗透测试 Skill 路由包，AI 自动路由 + 自进化知识库 |
| [usestrix/strix](https://github.com/usestrix/strix) | 48,517 | +984 | 开源 AI 渗透测试工具，自动发现并修复应用漏洞 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | - | +575 | 开源 AI 语音工作室，支持声音克隆、语音合成与dictation |
| [uber/ADR](https://github.com/uber/uber/ADR) | - | +148 | Uber 企业级 AI Agent 安全框架，可观测性 + 威胁检测已部署生产 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 116,435 | +783 | 微软官方生成式 AI 入门课程，21 课轻松上手 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 130,610 | +362 | 100+ AI Agent、Skills 与 RAG 应用开源合集 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | - | +40 | Compound Engineering 官方插件，支持 Claude Code / Cursor 等 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | - | +126 | 面向科学家的 AI Agent Skills 库，覆盖 158 技能 + 100+ 数据库 |

---

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 73,767 | - | 统一高效微调框架，支持 100+ LLM/VLM，ACL 2024 收录 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 69,591 | - | 本地训练与推理 Kimi K3 / Gemma 4 / Qwen3.6 / DeepSeek-V4 等模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 88,220 | - | 高吞吐、低内存 LLM 推理与服务引擎，业界标杆 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 100,583 | - | 从零用 PyTorch 实现 ChatGPT 级 LLM，手把手教程 |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 31,318 | - | 高性能 LLM 与多模态模型推理框架 |
| [datawhalechina/self-llm](https://github.com/datawhalechina/self-llm) | 31,553 | - | 面向中国开发者的开源大模型微调与部署实战指南 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|---------|-----------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 62,555 | - | AI Agent 通用记忆层，跨会话持久化记忆 |
| [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) | 5,288 | +182 | 基于 GraphBLAS 的超高性能图数据库，专为 LLM GraphRAG 设计 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,784 | +20 | 高性能向量数据库，支持大规模 ANN 搜索 |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | 35,257 | - | 模块化基于图谱的 RAG 系统，微软开源 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 38,525 | - | EMNLP 2025 论文，简单快速的检索增强生成方案 |
| [FalconMCP/Falcon-Skills](https://github.com/FalconMCP/Falcon-Skills) | - | - | MCP + Skills 结合的知识库增强方案（主题搜索中） |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 89,620 | - | Claude Code 跨会话持久上下文记忆，自动压缩与注入 |

---

## 3. 趋势信号分析

**Agent 工程化进入"基础设施期"**：今日热榜最显著特征是围绕 Claude Code、Codex、OpenClaw 等 Coding Agent 的 Skill 库、Harness 框架、多智能体编排工具爆发式增长。`TencentDB-Agent-Memory`、`hermes-agent`、`loopx`、`superplane` 等项目共同指向一个趋势：Agent 已从单点实验走向团队协作与生产级部署，记忆管理、技能路由、任务编排成为新基建。

**边缘推理与成本控制并重**：`airllm`（4GB 跑 70B）和 `rtk`（削减 60-90% Token）同时上榜，反映开发者对"低成本运行大模型"的刚需。这与 DeepSeek-V3/R1 等高性价比模型发布后的生态响应直接相关。

**AI + 安全渗透测试崛起**：`reverse-skill`（+2,297）、`usestrix/strix`（+984）、`Agent-Reach`（+956）等安全类 Agent 工具集中爆发，标志着 AI 赋能红队测试、漏洞挖掘正成为独立赛道，与 2025 年以来 AI Security 主题热度持续攀升的趋势一致。

**Rust 在 AI 基础设施层加速渗透**：`pdf-inspector`、`rtk`、`FalkorDB`、`qdrant` 等 Rust 项目热度不减，反映社区对"高性能 + 零依赖"AI 工具链的持续偏好。

---

## 4. 社区关注热点

- **🔥 [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** — 腾讯团队级 Agent 记忆中枢，四资产治理（Chat Memory / Skill / LLM-Wiki / Code-Graph）填补企业级 Agent 记忆管理空白，今日 +1,111 stars 领跑 Trending。

- **🔥 [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill)** — 逆向工程/渗透测试 Skill 路由包，支持 Claude Code / Cursor / Cline 等主流 AI 编程客户端，今日 +2,297 stars 单日增速极高，AI 安全赛道标志性项目。

- **📌 [lyogavin/airllm](https://github.com/lyogavin/airllm)** — 单 4GB 显存运行 70B 模型的推理方案，对消费级 GPU 用户极具吸引力，长期位居 LLM 高效推理领域 Top 项目。

- **📌 [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — 零 API 费用读取全互联网（Twitter/Reddit/B站/小红书等），为 Agent 赋予"眼睛"，+956 stars 今日表现强劲。

- **📌 [rtk-ai/rtk](https://github.com/rtk-ai/rtk)** — CLI 代理削减 60-90% Token 消耗，直击开发者成本控制痛点，Rust 单二进制零依赖架构，+181 stars 持续积累。

---

*报告生成时间：2026-08-05 | 数据来源：GitHub Trending + GitHub Search API (topic: llm, ai-agent, rag, gen-ai, vector-db, deep-learning, transformer)*

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*