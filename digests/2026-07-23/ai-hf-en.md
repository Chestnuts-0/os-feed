# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 01:50 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-07-23

## 1. Today's Highlights
The landscape is dominated by the massive adoption of Qwen 3.6-based architectures, with community variants like *Fable-Fusion* and *Uncensored-Heretic* seeing explosive download numbers despite mixed like counts. Google’s **Gemma-4-31B-it** has surged to the top of the likes chart, signaling a strong preference for efficient, high-performance open-weight models over larger, less accessible ones. Meanwhile, the robotics sector is gaining traction with specialized Vision-Language-Action (VLA) models from MiniCPM, indicating a shift toward embodied AI applications. Quantization formats, particularly GGUF and MLX, remain critical for local deployment, with multiple entries highlighting 1-bit and ternary quantizations for extreme efficiency.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **google/gemma-4-31B-it** [Link](https://huggingface.co/google/gemma-4-31B-it)
    *   Author: google | Likes: 3,328 | Downloads: 12,113,203
    *   This model leads in popularity due to its balance of size and performance, offering robust conversational capabilities for an open-weight 31B parameter model.
*   **zai-org/GLM-5.2** [Link](https://huggingface.co/zai-org/GLM-5.2)
    *   Author: zai-org | Likes: 4,337 | Downloads: 545,109
    *   Featuring MoE and DSA architectures, GLM-5.2 is trending for its advanced reasoning capabilities and high engagement within the Chinese AI community.
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** [Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
    *   Author: empero-ai | Likes: 2,417 | Downloads: 2,133,420
    *   A highly quantized 9B model leveraging Claude-style reasoning over a 1M context window, popular for long-document analysis on consumer hardware.
*   **baidu/Unlimited-OCR** [Link](https://huggingface.co/baidu/Unlimited-OCR)
    *   Author: baidu | Likes: 2,714 | Downloads: 2,237,351
    *   While technically multimodal, its core utility drives massive downloads as a go-to solution for high-accuracy optical character recognition tasks.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **thinkingmachines/Inkling** [Link](https://huggingface.co/thinkingmachines/Inkling)
    *   Author: thinkingmachines | Likes: 1,452 | Downloads: 16,441
    *   A new image-text-to-text model gaining attention for its nuanced visual understanding and conversational fluidity in multimodal interactions.
*   **Alissonerdx/LTX-Best-Face-ID** [Link](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)
    *   Author: Alissonerdx | Likes: 235 | Downloads: 0
    *   A specialized LoRA for LTX-Video that preserves identity across generated clips, addressing a key pain point in consistent video generation.
*   **microsoft/Mage-Flow** [Link](https://huggingface.co/microsoft/Mage-Flow)
    *   Author: microsoft | Likes: 124 | Downloads: 0
    *   Microsoft’s latest entry into text-to-image generation, focusing on flow-matching architectures for faster and higher-quality image synthesis.
*   **OpenMOSS-Team/MOSS-Transcribe-Diarize** [Link](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)
    *   Author: OpenMOSS-Team | Likes: 308 | Downloads: 92,265
    *   Combines transcription and speaker diarization in a single pipeline, streamlining audio processing workflows for meeting notes and podcasts.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **moonshotai/Kimi-K2.7-Code** [Link](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
    *   Author: moonshotai | Likes: 1,224 | Downloads: 722,058
    *   Optimized for complex coding tasks, this model leverages compressed tensors to deliver high performance while maintaining reasonable resource usage.
*   **openbmb/MiniCPM-RobotManip** [Link](https://huggingface.co/openbmb/MiniCPM-RobotManip)
    *   Author: openbmb | Likes: 154 | Downloads: 58
    *   A Vision-Language-Action (VLA) model designed specifically for robotic manipulation, representing the growing intersection of LLMs and physical robotics.
*   **nvidia/nemotron-3.5-asr-streaming-0.6b** [Link](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)
    *   Author: nvidia | Likes: 914 | Downloads: 590,230
    *   An extremely lightweight streaming ASR model, ideal for real-time speech recognition on edge devices where latency and size are critical.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** [Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
    *   Author: HauhauCS | Likes: 3,002 | Downloads: 1,997,690
    *   An uncensored, aggressive fine-tune of Qwen 3.6 using Mixture-of-Experts, widely downloaded by users seeking unrestricted creative writing or roleplay.
*   **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** [Link](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)
    *   Author: DavidAU | Likes: 322 | Downloads: 62,842
    *   A heavily modified GGUF version of Qwen 3.6 27B, focusing on "heretic" and uncensored outputs, catering to niche communities bypassing safety filters.
*   **prism-ml/Ternary-Bonsai-27B-gguf** [Link](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
    *   Author: prism-ml | Likes: 945 | Downloads: 432,196
    *   Showcases advanced 2-bit ternary quantization, allowing large 27B models to run efficiently on consumer GPUs with minimal accuracy loss.
*   **prism-ml/Bonsai-27B-gguf** [Link](https://huggingface.co/prism-ml/Bonsai-27B-gguf)
    *   Author: prism-ml | Likes: 596 | Downloads: 1,404,962
    *   The 1-bit quantized variant of Bonsai, demonstrating the community's drive towards extreme compression for local inference of large models.

## 3. Ecosystem Signal
The current ecosystem is defined by the **Qwen 3.6 dominance**, which has spawned a vibrant sub-ecosystem of community fine-tunes, ranging from standard instruction-tuned versions to highly specialized "uncensored" and "aggressive" variants. This suggests a user base actively seeking to bypass safety alignments or customize tone for specific creative or analytical use cases. Simultaneously, **Google’s Gemma-4** series is proving that high-quality, standardized open-weight models can capture significant market share against custom fine-tunes, particularly in the 30B parameter range.

There is a clear trend toward **extreme quantization**. The presence of 1-bit, 2-bit, and ternary quantizations for 27B+ models indicates that hardware constraints are driving innovation in compression techniques, making large-scale local inference more viable than ever. Furthermore, the emergence of **Vision-Language-Action (VLA)** models like MiniCPM-RobotManip signals a maturation of multimodal AI beyond simple perception into active control and robotics. The "Open vs. Proprietary" debate remains relevant, but the data shows that open-weight models with strong community support (like Qwen and Gemma) are outperforming purely proprietary offerings in terms of engagement and adaptability.

## 4. Worth Exploring
1.  **google/gemma-4-31B-it**: With over 12 million downloads and 3,300+ likes, this model represents the gold standard for efficient, high-capability open-weight language models. Its accessibility and performance make it an essential baseline for comparison.
2.  **openbmb/MiniCPM-RobotManip**: As one of the few dedicated Robotics pipeline models in the top 30, it offers a unique look at how LLMs are being adapted for physical world interaction (VLA), a rapidly growing frontier in AI.
3.  **prism-ml/Ternary-Bonsai-27B-gguf**: This model is worth studying for its technical achievement in 2-bit ternary quantization. It demonstrates how far compression has come, allowing near-lossless inference of large models on modest hardware, which is crucial for democratizing AI access.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*