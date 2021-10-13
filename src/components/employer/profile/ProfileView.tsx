import React, { ChangeEvent } from 'react';
import Image from 'next/image';

import { IconItem } from '@/components/IconItem';

import { arrayValuesCombiner, combineAddress } from '@/shared/helper';
import { Icon } from '@/shared/Icons';
import constants from '@/shared/constants';
import { EmployerProfileType } from '@/interfaces';

interface ProfileViewProps {
    profileData: EmployerProfileType;
    onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onImageRemove: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
    profileData,
    onImageChange,
    onImageRemove,
}) => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row justify-between">
                <div className="section-body flex flex-col justify-center">
                    <IconItem icon="home">
                        {profileData?.address ? combineAddress(profileData.address) : ''}
                    </IconItem>
                    <IconItem icon="phone">
                        {arrayValuesCombiner(profileData?.mobile1, profileData?.mobile2)}
                    </IconItem>
                    <div className="icon-item">
                        <Icon icon="unOrderedList" size="sm" className="mx-2" />
                        <ul>
                            {profileData?.subjects &&
                                profileData?.subjects.map((subject) => (
                                    <li
                                        key={subject.id}
                                    >{`${subject.board.value} ${subject.standard.value} ${subject.subject.value}`}</li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="image">
                            {profileData?.photoUrl && (
                                <Image
                                    src={profileData.photoUrl}
                                    alt="Employer image"
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
                            onChange={onImageChange}
                            name="image"
                        />
                    </div>
                    <p className="input-note text-center mt-1">
                        * Click on the image to change <i>or</i>{' '}
                        <u
                            className="text-red-500 not-italic cursor-pointer"
                            onClick={onImageRemove}
                        >
                            remove image
                        </u>
                    </p>
                </div>
            </div>
            {profileData?.about ? (
                <div
                    className="unreset border-t mt-2 pt-2 border-gray-200"
                    dangerouslySetInnerHTML={{ __html: profileData?.about }}
                />
            ) : null}
        </>
    );
};
