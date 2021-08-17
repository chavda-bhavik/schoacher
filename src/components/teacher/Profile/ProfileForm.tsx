import React, { useEffect } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { TeacherProfileData } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { regularExpressions } from '@/static/constants';

interface ProfileFormProps {
    onClose: () => void;
    show?: boolean;
    profileData: TeacherProfileData;
    onDataSubmit?: (data: TeacherProfileData) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
    onClose,
    profileData,
    show = false,
    onDataSubmit,
}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<TeacherProfileData>();

    useEffect(() => {
        reset(profileData);
    }, [reset, profileData]);

    const onFormSubmit = (data) => {
        onDataSubmit(data);
        onClose();
    };

    return (
        <Backdrop show={show} onClose={onClose}>
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">Edit Profile</p>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                id="firstName"
                                name="firstName"
                                type="text"
                                register={register('firstName', {
                                    required: 'First Name is required',
                                })}
                                isInvalid={!!errors.firstName}
                                error={errors.firstName?.message}
                                label="First Name"
                            />
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                register={register('lastName', {
                                    required: 'Last Name is required',
                                })}
                                isInvalid={!!errors.lastName}
                                error={errors.lastName?.message}
                                label="Last Name"
                            />
                        </div>
                        <Input
                            id="address"
                            name="address"
                            type="text"
                            label="Address"
                            register={register('address')}
                        />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            register={register('email', {
                                validate: (v) => regularExpressions.email.test(v),
                            })}
                            isInvalid={!!errors.email}
                            error="Email is not valid"
                        />
                        <Input
                            id="mobile1"
                            name="mobile1"
                            type="tel"
                            label="Mobile No. 1"
                            register={register('mobile1', {
                                validate: (v) => regularExpressions.mobile.test(v) || v === '',
                            })}
                            isInvalid={!!errors.mobile1}
                            error="Mobile Number is not valid"
                        />
                        <Input
                            id="mobile1"
                            name="mobile1"
                            type="tel"
                            label="Mobile No. 2"
                            isInvalid={!!errors.mobile2}
                            register={register('mobile2', {
                                validate: (v) => regularExpressions.mobile.test(v) || v === '',
                            })}
                            error="Mobile Number is not valid"
                        />
                        <Button block className="mt-5" type="submit">
                            Update
                        </Button>
                    </form>
                </div>
                {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
            </div>
        </Backdrop>
    );
};
