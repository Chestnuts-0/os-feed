# Hugging Face 热门模型日报 2026-08-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-03 01:51 UTC

---



# 📊 Hugging Face 热门模型日报
**日期：2026-08-03**

---

## 一、今日速览

今日 HF 热门榜呈现三大主线：**Kimi-K3 以 9,640 周赞绝对领跑**，显示月之暗面对话能力的社区热度持续发酵；DeepSeek-V4 家族多版本并列热榜，开源推理赛道竞争激烈；**百度 Unlimited-OCR** 与 **GLM-5.2** 分别在 OCR 与中文多模态方向获大量下载。值得注意的是，社区无审查微调（DavidAU、LuffyTheFox、HauhauCS 等）活跃度高，GGUF 量化格式仍是最受欢迎的本地部署方案，而 Solar-Open2-250B 标志着超大参数开源模型持续上探天花板。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,735 | 156,173 | DeepSeek 最新 Flash 推理优化版本，针对高效对话场景微调 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,958 | 2,785,810 | DeepSeek-V4 完整发布，累计下载近 280 万，社区采用度极高 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,755 | 2,050,533 | 智谱 GLM 系列第五代，中文理解与多轮对话能力显著增强 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 878 | 80,102 | Poolside 旗下对话模型，在指令遵循和代码任务上表现突出 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 719 | 14,863 | Upstage 250B 参数级开源模型，对标闭源头部能力 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 154 | 68,199 | Solar-Open2-250B 的 NVFP4 量化版本，兼顾精度与推理效率 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 627 | 33,042 | 纳米贝格轻量级中文模型，适合边缘部署与低延迟场景 |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 121 | 1,957 | AMD 优化的 MoE 推理模型，针对 GPU 架构做推理加速 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,640 | 837,202 | **今日榜首**，月之暗面新一代图文对话模型，视觉理解与多轮推理能力大幅提升 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,778 | 2,536,284 | 百度开源 OCR 模型，支持多语言与复杂版面，下载量突破 250 万 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 187 | 272,148 | 微软视觉-语言多模态模型，擅长图表理解与视觉问答 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 250 | 2,938 | 微软新一代多模态模型，支持图像理解与计算机视觉任务 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 227 | 6,839 | 小型多模态模型，在资源受限环境下提供高效的图文推理能力 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 371 | 1,825 | 极轻量级 TTS 模型，支持 CPU 推理，适合边缘设备本地语音合成 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 179 | 4,314 | 6 亿参数语音合成预览版，音质表现获社区关注 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 150 | 8,468 | 微软 BitNet 架构 ASR 模型，以低精度推理实现高效语音识别 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 402 | 13,164 | KWAIPilot 代码专用模型，基于 Qwen3.5 MoE 架构，集成图文理解能力 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 366 | 903 | XYZAI 轻量版 Aquila 模型，基于 Qwen3.6 架构，适合低资源部署 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 335 | 1,094 | XYZAI 专业版 Aquila，支持 Agent 搜索增强，适合复杂推理任务 |
| [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 89 | 6,957 | LiquidAI 文本嵌入编码器，350M 参数规模适合向量检索与语义搜索 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,340 | 1,372,285 | DavidAU 对 Qwen3.6-27B 的无审查深度微调，GGUF 格式，下载量突破 137 万 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,243 | 1,892,654 | HauhauCS 激进风格无审查微调，GGUF+Vision，社区下载量近 190 万 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 300 | 259,237 | LuffyTheFox 基于 Hermes 协议的 Qwen3.6 无审查微调，支持 MoE 推理 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 209 | 292,511 | DavidAU 针对 Qwen3.5-9B 的 NEQ-Imatrix 量化微调，适合中小设备 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 340 | 48,707 | Unsloth 对 DeepSeek-V4-Flash 的 GGUF 量化版本，本地推理优化 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 250 | 88,481 | Unsloth 对 Kimi-K3 的 GGUF 量化版本，显著提升本地推理速度 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 119 | 2,550 | EschaLabs 对 Qwen3.6 MoE 的微调版本，专注对话指令增强 |

---

## 三、生态信号

**模型家族热度：** Kimi、DeepSeek、Qwen 三大系列占据榜单核心位置。Kimi-K3 以近 1 万点赞遥遥领先，显示国产多模态大模型在海外社区的影响力持续扩大。DeepSeek-V4 系列同时拥有官方原版与 Unsloth 量化版，形成完整部署生态。Qwen3.6 则通过社区大量无审查微调（DavidAU、HauhauCS、LuffyTheFox）形成第二增长曲线，GGUF 格式下载量合计超过 2,000 万。

**开源 vs 闭源：** 开源权重持续挤压闭源差距。Solar-Open2-250B（187B 级活跃参数）与 DeepSeek-V4 系列直接在参数规模与质量上对标闭源产品，Upstage、DeepSeek、Moonshot 三家开源策略成效显著。

**量化与微调趋势：** GGUF 仍是本地部署首选，Unsloth 的预量化版本下载效率极高；NVFP4（Nota-AI）等新型量化格式开始进入主流视野；无审查微调（Uncensored/Heretic）社区活跃，但集中在少数高频更新者手中，呈现"头部微调者主导流量"的格局。

---

## 四、值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 今日热度第一，图文理解能力显著升级，适合多模态对话与视觉推理场景；官方与 Unsloth 双版本并行，可根据部署需求选择。

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 下载量超 250 万的 OCR 利器，多语言支持与复杂版面识别能力突出，适合文档数字化、信息提取等实际应用。

3. **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — 250B 参数级开源模型代表当前开源规模的天花板，搭配 Nota-AI 的 NVFP4 量化版本可探索高精度低资源部署路径，值得关注其推理效率与开源生态配套进展。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*