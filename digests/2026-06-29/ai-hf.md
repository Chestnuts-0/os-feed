# Hugging Face 热门模型日报 2026-06-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-29 02:32 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-29  
**分析师：** Agnes-2.0-Flash

## 1. 今日速览

本周 HF 生态呈现“多模态视觉强化”与“高效量化普及”两大主线。百度 `Unlimited-OCR` 以超百万下载量领跑，显示高精度 OCR 需求依然强劲；同时，`GLM-5.2` 及其变体（如 Unsloth 量化版）热度飙升，标志着新一代混合专家（MoE）架构在开源社区的快速迭代。此外，NVIDIA 和 HauhauCS 发布的非受限（Uncensored）及优化版本模型下载量惊人，反映出开发者对特定场景（如创意写作、底层推理）的强烈偏好，以及 GGUF 格式在本地部署中的主导地位。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2)
    *   作者: zai-org | 点赞: 2,823 | 下载: 118,651
    *   **说明：** 基于最新 MoE 架构的通用对话模型，凭借极高的点赞数和流畅的交互能力，成为本周最受关注的原生 LLM 之一。

*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF)
    *   作者: unsloth | 点赞: 443 | 下载: 146,023
    *   **说明：** GLM-5.2 的高效量化版本，利用 Unsloth 技术实现极速推理，下载量甚至超过原版，证明本地部署需求旺盛。

*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)
    *   作者: deepseek-ai | 点赞: 182 | 下载: 373
    *   **说明：** DeepSeek V4 系列的最新专业版，虽下载量尚低，但作为前沿研究发布，预示着下一代高性能开源模型的竞争格局。

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   作者: HauhauCS | 点赞: 2,301 | 下载: 3,248,724
    *   **说明：** Qwen 3.6 的非受限激进版本，拥有惊人的下载量，表明用户对去除安全限制、进行自由创作或红队测试的需求极高。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR)
    *   作者: baidu | 点赞: 1,244 | 下载: 295,064
    *   **说明：** 百度推出的高精度图像文字提取模型，任务类型为 image-text-to-text，因其强大的泛化能力和高下载量位居榜首。

*   **krea/Krea-2-Turbo** & **krea/Krea-2-Raw**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo) | [链接](https://huggingface.co/krea/Krea-2-Raw)
    *   作者: krea | 点赞: 355/232 | 下载: 27,631/22,622
    *   **说明：** Krea 系列图像生成模型，Turbo 版侧重速度，Raw 版侧重原始质量，共同占据文生图领域的高位，显示实时生成技术的成熟。

*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
    *   作者: nvidia | 点赞: 734 | 下载: 67,419
    *   **说明：** NVIDIA 的小规模流式语音识别模型，专为低延迟音频处理设计，体现了边缘端多模态应用的兴起。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
    *   作者: yuxinlu1 | 点赞: 2,473 | 下载: 549,926
    *   **说明：** 基于 Gemma 4 的代码专用微调模型，经过 Fable5 和 Composer2.5 优化，高点赞和高下载量证明其在编程辅助领域的实用价值。

*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B)
    *   作者: WeiboAI | 点赞: 743 | 下载: 59,337
    *   **说明：** 针对数学推理优化的轻量级模型，展示了小参数模型在特定垂直领域（如数学）通过高质量数据微调仍可保持竞争力的趋势。

*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B)
    *   作者: nvidia | 点赞: 2,436 | 下载: 646,451
    *   **说明：** NVIDIA 推出的通用视觉定位模型，支持 image-text-to-text，下载量巨大，反映了“万物检测”类基础模型在工业界的高频使用。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
    *   作者: empero-ai | 点赞: 806 | 下载: 831,529
    *   **说明：** 结合 Claude 风格推理的 Qwen 3.5 量化版本，拥有极高的下载量，表明用户倾向于获取具有长上下文（1M tokens）且推理能力增强的量化模型。

*   **HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced**
    *   [链接](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)
    *   作者: HauhauCS | 点赞: 100 | 下载: 40,820
    *   **说明：** Gemma 4 的量化感知训练（QAT）非受限平衡版，展示了社区在保持模型性能的同时，通过量化技术降低部署门槛的努力。

*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)
    *   作者: deepreinforce-ai | 点赞: 414 | 下载: 79,630
    *   **说明：** Ornith 大模型的 GGUF 量化版，支持 MIT 许可，为需要大规模 MoE 模型但显存有限的用户提供了可行的本地运行方案。

## 3. 生态信号

本周生态信号显示，**GLM 和 Qwen 家族**仍是开源社区的核心驱动力，尤其是 MoE 架构（如 GLM-5.2, Qwen3.6-A3B）受到极大关注。**量化（GGUF）已成为主流**，许多热门模型优先提供 GGUF 格式，且下载量往往高于原始 safetensors 格式，表明本地部署和边缘计算需求持续增长。**非受限模型（Uncensored）** 的下载量异常高（如 HauhauCS 系列），反映出开发者在创意生成、角色扮演及安全测试等领域对无约束模型的强烈依赖。此外，**NVIDIA** 在多模态基础模型（OCR, LocateAnything）和音频识别方面持续发力，巩固了其在全栈 AI 基础设施中的地位。

## 4. 值得探索

1.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   **理由：** 作为代码专用模型，它在保持较小体积（12B）的同时，通过复杂的微调策略（Fable5 + Composer2.5）实现了极高的下载量和点赞数，是本地部署高效编程助手的绝佳选择。

2.  **baidu/Unlimited-OCR**
    *   **理由：** 在文档数字化和信息提取场景中，OCR 精度至关重要。该模型高居榜首，说明其在复杂版面、多语言或低质量图像下的表现可能优于现有开源方案，值得集成到生产环境中。

3.  **unsloth/GLM-5.2-GGUF**
    *   **理由：** 结合了最新一代 GLM-5.2 的架构优势与 Unsloth 的高效推理技术。对于希望体验最新 MoE 模型性能并控制硬件成本的开发者来说，这是一个兼具前沿性和实用性的标杆模型。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*