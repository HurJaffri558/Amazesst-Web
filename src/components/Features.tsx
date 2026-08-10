"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, BarChart3, Eye, Clock, Trophy, Heart } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Amazon Only",
        description: "We exclusively serve Amazon sellers. No social media, no Google ads, no distractions. 100% focus on what actually works on Amazon.",
        icon: <Target className="w-8 h-8 text-[#2E5BFF]" />,
    },
    {
        title: "Profit First",
        description: "We never just scale revenue. We scale your profit margins with it. Revenue is vanity. Profit is sanity. Every decision we make protects your margins.",
        icon: <BarChart3 className="w-8 h-8 text-[#2E5BFF]" />,
    },
    {
        title: "Full Transparency",
        description: "Weekly reports with every KPI, ACOS, ROAS, CPC, CVR and every single action we took that week. No hiding behind vanity numbers, ever.",
        icon: <Eye className="w-8 h-8 text-[#C6FF3D]" />,
    },
    {
        title: "Daily Management",
        description: "We monitor your account every single day. Bids adjusted daily. Rankings defended daily. Never set and forget like most agencies.",
        icon: <Clock className="w-8 h-8 text-cyan-500" />,
    },
    {
        title: "Proven System",
        description: "We use the same repeatable system for every client. Fix the foundation first, then scale. Not guesswork. A proven process with real results.",
        icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    },
    {
        title: "We Only Win When You Win",
        description: "We treat your brand like our own. Your growth is our reputation. We are not happy until you are scaling and your profits are growing.",
        icon: <Heart className="w-8 h-8 text-red-500" />,
    },
];

export const Features = () => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="why-us">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                            Why Amazesst
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Why We Are Different From Every<br />Other Amazon Agency
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We are not a generalist agency. We exist for one reason, to scale CPG and supplement brands on Amazon without killing their profit margins.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.5 }}
                            whileHover={{ y: -15, scale: 1.05, borderColor: "rgba(59, 130, 246, 0.4)" }}
                            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group cursor-pointer"
                        >
                            <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-125 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
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
                        Get Free Audit
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
