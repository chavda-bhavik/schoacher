import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/static/Icons';
import { SignUp, Teacher } from '@/static/SVGs';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { LoginFieldTypes } from '@/interfaces';
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from '../api';
import { regularExpressions } from '@/static/constants';
import { useRouter } from 'next/router';

interface indexProps { }

const index: React.FC<indexProps> = ({ }) => {
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFieldTypes>();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFieldTypes> = async (data) => {
        setLoading(true);
        try {
            const { error } = await supabase.auth.signIn({
                email: data.email,
                password: data.password,
            })
            if (error) {
                setLoginError(error.message);
            }
            else {
                setLoginError('');
                router.push('/');
            }
        } catch (error) {
        }
        setLoading(false);
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
                        <h1 className="heading">Sign In</h1>
                        {/* FormContainer */}
                        <div className="w-full flex-1 mt-5">
                            <form className="mx-auto max-w-md" onSubmit={handleSubmit(onSubmit)}>
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
                                {<p className="text-red-500 text-xs italic">{!errors.password ? loginError : ''}</p>}
                                {/* SubmitButton */}
                                <Button className="mt-5 btn btn-primary" type="submit" disabled={loading} >
                                    <Icon icon="logIn" className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">{loading ? 'Loading ...' : 'Log In'}</span>
                                </Button>
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
