import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ExperienceItem } from '@/components/teacher/Experience/ExperienceItem';
import { Wrapper } from '@/components/Wrapper';
import { ExperienceType } from '@/interfaces';

import {
    getAllExperiences,
    getAllExperiencesVariables,
    GET_ALL_EXPERIENCES,
} from '@/graphql/teacher/query';

interface ExperiencesProps {
    onExperienceSelect: (id: number) => void;
}

export const Experiences: React.FC<ExperiencesProps> = React.memo(
    ({ onExperienceSelect }) => {
        const { loading: experiencesLoading, data: experiencesData } = useQuery<
            getAllExperiences,
            getAllExperiencesVariables
        >(GET_ALL_EXPERIENCES, {
            variables: {
                teacherId: 2,
            },
        });
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
    },
    () => true
);
