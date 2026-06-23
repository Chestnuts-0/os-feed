# Hugging Face 热门模型日报 2026-06-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-23 09:59 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-23
**分析师：** Agnes-2.0-Flash

## 1. 今日速览

2026年6月23日，HF 榜单呈现出“巨头新品爆发”与“极致量化普及”并存的态势。DeepSeek-V4-Pro 以超5k点赞领跑，显示开源强基座模型持续占据主导地位；同时，Google Gemma-4、MiniMax-M3 及 NVIDIA LocateAnything 等多模态新模型密集亮相，验证了多模态融合成为主流架构。值得注意的是，社区对 GGUF 格式的依赖达到新高，大量 12B-35B 参数模型通过量化实现本地高效部署，而“Uncensored”（无限制）类模型的高下载量也反映出开发者对自由定制能力的强烈需求。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **deepseek-ai/DeepSeek-V4-Pro**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | 作者: deepseek-ai | 点赞: 5,020 | 下载: 2,245,489
    *   说明：DeepSeek 最新旗舰开源模型，凭借卓越的推理能力和对话表现，成为本周绝对流量中心，下载量突破200万。
*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 点赞: 2,092 | 下载: 40,127
    *   说明：智谱最新一代 MoE 架构大模型，原生支持对话与复杂指令跟随，代表了国产开源模型的最新技术水平。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 点赞: 2,128 | 下载: 3,955,016
    *   说明：基于 Qwen3.6 的无限制（Uncensored）微调版本，极高的下载量表明社区对去除安全护栏、追求完全自由输出的需求依然旺盛。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 点赞: 151 | 下载: 27,218
    *   说明：针对长上下文（1M tokens）优化的 Qwen3.5 变体，GGUF 格式使其能在消费级硬件上运行超长窗口推理。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 点赞: 2,302 | 下载: 274,025
    *   说明：NVIDIA 推出的高精度图像定位与特征提取模型，在多模态理解任务中表现优异，下载量极高。
*   **MiniMaxAI/MiniMax-M3**
    *   [链接](https://huggingface.co/MiniMaxAI/MiniMax-M3) | 作者: MiniMaxAI | 点赞: 1,215 | 下载: 131,057
    *   说明：MiniMax 最新多模态旗舰，支持图文互译与复杂视觉推理，展示了中国厂商在通用多模态领域的强劲实力。
*   **google/diffusiongemma-26B-A4B-it**
    *   [链接](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | 作者: google | 点赞: 1,053 | 下载: 948,996
    *   说明：Google 将扩散模型与 Gemma 结合的创新架构，实现了高效的图文生成与理解，下载量接近百万。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 作者: nvidia | 点赞: 643 | 下载: 41,050
    *   说明：NVIDIA Nemotron 系列的流式语音识别模型，专为低延迟实时应用优化，体现了边缘端音频处理的需求增长。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 点赞: 2,195 | 下载: 456,117
    *   说明：专门针对代码生成优化的 Gemma-4 微调版，结合了 Fable 框架技术，在编程任务上表现突出且易于本地部署。
*   **moonshotai/Kimi-K2.7-Code**
    *   [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | 作者: moonshotai | 点赞: 965 | 下载: 447,920
    *   说明：月之暗面推出的代码专用模型，利用压缩张量技术平衡性能与效率，深受开发者喜爱。
*   **LiquidAI/LFM2.5-Embedding-350M**
    *   [链接](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | 作者: LiquidAI | 点赞: 105 | 下载: 10,117
    *   说明：LiquidAI 推出的轻量级嵌入模型，旨在为 RAG 系统提供高效、高质量的语义向量支持。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | 作者: yuxinlu1 | 点赞: 405 | 下载: 96,459
    *   说明：面向 Agent 任务的 Gemma-4 量化版，增强了终端交互能力，GGUF 格式使其成为本地构建智能体的热门选择。
*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF) | 作者: unsloth | 点赞: 265 | 下载: 55,820
    *   说明：由 Unsloth 提供的 GLM-5.2 量化版本，利用其加速技术优化加载速度，是本地运行智谱模型的首选之一。
*   **bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF**
    *   [链接](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF) | 作者: bytkim | 点赞: 109 | 下载: 65,765
    *   说明：基于 MTP（Multi-Token Prediction）技术调优的 Qwen3.6 量化版，提升了生成速度和推理效率。

## 3. 生态信号

本周生态信号显示，**Gemma 家族**（特别是 Gemma-4）和 **Qwen 家族**（Qwen3.6）在社区微调中势头最猛，尤其是经过 GGUF 量化后，12B-35B 参数区间的模型成为本地部署的性价比之王。**开源权重 vs 闭源**方面，虽然 DeepSeek-V4-Pro 等闭源逻辑的开源替代方案极受欢迎，但 Google、NVIDIA、MiniMax 等大厂仍通过开放核心架构主导多模态前沿。**量化活动**异常活跃，几乎所有热门 LLM 都有对应的 GGUF 版本，且出现了针对特定任务（如 Agentic、Coding）的深度量化微调，表明“高效本地化”已成为模型落地的标准路径。

## 4. 值得探索

1.  **nvidia/LocateAnything-3B**：作为 NVIDIA 的新作，其在图像定位和特征提取上的高分表现暗示了其在视觉基础模型领域的潜力，适合需要高精度空间理解的 RAG 或多模态应用。
2.  **deepseek-ai/DeepSeek-V4-Pro**：当前下载量最大的模型，代表了 2026 年中期的开源 SOTA 水平，无论是用于直接 API 调用还是作为基座进行二次开发，都是首选研究对象。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**：对于需要在资源受限环境下运行高质量代码助手的开发者，这个模型提供了极佳的平衡点，其高下载量验证了社区对本地代码智能体的迫切需求。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*