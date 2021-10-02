import React from 'react';
import dayjs from 'dayjs';

import { ExperienceType } from '@/interfaces';
import { Icon } from '@/static/Icons';
import constants from '@/static/constants';

interface ExperienceItemProps {
    experience: ExperienceType;
    onClick?: (data: ExperienceType) => void;
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
                        {dayjs(experience.start).format(constants.teacherProfile.dateFormat)}
                        {' - '}
                        {experience.currentlyWorking
                            ? 'Present'
                            : dayjs(experience.end).format(constants.teacherProfile.dateFormat)}
                    </span>
                </div>
                <ul className="list-disc list-inside">
                    {experience.subjects.map((subject, i) => (
                        <li className="leading-tight" key={i}>
                            {subject.board.value} {subject.standard.value} {subject.subject.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
