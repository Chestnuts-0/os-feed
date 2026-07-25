# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 01:46 UTC

---

# Hugging Face 热门模型日报 (2026-07-25)

## 1. 今日速览
2026年7月25日，Hugging Face Hub 呈现出多模态大模型与高效量化技术并行的繁荣景象。Google 的 Gemma-4 系列以千万级下载量领跑，证明了其作为开源基座模型的巨大影响力；同时，百度 Unlimited-OCR 在文档智能领域持续保持高热度。社区层面，基于 Qwen3.6 和 GLM-5.2 的多种微调及量化版本（如 GGUF、NVFP4）涌现，反映出开发者对本地化部署和高性价比推理的强烈需求。此外，机器人操作（Robotics）和代码生成领域的专用模型也开始进入主流视野。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **google/gemma-4-31B-it**
    *   [链接](https://huggingface.co/google/gemma-4-31B-it) | 作者: google | 点赞: 3,360 | 下载: 12,629,921
    *   **说明**：Gemma-4 系列的指令微调版本，凭借极高的下载量和点赞数，稳居榜首，展现了 Google 开源模型在通用对话任务中的统治力。
*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 点赞: 4,415 | 下载: 667,403
    *   **说明**：智谱 AI 推出的 GLM-5.2 基础模型，点赞数全场最高，标志着中国头部模型在国际开源社区的强劲势头。
*   **Qwen/Qwen3.6-35B-A3B**
    *   [链接](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | 作者: Qwen | 点赞: 2,503 | 下载: 6,460,680
    *   **说明**：通义千问 Qwen3.6 的 MoE 架构版本，兼顾性能与效率，下载量突破六百万，是大规模部署的首选之一。
*   **upstage/Solar-Open2-250B**
    *   [链接](https://huggingface.co/upstage/Solar-Open2-250B) | 作者: upstage | 点赞: 541 | 下载: 1,106
    *   **说明**：Upstage 发布的超大参数模型，虽下载量尚低，但作为顶级闭源转开源或强竞争者，值得关注其长期表现。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 点赞: 3,012 | 下载: 2,500,391
    *   **说明**：百度推出的全能 OCR 模型，支持复杂场景下的图文识别，下载量极高，是文档数字化处理的标杆工具。
*   **moonshotai/Kimi-K2.7-Code**
    *   [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | 作者: moonshotai | 点赞: 1,263 | 下载: 756,668
    *   **说明**：月之暗面 Kimi 的多模态代码模型，结合视觉理解与代码生成能力，在开发者群体中广受欢迎。
*   **microsoft/Mage-Flow**
    *   [链接](https://huggingface.co/microsoft/Mage-Flow) | 作者: microsoft | 点赞: 234 | 下载: 891
    *   **说明**：微软发布的文本到图像生成模型，虽然目前数据规模较小，但代表了大厂在可控图像生成领域的最新探索。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 作者: nvidia | 点赞: 937 | 下载: 797,525
    *   **说明**：英伟达的流式语音识别模型，轻量且高效，适合实时语音交互场景，下载量接近八十万，实用性强。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **openbmb/MiniCPM-RobotManip**
    *   [链接](https://huggingface.co/openbmb/MiniCPM-RobotManip) | 作者: openbmb | 点赞: 172 | 下载: 559
    *   **说明**：面壁智能针对机器人操作优化的视觉-语言-动作模型，体现了多模态模型向具身智能延伸的趋势。
*   **openbmb/MiniCPM-RobotTrack**
    *   [链接](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | 作者: openbmb | 点赞: 123 | 下载: 349
    *   **说明**：配套 MiniCPM 系列的机器人轨迹跟踪模型，进一步丰富了具身智能的工具箱。
*   **fdtn-ai/antares-1b**
    *   [链接](https://huggingface.co/fdtn-ai/antares-1b) | 作者: fdtn-ai | 点赞: 149 | 下载: 4,266
    *   **说明**：专注于安全领域的轻量级模型，标签显示其涉及 GraniteMoEHybrid 架构，适合对安全性要求高的边缘部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **prism-ml/Bonsai-27B-gguf**
    *   [链接](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | 作者: prism-ml | 点赞: 632 | 下载: 2,028,115
    *   **说明**：经过 1-bit 量化的 Bonsai 模型，下载量超两百万，展示了极致压缩技术在保持可用性方面的巨大潜力。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 点赞: 2,455 | 下载: 1,906,539
    *   **说明**：基于 Qwen3.5 的 1M 上下文长窗口模型，经 GGUF 量化后仍保有近两百万下载，满足了长文档处理的需求。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 点赞: 3,069 | 下载: 2,057,103
    *   **说明**：去除了安全限制的 Qwen3.6 社区微调版，尽管存在争议，但其极高的下载量反映了部分用户对无约束生成的需求。
*   **prism-ml/Ternary-Bonsai-27B-gguf**
    *   [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | 作者: prism-ml | 点赞: 1,006 | 下载: 595,415
    *   **说明**：采用三元量化的 Bonsai 变体，在精度与速度之间提供了另一种平衡选择。

## 3. 生态信号
当前生态呈现出“基座强大，应用下沉”的特点。**Gemma** 和 **Qwen** 家族依然是开源社区的绝对主力，尤其是 Qwen3.6 的 MoE 架构衍生出大量社区微调版本，显示出极强的可塑性。**GLM** 系列在中国开发者中影响力巨大，点赞数领先。**量化技术**方面，GGUF 格式依然占据主导地位，且出现了 1-bit、2-bit 甚至 NVFP4 等极端压缩方案，表明硬件限制不再是部署大模型的瓶颈，算力效率成为核心指标。此外，**具身智能**（Robotics）和**长上下文**（1M+）成为新的增长极，模型正从纯文本交互向物理世界控制和超长信息处理拓展。

## 4. 值得探索

1.  **google/gemma-4-31B-it**
    *   **理由**：作为下载量破千万的现象级模型，Gemma-4 代表了当前开源通用语言模型的最高水平之一，适合用于构建高质量的通用对话系统或作为其他垂直领域的基座。
2.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   **理由**：该模型结合了长上下文（1M tokens）与高效的 GGUF 量化格式，对于需要处理海量文档或长程依赖的任务极具吸引力，且易于在消费级硬件上部署。
3.  **baidu/Unlimited-OCR**
    *   **理由**：在文档智能和 OCR 领域，百度这款模型的高下载量验证了其鲁棒性。对于任何涉及非结构化文档提取、数字化的应用场景，它都是一个值得优先测试的强大工具。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*