"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FileText,
    Users,
    BarChart3,
    TrendingUp,
    PlusCircle
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const [statsData, setStatsData] = React.useState({ totalPosts: 0 });
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const loadStats = async () => {
            const { getStats } = await import("@/app/actions/post-actions");
            const result = await getStats();
            if (result.success) {
                setStatsData({ totalPosts: result.totalPosts });
            }
            setLoading(false);
        };
        loadStats();
    }, []);

    const stats = [
        { label: "Total Posts", value: loading ? "..." : statsData.totalPosts.toString(), icon: <FileText className="text-blue-500" />, trend: "+100%" },
        { label: "Blog Views", value: "0", icon: <BarChart3 className="text-purple-500" />, trend: "+0%" },
        { label: "Subscribers", value: "0", icon: <Users className="text-pink-500" />, trend: "+0%" },
        { label: "Conversion Rate", value: "0%", icon: <TrendingUp className="text-green-500" />, trend: "+0%" },
    ];

    return (
        <div className="space-y-12">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-black mb-2 uppercase tracking-tight">Overview</h1>
                    <p className="text-gray-500">Welcome back, Admin. Here&apos;s your blog growth status.</p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="px-6 py-3 bg-white text-black font-black rounded-xl text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <PlusCircle size={18} /> New Post
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <span className="text-[10px] font-black px-2 py-1 bg-green-500/10 text-green-500 rounded-full">
                                {stat.trend}
                            </span>
                        </div>
                        <div className="text-3xl font-black mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 h-[400px] flex flex-col items-center justify-center text-center">
                    <BarChart3 size={48} className="text-gray-700 mb-4" />
                    <h3 className="font-bold text-gray-500 mb-2">Analytics Insight</h3>
                    <p className="text-gray-600 text-sm max-w-xs">Data will start appearing once you publish your first post and generate traffic.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5">
                    <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Recent Activity</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <p className="text-sm text-gray-400">Database connected and ready for posts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
