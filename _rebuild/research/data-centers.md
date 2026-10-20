# data-centers dossier
Checked through: Oct. 19, 2026

Method note: Primary PDFs (Power Trends 2026, 2026 Gold Book, both Con Edison reliability reports, the reliability contingency plan, the Siena crosstabs, the LBNL/Brattle deck) were downloaded with curl and converted to text locally, so quotes below are copied from the documents' own text layers. Table values were read from the PDF word layout. The shared web-search budget ran out partway through research (see "Could not confirm"); every URL below was either returned by a search or found as a link on a fetched page, and every one was fetched.

## Claims

C1. The New York Independent System Operator (NYISO) large-load interconnection queue grew from six projects totaling 1,045 MW in 2022 to 51 projects totaling nearly 12,670 MW as of May 1, 2026; NYISO forecasters expect as much as roughly 2,880 MW of that demand on the system by 2040.
- Source: Power Trends 2026, New York Independent System Operator, 2026 (p. 24) — https://www.nyiso.com/documents/d/guest/2026-power-trends
- Quote: "In 2022, six large load projects in the interconnection queue accounted for 1,045 MW." / "As of May 1, 2026, there are 51 large load projects in the queue which would collectively add nearly 12,670 MW of load to the grid." / "Our load forecasters anticipate that as much as roughly 2,880 MW of that new demand will be on the system by 2040."
- Last checked for newer developments: Oct. 19, 2026. Could not run a further search for a newer queue snapshot (search budget exhausted). Power Trends is the most recent NYISO annual summary I fetched.

C2. NYISO says the large-load queue is not only data centers; it includes semiconductor fabrication, advanced manufacturing and hydrogen production.
- Source: Power Trends 2026, NYISO (p. 8) — https://www.nyiso.com/documents/d/guest/2026-power-trends
- Quote: "While data centers are often highlighted, the NYISO's interconnection queue includes a variety of proposals, such as semiconductor fabrication, advanced manufacturing, hydrogen production, and other high demand uses."
- Last checked: Oct. 19, 2026.

C3. Executive Order 62 describes the queue as "nearly 12 gigawatts" of data center load requests, with more than eight gigawatts entering in 2025.
- Source: Executive Order No. 62, Office of the Governor, July 14, 2026 — https://www.governor.ny.gov/executive-order/no-62-establishing-temporary-moratorium-data-centers-new-york-while-state-develops
- Quote: "as of May 2026, nearly 12 gigawatts (12,000 megawatts) of data center load requests are in the New York Independent System Operator interconnection queue with more than eight gigawatts entering the queue in 2025 alone, representing accelerating demand growth and a need for action"
- Note: compare C2 and C5. The queue NYISO describes includes non-data-center loads, among them two Micron semiconductor projects (480 MW and 576 MW summer).
- Last checked: Oct. 19, 2026 (page fetched).

C4. NYISO's 2026 Gold Book forecasts zero megawatts of large-load demand in Zone J (New York City) in every year 2026 through 2041, for summer peak, winter peak and annual energy; the "All Loads" row (every queued or forecast project) also shows 0 for Zone J.
- Source: 2026 Load & Capacity Data Report (Gold Book), Table I-14, NYISO, released April 2026 (pp. 58-59) — https://www.nyiso.com/documents/20142/2226333/2026-Gold-Book-Public.pdf/a8fd42fe-5a8c-88cb-5052-f93dfd6423b8?t=1777471793334
- Quote (table header and notes): "Table I-14: Large Load Forecast / Reflects Cumulative Existing and Future Impacts of Large Load Projects"; "All Loads row lists maximum aggregated Zonal load for projects listed in Table IV-7 or included in the 2026 Gold Book large load forecasts." Values: Zone J column = 0 in every row of the Summer Peak, Winter Peak, Annual Energy and Flexible Load tables; All Loads row: "2,090 600 2,216 2,647 2,924 450 292 1,200 0 0 244 12,663" (zones A through K, then NYCA), J = 0.
- Gold Book release date quote: "Released April 2026"
- Last checked: Oct. 19, 2026.

C5. The Gold Book's list of load interconnection requests (current as of March 15, 2026) has 48 projects totaling 12,330.1 MW summer; none is in Zone J. The largest single request is St. Lawrence Infrastructure 2 at 1,935 MW. Micron's two entries are 480 MW and 576 MW.
- Source: Gold Book Table IV-7, pp. 132-133 (same URL as C4)
- Quote: "Tables IV-1a, IV-2, and IV-7 are current as of March 15, 2026."; "Total 12,330.1 12,196.1"; rows "1743 St. Lawrence Infrastructure, LLC St. Lawrence Infrastructure 2 D Jul-30 1,935.0 1,935.0"; "1536 Micron New York Semiconductor Manufacturing LLC White Pine Phase 1 C Jun-26 480.0 480.0"; "1627 Micron New York Semiconductor Manufacturing LLC Micron Fab 2 C Sep-30 576.0 507.0"
- My count of rows by zone: A 9, B 2, C 10, D 5, E 9, F 6, G 4, H 2, K 1, J 0 (48 total; sums to 12,330.1 MW, matching the table total).
- Last checked: Oct. 19, 2026.

C6. NYISO's queue thresholds: its load procedures cover loads over 10 MW at 115 kV or above, or 80 MW or more below 115 kV; smaller loads go through the local utility's procedures (so a small or mid-size data center in the city would not appear in the NYISO queue).
- Source: Gold Book Table IV-7 note 9 (same URL as C4)
- Quote: "NYISO Load interconnection procedures apply to Load interconnections that are either: a) greater than 10 MW connecting at a voltage level of 115 kV or above, or b) 80 MW or more connecting at a voltage level below 115 kV. Proposed Load interconnections that fall outside these criteria are not subject to the NYISO procedures, but instead fall under the applicable Transmission Owner's procedures."
- Second source (how the utility counts smaller new loads): Con Edison January 2026 Reliability Needs Report, Appendix A (URL in C9). Quote: "The bottom-up approach uses submitted applications for new and additional electric service. Each electric service request from a customer is accompanied by a load letter developed under the guidance of a licensed engineer." / "This vetting process is only done for new service requests above 100 kVA and additional service requests above 300 kVA."
- Last checked: Oct. 19, 2026.

C7. By 2040, NYISO's baseline large-load forecast (summer peak) is 2,880 MW statewide: 2,401 MW in Zones A-E (upstate), 292 MW in Zones F-I (all in Zone G), 0 in Zone J (New York City) and 187 MW in Zone K (Long Island). Zone C has the most, 1,050 MW.
- Source: Gold Book Table I-14, Summer Peak Demand by Zone (same URL as C4); zone grouping from Power Trends 2026.
- Quote (2040 row): "2040 440 411 1,050 435 65 0 292 0 0 0 187 2,880". Power Trends grouping: "Upstate Summer Installed Capacity, 2026 (Zones A-E)" and "Downstate Summer Installed Capacity, 2026 (Zones F-K)"; Power Trends glossary: "New York City (Load Zone J), Long Island (Load Zone K)".
- Arithmetic: A-E = 440 + 411 + 1,050 + 435 + 65 = 2,401; F-I = 0 + 292 + 0 + 0 = 292; J = 0; K = 187; total 2,880.
- Last checked: Oct. 19, 2026.

C8. NYISO's baseline forecast of New York City's (Zone J) summer coincident peak rises from 10,797 MW in 2026 to 11,340 MW in 2040, with none of that growth from large loads (C4).
- Source: Gold Book Table I-3a, p. 24 (same URL as C4)
- Quote: "Table I-3a: Baseline Summer Coincident Peak Demand, Historical & Forecast / Includes Impacts of Energy Saving Programs, Behind-the-Meter Generation, Electrification, & Large Loads"; Zone J values: 2026 "10,797"; 2040 "11,340".
- Last checked: Oct. 19, 2026. (Not used in essay; kept for the editor.)

C9. Con Edison's January 2026 Reliability Needs Report projected a New York City transmission shortfall of 125 MW in 2032 rising to 750 MW by 2036, attributed to economic growth, building and transportation electrification, generator retirements and emissions limits. The report does not mention data centers.
- Source: January 2026 Reliability Needs Report, Con Edison, issued Jan. 20, 2026, Case 25-E-0764 — https://www.coned.com/-/media/files/coned/documents/business-partners/business-opportunities/non-emitting-reliability-solutions/reliability-needs-report.pdf
- Quote: "As of January 2026, Con Edison projects a reliability need in the New York City 345/138 kV Transmission Load Area (TLA) of 125 MW in 2032, reaching 750 MW by 2036." / "shortfalls are driven principally by continued economic growth in New York City as well as building and transportation electrification aided by state and local programs ... On the supply side, the shortfalls are driven primarily by generation retirements and state law limiting electric generation emissions"
- "Data center" check: searched the full extracted text for "data cent" — zero matches. Also zero matches in the July 2026 update (C10). The July contingency plan (C11) mentions "new large loads" only generically.
- Last checked: Oct. 19, 2026. Superseded on the numbers by C10.

C10. Con Edison's July 2026 update (filed July 17, 2026) pushed the need back a year and shrank it: 125 MW in 2033, reaching 675 MW by 2036, with shortfalls growing to 850 MW by 2037 and 2,275 MW by 2045, driven by the same factors.
- Source: July 2026 Reliability Needs Report, Con Edison, filed July 17, 2026, Case 25-E-0764 (via DPS document system) — https://documents.dps.ny.gov/public/Common/ViewDoc.aspx?DocRefId=%7B406F719F-0000-C356-9276-8BD2CB4C8457%7D&DocTitle=CECONY+July+2026+Reliability+Needs+Update
- Quote: "As of July 2026, Con Edison projects transmission security needs in the New York City 345/138 kV Transmission Load Area (TLA) of 125 MW in 2033, reaching 675 MW by 2036." / "reaching 850 MW by 2037 and 2,275 MW by 2045." / "On the customer and demand side, shortfalls are driven principally by continued economic growth in New York City as well as building and transportation electrification aided by state and local programs that advance the goals established by the Climate Leadership and Community Protection Act, offset partially by the adoption of distribution-connected battery energy storage systems and continued increases in energy efficiency. On the supply side, the shortfalls are driven primarily by generation retirements and state law limiting electric generation emissions"
- Last checked: Oct. 19, 2026. This is the "first semiannual update"; the next would be due around January 2027.

C11. Con Edison's July 17, 2026 New York City Reliability Contingency Plan proposes a portfolio led by battery storage; it says more than 1,000 MW of transmission-connected storage projects are in the NYISO queue in Zone J and developers have applied to connect more than 2,700 MW of distribution-connected storage. It identifies NYISO as the transmission system operator for the state. Public comments were due Oct. 13, 2026.
- Source: New York City Reliability Contingency Plan, Con Edison, filed July 17, 2026 — https://documents.dps.ny.gov/public/Common/ViewDoc.aspx?DocRefId=%7BB069719F-0000-C151-ADF1-09DCC3314B92%7D&DocTitle=CECONY+Reliability+Contingency+Plan ; comment notice: Department of Public Service — https://dps.ny.gov/node/30281
- Quote: "Beyond projects already under contract, there are more than 1,000 MW of transmission-connected storage projects in the NYISO interconnection queue in Zone J." / "Developers have applied to interconnect more than 2,700 MW of distribution-connected storage projects in the Company's service territory" / "The New York Independent System Operator (NYISO), the transmission system operator for New York State, also identified transmission security margin needs affecting New York City (NYISO Zone J)." / "both the Company and the NYISO identified the same factors driving the needs: increasing electric demand, the anticipated retirement of aging fossil-fuel generators, and delays in bringing new renewable supply online."
- DPS page quote: "Comment period begins for the proposal filed by Consolidated Edison Company of New York, Inc. (Con Edison) on July 17, 2026 (the Petition), seeking approval to implement aspects of a reliability contingency plan." (The Oct. 13 comment deadline came from search-result text; I did not see the date on the fetched page text, so the essay does not use it.)
- Last checked: Oct. 19, 2026. No Commission order on the plan found (search budget exhausted; see Could not confirm).

C12. NYISO's short-term reliability studies found New York City's margins deficient as early as summer 2026; the 2026 Quarter 1 study said keeping the Gowanus and Narrows peaker units running is necessary; the Champlain Hudson Power Express began delivering energy in May 2026 but energizing it alone does not fully resolve the deficiency.
- Source: Power Trends 2026, NYISO (pp. 19-20) — https://www.nyiso.com/documents/d/guest/2026-power-trends
- Quote: "the 2026 Quarter 1 STAR found that reliability margins remain deficient through the five-year horizon absent permanent solutions, with the need now beginning as early as summer 2026." / "the 2026 Quarter 1 STAR found that energizing CHPE alone does not fully resolve the identified deficiency in New York City over the longer-term horizon." / "May 2026: CHPE began delivering energy to the New York system in May 2026" / "the 2026 Quarter 1 STAR concluded that continued operation of certain existing peaker resources seeking to retire, including the Gowanus and Narrows units, is necessary to maintain reliability." / (p. 20) "The 2024 RNA identified a reliability need in New York City that was expected to materialize later in the planning horizon, driven by forecasted demand growth, anticipated generator retirements, and constrained delivery into a dense load pocket." / Con Edison January 2026 report (URL in C9): "Con Edison continues to model the Champlain Hudson Power Express (CHPE) HVDC connection from Quebec, Canada to New York City as in-service starting in 2026."
- Last checked: Oct. 19, 2026.

C13. In the June 2025 heat wave, old gas turbines produced about 2.5 percent of the energy from New York City power plants but 28 percent of nitrogen oxide emissions.
- Source: Power Trends 2026, NYISO (p. 6) — same URL as C12
- Quote: "Old gas turbines contributed only about 2.5% of the energy generated from New York City-based power plants during that period but caused 28% of NOx emissions."
- Last checked: Oct. 19, 2026.

C14. Executive Order 62, signed July 14, 2026, directs the Department of Environmental Conservation (DEC) to hold in abeyance discretionary permit applications for building or expanding a data center that were not deemed complete before the order, until the Department of Public Service (DPS) submits its final generic environmental impact statement; it does not apply to local permits. The order covers facilities that consume or can consume 50 MW or more, and exempts facilities primarily used for manufacturing, research, education (including Empire AI) or medical care.
- Source: Executive Order No. 62 — https://www.governor.ny.gov/executive-order/no-62-establishing-temporary-moratorium-data-centers-new-york-while-state-develops
- Quote: "Until DPS submits its report of the final Generic Environmental Impact Statement and associated findings statement, the Department of Environmental Conservation (DEC), consistent with its obligations under SEQRA, is directed to hold in abeyance all applications for any discretionary permit, approval, license, or similar form of permission for the construction or expansion of a data center that (1) are or may hereafter be pending before DEC and (2) have not been determined to be complete by DEC before the date of this Executive Order." / "This provision does not apply to permits, approvals, licenses, or similar forms of permission from local governments." / "(3) consume or can consume 50 megawatts of energy or more." / "a facility that is primarily used for manufacturing, research (including but not limited to quantum computing research or biomedical research), education (... and the Empire AI consortium ...), or the provision of medical care, is not covered by this definition" / "G I V E N under my hand ... this fourteenth day of July in the year two thousand twenty-six."
- Last checked: Oct. 19, 2026. Order text unchanged on fetch; no amendment found (could not search further).

C15. The governor's release says the environmental review "will take up to a year" and the pause lasts during it; it also says the Energize NY proceeding "will require data centers to either pay more for their energy or supply their own." Hochul said data center development "threatens to hike up utility bills."
- Source: "First Statewide Moratorium on New Hyperscale Data Centers Launched by Governor Kathy Hochul," Office of the Governor, July 14, 2026 — https://www.governor.ny.gov/news/first-statewide-moratorium-new-hyperscale-data-centers-launched-governor-kathy-hochul
- Quote: "The Governor is temporarily pausing State environmental permits for up to one year in order to build a nation-leading regulatory framework that protects ratepayers, the environment, the energy grid and communities across the state." / "During the development of this GEIS, which will take up to a year, a moratorium will be in place and the Department of Environmental Conservation (DEC) will not issue any discretionary permits not already deemed complete." / "Earlier this year, the Governor directed the Department of Public Service (DPS) to begin the Energize NY proceeding, which will require data centers to either pay more for their energy or supply their own" / "As data center development threatens to hike up utility bills, deplete our natural resources, and create uncertainty for New Yorkers, it's my responsibility to take action and lead,"
- Last checked: Oct. 19, 2026.

C16. EO 62 states that upgrade costs for large loads "should not be paid for by every-day New Yorkers," that data center load growth "will require the procurement of additional energy supply," and that loads that may not materialize create risk for ratepayers. It names the large-load proceeding as Case 26-E-0045.
- Source: Executive Order No. 62 (same URL as C14)
- Quote: "it is the policy of New York State that the cost of electric system upgrades required to provide electric utility service to large loads should not be paid for by every-day New Yorkers" / "the growth of Statewide electric load caused by data centers challenges the clean energy targets of the State and will require the procurement of additional energy supply to serve this incremental electric load" / "data center development can be unpredictable and creates potential risk for utilities and ratepayers, including when infrastructure investments are made in anticipation of loads that may not fully materialize" / "Case 26-E-0045, Proceeding on Motion of the Commission to Address Interconnection Reforms for Large Loads"
- Last checked: Oct. 19, 2026.

C17. The Legislature passed the Responsible Data Center Development Act (A11560/S10642) on June 4, 2026; it would impose a one-year DEC permit moratorium for new data centers of 20 MW or more. As of Oct. 19, 2026, the Senate site shows no delivery to the governor, signature or veto.
- Source 1: New York State Senate, A11560 bill page — https://www.nysenate.gov/legislation/bills/2025/A11560 (fetched Oct. 19, 2026; status "Passed Senate & Assembly"; Jun 04, 2026 actions "passed assembly" and "passed senate"; no "delivered to governor," "signed" or "vetoed" action listed). Also S10642 page — https://www.nysenate.gov/legislation/bills/2025/S10642
- Source 2: Greenberg Traurig alert via National Law Review, June 12, 2026 — https://natlawreview.com/article/new-york-legislature-passes-data-center-moratorium-bill-awaits-governors-approval
- Quote (NLR): "The bill imposes a one-year moratorium on the issuance of permits and approvals by the Department of Environmental Conservation (DEC) for new large data centers (≥20 MW)." / "both the New York Senate and Assembly passed the Responsible Data Center Development Act, A11560/S10642. The bill will not become law unless signed by Gov. Kathy Hochul."
- Note: the nysenate.gov pages were read through WebFetch's summarizer (direct curl was blocked by a bot check), so the action lines are as the summarizer quoted them.
- Last checked: Oct. 19, 2026.

C18. Empire State Development has released the Community Investment Framework required by EO 62; it is voluntary and recommends a community investment benchmark of $1 million per megawatt of a data center's utility demand.
- Source: Community Investment Framework, Empire State Development (undated page) — https://esd.ny.gov/communityinvestmentframework
- Quote: "Governor Kathy Hochul announced the release of the nation's first statewide Host Community Investment Framework for Data Center Development, delivering on a commitment made through Executive Order No. 62" / "The voluntary Framework establishes a recommended community investment benchmark of $1 million for every megawatt of utility demand associated with a data center project"
- Last checked: Oct. 19, 2026. Release date not shown on page.

C19. Siena poll, Sept. 11-17, 2026, 1,144 likely voters (MOE +/- 3.9 percent); the data center question had a sample of 991. Statewide 25 percent support building large data centers in their area after the moratorium and 63 percent oppose; New York City 23 percent support, 62 percent oppose; suburbs 29/59; upstate 23/66.
- Source: Siena Poll crosstabs, Siena Research Institute, Sept. 2026 (p. 7) — https://sri.siena.edu/wp-content/uploads/2026/09/SNY-September-2026-Poll-Crosstabs-9-23-26.pdf
- Quote: "September 11 - 17, 2026 / 1144 Likely New York Voters / MOE +/- 3.9%" / "Q32. Switching gears, New York State has a one-year moratorium on new large data centers. When the moratorium expires next year, would you support or oppose building large data centers in your area of the state? Sample size=991" / "Support 25% ... NYC 23% Suburbs 29% Upstate 23%"; "Oppose 63% ... NYC 62% Suburbs 59% Upstate 66%" (values read from the table columns Total ... NYC, Suburbs, Upstate).
- Last checked: Oct. 19, 2026.

C20. New York's average residential electricity price was 29.90 cents per kilowatt-hour in July 2026, against 18.31 cents for the U.S.; New York's was 26.22 cents in July 2025.
- Source: Electric Power Monthly, Table 5.6.A, U.S. Energy Information Administration, data for July 2026, released Sept. 24, 2026 — https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a
- Quote (table row): "New York | 29.90 | 26.22 | 24.18 | 23.05 | ..." ; "U.S. Total | 18.31 | 17.45 | ..." (Residential July 2026, July 2025 first). Page header: "Data for July 2026"; "September 24, 2026"; next release "October 23, 2026".
- Note: LEADS cited 29.5 cents for June 2026; the current table shows July. The state figure is statewide, not New York City.
- Last checked: Oct. 19, 2026.

C21. The Public Service Commission approved a Con Edison rate plan on Jan. 22, 2026: average electric bills up 3.5 percent in 2026, 3.2 percent in 2027 and 3.1 percent in 2028.
- Source: "Con Ed bills are going up as regulators approve a rate hike," Rosemary Misdary, Gothamist, Jan. 22, 2026 — https://gothamist.com/news/con-ed-bills-are-going-up-as-regulators-approve-a-rate-hike
- Quote: "The Public Service Commission unanimously approved a rate hike for Con Edison customers on Thursday despite strong public opposition and mounting concerns over New York's affordability crisis.Average bills for electricity customers will go up by 3.5% this year, 3.2% in 2027 and 3.1% in 2028."
- Last checked: Oct. 19, 2026. Primary PSC order not fetched (search budget). Not used in essay text beyond context; see draft.

C22. Lawrence Berkeley National Laboratory and the Brattle Group found that over 2019-2024, states with the highest load growth generally saw real retail prices fall, but warned the pattern may not hold where supply is constrained; in PJM, the capacity auction price jumped from $29 to $270 per megawatt-day between the 2024/2025 and 2025/2026 delivery years, with data center load growth among the factors.
- Source: "Recent Retail Electricity Price Trends: What Do We Know… or Think We Know?" Wiser et al., LBNL and Brattle, October 2025 — https://eta-publications.lbl.gov/sites/default/files/2025-10/presentation_retail_price_trends_drivers.pdf
- Quote: "Over the past 5 years, states with the highest load growth generally saw retail electricity prices decline in real terms" / "Past relationships need not persist: recent growth was modest outside ~10 states and supply was generally adequate; higher growth can increase prices if supply and delivery infrastructure is constrained and costly—as is currently the case in many states" / "PJM's capacity auction clearing price increased dramatically between the 2024/2025 delivery year and the 2025/2026 delivery year due to a confluence of factors…" with factors listed including "Data Center Load Growth"; mechanism: "greater load leads to fixed costs being spread over greater demand, reducing per unit costs"; chart labels "$29/MW-day" and "$270/MW-day".
- Secondary corroboration (residential caveat): American Public Power Association, Nov. 4, 2025 — https://www.publicpower.org/periodical/article/state-level-load-growth-has-reduced-average-retail-electricity-prices-report — quoting the report: "this negative load-price relationship was pronounced when considering overall average retail prices but was smaller and lost statistical significance when analyzing residential prices alone"
- Last checked: Oct. 19, 2026. Did not fetch the 2026 edition mentioned in search snippets.

C23. NYISO warns that without coordinated planning for large loads, the system may lean on expensive resources and emergency actions, "placing upward pressure on electricity costs statewide."
- Source: Power Trends 2026, NYISO (p. 9) — same URL as C1
- Quote: "Without proper alignment, the system may need to rely more on expensive resources and emergency actions, placing upward pressure on electricity costs statewide."
- Last checked: Oct. 19, 2026.

C24. Con Edison's January 2026 report says a 175 MW reduction in capacity sales from PJM increased New York City's reliability need.
- Source: Con Edison January 2026 Reliability Needs Report (same URL as C9)
- Quote: "which reduced the reliability need, offset in part by a 175 MW reduction in capacity sales from PJM, which increased the need."
- Note: the report does not say why PJM sales fell. The essay does not attribute a cause.
- Last checked: Oct. 19, 2026.

C25. Google reported in August 2025 that the median Gemini apps text prompt uses 0.24 watt-hours; the figure excludes image and video generation, and Google said the median prompt used 33 times more energy in May 2024 than in May 2025.
- Source: "In a first, Google has released data on how much energy an AI prompt uses," Casey Crownhart, MIT Technology Review, Aug. 21, 2025 — https://www.technologyreview.com/2025/08/21/1122288/google-gemini-ai-energy/
- Quote: "Google has just released a technical report detailing how much energy its Gemini apps use for each query. In total, the median prompt—one that falls in the middle of the range of energy demand—consumes 0.24 watt-hours of electricity, the equivalent of running a standard microwave for about one second." / "This report was also strictly limited to text prompts, so it doesn't represent what's needed to generate an image or a video." / "The median Gemini prompt used 33 times more energy in May 2024 than it did in May 2025, according to Google."
- Note: Google's own technical report could not be reached (see Could not confirm). The figure is Google's and is attributed as such.
- Last checked: Oct. 19, 2026.

C26. Epoch AI estimated in February 2025 that a typical ChatGPT (GPT-4o) query uses roughly 0.3 watt-hours and called the widely cited 3 watt-hour figure likely an overestimate.
- Source: "How much energy does ChatGPT use?" Josh You, Epoch AI, Feb. 7, 2025 — https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use
- Quote: "A commonly-cited claim is that powering an individual ChatGPT query requires around 3 watt-hours of electricity, or 10 times as much as a Google search." / "We find that typical ChatGPT queries using GPT-4o likely consume roughly 0.3 watt-hours, which is ten times less than the older estimate."
- Last checked: Oct. 19, 2026.

C27. The International Energy Agency (IEA) estimates data centers used about 1.5 percent of the world's electricity in 2024 (415 TWh) and projects about 945 TWh by 2030.
- Source: Energy and AI, Executive Summary, IEA, 2025 — https://www.iea.org/reports/energy-and-ai/executive-summary
- Quote: "Data centres accounted for around 1.5% of the world's electricity consumption in 2024, or 415 terawatt-hours (TWh)." / "Data centre electricity consumption is set to more than double to around 945 TWh by 2030."
- Last checked: Oct. 19, 2026.

C28. Int. 3-2026, introduced Jan. 29, 2026 by Speaker Julie Menin (with Council Members Farah N. Louis, Elsie Encarnación and Frank Morano), would require the director of the Office of Long-Term Planning and Sustainability to identify potential sites for data centers in the city and recommend law or zoning changes to facilitate building them; it is in the Committee on Environmental Protection and Waterfronts with no further action.
- Source: Legistar file Int 0003-2026, New York City Council (via intro.nyc redirect) — https://intro.nyc/0003-2026 ; also returned by the Council's Legistar API (MatterId 77408, last modified Feb. 16, 2026)
- Quote: "Status: Committee Committee: Committee on Environmental Protection and Waterfronts On agenda: 1/29/2026" / "Sponsors: Julie Menin , Farah N. Louis , Elsie Encarnación , Frank Morano" / "The Director would be required to identify potential sites in the city where data centers could operate and consider the impact that data centers would have on the electric grid, water supply, utility rates, long-term sustainability and energy plans, economy, and nearby residents' quality of life. The Director would also be required to recommend changes to local law or the zoning resolution to facilitate the building of data centers" / "Int. No. 3 By The Speaker (Council Member Menin)"
- Predecessor: Int 1485-2025, same title, "Filed (End of Session)" Dec. 31, 2025.
- Last checked: Oct. 19, 2026 (history shows only the Jan. 29 introduction and referral).

C29. Google's own technical report (Aug. 21, 2025) gives the median Gemini Apps text prompt as 0.24 Wh and reports a 33x reduction over one year. (Added by fact-checker; replaces the secondhand MIT Technology Review link for C25.)
- Source: "Measuring the environmental impact of delivering AI at Google Scale," Elsworth, Huang, Patterson et al., arXiv:2508.15734, submitted Aug. 21, 2025 — https://arxiv.org/abs/2508.15734
- Quote (abstract): "the median Gemini Apps text prompt consumes 0.24 Wh of energy" / "a 33x reduction in energy consumption"
- Last checked: Oct. 19, 2026.

C30. As of Oct. 19, 2026, the Assembly's bill record for A11560 lists no action after June 4, 2026 (no delivery to the governor, signature, veto or chapter). Advocates were still urging Hochul to sign it in August.
- Source 1: New York State Assembly bill page — https://nyassembly.gov/leg/?default_fld=&leg_video=&bn=A11560&term=2025&Summary=Y&Actions=Y ; last listed actions: "06/04/2026 PASSED SENATE" / "06/04/2026 RETURNED TO ASSEMBLY"
- Source 2: News 12 Hudson Valley, Aug. 6, 2026 — https://hudsonvalley.news12.com/2026/08/06/calls-grow-in-rockland-for-gov-hochul-to-sign-responsible-data-center-development-act/34qAwRVQLhsgib6qlmEGPq ; quote: "The legislation has already passed both the New York State Assembly and Senate."
- Note: a Tom's Hardware headline says New York "enacts one-year data center ban on projects larger than 50 megawatts"; the 50 MW figure matches EO 62, not the 20 MW bill.
- Last checked: Oct. 19, 2026.

C31. The Gold Book's large-load forecast covers projects interconnecting to the transmission system, including some not in the NYISO queue.
- Source: 2026 Gold Book (same URL as C4), pp. 1, 13 and Table I-14 notes
- Quote: "The baseline forecasts also incorporate projected load increases from existing and future large load projects interconnecting to the transmission system." / "Expected load growth from certain large load projects in the NYISO IQ, along with impacts from projects not in the queue" / "Table I-14 also includes impacts for loads not listed in the NYISO Interconnection Queue as of March 15, 2026."
- Last checked: Oct. 19, 2026.

## Could not confirm
- Google's August 2025 technical report itself (the primary source for 0.24 Wh). The shared web-search budget ran out before I could locate it by search, and I did not type a remembered URL. The essay attributes the figure to Google via MIT Technology Review. Editor may want to swap in the paper link.
- Status of the Energize NY / large-load proceeding (Case 26-E-0045) and of DPS's 60-day working group and 90-day report under EO 62: no fetched source; search budget exhausted. Essay says only what EO 62 directs.
- Whether the PSC has acted on Con Edison's July 17, 2026 contingency plan, and the exact comment deadline (Oct. 13, 2026 appeared only in a search snippet).
- Any attribution by a New York regulator, NYISO or Con Edison of current New York bills to data centers. I found none in the documents fetched, but could not search widely, so the essay does not claim that none exists; it describes the state's own language, which frames the risk as future.
- Whether any data centers below NYISO's thresholds are seeking Con Edison service in the city (would be in Con Edison's "traditional new business" forecast, which does not break them out).
- PSC primary order on the Con Edison rate case (relied on Gothamist).
- The specific cause of the 175 MW drop in PJM capacity sales to New York City.

## Notes for other essays
- `fiscal`: EO 62 and the governor's push to "repeal sales tax exemptions for massive data centers" (C15 release) bears on state, not City, revenue; probably out of lane for both.
- `preemption`: the governor's release lists the DIGIT office and RAISE-related oversight ("The DIGIT Office will first focus on regulating large frontier AI developers") — useful lead, unverified beyond the release text.
- `jobs`: the ESD framework notes data centers' "comparatively lower number of permanent jobs per megawatt of electric demand" (C18 page).
- Siena's September 2026 poll (same crosstabs) has other AI-adjacent items possibly useful to `deepfakes` (election-confidence questions Q34-Q36).
