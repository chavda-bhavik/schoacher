import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/static/Icons';
import { SignUp, Teacher } from '@/static/SVGs';

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                {/* MainContainer */}
                <div className="auth-main">
                    {/* Logo */}
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
                        <h1 className="heading">Teacher Signup</h1>
                        {/* FormContainer */}
                        <div className="w-full flex-1 mt-5">
                            {/* Form */}
                            <form className="mx-auto max-w-md">
                                <div className="grid grid-cols-2 gap-2">
                                    <input type="text" placeholder="First Name" className="input" />
                                    <input type="text" placeholder="Last Name" className="input" />
                                </div>
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
                    <div className="m-12 xl:m-16 w-full max-w-lg">
                        <Teacher />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index;
