# Hugging Face 热门模型日报 2026-09-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-05 16:44 UTC

---

# Hugging Face 热门模型日报 (2026-09-06)

## 1. 今日速览
本周 Hugging Face 榜单呈现明显的“多模态融合”与“本地化部署”双主线趋势。**Qwen3.8 系列**以绝对统治力占据多个席位，尤其是其原生多模态（image-text-to-text）能力推动下载量破百万。视频生成领域迎来 **MiniMax-H3** 和 **Lightricks/LTX-2.5** 的强势回归，显示出开源视频模型在画质与推理速度上的新突破。值得注意的是，社区对 **GGUF 量化**和 **去审查（Uncensored）** 版本的需求激增，表明本地私有化部署已成为主流用户的核心诉求。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **Qwen/Qwen3.8-27B**
    *   链接: [https://huggingface.co/Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
    *   作者: Qwen | 点赞: 14,009 | 下载: 6,024,467
    *   说明：本周最热门的基础大模型，虽然标签含多模态，但其强大的通用对话与推理能力使其成为社区首选的本地化基座。
*   **zai-org/GLM-5.3**
    *   链接: [https://huggingface.co/zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)
    *   作者: zai-org | 点赞: 1,713 | 下载: 370,417
    *   说明：智谱新一代 MoE 架构大模型，以高能效比和优秀的长上下文处理能力在开发者中快速普及。
*   **tencent/Hy4-preview**
    *   链接: [https://huggingface.co/tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)
    *   作者: tencent | 点赞: 439 | 下载: 6,195
    *   说明：腾讯混元系列预览版，虽为 Preview 状态，但凭借大厂背书和早期测试表现，已成为社区热议焦点。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **MiniMaxAI/MiniMax-H3**
    *   链接: [https://huggingface.co/MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
    *   作者: MiniMaxAI | 点赞: 4,927 | 下载: 5,057,414
    *   说明：开源视频生成模型的新标杆，以极高的下载量证明了其在文生视频（T2V）领域对闭源模型的经济性替代能力。
*   **Lightricks/LTX-2.5**
    *   链接: [https://huggingface.co/Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)
    *   作者: Lightricks | 点赞: 2,852 | 下载: 1,484,329
    *   说明：专注于实时视频生成的扩散模型，支持图生视频与视频到视频，因其低延迟特性在创作者社区极受欢迎。
*   **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**
    *   链接: [https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
    *   作者: deepseek-ai | 点赞: 654 | 下载: 184,542
    *   说明：DeepSeek 最新的视觉实验版模型，以轻量级（Flash）形式快速迭代，展示了其在多模态推理上的最新进展。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **sentence-transformers/all-MiniLM-L6-v2**
    *   链接: [https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
    *   作者: sentence-transformers | 点赞: 5,530 | 下载: 255,006,933
    *   说明：尽管是旧模型，但其恐怖的下载量（2.5亿+）持续刷新纪录，证明其作为 RAG 和搜索场景嵌入模型的基础设施地位不可动摇。
*   **google/timesfm-3.0-pytorch**
    *   链接: [https://huggingface.co/google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)
    *   作者: google | 点赞: 445 | 下载: 123,025
    *   说明：谷歌发布的 PyTorch 版本时间序列预测模型，填补了 HF 上高质量时序基础模型的空白，受到数据科学社区关注。
*   **IFM/K2-Horizon-MoVA-36B-A4B**
    *   链接: [https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)
    *   作者: IFM | 点赞: 166 | 下载: 1,333
    *   说明：一款新兴的 MoVA（记忆向量架构）模型，虽然热度较低，但其架构创新可能对未来高效 LLM 设计提供参考。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **unsloth/Qwen3.8-27B-GGUF**
    *   链接: [https://huggingface.co/unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
    *   作者: unsloth | 点赞: 3,532 | 下载: 10,157,510
    *   说明：本周下载量冠军（千万级），Unsloth 的高精度量化版本让 27B 规模的 Qwen3.8 能在消费级显卡上流畅运行，是本地部署的首选。
*   **unsloth/Qwen3.8-Flash-Next-GGUF**
    *   链接: [https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)
    *   作者: unsloth | 点赞: 794 | 下载: 780,823
    *   说明：针对 Qwen3.8-Flash-Next 的多模态量化版，进一步降低了运行最新多模态模型的硬件门槛。
*   **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**
    *   链接: [https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)
    *   作者: JonathanColeti | 点赞: 982 | 下载: 2,453,361
    *   说明：高下载量的去审查（Uncensored）版本，反映了大量用户对自由对话及创意写作场景的需求，需自行评估内容安全合规性。

## 3. 生态信号

**模型家族势头**：Qwen3.8 家族呈现“霸榜”态势，不仅基座模型热度高涨，其衍生出的 Flash、GIF、Uncensored 版本也全面进入前列，显示出极强的社区衍生活力。视频生成领域，MiniMax-H3 和 LTX-2.5 的崛起标志着开源视频模型已从“玩具”阶段进入“实用”阶段。

**开源 vs 闭源**：在 2026 年，开源权重模型在下载量上持续碾压闭源 API 依赖型应用。本地化部署（On-Device/Local）不再是极客专属，而是企业和个人用户保护数据隐私、降低长期成本的主流选择。

**量化与微调**：Unsloth 等量化工具成为生态关键基础设施，GGUF 格式已完全取代原始 Safetensors 成为本地部署的标准。**“去审查”（Uncensored/Abliterated）** 模型的爆发式增长是一个显著信号，表明社区对模型安全性约束的边界探索日益深入。

## 4. 值得探索

1.  **MiniMaxAI/MiniMax-H3**
    *   **理由**：如果你从事内容创作或视频应用开发，这是当前开源领域性价比最高的视频生成方案。其 500 万+的下载量证明了其稳定性，且比 Sora 等闭源方案更具可控性和可集成性。
2.  **unsloth/Qwen3.8-27B-GGUF**
    *   **理由**：对于希望在本地硬件（如 RTX 4090 或 Mac Studio）上运行高性能多模态模型的开发者，这是必选项。Unsloth 的量化技术极大提升了推理速度，使 27B 参数的日常使用成为可能。
3.  **google/timesfm-3.0-pytorch**
    *   **理由**：传统 NLP 之外，时序预测是企业级 AI 的新增长点。这是一个罕见的高质量、由大厂维护且在 HF 上完全开放的时序基础模型，适合金融、IoT 或运维监控场景的研究者尝试。

---
*本日报由 [GitTok](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*