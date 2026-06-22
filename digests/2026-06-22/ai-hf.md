# Hugging Face 热门模型日报 2026-06-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-22 07:49 UTC

---

# Hugging Face 热门模型日报 (2026-06-22)

## 1. 今日速览

2026年6月22日，Hugging Face 生态呈现出“小参数高效化”与“多模态深度融合”的双重趋势。DeepSeek-V4-Pro 以超高下载量领跑，显示出开发者对顶级推理能力的持续渴求；与此同时，Google Gemma 4、Qwen 3.6 及 GLM-5 等新一代模型家族通过社区微调（如 GGUF 量化版）迅速占据榜单前列。值得注意的是，NVIDIA 的 LocateAnything 和 Google 的 DiffusionGemma 在多模态理解与生成领域表现强劲，而针对特定场景（如代码、语音流式识别）的小模型也获得了显著关注，标志着 AI 应用正从通用大模型向垂直、轻量化方向演进。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **deepseek-ai/DeepSeek-V4-Pro**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | 作者: deepseek-ai | 点赞: 5,000 | 下载: 2,611,991
    *   **说明**：作为榜单下载量最高的模型，DeepSeek V4 Pro 代表了当前开源/半开源最强推理能力之一，其极高的下载量表明它已成为许多企业级应用的首选基座。
*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 点赞: 1,891 | 下载: 27,413
    *   **说明**：智谱最新一代 GLM 模型，凭借出色的对话能力和 MoE 架构设计，在中文及多语言任务中保持强劲热度。
*   **google/gemma-4-12B-it**
    *   [链接](https://huggingface.co/google/gemma-4-12B-it) | 作者: google | 点赞: 1,131 | 下载: 1,815,370
    *   **说明**：Google Gemma 4 系列的官方指令微调版，12B 参数在性能与效率间取得平衡，下载量极高，是边缘部署和中端应用的热门选择。
*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF) | 作者: unsloth | 点赞: 234 | 下载: 32,260
    *   **说明**：基于 Unsloth 优化的 GLM-5.2 GGUF 量化版本，极大降低了本地运行门槛，体现了社区对快速部署的需求。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 点赞: 2,089 | 下载: 3,966,691
    *   **说明**：Qwen 3.6 的社区激进微调版（Uncensored），尽管去除了安全限制，但因其强大的底层 Qwen 架构和高自由度的创作能力，获得了惊人的下载量，反映了部分开发者对无约束模型的强烈需求。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 点赞: 2,258 | 下载: 241,845
    *   **说明**：NVIDIA 推出的轻量级视觉定位模型，能够精准识别和定位图像中的物体，适用于增强现实和机器人视觉任务，点赞数高显示业界对其实用性的认可。
*   **google/diffusiongemma-26B-A4B-it**
    *   [链接](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | 作者: google | 点赞: 1,041 | 下载: 762,861
    *   **说明**：结合 Gemma 文本理解与扩散生成能力的模型，实现了高质量的文生图或多模态内容生成，下载量巨大。
*   **moonshotai/Kimi-K2.7-Code**
    *   [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | 作者: moonshotai | 点赞: 948 | 下载: 363,308
    *   **说明**：月之暗面 Kimi 的多模态代码模型，不仅支持代码生成，还具备图像特征提取能力，体现了多模态在编程辅助中的新趋势。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 作者: nvidia | 点赞: 620 | 下载: 27,275
    *   **说明**：NVIDIA 的流式自动语音识别模型，仅 0.6B 参数却支持低延迟实时转写，适合资源受限的语音交互场景。
*   **owensong/Inflect-Nano-v1**
    *   [链接](https://huggingface.co/owensong/Inflect-Nano-v1) | 作者: owensong | 点赞: 158 | 下载: 0
    *   **说明**：超小型文本转语音模型，旨在极致压缩下实现高质量语音合成，虽下载量为0（可能刚发布或私有），但其“ultra-small”标签值得关注。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 点赞: 2,110 | 下载: 358,677
    *   **说明**：针对代码编写优化的 Gemma 4 社区微调版，结合了 Fable 和 Composer 技术，在编码任务中表现出色，是开发者本地运行的优选。
*   **CohereLabs/North-Mini-Code-1.0**
    *   [链接](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | 作者: CohereLabs | 点赞: 475 | 下载: 19,551
    *   **说明**：Cohere 推出的轻量级代码模型，专注于高效代码生成与补全，适合集成到 IDE 插件中。
*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B) | 作者: WeiboAI | 点赞: 578 | 下载: 20,277
    *   **说明**：微博 AI 实验室发布的 3B 小模型，特别强化数学推理能力，展示了小模型在特定垂直领域超越大模型的潜力。
*   **LiquidAI/LFM2.5-Embedding-350M**
    *   [链接](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | 作者: LiquidAI | 点赞: 96 | 下载: 7,726
    *   **说明**：Liquid AI 发布的句子相似度嵌入模型，350M 参数规模适中，适用于检索增强生成（RAG）系统中的向量存储。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | 作者: yuxinlu1 | 点赞: 307 | 下载: 21,730
    *   **说明**：Gemma 4 的智能体（Agentic）微调版，针对终端控制和复杂任务规划进行了优化，GGUF 格式便于本地部署。
*   **bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF**
    *   [链接](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF) | 作者: bytkim | 点赞: 102 | 下载: 36,421
    *   **说明**：Qwen 3.6 的多步预测（MTP）微调版，通过 pi-tune 技术提升推理速度，GGUF 格式使其易于在消费级硬件上运行。
*   **Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF**
    *   [链接](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | 作者: Jackrong | 点赞: 276 | 下载: 190,993
    *   **说明**：Qwen 3.6 的代码专用微调版，结合 MTP 加速技术，在代码生成任务中提供低延迟体验，下载量高反映其实用性。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 点赞: 86 | 下载: 688
    *   **说明**：号称融合 Claude 思维的 Qwen 3.5 微调版，支持 1M 上下文窗口，GGUF 量化便于本地运行长文档处理任务。

## 3. 生态信号

当前 Hugging Face 生态显示出明显的**“分层化”**与**“工具链成熟化”**特征。首先，**Qwen、Gemma 和 GLM** 三大模型家族占据主导，尤其是 Qwen 3.6 和 Gemma 4 的衍生模型数量众多，表明这些基座模型已成为事实标准。其次，**量化与微调社区极其活跃**，大量 GGUF 格式的模型上榜，且往往带有特定的功能标签（如 `coding`, `agentic`, `MTP`），说明开发者不再满足于通用基座，而是追求针对特定任务（如代码生成、智能体控制）进行深度优化的轻量级模型。此外，**NVIDIA 和 Google 等大厂在多模态专用模型（如 LocateAnything, DiffusionGemma）上的投入**，预示着多模态能力正从“附加功能”转向“核心基础设施”，特别是在视觉理解和生成方面。最后，**“Uncensored”或“Aggressive”类模型的惊人下载量**提示了市场对无约束、高自由度模型的需求依然存在，尽管这可能带来伦理和安全挑战，但反映了用户对完全控制模型行为的渴望。

## 4. 值得探索

1.  **deepseek-ai/DeepSeek-V4-Pro**
    *   **理由**：作为下载量榜首，它是当前最强开源/半开源模型的代表。对于需要极致推理能力且希望避免闭源 API 限制的企业或个人开发者来说，它是评估本地部署可行性的最佳基准。
2.  **nvidia/LocateAnything-3B**
    *   **理由**：NVIDIA 推出的轻量级视觉定位模型，仅需 3B 参数即可实现高精度物体定位。这对于需要在边缘设备或移动端实现实时视觉交互的应用（如 AR 导航、机器人抓取）极具参考价值，展示了小模型在多模态理解上的巨大潜力。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   **理由**：该模型将 Gemma 4 的强大基础与社区优化的编码技巧相结合，并以 GGUF 格式提供，使得在普通 GPU 甚至 CPU 上高效运行代码助手成为可能。它是研究“小参数高性能代码模型”和“本地化 AI 开发环境”的理想案例。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*