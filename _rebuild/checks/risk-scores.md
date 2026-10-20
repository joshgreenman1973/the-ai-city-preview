# risk-scores fact-check
Checked: Oct. 19, 2026. Statements checked: 74.

Source PDFs downloaded to `_rebuild/checks/pdfs/risk-scores/` (DCJ report, CJA Brief 46, CJA 2025 revalidation, Chicago OIG advisory, LA Police Commission OIG review, A.9684 bill text, NBER w23180), converted to text and read directly.

## Errors found and fixed
- "The tool recommended release for 87 percent of Black, 88 percent of Hispanic and 85 percent of white people" (sentence sits in the paragraph about the 2025 revalidation) → "85 percent of Black, 86 percent of Hispanic and 81 percent of white people." Why: 87/88/85 are the DCJ study's 2021-2023 figures; the revalidation reports 84.8/86.2/81.4 (DCJ p. 4 also cites the revalidation as 85/86/81). https://www.nycja.org/assets/downloads/Release-Assessment-Validation-1.0-20250512-2.pdf
- "The researchers suggest one reason it avoids the racial skew..." (implied revalidation authors) → "Researchers at the Data Collaborative for Justice suggest one possible reason..." Why: the rearrest-vs-appearance point comes from the DCJ report, which says the reasons "are unclear" and the distinction is "potentially relevant." https://datacollaborativeforjustice.org/wp-content/uploads/2025/09/Release_Assessment_Report.pdf
- "90 percent made every court date" → "only 10 percent drew a bench warrant before their case ended." Why: the revalidation measures bench warrants ("Among those recommended for ROR and released, only 10% received a bench warrant before the resolution of their case"); "attended every court date" is DCJ's paraphrase. Revalidation URL above.
- Kleinberg et al.: "cut crime by up to 24.8 percent ... with no rise in crime" → "cut failures to appear in court (which the paper calls "crime" for short in the New York data) by up to 24.8 percent ... with no rise in failures to appear." Why: footnote 4 of the paper: in the New York data "we use the term 'crime' to refer to failure to appear." Numbers (758,027 defendants, 2008-2013, 24.8%, 42.0%, lower share of Black and Hispanic people in jail, "noise" quote) all confirmed. https://www.nber.org/system/files/working_papers/w23180/w23180.pdf
- Chicago: "From 2015 the department wrote them into arrest reports and shared them with the county sheriff, with prosecutors and, in daily shooting briefings, with the mayor's office." → arrest reports and sheriff from 2015; prosecutors; "starting in 2019, sometimes included them in daily shooting briefings to the mayor's office." Why: OIG says the Mayor's Office briefings "as of January 8, 2019, sometimes included" SSL scores; arrest reports from March 2015; sheriff data-sharing agreement July 2015. https://igchicago.org/wp-content/uploads/2020/01/OIG-Advisory-Concerning-CPDs-Predictive-Risk-Models-.pdf
- "people flagged by them could face harsher charging" → "people who got a police warning because of them could face harsher charging." Why: OIG limits this to individuals "who received a custom notification as a result of a PTV risk score or tier." Same URL.
- "Chicago's inspector general listed everyone who could see the scores. The people being scored were not on that list." → "listed the agencies that could see the scores. The people being scored were not among them." Why: the OIG listed external agencies and noted scores were also available to anyone with access to arrest reports; it did not list "everyone." Same URL.
- "State law lets judges weigh only whether a person is likely to return to court" → "State law ties release decisions to whether a person is likely to return to court, not to danger to the public." Why: CPL 510.10(1) frames the decision around return to court but also requires judges to consider a list of factors (including firearms and "serious harm"); DCJ itself notes "some tension in the pretrial statute." "Only" overstated. https://www.nysenate.gov/legislation/laws/CPL/510.10
- "firearm history and whether a charge involves serious harm, added in 2022" → "which 2022 amendments made apply to every case." Why: DCJ says the 2022 amendments "made three particular factors applicable to all cases." DCJ URL above.
- PROTECT Act: "It sits in committee." → "It sits in the Assembly Codes Committee, and the Senate Codes Committee voted down its Senate version, S.2282, in May." Why: NY Senate lists S.2282 (Helming) as the same-as bill; "defeated in codes" May 18, 2026, 4-8 (also defeated May 5, 2025). A.9684 is still in Assembly Codes, referred Jan. 21, 2026. https://www.nysenate.gov/legislation/bills/2025/S2282 ; https://www.nysenate.gov/legislation/bills/2025/A9684
- Impossibility result: "no score can satisfy every common definition of fairness" → "no score short of a perfect one can satisfy..." Why: Kleinberg, Mullainathan and Raghavan prove it "except in highly constrained special cases" (equal base rates or perfect prediction). Chouldechova's statement ("cannot all be simultaneously satisfied when recidivism prevalence differs across groups") is otherwise accurately rendered. https://arxiv.org/abs/1609.05807 ; https://arxiv.org/abs/1703.00056
- Council on Criminal Justice: "among the core elements of governing" → "among the core elements it proposed for governing." Why: the report says core elements "could include." https://counciloncj.org/the-implications-of-ai-for-criminal-justice/

CLAIM MAP updated (paragraph 8 now C42, C16, C44, C17, C28; paragraph 17 adds C45). New dossier claims C44-C47 added. Chart data unchanged (verified).

## Unverifiable, cut or softened
- None cut. The "noise" quote and other items were confirmed. The LAPD "dropped PredPol" is the April 21, 2020 announcement that it would stop using the program; the article gives no end date. Left as is.

## Better statistic available
- None needed. If the editor wants the revalidation's own phrasing for the race split, it is 84.8/86.2/81.4 percent.

## Confirmed
- Headline C24: in violent felony cases recommended for ROR, citywide, 2021-2023, judges set ROR for 26% Black, 32% Hispanic, 43% white; bail 44/39/29 — DCJ report, exec. summary p. iv and ch. 3 p. 15. Population: 251,917 NYC arraignments in 2021-2023 where a pretrial release decision was made and CJA had a recommendation (excluding DATs, cases disposed at arraignment, under-18s, no-recommendation cases).
- Tool recommended ROR for 78% Black and Hispanic, 77% white in violent felonies (C23) — DCJ report.
- 79% violent felonies recommended ROR; judges set ROR for 25% — DCJ exec. summary.
- Adjusted Black-white gaps of 9 points (ROR) and 6 points (bail), violent felonies recommended for ROR — DCJ exec. summary and ch. 4.
- Skyline stat: 17-point gap (43 minus 26) — DCJ states "a rate 17 percentage points lower for Black than white people."
- Judges overweight criminal history and housing instability already in the score — DCJ.
- Study can't tell whether judges considered the assessment — DCJ.
- "unrealistic and unnecessary" quote — DCJ.
- CJA "agreed to provide" data — DCJ acknowledgments.
- Twice validated (2014; 2022-2023) — DCJ.
- Judge, prosecution and defense all receive the findings — DCJ p. 1.
- Revalidation: 211,218 cases, 2022-2023; AUC 0.796 vs 0.677 development sample — CJA revalidation.
- CJA interviews nearly everyone arrested and held; interactive tool shows eight factors — https://www.nycja.org/our-work/release-assessment
- November 2019 launch; Luminosity and UChicago Crime Lab; 1.6 million arrests; eight factors; start at 25 and subtract; MOCJ contracts with CJA; CJA not-for-profit; report shows how score was derived — CJA Brief 46.
- Bail law effective Jan. 1, 2020, ended bail for most misdemeanor and nonviolent felony cases — CJA Brief 46.
- Violent felonies virtually all bail-eligible — DCJ.
- CPL 510.10(1): "The court shall explain the basis for its determination and its choice of securing order on the record or in writing" (current text, revision 2023-06-09) — nysenate.gov.
- Chicago: models from 2012; everyone arrested once in prior four years scored "regardless of whether they had a history of violence"; 398,684 in SSL v5; all sworn personnel had access; arrest reports from March 2015; scores static nearly two and a half years; RAND evaluated v1 while CPD was on v5; decommissioned Nov. 1, 2019 — Chicago OIG advisory, Jan. 23, 2020.
- LA OIG (March 12, 2019): 44% of Chronic Offenders with detailed point calculations had zero or one violent-crime arrest; proposed changes included "disclosure and appeal processes" — LAPC OIG PDF.
- LASER ended (decided Wednesday, April 10, 2019); acronym "Los Angeles' Strategic Extraction and Restoration" — LA Times, April 12, 2019 (fetched via curl).
- PredPol: Chief Moore announced April 21, 2020 the LAPD would stop using it, citing coronavirus financial constraints; it predicted property crimes by location — LA Times, April 21, 2020.
- NYPD 2025 LL35 rows: Facial Recognition, Patternizr, ShotSpotter; Patternizr output "Probability that a complaint is connected to a pattern," ~10,000 patterns per crime type, human review required — NYC Open Data jaw4-yuem (queried Oct. 19, 2026; 218 rows, 2022-2025).
- Release assessment absent from all four years of the inventory; DOC "Risk of Recidivism Tool," first use 2025/07 — same dataset.
- Stevenson and Doleac: judges deviated "in systematic ways"; no detectable gains in public safety or reduced incarceration; sentencing — https://www.aeaweb.org/articles?id=10.1257/pol.20220620 (AEJ: Policy 16(4), Nov. 2024).
- ProPublica: 61% of those deemed likely to reoffend rearrested within two years; mistakes at roughly the same rate but different directions; 44.9% vs 23.5% — https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing
- Northpointe's equal-accuracy (about 60%) response; Chouldechova used the Broward data ProPublica made public — https://www.propublica.org/article/bias-in-criminal-risk-scores-is-mathematically-inevitable-researchers-say
- Northpointe "does not publicly disclose the calculations" — Machine Bias.
- Loomis: methodology "disclosed neither to the court nor to the defendant" — https://harvardlawreview.org/print/vol-130/state-v-loomis/
- A.9684: introduced Jan. 21, 2026 (Cashman); DCJS instrument covering danger to self, others, community, plus flight; detention pending completion for felony or class A misdemeanor; detention decision within 48 hours absent extraordinary circumstances; no text on publishing factors, validation or race (searched "publi," "disclos," "valid," "bias," "race") — bill PDF and nysenate.gov status page.
- CCJ convening report, October 2024 — counciloncj.org.

## Judgment calls for the editor
- PROTECT Act framing: with its Senate version voted down twice in committee and the 2025-26 session over, A.9684 dies at year's end. "Hold Albany to the City's terms" still reads, but the bill is a weak hook; the editor may want "If lawmakers revive it" to carry more weight or replace the example.
- "Northpointe made that choice out of view": ProPublica reports Northpointe said it designed COMPAS to equalize accuracy, so the choice of fairness criterion was stated publicly; what was hidden was the formula. The next sentence makes that clear, but the line edges toward overstatement.
- "a published, twice-validated score treats groups alike": the revalidation shows white people recommended for ROR somewhat less often (81% vs. 85-86%), and calibration varies by race at lower scores (small samples). "Alike" is defensible as a summary; "nearly alike" would be safer.
- "The most recent published numbers cover 2021 to 2023": true for judicial alignment by race as far as I found (DCJ's promised cross-borough companion report does not appear to be out). CJA posts other pretrial data; not checked whether any of it breaks out departures.
- Factor count: CJA (Brief 46, revalidation, website) says eight factors; the DCJ report's Appendix A text says "seven individual risk factors" (it seems to count the two residence items as one). The essay's "eight" follows CJA.
- The Kleinberg fix adds words to the sentence; the editor may prefer to say "missed court dates" throughout and drop the parenthetical.
- Kleinberg et al. cites the 2017 NBER working paper; the QJE (2018) version may carry slightly different figures. Not checked.
