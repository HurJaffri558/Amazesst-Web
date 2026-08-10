"use client";

import React, { useEffect, useState } from "react";
import { getPosts } from "@/app/actions/post-actions";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Filter, FileText } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function BlogArchive() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    useEffect(() => {
        const loadPosts = async () => {
            const result = await getPosts();
            if (result.success) setPosts(result.posts || []);
            setLoading(false);
        };
        loadPosts();
    }, []);

    const categories = ["All", ...new Set(posts.map(p => p.category))];

    const filteredPosts = posts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter"
                        >
                            The <span className="text-primary italic">Knowledge </span> Base
                        </motion.h1>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            Deep dives into Amazon growth, advertising algorithms, and brand building strategies.
                        </p>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                        <div className="relative w-full md:max-w-md group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-gray-700 outline-none focus:border-primary/50 transition-all shadow-2xl"
                            />
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                                    className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border ${selectedCategory === cat
                                        ? "bg-white text-black border-white"
                                        : "bg-white/5 text-gray-400 border-white/5 hover:border-white/20"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {loading ? (
                                [1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="animate-pulse">
                                        <div className="aspect-[16/10] bg-white/5 rounded-[2.5rem] mb-6" />
                                        <div className="h-4 bg-white/5 rounded w-1/3 mb-4" />
                                        <div className="h-8 bg-white/5 rounded w-full mb-2" />
                                        <div className="h-8 bg-white/5 rounded w-2/3" />
                                    </div>
                                ))
                            ) : currentPosts.length > 0 ? (
                                currentPosts.map((post, i) => (
                                    <motion.div
                                        key={post.slug}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                    >
                                        <Link href={`/blog/${post.slug}`} className="group block h-full">
                                            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 bg-white/[0.02] flex items-center justify-center">
                                                {post.image ? (
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <FileText size={48} className="text-gray-800" />
                                                )}
                                                <div className="absolute top-6 left-6">
                                                    <span className="px-4 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={14} className="text-primary" />
                                                    {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <User size={14} className="text-primary" />
                                                    {post.author}
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-black leading-tight group-hover:text-primary transition-colors mb-4">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6">
                                                {post.content.replace(/<[^>]*>/g, "").replace(/[#*`]/g, "")}
                                            </p>
                                            <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                                                Read Article <ArrowRight size={16} />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-32 text-center">
                                    <h3 className="text-2xl font-bold text-gray-600 italic">No articles found matching your criteria.</h3>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex justify-center gap-3">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                    className={`w-12 h-12 rounded-xl border font-black transition-all ${currentPage === i + 1
                                        ? "bg-white text-black border-white"
                                        : "bg-white/5 border-white/5 text-gray-500 hover:border-white/20"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
