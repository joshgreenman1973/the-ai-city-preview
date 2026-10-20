---
slug: risk-scores
title: A Risk Score Everyone Can Read
dek: New York City publishes how its pretrial risk score works and checks it for racial bias. Judges' decisions to override it deserve the same scrutiny.
section: The Peril
category: Criminal Justice
skyline_stat: "17-point gap between white and Black defendants in how often judges followed the City's release recommendation in violent felony cases, 2021-2023"
skyline_value: 17
skyline_claim: C24
---

Starting in 2012, getting arrested once in Chicago was enough to earn a number. The Chicago Police Department ran a series of models meant to predict who would shoot or be shot, and [according to the city's inspector general](https://igchicago.org/wp-content/uploads/2020/01/OIG-Advisory-Concerning-CPDs-Predictive-Risk-Models-.pdf), everyone arrested at least once in the prior four years got a score, "regardless of whether they had a history of violence." In the last version of what was called the Strategic Subject List, 398,684 people had one.

Any sworn officer could look the scores up. From 2015 the department wrote them into arrest reports and shared them with the county sheriff. It also sent them to prosecutors, and starting in 2019 it sometimes put them in daily shooting briefings for the mayor's office. The inspector general found that the scores had gone nearly two and a half years without an update, and that people who got a police warning because of them could face harsher charging on later arrests, convicted or not. Chicago shut the program down on Nov. 1, 2019.

In Los Angeles, a [2019 review by the Police Commission's inspector general](https://www.oig.lacity.org/_files/ugd/b2dd23_21f6fe20f1b84c179abf440d4c049219.pdf) found that 44% of the people the Los Angeles Police Department had labeled "Chronic Offenders," among those with detailed point tallies, had zero or one arrest for a violent crime. The department said it planned to add "disclosure and appeal processes." Instead it [ended the program, Operation LASER (for Los Angeles Strategic Extraction and Restoration)](https://www.latimes.com/local/lanow/la-me-laser-lapd-crime-data-program-20190412-story.html), in April 2019, and a year later, citing the pandemic budget, [dropped PredPol](https://www.latimes.com/california/story/2020-04-21/lapd-ends-predictive-policing-program), its property-crime forecasting software.

Chicago's inspector general listed the agencies that could see the scores. The people being scored were not among them. A score is defensible when the person it describes, that person's lawyer and the public can see how it works and check it. New York City already runs a scoring tool that meets that standard. Judges often set it aside, and in violent felony cases they set it aside more often for Black defendants than for white ones. Their departures should be as easy to check as the score.

## New York City's release assessment

None of the three tools the New York Police Department listed in the City's [2025 algorithm inventory](https://data.cityofnewyork.us/City-Government/Algorithmic-Tools-Compliance-Report/jaw4-yuem) scores individuals' risk. The risk score New York City does use on people is calculated before arraignment. Staff from the [New York City Criminal Justice Agency](https://www.nycja.org/our-work/release-assessment) (CJA), a nonprofit under contract with the Mayor's Office of Criminal Justice, interview nearly everyone arrested and held, then run a [release assessment](https://www.nycja.org/assets/downloads/CJA-Brief-46_updated-release-assessment.pdf) that predicts whether the person will come back to court. The current version, built by the firm Luminosity and the University of Chicago Crime Lab from 1.6 million arrests, went live in November 2019. Its factors cover bench warrants, convictions, pending cases, how long the person has lived at an address and whether the person can be reached by phone. Scores start at 25 and drop for each factor present.

[State law](https://www.nysenate.gov/legislation/laws/CPL/510.10) ties release decisions to whether a person is likely to return to court, not to danger to the public, so that is all the tool predicts. The point values are published, CJA posts an interactive version online, and the judge, the prosecutor and the defense lawyer [all receive the same report](https://datacollaborativeforjustice.org/wp-content/uploads/2025/09/Release_Assessment_Report.pdf), which shows how the score was reached.

The tool has been validated twice. A [2025 revalidation](https://www.nycja.org/assets/downloads/Release-Assessment-Validation-1.0-20250512-2.pdf) on 211,218 cases from 2022 and 2023 found an area-under-the-curve score, a standard accuracy measure, of 0.796, up from 0.677 when the tool was built. Of released people the tool had recommended for release on their own recognizance, 10% drew a bench warrant before their case ended. The tool recommended release for 85% of Black, 86% of Hispanic and 81% of white people. Researchers at the Data Collaborative for Justice suggest one possible reason it avoids the racial skew found in other tools: those predict rearrest, and this one predicts showing up.

## The evidence for and against risk scores

The case for scoring rests on evidence that judges, unaided, predict poorly. Using 758,027 New York City defendants arrested from 2008 to 2013, Jon Kleinberg, Jens Ludwig, Sendhil Mullainathan and colleagues [simulated](https://www.nber.org/papers/w23180) an algorithm that could cut failures to appear in court by up to 24.8% with no more people jailed, or cut the jail population by 42% with no rise in failures to appear, while reducing the share of Black and Hispanic people in jail. Judges, they wrote, appear to "respond to 'noise' as if it were signal." That was a simulation. When a risk tool was adopted in sentencing, [Megan Stevenson and Jennifer Doleac found](https://www.aeaweb.org/articles?id=10.1257/pol.20220620) that judges departed from its recommendations "in systematic ways," and the tool produced no detectable gain in public safety or reduction in incarceration.

The case against usually starts with ProPublica's 2016 analysis of a commercial tool called [COMPAS](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) in Broward County, Fla. Its mistakes came at about the same rate for Black and white defendants but ran in opposite directions: 44.9% of Black defendants who did not reoffend had been labeled higher risk, against 23.5% of white defendants, while white defendants who did reoffend were more often labeled low risk. The maker, Northpointe, [answered](https://www.propublica.org/article/bias-in-criminal-risk-scores-is-mathematically-inevitable-researchers-say) that its scores were equally accurate for both groups. Both claims were true at once, which [Alexandra Chouldechova](https://arxiv.org/abs/1703.00056) and, separately, [Kleinberg, Mullainathan and Manish Raghavan](https://arxiv.org/abs/1609.05807) showed is unavoidable: when the predicted outcome occurs at different rates in two groups, no score short of a perfect one can satisfy every common definition of fairness at the same time.

So every risk tool builds in a choice about whose errors to equalize. Northpointe named its standard in public, equal accuracy across races, but it did not disclose how its scores were calculated. In State v. Loomis, Wisconsin's Supreme Court [let a judge use a COMPAS score at sentencing](https://harvardlawreview.org/print/vol-130/state-v-loomis/) even though the method had been disclosed to neither the court nor the defendant.

## What judges do with the score

New York's [bail law](https://www.nycja.org/assets/downloads/CJA-Brief-46_updated-release-assessment.pdf), in effect since Jan. 1, 2020, ended bail for most misdemeanor and nonviolent felony cases, but nearly every violent felony charge is still eligible. A [Data Collaborative for Justice study](https://datacollaborativeforjustice.org/wp-content/uploads/2025/09/Release_Assessment_Report.pdf) of 251,917 city arraignments from 2021 to 2023 found the tool recommended release on recognizance for 79% of people charged with violent felonies. Judges granted it to 25%.

In violent felony cases where the tool recommended release, judges released 26% of Black defendants, 32% of Hispanic defendants and 43% of white defendants, and set bail for 44, 39 and 29%. Controlling for other factors shrinks the Black-white gap to 9 points for release and 6 for bail. The authors trace much of it to judges giving extra weight to criminal history and unstable housing, which the score already counts. They cannot tell whether judges looked at the score at all.

The fair objection is that judges should not be calculators. The statute lists factors the tool leaves out, including firearm history and whether a charge involves serious harm, which 2022 amendments made apply to every case. The authors agree that full alignment with the tool is "unrealistic and unnecessary." But the score treats Black, Hispanic and white defendants nearly alike, and the judges' decisions on the same recommendations do not.

## What the City and Albany can do

Put the tool on the City's list. The release assessment appears in none of the four years of the City's algorithm inventory under Local Law 35, though the Department of Correction lists a recidivism tool it adopted in 2025. The Mayor's Office of Criminal Justice, which contracts with CJA to run the assessment, could add it next cycle.

Write the City's terms into any state tool. An Assembly bill introduced in January, the [PROTECT Act](https://legislation.nysenate.gov/pdf/bills/2025/a9684), would have the state build an instrument rating a defendant's danger to the community and would detain anyone charged with a felony or a class A misdemeanor until the instrument is completed. Its text says nothing about publishing the factors or testing the tool for racial bias. The bill sits in the Assembly Codes Committee, and the Senate Codes Committee has voted down its Senate version twice, most recently in May. Any state tool should come with what New York City already provides: published factors, published validation by race and the same report for the defense as for the prosecution. A 2024 [Council on Criminal Justice convening](https://counciloncj.org/the-implications-of-ai-for-criminal-justice/) proposed transparency in a tool's development, procurement and use as one core element of governing artificial intelligence in criminal justice.

Count and publish the departures. The law already requires judges to "explain the basis" for a release decision on the record or in writing. The state Office of Court Administration and CJA could record a reason code whenever a judge sets bail or supervision over a release recommendation, and publish departure rates by borough and race every year. The most recent published numbers cover 2021 to 2023, and researchers got them because CJA agreed to share its data.

<!-- CHART
title: Judges followed the tool's release recommendation for 43% of white defendants and 26% of Black defendants
dek: Violent felony arraignments in New York City, 2021-2023. Share recommended for release on recognizance by CJA's release assessment, and share released on recognizance by judges when the tool recommended it
type: dot
data:
| group | Tool recommended release (%) | Judge released when recommended (%) |
| Black | 78 (C23) | 26 (C24) |
| Hispanic | 78 (C23) | 32 (C24) |
| White | 77 (C23) | 43 (C24) |
source: Data Collaborative for Justice, "Alignment with New York City's Pretrial Release Assessment," October 2025; 251,917 arraignments
claims: C22, C23, C24
-->

<!-- CLAIM MAP
paragraph 1: C1, C2
paragraph 2: C3, C47, C4, C1
paragraph 3: C6, C7, C8, C9
paragraph 4 (thesis): C3 (who could see the scores), C14, C42, C22, C24
paragraph 5 (NYPD; CJA assessment): C10, C12, C13, C15
paragraph 6 (court return only; published): C18, C14, C15
paragraph 7 (validated twice): C42, C16, C44, C17, C28
paragraph 8 (case for scoring): C30, C46, C31
paragraph 9 (COMPAS): C32, C33, C35
paragraph 10 (Northpointe; Loomis): C33, C36
paragraph 11 (bail law; DCJ): C20, C22
paragraph 12 (racial gap): C24, C25, C27
paragraph 13 (objection): C21, C41, C23, C17
paragraph 14 (fix: inventory): C11, C13
paragraph 15 (fix: state tool): C38, C45, C14, C15, C17, C37
paragraph 16 (fix: departures): C19, C29, C43
-->
