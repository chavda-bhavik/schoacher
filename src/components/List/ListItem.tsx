import React from 'react';
import classnames from 'classnames';

interface ListItemProps {
    title: string;
    spacing?: 'sm' | 'md';
}

export const ListItem: React.FC<ListItemProps> = ({ title, children, spacing = 'md' }) => {
    return (
        <div
            className={classnames(
                'sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white odd:bg-gray-50',
                {
                    'px-4 py-5': spacing === 'md',
                    'px-2 py-3': spacing === 'sm',
                }
            )}
        >
            <dt className="text-sm font-medium text-gray-500">{title}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{children}</dd>
        </div>
    );
};
