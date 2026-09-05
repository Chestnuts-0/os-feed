/**
 * Abstract LLM provider interface.
 *
 * All concrete providers must implement this contract so the rest of the
 * codebase can stay provider-agnostic.
 */

export interface LlmProvider {
  /** Human-readable provider identifier (e.g. "anthropic", "openai"). */
  readonly name: string;
  /** Send a prompt and return the model's text response. */
  call(prompt: string, maxTokens: number): Promise<string>;
}

/** Factory function that creates an LlmProvider instance.
 *  model 覆盖默认模型：免费编队「同 key 多模型=模型级配额叠加」，一个源可开多个 worker。 */
export type ProviderFactory = (model?: string) => LlmProvider;
