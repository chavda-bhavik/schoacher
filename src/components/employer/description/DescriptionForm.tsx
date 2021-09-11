import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { EmployerProfileType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import { Subjects } from '@/components/Input/Subjects';
import { Subject } from '@/interfaces';
import { DefaultEditor } from 'react-simple-wysiwyg';

interface DescriptionFormProps {
    profileData: EmployerProfileType;
    onDataSubmit?: (data: EmployerProfileType) => void;
    onClose?: () => void;
}

export const DescriptionForm: React.FC<DescriptionFormProps> = ({
    profileData,
    onDataSubmit,
    onClose,
}) => {
    const { reset, handleSubmit, control } = useForm<EmployerProfileType>({
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

    const onFormSubmit = async (data: EmployerProfileType) => {
        console.log(data.about);
        setLoading(true);
        setTimeout(() => {
            data.subjects = [...subjects];
            onDataSubmit(data);
            setLoading(false);
        }, 500);
    };

    return (
        <Card asModal>
            <Card.Header>
                <div className="flex flex-row justify-between items-center">
                    <p className="title">About</p>
                    <IconButton icon="close" onClick={onClose} />
                </div>
            </Card.Header>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Card.Body>
                    <Subjects setSubjects={setSubjects} subjects={subjects} />
                    <Controller
                        name="about"
                        control={control}
                        render={({ field }) => (
                            <DefaultEditor
                                value={field.value}
                                placeholder="Write about your school/tution here..."
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
