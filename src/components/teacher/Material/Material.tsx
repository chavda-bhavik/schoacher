import React from 'react';
import { Icon } from '@/static/Icons';

interface MaterialProps {
    title?: string;
    subject?: string;
}

export const Material: React.FC<MaterialProps> = ({}) => {
    return (
        <div className="flex flex-row items-center p-1">
            <Icon icon="page" className="mx-3 md:mx-5" />
            <div className="flex-grow">
                <p className="text-xl font-medium">Maths Assignment Solutions</p>
                <p>
                    <small>for</small> Standard 10 GSEB Maths
                </p>
            </div>
            {/* <div className="flex">
                <Icon icon="download" className="action-icon mx-5" />
                <Icon icon="pencil" className="action-icon mx-5" />
            </div> */}
        </div>
    );
};
