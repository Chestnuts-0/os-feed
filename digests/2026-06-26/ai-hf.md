# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-26 05:34 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-26
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
今日 HF 榜单被中国大模型厂商（智谱、百度、微博、快手等）及 Google Gemma 4 系列强势占据，显示出“后开源时代”社区对高性能基础模型的极高关注度。**DeepSeek-V4-Pro** 以超过 5,000 点赞登顶，而 **GLM-5.2** 和 **Gemma-4** 的衍生版本在代码与多模态领域表现活跃。值得注意的是，**Uncensored（无限制）** 模型和 **AGI/Agent 导向** 的微调模型下载量激增，反映出开发者对模型自主推理能力和边界测试的强烈需求。量化格式（GGUF）和特定领域优化（如 OCR、ASR）依然是社区贡献的重点。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **deepseek-ai/DeepSeek-V4-Pro**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | 作者: deepseek-ai | 👍 5,064 | ⬇️ 1,878,217
    *   **说明：** 本周绝对王者，作为 DeepSeek 的最新旗舰，其极高的点赞和下载量证明了其在通用对话和复杂推理任务中的统治力。
*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 👍 2,501 | ⬇️ 67,107
    *   **说明：** 智谱最新一代 MoE 架构模型，凭借高效的推理性能和优秀的多轮对话能力，成为国产 LLM 的新标杆。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 👍 2,243 | ⬇️ 3,520,206
    *   **说明：** 基于 Qwen3.6 的“去护栏”版本，下载量惊人，反映了社区对突破安全限制、进行红队测试或自由创作的需求巨大。
*   **google/gemma-4-12B-it**
    *   [链接](https://huggingface.co/google/gemma-4-12B-it) | 作者: google | 👍 1,183 | ⬇️ 2,187,644
    *   **说明：** Google Gemma 4 系列的指令微调版，凭借小尺寸和高性能，在边缘部署和轻量级应用中持续保持高热度。
*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF) | 作者: unsloth | 👍 390 | ⬇️ 88,915
    *   **说明：** GLM-5.2 的高效量化版本，利用 Unsloth 技术优化推理速度，是本地部署大型模型的首选之一。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 👍 2,367 | ⬇️ 407,838
    *   **说明：** NVIDIA 推出的高精度图像定位模型，支持细粒度物体检测，在多模态检索和视觉理解任务中表现优异。
*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 👍 915 | ⬇️ 70,743
    *   **说明：** 百度发布的无限分辨率 OCR 模型，解决了长图、复杂排版文档识别的行业痛点，实用价值极高。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 作者: nvidia | 👍 699 | ⬇️ 50,553
    *   **说明：** 极小体积的流式语音识别模型，专为低延迟、资源受限的实时语音交互场景设计。
*   **krea/Krea-2-Turbo**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo) | 作者: krea | 👍 250 | ⬇️ 2,996
    *   **说明：** Krea 新一代图像生成模型的加速版，旨在提供更快的文生图体验，吸引追求效率的创作者。
*   **MiniMaxAI/MiniMax-M3**
    *   [链接](https://huggingface.co/MiniMaxAI/MiniMax-M3) | 作者: MiniMaxAI | 👍 1,241 | ⬇️ 154,350
    *   **说明：** 稀宇科技的多模态旗舰模型，具备强大的图文理解与生成能力，在综合多模态榜单中表现强劲。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 👍 2,368 | ⬇️ 495,813
    *   **说明：** 针对代码生成优化的 Gemma 4 变体，经过 Fable5 等数据集增强，在编程辅助场景中备受开发者青睐。
*   **moonshotai/Kimi-K2.7-Code**
    *   [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | 作者: moonshotai | 👍 992 | ⬇️ 502,106
    *   **说明：** 月之暗面 Kimi 系列的代码专用模型，结合了超长上下文优势，在复杂代码理解和生成任务中表现突出。
*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B) | 作者: WeiboAI | 👍 716 | ⬇️ 51,717
    *   **说明：** 微博 AI 团队推出的小型数学推理模型，专注于提升小参数模型在数学解题上的逻辑链能力。
*   **datalab-to/lift**
    *   [链接](https://huggingface.co/datalab-to/lift) | 作者: datalab-to | 👍 152 | ⬇️ 5,189
    *   **说明：** 针对 PDF 解析和结构化信息提取的专用模型，服务于文档智能化处理场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | 作者: yuxinlu1 | 👍 626 | ⬇️ 165,187
    *   **说明：** 强调 Agent 能力的 Gemma 4 量化版，通过特殊训练数据增强了模型的工具调用和自主规划能力。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 👍 501 | ⬇️ 134,294
    *   **说明：** 基于 Qwen3.5 架构的 100 万上下文窗口模型，经过深度量化，适合需要长文档处理的本地部署场景。
*   **HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced**
    *   [链接](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced) | 作者: HauhauCS | 👍 84 | ⬇️ 15,128
    *   **说明：** 采用 QAT（量化感知训练）技术的无限制 Gemma 4 模型，平衡了性能与自由度，是技术型用户的研究热点。
*   **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   [链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | 作者: nvidia | 👍 343 | ⬇️ 4,602,255
    *   **说明：** NVIDIA 官方提供的 Qwen3.6 极致压缩版本，使用 NVFP4 格式，极大降低了显存占用，下载量爆表。

## 3. 生态信号
当前生态呈现**“小而精”与“大而全”两极分化**的趋势。一方面，**DeepSeek** 和 **Gemma 4** 家族持续霸榜，证明头部基础模型的迭代速度和质量仍是社区核心关注点；另一方面，**NVIDIA** 和 **Unsloth** 等机构主导的**极端量化技术**（如 NVFP4、GGUF）下载量惊人，表明开发者正积极寻求在消费级硬件上运行超大模型的技术路径。此外，**Uncensored** 类模型的高活跃度揭示了社区对模型“自由度”和“安全性边界”的持续博弈，同时也催生了大量针对特定任务（如代码、OCR、Agent）的垂直微调模型，专用化、工具化成为主流。

## 4. 值得探索
1.  **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   **理由：** 仅 4.6M+ 的下载量显示其普及度极高。它展示了 NVIDIA 如何通过创新的 FP4 量化技术，将 35B 参数的 MoE 模型压缩到极低显存占用，是研究高效推理和边缘部署的绝佳案例。
2.  **baidu/Unlimited-OCR**
    *   **理由：** 解决了真实世界中最常见的痛点——长图和复杂排版。对于从事文档数字化、知识图谱构建或 RAG 系统的开发者来说，这是一个极具实用价值的开箱即用模型。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   **理由：** Gemma 4 在代码领域的潜力被进一步挖掘。该模型通过特定的训练策略增强了代码推理能力，且提供 GGUF 格式，方便开发者在本地快速搭建智能编码助手，性价比极高。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*