"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <footer className="bg-black py-20" />;

    return (
        <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center">
                        <img src="/images/logo.png" alt="Amazesst" className="h-10 w-auto object-contain" />
                    </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            More Revenue. More Margins. No Guesswork.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61580039061995" },
                                { Icon: Twitter, href: "https://x.com/HurJaffri76100" },
                                { Icon: Instagram, href: "https://www.instagram.com/amazesst/" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/amazest/" },
                                {
                                    Icon: () => (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19.25 4.51c.02.01.04.02.06.03a11.5 11.5 0 0 1-6.72 2.6c-.66.01-1.32.02-1.98.02a11.5 11.5 0 0 1-6-1.57A11.5 11.5 0 0 0 12 21a11.52 11.52 0 0 0 7.25-2.51V18a5.5 5.5 0 1 1-11 0v-2.18c0-.66.07-1.31.22-1.95a5.5 5.5 0 0 1 10.78 0" />
                                        </svg>
                                    ),
                                    href: "https://www.threads.com/@amazesst"
                                }
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Why Us", href: "#why-us" },
                                { name: "Process", href: "#process" },
                                { name: "Results", href: "#case-studies" },
                                { name: "Packages", href: "#packages" },
                                { name: "FAQ", href: "#faq" },
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                                        {item.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Packages</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Starter", href: "/starter" },
                                { name: "Growth", href: "/growth" },
                                { name: "Scale", href: "/scale" },
                                { name: "Enterprise", href: "/enterprise" },
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                                        {item.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 relative overflow-hidden">
                        <h4 className="font-bold text-white mb-4">Ready to Scale Profitably?</h4>
                        <p className="text-gray-400 text-xs mb-6">Book a free audit. We will review your account, find what is holding you back and show you exactly how we scale you profitably.</p>
                        <Link href="#booking" className="block w-full py-4 bg-primary text-white font-bold rounded-2xl text-sm text-center hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(59,130,246,0.3)] mb-3">
                            Get Free Audit
                        </Link>
                        <Link href="https://wa.me/923469037939" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white/5 border border-white/10 text-white font-bold rounded-2xl text-sm text-center hover:bg-white/10 transition-colors">
                            Message Us on WhatsApp
                        </Link>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
                    <p>© 2026 Amazesst. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
