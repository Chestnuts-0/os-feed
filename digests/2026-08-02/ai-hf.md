# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 01:48 UTC

---



# 📊 Hugging Face 热门模型日报
**日期：2026-08-02**

---

## 1. 今日速览

本月 HF 热点集中爆发于**国产大模型新迭代**与**超大参数开源化**：Kimi-K3 以近万点赞登顶，DeepSeek V4 Flash 持续领跑下载榜，GLM-5.2 成为多模态新标杆。同时，社区对 **Qwen3.6 系列**的微调/量化活动异常活跃，GGUF 格式的 uncensored 变体下载量飙升至百万级。百度 Unlimited-OCR 和 Microsoft Fara1.5-27B 也值得关注。

---

## 2. 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,948 | 2,814,414 | DeepSeek 主力文本生成模型，下载量突破 280 万，持续领跑开源 LLM 榜单。 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,429 | 15,366 | V4 Flash 的 0731 快照版本，附带 arXiv 论文，面向研究者和开发者。 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,737 | 1,683,442 | 智谱 GLM 系列最新对话模型，MoE+DSA 架构，开源多模态对话新标杆。 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 717 | 13,426 | Upstage 超大 250B 参数全开源码，是榜单上参数量最大的开源 LLM。 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 868 | 77,021 | Poolside 新一代文本生成模型，专注高质量指令遵循与长上下文。 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 611 | 27,892 | 纳米贝 3B 轻量级 LLM，适合端侧部署与低成本推理场景。 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 357 | 650 | 基于 Qwen3.5 MoE 的迷你版，适合快速实验与低资源环境。 |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 330 | 923 | Aquila 系列专业版，支持 agentic search 的开源代理模型。 |

---

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **9,490** | 559,924 | 月之暗面最新多模态模型（图文→文本），本周点赞第一，代表国产视觉语言模型新高度。 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,714 | 2,457,387 | 百度不限长度 OCR 模型，下载超 245 万，是视觉理解场景的实用利器。 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 172 | 10,525 | 微软多模态视觉语言模型，支持图像理解与对话交互。 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 242 | 2,775 | 微软 27B 级图像-文本-文本模型，支持 computer-use 场景。 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,672 | 59,076 | Thinking Machines 开源多模态模型，平衡性能与效率。 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 213 | 3,998 | Inkling 小型化版本，适合资源受限的边缘部署。 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 361 | 1,565 | 轻量级 CPU 友好 TTS 模型，面向边缘设备和本地语音合成场景。 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 166 | 3,254 | 0.6B 参数语音合成预览版，支持自然多语言 TTS。 |

---

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 391 | 10,771 | 专注代码生成与理解的开源模型，基于 Qwen3.5 MoE 架构。 |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 141 | 5,835 | 微软基于 BitNet 的语音识别模型，支持低精度推理与部署。 |

---

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Qwen3.6-27B Fable-Fusion Uncensored GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,237 | **1,173,001** | 社区对 Qwen3.6 的大热微调，un censored + MTP 多轮训练，GGUF 格式下载超 117 万。 |
| [Qwen3.6-35B-A3B Uncensored Genesis Hermes V6 GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 288 | 228,610 | Hermes 系列对 Qwen3.6 的 un censored 微调，GGUF 格式，社区活跃度高。 |
| [Qwen3.6-35B-A3B Escha W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 112 | 875 | EschaLabs 对 Qwen3.5 MoE 的 W2 量化微调，专注高效率推理。 |
| [Qwen3.5-9B The Defiant Fable Uncensored GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 186 | 267,572 | DavidAU 另一款热门社区微调，基于 Qwen3.5 的 9B 版本，下载 26 万+。 |
| [Qwen3.6-35B-A3B Uncensored HauhauCS Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,226 | **1,823,436** | 本周下载量最高模型（182 万），un censored + vision 能力，社区影响力强。 |
| [DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 289 | 4,048 | unsloth 出品的 DeepSeek V4 Flash GGUF 量化版，面向本地部署优化。 |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 243 | 41,337 | Kimi-K3 的 GGUF 量化版本，降低部署门槛，加速本地推理。 |
| [Solar-Open2-250B NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 22,396 | nota-ai 对 Solar-Open2 的 NVFP4 量化版本，适配 vLLM 高效推理。 |
| [Ternary-Bonsai-27B GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,134 | 716,341 | 三分量（ternary）2-bit 量化模型，极致压缩下保持性能，下载超 71 万。 |
| [LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 87 | 6,190 | LiquidAI 轻量级 350M 嵌入模型，适合文本相似度与语义检索场景。 |
| [Kroma (LoRA)](https://huggingface.co/lodestones/Kroma) | lodestones | 95 | 0 | ComfyUI 生态下的图像生成 LoRA，适配 Krea 工作流。 |

---

## 3. 生态信号

本周 HF 生态呈现**三大趋势**：

- **国产模型霸榜**：Kimi-K3、GLM-5.2、DeepSeek V4 Flash 三强并立，国产开源模型在质量与社区活跃度上全面开花。
- **Qwen3.6 系列微调生态爆发**：至少 4 个独立社区微调版本进入热门榜，下载量合计超 200 万，un censored + GGUF + MTP 成为热门组合。
- **量化技术多元化**：GGUF、NVFP4、Ternary（2-bit）等量化方案齐头并进，2-bit 极限量化模型 Ternary-Bonsai-27B 下载超 71 万，显示本地高效部署需求激增。

---

## 4. 值得探索

1. **moonshotai/Kimi-K3** — 本周点赞第一（9,490），代表国产多模态 LLM 的最新水准，适合研究视觉-语言对齐与大规模预训练方向。

2. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** — 下载量 182 万为全场最高，展示了社区对高质量 un censored 微调版本的强烈需求，可作为研究指令微调与社区衍生模型的最佳案例。

3. **prism-ml/Ternary-Bonsai-27B-gguf** — 2-bit 三分量量化技术在保持 27B 参数规模的同时实现极致压缩，是探索超低精度量化与高效推理的前沿参考。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*