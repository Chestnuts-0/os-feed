export function splitFeedPayload<T extends { repo: string; detailCn?: string }>(
  cards: T[],
): { list: Array<Omit<T, "detailCn"> & { detailCn?: never }>; details: Record<string, string> } {
  const details: Record<string, string> = {};
  const list = cards.map((card) => {
    const { detailCn, ...rest } = card;
    if (typeof detailCn === "string" && detailCn.length > 0) {
      details[card.repo] = detailCn;
    }
    return rest as Omit<T, "detailCn"> & { detailCn?: never };
  });
  return { list, details };
}

export function mergeDetail<T extends { repo: string; detailCn?: string }>(
  card: T,
  details: Record<string, string> | null | undefined,
): T {
  if (card.detailCn) return card;
  const detailCn = details?.[card.repo];
  return detailCn ? { ...card, detailCn } : card;
}

const DETAILS_URL = "./data/feed-details.json";

let textPromise: Promise<string> | null = null;
let parsed: Record<string, string> | null = null;

/** 详情表若已 parse 完则同步返回，让点击当帧就能打开（不等微任务）。 */
export function getFeedDetailsIfReady(): Record<string, string> | null {
  return parsed;
}

/** 只下载详情文件，不 JSON.parse。列表出来后就开始，不占滚动主线程。 */
export function warmFeedDetails(): void {
  if (!textPromise) {
    textPromise = fetch(DETAILS_URL)
      .then((r) => (r.ok ? r.text() : "{}"))
      .catch(() => "{}");
  }
}

/** 解析详情表。打开弹窗前调用，保证第一帧就是完整内容（含深度解读）。 */
export function prefetchFeedDetails(): Promise<Record<string, string>> {
  warmFeedDetails();
  if (parsed) return Promise.resolve(parsed);
  return (textPromise ?? Promise.resolve("{}")).then((text) => {
    if (!parsed) {
      try {
        parsed = JSON.parse(text) as Record<string, string>;
      } catch {
        parsed = {};
      }
    }
    return parsed;
  });
}
