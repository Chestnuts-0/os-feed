# AI 开源趋势日报 2026-08-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-09 00:54 UTC

---



# 🤖 AI 开源趋势日报 | 2026-08-09

---

## 1. 今日速览

今日 AI 开源生态呈现**「Agent 基础设施全面爆发」**态势：Agent Skills 生态成为最大亮点，`mattpocock/skills` 和 `affaan-m/ECC` 单日飙升至超 20 万 stars；Claude Code 工具链围绕 Skills、MCP、安全治理形成完整闭环；Rust 语言在 AI 基础设施层持续渗透（`rtk`、`rivet`、`rtk` 等）；自托管 AI 应用与代理治理成为新焦点，`PrimeIntellect` 的自进化 RLM agent 单日新增 2483 stars 表现抢眼。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐88,540 | +85 | 高性能 LLM 推理引擎，支持多模型并发，仍是自托管推理的首选方案 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐75,278 | +104 | Rust 编写的 CLI 代理，可降低 60-90% LLM token 消耗，直击 Agent 成本痛点 |
| [berriai/litellm](https://github.com/BerriAI/litellm) | ⭐55,897 | — | 100+ LLM API 统一网关，支持路由、限流、成本追踪，企业级首选 |
| [QuantumNous/new-api](https://github.com/QuantumNous/new-api) | ⭐44,691 | +73 | 统一 AI 模型网关，支持 OpenAI/Claude/Gemini 格式互转，聚合分发一体化 |
| [superlinked/sie](https://github.com/superlinked/sie) | ⭐2,688 | +30 | 面向 Agent 的多模型推理服务集群，生产级 Agent 基础设施 |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | ⭐18,106 | +88 | 聚合 28 个 LLM 免费层，统一 /v1 端点，适合个人实验与成本优化 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐186,438 | +218 | 经典自主 Agent 框架，持续迭代中，生态影响力依然最大 |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | ⭐8,945 | **+2,483** | 自进化 RLM Agent，专注编码与长时自主任务，今日最大黑马 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | ⭐195,103 | +381 | 开源编码 Agent，与 Claude Code、Codex 形成直接竞争 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⭐23,040 | +235 | 终端 AI 编码 Agent，支持 hash-anchored 编辑、LSP、子 Agent |
| [Microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | ⭐5,801 | +56 | 覆盖 OWASP Agentic Top 10 全项的 Agent 治理框架，企业合规刚需 |
| [cloudflare/computer](https://github.com/cloudflare/computer) | ⭐6,596 | **+1,045** | 给 Agent 配备「计算机」——浏览器/终端沙箱，Agent 执行层新基础设施 |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | ⭐3,585 | +243 | 轻量级 Agent Loop 工程内核，支持 durable goals 与可验证交接 |
| [beclab/Olares](https://github.com/beclab/Olares) | ⭐5,186 | +21 | 面向永不下线的 Agent 的个人云 OS，自托管 Agent 运行环境 |

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | ⭐40,088 | +157 | HTML→视频渲染引擎，专为 Agent 设计，AI 视频生成基础设施 |
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | ⭐52,237 | +78 | 开源前沿语音 AI 平台，多模态交互新方向 |
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | ⭐70,740 | +389 | 群体智能预测引擎，通用预测框架，学术+实用兼具 |
| [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | ⭐25,881 | +83 | 500+ 模型的免费 AI 视频/图像生成平台，无内容过滤，自托管 |
| [kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) | ⭐8,177 | +83 | 轻量级 TTS 模型，可运行于 CPU，适合边缘/离线场景 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐96,476 | +153 | 多 Agent LLM 金融交易框架，量化+AI 交叉领域热门 |

---

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐163,478 | — | LLM/VLM 训练推理事实标准，生态根基 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐73,921 | — | 100+ 模型统一微调框架，国产社区最活跃的微调工具 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐69,733 | — | 本地 UI 训练文本/扩散模型，支持 Kimi K3、Gemma 4 等最新模型 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐54,469 | — | 2 小时从零训练 64M 小参数 LLM 教程，入门 LLM 训练首选 |
| [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | ⭐6,876 | +55 | DeepMind 天气预测模型，科学 AI 应用标杆 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐163,412 | +531 | 大规模网页搜索/抓取 API，Agent 外部数据接入首选 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐87,086 | — | RAG + Agent 融合引擎，国产 RAG 标杆项目 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐62,835 | — | Agent 通用记忆层，跨会话持久化存储 |
| [getzep/graphiti](https://github.com/getzep/graphiti) | ⭐29,691 | — | 实时知识图谱构建，适合 Agent 动态知识管理 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | ⭐29,464 | +114 | 本地代码库知识图谱，专为 MCP/CLI Agent 优化上下文 |
| [upstash/context7](https://github.com/upstash/context7) | ⭐60,445 | — | LLM 代码文档实时上下文平台，提升 Agent 代码理解准确率 |

---

### 🔥 Agent Skills 生态（今日最大热点）

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐210,018 | **+1,359** | 工程师 Skills 库，来自真实 `.agents` 目录，今日最大流量入口 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐238,815 | +273 | Agent Harness 性能优化系统，Skills/Memory/安全一体化 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐84,568 | +779 | 生产级 AI 编码 Agent Skills，Google 工程师出品 |
| [google/skills](https://github.com/google/skills) | ⭐16,736 | +481 | Google 官方 Agent Skills，覆盖 Google 产品与技术栈 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | ⭐74,268 | +453 | 给 AI 注入「审美」，阻止生成平庸代码，直击 Agent 痛点 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | ⭐18,912 | +644 | 将技术书籍 PDF 转为 Claude Code Skill，知识→技能自动化 |

---

## 3. 趋势信号分析

**1. Agent Skills 成为新基建**：今日 Trending 榜首被 Skills 类项目包揽（`mattpocock/skills`、`addyosmani/agent-skills`、`google/skills`），标志着 Agent 开发从「写 prompt」转向「组装 Skills」，Skills 市场正在形成。

**2. Rust 语言强势渗透 AI 基础设施层**：`rtk`（token 压缩）、`rivet`（Agent 状态工作负载）、`fff`（文件搜索）等 Rust 项目集中登榜，性能敏感型 AI 工具链正加速从 Python 向 Rust 迁移。

**3. Agent 治理与安全进入主流视野**：`microsoft/agent-governance-toolkit` 和 `anthropics/claude-code-security-review` 登榜，反映企业对 Agent 落地合规性、安全审计的需求快速上升。

**4. 与行业事件的关联**：今日热度与 Claude Code、Codex CLI、OpenCode 等主流编码 Agent 的生态扩张直接相关；Google 发布官方 Skills 项目，标志大厂开始布局 Agent 技能标准。

---

## 4. 社区关注热点

- **`PrimeIntellect-ai/prime-agent`** — 单日 +2,483 stars，自进化 RLM Agent 概念新颖，适合关注长时自主任务场景
- **`cloudflare/computer`** — 给 Agent 配备计算机沙箱，解决 Agent 执行层的核心瓶颈，CF 加持潜力大
- **`mattpocock/skills`** — 21 万 stars，Skills 生态事实标准候选，开发者应关注其扩展机制
- **`microsoft/agent-governance-toolkit`** — 首个覆盖 OWASP Agentic Top 10 的开源治理框架，企业级 Agent 落地必看
- **`virgiliojr94/book-to-skill`** — 将 PDF 知识自动转化为 Skill，打通「知识消费→技能内化」闭环，知识工程新方向

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*