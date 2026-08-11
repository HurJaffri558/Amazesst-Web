"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Zap, BarChart3, Quote } from "lucide-react";
import Link from "next/link";

interface CaseStudyData {
    title: string;
    subtitle: string;
    image: string;
    productImage?: string;
    introduction: string;
    challenges: string[];
    strategies: string[];
    execution: string[];
    results: string[];
    keyTakeaways: string[];
    additionalDetails: string[];
    stats: string;
    quote: string;
}

export function CaseStudyClient({ data }: { data: CaseStudyData }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    if (!mounted) return <div className="min-h-screen bg-black" />;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <div className="pt-32 pb-24 px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div variants={itemVariants} className="mb-6">
                            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">
                                <ArrowLeft size={16} /> Back to home
                            </Link>
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-primary uppercase"
                        >
                            {data.title}
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {data.subtitle}
                        </motion.p>
                    </div>

                    {/* Product Image */}
                    {data.productImage && (
                        <motion.div
                            variants={itemVariants}
                            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 mb-8 shadow-2xl bg-white flex items-center justify-center p-6 md:p-10"
                        >
                            <img
                                src={data.productImage}
                                alt={`${data.title} product`}
                                className="max-h-[320px] md:max-h-[420px] w-auto h-auto object-contain"
                            />
                        </motion.div>
                    )}

                    {/* Main Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 mb-16 shadow-2xl bg-white/[0.02] flex items-center justify-center p-6 md:p-12 min-h-[300px] md:min-h-[500px]"
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            className="max-w-full h-auto rounded-xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Content Grid */}
                    <div className="space-y-16">
                        {/* Introduction */}
                        <motion.section variants={itemVariants}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Introduction</h2>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {data.introduction}
                            </p>
                        </motion.section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Challenges */}
                            <motion.section variants={itemVariants}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1.5 h-8 bg-red-500 rounded-full" />
                                    <h2 className="text-2xl font-bold uppercase tracking-tight">Challenges</h2>
                                </div>
                                <ul className="space-y-4">
                                    {data.challenges.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400">
                                            <span className="mt-2 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>

                            {/* Strategies */}
                            <motion.section variants={itemVariants}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1.5 h-8 bg-green-500 rounded-full" />
                                    <h2 className="text-2xl font-bold uppercase tracking-tight">Strategies</h2>
                                </div>
                                <ul className="space-y-4">
                                    {data.strategies.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400">
                                            <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        </div>

                        {/* Execution */}
                        <motion.section variants={itemVariants}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1.5 h-8 bg-[#2E5BFF] rounded-full" />
                                <h2 className="text-2xl font-bold uppercase tracking-tight">Execution</h2>
                            </div>
                            <ul className="space-y-4">
                                {data.execution.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-400">
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-300 shrink-0">
                                            {i + 1}
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Results */}
                        <motion.section variants={itemVariants} className="p-8 md:p-12 rounded-[3rem] bg-primary/5 border border-primary/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <TrendingUp size={120}
