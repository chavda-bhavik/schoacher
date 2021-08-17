import React from 'react';
import classNames from 'classnames';

interface InputProps {
    name: string;
    id: string;
    type:
        | 'text'
        | 'number'
        | 'tel'
        | 'password'
        | 'email'
        | 'textarea'
        | 'select'
        | 'radio'
        | 'checkbox';
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
    rows?: number;
    value?: string | number;
    disabled?: boolean;
    row?: boolean;
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
    rows,
    children,
    disabled,
    row = false,
}) => {
    const inputContents = () => {
        let content = null;
        switch (type) {
            case 'textarea':
                content = (
                    <textarea
                        className={classNames('input', 'form-textarea', {
                            'input-invalid': isInvalid,
                            'cursor-not-allowed': disabled,
                        })}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        rows={rows}
                        disabled={disabled}
                        {...register}
                    />
                );
                break;
            case 'radio':
                content = (
                    <input
                        type="radio"
                        className={classNames('radio', 'form-radio', {
                            'input-invalid': isInvalid,
                            'cursor-not-allowed': disabled,
                        })}
                        id={id}
                        name={name}
                        disabled={disabled}
                        {...register}
                    />
                );
                break;
            case 'checkbox':
                content = (
                    <input
                        type="checkbox"
                        className={classNames('checkbox', 'form-checkbox', {
                            'input-invalid': isInvalid,
                            'cursor-not-allowed': disabled,
                        })}
                        id={id}
                        name={name}
                        disabled={disabled}
                        {...register}
                    />
                );
                break;
            case 'select':
                content = (
                    <select
                        className={classNames('input', 'form-select', {
                            'input-invalid': isInvalid,
                        })}
                        id={id}
                        name={name}
                        disabled={disabled}
                        {...register}
                    >
                        {children}
                    </select>
                );
                break;
            default:
                content = (
                    <input
                        className={classNames('input', 'form-input', {
                            'input-invalid': isInvalid,
                            'cursor-not-allowed': disabled,
                        })}
                        id={id}
                        type={type}
                        name={name}
                        disabled={disabled}
                        placeholder={placeholder}
                        {...register}
                    />
                );
                break;
        }
        return content;
    };
    return (
        <div className={classNames(classNames, { 'mt-3': !row })}>
            {label && (
                <label className="label" htmlFor={id}>
                    {label}
                </label>
            )}
            {inputContents()}
            {note && <p className="input-note">{note}</p>}
            {isInvalid && <p className="input-error">{error}</p>}
        </div>
    );
};
