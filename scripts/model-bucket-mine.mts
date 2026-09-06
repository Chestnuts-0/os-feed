/**
 * 模型桶挖矿脚本（2026-09-06「挖无可挖」专项）：对编队各平台枚举可用模型，
 * 逐个用「评分形状」的迷你 prompt 实测（HTTP 200 + content 非空 + 干净 JSON + 时延），
 * 输出可入编队的新桶清单。挖矿准则：
 *   - 同 key 不同模型 = 独立免费配额桶（RPD/RPM 按模型计），零注册扩容
 *   - 只收：非思考型（content 干净非空）、时延可接受
 *   - 排除：embedding/vision/audio/tts/thinking/reasoning 命名与实测空 content
 * 凭据只读 D:/AI/KEY/FREE-FLEET.txt（规约），全程零回显。
 *
 * 用法（Gemini 走代理，国内平台直连——本脚本对海外平台用 fetch 不走代理会失败，
 * 跑海外平台时带管道同款代理环境变量）：
 *   npx tsx scripts/model-bucket-mine.mts                     # 全平台（国内直连平台）
 *   NODE_OPTIONS="--use-env-proxy" HTTPS_PROXY=http://127.0.0.1:7890 HTTP_PROXY=http://127.0.0.1:7890 npx tsx scripts/model-bucket-mine.mts gemini
 *   npx tsx scripts/model-bucket-mine.mts --probe 8           # 每平台实测上限
 */

import "dotenv/config";
import fs from "node:fs";
import path from "node:path";

const KEY_FILE = "D:/AI/KEY/FREE-FLEET.txt";
const probeArg = Number(process.argv[process.argv.indexOf("--probe") + 1] ?? "8");
const only = process.argv.find((a, i) => i > 2 && !a.startsWith("--") && process.argv[i - 1] !== "--probe");

// ── 解析 FREE-FLEET.txt（块=注释行+标签行+密钥行）──
const lines = fs.readFileSync(KEY_FILE, "utf-8").split(/\r?\n/);
const blocks: string[][] = [];
let cur: string[] = [];
for (const ln of lines) {
  const s = ln.trim();
  if (!s) {
    if (cur.length) blocks.push(cur);
    cur = [];
  } else if (!s.startsWith("#")) {
    cur.push(s);
  }
}
if (cur.length) blocks.push(cur);
const keys: Record<string, string> = {};
for (const b of blocks) if (b.length >= 2) keys[b[0]] = b[b.length - 1];
const pick = (prefix: string): string => Object.entries(keys).find(([k]) => k.startsWith(prefix))?.[1] ?? "";

const MINI_PROMPT =
  '对项目"foo/bar 命令行下载器"评估，只输出 JSON：{"ai_dims":["开发者工具"],"ai_score":0.8}';
const BAD = /embed|vision|image|audio|tts|omni|thinking|reason|rerank|guard|moder|-vl-|-vl$|m1-/i;

interface Verdict {
  model: string;
  ok: boolean;
  latencySec: number;
  note: string;
}

async function minePlatform(
  name: string,
  listUrl: string,
  chatUrl: string,
  key: string,
  listParse: (raw: string) => string[],
  candidatesFilter: (m: string) => boolean,
  explicit?: string[],
): Promise<Verdict[]> {
  if (!key) {
    console.log(`\n== ${name}: 无 key，跳过 ==`);
    return [];
  }
  console.log(`\n== ${name} ==`);
  const res = await fetch(listUrl, { headers: { Authorization: `Bearer ${key}` } });
  if (!res.ok) {
    console.log(`  模型列表拉取失败 HTTP ${res.status}: ${(await res.text()).slice(0, 80)}`);
    return [];
  }
  let all: string[];
  try {
    all = listParse(await res.text());
  } catch (e) {
    console.log(`  列表解析失败: ${String(e).slice(0, 80)}`);
    return [];
  }
  const candidates = (
    explicit?.filter((m) => all.includes(m) || m === all[0]) ?? all.filter(candidatesFilter)
  ).slice(0, Math.max(probeArg, explicit?.length ?? 0));
  console.log(
    `  模型总数 ${all.length}，候选 ${candidates.length}（显式=${explicit ? explicit.length : 0}，每平台实测上限 ${probeArg}）`,
  );
  const out: Verdict[] = [];
  for (const m of candidates) {
    const t0 = Date.now();
    let ok = false;
    let note = "";
    try {
      const r = await fetch(chatUrl, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: m,
          messages: [{ role: "user", content: MINI_PROMPT }],
          max_tokens: 200,
        }),
      });
      const sec = +((Date.now() - t0) / 1000).toFixed(1);
      const body = await r.text();
      if (r.status === 200) {
        const content = (JSON.parse(body).choices?.[0]?.message?.content ?? "") as string;
        const clean = content.replace(/```(?:json)?|```/g, "").trim();
        ok = clean.length > 0 && clean.includes("{");
        note = `content=${content.length} ${JSON.stringify(clean.slice(0, 40))}`;
      } else {
        note = `HTTP ${r.status} ${body.slice(0, 70).replace(/\s+/g, " ")}`;
      }
      console.log(`  ${ok ? "✓" : "✗"} ${m}: ${sec}s ${note}`);
      out.push({ model: m, ok, latencySec: sec, note });
    } catch (e) {
      console.log(`  ✗ ${m}: ERR ${String(e).slice(0, 70)}`);
      out.push({
        model: m,
        ok: false,
        latencySec: +((Date.now() - t0) / 1000).toFixed(1),
        note: String(e).slice(0, 70),
      });
    }
    await new Promise((r) => setTimeout(r, 800));
  }
  return out;
}

const PLATFORMS: Record<string, () => Promise<Verdict[]>> = {
  siliconflow: () =>
    minePlatform(
      "硅基流动 SiliconFlow（国内直连）",
      "https://api.siliconflow.cn/v1/models",
      "https://api.siliconflow.cn/v1/chat/completions",
      pick("SILICO"),
      (raw) => (JSON.parse(raw).data ?? []).map((m: { id: string }) => m.id),
      (m) => !BAD.test(m) && /Qwen3|DeepSeek|GLM/i.test(m) && /(8B|V3|Flash|A3B)/i.test(m),
      // 硅基免费/付费混杂（V4/V3.2/Pro 系全 402 付费款），已知免费款显式优先
      [
        "deepseek-ai/DeepSeek-V3",
        "Qwen/Qwen3-8B",
        "Qwen/Qwen2.5-7B-Instruct",
        "Qwen/Qwen3-30B-A3B",
        "THUDM/GLM-4-9B-0414",
        "internlm/internlm2_5-7b-chat",
      ],
    ),
  modelscope: () =>
    minePlatform(
      "魔搭 ModelScope（国内直连，总量 2000/日帽）",
      "https://api-inference.modelscope.cn/v1/models",
      "https://api-inference.modelscope.cn/v1/chat/completions",
      pick("魔搭"),
      (raw) => (JSON.parse(raw).data ?? []).map((m: { id: string }) => m.id),
      (m) => !BAD.test(m) && /(Flash|A3B|8B|4B)/i.test(m),
      [
        "Qwen/Qwen3-8B",
        "Qwen/Qwen3-4B",
        "Qwen/Qwen3-30B-A3B",
        "stepfun-ai/Step-3.7-Flash",
        "ZhipuAI/GLM-4.7-Flash",
      ],
    ),
  gemini: () =>
    minePlatform(
      "Google Gemini（走代理）",
      "https://generativelanguage.googleapis.com/v1beta/models",
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      pick("GOOGLE"),
      (raw) => (JSON.parse(raw).models ?? []).map((m: { name: string }) => m.name.split("/").pop() ?? ""),
      (m) => !BAD.test(m) && /flash/i.test(m) && !/preview/i.test(m),
      ["gemini-3.5-flash-lite", "gemini-3.1-flash-lite", "gemini-flash-latest", "gemini-flash-lite-latest"],
    ),
};

const results: Record<string, Verdict[]> = {};
for (const [name, fn] of Object.entries(PLATFORMS)) {
  if (only && !name.includes(only)) continue;
  results[name] = await fn();
}

// Groq / Cerebras：本地出口被 CF 拦（1010），本地不挖（CI fleet-health 挖）
results.groq = [];
results.cerebras = [];

const outDir = "D:/AI/RESEARCH/2026-09-06-模型桶挖矿";
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "mine-report.json");
fs.writeFileSync(outFile, JSON.stringify(results, null, 2), "utf-8");

console.log("\n===== 挖矿结论（可入编队的新桶，按时延排序）=====");
for (const [plat, vs] of Object.entries(results)) {
  const ok = vs.filter((v) => v.ok).sort((a, b) => a.latencySec - b.latencySec);
  console.log(`${plat}: ${ok.length ? ok.map((v) => `${v.model}(${v.latencySec}s)`).join(", ") : "无新桶"}`);
}
console.log(`报告: ${outFile}`);
