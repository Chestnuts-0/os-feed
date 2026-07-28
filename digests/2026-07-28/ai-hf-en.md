# Hugging Face Trending Models Digest 2026-07-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-28 01:40 UTC

---

# Hugging Face Trending Models Digest  
**Date:** 2026-07-28  

---

## **Today's Highlights**  
Multimodal models, particularly Qwen3.5-family variants, dominate today’s list with high download volumes and strong community engagement. GGUF quantizations of large models (e.g., Qwen3.6, Luna-S) are driving accessibility for local inference, while Microsoft’s text-to-image tools gain traction in creative workflows. A notable trend is the rise of “uncensored” fine-tunes on top-tier architectures, reflecting demand for unrestricted LLMs in developer communities.  

---

## **Trending Models**  

### **🧠 Language Models (LLMs, chat models, instruction-tuned)**  
1. **Qwen/Qwen3.6-35B-A3B** ([Link](https://huggingface.co/Qwen/Qwen3.6-35B-A3B))  
   Author: Qwen | Likes: 2,546 | Downloads: 6,187,853  
   Why trending: Massive open-weight MoE model with conversational and multimodal capabilities, now a benchmark for high-performance open LLMs.  

2. **poolside/Laguna-S-2.1** ([Link](https://huggingface.co/poolside/Laguna-S-2.1))  
   Author: poolside | Likes: 758 | Downloads: 63,605  
   Why trending: High-quality text-generation model with strong coherence and efficiency, gaining follow-on quantizations (GGUF/NVFP4).  

3. **prism-ml/Ternary-Bonsai-27B-gguf** ([Link](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf))  
   Author: prism-ml | Likes: 1,069 | Downloads: 648,938  
   Why trending: Extremely compact 2-bit quantized conversational model enabling fast, low-resource deployment via llama.cpp.  

---

### **🎨 Multimodal & Generation (image, video, audio, text-to-X)**  
1. **thinkingmachines/Inkling** ([Link](https://huggingface.co/thinkingmachines/Inkling))  
   Author: thinkingmachines | Likes: 1,604 | Downloads: 36,196  
   Why trending: Emerging multimodal chat model with strong image-text reasoning, ideal for conversational AI applications.  

2. **microsoft/Mage-Flow** ([Link](https://huggingface.co/microsoft/Mage-Flow))  
   Author: microsoft | Likes: 388 | Downloads: 1,691  
   Why trending: High-fidelity text-to-image model focused on creativity and editing, part of Microsoft’s growing diffusion ecosystem.  

3. **moonshotai/Kimi-K3** ([Link](https://huggingface.co/moonshotai/Kimi-K3))  
   Author: moonshotai | Likes: 6,249 | Downloads: 2,850  
   Why trending: Highly liked compressed multimodal model with efficient feature extraction, likely optimized for edge deployment.  

---

### **🔧 Specialized Models (code, math, medical, embeddings)**  
1. **Kwaipilot/KAT-Coder-V2.5-Dev** ([Link](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev))  
   Author: Kwaipilot | Likes: 241 | Downloads: 5,312  
   Why trending: Code-specialized model based on Qwen3.5 MoE architecture, tailored for developer-centric generation tasks.  

2. **baidu/Unlimited-OCR** ([Link](https://huggingface.co/baidu/Unlimited-OCR))  
   Author: baidu | Likes: 3,331 | Downloads: 2,645,773  
   Why trending: Industry-leading OCR pipeline with massive adoption, enabling robust document understanding at scale.  

---

### **📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**  
1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))  
   Author: HauhauCS | Likes: 3,133 | Downloads: 1,894,395  
   Why trending: Popular uncensored GGUF version of Qwen3.6, catering to users seeking unfiltered generative control.  

2. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))  
   Author: empero-ai | Likes: 2,490 | Downloads: 1,336,263  
   Why trending: High-context (1M token) GGUF fine-tune blending Claude-style reasoning with Qwen3.5 base, highly sought after for long-document tasks.  

3. **unsloth/Laguna-S-2.1-GGUF** ([Link](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF))  
   Author: unsloth | Likes: 218 | Downloads: 117,456  
   Why trending: Efficiently quantized Laguna variant leveraging unsloth’s optimization techniques for VLLM and local inference.  

---

## **Ecosystem Signal**  
The open-weight LLM ecosystem continues to mature rapidly, with Qwen3.5 and Qwen3.6 families leading both innovation and adoption. Community-driven quantization efforts—especially GGUF variants—are critical to democratizing access to large models, evident in high-download uncensored and fine-tuned releases. Meanwhile, proprietary models from MoonshotAI and Baidu remain influential but show lower download velocity compared to open alternatives. Notably, multimodal integration is no longer optional; even code and OCR models increasingly incorporate vision inputs, signaling a shift toward unified text-image reasoning platforms. The surge in NVFP4 and 2-bit quantizations also indicates maturing toolchains for edge and real-time deployment.  

---

## **Worth Exploring**  
1. **Qwen/Qwen3.6-35B-A3B** – As the most downloaded model by far, it represents the current state-of-the-art in open-weight multimodal conversation. Ideal for benchmarking or building enterprise-grade assistants.  
2. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** – For long-context reasoning needs (e.g., legal docs, codebases), this 9B GGUF model offers exceptional value with minimal hardware overhead.  
3. **thinkingmachines/Inkling** – A promising newcomer in multimodal chat; its balance of performance and accessibility makes it worth prototyping with for conversational AI applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*