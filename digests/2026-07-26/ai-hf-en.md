# Hugging Face Trending Models Digest 2026-07-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-26 01:49 UTC

---

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the Qwen3.6 lineage, with community-driven uncensored and reasoning-focused variants like `Qwythos-9B` and `Laguna-S-2.1` seeing massive adoption alongside official releases. There is a significant surge in efficient, small-scale multimodal capabilities, evidenced by the high engagement with NVIDIA’s Cosmos3-Edge and OpenBMB’s robotics-focused MiniCPM models. Furthermore, the trend toward extreme quantization (1-bit to NVFP4) remains strong, allowing large models like GLM-5.2 and Bonsai-27B to run efficiently on edge devices while maintaining competitive performance metrics.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 4,446 | Downloads: 707,029
    *   A leading open-weight conversational model leveraging MOE architecture, gaining traction for its balance of reasoning capability and efficiency.
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Author: Qwen | Likes: 2,516 | Downloads: 6,413,105
    *   The base official release from Alibaba, showcasing the widespread popularity of the Qwen3.6 family for general-purpose tasks.
*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | Author: poolside | Likes: 661 | Downloads: 45,260
    *   A specialized text-generation model focused on code and technical documentation, appealing to developers seeking high-quality synthetic data generation.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 3,106 | Downloads: 2,564,264
    *   A robust image-to-text pipeline for OCR that has become a staple for document processing workflows due to its high accuracy and speed.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,465 | Downloads: 1,570,995
    *   A multimodal model fine-tuned for extended context windows (1M tokens), trending for its ability to process long documents and complex visual inputs.
*   **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | Author: microsoft | Likes: 277 | Downloads: 1,156
    *   An emerging text-to-image generator from Microsoft, attracting attention for its potential in creative workflows despite lower initial download numbers.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Author: Kwaipilot | Likes: 166 | Downloads: 841
    *   A specialized code-generation model built on Qwen3.5 MOE, targeting developers who need precise, context-aware coding assistance.
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | Author: openbmb | Likes: 175 | Downloads: 607
    *   Part of the MiniCPM robotics suite, this vision-language-action model is trending among researchers working on embodied AI and robotic control.
*   **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | Author: fdtn-ai | Likes: 163 | Downloads: 5,661
    *   A security-focused small language model designed for detecting adversarial prompts and ensuring safe AI interactions at the edge.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | Author: prism-ai | Likes: 638 | Downloads: 2,114,963
    *   An extremely lightweight 1-bit quantized version of Bonsai-27B, enabling local inference on consumer hardware with minimal performance loss.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 3,091 | Downloads: 1,988,680
    *   A community-driven uncensored fine-tune of the Qwen3.6 architecture, highly popular for roleplay and unrestricted creative writing applications.
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | Author: DavidAU | Likes: 545 | Downloads: 483,845
    *   Another aggressive uncensored variant leveraging MTP (Multi-Token Prediction) and GGUF format for enhanced local performance and freedom.

### 3. Ecosystem Signal
The current landscape is defined by the maturation of the Qwen3.6 and GLM-5 families, which are serving as the backbone for both official releases and a prolific wave of community fine-tunes. There is a clear shift toward "democratized intelligence," where massive parameter counts are being compressed via aggressive quantization techniques like 1-bit GGUF and NVFP4, making models like Bonsai-27B and GLM-5.2 viable for local deployment. The rise of specialized robotics models (MiniCPM series) and edge-optimized TTS (Inflect-Micro-v2) signals a diversification beyond pure chat into embodied AI and real-time audio applications. Additionally, the high volume of "uncensored" or "heretic" forks indicates a sustained demand for unrestricted creative and roleplay capabilities, pushing the boundaries of alignment research. Open-source remains the dominant force, with proprietary-style features like long-context windows (1M+) being rapidly adopted and optimized by the community.

### 4. Worth Exploring
1.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: Essential for anyone interested in running large models locally; its 1-bit quantization offers a compelling case study in minimizing hardware requirements without sacrificing utility.
2.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**: Demonstrates the practical application of ultra-long context windows in a multimodal setting, valuable for analyzing large documents or videos.
3.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**: Represents the cutting edge of Vision-Language-Action (VLA) models, offering insights into how LLMs are being adapted for physical robotics tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*