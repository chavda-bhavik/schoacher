import React, { useState } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { MaterialForm } from './MaterialForm';

import { Qualifications } from '../Qualification/Qualifications';

interface MaterialProps {}

export const Material: React.FC<MaterialProps> = ({}) => {
    const [materialId, setMaterialId] = useState<number>();
    const [showMaterial, setShowMaterial] = useState(false);

    const onMaterialClick = (id) => {
        setMaterialId(id);
        setShowMaterial(true);
    };
    const onNewMaterialClick = () => {
        setMaterialId(null);
        setShowMaterial(true);
    };
    const onMaterialClose = () => {
        setMaterialId(null);
        setShowMaterial(false);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Material</p>
                    <IconButton onClick={onNewMaterialClick} icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 section-body">
                    <Qualifications onQualificationSelect={onMaterialClick} />
                </div>
            </section>
            <Backdrop show={showMaterial} onClose={onMaterialClose}>
                <MaterialForm materialId={materialId} onClose={onMaterialClose} />
            </Backdrop>
        </>
    );
};
