import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { Requirement } from './RequirementItem';
import { RequirementType } from '@/interfaces';

// graphql
import { GET_ALL_REQUIREMENTS, getAllRequirements } from '@/graphql/employer/query';
import { Wrapper } from '@/components/Wrapper';

interface RequirementsProps {
    onClick: (id: number) => void;
}

export const Requirements: React.FC<RequirementsProps> = ({ onClick }) => {
    const { loading, data } = useQuery<getAllRequirements>(GET_ALL_REQUIREMENTS);
    const [requirements, setRequirements] = useState<RequirementType[]>([]);

    useEffect(() => {
        if (!loading && data) {
            setRequirements(data.getAllRequirements);
        }
    }, [loading, data]);

    return (
        <Wrapper loading={loading}>
            {requirements.map((requirement) => (
                <Requirement
                    requirement={requirement}
                    key={requirement.id}
                    onClick={() => onClick(requirement.id)}
                />
            ))}
        </Wrapper>
    );
};
