---
slug: front-door
title: A Chatbot Without a Public Accuracy Rate Has No Place at 311
dek: Denver's council voted against renewing its city chatbot and New York shut down MyCity; neither city ever published how often its bot was right.
section: The Promise
category: City Services
skyline_stat: "16.6 million calls to 311 in fiscal 2026"
skyline_value: 16.6
skyline_claim: C10
---

On Oct. 13, Denver's City Council [voted 9-3 against extending the contract](https://www.govtech.com/artificial-intelligence/denver-ai-chatbot-sunny-may-go-dark-after-contract-vote) for Sunny, the city's artificial intelligence chatbot, and with it a planned voice bot for 311 calls. Council members said Sunny often gives wrong information and takes work that people should be doing. Mayor Mike Johnston's office answered that the bot has a 90% satisfaction rating and that about 40% of 311 contacts now come through it and the city's online reporting system. The contract is paid through the end of October. A city technology official told the council the service would end without it, and Johnston's office said it would look for a way to keep Sunny running. No deal had been announced by Oct. 20.

Both sides argued without the number that would have settled it. Satisfaction measures whether people liked an answer, and a confident wrong answer can please the person who gets it. Whether Sunny is often wrong is a question with an answer: take a sample of real questions, have staff grade the replies against the city's own guidance and count. When [Westword tried Sunny informally in 2024](https://www.westword.com/news/denver-ai-chatbot-sunny-knows-basics-cant-help-on-hot-topics-20891202), a pothole report went smoothly, but questions about construction, lead in water and events got thin answers and outdated links. No such count appears in the coverage of the vote or on [Denver's page for Sunny](https://denvergov.org/Sunny), which warns that its answers "may contain errors, omissions, inaccuracies, and outdated information."

New York had its own chatbot fight, also without a number. Mayor Eric Adams [unveiled the MyCity chatbot in October 2023](https://www.nyc.gov/office-of-the-mayor/news/777-23/mayor-adams-releases-first-of-its-kind-plan-responsible-artificial-intelligence-use-nyc), promising business owners "trusted information" from the City's business pages. In March 2024, The Markup asked it whether landlords had to accept Section 8 vouchers. Once it told a reporter yes. Then 10 staff members asked the same question, and [the bot told every one of them no](https://themarkup.org/news/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law). In New York City, refusing a tenant because of how the rent gets paid is illegal, with a narrow exception for small owner-occupied buildings. The bot also said a boss could take a cut of workers' tips and a restaurant could refuse cash, and it made similar errors in other languages.

The Adams administration [added disclaimers, fixed some answers and appeared to narrow what the bot would take on](https://themarkup.org/artificial-intelligence/2026/01/30/mamdani-to-kill-the-nyc-ai-chatbot-we-caught-telling-businesses-to-break-the-law), and Adams promised "the best chatbot system on the globe." The City later moved the bot to OpenAI's GPT-4o model and, by 2025, had [loaded it with 311's knowledge articles](https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=1000). Matthew Fraser, then the chief technology officer, [said in March 2025](https://www.cityandstateny.com/personality/2025/03/matt-fraser-still-wants-expand-mycity-and-ai-chatbot/403899/) that hallucinations had "gone down exponentially" since a patch that turned away questions outside the bot's scope. He gave no figure. In January 2026, Mayor Zohran Mamdani called the bot "functionally unusable," and the City took it down in early February. [Its old address](https://chat.nyc.gov/) now carries a page titled "The Chatbot beta test has ended." In more than two years, neither the City's annual filings on its algorithmic tools nor the Mayor's Management Report gave an accuracy rate for it.

Shutting it down was the right call. Fraser's case for a bot still stands, though: more than 70% of calls to 311 are requests for information, he said, and the phone line is under strain. In fiscal 2026 the average wait for high-volume calls rose to 43 seconds from 25 the year before, which the City blamed on a hard winter, according to the [Mayor's Management Report](https://www.nyc.gov/assets/operations/downloads/pdf/mmr2026/311.pdf). A tool that answered the routine questions correctly would leave agents more time for callers with harder problems. In July, City Hall spokesperson Jeremy Edwards told City & State that the administration would use AI ["only where it demonstrably improves life for New Yorkers."](https://www.cityandstateny.com/policy/2026/07/mamdanis-government-has-started-embrace-ai-will-he/414872/) Nobody can tell whether a bot meets that standard without measuring how often it is right.

The harm from a bad bot is hard to see. A wrong answer about a tenant's rights or a worker's tips can cost someone money, and the person who acts on it may never learn it was wrong. Britain's Government Digital Service found in its [first chatbot trial](https://insidegovuk.blog.gov.uk/2024/01/18/the-findings-of-our-first-generative-ai-experiment-gov-uk-chat/) that some users trusted the answers more than they should have because the bot carried the government's name. A bot can also make cuts easier. In October 2025, to help close a $200 million budget hole, Denver [shortened 311's staffed hours](https://www.denvergazette.com/?p=345381), and eliminated 10 agent positions, nine of them vacant. The city presented the cut as a budget measure and sent after-hours callers to a bot whose accuracy it had not published.

Grading can be done, and in public. The British team said plainly that its first trial "did not reach the highest level of accuracy demanded," and kept testing. Across two public pilots, subject experts and automated checks graded the bot's answers to 26,000 questions, and [accuracy rose from 76% to 90%](https://insidegovuk.blog.gov.uk/2026/03/16/5-things-we-learned-testing-gov-uk-chat-an-ai-assistant-for-government/). Only then did it [go live in the GOV.UK app](https://gds.blog.gov.uk/2026/05/14/gov-uk-chat-launches/). Those are the government's own grades, many of the misses were answers that covered only part of a question and, as of March, the bot could not hand a user to a human adviser. But anyone in Britain can see the number and argue about it, which is more than a council member in Denver or a mayor in New York could do.

New York already runs AI tools at the front door that are easier to trust because they do less. Since 2024, a Microsoft tool has translated 311 text messages so English-speaking agents can answer them; the agent writes the reply. The 311 app suggests complaint categories from a photo and lets the user pick. The youth department's chatbot returns the best match from a knowledge base its staff maintain. MyCity wrote its own answers.

Before any tool writes answers for residents again, the Office of Technology and Innovation should build a test set of real 311 information questions in the 10 designated citywide languages, have 311 staff grade the replies against the City's knowledge articles and publish the accuracy rate in the 311 chapter of the Mayor's Management Report, next to wait times and satisfaction, with a target. Each language should be graded on its own; the City's [language access report](https://www.nyc.gov/assets/immigrants/downloads/pdf/FY25-Language-Access-Annual-Report.pdf) already warns that machine translation is much less accurate in languages such as Wolof and Fulani. The test should run again every year and whenever the model behind the tool changes, as MyCity's did in 2024. A tool that misses its target should stay off. Asking for a human should reach a person at once, as Denver's voice bot proposal [promised](https://www.yahoo.com/news/us/articles/people-call-311-denver-help-035324965.html). And the City should not cut 311's staffed hours on the strength of a bot.

The fiscal 2026 management report came out in September. If a bot is coming, its first score belongs in the next one, in the same table as 311's calls and waits.

<!-- CHART
title: 311 took fewer calls in fiscal 2026, but callers waited longer
dek: Calls to New York City's 311 and average wait for high-volume calls, by fiscal year (July-June)
type: bar
data:
| Fiscal year | 311 calls (millions) | Average wait, Tier 1 calls (seconds) |
|---|---|---|
| 2022 | 18.231 | 29 |
| 2023 | 17.886 | 17 |
| 2024 | 17.458 | 31 |
| 2025 | 17.377 | 25 |
| 2026 | 16.609 | 43 |
(bars = average wait in seconds; call volume as labels. All values from C10 and C11. FY2026 target wait: 30 seconds.)
source: Mayor's Management Report, Fiscal 2026, 311 Customer Service Center chapter
claims: C10, C11
-->

<!-- CLAIM MAP
paragraph 1: C21, C27, C32
paragraph 2: C21, C18, C17, C19
paragraph 3: C1, C2, C3
paragraph 4: C1, C5, C29, C7, C8, C4, C6 (no published accuracy figure in the Local Law 35 filing or the MMR; see check report judgment calls)
paragraph 5: C8, C11, C9
paragraph 6: C2, C3, C23, C20
paragraph 7: C23, C24, C25
paragraph 8: C13, C14, C15, C28, C7
paragraph 9: C13, C10, C11, C26, C29, C22, C20
paragraph 10: C10, C11
-->
