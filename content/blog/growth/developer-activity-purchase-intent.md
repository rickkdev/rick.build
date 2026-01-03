---
slug: developer-activity-purchase-intent
title: What developer activity actually tells you about who's ready to buy
date: 2025-01-14
category: growth
excerpt: After analyzing developer activity across 20+ organizations, I found that accounts with high dev engagement are 2-3x more likely to be at the bottom of the sales funnel. Here's what that means for developer-focused companies.
---

Developers have always been fundamental drivers of tech purchasing decisions. According to the [2023 StackOverflow Survey](https://survey.stackoverflow.co/2023/#section-purchasing-technology-influence-on-technology-purchases), a staggering 66% of developers influence what their companies buy—a finding echoed by [BCG's research](https://www.bcg.com/publications/2022/developers-influence-in-enterprise-tech-sales) on developer influence in enterprise sales. Stripe understood this early on—their entire business strategy was built around winning developers first. Instead of competing on enterprise sales pitches, they focused on streamlined docs, dead-simple integrations, and a developer experience that made engineers actually want to use their product. The result? Developers integrated Stripe across ecommerce everywhere, choosing it over stitching together multiple payment providers and handling integrations themselves. That developer-focused growth strategy is what made Stripe win payments.

This got me thinking: if you're seeing high developer activity from an organization around your product, does that actually signal higher purchase intent?

This question matters for two reasons. First, sales leaders often dismiss developer activity signals when building pipeline. They assume these developers only want the free tier or open-source offering, so they never pursue these accounts. Second, if this thesis holds true, developer-focused companies are sitting on mountains of intent signals they could be monetizing.

## What I found

After working with multiple customers and analyzing their data, here's what stood out:

- The deeper you go in the purchase funnel, the more you see accounts with intense developer activity
- Accounts with developer activity are at least **2x more likely** to be at the bottom of the sales funnel than at the top
- 70% of accounts with developer activity at the bottom of funnel had a high intent score.

![Developer activity findings showing funnel correlation and intent scores](/blog/developer-activity-purchase-intent/what-i-found.png)

## How I analyzed this

For this analysis, I looked at developer activity from multiple public and first-party sources across 20+ organizations I worked with that had significant bottom-up developer motions. The data sources included:

- Organization-owned GitHub repositories – analyzing stars and forks to identify relevant developer accounts
- Competing GitHub projects in the same domain – using them as a cross-reference to validate activity and uncover overlap with the target organization
- Package manager installation metrics – considered, but weighted lower due to significant inflation and noise
- GitHub dependency graphs – leveraging direct dependent data to understand real-world usage of specific libraries
- Developer activity on technical documentation – tracking edits, contributions, and engagement patterns
- Usage signals from cloud products – observing activity across relevant cloud services
- Open-source commit analysis – scraping and correlating commit data to build and verify developer fingerprints that indicate usage of specific developer tools
I triangulated this developer activity into account-level insights using custom tools I've built for customers, then imported everything into their CRMs for analysis.
- GitHub Codesearch to find additional projects per dependency

I categorized accounts into three Developer Activity Score bands: High, Medium, Low based on a proprietary algorithm that translates various developer activities into these bands.

It’s important to note that enriching a large number of GitHub accounts into valid business contacts is inherently difficult.

My typical pipeline starts with collecting GitHub accounts alongside the various data points I’ve scraped, then sending them to Clay to query multiple data providers for LinkedIn enrichment. In practice, I’ve observed a very high false-positive rate across these providers.

Because of this, all reported metrics are based exclusively on accounts that could be reliably enriched, and should be interpreted with that constraint in mind. I ran for each contact 1 LLM request to verify if the enrichment looks authentic and qualified it therefore as correct or not. This results in a quite high per company LLM requests loop (between 10-20k per org). I find its highly worth it.

## The correlation is real

My initial hypothesis was to understand the correlation between Developer Activity Score and accounts sitting in the 'lead' stage of CRM. Validating this would establish Developer Activity Score as a proxy for identifying "hot" accounts with higher likelihood of being further down the funnel.

At an overall level, I found that 1 in 6 accounts typically in the Lead stage are captured in my tooling with their developer activity tracked across docs, open source repos, product usage, website visits, and community engagement. I used this as the baseline for all analysis.

Looking deeper into the funnel, the ratio of accounts in Opportunity/Deal stage was **2x the baseline**—about 1 in 3 accounts at this stage showed some level of developer activity.

For Customer accounts, the correlation was even stronger. The ratio jumped to **3x the baseline**. Nearly 1 in 2 paying customers had measurable developer activity.

![Chart showing developer activity correlation across sales funnel stages](/blog/developer-activity-purchase-intent/funnel-correlation.png)

## Activity intensity matters too

This analysis was eye-opening because it clearly showed that accounts with developer activity are more common at the bottom of the funnel than the top. But I wanted to dig deeper: does the *intensity* of developer activity also increase along the sales funnel?

When I analyzed Developer Activity Scores across CRM lifecycle stages, the correlation got even stronger:

- ~45% of accounts in CRM come from 'Medium and High' activity bands—these show deeper engagement beyond just lone-wolf developers poking around
- ~65% of accounts in Opportunity stage come from 'Medium and High' activity accounts
- Nearly 4 out of 5 (78%) Customer accounts have 'Medium and High' activity associated with them

![Chart showing developer activity intensity across CRM lifecycle stages](/blog/developer-activity-purchase-intent/activity-intensity.png)

Looking exclusively at 'High' Activity accounts made this even clearer: 70% of accounts with developer activity at the bottom of funnel stages were 'High' activity accounts. This aligns perfectly with the hypothesis that advanced engagement with a dev tool typically converts into paying customers.

![Chart showing high activity accounts at bottom of funnel](/blog/developer-activity-purchase-intent/high-activity-accounts.png)

## The hidden funnel problem

All of this points to one thing: Developer Activity correlates with sales opportunity, and these signals capture purchase intent in a significant way.

But here's the kicker. All my analysis was on accounts already in the CRM. Once I established this correlation, I realized accounts *not* in the CRM but with high or medium developer activity also have significant sales potential.

When I looked at this data, I found that over **70% of accounts** with any developer activity around the analyzed products weren't in the CRM at all. This makes sense when you think about it—developers are mostly active outside of signups. They're on your open source projects, documentation, support communities, and other assets. They often don't sign up or leave identifying information.

The numbers reveal a massive problem: roughly 5x the accounts with developer activity and correlated sales opportunities are completely invisible to most companies.

![Chart showing percentage of accounts with developer activity not in CRM](/blog/developer-activity-purchase-intent/hidden-funnel.png)


## What this means for developer GTM leaders

This data reinforces the core thesis of developer marketing and bottom-up developer motion: developers strongly champion and influence purchase decisions within their organizations.

Here's what I think GTM leaders at developer-focused companies should take away:

### Make developer activity your first qualifier

Every mature GTM motion starts with qualified accounts. Today, developer-focused companies use multiple approaches—cold outreach on ICP segments, website visit signals, product signups.

Based on this data, accounts with active developers around your product or community should be your first qualifier. Overlap this data with your ICP criteria to build target account lists. Then, based on developer activity maturity, define your GTM strategy. If you see one or two developers just starting to explore, lean into nurturing and education. If the account is ripe with multiple active developers, it's ready for outreach.

### Use developer activity to prioritize mid-funnel accounts

Since developer activity positively correlates with sales probability, it's a powerful signal for sales executives to prioritize their pipeline. Sales teams always have long lists of accounts to close, and deciding which to focus on is a constant challenge.

Traditional intent tools track email opens and proposal views—great for business buyers, but developers are active on completely different assets: docs, CLI commands, product trials. Giving sales executives visibility into developer activity trends helps them prioritize and tailor their pitch.

### Build tooling for developer data mining

While all this might sound logical, analyzing developer activity is genuinely hard. Most developer activities are anonymous. Developers sign up with burner emails, use their GitHub or StackOverflow identities, or evaluate your docs without signing up at all. Much of the developer experience (DX) stack is specifically designed to let developers evaluate without commitment.

You need tooling to understand and triangulate developer intent which I mentioned above and double check false positive enrichments with AI. The stack requirements are real, but the payoff is visibility into that hidden 70% of your potential pipeline.

![Diagram showing the tooling stack required for developer data mining](/blog/developer-activity-purchase-intent/tooling-stack.png)

## Emerging playbooks for converting developer activity

The data shows developer activity correlates with sales opportunity. But it's equally important to understand that analyzing developer motion gives you both accounts and individual developer leads. Meaningless outreach to either won't help. Unlike other marketing motions, qualification is especially critical in developer-focused GTM.

Here are some emerging trends I'm seeing work:

### Think accounts, not leads

Champions in developer-led GTM are using account-based strategies. Instead of looking at opportunity from individual developer activities, they're building complete account pictures and prioritizing based on activity trends. When you shift from developer-level to account-level analysis, you see broader opportunities and get better signals.

### Find the right time to engage

Not all developer activity means sales opportunity—but sales opportunity matures with developer activity. The developer activity lifecycle in a product purchase typically moves through four stages:

1. **Pioneering:** A champion developer discovers your product and starts exploring
2. **Surge:** More developers join the evaluation. Activity spikes as teams tinker and explore
3. **Evaluation:** The buyer in the organization becomes aware. Users go deeper, building POCs. Activity intensifies as multiple developers or teams engage
4. **Decisioning:** The buyer builds a business case. Developer teams qualify solutions and make recommendations

![Diagram showing the four stages of developer activity lifecycle](/blog/developer-activity-purchase-intent/activity-lifecycle.png)

Timing matters enormously. Rush in too early and the buyer isn't involved yet. Wait too long and they've moved to a competitor or adopted an open source alternative.

The right time to reach out is typically when stage 2 is maturing—usually when 2+ developers get active around the same time and you see activity surges.

### Build winning DevX to win the GTM game

For an evaluation to mature, it has to pass through early discovery and pioneering stages. These developers are solving their organization's tech problems before any business case exists for GTM teams. The best engagement strategy here is building the right developer experience to help them discover and learn your product as quickly and easily as possible.

The best developer GTM teams lead through education and developer relations. They ensure developers get the best experience understanding and tinkering with the product.

### Separate your user and buyer databases

Developer-led GTM is a hybrid motion with two distinct personas. Buyers and Users (developers) have completely different needs and motivations around your product. The same messaging won't work for both—yet most marketers don't differentiate between them. Developers get sales messaging while buyers get technical nurtures.

Champion GTM leaders clearly distinguish between buyers and users, designing different messaging strategies aligned with each persona's motivations and incentives.

---

The bottom line? Developer activity is a goldmine of intent signals that most companies are ignoring. The correlation to sales opportunity is clear. The question is whether you're set up to capture and act on it.
