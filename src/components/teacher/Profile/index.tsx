import React, { useState, useEffect } from 'react';

import { IconButton } from '@/components/IconButton';
import { ProfileView } from './ProfileView';
import { TeacherProfileType } from '@/interfaces';
import JsonData from '@/static/teacher-profile-data.json';
import { Backdrop } from '@/components/Backdrop';
import { ProfileForm } from './ProfileForm';

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [profileData, setProfileData] = useState<TeacherProfileType>(null);

    useEffect(() => {
        setProfileData(JsonData.profile);
    }, []);

    const onProfileDataSubmit = (data: TeacherProfileType) => {
        setProfileData(data);
        setShowEditProfile(false);
    };
    const onProfileClose = () => {
        setShowEditProfile(false);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Personal Details</p>
                    <IconButton icon="pencil" onClick={() => setShowEditProfile(true)} />
                </div>
                <div className="section-body py-0">
                    <ProfileView profileData={profileData} />
                </div>
            </section>
            <Backdrop show={showEditProfile} onClose={onProfileClose}>
                <ProfileForm
                    profileData={profileData}
                    onDataSubmit={onProfileDataSubmit}
                    onClose={onProfileClose}
                />
            </Backdrop>
        </>
    );
};
