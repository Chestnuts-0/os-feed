# Hugging Face Trending Models Digest 2026-06-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-25 18:45 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-06-26

### 1. Today's Highlights
The ecosystem is currently dominated by the rapid adoption of **DeepSeek-V4-Pro**, which leads with over 5,000 weekly likes, signaling strong community preference for high-performance open-weight reasoning models. Concurrently, there is significant momentum around **Gemma 4** variants, particularly specialized coder and agentic versions, reflecting a shift toward domain-specific optimization. Finally, the proliferation of **uncensored and abliterated fine-tunes** indicates a robust community demand for unrestricted creative and analytical capabilities, with several community-hosted models seeing millions of downloads.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **Author:** deepseek-ai | **Likes:** 5,058 | **Downloads:** 1,878,217
    *   Leading the chart with exceptional engagement, this model sets a new benchmark for conversational and reasoning tasks among open-weight offerings.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **Author:** zai-org | **Likes:** 2,454 | **Downloads:** 67,107
    *   A top-tier text-generation model leveraging GLM Mo architecture, gaining traction for its balanced performance in general-purpose applications.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   **Author:** google | **Likes:** 1,174 | **Downloads:** 2,187,644
    *   Google’s latest instruction-tuned Gemma variant continues to see massive usage due to its efficiency and strong alignment capabilities.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 2,360 | **Downloads:** 407,838
    *   A powerful image-text-to-text model for precise object localization and visual grounding, addressing critical needs in computer vision pipelines.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **Author:** krea | **Likes:** 235 | **Downloads:** 2,996
    *   An optimized text-to-image generation model designed for speed and quality, catering to real-time creative workflows.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **Author:** nvidia | **Likes:** 691 | **Downloads:** 50,553
    *   A lightweight yet highly efficient streaming automatic speech recognition model, ideal for low-latency audio applications.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **Author:** yuxinlu1 | **Likes:** 2,347 | **Downloads:** 495,813
    *   A highly popular GGUF-quantized version of Gemma 4 tailored specifically for coding tasks, offering excellent performance on constrained hardware.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   **Author:** MiniMaxAI | **Likes:** 1,236 | **Downloads:** 154,350
    *   A multimodal model from MiniMax showing strong potential in complex image-text understanding and generation scenarios.
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   **Author:** moonshotai | **Likes:** 990 | **Downloads:** 502,106
    *   Specialized for code-related image-text extraction and processing, bridging the gap between visual documentation and executable code.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 2,229 | **Downloads:** 3,520,206
    *   An aggressively uncensored fine-tune of Qwen 3.6, demonstrating immense community interest in removing safety filters for unrestricted generation.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **Author:** empero-ai | **Likes:** 455 | **Downloads:** 134,294
    *   A large-context (1M token) GGUF quantization targeting long-document reasoning and retrieval-augmented generation use cases.
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   **Author:** unsloth | **Likes:** 379 | **Downloads:** 88,915
    *   Optimized via Unsloth techniques, this GGUF version provides faster inference speeds for GLM-5.2 on consumer-grade GPUs.

### 3. Ecosystem Signal
The current landscape is defined by the **consolidation of "pro" open-weight models**. DeepSeek-V4-Pro’s dominance suggests that users are prioritizing raw capability over brand recognition, driving a shift away from smaller, generic LLMs toward specialized, high-parameter models. There is a marked trend toward **multimodal integration in non-visual domains**; even text-heavy models like Kimi-K2.7-Code incorporate vision features for OCR and diagram parsing, highlighting the value of any-to-any capabilities. Furthermore, **quantization and fine-tuning activity is exploding**, particularly around Gemma 4 and Qwen 3.6 architectures. The high download counts for "uncensored" and "abliterated" variants indicate a persistent, high-demand niche for unrestricted models, while GGUF formats remain the standard for local deployment efficiency. NVIDIA’s presence in both ASR and model optimization tools underscores the hardware-software co-evolution driving these trends.

### 4. Worth Exploring
1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: As the most liked model, it represents the current state-of-the-art for open-weight reasoning. Evaluating its cost-performance ratio against proprietary APIs is essential for enterprise adoption.
2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: With nearly 2,500 likes and high downloads, this model solves a specific, difficult problem (precise visual grounding) efficiently. It is worth studying for its architectural approach to spatial understanding.
3.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**: For developers working with long-context documents, this 1M token context window model offers a practical solution for local deployment, balancing size and capability effectively.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*