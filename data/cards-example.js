window.WTS_EXAMPLE_CARDS = [
  {
    id: "ex-big-linking-question",
    title: "The big linking question",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Sample -> Data Type -> Research Question -> Analysis -> Evidence -> Claim",
    summary: "Pre/post survey + chatbot performance: one of the most important example families for learning intervention evaluation.",
    tags: ["example", "pre-post", "survey", "chatbot", "linking"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["ex-linking-data-shape", "example-confidence-change", "example-perf-vs-survey-change", "example-linked-engagement-perf"],
    sections: [
      { kind: "p", h: "Pre/post survey + chatbot performance", body: "This is one of the most important example families for learning intervention evaluation." },
      { kind: "p", h: "Three layers to connect", body: "You are usually trying to connect three layers:" },
      { kind: "t", h: "The three layers", body: [
        ["Layer", "What it measures", "Example"],
        ["Pre survey", "baseline perception, confidence, knowledge, or readiness", "AI confidence before simulation"],
        ["Chatbot trace/performance", "what happened during the intervention", "completion, message count, rubric score"],
        ["Post survey", "later perception, confidence, knowledge, or experience", "AI confidence after simulation"]
      ]},
      { kind: "p", h: "Senior researcher note", body: "The cleanest thinking is temporal:\n\n`Pre survey -> chatbot activity/performance -> post survey`\n\nBut temporal order alone does not prove causation. You still need design evidence." }
    ]
  },
  {
    id: "ex-linking-data-shape",
    title: "Basic data shape for linking survey and chatbot data",
    type: "Personal example",
    level: "example",
    pathway: "Sample -> Data Type -> Analysis",
    summary: "Ideally, create one row per student linking pre, post, performance, and engagement variables.",
    tags: ["example", "data-shape", "survey", "chatbot", "linking"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["ex-big-linking-question", "example-confidence-change", "example-linked-engagement-perf"],
    sections: [
      { kind: "p", h: "One row per student", body: "Ideally, create one row per student." },
      { kind: "code", h: "Wide layout", body: "student_id | pre_confidence | post_confidence | chatbot_score | message_count | active_time_min | completed | arm" },
      { kind: "p", h: "Derived variables", body: "Then create useful derived variables:" },
      { kind: "code", h: "Python", body: "df[\"confidence_change\"] = df[\"post_confidence\"] - df[\"pre_confidence\"]\ndf[\"completed\"] = df[\"completed\"].astype(int)" },
      { kind: "p", h: "First checks", body: "First checks:" },
      { kind: "code", h: "Python", body: "df[[\n    \"pre_confidence\",\n    \"post_confidence\",\n    \"confidence_change\",\n    \"chatbot_score\",\n    \"message_count\",\n    \"active_time_min\",\n    \"completed\"\n]].describe()\n\ndf[[\n    \"pre_confidence\",\n    \"post_confidence\",\n    \"chatbot_score\"\n]].isna().sum()" },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "If only students who completed the chatbot have performance scores, then linking performance to survey change only describes completers. It does not describe all enrolled students." }
    ]
  },
  {
    id: "example-confidence-change",
    title: "Did students' confidence change after the chatbot?",
    type: "Personal example",
    level: "example",
    pathway: "Measurement -> Data Type -> Research Question -> Analysis -> Claim",
    summary: "Pre/post confidence survey, same students. The classic paired pre/post problem.",
    tags: ["example", "pre-post", "survey", "chatbot", "paired"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["paired-t", "wilcoxon", "likert-item-scale", "composite-score", "cronbach"],
    sections: [
      { kind: "p", h: "Research situation", body: "Students complete a confidence survey before and after an AI tutor or simulation activity." },
      { kind: "p", h: "What the question sounds like", body: "`Did students report higher confidence after using the chatbot?`" },
      { kind: "p", h: "Unit of analysis", body: "One student." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`pre_confidence`", "`post_confidence`"] },
      { kind: "p", h: "Data shape", body: "One row per student, with pre and post scores in separate columns." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive pre/post means or medians.",
        "Paired samples t-test if the confidence score is approximately continuous.",
        "Wilcoxon signed-rank test if the score is ordinal/skewed or based on a small Likert scale."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Are pre and post responses matched to the same student?",
        "How many students are missing either pre or post?",
        "Is the score a single item or a multi-item scale?",
        "If multi-item, is the scale reliable?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Students reported higher/lower confidence after the chatbot activity.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`The chatbot caused confidence to increase.`\n\nThat requires stronger design evidence than a simple pre/post comparison." }
    ]
  },
  {
    id: "example-perf-vs-survey-change",
    title: "Is chatbot performance associated with survey change?",
    type: "Personal example",
    level: "example",
    pathway: "Research Question -> Data Type -> Analysis -> Claim",
    summary: "Correlate chatbot performance with pre/post confidence change.",
    tags: ["example", "correlation", "chatbot", "survey", "performance"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["pearson", "spearman", "linear-regression", "correlation-not-causation", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Research situation", body: "You have pre/post survey change and chatbot performance scores for the same students." },
      { kind: "p", h: "What the question sounds like", body: "`Do students who performed better in the chatbot also show larger gains in confidence?`" },
      { kind: "p", h: "Unit of analysis", body: "One student or one student-case, depending on whether performance is case-specific." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`pre_confidence`", "`post_confidence`", "`confidence_change`", "`chatbot_score`"] },
      { kind: "p", h: "Data shape", body: "One row per student if there is one overall chatbot score.\n\nOne row per student-case if each case has a separate score, but then you must handle repeated rows per student." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive scatterplot first.",
        "Spearman correlation if change scores or performance scores are skewed.",
        "Pearson correlation if both are continuous and roughly linear.",
        "Simple linear regression if you want to model confidence change as the outcome."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Are survey and chatbot rows matched by stable student ID?",
        "Is `confidence_change` calculated in the correct direction?",
        "Are performance scores comparable across cases?",
        "Is the relationship driven by a few outliers?",
        "Are only completers included?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Chatbot performance was associated with change in self-reported confidence.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Higher chatbot performance caused confidence gains.`\n\nStudents who perform better may already have higher prior knowledge, confidence, motivation, or more time." }
    ]
  },
  {
    id: "example-perf-predicts-post",
    title: "Does chatbot performance predict post survey after accounting for pre survey?",
    type: "Personal example",
    level: "example",
    pathway: "Research Question -> Data Type -> Analysis -> Claim",
    summary: "Multiple regression with pre-confidence as a covariate (ANCOVA-style).",
    tags: ["example", "regression", "ancova", "pre-post", "covariate"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["multiple-regression", "linear-regression", "correlation-not-causation", "researcher-degrees-of-freedom"],
    sections: [
      { kind: "p", h: "Research situation", body: "You want to know whether chatbot performance is related to post-confidence after considering where students started." },
      { kind: "p", h: "What the question sounds like", body: "`Do students with higher chatbot scores have higher post-confidence, even after accounting for pre-confidence?`" },
      { kind: "p", h: "Unit of analysis", body: "One student." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`pre_confidence`", "`post_confidence`", "`chatbot_score`", "optional: `arm`, `prior_score`, `course_section`"] },
      { kind: "p", h: "Data shape", body: "One row per student." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Multiple linear regression: `post_confidence ~ pre_confidence + chatbot_score`",
        "This is sometimes taught as an ANCOVA-style adjustment."
      ]},
      { kind: "code", h: "Python sketch", body: "import statsmodels.formula.api as smf\n\nsub = df[[\n    \"post_confidence\",\n    \"pre_confidence\",\n    \"chatbot_score\"\n]].dropna()\n\nmodel = smf.ols(\n    \"post_confidence ~ pre_confidence + chatbot_score\",\n    data=sub\n).fit()\n\nmodel.summary()" },
      { kind: "l", h: "What to check first", body: [
        "Is post-confidence a reasonable continuous outcome?",
        "Is pre-confidence measured before the chatbot?",
        "Are scores from the same student matched correctly?",
        "Is there enough sample size for the number of predictors?",
        "Are you accidentally controlling for something that happened after the chatbot?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Chatbot performance was associated with post-confidence after accounting for baseline confidence.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Chatbot performance caused post-confidence.`\n\nRegression adjustment helps describe relationships, but it does not automatically make the analysis causal." }
    ]
  },
  {
    id: "example-completers-vs-non",
    title: "Did students who completed the chatbot show different survey change?",
    type: "Personal example",
    level: "example",
    pathway: "Sample -> Research Question -> Analysis -> Claim",
    summary: "Compare completers vs non-completers on confidence change.",
    tags: ["example", "completion", "comparison", "survey", "self-selection"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["independent-t", "mann-whitney", "logistic-regression", "missing-data", "sample"],
    sections: [
      { kind: "p", h: "Research situation", body: "Some students completed the chatbot and others did not. You want to compare survey change." },
      { kind: "p", h: "What the question sounds like", body: "`Did completers show larger confidence gains than non-completers?`" },
      { kind: "p", h: "Unit of analysis", body: "One student." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`pre_confidence`", "`post_confidence`", "`confidence_change`", "`completed`"] },
      { kind: "p", h: "Data shape", body: "One row per student, with `completed` coded yes/no or 1/0." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive comparison first.",
        "Independent samples t-test if `confidence_change` is continuous and reasonable.",
        "Mann-Whitney U if change is ordinal/skewed.",
        "Multiple regression if adjusting for baseline or covariates."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Are non-completers missing post surveys more often?",
        "Is completion a behavior students chose?",
        "Are completers already different at pre survey?",
        "Does `completed` mean opened the chatbot, reached the end, or had performance data?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Completers and non-completers differed in survey change.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Completing the chatbot caused the survey change.`\n\nCompletion is often self-selected and may reflect motivation, time, prior knowledge, or access." }
    ]
  },
  {
    id: "example-engagement-predicts-perf",
    title: "Does engagement predict performance?",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Analysis -> Claim",
    summary: "Engagement traces (time, messages, words) and chatbot performance.",
    tags: ["example", "engagement", "performance", "correlation", "regression"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["spearman", "linear-regression", "tr-big-distinction", "mean-vs-median", "sd-vs-iqr"],
    sections: [
      { kind: "p", h: "Research situation", body: "You have engagement traces and performance scores from chatbot transcripts." },
      { kind: "p", h: "What the question sounds like", body: "`Do students who spend more active time or write more messages score higher?`" },
      { kind: "p", h: "Unit of analysis", body: "Usually one student-attempt or one student-case." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`case_id`", "`active_time_min`", "`student_message_count`", "`student_word_count`", "`performance_score`"] },
      { kind: "p", h: "Data shape", body: "One row per student-attempt or student-case.\n\nIf each student has multiple cases, repeated observations must be handled carefully." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive statistics first.",
        "Spearman correlation for skewed engagement measures.",
        "Linear regression if performance score is a clear continuous outcome.",
        "Mixed-effects models later if there are repeated cases per student."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Does time include idle gaps?",
        "Are message counts skewed?",
        "Is performance measured consistently across cases?",
        "Does higher engagement mean effort, confusion, or both?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Engagement measures were associated with performance scores.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`More messages caused better performance.`\n\nMore activity may also reflect difficulty or struggle." }
    ]
  },
  {
    id: "example-pharsim-arm",
    title: "PharSim arm comparison on case performance",
    type: "Personal example",
    level: "example",
    pathway: "Sample -> Data Type -> Research Question -> Analysis -> Claim",
    summary: "Arm 1 vs Arm 2 differences in case-level performance.",
    tags: ["example", "pharsim", "arm-comparison", "performance", "effect-size"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["independent-t", "multiple-regression", "effect-size", "descriptive-table", "decide-emergency-router"],
    sections: [
      { kind: "p", h: "Research situation", body: "Students are grouped into Arm 1 and Arm 2, and each case has performance scores." },
      { kind: "p", h: "What the question sounds like", body: "`Do Arm 1 and Arm 2 differ in case performance?`" },
      { kind: "p", h: "Unit of analysis", body: "One student-case performance-eligible row." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`case_id`", "`arm`", "`main_total_pct`", "`performance_eligible`"] },
      { kind: "p", h: "Data shape", body: "One row per student-case.\n\nUse only rows that meet the performance-eligible rule for main performance claims." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive case means/medians by arm.",
        "Hedges g or another effect size for arm difference.",
        "Welch t-test as exploratory/reference comparison if the outcome is percentage score.",
        "Mixed/repeated models later if comparing across multiple cases per student."
      ]},
      { kind: "l", h: "What to check first", body: [
        "What do Arm 1 and Arm 2 actually represent?",
        "Were students assigned to arms in a way that supports causal interpretation?",
        "Are case score percentages comparable after accounting for different rubric maxima?",
        "Are denominators clear?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Arm 1 and Arm 2 differed in observed case performance, if the data show that.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Arm assignment caused better performance.`\n\nOnly make that claim if the study design and faculty interpretation support it." }
    ]
  },
  {
    id: "example-pharsim-reattempt",
    title: "PharSim reattempt trajectory",
    type: "Personal example",
    level: "example",
    pathway: "Sample -> Data Type -> Analysis -> Claim",
    summary: "Compare scores across multiple attempts of the same simulation case.",
    tags: ["example", "pharsim", "reattempt", "paired", "trajectory"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["paired-t", "wilcoxon", "tr-big-distinction", "researcher-degrees-of-freedom"],
    sections: [
      { kind: "p", h: "Research situation", body: "Some students attempt the same simulation case more than once." },
      { kind: "p", h: "What the question sounds like", body: "`Did students improve when they reattempted a case?`" },
      { kind: "p", h: "Unit of analysis", body: "One student-case with ordered attempts, or one attempt nested within student-case." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`case_id`", "`attempt_number`", "`attempt_score`", "`reattempted`"] },
      { kind: "p", h: "Data shape", body: "For simple paired analysis, create one row per student-case with attempt 1 and attempt 2 scores." },
      { kind: "code", h: "Wide layout", body: "student_id | case_id | score_attempt_1 | score_attempt_2" },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive trajectory first.",
        "Paired t-test if attempt scores are continuous and reasonable.",
        "Wilcoxon signed-rank if scores are skewed or sample is small.",
        "Later: repeated-measures or mixed-effects model if there are many attempts."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Are attempt numbers ordered correctly?",
        "Do all students have the same number of attempts?",
        "Are reattempt students different from non-reattempt students?",
        "Was feedback given between attempts?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Among students who reattempted, later attempts tended to have higher/lower scores.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Reattempting caused improvement for all students.`\n\nReattempting is usually self-selected." }
    ]
  },
  {
    id: "example-it2900-engagement",
    title: "IT2900 Jane vs Carl engagement",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Data Type -> Analysis -> Claim",
    summary: "Compare engagement on two chatbot scenarios completed by the same students.",
    tags: ["example", "it2900", "engagement", "paired", "scenarios"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["wilcoxon", "paired-t", "descriptive-vs-inferential", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Research situation", body: "The same students interact with two chatbot scenarios." },
      { kind: "p", h: "What the question sounds like", body: "`Did students engage differently with Jane and Carl?`" },
      { kind: "p", h: "Unit of analysis", body: "One student-scenario transcript." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`scenario`", "`active_time_min`", "`student_words`", "`message_count`"] },
      { kind: "p", h: "Data shape", body: "Often long format:" },
      { kind: "code", h: "Long layout", body: "student_id | scenario | active_time_min | student_words" },
      { kind: "p", h: "Reshape for paired tests", body: "For paired tests, reshape or match Jane and Carl values by student." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Median/IQR for skewed engagement.",
        "Wilcoxon signed-rank if same students completed both scenarios.",
        "Paired t-test if engagement measures are approximately continuous and well-behaved."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Did the same students complete both scenarios?",
        "Are time metrics affected by idle gaps?",
        "Is engagement time skewed?",
        "Are you comparing engagement, not learning?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Students spent more time or wrote more words in one scenario than the other.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`One scenario produced more learning.`\n\nEngagement is process evidence." }
    ]
  },
  {
    id: "example-it2900-survey",
    title: "IT2900 survey perception and scenario experience",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Analysis -> Claim",
    summary: "Compare student perception ratings (cognitive load, usefulness, confidence) across scenarios.",
    tags: ["example", "it2900", "survey", "perception", "paired"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["composite-score", "cronbach", "wilcoxon", "reliability-vs-validity"],
    sections: [
      { kind: "p", h: "Research situation", body: "Students rate perceptions such as cognitive load, usefulness, or confidence after scenarios." },
      { kind: "p", h: "What the question sounds like", body: "`Did students report different cognitive load across chatbot scenarios?`" },
      { kind: "p", h: "Unit of analysis", body: "One student-scenario survey response or one student with paired scenario ratings." },
      { kind: "l", h: "Variables needed", body: ["`student_id`", "`jane_cognitive_load`", "`carl_cognitive_load`", "optional item-level survey columns"] },
      { kind: "p", h: "Data shape", body: "One row per student with paired columns, or long format with scenario as a condition." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Build composite if multiple items measure the same construct.",
        "Check reliability if there are enough items.",
        "Paired t-test or Wilcoxon signed-rank for same students."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Is cognitive load one item or a composite?",
        "Are items coded in the same direction?",
        "Are the same students rating both scenarios?",
        "Are ratings ordinal/skewed?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Students reported higher cognitive load in one scenario than the other.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`The higher-load scenario was worse.`\n\nCognitive load can be productive or unproductive depending on the learning task and evidence." }
    ]
  },
  {
    id: "example-oms-audit",
    title: "OMS3100 chatbot teaching-quality audit",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Analysis -> Evidence -> Claim",
    summary: "Audit a dentistry chatbot for hallucination, misreading, and unsafe teaching behaviors.",
    tags: ["example", "oms3100", "audit", "qualitative", "coding"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["tr-big-distinction", "codebook", "coder-agreement", "cohen-kappa", "descriptive-table"],
    sections: [
      { kind: "p", h: "Research situation", body: "You need to evaluate whether a dentistry chatbot taught safely and followed case data." },
      { kind: "p", h: "What the question sounds like", body: "`Did the chatbot hallucinate, misread students, reveal answers too early, or force diagnostic certainty?`" },
      { kind: "p", h: "Unit of analysis", body: "Usually bot response, turn pair, or transcript segment." },
      { kind: "l", h: "Variables needed", body: [
        "`case_id`",
        "`attempt_id`",
        "`message_id`",
        "`stage`",
        "`issue_type`",
        "`severity`",
        "`bot_quote`",
        "`student_context`",
        "expert decision or reviewer decision"
      ]},
      { kind: "p", h: "Data shape", body: "One row per flagged segment or one row per reviewed bot response." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Codebook/audit first.",
        "Descriptive counts by issue type, case, and stage.",
        "Coder agreement if more than one reviewer codes.",
        "Chi-square only later if comparing issue distributions and counts are adequate."
      ]},
      { kind: "l", h: "What to check first", body: [
        "What counts as a factual error?",
        "What counts as a teaching-quality risk?",
        "Who is the expert of record?",
        "Is the review sample complete or only flagged segments?",
        "Are severity levels calibrated?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`The transcript audit identified recurring issue types in reviewed segments.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`The chatbot is safe or unsafe overall.`\n\nThat needs coverage rules, severity thresholds, and expert review." }
    ]
  },
  {
    id: "example-oms-reasoning",
    title: "OMS3100 student diagnostic reasoning quality",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Analysis -> Claim",
    summary: "Code student reasoning in radiographic diagnosis transcripts.",
    tags: ["example", "oms3100", "reasoning", "coding", "kappa"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["validity", "reliability", "cohen-kappa", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Research situation", body: "You want to evaluate students' reasoning in radiographic diagnosis transcripts." },
      { kind: "p", h: "What the question sounds like", body: "`Did students use evidence to justify plausible differential diagnoses?`" },
      { kind: "p", h: "Unit of analysis", body: "Student response, diagnosis-stage segment, or full case attempt." },
      { kind: "l", h: "Variables needed", body: [
        "`student_id`",
        "`case_id`",
        "`stage`",
        "`reasoning_code`",
        "`evidence_use_code`",
        "`uncertainty_handling_code`"
      ]},
      { kind: "p", h: "Data shape", body: "One row per coded student response or one row per summarized attempt." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Codebook and expert calibration first.",
        "Percentages of codes by case/stage.",
        "Cohen's kappa if two coders code the same units.",
        "Association with performance or completion later, if measured."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Does the code measure reasoning or just correctness?",
        "Are acceptable answers defined by case?",
        "Are coders distinguishing weak, partial, and strong reasoning consistently?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`X percent of coded responses included evidence-supported diagnostic reasoning.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Students learned diagnostic reasoning from the chatbot.`\n\nYou need change, comparison, or stronger learning evidence for that." }
    ]
  },
  {
    id: "example-md1140-domains",
    title: "MD1140 AI patient domain scores",
    type: "Personal example",
    level: "example",
    pathway: "Measurement -> Data Type -> Analysis -> Evidence",
    summary: "Describe and relate AI patient domain scores (communication, history, reasoning).",
    tags: ["example", "md1140", "ai-patient", "domains", "ai-scoring"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["descriptive-table", "pearson", "spearman", "reliability-vs-validity", "evidence"],
    sections: [
      { kind: "p", h: "Research situation", body: "Students interact with an AI patient and receive domain scores." },
      { kind: "p", h: "What the question sounds like", body: "`How did students perform in communication, history taking, and clinical reasoning?`" },
      { kind: "p", h: "Unit of analysis", body: "One student encounter or one student-stage score." },
      { kind: "l", h: "Variables needed", body: [
        "`student_id`",
        "`communication_score`",
        "`history_taking_score`",
        "`clinical_reasoning_score`",
        "`total_score`",
        "source-verification flags if AI-generated evaluation was used"
      ]},
      { kind: "p", h: "Data shape", body: "One row per student encounter." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive statistics by domain.",
        "Correlations among domain scores.",
        "Regression if predicting one domain from another.",
        "Verification audit before high-stakes interpretation."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Do subscores sum correctly?",
        "Are any scores above the maximum?",
        "Are missing cells meaningful or extraction artifacts?",
        "Is the AI evaluator consistent?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Students' domain scores showed stronger/weaker performance in specific areas, based on the evaluated encounters.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`The AI scores are valid because they are numeric.`\n\nScore validity depends on the rubric, evaluator behavior, and verification." }
    ]
  },
  {
    id: "example-md1140-duration",
    title: "MD1140 duration and idle-time outliers",
    type: "Personal example",
    level: "example",
    pathway: "Measurement -> Data Type -> Analysis -> Claim",
    summary: "Handle wall-clock vs active-time outliers when students leave sessions open.",
    tags: ["example", "md1140", "duration", "outliers", "robustness"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["mean-vs-median", "sd-vs-iqr", "robustness-check", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Research situation", body: "Chatbot logs show very long durations because students leave sessions open." },
      { kind: "p", h: "What the question sounds like", body: "`How much time did students actually spend engaging with the AI patient?`" },
      { kind: "p", h: "Unit of analysis", body: "One student stage or encounter." },
      { kind: "l", h: "Variables needed", body: [
        "`student_id`",
        "`stage`",
        "`wall_clock_duration_min`",
        "`active_time_capped_5_min`",
        "`active_time_capped_10_min`",
        "message timestamps"
      ]},
      { kind: "p", h: "Data shape", body: "One row per student-stage or student encounter." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive statistics with median/IQR.",
        "Sensitivity checks using different gap caps.",
        "Avoid mean wall-clock time if outliers are extreme."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Are long durations caused by actual work or idle gaps?",
        "What gap cap is defensible?",
        "Are duration metrics comparable across stages?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Capped active-time estimates suggest students spent approximately X minutes engaging with the task.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Wall-clock duration equals learning time.`\n\nRaw time can be badly distorted by idle sessions." }
    ]
  },
  {
    id: "example-emir-interviews",
    title: "Emir/BMA5008 role simulation interviews",
    type: "Personal example",
    level: "example",
    pathway: "Sample -> Measurement -> Analysis -> Claim",
    summary: "Compare engagement across AI executive role interviews (CEO, CFO, CPTO).",
    tags: ["example", "bma5008", "role-simulation", "engagement", "comparison"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["anova", "paired-t", "wilcoxon", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Research situation", body: "Students interview different AI executive roles such as CEO, CFO, and CPTO." },
      { kind: "p", h: "What the question sounds like", body: "`Do students engage differently with different AI executive roles?`" },
      { kind: "p", h: "Unit of analysis", body: "One student-role transcript." },
      { kind: "l", h: "Variables needed", body: [
        "`student_id`",
        "`role`",
        "`message_count`",
        "`student_word_count`",
        "`active_time_min`",
        "`role_performance_score`",
        "optional survey responses"
      ]},
      { kind: "p", h: "Data shape", body: "Long format:" },
      { kind: "code", h: "Long layout", body: "student_id | role | message_count | active_time_min | performance_score" },
      { kind: "l", h: "Possible analysis direction", body: [
        "Descriptive statistics by role.",
        "If same students completed multiple roles, use paired/repeated approach.",
        "If different students completed different roles, use independent group comparison.",
        "Survey links can be analyzed separately or merged by student."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Did every student complete every role?",
        "Are roles comparable tasks?",
        "Is performance scored using the same rubric?",
        "Are CFO tasks different because financial statements create a different cognitive demand?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Students showed different engagement patterns across executive-role simulations.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`One AI role is better for learning.`\n\nRole differences may reflect task demands, not instructional quality." }
    ]
  },
  {
    id: "example-survey-usefulness-perf",
    title: "Survey usefulness linked to role simulation performance",
    type: "Personal example",
    level: "example",
    pathway: "Measurement -> Research Question -> Analysis -> Claim",
    summary: "Associate perceived usefulness ratings with simulation performance scores.",
    tags: ["example", "survey", "correlation", "usefulness", "role-simulation"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["spearman", "pearson", "linear-regression", "likert-item-scale"],
    sections: [
      { kind: "p", h: "Research situation", body: "After a role simulation, students complete a survey about usefulness, authenticity, confidence, or workload." },
      { kind: "p", h: "What the question sounds like", body: "`Do students who scored higher in the simulation also report higher perceived usefulness?`" },
      { kind: "p", h: "Unit of analysis", body: "One student, or one student-role if surveys are role-specific." },
      { kind: "l", h: "Variables needed", body: [
        "`student_id`",
        "`role`",
        "`performance_score`",
        "`usefulness_rating`",
        "`confidence_rating`",
        "`workload_rating`"
      ]},
      { kind: "p", h: "Data shape", body: "One row per student-role if each role has separate survey ratings.\n\nOne row per student if survey ratings are overall." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Spearman correlation for Likert ratings.",
        "Pearson correlation if scale composites are continuous enough.",
        "Regression if there is a clear outcome and covariates."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Is usefulness measured once overall or once per role?",
        "Is performance role-specific?",
        "Are ratings single items or composites?",
        "Are students nested within teams or roles?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Simulation performance was associated with perceived usefulness.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`Students found it useful because they performed well.`\n\nDirection and causality are not established by association." }
    ]
  },
  {
    id: "example-completion-binary",
    title: "Chatbot completion as a binary outcome",
    type: "Personal example",
    level: "example",
    pathway: "Sample -> Data Type -> Research Question -> Analysis -> Claim",
    summary: "Predict whether students complete the chatbot from baseline and group variables.",
    tags: ["example", "completion", "binary", "logistic-regression", "chi-square"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["chi-square", "logistic-regression", "sample"],
    sections: [
      { kind: "p", h: "Research situation", body: "Some students complete the chatbot, while others start but do not finish." },
      { kind: "p", h: "What the question sounds like", body: "`What predicts whether students complete the chatbot?`" },
      { kind: "p", h: "Unit of analysis", body: "One student or one student-case." },
      { kind: "l", h: "Variables needed", body: [
        "`student_id`",
        "`case_id`",
        "`completed`",
        "`pre_confidence`",
        "`arm`",
        "`prior_score`",
        "`message_count` if used carefully"
      ]},
      { kind: "p", h: "Data shape", body: "One row per student or student-case." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Completion rate table first.",
        "Chi-square if comparing completion by group.",
        "Logistic regression if modeling completion from multiple predictors."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Does `completed` mean reached final message, submitted, evaluated, or reached `End Chat`?",
        "Are there enough completed and incomplete cases?",
        "Are predictors measured before completion?",
        "Are repeated cases nested within students?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`Completion was associated with group or baseline variables.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`The predictor caused completion.`\n\nCompletion behavior is often shaped by motivation, time, access, and course requirements." }
    ]
  },
  {
    id: "example-linked-engagement-perf",
    title: "Linking pre/post survey, engagement, and performance together",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Sample -> Data Type -> Research Question -> Analysis -> Evidence -> Claim",
    summary: "A richer intervention story linking baseline, engagement, performance, and post survey.",
    tags: ["example", "linking", "integration", "pre-post", "engagement", "performance"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["decide-emergency-router", "python-research-workflow", "multiple-regression", "spearman", "paired-t", "tr-big-distinction"],
    sections: [
      { kind: "p", h: "Research situation", body: "You want a richer intervention story using baseline survey, chatbot engagement, chatbot performance, and post survey." },
      { kind: "p", h: "What the question sounds like", body: "`How do students' starting confidence, chatbot engagement, chatbot performance, and post-confidence relate?`" },
      { kind: "p", h: "Unit of analysis", body: "One student." },
      { kind: "l", h: "Variables needed", body: [
        "`student_id`",
        "`pre_confidence`",
        "`post_confidence`",
        "`confidence_change`",
        "`active_time_min`",
        "`message_count`",
        "`chatbot_score`",
        "`completed`"
      ]},
      { kind: "p", h: "Data shape", body: "One row per student, after aggregating chatbot data to the student level." },
      { kind: "l", h: "Possible analysis direction", body: [
        "Start in layers:",
        "1. Describe pre, post, engagement, and performance.",
        "2. Test pre/post change.",
        "3. Check whether engagement is associated with performance.",
        "4. Check whether performance is associated with post survey or survey change.",
        "5. If appropriate, model post survey with pre survey and chatbot performance."
      ]},
      { kind: "l", h: "What to check first", body: [
        "Are all data sources linked by the same student IDs?",
        "How much data is lost after merging?",
        "Are chatbot variables aggregated correctly?",
        "Are engagement and performance distinct constructs?",
        "Is the sample too small for a multi-predictor model?"
      ]},
      { kind: "callout", tone: "ok", h: "What you can claim", body: "`The analysis connects baseline perception, chatbot process measures, performance evidence, and post-intervention perception in one linked dataset.`" },
      { kind: "callout", tone: "warn", h: "What to avoid claiming", body: "`The chatbot pathway caused the outcome pathway.`\n\nThat would require a stronger causal model and design." }
    ]
  },
  {
    id: "ex-common-patterns",
    title: "Common patterns across your work",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Sample -> Claim",
    summary: "Cross-cutting patterns: denominators, engagement vs performance, survey change, transcript coding, AI-score verification.",
    tags: ["example", "patterns", "denominators", "engagement", "reliability"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["ex-senior-questions", "ex-big-linking-question", "example-completion-binary", "example-engagement-predicts-perf"],
    sections: [
      { kind: "p", h: "Pattern 1: Denominators before p-values", body: "Before testing, define who is included:" },
      { kind: "l", h: "Possible denominators", body: [
        "all enrolled students",
        "students who opened the activity",
        "students who completed",
        "students with performance scores",
        "students with linked pre/post surveys",
        "students with usable transcripts"
      ]},
      { kind: "p", h: "Pattern 2: Engagement is not performance", body: "Engagement variables:" },
      { kind: "l", h: "Engagement variables", body: [
        "messages",
        "words",
        "active time",
        "completion",
        "attempts"
      ]},
      { kind: "l", h: "Performance variables", body: [
        "rubric score",
        "correct answer",
        "quality code",
        "domain score",
        "stage completion"
      ]},
      { kind: "p", h: "They may be related", body: "They may be related, but they are not the same construct." },
      { kind: "p", h: "Pattern 3: Survey change is not learning by itself", body: "Survey change can show perception, confidence, cognitive load, usefulness, or self-reported learning.\n\nIt becomes stronger when linked to:" },
      { kind: "l", h: "Stronger linkages", body: [
        "performance scores",
        "transcript-coded reasoning",
        "pre/post task evidence",
        "comparison group",
        "robust measurement"
      ]},
      { kind: "p", h: "Pattern 4: Transcript coding needs reliability", body: "If the variable comes from human judgment:" },
      { kind: "l", h: "Coding steps", body: [
        "build codebook",
        "pilot code",
        "compare coders",
        "revise codebook",
        "report agreement"
      ]},
      { kind: "p", h: "Pattern 5: AI-generated scores need verification", body: "If an AI evaluator created the score:" },
      { kind: "l", h: "Verification steps", body: [
        "check totals and subtotals",
        "check impossible values",
        "sample against source text",
        "separate extraction accuracy from score validity",
        "do not treat numeric output as automatically trustworthy"
      ]}
    ]
  },
  {
    id: "ex-senior-questions",
    title: "The senior researcher question set",
    type: "Personal example",
    level: "example",
    pathway: "Construct -> Measurement -> Sample -> Data Type -> Research Question -> Analysis -> Evidence -> Claim",
    summary: "Eight questions to ask when bringing a new project example.",
    tags: ["example", "questions", "senior-researcher", "checklist"],
    source: "../what_the_stat_content/personalized_example_bank_v1.md",
    related: ["ex-common-patterns", "ex-big-linking-question", "claim", "evidence"],
    sections: [
      { kind: "p", h: "When you bring a new project example, ask", body: "When you bring a new project example, ask:" },
      { kind: "ol", h: "Eight questions", body: [
        "What is the learning/intervention claim I want to make?",
        "What evidence would actually support that claim?",
        "What unit of analysis should each variable use?",
        "Which variables are self-report, behavior, performance, or coded judgment?",
        "Which variables happen before, during, and after the intervention?",
        "What missing data or denominator problem could distort the answer?",
        "What can I responsibly claim if the result is statistically significant?",
        "What can I responsibly claim if it is not significant?"
      ]}
    ]
  }
];
