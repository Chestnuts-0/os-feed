# BLOCKED.md — 待裁决清单

## 任务 0（2026-08-08）
- 无。基线核验全部对上：vitest 3 失败 = Windows 路径分隔符既有问题（任务书已预期，不修）。

## 顺手活（看到的小 bug/重构/装工具，待裁决，不做）
- 任务 4 发现：`data/.refresh_cursor` 在 .gitignore 里被忽略——CI 是 clean checkout，gitignore 的文件每轮从零开始，stars 轮转刷新游标在 CI 上永远从 0 开始（每轮全刷 1213 个 repo）。建议从 .gitignore 移除让其随 digest 提交（与 pending-retry.json 同规则）。本次未改（不在白名单，且改动有 rate limit 影响需评估）。
- 任务 4 发现：CI Secret `BIGBROS` 会覆盖 config.yml 的 bigbros——config.yml 已加 esengine，但 Secret 里仍是旧值（KKKKhazix），需管理者更新 Secret（任务书已注明由管理者在验收时处理）。
