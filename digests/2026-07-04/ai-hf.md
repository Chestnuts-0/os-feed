# Hugging Face 热门模型日报 2026-07-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-04 01:55 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-04  
**分析师：** Agnes-2.0-Flash

## 1. 今日速览

2026年7月4日的HF榜单呈现出“大模型轻量化”与“垂直领域专业化”并行的显著趋势。**Qwen3.5/3.6** 及其衍生版本（如 Qwythos, Unsoloth 微调版）在本地部署和社区微调中占据主导地位，尤其是 GGUF 格式的量化模型下载量极高。**NVIDIA** 和 **DeepSeek** 等机构持续输出经过硬件优化或架构创新的模型（如 NVFP4 量化、DSpark 系列），显示出工业界对推理效率的极致追求。此外，**GLM-5.2** 的开源与社区 Abliterated 版本也引发了大量关注，表明开源生态在紧跟前沿基座的同时，正通过去限制化满足特定用户需求。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 👍 3,344 | ⬇️ 191,462
    *   智谱最新一代 GLM 基座模型，采用 MoE 架构，凭借高点赞数成为本周最受关注的通用对话模型，展现了强大的中文及多语言能力。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 👍 2,433 | ⬇️ 3,029,679
    *   基于 Qwen3.6 的“去限制化”社区微调版，拥有极高的下载量，反映了用户对无审查、高自由度推理模型的强烈需求。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | 作者: deepreinforce-ai | 👍 685 | ⬇️ 322,780
    *   Ornith 系列的 35B 参数 GGUF 量化版本，由 deepreinforce-ai 发布，旨在提供高性能且易于本地部署的文本生成能力。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | 作者: deepseek-ai | 👍 343 | ⬇️ 9,388
    *   DeepSeek V4 系列的 Pro 版本，附带 DSpark 优化，代表了官方对推理速度和准确性的进一步工程化提升。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 👍 1,372 | ⬇️ 1,366,360
    *   基于 Qwen3.5 的微调模型，结合 Claude 风格指令微调，以 1M 上下文长度和高下载量成为小参数模型中的佼佼者。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 👍 1,692 | ⬇️ 885,040
    *   百度发布的超大规模 OCR 模型，支持无限分辨率图像文字识别，在多模态信息提取领域具有极高的实用价值。
*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 👍 2,589 | ⬇️ 1,108,586
    *   NVIDIA 推出的通用物体定位模型，具备强大的视觉理解与定位能力，下载量巨大，是视觉基础模型的重要补充。
*   **krea/Krea-2-Turbo**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo) | 作者: krea | 👍 481 | ⬇️ 84,006
    *   Krea 系列的加速版文生图模型，专注于快速迭代的高质量图像生成，适合实时创意工作流。
*   **fal/LTX-2.3-3DREAL-LoRA**
    *   [链接](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | 作者: fal | 👍 150 | ⬇️ 0
    *   针对 LTX 视频生成模型的 3D 真实感 LoRA 微调，虽下载量为 0（可能为新发布或私有），但在视频生成领域具有前瞻性。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | 作者: yuxinlu1 | 👍 992 | ⬇️ 329,391
    *   Gemma 4 的代码智能体专用微调版，针对终端操作和复杂代码任务进行了优化，是开发者本地运行的强力助手。
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 👍 2,585 | ⬇️ 628,225
    *   另一款基于 Gemma 4 的代码专用模型，点赞数极高，表明社区对轻量级、高效代码生成模型的迫切需求。
*   **google/tabfm-1.0.0-pytorch**
    *   [链接](https://huggingface.co/google/tabfm-1.0.0-pytorch) | 作者: google | 👍 151 | ⬇️ 450
    *   Google 发布的表格数据建模模型，支持零样本分类与回归，填补了结构化数据深度学习领域的开源空白。
*   **nationaldesignstudio/rampart**
    *   [链接](https://huggingface.co/nationaldesignstudio/rampart) | 作者: nationaldesignstudio | 👍 115 | ⬇️ 1,149
    *   基于 Transformers.js 的 PII（个人身份信息）检测模型，侧重于隐私保护和令牌级分类，适用于合规性数据处理。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | 作者: empero-ai | 👍 660 | ⬇️ 131,323
    *   上述 GGUF 版本的原始 Safetensors 格式，提供更灵活的后端集成选项，保持了高下载热度。
*   **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   [链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | 作者: unsloth | 👍 938 | ⬇️ 1,774,298
    *   Unsloth 对 Qwen3.6 进行的 MTP（多令牌预测）优化及 GGUF 量化，极大提升了推理速度，是本地部署的热门选择。
*   **nvidia/Qwen3.6-27B-NVFP4**
    *   [链接](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | 作者: nvidia | 👍 229 | ⬇️ 94,465
    *   NVIDIA 官方提供的 Qwen3.6 NVFP4 量化版本，专为 NVIDIA GPU 硬件加速优化，展示了厂商对量化标准的推动。
*   **deepreinforce-ai/Ornith-1.0-9B-GGUF**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | 作者: deepreinforce-ai | 👍 414 | ⬇️ 287,942
    *   Ornith 系列的 9B 参数 GGUF 版本，平衡了性能与资源消耗，适合中等配置硬件运行。
*   **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF**
    *   [链接](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF) | 作者: huihui-ai | 👍 144 | ⬇️ 3,683
    *   GLM-5.2 的 Abliterated（去限制化）版本，通过移除安全对齐层来提升模型的自由度和创造力，满足特定实验需求。

## 3. 生态信号

当前 HF 生态呈现出**“量化平民化”**与**“垂直微调爆发”**的双重特征。Qwen3.5/3.6 和 Gemma 4 两大模型家族在量化（GGUF）和微调领域占据绝对主流，Unsloth 和 empero-ai 等社区贡献者通过优化推理速度（如 MTP、NVFP4）极大地降低了大模型本地部署门槛。同时，“Uncensored”和“Abliterated”类模型的高下载量揭示了用户对完全控制模型行为的强烈意愿，尽管这带来了合规风险。此外，NVIDIA 和 Google 等大厂积极提供硬件特定的优化格式（如 NVFP4, Tabular FM），标志着开源模型正在从单纯的算法竞争转向**软硬协同的效率竞争**。

## 4. 值得探索

1.  **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   **理由：** 结合了 Unsloth 的高效训练/推理技术与 Qwen3.6 的强大基座，MTP 优化使其在本地设备上能实现接近云端 API 的速度，是日常开发和本地部署的首选。
2.  **baidu/Unlimited-OCR**
    *   **理由：** 解决了传统 OCR 模型在处理长图、高分辨率文档时的局限性，对于需要处理复杂版面分析或高精度文字提取的应用场景具有极高的实用价值。
3.  **google/tabfm-1.0.0-pytorch**
    *   **理由：** 作为 Google 发布的表格数据专用模型，它代表了结构化数据 AI 化的新方向。对于金融、电商等领域的表格数据分析，提供了一个比传统机器学习更先进的开源基准。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*