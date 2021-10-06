import { gql } from '@apollo/client';

export const DELETE_REQUIREMENT = gql`
    mutation deleteRequirement($requirementId: Float!, $employerId: Float!) {
        deleteRequirement(requirementId: $requirementId, employerId: $employerId) {
            id
        }
    }
`;
