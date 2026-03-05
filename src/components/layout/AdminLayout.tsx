'use client';

import React, { useState } from 'react';
import { AdminSidebar } from "./AdminSidebar";
import {
    Search,
    Bell,
    Menu,
    ChevronDown,
    Settings
} from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-background text-foreground transition-colors duration-300">
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden lg:pl-[280px]">
                {/* Header */}
                <header className="h-20 glass-effect-dark border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
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
                                placeholder="Search residents, bills, or tasks..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2.5 pl-12 pr-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex flex-col items-end border-r border-slate-200 pr-6">
                            <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Estate Status</span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold text-slate-600">Secure & Operational</span>
                            </div>
                        </div>

                        <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-2xl transition-all group">
                            <Bell size={22} className="group-hover:scale-110 transition-transform" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-white" />
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer group">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-none">Estate Admin</p>
                                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">Super User</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-accent/20 shadow-lg shadow-accent/5 active:scale-95 transition-transform bg-accent/10 flex items-center justify-center">
                                <Settings size={20} className="text-accent" />
                            </div>
                            <ChevronDown size={16} className="text-slate-400 group-hover:text-accent transition-colors" />
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
