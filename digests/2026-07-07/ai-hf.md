# Hugging Face 热门模型日报 2026-07-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-07 02:04 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-07
**分析师：** AI 模型生态分析师

## 1. 今日速览

2026年7月7日，Hugging Face Hub 呈现出“小参数大能力”与“极致量化”并行的显著趋势。**Qwen3.5/3.6** 系列及其衍生模型占据榜单半壁江山，尤其是经过社区深度微调（如 Abliterated、Uncensored）和高效推理格式（GGUF）的版本下载量惊人，显示出用户对本地化高性能模型的强烈需求。**GLM-5.2** 作为新一代开源基座模型热度攀升，标志着国产开源模型生态的持续强势。此外，**NVIDIA** 和 **DeepSeek** 等机构发布的优化版及新架构模型（如 NVFP4、V4-Pro）进一步推动了推理效率与智能体（Agent）能力的边界。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   链接: https://huggingface.co/zai-org/GLM-5.2
    *   作者: zai-org | 点赞: 3,532 | 下载: 231,218
    *   说明: 智谱最新一代 MoE 架构通用语言模型，凭借卓越的对话能力和原生长上下文支持，成为本周开源 LLM 中关注度最高的基座模型之一。

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
    *   作者: empero-ai | 点赞: 1,642 | 下载: 1,617,508
    *   说明: 基于 Qwen3.5 的 9B 模型，经过特殊对齐训练以模拟 Claude 风格，并支持 1M 上下文窗口，极高的下载量证明了对轻量级、高智商本地模型的巨大需求。

*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   链接: https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF
    *   作者: deepreinforce-ai | 点赞: 759 | 下载: 436,780
    *   说明: Ornith 系列的 35B 版本 GGUF 量化模型，平衡了性能与资源消耗，适合中等算力设备运行复杂推理任务。

*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark
    *   作者: deepseek-ai | 点赞: 409 | 下载: 14,276
    *   说明: DeepSeek V4 Pro 的分布式推理优化版本，针对大规模并发场景进行了架构调整，代表了下一代开源模型在工程落地上的新尝试。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   链接: https://huggingface.co/baidu/Unlimited-OCR
    *   作者: baidu | 点赞: 1,793 | 下载: 1,070,230
    *   说明: 百度推出的无限分辨率 OCR 模型，能够处理任意尺寸的高清图像文字提取，解决了传统 OCR 在长图或高分辨率文档上的局限，工业应用价值极高。

*   **nvidia/LocateAnything-3B**
    *   链接: https://huggingface.co/nvidia/LocateAnything-3B
    *   作者: nvidia | 点赞: 2,635 | 下载: 1,340,559
    *   说明: NVIDIA 发布的通用物体定位模型，支持零样本检测，在多模态理解任务中表现优异，是视觉定位领域的强力竞争者。

*   **krea/Krea-2-Turbo**
    *   链接: https://huggingface.co/krea/Krea-2-Turbo
    *   作者: krea | 点赞: 529 | 下载: 109,470
    *   说明: Krea 的第二代快速文生图模型，在保持高质量生成的同时大幅提升了推理速度，适合实时创意工作流。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
    *   作者: yuxinlu1 | 点赞: 1,051 | 下载: 370,884
    *   说明: 针对 Agentic（智能体）场景优化的 Gemma 4 变体，强化了终端交互和代码执行能力，是构建本地 AI Agent 的优秀基座。

*   **google/tabfm-1.0.0-pytorch**
    *   链接: https://huggingface.co/google/tabfm-1.0.0-pytorch
    *   作者: google | 点赞: 257 | 下载: 7,036
    *   说明: Google 发布的表格数据基础模型（TabFM），专为表格分类和回归任务设计，展示了结构化数据处理的最新进展。

*   **nationaldesignstudio/rampart**
    *   链接: https://huggingface.co/nationaldesignstudio/rampart
    *   作者: nationaldesignstudio | 点赞: 136 | 下载: 3,821
    *   说明: 一个专注于实体识别（NER）和隐私信息检测（PII）的小型分类模型，适用于合规性检查和本地数据处理。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
    *   作者: HauhauCS | 点赞: 2,529 | 下载: 2,910,241
    *   说明: 基于 Qwen3.6 的无限制（Uncensored）微调版本，去除了安全对齐约束，因其极高的自由度和较低的参数量（MoE 稀疏激活），成为社区下载量最高的模型之一。

*   **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   链接: https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF
    *   作者: unsloth | 点赞: 974 | 下载: 2,818,499
    *   说明: Unsloth 团队提供的 Qwen3.6 27B 模型的高效 GGUF 量化版本，结合 MTP（Multi-Token Prediction）技术优化推理速度，是本地部署高性能模型的首选之一。

*   **deepreinforce-ai/Ornith-1.0-9B-GGUF**
    *   链接: https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF
    *   作者: deepreinforce-ai | 点赞: 442 | 下载: 393,142
    *   说明: Ornith 系列的轻量级 9B 版本 GGUF 模型，适合在消费级显卡上流畅运行，兼顾速度与效果。

*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   链接: https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF
    *   作者: yuxinlu1 | 点赞: 2,623 | 下载: 664,319
    *   说明: 专门针对代码生成任务微调的 Gemma 4 12B 模型，经过强化训练后在编码基准测试中表现突出，深受开发者喜爱。

## 3. 生态信号

本周生态最显著的信号是 **Qwen 家族（特别是 Qwen3.5/3.6）** 的绝对统治力。从官方基座到社区微调（如 Uncensored, Agentic），再到高效量化（GGUF, MTP），Qwen 模型几乎包揽了高热度榜单的大部分席位。这表明开源社区正在围绕 Qwen 形成强大的工具链和生态闭环。**GLM-5.2** 的强势崛起也证明了多头竞争格局的形成，国产开源模型在质量上已与国际顶尖水平持平。此外，**量化与微调的精细化**成为趋势，用户不再仅仅追求基座模型，而是更倾向于选择经过特定场景优化（如代码、Agent、无限制输出）且格式高效（GGUF）的版本，以降低本地部署门槛。**NVIDIA** 等硬件厂商通过提供专门的优化工具（如 Model Optimizer, NVFP4）和模型，进一步加速了 AI 应用的落地效率。

## 4. 值得探索

1.  **baidu/Unlimited-OCR**: 对于需要处理文档、发票或高清图片中提取文字的应用场景，这款模型解决了分辨率瓶颈问题，极具实用价值。
2.  **unsloth/Qwen3.6-27B-MTP-GGUF**: 如果你需要在本地运行一个大参数量的 LLM，这个模型结合了 Unsloth 的量化优势和 MTP 推理加速技术，能在消费级硬件上提供接近服务器端的体验。
3.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored...**: 对于研究模型行为边界或需要无限制输出的创意写作/角色扮演应用，这个高下载量的社区微调版本提供了极佳的参考案例，尽管需注意使用伦理。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*