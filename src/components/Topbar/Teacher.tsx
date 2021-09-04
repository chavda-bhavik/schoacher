import React from 'react';
import Link from 'next/link';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';

interface TeacherTopbarProps {}

export const TeacherTopbar: React.FC<TeacherTopbarProps> = ({}) => {
    return (
        <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
            <LogoGreen className="w-20 border-gray-600 text-gray-400" />
            <div className="flex flex-row items-center">
                <Link href="/teacher/jobs">
                    <a className="font-bold text-primary-green mx-2">Jobs</a>
                </Link>
                <Icon icon="logIn" size="md" className="self-center" />
            </div>
        </section>
    );
};
