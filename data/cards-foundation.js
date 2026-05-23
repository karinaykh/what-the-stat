/*
  WTS card schema (used by every data file in /data)
  -------------------------------------------------
  Each card is a plain object. Sections are rendered in order.

  {
    id:        "construct",              // unique slug, used in URLs (#/card/construct)
    title:     "Construct",
    type:      "Foundation",             // pretty label for the card type
    level:     "foundation",             // filter category: foundation | procedure | vocabulary |
                                         //                  method | comparison | visualization |
                                         //                  data-shape | red-flag | claim | example
    pathway:   "Construct",              // optional pathway step e.g. "Analysis -> Evidence"
    summary:   "The idea you care about before it becomes a variable.",
    tags:      ["construct", "measurement"],
    source:    "../what_the_stat_content/foundation_cards_v1.md",
    related:   ["conceptualization", "indicator"],   // ids of related cards
    sections: [
      { kind: "p",       h: "Plain meaning",   body: "string of prose" },
      { kind: "l",       h: "When to use",     body: ["item one", "item two"] },
      { kind: "code",    h: "Python",          body: "from scipy import stats\nstats.ttest_rel(...)" },
      { kind: "t",       h: "Decision table",  body: [
                                                 ["My situation", "Likely direction"],
                                                 ["row 1 col 1", "row 1 col 2"]
                                               ] },
      { kind: "compare", body: [
                            { h: "Use A if", items: ["..."] },
                            { h: "Use B if", items: ["..."] }
                         ] },
      { kind: "callout", tone: "warn", h: "Beginner trap", body: "string" },
      { kind: "quote",   body: "One sentence to remember." }
    ]
  }

  Section kinds:
    p        prose paragraph(s)            body: string (use \n\n for paragraph breaks)
    l        bulleted list                 body: [string, ...]
    code     code block (monospace)        body: string
    t        table                         body: [[header...], [row...], [row...]]
    compare  two-column side-by-side       body: [{h, items:[...]}, {h, items:[...]}]
    callout  highlighted note              body: string,  tone: "warn" | "info" | "ok"
    quote    one-sentence pull-quote       body: string
*/

window.WTS_FOUNDATION_CARDS = [
  {
    id: "construct",
    title: "Construct",
    type: "Foundation",
    level: "foundation",
    pathway: "Construct",
    summary: "The idea you care about before it becomes a variable.",
    tags: ["construct", "measurement", "before-test"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["conceptualization", "indicator", "operationalization"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A construct is the idea you care about before it becomes a variable.\n\nIt is usually something important but not directly visible, such as learning, engagement, confidence, belonging, motivation, clinical reasoning, trust, or teaching quality." },
      { kind: "p", h: "Senior researcher note", body: "When junior researchers ask, \"What test should I use?\", a senior researcher often wants to ask first, \"What is the thing you think you measured?\"\n\nThat thing is the construct.\n\nIf the construct is blurry, the whole analysis becomes blurry. Statistics can make blurry things look precise, which is dangerous." },
      { kind: "p", h: "Tiny example", body: "You want to study whether an AI tutor improves student engagement.\n\nEngagement is the construct. But engagement could mean:\n\n- students spend more time on task\n- students write more\n- students show more curiosity\n- students feel more interested\n- students return to the system more often\n- students use deeper strategies\n\nThese are not the same thing." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using a familiar word as if everyone already agrees what it means.\n\nFor example:\n\nI want to measure learning.\n\nThat is not enough yet. Learning could mean test scores, transfer, retention, explanation quality, confidence, skill performance, or long-term behavior change." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What is the main idea I care about?",
        "Is it directly observable, or is it a construct?",
        "Would another researcher define this construct the same way?",
        "What parts of the construct do I care about most?",
        "What parts am I leaving out?"
      ]},
      { kind: "quote", body: "A construct is the thing I care about; the data is only my attempt to capture it." }
    ]
  },
  {
    id: "conceptualization",
    title: "Conceptualization",
    type: "Foundation",
    level: "foundation",
    pathway: "Construct",
    summary: "Deciding what a construct means in this particular study.",
    tags: ["construct", "definition", "before-test"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["construct", "dimension", "operationalization"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Conceptualization means deciding what a construct means in this particular study.\n\nIt turns a broad idea into a clearer research meaning." },
      { kind: "p", h: "Senior researcher note", body: "Conceptualization is where you stop pretending that a big word is obvious.\n\nA good researcher does not just say \"engagement\" or \"confidence\" and move on. They explain what they mean by that word, because the later measurement and analysis depend on it." },
      { kind: "p", h: "Tiny example", body: "Suppose your construct is student engagement.\n\nYou might conceptualize it as:\n\n- behavioral engagement: participation, attendance, task completion\n- emotional engagement: interest, enjoyment, belonging\n- cognitive engagement: strategy use, persistence, depth of thinking\n\nIf your study only measures time spent in the platform, then you are mostly capturing behavioral engagement, not all of engagement." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating the construct as if it has only one natural meaning.\n\nThe word may be familiar, but the research meaning still has to be defined." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "How am I defining this construct for this study?",
        "Which dimensions are included?",
        "Which dimensions are excluded?",
        "Why is this definition appropriate for my research question?",
        "Is my definition coming from theory, prior literature, practical need, or my own decision?"
      ]},
      { kind: "quote", body: "Conceptualization is me saying, \"In this study, this is what I mean by this construct.\"" }
    ]
  },
  {
    id: "dimension",
    title: "Dimension",
    type: "Foundation",
    level: "foundation",
    pathway: "Construct",
    summary: "One part or aspect of a larger construct.",
    tags: ["construct", "dimension", "measurement"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["construct", "conceptualization", "indicator"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A dimension is one part or aspect of a larger construct.\n\nMany important education constructs have multiple dimensions." },
      { kind: "p", h: "Senior researcher note", body: "Dimensions matter because a broad construct may not move as one single thing.\n\nAn intervention might improve one dimension and not another. If you collapse everything too quickly, you can miss the actual pattern." },
      { kind: "p", h: "Tiny example", body: "Construct: belonging\n\nPossible dimensions:\n\n- belonging with peers\n- belonging with instructors\n- belonging in the institution\n- belonging in the discipline\n\nAn online doctoral student might feel strong belonging with an instructor but weak belonging with peers. A single overall belonging score may hide that difference." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Mixing different dimensions into one score without checking whether they really belong together." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Does this construct have multiple parts?",
        "Are all parts relevant to my research question?",
        "Should I measure them separately or combine them?",
        "If I combine them, what evidence shows that is reasonable?"
      ]},
      { kind: "quote", body: "A dimension is a meaningful part of a construct that may need its own attention." }
    ]
  },
  {
    id: "indicator",
    title: "Indicator",
    type: "Foundation",
    level: "foundation",
    pathway: "Measurement",
    summary: "An observable clue that stands in for a construct.",
    tags: ["indicator", "measurement", "survey", "rubric"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["construct", "operationalization", "dimension"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "An indicator is an observable clue that stands in for a construct.\n\nBecause constructs are often invisible, we use indicators to capture traces of them." },
      { kind: "p", h: "Senior researcher note", body: "An indicator is not the construct itself. It is evidence that may point toward the construct.\n\nStrong researchers stay aware of this gap. They do not say \"we measured motivation\" too casually. They say how motivation was indicated." },
      { kind: "p", h: "Tiny example", body: "Construct: motivation\n\nPossible indicators:\n\n- a survey item asking students whether they want to continue learning\n- number of optional practice problems attempted\n- attendance at optional sessions\n- persistence after a wrong answer\n- interview statements about goals\n\nEach indicator captures a different trace of motivation." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Assuming the easiest indicator is the best indicator.\n\nFor example, login frequency is easy to count, but it may reflect habit, course requirement, anxiety, or technical problems, not only engagement." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What observable thing am I using as evidence for the construct?",
        "Is this indicator close to the construct, or only loosely related?",
        "Could this indicator mean something else?",
        "Do I need multiple indicators?"
      ]},
      { kind: "quote", body: "An indicator is a clue, not the whole truth." }
    ]
  },
  {
    id: "operationalization",
    title: "Operationalization",
    type: "Foundation",
    level: "foundation",
    pathway: "Measurement",
    summary: "The exact procedure for turning a construct into data.",
    tags: ["operationalization", "measurement", "procedure"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["construct", "indicator", "variable", "composite-score"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Operationalization is the exact procedure for turning a construct into data.\n\nIt answers: What will I actually record, score, count, ask, code, or compute?" },
      { kind: "p", h: "Senior researcher note", body: "This is where a beautiful research idea becomes a practical measurement plan.\n\nOperationalization is often where hidden researcher choices enter. Two researchers can study the same construct but operationalize it differently, leading to different results." },
      { kind: "p", h: "Tiny example", body: "Construct: confidence in using AI for teaching\n\nPossible operationalization:\n\n- Ask students to rate 5 survey items from 1 to 5.\n- Reverse-code one negatively worded item.\n- Average the 5 items into a confidence score if internal consistency is acceptable.\n- Higher scores indicate higher self-reported confidence.\n\nThat is much clearer than simply saying \"we measured confidence.\"" },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Naming the construct but not specifying the procedure.\n\nFor example:\n\nWe measured teaching quality.\n\nA reader needs to know how: student ratings, expert rubric, observation checklist, test score gains, peer review, or something else?" },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What exact data will represent this construct?",
        "What instrument, rubric, score, log, or code will be used?",
        "How will responses be converted into variables?",
        "What choices did I make in scoring or cleaning?",
        "Could a different operationalization produce a different finding?"
      ]},
      { kind: "quote", body: "Operationalization is the recipe for how an idea becomes data." }
    ]
  },
  {
    id: "variable",
    title: "Variable",
    type: "Foundation",
    level: "foundation",
    pathway: "Data Type",
    summary: "Something that can vary across people, cases, groups, times, or observations.",
    tags: ["variable", "data", "column", "role"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["data-type", "operationalization", "composite-score"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A variable is something that can vary across people, cases, groups, times, or observations.\n\nIn data, a variable is usually a column. Each case has a value for that variable." },
      { kind: "p", h: "Senior researcher note", body: "Variables are not automatically causes. A variable can describe, group, predict, explain, or be explained, depending on the study design and research question.\n\nSenior researchers pay attention to the role a variable plays in the argument." },
      { kind: "p", h: "Tiny example", body: "In a study of AI tutor use:\n\n- student_id identifies the case\n- condition might be AI tutor vs no AI tutor\n- final_score might be an outcome\n- prior_GPA might be a covariate\n- confidence_score might be a survey composite\n- completed_optional_practice might be yes/no\n\nEach is a variable, but each has a different role." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking \"independent variable\" always means true cause.\n\nSometimes it only means the predictor or grouping variable in the analysis. Causality depends on design, not vocabulary." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What are the variables in my dataset?",
        "Which variable is the outcome?",
        "Which variable is the predictor, group, condition, or explanation?",
        "Which variables are controls or covariates?",
        "Are any variables actually constructed from multiple items?"
      ]},
      { kind: "quote", body: "A variable is a measured thing that changes, but its meaning depends on its role in the study." }
    ]
  },
  {
    id: "data-type",
    title: "Data type / level of measurement",
    type: "Foundation",
    level: "foundation",
    pathway: "Data Type",
    summary: "What kind of variable you have; methods expect different kinds.",
    tags: ["data-type", "measurement", "nominal", "ordinal", "continuous"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["variable", "composite-score", "decide-describe"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Data type tells you what kind of variable you have.\n\nThis matters because statistical methods expect different kinds of variables." },
      { kind: "p", h: "Senior researcher note", body: "This is one of the first real bridges between research design and statistics.\n\nA method is not chosen only because of the research question. It also depends on what kind of data the measurement produced." },
      { kind: "l", h: "Common data types", body: [
        "Nominal: categories with no order, such as program type or school sector.",
        "Binary: two categories, such as completed/not completed.",
        "Ordinal: ordered categories, such as strongly disagree to strongly agree.",
        "Continuous: numeric values where distance matters, such as time, score, age, or percentage.",
        "Count: number of events, such as posts, attempts, absences, or errors.",
        "Composite/scale: a score created by combining multiple items."
      ]},
      { kind: "p", h: "Tiny example", body: "Research question: Do students differ in confidence after using an AI tutor?\n\nPossible confidence data:\n\n- one Likert item from 1 to 5: ordinal\n- average of 6 Likert items: often treated as a scale/composite\n- interview-coded low/medium/high confidence: ordinal\n- behavioral persistence score: continuous or count, depending on construction\n\nDifferent data types may lead to different analytic choices." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking every number is the same kind of number.\n\nA student ID number, a Likert rating, a test score, and a count of attempts are all numbers in a spreadsheet, but they do not mean the same thing statistically." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Is this variable categorical, ordinal, continuous, binary, count, or composite?",
        "Does order matter?",
        "Does distance between values matter?",
        "Is zero meaningful?",
        "Did I create this score by combining items?"
      ]},
      { kind: "quote", body: "Data type is the grammar of the variable; methods have to speak that grammar." }
    ]
  },
  {
    id: "sample",
    title: "Sample",
    type: "Foundation",
    level: "foundation",
    pathway: "Sample",
    summary: "The set of cases you actually observe.",
    tags: ["sample", "unit-of-analysis", "n"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["sampling-frame", "representativeness", "flag-repeated-rows"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A sample is the set of people, cases, documents, classrooms, schools, sessions, or observations included in the study.\n\nThe sample is what you actually observe." },
      { kind: "p", h: "Senior researcher note", body: "A sample is not just a number. It is a claim boundary.\n\nWhen someone says \"n = 200,\" a senior researcher immediately wants to know: 200 of what, from where, selected how, and representing whom?" },
      { kind: "p", h: "Tiny example", body: "You analyze 120 student interactions with an AI tutor.\n\nYour sample might be:\n\n- 120 students\n- 120 chat sessions\n- 120 messages\n- 120 assignments\n- 120 course enrollments\n\nThese are different units. The sample has to match the unit of analysis." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reporting sample size without clarifying the unit.\n\nFor example, 500 messages from 20 students is not the same as 500 independent students." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What exactly is one case in my dataset?",
        "How many cases do I have?",
        "Where did these cases come from?",
        "Who or what is missing?",
        "Are observations independent, or are some nested within the same student/class/course?"
      ]},
      { kind: "quote", body: "The sample tells me what I actually observed and where my claim begins to have limits." }
    ]
  },
  {
    id: "sampling-frame",
    title: "Sampling frame",
    type: "Foundation",
    level: "foundation",
    pathway: "Sample",
    summary: "The list or source from which the sample could be selected.",
    tags: ["sample", "sampling-frame", "bias"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["sample", "representativeness"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A sampling frame is the list, database, platform, roster, archive, or source from which the sample could be selected.\n\nIt is the practical doorway into the population." },
      { kind: "p", h: "Senior researcher note", body: "A sampling frame quietly shapes the study before analysis begins.\n\nIf the frame excludes certain people, the sample cannot fully represent them, no matter how fancy the later statistics are." },
      { kind: "p", h: "Tiny example", body: "You want to study doctoral students' AI literacy.\n\nPossible sampling frames:\n\n- all students enrolled in one course\n- a department email list\n- students who joined an AI workshop\n- users of an AI learning platform\n- respondents to a social media post\n\nEach frame reaches a different group." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Confusing the population you care about with the list you actually have.\n\nYou may care about \"doctoral students,\" but your sampling frame might only include \"doctoral students in one online course who answered the survey.\"" },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What list or source did my sample come from?",
        "Who had a chance to be included?",
        "Who had no chance to be included?",
        "Does the sampling frame match the population I want to discuss?",
        "What bias could the frame introduce?"
      ]},
      { kind: "quote", body: "The sampling frame is the gate; whoever is outside the gate cannot be represented by the sample." }
    ]
  },
  {
    id: "representativeness",
    title: "Representativeness",
    type: "Foundation",
    level: "foundation",
    pathway: "Sample",
    summary: "Whether the sample resembles the population in the ways that matter.",
    tags: ["sample", "representativeness", "generalizability", "bias"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["sample", "sampling-frame", "claim"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Representativeness asks whether the sample resembles the population in the ways that matter for the study.\n\nIt is about whether the sample can reasonably speak for a larger group." },
      { kind: "p", h: "Senior researcher note", body: "Representativeness is not magic, and it is not guaranteed by a large sample.\n\nA big sample can still be biased. A small sample can still be useful, but its claims must be narrower." },
      { kind: "p", h: "Tiny example", body: "Suppose 2,000 teachers answer a survey about AI use.\n\nThat sounds impressive. But if all 2,000 teachers came from an optional AI enthusiast mailing list, the sample may overrepresent teachers already interested in AI.\n\nThe issue is not only how many teachers responded. The issue is which teachers had the chance and motivation to respond." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking large sample size automatically means strong generalizability.\n\nLarge n reduces some kinds of uncertainty, but it does not remove sampling bias." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What larger group do I want to discuss?",
        "Does my sample resemble that group?",
        "On what characteristics does resemblance matter?",
        "Who is likely overrepresented?",
        "Who is likely underrepresented?",
        "Should my claim be narrowed?"
      ]},
      { kind: "quote", body: "Representativeness is about fit between the sample and the population, not just sample size." }
    ]
  },
  {
    id: "reliability",
    title: "Reliability",
    type: "Foundation",
    level: "foundation",
    pathway: "Measurement",
    summary: "Whether a measurement procedure gives consistent results.",
    tags: ["reliability", "measurement", "consistency"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["validity", "operationalization", "indicator"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Reliability is about consistency.\n\nA reliable measurement process gives similar results when the thing being measured has not actually changed." },
      { kind: "p", h: "Senior researcher note", body: "Reliability is not glamourous, but it is a trust issue.\n\nIf a measure is unstable, inconsistent, or applied differently by different people, then later statistical results are built on shaky ground." },
      { kind: "p", h: "Tiny example", body: "You create a rubric to code whether students show \"metacognitive monitoring\" in AI tutor conversations.\n\nReliability questions include:\n\n- Would two coders apply the rubric similarly?\n- Would the same coder code similar examples consistently?\n- Are the categories clear enough?\n\nIf coders often disagree, the problem may be the rubric, the training, the construct definition, or the examples." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking reliability proves the measure is correct.\n\nIt does not. A bathroom scale can be consistently 5 pounds off. That is reliable but not accurate." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Is the measurement process consistent?",
        "Would another person get the same result?",
        "Would I get the same result later?",
        "Are survey items hanging together?",
        "Are coders applying categories consistently?",
        "What reliability evidence should I report?"
      ]},
      { kind: "quote", body: "Reliability asks, \"Can I trust this measurement process to behave consistently?\"" }
    ]
  },
  {
    id: "validity",
    title: "Validity",
    type: "Foundation",
    level: "foundation",
    pathway: "Measurement",
    summary: "Whether the measure actually captures the construct it claims to capture.",
    tags: ["validity", "measurement", "construct"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["reliability", "construct", "operationalization"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Validity asks whether the measure actually captures the construct it claims to capture.\n\nIt is about fit between the concept and the evidence." },
      { kind: "p", h: "Senior researcher note", body: "Validity is one of the most important research questions hiding inside quantitative work.\n\nA number can be precise, reliable, and still not measure the thing you care about." },
      { kind: "p", h: "Tiny example", body: "You want to measure student learning from an AI simulation.\n\nPossible measures:\n\n- satisfaction survey\n- self-reported confidence\n- quiz score\n- transfer task\n- expert-rated explanation\n- later classroom performance\n\nThese are not equally valid for every definition of learning. Satisfaction may be useful, but it is not the same as learning." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Using the available measure as if it perfectly equals the construct.\n\nFor example, \"students liked it\" does not automatically mean \"students learned from it.\"" },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Does this measure really match my construct?",
        "What part of the construct does it capture well?",
        "What part does it miss?",
        "What alternative explanations could produce the same score?",
        "What evidence supports the validity of this measure?"
      ]},
      { kind: "quote", body: "Validity asks, \"Am I measuring what I think I am measuring?\"" }
    ]
  },
  {
    id: "research-question-type",
    title: "Research question type",
    type: "Foundation",
    level: "foundation",
    pathway: "Research Question",
    summary: "What you are trying to do with the data shapes the analysis.",
    tags: ["research-question", "describe", "compare", "associate", "predict"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["decide-describe", "decide-compare-two-groups", "decide-pre-post", "claim"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Research question type means what you are trying to do with the data.\n\nDifferent question types lead to different analyses and different claims." },
      { kind: "p", h: "Senior researcher note", body: "A lot of statistical confusion comes from not knowing what kind of question is being asked.\n\nBefore choosing a method, classify the job of the question." },
      { kind: "l", h: "Common question types", body: [
        "Describe: What is happening?",
        "Compare: Are groups or conditions different?",
        "Associate: Are variables related?",
        "Predict: Can one or more variables estimate an outcome?",
        "Explain: Why might this pattern occur?",
        "Evaluate: Did an intervention or program appear to make a difference?",
        "Check measurement: Does this scale or coding process work?"
      ]},
      { kind: "p", h: "Tiny example", body: "Topic: AI feedback in writing courses\n\nDifferent research questions:\n\n- Describe: How often do students use AI feedback?\n- Compare: Do students using AI feedback revise more than students not using it?\n- Associate: Is AI feedback use related to writing confidence?\n- Predict: Does frequency of AI feedback use predict final writing score, controlling for prior score?\n- Evaluate: Did the AI feedback intervention improve revision quality?\n- Check measurement: Do the rubric categories for revision quality have acceptable inter-rater reliability?\n\nThese are different analytic problems." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Starting with a method before identifying the question type.\n\nFor example, asking \"Should I use regression?\" before knowing whether you are describing, comparing, predicting, or making a causal argument." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Am I describing one thing?",
        "Am I comparing groups or conditions?",
        "Am I looking for a relationship?",
        "Am I predicting an outcome?",
        "Am I evaluating an intervention?",
        "Am I checking whether a measure works?",
        "How strong a claim do I want to make?"
      ]},
      { kind: "quote", body: "The method follows the job of the question." }
    ]
  },
  {
    id: "evidence",
    title: "Evidence",
    type: "Foundation",
    level: "foundation",
    pathway: "Evidence",
    summary: "What the data and analysis actually show, separate from interpretation.",
    tags: ["evidence", "results", "interpretation"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["claim", "research-question-type", "effect-size"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Evidence is what the data and analysis actually show.\n\nIt includes descriptive results, tables, graphs, test statistics, confidence intervals, effect sizes, patterns, and model outputs." },
      { kind: "p", h: "Senior researcher note", body: "Evidence is not the same as interpretation.\n\nA careful researcher separates what was observed from what they think it means." },
      { kind: "p", h: "Tiny example", body: "Evidence:\n\nStudents in the AI feedback group had a higher average revision-quality score than students in the comparison group.\n\nInterpretation:\n\nThis pattern is consistent with the possibility that AI feedback supported revision quality.\n\nOverclaim:\n\nAI feedback caused students to become better writers.\n\nThe last claim may require stronger design evidence." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Jumping from result to big claim too quickly.\n\nThe analysis may support a narrower claim than the one you want to make." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What does the result literally show?",
        "Is the evidence descriptive, associational, predictive, or causal?",
        "How large is the pattern?",
        "How uncertain is it?",
        "What alternative explanations remain?",
        "What visual or table helps the reader see the evidence?"
      ]},
      { kind: "quote", body: "Evidence is what the analysis shows before I stretch it into a claim." }
    ]
  },
  {
    id: "claim",
    title: "Claim",
    type: "Foundation",
    level: "foundation",
    pathway: "Claim",
    summary: "What you say the evidence means.",
    tags: ["claim", "interpretation", "overclaim"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["evidence", "representativeness", "claim-group-comparison"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A claim is what you say the evidence means.\n\nIt is the sentence you want readers to believe after seeing your data." },
      { kind: "p", h: "Senior researcher note", body: "The best researchers do not only ask, \"Is the result significant?\"\n\nThey ask, \"What claim does this result actually support, and what claim would go too far?\"" },
      { kind: "p", h: "Tiny example", body: "Evidence:\n\nStudents who used the practice chatbot had higher self-reported confidence.\n\nResponsible claim:\n\nStudents who used the practice chatbot reported higher confidence than students in the comparison group.\n\nMore cautious interpretation:\n\nThe pattern suggests that chatbot-supported practice may be associated with confidence, though the design does not by itself rule out selection effects.\n\nOverclaim:\n\nThe chatbot made students more capable.\n\nThat overclaim shifts from confidence to capability and from association to causation." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Letting the desired story become stronger than the evidence." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What can I responsibly say?",
        "What is the strongest claim my design supports?",
        "What would be overclaiming?",
        "Does my claim match my construct and measurement?",
        "Does my claim match my sample?",
        "Does my claim match my analysis?"
      ]},
      { kind: "quote", body: "A good claim is strong enough to matter and careful enough to be honest." }
    ]
  },
  {
    id: "researcher-degrees-of-freedom",
    title: "Researcher degrees of freedom",
    type: "Foundation",
    level: "foundation",
    pathway: "Analysis",
    summary: "The many choices researchers make while preparing, analyzing, and reporting data.",
    tags: ["analysis", "researcher-choices", "transparency"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["robustness-check", "operationalization", "claim"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Researcher degrees of freedom are the many choices researchers make while preparing, analyzing, and reporting data.\n\nThese choices can be reasonable and honest, but they can still affect results." },
      { kind: "p", h: "Senior researcher note", body: "This is where quantitative research becomes less mechanical than beginners expect.\n\nTwo thoughtful researchers can start with the same question and dataset but make different defensible choices about cleaning, exclusions, variables, covariates, models, and reporting." },
      { kind: "p", h: "Tiny example", body: "You study whether AI tutoring improves assignment scores.\n\nResearcher choices might include:\n\n- exclude students who used the tool only once, or keep them\n- use final assignment score, gain score, or rubric subscore\n- control for prior GPA or prior assignment score\n- treat missing survey responses as missing or impute them\n- analyze all students or only those who completed the course\n- report mean differences, regression results, or both\n\nEach choice can shape the result." },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Thinking the dataset automatically determines one correct analysis.\n\nOften, the dataset permits several defensible analyses. The researcher must justify the path taken." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What inclusion and exclusion rules did I use?",
        "How did I define each variable?",
        "How did I handle missing data?",
        "What covariates did I include or exclude?",
        "What alternative choices would also be reasonable?",
        "Did I report enough detail for someone else to understand my analysis?"
      ]},
      { kind: "quote", body: "Quantitative results come from data plus researcher choices." }
    ]
  },
  {
    id: "robustness-check",
    title: "Robustness check",
    type: "Foundation",
    level: "foundation",
    pathway: "Analysis -> Evidence",
    summary: "Whether a finding still holds under reasonable alternative choices.",
    tags: ["robustness", "sensitivity", "analysis"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["researcher-degrees-of-freedom", "evidence", "claim"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "A robustness check asks whether a finding still holds under reasonable alternative choices.\n\nIt is a way of checking whether the conclusion is fragile." },
      { kind: "p", h: "Senior researcher note", body: "Robustness is not about trying random analyses until something works.\n\nIt is about asking: if I make another defensible choice, does the basic pattern remain, weaken, disappear, or reverse?" },
      { kind: "p", h: "Tiny example", body: "Main analysis:\n\nStudents who used the AI tutor had higher average practice scores.\n\nRobustness checks:\n\n- repeat the analysis excluding students with only one login\n- control for prior performance\n- use median instead of mean if scores are skewed\n- analyze course sections separately\n- use a non-parametric test if assumptions are questionable\n- check whether the pattern appears for both strong and struggling students" },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Treating robustness as an advanced luxury.\n\nEven a simple study can include a basic sensitivity question: would my conclusion change if I made a different reasonable decision?" },
      { kind: "l", h: "Questions to ask yourself", body: [
        "What are the most important choices in my analysis?",
        "Could a reasonable person make a different choice?",
        "Does the conclusion depend on one fragile decision?",
        "What alternative analysis would reassure a reader?",
        "If the result changes, what does that teach me?"
      ]},
      { kind: "quote", body: "A robust finding does not depend too heavily on one fragile analytic choice." }
    ]
  },
  {
    id: "statistical-vs-practical-significance",
    title: "Statistical significance vs practical significance",
    type: "Foundation",
    level: "foundation",
    pathway: "Evidence -> Claim",
    summary: "Detectable is not the same as meaningful.",
    tags: ["significance", "effect-size", "p-value", "interpretation"],
    source: "../what_the_stat_content/foundation_cards_v1.md",
    related: ["p-value", "effect-size", "evidence", "claim"],
    sections: [
      { kind: "p", h: "Plain meaning", body: "Statistical significance asks whether a result is unlikely to be explained by sampling error under a statistical model.\n\nPractical significance asks whether the result is large, meaningful, or important in the real world." },
      { kind: "p", h: "Senior researcher note", body: "This card belongs in the foundation layer because beginners often treat p < .05 as the whole story.\n\nIt is not the whole story. A tiny result can be statistically significant in a large sample. A meaningful result can be non-significant in a small or noisy sample." },
      { kind: "p", h: "Tiny example", body: "An intervention improves test scores by 0.4 points on a 100-point test.\n\nWith a huge sample, that difference might be statistically significant.\n\nBut a teacher, school leader, or student might reasonably ask: does 0.4 points matter?" },
      { kind: "callout", tone: "warn", h: "Common beginner trap", body: "Reading statistical significance as importance.\n\nSignificant in statistics does not automatically mean important, educationally meaningful, or practically useful." },
      { kind: "l", h: "Questions to ask yourself", body: [
        "Is the result statistically detectable?",
        "How large is the effect?",
        "Is the effect meaningful in this setting?",
        "Who would care about a difference of this size?",
        "Is the uncertainty small or large?",
        "What effect size or descriptive result should accompany the p-value?"
      ]},
      { kind: "quote", body: "Statistical significance asks whether the pattern is detectable; practical significance asks whether it matters." }
    ]
  }
];
