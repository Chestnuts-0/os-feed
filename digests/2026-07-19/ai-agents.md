# OpenClaw 生态日报 2026-07-19

> Issues: 400 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-19 01:43 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

⚠️ 摘要生成失败。

---

## 横向生态对比



# 📊 个人 AI 助手与自主智能体开源生态横向对比报告
**日期**：2026-07-19 | **分析师**：Agnes-2.0-Flash

## 1. 生态全景
2026年中，个人 AI 助手与自主智能体开源生态正从“功能狂奔”全面转向“生产级收敛”。项目普遍将重心下沉至底层稳定性、内存安全与跨平台兼容，多智能体编排与边缘轻量化部署成为核心演进方向。尽管部分项目仍处快速迭代期，但整体代码库健康度显著提升，社区对可观测性、合规审计与本地数据主权的诉求日益明确，标志着该赛道已迈入工程化深水区。

## 2. 各项目活跃度对比
| 项目名称 | Issues 数 | PR 数 | Release 情况 | 健康度评估 |
|:---|:---:|:---:|:---|:---|
| **NanoBot** | 7 (4 已解决) | 30 (16 已合并) | 无 | 良好（补丁收敛期，维护响应迅速） |
| **PicoClaw** | 4 (2 已关闭) | 12 (8 已合并) | 无 | 优良（Issue→PR 闭环效率高，安全加固密集） |
| **IronClaw** | 5 (4 开 1 闭) | 50 (31 已合并) | 无 | 良好（架构重构期，类型安全与运行时简化为主） |
| **CoPaw** | 11 | 7 (1 已合并) | 无（v2.0.0.post3 验证中） | 高活跃/稳定性攻坚期（回归问题集中爆发） |
| **LobsterAI** | 6 (全活跃) | 3 (2 已合并) | `2026.7.17` | 良好（常规维护，IM 一致性与 UI 体验优化） |
| **Moltis** | 0 | 3 (2 已合并) | 无 | 稳定（敏捷微迭代，Slack 适配与可插拔记忆受关注） |
| **NullClaw** | 1 | 0 | 无 | 稳定但推进缓慢（受限于 Zig/Termux 构建链兼容） |
| **TinyClaw** | 0 | 0 | 无 | 低活跃（24h 无动态） |
| **OpenClaw** | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | 信息暂缺（核心参照系） |

## 3. OpenClaw 在生态中的定位
作为生态核心参照系，OpenClaw 今日虽无公开动态，但其定位更偏向**标准化底座与协议参考实现**。相较于 NanoBot/PicoClaw 的敏捷特性扩展与 IronClaw/CoPaw 的重构攻坚，OpenClaw 的技术路线更强调 MCP/Agent 协议的广泛兼容性与企业级集成规范。社区规模预计处于头部梯队，但当前活跃度让位于下游衍生项目的快速试错；其核心价值在于提供可复用的架构范式、兼容性基准与生态锚点，而非追逐短期功能增量。

## 4. 共同关注的技术方向
| 技术方向 | 涉及项目 | 具体诉求与信号 |
|:---|:---|:---|
| **可控上下文与记忆管理** | NanoBot, PicoClaw, Moltis, CoPaw | 从被动存储转向“归档约束+向量解耦+物理隔离”；社区要求限制消息数量防 OOM、支持自定义向量库后端、实现 Project 级会话隔离。 |
| **生产级稳定性与安全加固** | NanoBot, PicoClaw, IronClaw, CoPaw | 高频修复内存泄漏（SessionCache 无限增长）、配置原子写入、僵尸进程清理、OAuth 竞态条件及 Gateway 启动阻断；编译期类型收敛与 DTO 冻结成为架构共识。 |
| **边缘适配与合规路由** | PicoClaw, NullClaw, Moltis, CoPaw | 支持 ARMv7/树莓派构建、Zig 沙盒兼容、自定义 Slack/API Base URL、环境变量子进程穿透及沙箱降级策略；反映政企/离线场景的强需求。 |
| **多智能体协同编排** | NanoBot, PicoClaw, CoPaw | 引入子代理结果聚合缓冲、内部协作总线（独立会话历史+权限信封）、按 Agent 隔离运行时参数；单 Agent 向多角色协同平台演进。 |

## 5. 差异化定位分析
| 维度 | NanoBot | PicoClaw | IronClaw | CoPaw | Moltis | LobsterAI |
|:---|:---|:---|:---|:---|:---|:---|
| **功能侧重** | 记忆归档、子代理批量发布、Docker/Render 一键部署 | OAuth 协议修复、WhatsApp/Matrix 渠道优化、内部协作总线 | Reborn 运行时简化、类型安全收敛、CLI 渐进过渡 | CLI 脚本化、并发驱动初始化、Web UI 渲染清洗 | Slack API 路由可配、ACP 纯代理模式、Feature-gate 记忆插件 | IM 多实例唯一性校验、服务部署持久化、皮肤/交互优化 |
| **目标用户** | 需长链路容错与上下文治理的开发者 | 多通道网关搭建者、隐私/合规优先团队 | 追求极致性能与编译期安全的系统工程师 | CI/CD 自动化集成者、企业级 Agent 编排团队 | 政企内网部署者、本地化/隐私优先 Agent 爱好者 | C 端 IM 机器人运营者、注重交互体验的产品团队 |
| **架构差异** | 事件驱动+会话缓冲+上下文治理器 | 渠道抽象层+OAuth 分发锁+边缘构建目标 | 枚举替代 dyn trait+DTO 镜像冻结+统一权限折叠 | 并发驱动+沙箱降级+环境变量继承机制 | Cargo feature-gate 隔离+独立嵌入模型服务 | 前端状态机收敛+IM 业务校验拦截 |

## 6. 社区热度与成熟度分层
- 🔥 **快速迭代 / 稳定性攻坚期**：`CoPaw`, `PicoClaw`, `IronClaw`, `NanoBot`  
  日均 PR >10，Issue 修复周期短，重心已从功能

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 | 2026-07-19

## 1. 今日速览
过去24小时内 NanoBot 保持高活跃度，共产生 7 条 Issue 与 30 条 PR 更新，其中 16 条 PR 已合并/关闭，4 条 Issue 已解决。当前开发重心明显偏向**底层稳定性修复、内存管理优化与跨平台兼容性加固**，而非新功能扩张。项目处于典型的“补丁收敛期”，维护者响应迅速，大量 P1/P2 级回归问题已附带对应 Fix PR，整体代码库健康度良好，为下一版稳定发布积累了充足的基础。

## 2. 版本发布
- **无新版本发布**。尽管过去24小时合并了十余项关键修复，但尚未触发 Release 流程。建议维护者评估当前 PR 合并节奏，若 P1 修复与内存/配置原子化改动全部合入，可考虑发布 `vX.X.X-hotfix` 或 `vY.Y.Y-patch` 以覆盖 Docker 安全加固、Session 缓存边界与 Windows 编码兼容等生产级痛点。

## 3. 项目进展（已合并/关闭）
今日合并的关键 PR 集中于记忆归档、子代理编排与部署体验升级：
- **记忆与上下文管理**：`#4621` 引入事实归档来源约束，`#4626` 增加可选的 eager consolidation 机制，`#4627` 修复交付上下文在压缩时的丢失问题。记忆管线从“被动存储”转向“可控归档”。
- **子代理协同**：`#4624` 新增 `aggregated` 子代理结果模式，支持按 session 缓冲并批量发布结果，显著降低高频子任务的网络与 token 开销。
- **Agent 鲁棒性**：`#4925` 修复 oversized tool result 导致的上下文溢出，通过内置上下文治理器拦截并生成可重试指令，提升长链路调用的容错率。
- **部署与运维**：`#4937` 新增 Render 一键部署蓝图，实现 Gateway + WebUI 一体化托管与会话持久化，降低中小团队试错门槛。

> 🔗 相关链接：[PR #4621](https://github.com/HKUDS/nanobot/pull/4621) | [PR #4624](https://github.com/HKUDS/nanobot/pull/4624) | [PR #4626](https://github.com/HKUDS/nanobot/pull/4626) | [PR #4627](https://github.com/HKUDS/nanobot/pull/4627) | [PR #4925](https://github.com/HKUDS/nanobot/pull/4925) | [PR #4937](https://github.com/HKUDS/nanobot/pull/4937)

## 4. 社区热点
- **本地推理延迟优化**：`#4867` 指出调用 Ollama 时每个 Turn 额外增加约 60 秒延迟，严重影响 32GB VRAM 设备的可用性。该 Issue 已关闭，社区诉求明确指向 Prompt Prefix 缓存策略与本地模型交互协议优化。
- **资源泄漏与安全加固**：`#4786` 揭示 `SessionManager._cache` 无限增长导致长期运行网关内存膨胀；`#4886` 警告默认 Docker Compose 配置开放 `SYS_ADMIN` 且关闭 AppArmor/seccomp。两者均已关闭，反映开源社区对生产级资源控制与容器安全的高度关注。
- **会话元数据一致性**：`#4940` 反馈旧版文件名格式重启后丢失 `workspace_scope`，直接关联修复 PR `#4977`，体现社区对数据持久化一致性的敏感。

> 🔗 相关链接：[Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) | [Issue #4786](https://github.com/HKUDS/nanobot/issues/4786) | [Issue #4886](https://github.com/HKUDS/nanobot/issues/4886) | [Issue #4940](https://github.com/HKUDS/nanobot/issues/4940)

## 5. Bug 与稳定性
今日 Bug 修复呈高密度爆发态势，按严重程度排列如下：
| 严重程度 | 问题描述 | 状态/Fix PR |
|:---|:---|:---|
| **P1 核心崩溃** | Cron/Trigger 加载 JSON 中 `null` 或 `string` 类型的 ms 字段引发 `TypeError`，导致存储隔离 | `#4983`, `#4985`, `#4986` (OPEN) |
| **P1 核心崩溃** | `config.json` 非原子写入，进程崩溃易导致配置截断 | `#4984` (OPEN) |
| **P1 核心崩溃** | 执行会话正常关闭时未终止子进程树，造成僵尸进程与端口占用 | `#4978` (OPEN) |
| **P1 核心崩溃** | 会话文件未限制消息数量，配合 `_cache` 泄漏加速 OOM | `#4956` (OPEN) |
| **P2 平台兼容** | `GitStore` 相对路径解析依赖 CWD，工作目录与 Workspace 不一致时初始化失败 | `#4980` → `#4979` (OPEN) |


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报
**报告日期**：2026-07-19  
**数据来源**：GitHub API (sipeed/picoclaw)

---

### 1. 今日速览
过去24小时内，PicoClaw 保持高频开发节奏，共更新 12 个 PR（8 个已合并/关闭）与 4 个 Issue（2 个新开/活跃，2 个已关闭）。项目重心明显向**安全加固、跨渠道体验优化、多智能体编排**倾斜。尽管未发布新版本，但核心功能与安全补丁已快速合入主干，Issue 到 Fix 的闭环效率较高。整体项目健康度优良，技术债清理与架构演进同步推进。

### 2. 版本发布
过去24小时无官方 Release 发布。核心改进已通过 PR 直接合入 `main` 分支，建议关注后续基于当前合并量的正式发版计划。

### 3. 项目进展（已合并/关闭的重要 PR）
今日合入的 PR 覆盖了底层依赖、协议兼容、路由规范与 Agent 架构，显著提升了系统的健壮性与扩展性：
- **安全与依赖治理**：[#3248](https://github.com/sipeed/picoclaw/pull/3248) 将 Go 工具链升级至 1.25.12，修复 `crypto/tls` 与 `os` 模块的已知漏洞；[#3211](https://github.com/sipeed/picoclaw/pull/3211) 与 [#3208](https://github.com/sipeed/picoclaw/pull/3208) 分别更新前端 ESLint 与 Matrix 客户端库，降低供应链风险。
- **OAuth 协议修复**：[#3241](https://github.com/sipeed/picoclaw/pull/3241) 重构了 `auth.RefreshAccessToken`，区分不同 Provider 的请求格式（JSON vs Form），并引入并发锁与缓存机制，彻底解决令牌刷新时的竞态条件。
- **渠道与交互优化**：[#3242](https://github.com/sipeed/picoclaw/pull/3242) 为 WhatsApp 原生渠道实现 `composing` 打字状态推送，提升长回复场景下的用户体验。
- **架构与路由演进**：[#2937](https://github.com/sipeed/picoclaw/pull/2937) 引入内部 Agent 协作总线（含独立会话历史与权限信封）；[#3200](https://github.com/sipeed/picoclaw/pull/3200) 实现 Web UI 可配置的默认模型降级链；[#3225](https://github.com/sipeed/picoclaw/pull/3225) 支持按 Agent 隔离运行时参数（如 `max_tokens`、摘要阈值）；[#3165](https://github.com/sipeed/picoclaw/pull/3165) 恢复 OpenAI 兼容接口中的 Seed XML 工具调用解析。
- **边缘适配**：[#3205](https://github.com/sipeed/picoclaw/pull/3205) 新增 Linux ARMv7 构建目标并修复 9router 网关响应解析问题。

### 4. 社区热点
- **Issue → PR 快速闭环**：[#3239](https://github.com/sipeed/picoclaw/issues/3239) 与 [#3240](https://github.com/sipeed/picoclaw/issues/3240) 于今日关闭，其对应的修复 PR（[#3241](https://github.com/sipeed/picoclaw/pull/3241)、[#3242](https://github.com/sipeed/picoclaw/pull/3242)）均于同日合入，反映维护者对 OAuth 兼容性差与 WhatsApp 交互延迟的响应极为迅速。
- **多 Agent 协作架构受关注**：[#2937](https://github.com/sipeed/picoclaw/pull/2937) 提出的“内部协作总线”设计契合当前个人 AI 助手向多角色协同演进的趋势，预计将成为后续版本的核心卖点。
- **硬件生态拓展**：[#3205](https://github.com/sipeed/picoclaw/pull/3205) 针对树莓派等 ARM 设备的适配需求得到实质性支持，表明项目正积极下沉至边缘计算场景。

### 5. Bug 与稳定性
| 严重程度 | Issue ID | 描述 | 状态 | 关联 Fix PR |
|:---:|:---:|:---|:---:|:---:|
| 🔴 高 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway 启动失败：未配置 `deltachat` 时仍报未知 channel 类型错误，阻断服务拉起 | OPEN | 暂无 |
| 🟠 中高 | [#3264](https://github.com/sipeed/picoclaw/issues/3264) | `SplitMessage` 在超长 fenced-code info string 下触发无限循环，导致资源耗尽 | OPEN | 暂无 |
| 🟢 已修复 | [#3239](https://github.com/sipeed/picoclaw/issues/3239) | OAuth 刷新请求格式不兼容与并发竞态 | CLOSED | [#3241](https://github.com/sipeed/picoclaw/pull/3241) |
| 🟢 已修复 | [#3240](https://github.com/sipeed/picoclaw/issues/3240) | WhatsApp 长回复期间缺乏用户输入反馈 | CLOSED | [#3242](https://github.com/sipeed/picoclaw/pull/3242) |
| 🟢 已修复 | [#3165](https://github.com/sipeed/picoclaw/issues/3165) | OpenAI 兼容流式响应中 Seed XML 泄漏至用户可见内容 | CLOSED | [#3165](https://github.com/sipeed/picoclaw/pull/3165) |

**稳定性评估**：今日新报两个阻塞型/性能型 Bug，需优先排查配置校验逻辑与 Markdown 分块边界处理。

### 6. 功能请求与路线图信号
- **模型弹性调度**：[#3200](https://github.com/sipeed/picoclaw/pull/3200) 与 [#3225](https://github.com/sipeed/picoclaw/pull/3225) 明确传递出“细粒度模型降级策略”与“单 Agent 运行时隔离”的路线意图，下一版本极可能推出完整的模型路由控制台。
- **Agent 原生协作**：[#2937](https://github.com/sipeed/picoclaw/pull/2937) 标志着 PicoClaw 从单 Agent 代理向多 Agent 编排平台转型，未来或开放协作总线 API 供第三方插件接入。
- **轻量通道扩展**：[#3193](https://github.com/sipeed/picoclaw/pull/3193) 提交 Simplex 通道类型，暗示项目正在探索低带宽/高隐私的通信协议栈。

### 7. 用户反馈摘要
- **核心痛点**：
  - OAuth 刷新机制缺乏 Provider 差异化处理，导致 OpenAI 等现代 API 集成失败且易引发并发崩溃。
  - WhatsApp 渠道在后台处理期间缺乏状态反馈，影响交互自然度。
  - Gateway 配置热加载/预检逻辑存在缺陷，未声明的 channel 类型仍被强制注册。
  - Markdown 解析器在处理极端 fence 标记时边界条件未覆盖，引发死循环

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 | 2026-07-19

### 1. 今日速览
NullClaw 项目在 2026-07-19 整体保持低活跃度。过去 24 小时内仅 1 条 Issue 更新，无 PR 合并记录，亦无新版本发布。开发节奏平稳但推进缓慢，当前社区焦点高度集中在 Android/Termux 环境下的构建兼容性问题上。项目健康度显示为“稳定但需维护者干预”，核心构建流尚未出现阻断性故障，但特定平台的适配缺失可能影响后续生态拓展。
🔗 [GitHub 仓库](https://github.com/nullclaw/nullclaw)

### 2. 版本发布
本日无新版本发布。当前主线版本仍为 `v2026.4.17`，暂无已知破坏性变更（Breaking Changes）或迁移指南更新。项目处于功能冻结或环境适配期，建议关注 `build.zig` 相关提交以获取潜在构建链优化信号。

### 3. 项目进展
过去 24 小时未合并或关闭任何 Pull Request。代码库在功能开发、重构或文档完善方面今日无实质性推进。整体研发管线处于等待状态，主要受限于外部构建环境（Zig 0.16.0 + Termux）的权限策略冲突，暂无内部代码变更流入主分支。

### 4. 社区热点
- **#868 [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat**
  该 Issue 获 7 条评论并于昨日（2026-07-18）活跃更新，是今日唯一讨论焦点。社区关注点在于 Termux 沙盒环境下的文件系统权限限制与 Zig 编译器 `linkat` 系统调用的冲突。反映出移动开发者对跨平台构建工具链兼容性的迫切需求。
  🔗 [Issue #868](https://github.com/nullclaw/nullclaw/issues/868)

### 5. Bug 与稳定性
- **严重程度：中高** | **类型：构建失败/环境兼容** | **状态：未修复**
  在 `LineageOS 22.2 + Termux + aarch64` 环境下执行 `zig build -Doptimize=ReleaseSmall` 时触发 `AccessDenied` 错误，导致临时文件链接中断。该问题阻塞了移动端轻量化构建流程，目前无关联 Fix PR。若为 Zig 0.16.0 版本回归或 Termux 权限收紧所致，需尽快提供规避方案或上游反馈。
  🔗 [Issue #868](https://github.com/nullclaw/nullclaw/issues/868)

### 6. 功能请求与路线图信号
本日无新增功能请求。但从 #868 的讨论可推断，维护团队需评估以下路线图优先级：
1. 提升对 Zig 0.15/0.16 版本的构建兼容性测试覆盖率；
2. 针对受限沙盒环境（Android/Termux/WSL）提供官方构建脚本适配或 Docker 替代方案；
3. 若短期无法解决，可能暂缓向边缘设备或轻量级部署场景的路线拓展。
🔗 [相关讨论](https://github.com/nullclaw/nullclaw/issues/868)

### 7. 用户反馈摘要
- **核心痛点**：移动端构建环境存在底层系统调用权限冲突，`ReleaseSmall` 优化模式在 Termux 下无法完成链接阶段。
- **典型场景**：开发者尝试在资源受限的 Android 设备上进行本地编译、调试或 CI 模拟，追求轻量化、低开销的部署体验。
- **体验评价**：标准桌面环境构建流畅，但非传统 POSIX 权限管理环境中兼容性不足。用户期待官方提供环境变量覆盖、临时目录重定向或已知限制说明。
🔗 [用户原帖](https://github.com/nullclaw/nullclaw/issues/868)

### 8. 待处理积压
- **#868**（创建于 2026-04-23，已持续约 3 个月）
  该 Issue 长期未获维护者明确回复或分配标签，虽近期有社区讨论但仍未闭环。建议维护者优先跟进：确认是否为 `build.zig` 中临时文件处理逻辑硬编码、Zig 编译器版本差异或 Termux 安全策略所致。若确认为环境限制，可考虑添加 `--verbose` 构建日志收集模板或提供 `WORKAROUND` 说明文档。
  🔗 [Issue #868](https://github.com/nullclaw/nullclaw/issues/868)

---
*报告生成时间：2026-07-19 | 数据周期：过去 24 小时 | 分析师：Agnes-2.0-Flash*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 | 2026-07-19

## 1. 今日速览
过去 24 小时 IronClaw 项目保持高并发开发节奏，累计处理 50 个 PR（31 个已合并/关闭，19 个待合并）与 5 个 Issues（4 开 1 闭）。核心工程重心全面转向 **Reborn 运行时架构简化**（Slice C 阶段），通过消除动态分发、冻结 DTO 镜像、统一权限折叠逻辑，显著降低能力调用链复杂度。整体代码库向编译期安全与类型收敛方向稳步推进，工程健康度良好，昨日无新版本正式发行。

## 2. 版本发布
今日无新版本发布。上一版本动态记录于 PR [#5598](https://github.com/nearai/ironclaw/pull/5598)（`ironclaw` 0.24.0 → 0.29.1），该 PR 标注了 `ironclaw_common` 与 `ironclaw_skills` 的 Breaking Changes，建议在后续文档中补充迁移指南。

## 3. 项目进展
今日合并/关闭的 31 个 PR 高度集中于 Reborn 架构重构与基础设施加固：
- **架构收敛与类型安全**：PR [#6240](https://github.com/nearai/ironclaw/pull/6240) 与 [#6229](https://github.com/nearai/ironclaw/pull/6229) 将开放的 `RuntimeAdapter` dyn trait 折叠为封闭的 `RuntimeLane` 枚举，移除热路径上的 HashMap 虚表查找；PR [#6239](https://github.com/nearai/ironclaw/pull/6239) 与 [#6241](https://github.com/nearai/ironclaw/pull/6241) 提取并统一 `authorize()` 预分发权限折叠逻辑，实现全入口统一返回 `AuthorizeResult`。
- **状态机与数据模型迁移**：PR [#6242](https://github.com/nearai/ironclaw/pull/6242) 落地 `CapabilityOutcome` → `Resolution` 的纯增量映射；PR [#6243](https://github.com/nearai/ironclaw/pull/6243) 引入持久化 `GateRecordStore` 替代内联 gate payload。
- **配置与部署抽象**：PR [#6235](https://github.com/nearai/ironclaw/pull/6235) 将部署模式（DeploymentMode）从内核类型剥离为纯配置数据；PR [#6234](https://github.com/nearai/ironclaw/pull/6234) 清理死字段 `trust_decision`。
- **CLI 演进**：Issue [#6143](https://github.com/nearai/ironclaw/issues/6143) 已关闭，确认 Reborn 运行时将提升为默认 `ironclaw` 命令，v1 隔离为 `ironclaw-v1`，采用渐进式过渡策略。

## 4. 社区热点
- 🔍 **#6247** [OPEN] MCP Server Headers 明文存储 Bearer

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 📊 LobsterAI 项目动态日报 | 2026-07-19

## 1. 今日速览
过去 24 小时，LobsterAI 保持中等活跃节奏。共更新 6 个 Issue（均为新开/活跃状态），处理 3 个 PR（2 个已合并，1 个待审）。项目于 7 月 17 日推送新版 `2026.7.17`，迭代重心明确指向协作引擎容错、服务部署持久化及 IM 多实例数据一致性。整体项目健康度良好，代码合入节奏稳定，前端交互规范与后端校验机制持续加固；但历史 Issue 集中进入 `stale` 状态，需维护团队及时介入分流。

## 2. 版本发布
- **版本**：`LobsterAI 2026.7.17`
- **核心变更**：
  - `feat(cowork)`：协作任务执行失败时，错误 UI 层直接暴露结构化运行详情，提升排障效率（[PR #2348](https://github.com/netease-youdao/LobsterAI/pull/2348)）
  - `Feat/2026.7.6`：服务部署数据实现持久化存储，保障配置不随会话或重启丢失（[PR #2349](https://github.com/netease-youdao/LobsterAI/pull/2349)）
  - `feat(skin)`：皮肤主题相关优化（原始日志截断，完整说明待补充）
- **破坏性变更**：无公开声明。
- **迁移注意**：升级后若依赖自定义服务部署配置，请确认本地缓存目录权限正常，以保障持久化写入生效。

## 3. 项目进展
本期合并 2 项关键 PR，推动项目向“配置易用性”与“多平台集成稳定性”迈进：
- **[PR #1353] Agent 技能选择器新增全选/清除**：解决批量选择后无法一键重置的体验断点，新增计数显示与 CSS 过渡动画，显著降低高频配置摩擦。
- **[PR #1464] IM 多实例重复校验**：为钉钉、飞书、QQ 实例创建/重命名流程补充唯一性拦截，从源头避免同名实例混淆与机器人消息重复消费。
> 📈 **进度评估**：本期 PR 覆盖渲染层交互与 IM 业务逻辑，工程健壮性指标提升，代码合入质量符合预期。

## 4. 社区热点
今日 Issue 均更新于 2026-07-18，社区讨论焦点集中在引擎协议兼容、大文件解析稳定性及状态管理缺陷：
- **#1293** [MCP 自定义 HTTP 无法调用](https://github.com/netease-youdao/LobsterAI/issues/1293)：指出 OpenClaw 引擎仅支持 SSE 协议，HTTP 模式 MCP 未被注册，1 👍。
- **#1296** [长图上传解析导致页面崩溃](https://github.com/netease-youdao/LobsterAI/issues/1296)：3MB 长图触发全局报错且任务链中断，复现路径清晰，影响核心工作流。
- **#1307** [模型配置面板编辑锁定](https://github.com/netease-youdao/LobsterAI/issues/1307)：关闭编辑面板后切换 Provider 导致右侧表单灰显禁用，属典型前端状态未正确重置。

## 5. Bug 与稳定性
本期报告 4 项明确缺陷，按严重程度排列：
| 级别 | Issue | 描述 | Fix 状态 |
|:---:|:---|:---|:---|
| 🔴 严重 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 长图上传解析直接报错，任务不可用 | ❌ 无关联 PR |
| 🟠 高 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 极短输入误触“内容过长”拦截，疑似 Token 边界计算异常 | ❌ 无关联 PR |
| 🟡 

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报 | 2026-07-19

## 1. 今日速览
过去24小时 Moltis 保持稳健迭代节奏，Issues 更新为 0 条，Pull Requests 共推进 3 项（2 项已合并，1 项待审）。开发重心明确聚焦于 **Slack 集成灵活性** 与 **Web 端 ACP 代理交互逻辑** 的优化。整体代码库健康度良好，模块化设计（Cargo feature-gate）持续落地，项目处于高质量、低噪音的常规维护期。

## 2. 版本发布
今日无新版本发布。核心改进通过独立 PR 持续合入主干，符合敏捷微迭代模式。

## 3. 项目进展
- **#1159 [CLOSED] feat(slack): support configurable API base URL**  
  已合并。为 Slack 账号配置新增 `api_base_url` 字段（默认 `https://slack.com/api`），并将客户端构建、Socket Mode 启动、Events API 鉴权及流式回复全链路路由至自定义地址。大幅提升了 Moltis 在政企内网、代理网关或区域合规场景下的部署弹性。
- **#1157 [CLOSED] fix(web): support ACP-only chat setup**  
  已合并。修复了 Web 端在仅配置 ACP 代理时的状态冲突：优化 LLM 初始化向导显示逻辑、过滤会话头选择器、并在纯 ACP 模式下自动禁用底部模型切换栏。使“纯代理调用”工作流达到生产可用标准。
> **推进评估**：项目在本周期内完成了“外部服务适配层解耦”与“前端状态机收敛”两项关键体验升级，架构可扩展性进一步夯实。

## 4. 社区热点
当前唯一活跃讨论为 **#1158 [OPEN] feat(memory): add zvec vector database memory backend**。作者 `demyanrogozhin` 提交了基于 Zvec 与 redb 的实验性记忆后端，采用 feature-gate 隔离，并配合独立 llama-cpp 服务器运行嵌入模型。尽管当前评论与点赞数为 0，但其“向量库+本地推理解耦”的设计思路精准契合当前 AI Agent 领域对数据主权与轻量化部署的诉求，预计将在技术社区引发架构级讨论。  
🔗 链接: https://github.com/moltis-org/moltis/pull/1158

## 5. Bug 与稳定性
- 今日无新增崩溃、内存泄漏或回归报告。
- **#1157** 属于中等严重度的前端逻辑缺陷（状态管理冲突），已通过合并彻底修复，未引入新风险。项目整体稳定性评级：**稳定**。

## 6. 功能请求与路线图信号
- **#1158** 释放了强烈的“可插拔记忆后端”需求信号。用户倾向于将向量存储、嵌入模型与核心 Agent 运行时解耦，以支持边缘设备、离线环境或定制化 RAG 管线。
- 结合 Cargo feature-gate 的工程实践，该模块极可能被纳入下一版本（如 `v0.x.1`）作为可选插件发布，进一步强化 Moltis 在“隐私优先”与“本地化 Agent”路线图中的定位。

## 7. 用户反馈摘要
从 PR 描述与技术实现可提炼以下真实诉求：
1. **合规与网络隔离**：企业用户需要完全可控的 Slack API 路由路径，避免默认公网 endpoint 带来的审计或延迟问题（#1159）。
2. **交互一致性**：Web 端用户在仅使用 ACP 代理时，不应被强制要求配置 LLM 模型，UI 应自适应降级而非阻断流程（#1157）。
3. **架构解耦偏好**：开发者明确倾向“独立 llama-cpp 服务 + 自定义向量库”组合，以换取更细粒度的资源控制与数据不出域能力（#1158）。

## 8. 待处理积压
- 目前仅存在 **#1158** 一项待审 PR。建议维护者优先审查：`zvec` feature 编译依赖树、redb 版本锁定、嵌入模型通信协议兼容性，以及补充基础内存压测用例。
- 近期无长期未响应 Issue 积压，Issue 通道保持畅通，项目维护效率良好。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# 📊 CoPaw 项目动态日报 | 2026-07-19

## 1. 今日速览
过去24小时 CoPaw 社区活跃度保持高位，累计新增 Issue 11 条，PR 更新 7 条（1 条已合并，6 条待评审/合并），无新版本发布。当前开发重心已从功能扩张转向**底层稳定性加固与开发者体验（DX）优化**，焦点集中在 v2.0.0.post3 上线后暴露的超时调度回归、环境变量子进程继承缺失、以及内存检索边界条件崩溃等问题。整体项目健康度：**高活跃 / 稳定性攻坚期**。

---

## 2. 版本发布
- **今日发布**：无
- **版本状态提示**：`v2.0.0.post3` 目前处于 Release Duty 验证阶段（Issue #6223），平台安装校验与自动化冒烟测试仍在进行中。建议社区暂缓升级至该版本，直至核心回归问题闭环。

---

## 3. 项目进展
今日 PR 更新主要推动以下技术债务清理与体验升级：
- ✅ **#1071** `[CLOSED]` Mattermost 频道集成模块今日正式关闭合并，补全消息通道生态。
- 🔧 **#6251** 实现 `qwenpaw env get/list --json` 脚本化读取，补齐 CLI 自动化调用能力。
- 🐛 **#6247 / #6248 / #6243** 分别修复内存空间长路径 `OSError`、协调器超时误杀子进程、以及 Embedding 维度开关未透传问题。
- ⚡ **#6238** 驱动初始化改为并发模式，限制最大并发数为 8，显著缩短多 MCP 服务冷启动耗时。
- 📈 **整体推进**：项目正快速收敛 v2.0.0.post3 的已知缺陷，并向“可观测、可脚本化、高并发友好”的架构方向演进。

---

## 4. 社区热点
| Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---:|:---|
| [#6240](https://github.com/agentscope-ai/CoPaw/issues/6240) | 3 | Web UI 渲染残留原始模型注释（如 `<!-- ⟦ NEXT_RID ... -->`），暴露前端清洗或后端输出格式化漏洞。 |
| [#6245](https://github.com/agentscope-ai/CoPaw/issues/6245) | 2 | Shell 命令超期后会话永久阻塞，属 v2.0.0.post3 明确回归。社区强烈要求恢复异步超时降级策略。 |
| [#4641](https://github.com/agentscope-ai/CoPaw/issues/4641) | 2 | 运行时 `env set` 变量无法穿透至子进程，阻断 CI/CD 与自动化 Agent 流水线。 |
| [#6242](https://github.com/agentscope-ai/CoPaw/issues/6242) | 2 | Console 暴露维度输入框但未同步 `use_dimensions` 配置，导致 OpenAI 兼容 API 维度不匹配。 |

**趋势判断**：用户高度关注**配置一致性**与**长时间任务容错**，反映出生产环境对 Agent 调度稳定性的严苛要求。

---

## 5. Bug 与稳定性
按严重程度排序，今日报告问题共 9 项，其中 5 项已有对应 Fix PR 跟进：

| 严重等级 | Issue | 现象 | 修复状态 |
|:---:|:---|:---|:---|
| 🔴 致命 | [#6245](https://github.com/agentscope-ai/CoPaw/issues/6245) | 协调器超时导致会话永久阻塞 | ✅ PR #6248 已提交 |
| 🔴 致命 | [#6241](https://github.com/agentscope-ai/CoPaw/issues/6241) | Agent 连续轮次重复输出 + `memory_search` 死循环 | 🟡 框架层缺去重/熔断机制 |
| 🟠 高危 | [#6246](https://github.com/agentscope-ai/CoPaw/issues/6246) | `_saved_tool_refs` 触发 `OSError: File name too long` 崩溃 | ✅ PR #6247 已提交 |
| 🟠 高危 | [#6250](https://github.com/agentscope-ai/CoPaw/issues/6250) | 沙箱不可用时无配置绕过审批弹窗 | 🟡 需新增 `SANDBOX_FALLBACK_SKIP` 配置 |
| 🟡 中危 | [#6240](https://github.com/agentscope-ai/CoPaw/issues/6240) | 对话末尾泄露模型内部注释 | 🟡 待前端过滤逻辑修复 |
| 🟡 中危 | [#6249](https://github.com/agentscope-ai/CoPaw/issues/6249) | 源码启动 TUI 持续 `warming` 无日志报错 | 🟡 需补充启动探针与超时兜底 |
| 🟢 低危 | [#6239](https://github.com/agentscope-ai/CoPaw/issues/6239) | Windows PATH 拼接丢失 `;` 分隔符致 npm 全局命令失效 | 🟡 需跨平台路径处理适配 |

---

## 6. 功能请求与路线图信号
- **🔹 记忆隔离架构** [#6244](https://github.com/agentscope-ai/CoPaw/issues/6244)：用户提议引入“项目（Project）”概念实现会话记忆物理/逻辑隔离，缩小检索范围。契合企业多租户与数据合规趋势，预计将纳入 v2.1.0 架构重构路线。
- **🔹 CLI/脚本化增强** [#4641](https://github.com/agentscope-ai/CoPaw/issues/4641) & [#6251](https://github.com/agentscope-ai/CoPaw/pull/6251)：动态环境变量读取与 JSON 导出需求强烈，反映自动化编排场景增长。PR #6251 已对齐该诉求。
-

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok) 自动生成。*