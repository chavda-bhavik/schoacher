import React from 'react';
import classNames from 'classnames';

interface ContentPlaceholderProps {
    className?: string;
}

export const ContentPlaceholder: React.FC<ContentPlaceholderProps> = ({ className }) => {
    return <div className={classNames('animate-pulse h-6 bg-gray-400 rounded-sm', className)} />;
};
