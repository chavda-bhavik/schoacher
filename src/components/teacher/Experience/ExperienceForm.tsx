import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import { Backdrop } from '@/components/Backdrop';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { Experience, Subject } from '@/interfaces';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';

interface ExperienceFormProps {
    onClose: () => void;
    onSubmit: (data: Experience) => void;
    selectedExperience?: Experience;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
    onClose,
    onSubmit,
    selectedExperience,
}) => {
    const {
        register,
        handleSubmit,
        control,
        getValues,
        setValue,
        reset,
        watch,
        formState: { errors },
    } = useForm<Experience>();
    const [experienceSubjects, setExperienceSubjects] = useState<Subject[]>(null);
    const [error, setError] = useState<string>(null);
    const currentlyWorkingWatcher = watch('currentlyWorking');

    useEffect(() => {
        if (currentlyWorkingWatcher) setValue('end', null);
    }, [currentlyWorkingWatcher, setValue]);

    useEffect(() => {
        if (selectedExperience) {
            let experience = { ...selectedExperience };
            delete experience.subjects;
            reset(experience);
            setExperienceSubjects(selectedExperience.subjects);
        }
    }, [reset, selectedExperience]);

    const handleSubmitData = (data: Experience) => {
        if (!experienceSubjects || experienceSubjects.length === 0) {
            setError('Subjects are required');
            return;
        }
        setError(null);
        let experience: Experience = {
            ...data,
            subjects: experienceSubjects,
        };
        onSubmit(experience);
    };

    return (
        <Backdrop show={true} onClose={onClose}>
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">Add/Edit Expeience</p>
                    {/* <Icon icon="close" /> */}
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(handleSubmitData)}>
                        <Input
                            id="title"
                            name="title"
                            type="text"
                            label="Title"
                            register={register('title', {
                                required: 'Title is required',
                            })}
                            isInvalid={!!errors.title}
                            error={errors.title?.message}
                        />
                        <Input
                            type="select"
                            id="type"
                            name="type"
                            label="Type"
                            register={register('type')}
                        >
                            <option value="school">School</option>
                            <option value="tution">Tution</option>
                            <option value="home-batch">Home Batch</option>
                        </Input>
                        <Input
                            id="schoolName"
                            name="schoolName"
                            type="text"
                            label="School/Tution Name"
                            register={register('schoolName', {
                                required: 'School Name is required',
                            })}
                            isInvalid={!!errors.schoolName}
                            error={errors.schoolName?.message}
                        />
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <div>
                                <label className="label" htmlFor="estart">
                                    Start
                                </label>
                                <Controller
                                    control={control}
                                    name="start"
                                    rules={{ required: 'Start date is required' }}
                                    render={({ field }) => (
                                        <DatePicker
                                            selected={field.value ? new Date(field.value) : null}
                                            onChange={(date) => field.onChange(date.toString())}
                                            dateFormat="MM/yyyy"
                                            className={classNames('input', {
                                                'input-invalid': !!errors.start,
                                            })}
                                            showMonthYearPicker
                                            id="start"
                                        />
                                    )}
                                />
                                {!!errors.start && (
                                    <p className="input-error">{errors.start?.message}</p>
                                )}
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
                                            onChange={(date) =>
                                                field.onChange(date ? date.toString() : null)
                                            }
                                            dateFormat="MM/yyyy"
                                            className="input"
                                            showMonthYearPicker
                                            id="end"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <Input
                            type="checkbox"
                            id="currentlyWorking"
                            name="currentlyWorking"
                            label="Currently Working?"
                            register={register('currentlyWorking', {
                                validate: (v) => !!v || !!getValues('end'),
                            })}
                            isInvalid={!!errors.currentlyWorking}
                            error="Please provide End Date or check currently working."
                        />
                        <Input
                            type="textarea"
                            label="Description"
                            id="description"
                            name="description"
                            register={register('description')}
                            rows={3}
                        />
                        <Subjects
                            title="Subjects"
                            subjects={experienceSubjects}
                            setSubjects={(subjects) => setExperienceSubjects(subjects)}
                        />
                        {error && <p className="input-error">{error}</p>}
                        <Button block className="mt-5" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
                {/* <div className="bg-dustWhite p-3 border-b-2 border-gray-900"></div> */}
            </div>
        </Backdrop>
    );
};
