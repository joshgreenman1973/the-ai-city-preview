# landlord-algorithm fact-check
Checked: Oct. 19, 2026. Statements checked: 68.

Downloaded sources are in `_rebuild/checks/pdfs/landlord-algorithm/`: the Comptroller's audit, the DOJ Competitive Impact Statement, RealPage v. James Dkts. 52, 55 and 56, and SafeRent Dkts. 132 and 135. Dkt. 52 is a scanned image, so I read the quoted pages (1, 3, 4, 13, 16-26) directly from page images.

## Errors found and fixed
- "it must accept a court-appointed monitor for three years" → "it must accept a monitor, chosen by the Justice Department, for three years." Why: the CIS says the monitor is "selected by the United States in its sole discretion" (p. 20). Several news reports said "court-appointed," which is wrong. https://www.justice.gov/atr/media/1419471/dl
- "State auditors reviewed the same companies ... and found at least 17" → "State auditors reviewed the 22 employers in that group ... and found at least 17." Why: the report body says "For the 22 employers, we performed a similar review" and "Whereas DCWP identified only one instance ... in its review of 22 companies, our review of these same companies identified at least 17." The Key Findings blur this. Chart row changed to match. https://www.osc.ny.gov/files/state-agencies/audits/pdf/sga-2026-24n6.pdf
- "rules for software that sorts job applicants, scores tenants and recommends rents" → "rules for software that sorts job applicants and recommends rents." Why: no New York City or state rule specific to tenant-scoring software was found. The Fair Chance for Housing Act governs criminal-history screening generally, and the SafeRent case was in Massachusetts.
- "Complaints drive most of what the agency does, and at scale." → "The agency handles complaints at scale." Why: the same DCWP figures include about 54,000 inspections and about 1,000 investigations in 2024 (report p. 27). Nothing supports "most."
- "The few complaints may also reflect how few employers use these tools." → "DCWP also suggested the few complaints may reflect low interest among New Yorkers or the law's deterrent effect." Why: DCWP did not offer the "few employers" explanation. It cited "potential low interest by New Yorkers as well as the Law's preventive effect" (report p. 9).
- "a broad rule can sweep in lawful business and lose in court" → "... and be blocked in court." Why: the ruling is a preliminary injunction, not a final judgment, and a reconsideration motion is pending.
- "a newspaper investigation, a private lawsuit and federal prosecutors" → "... and a federal antitrust suit." Why: U.S. v. RealPage is a civil suit, not a prosecution. https://www.justice.gov/atr/case/us-and-plaintiff-states-v-realpage-inc
- "She called it 'a close call.'" → "She called RealPage's likely success on the merits 'a close call.'" Why: Dkt. 52 p. 13 reads "Although it is a close call, the Court determines that, at this stage, RealPage is, marginally, likely to succeed on the merits." https://storage.courtlistener.com/recap/gov.uscourts.nysd.653712/gov.uscourts.nysd.653712.52.0.pdf
- "The judge wrote that the law's basis 'has relatively thin support...'" → added "as the state has pleaded it so far." Why: the footnote says "as currently pled," and the quote had dropped that qualifier (Dkt. 52 p. 18 n.10).
- "SafeRent agreed to pay $1,175,000 into a fund for applicants and up to $1.1 million more in legal fees" → "into a settlement fund and up to $1.1 million more in legal fees and costs." Why: the fund also pays notice and administration costs and service awards, and the cap covers "attorneys' fees and costs" (Dkt. 132 pp. 5-6). https://storage.courtlistener.com/recap/gov.uscourts.mad.245090/gov.uscourts.mad.245090.132.0.pdf
- "The Council has kept writing new rules for private pricing software ... which has been laid over in committee" → "Council members have kept proposing new rules ... which was laid over in committee in June." Why: none of these bills has been enacted. Int 0891-2026 was laid over June 17, 2026. https://intro.nyc/0891-2026
- Chart dek: "Cornell/Data & Society study (2023)" → "(published 2024)." Why: arXiv v1 is dated June 3, 2024 (FAccT '24), and I could not confirm the year the data was collected. https://arxiv.org/abs/2406.01399

## Unverifiable, cut or softened
- "A search of the Council's legislative records turns up no bill to amend Local Law 144" → softened to "A search of the Council's bill titles." The Legistar API searches titles only, so a bill amending Admin. Code § 20-870 under another title could be missed.

## Better statistic available
- None needed. For context: DCWP's full 2024 workload was 29,468 complaints, about 54,000 inspections, about 1,000 investigations and about 2,100 mediations (report p. 27). This would back up the essay's point that the agency works at scale.

## Confirmed
Special checks requested:
- **No New York City local law bans algorithmic rent-setting. The writer's conclusion holds.** I ran live Legistar title searches for "algorithm," "algorithmic pricing," "rent algorithmic," "rent software," "rental housing algorithm," "price-setting," "collusion," "pricing," "software," "rent recommendations," "automated employment" and "bias audit." None returned a rent-setting bill, introduced or enacted. The algorithm-related Local Laws of 2025-26 are LL 188/2025 (Office of Algorithmic Accountability), LL 195/2025 (assessed-AI list) and LL 25/2026 (civil service study), and none is about rent. Two web searches turned up only the state law (S.7882 / GBL § 340-b) and bans in other cities (San Francisco, Philadelphia, Minneapolis, Jersey City and others). The RealPage suit names only the state attorney general. Recorded as dossier C34.
- **The Sept. 29, 2026 Caproni ruling checks out.** Opinion & Order, Dkt. 52, filed 9/29/26. Section 3 is preliminarily enjoined, Section 2 "survives intermediate scrutiny" (p. 17), the motion to dismiss is denied, and the initial conference is Oct. 30, 2026.
- **The Oct. 13 reconsideration motion checks out.** Notice of Motion, Dkt. 56, filed 10/13/26, seeks reconsideration of the Sept. 29 order as to § 340-b(3) under Local Civil Rule 6.3. RECAP shows Dkts. 55-57 (all Oct. 13) as the latest entries, with no ruling. MLex reported the motion on Oct. 14 (https://www.mlex.com/mlex/articles/2537855).
- **DOJ settlement dates and money:** suit opened Aug. 23, 2024; proposed final judgment, stipulation and CIS filed Nov. 24, 2025; final judgment entered May 19, 2026 (M.D.N.C. Dkt. 194) and effective Nov. 15, 2026, with RealPage agreeing to comply in the interim (Dkt. 52 p. 3). **The settlement includes no money:** the CIS lists only conduct remedies, and HousingWire (Nov. 26, 2025) reported "RealPage will not face any financial penalties" (https://www.housingwire.com/articles/realpage-doj-settlement/). The essay never says money was involved, so no change was needed. The DOJ case page (updated Sept. 4, 2026) does not yet list the RealPage final judgment.
- **No public DCWP follow-up to the Local Law 144 audit was found.** The DCWP AEDT page (fetched Oct. 19) has no 2025 or 2026 updates. I found no 180-day response (due about June 2026) and no follow-up audit from the Comptroller. A Seyfarth alert from about October 2026 describes remarks by DCWP Commissioner Sam Levine signaling closer scrutiny of AI at work, but per the search summary it announced no specific rulemaking. The page blocked fetching, and the essay does not rely on it.

Essay statements:
- 12 test calls Aug.-Sept. 2024; 3 transferred to DCWP, 8 sent to the state Department of Labor, 1 told to go to the employer — report p. 10
- Two complaints during the audit scope; DCWP never checked whether intake worked — report pp. 1, 9
- Audit covered July 2023-June 2025 and was released Dec. 2, 2025 — https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools
- LL 144 requires an audit no more than a year before use, a posted summary and notice to candidates — report p. 2; https://intro.nyc/1894-2020
- Penalties of $500 to $1,500 a day — report p. 2
- Enforcement began July 5, 2023 — https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
- "first jurisdiction globally to mandate bias audits for commercial algorithmic systems" — https://arxiv.org/abs/2406.01399 (authors include Matias of Cornell and Metcalf of Data & Society)
- 155 student investigators, 391 employers, 18 posted audits, 13 posted notices, "null compliance" — arXiv abstract
- Two attorneys had primary responsibility — report p. 3
- 32 companies (22 employers, 10 vendors) from Cornell and ACLU publications, with one issue found — report pp. 2, 16
- The OTI MOU and Enforcement Workbook exist, and DCWP did not use the workbook — report pp. 2, 16-17
- "worth the resource commitment" — report p. 9
- Int 0891-2026 introduced May 14, 2026 and laid over — Legistar
- ProPublica/Vogell, Oct. 2022, "trove of data ... what nearby competitors charge" — https://www.propublica.org/article/yieldstar-rent-increase-realpage-rent
- Settlement terms: no competitors' nonpublic data at runtime (limited exceptions), model training only on data aged 12+ months and not from active leases, three-year monitor — CIS pp. 4-6, 20
- SafeRent suit filed May 25, 2022, with the plaintiffs' allegations as stated — Dkt. 132 p. 2
- Judge Kelley gave final approval Nov. 20, 2024 — Dkt. 135
- The "Affordable Model" score is barred unless validated for voucher holders — Dkt. 132
- Fair Chance for Housing Act (LL 24 of 2024) bars criminal-record checks until other qualifications are reviewed — https://intro.nyc/0632-2022
- GBL § 340-b enacted Oct. 16, 2025, with Sections 2 and 3 as described — Dkt. 52 p. 4; the AG's Answer (Dkt. 55) "admits that Governor Kathy Hochul signed the Act into law on October 16, 2025"
- RealPage sued Nov. 26, 2025 on First Amendment grounds, and the state agreed to stay enforcement pending the motion — Dkt. 52 p. 1
- RealPage now prices from customer data plus public information, with two limited exceptions — Dkt. 52 p. 3 (citing RealPage's complaint)
- The state should "be prepared to explain the harm" of recommendations built on public data — Dkt. 52 p. 18 n.10
- DCWP's view that education plus complaint-based enforcement works best — report p. 2
- 29,468 complaints, $15.2 million in penalties, $12.1 million in restitution — report p. 3
- DCWP generally agreed; the "research and other leads" recommendation — report pp. 2, 25

## Judgment calls for the editor
- **Fairness on 311.** The proposal to "fix the 311 script" read as if nothing had been done. In its response DCWP says 311 has taken online AEDT complaints since May 2025 and that operators got refresher training in July 2025. The Comptroller replied that the problem was calls handled by operators, which those steps don't address. I added one parenthetical sentence; cut it if it reads as clutter, but the essay should not imply DCWP has done nothing.
- **DCWP's rebuttal on the workbook.** DCWP told the auditors the OTI workbooks "are helpful on complex cases, but are not necessary to use in all circumstances." DCWP also says it got no extra resources for LL 144 and that its lawyers carry heavy other caseloads. The essay's line "The staff and the workbook already exist" is the writer's argument. It is defensible, but it brushes past DCWP's stated resource objection. Consider a clause acknowledging it.
- **"They read company websites and placed phone calls."** The 17-violation review used public website information. The phone calls were the separate 311 test. That is accurate as a summary of the whole audit, but it slightly merges the two exercises.
- **Signing date.** Some news reports (e.g. City Limits) give Oct. 15, 2025 for the signing. The court and the AG's sworn Answer both say Oct. 16, and the essay follows the court record.
- **The headline and "Should test them, too."** This is the essay's argument, and it is labeled as such. No problem.
- **Fair Chance for Housing Act.** It is accurate but only loosely tied to algorithms; it is a screening rule, not a software rule. Fine as context.
