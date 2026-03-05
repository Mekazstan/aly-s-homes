'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type AuthStep = 'login' | 'signup' | 'otp' | 'authenticated';
type UserRole = 'resident' | 'admin';

interface AuthContextType {
    step: AuthStep;
    isAuthenticated: boolean;
    userRole: UserRole | null;
    user: any | null;
    login: (credentials: any, role?: UserRole) => Promise<void>;
    signup: (userData: any) => Promise<void>;
    verifyOtp: (otp: string) => Promise<void>;
    logout: () => void;
    setStep: (step: AuthStep) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState<AuthStep>('login');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState<UserRole | null>(null);
    const [user, setUser] = useState(null);
    const router = useRouter();
    const pathname = usePathname();

    // Simple persisted login simulation
    useEffect(() => {
        const storedAuth = localStorage.getItem('estate_auth');
        const storedRole = localStorage.getItem('estate_role') as UserRole;
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
            setUserRole(storedRole || 'resident');
            setStep('authenticated');
        }
    }, []);

    const login = async (credentials: any, role: UserRole = 'resident') => {
        // Simulation: login moves to OTP
        console.log(`Logging in as ${role}...`, credentials);
        setUserRole(role);
        setStep('otp');

        if (role === 'admin') {
            router.push('/admin/otp'); // Admins have their own OTP view
        } else {
            router.push('/otp');
        }
    };

    const signup = async (userData: any) => {
        // Residents only
        console.log('Signing up resident...', userData);
        setUserRole('resident');
        setStep('otp');
        router.push('/otp');
    };

    const verifyOtp = async (otp: string) => {
        // Simulation: verify OTP moves to correct dashboard
        console.log('Verifying OTP...', otp);
        setIsAuthenticated(true);
        setStep('authenticated');
        localStorage.setItem('estate_auth', 'true');
        localStorage.setItem('estate_role', userRole || 'resident');

        if (userRole === 'admin') {
            router.push('/admin');
        } else {
            router.push('/');
        }
    };

    const logout = () => {
        const currentRole = userRole;
        setIsAuthenticated(false);
        setStep('login');
        setUser(null);
        setUserRole(null);
        localStorage.removeItem('estate_auth');
        localStorage.removeItem('estate_role');

        if (currentRole === 'admin') {
            router.push('/admin/login');
        } else {
            router.push('/login');
        }
    };

    // Protect portal routes
    useEffect(() => {
        const publicRoutes = ['/login', '/signup', '/otp', '/admin/login', '/admin/otp'];
        const isAdminRoute = pathname.startsWith('/admin');

        if (!isAuthenticated && !publicRoutes.includes(pathname)) {
            if (isAdminRoute) {
                router.push('/admin/login');
            } else {
                router.push('/login');
            }
        } else if (isAuthenticated) {
            if (publicRoutes.includes(pathname)) {
                router.push(userRole === 'admin' ? '/admin' : '/');
            } else if (isAdminRoute && userRole !== 'admin') {
                router.push('/');
            } else if (!isAdminRoute && userRole === 'admin') {
                router.push('/admin');
            }
        }
    }, [isAuthenticated, userRole, pathname, router]);

    return (
        <AuthContext.Provider value={{ step, isAuthenticated, userRole, user, login, signup, verifyOtp, logout, setStep }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
