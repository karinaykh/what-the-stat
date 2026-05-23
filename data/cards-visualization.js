window.WTS_VISUALIZATION_CARDS = [
  {
    id: "viz-thinking-path",
    title: "The visualization thinking path",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "A sequence for choosing a visual: claim, evidence, variable type, data shape, visual form, caption.",
    tags: ["visualization", "thinking-path", "claim", "evidence"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-emergency-router", "viz-caption-formula", "viz-red-flags"],
    sections: [
      { kind: "p", h: "Use this sequence", body: "Claim -> Evidence -> Variable Type -> Data Shape -> Visual Form -> Caption" },
      { kind: "code", h: "Ask", body: "1. What claim am I trying to support?\n2. What comparison, pattern, distribution, or relationship must the reader see?\n3. What type of variables do I have?\n4. What is one row in the data?\n5. What graph lets the reader see the evidence with the least distortion?\n6. What caption tells the reader what to notice?" },
      { kind: "p", h: "Core idea", body: "A graph is not decoration. A graph is a way of making evidence visible." },
      { kind: "p", h: "Senior researcher note", body: "Do not start with \"what chart looks nice?\" Start with \"what does the reader need to see to judge my claim?\"" }
    ]
  },
  {
    id: "viz-emergency-router",
    title: "Beginner emergency router",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "A quick lookup table from what you need to show to a good starting visual and what to be careful about.",
    tags: ["visualization", "router", "lookup", "beginner"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-thinking-path", "viz-distribution", "viz-two-groups", "viz-pre-post", "viz-survey-items", "viz-association", "viz-binary", "viz-rubric", "viz-transcript-engagement", "viz-coded-transcript", "viz-model-results"],
    sections: [
      { kind: "t", h: "What to show, what to use, what to watch for", body: [
        ["What you need to show", "Good starting visual", "Be careful about"],
        ["One numeric outcome distribution", "histogram, boxplot, density plot", "hiding skew or outliers"],
        ["Two independent groups on a score", "boxplot, dot/strip plot, mean with CI", "using bar charts that hide spread"],
        ["Same students before/after", "paired dot plot, slope chart", "treating paired data like independent groups"],
        ["Three or more groups", "boxplot, dot plot, mean with CI", "too many pairwise claims"],
        ["Two numeric variables related", "scatterplot with trend line", "outliers and nonlinearity"],
        ["Completion or yes/no rate", "bar chart with n and denominator", "unclear denominator"],
        ["Likert survey items", "stacked bar, diverging bar, item table", "pretending one item is a precise interval score"],
        ["Rubric domains across cases", "heatmap, grouped dot plot, table", "different maxima and unclear percentages"],
        ["Transcript engagement over time", "line plot, attempt trajectory, small multiples", "wall-clock time distorted by idle gaps"],
        ["Coded issue types", "bar chart, stacked bar, crosstab heatmap", "categories that are not mutually exclusive"],
        ["Regression/model results", "coefficient plot, predicted-value plot", "showing p-values without practical meaning"]
      ]}
    ]
  },
  {
    id: "viz-distribution",
    title: "Showing a distribution",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to honestly show what one numeric variable looks like.",
    tags: ["visualization", "distribution", "histogram", "boxplot"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-two-groups", "viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "You want to know what one numeric variable looks like.\n\nExamples:\n\n- active time in chatbot\n- total student words\n- rubric score\n- confidence scale score" },
      { kind: "l", h: "Good visuals", body: [
        "histogram",
        "boxplot",
        "density plot",
        "dot plot for small samples"
      ]},
      { kind: "p", h: "Personalized example", body: "MD1140-style duration data may have extreme wall-clock outliers because students left sessions open.\n\nBefore reporting a mean duration, show the distribution. If it is very skewed, median and IQR may be more honest." },
      { kind: "l", h: "What the reader should see", body: [
        "center",
        "spread",
        "skew",
        "outliers",
        "whether the mean is misleading"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reporting only the mean when the distribution is extremely skewed." },
      { kind: "code", h: "Python sketch", body: "sub[\"active_time_min\"].hist()\nsub[\"active_time_min\"].plot.box()\nsub[\"active_time_min\"].describe()" },
      { kind: "quote", body: "A distribution plot helps you see whether your summary statistic is honest." }
    ]
  },
  {
    id: "viz-two-groups",
    title: "Comparing two independent groups",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to show a score difference between two groups honestly.",
    tags: ["visualization", "compare", "boxplot", "groups"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["independent-t", "mann-whitney", "viz-distribution"],
    sections: [
      { kind: "p", h: "Use this when", body: "You want to compare a score across two different groups.\n\nExamples:\n\n- Arm 1 vs Arm 2 performance\n- AI-feedback group vs comparison group\n- completers vs non-completers" },
      { kind: "l", h: "Good visuals", body: [
        "boxplot by group",
        "dot/strip plot by group",
        "mean with confidence interval",
        "table with n, mean, SD, median, IQR"
      ]},
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nIf you compare `main_total_pct` between Arm 1 and Arm 2, a boxplot or dot plot shows whether the difference is broad or driven by a few students." },
      { kind: "l", h: "What the reader should see", body: [
        "group size",
        "center of each group",
        "spread within groups",
        "overlap between groups",
        "outliers"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using a bar chart of means only. It hides the variation among students." },
      { kind: "code", h: "Python sketch", body: "sub.boxplot(column=\"main_total_pct\", by=\"arm\")\nsub.groupby(\"arm\")[\"main_total_pct\"].describe()" },
      { kind: "quote", body: "When comparing groups, show both the difference between groups and the variation within groups." }
    ]
  },
  {
    id: "viz-pre-post",
    title: "Showing pre/post change for the same students",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to show before/after change for the same students without hiding individual variation.",
    tags: ["visualization", "pre-post", "paired", "slope-chart"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["paired-t", "wilcoxon", "viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "The same students have before and after measurements.\n\nExamples:\n\n- pre/post confidence\n- pre/post cognitive load\n- attempt 1 vs attempt 2 performance" },
      { kind: "l", h: "Good visuals", body: [
        "paired dot plot",
        "slope chart",
        "change-score histogram",
        "before/after boxplot with clear paired note"
      ]},
      { kind: "p", h: "Personalized example", body: "If students complete an AI confidence survey before and after a chatbot activity, a slope chart can show whether most students increased, decreased, or stayed similar." },
      { kind: "l", h: "What the reader should see", body: [
        "individual change",
        "direction of change",
        "whether change is consistent or mixed",
        "whether a few students drive the average"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Showing only two bars: pre mean and post mean.\n\nThat hides whether all students changed a little or a few students changed a lot." },
      { kind: "code", h: "Python sketch", body: "wide = df[[\"student_id\", \"pre_confidence\", \"post_confidence\"]].dropna()\nwide[\"confidence_change\"] = wide[\"post_confidence\"] - wide[\"pre_confidence\"]\n\nwide[\"confidence_change\"].hist()\nwide[[\"pre_confidence\", \"post_confidence\"]].plot.box()" },
      { kind: "quote", body: "For pre/post data, show the change within the same students." }
    ]
  },
  {
    id: "viz-survey-items",
    title: "Showing survey item patterns",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to show Likert item responses honestly, without pretending one item is a precise interval score.",
    tags: ["visualization", "survey", "likert", "stacked-bar"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-distribution", "viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "You want to show how students responded to Likert items.\n\nExamples:\n\n- usefulness rating\n- confidence items\n- cognitive load items\n- perceived authenticity of AI patient" },
      { kind: "l", h: "Good visuals", body: [
        "item-level percentage table",
        "stacked bar chart",
        "diverging stacked bar chart",
        "boxplot for composite scale scores"
      ]},
      { kind: "p", h: "Personalized example", body: "IT2900-style:\n\nIf cognitive load is a composite scale, show the composite score distribution. If you want to show how students answered each NASA-TLX-style item, show item-level response distributions." },
      { kind: "l", h: "What the reader should see", body: [
        "whether responses cluster high or low",
        "whether items behave similarly",
        "whether an item is polarizing",
        "whether a composite hides item-level differences"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating one Likert item like a precise continuous measure without checking whether that is appropriate." },
      { kind: "code", h: "Python sketch", body: "item_cols = [\"load_1\", \"load_2\", \"load_3\"]\ndf[item_cols].apply(lambda col: col.value_counts(normalize=True).sort_index())" },
      { kind: "quote", body: "For survey items, decide whether you are showing item responses or a scale score." }
    ]
  },
  {
    id: "viz-association",
    title: "Showing association between two variables",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to show whether two variables move together using scatterplots before reading a correlation.",
    tags: ["visualization", "association", "scatterplot", "correlation"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "You want to know whether two variables move together.\n\nExamples:\n\n- message count and performance score\n- active time and post confidence\n- pre confidence and chatbot completion" },
      { kind: "l", h: "Good visuals", body: [
        "scatterplot",
        "scatterplot with trend line",
        "jittered scatterplot for Likert/ranked data",
        "correlation matrix for several numeric variables"
      ]},
      { kind: "p", h: "Personalized example", body: "If you ask whether students who sent more messages also scored higher in a chatbot simulation, use a scatterplot before reading the correlation." },
      { kind: "l", h: "What the reader should see", body: [
        "positive, negative, or no pattern",
        "linear or curved pattern",
        "outliers",
        "clustering",
        "whether the relationship is weak or strong"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reporting a correlation coefficient without checking the scatterplot." },
      { kind: "code", h: "Python sketch", body: "sub.plot.scatter(x=\"student_message_count\", y=\"performance_score\")" },
      { kind: "quote", body: "A scatterplot lets you see whether the correlation is telling a believable story." }
    ]
  },
  {
    id: "viz-binary",
    title: "Showing completion or binary outcomes",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to show yes/no outcomes with the denominator visible.",
    tags: ["visualization", "binary", "completion", "denominator"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "The outcome is yes/no or category membership.\n\nExamples:\n\n- completed chatbot or not\n- reached End Chat or not\n- performance-eligible or not\n- applied insight: yes/partial/no" },
      { kind: "l", h: "Good visuals", body: [
        "bar chart with count and percentage",
        "stacked bar by group",
        "crosstab table"
      ]},
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nShow attempted, completed, and performance-eligible counts separately. These are different denominators and should not be collapsed into one vague \"participation\" number." },
      { kind: "l", h: "What the reader should see", body: [
        "count",
        "denominator",
        "percentage",
        "group comparison if relevant"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Showing percentages without `n`.\n\nSmall denominators can make percentages look more stable than they are." },
      { kind: "code", h: "Python sketch", body: "pd.crosstab(df[\"arm\"], df[\"completed\"], margins=True)\npd.crosstab(df[\"arm\"], df[\"completed\"], normalize=\"index\")" },
      { kind: "quote", body: "For binary outcomes, always show the denominator behind the percentage." }
    ]
  },
  {
    id: "viz-rubric",
    title: "Showing rubric performance across domains or cases",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to show rubric scores across domains, cases, stages, or roles without misleading comparisons.",
    tags: ["visualization", "rubric", "heatmap", "domains"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "You have rubric scores by domain, case, stage, or role.\n\nExamples:\n\n- PharSim case/domain heatmap\n- MD1140 communication/history/clinical reasoning scores\n- BMA5008 CEO/CFO/CPTO role scores" },
      { kind: "l", h: "Good visuals", body: [
        "heatmap for many domains/cases",
        "grouped dot plot",
        "domain-score table",
        "radar charts only with caution"
      ]},
      { kind: "p", h: "Personalized example", body: "If different simulation cases have different maximum possible points, show percentage of available rubric points and clearly state what the percentage means." },
      { kind: "l", h: "What the reader should see", body: [
        "which domains are stronger/weaker",
        "which cases differ",
        "how many students contribute to each cell",
        "whether scores are comparable across domains"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Comparing raw scores across domains with different maxima." },
      { kind: "code", h: "Python sketch", body: "pivot = df.pivot_table(\n    index=\"case_id\",\n    columns=\"domain\",\n    values=\"domain_pct\",\n    aggfunc=\"mean\"\n)\n\nprint(pivot)" },
      { kind: "quote", body: "For rubric heatmaps, the label must say exactly what the percentage is a percentage of." }
    ]
  },
  {
    id: "viz-transcript-engagement",
    title: "Showing transcript engagement over attempts or time",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to show engagement changes across attempts, stages, or sessions.",
    tags: ["visualization", "engagement", "attempts", "trajectory"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-pre-post", "viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "You want to show how engagement changes across attempts, stages, or sessions.\n\nExamples:\n\n- attempt 1 vs attempt 2 score\n- active time by case\n- message count across chatbot stages\n- reattempt trajectory" },
      { kind: "l", h: "Good visuals", body: [
        "line plot for ordered attempts",
        "paired dot plot for attempt 1/attempt 2",
        "small multiples by case",
        "table when exact values matter"
      ]},
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nFor students who reattempt a case, show attempt 1 and attempt 2 scores connected for each student-case. That makes improvement or decline visible." },
      { kind: "l", h: "What the reader should see", body: [
        "direction of change",
        "how many students reattempted",
        "whether improvement is consistent",
        "whether some students decline"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Mixing main retained-attempt analysis with all-attempt trajectory analysis without labeling the difference." },
      { kind: "code", h: "Python sketch", body: "attempt_summary = df.groupby([\"student_id\", \"case_id\", \"attempt_number\"])[\"score_pct\"].mean()\nattempt_summary.head()" },
      { kind: "quote", body: "Attempt trajectories are process evidence; label them separately from main performance summaries." }
    ]
  },
  {
    id: "viz-coded-transcript",
    title: "Showing coded transcript categories",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to display category counts from coded transcript segments with the right denominator.",
    tags: ["visualization", "coding", "transcript", "categories"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-binary", "viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "You coded transcript segments into categories.\n\nExamples:\n\n- evidence-supported reasoning: absent/partial/clear\n- chatbot issue type\n- severity level\n- applied insight: yes/partial/no" },
      { kind: "l", h: "Good visuals", body: [
        "frequency table",
        "bar chart",
        "stacked bar by case/stage",
        "crosstab heatmap",
        "disagreement table for coder reliability"
      ]},
      { kind: "p", h: "Personalized example", body: "OMS3100-style:\n\nIf auditing chatbot teaching-quality issues, show issue counts by case and stage. But make clear whether the denominator is all bot messages, reviewed messages, or only flagged segments." },
      { kind: "l", h: "What the reader should see", body: [
        "most common categories",
        "where issues cluster",
        "whether categories differ by case, stage, or role",
        "whether coders disagree systematically"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Making a beautiful issue chart from only flagged segments and then implying it represents all transcripts." },
      { kind: "code", h: "Python sketch", body: "pd.crosstab(df[\"case_id\"], df[\"issue_type\"])\npd.crosstab(df[\"case_id\"], df[\"issue_type\"], normalize=\"index\")" },
      { kind: "quote", body: "For coded transcripts, the denominator is part of the evidence." }
    ]
  },
  {
    id: "viz-model-results",
    title: "Showing model results",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "How to display regression or model output in a reader-friendly way.",
    tags: ["visualization", "model", "regression", "coefficients"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-emergency-router"],
    sections: [
      { kind: "p", h: "Use this when", body: "You have regression or model output and want a reader-friendly display.\n\nExamples:\n\n- post confidence predicted by pre confidence and chatbot score\n- completion predicted by pre confidence and arm\n- performance predicted by engagement" },
      { kind: "l", h: "Good visuals", body: [
        "coefficient plot with confidence intervals",
        "predicted-value plot",
        "marginal means or adjusted means",
        "simple table for a beginner audience"
      ]},
      { kind: "p", h: "Personalized example", body: "For pre/post survey linked to chatbot performance, a coefficient plot can show whether `chatbot_score` is associated with `post_confidence` after accounting for `pre_confidence`." },
      { kind: "l", h: "What the reader should see", body: [
        "direction of association",
        "size of association",
        "uncertainty",
        "which variables are included"
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Showing a model table with many numbers and no sentence explaining what the key coefficient means." },
      { kind: "code", h: "Python sketch", body: "params = model.params\nci = model.conf_int()\nresults_table = pd.concat([params, ci], axis=1)\nresults_table.columns = [\"estimate\", \"ci_low\", \"ci_high\"]\nresults_table" },
      { kind: "quote", body: "A model visual should help the reader interpret the estimate, not worship the software output." }
    ]
  },
  {
    id: "viz-red-flags",
    title: "Visualization red flags",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "Warning signs that a graph is misleading or unfair to the data.",
    tags: ["visualization", "red-flags", "warnings"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-thinking-path", "viz-caption-formula", "viz-emergency-router"],
    sections: [
      { kind: "l", h: "Pause if", body: [
        "the graph has no denominator",
        "a percentage is shown without `n`",
        "the graph hides paired data",
        "a bar chart hides skew, outliers, or individual spread",
        "the y-axis exaggerates a tiny difference",
        "raw scores are compared across different maxima",
        "engagement is visually framed as learning",
        "missing data or excluded cases disappear silently",
        "too many colors make the figure look more precise than it is",
        "the chart title makes a stronger claim than the design supports"
      ]},
      { kind: "quote", body: "Choose the graph that makes the evidence behind your claim visible, including the denominator, spread, and claim limit." }
    ]
  },
  {
    id: "viz-caption-formula",
    title: "A simple caption formula",
    type: "Visualization",
    level: "visualization",
    pathway: "Evidence",
    summary: "A simple formula for writing a figure caption that ties the visual to a careful claim.",
    tags: ["visualization", "caption", "claim", "writing"],
    source: "../what_the_stat_content/visualization_strategy_guide_v1.md",
    related: ["viz-thinking-path", "viz-red-flags"],
    sections: [
      { kind: "code", h: "Use this", body: "Figure X shows [what is plotted] for [which analytic sample/denominator].\nThe visual highlights [main pattern].\nThis supports the claim that [careful claim], but it does not show [claim limit]." },
      { kind: "code", h: "Example", body: "Figure X shows active engagement time for students who completed both chatbot scenarios. The visual highlights that most students spent longer in the Carl scenario than the Jane scenario. This supports a process claim about engagement differences, but it does not by itself show greater learning." },
      { kind: "quote", body: "Choose the graph that makes the evidence behind your claim visible, including the denominator, spread, and claim limit." }
    ]
  }
];
