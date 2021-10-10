import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { LogoGreen } from '@/shared/SVGs';
import Link from 'next/link';

import { LOGOUT, logout } from '@/graphql/shared/mutation';
import { IconButton } from '../IconButton';

interface EmployerTopbarProps {}

export const EmployerTopbar: React.FC<EmployerTopbarProps> = ({}) => {
    const router = useRouter();
    const [logout, { loading, data }] = useMutation<logout>(LOGOUT);

    useEffect(() => {
        if (!loading && data?.logout) {
            localStorage.clear();
            router.push('/login');
        }
    }, [loading, data, router]);

    return (
        <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
            <div className="flex flex-row items-center">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Link href="/employer/applications">
                    <a className="font-bold text-primary-green mx-2">Applications</a>
                </Link>
            </div>
            <IconButton
                onClick={logout}
                icon="logIn"
                size="md"
                className="self-center"
                loading={loading}
            />
        </section>
    );
};
