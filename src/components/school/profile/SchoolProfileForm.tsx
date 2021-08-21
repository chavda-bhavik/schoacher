import React, { useEffect } from 'react';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { SchoolProfileType } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { regularExpressions } from '@/static/constants';
import { IconButton } from '@/components/IconButton';

interface SchoolProfileFormProps {
    profileData: SchoolProfileType;
    onDataSubmit?: (data: SchoolProfileType) => void;
    onClose?: () => void;
}

export const SchoolProfileForm: React.FC<SchoolProfileFormProps> = ({
    profileData,
    onDataSubmit,
    onClose,
}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<SchoolProfileType>();

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
                        id="name"
                        name="name"
                        type="text"
                        register={register('name', {
                            required: 'School Name is required',
                        })}
                        isInvalid={!!errors.name}
                        error={errors.name?.message}
                        label="School Name"
                    />
                    <Input
                        id="street1"
                        name="street1"
                        type="text"
                        register={register('address.street1', {
                            required: 'Address Street  is required',
                        })}
                        isInvalid={!!errors.address?.street1}
                        error={errors.address?.street1?.message}
                        label="Adress Street 1"
                    />
                    <Input
                        id="street2"
                        name="street2"
                        type="text"
                        register={register('address.street2')}
                        label="Adress Street 2"
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <Input
                            id="city"
                            name="city"
                            type="text"
                            register={register('address.city', {
                                required: 'City is required',
                            })}
                            isInvalid={!!errors.address?.city?.message}
                            error={errors.address?.city?.message}
                            label="City"
                        />
                        <Input
                            id="pincode"
                            name="pincode"
                            type="number"
                            register={register('address.pincode', {
                                required: 'Pincode is required',
                                valueAsNumber: true,
                            })}
                            isInvalid={!!errors.address?.pincode?.message}
                            error={errors.address?.pincode?.message}
                            label="Pincode"
                        />
                    </div>
                    <Input
                        id="state"
                        name="state"
                        type="text"
                        label="State"
                        register={register('address.state', {
                            required: 'State is required',
                        })}
                        isInvalid={!!errors.address?.state?.message}
                        error={errors.address?.state?.message}
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
                            validate: (v) =>
                                regularExpressions.mobile.test(v.toString()) || v === '',
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
                            validate: (v) =>
                                regularExpressions.mobile.test(v.toString()) || v === '',
                        })}
                        error="Mobile Number is not valid"
                    />
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
