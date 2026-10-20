# schools fact-check
Checked: Oct. 19, 2026. Statements checked: 62.

Sources were downloaded with curl and read as text; copies are in `_rebuild/checks/pdfs/schools/`. The Wharton page blocked curl and was read with WebFetch.

## Errors found and fixed
- "The rules are being applied case by case: on Oct. 9, Chalkbeat reported the first exemption, for virtual tutors in a City University of New York reading program." → "The companion screen-time rules are being applied case by case: on Oct. 9, Chalkbeat reported the first exemption to the device ban for young students, for human tutors who teach by video in a City University of New York reading program." Why: the exemption was to the 1:1 device ban for grades 2 and below, not the AI moratorium. "Virtual tutors" in an AI essay reads as AI tutors, but these are human tutors on video ("programs that use human teachers for real-time instruction, as opposed to platforms where instruction is delivered by software, could qualify"). https://www.chalkbeat.org/newyork/2026/10/09/cuny-reading-fellows-school-mamdani-device-ban-exception/
- "A tutor built to withhold answers, used under supervision, can help. An open chatbot used alone can hurt." → "A carefully designed tutor, or a chatbot used with a teacher's support, can help. An open chatbot with no guardrails can hurt." Why: the Harvard tutor was not supervised. Students used it "at home, on their own." The Bastani tutor arm only "largely mitigated" harm on the exam; it did not show an exam gain. https://www.nature.com/articles/s41598-025-97652-6 ; https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html
- "The five pilots, short and supervised and built around students explaining their reasoning" → "The five pilots, mostly brief, supervised and chosen, the City says, for 'keeping students as the primary thinker'". Why: only Edia is described as prompting students to "explain their reasoning." Quill is close reading, Playlab examines AI output, and Intel runs semester-long projects. The City's stated criterion is "keeping students as the primary thinker in the classroom," and NYCPS says "Most of these tools are used for brief periods." https://www.nyc.gov/mayors-office/news/2026/09/mayor-mamdani-and-chancellor-samuels-put-students-first-with-nat
- "For children, the pause is a reasonable bet, and the research supports it." → "...and nothing in the research argues against it." Why: the essay itself says (para. 12) that none of the three trials tested young children, so the research cannot support the pause for children directly. This was an internal contradiction and an overclaim.
- "Officials told Chalkbeat they are disabling AI features in 38 software programs" → "Officials said..." Why: Chalkbeat reports this from the officials' public statements and Mamdani's press conference ("Mamdani said Wednesday that the Education Department is 'disabling' AI features in 38 existing citywide ed tech contracts"), not from an interview with Chalkbeat. https://www.chalkbeat.org/newyork/2026/09/02/what-to-know-about-nyc-public-schools-generative-ai-ban-screen-time-limits/
- "both built with Microsoft" → "both built in-house on Microsoft technology". Why: the LL35 row says the system was "custom-built by the Division of Instructional and Information Technology using advanced Microsoft technologies." Microsoft is listed as vendor, but it did not co-build the tools. https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=500
- "East Side Community School in Manhattan wrote a 12-page policy" → "drafted a 12-page policy". Why: Chalkbeat calls it "a 12-page draft AI policy." https://www.chalkbeat.org/newyork/2026/03/23/schools-develop-ai-policies-awaiting-city-guidance/

The CLAIM MAP was updated: para. 8 adds C31 and para. 12 adds C29 and C30. New claims C29 to C31 were added to the dossier.

## Unverifiable, cut or softened
- None cut. The softened sentences are listed above.

## Better statistic available
- None needed. Note the denominator split: the City frames the 50,000 pilot slots as "approximately 5% of the public-school student body," while Chalkbeat says "roughly 17% of all high school students." The essay uses Chalkbeat's figure and credits it, which is correct for a high school comparison.

## Confirmed
- Jan. 3, 2023 block on department devices and networks; Lyle quote; schools could request access; students could still reach it off-network. https://www.chalkbeat.org/newyork/2023/1/3/23537987/nyc-schools-ban-chatgpt-writing-artificial-intelligence/
- Stevens, then a Brooklyn Tech history teacher, and his "assigning them work..." quote (same URL). In March 2026 he was still at Brooklyn Tech, now described as a social studies teacher (C24).
- Banks, May 18, 2023: "The knee-jerk fear and risk overlooked the potential of generative AI." https://www.chalkbeat.org/newyork/2023/5/18/23727942/chatgpt-nyc-schools-david-banks/
- LL35 inventory: Algebra Teaching Assistant and Open Gen AI (GPT 3.5), both first used 2023/05; the 2025 row rates the algebra assistant "Fully autonomous"; the dataset is collected under Local Law 35 of 2022. https://data.cityofnewyork.us/api/views/jaw4-yuem.json
- Sept. 2 announcement: one-year moratorium covering 2-K through 8; nearly 600,000 students, or two-thirds; companion chatbots banned in all grades; "all software that uses student-facing generative AI"; Mamdani quote verbatim (mayor's release URL above). Skyline stat confirmed.
- Teachers may use AI for planning but not for grading; exemptions for assistive tech, multilingual learners and career programs like computer science. Mayor's release and https://www.schools.nyc.gov/about-us/policies/guidance-on-artificial-intelligence
- Little data on AI use across 1,600 schools (Chalkbeat Sept. 2).
- Two 45-minute literacy modules a year, required of all high schoolers (NYCPS page; Chalkbeat says "every year"). Up to 50,000 students; the five named pilots; at most five classes per school; direct supervision of a trained educator; coalition report due April 2027.
- Edia: "In-class practice only, never homework." This is the only use of "homework" on the NYCPS page. The page has 0 hits for cheat, integrity, plagiar, detect or dishonest (re-searched Oct. 19).
- Parents relieved (Chalkbeat Sept. 10). Buery's quote and titles (Chalkbeat Sept. 2). The AI Moratorium Coalition wanted two years, called the pilots "dangerous" and wants the pause extended (K-12 Dive, Sept. 2).
- Bastani et al.: nearly 1,000 Turkish high school math students; 48% practice gain; 17% lower when access was removed; "largely mitigated"; "crutch." IDEAS abstract and Wharton ("nearly 1,000 high school math students in Turkey").
- World Bank Nigeria: RCT; Copilot (GPT-4); first-year senior secondary; six weeks in June-July 2024; 0.23 SD in English; "with teacher support"; Edo. https://ideas.repec.org/p/wbk/wbrwps/11125.html ; https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria
- Harvard physics trial: median gains "over double" those in the active-learning group. Nature URL above.
- Pew: 1,458 teens surveyed Sept. 25 to Oct. 9, 2025; 10/21/23/45; 59% say AI cheating happens at least somewhat often. Chart data matches. https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/
- Chalkbeat on the March draft vs. new guidance, and Samuels on enlisting parents (Chalkbeat Sept. 2).
- Liang et al.: Stanford; seven detectors; U.S. eighth-grade essays classified accurately; more than half of TOEFL essays mislabeled; 61.3% average; 97.8% flagged by at least one detector. https://pmc.ncbi.nlm.nih.gov/articles/PMC10382961/
- 884,644 students; 15.4% English language learners in 2025-26. https://www.schools.nyc.gov/about-us/reports/doe-data-at-a-glance
- More than a third of states; half of the 10 largest districts explicitly discourage detectors; Wyatt, Reich and Harris quotes and titles. https://www.chalkbeat.org/2026/09/02/state-ai-guidance-schools-skirts-cheating-teachers/
- East Side's "prohibit the unsupervised use..." quote; Radin, "I have gone back to paper"; Brooklyn Collaborative's traffic light; Stevens, "too important..."; shorter essays that eat up more instructional time. Chalkbeat March 23 URL above.
- Currency (Sept. 2 to Oct. 19, 2026): read every Chalkbeat New York story from Sept. 2 to Oct. 19 (the index lists stories through Oct. 19). These include Sept. 9 (school-year questions), Sept. 15 (new YouTube restrictions on school devices, which adds to the limits but changes nothing the essay says) and Oct. 9 (paper state tests). One web search found no report of the coalition launching, no change to the moratorium and no published list of the 38 programs. The policy is still in force as described.

## Judgment calls for the editor
- "a detector score from a tool with a known bias against English learners": Liang tested seven 2023-era detectors on 91 TOEFL essays by Chinese writers. "Known bias" is fair as a general caution, but the essay states it as fact about any detector a school might buy now. Consider "detectors have shown bias."
- Final section: "East Side's policy and Brooklyn Collaborative's traffic lights already show what that looks like." Neither school's policy, as Chalkbeat describes it, requires an in-class component for take-home essays. East Side bans unsupervised AI use; Brooklyn Collaborative labels permitted uses. They are related models, not examples of the proposed rule.
- Buery's quote objects to a ban "without exceptions," but the policy does have exceptions (assistive tech, career programs and now case-by-case exemptions). The essay quotes him accurately; the editor may want to note the tension or leave it.
- "Critics came from both directions" is fair: Buery (too strict) and the Moratorium Coalition (too loose) are both quoted accurately.
- The LL35 inventory does not say whether the 2023 Algebra Teaching Assistant and Open Gen AI tools are still in use or are among the 38 programs being disabled. The essay does not claim either way, which is correct.
- Did not confirm that Buery is still Robin Hood's CEO beyond Chalkbeat's Sept. 2, 2026 description.
