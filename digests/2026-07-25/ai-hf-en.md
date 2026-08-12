# Hugging Face Trending Models Digest 2026-07-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-25 01:46 UTC

---

# Hugging Face Trending Models Digest
**Date:** 2026-07-25

## 1. Today's Highlights
The ecosystem is currently dominated by the rapid adoption of Qwen 3.6 variants and the continued rise of GLM 5.2, with community fine-tunes driving massive download volumes. There is a significant surge in high-efficiency quantization techniques, particularly GGUF and NVFP4 formats, allowing large models like Laguna S and Solar Open2 to run locally on constrained hardware. Meanwhile, specialized multimodal capabilities are expanding beyond standard vision-language tasks into robotics and OCR, signaling a shift toward highly functional, domain-specific AI agents.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **zai-org/GLM-5.2**
    *   [Link](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 4,415 | Downloads: 667,403
    *   This latest iteration from Z.ai leverages Mixture-of-Experts (MoE) architecture to deliver superior conversational performance, becoming the top-liked model this week due to its balance of speed and intelligence.
*   **google/gemma-4-31B-it**
    *   [Link](https://huggingface.co/google/gemma-4-31B-it) | Author: google | Likes: 3,360 | Downloads: 12,629,921
    *   Google’s newest open-weight Gemma variant continues to see exponential usage, offering robust general-purpose reasoning capabilities that remain a staple for developers building scalable applications.
*   **Qwen/Qwen3.6-35B-A3B**
    *   [Link](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Author: Qwen | Likes: 2,503 | Downloads: 6,460,680
    *   The official release of Alibaba’s latest MoE model demonstrates exceptional efficiency, gaining traction for its strong multilingual support and code generation abilities in open-source deployments.
*   **upstage/Solar-Open2-250B**
    *   [Link](https://huggingface.co/upstage/Solar-Open2-250B) | Author: upstage | Likes: 541 | Downloads: 1,106
    *   Upstage’s massive open-weight model enters the conversation, attracting researchers looking for high-parameter benchmarks without proprietary API restrictions, though downloads are still early-stage.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **baidu/Unlimited-OCR**
    *   [Link](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 3,012 | Downloads: 2,500,391
    *   Baidu’s specialized OCR engine leads the multimodal chart, trending heavily due to its ability to handle complex document layouts and long-context text extraction with high accuracy.
*   **microsoft/Mage-Flow**
    *   [Link](https://huggingface.co/microsoft/Mage-Flow) | Author: microsoft | Likes: 234 | Downloads: 891
    *   Microsoft’s new text-to-image pipeline showcases advanced image editing and generation capabilities, appealing to creators seeking integrated workflows within the Diffusers ecosystem.
*   **nvidia/nemotron-3.5-asr-streaming-0.6b**
    *   [Link](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia | Likes: 937 | Downloads: 797,525
    *   NVIDIA’s lightweight streaming ASR model is trending for real-time voice applications, offering low-latency transcription suitable for edge devices and live interaction systems.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **moonshotai/Kimi-K2.7-Code**
    *   [Link](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | Author: moonshotai | Likes: 1,263 | Downloads: 756,668
    *   Kimi’s code-specialized multimodal model bridges vision and logic, trending among developers for its ability to debug visual UI components and generate corresponding code efficiently.
*   **openbmb/MiniCPM-RobotManip**
    *   [Link](https://huggingface.co/openbmb/MiniCPM-RobotManip) | Author: openbmb | Likes: 172 | Downloads: 559
    *   A niche but critical model for robotics, enabling vision-language-action policies for precise manipulation tasks, highlighting the growing intersection of LLMs and physical AI.
*   **fdtn-ai/antares-1b**
    *   [Link](https://huggingface.co/fdtn-ai/antares-1b) | Author: fdtn-ai | Likes: 149 | Downloads: 4,266
    *   Designed for security-focused text generation, this small but potent model is gaining attention for red-teaming and secure content filtering applications in enterprise environments.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   [Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 3,069 | Downloads: 2,057,103
    *   A highly popular community GGUF fine-tune that removes safety filters from Qwen 3.6, seeing massive adoption for unrestricted creative writing and roleplay scenarios.
*   **prism-ml/Bonsai-27B-gguf**
    *   [Link](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | Author: prism-ml | Likes: 632 | Downloads: 2,028,115
    *   Featuring extreme 1-bit quantization, this model allows running a 27B parameter network on consumer hardware with minimal quality loss, driving significant local deployment interest.
*   **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**
    *   [Link](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | Author: DavidAU | Likes: 485 | Downloads: 407,421
    *   Another aggressive uncensored fine-tune using UnSloth optimization, trending for its enhanced instruction-following in "heretic" or alternative persona contexts.
*   **poolside/Laguna-S-2.1-GGUF**
    *   [Link](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | Author: poolside | Likes: 133 | Downloads: 62,092
    *   The quantized version of Poolside’s Laguna S model, making their efficient architecture accessible via llama.cpp for users prioritizing inference speed over raw parameter count.

## 3. Ecosystem Signal
The current landscape reflects a maturation of the "efficiency-first" paradigm. While foundational model releases from giants like Google, Alibaba, and Z.ai provide strong baselines, the most explosive growth is occurring in the quantization and fine-tuning layer. The dominance of GGUF and NVFP4 formats indicates that the barrier to entry for running large models has lowered significantly, shifting focus from mere capability to accessibility and latency. Furthermore, there is a clear bifurcation in the uncensored community, where aggressive fine-tunes of Qwen 3.6 architectures are outperforming base models in engagement metrics, suggesting a strong demand for customizable, unfiltered creative tools. Simultaneously, the rise of robotics-specific VLA (Vision-Language-Action) models like MiniCPM-RobotManip signals that multimodal AI is moving beyond digital interfaces into physical automation. The open-weight trend remains robust, with proprietary APIs struggling to compete with the flexibility and cost-efficiency of optimized local deployments like Bonsai and Laguna.

## 4. Worth Exploring
1.  **prism-ml/Bonsai-27B-gguf**: Highly recommended for developers needing to deploy mid-sized models on edge devices. Its 1-bit quantization represents a cutting-edge trade-off between model size and performance, offering a compelling case study in extreme compression.
2.  **baidu/Unlimited-OCR**: Essential for any application involving document processing. Its high download count validates its utility, and it serves as a benchmark for how specialized multimodal models can outperform generalist vision-language models in specific tasks.
3.  **openbmb/MiniCPM-RobotManip**: Worth studying for those interested in Embodied AI. It provides a practical implementation of how language models can be grounded in physical actions, bridging the gap between abstract reasoning and robotic control.

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*