/**
 * Zhipu (智谱) provider — OpenAI-compatible endpoint via open.bigmodel.cn.
 *
 * 智谱官方免费模型 GLM-4.7-Flash（200K 上下文 / 128K 最大输出，2026 免费主力，
 * 替代已下线的 GLM-4.5-Flash）。评分任务显式关闭思考模式
 * （模型默认开启动态思考，会拖慢响应且可能改变输出格式）。
 *
 * Env vars:
 *   ZHIPU_API_KEY  - API key（open.bigmodel.cn 控制台 → API 密钥）
 *   ZHIPU_MODEL    - model name（默认: glm-4.7-flash）
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const ZHIPU_BASE_URL = "https://open.bigmodel.cn/api/paas/v4";

export class ZhipuProvider extends OpenAICompatibleProvider {
  readonly name = "zhipu";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["ZHIPU_API_KEY"],
      baseURL: ZHIPU_BASE_URL,
      model: opts?.model ?? process.env["ZHIPU_MODEL"] ?? "glm-4.7-flash",
    });
  }

  override async call(prompt: string, maxTokens: number): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      model: this.model,
      max_completion_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
      thinking: { type: "disabled" },
    };
    const response = await this.client.chat.completions.create(params);
    const text = response.choices[0]?.message?.content;
    if (!text) throw new Error(`Unexpected empty response from ${this.name}`);
    return text;
  }
}
