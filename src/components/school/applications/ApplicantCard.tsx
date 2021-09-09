import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ApplicantCardProps {}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({}) => {
    return (
        <Link href="/school/view-profile/1">
            <a className="transform duration-500 rounded-md block">
                <article className="relative group cursor-pointer transition-shadow duration-200 hover:shadow-md">
                    <div className="overflow-hidden rounded-t-md">
                        <Image
                            width={180}
                            height={150}
                            layout="responsive"
                            className="w-full h-auto"
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                            alt="John Doe"
                        />
                    </div>
                    <div className="p-2 my-auto bg-gray-50 rounded-b-md">
                        <h1 className="text-xl font-semibold text-gray-800 mt-2 group-hover:underline transition-all duration-200">
                            John Doe
                        </h1>
                        <h1 className="text-lg font-medium text-gray-700 mt-1">
                            School Teacher at Saraswati Vidhyalaya
                        </h1>
                        <p className="text-base text-gray-500 mt-2">
                            Super creative and colorful illustrations by Matheus Lopes. Check out
                            more of his amazing artworks in his portfolio.
                        </p>
                        <p className="text-base mt-3 text-blue-500 font-medium group-hover:underline transition-all duration-200">
                            View Profile
                        </p>
                    </div>
                </article>
            </a>
        </Link>
    );
};
