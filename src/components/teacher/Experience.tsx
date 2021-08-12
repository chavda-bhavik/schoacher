import { Icon } from '@/static/Icons';
import React from 'react';

interface ExperienceProps {
    school?: string;
    type?: string;
    duration?: string;
    subjects?: string[];
}

export const Experience: React.FC<ExperienceProps> = ({ school, type, duration, subjects }) => {
    return (
        <div className="flex flex-row items-center p-1">
            <Icon icon="building" className="mx-3 md:mx-5" />
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium">Saraswati Vidhyala</p>
                <div className="divide-x-2 divide-primary-dark">
                    <span className="pr-1">Full Time</span>
                    <span className="pl-1">Jan 2017 - May 2019</span>
                </div>
                <ul className="list-disc list-inside">
                    <li className="leading-tight">Standard 10 GSEB English</li>
                    <li className="leading-tight">Standard 11 GSEB English</li>
                </ul>
            </div>
            {/* <Icon icon="pencil" className="action-icon mx-5" /> */}
        </div>
    );
};
