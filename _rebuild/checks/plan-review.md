# plan-review fact-check
Checked: Oct. 19, 2026. Statements checked: 72.

Method: each source was fetched directly (curl, then stripped to text). The DOB chapter of the Fiscal 2026 Mayor's Management Report (MMR) was downloaded to `_rebuild/checks/pdfs/plan-review/mmr2026-dob.pdf` and its text extracted. The Local Law 35 dataset was queried live. Currency searches were run on Honolulu CivCheck, Los Angeles/Archistar, the Buildings Tech Lab and DOB AI plan review.

## Errors found and fixed
- "six DOB plan reviewers reported saving 25 percent of their time" → "six DOB plan reviewers reported a 25 percent time savings after using the tool." Why: the source reports a time savings from using the tool, not 25 percent of reviewers' total time. Source text: "Six DOB plan reviewers reported a 25% time savings after using the tool." https://buildingstechlab.nyc/proof-of-concept-results-2025
- "she said in September, as quoted by Hawaii Public Radio" → "she said, as quoted by Hawaii Public Radio in September." Why: HPR (Sept. 24, 2026) prints the quote with no date. It links the quote only loosely to Apuna's "latest update to the Honolulu City Council," so the timing of the remark itself is not established. https://www.hawaiipublicradio.org/text/local-news/2026-09-24/honolulu-building-permit-applications-rise-under-ai-processing-tools
- "DOB completed 111,842 resubmission reviews in fiscal 2026, against 156,389 first reviews" → added "in DOB NOW." Why: both figures are DOB NOW only. BIS adds 6,009 resubmissions and 2,637 first reviews. https://www.nyc.gov/assets/operations/downloads/pdf/mmr2026/dob.pdf

## Unverifiable, cut or softened
- "neither the city nor the county has published how many people used it or what it saved" → "we could find no figures from the city or the county on how many people used it or what it saved." The original claims a negative that can't be proved. None of the city page, the county page or the Jan. 31, 2026 County/City/Archistar presentation (85 slides, https://file.lacounty.gov/SDSInter/dpw/recovery/1201690_RebuildingTogether_ArchistarDRAFTPPT12226.pdf) gives usage or outcome figures. The new wording uses "we"; the editor may want to recast it.

## Better statistic available
- None needed. The essay already uses DPP's own CivCheck figures (55 percent faster) instead of the "up to 70 percent" figure HPR attributes to "advocates," which is correct.

## Confirmed
- 5.4 days to first plan review, FY26, all DOB NOW applications (3.7 in FY25) — https://www.nyc.gov/assets/operations/downloads/pdf/mmr2026/dob.pdf
- 25.4 days from filing to approval, FY26 (20.3 in FY25); skyline stat — same
- Quote "is typically three times as long as the time the filing is with the Department for review" — same, verbatim
- Chart series 2.9/2.7/3.3/3.7/5.4 and 14.7/18.1/20.2/20.3/25.4, FY22 to FY26 — same, indicator table
- 156,389 first reviews; 111,842 resubmissions (DOB NOW) — same
- Arithmetic: a 3:1 split puts about 19.05 of 25.4 days with the applicant; half of that is about 9.5 days — derived; correctly framed as hypothetical
- Fiscal 2026 ended in June; the FY26 MMR is the latest full-year report — MMR
- "10-plus city agencies" — Vital City, "8 Policy Tweaks...", Melissa O'Shaughnessy, Just Fix It, May 7, 2026 (datePublished 2026-05-07) — https://www.vitalcitynyc.org/nyc-housing-permits-fast-track-construction-mamdani/
- The column urges the Mamdani administration to "Aggressively explore all the ways in which AI could be used to streamline processes" — same, verbatim
- The column notes "Permitting was not mentioned in the AI Action Plan" (the City's 2023 plan) — same
- "It can take one to two years for as-of-right development to acquire the appropriate permits" — same; the essay attributes it to the column
- CivCheck launched Dec. 8, 2025, as "AI-guided permit preparation software" for residential applications — https://www.honolulu.gov/dpp/?p=37889
- Apuna is DPP director; quote "One of the biggest challenges that create permitting delays..." — same, verbatim
- Applicants upload plans, answer questions about the project and revise flagged files before filing — https://www.honolulu.gov/dpp/?p=42330
- Mandatory from Sept. 1, 2026 (a Tuesday), for 1- and 2-family and duplex new construction, additions and alterations; incomplete applications rejected — https://www.hawaiinewsnow.com/2026/09/01/new-ai-tool-now-required-some-building-permit-applications-oahu/
- 32.5 vs. 73 days; 1.4 vs. 3.4 cycles; 19 vs. 17 permits; Pitner's "relatively small sample" quote; participation voluntary — https://www.govtech.com/artificial-intelligence/honolulu-launches-ai-assisted-fast-track-permit-review (Star-Advertiser via TNS, July 2, 2026)
- Corrections per permit fell from 23.5 to 7.7 (DPP) — https://www.honolulu.gov/dpp/?p=42330
- Clariti CEO (Cyrus Symoom) said 14 or 15 items fell to 3 or 4; Clariti built HNL Build — HNN, Sept. 1, 2026
- Apuna's quote "If we can improve the quality..." / "...work a little faster" — HPR, Sept. 24, 2026, verbatim
- 218 days residential, 469 commercial; applications up 34 percent, permits issued up 5 percent (Dos Santos-Tam, a Honolulu council member); backlog 9,252, including dormant legacy files — HPR
- Fast lane remains subject to other agencies, including the Board of Water Supply — GovTech
- Newsom announcement; free access through a state and philanthropy partnership; Archistar tool for LA city and county — https://statescoop.com/california-ai-pilot-building-permits-la-wildfires/ (May 5, 2025)
- Archistar is based in Sydney — https://buildingstechlab.nyc/proof-of-concept-results-2025; also the Archistar deck ("Sydney HQ")
- City beta began July 2025 (page dated 2025-07-16); voluntary; "to help train the AI tool" — https://mayor.lacity.gov/news/city-launches-beta-testing-ai-tool-further-expedite-palisades-rebuilding
- County results "may take up to 10 business days" — https://recovery.lacounty.gov/2025/07/15/la-county-launches-echeck-ai-pilot-as-part-of-express-lane-for-faster-rebuilding/
- City rebuilding page still offers E-Check; eliminated 70 percent of clearances; 30-day review of complete applications — https://recovery.lacity.gov/rebuilding (fetched Oct. 19, 2026)
- Self-certification pilot lets California-licensed architects verify code compliance "without a full LADBS plan check" — https://mayor.lacity.gov/news/6-months-start-wildfires-mayor-bass-highlights-recovery-progress-outlines-priorities-continued
- 49-day average as of Jan. 2, 2026; builder's 16 clearances; Waite (Cox, Castle and Nicholson; Project Recovery Plan team), "more than a dozen departments," "still remains a bottleneck" — https://xtown.la/2026/01/05/post-fire-rebuilding-palisades/
- Buildings Tech Lab run by DOB and the Partnership Fund; eight companies; eight weeks; results published Aug. 26, 2025 — https://buildingstechlab.nyc/news/inaugural-buildings-tech-lab-releases-proof-of-concept-results-revealing-ways-tech-can-reduce-nyc-red-tape
- CivCheck screened 14 alteration and enlargement plans against 50 checks; Archistar digitized ZR Article II, Chapter 3 and checked 3 applications against 26 rules; "Archistar estimates it can cut 2-4 review cycles" — https://buildingstechlab.nyc/proof-of-concept-results-2025
- The lab's news page has nothing after Sept. 8, 2025 (second-round call) — https://buildingstechlab.nyc/news (fetched Oct. 19). Searches found no 2026 cohort and no DOB AI plan-review pilot.
- Local Law 35 dataset: 218 rows (2022: 31, 2023: 46, 2024: 55, 2025: 86); no agency or department field matches "build" — https://data.cityofnewyork.us/resource/jaw4-yuem.json
- Currency: no Honolulu developments after HPR's Sept. 24 report were found. No LA/Archistar outcome data were found; the latest item is the Jan. 31, 2026 deck. No NYC DOB AI plan-review announcement in 2026 was found. Ahmed Tigani is DOB commissioner (not named in the essay).

## Judgment calls for the editor
- Honolulu's speed figures have a second confound the essay doesn't mention. In July 2026 DPP began routing CivCheck filings to the front of the prescreen queue ("Priority Review," GovTech, July 2, 2026; DPP's page: "DPP's fast-track gives applications even more of a boost"). DPP does not say whether any of the 19 permits got priority handling. If they did, part of the 32.5-vs-73-day gap is queue position, not plan quality. The essay names self-selection only. Consider one clause. (Added to the dossier as C30.)
- "Every resubmission is a round trip a better first filing might have avoided" goes a bit far. Some resubmissions come from design changes rather than errors a pre-check would catch. The word "might" makes it defensible.
- "New York does not yet publish the whole clock" is a fair reading of the MMR, which reports only DOB's filing-to-approval time. It is still an assertion about all city publications; it held up in my checks.
- "Vital City's column in May" and "the City's AI Action Plan": the column makes clear this is the 2023 (Adams-era) plan. The editor may want to say "2023" so readers don't take it for a Mamdani-administration plan.
- The essay cites the Vital City column for "10-plus agencies" and "one to two years." Both are attributed and accurate to the column. The dossier notes the same column's unrelated "quarter of the DOB workforce" claim, which MMR headcounts don't support. That claim is not used here.
- A search summary said Honolulu Mayor Rick Blangiardi once claimed the backlog was "completely eliminated" (undated, not verified; likely about the late-2025 prescreen backlog). The essay doesn't use this, and I left it out.
