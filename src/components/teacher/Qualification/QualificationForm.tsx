import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { QualificationType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import Card from '@/components/Card';
import Toast from '@/shared/toast';

// graphql
import {
    GET_QUALIFICATION,
    getQualification,
    getQualificationVariables,
} from '@/graphql/teacher/query';
import {
    UPDATE_QUALIFICATION,
    updateQualification,
    addQualification,
    ADD_QUALIFICATION,
    deleteQualification,
    DELETE_QUALIFICATION,
} from '@/graphql/teacher/mutation';

interface QualificationFormProps {
    onClose?: () => void;
    qualificationId?: number;
}

export const QualificationForm: React.FC<QualificationFormProps> = ({
    onClose,
    qualificationId,
}) => {
    const { loading: qualificationLoading, data: qualification } = useQuery<
        getQualification,
        getQualificationVariables
    >(GET_QUALIFICATION, {
        skip: !qualificationId,
        variables: {
            qualificationId,
            teacherId: 2,
        },
    });
    const [updateQualification] = useMutation<updateQualification>(UPDATE_QUALIFICATION);
    const [addQualification] = useMutation<addQualification>(ADD_QUALIFICATION);
    const [deleteQualification] = useMutation<deleteQualification>(DELETE_QUALIFICATION);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
        setError,
    } = useForm<QualificationType>({
        shouldUnregister: false,
    });

    useEffect(() => {
        if (!qualificationLoading && qualification) {
            let data = { ...qualification.getQualifications };
            delete data.__typename;
            let qualificationData = { ...data };
            reset(qualificationData);
        }
    }, [qualification, qualificationLoading, reset]);

    const setServerErrors = (errors) => {
        errors.forEach((err) => {
            setError(err.field, { type: 'manual', message: err.message });
        });
    };

    const onQualificationSubmit = async (formData: QualificationType) => {
        let success = false;
        if (qualificationId) {
            // edit
            let { data } = await updateQualification({
                variables: {
                    updateQualificationData: formData,
                    updateQualificationQualificationId: qualificationId,
                },
            });
            if (data.updateQualification.entity) {
                Toast.info('Qualification Updated');
                success = true;
            } else if (data.updateQualification.errors)
                setServerErrors(data.updateQualification.errors);
        } else {
            // add
            let { data } = await addQualification({
                variables: {
                    data: formData,
                    teacherId: 2,
                },
            });
            if (data.addQualification.entity) {
                Toast.success('Qualification Added');
                success = true;
            } else if (data.addQualification.errors) setServerErrors(data.addQualification.errors);
        }
        if (success) {
            onClose();
        }
    };

    const onQualificationDelete = async () => {
        let qualification = await deleteQualification({
            variables: {
                teacherId: 2,
                qualificationId: qualificationId,
            },
        });
        if (qualification.data.deleteQualification) {
            Toast.success('Qualification Deleted');
            onClose();
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">{qualificationId ? 'Update' : 'Add'} Qualification</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(onQualificationSubmit)}>
                <Card.Body>
                    <Input
                        id="degree"
                        name="degree"
                        type="text"
                        label="Degree Name"
                        register={register('degree', {
                            required: 'Degree is required',
                        })}
                        required
                        row={true}
                        isInvalid={!!errors.degree}
                        error={errors.degree?.message}
                    />
                    <Input
                        id="college"
                        name="college"
                        type="text"
                        required
                        label="College/University Name"
                        register={register('college', {
                            required: 'College is required',
                        })}
                        isInvalid={!!errors.college}
                        error={errors.college?.message}
                    />
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <div>
                            <label className="label" htmlFor="start">
                                Start <span className="text-red-500">*</span>
                            </label>
                            <Controller
                                control={control}
                                name="start"
                                rules={{ required: 'Start is required' }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <DatePicker
                                            selected={field.value ? new Date(field.value) : null}
                                            onChange={(date) => field.onChange(date)}
                                            dateFormat="MM/yyyy"
                                            className={classNames('input', {
                                                'input-invalid': !!error,
                                            })}
                                            showMonthYearPicker
                                            id="start"
                                        />
                                        {error && (
                                            <span className="input-error">{error.message}</span>
                                        )}
                                    </>
                                )}
                            />
                        </div>
                        <div>
                            <label className="label" htmlFor="end">
                                End <span className="text-red-500">*</span>
                            </label>
                            <Controller
                                control={control}
                                name="end"
                                rules={{ required: 'End is required' }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <DatePicker
                                            selected={field.value ? new Date(field.value) : null}
                                            onChange={(date) => field.onChange(date)}
                                            dateFormat="MM/yyyy"
                                            className={classNames('input', {
                                                'input-invalid': !!error,
                                            })}
                                            showMonthYearPicker
                                            id="end"
                                        />
                                        {error && (
                                            <span className="input-error">{error.message}</span>
                                        )}
                                    </>
                                )}
                            />
                        </div>
                    </div>
                    <Input
                        id="grade"
                        name="grade"
                        type="text"
                        label="Grade"
                        register={register('grade')}
                    />
                    <Input
                        type="textarea"
                        label="Description"
                        id="description"
                        name="description"
                        rows={3}
                        register={register('description')}
                    />
                </Card.Body>
                <Card.Footer>
                    <div className="flex justify-end space-x-2">
                        <Button type="button" variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">Submit</Button>
                        {qualificationId && (
                            <Button type="button" variant="danger" onClick={onQualificationDelete}>
                                Delete
                            </Button>
                        )}
                    </div>
                </Card.Footer>
            </form>
        </Card>
    );
};
