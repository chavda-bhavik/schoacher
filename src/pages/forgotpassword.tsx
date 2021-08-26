import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/static/Icons';
import { SignUp } from '@/static/SVGs';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { ForgotFieldTypes } from '@/interfaces';
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from '../api';
import { regularExpressions, passwordErrMessage } from '@/static/constants';

interface forgotPasswordProps { }

const ForgotPassword: React.FC<forgotPasswordProps> = ({ }) => {
    /* eslint-disable */
    const [loginError, setLoginError] = useState('');
    /* eslint-disable */
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    /* eslint-disable */
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<ForgotFieldTypes>();
    /* eslint-disable */
    const session = supabase.auth.session();
    useEffect(() => {
        const access_token = localStorage.getItem('supabase.auth.token') ? JSON.parse(localStorage.getItem('supabase.auth.token')) : null;
        if (access_token && access_token.currentSession && access_token.currentSession.access_token) {
            setToken(access_token.currentSession.access_token);
        }
    }, [token, session]);
    const onSubmit: SubmitHandler<ForgotFieldTypes> = async (response) => {
        setLoading(true);
        try {
            if (!token) {
                const { data, error } = await supabase.auth.api.resetPasswordForEmail(response.email, {
                    redirectTo: 'http://localhost:3000/forgotpassword'
                });
                setLoginError(error.message);
            }
            else {
                const { error, data } = await supabase.auth.api
                    .updateUser(token, { password: response.password })
                setToken('');
                localStorage.setItem('supabase.auth.token', '');
                setLoginError(error.message);
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
                        <h1 className="heading">Forgot Password</h1>
                        {/* FormContainer */}
                        <div className="w-full flex-1 mt-5">
                            <form className="mx-auto max-w-md" onSubmit={handleSubmit(onSubmit)}>
                                {!token && <Input
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
                                />}
                                {token && <> <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    isInvalid={!!errors.password}
                                    error={errors.password?.message || passwordErrMessage}
                                    register={register('password', {
                                        required: 'Password is required',
                                        validate: (v) => regularExpressions.password.test(v),
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
                                    /></>}
                                {<p className="text-red-500 text-xs italic">{!errors.password ? loginError : ''}</p>}
                                {/* SubmitButton */}
                                <Button className="mt-5 btn btn-primary" type="submit" disabled={loading} >
                                    <Icon icon="logIn" className="w-6 h-6 -ml-2" />
                                    <span className="ml-3">{loading ? 'Submit ...' : 'Submit'}</span>
                                </Button>
                                <p className="mt-8 text-sm text-gray-600 text-center">
                                    <Link href="/login">
                                        <a
                                            href="#"
                                            className="border-b border-gray-500 border-dotted"
                                        >
                                            Login
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
export default ForgotPassword;