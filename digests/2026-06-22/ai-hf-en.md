# Hugging Face Trending Models Digest 2026-06-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-22 07:49 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-06-22

## 1. Today's Highlights
The open-weight landscape is dominated by the widespread adoption of Qwen 3.6 and Gemma 4 architectures, with community-driven quantizations and specialized fine-tunes driving massive download volumes. DeepSeek-V4-Pro has emerged as the clear leader in engagement, showcasing the continued high demand for powerful, general-purpose reasoning models. Simultaneously, there is a significant surge in multimodal capabilities, particularly in agentic coding assistants and efficient image-text-to-text pipelines, indicating a shift toward more integrated, multi-task model families.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **DeepSeek-V4-Pro** ([Link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro))
    *   Author: deepseek-ai | Likes: 5,000 | Downloads: 2,611,991
    *   This top-tier conversational model leads the pack due to its superior reasoning capabilities and broad applicability, setting a new benchmark for open-weight LLMs.
*   **GLM-5.2** ([Link](https://huggingface.co/zai-org/GLM-5.2))
    *   Author: zai-org | Likes: 1,891 | Downloads: 27,413
    *   A highly engaging MoE-based language model that offers strong performance in general conversational tasks while maintaining efficiency.
*   **Qwable-v1** ([Link](https://huggingface.co/lordx64/Qwable-v1))
    *   Author: lordx64 | Likes: 146 | Downloads: 3,351
    *   An emerging Qwen 3.5 MoE variant that is gaining traction for its balanced approach to text generation and multimodal understanding.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **NVIDIA LocateAnything-3B** ([Link](https://huggingface.co/nvidia/LocateAnything-3B))
    *   Author: nvidia | Likes: 2,258 | Downloads: 241,845
    *   Gaining popularity for its precise object localization capabilities within images, serving as a critical component for advanced vision-language applications.
*   **Google DiffusionGemma-26B-A4B-it** ([Link](https://huggingface.co/google/diffusiongemma-26B-A4B-it))
    *   Author: google | Likes: 1,041 | Downloads: 762,861
    *   A massive multimodal model from Google that bridges text and image understanding, trending for its extensive context window and conversational versatility.
*   **MiniMax-M3** ([Link](https://huggingface.co/MiniMaxAI/MiniMax-M3))
    *   Author: MiniMaxAI | Likes: 1,185 | Downloads: 104,076
    *   A robust image-text-to-text model that allows for complex visual reasoning and dialogue, appealing to developers building rich interactive experiences.

### 🔧 Specialized Models (code, math, embeddings)
*   **Gemma-4-12B-IT** ([Link](https://huggingface.co/google/gemma-4-12B-it))
    *   Author: google | Likes: 1,131 | Downloads: 1,815,370
    *   Despite being part of a larger family, this specific instruction-tuned variant remains a favorite for its efficiency and strong "any-to-any" capability across modalities.
*   **Kimi-K2.7-Code** ([Link](https://huggingface.co/moonshotai/Kimi-K2.7-Code))
    *   Author: moonshotai | Likes: 948 | Downloads: 363,308
    *   Highly downloaded for its specialized coding proficiency and compressed tensor optimizations, making it ideal for resource-constrained development environments.
*   **Cohere North-Mini-Code-1.0** ([Link](https://huggingface.co/CohereLabs/North-Mini-Code-1.0))
    *   Author: CohereLabs | Likes: 475 | Downloads: 19,551
    *   A compact yet effective MoE model tailored for code generation, attracting developers looking for fast inference speeds without sacrificing quality.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
    *   Author: HauhauCS | Likes: 2,089 | Downloads: 3,966,691
    *   The highest-downloaded item reflects a strong community demand for uncensored, aggressive roleplay or unrestricted reasoning variants of large Qwen models.
*   **Gemma-4-12B-Coder-Fable5-Composer2.5-v1-GGUF** ([Link](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF))
    *   Author: yuxinlu1 | Likes: 2,110 | Downloads: 358,677
    *   A heavily liked GGUF quantization optimized for coding tasks, enabling local deployment of powerful Gemma 4 variants on consumer hardware.
*   **Unsloth GLM-5.2-GGUF** ([Link](https://huggingface.co/unsloth/GLM-5.2-GGUF))
    *   Author: unsloth | Likes: 234 | Downloads: 32,260
    *   Leverages Unsloth’s optimization techniques to provide a faster, memory-efficient GGUF version of GLM-5.2 for local inference.

## 3. Ecosystem Signal
The current ecosystem signal indicates a maturation of the Qwen and Gemma model families, which now dominate both official releases and community adaptations. There is a distinct trend toward "Agentic" and "Coder" specializations, where base models are fine-tuned specifically for terminal interaction, code generation, and multi-step reasoning tasks. The sheer volume of downloads for uncensored and aggressive fine-tunes suggests a persistent niche demand for unrestricted models, likely driven by creative writing and red-teaming communities. Furthermore, the prevalence of GGUF formats and quantized versions (FP8, MTP) highlights a community-wide push toward accessibility, allowing powerful 35B+ parameter models to run efficiently on local hardware. While proprietary APIs remain dominant for enterprise scale, the open-weight community is rapidly closing the gap through specialized distillation and quantization techniques, making high-performance multimodal and coding models increasingly available offline.

## 4. Worth Exploring
1.  **DeepSeek-V4-Pro**: With over 5,000 likes and 2.6 million downloads, it represents the current state-of-the-art in open-weight conversational reasoning. It is essential for benchmarking against other LLMs and powering complex agent workflows.
2.  **NVIDIA LocateAnything-3B**: This model stands out for its specific utility in computer vision tasks. Its high engagement suggests it is becoming a standard tool for applications requiring precise spatial understanding within images, bridging the gap between generic VLMs and specialized detection models.
3.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored**: For users interested in exploring the boundaries of model behavior or engaging in unrestricted creative writing, this model offers a unique insight into how large Qwen architectures perform when safety filters are removed, despite the ethical considerations involved.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*