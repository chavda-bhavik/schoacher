import React from 'react';
import Image from 'next/image';

interface ApplicantCardProps {}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({}) => {
    return (
        <section className="transform duration-500">
            <article className="shadow-lg mx-auto relative group cursor-pointer">
                <div className="overflow-hidden">
                    <Image
                        width={200}
                        height={200}
                        layout="responsive"
                        className="w-full h-auto transform hover:scale-110 duration-200"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt="John Doe"
                    />
                </div>
                <div className="p-2 my-auto pb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mt-2">John Doe</h1>
                    <h1 className="text-xl font-medium text-gray-700 mt-1">
                        School Teacher at Saraswati Vidhyalaya
                    </h1>
                    <p className="text-lg text-gray-500 mt-2">
                        Super creative and colorful illustrations by Matheus Lopes. Check out more
                        of his amazing artworks in his portfolio.
                    </p>
                </div>
                <div className="border-t pt-4 pb-4 text-center text-base text-gray-400 uppercase tracking-widest  group-hover:text-gray-600 bg-gray-50">
                    View Profile
                </div>
            </article>
        </section>
    );
};
