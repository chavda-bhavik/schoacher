import React from 'react';
import classNames from 'classnames';
import { Icon } from '@/static/Icons';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    block?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    type = 'button',
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
                'p-3',
                {
                    'btn-primary': variant === 'primary',
                    'btn-secondary': variant === 'secondary',
                    'btn-danger': variant === 'danger',
                    'w-full': block,
                    'cursor-not-allowed': disabled || loading,
                },
                className
            )}
            onClick={onClick}
        >
            {loading && <Icon icon="loader" className="mr-1 text-white" />}
            {children}
        </button>
    );
};
