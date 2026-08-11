import React from "react";
import { CaseStudyClient } from "@/components/CaseStudyClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [
        { slug: "new-product-launch-profitable-first-quarter" },
        { slug: "account-turnaround-150-acos-to-17-percent" },
        { slug: "profitable-scaling-more-spend-lower-acos" },
        { slug: "enfantevita-kids-multivitamin-launch-scale" },
        { slug: "vitalsupp-electrolyte-profitable-growth" },
        { slug: "longevity-couture-hydrogen-premium-scale" },
    ];
}

const caseStudyData = {
    "new-product-launch-profitable-first-quarter": {
        title: "NEW PRODUCT LAUNCH",
        subtitle: "$0 to $139,912 in the first 90 days, profitable from the first quarter, after a first launch that never got off the ground.",
        image: "/images/Result2.png",
        productImage: "/images/rebel-product.jpg",
        introduction: "A US energy and nootropics brand in the caffeine pouch category. Their first Amazon launch had failed, not because Amazon didn't want the product, but because nothing was ready when the traffic arrived. We rebuilt the second launch from zero, and it was profitable from day one.",
        challenges: [
            "Listings that couldn't be found: copy written for humans, not structured for Amazon's index. Organic visibility never built.",
            "Creative that didn't convert: in a category decided on the image stack, the images weren't selling. Clicks arrived and left.",
            "Unvalidated targeting: campaigns built on assumed search terms, tested on the client's budget.",
            "No launch sequencing: assets built after stock landed, so the early velocity window was spent preparing."
        ],
        strategies: [
            "Sequencing as the strategy: everything finished and staged before inventory reached the fulfilment centre.",
            "Listing and SEO built from scratch, indexation first and persuasion second.",
            "Keyword research locked before a single dollar of spend, so targeting reflected real demand."
        ],
        execution: [
            "Rebuilt the full image stack and A+ content in-house to carry dosage, pouch count and flavour before the copy.",
            "Built and staged the entire PPC campaign architecture in advance of launch day.",
            "Launched on arrival: stock hit FBA and the launch went live the same day, with zero lag."
        ],
        results: [
            "$139,912 in ordered product sales across 5,883 units in the first 90 days.",
            "Compounded to $698,697 across 28,314 units through the following period.",
            "Refund rate held at just 1.3% (376 of 28,098 units), profitable from the first quarter forward."
        ],
        keyTakeaways: [
            "The launch date is an execution milestone, not a starting line.",
            "In image-led categories, creative carries the objection before price becomes the comparison.",
            "A properly sequenced launch removes the unprofitable ramp period entirely."
        ],
        additionalDetails: [
            "Full image stack and A+ produced in-house, built to sell before a shopper reads a line of copy.",
            "Average order value rose from $24.19 at launch to $25.82 as flavours were added.",
            "Independent third-party P&L confirmed net profit positive across the full window.",
            "Four flavours shown as one line, so the range reads as a choice, not a gamble."
        ],
        stats: "$698K",
        quote: "The brand that couldn't make a sale on Amazon now runs a $698K product line, profitable from its first quarter."
    },
    "account-turnaround-150-acos-to-17-percent": {
        title: "ACCOUNT TURNAROUND",
        subtitle: "Inherited from three agencies at 150%+ ACOS. Rebuilt to 17.78% ACOS on $1.57M in a single month.",
        image: "/images/germany-ap.jpeg",
        productImage: "/images/sightcare-product.jpg",
        introduction: "SightCare, a clinically formulated eye-health and vision support supplement, in one of Amazon's most scrutinised health categories. Volume was already flowing, but the machine underneath it had been built wrong, three times over. The account didn't need more spend or more campaigns. It needed the unprofitable ones switched off, and a structure that could tell the difference.",
        challenges: [
            "~600 campaigns with no hierarchy: years of sediment from three agencies, bidding against each other for the same keywords.",
            "ACOS above 150%: every advertised sale cost more than it earned, at scale, every day.",
            "No review acquisition: no social proof being generated, in a category where shoppers research heavily.",
            "No repeat purchase engine: a daily-use supplement with no reorder motion, so LTV never justified the acquisition cost."
        ],
        strategies: [
            "Full account audit: listing, PPC and Search Query Performance analysed before a single bid changed.",
            "Stop the bleed: switched off every campaign, keyword and placement spending without returning profit.",
            "Scale on profit: spend only rose once TACoS sat below the margin line."
        ],
        execution: [
            "Conversion rebuild: copy, creative and SEO rebuilt together, so every point of CR lowered ACOS across all 600 campaigns.",
            "PPC funnel rebuilt by intent, top, middle and bottom of funnel, with nothing competing.",
            "Image stack rebuilt to do the educational work a multi-nutrient eye formula demands, so shoppers understand before they reach the reviews."
        ],
        results: [
            "ACOS rebuilt from 150%+ down to 17.78%.",
            "$1.57M in sales in a single month, up 38.57% year on year.",
            "$29,642 in spend returned $166,743 in ad-attributed sales, a 5.6x return at a $0.33 cost per click."
        ],
        keyTakeaways: [
            "The account didn't need more spend. It needed the unprofitable spend switched off first.",
            "Order matters more than effort. The difference wasn't skill, it was sequence.",
            "One conversion-rate gain applies across every campaign in the account at once."
        ],
        additionalDetails: [
            "Success condition: move LTV:CAC from negative to positive, then scale.",
            "Clinical positioning stated up front, before price becomes the comparison.",
            "Ingredient and eye-health education carried in the gallery, not buried in bullet copy.",
            "Cost per click held at $0.33 while advertising turned back into a growth engine."
        ],
        stats: "$1.57M",
        quote: "An account three agencies left bleeding now runs at 17.78% ACOS on $1.57M a month, with the unit economics finally pointing the right way."
    },
    "profitable-scaling-more-spend-lower-acos": {
        title: "PROFITABLE SCALING",
        subtitle: "Ad spend up 126%, ad sales up 161%, and ACOS still fell from 23.2% to 20.1%.",
        image: "/images/Result3.png",
        productImage: "/images/shilajit-product.png",
        introduction: "A single-SKU pure Himalayan shilajit resin in one of the fastest-growing and least regulated corners of the Amazon supplement market. Clicks are cheap to buy in a high-demand category. Converting them profitably against ten near-identical jars is the hard part, which makes efficiency, not volume, the binding constraint. Most accounts buy growth by giving up efficiency. We did the opposite.",
        challenges: [
            "Sceptical category: dozens of identical listings with purity claims a shopper cannot verify.",
            "Efficiency ceiling: adding budget to the existing structure buys progressively worse traffic.",
            "Margin sensitivity: on a single-SKU resin, a few points of ACOS decides whether the scale-up pays.",
            "Growth without dilution: volume bought through discounting damages the economics it appears to improve."
        ],
        strategies: [
            "Efficiency first, volume second: do the conversion work before spending a bigger budget.",
            "Baseline: measured what each campaign returned, and which were being subsidised.",
            "Segment: high-intent, category and discovery traffic split into distinct campaigns."
        ],
        execution: [
            "Convert: listing rebuilt to answer sourcing and authenticity before price, with the ISO lab certificate of analysis shown in the gallery.",
            "Scale: spend raised from $16,104 to $36,382 in verified increments.",
            "Hold the line: treated the ACOS ceiling as a hard constraint. It fell to 20.1% while the budget doubled."
        ],
        results: [
            "Ad-attributed sales up 161% ($69,426 to $181,002), while spend rose 126%.",
            "ACOS fell from 23.2% to 20.1% while scaling.",
            "ROAS improved to 4.97x, up from 4.31x, inside a $3.36M trailing-twelve-month catalogue."
        ],
        keyTakeaways: [
            "The brief wasn't grow sales. It was grow sales without paying for growth in margin.",
            "Doing the conversion work first is slower for a month, and compounds every month after.",
            "Everything in the box laid out visually, so the price reads as value, not markup."
        ],
        additionalDetails: [
            "Success condition: spend goes up, cost of sale goes down. Every month.",
            "Clicks more than doubled to 44,022 without the drop in traffic quality that normally accompanies a scale-up of this size.",
            "ISO lab certificate of analysis shown in the gallery, not claimed in copy.",
            "$3.365M trailing twelve months, with account health holding steady throughout."
        ],
        stats: "$3.36M",
        quote: "More than double the ad spend, 161% more ad sales, and a lower cost of sale than before we started."
    },
    "enfantevita-kids-multivitamin-launch-scale": {
        title: "LAUNCH & SCALE",
        subtitle: "A children's vegan multivitamin taken from a near-zero March start to $1.823M in trailing sales, scaled month over month without losing control of ACOS.",
        image: "/images/enfantevita-dashboard.jpg",
        productImage: "/images/enfantevita-product.jpg",
        introduction: "EnfanteVita is a children's vegan multivitamin with probiotics, positioned for parents who screen ingredient labels closely. The product was strong, but the account wasn't moving. Spend was going out faster than sales came back, ACOS sat well above margin, and there was no reorder motion to make the acquisition cost pay for itself. We put the account through our five-step process, Call, Audit, Custom Plan, Full Execution, and Scale & Reporting, and rebuilt the growth curve from the ground up.",
        challenges: [
            "Sales stalled early: a quality product that wasn't converting the traffic it was already paying for.",
            "ACOS above margin: advertising was buying volume at a loss, so scaling only deepened the hole.",
            "Weak CAC-to-LTV: a daily-use kids supplement with no subscribe & save or reorder motion, so each customer was bought once and never returned.",
            "Trust gap in a scrutinised category: parents needed the 'no gelatin, no added sugar, no artificial sweeteners' story told before price, and the listing wasn't telling it."
        ],
        strategies: [
            "Discovery Call: mapped the real goal, profitable scale, not vanity revenue, and agreed the margin line spend had to stay under.",
            "Full Audit: listing, PPC, Search Query Performance and unit economics reviewed together before a single bid changed.",
            "Custom Plan: a sequenced plan to fix conversion first, then open spend, with a defined TACoS ceiling and a reorder engine to lift LTV."
        ],
        execution: [
            "Call: aligned on targets, margin thresholds and the definition of a profitable customer before any spend moved.",
            "Audit: found the leaks, unconverting keywords, an image stack that buried the label story, and zero reorder motion dragging LTV down.",
            "Custom Plan: rebuilt the listing and gallery to lead with the clean-label proof, restructured PPC by intent, and switched Subscribe & Save on.",
            "Full Execution: shipped the rebuilt creative, SEO and campaign architecture, then cut the spend that wasn't returning profit.",
            "Scale & Reporting: opened budget only as ACOS held under the margin line, reporting the numbers back weekly."
        ],
        results: [
            "Scaled from a near-zero March baseline to $1.823M in trailing twelve-month product sales.",
            "Month-over-month growth held its shape, roughly $100K a month rising past $300K a month by the following winter.",
            "523 open orders in motion at review, with $2,051 in sales and 53 units on the day captured, and buyer messages at zero to respond to."
        ],
        keyTakeaways: [
            "Conversion first: fixing the listing lowered ACOS across every campaign at once.",
            "A reorder engine turns a one-time buy into lifetime value, which is what makes paid acquisition pay.",
            "In a clean-label category, the objection is trust, so the gallery has to answer it before the price does."
        ],
        additionalDetails: [
            "Success condition: spend rises, cost of sale stays under margin, every month.",
            "Clean-label proof, no gelatin, no added sugar, no artificial sweeteners, moved into the image stack, not buried in bullets.",
            "Subscribe & Save positioned as the default to build the reorder motion the LTV depended on.",
            "18,012 ad impressions and $403.91 in ad sales captured on the review day as the flywheel compounded."
        ],
        stats: "$1.82M",
        quote: "A stalled kids-vitamin launch turned into a $1.82M trailing line, scaled month over month with ACOS held under the margin line the whole way."
    },
    "vitalsupp-electrolyte-profitable-growth": {
        title: "PROFITABLE GROWTH",
        subtitle: "An electrolyte brand scaled to $1.097M in a single month, up 5% month-on-month and 9% year-on-year, with cost of sale held under control.",
        image: "/images/vitalsupp-dashboard.jpg",
        productImage: "/images/vitalsupp-product.png",
        introduction: "VitalSupp is a hydration and electrolyte powder built on Baja Gold mineral sea salt, competing in one of Amazon's most crowded and discount-driven categories. Demand wasn't the problem, discipline was. Spend was climbing faster than sales, ACOS and TACoS were drifting above the margin line, and CAC kept rising as the brand chased volume. We ran the account through our five-step process and rebuilt it into steady, profitable growth instead of expensive growth.",
        challenges: [
            "Crowded, discount-led category: near-identical electrolyte tubs where the easy move is to buy volume with price.",
            "Rising CAC: every extra dollar of budget on the old structure bought progressively worse traffic.",
            "TACoS drifting over margin: total ad cost of sale creeping past the point where scale still paid.",
            "No efficiency baseline: campaigns running with no clear read on which were subsidised and which returned."
        ],
        strategies: [
            "Discovery Call: set the real objective, grow sales without buying that growth in margin, and locked the ceiling numbers.",
            "Full Audit: measured what each campaign, keyword and placement actually returned before touching spend.",
            "Custom Plan: fix conversion, segment traffic by intent, then scale only on the campaigns proven to pay."
        ],
        execution: [
            "Call: agreed the margin line and the TACoS ceiling the account had to stay under while growing.",
            "Audit: separated the profitable spend from the subsidised spend and found the CAC leaks.",
            "Custom Plan: rebuilt the listing to sell the Baja Gold mineral story before price, and split traffic into high-intent, category and discovery campaigns.",
            "Full Execution: switched off the placements bleeding margin, then rebuilt creative and SEO to lift conversion across the account.",
            "Scale & Reporting: raised budget only on proven campaigns, holding ACOS steady, with the numbers reported back each cycle."
        ],
        results: [
            "$1.097M in product sales in a single month, up 5% month-on-month and 9% year-on-year.",
            "Daily revenue held a steady $40K to $50K band across the month rather than spiking and crashing on discounts.",
            "$7,125 in sales across 323 units captured on the day, with growth coming from efficiency, not deeper discounting."
        ],
        keyTakeaways: [
            "In a discount-led category, the win is refusing to buy growth with margin.",
            "Segmenting traffic by intent stops discovery spend from being charged at high-intent prices.",
            "Steady daily revenue beats discount-driven spikes for both cash flow and account health."
        ],
        additionalDetails: [
            "Success condition: spend goes up, cost of sale stays flat or falls, month over month.",
            "The Baja Gold mineral sea salt differentiator moved up front, so the tub reads as premium, not another commodity electrolyte.",
            "Placements re-scoped by intent so discovery traffic stopped being paid for at bottom-of-funnel rates.",
            "Year-on-year growth of 9% delivered while holding the margin line, not by discounting into it."
        ],
        stats: "$1.097M",
        quote: "A commodity electrolyte brand growing 5% month-on-month and 9% year-on-year, with the growth coming from efficiency instead of discounts."
    },
    "longevity-couture-hydrogen-premium-scale": {
        title: "PREMIUM SCALE",
        subtitle: "A premium hydrogen-water device scaled to $24.91M in trailing sales, up 32% period-on-period, at a controlled cost of acquisition.",
        image: "/images/longevity-dashboard.jpg",
        productImage: "/images/longevity-product.jpg",
        introduction: "Longevity Couture's UltraHy is a high-concentration molecular hydrogen water bottle, a premium, high-consideration device rather than a low-cost consumable. The higher the price, the harder the objection, and the account was spending heavily to overcome it without a structure that could tell profitable spend from wasted spend. We applied our five-step process to protect margin at scale and turn a high-AOV catalogue into disciplined, compounding growth.",
        challenges: [
            "High-consideration purchase: a premium device where shoppers research heavily and need proof before they convert.",
            "Expensive acquisition: heavy spend to move a high-ticket product, with CAC that punished any inefficiency.",
            "Margin at scale: on a large catalogue, a few points of ACOS or TACoS decides whether the whole scale-up pays.",
            "Proof gap: the science and certification story had to be carried in the creative, not claimed in a line of copy."
        ],
        strategies: [
            "Discovery Call: defined profitable scale on a high-AOV device and set the CAC and TACoS ceilings up front.",
            "Full Audit: reviewed the catalogue, PPC structure and unit economics to find where premium spend was leaking.",
            "Custom Plan: lead the listing with proof and certification, then scale spend only where it returned above the margin line."
        ],
        execution: [
            "Call: agreed targets, margin thresholds and what a profitable customer looks like on a premium device.",
            "Audit: identified the campaigns and placements carrying the acquisition cost without returning it.",
            "Custom Plan: rebuilt the gallery and A+ around the hydrogen-science proof and third-party certification, and restructured PPC by intent.",
            "Full Execution: deployed the rebuilt creative and campaign architecture, cutting the spend that wasn't paying.",
            "Scale & Reporting: opened budget in verified increments as efficiency held, reporting revenue, ACOS and deal performance each cycle."
        ],
        results: [
            "Scaled to $24.91M in trailing twelve-month product sales, up 32% period-on-period.",
            "Roughly $2M a month in revenue held steady across the year rather than spiking and fading.",
            "$35,729 in sales, 225,514 ad impressions and $9,016 in ad sales captured on the review day, with $232,108 in deal sales and $18,926 in coupon sales working alongside paid."
        ],
        keyTakeaways: [
            "On a premium device, proof does the selling, so certification and science belong in the creative.",
            "At scale, a few points of ACOS is the difference between a profitable catalogue and a break-even one.",
            "Coupons and deals are levers to schedule against margin, not discounts to lean on."
        ],
        additionalDetails: [
            "Success condition: high-ticket volume scales while CAC and TACoS stay under the agreed ceilings.",
            "Third-party hydrogen-water certification and the published science moved into the gallery as conversion proof.",
            "$232,108 in deal sales and $18,926 in coupon sales sequenced deliberately around the margin line.",
            "32% period-on-period growth delivered on a $24.91M base while account health held steady throughout."
        ],
        stats: "$24.91M",
        quote: "A premium hydrogen-water device scaled to $24.91M in trailing sales, up 32% period-on-period, with acquisition cost held under control the whole way."
    }
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = caseStudyData[slug as keyof typeof caseStudyData];

    if (!data) {
        notFound();
    }

    return <CaseStudyClient data={data} />;
}
