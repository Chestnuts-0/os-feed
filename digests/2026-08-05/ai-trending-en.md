# AI Open Source Trends 2026-08-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-05 06:19 UTC

---



# AI Open Source Trends Report — 2026-08-05

---

## 1. Today's Highlights

The AI open-source ecosystem is rapidly converging around **agent harness engineering** — customizing, extending, and hardening coding agents like Claude Code, Codex, and OpenClaw. Three dominant forces drive today's momentum: (1) agent skill ecosystems exploding with 1,000+ curated skills across security, science, and productivity; (2) the Rust language becoming the default for AI-native infrastructure due to its zero-dependency, single-binary advantage; and (3) memory and context optimization emerging as the #1 cost-saving lever for production agents. Notably, a new "loop engineering" discipline is forming — treating agent workflows as stateful, durable pipelines rather than one-shot prompts.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** — ⭐74,771 total (+181 today) | CLI proxy that reduces LLM token consumption by 60–90% on common dev commands. A single Rust binary, zero dependencies — directly tackles the #1 cost bottleneck for coding agents.

- **[katanemo/plano](https://github.com/katanemo/plano)** — ⭐6,960 total (+25 today) | AI-native proxy server and data plane for agentic apps: smart LLM routing, observability, and guardrails so agents stay focused on core logic.

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — ⭐64,842 total | Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM — 20% fewer tokens for coding agents, 60–95% for JSON.

- **[tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)** — ⭐28,524 total | Local-first code intelligence graph for MCP and CLI; builds a persistent codebase map so AI coding tools read only what matters, cutting context by up to 61%.

- **[zxelabs/xzvector](https://github.com/zxelabs/xzvector)** — ⭐7,145 total (+2 today) | Embedded vector database with full text search and hybrid vector-text retrieval, designed for edge and resource-constrained environments.

- **[Alibaba-ModelScope/deepsparse-chat](https://github.com/Alibaba-ModelScope/deepSparse-chat)** — ⭐2,078 total | Efficient inference framework combining DeepSparse and Text Generation Inference for low-latency local LLM deployment.

---

### 🤖 AI Agents / Workflows

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐225,648 total (+616 today) | "The agent that grows with you" — self-evolving agent with memory, skill trees, and multi-modal interaction. Dominates the agent harness category.

- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** — ⭐23,834 total (+83 today) | 345 Claude Code skills covering 30+ agents, 70+ custom commands, and domains from engineering to C-level advisory. The most comprehensive open skills library today.

- **[multica-ai/multica](https://github.com/multica-ai/multica)** — ⭐406 today | Open-source managed agents platform: turn coding agents into real teammates with task assignment, progress tracking, and compound skills.

- **[huangruiteng/loopx](https://github.com/huangruiteng/loopx)** — ⭐585 today | Lightweight loop engineering state kernel for long-running AI agent teams — durable goals, quota-aware auto-wake, executable todos, and verifiable handoffs across Codex, Claude Code, and more.

- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐653 today | Agentic skills framework and software development methodology that actually works — a practical approach to agent orchestration.

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — ⭐107,908 total (+320 today) | Make websites accessible for AI agents — automate browser tasks with ease. One of the most-starred browser automation agents.

- **[superplanehq/superplane](https://github.com/superplanehq/superplane)** — ⭐177 today | Open-source control plane for agentic engineering — dispatch, observe, and govern agent teams at scale.

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — ⭐66,606 total (+956 today) | Give your AI agent eyes to see the entire internet — read and search Twitter, Reddit, YouTube, GitHub, Bilibili with zero API fees.

---

### 📦 AI Applications

- **[lyogavin/airllm](https://github.com/lyogavin/airllm)** — ⭐28,583 total (+1,711 today) | Run 70B-parameter LLM inference on a single 4GB GPU — democratizes running frontier models on consumer hardware.

- **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** — ⭐30,997 total (+922 today) | DeepSeek-native AI coding agent for the terminal, engineered around prefix-cache stability — leave it running and it stays fast.

- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** — ⭐575 today | Open-source AI voice studio: clone, dictate, and create voices locally.

- **[livekit/agents](https://github.com/livekit/agents)** — ⭐432 today | Framework for building real-time voice AI agents — the go-to for voice-first agent applications.

- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — ⭐45,166 total | World's first open-source agentic video production system — 12 pipelines, 100+ tools, 700+ agent skills. Turns any AI coding assistant into a full video studio.

- **[Fosowl/agenticSeek](https://github.com/Fosowl/agenticSeek)** — ⭐26,731 total | Fully local Manus AI alternative — autonomous agent that thinks, browses, and codes at the cost of electricity alone, no API bills.

---

### 🧠 LLMs / Training

- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐177,816 total | Get Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma and more running locally — the default gateway for open LLMs.

- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** — ⭐69,586 total | Local UI for training and running Kimi K3, Gemma 4, Qwen3.6, DeepSeek-V4, GLM — one of the most accessible fine-tuning platforms.

- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** — ⭐73,765 total | Unified efficient fine-tuning of 100+ LLMs and VLMs — ACL 2024 paper, industry standard for SFT.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — ⭐88,215 total | High-throughput, memory-efficient inference and serving engine for LLMs — the backbone of production LLM deployment.

- **[sgl-project/sglang](https://github.com/sgl-project/sglang)** — ⭐31,314 total | High-performance serving framework for LLMs and multimodal models — competitive alternative to vLLM with FlashInfer backends.

- **[AliOS-Things/LightLLM](https://github.com/AliOS-Things/LightLLM)** — ⭐8,748 total | LightLLM is a lightweight, high-performance inference engine for LLMs, focusing on simplicity and efficiency.

---

### 🔍 RAG / Knowledge

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐62,553 total | Universal memory layer for AI agents — the most popular approach to persistent, cross-session agent memory.

- **[getzep/graphiti](https://github.com/getzep/graphiti)** — ⭐29,564 total | Build real-time knowledge graphs for AI agents — graph-RAG as a service.

- **[FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB)** — ⭐5,288 total (+182 today) | Super-fast Graph Database using GraphBLAS — purpose-built as the knowledge graph backend for LLM GraphRAG systems.

- **[microsoft/graphrag](https://github.com/microsoft/graphrag)** — ⭐35,255 total | Modular graph-based RAG system from Microsoft Research — the definitive GraphRAG implementation.

- **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** — ⭐38,523 total | Simple and fast Retrieval-Augmented Generation (EMNLP 2025) — lightweight alternative to heavy RAG pipelines.

- **[MemTensor/MemOS](https://github.com/MemTensor/MemOS)** — ⭐10,591 total | Self-evolving memory OS for LLMs and AI agents: ultra-persistent memory, hybrid retrieval, and 35% token savings across tasks.

---

## 3. Trend Signal Analysis

Today's trending data reveals four clear signals shaping the AI open-source landscape:

**1. Agent Harness Engineering is maturing into a discipline.** Projects like `loopx` (loop engineering state kernel), `superpowers` (agentic skills framework), and `claude-skills` (345 curated skills) indicate the community is moving past one-shot agent demos into durable, composable agent toolchains. The term "harness engineering" is replacing "prompt engineering" as the key skill.

**2. Token cost optimization is the #1 practical concern.** Four projects today — `rtk` (60–90% token reduction), `headroom` (60–95% compression), `code-review-graph` (61% less context), and `MemOS` (35% savings) — all target the same problem: agents burn tokens too fast. This reflects a market correction after the initial "more context = better" phase.

**3. Rust is capturing AI infrastructure.** `rtk`, `FalkorDB`, `Plano`, `CortexCache`, and `mem0`'s Rust core all signal that the community trusts Rust for zero-dependency, single-binary AI tools. This is a structural shift from Python-heavy infrastructure.

**4. Chinese-language AI tooling is surging.** `Agent-Reach` (Chinese social platform search), `loopx` (Chinese developer community), `deepseek-reasonix`, and numerous Chinese skill packages reflect a parallel ecosystem building agents specifically for Chinese platforms (Bilibili, XiaoHongShu, WeChat).

---

## 4. Community Hot Spots

- **Claude Code / Codex skill ecosystems** — The `claude-skills` (23K+ ⭐), `awesome-claude-code` (51K+ ⭐), and `sickn33/agentic-awesome-skills` (44K+ ⭐) repos show skills are becoming the primary distribution mechanism for agent capability. Developers should track the [agentskills.io](https://agentskills.io) standard.

- **GraphRAG over vector RAG** — `FalkorDB` (GraphBLAS-powered), `graphiti`, and `LightRAG` all signal that the community is migrating from pure vector search to graph-based retrieval for complex multi-hop reasoning.

- **Local-first agent memory** — `mem0`, `headroom`, and `MemPalace` (58K ⭐) all converge on the same insight: agents without persistent, cross-session memory are unusable in production. The winner in this category will define the next platform layer.

- **AI-native proxy/gateway layer** — `rtk`, `Plano`, and `LiteLLM` (55K ⭐) show that cost control, routing, and observability are being abstracted into middleware — the "service mesh for agents" is forming.

- **Video production agents** — `OpenMontage` (45K ⭐) and `dramaclaw` (3.2K ⭐) represent a new vertical: agentic video creation from script to final cut. This category is early but moving fast.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*