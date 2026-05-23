window.WTS_CLAIM_CARDS = [
  {
    id: "claim-builder-path",
    title: "How to build a claim",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "The path from result to responsible claim, the strength ladder, and words that need caution.",
    tags: ["claim", "reporting", "overclaim", "ladder"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-overclaim-repair", "claim-scope-phrases", "claim-final-checklist"],
    sections: [
      { kind: "p", h: "The claim-building path", body: "Use this sequence:\n\nResult -> Pattern -> Size -> Uncertainty -> Design Limit -> Responsible Claim\n\nAsk:" },
      { kind: "code", body: "1. What pattern did I observe?\n2. How large is the pattern?\n3. How uncertain is it?\n4. What kind of evidence is this?\n5. What does the design allow me to say?\n6. What would be overclaiming?" },
      { kind: "p", h: "Claim strength ladder", body: "Use weaker or stronger language based on the evidence." },
      { kind: "t", body: [
        ["Claim strength", "Sentence starter", "Use when"],
        ["Descriptive", "In this sample...", "You are summarizing observed data"],
        ["Association", "X was associated with Y...", "Variables are related, but not causal"],
        ["Difference", "Group A scored higher than Group B...", "You compared groups"],
        ["Change", "Students reported higher scores after...", "Same students measured over time"],
        ["Prediction", "X predicted Y in the model...", "You modeled an outcome"],
        ["Adjusted association", "After accounting for baseline..., X was associated with Y...", "Regression with covariates"],
        ["Robustness", "This pattern was consistent across...", "Sensitivity checks support stability"],
        ["Causal", "X caused Y...", "Only when design and assumptions support causality"]
      ]},
      { kind: "callout", tone: "info", h: "Beginner rule", body: "When unsure, move one step down the ladder." },
      { kind: "p", h: "Words that need caution", body: "Pause before using:" },
      { kind: "l", body: [
        "caused",
        "impact",
        "effect",
        "improved learning",
        "led to",
        "resulted in",
        "proves",
        "demonstrates",
        "shows that students learned",
        "successful intervention"
      ]},
      { kind: "p", h: "Safer alternatives", body: "Safer alternatives:" },
      { kind: "l", body: [
        "was associated with",
        "was linked to",
        "differed by",
        "students reported",
        "students showed",
        "the data suggest",
        "the pattern is consistent with",
        "in this sample",
        "among completers",
        "among performance-eligible attempts"
      ]},
      { kind: "quote", body: "Good quantitative writing is not about sounding technical. It is about matching the strength of the sentence to the strength of the evidence." }
    ]
  },
  {
    id: "claim-descriptive",
    title: "Descriptive result",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to summarize what happened in the dataset.",
    tags: ["claim", "reporting", "descriptive"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You summarize what happened in the dataset." },
      { kind: "code", h: "Formula", body: "Among [analytic sample/denominator], [variable] was [summary statistic]." },
      { kind: "p", h: "Example", body: "Among performance-eligible student-case attempts, the median simulation score was __ percent of available rubric points." },
      { kind: "p", h: "Add context", body: "This describes the observed performance-eligible attempts and does not include attempts without completed or parseable evaluations." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "Students performed well overall.\n\nThat may be too vague unless you define the benchmark for \"well.\"" }
    ]
  },
  {
    id: "claim-group-comparison",
    title: "Group comparison",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you compared two or more independent groups.",
    tags: ["claim", "reporting", "compare", "groups"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You compare two or more independent groups." },
      { kind: "code", h: "Formula", body: "[Group A] had [higher/lower/similar] [outcome] than [Group B], with [descriptive size]. [Test result if relevant]. This supports [careful claim]." },
      { kind: "p", h: "Example", body: "Arm 2 had a higher mean case score than Arm 1 by __ percentage points. A Welch t-test provided [limited/exploratory] evidence of a group difference, t(df) = __, p = __." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Because the meaning of the arms and assignment process must be confirmed, this should be interpreted as an observed arm difference rather than a causal intervention effect." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "Arm 2 improved student performance." }
    ]
  },
  {
    id: "claim-paired-change",
    title: "Paired pre/post change",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when the same students are measured before and after.",
    tags: ["claim", "reporting", "pre-post", "paired"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "The same students are measured before and after." },
      { kind: "code", h: "Formula", body: "Students' [outcome] [increased/decreased/changed little] from pre to post. The average/median change was __. [Test result]. This suggests [careful interpretation]." },
      { kind: "p", h: "Example", body: "Students reported higher AI teaching confidence after the workshop than before it. The median change was __ points on the 1-to-5 scale; a Wilcoxon signed-rank test indicated __, W = __, p = __." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Because this is a pre/post comparison without a comparison group, the result supports reported change over time but does not by itself establish that the workshop caused the change." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "The workshop increased confidence.\n\nUse only if the design supports that causal wording." }
    ]
  },
  {
    id: "claim-mcnemar",
    title: "Paired binary change / McNemar",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when the same students have a yes/no outcome before and after.",
    tags: ["claim", "reporting", "mcnemar", "binary", "paired"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "The same students have a yes/no outcome before and after." },
      { kind: "code", h: "Formula", body: "We examined paired change in [binary outcome]. __ students changed from no to yes, while __ changed from yes to no. McNemar's test [result], p = __." },
      { kind: "p", h: "Example", body: "We examined whether students applied a feedback insight before and after the chatbot activity. Twelve students changed from not applying the insight to applying it, while three changed in the opposite direction. McNemar's test suggested an imbalance in the direction of change, p = __." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "This supports a paired change pattern, not a causal claim by itself." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "The chatbot caused students to apply insights." }
    ]
  },
  {
    id: "claim-correlation",
    title: "Correlation / association",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you examine whether two variables are related.",
    tags: ["claim", "reporting", "correlation", "association"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You examine whether two variables are related." },
      { kind: "code", h: "Formula", body: "[Variable X] was [positively/negatively/weakly/not clearly] associated with [Variable Y], r/rho = __, p = __. This means [plain-language interpretation]." },
      { kind: "p", h: "Example", body: "Student message count was positively associated with simulation score, Spearman's rho = __, p = __. Students who sent more messages tended to have higher scores, although the association does not establish that sending more messages caused better performance." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Message count may reflect engagement, confusion, persistence, or task difficulty, so the association should be interpreted cautiously." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "More messages led to better performance." }
    ]
  },
  {
    id: "claim-regression",
    title: "Regression / prediction",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you model an outcome from one or more predictors.",
    tags: ["claim", "reporting", "regression", "prediction"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You model an outcome from one or more predictors." },
      { kind: "code", h: "Formula", body: "In a regression model predicting [outcome], [predictor] was associated with [higher/lower] [outcome], b = __, 95% CI [__, __], p = __. This means [plain-language coefficient interpretation]." },
      { kind: "p", h: "Example", body: "In a regression model predicting post-confidence, chatbot performance score was positively associated with post-confidence after accounting for pre-confidence, b = __, 95% CI [__, __], p = __." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "This is an adjusted association. It does not prove that chatbot performance caused post-confidence." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "Chatbot performance increased post-confidence." }
    ]
  },
  {
    id: "claim-logistic",
    title: "Logistic regression",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when the outcome is yes/no.",
    tags: ["claim", "reporting", "logistic", "binary", "odds"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "The outcome is yes/no." },
      { kind: "code", h: "Formula", body: "In a logistic regression predicting [binary outcome], [predictor] was associated with [higher/lower] odds of [event], OR = __, 95% CI [__, __], p = __." },
      { kind: "p", h: "Example", body: "In a logistic regression predicting chatbot completion, pre-confidence was associated with higher odds of completion, OR = __, 95% CI [__, __], p = __." },
      { kind: "p", h: "Plain-language translation", body: "Students with higher pre-confidence were more likely to complete the chatbot activity, in this model." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Odds are not the same as probabilities, and the model does not prove pre-confidence caused completion." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "Pre-confidence made students complete the chatbot." }
    ]
  },
  {
    id: "claim-reliability",
    title: "Reliability / internal consistency",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you report whether survey items hang together.",
    tags: ["claim", "reporting", "reliability", "alpha"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "reliability", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You report whether survey items hang together." },
      { kind: "code", h: "Formula", body: "The [number]-item [construct] scale showed [level] internal consistency, [coefficient] = __." },
      { kind: "p", h: "Example", body: "The three-item cognitive load composite showed acceptable internal consistency, Cronbach's alpha = __." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Internal consistency supports the reliability of the composite, but it does not prove that the items validly capture the construct." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "The scale is valid because alpha was high." }
    ]
  },
  {
    id: "claim-coder-agreement",
    title: "Coder agreement",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when two coders classify transcript segments or responses.",
    tags: ["claim", "reporting", "coding", "kappa", "reliability"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "reliability", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "Two coders classify transcript segments or responses." },
      { kind: "code", h: "Formula", body: "Two coders independently coded [units]. Agreement was [coefficient], kappa = __. Disagreements were [handled how]." },
      { kind: "p", h: "Example", body: "Two coders independently coded a sample of transcript responses for evidence-supported reasoning. Agreement was substantial, Cohen's kappa = __, and disagreements were resolved through discussion before full coding." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Coder agreement supports consistency in applying the codebook; it does not prove that the codebook captures the construct perfectly." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "The coding is valid because kappa was high." }
    ]
  },
  {
    id: "claim-transcript-engagement",
    title: "Transcript engagement",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you report message count, time, word count, completion, or attempts.",
    tags: ["claim", "reporting", "engagement", "transcript"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You report message count, time, word count, completion, or attempts." },
      { kind: "code", h: "Formula", body: "We defined engagement as [specific indicators]. Among [analytic sample], students [pattern]. This supports a process claim about engagement." },
      { kind: "p", h: "Example", body: "We defined chatbot engagement as active session time and student word count. Among students who completed both scenarios, students spent more active time and wrote more words in the Carl scenario than in the Jane scenario." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "These indicators describe engagement and do not by themselves demonstrate greater learning." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "Students learned more because they spent more time." }
    ]
  },
  {
    id: "claim-transcript-performance",
    title: "Transcript performance",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you report rubric scores, domain scores, correct answers, or coded performance.",
    tags: ["claim", "reporting", "performance", "rubric"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You report rubric scores, domain scores, correct answers, or coded performance." },
      { kind: "code", h: "Formula", body: "We defined performance as [rubric/code/score]. Among [analytic sample], students achieved [summary]. This provides evidence about [performance construct]." },
      { kind: "p", h: "Example", body: "We defined simulation performance as the percentage of available rubric points attained among performance-eligible attempts. Students achieved a median of __ percent on Case 2, with domain-level performance highest in __ and lowest in __." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "This describes performance on the simulation task, not necessarily transfer to other clinical or classroom contexts." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "Students mastered the skill.\n\nUnless mastery criteria are defined." }
    ]
  },
  {
    id: "claim-audit",
    title: "Chatbot teaching-quality audit",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you evaluate bot errors, safety, factual accuracy, case grounding, feedback quality, or protocol adherence.",
    tags: ["claim", "reporting", "audit", "chatbot", "safety"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You evaluate bot errors, safety, factual accuracy, case grounding, feedback quality, or protocol adherence." },
      { kind: "code", h: "Formula", body: "We audited [units] for [issue categories]. The audit identified [main issue pattern]. These findings indicate [careful teaching-quality claim]." },
      { kind: "p", h: "Example", body: "We audited bot responses for case-grounding errors, premature answer reveals, and diagnostic-uncertainty issues. The most common flagged issue was __, especially during __. These findings identify areas for prompt revision and expert review." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Because the audit was based on [sample/flagged segments/full coverage], the findings should be interpreted as [scope]." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "The chatbot is safe.\n\nor\n\nThe chatbot is unsafe.\n\nunless safety criteria, coverage, and expert review support that global claim." }
    ]
  },
  {
    id: "claim-sensitivity",
    title: "Sensitivity analysis",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when you check whether a conclusion changes under reasonable alternative decisions.",
    tags: ["claim", "reporting", "sensitivity", "robustness"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "robustness-check", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You check whether a conclusion changes under reasonable alternative decisions." },
      { kind: "code", h: "Formula", body: "We conducted sensitivity checks using [alternative definitions/thresholds/rules]. The main pattern [remained consistent/changed], suggesting [interpretation]." },
      { kind: "p", h: "Example", body: "We conducted sensitivity checks using 5-, 10-, and 15-minute idle-gap caps for active time. The scenario difference remained in the same direction across all three definitions, suggesting the engagement pattern was not driven by the gap-cap decision." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "This supports robustness to this specific decision, not robustness to every possible analytic choice." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "The finding is definitely true because sensitivity analysis confirmed it." }
    ]
  },
  {
    id: "claim-non-significant",
    title: "Non-significant result",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write a careful claim when the p-value is not below your chosen threshold.",
    tags: ["claim", "reporting", "non-significant", "p-value"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "The p-value is not below your chosen threshold." },
      { kind: "code", h: "Formula", body: "The analysis did not provide clear evidence of [difference/association/change]. The observed estimate was [size/direction], with [uncertainty]. This should be interpreted in light of [sample size/power/measurement/design]." },
      { kind: "p", h: "Example", body: "The analysis did not provide clear evidence of an association between message count and performance score. The correlation was small and positive, rho = __, p = __, with substantial variability across students." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "A non-significant result does not prove there is no relationship; it means this analysis did not provide clear evidence for one." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "There was no effect.\n\nunless you have evidence strong enough to support equivalence or absence." }
    ]
  },
  {
    id: "claim-dashboard",
    title: "Dashboard / instructor-facing summary",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "How to write plain-language reporting for instructors or faculty.",
    tags: ["claim", "reporting", "dashboard", "instructor"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "evidence", "claim-builder-path"],
    sections: [
      { kind: "p", h: "Use when", body: "You need plain-language reporting for instructors or faculty." },
      { kind: "code", h: "Formula", body: "This view summarizes [sample/denominator]. The main pattern is [pattern]. Use this as [decision/support purpose], not as [overclaim]." },
      { kind: "p", h: "Example", body: "This dashboard summarizes performance-eligible simulation attempts. The heatmap shows the mean percentage of available rubric points attained, with n showing how many students contributed to each cell. Use this to identify domains that may need review, not as proof of intervention impact." },
      { kind: "callout", tone: "info", h: "Claim limit to add", body: "Instructor-facing summaries should prioritize clarity over statistical decoration." },
      { kind: "callout", tone: "warn", h: "Avoid wording like", body: "The dashboard proves the intervention worked." }
    ]
  },
  {
    id: "claim-overclaim-repair",
    title: "Overclaim repair",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "Side-by-side overclaim sentences and better, careful versions.",
    tags: ["claim", "overclaim", "repair", "reporting"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "claim-builder-path", "claim-scope-phrases", "claim-final-checklist"],
    sections: [
      { kind: "t", h: "Overclaim repair table", body: [
        ["Overclaim", "Better version"],
        ["The chatbot improved learning.", "Students showed higher post scores after the chatbot activity."],
        ["More messages caused higher performance.", "Message count was associated with performance score."],
        ["The intervention was effective.", "The intervention group had higher observed scores, but causal interpretation depends on the study design."],
        ["The scale is valid because alpha was high.", "The scale showed internal consistency; additional evidence is needed for validity."],
        ["Students learned more because they spent more time.", "Students spent more time, which indicates greater engagement, not necessarily greater learning."],
        ["The AI evaluator scores show students mastered the task.", "AI-generated scores suggest performance patterns, but score validity depends on rubric and evaluator verification."],
        ["There was no relationship.", "This analysis did not provide clear evidence of a relationship."],
        ["The dashboard shows weak students.", "The dashboard identifies lower performance on selected measured indicators."],
        ["The bot was unsafe.", "The audit identified teaching-quality risks that require expert review."],
        ["Controlling for pre score proves the effect.", "After accounting for pre score, the predictor was associated with the post outcome."]
      ]}
    ]
  },
  {
    id: "claim-scope-phrases",
    title: "Claim scope phrases",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "Phrases that keep claims honest by naming the scope of what the analysis actually covered.",
    tags: ["claim", "scope", "reporting", "phrases"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "claim-builder-path", "claim-overclaim-repair", "claim-final-checklist"],
    sections: [
      { kind: "p", h: "Use these to keep claims honest", body: "Use these to keep claims honest:" },
      { kind: "l", body: [
        "in this sample",
        "among students with linked survey and transcript data",
        "among performance-eligible attempts",
        "in the observed transcripts",
        "in the coded subset",
        "after accounting for baseline score",
        "in an exploratory analysis",
        "using this operational definition",
        "based on this rubric",
        "under this missing-data rule",
        "with this denominator",
        "this supports a process claim, not a learning claim",
        "this suggests, but does not establish"
      ]}
    ]
  },
  {
    id: "claim-final-checklist",
    title: "Final claim checklist",
    type: "Claim template",
    level: "claim",
    pathway: "Claim",
    summary: "Eight questions to ask before writing a result.",
    tags: ["claim", "checklist", "reporting"],
    source: "../what_the_stat_content/claim_builder_reporting_templates_v1.md",
    related: ["claim", "claim-builder-path", "claim-overclaim-repair", "claim-scope-phrases"],
    sections: [
      { kind: "p", h: "Before writing a result, ask", body: "Before writing a result, ask:" },
      { kind: "ol", body: [
        "Did I name the analytic sample?",
        "Did I name the denominator?",
        "Did I report direction and size?",
        "Did I report uncertainty or p-value where relevant?",
        "Did I distinguish engagement, performance, perception, and learning?",
        "Did I avoid causal wording unless the design supports it?",
        "Did I explain what the result does not show?",
        "Did I write the result in plain language first?"
      ]}
    ]
  }
];
