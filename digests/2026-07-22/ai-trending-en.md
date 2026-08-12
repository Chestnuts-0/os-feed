# AI Open Source Trends 2026-07-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-22 01:43 UTC

---



# GitHub AI Open-Source Trends Report
**Date:** 2026-07-22 | **Data Sources:** GitHub Trending + Topic Search

---

## 1. Today's Highlights

The AI open-source ecosystem is experiencing an explosive shift toward **coding agent infrastructure** — today's trending list is dominated by agent harnesses, skill systems, token-compression proxies, and persistent memory layers that sit between developers and LLM APIs. The standout story is the emergence of **Rust-based performance tooling** for AI agents (RTK, lean-ctx, jcode, stakpak), signaling a maturation where efficiency matters as much as capability. Meanwhile, the **Agent2Agent (A2A) protocol** and universal AI gateways like OmniRoute reflect an industry converging on interoperability standards.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | What It Is |
|---------|-------|------------|
| [langchain-ai/open_deep_research](https://github.com/langchain-ai/open_deep_research) | Trending | LangChain's deep research framework for autonomous multi-step investigation workflows. |
| [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) | ⭐14,851 (+65 today) | Structured output generation library ensuring LLM responses conform to schemas — critical for reliable agent tool calls. |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | ⭐54,276 | Unified proxy calling 100+ LLM APIs with cost tracking, guardrails, load balancing, and logging. |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐72,408 (+274 today) | CLI proxy reducing LLM token consumption by 60–90% on common dev commands via single Rust binary. |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | ⭐30,211 (+129 today) | Command-line tool to find which of hundreds of models & providers fit your hardware. |
| [pydantic/monty](https://github.com/pydantic/monty) | Trending | Minimal, secure Python interpreter written in Rust designed for AI agent execution. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Trending | Browser automation CLI purpose-built for AI agents. |

### 🤖 AI Agents / Workflows

| Project | Stars | What It Is |
|---------|-------|------------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐231,908 | Agent harness performance optimization system — skills, instincts, memory, security for Claude Code, Codex, Cursor and beyond. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐218,422 | The self-improving agent that grows with you. |
| [stablyai/orca](https://github.com/stablyai/orca) | ⭐25,015 (+1,356 today) | Agent Development Environment for running fleets of parallel coding agents across desktop, mobile, and VPS. |
| [earendil-works/pi](https://github.com/earendil-works/pi) | ⭐1,230 today | Unified LLM API, agent loop, TUI, and coding agent CLI toolkit. |
| [AgentWrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator) | Trending | Agent IDE that plans tasks, spawns agents, and autonomously handles CI fixes, merge conflicts, and code reviews. |
| [agentscope-ai/AgentTeams](https://github.com/agentscope-ai/AgentTeams) | Trending | Collaborative multi-agent OS for transparent, human-in-the-loop task coordination via Matrix rooms. |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐77,547 | Long-horizon SuperAgent harness for research, coding, and creation with sandboxes, memories, and subagents. |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | ⭐28,068 | Lightweight, powerful framework for multi-agent workflows from OpenAI. |

### 📦 AI Applications

| Project | Stars | What It Is |
|---------|-------|------------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐149,679 | Build agentic workflows and RAG pipelines with rich model/tool support; deploy cloud, VPC, or self-hosted. |
| [Canner/WrenAI](https://github.com/Canner/WrenAI) | ⭐16,533 (+88 today) | GenBI platform turning natural-language questions into trusted dashboards and SQL across 20+ data sources. |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | ⭐18,686 (+73 today) | Open-source LLM knowledge platform converting raw documents into RAG, autonomous reasoning agents, and self-maintaining Wiki. |
| [kalaspuffar/awesome-ai-apps](https://github.com/Anil-matcha/awesome-generative-ai-apps) | ⭐2,672 | 50+ open-source generative AI apps you can clone, deploy, and monetize. |
| [xuanyustudio/LocalMiniDrama](https://github.com/xuanyustudio/LocalMiniDrama) | Trending | Fully offline AI short-drama generator: story → storyboard → video, keeping all data local. |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | ⭐14,683 (+4,624 today) | Open-source book "Deep Understanding of AI Agents" with full text, PDF, and chapter-by-chapter code. |

### 🧠 LLMs / Training

| Project | Stars | What It Is |
|---------|-------|------------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐176,606 | Get up and running with Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma and other models locally. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,811 | Model-definition framework for state-of-the-art ML models in text, vision, audio, and multimodal. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐68,688 | Local UI for training and running Gemma 4, Qwen3.6, DeepSeek, Kimi, GLM and other models efficiently. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,428 | Unified efficient fine-tuning of 100+ LLMs & VLMs. |
| [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | Trending (+329 today) | Kimi Code CLI — your next terminal-based AI coding agent. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐86,820 | High-throughput, memory-efficient inference and serving engine for LLMs. |

### 🔍 RAG / Knowledge

| Project | Stars | What It Is |
|---------|-------|------------|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐61,402 | Universal memory layer for AI agents enabling persistent cross-session recall. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐29,025 (+358 today) | Open-source AI memory platform giving agents persistent long-term memory via a self-hosted knowledge graph engine. |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐34,723 | Modular graph-based Retrieval-Augmented Generation system. |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | ⭐37,977 | Simple and fast retrieval-augmented generation (EMNLP 2025). |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | ⭐24,581 (+1,925 today) | Local-first code intelligence graph for MCP/CLI that builds persistent codebase maps so AI tools read only what matters. |
| [upstash/context7](https://github.com/upstash/context7) | ⭐59,548 | Up-to-date code documentation platform for LLMs and AI code editors. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐61,019 | Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM — 20–95% fewer tokens. |

---

## 3. Trend Signal Analysis

Today's hot list reveals a decisive industry pivot: **the AI agent stack is fragmenting into specialized infrastructure layers**. Rather than competing on model quality alone, the community is racing to build the "picks and shovels" for agent-driven development — harnesses (ECC, Hermes Agent, Deer Flow), skill registries (awesome-openclaw-skills, iflytek/skillhub), token compression (RTK, Caveman, headroom, OmniRoute), and persistent memory (Mem0, Cognee, lean-ctx). This is no longer a "build another chatbot" phase; it's an **agent engineering** phase where efficiency, context budgeting, and interop matter most.

The **Rust language** is appearing with unusual frequency in AI tooling (RTK, jcode, lean-ctx, stakpak/agent, pydantic/monty, spider-rs/spider), suggesting the community values zero-dependency, single-binary performance for agent-side infrastructure. The **A2A protocol** (agent2agent) gaining traction alongside MCP reflects a dual-standard approach to agent interoperability. The dominance of **Claude Code / Codex / OpenClaw / Hermes** as reference runtimes across nearly every project indicates these have become the de facto agent surfaces the ecosystem optimizes for. Connection to recent LLM releases is visible through Ollama supporting Kimi-K2.6 and GLM-5.2, and moonshotAI launching kimi-cli directly.

---

## 4. Community Hot Spots

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** (⭐231,908) — The most-starred agent harness on GitHub today. Its performance optimization focus (skills, instincts, memory, security) signals that the next competitive frontier is **making existing agents cheaper and more reliable**, not building new ones.

- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** (⭐72,408) — A single Rust binary cutting 60–90% of LLM tokens on dev commands. Represents the **token economics** trend: as agents run more commands, cost reduction becomes a primary product feature.

- **[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)** (⭐2,034 today) — Free MIT AI gateway supporting 268+ providers and 500+ models with auto-fallback and RTK compression. The **universal routing layer** pattern is emerging as essential middleware for agent fleets.

- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** (⭐29,025) — Knowledge-graph-backed persistent memory for agents. Memory is becoming a first-class agent primitive alongside tools and planning.

- **[A2A Protocol](https://github.com/a2aproject/A2A)** (⭐24,934) — Agent2Agent interoperability protocol gaining official traction. Combined with MCP servers everywhere, the industry is standardizing how agents communicate with each other and with tools.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*