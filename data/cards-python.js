window.WTS_PYTHON_CARDS = [
  {
    id: "python-research-workflow",
    title: "The researcher-to-Python path",
    type: "Python",
    level: "python",
    pathway: "Construct -> Claim",
    summary: "Before opening Python, name construct, measurement, sample, data type, question, analysis, evidence, and claim in plain language.",
    tags: ["python", "workflow", "construct", "claim", "before-test"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-standard-imports", "py-dataframe-assumption", "py-tiny-full-workflow"],
    sections: [
      { kind: "p", h: "Purpose", body: "Purpose: a beginner-friendly setup page for using Python in the statistical method cards.\n\nAudience: a junior education researcher who wants to run analyses in Python, but still needs help connecting code to research judgment." },
      { kind: "p", h: "Core idea", body: "Python helps you calculate. It does not decide whether your construct, measurement, sample, assumptions, or claim are defensible.\n\nUse this helper before running any method card." },
      { kind: "p", h: "Before opening Python", body: "Before opening Python, name these pieces in plain language:" },
      { kind: "l", h: "1. Construct", body: [
        "What am I trying to study?",
        "Example: AI teaching confidence."
      ]},
      { kind: "l", h: "2. Measurement", body: [
        "How did I observe it?",
        "Example: five 1-to-5 survey items."
      ]},
      { kind: "l", h: "3. Sample", body: [
        "Who does the data come from?",
        "Example: doctoral students in one education course."
      ]},
      { kind: "l", h: "4. Data Type", body: [
        "What kind of variable did the measurement produce?",
        "Example: ordinal item, scale score, binary completion status, continuous rubric score."
      ]},
      { kind: "l", h: "5. Research Question", body: [
        "What am I trying to do?",
        "Example: compare two groups, check change over time, test association, predict an outcome, or check reliability."
      ]},
      { kind: "l", h: "6. Analysis", body: [
        "What method might fit?",
        "Example: paired t-test, Spearman correlation, logistic regression, Cronbach's alpha."
      ]},
      { kind: "l", h: "7. Evidence", body: [
        "What output will count as evidence?",
        "Example: group means, confidence interval, p-value, effect size, reliability coefficient."
      ]},
      { kind: "l", h: "8. Claim", body: [
        "What can I responsibly say?",
        "Example: \"Students reported higher confidence after the workshop,\" not automatically \"the workshop caused confidence to increase.\""
      ]}
    ]
  },
  {
    id: "py-standard-imports",
    title: "Standard Python imports",
    type: "Python",
    level: "python",
    pathway: "Analysis",
    summary: "Common starting imports for the method cards, plus extras for coder agreement and simple graphs.",
    tags: ["python", "imports", "pandas", "scipy", "statsmodels"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["python-research-workflow", "py-dataframe-assumption"],
    sections: [
      { kind: "p", h: "Common starting imports", body: "These are common starting imports for the method cards." },
      { kind: "code", h: "Core imports", body: "import pandas as pd\nimport numpy as np\nfrom scipy import stats\nimport statsmodels.formula.api as smf\nimport statsmodels.api as sm" },
      { kind: "p", h: "For coder agreement", body: "For coder agreement:" },
      { kind: "code", h: "Coder agreement", body: "from sklearn.metrics import cohen_kappa_score" },
      { kind: "p", h: "For simple graphs", body: "For simple graphs:" },
      { kind: "code", h: "Plotting", body: "import matplotlib.pyplot as plt" }
    ]
  },
  {
    id: "py-dataframe-assumption",
    title: "The DataFrame assumption",
    type: "Python",
    level: "python",
    pathway: "Data Type -> Analysis",
    summary: "Method cards assume your cleaned data is in a pandas DataFrame called df; check what the rows and columns mean before running a test.",
    tags: ["python", "pandas", "dataframe", "before-test"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["python-research-workflow", "py-one-row-per-what", "py-missing-data-check"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Most method cards assume your cleaned data is stored in a pandas DataFrame called `df`." },
      { kind: "code", h: "First look", body: "df.head()\ndf.info()\ndf.describe(include=\"all\")" },
      { kind: "p", h: "Common beginner mistake", body: "The common beginner mistake is to run a test before checking what the rows and columns actually mean." },
      { kind: "l", h: "Ask", body: [
        "Does each row represent one student, one response, one transcript segment, one course, or something else?",
        "Is each participant supposed to appear once or multiple times?",
        "Are the columns raw survey items, composite scores, codes, group labels, or outcomes?",
        "Are the values coded in the direction I think they are coded?"
      ]}
    ]
  },
  {
    id: "py-one-row-per-what",
    title: "One row per what?",
    type: "Python",
    level: "python",
    pathway: "Data Type",
    summary: "Different tests expect different row structures; many analysis mistakes are actually row-level mistakes.",
    tags: ["python", "data-shape", "unit-of-analysis", "rows"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-dataframe-assumption", "py-name-variable-roles", "py-common-mistakes"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Different tests expect different row structures." },
      { kind: "p", h: "One row per person", body: "This works for many group comparisons, correlations, regressions, and survey scale checks.\n\nExample columns:" },
      { kind: "code", h: "Example columns", body: "student_id | feedback_group | revision_quality_score | ai_confidence_scale" },
      { kind: "p", h: "One row per person with two time points", body: "This works for paired tests if the before and after scores are in separate columns.\n\nExample columns:" },
      { kind: "code", h: "Example columns", body: "student_id | confidence_before | confidence_after" },
      { kind: "p", h: "One row per coded unit", body: "This works for coder agreement.\n\nExample columns:" },
      { kind: "code", h: "Example columns", body: "segment_id | coder1_code | coder2_code" },
      { kind: "p", h: "One row per event or attempt", body: "This can be useful, but you may need to aggregate before running common tests.\n\nExample columns:" },
      { kind: "code", h: "Example columns", body: "student_id | attempt_id | timestamp | message_count | completed_module" },
      { kind: "callout", tone: "info", h: "Senior researcher note", body: "Many analysis mistakes are actually row-level mistakes. The statistical test may be correct, but the dataframe may represent the wrong unit of analysis." }
    ]
  },
  {
    id: "py-name-variable-roles",
    title: "Name the variable roles",
    type: "Python",
    level: "python",
    pathway: "Research Question -> Analysis",
    summary: "Before writing code, write a tiny analysis plan that names outcome, predictor, design, data type, method, and target claim.",
    tags: ["python", "analysis-plan", "variable-roles"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["python-research-workflow", "py-clean-analysis-subset"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Before writing code, write a tiny analysis plan." },
      { kind: "code", h: "Plan template", body: "Research question:\nOutcome variable:\nPredictor/grouping variable:\nSame people or different people:\nNumber of groups/conditions:\nData type of outcome:\nPossible method:\nMain output to read:\nClaim I hope to make:\nClaim I must avoid:" },
      { kind: "p", h: "Tiny example", body: "Tiny example:" },
      { kind: "code", h: "Filled-in plan", body: "Research question: Do students using structured AI feedback have higher revision scores?\nOutcome variable: revision_quality_score\nPredictor/grouping variable: feedback_group\nSame people or different people: different people\nNumber of groups/conditions: two\nData type of outcome: approximately continuous rubric score\nPossible method: independent samples t-test\nMain output to read: group means, mean difference, t, p, confidence interval, Cohen's d\nClaim I hope to make: scores differed between groups\nClaim I must avoid: AI feedback caused the difference, unless the design supports causality" }
    ]
  },
  {
    id: "py-clean-analysis-subset",
    title: "Make a clean analysis subset",
    type: "Python",
    level: "python",
    pathway: "Analysis",
    summary: "For each analysis, create a smaller dataframe with only the columns you need, then check it.",
    tags: ["python", "pandas", "subset", "cleaning"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-dataframe-assumption", "py-missing-data-check", "py-descriptive-statistics-first"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "For each analysis, create a smaller dataframe with only the columns you need." },
      { kind: "code", h: "Create the subset", body: "sub = df[[\n    \"revision_quality_score\",\n    \"feedback_group\"\n]].dropna()" },
      { kind: "p", h: "Then check it", body: "Then check it." },
      { kind: "code", h: "Check the subset", body: "sub.head()\nsub.info()\nsub[\"feedback_group\"].value_counts()\nsub[\"revision_quality_score\"].describe()" },
      { kind: "l", h: "Why this matters", body: [
        "You can see exactly which variables entered the analysis.",
        "You avoid accidentally dropping rows because of unrelated missing columns.",
        "You make the analysis easier to explain later."
      ]}
    ]
  },
  {
    id: "py-missing-data-check",
    title: "Missing data check",
    type: "Python",
    level: "python",
    pathway: "Sample -> Analysis",
    summary: "Before dropping missing values, check how much is missing and whether dropping rows would change the sample meaningfully.",
    tags: ["python", "missing-data", "data-quality"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-clean-analysis-subset", "py-descriptive-statistics-first"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Before dropping missing values, check how much is missing." },
      { kind: "code", h: "Count missing", body: "df[[\n    \"revision_quality_score\",\n    \"feedback_group\"\n]].isna().sum()" },
      { kind: "l", h: "Ask", body: [
        "Is missingness small or large?",
        "Is missingness concentrated in one group?",
        "Is missingness related to the outcome?",
        "Would dropping missing rows change the sample in a meaningful way?"
      ]},
      { kind: "p", h: "Plain-language reporting habit", body: "Plain-language reporting habit:" },
      { kind: "code", h: "Reporting sentence", body: "The analysis used complete cases for revision-quality score and feedback group." },
      { kind: "callout", tone: "warn", h: "When to ask for help", body: "If many cases are missing, ask an instructor, advisor, or statistician before treating complete-case analysis as harmless." }
    ]
  },
  {
    id: "py-descriptive-statistics-first",
    title: "Descriptive statistics first",
    type: "Python",
    level: "python",
    pathway: "Analysis",
    summary: "Describe the data before running any test; the test output will not rescue a confused dataset.",
    tags: ["python", "descriptive-statistics", "before-test"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-clean-analysis-subset", "py-read-output-in-this-order"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Do not run straight to the test. Describe the data first." },
      { kind: "p", h: "For group comparisons", body: "For group comparisons:" },
      { kind: "code", h: "Group describe", body: "sub.groupby(\"feedback_group\")[\"revision_quality_score\"].describe()" },
      { kind: "p", h: "For categorical variables", body: "For categorical variables:" },
      { kind: "code", h: "Crosstab", body: "pd.crosstab(sub[\"feedback_group\"], sub[\"completed_module\"])" },
      { kind: "p", h: "For correlations or regression", body: "For correlations or regression:" },
      { kind: "code", h: "Describe and scatter", body: "sub[[\"ai_tool_minutes\", \"revision_quality_score\"]].describe()\nsub.plot.scatter(x=\"ai_tool_minutes\", y=\"revision_quality_score\")" },
      { kind: "callout", tone: "info", h: "Senior researcher note", body: "If the descriptive statistics look strange, pause before running the test. The test output will not rescue a confused dataset." }
    ]
  },
  {
    id: "py-read-output-in-this-order",
    title: "Read output in this order",
    type: "Python",
    level: "python",
    pathway: "Evidence",
    summary: "For most beginner analyses, read output as direction, size, uncertainty, statistical significance, practical meaning, then claim limit.",
    tags: ["python", "output", "evidence", "p-value", "effect-size"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-descriptive-statistics-first", "py-p-value-reminder", "py-common-mistakes"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "For most beginner analyses, read the output in this order:" },
      { kind: "l", h: "1. Direction", body: [
        "Which group is higher?",
        "Is the relationship positive or negative?",
        "Did scores increase or decrease?"
      ]},
      { kind: "l", h: "2. Size", body: [
        "How big is the mean difference, coefficient, correlation, odds ratio, or reliability estimate?"
      ]},
      { kind: "l", h: "3. Uncertainty", body: [
        "What is the confidence interval?",
        "How precise or uncertain is the estimate?"
      ]},
      { kind: "l", h: "4. Statistical significance", body: [
        "What is the p-value?",
        "Is the result surprising under the null model?"
      ]},
      { kind: "l", h: "5. Practical meaning", body: [
        "Is the size meaningful in the research context?",
        "Would a teacher, student, program designer, or researcher care?"
      ]},
      { kind: "l", h: "6. Claim limit", body: [
        "Does the design support a causal claim, or only an association/difference?"
      ]}
    ]
  },
  {
    id: "py-p-value-reminder",
    title: "p-value reminder",
    type: "Python",
    level: "python",
    pathway: "Evidence",
    summary: "A p-value is not the probability your hypothesis is true; it is how surprising the result would be if there were no real effect.",
    tags: ["python", "p-value", "interpretation"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-read-output-in-this-order", "py-common-mistakes"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A p-value is not the probability that your hypothesis is true.\n\nIt is a way of asking:" },
      { kind: "code", h: "What the p-value asks", body: "If there were no real effect or association in the population, how surprising would this result be?" },
      { kind: "p", h: "Use alongside other evidence", body: "The p-value is useful, but it is not the whole story." },
      { kind: "l", h: "Always place it next to", body: [
        "descriptive statistics",
        "effect size or coefficient",
        "confidence interval when possible",
        "design and sampling limits",
        "practical interpretation"
      ]}
    ]
  },
  {
    id: "py-common-mistakes",
    title: "Common Python mistakes",
    type: "Python",
    level: "python",
    pathway: "Analysis",
    summary: "Four frequent beginner mistakes: numeric codes as numbers, missed reverse coding, ignored unit of analysis, and reporting only the p-value.",
    tags: ["python", "red-flag", "mistakes", "reverse-code", "unit-of-analysis"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["py-one-row-per-what", "py-p-value-reminder", "py-read-output-in-this-order"],
    sections: [
      { kind: "p", h: "Mistake 1: Treating numeric codes as real numbers", body: "Example:" },
      { kind: "code", h: "Group codes", body: "1 = control\n2 = AI feedback" },
      { kind: "p", h: "Why it matters", body: "This is a group label, not a continuous score. It should usually be treated as categorical.\n\nIn statsmodels formulas, use `C()` for categorical predictors:" },
      { kind: "code", h: "Categorical predictor", body: "model = smf.ols(\"score ~ C(feedback_group)\", data=sub).fit()" },
      { kind: "p", h: "Mistake 2: Forgetting reverse-coded items", body: "If a survey item points in the opposite direction, reverse-code it before creating a composite.\n\nFor a 1-to-5 item:" },
      { kind: "code", h: "Reverse code", body: "df[\"item_3_reversed\"] = 6 - df[\"item_3\"]" },
      { kind: "p", h: "Check direction", body: "Then check that higher values now mean the same thing as the other items." },
      { kind: "p", h: "Mistake 3: Ignoring the unit of analysis", body: "If each student has multiple rows, a simple t-test or regression may treat repeated observations as independent when they are not.\n\nPause and ask whether you need to aggregate to one row per student or use a method that handles repeated observations." },
      { kind: "p", h: "Mistake 4: Reporting only the p-value", body: "Weak report:" },
      { kind: "code", h: "Weak report", body: "p < .05" },
      { kind: "p", h: "Better report", body: "Better report:" },
      { kind: "code", h: "Better report", body: "Students in the structured AI feedback group had higher revision-quality scores than students in the comparison group. The difference was 4.2 points on a 20-point rubric, with a 95 percent confidence interval from 1.1 to 7.3 points." },
      { kind: "p", h: "Where the p-value fits", body: "The p-value can follow, but it should not carry the whole interpretation." }
    ]
  },
  {
    id: "py-tiny-full-workflow",
    title: "Tiny full workflow",
    type: "Python",
    level: "python",
    pathway: "Construct -> Claim",
    summary: "Worked example: prepare subset, check groups, split, run independent t-test, translate results, and write a responsible claim.",
    tags: ["python", "example", "t-test", "workflow"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["python-research-workflow", "py-clean-analysis-subset", "py-read-output-in-this-order", "py-before-running-any-method-card"],
    sections: [
      { kind: "p", h: "Research question", body: "Research question:" },
      { kind: "code", h: "Research question", body: "Do students who used structured AI feedback have higher revision-quality scores than students in the comparison group?" },
      { kind: "p", h: "Prepare the subset", body: "Prepare the subset:" },
      { kind: "code", h: "Subset", body: "sub = df[[\n    \"revision_quality_score\",\n    \"feedback_group\"\n]].dropna()" },
      { kind: "p", h: "Check the groups", body: "Check the groups:" },
      { kind: "code", h: "Group checks", body: "sub[\"feedback_group\"].value_counts()\nsub.groupby(\"feedback_group\")[\"revision_quality_score\"].describe()" },
      { kind: "p", h: "Split the groups", body: "Split the groups:" },
      { kind: "code", h: "Split", body: "structured = sub.loc[\n    sub[\"feedback_group\"] == \"structured_ai\",\n    \"revision_quality_score\"\n]\n\ncomparison = sub.loc[\n    sub[\"feedback_group\"] == \"comparison\",\n    \"revision_quality_score\"\n]" },
      { kind: "p", h: "Run the test", body: "Run the test:" },
      { kind: "code", h: "Independent t-test", body: "result = stats.ttest_ind(structured, comparison, equal_var=False)\nresult" },
      { kind: "p", h: "Translate the result", body: "Translate the result:" },
      { kind: "code", h: "Translation order", body: "First read the group means.\nThen read the direction and size of the difference.\nThen read the p-value.\nThen decide what the design allows you to claim." },
      { kind: "p", h: "Possible responsible claim", body: "Possible responsible claim:" },
      { kind: "code", h: "Responsible claim", body: "Students in the structured AI feedback group had higher average revision-quality scores than students in the comparison group." },
      { kind: "p", h: "Claim to avoid", body: "Claim to avoid unless the design supports it:" },
      { kind: "code", h: "Overclaim", body: "Structured AI feedback caused students to write better revisions." }
    ]
  },
  {
    id: "py-before-running-any-method-card",
    title: "Before running any method card",
    type: "Python",
    level: "python",
    pathway: "Construct -> Claim",
    summary: "A pre-flight checklist before running any method card: row meaning, outcome, predictor, missing data, descriptives, design, and claim limits.",
    tags: ["python", "checklist", "before-test"],
    source: "../what_the_stat_content/python_setup_helper_v1.md",
    related: ["python-research-workflow", "py-tiny-full-workflow"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Use this checklist:" },
      { kind: "l", h: "Checklist", body: [
        "I know what each row represents.",
        "I know which column is the outcome.",
        "I know which column is the predictor, group, item set, or coder code.",
        "I checked missing data.",
        "I checked descriptive statistics.",
        "I know whether the same people appear once or repeatedly.",
        "I know what the test can and cannot claim.",
        "I know what effect size, confidence interval, or companion statistic to look for."
      ]},
      { kind: "quote", body: "Python can calculate the statistic, but the researcher has to defend the question, the measurement, the data structure, and the claim." }
    ]
  }
];
