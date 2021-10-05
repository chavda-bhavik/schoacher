import React from 'react';

import { EmployerProfile } from '@/components/employer/profile';
import { Requirements } from '@/components/employer/requirements';
import { EmployerTopbar } from '@/components/Topbar';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
    return (
        <div className="employer-section">
            <EmployerTopbar />

            <EmployerProfile />
            <Requirements />
        </div>
    );
};

export default Profile;
