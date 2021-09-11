import React, { useEffect } from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { useForm, Controller } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { TeacherProfileType } from '@/interfaces';
import { regularExpressions } from '@/static/constants';
import { IconButton } from '@/components/IconButton';

interface ProfileFormProps {
    profileData: TeacherProfileType;
    onDataSubmit?: (data: TeacherProfileType) => void;
    onClose?: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ profileData, onDataSubmit, onClose }) => {
    const {
        register,
        reset,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<TeacherProfileType>();

    useEffect(() => {
        reset(profileData);
    }, [reset, profileData]);

    const onFormSubmit = (data) => {
        onDataSubmit(data);
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">Edit Profile</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Card.Body>
                    <Input
                        id="headline"
                        name="headline"
                        type="text"
                        register={register('headline', {
                            required: 'Headline is required',
                        })}
                        isInvalid={!!errors.headline}
                        error={errors.headline?.message}
                        label="Headline"
                    />
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
                    <div className="mt-3">
                        <label className="label">About</label>
                        <Controller
                            name="about"
                            control={control}
                            render={({ field }) => (
                                <DefaultEditor
                                    value={field.value}
                                    placeholder="Write about yourself here..."
                                    onChange={field.onChange}
                                    className="unreset"
                                />
                            )}
                        />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button block type="submit">
                        Update
                    </Button>
                </Card.Footer>
            </form>
        </Card>
    );
};
