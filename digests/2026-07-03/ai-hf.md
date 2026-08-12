# Hugging Face 热门模型日报 2026-07-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-03 01:56 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-03
**分析师：** AI 模型生态分析师

## 1. 今日速览

本日 HF 榜单呈现出“大参数轻量化”与“垂直领域专业化”并行的显著特征。NVIDIA 推出的 NVFP4 量化技术模型（如 GLM-5.2-NVFP4）下载量激增，标志着高效推理部署成为社区核心关注点；同时，DeepSeek V4 系列及 Qwen3.6 生态持续霸榜，显示顶级开源模型迭代速度极快。此外，Krea 2 及其衍生 LoRA 在图像生成领域引发热潮，而针对安全合规的“Uncensored”微调模型仍拥有极高的社区活跃度与下载量。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2)
    *   作者: zai-org | 点赞: 3,256 | 下载: 176,154
    *   说明：智谱最新一代 GLM 模型，采用 MoE 架构，凭借卓越的对话与推理能力迅速获得高赞，是当日纯文本生成任务中的领头羊。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)
    *   作者: deepseek-ai | 点赞: 303 | 下载: 8,184
    *   说明：DeepSeek V4 系列的 Pro 版本，结合 DSpark 优化，展示了 DeepSeek 在高端推理模型领域的持续统治力。
*   **deepseek-ai/DeepSeek-V4-Flash-DSpark**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)
    *   作者: deepseek-ai | 点赞: 128 | 下载: 23,939
    *   说明：V4 系列的 Flash 版本，主打速度与效率平衡，下载量高于 Pro 版，反映开发者对快速迭代版本的偏好。
*   **Qwen/Qwen-AgentWorld-35B-A3B**
    *   [链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)
    *   作者: Qwen | 点赞: 511 | 下载: 39,448
    *   说明：通义千问发布的面向 Agent 世界的 MoE 模型，专为复杂智能体任务设计，体现了 Qwen 生态向 Agent 场景的深度拓展。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR)
    *   作者: baidu | 点赞: 1,652 | 下载: 758,489
    *   说明：百度推出的无限上下文 OCR 模型，解决了长文档、复杂版面识别痛点，下载量极高，是多模态处理中的实用利器。
*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B)
    *   作者: nvidia | 点赞: 2,573 | 下载: 1,006,831
    *   说明：NVIDIA 发布的通用物体定位模型，支持细粒度视觉理解，高点赞和高下载表明其在视觉基础模型领域具有标杆意义。
*   **krea/Krea-2-Turbo**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo)
    *   作者: krea | 点赞: 462 | 下载: 69,788
    *   说明：Krea 2 的快速生成版本，专注于提升文生图的推理速度，满足了实时创作场景的需求。
*   **fal/LTX-2.3-3DREAL-LoRA**
    *   [链接](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)
    *   作者: fal | 点赞: 145 | 下载: 0
    *   说明：针对 LTX-2.3 视频的 3D 真实感 LoRA 微调，虽下载数为 0（可能为新上传或私有），但代表了视频生成向 3D 一致性进化的前沿趋势。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **google/tabfm-1.0.0-pytorch**
    *   [链接](https://huggingface.co/google/tabfm-1.0.0-pytorch)
    *   作者: google | 点赞: 119 | 下载: 89
    *   说明：Google 发布的表格数据基础模型（Tabular Foundation Model），旨在解决结构化数据处理的通用难题，是表格 AI 领域的重要突破。
*   **LiquidAI/LFM2.5-230M**
    *   [链接](https://huggingface.co/LiquidAI/LFM2.5-230M)
    *   作者: LiquidAI | 点赞: 192 | 下载: 26,357
    *   说明：Liquid AI 的小型化语言模型，强调液态神经网络架构的高效性，适合边缘设备或低延迟场景。
*   **nationaldesignstudio/rampart**
    *   [链接](https://huggingface.co/nationaldesignstudio/rampart)
    *   作者: nationaldesignstudio | 点赞: 104 | 下载: 790
    *   说明：基于 Transformers.js 的 PII（个人身份信息）检测模型，侧重于隐私保护和合规性，适用于敏感数据处理流程。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   作者: HauhauCS | 点赞: 2,397 | 下载: 3,078,904
    *   说明：基于 Qwen3.6 的去审查（Uncensored）AG 微调版，以惊人的下载量位居榜首，反映了社区对无限制内容生成模型的巨大需求。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
    *   作者: empero-ai | 点赞: 1,256 | 下载: 1,250,562
    *   说明：将 Qwen3.5 与 Claude 风格推理结合的 GGUF 量化模型，支持 1M 上下文，兼顾了长窗口与高质量推理，本地部署首选。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF** & **Ornith-1.0-9B-GGUF**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) / [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)
    *   作者: deepreinforce-ai | 点赞: 658/397 | 下载: 284k/255k
    *   说明：Ornith 系列的 GGUF 量化版本，提供不同参数量级选择，MIT 许可证使其在企业内部部署中极具吸引力。
*   **nvidia/Qwen3.6-27B-NVFP4** & **nvidia/GLM-5.2-NVFP4**
    *   [链接](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) / [链接](https://huggingface.co/nvidia/GLM-5.2-NVFP4)
    *   作者: nvidia | 点赞: 211/208 | 下载: 27k/159k
    *   说明：NVIDIA 官方提供的 NVFP4 格式模型，专为 Blackwell 架构 GPU 优化，代表了硬件厂商推动模型高效落地的最新标准。
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)
    *   作者: yuxinlu1 | 点赞: 963 | 下载: 314,374
    *   说明：基于 Gemma 4 的 Agentic 微调 GGUF 模型，通过复杂的组合策略提升了智能体执行能力，是本地运行高级 Agent 的有力候选。

## 3. 生态信号

当前生态呈现三大趋势：一是**量化标准化加速**，NVIDIA 的 NVFP4 格式与 GGUF 格式并行流行，开发者极度关注推理成本与硬件兼容性，特别是针对本地部署的量化模型下载量巨大。二是**MoE 架构成为主流**，从 GLM-5.2 到 Qwen-AgentWorld，混合专家模型因其在性能与效率间的平衡，成为新发布模型的首选架构。三是**垂直微调活跃度高**，尽管通用大模型竞争激烈，但针对 OCR、表格数据、代码代理（Agentic）及去审查内容的特定微调模型展现出极高的用户粘性和下载热度，表明市场需求正从“通用能力”向“极致专项”分化。

## 4. 值得探索

1.  **nvidia/LocateAnything-3B**
    *   **理由**：作为 NVIDIA 推出的通用定位模型，它在视觉基础能力上表现优异，且下载量破百万，验证了其稳定性和实用性，适合需要高精度物体定位的多模态应用开发者。
2.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   **理由**：虽然涉及去审查内容，但其高达 300 万+的下载量和 2000+ 点赞证明了社区对“无束缚”推理能力的强烈需求。研究此类模型的微调边界和安全对齐机制，对于理解当前开源社区的伦理与技术博弈具有重要价值。
3.  **google/tabfm-1.0.0-pytorch**
    *   **理由**：Google 入场表格 AI 领域，发布了专门的 Tabular Foundation Model。随着企业数据中结构化数据占比巨大，该模型有望填补表格数据预训练的空白，值得关注其在金融、科研等结构化数据分析中的应用潜力。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*