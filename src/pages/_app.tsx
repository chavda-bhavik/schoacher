import React from 'react';
import { AppProps } from 'next/app';
import ProtectedRoutes from '../contexts/auth';
import { useRouter } from 'next/router';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <ProtectedRoutes router={router}>
            <Component {...pageProps} />
        </ProtectedRoutes >
    )
}

export default MyApp;
