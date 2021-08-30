import React, { useState, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';

import JsonData from '@/static/school-profile-data.json';
import { IconButton } from '@/components/IconButton';
import { SchoolProfileType } from '@/interfaces';
import { IconItem } from '@/components/IconItem';
import { combineAddress, arrayValuesCombiner } from '@/static/helper';
import { Backdrop } from '@/components/Backdrop';
import { SchoolProfileForm } from './SchoolProfileForm';
import constants from '@/static/constants';
import { Dialog } from '@/components/Dialog';

interface SchoolProfileProps {}

export const SchoolProfile: React.FC<SchoolProfileProps> = ({}) => {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [profileData, setProfileData] = useState<SchoolProfileType>(null);
    const [showDeleteImageDialog, setShowDeleteImageDialog] = useState<boolean>(false);

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

    const onProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files[0]);
        // upload image & update profile data to reflact
    };
    const onProfileImageRemove = () => {
        console.log('remove profile image');
        setShowDeleteImageDialog(true);
        // remove uploaded image and set default school image
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
                        <div className="flex items-center justify-center">
                            <label htmlFor="image">
                                {profileData && (
                                    <Image
                                        src={profileData.profileImageUrl}
                                        alt="School image"
                                        width="350"
                                        height="250"
                                        className="rounded-md p-1 border-2 border-darker cursor-pointer"
                                    />
                                )}
                            </label>
                            <input
                                type="file"
                                accept={constants.acceptImage}
                                className="hidden"
                                id="image"
                                onChange={onProfileImageChange}
                                name="image"
                            />
                        </div>
                        <p className="input-note text-center mt-1">
                            * Click on the image to change <i>or</i>{' '}
                            <u
                                className="text-red-500 not-italic cursor-pointer"
                                onClick={onProfileImageRemove}
                            >
                                remove image
                            </u>
                        </p>
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
            <Dialog
                show={showDeleteImageDialog}
                variant="danger"
                onClose={() => setShowDeleteImageDialog(false)}
                title="Remove Profile Image?"
                message="Are you sure? Do you want to remove your profile image?"
                cancelButton={{
                    text: 'Cancel',
                    onClick: () => console.log('cancelled'),
                }}
                dangerButton={{
                    text: 'Yes',
                    onClick: () => console.log('delete'),
                }}
            />
        </>
    );
};
