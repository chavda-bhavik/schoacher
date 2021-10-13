import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Curls, Teaching, School, Teacher } from '@/shared/SVGs';
import { SEO } from '@/components/SEO';
import { getLoginUser } from '@/shared/helper';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
    let loginUser = getLoginUser();

    let navContent = (
        <Link href="/login">
            <a className="font-bold text-white mx-2">Login</a>
        </Link>
    );
    if (loginUser) {
        navContent = (
            <Link href={loginUser.type === 'employer' ? '/employer' : '/teacher'}>
                <a className="font-bold text-white mx-2">View Profile</a>
            </Link>
        );
    }

    return (
        <>
            <SEO
                title="Schoacher"
                description="Schoacher makes it easy for schools to post their requirements for teachers and teachers can apply easily for the jobs"
            />
            <nav id="header" className="w-full z-30 text-white bg-primary-green">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <a
                        className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#"
                    >
                        <Image src="/Logo-light.png" width={130} height={80} alt="schoacher logo" />
                    </a>
                    {navContent}
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
            <section className="bg-primary-green">
                <div className="container px-5 py-10 md:py-24 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                        <h1 className="my-4 text-white text-4xl md:text-5xl font-bold leading-tight">
                            Connecting Teachers With Schools
                        </h1>
                        <p className="leading-normal text-white text-2xl mb-8">
                            Schoacher makes it easy for schools to post and manage their
                            requirements for teachers and for teachers to apply easily
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 py-2 md:py-6 text-center">
                        <Teaching className="max-w-full" />
                    </div>
                </div>
                <Curls />
            </section>
            <section className="bg-dustWhite">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="text-4xl font-bold leading-tight pt-16 pb-6 text-black">
                        How <span className="text-primary-green">Schoacher</span> helps Schools
                    </h2>
                    <div className="flex flex-wrap flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 py-2 text-center">
                            <School className="max-w-full" />
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 items-start text-left font-normal text-primary-dark pl-0 sm:pl-2 md:pl-4 pt-4 sm:pt-2 md:pt-0">
                            <p className="leading-normal text-2xl mb-3">
                                School can Post and Manage their requirements for teachers in four
                                easy steps:
                            </p>
                            <ul className="list-decimal list-inside text-2xl ml-3">
                                <li>Create an Account</li>
                                <li>Complete Profile Information</li>
                                <li>Post a Requirement</li>
                                <li>Accept application</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-dustWhite">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="text-4xl font-bold leading-tight pt-16 pb-6 text-black">
                        How <span className="text-primary-green">Schoacher</span> helps Teachers
                    </h2>
                    <div className="flex flex-wrap flex-col md:flex-row items-center justify-between">
                        <div className="flex flex-col w-full md:w-1/2 items-start text-left font-normal text-primary-dark">
                            <p className="leading-normal text-2xl mb-3">
                                Teachers can manage their profile online and Apply for jobs that
                                fits their needs in just four easy steps:
                            </p>
                            <ul className="list-decimal list-inside text-2xl ml-3">
                                <li>Create an Account</li>
                                <li>Complete Profile Information</li>
                                <li>Search for jobs that fits you</li>
                                <li>Apply for jobs</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 py-2 text-center">
                            <Teacher className="max-w-full" />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-primary-dark p-4">
                <p className="text-white text-base font-semibold">
                    &#169; Schoacher. All rights reserved
                </p>
            </footer>
        </>
    );
};

export default Index;
