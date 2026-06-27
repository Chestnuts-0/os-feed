# Hugging Face Trending Models Digest 2026-06-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-27 02:10 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-06-27

### 1. Today's Highlights
The current landscape is dominated by the rapid proliferation of optimized quantizations for next-generation architectures, particularly Qwen3.6 and GLM-5.2, with NVIDIA’s NVFP4 formats seeing massive adoption for inference efficiency. Community-driven "uncensored" and specialized coder variants of Gemma-4 and Qwen models are generating significant download volume, indicating a strong demand for tailored, high-performance local LLMs. Meanwhile, specialized multimodal tools like Baidu’s Unlimited-OCR and Nvidia’s LocateAnything highlight a shift toward robust, task-specific vision-language pipelines rather than just general-purpose chat.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **zai-org/GLM-5.2** ([Link](https://huggingface.co/zai-org/GLM-5.2))
    *   Author: zai-org | Likes: 2,595 | Downloads: 83,589
    *   This MOE-based conversational model is leading the chart with high engagement, signaling strong community interest in efficient, large-scale Chinese-English bilingual capabilities.
*   **nvidia/Qwen3.6-35B-A3B-NVFP4** ([Link](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4))
    *   Author: nvidia | Likes: 361 | Downloads: 4,812,629
    *   Despite lower likes, this model has nearly 5 million downloads, reflecting its critical role as a highly optimized, production-ready inference format for the Qwen3.6 architecture.
*   **Qwen/Qwen-AgentWorld-35B-A3B** ([Link](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B))
    *   Author: Qwen | Likes: 323 | Downloads: 13,186
    *   An official Qwen release focused on agentic workflows, demonstrating the ecosystem's pivot toward models capable of autonomous tool use and planning.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **baidu/Unlimited-OCR** ([Link](https://huggingface.co/baidu/Unlimited-OCR))
    *   Author: baidu | Likes: 1,044 | Downloads: 134,146
    *   A top-performing image-text-to-text pipeline that addresses the need for robust, scalable optical character recognition across diverse document layouts.
*   **krea/Krea-2-Turbo** ([Link](https://huggingface.co/krea/Krea-2-Turbo))
    *   Author: krea | Likes: 285 | Downloads: 8,721
    *   Represents the continued evolution of diffusion-based image generation, offering speed optimizations for real-time creative applications.
*   **nvidia/nemotron-3.5-asr-streaming-0.6b** ([Link](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b))
    *   Author: nvidia | Likes: 708 | Downloads: 56,434
    *   A lightweight but highly downloaded streaming ASR model, highlighting the demand for efficient, low-latency speech processing at the edge.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **WeiboAI/VibeThinker-3B** ([Link](https://huggingface.co/WeiboAI/VibeThinker-3B))
    *   Author: WeiboAI | Likes: 732 | Downloads: 54,638
    *   A small but powerful model tuned for mathematical reasoning, proving that specialized 3B parameters can compete with larger generalist models in niche domains.
*   **nvidia/LocateAnything-3B** ([Link](https://huggingface.co/nvidia/LocateAnything-3B))
    *   Author: nvidia | Likes: 2,385 | Downloads: 494,756
    *   A high-engagement multimodal model for precise object localization, bridging the gap between detection and natural language understanding.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
    *   Author: HauhauCS | Likes: 2,265 | Downloads: 3,453,492
    *   With millions of downloads, this GGUF quantization showcases the massive community appetite for unrestricted, locally deployable versions of flagship Qwen models.
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** ([Link](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF))
    *   Author: yuxinlu1 | Likes: 2,401 | Downloads: 516,333
    *   A heavily used coding-focused fine-tune of Gemma-4, optimized via GGUF for fast inference on consumer hardware.
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
    *   Author: empero-ai | Likes: 591 | Downloads: 486,810
    *   An experimental, high-context (1M token window) model quantized for accessibility, attracting users needing long-document reasoning capabilities.

### 3. Ecosystem Signal
The Hugging Face ecosystem in mid-2026 is defined by the maturation of the "Quantize-and-Deploy" culture. Official models from giants like NVIDIA (NVFP4) and Baidu are being rapidly mirrored and refined by the community into GGUF formats, creating a parallel layer of accessible, high-efficiency inference weights. There is a clear bifurcation: general-purpose chat is consolidating around robust architectures like Qwen3.6 and GLM-5.2, while specialized utility—such as OCR, ASR, and coding—is thriving through smaller, tightly tuned models (e.g., VibeThinker-3B). The sheer volume of downloads for "uncensored" or "aggressive" fine-tunes suggests that privacy-conscious users and developers are prioritizing local deployment over cloud APIs, driving demand for optimized, smaller-footprint versions of large models. Additionally, the rise of "agent-world" models indicates that the frontier of innovation is shifting from simple text completion to autonomous tool-use and multi-step reasoning.

### 4. Worth Exploring
1.  **nvidia/LocateAnything-3B**: Essential for anyone building computer vision applications requiring precise grounding. Its high download count and specific pipeline make it a superior alternative to general VLMs for localization tasks.
2.  **WeiboAI/VibeThinker-3B**: A standout example of efficient specialization. It demonstrates that a 3B parameter model, when rigorously tuned for math, can outperform much larger generalist models in specific reasoning benchmarks.
3.  **Qwen/Qwen-AgentWorld-35B-A3B**: Critical for researchers in agentic AI. As the official Qwen entry into agent-centric workflows, it provides a baseline for understanding how modern MOE architectures handle complex, multi-turn tool-use scenarios.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*