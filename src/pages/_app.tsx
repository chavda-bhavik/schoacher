import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import client from '../apollo-client';
import '../styles/index.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Toast from '@/components/Toast';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
            <Toast />
        </ApolloProvider>
    );
}

export default MyApp;
