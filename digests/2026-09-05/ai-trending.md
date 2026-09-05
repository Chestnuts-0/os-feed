# AI 开源趋势日报 2026-09-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-05 01:58 UTC

---



# 🤖 AI 开源趋势日报
**日期：2026-09-05 | 分析师：Agnes**

---

## 一、今日速览

今日 GitHub AI 开源生态呈现三大爆发性趋势：**Agent Skills 生态**成为绝对热点，Anthropic、Google、Microsoft 等巨头纷纷布局，社区衍生项目超 20 个；**Claude Code 周边工具链**持续升温，从性能优化、安全扫描到桌面客户端形成完整生态；**本地化推理与内存基础设施**崛起，sglang、rtk、magnitude 等项目解决 Token 成本与上下文持久化痛点。同时，浏览器自动化与多模态工具（VoiceStudio、openwhispr）值得关注。

---

## 二、各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | ⭐35,483 | +836 | SGLang 高性能 LLM 推理框架，支持 MoE 架构优化，今日热度爆发 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | ⭐58,059 | — | 统一 LLM Gateway，支持 100+ 模型 API 适配，企业级必备 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐180,169 | — | 本地运行 LLM 首选方案，新增 Kimi-K2.6、GLM-5.2 等模型 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | ⭐78,600 | +142 | Rust 编写的 CLI 代理，可减少 60-90% Token 消耗，开发者刚需 |
| [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | ⭐2,510 | +391 | 开源本地推理服务器，适配 Pi/OpenCode/Hermes 等 Agent 框架 |
| [chroma-core/chroma](https://github.com/chroma-core/chroma) | ⭐29,227 | — | AI 原生嵌入式向量数据库，零配置启动 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | ⭐144,095 | +157 | Anthropic 官方终端编码 Agent，持续迭代中 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | ⭐204,147 | +345 | 开源编码 Agent，挑战 Claude Code 地位 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐241,505 | +720 | 自我进化的 AI Agent，支持多模型与工具链 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐248,543 | +1135 | Agent Harness 性能优化系统，聚焦 Skills/Memory/Security |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐112,294 | — | LLM 驱动浏览器自动化框架，支持 Computer Use |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐81,366 | — | 字节开源长周期 SuperAgent，支持沙箱与多 Agent 协作 |
| [stablyai/orca](https://github.com/stablyai/orca) | ⭐61,755 | +831 | 并行 Agent fleet 管理桌面应用，支持多平台部署 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | ⭐48,912 | +118 | 人机协同开源平台，支持自托管 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | ⭐16,162 | +254 | NVIDIA 出品 AI Agent Skill 安全扫描器，检测注入与供应链风险 |

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐154,473 | +109 | Agentic Workflow + RAG 平台，支持私有化部署 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐150,960 | — | 本地优先的 AI Chat 界面，支持 Ollama/OpenAI |
| [janhq/jan](https://github.com/janhq/jan) | ⭐44,339 | — | 100% 离线 ChatGPT 替代品，支持多模型 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | ⭐18,035 | +1345 | 开源版 ElevenLabs，支持 646 种语言语音克隆与视频配音 |
| [OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr) | ⭐6,775 | +262 | 本地优先语音转文字应用，支持 Whisper/Parakeet |
| [anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | ⭐27,729 | +64 | 开源 AI 图像/视频生成平台，集成 600+ 模型 |
| [hkuds/vibe-trading](https://github.com/HKUDS/Vibe-Trading) | ⭐32,453 | — | AI 个人交易助手，支持多模型与多平台 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ⭐46,785 | — | 开源超级 AI 助手，支持多模型/多通道/技能树自进化 |

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐74,579 | — | 100+ 大模型高效微调框架，ACL 2024 收录 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐75,631 | — | 本地 UI 训练 LLM 与扩散模型，支持 GGUF/MLX |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐90,981 | — | 高吞吐 LLM 推理引擎，PagedAttention 技术领先 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐58,545 | +297 | 2 小时从 0 训练 64M 参数 LLM，入门级教学项目 |
| [google-research/timesfm](https://github.com/google-research/timesfm) | ⭐31,064 | +342 | Google 时序基础模型，时间序列预测 SOTA |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐104,345 | — | 从零实现 ChatGPT 风格 LLM 教程，PyTorch |
| [radixark/miles](https://github.com/radixark/miles

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*