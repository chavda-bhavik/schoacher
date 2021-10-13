import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ApplicantCardProps {
    photoUrl?: string;
    name?: string;
    headline?: string;
    about?: string;
    teacherId: number;
}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({
    photoUrl,
    name,
    teacherId,
    headline,
    about,
}) => {
    return (
        <Link href={`/employer/view-profile/${teacherId}`}>
            <a className="transform duration-500 block rounded border-2 border-gray-200">
                <article className="relative group cursor-pointer rounded-md transition-all duration-200 hover:shadow-md border-2 border-transparent hover:border-gray-300">
                    <div className="overflow-hidden rounded-t-md bg-gray-300">
                        <Image
                            width={180}
                            height={150}
                            layout="responsive"
                            className="w-full h-auto bg-gray-300"
                            src={photoUrl}
                            alt={`Photo of ${name}`}
                        />
                    </div>
                    <div className="p-2 my-auto bg-dustWhite rounded-b-md">
                        <h1 className="text-xl font-semibold text-gray-800 mt-2 group-hover:underline transition-all duration-200">
                            {name}
                        </h1>
                        <h1 className="text-lg font-medium text-gray-700 mt-1">{headline}</h1>
                        <p
                            className="text-base text-gray-600 mt-2"
                            dangerouslySetInnerHTML={{ __html: about }}
                        />
                        <p className="text-base mt-3 text-blue-500 font-medium group-hover:underline transition-all duration-200">
                            View Profile
                        </p>
                    </div>
                </article>
            </a>
        </Link>
    );
};
