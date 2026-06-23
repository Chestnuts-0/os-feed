# Hugging Face 热门模型日报 2026-06-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-23 19:59 UTC

---

# Hugging Face 热门模型日报 (2026-06-24)

## 1. 今日速览

今日 HF 榜单呈现“巨头新品爆发”与“极致量化普及”并存的态势。**DeepSeek-V4-Pro** 以超 5,000 点赞高居榜首，显示开源模型性能竞争已进入白热化；Google 的 **Gemma-4** 系列及 **DiffusionGemma** 强势入局，展示了多模态与生成能力的统一架构潜力。与此同时，**GLM-5.2** 及其各类量化版本（GGUF/FP8）热度不减，反映出社区对高效本地部署的持续刚需。此外，针对特定垂直领域（如 OCR、ASR、代码）的专用小模型（如 NVIDIA LocateAnything）下载量激增，标志着 AI 应用正从通用大模型向精细化、边缘端落地加速演进。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 点赞: 5,028 | 下载: 2,245,489
    *   说明：当前最受欢迎的开源通用语言模型，凭借卓越的综合推理与对话能力，成为社区首选基座。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 2,172 | 下载: 40,127
    *   说明：智谱最新一代 MoE 架构模型，支持长上下文与多轮对话，是 GLM 系列的重大迭代。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
    *   作者: empero-ai | 点赞: 203 | 下载: 1,856
    *   说明：基于 Qwen3.5 的微调模型，主打超长上下文（1M tokens）与类 Claude 的推理风格，适合长文档处理。
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 点赞: 1,151 | 下载: 1,991,703
    *   说明：Google Gemma 4 系列的指令微调版，作为轻量级高性能模型，下载量极高，适配性强。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uuncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,148 | 下载: 3,955,016
    *   说明：基于 Qwen3.6 视觉语言模型的解除限制版本，尽管标签含“Uncensored”，但其极高的下载量反映了用户对无过滤视觉交互的需求。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 点赞: 2,314 | 下载: 274,025
    *   说明：NVIDIA 推出的强大图像特征提取与定位模型，支持细粒度视觉理解，是计算机视觉应用的新标杆。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 点赞: 1,053 | 下载: 948,996
    *   说明：结合 Diffusion 与 Gemma 架构的多模态生成模型，实现图文互转与创作，展示 Google 在多模态生成领域的布局。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 点赞: 655 | 下载: 41,050
    *   说明：超轻量级流式语音识别模型，专为低延迟、边缘设备实时 ASR 场景优化。
*   **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**
    *   作者: owensong | 点赞: 175 | 下载: 0
    *   说明：超小型文本转语音（TTS）模型，旨在极低资源消耗下提供高质量语音合成，适合嵌入式开发。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 点赞: 2,226 | 下载: 456,117
    *   说明：针对代码生成优化的 Gemma-4 变体，结合 Fable5 数据集微调，显著提升编程逻辑与推理能力。
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 点赞: 652 | 下载: 41,170
    *   说明：微博 AI 团队发布的 3B 参数模型，专注于数学推理与复杂逻辑任务，以小博大表现优异。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 433 | 下载: 8,396
    *   说明：百度推出的无限分辨率 OCR 模型，解决复杂版面、长图文字识别痛点，工业落地价值高。
*   **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
    *   作者: LiquidAI | 点赞: 113 | 下载: 10,117
    *   说明：LiquidAI 新发布的嵌入模型，利用液态状态空间机制提升语义相似度计算的效率与精度。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   作者: unsloth | 点赞: 292 | 下载: 55,820
    *   说明：由 Unsloth 团队优化的 GLM-5.2 GGUF 格式模型，大幅降低显存占用并加速推理，便于本地部署。
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   作者: yuxinlu1 | 点赞: 432 | 下载: 96,459
    *   说明：面向智能体（Agentic）任务的 Gemma-4 量化版，强化终端操作与自主规划能力，GGUF 格式利于边缘运行。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 点赞: 177 | 下载: 27,218
    *   说明：上述 Qwythos 模型的 GGUF 量化版本，通过 llama.cpp 兼容格式，使长上下文推理在消费级硬件上可行。
*   **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
    *   作者: zai-org | 点赞: 145 | 下载: 395,290
    *   说明：官方提供的 FP8 量化版本，平衡精度与速度，是高性能服务器部署的理想选择。
*   **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)**
    *   作者: bytkim | 点赞: 111 | 下载: 65,765
    *   说明：基于 Qwen3.6 的多步预测（MTP）与 pi-tune 技术结合的量化模型，探索推理加速新路径。

## 3. 生态信号

当前生态呈现**“轻量化多模态”**与**“极致量化”**双主线并行。Google 的 Gemma-4 和 DiffusionGemma 表明，单一架构正在整合文本、视觉与生成能力，减少模型碎片化。同时，GGUF 和 FP8 格式的广泛使用（如 GLM-5.2 系列、Gemma-4 代码版），反映出开发者对**本地化、低成本部署**的强烈需求，尤其是 Unsloth 等优化工具的参与，进一步降低了硬件门槛。此外，NVIDIA 和 Baidu 等大厂推出的专用小模型（LocateAnything, Unlimited-OCR），显示行业重心正从通用闲聊转向**解决具体工程问题**，垂直领域的专用模型下载量增长迅速，预示着“小而美”的专用模型将在企业级应用中占据重要地位。

## 4. 值得探索

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**：作为 NVIDIA 推出的新型视觉定位模型，它在保持较小参数量（3B）的同时提供了强大的图像特征提取能力，对于需要高精度对象定位或细粒度视觉理解的应用（如机器人导航、自动标注）极具研究价值。
2.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **理由**：该模型代表了多模态生成的前沿方向，将扩散模型与大型语言模型深度融合。探索其图文互转和创意生成能力，有助于理解未来统一多模态生成架构的可能性。
3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由**：在处理复杂文档、长图或模糊图像时，传统 OCR 模型往往受限。Unlimited-OCR 旨在突破分辨率限制，对于文档数字化、法律/医疗档案处理等实际业务场景具有极高的实用价值和落地潜力。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*