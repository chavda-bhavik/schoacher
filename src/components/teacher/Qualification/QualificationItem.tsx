import React from 'react';
import dayjs from 'dayjs';

import { QualificationType } from '@/interfaces';
import { Icon } from '@/shared/Icons';

interface QualificationProps {
    qualification: QualificationType;
    onClick?: (data: QualificationType) => void;
}

export const QualificationItem: React.FC<QualificationProps> = ({ qualification, onClick }) => {
    return (
        <div
            onClick={() => onClick(qualification)}
            className="flex flex-row items-center p-1 cursor-pointer hover:bg-white group duration-150 transition-colors"
        >
            <Icon icon="book" className="mx-3 md:mx-5 group-hover:text-primary-dark" />
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium">{qualification.degree}</p>
                <p className="mb-0">{qualification.college}</p>
                <span className="text-sm font-normal text-primary-dark">
                    {dayjs(qualification.start).format('YYYY')}
                    {' - '}
                    {dayjs(qualification.end).format('YYYY')}
                </span>
            </div>
        </div>
    );
};
