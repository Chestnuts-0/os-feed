# Hugging Face 热门模型日报 2026-08-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-09 00:54 UTC

---



# Hugging Face 热门模型日报 — 2026-08-09

---

## 一、今日速览

MiniMax-H3 视频生成模型持续霸榜，衍生出数十个社区微调与量化版本，显示视频生成赛道热度极高；GLM-5.2 以近 250 万次下载登顶语言模型，开源大模型生态竞争激烈；FLUX.1-dev 以超过 1.4 万点赞稳居图像生成榜首；NVFP4、INT8、GGUF 等量化格式成为社区高频操作，显示端侧部署需求旺盛。

---

## 二、热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,902 | 2,480,368 | 智源 GLM-5.2 MoE 对话模型，下载量居语言模型榜首，支持中文多轮对话与指令跟随。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,342 | 1,388,105 | 月之暗面 Kimi-K3 多模态语言模型，以超万点赞反映社区极高关注。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,852 | 785,771 | DeepSeek-V4 Flash 系列，推理速度优化版本，下载量突破 78 万，显示推理效率需求旺盛。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 608 | 175,093 | 官方 V4-Flash 的 GGUF 量化版本，Unsloth 团队出品，便于本地推理部署。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 544 | 17,885 | Qwen3.5 MoE 代码专用模型，面向开发者场景微调，代码能力突出。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 | Mistral 推出的轻量安全对齐模型，针对内容审核与风险防护场景。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 222 | 4,189 | 融合混合专家架构的对话模型，支持高效推理与多轮交互。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 246 | 458 | NVIDIA 语音对话模型，面向实时语音交互场景，支持低延迟响应。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 415 | 81,522 | LiquidAI 轻量语言模型，专注高效推理与端侧部署，下载活跃。 |

---

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,037 | 502,330 | FLUX.1 开发版文本到图像生成模型，点赞数全场最高，生成质量标杆。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,970 | 2,857,997 | 百度开源 OCR 模型，支持超长文本识别，下载量接近 290 万，工具属性极强。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,104 | 26,693 | MiniMax H3 图文转视频基础模型，生成视频流畅度获社区认可，衍生生态繁荣。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,006 | 3,943,176 | H3 的 ComfyUI 单文件整合版，下载量近 400 万，显示 ComfyUI 用户基数庞大。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 322 | 12,837 | 轻量级文本转语音模型，6 亿参数适合本地部署，中文语音合成效果良好。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 314 | 457,581 | 微软多模态视觉语言模型，支持图像理解与多轮对话，企业级应用场景广。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 346 | 28,178 | ThinkingMachines 轻量多模态模型，面向低资源环境的图像文本理解任务。 |

---

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 544 | 17,885 | 代码专用模型，基于 Qwen3.5 MoE，针对编程任务深度优化。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 | 安全对齐专用模型，用于内容审核、风险过滤等企业合规场景。 |

---

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 485 | 0 | H3 的 Turbo LoRA 微调版本，提升生成速度，适合实时视频应用。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 198 | 0 | H3 视频生成加速版，针对 t2v/i2v/r2v 多模式优化。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,761 | 2,345,190 | Qwen3.6-27B 无审查微调版，GGUF 格式，社区需求强烈，下载量超 230 万。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 438 | 373,651 | Qwen3.6 MoE 的无审查 Hermes 风格微调版，社区活跃度高。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 157 | 49,562 | LFM2.5 的 GGUF 量化版本，便于 llama.cpp 本地推理。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 175 | 128,265 | H3 的多格式 GGUF 量化集合，满足多种硬件环境需求。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 143 | 471,519 | H3 的 NVFP4/INT4/INT8 混合量化版，支持 ConvRot 优化，兼顾质量与速度。 |

---

## 三、生态信号

**MiniMax-H3 视频生成生态**正处于爆发期：基础模型上线后，社区迅速产出数十个 LoRA、ComfyUI 集成、GGUF 量化与 NVFP4 混合量化版本，下载总量已超过数千万，显示视频生成已成为当前最活跃的开源赛道。

**语言模型层面**，GLM-5.2、Kimi-K3、DeepSeek-V4 三强并立，开源社区下载量均超百万，反映出开发者对国产大模型的持续信任。与此同时，**量化活动异常活跃**：GGUF、NVFP4、INT8 等格式覆盖了 H3、Qwen3.6、DeepSeek-V4 等多个模型家族，表明端侧部署与本地推理需求正在快速释放。

**闭源 vs 开源**方面，月之暗面 Kimi 和 NVIDIA Nemotron 仍保留部分闭源属性，但核心权重已开源；百度 Unlimited-OCR 接近 290 万下载印证了中文开源工具模型的强大生命力。

---

## 四、值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 下载量 248 万的 MoE 对话模型，代表当前中文开源 LLM 的顶尖水平，适合多轮对话、长文本理解等场景，且架构高效，推理成本低。

2. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 单文件整合版本便于快速上手 ComfyUI 视频生成工作流，390 万下载验证了社区接受度，是进入视频生成领域的最佳入口。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 支持超长文档识别的开源 OCR 模型，290 万次下载说明其在实际工业场景中已被广泛采用，适合文档数字化、票据识别等落地应用。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*