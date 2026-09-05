/**
 * GitHub Models provider — GitHub 官方模型推理端点（OpenAI 兼容层）。
 *
 * 免费编队源（2026-09-05 调研）：用现成的 GitHub PAT 即可调用（零新增注册），
 * 免费层限速按 PAT 等级（低权限 ≈15 RPM / 150 RPD），适合当并行池的补充源。
 *
 * Env vars:
 *   GITHUB_TOKEN           - PAT（与抓取共用；需 models:read 权限，经典 PAT 默认可用）
 *   GITHUB_MODELS_MODEL    - model name（default: openai/gpt-4.1-mini）
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const GITHUB_MODELS_BASE_URL = "https://models.github.ai";

export class GithubModelsProvider extends OpenAICompatibleProvider {
  readonly name = "github-models";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["GITHUB_TOKEN"],
      baseURL: GITHUB_MODELS_BASE_URL,
      model: opts?.model ?? process.env["GITHUB_MODELS_MODEL"] ?? "openai/gpt-4.1-mini",
    });
  }

  // GitHub Models 的兼容层认 max_tokens（OpenAI 新参数 max_completion_tokens 在此不保证兼容）
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
