# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 01:46 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-24
**分析师：** AI 模型生态分析师

## 1. 今日速览

今日 HF 榜单呈现出“多模态大模型”与“极致量化社区微调”并行的双轨趋势。Google 发布的 `gemma-4-31B-it` 以惊人的下载量领跑，标志着新一代多模态基座模型的快速普及；同时，基于 Qwen3.6 和 Laguna-S 的社区微调版本（如 GGUF 格式）在点赞和下载上表现强劲，反映出开发者对高效推理和特定场景定制的高度需求。此外，OCR、语音识别及机器人控制等垂直领域专用模型持续获得关注，显示 AI 落地正从通用对话向具体任务执行深化。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 👍 4,371 | ⬇️ 596,442
    *   **说明：** GLM 系列最新一代文本生成模型，凭借卓越的对话能力和高下载量位居榜首，是中文语境下极具竞争力的开源基座。
*   **google/gemma-4-31B-it**
    *   [链接](https://huggingface.co/google/gemma-4-31B-it) | 作者: google | 👍 3,347 | ⬇️ 12,666,488
    *   **说明：** Google Gemma 系列的最新指令微调版本，下载量突破千万级，显示出社区对轻量级高性能多模态/文本模型的巨大渴求。
*   **Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice**
    *   [链接](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | 作者: Qwen | 👍 1,798 | ⬇️ 2,497,020
    *   **说明：** 通义千问推出的高精度文本转语音模型，支持自定义音色，解决了高质量语音合成的开源替代方案需求。
*   **upstage/Solar-Open2-250B**
    *   [链接](https://huggingface.co/upstage/Solar-Open2-250B) | 作者: upstage | 👍 450 | ⬇️ 362
    *   **说明：** Upstage Solar 系列的超大规模开源模型，虽下载量初期较低，但作为顶级参数量的开源基座，值得长期关注其性能表现。
*   **poolside/Laguna-S-2.1**
    *   [链接](https://huggingface.co/poolside/Laguna-S-2.1) | 作者: poolside | 👍 515 | ⬇️ 13,285
    *   **说明：** Poolside 推出的文本生成模型，专注于代码和结构化数据生成，在社区中积累了稳定的用户基础。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 👍 2,888 | ⬇️ 2,414,259
    *   **说明：** 百度发布的强大 OCR 模型，处理长文档和复杂版面能力突出，是视觉信息提取领域的标杆之作。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 👍 2,439 | ⬇️ 2,126,755
    *   **说明：** 基于 Qwen3.5 的 1M 上下文窗口模型，经过 Claude 风格对齐，适合需要超长上下文处理的复杂任务。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 👍 3,033 | ⬇️ 2,027,080
    *   **说明：** 去除了安全限制的 Qwen3.6 MoE 模型，满足部分用户对于无约束内容生成的需求，下载量极高。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 作者: nvidia | 👍 926 | ⬇️ 750,118
    *   **说明：** NVIDIA 的高效流式自动语音识别模型，专为实时音频处理优化，兼顾精度与速度。
*   **microsoft/Mage-Flow**
    *   [链接](https://huggingface.co/microsoft/Mage-Flow) | 作者: microsoft | 👍 184 | ⬇️ 411
    *   **说明：** 微软推出的文本到图像生成模型，支持图像编辑功能，展示了大厂在生成式 AI 领域的持续布局。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **moonshotai/Kimi-K2.7-Code**
    *   [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | 作者: moonshotai | 👍 1,249 | ⬇️ 766,522
    *   **说明：** 月之暗面发布的专门针对代码优化的多模态模型，在编程辅助和代码理解方面表现优异。
*   **openbmb/MiniCPM-RobotManip**
    *   [链接](https://huggingface.co/openbmb/MiniCPM-RobotManip) | 作者: openbmb | 👍 165 | ⬇️ 408
    *   **说明：** MiniCPM 系列面向机器人操作的视觉-语言-动作模型，推动了具身智能的发展。
*   **openbmb/MiniCPM-RobotTrack**
    *   [链接](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | 作者: openbmb | 👍 117 | ⬇️ 306
    *   **说明：** 专注于机器人轨迹跟踪的专用模型，与 Manip 形成互补，完善了 MiniCPM 在机器人领域的工具链。
*   **ATH-MaaS/OvisOCR2**
    *   [链接](https://huggingface.co/ATH-MaaS/OvisOCR2) | 作者: ATH-MaaS | 👍 257 | ⬇️ 26,919
    *   **说明：** 新一代 OCR 模型，利用 Qwen3.5 架构增强了对复杂文档结构的解析能力。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **prism-ml/Ternary-Bonsai-27B-gguf**
    *   [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | 作者: prism-ml | 👍 984 | ⬇️ 576,083
    *   **说明：** Bonsai 模型的三元组量化版本，仅用极低比特数实现高效推理，展现了量化技术的巨大潜力。
*   **prism-ml/Bonsai-27B-gguf**
    *   [链接](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | 作者: prism-ml | 👍 620 | ⬇️ 1,910,116
    *   **说明：** Bonsai 27B 模型的 1-bit GGUF 量化版，极大降低了显存占用，适合本地部署运行大型模型。
*   **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**
    *   [链接](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | 作者: DavidAU | 👍 397 | ⬇️ 334,847
    *   **说明：** 社区用户对 Qwen3.6 进行的深度微调与量化，结合了多种技术栈，提供了独特的“Heretic”风格体验。
*   **unsloth/Laguna-S-2.1-GGUF**
    *   [链接](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | 作者: unsloth | 👍 150 | ⬇️ 28,542
    *   **说明：** Unsloth 官方提供的 Laguna-S-2.1 量化版本，优化了推理速度，便于快速集成。
*   **LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**
    *   [链接](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | 作者: LuffyTheFox | 👍 117 | ⬇️ 24,982
    *   **说明：** 基于 Hermes 风格微调的 Qwen3.6 量化模型，侧重于指令遵循和无约束输出。

## 3. 生态信号

当前生态呈现三大显著趋势：首先，**Qwen3.6 家族**及其衍生量化版本（GGUF）占据半壁江山，表明 Qwen 已成为社区微调最活跃的基座之一，尤其是 27B-35B 参数区间的 MoE 模型备受青睐。其次，**极致量化技术**（如 1-bit、Ternary）不再局限于实验阶段，而是成为本地部署大型模型的主流选择，显著降低了硬件门槛。最后，**多模态泛化**成为新焦点，纯文本 LLM 热度相对平稳，而具备视觉、听觉甚至机器人控制能力的多模态模型（如 Gemma-4, Kimi-K2.7-Code）下载量激增，预示着 AI 应用正加速从“聊天”向“感知与行动”演进。

## 4. 值得探索

1.  **prism-ml/Ternary-Bonsai-27B-gguf**
    *   **理由：** 该模型展示了三元组量化在保持 27B 模型性能的同时大幅降低资源消耗的可行性，对于希望在消费级显卡上运行中型 LLM 的研究者和开发者极具参考价值。
2.  **google/gemma-4-31B-it**
    *   **理由：** 作为 Google 最新发布的指令微调模型，其千万级的下载量证明了其综合能力的优越性。探索其多模态边界和指令遵循能力，有助于理解下一代通用基座模型的发展方向。
3.  **openbmb/MiniCPM-RobotManip**
    *   **理由：** 具身智能是当前 AI 的前沿热点。MiniCPM 在此领域的开源尝试，为研究视觉-语言-动作（VLA）模型提供了宝贵的基准和起点，适合对机器人学习和多模态交互感兴趣的用户。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*