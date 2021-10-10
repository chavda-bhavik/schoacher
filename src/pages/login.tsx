import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/static/images/Icon.svg';
import { Icon } from '@/shared/Icons';
import { SignUp } from '@/shared/SVGs';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Input';
import { regularExpressions } from '@/shared/constants';
import { Button } from '@/components/Button';
import { useMutation } from '@apollo/client';

// graphql
import { LOGIN, login, loginVariables } from '@/graphql/shared/mutation';

interface indexProps {}

const Login: React.FC<indexProps> = ({}) => {
    const router = useRouter();
    const [login, { loading, data }] = useMutation<login, loginVariables>(LOGIN);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormType>();
    const [loginError, setLoginError] = useState<string>();

    useEffect(() => {
        if (!loading && data) {
            if (data.login.error) {
                setLoginError(data.login.error);
                reset();
            } else {
                if (data.login.type === 'teacher')
                    router.push('/teacher/profile', undefined, { shallow: true });
                else router.push('/employer/profile');
            }
        }
    }, [loading, data, router, reset]);

    const onLoginSubmit = (data: LoginFormType) => {
        setLoginError(null);
        login({
            variables: data,
        });
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
                            <form
                                className="mx-auto max-w-md"
                                onSubmit={handleSubmit(onLoginSubmit)}
                            >
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    register={register('email', {
                                        required: 'Email is Required!',
                                        validate: (v) => regularExpressions.email.test(v),
                                    })}
                                    label="Email"
                                    isInvalid={!!errors.email}
                                    error={errors.email?.message}
                                />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    register={register('password', {
                                        required: 'Password is Required!',
                                    })}
                                    label="Password"
                                    isInvalid={!!errors.password}
                                    error={errors.password?.message}
                                />
                                {loginError && (
                                    <p className="input-error mt-3 text-base not-italic">
                                        {loginError}
                                    </p>
                                )}

                                {/* SubmitButton */}
                                <Button type="submit" className="mt-3" block loading={loading}>
                                    <Icon icon="logIn" />
                                    <span className="ml-3">Log In</span>
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
                    <div className="m-12 xl:m-16 w-full max-w-lg flex container">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
