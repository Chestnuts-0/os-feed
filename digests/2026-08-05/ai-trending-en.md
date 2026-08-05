# AI Open Source Trends 2026-08-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-05 05:56 UTC

---



# AI Open Source Trends Report — 2026-08-05

---

## 1. Today's Highlights

TencentDB's Agent Memory project surged +1,111 stars in a single day, signaling enterprise hunger for shared agent memory infra. AirLLM made headlines again with single-GPU 70B inference, while the Rust-native vector database FalkorDB and token-reduction proxy rtk-ai/rtk both posted massive daily gains. A broad wave of agent-skill repositories, multi-agent frameworks, and local-first AI tooling dominated the trending list, reflecting the ecosystem's shift from standalone chatbots to persistent, self-evolving agent platforms.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | Today's Δ | Summary |
|---|---|---|---|
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐28,568 | +1,711 | Runs 70B-class LLM inference on a single 4 GB GPU — a breakthrough for consumer hardware. |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐74,768 | +181 | Rust CLI proxy that cuts LLM token consumption 60–90% on common dev commands, a must-have cost reducer. |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,814 | — | Local-first LLM runner now supporting Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma and more. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐88,213 | — | High-throughput, memory-efficient LLM inference engine; still the gold standard for serving. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐161,197 | — | Web context API for scalable search, scraping, and interaction — essential RAG data pipeline tool. |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | ⭐55,577 | — | 100+ LLM gateway with cost tracking, guardrails, and load balancing; Rust core with Python SDK. |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐31,312 | — | High-performance serving framework for LLMs and multimodal models, strong attention on efficiency. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69,583 | — | Local UI for training Kimi K3, Gemma 4, Qwen3.6, DeepSeek-V4, GLM with memory-efficient fine-tuning. |

### 🤖 AI Agents / Workflows

| Project | Stars | Today's Δ | Summary |
|---|---|---|---|
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐14,099 | +1,111 | Team-level memory hub turning conversations, docs, and code into four reusable agent memory assets. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐225,639 | +616 | "The agent that grows with you" — self-evolving agent framework with persistent skill trees. |
| [livekit/agents](https://github.com/livekit/agents) | ⭐— | +432 | Realtime voice AI agent framework for building conversational agents with WebRTC. |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | ⭐28,388 | — | Official lightweight multi-agent workflow framework from OpenAI. |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐79,317 | — | Long-horizon SuperAgent harness with sandboxes, memory, skills, and sub-agents for hour-long tasks. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐30,970 | +922 | DeepSeek-native terminal coding agent built around prefix-cache stability for long-running sessions. |
| [multica-ai/multica](https://github.com/multica-ai/multica) | ⭐— | +406 | Managed agent platform for turning coding agents into teammates with task tracking and compound skills. |
| [superplanehq/superplane](https://github.com/superplanehq/superplane) | ⭐— | +177 | Open-source control plane for agentic engineering — orchestration, observability, and guardrails. |
| [katanemo/plano](https://github.com/katanemo/plano) | ⭐6,958 | +25 | AI-native proxy server and data plane for agentic apps with smart LLM routing and observability. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐107,904 | — | Makes websites accessible for AI agents; automates browser-based tasks at scale. |

### 📦 AI Applications

| Project | Stars | Today's Δ | Summary |
|---|---|---|---|
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐66,598 | +956 | Give any AI agent eyes to scan Twitter, Reddit, YouTube, GitHub, Bilibili — one CLI, zero API fees. |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | ⭐— | +575 | Open-source AI voice studio: clone, dictate, and create voices locally. |
| [usestrix/strix](https://github.com/usestrix/strix) | ⭐— | +984 | Open-source AI penetration-testing tool for finding and fixing app vulnerabilities autonomously. |
| [uber/ADR](https://github.com/uber/ADR) | ⭐— | +148 | Enterprise AI agent security — observability, benchmarking, and threat detection, deployed at Uber. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐130,599 | +362 | 100+ curated AI agent, skill, and RAG app examples — a practical reference library. |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | ⭐116,403 | +783 | 21 lessons to get started building with generative AI — still a top learning resource. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐28,568 | +1,711 | Also listed here: single 4 GB GPU inference makes cutting-edge LLMs accessible to everyone. |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | ⭐— | +2,297 | AI-powered reverse-engineering and pen-testing skill router for Claude Code, Cursor, Cline, etc. |

### 🧠 LLMs / Training

| Project | Stars | Today's Δ | Summary |
|---|---|---|---|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,764 | — | Unified efficient fine-tuning of 100+ LLMs and VLMs; ACL 2024; still the go-to training framework. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163,347 | — | The definitive model-definition framework for text, vision, audio, and multimodal models. |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | ⭐57,241 | — | Community staple for deepfake and face-swap research and creation. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | ⭐60,212 | — | YOLOv8/v11/v26 — state-of-the-art object detection, segmentation, and classification. |
| [composioHQ/composio](https://github.com/composioHQ/composio) | ⭐29,540 | — | 1,000+ toolkits, tool search, and context management for AI agent integrations. |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐151,375 | — | Agentic workflow and RAG pipeline builder with rich model/tool support; production-ready. |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,814 | — | Local LLM runner with expanding model support including Kimi K2.6, GLM-5.2, DeepSeek. |

### 🔍 RAG / Knowledge

| Project | Stars | Today's Δ | Summary |
|---|---|---|---|
| [shuffledai/rerank](https://github.com/shuffledai/rerank) | ⭐— | (topic) | Lightweight Python & C++ CPU reranking library; essential for improving retrieval quality. |
| [shichenxie/Mem0](https://github.com/shichenxie/Mem0) | ⭐62,552 | — | Universal memory layer for AI agents — persistent, cross-session knowledge retention. |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐38,521 | — | EMNLP 2025 paper: simple and fast retrieval-augmented generation with strong benchmarks. |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐35,253 | — | Modular graph-based RAG system from Microsoft; sets the standard for knowledge-graph RAG. |
| [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) | ⭐5,288 | +182 | Super-fast Graph Database using GraphBLAS — purpose-built as a Knowledge Graph for LLM (GraphRAG). |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,784 | +20 | High-performance Rust vector database and search engine for next-gen AI applications. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,552 | — | Universal memory layer for AI agents with automatic context management. |
| [upstash/context7](https://github.com/upstash/context7) | ⭐60,272 | — | Up-to-date code documentation platform for LLMs and AI code editors. |
| [memodb-io/Acontext](https://github.com/memodb-io/Acontext) | ⭐3,656 | — | Agent Skills as a Memory Layer — persistent context between agent sessions. |
| [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | ⭐26,112 | — | Production-grade RAG and agent orchestration framework with explicit retrieval control. |

---

## 3. Trend Signal Analysis

The dominant signal from today's trending list is the **explosion of agent-memory and agent-skill ecosystems**. Projects like TencentDB-Agent-Memory (+1,111), reverse-skill (+2,297), and hermes-agent (+616) are all solving the same core problem: how do agents retain knowledge and improve over time without re-prompting from scratch? This reflects a maturation past the "first-run demo" phase into production-grade agent infra.

**Rust is the new default for performance-critical AI tooling.** FalkorDB (GraphRAG database), rtk-ai/rtk (token-reduction proxy), DeepSeek-Reasonix (terminal agent), and multiple vector DB entries are all Rust-first, underscoring that the community prioritizes zero-dependency, low-latency AI infrastructure.

**The DeepSeek model wave is reshaping the agent CLI landscape.** DeepSeek-Reasonix and multiple "DeepSeek-native" tools appeared today, capitalizing on DeepSeek's cost-performance advantage. This aligns with the broader industry trend of models becoming commodities — differentiation now lies in agent orchestration, memory, and skills rather than raw inference.

**Local-first and self-hosted remains a powerful undercurrent.** From AirLLM (single-GPU 70B) to Mem0 and local memory layers, the demand for private, on-device, and API-free agent experiences is driving rapid iteration.

---

## 4. Community Hot Spots

- **[zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill)** — +2,297 stars in one day. An AI-powered security research and pen-testing skill router for Claude Code, Cursor, and Cline. The convergence of AI agents and cybersecurity tooling is a high-growth niche; this project bridges both.

- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** — +1,111 stars. Enterprise-grade team memory hub for agents. Large organizations need governed, shared agent memory; Tencent's entry signals that the market is ready for production memory layers.

- **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** — +922 stars, 30,970 total. A DeepSeek-native terminal coding agent built on prefix-cache stability. Demonstrates the shift from model-agnostic wrappers to model-optimized agents.

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — +956 stars, 66,598 total. Zero-API-cost internet access for agents across Twitter, Reddit, YouTube, GitHub, Bilibili. Solves a real pain point: agents without web visibility are blind.

- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** — 74,768 stars, +181 daily. A Rust CLI proxy cutting LLM token usage by 60–90%. As agent costs scale with usage, token-efficiency tools will become table stakes.

- **[FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB)** — +182 stars, 5,288 total. Graph database using GraphBLAS specifically for GraphRAG. The rise of graph-based knowledge retrieval over plain vector search is a key architectural trend to watch.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*