window.WTS_TRANSCRIPT_CARDS = [
  {
    id: "tr-big-distinction",
    title: "The big distinction",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Measurement",
    summary: "Separate four possible constructs when you look at a transcript: engagement, performance, learning, and process quality.",
    tags: ["transcript", "construct", "engagement", "performance", "learning", "process-quality"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-pathway", "tr-step-2-engagement", "tr-step-3-performance", "tr-step-4-process"],
    sections: [
      { kind: "p", body: "When you look at a transcript, separate four possible constructs:" },
      { kind: "t", h: "Four constructs in a transcript", body: [
        ["Construct", "Plain meaning", "Example evidence"],
        ["Engagement", "How much, how long, or how persistently students interacted", "message count, active time, completion, reattempts"],
        ["Performance", "How well students did on the task", "rubric score, correct diagnosis, quality of response"],
        ["Learning", "Whether students improved or changed understanding", "pre/post score, attempt trajectory, transfer task"],
        ["Process quality", "How students reasoned or interacted", "evidence use, metacognition, clinical reasoning, help-seeking"]
      ]},
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Treating engagement as learning.\n\nMore messages can mean deeper engagement, but it can also mean confusion, struggle, inefficient prompting, or the bot being too demanding." }
    ]
  },
  {
    id: "tr-pathway",
    title: "The transcript-to-analysis pathway",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Measurement -> Sample -> Data Type -> Research Question -> Analysis -> Evidence -> Claim",
    summary: "Use this pathway every time: Transcript -> Unit Of Analysis -> Construct -> Indicator -> Variable -> Data Type -> Research Question -> Analysis -> Claim.",
    tags: ["transcript", "pathway", "workflow", "unit-of-analysis"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-big-distinction", "tr-step-1-unit", "tr-step-11-reporting"],
    sections: [
      { kind: "p", body: "Use this pathway every time:" },
      { kind: "code", body: "Transcript -> Unit Of Analysis -> Construct -> Indicator -> Variable -> Data Type -> Research Question -> Analysis -> Claim" },
      { kind: "p", h: "Example", body: "" },
      { kind: "code", h: "Worked example", body: "Transcript: AI patient conversation\nUnit of analysis: one student-case attempt\nConstruct: history-taking performance\nIndicator: rubric score for history-taking domains\nVariable: history_taking_score\nData type: continuous/percentage score\nResearch question: Do scores differ by intervention arm?\nAnalysis: descriptive table, effect size, possibly Welch t-test\nClaim: Arm scores differed in the observed dataset, if supported" }
    ]
  },
  {
    id: "tr-step-1-unit",
    title: "Step 1: choose the unit of analysis",
    type: "Transcript work",
    level: "transcript",
    pathway: "Sample -> Data Type",
    summary: "The first big decision: what counts as one row in your dataset?",
    tags: ["transcript", "unit-of-analysis", "data-shape", "independence"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-pathway", "tr-step-9-denominators", "tr-step-10-reattempts"],
    sections: [
      { kind: "p", body: "This is the first big decision." },
      { kind: "t", h: "Unit choices", body: [
        ["Unit", "Use when you care about...", "Example"],
        ["Message", "individual utterances", "whether a student asked a clinically relevant question"],
        ["Turn pair", "student message plus bot response", "whether bot feedback responded appropriately"],
        ["Episode", "a stage or segment of the conversation", "diagnostic reasoning stage"],
        ["Transcript/attempt", "one full student-chatbot attempt", "completion, total score, total engagement"],
        ["Student-case", "one student in one simulation case", "PharSim-style case performance"],
        ["Student across cases", "trajectory across multiple tasks", "improvement over repeated cases"],
        ["Class/cohort", "aggregate teaching evaluation", "dashboard summary"]
      ]},
      { kind: "callout", tone: "info", h: "Senior researcher note", body: "Many mistakes happen because the test assumes independent rows, but the dataset has repeated rows for the same student." }
    ]
  },
  {
    id: "tr-step-2-engagement",
    title: "Step 2: decide what counts as engagement",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Measurement -> Analysis",
    summary: "Engagement is about participation pattern, not necessarily quality.",
    tags: ["transcript", "engagement", "indicators", "logs"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-big-distinction", "tr-step-3-performance", "tr-step-4-process"],
    sections: [
      { kind: "p", body: "Engagement is about participation pattern, not necessarily quality." },
      { kind: "l", h: "Deterministic engagement indicators", body: [
        "number of student messages",
        "number of bot messages",
        "total student words",
        "average student message length",
        "session duration",
        "active time with long gaps capped",
        "number of attempts",
        "completion status",
        "reached `End Chat`",
        "number of reattempts",
        "number of stages completed"
      ]},
      { kind: "p", h: "Personalized examples", body: "IT2900-style:\n\n`Did students spend more active time in the Carl scenario than the Jane scenario?`\n\nIf the same students completed both scenarios, this is paired. If engagement time is skewed, Wilcoxon signed-rank may fit." },
      { kind: "p", body: "PharSim-style:\n\n`Which cases had higher completion and performance-eligible rates?`\n\nStart descriptively with denominators. Completion and performance eligibility are not the same thing." },
      { kind: "p", body: "MD1140-style:\n\n`Some wall-clock durations are huge because students left the session idle.`\n\nUse capped active time or sensitivity checks instead of blindly treating wall-clock duration as real engagement." },
      { kind: "callout", tone: "ok", h: "Careful claim", body: "Students spent more active time and wrote more words in Scenario B than Scenario A." },
      { kind: "callout", tone: "warn", h: "Overclaim", body: "Students learned more in Scenario B.\n\nEngagement can support a process claim, but not a learning claim by itself." }
    ]
  },
  {
    id: "tr-step-3-performance",
    title: "Step 3: decide what counts as performance",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Measurement -> Sample -> Analysis",
    summary: "Performance is about quality or correctness.",
    tags: ["transcript", "performance", "rubric", "scoring"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-2-engagement", "tr-step-4-process", "tr-step-6-codebook"],
    sections: [
      { kind: "p", body: "Performance is about quality or correctness." },
      { kind: "l", h: "Possible performance indicators", body: [
        "total score",
        "domain score",
        "percentage of rubric points attained",
        "correct final answer",
        "correct diagnosis",
        "stage completion",
        "number of required elements included",
        "applied insight: yes/partial/no",
        "misconception corrected",
        "quality rating from trained coder"
      ]},
      { kind: "p", h: "Personalized examples", body: "PharSim-style:\n\n`main_total_pct` can measure performance as percentage of available rubric points attained for a case.\n\nBut only use rows that are actually performance-eligible if that is the rule: completed, evaluated, and parseable." },
      { kind: "p", body: "MD1140-style:\n\nAI-generated evaluator scores may have source inconsistencies. Before treating scores as performance evidence, verify that the scoring extraction and source totals make sense." },
      { kind: "p", body: "OMS3100-style:\n\nDiagnostic reasoning quality may not already exist as a score. You may need a rubric or codebook before you can quantify it." },
      { kind: "callout", tone: "ok", h: "Careful claim", body: "Among performance-eligible attempts, students achieved a median score of X percent on Case 2." },
      { kind: "callout", tone: "warn", h: "Overclaim", body: "The chatbot improved clinical reasoning.\n\nTo claim improvement, you need change over time, a comparison condition, or another learning-design anchor." }
    ]
  },
  {
    id: "tr-step-4-process",
    title: "Step 4: decide what counts as process quality",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Measurement -> Analysis",
    summary: "Process quality is about how students reason, not only how much they type or whether they got the final answer.",
    tags: ["transcript", "process-quality", "reasoning", "coding"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-2-engagement", "tr-step-3-performance", "tr-step-6-codebook"],
    sections: [
      { kind: "p", body: "Process quality is about how students reason, not only how much they type or whether they got the final answer." },
      { kind: "l", h: "Possible process codes", body: [
        "uses evidence from the case",
        "asks relevant follow-up questions",
        "justifies answer with data",
        "recognizes uncertainty",
        "revises reasoning after feedback",
        "applies prior feedback",
        "shows metacognitive monitoring",
        "gives shallow answer",
        "repeats chatbot wording without elaboration",
        "asks for answer directly"
      ]},
      { kind: "p", h: "Personalized examples", body: "IT2900-style:\n\nYou might code whether students applied insights in a later response, then examine whether applied insight codes are associated with engagement or scenario type." },
      { kind: "p", body: "OMS3100-style:\n\nYou might code whether students distinguish discriminative from non-discriminative radiographic features." },
      { kind: "p", body: "MD1140-style:\n\nYou might code whether students ask key history-taking questions before jumping to diagnosis." },
      { kind: "callout", tone: "ok", h: "Careful claim", body: "Coded transcripts showed more evidence-supported reasoning in later attempts." },
      { kind: "callout", tone: "warn", h: "Overclaim", body: "The chatbot caused students to become better reasoners.\n\nProcess evidence is powerful, but causal language still depends on design." }
    ]
  },
  {
    id: "tr-step-5-target",
    title: "Step 5: decide whether you are evaluating the student or the chatbot",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Research Question",
    summary: "This distinction matters: separate student performance, chatbot quality, and their interaction.",
    tags: ["transcript", "evaluation-target", "student", "chatbot"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-3-performance", "tr-step-4-process"],
    sections: [
      { kind: "p", body: "This distinction matters." },
      { kind: "t", h: "Evaluation targets", body: [
        ["Evaluation target", "Main question", "Example"],
        ["Student", "Did the student perform, engage, reason, or improve?", "Did the student justify the diagnosis?"],
        ["Chatbot", "Did the chatbot teach safely and respond well?", "Did the bot misrepresent the student's answer?"],
        ["Interaction", "How did the student and bot shape each other?", "Did bot feedback lead to student revision?"]
      ]},
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "Blending student performance and chatbot quality into one vague score.\n\nIf the bot gives poor guidance, student performance may reflect chatbot behavior, not only student ability." }
    ]
  },
  {
    id: "tr-step-6-codebook",
    title: "Step 6: build a codebook if the variable is not already numeric",
    type: "Transcript work",
    level: "transcript",
    pathway: "Measurement -> Data Type",
    summary: "If your construct is not directly in the data, create a codebook.",
    tags: ["transcript", "codebook", "coding", "qualitative"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-4-process", "tr-step-7-reliability"],
    sections: [
      { kind: "p", body: "If your construct is not directly in the data, create a codebook." },
      { kind: "code", h: "Codebook skeleton", body: "Construct:\nUnit of analysis:\nCode name:\nCode values:\nInclusion rule:\nExclusion rule:\nPositive example:\nNegative example:\nBorderline example:\nWhat this code can claim:\nWhat this code cannot claim:" },
      { kind: "code", h: "Example code: evidence-supported reasoning", body: "Construct: diagnostic reasoning quality\nUnit of analysis: student response during diagnosis stage\nCode values: 0 = absent, 1 = partial, 2 = clear\nInclusion rule: student links diagnosis to at least one case feature\nExclusion rule: student names diagnosis without evidence\nBorderline example: student gives feature but does not explain why it matters" },
      { kind: "callout", tone: "info", h: "Senior researcher note", body: "If two people cannot apply the code consistently, the problem may be the codebook, not the coders." }
    ]
  },
  {
    id: "tr-step-7-reliability",
    title: "Step 7: check reliability before scaling coding",
    type: "Transcript work",
    level: "transcript",
    pathway: "Measurement -> Analysis",
    summary: "Use coder agreement when human judgment creates the variable.",
    tags: ["transcript", "reliability", "kappa", "coder-agreement"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-6-codebook", "tr-step-8-analysis"],
    sections: [
      { kind: "p", body: "Use coder agreement when human judgment creates the variable." },
      { kind: "l", h: "Use coder agreement if", body: [
        "two coders classify the same transcript units",
        "categories are clear enough to compare",
        "you need evidence that the coding is stable"
      ]},
      { kind: "l", h: "Possible reliability outputs", body: [
        "percent agreement",
        "Cohen's kappa",
        "weighted kappa for ordered categories, future card needed",
        "disagreement table"
      ]},
      { kind: "p", h: "Personalized example", body: "IT2900-style:\n\nIf two coders label whether a student applied an insight, use a shared coding sheet and compute kappa after matching the same prompt-response units." },
      { kind: "p", body: "OMS3100-style:\n\nBefore auditing all cases, calibrate issue severity with the instructor on a small sample. Do not scale a fragile codebook." }
    ]
  },
  {
    id: "tr-step-8-analysis",
    title: "Step 8: choose the analysis by variable type",
    type: "Transcript work",
    level: "transcript",
    pathway: "Data Type -> Research Question -> Analysis",
    summary: "Match the transcript question and variable types to a likely analytic direction.",
    tags: ["transcript", "analysis", "variable-type", "method-selection"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-1-unit", "tr-step-7-reliability", "tr-step-11-reporting"],
    sections: [
      { kind: "t", h: "Analysis by variable type", body: [
        ["Transcript question", "Outcome", "Predictor/comparison", "Likely direction"],
        ["Did students complete the chat?", "completion yes/no", "group/arm", "Chi-square or logistic regression"],
        ["Did one group score higher?", "rubric score", "two independent groups", "t-test or Mann-Whitney"],
        ["Did students improve on reattempt?", "attempt score", "attempt 1 vs attempt 2, same student-case", "paired t-test or Wilcoxon"],
        ["Are more messages linked to better scores?", "score", "message count", "Spearman/Pearson or regression"],
        ["Are issue types different by case?", "issue category/count", "case", "descriptive table or chi-square"],
        ["Do coders agree?", "coder labels", "coder 1 vs coder 2", "Cohen's kappa"],
        ["Do three chatbot roles differ?", "engagement/performance score", "role", "ANOVA or repeated-measures method, depending design"],
        ["Is active time extremely skewed?", "time", "group/scenario", "median/IQR, Wilcoxon/Mann-Whitney"]
      ]}
    ]
  },
  {
    id: "tr-step-9-denominators",
    title: "Step 9: think about denominators",
    type: "Transcript work",
    level: "transcript",
    pathway: "Sample -> Claim",
    summary: "Transcript datasets often have multiple denominators, and changing the denominator changes the claim.",
    tags: ["transcript", "denominator", "sample", "inclusion"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-1-unit", "tr-step-10-reattempts"],
    sections: [
      { kind: "p", body: "Transcript datasets often have multiple denominators." },
      { kind: "l", h: "Examples", body: [
        "invited students",
        "students who opened the activity",
        "students who sent at least one message",
        "students who completed the transcript",
        "students with evaluator scores",
        "students with parseable scores",
        "performance-eligible attempts",
        "all attempts including reattempts"
      ]},
      { kind: "callout", tone: "info", h: "Senior researcher note", body: "Changing the denominator changes the claim." },
      { kind: "p", h: "Example", body: "" },
      { kind: "code", body: "Completion rate among all enrolled students" },
      { kind: "p", body: "is not the same as:" },
      { kind: "code", body: "Completion rate among students who started the chatbot" }
    ]
  },
  {
    id: "tr-step-10-reattempts",
    title: "Step 10: decide whether to include reattempts",
    type: "Transcript work",
    level: "transcript",
    pathway: "Sample -> Data Type",
    summary: "Reattempts are valuable, but they create repeated data.",
    tags: ["transcript", "reattempts", "repeated-measures", "trajectory"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-1-unit", "tr-step-9-denominators"],
    sections: [
      { kind: "p", body: "Reattempts are valuable, but they create repeated data." },
      { kind: "l", h: "Analyze retained/main attempt if", body: [
        "you need one clean row per student-case",
        "you want a main performance summary",
        "you want to avoid repeated-observation complications"
      ]},
      { kind: "l", h: "Analyze all attempts if", body: [
        "you care about learning process",
        "you care whether students improve after retrying",
        "you can preserve attempt order",
        "you are explicit that this is a process/trajectory analysis"
      ]},
      { kind: "p", h: "Personalized example", body: "PharSim-style:\n\nMain performance analysis may use retained performance-eligible attempts. Reattempt analysis is a secondary process view and should not silently replace the main analysis." }
    ]
  },
  {
    id: "tr-step-11-reporting",
    title: "Step 11: reporting template",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Measurement -> Sample -> Research Question -> Analysis -> Claim",
    summary: "A reusable structure for transcript-based quantitative reporting.",
    tags: ["transcript", "reporting", "writing", "template"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-pathway", "tr-step-8-analysis"],
    sections: [
      { kind: "p", body: "Use this structure for transcript-based quantitative reporting:" },
      { kind: "code", h: "Template", body: "We defined [construct] as [indicator/operational definition].\nThe unit of analysis was [message/turn/transcript/student-case/student].\nThe analytic sample included [denominator and inclusion rule].\nWe summarized [variables] using [descriptive statistics].\nFor [comparison/association/prediction], we used [method] because [data situation].\nThe result suggests [evidence], but the design supports only [claim limit]." },
      { kind: "code", h: "Example", body: "We defined engagement as active session time and student word count. The unit of analysis was the student-scenario transcript. Because the same students completed both chatbot scenarios and the engagement variables were skewed, we summarized medians and IQRs and used Wilcoxon signed-rank tests for paired comparisons." }
    ]
  },
  {
    id: "tr-what-not-to-do",
    title: "What not to do",
    type: "Transcript work",
    level: "transcript",
    pathway: "Sample -> Data Type -> Measurement -> Analysis -> Claim",
    summary: "Common transcript-analysis mistakes to avoid.",
    tags: ["transcript", "pitfalls", "red-flags", "what-not-to-do"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-big-distinction", "tr-step-1-unit", "tr-step-9-denominators"],
    sections: [
      { kind: "l", h: "Do not", body: [
        "treat every transcript row as independent if students have multiple messages",
        "interpret message count as learning without performance evidence",
        "run a t-test on categorical codes",
        "run a method before defining the unit of analysis",
        "use AI coding without checking coverage and reliability",
        "hide missing transcripts or excluded attempts",
        "report p-values without effect sizes or descriptive patterns",
        "claim causal impact from observational transcript traces alone"
      ]}
    ]
  },
  {
    id: "tr-mini-decisions",
    title: "Mini decision cards",
    type: "Transcript work",
    level: "transcript",
    pathway: "Measurement -> Data Type -> Analysis",
    summary: "Quick prompts by variable type: message counts, time-on-task, rubric scores, coded categories, AI-generated scores.",
    tags: ["transcript", "decision", "mini-cards", "by-variable-type"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-2-engagement", "tr-step-3-performance", "tr-step-6-codebook", "tr-step-7-reliability"],
    sections: [
      { kind: "p", h: "If you have message counts", body: "Ask:" },
      { kind: "code", body: "Are message counts the outcome, or just a process descriptor?" },
      { kind: "l", h: "Use", body: [
        "descriptive statistics first",
        "median/IQR if skewed",
        "Spearman correlation if relating to performance",
        "regression only if you have a clear outcome and justified predictors"
      ]},
      { kind: "p", h: "If you have time-on-task", body: "Ask:" },
      { kind: "code", body: "Does wall-clock time include idle gaps?" },
      { kind: "l", h: "Use", body: [
        "active time if possible",
        "capped-gap sensitivity checks",
        "median/IQR for skewed duration",
        "paired/non-parametric methods if comparing same students across scenarios"
      ]},
      { kind: "p", h: "If you have rubric scores", body: "Ask:" },
      { kind: "code", body: "Are scores valid, complete, and comparable across cases?" },
      { kind: "l", h: "Use", body: [
        "descriptive statistics by case/domain",
        "score percentage when rubrics have different maxima",
        "t-test/ANOVA/regression depending design",
        "effect size and confidence intervals when possible"
      ]},
      { kind: "p", h: "If you have coded categories", body: "Ask:" },
      { kind: "code", body: "Who coded them, and do coders agree?" },
      { kind: "l", h: "Use", body: [
        "codebook",
        "pilot coding",
        "Cohen's kappa",
        "crosstab/chi-square after reliability is acceptable"
      ]},
      { kind: "p", h: "If you have AI-generated scores", body: "Ask:" },
      { kind: "code", body: "Did the AI evaluator follow the rubric, and can I verify the extracted scores?" },
      { kind: "l", h: "Use", body: [
        "extraction verification",
        "impossible-value checks",
        "subtotal-total checks",
        "sampled source-text audit",
        "human review for high-stakes claims"
      ]}
    ]
  },
  {
    id: "tr-examples",
    title: "Personalized examples",
    type: "Transcript work",
    level: "transcript",
    pathway: "Construct -> Measurement -> Sample -> Data Type -> Research Question -> Analysis -> Evidence -> Claim",
    summary: "Worked examples across IT2900, PharSim, OMS3100, MD1140, and Emir/BMA5008 simulation transcripts.",
    tags: ["transcript", "examples", "personalized", "case-based"],
    source: "../what_the_stat_content/chat_transcript_evaluation_guide_v1.md",
    related: ["tr-step-2-engagement", "tr-step-3-performance", "tr-step-5-target"],
    sections: [
      { kind: "p", h: "IT2900: engagement across two chatbot scenarios", body: "Possible question:" },
      { kind: "code", body: "Do students engage differently with Jane and Carl?" },
      { kind: "l", h: "Likely thinking", body: [
        "same students across two scenarios -> paired design",
        "engagement variables likely skewed -> median/IQR, Wilcoxon signed-rank",
        "engagement is process evidence -> avoid learning claims without outcome evidence"
      ]},
      { kind: "p", h: "PharSim: performance and engagement dashboard", body: "Possible question:" },
      { kind: "code", body: "Do arms differ in simulation performance, and how much did students engage?" },
      { kind: "l", h: "Likely thinking", body: [
        "define performance-eligible rows",
        "use rubric percentage when case maxima differ",
        "compare arms descriptively and with effect sizes",
        "use p-values as exploratory/reference unless design supports stronger inference",
        "separate main retained-attempt analysis from reattempt/process analysis"
      ]},
      { kind: "p", h: "OMS3100: dentistry chatbot teaching-quality audit", body: "Possible question:" },
      { kind: "code", body: "Did the chatbot teach diagnostic reasoning safely?" },
      { kind: "l", h: "Likely thinking", body: [
        "transcript audit before statistical testing",
        "expert-calibrated codebook",
        "issue categories and severity",
        "counts by case/stage",
        "coder agreement if multiple reviewers",
        "careful claim about observed transcript risks, not global safety"
      ]},
      { kind: "p", h: "MD1140: AI patient performance scores", body: "Possible question:" },
      { kind: "code", body: "How did students perform in communication, history taking, and clinical reasoning?" },
      { kind: "l", h: "Likely thinking", body: [
        "verify AI evaluator output",
        "separate extraction accuracy from score validity",
        "use domain scores and percentages",
        "check impossible values and duration outliers",
        "compare stages or domains only after confirming score structure"
      ]},
      { kind: "p", h: "Emir/BMA5008: multi-role simulation interviews", body: "Possible question:" },
      { kind: "code", body: "Do students engage differently with CEO, CFO, and CPTO agents?" },
      { kind: "l", h: "Likely thinking", body: [
        "role is a condition",
        "determine whether each student completed multiple roles",
        "if same students did multiple roles, data are repeated",
        "use transcript metrics plus survey/performance evidence",
        "do not confuse role novelty with learning impact"
      ]}
    ]
  }
];
