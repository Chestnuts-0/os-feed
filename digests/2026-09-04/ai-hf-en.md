# Hugging Face Trending Models Digest 2026-09-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-04 15:09 UTC

---

# Hugging Face Trending Models Digest

### Today's Highlights

The Hugging Face trending list is dominated by the release of the **Qwen3.8** model family and Zhipu AI's **GLM-5.3** ecosystem, both delivering top-tier performance across base models and fast vision variants. In video generation, open-weights diffusion models have taken a huge leap forward, led by **MiniMax-H3** and **LTX-2.5**. Meanwhile, the community has acted with unprecedented speed, flooding the hub with quantized formats (GGUF via Unsloth) and uncensored/abliterated variants tailored for local deployment.

---

### Trending Models

#### 🧠 Language Models
* [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | ❤️ 1,676 | ⬇️ 303,534
  * A state-of-the-art MoE architecture featuring DSA (Dynamic Sparse Attention) designed for long-context text generation.
* [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | ❤️ 448 | ⬇️ 3,524
  * A compact 4B parameter LLM engineered for efficient edge inference and general conversational tasks.
* [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | ❤️ 426 | ⬇️ 5,684
  * Tencent's preview release of the Hunyuan V4 language foundation model architecture.
* [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | ❤️ 123 | ⬇️ 433
  * A 36B sparse mixture-of-experts model with 4B active parameters for ultra-efficient instruction following.
* [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | ❤️ 3,624 | ⬇️ 14,607,268
  * The classic 124M parameter autoregressive model remaining an industry standard benchmark for lightweight NLP tasks.

#### 🎨 Multimodal & Generation
* [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | ❤️ 13,904 | ⬇️ 5,739,341
  * Alibaba's flagship 27B open-weight multimodal model dominating benchmarks across vision and text comprehension.
* [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | ❤️ 4,852 | ⬇️ 351,374
  * A low-latency experimental variant of Qwen3.8 optimized for rapid vision-language reasoning.
* [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | ❤️ 4,896 | ⬇️ 5,118,457
  * A groundbreaking open-weights video foundation model delivering high-fidelity text-to-video and image-to-video generation.
* [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | ❤️ 2,739 | ⬇️ 1,399,511
  * A single-file video diffusion model offering versatile image-to-video, video-to-video, and text-to-video generation capabilities.
* [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | ❤️ 2,036 | ⬇️ 654,957
  * Zhipu AI's optimized flash variant bringing multimodal image-text capabilities to high-throughput applications.
* [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | ❤️ 584 | ⬇️ 133,024
  * DeepSeek's experimental vision-language architecture focused on fast multimodal inference.
* [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | ❤️ 415 | ⬇️ 5,388
  * An advanced text-to-speech model capable of producing natural, expressive voice synthesis.
* [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | ❤️ 1,147 | ⬇️ 20,569,141
  * OpenAI's fundamental zero-shot vision-language alignment model widely used as a visual backbone.

#### 🔧 Specialized Models
* [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | ❤️ 412 | ⬇️ 105,304
  * Google's third-generation time-series forecasting foundation model converted for PyTorch workflows.
* [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | ❤️ 5,482 | ⬇️ 253,789,790
  * The standard high-efficiency sentence embedding model used universally for semantic search and RAG pipelines.
* [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | ❤️ 2,923 | ⬇️ 58,675,189
  * Google's benchmark encoder model widely relied upon for classification, extraction, and fill-mask pipelines.
* [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | ❤️ 1,104 | ⬇️ 7,067,963
  * A light, distilled version of BERT providing fast masked language modeling with minimal drop in accuracy.
* [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | ❤️ 192 | ⬇️ 12,823
  * Meta's Massively Multilingual Speech model pretrained for acoustic modeling across thousands of languages.

#### 📦 Fine-tunes & Quantizations
* [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | ❤️ 3,479 | ⬇️ 9,951,693
  * High-efficiency GGUF quantizations of Qwen3.8-27B optimized for local inference via llama.cpp.
* [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | ❤️ 1,074 | ⬇️ 928,393
  * An abliterated fine-tune of Qwen3.8-27B removing refusal vectors while retaining core reasoning capability.
* [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | ❤️ 926 | ⬇️ 1,463,966
  * An uncensored multimodal fine-tune targeting aggressive Multi-Token Prediction (MTP) inference routines.
* [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | ❤️ 779 | ⬇️ 702,251
  * Official Unsloth GGUF quantizations targeting rapid deployment of the Qwen3.8 Flash-Next model.
* [orcarouter/Qwen3.8-

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*