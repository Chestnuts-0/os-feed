# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-26 02:15 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-26
**分析师：** AI 模型生态分析师 (Agnes-2.0-Flash)

## 1. 今日速览

今日 HF 榜单呈现“多模态巨头回归”与“极致轻量化/量化普及”并行的态势。DeepSeek-V4-Pro 以超高热度领跑，标志着高质量开源通用模型仍具强大吸引力；与此同时，Gemma 4 系列及其社区微调版（如 abliterated 版本）在下载量上表现惊人，显示开发者对定制化、去约束模型的强烈需求。NVIDIA 和 Baidu 等大厂在 OCR、ASR 及定位模型上的更新，表明垂直领域的专用小模型正在成为基础设施标配。此外，GGUF 格式的广泛使用证实了端侧部署和高效推理仍是当前生态的核心驱动力。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **deepseek-ai/DeepSeek-V4-Pro**
    *   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
    *   作者: deepseek-ai | 点赞: 5,061 | 下载: 1,878,217
    *   说明：顶级通用对话模型，凭借卓越的推理能力和流畅的交互体验，继续占据用户首选地位。
*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2)
    *   作者: zai-org | 点赞: 2,479 | 下载: 67,107
    *   说明：智谱最新 MoE 架构大模型，平衡了性能与效率，是国产开源 LLM 的重要更新。
*   **google/gemma-4-12B-it**
    *   [链接](https://huggingface.co/google/gemma-4-12B-it)
    *   作者: google | 点赞: 1,178 | 下载: 2,187,644
    *   说明：Google Gemma 4 系列的官方指令微调版，极高的下载量证明其作为轻量级基座模型的广泛适用性。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)
    *   作者: empero-ai | 点赞: 394 | 下载: 10,160
    *   说明：基于 Qwen3.5 构建的超长上下文模型，支持 1M token 窗口，适合长文档分析场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B)
    *   作者: nvidia | 点赞: 2,365 | 下载: 407,838
    *   说明：NVIDIA 推出的零样本视觉定位模型，能精准识别图像中特定对象的位置，落地应用潜力巨大。
*   **krea/Krea-2-Turbo**
    *   [链接](https://huggingface.co/krea/Krea-2-Turbo)
    *   作者: krea | 点赞: 243 | 下载: 2,996
    *   说明：Krea 发布的新一代图像生成模型 Turbo 版本，旨在提供更快的推理速度和高质量的视觉输出。
*   **MiniMaxAI/MiniMax-M3**
    *   [链接](https://huggingface.co/MiniMaxAI/MiniMax-M3)
    *   作者: MiniMaxAI | 点赞: 1,241 | 下载: 154,350
    *   说明：MiniMax 的多模态旗舰模型，支持图文理解与生成，在中文语境下表现优异。
*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR)
    *   作者: baidu | 点赞: 898 | 下载: 70,743
    *   说明：百度开源的高精度 OCR 模型，支持无限分辨率输入，解决了传统 OCR 处理长图或高清文档的痛点。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **Qwen/Qwen-AgentWorld-35B-A3B**
    *   [链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)
    *   作者: Qwen | 点赞: 244 | 下载: 3,389
    *   说明：通义千问团队发布的智能体世界模型，专注于增强 AI Agent 的环境感知与决策能力。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
    *   作者: nvidia | 点赞: 695 | 下载: 50,553
    *   说明：NVIDIA Nemotron 系列的流式语音识别模型，仅 0.6B 参数却具备工业级实时转写能力。
*   **WeiboAI/VibeThinker-3B**
    *   [链接](https://huggingface.co/WeiboAI/VibeThinker-3B)
    *   作者: WeiboAI | 点赞: 715 | 下载: 51,717
    *   说明：微博发布的轻量级数学推理模型，在保持小体积的同时提升了复杂计算问题的解决准确率。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
    *   作者: yuxinlu1 | 点赞: 2,367 | 下载: 495,813
    *   说明：针对 Gemma 4 进行的代码专项微调 GGUF 量化版，极大降低了本地运行代码模型的硬件门槛。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   作者: HauhauCS | 点赞: 2,237 | 下载: 3,520,206
    *   说明：去除安全对齐限制的 Qwen 3.6 社区版本，因其“无审查”特性引发海量下载，反映部分用户对完全自由生成内容的追求。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
    *   作者: empero-ai | 点赞: 489 | 下载: 134,294
    *   说明：前述长上下文模型的 GGUF 量化版本，适配 llama.cpp 生态，便于在消费级 GPU 上运行。
*   **huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated**
    *   [链接](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)
    *   作者: huihui-ai | 点赞: 127 | 下载: 4,874
    *   说明：通过 Abliteration 技术移除 Gemma 4 代码版安全限制后的模型，保留了代码能力但移除了部分道德约束。

## 3. 生态信号

当前生态显示出明显的**分层化**与**工具化**特征。**Gemma 4** 和 **Qwen 3.5/3.6** 家族依然是社区微调最活跃的基座，尤其是代码和长上下文方向。**量化格式 GGUF** 已成为事实标准，几乎所有热门模型都提供了 GGUF 版本，这表明“本地化部署”和“边缘计算”是开发者的首要考量。值得注意的是，“Uncensored”（无审查）或“Abliterated”（去对齐）类模型下载量极高，反映出社区对于模型可控性和自由度的极端关注，同时也带来了合规风险。大厂方面，NVIDIA 和 Baidu 通过提供高精度的专用小模型（OCR, ASR, Locate），强化了其在垂直领域的基础设施地位。

## 4. 值得探索

1.  **nvidia/LocateAnything-3B**
    *   **理由**：在计算机视觉领域，零样本定位是一个难点。该模型由 NVIDIA 出品，参数量适中（3B），且标签显示其具备强大的 image-feature-extraction 能力，对于需要精确物体定位的应用（如机器人导航、内容审核）极具研究价值。
2.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   **理由**：代码生成是 LLM 最成熟的应用场景之一。该模型不仅基于最新的 Gemma 4，还经过了专门的 Coder 微调，并以 GGUF 格式提供，意味着开发者可以在个人电脑上高效运行一个接近商业级的代码助手，性价比极高。
3.  **baidu/Unlimited-OCR**
    *   **理由**：传统 OCR 模型受限于输入分辨率，处理扫描件或长图效果不佳。百度开源的 Unlimited-OCR 解决了这一痛点，对于需要处理文档数字化、发票识别等业务场景的团队来说，这是一个开箱即用的高质量解决方案。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*