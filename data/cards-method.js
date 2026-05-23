window.WTS_METHOD_CARDS = [
  {
    id: "independent-t",
    title: "Independent samples t-test",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Compares the average outcome of two separate groups.",
    tags: ["compare", "two-groups", "continuous", "different-participants", "t-test"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["paired-t", "mann-whitney", "effect-size", "mean-vs-median", "sd-vs-iqr", "statistical-vs-practical-significance"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "An independent samples t-test compares the average outcome of two separate groups.\n\nIt asks whether the two group means are different enough that the difference is unlikely to be just sampling noise, under the test assumptions." },
      { kind: "p", h: "The research question it answers", body: "Are two different groups different on a continuous outcome?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: continuous or approximately continuous",
        "Grouping variable type: categorical with two independent groups",
        "Number of groups: two",
        "Same people or different people: different people",
        "Typical design: compare two groups, such as intervention vs comparison"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have two independent groups.",
        "Each person belongs to only one group.",
        "The outcome is a score, time, scale composite, or other numeric variable.",
        "You want to compare group means."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The same people were measured twice.",
        "The outcome is ordinal, highly skewed, or has extreme outliers.",
        "The groups are very small.",
        "Group membership was not randomly assigned but you want to make a causal claim.",
        "The two groups are very unequal or have very different variability."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "The observations should be independent.",
        "The outcome should be reasonably continuous.",
        "The outcome should be roughly normal within groups, especially for small samples.",
        "The groups should have reasonably similar variances, or use a version that adjusts for unequal variances."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Put one participant or observation per row.",
        "Choose the continuous outcome column.",
        "Choose the two-group column.",
        "Split the data into the two groups.",
        "Check the group means, SDs, sample sizes, and outliers before reading the p-value.",
        "Run Welch's t-test with equal_var=False unless you have a good reason to assume equal variances."
      ]},
      { kind: "code", h: "Python", body: "from scipy import stats\n\nsub = df[[\"revision_quality_score\", \"feedback_group\"]].dropna()\n\nai = sub.loc[sub[\"feedback_group\"] == \"AI\", \"revision_quality_score\"]\ncontrol = sub.loc[sub[\"feedback_group\"] == \"control\", \"revision_quality_score\"]\n\nai.describe()\ncontrol.describe()\n\nresult = stats.ttest_ind(ai, control, equal_var=False)\nresult" },
      { kind: "p", h: "Reading the result", body: "Read the group means first, then the mean difference, then the t-test result. Report an effect size such as Cohen's d if possible, because the p-value alone does not tell you whether the difference matters." },
      { kind: "l", h: "What the output usually includes", body: [
        "group means",
        "group standard deviations",
        "mean difference",
        "t statistic",
        "degrees of freedom",
        "p-value",
        "confidence interval for the difference"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The p-value tells you whether the observed mean difference would be surprising if the two groups had no true mean difference.\n\nThe mean difference and confidence interval tell you the size and uncertainty of the difference." },
      { kind: "p", h: "Effect size to report alongside", body: "Often use Cohen's d or a confidence interval around the mean difference." },
      { kind: "p", h: "Tiny example", body: "You compare final revision-quality scores for two groups:\n\n- students who used an AI feedback tool\n- students who did not\n\nAn independent samples t-test can test whether the average revision-quality score differs between the two groups." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking the t-test proves the intervention caused the difference.\n\nIf students chose whether to use the AI tool, the groups may differ in motivation, prior skill, or time available." },
      { kind: "p", h: "How to report it", body: "Students who used the AI feedback tool had higher revision-quality scores (M = __, SD = __) than students who did not (M = __, SD = __), t(df) = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that the two groups differed in their average outcome, if the result supports that." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not by itself prove causation, explain why the groups differ, or show that the difference is practically important." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are my two groups independent?",
        "Should I use Welch's t-test for unequal variances?",
        "Is the outcome appropriate for a t-test?",
        "Should I use a non-parametric alternative?",
        "What effect size should I report?"
      ]},
      { kind: "quote", body: "An independent samples t-test compares the means of two different groups." }
    ]
  },
  {
    id: "paired-t",
    title: "Paired samples t-test",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Compares two related measurements from the same people or matched cases.",
    tags: ["compare", "pre-post", "same-participants", "continuous", "t-test"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["wilcoxon", "missing-data", "confidence-interval", "effect-size"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A paired samples t-test compares two related measurements from the same people or matched cases.\n\nIt asks whether the average change or paired difference is different from zero." },
      { kind: "p", h: "The research question it answers", body: "Did the same people change from one time or condition to another?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: continuous or approximately continuous",
        "Predictor/condition type: two related measurements",
        "Number of conditions: two",
        "Same people or different people: same people or matched pairs",
        "Typical design: pre/post, before/after, two conditions completed by the same participants"
      ]},
      { kind: "l", h: "When to use it", body: [
        "Each participant has two related scores.",
        "You care about the difference within each person.",
        "The paired differences are reasonably continuous."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The two groups are actually different people.",
        "The outcome is ordinal or highly skewed.",
        "Many participants are missing one of the two measurements.",
        "Change scores have extreme outliers."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "The pairs should be correctly matched.",
        "The paired differences should be roughly normal, especially in small samples.",
        "Each pair should be independent from other pairs."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Put one participant or matched case per row.",
        "Make sure the two score columns are truly paired for the same person.",
        "Drop rows missing either score, or decide how missing paired data should be handled.",
        "Create or inspect the difference score.",
        "Run the paired t-test."
      ]},
      { kind: "code", h: "Python", body: "from scipy import stats\n\nsub = df[[\"confidence_before\", \"confidence_after\"]].dropna().copy()\nsub[\"change\"] = sub[\"confidence_after\"] - sub[\"confidence_before\"]\n\nsub[[\"confidence_before\", \"confidence_after\", \"change\"]].describe()\n\nresult = stats.ttest_rel(sub[\"confidence_after\"], sub[\"confidence_before\"])\nresult" },
      { kind: "p", h: "Reading the result", body: "Read the average change first. Then read the t statistic and p-value. If your story is \"students improved,\" make sure the direction of change matches that interpretation." },
      { kind: "l", h: "What the output usually includes", body: [
        "mean at time/condition 1",
        "mean at time/condition 2",
        "mean difference",
        "t statistic",
        "degrees of freedom",
        "p-value",
        "confidence interval for the mean difference"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The test focuses on within-person change. A significant result suggests the average paired difference is unlikely to be zero under the null model." },
      { kind: "p", h: "Effect size to report alongside", body: "Often use Cohen's d for paired differences or report the mean difference with confidence interval." },
      { kind: "p", h: "Tiny example", body: "You measure doctoral students' AI teaching confidence before and after a workshop.\n\nA paired samples t-test can test whether the average confidence score changed after the workshop." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using an independent samples t-test when the same people were measured twice.\n\nThat ignores the pairing and loses important information." },
      { kind: "p", h: "How to report it", body: "Participants reported higher AI teaching confidence after the workshop (M = __, SD = __) than before the workshop (M = __, SD = __), t(df) = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that average scores changed from one related measurement to another." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A pre/post difference alone does not prove the workshop caused the change unless the design rules out other explanations." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are the observations correctly paired?",
        "How should I handle people missing one time point?",
        "Should I use Wilcoxon signed-rank instead?",
        "Should I visualize individual change?"
      ]},
      { kind: "quote", body: "A paired samples t-test compares two related scores by focusing on the difference within each pair." }
    ]
  },
  {
    id: "anova",
    title: "One-way ANOVA",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Compares the average outcome across three or more independent groups.",
    tags: ["compare", "multiple-groups", "continuous", "anova"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["independent-t", "kruskal-wallis", "effect-size", "significant-but-matters"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "One-way ANOVA compares the average outcome across three or more independent groups.\n\nIt asks whether at least one group mean differs from the others." },
      { kind: "p", h: "The research question it answers", body: "Are three or more groups different on a continuous outcome?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: continuous or approximately continuous",
        "Grouping variable type: categorical with three or more groups",
        "Number of groups: three or more",
        "Same people or different people: usually different people",
        "Typical design: compare multiple groups or conditions"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have one grouping variable with three or more categories.",
        "You want to compare mean outcomes across groups.",
        "The groups are independent."
      ]},
      { kind: "l", h: "When to pause", body: [
        "You only have two groups, where a t-test may be enough.",
        "The same people appear in multiple conditions.",
        "The outcome is ordinal, very skewed, or has major outliers.",
        "You need to know exactly which groups differ but have not planned follow-up tests."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Observations should be independent.",
        "Outcome should be reasonably continuous.",
        "Residuals should be roughly normal, especially for small samples.",
        "Variances should be reasonably similar across groups."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Put one participant or observation per row.",
        "Choose one continuous outcome column.",
        "Choose one group column with three or more categories.",
        "Inspect group means, SDs, and sample sizes.",
        "Run the ANOVA.",
        "If the overall ANOVA is statistically significant, run follow-up comparisons to learn which groups differ."
      ]},
      { kind: "code", h: "Python", body: "import statsmodels.api as sm\nimport statsmodels.formula.api as smf\nfrom statsmodels.stats.multicomp import pairwise_tukeyhsd\n\nsub = df[[\"revision_quality_score\", \"feedback_condition\"]].dropna()\n\nsub.groupby(\"feedback_condition\")[\"revision_quality_score\"].describe()\n\nmodel = smf.ols(\n    \"revision_quality_score ~ C(feedback_condition)\",\n    data=sub\n).fit()\n\nanova_table = sm.stats.anova_lm(model, typ=2)\nanova_table\n\nposthoc = pairwise_tukeyhsd(\n    endog=sub[\"revision_quality_score\"],\n    groups=sub[\"feedback_condition\"]\n)\nposthoc" },
      { kind: "p", h: "Reading the result", body: "Read the ANOVA p-value as the \"is there any group difference somewhere?\" result. Use the post-hoc table only after that to discuss which group pairs differ." },
      { kind: "l", h: "What the output usually includes", body: [
        "group means and SDs",
        "F statistic",
        "degrees of freedom",
        "p-value",
        "sometimes post-hoc comparisons"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The main ANOVA p-value tells you whether there is evidence that at least one group mean differs.\n\nIt does not automatically tell you which groups differ. For that, you need planned contrasts or post-hoc comparisons." },
      { kind: "p", h: "Effect size to report alongside", body: "Often use eta squared, partial eta squared, or omega squared." },
      { kind: "p", h: "Tiny example", body: "You compare final writing scores across three groups:\n\n- no AI feedback\n- optional AI feedback\n- structured AI feedback\n\nOne-way ANOVA tests whether average writing scores differ somewhere among the three groups." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Seeing a significant ANOVA and saying every group is different from every other group.\n\nANOVA only tells you there is some difference among the group means." },
      { kind: "p", h: "How to report it", body: "A one-way ANOVA indicated that revision-quality scores differed by feedback condition, F(df1, df2) = __, p = __. Follow-up comparisons showed that __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that average outcomes differ across the groups if the result supports that." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "ANOVA alone does not identify which groups differ, prove causality, or show practical importance." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are my groups independent?",
        "Do I need post-hoc tests?",
        "What effect size should I report?",
        "Should I use Kruskal-Wallis instead?",
        "Are unequal variances a problem?"
      ]},
      { kind: "quote", body: "One-way ANOVA compares means across three or more groups and tells you whether some group difference exists." }
    ]
  },
  {
    id: "chi-square",
    title: "Chi-square test",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Examines whether two categorical variables are related.",
    tags: ["categorical", "association", "counts", "contingency-table"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["logistic-regression", "descriptive-table"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A chi-square test examines whether two categorical variables are related.\n\nIt compares the counts you observed with the counts you would expect if the variables were unrelated." },
      { kind: "p", h: "The research question it answers", body: "Are two categorical variables associated?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: categorical",
        "Predictor/grouping variable type: categorical",
        "Number of groups/categories: two or more",
        "Same people or different people: usually independent observations",
        "Typical design: contingency table"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have counts or frequencies.",
        "Both variables are categorical.",
        "You want to know whether category membership is related across variables."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Your cells have very small expected counts.",
        "Your observations are not independent.",
        "Your data are percentages without raw counts.",
        "You want to predict a binary outcome while controlling for other variables."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Observations should be independent.",
        "Data should be counts, not only percentages.",
        "Expected cell counts should usually not be too small."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Put one observation per row.",
        "Choose two categorical columns.",
        "Build a contingency table of counts.",
        "Check that the table contains counts, not percentages.",
        "Run the chi-square test.",
        "Inspect the table itself so you can explain the pattern, not only the p-value."
      ]},
      { kind: "code", h: "Python", body: "import pandas as pd\nfrom scipy import stats\n\ntable = pd.crosstab(df[\"ai_tool_use\"], df[\"course_completion\"])\ntable\n\nchi2, p, dof, expected = stats.chi2_contingency(table)\n\nchi2, p, dof\npd.DataFrame(expected, index=table.index, columns=table.columns)" },
      { kind: "p", h: "Reading the result", body: "Read the observed table first. The test tells you whether the pattern differs from independence; the table tells you what the pattern actually looks like." },
      { kind: "l", h: "What the output usually includes", body: [
        "contingency table",
        "chi-square statistic",
        "degrees of freedom",
        "p-value",
        "sometimes expected counts"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The p-value tells you whether the observed pattern of counts differs from what would be expected if the variables were unrelated." },
      { kind: "p", h: "Effect size to report alongside", body: "Often use Cramer's V or phi for 2x2 tables." },
      { kind: "p", h: "Tiny example", body: "You want to know whether completion status differs by AI-tool use group.\n\nVariables:\n\n- AI tool use: used / did not use\n- course completion: completed / did not complete\n\nA chi-square test can examine whether completion status is associated with AI tool use." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using chi-square to compare means.\n\nChi-square is for counts in categories, not average scores." },
      { kind: "p", h: "How to report it", body: "A chi-square test showed an association between AI tool use and course completion, X2(df, N = __) = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that two categorical variables are associated, if the result supports that." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove one category caused the other, and it does not show how large or important the association is without an effect size or table interpretation." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are my data counts or percentages?",
        "Are expected cell counts large enough?",
        "Should I use Fisher's exact test instead?",
        "Should I use logistic regression if I need controls?",
        "What effect size should I report?"
      ]},
      { kind: "quote", body: "Chi-square checks whether two categorical variables are related by comparing observed counts to expected counts." }
    ]
  },
  {
    id: "pearson",
    title: "Pearson correlation",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Measures the strength and direction of a linear relationship between two continuous variables.",
    tags: ["associate", "continuous", "correlation", "scatterplot"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["spearman", "correlation-not-causation", "linear-regression"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Pearson correlation measures the strength and direction of a linear relationship between two continuous variables.\n\nIt tells you whether higher values of one variable tend to go with higher or lower values of another." },
      { kind: "p", h: "The research question it answers", body: "Are two continuous variables linearly related?" },
      { kind: "l", h: "Data situation", body: [
        "Variable types: two continuous or approximately continuous variables",
        "Relationship type: linear",
        "Same people or different people: each case has both variables",
        "Typical design: association between two measured variables"
      ]},
      { kind: "l", h: "When to use it", body: [
        "Both variables are numeric and approximately continuous.",
        "You want to measure linear association.",
        "A scatterplot suggests a roughly straight-line pattern."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Variables are ordinal or rank-like.",
        "The relationship is curved.",
        "There are extreme outliers.",
        "The data are skewed.",
        "You are tempted to make a causal claim."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Relationship should be roughly linear.",
        "Extreme outliers can distort the correlation.",
        "Variables should be measured at an appropriate numeric level.",
        "Cases should be independent."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Choose two continuous or approximately continuous columns.",
        "Drop rows missing either variable.",
        "Make a scatterplot or at least inspect the relationship before trusting the coefficient.",
        "Run Pearson correlation."
      ]},
      { kind: "code", h: "Python", body: "from scipy import stats\n\nsub = df[[\"ai_tool_minutes\", \"revision_quality_score\"]].dropna()\n\nsub[[\"ai_tool_minutes\", \"revision_quality_score\"]].describe()\nsub.plot.scatter(x=\"ai_tool_minutes\", y=\"revision_quality_score\")\n\nr, p = stats.pearsonr(\n    sub[\"ai_tool_minutes\"],\n    sub[\"revision_quality_score\"]\n)\n\nr, p" },
      { kind: "p", h: "Reading the result", body: "Read the sign of r, then the size of r, then the p-value. If a few points drive the scatterplot, the correlation may be fragile." },
      { kind: "l", h: "What the output usually includes", body: [
        "correlation coefficient, r",
        "p-value",
        "sometimes confidence interval"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The correlation coefficient ranges from -1 to +1.\n\n- Positive: higher X tends to go with higher Y.\n- Negative: higher X tends to go with lower Y.\n- Near zero: little linear relationship." },
      { kind: "p", h: "Effect size to report alongside", body: "The correlation coefficient itself is an effect size." },
      { kind: "p", h: "Tiny example", body: "You examine whether time spent using an AI writing tool is related to final revision-quality score.\n\nPearson correlation can summarize whether students who spend more time using the tool also tend to have higher revision-quality scores, assuming the relationship is roughly linear." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Saying \"time using the tool caused higher revision scores\" from a correlation.\n\nCorrelation does not establish causation." },
      { kind: "p", h: "How to report it", body: "Time spent using the AI writing tool was positively correlated with revision-quality score, r = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that two variables are linearly associated." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove causation, direction, or mechanism." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are my variables appropriate for Pearson correlation?",
        "Did I check a scatterplot?",
        "Are outliers driving the relationship?",
        "Should I use Spearman correlation instead?"
      ]},
      { kind: "quote", body: "Pearson correlation summarizes the strength and direction of a linear relationship between two numeric variables." }
    ]
  },
  {
    id: "spearman",
    title: "Spearman correlation",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Measures whether two variables move together in a consistent ranked order.",
    tags: ["associate", "ordinal", "ranks", "non-parametric", "correlation"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["pearson", "parametric-vs-nonparametric", "likert-item-scale", "correlation-not-causation"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Spearman correlation measures whether two variables move together in a consistent ranked order.\n\nIt is useful when variables are ordinal, skewed, or not safely treated as normally distributed." },
      { kind: "p", h: "The research question it answers", body: "Do higher ranks on one variable tend to go with higher or lower ranks on another?" },
      { kind: "l", h: "Data situation", body: [
        "Variable types: ordinal, ranked, or continuous but non-normal/skewed",
        "Relationship type: monotonic",
        "Same people or different people: each case has both variables",
        "Typical design: association when Pearson assumptions are questionable"
      ]},
      { kind: "l", h: "When to use it", body: [
        "Variables are ordinal or rank-like.",
        "Likert-type variables are involved.",
        "The relationship is monotonic but not necessarily linear.",
        "Outliers or skew make Pearson correlation less appropriate."
      ]},
      { kind: "l", h: "When to pause", body: [
        "You need to model prediction with controls.",
        "The relationship is not monotonic.",
        "There are many tied ranks.",
        "You are tempted to interpret it causally."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Relationship should be monotonic: as one variable increases, the other tends to increase or decrease consistently.",
        "Cases should be independent.",
        "Variables should be at least ordinal."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Choose two ordinal, ranked, skewed, or non-normal variables.",
        "Drop rows missing either variable.",
        "Check whether the relationship generally moves in one direction.",
        "Run Spearman correlation."
      ]},
      { kind: "code", h: "Python", body: "from scipy import stats\n\nsub = df[[\"ai_usefulness_rating\", \"learning_confidence\"]].dropna()\n\nsub[[\"ai_usefulness_rating\", \"learning_confidence\"]].describe()\nsub.plot.scatter(x=\"ai_usefulness_rating\", y=\"learning_confidence\")\n\nrho, p = stats.spearmanr(\n    sub[\"ai_usefulness_rating\"],\n    sub[\"learning_confidence\"]\n)\n\nrho, p" },
      { kind: "p", h: "Reading the result", body: "Read rho like a rank-based correlation. It tells you whether higher values on one variable tend to go with higher or lower values on the other." },
      { kind: "l", h: "What the output usually includes", body: [
        "Spearman's rho",
        "p-value",
        "sometimes confidence interval"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Spearman's rho ranges from -1 to +1.\n\nIt is interpreted like a correlation, but based on ranks rather than raw values." },
      { kind: "p", h: "Effect size to report alongside", body: "Spearman's rho itself is an effect size." },
      { kind: "p", h: "Tiny example", body: "You examine whether students who rate AI tutor usefulness higher also tend to report higher learning confidence.\n\nBecause both variables are Likert-type ratings, Spearman correlation may be more appropriate than Pearson." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using Pearson correlation automatically for every pair of numeric-looking variables.\n\nA 1-to-5 rating is numeric in a spreadsheet, but that does not mean Pearson is always the best fit." },
      { kind: "p", h: "How to report it", body: "Perceived AI tutor usefulness was positively associated with learning confidence, Spearman's rho = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that higher ranks on one variable tend to align with higher or lower ranks on another." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove causation, and it does not model complex prediction with controls." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are these variables ordinal?",
        "Is the relationship monotonic?",
        "Are there many tied values?",
        "Should I report Pearson and Spearman as a robustness check?"
      ]},
      { kind: "quote", body: "Spearman correlation asks whether two variables move together in rank order." }
    ]
  },
  {
    id: "linear-regression",
    title: "Simple linear regression",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Models the relationship between one predictor and one continuous outcome.",
    tags: ["regression", "prediction", "continuous", "linear"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["pearson", "multiple-regression", "correlation-not-causation"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Simple linear regression models the relationship between one predictor and one continuous outcome.\n\nIt gives an equation for predicting the outcome from the predictor." },
      { kind: "p", h: "The research question it answers", body: "Can one variable predict a continuous outcome?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: continuous or approximately continuous",
        "Predictor variable type: continuous or binary/categorical coded appropriately",
        "Number of predictors: one",
        "Typical design: prediction or association"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have one main predictor.",
        "The outcome is numeric.",
        "You want to estimate how much the outcome changes as the predictor changes.",
        "A linear relationship is reasonable."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The outcome is binary or categorical.",
        "The relationship is strongly curved.",
        "Outliers are influential.",
        "You need to control for other variables.",
        "You want causal claims without causal design."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Relationship should be roughly linear.",
        "Residuals should behave reasonably.",
        "Extreme outliers should be checked.",
        "Observations should be independent."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Choose one continuous outcome column.",
        "Choose one predictor column.",
        "Inspect the scatterplot.",
        "Fit the regression model.",
        "Read the slope, confidence interval, p-value, and R-squared."
      ]},
      { kind: "code", h: "Python", body: "import statsmodels.formula.api as smf\n\nsub = df[[\"revision_quality_score\", \"ai_feedback_interactions\"]].dropna()\n\nsub.plot.scatter(\n    x=\"ai_feedback_interactions\",\n    y=\"revision_quality_score\"\n)\n\nmodel = smf.ols(\n    \"revision_quality_score ~ ai_feedback_interactions\",\n    data=sub\n).fit()\n\nmodel.summary()\nmodel.conf_int()" },
      { kind: "p", h: "Reading the result", body: "Read the coefficient for ai_feedback_interactions. It estimates the expected change in revision-quality score for one more feedback interaction, assuming the linear model is reasonable." },
      { kind: "l", h: "What the output usually includes", body: [
        "intercept",
        "slope coefficient",
        "standard error",
        "t statistic",
        "p-value",
        "confidence interval",
        "R-squared"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The slope tells you the expected change in the outcome for a one-unit increase in the predictor.\n\nR-squared tells you how much variation in the outcome is explained by the model." },
      { kind: "p", h: "Effect size to report alongside", body: "The slope, confidence interval, and R-squared are key companions." },
      { kind: "p", h: "Tiny example", body: "You use the number of AI feedback interactions to predict final revision-quality score.\n\nSimple regression estimates how much revision-quality score changes, on average, for each additional AI feedback interaction." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking \"predict\" means \"cause.\"\n\nRegression can predict without proving causation." },
      { kind: "p", h: "How to report it", body: "A simple linear regression showed that AI feedback interactions predicted revision-quality score, b = __, SE = __, p = __, R2 = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that the predictor is associated with the outcome in a linear predictive model." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove causality, especially if the design is observational." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is my outcome appropriate for linear regression?",
        "Did I check a scatterplot?",
        "Are outliers influencing the slope?",
        "Do I need control variables?",
        "Is the relationship linear?"
      ]},
      { kind: "quote", body: "Simple linear regression predicts a continuous outcome from one predictor." }
    ]
  },
  {
    id: "multiple-regression",
    title: "Multiple linear regression",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Predicts a continuous outcome using two or more predictors.",
    tags: ["regression", "prediction", "continuous", "covariates", "controls"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["linear-regression", "correlation-not-causation", "researcher-degrees-of-freedom"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Multiple linear regression predicts a continuous outcome using two or more predictors.\n\nIt helps estimate the association between one predictor and the outcome while accounting for other variables in the model." },
      { kind: "p", h: "The research question it answers", body: "Can multiple variables predict a continuous outcome, and what is the association of each predictor while controlling for the others?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: continuous or approximately continuous",
        "Predictor variable type: continuous, binary, or categorical coded appropriately",
        "Number of predictors: two or more",
        "Typical design: prediction, adjustment, or exploratory explanation"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have a continuous outcome.",
        "You want to include multiple predictors.",
        "You need to adjust for covariates such as prior score or demographic variables.",
        "You want to estimate unique associations."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The outcome is not continuous.",
        "Predictors are highly correlated with each other.",
        "Sample size is small for the number of predictors.",
        "Important confounders are missing.",
        "You are using controls to claim causality too casually."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Outcome should be appropriate for linear modeling.",
        "Relationships should be roughly linear.",
        "Residuals should behave reasonably.",
        "Observations should be independent.",
        "Multicollinearity should be checked."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Choose one continuous outcome column.",
        "Choose the predictors you can justify theoretically or from the study design.",
        "Code categorical predictors clearly.",
        "Check missing data and sample size before adding too many predictors.",
        "Fit the model.",
        "Interpret each coefficient as \"holding the other variables in this model constant.\""
      ]},
      { kind: "code", h: "Python", body: "import statsmodels.formula.api as smf\n\nsub = df[[\n    \"final_writing_score\",\n    \"ai_feedback_interactions\",\n    \"prior_writing_score\",\n    \"course_section\"\n]].dropna()\n\nmodel = smf.ols(\n    \"final_writing_score ~ ai_feedback_interactions + prior_writing_score + C(course_section)\",\n    data=sub\n).fit()\n\nmodel.summary()\nmodel.conf_int()" },
      { kind: "p", h: "Reading the result", body: "Read the coefficient for your focal predictor first, then ask whether the covariates are conceptually appropriate. Python can fit a model with many controls, but it cannot decide whether those controls make causal sense." },
      { kind: "l", h: "What the output usually includes", body: [
        "coefficients for each predictor",
        "standard errors",
        "p-values",
        "confidence intervals",
        "R-squared or adjusted R-squared"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Each coefficient estimates the expected change in the outcome associated with that predictor, holding the other variables in the model constant." },
      { kind: "p", h: "Effect size to report alongside", body: "Useful companions include coefficients with confidence intervals, standardized coefficients if appropriate, and R-squared." },
      { kind: "p", h: "Tiny example", body: "You predict final writing score using:\n\n- number of AI feedback interactions\n- prior writing score\n- English language background\n- course section\n\nMultiple regression can estimate whether AI feedback interactions are associated with final writing score after adjusting for prior writing score and other variables." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking \"controlling for variables\" automatically makes the result causal.\n\nControls help, but they do not guarantee that all alternative explanations are handled." },
      { kind: "p", h: "How to report it", body: "In a multiple linear regression predicting final writing score, AI feedback interactions were positively associated with final score after controlling for prior writing score, b = __, SE = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that a predictor is associated with the outcome while accounting for other variables included in the model." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove causality unless the design and assumptions support a causal interpretation." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Which covariates should be included?",
        "Is my sample large enough?",
        "Are predictors too correlated?",
        "Is the model overfitted?",
        "What causal language is justified?"
      ]},
      { kind: "quote", body: "Multiple regression estimates prediction with several variables, but controls are not magic." }
    ]
  },
  {
    id: "logistic-regression",
    title: "Logistic regression",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Predicts a binary outcome such as yes/no, completed/not completed, or pass/fail.",
    tags: ["regression", "binary", "odds-ratio", "prediction"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["chi-square", "multiple-regression"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Logistic regression predicts a binary outcome, such as yes/no, completed/not completed, or pass/fail.\n\nInstead of predicting an average score, it predicts the odds or probability of an event." },
      { kind: "p", h: "The research question it answers", body: "What predicts whether an outcome happens or does not happen?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: binary",
        "Predictor variable type: continuous, binary, or categorical coded appropriately",
        "Number of predictors: one or more",
        "Typical design: predicting event likelihood"
      ]},
      { kind: "l", h: "When to use it", body: [
        "The outcome has two categories.",
        "You want to model predictors of an event.",
        "You may need to include covariates."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The outcome is continuous.",
        "One category is very rare.",
        "Sample size is small.",
        "You are unsure how to interpret odds ratios.",
        "You want causal claims without causal design."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Outcome should be binary.",
        "Observations should be independent.",
        "Predictors should be coded correctly.",
        "There should be enough cases in both outcome categories.",
        "Continuous predictors should have a reasonable relationship with the log odds."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Code the outcome as binary, usually 0/1.",
        "Choose predictors that make sense for the research question.",
        "Check how many cases are in each outcome category.",
        "Fit the logistic regression.",
        "Convert coefficients to odds ratios for interpretation."
      ]},
      { kind: "code", h: "Python", body: "import numpy as np\nimport statsmodels.formula.api as smf\n\nsub = df[[\n    \"completed_module\",\n    \"prior_confidence\",\n    \"reminders\",\n    \"course_section\"\n]].dropna()\n\n# `completed_module` should be coded 0 = no and 1 = yes.\nsub[\"completed_module\"].value_counts()\n\nmodel = smf.logit(\n    \"completed_module ~ prior_confidence + reminders + C(course_section)\",\n    data=sub\n).fit()\n\nodds_ratios = np.exp(model.params)\nodds_ratio_ci = np.exp(model.conf_int())\n\nmodel.summary()\nodds_ratios\nodds_ratio_ci" },
      { kind: "p", h: "Reading the result", body: "Read odds ratios carefully. An odds ratio above 1 means higher odds of the event, not \"higher probability by that many points.\"" },
      { kind: "l", h: "What the output usually includes", body: [
        "coefficients in log-odds units",
        "odds ratios",
        "standard errors",
        "p-values",
        "confidence intervals",
        "model fit information"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Odds ratios are often easier to interpret than raw logistic coefficients.\n\nAn odds ratio above 1 means higher odds of the event. An odds ratio below 1 means lower odds. An odds ratio of 1 means no difference in odds." },
      { kind: "p", h: "Effect size to report alongside", body: "Odds ratio with confidence interval." },
      { kind: "p", h: "Tiny example", body: "You study whether students complete an optional AI practice module.\n\nOutcome:\n\ncompleted module: yes/no\n\nPredictors:\n\n- prior confidence\n- course section\n- number of reminders received\n\nLogistic regression can model which variables are associated with completion." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Interpreting odds ratios as if they are the same as probabilities.\n\nOdds and probabilities are related, but they are not identical." },
      { kind: "p", h: "How to report it", body: "A logistic regression predicting module completion showed that prior confidence was associated with higher odds of completion, OR = __, 95% CI [__, __], p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that predictors are associated with the odds of a binary outcome." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove causation without appropriate design and assumptions." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is my outcome binary?",
        "Are there enough events?",
        "How should I interpret odds ratios?",
        "Should I report predicted probabilities?",
        "Which covariates should be included?"
      ]},
      { kind: "quote", body: "Logistic regression predicts the odds of a yes/no outcome." }
    ]
  },
  {
    id: "mann-whitney",
    title: "Mann-Whitney U test",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Compares two independent groups using ranks rather than raw means.",
    tags: ["non-parametric", "two-groups", "ranks", "ordinal"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["independent-t", "parametric-vs-nonparametric"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "The Mann-Whitney U test compares two independent groups using ranks rather than raw means.\n\nIt is often used as a non-parametric alternative to the independent samples t-test." },
      { kind: "p", h: "The research question it answers", body: "Do two independent groups tend to have different outcome values or ranks?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: ordinal, skewed, or continuous but not suitable for t-test",
        "Grouping variable type: two independent groups",
        "Number of groups: two",
        "Same people or different people: different people"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have two independent groups.",
        "The outcome is ordinal or not normally distributed.",
        "Outliers make a mean comparison questionable.",
        "You want a rank-based comparison."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The same people are measured twice.",
        "You need to compare more than two groups.",
        "You want to compare means specifically.",
        "The distributions differ in shape in ways that complicate interpretation."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Observations should be independent.",
        "Outcome should be at least ordinal.",
        "Groups should be independent.",
        "Interpret carefully if group distributions have very different shapes."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Put one participant or observation per row.",
        "Choose an ordinal, skewed, or rank-appropriate outcome.",
        "Choose a two-group independent grouping variable.",
        "Split the outcome into the two groups.",
        "Run the Mann-Whitney U test.",
        "Report medians and IQRs so the reader can see the data pattern."
      ]},
      { kind: "code", h: "Python", body: "from scipy import stats\n\nsub = df[[\"ai_usefulness_rating\", \"course_group\"]].dropna()\n\ncourse_a = sub.loc[sub[\"course_group\"] == \"A\", \"ai_usefulness_rating\"]\ncourse_b = sub.loc[sub[\"course_group\"] == \"B\", \"ai_usefulness_rating\"]\n\ncourse_a.describe()\ncourse_b.describe()\n\nresult = stats.mannwhitneyu(\n    course_a,\n    course_b,\n    alternative=\"two-sided\"\n)\nresult" },
      { kind: "p", h: "Reading the result", body: "Read the result as a rank-based group comparison. Be careful about saying \"median difference\" unless the group distributions have similar shapes." },
      { kind: "l", h: "What the output usually includes", body: [
        "U statistic",
        "p-value",
        "sometimes rank summaries"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The test asks whether values from one group tend to be higher or lower in rank than values from the other group." },
      { kind: "p", h: "Effect size to report alongside", body: "Rank-biserial correlation or another rank-based effect size." },
      { kind: "p", h: "Tiny example", body: "You compare AI usefulness ratings between two groups:\n\n- students in Course A\n- students in Course B\n\nBecause usefulness is rated on a 1-to-5 scale, Mann-Whitney U may be more appropriate than an independent t-test." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Saying it compares medians in every situation.\n\nIt is rank-based; the median interpretation is safest when distribution shapes are similar." },
      { kind: "p", h: "How to report it", body: "A Mann-Whitney U test indicated that AI usefulness ratings differed between Course A and Course B, U = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that one independent group tends to have higher or lower ranked outcomes than another." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove causation or automatically describe mean differences." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are my groups independent?",
        "Is this outcome ordinal or skewed?",
        "Should I report medians and IQRs?",
        "What effect size should I report?",
        "Are the group distributions similarly shaped?"
      ]},
      { kind: "quote", body: "Mann-Whitney U compares two independent groups using ranks." }
    ]
  },
  {
    id: "wilcoxon",
    title: "Wilcoxon signed-rank test",
    type: "Method",
    level: "method",
    pathway: "Analysis -> Evidence",
    summary: "Compares two related measurements using ranks.",
    tags: ["non-parametric", "paired", "ranks", "ordinal"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["paired-t", "mann-whitney", "parametric-vs-nonparametric"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "The Wilcoxon signed-rank test compares two related measurements using ranks.\n\nIt is often used as a non-parametric alternative to the paired samples t-test." },
      { kind: "p", h: "The research question it answers", body: "Did the same people tend to change between two related measurements?" },
      { kind: "l", h: "Data situation", body: [
        "Outcome variable type: ordinal, skewed, or continuous but not suitable for paired t-test",
        "Condition type: two related measurements",
        "Number of conditions: two",
        "Same people or different people: same people or matched pairs"
      ]},
      { kind: "l", h: "When to use it", body: [
        "The same people have two scores.",
        "The outcome is ordinal or not normally distributed.",
        "You want a rank-based test of paired differences.",
        "Likert-type paired ratings are involved."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The two groups are independent.",
        "Many paired differences are zero.",
        "You have more than two time points.",
        "You want to estimate a mean difference specifically."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Pairs should be correctly matched.",
        "Differences should be at least ordinal.",
        "Pairs should be independent from other pairs.",
        "Distribution of differences should be reasonably symmetric for classic interpretation."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Put one participant or matched case per row.",
        "Choose the before/after or condition A/condition B columns.",
        "Drop rows missing either measurement.",
        "Inspect how many paired differences are positive, negative, or zero.",
        "Run the Wilcoxon signed-rank test."
      ]},
      { kind: "code", h: "Python", body: "from scipy import stats\n\nsub = df[[\"confidence_before\", \"confidence_after\"]].dropna().copy()\nsub[\"change\"] = sub[\"confidence_after\"] - sub[\"confidence_before\"]\n\nsub[\"change\"].describe()\n(sub[\"change\"] > 0).sum(), (sub[\"change\"] < 0).sum(), (sub[\"change\"] == 0).sum()\n\nresult = stats.wilcoxon(\n    sub[\"confidence_after\"],\n    sub[\"confidence_before\"]\n)\nresult" },
      { kind: "p", h: "Reading the result", body: "Read the direction of change before reading the p-value. If many changes are exactly zero, ask whether the test is still appropriate for your design." },
      { kind: "l", h: "What the output usually includes", body: [
        "W statistic or signed-rank statistic",
        "p-value",
        "sometimes median difference or rank summaries"
      ]},
      { kind: "p", h: "How to interpret the output", body: "The test asks whether the paired differences tend to be positive or negative rather than centered around no change." },
      { kind: "p", h: "Effect size to report alongside", body: "Rank-biserial correlation is a common companion." },
      { kind: "p", h: "Tiny example", body: "Students rate their confidence using AI for teaching before and after a workshop on a 1-to-5 scale.\n\nThe Wilcoxon signed-rank test can examine whether confidence ratings tend to increase after the workshop." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using Mann-Whitney U for paired data.\n\nIf the same people are measured before and after, use a paired method." },
      { kind: "p", h: "How to report it", body: "A Wilcoxon signed-rank test indicated that AI teaching confidence ratings increased after the workshop, W = __, p = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim that paired scores tended to increase or decrease, if the result supports that." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove the workshop caused the change without stronger design evidence." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Are the data paired?",
        "Are there many zero differences?",
        "Should I report medians and IQRs?",
        "What effect size should I report?",
        "Should I use a paired t-test instead?"
      ]},
      { kind: "quote", body: "Wilcoxon signed-rank compares two related measurements using ranks." }
    ]
  },
  {
    id: "cronbach",
    title: "Cronbach's alpha",
    type: "Method",
    level: "method",
    pathway: "Measurement -> Analysis -> Evidence",
    summary: "A measure of internal consistency for a multi-item scale.",
    tags: ["reliability", "scale", "survey", "internal-consistency"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["scale", "composite-score", "reliability", "validity", "spearman-brown"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Cronbach's alpha is a measure of internal consistency for a multi-item scale.\n\nIt asks whether items intended to measure the same construct hang together." },
      { kind: "p", h: "The research question it answers", body: "Do these survey items appear to work together as one scale?" },
      { kind: "l", h: "Data situation", body: [
        "Data type: multiple items intended to measure one construct",
        "Usually: three or more items",
        "Typical use: survey scale reliability"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have several items intended to measure one construct.",
        "You want to justify combining them into a scale or composite.",
        "The items use compatible response scales."
      ]},
      { kind: "l", h: "When to pause", body: [
        "There are only two items.",
        "Items measure different constructs.",
        "Items are not coded in the same direction.",
        "A high alpha is caused by redundant items.",
        "You are using alpha as proof of validity."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Items should be intended to measure the same construct.",
        "Items should be coded in the same direction.",
        "The scale should be conceptually coherent.",
        "Alpha is sensitive to the number of items."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Select only the items intended to measure the same construct.",
        "Reverse-code any items that point in the opposite direction.",
        "Check missing data and decide whether to use complete cases or another rule.",
        "Calculate alpha.",
        "Inspect item content; do not let the coefficient replace conceptual judgment."
      ]},
      { kind: "code", h: "Python", body: "items = df[[\n    \"ai_confidence_1\",\n    \"ai_confidence_2\",\n    \"ai_confidence_3\",\n    \"ai_confidence_4\",\n    \"ai_confidence_5\"\n]].dropna()\n\nk = items.shape[1]\nitem_variances = items.var(axis=0, ddof=1)\ntotal_scores = items.sum(axis=1)\n\nalpha = (k / (k - 1)) * (\n    1 - item_variances.sum() / total_scores.var(ddof=1)\n)\n\nalpha" },
      { kind: "p", h: "Reading the result", body: "Read alpha as an internal-consistency check. Before averaging the items, make sure the item wording really belongs to the same construct." },
      { kind: "l", h: "What the output usually includes", body: [
        "alpha coefficient, often from 0 to 1",
        "sometimes item-total statistics",
        "sometimes alpha if item deleted"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Higher alpha generally suggests stronger internal consistency, but very high alpha may mean items are repetitive.\n\nCommon rough conventions:\n\n- around .70 acceptable\n- around .80 good\n- around .90 very high\n\nThese are conventions, not laws." },
      { kind: "p", h: "Effect size to report alongside", body: "Alpha itself is the reliability coefficient. Also inspect item content and item-total relationships." },
      { kind: "p", h: "Tiny example", body: "You create a five-item AI teaching confidence scale.\n\nCronbach's alpha helps you check whether the five items hang together well enough to average into one score." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking alpha proves the scale measures the right construct.\n\nAlpha is about consistency, not validity." },
      { kind: "p", h: "How to report it", body: "The five-item AI teaching confidence scale showed acceptable internal consistency, Cronbach's alpha = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim the items showed a certain level of internal consistency." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Alpha does not prove the scale is valid, unidimensional, or appropriate for every population." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is alpha appropriate for these items?",
        "Are there enough items?",
        "Are items coded in the same direction?",
        "Should I inspect item-total correlations?",
        "Is a different reliability estimate better?"
      ]},
      { kind: "quote", body: "Cronbach's alpha checks whether several items hang together, not whether they measure the right thing." }
    ]
  },
  {
    id: "spearman-brown",
    title: "Spearman-Brown coefficient",
    type: "Method",
    level: "method",
    pathway: "Measurement -> Analysis -> Evidence",
    summary: "Estimates reliability for a two-item scale or split-half reliability.",
    tags: ["reliability", "two-item", "scale", "internal-consistency"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["cronbach", "composite-score", "reliability", "validity"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "The Spearman-Brown coefficient is often used to estimate reliability for a two-item scale or split-half reliability.\n\nFor our beginner use, it is most helpful as the two-item companion to internal consistency." },
      { kind: "p", h: "The research question it answers", body: "Do two items work together consistently enough to be treated as a brief composite?" },
      { kind: "l", h: "Data situation", body: [
        "Data type: two related items intended to measure one construct",
        "Typical use: reliability for two-item composites"
      ]},
      { kind: "l", h: "When to use it", body: [
        "You have exactly two items intended to measure one construct.",
        "You want a reliability estimate more suitable than Cronbach's alpha for two items.",
        "The two items are conceptually linked."
      ]},
      { kind: "l", h: "When to pause", body: [
        "The two items measure different constructs.",
        "Items are not coded in the same direction.",
        "The two-item measure is too thin for the construct.",
        "You are using reliability as proof of validity."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Items should be conceptually related.",
        "Items should be scored in the same direction.",
        "The two-item measure should be appropriate for the research purpose."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Select the two items.",
        "Make sure both items are coded in the same direction.",
        "Check the raw item correlation.",
        "Apply the Spearman-Brown formula.",
        "Decide whether a two-item composite is strong enough for the claim you want to make."
      ]},
      { kind: "code", h: "Python", body: "sub = df[[\"planning_support_1\", \"planning_support_2\"]].dropna()\n\nr = sub[\"planning_support_1\"].corr(sub[\"planning_support_2\"])\nspearman_brown = (2 * r) / (1 + r)\n\nr, spearman_brown" },
      { kind: "p", h: "Reading the result", body: "Read the raw item correlation alongside the Spearman-Brown coefficient. If the two items are weakly related, a two-item composite may be too thin." },
      { kind: "l", h: "What the output usually includes", body: [
        "Spearman-Brown reliability coefficient",
        "sometimes the raw correlation between two items"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Higher values suggest stronger consistency between the two items after adjustment.\n\nInterpret using caution because two-item measures are often limited." },
      { kind: "p", h: "Effect size to report alongside", body: "The coefficient itself is the reliability estimate. Also report or inspect the item correlation when useful." },
      { kind: "p", h: "Tiny example", body: "You measure planning support with two survey items:\n\n- The AI tutor helped me organize my ideas.\n- The AI tutor helped me develop a concrete plan.\n\nBecause there are only two items, Spearman-Brown may be used instead of Cronbach's alpha to report internal consistency." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using Cronbach's alpha for every composite, even when there are only two items." },
      { kind: "p", h: "How to report it", body: "The two-item planning support composite showed acceptable internal consistency, Spearman-Brown coefficient = __." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim the two items showed a certain level of consistency." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "It does not prove the construct is fully captured or validly measured." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is a two-item composite acceptable?",
        "Should I report the item correlation too?",
        "Would it be better to keep items separate?",
        "Is Spearman-Brown expected in my field?"
      ]},
      { kind: "quote", body: "Spearman-Brown is useful when two items are meant to work together as a tiny scale." }
    ]
  },
  {
    id: "cohen-kappa",
    title: "Cohen's kappa",
    type: "Method",
    level: "method",
    pathway: "Measurement -> Analysis -> Evidence",
    summary: "Measures agreement between two coders beyond what would be expected by chance.",
    tags: ["reliability", "inter-rater", "coding", "categorical"],
    source: "../what_the_stat_content/statistical_method_cards_v1.md",
    related: ["codebook", "coder-agreement", "reliability", "validity", "kappa-vs-percent"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Cohen's kappa measures agreement between two coders beyond what would be expected by chance.\n\nIt is used for categorical coding." },
      { kind: "p", h: "The research question it answers", body: "Do two coders agree consistently beyond chance?" },
      { kind: "l", h: "Data situation", body: [
        "Data type: categorical codes",
        "Number of coders: two",
        "Typical use: inter-rater reliability"
      ]},
      { kind: "l", h: "When to use it", body: [
        "Two coders independently code the same items.",
        "Codes are categorical.",
        "You want chance-corrected agreement."
      ]},
      { kind: "l", h: "When to pause", body: [
        "Codes are ordinal and disagreement severity matters.",
        "There are more than two coders.",
        "One category is extremely common.",
        "Coders were not independent.",
        "The codebook is still unstable."
      ]},
      { kind: "l", h: "Assumptions to check", body: [
        "Coders should code independently.",
        "The same units should be coded by both coders.",
        "Categories should be clearly defined.",
        "The coding unit should be stable."
      ]},
      { kind: "l", h: "How to do it in Python", body: [
        "Put one coded unit per row.",
        "Use one column for coder 1's code and one column for coder 2's code.",
        "Make sure both coders coded the same units.",
        "Build a disagreement table.",
        "Calculate Cohen's kappa.",
        "Review disagreements to improve the codebook."
      ]},
      { kind: "code", h: "Python", body: "import pandas as pd\nfrom sklearn.metrics import cohen_kappa_score\n\nsub = df[[\"coder1_code\", \"coder2_code\"]].dropna()\n\npd.crosstab(sub[\"coder1_code\"], sub[\"coder2_code\"])\n\nkappa = cohen_kappa_score(\n    sub[\"coder1_code\"],\n    sub[\"coder2_code\"]\n)\n\nkappa" },
      { kind: "p", h: "Reading the result", body: "Read kappa together with the crosstab. A single coefficient is helpful, but the disagreement pattern tells you what the codebook needs to clarify." },
      { kind: "l", h: "What the output usually includes", body: [
        "kappa coefficient",
        "sometimes percent agreement",
        "sometimes confidence interval"
      ]},
      { kind: "p", h: "How to interpret the output", body: "Kappa ranges roughly from -1 to 1.\n\n- 1 means perfect agreement.\n- 0 means agreement no better than chance.\n- Negative values mean worse than chance.\n\nCommon interpretation bands exist, but they are guidelines rather than universal truth." },
      { kind: "p", h: "Effect size to report alongside", body: "Kappa itself is the reliability coefficient. Percent agreement is often reported alongside it for readability." },
      { kind: "p", h: "Tiny example", body: "Two coders classify AI tutor transcript segments as:\n\n- Yes: student applied feedback\n- Partial: student partly applied feedback\n- No: student did not apply feedback\n\nCohen's kappa estimates whether their agreement is stronger than chance agreement." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reporting percent agreement only.\n\nPercent agreement is intuitive, but it does not account for chance agreement." },
      { kind: "p", h: "How to report it", body: "Two coders independently coded 25 percent of transcript segments. Inter-rater reliability was substantial, Cohen's kappa = __. Disagreements were resolved through discussion." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can claim the coding showed a certain level of chance-corrected agreement." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Kappa does not prove the coding categories are valid or that the codebook captures the construct well." },
      { kind: "l", h: "Questions to ask your advisor", body: [
        "Is Cohen's kappa appropriate for my code type?",
        "Should I use weighted kappa?",
        "How should I handle more than two coders?",
        "Should I report percent agreement too?",
        "What kappa threshold is acceptable for this project?"
      ]},
      { kind: "quote", body: "Cohen's kappa checks whether two coders agree beyond chance." }
    ]
  }
];
