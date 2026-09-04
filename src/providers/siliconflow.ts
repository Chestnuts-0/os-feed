/**
 * SiliconFlow (硅基流动) provider — OpenAI-compatible endpoint via api.siliconflow.cn.
 *
 * 免费编队源（2026-09-04 调研）：实名认证后全部免费模型 0 费用可用（固定
 * Rate Limits，具体在模型广场查），国内直连无需代理。
 *
 * Env vars:
 *   SILICONFLOW_API_KEY  - API key（cloud.siliconflow.cn → API 密钥）
 *   SILICONFLOW_MODEL    - model name（default: Qwen/Qwen2.5-7B-Instruct，
 *                          免费清单常客；可按模型广场实际免费列表调整）
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const SILICONFLOW_BASE_URL = "https://api.siliconflow.cn/v1";

export class SiliconFlowProvider extends OpenAICompatibleProvider {
  readonly name = "siliconflow";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["SILICONFLOW_API_KEY"],
      baseURL: SILICONFLOW_BASE_URL,
      model: opts?.model ?? process.env["SILICONFLOW_MODEL"] ?? "Qwen/Qwen2.5-7B-Instruct",
    });
  }
}
