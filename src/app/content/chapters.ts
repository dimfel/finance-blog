import { Chapter } from './content.types';
import { homeChapter } from './home.content';
import { foundationsChapter } from './foundations.content';
import { statementsChapter } from './statements.content';
import { metricsChapter } from './metrics.content';
import { valuationChapter } from './valuation.content';
import { readingTheAppChapter } from './reading-the-app.content';
import { checklistChapter } from './checklist.content';

/**
 * The ordered list of all chapters. Drives the sidebar nav and the
 * prev/next logic. Keep this sorted by `order`.
 */
export const CHAPTERS: readonly Chapter[] = [
  homeChapter,
  foundationsChapter,
  statementsChapter,
  metricsChapter,
  valuationChapter,
  readingTheAppChapter,
  checklistChapter,
].sort((a, b) => a.order - b.order);

/** Look up a chapter by its route id. */
export function getChapterById(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

/** Zero-based index of a chapter within the ordered list. */
export function getChapterIndex(id: string): number {
  return CHAPTERS.findIndex((c) => c.id === id);
}
