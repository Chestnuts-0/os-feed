# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 01:43 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-11
**分析师：** Agnes-2.0-Flash

## 1. 今日速览

2026年7月11日的 HF 榜单呈现出“小参数大能力”与“极致优化”并行的显著特征。Qwen3.5/3.6 系列及其衍生变体（如 ThinkingCap, Leanstral）占据主导地位，展示了 MoE 架构在推理效率上的巨大优势。同时，NVIDIA 通过 NVFP4 等新型量化技术介入开源生态，推动了端侧部署的下限突破。社区对 GGUF 格式的狂热下载表明，本地化运行高性能模型已成为主流刚需。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **tencent/Hy3**
    *   链接: https://huggingface.co/tencent/Hy3
    *   作者: tencent | 点赞: 664 | 下载: 6,923
    *   说明: 腾讯混元系列的最新迭代，专注于高质量文本生成，凭借官方背书和原生支持获得稳定关注。
*   **zai-org/GLM-5.2**
    *   链接: https://huggingface.co/zai-org/GLM-5.2
    *   作者: zai-org | 点赞: 3,785 | 下载: 392,655
    *   说明:智谱 AI 的 GLM 系列更新，采用稀疏注意力机制，在多轮对话和复杂指令遵循上表现优异，下载量极高。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark
    *   作者: deepseek-ai | 点赞: 463 | 下载: 33,088
    *   说明: DeepSeek V4 的专业版变体，针对长上下文和高精度推理进行了优化，是追求极致逻辑能力的用户首选。
*   **meituan-longcat/LongCat-2.0**
    *   链接: https://huggingface.co/meituan-longcat/LongCat-2.0
    *   作者: meituan-longcat | 点赞: 170 | 下载: 1,308
    *   说明: 美团推出的长文本处理专家模型，擅长超长文档的理解与摘要， niche 领域内表现突出。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   链接: https://huggingface.co/baidu/Unlimited-OCR
    *   作者: baidu | 点赞: 1,921 | 下载: 1,319,683
    *   说明: 百度发布的超大规模 OCR 模型，支持任意分辨率和布局的文本识别，工业级落地能力强，下载量惊人。
*   **nvidia/LocateAnything-3B**
    *   链接: https://huggingface.co/nvidia/LocateAnything-3B
    *   作者: nvidia | 点赞: 2,701 | 下载: 1,456,269
    *   说明: NVIDIA 推出的通用定位模型，能够精确识别图像中物体的边界框，为视觉理解和机器人导航提供基础能力。
*   **krea/Krea-2-Turbo**
    *   链接: https://huggingface.co/krea/Krea-2-Turbo
    *   作者: krea | 点赞: 575 | 下载: 164,525
    *   说明: Krea 团队的快速图像生成模型，强调速度与质量的平衡，适合需要高频生成的创意工作流。
*   **Alissonerdx/LTX-Best-Face-ID**
    *   链接: https://huggingface.co/Alissonerdx/LTX-Best-Face-ID
    *   作者: Alissonerdx | 点赞: 84 | 下载: 0
    *   说明: 基于 LTX Video 的身份保持视频生成微调版，解决了人物一致性难题，在视频创作社区备受期待。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **google/tabfm-1.0.0-pytorch**
    *   链接: https://huggingface.co/google/tabfm-1.0.0-pytorch
    *   作者: google | 点赞: 345 | 下载: 18,626
    *   说明: Google 针对表格数据设计的 Transformer 模型，无需特征工程即可在分类和回归任务中取得 SOTA 效果。
*   **internscience/Agents-A1**
    *   链接: https://huggingface.co/InternScience/Agents-A1
    *   作者: InternScience | 点赞: 471 | 下载: 25,772
    *   说明: 面向智能体（Agent）场景优化的 MoE 模型，具备强大的工具调用和多模态感知能力，是构建自主 Agent 的优质基座。
*   **OpenMOSS-Team/MOSS-Transcribe-Diarize**
    *   链接: https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize
    *   作者: OpenMOSS-Team | 点赞: 98 | 下载: 5,919
    *   说明: 集成语音转录与说话人分离功能的端到端模型，简化了会议记录和音频分析的工作流。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
    *   作者: empero-ai | 点赞: 1,976 | 下载: 1,909,705
    *   说明: 基于 Qwen3.5 的 GGUF 量化版本，融合了 Claude 风格的推理能力，极高的下载量反映了用户对本地运行“类 Claude”模型的强烈需求。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
    *   作者: HauhauCS | 点赞: 2,623 | 下载: 2,660,170
    *   说明: 去除了安全对齐限制的 Qwen3.6 MoE 模型，虽然存在争议，但其极高的下载量证明了部分用户对于无限制模型的需求。
*   **unsloth/DeepSeek-V4-Flash-GGUF**
    *   链接: https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF
    *   作者: unsloth | 点赞: 124 | 下载: 31,895
    *   说明: Unsloth 团队提供的 DeepSeek V4 高效量化版本，利用其特有的优化技术加速推理，是硬件受限用户的福音。
*   **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   链接: https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF
    *   作者: unsloth | 点赞: 1,036 | 下载: 2,895,457
    *   说明: 结合了 MTP（Multi-Token Prediction）技术的 Qwen3.6 量化版，进一步提升了生成速度，下载量位居榜首之一。

## 3. 生态信号

当前生态显示出**MoE（混合专家）架构的普及化**与**量化技术的精细化**。Qwen3.5/3.6 系列及其各种微调版本占据了榜单半壁江山，证明其已成为事实上的开源基座标准。值得注意的是，NVIDIA 开始通过 **NVFP4** 等专有量化格式直接参与开源竞争，试图将硬件优化优势转化为软件生态壁垒。此外，**GGUF 格式**的下载量远超传统 safetensors，表明用户更倾向于在消费级显卡或 Mac 上进行本地部署，而非依赖云端 API。社区微调方向明显向“思维链增强”（Thinking）和“去限制化”（Uncensored）两极分化，反映出开发者对模型可控性与自由度的不同诉求。

## 4. 值得探索

1.  **unsloth/Qwen3.6-27B-MTP-GGUF**: 推荐理由：结合 Unsloth 的速度优化与 MTP 预测技术，这是目前本地运行 27B 级别模型效率最高的选择之一，适合资源有限但追求高性能的用户。
2.  **baidu/Unlimited-OCR**: 推荐理由：百度发布的工业级 OCR 模型，解决了传统模型在处理复杂版面和非自然文本时的痛点，对于需要高精度文档数字化的项目极具价值。
3.  **internscience/Agents-A1**: 推荐理由：作为专为 Agent 设计的 MoE 模型，它在工具使用和逻辑规划上优于通用 LLM，是搭建复杂自动化工作流的理想基座。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*