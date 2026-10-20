# plan-review fix report
Revised: Oct. 20, 2026, in response to `_rebuild/REVIEW.md`.

## Review items

### 1. Byline of the Just Fix It column (Fix these first; Errors to fix)
Verdict: review right.
- Fetched https://www.vitalcitynyc.org/nyc-housing-permits-fast-track-construction-mamdani/ on Oct. 20. Byline markup: `<a href="/author/vital-city/">Vital City</a>` with `<time datetime="2026-05-07">`. End note: "This installment was prepared with the help of John Surico." Melissa O'Shaughnessy appears only in the caption of the lead illustration (`<figcaption>...Melissa O'Shaughnessy</figcaption>`, image file "OShaughnessy_Construction-Wall.jpg").
- Changed: all three mentions of O'Shaughnessy removed. The essay now says "Vital City's Just Fix It column on permitting" (first mention), "Vital City's Just Fix It column, published in May" and "the same column." The column's three claims used in the essay (10-plus agencies; "aggressively explore" AI; one to two years for as-of-right permits) were re-confirmed verbatim on the same fetch, so the attributions stand.
- Dossier C27 source line corrected; new claim C32 records the byline. The earlier check report and edit report now carry a correction note where they named her.
- Not in my files: `assets/articles.js` (the built preview) still names her and will need a rebuild.

### 2. Priority Review "in July" (Problems by essay)
Verdict: review right.
- GovTech/Star-Advertiser, datePublished July 2, 2026 (a Thursday): "Called Priority Review, the program ... according to a DPP news release issued Tuesday." Tuesday was June 30.
- Changed: "In July, DPP also began sending" → "And at the end of June, DPP began sending." New dossier claim C33.

### 3. Los Angeles: 70% clearance cut "limited to single-family rebuilds"; 30-day rule "not found" (Problems by essay)
Verdict: review wrong.
- The essay cites the City's rebuilding page, not a Bass release. Re-fetched https://recovery.lacity.gov/rebuilding on Oct. 20: "The City of LA has streamlined the permitting process and eliminated 70% of clearances required for single family rebuild permits." And, under EO1: "requiring City Departments to review complete applications within 30 days and issue permit clearances within 5 days."
- Changed: the 70% sentence is unchanged. The 30-day rule was cut, but only to reduce the number count; it is verified. Note added under C19.

### 4. "Not yet verified" table: Archistar's Sydney origin and "free" use
Verdict: already verified; no change.
- Sydney: dossier C22, Tech Lab results page, "Archistar (Sydney, Australia)"; listed as confirmed in the first check report.
- Free: dossier C17, StateScoop, May 5, 2025, "local governments and other users can access for free through a partnership involving the state and philanthropic organizations"; confirmed in the first check report.

## Structural changes
- Subheads cut from five to two: "Honolulu's 19 permits" (Honolulu and Los Angeles) and "New York's tryout." "What DOB could do" is gone.
- The opposing point (DOB's own review times are rising every year, so there is a case for moving) sits in one paragraph in the New York section, where it pushes against the ceiling argument. No stock frame.
- Ending: one recommendation, no list. The second recommendation (print the applicant/examiner split in the Mayor's Management Report) was dropped. The essay now argues harder: New York should not follow Honolulu into a mandate on 19 self-selected permits, and DOB should assign filings to any pre-check at random and publish the results before requiring the tool. That stays within the evidence (C8, C9, C10, C30).
- Summing-up closers cut, including "The resubmissions are what a pre-check is meant to cut" and the "Apuna puts the case" type framing.
- Numbers cut roughly in half. Gone: the Clariti chief executive's 14-or-15-to-three-or-four corrections (and its paragraph), DPP's 23.5-to-7.7 corrections, 1.4 vs. 3.4 cycles (now "fewer than half as many"), 156,389 and 111,842 (now "about seven resubmission reviews for every 10 first reviews"), Honolulu's 469 commercial days, 34% and 5%, the 9,252 backlog, the 10-business-day county wait, the 16 clearances, 50 checks, six reviewers, three applications and 26 rules, the 218 Local Law 35 entries, and the 20.3-day FY25 approval figure. Only the Honolulu sample paragraph carries four figures (32.5 vs. 73 days; 19 vs. 17 permits); the rest carry three or fewer, not counting years.
- Document quotes paraphrased: DOB's "typically three times as long" line, Apuna's launch quote, "to help train the AI tool," "subject to other agencies," Waite's "still remains a bottleneck." Kept as quotes: Apuna's HPR quote, "relatively small" and the column's "aggressively explore," where the wording is the point.
- Repeated attributions trimmed (one "told Crosstown," then "told the site"; "the station reported").
- Headline: "The Short Line at the Buildings Department" → "An AI Plan Checker Would Shorten the Short Line at the Buildings Department" (declarative, AP title case).
- Dek: "Honolulu made its AI pre-check mandatory with evidence from 19 permits, and New York should run a fair test before it follows." (22 words; the chart dek is unchanged and does not overlap.)
- Mechanics: "%" in prose; no serial commas; acronyms spelled out on first use; no first person; no en dashes.
- Claim map rewritten for the new 13-paragraph body; chart block unchanged.

## Word count
Body (excluding front matter, subheads, chart and claim map): 1,362 before, 1,139 after.

## For Josh
- The ceiling argument still rests on two figures from Vital City's own column (10-plus agencies; one to two years). They are now attributed to Vital City rather than a named writer. If you would rather not lean on a house piece, paragraph 12 can end at the 9.5-day arithmetic.
- The closing line says Honolulu's mandate "arrived with published evidence from 19 permits." The mandate was planned before those figures came out (GovTech, July 2: "ahead of the software becoming mandatory later this year"), so the essay does not say the 19 permits caused the mandate, only that they were the published evidence when it took effect. DPP repeated the same figures to its council in September and nothing larger has been published.
- The built preview (`assets/articles.js`) still has the old byline until the site is rebuilt.
