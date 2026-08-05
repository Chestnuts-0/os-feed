# AI 开源趋势日报 2026-08-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 06:19 UTC

---



# AI 开源趋势日报 | 2026-08-05

## 一、今日速览

今日 AI 开源生态呈现**"Agent 基础设施爆发"**格局：腾讯、Uber 等大厂同时推出企业级 Agent Memory 与安全治理方案，反映 AI Agent 正从实验走向生产。同时，**Token 成本优化**成为独立赛道，rtk、headroom 等代理工具声称可减少 60-90% 的 LLM 消耗。Rust 在 AI 基础设施层继续蚕食市场份额，从向量数据库到推理引擎均有新玩家入局。

---

## 二、各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐74,771 | +181 | CLI 代理，通过上下文压缩减少 60-90% LLM token 消耗，零依赖单二进制 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐30,997 | +922 | DeepSeek 原生终端 AI 编码代理，针对 prefix-cache 稳定性优化 |
| [livekit/agents](https://github.com/livekit/agents) | - | +432 | 实时语音 AI Agent 框架，支持多模态交互 |
| [katana/ai/plano](https://github.com/katanemo/plano) | ⭐6,960 | +25 | AI 原生代理网关，智能 LLM 路由、可观测性与护栏 |
| [microsoft/ADR](https://github.com/uber/ADR) | - | +148 | Uber 已部署的 AI Agent 可观测性与安全基准测试框架 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐225,648 | +616 | "随你成长的 Agent"，支持自我进化与多模型 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐14,140 | +1111 | 团队级 Agent 记忆中心，将对话/文档/代码转化为可复用资产 |
| [obra/superpowers](https://github.com/obra/superpowers) | - | +653 | Agentic 技能框架与软件开发方法论 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | - | +406 | 开源托管 Agent 平台，任务分配与进度追踪 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | - | +320 | 用编码 Agent 编辑视频，browser-use 生态延伸 |
| [superplanehq/superplane](https://github.com/superplanehq/superplane) | - | +177 | Agentic 工程控制面，开源平台 |

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐28,583 | +1711 | 单张 4GB GPU 运行 AirLLM 70B 推理，极致轻量化 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | - | +575 | 开源 AI 语音工作室，克隆/ Dictation/创作 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐66,606 | +956 | 给 AI Agent 装眼睛：CLI 访问 Twitter/Reddit/YouTube/GitHub 等，零 API 费用 |
| [usestrix/strix](https://github.com/usestrix/strix) | ⭐- | +984 | 开源 AI 渗透测试工具，自动发现与修复漏洞 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | - | +2297 | 逆向工程/渗透测试技能路由包，支持 Claude Code/Cursor 等 |
| [leon-ai/leon](https://github.com/leon-ai/leon) | ⭐17,411 | - | 开源个人 AI 助手，跨平台 |

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,816 | - | 本地运行 Kimi-K2.6、GLM-5.2、DeepSeek 等模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐88,215 | - | 高吞吐 LLM 推理引擎 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,765 | - | 100+ LLM/VLM 统一高效微调框架 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69,586 | - | 本地 UI 训练 Kimi K3、Gemma 4、Qwen3.6 等 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐100,581 | - | 从零用 PyTorch 实现 ChatGPT 级 LLM |

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,784 | +20 | 高性能向量数据库与搜索引擎 |
| [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) | ⭐5,288 | +182 | 基于 GraphBLAS 的超高速图数据库，面向 GraphRAG |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐35,255 | - | 模块化基于图的 RAG 系统 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐38,523 | - | EMNLP2025 简单快速检索增强生成 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,553 | - | AI Agent 通用记忆层 |

---

## 三、趋势信号分析

**1. Agent 基础设施进入"后处理"阶段**：今日热榜最显著的特征是围绕 Agent 的**记忆、安全、成本优化**等"后处理"层爆发。腾讯 DB-Agent-Memory、Uber ADR、rtk 代理压缩、headroom 上下文压缩等项目同时登榜，说明社区关注点已从"如何构建 Agent"转向"如何让 Agent 在生产环境可靠运行"。

**2. Token 成本成为独立赛道**：rtk（-60-90% token 消耗）、caveman（节省 65% token）、xerj（比 grep 少 40x token）等项目集中出现，反映 LLM 调用成本压力正推动一批"代理中间件"兴起。

**3. Rust 在 AI 基础设施层持续渗透**：从向量数据库（qdrant、FalkorDB）、推理引擎（airllm）、代理网关（plano、rtk）到文档处理（firecrawl/pdf-inspector），Rust 正成为 AI 系统层的首选语言。

**4. 中国开发者活跃度显著提升**：Agent-Reach（零 API 爬取多平台）、reverse-skill（AI 安全技能路由）、airllm（单卡 70B 推理）等由中国开发者主导的项目今日获得大量关注。

---

## 四、社区关注热点

- **TencentCloud/TencentDB-Agent-Memory** — 大厂首次系统性推出团队级 Agent 记忆方案，将 Chat Memory/Skill/LLM-Wiki/Code-Graph 四类资产标准化，值得关注其治理模型与跨框架兼容性。

- **rtk-ai/rtk** — 作为"AI 代理压缩层"的代表，声称减少 60-90% token 消耗，为高频调用场景（如 CI/CD 中的 AI 编码）提供即插即用的解决方案。

- **Panniantong/Agent-Reach** — 解决 AI Agent 信息获取的"最后一公里"问题，无需 API Key 即可访问 Twitter/Reddit/YouTube 等平台，对研究类 Agent 有直接价值。

- **NousResearch/hermes-agent** — 总 Star 超 22 万，"自我进化"标签契合社区对 Agent 长期学习的期待，适合关注 Agent 记忆与技能积累机制的开发者。

- **lyogavin/airllm** — 单卡 4GB 运行 70B 模型的突破，降低本地 LLM 部署门槛，对边缘 AI 与个人开发者极具吸引力。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*