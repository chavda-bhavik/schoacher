import React from 'react';
import { Icon } from '@/static/Icons';
import { MaterialType } from '@/interfaces';

interface MaterialItemProps {
    material: MaterialType;
    onClick?: (data: MaterialType) => void;
}

export const MaterialItem: React.FC<MaterialItemProps> = ({ material, onClick = () => {} }) => {
    return (
        <div
            className="flex flex-row items-center p-1 transition-colors hover:bg-white cursor-pointer"
            onClick={() => onClick(material)}
        >
            <Icon icon="page" className="mx-3 md:mx-5" />
            <div className="flex-grow">
                <p className="text-xl font-medium">{material.title}</p>
                <ul className="list-disc list-inside">
                    {material.subjects &&
                        material.subjects.map((subject) => (
                            <li className="leading-tight" key={subject.id}>
                                {subject.board} {subject.standard} {subject.subject}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="flex">
                <Icon icon="download" className="action-icon mx-5 cursor-pointer" />
            </div>
        </div>
    );
};
