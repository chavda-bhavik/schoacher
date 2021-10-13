import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { AuthGuard } from '@/components/AuthGuard/AuthGuard';
import Toast from '@/components/Toast';
import client from '../apollo-client';
import '../styles/index.scss';
import 'react-datepicker/dist/react-datepicker.css';

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
    requireAuth?: boolean;
    authFor?: 'teacher' | 'employer';
};

function MyApp(props: AppProps) {
    const { Component, pageProps }: { Component: NextApplicationPage; pageProps: any } = props;

    return (
        <ApolloProvider client={client}>
            {Component.requireAuth ? (
                <AuthGuard>
                    <Component {...pageProps} />
                </AuthGuard>
            ) : (
                <Component {...pageProps} />
            )}
            <Toast />
        </ApolloProvider>
    );
}

export default MyApp;
