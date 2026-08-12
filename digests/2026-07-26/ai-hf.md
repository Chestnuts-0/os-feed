# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 01:49 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-26

## 1. 今日速览
今日 HF 榜单呈现“多模态混合专家模型（MoE）”与“高效量化”双主线并行的态势。Qwen3.6 系列及其衍生微调版本占据绝对主导地位，尤其是 35B-A3B MoE 架构在开源社区引发狂热下载。同时，百度 Unlimited-OCR 以百万级下载量领跑，显示 OCR 任务在落地场景中的极高需求。此外，NVIDIA Cosmos3 和 Microsoft Fara 等垂直领域模型的亮相，预示着 Agent 和机器人控制正在从概念走向实际部署。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 点赞: 4,446 | 下载: 707,029
    *   **说明：** GLM 系列的最新迭代，凭借卓越的对话能力和高点赞数成为本周最受关注的通用大模型之一。

*   **Qwen/Qwen3.6-35B-A3B**
    *   [链接](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | 作者: Qwen | 点赞: 2,516 | 下载: 6,413,105
    *   **说明：** 阿里通义千问推出的 35B 参数但仅激活 3B 的 MoE 模型，以极高的性价比和推理速度横扫下载榜，是效率与性能的标杆。

*   **upstage/Solar-Open2-250B**
    *   [链接](https://huggingface.co/upstage/Solar-Open2-250B) | 作者: upstage | 点赞: 562 | 下载: 2,784
    *   **说明：** Upstage 发布的超大参数开源模型，展示了在复杂推理任务上挑战顶级闭源模型的实力。

*   **poolside/Laguna-S-2.1**
    *   [链接](https://huggingface.co/poolside/Laguna-S-2.1) | 作者: poolside | 点赞: 661 | 下载: 45,260
    *   **说明：** Poolside 推出的高性能文本生成模型，专注于代码和结构化数据生成，近期热度持续攀升。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 点赞: 3,106 | 下载: 2,564,264
    *   **说明：** 百度开源的极致 OCR 模型，支持无限分辨率输入，凭借巨大的下载量证明其在文档数字化领域的统治力。

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 点赞: 2,465 | 下载: 1,570,995
    *   **说明：** 基于 Qwen3.5 微调的多模态模型，具备 1M 上下文窗口能力，适合长文档分析，其 GGUF 格式极大降低了使用门槛。

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 点赞: 3,091 | 下载: 1,988,680
    *   **说明：** 对 Qwen3.6 MoE 模型进行的去限制微调版本，满足了对自由生成有特定需求的用户群体，下载量惊人。

*   **microsoft/Mage-Flow**
    *   [链接](https://huggingface.co/microsoft/Mage-Flow) | 作者: microsoft | 点赞: 277 | 下载: 1,156
    *   **说明：** 微软推出的图像生成与编辑模型，展示了在受控图像生成领域的最新进展。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **moonshotai/Kimi-K2.7-Code**
    *   [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | 作者: moonshotai | 点赞: 1,277 | 下载: 749,449
    *   **说明：** 月之暗面发布的专门针对代码生成的优化模型，在开发者社区中享有极高声誉。

*   **Kwaipilot/KAT-Coder-V2.5-Dev**
    *   [链接](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | 作者: Kwaipilot | 点赞: 166 | 下载: 841
    *   **说明：** 基于 Qwen3.5 MoE 的代码专用模型，专注于解决复杂编程任务。

*   **openbmb/MiniCPM-RobotManip** & **openbmb/MiniCPM-RobotTrack**
    *   [链接1](https://huggingface.co/openbmb/MiniCPM-RobotManip) | 链接2](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | 作者: openbmb
    *   **说明：** MiniCPM 团队发布的两个机器人专用视觉-语言-动作（VLA）模型，分别聚焦于操作和追踪，标志着具身智能模型进入开源主流视野。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **prism-ml/Bonsai-27B-gguf**
    *   [链接](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | 作者: prism-ml | 点赞: 638 | 下载: 2,114,963
    *   **说明：** Bonsai 模型的 1-bit 极致量化版本，以极小的体积保留了强大的对话能力，是边缘部署的热门选择。

*   **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**
    *   [链接](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | 作者: DavidAU | 点赞: 545 | 下载: 483,845
    *   **说明：** 对 Qwen3.6 进行的深度社区微调与量化，结合了多种指令遵循优化，服务于高阶玩家。

*   **prism-ml/Ternary-Bonsai-27B-gguf**
    *   [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | 作者: prism-ml | 点赞: 1,028 | 下载: 611,685
    *   **说明：** Bonsai 模型的 Ternary（三元）量化版本，平衡了精度与速度，受到本地部署用户的青睐。

*   **poolside/Laguna-S-2.1-GGUF** & **poolside/Laguna-S-2.1-NVFP4**
    *   [链接1](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | 链接2](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | 作者: poolside
    *   **说明：** Laguna-S-2.1 的不同量化格式版本，特别是 NVFP4 格式，展示了针对 NVIDIA 硬件优化的推理效率。

## 3. 生态信号
本周生态最显著的特征是 **Qwen3.6 系列及其变体的全面爆发**。作为 MoE 架构的代表，Qwen3.6-35B-A3B 不仅原版下载量破千万，更催生了大量社区微调版（如 Uncensored、GGUF 量化版），显示出开发者对其基础架构的高度认可。同时，**量化技术**（尤其是 GGUF 和 NVFP4）已成为模型分发的标准配置，旨在降低推理成本。此外，**具身智能**（Robotics）开始进入热门榜单，MiniCPM 的机器人模型表明多模态能力正快速向物理世界交互延伸。开源权重依然占据主流，但社区对“去限制”和“极致优化”版本的追求也反映了本地部署市场的活跃度。

## 4. 值得探索

1.  **Qwen/Qwen3.6-35B-A3B**
    *   **理由：** 当前性价比最高的 MoE 模型之一。仅需激活少量参数即可处理复杂任务，适合资源受限但需要强大能力的场景。其庞大的下载量和活跃的社区支持意味着丰富的工具链和资源。

2.  **baidu/Unlimited-OCR**
    *   **理由：** 在文档处理和视觉理解领域具有不可替代性。支持无限分辨率意味着它可以处理任何尺寸的图像而无需裁剪或缩放，对于构建高精度文档解析 Pipeline 至关重要。

3.  **openbmb/MiniCPM-RobotManip**
    *   **理由：** 代表了 VLA（Vision-Language-Action）模型的最新进展。对于从事机器人研究或具身智能开发的工程师来说，这是一个极佳的基线模型，展示了如何将多模态大模型的能力转化为具体的物理控制指令。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*