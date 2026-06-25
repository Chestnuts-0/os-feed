# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-25 18:45 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-26

## 1. 今日速览
今日 HF 榜单呈现“巨头混战”与“长尾爆发”并存的态势。**DeepSeek-V4-Pro** 以超 5,000 点赞稳居榜首，显示高质量通用对话模型的持续统治力；而 **GLM-5.2** 及其衍生版本（如 Unsloth 量化版）热度极高，表明智谱 AI 在开源生态中的强劲势头。多模态领域，**Google Gemma 4** 系列（包括 12B 指令版及社区微调版）下载量惊人，尤其是针对代码和 Agent 场景的微调模型，反映了开发者对轻量级、高能效多模态基座的迫切需求。此外，**NVIDIA** 和 **Krea** 等厂商在视觉生成与推理优化上的布局依然活跃。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **deepseek-ai/DeepSeek-V4-Pro** [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
    *   **作者:** deepseek-ai | **点赞:** 5,058 | **下载:** 1,878,217
    *   **说明:** 当前最热门的通用对话模型，凭借卓越的推理能力和广泛适用性占据榜单第一，是许多应用的首选基座。
*   **zai-org/GLM-5.2** [链接](https://huggingface.co/zai-org/GLM-5.2)
    *   **作者:** zai-org | **点赞:** 2,454 | **下载:** 67,107
    *   **说明:** 智谱最新旗舰模型，采用 MoE 架构，在中文语境及复杂指令遵循上表现优异，近期热度飙升。
*   **google/gemma-4-12B-it** [链接](https://huggingface.co/google/gemma-4-12B-it)
    *   **作者:** google | **点赞:** 1,174 | **下载:** 2,187,644
    *   **说明:** Google Gemma 4 系列的指令微调版，虽然参数量适中（12B），但凭借极低的部署门槛和高性价比，下载量已突破两百万，成为边缘计算和快速原型开发的首选。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **nvidia/LocateAnything-3B** [链接](https://huggingface.co/nvidia/LocateAnything-3B)
    *   **作者:** nvidia | **点赞:** 2,360 | **下载:** 407,838
    *   **说明:** NVIDIA 推出的高精度定位多模态模型，擅长图像中的物体检测与定位，在工业视觉和机器人导航领域极具潜力。
*   **krea/Krea-2-Turbo** & **krea/Krea-2-Raw** [链接](https://huggingface.co/krea/Krea-2-Turbo) / [链接](https://huggingface.co/krea/Krea-2-Raw)
    *   **作者:** krea | **点赞:** 235 / 183 | **下载:** 2,996 / 5,113
    *   **说明:** Krea 最新的图像生成模型迭代，提供 Turbo（快速）和 Raw（原始）两种模式，平衡了生成速度与质量，深受创意工作者关注。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b** [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
    *   **作者:** nvidia | **点赞:** 691 | **下载:** 50,553
    *   **说明:** 轻量级流式语音识别模型，专为实时应用场景设计，体现了 NVIDIA 在小模型效率优化上的持续投入。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
    *   **作者:** yuxinlu1 | **点赞:** 2,347 | **下载:** 495,813
    *   **说明:** 基于 Gemma 4 的代码专用微调模型，经过社区高强度训练，在编程任务中表现出色，且提供 GGUF 格式便于本地运行，下载量接近 50 万。
*   **WeiboAI/VibeThinker-3B** [链接](https://huggingface.co/WeiboAI/VibeThinker-3B)
    *   **作者:** WeiboAI | **点赞:** 712 | **下载:** 51,717
    *   **说明:** 微博团队发布的 3B 小模型，专注于数学推理和思维链（CoT）能力，展示了小模型在特定逻辑任务上的突破。
*   **baidu/Unlimited-OCR** [链接](https://huggingface.co/baidu/Unlimited-OCR)
    *   **作者:** baidu | **点赞:** 863 | **下载:** 70,743
    *   **说明:** 百度推出的无限制尺寸 OCR 模型，解决了长文档和复杂版面识别难题，在文档数字化场景中实用性强。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   **作者:** HauhauCS | **点赞:** 2,229 | **下载:** 3,520,206
    *   **说明:** 对 Qwen 3.6 进行的激进去护栏（Uncensored）微调，下载量高达 350 万，反映出社区对完全自由、无过滤内容生成的巨大需求（尽管存在争议）。
*   **unsloth/GLM-5.2-GGUF** [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF)
    *   **作者:** unsloth | **点赞:** 379 | **下载:** 88,915
    *   **说明:** 由 Unsloth 提供的 GLM-5.2 高效量化版本，利用其加速技术显著降低了推理资源需求，方便个人开发者在消费级硬件上运行大模型。
*   **nvidia/Qwen3.6-35B-A3B-NVFP4** [链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)
    *   **作者:** nvidia | **点赞:** 331 | **下载:** 4,602,255
    *   **说明:** 使用 NVIDIA 专有 NVFP4 量化格式优化的 Qwen 3.6 模型，下载量近 460 万，展示了硬件厂商在推动高效量化标准落地方面的强大影响力。

## 3. 生态信号
当前生态呈现**“小模型专业化”**与**“大模型轻量化”**双向奔赴的趋势。一方面，像 `VibeThinker-3B` 和 `LocateAnything-3B` 这样的小参数模型在特定垂直领域（数学推理、视觉定位）展现出超越预期性能，降低了部署门槛。另一方面，`Gemma 4` 和 `Qwen 3.6` 等大基座的社区微调极其活跃，特别是 GGUF 量化和去护栏（Uncensored）版本的高下载量，表明开发者更倾向于在本地构建可控、高效的私有化模型集群。此外，NVIDIA 和 Unsloth 等工具链提供商的深度介入，使得高性能量化模型成为主流，硬件与软件协同优化的生态闭环正在形成。

## 4. 值得探索
1.  **yuxinlu1/gemma-4-12B-coder... (GGUF)**
    *   **理由:** 如果你需要在本地 GPU 或 CPU 上运行高效的代码助手，这个基于 Gemma 4 的微调模型提供了极佳的性价比和兼容性，下载量证明其稳定性。
2.  **nvidia/LocateAnything-3B**
    *   **理由:** 对于需要高精度物体定位的多模态应用（如机器人抓取、自动驾驶感知），这是一个轻量且强大的选择，代表了 NVIDIA 在边缘视觉推理上的最新进展。
3.  **deepseek-ai/DeepSeek-V4-Pro**
    *   **理由:** 作为当前综合性能最强的开源/半开源模型之一，它是构建通用智能代理（Agent）和复杂推理任务的理想基座，值得深入研究其 Prompt 工程技巧。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*