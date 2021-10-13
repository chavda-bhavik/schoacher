import React, { useState } from 'react';

import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { QualificationForm } from './QualificationForm';

// graphql
import { Qualifications } from './Qualifications';

interface QualificationProps {}

export const Qualification: React.FC<QualificationProps> = ({}) => {
    const [qualificationId, setQualificationId] = useState<number>();
    const [showQualification, setShowQualification] = useState(false);

    const onQualificationClose = () => {
        setQualificationId(null);
        setShowQualification(false);
    };
    const onQualificationSelect = (id: number) => {
        setQualificationId(id);
        setShowQualification(true);
    };
    const onQualificationCreate = () => {
        setQualificationId(null);
        setShowQualification(true);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Qualification</p>
                    <IconButton icon="plusCircle" size="md" onClick={onQualificationCreate} />
                </div>
                <div className="divide-y-2 section-body">
                    <Qualifications onQualificationSelect={onQualificationSelect} />
                </div>
            </section>
            <Backdrop show={showQualification} onClose={onQualificationClose}>
                <QualificationForm
                    qualificationId={qualificationId}
                    onClose={onQualificationClose}
                />
            </Backdrop>
        </>
    );
};
