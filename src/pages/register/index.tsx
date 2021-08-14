import React from 'react';
import Image from 'next/image';
import Logo from '@/static/images/Icon.svg';
import Link from 'next/link';
import { Icon } from '@/static/Icons';
import { SignUp, Teacher } from '@/static/SVGs';

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                {/* MainContainer */}
                <div className="auth-main">
                    {/* LogoLink */}
                    <div className="w-full flex flex-row justify-center md:content-start">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={60}
                            height={60}
                            className="h-12 mx-auto rounded-md shadow-lg"
                        />
                    </div>
                    {/* Main Content */}
                    <div className="mt-6">
                        {/* Heading */}
                        <h1 className="heading">Sign Up</h1>
                        {/* FormContainer */}
                        <div className="w-full flex-1 mt-5">
                            <form className="mx-auto max-w-md">
                                <label htmlFor="selection" className="leading-8 text-base">
                                    What best describes you?
                                </label>
                                <div className="switcher w-full mb-4">
                                    <input
                                        type="radio"
                                        id="teacher"
                                        defaultChecked
                                        className="hidden"
                                        name="selection"
                                        value="teacher"
                                    />
                                    <label htmlFor="teacher" className="option">
                                        Teacher
                                    </label>
                                    <input
                                        type="radio"
                                        id="school"
                                        className="hidden"
                                        name="selection"
                                        value="school"
                                    />
                                    <label htmlFor="school" className="option">
                                        School
                                    </label>
                                </div>
                                <button type="button" className="btn btn-primary">
                                    Let&apos;s Go
                                </button>
                                <p className="mt-8 text-sm text-gray-600 text-center">
                                    Already have an account?{' '}
                                    <Link href="/login">
                                        <a
                                            href="#"
                                            className="border-b border-gray-500 border-dotted"
                                        >
                                            Login here
                                        </a>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Illustration Container */}
                <div className="auth-illustration">
                    <div className="m-12 xl:m-16 w-full max-w-lg">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index;
