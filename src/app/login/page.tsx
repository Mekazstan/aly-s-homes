'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Home, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';
import { cn } from '@/lib/utils';

export default function LoginPage() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(formData);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#d4af35]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#d4af35]/5 blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[450px] z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4af35] to-[#aa8b2c] mb-6 shadow-[0_0_40px_rgba(212,175,53,0.3)] rotate-3">
                        <ShieldCheck className="text-black w-10 h-10 -rotate-3" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">
                        Welcome Home
                    </h1>
                    <p className="text-slate-500">Access your luxury estate dashboard</p>
                </div>

                <div className="glass-effect-dark p-8 rounded-2xl border border-slate-200 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 ml-1">Resident Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d4af35]" />
                                <input
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d4af35]/50 transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-sm font-medium text-slate-700">Password</label>
                                <Link href="#" className="text-xs text-[#d4af35] hover:underline">Forgot Password?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d4af35]" />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d4af35]/50 transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full gold-gradient text-black font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(212,175,53,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,53,0.4)] transition-all group"
                        >
                            <div className="flex items-center justify-center gap-2">
                                Enter Portal
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                        <p className="text-slate-500 text-sm">
                            New to the estate?{' '}
                            <Link href="/signup" className="text-[#d4af35] hover:underline font-bold">
                                Request Registration
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-6 text-slate-200">
                    <div className="h-px w-12 bg-current" />
                    <Home className="w-5 h-5" />
                    <div className="h-px w-12 bg-current" />
                </div>
                <p className="text-center mt-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Abuja Luxury Estates · Secure Access
                </p>
            </div>
        </div>
    );
}
