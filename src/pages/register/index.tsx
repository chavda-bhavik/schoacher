import React, { FormEvent, useRef } from 'react';
import Link from 'next/link';
import { LogoShort, SignUp } from '@/shared/SVGs';
import { Button } from '@/components/Button';
import { useRouter } from 'next/router';

interface indexProps {}

const Register: React.FC<indexProps> = ({}) => {
    const router = useRouter();
    const teacherRadioRef = useRef<HTMLInputElement>();
    const employerRadioRef = useRef<HTMLInputElement>();

    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (teacherRadioRef.current.checked) router.push('/register/teacher');
        else router.push('/register/employer');
    };

    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                {/* MainContainer */}
                <div className="auth-main">
                    {/* LogoLink */}
                    <div className="w-full flex flex-row justify-center md:content-start">
                        <LogoShort className="w-12 mx-auto" />
                    </div>
                    {/* Main Content */}
                    <div className="mt-4">
                        {/* Heading */}
                        <h1 className="heading">Sign Up</h1>
                        {/* FormContainer */}
                        <div className="w-full flex-1 mt-5">
                            <form className="mx-auto max-w-md" onSubmit={onFormSubmit}>
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
                                        ref={teacherRadioRef}
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
                                        ref={employerRadioRef}
                                    />
                                    <label htmlFor="school" className="option">
                                        School
                                    </label>
                                </div>
                                <Button type="submit" variant="success" block>
                                    Let&apos;s Go
                                </Button>
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
export default Register;
