# Hugging Face 热门模型日报 2026-07-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-02 02:12 UTC

---

# Hugging Face 热门模型日报
**日期**：2026-07-02
**分析师**：Agnes-2.0-Flash

## 1. 今日速览
2026年7月2日，HF 热门榜单呈现出“大模型轻量化”与“垂直领域专业化”并行的显著趋势。**GLM-5.2** 及其衍生量化版本占据核心位置，显示国产开源大模型生态的持续爆发力；同时，**Qwen3.5/3.6** 系列通过社区微调（如 `Qwythos`、`Uncensored` 变体）保持了极高的活跃度。此外，**Krea-2** 及其 LoRA 生态在图像生成领域表现强劲，而 **Unlimited-OCR** 的高下载量则印证了多模态基础能力的需求依然旺盛。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **zai-org/GLM-5.2**
    *   链接: https://huggingface.co/zai-org/GLM-5.2
    *   作者: zai-org | 点赞: 3,172 | 下载: 159,967
    *   说明：最新一代 GLM MoE 架构原生模型，凭借出色的对话与推理能力成为本周点赞之王，代表了当前开源 LLM 的第一梯队性能。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark
    *   作者: deepseek-ai | 点赞: 277 | 下载: 7,629
    *   说明：DeepSeek V4 系列的旗舰变体，结合 DSpark 技术优化推理效率，是追求极致性能与成本控制平衡的用户首选。
*   **deepseek-ai/DeepSeek-V4-Flash-DSpark**
    *   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark
    *   作者: deepseek-ai | 点赞: 124 | 下载: 13,038
    *   说明：面向快速迭代的 Flash 版本，适合对延迟敏感的应用场景，延续了 DeepSeek 在效率优化上的优势。
*   **Qwen/Qwen-AgentWorld-35B-A3B**
    *   链接: https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B
    *   作者: Qwen | 点赞: 497 | 下载: 34,371
    *   说明：Qwen 官方推出的 Agent 专用模型，采用稀疏激活架构，专为复杂的自主智能体任务设计，具备强大的工具调用与环境交互能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **baidu/Unlimited-OCR**
    *   链接: https://huggingface.co/baidu/Unlimited-OCR
    *   作者: baidu | 点赞: 1,580 | 下载: 630,246
    *   说明：百度发布的超强 OCR 模型，以极高的下载量证明其在文档理解与视觉文本提取领域的统治力，是多模态应用的基础设施级模型。
*   **krea/Krea-2-Turbo**
    *   链接: https://huggingface.co/krea/Krea-2-Turbo
    *   作者: krea | 点赞: 438 | 下载: 56,953
    *   说明：Krea 系列的加速版图像生成模型，在保证质量的同时显著提升推理速度，深受创意工作者喜爱。
*   **Comfy-Org/Krea-2**
    *   链接: https://huggingface.co/Comfy-Org/Krea-2
    *   作者: Comfy-Org | 点赞: 223 | 下载: 10
    *   说明：专为 ComfyUI 工作流优化的 Krea-2 基础模型配置，方便开发者进行节点式图像生成实验。
*   **fal/LTX-2.3-3DREAL-LoRA**
    *   链接: https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA
    *   作者: fal | 点赞: 136 | 下载: 0
    *   说明：针对 LTX-Video 模型的 3D 真实感微调 LoRA，用于提升视频生成中的三维空间一致性与物理真实性。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF
    *   作者: yuxinlu1 | 点赞: 2,553 | 下载: 597,090
    *   说明：基于 Gemma 4 的代码专用微调模型，经过 Fable5 Composer 深度优化，在编程推理与代码生成任务中表现卓越，是本地部署代码助手的热门选择。
*   **nvidia/LocateAnything-3B**
    *   链接: https://huggingface.co/nvidia/LocateAnything-3B
    *   作者: nvidia | 点赞: 2,547 | 下载: 896,058
    *   说明：英伟达推出的细粒度图像定位模型，能够精确识别并框出图像中的特定对象，广泛应用于视觉检索与增强现实场景。
*   **BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6**
    *   链接: https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6
    *   作者: BugTraceAI | 点赞: 109 | 下载: 3,377
    *   说明：专注于网络安全与漏洞分析的专用模型，具备强大的攻击面评估与防御建议生成能力，是安全研究人员的利器。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
    *   作者: empero-ai | 点赞: 1,162 | 下载: 1,113,871
    *   说明：基于 Qwen3.5 的 GGUF 量化版本，融合了 Claude 风格的推理链优化，支持 1M 上下文窗口，实现了高性能与长上下文的完美平衡。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
    *   作者: HauhauCS | 点赞: 2,378 | 下载: 3,055,962
    *   说明：去除了安全限制的 Qwen3.6 社区微调版，以其极高的下载量表明用户对无约束内容生成或特定角色扮演场景的巨大需求。
*   **unsloth/GLM-5.2-GGUF**
    *   链接: https://huggingface.co/unsloth/GLM-5.2-GGUF
    *   作者: unsloth | 点赞: 490 | 下载: 212,201
    *   说明：由 Unsloth 团队提供的高效 GGUF 量化版本，利用其加速技术实现低资源消耗下的高性能推理，极大降低了 GLM-5.2 的使用门槛。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   链接: https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF
    *   作者: deepreinforce-ai | 点赞: 612 | 下载: 233,701
    *   说明：Ornith 系列的 35B 参数 GGUF 量化模型，针对强化学习微调进行了优化，在复杂决策任务中表现出色。
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
    *   作者: yuxinlu1 | 点赞: 920 | 下载: 288,741
    *   说明：Gemma 4 的智能体专用量化模型，引入了 tau2 温度调整与 3.5x 加速因子，提升了 Agent 在终端操作中的响应速度与稳定性。

## 3. 生态信号
本周生态显示出**“基座统一，微调百花齐放”**的特征。**GLM-5.2** 和 **Qwen3.5/3.6** 成为社区微调的两大核心基座，尤其是 Qwen 系列，衍生出了从 Agent 专用、代码优化到去限制（Uncensored）等多种垂直变体，显示了其极强的可塑性和社区影响力。**GGUF 格式**依然是本地部署的首选，Unsloth 等工具链的普及使得大模型量化推理更加高效。值得注意的是，**NVIDIA** 和 **Baidu** 等大厂在专用模型（OCR、定位）上的开源力度加大，填补了多模态基础设施的空白。闭源与开源的界限在某些垂直领域（如安全、创意生成）变得模糊，社区通过微调不断拓展开源模型的边界。

## 4. 值得探索
1.  **zai-org/GLM-5.2**
    *   **理由**：作为本周点赞最高的原生开源模型，它代表了当前中文语境下最强的 MoE 架构能力，适合希望部署高性能通用对话助手的研究者和开发者。
2.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   **理由**：在资源受限环境下，这是一个极佳的代码辅助解决方案。高下载量验证了其有效性，且 GGUF 格式便于集成到各种本地 IDE 插件中。
3.  **nvidia/LocateAnything-3B**
    *   **理由**：英伟达推出的这一模型解决了视觉应用中“指代明确”的痛点，对于需要高精度对象检测的多模态应用（如机器人视觉、AR）具有极高的实用价值。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*