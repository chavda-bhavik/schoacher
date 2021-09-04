import React from 'react';
import Image from 'next/image';

interface RequirementProps {
    imageUrl: string;
    title: string;
    schoolName: string;
    type: string;
    location: string;
}

export const Requirement: React.FC<RequirementProps> = ({}) => {
    return (
        <div className="flex flex-row items-center p-1 group cursor-pointer hover:bg-gray-200 group transition-all duration-150 py-3">
            <div className="w-20 flex items-center justify-center">
                <Image
                    src="https://source.unsplash.com/umhyDLYKfLM/350x250"
                    width={55}
                    height={55}
                    className="rounded-md self-center object-fill"
                    layout="intrinsic"
                    alt="Maui Ankur School of Science"
                />
            </div>
            <div className="flex-grow">
                <p className="mb-0 text-xl font-medium group-hover:underline transition duration-150">
                    English Teacher Needed for Standard 11 &amp; 12
                </p>
                <p className="mb0 text-base">Mauni Ankur Scool of Science</p>
                <div className="divide-x-2 divide-primary-dark text-sm font-normal space-x-1">
                    <span>Full Time</span>
                    <span className="pl-1">Surat, Gujarat, India</span>
                    <span className="pl-1">20K - 40K</span>
                </div>
            </div>
        </div>
    );
};
