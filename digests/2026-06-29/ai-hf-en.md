# Hugging Face Trending Models Digest 2026-06-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-29 02:32 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-06-29

## 1. Today's Highlights
The ecosystem is currently dominated by the rapid adoption of **Qwen3.5/3.6** and **Gemma4** architectures, with significant community activity around high-efficiency quantizations like GGUF and NVIDIA’s NVFP4 formats. There is a notable surge in "uncensored" and heavily modified variants of large language models, particularly from the **HauhauCS** organization, which are seeing massive download volumes despite lower like counts, indicating strong demand for unrestricted local inference. Meanwhile, specialized multimodal capabilities are expanding, with **Krea** leading the image generation space and **Baidu** pushing boundaries in OCR through unified image-text-to-text pipelines.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **Author:** zai-org | **Likes:** 2,823 | **Downloads:** 118,651
    *   This MoE-based text generation model is trending due to its balanced performance and conversational capabilities, leveraging the GLM architecture for efficient scaling.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **Author:** Qwen | **Likes:** 400 | **Downloads:** 23,697
    *   A specialized agent-oriented variant of Qwen3.5, designed for complex reasoning tasks and multi-step planning within agentic workflows.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   **Author:** deepseek-ai | **Likes:** 182 | **Downloads:** 373
    *   An early-stage release of DeepSeek V4 optimized for high-throughput distributed inference, signaling continued innovation in the DeepSeek family.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **Author:** baidu | **Likes:** 1,244 | **Downloads:** 295,064
    *   A powerful image-text-to-text pipeline specifically engineered for robust Optical Character Recognition across diverse document layouts and languages.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **Author:** krea | **Likes:** 355 | **Downloads:** 27,631
    *   The accelerated version of Krea’s latest image generation model, offering faster inference speeds while maintaining high-fidelity text-to-image outputs.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **Author:** nvidia | **Likes:** 734 | **Downloads:** 67,419
    *   A lightweight, streaming-capable Automatic Speech Recognition model ideal for real-time voice applications and low-latency environments.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 2,436 | **Downloads:** 646,451
    *   A highly popular image-feature-extraction model enabling precise object localization and grounding within images, widely used for visual search and retrieval.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   **Author:** WeiboAI | **Likes:** 743 | **Downloads:** 59,337
    *   A small but potent model fine-tuned specifically for advanced mathematical reasoning and logic puzzles, demonstrating that scale isn't always necessary for niche tasks.
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   **Author:** microsoft | **Likes:** 369 | **Downloads:** 6,779
    *   Designed to extend context windows efficiently, this model helps LLMs manage long-document understanding without proportional increases in computational cost.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 2,301 | **Downloads:** 3,248,724
    *   The most downloaded model on this list, this GGUF-quantized variant removes safety filters from Qwen3.6, catering to users seeking unrestricted local deployment.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **Author:** yuxinlu1 | **Likes:** 2,473 | **Downloads:** 549,926
    *   A heavily optimized coding-focused GGUF quantization of Gemma4, praised for its balance between speed, size, and programming proficiency.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   **Author:** deepreinforce-ai | **Likes:** 414 | **Downloads:** 79,630
    *   A quantized version of the Ornith 35B model, making this large architecture accessible for consumer-grade hardware via llama.cpp compatibility.

## 3. Ecosystem Signal
The current landscape reflects a maturation of the **Qwen** and **Gemma** families as the primary backbones for open-weight innovation. While foundational model releases from organizations like Qwen and DeepSeek remain critical, the volume of activity has shifted heavily toward **optimization and access**. The staggering download numbers for HauhauCS’s uncensored Qwen3.6 variants and yuxinlu1’s Gemma4 coder suggest that the community prioritizes usable, local-friendly weights over raw model prestige. Furthermore, **NVIDIA’s involvement** is distinct; beyond standard model releases, their focus on optimization tools (NVFP4) and specific utilities like LocateAnything highlights a trend where hardware-aware software stacks are becoming as valuable as the algorithms themselves. The rise of **agentic frameworks** (e.g., Qwen-AgentWorld) indicates that "reasoning" is no longer just about chat accuracy but about structural capability to execute multi-step tasks. Finally, the persistence of GGUF dominance confirms that edge deployment remains a primary driver for model selection.

## 4. Worth Exploring
1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: With nearly 650k downloads, this model solves a persistent pain point in multimodal AI—precise spatial understanding. It is essential for developers building RAG systems with visual components or autonomous agents requiring ground-truth object detection.
2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**: For developers needing a powerful yet efficient coding assistant that runs locally, this quantized Gemma4 variant offers an exceptional price-performance ratio, bridging the gap between small 7B models and bloated 70B+ alternatives.
3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: As document intelligence becomes a standard requirement for enterprise AI, this unified pipeline provides a robust, scalable solution that outperforms traditional separate OCR and LLM stacks, making it a critical tool for data extraction workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*