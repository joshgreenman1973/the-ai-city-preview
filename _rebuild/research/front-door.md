# front-door dossier
Checked through: Oct. 19, 2026

Method note: pages were downloaded with curl and converted to text, and quotes below were copied from that text (or from the PDF as rendered). The Local Law 35 dataset was queried directly. WebFetch summaries were not used as quote sources except where noted. The shared web-search budget ran out partway through research (see "Could not confirm").

## Claims

C1. On Oct. 16, 2023, Mayor Eric Adams released the City's AI Action Plan and launched a pilot AI chatbot on the MyCity Business site, billed as drawing on more than 2,000 NYC Business web pages.
- Source: "Mayor Adams Releases First-of-Its-Kind Plan for Responsible Artificial Intelligence Use in NYC," Office of the Mayor, Oct. 16, 2023 — https://www.nyc.gov/office-of-the-mayor/news/777-23/mayor-adams-releases-first-of-its-kind-plan-responsible-artificial-intelligence-use-nyc
- Quote: "As Part of New Phase of MyCity Portal, Adams Administration Piloting First Citywide AI Chatbot to Help Business Owners Navigate Government" ... "With the AI chatbot, business owners will more easily be able to access trusted information from more than 2,000 NYC Business web pages."
- Last checked for newer developments: superseded by shutdown (C5, C6).

C2. In The Markup's testing, the MyCity bot said landlords did not have to accept Section 8 vouchers or rental assistance; when 10 staff members asked the same question, all were told no. Source-of-income discrimination is illegal in New York City, with a small-building exception.
- Source: Colin Lecher, "NYC's AI Chatbot Tells Businesses to Break the Law," The Markup (copublished with Documented and The City), March 29, 2024 — https://themarkup.org/news/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law
- Quote: "In testing by The Markup, the bot said no, landlords do not need to accept these tenants. Except, in New York City, it's illegal for landlords to discriminate by source of income, with a minor exception for small buildings where the landlord or their family lives." ... "At one point, it told a Markup reporter that landlords did have to accept housing vouchers, but when ten separate Markup staffers asked the same question, the bot told all of them no, buildings did not have to accept housing vouchers."
- Last checked: no correction on the page as fetched Oct. 19, 2026.

C3. The bot also said it was fine to take workers' tips and to go cash-free; errors also appeared in other languages; it ran on Microsoft's Azure AI services and carried a small disclaimer.
- Source: same as C2.
- Quote: "'Yes, you can make your restaurant cash-free,' the bot said in one wholly false response." ... "The bot said it was fine to take workers' tips (wrong, although they sometimes can count tips toward minimum wage requirements)" ... "Similar errors appeared when the questions were asked in other languages, The Markup found." ... "It's powered by Microsoft's Azure AI services" ... "One small note on the page says that it 'may occasionally produce incorrect, harmful or biased content,' but there's no way for an average user to know whether what they're reading is false."
- Last checked: as C2.

C4. In late January 2026, facing a $12 billion budget gap, Mayor Zohran Mamdani called the chatbot "functionally unusable" and said it cost around half a million dollars; building its foundations reportedly cost nearly $600,000.
- Source: Colin Lecher and Katie Honan (The City), "Mamdani to kill the NYC AI chatbot we caught telling businesses to break the law," The Markup, Jan. 30, 2026 — https://themarkup.org/artificial-intelligence/2026/01/30/mamdani-to-kill-the-nyc-ai-chatbot-we-caught-telling-businesses-to-break-the-law
- Quote: "In a press conference this week on New York City's $12 billion budget gap, Mayor Zohran Mamdani zeroed in on the previous administration's artificial intelligence chatbot" ... "'The previous administration had an AI chatbot that was functionally unusable,' Mamdani said. 'It was costing the administration around half a million dollars.'" ... "Just building the bot's foundations reportedly cost nearly $600,000, close to the figure Mamdani provided."
- Last checked: see C5, C6.

C5. After the 2024 reporting, the Adams administration defended the bot, added disclaimers and appeared to limit the questions it would answer; the City took it down in early February 2026.
- Source: same as C4.
- Quote: "'We're identifying what the problems are, we're gonna fix them, and we're going to have the best chatbot system on the globe,' Adams said at a press conference." ... "City administrators soon added disclaimers to the bot advising users to 'not use its responses as legal or professional advice.' They also improved some of the bot's answers, but also appeared to limit the kinds of questions the tool was willing to answer." ... "Update (Feb. 4, 2026): The city has taken down the chatbot, writing on the bot's web page that its 'beta test has ended' and directing visitors to NYC.gov for government information."
- Last checked: C6.

C6. As of Oct. 19, 2026, chat.nyc.gov displays a page titled "The Chatbot beta test has ended."
- Source: chat.nyc.gov, fetched Oct. 19, 2026 — https://chat.nyc.gov/
- Quote (page title): "The Chatbot beta test has ended. - nyc.gov"
- Last checked: Oct. 19, 2026.

C7. The City's Local Law 35 filing for 2025 rated the MyCity chatbot "fully autonomous," said it ran on OpenAI's GPT-4o via Microsoft Azure, said its content was expanded to include 311 knowledge articles and recorded that it was decommissioned in February 2026.
- Source: Algorithmic Tools Compliance Report, NYC Open Data dataset jaw4-yuem, queried Oct. 19, 2026 — https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=1000 (query returned 218 rows: 31 for 2022, 46 for 2023, 55 for 2024, 86 for 2025)
- Quote (2025 row, tool_name "MyCity Chatbot"): autonomy "Fully autonomous"; tool_desc "The chatbot was decommissioned in February 2026."; purpose_desc "It's currently focused on two main areas: Business Services and 311 information on City services. ... The chatbot is using Microsoft's Azure AI technology and OpenAI's ChatGPT 4-o large language model."; updated_desc "The chatbot content was expanded to include 311 knowledge articles."; vendor_name "Microsoft, EY".
- Last checked: Oct. 19, 2026 (2025 is the latest reporting year in the dataset).

C8. In March 2025, then-Chief Technology Officer Matthew Fraser said over 70 percent of calls to 311 are calls for information, said the City was expanding the chatbot to 311 content with a voice component, and claimed hallucinations had "gone down exponentially" after a scope restriction. (Fraser's claims; no accuracy figures were published.)
- Source: City & State New York, "Matt Fraser still wants to expand MyCity and AI chatbot," March 19, 2025 — https://www.cityandstateny.com/personality/2025/03/matt-fraser-still-wants-expand-mycity-and-ai-chatbot/403899/
- Quote: "We're currently expanding scope to go beyond small business, to include all the content that comes from 311. … Currently over 70% of the calls that come into 311, they're not service requests. What that means is that over 70% of the calls are calls for information." ... "So two weeks later, we put a patch in place, and then we put a condition in place where anyone that asks anything outside the scope – redirect them and say it's not within the scope ... And since then, the amount of hallucinations that we saw using the chatbot have gone down exponentially."
- Last checked: superseded by shutdown (C5).

C9. In July 2026, City Hall spokesperson Jeremy Edwards said the administration will deploy AI "only where it demonstrably improves life for New Yorkers." City & State reported that the Office of Algorithmic Accountability was supposed to exist by June, that the budget funds it at $1.4 million for six employees, and that there was no sign it existed; and that the 311 app lets users upload a photo for Microsoft's AI to match to a service request.
- Source: Annie McDonough, "Mamdani's government has started to embrace AI. Will he?," City & State New York, July 20, 2026 — https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/
- Quote: "'The Mamdani administration will deploy artificial intelligence only where it demonstrably improves life for New Yorkers. We will not allow its adoption at the expense of workers, our environment or our civil rights.'" ... "Per the law itself and OTI testimony to the City Council in March, the new office was supposed to be created by June. The city's recently passed budget includes $1.4 million for six new employees for the office. But there's no sign the office exists yet." ... "The 311 app offers New Yorkers the option to upload a photo and have Microsoft's AI products match it to the relevant service request."
- Last checked: could not search for later news on the office (search budget exhausted); the-inventory essay covers it.

C10. 311 took 16,609,000 calls in fiscal 2026, down from 18,231,000 in fiscal 2022, as contacts shifted to digital channels.
- Source: Mayor's Management Report, Fiscal 2026, 311 Customer Service Center chapter, pp. 177-180 (September 2026) — https://www.nyc.gov/assets/operations/downloads/pdf/mmr2026/311.pdf
- Quote: "Although total contacts have increased, 311 call volume has declined each year since Fiscal 2022, falling nearly nine percent from 18.2 million to 16.6 million in Fiscal 2026, as more New Yorkers have shifted toward digital channels to reach 311." Table: "311 calls (000) 18,231 17,886 17,458 17,377 16,609" (FY22-FY26).
- Last checked: Oct. 19, 2026; FY2026 is the latest MMR.

C11. In fiscal 2026, 311 answered 75 percent of Tier 1 calls within 30 seconds against an 80 percent target, and the average wait was 43 seconds, up from 25 seconds in fiscal 2025; the City attributed it to winter weather.
- Source: same as C10.
- Quote: "In Fiscal 2026, NYC311 answered 75 percent of Tier 1, or high volume, calls within 30 seconds, below the target of 80 percent. The average wait time was 43 seconds, above the target of 30 seconds and greater than the 25 seconds achieved in Fiscal 2025. The extended period of severe winter weather generated sustained increases in call volume". Table: "Average wait time (tier 1 calls) (minutes:seconds) 0:29 0:17 0:31 0:25 0:43" (FY22-FY26).
- Last checked: as C10.

C12. 311 phone service is available in 175 languages around the clock; in fiscal 2026 it took 1,672,000 Spanish-language calls and 260,000 calls in other languages besides English; its customer satisfaction index was 92 percent.
- Source: same as C10.
- Quote: "NYC311's services are available via phone in 175 languages, 24 hours a day, seven days a week, 365 days a year." Table: "311 Spanish language calls (000) 529 1,254 706 1,709 1,672"; "311 calls in languages other than English or Spanish (000) 168 165 264 243 260"; "Customer satisfaction index (311 only) 92% 94% 93% 93% 92%".
- Last checked: as C10.

C13. 311's text channel uses a Microsoft machine-translation tool so English-speaking agents can answer texts in the 10 designated citywide languages; the agent writes the reply.
- Source: jaw4-yuem (as C7), 2025 row "Omnichannel Language Translation."
- Quote: "The algorithmic tool converts the customer's text inquiry in their chosen language into English, allowing the text agent to understand, research and reply to the inquiry. The tool converts the agent's English language response to the customer's chosen language among the 10 designated citywide languages." First use "2024/01"; autonomy "Informative".
- Last checked: Oct. 19, 2026.

C14. Since December 2025, the 311 app's "Smart Select" feature suggests service-request types from a user's photo; the user picks.
- Source: jaw4-yuem (as C7), 2025 row "311 Mobile App AI Smart Select."
- Quote: "311 Smart Select allows users of the 311 mobile app to upload a photo of the problem they would like to report, and then provides suggestions of matching service request types. Users can select the results that best describes their issue". First use "2025/12"; vendor "Microsoft, IBM".
- Last checked: C9 (City & State, July 2026) confirms the photo feature is live.

C15. The Department of Youth and Community Development (DYCD) has run a chatbot since September 2020 that returns staff-written, predefined answers from a knowledge base, averaging about 2,100 requests a day.
- Source: jaw4-yuem (as C7), 2025 row "DYCD Virtual Assistant Chatbot."
- Quote: "The DYCD Virtual Assistant Chatbot provides support to the Community Connect team by providing predefined answers to questions asked to the Chatbot by the public." ... frequency "Averaging about requests 2100 a day" ... data_training "Staff worked to capture and maintain information regarding the programs in a knowledge base." First use "2020/09".
- Last checked: Oct. 19, 2026. No independent accuracy data found.

C16. In 2024, 311 ran a 21-day generative AI voice pilot, available only to callers who dialed 211, answering from 311's own content.
- Source: jaw4-yuem (as C7), 2024 row "NYC311 AI Voice Pilot."
- Quote: "The NYC311 AI Voice was a pilot program that enabled NYC311 to test a generative AI voice application with NYC311 customers, for 21 days. ... The pilot was kept on a small scale, available only to customers who dialed 211." ... "NYC311 AI Voice provided the customer with information/responses from the NYC311 Content Application Programming Interface."
- Last checked: no 2025 row for the voice pilot; no results published that I found.

C17. Denver's Sunny chatbot, built by Citibot, was introduced in February 2024, cost $184,000 for its first year, draws only on denvergov.org and the city's 311 knowledge base, answers in 72 languages (per the city) and accounted for 12 percent of 311 inquiries by mid-2024 (per the city).
- Source: Catie Cheshire, "Denver's AI Chatbot Knows the Basics but Can't Help on Hot Topics," Westword, June 1, 2024 — https://www.westword.com/news/denver-ai-chatbot-sunny-knows-basics-cant-help-on-hot-topics-20891202
- Quote: "Powered by chatbot Citibot using AWS technology, the software cost $184,000 for the first year" ... "it only pulls from denvergov.org and the city's 311 knowledge base rather than the entire internet. Sunny can respond in 72 languages and is available 24/7" ... "So far, Sunny engagements account for 12 percent of all 311 inquiries, according to the city."
- Last checked: see C20-C22.

C18. Westword's testing found Sunny handled a pothole report smoothly, declined off-topic questions, but struggled beyond basics and offered outdated links.
- Source: same as C17.
- Quote: "When [Westword] reported a pothole at the intersection of 13th and Grant streets, the process was smooth." ... "found that on anything more complicated than the basics, the bot struggles" ... "A lot of the links Sunny offers in support of its responses are outdated, especially for events." ... "'I'm sorry, but I can only provide information or answer questions related to Denver, Colorado.'"
- Last checked: June 2024 test; no later independent test found.

C19. Denver's own Sunny page says it may produce errors and that for detailed questions it "might direct you to the right department"; the 72-language figure is the city's.
- Source: "Sunny," City and County of Denver, fetched Oct. 19, 2026 — https://denvergov.org/Sunny
- Quote: "Sunny uses information from Denvergov.org to answer questions about city services ... in any of 72 languages." ... "Sunny is still learning so for more detailed questions, Sunny might direct you to the right department or resource to get more help." ... "Please note, the information provided may contain errors, omissions, inaccuracies, and outdated information."
- Note: the page's "top 20 most used" language list (German, Italian, Irish, Estonian, Welsh ahead of Chinese and Vietnamese) looks like a list of supported languages, not usage. Not used.
- Last checked: Oct. 19, 2026 (page live).

C20. In October 2025, to help close a $200 million 2026 budget hole, Denver cut 311's staffed hours to 7 a.m.-5 p.m. weekdays, eliminated nine vacant and one filled agent positions and pointed residents to Sunny.
- Source: "Denver 311 service hours reduced, 'Sunny' chatbot takes on more," Denver Gazette, Oct. 6, 2025 — https://www.denvergazette.com/?p=345381
- Quote: "the new hours for Denver's 311 will be 7 a.m. to 5 p.m., Monday through Friday, trimming two hours off the previous schedule." ... "As part of its effort to help Denver plug a $200 million hole in its 2026 budget, city officials eliminated nine vacant and one filled 311 customer service agent positions."
- Corroborated: CBS Colorado, Oct. 7, 2025 — https://www.cbsnews.com/colorado/news/denver-changes-311-service-hours-ai-chatbot-answer-questions/
- Last checked: Oct. 19, 2026.

C21. On Tuesday, Oct. 13, 2026, Denver's council voted 9-3 against a five-year, $3.9 million extension of the Citibot contract, which would also have allowed a 311 "voicebot." Opponents said the bot often gives inaccurate information and eliminates jobs; the mayor's office cited 90 percent satisfaction and about 40 percent of 311 contacts coming through Sunny and the online hub. The contract is paid through the end of October.
- Source: "Denver AI Chatbot 'Sunny' May Go Dark After Contract Vote," GovTech (Tribune News Service, from The Denver Post), Oct. 14, 2026 — https://www.govtech.com/artificial-intelligence/denver-ai-chatbot-sunny-may-go-dark-after-contract-vote
- Quote: "Despite mayoral support, the City Council voted 9-3 against a five year, $3.9 million contract extension for the company behind the bot. The pact would have allowed for creation of a 'voicebot' for 311 calls." ... "Councilmembers argued that the program often provides inaccurate information and eliminates jobs that humans should have." ... "Johnston's administration has argued that many residents prefer to use digital channels to report issues with about 40% of the city's 311 customer service calls coming through Sunny and the city's online reporting hub this year. The chatbot has a 90% customer service satisfaction rating" ... "The contract for Sunny is paid for through the end of October."
- Last checked for newer developments: Oct. 19, 2026. Searched for a deal or reversal; latest coverage (GovTech Oct. 14, Governing Oct. 15) describes the outcome as open. Denverite (Oct. 14) blocked automated access.

C22. Denver's proposed voicebot would have transferred callers to a 311 agent as soon as they said "human," "live agent" or "a person"; the amendment would have added $3,889,784.94 to an existing $450,000 contract; Denver's resident-experience director cited an 80 to 95 percent satisfaction rate for Sunny.
- Source: Spencer Soicher, "People who call 311 in Denver for help may soon have to speak with a robot first," 9News (via Yahoo News), Oct. 1, 2026 — https://www.yahoo.com/news/us/articles/people-call-311-denver-help-035324965.html
- Quote: "If a caller says 'human,' 'live agent' or 'a person,' the call will be transferred immediately to the 311 call center," ... "The contract amendment would add $3,889,784.94 to the city's existing $450,000 contract with Citibot Inc., the company behind Sunny." ... "'we have consistently gotten an 80 to 95% satisfaction rate,' Dunwoody said."
- Last checked: superseded in part by C21 (amendment rejected).

C23. The United Kingdom's Government Digital Service (GDS) reported in January 2024 that its first GOV.UK Chat experiment did not reach the accuracy GOV.UK requires, produced a few hallucinations and that some users over-trusted it because of the GOV.UK brand.
- Source: "The findings of our first generative AI experiment: GOV.UK Chat," Inside GOV.UK blog, GDS, Jan. 18, 2024 — https://insidegovuk.blog.gov.uk/2024/01/18/the-findings-of-our-first-generative-ai-experiment-gov-uk-chat/
- Quote: "Overall, answers did not reach the highest level of accuracy demanded for a site like GOV.UK, where factual accuracy is crucial. We also observed a few cases of hallucination" ... "We also found that some users underestimated or dismissed the inaccuracy risks with GOV.UK Chat, because of the credibility and duty of care associated with the GOV.UK brand."
- Last checked: C24, C25.

C24. GDS reported in March 2026 that two public pilots drew more than 10,000 users and 26,000 questions; accuracy rose from 76 percent to 90 percent, graded by subject experts and automated tools; inaccuracies were often partial answers; the answer rate for in-scope questions was 88 percent; all 508 jailbreak attempts were blocked; handoff to a human adviser was not yet supported; the current version runs on Anthropic's Claude models.
- Source: "5 things we learned testing GOV.UK Chat: an AI assistant for government," Inside GOV.UK blog, GDS, March 16, 2026 — https://insidegovuk.blog.gov.uk/2026/03/16/5-things-we-learned-testing-gov-uk-chat-an-ai-assistant-for-government/
- Quote: "More than 10,000 users asked 26,000 questions about government services" ... "we've been able to increase answer accuracy scores from 76%, our earliest benchmark, to our latest figure of 90% accuracy across all topics. We assess answers using a combination of subject matter experts, and automated evaluation tools. Chat exclusively draws on guidance published on GOV.UK, and our assessors only rate an answer as 'accurate' if it meets all the standards of published content. In cases of 'inaccuracy', it's often that GOV.UK Chat is able to answer some but not all aspects of a user's question." ... "Our answer rate for in-scope questions is now 88% with plans to improve further." ... "During the two pilots, there were 508 attempts to 'jailbreak' GOV.UK Chat." ... "We also found some people wanted to speak to an advisor with access to their personal information, which isn't something we currently support." ... "We are now using Amazon's Bedrock platform and Anthropic's Claude models to power the latest version of GOV.UK Chat."
- Note: the 90 percent figure is the government's own grading, not independent.
- Last checked: C25.

C25. GOV.UK Chat soft-launched in the GOV.UK app on March 26, 2026, and launched officially on May 14, 2026.
- Source: "Answers in seconds, 24/7: GOV.UK Chat launches in the GOV.UK app," GDS blog, May 14, 2026 — https://gds.blog.gov.uk/2026/05/14/gov-uk-chat-launches/
- Quote: "Today, we're officially launching GOV.UK Chat in the GOV.UK app" ... "Since the soft launch on 26 March 2026, GOV.UK Chat has been available to GOV.UK app users without any proactive communications."
- Last checked: Oct. 19, 2026; could not search for later evaluations (search budget exhausted).

C26. The City's fiscal 2025 language access report says some agencies rely on unsupervised machine translation and warns it is less accurate for low-resource languages like Wolof and Fulani/Pulaar; agencies reported more than 1,544,100 telephone interpretations in fiscal 2025.
- Source: Local Law 30 Report for Fiscal Year 2025, Mayor's Office of Immigrant Affairs and Mayor's Office of Operations — https://www.nyc.gov/assets/immigrants/downloads/pdf/FY25-Language-Access-Annual-Report.pdf
- Quote: "Some agencies noted reliance on unsupervised machine translation tools to produce translated content without professional review or quality assurance." ... "The risks are even greater for low-resourced languages like Wolof, Fulani/Pulaar, or indigenous languages, where machine translation systems have far less data to learn from, resulting in significantly lower accuracy rates." ... "Number of telephonic interpretation services provided: >1,544,100"
- Last checked: FY2026 report not found (could not search).

C27. (Added by fact-checker.) Before the Oct. 13, 2026 vote, a Denver technology official told the council the city would not continue the service if the contract were rejected; the mayor's spokesman said Johnston's office would meet the council to find a way to keep it active. Later searches (Oct. 19, 2026) found no announced deal.
- Source: GovTech (TNS, The Denver Post), Oct. 14, 2026 — https://www.govtech.com/artificial-intelligence/denver-ai-chatbot-sunny-may-go-dark-after-contract-vote
- Quote: "When asked what would happen if the council rejected the contract, Jenny Schiavone with Denver's Department of Technology Services said the city wouldn't be 'continuing the service.'" ... "A spokesman for his administration said Johnston's office will meet with the council in the next few days to find a solution to keep the service active."
- Last checked: Oct. 19, 2026.

C28. (Added by fact-checker.) DYCD's chatbot was upgraded in 2025 to Microsoft Azure Language (Custom Question Answering), still returning the best-matching answer from a staff-maintained knowledge base; the City classes it "Fully autonomous."
- Source: jaw4-yuem (as C7), 2025 row "DYCD Virtual Assistant Chatbot."
- Quote: updated_desc "The DYCD Virtual Assistant Chatbot was upgraded in 2025 to use the Microsoft Azure Language ... the chatbot uses the Custom Question Answering and Conventional Language Understanding components."; data_output "...searches the knowledge base, ranks the possible answers and returns the best match."; autonomy "Fully autonomous".
- Last checked: Oct. 19, 2026.

C29. (Added Oct. 20, 2026, fix pass.) The MyCity chatbot launched on OpenAI's GPT-3.5 Turbo; the City's 2024 Local Law 35 filing says the model was upgraded to GPT-4o that year. So the bot The Markup tested in March 2024 was not running GPT-4o.
- Source: Algorithmic Tools Compliance Report, NYC Open Data dataset jaw4-yuem, queried Oct. 20, 2026 — https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=1000
- Quote (2023 row, "MyCity Chatbot"): purpose_desc "...The chatbot is using Microsoft's Azure AI technology and OpenAI's ChatGPT 3.5 Turbo LLM."; vendor_name "Microsoft, Nuvalence". (2024 row): updated_desc "Security updates and LLM upgraded to use ChatGPT 4-o."; vendor_name "Microsoft, EY".
- Last checked: Oct. 20, 2026.

C30. (Added Oct. 20, 2026, fix pass.) Fraser's own words in March 2025 included "all the content that comes from 311" (re-fetched to answer the outside review, which said "all" was the essay's word).
- Source: City & State, March 19, 2025, fetched Oct. 20, 2026 — https://www.cityandstateny.com/personality/2025/03/matt-fraser-still-wants-expand-mycity-and-ai-chatbot/403899/
- Quote: "We're currently expanding scope to go beyond small business, to include all the content that comes from 311."
- Last checked: Oct. 20, 2026.

C31. (Added Oct. 20, 2026, fix pass.) Westword's Sunny article is dated June 1, 2024; the 12% share is the city's figure "so far" as of that date. Denver's own Sunny page names only Denvergov.org as Sunny's source; Westword names denvergov.org and the 311 knowledge base.
- Source: Westword, fetched Oct. 20, 2026 — https://www.westword.com/news/denver-ai-chatbot-sunny-knows-basics-cant-help-on-hot-topics-20891202 (page metadata: "datePublished 2024-06-01T08:30:00"); Denver, fetched Oct. 20, 2026 — https://denvergov.org/Sunny
- Quote (Westword): "it only pulls from denvergov.org and the city's 311 knowledge base rather than the entire internet" ... "So far, Sunny engagements account for 12 percent of all 311 inquiries, according to the city." (Denver): "Sunny uses information from Denvergov.org to answer questions about city services"
- Last checked: Oct. 20, 2026. (The revised essay no longer uses the source scope or the 12% figure.)

C32. (Added Oct. 20, 2026, fix pass.) Currency check on Sunny: a Google News search for "Denver Sunny chatbot" on Oct. 20, 2026 returned nothing newer than Oct. 14, 2026 (Denverite, The Denver Post, 9News on the vote). No deal or reversal reported. GovTech page re-fetched; quotes in C21 and C27 unchanged.
- Source: https://news.google.com/rss/search?q=Denver+Sunny+chatbot ; https://www.govtech.com/artificial-intelligence/denver-ai-chatbot-sunny-may-go-dark-after-contract-vote
- Quote (GovTech): "A spokesman for his administration said Johnston's office will meet with the council in the next few days to find a solution to keep the service active. The contract for Sunny is paid for through the end of October."
- Last checked: Oct. 20, 2026.

## Could not confirm
- Any successor to the MyCity chatbot under Mamdani. I found none in the Local Law 35 data, City & State's July 2026 reporting or the City's chat.nyc.gov page; a final search for later announcements could not be run because the shared web-search budget ran out. The essay says only what City & State reported in July and what the chat page shows.
- Whether Denver's Sunny survives past October 2026. Coverage through Oct. 15 says the outcome is open.
- Any accuracy or error rate for Sunny, the MyCity bot or the DYCD bot. None found published. Fraser's "hallucinations ... gone down exponentially" is an unsupported claim and is attributed as such.
- Citibot's vendor figures (95,000 residents, 45 languages, $0.35 per conversation vs. $4) — vendor claims, not used.
- Denver Auditor's 311 audit (misrouted requests; personal-data exposure) — seen only in search snippets and the Denver Gazette's one-line mention; did not fetch the audit itself. Not used.
- The old essay's opening scene (Spanish-speaking resident disputing a parking ticket at 11:47 p.m.) — no source; invented. Not used.
- The old essay's "72 languages" — confirmed only as Denver's own claim (C17, C19). The essay attributes it to the city.
- What the FY2025 "one-time increase in automated MyCity-related inquiries" in the MMR was. Not used.

## Notes for other essays
- the-inventory: Office of Algorithmic Accountability overdue as of July 2026 with $1.4 million budgeted for six staff (C9). Local Law 35 row counts: 31/46/55/86 for 2022-2025 confirmed by my query (218 rows).
- the-inventory / procurement: MyCity chatbot vendors shifted from Microsoft and Nuvalence (2023 row) to Microsoft and EY (2024-2025 rows). Denver's council also rejected a $5 million, three-year Slalom tech contract 10-2 the same night (GovTech, Oct. 14, 2026).
- procurement: Denver's Citibot amendment structured the voicebot as an optional add-on to be bought later "without going through the procurement process again" (9News, Oct. 1, 2026).
- the-desk: Denver cut 311 agent positions (C20) while expanding the bot; council members' jobs objection (C21).
- benefits-backlog: GOV.UK Chat demand strongest for tax, driving and benefits (GDS, May 14, 2026).
