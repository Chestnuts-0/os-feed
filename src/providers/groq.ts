/**
 * Groq provider — OpenAI-compatible endpoint via api.groq.com.
 *
 * 免费编队源（2026-09-04 调研）：免费档 gpt-oss / qwen 系列，30 RPM / 1000 RPD /
 * 200K TPD（按模型计，同 key 多模型=配额叠加）。速度快，适合当并行池主力。
 *
 * Env vars:
 *   GROQ_API_KEY  - API key（console.groq.com → API Keys）
 *   GROQ_MODEL    - model name（default: openai/gpt-oss-120b；备选 openai/gpt-oss-20b、qwen/qwen3.8-27b）
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const GROQ_BASE_URL = "https://api.groq.com/openai/v1";

export class GroqProvider extends OpenAICompatibleProvider {
  readonly name = "groq";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["GROQ_API_KEY"],
      baseURL: GROQ_BASE_URL,
      model: opts?.model ?? process.env["GROQ_MODEL"] ?? "openai/gpt-oss-120b",
    });
  }
}
