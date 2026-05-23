window.WTS_VOCABULARY_CARDS = [
  {
    id: "mean-vs-median",
    title: "Mean vs median",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Data Type -> Analysis -> Evidence -> Claim",
    summary: "Both describe the center of a variable, but they behave differently.",
    tags: ["mean", "median", "average", "center", "descriptive", "data-type"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["sd-vs-iqr", "distribution-skew", "descriptive-vs-inferential"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "The mean is the arithmetic average.\n\nThe median is the middle value when all values are ordered from low to high.\n\nBoth describe the center of a variable, but they behave differently." },
      { kind: "p", h: "Senior researcher note", body: "When you see an average, always ask: average in what sense?\n\nThe mean is useful, but it can be pulled around by extreme values. The median is often more stable when the data are skewed." },
      { kind: "p", h: "Tiny example", body: "Five students spend this many minutes using an AI tutor:\n\n`5, 8, 10, 12, 95`\n\nMean:\n\n`(5 + 8 + 10 + 12 + 95) / 5 = 26`\n\nMedian:\n\n`10`\n\nThe mean says 26 minutes, but most students used the tutor for much less than that. The one 95-minute session pulls the mean upward." },
      { kind: "l", h: "When mean is useful", body: [
        "Data are roughly balanced or symmetric.",
        "Extreme values are not distorting the summary.",
        "You want a summary that uses every value.",
        "The variable is continuous or approximately continuous."
      ]},
      { kind: "l", h: "When median is useful", body: [
        "Data are skewed.",
        "There are extreme values.",
        "You want the typical middle case.",
        "The variable is ordinal or not safely treated as evenly spaced."
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reporting the mean because it sounds more statistical, even when the median better describes the typical case." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe the center of the data." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Mean or median alone does not tell you how spread out the data are, whether groups differ meaningfully, or whether a pattern is statistically significant." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Is the data skewed?",
        "Are there extreme values?",
        "What does \"typical\" mean for this variable?",
        "Should I report both mean and median?",
        "What measure of spread should go with it?"
      ]},
      { kind: "quote", body: "The mean is the balancing point; the median is the middle case." }
    ]
  },
  {
    id: "sd-vs-iqr",
    title: "SD vs IQR",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Data Type -> Analysis -> Evidence -> Claim",
    summary: "A center without a spread is incomplete.",
    tags: ["sd", "iqr", "spread", "descriptive", "data-type"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["mean-vs-median", "distribution-skew"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Standard deviation, or SD, describes how spread out values are around the mean.\n\nInterquartile range, or IQR, describes the spread of the middle half of the data." },
      { kind: "p", h: "Senior researcher note", body: "A center without a spread is incomplete.\n\nIf I tell you the average score is 80, you still need to know whether most students scored around 78 to 82, or whether scores ranged from 40 to 100." },
      { kind: "p", h: "Tiny example", body: "Two classes have the same mean quiz score: 80.\n\nClass A:\n\n`78, 79, 80, 81, 82`\n\nClass B:\n\n`50, 70, 80, 95, 105`\n\nThe mean is the same, but the spread is very different. Class B has much more variation." },
      { kind: "l", h: "When SD is useful", body: [
        "You are reporting the mean.",
        "Data are roughly symmetric.",
        "Extreme values are not dominating the distribution.",
        "You want a familiar spread measure for continuous data."
      ]},
      { kind: "l", h: "When IQR is useful", body: [
        "You are reporting the median.",
        "Data are skewed.",
        "There are extreme values.",
        "You want to describe the middle 50 percent of values."
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reporting only the average and forgetting that two datasets can have the same average but very different variation." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe how similar or different cases are around the center." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Spread does not by itself explain why cases vary. It only describes the variation." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Am I reporting mean or median?",
        "Is SD or IQR the better companion?",
        "Is the spread large enough to matter?",
        "Are there subgroups with different spreads?"
      ]},
      { kind: "quote", body: "Center tells me where the data sit; spread tells me how tightly or loosely they sit there." }
    ]
  },
  {
    id: "distribution-skew",
    title: "Distribution and skew",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Data Type -> Analysis -> Evidence -> Claim",
    summary: "The distribution is the shape of the evidence before you summarize it.",
    tags: ["distribution", "skew", "shape", "descriptive", "data-type"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["mean-vs-median", "sd-vs-iqr", "parametric-vs-nonparametric"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A distribution is the shape of the data: how values are arranged from low to high.\n\nSkew means the data are lopsided, with a longer tail on one side." },
      { kind: "p", h: "Senior researcher note", body: "Before trusting a summary, look at the shape.\n\nMany statistical decisions make more sense once you know whether the data are balanced, clustered, lopsided, full of zeros, or shaped by a few extreme cases." },
      { kind: "p", h: "Tiny example", body: "Session duration in an AI simulation may be right-skewed:\n\n- many students use it for 5 to 15 minutes\n- a few students leave it open for 90 minutes\n\nThe long tail on the high side can make the mean look larger than the typical experience." },
      { kind: "l", h: "Common shapes to notice", body: [
        "Roughly symmetric: values balance around the center.",
        "Right-skewed: many low/moderate values, a few very high values.",
        "Left-skewed: many high values, a few very low values.",
        "Bimodal: two peaks, possibly two groups mixed together.",
        "Floor effect: many values near the bottom.",
        "Ceiling effect: many values near the top."
      ]},
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Choosing a method or reporting a mean without checking whether the data shape makes that summary misleading." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe the pattern and choose more appropriate summaries or methods." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Distribution shape alone does not explain why the pattern exists." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Are most values clustered somewhere?",
        "Is there a long tail?",
        "Are there extreme cases?",
        "Are there floor or ceiling effects?",
        "Could two groups be mixed together?",
        "Should I visualize the distribution?"
      ]},
      { kind: "quote", body: "The distribution is the shape of the evidence before you summarize it." }
    ]
  },
  {
    id: "descriptive-vs-inferential",
    title: "Descriptive vs inferential statistics",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Analysis -> Evidence -> Claim",
    summary: "Descriptive statistics describe what I saw; inferential statistics help me ask how far that pattern might travel.",
    tags: ["descriptive", "inferential", "generalization"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["null-hypothesis", "p-value", "confidence-interval"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Descriptive statistics summarize the data you have.\n\nInferential statistics help you reason from your sample to a broader population or process, usually with uncertainty." },
      { kind: "p", h: "Senior researcher note", body: "This distinction is one of the most important claim-boundary tools.\n\nDescriptive statistics say, \"Here is what we observed.\" Inferential statistics ask, \"How much confidence do we have that this pattern reflects something beyond this sample?\"" },
      { kind: "p", h: "Tiny example", body: "You survey 60 doctoral students in one course.\n\nDescriptive:\n\n`70 percent reported using AI tools for writing support.`\n\nInferential:\n\n`We estimate that doctoral students in the broader program may use AI writing support at a similar rate, with uncertainty.`\n\nThat second claim requires stronger sampling logic." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using inferential language when the sample does not support generalization.\n\nFor example, saying \"doctoral students use AI frequently\" when the data only describe one course or one convenience sample." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Descriptive statistics let you describe your observed data. Inferential statistics may support broader claims if the design and sampling justify them." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Inferential statistics do not automatically fix weak sampling, poor measurement, or causal overclaiming." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Am I describing only my sample?",
        "Am I trying to generalize?",
        "What population do I want to speak about?",
        "Does my sample support that claim?",
        "What uncertainty should I report?"
      ]},
      { kind: "quote", body: "Descriptive statistics describe what I saw; inferential statistics help me ask how far that pattern might travel." }
    ]
  },
  {
    id: "null-hypothesis",
    title: "Null hypothesis",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Analysis -> Evidence",
    summary: "The no-pattern benchmark a test uses to judge surprise.",
    tags: ["null-hypothesis", "testing", "inferential"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["p-value", "descriptive-vs-inferential", "statistical-power"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "The null hypothesis is usually the \"no difference\" or \"no relationship\" position that a statistical test starts from.\n\nIt gives the test something specific to compare your observed result against." },
      { kind: "p", h: "Senior researcher note", body: "The null hypothesis is not always what you believe. It is a reference point.\n\nMany tests ask: if there really were no difference or no relationship in the population, how surprising would this observed result be?" },
      { kind: "p", h: "Tiny example", body: "Research question:\n\n`Do students who used AI feedback have higher revision-quality scores?`\n\nPossible null hypothesis:\n\n`There is no difference in revision-quality scores between students who used AI feedback and students who did not.`\n\nThe statistical test asks whether the observed difference is surprising under that no-difference assumption." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking failure to reject the null proves the null is true.\n\nA non-significant result does not prove there is no difference. It means the study did not provide strong enough evidence against the null under that test." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "The null hypothesis helps structure statistical testing." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Rejecting the null does not automatically prove your preferred explanation. It only suggests the observed pattern is unlikely under the null model." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What is the test treating as the \"no effect\" position?",
        "Is the null about no difference, no relationship, or something else?",
        "What result would count as evidence against it?",
        "If I reject the null, what alternative explanations still remain?"
      ]},
      { kind: "quote", body: "The null hypothesis is the no-pattern benchmark a test uses to judge surprise." }
    ]
  },
  {
    id: "p-value",
    title: "p-value",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Evidence -> Claim",
    summary: "A p-value tells me about statistical surprise, not real-world importance.",
    tags: ["p-value", "significance", "testing"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["null-hypothesis", "effect-size", "confidence-interval", "statistical-vs-practical-significance"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A p-value tells you how surprising your observed result would be if the null hypothesis were true, under the assumptions of the test.\n\nSmaller p-values mean the observed result would be more unusual under the null." },
      { kind: "p", h: "Senior researcher note", body: "A p-value is often treated like a magic verdict. It is not.\n\nIt does not tell you the size of the effect, the importance of the effect, the probability that your hypothesis is true, or whether the study was well designed." },
      { kind: "p", h: "Tiny example", body: "You compare revision scores between students who used AI feedback and students who did not.\n\nThe result is:\n\n`p = .03`\n\nThis means that, if there were truly no difference between the groups and the test assumptions held, a difference as large as the one observed would be relatively unlikely.\n\nIt does not tell you whether the difference is educationally meaningful." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reading `p < .05` as \"my theory is true.\"\n\nThe p-value is about the data under the null model, not a full proof of the research story." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can say whether the observed result is statistically significant under a chosen threshold and test." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A p-value does not show practical importance, causality, validity, or effect size." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What null hypothesis is this p-value testing?",
        "What threshold was used?",
        "How large is the effect?",
        "Is the result practically meaningful?",
        "Were many tests run?",
        "Are the assumptions reasonable?"
      ]},
      { kind: "quote", body: "A p-value tells me about statistical surprise, not real-world importance." }
    ]
  },
  {
    id: "confidence-interval",
    title: "Confidence interval",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Evidence -> Claim",
    summary: "A confidence interval shows how much uncertainty surrounds the estimate.",
    tags: ["confidence-interval", "uncertainty", "estimate"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["p-value", "effect-size", "statistical-power"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A confidence interval gives a range of plausible values for an estimate, given a method and assumptions.\n\nIt helps show uncertainty around a result." },
      { kind: "p", h: "Senior researcher note", body: "A point estimate gives one number. A confidence interval gives the number room to breathe.\n\nWhen reading results, do not only ask \"what is the estimate?\" Ask \"how precise is it?\"" },
      { kind: "p", h: "Tiny example", body: "A study estimates that AI feedback improved revision scores by 4 points.\n\n95 percent confidence interval:\n\n`1 to 7 points`\n\nThis suggests the plausible improvement range is from small-ish to moderate, and the whole interval is above zero.\n\nAnother result:\n\n`4 points, 95 percent CI: -2 to 10`\n\nThis is much less precise. The interval includes no improvement and a larger improvement." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Looking only at whether the interval crosses zero, without thinking about the range of plausible effect sizes." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe both the estimated effect and the uncertainty around it." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "A confidence interval does not fix poor measurement, biased sampling, or causal design problems." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What is the estimate?",
        "How wide is the interval?",
        "Does the interval include values that would be practically meaningful?",
        "Does it include zero or no difference?",
        "Is the sample large or precise enough?"
      ]},
      { kind: "quote", body: "A confidence interval shows how much uncertainty surrounds the estimate." }
    ]
  },
  {
    id: "effect-size",
    title: "Effect size",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Evidence -> Claim",
    summary: "Effect size is the \"how much\" of a result.",
    tags: ["effect-size", "magnitude", "interpretation"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["p-value", "confidence-interval", "statistical-vs-practical-significance"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Effect size tells you how big a difference, relationship, or effect is.\n\nIt helps answer: is this result large enough to matter?" },
      { kind: "p", h: "Senior researcher note", body: "If the p-value asks \"is this statistically detectable?\", the effect size asks \"how much is there?\"\n\nIn applied education research, effect size is often more meaningful than statistical significance alone." },
      { kind: "p", h: "Tiny example", body: "Two studies find that an AI feedback tool improves writing scores.\n\nStudy A:\n\n`p < .001`, improvement = 0.3 points on a 100-point scale\n\nStudy B:\n\n`p = .07`, improvement = 5 points on a 100-point scale\n\nStudy A is statistically significant, but the effect may be tiny. Study B is not conventionally significant, but the effect may be educationally interesting." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Stopping at \"significant\" and not asking how large the result is." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe the magnitude of a result." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Effect size alone does not prove causality or validity. It also needs context to decide whether it matters." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What effect size is reported?",
        "Is it small, moderate, or large in this context?",
        "Is the scale meaningful?",
        "Would a teacher, student, or policymaker care about this size?",
        "How uncertain is the effect size?"
      ]},
      { kind: "quote", body: "Effect size is the \"how much\" of a result." }
    ]
  },
  {
    id: "statistical-power",
    title: "Statistical power",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Sample -> Analysis -> Evidence",
    summary: "Power is about whether the study is sensitive enough to detect the signal.",
    tags: ["power", "sample-size", "sensitivity"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["effect-size", "p-value", "null-hypothesis"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Statistical power is the ability of a study to detect an effect if the effect is really there.\n\nPower depends on sample size, effect size, variability, measurement quality, and the analysis used." },
      { kind: "p", h: "Senior researcher note", body: "Low power is one reason a meaningful-looking result might not be statistically significant.\n\nA study can fail to find evidence not because nothing is happening, but because the study is too small, noisy, or weakly measured to detect it." },
      { kind: "p", h: "Tiny example", body: "You test an AI simulation with 12 students.\n\nStudents seem more confident afterward, but the test is not significant.\n\nThis may mean there is no effect. Or it may mean the study is too small and noisy to detect the effect clearly." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Interpreting non-significance as proof that nothing matters." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "Power helps you think about whether your study had enough sensitivity to detect the kind of effect you care about." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Power does not rescue a bad design. A huge sample with a weak measure can still produce misleading evidence." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Is my sample large enough for the question?",
        "Is the expected effect small or large?",
        "Is the outcome noisy?",
        "Is the measurement reliable?",
        "Could a non-significant result be due to low power?"
      ]},
      { kind: "quote", body: "Power is about whether the study is sensitive enough to detect the signal." }
    ]
  },
  {
    id: "parametric-vs-nonparametric",
    title: "Parametric vs non-parametric",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Data Type -> Analysis -> Evidence",
    summary: "Parametric vs non-parametric is about matching the method to the data and assumptions.",
    tags: ["parametric", "non-parametric", "assumptions", "method-choice"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["distribution-skew", "descriptive-vs-inferential"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Parametric methods usually make stronger assumptions about the data, often about distribution shape and measurement scale.\n\nNon-parametric methods make fewer assumptions and often work with ranks or categories instead of raw values." },
      { kind: "p", h: "Senior researcher note", body: "This is not about \"advanced vs simple.\" It is about fit.\n\nIf the data are ordinal, skewed, small, or full of outliers, a non-parametric method may be more appropriate." },
      { kind: "p", h: "Tiny example", body: "You compare student ratings of AI tutor usefulness on a 1-to-5 scale before and after a course.\n\nBecause the data are ordinal Likert ratings and may not be normally distributed, a Wilcoxon signed-rank test may be more defensible than a paired t-test." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking non-parametric means weaker or less scientific.\n\nIt often means the method is being more honest about the kind of data available." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can explain why a method fits the data structure and assumptions." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Choosing a non-parametric method does not fix poor measurement, biased sampling, or unclear research questions." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What type of data do I have?",
        "Are the values ordinal, continuous, binary, or counts?",
        "Is the distribution skewed?",
        "Is the sample small?",
        "Are assumptions for the parametric method reasonable?",
        "Is there a non-parametric counterpart?"
      ]},
      { kind: "quote", body: "Parametric vs non-parametric is about matching the method to the data and assumptions." }
    ]
  },
  {
    id: "correlation-not-causation",
    title: "Correlation is not causation",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Research Question -> Analysis -> Claim",
    summary: "Association can suggest a pattern; design determines how close I can get to causation.",
    tags: ["correlation", "causation", "claim", "design"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["descriptive-vs-inferential", "statistical-vs-practical-significance"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Correlation means two variables move together.\n\nCausation means one variable produces change in another.\n\nThese are not the same." },
      { kind: "p", h: "Senior researcher note", body: "This is one of the most repeated warnings in research because it is one of the easiest mistakes to make.\n\nAn association can be real, strong, and useful without being causal." },
      { kind: "p", h: "Tiny example", body: "You find that students who use AI feedback more often have higher final writing scores.\n\nPossible explanations:\n\n- AI feedback helped improve writing.\n- Stronger students chose to use AI feedback more.\n- More motivated students both used AI feedback and revised more.\n- The instructor encouraged certain students to use the tool.\n- Prior writing skill explains both tool use and final score.\n\nThe correlation alone does not decide among these explanations." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using causal verbs for associational evidence.\n\nFor example:\n\n`AI feedback increased writing scores.`\n\nIf the design is correlational, a safer claim is:\n\n`AI feedback use was associated with higher writing scores.`" },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can describe whether variables move together." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Correlation alone does not prove direction, mechanism, or causality." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Could the direction be reversed?",
        "Could a third variable explain the pattern?",
        "Was there random assignment?",
        "Was the predictor measured before the outcome?",
        "What causal language is justified?"
      ]},
      { kind: "quote", body: "Association can suggest a pattern; design determines how close I can get to causation." }
    ]
  },
  {
    id: "significant-but-matters",
    title: "Significant, but does it matter?",
    type: "Analysis vocabulary",
    level: "vocabulary",
    pathway: "Evidence -> Claim",
    summary: "Statistical significance asks whether the result is detectable; practical significance asks whether it matters.",
    tags: ["significance", "practical", "effect-size", "interpretation"],
    source: "../what_the_stat_content/analysis_vocabulary_cards_v1.md",
    related: ["p-value", "effect-size", "confidence-interval"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A result can be statistically significant without being important.\n\nThis card asks whether the finding matters in the real research context." },
      { kind: "p", h: "Senior researcher note", body: "This is where a researcher moves from statistical output to judgment.\n\nYou ask not only \"Did the test reject the null?\" but also \"So what?\"" },
      { kind: "p", h: "Tiny example", body: "A large study finds that students using an AI quiz tool score 0.2 points higher on a 100-point exam.\n\nThe result is statistically significant because the sample is huge.\n\nBut a 0.2-point difference may not matter for students, teachers, or policy.\n\nAnother study finds a 6-point improvement but with wide uncertainty. That may be practically interesting even if the p-value is above .05." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating the word \"significant\" as if it means \"important.\"\n\nIn statistics, significant means statistically detectable under a test, not necessarily meaningful." },
      { kind: "callout", tone: "ok", h: "Claim you can make", body: "You can connect statistical evidence to substantive interpretation." },
      { kind: "callout", tone: "warn", h: "Claim to avoid", body: "Practical significance does not remove the need for careful design, measurement, uncertainty, or limitations." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "How large is the result?",
        "Is that size meaningful in this setting?",
        "Who would care about this difference?",
        "What does the confidence interval suggest?",
        "Does the result change a decision or interpretation?",
        "Am I overstating the importance because the p-value is small?"
      ]},
      { kind: "quote", body: "Statistical significance asks whether the result is detectable; practical significance asks whether it matters." }
    ]
  }
];
