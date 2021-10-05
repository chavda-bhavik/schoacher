import React from 'react';
import { Icon } from '@/shared/Icons';
import { RequirementType } from '@/interfaces';
import dayjs from 'dayjs';
import constants from '@/shared/constants';

interface RequirementProps {
    onClick: (data: RequirementType) => void;
    requirement: RequirementType;
}

export const Requirement: React.FC<RequirementProps> = ({ onClick, requirement }) => {
    return (
        <div
            className="flex flex-row items-center p-1 group hover:bg-white transition-colors cursor-pointer"
            onClick={() => onClick(requirement)}
        >
            <Icon icon="building" className="mx-3 md:mx-5 group-hover:text-primary-dark" />
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium">{requirement.title}</p>
                <div className="divide-x-2 divide-primary-dark space-x-1 text-gray-800">
                    <span>{requirement.type}</span>
                    {requirement.startTime && requirement.endTime && (
                        <span className="pl-1">{`${dayjs(requirement.startTime).format(
                            constants.teacherProfile.dateFormat
                        )} - ${dayjs(requirement.endTime).format(
                            constants.teacherProfile.dateFormat
                        )}`}</span>
                    )}
                    <span className="pl-1">{requirement.qualification}</span>
                </div>
                <ul className="list-disc list-inside">
                    {requirement.subjects.map((subject) => (
                        <li className="leading-tight" key={subject.id}>
                            {subject.board.value} {subject.standard.value} {subject.subject.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
