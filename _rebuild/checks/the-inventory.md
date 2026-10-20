# the-inventory fact-check
Checked: Oct. 19, 2026. Statements checked: 74.

Downloaded files are in `_rebuild/checks/pdfs/inventory/` (jaw4.json, decision26.txt, fed2025.csv, nys.json, OTI testimony, Oct. 5 hearing transcript, Int. 161 text, LL188, LL195, LL35 2025 report, AI Action Plan, Year 2 progress report, 2023 state audit, 2019 ADS report).

## Queries re-run (Oct. 19, 2026)
- `curl 'https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=5000'` → 218 rows. Count by `year`: 2022 31, 2023 46, 2024 55, 2025 86. Distinct `agency` by year: 11, 14, 13, 19.
- 2025 by agency: DOHMH 17, Mayor's Office 12, OTI 8, NYCPS 7, ACS 6, then DEP/DSS/DYCD/FDNY 5 each, DOC/NYPD 3, CFB/Comptroller 2, six agencies 1. 19 agencies.
- 2025 `autonomy`: Informative 40, Supervised 23, Fully autonomous 12, Monitored 11. Of the 12 fully autonomous, 7 are captioning/transcription/translation (CFB Zoom, Mayor's Office Zoom, AppTek OmniCaption, MOCS Webex transcription, OTI Zoom captions, OTI and Comptroller Google Translate).
- 2025 `purpose_type`: Information presentation 38, Data management 21, Resource allocation 13, Performance evaluation 6, Risk management 5, Triage 2, Not specified 1. Decision categories = 26.
- "proprietary" (case-insensitive) in `data_training`, 2025: 38 rows; same 38 when searching every field. ShotSpotter row: "Training data is proprietary to the vendor."
- Measured-result scan: split nine text fields (tool_desc, purpose_desc, updated_desc, data_training, data_input, data_output, vendor_desc, analysis_type, computation_type) of all 86 rows into sentences; kept sentences with a digit and a result word (accura, error rate, precision, recall, AUC, percent, %, reduc, increas, improv, sensitiv, specific, false positive, saved, hit rate, outperform, validat, back-test, tested). Hits in the 26 decision tools are training/test split sizes, test periods and a validation method (FDNY), no results. Also grepped the 26 for accura/error/result/outcome/perform/effective/success. Only Eureka! (NYCPS, purpose type "Information presentation") reports an outcome: "Approximately 30 percent of the voice calls and 10 percent of the web-based queries have been handled completely by Eureka!"
- Federal CSV (`2025_individually_reported_AI_use_cases.csv`): 3,611 rows; `is_high_impact` = High-impact 445; of those `development_stage` = Deployed 227; `hi_testing_conducted` among the 227: Yes 44, In-progress 81, blank 102.
- `https://data.ny.gov/resource/fgvt-qr4i.json` → 19 rows, 13 agencies, 5 columns; DMV entries are DocumentAI and MAXit.

## Errors found and fixed
- Dek: "The City describes every algorithmic tool it uses in detail ... a law the Council is already amending." → "The City describes the algorithmic tools its agencies report in detail ... a law the Council is already considering amending." Why: the list is self-reported, and the state comptroller's August 2026 follow-up audit says the City "still does not maintain a complete inventory of AI tools used across agencies" (https://www.cityandstateny.com/policy/2026/08/state-audit-finds-room-improvement-nycs-ai-governance/415734/). Int. 161 was "Laid Over in Committee" on Oct. 5, so it has not amended anything yet (https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=7861810&GUID=34B70F41-7D60-4866-9434-7EB17E68661C).
- "recommended ... that the City publish 'key performance indicators' for its automated systems" → "that the City's oversight body publish 'key performance indicators' for its work on automated systems". Why: the report says the "Organizational Structure should create and publish ... key performance indicators for its work in relation to the City's ADS tools and systems". The KPIs measure the oversight body's work, not each system's performance (https://www.nyc.gov/assets/adstaskforce/downloads/pdf/ADS-Report-11192019.pdf, rec. 2.1.4).
- "Local Law 195 requires the office to post a list of systems it has assessed. At the Oct. 5 hearing, ... BetaNYC was still asking when that list would appear." → "requires the office to post, by March 31, 2027, a list of systems it has assessed before deployment. At the Oct. 5 hearing, ... BetaNYC asked when that list would appear." Why: the law's deadline is "No later than March 31, 2027", and it covers pre-deployment assessments only. BetaNYC's testimony gives the same date. "Still asking" suggested the list is overdue, and it is not (https://nyc.legistar.com/View.ashx?M=F&ID=15062374&GUID=A4A39C1B-F7C5-4410-939C-FB0D4BACDCF7; https://www.beta.nyc/2026/10/05/council-ai-hearing-2026/).
- "asks a yes-or-no question about pre-deployment testing" → "asks whether pre-deployment testing was done for 'high-impact' uses, with 'yes' and 'in progress' among the answers." Why: the data dictionary lists the valid values as "a) Yes", "b) In-progress" and a CAIO waiver (https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory, Validation/data_dictionary.md). The 44-of-227 figure itself is confirmed.
- Chart title: "nearly tripled in four years" → "nearly tripled from 2022 to 2025". Why: the four reporting years span three years of change (31 → 86, 2.8x). This one is minor; the editor can revert it.

## Unverifiable, cut or softened
- None cut. The ADS and LL195 sentences above were softened to match their sources.

## Better statistic available
- The state comptroller's follow-up audit (status as of April 2026; reported Aug. 31, 2026) is newer than the February 2023 audit the essay cites. It says the 2023 recommendations are "only partially implemented" and that the inventory is incomplete. The OSC report itself was not located, only City & State's account. At the Oct. 5 hearing, a witness also described "an August audit from the state comptroller" finding that OTI "had no process to check agency's AI disclosures" (hearing transcript). The editor may want this in the auditors paragraph or the "Asked for, and marked done" section.

## Confirmed
- Oct. 5 Committee of the Whole; nearly 10 hours; 46 members; Anthropic, Google, Meta, OpenAI agreed to testify — https://council.nyc.gov/press/2026/10/13/3295/
- Milstein is OTI Deputy Commissioner for Strategic Advisory Services; OAA "has been formally established"; six positions created in FY27 adopted budget ("funded" per amNY); hiring "actively underway"; "progressing as planned" — https://www.nyc.gov/assets/dca/downloads/pdf/media/Advocacy-Testimony-Intros-161-T20262602-T20262601-T20262606-T20262605-T20262599-T20262603-504-T20262600.pdf
- The City's own algorithms got a few paragraphs (OAA section of testimony is two short paragraphs plus a list) — same URL
- Director "in the next week or two" — https://www.amny.com/politics/nyc-ai-cyberattacks-safeguards/ and the hearing transcript https://nyc.legistar.com/View.ashx?M=F&ID=16072121&GUID=B2DB4127-3040-4B2C-9BDC-5DE47D30860D
- Menin: office supposed to be operating by June — same two URLs ("supposed to be up and running in June")
- Local Law 35 of 2022, enacted Jan. 15, 2022 — Legistar ID 4265421
- Dataset 31 (2022) → 86 (2025); 19 agencies in 2025; chart agency counts 11/14/13/19 — jaw4-yuem query; LL35 2025 report https://www.nyc.gov/assets/oti/downloads/pdf/reports/LL35%20Report%202025%20-%20Final%20-%202026-03-27.pdf
- DOHMH 17, Mayor's Office 12 — same
- Entries describe tool, training data, vendor, start date — dataset fields tool_desc, data_training, vendor_name, date_first_use
- Autonomy first rated in 2025 (2022–24 "NA"); 40/23/11/12; fully autonomous mostly captioning/transcription/translation (7 of 12) — dataset; LL35 2025 report
- State inventory 19 systems, 13 agencies, five columns — https://data.ny.gov/resource/fgvt-qr4i.json
- NY Focus: DMV facial recognition omitted; State Police absent — https://nysfocus.com/2026/07/30/new-york-ai-systems-inventory-findings
- ACS ASAP: ~3,000 QA reviews of ~50,000 investigations; trained on 815,284, tested on 205,241; no test result given — dataset 2025 row
- 26 decision tools by agency classification; several tested/back-tested/validated; none reports a measured result — dataset query above
- One measured outcome in 86 entries: NYCPS help-desk chatbot, password resets and tickets, ~30% of voice calls handled without a human — dataset 2025 "Eureka! Chatbot"
- ShotSpotter entry "proprietary to the vendor"; 38 of 86 entries use the word — dataset
- City comptroller 2024: confirmed shootings 8%–20%; over $45 million spent — https://comptroller.nyc.gov/reports/audit-report-on-the-new-york-city-police-departments-oversight-of-its-agreement-with-shotspotter-inc-for-the-gunshot-detection-and-location-system
- State comptroller (Feb. 2023): NYPD did not review NIST testing "nor did it establish what level of accuracy would be acceptable" — https://www.osc.ny.gov/files/state-agencies/audits/pdf/sga-2023-21n10.pdf
- ADS Task Force under LL 49 of 2018; November 2019 report; "outcomes of any ADS assessments"; members debated reviewing examples; reviewed four — ADS report PDF
- City & State "a slow-moving body" (refers to the ADS task force) — https://www.cityandstateny.com/politics/2025/11/new-york-city-will-try-again-regulate-ai/409803/
- AI Action Plan October 2023; 1.5 "adding reporting requirements related to models and performance"; 1.8 "will assess the tool's effectiveness at fulfilling its stated goals" — https://www.nyc.gov/assets/oti/downloads/pdf/reports/artificial-intelligence-action-plan.pdf
- October 2025 progress report: 1.5 Complete, 1.8 In Progress; 8 in progress of 37 (my tally: 27 complete, 8 in progress, 2 to come) — https://www.nyc.gov/assets/oti/downloads/pdf/AI-Action-Plan-Progress-Report-Year-2.pdf
- No performance field in the dataset (27 columns listed in query) — jaw4-yuem
- LL188 created OAA, power to suspend, test is discriminatory risk plus compliance standards, added items 7 and 8 to report — LL188 certified text https://legistar.council.nyc.gov/View.ashx?GUID=683437F6-9BF2-4884-A1B5-EBB81F0E80BE&ID=15062373&M=F
- Standards not yet written: Menin said OTI did "no rulemaking whatsoever"; Milstein said "the actual rulemaking will happen in this fiscal year" — hearing transcript
- BetaNYC asked when the LL195 list would be posted — https://www.beta.nyc/2026/10/05/council-ai-hearing-2026/
- OTI: Int. 161 "would not produce new insights" beyond the LL 25 of 2026 study — OTI testimony
- Office "months old" (LL188 took effect 180 days after Dec. 2025, i.e. June 2026) — LL188; BetaNYC
- Amsterdam register redirects to national register; parking scan-car entry lists Privacy Quickscan, DPIA, Ethische Bijsluiter; main risk misread plate; no error rate — https://algoritmes.overheid.nl/nl/algoritme/gm0363/78451490/fiscaal-handhaven-parkeercontrole
- Federal: 227 deployed high-impact, 44 yes — CSV query above
- DOC jail forecast back-testing; FDNY hospital algorithm vs. five years of transport data — dataset 2025 rows
- Exemption for public safety / active investigation — LL188 text, § 3-119.5(e)
- Int. 161, De La Rosa, adds job-impact reporting — https://council.nyc.gov/press/2026/09/25/3252/ and Legistar
- "only where it demonstrably improves life for New Yorkers" — City Hall spokesperson Jeremy Edwards, https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/
- Skyline stat (86 tools, one with a measured result) — dataset

## Currency checks
- OAA director: no announcement found through Oct. 19 (web searches; OTI AI page). The "next week or two" window has passed. The essay attributes the timing to the hearing, so it stays accurate.
- LL195 list: not posted, and not due until March 31, 2027.
- Third-year AI Action Plan progress report (due around Oct. 16, 2026): not found. Guessed nyc.gov URLs returned 404, OTI's AI page has no link, and web search found only the 2024 and 2025 reports. The essay's "October 2025 progress report" stands as the latest.
- Int. 161: laid over Oct. 5; no further action.
- State inventory: still 19 rows.

## Judgment calls for the editor
- Int. 161 as drafted (Jan. 5, 2026 text) amends the Local Law 35 version of § 3-119.5(c) and renumbers job impacts as item 7. That would overwrite the two items Local Law 188 added (modifications; OAA assessment). BetaNYC testified: "As drafted, Int 161 would delete those two fields." The essay calls Int. 161 "the vehicle" for adding a performance field. That is accurate as far as it goes, but readers may want to know the bill as written would also drop the assessment field the essay credits LL188 with adding. Not changed.
- "Each entry says ... who sold it": some entries list the vendor as "Not disclosable" (FDNY and DOI facial recognition), and in-house tools have none. The law requires the vendor name only "when feasible." Left in.
- Jiahao Chen, OTI's director of AI and ML, resigned shortly before the hearing. Menin tied his resignation to hiring holdups (hearing transcript). Not in the essay; noted for context on the office's staffing.
- "A year earlier" (Feb. 2023 state audit vs. June 2024 city audit) is about 16 months. Fine at the calendar-year level.
- The "one measured outcome" and "none of the 26" findings come from Vital City's own text review, as the chart source line says. The method is reproducible (queries above), but it is a judgment about what counts as a "measured result." The DOC forecast's back-tested prediction intervals are described in its entry but not reported as numbers.
- Fairness: the "case for waiting" section accurately gives OTI's Int. 161 objection and Milstein's "progressing as planned." OTI's claim at the hearing that it is "fully compliant with the law" and has filed LL35 reports on time for five years could also be noted.
