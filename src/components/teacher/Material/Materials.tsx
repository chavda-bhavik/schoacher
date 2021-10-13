import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { MaterialType } from '@/interfaces';
import { MaterialItem } from './MaterialItem';
import { Wrapper } from '@/components/Wrapper';

import { getAllMaterials, GET_ALL_MATERIALS } from '@/graphql/teacher/query';

interface MaterialsProps {
    onMaterialSelect: (id: number) => void;
}

export const Materials: React.FC<MaterialsProps> = ({ onMaterialSelect }) => {
    const { loading: materialsLoading, data: materialsData } =
        useQuery<getAllMaterials>(GET_ALL_MATERIALS);
    const [materials, setMaterials] = useState<MaterialType[]>(null);

    useEffect(() => {
        if (!materialsLoading && materialsData) setMaterials(materialsData.getAllMaterials);
    }, [materialsLoading, materialsData]);

    return (
        <Wrapper loading={materialsLoading}>
            {materials &&
                materials.map((material) => (
                    <MaterialItem
                        material={material}
                        key={material.id}
                        onClick={() => onMaterialSelect(material.id)}
                    />
                ))}
        </Wrapper>
    );
};
