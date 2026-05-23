window.WTS_LEVEL2_CARDS = [
  {
    id: "mcnemar",
    title: "McNemar test",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Tests paired yes/no data for change in one direction more than the other.",
    tags: ["mcnemar", "paired", "binary", "pre-post"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["chi-square", "paired-t", "wilcoxon", "descriptive-vs-inferential"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "McNemar's test is for paired yes/no data.\n\nIt asks whether the same people changed in one binary direction more often than the other." },
      { kind: "p", h: "The research question it answers", body: "Did the same students change from no to yes, or yes to no, after an intervention or across two related conditions?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: binary",
        "Same people or different people: same people or matched pairs",
        "Number of measurements: two",
        "Typical design: before/after, pre/post, condition A/condition B"
      ]},
      { kind: "l", h: "When to use it", body: [
        "The outcome is yes/no, correct/incorrect, completed/not completed, applied/not applied.",
        "Each student has two related binary measurements.",
        "You care about the direction of change."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The two groups are independent.",
        "The outcome is a score, rating, or count.",
        "You have more than two outcome categories.",
        "Many paired cases are missing one measurement."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "The same students or matched pairs must be measured twice.",
        "The outcome must be binary at both times/conditions.",
        "The key information is the discordant pairs: no-to-yes and yes-to-no."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Create a 2x2 table of before by after.",
        "Check that rows and columns represent the same paired cases.",
        "Run McNemar's test.",
        "Interpret the direction by inspecting the off-diagonal cells."
      ]},
      { kind: "code", h: "Python", body: "import pandas as pd\nfrom statsmodels.stats.contingency_tables import mcnemar\n\nsub = df[[\"applied_before\", \"applied_after\"]].dropna()\n\ntable = pd.crosstab(sub[\"applied_before\"], sub[\"applied_after\"])\ntable\n\nresult = mcnemar(table, exact=True)\nresult.statistic, result.pvalue" },
      { kind: "l", h: "What the output usually includes", body: [
        "2x2 paired table",
        "test statistic",
        "p-value"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Look first at the number who changed from no to yes and from yes to no.\n\nThe p-value asks whether the imbalance between those two change directions is surprising under the no-change null idea." },
      { kind: "p", h: "Effect size to report alongside", body: "Report the paired table and the percentage who changed in each direction." },
      { kind: "p", h: "Tiny example", body: "IT2900-style:\n\nBefore a chatbot scenario, a student did not apply an insight. After the scenario, the same student did apply the insight.\n\nMcNemar's test can examine whether no-to-yes changes are more common than yes-to-no changes." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using chi-square for paired before/after yes/no data.\n\nChi-square is for independent observations; McNemar is for paired binary change." },
      { kind: "p", h: "How to report it", body: "A McNemar test examined paired change in insight application from before to after the chatbot activity. The number of students changing from no to yes was __, while __ changed from yes to no, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that paired binary responses changed more in one direction than the other, if supported." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove the chatbot caused the change unless the study design supports that causal claim." },
      { kind: "quote", body: "McNemar is for the same people changing on a yes/no outcome." }
    ]
  },
  {
    id: "sensitivity-analysis",
    title: "Sensitivity analysis",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Asks whether your conclusion survives another reasonable analytic decision.",
    tags: ["sensitivity", "robustness", "analytic-choice"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["robustness-check", "researcher-degrees-of-freedom", "missing-data", "viz-thinking-path"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Sensitivity analysis asks whether your conclusion changes when you make a different reasonable analytic decision.\n\nIt is a research judgment practice, not one single statistical test." },
      { kind: "p", h: "The research question it answers", body: "Would my conclusion survive another reasonable way of handling the data?" },
      { kind: "l", h: "Data situation", body: [
        "active-time gap cap",
        "inclusion/exclusion rule",
        "missing-data handling",
        "outlier treatment",
        "score denominator",
        "survey composite choice",
        "main attempt vs all attempts",
        "AI-score verification rule"
      ]},
      { kind: "l", h: "When to use it", body: [
        "A reasonable researcher could make more than one defensible choice.",
        "The result may depend on that choice.",
        "You want to show transparency and robustness."
      ]},
      { kind: "l", h: "When to pause", body: [
        "You are trying many options only to find significance.",
        "You do not report the alternatives.",
        "The alternative choices are not substantively defensible."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Define the main analysis.",
        "Define reasonable alternatives.",
        "Compare whether the broad conclusion changes.",
        "Report what changed and what stayed stable."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Identify the analytic decision.",
        "Create alternative versions.",
        "Run the same summary/test/model across versions.",
        "Compare the direction, size, and conclusion."
      ]},
      { kind: "code", h: "Python", body: "summary_rows = []\n\nfor cap in [5, 10, 15]:\n    col = f\"active_time_cap_{cap}\"\n    summary_rows.append({\n        \"gap_cap_min\": cap,\n        \"median\": df[col].median(),\n        \"q1\": df[col].quantile(0.25),\n        \"q3\": df[col].quantile(0.75),\n    })\n\npd.DataFrame(summary_rows)" },
      { kind: "l", h: "What the output usually includes", body: [
        "main result",
        "alternative-result table",
        "note on whether conclusion changed"
      ]},
      { kind: "p", h: "How to interpret the output", body: "If the result points the same way under reasonable alternatives, it is more robust.\n\nIf the conclusion changes, report that honestly. That does not mean failure; it means the result depends on a choice readers should know about." },
      { kind: "p", h: "Effect size to report alongside", body: "Use the same effect size or estimate across all versions, where possible." },
      { kind: "p", h: "Tiny example", body: "MD1140-style:\n\nWall-clock duration is distorted by idle gaps. You compare active time using 5-minute, 10-minute, and 15-minute gap caps. If all tell the same story, the engagement conclusion is more credible." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating sensitivity analysis as \"try options until p < .05.\"\n\nThat is not sensitivity analysis. That is undisclosed researcher flexibility." },
      { kind: "p", h: "How to report it", body: "We conducted a sensitivity check using 5-, 10-, and 15-minute idle-gap caps. The median active-time pattern was consistent across all three definitions, suggesting the engagement finding was not driven by the gap-cap choice." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim whether the conclusion was robust to a specific analytic decision." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not make a weak design causal or remove the need to justify the main analysis." },
      { kind: "quote", body: "Sensitivity analysis asks whether your conclusion survives another reasonable decision." }
    ]
  },
  {
    id: "kruskal-wallis",
    title: "Kruskal-Wallis test",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Rank-based comparison of three or more independent groups.",
    tags: ["kruskal-wallis", "non-parametric", "groups", "ranks"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["anova", "mann-whitney", "parametric-vs-nonparametric", "viz-thinking-path"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Kruskal-Wallis compares three or more independent groups using ranks.\n\nIt is often used when one-way ANOVA does not fit well because the outcome is ordinal, skewed, or rank-like." },
      { kind: "p", h: "The research question it answers", body: "Do three or more independent groups tend to differ in their outcome values or ranks?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: ordinal, skewed, or continuous but not ANOVA-friendly",
        "Grouping variable type: categorical with three or more independent groups",
        "Same people or different people: different people"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have three or more independent groups.",
        "The outcome is ordinal or skewed.",
        "You want a rank-based group comparison."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The same students appear in multiple groups.",
        "You only have two groups.",
        "You need detailed pairwise group differences but have not planned follow-ups.",
        "You are tempted to claim causality from group differences alone."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Groups should be independent.",
        "Outcome should be at least ordinal.",
        "Interpret carefully if group distributions have very different shapes."
      ]},
      { kind: "code", h: "How to do it in Python", body: "from scipy import stats\n\nsub = df[[\"usefulness_rating\", \"role\"]].dropna()\n\ngroups = [\n    values[\"usefulness_rating\"]\n    for _, values in sub.groupby(\"role\")\n]\n\nresult = stats.kruskal(*groups)\nresult" },
      { kind: "p", h: "Read group summaries first", body: "Read the group medians/IQRs before reading the p-value." },
      { kind: "code", h: "Group summaries", body: "sub.groupby(\"role\")[\"usefulness_rating\"].describe()" },
      { kind: "l", h: "What the output usually includes", body: [
        "H statistic",
        "p-value",
        "group summaries"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The p-value tells you whether at least one group tends to differ in rank from the others.\n\nIt does not tell you which groups differ. You need follow-up comparisons for that." },
      { kind: "p", h: "Effect size to report alongside", body: "Report group medians/IQRs. Some projects may report epsilon squared or eta-squared-style rank effect sizes." },
      { kind: "p", h: "Tiny example", body: "BMA5008-style:\n\nIf different students interview CEO, CFO, or CPTO agents and rate usefulness from 1 to 5, Kruskal-Wallis can compare usefulness ratings across the three independent role groups." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using ordinary ANOVA because there are three groups, while ignoring that the outcome is a small ordinal rating." },
      { kind: "p", h: "How to report it", body: "A Kruskal-Wallis test indicated that usefulness ratings differed across role groups, H = __, p = __. Median ratings were __ for CEO, __ for CFO, and __ for CPTO." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that at least one independent group differs in ranked outcome tendency, if supported." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not identify all pairwise differences or prove that group membership caused the outcome." },
      { kind: "quote", body: "Kruskal-Wallis is the rank-based option for comparing three or more independent groups." }
    ]
  },
  {
    id: "rm-anova",
    title: "Repeated-measures ANOVA",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Compares three or more related measurements from the same people.",
    tags: ["anova", "repeated-measures", "within-subjects"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["paired-t", "anova", "mixed-models", "shape-router"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Repeated-measures ANOVA compares three or more related measurements from the same people.\n\nIt is like extending a paired t-test beyond two conditions." },
      { kind: "p", h: "The research question it answers", body: "Do the same students differ across three or more time points, scenarios, roles, or conditions?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: continuous or approximately continuous",
        "Condition variable: three or more related conditions",
        "Same people or different people: same people",
        "Typical design: within-subjects comparison"
      ]},
      { kind: "l", h: "When to use it", body: [
        "Each participant has a score in each condition.",
        "Conditions are repeated within the same participant.",
        "You want to compare average outcome across conditions."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Many participants are missing some conditions.",
        "The outcome is ordinal or highly skewed.",
        "You have nesting, multiple cases, teams, or more complex structure.",
        "You need a more flexible model, such as mixed-effects modeling."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Repeated measurements belong to the same participants.",
        "Outcome should be reasonably continuous.",
        "Missing repeated measures can cause problems.",
        "Sphericity can matter in classic repeated-measures ANOVA."
      ]},
      { kind: "p", h: "How to do it in Python", body: "Statsmodels expects long data for `AnovaRM`." },
      { kind: "code", h: "Python", body: "from statsmodels.stats.anova import AnovaRM\n\nsub = df[[\"student_id\", \"role\", \"active_time_min\"]].dropna()\n\nmodel = AnovaRM(\n    data=sub,\n    depvar=\"active_time_min\",\n    subject=\"student_id\",\n    within=[\"role\"]\n).fit()\n\nmodel" },
      { kind: "p", h: "Check the descriptive pattern first", body: "Check the descriptive pattern first." },
      { kind: "code", h: "Descriptives", body: "sub.groupby(\"role\")[\"active_time_min\"].describe()" },
      { kind: "l", h: "What the output usually includes", body: [
        "F statistic",
        "degrees of freedom",
        "p-value",
        "within-subject factor"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The main result tells you whether average outcome differs somewhere across the repeated conditions.\n\nIt does not automatically tell you which conditions differ from which." },
      { kind: "p", h: "Effect size to report alongside", body: "Often report partial eta squared or descriptive mean differences with confidence intervals." },
      { kind: "p", h: "Tiny example", body: "Emir/BMA5008-style:\n\nIf the same students interview CEO, CFO, and CPTO agents, repeated-measures ANOVA could compare average active time across the three roles." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using ordinary one-way ANOVA when the same students appear in every condition.\n\nThat ignores the repeated nature of the data." },
      { kind: "p", h: "How to report it", body: "A repeated-measures ANOVA examined whether active time differed across the three role simulations. The effect of role was __, F(df1, df2) = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that the same students differed across repeated conditions, if supported." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove one condition caused better learning, and it may not handle complex missing or nested transcript data." },
      { kind: "quote", body: "Repeated-measures ANOVA compares three or more related measurements from the same people." }
    ]
  },
  {
    id: "mixed-models",
    title: "Mixed-effects models",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Handles data where rows are clustered or repeated.",
    tags: ["mixed-models", "nested", "clustered", "repeated"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["multiple-regression", "rm-anova", "researcher-degrees-of-freedom", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Mixed-effects models handle data where rows are clustered or repeated.\n\nThey help when observations are not fully independent." },
      { kind: "p", h: "The research question it answers", body: "How is an outcome related to predictors when observations are nested within students, cases, classes, teams, prompts, or attempts?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: often continuous for beginner mixed models",
        "Predictors: continuous or categorical",
        "Data structure: repeated or nested rows",
        "Typical design: student-case data, multi-case simulations, repeated attempts, transcript segments"
      ]},
      { kind: "l", h: "When to use it", body: [
        "The same student appears in multiple rows.",
        "Cases or prompts create repeated observations.",
        "Students are nested in sections or teams.",
        "You need to account for clustering."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Sample size is small.",
        "The nesting structure is unclear.",
        "You do not know what one row represents.",
        "A simpler descriptive or paired analysis answers the question."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "You must know the grouping structure.",
        "Each random-effect grouping should have enough observations to estimate variation.",
        "Model complexity should match the data size.",
        "Interpretation requires care."
      ]},
      { kind: "p", h: "How to do it in Python", body: "Example: performance scores across multiple cases per student." },
      { kind: "code", h: "Python", body: "import statsmodels.formula.api as smf\n\nsub = df[[\n    \"main_total_pct\",\n    \"arm\",\n    \"case_id\",\n    \"student_id\"\n]].dropna()\n\nmodel = smf.mixedlm(\n    \"main_total_pct ~ C(arm) + C(case_id)\",\n    data=sub,\n    groups=sub[\"student_id\"]\n).fit()\n\nmodel.summary()" },
      { kind: "p", h: "Read it as a Level 2 model", body: "Read this as a Level 2 model: useful, but not a magic upgrade. You still need to explain the data structure." },
      { kind: "l", h: "What the output usually includes", body: [
        "fixed-effect coefficients",
        "random-effect variance",
        "standard errors",
        "p-values or confidence intervals, depending output",
        "model fit information"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Fixed effects are the estimated associations for predictors.\n\nRandom effects account for clustering, such as repeated rows from the same student." },
      { kind: "p", h: "Effect size to report alongside", body: "Report coefficients with confidence intervals and clear descriptive summaries. In beginner reporting, do not hide the raw pattern behind the model." },
      { kind: "p", h: "Tiny example", body: "PharSim-style:\n\nIf each student has scores for multiple simulation cases, rows are student-case rows. A mixed model can account for repeated case scores within the same student." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating each message, case, or attempt as independent just because each is a row in the spreadsheet." },
      { kind: "p", h: "How to report it", body: "Because students contributed scores for multiple cases, we used a mixed-effects model with student as a grouping factor. The model estimated the association between arm and case score while accounting for repeated observations within students." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim model-based associations while accounting for clustering, if the model fits the data structure." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not automatically solve confounding, missing data, poor measurement, or causal inference." },
      { kind: "quote", body: "Mixed-effects models are for data where rows are clustered or repeated." }
    ]
  },
  {
    id: "count-models",
    title: "Poisson / negative binomial count models",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Regression methods for count outcomes.",
    tags: ["poisson", "negative-binomial", "counts", "regression"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["logistic-regression", "linear-regression", "mean-vs-median", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Poisson and negative binomial models are regression methods for count outcomes.\n\nThey are for outcomes that count how many times something happened." },
      { kind: "p", h: "The research question it answers", body: "What predicts the number of events, messages, attempts, issues, or actions?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: count",
        "Predictor variable type: continuous or categorical",
        "Typical outcomes: message count, attempt count, issue count, hints requested"
      ]},
      { kind: "l", h: "When to use it", body: [
        "The outcome is a non-negative count.",
        "Counts are skewed or have many small values.",
        "You want to model count outcome predictors."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The outcome is binary, not a count.",
        "The count has too many zeros for a simple model.",
        "You do not know the exposure time or opportunity to generate counts.",
        "Counts are repeated within students or cases."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Poisson assumes the mean and variance are related in a strict way.",
        "Negative binomial is often used when counts are more variable than Poisson expects.",
        "Exposure matters: more time can naturally create more messages."
      ]},
      { kind: "p", h: "How to do it in Python", body: "Start with a Poisson model only as a first teaching skeleton." },
      { kind: "code", h: "Python", body: "import statsmodels.formula.api as smf\n\nsub = df[[\"student_message_count\", \"arm\", \"pre_confidence\"]].dropna()\n\nmodel = smf.poisson(\n    \"student_message_count ~ C(arm) + pre_confidence\",\n    data=sub\n).fit()\n\nmodel.summary()" },
      { kind: "p", h: "If counts are very variable", body: "If the counts are much more variable than the model expects, ask about negative binomial or another count model." },
      { kind: "l", h: "What the output usually includes", body: [
        "coefficients in log-count units",
        "standard errors",
        "p-values",
        "confidence intervals",
        "model fit information"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Exponentiated coefficients can be interpreted as rate ratios.\n\nFor a beginner, focus first on direction and practical meaning: is the predictor associated with more or fewer counted events?" },
      { kind: "p", h: "Effect size to report alongside", body: "Rate ratio with confidence interval, plus descriptive count summaries." },
      { kind: "p", h: "Tiny example", body: "Transcript-engagement question:\n\nYou want to model whether students in one condition send more messages than students in another condition.\n\nMessage count is a count outcome, not a continuous score." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using linear regression for heavily skewed message counts without checking the distribution." },
      { kind: "p", h: "How to report it", body: "We modeled student message count as a count outcome. The model estimated whether arm was associated with the number of messages sent, after accounting for baseline confidence." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim predictors are associated with higher or lower expected counts, if supported." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove that the predictor caused students to send more messages, and message count is not automatically learning." },
      { kind: "quote", body: "Count models are for outcomes that count how many times something happened." }
    ]
  },
  {
    id: "weighted-kappa",
    title: "Weighted kappa",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Measures coder agreement for ordered categories with partial credit.",
    tags: ["weighted-kappa", "agreement", "ordinal", "reliability"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["cohen-kappa", "coder-agreement", "codebook", "reliability-vs-validity"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Weighted kappa measures agreement between two coders for ordered categories.\n\nIt gives partial credit when coders disagree by a small amount rather than a large amount." },
      { kind: "p", h: "The research question it answers", body: "Do two coders agree on ordinal ratings beyond chance, while accounting for how severe disagreements are?" },
      { kind: "l", h: "Data situation", body: [
        "Data type: ordered categorical codes",
        "Number of coders: two",
        "Same units coded by both coders",
        "Typical use: severity ratings, quality levels, partial-credit coding"
      ]},
      { kind: "l", h: "When to use it", body: [
        "Codes have a meaningful order.",
        "Near disagreements are less serious than far disagreements.",
        "Two coders rated the same transcript units independently."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Categories are nominal with no order.",
        "There are more than two coders.",
        "Categories are poorly defined.",
        "One category dominates nearly all cases."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Coders should code the same units.",
        "Categories must be ordered.",
        "Codebook examples should clarify boundary cases.",
        "Inspect the disagreement table, not only the coefficient."
      ]},
      { kind: "code", h: "How to do it in Python", body: "import pandas as pd\nfrom sklearn.metrics import cohen_kappa_score\n\nsub = df[[\"coder1_reasoning\", \"coder2_reasoning\"]].dropna()\n\npd.crosstab(sub[\"coder1_reasoning\"], sub[\"coder2_reasoning\"])\n\nweighted_kappa = cohen_kappa_score(\n    sub[\"coder1_reasoning\"],\n    sub[\"coder2_reasoning\"],\n    weights=\"quadratic\"\n)\n\nweighted_kappa" },
      { kind: "p", h: "Weighting choice", body: "Use `weights=\"linear\"` or `weights=\"quadratic\"` depending on convention and advisor guidance." },
      { kind: "l", h: "What the output usually includes", body: [
        "weighted kappa coefficient",
        "sometimes confidence interval",
        "disagreement table"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Higher values indicate stronger chance-corrected agreement, with partial credit for close disagreements.\n\nAlways inspect where coders disagree." },
      { kind: "p", h: "Effect size to report alongside", body: "Weighted kappa itself is the reliability coefficient. Percent agreement and a crosstab can help readers understand the pattern." },
      { kind: "p", h: "Tiny example", body: "OMS3100-style:\n\nTwo reviewers rate diagnostic reasoning quality as 0 = absent, 1 = partial, 2 = clear. A coder disagreement between partial and clear is less severe than absent and clear." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using unweighted kappa for ordered ratings where near-miss disagreements should count differently from extreme disagreements." },
      { kind: "p", h: "How to report it", body: "Two coders independently rated diagnostic reasoning quality using ordered categories. Weighted kappa was __, and disagreements were reviewed to refine codebook boundaries." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim the degree of chance-corrected agreement for ordered coding." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove the coding scheme is valid or that the construct is well captured." },
      { kind: "quote", body: "Weighted kappa is for coder agreement when categories have an order." }
    ]
  },
  {
    id: "ancova",
    title: "ANCOVA-style adjustment",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Predicts a post outcome while accounting for a baseline measure.",
    tags: ["ancova", "regression", "pre-post", "baseline"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["multiple-regression", "paired-t", "ex-big-linking-question", "correlation-not-causation"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "ANCOVA-style adjustment compares or predicts a post outcome while accounting for a baseline/pre measure.\n\nIn Python, this is often done as a regression model." },
      { kind: "p", h: "The research question it answers", body: "After accounting for where students started, is the group, intervention, or chatbot variable associated with where they ended?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: continuous or approximately continuous post measure",
        "Predictor: group/intervention/chatbot performance",
        "Covariate: pre/baseline measure",
        "Typical design: pre/post learning-intervention analysis"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have pre and post measurements.",
        "You want to account for baseline differences.",
        "The post score is the outcome.",
        "The pre score is measured before the intervention."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The pre measure is missing for many students.",
        "Pre and post are not the same construct.",
        "You are controlling for a variable that happened after the intervention.",
        "You think adjustment alone proves causation."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Pre score should be measured before the intervention.",
        "The post outcome should be modeled appropriately.",
        "Relationship between pre and post should be reasonable.",
        "Group/predictor interpretation depends on study design."
      ]},
      { kind: "code", h: "How to do it in Python", body: "import statsmodels.formula.api as smf\n\nsub = df[[\n    \"post_confidence\",\n    \"pre_confidence\",\n    \"chatbot_score\"\n]].dropna()\n\nmodel = smf.ols(\n    \"post_confidence ~ pre_confidence + chatbot_score\",\n    data=sub\n).fit()\n\nmodel.summary()\nmodel.conf_int()" },
      { kind: "p", h: "How to read the coefficient", body: "Read the `chatbot_score` coefficient as the association with post-confidence after accounting for pre-confidence." },
      { kind: "l", h: "What the output usually includes", body: [
        "intercept",
        "coefficient for pre score",
        "coefficient for predictor/group",
        "standard errors",
        "p-values",
        "confidence intervals",
        "R-squared"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The focal coefficient estimates the association with the post outcome, holding baseline constant.\n\nThat is stronger than ignoring baseline, but it is still not automatically causal." },
      { kind: "p", h: "Effect size to report alongside", body: "Coefficient with confidence interval; adjusted means may be useful for group comparisons." },
      { kind: "p", h: "Tiny example", body: "Pre/post survey + chatbot performance:\n\nYou model post-confidence using pre-confidence and chatbot performance score. This asks whether chatbot performance relates to post-confidence after accounting for baseline confidence." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking \"I controlled for pre score\" means \"the chatbot caused the post score.\"" },
      { kind: "p", h: "How to report it", body: "We modeled post-confidence as the outcome and included pre-confidence as a baseline covariate. Chatbot performance was positively associated with post-confidence after accounting for baseline confidence, b = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim an adjusted association with the post outcome." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove causality without design support such as random assignment, strong comparison logic, or other causal assumptions." },
      { kind: "quote", body: "ANCOVA-style adjustment asks about post outcomes while accounting for baseline." }
    ]
  },
  {
    id: "multiple-comparison",
    title: "Multiple-comparison adjustment",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Manages the risk of false positives when many tests are run.",
    tags: ["multiple-comparison", "fdr", "bonferroni", "false-positive"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["p-value", "effect-size", "researcher-degrees-of-freedom", "statistical-vs-practical-significance"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Multiple-comparison adjustment helps manage the risk of false positives when you run many tests." },
      { kind: "p", h: "The research question it answers", body: "If I tested many outcomes, groups, cases, or domains, which findings still look credible after accounting for many chances to find something?" },
      { kind: "l", h: "Data situation", body: [
        "many rubric domains",
        "many cases",
        "many survey items",
        "many pairwise groups",
        "many transcript issue types"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You run several related significance tests.",
        "You want to separate exploratory signals from stronger findings.",
        "You need to be transparent about multiple testing."
      ]},
      { kind: "l", h: "When to pause", body: [
        "You are using adjustment to hide unplanned fishing.",
        "You have one planned primary comparison.",
        "You do not know which tests belong to the same family."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Decide what counts as a family of tests.",
        "Distinguish planned primary tests from exploratory tests.",
        "Report the adjustment method.",
        "Keep effect sizes visible; do not reduce everything to adjusted p-values."
      ]},
      { kind: "code", h: "How to do it in Python", body: "from statsmodels.stats.multitest import multipletests\n\np_values = df_results[\"p_value\"]\n\nreject, p_adj, _, _ = multipletests(\n    p_values,\n    method=\"fdr_bh\"\n)\n\ndf_results[\"p_adjusted_fdr\"] = p_adj\ndf_results[\"reject_fdr\"] = reject\ndf_results" },
      { kind: "p", h: "Choosing the method", body: "Ask your advisor whether FDR, Bonferroni, Holm, or another approach fits your context." },
      { kind: "l", h: "What the output usually includes", body: [
        "original p-values",
        "adjusted p-values",
        "reject/not reject indicator",
        "adjustment method"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Adjusted p-values are more conservative about declaring findings when many tests were run.\n\nThey do not replace effect sizes or interpretation." },
      { kind: "p", h: "Effect size to report alongside", body: "Always show effect sizes or meaningful estimates alongside adjusted p-values." },
      { kind: "p", h: "Tiny example", body: "PharSim-style:\n\nIf you compare Arm 1 and Arm 2 across several cases and rubric domains, some small p-values may appear by chance. Multiple-comparison adjustment helps you avoid over-reading those signals." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating every p-value as equally convincing after running dozens of tests." },
      { kind: "p", h: "How to report it", body: "Because we conducted multiple exploratory arm comparisons across rubric domains, we interpreted p-values cautiously and reported false-discovery-rate-adjusted p-values alongside effect sizes." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim whether findings remain notable after accounting for multiple tests, depending on the adjustment." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not make exploratory analyses confirmatory or fix weak measurement." },
      { kind: "quote", body: "When you ask many statistical questions, you need to be more careful about chance findings." }
    ]
  },
  {
    id: "missing-data-sensitivity",
    title: "Missing data sensitivity",
    type: "Level 2 method",
    level: "level2",
    pathway: "Analysis -> Evidence",
    summary: "Asks whether your conclusion depends on who is missing or how missing cases are handled.",
    tags: ["missing-data", "sensitivity", "analytic-sample"],
    source: "../what_the_stat_content/additional_method_cards_v1.md",
    related: ["missing-data", "sample", "representativeness", "sensitivity-analysis", "ex-big-linking-question"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Missing data sensitivity asks whether your conclusion depends on who is missing or how missing cases are handled." },
      { kind: "p", h: "The research question it answers", body: "Would my result look different if missing cases were handled differently, or if missingness is related to the outcome?" },
      { kind: "l", h: "Data situation", body: [
        "many students lack post surveys",
        "only completers have chatbot scores",
        "transcripts are partial",
        "score parsing fails for some attempts",
        "survey and transcript data do not merge cleanly"
      ]},
      { kind: "l", h: "When to use it", body: [
        "Missingness is large enough to matter.",
        "Missingness differs by group.",
        "Your analytic sample is smaller than the original sample.",
        "You need to explain who the result speaks about."
      ]},
      { kind: "l", h: "When to pause", body: [
        "You drop missing rows without checking how many disappear.",
        "You assume missingness is random without evidence.",
        "You impute values without understanding the method."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Count missing values by variable.",
        "Compare included vs excluded cases.",
        "Check whether missingness differs by group or baseline characteristics.",
        "Report the analytic sample clearly."
      ]},
      { kind: "code", h: "How to do it in Python", body: "analysis_cols = [\n    \"pre_confidence\",\n    \"post_confidence\",\n    \"chatbot_score\",\n    \"completed\"\n]\n\ndf[analysis_cols].isna().sum()\n\ndf[\"included_in_analysis\"] = df[analysis_cols].notna().all(axis=1)\n\npd.crosstab(df[\"completed\"], df[\"included_in_analysis\"], margins=True)\ndf.groupby(\"included_in_analysis\")[\"pre_confidence\"].describe()" },
      { kind: "l", h: "What the output usually includes", body: [
        "missingness counts",
        "analytic sample size",
        "included/excluded comparison",
        "sensitivity notes"
      ]},
      { kind: "p", h: "How to interpret the output", body: "If excluded students differ from included students, your result may only speak clearly about the included analytic sample.\n\nThat is not a disaster, but it must be named." },
      { kind: "p", h: "Effect size to report alongside", body: "Report differences between included and excluded cases, if relevant." },
      { kind: "p", h: "Tiny example", body: "Pre/post survey + chatbot performance:\n\nIf only students who completed the chatbot have post surveys and performance scores, the linked analysis is about completers, not all students." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Dropping missing rows and forgetting to report how many students disappeared." },
      { kind: "p", h: "How to report it", body: "The linked survey-performance analysis used complete cases with pre survey, post survey, and chatbot score data. Students missing any of these variables were excluded from this analysis, so the result should be interpreted as applying to the linked analytic sample." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim how robust or limited your result is given missing data." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not remove missing-data bias unless the design and method justify that." },
      { kind: "quote", body: "Before trusting a result, ask who had to be present in the dataset for the result to exist." }
    ]
  }
];
