# Hugging Face 热门模型日报 2026-08-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-13 01:04 UTC

---

# Hugging Face 热门模型日报

**日期：** 2026-08-13

---

### 📅 今日速览

本周 Hugging Face 生态呈现出 **"多模态爆发与量化微调"** 并行的格局。MiniMax 的 **H3** 系列模型（尤其是 H3-Turbo）在视频生成领域占据统治地位，下载量突破千万；DeepSeek 的 **V4-Flash** 以极高的下载量（超百万）和性价比，成为本地化部署的新宠。同时，社区对 Qwen 和 Muse 系列的量化版本（GGUF）需求激增，显示出用户对高效本地推理的强烈偏好。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型名 | 作者/点赞/下载 | 一句话说明 |
| :--- | :--- | :--- |
| **Kimi-K3**<br>[链接](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,583 点赞**<br>目前点赞数最高的模型，集成了图像理解功能，具备强大的特征提取能力。 |
| **DeepSeek-V4-Flash-0731**<br>[链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | **1,048,685 下载**<br>高吞吐量的文本生成模型，尽管点赞数略逊于 Kimi，但下载量证明了其在实际应用中的受欢迎程度。 |
| **Qwen3.8-2.4T-A95B**<br>[链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | **978 下载**<br>Qwen 家族最新的大型 MoE 模型，专注于文本生成任务，提供高性价比的推理体验。 |
| **NVIDIA-Nemotron-3.5-Lightning-30B**<br>[链接](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | **19,250 下载**<br>NVIDIA 推出的高能效模型，专为 NVIDIA 硬件优化，展示了硬件厂商在生态中的主导作用。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型名 | 作者/点赞/下载 | 一句话说明 |
| :--- | :--- | :--- |
| **MiniMax-H3**<br>[链接](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | **3,716 点赞**<br>**视频生成霸主**，支持图生视频和文生视频，是目前最热门的视频生成模型之一。 |
| **Muse-Glimmer-30B**<br>[链接](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | **1,295 点赞**<br>Meta 发布的图像到文本模型，支持多模态对话，性能强劲。 |
| **LTX-2.5**<br>[链接](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | **568 点赞**<br>Lightricks 推出的新一代视频生成模型，提供单文件扩散模型解决方案。 |
| **NVIDIA-NemotronLabs-VoiceChat-11B**<br>[链接](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | **352 点赞**<br>NVIDIA 发布的语音聊天模型，专注于人机语音交互。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型名 | 作者/点赞/下载 | 一句话说明 |
| :--- | :--- | :--- |
| **Ling-3.0-flash**<br>[链接](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | **318 点赞**<br>高效的文本生成模型，适合需要快速响应的对话场景。 |
| **LFM2.5-2.6B**<br>[链接](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | **582 点赞**<br>LiquidAI 推出的轻量级模型，在保持性能的同时大幅降低了参数量。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型名 | 作者/点赞/下载 | 一句话说明 |
| :--- | :--- | :--- |
| **MiniMax-H3-Turbo-Lora**<br>[链接](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | **701 点赞**<br>社区为 MiniMax H3 提供的 LoRA 适配器，主要用于文本生成和音频视频任务。 |
| **Qwen3.6-27B-Fable-Fusion-...-GGUF**<br>[链接](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | **1,955 点赞**<br>**下载量冠军（250万+）**，经过 Heretic 微调的 Qwen 模型 GGUF 版本，支持本地化部署。 |
| **DeepSeek-V4-Flash-0731-GGUF**<br>[链接](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | **666 点赞**<br>由 Unsloth 社区量化制作的 DeepSeek V4 Flash 版本，解决了大模型本地运行难的问题。 |
| **MiniMax-H3-GGUF**<br>[链接](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | **137 点赞**<br>MiniMax H3 模型的量化版本，为无法直接运行原始 Diffusion 模型的用户提供了便利。 |

---

### 📈 生态信号

1.  **MiniMax H3 系列成为现象级产品**：MiniMax H3 及其 Turbo 版本不仅在视频生成领域独占鳌头，其社区衍生品（LoRA、ComfyUI 节点、GGUF）也占据了榜单前半段，显示出强大的生态粘性。
2.  **GGUF 量化版本统治下载榜**：在下载量 Top 10 中，量化版本（GGUF）占据了显著位置，尤其是 Qwen 和 DeepSeek 的社区量化版本，反映了开发者对低硬件门槛、高性能本地部署的迫切需求。
3.  **开源与闭源的界限模糊**：虽然 Kimi-K3 和 DeepSeek-V4 由大公司发布，但社区微调版本（如 Heretic 系列和 Fable Fusion）的点赞和下载量极高，表明开源社区正在通过微调技术赋予闭源模型新的生命力。

---

### 🚀 值得探索

1.  **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   **理由**：目前 Hugging Face 点赞数最高的视频生成模型，下载量超过 8 万。它集成了文生视频、图生视频和图生文功能，是目前多模态 AI 的标杆模型。

2.  **[DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   **理由**：**下载量最高的模型**（超过 250 万）。这是一个经过 Heretic 系列微调的 Qwen 模型 GGUF 版本，非常适合在消费级显卡上运行，体验目前最前沿的对话能力。

3.  **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
    *   **理由**：拥有百万级下载量，证明了其在工业界和开发者社区中的实用性。作为高吞吐量的文本模型，它是构建 RAG（检索增强生成）系统和构建复杂对话机器人的理想选择。

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*