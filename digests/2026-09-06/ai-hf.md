# Hugging Face 热门模型日报 2026-09-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-05 16:16 UTC

---

# Hugging Face 热门模型日报

**日期：** 2026-09-06

---

### 📊 今日速览

DeepSeek 发布的 V4 Flash 视觉模型成为本周新星，迅速跻身热门榜前列。以 Qwen3.8 和 GLM-5.3 为首的开源多模态家族持续占据流量高地。社区对于 GGUF 量化版本的需求旺盛，特别是针对 Qwen 和 GLM 系列的“去 censor”与 FP8 优化版本层出不穷。此外，MiniMax H3 和 LTX-2.5 等视频生成模型在特定垂直领域表现亮眼，显示出开源视频生成能力的快速追赶。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

*   **Qwen/Qwen3.8-27B**
    *   **作者：** Qwen | **点赞：** 14,007 | **下载：** 6,024,467
    *   **说明：** 7B 规模下的全能选手，支持图像理解，是目前 Hugging Face 上下载量最大的模型，社区关注度极高。
    *   [链接](https://huggingface.co/Qwen/Qwen3.8-27B)

*   **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**
    *   **作者：** deepseek-ai | **点赞：** 652 | **下载：** 184,542
    *   **说明：** DeepSeek 最新发布的 V4 视觉模型实验版，主打极速推理，在图像-文本处理任务上表现强劲。
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)

*   **zai-org/GLM-5.3**
    *   **作者：** zai-org | **点赞：** 1,713 | **下载：** 370,417
    *   **说明：** GLM 系列的旗舰模型，支持多模态输入，在复杂对话和长文本处理上表现优异。
    *   [链接](https://huggingface.co/zai-org/GLM-5.3)

*   **tencent/Hy4-preview**
    *   **作者：** tencent | **点赞：** 439 | **下载：** 6,195
    *   **说明：** 腾讯混元系列的最新预览模型，专注于高质量文本生成。
    *   [链接](https://huggingface.co/tencent/Hy4-preview)

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **Lightricks/LTX-2.5**
    *   **作者：** Lightricks | **点赞：** 2,849 | **下载：** 1,484,329
    *   **说明：** 强大的图像到视频生成模型，支持文生视频和图生视频，在生成流畅度上备受好评。
    *   [链接](https://huggingface.co/Lightricks/LTX-2.5)

*   **MiniMaxAI/MiniMax-H3**
    *   **作者：** MiniMaxAI | **点赞：** 4,926 | **下载：** 5,057,414
    *   **说明：** 顶级的文生视频模型，支持图像到视频，在社区中拥有庞大的粉丝基础和高下载量。
    *   [链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)

*   **google/timesfm-3.0-pytorch**
    *   **作者：** google | **点赞：** 443 | **下载：** 123,025
    *   **说明：** Google 推出的时序预测模型，用于处理时间序列数据的预测任务。
    *   [链接](https://huggingface.co/google/timesfm-3.0-pytorch)

*   **openai/clip-vit-base-patch32**
    *   **作者：** openai | **点赞：** 1,189 | **下载：** 20,755,211
    *   **说明：** 经典的 CLIP 模型，用于零样本图像分类和多模态检索，是 AI 生态的基础设施组件。
    *   [链接](https://huggingface.co/openai/clip-vit-base-patch32)

#### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **sentence-transformers/all-MiniLM-L6-v2**
    *   **作者：** sentence-transformers | **点赞：** 5,528 | **下载：** 255,006,933
    *   **说明：** 语义嵌入领域的“瑞士军刀”，下载量极高，广泛用于文本相似度计算和 RAG 系统中。
    *   [链接](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)

*   **openai-community/gpt2**
    *   **作者：** openai-community | **点赞：** 3,667 | **下载：** 14,739,982
    *   **说明：** GPT-2 的开源版本，尽管架构较老，但仍是学习自然语言处理和 Transformers 架构的经典入门模型。
    *   [链接](https://huggingface.co/openai-community/gpt2)

*   **facebook/mms-300m**
    *   **作者：** facebook | **点赞：** 239 | **下载：** 12,961
    *   **说明：** Meta 的多语言语音模型，旨在覆盖 1,000 多种语言。
    *   [链接](https://huggingface.co/facebook/mms-300m)

#### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **unsloth/Qwen3.8-27B-GGUF**
    *   **作者：** unsloth | **点赞：** 3,531 | **下载：** 10,157,510
    *   **说明：** 经过 Unsloth 优化和量化的 Qwen 27B 版本，大幅降低显存占用，是本地部署的首选之一。
    *   [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)

*   **orcarouter/Qwen3.8-27B-Uncensored-GGUF**
    *   **作者：** orcarouter | **点赞：** 724 | **下载：** 283,774
    *   **说明：** 针对 Qwen 3.8 的“去 censor”版本，允许更自由的对话，在本地社区中需求旺盛。
    *   [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)

*   **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**
    *   **作者：** HauhauCS | **点赞：** 956 | **下载：** 1,527,627
    *   **说明：** 一个高人气、高下载量的 Qwen 3.8 修改版 GGUF，强调激进和自由度。
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)

*   **OBLITERATUS/Qwen3.8-27B-OBLITERATED**
    *   **作者：** OBLITERATUS | **点赞：** 1,093 | **下载：** 968,936
    *   **说明：** 使用 MLX 框架优化的 Qwen 模型，支持苹果 Silicon 设备的高效本地运行。
    *   [链接](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)

---

### 📡 生态信号

当前 Hugging Face 生态呈现出 **“多模态爆发”与“量化普及”并进** 的态势。

1.  **家族势能：** **Qwen** 和 **GLM** 两大家族构成了当前开源模型的主力军。Qwen 3.8 凭借全能表现稳居下载榜首，而 GLM 5.3 则在多模态和文本生成上紧随其后。DeepSeek 的 V4 系列则展示了纯视觉模型在效率上的突破。
2.  **量化趋势：** 社区对于 **GGUF** 格式的依赖度极高，尤其是针对 Qwen 和 GLM 的各种量化版本（FP8、Quantized）。这表明用户正在积极将大模型部署到消费级硬件上。
3.  **内容导向：** “Uncensored”（去审查）和“Abliterated”（去版权/去标记）类模型在 GGUF 分类中占据显著位置，反映了用户对内容自由度和模型黑盒程度的特定需求。

---

### 🚀 值得探索

1.  **Qwen/Qwen3.8-27B**
    *   **理由：** **目前的“万金油”模型**。无论你是需要写代码、做图文理解还是日常对话，这个模型都能胜任，且拥有最完善的社区支持和量化版本。
    *   [链接](https://huggingface.co/Qwen/Qwen3.8-27B)

2.  **unsloth/Qwen3.8-27B-GGUF**
    *   **理由：** **本地部署的最佳实践**。如果你想在本地电脑上跑大模型，这个版本是经过 Unsloth 优化的“黄金标准”，在速度和显存占用上做到了极致平衡。
    *   [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)

3.  **Lightricks/LTX-2.5**
    *   **理由：** **视频生成的潜力股**。相比 MiniMax H3 等商业级模型，LTX-2.5 更容易获取，且在开源社区中展现出了惊人的生成质量，适合创作者尝试。
    *   [链接](https://huggingface.co/Lightricks/LTX-2.5)

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*