/**
 * Mistral provider — La Plateforme 免费层（OpenAI 兼容端点）。
 *
 * 免费编队源（2026-09-05 调研）：免费档 1 RPM 限制松（约 1 请求/秒）、月 token 额度大，
 * 适合当并行池的慢速大额补充源。注册 console.mistral.ai 拿 key 即插即用。
 *
 * Env vars:
 *   MISTRAL_API_KEY - API key（缺 key 时 worker 池自动跳过本源）
 *   MISTRAL_MODEL   - model name（default: mistral-small-latest）
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const MISTRAL_BASE_URL = "https://api.mistral.ai/v1";

export class MistralProvider extends OpenAICompatibleProvider {
  readonly name = "mistral";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["MISTRAL_API_KEY"],
      baseURL: MISTRAL_BASE_URL,
      model: opts?.model ?? process.env["MISTRAL_MODEL"] ?? "mistral-small-latest",
    });
  }

  // Mistral 认 max_tokens（OpenAI 新参数 max_completion_tokens 不保证兼容）
  override async call(prompt: string, maxTokens: number): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      model: this.model,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    };
    const response = await this.client.chat.completions.create(params);
    const text = response.choices[0]?.message?.content;
    if (!text) throw new Error(`Unexpected empty response from ${this.name}`);
    return text;
  }
}
