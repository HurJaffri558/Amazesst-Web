"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const results = [
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        brand: "Health & Wellness Brand",
        growth: "450% YoY Growth",
        sub: "Scaled from $20k to $110k Monthly Revenue",
    },
    {
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop",
        brand: "Kitchen Essentials",
        growth: "Top 3 Category Seller",
        sub: "Dominated the 'Chef Knife' niche in 6 months",
    },
    {
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop",
        brand: "Tech Accessories",
        growth: "$2M Exit Valuation",
        sub: "Strategic brand building for maximum valuation",
    },
];

export const Results = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 px-6 bg-zinc-950/50" id="brand-scaling">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">The Scaling Framework</h2>
                        <p className="text-gray-400">
                            We focus on the metrics that matter. More than just traffic, we drive sustainable
                            profitability and market share for high-growth Amazon brands.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {results.map((result, index) => {
                        const links = [
                            "/case-studies/annual-recurring-revenue",
                            "/case-studies/monthly-sales-growth",
                            "/case-studies/profitable-sales-in-3-weeks-lower-ad-costs"
                        ];

                        return (
                            <motion.div
                                key={result.brand}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ amount: 0.4 }}
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="group flex flex-col h-full"
                            >
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/5 shadow-2xl bg-white/[0.03] flex items-center justify-center p-4">
                                    <img
                                        src={result.image}
                                        alt={result.brand}
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{result.brand}</h3>
                                <div className="text-primary font-black text-2xl mb-2">{result.growth}</div>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">{result.sub}</p>

                                <Link
                                    href={links[index]}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 hover:border-primary/50 text-white font-bold rounded-xl text-sm transition-all hover:bg-primary/10 group-hover:translate-x-1"
                                >
                                    Explore Blueprint <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div >
        </section >
    );
};
