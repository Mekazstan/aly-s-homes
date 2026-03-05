'use client';

import React from 'react';
import {
    Megaphone,
    Plus,
    Search,
    Mail,
    Bell,
    Send,
    History,
    MessageSquare,
    Users,
    ChevronRight,
    MoreVertical,
    CheckCircle2,
    Clock,
    Eye,
    Layout,
    FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

const notices = [
    { id: 'NT-501', title: 'Water Maintenance Schedule', category: 'Utility', date: 'Mar 15, 2024', author: 'Estate Manager', status: 'Published' },
    { id: 'NT-502', title: 'Security Protocol Update', category: 'Security', date: 'Mar 14, 2024', author: 'Chief Security', status: 'Scheduled' },
    { id: 'NT-503', title: 'Easter Brunch at Clubhouse', category: 'Event', date: 'Mar 12, 2024', author: 'Resident Assoc.', status: 'Draft' },
];

const newsletters = [
    { id: 'NL-01', title: 'Ale Luxury Monthly - March', sentTo: '1,284 Residents', openRate: '68%', status: 'Sent' },
    { id: 'NL-02', title: 'Community Safety Bulletin', sentTo: '1,280 Residents', openRate: '42%', status: 'Sent' },
];

export default function AdminCommunication() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 underline decoration-accent/10 underline-offset-8 tracking-tight">Comm Engine</h1>
                    <p className="text-slate-500 font-bold">Notice board, newsletters, and resident alerts</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200 transition-all">
                        <MessageSquare size={18} className="text-accent" />
                        Quick Broadcast
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 gold-gradient text-black text-sm font-black rounded-xl shadow-lg shadow-gold-start/20 transition-all hover:scale-105 active:scale-95">
                        <Plus size={18} />
                        New Notice
                    </button>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Active Notices', val: '12', icon: Megaphone, color: 'text-accent' },
                    { label: 'Avg Open Rate', val: '54.2%', icon: Eye, color: 'text-emerald-500' },
                    { label: 'Total Subscribers', val: '1,284', icon: Users, color: 'text-blue-500' },
                ].map((stat, i) => (
                    <div key={i} className="glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between group transition-all hover:shadow-md">
                        <div>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900">{stat.val}</h3>
                        </div>
                        <div className={cn("p-4 rounded-2xl bg-slate-50 group-hover:bg-slate-100 transition-colors shadow-inner", stat.color)}>
                            <stat.icon size={28} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Notice Board Management */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Layout size={22} className="text-accent" />
                            Notice Operations
                        </h3>
                        <div className="flex items-center p-1 bg-slate-50 rounded-xl border border-slate-200">
                            <button className="px-4 py-1.5 rounded-lg bg-accent text-black text-[10px] font-black uppercase tracking-widest shadow-sm">Active</button>
                            <button className="px-4 py-1.5 rounded-lg text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest transition-all">Archives</button>
                        </div>
                    </div>

                    <div className="glass-effect-dark rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Notice Topic</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Category</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                        <th className="px-6 py-4 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {notices.map((nt) => (
                                        <tr key={nt.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors">{nt.title}</div>
                                                <div className="text-[10px] text-slate-300 font-black uppercase tracking-widest mt-0.5">{nt.author}</div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-xs text-slate-500 font-bold">{nt.category}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-xs text-slate-400 font-black">{nt.date}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className={cn(
                                                    "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest w-fit border",
                                                    nt.status === 'Published' ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" :
                                                        nt.status === 'Scheduled' ? "bg-blue-500/5 text-blue-500 border-blue-500/20" : "bg-slate-50 text-slate-300 border-slate-200"
                                                )}>
                                                    {nt.status}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-slate-300 hover:text-slate-900 transition-colors">
                                                    <MoreVertical size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Newsletter & Alerts */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Mail size={22} className="text-accent" />
                        Newsletter Dispatch
                    </h3>

                    <div className="space-y-4">
                        {newsletters.map((nl, i) => (
                            <div key={i} className="glass-effect-dark p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4 group transition-all hover:border-accent/30">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-accent transition-colors">{nl.title}</h4>
                                    <div className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase tracking-widest">{nl.status}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Recipients</p>
                                        <p className="text-xs text-slate-900 font-bold">{nl.sentTo}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Engage Rate</p>
                                        <p className="text-xs text-emerald-500 font-bold">{nl.openRate}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full glass-effect-dark p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-accent/30 transition-all flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-accent transition-all group-hover:rotate-12 shadow-inner">
                            <Send size={24} />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Blast Newsletter</p>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1 italic">Send Update to All Units</p>
                        </div>
                    </button>

                    <div className="pt-6">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-300 mb-4 flex items-center gap-2">
                            <History size={14} className="text-slate-400" />
                            Recent Broadcasts
                        </p>
                        <div className="space-y-3">
                            {[
                                { msg: 'Gate Malfunction Repaired', time: 'Today, 8:12 AM' },
                                { msg: 'Security Patrol Increased', time: 'Yesterday' },
                            ].map((msg, i) => (
                                <div key={i} className="flex items-center justify-between text-[11px] group cursor-pointer border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                                    <span className="text-slate-500 group-hover:text-accent transition-colors font-bold">{msg.msg}</span>
                                    <span className="text-slate-300 font-black uppercase tracking-widest">{msg.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
