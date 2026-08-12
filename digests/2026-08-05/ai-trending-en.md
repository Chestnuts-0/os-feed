# AI Open Source Trends 2026-08-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-05 07:33 UTC

---



# AI Open Source Trends Report — 2026-08-05

---

## 1. Today's Highlights

GitHub's AI open-source ecosystem is surfacing a clear narrative: **agent memory and token efficiency** are the hottest problems developers are solving right now. The single biggest signal today is the explosion of agent memory layers (mem0, MemOS, TencentDB-Agent-Memory) and token-reduction tooling (rtk, headroom, xerj), reflecting a maturing field that's moving past prototype RAG into production-grade agent reliability. Meanwhile, **DeepSeek-native coding agents** (DeepSeek-Reasonix) and **local-first multi-model workbenches** (AirLLM, Gortex) signal that the community is actively building around the new generation of efficient open models, not just chasing proprietary APIs.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | Today | What It Is |
|---------|-------|-------|------------|
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐74,790 (+181) | CLI proxy that reduces LLM token consumption by 60-90% on common dev commands — single Rust binary, zero dependencies. Solves the #1 cost problem for coding agents. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐28,618 (+1,711) | Runs 70B-class LLM inference on a single 4GB GPU — critical infrastructure for democratizing access to capable models without enterprise hardware. |
| [zzet/gortex](https://github.com/zzet/gortex) | ⭐1,080 (+59) | Rust code-intelligence engine for AI agents: indexes 257 languages across multi-repo graphs, cutting token usage up to 50× via MCP/API. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐31,050 (+922) | DeepSeek-native AI coding agent for the terminal, engineered for prefix-cache stability — designed to run unattended for long horizons. |
| [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) | ⭐5,291 (+182) | Graph database using GraphBLAS for sparse adjacency matrices — purpose-built as a knowledge graph engine for GraphRAG pipelines. |
| [quickwit-oss/tantivy](https://github.com/quickwit-oss/tantivy) | ⭐15,650 | Full-text search engine library in Rust, inspired by Lucene — the backbone for local-first RAG and agent document search. |

### 🤖 AI Agents / Workflows

| Project | Stars | Today | What It Is |
|---------|-------|-------|------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐225,683 (+616) | Self-growing agent framework that evolves skills and memory over time — one of the largest agent repos on GitHub, signaling massive community interest in persistent, evolving agents. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | ⭐66,639 (+956) | CLI tool giving AI agents eyes to browse the entire internet — Twitter, Reddit, YouTube, GitHub, Bilibili — one command, zero API fees. |
| [livekit/agents](https://github.com/livekit/agents) | ⭐12,558 (+432) | Framework for building real-time voice AI agents with low-latency streaming — bridges the gap between chat bots and conversational assistants. |
| [multica-ai/multica](https://github.com/multica-ai/multica) | ⭐44,052 (+406) | Managed multi-agent platform: assign tasks, track progress, compound skills across agent teams — moves agents from solo to squad. |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | ⭐16,485 | Self-healing browser automation harness for AI agents — enables agents to complete any web-based task with resilience. |
| [cookiecutter/claude-code](https://github.com/nothomaszz/claude-code) | ⭐16,309 (+48) | Agent skills for Claude Code covering 25+ languages — reflects the rapid professionalization of the Claude Code skills ecosystem. |

### 📦 AI Applications

| Project | Stars | Today | What It Is |
|---------|-------|-------|------------|
| [RVC-Project/Retrieval-based-Voice-Conversion-WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) | ⭐37,100 (+81) | Train voice-conversion models in under 10 minutes with ≤1 min of audio — the most accessible open-source TTS/VC tool for creative AI. |
| [usestrix/strix](https://github.com/usestrix/strix) | ⭐48,535 (+984) | Open-source AI penetration testing tool — applies LLM agents to automated vulnerability discovery and remediation. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | ⭐10,515 (+2,540) | Fast Rust library for intelligent PDF inspection and classification — distinguishes scanned vs. text PDFs for smart RAG routing. |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | ⭐18,424 (+2,297) | AI-powered security skill router with self-evolving knowledge base — supports Claude Code, Cursor, Cline and other coding agents. |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | ⭐32,681 (+126) | 158 ready-to-use scientific agent skills covering biology, chemistry, medicine — used by 170K+ scientists worldwide. |
| [SimonLin1212/TradingAgents-Astock](https://github.com/simonlin1212/TradingAgents-astock) | ⭐2,737 | Multi-agent investment research framework for China A-share market — 7 AI analysts with bull/bear debate and risk assessment. |

### 🧠 LLMs / Training

| Project | Stars | Today | What It Is |
|---------|-------|-------|------------|
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | ⭐116,460 (+783) | 21-lesson curriculum for building with generative AI — Microsoft's flagship educational repo continues rapid growth. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐100,585 | Step-by-step PyTorch implementation of a ChatGPT-like LLM from scratch — the definitive hands-on LLM training reference. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,769 | Unified efficient fine-tuning framework for 100+ LLMs and VLMs — the go-to tool for production fine-tuning workflows. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69,591 | Local UI for training and running Kimi K3, Gemma 4, Qwen3.6, DeepSeek-V4 — democratizing access to frontier model fine-tuning. |
| [DeepSeek-AI/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) | ⭐65,230 | DeepSeek's latest open-weight V3 model — 671B parameters with MoE architecture, competitive with GPT-4 class at a fraction of cost. |
| [DataTalksClub/mlops-zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp) | ⭐15,067 | Free MLOps course covering model serving, monitoring, and agent deployment pipelines — essential for production AI engineering. |

### 🔍 RAG / Knowledge

| Project | Stars | Today | What It Is |
|---------|-------|-------|------------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,559 | Universal memory layer for AI agents — the most popular standalone agent memory solution, enabling persistent cross-session state. |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐151,390 | Visual agentic workflow and RAG platform — the leading open-source alternative to commercial AI app builders, with rich model/tool support. |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐38,528 | Simple and fast Retrieval-Augmented Generation (EMNLP 2025) — lightweight GraphRAG with production-ready performance. |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐35,257 | Modular graph-based RAG system from Microsoft Research — established the GraphRAG paradigm for enterprise knowledge retrieval. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐14,268 (+1,111) | Team-level memory hub for AI Agents — turns conversations, docs, and code into four reusable memory assets (Chat Memory, Skill, LLM-Wiki, Code-Graph). |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,786 (+20) | High-performance vector database and search engine written in Rust — the infrastructure layer powering most modern RAG pipelines. |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐16,168 | Serverless single-file memory layer replacing complex RAG pipelines — gives agents instant retrieval and long-term memory in one binary. |
| [getzep/graphiti](https://github.com/getzep/graphiti) | ⭐29,569 | Real-time knowledge graph builder for AI agents — turns agent interactions into evolving, queryable graph structures. |

---

## 3. Trend Signal Analysis

Today's data reveals three converging trends reshaping the AI open-source landscape.

**First, agent memory has become a first-class concern.** Six distinct memory projects appeared in today's trending list — mem0, MemOS, TencentDB-Agent-Memory, memvid, Memori, and EverOS — each solving the same core problem from different angles. This signals the field has matured past the "prompt engineering" phase into an infrastructure phase where persistent, structured memory is recognized as essential for production agents. The star growth on TencentDB-Agent-Memory (+1,111 today) and mem0's sustained 62K+ stars confirm this is not a niche interest but a mainstream architectural shift.

**Second, token cost optimization is driving a new tool category.** rtk (74K stars, +181), rt-ai proxy patterns, and Gortex's 50× token reduction claim all reflect developer frustration with LLM operational costs. The emergence of rtk as a single-binary CLI proxy that cuts 60-90% of token usage on common dev commands suggests the community is building lightweight, composable infrastructure rather than monolithic platforms. This trend is directly tied to the proliferation of coding agents — as more developers run agents 24/7, token efficiency becomes a survival metric, not a luxury.

**Third, DeepSeek and open-weight models are reshaping the agent stack.** DeepSeek-Reasonix (+922 today) and unsloth's support for DeepSeek-V4, Kimi K3, and Qwen3.6 indicate that the community is rapidly building tooling around the new generation of efficient open models. The AirLLM project's 1,711-new-star surge (+1,711) specifically for running 70B models on 4GB GPUs shows that local-first, hardware-constrained inference is a major growth vector — developers want agents that run on their existing hardware, not in the cloud.

---

## 4. Community Hot Spots

- **[TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** — +1,111 stars today, the fastest-growing agent memory project. Its four-memory-asset model (Chat Memory, Skill, LLM-Wiki, Code-Graph) is the most structured approach to the agent memory problem seen this cycle. Worth watching as a potential standard.

- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** — 74,790 stars and climbing. A CLI proxy that transparently reduces LLM token consumption by 60-90%. Any team running coding agents at scale should evaluate this immediately — it's a drop-in optimization with no code changes required.

- **[firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector)** — +2,540 stars in a single day, the largest daily gain on the list. Solves the critical RAG preprocessing problem: intelligently routing scanned vs. text PDFs. This is the kind of infra-level tool that enables entire pipelines.

- **[zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill)** — +2,297 stars. AI-powered security skill router that self-evolves its knowledge base. Represents the growing intersection of AI agents and security operations — a category with enormous unmet demand.

- **[deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)** — The model behind today's coding agent renaissance. With 671B parameters in a MoE architecture, it's the most capable open-weight model available, and every new agent framework is being built to leverage it. The ecosystem momentum around DeepSeek-native tooling is the single largest directional signal in today's data.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*