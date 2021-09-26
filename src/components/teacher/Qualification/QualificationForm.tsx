import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { QualificationType } from '@/interfaces';
import Card from '@/components/Card';
import { IconButton } from '@/components/IconButton';

interface QualificationFormProps {
    selectedQualification?: QualificationType;
    onQualificationSubmit?: (data: QualificationType) => void;
    onQualificationDelete?: () => void;
    onClose?: () => void;
    loading?: boolean;
    serverErrors?: FieldError[];
}

export const QualificationForm: React.FC<QualificationFormProps> = ({
    onClose,
    selectedQualification,
    onQualificationSubmit,
    onQualificationDelete,
    loading,
    serverErrors,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
        setError,
        clearErrors,
        unregister,
    } = useForm<QualificationType>({
        shouldUnregister: false,
    });

    useEffect(() => {
        if (selectedQualification) {
            reset(selectedQualification);
        }
        return () => {
            unregister();
        };
    }, [reset, selectedQualification, serverErrors, unregister]);

    useEffect(() => {
        if (Array.isArray(serverErrors) && serverErrors.length > 0) {
            serverErrors.forEach((err) => {
                console.log(err);
                setError(err.field, { type: 'manual', message: err.message });
            });
        }
    }, [serverErrors, clearErrors, setError]);

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">
                        {selectedQualification ? 'Update' : 'Add'} Qualification
                    </p>
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
                        <Button
                            type="button"
                            variant="secondary"
                            disabled={loading}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" loading={loading}>
                            Submit
                        </Button>
                        {selectedQualification && (
                            <Button
                                type="button"
                                variant="danger"
                                disabled={loading}
                                onClick={onQualificationDelete}
                            >
                                Delete
                            </Button>
                        )}
                    </div>
                </Card.Footer>
            </form>
        </Card>
    );
};
