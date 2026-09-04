/**
 * Google Gemini provider — OpenAI-compatible endpoint via
 * generativelanguage.googleapis.com/v1beta/openai/.
 *
 * 免费编队源（2026-09-04 调研）：免费档存在（具体 RPM/RPD 在 Google AI Studio
 * 的 rate limits 页查看，随项目而变），gemini flash 系做评分任务足够。
 *
 * Env vars:
 *   GEMINI_API_KEY  - API key（aistudio.google.com → Get API key；2026 新 key 为 AQ. 前缀，兼容层已验证可用）
 *   GEMINI_MODEL    - model name（default: gemini-3.6-flash；2.5 系已对新用户下线）
 *
 * 注意：Gemini API 有地区限制（免费层不支持部分代理出口地区），本地测试可能撞
 * 「User location is not supported」；GitHub Actions（美国机房）无此问题。
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai";

export class GeminiProvider extends OpenAICompatibleProvider {
  readonly name = "gemini";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["GEMINI_API_KEY"],
      baseURL: GEMINI_BASE_URL,
      model: opts?.model ?? process.env["GEMINI_MODEL"] ?? "gemini-3.6-flash",
    });
  }
}
