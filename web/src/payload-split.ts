/**
 * feed payload 纯函数（无浏览器依赖）——构建层（vite.config）与运行时共用。
 * 列表/详情表拆分：首屏只下载刷卡所需字段，detailCn 按需加载。
 */

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
