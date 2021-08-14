import { IconsSizesType, IconsType } from '@/interfaces';
import { Icon } from '@/static/Icons';
import classNames from 'classnames';
import React from 'react';

interface IconButtonProps {
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
    size = 'md',
    className,
}) => {
    return (
        <button className={classNames(className)} onClick={onClick} disabled={disabled}>
            <Icon icon={icon} size={size} />
        </button>
    );
};
