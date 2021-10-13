import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';

import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/shared/Icons';
import { Teacher } from '@/shared/SVGs';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { SchoolRegisterFieldTypes } from '@/interfaces';
import { regularExpressions } from '@/shared/constants';
import { setServerErrors } from '@/shared/helper';
import toast from '@/shared/toast';

// graphql
import {
    REGISTER_TEACHER,
    registerTeacher,
    registerTeacherVariables,
} from '@/graphql/teacher/mutation';
import { SEO } from '@/components/SEO';

interface indexProps {}

const TeacherRegistration: React.FC<indexProps> = ({}) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        setError,
    } = useForm<SchoolRegisterFieldTypes>();
    const router = useRouter();
    const [signup, { loading, data }] = useMutation<registerTeacher, registerTeacherVariables>(
        REGISTER_TEACHER
    );

    useEffect(() => {
        if (!loading && data) {
            if (data.registerTeacher.errors) setServerErrors(data.registerTeacher.errors, setError);
            else {
                toast.success('Registered Successfully');
                router.replace('/login');
            }
        }
    }, [loading, data, setError, router]);

    const handleSignUp = (data: SchoolRegisterFieldTypes) => {
        let finalData = { ...data };
        delete finalData.confirmPassword;
        signup({
            variables: { data: finalData },
        });
    };

    return (
        <>
            <SEO
                title="Teacher Registration"
                description="Schoacher makes it easy for schools to post their requirements for teachers and teachers can apply easily for the jobs"
            />
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
                                <form
                                    className="mx-auto max-w-md"
                                    onSubmit={handleSubmit(handleSignUp)}
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First Name"
                                            type="text"
                                            isInvalid={!!errors.firstName}
                                            error={errors.firstName?.message}
                                            register={register('firstName', {
                                                required: 'First Name is required',
                                            })}
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
                                            validate: (v) => regularExpressions.email.test(v),
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
                                    <Button type="submit" className="mt-5" block loading={loading}>
                                        <Icon icon="check" className="w-6 h-6 -ml-2" />
                                        <span className="ml-3">Sign Up</span>
                                    </Button>
                                    <p className="mt-4 text-sm text-gray-600 text-center">
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
                        <div className="m-12 xl:m-16 w-full flex content-center max-w-lg">
                            <Teacher />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TeacherRegistration;
