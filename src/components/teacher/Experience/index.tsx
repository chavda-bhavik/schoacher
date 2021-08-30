import React, { useState, useEffect } from 'react';

import { ExperienceItem } from '@/components/teacher/Experience/ExperienceItem';
import { IconButton } from '@/components/IconButton';
import { ExperienceType } from '@/interfaces';
import { ExperienceForm } from '@/components/teacher/Experience/ExperienceForm';
import { Backdrop } from '@/components/Backdrop';
import JsonData from '@/static/teacher-profile-data.json';

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
    const [showExperience, setShowExperience] = useState(false);

    const [selectedExperience, setSelectedExperience] = useState<ExperienceType>(null);
    const [experienceData, setExperienceData] = useState<ExperienceType[]>(null);

    useEffect(() => {
        // @ts-ignore
        setExperienceData(JsonData.experience);
    }, []);

    // Experience
    const onExperienceItemClick = (data: ExperienceType) => {
        setSelectedExperience(data);
        setShowExperience(true);
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
