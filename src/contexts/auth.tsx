import React, { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/api'
import Login from '../pages/login';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const users = supabase.auth.user();
    return (
        <AuthContext.Provider value={{ isAuthenticated: !!users, users }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated }: any = useAuth();

    if (!isAuthenticated && !router.pathname.startsWith('/login')) {
        return <Login />;
    }
    return children;
};