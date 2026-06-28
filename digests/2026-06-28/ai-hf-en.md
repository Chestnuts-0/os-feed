# Hugging Face Trending Models Digest 2026-06-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-28 02:32 UTC

---

# Hugging Face Trending Models Digest
**Date:** June 28, 2026

## 1. Today's Highlights
The landscape is dominated by the aggressive adoption of Mixture-of-Experts (MoE) architectures, particularly within the Qwen and GLM lineages, which are seeing massive download volumes due to their efficiency. Community-driven quantization efforts, specifically GGUF formats, have surged in popularity, with several uncensored and specialized fine-tunes outperforming base models in user engagement. There is also a clear trend toward "agentic" capabilities, where models are being optimized not just for chat, but for complex tool-use and code execution workflows.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   Author: zai-org | Likes: 2,686 | Downloads: 98,994
    *   A leading conversational text-generation model leveraging GLM MoE technology, trending for its strong performance in general-purpose dialogue.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   Author: deepreinforce-ai | Likes: 332 | Downloads: 20,266
    *   A highly accessible, quantized version of the 35B Ornith model, gaining traction for running large-scale inference locally via GGUF.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   Author: WeiboAI | Likes: 742 | Downloads: 57,521
    *   A compact 3B model based on Qwen2, specializing in mathematical reasoning and logic, offering high efficiency for smaller hardware.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   Author: baidu | Likes: 1,141 | Downloads: 212,760
    *   An image-to-text pipeline focused on high-accuracy optical character recognition, widely used for document processing tasks.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   Author: nvidia | Likes: 2,409 | Downloads: 570,466
    *   A powerful vision-language model from NVIDIA that excels at precise object localization and grounding within images.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   Author: nvidia | Likes: 719 | Downloads: 61,857
    *   A lightweight, streaming automatic speech recognition model optimized for real-time audio transcription applications.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   Author: Qwen | Likes: 359 | Downloads: 18,872
    *   A specialized MoE model designed for agentic workflows, enabling complex multi-step task planning and execution.
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   Author: microsoft | Likes: 365 | Downloads: 6,447
    *   A small but potent model fine-tuned for long-context understanding, allowing efficient processing of extensive documents.
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
    *   Author: Chunjiang-Intelligence | Likes: 113 | Downloads: 1,328
    *   A DeepSeek V4 variant specifically tuned for cybersecurity applications, focusing on threat detection and code analysis.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 2,279 | Downloads: 3,331,475
    *   An extremely popular uncensored GGUF fine-tune of Qwen3.6, noted for its massive download count and community demand for unrestricted generation.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   Author: yuxinlu1 | Likes: 2,427 | Downloads: 536,130
    *   A heavily quantized GGUF version of Gemma 4, optimized for coding tasks and terminal interaction via Llama.cpp.
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   Author: unsloth | Likes: 426 | Downloads: 125,230
    *   An Unsloth-optimized quantization of GLM-5.2, providing faster inference speeds for local deployment.

## 3. Ecosystem Signal
The current ecosystem is defined by the maturation of Mixture-of-Experts (MoE) models as the standard for balancing performance and cost. Families like Qwen (specifically versions 3.5/3.6) and GLM are gaining significant momentum, with NVIDIA’s NVFP4 optimizations indicating a push toward hardware-specific efficiency. Open-weight models are dominating the trending charts, particularly when paired with community quantizations. GGUF formats remain the preferred choice for local deployment, with uncensored and agentic fine-tunes seeing disproportionate engagement compared to base models. This suggests users are prioritizing flexibility and specific capability overrides over raw base model fidelity. The rise of "agentic" tags highlights a shift from passive chatbots to active tools capable of executing complex, multi-stage workflows.

## 4. Worth Exploring
1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: Essential for developers needing precise visual grounding; its high download count validates its utility in RAG and computer vision pipelines.
2.  **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**: Critical for building autonomous agents; this model represents the cutting edge of MoE architectures tailored for tool use and planning.
3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: Despite its controversial nature, its massive adoption signals a strong market demand for unrestricted creative and roleplay capabilities in local LLM deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*