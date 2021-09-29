import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery, useMutation, OperationVariables } from '@apollo/client';

import { ExperienceItem } from '@/components/teacher/Experience/ExperienceItem';
import { IconButton } from '@/components/IconButton';
import { ExperienceType, ExperienceFormType } from '@/interfaces';
import { ExperienceForm } from '@/components/teacher/Experience/ExperienceForm';
import { Backdrop } from '@/components/Backdrop';

// graphql
import {
    getAllExperiences,
    GET_ALL_EXPERIENCES,
    getExperience,
    GET_EXPERIENCE,
} from '@/graphql/teacher/query';
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
import { Wrapper } from '@/components/Wrapper';

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
    const {
        loading: experiencesLoading,
        data: experiencesData,
        refetch,
    } = useQuery<getAllExperiences>(GET_ALL_EXPERIENCES, {
        variables: {
            teacherId: 2,
        },
    });
    const [fetchExperience, { loading: experienceLoading, data: experience }] =
        useLazyQuery<getExperience>(GET_EXPERIENCE, { fetchPolicy: 'network-only' });
    const [updateExperience] = useMutation<updateExperience, updateExperienceVariables>(
        UPDATE_EXPERIENCE
    );
    const [addExperience] = useMutation<addExperience, addExperienceVariables>(ADD_EXPERIENCE);
    const [deleteExperience] = useMutation<deleteExperience, deleteExperienceVariables>(
        DELETE_EXPERIENCE
    );

    const [serverErrors, setServerErrors] = useState<FieldError[]>();
    const [showExperience, setShowExperience] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<ExperienceFormType>(null);
    const [experienceData, setExperienceData] = useState<ExperienceType[]>(null);

    // Set All Experience Data
    useEffect(() => {
        if (!experiencesLoading && experiencesData)
            setExperienceData(experiencesData.getAllExperiences);
    }, [experiencesLoading, experiencesData]);

    // Set Single Experience Data
    useEffect(() => {
        if (
            !experienceLoading &&
            experience &&
            experience.getExperience?.id !== selectedExperience?.id
        ) {
            let data = { ...experience.getExperience };
            delete data.__typename;
            setSelectedExperience(data);
            setShowExperience(true);
        }
    }, [experience, experienceLoading, selectedExperience?.id]);

    const onExperienceItemClick = (data: ExperienceType) => {
        fetchExperience({ variables: { experienceId: data.id, teacherId: 2 } });
    };
    const onExperienceSubmit = async (formData: ExperienceFormType) => {
        let success = false;
        let subjects;
        if (formData.subjects) {
            subjects = [...formData.subjects];
            delete formData.subjects;
        }
        delete formData.id;
        if (selectedExperience) {
            let variables: updateExperienceVariables = {
                data: formData,
                experienceId: selectedExperience.id,
            };
            if (subjects) variables.subjects = subjects;
            // calling API
            let { data } = await updateExperience({ variables });
            if (data.updateExperience.entity) success = true;
            else if (data.updateExperience.errors) setServerErrors(data.updateExperience.errors);
        } else {
            let variables: addExperienceVariables = { data: formData, teacherId: 2 };
            if (subjects) variables.subjects = subjects;
            // calling API
            let { data } = await addExperience({ variables });
            if (data.addExperience.entity) success = true;
            else if (data.addExperience.errors) setServerErrors(data.addExperience.errors);
        }
        if (success) {
            refetch();
            setShowExperience(false);
        }
    };
    const onExperienceDelete = async () => {
        try {
            let experience = await deleteExperience({
                variables: {
                    teacherId: 2,
                    experienceId: selectedExperience.id,
                },
            });
            if (experience.data.deleteExperience) {
                refetch();
                setShowExperience(false);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onExperienceClose = () => {
        setShowExperience(false);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Experience</p>
                    <IconButton
                        icon="plusCircle"
                        size="md"
                        onClick={() => setShowExperience(true)}
                    />
                </div>
                <div className="divide-y-2 section-body">
                    <Wrapper loading={experiencesLoading}>
                        {experienceData &&
                            experienceData.map((experience) => (
                                <ExperienceItem
                                    experience={experience}
                                    key={experience.id}
                                    onClick={onExperienceItemClick}
                                />
                            ))}
                    </Wrapper>
                </div>
            </section>
            <Backdrop show={showExperience} onClose={onExperienceClose}>
                <ExperienceForm
                    serverErrors={serverErrors}
                    selectedExperience={selectedExperience}
                    onSubmit={onExperienceSubmit}
                    onClose={onExperienceClose}
                    onExperienceDelete={onExperienceDelete}
                />
            </Backdrop>
        </>
    );
};
