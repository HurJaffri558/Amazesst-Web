"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Simple validation based on user's request
        if (email === "jaffrihur558@gmail.com" && password === "jaffrihur558") {
            // For now, using a simple local storage flag. 
            // In a real app, this would be a server action with a secure cookie.
            localStorage.setItem("is_admin", "true");

            // Artificial delay for feel
            setTimeout(() => {
                router.push("/admin/dashboard");
            }, 1000);
        } else {
            setError("Invalid email or password");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black flex items-center justify-center p-6 selection:bg-primary/30">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black tracking-tight text-white mb-2 uppercase">
                        Admin <span className="text-primary italic">Login</span>
                    </h1>
                    <p className="text-gray-500">Access the Amazesst growth engine dashboard.</p>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full bg-black/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-black/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                            >
                                <AlertCircle size={16} />
                                {error}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full group relative py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Log In <span>→</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push("/")}
                        className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                        Back to Website
                    </button>
                </div>
            </motion.div>
        </main>
    );
}
