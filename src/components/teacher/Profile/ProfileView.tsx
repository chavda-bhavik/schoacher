import React from 'react';
import { Icon } from '@/static/Icons';
import { TeacherProfileData } from '@/interfaces';

interface ProfileViewProps {
    profileData: TeacherProfileData;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profileData }) => {
    return (
        <>
            <div className="relative">
                <div className="h-20 bg-gradient-to-br from-primary-blue to-primary-green absolute inset-0 rounded-b-sm" />
                <div className="p-6">
                    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between">
                        <figure className="pt-0 md:pt-16">
                            <h1 className="font-sans font-medium text-2xl">{`${profileData?.firstName} ${profileData?.lastName}`}</h1>
                            <p>{`${profileData?.address}`}</p>
                            <p>{`${profileData?.mobile1}, ${profileData?.mobile2 || ''}`}</p>
                        </figure>
                        <figure className="text-center">
                            <div className="relative inline-flex w-36 h-36 rounded-full border-4 border-primary-dark float-none md:float-right">
                                <img
                                    src={profileData?.photoUrl}
                                    alt="image"
                                    className="rounded-full mx-auto"
                                />
                            </div>
                        </figure>
                    </div>
                </div>
                {/* <div className="flex flex-row">
                    <div className="w-full md:w-8/12 lg:w-9/12 h-full space-y-2 py-2">
                        <p>{`${profileData?.firstName} ${profileData?.lastName}`}</p>
                        <p>{`${profileData?.address}`}</p>
                        <p>{`${profileData?.mobile1}, ${profileData?.mobile2 || ''}`}</p>
                    </div>
                        <p>{profileData?.email}</p>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <img
                            src={profileData?.photoUrl}
                            alt="image"
                            className="rounded-full border-4 border-gray-800 mx-auto z-20 absolute top-6"
                        />
                    </div>
                </div> */}
            </div>
        </>
    );
};