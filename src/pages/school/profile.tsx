import React from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';

import { SchoolProfile } from '@/components/school/profile';
import { SchoolDescription } from '@/components/school/description';
import { Requirements } from '@/components/school/requirements';
import { SchoolTopbar } from '@/components/Topbar';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
    return (
        <div className="school-section">
            <SchoolTopbar />

            <SchoolProfile />
            <SchoolDescription />
            <Requirements />
        </div>
    );
};

export default Profile;
