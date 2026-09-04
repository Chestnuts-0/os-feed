# AI 开源趋势日报 2026-09-04

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-04 12:47 UTC

---



# AI 开源趋势日报（2026-09-04）

## 1. 今日速览

今日 AI 开源领域焦点集中在 **AI 代理工程（Agent Engineering）** 与 **Agent Skills/记忆基础设施** 的爆发式增长。Anthropic、Google 等大厂正式发布官方 Skills 库，而社区则涌现出大量针对 Claude Code、Codex 等 harness 的第三方可插拔技能、记忆层与上下文优化工具。同时，**本地化、低成本推理与 Token 节约** 成为热门方向，Rust 语言在 AI 基础设施层（向量检索、代理运行时、记忆系统）持续渗透。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | 34,425 | +664 | 高性能 LLM 与多模态模型推理服务框架 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 90,962 | – | 高吞吐、低内存的 LLM 推理引擎 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 75,596 | – | 本地 UI 运行与训练 LLM/扩散模型，支持 GGUF、MLX 等 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 74,575 | – | 统一高效微调 100+ LLM/VLM 的工具 |
| [BellStones-ai/mcp-router](https://github.com/BellStones-ai/mcp-router) | 7,727 | – | MCP 代理网关，统一管理多模型与路由 |
| [upstash/context7](https://github.com/upstash/context7) | 61,608 | +47 | LLM 与 AI 代码编辑器的实时代码文档上下文平台 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | 78,525 | +146 | CLI 代理，可减少 60‑90% LLM Token 消耗 |
| [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | 2,162 | +395 | 开源本地推理服务器，适配多种 AI 代理 |

### 🤖 AI 智能体/工作流
| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 144,021 | +151 | Anthropic 官方终端 AI 编程代理 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 203,749 | +314 | 开源编码代理 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 241,221 | +721 | “与你共同成长的代理” |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 247,833 | +1,139 | Agent harness 性能优化系统，支持多模型 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 248,940 | +2,757 | 真实工程师的 Agent Skills 集合 |
| [anthropics/skills](https://github.com/anthropics/skills) | 173,916 | +512 | Anthropic 官方公开 Skills 库 |
| [google/skills](https://github.com/google/skills) | 19,457 | +132 | 针对 Google 产品与技术的 Agent Skills |
| [add-yosmani/agent-skills](https://github.com/add-yosmani/agent-skills) | 92,196 | +353 | 生产级工程技能，用于 AI 编码代理 |
| [stablyai/orca](https://github.com/stablyai/orca) | 61,422 | +914 | ADE（代理开发环境），支持并行代理集群 |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 32,752 | +46 | 在 Claude Code 中使用 Codex 进行代码审查 |
| [microsoft/power-platform-skills](https://github.com/microsoft/power-platform-skills) | 822 | +12 | Power Platform 开发插件市场 |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | 5,595 | +82 | 长周期代理控制平面，支持多 harness |
| [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | 5,683 | +99 | 代理长期记忆与跨供应商交接方案 |
| [pacifio/atlas](https://github.com/pacifio/atlas) | 3,158 | +419 | 代理源代码控制，统一追踪多代理变更 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 131,252 | +300 | Garry Tan 的 Claude Code 配置，包含 23 个高管角色工具 |
| [WorldFlowAI/everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) | 2,069 | +75 | Claude Code 工具箱 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 32,497 | +311 | 跨平台、多模型支持 |
| [farion1231/cc-switch](https://github.com/farion1231/cc-switch) | 131,036 | +202 | 跨平台桌面助手，整合多个代理 |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | 15,009 | +179 | 为代理提供浏览器自动化，共享登录状态 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 112,247 | – | 使网站对 AI 代理可访问的自动化库 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 81,351 | – | 开源长周期 SuperAgent harness |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 86,151 | – | AI 驱动开发平台 |
| [elizaOS/eliza](https://github.com/elizaOS/eliza) | 19,244 | – | 开源代理操作系统 |
| [langbot-app/LangBot](https://github.com/langbot-app/LangBot) | 17,651 | – | 多平台智能机器人开发平台 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,781 | – | 开源超级 AI 助手与 Agent Harness |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | 40,005 | – | 多 IM 平台集成的 AI Agent 框架 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 39,406 | – | 本地优先的个人 AI 代理 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 51,426 | – | AI 生产力工作室，集成 300+ 助手 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,704 | – | 超轻量自托管个人 AI 代理框架 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | 46,164 | – | 隐私优先的知识工作空间，人机协作 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 37,194 | – | 代理的前端组件库，支持 AG‑UI 协议 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | 35,396 | – | 基于 DeepSeek 的终端编码代理 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | 34,882 | – | 个人 AI 助手，支持多聊天应用 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 32,560 | – | 24/7 协作应用，支持多代理 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 30,733 | – | Google Workspace CLI，含 AI 代理技能 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 29,415 | – | 接入 IDE 的编码代理 |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 27,644 | – | 开源终端 AI 编码代理 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | 25,907 | – | 团队级代理记忆中心 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 24,244 | – | AI 代理与 MCP 工作流自动化 |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | 24,027 | – | AI + 低代码平台 |
| [teableio/teable](https://github.com/teableio/teable) | 21,751 | – | AI 电子表格 |
| [leon-ai/leon](https://github.com/leon-ai/leon) | 17,482 | – | 开源个人助理 |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 17,371 | – | 自我修复的浏览器 harness |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | 14,786 | – | Harness 工程入门教程 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14,280 | – | 本地优先的跨平台桌面代理工作区 |
| [fathah/hermes-desktop](https://github.com/fathah/hermes-desktop) | 14,120 | – | Hermes Agent 桌面伴侣 |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | 14,116 | – | 自演化代理，增长技能树 |
| [waooAI/waoowaoo](https://github.com/waooAI/waoowaoo) | 13,966 | – | 工业级 AI 影视生产平台 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 13,670 | – | 企业级安全代理环境 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 11,139 | – | 企业可自建的开源代理工作空间 |
| [EKKOLearnAI/hermes-studio](https://github.com/EKKOLearnAI/hermes-studio) | 10,841 | – | Hermes Agent 网页仪表板 |
| [presenton/presenton](https://github.com/presenton/presenton) | 10,006 | – | 开源 AI 演示文稿生成器 |
| [GetBindu/Bindu](https://github.com/GetBindu/Bindu) | 9,733 | – | 代理的身份、通信与支付层 |
| [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent) | 9,681 | – | 开源代理框架与元 harness |
| [Narcooo/inkos](https://github.com/Narcooo/inkos) | 9,420 | – | 小说/剧本创作 AI 代理 |
| [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) | 40,913 | – | 开源 Rust 编码代理 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 77,927 | – | 让代理“看见”整个互联网，跨平台数据抓取 |
| [thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist) | 74,031 | – | 现代 Web 开发检查清单（面向人与代理） |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 70,113 | – | 开源 AI 求职搜索代理 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 51,961 | – | AI 生成原生 PowerPoint 演示文稿 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 32,424 | – | 个人交易代理 |
| [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16,155 | – | AI 价值投资研究框架 |
| [simonlin1212/a-stock-data](https://github.com/simonlin1212/a-stock-data) | 9,556 | – | A 股全栈数据工具包，专为 AI 代理设计 |

### 📦 AI 应用
| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [TryGhost/Ghost](https://github.com/TryGhost/Ghost) | 55,162 | +28 | 现代出版、会员订阅与通讯平台 |
| [langgenius/dify](https://github.com/langgenius/dify) | 154,422 | +117 | 构建代理工作流与 RAG 管道的协作式 AI 平台 |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 32,752 | +46 | 在 Claude Code 中使用 Codex 进行代码审查 |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | 122,996 | +114 | 美观、可访问的组件库 |
| [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 88,708 | – | 零配置 AI 聊天助手，支持多模型 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 150,906 | – | 用户友好的 AI 界面，支持 Ollama 与 OpenAI API |
| [janhq/jan](https://github.com/janhq/jan) | 44,331 | – | 完全离线运行的开源 ChatGPT 替代方案 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 65,608 | – | 本地优先的 AI 代理体验平台 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,414 | – | 可视化构建 AI 代理 |
| [syncDreamer/animat](https://github.com/syncDreamer/animat) | 65,165 | – | 开源 AI 视频生成平台 |
| [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | 27,701 | +77 | 无内容过滤的 AI 图像/视频生成工作室 |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | 17,016 | +1,345 | 开源本地 ElevenLabs 替代，支持 646 种语言 |
| [OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr) | 6,588 | +375 | 本地/云端语音转文字听写应用 |
| [CapSoftware/Cap](https://github.com/CapSoftware/Cap) | 21,663 | +121 | 开源 Loom 替代，可分享屏幕录制 |
| [longbridge/gpui-kit](https://github.com/longbridge/gpui-kit) | 13,938 | +199 | 基于 GPUI 的 Rust GUI 组件 |
| [rust-lang/rust](https://github.com/rust-lang/rust) | 117,431 | +458 | 提升软件开发可靠性与效率 |
| [fmtlib/fmt](https://github.com/fmtlib/fmt) | 25,405 | +681 | 现代格式化库 |
| [gchq/CyberChef](https://github.com/gchq/CyberChef) | 35,739 | +16 | 加密/编码/数据处理的瑞士军刀 |
| [TechyCSR/OpenCluely](https://github.com/TechyCSR/OpenCluely) | 894 | +10 | 开源技术面试辅助工具 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 65,496 | +332 | AI harness 设计语言 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 30,549 | +426 | 38 种编辑图表类型，专为代理设计 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 25,615 | – | AI 代理生成 HTML 幻灯片技能 |
| [titanwings/distilly](https://github.com/titanwings/distilly) | 24,341 | – | 将思维过程蒸馏为可复用技能 |
| [trycua/cua](https://github.com/trycua/cua) | 22,184 | – | 计算机使用 2.0 开源驱动与基准测试 |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | 28,964 | – | 将任何网站转换为 CLI |
| [sngyai/Sequoia-X](https://github.com/sngyai/Sequoia-X) | 6,585 | +512 | A 股自动选股系统 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,605 | – | LLM 驱动的多市场股票分析系统 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 102,469 | – | 多代理 LLM 金融交易框架 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 120,427 | – | AI 一键生成高清短视频 |
| [waooAI/waoowaoo](https://github.com/waooAI/waoowaoo) | 13,966 | – | 工业级 AI 影视生产平台 |

### 🧠 大模型/训练
| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 164,778 | – | 最先进的 ML 模型定义框架 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 104,327 | – | 从零实现类 ChatGPT 的 LLM |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 58,422 | +510 | 2 小时内训练 64M 参数 LLM |
| [ericjlw/ModelWhisper](https://github.com/ericjlw/ModelWhisper) | 1,640 | – | 统一 LLM/VLM 训练推理框架 |
| [microsoft/qlib](https://github.com/microsoft/qlib) | 48,278 | – | AI 量化投资平台 |
| [google-research/timesfm](https://github.com/google-research/timesfm) | 30,891 | +340 | 时间序列基础模型 |
| [radixark/miles](https://github.com/radixark/miles) | 2,468 | +55 | 企业级强化学习框架，用于 LLM/VLM 后训练 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,393 | – | LLM 评估平台 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | 6,220 | – | 原子化构建 AI 代理 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,540 | – | Apple Silicon 上学习 LLM 推理系统 |
| [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) | 2,612 | – | 生成式 AI 资源综合指南 |
| [zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN) | 1,797 | – | AI 驱动的多代理研究助手 |
| [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) | 1,834 | – | Agentic RL 资源列表 |
| [EasyJailbreak/EasyJailbreak](https://github.com/EasyJailbreak/EasyJailbreak) | 908 | – | 对抗性越狱提示生成框架 |
| [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) | 850 | – | 在线策略蒸馏资源列表 |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | 623 | – | 模型遗忘资源仓库 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 317 | – | 端侧 LLM 推理，基于 X‑Bit 量化 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | 94 | – | 纯 Rust 从零构建解码器 LLM |
| [LiberCoders/FeatureBench](https://github.com/LiberCoders/FeatureBench) | 91 | – | ICLR 2026 代理编码基准测试实现 |
| [Greninja9257/LabLLM](https://github.com/Greninja9257/LabLLM) | 76 | – | macOS 本地微型 LLM 教学实验室 |
| [ai-glimpse/toyllm](https://github.com/ai-glimpse/toyllm) | 26 | – | ToyLLM 从零学习 LLM |
| [chenyumo166/moziAI-35B-A3B-MOE-MTP](https://github.com/chenyumo166/moziAI-35B-A3B-MOE-MTP) | 9 | – | 本地开源金融 LLM，35B MoE 压缩至 15.5GB |

### 🔍 RAG/知识库
| 项目 | Stars | 今日新增 | 简介 |
|------|-------|----------|------|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 145,628 | – | 代理工程平台 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 52,015 | – | 文档代理与 OCR 平台 |
| [infiniflow/ragflow](https://github.com/infiniflow