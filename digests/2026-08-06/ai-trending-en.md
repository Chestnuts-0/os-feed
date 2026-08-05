# AI Open Source Trends 2026-08-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-05 22:43 UTC

---



# AI Open-Source Trends Report — 2026-08-06

---

## 1. Today's Highlights

OpenAI's Codex CLI just launched open-source and is already surging past 100K stars, joining an increasingly competitive terminal-agent ecosystem. DeepSeek-native agents (Reasonix, +747 today) signal that Chinese LLMs are capturing developer mindshare beyond API consumption. MCP is undergoing explosive ecosystem growth — GitHub, Atlassian, and n8n all shipped official or high-profile servers this week. Token-efficiency tooling (RTK, Headroom, LeanCTX) is emerging as a distinct category as agent costs scale. Rust continues to dominate new AI infrastructure, with over a dozen new Rust-based agent and vector search projects trending simultaneously.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Stars | Today | Summary |
|---|---|---|---|
| [openai/codex](https://github.com/openai/codex) | ⭐104,168 | +277 | OpenAI's official open-source terminal coding agent — a direct competitor to Claude Code and Gemini CLI, now available for self-hosted agent workflows. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐31,548 | +747 | DeepSeek-native terminal coding agent engineered for prefix-cache stability, enabling long-running local agent sessions without re-computation. |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | ⭐55,644 | +105 | Unified AI gateway supporting 100+ LLM APIs with cost tracking, guardrails, and load balancing — critical infrastructure as agent ecosystems fragment across providers. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐88,277 | — | High-throughput LLM inference engine; still the go-to for self-hosted serving of open models at scale. |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐177,869 | — | Local LLM runner supporting DeepSeek, GLM, Kimi, and more — the backbone of the self-hosted AI wave. |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐74,902 | — | CLI proxy that reduces LLM token consumption by 60–90% for common dev commands; addresses the cost bottleneck of agent-heavy workflows. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐65,037 | — | Compresses tool outputs, logs, and RAG chunks before they reach the LLM — 20–95% token savings with maintained answer quality. |
| [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) | ⭐3,512 | +12 | Local-first context intelligence layer: decides what agents read, remembers what they learn, guards what they touch — 60–90% token reduction. |
| [astral-sh/uv](https://github.com/astral-sh/uv) | ⭐88,393 | +58 | Extremely fast Python package and project manager — increasingly the default toolchain for AI/ML projects replacing pip + venv. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐29,038 | +833 | Run 70B-parameter LLMs on a single 4GB GPU — makes large-model inference accessible on consumer hardware. |
| [WeaveMindAI/weft](https://github.com/WeaveMindAI/weft) | ⭐1,783 | +13 | A programming language for AI orchestrations — a novel abstractions layer specifically designed for multi-agent workflow composition. |
| [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | ⭐22,610 | +30 | MCP server bridging Claude Code/Cursor to n8n workflows — enables AI agents to author and trigger automation pipelines natively. |

### 🤖 AI Agents / Workflows

| Project | Stars | Today | Summary |
|---|---|---|---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐79,366 | — | Long-horizon super-agent harness for research, coding, and content creation with sandboxed sub-agents and skill memory — a reference architecture for production agents. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐226,041 | +628 | Self-evolving agent framework with persistent memory and skill trees; the most-starred agent repo today, signaling strong community demand for adaptive agents. |
| [openai/codex](https://github.com/openai/codex) | ⭐104,168 | +277 | OpenAI's terminal coding agent — the newest major entrant competing directly with Claude Code and Gemini CLI for developer workflows. |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⭐22,179 | +355 | AI coding agent for the terminal with hash-anchored edits, LSP, browser, and subagent support — a strong open alternative to proprietary coding assistants. |
| [add1osmani/agent-skills](https://github.com/add1osmani/agent-skills) | ⭐81,954 | +203 | Production-grade engineering skills for AI coding agents — the "npm" of agent capabilities that developers are actively adopting. |
| [multica-ai/multica](https://github.com/multica-ai/multica) | ⭐44,248 | +335 | Open-source managed multi-agent platform: assign tasks, track progress, and compound skills across coding agents — team-level agent orchestration. |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐267,268 | +931 | Agentic skills framework and software development methodology — the most-starred skill framework today, with massive community growth. |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | ⭐16,501 | — | Self-healing browser harness enabling LLMs to complete any web task — essential infrastructure for computer-use agents. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐15,005 | +1,891 | Team-level memory hub for AI agents turning conversations, docs, and code into four reusable memory assets — the highest single-day growth today. |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | ⭐2,063 | +327 | Lightweight loop engineering state kernel for long-running AI agent teams with durable goals, quota-aware auto-wake, and verifiable handoffs. |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | ⭐13,267 | — | Secure sandboxed environment with real-world tools for enterprise-grade agent deployments — critical for agent security and isolation. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐62,944 | — | Open-source AI job search agent: scans portals, evaluates listings with rubrics, tailors CVs — a practical vertical agent demonstrating real-world agent utility. |

### 📦 AI Applications

| Project | Stars | Today | Summary |
|---|---|---|---|
| [usestrix/strix](https://github.com/usestrix/strix) | ⭐48,944 | +956 | Open-source AI penetration testing tool — merges AI agents with cybersecurity for automated vulnerability discovery and remediation. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐101,762 | — | AI-powered automated short-video generation from topics/keywords — a production-ready content creation agent workflow. |
| [browser-use/video-use](https://github.com/browser-use/video-use) | ⭐19,719 | +675 | Edit videos with coding agents — a novel application demonstrating AI agents performing creative multimedia workflows. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐60,186 | — | LLM-driven multi-market stock analysis with real-time news, decision dashboards, and automated push notifications — vertical AI for finance. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | ⭐29,839 | — | Personal trading agent implementing value-investing methodologies (Buffett/Munger) via multi-agent adversarial analysis in Claude Code/Codex. |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | ⭐15,051 | — | AI-era Berkshire research framework — multi-agent parallel analysis applying four investment masters' methodologies through coding agents. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐43,249 | — | AI turns documents/topics into native PowerPoint decks with shapes, animations, charts, and audio narration — a production-quality productivity agent. |
| [blader/humanizer](https://github.com/blader/humanizer) | ⭐33,739 | +397 | Agent skill that strips AI-generated writing patterns from text — addresses the growing demand for human-like output in professional workflows. |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | ⭐72,487 | +685 | Gives AI coding agents "good taste" — stops generic/boring code output, addressing the quality degradation problem in AI-generated code. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | ⭐55,777 | +688 | Design language that makes AI harnesses better at design — bridges UI/UX quality with agent code generation. |

### 🧠 LLMs / Training

| Project | Stars | Today | Summary |
|---|---|---|---|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,808 | — | Unified fine-tuning framework for 100+ LLMs and VLMs — the most practical toolkit for production model adaptation. |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69,612 | — | Local training and inference UI for Kimi K3, Gemma 4, Qwen3.6, DeepSeek-V4, GLM — rapid local model iteration. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐54,355 | — | Train a 64M-parameter LLM from scratch in 2 hours — the leading educational/prototyping LLM training project. |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | ⭐44,516 | +206 | Self-hosted Claude Code alternative supporting multiple coding agents from terminal/IDE/phone — responds to cost/access concerns. |
| [NovaSky-AI/SkyRL](https://github.com/NovaSky-AI/SkyRL) | ⭐2,126 | +6 | Modular full-stack RL library for LLMs — RLHF/RLAIF tooling for aligning open models. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐31,548 | +747 | DeepSeek-native inference-optimized agent — reflects the rapid adoption of DeepSeek models in production agent stacks. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | ⭐29,038 | +833 | 70B-parameter LLM inference on a single 4GB GPU — democratizes access to large-model capabilities. |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | ⭐48,264 | — | Open-source AI engine running any model locally without GPU — critical for privacy-conscious and cost-constrained deployments. |

### 🔍 RAG / Knowledge

| Project | Stars | Today | Summary |
|---|---|---|---|
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,405 | — | Leading document agent and OCR platform for building RAG pipelines at scale. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐86,904 | — | RAG engine fused with agent capabilities — produces superior context layers for LLM applications with visual pipeline editing. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,804 | — | High-performance vector database and search engine — still the default choice for production vector search. |
| [microsoft/graphrag](https://github.com/microsoft/graphrag) | ⭐35,278 | — | Graph-based RAG system — Microsoft's approach to structured knowledge retrieval beyond vector similarity. |
| [getzep/graphiti](https://github.com/getzep/graphiti) | ⭐29,597 | — | Real-time knowledge graph builder for AI agents — enables temporal and relational reasoning over agent memory. |
| [FalkorDB/FalkorDB](https://github.com/FalkorDB/FalkorDB) | ⭐5,344 | +82 | Graph database using GraphBLAS for sparse adjacency matrices — purpose-built for GraphRAG workloads with extreme speed. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,609 | — | Universal memory layer for AI agents — agentic persistence across sessions and frameworks. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐29,796 | — | Self-hosted knowledge graph engine giving agents persistent long-term memory — a key infrastructure piece for stateful agents. |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐16,182 | — | Serverless single-file memory layer replacing complex RAG pipelines — simplified agent memory for edge/deployed agents. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | ⭐37,606 | — | High-performance code-intelligence MCP server indexing repos in milliseconds with 99% fewer tokens — the new standard for agent codebase context. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | ⭐12,271 | — | Code search MCP making entire codebases the context for any coding agent — demonstrates the MCP protocol's practical value. |
| [googleapis/mcp-toolbox](https://github.com/googleapis/mcp-toolbox) | ⭐16,126 | — | Google's official MCP server for databases — extends MCP's reach into the most data-rich enterprise systems. |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | ⭐31,979 | +26 | GitHub's official MCP server — brings repo, PR, and issue intelligence directly into AI coding agents. |
| [atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server) | ⭐942 | +11 | Official Atlassian MCP server for Jira, Confluence, Bitbucket — enterprise tools are now first-class MCP citizens. |

---

## 3. Trend Signal Analysis

The dominant signal this cycle is the **MCP (Model Context Protocol) ecosystem maturing from experimental to essential infrastructure**. In a single day, GitHub, Atlassian, and multiple independent projects launched MCP servers covering codebases, databases, CI/CD tools, and enterprise SaaS — proving MCP is becoming the universal adapter layer for AI agents to access real systems. Simultaneously, **coding agents are converging around the terminal as the primary interface**. OpenAI's Codex CLI launch is the most significant event, joining Claude Code, Gemini CLI, OpenCode, and DeepSeek-Reasonix in a competitive stack all targeting the same developer workflow. This convergence is driving rapid innovation in agent harness design, with projects like Deer-Flow (bytedance), superpowers, and oh-my-pi pushing the boundaries of what terminal agents can do.

A secondary but accelerating trend is **token-cost optimization as a first-class concern**. Tools like RTK (60–90% token reduction), Headroom (context compression), LeanCTX (local context intelligence), and Codebase-Memory-MCP (99% fewer tokens) indicate the community is hitting cost walls and building infrastructure to solve them. This is no longer a nascent concern — it's driving dedicated project categories.

Rust is the language of choice for new AI infrastructure, with vector databases (Qdrant, FalkorDB, memvid), agent tools (LeanCTX, Codebase-Memory-MCP), and CLI proxies (RTK) all written in Rust for performance. The rise of **local-first and self-hosted agents** (LocalAI, Jan, AirLLM) reflects growing enterprise and privacy concerns about sending all agent traffic to proprietary APIs.

---

## 4. Community Hot Spots

- **OpenAI Codex CLI** ([openai/codex](https://github.com/openai/codex)) — The most consequential new entrant in terminal coding agents. Its official launch and 277 stars in one day signal OpenAI's commitment to the agent tooling space, likely compressing timelines for competitors and raising the bar on CLI UX.

- **MCP Ecosystem Expansion** ([github/github-mcp-server](https://github.com/github/github-mcp-server), [atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server), [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)) — MCP is no longer a niche protocol. With official servers from GitHub and Atlassian, and specialized servers achieving 37K+ stars, it's becoming the default integration standard. Any developer building agent tooling should prioritize MCP compatibility.

- **TencentDB Agent Memory** ([TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)) — +1,891 stars in a single day, the highest growth in the dataset. Its four-asset memory model (Chat Memory, Skill, LLM-Wiki, Code-Graph) represents a practical architecture for team-level agent memory that others will likely emulate.

- **Token Optimization Tooling** ([rtk-ai/rtk](https://github.com/rtk-ai/rtk), [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx)) — The emergence of a distinct optimization layer suggests the community has moved past "agents can do anything" to "agents are too expensive to run at scale." Projects in this space will see continued growth as agent workloads increase.

- **AI + Cybersecurity Convergence** ([usestrix/strix](https://github.com/usestrix/strix), [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)) — AI agents are being deployed for automated penetration testing and security skill cataloging. Strix's 956-star daily growth and the 817-framework cybersecurity skill catalog indicate a serious intersection between agent capabilities and security operations that will mature rapidly.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*