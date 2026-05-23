# What the STAT Flashcard Mode Plan

Flashcard mode should help Karina learn the statistical vocabulary and researcher judgment inside `What the STAT`.

It should not be a generic memorization game. The goal is to move from:

`I kind of recognize this word.`

to:

`I know what it means, when it fits, when to pause, and what I can claim.`

## Learning Goal

Flashcards should train four kinds of knowledge:

1. Recognition
   - What is this concept or method?
   - What family does it belong to?

2. Use
   - What research situation calls for it?
   - What data shape or variable type does it need?

3. Judgment
   - When should I pause before using it?
   - What beginner trap does it protect me from?

4. Claim discipline
   - What can this evidence support?
   - What should I not claim?

## First User Flow

### Step 1: Choose Deck

The flashcard landing page should show deck choices:

- Foundations
- Analysis Vocabulary
- Procedures
- Core Methods
- Level 2 Methods
- Data Shapes
- Red Flags
- Claim Templates
- Personal Examples
- Mixed Review

Each deck should show:

- number of cards
- what it helps with
- recommended starting point

Suggested beginner order:

1. Foundations
2. Analysis Vocabulary
3. Procedures
4. Data Shapes
5. Core Methods
6. Red Flags
7. Claim Templates
8. Personal Examples

### Step 2: Study One Card

Front of card:

- card title
- card type
- one question prompt
- optional small hint

Example:

```text
Paired Samples t-test

What kind of research situation is this for?

Hint: same people or different people?
```

Back of card:

- plain meaning
- best use
- pause condition
- claim supported
- link to full card

Example:

```text
It compares two linked measurements from the same people or matched cases.

Use when the same students have pre and post scores.

Pause if pre and post rows are not matched.

Careful claim: observed participants changed from pre to post.
```

### Step 3: Self-Rating

Optional buttons:

- Again
- Almost
- Got it

Meaning:

- Again: I did not remember or I mixed it up.
- Almost: I recognized it but could not explain it clearly.
- Got it: I could explain when to use it and what not to claim.

These should be optional marks, not required navigation. A learner should be able to move left and right through the deck without rating every card.

First version can keep progress only in browser memory during the session. Later, use `localStorage` to keep progress across visits.

### Step 4: Continue Or Open Full Card

After flipping:

- Previous card
- Next card
- Open full card
- Back to deck selection

The full card link is important because flashcards should invite deeper reading when the learner is unsure.

## Flashcard Prompt Types

Each card can generate one or more prompt types from existing fields.

### Recognition Prompt

Front:

`What is [title]?`

Back:

- card summary
- first "Plain meaning" or "Plain explanation" section if available

Best for:

- foundations
- vocabulary
- procedures
- methods

### Situation Prompt

Front:

`Which research situation calls for [title]?`

Back:

- "When to use" section if available
- card summary
- tags

Best for:

- method cards
- procedure cards
- data-shape cards

### Pause Prompt

Front:

`When should I pause before using [title]?`

Back:

- warning/callout section
- "When not to use" or "pause" section if available
- red-flag logic

Best for:

- methods
- red flags
- data shapes
- claim cards

### Claim Prompt

Front:

`What can I responsibly claim from [title]?`

Back:

- claim-related section
- callout tone `ok`
- callout tone `warn`

Best for:

- methods
- red flags
- claim templates
- personalized examples

### Compare Prompt

Front:

`How is [title] different from a similar method?`

Back:

- compare block if available
- related cards
- beginner shortcut

Best for:

- comparison cards
- method cards

## Data Strategy

Do not create a separate flashcard content database for v1.

Use the existing `CARDS` array and derive study prompts from:

- `title`
- `type`
- `level`
- `summary`
- `tags`
- `pathway`
- `sections`
- `related`

Utility functions needed:

- `cardsForDeck(deckId)`
- `makeFlashcard(card, promptType)`
- `findSection(card, headings)`
- `findCallouts(card, tone)`
- `shuffle(array)`
- `saveStudyState()` later

First implementation can use:

- one generated prompt per card;
- deck filter by `level`;
- in-session state only.

Later implementation can add:

- multiple prompt types per card;
- spaced repetition;
- localStorage progress;
- weak-card review deck;
- keyboard shortcuts.

## Deck Definitions

Suggested deck config:

```js
const FLASHCARD_DECKS = [
  {
    id: "foundation",
    label: "Foundations",
    levels: ["foundation"],
    promptTypes: ["recognition", "situation"],
    description: "Construct, measurement, sample, evidence, claim."
  },
  {
    id: "vocabulary",
    label: "Analysis Vocabulary",
    levels: ["vocabulary"],
    promptTypes: ["recognition"],
    description: "p-value, effect size, confidence interval, power."
  },
  {
    id: "methods",
    label: "Core Methods",
    levels: ["method"],
    promptTypes: ["situation", "pause", "claim"],
    description: "Which test, when to use it, and what not to claim."
  },
  {
    id: "red-flags",
    label: "Red Flags",
    levels: ["red-flag"],
    promptTypes: ["pause", "claim"],
    description: "The mistakes that make analysis misleading."
  },
  {
    id: "examples",
    label: "Personal Examples",
    levels: ["example"],
    promptTypes: ["situation", "claim"],
    description: "Karina's survey, chatbot, transcript, and simulation situations."
  },
  {
    id: "mixed",
    label: "Mixed Review",
    levels: ["foundation", "vocabulary", "procedure", "method", "data-shape", "red-flag", "claim", "example"],
    promptTypes: ["recognition", "situation", "pause", "claim"],
    description: "A mixed check of vocabulary, method choice, and judgment."
  }
];
```

## Screen Layout

Keep the same calm reading style.

### Flashcard Landing

```text
Flashcards
Practice recognition, method choice, and claim discipline.

[Foundations] [Vocabulary]
[Methods] [Data Shapes]
[Red Flags] [Examples]
[Mixed Review]
```

### Study Screen

```text
Deck: Core Methods       3 / 14

[card type]
Paired Samples t-test

What kind of research situation is this for?

[Show answer]
```

After flipping:

```text
Plain meaning:
Compares two linked measurements from the same people.

Use when:
The same students have pre and post scores.

Pause when:
The measurements are not actually paired.

Careful claim:
Observed participants changed from pre to post.

[Previous] [Next card]
[Optional mark: Again] [Almost] [Got it]
[Open full card]
```

## Interaction Details

Minimum interactions for v1:

- choose deck
- show answer
- previous card
- next card
- optional rating buttons
- progress text
- open full card
- back to decks

Keyboard shortcuts:

- Space: flip
- ArrowLeft: previous
- ArrowRight: next
- Esc: back to deck list later

## What Not To Build Yet

Do not build these in the first flashcard pass:

- login/account
- cloud sync
- complicated spaced repetition algorithm
- manual flashcard editor
- long analytics dashboard
- separate content files for flashcards

## Success Test

Flashcard mode succeeds if Karina can do these three things:

1. Recognize a term
   - `p-value`, `construct`, `Cronbach's alpha`, `Cohen's kappa`

2. Choose a likely method family
   - same students before/after -> paired t-test, Wilcoxon, or McNemar
   - two independent groups -> t-test or Mann-Whitney
   - coded transcript agreement -> Cohen's kappa

3. Say the claim carefully
   - association is not causation
   - engagement is not direct learning
   - completer-only analysis speaks about completers

## Build Order

Status: first implementation completed.

Completed:

- Replaced the placeholder `#/flashcards` page with deck selection.
- Added deck config and card filtering.
- Added generated front/back flashcard rendering.
- Added flip state, previous/next, restart deck, and session progress.
- Added optional self-rating buttons.
- Added Left, Right, and Space keyboard controls.
- Added "Open full card" link.

Still useful later:

- Test on phone-width and laptop-width layouts.
- Add localStorage progress.
- Add weak-card review.
