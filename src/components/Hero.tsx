"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <section className="relative min-h-screen pt-24 pb-12 px-6 bg-black" />
    );

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 glow-bg-lime tex-grain">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#2E5BFF]/25 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#C6FF3D]/10 rounded-full blur-[140px]" />
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"
                    style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8"
                >
                    <div className="flex -space-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                        ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                        Number 1 Amazon Growth Agency 2026
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-[1.1]"
                >
                    We Scale CPG & Supplement Brands<br />
                    <span className="text-primary tracking-tighter italic">on Amazon Without Killing<br />Your Profit Margins.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed"
                >
                    You have already tried spending more on ads. It did not work. The problem was never your budget, it was your strategy. We fix what is actually broken and scale you the right way.
                </motion.p>

                {/* Tagline Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex flex-wrap items-center justify-center gap-3 mb-10"
                >
                    {["More Revenue.", "More Margins.", "No Guesswork."].map((pill) => (
                        <span key={pill} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300">
                            {pill}
                        </span>
                    ))}
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Link href="#booking" className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center space-x-2 hover:scale-105 transition-transform overflow-hidden">
                        <span>Get Free Audit</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link href="#process" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors">
                        See How It Works
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
