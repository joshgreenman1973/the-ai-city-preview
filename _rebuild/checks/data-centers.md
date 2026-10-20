# data-centers fact-check
Checked: Oct. 19, 2026. Statements checked: 72.

Source files downloaded to `_rebuild/checks/pdfs/data-centers/` (Gold Book, Power Trends 2026, Con Edison January and July 2026 reliability reports, Con Edison contingency plan, Siena crosstabs, LBNL/Brattle deck, EIA table), with text extractions alongside. Governor's pages are behind a Cloudflare check for curl and were read with WebFetch.

## Errors found and fixed
- "One table tracks 'large loads': data centers, chip plants and other customers big enough to need the grid operator's own study before they plug in." → "...data centers, chip plants and other big new customers connecting to the high-voltage transmission system." Why: the Gold Book says the forecast covers "large load projects interconnecting to the transmission system" and Table I-14 "also includes impacts for loads not listed in the NYISO Interconnection Queue," so it isn't limited to projects that go through NYISO's study. https://www.nyiso.com/documents/20142/2226333/2026-Gold-Book-Public.pdf/a8fd42fe-5a8c-88cb-5052-f93dfd6423b8?t=1777471793334
- "Of the 48 projects in the Gold Book's list, none is in the five boroughs" → added "current as of March 15". Why: it sits right after the May 1 count of 51 projects, and the two dates were running together. Table IV-7 is "current as of March 15, 2026." (same Gold Book URL)
- "So the zero means no hyperscale campuses are headed for the city" → "So the zero means no large campus is in the queue or the forecast for the city". Why: the Gold Book shows what is queued or forecast, not what may still be coming. (same Gold Book URL)
- "community benefits framework ... which suggests host towns ask for $1 million per megawatt" → "community investment framework ... which sets a voluntary benchmark of $1 million per megawatt for host communities." Why: EO 62 and ESD call it the Community Investment Framework. ESD says it is "voluntary" and "a recommended community investment benchmark of $1 million for every megawatt of utility demand," meant for local governments and IDAs. https://esd.ny.gov/communityinvestmentframework
- "researchers at Lawrence Berkeley National Laboratory" / "The same Berkeley Lab team" → "researchers at Lawrence Berkeley National Laboratory and the Brattle Group" / "The same team". Why: the deck lists both organizations as authors. https://eta-publications.lbl.gov/sites/default/files/2025-10/presentation_retail_price_trends_drivers.pdf
- Int. 3: "would have the Office ... identify potential sites ... and recommend zoning changes 'to facilitate the building of data centers.'" → "would have the Office ... study the feasibility and impact of siting data centers in the city, including their effects on the grid and utility rates, identify potential sites and recommend changes to local law or zoning 'to facilitate the building of data centers.'" Why: the old wording dropped the bill's main purpose. The Legistar summary says the director would "study and report on the feasibility and impact" and "consider the impact that data centers would have on the electric grid, water supply, utility rates..." Leaving that out made the essay's proposed amendment look more novel than it is. https://intro.nyc/0003-2026 (Legistar MatterId 77408)
- Epoch AI: "called the widely repeated 3 watt-hour figure an overestimate" → "...likely an overestimate." Why: Epoch says the figure "is likely an overestimate." https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use
- Google 0.24 Wh: replaced the MIT Technology Review link with Google's own paper, https://arxiv.org/abs/2508.15734 ("the median Gemini Apps text prompt consumes 0.24 Wh of energy," submitted Aug. 21, 2025). Changed "though that excludes image and video generation" to "though that covers text prompts only, not image or video generation," which matches the paper's scope ("text prompt").

## Unverifiable, cut or softened
- None cut. Softened the "no hyperscale campuses are headed for the city" line (above).

## Better statistic available
- None needed. EIA's July 2026 figures (29.90 cents for New York, 18.31 cents for the U.S.) are still the latest. The next release is Oct. 23, 2026, so the editor should recheck before publication if it runs after that date.

## Confirmed
- Gold Book released April 2026; Table I-14 Zone J = 0 in every year 2026–2041 (summer, winter, energy, flexible; also lower/baseline/higher forecasts and the All Loads row) — Gold Book PDF pp. 58–59
- Skyline stat "0 megawatts of new large-load demand forecast for New York City through 2041" — Gold Book Table I-14
- Chart: 2040 summer peak A–E 440+411+1,050+435+65 = 2,401; F–I 0+292+0+0 = 292; J 0; K 187; NYCA 2,880 — Gold Book Table I-14 p. 58
- Table IV-7: 48 projects, 12,330.1 MW summer, current as of March 15, 2026; none in Zone J (my count: A9 B2 C10 D5 E9 F6 G4 H2 K1); largest St. Lawrence Infrastructure 2, 1,935 MW; Micron 480 + 576 MW — Gold Book pp. 132–133
- NYISO thresholds: >10 MW at ≥115 kV or ≥80 MW below; others go through Transmission Owner — Gold Book Table IV-7 note 9
- 2022: six projects, 1,045 MW; May 1, 2026: 51 projects, nearly 12,670 MW; roughly 2,880 MW by 2040 — https://www.nyiso.com/documents/d/guest/2026-power-trends
- Queue includes semiconductor fabrication, advanced manufacturing, hydrogen production — Power Trends 2026
- STAR: deficient "as early as summer 2026"; Gowanus and Narrows continued operation necessary; CHPE began delivering May 2026; CHPE alone doesn't resolve longer-term deficiency; "dense load pocket" — Power Trends 2026 pp. 19–20
- June 2025 heat wave: old gas turbines ~2.5% of NYC-plant energy, 28% of NOx — Power Trends 2026 p. 6
- "placing upward pressure on electricity costs statewide" — Power Trends 2026 p. 9
- Con Edison semiannual update requirement ("update that analysis every six months"; "first semiannual update"); filed July 17, 2026; 125 MW in 2033 to 675 MW by 2036, 850 MW 2037, 2,275 MW 2045; causes as listed — https://documents.dps.ny.gov/public/Common/ViewDoc.aspx?DocRefId=%7B406F719F-0000-C356-9276-8BD2CB4C8457%7D&DocTitle=CECONY+July+2026+Reliability+Needs+Update
- Zero occurrences of "data cent" in the January report, the July update and the contingency plan (the plan mentions only "new large loads" generically) — local text search of all three PDFs
- January report: 125 MW 2032 to 750 MW 2036; 175 MW cut in PJM capacity sales increased need — https://www.coned.com/-/media/files/coned/documents/business-partners/business-opportunities/non-emitting-reliability-solutions/reliability-needs-report.pdf
- Contingency plan filed July 17, 2026; >1,000 MW transmission-connected storage in Zone J queue; >2,700 MW distribution-connected storage applications — https://documents.dps.ny.gov/public/Common/ViewDoc.aspx?DocRefId=%7BB069719F-0000-C151-ADF1-09DCC3314B92%7D&DocTitle=CECONY+Reliability+Contingency+Plan
- EO 62 signed July 14, 2026; DEC abeyance of discretionary permit applications not deemed complete, until DPS final GEIS; local permits excluded; 50 MW threshold; manufacturing/research/education (Empire AI)/medical exemptions; "nearly 12 gigawatts" of data center load requests; "additional energy supply"; "loads that may not fully materialize"; Case 26-E-0045; ESD framework directive — https://www.governor.ny.gov/executive-order/no-62-establishing-temporary-moratorium-data-centers-new-york-while-state-develops
- Release: GEIS "will take up to a year"; "threatens to hike up utility bills"; Energize NY "pay more for their energy or supply their own" — https://www.governor.ny.gov/news/first-statewide-moratorium-new-hyperscale-data-centers-launched-governor-kathy-hochul
- A11560/S10642 passed both houses June 4, 2026; 20 MW threshold, one-year DEC permit moratorium; no delivery to governor, signature or veto on either the Senate or the Assembly record as of Oct. 19 — https://www.nysenate.gov/legislation/bills/2025/A11560 ; https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=A11560&term=2025&Summary=Y&Actions=Y ; News 12, Aug. 6, 2026 (still unsigned)
- EIA July 2026 residential: NY 29.90, U.S. 18.31 cents/kWh — https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a
- PJM $29 → $270/MW-day (2024/25 to 2025/26), data center load growth among factors; high-load-growth states saw real prices fall; fixed-cost mechanism; caveat on constrained supply — LBNL/Brattle deck
- Siena Sept. 11–17, 2026, likely voters; Q32 NYC 23 support / 62 oppose, upstate 23/66 — https://sri.siena.edu/wp-content/uploads/2026/09/SNY-September-2026-Poll-Crosstabs-9-23-26.pdf
- Epoch ~0.3 Wh (Feb. 7, 2025) — epoch.ai
- IEA ~1.5% in 2024 (415 TWh), more than double to ~945 TWh by 2030 — https://www.iea.org/reports/energy-and-ai/executive-summary
- Int. 3-2026 introduced Jan. 29, 2026 by Menin (Louis, Encarnación, Morano co-sponsors); status "Committee"; no action since referral — Legistar via nyc-council API

## Judgment calls for the editor
- Int. 3 already asks the office to weigh effects on utility rates and the grid. With the corrected description, the "A smaller, better bill" section still reads, but its pitch (study what upstate loads cost Con Edison customers) overlaps with what the bill partly does already. The editor may want to sharpen what is actually new: statewide costs passed through to city bills, filings with the PSC, and the yearly megawatt tracker.
- Legistar quirk: Int. 3's referral action text says it went to the "Committee to Combat Hate," while the matter record lists the Committee on Environmental Protection and Waterfronts. The essay says only "in committee," which is safe.
- Case 26-E-0045 and Energize NY: EO 62 cites both but doesn't say whether they are one proceeding or two. The essay treats them as two venues. That's plausible, but I couldn't confirm it.
- LBNL finding: the American Public Power Association's summary of the report notes that the negative load-price relationship "was smaller and lost statistical significance when analyzing residential prices alone." The essay's sentence follows a residential-price comparison. Consider adding "overall" ("overall retail prices fell") if you want to be strict.
- "Micron's two chip plants alone account for more than 1,000 megawatts of it": 480 + 576 = 1,056 MW summer in the March 15 list, which is accurate. The winter figure would be 987 MW. Fine as written, since summer is the standard.
- "about a second of microwave time" is MIT Technology Review's comparison, not Google's. It holds arithmetically (0.24 Wh ≈ 0.86 s at 1,000 W).
- Siena Q32 sample was 991 of the 1,144 likely voters. The essay doesn't state a sample size, so this is fine.
- A Tom's Hardware headline ("New York enacts one-year data center ban on projects larger than 50 megawatts") could be misread as the bill being signed. The 50 MW figure shows it describes EO 62. Both legislative records show no action after June 4.
