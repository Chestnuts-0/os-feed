# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 02:06 UTC

---



# Hugging Face 热门模型日报
**日期：2026-08-07**

---

## 一、今日速览

本期榜单呈现"国产大模型全面开花"格局：DeepSeek-V4、Kimi-K3、GLM-5.2 三大语言模型并立，MiniMax-H3 视频生成模型及其生态（LoRA、ComfyUI 适配、量化版本）成为下载量最高的衍生系列。社区量化与微调活跃度极高，Qwen3.6 系 GGUF 及 Heretic 微调版本占据多个热门位，FLUX.1-dev 以 1.4 万点赞稳居图像生成领域标杆。

---

## 二、热门模型

### 🧠 语言模型

**[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** · moonshotai | ❤️ 10,200 | ⬇️ 1,258,043
Kimi-K3 是多模态对话模型，支持图文理解，凭借出色的推理与交互能力拿下本周最高点赞，下载量破百万。

**[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** · deepseek-ai | ❤️ 2,647 | ⬇️ 617,900
DeepSeek-V4 系列 7 月 31 日更新版本，针对对话和代码优化，是 Flash 轻量版的迭代发布。

**[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** · deepseek-ai | ❤️ 2,042 | ⬇️ 2,639,756
V4 Flash 基线版本，下载量超 260 万，社区使用最广泛的 DeepSeek-V4 系列权重。

**[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** · zai-org | ❤️ 4,871 | ⬇️ 2,391,730
GLM-5.2 是智谱新一代 MoE 架构对话模型，下载量近 240 万，开源生态影响力强劲。

**[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** · LiquidAI | ❤️ 333 | ⬇️ 73,573
LiquidAI 推出的 2.6B 轻量语言模型，采用液体状态机制设计，适合边缘部署。

**[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** · deepgrove | ❤️ 207 | ⬇️ 419
MoE 架构对话模型预览版，社区早期关注，尚处内测阶段。

**[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** · inclusionAI | ❤️ 186 | ⬇️ 1,196
Ling 3.0 Flash 是多语言对话模型，主打高效推理与多语言支持。

**[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** · Kwaipilot | ❤️ 519 | ⬇️ 16,961
KAT Coder V2.5 是专注代码生成与理解的指令微调模型，基于 Qwen3.5 MoE 架构。

**[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)** · XYZAILab | ❤️ 424 | ⬇️ 1,570
Aquila-mini 是小规模 MoE 模型，适合本地推理场景的轻量选择。

**[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** · EschaLabs | ❤️ 222 | ⬇️ 3,394
基于 Qwen3.6 MoE 架构的微调版本，聚焦多领域指令跟随能力。

**[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** · mistralai | ❤️ 159 | ⬇️ 1,511
Shieldstral 是 Mistral 推出的安全防御/红队评估模型，用于检测对抗性输入。

---

### 🎨 多模态与生成

**[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** · MiniMaxAI | ❤️ 2,754 | ⬇️ 12,102
MiniMax-H3 是图像+文本到视频生成模型，原生支持图文联合理解驱动视频生成，技术前沿。

**[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** · Comfy-Org | ❤️ 848 | ⬇️ 2,295,377
MiniMax-H3 的 ComfyUI 单文件集成版本，下载量超 229 万，是 HuggingFace 本周下载冠军，社区对可视化工作流的强烈需求。

**[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** · baidu | ❤️ 3,929 | ⬇️ 2,791,862
百度 Unlimited-OCR 是通用 OCR 模型，支持多语言、多场景文本识别，下载量近 280 万，实用性极高。

**[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** · Audio8 | ❤️ 293 | ⬇️ 12,211
Audio8-TTS 是 0.6B 参数文本到语音模型，参数小巧、语音自然，适合轻量化 TTS 部署。

**[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** · microsoft | ❤️ 286 | ⬇️ 440,176
Mage-VL 是微软多模态视觉语言模型，支持图文理解与交互问答，下载量超 44 万。

**[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** · thinkingmachines | ❤️ 322 | ⬇️ 22,223
Inkling-Small 是轻量图文理解模型，适合资源受限环境的多模态推理。

**[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)** · black-forest-labs | ❤️ 14,010 | ⬇️ 523,234
FLUX.1-dev 是 Black Forest Labs 开源图像生成模型，1.4 万点赞稳居图像生成榜首，质量与社区认可度极高。

**[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** · nvidia | ❤️ 177 | ⬇️ 206
NVIDIA Nemotron VoiceChat 11B 是端到端语音对话模型，支持实时语音交互。

---

### 🔧 专用模型

**[Lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** · lodestones | ❤️ 205 | ⬇️ 0
Kroma 是基于 Krea 生态的文本到图像 LoRA，面向高质量图像生成工作流。

**[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** · Audio8 | ❤️ 293 | ⬇️ 12,211
（同上文，此处归类为语音专用模型）

---

### 📦 微调与量化

**[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** · unsloth | ❤️ 545 | ⬇️ 145,105
DeepSeek-V4-Flash-0731 的 GGUF 量化版本，由 Unsloth 优化适配 llama.cpp 推理，兼顾效率与质量。

**[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** · DavidAU | ❤️ 1,652 | ⬇️ 2,087,189
Qwen3.6-27B Heretic 无审查微调版，社区热度极高，下载量超 208 万，是 GoT 文化向微调整流代表作。

**[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)** · LuffyTheFox | ❤️ 407 | ⬇️ 309,149
Qwen3.6-35B Hermes V7 无审查 GGUF 微调版，集成 Genesis 指令集，适合自由对话场景。

**[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)** · realrebelai | ❤️ 153 | ⬇️ 65,679
MiniMax-H3 的 GGUF 量化系列，覆盖多档位精度，方便本地部署。

**[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** · Abiray | ❤️ 109 | ⬇️ 272,963
MiniMax-H3 的 NVFP4/INT4/INT8 混合量化版本，采用 ConvRot 优化，下载量超 27 万，追求极致压缩。

**[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** · LiquidAI | ❤️ 125 | ⬇️ 12,790
LFM2.5-2.6B 的 GGUF 量化版本，适配本地推理。

**[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)** · ethanfel | ❤️ 337 | ⬇️ 0
Qwen3-VL-32B Heretic 版 INT8 量化，集成 H3 架构并在 ComfyUI 中运行，面向本地多模态工作流。

**[sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4)** · sakamakismile | ❤️ 108 | ⬇️ 0
Qwen3-VL-32B 与 MiniMax-H3 文编的 NVFP4 量化版本，用于 ComfyUI 工作流中的混合架构推理。

**[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** · larryvrh | ❤️ 302 | ⬇️ 0
MiniMax-H3 的 Turbo LoRA 适配器，针对文本到视频生成加速微调。

**[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)** · drbaph | ❤️ 120 | ⬇️ 0
MiniMax-H3 Turbo LoRA 的 ComfyUI 集成版本，剪枝优化，便于可视化工作流使用。

---

## 三、生态信号

本周生态呈现三个显著趋势：其一，**国产大模型矩阵化竞争加剧**——DeepSeek-V4、Kimi-K3、GLM-5.2 均进入热门榜，MoE 架构成为主流选择；其二，**MiniMax-H3 视频生成引发全链路生态

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*