import React from "react";
import { CaseStudyClient } from "@/components/CaseStudyClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [
        { slug: "new-product-launch-profitable-first-quarter" },
        { slug: "account-turnaround-150-acos-to-17-percent" },
        { slug: "profitable-scaling-more-spend-lower-acos" },
    ];
}

const caseStudyData = {
    "new-product-launch-profitable-first-quarter": {
        title: "NEW PRODUCT LAUNCH",
        subtitle: "$0 to $139,912 in the first 90 days, profitable from the first quarter, after a first launch that never got off the ground.",
        image: "/images/Result2.png",
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
        introduction: "A clinically tested herbal blood sugar support supplement, a ten-herb formula in one of Amazon's most scrutinised health categories. Volume was already flowing, but the machine underneath it had been built wrong, three times over. The account didn't need more spend or more campaigns. It needed the unprofitable ones switched off, and a structure that could tell the difference.",
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
            "Image stack rebuilt to do the educational work a multi-botanical formula demands, so shoppers understand before they reach the reviews."
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
            "Ingredient education carried in the gallery, not buried in bullet copy.",
            "Cost per click held at $0.33 while advertising turned back into a growth engine."
        ],
        stats: "$1.57M",
        quote: "An account three agencies left bleeding now runs at 17.78% ACOS on $1.57M a month, with the unit economics finally pointing the right way."
    },
    "profitable-scaling-more-spend-lower-acos": {
        title: "PROFITABLE SCALING",
        subtitle: "Ad spend up 126%, ad sales up 161%, and ACOS still fell from 23.2% to 20.1%.",
        image: "/images/Result3.png",
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
