import React from 'react';
import {
    UserPlus,
    History,
    Search,
    ChevronRight,
    Clock,
    CheckCircle2,
    Calendar,
    MoreVertical,
    QrCode
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function VisitorsPage() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                        Visitors Management
                    </h1>
                    <p className="text-slate-500 mt-2 font-medium">Manage guest access and view entry history for your residence.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                    <UserPlus size={20} />
                    Invite New Guest
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-black text-slate-900 flex items-center gap-2">
                                <History size={18} className="text-primary" />
                                Recent Visitors
                            </h3>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-500 text-xs font-bold">
                                <Search size={14} />
                                <input type="text" placeholder="Search history..." className="bg-transparent border-none focus:outline-none" />
                            </div>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {[
                                { name: "Olawale Johnson", time: "Today, 02:45 PM", status: "Active", type: "Guest" },
                                { name: "MTN Service Team", time: "Yesterday, 11:20 AM", status: "Checked Out", type: "Service" },
                                { name: "Sarah Williams", time: "Oct 24, 04:10 PM", status: "Checked Out", type: "Guest" },
                                { name: "Uber Delivery", time: "Oct 23, 01:15 PM", status: "Checked Out", type: "Delivery" },
                            ].map((visitor, i) => (
                                <div key={i} className="p-6 hover:bg-slate-50/50 transition-colors flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            {visitor.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{visitor.name}</p>
                                            <p className="text-xs text-slate-400 font-bold flex items-center gap-1 mt-1">
                                                <Clock size={12} /> {visitor.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right hidden sm:block">
                                            <span className={cn(
                                                "text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md",
                                                visitor.status === 'Active' ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                                            )}>
                                                {visitor.status}
                                            </span>
                                            <p className="text-[10px] text-slate-400 font-bold mt-1.5 uppercase tracking-tighter">{visitor.type}</p>
                                        </div>
                                        <button className="p-2 text-slate-400 hover:text-slate-600">
                                            <MoreVertical size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                            <button className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">View All History</button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                        <h3 className="text-xl font-black">Active Invite</h3>
                        <p className="text-sm text-slate-400 mt-2 font-medium">Scan this code at the main gate for instant access.</p>

                        <div className="mt-8 flex justify-center">
                            <div className="bg-white p-4 rounded-3xl shadow-2xl">
                                <QrCode size={180} className="text-slate-900" />
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Guest</p>
                                <p className="text-sm font-bold">Olawale Johnson</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Valid Until</p>
                                <p className="text-sm font-bold">06:00 PM Today</p>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6">
                        <h3 className="text-lg font-black text-slate-900">Security Tips</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex shrink-0 items-center justify-center text-accent">
                                    <span className="text-xs font-black">01</span>
                                </div>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">Always pre-register service personnel for faster gate clearance.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex shrink-0 items-center justify-center text-accent">
                                    <span className="text-xs font-black">02</span>
                                </div>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">Shared QR codes are valid for one-time entry only.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
