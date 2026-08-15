# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 00:38 UTC

---

# Hugging Face 热门模型日报

## 📅 今日速览
本周 HF Hub 上，**MiniMax-H3** 系列凭借其在视频生成领域的强大表现占据流量榜首，下载数突破千万，成为当之无愧的“现象级”模型。与此同时，**Kimi-K3** 以 10,672 的高点赞数登上多模态榜单，显示出国产多模态模型在国际社区的强劲影响力。在 LLM 领域，**DeepSeek-V4-Flash** 凭借极高的下载量成为新的爆款，而 Qwen 家族则继续通过多模态和 MoE 变体扩展其版图。

---

## 🚀 热门模型

### 🧠 语言模型 (LLM)

| 模型名 | 作者 | 点赞/下载 | 说明 |
| :--- | :--- | :--- | :--- |
| **Kimi-K3** | moonshotai | 10,672 / 1,974,635 | 月之暗面发布的强大多模态模型，支持图像理解和文本生成，下载数极高，是目前最热门的国产模型之一。 |
| **DeepSeek-V4-Flash-0731** | deepseek-ai | 3,383 / 1,606,491 | DeepSeek 最新发布的极速推理模型，在保持高性价比的同时提供优秀的推理能力，深受开发者欢迎。 |
| **Qwen3.8-2.4T-A95B** | Qwen | 914 / 3,832 | Qwen 家族最新的 MoE（混合专家）模型，参数规模巨大，专为高负载文本生成任务设计。 |
| **NVIDIA-NemotronLabs-VoiceChat-11B** | nvidia | 381 / 1,366 | NVIDIA 专为语音交互设计的模型，结合了最新的语音合成与理解技术。 |

### 🎨 多模态与生成 (视觉、视频、音频)

| 模型名 | 作者 | 点赞/下载 | 说明 |
| :--- | :--- | :--- | :--- |
| **MiniMax-H3** | MiniMaxAI | 3,920 / 1,997,541 | 开箱即用的多模态视频生成模型，支持文生视频、图生视频，是目前流量最高的视频生成模型。 |
| **MiniMax-Music3** | MiniMaxAI | 651 / 63 | 高质量的音乐生成模型，能够根据文本描述创作多样化的音乐作品。 |
| **LTX-2.5** | Lightricks | 856 / 207,830 | 专注于图像到视频生成的模型，在保持画面一致性和流畅度方面表现优异。 |
| **Anima-2.9B** | Gazingstars123 | 162 / 10,106 | 小型文本到图像生成模型，专为 ComfyUI 设计，适合本地快速生成。 |

### 🔧 专用模型 (代码、嵌入等)

| 模型名 | 作者 | 点赞/下载 | 说明 |
| :--- | :--- | :--- | :--- |
| **LFM2.5-2.6B** | LiquidAI | 615 / 124,172 | LiquidAI 推出的高性能小参数量语言模型，在性能与效率之间取得了良好平衡。 |
| **Nemotron-3.5-Lightning-30B** | nvidia | 143-257 / 34k-119k | NVIDIA 的极速语言模型，采用 NVFP4 等先进量化技术，适合在消费级 GPU 上部署。 |

### 📦 微调与量化 (社区生态)

| 模型名 | 作者 | 点赞/下载 | 说明 |
| :--- | :--- | :--- | :--- |
| **MiniMax-H3-GGUF** | unsloth | 156 / 136,774 | 将 MiniMax-H3 转换为 GGUF 格式，适配 llama.cpp 等本地推理工具，降低硬件门槛。 |
| **Qwen3.8-27B-GGUF** | unsloth | 791 / 0 | Qwen 3.8 的量化版本，方便用户在本地设备上运行。 |
| **DavidAU/Qwen3.6-27B-Fable...** | DavidAU | 2,016 / 2,891,524 | 经过社区大量微调的“无限制”版本，下载量惊人，体现了社区对开放模型的高度需求。 |
| **Comfy-Org/MiniMax-H3** | Comfy-Org | 1,317 / 11,768,622 | 针对 ComfyUI 工作流优化的 MiniMax-H3 模型，拥有全网最高的下载量之一。 |

---

## 📈 生态信号

本周生态呈现出 **“巨头主导多模态，社区深耕量化微调”** 的鲜明特征。

1.  **MiniMax 与 Kimi 的崛起**：MiniMax-H3 系列在 HF 上掀起了视频生成的热潮，大量 LoRA 和量化版本（如 GGUF）的涌现，表明该模型已成为社区开发的新基准。Kimi-K3 则在多模态榜单中遥遥领先，显示出国产开源模型在国际平台上的强劲势头。
2.  **量化与 GGUF 的统治力**：Unsloth 和 DavidAU 等贡献者主导了榜单中大量的 GGUF 模型。这些量化版本（特别是针对 MiniMax-H3 和 Qwen）极大地降低了视频和多模态模型的推理门槛，使得非专业硬件用户也能体验前沿技术。
3.  **模型家族的扩张**：Qwen 和 DeepSeek 继续保持高频更新，Qwen 甚至推出了 2.4T 超大 MoE 模型，DeepSeek 则在 Flash 和 Pro 两个版本上同时发力，抢占不同算力场景的市场。

---

## 🔍 值得探索

1.  **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** (推荐用于视频生成)
    *   **理由**：作为本周的“流量之王”，它支持文生视频、图生视频等多种模式，且官方提供了高质量的 Checkpoint，是体验最新视频生成技术的最佳选择。

2.  **[DavidAU/Qwen3.6-27B-Fable...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** (推荐用于本地 LLM)
    *   **理由**：虽然名字很长，但它拥有 289 万次的下载量。这是一个经过社区深度微调的 GGUF 版本，适合在消费级显卡上运行，体验经过调优的对话能力。

3.  **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** (推荐用于工作流开发)
    *   **理由**：拥有 1100 万+ 的下载量，它是 ComfyUI 社区对 MiniMax-H3 的适配版本。如果你是 Stable Diffusion 或视频生成工作流开发者，这是必玩的项目。

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*