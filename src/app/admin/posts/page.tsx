"use client";

import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "@/app/actions/post-actions";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, FileText, Trash2, Edit, ExternalLink, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function PostsPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await getPosts();
        if (result.success) setPosts(result.posts || []);
        setLoading(false);
    };

    const handleDelete = async (slug: string) => {
        if (confirm("Are you sure you want to delete this post? This action will create a commit in GitHub.")) {
            // Clear status
            setStatus(null);

            // Optimistically remove from UI
            const originalPosts = [...posts];
            setPosts(posts.filter(p => p.slug !== slug));

            try {
                // Use Server Action instead of fetch to avoid header issues
                const result = await deletePost(slug);

                if (result.success) {
                    setStatus({ type: 'success', message: `Post "${slug}" deleted successfully!` });
                    // Auto hide status
                    setTimeout(() => setStatus(null), 5000);
                } else {
                    setStatus({ type: 'error', message: "Failed to delete post: " + (result.error || "Unknown error") });
                    setPosts(originalPosts); // Revert logic
                }
            } catch (error) {
                console.error("Delete error:", error);
                setStatus({ type: 'error', message: "An error occurred while deleting." });
                setPosts(originalPosts);
            }
        }
    };

    const filteredPosts = posts.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Status Notifications */}
            <AnimatePresence>
                {status && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`p-4 rounded-xl border font-bold text-sm ${status.type === 'success'
                            ? 'bg-green-500/10 border-green-500/20 text-green-500'
                            : 'bg-red-500/10 border-red-500/20 text-red-500'
                            }`}
                    >
                        {status.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black mb-2 uppercase tracking-tight">All Posts</h1>
                    <p className="text-gray-500">Manage, edit, and optimize your blog content.</p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="px-6 py-3 bg-white text-black font-black rounded-xl text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <PlusCircle size={18} /> New Post
                </Link>
            </div>

            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search posts or categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-black/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-700 outline-none focus:border-primary/50 transition-all text-sm"
                    />
                </div>
                <button className="px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-gray-500 hover:text-white transition-colors">
                    <Filter size={18} />
                </button>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-gray-500">Post Info</th>
                            <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-gray-500">Category</th>
                            <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-gray-500">Date</th>
                            <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.length === 0 && !loading ? (
                                <tr key="empty">
                                    <td colSpan={4} className="px-8 py-20 text-center text-gray-600 font-bold">
                                        No posts found. Start growing by creating your first post.
                                    </td>
                                </tr>
                            ) : (
                                filteredPosts.map((post, i) => (
                                    <motion.tr
                                        key={post.slug}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="border-b border-white/5 hover:bg-white/[0.01] transition-colors"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                {post.image ? (
                                                    <img src={post.image} className="w-12 h-12 rounded-lg object-cover bg-white/5" />
                                                ) : (
                                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                                                        <FileText className="text-gray-700" size={20} />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="font-bold text-white mb-1">{post.title}</div>
                                                    <div className="text-[10px] text-gray-600 font-mono uppercase tracking-tighter">{post.slug}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-gray-500 tabular-nums">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    target="_blank"
                                                    className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-all"
                                                >
                                                    <ExternalLink size={18} />
                                                </Link>
                                                {/* <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-blue-500 transition-all">
                                                    <Edit size={18} />
                                                </button> */}
                                                <button
                                                    onClick={() => handleDelete(post.slug)}
                                                    className="p-2 hover:bg-red-500/10 rounded-lg text-gray-500 hover:text-red-500 transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            )}
                        </AnimatePresence>
                    </tbody>
                </table>
                {loading && (
                    <div className="px-8 py-20 flex justify-center">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                )}
            </div>
        </div>
    );
}
