# Hugging Face Trending Models Digest 2026-07-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-04 01:55 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-07-04

## 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the rapid adoption of **Qwen3.5/3.6** and **GLM-5** architectures, with community-driven quantizations and specialized fine-tunes driving massive download volumes. There is a significant surge in **agentic and coding-focused models**, particularly those leveraging MoE (Mixture of Experts) structures like the Ornith and Qwopus variants, indicating a shift toward efficient, task-specific large-scale inference. Additionally, multimodal generation remains strong, with NVIDIA’s `LocateAnything` and Krea’s video/image tools showing high engagement, while uncensored variants of major open-weight models continue to attract substantial community interest.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   Author: zai-org | Likes: 3,344 | Downloads: 191,462
    *   This latest iteration from Zhipu AI leverages MOE-DSA architectures for conversational excellence, ranking among the most-liked models this week due to its robust performance and open availability.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   Author: empero-ai | Likes: 1,372 | Downloads: 1,366,360
    *   A highly quantized 9B model based on Qwen3.5, this GGUF variant offers a massive 1M context window, making it a top choice for users needing long-context reasoning on local hardware.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 2,433 | Downloads: 3,029,679
    *   An uncensored, aggressive fine-tune of the Qwen3.6 MoE model, this entry has seen explosive growth in downloads as users seek unrestricted capabilities from powerful open-weight bases.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   Author: NVIDIA | Likes: 2,589 | Downloads: 1,108,586
    *   NVIDIA’s vision-language model excels at precise object localization within images, trending due to its high accuracy and utility in automated visual inspection tasks.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   Author: krea | Likes: 481 | Downloads: 84,006
    *   An optimized text-to-image generation model that balances speed and quality, appealing to creators looking for rapid iteration workflows via Diffusers.
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    *   Author: fal | Likes: 150 | Downloads: 0
    *   A specialized LoRA for LTX-2.3 focused on 3D-realistic video generation, representing the cutting edge of temporal consistency in AI video synthesis.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   Author: yuxinlu1 | Likes: 2,585 | Downloads: 628,225
    *   A coding-specialized Gemma-4 variant fine-tuned for agentic terminal usage, highly regarded for its ability to write, debug, and execute code in complex environments.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   Author: DeepSeek | Likes: 343 | Downloads: 9,388
    *   The "Pro" variant of DeepSeek V4, likely optimized for high-throughput or specific enterprise use cases, signaling DeepSeek’s continued push into specialized model tiers.
*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
    *   Author: National Design Studio | Likes: 115 | Downloads: 1,149
    *   A BERT-based token classification model designed for PII (Personally Identifiable Information) detection, addressing growing privacy compliance needs in data processing pipelines.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   Author: Unsloth | Likes: 938 | Downloads: 1,774,298
    *   Leveraging Unsloth’s optimization techniques, this GGUF version of Qwen3.6 offers significant memory efficiency and speed improvements for local deployment.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   Author: DeepReinforce | Likes: 685 | Downloads: 322,780
    *   A quantized version of the Ornith 35B model, allowing users to run larger MoE architectures locally with reduced VRAM requirements.
*   **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)**
    *   Author: DeepSeek | Likes: 142 | Downloads: 32,675
    *   A faster, "Flash" variant of DeepSeek V4, likely optimized for lower latency applications, complementing the Pro release in the same family.

## 3. Ecosystem Signal
The current landscape highlights a clear consolidation around **Qwen3.5/3.6** and **GLM-5** families, with community efforts heavily focused on maximizing their utility through quantization (GGUF) and specialized fine-tuning. The dominance of MoE (Mixture of Experts) architectures like `Ornith`, `Qwopus`, and `GLM-5.2` suggests that the industry is prioritizing parameter efficiency and specialized routing over dense model scaling for many consumer and prosumer applications. There is also a notable trend in **agentic capabilities**, where models are being tuned specifically for terminal interaction, coding, and multi-step reasoning, rather than general chat. Furthermore, the high download counts for "uncensored" or "abliterated" variants indicate a sustained demand for unrestricted local models, driven by privacy concerns and the desire for full control over AI behavior. Finally, NVIDIA and Krea’s presence in multimodal generation underscores the increasing importance of high-fidelity, localized vision and video tools in creative workflows.

## 4. Worth Exploring
1.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**: Essential for anyone running large models locally; the combination of Unsloth’s optimizations and Qwen’s strong base performance offers the best balance of speed and quality.
2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**: For developers building AI agents, this model provides a lightweight yet highly capable coding specialist that can operate effectively in constrained environments.
3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: Represents the state-of-the-art in open-weight vision grounding, offering precise localization capabilities that are critical for industrial and analytical computer vision tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*