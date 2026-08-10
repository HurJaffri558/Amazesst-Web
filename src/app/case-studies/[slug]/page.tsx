import React from "react";
import { CaseStudyClient } from "@/components/CaseStudyClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [
        { slug: "annual-recurring-revenue" },
        { slug: "monthly-sales-growth" },
        { slug: "profitable-sales-in-3-weeks-lower-ad-costs" },
    ];
}

const caseStudyData = {
    "annual-recurring-revenue": {
        title: "ANNUAL RECURRING REVENUE",
        subtitle: "We scaled BlueTex sales dramatically from $30k/month to $143k/month within just 6 months.",
        image: "/images/germany-ap.jpeg",
        introduction: "Happy Protein, a plant-based brand founded by Venus Williams, faced stagnant growth and weak Amazon visibility.",
        challenges: [
            "Slow-moving sales averaging under 20 units/week.",
            "Ad spend wastage with poor ROI.",
            "Listings lacked optimization and emotional appeal.",
            "No clear brand story connecting with buyers."
        ],
        strategies: [
            "Audited all listings and ad performance in detail.",
            "Integrated Venus Williams’ personal brand story into content.",
            "Built PPC campaigns with optimized keywords and strong creatives."
        ],
        execution: [
            "Reworked titles, bullets, and descriptions with keyword strategy.",
            "Restructured PPC campaigns by segmenting ad groups and adjusting bids.",
            "Designed A+ content highlighting authority and trust elements."
        ],
        results: [
            "Revenue jumped by 462% in 6 months.",
            "Conversions improved over 300%.",
            "Monthly sales stabilized at six-figures consistently."
        ],
        keyTakeaways: [
            "Storytelling builds consumer trust quickly.",
            "Listings + PPC optimization drive visibility and conversions.",
            "Even celebrity brands need expert eCommerce execution."
        ],
        additionalDetails: [
            "Rebuilt product titles, bullets, and content from scratch.",
            "Launched ad campaigns focused on visibility + sales.",
            "Optimized PPC with new ad structures and better bids.",
            "Used Venus Williams’ story as credibility leverage."
        ],
        stats: "$1.57M+",
        quote: "A few smart changes turned our Amazon into the biggest growth channel. — Protein Brand"
    },
    "monthly-sales-growth": {
        title: "MONTHLY SALES GROWTH",
        subtitle: "Our Amazon growth framework helped Supplement's Brand cross $100k/month and scale even further.",
        image: "/images/Result2.png",
        introduction: "Supplement's Brand, a specialized health and wellness brand, needed a scalable framework to break through growth plateaus on Amazon.",
        challenges: [
            "Inconsistent month-over-month growth.",
            "High ACoS on primary keywords.",
            "Lack of premium brand presence in A+ content.",
            "Inventory management issues during peak sales periods."
        ],
        strategies: [
            "Implemented the Amazesst Growth Framework for core categories.",
            "Optimized PPC bidding using AI-driven profitability models.",
            "Enhanced Brand Story and A+ premium modules."
        ],
        execution: [
            "Refined keyword targeting based on high-conversion data.",
            "Overhauled visual assets with high-end 3D rendering.",
            "Established a predictive replenishment model."
        ],
        results: [
            "Scaled beyond $100k monthly recurring revenue.",
            "Reduced ACoS by 35% while increasing traffic.",
            "Market leader position in secondary health niches."
        ],
        keyTakeaways: [
            "Predictive modeling is key to inventory health.",
            "Premium visuals significantly impact conversion rates.",
            "Holistic strategy beats isolated ad tweaks."
        ],
        additionalDetails: [
            "Full account management transition in 30 days.",
            "Implemented cross-market expansion strategy.",
            "Bi-weekly performance strategy sessions."
        ],
        stats: "$100k+",
        quote: "Scaling wasn't just about ads, it was about systems. Amazesst gave us the blueprint. — Supplement's Brand Team"
    },
    "profitable-sales-in-3-weeks-lower-ad-costs": {
        title: "PROFITABLE SALES IN 3 WEEKS",
        subtitle: "Wellness Brand Team saw a 21-day turnaround through our optimized PPC framework.",
        image: "/images/Result3.png",
        introduction: "A new testosterone booster brand, had slow approvals and zero online visibility.",
        challenges: [
            "Amazon compliance delays slowed launch.",
            "Listings lacked copywriting and visuals.",
            "No SEO or PPC plan.",
            "No traffic generation strategy in place."
        ],
        strategies: [
            "Prepared compliance checklist for faster approvals.",
            "Created SEO-driven listings from scratch.",
            "Planned ad + content funnel roadmap."
        ],
        execution: [
            "Redesigned listings with keyword-rich copy.",
            "Launched multi-stage campaigns (Sponsored Products, Brands, Video Ads).",
            "Implemented ranking tracker for weekly SEO monitoring."
        ],
        results: [
            "Generated $1M+ revenue in first quarter.",
            "Ranked in top 5 within 60 days of launch.",
            "Achieved strong repeat purchase base."
        ],
        keyTakeaways: [
            "Delayed launches can still succeed with structure.",
            "SEO dominates in competitive niches like supplements.",
            "Amazon rewards consistent effort."
        ],
        additionalDetails: [
            "Resolved compliance bottlenecks.",
            "Wrote all listings and content fresh.",
            "Executed full-funnel PPC strategy.",
            "Tracked keyword ranks weekly and optimized."
        ],
        stats: "$1M+",
        quote: "Amazesst turned a delayed launch into a million-dollar quarter. Incredible speed. — Wellness Team"
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
