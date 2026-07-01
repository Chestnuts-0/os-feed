# Hugging Face Trending Models Digest 2026-07-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-01 02:33 UTC

---

# Hugging Face Trending Models Digest
**Date:** July 1, 2026

### 1. Today's Highlights
The current landscape is dominated by the widespread adoption of NVIDIA’s Model Optimizer for NVFP4 quantization, significantly boosting the accessibility of large-scale models like GLM-5.2 and Qwen3.6. Concurrently, the "agentic" paradigm continues to surge, with community-driven fine-tunes such as *Qwythos* and *Ornith* demonstrating high engagement through specialized reasoning and tool-use capabilities. Additionally, visual generation remains robust, anchored by the Krea-2 ecosystem and emerging 3D-realism LoRAs, while OCR utilities like *Unlimited-OCR* show strong practical utility with massive download volumes.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,064 | Downloads: 142,547
    *   A leading conversational model leveraging MOE architecture, currently serving as the base for numerous optimization efforts.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | Author: deepreinforce-ai | Likes: 553 | Downloads: 157,418
    *   A highly optimized GGUF version of Ornith 1.0, popular for its balance of size and performance on consumer hardware.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,364 | Downloads: 3,017,678
    *   An uncensored, aggressive fine-tune of Qwen3.6 that has seen explosive usage for unrestricted roleplay and creative writing.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,498 | Downloads: 429,056
    *   A powerful image-text-to-text pipeline specifically tuned for high-accuracy optical character recognition across diverse languages.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 421 | Downloads: 45,668
    *   The accelerated variant of Krea-2, offering faster text-to-image generation while maintaining high aesthetic fidelity.
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | Author: fal | Likes: 128 | Downloads: 0
    *   A new LoRA adapter for LTX-2.3 aimed at enhancing photorealistic 3D consistency in video generation tasks.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 | Likes: 890 | Downloads: 257,216
    *   A heavily tuned Gemma-4 variant focused on agentic coding workflows and terminal interaction, showing exceptional community uptake.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,524 | Downloads: 800,597
    *   An NVIDIA-developed model excelling in image feature extraction and spatial understanding, widely used for grounding tasks.
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** | Author: Chunjiang-Intelligence | Likes: 134 | Downloads: 1,519
    *   A specialized DeepSeek V4 fine-tune targeting cybersecurity applications and secure code analysis.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,058 | Downloads: 970,663
    *   A massive-context (1M token) GGUF quantization of Qwen3.5, designed for long-document reasoning and archival analysis.
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | Author: nvidia | Likes: 390 | Downloads: 5,495,402
    *   An official NVIDIA NVFP4 quantized version of Qwen3.6, achieving record-breaking download numbers due to hardware efficiency.
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth | Likes: 484 | Downloads: 180,394
    *   A fast-loading GGUF conversion of GLM-5.2 optimized for local inference via Unsloth’s techniques.

### 3. Ecosystem Signal
The mid-2026 Hugging Face ecosystem is defined by the maturation of **efficient inference formats** and **agentic specialization**. NVIDIA’s NVFP4 format has become a de facto standard for deploying large MoE models (like GLM-5.2 and Qwen3.6) on consumer-grade GPUs, evidenced by the millions of downloads for their quantized variants. Simultaneously, there is a clear shift from general-purpose chatbots to **domain-specific agents**; models like *Ornith* and *Qwythos* highlight a demand for extended context windows (up to 1M tokens) and tool-use capabilities. The "uncensored" and "abliterated" categories remain vibrant but are increasingly niche compared to the mainstream adoption of safety-aligned, highly capable base models. Furthermore, the rise of *Krea-2* and *LTX-2.3* LoRAs indicates that generative video and image pipelines are moving toward modular, composable architectures rather than monolithic models.

### 4. Worth Exploring
1.  **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**: Essential for understanding how hardware-aware quantization (NVFP4) is reshaping local LLM deployment, offering a glimpse into future efficient inference standards.
2.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**: A prime example of pushing context limits to 1M tokens, useful for researchers studying long-context retention and retrieval-augmented generation (RAG) efficiency.
3.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**: Demonstrates the cutting edge of agentic coding fine-tunes, providing a compact yet powerful alternative for autonomous software development workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*