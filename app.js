/* What the STAT v2 - router + renderers
   Plain JS, no build step. Data comes from window.WTS_* globals
   defined in /data/cards-*.js files loaded before this script.
*/

const CARDS = [
  ...(window.WTS_FOUNDATION_CARDS    || []),
  ...(window.WTS_DECISION_CARDS      || []),
  ...(window.WTS_PROCEDURE_CARDS     || []),
  ...(window.WTS_VOCABULARY_CARDS    || []),
  ...(window.WTS_METHOD_CARDS        || []),
  ...(window.WTS_LEVEL2_CARDS        || []),
  ...(window.WTS_PYTHON_CARDS        || []),
  ...(window.WTS_COMPARISON_CARDS    || []),
  ...(window.WTS_VISUALIZATION_CARDS || []),
  ...(window.WTS_DATA_SHAPE_CARDS    || []),
  ...(window.WTS_RED_FLAG_CARDS      || []),
  ...(window.WTS_CLAIM_CARDS         || []),
  ...(window.WTS_TRANSCRIPT_CARDS    || []),
  ...(window.WTS_EXAMPLE_CARDS       || [])
];

// The 8-step researcher thinking pathway - the spine of the site.
// Each step has a slug used in URLs (#/pathway/construct etc.) and a label.
const PATHWAY_STEPS = [
  { slug: "construct",         label: "Construct" },
  { slug: "measurement",       label: "Measurement" },
  { slug: "sample",            label: "Sample" },
  { slug: "data-type",         label: "Data Type" },
  { slug: "research-question", label: "Research Question" },
  { slug: "analysis",          label: "Analysis" },
  { slug: "evidence",          label: "Evidence" },
  { slug: "claim",             label: "Claim" }
];

const PATHWAY_BY_SLUG  = Object.fromEntries(PATHWAY_STEPS.map(s => [s.slug, s]));
const PATHWAY_BY_LABEL = Object.fromEntries(PATHWAY_STEPS.map(s => [s.label.toLowerCase(), s]));

// Parse a card's `pathway` field ("Analysis -> Evidence" / "Construct" / etc.)
// into an array of canonical step slugs. Tokens that don't match a canonical
// step are ignored (e.g. Python cards use "Setup" which isn't a step).
function parsePathway(card) {
  if (!card || !card.pathway) return [];
  return String(card.pathway)
    .split(/->|→/)
    .map(t => t.trim().toLowerCase())
    .map(t => PATHWAY_BY_LABEL[t])
    .filter(Boolean)
    .map(s => s.slug);
}

const SECTIONS = [
  { level: "foundation",     slug: "foundation",     label: "Foundations",         blurb: "The before-the-test layer: construct, measurement, sample, data type." },
  { level: "decision-guide", slug: "decision-guide", label: "Decision guide",      blurb: "Plain-language paths from a research situation to a possible method." },
  { level: "procedure",      slug: "procedure",      label: "Procedures",          blurb: "Research actions: composite scores, scales, missing data, coder agreement." },
  { level: "vocabulary",     slug: "vocabulary",     label: "Analysis vocabulary", blurb: "p-value, effect size, confidence interval, and other words for reading results." },
  { level: "method",         slug: "method",         label: "Methods",             blurb: "t-tests, correlations, regressions, ANOVA, reliability statistics." },
  { level: "level2",         slug: "level2",         label: "Level 2 methods",     blurb: "Beyond the core 14: McNemar, mixed models, sensitivity analysis, and other next-step methods." },
  { level: "python",         slug: "python",         label: "Python",              blurb: "Using Python as a research workflow before any p-value." },
  { level: "comparison",     slug: "comparison",     label: "Comparisons",         blurb: "Side-by-side help for methods that are easy to confuse." },
  { level: "visualization",  slug: "visualization",  label: "Visualizations",      blurb: "Which graph or table actually supports your claim." },
  { level: "data-shape",     slug: "data-shape",     label: "Data shapes",         blurb: "What does one row mean, and what analyses does that allow?" },
  { level: "red-flag",       slug: "red-flag",       label: "Red flags",           blurb: "Pause cards for when a method or claim is about to mislead." },
  { level: "claim",          slug: "claim",          label: "Claim templates",     blurb: "Sentences for writing careful results - and what to avoid." },
  { level: "transcript",     slug: "transcript",     label: "Transcript work",     blurb: "A multi-step workflow for evaluating engagement, performance, and teaching quality from chat transcripts." },
  { level: "example",        slug: "example",        label: "Personal examples",   blurb: "Scenarios from learning interventions, simulations, surveys, transcripts." }
];

const SITE_PAGES = [
  {
    id: "page-cheat-sheet",
    href: "#/cheat-sheet",
    title: "One-page cheat sheet",
    type: "Tool",
    level: "tool",
    pathway: "Analysis -> Evidence -> Claim",
    summary: "A compact printable guide for data types, method choice, interpretation reminders, red flags, and careful claim wording.",
    tags: ["cheat", "cheatsheet", "cheat-sheet", "one-page", "print", "method-choice", "claim", "p-value"],
    sections: [
      { kind: "p", h: "Search words", body: "cheat sheet method chooser one page printable p-value effect size claim data type" }
    ]
  },
  {
    id: "page-method-map",
    href: "#/method-map",
    title: "Method choice map",
    type: "Tool",
    level: "tool",
    pathway: "Research Question -> Analysis",
    summary: "A guided map from research situation, data type, and row meaning to likely statistical methods.",
    tags: ["map", "method-choice", "choose", "test", "analysis", "research-question"],
    sections: [
      { kind: "p", h: "Search words", body: "method map choose statistical test same students two groups pre post chatbot survey performance" }
    ]
  }
];

const HOME_ACTIONS = [
  {
    href: "#/section/decision-guide",
    eyebrow: "I am lost",
    title: "Guide me through a research situation",
    desc: "Use plain-language paths like pre/post change, two groups, transcript engagement, or coder agreement.",
    meta: "Best when you do not know the test name."
  },
  {
    href: "#/section/foundation",
    eyebrow: "I want to learn",
    title: "Build the researcher thinking map",
    desc: "Start with construct, measurement, sample, data type, evidence, and claim before statistics words get heavy.",
    meta: "Best when you want the senior-researcher explanation."
  },
  {
    href: "#/section/method",
    eyebrow: "I know a word",
    title: "Search and browse the method bank",
    desc: "Look up t-tests, correlations, regressions, alpha, kappa, and related method families.",
    meta: "Best when a term sounds familiar but fuzzy."
  },
  {
    href: "#/flashcards",
    eyebrow: "Study mode",
    title: "Review with flashcards",
    desc: "Turn the card bank into quick recall practice by deck: foundations, vocabulary, methods, red flags, examples.",
    meta: "Best when you want the words to stick."
  }
];

const HOME_GUIDE_ROUTES = [
  {
    href: "#/cheat-sheet",
    title: "One-page cheat sheet",
    desc: "A compact desk reference for choosing methods, reading results, and writing careful claims."
  },
  {
    href: "#/method-map",
    title: "Method choice map",
    desc: "Start from the research situation, data type, and row meaning before naming a test."
  },
  {
    href: "#/section/decision-guide",
    title: "Pre/post survey change",
    desc: "Same students before and after. Think paired t-test, Wilcoxon, or McNemar depending on data type."
  },
  {
    href: "#/card/example-perf-vs-survey-change",
    title: "Survey change + chatbot performance",
    desc: "Matched survey and chatbot data. Think data shape, completers, scatterplot, correlation, or regression."
  },
  {
    href: "#/section/transcript",
    title: "Transcript engagement",
    desc: "Separate engagement, performance, learning, and process quality before choosing metrics or codes."
  },
  {
    href: "#/section/red-flag",
    title: "Pause before overclaiming",
    desc: "Check repeated rows, denominator drift, completer-only samples, and engagement-as-learning mistakes."
  }
];

const HOME_QUICK_TOOLS = [
  { href: "#/cheat-sheet", label: "Cheat sheet", desc: "One-page reference" },
  { href: "#/method-map", label: "Method map", desc: "Choose a method" },
  { href: "#/flashcards", label: "Flashcards", desc: "Practice recall" },
  { href: "#/section/visualization", label: "Visuals", desc: "Pick a graph" }
];

const METHOD_CHOICE_MAP = [
  {
    title: "Same learners before and after",
    signal: "Pre/post survey, before/after confidence, first attempt vs final attempt, or correct/incorrect before and after.",
    ask: "Is the outcome a scale score, an ordinal rating, or a binary yes/no outcome?",
    choices: [
      { label: "Scale or approximately continuous score", cards: ["paired-t"], note: "Use when each learner has two matched scores." },
      { label: "Ordinal or very skewed paired score", cards: ["wilcoxon"], note: "Use when the before/after differences are better treated as ranks." },
      { label: "Binary yes/no paired outcome", cards: ["mcnemar"], note: "Use when the same learner changes category, such as incorrect to correct." }
    ],
    visual: "viz-pre-post",
    pause: "The rows must be matched to the same person or case. Pre/post evidence alone does not prove the intervention caused the change."
  },
  {
    title: "Two independent groups",
    signal: "Treatment vs comparison group, chatbot users vs non-users, section A vs section B, or two unrelated cohorts.",
    ask: "What kind of outcome are you comparing across the two groups?",
    choices: [
      { label: "Continuous or scale outcome", cards: ["independent-t"], note: "Compare mean scores across two independent groups." },
      { label: "Ordinal, ranked, or skewed outcome", cards: ["mann-whitney"], note: "Compare two independent groups without leaning on normality." },
      { label: "Categorical outcome", cards: ["chi-square", "logistic-regression"], note: "Use a table for association, or model the odds of a binary outcome." }
    ],
    visual: "viz-two-groups",
    pause: "Check whether groups are truly independent. If the same learners appear in both groups, this is not the right branch."
  },
  {
    title: "Three or more independent groups",
    signal: "Multiple course sections, three intervention versions, or several performance bands.",
    ask: "Are you comparing scores, ranks, or adjusted post-test outcomes?",
    choices: [
      { label: "Continuous score across groups", cards: ["anova"], note: "Compare means across three or more independent groups." },
      { label: "Ordinal or skewed score across groups", cards: ["kruskal-wallis"], note: "Compare rank patterns across three or more independent groups." },
      { label: "Post-score while adjusting for pre-score", cards: ["ancova"], note: "Useful when baseline differences matter." }
    ],
    visual: "viz-two-groups",
    pause: "A significant omnibus test tells you that at least one group differs. It does not tell you which groups differ without follow-up comparisons."
  },
  {
    title: "Relationship between two variables",
    signal: "Do students with higher engagement also have higher performance? Are usefulness ratings related to confidence?",
    ask: "Are both variables continuous-ish, ordinal, or part of a larger explanatory model?",
    choices: [
      { label: "Two continuous variables, roughly linear", cards: ["pearson"], note: "Use for linear association between two quantitative variables." },
      { label: "Ordinal, ranked, skewed, or monotonic relationship", cards: ["spearman"], note: "Use when ranks are more defensible than raw values." },
      { label: "One outcome with several predictors", cards: ["multiple-regression"], note: "Use when you want to adjust for prior performance or other covariates." }
    ],
    visual: "viz-association",
    pause: "Correlation and regression can describe association. They do not automatically prove that one variable caused the other."
  },
  {
    title: "Predict or explain an outcome",
    signal: "Can prior score, engagement, or survey confidence explain later performance or completion?",
    ask: "What kind of outcome are you trying to predict?",
    choices: [
      { label: "Continuous outcome", cards: ["linear-regression", "multiple-regression"], note: "Predict or explain a score using one or more predictors." },
      { label: "Binary outcome", cards: ["logistic-regression"], note: "Predict a yes/no outcome such as pass/fail or completed/not completed." },
      { label: "Count outcome", cards: ["count-models"], note: "Use for counts such as messages, attempts, or issue counts." },
      { label: "Repeated or nested data", cards: ["mixed-models"], note: "Use when observations are nested inside students, teams, sections, or time." }
    ],
    visual: "viz-model-results",
    pause: "Ask what one row means. If rows are messages or attempts nested inside the same learner, ordinary regression may overstate certainty."
  },
  {
    title: "Survey scale quality",
    signal: "You want to average several items into one confidence, engagement, usefulness, or attitude score.",
    ask: "How many items are meant to measure the same construct?",
    choices: [
      { label: "Three or more related items", cards: ["cronbach"], note: "Check internal consistency before combining items into a scale." },
      { label: "Only two related items", cards: ["spearman-brown"], note: "Use when a two-item reliability estimate is more appropriate." },
      { label: "You are building the variable itself", cards: ["scale", "composite-score", "reverse-coding"], note: "Make the construct and scoring rule defensible before the statistic." }
    ],
    visual: "viz-survey-items",
    pause: "Reliability is not validity. A high alpha does not prove the items measure the right construct."
  },
  {
    title: "Coder agreement for transcripts or rubrics",
    signal: "Two coders classify messages, clinical reasoning moves, issue types, rubric scores, or engagement categories.",
    ask: "Are the codes nominal categories or ordered levels?",
    choices: [
      { label: "Nominal categories", cards: ["cohen-kappa"], note: "Use when categories have no natural order." },
      { label: "Ordered categories", cards: ["weighted-kappa"], note: "Use when disagreement by one level is less serious than disagreement by several levels." },
      { label: "You are still designing the coding process", cards: ["codebook", "coder-agreement"], note: "Define codes and calibration before treating agreement as evidence." }
    ],
    visual: "viz-coded-transcript",
    pause: "Agreement statistics cannot rescue unclear codes. The codebook and calibration examples matter."
  },
  {
    title: "Chatbot performance, engagement, and survey links",
    signal: "You want to connect pre/post survey change with chatbot behavior, transcript quality, or performance outcomes.",
    ask: "Are you describing behavior, linking variables, or making an intervention claim?",
    choices: [
      { label: "Describe usage or engagement", cards: ["descriptive-table", "viz-transcript-engagement"], note: "Start with denominators, attempts, turns, and completion patterns." },
      { label: "Link survey change to performance", cards: ["pearson", "spearman", "multiple-regression"], note: "Use association or prediction depending on data type and controls." },
      { label: "Check whether conclusions depend on inclusion rules", cards: ["sensitivity-analysis", "missing-data-sensitivity"], note: "Use when completer-only samples or missing data could change the story." }
    ],
    visual: "viz-transcript-engagement",
    pause: "Engagement is not automatically learning. Name the construct before turning chat behavior into evidence."
  }
];

const FLASHCARD_DECKS = [
  {
    id: "foundation",
    label: "Foundations",
    levels: ["foundation"],
    promptTypes: ["recognition", "situation"],
    description: "Construct, measurement, sample, evidence, and claim.",
    recommended: "Start here when the whole map feels blurry."
  },
  {
    id: "vocabulary",
    label: "Analysis Vocabulary",
    levels: ["vocabulary"],
    promptTypes: ["recognition", "claim"],
    description: "p-value, effect size, confidence interval, power, and inference words.",
    recommended: "Use this when journal results sections feel coded."
  },
  {
    id: "procedure",
    label: "Procedures",
    levels: ["procedure"],
    promptTypes: ["recognition", "situation", "pause"],
    description: "Composite scores, Likert logic, missing data, descriptive tables, and coding procedures.",
    recommended: "Use this before running a named statistical test."
  },
  {
    id: "methods",
    label: "Core Methods",
    levels: ["method"],
    promptTypes: ["situation", "pause", "claim"],
    description: "The main statistical tests and models: which one, when, and what not to claim.",
    recommended: "Use this when you recognize method names but cannot choose among them."
  },
  {
    id: "level2",
    label: "Level 2 Methods",
    levels: ["level2"],
    promptTypes: ["situation", "pause", "claim"],
    description: "McNemar, mixed models, sensitivity analysis, and other next-step methods.",
    recommended: "Use this when the real data shape is more complicated."
  },
  {
    id: "data-shape",
    label: "Data Shapes",
    levels: ["data-shape"],
    promptTypes: ["situation", "pause"],
    description: "What one row means, and what that allows or risks.",
    recommended: "Use this before analyzing transcripts, cases, attempts, or merged survey data."
  },
  {
    id: "red-flag",
    label: "Red Flags",
    levels: ["red-flag"],
    promptTypes: ["pause", "claim"],
    description: "The mistakes that make a method, graph, or claim misleading.",
    recommended: "Use this to build senior-researcher judgment."
  },
  {
    id: "claim",
    label: "Claim Templates",
    levels: ["claim"],
    promptTypes: ["claim", "pause"],
    description: "Practice saying results carefully without overclaiming.",
    recommended: "Use this when you need to write a Results sentence."
  },
  {
    id: "example",
    label: "Personal Examples",
    levels: ["example"],
    promptTypes: ["situation", "claim"],
    description: "Survey, chatbot, transcript, simulation, performance, and engagement situations.",
    recommended: "Use this to connect stats vocabulary to your actual work."
  },
  {
    id: "mixed",
    label: "Mixed Review",
    levels: ["foundation", "vocabulary", "procedure", "method", "level2", "data-shape", "red-flag", "claim", "example"],
    promptTypes: ["recognition", "situation", "pause", "claim"],
    description: "A mixed check of vocabulary, method choice, red flags, and claim discipline.",
    recommended: "Use this after studying a few decks separately."
  }
];

const flashState = {
  deckId: null,
  order: [],
  index: 0,
  flipped: false,
  ratings: { again: 0, almost: 0, gotIt: 0 }
};

/* ---------- Router ---------- */

function getRoute() {
  const raw = location.hash.replace(/^#\/?/, "");
  if (!raw) return { kind: "home" };
  const [path, qstr] = raw.split("?");
  const parts = path.split("/").filter(Boolean);
  const params = new URLSearchParams(qstr || "");
  if (parts[0] === "section" && parts[1]) return { kind: "section", slug: parts[1] };
  if (parts[0] === "pathway" && parts[1]) return { kind: "pathway", slug: parts[1] };
  if (parts[0] === "card"    && parts[1]) return { kind: "card", id: parts[1] };
  if (parts[0] === "method-map")          return { kind: "method-map" };
  if (parts[0] === "cheat-sheet")         return { kind: "cheat-sheet" };
  if (parts[0] === "flashcards")          return { kind: "flashcards", deckId: parts[1] || "" };
  if (parts[0] === "search")              return { kind: "search", q: params.get("q") || "" };
  return { kind: "not-found", path: raw };
}

function render() {
  const view = document.getElementById("view");
  const activeSearchId = document.activeElement && ["topSearch", "homeSearch"].includes(document.activeElement.id)
    ? document.activeElement.id
    : "";
  const r = getRoute();
  if      (r.kind === "home")          view.innerHTML = renderHome();
  else if (r.kind === "section")       view.innerHTML = renderSection(r.slug);
  else if (r.kind === "pathway")       view.innerHTML = renderPathwayIndex(r.slug);
  else if (r.kind === "card")          view.innerHTML = renderCard(r.id);
  else if (r.kind === "method-map")    view.innerHTML = renderMethodChoiceMap();
  else if (r.kind === "cheat-sheet")   view.innerHTML = renderCheatSheet();
  else if (r.kind === "flashcards")    view.innerHTML = renderFlashcards(r.deckId);
  else if (r.kind === "search")        view.innerHTML = renderSearch(r.q);
  else                                 view.innerHTML = renderNotFound();
  syncTopSearch(r);
  syncPrimaryNav(r);
  if (r.kind === "flashcards") wireFlashcards(r.deckId);
  if (r.kind === "cheat-sheet") wireCheatSheet();
  if (activeSearchId && r.kind === "search") restoreSearchFocus();
  else {
    view.focus();
    window.scrollTo(0, 0);
  }
}

function syncTopSearch(route) {
  const input = document.getElementById("topSearch");
  if (!input) return;
  input.value = route.kind === "search" ? route.q : "";
}

function restoreSearchFocus() {
  const input = document.getElementById("topSearch");
  if (!input) return;
  input.focus();
  const end = input.value.length;
  if (typeof input.setSelectionRange === "function") input.setSelectionRange(end, end);
}

function syncPrimaryNav(route) {
  const links = document.querySelectorAll(".primary-nav a");
  if (!links.length) return;

  let active = "home";
  if (route.kind === "method-map") active = "guide";
  if (route.kind === "cheat-sheet") active = "sheet";
  if (route.kind === "flashcards") active = "flashcards";
  if (route.kind === "search") active = "bank";
  if (route.kind === "section") {
    if (route.slug === "decision-guide") active = "guide";
    else if (["foundation", "procedure", "vocabulary", "comparison", "visualization", "data-shape", "red-flag", "claim", "transcript", "example", "python", "level2"].includes(route.slug)) active = "learn";
    else if (route.slug === "method") active = "bank";
  }
  if (route.kind === "card") {
    const card = CARDS.find(c => c.id === route.id);
    if (card && card.level === "decision-guide") active = "guide";
    else if (card && ["method", "level2"].includes(card.level)) active = "bank";
    else if (card) active = "learn";
  }

  links.forEach(link => {
    link.classList.toggle("active", link.dataset.nav === active);
  });
}

/* ---------- Views ---------- */

function renderHome() {
  const counts = SECTIONS.map(s => ({ ...s, n: CARDS.filter(c => c.level === s.level).length }));
  return `
    <section class="hero home-hero">
      <h1>What do you need right now?</h1>
      <p class="lede">Choose the path that matches your current research brain state: lost, learning, looking up a term, or reviewing for memory.</p>
      <div class="search search-big">
        <label for="homeSearch" style="display:none">Search</label>
        <input id="homeSearch" type="search" placeholder="Search methods, terms, examples, or beginner phrases..." autocomplete="off" />
      </div>
      <nav class="quick-tools" aria-label="Quick tools">
        ${HOME_QUICK_TOOLS.map(tool => `
          <a href="${tool.href}">
            <span>${esc(tool.label)}</span>
            <small>${esc(tool.desc)}</small>
          </a>
        `).join("")}
      </nav>
    </section>

    <section class="home-actions" aria-label="Primary paths">
      ${HOME_ACTIONS.map(action => `
        <a class="home-action ${action.soon ? "soon" : ""}" href="${action.href}">
          <span class="home-action-eyebrow">${esc(action.eyebrow)}</span>
          <span class="home-action-title">${esc(action.title)}</span>
          <span class="home-action-desc">${esc(action.desc)}</span>
          <span class="home-action-meta">${esc(action.meta)}</span>
        </a>
      `).join("")}
    </section>

    <section class="home-split">
      <div class="block">
        <h2>Most useful routes</h2>
        <ul class="route-list">
          ${HOME_GUIDE_ROUTES.map(route => `
            <li>
              <a href="${route.href}">
                <span class="route-title">${esc(route.title)}</span>
                <span class="route-desc">${esc(route.desc)}</span>
              </a>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="block pathway-home-block">
        <h2>Researcher thinking spine</h2>
        <ol class="pathway-home">
          ${PATHWAY_STEPS.map((step, i) => `
            <li>
              <a href="#/pathway/${step.slug}">
                <span>${i + 1}</span>
                <strong>${esc(step.label)}</strong>
              </a>
            </li>
          `).join("")}
        </ol>
      </div>
    </section>

    <section class="block">
      <h2>Browse the library</h2>
      <ul class="section-grid">
        ${counts.map(s => `
          <li>
            <a href="#/section/${s.slug}">
              <span class="sec-title">${esc(s.label)}</span>
              <span class="sec-count">${s.n} card${s.n === 1 ? "" : "s"}</span>
            </a>
          </li>
        `).join("")}
      </ul>
    </section>
  `;
}

function renderFlashcards(deckId) {
  if (!deckId) return renderFlashcardDecks();
  const deck = FLASHCARD_DECKS.find(d => d.id === deckId);
  if (!deck) return renderNotFound();
  ensureFlashDeck(deck);
  return renderFlashcardStudy(deck);
}

function renderFlashcardDecks() {
  return `
    <nav class="crumb"><a href="#/">Home</a> · Flashcards</nav>
    <header class="page-head flash-head">
      <p class="home-kicker">Study mode</p>
      <h1>Practice recognition, method choice, and claim discipline.</h1>
      <p class="lede">Pick a deck. The cards are generated from the same learning bank, so study mode stays connected to the full explanations.</p>
    </header>
    <section class="deck-grid" aria-label="Flashcard decks">
      ${FLASHCARD_DECKS.map(deck => renderDeckCard(deck)).join("")}
    </section>
    <aside class="callout info flash-note">
      <h3>How to use this</h3>
      <p>Try to answer before flipping. Rate yourself based on whether you could explain the situation, pause condition, and careful claim in your own words.</p>
    </aside>
  `;
}

function renderDeckCard(deck) {
  const n = cardsForDeck(deck).length;
  return `
    <a class="deck-card" href="#/flashcards/${deck.id}">
      <span class="deck-label">${esc(deck.label)}</span>
      <span class="deck-count">${n} card${n === 1 ? "" : "s"}</span>
      <span class="deck-desc">${esc(deck.description)}</span>
      <span class="deck-rec">${esc(deck.recommended)}</span>
    </a>
  `;
}

function renderFlashcardStudy(deck) {
  const total = flashState.order.length;
  if (!total) {
    return `
      <nav class="crumb"><a href="#/">Home</a> · <a href="#/flashcards">Flashcards</a> · ${esc(deck.label)}</nav>
      <div class="empty">
        <h2>No cards in this deck yet.</h2>
        <p>Choose another deck or add more cards to the bank.</p>
      </div>
    `;
  }
  if (flashState.index >= total) return renderFlashcardComplete(deck);

  const card = CARDS.find(c => c.id === flashState.order[flashState.index]);
  const study = makeFlashcard(card, deck);
  const progress = `${flashState.index + 1} / ${total}`;

  return `
    <nav class="crumb"><a href="#/">Home</a> · <a href="#/flashcards">Flashcards</a> · ${esc(deck.label)}</nav>
    <header class="flash-study-head">
      <div>
        <p class="home-kicker">${esc(deck.label)}</p>
        <h1>${esc(study.title)}</h1>
      </div>
      <div class="flash-progress" aria-label="Deck progress">
        <span>${progress}</span>
        <strong>${flashState.ratings.gotIt} got it</strong>
      </div>
    </header>

    <article class="flashcard ${flashState.flipped ? "is-flipped" : ""}">
      <div class="flashcard-top">
        <span class="pill ${esc(card.level || "")}">${esc(card.type || deck.label)}</span>
        <span class="flash-prompt-type">${esc(study.promptTypeLabel)}</span>
      </div>
      <h2>${esc(study.question)}</h2>
      ${study.hint ? `<p class="flash-hint">${esc(study.hint)}</p>` : ""}
      ${flashState.flipped ? renderFlashAnswer(study, card) : `
        <button class="flash-primary" data-flash-action="flip">Show answer</button>
      `}
    </article>

    <div class="flash-actions flash-nav-actions">
      <button data-flash-action="prev" ${flashState.index === 0 ? "disabled" : ""}>Previous</button>
      <button data-flash-action="next">Next card</button>
      <button data-flash-action="restart">Restart deck</button>
      <a class="flash-link" href="#/card/${card.id}">Open full card</a>
    </div>

    ${flashState.flipped ? `
      <div class="flash-rating-row" aria-label="Optional self-rating">
        <span>Optional mark</span>
        <button data-flash-rating="again">Again</button>
        <button data-flash-rating="almost">Almost</button>
        <button data-flash-rating="gotIt">Got it</button>
      </div>
    ` : ""}

    <p class="flash-key-hint">Use Left and Right to move through cards. Press Space to reveal the answer.</p>
  `;
}

function renderFlashAnswer(study, card) {
  return `
    <div class="flash-answer">
      ${study.answerBlocks.map(block => `
        <section>
          <h3>${esc(block.label)}</h3>
          ${flashBodyHtml(block.body)}
        </section>
      `).join("")}
      <a class="flash-link inline" href="#/card/${card.id}">Read the full card</a>
    </div>
  `;
}

function renderFlashcardComplete(deck) {
  const ratings = flashState.ratings;
  return `
    <nav class="crumb"><a href="#/">Home</a> · <a href="#/flashcards">Flashcards</a> · ${esc(deck.label)}</nav>
    <section class="flash-complete">
      <p class="home-kicker">Deck complete</p>
      <h1>${esc(deck.label)}</h1>
      <p class="lede">Nice. The point is not perfect recall; it is becoming faster at recognizing the situation, the pause condition, and the careful claim.</p>
      <div class="flash-score-grid">
        <div><span>${ratings.again}</span><strong>Again</strong></div>
        <div><span>${ratings.almost}</span><strong>Almost</strong></div>
        <div><span>${ratings.gotIt}</span><strong>Got it</strong></div>
      </div>
      <div class="flash-actions">
        <button data-flash-action="restart">Study again</button>
        <a class="flash-link" href="#/flashcards">Choose another deck</a>
      </div>
    </section>
  `;
}

function cardsForDeck(deck) {
  return CARDS.filter(card => deck.levels.includes(card.level));
}

function ensureFlashDeck(deck) {
  if (flashState.deckId === deck.id && flashState.order.length) return;
  resetFlashDeck(deck);
}

function resetFlashDeck(deck) {
  flashState.deckId = deck.id;
  flashState.order = shuffle(cardsForDeck(deck).map(card => card.id));
  flashState.index = 0;
  flashState.flipped = false;
  flashState.ratings = { again: 0, almost: 0, gotIt: 0 };
}

function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function makeFlashcard(card, deck) {
  const promptType = choosePromptType(card, deck);
  return {
    title: card.title,
    promptType,
    promptTypeLabel: promptTypeLabels()[promptType] || "Review",
    question: flashQuestion(promptType),
    hint: flashHint(promptType),
    answerBlocks: flashAnswerBlocks(card, promptType)
  };
}

function promptTypeLabels() {
  return {
    recognition: "Recognition",
    situation: "Use",
    pause: "Judgment",
    claim: "Claim",
    compare: "Compare"
  };
}

function choosePromptType(card, deck) {
  const preferred = {
    "red-flag": "pause",
    claim: "claim",
    method: "situation",
    level2: "situation",
    example: "situation",
    comparison: "compare",
    "data-shape": "situation",
    procedure: "situation",
    vocabulary: "recognition",
    foundation: "recognition"
  }[card.level] || "recognition";

  const allowed = deck.promptTypes || ["recognition"];
  const candidates = unique([preferred, ...allowed, "recognition"]).filter(type => allowed.includes(type) || type === preferred);
  return candidates.find(type => hasPromptContent(card, type)) || "recognition";
}

function hasPromptContent(card, type) {
  if (type === "recognition") return true;
  if (type === "situation") return Boolean(findSection(card, ["use", "situation", "data shape", "possible analysis", "research situation", "ask yourself"]));
  if (type === "pause") return Boolean(findSection(card, ["pause", "avoid", "trap", "check first", "when not"]) || findCallout(card, "warn"));
  if (type === "claim") return Boolean(findSection(card, ["claim"]) || findCallout(card, "ok") || findCallout(card, "warn", ["claim", "avoid"]));
  if (type === "compare") return Boolean((card.sections || []).some(section => section.kind === "compare") || (card.related || []).length);
  return false;
}

function flashQuestion(type) {
  return {
    recognition: "What is this, in plain language?",
    situation: "What research situation calls for this?",
    pause: "When should I pause before using this?",
    claim: "What can I responsibly claim from this?",
    compare: "What confusion does this help resolve?"
  }[type] || "What do I need to remember?";
}

function flashHint(type) {
  return {
    recognition: "Think: concept, method family, or research action.",
    situation: "Think: data shape, variable type, and research question.",
    pause: "Think: what would make this misleading?",
    claim: "Think: what the evidence supports, and what it does not.",
    compare: "Think: what beginners often mix up."
  }[type] || "";
}

function flashAnswerBlocks(card, type) {
  const blocks = [];
  if (type === "recognition") {
    addFlashBlock(blocks, "Plain meaning", findSection(card, ["plain meaning", "plain explanation"]) || card.summary);
    addFlashBlock(blocks, "Why it matters", findSection(card, ["senior researcher note", "why", "purpose"]));
    addFlashBlock(blocks, "Watch for", findCallout(card, "warn"));
  } else if (type === "situation") {
    addFlashBlock(blocks, "Use when", findSection(card, ["use this path if", "when you use", "when to use", "possible analysis", "research situation"]) || card.summary);
    addFlashBlock(blocks, "Data clue", findSection(card, ["data shape", "variables needed", "unit of analysis", "outcome", "ask yourself"]));
    addFlashBlock(blocks, "Pause when", findSection(card, ["what to check first", "pause", "when not", "avoid"]) || findCallout(card, "warn"));
  } else if (type === "pause") {
    addFlashBlock(blocks, "Pause when", findSection(card, ["pause", "when not", "what to check first", "common beginner trap"]) || findCallout(card, "warn"));
    addFlashBlock(blocks, "Safer move", findCallout(card, "ok") || findSection(card, ["questions to ask", "what to check", "use this"]));
    addFlashBlock(blocks, "Why it matters", card.summary);
  } else if (type === "claim") {
    addFlashBlock(blocks, "Careful claim", findCallout(card, "ok", ["claim", "can"]) || findSection(card, ["what you can claim", "claim you can make", "claim this supports"]));
    addFlashBlock(blocks, "Do not claim", findCallout(card, "warn", ["claim", "avoid"]) || findSection(card, ["what to avoid claiming", "claim to avoid", "does not support"]));
    addFlashBlock(blocks, "Evidence reminder", card.summary);
  } else if (type === "compare") {
    addFlashBlock(blocks, "Comparison", findSectionByKind(card, "compare"));
    addFlashBlock(blocks, "Related cards", relatedTitles(card));
    addFlashBlock(blocks, "Plain reminder", card.summary);
  }

  if (!blocks.length) addFlashBlock(blocks, "Plain reminder", card.summary || "Open the full card for the complete explanation.");
  return blocks.slice(0, 4);
}

function addFlashBlock(blocks, label, source) {
  if (!source) return;
  const body = sourceToFlashBody(source);
  if (!body || (Array.isArray(body) && body.length === 0)) return;
  blocks.push({ label, body });
}

function sourceToFlashBody(source) {
  if (typeof source === "string") return firstUsefulText(source);
  if (Array.isArray(source)) return source.filter(Boolean).slice(0, 5);
  if (!source || typeof source !== "object") return "";

  if (source.kind === "l") return (source.body || []).slice(0, 5);
  if (source.kind === "p" || source.kind === "callout" || source.kind === "quote" || source.kind === "code") {
    return firstUsefulText(source.body || "");
  }
  if (source.kind === "compare") {
    return (source.body || []).map(col => {
      const items = (col.items || []).slice(0, 3).join("; ");
      return `${col.h || "Compare"}: ${items}`;
    });
  }
  if (source.kind === "t") {
    return (source.body || []).slice(0, 4).map(row => row.join(" | "));
  }
  return "";
}

function firstUsefulText(text) {
  return String(text || "")
    .split(/\n{2,}/)
    .map(part => part.trim())
    .filter(Boolean)
    .slice(0, 2)
    .join("\n\n");
}

function flashBodyHtml(body) {
  if (Array.isArray(body)) {
    return `<ul>${body.map(item => `<li>${inline(item)}</li>`).join("")}</ul>`;
  }
  return proseHtml(body);
}

function findSection(card, terms) {
  const lowered = terms.map(term => term.toLowerCase());
  return (card.sections || []).find(section => {
    const heading = String(section.h || "").toLowerCase();
    return lowered.some(term => heading.includes(term));
  });
}

function findSectionByKind(card, kind) {
  return (card.sections || []).find(section => section.kind === kind);
}

function findCallout(card, tone, terms) {
  const lowered = (terms || []).map(term => term.toLowerCase());
  return (card.sections || []).find(section => {
    if (section.kind !== "callout") return false;
    if (tone && section.tone !== tone) return false;
    if (!lowered.length) return true;
    const hay = `${section.h || ""} ${section.body || ""}`.toLowerCase();
    return lowered.some(term => hay.includes(term));
  });
}

function relatedTitles(card) {
  return (card.related || [])
    .map(id => CARDS.find(item => item.id === id))
    .filter(Boolean)
    .map(item => item.title)
    .slice(0, 5);
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function renderMethodChoiceMap() {
  return `
    <nav class="crumb"><a href="#/">Home</a> · Method choice map</nav>
    <header class="page-head method-map-head">
      <p class="home-kicker">Guide mode</p>
      <h1>Method choice map</h1>
      <p class="lede">Start from the research situation and data shape. The goal is not to memorize tests first; it is to recognize what kind of evidence your question needs.</p>
    </header>

    <section class="method-map-start" aria-label="How to use the map">
      <h2>Read the map in this order</h2>
      <ol>
        <li><strong>Claim:</strong> What do you want to say?</li>
        <li><strong>Outcome:</strong> What is the main thing you measured?</li>
        <li><strong>Rows:</strong> What does one row mean?</li>
        <li><strong>Relationship:</strong> Same people, independent groups, nested data, or linked variables?</li>
        <li><strong>Method:</strong> Pick the analysis that matches those answers.</li>
      </ol>
    </section>

    <section class="method-map-grid" aria-label="Method choice routes">
      ${METHOD_CHOICE_MAP.map(renderMethodMapCard).join("")}
    </section>

    <aside class="callout info method-map-note">
      <h3>Senior researcher note</h3>
      <p>This is a thinking map, not an automatic test picker. When the map gives you a likely method, open the card and check the pause conditions before trusting it.</p>
    </aside>
  `;
}

function renderMethodMapCard(route) {
  return `
    <article class="method-map-card">
      <header>
        <h2>${esc(route.title)}</h2>
        <p>${esc(route.signal)}</p>
      </header>
      <div class="map-question">
        <span>Ask first</span>
        <strong>${esc(route.ask)}</strong>
      </div>
      <div class="method-choice-list">
        ${route.choices.map(choice => `
          <div class="method-choice">
            <div>
              <span class="choice-label">${esc(choice.label)}</span>
              <p>${esc(choice.note)}</p>
            </div>
            <div class="method-links">
              ${(choice.cards || []).map(renderMethodChip).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <footer class="map-footer">
        ${route.visual ? `<a class="map-visual" href="#/card/${esc(route.visual)}">Visualization</a>` : ""}
        <p>${esc(route.pause)}</p>
      </footer>
    </article>
  `;
}

function renderMethodChip(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return "";
  return `<a class="method-chip" href="#/card/${esc(card.id)}">${esc(card.title)}</a>`;
}

function renderCheatSheet() {
  return `
    <nav class="crumb"><a href="#/">Home</a> · Cheat sheet</nav>
    <header class="page-head cheat-head">
      <div>
        <p class="home-kicker">One-page desk sheet</p>
        <h1>Quant method cheat sheet</h1>
        <p class="lede">Use this when you recognize the words but do not yet know which one you need. Start with the research situation, then check the method card before reporting anything.</p>
      </div>
      <button class="print-btn" type="button" data-cheat-action="print">Print</button>
    </header>

    <section class="cheat-sheet" aria-label="Quantitative methods cheat sheet">
      <div class="cheat-band spine-band">
        <h2>Researcher thinking order</h2>
        <ol class="cheat-spine">
          ${PATHWAY_STEPS.map((step, i) => `
            <li>
              <span>${i + 1}</span>
              <a href="#/pathway/${step.slug}">${esc(step.label)}</a>
            </li>
          `).join("")}
        </ol>
      </div>

      <div class="cheat-grid">
        <section class="cheat-panel">
          <h2>Before choosing a test</h2>
          <ul>
            <li><strong>Construct:</strong> What are you actually trying to study?</li>
            <li><strong>Measure:</strong> Is it one item, a score, a code, a count, or a category?</li>
            <li><strong>Row:</strong> Does one row mean one student, one attempt, one message, one case, or one time point?</li>
            <li><strong>Question:</strong> Are you describing, comparing, linking, predicting, or checking reliability?</li>
            <li><strong>Claim:</strong> What sentence do you hope to support?</li>
          </ul>
        </section>

        <section class="cheat-panel">
          <h2>Data type clues</h2>
          <dl class="cheat-defs">
            <div><dt>Binary</dt><dd>yes/no, pass/fail, correct/incorrect</dd></div>
            <div><dt>Nominal</dt><dd>categories with no order</dd></div>
            <div><dt>Ordinal</dt><dd>ordered ratings or rubric levels</dd></div>
            <div><dt>Continuous-ish</dt><dd>scores, averages, times, totals</dd></div>
            <div><dt>Count</dt><dd>number of attempts, messages, errors, turns</dd></div>
          </dl>
        </section>
      </div>

      <section class="cheat-panel wide">
        <h2>Fast method chooser</h2>
        <div class="cheat-table" role="table" aria-label="Fast method chooser">
          ${renderCheatRow("Same learners before and after", "Scale score", ["paired-t"], "Paired data. Same person appears twice.")}
          ${renderCheatRow("Same learners before and after", "Ordinal or skewed score", ["wilcoxon"], "Ranks are safer than means.")}
          ${renderCheatRow("Same learners before and after", "Binary yes/no", ["mcnemar"], "Correct/incorrect or yes/no change.")}
          ${renderCheatRow("Two independent groups", "Continuous score", ["independent-t"], "Groups must be independent.")}
          ${renderCheatRow("Two independent groups", "Ordinal or skewed score", ["mann-whitney"], "Use when normality is not convincing.")}
          ${renderCheatRow("Three or more groups", "Continuous score", ["anova"], "Follow up if the omnibus test is significant.")}
          ${renderCheatRow("Two variables move together", "Continuous or ordinal variables", ["pearson", "spearman"], "Association is not causation.")}
          ${renderCheatRow("Predict an outcome", "Continuous or binary outcome", ["multiple-regression", "logistic-regression"], "Check covariates and row independence.")}
          ${renderCheatRow("Survey scale quality", "Multiple related items", ["cronbach", "spearman-brown"], "Reliability is not validity.")}
          ${renderCheatRow("Coder agreement", "Transcript or rubric codes", ["cohen-kappa", "weighted-kappa"], "The codebook matters before kappa.")}
        </div>
      </section>

      <div class="cheat-grid">
        <section class="cheat-panel">
          <h2>Interpreting results</h2>
          <ul>
            <li><strong>p-value:</strong> Is this pattern statistically detectable under the model?</li>
            <li><strong>Effect size:</strong> How big or meaningful is the difference or association?</li>
            <li><strong>Confidence interval:</strong> What range of values is still plausible?</li>
            <li><strong>Visualization:</strong> Does the plot show the pattern and the denominator?</li>
          </ul>
        </section>

        <section class="cheat-panel">
          <h2>Claim templates</h2>
          <ul>
            <li>The groups differed in ___, with ___ showing higher/lower ___.</li>
            <li>Scores tended to increase from pre to post, but this design does not prove causation.</li>
            <li>___ was associated with ___; this should be interpreted as association, not proof of effect.</li>
            <li>The items showed ___ internal consistency, supporting cautious use as a composite.</li>
          </ul>
        </section>
      </div>

      <section class="cheat-panel warning-panel">
        <h2>Pause if...</h2>
        <ul class="pause-list">
          <li>You do not know what one row means.</li>
          <li>You are mixing students, attempts, messages, or time points in one analysis.</li>
          <li>You only analyzed completers and ignored who dropped out.</li>
          <li>You are treating engagement as learning without defining the construct.</li>
          <li>You have a significant p-value but no effect size, graph, or careful claim.</li>
        </ul>
      </section>
    </section>
  `;
}

function renderCheatRow(situation, data, cardIds, pause) {
  return `
    <div class="cheat-row" role="row">
      <div role="cell"><span>Situation</span>${esc(situation)}</div>
      <div role="cell"><span>Data clue</span>${esc(data)}</div>
      <div role="cell"><span>Likely method</span><div class="method-links">${cardIds.map(renderMethodChip).join("")}</div></div>
      <div role="cell"><span>Check</span>${esc(pause)}</div>
    </div>
  `;
}

function wireCheatSheet() {
  const printButton = document.querySelector("[data-cheat-action='print']");
  if (!printButton) return;
  printButton.addEventListener("click", () => window.print());
}

function renderAtAGlance(card) {
  const items = atAGlanceItems(card);
  const deck = deckForCard(card);
  if (!items.length && !deck) return "";
  return `
    <section class="at-a-glance" aria-label="At a glance">
      <div class="glance-head">
        <span>At a glance</span>
        ${deck ? `<a href="#/flashcards/${deck.id}">Study this deck</a>` : ""}
      </div>
      ${items.length ? `
        <div class="glance-grid">
          ${items.map(item => `
            <div class="glance-item">
              <span class="glance-label">${esc(item.label)}</span>
              <p>${inline(item.text)}</p>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </section>
  `;
}

function atAGlanceItems(card) {
  const items = [];
  const methodish = ["method", "level2"].includes(card.level);
  const claimish = ["claim", "red-flag"].includes(card.level);

  if (methodish) {
    addGlanceItem(items, "Use when", firstSectionMatch(card, [
      ["when to use"],
      ["use this path if", "research situation", "possible analysis"],
      ["data situation"]
    ]) || card.summary);
    addGlanceItem(items, "Pause when", firstSectionMatch(card, [
      ["when to pause", "when not"],
      ["what to check first", "assumptions to check"],
      ["common beginner trap", "avoid"]
    ]) || findCallout(card, "warn"));
    addGlanceItem(items, "Output tells me", firstSectionMatch(card, [
      ["what the output usually includes"],
      ["reading the result", "how to interpret the output"],
      ["how to report it"]
    ]));
    addGlanceItem(items, "Careful claim", findCallout(card, "ok", ["claim", "can"]) || firstSectionMatch(card, [
      ["claim you can make", "what you can claim"],
      ["how to report it"]
    ]));
  } else if (claimish) {
    addGlanceItem(items, "What to notice", firstSectionMatch(card, [["plain meaning", "what this means"]]) || card.summary);
    addGlanceItem(items, "Pause when", firstSectionMatch(card, [["pause", "avoid", "trap"]]) || findCallout(card, "warn"));
    addGlanceItem(items, "Better move", findCallout(card, "ok") || firstSectionMatch(card, [["what to do", "safer", "revision"]]));
    addGlanceItem(items, "Claim discipline", firstSectionMatch(card, [["claim", "report"]]));
  } else {
    addGlanceItem(items, "Plain meaning", firstSectionMatch(card, [["plain meaning", "plain explanation"]]) || card.summary);
    addGlanceItem(items, "Use for", firstSectionMatch(card, [["when to use", "why it matters", "purpose", "research situation"]]));
    addGlanceItem(items, "Pause when", firstSectionMatch(card, [["pause", "trap", "avoid", "check first"]]) || findCallout(card, "warn"));
    addGlanceItem(items, "Connects to", relatedTitles(card));
  }

  return items.slice(0, 4);
}

function firstSectionMatch(card, termGroups) {
  for (const terms of termGroups) {
    const found = findSection(card, terms);
    if (found) return found;
  }
  return null;
}

function addGlanceItem(items, label, source) {
  const text = glanceText(source);
  if (!text) return;
  const key = text.toLowerCase().slice(0, 120);
  if (items.some(item => item.text.toLowerCase().slice(0, 120) === key)) return;
  items.push({ label, text });
}

function glanceText(source) {
  const body = sourceToFlashBody(source);
  if (Array.isArray(body)) return clampText(body.slice(0, 3).join("; "), 260);
  return clampText(body, 260);
}

function clampText(text, max) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (!clean || clean.length <= max) return clean;
  const cut = clean.lastIndexOf(" ", max - 3);
  return `${clean.slice(0, cut > 80 ? cut : max - 3).trim()}...`;
}

function deckForCard(card) {
  const deckId = {
    foundation: "foundation",
    vocabulary: "vocabulary",
    procedure: "procedure",
    method: "methods",
    level2: "level2",
    "data-shape": "data-shape",
    "red-flag": "red-flag",
    claim: "claim",
    example: "example"
  }[card.level];
  return FLASHCARD_DECKS.find(deck => deck.id === deckId);
}

function renderSection(slug) {
  const sec = SECTIONS.find(s => s.slug === slug);
  if (!sec) return renderNotFound();
  const items = CARDS.filter(c => c.level === sec.level);
  return `
    <nav class="crumb"><a href="#/">Home</a> · ${esc(sec.label)}</nav>
    <header class="page-head">
      <h1>${esc(sec.label)}</h1>
      <p class="lede">${esc(sec.blurb)}</p>
    </header>
    ${items.length === 0
      ? `<p class="meta" style="margin-top:24px">No cards yet in this section.</p>`
      : `<ul class="card-list">
          ${items.map(c => cardListItem(c, { showPill: false })).join("")}
        </ul>`}
  `;
}

function renderCard(id) {
  const c = CARDS.find(x => x.id === id);
  if (!c) return renderNotFound();
  const sec = SECTIONS.find(s => s.level === c.level);
  const pillClass = "pill " + (c.level || "").replace(/\s+/g, "-");
  const related = (c.related || []).map(rid => CARDS.find(x => x.id === rid)).filter(Boolean);

  // Prev / Next within the same section
  const peers = CARDS.filter(x => x.level === c.level);
  const idx = peers.findIndex(x => x.id === c.id);
  const prev = idx > 0 ? peers[idx - 1] : null;
  const next = idx >= 0 && idx < peers.length - 1 ? peers[idx + 1] : null;
  const others = peers.filter(x => x.id !== c.id);

  return `
    <nav class="crumb">
      <a href="#/">Home</a> ·
      <a href="#/section/${sec ? sec.slug : ""}">${esc(sec ? sec.label : "")}</a>
    </nav>
    <header class="card-head">
      ${renderPathwayStrip(parsePathway(c))}
      <h1>${esc(c.title)}</h1>
      <p class="lede">${esc(c.summary || "")}</p>
    </header>

    ${renderAtAGlance(c)}

    <article class="card-body">
      ${(c.sections || []).map(renderBlock).join("")}
    </article>

    ${(prev || next) ? `
      <nav class="prev-next" aria-label="Navigate within ${esc(sec ? sec.label : "section")}">
        ${prev
          ? `<a class="prev" href="#/card/${prev.id}">
               <span class="pn-label">← Previous</span>
               <span class="pn-title">${esc(prev.title)}</span>
             </a>`
          : `<span></span>`}
        ${next
          ? `<a class="next" href="#/card/${next.id}">
               <span class="pn-label">Next →</span>
               <span class="pn-title">${esc(next.title)}</span>
             </a>`
          : `<span></span>`}
      </nav>` : ""}

    ${others.length ? `
      <section class="more-in-section" aria-label="More in this section">
        <h3>More in ${esc(sec ? sec.label : c.type || "")}</h3>
        <ul>
          ${others.slice(0, 6).map(p => `
            <li><a href="#/card/${p.id}">
              <span class="ttl">${esc(p.title)}</span>
              <span class="summ">${esc(p.summary || "")}</span>
            </a></li>
          `).join("")}
        </ul>
      </section>` : ""}

    <footer class="card-foot">
      ${related.length ? `
        <div class="foot-block">
          <h3>Related</h3>
          <div class="related">
            ${related.map(r => `<a href="#/card/${r.id}">${esc(r.title)}</a>`).join("")}
          </div>
        </div>` : ""}
      ${(c.tags || []).length ? `
        <div class="foot-block">
          <h3>Tagged</h3>
          <div class="tag-foot-row">
            ${c.tags.map(t => `<a class="tag-link" href="#/search?q=${encodeURIComponent(t)}">${esc(t)}</a>`).join("")}
          </div>
        </div>` : ""}
      ${c.source ? `<p class="src">Source: <a href="${esc(c.source)}">${esc(c.source.split("/").pop())}</a></p>` : ""}
    </footer>
  `;
}

function renderSearch(q) {
  const query = (q || "").trim();
  const hits = query ? searchCards(query) : [];
  return `
    <header class="page-head">
      <h1>${hits.length} result${hits.length === 1 ? "" : "s"}${query ? ` for "${esc(query)}"` : ""}</h1>
      <p class="lede">${query ? "Search runs over pages, titles, summaries, tags, pathway labels, and section text." : "Type in the search box above to look something up."}</p>
    </header>
    ${query && hits.length === 0
      ? `<div class="empty">
           <h2>No matches yet.</h2>
           <p>Try a research phrase like <em>cheat sheet</em>, <em>same students</em>, <em>two groups</em>, <em>Likert</em>, or <em>coder agreement</em>.</p>
         </div>`
      : `<ul class="card-list">${hits.map(cardListItem).join("")}</ul>`}
  `;
}

// Pathway breadcrumb: 8 chips in a row, with the active step(s) highlighted.
// Pass an array of step slugs (from parsePathway). Each chip links to that
// step's index page.
function renderPathwayStrip(activeSlugs) {
  const active = new Set(activeSlugs || []);
  return `
    <nav class="pathway-strip" aria-label="Researcher thinking pathway">
      ${PATHWAY_STEPS.map((s, i) => `
        <a class="step ${active.has(s.slug) ? "active" : ""}"
           href="#/pathway/${s.slug}"
           title="${esc(s.label)}">
          <span class="step-num">${i + 1}</span>
          <span class="step-label">${esc(s.label)}</span>
        </a>
      `).join("")}
    </nav>
  `;
}

// Pathway index page - lists every card whose parsed pathway includes this step.
function renderPathwayIndex(slug) {
  const step = PATHWAY_BY_SLUG[slug];
  if (!step) return renderNotFound();
  const items = CARDS.filter(c => parsePathway(c).includes(slug));
  const stepIdx = PATHWAY_STEPS.findIndex(s => s.slug === slug);
  return `
    <nav class="crumb"><a href="#/">Home</a> · Pathway · ${esc(step.label)}</nav>
    ${renderPathwayStrip([slug])}
    <header class="page-head">
      <h1>${esc(step.label)}</h1>
      <p class="lede">Step ${stepIdx + 1} of 8 in the researcher thinking pathway. ${items.length} card${items.length === 1 ? "" : "s"} touch${items.length === 1 ? "es" : ""} this step.</p>
    </header>
    ${items.length === 0
      ? `<p class="meta" style="margin-top:24px">No cards yet at this step.</p>`
      : `<ul class="card-list">
          ${items.map(c => cardListItem(c, { showPill: true })).join("")}
        </ul>`}
  `;
}

function renderNotFound() {
  return `
    <div class="empty">
      <h2>That page doesn't exist (yet).</h2>
      <p>Try the <a href="#/">home page</a> or pick a section from there.</p>
    </div>
  `;
}

/* ---------- Card-body block rendering ---------- */

function renderBlock(b) {
  switch (b.kind) {
    case "p":
      return `<section>${b.h ? `<h2>${esc(b.h)}</h2>` : ""}${proseHtml(b.body)}</section>`;
    case "l":
      return `<section>${b.h ? `<h2>${esc(b.h)}</h2>` : ""}<ul>${(b.body || []).map(li => `<li>${inline(li)}</li>`).join("")}</ul></section>`;
    case "code":
      return `<section>${b.h ? `<h2>${esc(b.h)}</h2>` : ""}<pre class="codeblock"><code>${esc(b.body || "")}</code></pre></section>`;
    case "t":
      return renderTable(b);
    case "compare":
      return renderCompare(b);
    case "callout": {
      const tone = b.tone || "info";
      return `<aside class="callout ${esc(tone)}">${b.h ? `<h3>${esc(b.h)}</h3>` : ""}<p>${inline(b.body || "")}</p></aside>`;
    }
    case "quote":
      return `<aside class="pull"><span class="pull-label">Remember</span><span class="pull-text">${inline(b.body || "")}</span></aside>`;
    default:
      return "";
  }
}

function renderTable(b) {
  const rows = b.body || [];
  if (!rows.length) return "";
  const [head, ...body] = rows;
  return `
    <section>
      ${b.h ? `<h2>${esc(b.h)}</h2>` : ""}
      <table>
        <thead><tr>${head.map(c => `<th>${inline(c)}</th>`).join("")}</tr></thead>
        <tbody>${body.map(row => `<tr>${row.map(c => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </section>
  `;
}

function renderCompare(b) {
  const cols = b.body || [];
  return `
    <section>
      ${b.h ? `<h2>${esc(b.h)}</h2>` : ""}
      <div class="compare-grid">
        ${cols.map(col => `
          <div class="compare-col">
            <h3>${esc(col.h || "")}</h3>
            <ul>${(col.items || []).map(li => `<li>${inline(li)}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function cardListItem(c, opts) {
  const showPill = !opts || opts.showPill !== false;   // default: show pill
  const pillClass = "pill " + (c.level || "").replace(/\s+/g, "-");
  const href = c.href || `#/card/${c.id}`;
  return `
    <li>
      <a href="${esc(href)}">
        ${showPill ? `<span class="${pillClass}">${esc(c.type || "")}</span>` : ""}
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.summary || "")}</p>
      </a>
    </li>
  `;
}

/* ---------- Search ---------- */

function searchCards(q) {
  const needle = q.toLowerCase();
  if (!needle) return [];
  return [...SITE_PAGES, ...CARDS].filter(c => {
    const sectionsText = (c.sections || []).map(s => {
      const body = Array.isArray(s.body) ? s.body.flat().join(" ") : (s.body || "");
      return (s.h || "") + " " + body;
    }).join(" ");
    const hay = [c.title, c.type, c.summary, (c.tags || []).join(" "), c.pathway || "", sectionsText].join(" ").toLowerCase();
    return hay.includes(needle);
  });
}

/* ---------- Helpers ---------- */

function esc(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function proseHtml(text) {
  if (!text) return "";
  // split on blank lines -> paragraph-ish segments
  return String(text)
    .split(/\n{2,}/)
    .map(seg => {
      const lines = seg.split("\n");
      // Detect a segment that's a list (every non-empty line starts with "- ")
      const trimmed = lines.filter(l => l.trim() !== "");
      const allBullets = trimmed.length > 0 && trimmed.every(l => /^\s*-\s+/.test(l));
      if (allBullets) {
        const items = trimmed.map(l => l.replace(/^\s*-\s+/, ""));
        return `<ul class="inline-list">${items.map(it => `<li>${inline(it)}</li>`).join("")}</ul>`;
      }
      // Otherwise, render as a paragraph - replace single newlines with <br> for readability
      return `<p>${inline(seg).replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

// Inline formatter: escape HTML, then process `backticked` text.
// Karina's markdown uses backticks for two things:
//   - variable names / identifiers, e.g. `confidence_score`     -> <code>
//   - quoted example phrases, e.g. `Did students report ...?`   -> <span class="ex"> (italic)
// Rule: contains whitespace -> phrase; otherwise -> code.
function inline(s) {
  if (s == null) return "";
  const escaped = esc(String(s));
  return escaped.replace(/`([^`]+)`/g, (_m, inner) => {
    return /\s/.test(inner)
      ? `<span class="ex">${inner}</span>`
      : `<code>${inner}</code>`;
  });
}

/* ---------- Search input wiring ---------- */

let searchTimer = null;
function wireSearch(input) {
  if (!input) return;
  input.addEventListener("input", () => {
    clearTimeout(searchTimer);
    const v = input.value.trim();
    searchTimer = setTimeout(() => {
      if (v === "" && location.hash.startsWith("#/search")) {
        location.hash = "#/";
      } else if (v !== "") {
        location.hash = "#/search?q=" + encodeURIComponent(v);
      }
    }, 180);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clearTimeout(searchTimer);
      const v = input.value.trim();
      if (v) location.hash = "#/search?q=" + encodeURIComponent(v);
    }
  });
}

/* ---------- Flashcards mode ----------
   In-session review loop. No localStorage yet.
 */

function wireFlashcards(deckId) {
  if (!deckId) return;
  const deck = FLASHCARD_DECKS.find(d => d.id === deckId);
  if (!deck) return;
  const view = document.getElementById("view");

  view.querySelectorAll("[data-flash-action]").forEach(button => {
    button.addEventListener("click", () => {
      const action = button.dataset.flashAction;
      if (action === "flip") {
        flashState.flipped = true;
      } else if (action === "prev") {
        flashState.index = Math.max(0, flashState.index - 1);
        flashState.flipped = false;
      } else if (action === "next") {
        flashState.index += 1;
        flashState.flipped = false;
      } else if (action === "restart") {
        resetFlashDeck(deck);
      }
      render();
    });
  });

  view.querySelectorAll("[data-flash-rating]").forEach(button => {
    button.addEventListener("click", () => {
      const rating = button.dataset.flashRating;
      const currentId = flashState.order[flashState.index];
      if (rating in flashState.ratings) flashState.ratings[rating] += 1;
      if (rating === "again" && currentId) flashState.order.push(currentId);
      render();
    });
  });
}

function wireFlashcardKeys() {
  document.addEventListener("keydown", (event) => {
    const route = getRoute();
    if (route.kind !== "flashcards" || !route.deckId) return;
    if (isTypingTarget(event.target)) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      flashState.index += 1;
      flashState.flipped = false;
      render();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      flashState.index = Math.max(0, flashState.index - 1);
      flashState.flipped = false;
      render();
    } else if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      flashState.flipped = true;
      render();
    }
  });
}

function isTypingTarget(target) {
  if (!target) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "BUTTON" || tag === "A" || target.isContentEditable;
}


/* ---------- Sections menu ---------- */

function buildMenu() {
  const list = document.getElementById("menuList");
  if (!list) return;
  list.innerHTML = SECTIONS.map(s => {
    const n = CARDS.filter(c => c.level === s.level).length;
    return `
      <li><a href="#/section/${s.slug}">
        <span>${esc(s.label)}</span>
        <span class="count">${n} card${n === 1 ? "" : "s"}</span>
      </a></li>
    `;
  }).join("");
}

function wireMenu() {
  const btn   = document.getElementById("menuBtn");
  const panel = document.getElementById("menuPanel");
  if (!btn || !panel) return;

  function open() {
    panel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }
  function close() {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.hidden ? open() : close();
  });

  // Click a link inside the panel → close after navigation
  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) setTimeout(close, 30);
  });

  // Click anywhere else → close
  document.addEventListener("click", (e) => {
    if (panel.hidden) return;
    if (panel.contains(e.target) || btn.contains(e.target)) return;
    close();
  });

  // Escape → close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) {
      close();
      btn.focus();
    }
  });

  // Close on any hash navigation
  window.addEventListener("hashchange", close);
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  wireSearch(document.getElementById("topSearch"));
  wireFlashcardKeys();
  buildMenu();
  wireMenu();
  render();
  // Wire the big home search after first render, and rewire whenever the view re-renders
  const view = document.getElementById("view");
  const obs = new MutationObserver(() => {
    wireSearch(document.getElementById("homeSearch"));
  });
  obs.observe(view, { childList: true, subtree: false });
});

window.addEventListener("hashchange", render);
