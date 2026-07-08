# Hugging Face 热门模型日报 2026-07-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-08 01:45 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-08
**分析师：** Agnes-2.0-Flash

## 1. 今日速览

2026年7月8日的 HF 榜单呈现出“小参数高效化”与“MoE架构主流化”的双重趋势，Qwen3.5/3.6 系列及其衍生模型占据半壁江山，尤其是经过深度量化（GGUF）和特定领域微调的版本下载量极高。多模态能力不再局限于简单的图文理解，而是向复杂的视觉定位（如 LocateAnything）和 Agent 自主交互（如 Agents-A1, Qwythos）延伸。社区对“Uncensored”（无审查）及“ABLiterated”（去对齐）模型的活跃使用，反映出开发者对模型控制力和自由度的极致追求，同时也伴随着伦理风险的隐忧。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者:** zai-org | **点赞:** 3,591 | **下载:** 281,584
    *   **说明:** 智谱最新一代 MoE 架构大模型，凭借卓越的对话连贯性和推理能力，成为本周最受关注的原生开源基座模型之一。

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者:** empero-ai | **点赞:** 1,759 | **下载:** 1,683,711
    *   **说明:** 基于 Qwen3.5 的 9B 模型，经过 Claude 风格对齐且支持 1M 上下文窗口，以极高的性价比和长文本处理能力成为本地部署首选。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者:** HauhauCS | **点赞:** 2,551 | **下载:** 2,823,988
    *   **说明:** 移除安全限制的 Qwen3.6 MoE 变体，因满足部分用户对无约束输出的需求而获得海量下载，是本周下载量最高的模型。

*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   **作者:** deepseek-ai | **点赞:** 424 | **下载:** 15,538
    *   **说明:** DeepSeek V4 系列的最新专业版，强调在复杂逻辑推理和多步规划任务中的表现，代表了官方持续迭代的最新技术水准。

*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **作者:** Qwen | **点赞:** 560 | **下载:** 60,736
    *   **说明:** 专为 Agent 场景设计的 Qwen MoE 模型，强化了对工具调用、环境交互和长期记忆的管理能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者:** baidu | **点赞:** 1,833 | **下载:** 1,084,945
    *   **说明:** 百度推出的高精度 OCR 模型，支持无限分辨率输入，在文档数字化和复杂版面解析场景中表现卓越。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者:** nvidia | **点赞:** 2,657 | **下载:** 1,424,958
    *   **说明:** NVIDIA 发布的细粒度视觉定位模型，能够精确识别并定位图像中的任意对象，为视觉问答和机器人导航提供关键感知能力。

*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **作者:** krea | **点赞:** 540 | **下载:** 123,729
    *   **说明:** 基于 Diffusers 的高效文生图模型，主打速度与质量的平衡，适合需要快速迭代创意原型的开发工作流。

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
    *   **作者:** empero-ai | **点赞:** 723 | **下载:** 152,516
    *   **说明:** 上述 GGUF 量化版的原始 Transformer 格式，供需要进一步微调或集成到特定推理框架的用户使用。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者:** yuxinlu1 | **点赞:** 2,638 | **下载:** 674,977
    *   **说明:** 针对 Gemma 4 进行的代码专项微调与推理增强，特别优化了终端操作和复杂代码生成，深受开发者喜爱。

*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **作者:** google | **点赞:** 287 | **下载:** 9,458
    *   **说明:** Google 发布的表格数据专用模型，擅长零样本下的表格分类与回归任务，填补了结构化数据处理领域的开源空白。

*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   **作者:** InternScience | **点赞:** 372 | **下载:** 14,723
    *   **说明:** 面向智能体开发的轻量级指令微调模型，具备较强的多步骤任务分解和执行能力，适合嵌入式或边缘端 Agent 部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **作者:** unsloth | **点赞:** 991 | **下载:** 2,842,118
    *   **说明:** 由 Unsloth 团队优化的 Qwen3.6 量化版本，利用其加速库技术大幅提升了推理速度，是本地运行中大型模型的性能标杆。

*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   **作者:** deepreinforce-ai | **点赞:** 779 | **下载:** 502,663
    *   **说明:** Ornith 系列的 35B 参数量化版，保留了强大的多模态理解能力，同时通过 GGUF 格式实现了较低的显存占用。

*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **作者:** yuxinlu1 | **点赞:** 1,076 | **下载:** 384,383
    *   **说明:** 另一款 Gemma 4 的代码与 Agent 专用量化模型，通过特殊的温度（tau）调整和指令组合，提升了在终端交互场景下的稳定性。

*   **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**
    *   **作者:** deepreinforce-ai | **点赞:** 452 | **下载:** 454,944
    *   **说明:** Ornith 系列的轻量级量化版，适合资源受限环境下的多模态应用，兼顾性能与效率。

## 3. 生态信号

本周生态最显著的信号是 **Qwen3.5/3.6 系列** 及其 **MoE 架构** 的全面统治力。无论是官方发布的 `Qwen-AgentWorld`，还是社区量化优化的 `Unsloth` 和 `empero-ai` 版本，均显示出开发者倾向于选择参数量适中但推理效率高的 MoE 模型进行本地部署。同时，**“去对齐”（Abliterated/Uncensored）** 模型的高下载量表明，尽管存在伦理争议，但市场对完全可控、无内容过滤的基座模型需求旺盛，特别是在创意写作和角色扮演领域。此外，**多模态 Agent** 成为新热点，模型不再仅处理静态图文，而是开始整合视觉定位（LocateAnything）与代码执行（Agents-A1），推动 AI 从“聊天机器人”向“自主执行者”演进。

## 4. 值得探索

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由:** 视觉定位是构建高精度视觉 Agent 的关键组件。该模型提供了细粒度的对象定位能力，对于需要结合 LLM 进行复杂场景理解的应用（如机器人操作、工业质检）具有极高的实用价值。

2.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-MTP-GGUF)**
    *   **理由:** 代表了当前本地部署的最佳实践。结合 Unsloth 的加速技术与 Qwen3.6 的强大基座，它展示了如何在消费级硬件上高效运行 27B 级别的 MoE 模型，是评估本地推理性能的理想基准。

3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由:** 在处理非结构化文档信息提取时，传统 OCR 往往受限于分辨率或版面复杂度。该模型支持的“无限分辨率”特性使其在处理高清扫描件、长图表或复杂排版文档时具有独特优势，是文档自动化流程中的重要一环。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*