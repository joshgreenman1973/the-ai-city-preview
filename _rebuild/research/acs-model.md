# acs-model dossier
Checked through: Oct. 19, 2026

Method notes: The Local Law 35 inventory was queried directly on Oct. 19, 2026 (`https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=1000`, 218 rows returned; 17 Administration for Children's Services rows across report years 2022-2025). PDFs were downloaded and read locally. AP stories could not be fetched from apnews.com (blocked), so verbatim quotes come from full AP republications (WHYY for April 2022, Spectrum News for January 2023). My web-search budget ran out partway through the date checks; the gaps are listed under "Could not confirm."

## Claims

C1. ACS reports the model in the Local Law 35 inventory as the "Accelerated Safety Analysis Protocol (ASAP) Tool," run by its Division of Policy, Planning, and Analysis, first used in May 2018, classified as "Performance evaluation," computation type "Ranking," autonomy "Informative," run daily, with no vendor.
- Source: Algorithmic Tools Compliance Report (Local Law 35), NYC Open Data, dataset jaw4-yuem, row year=2025 — https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=1000 (dataset page: https://data.cityofnewyork.us/City-Government/Algorithmic-Tools-Compliance-Report/jaw4-yuem)
- Quote (fields): "tool_name": "Accelerated Safety Analysis Protocol (ASAP) Tool", "department": "Division of Policy, Planning, and Analysis", "date_first_use": "2018/05", "purpose_type": "Performance evaluation", "computation_type": "Ranking", "autonomy": "Informative", "frequency": "Daily", "vendor_name": "None"
- Last checked for newer developments: queried live Oct. 19, 2026; 2025 is the latest report year in the dataset. The 2022 report called the same tool "Severe Harm Predictive model" (same 2018/05 first-use date).

C2. The Quality Assurance unit can review about 3,000 of about 50,000 investigations a year; the model picks which; ACS says it supports no decision beyond that selection.
- Source: same dataset, ACS 2025 row, field purpose_desc
- Quote: "The Quality Assurance (QA) unit in the Division of Child Protection at ACS has the capacity to review about 3,000 investigation cases out of about 50,000 investigations annually. ACS developed this predictive model to support the selection of cases for QA review." ... "The tool does not support decisions about services or interventions for individuals or families involved with ACS, beyond the selection of the case for this additional QA review."
- Last checked: Oct. 19, 2026 (live query).

C3. The model predicts substantiated allegations of physical or sexual abuse within 24 months, is calculated for every child in an active investigation around day 10, and assigns each investigation the score of its highest-scoring child.
- Source: same dataset, ACS 2025 row, field tool_desc
- Quote: "Predictions of Severe Harm (identifying likelihood of substantiated allegations of physical or sex abuse within the next 24 months) are based on a machine learning methodology and are calculated for all children involved in active investigations early in the investigation (day 10). An investigation is assigned a numeric likelihood of this outcome based on the child in the case with the highest likelihood."
- Last checked: Oct. 19, 2026.

C4. ACS says scores are not shared with Quality Assurance or investigative staff, and that the review follows up on gaps in documentation or practice.
- Source: same dataset, ACS 2025 row, purpose_desc
- Quote: "If the QA review team identifies gaps in routine, required documentation or practice, the team speaks with the field office conducting the investigation and follows up to make certain these gaps have been addressed. Scores are not shared with staff in the QA unit or the investigative unit."
- Last checked: Oct. 19, 2026.

C5. The 2025 entry says the model was retrained on about 815,284 observations (80 percent of historic data) from closed investigations 2012-2022, tested on 205,241, partly to address data drift, and now covers CARES (Collaborative Assessment, Response, Engagement & Support) cases.
- Source: same dataset, ACS 2025 row, fields data_training and updated_desc
- Quote: "ACS trained the model on ACS historic administrative data about closed investigations from 2012 to 2022. The training set included about 815,284 observations (80 percent of the historic data). The model was tested on closed investigations from January 2012 to November 2022 with 205,241 observations (20 percent)." / "Updated model predictions include CARES cases. ... The model was also retrained on new cases to tackle data drift resulting in part from policy changes and practices."
- Last checked: Oct. 19, 2026.

C6. Earlier inventory years described different training data for the same tool: the 2022 report, 119,668 observations (January 2013 to March 2014); the 2023 and 2024 reports, 142,026 observations (April 2014 to April 2016).
- Source: same dataset, ACS rows year=2022 (field data_2022), 2023 and 2024 (field data_training)
- Quote (2022): "ACS trained the model on ACS historic administrative data about closed investigations from January 2013 to March 2014. Training set included about 119,668 observations." Quote (2023 and 2024, identical): "ACS trained the model on ACS historic administrative data about closed investigations from April 2014 to April 2016. The training set included about 142,026 observations."
- Last checked: Oct. 19, 2026.

C7. ACS describes the inputs only as its own administrative data on prior and current child welfare involvement; it publishes no variable list.
- Source: same dataset, ACS 2025 row, data_input
- Quote: "Predictions are based on administrative data about prior and current child welfare involvement including investigations triggered by a New York State Central Register call and time spent in foster care. Only ACS administrative data are used in the model."
- Last checked: Oct. 19, 2026. No variable list appears in any ACS row.

C8. The Markup (Colin Lecher, May 20, 2025) reported, from documents it obtained, that the system uses 279 variables, based on 2013 and 2014 cases, including neighborhood, mother's age, number and ages of siblings and caretaker physical and mental health. NOTE: this is The Markup's figure from documents describing the model built on 2013-2014 cases; per C5 the model has since been retrained, and no source gives the current variable count.
- Source: "The NYC Algorithm Deciding Which Families Are Under Watch for Child Abuse," The Markup, May 20, 2025 — https://themarkup.org/investigations/2025/05/20/the-nyc-algorithm-deciding-which-families-are-under-watch-for-child-abuse
- Quote: "According to documents obtained by The Markup, the AI-powered system uses 279 variables to score families for risk, based on cases from 2013 and 2014 that ended in a child being severely harmed. ... The neighborhood that a family lives in contributes to their score, and so does the mother's age. The algorithm also factors in how many siblings a child under investigation has, as well as their ages. A caretaker's physical and mental health contributes to the score, too."
- Last checked: The Markup page fetched Oct. 19, 2026; no correction note on the page.

C9. The model does not use race explicitly but uses geographic variables a report calls partial proxies for race.
- Source: The Markup, May 20, 2025 (URL as C8)
- Quote: "The algorithm, according to a report obtained by The Markup, does not explicitly use race to score families, but uses "variables that may act as partial proxies for race (e.g., geography)" to make its decisions, including a family's county (or borough), zoning area, and community district."

C10. A flagged case can lead to an "action meeting" in which a senior specialist directs investigators to take further steps; ACS spokesperson Marisa Kaufman listed what those can include.
- Source: The Markup, May 20, 2025
- Quote: "If a family is flagged by the algorithm for quality assurance review, a senior specialist may hold an "action meeting" with investigators on a case, and direct them to take action they otherwise might have skipped. Kaufman, the spokesperson for ACS, said that direction can include "interviews with family members and collateral contacts; and, in some cases, service referrals, consults with Family Court Legal Services, and clinical experts.""

C11. ACS does not tell families, their attorneys or its caseworkers when a case is flagged.
- Source: The Markup, May 20, 2025
- Quote: "ACS tells neither families, their attorneys nor its caseworkers when the algorithm flags a case."

C12. ACS's internal audit found most high-risk predictions would be wrong because severe harm is rare, but that the model beat the criteria ACS used before (child under one, caretaker drug or alcohol abuse).
- Source: The Markup, May 20, 2025
- Quote: "Only a tiny number of cases lead to a child being severely harmed, meaning the algorithm's predictions about hundreds of cases "are more likely to be incorrect than correct," according to ACS' internal audit." / "The report still concluded that the system more accurately predicted which past cases ended in harm than criteria the agency had chosen in the past, like whether the child was under one year old or their caretaker had abused drugs and alcohol."

C13. The same internal audit warned about biased proxies and found the training data likely carried systemic bias.
- Source: The Markup, May 20, 2025
- Quote: ""Using poor or biased proxies can lead to the wrong resource allocations, cause harm to families, and perpetuate systemic biases and disproportionality," a technical audit of the system by the agency obtained by The Markup acknowledges. The internal audit found that the data used by ACS to train the algorithm likely included at least "some implicit and systemic biases" baked in"

C14. Kaufman said ACS audits check performance by race/ethnicity, that ACS has not studied the review's effect on case outcomes, and that such an experiment is not feasible.
- Source: The Markup, May 20, 2025
- Quote: "uses audits to "examine whether the model performance is similar for all race/ethnicity groups and whether the model is making similar predictions for children with similar historical backgrounds."" / "She said ACS hasn't studied what effect the additional review has on the outcome of a case, including whether a child is ultimately removed from a home. It's not feasible to design such an experiment, Kaufman said. She pointed out that, in general, only a small fraction of cases end with removal, and that decisions about interventions are decided by staff, and never directly by a machine."

C15. The Markup reported that Black families in New York City are reported to ACS at seven times the rate of white families.
- Source: The Markup, May 20, 2025 (the surrounding paragraphs attribute related figures to the ACLU and NYCLU)
- Quote: "In New York City, Black families are reported to ACS at seven times the rate of their white counterparts, and are 13 times more likely to have a child removed."
- Note: I did not fetch the underlying ACLU/NYCLU report; attribute to The Markup.

C16. The Electronic Frontier Foundation's June 9, 2025 post (Hannah Zhao) restates The Markup's findings and offers no original data; its racial-disparity point is an inference ("It is likely that the algorithm effectively automates and amplifies this discrimination").
- Source: "NYC Lets AI Gamble with Child Welfare," EFF, June 9, 2025 — https://www.eff.org/deeplinks/2025/06/nyc-lets-ai-gamble-child-welfare
- Quote: "It is likely that the algorithm effectively automates and amplifies this discrimination."
- Use: re-verification of the old essay only. The old essay's claims that EFF "documented" and "found" that the tool penalizes families for public assistance and public housing are not supported by the EFF post. Not used in the essay.

C17. Allegheny County launched the Allegheny Family Screening Tool in August 2016; it was built by an Auckland University of Technology team led by Rhema Vaithianathan with Emily Putnam-Hornstein; it got an ethical review before implementation; the county contracted Stanford for an impact evaluation; and in 2019 it published an eight-document package covering all of it.
- Source: "Developing Predictive Risk Models to Support Child Maltreatment Hotline Screening Decisions," Allegheny County Department of Human Services, updated April 2019 — https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-2.pdf
- Quote: "In August 2016, the Allegheny County Department of Human Services (DHS) implemented the Allegheny Family Screening Tool (AFST), a predictive risk modeling tool designed to improve child welfare call screening decisions." / "The process began in 2014 with a Request for Proposals and selection of a team from Auckland University of Technology led by Rhema Vaithianathan and including Emily Putnam-Hornstein from University of Southern California" / "Prior to implementation, the model was subjected to an ethical review by Tim Dare of the University of Auckland and Eileen Gambrill of the University of California-Berkeley." / "Awarded the contracts were Stanford University (impact evaluation) and Hornby Zeller Associates (process evaluation)." / "This publication includes eight documents"

C18. The Allegheny tool predicts the risk of foster placement within two years of investigation, uses child welfare, birth, Medicaid, substance abuse, mental health, jail and probation records, and scores 1 to 20; it applies to neglect referrals, not physical or sexual abuse.
- Source: "Child welfare algorithm faces Justice Department scrutiny," Sally Ho and Garance Burke, Associated Press, Jan. 31, 2023, as republished by Spectrum News — https://spectrumlocalnews.com/us/snplus/news/2023/01/31/justice-department-child-welfare-algorithm
- Quote: "The Allegheny Family Screening Tool was specifically designed to predict the risk that a child will be placed in foster care in the two years after the family is investigated. It has used a trove of detailed personal data collected from child welfare history, as well as birth, Medicaid, substance abuse, mental health, jail and probation records, among other government data sets. When the algorithm calculates a risk score of 1 to 20, the higher the number, the greater the risk." / "...decide which families should be investigated for neglect – a nuanced term that can include everything from inadequate housing to poor hygiene, but is a different category from physical or sexual abuse, which is investigated separately in Pennsylvania and is not subject to the algorithm."

C19. Erin Dalton, director of Allegheny's Department of Human Services, on the case for the tool.
- Source: "An algorithm that screens for child neglect raises concerns," Sally Ho and Garance Burke, AP, April 29, 2022, as republished by WHYY — https://whyy.org/articles/algorithm-screens-for-child-neglect-raises-concerns/
- Quote: ""Workers, whoever they are, shouldn't be asked to make, in a given year, 14, 15, 16,000 of these kinds of decisions with incredibly imperfect information," said Erin Dalton, director of the county's Department of Human Services"
- Last checked: title as of the April 2022 story; I did not confirm whether Dalton still holds the post (not stated in the essay as current).

C20. Carnegie Mellon-led study (Cheng, Stapleton et al., CHI 2022): from August 2016 to 2018, the tool alone would have screened in 71 percent of Black children and 51 percent of white children (a 20-point gap); workers' actual decisions screened in 61.7 percent of Black children and (computed from Table 1) 52.8 percent of white children, a gap of about 9 points. High-scoring referrals (18 and up) were labeled "mandatory screen-in."
- Source: Hao-Fei Cheng, Logan Stapleton et al., "How Child Welfare Workers Reduce Racial Disparities in Algorithmic Decisions," CHI '22 — https://doi.org/10.1145/3491102.3501831 (full text read from the NSF public-access copy: https://par.nsf.gov/servlets/purl/10374251)
- Quote: "Our data analysis shows that, compared to the algorithm alone, workers reduced the disparity in screen-in rate between Black and white children from 20% to 9%." / "Note that this 20% difference is in percentage points, i.e. 71% minus 51%." / "e.g. 48.6%+22.3%=71% for Black children,—whereas the sum of the leftmost and the right middle bars equals the actual worker-AFST screen-in rate—e.g. 48.6%+15.9%=61.7%." / Table 1: "AFST-only Worker-AFST Black white Black white Screen-in 18536 11013 16133 11420 ... Total 26123 21623 26123 21623" / "of the 15,182 children labeled mandatory screen-in (placement model score 18 or higher)"
- Threshold quote: "The AFST-only policy (with a threshold of 15) would have screened in all referrals in this table" (Table 4 caption); the paper treats scores 15-20 as "High risk" and the tool-alone screen-in recommendation.
- Computation: 18,536/26,123 = 70.96%; 11,013/21,623 = 50.93%; 16,133/26,123 = 61.76%; 11,420/21,623 = 52.81%.
- Scope: general protective services (neglect) referrals; analysis period August 2016 to May 2018 per the paper's tables.

C21. The same study found the tool alone was 4.5 percent more accurate than workers at predicting the outcomes it was trained on, while noting those outcomes are contested.
- Source: same as C20
- Quote: "that the AFST-only was 4.5% more accurate than workers at predicting the outcomes that the AFST was trained to predict. However, prior work suggests that these outcomes are biased and contested"

C22. AP reported the Carnegie Mellon findings in April 2022, including that workers disagreed with the score about a third of the time; county officials called the research "hypothetical."
- Source: AP via WHYY, April 29, 2022 (URL as C19)
- Quote: "The independent researchers, who received data from the county, also found that social workers disagreed with the risk scores the algorithm produced about one-third of the time." / "County officials said that social workers can always override the tool, and called the research "hypothetical.""

C23. Stanford's 2019 impact evaluation (Goldhaber-Fiebert and Prince) found the tool increased accuracy for screened-in children and may have slightly decreased it for screened-out children.
- Source: "Impact Evaluation of a Predictive Risk Modeling Tool for Allegheny County's Child Welfare Office," Jeremy D. Goldhaber-Fiebert and Lea Prince, Stanford University, March 20, 2019 — https://analytics.alleghenycounty.us/wp-content/uploads/2019/05/Impact-Evaluation-from-16-ACDHS-26_PredictiveRisk_Package_050119_FINAL-6.pdf
- Quote: "Accuracy: Implementation of the AFST and associated policies increased accuracy for children screened-in for investigation and may have slightly decreased accuracy for children screened-out."

C24. The county's September 2023 summary of the Stanford Phase 2 evaluation reports the tool eliminated 32 percent of the Black-white gap in neglect investigations and cites a randomized trial of a similar tool in a Colorado county (Mills et al., 2023).
- Source: "Summary: Impact Evaluation of the Allegheny Family Screening Tool [Phase 2]," Allegheny County DHS, September 2023 (posted May 2024) — https://analytics.alleghenycounty.us/wp-content/uploads/2024/05/23-ACDHS-19_FamilyScreeningToolUpdate_Summary.pdf
- Quote: "Goldhaber-Fiebert et al., 2023 (Allegheny County, PA) Investigation (GPS) 32% of gap eliminated" / "Mills et al., (2023) who conducted a randomized control trial of a predictive risk model similarly implemented at call screening in a Colorado county."
- Note: this is the county's own summary of evaluations it commissioned; attribute to the county. I did not read the Mills paper.

C25. AP reported Jan. 31, 2023, that Justice Department civil rights attorneys were scrutinizing the Allegheny tool over possible discrimination against families with disabilities; the county said it had not heard from the department, and the scope was unknown.
- Source: AP via Spectrum News, Jan. 31, 2023 (URL as C18)
- Quote: "The Justice Department has been scrutinizing a controversial artificial intelligence tool used by a Pittsburgh-area child protective services agency following concerns that it could result in discrimination against families with disabilities, The Associated Press has learned." / "though the full scope of the Justice Department's interest is unknown." / "Mark Bertolet, spokesman for the Allegheny County Department of Human Services, said by email that the agency had not heard from the Justice Department"
- Last checked for newer developments: one search (Oct. 19, 2026) for 2025-2026 updates returned only January 2023 coverage. No public outcome found.

C26. A 2025 Council law required an Office of Algorithmic Accountability by June 2026; the budget funds six employees at $1.4 million; as of July 20, 2026, City & State found no sign it existed.
- Source: "Mamdani's government has started to embrace AI. Will he?" Annie McDonough, City & State, July 20, 2026 — https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/
- Quote: "the city is overdue to comply with a City Council law passed last year requiring the creation of a new Office of Algorithmic Accountability, tasked with analyzing algorithmic tools used by city agencies, evaluating their risks and setting up a process for public complaints and corrective action." / "Per the law itself and OTI testimony to the City Council in March, the new office was supposed to be created by June. The city's recently passed budget includes $1.4 million for six new employees for the office. But there's no sign the office exists yet."
- Last checked: fetched Oct. 19, 2026. I could not run a further search for August-October 2026 news on the office (search budget exhausted). The essay states the July finding with its date.

C27. ACS first used the tool in 2018, and its internal Office of Research Analytics built it.
- Source: The Markup, May 20, 2025
- Quote: "The tool, first launched in 2018, was developed by an internal data team at the agency, the Office of Research Analytics."

## Could not confirm
- The current variable count. "279 variables" is The Markup's figure from documents describing the model trained on 2013-2014 cases. ACS's 2025 entry says the model was retrained on 2012-2022 data; no source gives the retrained model's variable list or count. The essay attributes 279 to The Markup and to the earlier version.
- Which training window describes the 2018 production model. The Markup says 2013 and 2014 cases; ACS's 2022 inventory row says January 2013-March 2014; the 2023 and 2024 rows say April 2014-April 2016. The essay reports the discrepancy and does not resolve it.
- Results of ACS's race/ethnicity performance audits (Kaufman says they exist; none are public).
- Any Markup or other follow-up on the ACS model after May 2025, and any ACS public statement after it. One search found nothing newer; my search budget ran out before I could check the Council bill's status or later ACS testimony.
- Outcome of the Justice Department inquiry into Allegheny (none found).
- The ACLU/NYCLU source report for the "seven times" figure (attributed to The Markup only).
- Old essay claims that failed or were not checked: EFF "documented" and "found" that the tool penalizes public-benefit and public-housing families (EFF has no original analysis; C16); the old essay's list of inputs ("criminal justice records, public benefits enrollment, housing status") is not supported by ACS's entry, which says only ACS data are used (C7); "roughly twice the rate" Allegheny figure from an ABA page and the "Department of Justice investigation ... flagged concerns about disparate impact" (the AP reported scrutiny over disability discrimination, with no findings; C25). Oregon claims not checked (out of scope).
- Douglas County, Colo., randomized trial details (cited only via Allegheny's summary).

## Notes for other essays
- the-inventory: ACS's own LL35 rows show the training data description for the same tool changing from year to year (119,668 obs in 2022 report; 142,026 in 2023-2024; 815,284 in 2025), with no explanation in the 2023-2024 rows of the change. ACS also classifies the tool's purpose as "Performance evaluation." Good example of how thin and inconsistent entries are. Also ACS's other entries (Housing Prioritization, Prevention Score Card, Service Utilization Model 2025/01, Family Team Conference Model 2025/02) may interest that writer.
- the-inventory / governance: City & State July 20, 2026 on the overdue Office of Algorithmic Accountability (C26).
- risk-scores: Albright's finding (cited in the CMU paper) that judge-plus-algorithm bail decisions were more racially disparate than either alone, the reverse of the Allegheny worker result.
- AP April 2022 (WHYY): Los Angeles County "complex-risk algorithm" pilot in Lancaster: Black children were nearly half of flagged investigations vs 22% of child population; Oregon dropped its screening tool; California abandoned a predictive tool in 2019. Not used here.

## Claims added by fact-checker (Oct. 19, 2026)

C28. In the county's September 2023 summary, the 32 percent reduction in the Black-white gap in GPS (neglect) investigations is attributed to "the implementation of the AFST and surrounding policy and practice changes," and is not starred as statistically significant; the independent Rittenhouse et al. (2023) estimate for investigations (46 percent, starred) is.
- Source: https://analytics.alleghenycounty.us/wp-content/uploads/2024/05/23-ACDHS-19_FamilyScreeningToolUpdate_Summary.pdf
- Quote: "Goldhaber-Fiebert et al., 2023 (Allegheny County, PA) Investigation (GPS) 32% of gap eliminated Case Opened (GPS)* 92% of gap eliminated" / "Rittenhouse et al., 2023 (Allegheny County, PA) Investigation (GPS)* 46% of the gap eliminated" / "Notes: * implies the reduction was statistically significant with a p-value ≤ 0.05." / "Racial differences in outcomes were reduced with the implementation of the AFST and surrounding policy and practice changes"

C29. The CHI 2022 paper's "tool alone" figures rest on a hypothetical policy the researchers defined (screen in scores 15-20), which they note has the second-highest disparity of any threshold from 10 to 20; they found workers less disparate at every threshold.
- Source: https://par.nsf.gov/servlets/purl/10374251
- Quote: "For clarity, we suppose that the AFST would screen in any High risk referrals (with a score of 15 to 20) and screen out any Medium and Low risk referrals (scores 1 to 14)." / "We found that worker-AFST decisions were less disparate than AFST-only decisions, regard- less of which threshold was chosen. It should be noted that the threshold of 15 that we default to throughout the paper has the second-to-highest disparity of any threshold from score 10 to 20"

C30. The Office of Algorithmic Accountability law is Local Law 188 of 2025 (Int. 199-2024), passed by the Council Nov. 25, 2025, enacted Dec. 25, 2025, returned unsigned by the mayor Dec. 26, 2025. Searches on Oct. 19, 2026 found no report that the office has since been set up.
- Source: NYC Council Legistar — https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=6557537&GUID=14A351D1-8AED-448E-A8C0-355A39CB02BE
- Quote (record fields): "Establishing an office of algorithmic accountability" / Status "Enacted" / "Local Law 2025/188" / "Returned Unsigned by Mayor" (12/26/2025)

C31. The Markup obtained ACS's internal technical audit through a public records request.
- Source: The Markup, May 20, 2025 (URL as C8)
- Quote: "In response to a public records request, The Markup received the agency's internal technical audit of the algorithm, which reveals how ACS caseworkers use the algorithm and the potential biases built into it."

C32. The Markup reported, from agency documents, that ACS can prioritize 200 or 300 cases a month for review (consistent with ~3,000 a year in C2).
- Source: The Markup, May 20, 2025
- Quote: "The agency documents note that ACS can prioritize only a fraction of those cases – 200 or 300 a month – for review, a process the agency calls "quality assurance.""

Currency checks run Oct. 19, 2026: searches for 2025-2026 news on the ACS model found no Markup follow-up, Council hearing or ACS statement after May 2025; a January 2026 SSWR abstract and a CUNY dissertation (Ashleigh Washington) study ACS predictive models but report no results for the severe-harm/QA model. The LL35 dataset (rows updated April 10, 2026) still has 2025 as its latest year. No public outcome of the Justice Department inquiry into Allegheny was found. Allegheny County's AFST page (2026 footer) describes the tool in the present tense.

C33. (Added by issue editor, Oct. 20, 2026.) OTI testified to the Council on Oct. 5, 2026 that the Office of Algorithmic Accountability "has been formally established and six new positions have been created in the FY27 Adopted Budget to staff it up. The hiring process for those roles is actively underway."
- Source: OTI testimony, Oct. 5, 2026 — https://www.nyc.gov/assets/dca/downloads/pdf/media/Advocacy-Testimony-Intros-161-T20262602-T20262601-T20262606-T20262605-T20262599-T20262603-504-T20262600.pdf (page 1; verified by text search of the PDF)
- No director named as of Oct. 19 (the-inventory checker; preemption checker).

C34. (Issue editor, Oct. 20, 2026.) Erin Dalton became NYC Commissioner of the Department of Social Services in February 2026.
- Source: Allegheny County, "DHS Director Erin Dalton Named NYC Social Services Commissioner," Feb. 25, 2026 — https://www.alleghenycounty.us/News-Articles/Allegheny-County-Press-Releases/February-2026-PR/2-25-2026-Allegheny-County-Director-of-Human-Services-Erin-Dalton-Named-New-York-City-Commissioner-of-Department-of-Social-Services
- Quote: "Director Erin Dalton is moving on to serve as Commissioner of the Department of Social Services for New York City." / "After 18 years of service at the Allegheny County Department of Human Services" (fetched Oct. 20, 2026).

## Claims added in the second-round fix (Oct. 20, 2026)

C35. In the CHI 2022 paper, "4.5% more accurate" is a difference in percentage points: the tool alone would have been accurate 51.0% of the time vs. 46.5% for workers' actual decisions (August 2016 to July 2018).
- Source: https://par.nsf.gov/servlets/purl/10374251 (fetched Oct. 20, 2026)
- Quote: "the AFST-only screening policy would have been more accurate than the actual screening decisions made by workers from August 2016 to July 2018 (51.0% vs 46.5%)." / "a more precise interpretation of the results in Figure 5 is that the AFST-only was 4.5% more accurate than workers at predicting the outcomes that the AFST was trained to predict. However, prior work suggests that these outcomes are biased and contested"
- Note: 4.5 points on a base of 46.5 is about 10% in relative terms. The essay now says "somewhat more accurate" and gives no figure.

C36. The Markup prints Kaufman's list of review steps as one continuous quotation (re-verification for the outside review).
- Source: The Markup, May 20, 2025 (URL as C8; fetched Oct. 20, 2026)
- Quote: "Kaufman, the spokesperson for ACS, said that direction can include "interviews with family members and collateral contacts; and, in some cases, service referrals, consults with Family Court Legal Services, and clinical experts.""

C37. The Office of Algorithmic Accountability's duties as City & State describes them (supports "analyze agencies' tools, weigh their risks and set up a process for complaints and corrective action").
- Source: City & State, July 20, 2026 (URL as C26)
- Quote: "tasked with analyzing algorithmic tools used by city agencies, evaluating their risks and setting up a process for public complaints and corrective action."

C33 re-verified Oct. 20, 2026: OTI testimony PDF fetched; page 1 reads "the Office of Algorithmic Accountability (OAA) has been formally established and six new positions have been created in the FY27 Adopted Budget to staff it up. The hiring process for those roles is actively underway." The testimony names no director; the essay's "No director had been named as of Oct. 19" was not independently verified here and has been cut.

C5 paraphrase note: the essay's "changes in policy and practice had made the old data a poor match for current cases" paraphrases "retrained on new cases to tackle data drift resulting in part from policy changes and practices."
