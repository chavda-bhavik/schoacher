import React from 'react';
import classNames from 'classnames';
import { Icon } from '@/static/Icons';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
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
