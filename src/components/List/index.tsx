import React from 'react';
import { ListItem } from './ListItem';

interface ListProps {}

const List: React.FC<ListProps> = ({ children }) => {
    return (
        <div className="border-t border-gray-200">
            <dl>{children}</dl>
        </div>
    );
};

export default Object.assign(List, {
    Item: ListItem,
});
