"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const caseStudies = [
    {
        brand: "Private Label, Home and Kitchen",
        before: "$62,000 per month with ACOS at 42%",
        after: "$510,000 per month with ACOS at 19%",
        result: "8X Revenue Growth in 8 Months",
        color: "from-[#2E5BFF]/20 to-transparent",
        highlight: "blue",
    },
    {
        brand: "Private Label, Sports and Outdoors",
        before: "$74,000 per month with profits declining",
        after: "$530,000 per month with profits up 41%",
        result: "7.1X Revenue Growth in 7 Months",
        color: "from-[#2E5BFF]/20 to-transparent",
        highlight: "purple",
        popular: true,
    },
    {
        brand: "Private Label, Beauty and Personal Care",
        before: "$88,000 per month, stuck for 10 months",
        after: "$490,000 per month with organic sales up 65%",
        result: "5.6X Revenue Growth in 9 Months",
        color: "from-[#C6FF3D]/20 to-transparent",
        highlight: "pink",
    },
];

export const CaseStudySection = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 px-6 relative" id="case-studies">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                            Real Results
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.4 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter"
                    >
                        Real Amazon Sellers. Real Numbers. <br />
                        <span className="text-secondary-brand">Real Growth.</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        These sellers were stuck and leaking profit, just like you. Here is what happened after working with Amazesst.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.brand}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className={`relative rounded-[2.5rem] border border-white/10 overflow-hidden group bg-white/[0.03] flex flex-col hover:border-primary/30 transition-all cursor-pointer`}
                        >
                            {study.popular && (
                                <div className="absolute top-6 right-6 z-20 bg-secondary-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8 pb-6">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400 mb-4`}>
                                    <TrendingUp size={12} />
                                    {study.brand}
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                                        <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Before</p>
                                        <p className="text-sm text-gray-300">{study.before}</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-green-500/5 border border-green-500/10">
                                        <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">After</p>
                                        <p className="text-sm text-gray-300">{study.after}</p>
                                    </div>
                                </div>

                                <div className={`p-4 rounded-2xl bg-primary/10 border border-primary/20`}>
                                    <p className="text-lg font-black text-white">{study.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    className="mt-12 flex justify-center"
                >
                    <Link
                        href="#booking"
                        className="group px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform"
                    >
                        Get Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
