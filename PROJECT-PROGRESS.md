# Intrinsic Academy — Build Progress & Plan

> **What this file is for:** a shared map between you and Claude of *what we
> intend to build* and *how far we've got*. If a session runs out of tokens or
> Claude loses context, point it back here and say **"resume from
> PROJECT-PROGRESS.md — we stopped at \_\_\_"** and it can pick up exactly where
> we left off.

**Product (one sentence):** a minimalistic Angular website that walks a complete
beginner from "what is a stock?" to confidently picking and valuing stocks on
their own — including a chapter that decodes a real moomoo-style trading app.

**Project location:** `C:\Project1\Finance Blog`
**Run it:** `npx ng serve` from the project root, then open http://localhost:4200
**Build check:** `npx ng build` (currently passes clean)

---

## How the site is structured (the integration contract)

- Angular v21 standalone app, SCSS, routing, no SSR. App name: `intrinsic-academy`.
- Design: light minimalist theme, teal accent `#0f766e`, 760px max content width,
  16px body, `.small-text` (14.5px / 1.7) for long dense passages.
- Every chapter = one typed `Chapter` data object (no hand-written templates).
  - Interface: `src/app/content/content.types.ts`
  - One shared renderer: `src/app/components/chapter-view/` renders all block
    types (`h2 h3 p small ul ol note table`).
  - Aggregated + ordered in `src/app/content/chapters.ts` (drives sidebar nav
    and prev/next).
- Each page shows: H1 + subtitle → **Summary** callout → body → prev/next links.
- Left sidebar nav (collapses to hamburger under 820px) with active highlighting.

**To add or edit content:** just edit the relevant `*.content.ts` file. The app
re-renders automatically. No template work needed.

---

## Chapter status

| # | Route id | Chapter | File | Status |
|---|----------|---------|------|--------|
| 1 | `home` | Welcome — How to Use This Guide | `src/app/content/home.content.ts` | ✅ Done |
| 2 | `foundations` | Investing Foundations | `src/app/content/foundations.content.ts` | ✅ Done |
| 3 | `statements` | Reading Financial Statements | `src/app/content/statements.content.ts` | ✅ Done |
| 4 | `metrics` | Key Metrics & Ratios | `src/app/content/metrics.content.ts` | ✅ Done |
| 5 | `valuation` | Intrinsic Value & Valuation | `src/app/content/valuation.content.ts` | ✅ Done |
| 6 | `reading-the-app` | Reading a Stock App (Watchlists, Quotes, Trade) | `src/app/content/reading-the-app.content.ts` | ✅ Done |
| 7 | `checklist` | The Stock-Picking Checklist | `src/app/content/checklist.content.ts` | ✅ Done |

**App shell / design system / routing / nav / renderer:** ✅ Done & building clean.

> ✅ **Current state: v1 is complete.** All 7 chapters written, app builds and
> serves. Nothing is half-finished right now.

---

## Where we stopped (update this line each session)

**Last checkpoint:** _2026-06-28 — v1.1. Added INTERACTIVE ANNOTATED IMAGES to the
"Reading a Stock App" chapter: the moomoo screenshot was cropped into three
screens (`public/img/watchlists.png`, `quotes.png`, `trade.png`), and each section
now shows the image with numbered teal pins + a cross-highlighting legend, with
the prose referencing each pin as `(n)`. New `figure` block type + reusable
`AnnotatedFigureComponent` (`src/app/components/annotated-figure/`). App builds
clean._

**Next up (nothing required — these are optional polish ideas):**
- [x] ~~Embed the app screenshot into "Reading a Stock App" with numbered pointers.~~ Done v1.1.
- [ ] Add a one-page printable "cheat sheet" chapter.
- [ ] Light/dark theme toggle.
- [ ] A small interactive P/E or DCF calculator widget.
- [ ] Search across chapters.

> When you want to continue, tell Claude: **"agent manager: resume from
> PROJECT-PROGRESS.md, do \<the next item\>."** If tokens run low mid-task, Claude
> should update the **Last checkpoint** line above before stopping, so we always
> know the exact resume point.
