# Hugging Face Trending Models Digest 2026-07-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-11 01:43 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-07-11

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the widespread adoption of Qwen3.5 and Qwen3.6 architectures, particularly through highly optimized GGUF quantizations that have achieved massive download volumes. There is a significant surge in "thinking" and agentic models, with community fine-tunes leveraging advanced reasoning traces gaining substantial traction. Meanwhile, specialized multimodal capabilities continue to expand, with new releases in video generation and identity-preserving editing drawing attention alongside robust OCR solutions.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **tencent/Hy3**
    *   [Link](https://huggingface.co/tencent/Hy3) | Author: tencent | Likes: 664 | Downloads: 6,923
    *   Tencent’s latest Hunyuan variant offers strong text-generation performance, signaling continued investment in high-quality Chinese-centric LLMs.
*   **zai-org/GLM-5.2**
    *   [Link](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 3,785 | Downloads: 392,655
    *   A major update to the GLM family featuring Mixture-of-Experts (MoE) architecture, driving high engagement due to its balance of efficiency and conversational capability.
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark**
    *   [Link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | Author: deepseek-ai | Likes: 463 | Downloads: 33,088
    *   The official release of DeepSeek V4 Pro, showcasing the company's ongoing advancements in reasoning and code generation capabilities.
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**
    *   [Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | Author: empero-ai | Likes: 761 | Downloads: 184,315
    *   A community fine-tune aiming to replicate Claude-level reasoning in a smaller 9B parameter model, popular for its accessible size and enhanced logic.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **krea/Krea-2-Turbo**
    *   [Link](https://huggingface.co/krea/Krea-2-Turbo) | Author: krea | Likes: 575 | Downloads: 164,525
    *   An accelerated version of Krea-2, offering faster text-to-image generation while maintaining high fidelity, appealing to developers needing speed.
*   **baidu/Unlimited-OCR**
    *   [Link](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 1,921 | Downloads: 1,319,683
    *   Baidu’s powerful OCR model handles complex layouts and diverse languages, explaining its massive download count as a utility staple for document processing.
*   **nvidia/LocateAnything-3B**
    *   [Link](https://huggingface.co/nvidia/LocateAnything-3B) | Author: nvidia | Likes: 2,701 | Downloads: 1,456,269
    *   NVIDIA’s versatile image-text-to-text model excels at precise object localization and grounding, making it essential for advanced vision-language tasks.
*   **Alissonerdx/LTX-Best-Face-ID**
    *   [Link](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Author: Alissonerdx | Likes: 84 | Downloads: 0
    *   A specialized video generation model focusing on identity preservation, addressing a key pain point in current text-to-video pipelines.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **google/tabfm-1.0.0-pytorch**
    *   [Link](https://huggingface.co/google/tabfm-1.0.0-pytorch) | Author: google | Likes: 345 | Downloads: 18,626
    *   Google’s Tabular Foundation Model provides robust zero-shot classification and regression for tabular data, filling a gap in structured data handling.
*   **InternScience/Agents-A1**
    *   [Link](https://huggingface.co/InternScience/Agents-A1) | Author: InternScience | Likes: 471 | Downloads: 25,772
    *   Designed specifically for agentic workflows, this MoE-based model integrates vision and text to support complex multi-step task execution.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **unsloth/Qwen3.6-27B-MTP-GGUF**
    *   [Link](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | Author: unsloth | Likes: 1,036 | Downloads: 2,895,457
    *   A heavily quantized and optimized version of Qwen3.6, leveraging Unsloth’s techniques for maximum inference speed on consumer hardware.
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   [Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 1,976 | Downloads: 1,909,705
    *   The GGUF quantization of the popular Claude-Mythos fine-tune, enabling local deployment of high-reasoning models on standard CPUs/GPUs.
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,623 | Downloads: 2,660,170
    *   An uncensored, aggressive fine-tune of the Qwen3.6 MoE architecture, catering to users seeking unrestricted creative or role-play capabilities.
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   [Link](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | Author: deepreinforce-ai | Likes: 835 | Downloads: 1,085,554
    *   A quantized version of the Ornith model, optimized for efficient text generation while preserving core instructional tuning.

### 3. Ecosystem Signal
The current trend landscape highlights a decisive shift toward **efficiency and accessibility**. The overwhelming download numbers for GGUF quantizations of Qwen3.5/3.6 and DeepSeek V4 variants indicate that the community prioritizes running large-scale models locally on constrained hardware. **Mixture-of-Experts (MoE)** architectures are becoming the standard for balancing performance and cost, as seen in GLM-5.2 and Qwen3.6-35B-A3B. Furthermore, there is a notable rise in **"reasoning-focused" fine-tunes** (e.g., Claude-Mythos, ThinkingCap), suggesting that users are increasingly valuing explicit chain-of-thought capabilities over simple next-token prediction. While proprietary giants like Google and NVIDIA release foundational tools (TabFM, LocateAnything), the vibrant community activity around uncensored and agentic wrappers demonstrates a strong demand for customizable, open-weight alternatives that can be tailored for specific ethical or functional boundaries.

### 4. Worth Exploring
1.  **unsloth/Qwen3.6-27B-MTP-GGUF**: With nearly 3 million downloads, this model represents the peak of current optimization efforts. It is essential for anyone looking to deploy high-performance LLMs locally without sacrificing reasoning quality.
2.  **baidu/Unlimited-OCR**: This model has crossed 1.3 million downloads, proving its utility. For projects involving document digitization or visual data extraction, this is a robust, production-ready choice.
3.  **google/tabfm-1.0.0-pytorch**: As tabular data remains critical in enterprise AI, Google’s entry into foundation models for structured data offers a fresh, powerful approach to classification and regression tasks that outperforms traditional ML methods.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*