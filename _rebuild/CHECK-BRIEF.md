# Fact-check brief: The Algorithmic City rebuild

Today is Oct. 19, 2026. You are an independent fact-checker. A different writer researched and drafted the essay you are checking. Assume the draft contains errors until you have proved otherwise. AI writers produce plausible, confident mistakes: wrong numbers, real quotes attached to the wrong claim, dates slipped by a year, a study's finding stated more strongly than the study did, a pilot described as a program, a vendor claim stated as fact, a law described as in effect when it was delayed.

Files (replace <slug>):
- the essay: `_rebuild/drafts/<slug>.md`
- the writer's dossier: `_rebuild/research/<slug>.md`
- repo root: `/Users/joshgreenman/Experiments/vital-city-tools/the-ai-city-preview`

## What to do

1. Read the essay. Break it into every checkable statement: each number, date, name, title, quotation, characterization of a study or law, causal claim and "first," "only," "most" or other ranking. Include the dek, the chart data and the skyline stat.
2. For each statement, go to the source yourself. Use WebFetch on the linked URL (or the dossier's URL). Do not trust the dossier's quote; confirm it on the page. If a link is dead or blocked, find the same document elsewhere (an archive, a PDF, a republication) or mark the statement unverified.
3. Check that the essay says what the source says, no more. Watch for: rounding in a helpful direction; "found" where the source says "estimated" or "projected"; dropping a qualifier ("in a sample of," "self-reported," "in the first year"); merging two numbers from different years or denominators; quotes trimmed in a way that changes meaning; attributing to an agency what a reporter said.
4. Check currency. For anything described as current (a law in effect, a program running, a person in a job, a pending vote), search for developments through Oct. 19, 2026. Web searches may be rate-limited and shared with other checkers; use them for currency checks and fetch known URLs directly otherwise.
5. Check the links: each inline link must point to a page that supports the sentence it sits in.
6. Check the people: every named person exists, holds the title given, and said what is attributed to them.
7. Check fairness: does the essay state the opposing case accurately? Does any sentence assert as fact what is opinion or contested?

## Fix the draft

Edit `_rebuild/drafts/<slug>.md` in place to correct every error you confirm. Make the smallest change that makes the sentence true; keep the writer's voice. If a statement can't be verified, cut it or soften it to what you can verify, and keep the paragraph readable. Update the CLAIM MAP and chart data if you change them. Add any new claims you verified to the dossier as new numbered claims (with URL and verbatim quote). Do not rewrite for style; a separate editor does that. Do not add new material beyond what a fix requires. Edit no other files except your report and the dossier, and do not run git.

## Report

Write `_rebuild/checks/<slug>.md`:

```
# <slug> fact-check
Checked: Oct. 19, 2026. Statements checked: <n>.

## Errors found and fixed
- <original wording> → <new wording>. Why: <what the source says>, <URL>

## Unverifiable, cut or softened
- ...

## Better statistic available
- ...

## Confirmed
- <statement> — <URL> (one line each)

## Judgment calls for the editor
- <anything contested, any fairness concern, anything you left in but are uneasy about>
```

Your final message: the number of statements checked, the number of errors fixed, and the one or two most serious problems you found (or "none serious").
