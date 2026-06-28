/**
 * Shared content interface — the integration seam.
 *
 * Content agents produce `Chapter` data objects only; they never write
 * templates. The shared ChapterViewComponent renders every block type below.
 */

/** Summary / key-takeaways callout shown at the top of each chapter. */
export interface Callout {
  title: string;
  items: string[];
}

/**
 * A numbered pin placed over a UI element inside an annotated figure.
 * `x` and `y` are PERCENT (0–100) of the image's width/height; the pin is
 * CENTERED on that point.
 */
export interface FigureMarker {
  n: number;
  x: number;
  y: number;
  label: string;
}

/**
 * A single renderable block of chapter body content.
 * - h2 / h3   -> headings (use `text`)
 * - p         -> paragraph (use `text`)
 * - small     -> `.small-text` paragraph for dense passages (use `text`)
 * - ul / ol   -> unordered / ordered list (use `items`)
 * - note      -> styled aside box (use `text`)
 * - table     -> styled table (use `headers` + `rows`)
 * - figure    -> annotated screenshot with numbered pins + legend
 *               (use `image` + `alt`, optional `caption`, `markers`)
 */
export interface ChapterBlock {
  type: 'h2' | 'h3' | 'p' | 'small' | 'ul' | 'ol' | 'note' | 'table' | 'figure';
  text?: string;
  items?: string[];
  rows?: string[][];
  headers?: string[];
  /** Asset path served from public/, e.g. 'img/watchlists.png'. */
  image?: string;
  alt?: string;
  caption?: string;
  markers?: FigureMarker[];
}

/** A full chapter: one of these per route. */
export interface Chapter {
  id: string;
  order: number;
  title: string;
  subtitle?: string;
  summary: Callout;
  blocks: ChapterBlock[];
}
