# ArXiv AI Research Digest 2026-08-05

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-05 07:33 UTC

---



# ArXiv AI Research Digest — 2026-08-05

---

## 1. Today's Highlights

Today's ArXiv submissions are dominated by two converging themes: **test-time compute scaling** and **prospective, leakage-free evaluation**. Multiple papers propose new algorithms and benchmarks for stretching inference-time resources more efficiently, while a live-tournament evaluation framework (WorldCup Arena) and counterfactual forecasting benchmarks push the community toward evaluations that avoid contamination entirely. A secondary wave of work addresses **recursive self-improvement in personal agents**, **cross-model efficiency**, and **domain-specific reasoning** — from radiology to power grids — signaling a maturation phase where LLMs are being stress-tested beyond static benchmarks and into dynamic, real-world settings.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

1. **Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility**
   [arxiv.org/abs/2608.04001](http://arxiv.org/abs/2608.04001) | Hariri, Chen, Shahini et al.
   Provides a unified taxonomy of test-time scaling methods — from trajectory extension to candidate aggregation — and calls out critical reproducibility gaps, establishing a shared vocabulary the community needs.

2. **Interpretable Adaptive Sampling for LLM Test-Time Scaling**
   [arxiv.org/abs/2608.03961](http://arxiv.org/abs/2608.03961) | Kashaniyan, Jannesari
   Replaces fixed per-query compute budgets with an interpretable adaptive sampler that allocates more tokens to hard prompts, directly addressing the inefficiency of one-size-fits-all test-time scaling.

3. **Cross-Model KV Cache Transfer in LLM Families: A Closed-Form Linear Mapping for Prefill Reuse**
   [arxiv.org/abs/2608.03893](http://arxiv.org/abs/2608.03893) | Heo, Shafipour, Zhao et al.
   Enables a smaller model in a family to reuse the prefill KV cache from a larger sibling via a closed-form linear map, dramatically cutting re-computation during model cascading and mid-conversation switching.

4. **When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings**
   [arxiv.org/abs/2608.03994](http://arxiv.org/abs/2608.03994) | Schröder, Gienapp, Schlatt et al.
   Identifies a previously unknown floating-point underflow in ALiBi that silently zeroes attention weights, affecting a large fraction of heads — a critical diagnostic for any model using this common positional encoding.

5. **Intertemporal Preference Steering in Qwen3 via Contrastive Activation Addition**
   [arxiv.org/abs/2608.03892](http://arxiv.org/abs/2608.03892) | Mráz, Shenk
   Learns a linear representation of temporal horizon inside Qwen3-32B and steers the model toward short- or long-term preferences via activation addition, demonstrating a controllable intervention on time-sensitive behavior.

6. **Omega-S: A Functional Resilience Index for LLM Fine-Tuning**
   [arxiv.org/abs/2608.03887](http://arxiv.org/abs/2608.03887) | Acedo
   Introduces a drop-in regularization penalty computed from the weight matrix alone that measures and mitigates fine-tuning collapse, requiring no task data, Fisher matrix, or stored old weights.

7. **Logic Before Language: Pre-pretraining on Formal Derivations Fosters Skill Acquisition and Compressibility**
   [arxiv.org/abs/2608.03930](http://arxiv.org/abs/2608.03930) | Cheng, Aletras, Valentino
   Shows that pre-pretraining on symbolic formal derivations — going beyond Dyck-language tasks — improves both natural language acquisition speed and representation compressibility.

8. **WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament**
   [arxiv.org/abs/2608.04008](http://arxiv.org/abs/2608.04008) | Wang, Bian, Li et al.
   Proposes evaluating LLM forecasting ability live over the 39-day 2026 FIFA World Cup, eliminating benchmark contamination entirely and measuring real-time predictive calibration.

---

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

9. **PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents**
   [arxiv.org/abs/2608.04003](http://arxiv.org/abs/2608.04003) | Xue, Ding, Shen et al.
   Introduces the first benchmark for whether personal AI agents can convert accumulated cross-session experience into improved future behavior — a foundational capability for recursive self-improvement.

10. **TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning**
    [arxiv.org/abs/2608.04007](http://arxiv.org/abs/2608.04007) | Qu, Dai, Cai et al.
    Replaces trajectory-level RL supervision with turn-level hindsight self-distillation, enabling fine-grained credit assignment in long-horizon tool-use chains.

11. **Video-DeepResearch: Towards the Next-Generation Multimodal Deep Research Agent**
    [arxiv.org/abs/2608.03979](http://arxiv.org/abs/2608.03979) | Fang, Zeng, Huang et al.
    Extends multimodal research agents from static images to continuous video streams, identifying two key bottlenecks — modality bias and sparse grounding — that must be solved for video-native agents.

12. **ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?**
    [arxiv.org/abs/2608.03874](http://arxiv.org/abs/2608.03874) | Guan, Wang, Yang et al.
    Tests whether agent frameworks with external skill libraries actually accumulate and improve skills over time, exposing a gap between current designs and genuine capability evolution.

13. **SocietyBench: Forecasting Counterfactual Social-World Evolution**
    [arxiv.org/abs/2608.04009](http://arxiv.org/abs/2608.04009) | Wang, Bian, Li et al.
    Benchmarks LLMs on forecasting how real social events would unfold under counterfactual conditions — a complementary social-reasoning dimension missing from task-completion-centric evaluations.

14. **ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning**
    [arxiv.org/abs/2608.03972](http://arxiv.org/abs/2608.03972) | Bi, Zhou, Jin et al.
    Proposes leveraging expert trajectories even when the expert fails on hard problems, by converting reflective reasoning into direct learning signals — broadening the utility of trajectory distillation.

15. **A Game Theory for Foundation Models Shows New Paths to Rational Cooperation through Similarity Inference**
    [arxiv.org/abs/2608.03958](http://arxiv.org/abs/2608.03958) | Meulemans, Wołczyk, Weis et al.
    Extends classical game theory for foundation-model agents by showing that similarity inference between agents can enable rational cooperation in ways classical frameworks miss.

---

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

16. **ParVL: Parallel Scaling and Expandable Compute Allocation for Multimodal LLMs**
    [arxiv.org/abs/2608.04010](http://arxiv.org/abs/2608.04010) | Yang, Zhao, Chen et al.
    Proposes parallel scaling that breaks the rigid parameter-vs-compute tradeoff in MLLMs by allocatable compute across modalities, reducing both memory and latency overhead.

17. **Enhancing VLM Reward Models Through Structure-Aware Fine-Tuning**
    [arxiv.org/abs/2608.03875](http://arxiv.org/abs/2608.03875) | Koussios, Li, Chen et al.
    Improves VLM-based reward models for RL by fine-tuning with structural awareness, reducing reward noise that has plagued similarity-based reward signals.

18. **Latent Reward Registers for Diffusion Preference Alignment**
    [arxiv.org/abs/2608.03929](http://arxiv.org/abs/2608.03929) | Guan, Feng, Xiong et al.
    Addresses temporal credit assignment in diffusion preference alignment by estimating terminal rewards at each denoising step via latent registers, instead of waiting for the final sample.

19. **Sparse Weight Decomposition for Efficient Circuit Extraction**
    [arxiv.org/abs/2608.03913](http://arxiv.org/abs/2608.03913) | Yan, Huang, Duan et al.
    Extracts interpretable circuits from dense pretrained transformers without auxiliary sparse training, closing the fidelity gap that plagues existing circuit-extraction pipelines.

20. **Muon Meets Mamba: Spectral Optimization for State Space Models**
    [arxiv.org/abs/2608.03941](http://arxiv.org/abs/2608.03941) | Battalov, Kramin, Markotenko et al.
    Extends the Muon optimizer — previously validated only on Transformers — to state space models, showing spectral-norm optimization transfers effectively beyond attention architectures.

21. **Beyond Representational Similarity: Source-Conditioned Description-Length Gain for Generative Plagiarism Detection**
    [arxiv.org/abs/2608.03859](http://arxiv.org/abs/2608.03859) | Guo, Xie, Li
    Proposes a description-length-based method for detecting source reuse in LLM-generated text, shifting the focus from "AI-generated" detection to the underexplored problem of plagiarism detection.

---

### 📊 Applications (domain-specific, multimodal, code generation)

22. **Can Large Language Models Recover Semantic Optimization Opportunities That Compilers Miss?**
    [arxiv.org/abs/2608.03983](http://arxiv.org/abs/2608.03983) | Jiang, Yu, Hossain et al.
    Tests whether LLMs can infer missing semantic information from heterogeneous C/C++ context and recover compiler-missed optimization opportunities as verified, contract-preserving transformations.

23. **CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement**
    [arxiv.org/abs/2608.03890](http://arxiv.org/abs/2608.03890) | Ranjit, Porya, Joel et al.
    Builds a clinically useful chest X-ray VLM that unifies classification, spatial localization, and anatomical measurement — addressing the fragmentation that limits today's medical VLMs.

24. **When and Where to Look: Adaptive Visual Evidence Scheduling for Efficient Long Video Understanding**
    [arxiv.org/abs/2608.03918](http://arxiv.org/abs/2608.03918) | Li, Chen, Li et al.
    Replaces static frame selection in long-video VLMs with an adaptive scheduler that dynamically decides which frames to inspect, improving efficiency without sacrificing reasoning quality.

25. **MultiGlobeQA: A Multilingual and Globally Diverse Benchmark for Geospatial Reasoning**
    [arxiv.org/abs/2608.03882](http://arxiv.org/abs/2608.03882) | Böckling, Nosova, Paulheim et al.
    Exposes LLMs' persistent struggles with geometric and topological spatial computation across multilingual, globally diverse地理 data — a critical gap for navigation and logistics applications.

26. **ADMITBench: A Safety-Governed Reference Framework for Evaluating the Admissibility of Industrial LLM Advisories**
    [arxiv.org/abs/2608.03866](http://arxiv.org/abs/2608.03866) | Misra, Vyas, Gutta et al.
    Provides a safety-governed evaluation contract for industrial LLM recommendations, checking whether proposed actions are evidence-supported and permitted — moving evaluation from output quality to action admissibility.

27. **Operational Feasibility in Synthetic Power-Grid Scenarios via Learning the AC-Operable Joint Distribution**
    [arxiv.org/abs/2608.03878](http://arxiv.org/abs/2608.03878) | Xiao, He, Li et al.
    Generates synthetic power-grid scenarios that satisfy AC power-flow constraints natively, enabling realistic planning and resilience assessment without costly post-hoc filtering.

28. **HalluTruthQA-4K: A Fine-Grained Corpus and Annotation Process for Arabic Hallucination Detection and Truth Verification**
    [arxiv.org/abs/2608.03966](http://arxiv.org/abs/2608.03966) | Bekhouche, Bouchekif, Telli et al.
    Introduces fine-grained, span-level hallucination annotations for Arabic — a critical step beyond binary labels for low-resource languages where

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*