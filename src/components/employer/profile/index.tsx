import React, { useState, useEffect, ChangeEvent } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { IconButton } from '@/components/IconButton';
import { Backdrop } from '@/components/Backdrop';
import { EmployerProfileForm } from './EmployerProfileForm';
import { ProfileView } from './ProfileView';
import { Wrapper } from '@/components/Wrapper';
import { EmployerProfileBase, SubjectFormType } from '@/interfaces';

// graphql
import { GET_INFO, getInfo } from '@/graphql/employer/query';
import {
    UPDATE_INFO,
    updateEmployerInfo,
    updateEmployerInfoVariables,
} from '@/graphql/employer/mutation';

interface EmployerProfileProps {}

export const EmployerProfile: React.FC<EmployerProfileProps> = ({}) => {
    const { loading, data } = useQuery<getInfo>(GET_INFO);
    const [updateInfo] = useMutation<updateEmployerInfo, updateEmployerInfoVariables>(UPDATE_INFO, {
        refetchQueries: [GET_INFO],
    });
    const [profileData, setProfileData] = useState<EmployerProfileBase>(null);
    const [showEditProfile, setShowEditProfile] = useState(false);

    useEffect(() => {
        if (!loading && data) setProfileData(data.employer);
    }, [loading, data]);

    const onClose = () => {
        setShowEditProfile(false);
    };

    const onDataSubmit = (formData: EmployerProfileBase, subjects?: SubjectFormType[]) => {
        let variables: updateEmployerInfoVariables = {
            data: formData,
        };
        if (subjects) variables.subjects = subjects;
        updateInfo({ variables });
        setShowEditProfile(false);
    };

    const onProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        onDataSubmit({ photo: e.target.files[0] });
    };
    const onProfileImageRemove = () => {
        onDataSubmit({ photo: null });
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Profile Details</p>
                    <IconButton icon="pencil" onClick={() => setShowEditProfile(true)} />
                </div>
                <div className="p-2">
                    <Wrapper loading={loading}>
                        <ProfileView
                            profileData={profileData}
                            onImageChange={onProfileImageChange}
                            onImageRemove={onProfileImageRemove}
                        />
                    </Wrapper>
                </div>
            </section>
            <Backdrop show={showEditProfile} onClose={onClose}>
                <EmployerProfileForm
                    profileData={profileData}
                    onClose={onClose}
                    onDataSubmit={onDataSubmit}
                />
            </Backdrop>
        </>
    );
};
