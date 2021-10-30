import React from 'react';

interface SelectionProps {}

export const Selection: React.FC<SelectionProps> = ({}) => {
    return (
        <>
            <label htmlFor="selection" className="leading-8 text-base">
                What best describes you?
            </label>
            <div className="switcher w-full mb-4">
                <input
                    type="radio"
                    id="teacher"
                    defaultChecked
                    className="hidden"
                    name="selection"
                    value="teacher"
                />
                <label htmlFor="teacher" className="option">
                    Teacher
                </label>
                <input
                    type="radio"
                    id="school"
                    className="hidden"
                    name="selection"
                    value="school"
                />
                <label htmlFor="school" className="option">
                    School
                </label>
            </div>
        </>
    );
};
