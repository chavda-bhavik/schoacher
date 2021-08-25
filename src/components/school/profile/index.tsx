import React, { useState, useEffect } from 'react';

import JsonData from '@/static/school-profile-data.json';
import { IconButton } from '@/components/IconButton';
import { SchoolProfileType } from '@/interfaces';
import { IconItem } from '@/components/IconItem';
import { combineAddress, arrayValuesCombiner } from '@/static/helper';
import { Backdrop } from '@/components/Backdrop';
import { SchoolProfileForm } from './SchoolProfileForm';

interface SchoolProfileProps {}

export const SchoolProfile: React.FC<SchoolProfileProps> = ({}) => {
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
                    <p className="title">School Details</p>
                    <IconButton icon="pencil" onClick={() => setShowEditProfile(true)} />
                </div>
                <figure className="flex flex-col-reverse md:flex-row justify-between p-2">
                    <div className="section-body flex flex-col justify-center">
                        <IconItem icon="pinAlt">{profileData?.since || ''}</IconItem>
                        <IconItem icon="home">
                            {profileData?.address ? combineAddress(profileData.address) : ''}
                        </IconItem>
                        <IconItem icon="phone">
                            {arrayValuesCombiner(profileData?.mobile1, profileData?.mobile2)}
                        </IconItem>
                        <IconItem icon="inbox">{profileData?.email || ''}</IconItem>
                    </div>
                    <div>
                        <img
                            src="https://source.unsplash.com/umhyDLYKfLM/350x250"
                            alt="School image"
                            className="rounded-md p-1 border-2 border-darker mx-auto"
                        />
                    </div>
                </figure>
            </section>
            <Backdrop show={showEditProfile} onClose={onClose}>
                <SchoolProfileForm
                    profileData={profileData}
                    onClose={onClose}
                    onDataSubmit={onDataSubmit}
                />
            </Backdrop>
        </>
    );
};
