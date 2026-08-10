"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    { name: "Brand 1", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Brand 2", url: "https://sheayeleen.com/cdn/shop/files/SheaYeleen_Logo_2021_Lavender_180x.png?v=1614295349" },
    { name: "Brand 3", url: "https://www.sesres.com/wp-content/uploads/2022/06/SES-Logo-111x80-1.png" },
    { name: "Brand 4", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Brand 5", url: "https://www.shedavi.com/cdn/shop/files/logo.png?v=1688918940&width=220" },
    { name: "Brand 6", url: "https://logos-world.net/wp-content/uploads/2020/05/Icon-Nike-500x281.png" },
    { name: "Brand 6", url: "https://cdn11.bigcommerce.com/s-9a8d8/images/stencil/original/ezgif.com-gif-maker-removebg-preview_1670933512__14246.original.png" },
    { name: "Brand 6", url: "https://smacne.co/assets/logo-1d223405b67f0087976a4d42958551af7d1afa54fa9393425862c6cd9585aa93.svg" },
];

export const LogoScroller = () => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-64 bg-black" />;

    return (
        <section className="py-24 border-t border-white/5 overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h3 className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">
                    Powering The Best Amazon Sellers
                </h3>
            </div>

            <div className="flex overflow-hidden relative">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20, // Snappy scrolling
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-none gap-20 py-12"
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.3, filter: "grayscale(100%)", scale: 0.8 }}
                            whileInView={{ opacity: 1, filter: "grayscale(0%)", scale: 1 }}
                            whileHover={{
                                scale: 1.3,
                                filter: "grayscale(0%) drop-shadow(0 0 15px rgba(255,255,255,0.2))",
                                zIndex: 10
                            }}
                            whileTap={{ scale: 1.5, rotate: 5 }} // Popup on touch
                            viewport={{ amount: 0.4 }}
                            className="flex items-center justify-center w-32 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="max-h-12 w-auto invert brightness-100"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
