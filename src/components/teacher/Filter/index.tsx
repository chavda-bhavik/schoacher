import React from 'react';

interface FilterProps {
    title: string;
    text: string;
}

export const Filter: React.FC<FilterProps> = ({ title, text }) => {
    return (
        <div className="bg-primary-green rounded-xl border-2 border-primary-dark max-w-max flex flex-row items-center">
            <span className="text-white font-bold mx-2">{title}</span>
            <div className="bg-primary-light rounded-lg border-2 border-primary-dark text-gray-900 font-bold p-1 px-2 whitespace-nowrap">
                {text}
            </div>
        </div>
    );
};
