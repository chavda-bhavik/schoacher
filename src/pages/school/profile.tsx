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
                <div className="section-header">
                    <p className="title">School Details</p>
                    <IconButton icon="pencil" size="sm" />
                </div>
                <figure className="flex flex-row justify-between p-2">
                    <div className="section-body">
                        <div className="flex flex-row items-center py-2">
                            <Icon icon="pinAlt" size="sm" className="mx-2" />
                            <span className="text-base">since</span>
                            <span className="text-lg font-extrabold font-serif">1993</span>
                        </div>

                        <div className="flex flex-row items-center py-2">
                            <Icon icon="home" size="sm" className="mx-2" />
                            <span className="text-base">
                                B-501, Hari Om Complex, Modi Mohallo, A.K.Road, Surat-395008
                            </span>
                        </div>

                        <div className="flex flex-row items-center py-2">
                            <Icon icon="phone" size="sm" className="mx-2" />
                            <span className="text-base">+91 9638837399, +91 9638527418</span>
                        </div>

                        <div className="flex flex-row items-center py-2">
                            <Icon icon="inbox" size="sm" className="mx-2" />
                            <span className="text-base">contact@saraswatividhyaly.com</span>
                        </div>

                        <div className="flex flex-row py-2">
                            <Icon icon="unOrderedList" size="sm" className="mx-2" />
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
            </section>

            <section className="section">
                <div className="section-header">
                    <p className="title">Description</p>
                    <Icon icon="pencil" />
                </div>
                <div className="section-body">
                    <div className="flex flex-row">
                        <Icon icon="document" size="sm" className="m-1 mr-2 w-auto h-auto" />
                        <span className="text-lg mb-1 flex flex-row items-center py-1 w-full">
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
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
