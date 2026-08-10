"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const problems = [
    // "Struggling with high ACOS and low ROAS?",
    // "Getting lost in the sea of competition?",
    // "Falling behind on inventory management?",
    // "Listings don't attract or convert buyers?",
    "Cookie-cutter tactics that don’t scale.",
    "Same strategy applied to every client.",
    "Quick fixes with no long-term vision.",
    "Work stops once the invoice is paid.",
    "Unclear strategy and inconsistent results.",
];

const solutions = [
    // "Proprietary PPC algorithms that cut waste.",
    // "Category-dominating brand positioning.",
    // "Data-driven supply chain forecasting.",
    // "Vibrant, high-converting creative assets.",
    "Proven strategies backed by real e-commerce wins.",
    "Client-first approach with personalized execution.",
    "Scalable systems built for long-term growth.",
    "Trust-based partnerships, not transactions.",
    "Data-driven growth with constant optimization.",
];

export const ProblemSolution = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <section className="py-24 bg-transparent" id="why-us" />;

    return (
        <section className="py-24 px-6 relative bg-gradient-to-b from-black to-zinc-950" id="why-us">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
                    >
                        Running an Amazon Brand is <span className="text-accent">Tough.</span> <br />
                        <span className="text-primary italic">We Make it Effortless.</span>
                    </motion.h2>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Problems */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:bg-white/[0.04] transition-all"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <XCircle size={120} className="text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-500 rounded-full" />
                            {/* The Struggle */}
                            Regular Agencies
                        </h3>
                        <ul className="space-y-6">
                            {problems.map((p, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                                    <XCircle className="text-red-500/50 mt-1 shrink-0" size={20} />
                                    <span className="text-lg">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Side: Solutions */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="p-10 rounded-[3rem] bg-primary/5 border border-primary/20 relative overflow-hidden group hover:bg-primary/[0.08] transition-all"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <CheckCircle size={120} className="text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                            {/* The Solution */}
                            Amazesst Solutions
                        </h3>
                        <ul className="space-y-6">
                            {solutions.map((s, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-300 group-hover:text-white transition-colors">
                                    <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                                    <span className="text-lg font-medium">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    className="mt-16 flex justify-center"
                >
                    <button className="group px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                        Switch to the Effortless Way <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
