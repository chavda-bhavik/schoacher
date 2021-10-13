import React from 'react';
import classNames from 'classnames';
import { ButtonVariants, IconsSizesType, IconsType } from '@/interfaces';
import { Icon } from '@/shared/Icons';

interface IconButtonProps {
    variant?: ButtonVariants;
    type?: 'button' | 'submit' | 'reset';
    icon: IconsType;
    onClick?: () => void;
    disabled?: boolean;
    size?: IconsSizesType;
    className?: string;
    loading?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick,
    disabled,
    type = 'button',
    size = 'md',
    className,
    variant,
    loading,
}) => {
    return (
        <button
            className={classNames(
                'btn',
                'p-1',
                {
                    'btn-primary': variant === 'primary',
                    'btn-secondary': variant === 'secondary',
                    'btn-danger': variant === 'danger',
                    'btn-success': variant === 'success',
                    'btn-bordered': variant === 'bordered',
                    'cursor-not-allowed': disabled || loading,
                },
                className
            )}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
        >
            <Icon icon={loading ? 'loader' : icon} size={size} />
        </button>
    );
};
