import { IconsSizesType, IconsType } from '@/interfaces';
import { Icon } from '@/static/Icons';
import classNames from 'classnames';
import React from 'react';

interface IconButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    icon: IconsType;
    onClick?: () => void;
    disabled?: boolean;
    size?: IconsSizesType;
    className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick,
    disabled,
    type = 'button',
    size = 'md',
    className,
    variant,
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
                },
                className
            )}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            <Icon icon={icon} size={size} />
        </button>
    );
};
