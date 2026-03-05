import React from 'react';
import {
    Receipt,
    CreditCard,
    History,
    ArrowUpRight,
    Download,
    Zap,
    Shield,
    Droplets,
    Calendar,
    ChevronRight,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BillsPage() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Bills & Utilities</h1>
                <p className="text-slate-500 mt-2 font-medium">Manage your estate payments and track utility consumption.</p>
            </div>

            {/* Consumption Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: Zap, label: "Electricity", balance: "₦45,000.00", status: "Low Balance", color: "text-amber-500", bg: "bg-amber-50" },
                    { icon: Droplets, label: "Water", balance: "₦12,500.00", status: "Optimal", color: "text-blue-500", bg: "bg-blue-50" },
                    { icon: Shield, label: "Security Levy", balance: "₦25,000.00", status: "Due in 5 days", color: "text-primary", bg: "bg-primary/5" },
                ].map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <div key={i} className="bg-white p-8 rounded-3x border border-slate-200 shadow-sm group hover:border-primary/20 transition-all rounded-[2rem]">
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", card.bg, card.color)}>
                                <Icon size={28} />
                            </div>
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{card.label}</p>
                            <h3 className="text-2xl font-black text-slate-900 mt-2">{card.balance}</h3>
                            <p className={cn("text-xs font-bold mt-4 flex items-center gap-1.5", card.color)}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                {card.status}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Payment History */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                            <History size={22} className="text-primary" />
                            Payment History
                        </h3>
                        <button className="flex items-center gap-2 text-primary text-sm font-bold hover:underline">
                            <Download size={16} /> Export PDF
                        </button>
                    </div>

                    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                        <div className="divide-y divide-slate-100">
                            {[
                                { type: "Service Charge", date: "Oct 12, 2023", amount: "₦150,000.00", status: "Paid" },
                                { type: "Electricity Token", date: "Oct 08, 2023", amount: "₦50,000.00", status: "Paid" },
                                { type: "Water Bill", date: "Sep 30, 2023", amount: "₦12,500.00", status: "Paid" },
                                { type: "Security Levy", date: "Sep 28, 2023", amount: "₦25,000.00", status: "Paid" },
                            ].map((item, i) => (
                                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            <CreditCard size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{item.type}</p>
                                            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-1">
                                                <Calendar size={12} /> {item.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-slate-900">{item.amount}</p>
                                        <div className="flex items-center justify-end gap-1.5 mt-1 text-emerald-600">
                                            <CheckCircle2 size={12} />
                                            <span className="text-[10px] font-black uppercase tracking-tighter">{item.status}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
                            <button className="text-sm font-bold text-slate-400 hover:text-primary transition-colors">Load more transactions</button>
                        </div>
                    </div>
                </div>

                {/* Quick Pay */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-black text-slate-900">Summary & Pay</h3>
                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                        <div className="relative z-10 space-y-8">
                            <div>
                                <p className="text-xs text-white/50 font-black uppercase tracking-widest">Total Outstanding</p>
                                <h2 className="text-4xl font-black mt-2">₦0.00</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm py-3 border-b border-white/10">
                                    <span className="text-white/60 font-medium">Service Charge (Nov)</span>
                                    <span className="font-bold">Pending</span>
                                </div>
                                <div className="flex items-center justify-between text-sm py-3 border-b border-white/10">
                                    <span className="text-white/60 font-medium">Waste Management</span>
                                    <span className="font-bold">₦0.00</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                                Make a Payment
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
                    </div>

                    <div className="bg-primary/5 rounded-[2rem] p-6 border border-primary/10">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex shrink-0 items-center justify-center text-primary">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 leading-tight">Next Billing Cycle</p>
                                <p className="text-xs text-slate-500 mt-1 font-medium italic">Your next service charge will be generated on November 1st, 2023.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
