import React from 'react';
import Image from 'next/image';

interface RequirementProps {
    imageUrl: string;
    title: string;
    schoolName: string;
    type: string;
    location: string;
}

export const Requirement: React.FC<RequirementProps> = ({
    imageUrl,
    title,
    schoolName,
    type,
    location,
}) => {
    return (
        <div className="flex flex-row items-center p-1 group cursor-pointer hover:bg-gray-200 group transition-all duration-150 py-3 self-center">
            <div className="w-24 md:w-20 flex items-center justify-center">
                <Image
                    src={imageUrl}
                    width={55}
                    height={55}
                    className="rounded-md self-center object-fill"
                    layout="intrinsic"
                    alt="Maui Ankur School of Science"
                />
            </div>
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium group-hover:underline transition duration-150">
                    {title}
                </p>
                <p className="mb0 text-base">{schoolName}</p>
                <div className="divide-x-2 divide-primary-dark text-sm font-normal space-x-1">
                    <span>{type}</span>
                    <span className="pl-1">{location}</span>
                    <span className="pl-1">20K - 40K</span>
                </div>
            </div>
        </div>
    );
};
