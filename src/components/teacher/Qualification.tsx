import { Icon } from '@/static/Icons';
import React from 'react';

interface QualificationProps {
    title?: string;
    college?: string;
    duration?: string;
}

export const Qualification: React.FC<QualificationProps> = ({ title, college, duration }) => {
    return (
        <div className="flex flex-row items-center p-1">
            <Icon icon="book" className="mx-3 md:mx-5" />
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium">Bechlor of Commerce</p>
                <p className="mb-0">Navyug arts &amp; commerce college</p>
                <span className="text-sm font-normal text-primary-dark">2017-2019</span>
            </div>
            {/* <Icon icon="pencil" className="action-icon mx-3 md:mx-5" /> */}
        </div>
    );
};
