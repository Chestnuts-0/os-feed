# Hugging Face 热门模型日报 2026-07-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-30 01:24 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-07-30）

---

## 今日速览  
本周 Hugging Face 上 **Kimi-K3** 与 **Qwen3.6** 家族霸榜，跨模态能力（image-text-to-text）成为核心热点。GGUF 量化模型持续走高，尤其 Uncensored 与社区微调版本下载量破百万。同时，开源大模型正加速替代部分闭源功能，尤其在 OCR、语音合成与本地推理场景中表现突出。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **upstage/Solar-Open2-250B**  
   [https://huggingface.co/upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | ✅ 694 | 📥 4,804  
   250B 参数级开源大模型，主打高效对话与长上下文处理，适合企业级应用部署。

2. **zai-org/GLM-5.2**  
   [https://huggingface.co/zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | ✅ 4,642 | 📥 1,267,198  
   国产 MOE 架构代表，支持多轮对话与复杂任务推理，性能对标国际主流 LLM。

3. **Nanbeige/Nanbeige4.2-3B**  
   [https://huggingface.co/Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | ✅ 555 | 📥 18,933  
   小体积但高能效的文本生成模型，边缘设备友好，响应速度快。

4. **poolside/Laguna-S-2.1**  
   [https://huggingface.co/poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | ✅ 827 | 📥 67,286  
   专注文学创作与自然叙事的文本生成模型，风格柔和细腻，用户反馈积极。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. **moonshotai/Kimi-K3**  
   [https://huggingface.co/moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | ✅ 8,650 | 📥 99,214  
   Kimi 系列最新图像→文本+文本输出模型，结合视觉理解与语义生成，支持高度交互式内容创作。

2. **thinkingmachines/Inkling**  
   [https://huggingface.co/thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | ✅ 1,640 | 📥 39,052  
   以“涂鸦转文”为核心能力的多模态模型，辅助设计师快速将草图转化为描述性文本或代码片段。

3. **owensong/Inflect-Micro-v2** / **Inflect-Nano-v2**  
   - Micro: [https://huggingface.co/owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) — ✅ 290 | 📥 645  
   - Nano: [https://huggingface.co/owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) — ✅ 111 | 📥 434  
   极轻量级 TTS 引擎，专为 CPU 和边缘设备优化，可用于嵌入式系统或离线语音播报场景。

4. **microsoft/Mage-VL**  
   [https://huggingface.co/microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | ✅ 98 | 📥 702  
   微软最新 VL（Vision-Language）基础模型，具备强泛化能力，适用于图文检索、问答等通用场景。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

1. **Kwaipilot/KAT-Coder-V2.5-Dev**  
   [https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | ✅ 316 | 📥 6,275  
   基于 Qwen3.5 MoE 架构开发的专用 coder，专注于 Python/C++/JS 等功能区自动化补全与错误修复。

2. **ATH-MaaS/OvisOCR2**  
   [https://huggingface.co/ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | ✅ 346 | 📥 47,129  
   OCR 垂直领域模型，可识别模糊文字、手写体及低分辨率图片中的信息，准确率显著提升。

3. **fdtn-ai/antares-1b**  
   [https://huggingface.co/fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | ✅ 232 | 📥 7,666  
   面向安全敏感场景的小规模预训练模型，采用 GraniteMoehybrid 结构，用于数据脱敏与合规分析。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
   [https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | ✅ 3,171 | 📥 1,855,505  
   经严格去限流的 GGUF 量化版 Qwen3.6-A3B，兼容 llama.cpp，在消费级 GPU 上流畅运行，广泛用于角色扮演、自由创作。

2. **prism-ml/Bonsai-27B-gguf**  
   [https://huggingface.co/prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | ✅ 688 | 📥 2,339,098  
   1-bit 极致压缩后的 Bonsai 模型，体积仅几 GB，可在笔记本上实现近似原生的推理效果，性价比极高。

3. **unsloth/Kimi-K3-GGUF**  
   [https://huggingface.co/unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | ✅ 161 | 📥 0  
   虽无下载记录，但其作为未经压缩的标准 GGUF 格式存在，未来可能成为本地部署首选方案之一。

4. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
   [https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | ✅ 2,516 | 📥 1,262,662  
   融合 Claude 思维链机制的 9B GGUF 模型，擅长逻辑推理解题与多步规划任务，在小尺寸下展现惊人思考力。

---

## 生态信号  

当前 Hugging Face 呈现出三大趋势：一是 **MOE 架构主导**，如 GLM-5.2、Qwen3.6-A3B 等混合专家结构频现；二是 **GGUF 普及化**，大量社区成员主动发布经 llama.cpp 兼容的量化版本，降低本地门槛；三是 **“Uncensored”微调盛行**，反映出用户对开放边界内容的强烈需求，也推动开发者探索可控释放机制。此外，微软、百度等大厂虽保持低调参与，但在专业用途（如 Mage-VL、Fara1.5）中仍具影响力，体现产学研协同深化。

---

## 值得探索  

🔹 **Qwen/Qwen3.6-35B-A3B** —— 官方出品、结构先进、生态完善，是体验最新 MoE 多模态输入的绝佳起点。  
🔹 **prism-ml/Bonsai-27B-gguf** —— 成本极低且性能卓越，适合资源受限环境下的快速原型验证。  
🔹 **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** —— “小而聪明”，特别适合研究微型模型如何通过算法补偿参数量劣势。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*