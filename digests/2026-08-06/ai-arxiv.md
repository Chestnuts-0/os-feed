# ArXiv AI 研究日报 2026-08-06

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-06 01:29 UTC

---



# ArXiv AI 研究日报 | 2026-08-06

---

## 今日速览

今日论文集中于大模型推理效率优化、智能体能力评估与垂直领域落地三大方向。测试时扩展（Test-Time Scaling）与KV Cache跨模型复用机制的研究持续升温，反映业界对推理成本控制的迫切需求。同时，WorldCup Arena等**实时、防泄漏**的基准测试设计为LLM评估提供了新范式，结合PAST-Bench对递归自我改进的系统性测量，智能体能力评估正从"任务完成度"向"社会与认知深度"演进。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility**
http://arxiv.org/abs/2608.04001v1
| Mohsen Hariri, Weicong Chen, Nahal Shahini et al. |
系统梳理测试时扩展（Test-Time Scaling）的多样性——从单轨迹 deliberation 到多候选投票聚合——并提出可复现的评估框架，对统一该领域研究至关重要。

**2. Cross-Model KV Cache Transfer in LLM Families: A Closed-Form Linear Mapping for Prefill Reuse**
http://arxiv.org/abs/2608.03893v1
| Taekyung Heo, Rasoul Shafipour, Ritchie Zhao et al. |
提出跨模型组内 KV Cache 的闭式线性映射复用机制，避免推理时因模型切换导致的预填充重算，对生产级 LLM 部署成本优化具有直接意义。

**3. ParVL: Parallel Scaling and Expandable Compute Allocation for Multimodal LLMs**
http://arxiv.org/abs/2608.04010v1
| Yang Yang, Qinyu Zhao, Mouxiang Chen et al. |
打破多模态大模型固定计算分配范式，通过并行扩展与可扩张计算分配同时缓解内存与延迟开销，为多模态缩放提供新路径。

**4. Omega-S: A Functional Resilience Index for LLM Fine-Tuning**
http://arxiv.org/abs/2608.03887v1
| Alberto Acedo |
仅需权重矩阵即可计算的 Fine-tune 韧性惩罚项，无需旧任务数据或 Fisher 矩阵，三行代码即可嵌入现有训练流程，降低灾难性遗忘成本。

**5. When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings**
http://arxiv.org/abs/2608.03994v1
| Christopher Schröder, Lukas Gienapp, Ferdinand Schlatt et al. |
揭示 ALiBi 位置编码在线性偏置缩放下的浮点下溢问题，导致注意力权重归零、部分注意力头"失明"，对长序列位置编码设计具有警示意义。

**6. Intertemporal Preference Steering in Qwen3 via Contrastive Activation Addition**
http://arxiv.org/abs/2608.03892v1
| Michal Mráz, Justin Shenk |
在 Qwen3-32B 中识别并操控时间偏好线性表征，通过对比激活添加实现从短期到长期倾向的可控切换，为 LLM 价值观引导提供新工具。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents**
http://arxiv.org/abs/2608.04003v1
| Shuhan Xue, Zixin Ding, Yichen Shen et al. |
首次系统评估个人 AI 智能体将经验转化为更好未来行为的能力，聚焦偏好、任务历史与技能的跨会话保留——递归自我改进的基石性基准。

**8. TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning**
http://arxiv.org/abs/2608.04007v1
| Changle Qu, Sunhao Dai, Hengyi Cai et al. |
针对长程工具交互推理的细粒度信用分配问题，提出轮次级后验自蒸馏方法，突破轨迹级监督的局限，提升工具集成的推理效率。

**9. SocietyBench: Forecasting Counterfactual Social-World Evolution**
http://arxiv.org/abs/2608.04009v1
| Zhenran Wang, Zhonghan Bian, Jinsong Li et al. |
补全 LLM 评估中"社会能力"维度的缺失，衡量模型理解与预测真实社会事件演变的能力，超越任务完成度的单一指标。

**10. Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent**
http://arxiv.org/abs/2608.03979v1
| Zhen Fang, Yu Zeng, Wenxuan Huang et al. |
将多模态深研智能体从静态图像扩展至连续视频流，揭示当前模型在模态偏差与密集时空 grounding 两方面的关键瓶颈。

**11. ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?**
http://arxiv.org/abs/2608.03874v1
| Tianyi Guan, Yiding Wang, Haotong Yang et al. |
检验 LLM 智能体能否真正通过外部技能库持续演化并提升任务解决能力，填补"技能获取"与"能力成长"之间的评估空白。

**12. WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament**
http://arxiv.org/abs/2608.04008v1
| Zhenran Wang, Zhonghan Bian, Jinsong Li et al. |
以 2026 年 FIFA 世界杯 39 天赛程为试验场，首次实现前瞻性、防泄漏的真实世界预测评估，重新定义 LLM 能力评测范式。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**13. Sparse Weight Decomposition for Efficient Circuit Extraction**
http://arxiv.org/abs/2608.03913v1
| Chuanhao Yan, Xuhan Huang, Yawen Duan et al. |
通过稀疏权重分解在密集预训练 Transformer 中提取可解释电路单元，避免额外的预训练开销，降低可解释性与性能之间的 fidelity gap。

**14. Interpretable Adaptive Sampling for LLM Test-Time Scaling**
http://arxiv.org/abs/2608.03961v1
| Mobina Kashaniyan, Ali Jannesari |
提出可解释的自适应采样策略，根据问题难度动态分配推理预算，替代固定 per-query 预算，同时提供可审查的决策依据。

**15. SciRet: A Compute-Aware Empirical Study of Retrieval and Reranking for Scientific RAG**
http://arxiv.org/abs/2608.03860v1
| Kaysarul Anas Apurba, Md. Hasibul Hasan, Rofiqul Alam Shehab et al. |
在 CORD-19 三个语料规模（1K/5K/15K）上系统评估固定科学 RAG 管道，提供计算敏感的检索与重排经验参考，而非提出新模型。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement**
http://arxiv.org/abs/2608.03890v1
| Mercy Prasanna Ranjit, Anirban Porya, Sathvik Joel et al. |
面向临床可用的胸部 X 光 VLM，统一分类、定位与解剖测量三大能力，通过辅助监督与奖励对齐学习提升实用价值。

**17. Can Large Language Models Recover Semantic Optimization Opportunities That Compilers Miss?**
http://arxiv.org/abs/2608.03983v1
| Hailong Jiang, Feng Yu, Emran Hossain et al. |
探索 LLM 能否从异构 C/C++ 上下文中恢复语义优化机会，生成经验证的、契约保持的代码变换，超越传统编译器的优化边界。

**18. Agogic: Performance-Timed Music Tokens for LLM-Native Text-to-Symbolic-Music Generation**
http://arxiv.org/abs/2608.03999v1
| Junhao Chen, Mingjin Chen, Jingjia Mao et al. |
控制变量研究音乐 tokenization 策略，在固定 Qwen3.5  backbone 与数据下仅替换表示，量化 token 设计对文本到音乐生成的独立影响。

**19. MultiGlobeQA: A Multilingual and Globally Diverse Benchmark for Geospatial Reasoning**
http://arxiv.org/abs/2608.03882v1
| Martin Böckling, Elizaveta Nosova, Heiko Paulheim et al. |
构建多语言、全球多样化的地理空间推理基准，检验 LLM 在真实世界实体距离、包含关系等几何与拓扑计算上的局限。

**20. ADMITBench: A Safety-Governed Reference Framework for Evaluating the Admissibility of Industrial LLM Advisories**
http://arxiv.org/abs/2608.03866v1
| Yash Misra, Javal Vyas, Siddharth Gutta et al. |
针对工业场景 LLM 建议的安全性治理框架，在推荐行动层面实施版本化评估合约，检查证据支持与操作许可性。

---

## 研究趋势信号

今日投稿呈现出三个清晰趋势：（1）**评估范式转型**——WorldCup Arena 与 PAST-Bench 标志 LLM 评测从"封闭静态基准"转向"实时、前瞻性、能力深度挖掘"；（2）**推理效率精细化**——Test-Time Scaling、KV Cache 复用与自适应采样研究密集，反映业界对推理成本控制的系统性攻关；（3）**垂直领域从生成走向可用**——CARE-X、ADMITBench 等强调临床与工业场景中的可验证性、安全性与工具集成，而非单纯的性能提升。

---

## 值得精读

**1. WorldCup Arena** — 该论文开创性地设计了无泄漏、前瞻性的实时评测框架，39 天世界杯期间持续追踪 LLM 预测能力，方法学意义远超单一基准，值得所有从事 LLM 评估的研究者深入阅读。

**2. Cross-Model KV Cache Transfer** — 在模型级联与对话中途切换成为生产部署常态的背景下，该工作提供了第一个跨模型组内 KV Cache 复用的闭式解，对优化推理成本具有直接工程价值。

**3. PAST-Bench** — 递归自我改进是个人 AI 智能体的核心承诺，但该论文首次将其拆解为可测量的基础能力维度（偏好保留、技能复用、经验转化），为后续研究提供了清晰的评估坐标。

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*