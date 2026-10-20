---
slug: streets
title: Count the Bus Cameras' Mistakes in Public
dek: Two independent studies show New York City's speed cameras cut crashes. When the bus cameras misfire, the public should see the count and drivers should get their money back without asking.
section: The Promise
category: Transportation
skyline_stat: "2.8 million events flagged by MTA bus cameras in 2025, 55% of them turned into notices"
skyline_value: 2833378
skyline_claim: C9
---

In late 2024, Johnatan Cuji got a ticket from a bus. A bus-mounted camera had logged his car in a bus lane, and the summons carried a photo. According to [NBC New York's I-Team](https://www.nbcnewyork.com/investigations/mta-bus-camera-issue-mistake-parking-violations/6020986/), the photo showed him "parked squarely in a legal alternate side parking zone."

He had company. The Metropolitan Transportation Authority (MTA) told NBC that its bus cameras had mistakenly ticketed about 3,800 vehicles on the M79 and the Bx35, and that more than 870 of them were parked legally. Nobody had programmed the cameras to recognize the alternate-side stretches that interrupt the M79's bus lane, and both routes were supposed to still be in a warning period. The vendor, which a source identified to NBC as Hayden AI, declined to answer questions. The City's Department of Transportation (DOT) said a person reviews every machine-generated violation, then declined to say how those reviewers missed hundreds of bad ones. Anyone who had paid was refunded.

That episode looks like an argument against letting software write tickets. The record points the other way: of all the automation arriving on New York City's streets, cameras that enforce traffic rules already on the books have the strongest evidence behind them. The M79 failure was a setup error. The remedy is to count errors like it in public and pay people back without making them ask.

## Speed cameras

DOT reported in [January 2025](https://www.nyc.gov/html/dot/html/pr2025/nyc-dot-speed-cameras.shtml) that with more than 2,400 speed cameras in place, average daily violations per camera had fallen 94%, and that sites with cameras installed in 2022 saw 14% fewer injuries and deaths than sites without them. Those are an agency grading its own program.

Outside researchers have since done the harder work. Aaron Stagoff-Belfort of the University of Chicago, Jonathan Ben-Menachem of Columbia and Brenden Beck of Rutgers treated the staggered rollout of about 2,000 cameras from 2014 to 2023 as a natural experiment. In a study in the Proceedings of the National Academy of Sciences (PNAS), they [found](https://knowledge.uchicago.edu/records/0k7rq-yw833) that collisions near a new camera fell 5% and injuries 2.5% per month on average, adding up to drops of 30% and 16% over seven months. A New York University team studying more than 1,800 school-zone cameras from 2019 to 2021 [reported](https://engineering.nyu.edu/news/nyc-speed-cameras-take-six-months-change-driver-behavior-effects-vary-neighborhood) a 14% drop in crashes and a 75% drop in speeding violations. The effects varied by neighborhood and took about six months to mature.

In June 2025, Gov. Kathy Hochul [signed a bill](https://governor.ny.gov/news/keeping-families-safe-governor-signs-legislation-extending-new-york-city-school-speed-camera) extending the speed-camera program to July 1, 2030. A separate 2024 law [raised the cap](https://www.nyc.gov/html/dot/html/pr2024/red-light-camera-program-legislation.shtml) on red-light camera intersections from 150 to 600. In January 2026, DOT said red-light cameras were operating at [just 150 intersections](https://politicsny.com/2026/01/09/nyc-will-add-new-red-light-cameras-at-450-intersections-before-end-of-year-dot/) and that it would reach 600 by the end of this year.

None of this is much like the artificial intelligence people argue about. A speed camera measures speed against a posted limit. DOT's filing under Local Law 35, the City's annual inventory of algorithmic tools, [lists one tool](https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=500) for 2025, and it isn't a camera: Midtown in Motion, a system that sorts traffic in the Midtown core into four levels of congestion and picks signal timing to match.

## Bus cameras

A camera on a moving bus has to make harder calls. It has to decide whether the car ahead is in a bus lane, at a stop or double-parked, and whether the curb there is legal at that hour. That is the call the M79 cameras got wrong.

The program, now called Automated Camera Enforcement, [runs on 76 routes](https://www.mta.info/agency/new-york-city-transit/automated-camera-enforcement). The MTA says routes with cameras have seen bus speeds rise 5% on average and collisions fall 20%, with blocked stops down 40%, [according to NY1](https://ny1.com/nyc/brooklyn/news/2026/01/09/mta-continues-crackdown-on-bus-lane-parking-with-more-cameras). Those are the agency's own numbers, and they deserve an outside check like the one the speed cameras got.

The MTA's open data show how much sorting happens after the camera fires. In 2025, buses flagged [2,833,378 events](https://data.ny.gov/Transportation/MTA-Bus-Automated-Camera-Enforcement-Violations-Beginning-October-2019/kh8p-hcbm). Just over half, 1,568,647, became notices. The rest were rejected: 712,421 because the vehicle fell into an exempt category (emergency vehicles, buses and paratransit, some commercial vehicles), 308,691 for a technical problem and 243,610 because driver or vehicle information was missing. The software flags; the exemption rules and a City employee decide which flags become tickets.

The dataset [records](https://data.ny.gov/api/views/kh8p-hcbm.json) only events "rejected for business reasons" before a notice goes out. It has no category for a notice that went out and was later voided, dismissed or refunded.

## The case against

The safeguard the City advertises, a human reviewer for every violation, failed on hundreds of tickets, and nobody explained why. The vendor wouldn't talk. Fines start at $50 and [climb to $250](https://www.nyc.gov/site/finance/vehicles/mta-bus-camera-violations.page) within a year, which weighs more on a low-wage driver than on a well-paid one. A program that issues more than 1.5 million notices a year can do a lot of damage with a small error rate, and the person on the wrong end has to notice, contest and wait.

A critic could also read the rejection pile as a sign of noisy detection: nearly 45% of what the cameras flagged in 2025 never became a notice. Most of those were vehicles the rules exempt. But 308,691 were rejected for a "technical issue/other," a category the dataset does not break down further.

The alternative to a camera is a police stop, or nothing. Ben-Menachem, one of the PNAS authors, [notes](https://jbenmenachem.substack.com/p/nyc-speeding-cameras-work-new-study) that speed-camera fines are a flat $50 "with no points" and come "without the risk of human bias (i.e., racial discrimination)."

Mayor Zohran Mamdani's [Vision Zero Reimagined](https://www.nyc.gov/mayors-office/news/2026/09/mayor-mamdani-unveilsvision-zero-reimagined-to-make-streets-safe) plan, released Sept. 15, promises to expand automated enforcement and to start the City's first Super Speeder program. The City says vehicles with more than 16 speed-camera violations a year are twice as likely to be in a crash that kills or seriously injures someone. The [state budget](https://legislation.nysenate.gov/pdf/bills/2025/a10008c) Hochul signed in May lets the City, once it passes a local law, require the owner of a vehicle with 16 school-zone speed-camera tickets in 12 months to install a device that restricts its speed. The device has to let the driver override it when traffic requires, and the provision does not take effect until May 2027. Camera records are on their way to becoming evidence for heavier penalties, which makes their accuracy matter more than a $50 refund.

## Robotaxis

The vehicle that is supposed to be the future has a thinner record here. In August 2025, Waymo got a City permit to test [up to eight cars](https://techcrunch.com/2025/08/22/waymo-approved-to-start-autonomous-vehicle-testing-in-new-york-city) in Manhattan and Downtown Brooklyn, with a safety operator keeping a hand on the wheel. The permits [expired March 31](https://www.thecityreporter.nyc/2026/04/06/waymo-driverless-cars-testing-roads-autonomous-vehicle/), and the Mamdani administration [has not renewed them](https://www.vitalcitynyc.org/waymo-driverless-ridehail-strategy-nyc/), though the May budget [extended](https://www.nysenate.gov/legislation/bills/2025/A10008/amendment/C) the state's testing law, which requires a human in the driver's seat, to April 1, 2028. In February 2026, Hochul [dropped her proposal](https://www.wxxinews.org/local-news/2026-02-19/hochul-pulls-robotaxi-expansion-from-her-budget-proposal) to allow limited robotaxi service outside the city; her office said "the support was not there."

The safety evidence is unsettled. Waymo's own researchers [report](https://arxiv.org/abs/2505.01515v1) large crash reductions over 56.7 million driverless miles in the cities where it carries riders. A Hunter College team comparing Waymo's record elsewhere with New York's for-hire drivers first reported a higher rate of serious-injury crashes, then [retracted that analysis](https://gothamist.com/news/war-over-robotaxis-in-nyc-heats-up-after-retracted-waymo-report-and-autokill-novel) after Waymo pointed out flaws. The [revised version](https://www.openplans.org/s/How-Would-For-Hire-AVs-Impact-NYC_SSTRP_Open-Plans_Revised.pdf) found Waymo had 62% fewer injury crashes per mile, in the cities where it operates, than the city's for-hire vehicles, and called that "not yet a conclusion for New York City." Nobody knows yet whether a robotaxi would be safer than a New York cab driver. Two independent studies have measured what a speed camera does on the blocks around it.

## What the MTA should publish

The MTA already publishes every event its cameras flag and the reason for each rejection. It should add the back end to the same dataset: for every notice, whether it was later voided, dismissed at a hearing or refunded, and why, by route, updated monthly with the rest. A cluster of dismissals on one route in one month is what a configuration error looks like, and the public would see it before NBC did.

When the MTA or DOT finds an error of that kind, the City should void every affected notice and mail the refund without waiting for a dispute. That happened on the M79, but the public learned of the errors from a TV news investigation. It should happen because the count showed it.

In the dataset today, the M79 and Bx35 tickets the MTA reversed in 2024 look like every other violation issued.

<!-- CHART
title: Of 2.8 million events the bus cameras flagged in 2025, 55% became notices
dek: MTA Automated Camera Enforcement events by status, calendar 2025. The dataset does not track notices later voided or refunded.
type: bar
data:
| Status | Events |
|---|---|
| Notice issued | 1,568,647 |
| Rejected: exempt vehicle (emergency, bus/paratransit, commercial, other) | 712,421 |
| Rejected: technical issue/other | 308,691 |
| Rejected: driver or vehicle info missing | 243,610 |
| No status recorded | 9 |
| Total | 2,833,378 |
source: MTA, "MTA Bus Automated Camera Enforcement Violations: Beginning October 2019," data.ny.gov (kh8p-hcbm), queried Oct. 19, 2026
claims: C9, C10
-->

<!-- CLAIM MAP
paragraph 1: C3, C27
paragraph 2: C1, C2, C4, C5, C6
paragraph 3: C1, C2, C6 (argument)
paragraph 4: C11
paragraph 5: C12, C13
paragraph 6: C14, C15, C16
paragraph 7: C24
paragraph 8: C2 (argument)
paragraph 9: C7, C8
paragraph 10: C9, C7
paragraph 11: C10
paragraph 12: C5, C4, C25, C9
paragraph 13: C9
paragraph 14: C12
paragraph 15: C17, C28
paragraph 16: C18, C19, C20, C28, C21
paragraph 17: C23, C22, C26, C12, C13
paragraph 18: C9, C10 (proposal)
paragraph 19: C6, C1 (proposal)
paragraph 20: C29, C10
-->
