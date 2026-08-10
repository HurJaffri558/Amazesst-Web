"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, FileText } from "lucide-react";
import Link from "next/link";
import { getPosts } from "@/app/actions/post-actions";

export const Blog = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const loadPosts = async () => {
            const result = await getPosts();
            if (result.success) {
                // Show only first 6 for homepage
                setPosts(result.posts?.slice(0, 6) || []);
            }
            setLoading(false);
        };
        loadPosts();
    }, []);

    if (!mounted) return null;

    return (
        <section id="blog" className="py-24 px-6 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.4 }}
                            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
                        >
                            The <span className="text-primary italic">Amazesst </span> Blog
                        </motion.h2>
                        <p className="text-gray-500 max-w-xl">
                            Insights, strategies, and industry news to help you dominate the Amazon marketplace.
                        </p>
                    </div>
                    <Link href="/blog">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            View All Posts <ArrowRight size={16} />
                        </motion.button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {loading ? (
                        [1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="aspect-[16/10] bg-white/5 rounded-2xl mb-6" />
                                <div className="h-4 bg-white/5 rounded w-1/2 mb-4" />
                                <div className="h-6 bg-white/5 rounded w-full" />
                            </div>
                        ))
                    ) : (
                        posts.map((post, i) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.4 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group cursor-pointer h-full"
                                >
                                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-white/[0.02] flex items-center justify-center">
                                        {post.image ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <FileText className="text-gray-800" size={48} />
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {new Date(post.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric"
                                            })}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            {post.author}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                </motion.div>
                            </Link>
                        ))
                    )}

                    {!loading && posts.length === 0 && (
                        <div className="col-span-3 py-20 text-center">
                            <p className="text-gray-600 font-bold italic">No posts published yet. Stay tuned!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
