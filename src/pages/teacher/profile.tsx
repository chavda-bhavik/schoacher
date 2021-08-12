import React from 'react';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';
import { Qualification } from '@/components/teacher/Qualification';
import { Experience } from '@/components/teacher/Experience';
import { Material } from '@/components/teacher/Material';

interface profileProps {}

const TeacherProfile: React.FC<profileProps> = ({}) => {
    return (
        <div className="bg-primary-lightBlue min-h-screen p-2 space-y-2">
            <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Icon icon="signOut" size="md" className="self-center" />
            </section>

            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Personal Details</p>
                    <Icon icon="pencil" size="sm" />
                </div>
                <div className="flex flex-col-reverse md:flex-row  items-center">
                    <div className="w-full h-full space-y-3 py-2">
                        <div className="flex">
                            <Icon icon="userCircle" size="sm" className="mx-4 w-1/12" />
                            <p className="self-center w-11/12">Chavda Bhavik Vajubhai</p>
                        </div>
                        <div className="flex flex-row">
                            <Icon icon="home" size="sm" className="mx-4 w-1/12" />
                            <p className="self-center w-11/12">
                                B-501, Hari Om Complex, Modi Mohallo, A.K.Road, Surat-395008
                            </p>
                        </div>
                        <div className="flex">
                            <Icon icon="phone" size="sm" className="mx-4 w-1/12 " />
                            <p className="self-center w-11/12">+91 9638837399</p>
                        </div>
                        <div className="flex">
                            <Icon icon="email" size="sm" className="mx-4 w-1/12" />
                            <p className="self-center w-11/12">bhavik.chvda@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                            alt="image"
                            className="rounded-full border-2 border-primary-dark p-1 my-2"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-dustWhite border-primary-dark border-2 rounded-md">
                <div className="flex justify-between flex-row border-b border-primary-dark p-2 w-full">
                    <p className="font-medium text-lg">Qualification</p>
                    <Icon icon="pencil" size="sm" />
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
                    <Icon icon="pencil" size="sm" />
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
                    <Icon icon="pencil" size="sm" />
                </div>
                <div className="divide-y-2 py-2">
                    <Material />
                    <Material />
                    <Material />
                </div>
            </section>
        </div>
    );
};

export default TeacherProfile;
