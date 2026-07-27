# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 01:56 UTC

---

# Hugging Face 热门模型日报（2026-07-27）

---

## 今日速览  
本周 Hugging Face 热门模型聚焦于多模态 OCR、大语言模型（LLM）量化与社区微调的爆发式增长，尤其以 Qwen3.6/GLM-5 家族和 Laguna-S-2.1 为核心涌现大量衍生版本。GGUF/Quantized 模型在推理效率驱动下成为主流，同时“Uncensored”“Heretic”等变体反映用户对自由可控模型的强烈需求。此外，Microsoft 与 NVIDIA 也在推进专用生成工具落地边缘端场景。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**1. zai-org/GLM-5.2**  
🔗 [https://huggingface.co/zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)  
作者：zai-org | 点赞: 4,477 | 下载: 827,191  
基于 MoE+DSA 架构的高效通用对话模型，因高性能与低延迟广受开发者青睐，是当前最具影响力的开源中文 LLM 之一。

**2. upstage/Solar-Open2-250B**  
🔗 [https://huggingface.co/upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)  
作者：upstage | 点赞: 595 | 下载: 3,301  
250B 参数规模的全栈开源 LLM，支持长上下文推理，在多轮对话与代码生成任务中表现突出，代表 Big Science 级开源进展。

**3. Nanbeige/Nanbeige4.2-3B**  
🔗 [https://huggingface.co/Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)  
作者：Nanbeige | 点赞: 447 | 下载: 14,049  
轻量级高效推理模型，专为移动端与边缘设备优化，适合资源受限环境下的本地部署应用。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**4. thinkingmachines/Inkling**  
🔗 [https://huggingface.co/thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)  
作者：thinkingmachines | 点赞: 1,579 | 下载: 34,511  
新一代视觉对话系统，可理解复杂图文并自然交互，适用于教育客服等领域，标签含“conversational”。

**5. microsoft/Mage-Flow**  
🔗 [https://huggingface.co/microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)  
作者：microsoft | 点赞: 334 | 下载: 1,375  
微软推出的文生图工具，结合 Diffusers 实现高质量图像生成，可用于创意设计辅助及内容生产流水线。

**6. moonshotai/Kimi-K2.7-Code**  
🔗 [https://huggingface.co/moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)  
作者：moonshotai | 点赞: 1,298 | 下载: 730,129  
专为编程设计的多模态理解模型，擅长解析代码 + 注释组合输入，提升智能助手对技术文档的理解能力。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

**7. Kwaipilot/KAT-Coder-V2.5-Dev**  
🔗 [https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)  
作者：Kwaipilot | 点赞: 198 | 下载: 3,764  
基于 Qwen3.5-MoE 构建的代码增强型模型，兼具视觉感知与逻辑推理能力，适合全栈开发自动化流程。

**8. Motif-Technologies/Motif-3-Beta**  
🔗 [https://huggingface.co/Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)  
作者：Motif-Technologies | 点赞: 193 | 下载: 2,400  
专注于安全语义理解的嵌入型预训练模型，用于过滤敏感内容或合规检测，在金融风控领域有潜在用途。

**9. opensong/Inflect-Micro-v2**  
🔗 [https://huggingface.co/opensong/Inflect-Micro-v2](https://huggingface.co/opensong/Inflect-Micro-v2)  
作者：opensong | 点赞: 178 | 下载: 298  
超小型 TTS 引擎，仅需 CPU 即可运行语音合成，适合作为离线嵌入式设备的声音输出模块。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**10. baidu/Unlimited-OCR**  
🔗 [https://huggingface.co/baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)  
作者：baidu | 点赞: 3,207 | 下载: 2,593,460  
全球首个真正无限分辨率 OCR 模型，突破传统图像尺寸限制，在扫描文档识别场景中表现卓越。

**11. DavidAU/Qwen3.6-27B-Fable-Fusion...**  
🔗 [https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)  
作者：DavidAU | 点赞: 638 | 下载: 552,026  
高度定制化的 GGUF 量化版 Qwen3.6，融合“Heretic”风格去限制策略，面向追求极致自由度的研究者和爱好者群体。

**12. prism-ml/Ternary-Bonsai-27B-gguf / Bonsai-27B-gguf**  
🔗 [Ternary](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf), [Base](https://huggingface.co/prism-ml/Bonsai-27B-gguf)  
作者：prism-ml | Ternary 点赞:1,050/降 63万；Base 点赞:651/量超218万  
采用三级稀疏压缩技术（Ternary），在不损失太多性能前提下极大降低显存占用，推动大模型在消费级 GPU 上普及。

**13. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
🔗 [https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)  
作者：empero-ai | 点赞: 2,480 | 下载: 1,410,054  
将 Claude Mython 思维链机制注入 Qwen3.5 基座并通过 GGUF 封装发布，兼顾 reasoning 深度与推理速度，是近期下载量最高的混合架构模型之一。

**14. poolside/Laguna-S-2.1 系列（GGUF/NVFP4）**  
🔗 [Original](https://huggingface.co/poolside/Laguna-S-2.1), [NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4), [GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)  
作者：poolside | 各分支合计点赞≈1K+, 总下载百万级  
同一原始模型通过不同后端适配形成多个形态——VLLM 加速版、NVFP4 压缩版、llama.cpp GGUF 版，体现“One Model, Many Runs”的工程趋势。

---

## 生态信号  

当前模型生态呈现三大动向：**家族化衍生加速**（如 Qwen3.6 衍生出多个 GGUF/Uncensored/Hermes 变体）、**量化民主化深化**（GGUF 占据半数热门榜，且精度从 2-bit 向 1-bit/Ternary 演进）、以及**应用场景垂直下沉**（机器人控制、身份编辑、音频合成等细分领域也开始出现爆款）。值得注意的是，“uncensored”类模型虽属非官方分类，但其高热度表明用户对于无约束对话的需求并未减弱，甚至推动了更多“自由派”微调项目的诞生。与此同时，大厂仍持续输出稳定基座（如 Microsoft Mage Flow、NVIDIA Cosmos Edge），形成“基础层稳固 + 应用层繁荣”的双轨格局。

---

## 值得探索

✅ **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** —— 将强化学习引导的 Chain-of-Thought 能力打包进紧凑型 GGUF 文件，非常适合希望在本地体验高级 reasoning 的用户尝试。

✅ **baidu/Unlimited-OCR** —— 不仅解决了现有 OCR 无法处理超大图纸的问题，还在真实扫描件测试中展现出接近人类阅读的容错率，值得应用于档案数字化项目。

✅ **poolside/Laguna-S-2.1-NVFP4** —— 若你拥有 Ampere/Arc GPU 并希望快速部署轻量级文本生成服务，该 NVFP4 格式版本提供了比常规 safetensors 更快启动速度与更低内存占用的平衡方案。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*