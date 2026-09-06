# Hugging Face Trending Models Digest 2026-09-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-06 21:50 UTC

---



# 🤗 Hugging Face Trending Models Digest — September 7, 2026

---

## 1. Today's Highlights

Qwen's 27B parameter family continues to dominate the ecosystem, with a flurry of community quantizations and fine-tunes driving over 10 million downloads on the unsloth GGUF variant alone. Google's timesfm 3.0 emerges as the standout non-language release, capturing attention in time-series forecasting. The multimodal video generation space sees strong momentum from both MiniMax-H3 and LTX-2.5, while DeepSeek's Flash-Vision experimental model leads in weekly likes as a new entrant. The uncensored/abliterated fine-tune subculture remains active around the Qwen3.8-27B base, with multiple community variants accumulating hundreds of thousands of downloads.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp** — https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
  Author: deepseek-ai | ❤️ 737 | ⬇️ 209,191
  DeepSeek's experimental flash vision model leads weekly likes, signaling strong community interest in their next-gen multimodal direction.

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Author: Qwen | ❤️ 14,121 | ⬇️ 6,190,807
  The flagship open-weight 27B model from Qwen remains the most-liked and most-downloaded model on the list, anchoring a vast ecosystem of variants.

- **zai-org/GLM-5.3-Flash** — https://huggingface.co/zai-org/GLM-5.3-Flash
  Author: zai-org | ❤️ 2,098 | ⬇️ 761,364
  GLM's flash-optimized 5.3 variant brings fast multimodal inference to the Chinese open-weight ecosystem.

- **zai-org/GLM-5.3** — https://huggingface.co/zai-org/GLM-5.3
  Author: zai-org | ❤️ 1,733 | ⬇️ 410,074
  The base GLM-5.3 MoE model continues steady adoption for general-purpose text generation.

- **Qwen/Qwen3.8-Flash-Next** — https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  Author: Qwen | ❤️ 4,941 | ⬇️ 432,966
  Qwen's next-gen flash-optimized multimodal model targeting faster inference with competitive quality.

- **MiniMaxAI/MiniMax-H3** — https://huggingface.co/MiniMaxAI/MiniMax-H3
  Author: MiniMaxAI | ❤️ 4,961 | ⬇️ 4,986,349
  MiniMax's latest open model shows strong download velocity, reflecting growing appetite for Chinese open-weight LLMs.

- **tencent/Hy4-preview** — https://huggingface.co/tencent/Hy4-preview
  Author: tencent | ❤️ 445 | ⬇️ 6,441
  Tencent's Hunyuan 4 preview introduces a new architecture to the open-weight landscape.

- **IFM/K2-Horizon-MoVA-36B-A4B** — https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B
  Author: IFM | ❤️ 186 | ⬇️ 1,723
  A large MoE model from IFM pushing the 36B parameter frontier with an A4B expert configuration.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Author: Lightricks | ❤️ 2,953 | ⬇️ 1,526,928
  A diffusion-based image-to-video model with text, image, and video-to-video support—widely downloaded for creative video generation.

- **google/timesfm-3.0-pytorch** — https://huggingface.co/google/timesfm-3.0-pytorch
  Author: google | ❤️ 498 | ⬇️ 144,455
  Google's latest time-series forecasting model, the top non-LLM release this week, gaining traction in the forecasting community.

- **BreezeBlue/Breeze-TTS-2** — https://huggingface.co/BreezeBlue/Breeze-TTS-2
  Author: BreezeBlue | ❤️ 460 | ⬇️ 6,357
  An open text-to-speech model rounding out the audio generation segment.

- **OpenVDN/vdn-minimax-h3** — https://huggingface.co/OpenVDN/vdn-minimax-h3
  Author: OpenVDN | ❤️ 209 | ⬇️ 0
  A video-diffusion finetune of MiniMax-H3 extending its capabilities, though still accumulating adoption.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **sentence-transformers/all-MiniLM-L6-v2** — https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
  Author: sentence-transformers | ❤️ 5,565 | ⬇️ 253,029,336
  The perennial favorite embedding model—over 253M downloads and still the most-used sentence similarity model on the platform.

- **openai/clip-vit-base-patch32** — https://huggingface.co/openai/clip-vit-base-patch32
  Author: openai | ❤️ 1,211 | ⬇️ 20,579,479
  A foundational CLIP vision encoder with over 20M downloads, still widely used for zero-shot image classification and retrieval.

- **facebook/mms-300m** — https://huggingface.co/facebook/mms-300m
  Author: facebook | ❤️ 263 | ⬇️ 12,464
  Meta's multilingual speech model supporting broad cross-lingual speech recognition and transcription.

- **dealignai/GLM-5.3-CYBERSECURITY-FP8** — https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8
  Author: dealignai | ❤️ 137 | ⬇️ 15,648
  A cybersecurity-specialized FP8-quantized GLM-5.3 variant with refusal mechanisms removed for specialized use.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **unsloth/Qwen3.8-27B-GGUF** — https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
  Author: unsloth | ❤️ 3,580 | ⬇️ 10,311,462
  The most-downloaded model on this list—unsloth's GGUF quantization of Qwen3.8-27B, offering efficient local inference.

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
  Author: ISTA-DASLab | ❤️ 465 | ⬇️ 348,389
  A novel GSQ+RCO mixed-precision quantization from ISTA-DASLab, pushing the boundaries of efficient model compression.

- **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** — https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
  Author: JonathanColetti | ❤️ 1,000 | ⬇️ 2,499,368
  A popular uncensored GGUF variant with strong community adoption for unrestricted generation.

- **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** — https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
  Author: HauhauCS | ❤️ 977 | ⬇️ 1,568,315
  An aggressive MTP-augmented uncensored finetune, appealing to power users seeking maximum capability.

- **OBLITERATUS/Qwen3.8-27B-OBLITERATED** — https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED
  Author: OBLITERATUS | ❤️ 1,106 | ⬇️ 995,160
  The abliterated variant (refusal-removal technique) available in GGUF and MLX formats, notable for its cross-framework support.

- **orcarouter/Qwen3.8-27B-Uncensored-GGUF** — https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF
  Author: orcarouter | ❤️ 748 | ⬇️ 287,720
  Another uncensored GGUF community variant, contributing to the competitive landscape of unfiltered Qwen forks.

- **unsloth/Qwen3.8-Flash-Next-GGUF** — https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF
  Author: unsloth | ❤️ 809 | ⬇️ 823,733
  Unsloth's quantized release of the Flash-Next model, enabling efficient local deployment of Qwen's latest architecture.

- **nvidia/Qwen3.8-Flash-Next-NVFP4** — https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4
  Author: nvidia | ❤️ 114 | ⬇️ 13,321
  NVIDIA's FP4-quantized variant using Model Optimizer, targeting NVIDIA GPU acceleration with extreme low-precision inference.

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  Author: DavidAU | ❤️ 245 | ⬇️ 211,018
  An extensively merged multi-objective fine-tune combining coding, creative, and uncensored capabilities into a single GGUF release.

---

## 3. Ecosystem Signal

The Qwen3.8-27B family is the defining ecosystem phenomenon this week, accounting for roughly half the trending list through a dense network of GGUF quantizations, uncensored fine-tunes, abliterated variants, and MTP-augmented merges. Unsloth's quantization pipeline continues to dominate distribution volume, with their base GGUF variant alone surpassing 10 million downloads. The Chinese open-weight camp is intensifying: Qwen, GLM, DeepSeek, and Tencent all have active releases, each competing on parameter efficiency and multimodal breadth. MiniMax-H3's near-5M downloads suggest strong demand for alternatives to the Qwen/DeepSeek duopoly. On the quantization front, NVIDIA's FP4 and ISTA-DASLab's GSQ-RCO represent a shift toward ultra-low-precision inference tailored for specific hardware, moving beyond the one-size-fits-all GGUF approach. The "uncensored/abliterated" subculture remains a persistent and well-populated segment, with multiple variants of the same base model coexisting. Meanwhile, Google's timesfm 3.0 signals expanding interest in specialized domain models beyond general-purpose LLMs.

---

## 4. Worth Exploring

- **google/timesfm-3.0-pytorch** — The most significant non-LLM release this week. Google's time-series forecasting models have consistently proven production-ready, and version 3.0 likely brings meaningful architecture improvements. Essential for anyone working with temporal data.

- **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp** — Leading in weekly likes despite being experimental, this model hints at DeepSeek's next multimodal direction. Worth studying for its flash inference optimizations and vision capabilities.

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — A novel quantization approach (GSQ + RCO mixed precision) from a research lab. Worth examining for practitioners interested in pushing compression beyond standard GGUF methods while preserving model quality.

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*