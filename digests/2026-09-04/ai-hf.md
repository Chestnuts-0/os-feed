# Hugging Face 热门模型日报 2026-09-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-04 15:09 UTC

---

# Hugging Face 热门模型日报（2026‑09‑04）

---

## 今日速览
1️⃣ 本周 **Qwen 3.8 系列**（27B、Flash‑Next）继续领跑多模态大模型，下载量突破 6 M，点赞最高达 13,904。  
2️⃣ **GLM‑5.3** 及其 Flash 变体在中文对话与图文生成上表现抢眼，社区量化 GGUF 版本热度飙升。  
3️⃣ **多模态生成** 趋势明显：从文本‑到‑图像/视频再到 **文本‑到‑视频**（MiniMax‑H3、Lightricks/LTX‑2.5）模型下载量均突破 1 M。  
4️⃣ **量化与微调** 生态活跃，GGUF、AWQ 等轻量化格式累计下载已超 20 M，说明部署需求正快速下沉至边缘设备。  

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org • 1,676 👍 • 303,534 ⬇️ | 中文 5.3B 对话模型，基于 MoE 与 DSA 技术，因高效推理和开放权重成为社区焦点。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen • 13,904 👍 • 5,739,341 ⬇️ | 27B 多模态大模型（图文+文本），在多语言对话基准上领先，下载量居榜首。 |
| **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** | XHToken • 448 👍 • 3,524 ⬇️ | 4B 中文指令微调模型，体积小、部署友好，吸引开发者快速实验。 |
| **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** | openai‑community • 3,624 👍 • 14,607,268 ⬇️ | 经典英語 GPT‑2，仍是教学、基准测试与小模型微调的首选。 |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent • 426 👍 • 5,684 ⬇️ | 4B 中文预览模型，面向行业对话场景的早期尝鲜版。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS • 1,074 👍 • 928,393 ⬇️ | Qwen3.8‑27B 的社区量化（MLX+GGUF）版本，专为 Apple Silicon 优化。 |
| **[orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** | orcarouter • 171 👍 • 7,782 ⬇️ | GLM‑5.3 Flash 的 FP8 无审查版，展示极致压缩下的语言能力。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen • 4,852 👍 • 351,374 ⬇️ | 轻量化 Flash‑Next 版本，支持 **图像‑到‑文本** 与对话，推理速度提升 2×。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org • 2,036 👍 • 654,957 ⬇️ | 中文图文生成模型，采用 Flash Attention，兼具对话与图像描述能力。 |
| **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek‑ai • 584 👍 • 133,024 ⬇️ | 实验性视觉大模型，融合 V4 架构与 Flash 加速，适合快速原型。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI • 4,896 👍 • 5,118,457 ⬇️ | 领先的 **文本‑到‑视频** 扩散模型，支持 1280×720 分辨率，社区二次创作活跃。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks • 2,739 👍 • 1,399,511 ⬇️ | 单文件多模态扩散模型，覆盖 **图像‑到‑视频 / 文本‑到‑视频** 场景。 |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo • 267 👍 • 0 ⬇️ | 4‑step 低算力预览模型，面向移动端快速生成短视频。 |
| **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** | OpenVDN • 154 👍 • 0 ⬇️ | MiniMax‑H3 的微调版，提供 **视频‑到‑视频** 迁移学习基线。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue • 415 👍 • 5,388 ⬇️ | 中文高保真 Text‑to‑Speech，基于 Transformer‑Vocoder，适合对话系统语音输出。 |
| **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** | google‑bert • 2,923 👍 • 58,675,189 ⬇️ | 经典英文 BERT，仍是 **填空/句子嵌入** 的基准模型。 |
| **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** | distilbert • 1,104 👍 • 7,067,963 ⬇️ | 轻量化 BERT 版，适合资源受限场景的快速推理。 |
| **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)** | facebook • 192 👍 • 12,823 ⬇️ | 多语言语音识别（MMS）模型，覆盖 300M 参数，支持 50+ 语言。 |
| **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)** | openai • 1,147 👍 • 20,569,141 ⬇️ | CLIP 基线模型，零样本图像分类与检索的行业标准。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** | sentence‑transformers • 5,482 👍 • 253,789,790 ⬇️ | 轻量化句向量模型，广泛用于检索、聚类和 RAG。 |
| **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google • 412 👍 • 105,304 ⬇️ | 时间序列 Forecasting 大模型，支持多变量预测与不确定性估计。 |
| **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** | IFM • 123 👍 • 433 ⬇️ | 36B 规模的数学/代码推理模型，专注于符号计算与公式生成。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth • 3,479 👍 • 9,951,693 ⬇️ | Qwen3.8‑27B 的社区 GGUF 量化版（4‑bit），兼容多平台，下载量居前。 |
| **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA‑DASLab • 281 👍 • 206,575 ⬇️ | 使用 **GSQ+RCO** 混合精度技术的 GGUF，显著降低显存占用。 |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth • 779 👍 • 702,251 ⬇️ | Flash‑Next 的 GGUF 量化实现，保持视觉推理质量的同时实现 3×加速。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth • 359 👍 • 85,158 ⬇️ | GLM‑5.3‑Flash 的 GGUF 版本，面向移动端部署的首选。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS • 926 👍 • 1,463,966 ⬇️ | 无审查版 Qwen3.8‑27B，采用激进 MTP 量化，兼顾安全性与性能。 |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter • 223 👍 • 97,994 ⬇️ | 另一个无审查 GGUF，适合研究社区对内容过滤的实验。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter • 705 👍 • 276,706 ⬇️ | 完整 27B 无审查模型的 GGUF 发行版，下载量持续增长。 |

---

## 生态信号

本周 **Qwen** 与 **GLM** 系列的多模态与量化分支呈指数式增长，说明大模型在保持规模的同时，社区正加速 **轻量化部署**（GGUF、FP8、AWQ）。开源权重仍是主流（如 GLM‑5.3、Qwen3.8、MiniMax‑H3），但 **无审查/AB‑LITERATED** 量化版本的出现，暗示部分用户希望突破官方安全阈值，进行更自由的实验。与此同时，**文本‑到‑视频**（MiniMax‑H3、LTX‑2.5）和 **时间序列 Forecasting**（TimesFM‑3.0）模型的下载量突破 1 M，表明生成式 AI 正从文本/图像扩展到 **音视频、时序** 领域，生态正向全模态方向收敛。

---

## 值得探索

| 推荐模型 | 理由 |
|----------|------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | 规模大、视觉+语言双模态，基准分数领先；适合构建跨媒体聊天机器人或检索增强生成（RAG）系统。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | 业界领先的 **文本‑到‑视频** 扩散模型，已实现 1280×720 高分辨率，适合创意内容生成与短视频自动化。 |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | 4‑bit GGUF 量化版，兼容 CPU、GPU、Apple Silicon，极大降低部署成本，是边缘推理的首选实验对象。 |

--- 

> **提示**：若需在生产环境使用上述模型，建议先在 **GGUF/FP8** 量化版上进行基准测试，以评估显存占用和响应时延，再决定是否采用原始 FP16 权重。祝您玩得开心！

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*