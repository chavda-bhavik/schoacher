import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { DefaultEditor } from 'react-simple-wysiwyg';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { EmployerProfileType, SubjectFormType } from '@/interfaces';
import constants, { regularExpressions } from '@/shared/constants';
import { IconButton } from '@/components/IconButton';
import { Subjects } from '@/components/Input/Subjects';
import { omit } from '@/shared/helper';

interface EmployerProfileFormProps {
    profileData: EmployerProfileType;
    onDataSubmit?: (data: EmployerProfileType, subjects?: SubjectFormType[]) => void;
    onClose?: () => void;
}

export const EmployerProfileForm: React.FC<EmployerProfileFormProps> = ({
    profileData,
    onDataSubmit,
    onClose,
}) => {
    const {
        register,
        reset,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<EmployerProfileType>();
    const { dirtyFields } = useFormState({
        control,
    });
    const [subjects, setSubjects] = useState<SubjectFormType[]>();
    const [subjectsModified, setSubjectsModified] = useState(false);

    useEffect(() => {
        if (profileData) {
            let data = Object.assign({}, profileData);
            delete data.photoUrl;
            // @ts-ignore
            delete data.__typename;
            delete data.subjects;
            // @ts-ignore
            if (data.address) data.address = omit(data.address, '__typename');
            reset(data);
            setSubjects(
                profileData.subjects.map((sub) => ({
                    boardId: sub.board.id,
                    subjectId: sub.subject.id,
                    standardId: sub.standard.id,
                }))
            );
        }
    }, [reset, profileData]);

    const onFormSubmit = async (data: EmployerProfileType) => {
        let addressModified = false;
        if (dirtyFields && dirtyFields.address) {
            addressModified = Object.values(dirtyFields.address).some((val) => val);
        }
        if (!addressModified) delete data.address;
        onDataSubmit(data, subjectsModified ? subjects : null);
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
                            required: 'Name is required',
                        })}
                        isInvalid={!!errors.name}
                        error={errors.name?.message}
                        label="Name"
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
                            type="select"
                            register={register('address.city', {
                                required: 'City is required',
                            })}
                            isInvalid={!!errors.address?.city?.message}
                            error={errors.address?.city?.message}
                            label="City"
                        >
                            {constants.cities.map((city, i) => (
                                <option value={city} key={i}>
                                    {city}
                                </option>
                            ))}
                        </Input>
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
                        type="select"
                        label="State"
                        register={register('address.state', {
                            required: 'State is required',
                        })}
                        isInvalid={!!errors.address?.state?.message}
                        error={errors.address?.state?.message}
                    >
                        {constants.states.map((state, i) => (
                            <option value={state} key={i}>
                                {state}
                            </option>
                        ))}
                    </Input>
                    <Input
                        id="mobile1"
                        name="mobile1"
                        type="tel"
                        label="Mobile No. 1"
                        register={register('mobile1', {
                            validate: (v) => regularExpressions.mobile.test(v.toString()) || !!v,
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
                            validate: (v) => regularExpressions.mobile.test(v.toString()) || !!v,
                        })}
                        error="Mobile Number is not valid"
                    />
                    <Subjects
                        setSubjects={setSubjects}
                        subjects={subjects}
                        setSubjectsModified={setSubjectsModified}
                    />
                    <div className="mt-3">
                        <span className="label">About</span>
                        <Controller
                            name="about"
                            control={control}
                            render={({ field }) => (
                                <DefaultEditor
                                    value={field.value}
                                    placeholder="Write about your school/tution here..."
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
