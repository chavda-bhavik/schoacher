import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { Wrapper } from '@/components/Wrapper';
import { QualificationType } from '@/interfaces';
import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { QualificationItem } from './QualificationItem';
import { QualificationForm } from './QualificationForm';

// graphql
import { GET_ALL_QUALIFICATIONS, getQualifications } from '@/graphql/teacher/query';
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
    const [updateQualification, {}] = useMutation<updateQualification>(UPDATE_QUALIFICATION);
    const [addQualification] = useMutation<addQualification>(ADD_QUALIFICATION);
    const [deleteQualification] = useMutation<deleteQualification>(DELETE_QUALIFICATION);

    const [serverErrors, setServerErrors] = useState<FieldError[]>();
    const [showQualification, setShowQualification] = useState(false);
    const [qualificationData, setQualificationData] = useState<QualificationType[]>([]);
    const [selectedQualification, setSelectedQualification] = useState<QualificationType>(null);

    useEffect(() => {
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
    const onQualificationUpdate = async (formData: QualificationType) => {
        let success = false;
        if (selectedQualification) {
            // edit
            delete formData.id;
            let response = await updateQualification({
                variables: {
                    updateQualificationData: formData,
                    updateQualificationQualificationId: selectedQualification.id,
                },
            });
            if (response.data.updateQualification.entity) {
                refetch();
                success = true;
            }
        } else {
            let { data, errors } = await addQualification({
                variables: {
                    data: formData,
                    teacherId: 2,
                },
            });
            if (data.addQualification.entity) {
                refetch();
                success = true;
            } else if (data.addQualification.errors) setServerErrors(data.addQualification.errors);
            else console.log(errors);
        }
        if (success) {
            setShowQualification(false);
            setSelectedQualification(null);
        }
    };
    const onQualificationDelete = async () => {
        try {
            let qualification = await deleteQualification({
                variables: {
                    teacherId: 2,
                    qualificationId: selectedQualification.id,
                },
            });
            if (qualification.data.deleteQualification) {
                refetch();
                setSelectedQualification(null);
                setShowQualification(false);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onQualificationClose = () => {
        setSelectedQualification(null);
        setShowQualification(false);
        setServerErrors(null);
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
                    <Wrapper loading={qualificationsLoading}>
                        {qualificationData.map((qualification) => (
                            <QualificationItem
                                key={qualification.id}
                                qualification={qualification}
                                onClick={onQualificationItemClick}
                            />
                        ))}
                    </Wrapper>
                </div>
            </section>
            <Backdrop show={showQualification} onClose={onQualificationClose}>
                <QualificationForm
                    serverErrors={serverErrors}
                    selectedQualification={selectedQualification}
                    onQualificationSubmit={onQualificationUpdate}
                    onQualificationDelete={onQualificationDelete}
                    onClose={onQualificationClose}
                />
            </Backdrop>
        </>
    );
};
