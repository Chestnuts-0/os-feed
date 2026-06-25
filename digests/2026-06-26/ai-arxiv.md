# ArXiv AI 研究日报 2026-06-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-25 18:45 UTC

---

# ArXiv AI 研究日报 (2026-06-26)

## 今日速览
今日研究聚焦于**具身智能的强化学习微调**与**多模态模型的鲁棒性审计**。VLA 模型通过 FORCE 等方法突破模仿学习瓶颈，同时“实时语音 AI”研究揭示了当前系统在语调情感理解上的显著缺陷。在基础模型层面，论文深入探讨了合成数据对分类性能的理论边界，以及多步工具使用强化学习中的崩溃问题。此外，针对大模型的“不可撤销安全内核”和隐私漏洞分析引发了对 Agent 系统安全架构的重新思考。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1.  **On-Policy Self-Distillation with Sampled Demonstrations Reduces Output Diversity**
    *   **作者**: Andrei Liviu Nicolicioiu, Mohammad Pezeshki, Aaron Courville et al.
    *   **链接**: http://arxiv.org/abs/2606.26091v1
    *   **一句话说明**: 揭示了对策自蒸馏在提升 pass@1 准确率的同时，会导致模型输出多样性下降的隐藏代价，对采样推理策略有重要警示意义。

2.  **Model Forensics: Investigating Whether Concerning Behavior Reflects Misalignment**
    *   **作者**: Aditya Singh, Gerson Kroiz, Senthooran Rajamanoharan et al.
    *   **链接**: http://arxiv.org/abs/2606.26071v1
    *   **一句话说明**: 提出“模型法医学”概念，区分有害行为是源于对齐失败还是良性混淆，为更精准的安全评估提供了理论框架。

3.  **Same Evidence, Different Answer: Auditing Order Sensitivity in Multimodal Large Language Models**
    *   **作者**: Akshay Paruchuri, Sanmi Koyejo, Ehsan Adeli
    *   **链接**: http://arxiv.org/abs/2606.26079v1
    *   **一句话说明**: 引入 Facet-Probe 基准，发现 MLLMs 对输入顺序高度敏感，即使证据相同，打乱顺序也会导致答案变化，挑战了模型的可靠性基准。

4.  **Natural Ungrokking: Asymmetric Control of Which Rules Survive Pretraining**
    *   **作者**: Juliana Li, Diya Sreedhar
    *   **链接**: http://arxiv.org/abs/2606.26050v1
    *   **一句话说明**: 观察到小语言模型在预训练中可能出现规则“遗忘”现象（如代词性别一致性），揭示了非对称控制对知识保留的影响。

5.  **The Inference-Compute Frontier and a Latency-Efficient Architecture for Limit Order Book Prediction**
    *   **作者**: C. Evans Hedges
    *   **链接**: http://arxiv.org/abs/2606.25986v1
    *   **一句话说明**: 虽然偏向金融，但其探讨的推理计算前沿（Inference-Compute Frontier）对理解 LLM 在延迟敏感场景下的扩展律具有通用参考价值。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

6.  **RevengeBench: Reverse Engineering Code-Space Policies from Behavioral Experiments**
    *   **作者**: Babak Rahmani, Sebastian Dziadzio, Joschka Strüber et al.
    *   **链接**: http://arxiv.org/abs/2606.26094v1
    *   **一句话说明**: 提出通过行为轨迹逆向工程代理的策略代码，为理解黑盒智能体的内部决策机制提供了新的计算类比方法。

7.  **Why Multi-Step Tool-Use Reinforcement Learning Collapses and How Supervisory Signals Fix It**
    *   **作者**: Yupu Hao, Zhuoran Jin, Huanxuan Liao et al.
    *   **链接**: http://arxiv.org/abs/2606.26027v1
    *   **一句话说明**: 诊断了多步工具使用中 RL 崩溃的原因，并证明引入监督信号可以有效修复这一不稳定性，提升了 Agent 的可靠性。

8.  **The Unfireable Safety Kernel: Execution-Time AI Alignment for AI Agents and Other Escapable AI Systems**
    *   **作者**: Seth Dobrin, Łukasz Chmiel
    *   **链接**: http://arxiv.org/abs/2606.26057v1
    *   **一句话说明**: 批判了仅依赖运行时内部控制的局限，提出了执行时不可擦除的安全内核概念，以解决 Agent 逃逸和越权问题。

9.  **Can Trustless Agents Be Trusted? An Empirical Study of the ERC-8004 Decentralized AI Agent Ecosystem**
    *   **作者**: Xihan Xiong, Zelin Li, Wei Wei et al.
    *   **链接**: http://arxiv.org/abs/2606.26028v1
    *   **一句话说明**: 实证研究了去中心化 AI 代理生态中的信任机制，分析了 ERC-8004 协议在跨组织交易中的可信度表现。

10. **Agentic System as Compressor: Quantifying System Intelligence in Bits**
    *   **作者**: Zihan Qin, Hongrui Zhang
    *   **链接**: http://arxiv.org/abs/2606.25960v1
    *   **一句话说明**: 基于“压缩即智能”的观点，提出用比特量化来衡量从孤立预测到复杂代理系统的智能演化过程。

### 🔧 方法与框架（新技术、基准测试、效率优化）

11. **FORCE: Efficient VLA Reinforcement Fine-Tuning via Value-Calibrated Warm-up and Self-Distillation**
    *   **作者**: Shuyi Zhang, Yunfan Lou, Hongyang Cheng et al.
    *   **链接**: http://arxiv.org/abs/2606.26006v1
    *   **一句话说明**: 提出 FORCE 方法，通过价值校准预热和自蒸馏解决 VLA 模型 RL 微调样本效率低和灾难性遗忘的问题。

12. **On-Policy Self-Distillation with Sampled Demonstrations Reduces Output Diversity** *(注：此篇也可归入LLM，但侧重方法论影响)* -> 替换为更贴合框架的：
    **WinDOM: Self-Family Distillation for Small-Model GUI Grounding**
    *   **作者**: Chengheng Li-Chen, Zhiqian Zhou, Hao Chen et al.
    *   **链接**: http://arxiv.org/abs/2606.25964v1
    *   **一句话说明**: 解决了小参数 GUI 定位模型缺乏标注数据和 SFT 结合难题的问题，通过自家族蒸馏实现了高效部署。

13. **Variable Bound Tightening for Nash Equilibrium Computation in Multiplayer Imperfect-Information Games**
    *   **作者**: Sam Ganzfried
    *   **链接**: http://arxiv.org/abs/2606.25997v1
    *   **一句话说明**: 改进了多人不完备信息博弈中纳什均衡的计算算法，通过变量界收紧提升了求解效率。

14. **Hierarchical Reinforcement Learning for Neural Network Compression (HiReLC): Pruning and Quantization**
    *   **作者**: Kamar Hibatallah Baghdadi, Kawther Guoual Belhamidi, Sara Belhadj et al.
    *   **链接**: http://arxiv.org/abs/2606.26002v1
    *   **一句话说明**: 提出分层集成强化学习框架 HiReLC，自动化地联合进行神经网络剪枝和量化，优化模型效率。

15. **When Does Synthetic Data Augmentation Improve Score-Based Imbalanced Classification?**
    *   **作者**: Zhengchi Ma, Pengfei Lyu, Anru R. Zhang
    *   **链接**: http://arxiv.org/abs/2606.26053v1
    *   **一句话说明**: 建立了合成数据增强在不平衡分类中有效的理论框架，明确了其改善阈值积分和阈值优化的条件。

### 📊 应用（垂直领域、多模态、代码生成）

16. **Real-Time Voice AI Hears but Does Not Listen**
    *   **作者**: Martijn Bartelds, Federico Bianchi, James Zou
    *   **链接**: http://arxiv.org/abs/2606.26083v1
    *   **一句话说明**: 评估主流实时语音系统，发现它们能识别单词但无法有效利用声调情感线索，指出了语音交互的情感智能短板。

17. **Learning Action Priors for Cross-embodiment Robot Manipulation**
    *   **作者**: Dong Jing, Tianqi Zhang, Jiaqi Liu et al.
    *   **链接**: http://arxiv.org/abs/2606.26095v1
    *   **一句话说明**: 针对 VLA 模型在机器人操作中物理运动学习困难的问题，提出利用视觉语言先验来辅助跨形态机器人的动作学习。

18. **AI translation of literary texts is "fine", but readers still prefer human translations**
    *   **作者**: Yves Ferstler, Adam Podoxin, Ty Brassington et al.
    *   **链接**: http://arxiv.org/abs/2606.26040v1
    *   **一句话说明**: 通过读者体验研究发现，尽管 AI 翻译内容准确，但在沉浸感和文学效果上仍不及人工翻译，揭示了当前指标评估的盲区。

19. **SpeechEQ: Benchmarking Emotional Intelligence Quotient in Socially Aware Voice Conversational Models**
    *   **作者**: Liang-Yuan Wu, Zih-Ching Chen, Tongshuang Wu et al.
    *   **链接**: http://arxiv.org/abs/2606.25990v1
    *   **一句话说明**: 提出 SpeechEQ 基准，专门评估语音对话模型在非语言社交线索（如语调、停顿）上的情感智力表现。

20. **Detect, Unlearn, Restore: Defending Text Summarization Models Against Data Poisoning**
    *   **作者**: Poojitha Thota, Shirin Nilizadeh
    *   **链接**: http://arxiv.org/abs/2606.26036v1
    *   **一句话说明**: 针对摘要模型的训练时数据投毒攻击，提出检测、遗忘和恢复的防御框架，保护模型免受恶意微调数据的影响。

## 研究趋势信号

今日投稿显示出**具身智能与语音交互的深度整合**成为热点。VLA 模型不再局限于静态操作，而是通过 RL 微调（FORCE）和动作先验学习提升动态适应能力。同时，语音 AI 的研究从单纯的 ASR 精度转向了对“语调情感”和“社会线索”的理解（Real-Time Voice AI, SpeechEQ），表明多模态 Agent 正在向更细腻的人类交互范式演进。此外，**安全与信任**议题从模型内部对齐扩展到执行时的不可撤销内核及去中心化生态信任，反映了 Agent 部署环境的复杂化。

## 值得精读

1.  **FORCE: Efficient VLA Reinforcement Fine-Tuning via Value-Calibrated Warm-up and Self-Distillation**
    *   **理由**: 随着机器人学习和 VLA 模型的兴起，如何解决 RL 微调中的样本效率和稳定性问题是关键瓶颈。这篇论文提出的价值校准预热和自蒸馏方法，为提升具身智能体的实际落地能力提供了极具操作性的技术路径。

2.  **Real-Time Voice AI Hears but Does Not Listen**
    *   **理由**: 随着 Siri、GPT-Realtime 等产品的普及，语音交互的情感维度被严重忽视。该研究通过严谨的基准测试揭示了当前系统在处理“副语言”信息时的结构性缺陷，对于追求自然人机交互的研究者和工程师具有重要的纠偏意义。

3.  **The Unfireable Safety Kernel: Execution-Time AI Alignment for AI Agents**
    *   **理由**: 现有的对齐研究多集中于训练阶段或系统提示，而这篇论文直击 Agent 作为独立执行主体时的安全风险。提出的“执行时不可擦除安全内核”概念，为解决 Agent 逃逸和权限滥用提供了新的架构级安全思路，具有前瞻性的政策和技术双重价值。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*