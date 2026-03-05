'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    CreditCard,
    Wrench,
    Palmtree,
    Shield,
    Megaphone,
    LogOut,
    Menu,
    X,
    Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/auth/AuthContext';

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: Users, label: 'Residents', href: '/admin/residents' },
    { icon: CreditCard, label: 'Billing', href: '/admin/billing' },
    { icon: Wrench, label: 'Maintenance', href: '/admin/maintenance' },
    { icon: Palmtree, label: 'Amenities', href: '/admin/amenities' },
    { icon: Shield, label: 'Security', href: '/admin/security' },
    { icon: Megaphone, label: 'Communication', href: '/admin/communication' },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const { logout } = useAuth();

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed top-0 left-0 h-full w-[280px] sidebar-gradient border-r border-black/5 z-50 transition-all duration-300 ease-in-out transform",
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
                <div className="flex flex-col h-full p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-10">
                        <Link href="/admin" className="flex items-center gap-3">
                            <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center text-black shadow-lg shadow-gold-start/20">
                                <Shield size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h2 className="text-slate-900 text-xl font-extrabold leading-none tracking-tight">ADMIN</h2>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold gold-text-gradient text-accent">Control Center</p>
                            </div>
                        </Link>
                        <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-slate-900 transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 ml-4">Management</p>
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => onClose()}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden",
                                        isActive
                                            ? "bg-accent/10 text-accent font-semibold"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    )}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
                                    )}
                                    <item.icon size={20} className={cn(
                                        "transition-transform duration-200 group-hover:scale-110",
                                        isActive ? "text-accent" : "text-slate-300 group-hover:text-slate-600"
                                    )} />
                                    <span className="text-sm">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-slate-100 space-y-2">
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200"
                        >
                            <Home size={20} className="text-slate-300 group-hover:text-slate-600" />
                            <span className="text-sm">Resident View</span>
                        </Link>
                        <button
                            onClick={logout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-100"
                        >
                            <LogOut size={20} />
                            <span className="text-sm font-bold">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};
