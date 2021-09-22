import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';

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
}

export const QualificationForm: React.FC<QualificationFormProps> = ({
    onClose,
    selectedQualification,
    onQualificationSubmit,
    onQualificationDelete,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<QualificationType>();

    useEffect(() => {
        if (selectedQualification) {
            reset(selectedQualification);
        }
        return () => reset(null);
    }, [reset, selectedQualification]);

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
                        name="college"
                        type="text"
                        label="Degree Name"
                        register={register('degree', {
                            required: 'Degree is required',
                        })}
                        row={true}
                        isInvalid={!!errors.degree}
                        error={errors.degree?.message}
                    />
                    <Input
                        id="college"
                        name="college"
                        type="text"
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
                                Start
                            </label>
                            <Controller
                                control={control}
                                name="start"
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value ? new Date(field.value) : null}
                                        onChange={(date) => field.onChange(date)}
                                        dateFormat="MM/yyyy"
                                        className="input"
                                        showMonthYearPicker
                                        id="start"
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <label className="label" htmlFor="end">
                                End
                            </label>
                            <Controller
                                control={control}
                                name="end"
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value ? new Date(field.value) : null}
                                        onChange={(date) => field.onChange(date)}
                                        dateFormat="MM/yyyy"
                                        className="input"
                                        showMonthYearPicker
                                        id="start"
                                    />
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
                        <Button type="button" variant="danger" onClick={onQualificationDelete}>
                            Delete
                        </Button>
                    </div>
                </Card.Footer>
            </form>
        </Card>
    );
};
