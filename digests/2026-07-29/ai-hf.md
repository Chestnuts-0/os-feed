# Hugging Face 热门模型日报 2026-07-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 01:41 UTC

---

# Hugging Face 热门模型日报 (2026-07-29)

## 今日速览
Hugging Face 本周热度集中在多模态大模型与量化社区变体的博弈上。Kimi 系列（moonshotai）以绝对点赞数领跑，但 Qwen3.6 家族凭借超过 600 万的下载量展示了极强的工程落地能力。GGUF 量化格式持续爆发，特别是基于 Qwen 和 Laguna 的微调/量化版本在下载榜占据半壁江山，显示出本地部署需求旺盛。此外，代码生成领域虽然模型众多，但关注度相对多模态模型略有下降。

## 🧠 语言模型 (LLM、对话模型、指令微调)

*   **Moonshotai/Kimi-K3** | [链接](https://huggingface.co/moonshotai/Kimi-K3)  
    作者: moonshotai | 点赞: 8,007 | 下载: 99,214  
    Kimi K3 多模态大模型，凭借极高的用户关注度和长上下文处理能力成为本周点赞王，是社区研究的重中之重。

*   **upstage/Solar-Open2-250B** | [链接](https://huggingface.co/upstage/Solar-Open2-250B)  
    作者: upstage | 点赞: 645 | 下载: 4,804  
    超大规模 (250B) 开源文本生成模型，参数量巨大但受限于资源，主要面向高性能科研与特定推理任务。

*   **zai-org/GLM-5.2** | [链接](https://huggingface.co/zai-org/GLM-5.2)  
    作者: zai-org | 点赞: 4,605 | 下载: 1,267,198  
    智谱 AI 最新对话模型 MOE 架构版本，拥有极高的下载量和点赞数，是中文语境下最热门的基础 LLM 之一。

*   **Nanbeige/Nanbeige4.2-3B** | [链接](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)  
    作者: Nanbeige | 点赞: 528 | 下载: 18,933  
    轻量级开源文本生成模型，专注于高效能的边缘设备或快速原型开发场景。

*   **Kwaipilot/KAT-Coder-V2.5-Dev** | [链接](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)  
    作者: Kwaipilot | 点赞: 287 | 下载: 6,275  
    基于 Qwen3.5 MoE 架构开发的代码专用模型，兼具多模态理解与高级代码生成功能。

## 🎨 多模态与生成 (图像、视频、音频、文本到X)

*   **baidu/Unlimited-OCR** | [链接](https://huggingface.co/baidu/Unlimited-OCR)  
    作者: baidu | 点赞: 3,420 | 下载: 2,694,935  
    百度推出的 OCR 识别大模型，极高的下载量表明其在文档提取和信息数字化应用中的实用价值得到广泛认可。

*   **thinkingmachines/Inkling** | [链接](https://huggingface.co/thinkingmachines/Inkling)  
    作者: thinkingmachines | 点赞: 1,625 | 下载: 39,052  
    专注于图文输入的对话模型，适合需要通过视觉内容进行复杂交互的场景。

*   **microsoft/Mage-Flow** | [链接](https://huggingface.co/microsoft/Mage-Flow)  
    作者: microsoft | 点赞: 416 | 下载: 2,007  
    Microsoft 推出的文生图扩散模型，标签显示其支持图像编辑功能，是 AIGC 领域的重要探索者。

*   **owensong/Inflect-Micro-v2 / Inflect-Nano-v2** | [链接](https://huggingface.co/owensong/Inflect-Micro-v2) & [链接](https://huggingface.co/owensong/Inflect-Nano-v2)  
    作者: owensong | 点赞: 265 / 104 | 下载: 645 / 434  
    两款极小体积的端侧 TTS 模型，针对 CPU 和边缘 AI 优化，旨在提供轻量化的语音合成解决方案。

## 🔧 专用模型 (代码、数学、医疗、嵌入)

*   **ATH-MaaS/OvisOCR2** | [链接](https://huggingface.co/ATH-MaaS/OvisOCR2)  
    作者: ATH-MaaS | 点赞: 340 | 下载: 47,129  
    基于 Qwen3.5 架构优化的 OCR 专用模型，在垂直领域的文档识别性能上具有针对性优势。

## 📦 微调与量化 (社区微调、GGUF、AWQ)

社区在 GGUF 格式的优化和量化微调方面表现异常活跃，许多“Uncensored”及混合架构（MoE）版本引发了大量讨论。

*   **prism-ml/Ternary-Bonsai-27B-gguf** | [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)  
    作者: prism-ml | 点赞: 1,085 | 下载: 665,427  
    Ternary (2-bit) 量化后的 Bonsai 模型，极低的比特率使其能在显存有限的设备上运行大模型。

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** | [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)  
    作者: HauhauCS | 点赞: 3,159 | 下载: 1,855,505  
    Qwen3.6 的高分 GGUF 量化变体，“Uncensored”标签吸引了寻求更自由生成功能的开发者。

*   **Qwen/Qwen3.6-35B-A3B** | [链接](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)  
    作者: Qwen | 点赞: 2,570 | 下载: 6,158,876  
    官方发布的原生 Qwen3.6-35B 模型，以千万级的下载量稳坐下载榜首，是所有衍生量的基础来源。

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** | [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)  
    作者: empero-ai | 点赞: 2,502 | 下载: 1,262,662  
    融合了 Claude 风格推理能力并扩展至 1M 上下文的 Qwen3.5 GGUF 模型，兼顾了长窗口与小体积的优势。

## 生态信号

本周生态呈现出 **“双轨驱动”** 的特征：一端是 moonshotai/Kimi-K3 等新型多模态大模型引发的广泛关注与点赞，另一端则是 Qwen 家族主导的量化与微调变种在下载量上的绝对统治。

在开源权重 vs 闭源的趋势上，虽然官方模型（如 Qwen, GLM-5.2）下载基数最大，但社区衍生出的 GGUF 变体（如 uncensored, moe hybrid, ternary quantized）占据了半数榜单位置，说明 **推理效率与使用限制的自由度** 已成为用户选择的重要指标。值得注意的是，Laguna-S 系列不仅出现在原生列表中，还多次以 NVFP4 和 GGUF 形式出现，证明了该架构在适配不同后端（vllm, llama.cpp）上的高兼容性，是当前微调领域的香饽饽。

## 值得探索

1.  **qwen/Qwen3.6-35B-A3B**：理由：作为本周下载冠军且为官方正式版本，它是理解当前 SOTA 基座能力的最佳基准，适合进行复现对比。
2.  **prism-ml/Ternary-Bonsai-27B-gguf**：理由：其 2-bit 量化技术（Ternary）处于前沿，若能在保持性能的同时大幅降低资源消耗，对边缘计算极具研究价值。
3.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**：理由：仅用 9B 参数实现了百万级上下文窗口推理，这种架构上的突破对于学习长序列处理机制非常有参考价值。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*