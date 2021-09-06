import React from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';

interface SchoolTopbarProps {}

export const SchoolTopbar: React.FC<SchoolTopbarProps> = ({}) => {
    return (
        <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
            <LogoGreen className="w-20 border-gray-600 text-gray-400" />
            <Icon icon="logIn" size="md" className="self-center" />
        </section>
    );
};
