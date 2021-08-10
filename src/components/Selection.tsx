import React from 'react';

interface SelectionProps {}

export const Selection: React.FC<SelectionProps> = ({}) => {
    return (
        <>
            <label htmlFor="selection" className="leading-8 text-base">
                What best describes you?
            </label>
            <div className="inline-flex w-full mb-4">
                <input
                    type="radio"
                    id="teacher"
                    defaultChecked
                    className="hidden"
                    name="selection"
                    value="teacher"
                />
                <label
                    htmlFor="teacher"
                    className="bg-gray-300 w-1/2 border border-r-0 border-black cursor-pointer py-2 px-4 text-center label-checked font-medium rounded-l"
                >
                    Teacher
                </label>
                <input
                    type="radio"
                    id="school"
                    className="hidden"
                    name="selection"
                    value="school"
                />
                <label
                    htmlFor="school"
                    className="bg-gray-300 w-1/2 border border-l-0 border-black cursor-pointer py-2 px-4 text-center label-checked font-medium rounded-r"
                >
                    School
                </label>
            </div>
        </>
    );
};
