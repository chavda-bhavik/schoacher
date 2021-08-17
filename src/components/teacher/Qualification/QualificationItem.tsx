import { Qualification } from '@/interfaces';
import { Icon } from '@/static/Icons';
import React from 'react';

interface QualificationProps {
    qualification: Qualification;
    onClick?: (data: Qualification) => void;
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
                    {new Date(qualification.start).toDateString()}
                    {'-'}
                    {new Date(qualification.end).toDateString()}
                </span>
            </div>
        </div>
    );
};
