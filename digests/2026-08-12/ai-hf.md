# Hugging Face 热门模型日报 2026-08-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 01:03 UTC

---

# Hugging Face 热门模型日报

**日期：** 2026-08-12

---

## 1. 今日速览

本周 Hugging Face 生态呈现 **"多模态爆发"** 与 **"垂直量化微调"** 并行的态势。MiniMax AI 的 **H3 系列视频生成模型** 凭借极高的下载数成为本周现象级产品，尤其是 ComfyUI 集成版；同时，Moonshot AI 的 **Kimi-K3** 凭借 1.5M+ 下载量登顶语言模型榜，展现出强大的多模态理解能力。此外，DeepSeek V4 Flash 与 LiquidAI LFM2.5 等模型在量化版本上表现活跃，社区对 **GGUF** 格式的偏好持续升温。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话、指令微调）
*   **moonshotai/Kimi-K3** (作者: moonshotai)
    *   📊 **点赞:** 10,525 | 📥 **下载:** 1,565,484
    *   📝 **说明:** 月之暗面发布的多模态大模型，支持图像文本理解与生成。凭借极高的实用性和流畅的交互体验，成为本周下载量最高的模型。
    *   🔗 [https://huggingface.co/moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)

*   **deepseek-ai/DeepSeek-V4-Flash-0731** (作者: deepseek-ai)
    *   📊 **点赞:** 3,150 | 📥 **下载:** 1,048,685
    *   📝 **说明:** DeepSeek 的高效推理模型，专为快速响应设计。虽然点赞数略低于 Kimi，但拥有海量的下载量，是长文本生成领域的硬核选择。
    *   🔗 [https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)

*   **baidu/Unlimited-OCR** (作者: baidu)
    *   📊 **点赞:** 4,018 | 📥 **下载:** 2,892,191
    *   📝 **说明:** 百度推出的高精度 OCR 模型，在榜单下载量中仅次于 Kimi-K3，展现了工业级文档理解能力在开源社区的巨大需求。
    *   🔗 [https://huggingface.co/baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)

### 🎨 多模态与生成（图像、视频、音频）
*   **MiniMaxAI/MiniMax-H3** (作者: MiniMaxAI)
    *   📊 **点赞:** 3,574 | 📥 **下载:** 59,368
    *   📝 **说明:** **本周核心爆款**。MiniMax 开源的文本/图像生成视频模型，画质与连贯性极佳，是视频生成领域的焦点。
    *   🔗 [https://huggingface.co/MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)

*   **meta-models/Muse-Glimmer-30B** (作者: meta-models)
    *   📊 **点赞:** 1,093 | 📥 **下载:** 0
    *   📝 **说明:** Meta 推出的 300B+ 规模多模态模型，专注于图像-文本-文本的对话交互，代表了闭源多模态大模型的最新水平。
    *   🔗 [https://huggingface.co/meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)

*   **nvidia/NVIDIA-NemotronLabs-VoiceChat-11B** (作者: nvidia)
    *   📊 **点赞:** 325 | 📥 **下载:** 653
    *   📝 **说明:** NVIDIA 发布的语音对话模型，支持高保真语音生成与交互，体现了硬件厂商在生成式语音领域的布局。
    *   🔗 [https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)

### 🔧 专用模型（代码、数学、嵌入）
*   **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4** (作者: nvidia)
    *   📊 **点赞:** 125 | 📥 **下载:** 19,250
    *   📝 **说明:** NVIDIA 针对特定硬件优化的 30B 语言模型，采用 NVFP4 量化格式，在消费级显卡上能以更低的显存占用运行，适合开发者本地部署。
    *   🔗 [https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **DavidAU/Qwen3.6-27B-Fable-Fusion...** (作者: DavidAU)
    *   📊 **点赞:** 1,897 | 📥 **下载:** 2,521,093
    *   📝 **说明:** 基于 Qwen3.6 的大规模社区微调模型，包含 Heretic、Uncensored 等标签，下载量极高，反映了社区对高质量中文/多语言模型的需求。
    *   🔗 [https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)

*   **unsloth/DeepSeek-V4-Flash-0731-GGUF** (作者: unsloth)
    *   📊 **点赞:** 649 | 📥 **下载:** 207,990
    *   📝 **说明:** 由 UnSloth 社区提供的 DeepSeek V4 Flash GGUF 量化版本，极大地降低了用户在本地运行 DeepSeek 模型的门槛。
    *   🔗 [https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)

*   **LiquidAI/LFM2.5-2.6B-GGUF** (作者: LiquidAI)
    *   📊 **点赞:** 201 | 📥 **下载:** 111,942
    *   📝 **说明:** LiquidAI 2.6B 模型的 GGUF 版本，专为 CPU 运行优化，是轻量级本地大模型部署的热门选择。
    *   🔗 [https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)

---

## 3. 生态信号

**MiniMax H3 现象级崛起：** MiniMax 的 H3 系列模型在榜单中占据主导地位，从原始模型到 ComfyUI 插件、LoRA 适配器应有尽有，显示出该模型家族在视频生成领域的统治力。

**GGUF 量化持续活跃：** 尽管原始模型下载量巨大，但 GGUF 格式的衍生版本（如 DeepSeek V4 Flash 和 LiquidAI LFM2.5）下载量同样可观，这表明社区用户更倾向于在本地硬件上运行量化后的模型。

**社区微调与商业闭源并存：** 一方面，DeepSeek、Moonshot、LiquidAI 等商业/研究机构模型占据榜单前列；另一方面，DavidAU、Kijai 等社区开发者通过 GGUF 和 LoRA 对这些模型进行二次开发，形成了丰富的生态系统。

---

## 4. 值得探索

1.  **Comfy-Org/MiniMax-H3**
    *   **理由：** 这是 MiniMax-H3 的官方 ComfyUI 集成版本，拥有 **670万+** 的下载量。如果你是 Stable Diffusion 用户或对 ComfyUI 工作流感兴趣，这是体验最新视频生成技术的最佳入口。
    *   🔗 [https://huggingface.co/Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)

2.  **DavidAU/Qwen3.6-27B-Fable-Fusion...**
    *   **理由：** 下载量超过 250 万，是社区微调模型的标杆。它展示了如何通过微调让通用大模型具备特定的对话风格或能力，适合研究社区微调策略和 LoRA/Adapter 技术的人士。
    *   🔗 [https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)

3.  **unsloth/DeepSeek-V4-Flash-0731-GGUF**
    *   **理由：** 适合本地硬件资源有限的开发者。DeepSeek V4 Flash 本身以快速著称，经过 GGUF 量化后，可以在普通家用电脑上流畅运行，是体验 2026 年最新推理模型架构的实惠选择。
    *   🔗 [https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*