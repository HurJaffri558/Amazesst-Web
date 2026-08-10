"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.4 });
    const [mounted, setMounted] = useState(false);

    const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => { setMounted(true); }, []);
    useEffect(() => {
        if (inView && mounted) { spring.set(value); } else { spring.set(0); }
    }, [inView, spring, value, mounted]);

    return <motion.span ref={ref}>{mounted ? display : "0"}</motion.span>;
};

export const StatsSection = () => {
    const stats = [
        { label: "Brands Scaled", value: 200, suffix: "+" },
        { label: "Ad Spend Managed", value: 25, prefix: "$", suffix: "M+" },
        { label: "Revenue Generated", value: 140, prefix: "$", suffix: "M+" },
        { label: "Profit Protected", value: 12, prefix: "$", suffix: "M+" },
        { label: "Rated Agency", value: 5, suffix: " Star" },
    ];

    return (
        <section className="py-16 px-6 relative overflow-hidden bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 0.6, delay: index * 0.08, type: "spring", bounce: 0.3 }}
                            whileHover={{ scale: 1.08, y: -6, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                            className="text-center p-6 rounded-[2rem] bg-white/5 border border-white/5 relative group cursor-pointer transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="text-3xl md:text-4xl font-black mb-1 text-white flex items-center justify-center">
                                    {stat.prefix && <span>{stat.prefix}</span>}
                                    <AnimatedNumber value={stat.value} />
                                    {stat.suffix && <span>{stat.suffix}</span>}
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
