"use client";

import React from "react";
import { motion } from "framer-motion";

const FloatingChat = () => {
    return (
        <div className="fixed bottom-5 right-[100px] z-[9999] flex flex-col items-end gap-4 scale-90 md:scale-100 origin-bottom-right">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/923469037939"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all group overflow-hidden"
            >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-10 h-10 drop-shadow-lg"
                />
            </motion.a>
        </div>
    );
};

export default FloatingChat;
