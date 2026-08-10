"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const packages = [
    {
        name: "Starter",
        description: "For brands who want core PPC and listing management to start scaling.",
        href: "/starter",
        btnText: "Learn More",
        popular: false,
    },
    {
        name: "Growth",
        description: "For brands who want a complete growth strategy, covering ads, conversion, retention and ranking domination.",
        href: "/growth",
        btnText: "Learn More",
        popular: false,
    },
    {
        name: "Scale",
        description: "For brands who want the full aggressive scaling system, everything included plus advanced advertising.",
        href: "/scale",
        btnText: "Learn More",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "For brands with large catalogs who need a fully dedicated team and a custom strategy.",
        href: "/enterprise",
        btnText: "Get a Quote",
        popular: false,
    },
];

export const Packages = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <section className="py-24 bg-transparent" id="packages" />;

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="packages">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                            Our Growth Plans
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
                    >
                        Choose the Plan That Matches<br />Where You Want to Go
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Not sure which plan is right for you? Book a free audit and we will tell you exactly which one fits your brand.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className={`relative rounded-[2.5rem] border p-8 flex flex-col transition-all cursor-pointer ${
                                pkg.popular
                                    ? "bg-primary/10 border-primary/40 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap flex items-center gap-1">
                                    <Star size={10} className="fill-white" /> Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-black text-white mb-4">{pkg.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                                {pkg.description}
                            </p>

                            <Link
                                href={pkg.href}
                                className={`flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm transition-all group ${
                                    pkg.popular
                                        ? "bg-white text-black hover:scale-105"
                                        : "bg-white/10 text-white border border-white/10 hover:bg-white/20"
                                }`}
                            >
                                {pkg.btnText}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
