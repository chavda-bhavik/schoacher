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
    ADD_EXPERIENCE,
    updateExperience,
    UPDATE_EXPERIENCE,
} from '@/graphql/teacher/mutation';

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
        useLazyQuery<getExperience>(GET_EXPERIENCE);
    const [updateExperience] = useMutation<updateExperience>(UPDATE_EXPERIENCE);
    const [addExperience] = useMutation<addExperience>(ADD_EXPERIENCE);
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
        if (!experienceLoading && experience) {
            let data = { ...experience.getExperience };
            delete data.__typename;
            setSelectedExperience(data);
            setShowExperience(true);
        }
    }, [experience, experienceLoading]);

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
            // edit
            let variables: OperationVariables = {
                data: formData,
                experienceId: selectedExperience.id,
            };
            if (subjects) variables.subjects = subjects;
            let { data } = await updateExperience({ variables });
            if (data.updateExperience.entity) success = true;
        } else {
            let variables: OperationVariables = { data: formData, teacherId: 2 };
            if (subjects) variables.subjects = subjects;
            let { data } = await addExperience({ variables });
            if (data.addExperience.entity) success = true;
        }
        if (success) {
            refetch();
            setShowExperience(false);
            setSelectedExperience(null);
        }
    };
    const onExperienceClose = () => {
        setShowExperience(false);
        setSelectedExperience(null);
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
                    {experienceData &&
                        experienceData.map((experience) => (
                            <ExperienceItem
                                experience={experience}
                                key={experience.id}
                                onClick={onExperienceItemClick}
                            />
                        ))}
                </div>
            </section>
            <Backdrop show={showExperience} onClose={onExperienceClose}>
                <ExperienceForm
                    selectedExperience={selectedExperience}
                    onSubmit={onExperienceSubmit}
                    onClose={onExperienceClose}
                />
            </Backdrop>
        </>
    );
};
