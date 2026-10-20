# landlord-algorithm dossier
Checked through: Oct. 19, 2026

Note on method: The web-search budget for this session ran out partway through research. After that point, every claim was checked against primary documents fetched directly: court dockets on CourtListener (RECAP), the Justice Department's case page, the State Comptroller's audit PDF, the arXiv paper and the Council's Legistar records (through the nyc-council tool). The court opinion in RealPage v. James (Dkt. 52) is a scanned image; its text was extracted with optical character recognition (OCR), so quotes from it may have minor OCR artifacts. I checked them against the page images where they mattered.

## Claims

C1. Local Law 144 of 2021 (Int. 1894-2020) was enacted Dec. 11, 2021, returned unsigned by the mayor, and requires a bias audit before an automated employment decision tool is used and notice to candidates.
- Source: NYC Council Legistar record, Int 1894-2020 — https://intro.nyc/1894-2020 (retrieved via the Legistar API, matter 65524)
- Quote: "MatterEnactmentNumber": "2021/144" ... "MatterEnactmentDate": "2021-12-11" ... "Returned Unsigned by Mayor" ... "This bill would require that a bias audit be conducted on an automated employment decision tool prior to the use of said tool. The bill would also require that candidates or employees that reside in the city be notified about the use of such tools"
- Last checked for newer developments: Legistar searches Oct. 19, 2026 for "automated employment decision tools" and "decision tools" returned only this law and Int 1066-2024 (a study of the City's own civil service, now Local Law 25 of 2026). No bill amending Local Law 144 found. See C29.

C2. The Department of Consumer and Worker Protection (DCWP) began enforcing Local Law 144 on July 5, 2023.
- Source: "Automated Employment Decision Tools (AEDT)," DCWP, nyc.gov — https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
- Quote: "DCWP will begin enforcement of this law and rule on July 5, 2023."
- Last checked: page fetched Oct. 19, 2026; no 2025 or 2026 updates posted on it.

C3. Under the law, employers must have a bias audit done no more than a year before using the tool, post a summary, and notify candidates; DCWP can impose civil penalties of $500 to $1,500 per day.
- Source: Office of the New York State Comptroller, "Enforcement of Local Law 144 – Automated Employment Decision Tools," Report 2024-N-6, Dec. 2, 2025 — https://www.osc.ny.gov/files/state-agencies/audits/pdf/sga-2026-24n6.pdf
- Quote: "Conduct a bias audit of the automated employment decision tool (AEDT) no more than 1 year prior to its use. Provide a summary of the results of the most recent bias audit available on their website. Properly notify candidates that an AEDT will be used, how it will be used, and the data that will be collected." ... "DCWP is tasked with enforcing LL144 and can impose civil penalties between $500 and $1,500 per day for violations."
- Last checked: see C1.

C4. The Cornell/Data & Society researchers describe New York City as the first jurisdiction in the world to mandate bias audits of commercial algorithmic systems.
- Source: Lucas Wright et al., "Null Compliance: NYC Local Law 144 and the Challenges of Algorithm Accountability," FAccT '24, arXiv, June 3, 2024 — https://arxiv.org/abs/2406.01399
- Quote: "In July 2023, New York City became the first jurisdiction globally to mandate bias audits for commercial algorithmic systems, specifically for automated employment decisions systems (AEDTs) used in hiring and promotion."
- Last checked: arXiv lists only v1 (June 3, 2024). This is the authors' claim; attributed as such in the essay.

C5. In that study, 155 student investigators checked 391 employers; 18 had posted audit reports and 13 had posted transparency notices.
- Source: same as C4.
- Quote: "In this study, 155 student investigators recorded 391 employers' compliance with LL 144 and the user experience for prospective job applicants. Among these employers, 18 posted audit reports and 13 posted transparency notices."
- Last checked: v1 only.

C6. Because the law lets employers decide whether their tool is covered, the researchers say a missing audit cannot be read as a violation, which they call "null compliance."
- Source: same as C4.
- Quote: "Since the law grants employers substantial discretion over whether their system is in scope of the law, a null result cannot be said to indicate non-compliance, a condition we call "null compliance.""
- Last checked: v1 only.

C7. The State Comptroller's audit covered July 2023 through June 2025 and was released Dec. 2, 2025.
- Source: OSC audit summary page — https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools ; report PDF as in C3
- Quote: "The audit covered the period from July 2023 through June 2025." (PDF cover: "Report 2024-N-6 December 2025"; "December 2, 2025")
- Last checked: Oct. 19, 2026. I could not find the 180-day follow-up DCWP was asked to file (see Could not confirm).

C8. DCWP received two complaints about automated hiring tools during the audit period and did not check whether its intake process worked.
- Source: Report 2024-N-6 (C3)
- Quote: "Despite receiving only two AEDT complaints during the audit's scope, DCWP did not investigate whether the complaint intake process worked."
- Last checked: as C7.

C9. In 12 test calls to 311 in August-September 2024, auditors were transferred to DCWP three times, referred to the state Department of Labor eight times and told once to take the complaint to the employer.
- Source: Report 2024-N-6 (C3)
- Quote: "We performed 12 test calls to 311 between August and September 2024, using keywords related to filing a complaint about an employer's use of AEDTs. Of the 12 calls, 311 Representatives transferred us to DCWP in only three instances (25%)." ... "In eight instances (67%), 311 Representatives referred us to the NYS Department of Labor, and in one instance (8%), they instructed us to refer the complaint directly to the employer rather than any oversight agency."
- Last checked: as C7.

C10. DCWP reviewed 32 companies (22 employers and 10 vendors) named in Cornell and ACLU publications and found one issue; state auditors, using only public information, found at least 17 instances of potential noncompliance among the same companies.
- Source: Report 2024-N-6 (C3)
- Quote: "DCWP surveyed websites and bias audits of 32 companies and identified just a single issue of non-compliance. However, DCWP's review did not use the formal procedures created by OTI, as part of DCWP's MOU, nor did it address all requirements of LL144. We reviewed the same companies and identified at least 17 instances of potential non-compliance under LL144." ... "DCWP officials reviewed 32 company websites—including 22 employers and 10 vendors selling AEDTs—identified in publications from Cornell University and the ACLU" ... "Our review only used information that was publicly available."
- Note: the body text also says "DCWP identified only one instance of potential non-compliance in its review of 22 companies, our review of these same companies identified at least 17." The 32 total includes 10 vendors; the employer-level comparison is 22. The essay uses "32 companies" as the Key Findings do.
- Last checked: as C7.

C11. DCWP had a memorandum of understanding with the Office of Technology and Innovation (OTI) for technical help, including an Enforcement Workbook, but did not use OTI's procedures or consult OTI, though DCWP officials lacked technical expertise.
- Source: Report 2024-N-6 (C3)
- Quote: "DCWP entered into a memorandum of understanding (MOU) with the NYC Office of Technology and Innovation (OTI) to receive technical assistance ... such as through an Enforcement Workbook." ... "Although DCWP officials lack technical expertise to evaluate AEDT use, DCWP officials did not consult with OTI when making determinations about AEDTs."
- Last checked: as C7.

C12. DCWP assigned two attorneys primary responsibility for enforcing the law, and officials told auditors that proactive research was not worth the resources.
- Source: Report 2024-N-6 (C3)
- Quote: "DCWP tasked two attorneys within its General Counsel office with primary responsibility for enforcement of LL144 and resolving related complaints." ... "While DCWP is aware that research, such as periodically reviewing posted bias audits, can be a useful tool to measure potential non-compliance, officials do not believe such research is worth the resource commitment."
- Last checked: as C7.

C13. DCWP generally agreed with the audit's recommendations, which included fixing 311 routing, studying why complaints are so few, using OTI's workbook and finding noncompliance "through research and other leads in addition to complaints."
- Source: Report 2024-N-6 (C3)
- Quote: "DCWP officials generally agreed with the report's recommendations and indicated actions they have taken or will take to implement them." ... "Implement mechanisms to ensure that AEDT complaints received by 311 are properly routed to DCWP." ... "Create and implement a process to improve enforcement actions by identifying potential non-compliance with LL144 through research and other leads in addition to complaints."
- Last checked: as C7.

C14. DCWP says it is hard to find noncompliance when employers take no steps to comply, and that education plus complaint-based enforcement is the most effective approach.
- Source: Report 2024-N-6 (C3)
- Quote: "DCWP officials explained that, if an employer does not take these steps, it's difficult to identify non-compliance. As a result, DCWP officials stated that stakeholder education combined with complaint-based enforcement is the most effective way to enforce compliance with LL144."
- Last checked: as C7.

C15. Across all its work, DCWP received 29,468 complaints in 2024, completed about 2,100 mediations, collected $15.2 million in civil penalties and secured $12.1 million in restitution.
- Source: Report 2024-N-6 (C3)
- Quote: "DCWP officials stated that across all its responsibilities, DCWP received 29,468 complaints in 2024, completed approximately 2,100 mediations, collected $15.2 million in civil penalties, and secured $12.1 million in restitution for New Yorkers."
- Last checked: DCWP's own figures as reported to auditors.

C16. ProPublica reported in October 2022 that RealPage's software recommends rents using data from clients, including private information on what competitors charge, and that clients used its products to manage 19.7 million units by the end of 2020.
- Source: Heather Vogell, "Rent Going Up? One Company's Algorithm Could Be Why," ProPublica, Oct. 15, 2022 — https://www.propublica.org/article/yieldstar-rent-increase-realpage-rent
- Quote: (as extracted) "trove of data RealPage gathers from clients, including private information on what nearby competitors charge" ... "manage 19.7 million rental units of all types"
- Last checked: The state legislature relied on this article (see C24 opinion: "The Legislature relied on an October 2022 exposé in ProPublica that detailed the anti-competitive aspects of Plaintiff's software.").

C17. The Justice Department sued RealPage on Aug. 23, 2024; the proposed final judgment with RealPage was filed Nov. 24, 2025.
- Source: U.S. Department of Justice, Antitrust Division, "U.S. and Plaintiff States v. RealPage, Inc." case page — https://www.justice.gov/atr/case/us-and-plaintiff-states-v-realpage-inc
- Quote: "Case Open Date: August 23, 2024" ... "Nov 24, 2025 | Proposed Final Judgment [RealPage, Inc.]"
- Last checked: page last updated Sept. 4, 2026 (settlements with Pinnacle, Willow Bridge and others since). The case continues against remaining landlord defendants.

C18. Under the settlement, RealPage may not use competitors' nonpublic data in runtime pricing (with limited exceptions), may train models only on data aged at least 12 months and not from active leases, may not stop landlords from rejecting a recommended price, and must accept a monitor for three years.
- Source: Competitive Impact Statement [RealPage, Inc.], U.S. v. RealPage, No. 1:24-cv-00710 (M.D.N.C.), Nov. 24, 2025 — https://www.justice.gov/atr/media/1419471/dl
- Quote: "Subject to limited exceptions, RealPage will not be allowed to use nonpublic data from competing properties in runtime operation. In training the models, RealPage will be limited to using backward-looking data that has been aged at least 12 months and is not from active leases" ... "RealPage may not prohibit or impede a landlord's ability to reject or override a recommended price." ... "A monitor will be appointed for a term of three years, which the United States may extend by up to 18 months if it deems appropriate."
- Last checked: see C19 for entry.

C19. The court entered the RealPage consent decree as a final judgment on May 19, 2026; it takes effect Nov. 15, 2026, and RealPage agreed to abide by it in the meantime.
- Source: Opinion & Order, RealPage, Inc. v. James, No. 1:25-cv-09847 (S.D.N.Y. Sept. 29, 2026), Dkt. 52, p. 3 — https://storage.courtlistener.com/recap/gov.uscourts.nysd.653712/gov.uscourts.nysd.653712.52.0.pdf
- Quote: "Although the Consent Decree had not been entered at the time of briefing on Plaintiff's motion, it was entered as a Final Judgment on May 19, 2026. Final Judgment. Although the Final Judgment is effective 180 days after it is filed (i.e., not until November 15, 2026), see id. at 12, RealPage agreed to abide by it in the interim."
- Last checked: DOJ case page does not yet list the RealPage final judgment; the court's citation (M.D.N.C. Dkt. 194) is the source.

C20. Mary Louis and other plaintiffs sued SafeRent Solutions in federal court in Massachusetts on May 25, 2022, alleging its tenant-screening score relied heavily on non-tenancy debt and disproportionately denied housing to applicants with vouchers, especially Black and Hispanic applicants.
- Source: Memorandum in support of final approval, Louis v. SafeRent Solutions, LLC, No. 1:22-cv-10800 (D. Mass.), Dkt. 132, Nov. 8, 2024 — https://storage.courtlistener.com/recap/gov.uscourts.mad.245090/gov.uscourts.mad.245090.132.0.pdf
- Quote: "On May 25, 2022, Plaintiffs filed this putative class action against Defendant SafeRent, challenging its proprietary "SafeRent Score" product ... The Amended Complaint alleges that the SafeRent Score is calculated using a formula that results in the disproportionate denial of rental housing for rental housing applicants who use housing choice vouchers, with a further disparate impact on Black and Hispanic applicants who use vouchers, because the formula relies heavily on non-tenancy debt, which Plaintiffs allege is not predictive of the ability to pay rent."
- Last checked: case closed with judgment Nov. 20, 2024 (Dkt. 137). These are the plaintiffs' allegations; SafeRent did not admit them (not quoted; essay says "alleged").

C21. Judge Angel Kelley granted final approval of the SafeRent settlement on Nov. 20, 2024.
- Source: CourtListener docket, Louis v. SafeRent, Dkt. 135 — https://www.courtlistener.com/docket/63335697/louis-v-saferent-solutions-llc/ (entry text retrieved via API); order PDF https://storage.courtlistener.com/recap/gov.uscourts.mad.245090/gov.uscourts.mad.245090.135.0.pdf
- Quote: "District Judge Angel Kelley: FINAL APPROVAL ORDER entered. (Lara, Miguel) (Entered: 11/20/2024)"; order: "GRANTED under Rule 23(e)(2) of the Federal Rules of Civil Procedure."
- Last checked: Oct. 19, 2026; no later entries changing it.

C22. SafeRent agreed to pay $1,175,000 into a settlement fund, with attorneys' fees of up to $1.1 million paid separately, and to stop including a SafeRent Score or accept/decline recommendation in reports for its "Affordable Model" unless a score has been validated for voucher holders.
- Source: Dkt. 132 (C20)
- Quote: "SafeRent will pay a sum of $1,175,000 into a Settlement Fund within thirty days of the Effective Date." ... "any money remaining from the $1,100,000 will be added to the amount paid into the Settlement Fund." ... "SafeRent will cease including a SafeRent Score or an accept/decline recommendation based on a tenant screening score in any of its score reports generated for housing providers who subscribe to or purchase SafeRent's "Affordable Model," ... unless that tenant screening score has been validated for its use for applicants with housing vouchers by the National Fair Housing Alliance or any similar organization agreed to by the Parties."
- Note: total is $2,275,000 if the full fee is awarded. The essay gives the fund and fee figures separately.

C23. New York City's Fair Chance for Housing Act, Local Law 24 of 2024, bars landlords from considering criminal record until after determining an applicant's other qualifications, with limited exceptions.
- Source: NYC Council Legistar, Int 0632-2022 — https://intro.nyc/0632-2022
- Quote: "This bill would prohibit housing discrimination on the basis of criminal history, with limited exceptions. Landlords, owners, brokers and other covered entities may not consider criminal record until after determining a housing applicant's other qualifications." ... "MatterNotes": "Local Law 24 of 2024"
- Last checked: Oct. 19, 2026 (enacted Jan. 20, 2024).

C24. New York State enacted General Business Law § 340-b (S.7882) on Oct. 16, 2025; Section 2 bars facilitating agreements not to compete, including through software with a "coordinating function," and Section 3 bars landlords from setting rents based on such software's recommendations.
- Source: Opinion & Order, RealPage v. James, Dkt. 52, p. 4 (C19 URL)
- Quote: "On October 16, 2025, New York State enacted New York General Business Law § 340-B (the "Statute")." ... "Its first provision forbids anyone from facilitating agreements between horizontal competitors in the residential rental market not to compete on pricing, including via software that performs a "coordinating function." N.Y. Gen. Bus. Law § 340-B(2). The Statute's second provision operates against residential rental property owners and managers. It makes it unlawful to set or adjust lease terms based on recommendations from a software performing a "coordinating function." N.Y. Gen. Bus. Law § 340-B(3)."
- Also: Attorney General's Answer, Dkt. 55 (Oct. 13, 2026): "admits that Governor Kathy Hochul signed the Act into law on October 16, 2025" — https://storage.courtlistener.com/recap/gov.uscourts.nysd.653712/gov.uscourts.nysd.653712.55.0.pdf . Some news reports say Oct. 15; the court and the AG say Oct. 16.
- The law took effect in December 2025: Multifamily Dive, Oct. 2, 2026 — https://www.multifamilydive.com/news/realpage-injunction-new-york-algorithmic-rent-setting-ban/832045/ — "its residential rent-pricing algorithm prohibition, which took effect in December 2025."

C25. RealPage sued the attorney general on Nov. 26, 2025, on First Amendment grounds, and the state agreed not to enforce the law while the court considered RealPage's motion for a preliminary injunction.
- Source: Dkt. 52, p. 1 (C19 URL)
- Quote: "On November 26, 2025, Plaintiff, RealPage, Inc. ... sued alleging that the law violates the First Amendment. On December 5, 2025, Plaintiff moved to preliminarily enjoin enforcement of the law. The parties promptly agreed to a briefing schedule, and the State agreed to stay enforcement of the law pending a decision on Plaintiff's motion for a preliminary injunction."
- Note: page 4 of the opinion says "Plaintiff sued on November 11, 2025"; the docket (CourtListener) shows the case filed 2025-11-26, matching page 1. Essay uses Nov. 26 only implicitly ("in November 2025").

C26. On Sept. 29, 2026, Judge Valerie Caproni preliminarily enjoined enforcement of Section 3 (the landlord provision), let Section 2 stand, and denied the state's motion to dismiss, calling the question "a close call."
- Source: Dkt. 52, pp. 1, 9, 16-17, 26 (C19 URL)
- Quote: "Although it is a close call, the Court determines that, at this stage, RealPage is, marginally, likely to succeed on the merits." ... "Section 2 survives intermediate scrutiny." ... "Defendant ... [is] preliminarily enjoined from enforcing or causing to be enforced N.Y. Gen. Bus. Law § 340-B(3)."
- Last checked: docket through Oct. 13, 2026.

C27. The judge wrote that the legislation's basis had "relatively thin support" as applied to RealPage's current product, and that the state should be prepared to explain the harm of recommendations based almost entirely on public data.
- Source: Dkt. 52, p. 18, n. (C19 URL)
- Quote: "The Court notes that, as currently pled, the basis for the legislation has relatively thin support when considered in the context of RealPage's current product. Moving forward, the State should be prepared to explain the harm of pricing recommendations based on algorithms that rely almost entirely on public data (and do not rely on non-public data from horizontal competitors)."

C28. On Oct. 13, 2026, the attorney general moved for reconsideration of the injunction as to Section 3.
- Source: Notice of Motion, RealPage v. James, Dkt. 56, Oct. 13, 2026 — https://storage.courtlistener.com/recap/gov.uscourts.nysd.653712/gov.uscourts.nysd.653712.56.0.pdf
- Quote: "Defendant Letitia James ... hereby moves this Court ... for an Order granting reconsideration of the Court's September 29, 2026 Order pursuant to Local Civil Rule 6.3, to the extent the Order granted Plaintiff's motion for a preliminary injunction as to Section 3, as codified in N.Y. Gen. Bus. Law § 340-b(3), vacate the preliminary injunction"
- Last checked: no ruling on reconsideration in the docket as of Oct. 19, 2026. Initial pretrial conference set for Oct. 30, 2026 (Dkt. 52, p. 26).

C29. The Council has not amended Local Law 144, but it keeps taking up bills on private pricing algorithms, including a 2026 bill to ban "surveillance pricing," laid over in committee.
- Source: NYC Council Legistar, Int 0891-2026 — https://intro.nyc/0891-2026 ; searches for "automated employment decision tools" and "decision tools" (Oct. 19, 2026)
- Quote: "Prohibiting surveillance pricing." ... "This bill would prohibit any person that sells, leases, or rents goods or services, whether online or offline, from engaging in surveillance pricing." ... "MatterIntroDate": "2026-05-14" ... "MatterStatusName": "Laid Over in Committee"
- Caveat: Legistar's search matches titles only. A bill amending § 20-870 et seq. under a different title could be missed.

C30. The Comptroller's audit itself noted Local Law 144 was "reportedly, one of the first laws of its kind in the nation."
- Source: Report 2024-N-6 (C3)
- Quote: "Reportedly, one of the first laws of its kind in the nation, the purpose of the Law is to promote transparency and accountability in the use of these tools by requiring employers to conduct bias audits and provide notice to candidates when they are used."

## Could not confirm
- A New York City local law banning algorithmic rent-setting. The assignment describes "New York City's 2025 local law banning algorithmic rent-setting." I found no such law. Legistar searches ("algorithmic," "algorithmic rent," "pricing," "rental," "software") turned up nothing on rent-setting software, and news coverage (Multifamily Dive, MLex, Morgan Lewis, PYMNTS) describes only the state law, S.7882 / GBL § 340-b. The RealPage lawsuit is against the state attorney general, not the City. The essay treats the ban as a state law.
- Whether DCWP filed its 180-day response to the Comptroller (due about June 2026) or changed its enforcement since the audit. The DCWP page shows no updates, and the search budget ran out before I could look further. Law-firm and vendor blogs claiming that enforcement is "ramping up" in 2026 are unsourced; not used.
- Whether 311 routing for AI hiring tool complaints has been fixed since the audit.
- Whether the DOJ settlement includes any money payment. The Competitive Impact Statement describes only conduct remedies; one news summary said there were no financial penalties, but I did not fetch that text. Not used.
- Number of New York City apartments priced with RealPage or similar software. No reliable figure found.
- Whether the New York City Commission on Human Rights runs matched-pair testing for source-of-income or criminal-history screening (a natural model for the fix). The page I tried returned 404 and I could not search. Left out.
- New York State rules on tenant-screening reports beyond the City's Fair Chance law (for example, limits on eviction-record "blacklists"). Not verified; left out.

## Notes for other essays
- Local Law 25 of 2026 (Int 1066-2024, enacted Jan. 17, 2026, returned unsigned): requires the City to study how algorithmic tools and automated employment decision tools affect civil service hiring and job functions. Fits `the-desk`.
- Int 0161-2026 (reporting on algorithmic tools' effects on City employees) was laid over at the Committee of the Whole on Oct. 5, 2026, the date of the Council AI hearing in LEADS. Fits `the-desk` or `the-inventory`.
- Local Laws 188 and 195 of 2025 (Office of Algorithmic Accountability; public list of assessed AI systems), both enacted Dec. 25, 2025, returned unsigned. Fits `the-inventory`.
- Int 0959-2026 and Int 0960-2026 (algorithmic tools in schools; reporting on data breaches), introduced June 30, 2026, in committee. Fits `schools`.
- The Comptroller found that the 311 Call Center Inquiry dataset logged 17 AEDT inquiries from July 5, 2023, to June 4, 2025, with empty "Agency" and "Call Resolution" fields. Possibly useful for `the-inventory` or `front-door`.
- Judge Caproni's ruling treats algorithmic price recommendations as commercial speech. Fits `preemption`, as a constraint on state and local AI rules separate from federal preemption.

## Claims added by fact-checker (Oct. 19, 2026)

C31. DCWP officials suggested the low number of complaints could reflect low interest among New Yorkers or the law's preventive effect.
- Source: Report 2024-N-6 (C3), p. 9 — https://www.osc.ny.gov/files/state-agencies/audits/pdf/sga-2026-24n6.pdf
- Quote: "DCWP officials indicated that DCWP received only two complaints during our audit and noted several possibilities for the low number of complaints received, including potential low interest by New Yorkers as well as the Law's preventive effect."

C32. DCWP says 311 has accepted electronic AEDT complaints since May 2025, routed automatically to DCWP, and that OTI sent 311 call-center staff refresher training in July 2025. The Comptroller replied that the audit's problem was with calls handled by 311 representatives.
- Source: Report 2024-N-6 (C3), DCWP response, pp. 28-30
- Quote: "Notably, 311 is now able to accept electronic service requests for AEDT complaints, which are systemically routed to DCWP. In addition, in July 2025, OTI sent a refresher training on AEDTs to its 311 Call Center Representatives." ... "Notably, as of May 2025, 311 can receive electronic AEDT complaints." ... State Comptroller's Comment: "DCWP conflates 311 complaints received electronically with those processed by 311 Representatives."

C33. The RealPage compliance monitor is selected by the United States, not the court, and serves three years (extendable 18 months). The settlement carries no financial penalty.
- Source: Competitive Impact Statement (C18 URL), p. 20 — https://www.justice.gov/atr/media/1419471/dl
- Quote: "The proposal Final Judgment requires that RealPage be subject to an appointed compliance monitor selected by the United States in its sole discretion." ... "The monitor will serve for three years from the approval of the workplan."
- No money: HousingWire, Nov. 26, 2025 — https://www.housingwire.com/articles/realpage-doj-settlement/ — "According to the settlement announcement, RealPage will not face any financial penalties." The CIS describes only conduct remedies. (Several news reports call the monitor "court-appointed"; the CIS says the United States selects it.)

C34. No New York City local law on algorithmic rent-setting exists. Fact-checker's Legistar title searches (live API, Oct. 19, 2026) for "algorithm," "algorithmic pricing," "rent algorithmic," "rent software," "rental housing algorithm," "price-setting," "collusion," "pricing," "software" and "rent recommendations" returned no such bill, introduced or enacted. Web searches (Oct. 19, 2026) found coverage only of the state law (S.7882 / GBL § 340-b) and of other cities' bans (San Francisco, Philadelphia, Minneapolis, Jersey City and others). Caveat: Legistar search matches titles only.

C35. As of Oct. 19, 2026, no ruling on the attorney general's reconsideration motion. RECAP's latest entries are Dkts. 55-57, all Oct. 13, 2026 (answer, notice of motion, memorandum). MLex (Oct. 14, 2026), https://www.mlex.com/mlex/articles/2537855 , reported the motion argues the court overlooked the state's submissions on public and nonpublic data; full text paywalled.

C36. Int 0891-2026 (surveillance pricing, sponsor Menin) was introduced May 14, 2026, and laid over by the Committee on Consumer and Worker Protection on June 17, 2026.
- Source: Legistar via nyc-council get_bill, Oct. 19, 2026 — https://intro.nyc/0891-2026
- Quote: "MatterStatusName": "Laid Over in Committee" ... "MatterEXText10": "Laid Over by Committee" ... "MatterEXDate10": "2026-06-17T10:00:00"

C37. The opinion's "thin support" footnote is qualified: "as currently pled." The "close call" language refers to RealPage's likelihood of success on the merits.
- Source: Dkt. 52, p. 13 and p. 18 n.10 (C19 URL)
- Quote: "Although it is a close call, the Court determines that, at this stage, RealPage is, marginally, likely to succeed on the merits." ... "The Court notes that, as currently pled, the basis for the legislation has relatively thin support when considered in the context of RealPage's current product."

## Claims added in the second-round fix (Oct. 20, 2026)

C38. DCWP's formal response to the audit is more resistant than the report's "generally agreed" summary. It rejected Recommendation 7 (study why complaints are few), rejected Recommendation 9 ("research and other leads") to the extent it requires additional resources, limited Recommendation 11 (annual audit monitoring) to businesses it had engaged with, would not adopt Recommendation 12 (investigate the auditors' findings) in full, and adopted Recommendation 10 (OTI workbook) only "to the extent using such resources is necessary." It accepted Recommendations 1-6, 8 and 13. Its stated reasons: attorneys' other responsibilities, no added resources, dozens of laws to enforce, no efficient way to find employers that use these tools, and "no evidence of widespread non-compliance." The comptroller replied that DCWP had acknowledged applicants cannot know when a tool is used.
- Source: Report 2024-N-6, DCWP response and State Comptroller's Comments, PDF pp. 27-29 and 36-39 (report pp. 26-28, 35-38) — https://www.osc.ny.gov/files/state-agencies/audits/pdf/sga-2026-24n6.pdf (local copy checks/pdfs/landlord-algorithm/osc-2024-N-6.pdf)
- Quotes: Rec. 7: "do not agree that steps are needed to "address" the low number of complaints" ... "DCWP rejects this recommendation but notes that implementing other recommendations from this audit will mitigate concerns regarding misrouting of complaints." Rec. 9: "To the extent that this recommendation suggests that DCWP allocate additional resources to such research, DCWP notes that we have seen no evidence of widespread non-compliance to warrant such allocation. As previously explained to the auditors, since employer and employment agency hiring practices are not typically transparent, there is no efficient method for determining which employers and employment agencies are using AEDTs in NYC. Notably, DCWP attorneys have many other responsibilities spread throughout DCWP's portfolio, and DCWP did not receive any additional resources dedicated to the enforcement of LL 144. Thus, DCWP must be judicious in how it allocates resources to LL 144, among the dozens of laws it enforces." ... "DCWP rejects this recommendation to the extent it suggests DCWP must commit additional resources to identifying potential noncompliance with LL 144 through research and leads other than complaints." State Comptroller's Comment: "By rejecting our recommendation, DCWP will not address the weakness in its LL144 enforcement processes." Rec. 10: "DCWP can adopt this recommendation to the extent using such resources is necessary." Rec. 11: "DCWP can adopt this recommendation and monitor continued compliance with respect to businesses DCWP has engaged with regarding AEDT use." Rec. 12: "DCWP may review some potential non-compliance with LL 144 identified in this report but will not adopt this recommendation in full." Comptroller (p. 28): "despite acknowledging in its response the inability of job applicants to even know when an AEDT was used ... It is unclear how DCWP expects individuals to report AEDT issues to advocates if they lack the ability to know when such tools are used." Report body (p. 25): "DCWP officials generally agreed with the report's recommendations and indicated actions they have taken or will take to implement them."
- Fetched/read: Oct. 20, 2026, from the local copy of the audit PDF downloaded Oct. 19.

C39. The court entered the RealPage final judgment on May 19, 2026 (M.D.N.C. Dkt. 194, signed by Judge William L. Osteen Jr.). The judgment says it does not limit state or local authority to impose additional requirements on the use of nonpublic data.
- Source: Final Judgment, United States v. RealPage, Inc., No. 1:24-cv-710 (M.D.N.C.), Dkt. 194, filed 05/19/26 — https://storage.courtlistener.com/recap/gov.uscourts.ncmd.99417/gov.uscourts.ncmd.99417.194.0.pdf
- Quotes: p. 1: "This matter is before the court on the United States' Unopposed Motion and Memorandum in Support of Entry of Final Judgment. (Doc. 192.) The United States of America ("United States") moves the court to enter the proposed Final Judgment with Defendant RealPage, Inc." ... p. 38: "IT IS SO ORDERED. This the 19th day of May, 2026." (signed William L. Osteen, Jr., United States District Judge; footer "Document 194 Filed 05/19/26"). p. 37 (Section XV): "Nothing in this Final Judgment impairs or limits any authority of a State or local government to impose different or additional requirements on the use of Nonpublic Data by statute, regulation, or ordinance, or affects Defendant's obligations under state or local law." p. 23: "The Monitor will serve for a term of three years beginning on the date that the Monitor's written work plan is finalized"; p. 18: "a Monitor selected by the United States in its sole discretion and approved by the Court."
- Supporting docket entries (CourtListener search API, docket 69074245, Oct. 20, 2026): Dkt. 192, May 14, 2026, "Consent MOTION for Entry of Consent Decree (Proposed Final Judgment re Defendant RealPage, Inc.) by UNITED STATES OF AMERICA"; Dkt. 193, May 19, 2026, "FINAL JUDGMENT signed by JUDGE WILLIAM L. OSTEEN, JR on 5/19/2026" (LivCor, same day). The Justice Department's case page had not been updated to list the RealPage judgment, which explains the outside review's flag.
- Fetched: Oct. 20, 2026.
