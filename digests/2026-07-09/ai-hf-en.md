# Hugging Face Trending Models Digest 2026-07-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-09 01:56 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-07-09

### 1. Today's Highlights
The current landscape is dominated by the widespread adoption of Qwen 3.5/3.6 architectures, with multiple community quantizations and specialized variants ranking highly in both likes and downloads. There is a significant surge in multimodal capabilities, particularly from NVIDIA’s `LocateAnything-3B` and Baidu’s `Unlimited-OCR`, indicating a strong market demand for precise visual grounding and document understanding. Additionally, the "agentic" trend continues to grow, evidenced by several models explicitly tuned for terminal interaction and complex reasoning tasks.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **Author:** zai-org | **Likes:** 3,667 | **Downloads:** 281,584
    *   This next-generation GLM MoE model is trending due to its high engagement and robust conversational capabilities, signaling continued strong support for the Zhipu AI ecosystem.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   **Author:** deepreinforce-ai | **Likes:** 800 | **Downloads:** 502,663
    *   A heavily downloaded GGUF quantization of the Ornith 35B model, offering accessible local inference for a powerful reasoning-capable LLM.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **Author:** empero-ai | **Likes:** 1,857 | **Downloads:** 1,683,711
    *   The highest-downloaded model on the list, this Qwen3.5-based variant features an extended 1M context window and is optimized for reasoning tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **Author:** baidu | **Likes:** 1,873 | **Downloads:** 1,084,945
    *   A versatile image-text-to-text pipeline designed for comprehensive OCR tasks, showing massive community adoption for document processing.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 2,667 | **Downloads:** 1,424,958
    *   NVIDIA’s latest offering excels in spatial understanding and feature extraction, bridging the gap between vision and language for precise localization tasks.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **Author:** krea | **Likes:** 555 | **Downloads:** 123,729
    *   An accelerated text-to-image generation model that leverages the Krea-2 Raw base, catering to users seeking speed without sacrificing quality in image synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **Author:** google | **Likes:** 313 | **Downloads:** 9,458
    *   A specialized transformer for tabular data classification and regression, highlighting Google’s push into non-text structured data handling.
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **Author:** yuxinlu1 | **Likes:** 1,098 | **Downloads:** 384,383
    *   A Gemma 4 derivative fine-tuned specifically for agentic workflows and terminal interactions, addressing the growing need for autonomous coding agents.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **Author:** unsloth | **Likes:** 1,011 | **Downloads:** 2,842,118
    *   The most downloaded model overall, this Unsloth-optimized GGUF version of Qwen3.6 includes Multi-Token Prediction enhancements for faster local inference.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 2,573 | **Downloads:** 2,823,988
    *   An uncensored, aggressive fine-tune of the Qwen3.6 MoE architecture, reflecting strong community interest in unrestricted creative and roleplay applications.
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
    *   **Author:** nvidia | **Likes:** 325 | **Downloads:** 538,687
    *   A precision-optimized variant using NVIDIA’s Model Optimizer, demonstrating the industry shift toward hardware-specific quantization formats like NVFP4.

### 3. Ecosystem Signal
The 2026 mid-year Hugging Face ecosystem reveals a consolidation around the **Qwen 3.5/3.6** family, which appears in nearly half of the top trending models through various quantizations (GGUF, NVFP4) and fine-tunes. This suggests that Qwen has become the de facto open-source backbone for many specialized deployments. Simultaneously, **multimodal grounding** is a critical growth area; models like `LocateAnything-3B` and `Unlimited-OCR` indicate that users are moving beyond simple image-text pairing toward precise spatial and document-level understanding. The rise of "agentic" tags—seen in Gemma 4 and Qwythos variants—highlights a functional shift where models are increasingly optimized for tool use, terminal interaction, and autonomous reasoning rather than just conversational fluency. Furthermore, the dominance of **quantized formats** (GGUF being the most common tag) underscores the community's priority on accessibility and local deployment efficiency, driven by tools like Unsloth. While proprietary giants like DeepSeek release new architectures (`DeepSeek-V4-Pro`), the immediate viral traction belongs to optimized, community-driven derivatives of established open weights.

### 4. Worth Exploring
1.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**: Essential for anyone running large models locally; the MTP (Multi-Token Prediction) optimization combined with Unsloth’s efficiency makes this a benchmark for high-throughput inference.
2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: Represents the cutting edge of vision-language grounding. Its high download count and NVIDIA backing suggest it will become a standard reference for tasks requiring precise object localization within images.
3.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**: A compelling choice for developers building AI agents, as it is specifically tuned for terminal and coding workflows, addressing a practical pain point in autonomous software development.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*