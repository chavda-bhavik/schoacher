import React from 'react';
import classNames from 'classnames';

interface InputProps {
    name: string;
    id: string;
    type: 'text' | 'number' | 'tel' | 'password' | 'email';
    label?: string;
    placeholder?: string;
    required?: boolean;
    register?: any;
    title?: string;
    pattern?: string;
    className?: string;
    note?: string;
    error?: string;
    isInvalid?: boolean;
}

export const Input: React.FC<InputProps> = ({
    name,
    id,
    type,
    label,
    placeholder,
    className,
    isInvalid,
    register,
    note,
    error,
}) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label
                    className="leading-8 text-base tracking-wide text-gray-700 font-bold mb-2"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                className={classNames('input', {
                    'input-invalid': isInvalid,
                })}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                {...register}
            />
            {note && <p className="text-gray-600 text-xs italic">{note}</p>}
            {isInvalid && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
};
