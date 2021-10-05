import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';
import { useMutation, useQuery } from '@apollo/client';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { ExperienceFormType, SubjectFormType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import Card from '@/components/Card';
import constants from '@/shared/constants';
import toast from '@/shared/toast';

import {
    addExperience,
    addExperienceVariables,
    ADD_EXPERIENCE,
    deleteExperience,
    deleteExperienceVariables,
    DELETE_EXPERIENCE,
    updateExperience,
    updateExperienceVariables,
    UPDATE_EXPERIENCE,
} from '@/graphql/teacher/mutation';
import {
    getExperience,
    getExperienceVariables,
    GET_EXPERIENCE,
    GET_ALL_EXPERIENCES,
} from '@/graphql/teacher/query';
import { setServerErrors } from '@/shared/helper';

interface ExperienceFormProps {
    onClose?: () => void;
    experienceId?: number;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ onClose, experienceId }) => {
    const { loading: experienceLoading, data: experience } = useQuery<
        getExperience,
        getExperienceVariables
    >(GET_EXPERIENCE, {
        skip: !experienceId,
        variables: {
            experienceId,
            teacherId: 2,
        },
    });
    const [updateExperience] = useMutation<updateExperience, updateExperienceVariables>(
        UPDATE_EXPERIENCE,
        { refetchQueries: [GET_ALL_EXPERIENCES] }
    );
    const [addExperience] = useMutation<addExperience, addExperienceVariables>(ADD_EXPERIENCE, {
        refetchQueries: [GET_ALL_EXPERIENCES],
    });
    const [deleteExperience] = useMutation<deleteExperience, deleteExperienceVariables>(
        DELETE_EXPERIENCE,
        { refetchQueries: [GET_ALL_EXPERIENCES] }
    );
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
        if (!experienceLoading && experience) {
            let data = { ...experience.getExperience };
            delete data.__typename;
            delete data.id;
            let experienceData = { ...data };
            delete experienceData.subjects;
            reset(experienceData);
            setExperienceSubjects(
                data.subjects.map((subj) => ({
                    boardId: subj.boardId,
                    standardId: subj.standardId,
                    subjectId: subj.subjectId,
                }))
            );
        }
    }, [experience, experienceLoading, reset]);

    const handleSubmitData = async (data: ExperienceFormType) => {
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

        let success = false;
        delete experience.id;
        if (experienceId) {
            let variables: updateExperienceVariables = {
                data: experience,
                experienceId,
            };
            if (subjectsModified) variables.subjects = experienceSubjects;
            // calling API
            let { data } = await updateExperience({ variables });
            if (data.updateExperience.entity) {
                success = true;
                toast.info('Experience Updated');
            } else if (data.updateExperience.errors)
                setServerErrors(data.updateExperience.errors, setError);
        } else {
            let variables: addExperienceVariables = { data: experience, teacherId: 2 };
            if (subjectsModified) variables.subjects = experienceSubjects;
            // calling API
            let { data } = await addExperience({ variables });
            if (data.addExperience.entity) {
                success = true;
                toast.success('Experience Added');
            } else if (data.addExperience.errors)
                setServerErrors(data.addExperience.errors, setError);
        }
        if (success) {
            onClose();
        }
    };

    const onExperienceDelete = async () => {
        let experience = await deleteExperience({
            variables: {
                teacherId: 2,
                experienceId,
            },
        });
        if (experience.data.deleteExperience) {
            onClose();
            toast.success('Experience Deleted');
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">{experienceId ? 'Update' : 'Add'} Experience</p>
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
                        <Button type="button" variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">Submit</Button>
                        {experienceId && (
                            <Button type="button" variant="danger" onClick={onExperienceDelete}>
                                Delete
                            </Button>
                        )}
                    </div>
                </Card.Footer>
            </form>
        </Card>
    );
};
