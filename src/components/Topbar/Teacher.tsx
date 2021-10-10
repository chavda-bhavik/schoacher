import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';

import { LogoShort } from '@/shared/SVGs';
import { LOGOUT, logout } from '@/graphql/shared/mutation';
import { IconButton } from '../IconButton';

interface TeacherTopbarProps {}

export const TeacherTopbar: React.FC<TeacherTopbarProps> = ({}) => {
    const router = useRouter();
    const [logout, { loading, data }] = useMutation<logout>(LOGOUT);

    useEffect(() => {
        if (!loading && data?.logout) {
            localStorage.clear();
            router.push('/login');
        }
    }, [loading, data, router]);

    const logoutHandler = () => {
        logout();
    };
    return (
        <section className="flex justify-between p-2 flex-row bg-gray-50 border-primary-dark border-2 rounded-md">
            <div className="flex flex-row items-center">
                <LogoShort className="w-14 border-gray-600 text-gray-400" />
                <Link href="/teacher/jobs">
                    <a className="font-bold text-primary-green mx-2">Jobs</a>
                </Link>
            </div>
            <IconButton
                icon="logIn"
                size="md"
                className="self-center"
                onClick={logoutHandler}
                loading={loading}
            />
        </section>
    );
};
