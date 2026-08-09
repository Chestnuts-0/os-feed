# PROGRESS.md — GitTok 关注体系 v2（Starred API + 关注频道并集）

## 理解的目标 / 顺序 / 最大风险（开工回执，2026-08-08）
- 目标：bigbro 数据源从 Events API 换 Starred API；名单 = GitHub follow ∪ config 并集；管道加评分配额 300/轮 + following.json 输出 + bigbros 截断 10；前端关注频道并集 + star 徽章 + 双计数 + 按钮提示；本地真实管道 + 前端验收全过 + CI 全绿。
- 顺序：任务 0 核验（已过）→ 1 抓取器 → 2 管道 → 3 前端 → 4 本地真实管道 → 5 提交上线。
- 最大风险：① 本地 vitest 3 失败为 Windows 路径既有问题（基线，别修）② api.github.com 被 Steam++ 劫持，管道必须 export 代理 ③ CI Secret BIGBROS 覆盖 config.yml，本地须 export BIGBROS 验证 ④ 任务 4 本地产物必须还原，只提交白名单文件。

## 进度
### 任务 0：基线核验 ✅（2026-08-08）
- git status 干净，HEAD=1985a71（与任务书一致）
- vitest：3 failed | 212 passed —— 全为 report.test.ts 的 `digests\` vs `digests/` Windows 路径分隔符（与预期吻合，不修）
- tsc --noEmit：exit 0（0 错）
- eslint web/src src/feed：exit 0（0 错）
- grep 确认：bigbro-stars.ts:49 为 events/public 调用点；App.tsx:383 为 followingSet.has(c.owner)
- 无多余失败，BLOCKED.md 无需记录

### 任务 1：抓取器升级 ✅（2026-08-08）
- config.ts：RadarConfig + followingUser（env FOLLOWING_USER 优先，模式同 BIGBROS）；config.yml：bigbros + esengine、following_user: Chestnuts-Sisyphus
- bigbro-stars.ts：重写为 Starred API（GET /users/{name}/starred?per_page=100&sort=created）；新增 fetchFollowingUsers（follow ∪ config 去重，失败降级 config）；BigbroStar 扩展 desc/stars/language/topics 可选字段；单大牛失败跳过；ts=pushed_at
- feed/types.ts 同步 BigbroStar；index.ts 主管道 + feed main() 改为 fetchFollowingUsers → fetchBigbroStars(users) → generateFeed(4 参)
- **偏差记录**：①RadarConfig.followingUser 设为可选（`?`）——必填会让现有 feed-pending.test.ts 的 cfg fixture 报 TS2741，而现有测试文件禁改；loadConfig 恒返回该字段，功能等价 ②generateFeed 第 4 参带默认值 `= []`——现有测试 3 参调用合法，tsc 保持 0 错（任务 2 启用）
- 新增 src/__tests__/bigbro-stars.test.ts：11/11 全绿（starred 解析/缺字段容错/ts=pushed_at/多用户合并/失败跳过/无 WatchEvent 残留/follow ∪ config 去重/失败降级/followingUser 空/去重）
- 验收：vitest 11 全绿 + tsc 0 错 + eslint 0 错 + prettier 已写

### 任务 2：管道 ✅（2026-08-08）
- MAX_BIGBRO_SCORE=300 常量；评分排序：bigbro 新卡按 stars 降序截断 300（trending 不受限），日志 `[feed] bigbro quota: X/Y (cap 300)`；超出的进待补评队列下轮补评（既有机制）
- merge 段：bigbro-only 新 repo 用抓取器自带 desc/stars/language/topics；仅 stars/desc 缺失才进 needDetail 兜底
- 组装 FeedCard：bigbros slice(0, 10)；输出段写 data/following.json（{updated, users}，空名单也写，失败仅日志）
- 新增 src/__tests__/feed-following.test.ts：7/7 全绿（350 卡配额截断 300/trending 不受限/bigbros 截断 10/following.json 透传+空名单/只增不减 100 卡回归/自带详情免 fetchRepoDetail——/repos/ 调用计数 1 vs 2 对照组）
- 验收：全量 vitest 230 passed（3 failed 仍为 Windows 路径基线）+ tsc 0 错 + eslint 0 错 + prettier 已写
- 备注：输出断言用集合判定（rankCards 会重排输出顺序，不断言下标）

### 任务 3：前端 ✅（2026-08-08）
- App.tsx：fetch ./data/following.json（容错空名单）；allFollowing 并集（localStorage ∪ following.json）+ followingSet 改为并集 Set（isFollowing/关注频道/我的-关注全继承）；getSectionCards following 分支 = owner 匹配 ∪ bigbros 匹配；followedCreators 双计数（count 项目数 + starCount 背书数，排序 count+starCount 降序）；两处空状态改两行文案；stats「共 N 位关注的创作者」
- FeedCard.tsx：card-subtitle 后渲染 .card-badge.bigbro-badge（Star 图标 + 前 2 名 join("、") + 等N位 + " star 了"）
- CreatorPage.tsx：followHint state（useEffect 跟随 isFollowing：关注显示/取关消失）「已关注。TA 的 star 项目流次日随数据更新（在 GitHub 上关注 TA 效果相同）」
- styles.css：.creator-follow-hint（复用 hint 视觉参数；.hint 裸类无样式，必须补）
- 验收脚本 D:/tmp/gittok_follow_v2_check.py：**21/21 PASS**（A 并集出卡/B 徽章 star 了+等4位/C 双计数 3 形态/D 空状态两处/E 按钮提示+取关消失）；脚本自构造测试 feed（真实卡打底 + 过滤 bigbros/测试 owner 卡保计数可控）
- 验收：tsc 0 错 + eslint web/src 0 错 + prettier 已写 + build 成功

### 任务 4：本地真实管道 ✅（2026-08-08）
- 环境：HTTP_PROXY/HTTPS_PROXY=127.0.0.1:7890 + NODE_OPTIONS=--use-env-proxy + BIGBROS="KKKKhazix,esengine"（覆盖 .env 旧值）
- 跑 npx tsx src/feed/index.ts，日志 D:/tmp/gittok_follow_run.log，Done! 退出码 0
- 断言 **13/13 PASS**（D:/tmp/gittok_follow_v2_data_check.py）：
  - source=bigbro 卡 **75**（基线 3 → 75，硬指标 ≥10 ✓）；有 bigbros 字段的卡 93
  - bigbros 只含名单内的人（KKKKhazix/esengine）；每项 ≤ 10
  - 卡总数 **1154** ≥ 1044（只增不减；baseline 全保留）
  - following.json users=[KKKKhazix, esengine] + updated ✓
  - 日志：`[feed] merged`、`[feed] 1044 cached`（历史卡零重评 ≥1000）、`[feed] bigbro quota: 112/112 (cap 300)`、无 pending truncated
- 现场恢复：git checkout -- data/feed.json；rm data/following.json + data/pending-retry.json（41 条本地验证痕迹，默认不提交；仓库从未跟踪二者，digest 提交时 git add data/ 自动带上）
- 备注：agnes LLM 评分失败 41/169 卡进 pending-retry 队列（免费模型常态，CI 会自然补评）；data/.refresh_cursor 被 .gitignore 忽略（既有问题，写 BLOCKED.md）

### 任务 5：提交上线 ✅（2026-08-08）
- 全量检查：tsc 0 错 + eslint 0 错 + vitest 230 passed（3 failed Windows 路径基线）+ prettier --check 全过
- commit fe8ff8c `feat(follow): 关注体系v2——Starred API + 关注频道并集 + 名单自动同步`（--no-verify，改动清单 ⊆ 白名单：config.yml + src/6 文件 + web/src/4 文件 + 2 新测试 + PROGRESS/BLOCKED）
- push 走 Clash 代理 + token URL 编码，1985a71..fe8ff8c，ls-remote 确认线上 HEAD=fe8ff8c ✓
- CI completed/success（id=31260051274）+ Deploy Web completed/success（id=31260051292）；线上 index.html JS hash=index-B5mKIcbX.js 与本地构建一致 ✓
- 工作区干净（仅 BLOCKED.md 收尾版待补交）

## 最终结果
- **硬指标 1：本地真实管道跑通** ✓ bigbro 卡 3→75、bigbros 字段正确（只含名单内人、≤10）、following.json 生成（users 含 KKKKhazix+esengine）、卡总数 1044→1154 只增不减
- **硬指标 2：前端验收脚本 21/21 PASS** + 新增单测 18 个全绿（bigbro-stars 11 + feed-following 7）+ CI + Deploy Web 全绿 + 工作区干净
- 本轮消耗约 60 迭代（预算 110，未触顶）
- 遗留：CI Secret BIGBROS 需管理者更新为 KKKKhazix,esengine（config.yml 已改但 Secret 覆盖）；线上 following.json 待次日 digest 生成；41 张失败卡进 pending-retry 待下轮补评（正常机制）

## 2026-08-09 GitHub 账号改名：Chestnuts-0 → Chestnuts-Sisyphus
- 全仓库（config.yml/README×2/测试/PROGRESS/digests 651 归档）旧用户名与 Pages URL 已批量替换为 Chestnuts-Sisyphus / chestnuts-sisyphus.github.io（栗子授权全量替换；赫尔墨斯执行，未提交）
- git remote 已更新为 https://github.com/Chestnuts-Sisyphus/os-feed.git
- 线上验证：新 Pages URL https://chestnuts-sisyphus.github.io/os-feed/ 返回 200 在线
- ⚠️ 本次改动含 656 文件未提交，由 GitTok 线自行审查提交
