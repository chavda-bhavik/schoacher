import React from 'react';
import { Experience, Subject } from '@/interfaces';
import { Icon } from '@/static/Icons';

interface ExperienceItemProps {
    experience: Experience;
    onClick?: (data: Experience) => void;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, onClick }) => {
    return (
        <div
            className="flex flex-row items-center p-1 group hover:bg-white transition-colors cursor-pointer"
            onClick={() => onClick(experience)}
        >
            <Icon icon="building" className="mx-3 md:mx-5 group-hover:text-primary-dark" />
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium">{experience.title}</p>
                <div className="divide-x-2 divide-primary-dark">
                    <span className="pr-1">{experience.type}</span>
                    <span className="pl-1">
                        {experience.start} -{' '}
                        {experience.currentlyWorking ? 'Present' : experience.end}
                    </span>
                </div>
                <ul className="list-disc list-inside">
                    {experience.subjects.map((subject) => (
                        <li className="leading-tight" key={subject.id}>
                            {subject.board} {subject.standard} {subject.subject}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <Icon icon="pencil" className="action-icon mx-5" /> */}
        </div>
    );
};
