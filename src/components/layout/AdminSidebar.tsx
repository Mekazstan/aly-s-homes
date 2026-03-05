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
    Home,
    Search,
    Filter,
    Plus,
    ChevronLeft,
    ChevronRight,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/auth/AuthContext';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    isCollapsed?: boolean;
    setIsCollapsed?: (collapsed: boolean) => void;
}

const navItems = [
    { icon: LayoutDashboard, name: 'Dashboard', href: '/admin' },
    { icon: Users, name: 'Residents', href: '/admin/residents' },
    { icon: CreditCard, name: 'Billing', href: '/admin/billing' },
    { icon: Wrench, name: 'Maintenance', href: '/admin/maintenance' },
    { icon: Palmtree, name: 'Amenities', href: '/admin/amenities' },
    { icon: Shield, name: 'Security', href: '/admin/security' },
    { icon: Megaphone, name: 'Communication', href: '/admin/communication' },
];

export const AdminSidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isCollapsed, setIsCollapsed }) => {
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
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-full sidebar-gradient border-r border-slate-200 transition-all duration-300 ease-in-out lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    isCollapsed ? "w-[80px]" : "w-[280px]"
                )}
            >
                {/* Collapse Toggle - Desktop Only */}
                <button
                    onClick={() => setIsCollapsed?.(!isCollapsed)}
                    className="hidden lg:flex absolute -right-3 top-24 w-6 h-6 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-gold-start shadow-sm z-50 transition-transform group"
                >
                    {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>

                <div className={cn(
                    "flex flex-col h-full py-8 transition-all duration-300",
                    isCollapsed ? "px-4" : "px-6"
                )}>
                    {/* Header */}
                    <div className={cn(
                        "flex items-center justify-between mb-10 transition-all duration-300",
                        isCollapsed ? "justify-center" : "justify-between"
                    )}>
                        <Link href="/admin" className="flex items-center gap-3">
                            <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center text-black shadow-lg shadow-gold-start/20 shrink-0">
                                <LayoutDashboard size={24} strokeWidth={2.5} />
                            </div>
                            {!isCollapsed && (
                                <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                                    <h2 className="text-slate-900 text-lg font-extrabold leading-tight tracking-tight uppercase">Alys Homes LTD</h2>
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Admin Control</p>
                                </div>
                            )}
                        </Link>
                        <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-slate-900 transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-grow space-y-1">
                        {!isCollapsed && (
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-4 ml-3 animate-in fade-in duration-300">Management Panel</p>
                        )}
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    title={isCollapsed ? item.name : ""}
                                    className={cn(
                                        "flex items-center gap-3 py-3 rounded-xl transition-all duration-200 group relative",
                                        isCollapsed ? "px-0 justify-center" : "px-4",
                                        isActive
                                            ? "bg-gold-start/10 text-gold-start font-semibold"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    )}
                                >
                                    <Icon size={20} className={cn(
                                        "transition-colors shrink-0",
                                        isActive ? "text-gold-start" : "text-slate-400 group-hover:text-slate-600"
                                    )} />
                                    {!isCollapsed && (
                                        <span className="text-sm animate-in fade-in slide-in-from-left-2 duration-300">{item.name}</span>
                                    )}
                                    {isActive && (
                                        <div className={cn(
                                            "absolute left-0 w-1 h-6 bg-gold-start rounded-r-full",
                                            isCollapsed && "hidden"
                                        )} />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-slate-200 grid gap-2">
                        <Link
                            href="/admin/settings"
                            title={isCollapsed ? "Settings" : ""}
                            className={cn(
                                "flex items-center gap-3 py-3 rounded-xl transition-all duration-200 group",
                                isCollapsed ? "px-0 justify-center" : "px-4",
                                pathname === '/admin/settings'
                                    ? "bg-gold-start/10 text-gold-start font-semibold"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                            )}
                        >
                            <Settings size={20} className="shrink-0" />
                            {!isCollapsed && <span className="text-sm">Settings</span>}
                        </Link>
                        <button
                            onClick={logout}
                            title={isCollapsed ? "Sign Out" : ""}
                            className={cn(
                                "flex items-center gap-3 py-3 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 mt-2",
                                isCollapsed ? "px-0 justify-center" : "px-4"
                            )}
                        >
                            <LogOut size={20} className="shrink-0" />
                            {!isCollapsed && <span className="text-sm">Sign Out</span>}
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};
