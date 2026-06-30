# Hugging Face Trending Models Digest 2026-06-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-30 02:27 UTC

---

# Hugging Face Trending Models Digest
**Date:** June 30, 2026

## 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the rapid adoption of **Qwen 3.5/3.6** variants and the emergence of **GLM-5.2**, with significant community engagement around high-capacity Mixture-of-Experts (MoE) architectures. There is a distinct surge in **uncensored and specialized fine-tunes**, particularly from creator `HauhauCS`, which are seeing massive download volumes despite lower like counts, indicating strong utility for niche or unrestricted applications. Additionally, **NVIDIA’s Model Optimizer** tools are gaining traction for efficient deployment, while **Krea** continues to lead the text-to-image generation space with new turbo and raw variants.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **Author:** zai-org | **Likes:** 2,944 | **Downloads:** 133,350
    *   A powerful conversational text-generation model leveraging GLM MoE DSA architecture, showing strong community interest for general-purpose chat tasks.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   **Author:** deepreinforce-ai | **Likes:** 483 | **Downloads:** 123,598
    *   A quantized version of the 35B Ornith model, optimized for local inference via llama.cpp, balancing performance and accessibility.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   **Author:** deepseek-ai | **Likes:** 216 | **Downloads:** 5,460
    *   The latest flagship release from DeepSeek, featuring advanced reasoning capabilities and new architectural optimizations detailed in recent arXiv papers.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **Author:** krea | **Likes:** 394 | **Downloads:** 38,454
    *   An accelerated text-to-image generator built on the Krea-2 Raw base, offering faster generation speeds for creative workflows.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **Author:** baidu | **Likes:** 1,374 | **Downloads:** 362,945
    *   A robust image-text-to-text pipeline specifically designed for high-accuracy optical character recognition across diverse document types.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **Author:** nvidia | **Likes:** 743 | **Downloads:** 76,154
    *   A lightweight, streaming-ready automatic speech recognition model ideal for real-time audio transcription applications.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 2,482 | **Downloads:** 728,320
    *   A highly downloaded vision-language model capable of precise object localization and feature extraction, widely used for grounding tasks.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   **Author:** WeiboAI | **Likes:** 749 | **Downloads:** 63,449
    *   A small but potent model focused on mathematical reasoning and complex problem-solving, showcasing efficiency in niche domains.
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
    *   **Author:** Chunjiang-Intelligence | **Likes:** 130 | **Downloads:** 1,463
    *   A specialized variant of DeepSeek V4 tuned for cybersecurity applications, reflecting growing demand for secure coding assistance.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 2,333 | **Downloads:** 3,089,944
    *   An extremely popular uncensored GGUF fine-tune of Qwen 3.6, prioritizing unrestricted generation over safety filters, driving massive download numbers.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **Author:** yuxinlu1 | **Likes:** 2,503 | **Downloads:** 561,577
    *   A heavily liked quantized Gemma 4 model optimized for coding and terminal interactions, offering high performance at reduced memory costs.
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   **Author:** unsloth | **Likes:** 465 | **Downloads:** 164,180
    *   An Unsloth-optimized GGUF conversion of GLM-5.2, ensuring efficient loading and inference for users preferring quantized formats.

## 3. Ecosystem Signal
The current landscape reveals a clear consolidation around the **Qwen** and **GLM** families, with Qwen 3.5/3.6 serving as the backbone for many community fine-tunes. The sheer volume of downloads for `HauhauCS`'s uncensored models suggests a persistent and growing demand for unrestricted local LLMs, often outpacing official releases in utility metrics despite lower "likes." **Quantization remains critical**, with GGUF formats dominating the top trending lists, driven by tools like Unsloth and llama.cpp. Furthermore, **NVIDIA’s influence** is expanding beyond hardware into software optimization, as seen with their NVFP4 quantizations and Model Optimizer tags, signaling a shift toward enterprise-grade efficiency for open-weight models. The rise of specialized agents (e.g., `Qwen-AgentWorld`) indicates that general-purpose chat is evolving into task-specific agentic frameworks.

## 4. Worth Exploring
1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: With nearly 730k downloads, this model demonstrates the high value of precise visual grounding. It is essential for developers building applications requiring specific object detection within images.
2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**: This model offers an excellent balance of size and capability for coding tasks. Its high like count and download volume suggest it is a reliable, performant choice for local AI coding assistants.
3.  **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**: As the latest flagship from DeepSeek, this model represents the cutting edge of open-weight reasoning. Studying its architecture and performance will provide key insights into the next generation of efficient, large-scale language models.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*