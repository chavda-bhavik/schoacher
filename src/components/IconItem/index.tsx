import { IconsType } from '@/interfaces';
import { Icon } from '@/static/Icons';
import React from 'react';

interface IconItemProps {
    icon: IconsType;
}

export const IconItem: React.FC<IconItemProps> = ({ icon, children }) => {
    return (
        <div className="icon-item">
            <Icon icon={icon} size="sm" className="mx-2" />
            <span className="icon-item-title">{children}</span>
        </div>
    );
};
