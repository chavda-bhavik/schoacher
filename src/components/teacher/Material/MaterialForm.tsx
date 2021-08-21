import React, { ChangeEvent, useEffect, useState } from 'react';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { Subject, MaterialType } from '@/interfaces';
import { useForm } from 'react-hook-form';
import { IconButton } from '@/components/IconButton';

interface MaterialFormProps {
    selectedMaterial?: MaterialType;
    onSubmit: (data: MaterialType) => void;
    onClose?: () => void;
}

export const MaterialForm: React.FC<MaterialFormProps> = ({
    onSubmit,
    selectedMaterial,
    onClose,
}) => {
    const [materialSubjects, setMaterialSubjects] = useState<Subject[]>(null);
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        formState: { errors, isSubmitted },
    } = useForm<MaterialType>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (selectedMaterial) {
            let material = { ...selectedMaterial };
            delete material.subjects;
            reset(material);
            setMaterialSubjects(selectedMaterial.subjects);
        }
    }, [reset, selectedMaterial]);

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue('mediaObj', e.target.files[0]);
    };

    const onMaterialFormSubmit = (data) => {
        if (!materialSubjects || materialSubjects.length === 0) {
            setError('Subjects are required');
            return;
        } else setError(undefined);
        let material: MaterialType = {
            ...data,
            subjects: materialSubjects,
        };
        onSubmit(material);
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">Add/Edit MaterialType</p>
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
                        isInvalid={isSubmitted && !getValues('mediaObj')}
                        error="File is required"
                    />
                    <Subjects
                        title="Subjects"
                        subjects={materialSubjects}
                        setSubjects={(subjects) => setMaterialSubjects(subjects)}
                    />
                    {error && <p className="input-error">{error}</p>}
                </Card.Body>
                <Card.Footer>
                    <Button block type="submit">
                        Add / Update
                    </Button>
                </Card.Footer>
            </form>
        </Card>
    );
};
