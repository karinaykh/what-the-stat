# What the STAT v2

A fresh, mobile-first build of `What the STAT` designed for comfortable reading on phone, iPad, and laptop.

## How to open

Just double-click `index.html`. No server, no build step.

It will open in your default browser using `file://`. Everything runs locally - no network, no tracking, no data leaves your laptop.

## What's different from v1

- **One column, generous typography.** No more left sidebar, right rail, or constant pathway strip.
- **Mobile-first.** The phone view is the design; the laptop view is the same design, with more room.
- **Hash-based routing.** Each card has its own URL like `#/card/paired-t` - bookmarkable and back-button friendly.
- **Per-layer data files.** Each card layer lives in its own file under `/data`, so adding cards doesn't bloat `app.js`.
- **Light mode only.** Warm off-white background, near-black text, one muted accent.

## File layout

```
what_the_stat_v2/
  index.html         shell + sticky top bar + search
  styles.css         mobile-first design system (light mode)
  app.js             hash router + view renderers
  data/
    cards-foundation.js
    cards-decision.js
    cards-procedure.js
    cards-vocabulary.js
    cards-method.js
    cards-level2.js
    cards-python.js
    cards-comparison.js
    cards-visualization.js
    cards-data-shape.js
    cards-red-flag.js
    cards-claim.js
    cards-transcript.js
    cards-example.js
  README.md
```

## Card schema

The schema is documented at the top of `data/cards-foundation.js`. Every card across every file uses the same shape - only the `level` field changes. New cards are plain JS objects added to the relevant array.

## Status

The main content corpus from `../what_the_stat_content/` has been ported into the v2 data files. Planning notes, templates, and source-anchor files are kept as working materials rather than card pages.

Homepage cleanup pass:

- Reframed the homepage around four user needs: Guide, Learn, Method Bank, and Flashcards.
- Added a clearer "most useful routes" section for common beginner situations.
- Added the 8-step researcher thinking spine to the homepage.
- Added Flashcards as a real deck-based study mode.
- Added visible primary navigation for Start, Map, Learn, Bank, and Flashcards on wider screens.
- Renamed the full section dropdown to Library so it works as a content shelf rather than the whole navigation system.
- Added a Method Choice Map at `#/method-map` for choosing analyses from data shape and research situation.
- Added At a Glance summaries to full card pages, with a direct link into the matching flashcard deck.
- Added a printable one-page cheat sheet at `#/cheat-sheet` for method choice, data-type clues, interpretation, and claim wording.
- Added the cheat sheet as a top navigation item and made search return tool pages such as Cheat Sheet and Method Map.
- Added a homepage quick-tools strip for Cheat Sheet, Method Map, Bridge Cards, and Flashcards.
- Simplified the top navigation to Map, Sheet, Learn, and Flashcards so the search bar has more room.
- Retagged descriptive vocabulary cards such as Mean vs Median so they appear in the Data Type pathway.
- Added a Bridge Cards page at `#/bridges` so decision paths, method comparisons, procedures, data-shape checks, and red flags are discoverable as one judgment layer.

Flashcard planning:

- Planned in `FLASHCARD_MODE_PLAN.md`.
- Flashcard mode should reuse the existing `CARDS` data rather than creating a separate content system.
- The first version now supports deck selection, flip, left/right review, optional self-rating, progress text, restart deck, keyboard arrows, and "Open full card."

## Where v1 lives

The original prototype is still at `../what_the_stat_site/`. Nothing here touches it.
