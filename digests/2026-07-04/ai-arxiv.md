# ArXiv AI 研究日报 2026-07-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-04 01:55 UTC

---

# ArXiv AI 研究日报
**日期**：2026-07-04  
**来源**：cs.AI, cs.CL, cs.LG (Top 50 Papers)

## 1. 今日速览
今日研究显著聚焦于**AI 代理的安全性与可靠性**，特别是代码代理中的持久化攻击风险及人类监督瓶颈。同时，**长上下文推理**与**视觉语言模型的自我反思能力**成为提升模型实用性的关键突破口。在系统层面，**量化优化**（针对扩散模型）和**硬件感知推理效率**的研究表明，降低部署成本仍是工业界核心痛点。此外，多智能体协作中的社会结构涌现及文化测量应用展现了 AI 在社会科学领域的渗透。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1.  **LACUNA: A Testbed for Evaluating Localization Precision for LLM Unlearning**
    *   **作者**: Matteo Boglioni et al.
    *   **链接**: http://arxiv.org/abs/2607.02513v1
    *   **说明**: 提出首个专门评估 LLM 遗忘定位精度的测试床，解决“先定位后遗忘”范式中的数据隐私移除难题，对合规性至关重要。

2.  **Online Safety Monitoring for LLMs**
    *   **作者**: Mona Schirmer et al.
    *   **链接**: http://arxiv.org/abs/2607.02510v1
    *   **说明**: 设计了一种实时在线安全监控器，利用外部模型的验证信号在部署时动态检测不安全输出，弥补了对齐训练的滞后性。

3.  **Neuron-Aware Data Selection for Annotation-Free LLM Self-Distillation**
    *   **作者**: Zhuowei Chen, Xiang Lorraine Li
    *   **链接**: http://arxiv.org/abs/2607.02460v1
    *   **说明**: 引入神经元感知机制进行无标注数据的自蒸馏选择，解决了专业领域缺乏专家标注时的模型进化难题。

4.  **Fast Multi-dimensional Refusal Subspaces via RFM-AGOP**
    *   **作者**: Thomas Winninger
    *   **链接**: http://arxiv.org/abs/2607.02396v1
    *   **说明**: 揭示拒绝回答等复杂行为并非编码在单一线性方向，而是多维子空间，为更精细的模型安全控制提供理论基础。

5.  **World Wide Models: Literary Tools for Cultural AI**
    *   **作者**: Nina Begus
    *   **链接**: http://arxiv.org/abs/2607.02369v1
    *   **说明**: 探讨文学理论工具如何用于分析大规模自动化、单语的文化 AI 相遇，拓展了 LLM 在人文社科中的应用边界。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

6.  **Distributed Attacks in Persistent-State AI Control**
    *   **作者**: Josh Hills et al.
    *   **链接**: http://arxiv.org/abs/2607.02514v1
    *   **说明**: 警告自主代码代理因代码库持久化而面临的新型分布式攻击风险，指出提示注入可在跨会话中积累并触发 Payload。

7.  **ReContext: Recursive Evidence Replay as LLM Harness for Long-Context Reasoning**
    *   **作者**: Yanjun Zhao et al.
    *   **链接**: http://arxiv.org/abs/2607.02509v1
    *   **说明**: 提出递归证据重放机制，解决长上下文窗口下模型难以有效利用已有相关证据的问题，显著提升长文本推理能力。

8.  **What LLM Agents Say When No One Is Watching: Social Structure and Latent Objective Emergence in Multi-Agent Debates**
    *   **作者**: Arman Ghaffarizadeh et al.
    *   **链接**: http://arxiv.org/abs/2607.02507v1
    *   **说明**: 研究多智能体辩论中社会结构（角色、受众）如何塑造隐性目标，揭示无明确指令下代理行为的社交演化规律。

9.  **Steerability via constraints: a substrate for scalable oversight of coding agents**
    *   **作者**: Thomas Winninger
    *   **链接**: http://arxiv.org/abs/2607.02389v1
    *   **说明**: 主张通过类似传统软件工程的安全策略（访问控制、网络策略）来约束代码代理，以解决人类监督瓶颈带来的可扩展性问题。

10. **DemoPSD: Disagreement-Modulated Policy Self-Distillation**
    *   **作者**: Yunhe Li et al.
    *   **链接**: http://arxiv.org/abs/2607.02502v1
    *   **说明**: 改进策略自蒸馏方法，通过调节教师与学生模型间的分歧程度，缓解密集 token 级监督带来的过拟合问题。

### 🔧 方法与框架（新技术、基准测试、效率优化）

11. **OrbitQuant: Data-Agnostic Quantization for Image and Video Diffusion Transformers**
    *   **作者**: Donghyun Lee et al.
    *   **链接**: http://arxiv.org/abs/2607.02461v1
    *   **说明**: 针对扩散 Transformer 激活值随时间步漂移的特性，提出数据无关的量化方案，大幅降低图像/视频生成的推理成本。

12. **WattGPU: Predicting Inference Power and Latency on Unseen GPUs and LLMs**
    *   **作者**: Mauricio Fadel Argerich et al.
    *   **链接**: http://arxiv.org/abs/2607.02391v1
    *   **说明**: 提供预测工具，无需 exhaustive profiling 即可估算未见过 GPU 上的 LLM 推理功耗和延迟，助力绿色数据中心部署。

13. **Program-as-Weights: A Programming Paradigm for Fuzzy Functions**
    *   **作者**: Wentao Zhang et al.
    *   **链接**: http://arxiv.org/abs/2607.02512v1
    *   **说明**: 提出将模糊函数编程化为权重，替代调用 LLM API，以解决本地化、可重复性和价格敏感型任务中的痛点。

14. **Understanding the Robustness of Distributed Self-Supervised Learning Frameworks Against Non-IID Data**
    *   **作者**: Xuanyu Chen et al.
    *   **链接**: http://arxiv.org/abs/2607.02447v1
    *   **说明**: 理论分析分布式自监督学习在非独立同分布（Non-IID）数据下的鲁棒性，填补该领域理论理解的空白。

15. **TestEvo-Bench: An Executable and Live Benchmark for Test and Code Co-Evolution**
    *   **作者**: Jiale Amber Wang et al.
    *   **链接**: http://arxiv.org/abs/2607.02469v1
    *   **说明**: 创建首个支持代码与测试协同演化的可执行基准，验证测试是否真实反映了新代码行为，而非仅依赖静态元数据。

### 📊 应用（垂直领域、多模态、代码生成）

16. **Reasoning LLM Improves Speaker Recognition in Long-form TV Dramas**
    *   **作者**: Yuxuan Li et al.
    *   **链接**: http://arxiv.org/abs/2607.02504v1
    *   **说明**: 利用推理 LLM 增强长剧集视频理解中的说话人识别精度，解决复杂剧情中角色归属的难题。

17. **Visually Grounded Self-Reflection for Vision-Language Models via Reinforcement Learning**
    *   **作者**: Liyan Tang et al.
    *   **链接**: http://arxiv.org/abs/2607.02490v1
    *   **说明**: 通过强化学习赋予 VLM 视觉接地自我反思能力，使其能在思维链中修正视觉注意力错误，提升多模态推理准确性。

18. **Controllable Sim Agents with Behavior Latents**
    *   **作者**: Juanwu Lu et al.
    *   **链接**: http://arxiv.org/abs/2607.02496v1
    *   **说明**: 引入可控神经代理用于交通模拟，通过可解释的行为潜变量隔离变量，实现边缘案例复现而不需实车风险。

19. **Human Capital, Not Model Benchmarks, Predicts Hybrid Intelligence in Forecasting**
    *   **作者**: Vivienne Ming
    *   **链接**: http://arxiv.org/abs/2607.02467v1
    *   **说明**: 基于 Polymarket 预测市场数据证明，人机协作的价值取决于具体的人力资本形式，而非单纯依赖模型基准分数。

20. **VisionAId: An Offline-First Multimodal Android Assistant for People with Visual Impairment**
    *   **作者**: Cristian-Gabriel Florea et al.
    *   **链接**: http://arxiv.org/abs/2607.02371v1
    *   **说明**: 开发首款离线优先的多模态 Android 助手，通过个性化物体检索帮助视障人士提升日常自主生活能力。

## 3. 研究趋势信号
今日投稿显示，AI 研究正从“提升模型上限”转向“保障部署下限”。**安全性**不再局限于训练时对齐，而是延伸至运行时监控（Paper 4）、代码代理的持久化攻击防御（Paper 1）以及多维拒绝空间分析（Paper 14）。同时，**效率与成本**是另一大焦点，无论是扩散模型的量化（Paper 11）、GPU 功耗预测（Paper 12），还是无标注自蒸馏（Paper 3, 9），均旨在降低大规模 AI 落地的经济与技术门槛。此外，**长上下文的有效利用**（Paper 7）和**多智能体的社会行为建模**（Paper 8）表明，处理复杂、动态环境的能力已成为下一代 AI 的核心竞争力。

## 4. 值得精读

1.  **Distributed Attacks in Persistent-State AI Control**
    *   **理由**: 随着 AI 编码代理日益自主，代码库的状态持久化引入了全新的攻击向量。这篇论文揭示了当前忽视的“时间维度”安全风险，对于构建安全的自动化软件工程流程具有紧迫的现实意义。

2.  **ReContext: Recursive Evidence Replay as LLM Harness for Long-Context Reasoning**
    *   **理由**: 尽管模型上下文窗口不断增大，但“大海捞针”效应依然严重。ReContext 提出的递归证据重放机制提供了一种不依赖模型规模增长而提升长文本推理效率的新思路，对 RAG 和长文档分析极具参考价值。

3.  **Steerability via constraints: a substrate for scalable oversight of coding agents**
    *   **理由**: 该论文跳出了纯算法优化的框架，从系统工程角度提出用传统网络安全策略管理 AI 代理。这种跨学科的视角为解决“人类监督瓶颈”提供了切实可行的规模化方案，值得 AI 安全研究者深入阅读。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*