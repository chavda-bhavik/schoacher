import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    block?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    type = 'button',
    disabled = false,
    onClick = () => {},
    className = '',
    block = false,
    children,
}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={classNames(
                'btn',
                'p-3',
                {
                    'btn-primary': variant === 'primary',
                    'btn-secondary': variant === 'secondary',
                    'btn-danger': variant === 'danger',
                    'w-full': block,
                },
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
