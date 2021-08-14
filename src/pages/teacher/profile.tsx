import React, { useState } from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';
import { Qualification } from '@/components/teacher/Qualification';
import { Experience } from '@/components/teacher/Experience';
import { Material } from '@/components/teacher/Material';
import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';

interface profileProps {}

const TeacherProfile: React.FC<profileProps> = ({}) => {
    const [showEditProfile, setShowEditProfile] = useState(false);

    return (
        <div className="bg-primary-lightBlue min-h-screen p-2 space-y-2">
            <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Icon icon="signOut" size="md" className="self-center" />
            </section>

            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Personal Details</p>
                    <IconButton icon="pencil" onClick={() => setShowEditProfile(true)} />
                </div>
                <div className="flex flex-col-reverse md:flex-row  items-center">
                    <div className="w-full md:w-8/12 lg:w-9/12 h-full space-y-2 py-2">
                        <div className="flex">
                            <div className="w-2/12 md:w-1/12">
                                <Icon
                                    icon="userCircle"
                                    size="sm"
                                    className="mx-auto cursor-pointer"
                                />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">
                                Chavda Bhavik Vajubhai
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-2/12 md:w-1/12">
                                <Icon icon="home" size="sm" className="mx-auto" />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">
                                B-501, Hari Om Complex, Modi Mohallo, A.K.Road, Surat-395008
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-2/12 text-xl md:w-1/12">
                                <Icon icon="phone" size="sm" className="mx-auto" />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">+91 9638837399</p>
                        </div>
                        <div className="flex">
                            <div className="w-2/12 md:w-1/12">
                                <Icon icon="envelop" size="sm" className="mx-auto" />
                            </div>
                            <p className="self-center text-lg w-10/12 md:w-11/12">
                                bhavik.chvda@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <div className="h-2/3 bg-shades-1 inset-0 z-10">
                            <img
                                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                alt="image"
                                className="rounded-full border-4 md:border-2 border-primary-dark p-1 my-2 mx-auto z-20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Qualification</p>
                    <Icon icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 py-2">
                    <Qualification
                        title="Bechlor of Commerce"
                        college="Navyug arts &amp; commerce collage, surat"
                        duration="2017-2019"
                    />
                    <Qualification
                        title="Bechlor of Commerce"
                        college="Navyug arts &amp; commerce collage, surat"
                        duration="2017-2019"
                    />
                    <Qualification
                        title="Bechlor of Commerce"
                        college="Navyug arts &amp; commerce collage, surat"
                        duration="2017-2019"
                    />
                </div>
            </section>

            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Experience</p>
                    <Icon icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 py-2">
                    <Experience />
                    <Experience />
                    <Experience />
                </div>
            </section>

            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Material</p>
                    <Icon icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 py-2">
                    <Material />
                    <Material />
                    <Material />
                </div>
            </section>

            <Backdrop show={showEditProfile} onClose={() => setShowEditProfile(false)}></Backdrop>
        </div>
    );
};

export default TeacherProfile;
