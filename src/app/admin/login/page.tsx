'use client';

import React, { useState } from 'react';
import { Mail, Lock, Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthContext';

export default function AdminLoginPage() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(formData, 'admin');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Orbs - Different color for Admin (Deep Navy/Gold) */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#1414b8]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#d4af35]/5 blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[450px] z-10 text-center">
                <div className="mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1414b8] to-[#0a0a5e] mb-6 shadow-[0_0_40px_rgba(20,20,184,0.3)] rotate-3">
                        <Shield className="text-white w-10 h-10 -rotate-3" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">
                        Control Center
                    </h1>
                    <p className="text-slate-500 font-medium">Estate Administrator Secure Login</p>
                </div>

                <div className="glass-effect-dark p-8 rounded-2xl border border-slate-200 shadow-xl text-left">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 ml-1">Admin Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                                <input
                                    type="email"
                                    required
                                    placeholder="admin@abuja-estates.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 ml-1">Secret Key</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full gold-gradient text-black font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(212,175,53,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,53,0.4)] transition-all group"
                        >
                            <div className="flex items-center justify-center gap-2">
                                Authenticate
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
                        Internal Access Only
                    </p>
                </div>

                <p className="text-center mt-12 text-[10px] uppercase tracking-widest text-slate-300 font-bold">
                    System Version 2.0.4 · ALE Admin
                </p>
            </div>
        </div>
    );
}
