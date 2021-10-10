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
    GET_ALL_QUALIFICATIONS,
    getQualification,
    getQualificationVariables,
} from '@/graphql/teacher/query';
import {
    UPDATE_QUALIFICATION,
    updateQualification,
    updateQualificationVariables,
    addQualification,
    addQualificationVariables,
    ADD_QUALIFICATION,
    deleteQualification,
    deleteQualificationVariables,
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
        },
    });
    const [updateQualification] = useMutation<updateQualification, updateQualificationVariables>(
        UPDATE_QUALIFICATION,
        {
            refetchQueries: [GET_ALL_QUALIFICATIONS],
        }
    );
    const [addQualification] = useMutation<addQualification, addQualificationVariables>(
        ADD_QUALIFICATION,
        {
            refetchQueries: [GET_ALL_QUALIFICATIONS],
        }
    );
    const [deleteQualification] = useMutation<deleteQualification, deleteQualificationVariables>(
        DELETE_QUALIFICATION,
        {
            refetchQueries: [GET_ALL_QUALIFICATIONS],
        }
    );
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
            let data = { ...qualification.getQualification };
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
                        placeholder="Bechlor of Commerce"
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
                        placeholder="XYZ University"
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
                        placeholder="A+"
                        label="Grade / Percentage"
                        register={register('grade')}
                    />
                    <Input
                        type="textarea"
                        label="Description"
                        id="description"
                        name="description"
                        placeholder="Learned about Accounting, Finance, and Business communication. Achived gold madal for first rank."
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
