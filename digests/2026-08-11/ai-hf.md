# Hugging Face 热门模型日报 2026-08-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-11 00:56 UTC

---



# 📊 Hugging Face 热门模型日报
**2026-08-11**

---

## 1. 今日速览

MiniMax-H3 成为今日绝对主角，官方的 image-text-to-video 模型登顶周赞榜首，同时催生了大量 ComfyUI 集成、LoRA 微调和量化版本，生态活跃度极高。Kimi-K3 以 10,470 赞、151 万下载稳坐 LLM 榜首位，DeepSeek-V4-Flash-0731 紧随其后，国产大模型持续霸榜。FLUX.1-dev 保持 1.4 万点赞的长期热度，百度 Unlimited-OCR 凭借 292 万下载成为实用型多模态模型的标杆。

---

## 2. 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,470 | 1,510,032 | 月之暗面旗舰对话模型，支持图像-文本多模态理解，下载量突破 150 万，是当前最受关注的国产开源 LLM。 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,059 | 954,441 | DeepSeek 旗舰文本生成模型，Flash 版本兼顾性能与推理速度，社区 GGUF 量化版同步推出。 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89,680 | Liquid 架构轻量化语言模型，同架构模型规模极小但下载活跃，GGUF 版同步上线。 |
| [Maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 311 | 1,344 | 基于 MoE 架构的轻量级因果语言模型，处于预览阶段，探索高效稀疏架构方向。 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | inclusionAI 的 flash 轻量化对话模型，采用 Bailing 混合架构，面向多语言场景。 |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 221 | 6,343 | Mistral 推出的安全护栏模型，用于内容审核与风险检测，适配 vLLM 推理。 |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 152 | 617 | 基于 Qwen3.5 MoE 的多模态对话模型，探索大参数 MoE 架构的开源应用。 |
| [Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 115 | 2,129 | 基于 Qwen 的三元加性注意力架构研究模型，探索高效注意力机制的新路径。 |

---

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,430 | 47,468 | MiniMax 官方 image-text-to-video 模型，支持文本+图像驱动视频生成，今日热度最高。 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 715 | 0 | Meta 旗下多模态理解模型，支持图像-文本联合输入生成文本，30B 参数规模。 |
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,076 | 480,762 | Black Forest Labs 旗舰文本到图像生成模型，长期霸榜，社区生态成熟。 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,002 | 2,921,751 | 百度开源 OCR 模型，支持超长文档识别，下载量近 300 万，实用价值极高。 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 297 | 597 | NVIDIA 推出的语音对话模型，面向端到端语音交互场景，附带多项 arXiv 预印本支撑。 |

---

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| 本期无新增独立专用模型，各类能力已融入上述通用与多模态模型中。 | — | — | — | — |

---

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [MiniMax-H3 (ComfyUI)](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,146 | 6,009,639 | ComfyUI 官方封装版本，下载量突破 600 万，是 MiniMax-H3 生态中最活跃的衍生作品。 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,861 | 2,439,083 | 基于 Qwen3.6 的社区微调版本，移除安全限制，GGUF 格式适配 llama.cpp，下载 243 万。 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 637 | 199,167 | Unsloth 提供的 DeepSeek-V4-Flash GGUF 量化版，本地部署友好。 |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 184 | 89,611 | LiquidAI 官方 GGUF 量化版本，与原始模型下载量相当，说明社区对轻量部署需求旺盛。 |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 599 | 0 | MiniMax-H3 的 Turbo 版 LoRA 适配器，针对视频生成速度与质量优化。 |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 251 | 0 | 上述 LoRA 的 ComfyUI 集成版本，方便在工作流中直接使用。 |
| [Qwen3-VL-32B-Ultegra-Heretic-H3-ComfyUI-INT8](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultegra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 440 | 0 | ComfyUI 集成版 Qwen3-VL-32B，INT8 量化+ConvRot 优化，面向本地推理。 |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 207 | 0 | Unsloth 对 Muse-Glimmer-30B 的 GGUF 量化版本，提升本地部署效率。 |
| [MiniMax-H3-GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | MiniMax-H3 多档位 GGUF 量化集合，兼容 ComfyUI，下载量 17.4 万。 |
| [Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | 采用 NVFP4 + INT4 + INT8 多级量化方案，配合 ConvRot 优化，兼顾精度与速度。 |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | 专为 MiniMax-H3 设计的提示词重写 LoRA，提升视频生成对复杂指令的理解能力。 |
| [MiniMax-H3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | MiniMax-H3 加速推理版本，支持 T2V/I2V/R2V 多种生成模式。 |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 152 | 0 | 融合 Qwen3-VL 与 MiniMax-H3 的 ComfyUI 集成版，NVFP4 量化降低显存占用。 |

---

## 3. 生态信号

**MiniMax 视频生成家族**成为今日最大赢家，从官方模型到 ComfyUI 封装、LoRA 微调、GGUF 量化、NVFP4 低比特压缩，产业链条完整，说明社区对开源视频生成工具的需求极为旺盛。Kimi 与 DeepSeek 双雄并立，国产 LLM 的开源权重在全球 HF 社区持续领跑。**量化活动异常活跃**，Unsloth、realrebelai 等账号快速跟进主流模型 GGUF 化，NVFP4 等新型量化格式也开始出现，反映本地部署与边缘推理成为主流趋势。FLUX.1-dev 与 Unlimited-OCR 保持长线热度，证明高质量通用模型的生命力远超短期热点。

---

## 4. 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 点赞量与下载量双高，月之暗面最新旗舰，支持多模态输入，是当前最值得测试的国产开源 LLM 之一。

2. **[MiniMax-H3 (ComfyUI)](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 600 万+下载验证了社区接受度，ComfyUI 原生集成让视频生成工作流搭建更为便捷，适合内容创作者。

3. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-ocr)** — 近 300 万下载，百度的实用型开源 OCR 模型，适合文档处理、长文本识别等生产场景。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*