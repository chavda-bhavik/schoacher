import React from 'react';

import { EmployerProfile } from '@/components/employer/profile';
import { Requirement } from '@/components/employer/requirements';
import { EmployerTopbar } from '@/components/Topbar';

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = ({}) => {
    return (
        <div className="employer-section">
            <EmployerTopbar />
            <EmployerProfile />
            <Requirement />
        </div>
    );
};

Profile.requireAuth = true;
Profile.authFor = 'employer';

export default Profile;
