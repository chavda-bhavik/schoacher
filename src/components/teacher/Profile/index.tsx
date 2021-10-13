import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { IconButton } from '@/components/IconButton';
import { ProfileView } from './ProfileView';
import { TeacherProfileType } from '@/interfaces';
import { Backdrop } from '@/components/Backdrop';
import { ProfileForm } from './ProfileForm';

// graphql
import { getTeacherInfo, GET_TEACHER_INFO } from '@/graphql/teacher/query';
import { updateTeacherInfo, UPDATE_TEACHER_INFO } from '@/graphql/teacher/mutation';
import { Wrapper } from '@/components/Wrapper';
import toast from '@/shared/toast';

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
    const {
        data: teacherInfo,
        loading: profileLoading,
        refetch,
        error: profileError,
    } = useQuery<getTeacherInfo>(GET_TEACHER_INFO);
    const [updateTeacher] = useMutation<updateTeacherInfo>(UPDATE_TEACHER_INFO);
    const [serverErrors, setServerErrors] = useState<FieldError[]>();
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [profileData, setProfileData] = useState<TeacherProfileType>(null);

    useEffect(() => {
        if (!profileLoading && teacherInfo) formatAndSetProfileData(teacherInfo.teacher);
    }, [profileLoading, teacherInfo]);

    const onProfileDataSubmit = async (
        formData?: TeacherProfileType,
        photo?: File,
        removePhoto?: boolean
    ) => {
        let apiData = {};
        // updating profile data
        if (formData) apiData = { ...formData };
        // updating photo
        else if (photo) apiData = { photo };
        // removing photo
        else if (removePhoto)
            apiData = {
                photo: null,
            };

        let { data } = await updateTeacher({
            variables: {
                data: apiData,
                teacherId: 2,
            },
        });
        if (data.updateTeacherInfo.entity) {
            refetch();
            toast.success('Profile Updated');
            setShowEditProfile(false);
        } else if (data.updateTeacherInfo.errors) setServerErrors(data.updateTeacherInfo.errors);
    };

    const formatAndSetProfileData = (data) => {
        let formattedData = { ...data };
        delete formattedData.__typename;
        delete formattedData.email;
        delete formattedData.photoUrl;
        setProfileData(formattedData);
    };

    const onProfileClose = () => {
        setShowEditProfile(false);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Personal Details</p>
                    <IconButton
                        icon="pencil"
                        onClick={() => setShowEditProfile(true)}
                        disabled={profileLoading || !!profileError?.message}
                    />
                </div>
                <div className="section-body py-0">
                    <Wrapper
                        loading={profileLoading}
                        error={profileError?.message}
                        onReset={refetch}
                    >
                        <ProfileView
                            onPhotoSelect={(photo: File) => onProfileDataSubmit(null, photo)}
                            onRemovePhoto={() => onProfileDataSubmit(null, null, true)}
                            profileData={profileData}
                            profileImageUrl={teacherInfo?.teacher?.photoUrl}
                        />
                    </Wrapper>
                </div>
            </section>
            <Backdrop show={showEditProfile} onClose={onProfileClose}>
                <ProfileForm
                    serverErrors={serverErrors}
                    profileData={profileData}
                    onDataSubmit={onProfileDataSubmit}
                    onClose={onProfileClose}
                />
            </Backdrop>
        </>
    );
};
