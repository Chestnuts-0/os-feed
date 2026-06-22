# Hugging Face Trending Models Digest 2026-06-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-22 10:22 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-06-22

## 1. Today's Highlights
The landscape is dominated by the rapid adoption of **Gemma 4** and **Qwen 3.6/3.5** architectures, with community-driven GGUF quantizations seeing massive download volumes. **DeepSeek-V4-Pro** leads in raw engagement, reflecting a strong demand for high-capability open-weight conversational models. Meanwhile, specialized multimodal tools like NVIDIA’s `LocateAnything` and Google’s `diffusiongemma` indicate a shift toward integrated vision-language reasoning rather than isolated modalities.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **deepseek-ai/DeepSeek-V4-Pro** [Link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
    *   Author: deepseek-ai | Likes: 5,005 | Downloads: 2,421,858
    *   As the top-liked model, this conversational powerhouse demonstrates the continued dominance of DeepSeek in high-performance open-weight LLMs.
*   **zai-org/GLM-5.2** [Link](https://huggingface.co/zai-org/GLM-5.2)
    *   Author: zai-org | Likes: 1,924 | Downloads: 33,589
    *   A flagship MoE model from Zhipu AI, offering robust conversational capabilities with efficient sparse attention mechanisms.
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** [Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   Author: HauhauCS | Likes: 2,090 | Downloads: 4,078,305
    *   An aggressively fine-tuned, uncensored variant of Qwen 3.6 that has garnered immense popularity despite its controversial nature, highlighting community interest in unrestricted reasoning.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **nvidia/LocateAnything-3B** [Link](https://huggingface.co/nvidia/LocateAnything-3B)
    *   Author: nvidia | Likes: 2,269 | Downloads: 247,517
    *   NVIDIA’s latest vision-language model excels at precise object localization and grounding, bridging the gap between recognition and spatial understanding.
*   **google/diffusiongemma-26B-A4B-it** [Link](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
    *   Author: google | Likes: 1,044 | Downloads: 874,368
    *   A unified any-to-any model combining Gemma’s language capabilities with diffusion-based generation, enabling complex multimodal workflows.
*   **moonshotai/Kimi-K2.7-Code** [Link](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
    *   Author: moonshotai | Likes: 949 | Downloads: 412,778
    *   Moonshot AI’s entry focuses on image-text-to-text generation, leveraging compressed tensors for efficient deployment in creative coding tasks.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** [Link](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
    *   Author: yuxinlu1 | Likes: 2,124 | Downloads: 414,734
    *   A highly optimized coding-focused GGUF quantization of Gemma 4, tailored for software development and reasoning tasks.
*   **LiquidAI/LFM2.5-Embedding-350M** [Link](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)
    *   Author: LiquidAI | Likes: 98 | Downloads: 8,822
    *   Part of the new LFM2.5 family, these small but potent embedding models offer high efficiency for retrieval-augmented generation (RAG) pipelines.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **unsloth/GLM-5.2-GGUF** [Link](https://huggingface.co/unsloth/GLM-5.2-GGUF)
    *   Author: unsloth | Likes: 236 | Downloads: 41,846
    *   A community-optimized GGUF conversion of GLM-5.2, leveraging Unsloth’s techniques for faster inference on consumer hardware.
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** [Link](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)
    *   Author: yuxinlu1 | Likes: 319 | Downloads: 50,314
    *   An agentic variant of the Gemma 4 coder, tuned for terminal interaction and autonomous tool use via advanced sampling parameters.

## 3. Ecosystem Signal
The current ecosystem reflects a maturation of the "open weight" market, where community quantization (GGUF) drives utility more than raw parameter count. **Gemma 4** and **Qwen 3.6** are clearly emerging as the two dominant foundational families, with nearly half the trending list consisting of variants or quantizations of these models. This suggests that while proprietary leaders like DeepSeek and NVIDIA still capture headlines, the developer community is heavily investing in optimizing accessible open-source architectures for local and edge deployment.

There is a distinct trend toward **agentic and reasoning-centric fine-tunes**, particularly in the coding space (e.g., Fable5 Composer variants). Additionally, the success of **uncensored** models indicates a persistent demand for unfiltered reasoning capabilities among power users, even as safety remains a priority for base releases. The rise of **any-to-any** models like DiffusionGemma signals a move away from siloed modalities, favoring unified architectures that can handle text, image, and audio within a single context window.

## 4. Worth Exploring
1.  **nvidia/LocateAnything-3B**: Essential for applications requiring precise visual grounding. Its ability to combine feature extraction with text generation makes it superior for document analysis and detailed image captioning compared to standard VLMs.
2.  **google/diffusiongemma-26B-A4B-it**: Represents the cutting edge of unified multimodal learning. Researchers should study its architecture to understand how diffusion heads can be effectively coupled with large language models for seamless text-to-image and image-to-text flows.
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**: For developers needing a powerful, locally deployable coding assistant, this model offers an exceptional balance of performance and size, making it ideal for integration into local IDEs or automated code review pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*