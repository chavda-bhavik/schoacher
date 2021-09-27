import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

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

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
    const { loading: experiencesLoading, data: experiencesData } = useQuery<getAllExperiences>(
        GET_ALL_EXPERIENCES,
        {
            variables: {
                teacherId: 2,
            },
        }
    );
    const [fetchExperience, { loading: experienceLoading, data: experience }] =
        useLazyQuery<getExperience>(GET_EXPERIENCE);
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
            setSelectedExperience(experience.getExperience);
            setShowExperience(true);
        }
    }, [experience, experienceLoading]);

    const onExperienceItemClick = (data: ExperienceType) => {
        fetchExperience({ variables: { experienceId: data.id, teacherId: 2 } });
    };
    const onExperienceSubmit = (data: ExperienceType) => {
        let newExperiences = [...experienceData];
        if (selectedExperience) {
            // edit
            newExperiences = newExperiences.map((experience) => {
                if (experience.id === selectedExperience.id) return { ...data };
                else return { ...experience };
            });
        } else {
            newExperiences.push({ ...data, id: newExperiences.length + 5 });
        }
        setExperienceData(newExperiences);
        setShowExperience(false);
        setSelectedExperience(null);
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
