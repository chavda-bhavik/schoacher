import React from 'react';
import { AppProps } from 'next/app';
import { ProtectRoute, AuthProvider } from '../contexts/auth'
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ProtectRoute>
                <Component {...pageProps} />
            </ProtectRoute>
        </AuthProvider>
    )
}

export default MyApp;
