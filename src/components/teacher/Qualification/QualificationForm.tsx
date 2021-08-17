import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';

import { Backdrop } from '@/components/Backdrop';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Qualification } from '@/interfaces';

interface QualificationFormProps {
    show?: boolean;
    onClose: () => void;
    selectedQualification?: Qualification;
    onQualificationSubmit?: (data: Qualification) => void;
}

export const QualificationForm: React.FC<QualificationFormProps> = ({
    onClose,
    show = false,
    selectedQualification,
    onQualificationSubmit,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<Qualification>();

    useEffect(() => {
        if (selectedQualification) {
            reset({
                ...selectedQualification,
                start: new Date(selectedQualification.start),
                end: new Date(selectedQualification.end),
            });
        } else reset(null);
    }, [reset, selectedQualification]);

    return (
        <Backdrop show={show} onClose={onClose}>
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">Manage Qualification</p>
                    {/* <Icon icon="close" /> */}
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onQualificationSubmit)}>
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
                                            selected={field.value}
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
                                            selected={field.value}
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
                        <Button className="mt-3" type="submit" block>
                            Update
                        </Button>
                    </form>
                </div>
                {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
            </div>
        </Backdrop>
    );
};
