# Hugging Face 热门模型日报 2026-07-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-09 01:56 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-09  
**分析师：** AI 模型生态分析师

## 1. 今日速览

2026年7月9日的 HF 榜单呈现出“多模态视觉模型”与“高效量化 LLM”双轮驱动的态势。Qwen3.5/3.6 系列及其衍生版本（如 Ornith、Leanstral）占据主导地位，尤其是经过 GGUF 量化后的模型下载量极高，显示出社区对本地化部署高性能多模态模型的强烈需求。同时，NVIDIA 的 LocateAnything 和 Baidu 的 Unlimited-OCR 等专用视觉/OCR 工具热度飙升，表明工业界对高精度视觉理解能力的关注正在超越纯文本生成。此外，Uncensored 和非官方微调版本（如 Qwythos、Fable 系列）的高点赞数反映了开发者对定制化、特定领域能力（如代码、推理）的极致追求。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者:** empero-ai | **点赞:** 1,857 | **下载:** 1,683,711
    *   **说明:** 基于 Qwen3.5 的 9B 参数 GGUF 量化模型，主打长上下文（1M tokens）与推理增强，极高的下载量证明了对高效长窗口本地部署的迫切需求。

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者:** zai-org | **点赞:** 3,667 | **下载:** 281,584
    *   **说明:** 智谱 AI 发布的 GLM 系列最新迭代，采用 MoE 架构，凭借高点赞数显示其在开源对话模型中仍具极强竞争力。

*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   **作者:** deepreinforce-ai | **点赞:** 800 | **下载:** 502,663
    *   **说明:** 35B 参数的 GGUF 量化版本，平衡了性能与硬件门槛，是中等规模本地部署的首选之一。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者:** HauhauCS | **点赞:** 2,573 | **下载:** 2,823,988
    *   **说明:** 针对 Qwen3.6 进行的无审查激进微调，下载量突破 280 万，显示出用户对打破安全限制以获取更自由输出或特定角色扮演体验的巨大兴趣。

*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **作者:** unsloth | **点赞:** 1,011 | **下载:** 2,842,118
    *   **说明:** Unsloth 优化的 Qwen3.6 27B 多令牌预测（MTP）版本，结合量化技术，极大提升了推理速度，是追求极致效率用户的热门选择。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者:** baidu | **点赞:** 1,873 | **下载:** 1,084,945
    *   **说明:** 百度推出的无限分辨率 OCR 模型，解决了传统模型在处理长文本或高分辨率图片时的局限性，是文档数字化领域的重磅工具。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者:** nvidia | **点赞:** 2,667 | **下载:** 1,424,958
    *   **说明:** NVIDIA 发布的通用物体定位模型，仅需 3B 参数量即可实现高精度的图像内对象定位，轻量化且强大，深受开发者喜爱。

*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **作者:** krea | **点赞:** 555 | **下载:** 123,729
    *   **说明:** Krea 系列的图像生成基础模型，专注于高质量文生图，保持了 Krea 在创意生成领域的领先地位。

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
    *   **作者:** empero-ai | **点赞:** 736 | **下载:** 152,516
    *   **说明:** 上述 GGUF 版本的原始格式，供需要自定义量化或进一步微调的用户使用。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **作者:** google | **点赞:** 313 | **下载:** 9,458
    *   **说明:** Google 发布的表格数据基础模型（Tabular Foundation Model），专为结构化数据分类和回归设计，填补了大模型在垂直表格处理上的空白。

*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **作者:** yuxinlu1 | **点赞:** 1,098 | **下载:** 384,383
    *   **说明:** 基于 Gemma 4 的 Agentic 专用模型，经过 Fable5 和 Composer2.5 等多层指令微调，特别优化了终端操作和代码代理任务。

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者:** yuxinlu1 | **点赞:** 2,652 | **下载:** 674,977
    *   **说明:** 同样是 Gemma 4 的变体，但侧重于代码生成与推理，高点赞和高下载量表明其在开发者社区中极受欢迎。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
    *   **作者:** nvidia | **点赞:** 325 | **下载:** 538,687
    *   **说明:** NVIDIA 官方提供的 Qwen3.6 27B NVFP4 量化版本，利用 TensorRT-LLM 等优化技术，旨在 NVIDIA GPU 上实现极低延迟的高性能推理。

*   **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**
    *   **作者:** deepreinforce-ai | **点赞:** 461 | **下载:** 454,944
    *   **说明:** Ornith 系列的 9B 轻量级量化版，适合消费级显卡运行，兼顾了多模态能力和硬件友好性。

*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   **作者:** froggeric | **点赞:** 781 | **下载:** 0
    *   **说明:** 提供修复后的 Qwen 聊天模板，虽然下载为 0，但高点赞表明它是解决常见推理兼容性问题的关键资源库。

## 3. 生态信号

当前生态呈现三大趋势：首先，**Qwen 家族持续霸榜**，从 Qwen3.5 到 Qwen3.6，配合 Unsloth 和各类社区量化（GGUF/NVFP4），形成了完整的本地部署生态链，证明了其在开源模型中的核心地位。其次，**多模态能力下沉**，像 LocateAnything 和 Unlimited-OCR 这样的专用视觉模型下载量激增，说明行业重心正从“通用聊天”转向“解决具体视觉痛点”。最后，**“激进”微调仍有市场**，Uncensored 或特定 Agent 微调版本的高热度，反映出开发者在合规性与功能性之间的博弈，以及对高度定制化工具的依赖。

## 4. 值得探索

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：仅 3B 参数即可实现强大的通用物体定位，性价比极高，适合集成到需要高精度图像分析的轻量级应用中。
2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：解决了长文档和高清晰度图片 OCR 的难题，对于文档数字化、发票识别等工业场景具有直接的应用价值。
3.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**：结合了 MTP（多令牌预测）加速技术和 Unsloth 的优化，是本地部署 27B 级别高性能模型的最佳实践参考，值得研究其推理加速效果。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*