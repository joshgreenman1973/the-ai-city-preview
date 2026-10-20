# risk-scores dossier
Checked through: Oct. 19, 2026

Note on method: PDFs were downloaded and converted to text locally; quotes below are copied from that text (line breaks joined). Web pages were fetched with curl and stripped of HTML, or with WebFetch where noted. The session's shared web-search budget ran out partway through research, so a few leads could not be chased (see "Could not confirm").

## Claims

C1. Chicago's Inspector General reviewed the Chicago Police Department's (CPD) "party to violence" risk models, the Strategic Subject List (SSL) and its successor, which were built with $3.8 million in federal grants and decommissioned Nov. 1, 2019.
- Source: Advisory Concerning the Chicago Police Department's Predictive Risk Models, City of Chicago Office of Inspector General, Jan. 23, 2020 — https://igchicago.org/wp-content/uploads/2020/01/OIG-Advisory-Concerning-CPDs-Predictive-Risk-Models-.pdf
- Quote: "The Chicago Police Department began using a series of risk models to predict PTV individuals in 2012." ; "CPD received $3.8 million in federal grants to develop these models, which were designed to predict the likelihood an individual would become a "party to violence" (PTV), i.e. the victim or offender in a shooting. ... In August 2019, CPD informed OIG that it intended to decommission its PTV risk model program and did so on November 1, 2019"
- Last checked for newer developments: OIG page and advisory are the latest primary record; nothing found (search budget limited) indicating revival of SSL. CPD told OIG it "may develop programs in the future" (same advisory).

C2. Every person arrested at least once in the four years before a calculation got a score, regardless of a history of violence; 398,684 people had a score in SSL Version 5 (399,412 had an SSL score as of July 2018).
- Source: same as C1
- Quote: "Every individual arrested at least once within a four-year time period prior to IIT's calculation— regardless of whether they had a history of violence—received a risk score or risk tier. As of July 2018, 399,412 individuals had an SSL risk score" and "of the 398,684 individuals who had an SSL score in Version 5 of the model, 16.3% (or 64,947) were identified as confirmed gang members."
- Last checked: same as C1.

C3. The scores were shared outside CPD (Cook County Sheriff's Office, Cook County State's Attorney's Office, Mayor's Office briefings), all sworn personnel could see them, and from March 2015 CPD wrote SSL scores into arrest reports.
- Source: same as C1
- Quote: "CPD allowed all sworn personnel to access risk scores or tiers via its internal dashboards, regardless of whether their duties were related to any of the uses outlined in various directives" ; "Risk scores and tiers were shared with the following external entities: 1. Cook County Sheriff's Office (CCSO) ... 2. The Mayor's Office ... 3. The Cook County State's Attorney's Office (CCSAO): CPD sometimes sent records to CCSAO which included defendants' risk scores or tiers." ; "beginning in March 2015, CPD began referring to SSL risk scores in the narrative sections of arrest reports"
- Last checked: same as C1.

C4. The OIG found the scores unreliable (SSL not updated from August 2016 until January 2019) and that people who received a notification could face harsher charging on later arrests even without a conviction.
- Source: same as C1
- Quote: "Until CVRM was launched on January 9, 2019, SSL scores had not been updated since August 2016, resulting in scores which were static for nearly two and a half years." ; "individuals who received a custom notification as a result of a PTV risk score or tier, regardless of whether they were convicted, may have been subject to harsher charging decisions on subsequent arrests."
- Last checked: same as C1.

C5. RAND evaluated only Version 1; by the time the report was published, CPD was already using Version 5, and no one evaluated Versions 2 through 5.
- Source: same as C1
- Quote: "Neither CPD nor RAND (which was periodically tasked with evaluating CPD's PTV risk models) evaluated Versions 2 through 5 of the models." ; "RAND had evaluated Version 1 of CPD's PTV risk model; however, upon publication of the report, CPD announced that it was already using Version 5."
- Last checked: same as C1. (RAND's own findings could not be quoted; see Could not confirm.)

C6. The Los Angeles Police Commission's inspector general found that 44 percent of LAPD "Chronic Offenders" with detailed point calculations had zero or one arrest for a violent crime.
- Source: Review of Selected Los Angeles Police Department Data-Driven Policing Strategies, Office of the Inspector General, Los Angeles Police Commission, March 12, 2019 — https://www.oig.lacity.org/_files/ugd/b2dd23_21f6fe20f1b84c179abf440d4c049219.pdf
- Quote: "While some Chronic Offenders were listed as having a large number of arrests for violent crimes, nearly half – 44 percent – of those with detailed point calculations were listed as having either zero or one such arrest."
- Last checked: LAPD ended LASER in April 2019 (C8).

C7. In response, the LAPD said proposed changes to its offender-based program included "disclosure and appeal processes."
- Source: same as C6
- Quote: "some of the proposed changes for a revised offender-based program include more narrowly constraining the selection process, incorporating disclosure and appeal processes, and developing a centralized oversight component."
- Last checked: program ended (C8).

C8. The LAPD ended Operation LASER in April 2019.
- Source: "LAPD ends another data-driven crime program touted to target violent offenders," Mark Puente, Los Angeles Times, April 12, 2019 — https://www.latimes.com/local/lanow/la-me-laser-lapd-crime-data-program-20190412-story.html
- Quote: "Chief Michel Moore and other department leaders decided Wednesday to end Operation LASER, a program begun in 2011 to pinpoint locations connected to gun and gang violence." ; "'We discontinued LASER because we want to reassess the data,' Josh Rubenstein, the LAPD's chief spokesman, said Friday. 'It was inconsistent. We're pulling back.'"
- Last checked: no revival found.

C9. The LAPD stopped using PredPol in April 2020, with Chief Moore citing pandemic budget constraints.
- Source: "LAPD will end controversial program that aimed to predict where crimes would occur," Leila Miller, Los Angeles Times, April 21, 2020 — https://www.latimes.com/california/story/2020-04-21/lapd-ends-predictive-policing-program
- Quote: "Los Angeles Police Chief Michel Moore announced Tuesday that, in light of financial constraints caused by the coronavirus outbreak, the department would stop using a controversial program that predicts where property crimes could occur throughout the city."
- Last checked: no revival found.

C10. In New York City's 2025 Local Law 35 inventory, the NYPD reports three tools (Facial Recognition Technology, Patternizr, ShotSpotter). Patternizr, in use since December 2016 and built in-house, estimates the probability that a complaint belongs to a crime pattern; models were trained on about 10,000 patterns per crime type from 2006 to 2015, and a human must evaluate the output.
- Source: Algorithmic Tools Compliance Report, NYC Open Data dataset jaw4-yuem, queried Oct. 19, 2026 — https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=500 (218 rows returned: 31 for 2022, 46 for 2023, 55 for 2024, 86 for 2025; NYPD rows for 2025 = 3)
- Quote (2025 Patternizr row): "date_first_use": "2016/12"; "vendor_name": "None"; "This corpus consists of approximately 10,000 patterns between 2006 and 2015 from each crime type."; "data_output": "Probability that a complaint is connected to a pattern."; "The tool requires a human user to evaluate the output data to see if complaints identified as similar are, in fact, connected to a pattern."
- Last checked: dataset queried Oct. 19, 2026; 2025 is the latest year in the dataset.

C11. New York City's pretrial release assessment does not appear in the Local Law 35 inventory in any of the four years (2022-2025). (Searched all 218 rows for "release," "pretrial," "arraign," "CJA," "bail"; the only hits were the DOC jail population forecast and Zencity, neither a release assessment.) The Department of Correction does list a 2025 "Risk of Recidivism Tool."
- Source: same query as C10
- Quote (DOC row): "tool_name": "Risk of Recidivism Tool"; "The tool is designed to identify individuals at high risk of recidivism so they can receive additional services."
- Caveat: Local Law 35 applies to City agencies; the release assessment is administered by the New York City Criminal Justice Agency, a nonprofit under contract with the Mayor's Office of Criminal Justice (C13). I did not verify whether the law's definitions reach contractor-run tools, so the essay says only that the tool is absent, not that its absence violates the law.
- Last checked: Oct. 19, 2026.

C12. The New York City Criminal Justice Agency (CJA) runs a release assessment for nearly everyone arrested and held for arraignment; it predicts the likelihood of returning to court.
- Source: Release Assessment page, CJA — https://www.nycja.org/our-work/release-assessment (fetched Oct. 19, 2026)
- Quote: "CJA administers New York City's release assessment to nearly every individual arrested and held for arraignment. The assessment evaluates the likelihood that an individual released before trial will return for court appearances."
- Last checked: page live Oct. 19, 2026; most recent related post "Updating the Data: A Refresh of Release Assessment Reappearance Rates," March 2, 2026 ("CJA has updated the court reappearance rate data behind the pretrial Release Assessment").

C13. The current version started in November 2019 under the Mayor's Office of Criminal Justice (MOCJ), which contracts with CJA; it was built by Luminosity and the University of Chicago Crime Lab from 1.6 million arrests (2009-2015) and uses eight factors; its stated goals included reducing racial disparities and its principles included being "transparent and validated."
- Source: Brief No. 46: CJA's Updated Release Assessment, Richard R. Peterson, CJA, September 2020 — https://www.nycja.org/assets/downloads/CJA-Brief-46_updated-release-assessment.pdf
- Quote: "In November 2019, CJA began using an updated Release Assessment" ; "with support from the Mayor's Office of Criminal Justice (MOCJ), which contracts with CJA to provide pretrial services in New York City." ; "CJA generated an initial data file containing information for 1.6 million summary arrests ... between January 1, 2009 and December 31, 2015." ; "The Release Assessment relies on eight predictive factors; six are based on the individual's criminal history and two are based on community ties." ; "The overarching goals of updating the assessment were to (1) maintain the current high court appearance rates ... (2) reduce the use of pretrial detention when possible, and (3) reduce racial and other disparities in pretrial settings. The following principles guided the research: the assessment must be evidence-based and informed by data science; it should be developed in conjunction with judges, court actors, advocates, and affected communities and individuals; and it must be transparent and validated."
- Additional quote (Brief 46): "Each person begins with a score of 25, and points are subtracted based on the presence of the predictive factors."
- Last checked: CJA site Oct. 19, 2026.

C14. The report given to judges shows how the score and recommendation were derived and the estimated appearance rate; judge, prosecution and defense all receive it; CJA publishes an interactive version of the scoring.
- Sources: CJA Brief No. 46 (above); Goh, Rempel and Weill, Data Collaborative for Justice, October 2025 — https://datacollaborativeforjustice.org/wp-content/uploads/2025/09/Release_Assessment_Report.pdf ; CJA Release Assessment page (above)
- Quotes: Brief 46: "The revised report transparently displays how the score and recommendation were derived as well as the estimated appearance rate." DCJ: "The judge, prosecution, and defense all receive the assessment's findings in advance of arraignment." CJA page: "This interactive tool shows the eight factors used in the Release Assessment, factor by factor. Read the reasoning behind each factor, how each factor is scored, and how the final score guides the release recommendation."
- Last checked: Oct. 19, 2026.

C15. The eight factors and point deductions: most recent bench warrant (up to 6), two or more bench warrants in five years (2), any conviction in past year (2), misdemeanor convictions in three years (up to 3), felony conviction in 10 years (1), pending case (3), residence (2 if under three years, 5 if none), not reachable by phone (3). Scores run 0 to 25.
- Source: Validation of the New York City Criminal Justice Agency Pretrial Release Assessment, Mary K. Kitzmiller and Marian Gewirtz, CJA, May 2025 — https://www.nycja.org/assets/downloads/Release-Assessment-Validation-1.0-20250512-2.pdf
- Quote: "The CJA release assessment assigns a score out of 25 points, with higher scores indicating a person's greater likelihood of appearing at all future court dates if released. It consists of eight scored items across four key domains: 1. Prior bench warrants; 2. Prior convictions; 3. Pending cases; and 4. Community ties." Table 1 rows (as extracted): "In the past year 6"; "Two or more 2"; "One or more 2" (convictions past year); "Three or more 3"; "One or more 1" (felony 10 yrs); "One or more 3" (pending); "Fewer than 3 years 2"; "No current residence 5"; "No 3" (reachable by phone).
- Last checked: Oct. 19, 2026.

C16. CJA's 2025 revalidation (2022-2023 arraignments, 211,218 cases) found an area under the curve of 0.796, up from 0.677 in the development sample, and each one-point increase in score was associated with an 18 percent reduction in the likelihood of a bench warrant.
- Source: same as C15
- Quote: "Validation Dataset: Area Under the Curve Receiver Operator Characteristic (AUC/ROC) = 0.796." ; "Development Sample: Area Under the Curve Receiver Operator Characteristic (AUC/ROC) = 0.677." ; "each one-point increase in total score was associated with an 18% reduction in the likelihood of bench warrant issuance."
- Last checked: no newer validation found on CJA site as of Oct. 19, 2026.

C17. In the revalidation, ROR recommendation rates were 84.8 percent for Black, 86.2 percent for Hispanic and 81.4 percent for white people; calibration was strongest at the high end of the scale; in the middle and lower ranges white people were more likely to get a bench warrant (small samples).
- Source: same as C15
- Quote: "Hispanic individuals had a slightly higher ROR recommendation rate (86.2%) compared to Black (84.8%) and White (81.4%) individuals." ; "Calibration is particularly strong at the higher end of the scale, where most of the released subset scores." ; "There is greater racial/ethnic variation in bench warrant rates within the Consider All Options (12-18) and ROR Not Recommended (0-11) ranges, suggesting that White individuals within these recommendation ranges are more likely to receive a bench warrant, relative to Black and Hispanic individuals. However, these results should be interpreted with caution, due to low sample size at the lower end of the scale."
- Last checked: Oct. 19, 2026.

C18. New York law bases pretrial decisions on return to court; recidivism risk is not a permissible factor.
- Sources: CJA revalidation (C15); New York Criminal Procedure Law § 510.10, NY Senate site, fetched via WebFetch Oct. 19, 2026 — https://www.nysenate.gov/legislation/laws/CPL/510.10
- Quotes: CJA: "Likelihood of recidivism is not among the factors that can be considered when setting pretrial release conditions, according to New York State law." CPL 510.10(1) (WebFetch returned it in segments): "the court shall make an individualized determination as to whether" / "the principal poses a risk of flight to avoid prosecution, consider the kind and degree of control or restriction" / "necessary to reasonably assure the principal's return to court"
- Last checked: Oct. 19, 2026.

C19. CPL 510.10(1) requires the court to explain its securing order on the record or in writing.
- Source: CPL § 510.10 (above)
- Quote: "The court shall explain the basis for its determination and its choice of securing order on the record or in writing."
- Last checked: Oct. 19, 2026 (current text on NY Senate site).

C20. The state bail law took effect Jan. 1, 2020, and eliminated bail for most misdemeanor and nonviolent felony cases.
- Source: CJA Brief No. 46 (C13)
- Quote: "the updated Release Assessment was implemented shortly before bail reform legislation went into effect in New York State on January 1, 2020. This legislation eliminated bail for most misdemeanor and non-violent felony cases."
- Last checked: 2022 amendments added factors (C21); no repeal found.

C21. 2022 amendments added three factors judges must consider in all cases (order-of-protection violations, firearms history, "serious harm").
- Source: Goh, Rempel and Weill, Alignment with New York City's Pretrial Release Assessment, Data Collaborative for Justice, October 2025 (C14 URL)
- Quote: "In 2022, amendments to the State's bail reform statute made three particular factors applicable to all cases, respectively concerning a prior history of order of protection violations, history of firearms use or possession, and whether the current allegations involve "serious harm.""
- Last checked: CPL 510.10(1)(g)-(i) text confirms these factors (WebFetch, Oct. 19, 2026).

C22. Data Collaborative for Justice study: 251,917 New York City arraignments, 2021-2023; the tool recommended ROR for 88 percent, including 79 percent of violent felonies, 77 percent of nonviolent felonies and 92 percent of misdemeanors; judges set ROR for 25 percent of violent felonies, 42 percent of nonviolent felonies and 78 percent of misdemeanors.
- Source: DCJ report (C14 URL)
- Quote: "Drawing on 251,917 New York City arraignments in 2021, 2022, and 2023" ; "From 2021 to 2023, the assessment recommended ROR for 88% of people subject to pretrial release decisions, including 79% charged with a violent felony, 77% with a nonviolent felony, and 92% with a misdemeanor. Nonetheless, judges in fact set ROR for merely 25% of violent felonies, 42% of nonviolent felonies, and 78% of misdemeanors."
- Last checked: report is the most recent on judicial alignment found (it says a companion cross-borough report "will soon be released"; not checked).

C23. The tool recommended ROR for 87 percent of Black, 88 percent of Hispanic and 85 percent of white people; for violent felonies, 78, 78 and 77 percent.
- Source: DCJ report
- Quote: "The assessment recommended 87% of Black, 88% of Hispanic, and 85% of white people for ROR." ; "For people charged with a violent felony, the assessment recommended a statistically identical 78% of Black and Hispanic and 77% of white people for ROR"
- Last checked: as C22.

C24. In violent felony cases where the tool recommended ROR, judges set ROR for 26 percent of Black, 32 percent of Hispanic and 43 percent of white people, and set bail for 44, 39 and 29 percent.
- Source: DCJ report
- Quote: "when the assessment recommended ROR, judges set it least often for Black people (26%), somewhat more for Hispanic people (32%), and even more for white people (43%). Conversely, in these same cases recommended for ROR, judges were substantially more likely to set bail for Black people (44%) than Hispanic (39%) or white people (29%)."
- Additional quote (DCJ executive summary): "Judges set ROR at a rate 17 percentage points less often for Black than white people, while, conversely, imposing bail or remand 15 percentage points more often on Black than white people"
- Last checked: as C22.

C25. With controls, the gap shrinks: Black people were 9 points less likely to get ROR and 6 points more likely to get bail; the authors attribute the gaps to judges overweighting criminal history and housing instability, factors the tool already counts.
- Source: DCJ report
- Quote: "With controls, Black people were 9 percentage points less likely to receive ROR and 6 points more likely to receive bail in violent felony cases recommended for ROR. This pattern indicates that while the Release Assessment provides equivalent recommendations across racial groups, judges give outsize—and statistically unjustified—weight to factors including criminal history and housing instability, a tendency that exacerbates racial disparities in release decisions."
- Last checked: as C22.

C26. Among people released who were recommended for ROR, 90 percent attended every court date.
- Source: DCJ report (citing CJA revalidation)
- Quote: "Among people released before trial who were recommended for ROR, the latest revalidation found that 90% attended every court date."
- Last checked: as C22.

C27. Limitation: the study cannot tell whether judges looked at the assessment.
- Source: DCJ report
- Quote: "An important limitation is that this study cannot ascertain whether or how frequently judges explicitly considered the assessment's recommendations in the first place."
- Last checked: as C22.

C28. The DCJ authors note the tool predicts court attendance rather than re-arrest, a possible reason it avoids the overclassification found in other tools.
- Source: DCJ report
- Quote: "While the reasons why the Release Assessment's performance varies from that of other tools are unclear, a potentially relevant distinction may be that it was designed to predict people's likelihood of court attendance, while the other tools shown to disadvantage Black and Hispanic people all predict re-arrest."
- Last checked: as C22.

C29. The researchers needed CJA to share its data; the report says CJA "agreed to provide" it.
- Source: DCJ report, acknowledgments
- Quote: "CJA conducts pre-arraignment interviews with people facing charges citywide and agreed to provide interview data, resulting Release Assessment scores, and data concerning people's charges and judges' pretrial decisions at arraignment."
- Last checked: as C22.

C30. Strongest case for algorithms (simulation): using 758,027 New York City defendants arrested 2008-2013, Kleinberg et al. estimated that an algorithm could cut crime by up to 24.8 percent with no change in jailing, or cut jail populations 42.0 percent with no increase in crime, while reducing the share of Black and Hispanic people in jail.
- Source: "Human Decisions and Machine Predictions," Jon Kleinberg, Himabindu Lakkaraju, Jure Leskovec, Jens Ludwig and Sendhil Mullainathan, NBER Working Paper 23180, February 2017 (published in the Quarterly Journal of Economics, 2018) — https://www.nber.org/papers/w23180 ; PDF https://www.nber.org/system/files/working_papers/w23180/w23180.pdf
- Quote: abstract: "a policy simulation shows crime can be reduced by up to 24.8% with no change in jailing rates, or jail populations can be reduced by 42.0% with no increase in crime rates. ... Importantly, such gains can be had while also significantly reducing the percentage of African-Americans and Hispanics in jail." Paper: "Our algorithm makes use of a dataset of 758, 027 defendants who were arrested in New York City between 2008 and 2013." ; abstract: "a key problem appears to be that judges to respond to 'noise' as if it were signal."
- Note: a simulation, not a deployed program. Last checked: QJE publication noted on NBER page.

C31. Evidence on tools in practice: in a study of risk assessment adopted in sentencing, judges deviated from algorithm-linked recommendations in systematic ways and the tool produced no detectable gains in public safety or incarceration.
- Source: "Algorithmic Risk Assessment in the Hands of Humans," Megan T. Stevenson and Jennifer L. Doleac, American Economic Journal: Economic Policy 16(4), November 2024 — https://www.aeaweb.org/articles?id=10.1257/pol.20220620
- Quote: "Judges deviated from the recommendations associated with the algorithm in systematic ways, suggestive of alternative objectives. As a result, risk assessment did not lead to detectable gains in terms of public safety or reduced incarceration rates."
- Note: the abstract says "sentencing"; the state (Virginia) is from the paper's known setting but the abstract excerpt fetched does not name it, so the essay does not name the state.

C32. ProPublica (May 23, 2016) analyzed COMPAS scores for more than 7,000 people arrested in Broward County, Fla., in 2013-2014: 61 percent of those deemed likely to reoffend were arrested again within two years; errors were made at roughly the same rate for Black and white defendants but differently — Black defendants who did not reoffend were labeled higher risk at almost twice the rate (44.9 vs. 23.5 percent), and white defendants who did reoffend were more often labeled low risk (47.7 vs. 28.0 percent).
- Source: "Machine Bias," Julia Angwin, Jeff Larson, Surya Mattu and Lauren Kirchner, ProPublica, May 23, 2016 — https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing
- Quote: "We obtained the risk scores assigned to more than 7,000 people arrested in Broward County, Florida, in 2013 and 2014" ; "Of those deemed likely to re-offend, 61 percent were arrested for any subsequent crimes within two years." ; "the algorithm made mistakes with black and white defendants at roughly the same rate but in very different ways. The formula was particularly likely to falsely flag black defendants as future criminals, wrongly labeling them this way at almost twice the rate as white defendants. White defendants were mislabeled as low risk more often than black defendants." ; chart: "Labeled Higher Risk, But Didn't Re-Offend 23.5% 44.9% Labeled Lower Risk, Yet Did Re-Offend 47.7% 28.0%" (white, African American)
- Last checked: article unchanged.

C33. Northpointe (COMPAS's maker) did not publicly disclose its calculations; it disputed ProPublica and argued the test was racially neutral because accuracy (about 60 percent) was the same for Black and white defendants.
- Sources: "Machine Bias" (above); "Bias in Criminal Risk Scores Is Mathematically Inevitable, Researchers Say," Julia Angwin and Jeff Larson, ProPublica, Dec. 30, 2016 — https://www.propublica.org/article/bias-in-criminal-risk-scores-is-mathematically-inevitable-researchers-say
- Quotes: "The company does not publicly disclose the calculations used to arrive at defendants' risk scores, so it is not possible for either defendants or the public to see what might be driving the disparity." ; "Northpointe, the company that sells COMPAS, said in response that the test was racially neutral. To support that assertion, company officials pointed to another of our findings, which was that the rate of accuracy for COMPAS scores — about 60 percent — was the same for black and white defendants."
- Last checked: as above.

C34. The follow-up research used the Broward data ProPublica made public.
- Source: ProPublica, Dec. 30, 2016 (above)
- Quote: "Using the Broward County data we made public, Chouldechova rearranged how the COMPAS scores are interpreted so that they were wrong equally often about black and white defendants."

C35. Impossibility results: Chouldechova showed common fairness criteria cannot all hold when recidivism prevalence differs across groups; Kleinberg, Mullainathan and Raghavan proved three fairness conditions cannot be satisfied simultaneously except in highly constrained special cases.
- Sources: Alexandra Chouldechova, "Fair prediction with disparate impact: A study of bias in recidivism prediction instruments," arXiv, Feb. 28, 2017 — https://arxiv.org/abs/1703.00056 ; Jon Kleinberg, Sendhil Mullainathan and Manish Raghavan, "Inherent Trade-Offs in the Fair Determination of Risk Scores," arXiv, Sept. 19, 2016 — https://arxiv.org/abs/1609.05807
- Quotes: Chouldechova: "We demonstrate that the criteria cannot all be simultaneously satisfied when recidivism prevalence differs across groups." KMR: "we prove that except in highly constrained special cases, there is no method that can satisfy these three conditions simultaneously."

C36. In State v. Loomis (2016), the Wisconsin Supreme Court allowed a COMPAS score in sentencing although the methodology was disclosed neither to the court nor the defendant, and required written warnings including that the tool's "proprietary nature" prevents disclosure of how scores are calculated.
- Source: "State v. Loomis," Harvard Law Review, vol. 130 (2017) — https://harvardlawreview.org/print/vol-130/state-v-loomis/
- Quote: "the Wisconsin Supreme Court held that a trial court's use of an algorithmic risk assessment in sentencing did not violate the defendant's due process rights even though the methodology used to produce the assessment was disclosed neither to the court nor to the defendant." ; "PSIs that incorporate a COMPAS assessment must include five written warnings for judges: first, the "proprietary nature of COMPAS" prevents the disclosure of how risk scores are calculated"
- Last checked: no later reversal found (limited search).

C37. Council on Criminal Justice (October 2024 convening report) lists among AI's upsides "identifying and mitigating human errors in decision-making processes" and among risks "imbalanced availability of tools between prosecution and defense" and "diminishing the public's ability to understand and critique decisions"; it lists "ensuring transparency at multiple levels (development, procurement, use)" as a core governance element.
- Source: "The Implications of AI for Criminal Justice: Key Takeaways From a Convening of Leading Stakeholders," Council on Criminal Justice, October 2024 — https://counciloncj.org/the-implications-of-ai-for-criminal-justice/
- Quotes: "identifying and mitigating human errors in decision-making processes, leading to more consistent and just outcomes across cases" ; "the perpetuation or amplification of existing problems and unequal access to justice (such as imbalanced availability of tools between prosecution and defense, or between well-funded agencies and those with modest budgets)" ; "degrading public trust and legitimacy by reducing transparency, adding complexity loops, and diminishing the public's ability to understand and critique decisions" ; "Core elements for criminal justice AI governance could include: conducting impact assessments for proposed AI applications; applying more stringent controls to higher-risk use cases; ensuring transparency at multiple levels (development, procurement, use)"

C38. A bill in Albany, the PROTECT Act (A.9684, Assemblymember Cashman), introduced Jan. 21, 2026, would have the state Division of Criminal Justice Services create a statewide risk assessment instrument covering danger to the community as well as flight, and bar release of anyone charged with a felony or class A misdemeanor until a completed instrument is reviewed; as of Oct. 19, 2026, it sits in the Assembly Codes Committee. The bill text contains no requirement to publish the instrument's factors or validate it by race (searched the text for "publi," "disclos," "valid," "bias," "race": only "public safety"/"protect the public" hits).
- Sources: bill text, https://legislation.nysenate.gov/pdf/bills/2025/a9684 ; status via WebFetch of https://www.nysenate.gov/legislation/bills/2025/A9684 (Oct. 19, 2026): "Introduced: January 21, 2026 ... In Assembly Committee (Assembly Codes) ... Referred to committee on January 21, 2026"
- Quotes: "Such instrument shall be developed based on empirical data and risk factors relevant to the danger that the principal poses to themself, another person, or the community as a whole, and the likelihood that such principal may attempt to evade or obstruct the criminal justice process." ; "No court may release a principal charged with a felony or a class A misdemeanor unless and until it has had an opportunity to review and consider a completed risk assessment instrument."
- Additional quote (bill § 510.16): "The court shall order the detention of a principal pending the completion of such risk assessment instrument. Absent extraordinary circumstances, the court shall make a decision on detention within forty-eight hours."
- Last checked: Oct. 19, 2026, status page.

C39. Outside New York City, the state's New York Release Assessment (NYRA) was validated in Dutchess County (brief issued May 2026) and found to perform equitably across gender, race and age; it uses only items linked to court appearance.
- Source: "Validation of the New York Release Assessment (NYRA) in Dutchess County: Research Brief," NYS Division of Criminal Justice Services Research Consortium, May 2026 — https://knowledgebank.criminaljustice.ny.gov/dutchess-county-nyra-research-brief
- Quote: "Findings indicate that the NYRA meaningfully distinguishes risk in a pretrial population and performs equitably across gender, race, and age groups." ; "Consistent with New York State law, the NYRA includes only items empirically linked to court appearance outcomes, rather than public safety risk."
- Note: not used in the essay body (space); available if needed.

C40. DCJ: City agencies that created and fund the assessment should make sure judges get information about it.
- Source: DCJ report
- Quote: "it is the responsibility of City agencies that oversaw the assessment's creation and that fund its pre-arraignment administration to ensure that judges receive critical information about the value of this tool in promoting credible and fair decision-making"

C41. The DCJ authors say complete alignment with the tool is neither realistic nor necessary, and that judges need discretion for case-specific nuance.
- Source: DCJ report
- Quote: "Complete alignment with the assessment is unrealistic and unnecessary, given the importance of judicial discretion for considering case-specific nuances that the assessment may not capture."

C43. The DCJ study is the first published analysis of judicial alignment with the tool using post-2020 data.
- Source: DCJ report
- Quote: "This is the first published study based on data from later than 2020 to analyze how often New York City judges' pretrial decisions follow the Release Assessment's recommendations."

C42. The release assessment has been validated twice: on 2014 cases and on 2022-2023 cases.
- Source: DCJ report
- Quote: "An initial validation study drawing on cases arraigned in 2014 and a recent revalidation study drawing on cases arraigned in 2022 and 2023 both confirmed that the Release Assessment effectively predicts New Yorkers' likelihood of returning to court."

C44. (Added by fact-checker.) CJA's 2025 revalidation measures bench warrants, not attendance at every court date: among cases recommended for ROR and released, 10 percent drew a bench warrant before the case was resolved.
- Source: CJA revalidation (C15 URL), conclusion
- Quote: "Among those recommended for ROR and released, only 10% received a bench warrant before the resolution of their case."
- Note: DCJ paraphrases this as "90% attended every court date" (C26); the primary source's measure is bench warrants.

C45. (Added by fact-checker.) The Senate version of the PROTECT Act, S.2282 (Helming), was defeated in the Senate Codes Committee on May 18, 2026 (4 aye, 8 nay, 1 aye with reservations), as it was on May 5, 2025. NY Senate lists A.9684 as its Assembly version.
- Source: https://www.nysenate.gov/legislation/bills/2025/S2282 (WebFetch, Oct. 19, 2026)
- Quote: "defeated in codes" (May 18, 2026); "Aye 4 Nay 8 Aye with Reservations 1"

C46. (Added by fact-checker.) In the Kleinberg et al. New York data, the outcome the paper calls "crime" is failure to appear.
- Source: NBER w23180 PDF (C30), footnote 4
- Quote: "under New York state law, judges in bail hearings are only supposed to consider flight risk (failure to appear, or FTA). Unless otherwise indicated, in what follows, for convenience, we use the term "crime" to refer to failure to appear in the New York data"

C47. (Added by fact-checker.) The Chicago OIG says risk scores were included in Mayor's Office shooting briefings only "as of January 8, 2019" and "sometimes"; the sheriff got access through a July 2015 data-sharing agreement.
- Source: Chicago OIG advisory (C1 URL), p. 6-7
- Quote: "The briefings may include a description of the event and, as of January 8, 2019, sometimes included whether or not the victim or offender had an SSL score." ; "In July 2015, CPD signed a data sharing agreement with CCSO."

## Could not confirm
- RAND's own findings on Chicago's SSL pilot (Saunders, Hunt and Hollywood, Journal of Experimental Criminology, 2016; DOI 10.1007/s11292-016-9272-0, confirmed as existing via Crossref). Springer redirected to a login flow, RAND's page returned 403, and abstract services elided the abstract. The often-repeated finding (people on the list were no more or less likely to be shot, but more likely to be arrested for a shooting) is left out of the essay.
- A 2019 bail-law provision requiring any pretrial risk assessment instrument to be public or nonpresumptive. I believed such language existed but could not find it in current CPL 500.10 or 510.10; left out.
- That LAPD's PredPol use began in a specific year, or Santa Cruz's 19 percent burglary drop (old essay) — not checked, not used.
- The NYPD Patternizr paper (Chohlas-Wood and Levine, INFORMS Journal on Applied Analytics, 2019) and any statement that it excludes race — not fetched; essay relies only on the City's own inventory entry.
- Whether Local Law 35's definition of "agency" covers tools run by contractors like CJA — not verified; essay states only the absence.
- Stevenson's Kentucky study ("Assessing Risk Assessment in Action") — SSRN fetch failed; not used.
- Whether judges in fact write down reasons for departing from the release assessment, and whether the Office of Court Administration records them in a usable field — no source found; essay proposes it without claiming current practice either way beyond the statutory duty (C19).
- The Data Collaborative for Justice's promised companion cross-borough report — not checked whether published.

## Notes for other essays
- `the-inventory`: the LL35 dataset has 218 rows (31/46/55/86 by year, 2022-2025). The CJA pretrial release assessment, arguably the City-funded algorithm with the largest effect on liberty, is in none of the four years. DOC added a "Risk of Recidivism Tool" (first used July 2025, DOJ-grant-funded, trained on 2020-2021 discharges; inputs include self-reported homelessness and drug or alcohol misuse). The DOC "NYC Jail Population Forecast" was added in 2025 under budget terms and conditions.
- `face-and-plate`: NYPD 2025 LL35 rows list Facial Recognition Technology (first used 2011/10) and ShotSpotter (2015/03), training data "proprietary to the vendor." Fire Department and Department of Investigation also list facial recognition tools in 2025.
- `acs-model` / `shelter-score`: Chicago OIG's point about arrests without convictions feeding scores is a general lesson that travels to any arrest-history input.
