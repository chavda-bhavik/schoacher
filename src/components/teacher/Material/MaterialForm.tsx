import React, { ChangeEvent, useEffect, useState } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Subjects } from '@/components/Input/Subjects';
import { Subject, Material } from '@/interfaces';
import { useForm } from 'react-hook-form';

interface MaterialFormProps {
    onClose: () => void;
    selectedMaterial?: Material;
    onSubmit: (data: Material) => void;
}

export const MaterialForm: React.FC<MaterialFormProps> = ({
    onClose,
    onSubmit,
    selectedMaterial,
}) => {
    const [materialSubjects, setMaterialSubjects] = useState<Subject[]>(null);
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        formState: { errors, isSubmitted },
    } = useForm<Material>();
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
        let material: Material = {
            ...data,
            subjects: materialSubjects,
        };
        onSubmit(material);
    };

    return (
        <Backdrop show={true} onClose={onClose}>
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">Add/Edit Material</p>
                    {/* <Icon icon="close" /> */}
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onMaterialFormSubmit)}>
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
                        <Button block className="mt-5" type="submit">
                            Add / Update
                        </Button>
                    </form>
                </div>
            </div>
        </Backdrop>
    );
};
