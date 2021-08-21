import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from "react-hook-form";

import { supabase } from '@/api'

import { v4 as uuid } from 'uuid'
import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/static/Icons';
import { School } from '@/static/SVGs';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { SchoolRegisterFieldTypes } from '@/interfaces';
import { regularExpressions } from '@/static/constants';

interface indexProps { }

const SchoolSignUp: React.FC<indexProps> = ({ }) => {
    const [emailExists, setEmailExists] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<SchoolRegisterFieldTypes>();

    const onSubmit: SubmitHandler<SchoolRegisterFieldTypes> = async (school) => {
        setLoading(true);
        try {
            const id = uuid();
            const { data } = await supabase
                .from('School')
                .insert([
                    { School_Id: id, Email: school.email, Password: school.password, Name: school.schoolName },
                ])
            await supabase.auth.signUp({ email: school.email, password: school.password })
            router.push('/login');
        } catch (error) {
        }
        setLoading(false);
    };

    const emailMatch = async email => {
        try {
            const { data: school } = await supabase.from('School').select().filter('Email', 'eq', email);
            const { data: teacher } = await supabase.from('Teacher').select().filter('Email', 'eq', email);
            const isEmailExists = school.length || teacher.length >= 1 ? false : true;

            return isEmailExists;
        } catch (error) {

        }
    };

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
                            <form className="mx-auto max-w-md" onSubmit={handleSubmit(onSubmit)} >
                                <Input
                                    id="schoolName"
                                    name="schoolName"
                                    placeholder="School Name"
                                    type="text"
                                    isInvalid={!!errors.schoolName}
                                    error={errors.schoolName?.message}
                                    register={register('schoolName', {
                                        required: 'School Name is require',
                                    })}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id="email"
                                    isInvalid={!!errors.email}
                                    error={errors.email?.message || 'Please Enter Unique Email'}
                                    register={register('email', {
                                        validate: {
                                            validateEmail: (v) => regularExpressions.email.test(v) || 'Email is not valid',
                                            uniqueEmail: (v) => emailMatch(v)
                                        },
                                        required: 'Email is required',
                                    })}
                                />
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    isInvalid={!!errors.password}
                                    error={errors.password?.message}
                                    register={register('password', {
                                        required: 'Password is required',
                                    })}
                                />
                                <Input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    isInvalid={!!errors.confirmPassword}
                                    error={
                                        errors.confirmPassword?.message ||
                                        'Confirm password should match Password'
                                    }
                                    register={register('confirmPassword', {
                                        validate: (value) => value === watch('password'),
                                        required: 'Confirm Password is required',
                                    })}
                                />
                                {/* SubmitButton */}
                                <Button className="mt-5" type="submit" disabled={loading}>
                                    <Icon icon="check" className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">Sign Up</span>
                                </Button>
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
