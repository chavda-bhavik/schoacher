import React, { useEffect, useState } from 'react';

import { MaterialType } from '@/interfaces';
import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { MaterialForm } from './MaterialForm';
import { MaterialItem } from './MaterialItem';
import JsonData from '@/static/teacher-profile-data.json';

interface MaterialProps {}

export const Material: React.FC<MaterialProps> = ({}) => {
    const [selectedMaterial, setSelectedMaterial] = useState<MaterialType>(null);
    const [materialData, setMaterialData] = useState<MaterialType[]>(null);
    const [showMaterial, setShowMaterial] = useState(false);

    useEffect(() => {
        // @ts-ignore
        setMaterialData(JsonData.material);
    }, []);

    const onNewMaterialClick = () => {
        setSelectedMaterial(null);
        setShowMaterial(true);
    };
    const onMaterialItemClick = (data: MaterialType) => {
        setSelectedMaterial(data);
        setShowMaterial(true);
    };
    const onMaterialSubmit = (data: MaterialType) => {
        let newMaterials = [...materialData];
        if (selectedMaterial) {
            // edit
            newMaterials = newMaterials.map((material) => {
                if (material.id === selectedMaterial.id) return { ...data };
                else return { ...material };
            });
        } else {
            newMaterials.push({ ...data, id: newMaterials.length + 5 });
        }
        setMaterialData([...newMaterials]);
        setShowMaterial(false);
        setSelectedMaterial(null);
    };
    const onMaterialClose = () => {
        setShowMaterial(false);
        setSelectedMaterial(null);
    };
    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Material</p>
                    <IconButton onClick={onNewMaterialClick} icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 section-body">
                    {materialData &&
                        materialData.map((material) => (
                            <MaterialItem
                                material={material}
                                key={material.id}
                                onClick={onMaterialItemClick}
                            />
                        ))}
                </div>
            </section>
            <Backdrop show={showMaterial} onClose={onMaterialClose}>
                <MaterialForm
                    onSubmit={onMaterialSubmit}
                    selectedMaterial={selectedMaterial}
                    onClose={onMaterialClose}
                />
            </Backdrop>
        </>
    );
};
