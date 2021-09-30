import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { SubjectFormType, MaterialFormType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';

interface MaterialFormProps {
    serverErrors?: FieldError[];
    selectedMaterial?: MaterialFormType;
    onSubmit: (data: MaterialFormType) => void;
    onClose?: () => void;
}

export const MaterialForm: React.FC<MaterialFormProps> = ({
    onSubmit,
    selectedMaterial,
    onClose,
    serverErrors,
}) => {
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
        if (selectedMaterial) {
            let material = { ...selectedMaterial };
            delete material.subjects;
            reset(material);
            setMaterialSubjects(
                selectedMaterial.subjects.map((subj) => ({
                    boardId: subj.boardId,
                    standardId: subj.standardId,
                    subjectId: subj.subjectId,
                }))
            );
        }
    }, [reset, selectedMaterial]);

    useEffect(() => {
        if (Array.isArray(serverErrors) && serverErrors.length > 0) {
            serverErrors.forEach((err) => {
                setError(err.field, { type: 'manual', message: err.message });
            });
        }
    }, [serverErrors, setError]);

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue('document', e.target.files[0]);
    };

    const onMaterialFormSubmit = (data) => {
        if (!materialSubjects || materialSubjects.length === 0) {
            setSubjectsError('Subjects are required');
            return;
        } else setSubjectsError(undefined);
        if (!selectedMaterial && !getValues('document')) return;
        let material: MaterialFormType = data;
        if (subjectsModified) material.subjects = materialSubjects;
        onSubmit(material);
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">{selectedMaterial ? 'Update' : 'Add'} Material</p>
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
                        accept="application/pdf"
                        onChange={onFileChange}
                        isInvalid={isSubmitted && !selectedMaterial && !getValues('document')}
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
                    <Button block type="submit">
                        Submit
                    </Button>
                </Card.Footer>
            </form>
        </Card>
    );
};
