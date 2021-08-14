import React from 'react';

interface InputProps {
    name: string;
    id: string;
    type: 'string' | 'number' | 'tel' | 'password';
    label: string;
    placeholder?: string;
    required?: boolean;
    title?: string;
    pattern?: string;
    register?: any;
    isInvalid?: boolean;
    error?: string;
}

export const Input: React.FC<InputProps> = ({
    name,
    id,
    type,
    label,
    placeholder,
    required,
    title,
    pattern,
    register,
    isInvalid,
    error,
}) => {
    return (
        <div className="relative mb-4">
            <label htmlFor={id} className="leading-8 text-base">
                {label}
            </label>
            <input
                required={required}
                title={title}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                pattern={pattern}
                {...register}
                className="w-full bg-gray-400 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-primary-green rounded border border-gray-600 focus:border-green-dark text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {isInvalid && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
};
