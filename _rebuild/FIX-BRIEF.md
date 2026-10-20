# Fix brief: second-round revisions to The Algorithmic City (Oct. 20, 2026)

Josh Greenman, Vital City's editor, had the published preview reviewed by a separate team. Their review is `_rebuild/REVIEW.md`. You are revising ONE essay in response. Repo root: `/Users/joshgreenman/Experiments/vital-city-tools/the-ai-city-preview`. Your files (replace <slug>):

- `_rebuild/drafts/<slug>.md` (the essay; edit in place)
- `_rebuild/research/<slug>.md` (dossier: numbered claims with URL and verbatim quote)
- `_rebuild/checks/<slug>.md` (first fact-check report) and `_rebuild/checks/<slug>-edit.md` (first edit report)

Read first: `_rebuild/REVIEW.md` in full; `/Users/joshgreenman/.claude/skills/how-not-to-write/SKILL.md`; `/Users/joshgreenman/.claude/skills/vital-city-voice/SKILL.md`; then your three files above.

## Part 1: the review's factual points

For every item the review raises about your essay (in "Fix these first," "Errors to fix," "Problems by essay," and the "Not yet verified" table), do this:

1. Treat the review's claim as a lead, not a fact. The reviewers had a search limit and did not see our dossiers; some of their "unverified" items are already verified in our dossier or check report, and some of their corrections may themselves be wrong.
2. Go to the source. Fetch the page (WebFetch; web search is rate-limited and shared, so prefer fetching URLs you already know from the dossier). Copy the verbatim quote that settles it.
3. If the review is right, fix the essay with the smallest accurate change. If the review is wrong, leave the essay and record why, with the quote. If you cannot settle it, soften or cut the claim.
4. For items in the "Not yet verified" table: if our dossier has the claim with a URL and quote AND the first check report lists it as confirmed, record that and move on. Otherwise fetch and verify it now.
5. Add every new source to the dossier as a new numbered claim (URL + verbatim quote + date fetched).

## Part 2: the writing

The review's main criticism is that the 20 essays share one template and one set of habits, so the issue reads as machine-made when read together. Fix your essay's share of that:

- **Break the template.** Do not use a subhead named "The case against," "The objection," "The case for X" or anything like it. Put the strongest opposing point where it bites in the argument, in one or two sentences, without the stock frame ("The strongest objection is," "A fair objection is," "Much of that is right. But," "Some of the worry is warranted"). Do not end with "First... Second... Third." Follow your essay's structure assignment below.
- **Cut the summing-up closers.** Delete short sentences at the ends of paragraphs that restate the paragraph's point ("The cushion is thin." "That is the call the M79 cameras got wrong."). Keep one only if it adds a fact.
- **Cut numbers by about half.** No paragraph should carry more than two or three figures unless it is a list. Keep the numbers the argument needs and say what they mean.
- **Explain instead of quoting documents.** Paraphrase bureaucratic phrases unless the exact wording is the point. Don't move from filing to filing.
- **Fewer hedging tags.** Attribute once per source, not every sentence. Drop "as of this writing." Keep dates on facts that will change.
- **Argue as hard as the evidence allows.** If the dossier supports a stronger position than a reporting fix (stop doing something, don't renew, spend money, refuse a vendor), take it. Never go past the evidence. A plain reporting fix is fine when that is what the evidence supports.
- **Headline.** Follow the headline instruction below. AP title case; Vital City capitalizes "To" in infinitives. Dek: one sentence, sentence case, under 30 words, saying something the headline doesn't.
- **Length:** 1,100 to 1,400 words.
- Mechanics as before: no serial comma; "%" in prose (outside quotations); spell out acronyms on first use; "City" for the government, lowercase "city" for the place; "comptroller" lowercase unless a title before a name; no first person; no en dashes; spaces around em dashes; straight quotes are fine. Keep the front matter, CHART and CLAIM MAP blocks (update them if you change what they rely on; the chart dek must not repeat the essay's dek). Every link stays on the phrase it supports.

Do not add facts that aren't verified in the dossier (or newly verified by you, with a quote). Do not run git. Edit only your three files plus a new report.

## Report

Write `_rebuild/checks/<slug>-fix.md`: each review item, your verdict (review right / review wrong / unsettled), the quote that settled it and what you changed; the structural changes; word count before and after; anything Josh must decide.

Final message: three sentences: the most important correction, whether the review got anything wrong, and the new headline.
