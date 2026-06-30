# Hugging Face 热门模型日报 2026-06-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-30 02:27 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-30
**分析师：** Agnes-2.0-Flash

## 1. 今日速览

2026年6月30日的HF榜单呈现出“多模态视觉能力爆发”与“端侧高效推理普及”并行的显著特征。**NVIDIA** 和 **HauhauCS** 发布的视觉定位与未受限大模型下载量惊人，显示出开发者对高精度视觉理解及个性化/越狱模型的强烈需求。**Qwen3.5/3.6** 系列通过 Unsloth 和 GGUF 格式在本地部署领域占据主导地位，尤其是 MoE 架构的轻量化版本。**GLM-5.2** 及其优化版也保持了高热度，证明国产开源大模型在国际社区的影响力持续攀升。此外，Krea 2 系列在图像生成领域的迭代速度极快，LoRA 微调生态活跃。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 👍 2,944 | ⬇️ 133,350
    *   说明：智谱最新一代 MoE 架构通用语言模型，支持对话与文本生成，凭借高性能和开源策略成为本周点赞最高的纯文本生成模型。
*   **deepreinforce-ai/Ornith-1.0-397B**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | 作者: deepreinforce-ai | 👍 169 | ⬇️ 1,622
    *   说明：超大规模 397B 参数模型，虽下载量不高但代表了社区对超大参数基座模型能力的关注，适合高端科研与复杂推理场景。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | 作者: deepseek-ai | 👍 216 | ⬇️ 5,460
    *   说明：DeepSeek V4 的专业版变体，结合 DSpark 技术优化分布式训练与推理，是追求极致推理能力用户的首选。
*   **LiquidAI/LFM2.5-230M**
    *   [链接](https://huggingface.co/LiquidAI/LFM2.5-230M) | 作者: LiquidAI | 👍 152 | ⬇️ 15,463
    *   说明：LiquidAI 推出的微型语言模型，仅 2.3 亿参数却保持良好性能，专为边缘设备和极低延迟场景设计。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 👍 2,482 | ⬇️ 728,320
    *   说明：NVIDIA 发布的强大视觉定位模型，支持细粒度图像特征提取，下载量极高，反映出工业界对高精度视觉感知工具的迫切需求。
*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 👍 1,374 | ⬇️ 362,945
    *   说明：百度开源的无限上下文 OCR 模型，能够处理任意长文档和复杂版面，是当前文档数字化工作流中的热门工具。
*   **krea/Krea-2-Turbo** & **krea/Krea-2-Raw**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo) | 作者: krea | 👍 394 | ⬇️ 38,454
    *   [链接](https://huggingface.co/krea/Krea-2-Raw) | 作者: krea | 👍 245 | ⬇️ 27,464
    *   说明：Krea 2 系列的两个主要变体，Turbo 侧重速度与交互，Raw 侧重原始画质，继续巩固 Krea 在实时图像生成领域的领先地位。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 作者: nvidia | 👍 743 | ⬇️ 76,154
    *   说明：NVIDIA Nemotron 系列的流式语音识别模型，小巧高效，适合实时语音转写应用，展现了 NVIDIA 在多模态底层技术上的全面布局。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B) | 作者: WeiboAI | 👍 749 | ⬇️ 63,449
    *   说明：微博人工智能实验室发布的数学推理专用小模型，专注于提升 LLM 在数学问题上的逻辑推导能力，性价比极高。
*   **Chunjiang-Intelligence/DeepSeek-v4-Fable**
    *   [链接](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | 作者: Chunjiang-Intelligence | 👍 130 | ⬇️ 1,463
    *   说明：针对网络安全领域微调的 DeepSeek V4 模型，具备专业的漏洞分析与防御知识，服务于垂直行业安全需求。
*   **Qwen/Qwen-AgentWorld-35B-A3B**
    *   [链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | 作者: Qwen | 👍 438 | ⬇️ 26,223
    *   说明：通义千问推出的智能体世界模型，旨在增强 AI Agent 的环境交互与长期规划能力，是多智能体协作研究的重要基础。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 👍 2,333 | ⬇️ 3,089,944
    *   说明：基于 Qwen3.6 MoE 架构的无限制（Uncensored）微调版本，以激进的指令遵循风格著称，下载量突破 300 万，是本周社区活跃度最高的量化模型之一。
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 👍 2,503 | ⬇️ 561,577
    *   说明：Gemma 4 的代码专用 GGUF 量化版本，经过 Fable5 Composer 深度优化，在保持低显存占用的同时提供了卓越的代码生成与推理能力。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 👍 953 | ⬇️ 907,682
    *   说明：融合 Claude 风格推理能力的 9B 模型 GGUF 量化版，支持 1M 上下文窗口，适合需要长文本处理的本地部署场景。
*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF) | 作者: unsloth | 👍 465 | ⬇️ 164,180
    *   说明：由 Unsloth 团队提供的 GLM-5.2 高效量化版本，利用其加速技术大幅降低推理延迟，是本地运行智谱最新模型的最佳选择。
*   **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   [链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | 作者: nvidia | 👍 378 | ⬇️ 5,392,518
    *   说明：NVIDIA 官方发布的 Qwen3.6 MoE 模型 NVFP4 量化版，专为 NVIDIA GPU 硬件优化，实现了极高的吞吐量与能效比，下载量惊人。

## 3. 生态信号

本周生态显示 **MoE（混合专家）架构** 已成为主流，无论是 Qwen3.6、GLM-5.2 还是 Ornith，均大量采用 MoE 设计以平衡性能与成本。**NVIDIA** 和 **Unsloth** 等基础设施提供商在量化（NVFP4, GGUF）和加速方面占据主导，推动了本地大模型部署的标准化。**社区微调** 依然活跃，特别是“Uncensored”（无限制）类别的模型下载量极高，表明用户对内容自由度和特定风格对齐的需求旺盛。同时，**视觉-语言模型（VLM）** 如 LocateAnything 和 Unlimited-OCR 的热度上升，标志着多模态应用正从简单的图文描述向精细的结构化理解（OCR、定位）深化。

## 4. 值得探索

1.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   **理由**：尽管存在争议，但其高达 300 万的下载量和 2000+ 点赞证明了其在特定用户群体中的巨大影响力。研究此类模型的微调边界和安全对齐机制，对于理解当前开源社区的偏好至关重要。
2.  **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   **理由**：这是工业界优化开源模型的典范。NVFP4 格式专为 NVIDIA 硬件设计，提供了极致的推理效率。对于需要在云端或数据中心大规模部署 Qwen 3.6 的用户来说，这是性能最优解。
3.  **baidu/Unlimited-OCR**
    *   **理由**：随着文档自动化需求的增加，传统 OCR 难以应对复杂版面。该模型支持无限上下文，能直接输出结构化文本，极大地简化了从图像到可编辑内容的流程，具有极高的实用价值。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*