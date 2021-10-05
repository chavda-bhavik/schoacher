import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm, Controller } from 'react-hook-form';
import { DefaultEditor } from 'react-simple-wysiwyg';
import DatePicker from 'react-datepicker';

import Card from '@/components/Card';
import toast from '@/shared/toast';
import constants from '@/shared/constants';
import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { SubjectFormType } from '@/interfaces';
import { RequirementFormType } from '@/interfaces/employer';
import { setServerErrors } from '@/shared/helper';

// graphql
import {
    getRequirement,
    getRequirementVariables,
    GET_REQUIREMENT,
    GET_ALL_REQUIREMENTS,
} from '@/graphql/employer/query';
import {
    ADD_REQUIREMENT,
    addRequirement,
    addRequirementVariables,
    UPDATE_REQUIREMENT,
    updateRequirement,
    DELETE_REQUIREMENT,
    deleteRequirement,
    deleteRequirementVariables,
    updateRequirementVariables,
} from '@/graphql/employer/mutation';

interface RequirementFormProps {
    onClose: () => void;
    requirementId?: number;
}

export const RequirementForm: React.FC<RequirementFormProps> = ({ onClose, requirementId }) => {
    const { loading, data } = useQuery<getRequirement, getRequirementVariables>(GET_REQUIREMENT, {
        variables: {
            employerId: 1,
            requirementId,
        },
        skip: !requirementId,
    });
    const [addRequirement] = useMutation<addRequirement, addRequirementVariables>(ADD_REQUIREMENT, {
        refetchQueries: [GET_ALL_REQUIREMENTS],
    });
    const [updateRequirement] = useMutation<updateRequirement, updateRequirementVariables>(
        UPDATE_REQUIREMENT,
        { refetchQueries: [GET_ALL_REQUIREMENTS] }
    );
    const [deleteRequirement] = useMutation<deleteRequirement, deleteRequirementVariables>(
        DELETE_REQUIREMENT,
        { refetchQueries: [GET_ALL_REQUIREMENTS] }
    );
    const {
        register,
        handleSubmit,
        control,
        reset,
        setError,
        formState: { errors },
    } = useForm<RequirementFormType>({
        defaultValues: {
            description: null,
        },
    });
    const [requirementSubjects, setRequirementSubjects] = useState<SubjectFormType[]>([]);
    const [subjectsModified, setSubjectsModified] = useState(false);
    const [subjectsError, setSubjectsError] = useState<string>();

    useEffect(() => {
        if (!loading && data) {
            let requirement = {
                ...data.getRequirement,
            };
            delete requirement.__typename;
            delete requirement.subjects;
            reset(requirement);
            setRequirementSubjects(
                data.getRequirement.subjects.map((subject) => ({
                    boardId: subject.boardId,
                    standardId: subject.standardId,
                    subjectId: subject.subjectId,
                }))
            );
        }
    }, [reset, loading, data]);

    const onFormSubmit = async (data: RequirementFormType) => {
        if (!requirementSubjects || requirementSubjects.length === 0) {
            setSubjectsError('Subjects are required');
            return;
        }
        setSubjectsError(null);

        let requirement: RequirementFormType = {
            ...data,
            salaryFrom: data.salaryFrom ? Number(data.salaryFrom) : null,
            salaryUpTo: data.salaryUpTo ? Number(data.salaryUpTo) : null,
            startTime: data.startTime ? new Date(Number(data.startTime)).toISOString() : null,
            endTime: data.endTime ? new Date(Number(data.endTime)).toISOString() : null,
        };

        let success = false;
        if (requirementId) {
            let variables: updateRequirementVariables = {
                data: requirement,
                requirementId,
            };
            if (subjectsModified) variables.subjects = requirementSubjects;
            // calling API
            let { data } = await updateRequirement({ variables });
            if (data.updateRequirement.entity) {
                success = true;
                toast.info('Requirement Updated');
            } else if (data.updateRequirement.errors)
                setServerErrors(data.updateRequirement.errors, setError);
        } else {
            let variables: addRequirementVariables = {
                data: requirement,
                employerId: 1,
            };
            if (subjectsModified) variables.subjects = requirementSubjects;
            // calling API
            let { data } = await addRequirement({ variables });
            if (data.addRequirement.entity) {
                success = true;
                toast.success('Requirement Added');
            } else if (data.addRequirement.errors)
                setServerErrors(data.addRequirement.errors, setError);
        }
        if (success) onClose();
    };

    const onRequirementDelete = async () => {
        let requirement = await deleteRequirement({
            variables: {
                employerId: 1,
                requirementId,
            },
        });
        if (requirement.data.deleteRequirement) {
            onClose();
            toast.success('Requirement Deleted');
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">{requirementId ? 'Edit' : 'Add'} Requirement</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Card.Body>
                    <Input
                        register={register('title', {
                            required: 'Title is required',
                        })}
                        id="title"
                        name="title"
                        type="text"
                        isInvalid={!!errors.title}
                        error={errors.title?.message}
                        label="Title"
                        placeholder="Title"
                        row={true}
                    />
                    <Input
                        type="select"
                        id="type"
                        name="type"
                        register={register('type')}
                        label="Requirement Type"
                    >
                        {constants.requirementTypes.map((type, i) => (
                            <option key={i} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </Input>
                    <Input
                        type="text"
                        id="qualification"
                        name="qualification"
                        register={register('qualification')}
                        label="Qualification"
                        placeholder="Qualification"
                    />
                    <div className="grid grid-cols-2 space-x-2">
                        <div>
                            <label className="label">Start Time</label>
                            <Controller
                                name="startTime"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <DatePicker
                                        selected={value ? new Date(Number(value)) : null}
                                        onChange={(date) => onChange(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Start Time"
                                        dateFormat="h:mm aa"
                                        className="input"
                                        placeholderText="Start Time"
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <label className="label">End Time</label>
                            <Controller
                                name="endTime"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <DatePicker
                                        selected={value ? new Date(Number(value)) : null}
                                        onChange={(date) => onChange(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="End Time"
                                        dateFormat="h:mm aa"
                                        className="input"
                                        placeholderText="End Time"
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 space-x-2">
                        <Input
                            type="number"
                            id="start"
                            name="start"
                            register={register('salaryFrom')}
                            label="From"
                            placeholder="XXX,XXX"
                        />
                        <Input
                            type="number"
                            id="end"
                            name="end"
                            register={register('salaryUpTo')}
                            label="Upto"
                            placeholder="XXX,XXX"
                        />
                    </div>

                    <Subjects
                        subjects={requirementSubjects}
                        setSubjects={setRequirementSubjects}
                        setSubjectsModified={setSubjectsModified}
                    />
                    {subjectsError && <p className="input-error">{subjectsError}</p>}

                    <label className="label">Description</label>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <DefaultEditor
                                value={field.value}
                                placeholder="Write about requirement here..."
                                onChange={field.onChange}
                                className="unreset"
                            />
                        )}
                    />
                </Card.Body>
                <Card.Footer className="flex flex-row justify-end space-x-2">
                    <Button type="button" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" variant="success">
                        Submit
                    </Button>
                    {requirementId && (
                        <Button type="button" variant="danger" onClick={onRequirementDelete}>
                            Delete
                        </Button>
                    )}
                </Card.Footer>
            </form>
        </Card>
    );
};
