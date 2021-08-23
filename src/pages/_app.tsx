import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { supabase } from '../api';
import { useRouter } from 'next/router'

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    /* eslint-disable */
    const router = useRouter();
    const user = supabase.auth.user();

    useEffect(() => {
        if (!user && !router.pathname.startsWith('/register')) { router.push('/login'); }
    }, [user]);
    return (<Component {...pageProps} />);
}

export default MyApp;
