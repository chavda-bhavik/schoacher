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
                        <h1 className="heading">Sign In</h1>
                        {/* FormContainer */}
                        <div className="w-full flex-1 mt-5">
                            <form className="mx-auto max-w-md">
                                <input type="email" placeholder="Email" className="input" />
                                <input type="password" placeholder="Password" className="input" />
                                {/* SubmitButton */}
                                <button className="mt-5 btn btn-primary">
                                    <Icon icon="logIn" className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">Log In</span>
                                </button>
                                <p className="mt-8 text-sm text-gray-600 text-center">
                                    Do not have an account?{' '}
                                    <Link href="/register">
                                        <a
                                            href="#"
                                            className="border-b border-gray-500 border-dotted"
                                        >
                                            Register here
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
