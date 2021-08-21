import React, { useEffect, useState } from 'react';

import JsonData from '@/static/teacher-profile-data.json';
import { Backdrop } from '@/components/Backdrop';
import { QualificationType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import { QualificationItem } from './QualificationItem';
import { QualificationForm } from './QualificationForm';

interface QualificationProps {}

export const Qualification: React.FC<QualificationProps> = ({}) => {
    const [showQualification, setShowQualification] = useState(false);
    const [qualificationData, setQualificationData] = useState<QualificationType[]>([]);
    const [selectedQualification, setSelectedQualification] = useState<QualificationType>(null);

    useEffect(() => {
        // @ts-ignore
        setQualificationData(JsonData.qualification);
    }, []);

    const onQualificationItemClick = (data: QualificationType) => {
        setSelectedQualification(data);
        setShowQualification(true);
    };
    const onQualificationUpdate = (data: QualificationType) => {
        let newQualifications = [...qualificationData];
        if (selectedQualification) {
            // edit
            newQualifications = newQualifications.map((qualification) => {
                if (qualification.id === selectedQualification.id) return { ...data };
                else return { ...qualification };
            });
        } else {
            newQualifications.push({ ...data });
        }
        setQualificationData(newQualifications);
        setShowQualification(false);
        setSelectedQualification(null);
    };
    const onQualificationClose = () => {
        setSelectedQualification(null);
        setShowQualification(false);
    };

    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Qualification</p>
                    <IconButton
                        icon="plusCircle"
                        size="md"
                        onClick={() => setShowQualification(true)}
                    />
                </div>
                <div className="divide-y-2 section-body">
                    {qualificationData.map((qualification) => (
                        <QualificationItem
                            key={qualification.id}
                            qualification={qualification}
                            onClick={onQualificationItemClick}
                        />
                    ))}
                </div>
            </section>
            <Backdrop show={showQualification} onClose={onQualificationClose}>
                <QualificationForm
                    selectedQualification={selectedQualification}
                    onQualificationSubmit={onQualificationUpdate}
                    onClose={onQualificationClose}
                />
            </Backdrop>
        </>
    );
};
