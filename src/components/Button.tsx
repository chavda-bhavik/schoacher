import React from 'react';
import classNames from 'classnames';
import { Icon } from '@/static/Icons';
import { ButtonVariants } from '@/interfaces';

interface ButtonProps {
    variant?: ButtonVariants;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md';
    block?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    type = 'button',
    size = 'md',
    disabled = false,
    loading = false,
    onClick = () => {},
    className = '',
    block = false,
    children,
}) => {
    return (
        <button
            disabled={disabled || loading}
            type={type}
            className={classNames(
                'btn',
                {
                    'btn-primary': variant === 'primary',
                    'btn-secondary': variant === 'secondary',
                    'btn-danger': variant === 'danger',
                    'btn-success': variant === 'success',
                    'btn-bordered': variant === 'bordered',
                    'w-full': block,
                    'cursor-not-allowed': disabled || loading,
                    'p-3': size === 'md',
                    'px-3 py-2': size === 'sm',
                },
                className
            )}
            onClick={onClick}
        >
            {loading && <Icon icon="loader" className="mr-1 text-white" size="sm" />}
            {children}
        </button>
    );
};
