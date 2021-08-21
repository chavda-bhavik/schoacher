import React from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';

import { SchoolProfile } from '@/components/school/profile';
import { SchoolDescription } from '@/components/school/description';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
    return (
        <div className="bg-primary-lightBlue min-h-screen p-2 space-y-2">
            <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Icon icon="logIn" size="md" className="self-center" />
            </section>

            <SchoolProfile />
            <SchoolDescription />
        </div>
    );
};

export default Profile;
