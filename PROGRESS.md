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
