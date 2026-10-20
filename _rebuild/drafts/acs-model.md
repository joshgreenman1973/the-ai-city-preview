---
slug: acs-model
title: New York's Child Welfare Algorithm Should Show Its Work
dek: Since 2018 a model has picked which child abuse investigations get a second look. The City has never shown whether those reviews help children or which families they land on.
section: The Peril
category: Child Welfare
skyline_stat: "About 3,000 of roughly 50,000 child welfare investigations a year are picked for extra review by a predictive model"
skyline_value: 3000
skyline_claim: C2
---

Every year New York City's Administration for Children's Services (ACS) opens about 50,000 child abuse and neglect investigations. Its Quality Assurance unit has room to take a second look at about 3,000 of them. Since May 2018, a machine-learning model has decided which ones, [according to the agency's own entry](https://data.cityofnewyork.us/City-Government/Algorithmic-Tools-Compliance-Report/jaw4-yuem) in the City's inventory of algorithmic tools.

Around the 10th day of an investigation, according to ACS, the model estimates for each child the likelihood of a substantiated allegation of physical or sexual abuse within the next 24 months. The investigation takes the score of its highest-scoring child, and the reviewers work from the top of the list. ACS says neither the reviewers nor the investigators see the scores, and that the tool decides nothing beyond which cases get reviewed.

As uses of prediction in child welfare go, this is one of the easier ones to defend. Every family the model ranks already has an open case, and a specialist's time has to be spent somewhere. But in more than eight years ACS has not told the public the two things that would justify the model: whether the reviews it triggers leave children safer, and whether its picks fall more heavily on Black families. It should publish both.

Most of what the public knows came from [The Markup's May 2025 investigation](https://themarkup.org/investigations/2025/05/20/the-nyc-algorithm-deciding-which-families-are-under-watch-for-child-abuse) by Colin Lecher. Working from agency documents it obtained, The Markup reported that the system used 279 variables and was built from cases in 2013 and 2014 in which a child was severely harmed. The family's neighborhood counts, as do the mother's age, the number and ages of siblings and a caretaker's physical and mental health. The model does not use race directly, but a report The Markup obtained said it uses "variables that may act as partial proxies for race (e.g., geography)," including borough, zoning area and community district.

Those details describe the model in the records The Markup saw. ACS's 2025 inventory entry says the model has since been retrained on about 815,000 observations from investigations closed from 2012 through 2022, partly to correct for "data drift." The entry describes the inputs only as ACS administrative data about "prior and current child welfare involvement." No current variable list is public. The agency's descriptions of earlier training data have shifted, too: its 2022 report cited about 120,000 observations from 2013 and 2014, and its 2023 and 2024 reports cited about 142,000 from 2014 to 2016.

A second review is less than a new investigation, but it can change what happens to a family. When a case is flagged, The Markup found, a senior specialist may hold an "action meeting" and direct investigators to take steps they might have skipped. An ACS spokesperson, Marisa Kaufman, told The Markup those steps can include "interviews with family members and collateral contacts; and, in some cases, service referrals, consults with Family Court Legal Services, and clinical experts." ACS tells neither the family, its lawyer nor the caseworker that the model flagged the case.

Allegheny County, Pennsylvania, which includes Pittsburgh, uses its algorithm earlier, where more is at stake. The Allegheny Family Screening Tool, launched in August 2016, scores calls to the county's hotline about neglect on a scale of 1 to 20, [predicting the chance](https://spectrumlocalnews.com/us/snplus/news/2023/01/31/justice-department-child-welfare-algorithm) that a child will be placed in foster care within two years. It draws on birth, Medicaid, substance abuse, mental health, jail and probation records. It helps decide whether a family is investigated at all, and the highest scores were labeled "mandatory" screen-ins. Erin Dalton, then director of the county's Department of Human Services, [told The Associated Press](https://whyy.org/articles/algorithm-screens-for-child-neglect-raises-concerns/) in 2022 that workers "shouldn't be asked to make, in a given year, 14, 15, 16,000 of these kinds of decisions with incredibly imperfect information." In February 2026 Dalton became New York City's commissioner of social services, [Allegheny County announced](https://www.alleghenycounty.us/News-Articles/Allegheny-County-Press-Releases/February-2026-PR/2-25-2026-Allegheny-County-Director-of-Human-Services-Erin-Dalton-Named-New-York-City-Commissioner-of-Department-of-Social-Services).

Allegheny has published far more about its tool than ACS has about its own. In 2019 the county released [an eight-document package](https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-2.pdf): the methodology from a team led by Rhema Vaithianathan of Auckland University of Technology, an ethical review done before launch and an impact evaluation by Stanford University researchers Jeremy Goldhaber-Fiebert and Lea Prince. The Stanford team [found](https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/Impact-Evaluation-from-16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-6.pdf) that the tool made screen-in decisions more accurate and may have made screen-out decisions slightly less accurate. A 2023 follow-up, as [summarized by the county](https://analytics.alleghenycounty.us/wp-content/uploads/2024/05/23-ACDHS-19_FamilyScreeningToolUpdate_Summary.pdf), credited the tool and the policy changes around it with eliminating 32% of the initial Black-white gap in neglect investigations, an estimate the summary does not mark as statistically significant. An independent study the summary also cites found a statistically significant 46% reduction.

The county also gave its data to outside researchers. A team led by Carnegie Mellon University researchers [reported in 2022](https://doi.org/10.1145/3491102.3501831) on what would have happened from 2016 to 2018 if every referral the tool scored 15 or higher had gone to investigation. The researchers chose that cutoff; of the cutoffs from 10 to 20 they tried, it produced the second-largest racial gap. At that line the tool alone would have screened in 71% of Black children and 51% of white children. Workers, who could overrule the score, screened in about 62% of Black children and 53% of white children. The gap fell from 20 points to 9, and the workers' decisions were less unequal than the tool's at every cutoff the team tested. The same paper found that the tool alone was 4.5% more accurate than the workers at predicting the outcomes it was trained on, though the authors note those outcomes are contested. When the AP reported the findings, county officials called the research "hypothetical." In January 2023 the AP reported that Justice Department civil rights lawyers were scrutinizing the tool over concerns that it could discriminate against families with disabilities; no outcome has been made public.

Defenders and critics of Allegheny's tool argue over the same published tables. New Yorkers have a few paragraphs in an inventory and an internal audit that surfaced through The Markup's records request.

ACS has arguments on its side. Its tool does less than Allegheny's and never decides whether a family is investigated. Some method of choosing cases for review has to be used, and the internal audit found the model predicted which past cases ended in harm better than criteria the agency had chosen in the past, such as whether a child was under a year old or a caretaker had abused drugs or alcohol. Because severe harm is rare, the audit said the model's predictions "are more likely to be incorrect than correct." Still, a mistaken second review asks far less of a family than a mistaken removal. Kaufman told The Markup that the agency's audits check whether the model performs similarly across racial and ethnic groups, that an experiment on the review's effects is not feasible and that staff, never directly a machine, decide on interventions.

Those are reasons a model might be worth having. The audit also gave reasons for caution. It warned that using "poor or biased proxies can lead to the wrong resource allocations, cause harm to families, and perpetuate systemic biases and disproportionality," and found the training data likely carried "some implicit and systemic biases." Any such bias matters most for Black families: The Markup reported that in New York City they are reported to ACS at seven times the rate of white families.

ACS could study the reviews without designing a new experiment. Quality Assurance takes cases from the top of a ranked list until it runs out of room. Investigations ranked just above that line and just below it should involve similar families, and only the first group gets the review. Comparing what happens to the two groups afterward (new reports and removals, for instance) is a standard method in program evaluation. The list is ranked daily, so the line likely moves from day to day, and the analysis would have to account for that. A randomized test is possible too: Allegheny's summary cites a randomized trial of a similar screening tool in a Colorado county.

ACS could start in its next filing under Local Law 35 of 2022, the City's algorithm disclosure law. In that filing, or in a report alongside it, ACS should publish the current variable list; the racial and borough breakdown of cases picked for review, set against all investigations; and the outcomes of cases just above and below the review cutoff, by race. ACS says it already audits the model's performance by race, so it computes some figures by race now.

The Council has given the City a place to send them. A 2025 law requires an Office of Algorithmic Accountability, which was due by June. In July, [City & State found](https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/) no sign it existed. On Oct. 5, the City's technology office [told the Council](https://www.nyc.gov/assets/dca/downloads/pdf/media/Advocacy-Testimony-Intros-161-T20262602-T20262601-T20262606-T20262605-T20262599-T20262603-504-T20262600.pdf) that the office "has been formally established," with six positions in the budget and hiring underway. No director had been named as of Oct. 19. This model would make a good first case for it.

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
paragraph 3: C2, C1, C14 (argument)
paragraph 4: C8, C9, C31
paragraph 5: C5, C7, C6
paragraph 6: C10, C11
paragraph 7: C17, C18, C20 (mandatory screen-in), C19
paragraph 8: C17, C23, C24, C28
paragraph 9: C20, C29, C21, C22, C25
paragraph 10: C12, C13, C31 (audit obtained by The Markup)
paragraph 11: C2, C12, C14 (argument on review vs. removal)
paragraph 12: C13, C15
paragraph 13: C1 (ranked daily), C2, C14, C24 (argument)
paragraph 14: C7, C14 (Local Law 35 of 2022: dataset metadata, check report confirmed list)
paragraph 15: C26, C30
-->
