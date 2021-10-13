import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ExperienceItem } from '@/components/teacher/Experience/ExperienceItem';
import { Wrapper } from '@/components/Wrapper';
import { ExperienceType } from '@/interfaces';

import { getAllExperiences, GET_ALL_EXPERIENCES } from '@/graphql/teacher/query';

interface ExperiencesProps {
    onExperienceSelect: (id: number) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onExperienceSelect }) => {
    const { loading: experiencesLoading, data: experiencesData } =
        useQuery<getAllExperiences>(GET_ALL_EXPERIENCES);
    const [experienceData, setExperienceData] = useState<ExperienceType[]>(null);

    // Set All Experience Data
    useEffect(() => {
        if (!experiencesLoading && experiencesData)
            setExperienceData(experiencesData.getAllExperiences);
    }, [experiencesLoading, experiencesData]);

    return (
        <Wrapper loading={experiencesLoading}>
            {experienceData &&
                experienceData.map((experience) => (
                    <ExperienceItem
                        experience={experience}
                        key={experience.id}
                        onClick={() => onExperienceSelect(experience.id)}
                    />
                ))}
        </Wrapper>
    );
};
