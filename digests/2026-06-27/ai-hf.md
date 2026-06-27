# Hugging Face 热门模型日报 2026-06-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-27 02:10 UTC

---

# Hugging Face 热门模型日报
**日期**：2026-06-27
**分析师**：Agnes-2.0-Flash

## 1. 今日速览

2026年6月27日，HF热门榜单呈现出“多模态视觉主导”与“高效推理优化”并行的态势。百度 Unlimited-OCR 凭借极高的下载量成为视觉任务标杆，而 NVIDIA 和 Unsloth 等机构推出的 NVFP4 量化及 GGUF 格式模型显示，社区对低延迟、低成本部署的需求激增。MiniMax M3 与 GLM-5.2 等新一代多模态大模型的活跃，标志着混合专家（MoE）架构在通用对话与代码生成领域的进一步成熟。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2)
    *   作者: zai-org | 点赞: 2,595 | 下载: 83,589
    *   说明：智谱最新一代 MoE 架构通用语言模型，凭借卓越的对话能力和推理性能，成为本周点赞最高的纯文本生成模型。

*   **Qwen/Qwen-AgentWorld-35B-A3B**
    *   [链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)
    *   作者: Qwen | 点赞: 323 | 下载: 13,186
    *   说明：阿里通义千问推出的 35B 参数 MoE 模型，专为 Agent 智能体工作流设计，支持图文理解，展示了 Qwen 在智能体领域的最新进展。

*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)
    *   作者: deepreinforce-ai | 点赞: 236 | 下载: 3,002
    *   说明：基于 MIT 许可证的 Ornith 系列 35B 模型 GGUF 量化版本，旨在提供高性能且兼容本地部署的开源替代方案。

*   **microsoft/FastContext-1.0-4B-SFT**
    *   [链接](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)
    *   作者: microsoft | 点赞: 355 | 下载: 5,735
    *   说明：微软发布的 4B 小模型，针对长上下文窗口进行监督微调（SFT），特别适用于需要快速处理大量背景信息的子代理任务。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR)
    *   作者: baidu | 点赞: 1,044 | 下载: 134,146
    *   说明：百度开源的强大 OCR 模型，支持无限分辨率图像的文字提取，因其极高的下载量和实用性位居视觉任务榜首。

*   **MiniMaxAI/MiniMax-M3**
    *   [链接](https://huggingface.co/MiniMaxAI/MiniMax-M3)
    *   作者: MiniMaxAI | 点赞: 1,246 | 下载: 169,951
    *   说明：稀宇科技（MiniMax）推出的多模态基础模型 M3，具备强大的图文理解能力，近期热度飙升，显示其在多模态通用任务中的竞争力。

*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B)
    *   作者: nvidia | 点赞: 2,385 | 下载: 494,756
    *   说明：英伟达发布的 3B 参数开放词汇物体定位模型，能够精确识别图像中任意类别的对象，下载量巨大，是视觉定位任务的强力工具。

*   **krea/Krea-2-Turbo** & **krea/Krea-2-Raw**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo) | [链接](https://huggingface.co/krea/Krea-2-Raw)
    *   作者: krea | 点赞: 285 / 203 | 下载: 8,721 / 10,408
    *   说明：Krea 团队推出的新一代文生图模型系列，Turbo 版侧重速度，Raw 版侧重原始质量，反映了社区对高效图像生成底座的持续需求。

*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
    *   作者: nvidia | 点赞: 708 | 下载: 56,434
    *   说明：英伟达 Nemotron 系列的 0.6B 参数流式自动语音识别（ASR）模型，专为低延迟实时语音转文字场景优化。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B)
    *   作者: WeiboAI | 点赞: 732 | 下载: 54,638
    *   说明：微博 AI 实验室推出的 3B 小型模型，专注于数学推理能力，在轻量级模型中展现了出色的逻辑解题表现。

*   **Chunjiang-Intelligence/DeepSeek-v4-Fable**
    *   [链接](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)
    *   作者: Chunjiang-Intelligence | 点赞: 108 | 下载: 1,103
    *   说明：基于 DeepSeek v4 架构微调的安全/网络安全专用模型，聚焦于代码安全审计与防御场景。

*   **LiquidAI/LFM2.5-230M**
    *   [链接](https://huggingface.co/LiquidAI/LFM2.5-230M)
    *   作者: LiquidAI | 点赞: 113 | 下载: 8,286
    *   说明：LiquidAI 发布的仅 2.3 亿参数的超轻量级模型，代表了极致压缩下保持基本文本生成能力的探索方向。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   作者: HauhauCS | 点赞: 2,265 | 下载: 3,453,492
    *   说明：基于 Qwen3.6 的无限制（Uncensored）社区微调版本，拥有惊人的下载量，反映了用户对去审查、自由输出模型的高需求。

*   **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   [链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)
    *   作者: nvidia | 点赞: 361 | 下载: 4,812,629
    *   说明：英伟达官方提供的 Qwen3.6 MoE 模型 NVFP4 量化版本，通过模型优化器大幅降低显存占用，下载量居全榜首位，是高效部署的典范。

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
    *   作者: yuxinlu1 | 点赞: 2,401 | 下载: 516,333
    *   说明：基于 Gemma 4 的代码专用微调模型 GGUF 量化版，结合 Fable5 和 Composer2.5 技术，深受开发者喜爱，用于提升编码效率。

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
    *   作者: empero-ai | 点赞: 591 | 下载: 486,810
    *   说明：基于 Qwen3.5 架构的 9B 模型 GGUF 量化版，强调推理能力，适合在消费级硬件上进行高性能本地推理。

*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF)
    *   作者: unsloth | 点赞: 411 | 下载: 107,553
    *   说明：由 Unsloth 团队优化的 GLM-5.2 GGUF 版本，利用其高效的推理加速技术，为用户提供了更流畅的本地对话体验。

## 3. 生态信号

当前 HF 生态呈现明显的**“轻量化”与“高效化”**趋势。NVIDIA 主导的 NVFP4 量化技术（如 Qwen3.6-NVFP4）和 Unsloth 的 GGUF 优化模型下载量极高，表明社区正全力转向能在单卡甚至边缘设备上运行的大规模 MoE 模型。同时，**多模态能力已成为标配**，无论是 OCR、语音识别还是图像生成，模型均向图文一体化演进。此外，**社区微调（Fine-tuning）**极其活跃，特别是针对特定领域（如代码、数学）和无限制内容的微调模型，显示出用户对定制化 AI 工具的强烈依赖。开源权重在性能逼近闭源模型的同时，通过量化技术极大地降低了使用门槛。

## 4. 值得探索

1.  **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   **理由**：作为下载量最高的模型，它代表了当前大模型部署的最前沿——通过英伟达专有量化技术，在保持 35B MoE 模型强大能力的同时，实现了极高的推理效率，是生产环境部署的首选参考。

2.  **nvidia/LocateAnything-3B**
    *   **理由**：在计算机视觉领域，该模型以极小的参数量实现了通用的开放词汇定位能力，对于需要集成物体检测功能的 AI 应用具有极高的实用价值，且易于集成。

3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   **理由**：对于开发者而言，这是一个经过精心微调且量化良好的代码专用模型。它不仅继承了 Gemma 4 的基础优势，还通过 Fable5 等技术增强了代码生成和推理能力，非常适合本地化编程助手场景。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*