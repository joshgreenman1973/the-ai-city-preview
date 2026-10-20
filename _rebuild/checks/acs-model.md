# acs-model fact-check
Checked: Oct. 19, 2026. Statements checked: 68.

Sources were read directly: the live LL35 dataset (jaw4-yuem, all four ACS rows for this tool), the full Markup article, the AP stories as republished by WHYY and Spectrum, the 2019 Allegheny package, the Stanford evaluation, the county's 2023 summary, the CHI 2022 paper (NSF copy), City & State (July 20, 2026) and the Council's Legistar record. Copies are in `_rebuild/checks/pdfs/acs-model/`.

## Errors found and fixed
- "retrained on about 815,000 closed investigations from 2012 through 2022" → "retrained on about 815,000 observations from investigations closed from 2012 through 2022". Why: ACS counts "observations" (probably child-level records), not investigations: "The training set included about 815,284 observations (80 percent of the historic data)." https://data.cityofnewyork.us/resource/jaw4-yuem.json
- "A 2023 follow-up ... credited the tool with eliminating 32 percent of the initial Black-white gap in neglect investigations." → "credited the tool and the policy changes around it with eliminating 32 percent ..., an estimate the summary does not mark as statistically significant." Why: the summary credits "the AFST and surrounding policy and practice changes." In its table, the 32 percent figure for investigations is the only Goldhaber-Fiebert result without the asterisk for p ≤ 0.05. https://analytics.alleghenycounty.us/wp-content/uploads/2024/05/23-ACDHS-19_FamilyScreeningToolUpdate_Summary.pdf
- "Justice Department civil rights lawyers were examining whether the tool discriminated against parents with disabilities" → "were scrutinizing the tool over concerns that it could discriminate against families with disabilities". Why: the AP says "scrutinizing ... following concerns that it could result in discrimination against families with disabilities" and says the scope is unknown. The old wording suggested a defined inquiry into whether discrimination had happened. https://spectrumlocalnews.com/us/snplus/news/2023/01/31/justice-department-child-welfare-algorithm
- "A 2025 law created an Office of Algorithmic Accountability" → "A 2025 law requires an Office of Algorithmic Accountability". Why: the law (Local Law 188 of 2025) orders the office to be set up, and City & State reports "there's no sign the office exists yet." Saying the law "created" it contradicts the next sentence. https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/ ; https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=6557537&GUID=14A351D1-8AED-448E-A8C0-355A39CB02BE
- "ACS already says it audits performance by race, so the race figures exist." → "so it already computes some figures by race." Why: Kaufman described audits of whether "model performance is similar for all race/ethnicity groups." That does not show ACS has the racial breakdown of the cases it picks, or of their outcomes, which are what the essay asks for. https://themarkup.org/investigations/2025/05/20/the-nyc-algorithm-deciding-which-families-are-under-watch-for-child-abuse

## Unverifiable, cut or softened
- Nothing cut. The essay has no statement about the ACS model after May 2025 that needed a source. Currency searches on Oct. 19, 2026 found no Markup follow-up, no Council hearing and no ACS statement on the model since then. The LL35 dataset (rows last updated April 10, 2026) still ends at report year 2025. The only newer items are a January 2026 SSWR abstract and a CUNY dissertation, both by Ashleigh Washington. They study ACS predictive models through interviews and documents and report no results for the severe-harm/QA model. "More than eight years" and "has never shown the public" therefore still hold as of today, as far as searches can show.
- No public outcome of the Justice Department's scrutiny of Allegheny was found, so "no outcome has been made public" stands.

## Better statistic available
- The county's 2023 summary also cites an independent Allegheny study (Rittenhouse et al., 2023) that found a statistically significant 46 percent reduction in the investigation gap. If the editor wants a figure for the county's case that holds up statistically, that one is stronger than the 32 percent. (Same URL as above.)
- The Markup's "200 or 300 a month" (from agency documents) independently supports ACS's "about 3,000" a year.

## Confirmed
- About 50,000 investigations a year; QA capacity of about 3,000; model picks which: LL35 2025 row, purpose_desc — https://data.cityofnewyork.us/resource/jaw4-yuem.json
- First use May 2018 ("2018/05" in every year's row): LL35
- Inventory link (dataset page jaw4-yuem) supports the paragraph: https://data.cityofnewyork.us/City-Government/Algorithmic-Tools-Compliance-Report/jaw4-yuem
- Scores around day 10, outcome is substantiated physical or sex abuse within 24 months, the case takes its highest-scoring child's score: LL35 tool_desc
- Scores not shared with QA or investigators; the tool supports no decision beyond selection: LL35 purpose_desc
- Classified "Performance evaluation" (2024 and 2025 rows): LL35
- 2025 retraining on 2012-2022 data, "data drift"; inputs are ACS data on "prior and current child welfare involvement"; no variable list: LL35 2025 row
- 2022 row: 119,668 observations, Jan. 2013-Mar. 2014; 2023 and 2024 rows: 142,026, Apr. 2014-Apr. 2016: LL35
- Markup article: Colin Lecher, May 20, 2025, no correction note: Markup URL above
- 279 variables, 2013-2014 severe-harm cases, neighborhood, mother's age, siblings' number and ages, caretaker health: Markup
- Race not used directly; "variables that may act as partial proxies for race (e.g., geography)"; borough, zoning area, community district: Markup
- Action meeting; Kaufman quote ("interviews with family members and collateral contacts; and, in some cases, ..."), verbatim: Markup
- ACS tells neither families, attorneys nor caseworkers: Markup
- Marisa Kaufman, ACS spokesperson: Markup
- Audit beat earlier criteria (child under one, caretaker drug/alcohol abuse); "are more likely to be incorrect than correct": Markup
- Kaufman: audits by race/ethnicity, experiment not feasible, staff decide interventions: Markup
- Audit quotes "Using poor or biased proxies ... disproportionality" and "some implicit and systemic biases", verbatim: Markup
- Audit obtained by public records request: Markup
- Black families reported at seven times the rate of white families (The Markup gives no source for this figure): Markup
- AFST since August 2016; neglect referrals; scores 1-20; foster placement within two years; data sources; "mandatory" label: https://spectrumlocalnews.com/us/snplus/news/2023/01/31/justice-department-child-welfare-algorithm ; https://whyy.org/articles/algorithm-screens-for-child-neglect-raises-concerns/
- AFST still described in the present tense on the county's page (2026 footer): https://www.alleghenycounty.us/Services/Human-Services-DHS/DHS-News-and-Events/Accomplishments-and-Innovations/Allegheny-Family-Screening-Tool
- Dalton quote and title (April 2022), verbatim: WHYY/AP
- County officials called the CMU research "hypothetical": WHYY/AP
- Eight-document 2019 package; Vaithianathan/AUT; ethical review before implementation; Stanford's Goldhaber-Fiebert and Prince: https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-2.pdf
- Stanford: screen-in accuracy increased, screen-out "may have slightly decreased": https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/Impact-Evaluation-from-16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-6.pdf
- Colorado county randomized trial (Mills et al., 2023) cited in the county summary: summary PDF
- CMU-led team (CHI 2022): 71/51 to about 62/53, gap from 20 to 9 points; 4.5 percent more accurate, outcomes "biased and contested": https://doi.org/10.1145/3491102.3501831 (text from https://par.nsf.gov/servlets/purl/10374251)
- Chart data recomputed from Table 1: 70.96, 50.93, 61.76, 52.81 percent. Labels and source line are correct.
- Local Law 35 of 2022 is the algorithmic tools reporting law: dataset metadata
- Office due by June; $1.4 million for six staff; as of July 20, 2026 "no sign the office exists": City & State
- The office law is Local Law 188 of 2025, enacted Dec. 25, 2025 (returned unsigned): Legistar
- Office not set up as of Oct. 19, 2026: two searches found no report of a launch or a director

## Judgment calls for the editor
- The CMU "tool alone" figures (71 vs. 51) describe a hypothetical policy the researchers chose: screen in every score of 15 or higher. The authors note this cutoff "has the second-to-highest disparity of any threshold from score 10 to 20." They also found workers less disparate at every cutoff, so the essay's conclusion holds. "Would have" signals the hypothetical. A fussier version would add "at the cutoff the researchers chose." I left the sentence alone.
- "The alternative to a model was a cruder rule" is presented as ACS's case. The Markup supports only that the audit compared the model with "criteria the agency had chosen in the past." It doesn't say ACS used those criteria to pick QA cases before 2018. This is a fair reading, but it is an inference.
- "A mistaken second review costs a family far less than a mistaken removal" and the paragraph on the built-in experiment (comparing cases just above and below the review cutoff) are the writer's argument, not sourced facts. They are reasonable, but the cutoff comparison assumes a fairly sharp capacity line. ACS describes picking about 3,000 a year from a daily ranked list, and the real cutoff may move from day to day.
- "Most of what the public knows came from The Markup" is a characterization, but the record supports it: the only other public source is the LL35 entry.
- Only The Markup supports the "seven times" figure, and it names no source for it. The surrounding figures come from NYCLU/ACLU. The essay correctly attributes it to The Markup.
- "In use since August 2016": the county's page describes the tool in the present tense, but no 2025-2026 news independently confirms it is still running.
