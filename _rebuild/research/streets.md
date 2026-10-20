# streets dossier
Checked through: Oct. 19, 2026

Note on method: the WebFetch tool returns quotations in chunks of 125 characters or fewer. Where a quote below is split, the chunks are joined with " ... " exactly as returned. Web search budget for the session ran out late in the research; no searches were run for 2026 bus-camera errors after that point (see Could not confirm).

## Claims

C1. In late 2024 the MTA's bus-mounted cameras mistakenly ticketed about 3,800 vehicles on the M79 and Bx35 routes, more than 870 of them legally parked.
- Source: "MTA's A.I. bus cameras issue thousands of mistaken parking violations," Chris Glorioso, NBC New York I-Team, Nov. 26, 2024 (updated Nov. 27, 2024) — https://www.nbcnewyork.com/investigations/mta-bus-camera-issue-mistake-parking-violations/6020986/
- Quote: "mistakenly ticketed about 3,800 vehicles for blocking bus lanes." / "More than 870 of the faulty infractions were for cars, trucks and SUVs that were parked in perfectly legal spots."
- Last checked: searched for 2025 coverage of erroneous bus-camera tickets (Oct. 19, 2026); every report found traces to this November 2024 episode (CarBuzz Dec. 5, 2024; NPR Dec. 31, 2024). The assignment's "2025" date appears to be wrong; the episode is November 2024.

C2. The MTA blamed the cameras' programming: they had not been told about legal alternate-side zones on the M79, and both routes were still supposed to be in a warning phase.
- Source: same NBC New York article.
- Quote: "The problem? According to the MTA, the smart cameras had not been programed to know they shouldn't issue violations ... to vehicles parked in the legal alternate side zones that periodically interrupt the M79 lane." / "both the M79 and Bx35 bus routes were still in the "warning" phase" / "there were programming kinks, both in mapping of curb areas and the timing of warnings themselves."
- Last checked: Oct. 19, 2026.

C3. Johnatan Cuji received one of the erroneous summonses; its own photo showed him legally parked.
- Source: same NBC New York article.
- Quote: "Johnatan Cuji was one of the hundreds of drivers who received a machine-generated summons – even though photo evidence ... printed on the summons shows he was parked squarely in a legal alternate side parking zone."
- Last checked: Oct. 19, 2026.

C4. A source identified the camera vendor to NBC as Hayden AI, which holds an $83 million contract for more than a thousand camera systems; Hayden declined to answer questions.
- Source: same NBC New York article.
- Quote: "A source with knowledge of the matter identified the company behind the onboard bus cameras as Hayden AI, ... a firm that inked a contract worth $83 million to install and maintain more than a thousand camera systems ... powered by artificial intelligence." / "A rep for Hayden AI declined to answer the I-Team's questions about the erroneous violations, referring us back to the MTA."
- Last checked: Hayden AI's home page and press page (fetched Oct. 19, 2026) do not mention New York or the MTA, so the vendor identification rests on NBC's source.

C5. The City Department of Transportation says a person reviews every machine-generated violation, but declined to say how reviewers missed the bad ones.
- Source: same NBC New York article.
- Quote: "The DOT says a human being is tasked with reviewing every one of those machine-generated infractions, ... but the agency declined to say how many employees are dedicated to the human review process." / "The DOT also declined to say how human reviewers missed the hundreds of erroneous bus lane violations ... issued along the M79 and Bx35 routes."
- Last checked: Oct. 19, 2026.

C6. Payments on the erroneous tickets were refunded.
- Source: same NBC New York article.
- Quote: the MTA said "any payments made prior to voiding the violations are being refunded."
- Also: "Thousands Wrongfully Ticketed by A.I. Bus Cameras In New York," CarBuzz, Dec. 5, 2024 — https://carbuzz.com/thousands-wrongfully-ticketed-ai-bus-cameras-new-york/ — Quote: "The city says it's already refunded those who have paid their tickets, reversed the citations for the remainder."
- Last checked: Oct. 19, 2026.

C7. As of October 2026 the MTA's Automated Camera Enforcement (ACE) program runs on 76 routes; each violation is reviewed by a City employee; double-parking and obstruction violations require two buses; fines start at $50 and rise to $250; new routes get 60 days of warnings.
- Source: "Automated Camera Enforcement," MTA, page updated Oct. 16, 2026 — https://www.mta.info/agency/new-york-city-transit/automated-camera-enforcement
- Quote: "It is currently active on 76 bus routes, benefiting over one million average weekday riders." / "Each violation is reviewed for accuracy by a City employee before being issued." / "Fines start at $50 and increase by $50 for each additional violation received, up to a maximum of $250 per violation." / "issue warning notices for 60 days before fine-bearing violations begin."
- Last checked: page fetched Oct. 19, 2026 (updated Oct. 16, 2026).

C8. The MTA says ACE routes have seen bus speeds rise 5 percent on average (up to 30 percent on some corridors), collisions fall 20 percent and blocked bus stops fall 40 percent; about 1,400 buses carry cameras.
- Source: "MTA continues crackdown on bus lane parking with more cameras," NY1, Jan. 9, 2026 — https://ny1.com/nyc/brooklyn/news/2026/01/09/mta-continues-crackdown-on-bus-lane-parking-with-more-cameras
- Quote: "Since launching in June 2024, bus speeds have increased an average of 5%, with some corridors seeing gains as high as 30%." / "The MTA says routes with ACE have seen a 20% decline in collisions — and a 40% decrease in blocked bus stops." / "covering about 560 miles and 1,400 different buses"
- Last checked: these figures are MTA self-reports; no independent evaluation surfaced in searches on Oct. 19, 2026. The MTA ACE page (Oct. 16, 2026) repeats only the "nearly 30%" segment figure.

C9. In calendar 2025, MTA bus cameras logged 2,833,378 events; 1,568,647 were recorded as "violation issued," 712,421 were rejected as exempt vehicles, 308,691 for "technical issue/other," 243,610 for missing driver or vehicle information, and 9 have no status.
- Source: "MTA Bus Automated Camera Enforcement Violations: Beginning October 2019," MTA via data.ny.gov (dataset kh8p-hcbm, data updated Sept. 25, 2026) — https://data.ny.gov/Transportation/MTA-Bus-Automated-Camera-Enforcement-Violations-Beginning-October-2019/kh8p-hcbm
- Query run Oct. 19, 2026: `https://data.ny.gov/resource/kh8p-hcbm.json?$select=date_extract_y(first_occurrence) as yr, violation_status, count(*)&$group=yr, violation_status`
- Returned for 2025: VIOLATION ISSUED 1,568,647; TECHNICAL ISSUE/OTHER 308,691; DRIVER/VEHICLE INFO MISSING 243,610; EXEMPT - COMMERCIAL UNDER 20 252,108; EXEMPT - EMERGENCY VEHICLE 220,086; EXEMPT - BUS/PARATRANSIT 127,922; EXEMPT - OTHER 112,305; null 9. Year total 2,833,378 (separate query). Exempt subtotal = 712,421. Issued share = 55.4 percent; not issued = 1,264,731 (44.6 percent).
- Whole dataset (Oct. 2019 to Sept. 2026): 6,862,127 rows, 3,748,857 issued.
- Last checked: Oct. 19, 2026.

C10. The open dataset records events rejected before a notice goes out; it has no field for notices later voided, dismissed or refunded.
- Source: dataset metadata, same dataset — https://data.ny.gov/api/views/kh8p-hcbm.json
- Quote: "This dataset contains records of violations, including issued violations and those rejected for business reasons." Column violation_status: "Event rejection reason or notice/document status."
- Note: the status values returned (C9) contain no voided, dismissed or refunded category. Whether "violation issued" includes warning-period notices is not stated.
- Last checked: Oct. 19, 2026.

C11. The City's Department of Transportation reported in January 2025 that average daily violations per speed camera fell 94 percent, that camera sites installed in 2022 had 14 percent fewer injuries and fatalities than sites without cameras, and that there were more than 2,400 cameras.
- Source: NYC DOT press release, Jan. 23, 2025 — https://www.nyc.gov/html/dot/html/pr2025/nyc-dot-speed-cameras.shtml
- Quote: "the average number of daily violations issued by each camera dropped 94 percent" / "speed camera locations installed in 2022 seeing 14% fewer injuries and fatalities" / "With more than 2,400 speed cameras across the five boroughs" / "74 percent of vehicles that receive violations receive no more than one or two per year."
- Last checked: no newer annual DOT speed-camera report found Oct. 19, 2026.

C12. A peer-reviewed difference-in-differences study of about 2,000 New York City speed cameras rolled out from 2014 to 2023 found collisions fell 5 percent and injuries 2.5 percent per month on average after activation, and 30 percent and 16 percent cumulatively over seven months.
- Source: Aaron Stagoff-Belfort (University of Chicago), Jonathan Ben-Menachem (Columbia University), Brenden Beck (Rutgers University), "Can speed cameras make streets safer? Quasi-experimental evidence from New York City," PNAS (2025), DOI 10.1073/pnas.2520328122; record posted Dec. 8, 2025 — https://knowledge.uchicago.edu/records/0k7rq-yw833
- Quote: "We find that cameras reduce collisions and injuries by 5 and 2.5% per month on average, respectively." / "Cumulatively, over the seven months following their introduction, collisions declined by 30% and injuries by 16%."
- Also: Ben-Menachem, Substack, Dec. 9, 2025 — https://jbenmenachem.substack.com/p/nyc-speeding-cameras-work-new-study — Quote: "violations carry a flat $50 fine with no points" / "without the risk of human bias (i.e., racial discrimination)"
- Last checked: PNAS page itself returned 403; abstract read from the University of Chicago repository record. Oct. 19, 2026.

C13. A New York University Tandon study of more than 1,800 school-zone speed cameras (2019 to 2021) found crashes fell 14 percent and speeding violations 75 percent over time, with cameras reaching strong effect within about six months.
- Source: "NYC speed cameras take six months to change driver behavior, effects vary by neighborhood," NYU Tandon, April 1, 2025 — https://engineering.nyu.edu/news/nyc-speed-cameras-take-six-months-change-driver-behavior-effects-vary-neighborhood ; paper: Gao, Yang, Xu, Ozbay, Sharma, Transportation Research Interdisciplinary Perspectives vol. 30, 101373 (2025).
- Quote: "reduced traffic crashes by 14% and decreased speeding violations by 75% over time." / "typically reach a strong level of effectiveness within six months." / "effectiveness patterns vary geographically across the city."
- Last checked: Oct. 19, 2026. (University news release about the study; the paper itself not fetched.)

C14. Gov. Kathy Hochul signed S.8344/A.8787 on June 30, 2025, extending the City's school-zone speed camera program to July 1, 2030.
- Source: Governor's press release, June 30, 2025 — https://governor.ny.gov/news/keeping-families-safe-governor-signs-legislation-extending-new-york-city-school-speed-camera
- Quote: "extending the program's expiration to July 1, 2030."
- Last checked: Oct. 19, 2026; no repeal or amendment found.

C15. A 2024 state law renewed the City's red-light camera program through Dec. 1, 2027, and raised the cap from 150 to 600 intersections.
- Source: NYC DOT press release, June 8, 2024 — https://www.nyc.gov/html/dot/html/pr2024/red-light-camera-program-legislation.shtml
- Quote: "The legislation renews the city's red light camera program through December 1, 2027." / "allows the city to expand the number of intersections where it can operate red light cameras from 150 to 600."
- Last checked: Oct. 19, 2026.

C16. As of January 2026 red-light cameras were still at 150 intersections; DOT said it would reach 600 by the end of 2026.
- Source: Ethan Stark-Miller, "NYC will add new red light cameras at 450 intersections before end of year: DOT," PoliticsNY, Jan. 9, 2026 — https://politicsny.com/2026/01/09/nyc-will-add-new-red-light-cameras-at-450-intersections-before-end-of-year-dot/
- Quote: "are currently in place at just 150 intersections around the city." / "600 by the end of the year"
- Last checked: no source found giving the October 2026 count; essay says only what DOT planned.

C17. Mayor Zohran Mamdani's "Vision Zero Reimagined" (Sept. 15, 2026) commits to expanding automated enforcement and launching the City's first Super Speeder program; the City says vehicles with more than 16 speed-camera violations a year are twice as likely to be in a crash causing severe injury or death.
- Source: "Mayor Mamdani Unveils Vision Zero Reimagined to Make Streets Safer for Every New Yorker," NYC Mayor's Office, Sept. 15, 2026 — https://www.nyc.gov/mayors-office/news/2026/09/mayor-mamdani-unveilsvision-zero-reimagined-to-make-streets-safe
- Quote: "Vehicles that receive more than 16 speed camera violations in a year are twice as likely to be involved in a crash ... that causes severe injury or death." / "This includes expanding automated enforcement, ensuring vehicles are properly registered and identifiable" / "launching New York City's first Super Speeder program ... enabled by changes to State law secured by Governor Hochul in this year's State budget" / State Sen. Andrew Gounardes: "Implementation of my Stop Super Speeders Act, which puts speed limiters on the vehicles of repeatedly reckless drivers"
- Last checked: Oct. 19, 2026.

C18. Waymo's 2025 New York City permit allowed up to eight vehicles in Manhattan and Downtown Brooklyn with a trained safety operator keeping at least one hand on the wheel.
- Source: "Waymo approved to start autonomous vehicle testing in New York City," TechCrunch, Aug. 22, 2025 — https://techcrunch.com/2025/08/22/waymo-approved-to-start-autonomous-vehicle-testing-in-new-york-city
- Quote: "allowed to deploy up to eight of its Jaguar I-Pace SUVs in Manhattan and Downtown Brooklyn through late September" / "at least one hand on the wheel at all times."
- Last checked: Oct. 19, 2026 (superseded on status by C19, C20).

C19. Waymo's City testing permits expired March 31, 2026, as a DOT spokesperson confirmed.
- Source: Jose Martinez, "Waymo's Robot Car Testing Ends in NYC After Permits Expire," THE CITY (thecityreporter.nyc), April 6, 2026 — https://www.thecityreporter.nyc/2026/04/06/waymo-driverless-cars-testing-roads-autonomous-vehicle/
- Quote: "expired March 31, a Department of Transportation spokesperson confirmed to THE CITY Friday."
- Last checked: Oct. 19, 2026.

C20. As of August 2026 the Mamdani administration had not renewed the permits.
- Source: Andrew Miller, "How To Make Driverless Ride-Hail Work in New York," Vital City, Aug. 12, 2026 — https://www.vitalcitynyc.org/waymo-driverless-ridehail-strategy-nyc/
- Quote: "Then the permits expired." / "Mayor Zohran Mamdani's administration has not renewed them."
- Last checked: searched "Waymo New York September 2026" Oct. 19, 2026; Gothamist (Sept. 11, 2026) and other September items report no renewal. No later renewal found.

C21. In February 2026 Hochul dropped her budget proposal to allow limited commercial robotaxi service outside New York City.
- Source: Ramsey Khalifeh and Stephen Nessen, "In reversal, Hochul says no way on Waymo outside New York City," WNYC via WXXI, Feb. 19, 2026 — https://www.wxxinews.org/local-news/2026-02-19/hochul-pulls-robotaxi-expansion-from-her-budget-proposal
- Quote: would have "allowed the limited deployment of autonomous commercial for-hire vehicles" / spokesperson Sean Butler: "it was clear that the support was not there to advance this proposal."
- Last checked: Oct. 19, 2026. See Could not confirm on the enacted budget's Part E.

C22. A Hunter College study that found Waymo less safe than New York City for-hire vehicles was retracted after Waymo pointed out flaws; a revised version found Waymo had 62 percent fewer injury crashes and 87 percent fewer serious-injury-or-death crashes.
- Source: Stephen Nessen, "War over robotaxis in NYC heats up after retracted Waymo report and 'Autokill' novel," Gothamist, Sept. 11, 2026 — https://gothamist.com/news/war-over-robotaxis-in-nyc-heats-up-after-retracted-waymo-report-and-autokill-novel
- Quote: "claimed Waymos were less safe than New York City's for-hire vehicles." / "The authors then retracted the study after Waymo pointed out significant flaws in the analysis." / "62% fewer crashes resulting in an injury" / "87% fewer crashes resulting in a serious injury or death"
- Also Vital City (C20 source): "the authors were forced to retract the safety portion of their analysis"
- Last checked: Oct. 19, 2026. The revised report itself was not fetched.

C23. Waymo's own researchers reported crash rates across 56.7 million rider-only miles through January 2025, with large reductions against human benchmarks and no statistically significant disbenefit in any crash type.
- Source: Kusano, Scanlon, Chen, McMurry, Gode, Victor, "Comparison of Waymo Rider-Only Crash Rates by Crash Type to Human Benchmarks," arXiv:2505.01515v1, May 2, 2025 — https://arxiv.org/abs/2505.01515v1
- Quote: "Data was examined over 56.7 million RO miles through the end of January 2025" / "There was no statistically significant disbenefit found in any of the 11 crash type groups."
- Last checked: journal publication (Traffic Injury Prevention) not confirmed; cited as a preprint by Waymo employees.

C24. Under Local Law 35, the City Department of Transportation's only reported algorithmic tool for 2024 and 2025 is Midtown in Motion's adaptive signal decision-support system (vendor KLD Engineering), rated "Monitored" in 2025; speed and red-light cameras are not listed.
- Source: NYC Open Data, Local Law 35 algorithmic tools report, dataset jaw4-yuem — https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=500
- Query run Oct. 19, 2026: 218 rows returned. Rows with agency "Department of Transportation": 2 (2024 and 2025), both "Midtown in Motion / Adaptive Control Decision Support System."
- Quote (tool_desc): "This congestion classification (light, moderate, moderate-heavy, heavy) is used by the Adaptive Control Decision Support System (ACDSS) to choose the optimal signal timing along the avenues to reduce congestion and improve traffic flow for all modes of transportation." autonomy (2025): "Monitored"; vendor_name: "KLD Engineering, P.C."
- Last checked: Oct. 19, 2026.

C25. The City Department of Finance lets drivers dispute bus-camera violations; fines escalate from $50 to $250 within a 12-month period.
- Source: "MTA Bus Camera Violations," NYC Department of Finance — https://www.nyc.gov/site/finance/vehicles/mta-bus-camera-violations.page
- Quote: "You have the right to dispute a bus stop violation." / "the driver must pay $50 for the first offense, $100 for the second offense, $150 for the third offense," "$200 for the fourth offense, and $250 for each additional offense."
- Last checked: Oct. 19, 2026.

C26. (Added by fact-checker, Oct. 19, 2026.) The Hunter College report is "How Would For-Hire Autonomous Vehicles Impact New York City?" by the Sam Schwartz Transportation Research Program at Hunter College and Open Plans (July 2026, revised August 2026). The original safety analysis compared Waymo's record in the cities where it operates (not New York) with New York City for-hire vehicles and reported fewer injury crashes but a higher rate of serious-injury-or-fatal crashes; the authors retracted that analysis July 29, 2026. The revised version reports 62 percent fewer injury crashes and 87 percent fewer KSI crashes per million miles, Waymo national data vs. NYC FHVs, and says the result is not yet a conclusion for New York.
- Source (revised PDF, saved at _rebuild/checks/pdfs/streets-hunter/streets-hunter-av-revised.pdf): https://www.openplans.org/s/How-Would-For-Hire-AVs-Impact-NYC_SSTRP_Open-Plans_Revised.pdf
- Quote (p. 5): "Per mile traveled in the cities where they operate today, Waymo vehicles are involved in 62% fewer crashes resulting in an injury and 87% fewer crashes resulting in a serious injury or death when compared to New York City for-hire vehicles."
- Quote (p. 16): "These results are promising, but not yet a conclusion for New York City."
- Original claim, as quoted by Changing Lanes, July 28, 2026 (https://www.changinglanesnewsletter.com/p/are-waymos-really-more-dangerous): "Initial data shows that Waymo vehicles are involved in fewer injury-causing crashes overall," "but have a significantly higher rate of crashes with a serious injury or fatality" "than the existing New York City for-hire fleet." Changing Lanes reports the authors retracted the safety analysis July 29, 2026.

C27. (Added by fact-checker.) NBC's article does not say which route Johnatan Cuji was ticketed on or when; it says the summons had photo evidence printed on it.
- Source: NBC New York, Nov. 26, 2024 (C1 URL). Quote: "Johnatan Cuji was one of the hundreds of drivers who received a machine-generated summons". NBC does not say whether the MTA caught the errors before or after its inquiry.

C28. (Added by fact-checker.) The enacted FY2027 state budget bill on transportation (S.9008-C/A.10008-C, ch. 58 of 2026, signed May 26, 2026) Part E extends the state's 2017 autonomous-vehicle testing law (which requires a human in the driver's seat) from April 1, 2026 to April 1, 2028; it contains no for-hire robotaxi authorization. Part D lets New York City, by local law, require owners with 16 school-zone speed-camera liabilities in 12 months to install an intelligent speed assistance device; Part D takes effect one year after enactment.
- Source (saved at _rebuild/checks/pdfs/streets-budget/streets-A10008C.pdf): https://legislation.nysenate.gov/pdf/bills/2025/a10008c ; status: https://www.nysenate.gov/legislation/bills/2025/A10008/amendment/C
- Quote (Part E): "section one of this act shall expire and be deemed repealed April 1, [2026] 2028."
- Quote (Part D, § 1642-b): "following entry of a final decision or decisions in response to sixteen notices of liability issued within a twelve month period" ... "to install and maintain an intelligent speed assistance device"; the device definition "shall allow for the manual override of such restrictions past the speed limit, if necessary, based on traffic conditions." Effective: "§ 7. This act shall take effect one year after it shall have become a law".

C29. (Added by fact-checker.) In the open bus-camera dataset, events on the M79+ and BX35 routes from Sept. through Nov. 2024 carry statuses such as "VIOLATION ISSUED" (M79+ 5,895; BX35 14,812); no voided, dismissed or refunded status exists, so the reversed M79/Bx35 tickets are not identifiable as errors.
- Query run Oct. 19, 2026: https://data.ny.gov/resource/kh8p-hcbm.json?$select=bus_route_id,violation_status,count(*)&$where=bus_route_id in ('M79+','BX35') and first_occurrence >= '2024-09-01' and first_occurrence < '2024-12-01'&$group=bus_route_id,violation_status
- Dataset metadata: "Posting Frequency": "Monthly"; rows last updated Sept. 25, 2026; latest first_occurrence Sept. 19, 2026.

C30. (Added Oct. 20, 2026, fix pass.) Waymo's safety hub reports 271.3 million rider-only miles through June 2026, with 82% fewer injury-causing crashes and 95% fewer serious-injury-or-worse crashes than human benchmarks. This supersedes C23's 56.7 million miles (through January 2025) for current figures.
- Source: Waymo, "Safety Impact" — https://waymo.com/safety/impact/
- Quote: "Through June 2026, Waymo has driven 271.3M rider-only miles without a human driver" / "82% Fewer injury-causing crashes (841 fewer)" / "95% Fewer serious injury or worse crashes (55 fewer)"
- Fetched: Oct. 20, 2026. Company self-report.

C31. (Added Oct. 20, 2026, fix pass.) The Hunter College/Open Plans authors' own account of the retraction: after the July 20, 2026 release they learned of a discrepancy between the injury definition in the City (TLC) data and Waymo's; they pulled the safety section and reworked it with TLC and DOT. Their account does not say who raised the discrepancy.
- Source: revised report, Appendix A4, "On Our Safety Analysis Revisions" (saved at _rebuild/checks/pdfs/streets-hunter/streets-hunter-av-revised.pdf) — https://www.openplans.org/s/How-Would-For-Hire-AVs-Impact-NYC_SSTRP_Open-Plans_Revised.pdf
- Quote: "After the release of this report on July 20, 2026, we were made aware of a potential discrepancy in the definition of injuries in the City data used in our analysis and the definition used by Waymo." / "discovered that TLC was not using KABCO standards and instead follows Local Law 31 of 2014" / "we temporarily removed our safety section from our report and worked with TLC and DOT to isolate serious injuries"
- Note: Gothamist (C22) says the retraction came "after Waymo pointed out significant flaws." The two accounts conflict on who raised it; the essay now follows the authors' account and does not name Waymo.
- Read: Oct. 20, 2026 (local PDF).

## Could not confirm
- Erroneous bus-camera tickets in 2025: every report found concerns November 2024 (C1). Web search budget ran out before a final search for 2026 incidents; none turned up in earlier searches.
- Old essay's "25 to 30 percent" congestion reduction from AI signal systems and "tenfold" crash reduction from autonomous vehicles: not verified; not used.
- Midtown in Motion's measured effect (a 10 percent travel-time improvement reported around 2012): the U.S. DOT ITS knowledge-base page returned 403; the Roads & Bridges article (May 14, 2015) reports no measured result. Not used.
- Red-light camera crash effects (65 percent fewer T-bone crashes, 73 percent less red-light running): DOT report PDFs on a860-gpp.nyc.gov were blocked; the DOT 2024 release says only that crashes "dropped dramatically." Not used.
- Number of red-light camera intersections active in October 2026: not found.
- Enacted FY2027 state budget (A10008C, signed May 26, 2026, ch. 58), Part E: the bill page shows an autonomous-vehicle provision extending a 2017 law to April 1, 2028 and text on for-hire autonomous vehicles, but I could not determine from what I read whether that text is the final enacted version or how it squares with Hochul's February withdrawal. Not used.
- Whether the state DMV testing permit for Waymo was renewed after March 31, 2026: not found.
- Independent evaluation of ACE speed and collision figures: none found; essay attributes them to the MTA.
- Whether "violation issued" in the ACE dataset includes warning notices: metadata does not say; essay calls them "notices."
- Hayden AI statement (Charley Territo, "configuration issue") reported by NPR: NPR pages timed out; not used.

## Notes for other essays
- `the-inventory`: the Local Law 35 list includes DEP's "Mufflers Noise Violations" camera tool (2025, Supervised, vendor Intelligent Instruments) and DOT lists only Midtown in Motion; neither speed cameras nor the MTA's bus cameras (MTA is outside the City inventory) appear.
- `procurement`: NBC reports Hayden AI's contract "worth $83 million to install and maintain more than a thousand camera systems," and a program total "price tag" of $141 million.
- `face-and-plate`: bus cameras capture plates and video citywide; the open dataset hashes plates (vehicle_id) to track repeat violators.
- AV policy depth (medallion leasing proposal, federal SELF DRIVE Act) is in Andrew Miller's Vital City piece, Aug. 12, 2026; `preemption` may want the federal angle.
