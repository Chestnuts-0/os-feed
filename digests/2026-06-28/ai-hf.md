# Hugging Face 热门模型日报 2026-06-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-28 02:32 UTC

---

# Hugging Face 热门模型日报
**日期**：2026-06-28

## 1. 今日速览
2026年6月28日的HF榜单呈现出“多模态视觉增强”与“高效量化部署”并行的显著特征。百度 Unlimited-OCR 凭借极高的下载量领跑，显示OCR任务在工业界仍具强劲需求；同时，GLM-5.2、Qwen3.5/3.6 及 Gemma-4 等新一代架构的 GGUF 量化版本密集涌现，表明社区正加速向本地化、低成本推理迁移。此外，NVIDIA 推出的 NVFP4 优化模型及各类 Uncensored（去限制）微调版的热度，反映了开发者对特定场景性能极致压榨及自由创作工具的持续探索。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 👍 2,686 | ⬇️ 98,994
    *   智谱最新一代 MoE 架构大模型，原生支持长上下文与复杂推理，是本周中文语境下最受关注的原生开源基座。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 👍 2,279 | ⬇️ 3,331,475
    *   基于 Qwen3.6 MoE 架构的去限制微调版，以惊人的下载量成为本周最活跃的社区微调模型，满足无约束创意写作需求。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | 作者: deepreinforce-ai | 👍 332 | ⬇️ 20,266
    *   Ornith 系列 35B 规模的 GGUF 量化版本，旨在平衡中等规模模型的推理速度与多模态理解能力。
*   **deepreinforce-ai/Ornith-1.0-9B-GGUF**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | 作者: deepreinforce-ai | 👍 222 | ⬇️ 11,034
    *   Ornith 系列轻量级 9B 量化版，适合资源受限环境下的快速部署与边缘计算场景。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | 作者: deepseek-ai | 👍 129 | ⬇️ 0
    *   DeepSeek V4 Pro 的专业分布式训练/推理适配版本，虽下载为0但代表了厂商对高端推理链路的最新支持。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 👍 1,141 | ⬇️ 212,760
    *   百度发布的通用 OCR 模型，支持高精度文本识别与提取，是本周下载量最高的垂直领域模型。
*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 👍 2,409 | ⬇️ 570,466
    *   NVIDIA 推出的细粒度物体定位多模态模型，能在图像中精确框出指定对象，填补了视觉 grounding 领域的空白。
*   **MiniMaxAI/MiniMax-M3**
    *   [链接](https://huggingface.co/MiniMaxAI/MiniMax-M3) | 作者: MiniMaxAI | 👍 1,253 | ⬇️ 182,714
    *   MiniMax 最新多模态大模型 M3，具备强大的图文理解与生成能力，是国产多模态阵营的重要更新。
*   **krea/Krea-2-Turbo**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo) | 作者: krea | 👍 311 | ⬇️ 17,445
    *   Krea 系列的加速版文生图模型，专注于提升生成速度与实时交互体验。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 作者: nvidia | 👍 719 | ⬇️ 61,857
    *   NVIDIA Nemotron 系列的流式语音识别模型，专为低延迟实时转写场景优化。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 👍 2,427 | ⬇️ 536,130
    *   基于 Gemma-4 的代码专用微调版，结合 Fable5 数据集强化编程逻辑，是本周最受欢迎的编码助手之一。
*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B) | 作者: WeiboAI | 👍 742 | ⬇️ 57,521
    *   微博团队发布的轻量级数学推理模型，在小参数规模下展现了出色的逻辑推导能力。
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | 作者: yuxinlu1 | 👍 734 | ⬇️ 206,828
    *   面向智能体（Agentic）任务的 Gemma-4 变体，强化了终端操作与复杂任务规划能力。
*   **microsoft/FastContext-1.0-4B-SFT**
    *   [链接](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | 作者: microsoft | 👍 365 | ⬇️ 6,447
    *   微软推出的快速上下文处理模型，旨在优化长窗口下的信息检索与摘要效率。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 👍 677 | ⬇️ 712,627
    *   基于 Qwen3.5 的 1M 超长上下文 GGUF 量化版，以极高的下载量证明了对超长文档处理的巨大需求。
*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF) | 作者: unsloth | 👍 426 | ⬇️ 125,230
    *   Unsloth 团队提供的 GLM-5.2 高效量化版本，利用其加速技术优化了推理速度。
*   **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   [链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | 作者: nvidia | 👍 367 | ⬇️ 5,022,254
    *   NVIDIA 官方发布的 Qwen3.6 MoE 模型的 NVFP4 格式版本，专为 NVIDIA GPU 硬件加速优化，下载量极高。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | 作者: empero-ai | 👍 491 | ⬇️ 30,298
    *   上述 GGUF 版本的原始 Transformer 格式，供需要自定义训练流程的用户使用。
*   **HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced**
    *   [链接](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced) | 作者: HauhauCS | 👍 97 | ⬇️ 32,222
    *   采用 QAT（量化感知训练）技术的去限制 Gemma-4 模型，试图在保持高性能的同时解除内容限制。

## 3. 生态信号

本周生态信号指向**“MoE 架构的主流化”**与**“极致量化落地”**。Qwen3.5/3.6、GLM-5.2 及 Ornith 系列均大量采用 MoE 设计，显示出行业对稀疏激活以提升效率的追求已达成共识。同时，**NVFP4**（NVIDIA 专有格式）和 **GGUF** 格式的密集出现，标志着开源模型正从“可用”转向“高效可用”，特别是 NVIDIA 官方介入优化（如 Qwen3.6 NVFP4），加速了高端开源模型在消费级或企业级显卡上的部署。此外，“Uncensored”类微调模型的高下载量表明，尽管合规性重要，但用户对无束缚创作工具的需求依然旺盛，社区微调正在填补这一细分市场。

## 4. 值得探索

1.  **nvidia/LocateAnything-3B**
    *   **理由**：NVIDIA 入局细粒度视觉定位，解决了传统 OCR 或检测模型无法灵活响应用户自然语言查询的痛点，对于构建高精度视觉检索应用极具价值。
2.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   **理由**：实现了 1M 上下文窗口的本地化运行，对于需要处理超长文档、代码库或法律卷宗的开发者来说，这是一个性价比极高的解决方案。
3.  **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   **理由**：代表了硬件与软件协同优化的前沿。通过 NVFP4 格式，可以在 NVIDIA 硬件上以极低的延迟和高吞吐量运行 35B 参数的 MoE 模型，是生产环境部署的理想候选。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*