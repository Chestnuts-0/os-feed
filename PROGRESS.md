# GitTok P0a 卡片排版根治 — 执行进度

## 开工回执（2026-08-10，任务 0 核对通过）

- 理解目标：管道评分后校验 reasonCn effLen≥100 + summaryCn 20-35 字，不达标单 repo 重评≤3 次，仍失败走 detail 兜底（存量卡）/ pending 队列（纯新卡）；存量 849 张重评收敛 100%；渲染侧 3 处 CSS 修复；headless 五项验收全 PASS；提交上线 CI 绿
- 顺序：任务0 基线核对 ✅ → 任务1 管道校验+兜底+单测 → 任务2 存量重评收敛（备份→清字段→连跑）→ 任务3 CSS 3 处 → 任务4 验收脚本 → 任务5 提交/CI/Deploy
- 最大风险：①免费模型 agnès 重评失败率 10-15%，849 张可能多轮才收敛（预算 1-3 轮，停滞恢复 bak 如实报告）②重评期间 GitHub API 需代理环境变量，漏 export 会导致 refresh 全失败 ③CI lint 短路后续步骤，需逐轮复查 jobs
- 基线：HEAD=a374bd1，vitest 230 passed + 3 failed（Windows 路径分隔符基线失败，不修），工作区除遗留 tmp_rescore_test.ts（不提交）外干净

## 任务 1：管道长度校验 + 兜底（✅ 完成）

- index.ts：新增 `effLen()`（全角 1/半角 0.5）、`passesLengthCheck()`、`fallbackReasonFromDetail()`（跳过第一段，累计≥100 后句号/130 截断）；`loadExistingScores` 改返回 `{scores, detailMap}`；`retryScoring` 加 maxAttempts+checkLength 参数（组装循环用 3 次带校验，scoreBatched 缺失补评用 1 次不校验）；组装循环校验插入点：不达标→重评≤3 次→detail 兜底→pending
- prompts.ts：reason_cn 加「必须写满约 3 行（100 字以下太短不合格），多写技术细节和具体能力」
- 单测 feed-length.test.ts 7 用例全过
- **决策记录（任务书三死规矩冲突，按 skill「内部矛盾→按意图+书面记录」处理）**：①缓存命中的存量卡豁免长度校验（既有测试「只增不减回归」锁定历史卡缓存命中零重评 + 增量管道零成本设计）；存量短卡由任务 2 清 reasonCn 失效后走新评分路径收敛，最终状态不受影响 ②重评失败 + detail 兜底也失败（detail 异常短）→ 保留原评分进 feed + 警告（任务书未规定此分支，补「不丢卡」默认，真实数据 detail 全库 min 125 字几乎不触发）
- 验收：feed-length 7 passed；全量 237 passed + 3 基线失败（report.test.ts Windows 路径，无新增）；TSC_OK

## 任务 2：存量重评收敛（✅ 完成）

- 数据核对：1174 卡，effLen<100 = 816，summary 不达标 77，并集 849（与任务书完全一致）；detail 0 缺失，94% 五段，短卡兜底可用性 816/816
- 已备份 feed.json.bak（4128506 字节）；D:/tmp/p0a_clear_reason.py 只清不达标卡 reasonCn（禁清 detailCn/aiScore）写回
- **Run1（log /d/tmp/p0a_rescore_run1.log）✅**：934 张批量评分（187 批）+ 重评 ≤3 次 + detail 兜底（~360 张兜底全部成功，effLen 100-130.5）；agnès 当日故障率远高于排查时（空响应/JSON 截断/429 限流），重评多数 3 次全败走兜底，兜底机制 100% 兜住不丢卡
- **Run2/Run2b（log /d/tmp/p0a_rescore_run2.log + run2b.log）✅**：清 149 张 summary 不达标卡 reasonCn 重评（Run2 完成写盘后被误判卡死 kill，数据幂等重跑 Run2b 收尾；中间一次 agnès 挂起 4 分钟无日志）
- **最终数据（任务书验收命令输出）**：总卡数 1240，**effLen<100 = 0**，summary 不在 20-35 = **38 张（3.1% ≤ 5% 线）**，bak 对比**丢失 0**（只增不减）；pending-retry.json 7 条（随提交）；1 张缺 detailCn（Tencent/Hippy，reason/summary 达标不影响）

## 任务 3：渲染侧 3 处修复（✅ 完成）

- `.card-subtitle` 加 flex-wrap: wrap + `.card-subtitle > * { flex-shrink: 0 }`（防「11个月前」竖排）
- `.detail-summary` 加 -webkit-box line-clamp 2（padding/背景/字号保留）
- `.detail-reason` white-space: pre-wrap → normal（.detail-detail 的 pre-wrap 未动）
- 768px 媒体查询内加 `.card-subtitle { gap:6px; font-size:0.68rem }` + `.source-badge { padding:1px 6px }`
- prettier 通过；`cd web && npm run build` 0 错误

## 任务 4：headless 验收脚本（✅ 完成，五项全 PASS）

- D:/tmp/gittok_p0a_accept.py：http.server 8788 + Chrome headless 9398（独立 profile p0a_accept_profile）+ websocket 120s
- **验收结果（真实数据 1240 卡，build + cp 后）**：
  - 1.桌面1440 推荐+热门：44 + 770 张，**空行 0** ✓
  - 2.桌面1920 热门：808 张，**空行 0** ✓（之前 1920 空行 63%，现 0）
  - 3.移动端390：58 张，**竖排 0**，卡高分布 [279×18, 308×40]，最大 308 < 338 ✓
  - 4.详情弹窗：3 张卡 summary 渲染行数 [2,2,2] ✓
  - **全部 PASS ✓**
- 脚本修坑记录：class CDP 覆盖常量 CDP=9398（改 CDP_PORT）；netstat 输出 GBK 解码（kill_port）

## 任务 5：提交 + push + CI + Deploy（✅ 完成）

- commit c8faa82「fix: 管道评分长度校验 + detail 兜底（P0a 空行根治）」9 文件（BLOCKED.md 含决策记录随交付提交）
- push 被拒（线上今日 digest 4 提交：22cb635/473c707/ba6ba3a/67d2569）→ rebase FETCH_HEAD
- **⚠️ rebase 冲突取错方向**：rebase 中 `--ours` = 线上（与 merge 相反），feed.json/following.json/pending-retry.json 被线上 digest 旧产物覆盖（1216 卡 838 短卡）并 push 上线 → 从 reflog f2039c5 恢复重评产物，补提交 1b1bd53 修正上线
- CI lint 失败（feed-length.test.ts 4 个未用变量，本地没跑 eslint 的锅）→ 修复 + 提交 e276f7a → **CI success**
- **最终状态**：本地 HEAD = 线上 HEAD = e276f7a；线上 feed.json 1240 卡 effLen<100=0（与本地一致）；站点 https://chestnuts-sisyphus.github.io/os-feed/ HTTP 200；Deploy Web（1b1bd53，data/ 变更触发）success；本地测试 237 passed + 3 基线失败（无新增）
- 教训：rebase 冲突 --ours/--theirs 语义与 merge 相反；本地必须跑 `pnpm lint`（CI 会短路）；push 前用 `git show <old_sha>:<file>` 交叉验证数据文件

## 交付总结（P0a 完成）

- 数据：全库 reasonCn effLen≥100 100%（816→0），summary 20-35 96.9%（38/1240 ≤5% 线），零丢卡（1174→1240 只增不减）
- 渲染：headless 五项全 PASS（1440/1920 空行 0、移动端无竖排卡高<338、弹窗≤2 行）
- 约束：改动全在白名单；CI 四步全绿 + Deploy Web 绿；测试 230+3 基线无新增失败；BLOCKED.md 随提交（任务 1 决策记录）
- 遗留：tmp_rescore_test.ts（08-09 排查残留，未跟踪未提交）

---

# GitTok P0b 个人数据不丢（2026-08-10）

## 开工回执（任务 0）
- 目标：个人数据不丢——损坏自动备份现场+bak 轻量恢复（列表永不静默丢）+ 导出/导入迁移 + 存储异常可见（禁静默 catch）
- 顺序：任务1 storage.ts 封装+App.tsx 替换+单测 → 任务2 导出/导入 UI → 任务3 headless 七项验收 → 任务4 提交+push+CI+Deploy
- 最大风险：① load/save 逻辑等价性（调用点数据形状不能变）② 基线 239+3 无新增失败 ③ push 代理/CI 网络抖动 ④ 导入合并语义（并集实现错）
- 状态：任务0 完成（HEAD=51a99a3、工作区干净、基线 239 passed + 3 failed 确认）

## 任务日志
- 2026-08-10 任务0：基线核对通过（HEAD=51a99a3、工作区干净、239 passed + 3 failed）
- 2026-08-10 任务1：storage.ts 完成（loadSafe 损坏留现场+bak 恢复+fallback；saveDual 双写+QuotaExceeded 删 bak 重试）；App.tsx 12 个 load/save 全部改走封装，数据形状保持；storage.test.ts 9 个用例全过；全量 248 passed + 3 failed 无新增失败；根 tsc + web tsc 都过
- 2026-08-10 任务2：导出/导入 UI 完成（我的页工具区：备份数据下载 + 恢复数据 file input + 合并/完全恢复双选项 + 导入前自动备份当前）；构建 0 错误
- 2026-08-10 任务3：headless 验收七项全 PASS（损坏自愈/bak双写/导出6key/导入合并/导入完全恢复/交互回归）。坑：wait_for 传 CSS 选择器会拼成非法 JS 表达式（必须 document.querySelector 包装）；点赞按钮只在详情弹窗；收藏后 feed 重排导致 .card 第一张变化（关注改用详情内 creator-btn）；导出 keys 无值须空串保证 6 key 全量
- 2026-08-10 任务4：提交 push 上线（见下方交付总结）

## 交付总结（P0b 完成）
- 提交：253aed9（feat 主提交）+ 27b7429（fix Deploy tsc）
- 数据不丢链路：storage.test.ts 9 用例全过（损坏留现场/bak 恢复/bak 损坏 fallback/QuotaExceeded 删 bak 重试/双写/异常 warn）；headless 七项全 PASS（损坏自愈/双写轻量/导出 6 key/导入合并/导入完全恢复/交互回归持久+三视图）
- 约束：改动全在白名单（git status 核对）；CI 四步全绿 + Deploy Web 绿；测试 248 passed + 3 基线失败无新增；线上 HEAD=本地=27b7429，站点 HTTP 200；BLOCKED.md 随交付（P0b 无待裁决项）
- 偏差记录（任务书未预见）：Deploy 工作流 web 独立 npm ci 无 vitest → storage.test.ts tsc -b TS2307 → @ts-ignore 只跳过编译期模块解析（测试仍由根 vitest 真实运行，不装新包不改 workflow 的合规解）
- 教训：验收脚本 wait_for 传 CSS 选择器会拼成非法 JS 表达式（必须 document.querySelector 包裹）；点赞按钮只在详情弹窗；收藏后 visibleCards 重算 feed 重排，取第一张卡会变（从详情内操作最稳）；导出 keys 无值须空串保证全量

---

# GitTok .refresh_cursor 随 digest 提交（2026-08-11）

- 背景：stars 轮转刷新游标（data/.refresh_cursor）被 .gitignore 忽略 → CI clean checkout 每轮从 0 开始（实证：08-11 日志 `cursor 0/1306`）。当前 REFRESH_BATCH=2000 > 库 1306 全刷一轮游标回 0，无实际损失；库持续增长（~35/天）超过 2000 后 batch<total，游标必须持久化才能轮转续跑，否则永远只刷前 2000 个、后续 repo 的 starGrowth 失真
- 改动：.gitignore 删 `data/.refresh_cursor` 行 + 提交游标文件（当前值 0 合法=全刷完回原点）；digest workflow `git add digests/ data/` 自动携带
- 验证：CI success + Deploy Web success（data/** 触发重复部署一次，无害）；线上 HEAD=本地=b0f71f3
- 边界：真正收益在库超 2000 后显现；若想提前轮转可调小 REFRESH_BATCH（待议，未动）

---

# GitTok 三件套（2026-08-11）：Action 升级 + 品牌清理 + 智谱 LLM 切换

## ① GitHub Actions 升级（node24）
- 背景：checkout@v4/setup-node@v4/pnpm/action-setup@v4 跑 Node 20 runtime，GitHub 已弃用（08-11 早 digest 日志 warning 实证）
- 改动（279a923）：checkout@v6 / setup-node@v7 / pnpm/action-setup@v6 / configure-pages@v6 / deploy-pages@v5 / upload-pages-artifact@v5（CI 上实际用 pnpm，本地才用 npm）
- 验证：CI 全绿 + 新 run 日志 `Node.js 20 is deprecated` = 0（升级前 3 个 action 触发）

## ② agents-radar 品牌残留清理
- 背景：08-09 改名只修 URL，品牌名残留 22 处（飞书/Telegram 标题、RSS title、日报页脚、社媒文案、8 个 UA、注释、测试断言）
- 改动（0eaff4c）：全量替换 GitTok；social.ts 旧链接 duanyytop/agents-radar → Chestnuts-Sisyphus/os-feed；README 历史叙述保留；web.ts UA 的 search?q 链接修正
- 踩坑：sed 顺序——先全局替换再修 URL 会匹配不到（agents-radar 已被替换成 GitTok），两步修复
- 验证：src 零残留、测试全过、CI 绿

## ③ LLM 切换 agnès → 智谱 GLM-4.7-Flash
- 调研结论：agnès=免费 AI 网关（双重免费=结构不稳定）；智谱官方永久免费 GLM-4.7-Flash（200K 上下文/128K 输出，2026 免费主力，替代已下线的 4.5-Flash）；DeepSeek 兜底（chat 1 元/2 元每百万 token，已有 provider）
- 对比测试（15 卡真实 prompt）：批量解析成功率 agnès 47% vs zhipu 87%；单 repo 重评达标 20% vs 40%
- **429 限流实测**：智谱免费档账户速率限制+模型级高峰限流并存——5 并发全 429、2 并发初始批量仍 429、串行才稳 → **LLM_CONCURRENCY 5→1 + 429 退避 5s→15s**（bb2e29f）
- 上线（4a10fea）：daily-digest.yml LLM_PROVIDER=zhipu + ZHIPU_API_KEY secret（agnès 配置保留，回滚改一个词）
- **首次 digest 实测（run 31477308265）**：provider 生效、7 批评分 6/7 全过+1 批重试补回、429 仅 6 次退避全过、**pending 12→1 条**、LLM 内容 1309/1310（99.9%）、1287 卡只增不减、effLen<100=0、summary 达标 97.4%
- 诚实地板：免费模型+超长输出（detail 500-800 字）字数达标率仍是瓶颈（批量场景两个模型都偏短），靠重评+detail 兜底保障；串行使 digest 时间变长（~45 分钟），CI 90 分钟预算内
- 遗留：智谱并发/速率限制申请提高（栗子可操作，非必须）；明早 08:00 自动 digest 复验（长期确认）
