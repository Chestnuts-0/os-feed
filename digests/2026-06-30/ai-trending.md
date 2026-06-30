# AI 开源趋势日报 2026-06-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-30 02:27 UTC

---

# AI 开源趋势日报 | 2026-06-30

## 1. 今日速览

今日 GitHub AI 开源生态呈现“**Agent 基础设施化**”与“**垂直场景爆发**”两大特征。**Agent 编排与技能生态**成为绝对热点，Claude Code、Codex 等终端编码代理的 Skill、Harness 及多智能体协作框架大量涌现，标志着 AI 代理从单一工具向系统化工程演进。**RAG 与记忆层**技术持续深化，本地化、持久化记忆成为 Agent 的核心竞争力。此外，**AI 驱动的视频生成与自动化工作流**热度激增，显示出多模态能力正在快速落地至内容创作领域。

## 2. 各维度热门项目

### 🔧 AI 基础工具
*聚焦推理加速、网关、本地部署及开发辅助 CLI*

1. **[ollama/ollama](https://github.com/ollama/ollama)**
   - ⭐ 175,157 (+111 today)
   - **说明**：本地 LLM 运行事实标准，今日支持 Kimi-K2.6、GLM-5.1 等最新模型，保持极高的活跃度和兼容性。
2. **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)**
   - ⭐ 67,064 (+0 today)
   - **说明**：CLI 代理网关，通过压缩上下文减少 60-90% 的 Token 消耗，直接解决 Agent 编程成本高、延迟大的痛点。
3. **[maximhq/bifrost](https://github.com/maximhq/bifrost)**
   - ⭐ 6,124 (+0 today)
   - **说明**：高性能企业级 AI 网关，声称比 LiteLLM 快 50 倍，支持自适应负载均衡和 Guardrails，适合大规模 Agent 部署。
4. **[Michael-A-Kuykendall/shimmy](https://github.com/Michael-A-Kuykendall/shimmy)**
   - ⭐ 5,561 (+0 today)
   - **说明**：纯 Rust 编写的 WebGPU 推理引擎，无需 Python 和 llama.cpp，单二进制文件即可运行 OpenAI API 兼容模型，极致轻量。
5. **[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**
   - ⭐ 105,666 (+0 today)
   - **说明**：Google 官方终端 AI 代理，将 Gemini 能力直接带入命令行，与 Claude Code、Codex 形成直接竞争。

### 🤖 AI 智能体/工作流
*聚焦 Agent 框架、多智能体协作、自动化编排*

1. **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**
   - ⭐ 205,782 (+0 today)
   - **说明**：Nous Research 推出的开源 Agent 框架，强调随着用户交互不断成长，是当前最热门的 Agent 基座之一。
2. **[vercel-labs/skills](https://github.com/vercel-labs/skills)**
   - ⭐ 0 (+313 today)
   - **说明**：Vercel Labs 推出的开放式 Agent 技能工具，允许通过 `npx skills` 快速安装和扩展 Agent 能力，推动技能标准化。
3. **[browser-use/browser-use](https://github.com/browser-use/browser-use)**
   - ⭐ 101,472 (+0 today)
   - **说明**：使网站对 AI 代理可访问的基础设施，让 Agent 能像人类一样操控浏览器完成任务，是 Computer Use 领域的标杆项目。
4. **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)**
   - ⭐ 75,471 (+0 today)
   - **说明**：字节跳动的超长期 Horizon Agent，具备研究、编码、创建能力，通过沙箱和记忆处理需耗时数小时的复杂任务。
5. **[agentwrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator)**
   - ⭐ 0 (+67 today)
   - **说明**：并行编码代理的编排器，自动规划任务、生成代理并处理 CI 修复和合并冲突，提升多代理协作效率。

### 📦 AI 应用
*聚焦垂直场景解决方案、内容生成、特定领域工具*

1. **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**
   - ⭐ 141,561 (+826 today)
   - **说明**：大规模网页搜索、抓取和交互 API，今日新增 Stars 极高，是构建 RAG 和数据采集的核心基础设施。
2. **[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI)**
   - ⭐ 21,808 (+142 today)
   - **说明**：无内容过滤的开源 AI 视频/图像生成工作室，集成 200+ 模型（Sora, Veo 等），满足对自由度要求高的创作需求。
3. **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)**
   - ⭐ 15,147 (+839 today)
   - **说明**：个人交易智能体，结合自然语言输入与金融市场数据，展示 Agent 在垂直金融领域的落地潜力。
4. **[waooAI/waoowaoo](https://github.com/waooAI/waoowaoo)**
   - ⭐ 12,971 (+0 today)
   - **说明**：工业级全流程 AI 影视生产平台，支持从短片到真人电影的 Hollywood 标准工作流，代表 AIGC 视频制作的最高水平。
5. **[xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire)**
   - ⭐ 6,714 (+1386 today)
   - **说明**：基于 Claude Code/Codex 的价值投资研究框架，融合巴菲特等多位大师方法论，通过多 Agent 对抗分析辅助投资决策。

### 🧠 大模型/训练
*聚焦模型微调、推理优化、数据集*

1. **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)**
   - ⭐ 72,789 (+0 today)
   - **说明**：统一高效的微调框架，支持 100+ LLM/VLM，是本地部署和微调开源模型的首选工具。
2. **[unslothai/unsloth](https://github.com/unslothai/unsloth)**
   - ⭐ 67,615 (+0 today)
   - **说明**：极速微调工具，大幅降低显存占用并提升训练速度，使个人开发者也能高效训练大型模型。
3. **[google-research/timesfm](https://github.com/google-research/timesfm)**
   - ⭐ 0 (+127 today)
   - **说明**：Google 推出的时间序列基础模型，专为预测任务设计，展示了 Foundation Model 在特定科学计算领域的应用。
4. **[lyogavin/airllm](https://github.com/lyogavin/airllm)**
   - ⭐ 21,939 (+0 today)
   - **说明**：单张 4GB 显存即可推理 70B 参数的模型，极大地降低了本地运行大模型的硬件门槛。

### 🔍 RAG/知识库
*聚焦向量数据库、检索增强、记忆管理*

1. **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)**
   - ⭐ 140,520 (+0 today)
   - **说明**：LLM 应用开发的事实标准框架，持续更新以支持最新的 Agent 模式和 RAG 技术。
2. **[mem0ai/mem0](https://github.com/mem0ai/mem0)**
   - ⭐ 59,721 (+0 today)
   - **说明**：AI 代理的通用记忆层，实现跨会话的持久化记忆，解决 Agent “失忆”问题，是构建长期交互应用的关键。
3. **[topoteretes/cognee](https://github.com/topoteretes/cognee)**
   - ⭐ 25,694 (+868 today)
   - **说明**：开源 AI 记忆平台，提供基于知识图谱的长期记忆引擎，今日增长迅速，反映了对结构化记忆的迫切需求。
4. **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)**
   - ⭐ 83,881 (+0 today)
   - **说明**：结合 RAG 与 Agent 能力的开源平台，擅长处理复杂文档解析和深度检索，是企业级知识库的主流选择。
5. **[qdrant/qdrant](https://github.com/qdrant/qdrant)**
   - ⭐ 32,800 (+64 today)
   - **说明**：高性能向量数据库，专为 AI 应用设计，支持大规模向量搜索，是 RAG 架构中的核心存储组件。

## 3. 趋势信号分析

今日数据清晰地指向 **“Agent 工程化”** 的深化。首先，**Skill 和 Harness 生态**爆发，如 `vercel-labs/skills` 和各类 `Claude Code` 技能包，表明开发者正致力于将 AI 代理能力模块化、标准化，便于复用和分发。其次，**记忆与上下文管理**成为独立热点，`mem0`、`cognee` 等项目的高关注度显示，单纯依靠 Prompt 已无法满足复杂任务，持久化、结构化的记忆层是构建可靠 Agent 的关键瓶颈。最后，**多模态与自动化**结合紧密，`firecrawl` 和 `browser-use` 的热度证明，让 Agent 具备感知物理世界（网页、视频、文件）并执行操作的能力，是当前最具有商业价值的落地场景。

## 4. 社区关注热点

*   **[vercel-labs/skills](https://github.com/vercel-labs/skills)**：Vercel 官方推出的标准化 Agent 技能工具，预示着 AI 技能市场可能迎来类似 npm 的繁荣生态，建议开发者关注其 API 设计和安装机制。
*   **[xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire)**：今日 Trending 增速极快（+1386 stars），展示了 AI 在专业垂直领域（金融投资）的深度应用潜力，特别是多 Agent 对抗分析的方法论值得借鉴。
*   **[topoteretes/cognee](https://github.com/topoteretes/cognee)**：作为 AI 记忆平台的新星，它强调了知识图谱在长期记忆中的作用，对于需要构建具备“人格”和“历史”的 Agent 项目具有重要参考价值。
*   **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**：持续霸榜的网页数据获取工具，其高频更新和高 Stars 增长表明，高质量、结构化的互联网数据仍是训练和增强 LLM 应用的稀缺资源。
*   **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)**：针对 Token 成本的优化方案，在 Agent 频繁调用的场景下，此类中间件能显著降低运营成本，是构建经济型 Agent 系统的必备组件。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*