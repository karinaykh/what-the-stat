window.WTS_DATA_SHAPE_CARDS = [
  {
    id: "shape-router",
    title: "Beginner row-meaning router",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Before asking what test to use, ask what one row means.",
    tags: ["data-shape", "router", "row-meaning"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-student", "shape-one-row-student-case", "shape-one-row-message"],
    sections: [
      { kind: "p", h: "Core idea", body: "Before asking \"what statistical test should I use?\", ask:\n\nWhat does one row mean?\n\nMany analysis mistakes are not test mistakes. They are row-meaning mistakes." },
      { kind: "t", h: "Row-meaning router", body: [
        ["One row means...", "Common use", "Watch out for"],
        ["one student", "survey, one overall score", "loses case/message detail"],
        ["one student-case", "simulation case performance", "repeated rows per student"],
        ["one message", "transcript trace analysis", "messages are nested in students"],
        ["one transcript/attempt", "completion, total engagement", "multiple attempts per student"],
        ["one coded segment", "reasoning or issue coding", "coding reliability and denominator"],
        ["one student pre/post wide row", "paired survey change", "missing one time point"],
        ["one long repeated row", "repeated measures, cases, roles", "needs paired/repeated logic"],
        ["one coder-unit row", "coder agreement", "coders must code same units"],
        ["one merged student row", "survey + performance link", "missingness after merge"]
      ]}
    ]
  },
  {
    id: "shape-one-row-student",
    title: "One row per student",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row represents one learner. Clean, beginner-friendly.",
    tags: ["data-shape", "student", "survey", "pre-post"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-student-case", "shape-merged-survey-performance", "paired-t"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | arm | pre_confidence | post_confidence | total_score | completed\nS001       | A   | 3.2            | 4.1             | 82.5        | 1\nS002       | B   | 2.8            | 3.0             | 71.0        | 1" },
      { kind: "l", h: "Good for", body: [
        "overall survey analysis",
        "one total performance score per student",
        "completion status",
        "one-row-per-student regression",
        "linking pre/post survey with overall chatbot performance"
      ]},
      { kind: "l", h: "Common methods", body: [
        "paired t-test / Wilcoxon for pre/post columns",
        "independent t-test / Mann-Whitney for group comparison",
        "correlation/regression for score relationships",
        "logistic regression for completion yes/no"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "If the student actually completed multiple cases or attempts, one row per student may hide important variation." },
      { kind: "code", h: "Python check", body: "df[\"student_id\"].is_unique\ndf.shape" },
      { kind: "quote", body: "One row per student is clean and beginner-friendly, but it may flatten repeated learning activity." }
    ]
  },
  {
    id: "shape-one-row-student-case",
    title: "One row per student-case",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one student attempting one case. Repeated rows per student.",
    tags: ["data-shape", "student-case", "simulation", "performance"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-student", "shape-one-row-transcript", "shape-rubric-wide"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | case_id | arm | performance_eligible | main_total_pct\nS001       | Case 1  | A   | 1                    | 78.4\nS001       | Case 2  | A   | 1                    | 84.1\nS002       | Case 1  | B   | 0                    | " },
      { kind: "l", h: "Good for", body: [
        "simulation case performance",
        "case-by-case dashboards",
        "domain heatmaps",
        "performance eligibility",
        "repeated case trajectories"
      ]},
      { kind: "l", h: "Common methods", body: [
        "descriptive tables by case",
        "group comparison by case",
        "mixed-effects models if analyzing all cases together",
        "sensitivity checks around eligibility rules"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Student-case rows are not independent if the same student appears in multiple cases." },
      { kind: "p", h: "Personalized example", body: "PharSim-style performance data often lives here." },
      { kind: "code", h: "Python check", body: "df.groupby(\"student_id\").size().describe()\npd.crosstab(df[\"case_id\"], df[\"performance_eligible\"])" },
      { kind: "quote", body: "Student-case data is powerful, but repeated rows per student must be handled honestly." }
    ]
  },
  {
    id: "shape-one-row-message",
    title: "One row per message",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one chatbot or student message. Raw transcript-level data.",
    tags: ["data-shape", "message", "transcript", "chatbot"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-transcript", "shape-coded-segment"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | transcript_id | message_index | sender_role | message_text | timestamp\nS001       | T001          | 1             | student     | I think...   | ...\nS001       | T001          | 2             | bot         | Good start...| ..." },
      { kind: "l", h: "Good for", body: [
        "transcript cleaning",
        "message counts",
        "word counts",
        "timing analysis",
        "bot/student turn structure",
        "AI semantic annotation"
      ]},
      { kind: "l", h: "Common methods", body: [
        "deterministic engagement metrics",
        "aggregation to student/transcript level",
        "coded message analysis",
        "mixed models only later if modeling message-level outcomes"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Do not run ordinary tests treating each message as an independent student." },
      { kind: "p", h: "Personalized example", body: "OMS3100 and ScholAIstic transcript exports often begin as message-level data." },
      { kind: "code", h: "Python check", body: "df.groupby([\"student_id\", \"transcript_id\"]).size().describe()\ndf[\"sender_role\"].value_counts()" },
      { kind: "quote", body: "Message-level data is usually raw material that needs aggregation or coding before statistical testing." }
    ]
  },
  {
    id: "shape-one-row-transcript",
    title: "One row per transcript or attempt",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one transcript or attempt. Good for completion and engagement totals.",
    tags: ["data-shape", "transcript", "attempt", "completion"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-message", "shape-one-row-student-case"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | attempt_id | case_id | completed | active_time_min | student_words | score_pct\nS001       | A001       | Case 1  | 1         | 24.5            | 430           | 78.4\nS002       | A002       | Case 1  | 0         | 6.2             | 95            | " },
      { kind: "l", h: "Good for", body: [
        "completion analysis",
        "total engagement per attempt",
        "performance per attempt",
        "attempt-level dashboard metrics"
      ]},
      { kind: "l", h: "Common methods", body: [
        "descriptive summaries",
        "chi-square/logistic regression for completion",
        "correlation between engagement and score",
        "paired/Wilcoxon for attempt 1 vs attempt 2 if reattempts are paired"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "If students can attempt multiple times, one row per attempt creates repeated rows per student." },
      { kind: "p", h: "Personalized example", body: "PharSim reattempt analysis and MD1140 stage/attempt summaries often use this shape." },
      { kind: "code", h: "Python check", body: "df.groupby(\"student_id\")[\"attempt_id\"].nunique().describe()\ndf[\"completed\"].value_counts(dropna=False)" },
      { kind: "quote", body: "Attempt-level data is good for process analysis, but it is not the same as one independent student per row." }
    ]
  },
  {
    id: "shape-wide-pre-post",
    title: "Wide pre/post survey",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one student with pre and post columns. Paired change visible.",
    tags: ["data-shape", "pre-post", "survey", "paired"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-long-format", "shape-one-row-student", "paired-t"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | pre_confidence | post_confidence | pre_usefulness | post_usefulness\nS001       | 3              | 4               | 2              | 4\nS002       | 4              | 4               | 3              | 3" },
      { kind: "l", h: "Good for", body: [
        "paired change",
        "pre/post comparison",
        "confidence change score",
        "baseline-adjusted models"
      ]},
      { kind: "l", h: "Common methods", body: [
        "paired t-test",
        "Wilcoxon signed-rank",
        "McNemar for paired binary outcomes",
        "ANCOVA-style adjustment for post outcome with pre covariate"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Dropping students missing either pre or post can change the analytic sample." },
      { kind: "code", h: "Python check", body: "df[[\"pre_confidence\", \"post_confidence\"]].isna().sum()\ndf[\"confidence_change\"] = df[\"post_confidence\"] - df[\"pre_confidence\"]\ndf[\"confidence_change\"].describe()" },
      { kind: "quote", body: "Wide pre/post data makes paired change visible." }
    ]
  },
  {
    id: "shape-long-format",
    title: "Long repeated-measures format",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one student-by-condition/time observation. Tidy repeated structure.",
    tags: ["data-shape", "long", "repeated-measures", "mixed-effects"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-wide-pre-post", "shape-one-row-student-case"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | condition | confidence | active_time_min\nS001       | Jane      | 3          | 31.5\nS001       | Carl      | 4          | 42.6\nS002       | Jane      | 2          | 22.0\nS002       | Carl      | 3          | 35.0" },
      { kind: "l", h: "Good for", body: [
        "repeated scenarios",
        "roles completed by the same students",
        "multiple time points",
        "repeated-measures ANOVA",
        "mixed-effects models"
      ]},
      { kind: "l", h: "Common methods", body: [
        "paired t-test or Wilcoxon if two conditions",
        "repeated-measures ANOVA if three or more conditions",
        "mixed-effects models for more complex repeated structures"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Do not analyze long repeated rows as independent groups unless the students are actually different across conditions." },
      { kind: "p", h: "Personalized example", body: "IT2900 Jane vs Carl engagement and BMA5008 CEO/CFO/CPTO role simulations can use this shape." },
      { kind: "code", h: "Python check", body: "pd.crosstab(df[\"student_id\"], df[\"condition\"]).head()\ndf.groupby(\"condition\")[\"active_time_min\"].describe()" },
      { kind: "quote", body: "Long repeated data is tidy, but the method must remember that the same students repeat." }
    ]
  },
  {
    id: "shape-coded-segment",
    title: "One row per coded transcript segment",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one coded chunk of transcript. Strength depends on codebook.",
    tags: ["data-shape", "coding", "transcript", "qualitative"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-message", "shape-coder-unit", "shape-coder-columns"],
    sections: [
      { kind: "code", h: "Example layout", body: "segment_id | student_id | case_id | stage | reasoning_code | evidence_use_code\nSEG001     | S001       | Case 2  | dx    | partial        | clear\nSEG002     | S002       | Case 2  | dx    | absent         | absent" },
      { kind: "l", h: "Good for", body: [
        "diagnostic reasoning coding",
        "applied insight coding",
        "chatbot issue coding",
        "process-quality analysis"
      ]},
      { kind: "l", h: "Common methods", body: [
        "frequency tables",
        "crosstabs by case/stage",
        "chi-square if comparing categories and assumptions fit",
        "kappa if two coders coded the same segments"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Coded segment counts depend heavily on the codebook and segmenting rule." },
      { kind: "p", h: "Personalized example", body: "OMS3100 diagnostic reasoning or chatbot teaching-quality audit can use this shape." },
      { kind: "code", h: "Python check", body: "df[\"reasoning_code\"].value_counts(dropna=False)\npd.crosstab(df[\"case_id\"], df[\"reasoning_code\"])" },
      { kind: "quote", body: "Coded-segment data is only as strong as the codebook and unit definition." }
    ]
  },
  {
    id: "shape-coder-unit",
    title: "One row per coder-unit pair",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one coder's code for one unit. Long format for agreement.",
    tags: ["data-shape", "coding", "agreement", "kappa"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-coder-columns", "shape-coded-segment"],
    sections: [
      { kind: "code", h: "Example layout", body: "unit_id | coder_id | code\nU001    | Karina   | clear\nU001    | Sam      | partial\nU002    | Karina   | absent\nU002    | Sam      | absent" },
      { kind: "l", h: "Good for", body: [
        "coder agreement setup",
        "auditing coding consistency",
        "preparing kappa calculations"
      ]},
      { kind: "l", h: "Common methods", body: [
        "reshape to one row per unit with coder columns",
        "Cohen's kappa",
        "weighted kappa for ordered categories",
        "percent agreement"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Kappa needs the same units coded by both coders. If coders coded different units, agreement cannot be computed directly." },
      { kind: "code", h: "Python check", body: "df.groupby(\"unit_id\")[\"coder_id\"].nunique().value_counts()\n\nwide = df.pivot(index=\"unit_id\", columns=\"coder_id\", values=\"code\")\nwide.head()" },
      { kind: "quote", body: "Coder agreement requires matching the same unit across coders." }
    ]
  },
  {
    id: "shape-coder-columns",
    title: "One row per unit with two coder columns",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one unit with each coder as a column. Wide format for kappa.",
    tags: ["data-shape", "coding", "kappa", "agreement"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-coder-unit", "shape-coded-segment"],
    sections: [
      { kind: "code", h: "Example layout", body: "unit_id | coder1_code | coder2_code\nU001    | clear       | partial\nU002    | absent      | absent" },
      { kind: "l", h: "Good for", body: [
        "Cohen's kappa",
        "weighted kappa",
        "percent agreement",
        "disagreement tables"
      ]},
      { kind: "l", h: "Common methods", body: [
        "Cohen's kappa for categorical codes",
        "weighted kappa for ordered codes",
        "crosstab disagreement table"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "A high agreement coefficient does not prove the construct is valid." },
      { kind: "code", h: "Python check", body: "pd.crosstab(df[\"coder1_code\"], df[\"coder2_code\"])" },
      { kind: "quote", body: "Agreement tells you whether coders applied the code consistently, not whether the code measures the right construct." }
    ]
  },
  {
    id: "shape-merged-survey-performance",
    title: "Merged survey + chatbot performance dataset",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one student with linked survey and chatbot variables.",
    tags: ["data-shape", "merge", "survey", "performance"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-student", "shape-wide-pre-post"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | pre_confidence | post_confidence | chatbot_score | active_time_min | completed\nS001       | 3              | 4               | 82.5          | 24.5            | 1\nS002       | 2              | 3               |               | 6.2             | 0" },
      { kind: "l", h: "Good for", body: [
        "linking pre/post survey with chatbot performance",
        "confidence change vs chatbot score",
        "engagement-performance association",
        "completion vs survey change",
        "baseline-adjusted post outcome models"
      ]},
      { kind: "l", h: "Common methods", body: [
        "paired pre/post comparison",
        "correlation between score and change",
        "ANCOVA-style adjustment",
        "logistic regression for completion",
        "missing-data sensitivity"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "The linked dataset may only include students with complete survey and chatbot data." },
      { kind: "p", h: "Personalized example", body: "This is the shape for questions like:\n\nDo students who perform better in the chatbot also show larger confidence gains?" },
      { kind: "code", h: "Python check", body: "cols = [\n    \"pre_confidence\",\n    \"post_confidence\",\n    \"chatbot_score\",\n    \"active_time_min\",\n    \"completed\"\n]\n\ndf[cols].isna().sum()\ndf[\"confidence_change\"] = df[\"post_confidence\"] - df[\"pre_confidence\"]" },
      { kind: "quote", body: "Merged survey-performance data is powerful, but missingness after linking is part of the result." }
    ]
  },
  {
    id: "shape-dashboard",
    title: "Dashboard summary table",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is a pre-aggregated summary group. Communication surface, not analysis source.",
    tags: ["data-shape", "dashboard", "summary", "aggregation"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-student-case", "shape-rubric-wide"],
    sections: [
      { kind: "code", h: "Example layout", body: "case_id | arm | n_eligible | mean_score_pct | median_active_time | completion_rate\nCase 1  | A   | 32         | 74.5           | 22.1               | 0.81\nCase 1  | B   | 37         | 79.3           | 24.8               | 0.84" },
      { kind: "l", h: "Good for", body: [
        "instructor-facing dashboards",
        "summary reports",
        "high-level monitoring",
        "identifying areas for deeper review"
      ]},
      { kind: "l", h: "Common methods", body: [
        "descriptive statistics",
        "visual summaries",
        "effect sizes if comparing groups",
        "sensitivity notes and denominator notes"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Summary tables hide the raw row structure. They are not the right starting point for statistical testing unless you know how they were created." },
      { kind: "p", h: "Personalized example", body: "PharSim dashboard views summarize performance and engagement, but the meaning depends on performance eligibility and denominator rules." },
      { kind: "code", h: "Python check", body: "summary[[\"n_eligible\", \"mean_score_pct\", \"completion_rate\"]].head()" },
      { kind: "quote", body: "Dashboard tables are communication surfaces; keep the analytic source rows traceable." }
    ]
  },
  {
    id: "shape-rubric-wide",
    title: "Wide rubric domain scores",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Each row is one student-case with rubric domains in columns.",
    tags: ["data-shape", "rubric", "domains", "wide"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-student-case", "shape-dashboard"],
    sections: [
      { kind: "code", h: "Example layout", body: "student_id | case_id | communication_pct | history_pct | reasoning_pct | total_pct\nS001       | Case 1  | 85.0              | 78.0        | 72.0          | 78.4\nS002       | Case 1  | 70.0              | 69.0        | 65.0          | 68.1" },
      { kind: "l", h: "Good for", body: [
        "domain performance comparison",
        "rubric dashboards",
        "correlation among domains",
        "identifying strengths/weaknesses"
      ]},
      { kind: "l", h: "Common methods", body: [
        "descriptive domain tables",
        "heatmaps",
        "correlation among domains",
        "repeated/multivariate analysis later, with care"
      ]},
      { kind: "callout", tone: "warn", h: "Red flag", body: "Different domains may have different maxima, weights, and reliability." },
      { kind: "p", h: "Personalized example", body: "MD1140-style domain scores and PharSim rubric domains can use this shape." },
      { kind: "code", h: "Python check", body: "domain_cols = [\"communication_pct\", \"history_pct\", \"reasoning_pct\"]\ndf[domain_cols].describe()\ndf[domain_cols].corr()" },
      { kind: "quote", body: "Rubric domains are useful, but they are not automatically equally comparable." }
    ]
  },
  {
    id: "shape-conversion",
    title: "Shape conversion cheatsheet",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Common reshaping moves between data shapes and why.",
    tags: ["data-shape", "conversion", "reshape", "cheatsheet"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-one-row-message", "shape-one-row-transcript", "shape-coder-unit", "shape-coder-columns"],
    sections: [
      { kind: "t", h: "Conversion table", body: [
        ["From", "To", "Why"],
        ["message rows", "transcript summary rows", "analyze engagement per student/attempt"],
        ["attempt rows", "student-case retained row", "main performance summary"],
        ["long repeated rows", "wide paired columns", "paired t-test / Wilcoxon"],
        ["wide survey items", "composite score", "analyze construct-level scale"],
        ["coder-unit long rows", "coder columns wide", "compute kappa"],
        ["raw scores", "percentage scores", "compare across different maxima"],
        ["student-case rows", "student-level summary", "link with one-row survey data"]
      ]}
    ]
  },
  {
    id: "shape-final-checklist",
    title: "Final data shape checklist",
    type: "Data shape",
    level: "data-shape",
    pathway: "Data Type",
    summary: "Fill-in-the-blank prompts to run before choosing a method.",
    tags: ["data-shape", "checklist", "row-meaning"],
    source: "../what_the_stat_content/data_shape_gallery_v1.md",
    related: ["shape-router", "shape-conversion"],
    sections: [
      { kind: "p", h: "Before choosing a method, write", body: "Before choosing a method, write:" },
      { kind: "code", h: "Checklist", body: "My dataset has one row per ________.\nThe same student appears ________ times.\nMy outcome variable is ________.\nMy predictor/group/time/case variable is ________.\nThe method must account for ________.\nThe claim can speak about ________.\nThe claim cannot speak about ________." },
      { kind: "quote", body: "If you know what one row means, you are halfway to knowing what analysis is possible." }
    ]
  }
];
