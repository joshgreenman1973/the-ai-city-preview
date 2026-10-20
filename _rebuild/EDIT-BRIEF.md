# Edit brief: The Algorithmic City rebuild

Today is Oct. 19, 2026. You are the line and structural editor for one essay in a Vital City special issue written by AI (byline "A. Bot"). The essay has been researched by one writer and independently fact-checked by another. Your job is to make it read as if a very good human policy journalist wrote it, without changing a single fact.

Files (replace <slug>), under `/Users/joshgreenman/Experiments/vital-city-tools/the-ai-city-preview/_rebuild/`:
- `drafts/<slug>.md` — the essay (you edit this in place)
- `checks/<slug>.md` — the fact-check report; read its "Judgment calls for the editor" section and resolve each item
- `research/<slug>.md` — the dossier; the only source of facts you may use
- `BRIEF.md` — the original writing brief (style and bans)

Read first, in full:
- `/Users/joshgreenman/.claude/skills/how-not-to-write/SKILL.md`
- `/Users/joshgreenman/.claude/skills/vital-city-voice/SKILL.md`
- `/Users/joshgreenman/.claude/skills/vital-city-voice/references/style-and-proofreading-guide.md`

## Rules

1. **No new facts.** Every factual statement must already be in the dossier (as a numbered claim) or the check report's confirmed list. You may cut facts, reorder them, and reword them, but rewording must not change meaning, strength or precision. If you change a number's rounding, it must still match the source and not lean toward the argument. Do not web search for new material.
2. **Resolve the checker's judgment calls.** For each, either fix the text (soften an overclaim, add a missing qualifier, give the opposing view its due from material in the dossier) or leave it and say why in your report.
3. **Kill the tells.** Go through how-not-to-write's "Before sending" list line by line, plus the hard bans in BRIEF.md. Pay special attention to:
   - negation-then-reveal in any form, including "X, not Y" in headlines and deks and "The danger is less X than Y"
   - two-beat endings and short dramatic closers; end on a concrete, flat sentence
   - subheads that are mini-aphorisms; subheads should be plain labels or plain statements (sentence case)
   - paragraphs that open by announcing what the paragraph will do
   - rule-of-three lists by reflex
   - parallel paragraph shapes repeated across the essay (every section ending on a zinger, every paragraph opening with a date)
   - abstract nouns doing the work of named actors and actions
   - hedges stacked on hedges, and "it is worth noting"
4. **Make it better writing, not just cleaner.** Is the thesis clear in the first three paragraphs? Does the opening earn the reader's attention with a real, specific fact or case? Does the strongest opposing case get a fair hearing? Does the ending propose something specific? Is anything in the essay there only because the writer found it, not because the argument needs it? Cut it. Vary sentence length. Use one-sentence paragraphs where a point deserves its own air, but not as a tic. Target 1,200 to 1,500 words.
5. **Mechanics (Vital City stylebook):** no serial comma; headline in title case (AP title case: capitalize words of four letters or more; lowercase a, an, the, and, but, or, for, nor, to-as-preposition except "to" in infinitives, which Vital City capitalizes); dek sentence case, no final period unless it is a full sentence; every acronym spelled out on first use; "New York City" on first reference; "City" capitalized for the government, lowercase for the place; "the Council"; "state" lowercase; spaces around em dashes; no en dashes (use "to" for ranges in prose); no italics; "%" in prose (stylebook: "Use %, not percent"); AP numbers (spell out one through nine, figures for 10 and up, figures always for percentages, ages, dollars); AP dates and months (Oct. 19, 2026; abbreviate Jan., Feb., Aug., Sept., Oct., Nov., Dec. with a date; spell out with month alone); "fiscal 2026" for City fiscal years. Straight quotes are fine; they will be converted later.
6. **Links:** keep every source link. Each must stay attached to the sentence it supports. Don't link a whole paragraph's worth of text; link the key phrase.
7. **Keep the front matter, CHART and CLAIM MAP blocks.** Update the CLAIM MAP if you move or cut paragraphs. You may sharpen the chart title (sentence case; it should say what the data mean) but not its data. You may improve the headline and dek; keep the slug.
8. Edit only `drafts/<slug>.md` and write your report. Do not run git.

## Report

Write `_rebuild/checks/<slug>-edit.md`:
- word count before and after
- how you resolved each judgment call
- the tells you removed (quote a few before → after)
- anything you think the human editor (Josh Greenman, editor of Vital City) should decide

Final message: two or three sentences, including the new headline and dek.
