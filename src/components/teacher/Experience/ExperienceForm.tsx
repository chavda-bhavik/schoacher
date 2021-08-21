import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { ExperienceType, Subject } from '@/interfaces';
import Card from '@/components/Card';
import classNames from 'classnames';
import { IconButton } from '@/components/IconButton';

interface ExperienceFormProps {
    onSubmit: (data: ExperienceType) => void;
    onClose?: () => void;
    selectedExperience?: ExperienceType;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
    onSubmit,
    selectedExperience,
    onClose,
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
    } = useForm<ExperienceType>();
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

    const handleSubmitData = (data: ExperienceType) => {
        if (!experienceSubjects || experienceSubjects.length === 0) {
            setError('Subjects are required');
            return;
        }
        setError(null);
        let experience: ExperienceType = {
            ...data,
            subjects: experienceSubjects,
        };
        onSubmit(experience);
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">Add/Edit Experience</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <Card.Body>
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
                </Card.Body>
                <Card.Footer>
                    <Button block type="submit">
                        Submit
                    </Button>
                </Card.Footer>
            </form>
        </Card>
    );
};
