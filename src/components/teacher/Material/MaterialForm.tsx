import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { SubjectFormType, MaterialFormType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import toast from '@/shared/toast';

// graphql
import {
    getMaterial,
    getMaterialVariables,
    GET_MATERIAL,
    GET_ALL_MATERIALS,
} from '@/graphql/teacher/query';
import {
    addMaterial,
    addMaterialVariables,
    ADD_MATERIAL,
    updateMaterial,
    updateMaterialVariables,
    UPDATE_MATERIAL,
    deleteMaterial,
    deleteMaterialVariables,
    DELETE_MATERIAL,
} from '@/graphql/teacher/mutation';

interface MaterialFormProps {
    materialId?: number;
    onClose?: () => void;
}

export const MaterialForm: React.FC<MaterialFormProps> = ({ onClose, materialId }) => {
    const { loading: materialLoading, data: materialData } = useQuery<
        getMaterial,
        getMaterialVariables
    >(GET_MATERIAL, {
        skip: !materialId,
        variables: {
            materialId,
        },
    });
    const [addMaterial] = useMutation<addMaterial, addMaterialVariables>(ADD_MATERIAL, {
        refetchQueries: [GET_ALL_MATERIALS],
    });
    const [updateMaterial] = useMutation<updateMaterial, updateMaterialVariables>(UPDATE_MATERIAL, {
        refetchQueries: [GET_ALL_MATERIALS],
    });
    const [deleteMaterial] = useMutation<deleteMaterial, deleteMaterialVariables>(DELETE_MATERIAL, {
        refetchQueries: [GET_ALL_MATERIALS],
    });
    const [materialSubjects, setMaterialSubjects] = useState<SubjectFormType[]>(null);
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        setError,
        formState: { errors, isSubmitted },
    } = useForm<MaterialFormType>();
    const [subjectsError, setSubjectsError] = useState<string>();
    const [subjectsModified, setSubjectsModified] = useState(false);

    useEffect(() => {
        if (!materialLoading && materialData) {
            let data = { ...materialData.getMaterial };
            delete data.__typename;
            delete data.id;
            let material = { ...data };
            delete material.subjects;
            reset(material);
            setMaterialSubjects(
                data.subjects.map((subj) => ({
                    boardId: subj.boardId,
                    standardId: subj.standardId,
                    subjectId: subj.subjectId,
                }))
            );
        }
    }, [materialData, materialLoading, reset]);

    const setServerErrors = (errors) => {
        errors.forEach((err) => {
            setError(err.field, { type: 'manual', message: err.message });
        });
    };

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue('document', e.target.files[0]);
    };

    const onMaterialFormSubmit = async (formData) => {
        if (!materialSubjects || materialSubjects.length === 0) {
            setSubjectsError('Subjects are required');
            return;
        } else setSubjectsError(undefined);
        if (!materialId && !getValues('document')) return;

        let success = false;
        if (materialId) {
            // edit
            let variables: updateMaterialVariables = {
                data: formData,
                materialId,
            };
            if (subjectsModified) variables.subjects = materialSubjects;
            let { data } = await updateMaterial({ variables });
            if (data.updateMaterial.entity) {
                success = true;
                toast.success('Material Updated');
            } else if (data.updateMaterial.errors) setServerErrors(data.updateMaterial.errors);
        } else {
            let variables: addMaterialVariables = {
                data: formData,
            };
            if (subjectsModified) variables.subjects = materialSubjects;
            let { data } = await addMaterial({ variables });
            if (data.addMaterial.entity) {
                success = true;
                toast.success('Material Added');
            } else if (data.addMaterial.errors) setServerErrors(data.addMaterial.errors);
        }
        if (success) {
            onClose();
        }
    };

    const onMaterialDelete = async () => {
        let material = await deleteMaterial({
            variables: {
                materialId: materialId,
            },
        });
        if (material.data.deleteMaterial) {
            toast.success('Material Deleted');
            onClose();
        }
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">{materialId ? 'Update' : 'Add'} Material</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(onMaterialFormSubmit)}>
                <Card.Body>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        label="Title"
                        row
                        required
                        register={register('title', { required: 'Title is required' })}
                        isInvalid={!!errors.title}
                        error={errors.title?.message}
                    />
                    <Input
                        type="textarea"
                        label="Description"
                        id="edescription"
                        name="edescription"
                        rows={3}
                        register={register('description')}
                    />
                    <Input
                        type="file"
                        id="file"
                        name="file"
                        required
                        accept="application/pdf"
                        onChange={onFileChange}
                        isInvalid={isSubmitted && !materialId && !getValues('document')}
                        error="File is required"
                        note="Only pdf files are allowed"
                        label="Material PDF"
                    />
                    <Subjects
                        title="Subjects"
                        subjects={materialSubjects}
                        setSubjects={(subjects) => setMaterialSubjects(subjects)}
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
                        {materialId && (
                            <Button type="button" variant="danger" onClick={onMaterialDelete}>
                                Delete
                            </Button>
                        )}
                    </div>
                </Card.Footer>
            </form>
        </Card>
    );
};
