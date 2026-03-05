"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Receipt,
    Settings,
    Wrench,
    Trees,
    BellRing,
    LogOut,
    X,
    Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/auth/AuthContext';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Visitors', href: '/visitors', icon: Users },
    { name: 'Bills', href: '/bills', icon: Receipt },
    { name: 'Maintenance', href: '/maintenance', icon: Wrench },
    { name: 'Amenities', href: '/amenities', icon: Trees },
    { name: 'Notices', href: '/notices', icon: BellRing },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const { logout } = useAuth();

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-slate-900/60 transition-opacity duration-300 lg:hidden",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-full w-[280px] sidebar-gradient border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full px-6 py-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-10">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center text-black shadow-lg shadow-gold-start/20">
                                <Home size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h2 className="text-slate-900 text-xl font-extrabold leading-none tracking-tight">ALE</h2>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold gold-text-gradient">Abuja Luxury</p>
                            </div>
                        </Link>
                        <button
                            onClick={onClose}
                            className="lg:hidden text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-grow space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-4 ml-3">Resident Portal</p>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                                        isActive
                                            ? "bg-gold-start/10 text-gold-start font-semibold"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    )}
                                >
                                    <Icon size={20} className={cn(
                                        "transition-colors",
                                        isActive ? "text-gold-start" : "text-slate-400 group-hover:text-slate-600"
                                    )} />
                                    <span className="text-sm">{item.name}</span>
                                    {isActive && (
                                        <div className="absolute left-0 w-1 h-6 bg-gold-start rounded-r-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-slate-200 grid gap-2">
                        <Link
                            href="/settings"
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                pathname === '/settings'
                                    ? "bg-gold-start/10 text-gold-start font-semibold"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                            )}
                        >
                            <Settings size={20} />
                            <span className="text-sm">Settings</span>
                        </Link>
                        <button
                            onClick={logout}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/5 transition-all duration-200 mt-2"
                        >
                            <LogOut size={20} />
                            <span className="text-sm">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};
