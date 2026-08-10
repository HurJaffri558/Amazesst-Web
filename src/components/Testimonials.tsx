"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
    {
        name: "Amazon Seller, Home and Kitchen",
        content: "Before Amazesst we were spending more every month and making less. Within 8 months they fixed our PPC, rebuilt our listings and scaled us from $62K to over $510K per month. ACOS dropped from 42% to 19% and profit is finally growing the way it should.",
    },
    {
        name: "Amazon Seller, Sports and Outdoors",
        content: "What I love most is the weekly report. Every Monday I know exactly what happened, what they did and why. No other agency I worked with was this transparent. We went from $74K to $530K a month. It feels like having an elite in-house team.",
    },
    {
        name: "Amazon Seller, Beauty and Personal Care",
        content: "We were stuck at $88K a month for almost a year. In 9 months with Amazesst we hit $490K. They did not just run our ads, they fixed everything. Listings, images, bundles, retention. The whole operation is completely different now.",
    },
];

export const Testimonials = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <section className="py-24 bg-transparent" id="testimonials" />;

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                            Client Results
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                        className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
                    >
                        What Our Clients Are <span className="text-primary italic">Saying</span>
                    </motion.h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Do not just take our word for it. Here is what Amazon sellers say about working with Amazesst.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.3 }}
                            whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                            className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all relative group cursor-pointer"
                        >
                            <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/30 transition-colors" size={40} />

                            <div className="flex mb-4">
                                {[1,2,3,4,5].map(s => (
                                    <Star key={s} size={14} className="fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                                &quot;{t.content}&quot;
                            </p>

                            <div>
                                <h4 className="font-bold text-white text-sm">{t.name}</h4>
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
                        Get Free Audit
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
