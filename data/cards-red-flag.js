window.WTS_RED_FLAG_CARDS = [
  {
    id: "flag-repeated-rows",
    title: "Repeated rows treated as independent",
    type: "Red flag",
    level: "red-flag",
    pathway: "Data Type -> Analysis",
    summary: "Your spreadsheet has many rows per student, but the analysis treats every row as if it came from a different student.",
    tags: ["red-flag", "repeated", "independence", "data-shape"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["tr-big-distinction", "mixed-models", "rm-anova", "data-type"],
    sections: [
      { kind: "p", h: "What it looks like", body: "Your spreadsheet has many rows per student, but the analysis treats every row as if it came from a different student.\n\nExamples:\n\n- one row per message\n- one row per case\n- one row per attempt\n- one row per transcript segment" },
      { kind: "p", h: "Why this is a problem", body: "Rows from the same student are usually related. Treating them as independent can make the sample look larger than it really is and make p-values too optimistic." },
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nIf one student has scores for three cases, those three rows are not three unrelated students. They are repeated student-case observations." },
      { kind: "l", h: "What to do", body: [
        "Identify what one row represents.",
        "Count rows per student.",
        "Decide whether to aggregate to one row per student.",
        "Use paired/repeated or mixed-effects methods if needed.",
        "Be clear about the unit of analysis."
      ]},
      { kind: "code", h: "Quick check in Python", body: "df[\"student_id\"].value_counts().describe()\ndf.groupby(\"student_id\").size().sort_values(ascending=False).head()" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "This analysis uses student-case rows, so repeated observations within students should be considered." },
      { kind: "quote", body: "A spreadsheet row is not automatically an independent observation." }
    ]
  },
  {
    id: "flag-engagement-learning",
    title: "Engagement treated as learning",
    type: "Red flag",
    level: "red-flag",
    pathway: "Construct -> Claim",
    summary: "You measure message count, time, word count, or completion and call it learning.",
    tags: ["red-flag", "engagement", "learning", "claims"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["tr-big-distinction", "ex-big-linking-question", "correlation-not-causation", "viz-thinking-path"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You measure message count, time, word count, or completion and call it learning." },
      { kind: "p", h: "Why this is a problem", body: "Engagement can mean many things: interest, effort, confusion, task difficulty, persistence, or inefficient chatbot design. It is process evidence, not learning evidence by itself." },
      { kind: "p", h: "Personalized example", body: "IT2900-style:\n\nStudents may spend more time with Carl than Jane. That supports an engagement/process claim. It does not automatically mean Carl produced more learning." },
      { kind: "l", h: "What to do", body: [
        "Label engagement as engagement.",
        "Add performance, survey, or coded reasoning evidence if making learning claims.",
        "Ask whether more activity is desirable in this task.",
        "Avoid turning \"more\" into \"better\" without evidence."
      ]},
      { kind: "code", h: "Quick check in Python", body: "df[[\"active_time_min\", \"message_count\", \"performance_score\"]].corr(method=\"spearman\")" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "Students showed greater engagement in Scenario B, as indicated by active time and word count." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Students learned more in Scenario B." },
      { kind: "quote", body: "Engagement is evidence of activity, not automatically evidence of learning." }
    ]
  },
  {
    id: "flag-denominator-drift",
    title: "Denominator drift",
    type: "Red flag",
    level: "red-flag",
    pathway: "Sample -> Evidence",
    summary: "Different tables or figures quietly use different denominators.",
    tags: ["red-flag", "denominator", "sample", "reporting"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["descriptive-table", "tr-big-distinction", "missing-data-sensitivity", "viz-thinking-path"],
    sections: [
      { kind: "p", h: "What it looks like", body: "Different tables or figures quietly use different denominators.\n\nExamples:\n\n- all enrolled students\n- students who opened the activity\n- students who sent a message\n- students who reached `End Chat`\n- students with evaluator scores\n- performance-eligible attempts\n- students with linked pre/post survey data" },
      { kind: "p", h: "Why this is a problem", body: "The result can change depending on who is counted. If the denominator changes silently, the claim becomes unclear." },
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nAttempted, completed, evaluated, and performance-eligible are not the same denominator." },
      { kind: "l", h: "What to do", body: [
        "Name the denominator in every table/figure.",
        "Report `n`.",
        "Keep a denominator table.",
        "Avoid comparing percentages from different analytic samples unless that is explicit."
      ]},
      { kind: "code", h: "Quick check in Python", body: "denominators = {\n    \"all_rows\": len(df),\n    \"completed\": df[\"completed\"].sum(),\n    \"performance_eligible\": df[\"performance_eligible\"].sum(),\n    \"has_score\": df[\"main_total_pct\"].notna().sum(),\n}\n\ndenominators" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "Among performance-eligible student-case attempts, the mean rubric-attainment percentage was __." },
      { kind: "quote", body: "Every percentage needs a denominator." }
    ]
  },
  {
    id: "flag-completers-only",
    title: "Linked survey-performance analysis only includes completers",
    type: "Red flag",
    level: "red-flag",
    pathway: "Sample -> Claim",
    summary: "You merge pre survey, post survey, and chatbot performance, then analyze only students who have all three.",
    tags: ["red-flag", "completers", "missing-data", "linked-data"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["missing-data-sensitivity", "ex-big-linking-question", "ancova", "sample"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You merge pre survey, post survey, and chatbot performance, then analyze only students who have all three." },
      { kind: "p", h: "Why this is a problem", body: "Students with complete linked data may be different from students who are missing post survey or chatbot performance. The result may describe completers, not the whole class." },
      { kind: "p", h: "Personalized example", body: "Pre/post survey + chatbot performance:\n\nIf only students who completed the chatbot have performance scores, the analysis of score vs confidence change is a completer analysis." },
      { kind: "l", h: "What to do", body: [
        "Count how many students are lost at each merge step.",
        "Compare included vs excluded students on baseline variables.",
        "Report the analytic sample.",
        "Avoid generalizing beyond the linked sample."
      ]},
      { kind: "code", h: "Quick check in Python", body: "analysis_cols = [\"pre_confidence\", \"post_confidence\", \"chatbot_score\"]\ndf[\"linked_complete\"] = df[analysis_cols].notna().all(axis=1)\n\ndf[\"linked_complete\"].value_counts()\ndf.groupby(\"linked_complete\")[\"pre_confidence\"].describe()" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "Among students with linked pre survey, post survey, and chatbot score data, chatbot score was associated with confidence change." },
      { kind: "quote", body: "A linked dataset often answers a question about the students who remained linkable." }
    ]
  },
  {
    id: "flag-ai-scores",
    title: "AI-generated scores used without verification",
    type: "Red flag",
    level: "red-flag",
    pathway: "Measurement -> Evidence",
    summary: "An AI evaluator produces numeric scores, and the scores are analyzed as if they are automatically correct.",
    tags: ["red-flag", "ai-scores", "validity", "verification"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["reliability-vs-validity", "evidence", "ex-big-linking-question", "descriptive-table"],
    sections: [
      { kind: "p", h: "What it looks like", body: "An AI evaluator produces numeric scores, and the scores are analyzed as if they are automatically correct." },
      { kind: "p", h: "Why this is a problem", body: "AI-generated scoring can contain arithmetic errors, rubric inconsistencies, impossible values, or vague justifications. Numeric format does not equal measurement quality." },
      { kind: "p", h: "Personalized example", body: "MD1140-style:\n\nIf a domain score exceeds the stated maximum or subscores do not sum to totals, the issue is source score quality, not merely extraction." },
      { kind: "l", h: "What to do", body: [
        "Check score ranges.",
        "Check subtotal-total consistency.",
        "Sample scores against raw evaluation text.",
        "Separate extraction accuracy from score validity.",
        "Flag impossible or inconsistent scores."
      ]},
      { kind: "code", h: "Quick check in Python", body: "df.loc[df[\"total_score\"] > df[\"total_max\"], [\"student_id\", \"total_score\", \"total_max\"]]\ndf[\"score_pct\"] = df[\"total_score\"] / df[\"total_max\"]" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "The extraction captured the source evaluation scores, but score validity depends on the evaluator and rubric consistency." },
      { kind: "quote", body: "AI-generated scores are data to verify, not truth to inherit." }
    ]
  },
  {
    id: "flag-rubric-maxima",
    title: "Raw rubric scores compared across different maxima",
    type: "Red flag",
    level: "red-flag",
    pathway: "Measurement -> Evidence",
    summary: "You compare raw scores across cases, domains, or rubrics with different maximum possible points.",
    tags: ["red-flag", "rubric", "comparison", "percentage"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["viz-thinking-path", "descriptive-table", "statistical-vs-practical-significance", "evidence"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You compare raw scores across cases, domains, or rubrics with different maximum possible points." },
      { kind: "p", h: "Why this is a problem", body: "A raw score of 60 means something different if the maximum is 80 versus 120." },
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nDifferent cases can have different total maxima or different domain weightings. Percentage of available rubric points may be more comparable than raw score." },
      { kind: "l", h: "What to do", body: [
        "Check maximum possible points for each case/domain.",
        "Convert to percentage if comparison requires it.",
        "State what the percentage means.",
        "Avoid pretending all domains are equally weighted unless they are."
      ]},
      { kind: "code", h: "Quick check in Python", body: "df[\"score_pct\"] = 100 * df[\"score\"] / df[\"max_score\"]\ndf.groupby(\"case_id\")[[\"score\", \"max_score\", \"score_pct\"]].describe()" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "The heatmap shows mean percentage of available rubric points attained by eligible students." },
      { kind: "quote", body: "Compare percentages, not raw points, when the maximum possible points differ." }
    ]
  },
  {
    id: "flag-causal-obs",
    title: "Causal claim from observational chatbot data",
    type: "Red flag",
    level: "red-flag",
    pathway: "Research Question -> Claim",
    summary: "You observe an association and write as if one variable caused another.",
    tags: ["red-flag", "causal", "observational", "claims"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["correlation-not-causation", "ancova", "multiple-regression"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You observe an association and write as if one variable caused another.\n\nExamples:\n\n- more messages caused higher performance\n- chatbot score caused confidence gain\n- completion caused learning\n- one role caused better engagement" },
      { kind: "p", h: "Why this is a problem", body: "Observational chatbot data often reflects selection, motivation, prior ability, access, task difficulty, and missingness." },
      { kind: "p", h: "Personalized example", body: "Pre/post survey + chatbot performance:\n\nStudents who perform well may already be more confident or capable before using the chatbot." },
      { kind: "l", h: "What to do", body: [
        "Use association language.",
        "Check temporal order.",
        "Adjust for baseline when appropriate.",
        "State design limits.",
        "Reserve causal language for designs that support it."
      ]},
      { kind: "code", h: "Quick repair language", body: "Replace \"caused\" with \"was associated with.\"\nReplace \"impact\" with \"relationship\" unless design supports impact.\nReplace \"improved learning\" with \"higher post score\" or \"reported higher confidence.\"" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "Chatbot performance was associated with post-confidence after accounting for baseline confidence." },
      { kind: "quote", body: "Temporal order helps a claim, but it does not by itself prove causation." }
    ]
  },
  {
    id: "flag-p-only",
    title: "p-value without effect size or descriptive evidence",
    type: "Red flag",
    level: "red-flag",
    pathway: "Evidence -> Claim",
    summary: "The result is reported as only p < .05.",
    tags: ["red-flag", "p-value", "effect-size", "reporting"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["effect-size", "confidence-interval", "statistical-vs-practical-significance", "viz-thinking-path"],
    sections: [
      { kind: "p", h: "What it looks like", body: "The result is reported as only:\n\n`p < .05`" },
      { kind: "p", h: "Why this is a problem", body: "The p-value does not tell the reader how large, meaningful, or visible the result is." },
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nAn arm comparison may have a p-value, but instructors also need the group means, spread, effect size, and practical difference in rubric percentage." },
      { kind: "l", h: "What to do", body: [
        "Report descriptive statistics.",
        "Report effect size or coefficient.",
        "Include confidence interval when possible.",
        "Show a graph if the pattern matters visually.",
        "Interpret practical meaning."
      ]},
      { kind: "code", h: "Quick check in Python", body: "sub.groupby(\"arm\")[\"main_total_pct\"].describe()" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "Arm 2 scored 4.8 percentage points higher on average than Arm 1, with overlapping score distributions; the reference p-value was __." },
      { kind: "quote", body: "A p-value is not the result; it is one piece of the result." }
    ]
  },
  {
    id: "flag-controls-magic",
    title: "Controls treated as magic",
    type: "Red flag",
    level: "red-flag",
    pathway: "Analysis -> Claim",
    summary: "You include covariates in a regression and then treat the result as causal.",
    tags: ["red-flag", "controls", "covariates", "causal"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["multiple-regression", "ancova", "researcher-degrees-of-freedom", "correlation-not-causation"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You include covariates in a regression and then treat the result as causal." },
      { kind: "p", h: "Why this is a problem", body: "Controls only account for variables included in the model, measured well, and placed correctly in the causal logic. They do not solve omitted confounding or bad design." },
      { kind: "p", h: "Personalized example", body: "Pre/post survey + chatbot performance:\n\nControlling for pre-confidence helps, but it does not prove chatbot score caused post-confidence." },
      { kind: "l", h: "What to do", body: [
        "Explain why each covariate belongs.",
        "Avoid adding controls only because they are available.",
        "Do not control for post-intervention variables casually.",
        "Use \"adjusted association\" language."
      ]},
      { kind: "code", h: "Quick repair language", body: "After adjusting for baseline confidence, chatbot score was associated with post-confidence." },
      { kind: "callout", tone: "warn", h: "Not", body: "Chatbot score increased post-confidence." },
      { kind: "quote", body: "Controls help describe adjusted associations; they do not magically create causality." }
    ]
  },
  {
    id: "flag-likert-as-scale",
    title: "Single Likert item treated as a whole scale",
    type: "Red flag",
    level: "red-flag",
    pathway: "Measurement -> Data Type",
    summary: "One 1-to-5 survey item is analyzed and interpreted as if it fully measures a construct.",
    tags: ["red-flag", "likert", "item", "scale"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["likert-item-scale", "composite-score", "cronbach", "reliability-vs-validity"],
    sections: [
      { kind: "p", h: "What it looks like", body: "One 1-to-5 survey item is analyzed and interpreted as if it fully measures a construct." },
      { kind: "p", h: "Why this is a problem", body: "A single item can be useful, but it is thin. It may not capture the construct well enough for strong claims." },
      { kind: "p", h: "Personalized example", body: "If one item asks \"The AI tutor was useful,\" that is a usefulness rating, not a validated broad measure of learning experience." },
      { kind: "l", h: "What to do", body: [
        "Say \"item\" when it is one item.",
        "Say \"scale\" only when multiple items form a construct.",
        "Use reliability checks for multi-item scales.",
        "Keep claims narrow."
      ]},
      { kind: "code", h: "Quick check in Python", body: "survey_cols = [col for col in df.columns if \"confidence\" in col]\nsurvey_cols" },
      { kind: "callout", tone: "ok", h: "Safer claim", body: "Students rated the AI tutor as useful on a single post-activity item." },
      { kind: "quote", body: "One item can be informative, but it is not the same as a full scale." }
    ]
  },
  {
    id: "flag-no-codebook",
    title: "Transcript coding without a stable codebook",
    type: "Red flag",
    level: "red-flag",
    pathway: "Measurement -> Evidence",
    summary: "You start coding transcript quality, reasoning, or chatbot issues without clear definitions.",
    tags: ["red-flag", "codebook", "qualitative", "coding"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["codebook", "coder-agreement", "cohen-kappa", "weighted-kappa", "validity"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You start coding transcript quality, reasoning, or chatbot issues without clear definitions." },
      { kind: "p", h: "Why this is a problem", body: "If the code is blurry, counts and statistics built from the code are also blurry." },
      { kind: "p", h: "Personalized example", body: "OMS3100-style:\n\n\"Bad teaching quality\" is too broad. You need categories such as factual error, case-grounding error, premature answer reveal, student-response tracking error, or uncertainty-handling problem." },
      { kind: "l", h: "What to do", body: [
        "Define the construct.",
        "Create code values and examples.",
        "Pilot code a small sample.",
        "Compare coders if possible.",
        "Revise before scaling."
      ]},
      { kind: "code", h: "Quick codebook prompt", body: "What is included?\nWhat is excluded?\nWhat is a borderline case?\nWhat evidence must be visible in the transcript?" },
      { kind: "quote", body: "If the codebook is unstable, the numbers built from it are unstable." }
    ]
  },
  {
    id: "flag-tiny-n",
    title: "Percentages from tiny n",
    type: "Red flag",
    level: "red-flag",
    pathway: "Sample -> Evidence",
    summary: "You report a percentage from a very small number of cases.",
    tags: ["red-flag", "percentage", "sample-size", "reporting"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["descriptive-table", "viz-thinking-path", "sample", "confidence-interval"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You report a percentage from a very small number of cases.\n\nExample:\n\n`66.7 percent improved`\n\nwhen only 3 students were in the subgroup." },
      { kind: "p", h: "Why this is a problem", body: "Percentages can look precise even when the denominator is tiny." },
      { kind: "p", h: "Personalized example", body: "Dashboard-style:\n\nA subgroup heatmap cell may show a high percentage, but if `n = 2`, the value is not stable." },
      { kind: "l", h: "What to do", body: [
        "Always show `n`.",
        "Use counts alongside percentages.",
        "Avoid strong claims from tiny cells.",
        "Consider suppressing or flagging small-n cells."
      ]},
      { kind: "callout", tone: "ok", h: "Safer claim", body: "Two of three students in this subgroup improved; because n is small, this should be interpreted cautiously." },
      { kind: "quote", body: "A percentage without `n` can sound much more stable than it is." }
    ]
  },
  {
    id: "flag-multiple-tests",
    title: "Multiple tests treated as one clean finding",
    type: "Red flag",
    level: "red-flag",
    pathway: "Analysis -> Evidence",
    summary: "You test many outcomes, cases, groups, or rubric domains, then highlight only the significant result.",
    tags: ["red-flag", "multiple-tests", "p-value", "exploratory"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["multiple-comparison", "p-value", "researcher-degrees-of-freedom", "effect-size"],
    sections: [
      { kind: "p", h: "What it looks like", body: "You test many outcomes, cases, groups, or rubric domains, then highlight only the significant result." },
      { kind: "p", h: "Why this is a problem", body: "When many tests are run, some small p-values may appear by chance." },
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nIf you compare arms across many cases and many domains, one significant p-value may not be as strong as it looks." },
      { kind: "l", h: "What to do", body: [
        "Identify planned primary comparisons.",
        "Label exploratory comparisons.",
        "Consider multiple-comparison adjustment.",
        "Report effect sizes, not only p-values.",
        "Avoid cherry-picking."
      ]},
      { kind: "code", h: "Quick check in Python", body: "df_results[\"p_value\"].lt(0.05).sum()\nlen(df_results)" },
      { kind: "quote", body: "The more questions you ask, the more careful you must be about lucky answers." }
    ]
  },
  {
    id: "flag-overclaim-viz",
    title: "Visualization makes the claim stronger than the evidence",
    type: "Red flag",
    level: "red-flag",
    pathway: "Evidence -> Claim",
    summary: "The graph title, color, axis, or layout makes a pattern look more dramatic than it is.",
    tags: ["red-flag", "visualization", "overclaim", "graphs"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["viz-thinking-path", "statistical-vs-practical-significance", "evidence"],
    sections: [
      { kind: "p", h: "What it looks like", body: "The graph title, color, axis, or layout makes a pattern look more dramatic than it is." },
      { kind: "p", h: "Why this is a problem", body: "Visuals can persuade faster than text. A misleading visual can create an overclaim even if the statistics are cautious." },
      { kind: "p", h: "Personalized example", body: "Rubric heatmap:\n\nDark red/green colors may make small percentage differences look like serious failure or success, especially if `n` is small." },
      { kind: "l", h: "What to do", body: [
        "Use honest axes.",
        "Show `n`.",
        "Avoid dramatic colors for weak differences.",
        "Show spread when possible.",
        "Write a caption with claim limits."
      ]},
      { kind: "code", h: "Caption repair", body: "This figure describes observed score patterns among eligible evaluated students; it does not establish intervention impact." },
      { kind: "quote", body: "A graph should make evidence clearer, not make the claim louder." }
    ]
  },
  {
    id: "flag-missing-silent",
    title: "Missing data disappears silently",
    type: "Red flag",
    level: "red-flag",
    pathway: "Sample -> Evidence",
    summary: "Rows with missing data are dropped, but the report does not say how many or why.",
    tags: ["red-flag", "missing-data", "sample", "reporting"],
    source: "../what_the_stat_content/red_flag_cards_v1.md",
    related: ["missing-data", "missing-data-sensitivity", "sample", "representativeness"],
    sections: [
      { kind: "p", h: "What it looks like", body: "Rows with missing data are dropped, but the report does not say how many or why." },
      { kind: "p", h: "Why this is a problem", body: "The analytic sample may become smaller and less representative without anyone noticing." },
      { kind: "p", h: "Personalized example", body: "Survey + transcript link:\n\nStudents without post survey or chatbot score disappear from the linked analysis, which can make the result look cleaner than the data really are." },
      { kind: "l", h: "What to do", body: [
        "Count missing values.",
        "Report analytic sample size.",
        "Compare included and excluded cases when possible.",
        "Use missing-data sensitivity when needed."
      ]},
      { kind: "code", h: "Quick check in Python", body: "analysis_cols = [\"pre_confidence\", \"post_confidence\", \"chatbot_score\"]\ndf[analysis_cols].isna().sum()\ndf.dropna(subset=analysis_cols).shape" },
      { kind: "quote", body: "If missing data changes who is analyzed, it changes what the result can claim." }
    ]
  }
];
