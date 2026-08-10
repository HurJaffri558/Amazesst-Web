"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare } from "lucide-react";
import Script from "next/script";
import Link from "next/link";

export const Booking = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="booking">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2E5BFF]/12 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <Calendar size={14} className="text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Free Audit
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
                    >
                        Ready to Scale <span className="text-primary italic">Profitably?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Book a free audit. We will review your account, find what is holding you back and show you exactly how we scale you profitably. No pressure, no pitch, just clarity.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Glass Frame for Calendar */}
                    <div className="p-2 rounded-[2.5rem] bg-white/[0.03] border border-white/10 glow-blue overflow-hidden shadow-2xl backdrop-blur-xl">
                        <div className="rounded-[2rem] overflow-hidden bg-black/40 min-h-[600px] relative">
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/booking/3V3Wt7JmUTG38YsisJeh"
                                style={{ width: '100%', border: 'none', minHeight: '600px' }}
                                scrolling="no"
                                id="ghl-booking-calendar"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 md:right-10 px-6 py-4 bg-white text-black rounded-2xl font-black text-sm flex items-center gap-3 shadow-2xl rotate-3 hover:rotate-0 transition-transform cursor-default z-20">
                        <MessageSquare size={18} />
                        Free Strategy Call
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 flex justify-center"
                >
                    <Link
                        href="https://wa.me/923469037939"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
                    >
                        Message Us on WhatsApp
                    </Link>
                </motion.div>
            </div>

            <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="lazyOnload"
            />
        </section>
    );
};
