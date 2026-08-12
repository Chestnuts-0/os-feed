# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 01:50 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-23
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
今日 HF 榜单呈现“巨头回归”与“极致量化”并行的趋势。Google 发布的 `gemma-4-31B-it` 以超千万下载量霸榜，标志着 Gemma 系列在多模态指令微调领域的持续统治力；同时，百度 `Unlimited-OCR` 凭借极高的实用性和下载量稳居前列。值得注意的是，社区对 1-bit/2-bit 等超低比特量化模型（如 Bonsai、Ternary-Bonsai）的热情高涨，显示本地部署对效率的追求达到新高度。此外，Kimi 和 GLM 系列依然保持强劲势头，而机器人视觉语言动作（VLA）模型开始进入大众视野。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **google/gemma-4-31B-it**
    *   链接: https://huggingface.co/google/gemma-4-31B-it
    *   作者: google | 点赞: 3,328 | 下载: 12,113,203
    *   说明：Google 最新的多模态指令微调大模型，凭借极低的延迟和高性价比，成为目前下载量最大的开源模型之一，适合通用对话与推理。
*   **zai-org/GLM-5.2**
    *   链接: https://huggingface.co/zai-org/GLM-5.2
    *   作者: zai-org | 点赞: 4,337 | 下载: 545,109
    *   说明：智谱 AI 推出的 GLM 系列最新迭代，采用 MoE 架构，在中文理解与多轮对话表现上备受开发者青睐。
*   **moonshotai/Kimi-K2.7-Code**
    *   链接: https://huggingface.co/moonshotai/Kimi-K2.7-Code
    *   作者: moonshotai | 点赞: 1,224 | 下载: 722,058
    *   说明：月之暗面发布的代码专用模型，针对长上下文和复杂逻辑推理进行了优化，是开发者进行代码生成与审查的重要工具。
*   **baidu/Unlimited-OCR**
    *   链接: https://huggingface.co/baidu/Unlimited-OCR
    *   作者: baidu | 点赞: 2,714 | 下载: 2,237,351
    *   说明：百度开源的通用 OCR 模型，支持无限分辨率输入，在实际生产环境中部署广泛，是文本提取任务的首选基座。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
    *   作者: empero-ai | 点赞: 2,417 | 下载: 2,133,420
    *   说明：基于 Qwen3.5 构建的 1M 上下文窗口模型，经过特定风格微调，适合长文档分析与复杂推理任务，GGUF 格式便于本地运行。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **thinkingmachines/Inkling**
    *   链接: https://huggingface.co/thinkingmachines/Inkling
    *   作者: thinkingmachines | 点赞: 1,452 | 下载: 16,441
    *   说明：新兴的多模态模型，专注于图像-文本到文本的转换，在视觉问答和内容理解任务中展现出独特的架构优势。
*   **Nvidia/Cosmos3-Edge**
    *   链接: https://huggingface.co/nvidia/Cosmos3-Edge
    *   作者: nvidia | 点赞: 90 | 下载: 6,623
    *   说明：英伟达 Cosmos 系列的边缘端版本，专为视频生成与处理优化，旨在降低部署成本并提升实时性。
*   **Alissonerdx/LTX-Best-Face-ID**
    *   链接: https://huggingface.co/Alissonerdx/LTX-Best-Face-ID
    *   作者: Alissonerdx | 点赞: 235 | 下载: 0
    *   说明：基于 LTX-Video 的身份保持 LoRA，解决了视频生成中角色一致性难题，对于影视制作和个性化内容创作极具价值。
*   **microsoft/Mage-Flow**
    *   链接: https://huggingface.co/microsoft/Mage-Flow
    *   作者: microsoft | 点赞: 124 | 下载: 0
    *   说明：微软推出的图像生成与工作流模型，支持文本到图像及图像编辑，强调生成过程的可控性与流畅度。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **openbmb/MiniCPM-RobotManip**
    *   链接: https://huggingface.co/openbmb/MiniCPM-RobotManip
    *   作者: openbmb | 点赞: 154 | 下载: 58
    *   说明：MiniCPM 系列的机器人操作模型，结合视觉-语言-动作（VLA），用于指导机械臂完成精细抓取任务。
*   **openbmb/MiniCPM-RobotTrack**
    *   链接: https://huggingface.co/openbmb/MiniCPM-RobotTrack
    *   作者: openbmb | 点赞: 114 | 下载: 72
    *   说明：配套的机器人追踪模型，专注于动态环境下的目标跟踪与路径规划，与 Manip 模型形成互补。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   链接: https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b
    *   作者: nvidia | 点赞: 914 | 下载: 590,230
    *   说明：英伟达 Nemotron 系列的流式自动语音识别模型，轻量级且低延迟，适合实时语音转写场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **prism-ml/Bonsai-27B-gguf**
    *   链接: https://huggingface.co/prism-ml/Bonsai-27B-gguf
    *   作者: prism-ml | 点赞: 596 | 下载: 1,404,962
    *   说明：采用 1-bit 量化技术的 27B 参数模型，极大降低了显存占用，使得在消费级硬件上运行大型模型成为可能。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
    *   作者: HauhauCS | 点赞: 3,002 | 下载: 1,997,690
    *   说明：针对 Qwen3.6 的去限制版微调，采用 MOE 架构，因移除安全护栏而在特定社区获得极高关注度。
*   **prism-ml/Ternary-Bonsai-27B-gguf**
    *   链接: https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf
    *   作者: prism-ml | 点赞: 945 | 下载: 432,196
    *   说明：进一步探索三元组量化的 Bonsai 变体，平衡了精度与速度，适合对资源极度敏感的边缘设备。
*   **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**
    *   链接: https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
    *   作者: DavidAU | 点赞: 322 | 下载: 62,842
    *   说明：复杂的社区混合微调模型，整合了多种训练策略（MTP、Heretic等），旨在突破原生模型的能力边界。

## 3. 生态信号
当前生态呈现出**“轻量化”与“专业化”**的双重特征。**Gemma** 家族凭借 Google 的强力支持和持续的迭代，已确立其在开源多模态模型中的核心地位；**Qwen** 系列则通过社区海量的 GGUF 量化微调版本，保持了极高的活跃度，尤其是去限制版本（Uncensored）下载量惊人，反映出用户对无约束推理的需求。**Bonsai** 等新型量化架构（1-bit/2-bit）的出现，表明行业正从单纯的模型规模竞争转向推理效率与硬件适配的竞争。此外，**机器人 VLA 模型**虽下载量尚小，但标志着多模态能力向物理世界交互的延伸，是值得关注的新兴方向。

## 4. 值得探索

1.  **google/gemma-4-31B-it**
    *   **理由**：作为当前下载量最大的模型，它代表了开源多模态 SOTA 的水平。其 31B 参数量在性能与资源消耗之间取得了极佳平衡，适合大多数企业级应用和个人开发者进行二次开发或部署。
2.  **prism-ml/Bonsai-27B-gguf (1-bit)**
    *   **理由**：1-bit 量化技术是当前的前沿热点。该模型展示了如何在极低比特下保持 27B 大模型的可用性，对于希望在单张消费级显卡上运行强大 LLM 的用户来说，具有极高的研究和实践价值。
3.  **openbmb/MiniCPM-RobotManip**
    *   **理由**：随着具身智能（Embodied AI）的发展，视觉-语言-动作模型是连接数字智能与物理世界的关键。MiniCPM 在这一垂直领域的探索，为机器人控制提供了高质量的开源基座，适合机器人研究者跟进。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*