import React from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';

import { Profile } from '@/components/teacher/Profile';
import { Qualification } from '@/components/teacher/Qualification';
import { Material } from '@/components/teacher/Material';
import { Experience } from '@/components/teacher/Experience';

interface profileProps {}

const TeacherProfile: React.FC<profileProps> = ({}) => {
    return (
        <div className="bg-primary-lightBlue min-h-screen p-2 space-y-2">
            {/* Header */}
            <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Icon icon="logIn" size="md" className="self-center" />
            </section>

            <Profile />
            <Qualification />
            <Experience />
            <Material />
        </div>
    );
};

export default TeacherProfile;
