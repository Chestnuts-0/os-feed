# Hugging Face Trending Models Digest 2026-07-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-29 01:41 UTC

---

# Hugging Face Trending Models Digest | 2026-07-29

## Today's Highlights  
Kimi-K3 and Luna-S variants continue to dominate multimodal and text-generation spaces, with MoonshotAI and Poolside releasing optimized versions. The GGUF quantization trend remains strong, especially for Qwen3.6 and Bonsai families, enabling efficient edge deployment. Notably, Microsoft’s Mage-Flow and Fara models are gaining traction in creative and tool-use applications. Community-driven uncensored fine-tunes (e.g., DavidAU, HauhauCS) show high engagement despite controversy.

---

## 🧠 Language Models  

**[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
*Author: zai-org | Likes: 4,605 | Downloads: 1,267,198*  
A conversational Moe-based LLM gaining rapid adoption for its balance of performance and efficiency; widely downloaded for chat and reasoning tasks.

**[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
*Author: prism-ml | Likes: 679 | Downloads: 2,339,098*  
A 1-bit quantized conversational LLM optimized for llama.cpp, driving huge download volumes due to ultra-low memory footprint and fast inference on consumer hardware.

**[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**  
*Author: upstage | Likes: 645 | Downloads: 4,804*  
An open-weight 250B model competing with top-tier proprietary systems; notable for its size and community interest in large-scale language modeling.

---

## 🎨 Multimodal & Generation  

**[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
*Author: moonshotai | Likes: 8,007 | Downloads: 99,214*  
A high-performing image-to-text model leading in likes and downloads; excels at visual reasoning and document understanding with compressed tensor support.

**[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
*Author: baidu | Likes: 3,420 | Downloads: 2,694,935*  
State-of-the-art OCR engine supporting long-form document processing; massive downloads reflect industry demand for scalable text extraction from images/PDFs.

**[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**  
*Author: microsoft | Likes: 416 | Downloads: 2,007*  
Diffusion-based text-to-image generator showing promise in artistic workflows; part of Microsoft’s broader vision-audio-language integration push.

---

## 🔧 Specialized Models  

**[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**  
*Author: Kwaipilot | Likes: 287 | Downloads: 6,275*  
Code-specialized MoE model with image-text capabilities; emerging as a go-to for developers needing multimodal code assistance or debugging tools.

**[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**  
*Author: owensong | Likes: 265 | Downloads: 645*  
Ultra-lightweight TTS for CPU/edge devices; ideal for embedded systems where latency and power consumption matter more than audio fidelity.

---

## 📦 Fine-tunes & Quantizations  

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
*Author: HauhauCS | Likes: 3,159 | Downloads: 1,855,505*  
Uncensored Qwen3.6 fine-tune with aggressive decoding strategy; high download volume reflects demand for unrestricted RLHF alternatives in research and personal use.

**[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
*Author: prism-ml | Likes: 1,085 | Downloads: 665,427*  
2-bit quantified version of Bonsai 27B trading slight accuracy loss for significant speedup; popular among hobbyists running locally without GPUs.

**[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**  
*Author: unsloth | Likes: 232 | Downloads: 129,601*  
Optimized GGUF conversion of Laguna-S-2.1 via Unsloth framework; combines training efficiency gains with runtime compatibility for vLLM and llama.cpp ecosystems.

---

## Ecosystem Signal  

The multilingual, open-source AI ecosystem is accelerating around **Qwen**, **Laguna**, and **Kimi** families — all heavily represented in both base models and quantized/community forks. Open-weight models now dominate download charts even against proprietary contenders, signaling strong developer preference for transparency and customization. **GGUF quantization** has become the de facto standard for local deployment, with multiple variants per major model family indicating mature tooling and active contributor cycles. There’s also a clear bifurcation: one segment focuses on production-ready, safety-aligned models (e.g., baidu/UnlimitedOCR), while another thrives on experimental, unrestricted outputs (e.g., “uncensored” Qwen variants). Edge AI continues to gain ground, evidenced by rising TTS and OVA micro-models optimized for CPU inference. Finally, Microsoft’s entry into creative generation pipelines suggests enterprise players are actively diversifying beyond pure NLP into generative media.

---

## Worth Exploring  

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — With over 6M downloads, this MOE-powered foundation model offers exceptional value for fine-tuning or direct use across languages and modalities. Its tagset indicates strong conversational and image-text alignment — perfect for building custom agents.

2. **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** — Combines GLM-5.2’s linguistic strength with NVFP4 quantization for vision-capable lightweight inference. Ideal if you need multimodal output near real-time constraints without full VGPUs.

3. **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — Though zero downloads yet, its focus on identity-preserving image editing within ComfyUI makes it promising for creative workflows requiring controlled transformations — worth watching as diffusion LoRA techniques evolve rapidly this year.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*