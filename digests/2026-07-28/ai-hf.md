# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 01:40 UTC

---

### Hugging Face 热门模型日报（2026-07-28）

#### 今日速览
多模态大模型继续保持高热度，Kimi-K3 和 GLM-5.2 凭借综合表现占据榜单前位。GGUF 量化版本成为社区下载热点，尤其是 Qwen3.6 系列的 uncensored 和 Heretic 变体突破百万下载量。文本生成与图像编辑工具需求增长显著，微软 Mage-Flow 系列在创意领域稳步扩张。开源模型生态活跃，微调与量化技术融合加速模型轻量化落地。

#### 热门模型

**🧠 语言模型**  
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 点赞: 758 | 下载: 63,605  
优秀的文本生成模型，支持长上下文任务，在社区微调中广泛使用。  
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | 点赞: 629 | 下载: 3,761  
大规模对话模型，适用于复杂指令遵循与知识问答场景。  
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 点赞: 4,551 | 下载: 1,003,547  
MoE 架构的多语言对话模型，性能强劲且开源友好，备受开发者青睐。  

**🎨 多模态与生成**  
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 点赞: 6,249 | 下载: 2,850  
先进的图文理解模型，专为跨模态推理设计，标签突出其在特征提取与压缩张量方面的优势。  
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 点赞: 1,604 | 下载: 36,196  
面向对话式交互的多模态模型，擅长结合图像与文本生成自然回复。  
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | microsoft | 点赞: 388 | 下载: 1,691  
基于扩散模型的文本到图像生成工具，支持图像编辑操作，适合创意工作流程。  

**🔧 专用模型**  
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 点赞: 3,331 | 下载: 2,645,773  
超大规模 OCR 识别模型，处理图像中的文字信息能力卓越，下载量惊人。  
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 点赞: 493 | 下载: 16,518  
轻量级通用 LLM，针对效率优化部署环境。  

**📦 微调与量化**  
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 点赞: 1,069 | 下载: 648,938  
采用三值化技术的 GGUF 格式模型，大幅降低内存占用同时保持高质量输出。  
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 点赞: 3,133 | 下载: 1,894,395  
未经过滤的 Qwen3.6 增强版，提供更自由的生成自由度高且安全性较低的应用场景。  
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 点赞: 2,490 | 下载: 1,336,263  
融合 Claude 理念的高容量上下文窗口模型，适合需要深度理解的长文本分析任务。  

#### 生态信号
当前生态呈现几大趋势：一是 MoE 和多模态架构持续深化应用；二是社区对 GGUF 等高效推理格式的需求激增，推动大量原生产物快速转换；三是“无限制”或“去审查”版本频繁出现，反映部分用户对抗审制的偏好强烈；四是教育类、医疗类等垂直领域专用模型尚未大规模爆发，但潜力巨大。整体来看，开源力量正在重塑行业标准，而量化与适配层的进步则让高性能模型走向边缘设备成为可能。

#### 值得探索
1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF]** —— 其超长上下文处理能力使其在处理复杂文档时表现出色，非常适合研究文献综述或代码库理解项目。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** —— 尽管体积较小却拥有极高性价比，可用于资源受限环境下构建智能助手原型系统。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*