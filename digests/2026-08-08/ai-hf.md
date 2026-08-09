# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-08 00:52 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-08**

---

## 1. 今日速览

今日 HF 热门榜呈现两大主导趋势：MiniMax AI 的 MiniMax-H3 视频生成模型引发社区疯狂微调与量化浪潮，衍生出数十个 ComfyUI 适配、LoRA 及 GGUF 版本；Moonshot AI 的 Kimi-K3 以超高点赞数领跑语言模型榜单，而 ZAI Lab 的 GLM-5.2 MoE 模型凭借强劲下载量稳居前列。与此同时，开源量化生态（GGUF/AWQ/NVFP4）持续活跃，社区对大模型本地部署的需求极为旺盛。

---

## 2. 热门模型

### 🧠 语言模型

**MoonshotAI/Kimi-K3**
- **链接**: https://huggingface.co/moonshotai/Kimi-K3
- **作者**: moonshotai | **点赞**: 10,282 | **下载**: 1,308,186
- **说明**: Kimi 系列最新语言模型，支持图像文本多模态输入，凭借极高的社区认可度登顶今日点赞榜，是当前最受关注的国产开源 LLM 之一。

**deepseek-ai/DeepSeek-V4-Flash-0731**
- **链接**: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731
- **作者**: deepseek-ai | **点赞**: 2,745 | **下载**: 702,709
- **说明**: DeepSeek 新一代 Flash 推理优化版本，专注于高速文本生成与对话场景，下载量突破 70 万，是工业级应用的首选基座。

**zai-org/GLM-5.2**
- **链接**: https://huggingface.co/zai-org/GLM-5.2
- **作者**: zai-org | **点赞**: 4,887 | **下载**: 2,430,330
- **说明**: 智谱 GLM 系列 MoE 架构升级版本，以 240 万+ 下载量成为今日下载之王，体现社区对国产高质量多轮对话模型的持续青睐。

**inclusionAI/Ling-3.0-flash**
- **链接**: https://huggingface.co/inclusionAI/Ling-3.0-flash
- **作者**: inclusionAI | **点赞**: 203 | **下载**: 3,065
- **说明**: 支持快速推理的对话模型，采用 Bailing Hybrid 架构，在响应速度与质量间取得平衡。

**LiquidAI/LFM2.5-2.6B**
- **链接**: https://huggingface.co/LiquidAI/LFM2.5-2.6B
- **作者**: LiquidAI | **点赞**: 379 | **下载**: 77,973
- **说明**: 轻量级文本生成模型，专为边缘部署与低延迟场景设计，适合资源受限环境。

**mistralai/Shieldstral-1.0-3B**
- **链接**: https://huggingface.co/mistralai/Shieldstral-1.0-3B
- **作者**: mistralai | **点赞**: 184 | **下载**: 2,480
- **说明**: Mistral 推出的安全护栏模型，用于检测与过滤有害内容，助力负责任 AI 部署。

**deepgrove/maple-preview**
- **链接**: https://huggingface.co/deepgrove/maple-preview
- **作者**: deepgrove | **点赞**: 226 | **下载**: 686
- **说明**: 早期预览版 MoE 架构模型，探索稀疏专家混合在文本生成中的新边界。

---

### 🎨 多模态与生成

**MiniMaxAI/MiniMax-H3**
- **链接**: https://huggingface.co/MiniMaxAI/MiniMax-H3
- **作者**: MiniMaxAI | **点赞**: 2,954 | **下载**: 18,112
- **说明**: MiniMax 最新视频生成基座模型，支持图像、文本到视频的高质量生成，直接激发了下游数百个微调与量化模型。

**black-forest-labs/FLUX.1-dev**
- **链接**: https://huggingface.co/black-forest-labs/FLUX.1-dev
- **作者**: black-forest-labs | **点赞**: 14,028 | **下载**: 512,841
- **说明**: FLUX 系列图像生成模型，以 1.4 万点赞稳居全榜第一，是当前开源图像生成领域的标杆之作。

**baidu/Unlimited-OCR**
- **链接**: https://huggingface.co/baidu/Unlimited-OCR
- **作者**: baidu | **点赞**: 3,954 | **下载**: 2,836,694
- **说明**: 百度开源的通用 OCR 模型，支持多语言与复杂场景文字识别，下载量接近 300 万，实用性极强。

**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**
- **链接**: https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B
- **作者**: nvidia | **点赞**: 228 | **下载**: 359
- **说明**: NVIDIA 推出的多轮语音对话模型，专为实时语音交互场景优化，支持自然流畅的人机对话。

**Audio8/Audio8-TTS-Preview-0.6b**
- **链接**: https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b
- **作者**: Audio8 | **点赞**: 306 | **下载**: 12,633
- **说明**: 轻量级文本转语音模型，仅 0.6B 参数即可实现高质量语音合成，适合移动端部署。

**microsoft/Mage-VL**
- **链接**: https://huggingface.co/microsoft/Mage-VL
- **作者**: microsoft | **点赞**: 302 | **下载**: 456,140
- **说明**: 微软开源的多模态视觉语言模型，擅长图像理解与文本生成任务，下载量超 45 万。

**thinkingmachines/Inkling-Small**
- **链接**: https://huggingface.co/thinkingmachines/Inkling-Small
- **作者**: thinkingmachines | **点赞**: 336 | **下载**: 25,340
- **说明**: 小型多模态模型，专注于高效图像文本理解，适合推理成本敏感的应用场景。

---

### 🔧 专用模型

**Kwaipilot/KAT-Coder-V2.5-Dev**
- **链接**: https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev
- **作者**: Kwaipilot | **点赞**: 531 | **下载**: 17,399
- **说明**: 针对代码生成优化的 Qwen3.5 MoE 模型，支持图像文本输入，是开发者构建 AI 编程助手的优质选择。

---

### 📦 微调与量化

**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**
- **链接**: https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
- **作者**: DavidAU | **点赞**: 1,708 | **下载**: 2,217,339
- **说明**: 基于 Qwen3.6 的去审查 Heretic 微调版本，GGUF 量化格式便于本地运行，下载量突破 220 万，反映社区对自由指令模型的强烈需求。

**unsloth/DeepSeek-V4-Flash-0731-GGUF**
- **链接**: https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF
- **作者**: unsloth | **点赞**: 586 | **下载**: 161,253
- **说明**: Unsloth 提供的 DeepSeek-V4-Flash GGUF 量化版本，通过 LLAMA.cpp 兼容格式实现高效本地推理。

**LiquidAI/LFM2.5-2.6B-GGUF**
- **链接**: https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF
- **作者**: LiquidAI | **点赞**: 144 | **下载**: 31,489
- **说明**: LFM2.5 的 GGUF 量化版本，进一步降低内存占用，适配更广泛的硬件环境。

**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF**
- **链接**: https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF
- **作者**: LuffyTheFox | **点赞**: 425 | **下载**: 332,992
- **说明**: Hermes 风格微调的 Qwen3.6 去审查版本，采用 MoE 架构与 GGUF 量化，兼顾性能与本地可运行性。

**Comfy-Org/MiniMax-H3**
- **链接**: https://huggingface.co/Comfy-Org/MiniMax-H3
- **作者**: Comfy-Org | **点赞**: 936 | **下载**: 3,139,920
- **说明**: 专为 ComfyUI 优化的 MiniMax-H3 视频生成模型单文件版本，下载量超 310 万，是当前视频生成工作流的首选。

**Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**
- **链接**: https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot
- **作者**: Abiray | **点赞**: 127 | **下载**: 452,420
- **说明**: 采用 NVIDIA 最新 NVFP4 与 INT4/INT8 混合量化的 MiniMax-H3 版本，显著降低显存需求同时保持生成质量。

**realrebelai/MiniMax-H3_GGUFs**
- **链接**: https://huggingface.co/realrebelai/MiniMax-H3_GGUFs
- **作者**: realrebelai | **点赞**: 168 | **下载**: 87,870
- **说明**: 提供多种量化档位的 MiniMax-H3 GGUF 集合，兼容 ComfyUI 与 llama.cpp 生态。

**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**
- **链接**: https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot
- **作者**: ethanfel | **点赞**: 378 | **下载**: 0
- **说明**: 将 Qwen3-VL 视觉语言模型与 MiniMax-H3 视频能力结合的 ComfyUI 集成版本，INT8 量化提升推理效率。

**sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**
- **链接**: https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4
- **作者**: sakamakismile | **点赞**: 121 | **下载**: 0
- **说明**: 基于 NVFP4 量化的 Qwen3-VL + MiniMax-H3 融合版本，探索多模态视频生成的极致压缩方案。

**larryvrh/MiniMax-H3-Turbo-Lora**
- **链接**: https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora
- **作者**: larryvrh | **点赞**: 415 | **下载**: 0
- **说明**: 针对 MiniMax-H3 的 Turbo 加速 LoRA 适配器，旨在提升视频生成推理速度。

**drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**
- **链接**: https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI
- **作者**: drbaph | **点赞**: 177 | **下载**: 0
- **说明**: 适配 ComfyUI 工作流的 MiniMax-H3 Turbo LoRA 版本，剪枝优化后更适合本地显卡运行。

**lightx2v/Minimax-h3-Turbo**
- **链接**: https://huggingface.co/lightx2v/Minimax-h3-Turbo
- **作者**: lightx2v | **点赞**: 129 | **下载**: 0
- **说明**: 基于 Diffusers 框架的 MiniMax-H3 加速版本，支持文本、图像及参考视频多模态输入。

**SexGod1979/PinkCherry_MiniMax-H3**
- **链接**: https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3
- **作者**: SexGod1979 | **点赞**: 112 | **下载**: 0
- **说明**: MiniMax-H3 的特定风格微调版本，采用 Apache-2.0 协议，适用于特定创意内容生成场景。

**Kijai/MiniMax-H3_comfy**
- **链接**: https://huggingface.co/Kijai/MiniMax-H3_comfy
- **作者**: Kijai | **点赞**: 115 | **下载**: 0
- **说明**: Kijai 社区维护的 ComfyUI MiniMax-H3 集成版本，优化了节点兼容性与工作流稳定性。

**lodestones/Kroma**
- **链接**: https://huggingface.co/lodestones/Kroma
- **作者**: lodestones | **点赞**: 221 | **下载**: 0
- **说明**: 基于 Krea 平台的文本到图像 LoRA 微调模型，探索社区驱动的艺术风格生成新方向。

---

## 3. 生态信号

**MiniMax-H3 视频生成模型**成为今日绝对焦点，从基座模型到 ComfyUI 适配、LoRA 微调、NVFP4/INT8 量化版本，形成完整的生态矩阵，下载量累计超千万，显示社区对开源视频生成工具的极高热情。**GGUF 量化生态持续繁荣**，DeepSeek-V4-Flash、Qwen3.6 等大模型均被社区快速量化，反映本地部署需求旺盛。**国产模型崛起明显**，MiniMax、Kimi、GLM、DeepSeek、百度 OCR 等占据热门榜前列，开源权重与闭源服务并行发展。**去审查（Uncensored/Heretic）微调版本下载量惊人**，显示用户对无限制指令跟随模型的持续需求。

---

## 4. 值得探索

**MoonshotAI/Kimi-K3**：今日点赞最高（10,282），代表当前中文开源 LLM 的顶尖水平，支持多模态输入，适合研究与生产环境。

**Comfy-Org/MiniMax-H3**：视频生成领域的明星项目，310 万+ 下载验证其社区接受度，是构建本地视频生成工作流的理想起点。

**baidu/Unlimited-OCR**：百度开源的高性能 OCR 模型，近 300 万下载证明其广泛实用性，适合文档数字化与多语言文本识别任务。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*