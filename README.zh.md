# GitTok — 开源版抖音信息流，用中文刷 GitHub 好项目

[English](./README.md) | **中文**

> GitTok 每天自动聚合 GitHub 与全球 AI 生态的最新动向，用中文推荐、分类、评分，以抖音式信息流呈现给你——刷 GitHub，像刷短视频一样上瘾。

## ✨ 特性

- 📱 **抖音式信息流**：上下滑动刷项目，卡片式呈现，点赞/点踩/收藏
- 🧠 **AI 中文推荐**：LLM 自动评分（Agnes 免费模型），中文总结每个项目
- 🗂️ **8 大板块**：热门 / AI 前沿 / 每日飙升 / 权威 / 新锐 / 兴趣 / 技能 / 学习
- 👤 **个性化**：你的点赞点踩会训练专属推荐（localStorage）
- 🔍 **搜索**：全库搜索项目
- 🌍 **多数据源**：GitHub Trending + Search API、Hacker News、Product Hunt、ArXiv、Hugging Face、Dev.to、Lobsters、Anthropic/OpenAI 站点

## 🚀 在线体验

**🌐 [https://chestnuts-sisyphus.github.io/os-feed/](https://chestnuts-sisyphus.github.io/os-feed/)**

无需登录，每天 08:00 CST 自动更新数据。

## 🏗️ 架构

```
GitHub Actions (daily-digest.yml) 每天 08:00 CST
  ├─ 并行抓取 10+ 数据源（GitHub/HN/PH/ArXiv/HF/Dev.to/...）
  ├─ LLM 中文评分（Agnes agnes-2.0-flash，免费）
  ├─ 生成 digests/ 日报 + data/feed.json（信息流数据）
  ├─ 自动提交 + 部署 GitHub Pages
  └─ 推送 Telegram / 飞书 / RSS
```

| 模块 | 说明 |
|------|------|
| `src/` | 数据管道（抓取 / LLM 评分 / feed 生成） |
| `web/` | React 前端（信息流 UI） |
| `data/feed.json` | 信息流数据（前端读取） |
| `digests/` | 每日日报 Markdown |
| `.github/workflows/` | 每日流水线 + Pages 部署 |

## 📦 本地开发

```bash
# 1. 安装依赖
pnpm install

# 2. 配置环境变量
cp .env.example .env
# 填入 AGNES_API_KEY（https://platform.agnes-ai.com 免费获取）
# 填入 GITHUB_TOKEN（可选，用于搜索 API 提额）

# 3. 跑完整数据管道
pnpm start

# 4. 前端开发
cd web && pnpm install && pnpm dev
```

## 🔑 环境变量

| 变量 | 必填 | 说明 |
|------|------|------|
| `LLM_PROVIDER` | 否 | 默认 `agnes`（免费） |
| `AGNES_API_KEY` | 是 | Agnes 免费 API Key |
| `AGNES_MODEL` | 否 | 默认 `agnes-2.0-flash` |
| `GITHUB_TOKEN` | 否 | GitHub Token（提高 API 限额） |
| `DIGEST_REPO` | 否 | 日报推送的仓库（默认本仓库） |

## 📄 数据源

| 来源 | 类型 | 数据 |
|------|------|------|
| [GitHub Repos](https://github.com) | API | 17+ 个 AI 工具仓库的 Issues/PR/Releases |
| [GitHub Trending](https://github.com/trending) | HTML + API | 每日热门仓库 + AI 主题搜索 |
| [Hacker News](https://news.ycombinator.com) | Algolia API | Top 30 AI 热帖 |
| [Product Hunt](https://www.producthunt.com) | GraphQL API | 昨日 AI 产品 |
| [ArXiv](https://arxiv.org) | ArXiv API | cs.AI/cs.CL/cs.LG 最新论文 |
| [Hugging Face](https://huggingface.co) | Hub API | 热门模型 |
| [Dev.to](https://dev.to) | Forem API | AI/LLM 热门文章 |
| [Lobste.rs](https://lobste.rs) | JSON API | AI/ML 内容 |
| [Anthropic](https://anthropic.com) + [OpenAI](https://openai.com) | Sitemap | 新文章 |

## 📜 技术栈

- **后端**：Node.js + TypeScript，GitHub Actions 定时驱动
- **前端**：React + Vite，GitHub Pages 部署
- **LLM**：Agnes（OpenAI 兼容，免费）

## 📝 许可证

MIT License

---

*项目前身为 [agents-radar](https://github.com/duanyytop/agents-radar)，由栗子改造为 GitTok 信息流产品。*