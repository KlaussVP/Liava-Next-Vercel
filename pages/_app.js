import React, { useEffect } from 'react';
import '../assets/styles/reset.css';
import '../assets/styles/main.css';
import { UserProvider } from '../contexts/UserContext';
import { CompanyProvider } from '../contexts/CompanyContext';

export default function EntryPoint({ Component, pageProps }) {
    return (
        <UserProvider>
            <CompanyProvider>
                <Component {...pageProps}/>
            </CompanyProvider>
        </UserProvider>
    );
}
