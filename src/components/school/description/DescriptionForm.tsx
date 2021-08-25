import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { SchoolProfileType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import { Subjects } from '@/components/Input/Subjects';
import { Subject } from '@/interfaces';
import { DefaultEditor } from 'react-simple-wysiwyg';

interface DescriptionFormProps {
    profileData: SchoolProfileType;
    onDataSubmit?: (data: SchoolProfileType) => void;
    onClose?: () => void;
}

export const DescriptionForm: React.FC<DescriptionFormProps> = ({
    profileData,
    onDataSubmit,
    onClose,
}) => {
    const { reset, handleSubmit, control } = useForm<SchoolProfileType>({
        defaultValues: {
            about: null,
        },
    });
    const [loading, setLoading] = useState<boolean>();
    const [subjects, setSubjects] = useState<Subject[]>();

    useEffect(() => {
        let profileInfo = {
            ...profileData,
        };
        delete profileInfo.subjects;
        reset(profileInfo);
        setSubjects(profileData.subjects);
    }, [reset, profileData]);

    const onFormSubmit = async (data: SchoolProfileType) => {
        setLoading(true);
        setTimeout(() => {
            data.subjects = [...subjects];
            onDataSubmit(data);
            setLoading(false);
        }, 500);
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">About School</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(onFormSubmit)} className="w-96">
                <Card.Body className="w-96">
                    <Subjects setSubjects={setSubjects} subjects={subjects} />
                    <Controller
                        name="about"
                        control={control}
                        render={({ field }) => (
                            <DefaultEditor
                                value={field.value}
                                placeholder="Write about your school here..."
                                onChange={field.onChange}
                                className="unreset"
                            />
                        )}
                    />
                </Card.Body>
                <Card.Footer>
                    <Button block loading={loading} type="submit">
                        Update
                    </Button>
                </Card.Footer>
            </form>
        </Card>
    );
};
