# Hugging Face Trending Models Digest 2026-08-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 00:56 UTC

---



# 🤗 Hugging Face Trending Models Digest — August 10, 2026

---

## 1. Today's Highlights

The most striking trend this week is the **MiniMax-H3 video generation ecosystem** exploding with over a dozen community forks — from ComfyUI adapters and LoRAs to GGUF quantizations — signaling rapid adoption for local video synthesis. **Moonshot AI's Kimi-K3** continues to dominate with over 10,000 likes, cementing its position as a leading open-weight image-text-to-text model. Meanwhile, **GLM-5.2** from Z.ai and **DeepSeek-V4-Flash** are delivering strong open-weight competition in the language model space, with GLM-5.2 surpassing 2.4 million downloads in its first week. The persistent appetite for quantized, locally-runnable variants (GGUF, NVFP4, INT8) shows the community increasingly prioritizes accessibility alongside capability.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2,488,397 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,945 | 868,576 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,398 | 1,456,459 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5,651 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4,747 |

- **GLM-5.2** — Z.ai's latest open MoE language model is seeing massive adoption as a strong alternative to proprietary Chinese/English bilingual models.
- **DeepSeek-V4-Flash-0731** — DeepSeek's latest flash-tier model continues to be a top pick for cost-effective, high-quality text generation.
- **Kimi-K3** — Moonshot's multimodal model is the highest-liked on the list, praised for its image-text understanding and long-context capability.
- **Shieldstral-1.0-3B** — Mistral's newest specialized model targets safety and alignment evaluation with a compact 3B parameter footprint.
- **Ling-3.0-flash** — A hybrid architecture from inclusionAI offering fast, efficient text generation with conversational fine-tuning.

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487,171 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,245 | 35,295 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2,889,062 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 323 | 461,150 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13,132 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6,117 |

- **FLUX.1-dev** — Black Forest Labs' image generation model remains the most-liked on the list, with sustained community use for high-fidelity synthesis.
- **MiniMax-H3** — MiniMax's image-text-to-video model is the epicenter of this week's trending activity, spawning a rich ecosystem of derivatives.
- **Unlimited-OCR** — Baidu's OCR model is seeing enormous download volume, reflecting the critical need for text extraction in multimodal pipelines.
- **Mage-VL** — Microsoft's vision-language model offers strong multimodal reasoning and is gaining traction in evaluation benchmarks.
- **Audio8-TTS-Preview** — A compact 0.6B text-to-speech model preview showing promising voice quality for its size.
- **Minimax-h3-Turbo** — A diffusion-based turbo variant of MiniMax-H3 offering faster image-to-video generation.

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 260 | 543 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 289 | 1,089 |

- **KAT-Coder-V2.5-Dev** — A code-specialized MoE model (Qwen3.5-derived) targeting development and software engineering workflows.
- **NVIDIA NemotronLabs-VoiceChat-11B** — NVIDIA's open-weight voice chat model builds on Nemotron's dialogue capabilities for conversational AI.
- **maple-preview** — Deepgrove's Mixture-of-Experts preview model, an early look at a new architectural direction in open language models.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,072 | 4,947,943 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2,390,692 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 627 | 188,761 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 160,747 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 174 | 68,468 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 454 | 396,282 |

- **Comfy-Org/MiniMax-H3** — The definitive ComfyUI single-file version of MiniMax-H3; nearly 5 million downloads make it the most-downloaded model on this list.
- **DavidAU's Qwen3.6-27B Heretic GGUF** — An uncensored, community-fine-tuned GGUF of Qwen3.6 targeting unrestricted local deployment.
- **Unsloth's DeepSeek-V4 Flash GGUF** — Optimized quantization from Unsloth, bringing DeepSeek's latest model to consumer hardware efficiently.
- **Abiray's Minimax-H3 NVFP4/INT4/INT8** — Multi-precision quantization of MiniMax-H3 for GPU-constrained environments.
- **LuffyTheFox's Qwen3.6-35B Hermes GGUF** — A large MoE uncensored fine-tune targeting capable local conversational deployment.

---

## 3. Ecosystem Signal

MiniMax-H3 is the dominant story this week, with a single video-generation base model spawning a dozen+ community derivatives spanning ComfyUI integrations, LoRA adapters, turbo speed variants, and multiple quantization formats (GGUF, NVFP4, INT8). This pattern — a capable base model followed by rapid community expansion — mirrors the FLUX and SD3 ecosystems and signals that video generation is the current frontier for open-model experimentation.

In language models, the competitive tension between **DeepSeek V4 Flash** and **GLM-5.2** is intensifying, with both offering strong open-weight alternatives to proprietary offerings. DeepSeek's flash-tier focus on cost-performance ratio is resonating, as evidenced by nearly 870K downloads of the base model and robust GGUF adoption. GLM-5.2's 2.4M downloads reflect growing appetite for Chinese-English bilingual models in the open space.

The quantization pipeline is more active than ever: unsloth, realrebelai, and Abiray are all racing to deliver optimized variants of the latest models. NVFP4 and INT8 quantizations are emerging as the new standard for running large video models on consumer hardware. The uncensored/heretic fine-tune niche continues to attract significant download volume (DavidAU's 2.4M, LuffyTheFox's 396K), underscoring sustained demand for unrestricted local deployment.

---

## 4. Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The highest-liked model on the list (10,398 likes) with 1.4M+ downloads. Its image-text-to-text pipeline and compressed-tensor support make it an excellent candidate for local multimodal reasoning, especially for users who need strong visual understanding without relying on API-based services.

2. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — DeepSeek's latest flash-tier release offers impressive text-generation capability with a strong download-to-like ratio, indicating broad practical adoption. Paired with the [Unsloth GGUF variant](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF), it's one of the most accessible high-quality models for local deployment on consumer GPUs.

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The engine behind this week's most active community ecosystem. Even if you primarily work with text models, understanding MiniMax-H3's architecture and its derivative landscape (ComfyUI, LoRAs, quantizations) provides valuable insight into where open video generation is heading in 2026.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*