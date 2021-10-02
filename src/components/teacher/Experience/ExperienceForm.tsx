import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { ExperienceFormType, SubjectFormType } from '@/interfaces';
import Card from '@/components/Card';
import { IconButton } from '@/components/IconButton';
import constants from '@/shared/constants';

interface ExperienceFormProps {
    serverErrors?: FieldError[];
    onSubmit: (data: ExperienceFormType) => void;
    onClose?: () => void;
    onExperienceDelete?: () => void;
    loading?: boolean;
    selectedExperience?: ExperienceFormType;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
    onSubmit,
    selectedExperience,
    onExperienceDelete,
    onClose,
    loading,
    serverErrors,
}) => {
    const {
        register,
        handleSubmit,
        control,
        getValues,
        setValue,
        reset,
        watch,
        setError,
        formState: { errors },
    } = useForm<ExperienceFormType>();
    const [experienceSubjects, setExperienceSubjects] = useState<SubjectFormType[]>(null);
    const [subjectsModified, setSubjectsModified] = useState(false);
    const [subjectsError, setSubjectsError] = useState<string>(null);
    const currentlyWorkingWatcher = watch('currentlyWorking');

    useEffect(() => {
        if (currentlyWorkingWatcher) setValue('end', null);
    }, [currentlyWorkingWatcher, setValue]);

    useEffect(() => {
        if (Array.isArray(serverErrors) && serverErrors.length > 0) {
            serverErrors.forEach((err) => {
                setError(err.field, { type: 'manual', message: err.message });
            });
        }
    }, [serverErrors, setError]);

    useEffect(() => {
        if (selectedExperience) {
            let experience = { ...selectedExperience };
            delete experience.subjects;
            reset(experience);
            setExperienceSubjects(
                selectedExperience.subjects.map((subj) => ({
                    boardId: subj.boardId,
                    standardId: subj.standardId,
                    subjectId: subj.subjectId,
                }))
            );
        }
    }, [reset, selectedExperience]);

    const handleSubmitData = (data: ExperienceFormType) => {
        if (!experienceSubjects || experienceSubjects.length === 0) {
            setSubjectsError('Subjects are required');
            return;
        }
        setSubjectsError(null);
        let experience: ExperienceFormType = {
            ...data,
            start: new Date(data.start).toISOString(),
            end: new Date(data.end).toISOString(),
        };
        if (subjectsModified) experience.subjects = experienceSubjects;
        onSubmit(experience);
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">{selectedExperience ? 'Update' : 'Add'} Experience</p>
                    <IconButton icon="close" onClick={onClose} disabled={loading} />
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
                        {constants.experienceRequirementType.map((type, i) => (
                            <option key={i} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </Input>
                    <Input
                        id="employerName"
                        name="employerName"
                        type="text"
                        label="Employer Name"
                        register={register('employerName', {
                            required: 'Employer Name is required',
                        })}
                        isInvalid={!!errors.employerName}
                        error={errors.employerName?.message}
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
                        setSubjectsModified={setSubjectsModified}
                    />
                    {subjectsError && <p className="input-error">{subjectsError}</p>}
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
                        {selectedExperience && (
                            <Button
                                type="button"
                                variant="danger"
                                disabled={loading}
                                onClick={onExperienceDelete}
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
