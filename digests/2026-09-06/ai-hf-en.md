# Hugging Face Trending Models Digest 2026-09-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-05 16:44 UTC

---

**Hugging Face Trending Models Digest – 2026‑09‑06**

---

### 1. Today's Highlights  
The Qwen 3.8‑27B family dominates the weekly likes, with multiple community‑built, quantized variants (GGUF) and a new “Flash‑Next” branch showing up twice. DeepSeek’s V4 Flash Vision experiment and Google’s Times‑FM time‑series model illustrate a push toward multimodal and domain‑specific offerings. MiniMax‑H3 and Lightricks LTX‑2.5 are the only video‑generation models that have hit the five‑million‑download mark, signaling sustained demand for text‑to‑video. Finally, the surge in fine‑tuned, uncensored Qwen variants underscores a trend toward “open‑weight, no‑filter” usage, while the classic GPT‑2 and BERT families maintain steady, high‑download traffic.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat models, instruction‑tuned)  
| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 14 009 / 6 024 467 | A 27 B‑parameter multimodal LLM that balances text and image prompts, attracting both research and commercial use. |
| **[Spark‑X2.5‑4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** | XHToken | 517 / 4 755 | A lightweight 4 B model tuned for instruction‑following, ideal for edge deployment. |
| **[GLM‑5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org | 1 713 / 370 417 | An instruction‑tuned 5 B Chinese LLM that excels in multilingual contexts. |
| **[gpt2](https://huggingface.co/openai-community/gpt2)** | openai‑community | 3 670 / 14 739 982 | The canonical 1.5 B open‑weight LLM that remains a benchmark for fine‑tuning. |
| **[Hy4‑preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 439 / 6 195 | A 4 B model aimed at fast inference for chat‑style applications. |
| **[K2‑Horizon‑MoVA‑36B‑A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** | IFM | 166 / 1 333 | A 36 B multimodal LLM that integrates vision and text in a single architecture. |
| **[orcarouter/GLM‑5.3‑Flash‑Uncensored‑FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** | orcarouter | 185 / 8 338 | A FP8‑quantized, uncensored GLM‑5.3 variant that pushes inference speed on GPU. |
| **[JonathanColetti/Qwen3.8‑27B‑Uncensored‑GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 982 / 2 453 361 | A community‑built GGUF quantization of Qwen 3.8 + uncensored policy for lightweight deployment. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[DeepSeek‑V4‑Flash‑Vision‑Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek‑ai | 654 / 184 542 | A 4‑step vision‑to‑text pipeline that shows DeepSeek’s continued multimodal expansion. |
| **[Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 14 009 / 6 024 467 | Also listed under LLMs, its image‑to‑text capability keeps it in the multimodal spotlight. |
| **[Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4 904 / 401 327 | The next‑generation flash‑optimized image‑to‑text model with higher throughput. |
| **[GLM‑5.3‑Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 2 071 / 727 610 | A vision‑enabled GLM variant that excels in image‑captioning tasks. |
| **[LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2 852 / 1 484 329 | The first production‑ready image‑to‑video model that converts single frames to coherent clips. |
| **[MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4 927 / 5 057 414 | A large‑scale image‑to‑video transformer that handles 1080p input with minimal latency. |
| **[vdn‑minimax‑h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** | OpenVDN | 183 / 0 | A fine‑tune of MiniMax‑H3 for text‑to‑video synthesis, still under heavy testing. |
| **[FastVideo‑FastH3‑4‑step‑Preview‑v1‑VSA‑DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 277 / 22 851 | A 4‑step video‑generation pipeline that demonstrates data‑free training. |
| **[clip‑vit‑base‑patch32](https://huggingface.co/openai/clip-vit-base-patch32)** | openai | 1 191 / 20 755 211 | A vision‑only backbone that powers zero‑shot image classification, still heavily downloaded. |

#### 🔧 Specialized Models (code, math, medical, embeddings)  
| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[timesfm‑3.0‑pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google | 445 / 123 025 | The first open‑weight 3 B time‑series forecast model that integrates transformer‑style attention. |
| **[Breeze‑TTS‑2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 443 / 5 962 | A lightweight text‑to‑speech model that runs on mobile GPU. |
| **[all‑MiniLM‑L6‑v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** | sentence‑transformers | 5 530 / 255 006 933 | The most downloaded sentence‑similarity encoder, used in search and clustering. |
| **[mms‑300m](https://huggingface.co/facebook/mms-300m)** | facebook | 240 / 12 961 | A multimodal pre‑training model that spans text, audio, and vision, still in early adoption. |
| **[google‑bert/bert‑base‑uncased](https://huggingface.co/google-bert/bert-base-uncased)** | google-bert | 2 956 / 56 175 564 | The canonical fill‑mask model that remains a go‑to for many NLP pipelines. |
| **[distilbert/distilbert‑base‑uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** | distilbert | 1 135 / 7 101 423 | A distilled, fast fill‑mask model that still drives a large share of inference. |

#### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)  
| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[Qwen3.8‑27B‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA‑DASLab | 374 / 297 493 | A GGUF‑quantized version with GSQ+RCO techniques, enabling near‑native inference speed. |
| **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3 532 / 10 157 510 | One of the most downloaded GGUF models, showing unsloth’s aggressive quantization strategy. |
| **[unsloth/Qwen3.8‑Flash‑Next‑GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 794 / 780 823 | A flash‑optimized GGUF variant that balances size and speed for edge use. |
| **[DavidAU/Qwen3.8‑27B‑TURBO‑Fable‑Cold‑Fusion‑735‑882‑Heretic‑Uncensored‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 202 / 174 405 | A heavily customized, uncensored Qwen model that showcases community‑driven fine‑tuning. |
| **[HauhauCS/Qwen3.8‑27B‑Uncensored‑HauhauCS‑Aggressive‑MTP‑GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 956 / 1 527 627 | A GGUF variant with a more permissive policy, attracting users who want unfiltered responses. |
| **[orcarouter/GLM‑5.3‑Flash‑Uncensored‑FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** | orcarouter | 185 / 8 338 | FP8‑quantized GLM‑5.3 that reduces VRAM usage while maintaining performance. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 724 / 283 774 | A community‑built uncensored GGUF model

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*