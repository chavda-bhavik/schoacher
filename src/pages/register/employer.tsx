import React, { useEffect } from 'react';
import Link from 'next/link';

import { Icon } from '@/shared/Icons';
import { LogoShort, School } from '@/shared/SVGs';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Input';
import { regularExpressions } from '@/shared/constants';
import { Button } from '@/components/Button';
import { useMutation } from '@apollo/client';

// graphql
import {
    REGISTER_EMPLOYER,
    registerEmployer,
    registerEmployerVariables,
} from '@/graphql/employer/mutation';
import { setServerErrors } from '@/shared/helper';
import toast from '@/shared/toast';
import { useRouter } from 'next/router';

interface indexProps {}

const EmployerRegistration: React.FC<indexProps> = ({}) => {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm<EmployerSignupFormProps>();
    const router = useRouter();
    const [signup, { loading, data }] = useMutation<registerEmployer, registerEmployerVariables>(
        REGISTER_EMPLOYER
    );
    const password = watch('password');

    useEffect(() => {
        if (!loading && data) {
            if (data.registerEmployer.errors)
                setServerErrors(data.registerEmployer.errors, setError);
            else {
                toast.success('Registered Successfully');
                router.replace('/login');
            }
        }
    }, [loading, data, setError, router]);

    const handleSignUp = (data: EmployerSignupFormProps) => {
        let finalData = { ...data };
        delete finalData.confirmPassword;
        signup({
            variables: { data: finalData },
        });
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
                    <div className="mt-6">
                        {/* Heading */}
                        <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                            Employer Signup
                        </h1>
                        {/* FormContainer */}
                        <div className="w-full mt-5">
                            {/* Form */}
                            <form
                                className="mx-auto max-w-md"
                                onSubmit={handleSubmit(handleSignUp)}
                            >
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    required
                                    register={register('name', {
                                        required: 'Name is required',
                                    })}
                                    label="Name"
                                    isInvalid={!!errors.name}
                                    error={errors.name?.message}
                                />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    register={register('email', {
                                        required: 'Email is required',
                                        validate: (v) => regularExpressions.email.test(v),
                                    })}
                                    label="Email"
                                    isInvalid={!!errors.email}
                                    error={errors.email?.message || 'Email is invalid'}
                                />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    register={register('password', {
                                        required: 'Password is required',
                                    })}
                                    isInvalid={!!errors.password}
                                    error={errors.password?.message}
                                    label="Password"
                                />
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    register={register('confirmPassword', {
                                        required: 'Confirm Password is required',
                                        validate: (value) => value === password,
                                    })}
                                    isInvalid={!!errors.confirmPassword}
                                    error={
                                        errors.confirmPassword?.message ||
                                        'Password and confirm-password should match.'
                                    }
                                    label="Confirm Password"
                                />
                                {/* SubmitButton */}
                                <Button type="submit" className="mt-5" variant="primary" block>
                                    <Icon icon="check" className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">Sign Up</span>
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
                    <div className="m-12 xl:m-16 w-full max-w-lg flex items-center justify-center">
                        <School className="self-center" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EmployerRegistration;
