---
slug: block-by-block
title: Where To Send the Inspectors
dek: Health Department software flagged the 2015 and 2025 Legionnaires' clusters after people were sick. Preventing the next one takes inspectors and a way to find unregistered cooling towers.
section: The Promise
category: Public Health
skyline_stat: "13 of the Health Department's 17 algorithmic tools reported for 2025 are lab software for analyzing genomes"
skyline_value: 13
skyline_claim: C2
---

On July 25, 2025, software at the New York City Health Department flagged eight positive Legionella tests from people who all lived in Central Harlem, within a radius of about a kilometer. The outbreak that followed reached 118 confirmed cases and seven deaths, [according to the department's own investigators](https://www.cidrap.umn.edu/legionella/public-health-alerts-outbreak-legionnaires-disease-associated-cooling-tower-systems).

The department had seen this before. On July 17, 2015, its daily automated scan flagged eight cases in the South Bronx "[before any human public health monitor noticed it](https://wwwnc.cdc.gov/eid/article/22/10/16-0097_article)." That outbreak, traced to a cooling tower, [sickened 138 people and killed 16](https://www.healthbeat.org/newyork/2025/08/20/legionnaires-disease-outbreak-lessons-learned-inspections).

In both summers the software found the cluster once people were already sick. What broke down in 2025 was the work meant to keep towers clean beforehand. The department inspected 5,200 cooling towers in 2017 and [only 1,167 by June 2025](https://gothamist.com/news/legionnaires-inspections-sank-to-near-record-low-ahead-of-nyc-outbreak), Gothamist found. By August 2025 it had 24 inspectors, [13 fewer than in 2022](https://gothamist.com/news/nyc-lost-health-inspectors-in-years-preceding-harlem-legionnaires-disease-outbreak), though the Independent Budget Office found that the pool of money that funds them was 30% bigger than in 2022. Seven of the 10 buildings at the center of the outbreak had not been inspected in the prior year.

The most useful municipal algorithms are dull ones that tell a small staff where to look first. New York has used rankings like that since the Bloomberg years, though research for this essay turned up no independent test of how well they work, and the Health Department has none for cooling towers. Any such list would be worth something only if the City had inspectors to send and a way to see towers that nobody had registered. The Harlem outbreak tested both: inspections had fallen, and one of the two towers linked to it was unregistered.

## What the City's inventory shows

Under Local Law 35 of 2022, City agencies must list their algorithmic tools. For 2025 they reported 86, and the Health Department reported 17, [more than any other agency](https://data.cityofnewyork.us/City-Government/Algorithmic-Tools-Compliance-Report/jaw4-yuem). Thirteen of the 17 belong to the Public Health Laboratory and assemble, align or compare genomes, including the software the lab uses for Legionella sequencing. None ranks restaurants, buildings or cooling towers for inspection. The scan that caught the 2015 Bronx cluster, run on free software called SaTScan, does not appear in any year's list.

The one Health Department tool aimed at restaurants reads Yelp reviews and gives each a "sick score" for signs of food poisoning, which staff then check by hand. Its 2025 entry says that since Jan. 31, 2025, the department "[has been unable to receive data for this tool](https://data.cityofnewyork.us/resource/jaw4-yuem.json?year=2025&tool_name=Improving%20Foodborne%20Disease%20Outbreak%20Detection%20by%20Incorporating%20Complaints%20Identified%20in%20Social%20Media%20Data)."

Restaurant inspections are ranked anyway, by rule. "[How often a restaurant is inspected depends on its inspection score](https://www.nyc.gov/assets/doh/downloads/pdf/rii/inspection-cycle-overview.pdf)," the department explains; one that scores 28 points or more is inspected again in three to five months. That is a one-variable risk model, though nobody calls it artificial intelligence.

Other agencies rank buildings with statistical models. Since 2019, the Fire Department's model, called ALARM (A Learning Approach to Risk Modeling), has scored about 330,000 buildings from 1 to 9 to [schedule fire inspections](https://data.cityofnewyork.us/resource/jaw4-yuem.json?year=2025&agency=Fire%20Department&computation_type=Scoring), drawing on dispatch records, building data, 311 calls, nearby felony crimes and census data. Since October 2025, the Public Engagement Unit has used a model built by the Department of Housing Preservation and Development (HPD) to [pick buildings for door knocking](https://data.cityofnewyork.us/resource/jaw4-yuem.json?year=2025&tool_name=Tenant%20Harassment%20Risk%20Model%20%28THRM%29), scoring them on violations, 311 complaints, building finances and eviction filings.

The approach goes back to the Bloomberg administration, when City analysts ranked complaints about illegally converted buildings. Michael Flowers, who ran that work, wrote in 2012 that "[the rate for vacating illegal conversions jumped from 13 percent to 70 percent](https://obamawhitehouse.archives.gov/blog/2012/09/27/efficiency-through-strategic-data-analysis)." The figure is his own, and research for this essay turned up no independent evaluation of it or of ALARM.

## The case against ranking

The main objection is that a model trained on complaints learns who complains. In Kansas City, Missouri, Constantine Kontokosta and Boyeong Hong found that low-income and minority neighborhoods were [less likely to report street and nuisance problems](https://marroninstitute.nyu.edu/papers/bias-in-smart-city-governance-how-socio-spatial-disparities-in-311-complaint-behavior-impact-the-fairness-of-data-driven-decisions) even though their need was greater. Both ALARM and the harassment model take in 311 data. A model that leans on 311 can end up sending inspectors to the neighborhoods that call most.

Chicago shows another way a model can absorb the habits of the people who collect its data. In 2015, Chicago's Department of Public Health began ranking its roughly 15,000 food establishments by their odds of a critical violation, and it published the model's code and training data. In the City's own simulation on two months of data, the model found such restaurants 7.4 days sooner on average and put 69% of them in the first half of the schedule. Then researchers at the Illinois Institute of Technology [took it apart](https://arxiv.org/abs/1910.04906).

The model's most influential variable was which group of inspectors had last visited a restaurant. A place last seen by the group with the highest hit rate got 4.7 times the modeled odds of a critical violation, even if its last inspection found nothing serious, and all 99 such places in the test set landed among the first 234 of 1,637 inspections. The paper allows two readings: that group's inspectors were stricter, or the restaurants on their routes were riskier. Either way, the authors argued, a restaurant has no control over who inspects it, so that variable should not set its score. They also could not tell whether the model had found violations any sooner, since hit rates rose after 2015 on complaint inspections as well as routine ones.

The Bloomberg conversion model had a narrower blind spot: it sorted buildings someone had already called about. Ranking also did nothing to get inspectors through the door. On illegal-conversion complaints, Department of Buildings inspectors got inside only [29 to 34% of the time](https://www.cbsnews.com/newyork/news/new-york-city-illegally-converted-homes-apartments/) in each of the five years before 2023, down from about 47% in 2011.

## The Upper East Side, 2026

In the summer of 2026, a second cluster hit the Upper East Side. By late August it had reached 94 cases and 11 deaths, [the health commissioner said](https://www.nbcnewyork.com/news/health/eleven-deaths-linked-legionnaires-outbreak-upper-east-side/6541699/). Of the 76 buildings ordered to clean their towers by mid-July, only 10 [had never been cited for a public health hazard since 2017](https://www.bisnow.com/new-york/news/property-management/one-in-ten-cooling-tower-inspections-find-public-health-hazards-related-to-legionella-135457), according to a Bisnow analysis of Health Department data.

That looks like a signal a ranking could use, but it may be a weak one. Bisnow found that 70% of tower inspections since 2017 had turned up violations of some kind, and it did not report how many of the city's other towers had been cited for a public health hazard. Without that comparison, nobody can say whether a past citation set the outbreak buildings apart.

The plainer problem was that most towers went unvisited. As of April 17, 2026, 53% of the city's towers had gone more than a year [without a city inspection](https://gothamist.com/news/nyc-legionella-inspections-rose-only-gradually-before-latest-legionnaires-cluster-in-manhattan).

And some towers were on no list at all. In Harlem, one of the two towers whose bacteria closely matched the patients' was unregistered and had missed required testing. On the Upper East Side, the tower with the most violations, at 300 E. 83rd St., was unregistered too. Investigators found it, the department said, "[by comparing Department of Buildings construction permit records with cooling tower registration data](https://www.nyc.gov/site/doh/about/press/pr2026/health-department-declares-ues-legionnaires-exposure-has-ended.page)." Neither set of records depends on anyone calling 311.

The City has since added staff and rules. The inspection team grew to [54 by May 2026](https://www.habitatmag.com/Publication-Content/Building-Operations/2026/May-2026/cooling-tower-inspectors-legionnaires), though Gothamist reported in July that [the new hires](https://gothamist.com/news/nyc-legionella-inspections-rose-only-gradually-before-latest-legionnaires-cluster-in-manhattan) faced several months of training and had done no inspections in May or June. Since May 8, 2026, owners must test running towers every 31 days instead of every three months. The department says inspectors completed [nearly 1,600 inspections](https://www.nyc.gov/site/doh/about/press/pr2026/second-death-in-ues-legionnaires-disease-cluster.page) in the first half of 2026, 35% more than in the same period of 2025. Gothamist's count is lower: 1,306 of the city's nearly 6,000 towers inspected by late June.

## Two small fixes

First, the Health Department should run its permit-to-registry match every month instead of waiting for an outbreak. Both datasets already belong to the City. The result would be a short list of addresses where a tower probably exists and nobody is testing it.

Second, every agency that ranks inspections, starting with the Fire Department's ALARM, HPD's harassment model and any tower-ranking tool the Health Department builds, should send one visit in 10 to sites chosen at random or never inspected before. It should report the violation rate on those visits next to the rate on ranked visits in its annual Local Law 35 filing. Chicago needed outside researchers and published code to learn that its model leaned hardest on which inspectors had last visited. A random slice would let New York check its own models against its own field data every year.

If the random visits find violations about as often as the ranked ones, the model is adding little. If they find far fewer, the City will have evidence from its own inspectors that the ranking works.

<!-- CHART
title: None of the Health Department's 17 listed algorithmic tools ranks sites for inspection
dek: The Health Department's 17 entries in the City's 2025 Local Law 35 inventory of algorithmic tools, grouped by what they do
type: bar
data:
| Use | Tools |
|---|---|
| Lab software for sequencing and comparing genomes (Public Health Laboratory) | 13 |
| Record matching (duplicate immunization and lead records) | 1 |
| Immunization schedule calculator | 1 |
| Generative artificial intelligence assistant for staff (GPT-4o) | 1 |
| Food-poisoning classifier for Yelp reviews (no data since Jan. 31, 2025) | 1 |
| Ranking sites for inspection | 0 |
source: NYC Open Data, Algorithmic Tools Compliance Report (jaw4-yuem), 2025 reporting year, queried Oct. 19, 2026
claims: C1, C2, C3
-->

<!-- CLAIM MAP
paragraph 1: C7
paragraph 2: C5, C6
paragraph 3: C5, C7, C8, C9
paragraph 4: argument (supported by C2, C7, C8, C9, C19, C20)
paragraph 5 (What the City's inventory shows): C1, C2, C4
paragraph 6: C3
paragraph 7: C25
paragraph 8: C19, C23
paragraph 9: C20, C19
paragraph 10 (The case against ranking): C22, C19, C23
paragraph 11: C16
paragraph 12: C17, C18 (two readings of the inspector variable per fact-check judgment call on Kannan et al.)
paragraph 13: C20, C21
paragraph 14 (The Upper East Side, 2026): C26, C15
paragraph 15: C15 (base-rate caveat per fact-check judgment call)
paragraph 16: C13
paragraph 17: C7, C14
paragraph 18: C10, C11, C27, C12, C13
paragraph 19 (Two small fixes): C14 (recommendation)
paragraph 20: C19, C23, C1, C16, C17 (recommendation)
paragraph 21: recommendation
-->
