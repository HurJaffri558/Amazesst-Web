"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "Why Us", href: "#why-us" },
    { name: "Results", href: "#case-studies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) {
        return (
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent animate-pulse">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="w-32 h-8 bg-white/5 rounded-lg" />
                    <div className="hidden md:flex space-x-8">
                        <div className="w-16 h-4 bg-white/5 rounded" />
                        <div className="w-16 h-4 bg-white/5 rounded" />
                        <div className="w-16 h-4 bg-white/5 rounded" />
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image src="/images/logo.png" alt="Amazesst" width={160} height={40} className="object-contain h-8 w-auto" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="https://wa.me/923469037939"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl text-sm font-bold border border-white/10 text-white hover:bg-white/10 transition-all"
                        >
                            WhatsApp
                        </Link>
                        <Link
                            href="#booking"
                            className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:scale-105 transition-all shadow-lg glow-blue"
                        >
                            Book a Strategy Call
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black border-b border-white/10 py-6 px-6 flex flex-col space-y-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://wa.me/923469037939"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="px-5 py-3 rounded-xl text-center font-semibold border border-white/10 text-white"
                        >
                            WhatsApp
                        </Link>
                        <Link
                            href="#booking"
                            onClick={() => setIsOpen(false)}
                            className="bg-white text-black px-5 py-3 rounded-xl text-center font-semibold"
                        >
                            Book a Strategy Call
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
