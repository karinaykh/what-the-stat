window.WTS_PROCEDURE_CARDS = [
  {
    id: "composite-score",
    title: "Composite score",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Data Type -> Analysis",
    summary: "A combined score built from several related items.",
    tags: ["composite", "survey", "scale", "measurement"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["construct", "indicator", "operationalization", "reliability", "validity", "reverse-coding", "missing-data", "cronbach"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A composite score combines several related items into one score.\n\nResearchers use composite scores when one item feels too thin or noisy to represent a construct. Instead of relying on one question, you gather several clues and summarize them together." },
      { kind: "p", h: "What this procedure is for", body: "This helps me turn multiple related indicators into one usable variable.\n\nFor example, instead of treating five confidence survey items separately, I might average them into one `confidence_score`." },
      { kind: "l", h: "When to use it", body: [
        "Several items are intended to measure the same construct.",
        "You want a construct-level score rather than item-by-item results.",
        "A single item would be too fragile.",
        "The items are scored in a compatible direction.",
        "There is enough conceptual and empirical reason to combine them."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The items may measure different constructs.",
        "Some items are worded in the opposite direction and have not been reverse-coded.",
        "Missing responses are common.",
        "Reliability is weak or unknown.",
        "You are combining items only because they appear near each other in the survey."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Clear construct definition",
        "List of items or indicators",
        "Response scale for each item",
        "Reverse-coding rules, if needed",
        "Missing-data rule",
        "Reliability evidence, if appropriate"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Which items belong in the composite?",
        "Should the score be a mean or a sum?",
        "Are all items weighted equally?",
        "How should missing item responses be handled?",
        "Should item-level results also be reported?",
        "What reliability evidence is sufficient?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Name the construct the composite is supposed to represent.",
        "2. List the items intended to measure that construct.",
        "3. Check whether all items point in the same direction.",
        "4. Reverse-code items if needed.",
        "5. Check whether the items conceptually belong together.",
        "6. Check reliability or internal consistency when appropriate.",
        "7. Decide how to handle missing responses.",
        "8. Compute and document the composite."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Does the composite match the construct?",
        "Are the items clearly related?",
        "Are response scales compatible?",
        "Is reliability acceptable for the purpose?",
        "Would another researcher understand how the score was created?"
      ]},
      { kind: "p", h: "Tiny example", body: "You want to measure `AI teaching confidence` among doctoral students.\n\nYou ask five items:\n\n- I can explain what AI tools can and cannot do.\n- I can decide when AI use is appropriate for learning.\n- I can design an AI-supported classroom activity.\n- I feel lost when evaluating AI output.\n- I can guide students to use AI responsibly.\n\nBefore averaging them, you would reverse-code the \"feel lost\" item so that higher values consistently mean higher confidence. Then you might average the five items if they conceptually and empirically hang together." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Averaging items because they look related, without checking whether they actually represent the same construct." },
      { kind: "p", h: "What the output looks like", body: "A new variable, such as:\n\n`ai_teaching_confidence_score`\n\nEach participant gets one value." },
      { kind: "p", h: "How to report it", body: "`We created an AI teaching confidence composite by averaging five survey items rated from 1 to 5, with higher scores indicating greater self-reported confidence. The negatively worded item was reverse-coded before averaging.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can say how you created a construct-level score and use that score in later descriptive or inferential analysis." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A composite score does not automatically prove the construct was validly measured. It also does not prove that any intervention changed the construct." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is it defensible to average these items?",
        "Should I report reliability?",
        "Should I keep any items separate?",
        "What missing-data rule is appropriate?",
        "Should this be a mean, sum, or factor score?"
      ]},
      { kind: "quote", body: "A composite score is a carefully justified summary of several related clues." }
    ]
  },
  {
    id: "likert-item-scale",
    title: "Likert item vs Likert scale",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Data Type -> Analysis",
    summary: "A single survey question is not the same as a multi-item scale.",
    tags: ["likert", "survey", "scale", "item"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["composite-score", "scale", "data-type", "reliability", "validity"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A Likert item is one survey question with ordered response options, such as strongly disagree to strongly agree.\n\nA Likert scale usually means several related Likert items combined to measure a construct." },
      { kind: "p", h: "What this procedure is for", body: "This helps me avoid confusing one survey item with a multi-item scale.\n\nThat distinction matters because a single item and a scale may be analyzed and interpreted differently." },
      { kind: "l", h: "When to use it", body: [
        "Use this distinction whenever you have survey data with rating options.",
        "Ask: Am I looking at one item?",
        "Or am I combining several items into a construct score?"
      ]},
      { kind: "l", h: "When to pause", body: [
        "You are calling one question a \"scale.\"",
        "You are averaging items without checking whether they measure the same construct.",
        "You are treating a 1-to-5 rating as if it has perfect equal intervals without thinking.",
        "You are using a scale score but have not explained how it was made."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Survey items",
        "Response options",
        "Construct definition",
        "Scoring plan",
        "Reliability or scale evidence, if combining items"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Should this item stand alone?",
        "Should multiple items be combined?",
        "Are the items all measuring one construct?",
        "Should responses be treated as ordinal, approximately continuous, or summarized descriptively?",
        "Is the analysis appropriate for item-level or scale-level data?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Identify whether you have one item or multiple items.",
        "2. If one item, call it an item and interpret it narrowly.",
        "3. If multiple items, define the construct they are intended to measure.",
        "4. Check whether the items belong together.",
        "5. Decide how to score the scale.",
        "6. Report the distinction clearly."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Did I label the item/scale correctly?",
        "Did I avoid overinterpreting one item?",
        "Did I justify combining multiple items?",
        "Did I explain what higher scores mean?"
      ]},
      { kind: "p", h: "Tiny example", body: "One item:\n\n`I feel confident using AI tools in teaching.`\n\nThis is a Likert item.\n\nPossible scale:\n\n- I feel confident using AI tools in teaching.\n- I can explain AI limitations to students.\n- I can design an AI-supported activity.\n- I can evaluate AI-generated feedback.\n\nTogether, these might form an `AI teaching confidence` scale if they fit the same construct." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Saying \"my Likert scale\" when you only have one Likert item." },
      { kind: "p", h: "What the output looks like", body: "- Item-level result: responses to one question.\n- Scale-level result: a combined score from several items." },
      { kind: "p", h: "How to report it", body: "Item:\n\n`Students rated their agreement with one item about AI teaching confidence on a 1-to-5 scale.`\n\nScale:\n\n`We averaged four Likert-type items to create an AI teaching confidence scale, with higher scores indicating greater confidence.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can make a more precise claim about whether you analyzed one item or a constructed scale." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Calling something a scale does not make it a valid scale. It still needs conceptual and, when appropriate, reliability evidence." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is one item enough for this construct?",
        "Can I treat this multi-item score as approximately continuous?",
        "Should I use medians, means, or non-parametric methods?",
        "Should I report item-level distributions?"
      ]},
      { kind: "quote", body: "One Likert question is an item; several coherent items can become a scale." }
    ]
  },
  {
    id: "index",
    title: "Index",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Data Type -> Analysis",
    summary: "Combines several indicators into one score, often by counting or summing them.",
    tags: ["index", "indicator", "measurement", "score"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["indicator", "composite-score", "scale", "typology", "validity"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "An index combines several indicators into one score, often by adding or counting them.\n\nIt is useful when the indicators are all signs of a broader condition, behavior, or status." },
      { kind: "p", h: "What this procedure is for", body: "This helps me summarize multiple indicators into one measure.\n\nAn index often answers: how many of these things are present?" },
      { kind: "l", h: "When to use it", body: [
        "You have several indicators of a broader concept.",
        "Each indicator contributes to the overall score.",
        "The indicators do not necessarily have to form a psychological scale.",
        "A count or total score makes conceptual sense."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Some indicators are much more important than others.",
        "The indicators reflect different dimensions that should stay separate.",
        "The total score hides meaningful patterns.",
        "The index has no clear interpretation."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Construct or condition being indexed",
        "Indicators to include",
        "Scoring rules",
        "Decision about weighting",
        "Missing-data rules"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Which indicators count?",
        "Are all indicators weighted equally?",
        "Should the index be a sum, count, average, or category?",
        "Should sub-indexes be created for different dimensions?",
        "What does a high score mean?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Define the concept the index represents.",
        "2. List possible indicators.",
        "3. Decide which indicators are conceptually justified.",
        "4. Decide how each indicator is scored.",
        "5. Combine the indicators.",
        "6. Check whether the index behaves sensibly.",
        "7. Explain how to interpret high and low values."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Does every indicator belong?",
        "Does the score have a clear meaning?",
        "Are important dimensions being hidden?",
        "Is the scoring rule transparent?",
        "Can readers understand what one additional point means?"
      ]},
      { kind: "p", h: "Tiny example", body: "You want to summarize `AI literacy preparation` in a teacher education course.\n\nYou create an index with one point for each completed preparation activity:\n\n- watched AI foundations video\n- completed prompt-design practice\n- submitted AI ethics reflection\n- evaluated AI-generated feedback\n- designed an AI-supported activity\n\nScores range from 0 to 5. A higher score means the student completed more preparation activities." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating an index as if it measures one deep psychological construct when it may simply count completed indicators." },
      { kind: "p", h: "What the output looks like", body: "A score such as:\n\n`ai_literacy_preparation_index = 0 to 5`" },
      { kind: "p", h: "How to report it", body: "`We created an AI literacy preparation index by summing five binary indicators of completed course activities. Scores ranged from 0 to 5, with higher scores indicating completion of more preparation activities.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can say that participants completed more or fewer indexed activities or showed more or fewer observed indicators." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "An index does not automatically show depth, quality, or internal coherence. Completing more activities does not necessarily mean deeper learning." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are these indicators equally important?",
        "Should I weight some indicators more?",
        "Should the indicators be grouped into dimensions?",
        "Should this be called an index or a scale?"
      ]},
      { kind: "quote", body: "An index is a transparent way to combine several indicators, often by counting or summing them." }
    ]
  },
  {
    id: "scale",
    title: "Scale",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Data Type -> Analysis",
    summary: "Multiple items combined to measure an underlying construct.",
    tags: ["scale", "construct", "measurement", "survey"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["composite-score", "likert-item-scale", "reliability", "validity", "cronbach", "spearman-brown"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A scale uses multiple items to measure an underlying construct.\n\nUnlike a simple index, a scale usually assumes the items belong together because they reflect the same latent idea or ordered intensity." },
      { kind: "p", h: "What this procedure is for", body: "This helps me measure a construct more carefully than a single item can.\n\nScales are common in survey research, especially for attitudes, beliefs, perceptions, confidence, motivation, or cognitive load." },
      { kind: "l", h: "When to use it", body: [
        "The construct cannot be captured well by one item.",
        "Multiple items are designed to reflect the same construct.",
        "The items are conceptually coherent.",
        "You can check whether the items work together."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Items point to different constructs.",
        "Items are too broad or too repetitive.",
        "Some items are reverse-worded and not handled correctly.",
        "Internal consistency is poor.",
        "You are using a scale from another context without checking fit for your population."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Construct definition",
        "Item set",
        "Response options",
        "Scoring rules",
        "Reliability evidence",
        "Validity rationale"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Which items belong in the scale?",
        "Should any item be removed?",
        "How will reverse-worded items be handled?",
        "What reliability threshold is acceptable?",
        "Should the scale be reported as one score or subscales?",
        "Is the scale appropriate for this population and context?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Define the construct.",
        "2. Gather or write items that represent the construct.",
        "3. Check whether each item matches the construct.",
        "4. Check whether the items point in the same direction.",
        "5. Examine whether items hang together.",
        "6. Compute the scale score.",
        "7. Report scoring, reliability, and interpretation."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Do the items cover the construct?",
        "Are important dimensions missing?",
        "Are items too redundant?",
        "Is reliability acceptable?",
        "Is there validity evidence for this use?"
      ]},
      { kind: "p", h: "Tiny example", body: "You want to measure `perceived usefulness of an AI writing assistant`.\n\nItems might ask whether the tool helped students:\n\n- generate ideas\n- organize writing\n- identify weaknesses\n- revise more deeply\n- feel more prepared to submit\n\nIf the items hang together, you might average them into a perceived usefulness scale." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking Cronbach's alpha alone proves the scale is good.\n\nAlpha can suggest internal consistency, but it does not prove the scale fully captures the construct or works for your context." },
      { kind: "p", h: "What the output looks like", body: "A scale score, usually an average or sum.\n\nExample:\n\n`perceived_usefulness_score = mean of 5 items`" },
      { kind: "p", h: "How to report it", body: "`Perceived usefulness was measured with five Likert-type items rated from 1 to 5. Items were averaged to create a scale score, with higher scores indicating greater perceived usefulness.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can say how the scale represents the construct and use the score in later analysis if the scale is defensible." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A scale score does not prove causality. It also does not remove the need to explain what the construct means." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is this an established scale or a new one?",
        "Should I report reliability?",
        "Should I check factor structure?",
        "Can I use this scale with my sample?",
        "Should I use subscales instead of one total score?"
      ]},
      { kind: "quote", body: "A scale is a multi-item attempt to measure one construct, and it needs justification." }
    ]
  },
  {
    id: "typology",
    title: "Typology",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Data Type -> Evidence -> Claim",
    summary: "Classifies cases into types using two or more dimensions.",
    tags: ["typology", "categories", "classification", "dimensions"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["dimension", "variable", "index", "scale", "codebook"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A typology classifies cases into types using two or more dimensions.\n\nInstead of giving each case a score, a typology places each case into a meaningful category." },
      { kind: "p", h: "What this procedure is for", body: "This helps me describe patterns that are better understood as types than as a single high-low score." },
      { kind: "l", h: "When to use it", body: [
        "A phenomenon has multiple dimensions.",
        "Different combinations of dimensions matter.",
        "Categories are meaningful for interpretation.",
        "You want to compare types of people, cases, responses, classrooms, or institutions."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The categories are arbitrary.",
        "Too many categories make the typology confusing.",
        "Cases do not fit cleanly.",
        "You are forcing a typology when a scale or separate dimensions would be clearer.",
        "You plan to use the typology as an outcome but categories are too sparse."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Dimensions used to classify cases",
        "Rules for each dimension",
        "Category labels",
        "Case-level data",
        "Decision rules for ambiguous cases"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Which dimensions define the types?",
        "How many types are useful?",
        "What thresholds separate categories?",
        "How will ambiguous cases be handled?",
        "Are labels neutral and accurate?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Identify the dimensions that matter.",
        "2. Define categories within each dimension.",
        "3. Combine dimensions into types.",
        "4. Assign cases using clear rules.",
        "5. Check whether each type is meaningful.",
        "6. Report the typology and classification rules."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Are the dimensions conceptually important?",
        "Are categories mutually exclusive enough?",
        "Are categories interpretable?",
        "Do enough cases fall into each type?",
        "Does the typology reveal something useful?"
      ]},
      { kind: "p", h: "Tiny example", body: "You are studying how students use AI feedback.\n\nTwo dimensions:\n\n- uptake: low vs high\n- reflection quality: shallow vs deep\n\nThis creates four types:\n\n- low uptake, shallow reflection\n- low uptake, deep reflection\n- high uptake, shallow reflection\n- high uptake, deep reflection\n\nThese types may be more informative than one average AI-use score." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Creating cute category names before the classification logic is clear.\n\nThe labels should come after the dimensions and rules are defensible." },
      { kind: "p", h: "What the output looks like", body: "A categorical variable, such as:\n\n`ai_feedback_use_type`\n\nEach case is assigned to one type." },
      { kind: "p", h: "How to report it", body: "`We classified students into four AI feedback-use types based on uptake level and reflection quality. Uptake was coded as low/high using [rule], and reflection quality was coded as shallow/deep using [rule].`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe and compare meaningful types of cases." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A typology does not prove that the types are natural, permanent, or causal. It is a researcher-created classification that must be justified." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are these the right dimensions?",
        "Are the thresholds defensible?",
        "Do I have enough cases in each type?",
        "Should this be a typology or separate variables?",
        "How should ambiguous cases be handled?"
      ]},
      { kind: "quote", body: "A typology helps me see meaningful combinations, not just more or less of one thing." }
    ]
  },
  {
    id: "reverse-coding",
    title: "Reverse-coding",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Analysis",
    summary: "Flips the direction of an item so all items point the same way.",
    tags: ["reverse-coding", "scale", "survey", "scoring"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["composite-score", "scale", "reliability", "missing-data"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Reverse-coding changes the direction of a survey item so all items point the same way.\n\nIt is usually needed when one item is negatively worded while the rest are positively worded, or the reverse." },
      { kind: "p", h: "What this procedure is for", body: "This helps me combine items without accidentally mixing opposite meanings." },
      { kind: "l", h: "When to use it", body: [
        "You have a negatively worded item in a positive scale.",
        "Higher numbers should consistently mean more of the construct.",
        "You need to compute a composite or scale score."
      ]},
      { kind: "l", h: "When to pause", body: [
        "You are unsure what high and low values mean.",
        "The item is confusing or double-negative.",
        "Reverse-coded items behave oddly compared with the rest.",
        "You do not know the original response scale."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Original response scale",
        "Item wording",
        "Desired score direction",
        "Scoring rule"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Which items need reverse-coding?",
        "What should higher scores mean?",
        "Should confusing reverse-worded items be removed?",
        "How will you document the recoding?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Decide what high scores should mean.",
        "2. Identify items that point in the opposite direction.",
        "3. Reverse-code those items using the response scale.",
        "4. Check that all items now point in the same direction.",
        "5. Then compute the composite or scale.",
        "6. Report the reverse-coding decision."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Does a higher score mean the same thing for every item?",
        "Did you reverse-code before averaging?",
        "Did you check the recoded values?",
        "Could the item wording confuse respondents?"
      ]},
      { kind: "p", h: "Tiny example", body: "Scale: AI teaching confidence, rated 1 to 5.\n\nMost items:\n\n`I can explain AI limitations to students.`\n\nHigher = more confidence.\n\nReverse-worded item:\n\n`I feel lost when evaluating AI-generated output.`\n\nHere, higher = less confidence. Before averaging, recode it so that 5 becomes 1, 4 becomes 2, 3 stays 3, 2 becomes 4, and 1 becomes 5." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Averaging before reverse-coding.\n\nThat can make the composite meaningless because some items push the score up while others push it down." },
      { kind: "p", h: "What the output looks like", body: "A corrected variable, such as:\n\n`feel_lost_recoded`" },
      { kind: "p", h: "How to report it", body: "`The negatively worded item was reverse-coded so that higher values consistently indicated greater AI teaching confidence before computing the composite score.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can say the composite was scored consistently." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Reverse-coding does not fix a badly worded item or prove the scale is reliable or valid." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Does this item truly need reverse-coding?",
        "Is the reverse-worded item confusing respondents?",
        "Should I check reliability with and without it?",
        "How should I document this in my method section?"
      ]},
      { kind: "quote", body: "Reverse-coding makes sure all items speak in the same direction before they are combined." }
    ]
  },
  {
    id: "missing-data",
    title: "Missing data",
    type: "Procedure",
    level: "procedure",
    pathway: "Sample -> Measurement -> Analysis -> Claim",
    summary: "How to handle values that are absent from the dataset.",
    tags: ["missing-data", "sample", "analysis-preparation"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["sample", "representativeness", "composite-score", "researcher-degrees-of-freedom", "robustness-check"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Missing data means some values you expected to have are absent.\n\nThis can happen because people skip questions, leave a study, fail to complete a task, produce unusable responses, or because data were not recorded." },
      { kind: "p", h: "What this procedure is for", body: "This helps me decide what to do when the dataset has holes.\n\nThe goal is not to make missingness disappear. The goal is to handle it transparently and defensibly." },
      { kind: "l", h: "When to use it", body: [
        "Survey items have skipped responses.",
        "Some participants did not complete all activities.",
        "Some log data are absent.",
        "Some coding decisions are impossible because the evidence is unclear.",
        "Some cases are missing outcome data."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Missingness is common.",
        "Missingness is related to the outcome or group.",
        "The people with missing data are different from the people with complete data.",
        "You are about to delete cases without checking what that deletion does."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Dataset",
        "Missingness summary",
        "Unit of analysis",
        "Knowledge of why values may be missing",
        "Analysis plan",
        "Decision rule"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Should missing values be left as missing?",
        "Should cases with missing values be excluded?",
        "Should a composite score be computed if one item is missing?",
        "Should missingness itself be described?",
        "Is imputation needed, or is that too advanced for the current study?",
        "How should the final sample size be reported?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Identify where data are missing.",
        "2. Count how much is missing for each variable.",
        "3. Check whether missingness differs by group or case type.",
        "4. Decide how missing values will be handled.",
        "5. Document the rule.",
        "6. Report final sample sizes for each analysis.",
        "7. Consider whether missingness limits the claim."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Did I check who or what is missing?",
        "Did I avoid silently changing the sample?",
        "Did I report the final analytic sample?",
        "Would another researcher know what I did?",
        "Does missingness weaken the claim?"
      ]},
      { kind: "p", h: "Tiny example", body: "You survey 80 students about an AI simulation.\n\nAll 80 answered the satisfaction item, but only 54 completed the cognitive load items.\n\nIf you analyze cognitive load, your analytic sample is 54, not 80. You should ask whether the 26 missing students are different. Maybe students who struggled most skipped the survey section. That matters for interpretation." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Deleting incomplete cases automatically and forgetting that the sample changed." },
      { kind: "p", h: "What the output looks like", body: "- Missingness table\n- Analysis-specific sample size\n- Cleaned variables\n- Documented missing-data rule" },
      { kind: "p", h: "How to report it", body: "`Of the 80 participants, 54 completed all cognitive load items. The cognitive load composite was computed only for participants with complete responses on those items; therefore, analyses involving cognitive load used n = 54.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can show how much data were available and how missing values were handled." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A simple missing-data rule does not prove missingness was harmless. If missingness is systematic, the claim may need to be narrowed." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is complete-case analysis acceptable here?",
        "Should I describe missingness by group?",
        "Can I compute a scale score with one missing item?",
        "Is imputation appropriate, or too much for this study?",
        "How should I report different sample sizes across analyses?"
      ]},
      { kind: "quote", body: "Missing data is not just empty space; it can change who the analysis represents." }
    ]
  },
  {
    id: "survey-pretesting",
    title: "Survey pretesting",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Sample",
    summary: "Trying out a questionnaire before using it for the real study.",
    tags: ["pretesting", "survey", "measurement", "pilot"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["operationalization", "validity", "reliability", "likert-item-scale", "missing-data"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Survey pretesting means trying out a questionnaire before using it for the real study.\n\nThe goal is to find confusing wording, broken response options, technical problems, and questions people cannot or will not answer." },
      { kind: "p", h: "What this procedure is for", body: "This helps me improve the measurement before collecting full data.\n\nIt is much cheaper to find a bad question before the study than after the dataset is collected." },
      { kind: "l", h: "When to use it", body: [
        "You wrote new survey items.",
        "You adapted an existing survey to a new context.",
        "The population may interpret terms differently.",
        "The survey includes matrix questions, ranking tasks, or sensitive topics.",
        "The survey will be administered online."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Respondents interpret key words differently.",
        "People skip the same question.",
        "Response options do not fit real answers.",
        "The survey takes too long.",
        "A question asks two things at once.",
        "A question is technically clear but emotionally uncomfortable."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Draft questionnaire",
        "Small group of test respondents",
        "Feedback questions",
        "Plan for revising items"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Who should pretest the survey?",
        "What feedback should be collected?",
        "Which items need revision?",
        "Should any items be removed?",
        "Does the survey mode introduce problems?",
        "Is another pretest needed after revision?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Create the draft survey.",
        "2. Ask a small number of people similar to the target respondents to complete it.",
        "3. Observe completion time and skipped items.",
        "4. Ask what was confusing or hard to answer.",
        "5. Revise wording, order, response options, and instructions.",
        "6. Test again if major changes were made.",
        "7. Document important changes."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Are questions clear and precise?",
        "Does each item ask one thing?",
        "Can respondents answer from their own knowledge?",
        "Are response options complete and balanced?",
        "Are instructions understandable?",
        "Does the survey feel reasonable in length?"
      ]},
      { kind: "p", h: "Tiny example", body: "You write a survey for teachers about AI feedback.\n\nOne item says:\n\n`AI feedback is useful and ethical in my teaching context.`\n\nDuring pretesting, teachers say they want to answer \"useful\" and \"ethical\" differently. The item is double-barreled. You split it into two items." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking a survey is ready because it makes sense to the researcher who wrote it." },
      { kind: "p", h: "What the output looks like", body: "- Revised survey\n- Notes on confusing items\n- Removed or rewritten questions\n- Improved instructions" },
      { kind: "p", h: "How to report it", body: "`The survey was pretested with five doctoral students to identify unclear wording and response-option problems. Based on feedback, two double-barreled items were split and one matrix question was simplified.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can say you took steps to improve clarity and usability before data collection." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Pretesting does not prove the survey is valid or reliable. It only helps catch obvious problems before full administration." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "How many people should pretest this survey?",
        "Should pretesters resemble the target sample?",
        "Should I use cognitive interviews?",
        "Should pretest data be included in the final dataset?",
        "What changes should be documented?"
      ]},
      { kind: "quote", body: "Pretesting is how a survey meets real humans before becoming real data." }
    ]
  },
  {
    id: "codebook",
    title: "Codebook / coding scheme",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Data Type -> Analysis",
    summary: "How to turn qualitative or messy evidence into consistent categories or scores.",
    tags: ["codebook", "coding", "qualitative", "measurement"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["construct", "operationalization", "reliability", "validity", "coder-agreement", "cohen-kappa"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A codebook or coding scheme tells researchers how to turn qualitative or messy evidence into consistent categories or scores.\n\nIt defines what each code means, when to apply it, and how to handle edge cases." },
      { kind: "p", h: "What this procedure is for", body: "This helps me make coding consistent, transparent, and teachable to another person." },
      { kind: "l", h: "When to use it", body: [
        "You are coding transcripts, open-ended responses, chat logs, reflections, classroom observations, or artifacts.",
        "More than one coder is involved.",
        "Codes will become quantitative variables.",
        "You need to report coding reliability."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Code definitions are vague.",
        "Categories overlap too much.",
        "Coders disagree often.",
        "There are no examples or non-examples.",
        "The codebook changes during coding but the changes are not tracked."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Construct or behavior to code",
        "Raw data",
        "Code definitions",
        "Inclusion and exclusion criteria",
        "Examples and non-examples",
        "Decision rules",
        "Coder training plan"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "What is the unit of coding?",
        "What codes are needed?",
        "Can multiple codes apply to one unit?",
        "Are codes binary, categorical, ordinal, or continuous?",
        "How will ambiguous cases be resolved?",
        "When is the codebook stable enough to use?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Define the construct or behavior being coded.",
        "2. Decide the unit of coding.",
        "3. Draft code definitions.",
        "4. Add examples and non-examples.",
        "5. Pilot-code a small sample.",
        "6. Discuss disagreements.",
        "7. Revise the codebook.",
        "8. Train coders and document the final rules."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Are codes clear enough for another coder?",
        "Are categories mutually exclusive when they need to be?",
        "Are edge cases addressed?",
        "Are examples representative?",
        "Does the codebook match the research question?"
      ]},
      { kind: "p", h: "Tiny example", body: "You want to code AI tutor transcripts for `metacognitive monitoring`.\n\nA weak codebook says:\n\n`Student shows monitoring.`\n\nA stronger codebook defines monitoring as:\n\n`The student evaluates their own understanding, strategy, progress, uncertainty, or answer quality.`\n\nIt includes examples:\n\n- \"I think I understand the first part but not the second.\"\n- \"This answer seems too general.\"\n\nAnd non-examples:\n\n- \"Tell me the answer.\"\n- \"Okay.\"" },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Trying to calculate coder agreement before the codebook is clear enough for coders to use." },
      { kind: "p", h: "What the output looks like", body: "- Codebook document\n- Coded dataset\n- Coding categories or scores\n- Coder training notes" },
      { kind: "p", h: "How to report it", body: "`We developed a codebook defining metacognitive monitoring as student statements evaluating their understanding, strategy, progress, uncertainty, or answer quality. The codebook included definitions, examples, non-examples, and decision rules before independent coding.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can explain how messy text or behavior was converted into analyzable data." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A codebook alone does not prove coding was reliable or valid. You still need quality checks, coder training, and sometimes inter-rater reliability." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "What should the coding unit be?",
        "Are my codes too broad or too narrow?",
        "Do I need independent coders?",
        "How much pilot coding is enough?",
        "Should I report Cohen's kappa or percent agreement?"
      ]},
      { kind: "quote", body: "A codebook is how a researcher turns interpretation into a transparent measurement procedure." }
    ]
  },
  {
    id: "coder-agreement",
    title: "Coder agreement",
    type: "Procedure",
    level: "procedure",
    pathway: "Measurement -> Evidence",
    summary: "Checks whether two or more coders apply a coding scheme consistently.",
    tags: ["coder-agreement", "reliability", "inter-rater", "kappa"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["codebook", "reliability", "validity", "cohen-kappa", "kappa-vs-percent"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Coder agreement checks whether two or more coders apply a coding scheme consistently.\n\nIt is a reliability check for coded data." },
      { kind: "p", h: "What this procedure is for", body: "This helps me test whether the coding scheme is clear enough that different people can use it similarly." },
      { kind: "l", h: "When to use it", body: [
        "Multiple coders classify the same data.",
        "Codes are used as evidence in a study.",
        "Coding involves judgment.",
        "You need to show the coding process is trustworthy."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Coders were not trained.",
        "The codebook is still changing.",
        "Agreement is low.",
        "Percent agreement is high only because one category is very common.",
        "Disagreements reveal unclear construct definitions."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Codebook",
        "Shared subset of data coded by multiple coders",
        "Coding results from each coder",
        "Agreement metric plan",
        "Adjudication process"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "How much data should be double-coded?",
        "Which agreement statistic should be used?",
        "What level of agreement is acceptable?",
        "How will disagreements be resolved?",
        "Will final codes use consensus or one primary coder?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Train coders using the codebook.",
        "2. Have coders independently code the same sample.",
        "3. Compare coding results.",
        "4. Calculate agreement.",
        "5. Discuss disagreements.",
        "6. Revise codebook or retrain if needed.",
        "7. Decide final coding rules.",
        "8. Report agreement and resolution process."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Did coders work independently?",
        "Was the shared sample appropriate?",
        "Is the agreement metric suitable for the code type?",
        "Were disagreements used to improve the codebook?",
        "Is final coding reproducible enough?"
      ]},
      { kind: "p", h: "Tiny example", body: "Two researchers code 100 AI tutor transcript segments for whether students applied feedback:\n\n- Yes\n- Partial\n- No\n\nThey agree on 82 segments. Percent agreement is 82 percent. But because some agreement can happen by chance, the researchers may also report Cohen's kappa." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reporting percent agreement only and assuming it fully proves reliability.\n\nPercent agreement is easy to understand, but it does not account for chance agreement." },
      { kind: "p", h: "What the output looks like", body: "- Percent agreement\n- Cohen's kappa or another reliability statistic\n- Disagreement summary\n- Adjudicated final codes" },
      { kind: "p", h: "How to report it", body: "`Two coders independently coded 25 percent of transcript segments. Inter-rater agreement was assessed using Cohen's kappa. Disagreements were discussed and resolved through consensus before final coding.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can say whether coders applied the coding scheme consistently enough for the study purpose." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Good agreement does not prove the codes are valid. Coders can agree consistently on a poor or incomplete coding scheme." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Should I use percent agreement, Cohen's kappa, weighted kappa, or another statistic?",
        "How much data should be double-coded?",
        "What kappa value is acceptable in this field?",
        "Should disagreements be resolved before or after calculating reliability?",
        "Should I report category-specific problems?"
      ]},
      { kind: "quote", body: "Coder agreement asks whether human judgment was applied consistently enough to trust the coded data." }
    ]
  },
  {
    id: "descriptive-table",
    title: "Descriptive table",
    type: "Procedure",
    level: "procedure",
    pathway: "Evidence -> Claim",
    summary: "Organizes numbers so readers can see what the data look like.",
    tags: ["descriptive", "table", "evidence", "reporting"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["evidence", "mean-vs-median", "sd-vs-iqr", "choosing-graph", "statistical-vs-practical-significance"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A descriptive table organizes numbers so readers can see what the data look like.\n\nIt often comes before statistical tests because it shows the basic shape of the evidence." },
      { kind: "p", h: "What this procedure is for", body: "This helps me summarize the sample, variables, groups, or outcomes clearly." },
      { kind: "l", h: "When to use it", body: [
        "You need to describe the sample.",
        "You need to show frequencies or percentages.",
        "You need to compare descriptive patterns across groups.",
        "You need readers to see exact values.",
        "You need to show how many cases are included."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The table includes too many numbers with no clear point.",
        "Percentages do not show their denominator.",
        "Rows or columns are ordered in a confusing way.",
        "Categories are collapsed without explanation.",
        "The table is used as decoration rather than evidence."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Variables to summarize",
        "Grouping variable, if any",
        "Sample size",
        "Decision about percentages, means, medians, SDs, IQRs, or counts",
        "Clear labels"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "What should the table help readers see?",
        "Should I report counts, percentages, means, medians, or both?",
        "How should categories be ordered?",
        "Should categories be collapsed?",
        "Should missing values be shown?",
        "What denominator is used for percentages?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Decide the claim or context the table supports.",
        "2. Select only relevant variables.",
        "3. Choose appropriate summaries for each variable.",
        "4. Organize rows and columns logically.",
        "5. Label variables and categories clearly.",
        "6. Include sample sizes or denominators.",
        "7. Write a sentence telling readers what to notice."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Does the table have a purpose?",
        "Can a reader understand it without guessing?",
        "Are sample sizes clear?",
        "Are percentages computed on the right base?",
        "Is the ordering meaningful?",
        "Is unnecessary precision removed?"
      ]},
      { kind: "p", h: "Tiny example", body: "You compare students who used an AI feedback tool frequently vs rarely.\n\nA descriptive table might show:\n\n- number of students in each group\n- average prior writing score\n- average final writing score\n- median number of revisions\n- percentage submitting final draft on time\n\nBefore testing group differences, the table lets readers see whether the groups look similar or different at baseline." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Filling a table with every available variable instead of the variables readers need." },
      { kind: "p", h: "What the output looks like", body: "A table with labeled rows, columns, summaries, and sample sizes." },
      { kind: "p", h: "How to report it", body: "`Table 1 summarizes participant characteristics and baseline writing scores by AI feedback-use group. Frequent and infrequent users had similar prior writing scores, but frequent users completed more revisions on average.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe the sample and show visible patterns in the data." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A descriptive table alone usually does not establish statistical significance or causality." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Should this table show means/SDs or medians/IQRs?",
        "Should I include missing data?",
        "Should I stratify by group?",
        "Are these categories too detailed?",
        "What should readers notice first?"
      ]},
      { kind: "quote", body: "A descriptive table should help readers see the evidence, not make them hunt for it." }
    ]
  },
  {
    id: "choosing-graph",
    title: "Choosing a graph",
    type: "Procedure",
    level: "procedure",
    pathway: "Evidence -> Claim",
    summary: "Selecting a visual form that helps readers understand the data pattern.",
    tags: ["graph", "visualization", "evidence", "figure"],
    source: "../what_the_stat_content/procedure_cards_v1.md",
    related: ["descriptive-table", "evidence", "claim", "mean-vs-median"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Choosing a graph means selecting a visual form that helps readers understand the data pattern.\n\nA graph is not decoration. It is part of the argument." },
      { kind: "p", h: "What this procedure is for", body: "This helps me show patterns that are easier to see visually than in text or tables." },
      { kind: "l", h: "When to use it", body: [
        "You want to show a pattern, trend, comparison, distribution, or relationship.",
        "A table would be too dense.",
        "Readers need to see shape, spread, or direction.",
        "The visual helps support a specific claim."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The graph looks impressive but does not clarify the evidence.",
        "The axis exaggerates or hides differences.",
        "The visual implies causation without design support.",
        "Too many colors, labels, or categories distract from the point.",
        "A simple sentence or table would be clearer."
      ]},
      { kind: "l", h: "Inputs needed", body: [
        "Research question",
        "Data type",
        "Variables to display",
        "Claim the graph supports",
        "Audience needs"
      ]},
      { kind: "l", h: "Researcher decisions", body: [
        "Is a graph needed?",
        "What pattern should readers see?",
        "Which graph type fits the data?",
        "What should be on each axis?",
        "Should exact values be labeled?",
        "How can the graph avoid misleading readers?"
      ]},
      { kind: "l", h: "Step by step", body: [
        "1. Decide what the reader needs to see.",
        "2. Identify the data type and relationship.",
        "3. Choose a graph type that fits the pattern.",
        "4. Keep the visual as simple as the content allows.",
        "5. Label axes, groups, and units clearly.",
        "6. Use a title or caption that states the point.",
        "7. Check whether the graph could mislead."
      ]},
      { kind: "l", h: "Quality checks", body: [
        "Does the graph match the data type?",
        "Is the main pattern easy to see?",
        "Are axes honest and clear?",
        "Are labels readable?",
        "Is color used meaningfully?",
        "Does the caption explain why the figure matters?"
      ]},
      { kind: "p", h: "Tiny example", body: "You want to show whether AI feedback use is related to writing revision quality.\n\nPossible graph choices:\n\n- bar chart: average revision quality by low/medium/high AI use group\n- boxplot: distribution of revision quality in each group\n- scatterplot: number of AI feedback interactions vs revision quality score\n- line graph: average revision quality across weeks\n\nThe best graph depends on the question and data structure." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Choosing the graph that software makes easiest instead of the graph that helps the reader understand the claim." },
      { kind: "p", h: "What the output looks like", body: "A table, bar chart, line graph, scatterplot, boxplot, or other visual display." },
      { kind: "p", h: "How to report it", body: "`Figure 1 displays revision quality scores by AI feedback-use group. The figure shows that frequent users had higher median revision quality, but scores varied widely within each group.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can help readers see a pattern, contrast, distribution, or relationship." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A graph does not prove a pattern is statistically significant or causal. It visually displays evidence; it does not replace analysis or design logic." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is this graph appropriate for my data type?",
        "Would a table be clearer?",
        "Should I show individual points, averages, or both?",
        "Does the graph exaggerate the pattern?",
        "What should the caption tell readers to notice?"
      ]},
      { kind: "quote", body: "Choose the graph that helps readers see the evidence your claim depends on." }
    ]
  }
];
