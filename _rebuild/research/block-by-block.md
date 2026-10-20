# block-by-block dossier
Checked through: Oct. 19, 2026

## Claims

C1. City agencies reported 86 algorithmic tools for 2025 under Local Law 35 of 2022; the Health Department reported 17, more than any other agency (Mayor's Office 12, Office of Technology and Innovation 8). Earlier years: 31 (2022), 46 (2023), 55 (2024), with the Health Department first each year (9, 16, 16).
- Source: Algorithmic Tools Compliance Report, NYC Open Data, dataset jaw4-yuem — https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=1000 (dataset page: https://data.cityofnewyork.us/City-Government/Algorithmic-Tools-Compliance-Report/jaw4-yuem)
- Quote: Query run Oct. 19, 2026 returned 218 rows. Count by `year`: 2022 = 31, 2023 = 46, 2024 = 55, 2025 = 86. 2025 by `agency`: "Department of Health and Mental Hygiene" 17, "Mayor's Office" 12, "Office of Technology and Innovation" 8, "NYC Public Schools" 7.
- Last checked for newer developments: dataset metadata shows rows last updated 2026-04-10; no 2026 reporting year yet.

C2. Of the Health Department's 17 entries for 2025, 13 belong to the Public Health Laboratory and handle genetic sequencing (aligning, assembling and comparing genomes, e.g., Bowtie2, BWA, GATK, Guppy, IQTREE, kSNP4, Minimap2, MAFFT, Pangolin, PHYLOViZ, PulseNet 2.0, Spades, Vsearch). The other four are ChoiceMaker (duplicate-record matching), the Immunization Calculation Engine, HELIX (a generative-AI tool on GPT-4o for staff) and the foodborne-illness social-media classifier. None ranks restaurants, buildings, blocks or cooling towers for inspection.
- Source: same dataset, jaw4-yuem, 2025 rows where agency = Department of Health and Mental Hygiene.
- Quote: department field for the 13 lab tools: "Disease Control – Public Health Laboratory" / "Disease Control - Public Health Laboratory". BWA purpose: "This tool is used for Legionella and PulseNet sequencing analyses." HELIX: "HELIX is a generative tool that allows agency staff to ask general questions based on data available in the OpenAI GPT-4o model." ChoiceMaker: "ChoiceMaker (CM) is a record-matching tool that identifies duplicate records belonging to the same individual."
- Last checked: Oct. 19, 2026 query.

C3. The Health Department's one restaurant-related tool, built with Columbia University, scores Yelp reviews for signs of food poisoning; staff review flagged reviews; since Jan. 31, 2025, the department has been unable to receive data for it.
- Source: jaw4-yuem, 2025 row "Improving Foodborne Disease Outbreak Detection by Incorporating Complaints Identified in Social Media Data."
- Quote: "The classifiers assign a 'sick score' to each Yelp review indicating the likelihood that the review pertains to foodborne illness." / "Each review with a sick score greater than or equal to a threshold value are reviewed and annotated by DOHMH foodborne disease epidemiology and environmental health staff" / updated_desc: "Since January 31, 2025, DOHMH has been unable to receive data for this tool. Columbia University and DOHMH staff have been unable to resolve the issue without additional resources." Also: "As of April 2023, the tool no longer uses data from Twitter (X) due to application programming interface (API) changes."
- Last checked: Oct. 19, 2026 query (2025 is the latest reporting year).

C4. Neither the SaTScan cluster-detection system nor emergency-department syndromic surveillance appears among the Health Department's Local Law 35 entries in any year, 2022-2025.
- Source: jaw4-yuem, full download.
- Quote: Searched all Health Department rows (all years) for "SaTScan," "syndrom," "emergency department," "scan," "cluster," "spatial." No tool named SaTScan or syndromic surveillance; "cluster" matches only phylogenetic lab tools and the foodborne tool. (A search of all rows for "syndrom" and "SaTScan" returned nothing.)
- Note: The law's definition of a reportable tool may exclude some statistical methods; the essay says only that they are not listed.
- Last checked: Oct. 19, 2026.

C5. The Health Department runs SaTScan daily on 35 reportable diseases; on July 17, 2015, the automated analysis flagged a cluster of eight legionellosis cases in the South Bronx before any staff member noticed it; the source turned out to be a cooling tower.
- Source: Greene SK, Peterson ER, Kapell D, Fine AD, Kulldorff M., "Daily Reportable Disease Spatiotemporal Cluster Detection, New York City, New York, USA, 2014–2015," Emerging Infectious Diseases, October 2016 — https://wwwnc.cdc.gov/eid/article/22/10/16-0097_article
- Quote: "Each day, the New York City Department of Health and Mental Hygiene uses the free SaTScan software to apply prospective space–time permutation scan statistics to strengthen early outbreak detection for 35 reportable diseases." / "This automated analysis detected the second largest US outbreak of community-acquired legionellosis ... identifying a cluster of 8 cases centered in the South Bronx on Friday, July 17, 2015 (RI = 500 days) ... before any human public health monitor noticed it. On Monday, July 20, an increase in cases was independently noticed by BCD staff members ... to identify and remediate the outbreak source, a cooling tower."
- Also: "Key to the system's success is a strong informatics infrastructure ... knowledgeable epidemiologists to interpret signals, and adequate outbreak investigation resources."
- Last checked: CIDRAP 2026 summary (C7) confirms the department's software detected the 2025 cluster, so the system is still in use.

C6. The 2015 South Bronx outbreak sickened 138 people and killed 16.
- Source: Jay K. Varma, "New York City Legionnaires' disease outbreak: Cooling towers, regulations, and lessons from 2015," Healthbeat (guest essay), Aug. 20, 2025 — https://www.healthbeat.org/newyork/2025/08/20/legionnaires-disease-outbreak-lessons-learned-inspections
- Quote: "In total, 138 people were sickened and 16 died" / "a cooling tower on top of a new hotel was the primary source"
- Note: other sources give 133 cases or 12 deaths; Varma (former city deputy health official) used. Not checked against a city primary source (search budget exhausted).

C7. On July 25, 2025, Health Department software detected eight positive Legionella tests among Central Harlem residents living within about a kilometer of each other; the outbreak reached 118 confirmed cases and seven deaths; one of the two tower systems whose bacteria closely matched the patients' was unregistered and had missed required sampling.
- Source: "Public Health Alerts: Outbreak of Legionnaires' disease associated with cooling tower systems in Central Harlem," CIDRAP, June 23, 2026 (summarizing a NEJM Evidence Public Health Alerts report by Health Department authors, https://evidence.nejm.org/doi/full/10.1056/EVIDe2500346, paywalled/403) — https://www.cidrap.umn.edu/legionella/public-health-alerts-outbreak-legionnaires-disease-associated-cooling-tower-systems
- Quote: "On July 25, 2025, NYCHD software detected eight reports of positive urine antigen test results for [Legionella pneumophila] serogroup 1. All eight patients lived in Central Harlem within a 1-kilometer (roughly half-mile) radius." / "Afterward, the NYCHD identified 129 reports and confirmed 118 cases." / "Officials recorded seven outbreak-related deaths" / "Based on whole-genome sequencing, two isolates from separate cooling tower systems appeared to be highly related to the original eight patients' clinical isolates. One of these was the unregistered tower. This tower had major lapses in routine monitoring, lacked water treatment steps, and had missed required [Legionella] sampling."
- Last checked: Oct. 19, 2026; Gothamist (July 6, 2026) reports the two source towers were at Harlem Hospital and a Skanska-managed construction site for a city public health lab (not used in essay).

C8. The Health Department inspected 5,200 cooling towers in 2017 and only 1,167 as of June 2025; a spokesperson blamed a lack of inspectors; about 1,900 of 4,928 registered towers had not been inspected since 2023.
- Source: Joe Hong, "Legionnaires' inspections sank to near-record low ahead of NYC outbreak," Gothamist, Aug. 7, 2025 — https://gothamist.com/news/legionnaires-inspections-sank-to-near-record-low-ahead-of-nyc-outbreak
- Quote: "In 2017, the first year of inspections, the agency inspected 5,200 cooling towers and issued over 48,000 violations to building owners." / "This year, the department is on track to complete less than half that number of inspections – just 1,167 as of June, according to data provided by the health department." / "Chantal Gomez, a spokesperson for the Department of Health and Mental Hygiene, said the decrease in inspections was due to a lack of inspectors at the agency." / "about 1,900 of the 4,928 registered towers in the city have not been inspected by the Department of Health and Mental Hygiene since 2023"
- Last checked: superseded for 2026 by C12, C13.

C9. The Health Department had 24 cooling-tower inspectors ("water ecologists") in August 2025, 13 fewer than in 2022, though the Independent Budget Office found the funding pool 30 percent bigger; seven of the 10 buildings at the center of the Harlem outbreak had no city inspection in the prior year.
- Source: Joe Hong and Elizabeth Kim, "NYC lost health inspectors in years preceding Harlem Legionnaires' disease outbreak," Gothamist, Aug. 21, 2025 — https://gothamist.com/news/nyc-lost-health-inspectors-in-years-preceding-harlem-legionnaires-disease-outbreak
- Quote: "New York City's health department lost more than a third of its cooling tower inspectors in the three years leading up to the current deadly outbreak" / "according to the Independent Budget Office, the pool of money that funds cooling-tower inspectors was 30% bigger this year compared to 2022." / "The department currently has 24 water ecologists who inspect cooling towers — 13 fewer than in 2022." / "seven of the 10 buildings at the center of the outbreak — some of which are run directly by the city — had no inspections over the past year." / Spokesperson: "It would be wrong to say this unfortunate circumstance could have been prevented through more staff and inspections"
- Last checked: C10 for 2026 staffing.

C10. By May 2026 the cooling-tower inspection team had grown to 54.
- Source: "City Doubles Cooling Tower Inspectors to Prevent Another Legionnaire's Outbreak," Habitat, May 12, 2026 (citing Gothamist) — https://www.habitatmag.com/Publication-Content/Building-Operations/2026/May-2026/cooling-tower-inspectors-legionnaires
- Quote: "The total number of inspectors stood at just 24, down from 37 in 2022. The health department hired six new cooling tower inspectors in the immediate aftermath of last year's outbreak, and the team has expanded to 54."
- Last checked: Gothamist July 6, 2026 says new hires were in training for several months and did no inspections in May or June.

C11. Since May 8, 2026, owners must test operating cooling towers for Legionella every 31 days, up from every three months, under a law passed after the Harlem outbreak.
- Source: Gothamist, "NYC Legionella inspections rose only gradually before latest Legionnaires' cluster in Manhattan," July 6, 2026 — https://gothamist.com/news/nyc-legionella-inspections-rose-only-gradually-before-latest-legionnaires-cluster-in-manhattan
- Quote: "The health department implemented new requirements in May for building owners to test their cooling towers for legionella bacteria every 31 days, up from the previous requirement of every three months. The new requirements were created by city lawmakers in response to last summer's outbreak." / "The 31-day testing mandate went into effect on May 8"
- Last checked: no reporting found of repeal (search Oct. 19, 2026).

C12. The Health Department says it completed nearly 1,600 cooling-tower inspections in the first half of 2026, 35 percent more than a year earlier, aims to inspect every registered tower each year, and watches hospital emergency-department data for early signs of cases.
- Source: "NYC Health Department Reports Second Death in Upper East Side Legionnaires' Disease Cluster ...," NYC Health press release, July 18, 2026 — https://www.nyc.gov/site/doh/about/press/pr2026/second-death-in-ues-legionnaires-disease-cluster.page
- Quote: "To promote compliance, the Health Department aims to inspect every registered cooling tower each year. During the first six months of 2026, inspectors completed nearly 1,600 cooling tower inspections, a 35% increase over the same period in 2025." / "The Health Department is also not seeing concerning trends in hospital emergency department data, which can identify potential cases before they are formally diagnosed."
- Note: conflicts with Gothamist's count (C13). Essay gives both.

C13. As of April 17, 2026, 3,164 cooling towers (53 percent) had gone more than a year without a city inspection; by late June 2026 the city had inspected 1,306 of nearly 6,000 towers that year, by Gothamist's count.
- Source: Gothamist, July 6, 2026 (as C11).
- Quote: "3,164 cooling towers (53%) had not received an annual inspection by the city as of April 17." / "Now, as of late June of this year city employees have only inspected 1,306 of the nearly 6,000 cooling towers in the city since the start of 2026. It's only a slight increase from 2025, when the city inspected 1,156 cooling towers over the same period" / spokesperson "forecasts" ... "which would bring the total to 1,420 for this year, 23% more than last year."

C14. The 2026 Upper East Side cluster reached 92 cases and seven deaths by July 30; the tower with the most violations, at 300 E. 83rd St., was unregistered, and investigators found it by comparing Department of Buildings construction permits with the registry.
- Source: "NYC Health Department Declares Upper East Side Legionnaires' Disease Cluster Exposure Has Ended," NYC Health press release, July 31, 2026 — https://www.nyc.gov/site/doh/about/press/pr2026/health-department-declares-ues-legionnaires-exposure-has-ended.page
- Quote: "As of July 30, there have been 92 cases of Legionnaires' disease associated with the cluster; 79 people have been hospitalized; five remain hospitalized; and, unfortunately, seven people have died." / "The cooling tower with the most violations is located at 300 E. 83rd St. This cooling tower was unregistered, and the Health Department investigators identified it by comparing Department of Buildings construction permit records with cooling tower registration data and conducting targeted inspections of potentially unregistered cooling towers." / "Inspectors found that the owners had failed to develop a required maintenance program and plan, document water treatment, or conduct any Legionella sampling for more than a year."
- Last checked: Oct. 19, 2026; release says sequencing results expected end of August; source not confirmed in essay.

C15. Of 76 buildings ordered to remediate their towers in the Upper East Side cluster, only 10 had never been cited for a public health hazard since 2017, according to a Bisnow analysis of Health Department data.
- Source: Bisnow, "One in ten cooling tower inspections find public health hazards related to Legionella," July 16, 2026 — https://www.bisnow.com/new-york/news/property-management/one-in-ten-cooling-tower-inspections-find-public-health-hazards-related-to-legionella-135457
- Quote: "Only 10 of the 76 buildings ordered to remediate their cooling towers have never been cited for a public health hazard violation since 2017, according to [Bisnow's analysis]" / "Since 2017, 70% of inspections of the 5,000 registered cooling towers across the five boroughs have resulted in violations"
- Note: the press release later says 83 buildings were ordered; the 76 figure is Bisnow's as of July 16.

C16. Chicago's Department of Public Health deployed a model in 2015 to rank about 15,000 food establishments for inspection; in the city's simulation on two months of test data, it found restaurants with critical violations 7.4 days earlier on average (standard deviation 25.2 days) and put 69 percent of them in the first half of inspections.
- Source: Vinesh Kannan, Matthew A. Shapiro, Mustafa Bilgic, "Hindsight Analysis of the Chicago Food Inspection Forecasting Model," AAAI Fall Symposium 2019, arXiv:1910.04906 — https://arxiv.org/abs/1910.04906
- Quote: "In 2015, CDPH deployed a machine learning model to schedule inspections of establishments based on their likelihood to commit critical food code violations." / "According to these simulated metrics, the CDPH model reduces the time to find restaurants with at least one critical violation by 7.438 days on average with a standard deviation of 25.156 days. The first half of inspections scheduled by the CDPH model includes 69% of restaurants with at least one critical violation." / test set "1,637 inspection records from September 2014 through October 2014"
- Last checked: could not confirm whether Chicago still uses the model (no 2024-2026 source found).

C17. The Chicago model's most influential variable was which group of inspectors had last visited the restaurant; a restaurant last inspected by the strictest group got modeled odds of a critical violation 4.735 times higher, and all 99 such restaurants in the test set were scheduled among the first 234 of 1,637 inspections.
- Source: Kannan et al. 2019 (as C16).
- Quote: "Finding 1. Using sanitarian clusters as predictor variables unfairly changes predicted risk. The most influential model feature is the sanitarian cluster who conducted the most recent inspection." / "if a food establishment was last inspected by a purple sanitarian, the modeled odds ratio of that food establishment committing a critical violation for the next inspection is 4.735, even if the food establishment had no critical or serious violations in the previous inspection. In the two-month test set of 1,637 food establishment inspections, the model scheduled all 99 Chicago food establishments last inspected by purple sanitarians (6.0% of the total test set) to be visited among the first 234 inspections" / "Given that food establishments have no control over the sanitarian inspecting them, this information should not factor into their risk score, let alone be the determining factor."

C18. The reviewers could not determine whether the Chicago model sped up discovery of violations; hit rates in both routine and complaint inspections rose after 2015.
- Source: Kannan et al. 2019.
- Quote: "Contrary to our expectations, and shown in Figure 4, the hit rates of both canvass and complaint inspections increased after 2015." / "Based on this, it is not clear whether or not the deployment of the model has been effective in discovering violations earlier."

C19. The Fire Department's ALARM model, in use since November 2019, scores about 330,000 buildings from 1 (highest risk) to 9 to schedule fire inspections, using dispatch data, building characteristics, 311 calls, nearby felony crimes and census data.
- Source: jaw4-yuem, 2025 row "RBIS (Risk Based Inspection Program); ALARM (A Learning Approach to Risk Modeling)," Fire Department.
- Quote: "These scores are used to schedule our Fire Operations building inspections within the inspectable population of buildings in the city (~330,000 Building Identification Numbers), as a part of the Risk-Based Inspection Program (RBIS)." / "The ALARM risk score utilizes data from our Fire and Emergency Medical Services dispatch systems, building characteristic data, 311 calls, felony crimes, census data and civilian injury data." / "This is combined with a civilian injury or death risk ratio for the building which is based on building characteristics, incident data and nearby felony crimes to create a risk score (range is one to nine)" / date_first_use "2019/11".
- Last checked: Oct. 19, 2026; no published evaluation found.

C20. Under Mayor Bloomberg, City analysts ranked illegal-conversion complaints using owners' finances, complaint history, construction date and neighborhood demographics; the official who ran the effort reported that the vacate rate on inspections rose from 13 percent to 70 percent.
- Source: Michael Flowers, "Efficiency through Strategic Data Analysis," White House blog (archived), Sept. 27, 2012 — https://obamawhitehouse.archives.gov/blog/2012/09/27/efficiency-through-strategic-data-analysis
- Quote: "Every year, the City receives thousands of complaints about these properties" / "The data used, including the property owner's financial condition, building's history of complaints, construction date, and neighborhood demographics all showed a link to fire risk. Strategic data targeting allowed building inspectors to prioritize properties that required immediate investigation and streamline the process for examining complaints. As a result of this efficiency, high-priority complaints were addressed faster, resources were strategically deployed, and the rate for vacating illegal conversions jumped from 13 percent to 70 percent with no increase in the operating budget."
- Note: self-reported; no independent evaluation found.

C21. The Department of Buildings received more than 13,800 illegal-conversion complaints in 2022 and in each of the five prior years got inside only 29 to 34 percent of the time.
- Source: Tim McNicholas, "Data reveals Department of Buildings' struggle to inspect illegally converted homes," CBS New York, June 3, 2023 — https://www.cbsnews.com/newyork/news/new-york-city-illegally-converted-homes-apartments/
- Quote: "Last year alone, the city's Department of Buildings fielded more than 13,800 complaints about illegally converted buildings." / "Each year for the last five years, inspectors have been able to gain access 29-34% of the time, but it wasn't always that way; data obtained by CBS2 shows in 2011, they gained access about 47% of the time."
- Last checked: nothing newer found (not searched after budget ran out).

C22. A study of Kansas City, Missouri's 311 data found low-income and minority neighborhoods less likely to report street and nuisance problems despite greater need.
- Source: Constantine Kontokosta and Boyeong Hong, "Bias in smart city governance: How socio-spatial disparities in 311 complaint behavior impact the fairness of data-driven decisions," Sustainable Cities and Society, vol. 64, 2021 — https://marroninstitute.nyu.edu/papers/bias-in-smart-city-governance-how-socio-spatial-disparities-in-311-complaint-behavior-impact-the-fairness-of-data-driven-decisions
- Quote: "low-income and minority neighborhoods are less likely to report street condition or "nuisance" issues" (abstract; fuller abstract per fetch: "while having greater objective and subjective need")
- Note: only the clause quoted above was captured verbatim; the "greater need" part comes from the abstract summary. Essay paraphrases.

C23. The Housing Preservation and Development (HPD)-built Tenant Harassment Risk Model, used since October 2025 by the Public Engagement Unit to pick buildings for door knocking, scores buildings from violations, 311 complaints, building finances and eviction filings; it covers buildings with at least 11 units at least half rent regulated.
- Source: jaw4-yuem, 2025 row "Tenant Harassment Risk Model (THRM)," Department of Social Services / Public Engagement Unit.
- Quote: "The Tenant Harassment Risk Model (THRM) was developed by Housing Preservation and Development (HPD) to identify buildings where tenants were more likely to experience harassment" / "PEU uses the THRM model to identify buildings for proactive tenant outreach (door knocking)" / "The data includes variables such as violations, 311 requests/complaints, building financials, eviction filings." / "PEU received scores for residential buildings with at least 11 units and in which at least 50 percent of units are rent regulated." / date_first_use "2025/10"

C24. A 2019 model built with the Public Engagement Unit estimated it could find 59 percent more buildings where tenants face harassment than the existing outreach method.
- Source: Teng Ye et al., "Using machine learning to help vulnerable tenants in New York City," COMPASS 2019 (ACM) — https://experts.umn.edu/en/publications/using-machine-learning-to-help-vulnerable-tenants-in-new-york-cit/
- Quote: "Our best-performing model can potentially help TSU find 59% more buildings where tenants face landlord harassment."
- Note: a projection from historical data, not a field result. Not used in essay body (cut for length).

C25. New York's restaurant inspection schedule is set by rule: a restaurant's last score determines when it is next inspected, and one scoring 28 or more points is next inspected in three to five months.
- Source: "Food Service Establishments: Inspection Cycle and Letter Grading," NYC Health — https://www.nyc.gov/assets/doh/downloads/pdf/rii/inspection-cycle-overview.pdf
- Quote: "How often a restaurant is inspected depends on its inspection score. Restaurants that receive a low score on the initial or first inspection in the inspection cycle are inspected less often than those that receive a high score." / "3–5 months if initial score 28+ points"

C26. (Added by fact-checker.) By Aug. 28, 2026, the Upper East Side cluster totaled 94 cases and 11 deaths, per Health Commissioner Alister Martin; no source tower had been confirmed, with matching results expected in September.
- Source: NBC New York, "Eleven deaths linked to Legionnaires' outbreak on Upper East Side," Aug. 28, 2026 — https://www.nbcnewyork.com/news/health/eleven-deaths-linked-legionnaires-outbreak-upper-east-side/6541699/
- Quote: "That brings the total to 94 cases and 11 deaths." / "our scientists continue working to match samples from cooling towers with samples from patients."
- Last checked: Oct. 19, 2026; no later source announcement found.

C27. (Added by fact-checker.) The 31-day testing rule took effect May 8, 2026, replacing a 90-day requirement.
- Source: NYC Health press release, "New Legionella Testing Regulations for Cooling Towers Go Into Effect Citywide As Summer Nears," May 8, 2026 — https://www.nyc.gov/site/doh/about/press/pr2026/new-cooling-tower-legionella-testing-regulations-take-effect.page
- Quote: "For the first time today, new citywide regulations issued by the NYC Health Department are in effect." / owners must test "every 31 days when the cooling tower is operating."

C28. (Added by fact-checker.) Gothamist independently gives the 2015 toll as 138 sickened and 16 dead.
- Source: Gothamist, Aug. 7, 2025 (as C8).
- Quote: "After a Legionnaires' outbreak that sickened 138 people and killed 16 a decade ago, city law requires building owners to test for Legionella bacteria every three months."

## Could not confirm
- Chicago model still in use in 2026 — no source found; essay uses past tense for the 2015 deployment only.
- FDNY "FireCast" 60 risk factors, 50,000 inspections a year (Bloomberg-era press coverage) — the 2013 mayoral press release would not load (nyc.gov redirects old releases); not used.
- Any independent evaluation of FDNY ALARM/RBIS — none found; a city press release reportedly said the Mayor's Office of Data Analytics validated it, but I could not open it.
- A New York City Health Department rodent-inspection targeting model — none found in jaw4-yuem or elsewhere; rodents left out of the essay.
- History of the Health Department's emergency-department syndromic surveillance system (start date, scope) — web search budget ran out before I could fetch a primary page; essay uses only the July 18, 2026 press release's mention of emergency department data.
- Final source of the 2026 Upper East Side cluster — sequencing results were due end of August 2026; not confirmed.
- Exact 2015 outbreak toll from a city primary source; 138/16 is from Varma's Healthbeat essay.
- Kontokosta-Hong full abstract verbatim (only one clause captured).

## Notes for other essays
- `the-inventory`: Health Department's 17 Local Law 35 entries are mostly genomic lab software; the Yelp foodborne tool has received no data since Jan. 31, 2025 but stays listed; SaTScan cluster detection is not listed at all. HELIX (GPT-4o staff tool, 2025/11) is also a new entry. DEP "Mufflers Noise Violations" camera tool (2025/01) may fit `streets`.
- `shelter-score`: ACS "Housing Prioritization" model (2025 row) ranks prevention-services families for 100 housing vouchers; DSS Homebase Risk Assessment Questionnaire (2012/06).
- `the-desk`: HELIX, a Health Department generative-AI tool on GPT-4o, outputs "potentially shared with the public."
