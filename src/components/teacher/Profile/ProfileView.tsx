import React from 'react';
import Image from 'next/image';
import { TeacherProfileType } from '@/interfaces';
import { ContentPlaceholder } from '@/components/ContentPlaceholder';
import { arrayValuesCombiner } from '@/static/helper';

interface ProfileViewProps {
    profileData: TeacherProfileType;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profileData }) => {
    return (
        <>
            <div className="relative">
                <div className="h-32 md:h-20 bg-gradient-to-br from-primary-blue to-primary-green absolute inset-0 rounded-b-sm" />
                <div className="p-6">
                    <div className="flex flex-col-reverse md:flex-row md:gap-2 justify-center md:justify-between">
                        <figure className="pt-0 md:pt-16 flex-grow">
                            {profileData?.firstName && profileData.lastName ? (
                                <h1 className="font-sans font-medium text-2xl">{`${profileData?.firstName} ${profileData?.lastName}`}</h1>
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
                        <figure className="text-center">
                            <div className="relative inline-flex w-36 h-36 rounded-full border-4 border-primary-dark float-none md:float-right">
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
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    );
};
