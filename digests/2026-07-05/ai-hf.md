# Hugging Face 热门模型日报 2026-07-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-05 02:03 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-05
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
2026年7月5日的HF榜单呈现出“小参数高效能”与“极致量化”并行的显著特征。以 Qwen3.5/3.6 和 GLM-5.2 为代表的新一代开源基座模型通过社区微调（如 abliterated、uncensored 版本）获得了极高的下载量，显示出开发者对定制化推理能力的强烈需求。同时，NVIDIA 等巨头发布的 FP4 等极低精度量化模型，标志着端侧部署和高效推理已进入新阶段。多模态领域，LocateAnything 和 Krea 系列继续占据视觉生成与理解的高地。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **zai-org/GLM-5.2**
    *   [链接](https://huggingface.co/zai-org/GLM-5.2) | 作者: zai-org | 👍 3,399 | ⬇️ 208,920
    *   **说明：** 智谱最新一代 MoE 架构大模型，凭借优秀的对话能力和低延迟推理成为本周点赞最高的原生开源 LLM。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark** & **deepseek-ai/DeepSeek-V4-Flash-DSpark**
    *   [链接1](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | [链接2](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)
    *   **说明：** DeepSeek V4 系列的两个变体，分别针对专业推理和高频交互场景优化，展示了 DeepSeek 在 2026 年仍保持强大的生态影响力。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 👍 2,454 | ⬇️ 2,993,053
    *   **说明：** 基于 Qwen3.6 的无限制（Uncensored）微调版本，下载量惊人，反映了社区对去除安全护栏以进行自由创作或红队测试的巨大需求。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | 作者: empero-ai | 👍 1,462 | ⬇️ 1,464,047
    *   **说明：** 将 Qwen3.5 架构与类似 Claude 的推理风格结合，并量化为 GGUF，实现了长上下文（1M）下的高效本地运行。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **baidu/Unlimited-OCR**
    *   [链接](https://huggingface.co/baidu/Unlimited-OCR) | 作者: baidu | 👍 1,714 | ⬇️ 988,379
    *   **说明：** 百度推出的无限分辨率 OCR 模型，解决了传统 OCR 模型在处理大幅面、高分辨率文档时的性能瓶颈，工业应用价值极高。
*   **nvidia/LocateAnything-3B**
    *   [链接](https://huggingface.co/nvidia/LocateAnything-3B) | 作者: nvidia | 👍 2,604 | ⬇️ 1,194,542
    *   **说明：** NVIDIA 发布的通用物体定位模型，支持零样本检测，因其高精度和轻量化在计算机视觉社区广受欢迎。
*   **krea/Krea-2-Turbo** & **Comfy-Org/Krea-2**
    *   [链接1](https://huggingface.co/krea/Krea-2-Turbo) | [链接2](https://huggingface.co/Comfy-Org/Krea-2)
    *   **说明：** Krea 系列的迭代更新，继续主导实时图像生成和 ComfyUI 工作流生态，强调速度与质量的平衡。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | 作者: yuxinlu1 | 👍 2,595 | ⬇️ 641,260
    *   **说明：** 基于 Gemma 4 的代码专用模型，经过 Fable 框架强化，专为编程辅助设计，是小型代码模型的标杆。
*   **nationaldesignstudio/rampart**
    *   [链接](https://huggingface.co/nationaldesignstudio/rampart) | 作者: nationaldesignstudio | 👍 123 | ⬇️ 1,881
    *   **说明：** 专注于 PII（个人身份信息）识别的 Token 分类模型，有助于数据隐私合规处理。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark** (注：虽为 LLM，但标签含 arxiv:2606.19348，通常涉及特定算法突破)
    *   **说明：** 其背后的技术报告暗示了新的稀疏注意力机制或混合专家路由算法的创新。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF**
    *   [链接](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF) | 作者: huihui-ai | 👍 162 | ⬇️ 4,701
    *   **说明：** 对 GLM-5.2 进行 Abliteration（消融对齐）处理的 GGUF 量化版本，旨在移除过度对齐带来的创造力抑制，同时保持高效推理。
*   **nvidia/Qwen3.6-27B-NVFP4** & **nvidia/GLM-5.2-NVFP4**
    *   [链接1](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | [链接2](https://huggingface.co/nvidia/GLM-5.2-NVFP4)
    *   **说明：** NVIDIA 官方提供的 NVFP4 格式量化模型，利用 Tensor Core 加速，代表了下一代低比特量化的标准实践。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF** & **Ornith-1.0-9B-GGUF**
    *   [链接1](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | [链接2](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)
    *   **说明：** Ornith 系列的多尺寸 GGUF 量化模型，覆盖从端侧到边缘服务器的不同算力需求，MIT 许可使其易于集成。

## 3. 生态信号

当前 HF 生态正经历 **“极致效率化”** 与 **“个性化解放”** 的双重驱动。
1.  **模型家族：** Qwen3.5/3.6 和 GLM-5.2 是本周绝对主角，尤其是 Qwen 系列，衍生出了大量针对代码、长上下文和无限制内容的微调版本，显示其作为基础底座的统治力。
2.  **开源 vs 闭源：** 虽然 NVIDIA、Google 等大厂发布官方优化版本（如 NVFP4），但社区驱动的量化（GGUF）和去对齐（Abliterated/Uncensored）模型下载量往往更高，表明开发者更倾向于拥有完全控制权的本地化部署方案。
3.  **量化趋势：** FP4 等极低精度量化开始进入主流视野（NVIDIA 官方发布），而 GGUF 仍是社区微调的首选格式，证明“小参数+高精度量化”是未来 1-2 年的核心竞争赛道。

## 4. 值得探索

1.  **baidu/Unlimited-OCR**
    *   **理由：** 对于需要处理扫描文档、图纸或高分辨率图片的应用场景，传统的 OCR 模型往往受限于输入尺寸。该模型突破分辨率限制，且由百度背书，工程落地价值极高，建议集成测试。
2.  **nvidia/Qwen3.6-27B-NVFP4**
    *   **理由：** 这是观察 NVIDIA 新型量化格式（NVFP4）实际效果的绝佳样本。相比传统的 INT4/GGUF，NVFP4 可能带来显著的性能提升和功耗降低，适合在支持该硬件加速的 GPU 上进行基准测试。
3.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   **理由：** 尽管存在合规风险，但其高达 300 万+的下载量证明了市场对“无束缚”创作型 AI 的巨大需求。研究此类模型的训练技巧（如 Abliteration 或特定 RLHF 逆向）对于理解大模型对齐边界具有重要意义。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*