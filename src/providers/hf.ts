/**
 * HuggingFace Inference Providers — router.huggingface.co（OpenAI 兼容 v1 层）。
 *
 * 免费口径核验（2026-09-05）：官方 pricing 文档明写免费用户每月发放 credits
 * （"Every Hugging Face user receives monthly credits"，free 档 $0.10/月，每月重置）
 * ——持续可调用，符合「长期免费」口径；量级小（≈百次请求/月），小量 worker 入队补位。
 *
 * Env vars:
 *   HF_API_KEY  - HF User Access Token（CI: secrets.HF_API_KEY）
 *   HF_MODEL    - model name（default: meta-llama/Llama-3.3-70B-Instruct）
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const HF_BASE_URL = "https://router.huggingface.co/v1";

export class HfProvider extends OpenAICompatibleProvider {
  readonly name = "hf";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["HF_API_KEY"],
      baseURL: HF_BASE_URL,
      model: opts?.model ?? process.env["HF_MODEL"] ?? "meta-llama/Llama-3.3-70B-Instruct",
    });
  }

  // HF 兼容层认 max_tokens（基类的 max_completion_tokens 不保证兼容）
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
