import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.metaTitle || post.title} | Amazesst Blog`,
        description: post.metaDescription || post.content.substring(0, 160),
        keywords: post.tags,
        openGraph: {
            images: post.image ? [post.image] : [],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author,
        },
        "datePublished": post.createdAt,
        "dateModified": post.updatedAt,
        "description": post.metaDescription || post.content.substring(0, 160),
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <article className="pt-40 pb-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb / Back */}
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors mb-12"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <div className="space-y-8 mb-16">
                        <span className="px-4 py-1 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-primary" />
                                {new Date(post.createdAt).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-primary" />
                                {post.author}
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.image && (
                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-16 border border-white/10 shadow-2xl bg-white/[0.02] flex items-center justify-center p-4">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div
                            className="text-gray-300 leading-relaxed space-y-6 blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Tags */}
                    {post.tags && (
                        <div className="mt-20 pt-12 border-t border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <Tag size={18} className="text-primary" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Industry Tags</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.split(",").map((t: string) => (
                                    <span key={t} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-gray-400">
                                        {/* Tag */}
                                        #{t.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            <Footer />
        </main>
    );
}
