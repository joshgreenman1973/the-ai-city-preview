# the-inventory dossier
Checked through: Oct. 19, 2026

Note on method: web search budget for this session ran out partway through research. Everything below was fetched directly (WebFetch, curl or the Socrata API). Items I could not fetch are under "Could not confirm." PDFs were downloaded and text-extracted locally; quotes from them are copied from the extracted text.

## Claims

C1. On Oct. 5, 2026, the Council held a Committee of the Whole hearing on AI risks that lasted nearly 10 hours with 46 members taking part; Anthropic, Google, Meta and OpenAI agreed to testify and SpaceXAI declined.
- Source: "SpaceX AI ... Following Subpoena" press release, New York City Council, Oct. 13, 2026 — https://council.nyc.gov/press/2026/10/13/3295/
- Quote: "The hearing lasted nearly 10 hours, with 46 Council Members participating in the hearing throughout the day." / "Senior representatives from Anthropic, Google, Meta, and OpenAI all agreed to testify before the Council, with only SpaceXAI declining to participate."
- Last checked for newer developments: Council press release of Oct. 16, 2026 (https://council.nyc.gov/press/2026/10/16/3301/) describes a follow-up Technology Committee hearing with SpaceXAI on Oct. 16; nothing changes the Oct. 5 facts.
- Disclosure: Anthropic makes the model that wrote the essay. The essay says so.

C2. At the Oct. 5 hearing, Sarah Milstein, OTI's Deputy Commissioner for Strategic Advisory Services, testified that the Office of Algorithmic Accountability had been formally established, six positions created in the FY27 adopted budget, hiring underway, and the office "progressing as planned."
- Source: Office of Technology and Innovation Testimony Before the New York City Council Committee of the Whole, Oct. 5, 2026 — https://www.nyc.gov/assets/dca/downloads/pdf/media/Advocacy-Testimony-Intros-161-T20262602-T20262601-T20262606-T20262605-T20262599-T20262603-504-T20262600.pdf
- Quote: "My name is Sarah Milstein and I am the Deputy Commissioner for Strategic Advisory Services for the Office of Technology and Innovation (OTI)." / "In my role at OTI, I oversee both the Office of Algorithmic Accountability (OAA) and NYC Cyber Command." / "I'm pleased to share that the Office of Algorithmic Accountability (OAA) has been formally established and six new positions have been created in the FY27 Adopted Budget to staff it up. The hiring process for those roles is actively underway." / "Overall, the Office is progressing as planned, and we remain focused on building the capacity needed to carry out this work effectively."
- Last checked: no later OTI statement found by direct fetch (search budget exhausted; see Could not confirm).

C3. At the hearing, Milstein said OTI hoped to announce a director "in the next week or two"; Speaker Julie Menin said the office was supposed to be operating by June and that OTI had not completed required rulemaking; Milstein said OTI was "fully compliant with the law."
- Source: Adam Daly, "NYC says it can handle AI-powered cyberattacks, but other safeguards are still catching up," amNewYork, Oct. 6, 2026 — https://www.amny.com/politics/nyc-ai-cyberattacks-safeguards/
- Quote: "The city is also still staffing the Office of Algorithmic Accountability, which is charged with assessing algorithmic tools submitted by agencies for risks including discriminatory decision-making." / Milstein said OTI "hoped to announce a director" "in the next week or two." / Menin argued that "the office was supposed to be operating by June" and that "OTI had failed to complete required rulemaking." / Milstein said OTI is "fully compliant with the law."
- Last checked: Oct. 19, 2026; could not confirm whether a director has since been named.

C4. Local Law 35 of 2022 (Int. 1806-2019, prime sponsor Peter Koo) passed the Council Dec. 15, 2021, was returned unsigned by the mayor Jan. 14, 2022 and enacted Jan. 15, 2022.
- Source: Legistar, Int 1806-2019 — https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=4265421&GUID=FBA29B34-9266-4B52-B438-A772D81B1CB5
- Quote: "Reporting on algorithmic tools used by city agencies." / History: "12/15/2021 ... Approved by Council"; "1/14/2022 ... Returned Unsigned by Mayor"; "1/15/2022 ... City Charter Rule Adopted"; Enactment Date 1/15/2022; Local Law 2022/035.
- Note: the 2025 OTI report calls it "Local Law 35 of 2021"; Legistar numbers it 2022. The essay uses 2022.

C5. The Local Law 35 open dataset (jaw4-yuem) contains 218 rows: 31 tools for 2022, 46 for 2023, 55 for 2024, 86 for 2025.
- Source: Socrata query run Oct. 19, 2026 — https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=1000 (and `?$select=count(*)` returned 218)
- Result: year counts [('2022', 31), ('2023', 46), ('2024', 55), ('2025', 86)].
- Corroboration: OTI, Agency Compliance Reporting of Algorithmic Tools, Calendar Year 2025 (version effective March 2026) — https://www.nyc.gov/assets/oti/downloads/pdf/reports/LL35%20Report%202025%20-%20Final%20-%202026-03-27.pdf — chart "# of Tools Reported": 31, 46, 55, 86. Chart "# of Agencies Reporting Tools": 11, 14, 13, 19 (2022-2025). Dataset tally of distinct agencies per year matched: 11, 14, 13, 19.

C6. For 2025, 58 agencies took part in reporting and 19 reported tools; the Health Department reported 17 and the Mayor's Office 12. Agencies reporting zero included the Department of Buildings, Housing Preservation and Development, NYCHA, Probation and Sanitation.
- Source: 2025 LL35 report (URL in C5); dataset query (C5).
- Quote: "In 2025, a record 58 agencies participated in the reporting process. Of those agencies, 19 reported using a total of 86 algorithmic tools – both also record numbers." Table: "Department of Health and Mental Hygiene 17"; "Mayor's Office 12"; "Department of Buildings 0"; "Department of Housing Preservation and Development 0"; "NYC Housing Authority 0"; "Department of Probation 0"; "Department of Sanitation 0".
- Dataset tally for 2025 by agency matched: DOHMH 17, Mayor's Office 12, OTI 8, NYC Public Schools 7, ACS 6, others fewer; 19 agencies.

C7. 2025 autonomy ratings: 40 informative, 23 supervised, 11 monitored, 12 fully autonomous.
- Source: dataset query (C5), field `autonomy`, year 2025.
- Result: Counter({'Informative': 40, 'Supervised': 23, 'Fully autonomous': 12, 'Monitored': 11}). Years 2022-2024 have "NA" for autonomy (field added in 2025).
- Seven of the 12 fully autonomous tools are captioning, transcription or translation (three Zoom entries, AppTek OmniCaption, Webex transcription, two Google Translate).
- The 12 fully autonomous: CFB Zoom; DEP FloodVision; DYCD Virtual Assistant Chatbot; Mayor's Office AppTek OmniCaption; Mayor's Office Zoom; MOCS AI Transcription on Webex; NYCPS Algebra Teaching Assistant; NYCPS MySchools Probability of Acceptance; OTI Google Translate; OTI MyCity Chatbot; OTI Zoom Automated Captions; Comptroller Google Translate.

C8. OTI added the autonomy question for 2025 after public sessions at Queens Public Library branches in summer 2025.
- Source: 2025 LL35 report (C5).
- Quote: "OTI has made changes to the report based on public feedback from engagement sessions in Queens Public Library branches over the summer of 2025." / "OTI also added questions about the autonomy of each tool, how often each tool is used, and whether there is a website where the public can learn more information about each tool."

C9. The law (Admin. Code § 3-119.5) requires each agency to report each tool's name and description, purpose, data and source, how output is used, vendor involvement and start date; Local Law 188 of 2025 added whether the tool was modified and a summary of any assessment by the Office of Algorithmic Accountability.
- Source: Local Laws of the City of New York for the Year 2025, No. 188 (certified text) — https://legistar.council.nyc.gov/View.ashx?GUID=683437F6-9BF2-4884-A1B5-EBB81F0E80BE&ID=15062373&M=F
- Quote: "1. The name or commercial name, and a brief description of such algorithmic tool; 2. The purpose for which the agency is using such an algorithmic tool; 3. The type of data collected or analyzed by the algorithmic tool and the source of such data; 4. A description of how the information received from such algorithmic tool is used; 5. Whether a vendor or contractor was involved ...; 6. The month and year in which such algorithmic tool began to be used, if known; 7. Whether, since the prior report, any modifications were made to the design or functionality of the tool that may affect the tool's outcomes; and 8. Whether such algorithmic tool has been assessed by the office of algorithmic accountability ..., a summary of the result of such an assessment, and whether any corrective actions were conducted."
- Note: none of the eight required items asks for a measured result of the tool's performance.

C10. The state's first AI inventory lists 19 systems at 13 agencies; the dataset has five columns (agency, manufacturer, product, capability, purpose). New York Focus reported it omits DMV facial recognition, and the State Police and Office of Children and Family Services do not appear.
- Source: NYS AI Systems Inventory, data.ny.gov, dataset fgvt-qr4i, queried Oct. 19, 2026 — https://data.ny.gov/resource/fgvt-qr4i.json?$limit=200 (returned 19 rows; keys: state_entity_agency_name, ai_system_manufacturer_name, ai_system_product_name, primary_ai_system_capability, purpose_and_uses_of_the_ai_system_within_the_state_entity; 13 distinct agencies).
- Source: Jie Jenny Zou, New York Focus, July 30, 2026 — https://nysfocus.com/2026/07/30/new-york-ai-systems-inventory-findings
- Quote: "The 13 agencies in the inventory reported 19 computer programs in total" / the DMV listing "does not include AI-powered facial recognition technology" / "The New York State Police doesn't appear on the inventory at all" / "The state Office of Children and Family Services is also absent from the inventory"
- Last checked: dataset still 19 rows on Oct. 19, 2026.

C11. ACS's Accelerated Safety Analysis Protocol model helps pick which of about 50,000 investigations a year get one of about 3,000 quality-assurance reviews; it was trained on about 815,284 observations and tested on 205,241; the entry gives no test result.
- Source: dataset jaw4-yuem, 2025 row "Accelerated Safety Analysis Protocol (ASAP) Tool" (C5 query).
- Quote: "The Quality Assurance (QA) unit in the Division of Child Protection at ACS has the capacity to review about 3,000 investigation cases out of about 50,000 investigations annually." / "The training set included about 815,284 observations (80 percent of the historic data). The model was tested on closed investigations from January 2012 to November 2022 with 205,241 observations (20 percent)."
- Note: the full entry (tool_desc, purpose_desc, updated_desc, data_training, data_input, data_output) contains no accuracy or test-result figure. The acs-model essay owns the substance of this tool; here it is used only as an example of the inventory's format.

C12. Agencies classified 26 of the 86 tools for 2025 as resource allocation (13), performance evaluation (6), risk management (5) or triage (2). None of those 26 entries reports a measured result (accuracy, error rate, hit rate or before-and-after outcome), though several say the model was tested, back-tested or validated.
- Source: dataset query (C5), field `purpose_type`; full-text review of the six descriptive fields of all 26 rows on Oct. 19, 2026.
- Result: purpose_type 2025: {'Information presentation': 38, 'Data management': 21, 'Resource allocation': 13, 'Performance evaluation': 6, 'Risk management': 5, 'Triage': 2, 'Not specified': 1}. Sentence-level scan of the 26 rows for accuracy/error/rate/result/validat/evaluat language found descriptions of testing but no reported results.
- Method caveat: this is my own reading of the text fields; classification by purpose type is the agencies' own.

C13. The only 2025 entry reporting a measured result is the public schools' IT service desk chatbot, "Eureka!": about 30 percent of voice calls and 10 percent of web queries handled without a human agent.
- Source: dataset jaw4-yuem, 2025 row "Eureka! Chatbot" (NYC Public Schools).
- Quote: "Since its launch in August 2022, the chatbot has handled an average of 1,500 calls and 300 web-based inquiries each day. Approximately 30 percent of the voice calls and 10 percent of the web-based queries have been handled completely by Eureka! without being forwarded to a human Service Desk agent." / tool_desc: "It accesses scripts to handle four common reasons for a user to call or contact the service desk: Password Reset, Create a Ticket, Ticket Status, Request for Information."
- Method: scan of all 86 rows for sentences combining a number with result words (handled, reduced, increased, saved, detected, percent, accuracy). Only this entry reported an operational result.

C14. The NYPD's ShotSpotter entry says "Training data is proprietary to the vendor"; 38 of 86 entries for 2025 describe training data as proprietary.
- Source: dataset jaw4-yuem, 2025 rows (C5).
- Quote (ShotSpotter row, data_training): "Training data is proprietary to the vendor."
- Result: count of 2025 rows whose data_training field contains "proprietary" = 38.

C15. A City comptroller audit (June 20, 2024) found ShotSpotter alerts resulted in confirmed shootings 8 percent to 20 percent of the time, that NYPD had spent over $45 million on it, and that NYPD's evaluation was inadequate; it recommended NYPD collect and publish data.
- Source: Audit Report on the NYPD's Oversight of its Agreement with ShotSpotter Inc. (FP23-074A), New York City Comptroller, June 20, 2024 — https://comptroller.nyc.gov/reports/audit-report-on-the-new-york-city-police-departments-oversight-of-its-agreement-with-shotspotter-inc-for-the-gunshot-detection-and-location-system
- Quote: "ShotSpotter alerts only resulted in confirmed shootings between 8% and 20% of the time." / "NYPD has already spent over $45 million on this product." / "NYPD's evaluation of ShotSpotter's performance is inadequate to hold the vendor accountable." / "To increase transparency, NYPD should collect and publish relevant data."
- Last checked: ShotSpotter still listed in the 2025 inventory (C14). Did not confirm current contract status (search budget exhausted); the essay does not claim it.

C16. The state comptroller's February 2023 audit of the City's AI governance found the City "does not have an effective AI governance framework," that NYPD did not review NIST's evaluation of its facial recognition software or set an acceptable accuracy level, and that some agency tools were reported but not published (23 reported to the City in 2020, 16 published; Probation's six left out).
- Source: Office of the New York State Comptroller, "New York City Office of Technology and Innovation: Artificial Intelligence Governance," Report 2021-N-10, February 2023 — https://www.osc.ny.gov/files/state-agencies/audits/pdf/sga-2023-21n10.pdf
- Quote: "NYC does not have an effective AI governance framework." / "However, NYPD did not review NIST's evaluation of the facial recognition technology it used, nor did it establish what level of accuracy would be acceptable." / "We found that agencies reported a total of 23 tools to AMPO in 2020; however, AMPO only included 16 tools in its 2020 Report. For example, DOP reported the use of six tools to AMPO; however, the 2020 Report did not include any of the DOP-reported tools."

C17. The Automated Decision Systems Task Force, created under Local Law 49 of 2018, issued its report in November 2019, recommending that the City publish key performance indicators and the outcomes of assessments; it was advisory, and after internal debate it reviewed four agency examples.
- Source: New York City Automated Decision Systems Task Force Report, November 2019 — https://www.nyc.gov/assets/adstaskforce/downloads/pdf/ADS-Report-11192019.pdf
- Quote: "In accordance with the mandates of Local Law 49 of 2018, the Task Force includes representatives from both the City and external organizations" / "The Organizational Structure should create and publish, where legally permissible, key performance indicators for its work in relation to the City's ADS tools and systems, outcomes of any ADS assessments, emerging best practices in ADS management, and other relevant information." / "Assessment information (e.g., outcomes of any pre-deployment assessments, monitoring plans, and post-deployment assessment plans)." / "Some members strongly believed that we needed to review some, if not all, examples of ADS currently in use by the City as part of our deliberative work in forming recommendations." / "we were able to develop a set of protocols for legal review and obtained approvals for and did reviewed four specific agency examples from the Department of Transportation, the Police Department, the Department of Education, and the Fire Department."

C18. City & State described the task force as "a slow-moving body" that took about 18 months to release its report; its recommendation produced the Algorithms Management and Policy Officer post, cut in 2022.
- Source: Celia Bernhardt, "New York City will try (again) to regulate AI," City & State, Nov. 25, 2025 — https://www.cityandstateny.com/politics/2025/11/new-york-city-will-try-again-regulate-ai/409803/
- Quote: "It ended up being a slow-moving body." / AMPO: "a role which was cut in 2022 under Adams."
- Corroborated by state comptroller audit (C16): "in January 2022, AMPO was discontinued by Executive Order 3".

C19. OTI's AI Action Plan (Oct. 16, 2023) had 37 actions. Action 1.5 proposed expanding Local Law 35 reporting, which "may include ... adding reporting requirements related to models and performance." Action 1.8 proposed reviews after implementation that "will assess the tool's effectiveness at fulfilling its stated goals."
- Source: The New York City Artificial Intelligence Action Plan, OTI, October 2023 — https://www.nyc.gov/assets/oti/downloads/pdf/reports/artificial-intelligence-action-plan.pdf
- Quote (1.5): "Provide agencies with enhanced AI reporting guidelines, building on reporting currently conducted under Local Law 35 of 2022, to increase public awareness of AI initiatives citywide. This may include broadening the scope of reporting, adding reporting requirements related to models and performance, and establishing guidelines for explainability."
- Quote (1.8): "Reviews conducted after a solution is implemented will assess the tool's effectiveness at fulfilling its stated goals, protecting against drift or shifting objectives, and facilitating project improvement." / "Initiate within 24 months, then ongoing"

C20. OTI's second-year progress report (Oct. 16, 2025) lists 1.5 "Expand Public AI Reporting" as Complete and 1.8 "Pursue Ongoing Monitoring to Review AI Tools in Operation" and 1.6 risk assessment as In Progress. Status table: 27 complete, 8 in progress, 2 "to come."
- Source: New York City AI Action Plan Annual Progress Report, OTI, Oct. 16, 2025 — https://www.nyc.gov/assets/oti/downloads/pdf/AI-Action-Plan-Progress-Report-Year-2.pdf
- Quote: "1.5 Expand Public AI Reporting Complete" / "1.6 Develop an AI Risk Assessment and Project Review Process In Progress" / "1.8 Pursue Ongoing Monitoring to Review AI Tools in Operation In Progress" / "On October 16, 2023, the Office of Technology and Innovation (OTI) published the New York City (NYC) Artificial Intelligence (AI) Action Plan" / "The Action Plan included 37 actions across seven initiatives" / "OTI has initiated or completed 35 out of the 37 Action Items listed."
- Count from the status table (my tally): Complete 27; In Progress 8 (1.6, 1.8, 3.4, 4.7, 5.2, 5.3, 6.2, 6.4); To Come 2 (5.4, 5.5).
- Last checked: could not confirm whether a third-year report was issued around Oct. 16, 2026 (search budget exhausted).

C21. Local Law 188 of 2025 (Int. 199-A, prime sponsor Jennifer Gutiérrez) created the Office of Algorithmic Accountability inside OTI, headed by a mayor-appointed director, with power to analyze agency tools for risk of discriminatory decision-making and compliance with standards, conduct pre-deployment assessments, take complaints and suspend tools. It passed Nov. 25, 2025, was returned unsigned Dec. 26, 2025, and took effect 180 days after becoming law.
- Source: Legistar Int 0199-2024 — https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=6557537&GUID=14A351D1-8AED-448E-A8C0-355A39CB02BE ; certified text (URL in C9).
- Quote: "Such office shall be headed by a director of algorithmic accountability who shall be appointed by the mayor." / "Analyze algorithmic tools submitted to the office by an agency to determine whether the office identifies a risk that the proposed use of such tool could result in discriminatory decision-making as a result of actual or potential biases and, where applicable, whether the proposed use of such tool would satisfy the basic compliance standards" / "Conduct pre-deployment assessments of the risks associated with the intended use of algorithmic tools" / "suspending the use of a tool" / "This local law takes effect 180 days after it becomes law." / "passed by the Council on November 25, 2025 and returned unsigned by the Mayor on December 26, 2025."

C22. BetaNYC testified Oct. 5, 2026 that Local Law 188 took effect in June 2026 and asked when the list required by Local Law 195 would be posted.
- Source: Noel Hidalgo, "BetaNYC testimony: NYC Council hearing on artificial intelligence," BetaNYC, Oct. 5, 2026 — https://www.beta.nyc/2026/10/05/council-ai-hearing-2026/
- Quote: "LL 188 took effect in June 2026." / "Local Law 195 of 2025 already requires the Office of Algorithmic Accountability to post a list of every AI system" / "We ask when that list will be posted, and that it also be published on the NYC Open Data portal"

C23. Local Law 195 of 2025 (Int. 1024-A) requires the office to publish, and update annually, a list of AI systems it has assessed before deployment.
- Source: Legistar Int 1024-2024 — https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=6860202&GUID=C8F189B6-FFA8-4539-86BF-78436E7BE335
- Quote: "This bill would require the office of algorithmic accountability to make publicly available on the city's website a list" ... "The list would be required to be updated annually." Local Law Number 2025/195; "Returned Unsigned by Mayor" 12/26/2025.

C24. The budget included $1.4 million for six employees for the office; in July 2026 City & State found "no sign the office exists yet." A City Hall spokesperson, Jeremy Edwards, said the administration would deploy AI "only where it demonstrably improves life for New Yorkers."
- Source: Annie McDonough, "Mamdani's government has started to embrace AI. Will he?" City & State, July 20, 2026 — https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/
- Quote: "includes $1.4 million for six new employees for the office" / "there's no sign the office exists yet" / "The Mamdani administration will deploy artificial intelligence only where it demonstrably improves life for New Yorkers."
- Last checked: superseded on staffing by C2/C3 (OTI says formally established, hiring underway, as of Oct. 5).

C25. Int. 161, from Council Member Carmen De La Rosa, would add job-impact reporting to the annual algorithmic tools report; it was heard Oct. 5, 2026.
- Source: Council press release, Sept. 25, 2026 — https://council.nyc.gov/press/2026/09/25/3252/
- Quote: Int. 161 would "add to the annual algorithmic tools compliance report to require agencies to report on the impacts" (on job displacement, salary changes and training) / the bills "will be heard at the Council's upcoming Committee of the Whole hearing on October 5."

C26. OTI told the Council that Int. 161 "would not produce new insights" beyond its Local Law 25 of 2026 study of how algorithmic tools affect City employees.
- Source: OTI testimony, Oct. 5, 2026 (URL in C2).
- Quote: "OTI is currently undertaking a study on the impact of algorithmic tools on municipal employees pursuant to Local Law 25 of 2026." / "While we agree that it is important to examine the impact of AI on our workforce, the bill as written would not produce new insights beyond those in the larger, more expansive directive of Local Law 25."

C27. The 2025 federal AI use-case inventory lists 3,611 use cases, 445 of them high-impact; of 227 high-impact use cases marked deployed, 44 answered "Yes" to whether pre-deployment testing had been conducted (81 "In-progress," 102 blank). The form asks yes/no-type questions about testing and monitoring, not results.
- Source: ombegov/2025-Federal-Agency-AI-Use-Case-Inventory, GitHub (README, Validation/data_dictionary.md, Data/2025_individually_reported_AI_use_cases.csv) — https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory
- Quote (README): "3,611 individually-reported AI use cases (all stages of development)." / Data dictionary: "Has pre-deployment testing been conducted for this AI use case?" valid values "a) Yes | b) In-progress | c) Agency CAIO has waived this minimum practice"; "Required: Yes, only for high-impact deployed use cases".
- Result of my tally of the CSV (Oct. 19, 2026): is_high_impact = 'High-impact' 445; of those, development_stage 'Deployed' 227; hi_testing_conducted among those 227: Yes 44, In-progress 81, blank 102.
- Governing memo: OMB M-25-21 (named in README).

C28. Amsterdam's algorithm register now redirects to the Dutch national algorithm register, which lists 72 Amsterdam entries (my count). The parking-control scan entry names impact assessments (Privacy Quickscan, DPIA, Ethische Bijsluiter), says the main risk is misreading a license plate, and gives no error rate.
- Source: https://algoritmeregister.amsterdam.nl/en/ai-register/ (301 redirect to) https://algoritmes.overheid.nl/nl/organisatie/gemeente-amsterdam ; entry https://algoritmes.overheid.nl/nl/algoritme/gm0363/78451490/fiscaal-handhaven-parkeercontrole (last updated July 13, 2026)
- Quote: "Het belangrijkste risico is dat het systeem een kenteken verkeerd herkent" (The most important risk is that the system misrecognizes a license plate.) / "Het systeem heeft een laag risico." / Impacttoetsen: "Privacy Quickscan", "Data Protection Impact Assessment (DPIA)", "De Ethische Bijsluiter". Fetch summary: no accuracy metrics or error rates given.
- Caveat: entry content read through a fetch-and-summarize tool; translation is the tool's. 72 is a count of listed entries, not a figure on the page; not used in the essay.

C29. MyCity's 2025 entry rates it fully autonomous and says it was decommissioned in February 2026; the entry says nothing about errors. The Markup reported in March 2024 that the chatbot was telling businesses to break the law.
- Source: dataset jaw4-yuem 2025 row "MyCity Chatbot"; Colin Lecher, "NYC's AI Chatbot Tells Businesses to Break the Law," The Markup, March 29, 2024 — https://themarkup.org/news/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law
- Quote (dataset): "The chatbot was decommissioned in February 2026." autonomy: "Fully autonomous". (Markup): "Months later, that chatbot is telling businesses to break the law."
- Belongs mainly to front-door; not used in the final essay.

C30. Section 3-119.5 already exempts disclosure that would violate law, endanger public safety or interfere with an active investigation.
- Source: LL188 certified text (C9).
- Quote: "e. No agency shall disclose any information pursuant to this section where such disclosure would violate local, state, or federal law, or endanger the safety of the public, or interfere with an active agency investigation."

C31. Some agencies already describe testing: the Department of Correction's jail population forecast reports uncertainty from "rigorous back-testing"; FDNY's EMS hospital-suggestion algorithm is compared with five years of historical transport data "to validate and correct the network model."
- Source: dataset jaw4-yuem 2025 rows "NYC Jail Population Forecast" (DOC) and "Emergency Medical Services (EMS) Hospital Suggestion Algorithm" (FDNY).
- Quote: "The uncertainty is estimated by the errors collected in a series of rigorous back-testing of the model and is shown as daily "prediction intervals"" / "The order of suggested hospitals are then compared with five years of historical EMS hospital transport data from before the COVID-19 pandemic (2015-2019) to validate and correct the network model."

C32. The 2025 Local Law 188 and 195 were part of a three-bill package the Council passed Nov. 25, 2025; the third (Int. 926-A, Julie Menin) requires the office to set basic compliance standards.
- Source: Council press release, Nov. 25, 2025 — https://council.nyc.gov/press/2025/11/25/3012/
- Quote: Intro 199-A "would establish an Office of Algorithmic Accountability responsible for analyzing algorithmic tools used by city agencies" / Intro 1024-A would "publish a list of all artificial intelligence systems for which it has conducted a pre-deployment assessment" / Intro 926-A would require the Office to "establish basic compliance standards for agencies."

C33. (Added by fact-checker, Oct. 19, 2026.) Local Law 195 of 2025 sets a deadline of March 31, 2027 for the list of AI systems the office has assessed before deployment; BetaNYC's testimony cites the same date.
- Source: Local Law 195 of 2025, certified text — https://nyc.legistar.com/View.ashx?M=F&ID=15062374&GUID=A4A39C1B-F7C5-4410-939C-FB0D4BACDCF7
- Quote: "No later than March 31, 2027, the office of algorithmic accountability shall make publicly available on the city's website a list of all artificial intelligence systems for which it has conducted a pre-deployment assessment."
- BetaNYC (C22 URL): "Local Law 195 of 2025 already requires the Office of Algorithmic Accountability to post a list of every AI system it assesses" / "on the City's website by March 31, 2027"
- Currency: no list found posted as of Oct. 19, 2026 (OTI AI page and web search); it is not yet due.

C34. (Added by fact-checker.) The official Oct. 5, 2026 hearing transcript confirms Milstein's "next week or two" remark and Menin's June complaint.
- Source: Hearing Transcript 10/5/26, Committee of the Whole — https://nyc.legistar.com/View.ashx?M=F&ID=16072121&GUID=B2DB4127-3040-4B2C-9BDC-5DE47D30860D
- Quote (Milstein): "we hope to be announcing a director for the office quite soon, uh, in the next week or two." (Menin): "The office was supposed to be up and running in June." (Milstein): "So OTI is fully compliant with the law."
- Currency: no announcement of a director found through Oct. 19, 2026 (web searches, OTI AI page).

C35. (Added by fact-checker.) Int. 161-2026 (De La Rosa) was heard and laid over in the Committee of the Whole on Oct. 5, 2026. As drafted (dated Jan. 5, 2026) it amends § 3-119.5(c) from the Local Law 35 text and makes job impacts item 7, which would overwrite the two items Local Law 188 added (BetaNYC: "As drafted, Int 161 would delete those two fields").
- Source: Legistar Int 0161-2026 — https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=7861810&GUID=34B70F41-7D60-4866-9434-7EB17E68661C ; bill text https://nyc.legistar.com/View.ashx?M=F&ID=15182393&GUID=3ABE7B13-0A28-4A6D-BC85-1189381BE793
- Quote (bill): "Subdivision c of section 3-119.5 ... as added by local law number 35 for the year 2022, is amended to read as follows" ... "6. The month and year in which such algorithmic tool began to be used, if known; and 7. The number of city employees, disaggregated by agency and title, whose employment status was impacted by the use of such tool"
- Status (Legistar API, Oct. 19, 2026): "Laid Over in Committee."

C36. (Added by fact-checker.) A follow-up state comptroller audit (reported Aug. 31, 2026) found the 2023 recommendations only partly implemented and said the City "still does not maintain a complete inventory of AI tools used across agencies."
- Source: Annie McDonough, "State audit finds room for improvement in NYC's AI governance," City & State, Aug. 31, 2026 — https://www.cityandstateny.com/policy/2026/08/state-audit-finds-room-improvement-nycs-ai-governance/415734/
- Quote: "The city still does not maintain a complete inventory of AI tools used across agencies"
- Note: OSC report itself not located; quote is DiNapoli's statement as reported.

C37. (Added by fact-checker.) The federal data dictionary's testing field is multiple choice, not yes/no.
- Source: https://raw.githubusercontent.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory/main/Validation/data_dictionary.md
- Quote: "Has pre-deployment testing been conducted for this AI use case?" Valid values: "a) Yes", "b) In-progress", and a CAIO waiver option. Checker's re-tally of the CSV matched C27: 445 high-impact; 227 deployed; Yes 44, In-progress 81, blank 102.

## Could not confirm
- Whether the Office of Algorithmic Accountability's director has been named since Oct. 6, 2026. amNY reported OTI hoped to name one "in the next week or two." My web search budget ran out before I could check; the essay attributes the timing to the hearing.
- Whether the Local Law 195 list of assessed systems has been posted. BetaNYC was asking for it on Oct. 5; I found no list but could not search.
- Whether OTI issued a third-year AI Action Plan progress report in October 2026.
- Criticism of the 2019 ADS Task Force by its own members (e.g., the AI Now Institute's "Confronting Black Boxes" shadow report and public complaints that members could not get a list of City systems). Not fetched; left out. The essay uses only the report's own account of the dispute over reviewing examples and City & State's "slow-moving body."
- San Jose's algorithm register: sanjoseca.gov returned 403/Access Denied to both WebFetch and curl. Left out.
- Helsinki's AI register: not fetched. Left out.
- Current status of the NYPD ShotSpotter contract after December 2024. Not claimed.
- Superlative that New York's list is "the most detailed of any American city." Could not verify; the essay compares only with the state's inventory and the federal one.

## Notes for other essays
- acs-model: the ASAP entry (C11) and the state comptroller's 2023 audit note that ACS "has taken specific steps to address possible bias in its Severe Harm Predictive Model by eliminating certain types of racial and ethnic data and testing the model's output against benchmarks" (sga-2023-21n10.pdf, Audit Highlights).
- plan-review: the state comptroller's 2023 audit found DOB "allows the use of AI to supplement, but not replace" facade inspections by Qualified Exterior Wall Inspectors and "does not require QEWIs to report whether AI was used"; DOB reported zero tools in the 2025 LL35 report.
- face-and-plate: 2023 state audit finding on NYPD facial recognition accuracy (C16); FDNY and DOI also list facial recognition in the 2025 inventory with vendor "Not disclosable."
- risk-scores: DOC's new "Risk of Recidivism Tool" (first used July 2025, inputs include self-reported homelessness and drug use, DOJ-grant funded) appears in the 2025 inventory.
- shelter-score: DSS Homebase Risk Assessment Questionnaire entry, updated in 2023 on 2013-2016 data; "Workers are able to override a limited number of model decisions with permission of a supervisor."
- the-desk: OTI's Oct. 5 testimony on Local Law 25 of 2026 study of algorithmic tools and City employees (C26); BetaNYC's call for a citywide inventory of Copilot and coding-agent use. 2025 inventory lists ChatGPT, Microsoft Copilot and Google Gemini at several agencies.
- front-door: MyCity entry in inventory (C29).
- schools: NYCPS "Eureka!" help-desk bot (C13); "MySchools - Probability of Acceptance" rated fully autonomous.
- preemption / Oct. 5 hearing: the 10 bills aimed at AI companies (Int. 2602 third-party validation and kill switch, etc.) are in the Sept. 25, 2026 Council release.
- Vital City's Goldsmith piece (Apr. 29, 2026, https://www.vitalcitynyc.org/nyc-government-ai-accountability-discretion/) argues for "accountable discretion" for front-line workers; it says nothing about the inventory, so I did not cite it. Better fit for the-desk.
