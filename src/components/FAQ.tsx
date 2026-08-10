"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Who is this for exactly?",
        answer: "CPG and supplement brand owners who are stuck and want to scale profitably. You should have at least one active SKU and be ready to invest in a proven system."
    },
    {
        question: "How long until I see results?",
        answer: "Most clients see measurable improvements in ACOS and conversion rate within the first 30 days. Significant revenue growth typically happens between months 2 and 4 as the full strategy kicks in."
    },
    {
        question: "Do I need to increase my ad spend?",
        answer: "Not necessarily. We first fix what is broken, your listings, conversion rate and campaign structure. Many clients see better results with the same or even less budget once the strategy is correct."
    },
    {
        question: "How do you report and communicate?",
        answer: "You receive a full KPI report every week covering all metrics, ACOS, ROAS, CPC, CVR, organic vs paid and a complete activity log of everything we did that week."
    },
    {
        question: "What makes Amazesst different from other agencies?",
        answer: "Most agencies just increase your ad spend and call it growth. We fix the root cause first, listings, conversion rate, strategy, then scale. We protect your margins while growing your revenue. That is the difference."
    },
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => { setMounted(true); }, []);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!mounted) return null;

    return (
        <section className="py-24 px-6 relative" id="faq">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">FAQ</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
                    >
                        Got Questions? <span className="text-primary italic">We Have Answers.</span>
                    </motion.h2>
                    <p className="text-gray-500">
                        Everything you need to know about scaling your Amazon brand with us.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ delay: i * 0.05, type: "spring", bounce: 0.3 }}
                            className={`rounded-3xl border ${activeIndex === i ? 'border-primary bg-primary/5' : 'border-white/5 bg-white/[0.02]'} transition-all overflow-hidden`}
                        >
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="w-full p-8 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg font-bold ${activeIndex === i ? 'text-white' : 'text-gray-300'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full border ${activeIndex === i ? 'border-primary bg-primary text-white' : 'border-white/10 text-gray-500'} flex items-center justify-center transition-all shrink-0 ml-4`}>
                                    {activeIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
