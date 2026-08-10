"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/app/actions/post-actions";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Save,
    Image as ImageIcon,
    Type,
    Tag,
    Search,
    User,
    Sparkles,
    BarChart3,
    Upload,
    Link as LinkIcon,
    X,
    FileText,
    Bold,
    Italic,
    List,
    ListOrdered,
    Code
} from "lucide-react";
import Link from "next/link";

// Tiptap Imports
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapToolbar = ({ editor }: { editor: any }) => {
    if (!editor) return null;

    const btnClass = (active: boolean) =>
        `p-2 rounded-lg transition-all ${active ? 'bg-primary text-white' : 'text-gray-500 hover:text-white hover:bg-white/10'}`;

    return (
        <div className="flex flex-wrap gap-1 p-2 bg-white/[0.02] border-b border-white/5">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={btnClass(editor.isActive('bold'))}
            >
                <Bold size={18} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={btnClass(editor.isActive('italic'))}
            >
                <Italic size={18} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={btnClass(editor.isActive('bulletList'))}
            >
                <List size={18} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={btnClass(editor.isActive('orderedList'))}
            >
                <ListOrdered size={18} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={btnClass(editor.isActive('codeBlock'))}
            >
                <Code size={18} />
            </button>
            <div className="w-px h-6 bg-white/5 mx-2 self-center" />
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={btnClass(editor.isActive('heading', { level: 1 }))}
            >
                H1
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={btnClass(editor.isActive('heading', { level: 2 }))}
            >
                H2
            </button>
        </div>
    );
};

export default function NewPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [imageSource, setImageSource] = useState<"url" | "file">("url");
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        content: "",
        category: "Growth Strategy",
        author: "Team Amazesst",
        image: "",
        metaTitle: "",
        metaDescription: "",
        tags: "",
        published: true
    });

    const editor = useEditor({
        extensions: [StarterKit],
        content: formData.content,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            setFormData(prev => ({ ...prev, content: editor.getHTML() }));
        },
        editorProps: {
            attributes: {
                class: 'prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[400px] p-6 text-gray-300 max-w-none',
            },
        },
    });

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert("File too large. Please keep images under 2MB.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const generateSlug = () => {
        const slug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-0\s]/g, "")
            .replace(/\s+/g, "-");
        setFormData({ ...formData, slug });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const result = await createPost(formData);
            if (result.success) {
                setStatus({ type: 'success', message: "Post published successfully! Redirecting..." });
                setTimeout(() => {
                    router.push("/admin/posts");
                }, 2000);
            } else {
                setStatus({ type: 'error', message: result.error || "Failed to publish post" });
                setLoading(false);
            }
        } catch (error) {
            console.error("Publish error:", error);
            setStatus({ type: 'error', message: "An unexpected error occurred." });
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            {/* Status Notifications */}
            <AnimatePresence>
                {status && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`p-4 rounded-2xl border font-bold text-sm ${status.type === 'success'
                                ? 'bg-green-500/10 border-green-500/20 text-green-500'
                                : 'bg-red-500/10 border-red-500/20 text-red-500'
                            }`}
                    >
                        {status.message}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="flex items-center justify-between">
                <Link
                    href="/admin/posts"
                    className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Posts
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-8 py-3 bg-white text-black font-black rounded-xl text-sm flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
                    >
                        {loading ? (
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <><Save size={18} /> Publish Post</>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Content Card */}
                    <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-8">
                        <div>
                            <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-4 ml-1">Post Title</label>
                            <div className="relative">
                                <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    onBlur={generateSlug}
                                    placeholder="e.g. 10 Strategies for Amazon Growth"
                                    className="w-full bg-black/50 border border-white/5 rounded-2xl py-5 pl-14 pr-4 text-2xl font-black text-white outline-none focus:border-primary/50 transition-all font-sans"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-4 ml-1">Article Content</label>
                            <div className="bg-black/50 border border-white/5 rounded-2xl overflow-hidden focus-within:border-primary/50 transition-all">
                                <TiptapToolbar editor={editor} />
                                <EditorContent editor={editor} />
                            </div>
                        </div>
                    </div>

                    {/* SEO & AEO Card */}
                    <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-8">
                        <div className="flex items-center gap-3 mb-2">
                            <Sparkles className="text-primary" size={20} />
                            <h2 className="text-lg font-black uppercase tracking-tight">SEO & AEO Analysis</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Meta Title</label>
                                <input
                                    type="text"
                                    value={formData.metaTitle}
                                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                                    className="w-full bg-black/50 border border-white/5 rounded-xl py-3 px-4 text-white outline-none focus:border-primary/50 transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Keywords / Tags</label>
                                <input
                                    type="text"
                                    value={formData.tags}
                                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                    placeholder="amazon, ads, growth"
                                    className="w-full bg-black/50 border border-white/5 rounded-xl py-3 px-4 text-white outline-none focus:border-primary/50 transition-all text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Search Snippet (Description)</label>
                            <textarea
                                value={formData.metaDescription}
                                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                                className="w-full bg-black/50 border border-white/5 rounded-xl py-3 px-4 text-white outline-none focus:border-primary/50 transition-all text-sm h-24"
                            />
                        </div>
                    </div>
                </div>

                <aside className="space-y-8">
                    {/* Settings Card */}
                    <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-gray-400">Settings</h3>

                        <div>
                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">URL Path</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 text-xs">/</span>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    className="w-full bg-black/50 border border-white/5 rounded-xl py-3 pl-8 pr-4 text-white outline-none focus:border-primary/50 transition-all text-xs font-mono"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full bg-black/50 border border-white/5 rounded-xl py-3 px-4 text-white outline-none focus:border-primary/50 transition-all text-sm appearance-none cursor-pointer"
                            >
                                <option>Growth Strategy</option>
                                <option>Advertising</option>
                                <option>Creative</option>
                                <option>Logistics</option>
                            </select>
                        </div>

                        {/* Enhanced Image Source Toggle */}
                        <div className="space-y-4">
                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Featured Image</label>

                            <div className="flex p-1 bg-white/5 rounded-xl">
                                <button
                                    onClick={() => setImageSource("url")}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${imageSource === "url" ? "bg-white text-black" : "text-gray-500 hover:text-white"}`}
                                >
                                    <LinkIcon size={14} /> URL
                                </button>
                                <button
                                    onClick={() => setImageSource("file")}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${imageSource === "file" ? "bg-white text-black" : "text-gray-500 hover:text-white"}`}
                                >
                                    <Upload size={14} /> File
                                </button>
                            </div>

                            <div className="space-y-4">
                                {imageSource === "url" ? (
                                    <div className="relative">
                                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                                        <input
                                            type="text"
                                            value={formData.image.startsWith('data:') ? '' : formData.image}
                                            onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                                            placeholder="Paste image URL..."
                                            className="w-full bg-black/50 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-primary/50 transition-all text-[11px]"
                                        />
                                    </div>
                                ) : (
                                    <div className="relative group aspect-video rounded-xl border-2 border-dashed border-white/5 bg-black/50 overflow-hidden flex flex-col items-center justify-center transition-all hover:border-primary/30">
                                        {formData.image.startsWith('data:') ? (
                                            <div className="w-full h-full relative">
                                                <img src={formData.image} className="w-full h-full object-cover" alt="Preview" />
                                                <button
                                                    onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                                                    className="absolute top-2 right-2 p-1 bg-black/60 rounded-lg text-white hover:bg-red-500 transition-colors"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ) : (
                                            <label className="flex flex-col items-center gap-2 cursor-pointer p-4 text-center group">
                                                <Upload className="text-gray-600 group-hover:text-primary transition-colors" size={24} />
                                                <span className="text-[10px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest">Upload from PC</span>
                                                <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
                                            </label>
                                        )}
                                    </div>
                                )}

                                {formData.image && !formData.image.startsWith('data:') && imageSource === "url" && (
                                    <div className="relative aspect-video rounded-xl border border-white/10 overflow-hidden">
                                        <img src={formData.image} className="w-full h-full object-cover" alt="Preview" />
                                        <button
                                            onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                                            className="absolute top-2 right-2 p-1 bg-black/60 rounded-lg text-white hover:bg-red-500 transition-colors"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Preview Card */}
                    <div className="p-8 rounded-[2rem] bg-primary/10 border border-primary/20 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <BarChart3 className="text-primary" size={16} />
                            <h3 className="text-xs font-black uppercase tracking-widest text-primary">Content Quality</h3>
                        </div>
                        <p className="text-[10px] text-gray-500 leading-relaxed">Your content is being optimized for Amazon Search and AI discovery engines (AEO).</p>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="w-[92%] h-full bg-primary" />
                        </div>
                        <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-gray-600">
                            <span>Ready for SEO</span>
                            <span>Score: 92%</span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
