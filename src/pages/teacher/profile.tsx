import React, { useEffect, useState } from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';
import { QualificationItem } from '@/components/teacher/Qualification/QualificationItem';
import { Experience } from '@/components/teacher/Experience/Experience';
import { Material } from '@/components/teacher/Material/Material';
import { IconButton } from '@/components/IconButton';
import { Qualification, Subject, TeacherProfileData } from '@/interfaces';

// Forms
import { ProfileForm } from '@/components/teacher/Profile/ProfileForm';
import { QualificationForm } from '@/components/teacher/Qualification/QualificationForm';
import { ExperienceForm } from '@/components/teacher/Experience/ExperienceForm';
import { MaterialForm } from '@/components/teacher/Material/MaterialForm';

import JsonData from '@/static/teacher-profile-data.json';
import { ProfileView } from '@/components/teacher/Profile/ProfileView';
import { toggleBodyOverflowHidden } from '@/static/helper';

interface profileProps {}

const TeacherProfile: React.FC<profileProps> = ({}) => {
    const [showQualification, setShowQualification] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showMaterial, setShowMaterial] = useState(false);

    const [profileData, setProfileData] = useState<TeacherProfileData>(null);
    const [qualificationData, setQualificationData] = useState<Qualification[]>([]);
    const [selectedQualification, setSelectedQualification] = useState<Qualification>(null);

    useEffect(() => {
        toggleBodyOverflowHidden(
            showQualification || showExperience || showEditProfile || showMaterial
        );
    }, [showQualification, showExperience, showEditProfile, showMaterial]);

    useEffect(() => {
        setProfileData(JsonData.profile);
        // @ts-ignore
        setQualificationData(JsonData.qualification);
    }, []);

    const onQualificationItemClick = (data: Qualification) => {
        setSelectedQualification(data);
        setShowQualification(true);
    };
    const onQualificationUpdate = (data: Qualification) => {
        let newQualifications = [...qualificationData];
        if (selectedQualification) {
            // edit
            newQualifications = newQualifications.map((qualification) => {
                if (qualification.id === selectedQualification.id) return { ...data };
                else return { ...qualification };
            });
        } else {
            newQualifications.push({ ...data });
        }
        setQualificationData(newQualifications);
        setShowQualification(false);
        setSelectedQualification(null);
    };

    return (
        <div className="bg-primary-lightBlue min-h-screen p-2 space-y-2">
            {/* Header */}
            <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Icon icon="logIn" size="md" className="self-center" />
            </section>

            {/* Profile */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Personal Details</p>
                    <IconButton icon="pencil" onClick={() => setShowEditProfile(true)} />
                </div>
                <div className="">
                    <ProfileView profileData={profileData} />
                </div>
            </section>

            {/* Qualification */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Qualification</p>
                    <IconButton
                        icon="plusCircle"
                        size="md"
                        onClick={() => setShowQualification(true)}
                    />
                </div>
                <div className="divide-y-2 py-2">
                    {qualificationData.map((qualification) => (
                        <QualificationItem
                            key={qualification.id}
                            qualification={qualification}
                            onClick={onQualificationItemClick}
                        />
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Experience</p>
                    <IconButton
                        icon="plusCircle"
                        size="md"
                        onClick={() => setShowExperience(true)}
                    />
                </div>
                <div className="divide-y-2 py-2">
                    <Experience />
                    <Experience />
                    <Experience />
                </div>
            </section>

            {/* Material */}
            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Material</p>
                    <IconButton onClick={() => setShowMaterial(true)} icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 py-2">
                    <Material />
                    <Material />
                    <Material />
                </div>
            </section>

            {/* Edit Profile */}
            <ProfileForm
                onClose={() => setShowEditProfile(false)}
                profileData={profileData}
                onDataSubmit={(data) => setProfileData(data)}
                show={showEditProfile}
            />

            {/* Qualification */}
            {showQualification && (
                <QualificationForm
                    show={showQualification}
                    selectedQualification={selectedQualification}
                    onClose={() => {
                        setSelectedQualification(null);
                        setShowQualification(false);
                    }}
                    onQualificationSubmit={onQualificationUpdate}
                />
            )}

            {/* Experience */}
            {showExperience && <ExperienceForm onClose={() => setShowExperience(false)} />}

            {/* Material */}
            {showMaterial && <MaterialForm onClose={() => setShowMaterial(false)} />}
        </div>
    );
};

export default TeacherProfile;
