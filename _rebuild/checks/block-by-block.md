# block-by-block fact-check
Checked: Oct. 19, 2026. Statements checked: 68.

Downloads: `_rebuild/checks/pdfs/block-by-block/` (llaw35.json = full jaw4-yuem pull of 218 rows; inspection-cycle.pdf; kannan2019.pdf).

## Errors found and fixed
- "the cluster reached 92 cases and seven deaths" (Upper East Side) → "the cluster reached 94 cases and 11 deaths, [the health commissioner said in late August](NBC link)". Why: 92/7 was the July 30 count. On Aug. 28, 2026, Commissioner Alister Martin said: "That brings the total to 94 cases and 11 deaths." https://www.nbcnewyork.com/news/health/eleven-deaths-linked-legionnaires-outbreak-upper-east-side/6541699/ (added to the dossier as C26; claim map updated)
- "the tower with the most violations, at 300 E. 83rd St., had never been registered" → "...was unregistered". Why: the release says only "This cooling tower was unregistered." It does not say the tower was never registered. https://www.nyc.gov/site/doh/about/press/pr2026/health-department-declares-ues-legionnaires-exposure-has-ended.page
- "from people who all lived within about a kilometer of one another" → "who all lived in Central Harlem, within a radius of about a kilometer". Why: CIDRAP says "within a 1-kilometer (roughly half-mile) radius." Two people inside a 1-km radius can live up to 2 km apart. https://www.cidrap.umn.edu/legionella/public-health-alerts-outbreak-legionnaires-disease-associated-cooling-tower-systems
- "the Independent Budget Office found the money for those inspectors was 30 percent higher" → "found the pool of money that funds them was 30 percent bigger". Why: Gothamist says "the pool of money that funds cooling-tower inspectors was 30% bigger." The department said the extra money went to other functions, so it was not money spent on inspectors. https://gothamist.com/news/nyc-lost-health-inspectors-in-years-preceding-harlem-legionnaires-disease-outbreak
- "New York has more than a decade of evidence that they help" → "more than a decade of experience suggesting they can help". Why: the only New York evidence the essay cites for ranking tools is Flowers's self-reported 13-to-70-percent figure. The essay itself says no one evaluated that figure, and the dossier found no evaluation of ALARM. SaTScan detects outbreaks; it does not rank inspections.
- "The one Health Department tool that touches restaurants" → "The one Health Department tool aimed at restaurants". Why: the 2025 PulseNet 2.0 entry says its cluster results go to foodborne epidemiologists, "with those investigations potentially resulting in restaurant inspections, closures, and food recalls." So PulseNet also touches restaurants, though it is not aimed at them. Source: jaw4-yuem 2025.
- "A ranking built on violation history would have flagged most of them" → "would probably have flagged most of them". Why: this is the writer's inference. Bisnow does not report how common public-health-hazard citations are among all towers (see judgment calls).

## Unverifiable, cut or softened
- No cuts. The softenings above cover the claims I could not support.
- I could not find whether the Upper East Side source tower was ever confirmed (results were due in September 2026; nothing found through Oct. 19). The essay does not claim a source, which is correct.
- I could not find whether the Chicago model is still in use. The essay uses the past tense, which is fine.

## Better statistic available
- The Upper East Side toll (now 94 cases and 11 deaths; fixed above).
- 2015 toll: Gothamist (Aug. 7, 2025) independently gives 138 sickened and 16 dead, which matches Varma. That backs up the dossier's only source, a guest essay (dossier C28).

## Confirmed
- 86 tools reported for 2025; Health Department 17, the most (Mayor's Office 12; Health Department also first in 2022-24) — https://data.cityofnewyork.us/resource/jaw4-yuem.json
- 13 of the 17 belong to the Public Health Laboratory and are genomic tools; BWA is used "for Legionella and PulseNet sequencing analyses" — jaw4-yuem 2025
- No Health Department tool ranks restaurants, buildings or towers for inspection — jaw4-yuem 2025
- SaTScan and syndromic surveillance appear in no year's list (searched all 218 rows for satscan, syndrom, cooling, spatial) — jaw4-yuem
- Chart rows: 13 lab, 1 ChoiceMaker ("duplicate immunization and lead records"), 1 ICE, 1 HELIX (GPT-4o), 1 Yelp classifier, 0 ranking — jaw4-yuem 2025
- Skyline stat 13 of 17 — jaw4-yuem 2025
- Yelp "sick score," manual review by staff, and "unable to receive data" since Jan. 31, 2025 — https://data.cityofnewyork.us/resource/jaw4-yuem.json?year=2025&tool_name=Improving%20Foodborne...
- "How often a restaurant is inspected depends on its inspection score"; 3-5 months at 28+ points — https://www.nyc.gov/assets/doh/downloads/pdf/rii/inspection-cycle-overview.pdf
- FDNY ALARM: first used 2019/11; ~330,000 BINs; scores 1 to 9; data sources as listed — jaw4-yuem 2025 (link returns the ALARM row)
- THRM: built by HPD, used by PEU since 2025/10 for door knocking; inputs as listed — jaw4-yuem 2025 (link returns the row)
- Flowers 2012 quote, "13 percent to 70 percent"; he was the mayor's analytics director — https://obamawhitehouse.archives.gov/blog/2012/09/27/efficiency-through-strategic-data-analysis
- July 25, 2025, software detected 8 positive tests; 118 confirmed cases; 7 deaths; one of two matching towers unregistered and missed sampling — CIDRAP link
- July 17, 2015, 8-case South Bronx cluster flagged "before any human public health monitor noticed it"; cooling tower; free SaTScan software — https://wwwnc.cdc.gov/eid/article/22/10/16-0097_article
- 2015: 138 sickened, 16 dead — Healthbeat (Varma, the outbreak's incident manager) and Gothamist Aug. 7, 2025
- 5,200 inspections in 2017; 1,167 as of June 2025 — https://gothamist.com/news/legionnaires-inspections-sank-to-near-record-low-ahead-of-nyc-outbreak
- 24 water ecologists, 13 fewer than 2022; 7 of 10 buildings not inspected in the past year — Gothamist Aug. 21, 2025
- Kansas City, Missouri; Kontokosta and Hong; low-income and minority neighborhoods less likely to report despite greater need — https://marroninstitute.nyu.edu/papers/bias-in-smart-city-governance...
- Chicago: 2015 deployment; over 15,000 establishments; code and data released; 7.438 days; 69% in the first half; two-month test set; IIT authors; purple cluster had the highest hit rate (0.406); odds 4.735; all 99 among the first 234 of 1,637; "not clear whether" the model helped — https://arxiv.org/abs/1910.04906 (PDF read)
- DOB gained access 29-34% each of the last five years (as of June 2023); about 47% in 2011 — https://www.cbsnews.com/newyork/news/new-york-city-illegally-converted-homes-apartments/
- 10 of 76 buildings never cited for a public health hazard since 2017 (Bisnow analysis, July 16, 2026) — Bisnow link
- 3,164 towers (53%) without an annual inspection as of April 17, 2026; 1,306 inspections by late June — Gothamist July 6, 2026
- Tower identified by matching DOB permit records against registration data — NYC Health, July 31, 2026
- Team expanded to 54 (Habitat, May 12, 2026) — Habitat link
- 31-day testing in effect since May 8, 2026, replacing a 90-day rule; still in effect — https://www.nyc.gov/site/doh/about/press/pr2026/new-cooling-tower-legionella-testing-regulations-take-effect.page
- Nearly 1,600 inspections in the first half of 2026, up 35%; emergency-department data quote — https://www.nyc.gov/site/doh/about/press/pr2026/second-death-in-ues-legionnaires-disease-cluster.page

## Judgment calls for the editor
- "The past data pointed the right way" plus the Bisnow 10-of-76 figure. The claim has no base rate. Bisnow reports about 12,000 public-hazard findings across 123,000 inspections since 2017, and roughly 5,000 to 6,000 towers. A large share of all towers has likely been cited at some point. If so, a past citation would barely tell the outbreak buildings apart from the rest. Bisnow's stronger line is that almost all Upper East Side buildings that tested positive had "at least five failing inspections within the last 12 months." Consider using that, or cutting the inference.
- Dek: "The software that tells New York's health inspectors where to look mostly works." The essay's own finding is that the Health Department has no inspection-ranking software. The software that worked (SaTScan) points investigators to outbreaks, not inspectors to buildings. "Mostly works" is opinion.
- Chicago: "The model had partly learned the inspectors." The paper offers two explanations: inspectors vary in strictness, or the places they cover vary in risk. It calls the feature unfair but does not prove which explanation holds. "Partly" softens the claim, but it is still interpretation.
- Kontokosta and Hong also found that these neighborhoods prioritize "more serious problems" when they report. The essay leaves that out. It is not wrong, but it is a nuance.
- Inspector counts: Habitat's 54 dates to May 2026. Gothamist (July 6, 2026) says the new hires were in training for "several months" and did no inspections in May or June. Readers may assume 54 people were inspecting.
- Two counts of 2026 inspections (the department's ~1,600 and Gothamist's 1,306) are both given. That is fair, but the gap is unexplained.
- Skyline stat leaves out the reporting year (2025). "Reading genomes" is loose: Pangolin assigns lineage names and PHYLOViZ visualizes trees. "Analyzing genomes" would be more exact.
