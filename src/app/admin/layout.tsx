"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    FileText,
    PlusCircle,
    LogOut,
    Users,
    BarChart3,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isAdmin = localStorage.getItem("is_admin");
        if (!isAdmin) {
            router.push("/admin-post-login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("is_admin");
        router.push("/admin-post-login");
    };

    if (!mounted) return <div className="min-h-screen bg-black" />;

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 hidden md:flex flex-col p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-2 mb-12 px-2">
                    <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg object-contain" />
                    <span className="font-black tracking-tight text-xl uppercase">Amazesst <span className="text-[10px] text-primary block -mt-1 opacity-50">Admin</span></span>
                </div>

                <nav className="flex-grow space-y-2">
                    <SidebarLink href="/admin/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                    <SidebarLink href="/admin/posts" icon={<FileText size={20} />} label="All Posts" />
                    <SidebarLink href="/admin/posts/new" icon={<PlusCircle size={20} />} label="Create New" />
                </nav>

                <div className="pt-6 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-bold text-sm"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow">
                <header className="h-16 border-b border-white/10 px-8 flex items-center justify-between sticky top-0 bg-black/50 backdrop-blur-md z-40">
                    <h2 className="font-bold text-gray-400 text-sm uppercase tracking-widest">Growth Engine Control</h2>
                    <div className="flex items-center gap-4">
                        <Link href="/" target="_blank" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                            View Website <ArrowUpRight size={12} />
                        </Link>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">
                            AJ
                        </div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

function SidebarLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-bold text-sm"
        >
            {icon}
            {label}
        </Link>
    );
}
