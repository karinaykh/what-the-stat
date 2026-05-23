window.WTS_COMPARISON_CARDS = [
  {
    id: "ind-vs-paired",
    title: "Independent samples t-test vs paired samples t-test",
    type: "Comparison",
    level: "comparison",
    pathway: "Sample -> Data Type -> Analysis",
    summary: "Both compare two averages, so they sound almost the same.",
    tags: ["t-test", "compare", "pre-post", "two-groups"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["independent-t", "paired-t", "wilcoxon", "mann-whitney", "python-research-workflow"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both compare two averages, so they sound almost the same." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nAre the two scores from different people, or from the same people measured twice?" },
      { kind: "compare", body: [
        { h: "Use independent samples t-test if", items: [
          "You have two separate groups.",
          "Each participant belongs to only one group.",
          "You compare group means on a continuous outcome."
        ]},
        { h: "Use paired samples t-test if", items: [
          "The same participants have two related scores.",
          "You compare before/after, pre/post, or condition A/condition B.",
          "You care about within-person change."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["AI users vs non-users, different students", "Independent samples t-test"],
        ["Confidence before and after a workshop, same students", "Paired samples t-test"],
        ["Matched pairs, such as two similar students paired by prior score", "Paired samples t-test or matched-pair approach"]
      ]},
      { kind: "p", h: "Tiny example", body: "If you compare revision scores for students who used an AI feedback tool and students who did not, use an independent samples t-test.\n\nIf you compare the same students' confidence before and after an AI teaching workshop, use a paired samples t-test." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Seeing \"two groups\" and automatically choosing independent samples t-test.\n\nSometimes the two \"groups\" are actually two measurements from the same people." },
      { kind: "l", h: "What to check before deciding", body: [
        "Does each person appear in one group only?",
        "Does each person have two related scores?",
        "Are missing data removing one side of a pair?",
        "Is the outcome continuous enough for a t-test?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Draw one row of your dataset. If the two scores are in two columns for the same person, think paired. If the group label is one column and each person appears once, think independent." },
      { kind: "quote", body: "Different people means independent; same people twice means paired." }
    ]
  },
  {
    id: "t-vs-mann-whitney",
    title: "Independent samples t-test vs Mann-Whitney U test",
    type: "Comparison",
    level: "comparison",
    pathway: "Data Type -> Analysis",
    summary: "Both compare two independent groups.",
    tags: ["t-test", "mann-whitney", "non-parametric", "two-groups"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["independent-t", "mann-whitney", "mean-vs-median", "parametric-vs-nonparametric", "likert-item-scale"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both compare two independent groups." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nIs my outcome suitable for comparing means, or is it better treated as ordinal/ranked/skewed?" },
      { kind: "compare", body: [
        { h: "Use independent samples t-test if", items: [
          "The outcome is continuous or approximately continuous.",
          "You want to compare means.",
          "The distributions are not extremely strange for your sample size."
        ]},
        { h: "Use Mann-Whitney U test if", items: [
          "The outcome is ordinal, rank-like, or very skewed.",
          "Outliers make the mean feel misleading.",
          "You want a rank-based comparison."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Revision-quality score on a 0-to-100 rubric", "Independent samples t-test may fit"],
        ["1-to-5 usefulness rating from two course groups", "Mann-Whitney U may fit"],
        ["Highly skewed time-on-task with extreme values", "Mann-Whitney U may fit, or transform/model carefully"]
      ]},
      { kind: "p", h: "Tiny example", body: "If AI usefulness is rated from 1 to 5, Mann-Whitney U may be safer than treating the rating like a clean continuous score.\n\nIf final writing score is a broad rubric score, an independent samples t-test may be reasonable." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Thinking non-parametric means \"less serious\" or \"only for bad data.\"\n\nIt simply means the method relies less on mean-and-normality assumptions." },
      { kind: "l", h: "What to check before deciding", body: [
        "Is the outcome a scale score or a single Likert item?",
        "Is the distribution extremely skewed?",
        "Are there outliers that dominate the mean?",
        "Do you want to talk about means or ranked tendency?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Look at the descriptive statistics and a simple plot. If the mean feels like a weird summary, pause before choosing the t-test." },
      { kind: "quote", body: "t-test compares two group means; Mann-Whitney compares two independent groups by ranks." }
    ]
  },
  {
    id: "paired-t-vs-wilcoxon",
    title: "Paired samples t-test vs Wilcoxon signed-rank test",
    type: "Comparison",
    level: "comparison",
    pathway: "Data Type -> Analysis",
    summary: "Both compare two related measurements from the same people.",
    tags: ["paired-t", "wilcoxon", "non-parametric", "pre-post"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["paired-t", "wilcoxon", "missing-data", "parametric-vs-nonparametric"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both compare two related measurements from the same people." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nAre the paired differences suitable for a mean-change test, or should I use a rank-based change test?" },
      { kind: "compare", body: [
        { h: "Use paired samples t-test if", items: [
          "The two measurements are continuous or approximately continuous.",
          "You want to test the average difference.",
          "The difference scores are not extremely skewed or dominated by outliers."
        ]},
        { h: "Use Wilcoxon signed-rank test if", items: [
          "The paired outcome is ordinal or rank-like.",
          "Difference scores are skewed.",
          "A rank-based test better matches the measurement."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Pre/post score on a 100-point test", "Paired samples t-test may fit"],
        ["Pre/post confidence rating from 1 to 5", "Wilcoxon signed-rank may fit"],
        ["Same students, before/after, many no-change responses", "Wilcoxon may fit, but inspect zero differences"]
      ]},
      { kind: "p", h: "Tiny example", body: "If students rate AI teaching confidence from 1 to 5 before and after a workshop, Wilcoxon signed-rank may match the ordinal nature of the rating.\n\nIf students complete a broad knowledge test before and after, paired t-test may be reasonable." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Choosing Mann-Whitney U just because the data are non-parametric.\n\nMann-Whitney is for independent groups. Wilcoxon signed-rank is for paired data." },
      { kind: "l", h: "What to check before deciding", body: [
        "Are the two measurements paired correctly?",
        "Are many participants missing one time point?",
        "Are the difference scores reasonable?",
        "Is the outcome ordinal or continuous?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Create a `change` column and inspect it. The method is about the paired differences, not just the two original columns." },
      { kind: "quote", body: "Paired t-test compares mean change; Wilcoxon signed-rank compares paired change using ranks." }
    ]
  },
  {
    id: "t-vs-anova",
    title: "t-test vs one-way ANOVA",
    type: "Comparison",
    level: "comparison",
    pathway: "Sample -> Analysis",
    summary: "Both compare group means.",
    tags: ["t-test", "anova", "compare", "groups"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["independent-t", "anova", "effect-size", "sig-vs-practical-cmp"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both compare group means." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nHow many independent groups am I comparing?" },
      { kind: "compare", body: [
        { h: "Use t-test if", items: [
          "You compare two groups.",
          "The outcome is continuous or approximately continuous.",
          "You want a direct two-group mean comparison."
        ]},
        { h: "Use one-way ANOVA if", items: [
          "You compare three or more independent groups.",
          "The outcome is continuous or approximately continuous.",
          "You want to know whether any group mean differs."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["AI feedback vs no AI feedback", "t-test"],
        ["No AI vs optional AI vs structured AI", "One-way ANOVA"],
        ["Three course sections compared on final score", "One-way ANOVA"]
      ]},
      { kind: "p", h: "Tiny example", body: "If you have two feedback conditions, a t-test can compare the two means.\n\nIf you have three feedback conditions, ANOVA tests whether there is a difference somewhere among the means." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Running many t-tests for many groups.\n\nThat increases the chance of false positives unless you handle multiple comparisons carefully." },
      { kind: "l", h: "What to check before deciding", body: [
        "How many groups are there?",
        "Are the groups independent?",
        "Is the outcome continuous enough?",
        "If ANOVA is significant, do you need post-hoc comparisons?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Count the categories in your grouping variable.\n\n```python\ndf[\"feedback_condition\"].value_counts()\n```" },
      { kind: "quote", body: "Two independent groups points to t-test; three or more independent groups points to ANOVA." }
    ]
  },
  {
    id: "anova-vs-regression",
    title: "One-way ANOVA vs multiple linear regression",
    type: "Comparison",
    level: "comparison",
    pathway: "Research Question -> Analysis",
    summary: "Both can compare or explain differences in a continuous outcome.",
    tags: ["anova", "regression", "covariates", "predictors"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["anova", "multiple-regression", "researcher-degrees-of-freedom"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both can compare or explain differences in a continuous outcome." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nAm I only comparing group means, or do I need to include multiple predictors/covariates?" },
      { kind: "compare", body: [
        { h: "Use one-way ANOVA if", items: [
          "You have one categorical grouping variable.",
          "You compare the mean outcome across three or more groups.",
          "You do not need to adjust for other variables."
        ]},
        { h: "Use multiple linear regression if", items: [
          "You have a continuous outcome.",
          "You need multiple predictors.",
          "You want to adjust for prior score, course section, demographic variables, or other covariates."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Compare final score across three AI feedback conditions", "One-way ANOVA"],
        ["Compare feedback conditions while adjusting for prior score", "Multiple linear regression"],
        ["Predict final score from AI use, prior score, and course section", "Multiple linear regression"]
      ]},
      { kind: "p", h: "Tiny example", body: "ANOVA can tell you whether final writing scores differ across feedback conditions.\n\nMultiple regression can ask whether feedback condition is associated with final score after accounting for prior writing score." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Thinking adding controls automatically makes the result causal.\n\nControls can help, but they do not magically remove all alternative explanations." },
      { kind: "l", h: "What to check before deciding", body: [
        "Is the outcome continuous?",
        "Is there one grouping variable or several predictors?",
        "Are covariates theoretically justified?",
        "Is the sample large enough for the model?",
        "Are you making a causal claim too casually?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Start with the simpler descriptive question. Then ask whether your claim requires adjustment." },
      { kind: "quote", body: "ANOVA compares groups; regression lets you model a continuous outcome with several predictors." }
    ]
  },
  {
    id: "pearson-vs-spearman",
    title: "Pearson correlation vs Spearman correlation",
    type: "Comparison",
    level: "comparison",
    pathway: "Data Type -> Analysis",
    summary: "Both measure association between two variables and both produce a coefficient between about -1 and +1.",
    tags: ["correlation", "pearson", "spearman", "association"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["pearson", "spearman", "correlation-not-causation", "likert-item-scale"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both measure association between two variables and both produce a coefficient between about -1 and +1." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nIs the relationship linear with continuous variables, or rank-based/ordinal/monotonic?" },
      { kind: "compare", body: [
        { h: "Use Pearson correlation if", items: [
          "Both variables are continuous or approximately continuous.",
          "The relationship is roughly linear.",
          "Outliers are not driving the pattern."
        ]},
        { h: "Use Spearman correlation if", items: [
          "Variables are ordinal or rank-like.",
          "The relationship is monotonic but not necessarily linear.",
          "Outliers or skew make Pearson less appropriate."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Time using AI tool and rubric score, roughly linear", "Pearson"],
        ["Usefulness rating and confidence rating, both 1-to-5", "Spearman may fit"],
        ["Relationship rises steadily but curves", "Spearman may fit"]
      ]},
      { kind: "p", h: "Tiny example", body: "Pearson can summarize whether more AI-tool minutes are linearly related to higher revision scores.\n\nSpearman can summarize whether students who rank the AI tutor as more useful also tend to rank their confidence higher." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Using Pearson just because the values are stored as numbers.\n\nA 1-to-5 rating is numeric in Python, but conceptually it may still be ordinal." },
      { kind: "l", h: "What to check before deciding", body: [
        "Are both variables continuous?",
        "Did you inspect a scatterplot?",
        "Is the relationship roughly linear or only monotonic?",
        "Are outliers driving the result?",
        "Are there many tied ratings?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Make a scatterplot and ask whether a straight-line summary is honest. You can also report both as a robustness check if your advisor agrees." },
      { kind: "quote", body: "Pearson is for linear numeric association; Spearman is for rank-order association." }
    ]
  },
  {
    id: "correlation-vs-regression",
    title: "Correlation vs simple linear regression",
    type: "Comparison",
    level: "comparison",
    pathway: "Research Question -> Analysis",
    summary: "Both describe a relationship between two variables.",
    tags: ["correlation", "regression", "association", "predict"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["pearson", "linear-regression", "correlation-not-causation"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both describe a relationship between two variables." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nDo I only want to summarize association, or do I want to model/predict an outcome from a predictor?" },
      { kind: "compare", body: [
        { h: "Use correlation if", items: [
          "You want a symmetric association between two variables.",
          "You are not treating one variable as the clear outcome.",
          "You want a compact strength-and-direction summary."
        ]},
        { h: "Use simple linear regression if", items: [
          "You have a clear outcome variable.",
          "You have one predictor.",
          "You want a slope: expected change in outcome for a one-unit increase in predictor."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Are AI-tool minutes and revision score related?", "Correlation"],
        ["How much does revision score change per additional AI-tool minute?", "Simple linear regression"],
        ["I need R-squared and a prediction equation", "Simple linear regression"]
      ]},
      { kind: "p", h: "Tiny example", body: "Correlation can say AI-tool minutes and revision quality are positively associated.\n\nRegression can estimate how much revision-quality score is expected to change for each additional AI-tool interaction." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Thinking regression proves causation because the word \"predict\" sounds strong.\n\nPrediction is not the same as causal explanation." },
      { kind: "l", h: "What to check before deciding", body: [
        "Is one variable clearly the outcome?",
        "Do you need a slope?",
        "Is the relationship linear?",
        "Are outliers influential?",
        "Is a causal claim justified by the design?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Write the research question. If it says \"related,\" correlation may fit. If it says \"predicts\" or \"is associated with changes in Y,\" regression may fit." },
      { kind: "quote", body: "Correlation summarizes association; regression models an outcome from a predictor." }
    ]
  },
  {
    id: "chi-vs-logistic",
    title: "Chi-square test vs logistic regression",
    type: "Comparison",
    level: "comparison",
    pathway: "Data Type -> Research Question -> Analysis",
    summary: "Both can involve categorical variables and yes/no outcomes.",
    tags: ["chi-square", "logistic-regression", "categorical", "binary"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["chi-square", "logistic-regression"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both can involve categorical variables and yes/no outcomes." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nAm I testing association between categories, or predicting a binary outcome with predictors/covariates?" },
      { kind: "compare", body: [
        { h: "Use chi-square test if", items: [
          "You have two categorical variables.",
          "You want to know whether category membership is associated.",
          "You are working with a contingency table of counts."
        ]},
        { h: "Use logistic regression if", items: [
          "Your outcome is binary.",
          "You want to model predictors of that outcome.",
          "You need to include covariates or continuous predictors."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["AI use group by completion status table", "Chi-square"],
        ["Predict completion from confidence and reminders", "Logistic regression"],
        ["Binary outcome with controls", "Logistic regression"]
      ]},
      { kind: "p", h: "Tiny example", body: "Chi-square can test whether completion status differs by AI-use group.\n\nLogistic regression can estimate whether prior confidence predicts completion after adjusting for course section." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Using chi-square when you actually need to adjust for other predictors.\n\nChi-square is useful, but it does not handle covariates the way regression does." },
      { kind: "l", h: "What to check before deciding", body: [
        "Is the outcome binary or categorical?",
        "Are you using raw counts?",
        "Do you need covariates?",
        "Are expected cell counts large enough?",
        "Are there enough events for logistic regression?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Start with a contingency table. If your question becomes \"but what about prior score, section, or confidence?\", you may be moving toward logistic regression." },
      { kind: "quote", body: "Chi-square tests category association; logistic regression predicts a yes/no outcome." }
    ]
  },
  {
    id: "linear-vs-logistic",
    title: "Linear regression vs logistic regression",
    type: "Comparison",
    level: "comparison",
    pathway: "Data Type -> Analysis",
    summary: "Both are called regression, and both use predictors.",
    tags: ["regression", "linear", "logistic", "outcome-type"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["linear-regression", "multiple-regression", "logistic-regression", "data-type"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both are called regression, and both use predictors." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nWhat type of outcome variable do I have?" },
      { kind: "compare", body: [
        { h: "Use linear regression if", items: [
          "The outcome is continuous or approximately continuous.",
          "You want to predict a score.",
          "The model estimates changes in the average outcome."
        ]},
        { h: "Use logistic regression if", items: [
          "The outcome is binary.",
          "You want to predict whether something happens.",
          "The model estimates odds or probabilities."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Predict final writing score", "Linear regression"],
        ["Predict completed module: yes/no", "Logistic regression"],
        ["Predict confidence scale score", "Linear regression may fit"],
        ["Predict passed course: yes/no", "Logistic regression"]
      ]},
      { kind: "p", h: "Tiny example", body: "Use linear regression for final writing score.\n\nUse logistic regression for whether a student completed the optional AI practice module." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Treating a yes/no outcome like a normal continuous score.\n\nA binary outcome usually needs a method designed for event likelihood." },
      { kind: "l", h: "What to check before deciding", body: [
        "Is the outcome a score or a yes/no event?",
        "Are the predictor variables coded correctly?",
        "For logistic regression, are there enough events in both categories?",
        "For linear regression, do residuals behave reasonably?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Look at the possible values of the outcome.\n\n```python\ndf[\"outcome_column\"].value_counts()\n```\n\nIf there are only two meaningful categories, think logistic regression." },
      { kind: "quote", body: "Linear regression predicts scores; logistic regression predicts yes/no outcomes." }
    ]
  },
  {
    id: "alpha-vs-spearman-brown",
    title: "Cronbach's alpha vs Spearman-Brown coefficient",
    type: "Comparison",
    level: "comparison",
    pathway: "Measurement -> Analysis",
    summary: "Both are used for internal consistency.",
    tags: ["reliability", "alpha", "spearman-brown", "internal-consistency"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["cronbach", "spearman-brown", "composite-score", "scale", "reliability"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both are used for internal consistency." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nHow many items are in the scale or composite?" },
      { kind: "compare", body: [
        { h: "Use Cronbach's alpha if", items: [
          "You have three or more items.",
          "The items are intended to measure one construct.",
          "You want to check whether the items hang together."
        ]},
        { h: "Use Spearman-Brown if", items: [
          "You have exactly two items.",
          "The two items are intended to work together as a brief composite.",
          "You want a two-item reliability estimate."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Five AI teaching confidence items", "Cronbach's alpha"],
        ["Two planning-support items", "Spearman-Brown"],
        ["Items actually measure different constructs", "Neither is enough"]
      ]},
      { kind: "p", h: "Tiny example", body: "A five-item AI teaching confidence scale can use Cronbach's alpha.\n\nA two-item planning support composite may use Spearman-Brown." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Using alpha for every item set, even when there are only two items or when the items do not belong together conceptually." },
      { kind: "l", h: "What to check before deciding", body: [
        "How many items are there?",
        "Are all items coded in the same direction?",
        "Do the items measure one construct?",
        "Are some items redundant?",
        "Would a two-item composite be too thin?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Read the item wording out loud. If the items do not sound like the same construct, a reliability coefficient cannot fix the measurement problem." },
      { kind: "quote", body: "Alpha is usually for three or more related items; Spearman-Brown is useful for two related items." }
    ]
  },
  {
    id: "reliability-vs-validity",
    title: "Reliability vs validity",
    type: "Comparison",
    level: "comparison",
    pathway: "Construct -> Measurement",
    summary: "Both sound like \"is my measure good?\"",
    tags: ["reliability", "validity", "measurement"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["reliability", "validity", "cronbach", "cohen-kappa", "construct", "operationalization"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both sound like \"is my measure good?\"" },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nAm I asking whether the measure is consistent, or whether it measures what I claim it measures?" },
      { kind: "compare", body: [
        { h: "Use reliability language if", items: [
          "You are talking about consistency.",
          "Items hang together.",
          "Coders agree.",
          "Scores are stable or repeatable."
        ]},
        { h: "Use validity language if", items: [
          "You are talking about whether the measure captures the intended construct.",
          "The interpretation of the score is defensible.",
          "The evidence supports the claim you want to make."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Five confidence items have alpha = .82", "Reliability evidence"],
        ["The confidence items actually capture AI anxiety, not confidence", "Validity problem"],
        ["Two coders agree on transcript codes", "Reliability evidence"],
        ["The code categories miss the construct of clinical reasoning", "Validity problem"]
      ]},
      { kind: "p", h: "Tiny example", body: "Your AI teaching confidence scale may have strong internal consistency.\n\nBut if all items actually ask about technology access rather than confidence, the scale has a validity problem." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Thinking high reliability proves validity.\n\nA measure can be consistent and still consistently measure the wrong thing." },
      { kind: "l", h: "What to check before deciding", body: [
        "What construct am I claiming to measure?",
        "Do the items or codes match that construct?",
        "Is the score consistent?",
        "What evidence supports this interpretation?",
        "What alternative interpretation could a skeptical reader raise?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Separate the questions:\n\n```text\nReliability question: Is it consistent?\nValidity question: Is this interpretation justified?\n```" },
      { kind: "quote", body: "Reliability asks whether measurement is consistent; validity asks whether the interpretation is justified." }
    ]
  },
  {
    id: "kappa-vs-percent",
    title: "Cohen's kappa vs percent agreement",
    type: "Comparison",
    level: "comparison",
    pathway: "Measurement -> Analysis",
    summary: "Both describe how much two coders agree.",
    tags: ["kappa", "percent-agreement", "inter-rater", "reliability"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["cohen-kappa", "coder-agreement", "codebook", "reliability"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both describe how much two coders agree." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nDo I need agreement corrected for chance?" },
      { kind: "compare", body: [
        { h: "Use percent agreement if", items: [
          "You want an intuitive descriptive summary.",
          "You want to show the raw proportion of matching codes.",
          "You are reporting it alongside a stronger reliability statistic."
        ]},
        { h: "Use Cohen's kappa if", items: [
          "Two coders independently coded the same categorical units.",
          "You need chance-corrected agreement.",
          "Your field expects inter-rater reliability beyond simple agreement."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["\"Coders agreed on 85 percent of segments\"", "Percent agreement"],
        ["\"Agreement beyond chance was kappa = .72\"", "Cohen's kappa"],
        ["One category is extremely common", "Kappa may behave oddly; inspect the table"]
      ]},
      { kind: "p", h: "Tiny example", body: "Two coders classify transcript segments as applied, partially applied, or not applied.\n\nPercent agreement tells you how often they matched. Cohen's kappa tells you how much they agreed beyond what might happen by chance." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Reporting percent agreement only because it looks easy.\n\nPercent agreement can look high when coders mostly use a very common category." },
      { kind: "l", h: "What to check before deciding", body: [
        "Did both coders code the same units?",
        "Were coders independent?",
        "Are codes categorical?",
        "Is one category extremely common?",
        "Does the disagreement table reveal a codebook problem?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Report the crosstab of coder decisions. The pattern of disagreement is often more informative than the coefficient alone." },
      { kind: "quote", body: "Percent agreement says how often coders matched; kappa asks whether that agreement exceeds chance." }
    ]
  },
  {
    id: "descriptive-vs-inferential-cmp",
    title: "Descriptive statistics vs inferential statistics",
    type: "Comparison",
    level: "comparison",
    pathway: "Sample -> Analysis -> Evidence -> Claim",
    summary: "Both use numbers, tables, and sometimes graphs.",
    tags: ["descriptive", "inferential", "summary", "claim"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["descriptive-table", "confidence-interval", "p-value", "sample", "representativeness"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both use numbers, tables, and sometimes graphs." },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nAm I describing the data I have, or making a broader claim beyond the observed data?" },
      { kind: "compare", body: [
        { h: "Use descriptive statistics if", items: [
          "You summarize the sample you observed.",
          "You report means, medians, percentages, SDs, IQRs, or tables.",
          "You are not testing a broader population claim."
        ]},
        { h: "Use inferential statistics if", items: [
          "You use sample data to evaluate a claim beyond the sample.",
          "You use p-values, confidence intervals, models, or hypothesis tests.",
          "You discuss uncertainty from sampling."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["Average confidence score in this class was 3.8", "Descriptive"],
        ["Students in one group scored higher than another, p = .03", "Inferential"],
        ["62 percent completed the module", "Descriptive"],
        ["Completion was associated with reminders in a logistic model", "Inferential"]
      ]},
      { kind: "p", h: "Tiny example", body: "Descriptive statistics can tell you that 70 percent of students used the AI tutor.\n\nInferential statistics ask whether AI tutor use is associated with completion, improvement, or another outcome in a way that may speak beyond the observed sample." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Jumping to p-values before understanding the sample pattern.\n\nDescriptive statistics are not \"basic\" in a bad way. They are often the first layer of evidence." },
      { kind: "l", h: "What to check before deciding", body: [
        "Am I only describing my sample?",
        "Am I trying to generalize?",
        "Does my sample support generalization?",
        "What population am I trying to speak about?",
        "What uncertainty should I report?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Write the sentence you want to say. If it says \"in this sample,\" descriptive may be enough. If it says \"students generally\" or \"the intervention is associated with,\" you may need inferential support." },
      { kind: "quote", body: "Descriptive statistics summarize what you saw; inferential statistics help judge what the sample may imply beyond itself." }
    ]
  },
  {
    id: "sig-vs-practical-cmp",
    title: "Statistical significance vs practical significance",
    type: "Comparison",
    level: "comparison",
    pathway: "Evidence -> Claim",
    summary: "Both sound like \"the result matters.\"",
    tags: ["significance", "effect-size", "p-value", "interpretation"],
    source: "../what_the_stat_content/method_comparison_cards_v1.md",
    related: ["p-value", "effect-size", "confidence-interval", "statistical-vs-practical-significance", "evidence", "claim"],
    sections: [
      { kind: "p", h: "The confusion", body: "Both sound like \"the result matters.\"" },
      { kind: "p", h: "The one big decision", body: "Ask:\n\nIs the result unlikely under the null model, or is it meaningful in the real research context?" },
      { kind: "compare", body: [
        { h: "Use statistical significance language if", items: [
          "You are talking about p-values.",
          "You are asking whether the result is unlikely under a null model.",
          "You are reporting a hypothesis test."
        ]},
        { h: "Use practical significance language if", items: [
          "You are asking whether the effect is large enough to matter.",
          "You are interpreting the size in context.",
          "You are connecting the result to teaching, learning, policy, design, or research importance."
        ]}
      ]},
      { kind: "t", h: "Quick decision table", body: [
        ["My situation", "Likely direction"],
        ["p = .02", "Statistically significant"],
        ["Difference is 0.1 points on a 100-point scale", "Probably not practically meaningful"],
        ["Difference is 5 points on a 20-point rubric", "Potentially practically meaningful"]
      ]},
      { kind: "p", h: "Tiny example", body: "An AI feedback group might score statistically higher than a comparison group.\n\nBut if the difference is tiny, teachers may not care. If the difference is moderate and visible in student work, it may have practical meaning." },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Saying \"significant\" without saying whether you mean statistical or practical significance." },
      { kind: "l", h: "What to check before deciding", body: [
        "What is the p-value?",
        "What is the effect size or coefficient?",
        "What is the confidence interval?",
        "What scale is the outcome measured on?",
        "Would the difference matter to learners, teachers, or researchers?"
      ]},
      { kind: "p", h: "If you are still unsure", body: "Translate the result into the original units. A difference of `0.35 SD` may feel abstract; a difference of `4 points on a 20-point rubric` is easier to judge." },
      { kind: "quote", body: "Statistical significance asks whether the result is surprising; practical significance asks whether it matters." }
    ]
  }
];
