import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/api'
import Login from '../pages/login';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const users = supabase.auth.user();
    const session = supabase.auth.session();
    const [sessions, setSessions] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(users);
        setSessions(session);
    }, []);
    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, sessions }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated }: any = useAuth();
    if (!isAuthenticated && router.pathname.startsWith('/register') || router.pathname.startsWith('/forgotpassword') || router.pathname.startsWith('/forgotpassword#')) {
        return children;
    }
    if (!isAuthenticated && !router.pathname.startsWith('/login')) {
        return <Login />;
    }
    return children;
};