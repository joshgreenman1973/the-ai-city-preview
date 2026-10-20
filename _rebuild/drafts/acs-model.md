---
slug: acs-model
title: A Child Welfare Algorithm With No Public Evidence That It Helps
dek: Since 2018 a model that families never hear about has picked which abuse cases get a second look, and the City's new algorithm office should make it prove itself.
section: The Peril
category: Child Welfare
skyline_stat: "About 3,000 of roughly 50,000 child welfare investigations a year are picked for extra review by a predictive model"
skyline_value: 3000
skyline_claim: C2
---

Every year New York City's Administration for Children's Services (ACS) opens about 50,000 child abuse and neglect investigations, and its Quality Assurance unit has room to take a second look at about 3,000 of them. Since May 2018 a machine-learning model has decided which ones, [according to the agency's own entry](https://data.cityofnewyork.us/City-Government/Algorithmic-Tools-Compliance-Report/jaw4-yuem) in the City's inventory of algorithmic tools.

Early in each investigation the model estimates, for every child involved, the likelihood that physical or sexual abuse will be substantiated within two years. The case takes the score of its highest-scoring child, and the reviewers work down from the top of the list. Neither they nor the investigators see the scores, and the agency says the tool decides nothing beyond which cases get reviewed.

As uses of prediction in child welfare go, this one is easy to defend. Every family the model ranks already has an open case, and a specialist's time has to go somewhere. But in more than eight years ACS has not shown the public whether the reviews the model triggers leave children safer or whether its picks fall more heavily on Black families, and by its own account it has never studied the first question. The City's new algorithm office should demand both answers and, if ACS cannot supply them, recommend that the agency stop using the model.

Most of what the public knows came from [The Markup's 2025 investigation](https://themarkup.org/investigations/2025/05/20/the-nyc-algorithm-deciding-which-families-are-under-watch-for-child-abuse) by Colin Lecher. Working from agency documents, The Markup reported that the model used 279 variables, among them the family's neighborhood, the mother's age, the number and ages of siblings and a caretaker's physical and mental health. Race is not an input, but a report The Markup obtained said the model uses "variables that may act as partial proxies for race (e.g., geography)," including borough and community district.

That list describes an earlier version. ACS's latest inventory entry says the model has been retrained on investigations closed through 2022, partly because changes in policy and practice had made the old data a poor match for current cases. The entry describes the inputs only as agency records of a family's past and present involvement with child welfare. No current variable list is public, and the agency's account of which years the original model was trained on has shifted from one annual filing to the next.

A second look is less than a new investigation, but it can change what happens to a family. When a case is flagged, a senior specialist may call an "action meeting" and direct investigators to take steps they might have skipped. An ACS spokesperson, Marisa Kaufman, said those steps can include more interviews with relatives and others who know the family, referrals to services and consultations with clinical experts and with Family Court Legal Services. ACS tells neither the family, its attorney nor the caseworker that the model flagged the case.

Allegheny County, Pennsylvania, which includes Pittsburgh, uses an algorithm at a point where more is at stake. The Allegheny Family Screening Tool, launched in August 2016, scores calls to the county's hotline about neglect by [the chance](https://spectrumlocalnews.com/us/snplus/news/2023/01/31/justice-department-child-welfare-algorithm) that a child will be placed in foster care within two years, drawing on birth, Medicaid, mental health, jail and probation records. The score helps decide whether a family is investigated at all. Erin Dalton, then the county's human services director, [defended it to The Associated Press](https://whyy.org/articles/algorithm-screens-for-child-neglect-raises-concerns/) in 2022 on the ground that workers otherwise make thousands of these calls a year "with incredibly imperfect information." In February 2026 she became New York City's commissioner of social services, [the county announced](https://www.alleghenycounty.us/News-Articles/Allegheny-County-Press-Releases/February-2026-PR/2-25-2026-Allegheny-County-Director-of-Human-Services-Erin-Dalton-Named-New-York-City-Commissioner-of-Department-of-Social-Services).

The county has shown its work. In 2019 it published [the model's methodology, an ethical review done before launch](https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-2.pdf) and a Stanford evaluation, which [found](https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/Impact-Evaluation-from-16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-6.pdf) that the tool made decisions to investigate more accurate and perhaps made decisions not to investigate slightly less so. A [later county summary](https://analytics.alleghenycounty.us/wp-content/uploads/2024/05/23-ACDHS-19_FamilyScreeningToolUpdate_Summary.pdf) cites an independent study that found the gap between Black and white children in neglect investigations shrank by 46% after the tool arrived.

The county also gave its data to outside researchers. A team led by Carnegie Mellon University researchers [reported in 2022](https://doi.org/10.1145/3491102.3501831) that workers, who could overrule the score, screened in Black and white children at rates 9 percentage points apart, where the tool alone would have produced a 20-point gap. The tool-alone figure rests on a cutoff the researchers chose, but workers' decisions were less unequal at every cutoff they tried. The tool would have been somewhat more accurate than the workers at predicting the outcomes it was trained on, though the authors call those outcomes "biased and contested." County officials called the research "hypothetical."

Defenders and critics of Allegheny's tool argue over the same published tables. New Yorkers have a few paragraphs in an inventory and an internal audit that surfaced only because The Markup filed a records request.

That audit found the model picked out past cases that ended in severe harm better than criteria the agency had chosen in the past, such as whether a child was under a year old or a caretaker abused drugs or alcohol. It also found that because severe harm is rare, the model's predictions "are more likely to be incorrect than correct," that the training data likely carried "some implicit and systemic biases" and that biased proxies can "cause harm to families, and perpetuate systemic biases and disproportionality." Black families in New York City are reported to ACS at seven times the rate of white families, The Markup reported, so any such bias falls hardest on them.

A wrong second look costs a family far less than a wrong removal, and Kaufman said the agency's audits check whether the model performs similarly across racial and ethnic groups and that staff, never directly a machine, decide on interventions. She also said ACS has not studied whether the reviews change what happens to a case, including whether a child is removed, and that designing such an experiment is not feasible.

ACS would not have to design much. Reviewers take cases from the top of a ranked list until they run out of room. Investigations ranked just above that line and just below it should involve similar families, and only the first group gets the review. Comparing what happens to the two groups afterward, in new reports and removals, is a standard method in program evaluation. The list is ranked daily, so the line likely moves, and the analysis would have to account for that. A randomized trial is possible too: Allegheny's summary cites one of a similar screening tool in a Colorado county.

In its next filing under Local Law 35 of 2022, the City's algorithm disclosure law, ACS should publish the current variable list; the racial and borough makeup of the cases picked for review, set against all investigations; and the outcomes of cases just above and below the cutoff, by race. It already audits the model's performance by race, so it computes some of those figures now. It should also tell a family's lawyer when the model sends a case to review, since the meeting that follows can lead to consultations with Family Court Legal Services.

The Council has given the City a body to enforce this. A 2025 law requires an Office of Algorithmic Accountability to analyze agencies' tools, weigh their risks and set up a process for complaints and corrective action. In July, a month after the office was due, [City & State found](https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/) no sign it existed. On Oct. 5 the City's technology office [told the Council](https://www.nyc.gov/assets/dca/downloads/pdf/media/Advocacy-Testimony-Intros-161-T20262602-T20262601-T20262606-T20262605-T20262599-T20262603-504-T20262600.pdf) that it had been formally established, with six positions funded and hiring underway. Its first case should be this model, with a deadline: if ACS cannot show within a year that the reviews help children without landing harder on Black families, the office should recommend that ACS stop using it.

<!-- CHART
title: In Allegheny County, workers narrowed the racial gap the algorithm alone would have produced
dek: Share of children in discretionary neglect referrals screened in for investigation, 2016-2018: the tool's recommendation alone at the researchers' cutoff (score 15 or higher) vs. workers' actual decisions
type: bar
data:
| Decision | Black children | White children |
| Tool alone (score 15+) | 71.0% | 50.9% |
| Workers using the tool | 61.8% | 52.8% |
(Computed from Table 1 of Cheng et al.: 18,536/26,123; 11,013/21,623; 16,133/26,123; 11,420/21,623. Paper's own rounding: 71%, 51%, 61.7%; gap 20 points vs 9 points.)
source: Cheng, Stapleton et al., "How Child Welfare Workers Reduce Racial Disparities in Algorithmic Decisions," CHI 2022, using Allegheny County data
claims: C20, C29
-->

<!-- CLAIM MAP
paragraph 1: C2, C1
paragraph 2: C3, C4, C2
paragraph 3: C2, C1, C14, C26 (argument)
paragraph 4: C8, C9, C31
paragraph 5: C5, C7, C6
paragraph 6: C10, C11
paragraph 7: C17, C18, C19, C34
paragraph 8: C17, C23, C24, C28
paragraph 9: C20, C29, C21, C35, C22
paragraph 10: C12, C13, C31
paragraph 11: C12, C13, C15
paragraph 12: C14 (review vs. removal is argument)
paragraph 13: C1 (ranked daily), C2, C14, C24 (argument)
paragraph 14: C7, C14, C10, C11 (Local Law 35 of 2022: dataset metadata; lawyer notice is argument)
paragraph 15: C26, C37, C30, C33 (deadline is argument)
-->
