/**
 * GitHub API token 池（2026-09-06 多 PAT 轮转，栗子提供第二 PAT 后立项）。
 *
 * 背景：Search 30/min 与 core 5000/h 的限额都按 token 计——N 个 token = N 倍额度。
 * GITHUB_TOKEN 为主，EXTRA_GITHUB_PATS（逗号分隔追加）轮转使用；
 * 同一请求只消耗一个 token 的额度，按调用序号轮换取号。
 * 凭据只走环境变量/Secrets，本模块零硬编码。
 */

import "dotenv/config";

let counter = 0;

/** 全部可用 token（主 + 追加，去重去空）。无任何 token 返回空数组（调用方退化匿名行为）。 */
export function getApiTokens(): string[] {
  const tokens = [process.env["GITHUB_TOKEN"] ?? "", ...(process.env["EXTRA_GITHUB_PATS"] ?? "").split(",")]
    .map((t) => t.trim())
    .filter(Boolean);
  return [...new Set(tokens)];
}

/** 轮换取一个 token；池为空返回 ""（调用方按「无 token」处理，与原单 token 行为一致）。 */
export function nextApiToken(): string {
  const tokens = getApiTokens();
  if (tokens.length === 0) return "";
  return tokens[counter++ % tokens.length]!;
}
