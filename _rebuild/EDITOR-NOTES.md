# The Algorithmic City, October 2026 rebuild: notes for the editor

Branch `rebuild-2026-10` in `vital-city-tools/the-ai-city-preview`. Nothing is pushed. The live preview still shows the March version.

## What changed

- 20 new essays replace the 21 old ones. Lineup in `_rebuild/BRIEF.md`; essay sources in `_rebuild/drafts/`.
- Every essay went through three separate passes: writer (research file in `_rebuild/research/`, one verbatim quote per claim), independent fact-checker (`_rebuild/checks/<slug>.md`), editor (`_rebuild/checks/<slug>-edit.md`). Then an issue-level pass reconciled shared facts (`_rebuild/CONSISTENCY.md`).
- Fact-check totals: 1,382 statements checked, 146 corrected.
- New cover drawn from the fact-check (one window per checked statement, orange for corrected ones). New hand-drawn-style header art from Google Gemini (about 25 generations, roughly $1 to $2). One chart per essay, built from the research files.
- The old nine-act data story is gone (its figures were March's, unverified). It is replaced by `charts.html`, the 20 verified charts on one page.
- The print edition and front page are rewritten, including a "How this issue was made" note.
- Rebuild everything with `_rebuild/build.sh` after editing any file in `_rebuild/drafts/`.

## Recheck on publication day (dated facts)

- Office of Algorithmic Accountability: no director named as of Oct. 19 (acs-model, the-inventory, procurement, preemption).
- NYPD POST Act page: 41 policies listed on Oct. 19 (read as 42 earlier that day). Local Law 55 facial recognition audit: not posted as of Oct. 19 (face-and-plate).
- DC 37 contract expires Nov. 6, 2026 (the-desk).
- State Board of Elections ruling on the Blakeman AI ad complaint: none as of mid-October (deepfakes).
- Forest v. City of New York settlement: no final approval public as of mid-October (benefits-backlog).
- HUD homelessness funding notice litigation; no awards as of Oct. 19 (shelter-score).
- RealPage: the attorney general's Oct. 13 reconsideration motion, no ruling yet (landlord-algorithm).
- Denver's Sunny chatbot: contract paid through October, no deal announced (front-door).
- A9581B (AI staffing reports) and A11560/S10642 (data center pause): neither delivered to the governor as of Oct. 19 (jobs, data-centers).
- EIA state electricity prices update Oct. 23 (data-centers).

## Your calls

- Headlines the editors flagged as possibly too cute: "Make the Next City Chatbot Show Its Grades," "New York's Child Welfare Algorithm Should Show Its Work." Alternatives are in the edit reports.
- risk-scores: keep or cut the PROTECT Act paragraph (its Senate version has failed twice).
- procurement: ask OTI for the text of its AI contract rider. If it already covers accuracy testing, error reporting or exit terms, the essay's thesis and dek need to change.
- fiscal: the critique of Proposal 5 by the Citizens Budget Commission was left out because nobody fetched and quoted it.
- Vital City's own May 7, 2026 "Just Fix It" column says Department of Buildings staff fell by a quarter from 2022 to 2024. The Mayor's Management Report shows headcount flat at about 1,560 (1,560, 1,569, 1,563). Worth a look; it is not cited in this issue.

## Sources still worth a human look

- the-desk: a Manhattan Institute brief is paraphrased from a summary, not quoted.
- preemption: Obernolte's "revamp" quote rests on Punchbowl News's preview (paywalled).
- block-by-block: two sentences rest on the checker's reading of a source (what Bisnow did not report; the two possible readings of the Chicago inspector variable).
- sanctuary-data: the identifying-information law is quoted from its 2017 text; compare with the current Administrative Code after the 2022 amendment.
- the-inventory: "one entry gives a measured result" is Vital City's own review of the 86 entries; consider a short methods note.
