'use client';

import React from 'react';
import { useAuth } from './AuthContext';
import DashboardLayout from '../layout/DashboardLayout';
import AdminLayout from '../layout/AdminLayout';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, userRole } = useAuth();

    if (!isAuthenticated) {
        return <main className="min-h-screen">{children}</main>;
    }

    if (userRole === 'admin') {
        return <AdminLayout>{children}</AdminLayout>;
    }

    return <DashboardLayout>{children}</DashboardLayout>;
}
