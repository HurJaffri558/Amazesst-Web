"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Zap, Clock } from "lucide-react";

const expertiseAreas = [
    {
        title: "Full-Service Management",
        description: "We handle everything from A to Z so you can focus on building your business empire.",
        icon: <ShieldCheck className="text-primary" size={32} />,
        points: ["Total Account Audit", "Brand Registry", "Policy Compliance"]
    },
    {
        title: "Aggressive PPC Strategy",
        description: "Our data scientists optimize your spend to maximize aggressive growth and brand share.",
        icon: <Rocket className="text-secondary" size={32} />,
        points: ["Campaign Structuring", "Keyword Dominance", "Competitor Conquesting"]
    },
    {
        title: "Creative & Branding",
        description: "Stunning visual storytelling that builds brand equity and drives conversions.",
        icon: <Zap className="text-accent" size={32} />,
        points: ["A+ Content", "Product Photography", "Storefront Design"]
    },
    {
        title: "Operational Efficiency",
        description: "Streamlined logistics and supply chain management for uninterrupted scaling.",
        icon: <Clock className="text-green-500" size={32} />,
        points: ["Inventory Planning", "Refund Recovery", "Supplier Relations"]
    }
];

export const Expertise = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <section className="py-24 bg-transparent" id="services" />;

    return (
        <section className="py-24 px-6 relative bg-black/40" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter uppercase">
                                Save Time, <br />
                                Scale Fast With A <br />
                                <span className="text-primary">Team of Experts.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We are 100% dedicated to all your Amazon needs. Our team becomes your internal
                                growth department, working 24/7 to ensure dominance.
                            </p>
                            <div className="pt-6">
                                <div className="flex -space-x-3 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-2 border-black bg-primary flex items-center justify-center text-xs font-bold text-white">
                                        +15
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-gray-400">Trusted by over 200+ Global Brands</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {expertiseAreas.map((area, i) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ amount: 0.4 }}
                                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.3 }}
                                whileHover={{ y: -10, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                                className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex flex-col group cursor-pointer"
                            >
                                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{area.title}</h3>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{area.description}</p>
                                <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
                                    {area.points.map(p => (
                                        <div key={p} className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {p}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
