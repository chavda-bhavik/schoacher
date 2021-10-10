import React from 'react';

import { Profile } from '@/components/teacher/Profile';
import { Qualification } from '@/components/teacher/Qualification';
import { Material } from '@/components/teacher/Material';
import { Experience } from '@/components/teacher/Experience';
import { TeacherTopbar } from '@/components/Topbar';

interface profileProps {
    requireAuth: boolean;
}

const TeacherProfile: FunctionComponent<profileProps> = ({}) => {
    return (
        <div className="teacher-section asdf">
            <TeacherTopbar />
            <Profile />
            <Qualification />
            <Experience />
            <Material />
        </div>
    );
};

TeacherProfile.requireAuth = true;
TeacherProfile.authFor = 'teacher';

export default TeacherProfile;
