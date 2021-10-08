import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ApplicantCardProps {
    id: number;
    photoUrl?: string;
    name?: string;
    headline?: string;
    about?: string;
}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({
    id,
    photoUrl,
    name,
    headline,
    about,
}) => {
    return (
        <Link href={`/employer/view-profile/${id}`}>
            <a className="transform duration-500 rounded-md block">
                <article className="relative group cursor-pointer transition-shadow duration-200 hover:shadow-md">
                    <div className="overflow-hidden rounded-t-md">
                        <Image
                            width={180}
                            height={150}
                            layout="responsive"
                            className="w-full h-auto"
                            src={photoUrl}
                            alt={`Photo of ${name}`}
                        />
                    </div>
                    <div className="p-2 my-auto bg-gray-50 rounded-b-md">
                        <h1 className="text-xl font-semibold text-gray-800 mt-2 group-hover:underline transition-all duration-200">
                            {name}
                        </h1>
                        <h1 className="text-lg font-medium text-gray-700 mt-1">{headline}</h1>
                        <p className="text-base text-gray-500 mt-2">{about}</p>
                        <p className="text-base mt-3 text-blue-500 font-medium group-hover:underline transition-all duration-200">
                            View Profile
                        </p>
                    </div>
                </article>
            </a>
        </Link>
    );
};
