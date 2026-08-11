# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 00:56 UTC

---



# 🤗 Hugging Face Trending Models Digest
**Date: 2026-08-11 | Top 30 by Weekly Likes**

---

## 1. Today's Highlights

The most dominant story this week is **MiniMax-H3**, the image-text-to-video model from MiniMaxAI, which has spawned an entire ecosystem of community adapters, ComfyUI workflows, LoRA finetunes, and quantized GGUF variants — making it the most forked model in the trending list. Meanwhile, **Kimi-K3** from moonshotai continues to accumulate massive engagement with over 10,000 likes and 1.5 million downloads, while **Baidu Unlimited-OCR** leads in raw download volume at nearly 3 million. The return of **DeepSeek-V4-Flash** (both base and GGUF) signals sustained community appetite for strong open-weight LLMs, and **FLUX.1-dev** remains the benchmark text-to-image model by likes.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **moonshotai/Kimi-K3**
  [🔗 Link](https://huggingface.co/moonshotai/Kimi-K3)
  Author: moonshotai | Likes: 10,470 | Downloads: 1,510,032
  A high-capacity image-text-to-text conversational model that has become one of the most-liked models on the platform this week, likely driven by strong multilingual and reasoning benchmarks.

- **deepseek-ai/DeepSeek-V4-Flash-0731**
  [🔗 Link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
  Author: deepseek-ai | Likes: 3,059 | Downloads: 954,441
  DeepSeek's latest Flash-class text-generation model offering strong performance at reduced cost, driving massive community adoption and fine-tune activity.

- **unsloth/DeepSeek-V4-Flash-0731-GGUF**
  [🔗 Link](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)
  Author: unsloth | Likes: 637 | Downloads: 199,167
  An Unsloth-quantized GGUF release of DeepSeek-V4-Flash, enabling efficient local inference and contributing to the model's widespread accessibility.

- **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**
  [🔗 Link](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)
  Author: DavidAU | Likes: 1,861 | Downloads: 2,439,083
  A heavily community-driven uncensored GGUF fine-tune of Qwen3.6-27B with MTP extensions, reflecting strong demand for unrestricted local chat models.

- **LiquidAI/LFM2.5-2.6B**
  [🔗 Link](https://huggingface.co/LiquidAI/LFM2.5-2.6B)
  Author: LiquidAI | Likes: 490 | Downloads: 89,680
  A novel liquid-based 2.6B parameter language model exploring alternative architectures beyond standard transformer designs.

- **LiquidAI/LFM2.5-2.6B-GGUF**
  [🔗 Link](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)
  Author: LiquidAI | Likes: 184 | Downloads: 89,611
  The GGUF-quantized counterpart enabling efficient local deployment of the LiquidAI LFM2.5 architecture.

- **inclusionAI/Ling-3.0-flash**
  [🔗 Link](https://huggingface.co/inclusionAI/Ling-3.0-flash)
  Author: inclusionAI | Likes: 287 | Downloads: 5,261
  A conversational text-generation model with a custom code pipeline, targeting multilingual and inclusive applications.

- **deepgrove/maple-preview**
  [🔗 Link](https://huggingface.co/deepgrove/maple-preview)
  Author: deepgrove | Likes: 311 | Downloads: 1,344
  A mixture-of-experts causal LM in preview form, signaling the growing community interest in MoE architectures for efficient scaling.

- **mistralai/Shieldstral-1.0-3B**
  [🔗 Link](https://huggingface.co/mistralai/Shieldstral-1.0-3B)
  Author: mistralai | Likes: 221 | Downloads: 6,343
  Mistral's latest safety/shield model (3B) designed for content moderation and guardrail applications, part of their expanding security-focused lineup.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **MiniMaxAI/MiniMax-H3**
  [🔗 Link](https://huggingface.co/MiniMaxAI/MiniMax-H3)
  Author: MiniMaxAI | Likes: 3,430 | Downloads: 47,468
  The original image-text-to-video generation model that has become the week's most-discussed release, praised for its quality and sparking a wave of community extensions.

- **Comfy-Org/MiniMax-H3**
  [🔗 Link](https://huggingface.co/Comfy-Org/MiniMax-H3)
  Author: Comfy-Org | Likes: 1,146 | Downloads: 6,009,639
  A ComfyUI-compatible single-file packaging of MiniMax-H3, enabling seamless integration into ComfyUI workflows and driving enormous download numbers.

- **Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**
  [🔗 Link](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)
  Author: Abiray | Likes: 162 | Downloads: 530,052
  A heavily quantized (NVFP4/INT4/INT8) variant of MiniMax-H3 using ConvRot optimizations, making high-quality video generation accessible on lower-end hardware.

- **lightx2v/Minimax-h3-Turbo**
  [🔗 Link](https://huggingface.co/lightx2v/Minimax-h3-Turbo)
  Author: lightx2v | Likes: 259 | Downloads: 15,087
  A turbo-optimized version of MiniMax-H3 for faster image-to-video and text-to-video generation, catering to users prioritizing speed.

- **lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA**
  [🔗 Link](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA)
  Author: lightx2v | Likes: 116 | Downloads: 268
  A LoRA adapter that rewrites and optimizes input prompts before they reach MiniMax-H3, improving output quality through better prompt engineering.

- **black-forest-labs/FLUX.1-dev**
  [🔗 Link](https://huggingface.co/black-forest-labs/FLUX.1-dev)
  Author: black-forest-labs | Likes: 14,076 | Downloads: 480,762
  The flagship text-to-image model from Black Forest Labs that remains the most-liked generation model on the platform, setting the quality bar for open-weight image generation.

- **baidu/Unlimited-OCR**
  [🔗 Link](https://huggingface.co/baidu/Unlimited-OCR)
  Author: baidu | Likes: 4,002 | Downloads: 2,921,751
  Baidu's OCR model for image-to-text extraction, achieving massive adoption due to its strong multilingual recognition and practical utility across downstream pipelines.

- **meta-models/Muse-Glimmer-30B**
  [🔗 Link](https://huggingface.co/meta-models/Muse-Glimmer-30B)
  Author: meta-models | Likes: 715 | Downloads: 0
  A 30B-parameter image-text-to-text conversational model from the Muse lineage, bringing high-capacity multimodal reasoning to the open-weight space.

- **unsloth/Muse-Glimmer-30B-GGUF**
  [🔗 Link](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)
  Author: unsloth | Likes: 207 | Downloads: 0
  The GGUF-quantized variant of Muse-Glimmer-30B, enabling efficient local inference for this large multimodal model.

- **endless-frontier/BigBang-v1**
  [🔗 Link](https://huggingface.co/endless-frontier/BigBang-v1)
  Author: endless-frontier | Likes: 152 | Downloads: 617
  A Qwen3.5 MoE-based image-text-to-text conversational model offering a novel mixture-of-experts approach to multimodal language tasks.

- **nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**
  [🔗 Link](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)
  Author: nvidia | Likes: 297 | Downloads: 597
  NVIDIA's 11B voice-capable conversational model leveraging NemotronLabs research, representing NVIDIA's push into end-to-end voice AI.

---

### 🔧 Specialized Models (code, math, medical, embeddings)

- **SyzygyResearch/Mach-1-Additive-35B**
  [🔗 Link](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B)
  Author: SyzygyResearch | Likes: 115 | Downloads: 2,129
  A 35B-parameter additive mixture-of-experts model using ternary weights, exploring efficient large-scale MoE architectures for general-purpose reasoning.

- **realrebelai/MiniMax-H3_GGUFs**
  [🔗 Link](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)
  Author: realrebelai | Likes: 192 | Downloads: 174,862
  A collection of GGUF-quantized MiniMax-H3 variants, providing multiple quantization options for users balancing quality and hardware constraints.

- **sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**
  [🔗 Link](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4)
  Author: sakamakismile | Likes: 152 | Downloads: 0
  A ComfyUI-native NVFP4 quantized hybrid combining Qwen3-VL-32B vision-language capabilities with MiniMax-H3 video generation, targeting integrated multimodal pipelines.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **larryvrh/MiniMax-H3-Turbo-Lora**
  [🔗 Link](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)
  Author: larryvrh | Likes: 599 | Downloads: 0
  A LoRA adapter adding turbo-speed inference to MiniMax-H3, targeting users who need faster video generation without full model replacement.

- **drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**
  [🔗 Link](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)
  Author: drbaph | Likes: 251 | Downloads: 0
  A ComfyUI-integrated LoRA implementation of the MiniMax-H3 Turbo adapter, bridging the gap between adapter weights and production workflows.

- **SexGod1979/PinkCherry_MiniMax-H3**
  [🔗 Link](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)
  Author: SexGod1979 | Likes: 250 | Downloads: 0
  An Apache-2.0 licensed text-to-video fine-tune of MiniMax-H3, demonstrating the model's adaptability under permissive licensing.

- **meta-models/Muse-Glimmer-30B-GGUF**
  [🔗 Link](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF)
  Author: meta-models | Likes: 148 | Downloads: 0
  A GGUF-quantized Muse-Glimmer-30B from the original author, providing an efficient inference path alongside the Unsloth variant.

- **ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**
  [🔗 Link](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)
  Author: ethanfel | Likes: 440 | Downloads: 0
  An INT8-quantized ComfyUI-ready variant combining Qwen3-VL-32B vision encoding with MiniMax-H3 video generation using ConvRot optimizations.

- **Kijai/MiniMax-H3_comfy**
  [🔗 Link](https://huggingface.co/Kijai/MiniMax-H3_comfy)
  Author: Kijai | Likes: 256 | Downloads: 0
  A ComfyUI workflow integration from a well-known community contributor, lowering the barrier to running MiniMax-H3 in production-like setups.

- **Kijai/MiniMax-H3-experimental**
  [🔗 Link](https://huggingface.co/Kijai/MiniMax-H3-experimental)
  Author: Kijai | Likes: 184 | Downloads: 0
  An experimental ComfyUI build exploring alternative configurations and optimizations for MiniMax-H3 video generation.

---

## 3. Ecosystem Signal

The dominant narrative this week is the **MiniMax-H3 video generation ecosystem**. Since its release, MiniMax-H3 has spawned over a dozen community variants spanning ComfyUI integrations, LoRA adapters, turbo-speed optimizations, and multiple quantization paths (GGUF, NVFP4, INT4, INT8). This explosion of derivative work signals both strong model quality and a community actively pushing the boundaries of what's possible with open video generation. The **GGUF quantization wave** continues unabated, with Unsloth, realrebelai, and individual contributors all releasing compressed variants — reflecting sustained demand for accessible local inference. **DeepSeek's** latest Flash model remains a top-performing open-weight LLM choice, while **Kimi-K3** demonstrates that Chinese-language models continue to command significant global attention. The emergence of **liquid-state and ternary-weight architectures** (LiquidAI, Syzygy Mach-1) hints at exploration beyond standard transformer scaling. Meanwhile, **FLUX.1-dev** and **Baidu Unlimited-OCR** maintain their positions as foundational infrastructure models, proving that utility and reliability drive adoption as much as novelty.

---

## 4. Worth Exploring

- **moonshotai/Kimi-K3** — With over 10,000 likes and 1.5M downloads, Kimi-K3 is clearly resonating with the community. Its strong multimodal (image-text-to-text) capabilities make it a compelling alternative for conversations that benefit from visual understanding.

- **baidu/Unlimited-OCR** — Nearly 3 million downloads speak for themselves. If you're building any pipeline that involves document or scene text extraction, this is a production-grade model worth evaluating before reaching for proprietary APIs.

- **Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot** — This quantized variant of MiniMax-H3 is a compelling case study in making high-end video generation accessible on consumer hardware. The NVFP4 + INT4/INT8 hybrid approach with ConvRot optimizations represents the kind of engineering ingenuity the community is bringing to open video models.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*