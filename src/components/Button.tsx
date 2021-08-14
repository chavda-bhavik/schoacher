import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    type = 'button',
    disabled = false,
    onClick = () => {},
    className = '',
    loading = false,
    children,
}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={classNames(
                'btn',
                {
                    'btn-primary': variant === 'primary',
                    'btn-secondary': variant === 'secondary',
                },
                className
            )}
            onClick={onClick}
        >
            {loading ? 'Loading...': children}
        </button>
    );
};
