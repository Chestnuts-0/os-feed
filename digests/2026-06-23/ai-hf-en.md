# Hugging Face Trending Models Digest 2026-06-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-23 09:59 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-06-23

## 1. Today's Highlights
The latest Hugging Face trends are dominated by the emergence of "Gemma 4" variants, with community quantizations of Google’s new family seeing massive adoption, particularly for coding and agentic tasks. Meanwhile, DeepSeek’s V4-Pro continues to lead in raw engagement, while NVIDIA expands its multimodal footprint with high-performance vision-language models like LocateAnything. The ecosystem shows a strong shift toward specialized, smaller-scale efficient models (under 10B parameters) that maintain high capability through advanced quantization and specialized fine-tuning.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **deepseek-ai/DeepSeek-V4-Pro**
    *   [Link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | Author: deepseek-ai | Likes: 5,020 | Downloads: 2,245,489
    *   This flagship open-weight model leads the leaderboard with exceptional conversational capabilities and widespread community adoption.
*   **zai-org/GLM-5.2**
    *   [Link](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 2,092 | Downloads: 40,127
    *   A major update from Zhipu AI showcasing advanced reasoning and MOE architectures for general-purpose text generation.
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,128 | Downloads: 3,955,016
    *   An uncensored, highly downloaded fine-tune of Qwen3.6 optimized for aggressive, unrestricted interaction styles.
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 151 | Downloads: 27,218
    *   A heavily quantized GGUF version of a reasoning-focused model designed for long-context (1M token) local deployment.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **nvidia/LocateAnything-3B**
    *   [Link](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,302 | Downloads: 274,025
    *   NVIDIA’s powerful vision-language model excels at precise object localization and grounding within images.
*   **MiniMaxAI/MiniMax-M3**
    *   [Link](https://huggingface.co/MiniMaxAI/MiniMax-M3) | Author: MiniMaxAI | Likes: 1,215 | Downloads: 131,057
    *   A competitive multimodal model from MiniMax supporting complex image-text interactions and visual reasoning.
*   **google/diffusiongemma-26B-A4B-it**
    *   [Link](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | Author: google | Likes: 1,053 | Downloads: 948,996
    *   A hybrid diffusion-transformer model from Google that bridges text generation and image synthesis capabilities.
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [Link](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia | Likes: 643 | Downloads: 41,050
    *   An ultra-efficient streaming ASR model ideal for real-time speech-to-text applications on edge devices.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **moonshotai/Kimi-K2.7-Code**
    *   [Link](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | Author: moonshotai | Likes: 965 | Downloads: 447,920
    *   Moonshot’s specialized code model offering high performance in software development and debugging tasks.
*   **CohereLabs/North-Mini-Code-1.0**
    *   [Link](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | Author: CohereLabs | Likes: 483 | Downloads: 21,634
    *   A compact, efficient code model from Cohere suitable for resource-constrained coding assistants.
*   **LiquidAI/LFM2.5-Embedding-350M**
    *   [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | Author: LiquidAI | Likes: 105 | Downloads: 10,117
    *   A small but potent embedding model from Liquid AI, leveraging their novel architecture for superior semantic search.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
    *   [Link](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | Author: yuxinlu1 | Likes: 2,195 | Downloads: 456,117
    *   A highly popular GGUF quantization of Gemma 4 tuned for coding, enabling easy local inference for developers.
*   **unsloth/GLM-5.2-GGUF**
    *   [Link](https://huggingface.co/unsloth/GLM-5.2-GGUF) | Author: unsloth | Likes: 265 | Downloads: 55,820
    *   Optimized quantization by Unsloth, allowing faster training and inference for GLM-5.2 on consumer hardware.
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   [Link](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | Author: yuxinlu1 | Likes: 405 | Downloads: 96,459
    *   A specialized agentic variant of Gemma 4, quantized for terminal-based autonomous agent workflows.

## 3. Ecosystem Signal

The current Hugging Face landscape reflects a maturation of the "post-Llama-3" era, with **Google’s Gemma 4** emerging as a dominant force in the open-weight space, particularly through community-driven quantizations. The sheer volume of downloads for GGUF versions of Gemma 4 indicates a strong preference for accessible, locally deployable models that balance performance with hardware constraints. Simultaneously, **NVIDIA** is solidifying its position not just in hardware, but in specialized AI software, with models like *LocateAnything* and *Nemotron* targeting specific, high-value enterprise use cases like grounding and low-latency speech recognition.

There is also a clear trend toward **specialization over scale**. While large generalist models like DeepSeek V4-Pro remain popular, the most downloaded community models are often smaller, fine-tuned variants (e.g., Qwen3.6 uncensored, Kimi Code) or highly optimized quantizations. This suggests developers are moving away from generic heavy models toward tailored solutions that fit specific pipelines (coding, agentic workflows, OCR). Furthermore, the rise of "Agentic" tags in model descriptions highlights a shift toward models designed for autonomous tool use and terminal interaction, rather than simple chat completion.

## 4. Worth Exploring

1.  **nvidia/LocateAnything-3B**: For anyone building computer vision applications requiring precise spatial understanding, this model offers state-of-the-art localization capabilities in a relatively lightweight package.
2.  **google/diffusiongemma-26B-A4B-it**: This model represents an exciting convergence of diffusion and transformer technologies, offering a unique multi-modal capability that goes beyond standard image-text alignment.
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**: Given the high download count and specific coding focus, this is an excellent candidate for developers looking to run a capable, local coding assistant without requiring enterprise-grade GPU clusters.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*