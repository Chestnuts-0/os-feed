# Hugging Face 热门模型日报 2026-06-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-22 10:22 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-22
**分析师：** AI 模型生态分析师

## 1. 今日速览

2026 年 6 月 22 日，Hugging Face 榜单呈现出“巨头回归”与“垂直领域爆发”并存的态势。**DeepSeek-V4-Pro** 以超过 5,000 赞和 240 万下载量强势登顶，显示出开发者对高效推理模型的极高需求；**GLM-5.2** 系列及 **Gemma-4** 生态紧随其后，证明国产与谷歌系模型在开源社区的统治力依然稳固。同时，**NVIDIA LocateAnything-3B** 和 **Google DiffusionGemma-26B** 的多模态能力备受青睐，标志着视觉-语言交互正从“聊天”向“精准定位与生成”深化。此外，**Uncensored** 和 **Agentic** 类微调模型的流行，反映了社区对定制化、无限制及自动化代理能力的强烈探索欲。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **deepseek-ai/DeepSeek-V4-Pro**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
    *   **作者:** deepseek-ai | **点赞:** 5,005 | **下载:** 2,421,858
    *   **说明:** 当前下载量最高的模型，凭借卓越的推理能力和对话流畅度成为开发者首选，代表了当前开源 LLM 的性能天花板。

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2)
    *   **作者:** zai-org | **点赞:** 1,924 | **下载:** 33,589
    *   **说明:** 智谱最新旗舰模型，采用 MoE 架构，在中文语境及通用任务中表现优异，是 GLM 系列迭代的重要里程碑。

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   **作者:** HauhauCS | **点赞:** 2,090 | **下载:** 4,078,305
    *   **说明:** 基于 Qwen3.6 的大规模去限制化微调版本，极高的下载量表明社区对无安全过滤、高自由度模型有巨大需求，常用于创意写作或红队测试。

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
    *   **作者:** yuxinlu1 | **点赞:** 2,124 | **下载:** 414,734
    *   **说明:** Google Gemma-4 的代码专用微调版，经过 Fable5 和 Composer2.5 优化，兼顾了代码生成与推理能力，是轻量级编程助手的热门选择。

*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B)
    *   **作者:** WeiboAI | **点赞:** 585 | **下载:** 32,385
    *   **说明:** 微博推出的小型思维链模型，专注于数学推理，展示了如何在极小参数量下通过特定训练提升逻辑能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B)
    *   **作者:** nvidia | **点赞:** 2,269 | **下载:** 247,517
    *   **说明:** NVIDIA 发布的视觉定位模型，能够精准识别图像中的特定对象，填补了 VLM 在细粒度视觉理解领域的空白。

*   **google/diffusiongemma-26B-A4B-it**
    *   [链接](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
    *   **作者:** google | **点赞:** 1,044 | **下载:** 874,368
    *   **说明:** 结合扩散模型与语言理解的统一架构，支持高质量的图文生成与编辑，体现了 Google 在多模态融合上的最新进展。

*   **google/gemma-4-12B-it**
    *   [链接](https://huggingface.co/google/gemma-4-12B-it)
    *   **作者:** google | **点赞:** 1,132 | **下载:** 1,912,198
    *   **说明:** Gemma-4 的基础指令微调版，支持任意到任意（any-to-any）任务，下载量接近 200 万，证明了其作为通用多模态基座的广泛适用性。

*   **moonshotai/Kimi-K2.7-Code**
    *   [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
    *   **作者:** moonshotai | **点赞:** 949 | **下载:** 412,778
    *   **说明:** 月之暗面推出的代码专用多模态模型，结合了压缩张量技术，旨在提供高效且强大的代码辅助与理解能力。

*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
    *   **作者:** nvidia | **点赞:** 620 | **下载:** 34,860
    *   **说明:** 超轻量级流式语音识别模型，专为低延迟场景设计，展示了 NVIDIA 在边缘设备语音处理上的优化能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **CohereLabs/North-Mini-Code-1.0**
    *   [链接](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
    *   **作者:** CohereLabs | **点赞:** 477 | **下载:** 21,078
    *   **说明:** Cohere 推出的迷你代码模型，利用 MoE 架构在保持极低资源占用的同时提供高效的代码补全功能。

*   **LiquidAI/LFM2.5-Embedding-350M** & **LiquidAI/LFM2.5-ColBERT-350M**
    *   [链接 1](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | [链接 2](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)
    *   **作者:** LiquidAI | **点赞:** 98 / 73 | **下载:** 8,822 / 2,202
    *   **说明:** LiquidAI 发布的两个嵌入式模型，分别用于句子相似度计算和重排序，针对长上下文检索进行了优化，体现了对 RAG 系统效率的追求。

*   **datalab-to/lift**
    *   [链接](https://huggingface.co/datalab-to/lift)
    *   **作者:** datalab-to | **点赞:** 118 | **下载:** 1,821
    *   **说明:** 专注于 PDF 解析与信息提取的多模态模型，解决了非结构化文档处理中的关键痛点。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF)
    *   **作者:** unsloth | **点赞:** 236 | **下载:** 41,846
    *   **说明:** 由 Unsloth 团队优化的 GLM-5.2 GGUF 格式版本，通过量化技术显著降低了本地部署门槛，提升了推理速度。

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)
    *   **作者:** yuxinlu1 | **点赞:** 319 | **下载:** 50,314
    *   **说明:** 针对智能体（Agentic）任务深度优化的 Gemma-4 版本，强化了终端交互与自主规划能力，是构建本地 AI Agent 的优质基座。

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
    *   **作者:** empero-ai | **点赞:** 96 | **下载:** 6,633
    *   **说明:** 支持 1M 超长上下文的推理模型，融合了 Claude 风格的思考能力，适合需要处理海量文档的复杂推理场景。

*   **Bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF**
    *   [链接](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)
    *   **作者:** bytkim | **点赞:** 102 | **下载:** 52,774
    *   **说明:** 基于 Qwen3.6 的多步预测（MTP）微调版本，通过并行解码加速推理过程，是追求极致响应速度的开发者之选。

## 3. 生态信号

本周生态呈现三大显著趋势：
1.  **模型家族内卷加剧**：Qwen（3.5/3.6）、Gemma（4）和 GLM（5.2）三大系列占据榜单半壁江山，社区围绕这些基座进行了海量的细分微调（如代码、代理、去限制化），表明开源 LLM 的竞争已从“大模型发布”转向“垂直场景适配”。
2.  **量化与效率至上**：GGUF 格式的模型下载量普遍极高（如 DeepSeek-V4-Pro 的衍生量化版、Qwen 的 MTP 优化版），反映出开发者在本地部署时更看重推理速度与硬件兼容性，而非单纯的原始精度。
3.  **多模态走向实用化**：NVIDIA 和 Google 的多模态模型不再局限于简单的图像描述，而是向“定位”、“编辑”和“流式处理”等具体工程任务延伸，预示着多模态 AI 正在深入实际工作流。

## 4. 值得探索

1.  **deepseek-ai/DeepSeek-V4-Pro**
    *   **理由**：作为当前下载量和点赞量双冠王的模型，它代表了 2026 年中期的开源 LLM 最强战力之一。无论是作为后端 API 还是本地部署基座，其性价比和性能平衡都值得深入研究。

2.  **nvidia/LocateAnything-3B**
    *   **理由**：在视觉语言模型普遍擅长“描述”图像的当下，LocateAnything 提供了精准的“空间定位”能力。这对于机器人导航、自动驾驶感知以及复杂的视觉问答系统具有不可替代的价值，是 VLM 领域的一个重要补充。

3.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   **理由**：尽管存在争议，但其惊人的下载量（400 万+）揭示了市场对“无束缚”模型的巨大需求。研究此类模型的微调技术、潜在风险及其在创意生成或对抗测试中的应用，对于理解开源社区的技术偏好和安全边界具有重要意义。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*