import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { Requirement } from './RequirementItem';
import { RequirementType } from '@/interfaces';

// graphql
import {
    GET_ALL_REQUIREMENTS,
    getAllRequirements,
    getAllRequirementsVariables,
} from '@/graphql/employer/query';
import { Wrapper } from '@/components/Wrapper';

interface RequirementsProps {}

export const Requirements: React.FC<RequirementsProps> = ({}) => {
    const { loading, data } = useQuery<getAllRequirements, getAllRequirementsVariables>(
        GET_ALL_REQUIREMENTS,
        {
            variables: {
                employerId: 1,
            },
        }
    );
    const [requirements, setRequirements] = useState<RequirementType[]>([]);

    useEffect(() => {
        if (!loading && data) {
            setRequirements(data.getAllRequirements);
        }
    }, [loading, data]);

    return (
        <Wrapper loading={loading}>
            {requirements.map((requirement) => (
                <Requirement requirement={requirement} key={requirement.id} onClick={() => {}} />
            ))}
        </Wrapper>
    );
};
