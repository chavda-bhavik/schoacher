import React from 'react';
import Link from 'next/link';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';

interface EmployerTopbarProps {}

export const EmployerTopbar: React.FC<EmployerTopbarProps> = ({}) => {
    return (
        <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
            <LogoGreen className="w-20 border-gray-600 text-gray-400" />
            <div className="flex flex-row items-center">
                <Link href="/employer/applications">
                    <a className="font-bold text-primary-green mx-2">Applications</a>
                </Link>
                <Icon icon="logIn" size="md" className="self-center" />
            </div>
        </section>
    );
};
