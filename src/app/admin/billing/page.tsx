'use client';

import React from 'react';
import {
    CreditCard,
    Plus,
    Search,
    Download,
    TrendingUp,
    TrendingDown,
    DollarSign,
    Clock,
    ArrowUpRight,
    CheckCircle2,
    AlertCircle,
    Receipt,
    Calendar,
    ChevronRight,
    Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
    { label: 'Total Revenue (March)', value: '₦14,250,000', change: '+12.5%', trend: 'up' },
    { label: 'Pending Collections', value: '₦2,105,000', change: '84 Units', trend: 'neutral' },
    { label: 'Electricity Credits', value: '45,200 kWh', change: '-4%', trend: 'down' },
    { label: 'Other Service Fees', value: '₦840,000', change: '+2.1%', trend: 'up' },
];

const transactions = [
    { id: 'TX-901', resident: 'Sarah Williams', unit: '402-B', type: 'Service Charge', amount: '₦120,000', date: 'Mar 15, 2024', status: 'Confirmed' },
    { id: 'TX-902', resident: 'John Doe', unit: '105-A', type: 'Electricity Purchase', amount: '₦45,000', date: 'Mar 15, 2024', status: 'Pending' },
    { id: 'TX-903', resident: 'Alice Smith', unit: '204-C', type: 'Maintenance Fee', amount: '₦12,500', date: 'Mar 14, 2024', status: 'Confirmed' },
    { id: 'TX-904', resident: 'Robert Wilson', unit: '310-B', type: 'Service Charge', amount: '₦120,000', date: 'Mar 14, 2024', status: 'Failed' },
];

export default function AdminBilling() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Revenue Control</h1>
                    <p className="text-slate-500 font-bold">Financial operations and billing management</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200 transition-all">
                        <Download size={18} className="text-accent" />
                        Export Audit
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 gold-gradient text-black text-sm font-black rounded-xl shadow-lg shadow-gold-start/20 transition-all hover:scale-105 active:scale-95">
                        <Plus size={18} />
                        Bulk Invoice
                    </button>
                </div>
            </div>

            {/* Financial Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="glass-effect-dark p-6 rounded-3xl border border-slate-200 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                                {i === 0 ? <TrendingUp size={20} /> : i === 1 ? <TrendingDown size={20} /> : i === 2 ? <DollarSign size={20} /> : <Receipt size={20} />}
                            </div>
                            <div className={cn(
                                "text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg",
                                stat.trend === 'up' ? "bg-emerald-500/10 text-emerald-500" : stat.trend === 'down' ? "bg-red-500/10 text-red-500" : "bg-slate-100 text-slate-400"
                            )}>
                                {stat.change}
                            </div>
                        </div>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Transaction History */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Clock size={22} className="text-accent" />
                            Financial Log
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search TXN..."
                                    className="bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-accent/20 w-40 font-bold"
                                />
                            </div>
                            <button className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="glass-effect-dark rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Ref ID</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Resident</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Type</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                        <th className="px-6 py-4 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {transactions.map((tx) => (
                                        <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-5">
                                                <span className="text-xs font-mono text-slate-400 group-hover:text-accent transition-colors">{tx.id}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="text-sm font-bold text-slate-900 leading-none mb-1">{tx.resident}</div>
                                                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{tx.unit}</div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-xs text-slate-500 font-bold">{tx.type}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-sm font-black text-slate-900">{tx.amount}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className={cn(
                                                    "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest w-fit border",
                                                    tx.status === 'Confirmed' ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" :
                                                        tx.status === 'Pending' ? "bg-orange-500/5 text-orange-500 border-orange-500/20" :
                                                            "bg-red-500/5 text-red-500 border-red-500/20"
                                                )}>
                                                    {tx.status}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-slate-300 hover:text-slate-900 transition-colors">
                                                    <ChevronRight size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Billing Tools */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Receipt size={22} className="text-accent" />
                        Billing Tools
                    </h3>

                    <div className="space-y-4">
                        {[
                            { title: 'Tariff Configuration', desc: 'Set per unit rates for utilities', icon: Calendar },
                            { title: 'Debt Recovery Control', desc: 'Automated reminders for arrears', icon: AlertCircle },
                            { title: 'Voucher Generation', desc: 'Print physical electricity codes', icon: Receipt },
                            { title: 'Payout Management', desc: 'Settle service providers', icon: DollarSign },
                        ].map((tool, i) => (
                            <button key={i} className="w-full glass-effect-dark p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-accent/30 hover:scale-[1.02] transition-all text-left flex items-start gap-4 group">
                                <div className="p-2.5 rounded-xl bg-slate-50 group-hover:bg-accent/10 text-slate-400 group-hover:text-accent transition-colors">
                                    <tool.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 mb-0.5">{tool.title}</p>
                                    <p className="text-[11px] text-slate-500 font-bold">{tool.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="glass-effect-dark p-6 rounded-3xl border border-accent/20 shadow-sm mt-10 relative overflow-hidden group">
                        <div className="z-10 relative">
                            <h4 className="text-lg font-black text-slate-900 mb-2">Operational Reserve</h4>
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-3xl font-black text-accent font-serif tracking-tight">₦24.8M</span>
                                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest pb-1">+1.2M This Week</span>
                            </div>
                            <button className="w-full py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-900 transition-all">
                                View Reserve Audit
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TrendingUp size={80} strokeWidth={3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
