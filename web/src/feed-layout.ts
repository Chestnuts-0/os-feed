/** 与 styles.css `--feed-card-h` / `--feed-row-gap` / `@media (max-width: 768px)` 同步。
 * 卡片锁高：窗口垫片按这个算，禁止再按内容撑开。 */

export const FEED_CARD_HEIGHT = 288;
export const FEED_ROW_GAP = 16;
export const FEED_ROW_GAP_MOBILE = 12;
export const FEED_ROW_HEIGHT = FEED_CARD_HEIGHT + FEED_ROW_GAP;
export const FEED_COLS_DESKTOP = 2;
export const FEED_COLS_MOBILE = 1;
export const FEED_MOBILE_MAX_WIDTH = 768;
/** 约 3 屏。快滑也不翻空白，又不把几百张玻璃卡留在 DOM 里。 */
export const FEED_OVERSCAN_ROWS = 10;

export interface FeedGrid {
  cols: number;
  rowGap: number;
}

export interface FeedWindow {
  startRow: number;
  endRow: number;
  startIdx: number;
  endIdx: number;
  topPad: number;
  bottomPad: number;
}

export function feedGridFromMatch(mobile: boolean): FeedGrid {
  return mobile
    ? { cols: FEED_COLS_MOBILE, rowGap: FEED_ROW_GAP_MOBILE }
    : { cols: FEED_COLS_DESKTOP, rowGap: FEED_ROW_GAP };
}

export function feedColsForWidth(width: number): number {
  return width <= FEED_MOBILE_MAX_WIDTH ? FEED_COLS_MOBILE : FEED_COLS_DESKTOP;
}

export function feedRowGapForWidth(width: number): number {
  return width <= FEED_MOBILE_MAX_WIDTH ? FEED_ROW_GAP_MOBILE : FEED_ROW_GAP;
}

export function feedWindow(opts: {
  cardCount: number;
  cols: number;
  rowGap: number;
  listTop: number;
  viewportHeight: number;
  overscanRows?: number;
}): FeedWindow {
  const cols = Math.max(1, opts.cols | 0);
  const rowH = FEED_CARD_HEIGHT + opts.rowGap;
  const rowCount = opts.cardCount > 0 ? Math.ceil(opts.cardCount / cols) : 0;
  const overscan = opts.overscanRows ?? FEED_OVERSCAN_ROWS;
  const viewTop = -opts.listTop;
  const startRow = Math.max(0, Math.floor(viewTop / rowH) - overscan);
  const endRow = Math.min(rowCount, Math.max(startRow, Math.ceil((viewTop + opts.viewportHeight) / rowH) + overscan));
  return {
    startRow,
    endRow,
    startIdx: Math.min(opts.cardCount, startRow * cols),
    endIdx: Math.min(opts.cardCount, endRow * cols),
    topPad: startRow * rowH,
    bottomPad: Math.max(0, (rowCount - endRow) * rowH),
  };
}

export function sameFeedWindow(a: FeedWindow, b: FeedWindow): boolean {
  return (
    a.startIdx === b.startIdx &&
    a.endIdx === b.endIdx &&
    a.topPad === b.topPad &&
    a.bottomPad === b.bottomPad
  );
}
