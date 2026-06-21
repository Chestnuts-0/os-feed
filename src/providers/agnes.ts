/**
 * Agnes provider — OpenAI-compatible endpoint via apihub.agnes-ai.com.
 *
 * Agnes AI (全球前十 AI Lab) 免费开放全模态 API，文本模型 Agnes-2.0-Flash
 * 兼容 OpenAI Chat Completions，改 Base URL + API Key 即可接入。
 *
 * 文档: https://agnes-ai.com/doc/cid1
 *
 * Env vars:
 *   AGNES_API_KEY  - API key (从 https://platform.agnes-ai.com 获取)
 *   AGNES_MODEL    - 模型名 (默认: Agnes-2.0-Flash)
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const AGNES_BASE_URL = "https://apihub.agnes-ai.com/v1";

export class AgnesProvider extends OpenAICompatibleProvider {
  readonly name = "agnes";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["AGNES_API_KEY"],
      baseURL: AGNES_BASE_URL,
      model: opts?.model ?? process.env["AGNES_MODEL"] ?? "Agnes-2.0-Flash",
    });
  }
}
