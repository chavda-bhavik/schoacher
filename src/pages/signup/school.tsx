import React, { useState } from 'react';

import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuid } from 'uuid'

import { supabase } from '../../api.js'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { regexEpxpressions } from '../../utils/validation'

interface SchoolProps { }

type IFormInput = {
    schoolName: string,
    email: string,
    password: string,
    confirm: string,
};

const School: React.FC<SchoolProps> = ({ }) => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (school) => {
        try {
            setLoading(true);
            const id = uuid();
            const { data, error } = await supabase
                .from('School')
                .insert([
                    { School_Id: id, Email: school.email, Password: school.password, Name: school.schoolName },
                ])
            setLoading(false);
        } catch (error) {
        }
    };

    const emailMatch = async email => {
        try {
            const { data } = await supabase
                .from('School')
                .select()
                .filter('Email', 'eq', email)

            return data && data.length >= 1 ? false : true;
        } catch (error) {

        }
    };

    return (
        <>
            <section className="bg-primary-green">
                <div className={`container px-5 py-24 mx-auto flex flex-wrap items-center`}>
                    <div className="w-full md:w-1/2 pt-5 md:pt-0">
                        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-dustWhite rounded-lg p-8">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <Input
                                    name="schoolName"
                                    label="School Name"
                                    type="string"
                                    id="schoolName"
                                    placeholder="Enter School Name"
                                    register={register('schoolName', {
                                        required: 'School Name is required',
                                    })}
                                    isInvalid={!!errors.schoolName}
                                    error={errors.schoolName?.message}
                                />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <Input
                                    name="email"
                                    label="Email Id"
                                    type="string"
                                    id="email"
                                    placeholder="Enter Email Id"
                                    register={register('email', {
                                        required: 'Email is required',
                                        validate: emailMatch,
                                    })}
                                    isInvalid={!!errors.email}
                                    error={errors.email?.message || 'Please select unique Email'}
                                />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <Input
                                    name="password"
                                    label="Password"
                                    type="string"
                                    id="password"
                                    placeholder="Enter Password"
                                    register={register('password', {
                                        required: 'Password is required',
                                        validate: (v) => regexEpxpressions.password.test(v),
                                    })}
                                    isInvalid={!!errors.password}
                                    error={errors.password?.message || 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'}
                                />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <Input
                                    name="confirm"
                                    label="Confirm Password"
                                    type="string"
                                    id="confirm"
                                    placeholder="Enter Confirm Password"
                                    register={register('confirm', {
                                        required: 'Confirm Password is required',
                                        validate: value =>
                                            value === getValues('password')
                                    })}
                                    isInvalid={!!errors.confirm}
                                    error={errors.confirm?.message || "The passwords do not match"}
                                />
                            </div>
                            <Button type="submit" variant="primary" loading={loading} disabled={loading}>
                                Register
                            </Button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 pt-5 md:pt-0">

                    </div>
                </div>
            </section>

        </>
    );
};

export default School;
