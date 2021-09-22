import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { Backdrop } from '@/components/Backdrop';
import { QualificationType } from '@/interfaces';
import { IconButton } from '@/components/IconButton';
import { QualificationItem } from './QualificationItem';
import { QualificationForm } from './QualificationForm';

// graphql
import { GET_ALL_QUALIFICATIONS } from '@/graphql/teacher/query/qualifications';
import { getQualifications } from '@/graphql/teacher/query/__generated__/getQualifications';
import {
    UPDATE_QUALIFICATION,
    updateQualification,
    addQualification,
    ADD_QUALIFICATION,
    deleteQualification,
    DELETE_QUALIFICATION,
} from '@/graphql/teacher/mutation';

interface QualificationProps {}

export const Qualification: React.FC<QualificationProps> = ({}) => {
    const {
        loading: qualificationsLoading,
        data: qualificationsData,
        refetch,
    } = useQuery<getQualifications>(GET_ALL_QUALIFICATIONS, {
        variables: {
            getAllQualificationsTeacherId: 2,
        },
    });
    const [updateQualification] = useMutation<updateQualification>(UPDATE_QUALIFICATION);
    const [addQualification] = useMutation<addQualification>(ADD_QUALIFICATION);
    const [deleteQualification] = useMutation<deleteQualification>(DELETE_QUALIFICATION);
    const [showQualification, setShowQualification] = useState(false);
    const [qualificationData, setQualificationData] = useState<QualificationType[]>([]);
    const [selectedQualification, setSelectedQualification] = useState<QualificationType>(null);

    useEffect(() => {
        // @ts-ignore
        if (!qualificationsLoading && qualificationsData) {
            setQualificationData(
                qualificationsData.getAllQualifications.map((q) => ({
                    id: q.id,
                    start: q.start,
                    end: q.end,
                    college: q.college,
                    degree: q.degree,
                    grade: q.grade,
                    description: q.description,
                }))
            );
        }
    }, [qualificationsData, qualificationsLoading]);

    const onQualificationItemClick = (data: QualificationType) => {
        setSelectedQualification(data);
        setShowQualification(true);
    };
    const onQualificationUpdate = async (data: QualificationType) => {
        if (selectedQualification) {
            // edit
            delete data.id;
            let response = await updateQualification({
                variables: {
                    updateQualificationData: data,
                    updateQualificationQualificationId: selectedQualification.id,
                },
            });
            if (response.data.updateQualification.entity) refetch();
        } else {
            let response = await addQualification({
                variables: {
                    data,
                    teacherId: 2,
                },
            });
            if (response.data.addQualification.entity) refetch();
        }
        setShowQualification(false);
        setSelectedQualification(null);
    };
    const onQualificationDelete = async () => {
        try {
            let qualification = await deleteQualification({
                variables: {
                    teacherId: 2,
                    qualificationId: selectedQualification.id,
                },
            });
            if (qualification.data.deleteQualification) refetch();
        } catch (err) {
            console.log(err);
        }
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
                    onQualificationDelete={onQualificationDelete}
                    onClose={onQualificationClose}
                />
            </Backdrop>
        </>
    );
};
