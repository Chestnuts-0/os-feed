/**
 * Cerebras provider — OpenAI-compatible endpoint via api.cerebras.ai.
 *
 * 免费编队源（2026-09-04 调研）：注册送 $5 赠金（耗尽前免费），全模型可用，
 * 推理速度极快。赠金耗尽后会报 402/付费错误（非 429，不触发冷却）——上层
 * safeLlm/scoreBatched 会兜，编队里当补充源。
 *
 * Env vars:
 *   CEREBRAS_API_KEY  - API key（cloud.cerebras.ai → API Keys）
 *   CEREBRAS_MODEL    - model name（default: gpt-oss-120b，按控制台实际可用模型调整）
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const CEREBRAS_BASE_URL = "https://api.cerebras.ai/v1";

export class CerebrasProvider extends OpenAICompatibleProvider {
  readonly name = "cerebras";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["CEREBRAS_API_KEY"],
      baseURL: CEREBRAS_BASE_URL,
      model: opts?.model ?? process.env["CEREBRAS_MODEL"] ?? "gpt-oss-120b",
    });
  }
}
