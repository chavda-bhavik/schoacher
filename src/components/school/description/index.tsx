import React, { useState, useEffect } from 'react';

import JsonData from '@/static/school-profile-data.json';
import { Icon } from '@/static/Icons';
import { SchoolProfileType } from '@/interfaces';
import { Backdrop } from '@/components/Backdrop';
import { DescriptionForm } from './DescriptionForm';
import { IconButton } from '@/components/IconButton';

interface SchoolDescriptionProps {}

export const SchoolDescription: React.FC<SchoolDescriptionProps> = ({}) => {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [profileData, setProfileData] = useState<SchoolProfileType>(null);

    useEffect(() => {
        // @ts-ignore
        setProfileData(JsonData.profile);
    }, []);

    const onClose = () => {
        setShowEditProfile(false);
    };
    const onDataSubmit = (data: SchoolProfileType) => {
        setProfileData(data);
        setShowEditProfile(false);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">About School</p>
                    <IconButton icon="pencil" onClick={() => setShowEditProfile(true)} />
                </div>
                <div className="section-body p-2">
                    <div className="icon-item">
                        <Icon icon="unOrderedList" size="sm" className="mx-2" />
                        <ul>
                            {profileData?.subjects &&
                                profileData?.subjects.map((subject) => (
                                    <li
                                        key={subject.id}
                                    >{`${subject.board} ${subject.standard} ${subject.subject}`}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="icon-item">
                        <Icon icon="document" size="sm" className="mx-2" />
                        <span
                            className="icon-item-title unreset"
                            dangerouslySetInnerHTML={{ __html: profileData?.about }}
                        ></span>
                    </div>
                </div>
            </section>
            <Backdrop show={showEditProfile} onClose={onClose}>
                <DescriptionForm
                    profileData={profileData}
                    onDataSubmit={onDataSubmit}
                    onClose={onClose}
                />
            </Backdrop>
        </>
    );
};
