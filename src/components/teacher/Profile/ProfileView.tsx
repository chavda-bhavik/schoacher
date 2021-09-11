import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { TeacherProfileType } from '@/interfaces';
import { ContentPlaceholder } from '@/components/ContentPlaceholder';
import { arrayValuesCombiner } from '@/static/helper';
import constants from '@/static/constants';
import { Dialog } from '@/components/Dialog';

interface ProfileViewProps {
    profileData: TeacherProfileType;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profileData }) => {
    const [showDeleteImageDialog, setShowDeleteImageDialog] = useState<boolean>(false);

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
            <div className="relative">
                <div className="h-32 md:h-20 bg-gradient-to-br from-primary-blue to-primary-green absolute inset-0 rounded-b-sm" />
                <div className="p-6">
                    <div className="flex flex-col-reverse md:flex-row md:gap-2 justify-center md:justify-between">
                        <figure className="pt-0 md:pt-16 flex-grow">
                            {profileData?.headline ? (
                                <h1 className="font-sans font-medium text-2xl">{`${profileData?.headline}`}</h1>
                            ) : (
                                <ContentPlaceholder className="w-1/3" />
                            )}
                            {profileData?.firstName && profileData.lastName ? (
                                <h2 className="font-sans font-normal text-xl">{`${profileData?.firstName} ${profileData?.lastName}`}</h2>
                            ) : (
                                <ContentPlaceholder className="w-1/3" />
                            )}
                            {profileData?.address ? (
                                <p>{`${profileData?.address}`}</p>
                            ) : (
                                <ContentPlaceholder className="w-1/5 mt-1" />
                            )}
                            {profileData?.mobile1 ? (
                                <p>
                                    {arrayValuesCombiner(
                                        profileData?.mobile1,
                                        profileData?.mobile2
                                    )}
                                </p>
                            ) : (
                                <ContentPlaceholder className="w-1/5 mt-1" />
                            )}
                        </figure>
                        <figure className="text-center flex flex-col justify-between items-center py-3 md:py-0">
                            <div className="relative inline-flex w-36 h-36 rounded-full border-4 border-primary-dark float-none md:float-right">
                                <label htmlFor="image" className="cursor-pointer">
                                    {profileData?.photoUrl ? (
                                        <Image
                                            src={profileData?.photoUrl}
                                            alt="image"
                                            className="rounded-full mx-auto"
                                            height={144}
                                            width={144}
                                        />
                                    ) : (
                                        <ContentPlaceholder className="w-full h-full rounded-full" />
                                    )}
                                </label>
                                <input
                                    type="file"
                                    accept={constants.acceptImage}
                                    className="hidden"
                                    onChange={onProfileImageChange}
                                    id="image"
                                    name="image"
                                />
                            </div>
                            <p className="input-note text-center mt-1 ">
                                * Click on the image to change <i>or</i>{' '}
                                <u
                                    className="text-red-500 not-italic cursor-pointer"
                                    onClick={onProfileImageRemove}
                                >
                                    remove image
                                </u>
                            </p>
                        </figure>
                    </div>
                    {profileData?.about ? (
                        <div
                            className="unreset border-t mt-2 pt-2 border-gray-200"
                            dangerouslySetInnerHTML={{ __html: profileData?.about }}
                        />
                    ) : null}
                </div>
            </div>
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
