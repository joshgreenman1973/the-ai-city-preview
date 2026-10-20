---
slug: streets
title: The Bus-Camera Tickets That Get Taken Back Go Uncounted
dek: Two independent studies found that speed cameras cut crashes, and camera records could soon help decide which drivers have to install speed-limiting devices.
section: The Promise
category: Transportation
skyline_stat: "2.8 million events flagged by MTA bus cameras in 2025, 55% of them turned into notices"
skyline_value: 2833378
skyline_claim: C9
---

In late 2024, Johnatan Cuji got a ticket from a bus. A bus-mounted camera had logged his car in a bus lane, and the summons carried a photo. According to [NBC New York's I-Team](https://www.nbcnewyork.com/investigations/mta-bus-camera-issue-mistake-parking-violations/6020986/), the photo showed him "parked squarely in a legal alternate side parking zone."

He had company. The Metropolitan Transportation Authority (MTA) told NBC that its bus cameras had wrongly ticketed about 3,800 vehicles on the M79 and the Bx35, more than 870 of them parked legally. Nobody had told the cameras about the alternate-side stretches that interrupt the M79's bus lane, and both routes were supposed to still be in a warning period. The vendor, which a source identified as Hayden AI, wouldn't answer questions. The City's Department of Transportation (DOT) said a person reviews every machine-generated violation, then wouldn't say how those reviewers missed hundreds of bad ones. Anyone who had paid got a refund.

That looks like an argument against letting software write tickets. The record points the other way. Cameras that enforce traffic rules already on the books have better evidence behind them than any other automation on New York City's streets, and the City is right to keep adding them. What the M79 exposed is a hole in the bookkeeping. The MTA publishes every event its cameras flag and why it threw some of them out. It publishes nothing about the tickets it later takes back, so an error like the M79's shows up on the evening news before it shows up in the data.

## Speed cameras

DOT has long [reported](https://www.nyc.gov/html/dot/html/pr2025/nyc-dot-speed-cameras.shtml) that its speed cameras cut speeding and injuries, which is an agency grading its own program. Outside researchers have since checked. Aaron Stagoff-Belfort of the University of Chicago, Jonathan Ben-Menachem of Columbia and Brenden Beck of Rutgers treated the staggered rollout of about 2,000 cameras from 2014 to 2023 as a natural experiment. In the Proceedings of the National Academy of Sciences, they [found](https://knowledge.uchicago.edu/records/0k7rq-yw833) that over the seven months after a camera went up, collisions nearby fell 30% and injuries 16%. A New York University team looking at school-zone cameras [reported](https://engineering.nyu.edu/news/nyc-speed-cameras-take-six-months-change-driver-behavior-effects-vary-neighborhood) a 14% drop in crashes, with effects that varied by neighborhood and took about six months to arrive.

Albany has kept the program going. Gov. Kathy Hochul [signed a bill](https://governor.ny.gov/news/keeping-families-safe-governor-signs-legislation-extending-new-york-city-school-speed-camera) in June 2025 extending it to 2030, and a 2024 law [let the City quadruple](https://www.nyc.gov/html/dot/html/pr2024/red-light-camera-program-legislation.shtml) the number of intersections with red-light cameras. As of January, DOT said, red-light cameras were still running at [just 150 intersections](https://politicsny.com/2026/01/09/nyc-will-add-new-red-light-cameras-at-450-intersections-before-end-of-year-dot/), and it promised 600 by the end of this year.

None of this is much like the artificial intelligence people argue about. A speed camera compares a car's speed with a posted limit. The City's annual inventory of algorithmic tools under Local Law 35 doesn't list the cameras at all; DOT's [only entry](https://data.cityofnewyork.us/resource/jaw4-yuem.json?$limit=500) is Midtown in Motion, a system that rates congestion in the Midtown core and picks signal timing to match.

The automation the City has held back is the robotaxi. Waymo tested a handful of cars in Manhattan and Downtown Brooklyn, with a safety driver at the wheel, until its City permits [expired March 31](https://www.thecityreporter.nyc/2026/04/06/waymo-driverless-cars-testing-roads-autonomous-vehicle/). The Mamdani administration [has not renewed them](https://www.vitalcitynyc.org/waymo-driverless-ridehail-strategy-nyc/), even though the May budget [extended](https://www.nysenate.gov/legislation/bills/2025/A10008/amendment/C) the state law that allows such testing. Waymo's [own data](https://waymo.com/safety/impact/), covering more than 270 million driverless miles in other cities through June, show large drops in injury crashes against human drivers. A Hunter College and Open Plans team pulled its first comparison with New York's for-hire drivers after learning that the City's injury data used a [different definition](https://www.openplans.org/s/How-Would-For-Hire-AVs-Impact-NYC_SSTRP_Open-Plans_Revised.pdf) from Waymo's. Its revised version found Waymo had 62% fewer injury crashes per mile and called the result "not yet a conclusion for New York City."

## Bus cameras

A camera on a moving bus has to make harder calls. It has to decide whether the car ahead is in a bus lane, at a stop or double-parked, and whether the curb there is legal at that hour. The MTA's program, Automated Camera Enforcement, [now runs on 76 routes](https://www.mta.info/agency/new-york-city-transit/automated-camera-enforcement). The authority says routes with cameras have seen collisions fall 20% and blocked bus stops fall 40%, [according to NY1](https://ny1.com/nyc/brooklyn/news/2026/01/09/mta-continues-crackdown-on-bus-lane-parking-with-more-cameras). No outside evaluation of those figures has turned up, of the kind the speed cameras got.

The MTA's [open data](https://data.ny.gov/Transportation/MTA-Bus-Automated-Camera-Enforcement-Violations-Beginning-October-2019/kh8p-hcbm) show how much sorting happens after a camera fires. In 2025 the buses flagged 2.8 million events, and just over half became notices. Most of the rest were vehicles the rules exempt, among them emergency vehicles, other buses and paratransit vans and some commercial vehicles. More than 300,000 were thrown out for a "technical issue/other," a category the MTA doesn't break down. Software raises the flag; the exemption rules and a City employee decide which flags become tickets.

That review is where the M79 failed. The dataset [counts](https://data.ny.gov/api/views/kh8p-hcbm.json) only events rejected before a notice goes out. It has no category for a notice that went out and was later voided, dismissed at a hearing or refunded. Look up the M79 and Bx35 tickets from the fall of 2024 and they appear as violations issued, like any others.

The cost of a bad notice falls on the driver. Fines start at $50 and [climb to $250](https://www.nyc.gov/site/finance/vehicles/mta-bus-camera-violations.page) for repeat violations within a year, which weighs more on a delivery driver than on a lawyer. A program that sends out more than 1.5 million notices a year can do real harm with a small error rate, and the person on the wrong end has to notice the mistake, contest it and wait.

The answer to that is better accounting, because the alternative to a camera is a police stop or no enforcement at all. Ben-Menachem, one of the study's authors, [points out](https://jbenmenachem.substack.com/p/nyc-speeding-cameras-work-new-study) that a speed-camera ticket is a flat $50 "with no points," issued "without the risk of human bias (i.e., racial discrimination)."

The stakes are going up. Mayor Zohran Mamdani's [Vision Zero Reimagined](https://www.nyc.gov/mayors-office/news/2026/09/mayor-mamdani-unveilsvision-zero-reimagined-to-make-streets-safe) plan, released Sept. 15, promises more automated enforcement and the City's first Super Speeder program; the City says vehicles with more than 16 speed-camera violations a year are twice as likely to be in a crash that kills or badly injures someone. The [state budget](https://legislation.nysenate.gov/pdf/bills/2025/a10008c) Hochul signed in May lets the City, once the Council passes a local law, make the owner of a car with 16 school-zone camera tickets in a year install a device that limits its speed, starting in May 2027. Camera records could soon become the evidence for a penalty heavier than a fine.

The City is right to wait on the robotaxis and keep adding cameras. But the cameras need a ledger of their mistakes. The MTA should add the back end to the dataset it already posts: for every notice, whether it was later voided, dismissed or refunded, and why, by route, updated monthly. A cluster of dismissals on one route in one month is what a mapping error looks like, and the public would see it before a TV crew did. When the MTA or DOT finds an error like that, the City should void every affected notice and mail the refund without waiting for each driver to file a dispute. The M79 drivers got their money back, but the public learned of the errors from a TV news investigation.

The MTA should also stop switching routes from warnings to fines before someone has checked the camera's curb map against the street. The MTA [blamed the M79 errors](https://www.nbcnewyork.com/investigations/mta-bus-camera-issue-mistake-parking-violations/6020986/) on the mapping of curb areas and the timing of warnings, and both routes were supposed to still be in the warning period when the fines went out. Before the Council lets 16 camera tickets put a speed-limiting device on someone's car, it should require DOT to publish how many speed-camera tickets end up voided or dismissed.

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
paragraph 3: C9, C10, C12, C13 (argument)
paragraph 4: C11, C12, C13
paragraph 5: C14, C15, C16
paragraph 6: C24
paragraph 7: C18, C19, C20, C28, C30, C31, C26
paragraph 8: C7, C8
paragraph 9: C9
paragraph 10: C5, C10, C29
paragraph 11: C25, C9
paragraph 12: C12
paragraph 13: C17, C28
paragraph 14: C19, C20, C9, C10, C6, C1 (argument and proposal)
paragraph 15: C2, C28 (proposal)
-->
