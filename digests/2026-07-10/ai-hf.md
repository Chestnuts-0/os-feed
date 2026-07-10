# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 01:54 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-10
**分析师：** AI 模型生态分析师

## 1. 今日速览

2026年7月10日，Hugging Face 生态呈现出“大模型轻量化”与“垂直领域专业化”并行的显著趋势。**Qwen3.5/Qwen3.6** 系列及其衍生微调版本占据主导地位，尤其是经过推理增强（Reasoning）和长上下文优化的 GGUF 量化版本下载量激增，显示出社区对高效本地部署的强烈需求。**NVIDIA Nemotron** 系列模型持续发力，特别是在视觉定位（LocateAnything）和复杂逻辑拼图任务上展现了强大的多模态能力。此外，**Krea-2** 图像生成生态依然活跃，ControlNet 和 LoRA 插件丰富，而 **DeepSeek-V4** 和 **GLM-5** 等新一代架构也在榜单中占据重要席位，竞争日趋激烈。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   链接: https://huggingface.co/zai-org/GLM-5.2
    *   作者: zai-org | 点赞: 3,729 | 下载: 362,300
    *   说明: 智谱最新一代 MoE 架构通用语言模型，支持高效对话与文本生成，凭借出色的基准表现成为本周点赞最高的开源 LLM。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
    *   作者: empero-ai | 点赞: 1,931 | 下载: 1,875,602
    *   说明: 基于 Qwen3.5 的微调模型，深度融合 Claude 风格的推理能力，支持 1M 超长上下文，其 GGUF 量化格式极大降低了本地运行门槛，下载量惊人。
*   **tencent/Hy3**
    *   链接: https://huggingface.co/tencent/Hy3
    *   作者: tencent | 点赞: 615 | 下载: 5,572
    *   说明: 腾讯混元系列的最新迭代，专注于高质量文本生成，标签显示其可能引入了新的架构优化以进一步提升效率。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark
    *   作者: deepseek-ai | 点赞: 458 | 下载: 29,230
    *   说明: DeepSeek V4 的专业版变体，针对复杂推理任务进行了优化，展示了国产开源模型在高端推理领域的持续竞争力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   链接: https://huggingface.co/baidu/Unlimited-OCR
    *   作者: baidu | 点赞: 1,903 | 下载: 1,246,042
    *   说明: 百度推出的全能型 OCR 模型，支持多种语言和场景的文字提取，高下载量表明其在工业级文档处理中的广泛应用潜力。
*   **nvidia/LocateAnything-3B**
    *   链接: https://huggingface.co/nvidia/LocateAnything-3B
    *   作者: nvidia | 点赞: 2,687 | 下载: 1,447,244
    *   说明: NVIDIA 发布的细粒度视觉定位模型，能够精确识别图像中的特定对象或区域，是多模态理解任务中的重要工具。
*   **krea/Krea-2-Turbo**
    *   链接: https://huggingface.co/krea/Krea-2-Turbo
    *   作者: krea | 点赞: 569 | 下载: 157,302
    *   说明: Krea 图像生成模型的加速版本，旨在提供更快的文生图体验，保持了高质量生成的同时提升了推理速度。
*   **InternScience/Agents-A1**
    *   链接: https://huggingface.co/InternScience/Agents-A1
    *   作者: InternScience | 点赞: 436 | 下载: 23,112
    *   说明: 面向智能体（Agent）任务优化的多模态模型，结合 Qwen3.5 MoE 架构，擅长处理复杂的图文交互指令。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
    *   作者: yuxinlu1 | 点赞: 1,117 | 下载: 418,171
    *   说明: 基于 Gemma 4 的深度微调模型，特别强化了 Agentic 行为和终端交互能力，适合自动化代码执行和系统管理场景。
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF
    *   作者: yuxinlu1 | 点赞: 2,670 | 下载: 703,735
    *   说明: 专注于代码生成与推理的 Gemma 4 微调版本，通过 Fable5 框架优化，在编程基准测试中表现优异。
*   **google/tabfm-1.0.0-pytorch**
    *   链接: https://huggingface.co/google/tabfm-1.0.0-pytorch
    *   作者: google | 点赞: 330 | 下载: 16,374
    *   说明: Google 推出的表格数据基础模型，支持零样本分类和回归任务，填补了表格 AI 领域的开源工具空白。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   链接: https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF
    *   作者: unsloth | 点赞: 1,025 | 下载: 2,894,918
    *   说明: Unsloth 提供的 Qwen3.6 27B 模型 GGUF 量化版本，利用 MTP (Multi-Token Prediction) 技术进一步优化推理速度，是本地部署高性能模型的首选之一。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
    *   作者: HauhauCS | 点赞: 2,596 | 下载: 2,716,428
    *   说明: 去除了安全限制的 Qwen3.6 35B MoE 模型，满足部分用户对无约束内容生成的需求，尽管存在争议，但下载量极高。
*   **nvidia/Qwen3.6-27B-NVFP4**
    *   链接: https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4
    *   作者: nvidia | 点赞: 332 | 下载: 748,054
    *   说明: NVIDIA 官方发布的 Qwen3.6 27B 模型，采用 NVFP4 低比特量化技术，专为 NVIDIA GPU 硬件加速优化，兼顾精度与性能。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M
    *   作者: empero-ai | 点赞: 748 | 下载: 179,378
    *   说明: 上述 GGUF 版本的原始 PyTorch 权重，供需要自定义训练或进一步微调的用户使用。

## 3. 生态信号

当前模型生态呈现三大特征：一是**Qwen 家族的绝对统治力**，从基座到微调、从 PyTorch 到 GGUF，Qwen3.5/3.6 系列几乎垄断了中高算力需求的主流市场；二是**推理与效率并重**，社区大量涌现带有 "Reasoning", "Thinking", "Agentic" 标签的微调模型，且普遍采用 GGUF 或 NVIDIA 专有量化格式，表明用户更倾向于在消费级硬件上运行具备强逻辑能力的模型；三是**垂直多模态深化**，如 NVIDIA 的 LocateAnything 和百度的 Unlimited-OCR，显示开源力量正深入特定视觉任务，弥补通用模型在细节定位和 OCR 上的不足。

## 4. 值得探索

1.  **unsloth/Qwen3.6-27B-MTP-GGUF**: 推荐理由：结合了 Unsloth 的高效推理技术和 MTP 预测机制，是本地部署 27B 级别高性能模型的极佳选择，平衡了速度与质量。
2.  **nvidia/LocateAnything-3B**: 推荐理由：作为 NVIDIA 在多模态定位领域的最新成果，它在细粒度视觉理解上表现突出，对于需要精确对象定位的应用场景极具价值。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**: 推荐理由：Gemini 4 的编码专项微调版，针对开发者工作流优化，适合需要在本地进行代码辅助和调试的场景，且 GGUF 格式便于集成。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*