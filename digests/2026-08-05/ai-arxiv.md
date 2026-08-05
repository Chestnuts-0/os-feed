# ArXiv AI 研究日报 2026-08-05

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-05 06:19 UTC

---



# ArXiv AI 研究日报 — 2026-08-05

---

## 一、今日速览

今日投稿聚焦**测试时推理扩展**与**智能体能力评估**两大主线：多篇论文深入探讨 Test-Time Scaling 的推理范式与可解释性优化，同时围绕递归自改进、工具使用、多模态评估等主题推出系列基准测试。在工程层面，跨模型 KV Cache 复用、注意力数值失效分析、扩散偏好对齐等新技术揭示了大模型规模化过程中的关键瓶颈与解法。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility**
   https://arxiv.org/abs/2608.04001
   系统梳理 Test-Time Scaling 的多种推理范式，统一界定其评估标准与复现性问题，为该领域建立研究基准。

2. **When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings**
   https://arxiv.org/abs/2608.03994
   发现 ALiBi 位置编码在线性偏置缩放时因浮点精度下溢导致注意力权重大量归零，揭示长序列推理中的潜在数值失效模式。

3. **Cross-Model KV Cache Transfer in LLM Families: A Closed-Form Linear Mapping for Prefill Reuse**
   https://arxiv.org/abs/2608.03893
   提出跨模型 KV Cache 线性映射复用机制，允许不同规模的同族模型共享 Prefill 计算结果，显著降低多模型部署的推理开销。

4. **Intertemporal Preference Steering in Qwen3 via Contrastive Activation Addition**
   https://arxiv.org/abs/2608.03892
   在 Qwen3-32B 中定位时间偏好的线性表征，通过对比激活叠加实现模型短期/长期决策倾向的可控干预。

5. **HalluTruthQA-4K: A Fine-Grained Corpus and Annotation Process for Arabic Hallucination Detection and Truth Verification**
   https://arxiv.org/abs/2608.03966
   构建细粒度阿拉伯语幻觉检测数据集，突破传统二进制标注的局限，支持句级幻觉识别与事实验证。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

6. **TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning**
   https://arxiv.org/abs/2608.04007
   提出回合级 hindsight 自蒸馏方法，在工具集成推理（TIR）的长程交互中实现细粒度信用分配，弥补轨迹级监督的不足。

7. **PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents**
   https://arxiv.org/abs/2608.04003
   建立个人智能体递归自改进能力的基准测试，评估跨会话经验保留与技能演化对任务求解的实际增益。

8. **ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?**
   https://arxiv.org/abs/2608.03874
   系统评估智能体是否能真正通过外部技能库持续演化能力，揭示当前框架在技能积累与复用上的根本性局限。

9. **ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning**
   https://arxiv.org/abs/2608.03972
   利用专家模型的"负面轨迹"进行反思式直接推理学习，使 Agent 从失败经验中提取可泛化的改进信号。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

10. **Interpretable Adaptive Sampling for LLM Test-Time Scaling**
    https://arxiv.org/abs/2608.03961
    提出可解释的自适应采样策略，根据问题难度动态分配推理预算，替代固定 per-query 计算开销。

11. **WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament**
    https://arxiv.org/abs/2608.04008
    在 2026 世界杯 39 天赛程中实时评估 LLM 预测能力，开创无前向泄漏的直播事件基准评测范式。

12. **SocietyBench: Forecasting Counterfactual Social-World Evolution**
    https://arxiv.org/abs/2608.04009
    面向反事实社会世界演化的预测基准，弥补当前评估仅关注任务执行而忽视社会事件推理的短板。

13. **ParVL: Parallel Scaling and Expandable Compute Allocation for Multimodal LLMs**
    https://arxiv.org/abs/2608.04010
    提出并行扩展与可弹性分配计算的 multimodal LLM 缩放策略，打破传统方法中固定计算分配的刚性限制。

14. **Omegа-S: A Functional Resilience Index for LLM Fine-Tuning**
    https://arxiv.org/abs/2608.03887
    仅从权重矩阵计算 Omega-S 指标，无需历史任务数据或旧权重副本，即可量化微调对模型功能韧性（灾难性遗忘）的影响。

---

### 📊 应用（垂直领域、多模态、代码生成）

15. **Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent**
    https://arxiv.org/abs/2608.03979
    将多模态智能体从静态图像拓展至连续视频流，揭示模态偏差与密集时空定位是当前核心瓶颈。

16. **CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement**
    https://arxiv.org/abs/2608.03890
    面向胸部 X 光片的临床可用 VLM，联合辅助监督、奖励对齐与工具增强测量，统一分类、定位与解剖度量三大能力。

17. **Can Large Language Models Recover Semantic Optimization Opportunities That Compilers Miss?**
    https://arxiv.org/abs/2608.03983
    探索 LLM 能否从 C/C++ 异构上下文中恢复编译器遗漏的语义优化机会，并以契约保持的方式实现。

18. **BanglaWild: An In-the-Wild Bengali Scene Text Recognition Benchmark for OCR and Vision-Language Models**
    https://arxiv.org/abs/2608.03884
    首个孟加拉语真实场景文字识别基准，同时评估传统 OCR 与 VLM，报告细粒度编辑距离指标。

---

## 三、研究趋势信号

今日投稿呈现三大趋势：一是 **Test-Time Scaling 方法论化**，多篇工作从评估、采样、可解释性三个维度统一该领域研究框架；二是 **Agent 能力评估从任务完成转向认知演化**，递归自改进、技能持续学习、社会预测等基准反映社区对 Agent "智能本质" 的关注；三是 **垂直领域 VLM 向临床与工业级可用收敛**，通过多任务联合训练与工具增强弥合研究与落地的差距。

---

## 四、值得精读

1. **Test-Time Scaling in Reasoning LLMs**（2608.04001）
   该工作是 Test-Time Scaling 领域的系统性综述与基准界定论文，统一了推理扩展的各种范式定义，对后续研究者建立复现标准具有重要参考价值。

2. **Cross-Model KV Cache Transfer**（2608.03893）
   针对多模型级联部署中的核心效率瓶颈，提出闭式线性映射实现 Prefill 复用，方案简洁且具有直接工程落地价值，适合实践导向的研究者深入阅读。

3. **When Attention Goes Blind**（2608.03994）
   揭示 ALiBi 位置编码的数值失效模式，该问题在高精度要求或超长序列场景下可能被广泛触发，对关注模型架构可靠性的研究者具有警示意义。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*