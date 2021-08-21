import React from 'react';
import Image from 'next/image';

import { Icon } from '@/static/Icons';
import { LogoGreen } from '@/static/SVGs';
import { IconButton } from '@/components/IconButton';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
    return (
        <div className="bg-primary-lightBlue min-h-screen p-2 space-y-2">
            <section className="flex justify-between p-2 flex-row bg-dustWhite border-primary-dark border-2 rounded-md">
                <LogoGreen className="w-20 border-gray-600 text-gray-400" />
                <Icon icon="logIn" size="md" className="self-center" />
            </section>

            <section className="section">
                <figure className="flex flex-row justify-between p-2">
                    <div>
                        <h3 className="text-3xl font-bold font-serif mt-1 mb-2">
                            Saraswati Vidhyala{' '}
                            <IconButton icon="pencil" size="sm" className="inline-block" />
                        </h3>
                        <p className="mt-0 flex flex-row items-center py-1">
                            <Icon icon="pinAlt" size="sm" className="ml-1 mr-2" />
                            since
                            <span className="text-lg font-extrabold font-serif">1993</span>
                        </p>
                        <p className="text-lg mb-1 flex flex-row items-center py-1">
                            <Icon icon="home" size="sm" className="ml-1 mr-2" />
                            B-501, Hari Om Complex, Modi Mohallo, A.K.Road, Surat-395008
                        </p>
                        <p className="text-lg mb-1 flex flex-row items-center py-1">
                            <Icon icon="phone" size="sm" className="ml-1 mr-2" />
                            +91 9638837399, +91 9638527418
                        </p>

                        <p className="text-lg mb-1 flex flex-row items-center py-1">
                            <Icon icon="envelop" size="sm" className="ml-1 mr-2" />
                            contact@saraswatividhyaly.com
                        </p>

                        <div className="flex flex-row">
                            <Icon icon="unOrderedList" size="sm" className="m-1 mr-2" />
                            <ul>
                                <li>GSEB 1 English</li>
                                <li>GSEB 2 English</li>
                                <li>GSEB 3 English</li>
                                <li>GSEB 4 English</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://source.unsplash.com/umhyDLYKfLM/300x300"
                            alt="School image"
                            className="rounded-md p-1 border-2 border-darker"
                        />
                    </div>
                </figure>

                <div className="flex flex-row">
                    <Icon icon="text" size="lg" className="m-1 mr-2 w-auto h-auto" />
                    <div className="">
                        <p className="text-lg mb-1 flex flex-row items-center py-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisi
                            id mi sollicitudin tempus a nec metus. Sed efficitur malesuada justo, id
                            congue augue sollicitudin mattis. Donec vel ex ornare, rutrum justo at,
                            porttitor libero. Curabitur in turpis nec dui pulvinar porttitor non in
                            risus. Maecenas sit amet facilisis lectus, at ornare purus. Cras commodo
                            eget elit vitae pellentesque. In viverra orci neque, ac ullamcorper
                            tellus fringilla ut. Vivamus luctus fringilla venenatis. Phasellus purus
                            nunc, hendrerit a convallis a, gravida vitae augue. Aenean tempus
                            venenatis convallis. Interdum et malesuada fames ac ante ipsum primis in
                            faucibus.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-header">
                    <p></p>
                </div>
            </section>

            {/* <section className="section">
                <div className="flex flex-row">
                    <div className="w-4/5">
                        <div className="section-header">
                            <p className="title">School Profile</p>
                            <IconButton icon="pencil" />
                        </div>
                        <div className="p-2">
                            <h3 className="text-3xl font-bold font-serif mt-1 mb-2">
                                Saraswati Vidhyala
                            </h3>
                            <p className="mt-0 flex flex-row items-center py-1">
                                <Icon icon="pinAlt" size="sm" className="ml-1 mr-2" />
                                since
                                <span className="text-lg font-extrabold font-serif">1993</span>
                            </p>
                            <p className="text-lg mb-1 flex flex-row items-center py-1">
                                <Icon icon="home" size="sm" className="ml-1 mr-2" />
                                B-501, Hari Om Complex, Modi Mohallo, A.K.Road, Surat-395008
                            </p>
                            <p className="text-lg mb-1 flex flex-row items-center py-1">
                                <Icon icon="phone" size="sm" className="ml-1 mr-2" />
                                +91 9638837399, +91 9638527418
                            </p>

                            <p className="text-lg mb-1 flex flex-row items-center py-1">
                                <Icon icon="envelop" size="sm" className="ml-1 mr-2" />
                                contact@saraswatividhyaly.com
                            </p>

                            <div className="flex flex-row">
                                <Icon icon="unOrderedList" size="sm" className="m-1 mr-2" />
                                <ul>
                                    <li>GSEB 1 English</li>
                                    <li>GSEB 2 English</li>
                                    <li>GSEB 3 English</li>
                                    <li>GSEB 4 English</li>
                                </ul>
                            </div>

                            <p className="text-lg mb-1 flex flex-row items-center py-1">
                                <Icon icon="text" size="lg" className="m-1 mr-2" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
                                nisi id mi sollicitudin tempus a nec metus. Sed efficitur malesuada
                                justo, id congue augue sollicitudin mattis.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/5 flex items-center justify-center">
                        <img
                            src="https://source.unsplash.com/umhyDLYKfLM/250x250"
                            width={250}
                            height={250}
                            alt="School image"
                            className="rounded-full border-2 p-1 border-darker"
                        />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Profile;
