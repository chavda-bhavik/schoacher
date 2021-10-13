import React, { useState } from 'react';

import { IconButton } from '@/components/IconButton';
import { ExperienceForm } from '@/components/teacher/Experience/ExperienceForm';
import { Backdrop } from '@/components/Backdrop';
import { Experiences } from './Experiences';

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
    const [showExperience, setShowExperience] = useState(false);
    const [experienceId, setExperienceId] = useState<number>();

    const onExperienceClose = () => {
        setShowExperience(false);
        setExperienceId(null);
    };
    const onExperienceSelect = (id) => {
        setExperienceId(id);
        setShowExperience(true);
    };
    const onExperienceCreate = () => {
        setExperienceId(null);
        setShowExperience(true);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Experience</p>
                    <IconButton icon="plusCircle" size="md" onClick={onExperienceCreate} />
                </div>
                <div className="divide-y-2 section-body">
                    <Experiences onExperienceSelect={onExperienceSelect} />
                </div>
            </section>
            <Backdrop show={showExperience} onClose={onExperienceClose}>
                <ExperienceForm experienceId={experienceId} onClose={onExperienceClose} />
            </Backdrop>
        </>
    );
};
