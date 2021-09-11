import React from 'react';

import { Profile } from '@/components/teacher/Profile';
import { Qualification } from '@/components/teacher/Qualification';
import { Material } from '@/components/teacher/Material';
import { Experience } from '@/components/teacher/Experience';
import { TeacherTopbar } from '@/components/Topbar';

interface profileProps {}

const TeacherProfile: React.FC<profileProps> = ({}) => {
    return (
        <div className="teacher-section">
            <TeacherTopbar />

            <Profile />
            <Qualification />
            <Experience />
            <Material />
        </div>
    );
};

export default TeacherProfile;
