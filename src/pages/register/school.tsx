import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/shared/Icons';
import { School } from '@/shared/SVGs';

interface indexProps {}

const SchoolSignUp: React.FC<indexProps> = ({}) => {
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
                        <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                            School Signup
                        </h1>
                        {/* FormContainer */}
                        <div className="w-full mt-5">
                            {/* Form */}
                            <form className="mx-auto max-w-md">
                                <input type="text" placeholder="School Name" className="input" />
                                <input type="email" placeholder="Email" className="input" />
                                <input type="password" placeholder="Password" className="input" />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input"
                                />
                                {/* SubmitButton */}
                                <button className="mt-5 btn btn-primary">
                                    <Icon icon="check" className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">Sign Up</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by schoacher&apos;s{' '}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>{' '}
                                    and its{' '}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
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
                    <div className="m-12 xl:m-16 w-full max-w-lg flex items-center justify-center">
                        <School className="self-center" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SchoolSignUp;
