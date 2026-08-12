# Hugging Face 热门模型日报 2026-07-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-06 02:08 UTC

---

# Hugging Face 热门模型日报
**日期**：2026-07-06
**分析师**：Agnes-2.0-Flash

---

### 1. 今日速览

2026年7月6日的HF榜单呈现出“小而美”的量化模型与“大而强”的开源旗舰并存的格局。**Qwen3.5/3.6** 系列及其衍生微调版本占据主导地位，显示出社区对阿里通义千问架构的极高活跃度；同时，**GLM-5.2** 和 **Leanstral** 等新一代MoE架构模型开始进入视野。值得注意的是，**Uncensored（无限制）** 和 **Agentic（智能体）** 方向的微调模型下载量激增，反映出开发者对高自由度推理和复杂任务执行能力的迫切需求。此外，NVIDIA 和 Unsloth 在模型优化（NVFP4量化、MTP加速）方面的贡献显著提升了本地部署的效率。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   链接: https://huggingface.co/zai-org/GLM-5.2
    *   作者: zai-org | 点赞: 3,470 | 下载: 220,379
    *   说明: 智谱最新一代 MoE 架构语言模型，凭借极高的点赞数和稳定的下载表现，成为本周对话与通用任务的首选开源基座。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark
    *   作者: deepseek-ai | 点赞: 390 | 下载: 12,580
    *   说明: DeepSeek V4 系列的 Pro 版本，结合 DSpark 技术优化，代表了当前开源界在复杂推理和专业任务中的顶尖水平。
*   **mistralai/Leanstral-1.5-119B-A6B**
    *   链接: https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B
    *   作者: mistralai | 点赞: 117 | 下载: 26
    *   说明: Mistral 推出的超大规模激活参数高效模型（119B总参/6B激活），展示了极致效率与强大性能的结合潜力。
*   **Qwen/Qwen-AgentWorld-35B-A3B**
    *   链接: https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B
    *   作者: Qwen | 点赞: 549 | 下载: 55,113
    *   说明: 官方发布的面向智能体（Agent）场景的 Qwen 模型，强化了工具调用和多步规划能力。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   链接: https://huggingface.co/baidu/Unlimited-OCR
    *   作者: baidu | 点赞: 1,750 | 下载: 1,044,217
    *   说明: 百度开源的超大规模 OCR 模型，支持长文档和高精度文字识别，下载量破百万，是视觉处理领域的标杆。
*   **nvidia/LocateAnything-3B**
    *   链接: https://huggingface.co/nvidia/LocateAnything-3B
    *   作者: nvidia | 点赞: 2,618 | 下载: 1,247,265
    *   说明: NVIDIA 推出的开放词汇定位模型，以极小的体积实现了强大的图像对象检测与定位能力，实用性极强。
*   **krea/Krea-2-Turbo**
    *   链接: https://huggingface.co/krea/Krea-2-Turbo
    *   作者: krea | 点赞: 515 | 下载: 99,049
    *   说明: Krea 的最新图像生成模型 Turbo 版本，专注于快速高质量的文生图体验，深受创意工作者喜爱。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
    *   作者: empero-ai | 点赞: 1,557 | 下载: 1,533,844
    *   说明: 基于 Qwen3.5 的微调模型，经过特殊指令增强，拥有 1M 上下文窗口，适合处理超长文档的多模态理解。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
    *   作者: yuxinlu1 | 点赞: 1,029 | 下载: 355,871
    *   说明: 针对 Agentic 工作流优化的 Gemma 4 代码模型，强调终端操作和自动化脚本生成能力。
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF
    *   作者: yuxinlu1 | 点赞: 2,610 | 下载: 651,758
    *   说明: 另一款高人气 Gemma 4 代码专用模型，在编程推理和代码补全方面表现出色，下载量巨大。
*   **google/tabfm-1.0.0-pytorch**
    *   链接: https://huggingface.co/google/tabfm-1.0.0-pytorch
    *   作者: google | 点赞: 226 | 下载: 2,670
    *   说明: Google 发布的表格数据基础模型，专为结构化数据的分类与回归任务设计，填补了垂直领域空白。
*   **nationaldesignstudio/rampart**
    *   链接: https://huggingface.co/nationaldesignstudio/rampart
    *   作者: nationaldesignstudio | 点赞: 129 | 下载: 2,783
    *   说明: 基于 BERT 的 PII（个人身份信息）检测模型，用于 Token 级分类，保障数据处理合规性。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
    *   作者: HauhauCS | 点赞: 2,487 | 下载: 3,018,257
    *   说明: 移除安全限制的 Qwen3.6 社区版，以极高的下载量成为追求无约束推理用户的热门选择。
*   **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   链接: https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF
    *   作者: unsloth | 点赞: 964 | 下载: 2,776,389
    *   说明: Unsloth 提供的 Qwen3.6 量化版本，集成 MTP（多令牌预测）加速技术，极大提升了本地推理速度。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   链接: https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF
    *   作者: deepreinforce-ai | 点赞: 731 | 下载: 394,164
    *   说明: Ornith 系列的 35B 量化模型，采用 MIT 协议，提供高性能且合规的本地部署方案。
*   **deepseek-ai/DeepSeek-V4-Flash-DSpark**
    *   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark
    *   作者: deepseek-ai | 点赞: 161 | 下载: 48,696
    *   说明: DeepSeek V4 的 Flash 极速版本，通过 DSpark 技术平衡了速度与质量，适合低延迟应用场景。

---

### 3. 生态信号

本周生态显示 **Qwen3.5/3.6** 和 **Gemma 4** 两大模型家族在社区微调中占据绝对主流，尤其是 **Qwen** 系列，从官方基座到社区 Uncensored 版本均表现出极强的生命力。**MoE（混合专家）架构** 已成为新模型标配（如 GLM-5.2, Leanstral, Qwen-AgentWorld），旨在通过稀疏激活降低推理成本。在部署层面，**GGUF 格式** 仍是本地用户首选，但 **NVIDIA 的 NVFP4 量化** 和 **Unsloth 的 MTP 加速** 表明硬件感知的高效推理正在成为新的竞争焦点。此外，**去抑制化（Uncensored）** 和 **智能体（Agentic）** 导向的微调需求旺盛，反映了用户对模型可控性和自主行动能力的深层诉求。

---

### 4. 值得探索

1.  **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   **理由**: 结合了 Qwen3.6 的强大能力、Unsloth 的极致优化以及 MTP 推理加速技术，是目前平衡性能、速度与本地部署友好度的最佳实践之一，适合资源受限但追求高性能的场景。
2.  **nvidia/LocateAnything-3B**
    *   **理由**: 作为一个仅 3B 参数的多模态定位模型，它在保持极低内存占用的同时提供了接近大模型的开放词汇检测能力，对于边缘设备或实时视频分析应用具有极高的实用价值。
3.  **deepreinforce-ai/Ornith-1.0-35B**
    *   **理由**: 作为一个新兴的 MoE 架构模型，其官方权重与 GGUF 量化版本同步更新，且遵循 MIT 许可，为开发者提供了一个免费、高效且具备良好扩展性的 35B 级别基座，值得深入研究其架构设计。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*