/**
 * GitTok 统一存储封装（P0b 个人数据不丢）。
 *
 * 三个能力：
 * 1. loadSafe —— JSON 损坏时：① 现场备份到 `os-feed-corrupt-<key>`（覆盖写，留最新现场）
 *    ② 尝试从 `<key>-bak` 轻量备份恢复 ③ 都失败才返回 fallback。
 *    禁止解析失败后静默返回空（否则损坏数据会被下次 save 覆盖 → 数据永久丢失）。
 * 2. saveDual —— 主 key 写入成功后双写 `<key>-bak` 轻量备份；
 *    QuotaExceeded 时删 bak 腾空间重试主 key，仍失败 console.warn（不静默）。
 * 3. 所有异常都 console.warn（禁止空 catch）。
 */

const BAK_SUFFIX = "-bak";
const CORRUPT_PREFIX = "os-feed-corrupt-";

export function bakKey(key: string): string {
  return `${key}${BAK_SUFFIX}`;
}

export function corruptKey(key: string): string {
  return `${CORRUPT_PREFIX}${key}`;
}

function isQuotaExceeded(e: unknown): boolean {
  return (
    typeof e === "object" &&
    e !== null &&
    ((e as { name?: string }).name === "QuotaExceededError" ||
      (e as { name?: string }).name === "NS_ERROR_DOM_QUOTA_REACHED")
  );
}

/**
 * 安全读取。损坏链路：留现场 → bak 恢复 → fallback。
 * @param key localStorage key
 * @param fallback 无值 / 损坏且无法恢复时返回的默认值
 */
export function loadSafe<T>(key: string, fallback: T): T {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(key);
  } catch (e) {
    console.warn(`[gittok-storage] 读取 ${key} 失败:`, e);
    return fallback;
  }
  if (raw === null || raw === "") return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch (e) {
    // ① 损坏现场备份（覆盖写，留最新现场）—— 不自动恢复主 key
    try {
      localStorage.setItem(corruptKey(key), raw);
    } catch (e2) {
      console.warn(`[gittok-storage] 备份损坏现场 ${corruptKey(key)} 失败:`, e2);
    }
    console.warn(`[gittok-storage] ${key} JSON 损坏，现场已留到 ${corruptKey(key)}，尝试 bak 恢复:`, e);
    // ② 从轻量备份恢复
    try {
      const bak = localStorage.getItem(bakKey(key));
      if (bak) return JSON.parse(bak) as T;
    } catch (e3) {
      console.warn(`[gittok-storage] ${bakKey(key)} 也损坏:`, e3);
    }
    // ③ 都失败才回退默认
    return fallback;
  }
}

/**
 * 安全双写：主 key 成功 → 写 bak 轻量备份；QuotaExceeded → 删 bak 重试主 key，仍失败 warn。
 * @param key localStorage key
 * @param data 主数据
 * @param backupData bak 轻量版（省略则与 data 相同）
 */
export function saveDual(key: string, data: unknown, backupData?: unknown): void {
  const main = JSON.stringify(data);
  const backup = JSON.stringify(backupData !== undefined ? backupData : data);
  try {
    localStorage.setItem(key, main);
  } catch (e) {
    if (isQuotaExceeded(e)) {
      // 容量溢出：删该 key 的 bak 再重试主写入
      try {
        localStorage.removeItem(bakKey(key));
      } catch (e2) {
        console.warn(`[gittok-storage] 删除 ${bakKey(key)} 失败:`, e2);
      }
      try {
        localStorage.setItem(key, main);
      } catch (e3) {
        console.warn(`[gittok-storage] ${key} 写入失败（删除 bak 后仍溢出）:`, e3);
        return;
      }
    } else {
      console.warn(`[gittok-storage] ${key} 写入失败:`, e);
      return;
    }
  }
  // 主 key 成功 → 写 bak（bak 失败不致命，下次保存会重试）
  try {
    localStorage.setItem(bakKey(key), backup);
  } catch (e) {
    console.warn(`[gittok-storage] ${bakKey(key)} 写入失败:`, e);
  }
}
