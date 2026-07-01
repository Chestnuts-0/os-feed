# Hugging Face 热门模型日报 2026-07-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-01 02:33 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-01
**分析师：** Agnes-2.0-Flash (Sapiens AI)

## 1. 今日速览

2026年7月1日的HF榜单呈现出“大模型轻量化”与“垂直领域专用化”并行的显著特征。**GLM-5.2** 及其衍生版本（如 NVIDIA 优化版、Unsloth 量化版）占据主导地位，显示出国产开源大模型在生态中的强劲生命力；同时，**Qwen3.5/3.6** 系列通过 MoE 架构（如 AgentWorld）在智能体场景中大放异彩。值得注意的是，**Krea-2** 系列彻底重塑了文生图领域的开源标准，而 **NVIDIA** 通过 NVFP4 量化技术大幅提升了推理效率，标志着硬件友好型开源部署成为新常态。此外，社区对“去对齐”（Uncensored/Abliterated）模型的需求依然旺盛，反映出用户对无限制推理能力的持续追求。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 👍 3,064 | ⬇️ 142,547
    *   **说明：** GLM 系列的最新一代原生支持 MoE 架构，凭借卓越的对话能力和高下载量，成为本周最受欢迎的纯文本生成模型之一。
*   **deepreinforce-ai/Ornith-1.0-397B**
    *   [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) | 作者: deepreinforce-ai | 👍 180 | ⬇️ 2,564
    *   **说明：** 基于 Qwen3.5-MoE 构建的超大参数模型，虽点赞不高但代表了社区对超大规模混合专家模型探索的前沿尝试。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | 作者: deepseek-ai | 👍 253 | ⬇️ 6,939
    *   **说明：** DeepSeek 官方发布的 V4 Pro 版本，结合 DSpark 技术优化，展示了其在复杂推理任务上的最新进展。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 👍 2,364 | ⬇️ 3,017,678
    *   **说明：** 基于 Qwen3.6-MoE 的去对齐版本，以极高的下载量证明社区对于移除安全护栏、获取自由推理能力的需求依然极其庞大。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 👍 1,498 | ⬇️ 429,056
    *   **说明：** 百度推出的高精度 OCR 模型，在图像文本提取任务中表现优异，是视觉理解领域的高人气选择。
*   **krea/Krea-2-Turbo** & **krea/Krea-2-Raw**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo) | 作者: krea | 👍 421 | ⬇️ 45,668
    *   [链接](https://huggingface.co/krea/Krea-2-Raw) | 作者: krea | 👍 258 | ⬇️ 32,008
    *   **说明：** Krea-2 系列开源了底层的文生图基础模型，Turbo 侧重速度，Raw 侧重质量，正在挑战 Midjourney 等闭源模型的统治地位。
*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 👍 2,524 | ⬇️ 800,597
    *   **说明：** NVIDIA 发布的多模态定位模型，能够精准识别图像中的物体位置，下载量巨大，体现了工业界对细粒度视觉理解工具的需求。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 👍 2,531 | ⬇️ 575,255
    *   **说明：** 经过深度代码微调的 Gemma-4-12B 模型，以极高的点赞和下载量位居代码模型榜首，适合本地部署进行辅助编程。
*   **Qwen/Qwen-AgentWorld-35B-A3B**
    *   [链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | 作者: Qwen | 👍 466 | ⬇️ 28,480
    *   **说明：** 阿里通义千问专为智能体（Agent）世界建模设计的 MoE 模型，强调长上下文下的逻辑规划和行动能力。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 👍 1,058 | ⬇️ 970,663
    *   **说明：** 将 Qwen3.5 量化为 GGUF 格式并融入 Claude 风格推理能力的模型，支持 1M 上下文窗口，是本地运行长文本推理的高效方案。
*   **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   [链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | 作者: nvidia | 👍 390 | ⬇️ 5,495,402
    *   **说明：** NVIDIA 提供的 Qwen3.6-MoE 的 NVFP4 极低精度量化版本，拥有惊人的下载量，表明开发者极度依赖 NVIDIA 硬件加速的高效推理方案。
*   **unsloth/GLM-5.2-GGUF**
    *   [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF) | 作者: unsloth | 👍 484 | ⬇️ 180,394
    *   **说明：** Unsloth 团队优化的 GLM-5.2 GGUF 版本，兼顾了速度与显存效率，是本地部署 GLM 系列的热门选择。

## 3. 生态信号

当前 HF 生态呈现出**“巨头主导架构，社区驱动部署”**的双层结构。**GLM** 和 **Qwen** 两大模型家族势头最猛，尤其是 Qwen 的 MoE 变体（如 35B-A3B）成为社区微调的主流基座。在部署层面，**NVIDIA** 深度介入开源生态，其提供的 **NVFP4** 等极致量化模型下载量远超原始权重，表明“开箱即用”的硬件优化模型已成为企业级应用的首选。同时，**Krea-2** 的开源标志着高质量文生图模型正从 API 服务向本地可控生成迁移。此外，去对齐（Uncensored）和长上下文（1M+）模型的高热度，反映了用户对个性化定制和超长文档处理能力的刚性需求。

## 4. 值得探索

1.  **nvidia/Qwen3.6-35B-A3B-NVFP4**
    *   **理由：** 近 550 万的下载量证明了其受欢迎程度。对于拥有 NVIDIA GPU 的用户，这是目前性价比最高的 Qwen-MoE 推理方案，极大降低了运行 35B 级别 MoE 模型的门槛。
2.  **krea/Krea-2-Turbo**
    *   **理由：** 作为新一代开源文生图基石，它提供了比传统 SDXL/Stable Diffusion 更高质量的生成能力，且支持本地部署，是替代闭源绘图 API 的有力竞争者。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   **理由：** 12B 参数量的代码模型在性能与资源消耗之间取得了极佳平衡，GGUF 格式使其能在消费级显卡上流畅运行，是日常编程助手的理想选择。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*