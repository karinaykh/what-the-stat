window.WTS_DECISION_CARDS = [
  {
    id: "decide-emergency-router",
    title: "Beginner emergency router",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Construct -> Measurement -> Sample -> Data Type -> Research Question -> Analysis -> Evidence -> Claim",
    summary: "Quick lookup: match the shape of your question to the right starting point and likely cards.",
    tags: ["router", "decision", "quick-reference"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["decide-before-test", "decide-describe", "decide-compare-two-groups", "decide-pre-post", "decide-compare-many-groups", "decide-association", "decide-prediction", "decide-survey-scale", "decide-coder-reliability", "decide-transcript-engagement", "decide-transcript-performance", "decide-audit"],
    sections: [
      { kind: "t", h: "If your question sounds like...", body: [
        ["If your question sounds like...", "Start here", "Likely cards"],
        ["What happened in my dataset?", "Describe", "Descriptive Table, Choosing A Graph, Mean vs Median"],
        ["Are two groups different?", "Compare independent groups", "Independent Samples t-test, Mann-Whitney U"],
        ["Did the same students change?", "Compare paired measurements", "Paired Samples t-test, Wilcoxon Signed-Rank"],
        ["Are three or more groups different?", "Compare multiple groups", "One-Way ANOVA"],
        ["Are two variables related?", "Association", "Pearson Correlation, Spearman Correlation, Chi-Square"],
        ["Can X predict Y?", "Prediction", "Simple/Multiple Linear Regression, Logistic Regression"],
        ["Can I average these survey items?", "Measurement/reliability", "Composite Score, Cronbach's Alpha, Spearman-Brown"],
        ["Do coders agree?", "Coding reliability", "Cohen's Kappa, Coder Agreement"],
        ["Did students engage with the chatbot?", "Transcript engagement", "Chat Transcript Evaluation Guide"],
        ["Did students perform well in the simulation?", "Performance/rubric analysis", "Descriptive Table, t-test/ANOVA/regression depending design"],
        ["Did the chatbot teach safely?", "Teaching-quality audit", "Codebook, Coder Agreement, Cohen's Kappa, Descriptive Table"]
      ]}
    ]
  },
  {
    id: "decide-before-test",
    title: "Before the test: are you ready?",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Construct -> Measurement -> Sample -> Data Type -> Research Question -> Claim",
    summary: "Seven questions you need to answer before choosing a statistical method.",
    tags: ["readiness", "before-test", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["construct", "operationalization", "sample", "variable", "claim", "decide-emergency-router"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "You are not ready to choose a statistical method if you cannot yet answer:" },
      { kind: "l", h: "Questions to answer first", body: [
        "What is the construct?",
        "How was it measured?",
        "What is one row in the dataset?",
        "What is the outcome variable?",
        "What is the predictor/grouping/time variable?",
        "What population can this sample speak about?",
        "What claim do you hope to make?"
      ]},
      { kind: "p", h: "Example from your work", body: "In a chatbot transcript project, number of student messages may measure engagement, but it does not automatically measure learning. Before choosing a test, decide whether the construct is participation, effort, persistence, reasoning quality, performance, or learning." }
    ]
  },
  {
    id: "decide-describe",
    title: "I just want to describe what happened",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Sample -> Research Question -> Analysis -> Evidence -> Claim",
    summary: "You are not testing a hypothesis yet — you are summarizing a class, cohort, case, or simulation.",
    tags: ["describe", "decision", "denominator", "summary"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["descriptive-table", "choosing-graph", "mean-vs-median", "sd-vs-iqr", "evidence", "claim"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "You want to summarize a class, cohort, case, or simulation.",
        "You are not yet testing a hypothesis.",
        "You need denominators, means, medians, percentages, or visual summaries."
      ]},
      { kind: "p", h: "Ask yourself", body: "What is the unit I am describing?\n\nWhat is the denominator?\n\nWhat summary actually makes sense?" },
      { kind: "l", h: "Possible methods or outputs", body: [
        "frequency table",
        "mean and SD",
        "median and IQR",
        "completion rate",
        "engagement-time summary",
        "score distribution",
        "dashboard table or heatmap"
      ]},
      { kind: "p", h: "Personalized example", body: "PharSim-style question:\n\nHow many students attempted, completed, and became performance-eligible for each case?\n\nThis is descriptive first. Before comparing arms or cases, you need clean denominators:\n\n- attempted at least one case\n- completed by End Chat\n- performance-eligible\n- has parsed rubric score" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "In this dataset, X students completed at least one simulation and Y student-case attempts were performance-eligible." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "The intervention worked.\n\nA descriptive table alone does not establish intervention effect." }
    ]
  },
  {
    id: "decide-compare-two-groups",
    title: "I want to compare two independent groups",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Sample -> Data Type -> Research Question -> Analysis -> Claim",
    summary: "Different students in two arms, cohorts, classes, or conditions.",
    tags: ["compare", "two-groups", "decision", "different-participants"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["independent-t", "mann-whitney", "chi-square", "logistic-regression", "statistical-vs-practical-significance"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "You have two different groups of students.",
        "Each student belongs to only one group.",
        "The outcome is a score, rating, completion status, or other measured variable."
      ]},
      { kind: "p", h: "Ask yourself", body: "Are these truly different students, or the same students measured twice?\n\nWhat type of outcome do I have?" },
      { kind: "t", h: "Likely direction", body: [
        ["Outcome type", "Possible method"],
        ["continuous score", "Independent Samples t-test"],
        ["ordinal/skewed score", "Mann-Whitney U"],
        ["binary/categorical outcome", "Chi-Square or Logistic Regression"]
      ]},
      { kind: "p", h: "Personalized example", body: "PharSim-style question:\n\nDo Arm 1 and Arm 2 differ in main_total_pct for Case 1?\n\nIf Arm 1 and Arm 2 are different students, and main_total_pct is a percentage score, you might start with:\n\n- descriptive group means/medians\n- effect size such as Hedges g\n- Welch t-test as a reference comparison\n\nSenior researcher caution:\n\nOnly call this an intervention effect if you know what the arms mean and the design supports that interpretation." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Arm 2 had a higher/lower average case score than Arm 1 in this dataset." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Arm 2 caused better learning.\n\nThat depends on assignment, baseline equivalence, missing data, and study design." }
    ]
  },
  {
    id: "decide-pre-post",
    title: "I want to compare the same students twice",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Sample -> Data Type -> Research Question -> Analysis -> Claim",
    summary: "Same students, two measurements — before/after, pre/post, or condition A vs B.",
    tags: ["compare", "pre-post", "decision", "same-participants"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["paired-t", "wilcoxon", "descriptive-vs-inferential", "tr-big-distinction"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "The same students have two measurements.",
        "You care about within-student change.",
        "The two measurements are linked."
      ]},
      { kind: "p", h: "Ask yourself", body: "Are the two scores paired for the same student?\n\nIs the outcome continuous, ordinal, or categorical?" },
      { kind: "t", h: "Likely direction", body: [
        ["Outcome type", "Possible method"],
        ["continuous score", "Paired Samples t-test"],
        ["ordinal/skewed score", "Wilcoxon Signed-Rank"],
        ["binary before/after outcome", "McNemar test, future card needed"]
      ]},
      { kind: "p", h: "Personalized example", body: "IT2900-style question:\n\nDid the same students spend more time with Carl than Jane?\n\nIf each student interacted with both Jane and Carl, the data are paired. If engagement time is skewed, Wilcoxon signed-rank may be more appropriate than a paired t-test." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Students tended to spend more time in one scenario than the other." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "The scenario caused deeper learning.\n\nEngagement time is process evidence, not direct evidence of learning." }
    ]
  },
  {
    id: "decide-compare-many-groups",
    title: "I want to compare three or more groups",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Sample -> Data Type -> Research Question -> Analysis -> Claim",
    summary: "One grouping variable with three or more independent categories.",
    tags: ["compare", "anova", "decision", "many-groups"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["anova", "t-vs-anova", "choosing-graph", "researcher-degrees-of-freedom"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "You have one grouping variable with three or more categories.",
        "You want to compare mean outcomes.",
        "The groups are independent."
      ]},
      { kind: "p", h: "Ask yourself", body: "How many groups are there?\n\nDo I need to know which group differs from which?" },
      { kind: "l", h: "Likely direction", body: [
        "One-Way ANOVA for continuous outcomes across three or more groups.",
        "Post-hoc comparisons if the overall ANOVA suggests differences.",
        "Kruskal-Wallis may be needed for ordinal/skewed outcomes, future card needed."
      ]},
      { kind: "p", h: "Personalized example", body: "Emir/BMA5008-style question:\n\nDo students show different engagement patterns when interviewing CEO, CFO, and CPTO agents?\n\nIf each student interviews all three roles, the data are repeated within student, so a simple one-way ANOVA may not be enough. If different students only interview one role, one-way ANOVA may fit better." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Engagement differed across role conditions in the observed data." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "One role is pedagogically better.\n\nYou would need stronger evidence about learning, performance, and task design." }
    ]
  },
  {
    id: "decide-association",
    title: "I want to know whether two variables are related",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Data Type -> Research Question -> Analysis -> Claim",
    summary: "Two variables measured for the same cases — do higher values or categories go together?",
    tags: ["association", "correlation", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["pearson", "spearman", "chi-square", "correlation-not-causation", "tr-big-distinction"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "You have two variables measured for the same cases.",
        "You want to know whether higher values or categories go together."
      ]},
      { kind: "p", h: "Ask yourself", body: "Are both variables numeric, ordinal, or categorical?\n\nIs one variable clearly an outcome, or am I just describing association?" },
      { kind: "t", h: "Likely direction", body: [
        ["Variable situation", "Possible method"],
        ["two continuous variables, linear", "Pearson correlation"],
        ["ordinal/skewed/ranked variables", "Spearman correlation"],
        ["two categorical variables", "Chi-Square"]
      ]},
      { kind: "p", h: "Personalized example", body: "Transcript-engagement question:\n\nAre students who send more messages also receiving higher performance scores?\n\nIf message count is skewed and performance score is numeric, Spearman correlation may be a sensible first check.\n\nSenior researcher caution:\n\nHigher message count could mean engagement, confusion, struggle, or inefficient interaction. Do not interpret it as \"better learning\" without additional evidence." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Message count was positively/negatively associated with performance score." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Sending more messages caused better performance." }
    ]
  },
  {
    id: "decide-prediction",
    title: "I want to predict a score or outcome",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Data Type -> Research Question -> Analysis -> Claim",
    summary: "You have a clear outcome variable and want to model predictors, possibly with covariates.",
    tags: ["predict", "regression", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["linear-regression", "multiple-regression", "logistic-regression", "linear-vs-logistic"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "You have a clear outcome variable.",
        "You want to model predictors.",
        "You may need covariates."
      ]},
      { kind: "p", h: "Ask yourself", body: "What type of outcome am I predicting?" },
      { kind: "t", h: "Likely direction", body: [
        ["Outcome type", "Possible method"],
        ["continuous score", "Linear regression"],
        ["binary yes/no outcome", "Logistic regression"],
        ["count outcome", "Poisson/negative binomial, future card needed"]
      ]},
      { kind: "p", h: "Personalized example", body: "MD1140-style question:\n\nCan history-taking score predict clinical reasoning score?\n\nIf both are numeric rubric scores, simple or multiple linear regression may fit.\n\nIf the outcome is completed stage 2: yes/no, logistic regression is more appropriate." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "History-taking score was associated with clinical reasoning score in a regression model." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "History-taking caused clinical reasoning performance." }
    ]
  },
  {
    id: "decide-survey-scale",
    title: "I want to analyze survey items",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Construct -> Measurement -> Data Type -> Analysis",
    summary: "Likert items, composites, or scales — for description, reliability, or comparison.",
    tags: ["survey", "likert", "scale", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["likert-item-scale", "composite-score", "cronbach", "spearman-brown", "paired-t", "wilcoxon"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "You have Likert items.",
        "You want to make a composite or scale.",
        "You want to compare perceptions before/after or across groups."
      ]},
      { kind: "p", h: "Ask yourself", body: "Is this one item, several items for one construct, or several constructs?" },
      { kind: "t", h: "Likely direction", body: [
        ["Situation", "Possible method/procedure"],
        ["one Likert item", "item-level descriptive or non-parametric comparison"],
        ["several items, one construct", "composite score, Cronbach's alpha"],
        ["exactly two items", "Spearman-Brown"],
        ["pre/post survey scale", "paired t-test or Wilcoxon"],
        ["group comparison on scale", "t-test/ANOVA or non-parametric alternative"]
      ]},
      { kind: "p", h: "Personalized example", body: "IT2900-style question:\n\nDid students report different cognitive load between two chatbot scenarios?\n\nIf the same students rated both scenarios and the composite score is ordinal/skewed, Wilcoxon signed-rank may fit." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Students reported higher cognitive load in one scenario than the other." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "The chatbot objectively created more learning.\n\nPerception scales are valuable, but they are still self-report evidence." }
    ]
  },
  {
    id: "decide-transcript-performance",
    title: "I want to evaluate chat transcript performance",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Construct -> Measurement -> Analysis -> Claim",
    summary: "Students interacted with a chatbot, AI patient, roleplay agent, or tutor and you want to evaluate response quality.",
    tags: ["transcript", "performance", "rubric", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["tr-big-distinction", "codebook", "coder-agreement", "cohen-kappa", "descriptive-table"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "Students interacted with a chatbot, AI patient, roleplay agent, or tutor.",
        "You want to evaluate quality of student responses.",
        "You have transcript text and maybe scores, codes, or rubrics."
      ]},
      { kind: "p", h: "Ask yourself", body: "What counts as performance?\n\nIs performance already scored, or do I need to code it?" },
      { kind: "l", h: "Possible performance measures", body: [
        "total rubric score",
        "domain scores",
        "stage completion",
        "correct diagnosis or answer",
        "quality of reasoning",
        "evidence use",
        "applied insight: yes/partial/no",
        "appropriate question asked",
        "misconception corrected"
      ]},
      { kind: "p", h: "Personalized example", body: "OMS3100-style question:\n\nDid students demonstrate disciplined diagnostic reasoning in the radiographic chatbot?\n\nThis is not automatically a t-test question. First, you need a coding scheme or rubric:\n\n- radiographic description quality\n- category reasoning\n- differential diagnosis quality\n- uncertainty handling\n- evidence use\n\nOnly after those are measured can you choose descriptive statistics, coder reliability, group comparisons, or regression." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "In coded transcript segments, X percent showed evidence-supported diagnostic reasoning." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Students learned clinical reasoning from the chatbot.\n\nLearning requires stronger design evidence, such as pre/post, comparison group, or performance trajectory." }
    ]
  },
  {
    id: "decide-transcript-engagement",
    title: "I want to evaluate chat transcript engagement",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Construct -> Measurement -> Data Type -> Analysis -> Claim",
    summary: "Did students use the chatbot, persist, or interact deeply? Use counts, time, turns, attempts.",
    tags: ["transcript", "engagement", "process", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["tr-big-distinction", "paired-t", "wilcoxon", "spearman", "descriptive-table"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "You want to know whether students used the chatbot, persisted, or interacted deeply.",
        "You have message counts, time, turns, attempts, or completion markers."
      ]},
      { kind: "p", h: "Ask yourself", body: "Am I measuring amount of activity, pattern of activity, or quality of engagement?" },
      { kind: "l", h: "Possible engagement measures", body: [
        "number of student messages",
        "total student words",
        "active time",
        "completion status",
        "number of attempts",
        "reattempt after feedback",
        "response length",
        "number of substantive turns",
        "proportion of prompts completed"
      ]},
      { kind: "p", h: "Personalized example", body: "PharSim-style question:\n\nDo students who reattempt a case improve their score?\n\nThis is trajectory/process analysis. If the same student-case has attempt 1 and attempt 2 scores, treat attempts as paired or repeated, not independent." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Among students who reattempted, later attempts tended to show higher/lower scores." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Reattempting caused improvement.\n\nStudents who reattempt may differ from students who do not." }
    ]
  },
  {
    id: "decide-audit",
    title: "I want to evaluate chatbot teaching quality or safety",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Construct -> Measurement -> Analysis -> Claim",
    summary: "The unit being evaluated is the chatbot's response quality — hallucination, accuracy, grounding, feedback.",
    tags: ["audit", "safety", "teaching-quality", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["tr-big-distinction", "codebook", "coder-agreement", "cohen-kappa", "descriptive-table", "validity"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "The unit being evaluated is the chatbot's response quality.",
        "You care about hallucination, factual accuracy, case grounding, feedback quality, or protocol adherence.",
        "You need an audit trail."
      ]},
      { kind: "p", h: "Ask yourself", body: "What kind of teaching-quality risk am I coding?\n\nWho decides whether the response is wrong or unsafe?" },
      { kind: "l", h: "Possible measures", body: [
        "issue present: yes/no",
        "issue type",
        "severity level",
        "case-grounding error",
        "factual error",
        "premature answer reveal",
        "student-response tracking error",
        "reasoning-quality problem",
        "excessive praise or weak feedback"
      ]},
      { kind: "p", h: "Personalized example", body: "OMS3100-style question:\n\nDid the bot force diagnostic certainty when the radiograph alone did not support a ranked diagnosis?\n\nThis should start as a rubric/audit question, not a statistical-test question. You may later summarize counts and percentages by case, stage, or issue type." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "The audit identified recurring case-grounding and diagnostic-uncertainty issues in selected transcript segments." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "The chatbot is safe/unsafe overall.\n\nThat requires defined criteria, coverage, severity thresholds, and expert review." }
    ]
  },
  {
    id: "decide-coder-reliability",
    title: "I want to check coder or AI-evaluator reliability",
    type: "Decision path",
    level: "decision-guide",
    pathway: "Measurement -> Analysis -> Claim",
    summary: "Two coders coded transcript segments, or an AI evaluator produced scores you need to verify.",
    tags: ["reliability", "coder", "kappa", "decision"],
    source: "../what_the_stat_content/decision_guide_v1.md",
    related: ["cohen-kappa", "coder-agreement", "reliability-vs-validity", "codebook", "descriptive-table"],
    sections: [
      { kind: "l", h: "Use this path if", body: [
        "Two coders coded transcript segments.",
        "An AI evaluator produced scores and you need to verify extraction or consistency.",
        "You need to know whether measurement is trustworthy."
      ]},
      { kind: "p", h: "Ask yourself", body: "Am I checking agreement between coders, or checking whether extracted scores match the source?" },
      { kind: "t", h: "Likely direction", body: [
        ["Situation", "Possible method/procedure"],
        ["two human coders, categorical codes", "Cohen's Kappa"],
        ["two human coders, ordinal codes", "weighted kappa, future card needed"],
        ["extracted scores vs source text", "verification/audit, not kappa by default"],
        ["internal consistency of survey items", "Cronbach's Alpha or Spearman-Brown"]
      ]},
      { kind: "p", h: "Personalized example", body: "MD1140-style issue:\n\nIf an AI-generated evaluation score has arithmetic inconsistencies, the problem is not solved by a statistical test. First verify whether the source evaluation itself is internally consistent." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "The extraction accurately captured the source text, but the source evaluation contained scoring inconsistencies." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "The scores are valid because the extraction was accurate.\n\nExtraction accuracy and score validity are different." }
    ]
  }
];
