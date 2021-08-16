import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'

import { supabase } from '../../api'

import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/static/Icons';
import { Teacher } from '@/static/SVGs';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { TeacherRegisterFieldTypes } from '@/interfaces';
import { regularExpressions } from '@/static/constants';

interface teacherProps { }

const Teachers: React.FC<teacherProps> = ({ }) => {
    const [emailExists, setEmailExists] = useState(true);
    const router = useRouter();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<TeacherRegisterFieldTypes>();

    const onSubmit: SubmitHandler<TeacherRegisterFieldTypes> = async (teacher) => {
        try {
            const id = uuid();
            const { data } = await supabase
                .from('Teacher')
                .insert([
                    { Teacher_Id: id, Email: teacher.email, Password: teacher.password, FirstName: teacher.firstName, LastName: teacher.lastName },
                ])
            await supabase.auth.signUp({ email: teacher.email, password: teacher.password })
            router.push('/login');
        } catch (error) {
        }
    };

    const emailMatch = async email => {
        try {
            const { data } = await supabase
                .from('Teacher')
                .select()
                .filter('Email', 'eq', email)

            const isEmailExists = data && data.length >= 1 ? false : true;
            setEmailExists(isEmailExists);
            return isEmailExists;
        } catch (error) {

        }
    };

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
                            <form className="mx-auto max-w-md" onSubmit={handleSubmit(onSubmit)} >
                                <div className="grid grid-cols-2 gap-2">
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        type="text"
                                        register={register('firstName', {
                                            required: 'First Name is required',
                                        })}
                                        isInvalid={!!errors.firstName}
                                        error={errors.firstName?.message}
                                    />
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        type="text"
                                        isInvalid={!!errors.lastName}
                                        error={errors.lastName?.message}
                                        register={register('lastName', {
                                            required: 'Last Name is required',
                                        })}
                                    />
                                </div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id="email"
                                    isInvalid={!!errors.email}
                                    error={errors.email?.message || 'Email is not valid'}
                                    register={register('email', {
                                        validate: {
                                            validateEmail: (v) => regularExpressions.email.test(v),
                                            uniqueEmail: emailMatch
                                        },
                                        required: 'Email is required',
                                    })}
                                    customError={!emailExists}
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
                                <Button className="mt-5" type="submit">
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
                    <div className="m-12 xl:m-16 w-full max-w-lg">
                        <Teacher />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Teachers;
