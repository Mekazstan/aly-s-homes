"use client";

import React, { useState } from 'react';
import { Sidebar } from "@/components/layout/Sidebar";
import {
    Search,
    Bell,
    Menu,
    ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />

            <div className={cn(
                "flex-1 flex flex-col min-w-0 overflow-hidden transition-all duration-300",
                isCollapsed ? "lg:pl-[80px]" : "lg:pl-[280px]"
            )}>
                {/* Header */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
                    <div className="flex items-center gap-4 flex-1">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="max-w-md w-full relative hidden md:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search resources, bills, or notices..."
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-2xl transition-all group">
                            <Bell size={22} className="group-hover:scale-110 transition-transform" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-white" />
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer group">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-none">Chima Okafor</p>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Resident • 402-B</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white shadow-md active:scale-95 transition-transform">
                                <img src="https://i.pravatar.cc/150?u=chima" alt="profile" className="w-full h-full object-cover" />
                            </div>
                            <ChevronDown size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-10">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
