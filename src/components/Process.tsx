"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description: "We learn your brand, your current results, your goals and exactly what is holding you back from scaling.",
        color: "bg-[#2E5BFF]"
    },
    {
        number: "02",
        title: "Full Account Audit",
        description: "We audit your entire Amazon account, ads, listings, keywords, competitors and conversion rate. We find every leak.",
        color: "bg-[#2E5BFF]/70"
    },
    {
        number: "03",
        title: "Custom Growth Plan",
        description: "We build a custom roadmap to scale your revenue and protect your margins based on what we found in the audit.",
        color: "bg-[#C6FF3D]"
    },
    {
        number: "04",
        title: "Full Execution",
        description: "We implement everything, PPC rebuild, listing optimization, ranking domination, retention system, daily.",
        color: "bg-cyan-500"
    },
    {
        number: "05",
        title: "Scale and Report",
        description: "Weekly KPI reports every Monday. Monthly strategy reviews. Continuous optimization focused on profit, not just revenue.",
        color: "bg-primary"
    },
];

export const Process = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <section className="py-24 bg-transparent" id="process" />;

    return (
        <section className="py-24 px-6 relative overflow-hidden tex-dots bg-[#0E0F14]" id="process">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                            How It Works
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.4 }}
                        className="text-4xl md:text-5xl font-black mb-6 tracking-tighter"
                    >
                        From First Call to Full Scale,<br /><span className="text-secondary italic">Here Is Exactly What Happens</span>
                    </motion.h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Simple. Transparent. Proven. No surprises.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary to-primary hidden md:block" />

                    <div className="space-y-16">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ amount: 0.4 }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className={`text-6xl font-black mb-4 ${i % 2 === 0 ? 'md:text-right w-full' : ''} text-white/5`}>
                                        {step.number}
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)", borderColor: "rgba(59, 130, 246, 0.3)" }}
                                        className={`p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer relative z-20 ${i % 2 === 0 ? 'md:text-right' : ''}`}
                                    >
                                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                                    </motion.div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        className={`w-14 h-14 rounded-full ${step.color} shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center font-bold text-white border-4 border-black group cursor-pointer`}
                                    >
                                        {step.number}
                                    </motion.div>
                                </div>

                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    className="mt-16 flex justify-center"
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
