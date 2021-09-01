import React from 'react';
import { Icon } from '@/static/Icons';

interface RequirementProps {
    onClick: () => void;
}

let subjects = [
    {
        id: 1,
        board: 'adsf',
        standard: 'asdf',
        subject: 'asdfasdf',
    },
    {
        id: 2,
        board: 'adsf',
        standard: 'asdf',
        subject: 'asdfasdf',
    },
];

export const Requirement: React.FC<RequirementProps> = ({ onClick }) => {
    return (
        <div
            className="flex flex-row items-center p-1 group hover:bg-white transition-colors cursor-pointer"
            onClick={onClick}
        >
            <Icon icon="building" className="mx-3 md:mx-5 group-hover:text-primary-dark" />
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium">
                    English Teacher for Standard 10 NCERT Board
                </p>
                <div className="divide-x-2 divide-primary-dark space-x-1 text-gray-800">
                    <span>Full Time</span>
                    <span className="pl-1">07:00 AM - 05:00 PM</span>
                    <span className="pl-1">B.Ed Pass</span>
                </div>
                <ul className="list-disc list-inside">
                    {subjects.map((subject) => (
                        <li className="leading-tight" key={subject.id}>
                            {subject.board} {subject.standard} {subject.subject}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
