import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { Wrapper } from '@/components/Wrapper';
import { QualificationItem } from './QualificationItem';
import { QualificationType } from '@/interfaces';

// graphql
import { GET_ALL_QUALIFICATIONS, getQualifications } from '@/graphql/teacher/query';

interface QualificationsProps {
    onQualificationSelect: (id: number) => void;
}

export const Qualifications: React.FC<QualificationsProps> = ({ onQualificationSelect }) => {
    const { loading: qualificationsLoading, data: qualificationsData } =
        useQuery<getQualifications>(GET_ALL_QUALIFICATIONS);
    const [qualificationData, setQualificationData] = useState<QualificationType[]>([]);

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

    return (
        <Wrapper loading={qualificationsLoading}>
            {qualificationData.map((qualification) => (
                <QualificationItem
                    key={qualification.id}
                    qualification={qualification}
                    onClick={() => onQualificationSelect(qualification.id)}
                />
            ))}
        </Wrapper>
    );
};
