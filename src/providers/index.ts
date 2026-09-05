/**
 * Provider barrel — re-exports and factory.
 *
 * Usage:
 *   import { createProvider, type LlmProvider } from "./providers/index.ts";
 */

export type { LlmProvider, ProviderFactory } from "./types.ts";
export { OpenAICompatibleProvider } from "./openai-compatible.ts";
export { AnthropicProvider } from "./anthropic.ts";
export { OpenAIProvider } from "./openai.ts";
export { GitHubCopilotProvider } from "./github-copilot.ts";
export { OpenRouterProvider } from "./openrouter.ts";
export { DeepSeekProvider } from "./deepseek.ts";
export { AgnesProvider } from "./agnes.ts";
export { ZhipuProvider } from "./zhipu.ts";
export { GroqProvider } from "./groq.ts";
export { GeminiProvider } from "./gemini.ts";
export { CerebrasProvider } from "./cerebras.ts";
export { SiliconFlowProvider } from "./siliconflow.ts";
export { GithubModelsProvider } from "./github-models.ts";
export { MistralProvider } from "./mistral.ts";

import type { LlmProvider, ProviderFactory } from "./types.ts";
import { AnthropicProvider } from "./anthropic.ts";
import { OpenAIProvider } from "./openai.ts";
import { GitHubCopilotProvider } from "./github-copilot.ts";
import { OpenRouterProvider } from "./openrouter.ts";
import { DeepSeekProvider } from "./deepseek.ts";
import { AgnesProvider } from "./agnes.ts";
import { ZhipuProvider } from "./zhipu.ts";
import { GroqProvider } from "./groq.ts";
import { GeminiProvider } from "./gemini.ts";
import { CerebrasProvider } from "./cerebras.ts";
import { SiliconFlowProvider } from "./siliconflow.ts";
import { GithubModelsProvider } from "./github-models.ts";
import { MistralProvider } from "./mistral.ts";

// ---------------------------------------------------------------------------
// Single source of truth — add new providers here only.
// ---------------------------------------------------------------------------

const PROVIDERS = {
  anthropic: (model) => new AnthropicProvider(model),
  openai: (model) => new OpenAIProvider({ model }),
  "github-copilot": (model) => new GitHubCopilotProvider({ model }),
  openrouter: (model) => new OpenRouterProvider({ model }),
  deepseek: (model) => new DeepSeekProvider({ model }),
  agnes: (model) => new AgnesProvider({ model }),
  zhipu: (model) => new ZhipuProvider({ model }),
  groq: (model) => new GroqProvider({ model }),
  gemini: (model) => new GeminiProvider({ model }),
  cerebras: (model) => new CerebrasProvider({ model }),
  siliconflow: (model) => new SiliconFlowProvider({ model }),
  "github-models": (model) => new GithubModelsProvider({ model }),
  mistral: (model) => new MistralProvider({ model }),
} satisfies Record<string, ProviderFactory>;

/** Supported provider name — derived from the PROVIDERS registry. */
export type ProviderName = keyof typeof PROVIDERS;

/** All valid provider names — derived from the registry. */
export const VALID_PROVIDER_NAMES = Object.keys(PROVIDERS) as ProviderName[];

/**
 * Create an LLM provider by name.
 *
 * Reads `LLM_PROVIDER` env var when no explicit name is given.
 * `model` 覆盖该源的默认模型（免费编队同 key 多模型多 worker 用，2026-09-05）。
 * Throws a descriptive error if the provider name is invalid.
 *
 * Log safety: only the provider *name* is logged — never API keys or
 * endpoint URLs.
 */
export function createProvider(name?: ProviderName, model?: string): LlmProvider {
  const providerName = name ?? (process.env["LLM_PROVIDER"] as ProviderName | undefined) ?? "anthropic";

  const factory = (PROVIDERS as Record<string, ProviderFactory | undefined>)[providerName];
  if (!factory) {
    throw new Error(
      `Invalid LLM provider: "${providerName}". ` +
        `Valid providers are: ${VALID_PROVIDER_NAMES.join(", ")}. ` +
        `Set the LLM_PROVIDER env var to one of these values.`,
    );
  }

  console.log(`[providers] Using LLM provider: ${providerName}${model ? ` (model: ${model})` : ""}`);
  return factory(model);
}
